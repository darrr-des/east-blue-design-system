#!/usr/bin/env node
/**
 * playground-lint.mjs — the Playground's own house rules (npm run lint:playground).
 *
 * The tab is one 64KB script plus one delimited CSS section shared by every
 * component, so a stray selector or a class that exists in only one of the two
 * is invisible until a page renders wrong. This checks the seams:
 *
 *   1. every selector in the Playground CSS section is `pg-` prefixed — the
 *      section sits in the site's global stylesheet and must not reach outside it
 *   2. every class the script or the pages use has a rule (no unstyled class)
 *   3. every class the section styles is used (no dead rule)
 *   4. no inline `style=` in the pages (CLAUDE.md; the script sets styles at
 *      runtime, which is what a live inspector does)
 *   5. the script is loaded from one cached file, not inlined per page
 *
 * Reports and exits 1 on a violation.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const CSS = path.join(root, 'src/styles/global.css');
const JS = path.join(root, 'public/scripts/playground.js');
const PAGES = ['src/components/Playground.astro', 'src/pages/playground/[slug].astro', 'src/pages/playground/index.astro'].map((p) => path.join(root, p));

const problems = [];
const css = fs.readFileSync(CSS, 'utf8');
const js = fs.existsSync(JS) ? fs.readFileSync(JS, 'utf8') : '';
const pages = PAGES.filter(fs.existsSync).map((p) => ({ file: path.relative(root, p), src: fs.readFileSync(p, 'utf8') }));

if (!js) problems.push(['missing', 'public/scripts/playground.js does not exist']);

// ── the delimited section ──────────────────────────────────────────────
const start = css.indexOf('/* ── Playground (Style tab)');
if (start < 0) {
  problems.push(['missing', 'no "── Playground (Style tab)" section in global.css']);
}
const after = start < 0 ? -1 : css.indexOf('\n/* ── ', start + 10);
const section = start < 0 ? '' : css.slice(start, after < 0 ? css.length : after);

// 1. every selector in the section is pg- prefixed.
const declared = new Set();
for (const m of section.matchAll(/^\s*([.#][^{}\n]+?)\s*\{/gm)) {
  const selector = m[1].trim();
  for (const cls of selector.matchAll(/\.([a-zA-Z0-9_-]+)/g)) declared.add(cls[1]);
  const bare = selector.split(',').map((s) => s.trim()).filter(Boolean);
  for (const s of bare) {
    // The first thing a selector targets must be a pg- class: descendants and
    // states may be anything (.pg-row > svg, .pg-tab.is-active).
    const first = s.match(/^[.#][a-zA-Z0-9_-]+/);
    if (first && !/^\.pg-/.test(first[0])) problems.push(['scope', `selector escapes the section: ${s}`]);
  }
}

// 2 + 3. classes used vs classes styled.
// `pg-` names are also element ids (`id="pg-stage"`, getElementById('pg-data')).
// Those are not classes and have no rule, so collect ids first and subtract them.
const ids = new Set();
for (const src of [js, ...pages.map((p) => p.src)]) {
  for (const m of src.matchAll(/\bid=["'{`]*\s*(pg-[a-zA-Z0-9_-]+)/g)) ids.add(m[1]);
  for (const m of src.matchAll(/getElementById\(\s*['"](pg-[a-zA-Z0-9_-]+)['"]/g)) ids.add(m[1]);
  for (const m of src.matchAll(/#(pg-[a-zA-Z0-9_-]+)/g)) ids.add(m[1]);
}
const used = new Set();
for (const src of [js, ...pages.map((p) => p.src)]) {
  for (const m of src.matchAll(/\bpg-[a-zA-Z0-9_-]+/g)) used.add(m[0]);
}
// A rule may live outside the delimited section (a one-off added next to a
// neighbouring block); rule 1 governs the section, this governs coverage.
const styledAnywhere = new Set();
for (const m of css.matchAll(/\.(pg-[a-zA-Z0-9_-]+)/g)) styledAnywhere.add(m[1]);

const usedPg = [...used].filter((c) => /^pg-/.test(c) && !ids.has(c) && !c.endsWith('-'));
const declaredPg = [...declared].filter((c) => /^pg-/.test(c));

// Classes are also built by concatenation — `'pg-badge-' + kind`. Collect those
// prefixes so `.pg-badge-space` counts as used, and so a literal that only
// exists as a prefix is not reported unstyled.
const prefixes = [...js.matchAll(/(pg-[a-zA-Z0-9_-]*-)['"]\s*\+/g)].map((m) => m[1]);
const builtDynamically = (c) => prefixes.some((p) => c.startsWith(p) && c.length > p.length);

for (const c of usedPg) {
  if (!styledAnywhere.has(c) && !builtDynamically(c)) problems.push(['unstyled', `used but no rule: .${c}`]);
}
for (const c of declaredPg) {
  if (!used.has(c) && !builtDynamically(c)) problems.push(['dead', `styled but never used: .${c}`]);
}

// 4. no inline style attributes in the pages.
for (const { file, src } of pages) {
  for (const m of src.matchAll(/\sstyle=(["{])/g)) {
    const line = src.slice(0, m.index).split('\n').length;
    problems.push(['inline-style', `${file}:${line} — use a pg- class`]);
  }
}

// 5. the script is referenced, not inlined.
for (const { file, src } of pages) {
  if (/<script is:inline>[\s\S]{2000,}<\/script>/.test(src)) problems.push(['inlined', `${file} inlines a large script — it belongs in public/scripts/playground.js`]);
}

// ── report ─────────────────────────────────────────────────────────────
const byKind = problems.reduce((a, [k, m]) => ((a[k] = a[k] || []).push(m), a), {});
console.log(`\nPlayground lint — ${declaredPg.length} pg- classes styled · ${usedPg.length} used\n`);
if (!problems.length) {
  console.log('  ✓ no problems');
  process.exit(0);
}
for (const [kind, list] of Object.entries(byKind)) {
  console.log(`  ${kind} (${list.length})`);
  for (const m of list.slice(0, 20)) console.log(`    · ${m}`);
  if (list.length > 20) console.log(`    … and ${list.length - 20} more`);
}
console.log(`\n${problems.length} problem(s)`);
process.exit(1);
