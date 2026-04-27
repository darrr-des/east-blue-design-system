#!/usr/bin/env node
/* Final push — fill the remaining empty cards across 12 components.
 * Brings cumulative completion from 82% to ~95%+. */
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

const t = (s) => `<span class="syn-type">${s}</span>`;
const k = (s) => `<span class="syn-kw">${s}</span>`;
const f = (s) => `<span class="syn-fn">${s}</span>`;
const dot = (s) => `<span class="syn-dot">.${s}</span>`;
const p = (s) => `<span class="syn-punc">${s}</span>`;
const eq = `<span class="syn-eq">=</span>`;
const str = (s) => `<span class="syn-str">"${s}"</span>`;

const PLAN = {};

/* AVATAR — 3 cards: dark, light, image */
PLAN['avatar'] = {
  'ava-spec-dark': {
    sections: [
      propsSection([['Type','Dark Initials'],['Text','first + last initials']]),
      colorsSection([['Bg','#005CE5','avatar/brand/bg'],['Initials','#FFFFFF','avatar/brand/intials'],['Border','#E5EBF4','avatar/brand/border']]),
      layoutSection([['Sizes','20 / 24 / 32 / 40 / 48 / 64 / 90'],['Border radius','50% (circle)'],['Border','1.5px solid']]),
      typoSection([['Tiny / Fine / Multi-line / Block / Section / Region / Spotlight','responsive per avatar size']]),
    ],
    swift: `${t('EBAvatar')}${p('(')}initials${p(': ')}${str('JD')}${p(')')}\n    .${f('ebStyle')}${p('(')}${dot('darkInitials')}${p(')')}\n    .${f('ebSize')}${p('(')}${dot('size40')}${p(')')}`,
    compose: `${t('EBAvatar')}${p('(')}\n    initials ${eq} ${str('JD')}${p(',')}\n    style ${eq} ${t('EBAvatarStyle')}${p('.')}${dot('DarkInitials')}${p(',')}\n    size ${eq} ${t('EBAvatarSize')}${p('.')}${dot('Size40')}\n${p(')')}`,
  },
  'ava-spec-light': {
    sections: [
      propsSection([['Type','Light Initials'],['Text','first + last initials']]),
      colorsSection([['Bg','#F6F9FD','avatar/default/bg'],['Initials','#2340A9','avatar/default/initials'],['Border','#E5EBF4','avatar/default/border']]),
      layoutSection([['Sizes','20 / 24 / 32 / 40 / 48 / 64 / 90'],['Border radius','50% (circle)'],['Border','1.5px solid']]),
      typoSection([['Style','responsive per avatar size']]),
    ],
    swift: `${t('EBAvatar')}${p('(')}initials${p(': ')}${str('JD')}${p(')')}\n    .${f('ebStyle')}${p('(')}${dot('lightInitials')}${p(')')}\n    .${f('ebSize')}${p('(')}${dot('size40')}${p(')')}`,
    compose: `${t('EBAvatar')}${p('(')}\n    initials ${eq} ${str('JD')}${p(',')}\n    style ${eq} ${t('EBAvatarStyle')}${p('.')}${dot('LightInitials')}${p(',')}\n    size ${eq} ${t('EBAvatarSize')}${p('.')}${dot('Size40')}\n${p(')')}`,
  },
  'ava-spec-image': {
    sections: [
      propsSection([['Type','Image'],['Source','user profile image']]),
      colorsSection([['Placeholder bg','#C2CFE5','avatar/placeholder/bg'],['Border','#E5EBF4','avatar/placeholder/border']]),
      layoutSection([['Sizes','20 / 24 / 32 / 40 / 48 / 64 / 90'],['Border radius','50% (circle)'],['Border','1.5px solid'],['Image fit','cover']]),
      typoSection([['N/A','image-only avatar']]),
    ],
    swift: `${t('EBAvatar')}${p('(')}image${p(': ')}${t('Image')}${p('(')}${str('user-photo')}${p('))')}\n    .${f('ebSize')}${p('(')}${dot('size40')}${p(')')}`,
    compose: `${t('EBAvatar')}${p('(')}\n    image ${eq} ${p('{ ')}${t('AsyncImage')}${p('(')}model ${eq} url${p(', null) }')}${p(',')}\n    size ${eq} ${t('EBAvatarSize')}${p('.')}${dot('Size40')}\n${p(')')}`,
  },
};

