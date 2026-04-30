#!/usr/bin/env node
/**
 * Mechanical migration for `src/data/components/*.ts`:
 *
 *   1. Add `slug` to each spec-card section based on its label
 *      Properties → 'props' · Colors → 'colors' · Layout → 'layout'
 *      Typography → 'typo'
 *
 *   2. Consolidate the legacy paired token rows
 *        { "key": "X",       "value": "#hex",  "mono": true },
 *        { "key": "X token", "value": "path",  "mono": true },
 *      into a single row:
 *        { "key": "X", "value": "#hex", "token": "path" }
 *
 *   3. Add `data.style.heading = "Styles"` if the field is missing.
 *
 * The script is idempotent — running twice produces no further diff —
 * because each transform only matches rows / blocks that haven't yet
 * been migrated.
 *
 * Run from the repo root:
 *   node astro-site/scripts/utils/migrate-spec-cards.mjs            # dry run
 *   node astro-site/scripts/utils/migrate-spec-cards.mjs --apply    # write
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '../../src/data/components');
const APPLY = process.argv.includes('--apply');

const LABEL_TO_SLUG = {
  Properties: 'props',
  Colors:     'colors',
  Layout:     'layout',
  Typography: 'typo',
};

/* ── Transform 1: add slug to sections ─────────────────────────────── */
function addSectionSlug(src) {
  let out = src;
  for (const [label, slug] of Object.entries(LABEL_TO_SLUG)) {
    const re = new RegExp(
      `("label":\\s*"${label}")(\\s*,\\s*)("rows":)`,
      'g'
    );
    out = out.replace(re, (m, labelPart, sep, rowsPart) => {
      // Skip if `slug` already follows on the next ~80 chars
      const cursor = m;
      if (/"slug"\s*:/.test(cursor)) return m;
      return `${labelPart},\n            "slug": "${slug}",${sep.replace(/^,/, '')}${rowsPart}`;
    });
  }
  return out;
}

/* ── Transform 2: consolidate "X" + "X token" paired rows ─────────── */
function consolidatePairedRows(src) {
  // Match two consecutive rows where the second is "<first key> token"
  // Captures:
  //   $1 = key            ($1 must NOT contain newlines)
  //   $2 = hex/value
  //   $3 = the inner of mono: true OR optional mono field on first row
  //   $4 = token path value
  const re = /\{\s*"key":\s*"([^"\n]+)",\s*"value":\s*"([^"\n]+)"(\s*,\s*"mono":\s*(?:true|false))?\s*\}\s*,\s*\{\s*"key":\s*"\1 token",\s*"value":\s*"([^"\n]+)"(\s*,\s*"mono":\s*(?:true|false))?\s*\}/g;
  return src.replace(
    re,
    (_m, key, val, _mono1, token) =>
      `{ "key": "${key}", "value": "${val}", "token": "${token}" }`
  );
}

/* ── Transform 3: add data.style.heading if missing ────────────────── */
function addStyleHeading(src) {
  // Find the `"style": {` block, peek inside for "heading":
  const styleOpenRe = /("style":\s*\{)(\s*)/;
  const m = src.match(styleOpenRe);
  if (!m) return src;
  // Determine where the style block ends (rough — match to balanced })
  const startIdx = m.index + m[0].length;
  // Look for "heading" within the next ~600 chars (style block is small at the top)
  const probe = src.slice(startIdx, startIdx + 800);
  if (/"heading"\s*:/.test(probe)) return src; // already has one
  // Insert heading right after `"style": {`
  return src.replace(styleOpenRe, `$1\n    "heading": "Styles",$2`);
}

/* ── Main ──────────────────────────────────────────────────────────── */
// Skip files that already contain a `"slug":` anywhere — those have
// been hand-cascaded already (button, avatar, etc.). The regex
// transforms aren't 100 % position-aware so re-running on a partly
// migrated file can produce duplicates.
const allFiles = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.ts') && f !== '_index.ts');

// Look for section-level slug values (`"slug": "props"` etc.) — not the
// `meta.slug` which every component has.
const SECTION_SLUG_RE = /"slug":\s*"(props|colors|layout|typo)"/;
const files = allFiles.filter((f) => {
  const txt = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  return !SECTION_SLUG_RE.test(txt);
});

const skipped = allFiles.length - files.length;
console.log(`Skipping ${skipped} already-cascaded files (have "slug":).`);

const summary = [];
let totalChanged = 0;

for (const file of files) {
  const full = path.join(DATA_DIR, file);
  const before = fs.readFileSync(full, 'utf8');

  let after = before;
  after = addSectionSlug(after);
  after = consolidatePairedRows(after);
  after = addStyleHeading(after);

  if (after === before) {
    summary.push({ file, changed: false });
    continue;
  }

  totalChanged++;
  const slugAdded = (after.match(/"slug":/g) || []).length - (before.match(/"slug":/g) || []).length;
  const tokensAdded = (after.match(/"token":/g) || []).length - (before.match(/"token":/g) || []).length;
  const headingAdded = !/"heading":/.test(before) && /"heading":/.test(after);

  summary.push({
    file,
    changed: true,
    slugAdded,
    tokensAdded,
    headingAdded,
  });

  if (APPLY) fs.writeFileSync(full, after);
}

/* ── Report ────────────────────────────────────────────────────────── */
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'} — migrate-spec-cards`);
console.log(`Scanned ${files.length} files in ${DATA_DIR}`);
console.log(`Files that ${APPLY ? 'were' : 'would be'} changed: ${totalChanged}\n`);

const changed = summary.filter((s) => s.changed);
if (changed.length) {
  console.log('Per-file summary (slugs added · tokens consolidated · heading inserted):');
  for (const s of changed) {
    console.log(
      `  ${s.file.padEnd(36)} ` +
        `+${s.slugAdded} slugs · ` +
        `+${s.tokensAdded} tokens · ` +
        `${s.headingAdded ? '+heading' : '  no heading'}`
    );
  }
}

if (!APPLY) {
  console.log('\nRun with `--apply` to write the changes.');
}
