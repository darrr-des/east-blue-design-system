#!/usr/bin/env node
/* Tooltip family deep-dive — author all 4 sections for 16 cards across
 * tooltip-v2 (8 cards), onboarding-tooltip (4 cards), tooltip-blurred (4 cards).
 * Token values verified via Figma MCP (main/nudge/color/primary/* and /secondary/*). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}
function colorsSection(rows) {
  const flat = [];
  for (const [role, hex, token] of rows) {
    flat.push({ key: role, value: hex, mono: true });
    flat.push({ key: role + ' token', value: token, mono: true });
  }
  return { label: 'Colors', rows: flat };
}
function propsSection(rows) {
  return { label: 'Properties', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: false })) };
}
function layoutSection(rows) {
  return { label: 'Layout', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) };
}
function typoSection(rows) {
  return { label: 'Typography', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) };
}

/* ────────────────────────────────────────────────────────────────────
 * Shared content for tooltip-v2 + onboarding-tooltip (light tooltips)
 * ──────────────────────────────────────────────────────────────────── */
const LIGHT_COLORS = [
  ['Surface',     '#FFFFFF', 'nudge/color/primary/bg'],
  ['Border',      '#E5EBF4', 'nudge/color/primary/border'],
  ['Header',      '#0A2757', 'nudge/color/primary/label'],
  ['Description', '#6780A9', 'nudge/color/primary/description'],
  ['Close icon',  '#0A2757', 'nudge/color/primary/icon-close'],
  ['Primary CTA bg',    '#005CE5', 'button/primary/brand/enabled/bg'],
  ['Primary CTA label', '#FFFFFF', 'button/primary/brand/enabled/label'],
  ['Secondary CTA',     '#005CE5', 'button/secondary/brand/enabled/border'],
];

const LIGHT_LAYOUT = [
  ['Width',         '296px (max)'],
  ['Padding',       '16 horizontal · 12 vertical'],
  ['Border radius', 'radius/radius-2 (6px)'],
  ['Border',        '1px solid #E5EBF4'],
  ['Gap (header ↔ desc)', '4px (space/space-4)'],
  ['Pointer size',  '12 × 8 (width × height)'],
];

const LIGHT_TYPO = [
  ['Header style',     'Primary/Headlines/Block'],
  ['Header font',      'Proxima Soft Bold · 18 / 23 · +0.25'],
  ['Description style','Secondary/Bold/Caption'],
  ['Description font', 'BarkAda Semibold · 12 / 18'],
  ['CTA style',        'Primary/Label/Base'],
  ['CTA font',         'Proxima Soft Bold · 16 / 16 · +0.25'],
];

/* ────────────────────────────────────────────────────────────────────
 * tooltip-v2 — per-variant Properties (8 cards)
 * ──────────────────────────────────────────────────────────────────── */
const TOOLTIP_V2_PROPS = {
  'cta=one-·-icon=yes-·-description-·-header-—-the-hero-variant':
    [['cta', 'one'], ['icon', 'yes'], ['description', 'true'], ['header', 'true'], ['Variant', 'Hero — full content']],
  'cta=one-·-description-·-header-—-tip-with-action':
    [['cta', 'one'], ['icon', 'no'], ['description', 'true'], ['header', 'true'], ['Variant', 'Tip with action']],
  'cta=none-·-icon=yes-·-description-·-header-—-icon-+-explanatory-text':
    [['cta', 'none'], ['icon', 'yes'], ['description', 'true'], ['header', 'true'], ['Variant', 'Icon + explanatory text']],
  'cta=none-·-description-·-header-—-plain-tip-card':
    [['cta', 'none'], ['icon', 'no'], ['description', 'true'], ['header', 'true'], ['Variant', 'Plain tip card']],
  'cta=none-·-header-only-—-pointer/label':
    [['cta', 'none'], ['icon', 'no'], ['description', 'false'], ['header', 'true'], ['Variant', 'Header-only pointer label']],
  'cta=none-·-description-only-—-concise-explanation':
    [['cta', 'none'], ['icon', 'no'], ['description', 'true'], ['header', 'false'], ['Variant', 'Description-only concise tip']],
  'cta=two-·-description-—-back-+-next-walkthrough':
    [['cta', 'two (back + next)'], ['icon', 'no'], ['description', 'true'], ['header', 'false'], ['Variant', 'Walkthrough step']],
  'cta=one-·-description-·-no-header-—-tip-→-single-cta':
    [['cta', 'one'], ['icon', 'no'], ['description', 'true'], ['header', 'false'], ['Variant', 'Tip → single CTA']],
};

/* ────────────────────────────────────────────────────────────────────
 * onboarding-tooltip — pointer position + standard content (4 cards)
 * ──────────────────────────────────────────────────────────────────── */
