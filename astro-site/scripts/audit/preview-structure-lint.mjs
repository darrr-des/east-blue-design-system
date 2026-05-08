#!/usr/bin/env node
/* Preview structure lint — guards against the recurring "missing demo-layout
   / demo-figma-panel" regression.

   Every component's `livePreviewHtml` (Overview tab) and per-card
   `previewHtml` (Style tab) must include the canonical wrappers so the
   live preview + interactive demo controls render. This script scans
   every src/data/components/<slug>.ts and surfaces any component whose
   live preview is missing required pieces.

   Cardless components (verdict ∈ {remove, consolidate, product-layer})
   are exempt because their preview is intentionally minimal.

   Usage: node scripts/audit/preview-structure-lint.mjs
   Exit code: 0 if all clean, 1 if any failures (so CI/precommit can use it). */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(ROOT, 'src', 'data', 'components');
const SKIP_FILES = new Set(['_index.ts', 'types.ts', '_helpers.ts']);
const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);

/* Canonical wrappers — every Overview live preview must contain ALL of these. */
const REQUIRED_LIVE = [
  { class: 'demo-layout',       why: 'outer 2-column wrapper (preview + figma panel)' },
  { class: 'demo-preview',      why: 'left column — the rendered component' },
  { class: 'demo-figma-panel',  why: 'right column — interactive demo controls' },
];

/* Per-card previewHtml: no canonical wrapper class to enforce (components
   use wildly different inline markup), but every spec card MUST have a
   `previewHtml` field with non-empty content. Without it, the Style tab
   spec card jumps straight from description to Properties/Colors/Layout/
   Typography sections with no preview rendering. */

const slugs = fs.readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.ts') && !SKIP_FILES.has(f))
  .map((f) => f.replace(/\.ts$/, ''))
  .sort();

const results = { ok: [], fail: [], cardlessSkipped: [] };

for (const slug of slugs) {
  const file = path.join(DATA_DIR, slug + '.ts');
  const raw = fs.readFileSync(file, 'utf8');

  /* Detect verdict so we can skip cardless components. */
  const verdictMatch = raw.match(/"kind":\s*"(keep|fix|restructure|consolidate|product-layer|remove)"/);
  const verdict = verdictMatch?.[1];
  if (verdict && CARDLESS_VERDICTS.has(verdict)) {
    /* Component-set may still be intentionally cardless. Check spec cards
       count — if zero, it's truly cardless and we skip. */
    const cardCount = (raw.match(/"cardKey":/g) || []).length;
    if (cardCount === 0) {
      results.cardlessSkipped.push({ slug, verdict });
      continue;
    }
  }

  /* Pull the livePreviewHtml string. It's JSON-encoded, so wrappers appear
     as `class=\"demo-layout\"` inside the source. */
  const livePreviewMatch = raw.match(/"livePreviewHtml":\s*"((?:\\.|[^"\\])*)"/);
  const livePreview = livePreviewMatch?.[1] || '';
  const missingLive = REQUIRED_LIVE
    .filter((req) => !livePreview.includes(`class=\\"${req.class}\\"`))
    .map((req) => req.class);

  /* Each spec card must have a non-empty previewHtml so the Style tab
     spec card actually renders a preview above the Properties section.
     Each spec card SHOULD also have demoControls so the preview is
     interactive (matches the Overview demo panel). */
  const cardCount = (raw.match(/"cardKey":/g) || []).length;
  const previewHtmlCount = (raw.match(/"previewHtml":\s*"/g) || []).length;
  const demoControlsCount = (raw.match(/demoControls:\s*[a-zA-Z\[]|"demoControls":\s*[\[a-zA-Z]/g) || []).length;
  const previewHtmlGap = cardCount - previewHtmlCount;
  const demoControlsGap = cardCount - demoControlsCount;

  if (missingLive.length === 0 && previewHtmlGap <= 0 && demoControlsGap <= 0) {
    results.ok.push({ slug });
  } else {
    results.fail.push({ slug, missingLive, cardCount, previewHtmlCount, previewHtmlGap, demoControlsCount, demoControlsGap });
  }
}

console.log(`\nPreview structure lint — ${slugs.length} components scanned`);
console.log(`  ✓  passing               ${results.ok.length}`);
console.log(`  ✗  failing               ${results.fail.length}`);
console.log(`  –  cardless skipped       ${results.cardlessSkipped.length}`);

if (results.fail.length === 0) {
  console.log('\nAll non-cardless components have the canonical demo-layout / demo-preview / demo-figma-panel structure.');
  process.exit(0);
}

console.log('\n──────── ✗ FAILING COMPONENTS ────────');
for (const r of results.fail) {
  console.log(`\n  ${r.slug}`);
  if (r.missingLive.length) {
    console.log(`    Overview livePreviewHtml missing: ${r.missingLive.join(', ')}`);
    for (const cls of r.missingLive) {
      const why = REQUIRED_LIVE.find((x) => x.class === cls)?.why;
      console.log(`      · .${cls}  — ${why}`);
    }
  }
  if (r.previewHtmlGap > 0) {
    console.log(`    Style-tab previewHtml gap: ${r.cardCount} card(s) but only ${r.previewHtmlCount} previewHtml — ${r.previewHtmlGap} card(s) render no preview above their Properties section.`);
  }
  if (r.demoControlsGap > 0) {
    console.log(`    Style-tab demoControls gap: ${r.cardCount} card(s) but only ${r.demoControlsCount} demoControls — ${r.demoControlsGap} card(s) render a preview with no interactive controls.`);
  }
}

console.log('\nFix by adding the missing wrapper(s) inside the affected `livePreviewHtml` / `previewHtml` strings.');
console.log('Canonical structure (Overview):');
console.log('  <div class="demo-layout">');
console.log('    <div class="demo-preview" id="…">…</div>');
console.log('    <div class="demo-figma-panel">');
console.log('      <div class="demo-panel-section">');
console.log('        <div class="demo-panel-heading">Properties</div>');
console.log('        <!-- demo-panel-row controls -->');
console.log('      </div>');
console.log('    </div>');
console.log('  </div>');

process.exit(1);
