#!/usr/bin/env node
/* Date Picker family + Table family deep-dive — author all 4 sections for
 * 25 cards across 7 components. Token values verified via Figma MCP. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}
const colorsSection = (rows) => ({ label: 'Colors', rows: rows.flatMap(([role, hex, token]) => [
  { key: role, value: hex, mono: true },
  { key: role + ' token', value: token, mono: true },
]) });
const propsSection  = (rows) => ({ label: 'Properties', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: false })) });
const layoutSection = (rows) => ({ label: 'Layout', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) });
const typoSection   = (rows) => ({ label: 'Typography', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) });

/* ─────────── Date Picker (host of the calendar surface, 5 cards) ─────────── */
const DP_COLORS_DEFAULT = [
  ['Field bg',      '#FFFFFF', 'selected-field/color/default/bg'],
  ['Field border',  '#D7E0EF', 'selected-field/color/default/border'],
  ['Placeholder',   '#90A8D0', 'selected-field/color/default/placeholder'],
  ['Value',         '#0A2757', 'selected-field/color/default/value'],
  ['Icon',          '#005CE5', 'selected-field/color/default/icon'],
];
const DP_COLORS_ACTIVE = [
  ['Field bg',      '#FFFFFF', 'selected-field/color/active/bg'],
  ['Field border',  '#005CE5', 'selected-field/color/active/border'],
  ['Placeholder',   '#90A8D0', 'selected-field/color/active/placeholder'],
  ['Value',         '#0A2757', 'selected-field/color/active/value'],
  ['Icon',          '#005CE5', 'selected-field/color/active/icon'],
];
const DP_COLORS_DISABLED = [
  ['Field bg',      '#EEF2F9', 'selected-field/color/disabled/bg'],
  ['Field border',  '#D7E0EF', 'selected-field/color/default/border'],
  ['Value',         '#90A8D0', 'selected-field/color/disabled/value'],
  ['Icon',          '#9BC5FD', 'selected-field/color/disabled/icon'],
];

const DP_LAYOUT = [
  ['Field height',  '48px'],
  ['Padding H',     '12px'],
  ['Border radius', 'radius/radius-2 (6px)'],
  ['Border',        '1px solid'],
  ['Icon size',     '20 × 20'],
];
const DP_TYPO = [
  ['Label style', 'Primary/Label/Light/Small'],
  ['Label font',  'Proxima Soft Semibold · 14 / 14 · +0.25'],
  ['Value style', 'Primary/Label/Light/Small'],
  ['Value font',  'Proxima Soft Semibold · 14 / 14 · +0.25'],
];

const DATE_PICKER_PLAN = {
  'dp-spec-default-empty':   { props: [['state', 'Default'], ['filled', 'false'], ['Variant', 'Empty placeholder']],         colors: DP_COLORS_DEFAULT,  layout: DP_LAYOUT, typo: DP_TYPO },
  'dp-spec-default-filled':  { props: [['state', 'Default'], ['filled', 'true'],  ['Variant', 'Selected date']],             colors: DP_COLORS_DEFAULT,  layout: DP_LAYOUT, typo: DP_TYPO },
  'dp-spec-active-empty':    { props: [['state', 'Active'],  ['filled', 'false'], ['Variant', 'Picker open · empty']],       colors: DP_COLORS_ACTIVE,   layout: DP_LAYOUT, typo: DP_TYPO },
  'dp-spec-active-filled':   { props: [['state', 'Active'],  ['filled', 'true'],  ['Variant', 'Picker open · with value']],  colors: DP_COLORS_ACTIVE,   layout: DP_LAYOUT, typo: DP_TYPO },
  'dp-spec-disabled':        { props: [['state', 'Disabled'],['filled', 'false'], ['Variant', 'Disabled']],                  colors: DP_COLORS_DISABLED, layout: DP_LAYOUT, typo: DP_TYPO },
};

