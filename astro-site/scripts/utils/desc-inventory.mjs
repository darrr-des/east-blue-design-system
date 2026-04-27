#!/usr/bin/env node
/*
 * Pull current comp-descriptions from all 79 .ts files,
 * sorted by length descending. Helps prioritize the cleanup sweep.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const DATA_DIR = path.join(ROOT, 'src/data/components');
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

const items = [];
for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  const desc = data.meta?.description || '';
  const text = desc.replace(/<[^>]+>/g, '');
  items.push({ slug, name: data.meta?.name, desc, text, len: text.length, navGroup: data.meta?.navGroup });
}

items.sort((a, b) => b.len - a.len);

const target = items.filter((i) => i.len > 250);
console.log(`Total components: ${items.length}`);
console.log(`Long descriptions (>250 chars): ${target.length}`);
console.log('');
for (const i of target) {
  console.log(`### ${i.slug} ${i.navGroup ? `[${i.navGroup}]` : ''} (${i.len} chars)`);
  console.log(i.text);
  console.log('');
}
