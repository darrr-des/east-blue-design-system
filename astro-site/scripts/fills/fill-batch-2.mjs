#!/usr/bin/env node
/* Quick wins batch 2 — bring 16 cards to 100% across 7 components.
 * 10 cards need only Colors; 6 cards need only Properties.
 * Token values verified via Figma MCP. */
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

const COLORS_PLAN = {
  counter: {
    'empty-—-with-limit': [
      ['Empty bg',     '#EEF2F9', 'counter/color/empty/bg'],
      ['Empty label',  '#C2CFE5', 'counter/color/empty/label'],
      ['Filled bg',    '#EEF2F9', 'counter/color/filled/bg'],
      ['Filled label', '#072592', 'counter/color/filled/label'],
    ],
  },
  footer: {
    'variant-1-·-powered-by-+-disclaimer-+-help-link-(left)': [
      ['Surface',     '#FFFFFF', 'footer/color/bg'],
      ['Label',       '#90A8D0', 'footer/color/label'],
      ['Description', '#6780A9', 'footer/color/description'],
      ['Link',        '#005CE5', 'footer/color/label-link'],
    ],
  },
  header: {
    'title-only-(baseline)': [
      ['Surface',   '#FFFFFF', 'header/color/default/bg'],
      ['Title',     '#0A2757', 'header/color/default/label-header'],
      ['Preamble',  '#005CE5', 'header/color/default/label-preamble'],
      ['Description','#6780A9','header/color/default/description'],
      ['Link',      '#005CE5', 'header/color/default/label-link'],
      ['Icon',      '#005CE5', 'header/color/default/icon'],
    ],
  },
  'header-centered': {
    'dark-/-brand-surface': [
      ['Brand bg',     '#1972F9', 'header/color/brand/bg'],
      ['Brand title',  '#FFFFFF', 'header/color/brand/label-header'],
      ['Brand preamble','#FFFFFF','header/color/brand/label-preamble'],
      ['Brand label',  '#F6F9FDB8 (72% alpha)', 'header/color/brand/label'],
      ['Brand border', '#F6F9FD3D (24% alpha)', 'header/color/brand/border'],
    ],
  },
  'header-transaction': {
    'no-email': [
      ['Surface',   '#FFFFFF', 'header/color/default/bg'],
      ['Title',     '#0A2757', 'header/color/default/label-header'],
      ['Description','#6780A9','header/color/default/description'],
      ['Border',    '#E5EBF4', 'header/color/default/border'],
    ],
  },
  'header-with-logo': {
    'dark-logo-variant': [
      ['Surface',   '#FFFFFF', 'header/color/default/bg'],
      ['Title',     '#0A2757', 'header/color/default/label-header'],
      ['Description','#6780A9','header/color/default/description'],
      ['Border',    '#E5EBF4', 'header/color/default/border'],
    ],
  },
  'inline-text': {
    'default-—-label-+-value': [
      ['Label',       '#0A2757', 'inline-text/color/label'],
      ['Value',       '#445C85', 'inline-text/color/label-value'],
      ['Description', '#6780A9', 'inline-text/color/description'],
      ['Link',        '#005CE5', 'inline-text/color/label-link'],
      ['Icon',        '#445C85', 'inline-text/color/icon'],
    ],
  },
  toast: {
    'default-/-dark-—-with-icon,-large-label': [
      ['Default bg',    '#0A2757', 'toast/color/default/bg'],
      ['Default label', '#FFFFFF', 'toast/color/default/label'],
      ['Default icon',  '#FFFFFF', 'toast/color/default/icon'],
      ['Default border','#E5EBF4', 'toast/color/default/border'],
      ['Light bg',      '#FFFFFF', 'toast/color/light/bg'],
      ['Light label',   '#0A2757', 'toast/color/light/label'],
      ['Light icon',    '#0A2757', 'toast/color/light/icon'],
      ['Destructive bg','#D61B2C', 'toast/color/destructive/bg'],
      ['Destructive label','#FFFFFF','toast/color/destructive/label'],
    ],
  },
  'toast-with-button': {
    'default-—-with-description': [
      ['Default bg',    '#0A2757', 'toast/color/default/bg'],
      ['Default label', '#FFFFFF', 'toast/color/default/label'],
      ['Default desc',  '#F6F9FDCC (80% alpha)', 'toast/color/default/description'],
      ['Default border','#E5EBF4', 'toast/color/default/border'],
      ['Light bg',      '#FFFFFF', 'toast/color/light/bg'],
      ['Light label',   '#0A2757', 'toast/color/light/label'],
      ['Light desc',    '#445C85', 'toast/color/light/description'],
      ['Button label',  '#005CE5', 'comp/button v1/default/label'],
      ['Button bg',     '#FFFFFF', 'comp/button v1/default/background-primary'],
    ],
  },
  toggle: {
    'default-·-off': [
      ['Inactive track',   '#C2CFE5', 'toggle/color/default/inactive/bg-track'],
      ['Inactive indicator','#FFFFFF','toggle/color/default/inactive/bg-indicator'],
      ['Active track',     '#005CE5', 'toggle/color/default/active/bg-track'],
      ['Active indicator', '#FFFFFF', 'toggle/color/default/active/bg-indicator'],
      ['Disabled inactive track','#EEF2F9','toggle/color/disabled/inactive/bg-track'],
      ['Disabled active track',  '#9BC5FD','toggle/color/disabled/active/bg-track'],
      ['Disabled indicator','#F6F9FD','toggle/color/disabled/inactive/bg-indicator'],
    ],
  },
};

