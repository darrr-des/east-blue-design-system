import type { ComponentData } from '../types';

export const genericTransactionCard: ComponentData = {
  "meta": {
    "slug": "generic-transaction-card",
    "name": "Generic Transaction Card",
    "node": "18482:35753",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-35753",
    "description": "A transaction-summary card with merchant info, amount, date, and tappable detail surface.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Card",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — type enum hides 5 different layouts",
      "text": "The five <code>type</code> values are visually distinct layouts, not variants of the same pattern. Replace the enum with slot-based composition (<code>leadingMedia?</code>, <code>badge?</code>, <code>trailing = amount | menu | reference</code>, <code>loading</code>). Same fix pattern as Alert's <code>Full Width</code>. Also align heading weight with Generic Card (both should use Bold, not Semibold)."
    }
  },
  "overview": {
    "inContextNote": "Transaction-history rows stack vertically in the Activity / Transactions screen. Different rows use different variants depending on the context (recipient avatar, reference number, action menu).",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"gtx-demo-preview\"><div class=\"eb-preview eb-preview-gtx\"><div class=\"eb-preview-gtx__content\"><p class=\"eb-preview-gtx__label\">Juan Dela Cruz</p><div class=\"eb-preview-gtx__meta-row\"><span class=\"eb-preview-gtx__badge\">Sent</span><span class=\"eb-preview-gtx__meta\">Apr 14, 2026, 10:24 AM</span></div></div><div class=\"eb-preview-gtx__trailing\"><span class=\"eb-preview-gtx__amount\">PHP 1,500.00</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"gtx-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Juan Dela Cruz\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"gtx-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Sent\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">date / meta</span><input type=\"text\" id=\"gtx-ctrl-date\" class=\"demo-panel-select demo-panel-input\" value=\"Apr 14, 2026, 10:24 AM\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">amount</span><input type=\"text\" id=\"gtx-ctrl-amount\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 1,500.00\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">reference</span><input type=\"text\" id=\"gtx-ctrl-ref\" class=\"demo-panel-select demo-panel-input\" value=\"GC123456789876543\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">avatar initials</span><input type=\"text\" id=\"gtx-ctrl-initials\" class=\"demo-panel-select demo-panel-input\" value=\"JD\" oninput=\"_gtxUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"gtx-ctrl-type\" class=\"demo-panel-select\" onchange=\"_gtxUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"more-information\">more information</option><option value=\"with-avatar\">with avatar</option><option value=\"no-amount\">no amount</option><option value=\"skeleton\">skeleton loader</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Solid transaction-row primitive — covers the main patterns seen in Activity screens."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns tokens, composes Avatar + Badge correctly. Good structure internally."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "5 structurally different layouts hidden behind one <code>type</code> enum. Heading uses Semibold 600 while Generic Card uses Bold 700 — inconsistent across the card family."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Today consumers must pick a <code>type</code> and live with its fixed slot composition. A slot-based API would let them mix freely (e.g. avatar + reference)."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type=default",
        "notes": "Label + badge + date + amount. The baseline transaction row."
      },
      {
        "state": "With avatar",
        "ios": "yes",
        "android": "yes",
        "property": "type=with avatar",
        "notes": "Adds a 32 × 32 Avatar at the leading edge. Used for person-to-person transactions."
      },
      {
        "state": "More information",
        "ios": "yes",
        "android": "yes",
        "property": "type=more information",
        "notes": "Replaces the badge with an overflow menu button (⋯). Used when a row has context-menu actions."
      },
      {
        "state": "No amount",
        "ios": "yes",
        "android": "yes",
        "property": "type=no amount",
        "notes": "Swaps the amount for a trailing badge; swaps date for a reference number. Used for confirmations without monetary value."
      },
      {
        "state": "Skeleton loader",
        "ios": "yes",
        "android": "yes",
        "property": "type=skeleton loader",
        "notes": "Loading placeholder pattern. Worth documenting alongside Generic Card's skeleton as a DS-wide convention."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Rows typically drill into transaction detail — need pressed tint for tap feedback."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "<code>type</code> enum hides 5 structurally different layouts.",
        "body": "Same anti-pattern as Alert's <code>Full Width</code> boolean. <code>default</code> / <code>more information</code> / <code>with avatar</code> / <code>no amount</code> are not variants of one pattern — they're four different slot compositions. Replace with a slot-based API (<code>leadingMedia</code>, <code>badge</code>, <code>trailing</code>, <code>loading</code>).",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>no amount</code> and <code>more information</code> describe absence, not role.",
        "body": "Value names should describe what the variant IS, not what it lacks. <code>no amount</code> becomes \"swap amount for a trailing badge\"; <code>more information</code> becomes \"show action menu.\" Once slot-based, the enum disappears entirely.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Heading uses Semibold (600) while Generic Card uses Bold (700).",
        "body": "Inconsistent title weight across the card family. Standardize — either both Bold or both Semibold.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No pressed / disabled states.",
        "body": "Transaction rows drill into a detail screen on tap — need pressed tint. Also disabled state for pending/failed transactions that can't be reopened.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on the slot restructure.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Replace <code>type</code> with slot-based props.",
        "body": "<code>leadingMedia?: Avatar | Icon | none</code>, <code>badge?: Badge</code>, <code>metadata: String</code>, <code>trailing: amount | menu | badge | reference</code>, <code>loading: Bool</code>. Eliminates the 5-type union and lets consumers compose any valid row without editing the master.",
        "tag": "Property"
      },
      {
        "headline": "Align heading weight with Generic Card.",
        "body": "Pick one (Bold 700 is more common across the DS) and apply it to both components. Card family should read as one system, not two dialects.",
        "tag": "Family"
      },
      {
        "headline": "Promote skeleton to a cross-family convention.",
        "body": "Generic Card + Generic Transaction Card both ship skeletons — document the pattern (<code>#E0E6F2</code> fill, rounded rect placeholders, no spinner) as the DS loading standard so future card/row primitives follow the same treatment.",
        "tag": "Docs"
      },
      {
        "headline": "Add pressed + disabled states.",
        "body": "Pressed: subtle bg tint across the whole row. Disabled: muted label + amount opacity.",
        "tag": "State"
      },
      {
        "headline": "Reconcile with Generic Card.",
        "body": "The two share ~80 % of the \"row with leading / trailing / meta\" shape. Consider a shared <code>EBRow</code> primitive with variants for \"with subtitle\" (Generic Card) and \"with metadata + amount\" (Generic Transaction Card).",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-—-label-+-badge-+-date-+-amount",
        "title": "Default — label + badge + date + amount",
        "node": "18482:35754",
        "description": "The baseline transaction row. Leading label, mid-row badge + date metadata, trailing amount. 78 px tall.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gtx-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Label + badge + date + amount",
                "mono": false
              },
              {
                "key": "Layout",
                "value": "avatar-leading + meta-right",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "card-list/color/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "card-list/color/border",
                "mono": true
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title token",
                "value": "card-list/color/label-header",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "card-list/color/label-amount",
                "mono": true
              },
              {
                "key": "Metadata",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Metadata token",
                "value": "card-list/color/label-metadata",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "card-list/color/icon",
                "mono": true
              },
              {
                "key": "Badge bg",
                "value": "#E5F1FF",
                "mono": true
              },
              {
                "key": "Badge bg token",
                "value": "badge/information/light/background",
                "mono": true
              },
              {
                "key": "Badge label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Badge label token",
                "value": "badge/information/light/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "360",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 24 18 22",
                "mono": true
              },
              {
                "key": "Content gap",
                "value": "6",
                "mono": true
              },
              {
                "key": "Meta-row gap",
                "value": "8",
                "mono": true
              },
              {
                "key": "Bottom border",
                "value": "1 px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label (title)",
                "value": "HeyMeow Rnd Semibold · 18 / 18 · +0.25",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "HeyMeow Rnd Semibold · 18 / 18 · +0.25",
                "mono": true
              },
              {
                "key": "Metadata (date)",
                "value": "BarkAda Semibold · 12 / 18 · +0",
                "mono": true
              },
              {
                "key": "Badge label",
                "value": "HeyMeow Rnd Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          },
          {
            "label": "Composed sub-components",
            "rows": [
              {
                "key": "Badge",
                "value": "Badge · Information · Light",
                "mono": true
              },
              {
                "key": "Avatar (in \"with avatar\")",
                "value": "Avatar · dark-initials · 32 px",
                "mono": true
              },
              {
                "key": "Heading weight",
                "value": "Uses Semibold 600 — inconsistent with Generic Card's Bold 700 (flagged)",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionCard</span><span class=\"syn-punc\">(</span>transaction<span class=\"syn-punc\">: </span>item<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Pending\"</span><span class=\"syn-punc\">, </span>intent<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.information</span><span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBTransactionCard</span><span class=\"syn-punc\">(</span>\n    transaction <span class=\"syn-eq\">=</span> item<span class=\"syn-punc\">,</span>\n    badge <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Pending\"</span><span class=\"syn-punc\">, </span><span class=\"syn-type\">EBBadgeIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Information</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-avatar",
        "title": "With avatar",
        "node": "18482:35776",
        "description": "Adds a 32 × 32 Avatar at the leading edge (instance-swapped from the Avatar component). Used for person-to-person transactions.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gtx-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Leading slot",
                "value": "Avatar",
                "mono": true
              },
              {
                "key": "Has badge",
                "value": "Yes",
                "mono": true
              },
              {
                "key": "Has amount",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/transaction-card/bg",
                "mono": true
              },
              {
                "key": "Title color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title color token",
                "value": "main/transaction-card/title",
                "mono": true
              },
              {
                "key": "Date color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Date color token",
                "value": "main/transaction-card/date",
                "mono": true
              },
              {
                "key": "Amount color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount color token",
                "value": "main/transaction-card/amount",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Min height",
                "value": "72",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12",
                "mono": true
              },
              {
                "key": "Avatar size",
                "value": "40 × 40",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Body/Medium · Bold",
                "mono": true
              },
              {
                "key": "Date style",
                "value": "Caption/Regular",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Body/Medium · Bold",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Juan Dela Cruz\"</span><span class=\"syn-punc\">,</span>\n    date<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Today, 3:24 PM\"</span><span class=\"syn-punc\">,</span>\n    amount<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"₱500.00\"</span><span class=\"syn-punc\">,</span>\n    leading<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>avatar<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"JD\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Juan Dela Cruz\"</span><span class=\"syn-punc\">,</span>\n    date <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Today, 3:24 PM\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱500.00\"</span><span class=\"syn-punc\">,</span>\n    leading <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>initials <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"JD\"</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "no-amount",
        "title": "No amount",
        "node": "18482:35789",
        "description": "Used for non-monetary confirmations (KYC acknowledgments, voucher redemptions). Swaps amount for a trailing badge and the date row for a reference number.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gtx-spec-3\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Leading slot",
                "value": "Icon",
                "mono": true
              },
              {
                "key": "Has badge",
                "value": "No",
                "mono": true
              },
              {
                "key": "Has amount",
                "value": "No",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/transaction-card/bg",
                "mono": true
              },
              {
                "key": "Title color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title color token",
                "value": "main/transaction-card/title",
                "mono": true
              },
              {
                "key": "Date color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Date color token",
                "value": "main/transaction-card/date",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Min height",
                "value": "72",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Body/Medium · Bold",
                "mono": true
              },
              {
                "key": "Date style",
                "value": "Caption/Regular",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Profile updated\"</span><span class=\"syn-punc\">,</span>\n    date<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Yesterday, 9:01 AM\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Profile updated\"</span><span class=\"syn-punc\">,</span>\n    date <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Yesterday, 9:01 AM\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(hardcoded)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "(hardcoded)",
          "swift": "<code>metadata?: String</code>",
          "compose": "<code>metadata: String?</code>"
        },
        {
          "figma": "<code>type=with avatar</code>",
          "swift": "<code>leadingMedia?: Avatar</code> (slot)",
          "compose": "<code>leadingMedia: EBAvatar?</code>"
        },
        {
          "figma": "(drawn)",
          "swift": "<code>badge?: Badge</code> (slot)",
          "compose": "<code>badge: EBBadge?</code>"
        },
        {
          "figma": "<code>type=default/with avatar</code>",
          "swift": "<code>trailing = .amount(String)</code>",
          "compose": "<code>trailing: EBRowTrailing</code>"
        },
        {
          "figma": "<code>type=more information</code>",
          "swift": "<code>trailing = .menu(() -&gt; Void)</code>",
          "compose": "同上"
        },
        {
          "figma": "<code>type=no amount</code>",
          "swift": "<code>trailing = .badge(Badge)</code> + <code>metadata = reference</code>",
          "compose": "同上"
        },
        {
          "figma": "<code>type=skeleton loader</code>",
          "swift": "<code>loading: Bool</code>",
          "compose": "<code>loading: Bool</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap?: () -&gt; Void</code>",
          "compose": "<code>onTap: (() -&gt; Void)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Row as button",
        "ios": "Whole row in <code>Button</code> with combined label (person + amount + date).",
        "android": "<code>Modifier.clickable { onTap() }.semantics(mergeDescendants = true)</code>."
      },
      {
        "requirement": "Currency announcement",
        "ios": "\"Juan Dela Cruz, Sent, 1,500 pesos, April 14 10:24 AM\" — use localized currency formatter, not raw \"PHP 1,500.00\".",
        "android": "Same — announce via <code>contentDescription</code> with currency formatter applied."
      },
      {
        "requirement": "Reference number",
        "ios": "Spell out long reference numbers for clarity: \"GC 1 2 3 4...\" — avoid run-together digits.",
        "android": "Same."
      },
      {
        "requirement": "Loading",
        "ios": "Announce \"Loading transactions\" once on mount.",
        "android": "<code>contentDescription = \"Loading\"</code> on skeleton container."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>type</code> enum hides 5 layouts — restructure to slot-based."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Absence-based value names; heading weight inconsistent with Generic Card."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Colors bound to <code>main/card-list/color/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly once slots replace the type enum."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No pressed / disabled. Skeleton ✓."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Avatar + Badge composed correctly as instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on restructure."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 5,
      "description": "<code>type</code> is a single enum with 5 values, each a structurally different layout.",
      "columns": [
        "#",
        "Node",
        "type",
        "Layout",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18482:35754</code>",
            "default",
            "label · badge · date · amount",
            "360 × 78"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18482:35765</code>",
            "more information",
            "label · date · amount · menu (⋯)",
            "360 × 76"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18482:35776</code>",
            "with avatar",
            "avatar · label · badge · date · amount",
            "360 × 84"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18482:35789</code>",
            "no amount",
            "label · reference · trailing badge",
            "360 × 76"
          ]
        },
        {
          "cells": [
            "5",
            "<code>18482:35797</code>",
            "skeleton loader",
            "loading placeholders",
            "360 × 81"
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
      "header": "Initial Assessment · node 18482:35753",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Replace <code>type</code> enum (5 layouts) with slot-based composition. Align heading weight with Generic Card. Add pressed state. <span class=\"tag-open tag-c1 tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Type enum hides layouts</strong> — Same anti-pattern as Alert's <code>Full Width</code>. Split into <code>leadingMedia</code>, <code>badge</code>, <code>trailing</code>, <code>loading</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Absence-based names</strong> — <code>no amount</code> / <code>more information</code> describe what's missing. Semantic slot names replace them. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C2 — Heading weight inconsistency</strong> — Semibold 600 vs Generic Card's Bold 700. Standardize across card family. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — Pressed state</strong> — Transaction rows drill into detail on tap; needs tap feedback. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Skeleton pattern ✓</strong> — First-class loading variant, matches Generic Card. Adopt as DS-wide convention. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on restructure. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
