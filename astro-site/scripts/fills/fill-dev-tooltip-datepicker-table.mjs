#!/usr/bin/env node
/* Fill DEV mode (swift + compose) for the Tooltip, Date Picker, and Table
 * families — the ones I previously claimed "100% complete" but only had
 * DES sections. After this run they'll be genuinely complete. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

/* Wrapping helpers for syntax-colored code blocks. */
const T = (s) => `<span class="syn-type">${s}</span>`;
const STR = (s) => `<span class="syn-str">"${s}"</span>`;
const KW = (s) => `<span class="syn-kw">${s}</span>`;
const FN = (s) => `<span class="syn-fn">${s}</span>`;
const DOT = (s) => `<span class="syn-dot">.${s}</span>`;
const PUNC = (s) => `<span class="syn-punc">${s}</span>`;
const EQ = `<span class="syn-eq">=</span>`;
const CMT = (s) => `<span class="syn-cmt">// ${s}</span>`;

/* Build a swift snippet from a list of (label, value) pairs. The first pair
 * becomes the constructor's positional argument; the rest are .modifier(.value).
 *
 * Example output:
 *   EBTooltip("Heading")
 *       .ebPointer(.top)
 *       .ebDescription("Description")
 */
function swiftSnippet(componentName, init, modifiers = []) {
  let out = T(componentName) + PUNC('(') + init + PUNC(')');
  for (const [name, value] of modifiers) {
    out += '\n    .' + FN(name) + PUNC('(') + value + PUNC(')');
  }
  return out;
}

/* Build a compose snippet — named-arg style. */
function composeSnippet(componentName, args) {
  if (args.length === 0) return T(componentName) + PUNC('()');
  const lines = args.map(([k, v]) => `    ${k} ${EQ} ${v}`).join(PUNC(',') + '\n');
  return T(componentName) + PUNC('(') + '\n' + lines + '\n' + PUNC(')');
}

