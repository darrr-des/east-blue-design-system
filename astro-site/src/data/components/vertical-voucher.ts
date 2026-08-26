import type { ComponentData } from '../types';

export const verticalVoucher: ComponentData = {
  "meta": {
    "slug": "vertical-voucher",
    "name": "Vertical Voucher",
    "node": "5119:1635",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=5119-1635",
    "description": "A 162-wide vertical voucher tile combining a Voucher Asset image with title, description, price, validity, and status badges.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"8\" y=\"3\" width=\"16\" height=\"26\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M8 3h16a2 2 0 0 1 2 2v8H6V5a2 2 0 0 1 2-2Z\" fill=\"#E6E1EF\"/>\n      <rect x=\"19\" y=\"7\" width=\"7\" height=\"3.5\" rx=\"0.8\" fill=\"#1972F9\"/>\n      <text x=\"22.5\" y=\"9.8\" text-anchor=\"middle\" fill=\"white\" font-size=\"2.4\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n      <rect x=\"10\" y=\"15\" width=\"5\" height=\"2\" rx=\"0.5\" fill=\"#2340A9\"/>\n      <rect x=\"16\" y=\"15\" width=\"5\" height=\"2\" rx=\"0.5\" fill=\"#D61B2C\"/>\n      <rect x=\"10\" y=\"19\" width=\"10\" height=\"1.3\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"10\" y=\"21\" width=\"8\" height=\"1\" rx=\"0.3\" fill=\"#445C85\"/>\n      <rect x=\"10\" y=\"24\" width=\"5\" height=\"1.2\" rx=\"0.3\" fill=\"#005CE5\"/>\n    </svg>",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Voucher",
      "text": "Superseded by <a href=\"/components/voucher\">Voucher</a>, as <code>Orientation=Vertical</code> at node <code>5372:38309</code>. The two asset sizes bundled into one symbol are now the <code>AssetSize</code> setting, the flat unlabelled layer structure is named throughout, and the raster image with its hardcoded \"35% off\" is a real slot plus a Badge. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "All text content is hardcoded placeholder. Consumers cannot set a title, price, validity, or badge label without detaching. A \"reusable\" voucher component that can only render the sample \"Buy Load Pre-seeded SKU Voucher Sample\" string is not reusable."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "The symbol does carry its own layout, spacing, and token-bound colors via <code>main/vouchers/color/default/*</code>. But it ships two asset frames bundled together, assuming consumers will turn one off — nothing enforces the mutual exclusion."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Parallel to Horizontal Voucher and Voucher Card Horizontal — three components for one concept. Voucher Card Horizontal ships a proper <code>state</code> axis (Default/Limited/Expiring/Used/Expired); Vertical Voucher ships none. Property shape diverges across the family."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Nests a Voucher Asset instance (composition works) and Badge instances (composition works). But since the voucher content is locked placeholder, a parent screen cannot actually compose real voucher data into this component."
      }
    ],
    "behavior": [
      {
        "state": "Asset size",
        "ios": "na",
        "android": "na",
        "property": "largeAsset + smallAsset booleans",
        "notes": "Two booleans for a mutually exclusive choice. Should be a single enum."
      },
      {
        "state": "Title",
        "ios": "na",
        "android": "na",
        "property": "header boolean (string hardcoded)",
        "notes": "String is frozen in the symbol. Boolean only toggles visibility."
      },
      {
        "state": "Price / original",
        "ios": "na",
        "android": "na",
        "property": "amount boolean (strings hardcoded)",
        "notes": "\"PHP 100.00\" and \"PHP 150.00\" frozen; one boolean toggles both."
      },
      {
        "state": "Validity",
        "ios": "na",
        "android": "na",
        "property": "validityPeriod boolean (string hardcoded)",
        "notes": "\"Validity: Dec 25 2022 - Jan 5 2023\" frozen."
      },
      {
        "state": "Status badges",
        "ios": "na",
        "android": "na",
        "property": "prop1stRowBadges + prop2ndRowBadges",
        "notes": "Two fixed rows of 2 fixed badge labels each. Row-level visibility only — consumers can't pick which badges to render."
      },
      {
        "state": "State",
        "ios": "na",
        "android": "na",
        "property": "Not modelled",
        "notes": "Absent entirely. Voucher Card Horizontal has it; Vertical Voucher does not."
      },
      {
        "state": "Tap target",
        "ios": "na",
        "android": "na",
        "property": "Not modelled",
        "notes": "Vouchers are always tappable; current symbol has no pressed/disabled states."
      }
    ],
    "resolved": [
      {
        "headline": "Voucher content tokens exist.",
        "body": "Background (<code>main/vouchers/color/default/bg</code>), title (<code>label-title</code>), description (<code>label-description</code>), amount (<code>label-amount</code>), strikethrough amount (<code>label-amount-original</code>), and metadata (<code>label-metadata</code>) are all bound to the voucher component's variable collection.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "open": [],
    "recommendations": [],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vv-demo-preview\"><div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;justify-content:center;\"><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:162px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"162\" height=\"153\" viewBox=\"0 0 162 153\" style=\"display:block\"><defs><clipPath id=\"vv-clip-162-153-Food\"><path d=\"M0 0 H162 V70.5 A6 6 0 0 0 162 82.5 V153 H0 V82.5 A6 6 0 0 0 0 70.5 Z\"></path></clipPath><linearGradient id=\"vv-g-162-153-Food\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#vv-clip-162-153-Food)\"><rect width=\"162\" height=\"153\" fill=\"url(#vv-g-162-153-Food)\"></rect><text x=\"81\" y=\"66.5\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.92)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Food</text></g><line x1=\"6\" y1=\"76.5\" x2=\"156\" y2=\"76.5\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(114,64.5)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"20\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><svg width=\"162\" height=\"100\" viewBox=\"0 0 162 100\" style=\"display:block\"><defs><clipPath id=\"vv-clip-162-100-Food\"><path d=\"M0 0 H162 V44 A6 6 0 0 0 162 56 V100 H0 V56 A6 6 0 0 0 0 44 Z\"></path></clipPath><linearGradient id=\"vv-g-162-100-Food\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#vv-clip-162-100-Food)\"><rect width=\"162\" height=\"100\" fill=\"url(#vv-g-162-100-Food)\"></rect><text x=\"81\" y=\"40\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.92)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Food</text></g><line x1=\"6\" y1=\"50\" x2=\"156\" y2=\"50\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(114,38)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"20\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;\"><span style=\"background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Limited</span><span style=\"background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Expiring</span></div><div style=\"display:flex;gap:4px;\"><span style=\"background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Hot</span><span style=\"background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Discounted</span></div><div style=\"color:#0A2757;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:18px;letter-spacing:0.25px;\">Buy Load Pre-seeded SKU Voucher Sample</div><div style=\"color:#445C85;font-size:11px;font-weight:500;font-family:'BarkAda',system-ui;line-height:16px;\">This is the description of the voucher.</div><div style=\"display:flex;flex-direction:column;\"><div style=\"color:#005CE5;font-size:13px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:11px;font-weight:700;font-family:'Proxima Soft',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-weight:500;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Default (all props on)</div></div><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:162px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"162\" height=\"153\" viewBox=\"0 0 162 153\" style=\"display:block\"><defs><clipPath id=\"vv-clip-162-153-Food\"><path d=\"M0 0 H162 V70.5 A6 6 0 0 0 162 82.5 V153 H0 V82.5 A6 6 0 0 0 0 70.5 Z\"></path></clipPath><linearGradient id=\"vv-g-162-153-Food\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#vv-clip-162-153-Food)\"><rect width=\"162\" height=\"153\" fill=\"url(#vv-g-162-153-Food)\"></rect><text x=\"81\" y=\"66.5\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.92)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Food</text></g><line x1=\"6\" y1=\"76.5\" x2=\"156\" y2=\"76.5\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(114,64.5)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"20\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;\"><span style=\"background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Limited</span><span style=\"background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Expiring</span></div><div style=\"color:#0A2757;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:18px;letter-spacing:0.25px;\">Buy Load Pre-seeded SKU Voucher Sample</div><div style=\"color:#445C85;font-size:11px;font-weight:500;font-family:'BarkAda',system-ui;line-height:16px;\">This is the description of the voucher.</div><div style=\"display:flex;flex-direction:column;\"><div style=\"color:#005CE5;font-size:13px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:11px;font-weight:700;font-family:'Proxima Soft',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-weight:500;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Large asset only</div></div><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:162px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"162\" height=\"100\" viewBox=\"0 0 162 100\" style=\"display:block\"><defs><clipPath id=\"vv-clip-162-100-Food\"><path d=\"M0 0 H162 V44 A6 6 0 0 0 162 56 V100 H0 V56 A6 6 0 0 0 0 44 Z\"></path></clipPath><linearGradient id=\"vv-g-162-100-Food\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#vv-clip-162-100-Food)\"><rect width=\"162\" height=\"100\" fill=\"url(#vv-g-162-100-Food)\"></rect><text x=\"81\" y=\"40\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.92)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Food</text></g><line x1=\"6\" y1=\"50\" x2=\"156\" y2=\"50\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(114,38)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"20\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;\"><span style=\"background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Hot</span><span style=\"background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Discounted</span></div><div style=\"color:#0A2757;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:18px;letter-spacing:0.25px;\">Buy Load Pre-seeded SKU Voucher Sample</div><div style=\"color:#445C85;font-size:11px;font-weight:500;font-family:'BarkAda',system-ui;line-height:16px;\">This is the description of the voucher.</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Small asset minimal</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Migration</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Replaced by</span><span class=\"demo-panel-value\"><a href=\"/components/voucher-card-horizontal\">Voucher Card Horizontal</a></span></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "vertical-voucher",
        "demoKey": "vertical-voucher",
        "demoControls": [],
        "title": "Vertical Voucher",
        "node": "5119:1635",
        "description": "Legacy 162-wide vertical voucher tile. Migrate to <a href=\"/components/voucher-card-horizontal\">Voucher Card Horizontal</a> with <code>orientation: vertical</code>.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"vv-spec-default\"><div style=\"width:162px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"162\" height=\"153\" viewBox=\"0 0 162 153\" style=\"display:block\"><defs><clipPath id=\"vvs-clip\"><path d=\"M0 0 H162 V70.5 A6 6 0 0 0 162 82.5 V153 H0 V82.5 A6 6 0 0 0 0 70.5 Z\"></path></clipPath><linearGradient id=\"vvs-g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#vvs-clip)\"><rect width=\"162\" height=\"153\" fill=\"url(#vvs-g)\"></rect><text x=\"81\" y=\"66.5\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.92)\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">Food</text></g><line x1=\"6\" y1=\"76.5\" x2=\"156\" y2=\"76.5\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\"></line><g transform=\"translate(114,64.5)\"><rect x=\"0\" y=\"0\" width=\"48\" height=\"20\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"24\" y=\"14\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;font-family:'Proxima Soft',system-ui;\"><div style=\"display:flex;gap:4px;flex-wrap:wrap;\"><span style=\"background:#2340A9;color:#FFF;font-size:10px;font-weight:700;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Limited</span><span style=\"background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Expiring</span></div><div style=\"color:#0A2757;font-size:14px;font-weight:700;line-height:18px;letter-spacing:0.25px;\">Buy Load Pre-seeded SKU Voucher Sample</div><div style=\"color:#445C85;font-size:11px;font-weight:500;font-family:'BarkAda',system-ui;line-height:16px;\">This is the description of the voucher.</div><div style=\"display:flex;flex-direction:column;\"><div style=\"color:#005CE5;font-size:13px;font-weight:700;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:11px;font-weight:700;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-weight:500;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Orientation", "value": "vertical" },
              { "key": "Width", "value": "162" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg",    "value": "#FFFFFF", "token": "main/vouchers/color/default/bg" },
              { "key": "Title",         "value": "#0A2757", "token": "main/vouchers/color/default/label-title" },
              { "key": "Description",   "value": "#445C85", "token": "main/vouchers/color/default/label-description" },
              { "key": "Amount",        "value": "#005CE5", "token": "main/vouchers/color/default/label-amount" },
              { "key": "Original price","value": "#90A8D0", "token": "main/vouchers/color/default/label-amount-original" },
              { "key": "Validity",      "value": "#6780A9", "token": "main/vouchers/color/default/label-meta" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "162", "mono": true },
              { "key": "Image area",    "value": "162 × 153", "mono": true },
              { "key": "Body padding",  "value": "8 12 12 12", "mono": true },
              { "key": "Corner radius", "value": "4", "mono": true },
              { "key": "Border",        "value": "1px solid #E6EAF2", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title",          "value": "Proxima Soft Bold · 14 / 18 · +0.25", "mono": true },
              { "key": "Amount",         "value": "Proxima Soft Bold · 14 · +0.25",       "mono": true },
              { "key": "Original price", "value": "Proxima Soft Semibold · 12 (strike)",  "mono": true },
              { "key": "Validity",       "value": "BarkAda Semibold · 10 / 15",           "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-comment\">// Use EBVoucherCard with orientation: .vertical</span>\n<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Buy Load\"</span><span class=\"syn-punc\">,</span>\n    amount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"PHP 50.00\"</span><span class=\"syn-punc\">,</span>\n    originalAmount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"PHP 90.00\"</span><span class=\"syn-punc\">,</span>\n    metadata<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Dec 25 - Jan 5\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.vertical</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-comment\">// Use EBVoucherCard with orientation = Vertical</span>\n<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 50.00\"</span><span class=\"syn-punc\">,</span>\n    originalAmount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 90.00\"</span><span class=\"syn-punc\">,</span>\n    metadata <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Dec 25 - Jan 5\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "description": "The current 8 booleans do not map cleanly to native. The table below shows the target shape after the family consolidation — each row captures what the proposed EBVoucherCard replaces from the current Vertical Voucher.",
      "rows": [
        {
          "figma": "—",
          "swift": "<code>orientation</code>",
          "compose": "<code>orientation: EBVoucherOrientation</code>"
        },
        {
          "figma": "—",
          "swift": "<code>state</code>",
          "compose": "<code>state: EBVoucherState</code>"
        },
        {
          "figma": "<code>largeAsset</code> + <code>smallAsset</code>",
          "swift": "<code>assetSize</code>",
          "compose": "<code>assetSize: .large | .small | .none</code>"
        },
        {
          "figma": "<code>header</code> (boolean, string frozen)",
          "swift": "<code>title</code> (string)",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "<code>description</code> (boolean, string frozen)",
          "swift": "<code>description</code> (string)",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>amount</code> (boolean, PHP 100 / PHP 150 frozen)",
          "swift": "<code>price</code> + <code>originalPrice</code>",
          "compose": "<code>price: String, originalPrice: String?</code>"
        },
        {
          "figma": "<code>validityPeriod</code> (boolean, string frozen)",
          "swift": "<code>validity</code> (string)",
          "compose": "<code>validity: String?</code>"
        },
        {
          "figma": "<code>prop1stRowBadges</code> + <code>prop2ndRowBadges</code>",
          "swift": "<code>badges</code> Slot",
          "compose": "<code>badges: [EBBadge]</code>"
        },
        {
          "figma": "nested Voucher Asset",
          "swift": "Image Slot",
          "compose": "trailing closure"
        },
        {
          "figma": "—",
          "swift": "—",
          "compose": "<code>onTap: () -&gt; Void</code>"
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
        "notes": "Two frames both named <code>badges</code>. Text layers are unnamed. Asset frames <code>large asset</code> / <code>small asset</code> should be one frame with an <code>assetSize</code> property."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "8 booleans where most should be strings (title, price, validity) or a Slot (badges). <code>largeAsset</code> + <code>smallAsset</code> should be one enum. All content is frozen placeholder."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Background, title, description, amount, strikethrough amount, and metadata are all bound to <code>main/vouchers/color/default/*</code>. Typography uses named text styles (Primary/Multi-line Label/Base, Primary/Label/Small, Secondary/Default/Caption, Secondary/Default/Fine)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Parallel to 2 other voucher components with divergent schemas. Native has one <code>EBVoucherCard</code>, not three. 8 booleans with frozen strings have no native analog."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No state axis at all. Voucher Card Horizontal ships Default/Limited/Expiring/Used/Expired; Vertical Voucher has none. No pressed/focused/disabled on the card frame either."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Inherits Voucher Asset's raster + hardcoded \"35% off\" badge. The discount amount is not a property on the parent Voucher."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Cannot map. Frozen strings, row-level badge toggles, and two-boolean asset size do not have 1:1 native parameters. Linkability requires the family consolidation first."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "Single symbol, no variant axes declared. All configurability is through 8 boolean property toggles on the lone instance.",
      "columns": [
        "Node ID",
        "Name",
        "Dimensions",
        "Property toggles"
      ],
      "rows": [
        {
          "cells": [
            "<code>5119:1635</code>",
            "Vertical Voucher",
            "162 × 465 (with both assets + all content on)",
            "<code>amount</code>, <code>description</code>, <code>header</code>, <code>largeAsset</code>, <code>prop1stRowBadges</code>, <code>prop2ndRowBadges</code>, <code>smallAsset</code>, <code>validityPeriod</code> — all boolean, all default <code>true</code>"
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
      "header": "Initial Assessment · node 5119:1635",
      "rows": [
        {
          "body": "<strong>Assessed with Consolidate verdict.</strong> Single symbol with no variants, 8 boolean toggles, and entirely hardcoded content. Parallel to Horizontal Voucher (<code>5121:4533</code>) and Voucher Card Horizontal (<code>5119:1786</code>). <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        },
        {
          "body": "<strong>Proposed family-level merge.</strong> Collapse the 3 voucher components into one <code>Voucher Card</code> with <code>orientation</code> + <code>state</code> axes, text slots (title, description, price, originalPrice, validity), a badges array, and a voucher image Slot. Target: 2 × 5 = 10 variants instead of 3 divergent components. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        }
      ]
    }
  ]
};
