#!/usr/bin/env node
/*
 * Bulk update meta.description in src/data/components/<slug>.ts files.
 * Pass a JSON map: { "<slug>": "<new description>", ... } as the only arg
 * (or via DESC_MAP_FILE env var).
 *
 * Strategy: parse the .ts file's data object via eval, mutate
 * data.meta.description, re-serialize the whole object with JSON.stringify
 * (matches the parser's output style — same as `npm run migrate` produces).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const DATA_DIR = path.join(ROOT, 'src/data/components');

const arg = process.argv[2];
if (!arg) {
  console.error('Usage: update-descs.mjs <json-map> | DESC_MAP_FILE=<path>');
  process.exit(1);
}

let map;
try {
  if (fs.existsSync(arg)) {
    map = JSON.parse(fs.readFileSync(arg, 'utf8'));
  } else {
    map = JSON.parse(arg);
  }
} catch (e) {
  console.error('Failed to parse description map:', e.message);
  process.exit(1);
}

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

let updated = 0;
let missing = 0;

for (const [slug, newDesc] of Object.entries(map)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) {
    console.warn(`! ${slug}: no file`);
    missing++;
    continue;
  }
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) {
    console.warn(`! ${slug}: couldn't parse`);
    missing++;
    continue;
  }
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch (e) {
    console.warn(`! ${slug}: eval failed: ${e.message}`);
    missing++;
    continue;
  }

  if (!data.meta) {
    console.warn(`! ${slug}: no meta`);
    missing++;
    continue;
  }

  data.meta.description = newDesc;

  const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(file, out, 'utf8');
  updated++;
  console.log(`✓ ${slug} (${newDesc.length} chars)`);
}

console.log(`\nUpdated: ${updated} | Missing: ${missing}`);
