import type { ComponentData } from '../types';

export const horizontalVoucher: ComponentData = {
  "meta": {
    "slug": "horizontal-voucher",
    "name": "Horizontal Voucher",
    "node": "5121:4533",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=5121-4533",
    "description": "A 336-wide voucher tile with a 144px hero image, status row, title, price, and validity period.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"5\" width=\"26\" height=\"22\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M3 5h26a2 2 0 0 1 2 2v7H1V7a2 2 0 0 1 2-2Z\" fill=\"#D63A2F\"/>\n      <rect x=\"24\" y=\"7.5\" width=\"6\" height=\"3\" rx=\"0.6\" fill=\"#1972F9\"/>\n      <text x=\"27\" y=\"9.9\" text-anchor=\"middle\" fill=\"white\" font-size=\"2.2\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n      <rect x=\"5\" y=\"17\" width=\"4\" height=\"1.6\" rx=\"0.3\" fill=\"#2340A9\"/>\n      <rect x=\"9.5\" y=\"17\" width=\"4\" height=\"1.6\" rx=\"0.3\" fill=\"#D61B2C\"/>\n      <rect x=\"14\" y=\"17\" width=\"3\" height=\"1.6\" rx=\"0.3\" fill=\"#B50707\"/>\n      <rect x=\"17.5\" y=\"17\" width=\"5\" height=\"1.6\" rx=\"0.3\" fill=\"#1972F9\"/>\n      <rect x=\"5\" y=\"20\" width=\"12\" height=\"1.3\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"5\" y=\"22.5\" width=\"5\" height=\"1.3\" rx=\"0.3\" fill=\"#005CE5\"/>\n      <rect x=\"11\" y=\"22.5\" width=\"5\" height=\"1\" rx=\"0.3\" fill=\"#90A8D0\"/>\n      <rect x=\"5\" y=\"24.8\" width=\"14\" height=\"0.9\" rx=\"0.3\" fill=\"#6780A9\"/>\n    </svg>",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Voucher",
      "text": "Superseded by <a href=\"/components/voucher\">Voucher</a>, as <code>Orientation=Horizontal</code> at node <code>5372:38309</code>. The state axis it never had now exists, the two stacked discount badges are one <code>⤷ DiscountSlot</code>, and the discount baked into the image frame is a Badge instance. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "All text content is hardcoded placeholder. Consumers cannot set a title (\"Grab Food\"), price (PHP 100.00), validity, or badge label without detaching. A \"reusable\" voucher component that can only render one frozen sample string is not reusable."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "The symbol carries its own layout, spacing, and token-bound colors via <code>main/vouchers/color/default/*</code>. But it ships two stacked discount Badge instances (\"10% off\" + \"35% off\") at the same anchor, assuming one is invisible — nothing in the schema picks between them."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Parallel to Vertical Voucher and Voucher Card Horizontal — three components for one concept. Voucher Card Horizontal ships a proper <code>state</code> axis (Default/Limited/Expiring/Used/Expired); Horizontal Voucher ships none. Property shape diverges across the family (6 booleans here vs 8 in Vertical vs 2 booleans + 4-state enum in Voucher Card Horizontal)."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Nests Badge instances for the badge row (composition works). But the hero image is a raster asset baked into the frame, not a Voucher Asset instance — consumers cannot swap partner imagery without detaching. And since all voucher content is locked placeholder, a parent screen cannot compose real voucher data."
      }
    ],
    "behavior": [
      {
        "state": "Hero image",
        "ios": "na",
        "android": "na",
        "property": "asset boolean (raster frozen)",
        "notes": "Currently a 336×144 raster with the \"GrabFood\" wordmark baked in. Should accept any Voucher Asset variant."
      },
      {
        "state": "Discount amount",
        "ios": "na",
        "android": "na",
        "property": "Two stacked Badges (\"10% off\" + \"35% off\")",
        "notes": "Two Badge instances at the same anchor. Should be a single <code>discount</code> string property on the Voucher Asset, not two stacked layers."
      },
      {
        "state": "Title",
        "ios": "na",
        "android": "na",
        "property": "header boolean (string hardcoded)",
        "notes": "\"Grab Good\" frozen in the symbol. Boolean only toggles visibility."
      },
      {
        "state": "Description",
        "ios": "na",
        "android": "na",
        "property": "description boolean (string hardcoded)",
        "notes": "\"This is the description of the voucher.\" frozen."
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
        "property": "badges boolean (row of 4 hardcoded)",
        "notes": "Single row of 4 fixed badge labels (\"Limited\", \"Expiring\", \"Hot\", \"Discounted\"). Row-level visibility only."
      },
      {
        "state": "State",
        "ios": "na",
        "android": "na",
        "property": "Not modelled",
        "notes": "Absent entirely. Voucher Card Horizontal has it; Horizontal Voucher does not."
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
        "body": "Background (<code>text/color-text-inverse</code> = white card surface), title (<code>main/vouchers/color/default/label-title</code>), description (<code>label-description</code>), amount (<code>label-amount</code>), strikethrough amount (rendered as <code>#90a8d0</code>, matches <code>label-amount-original</code>), and metadata (<code>label-metadata</code>) are all bound to the voucher component's variable collection.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Card elevation is tokenised.",
        "body": "The card uses <code>app/shadow/shadow-low</code> (0px/0px/4px, <code>elevation/app/shadow-low/color</code> rgba(2,14,34,0.06)). No hardcoded shadow values on the parent frame.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "open": [],
    "recommendations": [],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"hv-demo-preview\"><div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;justify-content:center;\"><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:336px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"336\" height=\"144\" viewBox=\"0 0 336 144\" style=\"display:block\"><defs><clipPath id=\"hv-clip-336-144-GrabFood\"><path d=\"M0 0 H336 V144 H0 Z\"></path></clipPath><linearGradient id=\"hv-g-336-144-GrabFood\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#hv-clip-336-144-GrabFood)\"><rect width=\"336\" height=\"144\" fill=\"url(#hv-g-336-144-GrabFood)\"></rect><text x=\"168\" y=\"78\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.95)\" font-size=\"22\" font-weight=\"700\" font-family=\"system-ui\">GrabFood</text><line x1=\"6\" y1=\"136\" x2=\"330\" y2=\"136\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\" opacity=\"0.7\"></line></g><g transform=\"translate(284,12)\"><rect x=\"0\" y=\"0\" width=\"52\" height=\"22\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"26\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;flex-wrap:wrap;\"><span style=\"background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Limited</span><span style=\"background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Expiring</span><span style=\"background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Hot</span><span style=\"background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Discounted</span></div><div style=\"color:#0A2757;font-size:16px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:20px;letter-spacing:0.25px;\">Grab Food</div><div style=\"color:#445C85;font-size:12px;font-weight:500;font-family:'BarkAda',system-ui;line-height:18px;\">This is the description of the voucher.</div><div style=\"display:flex;gap:6px;align-items:center;\"><div style=\"color:#005CE5;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:12px;font-weight:700;font-family:'Proxima Soft',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-weight:500;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Default (all props on)</div></div><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:336px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"336\" height=\"144\" viewBox=\"0 0 336 144\" style=\"display:block\"><defs><clipPath id=\"hv-clip-336-144-GrabFood\"><path d=\"M0 0 H336 V144 H0 Z\"></path></clipPath><linearGradient id=\"hv-g-336-144-GrabFood\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#hv-clip-336-144-GrabFood)\"><rect width=\"336\" height=\"144\" fill=\"url(#hv-g-336-144-GrabFood)\"></rect><text x=\"168\" y=\"78\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.95)\" font-size=\"22\" font-weight=\"700\" font-family=\"system-ui\">GrabFood</text><line x1=\"6\" y1=\"136\" x2=\"330\" y2=\"136\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\" opacity=\"0.7\"></line></g><g transform=\"translate(284,12)\"><rect x=\"0\" y=\"0\" width=\"52\" height=\"22\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"26\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"color:#0A2757;font-size:16px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:20px;letter-spacing:0.25px;\">Grab Food</div><div style=\"display:flex;gap:6px;align-items:center;\"><div style=\"color:#005CE5;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:12px;font-weight:700;font-family:'Proxima Soft',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-weight:500;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Minimal — header + price + validity</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Migration</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Replaced by</span><span class=\"demo-panel-value\"><a href=\"/components/voucher-card-horizontal\">Voucher Card Horizontal</a></span></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "horizontal-voucher",
        "demoKey": "horizontal-voucher",
        "demoControls": [],
        "title": "Horizontal Voucher",
        "node": "5121:4533",
        "description": "Legacy 336-wide voucher tile. Same hex values + token paths as the canonical <a href=\"/components/voucher-card-horizontal\">Voucher Card Horizontal</a>; migrate to that component when you can.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"hv-spec-default\"><div style=\"width:336px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"336\" height=\"144\" viewBox=\"0 0 336 144\" style=\"display:block\"><defs><clipPath id=\"hvs-clip-336-144\"><path d=\"M0 0 H336 V144 H0 Z\"></path></clipPath><linearGradient id=\"hvs-g-336-144\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#hvs-clip-336-144)\"><rect width=\"336\" height=\"144\" fill=\"url(#hvs-g-336-144)\"></rect><text x=\"168\" y=\"78\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.95)\" font-size=\"22\" font-weight=\"700\" font-family=\"system-ui\">GrabFood</text><line x1=\"6\" y1=\"136\" x2=\"330\" y2=\"136\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\" opacity=\"0.7\"></line></g><g transform=\"translate(284,12)\"><rect x=\"0\" y=\"0\" width=\"52\" height=\"22\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"26\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;flex-wrap:wrap;\"><span style=\"background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Limited</span><span style=\"background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Expiring</span><span style=\"background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Hot</span><span style=\"background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Discounted</span></div><div style=\"color:#0A2757;font-size:16px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:20px;letter-spacing:0.25px;\">Grab Food</div><div style=\"color:#445C85;font-size:12px;font-weight:500;font-family:'BarkAda',system-ui;line-height:18px;\">This is the description of the voucher.</div><div style=\"display:flex;gap:6px;align-items:center;\"><div style=\"color:#005CE5;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:12px;font-weight:700;font-family:'Proxima Soft',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-weight:500;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Orientation", "value": "horizontal" },
              { "key": "Width", "value": "336" }
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
              { "key": "Width",         "value": "336", "mono": true },
              { "key": "Image area",    "value": "336 × 144", "mono": true },
              { "key": "Body padding",  "value": "8 12 12 12", "mono": true },
              { "key": "Corner radius", "value": "4", "mono": true },
              { "key": "Border",        "value": "1px solid #E6EAF2", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title",          "value": "Proxima Soft Bold · 16 / 20 · +0.25", "mono": true },
              { "key": "Amount",         "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true },
              { "key": "Original price", "value": "Proxima Soft Semibold · 14 (strike)", "mono": true },
              { "key": "Validity",       "value": "BarkAda Semibold · 10 / 15",          "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-comment\">// Use EBVoucherCard with orientation: .horizontal</span>\n<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Buy Load Globe Go90\"</span><span class=\"syn-punc\">,</span>\n    amount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"PHP 50.00\"</span><span class=\"syn-punc\">,</span>\n    originalAmount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"PHP 90.00\"</span><span class=\"syn-punc\">,</span>\n    metadata<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Validity: Dec 25 - Jan 5\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.horizontal</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-comment\">// Use EBVoucherCard with orientation = Horizontal</span>\n<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load Globe Go90\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 50.00\"</span><span class=\"syn-punc\">,</span>\n    originalAmount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 90.00\"</span><span class=\"syn-punc\">,</span>\n    metadata <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Validity: Dec 25 - Jan 5\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">)</span>"
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
      "description": "The current 6 booleans do not map cleanly to native. The table below shows the target shape after the family consolidation — each row captures what the proposed EBVoucherCard replaces from the current Horizontal Voucher.",
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
          "figma": "<code>asset</code> (boolean, raster frozen)",
          "swift": "Image Slot",
          "compose": "trailing closure"
        },
        {
          "figma": "\"10% off\" + \"35% off\" Badges",
          "swift": "<code>discount</code> on Voucher Asset",
          "compose": "<code>EBVoucherImageFrame(discount: \"35% off\")</code>"
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
          "figma": "<code>badges</code> (boolean, row of 4 hardcoded)",
          "swift": "<code>badges</code> Slot",
          "compose": "<code>badges: [EBBadge]</code>"
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
        "notes": "Two discount Badge instances (\"10% off\" + \"35% off\") stacked at the same anchor inside the Voucher Asset frame. Text layers are unnamed. <code>Paste Image Here</code> is a generic placeholder layer name."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "6 booleans where most should be strings (title, price, validity) or a Slot (badges, image). <code>badges</code> boolean toggles a fixed row of 4 hardcoded badges. All content is frozen placeholder."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Title, description, amount, strikethrough amount, and metadata are all bound to <code>main/vouchers/color/default/*</code>. Card elevation uses <code>app/shadow/shadow-low</code>. Typography uses named text styles (Primary/Multi-line Label/Base, Primary/Label/Small, Secondary/Default/Caption, Secondary/Default/Fine)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Parallel to 2 other voucher components with divergent schemas. Native has one <code>EBVoucherCard</code>, not three. 6 booleans with frozen strings and a raster hero have no native analog."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No state axis at all. Voucher Card Horizontal ships Default/Limited/Expiring/Used/Expired; Horizontal Voucher has none. No pressed/focused/disabled on the card frame either."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Hero image is a raster photograph with the \"GrabFood\" wordmark burned into the pixels. Discount amount is baked into stacked Badge instances, not a property."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Cannot map. Frozen strings, row-level badge toggle, stacked discount badges, and raster hero do not have 1:1 native parameters. Linkability requires the family consolidation first."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "Single symbol, no variant axes declared. All configurability is through 6 boolean property toggles on the lone instance.",
      "columns": [
        "Node ID",
        "Name",
        "Dimensions",
        "Property toggles"
      ],
      "rows": [
        {
          "cells": [
            "<code>5121:4533</code>",
            "Horizontal Voucher",
            "336 × 265 (with all properties on)",
            "<code>amount</code>, <code>asset</code>, <code>badges</code>, <code>description</code>, <code>header</code>, <code>validityPeriod</code> — all boolean, all default <code>true</code>"
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
      "header": "Initial Assessment · node 5121:4533",
      "rows": [
        {
          "body": "<strong>Assessed with Consolidate verdict.</strong> Single symbol with no variants, 6 boolean toggles, hardcoded content, raster hero image, and two stacked discount Badges. Parallel to Vertical Voucher (<code>5119:1635</code>) and Voucher Card Horizontal (<code>5119:1786</code>). <span class=\"tag-open\">Open</span>",
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
