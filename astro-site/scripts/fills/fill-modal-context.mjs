#!/usr/bin/env node
/* Add an inContextHtml placeholder div to modal.ts so the demo JS can render
 * all 7 Figma variants horizontally inside it. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const FILE = path.resolve(path.dirname(__filename), '../../src/data/components/modal.ts');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

const raw = fs.readFileSync(FILE, 'utf8');
const m = raw.match(/= ({[\s\S]*});\s*$/);
if (!m) { console.error('parse failed'); process.exit(1); }
const data = (new Function('return ' + m[1]))();

data.overview.inContextHtml = '<div id="modal-context-preview"></div>';
data.overview.inContextNote = 'The 7 Figma component-set variants — transaction_v1, transaction_v2, with-icon (1 + 2 vertical), default (1, 2-horizontal, 2-vertical). Matches node 18507:71705.';

const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(data.meta.slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(FILE, out, 'utf8');
console.log('Updated modal.ts inContextHtml + inContextNote');