/* ─────────── Date Picker Group (the calendar grid, 3 cards) ─────────── */
const DPG_COLORS = [
  ['Surface',          '#FFFFFF', 'date-picker/month-header/color/bg'],
  ['Border',           '#E5EBF4', 'date-picker/month-header/color/border'],
  ['Header label',     '#0A2757', 'date-picker/month-header/color/label'],
  ['Header icon',      '#005CE5', 'date-picker/month-header/color/icon'],
  ['Week-day label',   '#0A2757', 'date-picker/week-header/color/label'],
  ['Day cell label',   '#0A2757', 'date-picker/day/color/unselected/label'],
  ['Day cell bg',      '#FFFFFF', 'date-picker/day/color/unselected/bg'],
  ['Selected accent',  '#005CE5', 'border/color-border-primary'],
  ['Disabled label',   '#C2CFE5', 'text/color-text-disabled'],
];
const DPG_LAYOUT = [
  ['Surface width',  '328px'],
  ['Cell size',      '32 × 32 (day) / 100 × 32 (month/year)'],
  ['Header height',  '48px'],
  ['Border radius',  'radius/radius-3 (8px)'],
  ['Shadow',         'app/shadow/shadow (depth 6/12)'],
];
const DPG_TYPO = [
  ['Header style', 'Primary/Label/Large'],
  ['Header font',  'Proxima Soft Bold · 18 / 18 · +0.25'],
  ['Cell style',   'Primary/Label/Light/Small'],
  ['Cell font',    'Proxima Soft Semibold · 14 / 14 · +0.25'],
];
const DATE_PICKER_GROUP_PLAN = {
  'dpg-spec-date':  { props: [['Type', 'Day'],  ['Cell size', '32×32'],  ['Variant', 'Day-picker grid']],   colors: DPG_COLORS, layout: DPG_LAYOUT, typo: DPG_TYPO },
  'dpg-spec-month': { props: [['Type', 'Month'],['Cell size', '100×32'], ['Variant', 'Month-picker grid']], colors: DPG_COLORS, layout: DPG_LAYOUT, typo: DPG_TYPO },
  'dpg-spec-year':  { props: [['Type', 'Year'], ['Cell size', '100×32'], ['Variant', 'Year-picker grid']],  colors: DPG_COLORS, layout: DPG_LAYOUT, typo: DPG_TYPO },
};

/* ─────────── Date Picker Item (32×32 day cell, 7 cards) ─────────── */
const DPI_COLORS_UNSELECTED = [
  ['Label', '#0A2757', 'date-picker/day/color/unselected/label'],
  ['Bg',    '#FFFFFF', 'date-picker/day/color/unselected/bg'],
];
const DPI_COLORS_SELECTED = [
  ['Label', '#FFFFFF', 'date-picker/day/color/selected/label'],
  ['Bg',    '#005CE5', 'date-picker/day/color/selected/bg'],
];
const DPI_COLORS_TODAY = [
  ['Label',  '#005CE5', 'text/color-text-primary'],
  ['Bg',     '#FFFFFF', 'date-picker/day/color/unselected/bg'],
  ['Border', '#005CE5', 'border/color-border-primary'],
];
const DPI_COLORS_RANGE = [
  ['Label',     '#0A2757', 'date-picker/day/color/unselected/label'],
  ['Range bg',  '#E5F1FF', 'bg/color-bg-info-weakest'],
];
const DPI_COLORS_PREVNEXT = [
  ['Label',  '#C2CFE5', 'text/color-text-disabled'],
  ['Bg',     '#FFFFFF', 'date-picker/day/color/unselected/bg'],
];
const DPI_COLORS_DISABLED_DEFAULT = [
  ['Label',  '#C2CFE5', 'text/color-text-disabled'],
  ['Bg',     '#FFFFFF', 'date-picker/day/color/unselected/bg'],
];
const DPI_COLORS_DISABLED_TODAY = [
  ['Label',  '#9BC5FD', 'text/color-text-primary-disabled'],
  ['Border', '#9BC5FD', 'border/color-border-primary-disabled'],
];
const DPI_LAYOUT = [
  ['Cell size',     '32 × 32'],
  ['Border radius', 'pill (16px)'],
  ['Hit target',    '44 × 44 (mobile)'],
];
const DPI_TYPO = [
  ['Style',         'Primary/Label/Light/Small'],
  ['Default font',  'Proxima Soft Semibold · 14 / 14 · +0.25'],
  ['Selected font', 'Proxima Soft Bold · 14 / 14 · +0.25'],
];

