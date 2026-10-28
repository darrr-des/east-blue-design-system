/* antislop copy scan — reads the prose fields of every component file and
 * reports the patterns the antislop copywriting skill names, with the rule
 * each one cites. Reports only: it never edits.
 *
 * Prose only. Spec values, tokens, colour tables, variant rows, code blocks
 * and preview HTML are data, not copy, and are never scanned — the em dash
 * in a spec value is the framework's "could not be read" marker (Rule Zero),
 * not an AI tell.
 *
 * Usage: node scripts/audit/antislop-copy-scan.mjs [--list <pattern-id>]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIR = path.join(ROOT, 'src', 'content', 'components');

/* Every prose field on a component page, with the label the report shows. */
function proseOf(slug, d) {
  const out = [];
  const add = (where, text) => { if (typeof text === 'string' && text.trim()) out.push({ slug, where, text }); };
  const m = d.meta || {}, o = d.overview || {}, s = d.style || {}, c = d.code || {};
  add('meta.description', m.description);
  add('verdict.title', m.verdict?.title);
  add('verdict.text', m.verdict?.text);
  add('inContextNote', o.inContextNote);
  (o.traits || []).forEach((t, i) => add(`trait[${i}].note`, t.note));
  (o.behavior || []).forEach((b, i) => add(`behavior[${i}].notes`, b.notes));
  for (const key of ['open', 'resolved', 'recommendations', 'appliedRecommendations']) {
    (o[key] || []).forEach((it, i) => { add(`${key}[${i}].headline`, it.headline); add(`${key}[${i}].body`, it.body); });
  }
  add('style.description', s.description);
  (s.colorsTables || []).forEach((t, i) => add(`colorsTable[${i}].description`, t.description));
  add('propertyMapping.description', c.propertyMapping?.description);
  add('installation.footnote', c.installation?.footnote);
  (c.usageSnippets || []).forEach((u, i) => add(`usageSnippet[${i}].subheading`, u.subheading));
  (c.accessibility || []).forEach((a, i) => { add(`a11y[${i}].requirement`, a.requirement); add(`a11y[${i}].ios`, a.ios); add(`a11y[${i}].android`, a.android); });
  (c.usageGuidelines || []).forEach((g, i) => { add(`guideline[${i}].do`, g.doText); add(`guideline[${i}].dont`, g.dontText); });
  (c.scorecard || []).forEach((r, i) => add(`scorecard[${r.id || i}].notes`, r.notes));
  add('variants.description', c.variants?.description);
  (d.changelog || []).forEach((e, i) => (e.rows || []).forEach((r, j) => add(`changelog[${i}].row[${j}]`, r.body)));
  return out;
}

