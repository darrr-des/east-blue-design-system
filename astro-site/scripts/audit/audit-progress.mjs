#!/usr/bin/env node
/* Comprehensive progress report — % completion at multiple granularities. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const REQUIRED = ['Properties', 'Colors', 'Layout', 'Typography'];
// Verdicts where a component is intentionally cardless (deprecation / consolidation /
// product-screen scope). The infobox in overview.open + overview.recommendations
// already documents the canonical sibling — spec cards aren't expected.
const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);
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
  try {
    /* Eval the export object inside a `with` Proxy so any external identifier
       (e.g. `accordionDemoControls`) resolves to `[]` instead of throwing.
       This lets us parse files that reference helper consts declared above
       the export. */
    const proxyEnv = new Proxy({}, { get: () => [], has: () => true });
    data = (new Function('proxy', `with (proxy) { return ${m[1]}; }`))(proxyEnv);
  } catch { continue; }
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

  // Detect a verdict that makes a component intentionally cardless.
  const verdictKind = (data.meta?.badges || []).map((b) => b.kind).find((k) => CARDLESS_VERDICTS.has(k));
  componentScores[slug] = {
    name: data.meta?.name || slug,
    total: cards.length,
    full: fullCnt,
    cardlessByVerdict: !!verdictKind && cards.length === 0,
  };
}

const fullyDoneComponents = Object.values(componentScores).filter((v) => v.total > 0 && v.full === v.total).length;
const cardlessByVerdictCt = Object.values(componentScores).filter((v) => v.cardlessByVerdict).length;
const startedComponents   = Object.values(componentScores).filter((v) => v.full > 0).length;
const noCardsComponents   = Object.values(componentScores).filter((v) => v.total === 0 && !v.cardlessByVerdict).length;
const emptyComponents     = Object.values(componentScores).filter((v) => v.total > 0 && v.full === 0).length;
const completeComponents  = fullyDoneComponents + cardlessByVerdictCt;

const pct = (n, d) => d === 0 ? '0%' : `${Math.round((n / d) * 100)}%`;

console.log('────────────────────────────────────────────────────────');
console.log('  DOCUMENTATION COMPLETION REPORT');
console.log('────────────────────────────────────────────────────────');
console.log('');
console.log('  AT THE COMPONENT LEVEL');
console.log('────────────────────────────────────────────────────────');
console.log(`  Total components:                       ${totalComponents}`);
console.log(`  Fully complete (cards or by verdict):   ${completeComponents}    (${pct(completeComponents, totalComponents)})`);
console.log(`    └─ With full spec cards:              ${fullyDoneComponents}`);
console.log(`    └─ Intentionally cardless (verdict):  ${cardlessByVerdictCt}`);
console.log(`  Partially complete (some cards done):   ${startedComponents - fullyDoneComponents}    (${pct(startedComponents - fullyDoneComponents, totalComponents)})`);
console.log(`  Untouched (zero cards done):            ${emptyComponents}    (${pct(emptyComponents, totalComponents)})`);
console.log(`  Missing cards (no verdict reason):      ${noCardsComponents}    (${pct(noCardsComponents, totalComponents)})`);
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
console.log(`  Components needing work:                ${totalComponents - completeComponents - noCardsComponents}`);
console.log('');