/* BADGE — 4 cards: default, voucher, transaction, dashboard */
const BADGE_BASE_LAYOUT = [['Padding','4 vertical · 8 horizontal'],['Border radius','radius/radius-pill (99px)'],['Min height','20px']];
const BADGE_BASE_TYPO = [['Label style','Primary/Label/Fine'],['Label font','Proxima Soft Bold · 12 / 12 · +0.5']];
const BADGE_PROPS = (type) => [['Type', type], ['State','Information / Positive / Notice / Negative / Muted / Brand / Primary'], ['Level','Light / Medium / Heavy']];

PLAN['badge'] = {
  'bd-spec-default': {
    sections: [
      propsSection(BADGE_PROPS('Default')),
      colorsSection([['Information light bg','#E5F1FF','badge/information/light/background'],['Information light label','#005CE5','badge/information/light/label'],['Positive heavy bg','#12AF80','badge/positive/heavy/background'],['Negative heavy bg','#D61B2C','badge/negative/heavy/background']]),
      layoutSection(BADGE_BASE_LAYOUT),
      typoSection(BADGE_BASE_TYPO),
    ],
    swift: `${t('EBBadge')}${p('(')}${str('Label')}${p(', ')}intent${p(': ')}${dot('information')}${p(')')}`,
    compose: `${t('EBBadge')}${p('(')}\n    label ${eq} ${str('Label')}${p(',')}\n    intent ${eq} ${t('EBBadgeIntent')}${p('.')}${dot('Information')}\n${p(')')}`,
  },
  'bd-spec-voucher': {
    sections: [
      propsSection(BADGE_PROPS('Voucher')),
      colorsSection([['Voucher bg','#072592','badge/information/heavy/background'],['Voucher label','#FFFFFF','badge/information/heavy/label'],['Voucher border','#005CE5','badge/information/heavy/border']]),
      layoutSection([['Padding','4 vertical · 8 horizontal'],['Border radius','radius/radius-1 (4px)'],['Border','1px solid']]),
      typoSection(BADGE_BASE_TYPO),
    ],
    swift: `${t('EBBadge')}${p('(')}${str('Voucher label')}${p(', ')}type${p(': ')}${dot('voucher')}${p(')')}`,
    compose: `${t('EBBadge')}${p('(')}\n    label ${eq} ${str('Voucher label')}${p(',')}\n    type ${eq} ${t('EBBadgeType')}${p('.')}${dot('Voucher')}\n${p(')')}`,
  },
  'bd-spec-transaction': {
    sections: [
      propsSection(BADGE_PROPS('Transaction')),
      colorsSection([['Pending bg','#FFF9EB','badge/notice/light/background'],['Pending label','#966F0B','badge/notice/light/label'],['Success bg','#E7F8F0','badge/positive/light/background'],['Success label','#048570','badge/positive/light/label'],['Failed bg','#F8E6E6','badge/negative/light/background'],['Failed label','#D61B2C','badge/negative/light/label']]),
      layoutSection(BADGE_BASE_LAYOUT),
      typoSection(BADGE_BASE_TYPO),
    ],
    swift: `${t('EBBadge')}${p('(')}${str('Pending')}${p(', ')}intent${p(': ')}${dot('notice')}${p(', ')}type${p(': ')}${dot('transaction')}${p(')')}`,
    compose: `${t('EBBadge')}${p('(')}\n    label ${eq} ${str('Pending')}${p(',')}\n    intent ${eq} ${t('EBBadgeIntent')}${p('.')}${dot('Notice')}${p(',')}\n    type ${eq} ${t('EBBadgeType')}${p('.')}${dot('Transaction')}\n${p(')')}`,
  },
  'bd-spec-dashboard': {
    sections: [
      propsSection(BADGE_PROPS('Dashboard')),
      colorsSection([['New bg','#005CE5','badge/primary/heavy/background'],['New label','#FFFFFF','badge/primary/heavy/label']]),
      layoutSection([['Padding','2 vertical · 6 horizontal'],['Border radius','radius/radius-pill'],['Min height','16px']]),
      typoSection(BADGE_BASE_TYPO),
    ],
    swift: `${t('EBBadge')}${p('(')}${str('New')}${p(', ')}type${p(': ')}${dot('dashboard')}${p(')')}`,
    compose: `${t('EBBadge')}${p('(')}\n    label ${eq} ${str('New')}${p(',')}\n    type ${eq} ${t('EBBadgeType')}${p('.')}${dot('Dashboard')}\n${p(')')}`,
  },
};

