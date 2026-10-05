#!/usr/bin/env node
/**
 * Component Update · when check-set says the node moved — find where the set lives now.
 *
 *   npm run update:trace -- <fileKey> <instanceId>
 *
 * Give it any INSTANCE of the component (the Working File's Pipeline page has one for
 * most components). It reports the set the instance uses. For a library component it
 * also searches Sticker Sheets v2 near the source layer ids, which is how Subtext
 * Message and the Segmented Controls were found. Read-only. It never edits the page:
 * repointing meta.node is a decision you report, then make.
 */
import { nodes, FILES, fileName } from './figma.mjs';

const [fileKey, instanceId] = process.argv.slice(2);
if (!fileKey || !instanceId) { console.error('usage: npm run update:trace -- <fileKey> <instanceId>'); process.exit(1); }

const e = (await nodes(fileKey, [instanceId], 2))[instanceId];
if (!e) { console.error(`${instanceId} not found in ${fileName(fileKey)}`); process.exit(1); }
const inst = e.document;
if (inst.type !== 'INSTANCE') { console.error(`${instanceId} is a ${inst.type}, not an instance`); process.exit(1); }
const comp = e.components[inst.componentId];
const set = comp?.componentSetId ? e.componentSets[comp.componentSetId] : null;
console.log(`instance "${inst.name}" → variant "${comp?.name}" of set "${set?.name ?? '(no set)'}" · ${comp?.remote ? 'library component' : 'local, set ' + comp?.componentSetId}`);
if (!comp?.remote) process.exit(0);

// A library instance's child layers are named I<instance>;<source-id>. The source variant and
// its set sit just before those ids in the library file — probe a window around them.
const src = (inst.children || []).map((c) => c.id.split(';').pop()).filter((x) => /^\d+:\d+$/.test(x));
if (!src.length) { console.log('No child layers to trace from.'); process.exit(0); }
const [page, local] = src[0].split(':').map(Number);
const ids = [];
for (let i = Math.max(0, local - 150); i <= local + 5; i++) ids.push(`${page}:${i}`);
const found = [];
for (let k = 0; k < ids.length; k += 60) {
  const r = await nodes(FILES.SSv2, ids.slice(k, k + 60));
  for (const [id, x] of Object.entries(r)) if (x?.document?.type === 'COMPONENT_SET') found.push([id, x.document]);
}
if (!found.length) { console.log('No component set found near the source ids in Sticker Sheets v2 — ask the designer for the set link.'); process.exit(0); }
for (const [id, d] of found) {
  const match = d.name === set?.name ? '  ← same name as the instance’s set' : '';
  console.log(`Sticker Sheets v2 · ${id} · "${d.name}" · ${(d.children || []).length} variants${match}`);
}
