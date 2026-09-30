import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/badge.js`.
// Panel mirrors the property panel of set 18482:28972: three variant axes.
// Level locks to Heavy on Primary and Brand, which ship that Level only.
const badgeDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'primary',
        options: [
          { value: 'primary',     label: 'Primary' },
          { value: 'brand',       label: 'Brand' },
          { value: 'information', label: 'Information' },
          { value: 'positive',    label: 'Positive' },
          { value: 'notice',      label: 'Notice' },
          { value: 'negative',    label: 'Negative' },
          { value: 'muted',       label: 'Muted' },
        ],
      },
      {
        label: 'Level',
        prop: 'level',
        defaultValue: 'heavy',
        options: [
          { value: 'heavy',  label: 'Heavy' },
          { value: 'light',  label: 'Light' },
          { value: 'medium', label: 'Medium' },
        ],
      },
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'default',
        options: [
          { value: 'voucher',     label: 'Voucher' },
          { value: 'transaction', label: 'Transaction' },
          { value: 'default',     label: 'Default' },
          { value: 'dashboard',   label: 'Dashboard' },
        ],
      },
      { label: 'Label', prop: 'label', control: 'input', defaultValue: 'Label', options: [] },
    ],
  },
];

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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"bd-demo-preview\"><span style=\"display:inline-block;background:#005CE5;color:#FFFFFF;font-family:Proxima Soft,system-ui,sans-serif;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.5px;padding:4px 8px 2px;border-radius:99px;text-align:center;white-space:nowrap;\">Label</span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"bd-demo-state\" onchange=\"updateBadgeDemo()\"><option value=\"Primary\" selected=\"\">Primary</option><option value=\"Brand\">Brand</option><option value=\"Info\">Info</option><option value=\"Success\">Success</option><option value=\"Warning\">Warning</option><option value=\"Danger\">Danger</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Level</span><select class=\"demo-panel-select\" id=\"bd-demo-level\" onchange=\"updateBadgeDemo()\"><option value=\"Heavy\" selected=\"\">Heavy</option><option value=\"Medium\">Medium</option><option value=\"Light\">Light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"bd-demo-type\" onchange=\"updateBadgeDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Voucher\">Voucher</option><option value=\"Transaction\">Transaction</option><option value=\"Dashboard\">Dashboard</option></select></div></div></div></div>",
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "bd-spec-main",
        "demoKey": "main",
        "title": "Badge",
        "node": "18482:28972",
        "description": "A status pill. State and Level set the colour, Type sets the shape — a 48 × 18 pill, a voucher stub, or a 40 × 16 / 34 × 12 rounded tag.",
        "previewHtml": "<div id=\"badge-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": badgeDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Primary",
                "prop": "state"
              },
              {
                "key": "Level",
                "value": "Heavy",
                "prop": "level",
                "variants": {
                  "state:primary": {
                    "value": "Heavy — the only Level"
                  },
                  "state:brand": {
                    "value": "Heavy — the only Level"
                  }
                }
              },
              {
                "key": "Type",
                "value": "Default",
                "prop": "type"
              },
              {
                "key": "Label",
                "value": "Label",
                "prop": "label"
              },
              {
                "key": "Resolved variant",
                "value": "18482:28973 · 48 × 18",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Fill",
                "value": "#005CE5",
                "token": "—",
                "prop": "fill-readout"
              },
              {
                "key": "Label",
                "value": "#FFFFFF",
                "token": "—",
                "prop": "text-readout"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "48 × 18",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Radius",
                "value": "99 — pill",
                "mono": true,
                "variants": {
                  "type:voucher": {
                    "value": "0, with 4 on the bottom right"
                  },
                  "type:transaction": {
                    "value": "4"
                  },
                  "type:dashboard": {
                    "value": "4"
                  }
                }
              },
              {
                "key": "Label alignment",
                "value": "Centred",
                "mono": true,
                "variants": {
                  "type:voucher": {
                    "value": "Left, inset 8"
                  }
                }
              },
              {
                "key": "Padding",
                "value": "8 horizontal",
                "mono": true,
                "variants": {
                  "type:transaction": {
                    "value": "4 horizontal"
                  },
                  "type:dashboard": {
                    "value": "4 horizontal"
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#label",
                "value": "Primary/Label/Fine",
                "mono": true,
                "prop": "style-readout"
              }
            ]
          }
        ],
        "swift": "EBBadge(\"Label\")\n    .ebState(.primary)\n    .ebLevel(.heavy)\n    .ebType(.default)",
        "compose": "EBBadge(\n    label = \"Label\",\n    state = EBBadgeState.Primary,\n    level = EBBadgeLevel.Heavy,\n    type = EBBadgeType.Default\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State and Level",
        "description": "Read off <code>get_node_info</code> across the 68 variants of set <code>18482:28972</code>. Type does not change the colours, only the shape. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Fill",
          "Label"
        ],
        "rows": [
          {
            "role": "Primary · Heavy",
            "token": "—",
            "values": [
              "#005CE5",
              "#FFFFFF"
            ]
          },
          {
            "role": "Brand · Heavy",
            "token": "—",
            "values": [
              "#1972F9",
              "#FFFFFF"
            ]
          },
          {
            "role": "Information · Light",
            "token": "—",
            "values": [
              "#E5F1FF",
              "#005CE5"
            ]
          },
          {
            "role": "Information · Medium",
            "token": "—",
            "values": [
              "#D2E5FF",
              "#005CE5"
            ]
          },
          {
            "role": "Information · Heavy",
            "token": "—",
            "values": [
              "#2340A9",
              "#FFFFFF"
            ]
          },
          {
            "role": "Positive · Light",
            "token": "—",
            "values": [
              "#E7F8F0",
              "#048570"
            ]
          },
          {
            "role": "Positive · Medium",
            "token": "—",
            "values": [
              "#CAF2E0",
              "#048570"
            ]
          },
          {
            "role": "Positive · Heavy",
            "token": "—",
            "values": [
              "#12AF80",
              "#FFFFFF"
            ]
          },
          {
            "role": "Notice · Light",
            "token": "—",
            "values": [
              "#FCF0CA",
              "#966F0B"
            ]
          },
          {
            "role": "Notice · Medium",
            "token": "—",
            "values": [
              "#F7D96E",
              "#966F0B"
            ]
          },
          {
            "role": "Notice · Heavy",
            "token": "—",
            "values": [
              "#CA970C",
              "#FFFFFF"
            ]
          },
          {
            "role": "Negative · Light",
            "token": "—",
            "values": [
              "#F8E6E6",
              "#B50707"
            ]
          },
          {
            "role": "Negative · Medium",
            "token": "—",
            "values": [
              "#F4C7C9",
              "#8D0710"
            ]
          },
          {
            "role": "Negative · Heavy",
            "token": "—",
            "values": [
              "#D61B2C",
              "#FFFFFF"
            ]
          },
          {
            "role": "Muted · Light",
            "token": "—",
            "values": [
              "#C2C5CA",
              "#FFFFFF"
            ]
          },
          {
            "role": "Muted · Medium",
            "token": "—",
            "values": [
              "#9A9FA7",
              "#FFFFFF"
            ]
          },
          {
            "role": "Muted · Heavy",
            "token": "—",
            "values": [
              "#717883",
              "#FFFFFF"
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
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:badge:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.badge.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>18482:28972</code>. <code>State</code> and <code>Level</code> together pick the colour pair; <code>Type</code> picks the shape. Primary and Brand ship <code>Level=Heavy</code> only.",
      "rows": [
        {
          "figma": "State — Primary, Brand, Information, Positive, Notice, Negative, Muted",
          "swift": "<code>.ebState(.primary … .muted)</code>",
          "compose": "<code>state = EBBadgeState.Primary … Muted</code>"
        },
        {
          "figma": "Level — Heavy, Light, Medium",
          "swift": "<code>.ebLevel(.heavy / .light / .medium)</code>",
          "compose": "<code>level = EBBadgeLevel.Heavy / Light / Medium</code>"
        },
        {
          "figma": "Type — Voucher, Transaction, Default, Dashboard",
          "swift": "<code>.ebType(.default … .dashboard)</code>",
          "compose": "<code>type = EBBadgeType.Default … Dashboard</code>"
        },
        {
          "figma": "— <code>#label</code> / <code>#value</code>",
          "swift": "<code>EBBadge(_ label: String)</code>",
          "compose": "<code>label: String</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Badge/EBBadge.swift",
        "compose": "android/components/badge/EBBadge.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default · Primary",
        "swift": "<span class=\"cmt\">// State=Primary, Level=Heavy, Type=Default — 18482:28973, 48 × 18.</span>\nEBBadge(\"New\")\n    .ebState(.primary)\n    .ebLevel(.heavy)",
        "compose": "<span class=\"cmt\">// State=Primary, Level=Heavy, Type=Default — 18482:28973, 48 × 18.</span>\nEBBadge(\n    label = \"New\",\n    state = EBBadgeState.Primary,\n    level = EBBadgeLevel.Heavy\n)"
      },
      {
        "subheading": "Light level",
        "swift": "<span class=\"cmt\">// State=Positive, Level=Light, Type=Default — 18482:28983; #E7F8F0 with #048570 text.</span>\nEBBadge(\"Paid\")\n    .ebState(.positive)\n    .ebLevel(.light)",
        "compose": "<span class=\"cmt\">// State=Positive, Level=Light, Type=Default — 18482:28983; #E7F8F0 with #048570 text.</span>\nEBBadge(\n    label = \"Paid\",\n    state = EBBadgeState.Positive,\n    level = EBBadgeLevel.Light\n)"
      },
      {
        "subheading": "Voucher",
        "swift": "<span class=\"cmt\">// Type=Voucher — 18482:29011; a 48 × 18 stub, square but for a 4 radius on the bottom right, label left-aligned.</span>\nEBBadge(\"50% off\")\n    .ebState(.information)\n    .ebLevel(.light)\n    .ebType(.voucher)",
        "compose": "<span class=\"cmt\">// Type=Voucher — 18482:29011; a 48 × 18 stub, square but for a 4 radius on the bottom right, label left-aligned.</span>\nEBBadge(\n    label = \"50% off\",\n    state = EBBadgeState.Information,\n    level = EBBadgeLevel.Light,\n    type = EBBadgeType.Voucher\n)"
      },
      {
        "subheading": "Dashboard",
        "swift": "<span class=\"cmt\">// Type=Dashboard — 18482:29056; 34 × 12 with a 10pt label, the smallest of the four.</span>\nEBBadge(\"New\")\n    .ebState(.information)\n    .ebLevel(.light)\n    .ebType(.dashboard)",
        "compose": "<span class=\"cmt\">// Type=Dashboard — 18482:29056; 34 × 12 with a 10pt label, the smallest of the four.</span>\nEBBadge(\n    label = \"New\",\n    state = EBBadgeState.Information,\n    level = EBBadgeLevel.Light,\n    type = EBBadgeType.Dashboard\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Read as a value",
        "ios": "A badge beside a label is its value — <code>.accessibilityValue(\"paid\")</code> on the row, not a separate element.",
        "android": "Append it to the row’s <code>stateDescription</code>."
      },
      {
        "requirement": "Never colour alone",
        "ios": "The label carries the meaning; the colour repeats it. Do not ship a badge with no text.",
        "android": "Same."
      },
      {
        "requirement": "Dashboard size",
        "ios": "At 34 × 12 with a 10pt label it is below the recommended minimum text size — use it only where the row already names the status.",
        "android": "Same."
      },
      {
        "requirement": "Not interactive",
        "ios": "A badge is not a control; do not attach a tap to it.",
        "android": "No <code>clickable</code> on the badge itself."
      },
      {
        "requirement": "Contrast",
        "ios": "Most pairs pass: white on #005CE5 5.10:1, #048570 on #E7F8F0 4.74:1, #B50707 on #F8E6E6 7.00:1. Two fail — white on Muted Light #C2C5CA is 2.17:1 and white on Notice Heavy #CA970C 2.45:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Light and Medium inside dense lists, Heavy where the badge must carry.",
        "dontText": "Don’t mix Levels of the same State in one list."
      },
      {
        "doText": "Match Type to where it sits — Dashboard in tiles, Transaction in rows, Voucher on a coupon.",
        "dontText": "Don’t use the Voucher stub outside a voucher; its one-sided radius reads as a torn edge."
      },
      {
        "doText": "Keep the label to one or two words.",
        "dontText": "Don’t put a sentence in a 34 × 12 Dashboard badge."
      },
      {
        "doText": "Use Muted for a neutral or expired status.",
        "dontText": "Don’t use Muted Light for anything a user must read — the white text on it is 2.17:1."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "One text layer per variant, but it is <code>#label</code> on Default and Voucher and <code>#value</code> on Transaction and Dashboard — the same content under two names."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Three PascalCase axes, but <code>State</code> holds intents (Information, Positive) rather than interaction states, and Primary and Brand ship one Level, so 68 of the theoretical 84 combinations exist."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both text layers resolve <code>matched</code> — <code>Primary/Label/Fine</code> and <code>Primary/Label/Tiny</code>. Seventeen colour pairs are hard-coded; no bindings can be read."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Three enums and a label map to one <code>EBBadge</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A static label; badges are not interactive."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons or assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Three axes and one text layer are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 68,
      "description": "<code>State</code> (7) × <code>Level</code> (3) × <code>Type</code> (4) would be 84; 68 are built, because Primary and Brand ship <code>Level=Heavy</code> only — 17 per Type.",
      "columns": [
        "State",
        "Level",
        "Type",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Primary",
            "Heavy",
            "Default",
            "<code>18482:28973</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Brand",
            "Heavy",
            "Default",
            "<code>18482:28975</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Information",
            "Heavy",
            "Default",
            "<code>18482:28981</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Information",
            "Light",
            "Default",
            "<code>18482:28977</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Information",
            "Medium",
            "Default",
            "<code>18482:28979</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Positive",
            "Heavy",
            "Default",
            "<code>18482:28987</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Positive",
            "Light",
            "Default",
            "<code>18482:28983</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Positive",
            "Medium",
            "Default",
            "<code>18482:28985</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Notice",
            "Heavy",
            "Default",
            "<code>18482:28993</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Notice",
            "Light",
            "Default",
            "<code>18482:28989</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Notice",
            "Medium",
            "Default",
            "<code>18482:28991</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Negative",
            "Heavy",
            "Default",
            "<code>18482:28999</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Negative",
            "Light",
            "Default",
            "<code>18482:28995</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Negative",
            "Medium",
            "Default",
            "<code>18482:28997</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Muted",
            "Heavy",
            "Default",
            "<code>18482:29005</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Muted",
            "Light",
            "Default",
            "<code>18482:29001</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Muted",
            "Medium",
            "Default",
            "<code>18482:29003</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Primary",
            "Heavy",
            "Voucher",
            "<code>18482:29007</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Brand",
            "Heavy",
            "Voucher",
            "<code>18482:29009</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Information",
            "Heavy",
            "Voucher",
            "<code>18482:29015</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Information",
            "Light",
            "Voucher",
            "<code>18482:29011</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Information",
            "Medium",
            "Voucher",
            "<code>18482:29013</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Positive",
            "Heavy",
            "Voucher",
            "<code>18482:29021</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Positive",
            "Light",
            "Voucher",
            "<code>18482:29017</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Positive",
            "Medium",
            "Voucher",
            "<code>18482:29019</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Notice",
            "Heavy",
            "Voucher",
            "<code>18482:29027</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Notice",
            "Light",
            "Voucher",
            "<code>18482:29023</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Notice",
            "Medium",
            "Voucher",
            "<code>18482:29025</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Negative",
            "Heavy",
            "Voucher",
            "<code>18482:29033</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Negative",
            "Light",
            "Voucher",
            "<code>18482:29029</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Negative",
            "Medium",
            "Voucher",
            "<code>18482:29031</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Muted",
            "Heavy",
            "Voucher",
            "<code>18482:29039</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Muted",
            "Light",
            "Voucher",
            "<code>18482:29035</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Muted",
            "Medium",
            "Voucher",
            "<code>18482:29037</code>",
            "48 × 18"
          ]
        },
        {
          "cells": [
            "Primary",
            "Heavy",
            "Transaction",
            "<code>18482:29041</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Brand",
            "Heavy",
            "Transaction",
            "<code>18482:29047</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Information",
            "Heavy",
            "Transaction",
            "<code>18482:29065</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Information",
            "Light",
            "Transaction",
            "<code>18482:29053</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Information",
            "Medium",
            "Transaction",
            "<code>18482:29059</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Positive",
            "Heavy",
            "Transaction",
            "<code>18482:29083</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Positive",
            "Light",
            "Transaction",
            "<code>18482:29071</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Positive",
            "Medium",
            "Transaction",
            "<code>18482:29077</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Notice",
            "Heavy",
            "Transaction",
            "<code>18482:29101</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Notice",
            "Light",
            "Transaction",
            "<code>18482:29089</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Notice",
            "Medium",
            "Transaction",
            "<code>18482:29095</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Negative",
            "Heavy",
            "Transaction",
            "<code>18482:29119</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Negative",
            "Light",
            "Transaction",
            "<code>18482:29107</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Negative",
            "Medium",
            "Transaction",
            "<code>18482:29113</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Muted",
            "Heavy",
            "Transaction",
            "<code>18482:29137</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Muted",
            "Light",
            "Transaction",
            "<code>18482:29125</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Muted",
            "Medium",
            "Transaction",
            "<code>18482:29131</code>",
            "40 × 16"
          ]
        },
        {
          "cells": [
            "Primary",
            "Heavy",
            "Dashboard",
            "<code>18482:29044</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Brand",
            "Heavy",
            "Dashboard",
            "<code>18482:29050</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Information",
            "Heavy",
            "Dashboard",
            "<code>18482:29068</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Information",
            "Light",
            "Dashboard",
            "<code>18482:29056</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Information",
            "Medium",
            "Dashboard",
            "<code>18482:29062</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Positive",
            "Heavy",
            "Dashboard",
            "<code>18482:29086</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Positive",
            "Light",
            "Dashboard",
            "<code>18482:29074</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Positive",
            "Medium",
            "Dashboard",
            "<code>18482:29080</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Notice",
            "Heavy",
            "Dashboard",
            "<code>18482:29104</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Notice",
            "Light",
            "Dashboard",
            "<code>18482:29092</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Notice",
            "Medium",
            "Dashboard",
            "<code>18482:29098</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Negative",
            "Heavy",
            "Dashboard",
            "<code>18482:29122</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Negative",
            "Light",
            "Dashboard",
            "<code>18482:29110</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Negative",
            "Medium",
            "Dashboard",
            "<code>18482:29116</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Muted",
            "Heavy",
            "Dashboard",
            "<code>18482:29140</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Muted",
            "Light",
            "Dashboard",
            "<code>18482:29128</code>",
            "34 × 12"
          ]
        },
        {
          "cells": [
            "Muted",
            "Medium",
            "Dashboard",
            "<code>18482:29134</code>",
            "34 × 12"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 18482:28972",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>State</code>, <code>Level</code>, <code>Type</code> and a Label input. The cards on retired nodes are replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Type sets the shape, State and Level the colour.</strong> Default is a 48 × 18 pill, Voucher the same box squared off but for a 4 radius on the bottom right, Transaction 40 × 16 at radius 4 and Dashboard 34 × 12 with a 10pt label.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>All seventeen colour pairs read off the set</strong> — from Primary #005CE5 on white through to Muted Heavy #717883 — and they do not change with Type.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>Primary/Label/Fine</code> at 12 and <code>Primary/Label/Tiny</code> on Dashboard, both matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:badge:2.0.0</code>, a four-row mapping, four snippets and a 68-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Primary and Brand ship one Level.</strong> 68 of the theoretical 84 exist, so the Level control locks to Heavy on those two states. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The text layer has two names</strong> — <code>#label</code> on Default and Voucher, <code>#value</code> on Transaction and Dashboard — for the same content. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Muted Light is not a light tint.</strong> Every other Light is a pale wash with dark text; Muted Light is #C2C5CA with white text at 2.17:1. Notice Heavy is 2.45:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong><code>State</code> holds intents, not interaction states</strong> — Information, Positive, Notice — which reads oddly beside every other component’s <code>State</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the earlier assessment.</strong> <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
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
