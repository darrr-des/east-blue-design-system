import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/voucher-card-horizontal.js`.
const voucherCardHorizontalDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'limited',
        options: [
          { value: 'limited', label: 'Limited' },
          { value: 'expiring', label: 'Expiring' },
          { value: 'used', label: 'Used' },
          { value: 'expired', label: 'Expired' },
        ],
      },
      {
        label: 'Original price',
        prop: 'originalPrice',
        defaultValue: 'Yes',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ],
      },
    ],
  },
];

export const voucherCardHorizontal: ComponentData = {
  "meta": {
    "slug": "voucher-card-horizontal",
    "name": "Voucher Card Horizontal",
    "node": "5119:1786",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=5119-1786",
    "description": "A 336×111 horizontal voucher card with text content on the left and a perforated image frame on the right; ships in four state variants (limited, expiring, used, expired).",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"10\" width=\"26\" height=\"12\" rx=\"1.5\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M21 10h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6V10Z\" fill=\"#005CE5\"/>\n      <circle cx=\"24.5\" cy=\"16\" r=\"2.2\" stroke=\"#FFFFFF\" stroke-width=\"1\" fill=\"none\"/>\n      <circle cx=\"24.5\" cy=\"16\" r=\"0.7\" fill=\"#FFFFFF\"/>\n      <rect x=\"20.6\" y=\"10\" width=\"0.8\" height=\"12\" fill=\"#E6EAF2\"/>\n      <rect x=\"5\" y=\"12\" width=\"12\" height=\"1.6\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"5\" y=\"15\" width=\"8\" height=\"1.3\" rx=\"0.3\" fill=\"#2340A9\"/>\n      <rect x=\"5\" y=\"18.5\" width=\"10\" height=\"1\" rx=\"0.3\" fill=\"#445C85\"/>\n      <rect x=\"21\" y=\"10.5\" width=\"5\" height=\"2\" rx=\"0.3\" fill=\"#2340A9\"/>\n    </svg>",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Voucher",
      "text": "Superseded by <a href=\"/components/voucher\">Voucher</a>. This card, <a href=\"/components/horizontal-voucher\">Horizontal Voucher</a>, <a href=\"/components/vertical-voucher\">Vertical Voucher</a> and <a href=\"/components/voucher-asset\">Voucher Asset</a> all described the same object. They are now settings on one component at node <code>5372:38309</code> — <code>AssetSize</code>, <code>Orientation</code> and <code>State</code> — where the frozen strings became text layers and the badges became slots. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "Title \"Buy Load Globe Go90\", price \"PHP 50.00\", original price \"PHP 90.00\", and validity string are all hardcoded inside the symbol. The partner logo is a raster GCash asset baked into the right frame. Any real voucher (a Globe load voucher, a GrabFood 50% off, a Shopee ₱100 off) cannot render without detaching."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Colors are token-bound (<code>main/vouchers/color/default/*</code> and <code>main/vouchers/color/expired/*</code>). Typography uses named text styles (Primary/Multi-line Label/Base, Primary/Label/Small, Secondary/Bold/Small Caption). The card does carry its own layout and state treatment — but the logo raster, the \"GET VOUCHER\" CTA text, and the validity date are all frozen."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Correctly models <code>state</code> as a variant axis — the other two voucher-card siblings (Vertical Voucher, Horizontal Voucher) do not. But the three components ship as three separate records with divergent property shapes. Family-level inconsistency."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Nests a Badge instance (composition works). But the partner-image frame is a bespoke raster tree, not an instance-swap slot; and the content block has no text slots. A parent screen cannot compose real voucher data into this card."
      }
    ],
    "behavior": [
      {
        "state": "State",
        "ios": "na",
        "android": "na",
        "property": "state enum (4)",
        "notes": "Drives bg, label colors, partner-image treatment, and corner badge. Add a <code>default</code> fifth state for vouchers without a status callout."
      },
      {
        "state": "Title",
        "ios": "na",
        "android": "na",
        "property": "Hardcoded \"Buy Load Globe Go90\"",
        "notes": "No property; must be set via detach."
      },
      {
        "state": "Price / original",
        "ios": "na",
        "android": "na",
        "property": "crossedValue boolean (strings hardcoded)",
        "notes": "\"PHP 50.00\" and \"PHP 90.00\" frozen; boolean only toggles visibility of the strikethrough."
      },
      {
        "state": "Validity",
        "ios": "na",
        "android": "na",
        "property": "Hardcoded \"Validity: Dec 25 2022 - Jan 5 2023\"",
        "notes": "No property; must be set via detach."
      },
      {
        "state": "Status badge",
        "ios": "na",
        "android": "na",
        "property": "badge boolean + state-derived text",
        "notes": "\"Limited\" / \"Expiring\" / \"Used\" / \"Expired\" are derived from <code>state</code>. Consumers cannot set their own badge text."
      },
      {
        "state": "Partner logo",
        "ios": "na",
        "android": "na",
        "property": "Raster GCash asset",
        "notes": "No slot — logo is baked into the partner-image frame."
      },
      {
        "state": "CTA",
        "ios": "na",
        "android": "na",
        "property": "\"GET VOUCHER\" rotated text (non-interactive)",
        "notes": "Card is the tap target; the rotated text is decorative, not a Button instance."
      },
      {
        "state": "Tap state",
        "ios": "na",
        "android": "na",
        "property": "Not modelled",
        "notes": "No pressed/focused/disabled on the card frame."
      }
    ],
    "resolved": [
      {
        "headline": "State axis is modelled correctly.",
        "body": "Unlike Vertical Voucher and Horizontal Voucher, this component ships a proper <code>state</code> variant driving background, label colors, partner-image tint, and badge style. The 4-value enum (limited / expiring / used / expired) is the canonical shape to port to the unified Voucher Card.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Voucher color tokens are bound.",
        "body": "Background (<code>main/vouchers/color/default/bg</code>, <code>main/vouchers/color/expired/bg</code>), title (<code>default/label-title</code> #0A2757, <code>expired/label-title</code> #445C85), amount (<code>label-amount-horizontal</code> #2340A9, <code>expired/label-amount</code> #6780A9), original amount (<code>label-amount-original</code> #90A8D0), and metadata (<code>expired/label-metadata</code> #6780A9) all resolve through the voucher component variable collection.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Badge instance is a DS component.",
        "body": "The corner ribbon is a real Badge instance — styled via <code>main/badge/information/heavy/background</code>, <code>main/badge/negative/heavy/background</code>, or <code>main/badge/muted/light/background</code> depending on state. Composition works; only the label string is state-derived rather than user-settable.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      },
      {
        "headline": "Shadow uses the app elevation token.",
        "body": "<code>app/shadow/shadow-low</code> (0 0 4 0 #020e220f) is applied to the card frame.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "open": [],
    "recommendations": [],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vch-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"vch-ctrl-state\" onchange=\"_vchDemoUpdate()\"><option value=\"limited\" selected=\"\">Limited</option><option value=\"expiring\">Expiring</option><option value=\"used\">Used</option><option value=\"expired\">Expired</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Badge</span><select class=\"demo-panel-select\" id=\"vch-ctrl-badge\" onchange=\"_vchDemoUpdate()\"><option value=\"yes\" selected=\"\">Yes</option><option value=\"no\">No</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Original price</span><select class=\"demo-panel-select\" id=\"vch-ctrl-original\" onchange=\"_vchDemoUpdate()\"><option value=\"yes\" selected=\"\">Yes</option><option value=\"no\">No</option></select></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": voucherCardHorizontalDemoControls,
        "title": "Default — active voucher",
        "node": "5119:1786",
        "description": "Active voucher card layout — image left, title + amounts + metadata right. Default state used in voucher catalogs.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"vch-spec-default-preview\"><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:336px;height:111px;display:flex;background:#FFFFFF;border-radius:6px;overflow:hidden;box-shadow:0 0 4px rgba(2,14,34,0.06);font-family:'Proxima Soft',system-ui;\"><div style=\"flex:1;padding:12px;display:flex;flex-direction:column;justify-content:space-between;min-width:0;\"><div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"color:#0A2757;font-size:16px;font-weight:700;line-height:20px;letter-spacing:0.25px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">Buy Load Globe Go90</div><div style=\"display:flex;gap:4px;align-items:center;\"><div style=\"color:#2340A9;font-size:14px;font-weight:700;letter-spacing:0.25px;\">PHP 50.00</div><div style=\"color:#90A8D0;font-size:14px;font-weight:600;text-decoration:line-through;letter-spacing:0.25px;\">PHP 90.00</div></div></div><div style=\"color:#445C85;font-size:10px;font-family:'BarkAda',system-ui;font-weight:600;line-height:15px;\">Validity: Dec 25 2022 - Jan 5 2023</div></div><div style=\"position:relative;width:96px;height:111px;background:#005CE5;overflow:hidden;\"><div style=\"position:absolute;left:0;top:0;bottom:0;width:1px;border-left:1px dashed rgba(255,255,255,0.9);\"></div><div style=\"position:absolute;left:calc(50% - 22px);top:calc(50% - 22px);width:44px;height:44px;border:3px solid #FFFFFF;border-right-color:transparent;border-radius:50%;opacity:1;\"></div><div style=\"position:absolute;left:calc(50% - 5px);top:calc(50% - 5px);width:10px;height:10px;background:#FFFFFF;border-radius:50%;opacity:1;\"></div><div style=\"position:absolute;right:0;top:0;bottom:0;width:28px;display:flex;align-items:center;justify-content:center;border-left:1px dashed rgba(255,255,255,0.6);\"><div style=\"transform:rotate(-90deg);color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;white-space:nowrap;\">GET VOUCHER</div></div><div style=\"position:absolute;top:8px;left:0;background:#2340A9;color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;padding:4px 8px 2px 8px;border-top-right-radius:4px;border-bottom-right-radius:4px;line-height:10px;\">Limited</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">state=limited</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "limited",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Has original price",
                "value": "Yes",
                "mono": true,
                "prop": "originalPrice"
              },
              {
                "key": "Has metadata row",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/vouchers/color/default/bg" },
              { "key": "Title color", "value": "#0A2757", "token": "main/vouchers/color/default/label-title",
                "variants": {
                  "state:used":    { "value": "#445C85", "token": "main/vouchers/color/used/label-title" },
                  "state:expired": { "value": "#445C85", "token": "main/vouchers/color/expired/label-title" }
                }
              },
              { "key": "Amount color", "value": "#2340A9", "token": "main/vouchers/color/label-amount-horizontal",
                "variants": {
                  "state:used":    { "value": "#6780A9", "token": "main/vouchers/color/used/label-amount" },
                  "state:expired": { "value": "#6780A9", "token": "main/vouchers/color/expired/label-amount" }
                }
              },
              { "key": "Original amount color", "value": "#90A8D0", "token": "main/vouchers/color/default/label-amount-original",
                "variants": {
                  "originalPrice:No": { "hide": true }
                }
              },
              { "key": "Partner bg", "value": "#005CE5", "token": "main/vouchers/color/default/partner-bg",
                "variants": {
                  "state:used":    { "value": "#8A96AF", "token": "main/vouchers/color/used/partner-bg" },
                  "state:expired": { "value": "#8A96AF", "token": "main/vouchers/color/expired/partner-bg" }
                }
              },
              { "key": "Badge bg", "value": "#2340A9", "token": "main/vouchers/color/limited/badge-bg",
                "variants": {
                  "state:expiring": { "value": "#D61B2C", "token": "main/vouchers/color/expiring/badge-bg" },
                  "state:used":     { "value": "#C2C5CA", "token": "main/vouchers/color/used/badge-bg" },
                  "state:expired":  { "value": "#C2C5CA", "token": "main/vouchers/color/expired/badge-bg" }
                }
              },
              {
                "key": "Shadow color",
                "value": "#020E220F (~6%)",
                "mono": true
              },
              {
                "key": "Shadow token",
                "value": "app/shadow/shadow-low",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "144",
                "mono": true
              },
              {
                "key": "Image area",
                "value": "144 × 144",
                "mono": true
              },
              {
                "key": "Body padding",
                "value": "12",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "6",
                "mono": true
              },
              {
                "key": "Shadow blur",
                "value": "4",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Multi-line Label/Base",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft · Bold 16 · LH 20 · Track 0.25",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft · Bold 14 · LH 14",
                "mono": true
              },
              {
                "key": "Original amount style",
                "value": "Primary/Label/Light/Small (semibold)",
                "mono": true
              },
              {
                "key": "Metadata style",
                "value": "Secondary/Bold/Small Caption (BarkAda · 10)",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Cinema voucher — 50% off\"</span><span class=\"syn-punc\">,</span>\n    amount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"₱150\"</span><span class=\"syn-punc\">,</span>\n    originalAmount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"₱300\"</span><span class=\"syn-punc\">,</span>\n    metadata<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Valid until Dec 31\"</span><span class=\"syn-punc\">,</span>\n    image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"voucher-cinema\"</span><span class=\"syn-punc\">),</span>\n    orientation<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>horizontal\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Cinema voucher — 50% off\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱150\"</span><span class=\"syn-punc\">,</span>\n    originalAmount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱300\"</span><span class=\"syn-punc\">,</span>\n    metadata <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Valid until Dec 31\"</span><span class=\"syn-punc\">,</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>voucher_cinema<span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span>Horizontal\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "no-original",
        "demoKey": "no-original",
        "demoControls": voucherCardHorizontalDemoControls,
        "title": "No original price — single amount",
        "node": "5119:1786",
        "description": "Slim variant when the voucher has no compared/strike-through price. Renders a single amount line.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"vch-spec-no-original-preview\"><div style=\"display:flex;flex-direction:column;gap:6px;align-items:center;\"><div style=\"width:336px;height:111px;display:flex;background:#FFFFFF;border-radius:6px;overflow:hidden;box-shadow:0 0 4px rgba(2,14,34,0.06);font-family:'Proxima Soft',system-ui;\"><div style=\"flex:1;padding:12px;display:flex;flex-direction:column;justify-content:space-between;min-width:0;\"><div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"color:#0A2757;font-size:16px;font-weight:700;line-height:20px;letter-spacing:0.25px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">Buy Load Globe Go90</div><div style=\"display:flex;gap:4px;align-items:center;\"><div style=\"color:#2340A9;font-size:14px;font-weight:700;letter-spacing:0.25px;\">PHP 50.00</div></div></div><div style=\"color:#445C85;font-size:10px;font-family:'BarkAda',system-ui;font-weight:600;line-height:15px;\">Validity: Dec 25 2022 - Jan 5 2023</div></div><div style=\"position:relative;width:96px;height:111px;background:#005CE5;overflow:hidden;\"><div style=\"position:absolute;left:0;top:0;bottom:0;width:1px;border-left:1px dashed rgba(255,255,255,0.9);\"></div><div style=\"position:absolute;left:calc(50% - 22px);top:calc(50% - 22px);width:44px;height:44px;border:3px solid #FFFFFF;border-right-color:transparent;border-radius:50%;opacity:1;\"></div><div style=\"position:absolute;left:calc(50% - 5px);top:calc(50% - 5px);width:10px;height:10px;background:#FFFFFF;border-radius:50%;opacity:1;\"></div><div style=\"position:absolute;right:0;top:0;bottom:0;width:28px;display:flex;align-items:center;justify-content:center;border-left:1px dashed rgba(255,255,255,0.6);\"><div style=\"transform:rotate(-90deg);color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;white-space:nowrap;\">GET VOUCHER</div></div><div style=\"position:absolute;top:8px;left:0;background:#2340A9;color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;padding:4px 8px 2px 8px;border-top-right-radius:4px;border-bottom-right-radius:4px;line-height:10px;\">Limited</div></div></div><div style=\"color:#666;font-size:10px;font-family:system-ui;font-weight:600;\">state=limited</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "limited",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Has original price",
                "value": "No",
                "mono": true,
                "prop": "originalPrice"
              },
              {
                "key": "Has metadata row",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/vouchers/color/default/bg" },
              { "key": "Title color", "value": "#0A2757", "token": "main/vouchers/color/default/label-title" },
              { "key": "Amount color", "value": "#2340A9", "token": "main/vouchers/color/label-amount-horizontal" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "144",
                "mono": true
              },
              {
                "key": "Image area",
                "value": "144 × 144",
                "mono": true
              },
              {
                "key": "Body padding",
                "value": "12",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "6",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Multi-line Label/Base",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Label/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Free coffee voucher\"</span><span class=\"syn-punc\">,</span>\n    amount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"FREE\"</span><span class=\"syn-punc\">,</span>\n    metadata<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Valid until May 1\"</span><span class=\"syn-punc\">,</span>\n    image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"voucher-coffee\"</span><span class=\"syn-punc\">),</span>\n    orientation<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>horizontal\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVoucherCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Free coffee voucher\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"FREE\"</span><span class=\"syn-punc\">,</span>\n    metadata <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Valid until May 1\"</span><span class=\"syn-punc\">,</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>voucher_coffee<span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span>Horizontal\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Default (active voucher)
      buildStatelessColorsTable({
        title: 'Default — Colors',
        description: 'Active voucher with full-color title, brand-blue amount, strike-through original price, and a soft drop shadow.',
        rows: [
          { role: 'Surface bg',     token: 'main/vouchers/color/default/bg',                 value: '#FFFFFF' },
          { role: 'Title',          token: 'main/vouchers/color/default/label-title',        value: '#0A2757' },
          { role: 'Amount',         token: 'main/vouchers/color/label-amount-horizontal',    value: '#2340A9' },
          { role: 'Original amount', token: 'main/vouchers/color/default/label-amount-original', value: '#90A8D0' },
          { role: 'Shadow',         token: 'shadow/color-shadow-soft',                       value: '#020E22 @ 6%' },
        ],
      }),
      // Card 2 — Expired
      buildStatelessColorsTable({
        title: 'Expired — Colors',
        description: 'Past-validity voucher with muted title to signal it is no longer redeemable.',
        rows: [
          { role: 'Surface bg', token: 'main/vouchers/color/expired/bg',          value: '#FFFFFF' },
          { role: 'Title',      token: 'main/vouchers/color/expired/label-title', value: '#445C85' },
        ],
      }),
      // Card 3 — Used (history view)
      buildStatelessColorsTable({
        title: 'Used — Colors',
        description: 'Same surface as Default — distinguished by a "Used" badge overlay rather than a palette change.',
        rows: [
          { role: 'Surface bg', token: 'main/vouchers/color/default/bg',              value: '#FFFFFF' },
          { role: 'Title',      token: 'main/vouchers/color/default/label-title',     value: '#0A2757' },
          { role: 'Amount',     token: 'main/vouchers/color/label-amount-horizontal', value: '#2340A9' },
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
      "description": "Current shape is 4 state variants + 2 booleans with hardcoded content. The table below shows the target shape after the family consolidation — each row captures what the proposed EBVoucherCard replaces.",
      "rows": [
        {
          "figma": "—",
          "swift": "<code>orientation</code>",
          "compose": "<code>orientation: EBVoucherOrientation</code>"
        },
        {
          "figma": "<code>state</code> (4 values)",
          "swift": "<code>state</code> (5 values)",
          "compose": "<code>state: EBVoucherState</code>"
        },
        {
          "figma": "hardcoded \"Buy Load Globe Go90\"",
          "swift": "<code>title</code> (string)",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "hardcoded \"PHP 50.00\"",
          "swift": "<code>price</code> (string)",
          "compose": "<code>price: String</code>"
        },
        {
          "figma": "<code>crossedValue</code> (boolean, \"PHP 90.00\" frozen)",
          "swift": "<code>originalPrice</code> (string)",
          "compose": "<code>originalPrice: String?</code>"
        },
        {
          "figma": "hardcoded \"Validity: …\"",
          "swift": "<code>validity</code> (string)",
          "compose": "<code>validity: String?</code>"
        },
        {
          "figma": "raster GCash logo",
          "swift": "logo Slot",
          "compose": "trailing closure"
        },
        {
          "figma": "<code>badge</code> (boolean, state-derived label)",
          "swift": "<code>badge</code> Slot (optional)",
          "compose": "<code>badge: EBBadge?</code>"
        },
        {
          "figma": "\"GET VOUCHER\" rotated text",
          "swift": "— (remove or decorative)",
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
        "notes": "Two parallel partner-image subtrees (<code>voucher</code> vs <code>Voucher Image V1</code>) for active vs greyed states. Four badge layers all named <code>Badge</code>. Content block uses generic <code>container</code> / <code>price</code> names but text layers are unnamed."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "State enum drives bg + label colors + badge style + badge text all at once. Title, price, original price, validity are frozen strings. <code>crossedValue</code> boolean should be a nullable <code>originalPrice</code> string."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/vouchers/color/{default|expired}/*</code> and <code>main/badge/{information|negative|muted}/{heavy|light}/*</code>. Typography uses named text styles. Shadow uses <code>app/shadow/shadow-low</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Parallel to 2 other voucher components with divergent schemas. Native is one <code>EBVoucherCard</code>, not three. Strings/logo need property-ification before any 1:1 mapping."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "4 state variants are good but no <code>default</code>, no pressed/focused/disabled on the card frame, and the \"GET VOUCHER\" CTA is a non-interactive rotated text label rather than a Button."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Partner logo is raster (<code>imgLogoNoText</code>, GCash PNG). Perforated ticket edge uses a raster mask (<code>imgPerforate</code>). Should be vector / SVG path."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Cannot map with hardcoded strings and no logo slot. Linkability requires the family consolidation + property-ification first."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "Single axis: <code>state</code>. All 4 variants render at 336 × 111. Booleans <code>badge</code> (default <code>true</code>) and <code>crossedValue</code> (default <code>true</code>) apply uniformly across states.",
      "columns": [
        "Node ID",
        "Variant",
        "Dimensions",
        "Badge style",
        "Partner-image treatment"
      ],
      "rows": [
        {
          "cells": [
            "<code>5119:1787</code>",
            "<code>state=limited</code>",
            "336 × 111",
            "information/heavy #2340A9, label \"Limited\"",
            "Full-color bg (<code>bg/color-bg-primary</code> #005CE5) + white GCash logo"
          ]
        },
        {
          "cells": [
            "<code>5119:1807</code>",
            "<code>state=expiring</code>",
            "336 × 111",
            "negative/heavy #D61B2C, label \"Expiring\"",
            "Full-color bg (<code>bg/color-bg-primary</code> #005CE5) + white GCash logo"
          ]
        },
        {
          "cells": [
            "<code>5119:1827</code>",
            "<code>state=used</code>",
            "336 × 111",
            "muted/light #C2C5CA, label \"Used\"",
            "Greyed overlay (<code>bg/color-bg-overlay-weak</code> rgba(2,14,34,0.24)), mix-blend-multiply"
          ]
        },
        {
          "cells": [
            "<code>5119:1847</code>",
            "<code>state=expired</code>",
            "336 × 111",
            "muted/light #C2C5CA, label \"Expired\"",
            "Greyed overlay (<code>bg/color-bg-overlay-weak</code> rgba(2,14,34,0.24)), mix-blend-multiply"
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
      "header": "Initial Assessment · node 5119:1786",
      "rows": [
        {
          "body": "<strong>Assessed with Restructure verdict.</strong> 4-state variant (limited / expiring / used / expired) is the canonical state axis for the voucher family — the only one of three parallel voucher cards that models state. Text content, partner logo, and perforated edge are hardcoded / raster. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        },
        {
          "body": "<strong>Proposed family-level merge.</strong> Collapse this, Vertical Voucher (<code>5119:1635</code>), and Horizontal Voucher (<code>5121:4533</code>) into a single <code>Voucher Card</code> with <code>orientation</code> + <code>state</code> axes. Port this component's state coverage to the unified schema. Target: 2 × 5 = 10 variants instead of 3 divergent components. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        }
      ]
    }
  ]
};
