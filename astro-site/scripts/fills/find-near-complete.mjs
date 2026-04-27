#!/usr/bin/env node
/* Find spec cards that are ONE section away from 100%. These are the
 * highest-leverage quick wins — usually need only Colors. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const REQUIRED = ['Properties', 'Colors', 'Layout', 'Typography'];

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

const oneAway = []; // cards missing exactly 1 required section
const twoAway = [];

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  const cards = data.style?.specCards || [];
  for (const c of cards) {
    const labels = (c.sections || []).map((s) => (s.label || '').toLowerCase());
    const missing = REQUIRED.filter((r) => !labels.includes(r.toLowerCase()));
    if (missing.length === 1) {
      oneAway.push({ slug, cardKey: c.cardKey, title: c.title, missing: missing[0] });
    } else if (missing.length === 2) {
      twoAway.push({ slug, cardKey: c.cardKey, title: c.title, missing });
    }
  }
}

console.log(`=== ONE section away (${oneAway.length} cards) ===`);
const byMissing = {};
for (const c of oneAway) {
  byMissing[c.missing] = (byMissing[c.missing] || []);
  byMissing[c.missing].push(c);
}
for (const [k, v] of Object.entries(byMissing)) {
  console.log(`\nMissing ${k} (${v.length} cards):`);
  v.forEach((c) => console.log(`  ${c.slug.padEnd(28)} → ${c.cardKey}`));
}

console.log(`\n=== TWO sections away (${twoAway.length} cards) ===`);
const grouped = {};
for (const c of twoAway) {
  const key = c.missing.sort().join('+');
  grouped[key] = (grouped[key] || []);
  grouped[key].push(c);
}
for (const [k, v] of Object.entries(grouped)) {
  console.log(`\nMissing ${k} (${v.length} cards):`);
  v.slice(0, 10).forEach((c) => console.log(`  ${c.slug.padEnd(28)} → ${c.cardKey}`));
  if (v.length > 10) console.log(`  …and ${v.length - 10} more`);
}
