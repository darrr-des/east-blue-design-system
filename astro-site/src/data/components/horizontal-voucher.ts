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
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"5\" width=\"26\" height=\"22\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M3 5h26a2 2 0 0 1 2 2v7H1V7a2 2 0 0 1 2-2Z\" fill=\"#D63A2F\"/>\n      <rect x=\"24\" y=\"7.5\" width=\"6\" height=\"3\" rx=\"0.6\" fill=\"#1972F9\"/>\n      <text x=\"27\" y=\"9.9\" text-anchor=\"middle\" fill=\"white\" font-size=\"2.2\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n      <rect x=\"5\" y=\"17\" width=\"4\" height=\"1.6\" rx=\"0.3\" fill=\"#2340A9\"/>\n      <rect x=\"9.5\" y=\"17\" width=\"4\" height=\"1.6\" rx=\"0.3\" fill=\"#D61B2C\"/>\n      <rect x=\"14\" y=\"17\" width=\"3\" height=\"1.6\" rx=\"0.3\" fill=\"#B50707\"/>\n      <rect x=\"17.5\" y=\"17\" width=\"5\" height=\"1.6\" rx=\"0.3\" fill=\"#1972F9\"/>\n      <rect x=\"5\" y=\"20\" width=\"12\" height=\"1.3\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"5\" y=\"22.5\" width=\"5\" height=\"1.3\" rx=\"0.3\" fill=\"#005CE5\"/>\n      <rect x=\"11\" y=\"22.5\" width=\"5\" height=\"1\" rx=\"0.3\" fill=\"#90A8D0\"/>\n      <rect x=\"5\" y=\"24.8\" width=\"14\" height=\"0.9\" rx=\"0.3\" fill=\"#6780A9\"/>\n    </svg>",
    "verdict": {
      "kind": "fix",
      "title": "Consolidate into one Voucher Card with orientation + state axes",
      "text": "Horizontal Voucher, Vertical Voucher (<code>5119:1635</code>), and Voucher Card Horizontal (<code>5119:1786</code>) are three parallel records of the same component. Merge into a single <code>Voucher Card</code> with <code>orientation: vertical | horizontal</code>, <code>state: default | limited | expiring | used | expired</code> (borrowed from Voucher Card Horizontal — the canonical sibling since it ships the state axis), an image Slot that accepts Voucher Asset instances, a composable <code>badges: [Badge]</code> array, and text slots for title / description / price / original price / validity. Drop the 6 booleans in favor of real string properties."
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
    "open": [
      {
        "headline": "Three parallel components for one concept.",
        "body": "Horizontal Voucher, Vertical Voucher (<code>5119:1635</code>), and Voucher Card Horizontal (<code>5119:1786</code>) share the same anatomy — voucher image + title + description + price + validity + status badges — but ship as three separate components with divergent property shapes. This is a family-level consolidation, not a single-component fix.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No state axis.",
        "body": "Voucher Card Horizontal ships Default / Limited / Expiring / Used / Expired as a proper state variant that drives background, label colors, and badge treatment. Horizontal Voucher has no state concept — a used or expired horizontal voucher cannot be rendered in greyed-out treatment.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "All text content is hardcoded placeholder.",
        "body": "Title \"Grab Food\", description \"This is the description of the voucher.\", price \"PHP 100.00\", original price \"PHP 150.00\", and validity \"Validity: Dec 25 2022 - Jan 5 2023\" are all frozen strings inside the symbol. Booleans toggle visibility but not content. Consumers cannot render a real voucher without detaching.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Two stacked discount Badges at the same anchor.",
        "body": "The Voucher Asset image frame nests two Badge instances (<code>I5121:4534;6983:110671</code> \"10% off\" and <code>I5121:4534;6983:110685</code> \"35% off\") both absolutely positioned at the top-right. Only one is ever intended to be visible, but no property selects between them — both render on top of each other in the raw symbol.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Discount amount is baked into the image frame.",
        "body": "The \"35% off\" / \"10% off\" label is a hardcoded Badge text inside the Voucher Asset, not a property on the parent Horizontal Voucher. A voucher offering \"50% off\" or \"BUY1 TAKE1\" cannot be rendered. Should be a <code>discount: String?</code> property on the image slot.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Status badges are row-level, not array-level.",
        "body": "The <code>badges</code> boolean toggles a single fixed row of 4 hardcoded Badge instances (\"Limited\" + \"Expiring\" + \"Hot\" + \"Discounted\") on or off. A real voucher with one \"Limited\" badge and nothing else cannot be rendered. Badges should be a composable array, not a fixed row.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Hero image is a raster photograph with burned-in partner wordmark.",
        "body": "<code>Paste Image Here</code> / <code>imgPasteImageHere</code> is a 336×144 raster asset with the \"GrabFood\" wordmark burned into the pixels. Partner branding and image content are frozen. Should be an Image Slot that accepts any Voucher Asset variant (GrabFood, Globe, Smart, Shopee, etc.).",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No native component maps to this shape.",
        "body": "6 booleans with hardcoded content do not map to any reasonable native API. A proper <code>EBVoucherCard</code> takes title, price, validity, badges array, and image as parameters — not six visibility toggles over frozen strings. Code Connect has no 1:1 target.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Code Connect cannot link a 6-boolean symbol with frozen strings.",
        "body": "Even if a mapping existed, swapping the \"title\" string, the hero image, or the badge labels would require detaching the component. Linkability requires real string/array properties and an image Slot first.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Merge the three voucher cards into a single Voucher Card component.",
        "body": "Horizontal Voucher + Vertical Voucher + Voucher Card Horizontal become one component with <code>orientation: vertical | horizontal</code> (swaps the layout axis) and <code>state: default | limited | expiring | used | expired</code> (borrowed from Voucher Card Horizontal — the canonical sibling since it already ships the state axis). Target shape: 2 orientations × 5 states = 10 variants instead of three separate components with divergent schemas.",
        "tag": "Family"
      },
      {
        "headline": "Promote every text string to a property.",
        "body": "Add <code>title: String</code>, <code>description: String</code>, <code>price: String</code>, <code>originalPrice: String?</code>, <code>validity: String?</code>. Retire the <code>header</code> / <code>amount</code> / <code>description</code> / <code>validityPeriod</code> booleans — visibility falls out of whether the string is empty.",
        "tag": "Property"
      },
      {
        "headline": "Replace the stacked discount Badges with one <code>discount</code> string on the image slot.",
        "body": "Drop the duplicated \"10% off\" and \"35% off\" Badge instances inside the Voucher Asset frame. Expose <code>discount: String?</code> on the voucher-image Slot so any discount value (\"10% off\", \"50% off\", \"BUY1 TAKE1\") can be rendered without editing the symbol.",
        "tag": "Property"
      },
      {
        "headline": "Adopt a Figma Slot for the hero image.",
        "body": "Replace the raster <code>Paste Image Here</code> fill with a Slot that accepts a Voucher Asset instance (or any partner illustration component). The discount overlay and the raster wordmark both move into the swapped-in asset, not into the parent Voucher.",
        "tag": "Slot"
      },
      {
        "headline": "Replace the fixed 4-badge row with a composable badges array.",
        "body": "Drop the single <code>badges</code> boolean. Expose a badges Slot that accepts 0..n Badge instances and wraps when it runs out of width. Consumers choose which badges apply (\"Limited\" alone, \"Hot\" + \"Discounted\", \"New\" + \"Featured\", etc.).",
        "tag": "Slot"
      },
      {
        "headline": "Add the state axis missing from Horizontal Voucher.",
        "body": "Used and Expired vouchers render in greyed-out treatment with muted labels and a dimmed hero image — a pattern Voucher Card Horizontal already ships. Port the same 5-state treatment to the unified Voucher Card.",
        "tag": "State"
      },
      {
        "headline": "Remove the dead <code>10% off</code> Badge layer.",
        "body": "The image frame carries both <code>I5121:4534;6983:110671</code> (\"10% off\") and <code>I5121:4534;6983:110685</code> (\"35% off\") at identical coordinates; after the <code>discount</code> property above is introduced, only one Badge instance should remain, with its text bound to the new property.",
        "tag": "Composition"
      },
      {
        "headline": "Document that Voucher Card is the tap target.",
        "body": "Vouchers are always tappable entry points to the voucher detail screen. The unified component should ship a pressed/focused state on the card frame; the handoff is an <code>onTap</code> closure, not an internal CTA button.",
        "tag": "Docs"
      }
    ],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"hv-demo-preview\"><div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;justify-content:center;\"><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:336px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"336\" height=\"144\" viewBox=\"0 0 336 144\" style=\"display:block\"><defs><clipPath id=\"hv-clip-336-144-GrabFood\"><path d=\"M0 0 H336 V144 H0 Z\"></path></clipPath><linearGradient id=\"hv-g-336-144-GrabFood\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#hv-clip-336-144-GrabFood)\"><rect width=\"336\" height=\"144\" fill=\"url(#hv-g-336-144-GrabFood)\"></rect><text x=\"168\" y=\"78\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.95)\" font-size=\"22\" font-weight=\"700\" font-family=\"system-ui\">GrabFood</text><line x1=\"6\" y1=\"136\" x2=\"330\" y2=\"136\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\" opacity=\"0.7\"></line></g><g transform=\"translate(284,12)\"><rect x=\"0\" y=\"0\" width=\"52\" height=\"22\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"26\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;flex-wrap:wrap;\"><span style=\"background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Limited</span><span style=\"background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Expiring</span><span style=\"background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Hot</span><span style=\"background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:'Proxima Soft',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;\">Discounted</span></div><div style=\"color:#0A2757;font-size:16px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:20px;letter-spacing:0.25px;\">Grab Food</div><div style=\"color:#445C85;font-size:12px;font-family:'BarkAda',system-ui;line-height:18px;\">This is the description of the voucher.</div><div style=\"display:flex;gap:6px;align-items:center;\"><div style=\"color:#005CE5;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:12px;font-family:'BarkAda',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Default (all props on)</div></div><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:336px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);\"><svg width=\"336\" height=\"144\" viewBox=\"0 0 336 144\" style=\"display:block\"><defs><clipPath id=\"hv-clip-336-144-GrabFood\"><path d=\"M0 0 H336 V144 H0 Z\"></path></clipPath><linearGradient id=\"hv-g-336-144-GrabFood\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D63A2F\"></stop><stop offset=\"1\" stop-color=\"#8C1A15\"></stop></linearGradient></defs><g clip-path=\"url(#hv-clip-336-144-GrabFood)\"><rect width=\"336\" height=\"144\" fill=\"url(#hv-g-336-144-GrabFood)\"></rect><text x=\"168\" y=\"78\" text-anchor=\"middle\" fill=\"rgba(255,255,255,0.95)\" font-size=\"22\" font-weight=\"700\" font-family=\"system-ui\">GrabFood</text><line x1=\"6\" y1=\"136\" x2=\"330\" y2=\"136\" stroke=\"#FFFFFF\" stroke-width=\"1\" stroke-dasharray=\"2 3\" opacity=\"0.7\"></line></g><g transform=\"translate(284,12)\"><rect x=\"0\" y=\"0\" width=\"52\" height=\"22\" fill=\"#1972F9\" rx=\"0\"></rect><text x=\"26\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"11\" font-weight=\"700\" font-family=\"system-ui\">35% off</text></g></svg><div style=\"padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;\"><div style=\"color:#0A2757;font-size:16px;font-weight:700;font-family:'Proxima Soft',system-ui;line-height:20px;letter-spacing:0.25px;\">Grab Food</div><div style=\"display:flex;gap:6px;align-items:center;\"><div style=\"color:#005CE5;font-size:14px;font-weight:700;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">PHP 100.00</div><div style=\"color:#90A8D0;font-size:12px;font-family:'BarkAda',system-ui;text-decoration:line-through;\">PHP 150.00</div></div><div style=\"color:#6780A9;font-size:8px;font-family:'BarkAda',system-ui;letter-spacing:0;\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">Minimal — header + price + validity</div></div></div></div></div>"
  },
  "style": {
    "specCards": [],
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