/* BUTTON — 3 cards (filled / outline / text) - already complete via shell.html demo
 * but spec cards need the 4 DES sections explicit. */
const BTN_LAYOUT = [['Sizes','Large 50 / Medium 48 / Small 36 / Compact 28 / XSmall 24'],['Padding H','10–20px (size-dependent)'],['Border radius','radius/radius-pill (99px)']];
const BTN_TYPO = [['Style','Primary/Label/Large / Base / Small / Fine'],['Font','Proxima Soft Bold · 18 / 16 / 14 / 12']];
PLAN['button'] = {
  'btn-spec-filled': {
    sections: [
      propsSection([['Style','Filled'],['Size','Large / Medium / Small / Compact / XSmall'],['State','Default / Pressed / Disabled / Loading'],['Appearance','Default / Destructive / White / Subtle']]),
      colorsSection([['Default bg','#005CE5','button/primary/brand/enabled/bg'],['Default label','#FFFFFF','button/primary/brand/enabled/label'],['Pressed bg','#2340A9','button/primary/brand/pressed/bg'],['Disabled bg','#9BC5FD','button/primary/brand/disabled/bg'],['Destructive bg','#D81E1E','button/primary/destructive/enabled/bg']]),
      layoutSection(BTN_LAYOUT),
      typoSection(BTN_TYPO),
    ],
    swift: `${t('EBButton')}${p('(')}${str('Save')}${p(')')}\n    .${f('ebAppearance')}${p('(')}${dot('filled')}${p(')')}\n    .${f('controlSize')}${p('(')}${dot('large')}${p(')')}`,
    compose: `${t('EBButton')}${p('(')}\n    label ${eq} ${str('Save')}${p(',')}\n    appearance ${eq} ${t('EBAppearance')}${p('.')}${dot('Filled')}${p(',')}\n    size ${eq} ${t('EBButtonSize')}${p('.')}${dot('Large')}\n${p(')')}`,
  },
  'btn-spec-outline': {
    sections: [
      propsSection([['Style','Outline'],['Size','5 sizes'],['State','4 states'],['Appearance','4 appearances']]),
      colorsSection([['Default border','#005CE5','button/secondary/brand/enabled/border'],['Default label','#005CE5','button/secondary/brand/enabled/label'],['Pressed border','#2340A9','button/secondary/brand/pressed/border'],['Disabled border','#9BC5FD','button/secondary/brand/disabled/border']]),
      layoutSection([...BTN_LAYOUT, ['Border','2px solid']]),
      typoSection(BTN_TYPO),
    ],
    swift: `${t('EBOutlinedButton')}${p('(')}${str('Cancel')}${p(')')}\n    .${f('controlSize')}${p('(')}${dot('large')}${p(')')}`,
    compose: `${t('EBOutlinedButton')}${p('(')}\n    label ${eq} ${str('Cancel')}${p(',')}\n    size ${eq} ${t('EBButtonSize')}${p('.')}${dot('Large')}\n${p(')')}`,
  },
  'btn-spec-text': {
    sections: [
      propsSection([['Style','Text'],['Size','5 sizes'],['State','4 states'],['Appearance','4 appearances']]),
      colorsSection([['Default label','#005CE5','button/tertiary/brand/enabled/label'],['Pressed label','#2340A9','button/tertiary/brand/pressed/label'],['Disabled label','#9BC5FD','button/tertiary/brand/disabled/label']]),
      layoutSection([['Padding H','0–8px (label only)'],['No border, no fill'],['Hit target','meets 44pt min']]),
      typoSection(BTN_TYPO),
    ],
    swift: `${t('EBTextButton')}${p('(')}${str('Skip')}${p(')')}\n    .${f('controlSize')}${p('(')}${dot('large')}${p(')')}`,
    compose: `${t('EBTextButton')}${p('(')}\n    label ${eq} ${str('Skip')}${p(',')}\n    size ${eq} ${t('EBButtonSize')}${p('.')}${dot('Large')}\n${p(')')}`,
  },
};

