#!/usr/bin/env node
/* Quick wins batch 3 — bring 16 cards to 100% across 13 components.
 * 10 cards need Colors+Properties; 3 need Colors+Typography; 3 need Colors+Layout.
 * All token values verified via Figma MCP variable defs. */
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
  return { label: 'Properties', rows: rows.map(([k, v, mono]) => ({ key: k, value: v, mono: !!mono })) };
}
function layoutSection(rows) {
  return { label: 'Layout', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) };
}
function typographySection(rows) {
  return { label: 'Typography', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) };
}

/* Each entry: cardKey -> { colors?, props?, layout?, typography? } */
const PLAN = {
  'carousel-card': {
    'default': {
      colors: [
        ['Heading',     '#2340A9', 'carousel/color/label-header'],
        ['Description', '#6780A9', 'carousel/color/description'],
        ['Surface',     '#FFFFFF', 'bg/color-bg-main'],
        ['Active dot',  '#005CE5', 'bg/color-bg-primary'],
        ['Inactive dot','#EEF2F9', 'bg/color-bg-strong'],
      ],
      props: [['Variant','Default'],['Aspect','3:2 hero image'],['Pagination','dots']],
    },
  },
  'carousel-discount-card': {
    'default': {
      colors: [
        ['Label',       '#0A2757', 'carousel/color/label'],
        ['Discount',    '#2340A9', 'carousel/color/value'],
        ['Surface',     '#FFFFFF', 'bg/color-bg-main'],
        ['Inverse text','#FFFFFF', 'text/color-text-inverse'],
        ['Active dot',  '#005CE5', 'bg/color-bg-primary'],
      ],
      props: [['Variant','Discount card'],['Layout','image-left + label-right']],
    },
  },
  'footer': {
    'variant-7-·-"in-partnership-with"-·-grouped-logos-(center)': {
      colors: [
        ['Surface',     '#FFFFFF', 'footer/color/bg'],
        ['Label',       '#90A8D0', 'footer/color/label'],
        ['Description', '#6780A9', 'footer/color/description'],
        ['Link',        '#005CE5', 'footer/color/label-link'],
      ],
      props: [['Variant','In partnership with'],['Logos','grouped'],['Alignment','center']],
    },
    'variant-2-·-acknowledgement-disclaimer-+-gcash×partner-(left)': {
      colors: [
        ['Surface',     '#FFFFFF', 'footer/color/bg'],
        ['Label',       '#90A8D0', 'footer/color/label'],
        ['Description', '#6780A9', 'footer/color/description'],
      ],
      typography: [
        ['Label style', 'Primary/Label/Fine'],
        ['Label font',  'Proxima Soft Bold · 12 / 12 · +0.5'],
        ['Description style', 'Secondary/Bold/Caption'],
        ['Description font',  'BarkAda Semibold · 12 / 18'],
      ],
    },
  },
  'generic-card': {
    'default-—-iconsize=64': {
      colors: [
        ['Surface',     '#FFFFFF', 'card-list/color/bg'],
        ['Border',      '#E5EBF4', 'card-list/color/border'],
        ['Title',       '#0A2757', 'card-list/color/label-header'],
        ['Description', '#445C85', 'card-list/color/description'],
        ['Label',       '#90A8D0', 'card-list/color/label'],
        ['Blurb',       '#005CE5', 'card-list/color/label-blurb'],
        ['Icon',        '#005CE5', 'card-list/color/icon'],
        ['Badge bg',    '#E5F1FF', 'badge/information/light/background'],
        ['Badge label', '#005CE5', 'badge/information/light/label'],
      ],
      props: [['IconSize','64px'],['Layout','icon-leading + content-right'],['Variant','Default']],
    },
  },
  'generic-transaction-card': {
    'default-—-label-+-badge-+-date-+-amount': {
      colors: [
        ['Surface',     '#FFFFFF', 'card-list/color/bg'],
        ['Border',      '#E5EBF4', 'card-list/color/border'],
        ['Title',       '#0A2757', 'card-list/color/label-header'],
        ['Amount',      '#0A2757', 'card-list/color/label-amount'],
        ['Metadata',    '#6780A9', 'card-list/color/label-metadata'],
        ['Icon',        '#005CE5', 'card-list/color/icon'],
        ['Badge bg',    '#E5F1FF', 'badge/information/light/background'],
        ['Badge label', '#005CE5', 'badge/information/light/label'],
      ],
      props: [['Variant','Label + badge + date + amount'],['Layout','avatar-leading + meta-right']],
    },
  },
  'progress-bar': {
    'determinate-nodes-27:64947-through-27:64985': {
      colors: [
        ['Track', '#D2E5FF', 'progress-bar/color/border-track'],
        ['Fill',  '#005CE5', 'progress-bar/color/border'],
      ],
      props: [['Mode','determinate'],['Range','0–100%'],['Track style','rounded']],
    },
  },
  'stepper-bullet': {
    'stepper---bullet-canonical-node-27:48287-(5-steps)-·-sibling-frames-27:48235-(3-steps),-27:48254-(4-steps)': {
      colors: [
        ['Active dot',   '#005CE5', 'stepper/color/bg'],
        ['Inactive dot', '#D2E5FF', 'stepper/color/bg-track'],
      ],
      props: [['Step counts','3 / 4 / 5'],['Variant','Bullet'],['Active marker','filled dot']],
    },
  },
  'stepper-circular': {
    'stepper---circular-canonical-node-27:47768-(10-steps)-·-sibling-frames-27:47819…27:48036': {
      colors: [
        ['Active label', '#005CE5', 'stepper/color/label'],
        ['Active arc',   '#005CE5', 'stepper/color/bg'],
        ['Inactive arc', '#D2E5FF', 'stepper/color/bg-track'],
      ],
      props: [['Step counts','2–10'],['Variant','Circular'],['Number style','Primary/Headlines/Block']],
    },
  },
  'stepper-dash': {
    'stepper---dash-component-set-18649:5223-·-variants-18649:5224…18649:5323': {
      colors: [
        ['Filled dash',   '#005CE5', 'stepper/color/bg'],
        ['Empty dash',    '#D2E5FF', 'stepper/color/bg-track'],
      ],
      props: [['Step count','up to 10'],['Variant','Dash (segmented)'],['Active marker','filled segment']],
    },
  },
  'toggle-with-label': {
    'today-—-single-frame': {
      colors: [
        ['Active track',     '#005CE5', 'toggle/color/default/active/bg-track'],
        ['Active indicator', '#FFFFFF', 'toggle/color/default/active/bg-indicator'],
        ['Label',            '#445C85', 'text/color-text-weak'],
      ],
      typography: [
        ['Label style', 'Primary/Label/Light/Base'],
        ['Label font',  'Proxima Soft Semibold · 16 / 16 · +0.25'],
      ],
    },
  },
  'counter': {
    'single-integer-nodes-18482:71326,-18482:71328': {
      colors: [
        ['Empty bg',     '#EEF2F9', 'counter/color/empty/bg'],
        ['Empty label',  '#C2CFE5', 'counter/color/empty/label'],
        ['Filled bg',    '#EEF2F9', 'counter/color/filled/bg'],
        ['Filled label', '#072592', 'counter/color/filled/label'],
      ],
      typography: [
        ['Label style', 'Primary/Label/Small'],
        ['Label font',  'Proxima Soft Bold · 14 / 14 · +0.25'],
      ],
    },
  },
  'header': {
    'full-stack-(preamble-+-title-+-description)': {
      colors: [
        ['Surface',   '#FFFFFF', 'header/color/default/bg'],
        ['Preamble',  '#005CE5', 'header/color/default/label-preamble'],
        ['Title',     '#0A2757', 'header/color/default/label-header'],
        ['Description','#6780A9','header/color/default/description'],
        ['Icon',      '#005CE5', 'header/color/default/icon'],
      ],
      layout: [
        ['Padding',       '24 horizontal · 16 vertical'],
        ['Title size',    '22 / 26'],
        ['Preamble size', '14 / 14'],
        ['Description size','12 / 18'],
      ],
    },
  },
  'toast': {
    'default-—-no-icon,-small-label': {
      colors: [
        ['Default bg',    '#0A2757', 'toast/color/default/bg'],
        ['Default label', '#FFFFFF', 'toast/color/default/label'],
        ['Default border','#E5EBF4', 'toast/color/default/border'],
        ['Light bg',      '#FFFFFF', 'toast/color/light/bg'],
        ['Light label',   '#0A2757', 'toast/color/light/label'],
        ['Destructive bg','#D61B2C', 'toast/color/destructive/bg'],
      ],
      layout: [
        ['Padding',     '12 horizontal · 8 vertical'],
        ['Border radius','radius/radius-3 (8px)'],
        ['Min height',  '40px'],
        ['Shadow',      'Depth/D0'],
      ],
    },
  },
  'toast-with-button': {
    'light-—-no-description': {
      colors: [
        ['Light bg',      '#FFFFFF', 'toast/color/light/bg'],
        ['Light label',   '#0A2757', 'toast/color/light/label'],
        ['Light border',  '#E5EBF4', 'toast/color/light/border'],
        ['Button label',  '#005CE5', 'comp/button v1/default/label'],
        ['Button bg',     '#FFFFFF', 'comp/button v1/default/background-primary'],
      ],
      layout: [
        ['Padding',     '16 horizontal · 12 vertical'],
        ['Border radius','radius/radius-3 (8px)'],
        ['Button',      'Tertiary inline'],
      ],
    },
  },
};

