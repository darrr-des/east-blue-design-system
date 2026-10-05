#!/usr/bin/env node
/* Audit: which components have a colors table?
     ✓ has colorsTables (with row + column count)
     × missing colorsTables but has spec cards (gap to fill)
     – cardless (no Style tab — verdict ∈ remove / consolidate / product-layer)
   Data: src/content/components/<slug>.json (the CMS files). */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(ROOT, 'src', 'content', 'components');
const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);

const results = { withTable: [], missing: [], cardless: [] };
const slugs = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, '')).sort();

for (const slug of slugs) {
  const d = JSON.parse(fs.readFileSync(path.join(DATA_DIR, slug + '.json'), 'utf8'));
  const verdict = (d.meta?.badges || []).map((b) => b.kind).find((k) => /^(keep|fix|restructure|consolidate|product-layer|remove)$/.test(k));
  if (CARDLESS_VERDICTS.has(verdict)) { results.cardless.push({ slug, verdict }); continue; }
  const cards = d.style?.specCards || [];
  const tables = d.style?.colorsTables || [];
  if (cards.length === 0) { results.missing.push({ slug, verdict: verdict || '?', cardCount: 0, tableCount: 0, reason: 'no specCards' }); continue; }
  if (tables.length === 0) { results.missing.push({ slug, verdict: verdict || '?', cardCount: cards.length, tableCount: 0, reason: 'no colorsTables' }); continue; }
  results.withTable.push({ slug, verdict: verdict || '?', cardCount: cards.length, tableCount: tables.length, totalRows: tables.reduce((s, t) => s + (t.rows?.length || 0), 0), cols: tables[0]?.columns?.join(', ') || '' });
}

console.log(`\nComponents scanned: ${slugs.length}`);
console.log(`  ✓  has colorsTables       ${results.withTable.length}`);
console.log(`  ×  missing colorsTables   ${results.missing.length}`);
console.log(`  –  cardless (by verdict)  ${results.cardless.length}`);
console.log('\n──────── ✓ HAS COLORS TABLES ────────');
for (const r of results.withTable) console.log(`  ${r.slug.padEnd(34)}  ${String(r.tableCount).padStart(2)} table(s) · ${String(r.totalRows).padStart(2)} rows · cols: ${r.cols}`);
console.log('\n──────── × MISSING COLORS TABLES ────────');
for (const r of results.missing) console.log(`  ${r.slug.padEnd(34)}  cards=${r.cardCount}  verdict=${r.verdict}  (${r.reason})`);
console.log('\n──────── – CARDLESS (intentional) ────────');
for (const r of results.cardless) console.log(`  ${r.slug.padEnd(34)}  verdict=${r.verdict}`);
