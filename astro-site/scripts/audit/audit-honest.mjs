#!/usr/bin/env node
/* HONEST audit — counts cards as "complete" only if BOTH:
 *   - All 4 DES sections present (Properties + Colors + Layout + Typography)
 *   - DEV mode populated (swift AND compose both >= 20 chars of plain text)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const REQUIRED = ['Properties', 'Colors', 'Layout', 'Typography'];
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

let totalCards = 0;
let bothComplete = 0;
let desOnly = 0;
let devOnly = 0;
let neither = 0;
const componentScores = {};

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  const cards = data.style?.specCards || [];
  let compComplete = 0;
  for (const c of cards) {
    totalCards++;
    const labels = (c.sections || []).map((s) => (s.label || '').toLowerCase());
    const desOk = REQUIRED.every((r) => labels.includes(r.toLowerCase()));
    const sLen = (c.swift || '').replace(/<[^>]+>/g, '').trim().length;
    const cLen = (c.compose || '').replace(/<[^>]+>/g, '').trim().length;
    const devOk = sLen >= 20 && cLen >= 20;
    if (desOk && devOk) { bothComplete++; compComplete++; }
    else if (desOk) desOnly++;
    else if (devOk) devOnly++;
    else neither++;
  }
  componentScores[slug] = { total: cards.length, complete: compComplete, name: data.meta?.name };
}

console.log(`Card-level (HONEST — DES + DEV both required):`);
console.log(`  ${bothComplete}/${totalCards} cards genuinely complete (${Math.round(bothComplete/totalCards*100)}%)`);
console.log(`  ${desOnly} cards have DES but no DEV`);
console.log(`  ${devOnly} cards have DEV but missing DES`);
console.log(`  ${neither} cards missing both`);
console.log('');

const fullyComplete = Object.entries(componentScores).filter(([,v]) => v.total > 0 && v.complete === v.total);
console.log(`Components fully complete: ${fullyComplete.length}/${Object.keys(componentScores).length}`);
fullyComplete.forEach(([slug, v]) => console.log(`  ✓ ${slug.padEnd(30)} ${v.complete}/${v.total}`));