const ONBOARDING_PROPS = {
  'pointer=top-—-target-element-above':
    [['pointer', 'top'], ['Target', 'element above the tooltip'], ['Header', 'true'], ['Description', 'true'], ['Close icon', 'true']],
  'pointer=bottom-—-target-element-below':
    [['pointer', 'bottom'], ['Target', 'element below the tooltip'], ['Header', 'true'], ['Description', 'true'], ['Close icon', 'true']],
  'pointer=left-—-target-element-to-the-left':
    [['pointer', 'left'], ['Target', 'element to the left'], ['Header', 'true'], ['Description', 'true'], ['Close icon', 'true']],
  'pointer=right-—-target-element-to-the-right':
    [['pointer', 'right'], ['Target', 'element to the right'], ['Header', 'true'], ['Description', 'true'], ['Close icon', 'true']],
};

/* ────────────────────────────────────────────────────────────────────
 * tooltip-blurred — dark variant tokens + 4 pointer positions
 * ──────────────────────────────────────────────────────────────────── */
const BLURRED_COLORS = [
  ['Surface',     '#0A2757 (80% via blur)', 'nudge/color/secondary/bg'],
  ['Header',      '#FFFFFF',                'nudge/color/secondary/label'],
  ['Description', '#F6F9FDCC (80% alpha)',  'nudge/color/secondary/description'],
];

const BLURRED_LAYOUT = [
  ['Width',         '296px (max)'],
  ['Padding',       '16 horizontal · 12 vertical'],
  ['Border radius', 'radius/radius-2 (6px)'],
  ['Backdrop blur', '2.5px'],
  ['Surface alpha', '80% over photographic content'],
  ['Pointer size',  '12 × 8 (width × height)'],
];

const BLURRED_TYPO = LIGHT_TYPO.slice(0, 4); // header + description only

const BLURRED_PROPS = {
  'pointer=top-—-pointer-anchored-above-surface':
    [['pointer', 'top'], ['Variant', 'Surface above pointer']],
  'pointer=right-—-pointer-on-right-edge':
    [['pointer', 'right'], ['Variant', 'Surface left of pointer']],
  'pointer=bottom-—-pointer-below-surface':
    [['pointer', 'bottom'], ['Variant', 'Surface above pointer (below content)']],
  'pointer=left-—-pointer-on-left-edge':
    [['pointer', 'left'], ['Variant', 'Surface right of pointer']],
};

/* ──────── Apply ──────── */
const PLAN = {
  'tooltip-v2': {
    perCardProps: TOOLTIP_V2_PROPS,
    sharedColors: LIGHT_COLORS,
    sharedLayout: LIGHT_LAYOUT,
    sharedTypo:   LIGHT_TYPO,
  },
  'onboarding-tooltip': {
    perCardProps: ONBOARDING_PROPS,
    sharedColors: LIGHT_COLORS.slice(0, 5), // no CTA tokens for onboarding (uses close icon)
    sharedLayout: LIGHT_LAYOUT.concat([['Shadow', 'app/shadow/shadow-low']]),
    sharedTypo:   LIGHT_TYPO.slice(0, 4),
  },
  'tooltip-blurred': {
    perCardProps: BLURRED_PROPS,
    sharedColors: BLURRED_COLORS,
    sharedLayout: BLURRED_LAYOUT,
    sharedTypo:   BLURRED_TYPO,
  },
};

let touched = 0;
let touchedComponents = 0;

for (const [slug, plan] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();

  let cardChanges = 0;
  for (const card of data.style.specCards) {
    const propsRows = plan.perCardProps[card.cardKey];
    if (!propsRows) {
      console.log(`- ${slug}/${card.cardKey}: no plan, skipping`);
      continue;
    }
    const sections = card.sections || [];
    const has = (label) => sections.some((s) => s.label && s.label.toLowerCase() === label.toLowerCase());
    const newSections = [];
    if (!has('Properties')) newSections.push(propsSection(propsRows));
    if (!has('Colors'))     newSections.push(colorsSection(plan.sharedColors));
    if (!has('Layout'))     newSections.push(layoutSection(plan.sharedLayout));
    if (!has('Typography')) newSections.push(typoSection(plan.sharedTypo));
    if (newSections.length === 0) {
      console.log(`- ${slug}/${card.cardKey}: already complete`);
      continue;
    }
    // Replace any partial sections array with the full canonical 4-section order
    card.sections = newSections;
    cardChanges++;
    touched++;
  }
  if (cardChanges > 0) {
    const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(file, out, 'utf8');
    touchedComponents++;
    console.log(`✓ ${slug}: ${cardChanges} card(s) brought to 100%`);
  }
}

console.log(`\nDone. ${touched} card(s) across ${touchedComponents} components.`);