const DATE_PICKER_ITEM_PLAN = {
  'dpi-spec-default':           { props: [['Type', 'Default'],          ['Disabled','false'], ['Variant','Plain day cell']],       colors: DPI_COLORS_UNSELECTED,        layout: DPI_LAYOUT, typo: DPI_TYPO },
  'dpi-spec-today':             { props: [['Type', 'Today'],            ['Disabled','false'], ['Variant','Today indicator']],      colors: DPI_COLORS_TODAY,             layout: DPI_LAYOUT, typo: DPI_TYPO },
  'dpi-spec-selected':          { props: [['Type', 'Selected'],         ['Disabled','false'], ['Variant','Picked date']],          colors: DPI_COLORS_SELECTED,          layout: DPI_LAYOUT, typo: DPI_TYPO },
  'dpi-spec-range':             { props: [['Type', 'In range'],         ['Disabled','false'], ['Variant','Date-range hover/fill']],colors: DPI_COLORS_RANGE,             layout: DPI_LAYOUT, typo: DPI_TYPO },
  'dpi-spec-prevnext':          { props: [['Type', 'Prev/Next month'],  ['Disabled','false'], ['Variant','Cell from adjacent month']],colors: DPI_COLORS_PREVNEXT,        layout: DPI_LAYOUT, typo: DPI_TYPO },
  'dpi-spec-default-disabled':  { props: [['Type', 'Default'],          ['Disabled','true'],  ['Variant','Disabled — out of range']],colors: DPI_COLORS_DISABLED_DEFAULT,layout: DPI_LAYOUT, typo: DPI_TYPO },
  'dpi-spec-today-disabled':    { props: [['Type', 'Today'],            ['Disabled','true'],  ['Variant','Today disabled']],       colors: DPI_COLORS_DISABLED_TODAY,    layout: DPI_LAYOUT, typo: DPI_TYPO },
};

/* ─────────── Month/Year Picker Item (100×32, 3 cards) ─────────── */
const MYPI_COLORS_DEFAULT = [
  ['Label', '#0A2757', 'date-picker/day/color/unselected/label'],
  ['Bg',    '#FFFFFF', 'date-picker/day/color/unselected/bg'],
];
const MYPI_COLORS_TODAY = [
  ['Label',  '#005CE5', 'text/color-text-primary'],
  ['Bg',     '#FFFFFF', 'date-picker/day/color/unselected/bg'],
  ['Border', '#005CE5', 'border/color-border-primary'],
];
const MYPI_COLORS_SELECTED = [
  ['Label', '#FFFFFF', 'date-picker/day/color/selected/label'],
  ['Bg',    '#005CE5', 'date-picker/day/color/selected/bg'],
];
const MYPI_LAYOUT = [
  ['Cell size',     '100 × 32'],
  ['Border radius', 'radius/radius-3 (8px)'],
  ['Padding H',     '4px'],
];
const MYPI_TYPO = [
  ['Style',         'Primary/Label/Light/Small'],
  ['Default font',  'Proxima Soft Semibold · 14 / 14 · +0.25'],
  ['Selected font', 'Proxima Soft Bold · 14 / 14 · +0.25'],
];
const MYPI_PLAN = {
  'mypi-spec-default':  { props: [['Type', 'Default'],  ['Variant', 'Unselected month/year']], colors: MYPI_COLORS_DEFAULT,  layout: MYPI_LAYOUT, typo: MYPI_TYPO },
  'mypi-spec-today':    { props: [['Type', 'Today'],    ['Variant', 'Current month/year']],    colors: MYPI_COLORS_TODAY,    layout: MYPI_LAYOUT, typo: MYPI_TYPO },
  'mypi-spec-selected': { props: [['Type', 'Selected'], ['Variant', 'Picked month/year']],     colors: MYPI_COLORS_SELECTED, layout: MYPI_LAYOUT, typo: MYPI_TYPO },
};

/* ─────────── Table family ─────────── */
const TABLE_COLORS = [
  ['Surface',        '#FFFFFF', 'table/color/bg'],
  ['Subtle row bg',  '#D7D8DA', 'table/color/bg-subtle'],
  ['Border',         '#828591', 'table/color/border'],
  ['Label',          '#0A0A0B', 'table/color/label'],
  ['Description',    '#6780A9', 'table/color/description'],
];
const TABLE_LAYOUT_HEADER  = [['Header height', '37 / 65px'], ['Padding H', '24px'], ['Padding V', '16px']];
const TABLE_LAYOUT_CONTENT = [['Row height', '56px'],          ['Padding H', '24px'], ['Padding V', '12px']];
const TABLE_TYPO = [
  ['Header style', 'Primary/Label/Light/Base'],
  ['Header font',  'Proxima Soft Semibold · 16 / 16 · +0.25'],
  ['Body style',   'Primary/Label/Small'],
  ['Body font',    'Proxima Soft Bold · 14 / 14 · +0.25'],
];
const TABLE_PLAN = {
  'header-row-—-37-/-65px-tall': { props: [['Row type', 'Header'], ['Height', '37 / 65px']], colors: TABLE_COLORS, layout: TABLE_LAYOUT_HEADER,  typo: TABLE_TYPO },
  'content-row-—-56px-tall':     { props: [['Row type', 'Content'],['Height', '56px']],     colors: TABLE_COLORS, layout: TABLE_LAYOUT_CONTENT, typo: TABLE_TYPO },
};

