#!/usr/bin/env node
/*
 * Extract each component's inline <script> block (the per-component demo logic)
 * from assessment-src/components/<slug>.html and write to
 * astro-site/public/scripts/demos/<slug>.js so the Astro [slug].astro page can
 * load it after the captured live-preview HTML is in the DOM.
 *
 * Run: node astro-site/scripts/extract-demos.mjs [<slug> ...]
 *      (no args = extract all)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '../..');
const SRC_DIR = path.join(ROOT, 'assessment-src/components');
const OUT_DIR = path.join(ROOT, 'astro-site/public/scripts/demos');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const args = process.argv.slice(2);
const targetSlugs = args.length ? args : null;

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.html'));
let extracted = 0;
let skipped = 0;

for (const f of files) {
  const slug = path.basename(f, '.html');
  if (targetSlugs && !targetSlugs.includes(slug)) continue;
  const raw = fs.readFileSync(path.join(SRC_DIR, f), 'utf8');
  // Find the LAST <script> ... </script> in the file (the demo block usually
  // sits at the bottom, after @section-end).
  const scriptRe = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let m;
  while ((m = scriptRe.exec(raw)) !== null) blocks.push(m[1]);
  if (blocks.length === 0) {
    skipped++;
    console.log(`- ${slug}: no <script>`);
    continue;
  }
  const code = blocks.join('\n\n/* ── next block ─────────────────────────────── */\n\n').trim();
  if (code.length < 30) {
    skipped++;
    continue;
  }
  // Wrap in IIFE? No — these scripts use globals (e.g. setAccDemoType) that
  // the live-preview HTML calls via inline onchange/onclick. They MUST stay
  // top-level so the global names are reachable.
  //
  // Astro view transitions don't re-fire DOMContentLoaded, so we also tap
  // astro:page-load and re-run any obvious init function (init…SpecCards or
  // _applyXxxDemo) when the user navigates to/from this page.
  const initFns = [];
  const initRe = /\bfunction\s+(init[A-Z][A-Za-z0-9]*)/g;
  let im;
  while ((im = initRe.exec(code)) !== null) initFns.push(im[1]);
  const applyRe = /\bfunction\s+(_apply[A-Z][A-Za-z0-9]*Demo)/g;
  while ((im = applyRe.exec(code)) !== null) initFns.push(im[1]);
  const initCalls = initFns.map((n) => `      if (typeof ${n} === 'function') ${n}();`).join('\n');
  const reInitBlock = initFns.length
    ? `\n\n/* ── Re-init after Astro view-transition swaps ─────────────── */\n(function(){\n  function reinit(){\n${initCalls}\n  }\n  document.addEventListener('astro:page-load', reinit);\n})();\n`
    : '';

  const out = `/* Auto-extracted from assessment-src/components/${f}.\n * Powers the live-preview dropdowns/toggles for the ${slug} component page.\n * Re-extract via: node astro-site/scripts/extract-demos.mjs ${slug}\n */\n${code}\n${reInitBlock}`;
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.js`), out, 'utf8');
  extracted++;
  console.log(`✓ ${slug} (${code.length} bytes)`);
}

console.log(`\nExtracted: ${extracted} | Skipped: ${skipped}`);