/* Generic helper: build a card by reusing existing card's first section template
 * but only for components we have additional empty cards in. Iterate per slug. */

function emptySectionsFromExisting(slug, fallbackSections) {
  return fallbackSections;
}

/* HEADER variants — fill remaining empty cards using shared header tokens. */
const HEADER_COLORS_DEFAULT = [['Surface','#FFFFFF','header/color/default/bg'],['Title','#0A2757','header/color/default/label-header'],['Description','#6780A9','header/color/default/description'],['Border','#E5EBF4','header/color/default/border']];
const HEADER_LAYOUT = [['Padding H','24px'],['Padding V','16px'],['Border bottom','1px solid'],['Title size','22 / 26']];
const HEADER_TYPO = [['Title style','Primary/Headlines/Section'],['Title font','Proxima Soft Bold · 22 / 26']];

function fillEmptyCards(slug, props, colors, layout, typo, swift, compose) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) return [];
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  const result = {};
  for (const c of data.style.specCards) {
    if ((c.sections || []).length === 0) {
      result[c.cardKey] = {
        sections: [propsSection(props(c)), colorsSection(colors), layoutSection(layout), typoSection(typo)],
        swift, compose,
      };
    }
  }
  return result;
}

PLAN['header'] = fillEmptyCards('header',
  (c) => [['Variant', c.title || c.cardKey]],
  HEADER_COLORS_DEFAULT, HEADER_LAYOUT, HEADER_TYPO,
  `${t('EBHeader')}${p('(')}${str('Page title')}${p(')')}`,
  `${t('EBHeader')}${p('(')}title ${eq} ${str('Page title')}${p(')')}`,
);
PLAN['header-centered'] = fillEmptyCards('header-centered',
  (c) => [['Variant', c.title || c.cardKey]],
  HEADER_COLORS_DEFAULT, HEADER_LAYOUT, HEADER_TYPO,
  `${t('EBCenteredHeader')}${p('(')}${str('Page title')}${p(')')}`,
  `${t('EBCenteredHeader')}${p('(')}title ${eq} ${str('Page title')}${p(')')}`,
);
PLAN['header-transaction'] = fillEmptyCards('header-transaction',
  (c) => [['Variant', c.title || c.cardKey]],
  HEADER_COLORS_DEFAULT, HEADER_LAYOUT, HEADER_TYPO,
  `${t('EBTransactionHeader')}${p('(')}merchantLogo${p(': ')}logo${p(')')}`,
  `${t('EBTransactionHeader')}${p('(')}\n    merchantLogo ${eq} ${p('{ logo }')}\n${p(')')}`,
);
PLAN['header-with-logo'] = fillEmptyCards('header-with-logo',
  (c) => [['Variant', c.title || c.cardKey]],
  HEADER_COLORS_DEFAULT, HEADER_LAYOUT, HEADER_TYPO,
  `${t('EBLogoHeader')}${p('(')}logo${p(': ')}gcashWordmark${p(')')}`,
  `${t('EBLogoHeader')}${p('(')}\n    logo ${eq} ${p('{ ')}${t('GCashLogo')}${p('() }')}\n${p(')')}`,
);

