#!/usr/bin/env node
/*
 * Per-component report on spec-card content gaps. For each component:
 * how many spec cards exist, how many have Colors/Layout/Typography sections,
 * and which sections are present vs missing. Grouped by navGroup family.
 *
 * Run: node astro-site/scripts/audit-spec-gaps.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ASTRO_DIR = path.resolve(path.dirname(__filename), '..');
const DATA_DIR = path.join(ASTRO_DIR, 'src/data/components');

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

const REQUIRED_SECTIONS = ['Properties', 'Colors', 'Layout', 'Typography'];

const byFamily = {};
const standalone = [];

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }

  const cards = data.style?.specCards || [];
  if (cards.length === 0) continue; // no cards at all — skip

  const cardSummaries = cards.map((c) => {
    const labels = (c.sections || []).map((s) => s.label);
    const has = REQUIRED_SECTIONS.reduce((acc, name) => {
      acc[name] = labels.some((l) => l && l.toLowerCase() === name.toLowerCase());
      return acc;
    }, {});
    return { key: c.cardKey || c.title, has };
  });

  const totalCards = cards.length;
  const fullyComplete = cardSummaries.filter((s) => REQUIRED_SECTIONS.every((r) => s.has[r])).length;
  const completeness = `${fullyComplete}/${totalCards}`;

  // Per-section coverage across the cards
  const sectionCounts = {};
  for (const r of REQUIRED_SECTIONS) {
    sectionCounts[r] = cardSummaries.filter((s) => s.has[r]).length;
  }

  const entry = { slug, name: data.meta.name, totalCards, fullyComplete, completeness, sectionCounts };

  const fam = data.meta.navGroup || null;
  if (fam) {
    if (!byFamily[fam]) byFamily[fam] = [];
    byFamily[fam].push(entry);
  } else {
    standalone.push(entry);
  }
}

function printRow(e) {
  const pct = Math.round((e.fullyComplete / e.totalCards) * 100);
  const bar = '█'.repeat(Math.round(pct / 10)).padEnd(10, '·');
  const sec = REQUIRED_SECTIONS.map((r) => `${r[0]}=${e.sectionCounts[r]}`).join(' ');
  return `  ${e.slug.padEnd(28)} ${e.completeness.padStart(5)}  ${bar} ${pct.toString().padStart(3)}%   ${sec}`;
}

console.log('Per-component spec-card completeness (each card = Props + Colors + Layout + Typography)\n');
console.log('Section legend: P=Properties C=Colors L=Layout T=Typography (count of cards that have it)\n');
console.log('STANDALONE');
standalone.forEach((e) => console.log(printRow(e)));
console.log('');
for (const fam of Object.keys(byFamily).sort()) {
  console.log(`${fam.toUpperCase()}`);
  byFamily[fam].forEach((e) => console.log(printRow(e)));
  console.log('');
}

const all = [...standalone, ...Object.values(byFamily).flat()];
const totalCards = all.reduce((a, e) => a + e.totalCards, 0);
const completeCards = all.reduce((a, e) => a + e.fullyComplete, 0);
console.log('────────────────────────────────────────────');
console.log(`TOTAL: ${completeCards}/${totalCards} fully-complete cards across ${all.length} components`);
const fullyDone = all.filter((e) => e.fullyComplete === e.totalCards).length;
const completelyEmpty = all.filter((e) => e.fullyComplete === 0).length;
console.log(`  ${fullyDone} components are fully complete (every card has all 4 sections)`);
console.log(`  ${completelyEmpty} components have ZERO cards with all 4 sections`);
