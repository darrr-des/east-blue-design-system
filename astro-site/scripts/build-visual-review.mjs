#!/usr/bin/env node
/**
 * Build a side-by-side visual review HTML page pairing every
 * `tests/figma-reference/*.png` with `tests/visual-baselines/*.png`.
 *
 * Output: `tests/.review/index.html` — open in browser to scan all 239
 * components for fidelity drift between Figma and our Chromium render.
 *
 * Usage:
 *   npm run review
 *   open astro-site/tests/.review/index.html
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REFERENCE_DIR = path.join(ROOT, 'tests/figma-reference');
const BASELINE_DIR = path.join(ROOT, 'tests/visual-baselines');
const OUT_DIR = path.join(ROOT, 'tests/.review');

fs.mkdirSync(OUT_DIR, { recursive: true });

/* Find all paired entries — anything in figma-reference that has a
   matching visual-baselines entry (or vice versa). */
const refFiles = fs.existsSync(REFERENCE_DIR)
  ? fs.readdirSync(REFERENCE_DIR).filter((f) => f.endsWith('.png'))
  : [];
const baseFiles = fs.existsSync(BASELINE_DIR)
  ? fs.readdirSync(BASELINE_DIR, { recursive: true })
      .filter((f) => typeof f === 'string' && f.endsWith('.png'))
  : [];

/* The Playwright snapshot path is something like
   visual.spec.ts-snapshots/<projectName>/<file>.png. We just want filenames
   that match a key in refFiles. */
const baseFilesByKey = new Map();
for (const f of baseFiles) {
  const basename = path.basename(f);
  baseFilesByKey.set(basename, f);
}

const allKeys = new Set([
  ...refFiles,
  ...baseFilesByKey.keys(),
]);

const rows = [...allKeys].sort().map((file) => {
  const slug = file.split('__')[0].replace(/\.png$/, '');
  const card = file.includes('__') ? file.split('__').slice(1).join('__').replace(/\.png$/, '') : '(live)';
  return {
    file,
    slug,
    card,
    refExists: refFiles.includes(file),
    baseExists: baseFilesByKey.has(file),
    basePath: baseFilesByKey.get(file),
  };
});

/* Group by slug for navigation. */
const groups = {};
for (const r of rows) {
  groups[r.slug] = groups[r.slug] || [];
  groups[r.slug].push(r);
}

const slugList = Object.keys(groups).sort();

/* Build HTML. */
let html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Visual Review — Figma vs. Chromium baseline</title>
<style>
  body { margin: 0; padding: 24px 32px 80px; font-family: 'Inter', system-ui, sans-serif; background: #0F1115; color: #E5E7EB; line-height: 1.5; }
  h1 { font-weight: 600; font-size: 24px; margin: 0 0 4px; color: #F9FAFB; }
  .lede { color: #9CA3AF; margin: 0 0 24px; max-width: 720px; }
  .toc { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px 0; border-bottom: 1px solid #1F2937; margin-bottom: 24px; position: sticky; top: 0; background: #0F1115; z-index: 1; }
  .toc a { color: #6EE7B7; text-decoration: none; font-size: 12px; padding: 4px 10px; border: 1px solid #1F2937; border-radius: 999px; }
  .toc a:hover { background: #064E3B; border-color: #10B981; }
  .group { margin-bottom: 48px; padding-top: 24px; border-top: 1px solid #1F2937; }
  .group h2 { margin: 0 0 16px; font-size: 18px; font-weight: 600; color: #F9FAFB; }
  .row { display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; align-items: start; padding: 16px 0; border-bottom: 1px solid #111827; }
  .label { font-size: 12px; color: #9CA3AF; }
  .label code { display: block; font-family: 'SF Mono', monospace; color: #E5E7EB; font-size: 12px; margin-top: 4px; word-break: break-all; }
  .img-wrap { background: #1F2937; border-radius: 6px; padding: 12px; display: flex; align-items: center; justify-content: center; min-height: 80px; }
  .img-wrap img { max-width: 100%; height: auto; display: block; image-rendering: -webkit-optimize-contrast; }
  .img-wrap .missing { color: #6B7280; font-style: italic; font-size: 12px; }
  .col-head { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #9CA3AF; padding: 8px 0; border-bottom: 1px solid #1F2937; }
  .legend { display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; padding: 0 0 8px; }
</style>
</head>
<body>
<h1>Visual Review — Figma reference vs. Chromium baseline</h1>
<p class="lede">Side-by-side diff between Figma master (left) and our self-rendered baseline (right). Use this to spot-check fidelity. Components where they differ visually need code fixes.</p>

<div class="toc">
${slugList.map((s) => `<a href="#${s}">${s}</a>`).join('\n')}
</div>

<div class="legend">
  <div></div>
  <div class="col-head">Figma reference</div>
  <div class="col-head">Our baseline (Chromium)</div>
</div>
`;

for (const slug of slugList) {
  html += `\n<div class="group" id="${slug}"><h2>${slug}</h2>`;
  for (const r of groups[slug]) {
    const refSrc = r.refExists ? `../figma-reference/${r.file}` : null;
    const baseSrc = r.baseExists ? `../visual-baselines/${r.basePath}` : null;
    html += `
  <div class="row">
    <div class="label">${r.card}<br><code>${r.file}</code></div>
    <div class="img-wrap">${refSrc ? `<img src="${refSrc}" alt="figma">` : `<span class="missing">no figma reference</span>`}</div>
    <div class="img-wrap">${baseSrc ? `<img src="${baseSrc}" alt="ours">` : `<span class="missing">no baseline yet</span>`}</div>
  </div>`;
  }
  html += `\n</div>`;
}

html += `\n</body></html>\n`;

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), html);
console.log(`✓ Wrote ${path.relative(ROOT, path.join(OUT_DIR, 'index.html'))}`);
console.log(`  ${rows.length} rows · ${slugList.length} components`);
console.log(`Open: open astro-site/tests/.review/index.html`);
