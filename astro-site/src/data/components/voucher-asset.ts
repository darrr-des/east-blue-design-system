import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/voucher-asset.js`.
const voucherAssetDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Status',
        prop: 'status',
        defaultValue: 'Default',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Expired', label: 'Expired' },
        ],
      },
      {
        label: 'Discount badge',
        prop: 'badge',
        defaultValue: 'Yes',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ],
      },
    ],
  },
];

export const voucherAsset: ComponentData = {
  "meta": {
    "slug": "voucher-asset",
    "name": "Voucher Asset",
    "node": "5119:1664",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=5119-1664",
    "description": "A ticket-shaped image clipped into a notched frame, used as the visual on voucher placements.",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M4 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4v-3Z\" fill=\"#E6E1EF\"/>\n      <rect x=\"18\" y=\"11\" width=\"9\" height=\"5\" rx=\"1\" fill=\"#1972F9\"/>\n      <text x=\"22.5\" y=\"14.7\" text-anchor=\"middle\" fill=\"white\" font-size=\"3.2\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n    </svg>",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Voucher",
      "text": "Superseded by <a href=\"/components/voucher\">Voucher</a>. There is no standalone asset component any more: the ticket panel is a <code>Voucher Asset</code> frame inside each Voucher version, wrapping a real <code>⤷ AssetSlot</code>. That is what the old verdict asked for — the use-case and fidelity axes are gone, artwork is instance-swapped rather than enumerated, and the notch is a vector rather than a raster mask. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "Tied to specific illustration categories. Consumers cannot supply their own voucher image — they must pick from the 10 baked-in use cases or detach the component."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Ships the ticket frame and Badge instance, but the voucher amount (\"35% off\") is hardcoded into the image, not a property. Consumers can't change the discount without swapping the whole variant."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Property schema is contradictory. <code>type=midfi</code> is an authoring state, <code>use case</code> is content, <code>size</code> and <code>orientation</code> are geometry. Cartesian space is sparse — only default and food exist in horizontal; most use cases don't. New categories require new variants."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Used inside Vertical Voucher, Horizontal Voucher, and Voucher Card Horizontal — composition works. But since content is locked to 10 categories, the parent voucher components inherit the same constraint."
      }
    ],
    "behavior": [
      {
        "state": "Image source",
        "ios": "na",
        "android": "na",
        "property": "use case enum",
        "notes": "Native doesn't switch on an enum — it reads a named asset. The Figma enum is a Figma-only crutch."
      },
      {
        "state": "Size",
        "ios": "na",
        "android": "na",
        "property": "size enum",
        "notes": "Two fixed sizes; horizontal variants override to 336×144."
      },
      {
        "state": "Discount label",
        "ios": "na",
        "android": "na",
        "property": "Badge instance",
        "notes": "Currently hardcoded string. Should be a <code>discount</code> property on the parent component."
      },
      {
        "state": "Clipping shape",
        "ios": "no",
        "android": "no",
        "property": "Mask",
        "notes": "Ticket notch + dashed center line is the only DS-specific visual primitive here."
      }
    ],
    "resolved": [],
    "open": [],
    "recommendations": [],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"va-demo-preview\"><div style=\"display:flex;flex-direction:column;gap:14px;\"><div style=\"display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;\"><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-clip-110-68\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath></defs><g clip-path=\"url(#va-clip-110-68)\"><rect width=\"110\" height=\"68\" fill=\"#D6D3DC\"></rect><text x=\"55\" y=\"26\" text-anchor=\"middle\" fill=\"#445C85\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Placeholder</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(58,24)\"><path d=\"M0 0 H52 V20 H0 Q-0 20 -0 16 V4 Q0 0 0 0 Z\" fill=\"#1972F9\"></path><rect x=\"0\" y=\"0\" width=\"52\" height=\"20\" rx=\"0\" fill=\"#1972F9\"></rect><path d=\"M4 0 H52 V20 H4 Q0 20 0 16 V4 Q0 0 4 0 Z\" fill=\"#1972F9\"></path><text x=\"26\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-clip-110-104\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath></defs><g clip-path=\"url(#va-clip-110-104)\"><rect width=\"110\" height=\"104\" fill=\"#D6D3DC\"></rect><text x=\"55\" y=\"44\" text-anchor=\"middle\" fill=\"#445C85\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Placeholder</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(58,42)\"><path d=\"M0 0 H52 V20 H0 Q-0 20 -0 16 V4 Q0 0 0 0 Z\" fill=\"#1972F9\"></path><rect x=\"0\" y=\"0\" width=\"52\" height=\"20\" rx=\"0\" fill=\"#1972F9\"></rect><path d=\"M4 0 H52 V20 H4 Q0 20 0 16 V4 Q0 0 4 0 Z\" fill=\"#1972F9\"></path><text x=\"26\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">placeholder</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Restaurant\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Restaurant\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Restaurant)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Restaurant)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Restaurant</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Restaurant\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Restaurant\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Restaurant)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Restaurant)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Restaurant</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">restaurant</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Vacation\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Vacation\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2CA6C8\"></stop><stop offset=\"1\" stop-color=\"#0F5D75\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Vacation)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Vacation)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Vacation</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Vacation\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Vacation\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2CA6C8\"></stop><stop offset=\"1\" stop-color=\"#0F5D75\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Vacation)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Vacation)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Vacation</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">vacation</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Beverage\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Beverage\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D4A373\"></stop><stop offset=\"1\" stop-color=\"#7A4C24\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Beverage)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Beverage)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Beverage</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Beverage\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Beverage\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D4A373\"></stop><stop offset=\"1\" stop-color=\"#7A4C24\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Beverage)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Beverage)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Beverage</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">beverage</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Snack\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Snack\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#B87333\"></stop><stop offset=\"1\" stop-color=\"#6B3D15\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Snack)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Snack)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Snack</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Snack\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Snack\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#B87333\"></stop><stop offset=\"1\" stop-color=\"#6B3D15\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Snack)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Snack)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Snack</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">snack</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Fashion\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Fashion\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#9AA0A6\"></stop><stop offset=\"1\" stop-color=\"#4A4F55\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Fashion)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Fashion)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Fashion</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Fashion\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Fashion\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#9AA0A6\"></stop><stop offset=\"1\" stop-color=\"#4A4F55\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Fashion)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Fashion)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Fashion</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">fashion</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Party\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Party\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5D3A9E\"></stop><stop offset=\"1\" stop-color=\"#2A1B4F\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Party)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Party)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Party</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Party\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Party\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5D3A9E\"></stop><stop offset=\"1\" stop-color=\"#2A1B4F\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Party)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Party)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Party</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">party</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Meal\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Meal\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#6B8E23\"></stop><stop offset=\"1\" stop-color=\"#365010\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Meal)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Meal)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Meal</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Meal\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Meal\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#6B8E23\"></stop><stop offset=\"1\" stop-color=\"#365010\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Meal)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Meal)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Meal</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">meal</div></div><div style=\"display:flex;flex-direction:column;gap:8px;align-items:center;\"><svg width=\"110\" height=\"68\" viewBox=\"0 0 110 68\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-68-Games\"><path d=\"M8 0 H102 Q110 0 110 8 V28 A6 6 0 0 0 110 40 V60 Q110 68 102 68 H8 Q0 68 0 60 V40 A6 6 0 0 0 0 28 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Games\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1E3A5F\"></stop><stop offset=\"1\" stop-color=\"#0B1A33\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-68-Games)\"><rect width=\"110\" height=\"68\" fill=\"url(#vag-Games)\"></rect><text x=\"55\" y=\"20\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Games</text></g><line x1=\"8\" y1=\"34\" x2=\"102\" y2=\"34\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,25)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"110\" height=\"104\" viewBox=\"0 0 110 104\" style=\"display:block\"><defs><clipPath id=\"va-pc-110-104-Games\"><path d=\"M8 0 H102 Q110 0 110 8 V46 A6 6 0 0 0 110 58 V96 Q110 104 102 104 H8 Q0 104 0 96 V58 A6 6 0 0 0 0 46 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Games\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1E3A5F\"></stop><stop offset=\"1\" stop-color=\"#0B1A33\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-110-104-Games)\"><rect width=\"110\" height=\"104\" fill=\"url(#vag-Games)\"></rect><text x=\"55\" y=\"38\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Games</text></g><line x1=\"8\" y1=\"52\" x2=\"102\" y2=\"52\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(62,43)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">games</div></div></div><div style=\"display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;\"><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><svg width=\"226\" height=\"96\" viewBox=\"0 0 226 96\" style=\"display:block\"><defs><clipPath id=\"va-clip-226-96\"><path d=\"M8 0 H218 Q226 0 226 8 V42 A6 6 0 0 0 226 54 V88 Q226 96 218 96 H8 Q0 96 0 88 V54 A6 6 0 0 0 0 42 V8 Q0 0 8 0 Z\"></path></clipPath></defs><g clip-path=\"url(#va-clip-226-96)\"><rect width=\"226\" height=\"96\" fill=\"#D6D3DC\"></rect><text x=\"113\" y=\"40\" text-anchor=\"middle\" fill=\"#445C85\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Placeholder Image</text></g><line x1=\"8\" y1=\"48\" x2=\"218\" y2=\"48\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(174,38)\"><path d=\"M0 0 H52 V20 H0 Q-0 20 -0 16 V4 Q0 0 0 0 Z\" fill=\"#1972F9\"></path><rect x=\"0\" y=\"0\" width=\"52\" height=\"20\" rx=\"0\" fill=\"#1972F9\"></rect><path d=\"M4 0 H52 V20 H4 Q0 20 0 16 V4 Q0 0 4 0 Z\" fill=\"#1972F9\"></path><text x=\"26\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">default · horizontal</div></div><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><svg width=\"226\" height=\"96\" viewBox=\"0 0 226 96\" style=\"display:block\"><defs><clipPath id=\"va-pc-226-96-Food\"><path d=\"M8 0 H218 Q226 0 226 8 V42 A6 6 0 0 0 226 54 V88 Q226 96 218 96 H8 Q0 96 0 88 V54 A6 6 0 0 0 0 42 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"vag-Food\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3A2418\"></stop><stop offset=\"1\" stop-color=\"#1A0F0A\"></stop></linearGradient></defs><g clip-path=\"url(#va-pc-226-96-Food)\"><rect width=\"226\" height=\"96\" fill=\"url(#vag-Food)\"></rect><text x=\"113\" y=\"34\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">Food</text></g><line x1=\"8\" y1=\"48\" x2=\"218\" y2=\"48\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(178,39)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"18\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"13\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">food · horizontal</div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Variants</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Categories</span><span class=\"demo-panel-value\">placeholder · restaurant · vacation · beverage · snack · fashion · party · meal · games · food</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Sizes</span><span class=\"demo-panel-value\">110×68 · 110×104 · 226×96</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Discount badge</span><span class=\"demo-panel-value\">always shown</span></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Composition</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Image fill</span><span class=\"demo-panel-value\">publisher-supplied</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Notch shape</span><span class=\"demo-panel-value\">SVG clip-path</span></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "default-with-discount",
        "demoKey": "default-with-discount",
        "demoControls": voucherAssetDemoControls,
        "title": "Default — with discount badge",
        "node": "5119:1664",
        "description": "Default voucher asset with brand discount badge in the top-left. Used as the visual hero on Voucher Card.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"va-spec-default-with-discount-preview\"><svg width=\"144\" height=\"144\" viewBox=\"0 0 144 144\" style=\"display:block\"><defs><clipPath id=\"va-asset-clip\"><path d=\"M8 0 H136 Q144 0 144 8 V64 A8 8 0 0 0 144 80 V136 Q144 144 136 144 H8 Q0 144 0 136 V80 A8 8 0 0 0 0 64 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"va-asset-grad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3A2418\"></stop><stop offset=\"1\" stop-color=\"#1A0F0A\"></stop></linearGradient></defs><g clip-path=\"url(#va-asset-clip)\"><rect width=\"144\" height=\"144\" fill=\"url(#va-asset-grad)\"></rect><text x=\"72\" y=\"54\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Voucher Image</text></g><line x1=\"8\" y1=\"72\" x2=\"136\" y2=\"72\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(8,8)\"><rect x=\"0\" y=\"0\" width=\"64\" height=\"20\" fill=\"#1972F9\" rx=\"4\"></rect><text x=\"32\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">50% OFF</text></g></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "Default",
                "mono": true,
                "prop": "status"
              },
              {
                "key": "Has discount badge",
                "value": "Yes",
                "mono": true,
                "prop": "badge"
              },
              {
                "key": "Badge label",
                "value": "50% OFF",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Badge bg", "value": "#1972F9", "token": "main/badge/brand/heavy/background" },
              { "key": "Badge label", "value": "#FFFFFF", "token": "main/badge/brand/heavy/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "144 (fill image)",
                "mono": true
              },
              {
                "key": "Height",
                "value": "144",
                "mono": true
              },
              {
                "key": "Badge height",
                "value": "20",
                "mono": true
              },
              {
                "key": "Badge padding (h)",
                "value": "8",
                "mono": true
              },
              {
                "key": "Badge radius",
                "value": "4",
                "mono": true
              },
              {
                "key": "Badge top",
                "value": "8",
                "mono": true
              },
              {
                "key": "Badge left",
                "value": "8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Badge style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft",
                "mono": true
              },
              {
                "key": "Size",
                "value": "14",
                "mono": true
              },
              {
                "key": "Weight",
                "value": "700 (Bold)",
                "mono": true
              },
              {
                "key": "Line-height",
                "value": "14",
                "mono": true
              },
              {
                "key": "Tracking",
                "value": "0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>\n    image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"voucher-cinema\"</span><span class=\"syn-punc\">),</span>\n    discountLabel<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"50% OFF\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>voucher_cinema<span class=\"syn-punc\">,</span>\n    discountLabel <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"50% OFF\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "no-badge",
        "demoKey": "no-badge",
        "demoControls": voucherAssetDemoControls,
        "title": "No badge — image only",
        "node": "5119:1664",
        "description": "Voucher asset rendered without the discount badge — used when the parent card already shows discount info elsewhere.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"va-spec-no-badge-preview\"><svg width=\"144\" height=\"144\" viewBox=\"0 0 144 144\" style=\"display:block\"><defs><clipPath id=\"va-asset-clip\"><path d=\"M8 0 H136 Q144 0 144 8 V64 A8 8 0 0 0 144 80 V136 Q144 144 136 144 H8 Q0 144 0 136 V80 A8 8 0 0 0 0 64 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"va-asset-grad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3A2418\"></stop><stop offset=\"1\" stop-color=\"#1A0F0A\"></stop></linearGradient></defs><g clip-path=\"url(#va-asset-clip)\"><rect width=\"144\" height=\"144\" fill=\"url(#va-asset-grad)\"></rect><text x=\"72\" y=\"54\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Voucher Image</text></g><line x1=\"8\" y1=\"72\" x2=\"136\" y2=\"72\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "Default",
                "mono": true,
                "prop": "status"
              },
              {
                "key": "Has discount badge",
                "value": "No",
                "mono": true,
                "prop": "badge"
              },
              {
                "key": "Badge label",
                "value": "–",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "Image only", "token": "image fill (no token)" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "144 (fill image)",
                "mono": true
              },
              {
                "key": "Height",
                "value": "144",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "0",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "N/A",
                "value": "No text in this variant",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>\n    image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"voucher-cinema\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>voucher_cinema\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "expired-overlay",
        "demoKey": "expired-overlay",
        "demoControls": voucherAssetDemoControls,
        "title": "Expired — dimmed with overlay",
        "node": "5119:1664",
        "description": "Voucher asset for expired vouchers — image rendered behind a translucent dimmer to signal unavailability.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"va-spec-expired-overlay-preview\"><svg width=\"144\" height=\"144\" viewBox=\"0 0 144 144\" style=\"display:block\"><defs><clipPath id=\"va-asset-clip\"><path d=\"M8 0 H136 Q144 0 144 8 V64 A8 8 0 0 0 144 80 V136 Q144 144 136 144 H8 Q0 144 0 136 V80 A8 8 0 0 0 0 64 V8 Q0 0 8 0 Z\"></path></clipPath><linearGradient id=\"va-asset-grad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3A2418\"></stop><stop offset=\"1\" stop-color=\"#1A0F0A\"></stop></linearGradient></defs><g clip-path=\"url(#va-asset-clip)\"><rect width=\"144\" height=\"144\" fill=\"url(#va-asset-grad)\"></rect><text x=\"72\" y=\"54\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.9)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Voucher Image</text><rect width=\"144\" height=\"144\" fill=\"#020E22\" opacity=\"0.24\"></rect></g><line x1=\"8\" y1=\"72\" x2=\"136\" y2=\"72\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(8,8)\"><rect x=\"0\" y=\"0\" width=\"64\" height=\"20\" fill=\"#C2C5CA\" rx=\"4\"></rect><text x=\"32\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">50% OFF</text></g></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "Expired",
                "mono": true,
                "prop": "status"
              },
              {
                "key": "Has discount badge",
                "value": "Yes",
                "mono": true,
                "prop": "badge"
              },
              {
                "key": "Has overlay",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Overlay bg", "value": "#020E223D (24% opacity)", "token": "bg/color-bg-overlay-weak" },
              { "key": "Badge bg (muted)", "value": "#C2C5CA", "token": "main/badge/muted/light/background" },
              { "key": "Badge label", "value": "#FFFFFF", "token": "main/badge/muted/light/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "144",
                "mono": true
              },
              {
                "key": "Height",
                "value": "144",
                "mono": true
              },
              {
                "key": "Overlay coverage",
                "value": "Full image",
                "mono": true
              },
              {
                "key": "Badge height",
                "value": "20",
                "mono": true
              },
              {
                "key": "Badge top",
                "value": "8",
                "mono": true
              },
              {
                "key": "Badge left",
                "value": "8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Badge style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft · Bold 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>\n    image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"voucher-cinema\"</span><span class=\"syn-punc\">),</span>\n    discountLabel<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"50% OFF\"</span><span class=\"syn-punc\">,</span>\n    state<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>expired\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>voucher_cinema<span class=\"syn-punc\">,</span>\n    discountLabel <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"50% OFF\"</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherAssetState</span><span class=\"syn-punc\">.</span>Expired\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Default with brand badge
      buildStatelessColorsTable({
        title: 'Default — Colors',
        description: 'Image-led voucher asset with a brand-blue category badge clipped at the bottom-left.',
        rows: [
          { role: 'Badge bg',    token: 'main/badge/brand/heavy/background', value: '#1972F9' },
          { role: 'Badge label', token: 'main/badge/brand/heavy/label',      value: '#FFFFFF' },
        ],
      }),
      // Card 2 — Image-only
      buildStatelessColorsTable({
        title: 'Image Only — Colors',
        description: 'Pure image fill — no DS-owned color tokens beyond the publisher-supplied creative.',
        rows: [
          { role: 'Surface', token: 'image fill (no token)', value: 'Image only' },
        ],
      }),
      // Card 3 — Expired with muted overlay
      buildStatelessColorsTable({
        title: 'Expired — Colors',
        description: 'Scrim overlay + muted badge to signal the voucher is no longer valid.',
        rows: [
          { role: 'Overlay bg',      token: 'bg/color-bg-overlay-weak',       value: '#020E22 @ 24%' },
          { role: 'Badge bg (muted)', token: 'main/badge/muted/light/background', value: '#C2C5CA' },
          { role: 'Badge label',     token: 'main/badge/muted/light/label',  value: '#FFFFFF' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>size</code>",
          "swift": "<code>size: EBVoucherImageFrameSize</code>",
          "compose": "<code>size = EBVoucherImageFrameSize</code>"
        },
        {
          "figma": "<code>orientation</code>",
          "swift": "<code>orientation: .vertical | .horizontal</code>",
          "compose": "<code>orientation = Vertical | Horizontal</code>"
        },
        {
          "figma": "<code>discount</code> (string)",
          "swift": "<code>discount: String</code>",
          "compose": "<code>discount: String</code>"
        },
        {
          "figma": "Image Slot",
          "swift": "<code>content: () -&gt; Image</code>",
          "compose": "<code>content: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<s>use case</s>",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "<s>type</s> (midfi/hifi)",
          "swift": "—",
          "compose": "—"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "20 variants with sparse orientation coverage — only <code>default</code> and <code>food</code> have horizontal artwork. Matrix is not closed."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>use case</code> is content, not a variant. <code>type=midfi|hifi</code> is authoring fidelity, not a product axis. <code>\"35% off\"</code> is hardcoded."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Badge uses token-bound colors and typography. Image fills bypass tokens (raster)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native correlate for a 10-value illustration enum. Correct handoff is asset catalog + lean frame component."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only artwork; no interactive states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "All raster. 19/20 variants are photos; 1 placeholder. Assets should live in a sibling library, not the component."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Cannot map a 10-value content enum 1:1 to a native parameter. Linkability requires collapsing use case first."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 20,
      "description": "Current shape: <code>type</code> × <code>size</code> × <code>use case</code> × <code>orientation</code>. Cartesian space is 2 × 2 × 10 × 2 = 80, only 20 shipped. Heavily skewed toward <code>type=hifi</code> / <code>orientation=Default</code> (16 of 20). <code>midfi</code> exists only for <code>use case=Default</code>; every other use case has only <code>hifi</code> artwork.",
      "columns": [
        "Use case",
        "Sizes shipped",
        "Orientations shipped",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "Default (midfi)",
            "small, large",
            "Default, horizontal",
            "3"
          ]
        },
        {
          "cells": [
            "Restaurant",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Vacation",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Beverage",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Snack",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Fashion",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Party",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Meal",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Games",
            "small, large",
            "Default",
            "2"
          ]
        },
        {
          "cells": [
            "Food",
            "large",
            "horizontal",
            "1"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 5119:1664",
      "rows": [
        {
          "body": "<strong>Assessed with Restructure verdict.</strong> 20-variant sprawl driven by a 10-value <code>use case</code> enum and a <code>type=midfi|hifi</code> fidelity axis — both are anti-patterns. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        },
        {
          "body": "<strong>Proposed restructure.</strong> Collapse to a single Voucher Image Frame with <code>size</code> + <code>orientation</code> + image Slot + <code>discount</code> string. Move category artwork to a sibling asset library. Target: 4 variants instead of 20. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        }
      ]
    }
  ]
};
