#!/usr/bin/env node
/* Comprehensive progress report — % completion at multiple granularities. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const REQUIRED = ['Properties', 'Colors', 'Layout', 'Typography'];
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

let totalCards = 0;
let fullyDone = 0;
let desOnly = 0;
let devOnly = 0;
let neither = 0;

const sectionCount = { Properties: 0, Colors: 0, Layout: 0, Typography: 0, swift: 0, compose: 0 };
const componentScores = {};
const totalComponents = files.length;

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  const cards = data.style?.specCards || [];

  let fullCnt = 0;
  for (const c of cards) {
    totalCards++;
    const labels = (c.sections || []).map((s) => (s.label || '').toLowerCase());
    const desOk = REQUIRED.every((r) => labels.includes(r.toLowerCase()));
    const sLen = (c.swift || '').replace(/<[^>]+>/g, '').trim().length;
    const cLen = (c.compose || '').replace(/<[^>]+>/g, '').trim().length;
    const devOk = sLen >= 20 && cLen >= 20;

    if (desOk && devOk) { fullyDone++; fullCnt++; }
    else if (desOk) desOnly++;
    else if (devOk) devOnly++;
    else neither++;

    for (const r of REQUIRED) {
      if (labels.includes(r.toLowerCase())) sectionCount[r]++;
    }
    if (sLen >= 20) sectionCount.swift++;
    if (cLen >= 20) sectionCount.compose++;
  }

  componentScores[slug] = {
    name: data.meta?.name || slug,
    total: cards.length,
    full: fullCnt,
  };
}

const fullyDoneComponents = Object.values(componentScores).filter((v) => v.total > 0 && v.full === v.total).length;
const startedComponents   = Object.values(componentScores).filter((v) => v.full > 0).length;
const noCardsComponents   = Object.values(componentScores).filter((v) => v.total === 0).length;
const emptyComponents     = Object.values(componentScores).filter((v) => v.total > 0 && v.full === 0).length;

const pct = (n, d) => d === 0 ? '0%' : `${Math.round((n / d) * 100)}%`;

console.log('────────────────────────────────────────────────────────');
console.log('  DOCUMENTATION COMPLETION REPORT');
console.log('────────────────────────────────────────────────────────');
console.log('');
console.log('  AT THE COMPONENT LEVEL');
console.log('────────────────────────────────────────────────────────');
console.log(`  Total components:                       ${totalComponents}`);
console.log(`  Fully complete (every card 100%):       ${fullyDoneComponents}    (${pct(fullyDoneComponents, totalComponents)})`);
console.log(`  Partially complete (some cards done):   ${startedComponents - fullyDoneComponents}    (${pct(startedComponents - fullyDoneComponents, totalComponents)})`);
console.log(`  Untouched (zero cards done):            ${emptyComponents}    (${pct(emptyComponents, totalComponents)})`);
console.log(`  Has no spec cards at all:               ${noCardsComponents}    (${pct(noCardsComponents, totalComponents)})`);
console.log('');

console.log('  AT THE CARD LEVEL');
console.log('────────────────────────────────────────────────────────');
console.log(`  Total spec cards:                       ${totalCards}`);
console.log(`  Both DES + DEV complete:                ${fullyDone}    (${pct(fullyDone, totalCards)})`);
console.log(`  DES sections only (no DEV):             ${desOnly}    (${pct(desOnly, totalCards)})`);
console.log(`  DEV only (DES gaps):                    ${devOnly}    (${pct(devOnly, totalCards)})`);
console.log(`  Both empty:                             ${neither}    (${pct(neither, totalCards)})`);
console.log('');

console.log('  PER-SECTION COVERAGE (across all 233 cards)');
console.log('────────────────────────────────────────────────────────');
for (const [sec, n] of Object.entries(sectionCount)) {
  const bar = '█'.repeat(Math.round((n / totalCards) * 40)).padEnd(40, '·');
  console.log(`  ${sec.padEnd(12)} ${bar}  ${n}/${totalCards} (${pct(n, totalCards)})`);
}
console.log('');

console.log('  ROADMAP REMAINING');
console.log('────────────────────────────────────────────────────────');
const cardsLeft = totalCards - fullyDone;
console.log(`  Cards still needing work:               ${cardsLeft}`);
console.log(`  Components needing work:                ${totalComponents - fullyDoneComponents - noCardsComponents}`);
console.log('');