/* ─────────── Tooltip family ─────────── */
const TOOLTIP_V2_DEV = {
  'cta=one-·-icon=yes-·-description-·-header-—-the-hero-variant': {
    swift: swiftSnippet('EBTooltip', STR('Heading'), [
      ['ebDescription', STR('Helpful tip')],
      ['ebLeadingIcon', T('Image') + PUNC('(') + 'systemName' + PUNC(':') + ' ' + STR('info.circle') + PUNC(')')],
      ['ebPrimaryAction', STR('Got it') + PUNC(', ') + 'action' + PUNC(': { }')],
    ]),
    compose: composeSnippet('EBTooltip', [
      ['title', STR('Heading')],
      ['description', STR('Helpful tip')],
      ['leadingIcon', PUNC('{ ') + T('Icon') + PUNC('(') + T('Icons') + PUNC('.') + DOT('Filled') + PUNC('.') + DOT('Info') + PUNC(', null) }')],
      ['primaryAction', T('EBTooltipAction') + PUNC('(') + STR('Got it') + PUNC(') { }')],
    ]),
  },
  'cta=one-·-description-·-header-—-tip-with-action': {
    swift: swiftSnippet('EBTooltip', STR('Heading'), [
      ['ebDescription', STR('Helpful tip')],
      ['ebPrimaryAction', STR('Got it') + PUNC(', ') + 'action' + PUNC(': { }')],
    ]),
    compose: composeSnippet('EBTooltip', [
      ['title', STR('Heading')],
      ['description', STR('Helpful tip')],
      ['primaryAction', T('EBTooltipAction') + PUNC('(') + STR('Got it') + PUNC(') { }')],
    ]),
  },
  'cta=none-·-icon=yes-·-description-·-header-—-icon-+-explanatory-text': {
    swift: swiftSnippet('EBTooltip', STR('Heading'), [
      ['ebDescription', STR('Helpful tip')],
      ['ebLeadingIcon', T('Image') + PUNC('(') + 'systemName' + PUNC(':') + ' ' + STR('info.circle') + PUNC(')')],
    ]),
    compose: composeSnippet('EBTooltip', [
      ['title', STR('Heading')],
      ['description', STR('Helpful tip')],
      ['leadingIcon', PUNC('{ ') + T('Icon') + PUNC('(') + T('Icons') + PUNC('.') + DOT('Filled') + PUNC('.') + DOT('Info') + PUNC(', null) }')],
    ]),
  },
  'cta=none-·-description-·-header-—-plain-tip-card': {
    swift: swiftSnippet('EBTooltip', STR('Heading'), [['ebDescription', STR('Helpful tip')]]),
    compose: composeSnippet('EBTooltip', [['title', STR('Heading')], ['description', STR('Helpful tip')]]),
  },
  'cta=none-·-header-only-—-pointer/label': {
    swift: swiftSnippet('EBTooltip', STR('Heading')),
    compose: composeSnippet('EBTooltip', [['title', STR('Heading')]]),
  },
  'cta=none-·-description-only-—-concise-explanation': {
    swift: swiftSnippet('EBTooltip', STR('') + PUNC(', ') + 'description' + PUNC(': ') + STR('Helpful tip'), []),
    compose: composeSnippet('EBTooltip', [['description', STR('Helpful tip')]]),
  },
  'cta=two-·-description-—-back-+-next-walkthrough': {
    swift: swiftSnippet('EBTooltip', STR('Heading'), [
      ['ebDescription', STR('Step 2 of 4')],
      ['ebSecondaryAction', STR('Back') + PUNC(', ') + 'action' + PUNC(': { }')],
      ['ebPrimaryAction', STR('Next') + PUNC(', ') + 'action' + PUNC(': { }')],
    ]),
    compose: composeSnippet('EBTooltip', [
      ['title', STR('Heading')],
      ['description', STR('Step 2 of 4')],
      ['secondaryAction', T('EBTooltipAction') + PUNC('(') + STR('Back') + PUNC(') { }')],
      ['primaryAction', T('EBTooltipAction') + PUNC('(') + STR('Next') + PUNC(') { }')],
    ]),
  },
  'cta=one-·-description-·-no-header-—-tip-→-single-cta': {
    swift: swiftSnippet('EBTooltip', STR('') + PUNC(', ') + 'description' + PUNC(': ') + STR('Helpful tip'), [
      ['ebPrimaryAction', STR('Got it') + PUNC(', ') + 'action' + PUNC(': { }')],
    ]),
    compose: composeSnippet('EBTooltip', [
      ['description', STR('Helpful tip')],
      ['primaryAction', T('EBTooltipAction') + PUNC('(') + STR('Got it') + PUNC(') { }')],
    ]),
  },
};

const ONBOARDING_DEV = {};
['top','bottom','left','right'].forEach((p) => {
  const key = `pointer=${p}-—-target-element-${p === 'top' ? 'above' : p === 'bottom' ? 'below' : p === 'left' ? 'to-the-left' : 'to-the-right'}`;
  ONBOARDING_DEV[key] = {
    swift: swiftSnippet('EBOnboardingTooltip', STR('Heading'), [
      ['ebDescription', STR('Onboarding hint')],
      ['ebPointer', DOT(p)],
      ['ebOnDismiss', PUNC('{ }')],
    ]),
    compose: composeSnippet('EBOnboardingTooltip', [
      ['title', STR('Heading')],
      ['description', STR('Onboarding hint')],
      ['pointer', T('EBPointer') + PUNC('.') + DOT(p.charAt(0).toUpperCase() + p.slice(1))],
      ['onDismiss', PUNC('{ }')],
    ]),
  };
});

const BLURRED_DEV = {};
['top','right','bottom','left'].forEach((p) => {
  const sufMap = { top: 'pointer-anchored-above-surface', right: 'pointer-on-right-edge', bottom: 'pointer-below-surface', left: 'pointer-on-left-edge' };
  const key = `pointer=${p}-—-${sufMap[p]}`;
  BLURRED_DEV[key] = {
    swift: swiftSnippet('EBBlurredTooltip', STR('Heading'), [
      ['ebDescription', STR('Tip on photo')],
      ['ebPointer', DOT(p)],
    ]),
    compose: composeSnippet('EBBlurredTooltip', [
      ['title', STR('Heading')],
      ['description', STR('Tip on photo')],
      ['pointer', T('EBPointer') + PUNC('.') + DOT(p.charAt(0).toUpperCase() + p.slice(1))],
    ]),
  };
});