const TABLE_TX_COLORS = [
  ['Surface',         '#FFFFFF', 'table/color/bg'],
  ['Subtle row bg',   '#F6F9FD', 'table/color/bg-subtle'],
  ['Border',          '#E5EBF4', 'table/color/border'],
  ['Label',           '#0A2757', 'table/color/label'],
  ['Preamble',        '#6780A9', 'table/color/label-preamble'],
  ['Currency icon',   '#183462', 'table/color/icon-currency-secondary'],
];
const TABLE_TX_LAYOUT_HEADER  = [['Header height', '36 / 62px'], ['Padding H', '16px'], ['Padding V', '12px']];
const TABLE_TX_LAYOUT_CONTENT = [['Row height', '72.5px'],       ['Padding H', '16px'], ['Padding V', '12px']];
const TABLE_TX_TYPO = [
  ['Preamble style', 'Primary/Multi-line Label/Light/Tiny'],
  ['Preamble font',  'Proxima Soft Semibold · 10 / 12 · +0.25'],
  ['Body style',     'Primary/Label/Small'],
  ['Body font',      'Proxima Soft Bold · 14 / 14 · +0.25'],
];
const TABLE_TX_PLAN = {
  'header-row-—-36-/-62px-tall': { props: [['Row type', 'Header'], ['Height', '36 / 62px']], colors: TABLE_TX_COLORS, layout: TABLE_TX_LAYOUT_HEADER,  typo: TABLE_TX_TYPO },
  'content-row-—-72.5px-tall':   { props: [['Row type', 'Content'],['Height', '72.5px']],   colors: TABLE_TX_COLORS, layout: TABLE_TX_LAYOUT_CONTENT, typo: TABLE_TX_TYPO },
};

const TABLE_SCHED_COLORS = [
  ['Surface',         '#FFFFFF', 'table/color/bg'],
  ['Label',           '#0A2757', 'table/color/label'],
  ['Amount',          '#005CE5', 'table/color/label-amount'],
  ['Preamble',        '#6780A9', 'table/color/label-preamble'],
  ['Currency icon',   '#005CE5', 'table/color/icon-currency-primary'],
];
const TABLE_SCHED_TYPO = [
  ['Preamble style', 'Primary/Label/Light/Fine'],
  ['Preamble font',  'Proxima Soft Semibold · 12 / 12 · +0.5'],
  ['Body style',     'Primary/Label/Small'],
  ['Body font',      'Proxima Soft Bold · 14 / 14 · +0.25'],
];
const TABLE_SCHED_PLAN = {
  'type-=-no-display-amount-—-50.5px-tall': { props: [['type', 'no display amount'], ['Height', '50.5px']], colors: TABLE_SCHED_COLORS, layout: [['Row height', '50.5px'], ['Padding H', '16px']], typo: TABLE_SCHED_TYPO },
  'type-=-2-amounts-display-—-89.5px-tall': { props: [['type', '2 amounts display'], ['Height', '89.5px']], colors: TABLE_SCHED_COLORS, layout: [['Row height', '89.5px'], ['Padding H', '16px']], typo: TABLE_SCHED_TYPO },
  'type-=-4-amounts-display-—-132.5px-tall':{ props: [['type', '4 amounts display'], ['Height', '132.5px']],colors: TABLE_SCHED_COLORS, layout: [['Row height', '132.5px'],['Padding H', '16px']], typo: TABLE_SCHED_TYPO },
};

const PLAN = {
  'date-picker':            DATE_PICKER_PLAN,
  'date-picker-group':      DATE_PICKER_GROUP_PLAN,
  'date-picker-item':       DATE_PICKER_ITEM_PLAN,
  'month-year-picker-item': MYPI_PLAN,
  'table':                  TABLE_PLAN,
  'table-transaction':      TABLE_TX_PLAN,
  'table-scheduling':       TABLE_SCHED_PLAN,
};

let total = 0;
let touchedComps = 0;

for (const [slug, cardPlans] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();

  let cardChanges = 0;
  for (const card of data.style.specCards) {
    const plan = cardPlans[card.cardKey];
    if (!plan) { console.log(`- ${slug}/${card.cardKey}: no plan`); continue; }
    card.sections = [
      propsSection(plan.props),
      colorsSection(plan.colors),
      layoutSection(plan.layout),
      typoSection(plan.typo),
    ];
    cardChanges++;
    total++;
  }
  if (cardChanges > 0) {
    const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(file, out, 'utf8');
    touchedComps++;
    console.log(`✓ ${slug}: ${cardChanges} card(s) → 100%`);
  }
}

console.log(`\nDone. ${total} card(s) across ${touchedComps} components.`);
