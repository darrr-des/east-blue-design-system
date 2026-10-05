#!/usr/bin/env node
/**
 * Component Update · step 1 — is the page pointing at a live, healthy component set?
 *
 *   npm run update:check -- <slug>
 *
 * Reads meta.node from the page and asks Figma what is there. Reports, and stops at
 * anything that needs a person: a missing node (the set moved), an empty set (variants
 * gone), duplicate variant names (Figma then reports no properties at all), or a set
 * with zero properties. Read-only.
 */
import { nodes, readPage, fileKeyOf, fileName } from './figma.mjs';

const slug = process.argv[2];
if (!slug) { console.error('usage: npm run update:check -- <slug>'); process.exit(1); }
const { data } = readPage(slug);
const fileKey = fileKeyOf(data), id = data.meta.node;
const badges = (data.meta.badges || []).map((b) => b.kind);
console.log(`${data.name} (${slug}) → ${fileName(fileKey)} · node ${id} · badges ${badges.join(', ')}`);

if (badges.some((k) => ['remove', 'consolidate', 'product-layer'].includes(k))) {
  console.log('STOP — verdict is remove / consolidate / product-layer: no Playground for this component.');
  process.exit(2);
}

const n = (await nodes(fileKey, [id]))[id]?.document;
if (!n) {
  console.log(`STOP — node ${id} does not exist in ${fileName(fileKey)}. The set was moved or rebuilt.`);
  console.log('Find an instance of it (e.g. on the Pipeline page) and run: npm run update:trace -- <fileKey> <instanceId>');
  process.exit(2);
}
const variants = (n.children || []).filter((c) => c.type === 'COMPONENT');
const props = Object.entries(n.componentPropertyDefinitions || {});
const byName = {};
variants.forEach((v) => (byName[v.name] ??= []).push(v.id));
const dups = Object.entries(byName).filter(([, ids]) => ids.length > 1);

console.log(`${n.type} "${n.name}" · ${variants.length} variants · ${props.length} properties`);
props.forEach(([k, d]) => console.log(`   ${d.type.padEnd(13)} ${k.replace(/#.*/, '')}${d.variantOptions ? ' — ' + d.variantOptions.join(', ') : ''}`));

let stop = false;
if (n.type !== 'COMPONENT_SET' && n.type !== 'COMPONENT') { console.log(`STOP — ${id} is a ${n.type}, not a component set.`); stop = true; }
if (n.type === 'COMPONENT_SET' && !variants.length) { console.log('STOP — the set is EMPTY: its variants were moved. Trace an instance to find the new set.'); stop = true; }
if (dups.length) { dups.forEach(([name, ids]) => console.log(`STOP — duplicate variant "${name}": ${ids.join(' and ')}. Ask the designer to delete one.`)); stop = true; }
if (n.type === 'COMPONENT_SET' && variants.length && !props.length) { console.log('STOP — Figma reports no properties (usually a duplicate or conflicting variant).'); stop = true; }
if (stop) process.exit(2);
console.log('OK — ready to build.');
