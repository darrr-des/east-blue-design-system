import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

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
      "text": "Two text layers, one setting, no wrapper. <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> instances it three times through <code>⤷ TransactionSlot</code>, which is the test a primitive has to pass. The inline layout is built the way it should be — <code>#label</code> fills the slack and <code>#value</code> hugs — so a long label pushes the value rather than clipping it. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
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
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>Layout</code> (enum), <code>#label</code> and <code>#value</code> (text) map one to one with no rename at the boundary.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
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
    "heading": "Layout",
    "description": "Two text layers and one setting. Stacked puts the value under the label with a 4px gap and gives it a multi-line style so long content wraps; Inline puts it to the right on one line, with 5px above and below and no gap — the label fills the slack and the value hugs, so a longer label pushes the value rather than clipping it. Colour and the label's own style are identical in both.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Layout",
        description: "Two text colours and nothing else — the entry paints no surface of its own, so the receipt behind it shows through. Both layouts use the same pair; what changes between them is the arrangement and the value's text style, not the palette.",
        columns: ["Value"],
        rows: [
          { role: "#label", token: "text/color-text-weaker", values: ["#6780A9"] },
          { role: "#value", token: "text/color-text", values: ["#0A2757"] },
          { role: "Background", token: "none — inherits the receipt surface", values: ["—"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "mtre-spec-card-stacked",
        "demoKey": "stacked",
        "demoControls": [],
        "title": "Stacked",
        "node": "5947:181502",
        "description": "",
        "previewHtml": "<div id=\"mtre-spec-stacked\"><div class=\"eb-preview-mtre-shell\"><div class=\"eb-preview-mtre eb-preview-mtre--stacked\"><div class=\"eb-preview-mtre__label\">Label</div><div class=\"eb-preview-mtre__value\">Put content here</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Stacked" },
              { "key": "Shape", "value": "Value under the label, free to wrap onto a second line" },
              { "key": "#label", "value": "Text layer — \"Label\" is placeholder copy" },
              { "key": "#value", "value": "Text layer — \"Put content here\" is placeholder copy" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "#value", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "Background", "value": "None — inherits the receipt surface" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "#value", "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "34 — Hug", "mono": true },
              { "key": "Width", "value": "272", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "4", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put content here\"</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.stacked</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put content here\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "mtre-spec-card-inline",
        "demoKey": "inline",
        "demoControls": [],
        "title": "Inline",
        "node": "5947:181503",
        "description": "",
        "previewHtml": "<div id=\"mtre-spec-inline\"><div class=\"eb-preview-mtre-shell\"><div class=\"eb-preview-mtre eb-preview-mtre--inline\"><div class=\"eb-preview-mtre__label\">Label</div><div class=\"eb-preview-mtre__value\">Put content here</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Inline" },
              { "key": "Shape", "value": "Value to the right on one line — the label fills the slack and the value hugs" },
              { "key": "#label", "value": "Text layer — \"Label\" is placeholder copy" },
              { "key": "#value", "value": "Text layer — \"Put content here\" is placeholder copy" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "#value", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "Background", "value": "None — inherits the receipt surface" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "#value", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "24 — Hug", "mono": true },
              { "key": "Width", "value": "272", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "5", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Left, centred", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put content here\"</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.inline</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put content here\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Inline</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:modal:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>modal<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Modal family: Modal, Modal - Transaction Receipt and this entry all ship in <code>com.eastblue.ds:modal</code> and import <code>com.eastblue.ds.modal.*</code>."
    },
    "propertyMapping": {
      "description": "One property. <code>label</code> and <code>value</code> are the two native parameters with no row here, because <code>#label</code> and <code>#value</code> are text layers rather than component properties — Figma exposes no way to set them but overriding the layer, which is also why Code Connect will have nothing to bind them to. <code>layout</code> is a parameter in both languages rather than a SwiftUI modifier: it decides the arrangement of the two children, not the component's appearance, and the modifier form would have read differently from the Compose signature for no gain.",
      "rows": [
        {
          "figma": "Layout — Stacked, Inline",
          "swift": "<code>layout: EBEntryLayout = .stacked</code>",
          "compose": "<code>layout: EBEntryLayout = Stacked</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Stacked — a value that needs to wrap",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Recipient\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Juan dela Cruz · 0917 123 4567\"</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.stacked</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Recipient\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Juan dela Cruz · 0917 123 4567\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Inline — a value that fits on one line",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Reference no.\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"0091 2345 6789\"</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.inline</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Reference no.\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"0091 2345 6789\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEntryLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Inline</span>\n<span class=\"syn-punc\">)</span>"
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
        "notes": "Two text layers, no wrapper. Both differences between the layouts are confirmed intentional: the missing container, and the fact that <code>#value</code> carries a different text style in each — <code>Primary/Multi-line Label/Light/Small</code> stacked so it can wrap, <code>Primary/Label/Light/Small</code> inline so it stays on one line."
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
        "notes": "Both fills are bound and named: <code>#label</code> on <code>text/color-text-weaker</code> at <code>#6780A9</code>, <code>#value</code> on <code>text/color-text</code> at <code>#0A2757</code>. All four text layers resolve to shared library styles. The entry paints no surface, so the receipt behind it shows through."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A label and a value in a row or a column. Maps to an HStack with a Spacer or a VStack, with no web-only pattern in the way. <code>layout</code> is a parameter rather than a SwiftUI modifier because it arranges the children rather than styling them. The one gap is that neither piece of content is a Figma property — see C7."
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
        "notes": "Blocked — the native library does not exist yet. Worth noting for when it is not: <code>#label</code> and <code>#value</code> are text layers rather than component properties, so there is nothing for Code Connect to bind the entry’s two strings to."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "1 component set × 2 <code>Layout</code> values = 2 variants. Content is set by overriding the two text layers, not through a variant, so nothing multiplies the set.",
      "columns": ["Layout", "Size", "#value text style", "Node"],
      "rows": [
        { "cells": ["Stacked", "272 × 34", "Primary/Multi-line Label/Light/Small", "5947:181502"] },
        { "cells": ["Inline", "272 × 24", "Primary/Label/Light/Small", "5947:181503"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 5947:181504",
      "rows": [
        {
          "body": "<strong>One card became two.</strong> <code>Layout</code> is the driving property, so Stacked and Inline each get a card, in the panel’s order. The single card was titled with the component’s own name and specified Stacked only.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The four spec sections were in the wrong order.</strong> Properties, Colors, <em>Layout, Typography</em>; the order is Properties, Colors, Typography, Layout.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout carried one set of values for two variants that do not share them.</strong> The page said <code>Gap 4, Padding 0</code>, which can only ever have described Stacked. Read off both auto-layout panels: Stacked is 34 tall, gap 4, no padding, top left; Inline is 24 tall, gap 0, 5px above and below, left and centred. The old rows also used <code>#label width</code> and <code>#value width</code> in place of the seven canonical keys.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>#value</code> uses a different text style in each layout.</strong> <code>Primary/Multi-line Label/Light/Small</code> stacked, so long content wraps; <code>Primary/Label/Light/Small</code> inline, so it stays on one line. The page recorded this only as a line-height difference of 16 against 14, which is the consequence rather than the cause. <code>#label</code> is <code>Primary/Label/Light/Small</code> in both.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Typography was two font specs, an IOU and a row that belonged elsewhere.</strong> <code>Proxima Soft SemiBold · 14 / 14 · +0.25</code>, \"shared library style · name pending Dev Mode read\", and an <code>Alignment</code> row that is a Layout key. All four text layers now resolve.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Both fills are named.</strong> <code>#label</code> on <code>text/color-text-weaker</code> at <code>#6780A9</code>, <code>#value</code> on <code>text/color-text</code> at <code>#0A2757</code>, both matching the node fills exactly. A Colors by Layout table carries them, and states that the entry paints no surface of its own.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Both cards declare an empty control panel.</strong> <code>Layout</code> was a control; it is the driving property, so it becomes the cards. Nothing else in the panel is switchable, which leaves the explicit empty array.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Modal family artifact <code>com.eastblue.ds:modal:1.0.0</code> and imports <code>com.eastblue.ds.modal.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping listed three rows for one property.</strong> <code>#label</code> and <code>#value</code> are text layers; the Figma panel exposes only <code>Layout</code>. One row now, with both strings named in the description instead.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Neither piece of content is bindable.</strong> Because <code>#label</code> and <code>#value</code> are layers rather than component properties, Code Connect will have nothing to attach the entry’s two strings to when the native library lands. Recorded against C7, which was already open on registration.",
          "delta": { "kind": "open", "label": "C7 open" }
        },
        {
          "body": "<strong>The two tabs declared different APIs.</strong> The mapping had <code>.ebLayout(.stacked / .inline)</code> — a SwiftUI modifier — against its own Compose column’s <code>layout: EBEntryLayout</code> parameter, while the Style tab used a parameter in both. Settled on the parameter: <code>layout</code> arranges the two children rather than styling the component, so the modifier form would have diverged from Compose for no gain.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The variants table described a consequence, and asserted something unread.</strong> Its <code>#value line-height</code> column read \"16 — wraps\" and \"14 — truncates\". The line-heights follow from the text styles, and the truncation is preview CSS rather than anything Figma states. The column now carries the two resolved style names.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>A snippet claimed a default that could not be read.</strong> \"Inline — short values (receipt default)\"; the property panel lists Stacked first, so naming Inline the default was a guess. The two snippets are now keyed plainly to the values and ordered to match the panel and the cards.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three scorecard notes were stale or vague.</strong> C1 described \"the line-height difference between layouts\" and now names both text styles; C3 said the fills \"resolve to library variables\" without naming them and now carries both tokens and hexes; C4 gained the reasoning for <code>layout</code> being a parameter rather than a modifier.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>DEV code is live for the first time, and Code Connect is emptied.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
