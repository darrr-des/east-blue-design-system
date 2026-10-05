#!/usr/bin/env node
/**
 * Component Update · Code tab tidy — the three mechanical sweep fixes.
 *
 *   npm run update:tidy -- <slug>
 *
 *   K9   drop code.installation.footnote (the Planned API badge already says it)
 *   K10  run every usage snippet through the assessment.js tokenizer for syn-* spans
 *   K8   over 10 variants: grouped table → summary, full breakdown (one row per Figma
 *        variant, with its node) from public/playground/<slug>.json, collapse label
 *
 * Run AFTER playground:build (K8 reads its data). Everything else in the Code tab —
 * Property Mapping wording, API names, missing sections — is a person's call.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { SITE, readPage, writePage } from './figma.mjs';

const slug = process.argv[2];
if (!slug) { console.error('usage: npm run update:tidy -- <slug>'); process.exit(1); }
const { file, data: d } = readPage(slug);
const log = [];

// K9
const inst = d.code?.installation;
if (inst?.footnote && inst.footnote.replace(/<[^>]+>/g, '').trim()) { inst.footnote = ''; log.push('K9 footnote removed'); }

// K10 — the tokenizer in public/scripts/assessment.js is the one source for the spans.
const src = fs.readFileSync(path.join(SITE, 'public/scripts/assessment.js'), 'utf8');
const sb = { window: {} };
vm.runInNewContext(src.slice(src.indexOf('  var SYN_TYPES'), src.indexOf('  // ── Copy snippet')), sb);
const highlight = (code) => { const el = { getAttribute: () => code, textContent: code, innerHTML: '' }; sb.window.highlightSyntax(el); return el.innerHTML; };
const decode = (s) => s.replace(/<br\s*\/?>/g, '\n').replace(/<[^>]+>/g, '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
for (const u of d.code?.usageSnippets || []) for (const lang of ['swift', 'compose']) {
  if (!u[lang] || (/class="syn-/.test(u[lang]) && !/class="syn-eq"/.test(u[lang]))) continue;
  const plain = decode(u[lang]);
  u[lang] = '<code>' + highlight(plain) + '</code>';
  if (decode(u[lang]) !== plain) { console.error(`STOP — highlighting changed the code text of "${u.subheading}" (${lang})`); process.exit(1); }
  log.push(`K10 ${u.subheading} / ${lang}`);
}

// K8
const pgFile = path.join(SITE, 'public/playground', `${slug}.json`);
const v = d.code?.variants;
if (v && fs.existsSync(pgFile)) {
  const pg = JSON.parse(fs.readFileSync(pgFile, 'utf8'));
  if (v.total !== pg.variants.length) { log.push(`K8 total ${v.total} → ${pg.variants.length} (Figma)`); v.total = pg.variants.length; }
  if (pg.variants.length > 10) {
    const props = pg.properties.filter((p) => p.kind === 'select' || p.kind === 'toggle').map((p) => p.name);
    const hasSummary = (v.summary?.rows || []).length > 0;
    // A breakdown with one row per variant already exists (often with extra columns a person
    // wrote — Toggle's track size and fill): never replace it, only label it.
    const isFull = (v.rows || []).length === pg.variants.length;
    if (!isFull) {
      if (!hasSummary && (v.rows || []).length) {
        v.summary = { columns: v.columns, rows: v.rows };
        log.push(`K8 grouped table (${v.rows.length} rows) → summary`);
      }
      v.columns = [...props, 'Node'];
      v.rows = pg.variants.map((x) => ({ cells: [...props.map((p) => x.props[p]), x.id] }));
      log.push(`K8 full breakdown ${v.rows.length} rows from Figma`);
    }
    if (!v.collapseLabel) {
      v.collapseLabel = `View full ${props.join(' × ')} breakdown (${v.rows.length} rows)`;
      log.push(`K8 collapse "${v.collapseLabel}"`);
    }
    if (!(v.summary?.rows || []).length) log.push('K8 NOTE — no grouped summary; write one by hand (a person, not this script)');
  }
} else if (v) log.push('K8 skipped — run playground:build first');

writePage(file, d);
console.log(`${slug}: ${log.length ? log.join(' · ') : 'nothing to change'}`);
