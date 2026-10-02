#!/usr/bin/env node
/* Preview structure lint — guards the two things a page needs to draw a
   component: the Overview live preview's canonical wrappers, and a
   server-rendered `previewHtml` on every spec card.

   Data: src/content/components/<slug>.json (the CMS files).
   Cardless components (verdict ∈ remove / consolidate / product-layer) have
   no Style tab and are skipped.

   Usage: node scripts/audit/preview-structure-lint.mjs
   Exit code: 0 if all clean, 1 if any failures (CI runs it as advisory). */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(ROOT, 'src', 'content', 'components');
const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);

/* Canonical wrappers — every Overview live preview must contain ALL of these. */
const REQUIRED_LIVE = [
  { class: 'demo-layout',       why: 'outer 2-column wrapper (preview + figma panel)' },
  { class: 'demo-preview',      why: 'left column — the rendered component' },
  { class: 'demo-figma-panel',  why: 'right column — interactive demo controls' },
];

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).sort();
const results = { ok: [], fail: [], cardlessSkipped: [] };

for (const f of files) {
  const slug = f.replace(/\.json$/, '');
  const d = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'));
  const verdict = (d.meta?.badges || []).map((b) => b.kind).find((k) => CARDLESS_VERDICTS.has(k));
  if (verdict) { results.cardlessSkipped.push({ slug, verdict }); continue; }

  const live = d.overview?.livePreviewHtml || '';
  const missingLive = REQUIRED_LIVE
    .filter((req) => !new RegExp(`class="[^"]*\\b${req.class}\\b[^"]*"`).test(live))
    .map((req) => req.class);

  const cards = d.style?.specCards || [];
  const noPreview = cards.filter((c) => !(c.previewHtml || '').trim()).map((c) => c.title);
  /* `hasControls: false` is the CMS form of an absent demoControls field —
     an unreviewed gap. A card with nothing to control keeps hasControls
     true with an empty list (STYLE-REVIEW-GUIDE §3.2). */
  const noControls = cards.filter((c) => c.hasControls === false).map((c) => c.title);

  if (missingLive.length === 0 && noPreview.length === 0 && noControls.length === 0) results.ok.push({ slug });
  else results.fail.push({ slug, missingLive, noPreview, noControls, cardCount: cards.length });
}

console.log(`\nPreview structure lint — ${files.length} components scanned`);
console.log(`  ✓  passing               ${results.ok.length}`);
console.log(`  ✗  failing               ${results.fail.length}`);
console.log(`  –  cardless skipped       ${results.cardlessSkipped.length}`);

if (results.fail.length === 0) {
  console.log('\nEvery Overview preview has the canonical wrappers and every spec card has a server-rendered preview.');
  process.exit(0);
}

console.log('\n──────── ✗ FAILING COMPONENTS ────────');
for (const r of results.fail) {
  console.log(`\n  ${r.slug}`);
  if (r.missingLive.length) {
    console.log(`    Overview livePreviewHtml missing: ${r.missingLive.join(', ')}`);
    for (const cls of r.missingLive) console.log(`      · .${cls}  — ${REQUIRED_LIVE.find((x) => x.class === cls)?.why}`);
  }
  if (r.noPreview.length) console.log(`    Style-tab previewHtml missing on ${r.noPreview.length} of ${r.cardCount} card(s): ${r.noPreview.join(', ')}`);
  if (r.noControls.length) console.log(`    Style-tab demo panel undeclared on: ${r.noControls.join(', ')} — declare an empty control list if the card has nothing to control.`);
}
console.log('\nCanonical structure (Overview):');
console.log('  <div class="demo-layout">');
console.log('    <div class="demo-preview" id="…">…</div>');
console.log('    <div class="demo-figma-panel"><div class="demo-panel-section"><div class="demo-panel-heading">Properties</div>…</div></div>');
console.log('  </div>');
process.exit(1);