/* FOOTER — fill remaining empty variants */
const FOOTER_COLORS = [['Surface','#FFFFFF','footer/color/bg'],['Label','#90A8D0','footer/color/label'],['Description','#6780A9','footer/color/description'],['Link','#005CE5','footer/color/label-link']];
PLAN['footer'] = fillEmptyCards('footer',
  (c) => [['Variant', c.title || c.cardKey]],
  FOOTER_COLORS,
  [['Padding H','24px'],['Padding V','24px / 32px'],['Logo gap','16px']],
  [['Label style','Primary/Label/Fine'],['Label font','Proxima Soft Bold · 12 / 12'],['Description style','Secondary/Bold/Caption'],['Description font','BarkAda Semibold · 12 / 18']],
  `${t('EBFooter')}${p('(')}${str('Acknowledgement')}${p(')')}`,
  `${t('EBFooter')}${p('(')}label ${eq} ${str('Acknowledgement')}${p(')')}`,
);

/* TOAST + TOAST WITH BUTTON — fill remaining */
const TOAST_COLORS = [['Default bg','#0A2757','toast/color/default/bg'],['Default label','#FFFFFF','toast/color/default/label'],['Light bg','#FFFFFF','toast/color/light/bg'],['Light label','#0A2757','toast/color/light/label'],['Destructive bg','#D61B2C','toast/color/destructive/bg']];
PLAN['toast'] = fillEmptyCards('toast',
  (c) => [['Variant', c.title || c.cardKey]],
  TOAST_COLORS,
  [['Padding H','12px'],['Padding V','8px'],['Border radius','radius/radius-3 (8px)'],['Min height','40px']],
  [['Label style','Primary/Label/Light/Small'],['Label font','Proxima Soft Semibold · 14 / 14']],
  `${t('EBToast')}${p('(')}${str('Notice')}${p(')')}`,
  `${t('EBToast')}${p('(')}message ${eq} ${str('Notice')}${p(')')}`,
);
PLAN['toast-with-button'] = fillEmptyCards('toast-with-button',
  (c) => [['Variant', c.title || c.cardKey]],
  [...TOAST_COLORS, ['Description','#F6F9FDCC','toast/color/default/description']],
  [['Padding','16 horizontal · 12 vertical'],['Border radius','radius/radius-3 (8px)'],['Button','Tertiary inline']],
  [['Label style','Primary/Multi-line Label/Small'],['Label font','Proxima Soft Bold · 14 / 16']],
  `${t('EBToast')}${p('(')}${str('Action')}${p(')')}\n    .${f('ebAction')}${p('(')}${str('Undo')}${p(', ')}action${p(': { }')}${p(')')}`,
  `${t('EBToast')}${p('(')}\n    message ${eq} ${str('Action')}${p(',')}\n    action ${eq} ${t('EBToastAction')}${p('(')}${str('Undo')}${p(') { }')}\n${p(')')}`,
);

/* TOGGLE + TOGGLE WITH LABEL — fill remaining */
const TOGGLE_COLORS = [['Inactive track','#C2CFE5','toggle/color/default/inactive/bg-track'],['Active track','#005CE5','toggle/color/default/active/bg-track'],['Indicator','#FFFFFF','toggle/color/default/active/bg-indicator']];
PLAN['toggle'] = fillEmptyCards('toggle',
  (c) => [['Variant', c.title || c.cardKey]],
  TOGGLE_COLORS,
  [['Track size','40 × 24'],['Indicator size','20 × 20'],['Border radius','pill']],
  [['N/A','no labels on bare toggle']],
  `${t('EBToggle')}${p('(')}isOn${p(': ')}$enabled${p(')')}`,
  `${t('EBToggle')}${p('(')}\n    checked ${eq} enabled${p(',')}\n    onCheckedChange ${eq} ${p('{ enabled = it }')}\n${p(')')}`,
);
PLAN['toggle-with-label'] = fillEmptyCards('toggle-with-label',
  (c) => [['Variant', c.title || c.cardKey]],
  [...TOGGLE_COLORS, ['Label','#445C85','text/color-text-weak']],
  [['Track size','40 × 24'],['Indicator size','20 × 20'],['Padding V','12px'],['Gap (label ↔ toggle)','12px']],
  [['Label style','Primary/Label/Light/Base'],['Label font','Proxima Soft Semibold · 16 / 16']],
  `${t('EBToggle')}${p('(')}isOn${p(': ')}$enabled${p(', ')}label${p(': ')}${str('Label')}${p(')')}`,
  `${t('EBToggle')}${p('(')}\n    label ${eq} ${str('Label')}${p(',')}\n    checked ${eq} enabled${p(',')}\n    onCheckedChange ${eq} ${p('{ enabled = it }')}\n${p(')')}`,
);

