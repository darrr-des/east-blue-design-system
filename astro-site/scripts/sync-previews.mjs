#!/usr/bin/env node
/**
 * sync-previews — capture each component's JS-rendered preview HTML and
 * write it back into the corresponding src/content/components/<slug>.json.
 *
 * Single render path: the `_buildXxx()` JS function is the source of truth.
 * The static HTML in the JSON mirrors what JS produces.
 *
 * Usage (dev server must be running):
 *   npm run sync-previews                   # all 79 components
 *   npm run sync-previews -- callout        # one
 *   npm run sync-previews -- toast,modal    # several
 */
import { chromium } from 'playwright';
import { parse as parseHtml } from 'node-html-parser';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/content/components');
const BASE_URL = process.env.PREVIEW_BASE_URL || 'http://localhost:4321';

/* ── Slug list ─────────────────────────────────────────────────── */
const argv = process.argv.slice(2);
const requested = argv.length ? argv.flatMap((a) => a.split(',')).filter(Boolean) : null;
const ALL_SLUGS = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => f.replace(/\.json$/, ''))
  .sort();
const TARGETS = requested ? ALL_SLUGS.filter((s) => requested.includes(s)) : ALL_SLUGS;

if (requested && TARGETS.length === 0) {
  console.error(`No components matched: ${requested.join(', ')}`);
  process.exit(1);
}
console.log(`Syncing ${TARGETS.length} component preview(s) from ${BASE_URL}…`);

/* ── Reachability ─────────────────────────────────────────────── */
try {
  const res = await fetch(`${BASE_URL}/`, { method: 'HEAD' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
} catch (err) {
  console.error(`\nERROR: cannot reach dev server at ${BASE_URL}.`);
  console.error('Start it with "npm run dev" in another terminal first.');
  console.error(`Underlying: ${err.message}`);
  process.exit(1);
}

/* ── Playwright ───────────────────────────────────────────────── */
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

async function captureForSlug(slug) {
  await page.goto(`${BASE_URL}/components/${slug}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  /* Spec cards live in the Style tab — activate it so JS init has populated
     them before we capture innerHTML. */
  const styleTab = page.locator('.comp-tab[data-tab-id="style"]').first();
  if ((await styleTab.count()) > 0) {
    await styleTab.click();
    await page.waitForTimeout(250);
  } else {
    await page.waitForTimeout(250);
  }

  return page.evaluate(() => {
    const out = { liveById: null, specsById: {} };
    const live = document.querySelector('[id$="-demo-preview"]');
    if (live) {
      out.liveById = { id: live.id, html: live.innerHTML };
    }
    document.querySelectorAll('.spec-preview-body[id]').forEach((el) => {
      out.specsById[el.id] = el.innerHTML;
    });
    return out;
  });
}

/* ── .ts rewriter — DOM-aware via node-html-parser ──────────── */

/* The .ts files are TypeScript, but every previewHtml/livePreviewHtml field
   value is a single-line JSON-escaped HTML string. We:
   1. Find the field's line in the .ts source.
   2. Extract the JSON string between the first `"` after the field name
      and its matching closing `"`.
   3. JSON.parse to decode \" \\ etc.
   4. Parse with node-html-parser, find the target id, swap innerHTML.
   5. Re-stringify the HTML, JSON.stringify the result, write line back.
*/

/* Replace the captured inner HTML inside one preview string. Returns the
   new HTML, or null when nothing changed. */
function updatePreviewHtml(html, fieldName, captured /* {liveById, specsById} */) {
  if (!html) return null;
  const root = parseHtml(html, { lowerCaseTagName: false, comment: false });
  let touched = false;
  if (fieldName === 'livePreviewHtml' && captured.liveById) {
    const target = root.querySelector(`#${captured.liveById.id}`);
    if (target && target.innerHTML !== captured.liveById.html) { target.set_content(captured.liveById.html); touched = true; }
  }
  if (fieldName === 'previewHtml') {
    for (const [id, innerHtml] of Object.entries(captured.specsById)) {
      const target = root.querySelector(`#${id}`);
      if (target && target.innerHTML !== innerHtml) { target.set_content(innerHtml); touched = true; break; }
    }
  }
  return touched ? root.toString() : null;
}

let updatedFiles = 0;
let failures = [];

for (const slug of TARGETS) {
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`  · skip ${slug} — no .json file`);
    continue;
  }
  process.stdout.write(`  · ${slug} … `);
  let captured;
  try {
    captured = await captureForSlug(slug);
  } catch (err) {
    console.error(`✘ capture failed: ${err.message}`);
    failures.push({ slug, err: err.message });
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let liveDone = false;
  let specsDone = 0;
  const live = updatePreviewHtml(data.overview?.livePreviewHtml || '', 'livePreviewHtml', captured);
  if (live !== null) { data.overview.livePreviewHtml = live; liveDone = true; }
  for (const card of data.style?.specCards || []) {
    const next = updatePreviewHtml(card.previewHtml || '', 'previewHtml', captured);
    if (next !== null) { card.previewHtml = next; specsDone++; }
  }

  if (liveDone || specsDone) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    updatedFiles++;
    console.log(`✓ live=${liveDone ? 'yes' : 'no'} specs=${specsDone}/${Object.keys(captured.specsById).length}`);
  } else {
    console.log('(no changes)');
  }
}

await browser.close();
console.log(`\n✓ Updated ${updatedFiles} of ${TARGETS.length} component file(s).`);
if (failures.length) {
  console.error(`\n✘ ${failures.length} capture failures:`);
  failures.forEach((f) => console.error(`  ${f.slug}: ${f.err}`));
  process.exit(1);
}
