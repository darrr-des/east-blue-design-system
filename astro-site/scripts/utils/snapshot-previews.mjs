#!/usr/bin/env node
/*
 * Snapshot rendered spec-card previews from the legacy report.html.
 *
 * The original site fills `.spec-card-preview` divs at runtime via per-component
 * JS. This script opens report.html in headless Chromium, navigates to every
 * component panel, lets the JS render, captures each card's resulting innerHTML,
 * and writes those snapshots back into src/data/components/<slug>.ts as the
 * `previewHtml` field on matching spec cards.
 *
 * Result: every spec card in the Astro site shows a real visual instead of an
 * empty placeholder, with no per-component demo JS migration.
 *
 * Run: node astro-site/scripts/snapshot-previews.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const ASTRO_DIR = path.resolve(path.dirname(__filename), '..');
const REPO_ROOT = path.resolve(ASTRO_DIR, '..');
const DATA_DIR = path.join(ASTRO_DIR, 'src/data/components');
const PORT = 5179;

// ── Tiny static server so report.html runs over http:// (avoids file:// quirks) ──
function startServer() {
  const mime = {
    '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
    '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
    '.json': 'application/json',
  };
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = path.join(REPO_ROOT, urlPath === '/' ? 'report.html' : urlPath);
      // basic safety — don't serve outside repo
      if (!filePath.startsWith(REPO_ROOT)) { res.writeHead(403); res.end(); return; }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found: ' + filePath); return; }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

async function snapshotForSlug(page, slug) {
  // Click the sidebar nav to switch panel
  const navSel = `#nav-${slug}`;
  const exists = await page.$(navSel);
  if (!exists) return null;

  await page.evaluate((s) => {
    if (typeof showPanelById === 'function') showPanelById(s);
    else document.getElementById('nav-' + s)?.click();
  }, slug);

  // Wait for the panel to become active + a beat for any JS init
  try {
    await page.waitForFunction((s) => {
      const p = document.getElementById('panel-' + s);
      return p && p.classList.contains('active');
    }, slug, { timeout: 3000 });
  } catch {
    return null;
  }
  await page.waitForTimeout(250);

  // Capture spec-card previews + the live preview block
  return await page.evaluate((s) => {
    const out = { specCards: {}, livePreview: null };
    const panel = document.getElementById('panel-' + s);
    if (!panel) return out;

    // Per-spec-card previews
    panel.querySelectorAll('.spec-card[id]').forEach((card) => {
      const previewEl = card.querySelector('.spec-card-preview, .spec-preview-frame .spec-preview-body');
      if (!previewEl) return;
      const html = previewEl.innerHTML.trim();
      // Only keep substantive rendered content (filter out empty placeholders)
      if (html.length < 60) return;
      if (html.startsWith('<!--') && html.indexOf('-->') > 0 && html.replace(/<!--[\s\S]*?-->/g, '').trim().length < 30) return;
      out.specCards[card.id] = html;
    });

    // Live preview block — prefer the .demo-panel that has a .demo-figma-panel
    // inside (the interactive one). Some components have BOTH an "In Context"
    // panel and a "Live Preview" panel; we want the latter so the dropdowns
    // are present in the captured HTML.
    let demo = null;
    const demoPanels = panel.querySelectorAll('.demo-panel');
    for (const p of demoPanels) {
      if (p.querySelector('.demo-figma-panel')) {
        demo = p.querySelector('.demo-layout') || p;
        break;
      }
    }
    // Fallback to first .demo-layout / .demo-preview if no figma-panel found
    if (!demo) demo = panel.querySelector('.demo-panel .demo-layout, .demo-preview');
    if (demo) {
      const html = demo.outerHTML.trim();
      if (html.length > 60) out.livePreview = html;
    }
    return out;
  }, slug);
}

function readData(slug) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) return null;
  try {
    const data = (new Function('return ' + m[1]))();
    return { file, data };
  } catch { return null; }
}

function writeData(file, data, slug) {
  const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(file, out, 'utf8');
}

async function main() {
  console.log('Starting static server on http://127.0.0.1:' + PORT);
  const server = await startServer();

  console.log('Launching Chromium…');
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await ctx.newPage();

  console.log('Loading report.html…');
  await page.goto(`http://127.0.0.1:${PORT}/report.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#comp-list .nav-comp', { timeout: 10000 });
  await page.waitForTimeout(500);

  // Discover slugs from sidebar
  const allSlugs = await page.$$eval('#comp-list .nav-comp[id^="nav-"]', (els) =>
    els.map((el) => el.id.replace(/^nav-/, ''))
  );
  console.log(`Discovered ${allSlugs.length} components in sidebar.`);

  let updatedSlugs = 0;
  let totalCardSnapshots = 0;
  let totalLivePreviews = 0;
  let skipped = 0;

  for (const slug of allSlugs) {
    const ds = readData(slug);
    if (!ds) { skipped++; continue; }
    const { file, data } = ds;

    const snap = await snapshotForSlug(page, slug);
    if (!snap) { console.log(`- ${slug}: panel not found`); skipped++; continue; }

    let cardHits = 0;
    const cards = data.style?.specCards || [];
    for (const card of cards) {
      const html = snap.specCards[card.cardKey];
      if (html) {
        card.previewHtml = html;
        cardHits++;
      }
    }

    let liveHit = 0;
    if (snap.livePreview) {
      data.overview.livePreviewHtml = snap.livePreview;
      liveHit = 1;
      totalLivePreviews++;
    }

    if (cardHits > 0 || liveHit > 0) {
      writeData(file, data, slug);
      updatedSlugs++;
      totalCardSnapshots += cardHits;
      console.log(`✓ ${slug} — ${cardHits}/${cards.length} card previews${liveHit ? ' + live preview' : ''}`);
    } else {
      console.log(`- ${slug}: no rendered preview content`);
    }
  }

  await browser.close();
  server.close();

  console.log('');
  console.log(`Updated ${updatedSlugs}/${allSlugs.length} components`);
  console.log(`Captured ${totalCardSnapshots} spec-card previews + ${totalLivePreviews} live previews`);
  console.log(`Skipped: ${skipped}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
