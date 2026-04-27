#!/usr/bin/env node
/* One-shot: inject Colors section into every Modal spec card.
 * Token values pulled from Figma via mcp__figma__get_variable_defs on 18507:71705.
 * Run: node astro-site/scripts/fill-modal-colors.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const FILE = path.resolve(path.dirname(__filename), '../../src/data/components/modal.ts');

const COLORS_SECTION = {
  label: 'Colors',
  rows: [
    { key: 'Surface',        value: '#FFFFFF', mono: true },
    { key: 'Surface token',  value: 'modal-popup/color/bg', mono: true },
    { key: 'Subtle surface', value: '#F6F9FD', mono: true },
    { key: 'Subtle token',   value: 'modal-popup/color/bg-subtle', mono: true },
    { key: 'Border',         value: '#E5EBF4', mono: true },
    { key: 'Border token',   value: 'modal-popup/color/border', mono: true },
    { key: 'Title',          value: '#0A2757', mono: true },
    { key: 'Title token',    value: 'modal-popup/color/label', mono: true },
    { key: 'Description',    value: '#6780A9', mono: true },
    { key: 'Desc token',     value: 'modal-popup/color/label-primary', mono: true },
    { key: 'Accent icon',    value: '#005CE5', mono: true },
    { key: 'Icon token',     value: 'modal-popup/color/icon-copy', mono: true },
    { key: 'Primary CTA bg', value: '#005CE5', mono: true },
    { key: 'CTA bg token',   value: 'button/primary/brand/enabled/bg', mono: true },
    { key: 'Primary CTA label', value: '#FFFFFF', mono: true },
    { key: 'Secondary CTA',  value: '#005CE5 (border + label)', mono: true },
    { key: 'Secondary token', value: 'button/secondary/brand/enabled/border', mono: true },
  ],
};

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

const raw = fs.readFileSync(FILE, 'utf8');
const m = raw.match(/= ({[\s\S]*});\s*$/);
if (!m) { console.error('parse failed'); process.exit(1); }
const data = (new Function('return ' + m[1]))();

let added = 0;
for (const card of data.style.specCards) {
  const has = (card.sections || []).some((s) => s.label && s.label.toLowerCase() === 'colors');
  if (has) {
    console.log(`- ${card.cardKey}: already has Colors`);
    continue;
  }
  // Insert Colors as the SECOND section (after Properties), so the order is
  // Properties → Colors → Layout → Typography to match other components.
  const sections = card.sections || [];
  const propsIdx = sections.findIndex((s) => /^properties$/i.test(s.label));
  const insertAt = propsIdx >= 0 ? propsIdx + 1 : 0;
  sections.splice(insertAt, 0, COLORS_SECTION);
  card.sections = sections;
  added++;
  console.log(`✓ ${card.cardKey}: inserted Colors at index ${insertAt}`);
}

const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(data.meta.slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(FILE, out, 'utf8');
console.log(`\nDone. Added Colors to ${added} card(s).`);
