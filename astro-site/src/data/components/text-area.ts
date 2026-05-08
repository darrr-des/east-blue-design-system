import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/text-area.js`.
const textAreaDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'isFilled',
        prop: 'filled',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'isExpandable',
        prop: 'expandable',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
    ],
  },
];

export const textArea: ComponentData = {
  "meta": {
    "slug": "text-area",
    "name": "Text Area",
    "node": "3070:21245",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=3070-21245",
    "description": "A multi-line text input for longer-form entry — label, body, and character counter.",
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
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate into Input Field",
      "text": "Text Area duplicates Input Field's State × isFilled schema with identical tokens (renamed under <code>main/text-area/*</code>). SwiftUI exposes multi-line via <code>axis: .vertical</code> on <code>TextField</code>; Compose exposes it via <code>singleLine=false</code>. Fold into Input Field with a <code>multiline</code> / <code>lineLimit</code> prop so the DS maps 1:1 to the native primitive."
    }
  },
  "overview": {
    "inContextNote": "Typical mobile contexts: feedback forms, message composers, notes, support request descriptions.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"16\" width=\"80\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"20\" y=\"30\" width=\"80\" height=\"32\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"24\" y=\"35\" width=\"60\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"24\" y=\"41\" width=\"55\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"24\" y=\"47\" width=\"40\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"66\" width=\"80\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ta-demo-preview\"><svg width=\"328\" height=\"62\" viewBox=\"0 0 328 62\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"327\" height=\"61\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"36\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><path d=\"M314 56L322 48M318 56L322 52\" stroke=\"#90A8D0\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" onchange=\"_taDemo.state=this.value;updateTextAreaDemo()\"><option value=\"default\">default</option><option value=\"active\">active</option><option value=\"error\">error</option><option value=\"disabled\">disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_taDemo.filled=this.value;updateTextAreaDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isExpandable</span><select class=\"demo-panel-select\" onchange=\"_taDemo.expandable=this.value;updateTextAreaDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Works anywhere multi-line text is needed, but duplicates Input Field's State × isFilled schema. Reuse is better served by extending Input Field with a <code>multiline</code> flag than by shipping a parallel component."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Carries its own border, fill, and text styles per state. No <code>label</code> slot, no <code>helperText</code>/error-message slot, no <code>characterCount</code> slot — validation and labeling are pushed onto every consuming screen."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>isFilled=yes/no</code> (C2, same anti-pattern Input Field already fixed). <code>state=active</code> instead of <code>focused</code> matches Input Field but diverges from the broader DS verb set. Tokens duplicated under <code>main/text-area/*</code> with identical values to <code>main/input-field/*</code>."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Nests in form layouts, but has no sibling wrapper (no Labeled Text Area) and no slot contract for icons or character count. The <code>expand-icon</code> frame holds a fixed raster glyph rather than a swappable node."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "state=default",
        "notes": "1px #D7E0EF border, white bg. Resize glyph shown."
      },
      {
        "state": "Active (Focused)",
        "ios": "yes",
        "android": "yes",
        "property": "state=active",
        "notes": "2px #005CE5 border. Should rename to <code>focused</code> to match platform vocabulary."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "state=error",
        "notes": "2px #D61B2C border. No inline error-message slot."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "state=disabled",
        "notes": "#EEF2F9 bg, border hidden, text #C2CFE5."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Boolean property uses Yes/No.",
        "body": "<code>isFilled=yes/no</code> cannot map to Swift <code>Bool</code> or Kotlin <code>Boolean</code> without a translation layer. Input Field already fixed this — Text Area should follow.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Desktop resize-handle glyph baked into a mobile component.",
        "body": "The <code>text-area icon</code> (12×12px, bottom-right) mirrors the browser-only <code>resize: both</code> affordance. Native <code>TextField(axis: .vertical)</code> / <code>OutlinedTextField(maxLines = n)</code> auto-grow without a user-facing handle — the glyph has no native equivalent and should not ship in mobile variants.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Resize handle is a raster PNG, once per state.",
        "body": "Four separate PNG assets are referenced for the same 12×12px glyph. Even if the handle survives, it should be a single vector instance tinted by <code>main/text-area/color/&#123;state&#125;/icon-resizer</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No <code>label</code> or <code>helperText</code> slot.",
        "body": "Labels and validation messages are handled by the consumer, so every screen re-implements the anatomy. Native multi-line text fields expose both as first-class parameters.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No <code>characterCount</code> / limit affordance.",
        "body": "Multi-line entry is the canonical use case for character limits (comments, reviews, message composers). There is no count slot and no <code>maxLength</code> hook — the DS cannot represent limit state today.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Tokens duplicated under <code>main/text-area/*</code>.",
        "body": "Every value in <code>main/text-area/color/*</code> mirrors <code>main/input-field/color/*</code> exactly. If Text Area folds into Input Field, this namespace collapses; if it stays, the two token sets should alias a shared <code>main/field/*</code> collection to prevent drift.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked by property naming and the multi-line-vs-Input Field decision. Cannot register until the family shape is finalized.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Fold Text Area into Input Field as a <code>multiline</code> / <code>lineLimit</code> prop.",
        "body": "SwiftUI models this as <code>TextField(text:, axis: .vertical).lineLimit(3...6)</code>; Compose models it as <code>OutlinedTextField(singleLine = false, maxLines = 6)</code>. Both are the same primitive with a single flag. Mirroring that in Figma collapses 8 variants into 0 net new variants on Input Field (add a <code>multiline</code> boolean to the existing 8-variant matrix) and removes the duplicated token namespace.",
        "tag": "Family"
      },
      {
        "headline": "Rename <code>isFilled</code> to use <code>true/false</code>.",
        "body": "Same fix Input Field already shipped in 1.1.0. Required for Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping.",
        "tag": "Rename"
      },
      {
        "headline": "Rename <code>state=active</code> to <code>state=focused</code>.",
        "body": "Matches SwiftUI <code>@FocusState</code> and Compose <code>FocusRequester</code> vocabulary. Apply to Input Field and the whole Form Elements family at once so the rename lands once.",
        "tag": "Rename"
      },
      {
        "headline": "Drop the desktop resize handle on mobile variants.",
        "body": "If Text Area survives as a sibling, remove the <code>expand-icon</code> frame — it has no native equivalent on iOS/Android. Keep it only if a web/desktop DS variant is in scope, gated behind a platform axis.",
        "tag": "Asset"
      },
      {
        "headline": "Add a <code>helperText</code> slot and a <code>characterCount</code> slot beneath the field.",
        "body": "Multi-line is the canonical character-count surface. Expose a supporting-text row that can host either error copy, hint copy, or a count — matching Material 3's <code>supportingText</code> / <code>counter</code> pattern. If Text Area folds into Input Field, this slot lives on Input Field and serves both single- and multi-line.",
        "tag": "Slot"
      },
      {
        "headline": "Alias <code>main/text-area/*</code> to a shared <code>main/field/*</code> collection.",
        "body": "If the family stays split for any reason, the two token sets must reference a single source so border/bg/placeholder/disabled colors never drift. Preferable outcome: delete <code>main/text-area/*</code> outright after consolidation.",
        "tag": "Token"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "ta-spec-default",
        "demoKey": "default",
        "demoControls": textAreaDemoControls,
        "title": "Default",
        "node": "3070:21242",
        "description": "Idle state with gray border. Resize-handle glyph sits in the bottom-right regardless of fill.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "isFilled",
                "value": "no",
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "isExpandable",
                "value": "true",
                "mono": false,
                "prop": "expandable"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Min height",
                "value": "120px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Resize",
                "value": "vertical, snap to line height",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$note<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebMinLines</span><span class=\"syn-punc\">(</span>5<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> note<span class=\"syn-punc\">,</span>\n    minLines <span class=\"syn-eq\">=</span> 5<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-default-preview\"><svg width=\"328\" height=\"62\" viewBox=\"0 0 328 62\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"327\" height=\"61\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"36\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><path d=\"M314 56L322 48M318 56L322 52\" stroke=\"#90A8D0\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg></div>"
      },
      {
        "cardKey": "ta-spec-active",
        "demoKey": "active",
        "demoControls": textAreaDemoControls,
        "title": "Active (Focused)",
        "node": "3070:21243",
        "description": "Focused state with 2px blue border. Rename target: <code>focused</code>.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Active",
                "mono": false
              },
              {
                "key": "isFilled",
                "value": "no",
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "isExpandable",
                "value": "true",
                "mono": false,
                "prop": "expandable"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/active/bg" },
              { "key": "Border", "value": "#005CE5", "token": "input-field/active/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/active/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/active/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Min height",
                "value": "120px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Resize",
                "value": "vertical, snap to line height",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$note<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.active</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebMinLines</span><span class=\"syn-punc\">(</span>5<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> note<span class=\"syn-punc\">,</span>\n    minLines <span class=\"syn-eq\">=</span> 5<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Active</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-active-preview\"><svg width=\"328\" height=\"62\" viewBox=\"0 0 328 62\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"327\" height=\"61\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"2\"></rect><text x=\"12\" y=\"36\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><path d=\"M314 56L322 48M318 56L322 52\" stroke=\"#90A8D0\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg></div>"
      },
      {
        "cardKey": "ta-spec-error",
        "demoKey": "error",
        "demoControls": textAreaDemoControls,
        "title": "Error",
        "node": "3070:21244",
        "description": "Validation error state with 2px red border. No inline error-message slot — copy is the consumer's responsibility.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Error",
                "mono": false
              },
              {
                "key": "isFilled",
                "value": "no",
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "isExpandable",
                "value": "true",
                "mono": false,
                "prop": "expandable"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/error/bg" },
              { "key": "Border", "value": "#D61B2C", "token": "input-field/error/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/error/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/error/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Min height",
                "value": "120px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Resize",
                "value": "vertical, snap to line height",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$note<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebMinLines</span><span class=\"syn-punc\">(</span>5<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> note<span class=\"syn-punc\">,</span>\n    minLines <span class=\"syn-eq\">=</span> 5<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-error-preview\"><svg width=\"328\" height=\"62\" viewBox=\"0 0 328 62\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"327\" height=\"61\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D61B2C\" stroke-width=\"2\"></rect><text x=\"12\" y=\"36\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><path d=\"M314 56L322 48M318 56L322 52\" stroke=\"#90A8D0\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg></div>"
      },
      {
        "cardKey": "ta-spec-disabled",
        "demoKey": "disabled",
        "demoControls": textAreaDemoControls,
        "title": "Disabled",
        "node": "3070:21241",
        "description": "Non-interactive state with gray fill and muted text. Border hidden.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Disabled",
                "mono": false
              },
              {
                "key": "isFilled",
                "value": "no",
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "isExpandable",
                "value": "true",
                "mono": false,
                "prop": "expandable"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#EEF2F9", "token": "input-field/disabled/bg" },
              { "key": "Text", "value": "#90A8D0", "token": "input-field/disabled/text" },
              { "key": "Placeholder", "value": "#C2CFE5", "token": "input-field/disabled/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Min height",
                "value": "120px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Resize",
                "value": "vertical, snap to line height",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$note<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebMinLines</span><span class=\"syn-punc\">(</span>5<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Note\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> note<span class=\"syn-punc\">,</span>\n    minLines <span class=\"syn-eq\">=</span> 5<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-disabled-preview\"><svg width=\"328\" height=\"62\" viewBox=\"0 0 328 62\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"327\" height=\"61\" rx=\"5.5\" fill=\"#EEF2F9\"></rect><text x=\"12\" y=\"36\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\" letter-spacing=\"0.25\">Placeholder</text><path d=\"M314 56L322 48M318 56L322 52\" stroke=\"#C2CFE5\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All four color roles are bound to <code>main/text-area/color/&#123;state&#125;/*</code> tokens. Every value mirrors the equivalent <code>main/input-field/color/*</code> token — motivation for consolidation.",
        "columns": [
          "DEFAULT",
          "ACTIVE",
          "ERROR",
          "DISABLED"
        ],
        "rows": [
          {
            "role": "Border",
            "token": "text-area/color/{state}/border",
            "values": [
              "#D7E0EF",
              "#005CE5",
              "#D61B2C",
              "hidden"
            ]
          },
          {
            "role": "Background",
            "token": "text-area/color/{state}/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#EEF2F9"
            ]
          },
          {
            "role": "Text (filled)",
            "token": "text-area/color/{state}/text",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#C2CFE5"
            ]
          },
          {
            "role": "Placeholder",
            "token": "text-area/color/{state}/placeholder",
            "values": [
              "#C2CFE5",
              "#C2CFE5",
              "#C2CFE5",
              "#C2CFE5"
            ]
          },
          {
            "role": "Resize glyph",
            "token": "text-area/color/{state}/icon-resizer",
            "values": [
              "#D7E0EF",
              "#D7E0EF",
              "#D7E0EF",
              "#D7E0EF"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(text content)",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "value: String"
        },
        {
          "figma": "isFilled (yes/no)",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "(multi-line default)",
          "swift": "axis: .vertical",
          "compose": "singleLine = false"
        },
        {
          "figma": "(auto-grow range)",
          "swift": ".lineLimit(3...6)",
          "compose": "maxLines = 6"
        },
        {
          "figma": "state = default",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "state = active",
          "swift": "@FocusState",
          "compose": "interactionSource"
        },
        {
          "figma": "state = error",
          "swift": ".ebError(true)",
          "compose": "isError = true"
        },
        {
          "figma": "state = disabled",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "isExpandable",
          "swift": "—",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBInputField.swift",
        "compose": "android/components/form/EBInputField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Multi-line (default)",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Tell us more\"</span>, <span class=\"prp\">text</span>: $value, <span class=\"prp\">axis</span>: .<span class=\"kw\">vertical</span>)\n    .<span class=\"fn\">lineLimit</span>(<span class=\"num\">3</span>...<span class=\"num\">6</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Tell us more\"</span>,\n    <span class=\"prp\">singleLine</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">maxLines</span> = <span class=\"num\">6</span>\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Tell us more\"</span>, <span class=\"prp\">text</span>: $value, <span class=\"prp\">axis</span>: .<span class=\"kw\">vertical</span>)\n    .<span class=\"fn\">lineLimit</span>(<span class=\"num\">3</span>...<span class=\"num\">6</span>)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Tell us more\"</span>,\n    <span class=\"prp\">singleLine</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">maxLines</span> = <span class=\"num\">6</span>,\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Tell us more\"</span>, <span class=\"prp\">text</span>: $value, <span class=\"prp\">axis</span>: .<span class=\"kw\">vertical</span>)\n    .<span class=\"fn\">lineLimit</span>(<span class=\"num\">3</span>...<span class=\"num\">6</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Tell us more\"</span>,\n    <span class=\"prp\">singleLine</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">maxLines</span> = <span class=\"num\">6</span>,\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 x 44 pt (per-line height 22pt, container ≥44pt)",
        "android": "48 x 48 dp"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Comment\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      },
      {
        "requirement": "Character-count announcement",
        "ios": "Announce remaining via <code>.accessibilityValue</code> when a limit is set",
        "android": "Expose via <code>supportingText</code> semantics"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use for free-form responses expected to exceed one line — feedback, comments, messages, notes.",
        "dontText": "Use for short structured inputs (name, phone, code) — Input Field's single-line default is more appropriate and faster to fill."
      },
      {
        "doText": "Pair with a visible label above the field and a helper-text row below for character counts or format hints.",
        "dontText": "Rely on the desktop resize handle on mobile — mobile fields auto-grow within lineLimit/maxLines and the handle has no native behavior."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Duplicate token namespace <code>main/text-area/*</code> mirrors <code>main/input-field/*</code> exactly. Text layer structure is clean."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isFilled=yes/no</code> (same anti-pattern Input Field already resolved). <code>state=active</code> should be <code>focused</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/text-area/color/*</code>. Spacing and radius tokens resolved."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Exists as a distinct component but native platforms treat multi-line as a single TextField with <code>axis: .vertical</code> / <code>singleLine=false</code>. Desktop resize handle has no native equivalent."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All 4 interaction states present. Missing slots: label, helper/error text, character count."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Resize glyph is a raster PNG referenced four times (once per state) instead of a single vector instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by the consolidation decision and property renames."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isFilled=yes/no</code> cannot map to native booleans"
      },
      {
        "aspect": "Component identity",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Native platforms have no standalone TextArea primitive; consolidation into Input Field is required first"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBInputField</code> with multi-line flag"
      }
    ],
    "variants": {
      "total": 8,
      "description": "4 <code>state</code> values × 2 <code>isFilled</code> values.",
      "columns": [
        "state",
        "isFilled",
        "Height",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "default",
            "yes",
            "62px",
            "3070:21242"
          ]
        },
        {
          "cells": [
            "default",
            "no",
            "46px",
            "3070:21239"
          ]
        },
        {
          "cells": [
            "active",
            "yes",
            "62px",
            "3070:21243"
          ]
        },
        {
          "cells": [
            "active",
            "no",
            "46px",
            "3070:21238"
          ]
        },
        {
          "cells": [
            "error",
            "yes",
            "62px",
            "3070:21244"
          ]
        },
        {
          "cells": [
            "error",
            "no",
            "46px",
            "3070:21240"
          ]
        },
        {
          "cells": [
            "disabled",
            "yes",
            "62px",
            "3070:21241"
          ]
        },
        {
          "cells": [
            "disabled",
            "no",
            "46px",
            "3070:21237"
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
      "header": "Initial Assessment · node 3070:21245",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across <code>state</code> (default/active/error/disabled) × <code>isFilled</code> (yes/no). Multi-line sibling of Input Field within the Form Elements group.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Consolidation proposed</strong> — Fold Text Area into Input Field via a <code>multiline</code> / <code>lineLimit</code> prop to match SwiftUI <code>axis: .vertical</code> and Compose <code>singleLine=false</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>isFilled=yes/no</code> instead of <code>true/false</code>. Same anti-pattern Input Field already resolved.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Desktop resize-handle glyph</strong> — 12×12px raster PNG in the bottom-right has no native mobile equivalent; iOS/Android auto-grow without a user-facing handle.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4, C6 Open"
          }
        },
        {
          "body": "<strong>Duplicate token namespace</strong> — <code>main/text-area/color/*</code> values mirror <code>main/input-field/color/*</code> exactly; candidate for aliasing or deletion after consolidation.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet. Blocked by consolidation decision and property renames.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
