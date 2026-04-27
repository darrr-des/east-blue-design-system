#!/usr/bin/env node
/* Restore modal's In Context block to the standard ctx-placeholder pattern
 * (matching Checkbox/Badge/etc.) — a neutral mock-card SVG inside .ctx-wrap. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const FILE = path.resolve(path.dirname(__filename), '../../src/data/components/modal.ts');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

const PLACEHOLDER_SVG = `<div class="ctx-placeholder">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="10" y="10" width="100" height="60" rx="8" stroke="currentColor" stroke-width="1.2" opacity=".15"></rect>
          <rect x="20" y="22" width="56" height="3" rx="1.5" fill="currentColor" opacity=".15"></rect>
          <rect x="20" y="30" width="34" height="3" rx="1.5" fill="currentColor" opacity=".1"></rect>
          <rect x="20" y="38" width="48" height="3" rx="1.5" fill="currentColor" opacity=".1"></rect>
          <circle cx="86" cy="32" r="3" fill="#CA970C" opacity=".7"></circle>
          <circle cx="86" cy="44" r="3" fill="#D61B2C" opacity=".7"></circle>
        </svg>
      </div>`;

const raw = fs.readFileSync(FILE, 'utf8');
const m = raw.match(/= ({[\s\S]*});\s*$/);
if (!m) { console.error('parse failed'); process.exit(1); }
const data = (new Function('return ' + m[1]))();

data.overview.inContextHtml = PLACEHOLDER_SVG;
data.overview.inContextNote = 'Contexts are illustrative. Final screens will reference actual GCash patterns.';

const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(data.meta.slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(FILE, out, 'utf8');
console.log('Restored Modal In Context to standard placeholder');
