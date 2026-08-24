import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. */
const entryControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Layout',
        prop: 'layout',
        options: [
          { value: 'stacked', label: 'Stacked' },
          { value: 'inline', label: 'Inline' }
        ],
        defaultValue: 'stacked'
      }
    ]
  }
];

export const modalTransactionReceiptEntry: ComponentData = {
  "meta": {
    "slug": "modal-transaction-receipt-entry",
    "name": "Modal - Transaction Receipt Entry",
    "node": "5947:181504",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5947-181504",
    "description": "One label-and-value row inside a transaction receipt. Two layouts: stacked when the value runs long, inline when it is short.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Modal",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the smallest piece of the receipt, and it behaves like one",
      "text": "Two text layers, one setting, no wrapper. <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> instances it three times through <code>⤷ TransactionSlot</code>, which is the test a primitive has to pass. The inline layout is built the way it should be — <code>#label</code> fills the slack and <code>#value</code> hugs — so a long label pushes the value rather than clipping it. Nothing is outstanding."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"mtre-demo-preview\"><div class=\"eb-preview-mtre-shell\"><div class=\"eb-preview-mtre eb-preview-mtre--stacked\"><div class=\"eb-preview-mtre__label\">Label</div><div class=\"eb-preview-mtre__value\">Put content here</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Layout</span><select id=\"mtre-ctrl-layout\" class=\"demo-panel-select\" onchange=\"_mtreUpdate()\"><option value=\"stacked\" selected=\"\">Stacked</option><option value=\"inline\">Inline</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#label</span><input type=\"text\" id=\"mtre-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_mtreUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#value</span><input type=\"text\" id=\"mtre-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"Put content here\" oninput=\"_mtreUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Nothing in it is receipt-specific — it is a label and a value. Any surface that lists paired data can drop it in, and the two layouts cover both the short-value and long-value cases."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own type styles and colours, both bound to library variables. It deliberately carries no padding, because the slot it sits in owns the spacing between rows."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Layout = Stacked | Inline</code> matches <a href=\"/components/countdown\">Countdown - Unit</a>, which uses the same property name for the same idea. <code>#label</code> and <code>#value</code> come from the design system's form vocabulary rather than being invented here."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built to be instanced. <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> stacks three of them inside <code>⤷ TransactionSlot</code>, and the renames made during this assessment propagated straight through to all three."
      }
    ],
    "behavior": [
      {
        "state": "Layout=Stacked",
        "ios": "na",
        "android": "na",
        "property": "272 × 34",
        "notes": "Label above value, both left-aligned and full width. The value's 16px line-height gives it room to wrap onto a second line."
      },
      {
        "state": "Layout=Inline",
        "ios": "na",
        "android": "na",
        "property": "272 × 24",
        "notes": "Label left, value right, one line each at 14/14. The value truncates rather than wraps — this is the default the receipt uses."
      },
      {
        "state": "Long label",
        "ios": "na",
        "android": "na",
        "property": "fill / hug",
        "notes": "Inline only. <code>#label</code> takes the slack at 164 and <code>#value</code> hugs at 108, so a longer label pushes the value instead of overlapping it."
      }
    ],
    "resolved": [
      {
        "headline": "The layout setting is named the way the rest of the system names it.",
        "body": "It was <code>Orientation = Inline | Stacked</code>, which collided twice over: <a href=\"/components/countdown\">Countdown - Unit</a> already used <code>Layout</code> for these exact values, and <a href=\"/components/voucher-details\">Voucher</a> already used <code>Orientation</code> to mean Vertical or Horizontal. Now <code>Layout = Stacked | Inline</code>. The property name becomes the native parameter, so this was worth settling before Code Connect.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The text layers say what they hold.",
        "body": "<code>#name</code> and <code>#text</code> became <code>#label</code> and <code>#value</code>, matching the form vocabulary used elsewhere in the design system. The rename propagated to all three instances inside the receipt's slot.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The line-height difference between layouts is deliberate.",
        "body": "<code>#value</code> is 14/16 stacked but 14/14 inline, while <code>#label</code> stays 14/14 in both. Confirmed as intended rather than drift: the stacked layout exists for values that wrap onto a second line and needs the extra leading, and the inline value is a single truncating line that does not.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Having no container is deliberate.",
        "body": "Both layouts are bare text layers directly under the component, where most components in the system wrap in a <code>Container</code>. Confirmed as intended: <code>⤷ TransactionSlot</code> owns the gap between rows, so a container here would only add a level and a second place to set spacing.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Write down what the inline value does when it overflows.",
        "body": "Inline gives the value 108px and one line. Whether a long reference number truncates at the tail, truncates in the middle, or forces the row to stacked is a decision the native implementation has to make, and it is not visible from the component. Middle truncation is usually right for identifiers, tail truncation for everything else.",
        "tag": "Docs"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "Both fills resolve to library variables — verified on the component's own text nodes — but the read-only tools return variable IDs rather than names, so the spec tables carry hex values only. A single Dev Mode pass would let the token paths be printed alongside them.",
        "tag": "Token"
      },
      {
        "headline": "Read the pair as one thing for assistive tech.",
        "body": "A screen reader stepping through the receipt should hear \"Reference number, 165A25912345\" as a single utterance rather than two disconnected fragments. Group the label and value and expose the label as the accessibility label of the value.",
        "tag": "A11y"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> is the only consumer today, holding three of these in <code>⤷ TransactionSlot</code>. <a href=\"/components/modal\">Modal</a> is the third component in the family and does not use this row.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "mtre-spec-card-default",
        "demoKey": "default",
        "demoControls": entryControls,
        "title": "Modal - Transaction Receipt Entry",
        "node": "5947:181504",
        "description": "Two layouts of the same pair. Stacked reserves room for a wrapping value; inline puts the value on the right and truncates it.",
        "previewHtml": "<div id=\"mtre-spec-default\"><div class=\"eb-preview-mtre-shell\"><div class=\"eb-preview-mtre eb-preview-mtre--stacked\"><div class=\"eb-preview-mtre__label\">Label</div><div class=\"eb-preview-mtre__value\">Put content here</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Stacked", "prop": "layout",
                "variants": {
                  "layout:inline": { "value": "Inline" }
                }
              },
              { "key": "#label", "value": "Label" },
              { "key": "#value", "value": "Put content here" },
              { "key": "Container", "value": "none — the slot owns spacing" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#6780A9", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "#value", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Background", "value": "none — inherits the receipt surface", "token": "–" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "272", "mono": true },
              { "key": "Height", "value": "34", "mono": true,
                "variants": {
                  "layout:inline": { "value": "24" }
                }
              },
              { "key": "#label width", "value": "272 (fill)", "mono": true,
                "variants": {
                  "layout:inline": { "value": "164 (fill)" }
                }
              },
              { "key": "#value width", "value": "272 (fill)", "mono": true,
                "variants": {
                  "layout:inline": { "value": "108 (hug)" }
                }
              },
              { "key": "Gap", "value": "4", "mono": true,
                "variants": {
                  "layout:inline": { "value": "0 — fill and hug meet" }
                }
              },
              { "key": "Padding", "value": "0", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "shared library style · name pending Dev Mode read", "mono": true },
              { "key": "#label", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true },
              { "key": "#value", "value": "Proxima Soft SemiBold · 14 / 16 · +0.25", "mono": true,
                "variants": {
                  "layout:inline": { "value": "Proxima Soft SemiBold · 14 / 14 · +0.25" }
                }
              },
              { "key": "Alignment", "value": "both left", "mono": true,
                "variants": {
                  "layout:inline": { "value": "label left · value right" }
                }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Reference Number\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"165A25912345\"</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebLayout</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.stacked</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Reference Number\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"165A25912345\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/gcash/east-blue-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Gradle",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.gcash.eastblue:components:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        {
          "figma": "Layout",
          "swift": ".ebLayout(.stacked / .inline)",
          "compose": "layout: EBEntryLayout"
        },
        {
          "figma": "#label",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "#value",
          "swift": "value: String",
          "compose": "value: String"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Inline — short values (receipt default)",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span> value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebLayout</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.inline</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Inline</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Stacked — values that wrap",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Send to\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Juan dela Cruz · +63 917 000 0000\"</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebLayout</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.stacked</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Send to\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Juan dela Cruz · +63 917 000 0000\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label and value read as one unit",
        "ios": "<code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code>"
      },
      {
        "requirement": "Label is not announced as a separate control",
        "ios": "No traits added — it is static text",
        "android": "No <code>role</code> assigned"
      },
      {
        "requirement": "Truncated inline values stay reachable",
        "ios": "Full value in <code>accessibilityValue</code>, not the truncated string",
        "android": "Full value in <code>contentDescription</code>"
      },
      {
        "requirement": "Layout follows the text size setting",
        "ios": "Switch to stacked when Dynamic Type would truncate the inline value",
        "android": "Switch to stacked at large font scales"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use inline for short, scannable values — amounts, dates, reference numbers.",
        "dontText": "Don't use inline for names or addresses that will truncate at 108px."
      },
      {
        "doText": "Let the label take the slack so a longer label pushes the value.",
        "dontText": "Don't set a fixed width on the label to force a column — it clips the moment the copy changes."
      },
      {
        "doText": "Keep spacing between rows on the slot that holds them.",
        "dontText": "Don't add padding inside the row; it will double up with the slot's gap."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two text layers, no wrapper. The missing container and the line-height difference between layouts are both confirmed intentional."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Layout = Stacked | Inline</code> matches Countdown - Unit. <code>#label</code> and <code>#value</code> come from the form vocabulary."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Both fills resolve to library variables and the text carries a shared library text style — verified on the component's own nodes. Names need a Dev Mode read before they can be printed in the spec tables."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A label and a value in a row or a column. Maps to an HStack/Row with a Spacer, or a VStack/Column, with no web-only pattern in the way."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display only — the row is not tappable. In the receipt, the tap target belongs to the copy control on the reference row."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons or assets — text only."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Layout</code> (enum), <code>#label</code> and <code>#value</code> (text) map one to one with no rename needed at the boundary."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fills are variable-bound; only the human-readable names are outstanding."
      },
      {
        "aspect": "Registration",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the native library exists."
      }
    ],
    "variants": {
      "total": 2,
      "description": "1 component set × 2 Layout values = 2 variants. Content is set through the two text layers, not through a variant.",
      "columns": ["Layout", "Size", "#value line-height", "Node"],
      "rows": [
        { "cells": ["Stacked", "272 × 34", "16 — wraps", "5947:181502"] },
        { "cells": ["Inline", "272 × 24", "14 — truncates", "5947:181503"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "First assessment · node 5947:181504",
      "rows": [
        {
          "body": "New component. Extracted as the row primitive when the old Modal was split into <a href=\"/components/modal\">Modal</a> and <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a>.",
          "delta": { "kind": "added", "label": "Added" }
        },
        {
          "body": "<code>Orientation</code> renamed to <code>Layout</code>, matching Countdown - Unit, which already used that name for the same Stacked and Inline values.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<code>#name</code> and <code>#text</code> renamed to <code>#label</code> and <code>#value</code>; the rename propagated to all three instances in the receipt's slot.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "The 14/16 line-height on the stacked value confirmed intentional — stacked wraps, inline truncates.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Having no <code>Container</code> confirmed intentional — <code>⤷ TransactionSlot</code> owns the spacing between rows.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Renamed from <code>Transaction Entry</code> to <code>Modal - Transaction Receipt Entry</code> to place it in the Modal family.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        }
      ]
    }
  ]
};
