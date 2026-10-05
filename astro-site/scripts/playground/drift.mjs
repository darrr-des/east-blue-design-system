#!/usr/bin/env node
/**
 * drift.mjs — is any built Playground component out of date with Figma?
 *
 *   node scripts/playground/drift.mjs [slug …]     (npm run playground:drift)
 *
 * Reports only. It never rebuilds and never writes to public/playground — a
 * component is rebuilt by running build.mjs for it, deliberately, so a Figma
 * edit can never silently change what the site documents.
 *
 * Two modes, because Figma has no per-node version:
 *
 *   (default)  compares the FILE's version. Cheap — one request per Figma file —
 *              but on a shared working file any edit anywhere trips every
 *              component, so `may-differ` means "cannot rule it out", not "changed".
 *   --deep     re-reads each component into a temp dir and compares the payload
 *              hash. Definitive, and the only thing that can say `current`.
 *              Costs a full Figma read per component; public/playground is never
 *              written.
 *
 * Each component is one of:
 *   current     the re-read hashes the same (--deep), or the file has not moved
 *   changed     --deep re-read differs — the component really did change
 *   may-differ  the file moved since the build; run --deep for an answer
 *   edited      the payload no longer hashes to meta.hash — someone hand-edited
 *               generated data, which build.mjs would overwrite
 *   unbuilt     older build with no provenance recorded; rebuild to gain it
 *
 * FIGMA_ACCESS_TOKEN is read from astro-site/.env and never printed.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const DATA = path.join(root, 'public/playground');

const env = fs.readFileSync(path.join(root, '.env'), 'utf8');
const TOKEN = (env.match(/^FIGMA_ACCESS_TOKEN=(.*)$/m) || [])[1]?.trim();
if (!TOKEN) { console.error('FIGMA_ACCESS_TOKEN missing from astro-site/.env'); process.exit(1); }

const argv = process.argv.slice(2);
const deep = argv.includes('--deep');
const args = argv.filter((a) => a !== '--deep');
const run = args.length ? args : fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
if (!run.length) { console.error('no component data in ' + DATA + ' — run build.mjs first'); process.exit(1); }

// One request per Figma file, not per component: 25 components share 2 files.
const fileCache = new Map();
async function fileMeta(fileKey) {
  if (fileCache.has(fileKey)) return fileCache.get(fileKey);
  const p = fetch(`https://api.figma.com/v1/files/${fileKey}?depth=1`, { headers: { 'X-Figma-Token': TOKEN } })
    .then(async (r) => {
      if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
      const j = await r.json();
      return { version: j.version, lastModified: j.lastModified, name: j.name };
    });
  fileCache.set(fileKey, p);
  return p;
}

const hashOf = (d) => createHash('sha256')
  .update(JSON.stringify({ properties: d.properties, variants: d.variants, svgs: d.svgs, images: d.images }))
  .digest('hex')
  .slice(0, 16);

const rows = [];
for (const slug of run) {
  const file = path.join(DATA, `${slug}.json`);
  if (!fs.existsSync(file)) { rows.push({ slug, state: 'missing', note: `no ${slug}.json` }); continue; }
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  const m = d.meta || {};

  if (m.hash && hashOf(d) !== m.hash) {
    rows.push({ slug, name: m.name, state: 'edited', note: 'payload does not match meta.hash' });
    continue;
  }
  if (!m.figma?.version) {
    rows.push({ slug, name: m.name, state: 'unbuilt', note: `built ${m.read || '?'} without provenance` });
    continue;
  }
  let live;
  try { live = await fileMeta(m.fileKey); }
  catch (e) { rows.push({ slug, name: m.name, state: 'unknown', note: `Figma read failed: ${e.message}` }); continue; }

  if (live.version === m.figma.version) {
    rows.push({ slug, name: m.name, state: 'current', note: `built ${m.read} · file unchanged since` });
    continue;
  }
  if (!deep) {
    rows.push({ slug, name: m.name, state: 'may-differ', note: `file moved ${m.figma.lastModified} → ${live.lastModified} · run --deep` });
    continue;
  }
  // Re-read into a temp dir and compare the payload hash. This is the only
  // check that distinguishes "someone edited this component" from "someone
  // edited something else in the same file".
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pg-drift-'));
  try {
    execFileSync(process.execPath, [path.join(here, 'build.mjs'), slug, m.fileKey, m.setId, '--out', tmp], { cwd: root, stdio: 'pipe' });
    const fresh = JSON.parse(fs.readFileSync(path.join(tmp, `${slug}.json`), 'utf8'));
    rows.push(fresh.meta.hash === m.hash
      ? { slug, name: m.name, state: 'current', note: `re-read matches · file moved for other reasons` }
      : { slug, name: m.name, state: 'changed', note: `payload differs — ${m.hash} → ${fresh.meta.hash}` });
  } catch (e) {
    rows.push({ slug, name: m.name, state: 'unknown', note: `re-read failed: ${String(e.stderr || e.message).trim().split('\n').pop()}` });
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

const order = { edited: 0, changed: 1, 'may-differ': 2, unknown: 3, unbuilt: 4, missing: 5, current: 6 };
rows.sort((a, b) => order[a.state] - order[b.state] || a.slug.localeCompare(b.slug));
const mark = { current: '✓', changed: '✗', 'may-differ': '~', edited: '✗', unbuilt: '·', missing: '✗', unknown: '?' };

console.log(`\nPlayground drift — ${rows.length} component(s) · ${fileCache.size} Figma file(s)` + (deep ? ' · deep re-read' : ' · file-version check (add --deep to be sure)') + '\n');
for (const r of rows) console.log(`  ${mark[r.state]} ${r.state.padEnd(8)} ${(r.name || r.slug).padEnd(28)} ${r.note}`);

const tally = rows.reduce((a, r) => ((a[r.state] = (a[r.state] || 0) + 1), a), {});
console.log('\n' + Object.entries(tally).map(([k, v]) => `${k} ${v}`).join(' · '));
const needsWork = rows.filter((r) => r.state !== 'current');
if (needsWork.length) {
  console.log('\nrebuild a component with:');
  for (const r of needsWork.slice(0, 5)) {
    const d = JSON.parse(fs.readFileSync(path.join(DATA, `${r.slug}.json`), 'utf8'));
    console.log(`  node scripts/playground/build.mjs ${r.slug} ${d.meta.fileKey} ${d.meta.setId}`);
  }
  if (needsWork.length > 5) console.log(`  … and ${needsWork.length - 5} more`);
}
// Reporting tool: a stale component is information, not a broken build.
process.exit(0);
