import type { ComponentData } from '../types';

export const badge: ComponentData = {
  "meta": {
    "slug": "badge",
    "name": "Badge",
    "node": "18482:28972",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-28972",
    "description": "A small label used to flag status, counts, or category — supports multiple intents and densities.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect x=\"2\" y=\"5\" width=\"28\" height=\"10\" rx=\"5\" fill=\"#005CE5\"/>\n      <text x=\"16\" y=\"12\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n      \n      <rect x=\"4\" y=\"19\" width=\"24\" height=\"10\" rx=\"5\" fill=\"#E5F1FF\"/>\n      <text x=\"16\" y=\"26\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n    </svg>"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"18\" y=\"16\" width=\"84\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\".1\"></rect>\n          <rect x=\"22\" y=\"20\" width=\"30\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".12\"></rect>\n          <rect x=\"72\" y=\"19\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#12AF80\" opacity=\".5\"></rect>\n          \n          <rect x=\"18\" y=\"34\" width=\"84\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\".1\"></rect>\n          <rect x=\"22\" y=\"38\" width=\"36\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".12\"></rect>\n          <rect x=\"72\" y=\"37\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#CA970C\" opacity=\".5\"></rect>\n          \n          <rect x=\"18\" y=\"52\" width=\"84\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\".1\"></rect>\n          <rect x=\"22\" y=\"56\" width=\"28\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".12\"></rect>\n          <rect x=\"72\" y=\"55\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#D61B2C\" opacity=\".5\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"bd-demo-preview\"><span style=\"display:inline-block;background:#005CE5;color:#FFFFFF;font-family:HeyMeow Rnd,system-ui,sans-serif;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.5px;padding:4px 8px 2px;border-radius:99px;text-align:center;white-space:nowrap;\">Label</span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"bd-demo-state\" onchange=\"updateBadgeDemo()\"><option value=\"Primary\" selected=\"\">Primary</option><option value=\"Brand\">Brand</option><option value=\"Info\">Info</option><option value=\"Success\">Success</option><option value=\"Warning\">Warning</option><option value=\"Danger\">Danger</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Level</span><select class=\"demo-panel-select\" id=\"bd-demo-level\" onchange=\"updateBadgeDemo()\"><option value=\"Heavy\" selected=\"\">Heavy</option><option value=\"Medium\">Medium</option><option value=\"Light\">Light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"bd-demo-type\" onchange=\"updateBadgeDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Voucher\">Voucher</option><option value=\"Transaction\">Transaction</option><option value=\"Dashboard\">Dashboard</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Universal status indicator used across transaction lists, vouchers, dashboards, and notifications. 7 semantic states and 3 emphasis levels cover all common badge use cases."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Pure display component. Carries its own background, label color, padding, and border-radius per variant. No external dependencies or slots."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "Token naming follows DS convention (<code>main/badge/{semantic}/{level}/</code>). Minor issues: State property names don't match token names (Info vs information, Success vs positive). Danger/Heavy and Disabled/Heavy Transaction variants have hardcoded <code>opacity: 0.90</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Simple leaf component. Nests cleanly in list rows, card headers, table cells, and notification banners. No child slots or complex nesting."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State + Level + Type",
        "notes": "Display-only. All 7 states x 3 levels fully defined per type."
      }
    ],
    "resolved": [
      {
        "body": "Hardcoded <code>opacity: 0.90</code> removed from Danger/Heavy Transaction (<code>21:111576</code>) and Disabled/Heavy Transaction (<code>3714:3863</code>) inner containers. Both now at opacity 1, consistent with the other 66 variants. <span class=\"tag-fixed\">C3 Fixed</span>"
      },
      {
        "body": "State property values renamed to match token semantic names across all 60 affected variants: <code>Info</code> → <code>Information</code>, <code>Success</code> → <code>Positive</code>, <code>Warning</code> → <code>Notice</code>, <code>Danger</code> → <code>Negative</code>, <code>Disabled</code> → <code>Muted</code>. Figma State values now align 1:1 with token namespace — cleaner Code Connect mapping, no translation layer needed. <span class=\"tag-fixed\">C2 Fixed</span>"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structural work through v1.1 (state rename, opacity fix) is done — registration can proceed against the 68-variant schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add a leading icon slot.",
        "body": "Common pattern in fintech status badges (warning triangle, check circle, info icon). Today consumers can't pair an icon with a badge without detaching.",
        "tag": "Slot"
      },
      {
        "headline": "Consider Medium / Light levels for Primary and Brand.",
        "body": "These states only support Heavy today — if lower-emphasis variants are needed (subtle pill, ghost badge), add them now rather than waiting for a future break.",
        "tag": "Property"
      },
      {
        "headline": "Numeric count variant.",
        "body": "Notification badges (inbox unread count, cart count) overlap Badge's visual space but aren't formalized here. Either document that consumers use Counter instead, or add a <code>count</code> variant with overflow handling (<code>\"99+\"</code>).",
        "tag": "Property"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "bd-spec-default",
        "title": "Default",
        "node": "18482:28972",
        "description": "Pill-shaped badge with full border-radius (99px). Standard status indicator for general use.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Default",
                "mono": false
              },
              {
                "key": "State",
                "value": "Information / Positive / Notice / Negative / Muted / Brand / Primary",
                "mono": false
              },
              {
                "key": "Level",
                "value": "Light / Medium / Heavy",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Information light bg",
                "value": "#E5F1FF",
                "mono": true
              },
              {
                "key": "Information light bg token",
                "value": "badge/information/light/background",
                "mono": true
              },
              {
                "key": "Information light label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Information light label token",
                "value": "badge/information/light/label",
                "mono": true
              },
              {
                "key": "Positive heavy bg",
                "value": "#12AF80",
                "mono": true
              },
              {
                "key": "Positive heavy bg token",
                "value": "badge/positive/heavy/background",
                "mono": true
              },
              {
                "key": "Negative heavy bg",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Negative heavy bg token",
                "value": "badge/negative/heavy/background",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Padding",
                "value": "4 vertical · 8 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-pill (99px)",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "20px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>intent<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.information</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBadgeIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Information</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<span style=\"display:inline-block;background:#005CE5;color:#FFFFFF;font-family:HeyMeow Rnd,system-ui,sans-serif;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.5px;padding:4px 8px 2px;border-radius:99px;text-align:center;white-space:nowrap;\">Label</span>"
      },
      {
        "cardKey": "bd-spec-voucher",
        "title": "Voucher",
        "node": "18482:28972",
        "description": "Badge with bottom-right radius only (4px). Used on voucher cards and promotional items. Fixed 18px height.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Voucher",
                "mono": false
              },
              {
                "key": "State",
                "value": "Information / Positive / Notice / Negative / Muted / Brand / Primary",
                "mono": false
              },
              {
                "key": "Level",
                "value": "Light / Medium / Heavy",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Voucher bg",
                "value": "#072592",
                "mono": true
              },
              {
                "key": "Voucher bg token",
                "value": "badge/information/heavy/background",
                "mono": true
              },
              {
                "key": "Voucher label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Voucher label token",
                "value": "badge/information/heavy/label",
                "mono": true
              },
              {
                "key": "Voucher border",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Voucher border token",
                "value": "badge/information/heavy/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Padding",
                "value": "4 vertical · 8 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-1 (4px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Voucher label\"</span><span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.voucher</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Voucher label\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBadgeType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Voucher</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<span style=\"display:inline-block;background:#005CE5;color:#FFFFFF;font-family:HeyMeow Rnd,system-ui,sans-serif;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.5px;padding:4px 8px 2px;border-radius:0 0 4px 0;text-align:center;white-space:nowrap;height:18px;box-sizing:border-box;\">Label</span>"
      },
      {
        "cardKey": "bd-spec-transaction",
        "title": "Transaction",
        "node": "18482:28972",
        "description": "Rounded rectangle badge (4px radius). Used in transaction lists and history screens. Compact padding.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Transaction",
                "mono": false
              },
              {
                "key": "State",
                "value": "Information / Positive / Notice / Negative / Muted / Brand / Primary",
                "mono": false
              },
              {
                "key": "Level",
                "value": "Light / Medium / Heavy",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Pending bg",
                "value": "#FFF9EB",
                "mono": true
              },
              {
                "key": "Pending bg token",
                "value": "badge/notice/light/background",
                "mono": true
              },
              {
                "key": "Pending label",
                "value": "#966F0B",
                "mono": true
              },
              {
                "key": "Pending label token",
                "value": "badge/notice/light/label",
                "mono": true
              },
              {
                "key": "Success bg",
                "value": "#E7F8F0",
                "mono": true
              },
              {
                "key": "Success bg token",
                "value": "badge/positive/light/background",
                "mono": true
              },
              {
                "key": "Success label",
                "value": "#048570",
                "mono": true
              },
              {
                "key": "Success label token",
                "value": "badge/positive/light/label",
                "mono": true
              },
              {
                "key": "Failed bg",
                "value": "#F8E6E6",
                "mono": true
              },
              {
                "key": "Failed bg token",
                "value": "badge/negative/light/background",
                "mono": true
              },
              {
                "key": "Failed label",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Failed label token",
                "value": "badge/negative/light/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Padding",
                "value": "4 vertical · 8 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-pill (99px)",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "20px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Pending\"</span><span class=\"syn-punc\">, </span>intent<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.notice</span><span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.transaction</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Pending\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBadgeIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Notice</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBadgeType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Transaction</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<span style=\"display:inline-block;background:#005CE5;color:#FFFFFF;font-family:HeyMeow Rnd,system-ui,sans-serif;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.5px;padding:3px 4px 1px;border-radius:4px;text-align:center;white-space:nowrap;\">Label</span>"
      },
      {
        "cardKey": "bd-spec-dashboard",
        "title": "Dashboard",
        "node": "18482:28972",
        "description": "Compact rounded rectangle badge (4px radius) with smaller typography (10px). Used in dashboard widgets and summary cards.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Dashboard",
                "mono": false
              },
              {
                "key": "State",
                "value": "Information / Positive / Notice / Negative / Muted / Brand / Primary",
                "mono": false
              },
              {
                "key": "Level",
                "value": "Light / Medium / Heavy",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "New bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "New bg token",
                "value": "badge/primary/heavy/background",
                "mono": true
              },
              {
                "key": "New label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "New label token",
                "value": "badge/primary/heavy/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Padding",
                "value": "2 vertical · 6 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-pill",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"New\"</span><span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.dashboard</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"New\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBadgeType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Dashboard</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<span style=\"display:inline-block;background:#005CE5;color:#FFFFFF;font-family:HeyMeow Rnd,system-ui,sans-serif;font-weight:700;font-size:10px;line-height:10px;letter-spacing:0.25px;padding:1px 4px 1px;border-radius:4px;text-align:center;white-space:nowrap;\">Label</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Appearance Mode",
        "description": "Display-only component. All colors bound to <code>main/badge/{semantic}/{level}/</code> tokens. Primary and Brand states only support Heavy level.",
        "columns": [
          "Role",
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Primary",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/primary/heavy/background",
              "#005CE5"
            ]
          },
          {
            "role": "Primary",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/primary/heavy/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Brand",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/brand/heavy/background",
              "#1972F9"
            ]
          },
          {
            "role": "Brand",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/brand/heavy/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Info",
            "token": "Light",
            "values": [
              "bg",
              "main/badge/information/light/background",
              "#E5F1FF"
            ]
          },
          {
            "role": "Info",
            "token": "Light",
            "values": [
              "label",
              "main/badge/information/light/label",
              "#005CE5"
            ]
          },
          {
            "role": "Info",
            "token": "Medium",
            "values": [
              "bg",
              "main/badge/information/medium/background",
              "#D2E5FF"
            ]
          },
          {
            "role": "Info",
            "token": "Medium",
            "values": [
              "label",
              "main/badge/information/medium/label",
              "#005CE5"
            ]
          },
          {
            "role": "Info",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/information/heavy/background",
              "#2340A9"
            ]
          },
          {
            "role": "Info",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/information/heavy/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Success",
            "token": "Light",
            "values": [
              "bg",
              "main/badge/positive/light/background",
              "#E7F8F0"
            ]
          },
          {
            "role": "Success",
            "token": "Light",
            "values": [
              "label",
              "main/badge/positive/light/label",
              "#048570"
            ]
          },
          {
            "role": "Success",
            "token": "Medium",
            "values": [
              "bg",
              "main/badge/positive/medium/background",
              "#CAF2E0"
            ]
          },
          {
            "role": "Success",
            "token": "Medium",
            "values": [
              "label",
              "main/badge/positive/medium/label",
              "#048570"
            ]
          },
          {
            "role": "Success",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/positive/heavy/background",
              "#12AF80"
            ]
          },
          {
            "role": "Success",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/positive/heavy/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Warning",
            "token": "Light",
            "values": [
              "bg",
              "main/badge/notice/light/background",
              "#FCF0CA"
            ]
          },
          {
            "role": "Warning",
            "token": "Light",
            "values": [
              "label",
              "main/badge/notice/light/label",
              "#966F0B"
            ]
          },
          {
            "role": "Warning",
            "token": "Medium",
            "values": [
              "bg",
              "main/badge/notice/medium/background",
              "#F7D96E"
            ]
          },
          {
            "role": "Warning",
            "token": "Medium",
            "values": [
              "label",
              "main/badge/notice/medium/label",
              "#966F0B"
            ]
          },
          {
            "role": "Warning",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/notice/heavy/background",
              "#CA970C"
            ]
          },
          {
            "role": "Warning",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/notice/heavy/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Danger",
            "token": "Light",
            "values": [
              "bg",
              "main/badge/negative/light/background",
              "#F8E6E6"
            ]
          },
          {
            "role": "Danger",
            "token": "Light",
            "values": [
              "label",
              "main/badge/negative/light/label",
              "#B50707"
            ]
          },
          {
            "role": "Danger",
            "token": "Medium",
            "values": [
              "bg",
              "main/badge/negative/medium/background",
              "#F4C7C9"
            ]
          },
          {
            "role": "Danger",
            "token": "Medium",
            "values": [
              "label",
              "main/badge/negative/medium/label",
              "#8D0710"
            ]
          },
          {
            "role": "Danger",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/negative/heavy/background",
              "#D61B2C"
            ]
          },
          {
            "role": "Danger",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/negative/heavy/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Disabled",
            "token": "Light",
            "values": [
              "bg",
              "main/badge/muted/light/background",
              "#C2C5CA"
            ]
          },
          {
            "role": "Disabled",
            "token": "Light",
            "values": [
              "label",
              "main/badge/muted/light/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Disabled",
            "token": "Medium",
            "values": [
              "bg",
              "main/badge/muted/medium/background",
              "#9A9FA7"
            ]
          },
          {
            "role": "Disabled",
            "token": "Medium",
            "values": [
              "label",
              "main/badge/muted/medium/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "Disabled",
            "token": "Heavy",
            "values": [
              "bg",
              "main/badge/muted/heavy/background",
              "#717883"
            ]
          },
          {
            "role": "Disabled",
            "token": "Heavy",
            "values": [
              "label",
              "main/badge/muted/heavy/label",
              "#FFFFFF"
            ]
          }
        ]
      },
      {
        "title": "Layout by Type",
        "columns": [
          "Voucher",
          "Transaction",
          "Dashboard"
        ],
        "rows": [
          {
            "role": "Height",
            "token": "auto",
            "values": [
              "18px (fixed)",
              "auto",
              "auto"
            ]
          },
          {
            "role": "Padding H",
            "token": "8px",
            "values": [
              "8px",
              "4px",
              "4px"
            ]
          },
          {
            "role": "Padding V",
            "token": "2px (top) / 4px (bottom)",
            "values": [
              "2px (top) / 4px (bottom)",
              "1px (top) / 3px (bottom)",
              "1px"
            ]
          },
          {
            "role": "Corner radius",
            "token": "99px (pill)",
            "values": [
              "0/0/4px/0 (BR only)",
              "4px",
              "4px"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Tracking",
          "Line-height"
        ],
        "rows": [
          {
            "role": "Default / Voucher / Transaction",
            "token": "Primary/Label/Fine",
            "values": [
              "HeyMeow Rnd Bold",
              "12px",
              "0.5px",
              "12px"
            ]
          },
          {
            "role": "Dashboard",
            "token": "Primary/Label/Tiny",
            "values": [
              "HeyMeow Rnd Bold",
              "10px",
              "0.25px",
              "10px"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS -- Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File -> Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Or in Package.swift:</span>\n.<span class=\"fn\">package</span>(\n    <span class=\"prp\">url</span>: <span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>,\n    <span class=\"prp\">from</span>: <span class=\"str\">\"1.0.0\"</span>\n)"
        },
        {
          "label": "Android -- Gradle (Kotlin DSL)",
          "code": "<span class=\"cmt\">// build.gradle.kts (app)</span>\n<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:badge:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.badge.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. API shape is final -- native implementation is pending."
    },
    "propertyMapping": {
      "description": "Every row maps a Figma component property to its native equivalent.",
      "rows": [
        {
          "figma": "<code>State=Primary</code>",
          "swift": "<code>state: .primary</code>",
          "compose": "<code>BadgeState.Primary</code>"
        },
        {
          "figma": "<code>State=Brand</code>",
          "swift": "<code>state: .brand</code>",
          "compose": "<code>BadgeState.Brand</code>"
        },
        {
          "figma": "<code>State=Info</code>",
          "swift": "<code>state: .info</code>",
          "compose": "<code>BadgeState.Info</code>"
        },
        {
          "figma": "<code>State=Success</code>",
          "swift": "<code>state: .success</code>",
          "compose": "<code>BadgeState.Success</code>"
        },
        {
          "figma": "<code>State=Warning</code>",
          "swift": "<code>state: .warning</code>",
          "compose": "<code>BadgeState.Warning</code>"
        },
        {
          "figma": "<code>State=Danger</code>",
          "swift": "<code>state: .danger</code>",
          "compose": "<code>BadgeState.Danger</code>"
        },
        {
          "figma": "<code>State=Disabled</code>",
          "swift": "<code>state: .disabled</code>",
          "compose": "<code>BadgeState.Disabled</code>"
        },
        {
          "figma": "<code>Level=Heavy</code>",
          "swift": "<code>level: .heavy</code>",
          "compose": "<code>BadgeLevel.Heavy</code>"
        },
        {
          "figma": "<code>Level=Medium</code>",
          "swift": "<code>level: .medium</code>",
          "compose": "<code>BadgeLevel.Medium</code>"
        },
        {
          "figma": "<code>Level=Light</code>",
          "swift": "<code>level: .light</code>",
          "compose": "<code>BadgeLevel.Light</code>"
        },
        {
          "figma": "<code>Type=Default</code>",
          "swift": "<code>type: .default</code>",
          "compose": "<code>BadgeType.Default</code>"
        },
        {
          "figma": "<code>Type=Voucher</code>",
          "swift": "<code>type: .voucher</code>",
          "compose": "<code>BadgeType.Voucher</code>"
        },
        {
          "figma": "<code>Type=Transaction</code>",
          "swift": "<code>type: .transaction</code>",
          "compose": "<code>BadgeType.Transaction</code>"
        },
        {
          "figma": "<code>Type=Dashboard</code>",
          "swift": "<code>type: .dashboard</code>",
          "compose": "<code>BadgeType.Dashboard</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Badge/EBBadge.swift",
        "compose": "android/components/badge/EBBadge.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default (Pill)",
        "swift": "<span class=\"cmt\">// Success badge -- heavy level</span>\n<span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Completed\"</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">success</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">heavy</span>)\n\n<span class=\"cmt\">// Info badge -- light level</span>\n<span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Pending\"</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">info</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">light</span>)",
        "compose": "<span class=\"cmt\">// Success badge -- heavy level</span>\n<span class=\"typ\">EBBadge</span>(\n    <span class=\"prp\">text</span> = <span class=\"str\">\"Completed\"</span>,\n    <span class=\"prp\">state</span> = <span class=\"typ\">BadgeState</span>.<span class=\"prp\">Success</span>,\n    <span class=\"prp\">level</span> = <span class=\"typ\">BadgeLevel</span>.<span class=\"prp\">Heavy</span>\n)\n\n<span class=\"cmt\">// Info badge -- light level</span>\n<span class=\"typ\">EBBadge</span>(\n    <span class=\"prp\">text</span> = <span class=\"str\">\"Pending\"</span>,\n    <span class=\"prp\">state</span> = <span class=\"typ\">BadgeState</span>.<span class=\"prp\">Info</span>,\n    <span class=\"prp\">level</span> = <span class=\"typ\">BadgeLevel</span>.<span class=\"prp\">Light</span>\n)"
      },
      {
        "subheading": "Voucher",
        "swift": "<span class=\"typ\">EBBadge</span>(<span class=\"str\">\"50% OFF\"</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">danger</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">heavy</span>, <span class=\"prp\">type</span>: .<span class=\"prp\">voucher</span>)",
        "compose": "<span class=\"typ\">EBBadge</span>(\n    <span class=\"prp\">text</span> = <span class=\"str\">\"50% OFF\"</span>,\n    <span class=\"prp\">state</span> = <span class=\"typ\">BadgeState</span>.<span class=\"prp\">Danger</span>,\n    <span class=\"prp\">level</span> = <span class=\"typ\">BadgeLevel</span>.<span class=\"prp\">Heavy</span>,\n    <span class=\"prp\">type</span> = <span class=\"typ\">BadgeType</span>.<span class=\"prp\">Voucher</span>\n)"
      },
      {
        "subheading": "Transaction",
        "swift": "<span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Failed\"</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">danger</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">heavy</span>, <span class=\"prp\">type</span>: .<span class=\"prp\">transaction</span>)",
        "compose": "<span class=\"typ\">EBBadge</span>(\n    <span class=\"prp\">text</span> = <span class=\"str\">\"Failed\"</span>,\n    <span class=\"prp\">state</span> = <span class=\"typ\">BadgeState</span>.<span class=\"prp\">Danger</span>,\n    <span class=\"prp\">level</span> = <span class=\"typ\">BadgeLevel</span>.<span class=\"prp\">Heavy</span>,\n    <span class=\"prp\">type</span> = <span class=\"typ\">BadgeType</span>.<span class=\"prp\">Transaction</span>\n)"
      },
      {
        "subheading": "Dashboard",
        "swift": "<span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Active\"</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">success</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">light</span>, <span class=\"prp\">type</span>: .<span class=\"prp\">dashboard</span>)",
        "compose": "<span class=\"typ\">EBBadge</span>(\n    <span class=\"prp\">text</span> = <span class=\"str\">\"Active\"</span>,\n    <span class=\"prp\">state</span> = <span class=\"typ\">BadgeState</span>.<span class=\"prp\">Success</span>,\n    <span class=\"prp\">level</span> = <span class=\"typ\">BadgeLevel</span>.<span class=\"prp\">Light</span>,\n    <span class=\"prp\">type</span> = <span class=\"typ\">BadgeType</span>.<span class=\"prp\">Dashboard</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Accessibility label",
        "ios": "<code>accessibilityLabel(\"Status: Completed\")</code>",
        "android": "<code>contentDescription = \"Status: Completed\"</code>"
      },
      {
        "requirement": "Decorative mode",
        "ios": "<code>isAccessibilityElement = false</code> (when status is conveyed elsewhere)",
        "android": "<code>importantForAccessibility = no</code>"
      },
      {
        "requirement": "Color contrast",
        "ios": "Heavy levels meet WCAG AA (4.5:1+)",
        "android": "Heavy levels meet WCAG AA (4.5:1+)"
      },
      {
        "requirement": "Non-color indicator",
        "ios": "Badge text conveys meaning alongside color",
        "android": "Badge text conveys meaning alongside color"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use semantic states that match the content meaning (Success for completed, Danger for failed, Warning for pending).",
        "dontText": "Use badges for interactive elements -- badges are display-only status indicators."
      },
      {
        "doText": "Use Heavy level for primary status indicators and Light/Medium for secondary or supporting context.",
        "dontText": "Use multiple Heavy badges in the same row -- visual noise. Use one Heavy + rest Light/Medium."
      },
      {
        "doText": "Match badge Type to context: Default for general, Voucher for promos, Transaction for history, Dashboard for summaries.",
        "dontText": "Mix badge Types within the same list or group."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Simple single-layer structure: container with text child. Semantic naming."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean enum properties: State, Level, Type. Minor: State names don't match token semantic names."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/badge/</code> tokens. Note: 2 variants have hardcoded <code>opacity: 0.90</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to custom <code>EBBadge</code> on both platforms. Simple text + background shape."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only component. No interactive states needed."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons or assets. Text-only component."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet. Property naming is clean and ready for mapping."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean enum properties: State (7), Level (3), Type (4). Ready for Code Connect mapping."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors token-bound. Minor opacity inconsistency on 2 variants."
      },
      {
        "aspect": "State coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only. No interaction states."
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBBadge.swift / EBBadge.kt not yet created"
      }
    ],
    "variants": {
      "total": 68,
      "description": "7 <code>State</code> values x 3 <code>Level</code> values x 4 <code>Type</code> values = 84 theoretical. Primary and Brand only support Heavy level, so actual count is (2 x 1 x 4) + (5 x 3 x 4) = 8 + 60 = 68 variants.",
      "columns": [
        "State",
        "Level",
        "Types",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "Primary",
            "Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "4 variants"
          ]
        },
        {
          "cells": [
            "Brand",
            "Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "4 variants"
          ]
        },
        {
          "cells": [
            "Info",
            "Light / Medium / Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "12 variants"
          ]
        },
        {
          "cells": [
            "Success",
            "Light / Medium / Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "12 variants"
          ]
        },
        {
          "cells": [
            "Warning",
            "Light / Medium / Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "12 variants"
          ]
        },
        {
          "cells": [
            "Danger",
            "Light / Medium / Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "12 variants"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Light / Medium / Heavy",
            "Default, Voucher, Transaction, Dashboard",
            "12 variants"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.1.0",
      "date": "",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Structural closure -- node 18482:28972",
      "rows": [
        {
          "body": "<strong>Opacity normalized</strong> -- Hardcoded <code>opacity: 0.90</code> removed from Danger/Heavy Transaction (<code>21:111576</code>) and Disabled/Heavy Transaction (<code>3714:3863</code>) inner containers. Both now at opacity 1, consistent with the other 66 variants.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Fixed"
          }
        },
        {
          "body": "<strong>State values renamed to match token semantics</strong> -- 60 variants renamed: <code>Info</code> -> <code>Information</code>, <code>Success</code> -> <code>Positive</code>, <code>Warning</code> -> <code>Notice</code>, <code>Danger</code> -> <code>Negative</code>, <code>Disabled</code> -> <code>Muted</code>. Figma State property now aligns 1:1 with token namespace (<code>main/badge/{information|positive|notice|negative|muted}/{level}/</code>). Cleaner Code Connect mapping with no translation layer.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment -- node 18482:28972",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> -- 68 variants documented across State (Primary/Brand/Info/Success/Warning/Danger/Disabled) x Level (Heavy/Medium/Light) x Type (Default/Voucher/Transaction/Dashboard). Token audit confirms all colors bound to <code>main/badge/{semantic}/{level}/</code> tokens.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Hardcoded opacity on 2 variants</strong> -- Danger/Heavy and Disabled/Heavy Transaction variants have <code>opacity: 0.90</code> on container instead of using token-driven values. Inconsistent with other variants.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Fixed"
          }
        },
        {
          "body": "<strong>State-to-token name mismatch</strong> -- Figma property names (Info, Success, Warning, Danger, Disabled) don't match token semantic names (information, positive, notice, negative, muted). Minor friction for automated Code Connect mapping.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> -- No CLI mappings registered yet. Property naming is clean and ready for mapping.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
