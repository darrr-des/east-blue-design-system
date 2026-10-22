// Builds the East Blue Workflow Tree data from the repo itself: the guides
// in workflows/, the npm scripts, the automation in scripts/ and the CI in
// .github/workflows. Descriptions come from tree-notes.json; anything new
// without a note falls back to the file's own first line, so the tree can't
// drift from the repo.
//
//   node scripts/report/workflow-tree.mjs [--out path]   (default .reports/workflow-tree.json)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const ROOT = path.resolve(SITE, '..');
const NOTES = JSON.parse(fs.readFileSync(path.join(SITE, 'scripts/report/tree-notes.json'), 'utf8'));
const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : path.join(SITE, '.reports/workflow-tree.json');
const R = 'east-blue-design-system/';
const missing = [];

const exists = (p) => fs.existsSync(path.join(ROOT, p));
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const ls = (p) => (exists(p) ? fs.readdirSync(path.join(ROOT, p)).sort() : []);

/* "The 9 checks" heading in a review guide → 9; without one, count the
   numbered rows of the check table in its Validate phase. */
const checkCount = (guide) => {
  if (!exists(guide)) return '?';
  const text = read(guide);
  const m = text.match(/^#+ .*?The (\d+) checks/m);
  if (m) return m[1];
  const validate = text.split(/^#{1,2} Phase \d+ — `?Validate/m)[1] || '';
  const rows = validate.split(/^#{1,2} /m)[0].match(/^\| *\d+ *\|/gm);
  return rows ? String(rows.length) : '?';
};
const componentCount = ls('astro-site/src/content/components').filter((f) => f.endsWith('.json') && !/^(sample|test)-/.test(f)).length;

/* Notes may hold {checks:GUIDE.md} and {components}; fill them from the repo. */
const fill = (s) => s
  .replace(/\{checks:([\w.-]+)\}/g, (_, g) => checkCount(`workflows/review/${g}`))
  .replace(/\{components\}/g, String(componentCount));

/* First prose line of a file: a markdown paragraph or a leading // or /* comment. */
function firstLine(rel) {
  const text = read(rel);
  if (rel.endsWith('.md')) {
    const line = text.split('\n').find((l) => l.trim() && !/^(#|>|\||-{3}|```|<)/.test(l.trim()));
    return line ? line.replace(/\*\*|`/g, '').trim() : '';
  }
  const m = text.match(/^\s*(?:\/\/\s?(.+)|\/\*+\s*\n?\s*\*?\s?(.+))/);
  return m ? (m[1] || m[2]).replace(/\*\/$/, '').trim() : '';
}

function node(key, name, type, fallback) {
  const n = NOTES[key];
  if (!n) missing.push(key);
  const o = { n: name, t: type, d: fill(n ? n.d : fallback || '') };
  if (n && n.note) o.note = n.note;
  return o;
}

const file = (dir, name, type) => node(R + dir + name, name, type, exists(dir + name) ? firstLine(dir + name) : '');

/* A guide's steps: kept descriptions first; otherwise its "Phase N — Title" headings. */
function guide(dir, name) {
  const g = file(dir, name, 'md');
  const key = R + dir + name;
  const kept = Object.keys(NOTES).filter((k) => k.startsWith(key + '#'));
  if (kept.length) {
    g.c = kept.map((k, i) => ({ n: `${i + 1} ${k.split('#')[1]}`, t: 'step', d: fill(NOTES[k].d) }));
  } else {
    const phases = [...read(dir + name).matchAll(/^#{1,2} Phase (\d+) — `?([^`\n]+)`?/gm)];
    if (phases.length) g.c = phases.map((m) => ({ n: `${m[1]} ${m[2].toLowerCase()}`, t: 'step', d: '' }));
  }
  if (g.c) g.open = name === 'COMPONENT-UPDATE-GUIDE.md';
  return g;
}

const dir = (rel, name, children, open = false) => Object.assign(node(R + rel, name, 'dir'), { c: children, open });

/* ── workflows/ ─────────────────────────────────────────────────────── */
const guides = (sub) => ls(`workflows/${sub}`).filter((f) => f.endsWith('.md'))
  .sort((a, b) => (a === 'README.md' ? -1 : b === 'README.md' ? 1 : a === 'COMPONENT-UPDATE-GUIDE.md' ? -1 : b === 'COMPONENT-UPDATE-GUIDE.md' ? 1 : 0))
  .map((f) => (f === 'README.md' || !/GUIDE/.test(f) ? file(`workflows/${sub}/`, f, 'md') : guide(`workflows/${sub}/`, f)));

const workflows = dir('workflows/', 'workflows/', [
  file('workflows/', 'README.md', 'md'),
  dir('workflows/build/', 'build/', guides('build'), true),
  dir('workflows/review/', 'review/', guides('review'), true),
], true);

/* ── astro-site/ ────────────────────────────────────────────────────── */
const pkg = JSON.parse(read('astro-site/package.json')).scripts;
const cmds = Object.keys(pkg)
  .filter((s) => NOTES['npm:' + s] || /^report:/.test(s))
  .map((s) => ({ n: s, t: 'cmd', d: fill(NOTES['npm:' + s]?.d || pkg[s]) }));

const scriptDir = (sub, extra = []) => {
  const files = ls(`astro-site/scripts/${sub}`).filter((f) => /\.(mjs|md)$/.test(f) && !/-test\.mjs$/.test(f));
  return [...extra, ...files.map((f) => file(`astro-site/scripts/${sub}/`, f, f.endsWith('.md') ? 'md' : 'js'))];
};
const topScripts = ls('astro-site/scripts').filter((f) => f.endsWith('.mjs') && !/-test\.mjs$/.test(f))
  .map((f) => file('astro-site/scripts/', f, 'js'));

const astro = dir('astro-site/', 'astro-site/', [
  Object.assign(file('astro-site/', 'package.json', 'json'), { c: cmds }),
  dir('astro-site/src/', 'src/', [
    dir('astro-site/src/content/components/', 'content/components/', [
      file('astro-site/src/content/components/', '<slug>.json', 'json'),
      file('astro-site/src/content/components/', 'sample-component.json', 'json'),
    ]),
    dir('astro-site/src/data/', 'data/', ['tokens.json', 'typography.ts', 'colors.ts', 'primitives.ts', 'types.ts']
      .filter((f) => exists('astro-site/src/data/' + f))
      .map((f) => file('astro-site/src/data/', f, f.endsWith('.json') ? 'json' : 'ts'))),
  ], true),
  dir('astro-site/public/', 'public/', [
    file('astro-site/public/', 'scripts/demos/<slug>.js', 'js'),
    file('astro-site/public/', 'playground/<slug>.json', 'json'),
  ]),
  dir('astro-site/scripts/', 'scripts/', [
    ...['audit', 'update', 'playground', 'report'].filter((s) => exists(`astro-site/scripts/${s}`))
      .map((s) => dir(`astro-site/scripts/${s}/`, `${s}/`, scriptDir(s), s === 'update' || s === 'report')),
    ...(exists('astro-site/scripts/tokens/import.mjs') ? [file('astro-site/scripts/', 'tokens/import.mjs', 'js')] : []),
    ...topScripts,
  ], true),
], true);

/* ── screen-normalization/ and CI ───────────────────────────────────── */
const extras = [];
if (exists('screen-normalization')) {
  extras.push(dir('screen-normalization/', 'screen-normalization/',
    ls('screen-normalization').filter((f) => f.endsWith('.md')).map((f) => file('screen-normalization/', f, 'md'))));
}
const ci = ls('.github/workflows').filter((f) => /\.ya?ml$/.test(f)).map((f) => {
  const o = file('.github/workflows/', f, 'yml');
  if (!o.d) o.d = (read('.github/workflows/' + f).match(/^name:\s*(.+)$/m) || [])[1] || '';
  return o;
});
extras.push(dir('.github/workflows/', '.github/workflows/', ci, true));

const tree = Object.assign(node(R, R, 'dir'), { open: true, c: [
  file('', 'CLAUDE.md', 'md'),
  file('', 'eb-ds-assessment-guide.md', 'md'),
  workflows,
  astro,
  ...extras,
] });

const sha = (() => { try { return fs.readFileSync(path.join(ROOT, '.git/HEAD'), 'utf8').trim(); } catch { return ''; } })();
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), head: sha, tree }, null, 2) + '\n');
console.log(`Workflow tree → ${path.relative(process.cwd(), out)}`);
if (missing.length) console.log(`No note yet (described from the file itself): ${missing.map((k) => k.replace(R, '')).join(', ')}`);
