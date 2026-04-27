#!/usr/bin/env node
/**
 * Inventory of live previews — for the live-preview-vs-Figma audit.
 * Outputs a markdown table with one row per component:
 *   - slug · name · Figma node · current rendering hint
 *
 * Hints flag obvious red flags so we can prioritize:
 *   - "no preview"      — empty livePreviewHtml
 *   - "raster"          — uses <img src="…png|jpg">
 *   - "inline-style"    — heavy use of style="…" (vs CSS classes)
 *   - "svg-only"        — preview is just static SVG (no interactivity)
 *   - "interactive"     — has demo-panel controls (likely working preview)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

function classify(live) {
  if (!live || live.replace(/<[^>]+>/g, '').trim().length < 10) return 'no preview';
  const hasRaster = /<img[^>]+src="[^"]+\.(png|jpg|jpeg)/i.test(live);
  const hasControls = /demo-panel|onchange="|oninput="|onclick="/.test(live);
  const inlineStyleCount = (live.match(/style="/g) || []).length;
  const isSvgOnly = /^[\s\S]*<svg[\s\S]*<\/svg>[\s\S]*$/.test(live) &&
                    !/<div[\s\S]*<\/div>/.test(live.replace(/<svg[\s\S]*<\/svg>/, ''));

  const tags = [];
  if (hasControls) tags.push('interactive');
  if (hasRaster) tags.push('raster');
  if (isSvgOnly) tags.push('svg-only');
  if (inlineStyleCount > 5) tags.push(`inline-style×${inlineStyleCount}`);
  return tags.length ? tags.join(', ') : 'plain';
}

const rows = [];
for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  rows.push({
    slug,
    name: data.meta?.name || slug,
    node: data.meta?.node || '',
    figmaUrl: data.meta?.figmaUrl || '',
    family: data.meta?.navGroup || '—',
    classification: classify(data.overview?.livePreviewHtml || ''),
  });
}

// Markdown table
console.log('| Slug | Name | Family | Node | Hint |');
console.log('|---|---|---|---|---|');
for (const r of rows) {
  console.log(`| \`${r.slug}\` | ${r.name} | ${r.family} | \`${r.node}\` | ${r.classification} |`);
}
console.log('');
console.log(`Total: ${rows.length} components`);

const buckets = rows.reduce((acc, r) => {
  for (const tag of r.classification.split(', ')) {
    acc[tag] = (acc[tag] || 0) + 1;
  }
  return acc;
}, {});
console.log('');
console.log('Counts by hint:');
for (const [tag, n] of Object.entries(buckets).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${tag.padEnd(20)} ${n}`);
}
