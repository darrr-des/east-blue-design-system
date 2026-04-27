#!/usr/bin/env node
/* Final batch — fill the last 25 gap cards with hand-tailored DES sections + DEV code.
 * Each gap is keyed by `${slug}#${cardIndex}` and supplies a sections[] array (4 DES
 * sections in canonical order) plus swift/compose strings. Strategy: clone card[0]'s
 * 4 DES sections as the structural baseline, then override only the rows whose values
 * differ for that variant. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function loadComponent(slug) {
  const raw = fs.readFileSync(path.join(DATA_DIR, slug + '.ts'), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  const data = (new Function('return ' + m[1]))();
  return { raw, data };
}

function saveComponent(slug, data, raw) {
  const exportName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const out = `import type { ComponentData } from '../types';\n\nexport const ${exportName}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(DATA_DIR, slug + '.ts'), out);
}

// Helper — build a DES sections array
function des(props, colors, layout, typo) {
  const row = (k, v, mono = true) => ({ key: k, value: v, mono });
  const toRows = (obj) => Object.entries(obj).map(([k, v]) => row(k, v));
  return [
    { label: 'Properties', rows: toRows(props) },
    { label: 'Colors',     rows: toRows(colors) },
    { label: 'Layout',     rows: toRows(layout) },
    { label: 'Typography', rows: typo.map((t) => row(t.k, t.v, t.mono ?? true)) },
  ];
}

const T = (s) => `<span class="syn-type">${s}</span>`;
const K = (s) => `<span class="syn-kw">${s}</span>`;
const P = (s) => `<span class="syn-punc">${s}</span>`;
const E = () => `<span class="syn-eq">=</span>`;
const S = (s) => `<span class="syn-str">"${s}"</span>`;
const F = (s) => `<span class="syn-fn">${s}</span>`;

// ─────────────────────────────────────────────────────────────────────────────
// Targeted card patches
// Each value is: { sections, swift, compose }  (sections always 4 in canonical order)
// ─────────────────────────────────────────────────────────────────────────────

const PATCHES = {};

// ── Toggle variants ──
PATCHES['toggle#1'] = {
  sections: des(
    { State: 'Default', isActive: 'Yes' },
    {
      'Active track': '#005CE5',
      'Active track token': 'toggle/color/default/active/bg-track',
      'Active indicator': '#FFFFFF',
      'Active indicator token': 'toggle/color/default/active/bg-indicator',
    },
    { 'Track size': '48 × 24', 'Knob size': '20 × 20', 'Knob inset': '2', 'Corner radius': '12 (pill)' },
    [{ k: 'N/A', v: 'No text', mono: false }],
  ),
  swift: `${T('EBToggle')}${P('(')}isOn${P(': ')}${P('.')}constant${P('(')}${K('true')}${P('))')}`,
  compose: `${T('EBToggle')}${P('(')}\n    checked ${E()} ${K('true')}${P(',')}\n    onCheckedChange ${E()} ${P('{ }')}\n${P(')')}`,
};
PATCHES['toggle#2'] = {
  sections: des(
    { State: 'Disabled', isActive: 'No' },
    {
      'Disabled inactive track': '#EEF2F9',
      'Disabled inactive track token': 'toggle/color/disabled/inactive/bg-track',
      'Disabled indicator': '#F6F9FD',
      'Disabled indicator token': 'toggle/color/disabled/inactive/bg-indicator',
    },
    { 'Track size': '48 × 24', 'Knob size': '20 × 20', 'Knob inset': '2', 'Corner radius': '12 (pill)' },
    [{ k: 'N/A', v: 'No text', mono: false }],
  ),
  swift: `${T('EBToggle')}${P('(')}isOn${P(': ')}${P('.')}constant${P('(')}${K('false')}${P('))')}\n    ${P('.')}${F('disabled')}${P('(')}${K('true')}${P(')')}`,
  compose: `${T('EBToggle')}${P('(')}\n    checked ${E()} ${K('false')}${P(',')}\n    onCheckedChange ${E()} ${P('{ }')}${P(',')}\n    enabled ${E()} ${K('false')}\n${P(')')}`,
};
PATCHES['toggle#3'] = {
  sections: des(
    { State: 'Disabled', isActive: 'Yes' },
    {
      'Disabled active track': '#9BC5FD',
      'Disabled active track token': 'toggle/color/disabled/active/bg-track',
      'Disabled indicator': '#F6F9FD',
      'Disabled indicator token': 'toggle/color/disabled/inactive/bg-indicator',
    },
    { 'Track size': '48 × 24', 'Knob size': '20 × 20', 'Knob inset': '2', 'Corner radius': '12 (pill)' },
    [{ k: 'N/A', v: 'No text', mono: false }],
  ),
  swift: `${T('EBToggle')}${P('(')}isOn${P(': ')}${P('.')}constant${P('(')}${K('true')}${P('))')}\n    ${P('.')}${F('disabled')}${P('(')}${K('true')}${P(')')}`,
  compose: `${T('EBToggle')}${P('(')}\n    checked ${E()} ${K('true')}${P(',')}\n    onCheckedChange ${E()} ${P('{ }')}${P(',')}\n    enabled ${E()} ${K('false')}\n${P(')')}`,
};

// ── Toast variants ──
PATCHES['toast#1'] = {
  // Error — with icon, large label
  sections: des(
    { Type: 'Error', 'Has icon': 'Yes', 'Label size': 'Large', Theme: 'Dark' },
    {
      'Surface bg': '#0A2757',
      'Surface bg token': 'main/toast/error/bg',
      'Icon tint': '#FF6B6B',
      'Icon tint token': 'main/toast/error/icon',
      'Label color': '#FFFFFF',
      'Label color token': 'main/toast/error/label',
    },
    { Width: '343 (fill, 16 inset)', 'Min height': '64', 'Padding (h)': '16', 'Padding (v)': '12', 'Corner radius': '8', 'Icon size': '24 × 24', 'Gap': '12' },
    [
      { k: 'Style', v: 'Body/Medium' },
      { k: 'Font', v: 'Proxima Soft' },
      { k: 'Size', v: '14' },
      { k: 'Line-height', v: '20' },
    ],
  ),
  swift: `${T('EBToast')}${P('(')}\n    title${P(': ')}${S('Something went wrong')}${P(',')}\n    intent${P(': ')}${P('.')}error\n${P(')')}`,
  compose: `${T('EBToast')}${P('(')}\n    title ${E()} ${S('Something went wrong')}${P(',')}\n    intent ${E()} ${T('EBToastIntent')}${P('.')}Error\n${P(')')}`,
};
PATCHES['toast#2'] = {
  // Pending — with icon, large label
  sections: des(
    { Type: 'Pending', 'Has icon': 'Yes', 'Label size': 'Large', Theme: 'Dark' },
    {
      'Surface bg': '#0A2757',
      'Surface bg token': 'main/toast/pending/bg',
      'Icon tint': '#FFC857',
      'Icon tint token': 'main/toast/pending/icon',
      'Label color': '#FFFFFF',
      'Label color token': 'main/toast/pending/label',
    },
    { Width: '343 (fill, 16 inset)', 'Min height': '64', 'Padding (h)': '16', 'Padding (v)': '12', 'Corner radius': '8', 'Icon size': '24 × 24', 'Gap': '12' },
    [
      { k: 'Style', v: 'Body/Medium' },
      { k: 'Font', v: 'Proxima Soft' },
      { k: 'Size', v: '14' },
      { k: 'Line-height', v: '20' },
    ],
  ),
  swift: `${T('EBToast')}${P('(')}\n    title${P(': ')}${S('Processing your request…')}${P(',')}\n    intent${P(': ')}${P('.')}pending\n${P(')')}`,
  compose: `${T('EBToast')}${P('(')}\n    title ${E()} ${S('Processing your request…')}${P(',')}\n    intent ${E()} ${T('EBToastIntent')}${P('.')}Pending\n${P(')')}`,
};

// ── Toast With Button variants ──
PATCHES['toast-with-button#1'] = {
  // Light — with description
  sections: des(
    { Theme: 'Light', 'Has description': 'Yes' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/toast/light/bg',
      'Label color': '#0A2757',
      'Label color token': 'main/toast/light/label',
      'Description color': '#3C4A5C',
      'Description color token': 'main/toast/light/description',
      'Action color': '#005CE5',
      'Action color token': 'main/toast/light/action',
    },
    { Width: '343 (fill, 16 inset)', 'Min height': '88', 'Padding (h)': '16', 'Padding (v)': '12', 'Corner radius': '8', 'Gap': '12' },
    [
      { k: 'Title style', v: 'Body/Large' },
      { k: 'Description style', v: 'Body/Small' },
      { k: 'Action style', v: 'Body/Medium · Bold' },
    ],
  ),
  swift: `${T('EBToast')}${P('(')}\n    title${P(': ')}${S('Bills paid')}${P(',')}\n    description${P(': ')}${S('Receipt was sent to your email.')}${P(',')}\n    appearance${P(': ')}${P('.')}light${P(',')}\n    action${P(': ')}${P('.')}init${P('(')}title${P(': ')}${S('View')}${P(', ')}handler${P(': ')}${P('{ }))')}\n${P(')')}`,
  compose: `${T('EBToast')}${P('(')}\n    title ${E()} ${S('Bills paid')}${P(',')}\n    description ${E()} ${S('Receipt was sent to your email.')}${P(',')}\n    appearance ${E()} ${T('EBToastAppearance')}${P('.')}Light${P(',')}\n    actionLabel ${E()} ${S('View')}${P(',')}\n    onAction ${E()} ${P('{ }')}\n${P(')')}`,
};
PATCHES['toast-with-button#2'] = {
  // Default — no description
  sections: des(
    { Theme: 'Dark', 'Has description': 'No' },
    {
      'Surface bg': '#0A2757',
      'Surface bg token': 'main/toast/dark/bg',
      'Label color': '#FFFFFF',
      'Label color token': 'main/toast/dark/label',
      'Action color': '#9BC5FD',
      'Action color token': 'main/toast/dark/action',
    },
    { Width: '343 (fill, 16 inset)', 'Min height': '64', 'Padding (h)': '16', 'Padding (v)': '12', 'Corner radius': '8', 'Gap': '12' },
    [
      { k: 'Title style', v: 'Body/Large' },
      { k: 'Action style', v: 'Body/Medium · Bold' },
    ],
  ),
  swift: `${T('EBToast')}${P('(')}\n    title${P(': ')}${S('Bills paid')}${P(',')}\n    appearance${P(': ')}${P('.')}dark${P(',')}\n    action${P(': ')}${P('.')}init${P('(')}title${P(': ')}${S('View')}${P(', ')}handler${P(': ')}${P('{ }))')}\n${P(')')}`,
  compose: `${T('EBToast')}${P('(')}\n    title ${E()} ${S('Bills paid')}${P(',')}\n    appearance ${E()} ${T('EBToastAppearance')}${P('.')}Dark${P(',')}\n    actionLabel ${E()} ${S('View')}${P(',')}\n    onAction ${E()} ${P('{ }')}\n${P(')')}`,
};

// ── Carousel Card variants ──
PATCHES['carousel-card#1'] = {
  // With icon
  sections: des(
    { 'Has icon': 'Yes', 'Has description': 'Yes' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/card/bg',
      'Icon container bg': '#E8F1FF',
      'Icon container bg token': 'main/card/icon/bg',
      'Title color': '#0A2757',
      'Title color token': 'main/card/title',
      'Description color': '#3C4A5C',
      'Description color token': 'main/card/description',
    },
    { Width: '280', 'Min height': '160', Padding: '20', 'Corner radius': '16', 'Icon container': '48 × 48', 'Icon size': '24 × 24', Gap: '12' },
    [
      { k: 'Title style', v: 'Heading/Small' },
      { k: 'Description style', v: 'Body/Small' },
    ],
  ),
  swift: `${T('EBCarouselCard')}${P('(')}\n    title${P(': ')}${S('Send money')}${P(',')}\n    description${P(': ')}${S('Free transfers to GCash users')}${P(',')}\n    leadingIcon${P(': ')}${T('Image')}${P('(')}systemName${P(': ')}${S('paperplane.fill')}${P('))')}\n${P(')')}`,
  compose: `${T('EBCarouselCard')}${P('(')}\n    title ${E()} ${S('Send money')}${P(',')}\n    description ${E()} ${S('Free transfers to GCash users')}${P(',')}\n    leadingIcon ${E()} ${P('{ ')}${T('Icon')}${P('(')}${T('Icons')}${P('.')}Send${P(', ')}${K('null')}${P(') }')}\n${P(')')}`,
};
PATCHES['carousel-card#2'] = {
  // Skeleton loader
  sections: des(
    { State: 'Loading', 'Has content': 'No' },
    {
      'Skeleton bg': '#EEF2F9',
      'Skeleton bg token': 'main/skeleton/bg',
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/card/bg',
    },
    { Width: '280', 'Min height': '160', Padding: '20', 'Corner radius': '16', 'Bar 1 size': '120 × 12', 'Bar 2 size': '180 × 8' },
    [{ k: 'N/A', v: 'No text in skeleton state', mono: false }],
  ),
  swift: `${T('EBCarouselCard')}${P('(')}isLoading${P(': ')}${K('true')}${P(')')}`,
  compose: `${T('EBCarouselCard')}${P('(')}\n    isLoading ${E()} ${K('true')}\n${P(')')}`,
};

// ── Carousel Discount Card variants ──
PATCHES['carousel-discount-card#1'] = {
  // With violator
  sections: des(
    { 'Has violator': 'Yes', 'Discount label': '50% OFF' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/discount-card/bg',
      'Violator bg': '#D81E1E',
      'Violator bg token': 'main/discount-card/violator/bg',
      'Violator label': '#FFFFFF',
      'Violator label token': 'main/discount-card/violator/label',
      'Title color': '#0A2757',
      'Title color token': 'main/discount-card/title',
    },
    { Width: '180', Height: '220', 'Image area': '180 × 110', 'Body padding': '12', 'Violator height': '20', 'Violator padding (h)': '8', 'Corner radius': '12' },
    [
      { k: 'Violator style', v: 'Caption/Bold' },
      { k: 'Title style', v: 'Body/Medium · Bold' },
    ],
  ),
  swift: `${T('EBDiscountCard')}${P('(')}\n    title${P(': ')}${S('Cinema voucher')}${P(',')}\n    image${P(': ')}${T('Image')}${P('(')}${S('cinema')}${P('),')}\n    violator${P(': ')}${S('50% OFF')}\n${P(')')}`,
  compose: `${T('EBDiscountCard')}${P('(')}\n    title ${E()} ${S('Cinema voucher')}${P(',')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}cinema${P(',')}\n    violator ${E()} ${S('50% OFF')}\n${P(')')}`,
};
PATCHES['carousel-discount-card#2'] = {
  // Skeleton loader
  sections: des(
    { State: 'Loading', 'Has content': 'No' },
    {
      'Skeleton bg': '#EEF2F9',
      'Skeleton bg token': 'main/skeleton/bg',
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/discount-card/bg',
    },
    { Width: '180', Height: '220', 'Image placeholder': '180 × 110', 'Title bar': '120 × 12', 'Subtitle bar': '80 × 8' },
    [{ k: 'N/A', v: 'No text in skeleton state', mono: false }],
  ),
  swift: `${T('EBDiscountCard')}${P('(')}isLoading${P(': ')}${K('true')}${P(')')}`,
  compose: `${T('EBDiscountCard')}${P('(')}\n    isLoading ${E()} ${K('true')}\n${P(')')}`,
};

// ── Counter ──
PATCHES['counter#1'] = {
  // Filled — with limit
  sections: des(
    { State: 'Filled', 'Has limit': 'Yes', 'Char count': '120 / 200' },
    {
      'Counter color': '#3C4A5C',
      'Counter color token': 'main/counter/label',
      'Limit color': '#3C4A5C',
      'Limit color token': 'main/counter/label',
      'Separator color': '#3C4A5C',
      'Separator color token': 'main/counter/label',
    },
    { 'Padding (top)': '4', Alignment: 'right', Gap: '0' },
    [
      { k: 'Style', v: 'Caption/Regular' },
      { k: 'Font', v: 'Proxima Soft' },
      { k: 'Size', v: '12' },
      { k: 'Line-height', v: '16' },
    ],
  ),
  swift: `${T('EBCounter')}${P('(')}\n    count${P(': ')}${T('Int')}${P('(')}${S('120')}${P(')!')}${P(',')}\n    limit${P(': ')}${T('Int')}${P('(')}${S('200')}${P(')!')}\n${P(')')}`,
  compose: `${T('EBCounter')}${P('(')}\n    count ${E()} ${S('120')}${P(',')}\n    limit ${E()} ${S('200')}\n${P(')')}`,
};

// ── Generic Card ──
PATCHES['generic-card#1'] = {
  // Skeleton loading state
  sections: des(
    { State: 'Loading', 'Has content': 'No' },
    {
      'Skeleton bg': '#EEF2F9',
      'Skeleton bg token': 'main/skeleton/bg',
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/card/bg',
    },
    { 'Min height': '88', Padding: '16', 'Corner radius': '12', 'Icon placeholder': '64 × 64', 'Bar 1 size': '120 × 14', 'Bar 2 size': '180 × 10' },
    [{ k: 'N/A', v: 'No text in skeleton state', mono: false }],
  ),
  swift: `${T('EBGenericCard')}${P('(')}isLoading${P(': ')}${K('true')}${P(')')}`,
  compose: `${T('EBGenericCard')}${P('(')}\n    isLoading ${E()} ${K('true')}\n${P(')')}`,
};

// ── Generic Transaction Card ──
PATCHES['generic-transaction-card#1'] = {
  // With avatar
  sections: des(
    { 'Leading slot': 'Avatar', 'Has badge': 'Yes', 'Has amount': 'Yes' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/transaction-card/bg',
      'Title color': '#0A2757',
      'Title color token': 'main/transaction-card/title',
      'Date color': '#3C4A5C',
      'Date color token': 'main/transaction-card/date',
      'Amount color': '#0A2757',
      'Amount color token': 'main/transaction-card/amount',
    },
    { 'Min height': '72', Padding: '16', 'Corner radius': '12', 'Avatar size': '40 × 40', Gap: '12' },
    [
      { k: 'Title style', v: 'Body/Medium · Bold' },
      { k: 'Date style', v: 'Caption/Regular' },
      { k: 'Amount style', v: 'Body/Medium · Bold' },
    ],
  ),
  swift: `${T('EBTransactionCard')}${P('(')}\n    title${P(': ')}${S('Juan Dela Cruz')}${P(',')}\n    date${P(': ')}${S('Today, 3:24 PM')}${P(',')}\n    amount${P(': ')}${S('₱500.00')}${P(',')}\n    leading${P(': ')}${P('.')}avatar${P('(')}${S('JD')}${P('))')}\n${P(')')}`,
  compose: `${T('EBTransactionCard')}${P('(')}\n    title ${E()} ${S('Juan Dela Cruz')}${P(',')}\n    date ${E()} ${S('Today, 3:24 PM')}${P(',')}\n    amount ${E()} ${S('₱500.00')}${P(',')}\n    leading ${E()} ${P('{ ')}${T('EBAvatar')}${P('(')}initials ${E()} ${S('JD')}${P(') }')}\n${P(')')}`,
};
PATCHES['generic-transaction-card#2'] = {
  // No amount
  sections: des(
    { 'Leading slot': 'Icon', 'Has badge': 'No', 'Has amount': 'No' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/transaction-card/bg',
      'Title color': '#0A2757',
      'Title color token': 'main/transaction-card/title',
      'Date color': '#3C4A5C',
      'Date color token': 'main/transaction-card/date',
    },
    { 'Min height': '72', Padding: '16', 'Corner radius': '12', 'Icon size': '24 × 24', Gap: '12' },
    [
      { k: 'Title style', v: 'Body/Medium · Bold' },
      { k: 'Date style', v: 'Caption/Regular' },
    ],
  ),
  swift: `${T('EBTransactionCard')}${P('(')}\n    title${P(': ')}${S('Profile updated')}${P(',')}\n    date${P(': ')}${S('Yesterday, 9:01 AM')}\n${P(')')}`,
  compose: `${T('EBTransactionCard')}${P('(')}\n    title ${E()} ${S('Profile updated')}${P(',')}\n    date ${E()} ${S('Yesterday, 9:01 AM')}\n${P(')')}`,
};

// ── Header variants ──
PATCHES['header-centered#1'] = {
  // Light / default surface
  sections: des(
    { Surface: 'Light', 'Title alignment': 'Center', 'Has back': 'Yes' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/header/light/bg',
      'Title color': '#0A2757',
      'Title color token': 'main/header/light/title',
      'Icon color': '#0A2757',
      'Icon color token': 'main/header/light/icon',
    },
    { Height: '56', 'Padding (h)': '16', 'Icon size': '24 × 24', 'Title gap': '8' },
    [
      { k: 'Style', v: 'Heading/Small · Bold' },
      { k: 'Font', v: 'Proxima Soft' },
      { k: 'Size', v: '18' },
      { k: 'Line-height', v: '24' },
    ],
  ),
  swift: `${T('EBHeader')}${P('(')}\n    title${P(': ')}${S('Account')}${P(',')}\n    appearance${P(': ')}${P('.')}light${P(',')}\n    centered${P(': ')}${K('true')}\n${P(')')}`,
  compose: `${T('EBHeader')}${P('(')}\n    title ${E()} ${S('Account')}${P(',')}\n    appearance ${E()} ${T('EBHeaderAppearance')}${P('.')}Light${P(',')}\n    centered ${E()} ${K('true')}\n${P(')')}`,
};
PATCHES['header-transaction#1'] = {
  // With email row
  sections: des(
    { 'Has email': 'Yes', Surface: 'Dark' },
    {
      'Surface bg': '#0A2757',
      'Surface bg token': 'main/header/dark/bg',
      'Title color': '#FFFFFF',
      'Title color token': 'main/header/dark/title',
      'Email color': '#C2CFE5',
      'Email color token': 'main/header/dark/subtitle',
      'Icon color': '#FFFFFF',
      'Icon color token': 'main/header/dark/icon',
    },
    { 'Min height': '88', 'Padding (h)': '16', 'Padding (v)': '16', 'Icon size': '24 × 24', Gap: '12' },
    [
      { k: 'Title style', v: 'Heading/Small · Bold' },
      { k: 'Email style', v: 'Caption/Regular' },
    ],
  ),
  swift: `${T('EBTransactionHeader')}${P('(')}\n    title${P(': ')}${S('Send to bank')}${P(',')}\n    email${P(': ')}${S('user@example.com')}\n${P(')')}`,
  compose: `${T('EBTransactionHeader')}${P('(')}\n    title ${E()} ${S('Send to bank')}${P(',')}\n    email ${E()} ${S('user@example.com')}\n${P(')')}`,
};
PATCHES['header-with-logo#1'] = {
  // Light logo variant
  sections: des(
    { Surface: 'Light', 'Logo color': 'Brand' },
    {
      'Surface bg': '#FFFFFF',
      'Surface bg token': 'main/header/light/bg',
      'Logo color': '#005CE5',
      'Logo color token': 'main/header/logo/brand',
      'Icon color': '#0A2757',
      'Icon color token': 'main/header/light/icon',
    },
    { Height: '56', 'Padding (h)': '16', 'Logo size': '88 × 24', 'Icon size': '24 × 24' },
    [{ k: 'N/A', v: 'Logo only — no text', mono: false }],
  ),
  swift: `${T('EBHeader')}${P('(')}\n    logo${P(': ')}${T('Image')}${P('(')}${S('gcash-logo')}${P('),')}\n    appearance${P(': ')}${P('.')}light\n${P(')')}`,
  compose: `${T('EBHeader')}${P('(')}\n    logo ${E()} ${T('R')}${P('.')}drawable${P('.')}gcash_logo${P(',')}\n    appearance ${E()} ${T('EBHeaderAppearance')}${P('.')}Light\n${P(')')}`,
};

// ── Inline Text variants ──
PATCHES['inline-text#1'] = {
  // With Clipboard
  sections: des(
    { 'Has clipboard': 'Yes', Layout: 'Label-left, Value+icon-right' },
    {
      'Label color': '#3C4A5C',
      'Label color token': 'main/inline-text/label',
      'Value color': '#0A2757',
      'Value color token': 'main/inline-text/value',
      'Icon color': '#005CE5',
      'Icon color token': 'main/inline-text/icon',
    },
    { 'Row height': 'auto', Gap: '8', 'Icon size': '20 × 20', Padding: '0' },
    [
      { k: 'Label style', v: 'Body/Small' },
      { k: 'Value style', v: 'Body/Medium · Bold' },
    ],
  ),
  swift: `${T('EBInlineText')}${P('(')}\n    label${P(': ')}${S('Reference no.')}${P(',')}\n    value${P(': ')}${S('1234567890')}${P(',')}\n    trailing${P(': ')}${P('.')}clipboard\n${P(')')}`,
  compose: `${T('EBInlineText')}${P('(')}\n    label ${E()} ${S('Reference no.')}${P(',')}\n    value ${E()} ${S('1234567890')}${P(',')}\n    trailing ${E()} ${T('EBInlineTextTrailing')}${P('.')}Clipboard\n${P(')')}`,
};
PATCHES['inline-text#2'] = {
  // With Badge
  sections: des(
    { 'Trailing slot': 'Badge', 'Badge style': 'Brand' },
    {
      'Label color': '#3C4A5C',
      'Label color token': 'main/inline-text/label',
      'Badge bg': '#E8F1FF',
      'Badge bg token': 'main/badge/brand/bg',
      'Badge label': '#005CE5',
      'Badge label token': 'main/badge/brand/label',
    },
    { 'Row height': 'auto', Gap: '8', 'Badge height': '20', 'Badge padding (h)': '8' },
    [
      { k: 'Label style', v: 'Body/Small' },
      { k: 'Badge style', v: 'Caption/Bold' },
    ],
  ),
  swift: `${T('EBInlineText')}${P('(')}\n    label${P(': ')}${S('Status')}${P(',')}\n    trailing${P(': ')}${P('.')}badge${P('(')}${S('Active')}${P('))')}\n${P(')')}`,
  compose: `${T('EBInlineText')}${P('(')}\n    label ${E()} ${S('Status')}${P(',')}\n    trailing ${E()} ${P('{ ')}${T('EBBadge')}${P('(')}${S('Active')}${P(') }')}\n${P(')')}`,
};
PATCHES['inline-text#3'] = {
  // With Description
  sections: des(
    { 'Has description': 'Yes', Layout: 'Vertical stack' },
    {
      'Label color': '#3C4A5C',
      'Label color token': 'main/inline-text/label',
      'Value color': '#0A2757',
      'Value color token': 'main/inline-text/value',
      'Description color': '#3C4A5C',
      'Description color token': 'main/inline-text/description',
    },
    { 'Row height': 'auto', Gap: '4', 'Description gap': '2', Padding: '0' },
    [
      { k: 'Label style', v: 'Body/Small' },
      { k: 'Value style', v: 'Body/Medium · Bold' },
      { k: 'Description style', v: 'Caption/Regular' },
    ],
  ),
  swift: `${T('EBInlineText')}${P('(')}\n    label${P(': ')}${S('Total amount')}${P(',')}\n    value${P(': ')}${S('₱1,250.00')}${P(',')}\n    description${P(': ')}${S('Includes ₱25 service fee')}\n${P(')')}`,
  compose: `${T('EBInlineText')}${P('(')}\n    label ${E()} ${S('Total amount')}${P(',')}\n    value ${E()} ${S('₱1,250.00')}${P(',')}\n    description ${E()} ${S('Includes ₱25 service fee')}\n${P(')')}`,
};
PATCHES['inline-text#4'] = {
  // With Text Link
  sections: des(
    { 'Trailing slot': 'TextLink', 'Link label': 'View details' },
    {
      'Label color': '#3C4A5C',
      'Label color token': 'main/inline-text/label',
      'Value color': '#0A2757',
      'Value color token': 'main/inline-text/value',
      'Link color': '#005CE5',
      'Link color token': 'main/text-link/label',
    },
    { 'Row height': 'auto', Gap: '8', Padding: '0' },
    [
      { k: 'Label style', v: 'Body/Small' },
      { k: 'Value style', v: 'Body/Medium · Bold' },
      { k: 'Link style', v: 'Body/Small · Bold' },
    ],
  ),
  swift: `${T('EBInlineText')}${P('(')}\n    label${P(': ')}${S('Order #1234')}${P(',')}\n    trailing${P(': ')}${P('.')}link${P('(')}${S('View details')}${P(', ')}action${P(': ')}${P('{ }))')}\n${P(')')}`,
  compose: `${T('EBInlineText')}${P('(')}\n    label ${E()} ${S('Order #1234')}${P(',')}\n    trailing ${E()} ${P('{ ')}${T('EBTextLink')}${P('(')}${S('View details')}${P(') { } }')}\n${P(')')}`,
};

// ── Toggle With Label ──
PATCHES['toggle-with-label#1'] = {
  // Proposed — trailing placement
  sections: des(
    { Placement: 'Trailing', Label: 'Receive notifications', isActive: 'Yes' },
    {
      'Label color': '#0A2757',
      'Label color token': 'main/toggle-with-label/label',
      'Active track': '#005CE5',
      'Active track token': 'toggle/color/default/active/bg-track',
      'Indicator': '#FFFFFF',
      'Indicator token': 'toggle/color/default/active/bg-indicator',
    },
    { 'Row height': '40', Gap: '12', 'Toggle size': '48 × 24', 'Knob size': '20 × 20' },
    [
      { k: 'Label style', v: 'Body/Medium' },
      { k: 'Font', v: 'Proxima Soft' },
      { k: 'Size', v: '14' },
      { k: 'Line-height', v: '20' },
    ],
  ),
  swift: `${T('EBToggleRow')}${P('(')}\n    label${P(': ')}${S('Receive notifications')}${P(',')}\n    isOn${P(': ')}${P('$enabled')}${P(',')}\n    placement${P(': ')}${P('.')}trailing\n${P(')')}`,
  compose: `${T('EBToggleRow')}${P('(')}\n    label ${E()} ${S('Receive notifications')}${P(',')}\n    checked ${E()} enabled${P(',')}\n    onCheckedChange ${E()} ${P('{ enabled = it }')}${P(',')}\n    placement ${E()} ${T('EBTogglePlacement')}${P('.')}Trailing\n${P(')')}`,
};

// ─────────────────────────────────────────────────────────────────────────────
// Apply patches
// ─────────────────────────────────────────────────────────────────────────────

const grouped = {};
for (const key of Object.keys(PATCHES)) {
  const [slug, idx] = key.split('#');
  grouped[slug] ||= [];
  grouped[slug].push({ idx: parseInt(idx, 10), patch: PATCHES[key] });
}

let touched = 0;
for (const [slug, gaps] of Object.entries(grouped)) {
  const { data, raw } = loadComponent(slug);
  for (const { idx, patch } of gaps) {
    const card = data.style.specCards[idx];
    if (!card) continue;
    card.sections = patch.sections;
    card.swift = patch.swift;
    card.compose = patch.compose;
    touched++;
  }
  saveComponent(slug, data, raw);
  console.log(`✓ ${slug}: patched ${gaps.length} card(s)`);
}

console.log(`\nDone. ${touched} card(s) across ${Object.keys(grouped).length} components.`);