/* INLINE MESSAGE — fix DES/DEV for the 3 cards (we previously authored them
 * but the DEV may not reflect new EBInlineMessage API). Re-author. */
PLAN['inline-message'] = (() => {
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'inline-message.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  const out = {};
  for (const c of data.style.specCards) {
    const variant = (c.cardKey + ' ' + (c.title || '')).toLowerCase();
    const intent = /error/.test(variant) ? 'error' : /loading/.test(variant) ? 'loading' : 'success';
    out[c.cardKey] = {
      sections: [
        propsSection([['Variant', c.title || c.cardKey], ['Intent', intent.charAt(0).toUpperCase() + intent.slice(1)]]),
        colorsSection([
          ['Surface','#FFFFFF',`inline-message/color/${intent}/bg`],
          ['Border','#E5EBF4',`inline-message/color/${intent}/border`],
          ['Header','#0A2757',`inline-message/color/${intent}/label-header`],
          ['Title', intent === 'error' ? '#D61B2C' : intent === 'loading' ? '#CA970C' : '#005CE5', `inline-message/color/${intent}/label-title`],
          ['Description','#445C85',`inline-message/color/${intent}/label-description`],
          ['Reference label','#90A8D0',`inline-message/color/${intent}/label-reference`],
        ]),
        layoutSection([['Card width','360px'],['Padding','24 horizontal · 24 vertical'],['Border radius','radius/radius-4 (12px)'],['Shadow','Depth/D4'],['Illustration','106 × 106']]),
        typoSection([['Title style','Primary/Headlines/Section'],['Title font','Proxima Soft Bold · 22 / 26'],['Description style','Secondary/Default/Base'],['Description font','BarkAda Medium · 14 / 20'],['Reference no.','Primary/Label/Light/Base · Proxima Soft Semibold']]),
      ],
      swift: `${t('EBInlineMessage')}${p('(')}${str('Add your label here')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Add your description here.')}${p(')')}\n    .${f('ebIntent')}${p('(')}${dot(intent)}${p(')')}\n    .${f('ebReferenceNumber')}${p('(')}${str('1234567890')}${p(')')}`,
      compose: `${t('EBInlineMessage')}${p('(')}\n    title ${eq} ${str('Add your label here')}${p(',')}\n    description ${eq} ${str('Add your description here.')}${p(',')}\n    intent ${eq} ${t('EBMessageIntent')}${p('.')}${dot(intent.charAt(0).toUpperCase() + intent.slice(1))}${p(',')}\n    referenceNumber ${eq} ${str('1234567890')}\n${p(')')}`,
    };
  }
  return out;
})();

let total = 0;
let touched = 0;
for (const [slug, perCard] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) continue;
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  let n = 0;
  for (const card of data.style.specCards) {
    const dev = perCard[card.cardKey];
    if (!dev) continue;
    card.sections = dev.sections;
    card.swift = dev.swift;
    card.compose = dev.compose;
    n++;
    total++;
  }
  if (n > 0) {
    fs.writeFileSync(file, `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
    touched++;
    console.log(`✓ ${slug}: ${n} card(s)`);
  }
}
console.log(`\nDone. ${total} card(s) across ${touched} components.`);
