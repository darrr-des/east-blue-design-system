#!/usr/bin/env node
/**
 * Figma baseline exporter — fetches one PNG per component spec card.
 *
 * Reads each component's `meta.node` AND `style.specCards[].node` from
 * `src/content/components/<slug>.json` and calls Figma REST
 * `GET /v1/images?ids=<node>&scale=2` for each.
 *
 * Output:
 *   tests/figma-reference/<slug>.png           — full component-set (visual reference, human review)
 *   tests/figma-reference/<slug>__<key>.png    — one per spec card (compare against live render)
 *
 * Usage:
 *   npm run baselines:refresh                  # every component, all spec cards
 *   npm run baselines:refresh -- button        # one component
 *   npm run baselines:refresh -- toast,modal   # several
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/* ── Load .env without dotenv dep ───────────────────────────────── */
function loadEnv(envPath) {
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, 'utf8');
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    if (!process.env[m[1]]) process.env[m[1]] = val;
  }
}
loadEnv(path.join(ROOT, '.env'));
loadEnv(path.join(ROOT, '..', '.env'));

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY || 'HwWDwPit2xJjDH4zszOZ5o';

if (!TOKEN) {
  console.error('ERROR: FIGMA_ACCESS_TOKEN missing.');
  console.error('Create astro-site/.env with:');
  console.error('  FIGMA_ACCESS_TOKEN=figd_xxxxxxxxxxxxxxxx');
  process.exit(1);
}

/* ── Build (slug, cardKey, nodeId) targets ────────────────────── */
const DATA_DIR = path.join(ROOT, 'src/content/components');
const argv = process.argv.slice(2);
const requested = argv.length ? argv.flatMap((a) => a.split(',')).filter(Boolean) : null;

function readComponent(filePath) {
  /* src/content/components/<slug>.json — the CMS files. */
  const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const slug = path.basename(filePath, '.json');
  const metaNode = d.meta?.node || null;
  const specCards = (d.style?.specCards || []).filter((c) => c.node).map((c) => ({ cardKey: c.cardKey, node: c.node }));

  return { slug, metaNode, specCards };
}

const ALL = fs
  .readdirSync(DATA_DIR)
  /* sample-* is the framework reference page on sample data — no Figma node. */
  .filter((f) => f.endsWith('.json') && !f.startsWith('sample-'))
  .map((f) => readComponent(path.join(DATA_DIR, f)))
  .filter((x) => x);

const COMPONENTS = requested ? ALL.filter((x) => requested.includes(x.slug)) : ALL;

if (requested && COMPONENTS.length === 0) {
  console.error(`No components matched: ${requested.join(', ')}`);
  process.exit(1);
}

/* Build flat list of all targets (component-set + each spec card). */
const TARGETS = [];
for (const comp of COMPONENTS) {
  if (comp.metaNode) {
    TARGETS.push({ slug: comp.slug, kind: 'live', node: comp.metaNode });
  }
  for (const card of comp.specCards) {
    if (card.node && card.node !== comp.metaNode) {
      TARGETS.push({ slug: comp.slug, kind: 'card', cardKey: card.cardKey, node: card.node });
    }
  }
}

console.log(`Exporting ${TARGETS.length} baseline(s) at 2x scale (${COMPONENTS.length} component(s))…`);

const OUT_DIR = path.join(ROOT, 'tests/figma-reference');
fs.mkdirSync(OUT_DIR, { recursive: true });

/* ── Figma /v1/images is rate-limited — batch 10 ids per call ──── */
async function fetchImageUrls(nodeIds) {
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(nodeIds.join(','))}&scale=2&format=png`;
  const res = await fetch(url, { headers: { 'X-Figma-Token': TOKEN } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API ${res.status}: ${body.slice(0, 200)}`);
  }
  const json = await res.json();
  if (json.err) throw new Error(`Figma API error: ${json.err}`);
  return json.images;
}

async function downloadPng(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download ${res.status}`);
  fs.writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
}

/* Sanitize cardKey for filesystem use — replace any char that isn't
   alphanumeric, hyphen, underscore, or period with `-`. Collapses runs of
   hyphens. Strips leading/trailing hyphens. */
function sanitize(s) {
  return s
    .replace(/[^a-zA-Z0-9_.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function fileNameFor(target) {
  return target.kind === 'live'
    ? `${target.slug}.png`
    : `${target.slug}__${sanitize(target.cardKey)}.png`;
}

const BATCH = 10;
let completed = 0;
const failed = [];

for (let i = 0; i < TARGETS.length; i += BATCH) {
  const batch = TARGETS.slice(i, i + BATCH);
  const nodeIds = batch.map((t) => t.node);
  process.stdout.write(`\n[${i + 1}–${i + batch.length}/${TARGETS.length}] `);
  let images;
  try {
    images = await fetchImageUrls(nodeIds);
  } catch (err) {
    console.error(`batch failed: ${err.message}`);
    batch.forEach((t) => failed.push(fileNameFor(t)));
    continue;
  }
  for (const t of batch) {
    const fileName = fileNameFor(t);
    const dest = path.join(OUT_DIR, fileName);
    const url = images[t.node];
    if (!url) {
      console.error(`\n  ✘ ${fileName} (${t.node}) — no image`);
      failed.push(fileName);
      continue;
    }
    try {
      await downloadPng(url, dest);
      completed++;
      process.stdout.write('.');
    } catch (err) {
      console.error(`\n  ✘ ${fileName} ${err.message}`);
      failed.push(fileName);
    }
  }
}

console.log(`\n\n✓ Saved ${completed} baseline(s) to ${path.relative(ROOT, OUT_DIR)}/`);
if (failed.length) {
  console.error(`✘ Failed: ${failed.length}`);
  failed.forEach((f) => console.error(`  ${f}`));
  process.exit(1);
}