/* ─────────── Date Picker family ─────────── */
const DP_DEV = {
  'dp-spec-default-empty':  { swift: swiftSnippet('EBDatePicker', '$selectedDate' + PUNC(', ') + 'placeholder' + PUNC(': ') + STR('Select a date')), compose: composeSnippet('EBDatePicker', [['date', 'selectedDate'], ['onDateChange', PUNC('{ }')], ['placeholder', STR('Select a date')]]) },
  'dp-spec-default-filled': { swift: swiftSnippet('EBDatePicker', '$selectedDate', []), compose: composeSnippet('EBDatePicker', [['date', 'selectedDate'], ['onDateChange', PUNC('{ }')]]) },
  'dp-spec-active-empty':   { swift: swiftSnippet('EBDatePicker', '$selectedDate' + PUNC(', ') + 'placeholder' + PUNC(': ') + STR('Select a date'), [['ebFocused', KW('true')]]),
                              compose: composeSnippet('EBDatePicker', [['date', 'selectedDate'], ['onDateChange', PUNC('{ }')], ['focused', KW('true')]]) },
  'dp-spec-active-filled':  { swift: swiftSnippet('EBDatePicker', '$selectedDate', [['ebFocused', KW('true')]]),
                              compose: composeSnippet('EBDatePicker', [['date', 'selectedDate'], ['onDateChange', PUNC('{ }')], ['focused', KW('true')]]) },
  'dp-spec-disabled':       { swift: swiftSnippet('EBDatePicker', '$selectedDate', [['disabled', KW('true')]]),
                              compose: composeSnippet('EBDatePicker', [['date', 'selectedDate'], ['onDateChange', PUNC('{ }')], ['enabled', KW('false')]]) },
};

const DPG_DEV = {
  'dpg-spec-date':  { swift: swiftSnippet('EBDatePickerGroup', '$selectedDate', [['ebView', DOT('day')]]),
                      compose: composeSnippet('EBDatePickerGroup', [['date', 'selectedDate'], ['view', T('EBPickerView') + PUNC('.') + DOT('Day')]]) },
  'dpg-spec-month': { swift: swiftSnippet('EBDatePickerGroup', '$selectedDate', [['ebView', DOT('month')]]),
                      compose: composeSnippet('EBDatePickerGroup', [['date', 'selectedDate'], ['view', T('EBPickerView') + PUNC('.') + DOT('Month')]]) },
  'dpg-spec-year':  { swift: swiftSnippet('EBDatePickerGroup', '$selectedDate', [['ebView', DOT('year')]]),
                      compose: composeSnippet('EBDatePickerGroup', [['date', 'selectedDate'], ['view', T('EBPickerView') + PUNC('.') + DOT('Year')]]) },
};

const DPI_DEV = {
  'dpi-spec-default':          { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('default')]]),  compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('Default')]]) },
  'dpi-spec-today':            { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('today')]]),    compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('Today')]]) },
  'dpi-spec-selected':         { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('selected')]]), compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('Selected')]]) },
  'dpi-spec-range':            { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('inRange')]]),  compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('InRange')]]) },
  'dpi-spec-prevnext':         { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('adjacent')]]), compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('Adjacent')]]) },
  'dpi-spec-default-disabled': { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('default')], ['disabled', KW('true')]]),
                                 compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('Default')], ['enabled', KW('false')]]) },
  'dpi-spec-today-disabled':   { swift: swiftSnippet('EBDayCell', 'date', [['ebState', DOT('today')], ['disabled', KW('true')]]),
                                 compose: composeSnippet('EBDayCell', [['date', 'date'], ['state', T('EBDayState') + PUNC('.') + DOT('Today')], ['enabled', KW('false')]]) },
};

const MYPI_DEV = {
  'mypi-spec-default':  { swift: swiftSnippet('EBMonthYearCell', 'value', [['ebState', DOT('default')]]),  compose: composeSnippet('EBMonthYearCell', [['value', 'value'], ['state', T('EBCellState') + PUNC('.') + DOT('Default')]]) },
  'mypi-spec-today':    { swift: swiftSnippet('EBMonthYearCell', 'value', [['ebState', DOT('today')]]),    compose: composeSnippet('EBMonthYearCell', [['value', 'value'], ['state', T('EBCellState') + PUNC('.') + DOT('Today')]]) },
  'mypi-spec-selected': { swift: swiftSnippet('EBMonthYearCell', 'value', [['ebState', DOT('selected')]]), compose: composeSnippet('EBMonthYearCell', [['value', 'value'], ['state', T('EBCellState') + PUNC('.') + DOT('Selected')]]) },
};

