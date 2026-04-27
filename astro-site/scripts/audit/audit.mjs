#!/usr/bin/env node
/*
 * Audit the migrated component data for parser misses / completeness issues.
 * Run: node astro-site/scripts/audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const DATA_DIR = path.join(ROOT, 'src/data/components');

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

const rows = [];

for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) {
    console.warn(`! couldn't parse ${slug}`);
    continue;
  }
  let data;
  try {
    // eslint-disable-next-line no-new-func
    data = (new Function('return ' + m[1]))();
  } catch (e) {
    console.warn(`! eval failed for ${slug}: ${e.message}`);
    continue;
  }

  const issues = [];
  if (!data.meta?.description) issues.push('no comp-desc');
  if (!data.meta?.badges?.length) issues.push('no badges');
  if (!data.meta?.navIconSvg) issues.push('no nav icon');

  if (data.overview.traits.length === 0) issues.push('no traits');
  else if (data.overview.traits.length !== 4) issues.push(`traits=${data.overview.traits.length} (expect 4)`);
  if (data.overview.behavior.length === 0) issues.push('no behavior');
  if (data.overview.resolved.length === 0 && data.overview.open.length === 0) issues.push('no issues at all');

  // Spec cards
  const cards = data.style?.specCards || [];
  if (cards.length === 0) issues.push('no spec cards');
  let cardsMissingPreview = 0;
  let cardsMissingSwift = 0;
  let cardsMissingSections = 0;
  for (const c of cards) {
    if (!c.previewHtml) cardsMissingPreview++;
    if (!c.swift) cardsMissingSwift++;
    if (!c.sections || c.sections.length === 0) cardsMissingSections++;
  }
  if (cardsMissingPreview) issues.push(`${cardsMissingPreview}/${cards.length} cards missing preview`);
  if (cardsMissingSwift && cards.length > 0) issues.push(`${cardsMissingSwift}/${cards.length} cards missing swift`);
  if (cardsMissingSections && cards.length > 0) issues.push(`${cardsMissingSections}/${cards.length} cards missing sections`);

  // Code tab
  const c = data.code;
  if (!c.installation?.blocks?.length) issues.push('no installation');
  if (!c.propertyMapping?.rows?.length) issues.push('no property mapping');
  if (!c.scorecard?.length) issues.push('no scorecard');
  if (!c.variants?.rows?.length) issues.push('no variants inventory');

  // Changelog
  if (!data.changelog?.length) issues.push('no changelog');

  rows.push({
    slug,
    name: data.meta?.name,
    desc: (data.meta?.description || '').replace(/<[^>]+>/g, '').slice(0, 70),
    descLen: (data.meta?.description || '').replace(/<[^>]+>/g, '').length,
    traits: data.overview.traits.length,
    behavior: data.overview.behavior.length,
    resolved: data.overview.resolved.length,
    open: data.overview.open.length,
    cards: cards.length,
    cardIssues: cardsMissingPreview + cardsMissingSwift + cardsMissingSections,
    chl: (data.changelog || []).length,
    issues,
  });
}

// Print report
const cols = ['slug', 'cards', 'tr', 'bh', 'res', 'opn', 'chl', 'descLen', 'issues'];
console.log(cols.map((c) => c.padEnd(c === 'slug' ? 30 : c === 'descLen' ? 8 : 4)).join(' '));
console.log('-'.repeat(140));
let cleanCount = 0;
for (const r of rows) {
  const line = [
    r.slug.padEnd(30),
    String(r.cards).padEnd(4),
    String(r.traits).padEnd(4),
    String(r.behavior).padEnd(4),
    String(r.resolved).padEnd(4),
    String(r.open).padEnd(4),
    String(r.chl).padEnd(4),
    String(r.descLen).padEnd(8),
    r.issues.length ? r.issues.join(', ') : '✓ clean',
  ].join(' ');
  console.log(line);
  if (!r.issues.length) cleanCount++;
}

console.log('-'.repeat(140));
console.log(`${cleanCount}/${rows.length} components fully clean`);
console.log(`Components with >1 issue: ${rows.filter((r) => r.issues.length > 1).length}`);
console.log(`Avg desc length: ${Math.round(rows.reduce((a, r) => a + r.descLen, 0) / rows.length)} chars`);
console.log(`Long descs (>250 chars): ${rows.filter((r) => r.descLen > 250).map((r) => `${r.slug} (${r.descLen})`).join(', ') || 'none'}`);
