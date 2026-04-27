#!/usr/bin/env node
/* Form Elements + Dropdown + Action List deep-dive — author DES (4 sections)
 * + DEV (swift+compose) for ~53 cards across 14 components. */
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

const t   = (s) => `<span class="syn-type">${s}</span>`;
const k   = (s) => `<span class="syn-kw">${s}</span>`;
const f   = (s) => `<span class="syn-fn">${s}</span>`;
const d   = (s) => `<span class="syn-dot">.${s}</span>`;
const p   = (s) => `<span class="syn-punc">${s}</span>`;
const eq  = `<span class="syn-eq">=</span>`;
const str = (s) => `<span class="syn-str">"${s}"</span>`;

/* ─── Shared Form Elements pieces ─── */
const FIELD_LAYOUT = [
  ['Field height', '48px'],
  ['Padding H',    '12px'],
  ['Padding V',    '14px'],
  ['Border radius','radius/radius-2 (6px)'],
  ['Border',       '1px solid'],
  ['Icon size',    '20 × 20'],
];
const FIELD_TYPO = [
  ['Value style', 'Primary/Label/Light/Small'],
  ['Value font',  'Proxima Soft Semibold · 14 / 14 · +0.25'],
];
const LABEL_TYPO = [
  ['Label style',     'Primary/Label/Light/Small'],
  ['Label font',      'Proxima Soft Semibold · 14 / 14 · +0.25'],
  ['Value style',     'Primary/Label/Light/Small'],
  ['Value font',      'Proxima Soft Semibold · 14 / 14 · +0.25'],
];

/* Input Field — 4 cards, one per state (default/active/error/disabled).
 * Cards already exist in data; cardKeys vary. Build by best match on title. */
const INPUT_COLORS_BY_STATE = {
  default:  [['Bg','#FFFFFF','input-field/default/bg'],['Border','#D7E0EF','input-field/default/border'],['Text','#0A2757','input-field/default/text'],['Placeholder','#90A8D0','input-field/default/placeholder']],
  active:   [['Bg','#FFFFFF','input-field/active/bg'],['Border','#005CE5','input-field/active/border'],['Text','#0A2757','input-field/active/text'],['Placeholder','#90A8D0','input-field/active/placeholder']],
  error:    [['Bg','#FFFFFF','input-field/error/bg'],['Border','#D61B2C','input-field/error/border'],['Text','#0A2757','input-field/error/text'],['Placeholder','#90A8D0','input-field/error/placeholder']],
  disabled: [['Bg','#EEF2F9','input-field/disabled/bg'],['Text','#90A8D0','input-field/disabled/text'],['Placeholder','#C2CFE5','input-field/disabled/placeholder']],
};

const LABELED_COLORS_BY_STATE = {
  default:  [['Bg','#FFFFFF','labeled-field/default/bg'],['Border','#D7E0EF','labeled-field/default/border'],['Label','#0A2757','labeled-field/default/label'],['Text','#0A2757','labeled-field/default/text'],['Placeholder','#90A8D0','labeled-field/default/placeholder']],
  active:   [['Bg','#FFFFFF','labeled-field/active/bg'],['Border','#005CE5','labeled-field/active/border'],['Label','#0A2757','labeled-field/active/label'],['Text','#0A2757','labeled-field/active/text']],
  error:    [['Bg','#FFFFFF','labeled-field/error/bg'],['Border','#D61B2C','labeled-field/error/border'],['Label','#0A2757','labeled-field/error/label'],['Text','#0A2757','labeled-field/error/text']],
  disabled: [['Bg','#EEF2F9','labeled-field/disabled/bg'],['Label','#90A8D0','labeled-field/disabled/label'],['Value','#C2CFE5','labeled-field/disabled/value']],
};

const SELECTED_COLORS_BY_STATE = {
  default:  [['Bg','#FFFFFF','selected-field/default/bg'],['Border','#D7E0EF','selected-field/default/border'],['Value','#0A2757','selected-field/default/value'],['Icon','#005CE5','selected-field/default/icon'],['Placeholder','#90A8D0','selected-field/default/placeholder']],
  active:   [['Bg','#FFFFFF','selected-field/active/bg'],['Border','#005CE5','selected-field/active/border'],['Value','#0A2757','selected-field/active/value'],['Icon','#005CE5','selected-field/active/icon']],
  error:    [['Bg','#FFFFFF','selected-field/error/bg'],['Border','#D61B2C','selected-field/error/border'],['Value','#0A2757','selected-field/error/value'],['Icon','#005CE5','selected-field/error/icon']],
  disabled: [['Bg','#EEF2F9','selected-field/disabled/bg'],['Value','#90A8D0','selected-field/disabled/value'],['Icon','#9BC5FD','selected-field/disabled/icon']],
};

