#!/usr/bin/env node
/* Audit: which components have a "Color State" (colorsTables) wired up?
   Outputs a list grouped by status:
     ✓ has colorsTables (with row+column count)
     × missing colorsTables but has specCards (gap to fill)
     – cardless (intentionally no Style tab — verdict ∈ {remove, consolidate, product-layer}) */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(ROOT, 'src', 'data', 'components');

const SKIP = new Set(['_index.ts', 'types.ts', '_helpers.ts']);
/* The proxy stands in for any local consts / helper functions referenced
   in the data file. Helper calls like `buildStatelessColorsTable({...})`
   must evaluate to something close enough to the real ColorsTable that
   the row/column counters work; non-helper references (consts like
   accordionDemoControls) just need to be spread-friendly empties.

   Strategy: every property access returns a "smart sentinel" that is
   simultaneously: (a) callable — when invoked, returns its first arg
   plus a synthesized `columns` field so input object → ColorsTable; and
   (b) iterable — spreads to nothing, so `[...maybeArray]` works. */
function makeSentinel() {
  const fn = function (input) {
    if (input && typeof input === 'object' && Array.isArray(input.rows)) {
      /* Mimic build*ColorsTable output shape so the audit can read columns. */
      const columns = Array.isArray(input.columns)
        ? input.columns
        : Array.isArray(input.modes) ? input.modes : ['Default'];
      const rows = input.rows.map((r) => ({
        role: r.role,
        token: r.token,
        values: Array.isArray(r.values) ? r.values : ['Default'],
      }));
      return { title: input.title, columns, rows };
    }
    return input ?? [];
  };
  fn[Symbol.iterator] = function* () {};
  return fn;
}
const sentinel = makeSentinel();
const proxyEnv = new Proxy({}, { get: () => sentinel, has: () => true });

function loadComponent(slug) {
  const file = path.join(DATA_DIR, slug + '.ts');
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) throw new Error('No exported object literal found in ' + slug);
  return new Function('proxy', `with (proxy) { return ${m[1]}; }`)(proxyEnv);
}

const slugs = fs.readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.ts') && !SKIP.has(f))
  .map((f) => f.replace(/\.ts$/, ''))
  .sort();

const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);

const results = { withTable: [], missing: [], cardless: [], errors: [] };

for (const slug of slugs) {
  let data;
  try { data = loadComponent(slug); }
  catch (e) { results.errors.push({ slug, err: e.message }); continue; }

  const verdict = (data?.meta?.badges || []).find((b) => /^(keep|fix|restructure|consolidate|product-layer|remove)$/.test(b.kind))?.kind;
  const cards = data?.style?.specCards || [];
  const tables = data?.style?.colorsTables || [];

  const cardCount = cards.length;
  const tableCount = tables.length;
  const totalRows = tables.reduce((s, t) => s + (t.rows?.length || 0), 0);
  const cols = tables[0]?.columns?.join(', ') || '';

  if (cardCount === 0 && CARDLESS_VERDICTS.has(verdict)) {
    results.cardless.push({ slug, verdict });
    continue;
  }
  if (cardCount === 0) {
    /* No spec cards at all but verdict isn't cardless — flag as missing */
    results.missing.push({ slug, verdict: verdict || '?', cardCount, tableCount, reason: 'no specCards' });
    continue;
  }
  if (tableCount === 0) {
    results.missing.push({ slug, verdict: verdict || '?', cardCount, tableCount, reason: 'no colorsTables' });
    continue;
  }
  results.withTable.push({ slug, verdict: verdict || '?', cardCount, tableCount, totalRows, cols });
}

const total = slugs.length;
const counted = results.withTable.length + results.missing.length + results.cardless.length;

console.log(`\nComponents scanned: ${total}`);
console.log(`  ✓  has colorsTables       ${results.withTable.length}`);
console.log(`  ×  missing colorsTables   ${results.missing.length}`);
console.log(`  –  cardless (by verdict)  ${results.cardless.length}`);
if (results.errors.length) console.log(`  !  parse errors          ${results.errors.length}`);

console.log('\n──────── ✓ HAS COLORS TABLES ────────');
for (const r of results.withTable) {
  console.log(`  ${r.slug.padEnd(34)}  ${String(r.tableCount).padStart(2)} table(s) · ${String(r.totalRows).padStart(2)} rows · cols: ${r.cols}`);
}

console.log('\n──────── × MISSING COLORS TABLES ────────');
for (const r of results.missing) {
  console.log(`  ${r.slug.padEnd(34)}  cards=${r.cardCount}  verdict=${r.verdict}  (${r.reason})`);
}

console.log('\n──────── – CARDLESS (intentional) ────────');
for (const r of results.cardless) {
  console.log(`  ${r.slug.padEnd(34)}  verdict=${r.verdict}`);
}

if (results.errors.length) {
  console.log('\n──────── ! PARSE ERRORS ────────');
  for (const r of results.errors) console.log(`  ${r.slug}: ${r.err}`);
}
