#!/usr/bin/env node
/* Final 2 components — voucher-asset (5119:1664) + voucher-card-horizontal (5119:1786).
 * Both Restructure verdict, no spec cards yet. Authoring 2-3 representative cards each
 * with token-bound DES sections + EBVoucher* DEV snippets. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function load(slug) {
  const raw = fs.readFileSync(path.join(DATA_DIR, slug + '.ts'), 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  return (new Function('return ' + m[1]))();
}

function save(slug, data) {
  const exportName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const out = `import type { ComponentData } from '../types';\n\nexport const ${exportName}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(DATA_DIR, slug + '.ts'), out);
}

const T = (s) => `<span class="syn-type">${s}</span>`;
const K = (s) => `<span class="syn-kw">${s}</span>`;
const P = (s) => `<span class="syn-punc">${s}</span>`;
const E = () => `<span class="syn-eq">=</span>`;
const S = (s) => `<span class="syn-str">"${s}"</span>`;

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

// ── voucher-asset cards ─────────────────────────────────────────────────
const voucherAssetCards = [
  {
    cardKey: 'default-with-discount',
    title: 'Default — with discount badge',
    node: '5119:1664',
    description: 'Default voucher asset with brand discount badge in the top-left. Used as the visual hero on Voucher Card.',
    previewHtml: '<div class="spec-preview-body" id="va-spec-0"></div>',
    sections: des(
      { Status: 'Default', 'Has discount badge': 'Yes', 'Badge label': '50% OFF' },
      {
        'Badge bg': '#1972F9',
        'Badge bg token': 'main/badge/brand/heavy/background',
        'Badge label': '#FFFFFF',
        'Badge label token': 'main/badge/brand/heavy/label',
      },
      { Width: '144 (fill image)', Height: '144', 'Badge height': '20', 'Badge padding (h)': '8', 'Badge radius': '4', 'Badge top': '8', 'Badge left': '8' },
      [
        { k: 'Badge style', v: 'Primary/Label/Small' },
        { k: 'Font', v: 'Proxima Soft' },
        { k: 'Size', v: '14' },
        { k: 'Weight', v: '700 (Bold)' },
        { k: 'Line-height', v: '14' },
        { k: 'Tracking', v: '0.25' },
      ],
    ),
    swift: `${T('EBVoucherAsset')}${P('(')}\n    image${P(': ')}${T('Image')}${P('(')}${S('voucher-cinema')}${P('),')}\n    discountLabel${P(': ')}${S('50% OFF')}\n${P(')')}`,
    compose: `${T('EBVoucherAsset')}${P('(')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}voucher_cinema${P(',')}\n    discountLabel ${E()} ${S('50% OFF')}\n${P(')')}`,
  },
  {
    cardKey: 'no-badge',
    title: 'No badge — image only',
    node: '5119:1664',
    description: 'Voucher asset rendered without the discount badge — used when the parent card already shows discount info elsewhere.',
    previewHtml: '<div class="spec-preview-body" id="va-spec-1"></div>',
    sections: des(
      { Status: 'Default', 'Has discount badge': 'No', 'Badge label': '–' },
      {
        Surface: 'Image only',
        'Surface token': 'image fill (no token)',
      },
      { Width: '144 (fill image)', Height: '144', Padding: '0', Radius: '0' },
      [{ k: 'N/A', v: 'No text in this variant', mono: false }],
    ),
    swift: `${T('EBVoucherAsset')}${P('(')}\n    image${P(': ')}${T('Image')}${P('(')}${S('voucher-cinema')}${P(')')}\n${P(')')}`,
    compose: `${T('EBVoucherAsset')}${P('(')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}voucher_cinema\n${P(')')}`,
  },
  {
    cardKey: 'expired-overlay',
    title: 'Expired — dimmed with overlay',
    node: '5119:1664',
    description: 'Voucher asset for expired vouchers — image rendered behind a translucent dimmer to signal unavailability.',
    previewHtml: '<div class="spec-preview-body" id="va-spec-2"></div>',
    sections: des(
      { Status: 'Expired', 'Has discount badge': 'Yes', 'Has overlay': 'Yes' },
      {
        'Overlay bg': '#020E223D (24% opacity)',
        'Overlay bg token': 'bg/color-bg-overlay-weak',
        'Badge bg (muted)': '#C2C5CA',
        'Badge bg (muted) token': 'main/badge/muted/light/background',
        'Badge label': '#FFFFFF',
        'Badge label token': 'main/badge/muted/light/label',
      },
      { Width: '144', Height: '144', 'Overlay coverage': 'Full image', 'Badge height': '20', 'Badge top': '8', 'Badge left': '8' },
      [
        { k: 'Badge style', v: 'Primary/Label/Small' },
        { k: 'Font', v: 'Proxima Soft · Bold 14' },
      ],
    ),
    swift: `${T('EBVoucherAsset')}${P('(')}\n    image${P(': ')}${T('Image')}${P('(')}${S('voucher-cinema')}${P('),')}\n    discountLabel${P(': ')}${S('50% OFF')}${P(',')}\n    state${P(': ')}${P('.')}expired\n${P(')')}`,
    compose: `${T('EBVoucherAsset')}${P('(')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}voucher_cinema${P(',')}\n    discountLabel ${E()} ${S('50% OFF')}${P(',')}\n    state ${E()} ${T('EBVoucherAssetState')}${P('.')}Expired\n${P(')')}`,
  },
];

// ── voucher-card-horizontal cards ───────────────────────────────────────
const voucherCardHorizontalCards = [
  {
    cardKey: 'default',
    title: 'Default — active voucher',
    node: '5119:1786',
    description: 'Active voucher card layout — image left, title + amounts + metadata right. Default state used in voucher catalogs.',
    previewHtml: '<div class="spec-preview-body" id="vch-spec-0"></div>',
    sections: des(
      { Status: 'Default', 'Has original price': 'Yes', 'Has metadata row': 'Yes' },
      {
        'Surface bg': '#FFFFFF',
        'Surface bg token': 'main/vouchers/color/default/bg',
        'Title color': '#0A2757',
        'Title color token': 'main/vouchers/color/default/label-title',
        'Amount color': '#2340A9',
        'Amount color token': 'main/vouchers/color/label-amount-horizontal',
        'Original amount color': '#90A8D0',
        'Original amount color token': 'main/vouchers/color/default/label-amount-original',
        'Shadow color': '#020E220F (~6%)',
        'Shadow token': 'app/shadow/shadow-low',
      },
      { Width: '336', 'Min height': '144', 'Image area': '144 × 144', 'Body padding': '12', Gap: '8', 'Corner radius': '6', 'Shadow blur': '4' },
      [
        { k: 'Title style', v: 'Primary/Multi-line Label/Base' },
        { k: 'Title font', v: 'Proxima Soft · Bold 16 · LH 20 · Track 0.25' },
        { k: 'Amount style', v: 'Primary/Label/Small' },
        { k: 'Amount font', v: 'Proxima Soft · Bold 14 · LH 14' },
        { k: 'Original amount style', v: 'Primary/Label/Light/Small (semibold)' },
        { k: 'Metadata style', v: 'Secondary/Bold/Small Caption (BarkAda · 10)' },
      ],
    ),
    swift: `${T('EBVoucherCard')}${P('(')}\n    title${P(': ')}${S('Cinema voucher — 50% off')}${P(',')}\n    amount${P(': ')}${S('₱150')}${P(',')}\n    originalAmount${P(': ')}${S('₱300')}${P(',')}\n    metadata${P(': ')}${S('Valid until Dec 31')}${P(',')}\n    image${P(': ')}${T('Image')}${P('(')}${S('voucher-cinema')}${P('),')}\n    orientation${P(': ')}${P('.')}horizontal\n${P(')')}`,
    compose: `${T('EBVoucherCard')}${P('(')}\n    title ${E()} ${S('Cinema voucher — 50% off')}${P(',')}\n    amount ${E()} ${S('₱150')}${P(',')}\n    originalAmount ${E()} ${S('₱300')}${P(',')}\n    metadata ${E()} ${S('Valid until Dec 31')}${P(',')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}voucher_cinema${P(',')}\n    orientation ${E()} ${T('EBVoucherOrientation')}${P('.')}Horizontal\n${P(')')}`,
  },
  {
    cardKey: 'expired',
    title: 'Expired — dimmed metadata, muted colors',
    node: '5119:1786',
    description: 'Expired voucher state. Title and amount shift to muted colors; original price still strike-through; image gets the expired overlay.',
    previewHtml: '<div class="spec-preview-body" id="vch-spec-1"></div>',
    sections: des(
      { Status: 'Expired', 'Has original price': 'Yes', 'Has overlay': 'Yes' },
      {
        'Surface bg': '#FFFFFF',
        'Surface bg token': 'main/vouchers/color/expired/bg',
        'Title color (expired)': '#445C85',
        'Title color token': 'main/vouchers/color/expired/label-title',
        'Amount color (expired)': '#6780A9',
        'Amount color token': 'main/vouchers/color/expired/label-amount',
        'Original amount color': '#90A8D0',
        'Original amount color token': 'main/vouchers/color/expired/label-amount-original',
        'Metadata color': '#6780A9',
        'Metadata color token': 'main/vouchers/color/expired/label-metadata',
        'Image overlay': '#020E223D (24% opacity)',
        'Image overlay token': 'bg/color-bg-overlay-weak',
      },
      { Width: '336', 'Min height': '144', 'Image area': '144 × 144', 'Body padding': '12', Gap: '8', 'Corner radius': '6' },
      [
        { k: 'Title style', v: 'Primary/Multi-line Label/Base' },
        { k: 'Amount style', v: 'Primary/Label/Small' },
        { k: 'Metadata style', v: 'Secondary/Bold/Small Caption' },
      ],
    ),
    swift: `${T('EBVoucherCard')}${P('(')}\n    title${P(': ')}${S('Cinema voucher — 50% off')}${P(',')}\n    amount${P(': ')}${S('₱150')}${P(',')}\n    originalAmount${P(': ')}${S('₱300')}${P(',')}\n    metadata${P(': ')}${S('Expired Mar 14')}${P(',')}\n    image${P(': ')}${T('Image')}${P('(')}${S('voucher-cinema')}${P('),')}\n    orientation${P(': ')}${P('.')}horizontal${P(',')}\n    state${P(': ')}${P('.')}expired\n${P(')')}`,
    compose: `${T('EBVoucherCard')}${P('(')}\n    title ${E()} ${S('Cinema voucher — 50% off')}${P(',')}\n    amount ${E()} ${S('₱150')}${P(',')}\n    originalAmount ${E()} ${S('₱300')}${P(',')}\n    metadata ${E()} ${S('Expired Mar 14')}${P(',')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}voucher_cinema${P(',')}\n    orientation ${E()} ${T('EBVoucherOrientation')}${P('.')}Horizontal${P(',')}\n    state ${E()} ${T('EBVoucherState')}${P('.')}Expired\n${P(')')}`,
  },
  {
    cardKey: 'no-original',
    title: 'No original price — single amount',
    node: '5119:1786',
    description: 'Slim variant when the voucher has no compared/strike-through price. Renders a single amount line.',
    previewHtml: '<div class="spec-preview-body" id="vch-spec-2"></div>',
    sections: des(
      { Status: 'Default', 'Has original price': 'No', 'Has metadata row': 'Yes' },
      {
        'Surface bg': '#FFFFFF',
        'Surface bg token': 'main/vouchers/color/default/bg',
        'Title color': '#0A2757',
        'Title color token': 'main/vouchers/color/default/label-title',
        'Amount color': '#2340A9',
        'Amount color token': 'main/vouchers/color/label-amount-horizontal',
      },
      { Width: '336', 'Min height': '144', 'Image area': '144 × 144', 'Body padding': '12', Gap: '8', 'Corner radius': '6' },
      [
        { k: 'Title style', v: 'Primary/Multi-line Label/Base' },
        { k: 'Amount style', v: 'Primary/Label/Small' },
      ],
    ),
    swift: `${T('EBVoucherCard')}${P('(')}\n    title${P(': ')}${S('Free coffee voucher')}${P(',')}\n    amount${P(': ')}${S('FREE')}${P(',')}\n    metadata${P(': ')}${S('Valid until May 1')}${P(',')}\n    image${P(': ')}${T('Image')}${P('(')}${S('voucher-coffee')}${P('),')}\n    orientation${P(': ')}${P('.')}horizontal\n${P(')')}`,
    compose: `${T('EBVoucherCard')}${P('(')}\n    title ${E()} ${S('Free coffee voucher')}${P(',')}\n    amount ${E()} ${S('FREE')}${P(',')}\n    metadata ${E()} ${S('Valid until May 1')}${P(',')}\n    image ${E()} ${T('R')}${P('.')}drawable${P('.')}voucher_coffee${P(',')}\n    orientation ${E()} ${T('EBVoucherOrientation')}${P('.')}Horizontal\n${P(')')}`,
  },
];

// ── Apply ───────────────────────────────────────────────────────────────
const va = load('voucher-asset');
va.style.specCards = voucherAssetCards;
save('voucher-asset', va);
console.log(`✓ voucher-asset: ${voucherAssetCards.length} card(s) authored`);

const vch = load('voucher-card-horizontal');
vch.style.specCards = voucherCardHorizontalCards;
save('voucher-card-horizontal', vch);
console.log(`✓ voucher-card-horizontal: ${voucherCardHorizontalCards.length} card(s) authored`);

console.log(`\nDone. ${voucherAssetCards.length + voucherCardHorizontalCards.length} new spec cards.`);