/* Helper to detect state from card title/key */
const stateOf = (key, title) => {
  const s = (key + ' ' + (title || '')).toLowerCase();
  if (/disabled/.test(s)) return 'disabled';
  if (/error/.test(s))    return 'error';
  if (/active|focused|filled-active|active-filled/.test(s)) return 'active';
  return 'default';
};

function buildFieldCard(slug, comp, state, label) {
  const colorsByState = comp === 'labeled' ? LABELED_COLORS_BY_STATE
                       : comp === 'selected' ? SELECTED_COLORS_BY_STATE
                       : INPUT_COLORS_BY_STATE;
  const props = [['state', state.charAt(0).toUpperCase() + state.slice(1)], ['Variant', label]];
  return {
    sections: [
      propsSection(props),
      colorsSection(colorsByState[state]),
      layoutSection(FIELD_LAYOUT),
      typoSection(comp === 'labeled' ? LABEL_TYPO : FIELD_TYPO),
    ],
    swift:   `${t('EBInputField')}${p('(')}${str('Label')}${p(', ')}value${p(': ')}$value${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`,
    compose: `${t('EBInputField')}${p('(')}\n    label ${eq} ${str('Label')}${p(',')}\n    value ${eq} value${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`,
  };
}

/* Per-component plans. Each card → { sections, swift, compose }. */
const PLAN = {};

/* INPUT FIELD */
{
  const slug = 'input-field';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    PLAN[slug][c.cardKey] = buildFieldCard(slug, 'input', state, c.title || state);
  }
}

