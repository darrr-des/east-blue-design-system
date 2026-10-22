// Builds the Component Reusability Report data: one row per component with
// its rating, status and verdict (from src/content/components), its group and
// review status (from the Component Reusability Checklist frames in the 2026
// Working File, read-only REST), and whether it differs from main — the
// "For Pull Request" list.
//
//   node scripts/report/component-status.mjs [--base origin/main] [--out path]
//   (default output .reports/component-status.csv)
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { nodes, FILES, SITE } from '../update/figma.mjs';

const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
const BASE = arg('--base', 'origin/main');
const OUT = arg('--out', path.join(SITE, '.reports/component-status.csv'));
const DIR = path.join(SITE, 'src/content/components');

/* The checklist frame on each pipeline page. */
const CHECKLISTS = { 'Core Components': '10026:123018', Composites: '10026:124094', Patterns: '10026:125169' };
/* Hand-kept notes: components held for a pull request before their work is
   on this branch (e.g. a colleague re-validating them). */
const OVERRIDES = JSON.parse(fs.readFileSync(path.join(SITE, 'scripts/report/overrides.json'), 'utf8'));

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const ALIAS = { tabs: 'tabgroup', checkboxwithlabel: 'checkboxitem' };
const RATING = { pass: 'Pass', partial: 'Partial', warn: 'Warn', fail: 'Fail' };
const VERDICT = { keep: 'Keep', fix: 'Fix', consolidate: 'Consolidate', remove: 'Remove', restructure: 'Restructure', 'product-layer': 'Product layer' };
const CRIT = { C1: 'Layers', C2: 'Naming', C3: 'Tokens', C4: 'Native mapping', C5: 'States', C6: 'Assets' };

const status = (badges) => {
  const k = badges.map((b) => b.kind);
  if (k.includes('remove') || k.includes('consolidate') || k.includes('product-layer')) return 'Retiring';
  if (k.includes('rework')) return 'Rework';
  if (k.includes('refine')) return 'Refine';
  if (k.includes('ready')) return 'Ready';
  return 'Unknown';
};
const replacedBy = (title) => {
  const t = (title || '').replace(/<[^>]*>/g, '');
  const m = t.match(/merged into (.+)$/i) || t.match(/Superseded by (.+)$/i) || t.match(/use the canonical (.+)$/i) || t.match(/— (.+?) is the published atom/i);
  return m ? m[1].trim() : '';
};

/* ── components ─────────────────────────────────────────────────────── */
const pages = fs.readdirSync(DIR).filter((f) => f.endsWith('.json') && !/^(sample|test)-/.test(f))
  .map((f) => ({ slug: f.replace(/\.json$/, ''), data: JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')) }));
const bySlug = Object.fromEntries(pages.map((p) => [p.slug, p]));
const byName = Object.fromEntries(pages.map((p) => [norm(p.data.name), p.slug]));

/* ── assessment differs from main ─────────────────────────────────────
   Only what a pull request would change about the assessment counts:
   node, verdict, badges, traits, open issues and the C1–C6 scorecard.
   Wording-only edits (descriptions, notes) don't. A page main doesn't
   have yet counts too. */
const git = (c) => execSync(c, { cwd: SITE, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
const assessment = (d) => JSON.stringify([
  d.meta?.node, d.meta?.verdict?.kind, (d.meta?.badges || []).map((b) => b.kind),
  (d.overview?.traits || []).map((t) => [t.name, t.rating]), (d.overview?.open || []).length,
  (d.code?.scorecard || []).map((s) => [s.id, s.status]),
]);
const changed = new Set();
let compared = true;
try { git(`git rev-parse --verify ${BASE}`); } catch { compared = false; console.error(`No ${BASE} to compare with; For Pull Request left empty.`); }
if (compared) {
  for (const { slug, data } of pages) {
    let before = null;
    try { before = JSON.parse(git(`git show ${BASE}:astro-site/src/content/components/${slug}.json`)); } catch { /* not on main yet */ }
    if (!before || assessment(before) !== assessment(data)) changed.add(slug);
  }
}

/* ── Figma checklists ──────────────────────────────────────────────── */
const group = {}, figmaStatus = {}, unmatched = [];
const res = await nodes(FILES.WORKING, Object.values(CHECKLISTS), 8);
const walk = (n, f) => { f(n); (n.children || []).forEach((c) => walk(c, f)); };
for (const [g, id] of Object.entries(CHECKLISTS)) {
  const frame = res[id]?.document;
  if (!frame) { console.error(`Checklist ${g} (${id}) not found in the Working File.`); process.exit(1); }
  for (const row of frame.children.slice(1)) {
    let name = null, state = null;
    walk(row, (n) => {
      if (n.type === 'TEXT' && n.visible !== false && !name && !/^\d+$/.test(n.characters.trim())) name = n.characters.trim();
      if (n.type === 'INSTANCE' && n.visible !== false && n.componentProperties?.State) state = n.componentProperties.State.value;
    });
    if (!name || !state) continue; // a family heading, not a component row
    const slug = byName[ALIAS[norm(name)] || norm(name)];
    if (!slug) { unmatched.push(`${g}: ${name}`); continue; }
    group[slug] = g;
    figmaStatus[slug] = state;
  }
}

/* ── rows ───────────────────────────────────────────────────────────── */
const rows = pages.map(({ slug, data }) => {
  const reusable = (data.overview.traits || []).find((t) => t.name === 'Reusable');
  const st = status(data.meta.badges || []);
  const hold = OVERRIDES[slug];
  return {
    component: data.name,
    slug,
    group: group[slug] || 'Not in checklist',
    reusable: hold ? 'For Pull Request' : RATING[reusable?.rating] || 'Unknown',
    verdict: VERDICT[data.meta.verdict?.kind] || 'Not set',
    status: hold ? 'For Pull Request' : st,
    replaced_by: st === 'Retiring' ? replacedBy(data.meta.verdict?.title) : '',
    playground: data.style?.playground === true ? 'Yes' : 'No',
    source_file: /HwWDwPit2xJjDH4zszOZ5o/.test(data.meta.figmaUrl || '') ? 'Sticker Sheets v2' : '2026 Working File',
    open_issues: String((data.overview.open || []).length),
    criteria_left: (data.code?.scorecard || []).filter((s) => s.status && !['ready', 'na'].includes(s.status)).map((s) => `${s.id} ${CRIT[s.id] || s.criterion}`).join(' · '),
    figma_status: figmaStatus[slug] || (group[slug] ? '' : 'Not listed'),
    for_pull_request: changed.has(slug) || hold ? 'Yes' : 'No',
    note: hold?.note || '',
  };
});

const cols = Object.keys(rows[0]);
const esc = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, [cols.join(','), ...rows.map((r) => cols.map((c) => esc(String(r[c] ?? ''))).join(','))].join('\n') + '\n');

const inList = rows.filter((r) => r.group !== 'Not in checklist');
console.log(`Component status → ${path.relative(process.cwd(), OUT)}`);
console.log(`  ${rows.length} components · ${inList.filter((r) => r.reusable === 'Pass').length} of ${inList.length} checklist components reusable · ${rows.filter((r) => r.for_pull_request === 'Yes').length} differ from ${BASE}`);
if (unmatched.length) console.log(`  Checklist rows with no matching page: ${unmatched.join('; ')}`);
const stale = Object.keys(OVERRIDES).filter((s) => !bySlug[s]);
if (stale.length) console.log(`  overrides.json names unknown pages: ${stale.join(', ')}`);