/* Each pattern: the skill's name, the rule it cites, the tier, a matcher. */
const BUZZ = /\b(AI[- ]powered|next[- ]generation|revolutionary|seamless(?:ly)?|cutting[- ]edge|intelligent|ultimate|powerful|effortless|unlock|elevate|empower|delve|showcase|testament|game[- ]changer|next[- ]level|robust)\b/gi;
const PATTERNS = [
  { id: 'em-dash', name: 'Em dash in prose', rule: 'R-02', tier: 'HIGH', re: /—/g },
  { id: 'buzzword', name: 'Buzzword / empty AI vocabulary', rule: 'R-16', tier: 'LOW', re: BUZZ },
  { id: 'neg-parallel', name: 'Negative parallelism', rule: 'R-36', tier: 'LOW', re: /\b(not just [^.,;]{2,40}(?:,|but)|not only [^.,;]{2,40}but also)/gi },
  { id: 'filler', name: 'Filler phrase', rule: 'R-36', tier: 'LOW', re: /\b(in order to|due to the fact that|at this point in time|it is important to note that|it should be noted that|needless to say)\b/gi },
  { id: 'hedge', name: 'Stacked hedging', rule: 'R-36', tier: 'LOW', re: /\b(could potentially|may possibly|might potentially|could possibly|may perhaps)\b/gi },
  { id: 'signpost', name: 'Signposting announcement', rule: 'R-36', tier: 'LOW', re: /\b(let'?s dive in|here'?s what you need to know|in this (?:article|section) we'?ll|without further ado)\b/gi },
  { id: 'closer', name: 'Chatbot closer', rule: 'R-36', tier: 'LOW', re: /\b(i hope this helps|let me know if you have any questions|would you like me to|you'?re welcome)\b/gi },
  { id: 'candid', name: 'Fake-candid opener', rule: 'R-36', tier: 'LOW', re: /(^|[.!?]\s+)(honestly[,?]|let'?s be honest|here'?s the thing|real talk)/gi },
  { id: 'authority', name: 'Persuasive authority trope', rule: 'R-36', tier: 'LOW', re: /\b(at its core|the real question is|what really matters|fundamentally,|the heart of the matter)\b/gi },
  { id: 'weasel', name: 'Weasel attribution', rule: 'R-36', tier: 'HIGH', re: /\b(experts say|industry observers|leading analysts|studies show that)\b/gi },
  { id: 'upbeat', name: 'Generic positive conclusion', rule: 'R-36', tier: 'LOW', re: /\b(the future looks bright|exciting times|a step in the right direction|best[- ]in[- ]class|world[- ]class|industry[- ]leading)\b/gi },
  { id: 'false-range', name: 'False range', rule: 'R-36', tier: 'LOW', re: /\bfrom [^.,;]{2,30} to [^.,;]{2,30}(?:,| and) everything in between\b/gi },
  { id: 'caps', name: 'All-caps emphasis clause', rule: 'R-36', tier: 'LOW', re: /\b[A-Z]{3,}(?:\s+[A-Z]{2,}){2,}\b/g },
];

/* Markup and code are not prose: strip tags, then the text inside <code>. */
const visible = (html) => String(html)
  .replace(/<code>[\s\S]*?<\/code>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;/gi, ' ');

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).sort();
const findings = [];
for (const f of files) {
  const slug = f.replace(/\.json$/, '');
  const d = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
  for (const field of proseOf(slug, d)) {
    const text = visible(field.text);
    for (const p of PATTERNS) {
      const hits = text.match(p.re);
      if (hits) findings.push({ ...field, pattern: p, hits: [...new Set(hits.map((h) => h.trim()))], count: hits.length });
    }
  }
}

const listing = process.argv.includes('--list') ? process.argv[process.argv.indexOf('--list') + 1] : null;
if (listing) {
  const rows = findings.filter((f) => f.pattern.id === listing);
  console.log(`${listing}: ${rows.length} field(s), ${rows.reduce((n, r) => n + r.count, 0)} occurrence(s)\n`);
  for (const r of rows) console.log(`  ${r.slug}  ${r.where}\n    ${r.hits.join(' · ')}`);
  process.exit(0);
}

console.log(`\nantislop copy scan — ${files.length} component files, prose fields only`);
console.log('─'.repeat(72));
const byPattern = new Map();
for (const f of findings) {
  const k = f.pattern.id;
  if (!byPattern.has(k)) byPattern.set(k, { p: f.pattern, fields: 0, hits: 0, slugs: new Set() });
  const e = byPattern.get(k);
  e.fields++; e.hits += f.count; e.slugs.add(f.slug);
}
const order = { HIGH: 0, MEDIUM: 1, LOW: 2 };
const rows = [...byPattern.values()].sort((a, b) => order[a.p.tier] - order[b.p.tier] || b.hits - a.hits);
for (const r of rows) {
  console.log(`  ${r.p.tier.padEnd(6)} ${r.p.rule.padEnd(5)} ${r.p.name.padEnd(34)} ${String(r.hits).padStart(5)} in ${String(r.slugs.size).padStart(3)} file(s)`);
}
if (!rows.length) console.log('  no patterns found');
console.log(`\n  files with at least one finding: ${new Set(findings.map((f) => f.slug)).size} of ${files.length}`);
console.log('  list one pattern with:  node scripts/audit/antislop-copy-scan.mjs --list <id>');
console.log(`  ids: ${PATTERNS.map((p) => p.id).join(', ')}\n`);
