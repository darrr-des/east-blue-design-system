#!/usr/bin/env node
/**
 * Component Update · In Context — export a screen frame from Figma as the page's image.
 *
 *   npm run update:context -- <slug> <frameId> [fileKey]
 *
 * frameId is the "In Context - …" frame on the Working File's Pipeline [Core Components]
 * page (fileKey defaults to the Working File). Writes
 * public/assets/previews/<slug>-in-context.png at 1920 px wide. The house frames are
 * 960 × 430; anything else is reported so a person decides before it ships. It does NOT
 * edit the page: the caption and alt text are written by reading the exported image.
 * Read-only on Figma.
 */
import fs from 'node:fs';
import path from 'node:path';
import { api, nodes, SITE, FILES, fileName } from './figma.mjs';

const [slug, frameId, fileKey = FILES.WORKING] = process.argv.slice(2);
if (!slug || !frameId) { console.error('usage: npm run update:context -- <slug> <frameId> [fileKey]'); process.exit(1); }

const n = (await nodes(fileKey, [frameId]))[frameId]?.document;
if (!n) { console.error(`${frameId} not found in ${fileName(fileKey)}`); process.exit(1); }
const { width: w, height: h } = n.absoluteBoundingBox;
console.log(`"${n.name}" · ${n.type} · ${w}×${h}`);
if (w !== 960 || h !== 430) {
  console.log(`STOP — not a 960×430 In Context frame. Ask whether to use it as it is, or for a proper frame.`);
  process.exit(2);
}
const img = await api(`/images/${fileKey}?ids=${encodeURIComponent(frameId)}&format=png&scale=2`);
const url = img.images?.[frameId];
if (!url) { console.error('Figma returned no image for that frame.'); process.exit(1); }
const out = path.join(SITE, 'public/assets/previews', `${slug}-in-context.png`);
const existed = fs.existsSync(out);
fs.writeFileSync(out, Buffer.from(await (await fetch(url)).arrayBuffer()));
console.log(`${existed ? 'replaced' : 'wrote'} public/assets/previews/${slug}-in-context.png (1920×860)`);
console.log('Next: open the PNG, describe what is on it, and write inContextNote + the <img> alt from that.');
