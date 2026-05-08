#!/usr/bin/env node
/**
 * sync-previews — capture each component's JS-rendered preview HTML and
 * write it back into the corresponding `<slug>.ts` data file.
 *
 * Single render path: the `_buildXxx()` JS function is the source of truth.
 * The static HTML in `<slug>.ts` mirrors what JS produces.
 *
 * Usage (dev server must be running):
 *   npm run sync-previews                   # all 79 components
 *   npm run sync-previews -- callout        # one
 *   npm run sync-previews -- toast,modal    # several
 */
import { chromium } from 'playwright';
import { parse as parseHtml } from 'node-html-parser';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/data/components');
const BASE_URL = process.env.PREVIEW_BASE_URL || 'http://localhost:4321';

/* ── Slug list ─────────────────────────────────────────────────── */
const argv = process.argv.slice(2);
const requested = argv.length ? argv.flatMap((a) => a.split(',')).filter(Boolean) : null;
const ALL_SLUGS = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.ts') && !f.startsWith('_'))
  .map((f) => f.replace(/\.ts$/, ''))
  .sort();
const TARGETS = requested ? ALL_SLUGS.filter((s) => requested.includes(s)) : ALL_SLUGS;

if (requested && TARGETS.length === 0) {
  console.error(`No components matched: ${requested.join(', ')}`);
  process.exit(1);
}
console.log(`Syncing ${TARGETS.length} component preview(s) from ${BASE_URL}…`);

/* ── Reachability ─────────────────────────────────────────────── */
try {
  const res = await fetch(`${BASE_URL}/`, { method: 'HEAD' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
} catch (err) {
  console.error(`\nERROR: cannot reach dev server at ${BASE_URL}.`);
  console.error('Start it with "npm run dev" in another terminal first.');
  console.error(`Underlying: ${err.message}`);
  process.exit(1);
}

/* ── Playwright ───────────────────────────────────────────────── */
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

async function captureForSlug(slug) {
  await page.goto(`${BASE_URL}/components/${slug}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  /* Spec cards live in the Style tab — activate it so JS init has populated
     them before we capture innerHTML. */
  const styleTab = page.locator('.comp-tab[data-tab-id="style"]').first();
  if ((await styleTab.count()) > 0) {
    await styleTab.click();
    await page.waitForTimeout(250);
  } else {
    await page.waitForTimeout(250);
  }

  return page.evaluate(() => {
    const out = { liveById: null, specsById: {} };
    const live = document.querySelector('[id$="-demo-preview"]');
    if (live) {
      out.liveById = { id: live.id, html: live.innerHTML };
    }
    document.querySelectorAll('.spec-preview-body[id]').forEach((el) => {
      out.specsById[el.id] = el.innerHTML;
    });
    return out;
  });
}

/* ── .ts rewriter — DOM-aware via node-html-parser ──────────── */

/* The .ts files are TypeScript, but every previewHtml/livePreviewHtml field
   value is a single-line JSON-escaped HTML string. We:
   1. Find the field's line in the .ts source.
   2. Extract the JSON string between the first `"` after the field name
      and its matching closing `"`.
   3. JSON.parse to decode \" \\ etc.
   4. Parse with node-html-parser, find the target id, swap innerHTML.
   5. Re-stringify the HTML, JSON.stringify the result, write line back.
*/

function extractJsonStringValueFromLine(line, fieldName) {
  /* Match e.g. `    "livePreviewHtml": "...",` and capture the quoted value
     including its quotes. We can't use plain JSON.parse on the line because
     of TypeScript trailing commas. Instead, locate the first `"` after the
     field name then find its matching close. JSON strings escape `"` as
     `\"`, so we walk the string honouring backslash. */
  const fieldMatch = line.match(new RegExp(`"${fieldName}"\\s*:\\s*`));
  if (!fieldMatch) return null;
  const after = fieldMatch.index + fieldMatch[0].length;
  if (line[after] !== '"') return null;
  let i = after + 1;
  while (i < line.length) {
    const ch = line[i];
    if (ch === '\\') {
      i += 2;
      continue;
    }
    if (ch === '"') break;
    i++;
  }
  if (i >= line.length) return null;
  const start = after; /* opening " */
  const end = i; /* closing " */
  const jsonString = line.slice(start, end + 1); /* includes both quotes */
  return { jsonString, start, end };
}

/* Update one previewHtml field in a line. Returns the new line if replaced,
   else null. `findIds` is the list of candidate id values to search for inside
   the HTML; first match wins. */
function updatePreviewLine(line, fieldName, captured /* {idMap, liveById} */) {
  const ext = extractJsonStringValueFromLine(line, fieldName);
  if (!ext) return null;
  let html;
  try {
    html = JSON.parse(ext.jsonString);
  } catch {
    return null;
  }
  /* Parse and locate target ID. */
  const root = parseHtml(html, { lowerCaseTagName: false, comment: false });
  let touched = false;

  /* Live preview field. */
  if (fieldName === 'livePreviewHtml' && captured.liveById) {
    const target = root.querySelector(`#${captured.liveById.id}`);
    if (target && target.innerHTML !== captured.liveById.html) {
      target.set_content(captured.liveById.html);
      touched = true;
    }
  }
  /* Spec card field — find any id in our captured map that's present. */
  if (fieldName === 'previewHtml') {
    for (const [id, innerHtml] of Object.entries(captured.specsById)) {
      const target = root.querySelector(`#${id}`);
      if (target && target.innerHTML !== innerHtml) {
        target.set_content(innerHtml);
        touched = true;
        break;
      }
    }
  }

  if (!touched) return null;
  const newHtml = root.toString();
  const newJson = JSON.stringify(newHtml);
  return line.slice(0, ext.start) + newJson + line.slice(ext.end + 1);
}

let updatedFiles = 0;
let failures = [];

for (const slug of TARGETS) {
  const filePath = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(filePath)) {
    console.warn(`  · skip ${slug} — no .ts file`);
    continue;
  }
  process.stdout.write(`  · ${slug} … `);
  let captured;
  try {
    captured = await captureForSlug(slug);
  } catch (err) {
    console.error(`✘ capture failed: ${err.message}`);
    failures.push({ slug, err: err.message });
    continue;
  }

  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  let liveDone = false;
  let specsDone = 0;
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('"livePreviewHtml"')) {
      const updated = updatePreviewLine(line, 'livePreviewHtml', captured);
      if (updated !== null) {
        lines[i] = updated;
        liveDone = true;
        modified = true;
      }
    } else if (line.includes('"previewHtml"')) {
      const updated = updatePreviewLine(line, 'previewHtml', captured);
      if (updated !== null) {
        lines[i] = updated;
        specsDone++;
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'));
    updatedFiles++;
    console.log(`✓ live=${liveDone ? 'yes' : 'no'} specs=${specsDone}/${Object.keys(captured.specsById).length}`);
  } else {
    console.log('(no changes)');
  }
}

await browser.close();
console.log(`\n✓ Updated ${updatedFiles} of ${TARGETS.length} component file(s).`);
if (failures.length) {
  console.error(`\n✘ ${failures.length} capture failures:`);
  failures.forEach((f) => console.error(`  ${f.slug}: ${f.err}`));
  process.exit(1);
}
