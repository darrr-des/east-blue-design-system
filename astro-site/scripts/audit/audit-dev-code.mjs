#!/usr/bin/env node
/* Audit per-card DEV mode (swift + compose code blocks).
 * Reports cards with empty / missing / placeholder code. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

let total = 0;
let bothEmpty = 0;
let oneEmpty = 0;
let bothPresent = 0;
const empties = [];

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  const cards = data.style?.specCards || [];
  for (const c of cards) {
    total++;
    const swift = (c.swift || '').replace(/<[^>]+>/g, '').trim();
    const compose = (c.compose || '').replace(/<[^>]+>/g, '').trim();
    const sEmpty = swift.length < 20;
    const cEmpty = compose.length < 20;
    if (sEmpty && cEmpty) {
      bothEmpty++;
      empties.push({ slug, key: c.cardKey, sLen: swift.length, cLen: compose.length });
    } else if (sEmpty || cEmpty) {
      oneEmpty++;
    } else {
      bothPresent++;
    }
  }
}

console.log(`Total cards: ${total}`);
console.log(`  Both swift+compose present: ${bothPresent}`);
console.log(`  One missing:                 ${oneEmpty}`);
console.log(`  Both empty:                  ${bothEmpty}`);
console.log('');
console.log('Cards with NO DEV code (top 30):');
empties.slice(0, 30).forEach((e) => console.log(`  ${e.slug.padEnd(28)} → ${e.key}`));
if (empties.length > 30) console.log(`  …and ${empties.length - 30} more`);

// Per-component summary
const perComp = {};
for (const e of empties) perComp[e.slug] = (perComp[e.slug] || 0) + 1;
console.log('');
console.log('Components with empty DEV cards:');
Object.entries(perComp).sort((a,b) => b[1] - a[1]).forEach(([slug, n]) => console.log(`  ${slug.padEnd(28)} ${n}`));