/* ─────────── Table family ─────────── */
const TABLE_DEV = {
  'header-row-—-37-/-65px-tall': { swift: swiftSnippet('EBTable.Header', STR('Title') + PUNC(', ') + 'description' + PUNC(': ') + STR('Section description')),
                                   compose: composeSnippet('EBTableHeader', [['title', STR('Title')], ['description', STR('Section description')]]) },
  'content-row-—-56px-tall':     { swift: swiftSnippet('EBTable.Row', STR('Label') + PUNC(', ') + 'value' + PUNC(': ') + STR('Value')),
                                   compose: composeSnippet('EBTableRow', [['label', STR('Label')], ['value', STR('Value')]]) },
};
const TABLE_TX_DEV = {
  'header-row-—-36-/-62px-tall': { swift: swiftSnippet('EBTransactionTable.Header', STR('Section') + PUNC(', ') + 'preamble' + PUNC(': ') + STR('Today')),
                                   compose: composeSnippet('EBTransactionTableHeader', [['title', STR('Section')], ['preamble', STR('Today')]]) },
  'content-row-—-72.5px-tall':   { swift: swiftSnippet('EBTransactionTable.Row', 'transaction' + PUNC(': ') + 'item'),
                                   compose: composeSnippet('EBTransactionTableRow', [['transaction', 'item']]) },
};
const TABLE_SCHED_DEV = {
  'type-=-no-display-amount-—-50.5px-tall': { swift: swiftSnippet('EBSchedulingTable.Row', 'item' + PUNC(', ') + 'type' + PUNC(': ') + DOT('noAmount')),
                                              compose: composeSnippet('EBSchedulingTableRow', [['item', 'item'], ['type', T('EBScheduleType') + PUNC('.') + DOT('NoAmount')]]) },
  'type-=-2-amounts-display-—-89.5px-tall': { swift: swiftSnippet('EBSchedulingTable.Row', 'item' + PUNC(', ') + 'type' + PUNC(': ') + DOT('twoAmounts')),
                                              compose: composeSnippet('EBSchedulingTableRow', [['item', 'item'], ['type', T('EBScheduleType') + PUNC('.') + DOT('TwoAmounts')]]) },
  'type-=-4-amounts-display-—-132.5px-tall':{ swift: swiftSnippet('EBSchedulingTable.Row', 'item' + PUNC(', ') + 'type' + PUNC(': ') + DOT('fourAmounts')),
                                              compose: composeSnippet('EBSchedulingTableRow', [['item', 'item'], ['type', T('EBScheduleType') + PUNC('.') + DOT('FourAmounts')]]) },
};

const PLAN = {
  'tooltip-v2': TOOLTIP_V2_DEV,
  'onboarding-tooltip': ONBOARDING_DEV,
  'tooltip-blurred': BLURRED_DEV,
  'date-picker': DP_DEV,
  'date-picker-group': DPG_DEV,
  'date-picker-item': DPI_DEV,
  'month-year-picker-item': MYPI_DEV,
  'table': TABLE_DEV,
  'table-transaction': TABLE_TX_DEV,
  'table-scheduling': TABLE_SCHED_DEV,
};

let total = 0;
let touchedComps = 0;

for (const [slug, perCard] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();

  let cardChanges = 0;
  for (const card of data.style.specCards) {
    const dev = perCard[card.cardKey];
    if (!dev) { console.log(`- ${slug}/${card.cardKey}: no DEV plan`); continue; }
    card.swift = dev.swift;
    card.compose = dev.compose;
    cardChanges++;
    total++;
  }
  if (cardChanges > 0) {
    const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(file, out, 'utf8');
    touchedComps++;
    console.log(`✓ ${slug}: ${cardChanges} card(s) DEV authored`);
  }
}

console.log(`\nDone. ${total} card(s) across ${touchedComps} components — DEV mode authored.`);