/* SEARCH FIELD — 2 cards, default + active. Uses input-field tokens. */
{
  const slug = 'search-field';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'input', state, c.title || state);
    card.swift   = `${t('EBSearchField')}${p('(')}placeholder${p(': ')}${str('Search')}${p(', ')}text${p(': ')}$query${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`;
    card.compose = `${t('EBSearchField')}${p('(')}\n    placeholder ${eq} ${str('Search')}${p(',')}\n    query ${eq} query${p(',')}\n    onQueryChange ${eq} ${p('{ }')}${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* SELECT FIELD — 4 cards, uses selected-field tokens. */
{
  const slug = 'select-field';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'selected', state, c.title || state);
    card.swift   = `${t('EBSelectField')}${p('(')}label${p(': ')}${str('Choose option')}${p(', ')}selection${p(': ')}$selected${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`;
    card.compose = `${t('EBSelectField')}${p('(')}\n    label ${eq} ${str('Choose option')}${p(',')}\n    selected ${eq} selected${p(',')}\n    onSelectionChange ${eq} ${p('{ }')}${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* RECIPIENT FIELD — 4 cards, uses input-field tokens + avatar slot. */
{
  const slug = 'recipient-field';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'input', state, c.title || state);
    card.swift   = `${t('EBRecipientField')}${p('(')}recipient${p(': ')}selectedRecipient${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`;
    card.compose = `${t('EBRecipientField')}${p('(')}\n    recipient ${eq} selectedRecipient${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* LABELED FIELD — 4 cards, uses labeled-field tokens. */
{
  const slug = 'labeled-field';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'labeled', state, c.title || state);
    card.swift   = `${t('EBLabeledField')}${p('(')}label${p(': ')}${str('Email')}${p(', ')}value${p(': ')}$value${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`;
    card.compose = `${t('EBLabeledField')}${p('(')}\n    label ${eq} ${str('Email')}${p(',')}\n    value ${eq} value${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* VIEW ONLY FIELD — 4 cards, read-only label + value pattern. */
{
  const slug = 'view-only-field';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'labeled', state, c.title || state);
    card.swift   = `${t('EBViewOnlyField')}${p('(')}label${p(': ')}${str('Account number')}${p(', ')}value${p(': ')}${str('•••• 1234')}${p(')')}`;
    card.compose = `${t('EBViewOnlyField')}${p('(')}\n    label ${eq} ${str('Account number')}${p(',')}\n    value ${eq} ${str('•••• 1234')}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* TEXT AREA — 4 cards, uses input-field tokens but multi-line layout. */
{
  const slug = 'text-area';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'input', state, c.title || state);
    card.sections[2] = layoutSection([['Min height','120px'],['Padding H','12px'],['Padding V','14px'],['Border radius','radius/radius-2 (6px)'],['Border','1px solid'],['Resize','vertical, snap to line height']]);
    card.swift   = `${t('EBTextArea')}${p('(')}label${p(': ')}${str('Note')}${p(', ')}value${p(': ')}$note${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}\n    .${f('ebMinLines')}${p('(')}5${p(')')}`;
    card.compose = `${t('EBTextArea')}${p('(')}\n    label ${eq} ${str('Note')}${p(',')}\n    value ${eq} note${p(',')}\n    minLines ${eq} 5${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* UPLOAD FILE — 5 cards. Uses input-field tokens + upload-specific. */
{
  const slug = 'upload-file';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const colorRows = INPUT_COLORS_BY_STATE[state];
    PLAN[slug][c.cardKey] = {
      sections: [
        propsSection([['state', state.charAt(0).toUpperCase() + state.slice(1)], ['Variant', c.title || state]]),
        colorsSection(colorRows),
        layoutSection([['Field height','48px'],['Padding H','12px'],['Border radius','radius/radius-2 (6px)'],['Upload icon','20 × 20']]),
        typoSection([['Label style', 'Primary/Label/Light/Small'], ['Label font',  'Proxima Soft Semibold · 14 / 14']]),
      ],
      swift:   `${t('EBUploadField')}${p('(')}label${p(': ')}${str('Attach file')}${p(', ')}selection${p(': ')}$file${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`,
      compose: `${t('EBUploadField')}${p('(')}\n    label ${eq} ${str('Attach file')}${p(',')}\n    file ${eq} file${p(',')}\n    onFileChange ${eq} ${p('{ }')}${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`,
    };
  }
}

/* DROPDOWN — 4 cards, uses selected-field tokens. */
{
  const slug = 'dropdown';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    const card = buildFieldCard(slug, 'selected', state, c.title || state);
    card.swift   = `${t('EBDropdown')}${p('(')}selection${p(': ')}$selected${p(', ')}options${p(': ')}items${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`;
    card.compose = `${t('EBDropdown')}${p('(')}\n    selected ${eq} selected${p(',')}\n    options ${eq} items${p(',')}\n    onSelectionChange ${eq} ${p('{ }')}${p(',')}\n    state ${eq} ${t('EBFieldState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`;
    PLAN[slug][c.cardKey] = card;
  }
}

/* DROPDOWN ITEM — 5 cards, individual rows inside a Dropdown popover. */
{
  const slug = 'dropdown-item';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const state = stateOf(c.cardKey, c.title);
    PLAN[slug][c.cardKey] = {
      sections: [
        propsSection([['state', state.charAt(0).toUpperCase() + state.slice(1)], ['Variant', c.title || state]]),
        colorsSection([
          ['Bg',     '#FFFFFF', 'dropdown-item/color/default/bg'],
          ['Label',  '#0A2757', 'dropdown-item/color/default/label'],
          ['Border', '#E5EBF4', 'dropdown-item/color/default/border'],
          ['Disabled label', '#C2CFE5', 'text/color-text-disabled'],
        ]),
        layoutSection([['Row height','48px'],['Padding H','16px'],['Padding V','12px'],['Divider','1px bottom border']]),
        typoSection([['Label style', 'Primary/Label/Light/Small'], ['Label font', 'Proxima Soft Semibold · 14 / 14']]),
      ],
      swift:   `${t('EBDropdownItem')}${p('(')}${str('Option label')}${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}`,
      compose: `${t('EBDropdownItem')}${p('(')}\n    label ${eq} ${str('Option label')}${p(',')}\n    state ${eq} ${t('EBItemState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}\n${p(')')}`,
    };
  }
}

/* DROPDOWN ITEM GROUP — 1 card, popover surface. */
{
  const slug = 'dropdown-item-group';
  PLAN[slug] = {};
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN[slug][c.cardKey] = {
      sections: [
        propsSection([['Variant', c.title || 'Default'], ['Item count', '8 (fixed)']]),
        colorsSection([
          ['Surface', '#FFFFFF', 'bg/color-bg-main'],
          ['Border',  '#E5EBF4', 'border/color-border-weak'],
          ['Shadow',  'depth 6/12', 'app/shadow/shadow'],
        ]),
        layoutSection([['Width','328px'],['Border radius','radius/radius-2 (6px)'],['Padding','8 vertical'],['Item count','up to 8']]),
        typoSection([['Item style', 'Primary/Label/Light/Small'], ['Item font', 'Proxima Soft Semibold · 14 / 14']]),
      ],
      swift:   `${t('EBDropdown')}${p('(')}selection${p(': ')}$selected${p(', ')}options${p(': ')}items${p(') {')} item ${k('in')}\n    ${t('EBDropdownItem')}${p('(')}item.label${p(')')}\n${p('}')}`,
      compose: `${t('EBDropdownMenu')}${p('(')}\n    items ${eq} items${p(',')}\n    onItemSelect ${eq} ${p('{ }')}\n${p(')')}`,
    };
  }
}

/* ACTION LIST — 3 cards (default/disabled/loading row variants). */
const ACTION_LIST_COLORS = {
  default:  [['Bg','#FFFFFF','action-list/color/default/bg'],['Label','#0A2757','action-list/color/default/label'],['Link','#005CE5','action-list/color/default/label-link'],['Chevron','#005CE5','action-list/color/default/chevron']],
  disabled: [['Bg','#FFFFFF','action-list/color/disabled/bg'],['Label','#C2CFE5','action-list/color/disabled/label'],['Chevron','#9BC5FD','action-list/color/disabled/chevron']],
  loading:  [['Bg','#FFFFFF','action-list/color/default/bg'],['Skeleton','#EEF2F9','bg/color-bg-strong']],
};
function buildActionListCard(card, state, label) {
  return {
    sections: [
      propsSection([['state', state.charAt(0).toUpperCase() + state.slice(1)], ['Variant', label]]),
      colorsSection(ACTION_LIST_COLORS[state]),
      layoutSection([['Row height','48 / 56px'],['Padding H','16px'],['Padding V','12px'],['Chevron size','24 × 24'],['Hit target','full row']]),
      typoSection([['Label style','Primary/Label/Light/Base'],['Label font','Proxima Soft Semibold · 16 / 16 · +0.25']]),
    ],
    swift:   `${t('EBActionRow')}${p('(')}${str('Account settings')}${p(', ')}icon${p(': ')}icon${p(')')}\n    .${f('ebState')}${p('(')}${d(state)}${p(')')}\n    .${f('onTap')}${p('{ }')}`,
    compose: `${t('EBActionRow')}${p('(')}\n    label ${eq} ${str('Account settings')}${p(',')}\n    leadingIcon ${eq} ${p('{ icon }')}${p(',')}\n    state ${eq} ${t('EBRowState')}${p('.')}${d(state.charAt(0).toUpperCase() + state.slice(1))}${p(',')}\n    onClick ${eq} ${p('{ }')}\n${p(')')}`,
  };
}
{
  for (const slug of ['action-list', 'action-list-counter', 'action-list-description']) {
    PLAN[slug] = {};
    const file = path.join(DATA_DIR, `${slug}.ts`);
    const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
    for (const c of data.style.specCards) {
      const sLow = (c.cardKey + ' ' + (c.title || '')).toLowerCase();
      const state = /loading|skeleton/.test(sLow) ? 'loading' : /disabled/.test(sLow) ? 'disabled' : 'default';
      PLAN[slug][c.cardKey] = buildActionListCard(c, state, c.title || c.cardKey);
    }
  }
}

let total = 0;
let touchedComps = 0;

for (const [slug, perCard] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();

  let n = 0;
  for (const card of data.style.specCards) {
    const dev = perCard[card.cardKey];
    if (!dev) continue;
    card.sections = dev.sections;
    card.swift   = dev.swift;
    card.compose = dev.compose;
    n++;
    total++;
  }
  if (n > 0) {
    fs.writeFileSync(file, `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
    touchedComps++;
    console.log(`✓ ${slug}: ${n} card(s)`);
  }
}
console.log(`\nDone. ${total} card(s) across ${touchedComps} components.`);
