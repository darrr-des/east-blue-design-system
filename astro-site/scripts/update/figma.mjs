// Shared Figma REST helpers for the Component Update scripts. Read-only:
// every call is a GET with the file_content:read token from astro-site/.env.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const FILES = { SSv2: 'HwWDwPit2xJjDH4zszOZ5o', WORKING: 'pbxY8a2xcIfVZKxwnud9Xe' };
export const fileName = (key) => (key === FILES.SSv2 ? 'Sticker Sheets v2' : key === FILES.WORKING ? '2026 Working File' : key);

const env = fs.existsSync(path.join(SITE, '.env')) ? fs.readFileSync(path.join(SITE, '.env'), 'utf8') : '';
const TOKEN = (env.match(/^FIGMA_ACCESS_TOKEN=(.+)$/m) || [])[1]?.trim() || process.env.FIGMA_ACCESS_TOKEN;
if (!TOKEN) { console.error('FIGMA_ACCESS_TOKEN missing from astro-site/.env'); process.exit(1); }

export async function api(p) {
  for (let attempt = 1; ; attempt++) {
    try {
      const r = await fetch('https://api.figma.com/v1' + p, { headers: { 'X-Figma-Token': TOKEN } });
      if (r.status === 429 && attempt < 4) { await new Promise((res) => setTimeout(res, 5000 * attempt)); continue; }
      return await r.json();
    } catch (e) {
      // Figma sometimes times out the connection; retry before giving up.
      if (attempt >= 3) throw e;
      await new Promise((res) => setTimeout(res, 3000 * attempt));
    }
  }
}

export const nodes = async (fileKey, ids, depth = 1) =>
  (await api(`/files/${fileKey}/nodes?ids=${encodeURIComponent(ids.join(','))}&depth=${depth}`)).nodes || {};

export function readPage(slug) {
  const f = path.join(SITE, 'src/content/components', `${slug}.json`);
  if (!fs.existsSync(f)) { console.error(`No page: src/content/components/${slug}.json`); process.exit(1); }
  const text = fs.readFileSync(f, 'utf8');
  const data = JSON.parse(text);
  // Pages are written as JSON.stringify(…, 2) + newline. If this one isn't, a rewrite would
  // touch lines nobody meant to change — stop instead of producing a noisy diff.
  if (JSON.stringify(data, null, 2) + '\n' !== text) { console.error(`${slug}.json is not in the standard format — open and save it in the CMS first.`); process.exit(1); }
  return { file: f, data };
}

/** Write a page back in the standard format (2-space JSON + newline). */
export function writePage(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}

export const fileKeyOf = (page) => (page.meta.figmaUrl.match(/design\/(\w+)/) || [])[1];
