#!/usr/bin/env node
/*
 * Remove the non-functional `.demo-figma-panel` (property dropdowns/toggles)
 * from every component's livePreviewHtml and any spec-card previewHtml that
 * captured one. The original site wired those controls to per-component JS
 * (setAccDemoType, updateSpecCard, …) that never moved into the Astro module,
 * so they look interactive but aren't. Strip them so the previews stay visual
 * but don't mislead users.
 *
 * Run: node astro-site/scripts/strip-demo-controls.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseHTML } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const ASTRO_DIR = path.resolve(path.dirname(__filename), '..');
const DATA_DIR = path.join(ASTRO_DIR, 'src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

function stripFigmaPanel(html) {
  if (!html || typeof html !== 'string') return html;
  if (!html.includes('demo-figma-panel')) return html;

  // Wrap in a container so node-html-parser handles fragments cleanly
  const root = parseHTML(`<div>${html}</div>`, { comment: false });
  const wrapper = root.firstChild;

  // Remove every .demo-figma-panel
  wrapper.querySelectorAll('.demo-figma-panel').forEach((el) => el.remove());

  // If a .demo-layout now has only the preview child, unwrap any flex styling
  // by leaving the layout div in place (CSS handles single-column gracefully).

  return wrapper.innerHTML.trim();
}

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

let updatedFiles = 0;
let strippedFromLive = 0;
let strippedFromCards = 0;

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const file = path.join(DATA_DIR, f);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }

  let changed = false;

  if (data.overview?.livePreviewHtml && data.overview.livePreviewHtml.includes('demo-figma-panel')) {
    const before = data.overview.livePreviewHtml;
    data.overview.livePreviewHtml = stripFigmaPanel(before);
    if (data.overview.livePreviewHtml !== before) {
      strippedFromLive++;
      changed = true;
    }
  }

  if (Array.isArray(data.style?.specCards)) {
    for (const card of data.style.specCards) {
      if (card.previewHtml && card.previewHtml.includes('demo-figma-panel')) {
        const before = card.previewHtml;
        card.previewHtml = stripFigmaPanel(before);
        if (card.previewHtml !== before) {
          strippedFromCards++;
          changed = true;
        }
      }
    }
  }

  if (changed) {
    const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(file, out, 'utf8');
    updatedFiles++;
    console.log(`✓ ${slug}`);
  }
}

console.log('');
console.log(`Updated ${updatedFiles} files`);
console.log(`Stripped panel from: ${strippedFromLive} live previews + ${strippedFromCards} spec cards`);
