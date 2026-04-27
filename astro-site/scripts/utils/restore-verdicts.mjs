#!/usr/bin/env node
/**
 * Restore the meta.verdict field on each component data file by parsing
 * the verdict-inline block out of the archived legacy HTML.
 *
 * The 2026-04-24 Astro migration carried over most of each component's
 * structure but dropped the verdict-inline content into nowhere. The
 * astro-site renderer (ComponentHeader.astro) and CSS (.verdict-inline*)
 * are still wired up — this script re-populates the data so the cards
 * appear again on every component page.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ARCHIVE_DIR = path.resolve(path.dirname(__filename), '../../../_archive_legacy_site/assessment-src/components');
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

if (!fs.existsSync(ARCHIVE_DIR)) {
  console.error('✖ archive not found at', ARCHIVE_DIR);
  process.exit(1);
}

const VERDICT_RE = /<div class="verdict-inline verdict-(\w+)">[\s\S]*?<div class="verdict-inline-title">([\s\S]*?)<\/div>[\s\S]*?<div class="verdict-inline-text">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/;

const archiveFiles = fs.readdirSync(ARCHIVE_DIR).filter((f) => f.endsWith('.html'));
const verdicts = new Map();
for (const f of archiveFiles) {
  const slug = f.replace(/\.html$/, '');
  const html = fs.readFileSync(path.join(ARCHIVE_DIR, f), 'utf8');
  const m = html.match(VERDICT_RE);
  if (!m) continue;
  // Cleanup: the verdict text often references in-page panel onclick handlers
  // (showPanelById('foo')) — strip those down to plain links pointing at the
  // new astro routes. Same for any anchor with `onclick=...`.
  let text = m[3].trim()
    .replace(/<a [^>]*onclick="showPanelById\(['"]([^'"]+)['"]\)[^>]*>/g, '<a href="/components/$1">')
    .replace(/\s*onclick="[^"]*"/g, '');
  verdicts.set(slug, {
    kind: m[1],
    title: m[2].trim(),
    text,
  });
}

console.log(`Found verdicts in ${verdicts.size} archive files.`);

// Update each astro data file
const dataFiles = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts');
let touched = 0;
let skipped = 0;
let alreadyHadVerdict = 0;

for (const f of dataFiles) {
  const slug = f.replace(/\.ts$/, '');
  const v = verdicts.get(slug);
  if (!v) { skipped++; continue; }

  const filePath = path.join(DATA_DIR, f);
  const raw = fs.readFileSync(filePath, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { skipped++; continue; }

  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { skipped++; continue; }

  // Skip if already has a verdict (don't clobber manual edits)
  if (data.meta?.verdict?.title) {
    alreadyHadVerdict++;
    continue;
  }

  data.meta = data.meta || {};
  data.meta.verdict = v;

  // Re-serialize
  const exportName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const out = `import type { ComponentData } from '../types';\n\nexport const ${exportName}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, out);
  touched++;
}

console.log(`✓ Updated ${touched} components with verdict cards`);
console.log(`  ${alreadyHadVerdict} already had a verdict (left alone)`);
console.log(`  ${skipped} skipped (no archive match or schema mismatch)`);
