#!/usr/bin/env node
/**
 * Quality check across all 79 components.
 *
 * Combines two checklists from CLAUDE.md:
 *   1. Pre-Delivery Checklist (7 checks per component)
 *   2. Mobile Documentation Criteria — 9-Point Assessment
 *
 * Outputs a per-component score with Pass / Partial / Fail per criterion,
 * plus a summary table and a list of components below 7/9.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const DEMO_DIR = path.resolve(path.dirname(__filename), '../../public/scripts/demos');
const STYLES_PATH = path.resolve(path.dirname(__filename), '../../src/styles/global.css');
const REQUIRED = ['Properties', 'Colors', 'Layout', 'Typography'];
const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);

const styles = fs.readFileSync(STYLES_PATH, 'utf8');
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

// ── Helpers ──────────────────────────────────────────────────────────────
const has = (s, needle) => typeof s === 'string' && s.length > 0 && s.includes(needle);
const nonEmpty = (s, min = 20) => typeof s === 'string' && s.replace(/<[^>]+>/g, '').trim().length >= min;
const cssClassExists = (cls) => styles.includes(`.${cls}`);

function scoreComponent(slug, data) {
  const meta = data.meta || {};
  const overview = data.overview || {};
  const style = data.style || {};
  const code = data.code || {};
  const cards = style.specCards || [];

  const verdictKind = (meta.badges || []).map((b) => b.kind).find((k) => CARDLESS_VERDICTS.has(k));
  const intentionallyCardless = !!verdictKind && cards.length === 0;

  // 1. Live preview / playground — interactive controls
  const live = overview.livePreviewHtml || '';
  const has_preview_controls = has(live, 'demo-panel') || has(live, 'demo-figma-panel') || has(live, 'demo-controls');
  const has_preview = nonEmpty(live, 50);
  const c1_live_preview = !has_preview ? 'fail' : has_preview_controls ? 'pass' : 'partial';

  // 2. Native install / import — at least 2 installation blocks (iOS + Android)
  const inst = code.installation || {};
  const blocks = inst.blocks || [];
  const filledBlocks = blocks.filter((b) => nonEmpty(b.code || b.text || '', 10));
  const c2_install = filledBlocks.length >= 2 ? 'pass' :
                     filledBlocks.length === 1 ? 'partial' : 'fail';

  // 3. SwiftUI & Compose code snippets per spec card
  if (intentionallyCardless) {
    var c3_snippets = 'pass'; // intentionally no cards
    var c5_variants = 'pass';
  } else if (cards.length === 0) {
    c3_snippets = 'fail';
    c5_variants = 'fail';
  } else {
    let snippet_pass = 0, snippet_total = cards.length;
    let var_pass = 0, var_total = cards.length;
    for (const c of cards) {
      const sLen = (c.swift || '').replace(/<[^>]+>/g, '').trim().length;
      const cLen = (c.compose || '').replace(/<[^>]+>/g, '').trim().length;
      if (sLen >= 20 && cLen >= 20) snippet_pass++;
      // Style tab variant must have *component-API* code, not container code
      const looksLikeContainerCode = (c.swift || '').includes('HStack(') ||
                                     (c.swift || '').includes('VStack(') ||
                                     (c.compose || '').includes('Modifier.background');
      if (sLen >= 20 && cLen >= 20 && !looksLikeContainerCode) var_pass++;
    }
    c3_snippets = snippet_pass === snippet_total ? 'pass' :
                  snippet_pass > 0 ? 'partial' : 'fail';
    c5_variants = var_pass === var_total ? 'pass' :
                  var_pass > 0 ? 'partial' : 'fail';
  }

  // 4. Props / API table (native)
  const pm = code.propertyMapping;
  const pm_rows = (pm?.rows || []).length;
  const c4_props = pm_rows >= 3 ? 'pass' : pm_rows > 0 ? 'partial' : 'fail';

  // 6. Native platform notes — accessibility table with iOS + Android
  const a11y = code.accessibility || [];
  const has_both_platforms = a11y.length > 0 && a11y.every((row) => row.ios !== undefined && row.android !== undefined);
  const c6_platform_notes = has_both_platforms && a11y.length >= 3 ? 'pass' :
                            a11y.length > 0 ? 'partial' : 'fail';

  // 7. Design token connection — token names + hex per state
  if (intentionallyCardless) {
    var c7_tokens = 'pass';
  } else if (cards.length === 0) {
    c7_tokens = 'fail';
  } else {
    let tok_pass = 0;
    for (const c of cards) {
      const colors = (c.sections || []).find((s) => (s.label || '').toLowerCase() === 'colors');
      const rows = colors?.rows || [];
      // Heuristic: at least one row mentions a token path (contains "/")
      const hasTokens = rows.some((r) => typeof r.value === 'string' && r.value.includes('/'));
      const hasHex = rows.some((r) => typeof r.value === 'string' && /^#[0-9A-Fa-f]{3,8}$/.test(r.value.trim()));
      if (hasTokens && hasHex) tok_pass++;
    }
    c7_tokens = tok_pass === cards.length ? 'pass' :
                tok_pass > 0 ? 'partial' : 'fail';
  }

  // 8. Changelog
  const cl = data.changelog || [];
  const cl_entries = cl.reduce((n, entry) => n + (entry.rows || []).length, 0);
  const cl_with_criterion = cl.reduce((n, entry) =>
    n + (entry.rows || []).filter((r) => /\bC[1-7]\b/.test(JSON.stringify(r))).length, 0);
  const c8_changelog = cl_entries === 0 ? 'fail' :
                       cl_with_criterion >= cl_entries / 2 ? 'pass' : 'partial';

  // 9. Figma ↔ code mapping — Code Connect readiness
  const cc = code.codeConnect || [];
  const c9_code_connect = cc.length >= 3 ? 'pass' : cc.length > 0 ? 'partial' : 'fail';

  // ── Pre-Delivery checks (boolean per component) ──
  // PD1: Demo handlers — for every onclick/onchange that calls a function
  // by name (e.g. onclick="foo()" or "foo(arg)"), verify the function is
  // defined in the demo JS or the shared assessment.js. Skip raw-assignment
  // handlers like onchange="_cbDemo.foo='x'; render()" — those reference
  // variables, not functions.
  const demoFile = path.join(DEMO_DIR, slug + '.js');
  const has_demo_js = fs.existsSync(demoFile);
  const demoCode = has_demo_js ? fs.readFileSync(demoFile, 'utf8') : '';
  const sharedJsPath = path.resolve(path.dirname(__filename), '../../public/scripts/assessment.js');
  const sharedCode = fs.existsSync(sharedJsPath) ? fs.readFileSync(sharedJsPath, 'utf8') : '';
  const allCode = demoCode + '\n' + sharedCode;

  const fnCallRefs = [];
  const fnCallRe = /on(?:click|change|input)="\s*([_a-zA-Z]\w*)\s*\(/g;
  let mm;
  while ((mm = fnCallRe.exec(live)) !== null) fnCallRefs.push(mm[1]);
  const uniqHandlers = [...new Set(fnCallRefs)];
  const missing_handlers = uniqHandlers.filter((fn) => {
    return !allCode.includes(`function ${fn}`) &&
           !allCode.includes(`window.${fn}`) &&
           !new RegExp(`\\b${fn}\\s*=\\s*function`).test(allCode) &&
           !new RegExp(`\\b${fn}\\s*=\\s*\\(`).test(allCode);
  });
  const pd1_demo = uniqHandlers.length === 0 ? 'pass' :
                   missing_handlers.length === 0 ? 'pass' :
                   missing_handlers.length < uniqHandlers.length ? 'partial' : 'fail';

  // PD5: CSS classes referenced in livePreviewHtml exist in stylesheet
  const class_refs = (live.match(/class="([^"]+)"/g) || [])
    .flatMap((m) => m.replace(/^class="|"$/g, '').split(/\s+/))
    .filter(Boolean);
  const eb_classes = [...new Set(class_refs)].filter((c) => c.startsWith('eb-') || c.startsWith('demo-') || c.startsWith('preview-') || c.startsWith('spec-'));
  const missing_css = eb_classes.filter((c) => !cssClassExists(c));
  const pd5_css = missing_css.length === 0 ? 'pass' :
                  missing_css.length < eb_classes.length / 2 ? 'partial' : 'fail';

  return {
    slug,
    name: meta.name || slug,
    intentionallyCardless,
    cardCount: cards.length,
    scores: {
      'C1 Live preview':       c1_live_preview,
      'C2 Install/import':     c2_install,
      'C3 Code snippets':      c3_snippets,
      'C4 Props/API table':    c4_props,
      'C5 Variants w/ code':   c5_variants,
      'C6 Platform notes':     c6_platform_notes,
      'C7 Token connection':   c7_tokens,
      'C8 Changelog':          c8_changelog,
      'C9 Code Connect':       c9_code_connect,
      'PD1 Demo handlers':     pd1_demo,
      'PD5 CSS classes':       pd5_css,
    },
    issues: {
      missingHandlers: missing_handlers,
      missingCssClasses: missing_css,
    },
  };
}

function pointsFor(rating) {
  if (rating === 'pass') return 1;
  if (rating === 'partial') return 0.5;
  return 0;
}

const results = [];
for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) continue;
  let data;
  try { data = (new Function('return ' + m[1]))(); } catch { continue; }
  results.push(scoreComponent(slug, data));
}

// ── Aggregate ────────────────────────────────────────────────────────────
const totalCriteria = 9; // 9-point scoring
const summary = results.map((r) => {
  const sum =
    pointsFor(r.scores['C1 Live preview']) +
    pointsFor(r.scores['C2 Install/import']) +
    pointsFor(r.scores['C3 Code snippets']) +
    pointsFor(r.scores['C4 Props/API table']) +
    pointsFor(r.scores['C5 Variants w/ code']) +
    pointsFor(r.scores['C6 Platform notes']) +
    pointsFor(r.scores['C7 Token connection']) +
    pointsFor(r.scores['C8 Changelog']) +
    pointsFor(r.scores['C9 Code Connect']);
  return { ...r, score: sum, scorePct: sum / totalCriteria };
}).sort((a, b) => a.score - b.score);

const avgScore = summary.reduce((s, r) => s + r.score, 0) / summary.length;
const pctRating = (n) => {
  if (n >= 9) return '9/9 Excellent';
  if (n >= 7) return '7-8 Strong';
  if (n >= 5) return '5-6 Acceptable';
  if (n >= 3) return '3-4 Weak';
  return '0-2 Not ready';
};

// ── Print ────────────────────────────────────────────────────────────────
console.log('────────────────────────────────────────────────────────────');
console.log('  QUALITY CHECK — 9-Point Mobile Documentation Criteria');
console.log('────────────────────────────────────────────────────────────');
console.log(`  Components scored:  ${summary.length}`);
console.log(`  Average score:      ${avgScore.toFixed(1)} / 9`);
console.log('');

const buckets = { 9: 0, 7: 0, 5: 0, 3: 0, 0: 0 };
for (const r of summary) {
  if (r.score >= 9) buckets[9]++;
  else if (r.score >= 7) buckets[7]++;
  else if (r.score >= 5) buckets[5]++;
  else if (r.score >= 3) buckets[3]++;
  else buckets[0]++;
}

console.log('  Distribution:');
console.log(`    9/9 Excellent       ${buckets[9]} components`);
console.log(`    7-8 Strong          ${buckets[7]} components`);
console.log(`    5-6 Acceptable      ${buckets[5]} components`);
console.log(`    3-4 Weak            ${buckets[3]} components`);
console.log(`    0-2 Not ready       ${buckets[0]} components`);
console.log('');

console.log('  Below 7/9 (need attention):');
console.log('────────────────────────────────────────────────────────────');
const weak = summary.filter((r) => r.score < 7);
if (weak.length === 0) {
  console.log('  ✓ None — all components score 7 or higher.');
} else {
  for (const r of weak) {
    const fails = Object.entries(r.scores).filter(([_, v]) => v === 'fail').map(([k]) => k);
    const partials = Object.entries(r.scores).filter(([_, v]) => v === 'partial').map(([k]) => k);
    const tag = r.intentionallyCardless ? ' [cardless-by-verdict]' : '';
    console.log(`  ${r.score.toFixed(1).padStart(4)}/9   ${r.name}${tag}`);
    if (fails.length) console.log(`           fails:    ${fails.join(', ')}`);
    if (partials.length) console.log(`           partial:  ${partials.join(', ')}`);
  }
}
console.log('');

// ── Pre-Delivery checks summary ───────────────────────────────────────────
console.log('  Pre-Delivery boolean checks:');
console.log('────────────────────────────────────────────────────────────');
const pd1Fail = summary.filter((r) => r.scores['PD1 Demo handlers'] === 'fail');
const pd5Fail = summary.filter((r) => r.scores['PD5 CSS classes'] === 'fail');
const pd1Partial = summary.filter((r) => r.scores['PD1 Demo handlers'] === 'partial');
const pd5Partial = summary.filter((r) => r.scores['PD5 CSS classes'] === 'partial');
console.log(`  PD1 Demo handlers      fails: ${pd1Fail.length}    partials: ${pd1Partial.length}`);
if (pd1Fail.length) console.log('     ' + pd1Fail.map((r) => r.name).join(', '));
if (pd1Partial.length) console.log('     partial: ' + pd1Partial.slice(0, 5).map((r) => r.name).join(', ') + (pd1Partial.length > 5 ? '…' : ''));
console.log(`  PD5 CSS classes        fails: ${pd5Fail.length}    partials: ${pd5Partial.length}`);
if (pd5Fail.length) console.log('     ' + pd5Fail.map((r) => r.name).join(', '));
if (pd5Partial.length) console.log('     partial: ' + pd5Partial.slice(0, 5).map((r) => r.name).join(', ') + (pd5Partial.length > 5 ? '…' : ''));
console.log('');

console.log('  Run with --json to dump full per-component data.');
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(summary, null, 2));
}