const PROPS_PLAN = {
  'amount-text-field': {
    'amt-spec-large-filled':    [['Size', 'Large'], ['State', 'Filled'],  ['Label', 'true']],
    'amt-spec-large-default':   [['Size', 'Large'], ['State', 'Default'], ['Label', 'true']],
    'amt-spec-large-error':     [['Size', 'Large'], ['State', 'Error'],   ['Label', 'true']],
    'amt-spec-default-filled':  [['Size', 'Default'],['State','Filled'],  ['Label', 'true']],
    'amt-spec-default-default': [['Size', 'Default'],['State','Default'], ['Label', 'true']],
    'amt-spec-default-error':   [['Size', 'Default'],['State','Error'],   ['Label', 'true']],
  },
};

let touched = 0;

function applyPlan(plan, builder, slot) {
  for (const [slug, perCard] of Object.entries(plan)) {
    const file = path.join(DATA_DIR, `${slug}.ts`);
    const raw = fs.readFileSync(file, 'utf8');
    const m = raw.match(/= ({[\s\S]*});\s*$/);
    if (!m) { console.error(`! ${slug}: parse failed`); continue; }
    const data = (new Function('return ' + m[1]))();
    let cardChanges = 0;
    for (const card of data.style.specCards) {
      const rows = perCard[card.cardKey];
      if (!rows) continue;
      const has = (card.sections || []).some((s) => s.label && s.label.toLowerCase() === slot.toLowerCase());
      if (has) { console.log(`- ${slug}/${card.cardKey}: already has ${slot}`); continue; }
      const sections = card.sections || [];
      // Insert position: Properties first, then Colors after Properties, etc.
      let insertAt = 0;
      if (slot === 'Colors') {
        const propsIdx = sections.findIndex((s) => /^properties$/i.test(s.label));
        insertAt = propsIdx >= 0 ? propsIdx + 1 : 0;
      }
      sections.splice(insertAt, 0, builder(rows));
      card.sections = sections;
      cardChanges++;
      touched++;
    }
    if (cardChanges > 0) {
      const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
      fs.writeFileSync(file, out, 'utf8');
      console.log(`✓ ${slug}: ${slot} added to ${cardChanges} card(s)`);
    }
  }
}

console.log('=== Adding Colors ===');
applyPlan(COLORS_PLAN, colorsSection, 'Colors');
console.log('\n=== Adding Properties ===');
applyPlan(PROPS_PLAN, propsSection, 'Properties');

console.log(`\nDone. ${touched} card(s) updated total.`);