let touched = 0;

for (const [slug, cardPlans] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();

  let cardChanges = 0;
  for (const card of data.style.specCards) {
    const plan = cardPlans[card.cardKey];
    if (!plan) continue;
    const sections = card.sections || [];
    const hasLabel = (label) => sections.some((s) => s.label && s.label.toLowerCase() === label.toLowerCase());

    const newSections = [];
    if (plan.colors && !hasLabel('Colors')) newSections.push({ where: 'after-properties', sec: colorsSection(plan.colors) });
    if (plan.props && !hasLabel('Properties')) newSections.push({ where: 'first', sec: propsSection(plan.props) });
    if (plan.layout && !hasLabel('Layout')) newSections.push({ where: 'before-typography', sec: layoutSection(plan.layout) });
    if (plan.typography && !hasLabel('Typography')) newSections.push({ where: 'last', sec: typographySection(plan.typography) });

    for (const ns of newSections) {
      let idx;
      if (ns.where === 'first') idx = 0;
      else if (ns.where === 'after-properties') {
        const p = sections.findIndex((s) => /^properties$/i.test(s.label));
        idx = p >= 0 ? p + 1 : 0;
      } else if (ns.where === 'before-typography') {
        const t = sections.findIndex((s) => /^typography$/i.test(s.label));
        idx = t >= 0 ? t : sections.length;
      } else {
        idx = sections.length;
      }
      sections.splice(idx, 0, ns.sec);
    }

    if (newSections.length) {
      card.sections = sections;
      cardChanges++;
      touched++;
    }
  }
  if (cardChanges > 0) {
    const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(file, out, 'utf8');
    console.log(`✓ ${slug}: ${cardChanges} card(s) updated`);
  }
}

console.log(`\nDone. ${touched} card(s) updated total.`);
