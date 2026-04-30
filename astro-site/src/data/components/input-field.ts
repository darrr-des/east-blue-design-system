import type { ComponentData } from '../types';

export const inputField: ComponentData = {
  "meta": {
    "slug": "input-field",
    "name": "Input Field",
    "node": "17758:3687",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17758-3687",
    "description": "A standard form text-input field — label, body, and four interaction states (default, active, error, disabled).",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "fix",
      "title": "Fix required before handoff",
      "text": "isFilled uses Yes/No instead of true/false (C2). Property naming blocks direct Swift Bool / Kotlin Boolean mapping."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"20\" width=\"80\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"25\" width=\"30\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"42\" width=\"80\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"47\" width=\"45\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"62\" width=\"80\" height=\"8\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"inf-demo-preview\"><svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"27\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_infDemo.state=this.value;updateInputFieldDemo()\"><option value=\"Default\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_infDemo.filled=this.value;updateInputFieldDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works across any text input context. Single-line only — no multi-line or textarea variant. No size variants (fixed 46px height)."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own border, fill, and text styles per state. All 4 interaction states defined. Disabled state has distinct background."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "C2 resolved — <code>isFilled</code> now uses <code>true/false</code>. C1 resolved — text layer renamed from <code>#text-label</code> to <code>#label</code>, consistent with sibling fields."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Serves as the base primitive for Labeled Field, Select Field, and Recipient Field. Nests cleanly in form layouts."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Gray #D7E0EF border, white bg."
      },
      {
        "state": "Active (Focused)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Active",
        "notes": "Blue #005CE5 border."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "State=Error",
        "notes": "Red #D61B2C border."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "#EEF2F9 bg, border hidden."
      }
    ],
    "resolved": [
      {
        "body": "<code>isFilled</code> property renamed from <code>Yes/No</code> to <code>true/false</code> — now maps directly to Swift <code>Bool</code> / Kotlin <code>Boolean</code> <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "Text layer renamed from <code>#text-label</code> to <code>#label</code> — now consistent with sibling fields <span class=\"tag-fixed\">C1 Fixed</span>"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structural work is complete — registration can proceed against the 8-variant <code>State × isFilled</code> schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Standardize text layer naming across Form Elements.",
        "body": "Input Field now uses <code>#label</code>; verify the remaining fields (Labeled, Select, Recipient, View Only) follow the same convention so Code Connect label-slot mapping is uniform.",
        "tag": "Rename"
      },
      {
        "headline": "Add a <code>helperText</code> slot below the field.",
        "body": "Validation messages and hint copy are currently handled outside the component — a first-class slot keeps form anatomy self-contained and matches native <code>TextField</code> hint affordances.",
        "tag": "Slot"
      },
      {
        "headline": "Add <code>leadingIcon</code> / <code>trailingIcon</code> slots.",
        "body": "Labeled Field already has these — extend to Input Field for search, clear, and validation-indicator use cases. Lets the DS cover the full form-element palette without per-screen customization.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "inf-spec-default",
        "title": "Default",
        "node": "17758:3688",
        "description": "Idle state with gray border. Text color depends on whether the field has a value.",
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
                "key": "Variant",
                "value": "Default",
                "mono": false
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
                "key": "Field height",
                "value": "48px",
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
                "key": "Icon size",
                "value": "20 × 20",
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
        "swift": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"27\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text></svg>"
      },
      {
        "cardKey": "inf-spec-active",
        "title": "Active (Focused)",
        "node": "17758:3694",
        "description": "Focused state with blue border indicating active input.",
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
                "key": "Variant",
                "value": "Active (Focused)",
                "mono": false
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
                "key": "Field height",
                "value": "48px",
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
                "key": "Icon size",
                "value": "20 × 20",
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
        "swift": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.active</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Active</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"27\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text></svg>"
      },
      {
        "cardKey": "inf-spec-error",
        "title": "Error",
        "node": "17758:3700",
        "description": "Validation error state with red border.",
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
                "key": "Variant",
                "value": "Error",
                "mono": false
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
                "key": "Field height",
                "value": "48px",
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
                "key": "Icon size",
                "value": "20 × 20",
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
        "swift": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D61B2C\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"27\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text></svg>"
      },
      {
        "cardKey": "inf-spec-disabled",
        "title": "Disabled",
        "node": "17758:3706",
        "description": "Non-interactive state with gray background and hidden border.",
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
                "key": "Variant",
                "value": "Disabled",
                "mono": false
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
                "key": "Field height",
                "value": "48px",
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
                "key": "Icon size",
                "value": "20 × 20",
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
        "swift": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#EEF2F9\"></rect><text x=\"12\" y=\"27\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\" letter-spacing=\"0.25\">Placeholder</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All states share the same container structure. Border color is the primary state indicator.",
        "columns": [
          "DEFAULT",
          "ACTIVE",
          "ERROR",
          "DISABLED"
        ],
        "rows": [
          {
            "role": "Border",
            "token": "field/border",
            "values": [
              "#D7E0EF",
              "#005CE5",
              "#D61B2C",
              "hidden"
            ]
          },
          {
            "role": "Background",
            "token": "field/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#EEF2F9"
            ]
          },
          {
            "role": "Text (filled)",
            "token": "field/text/filled",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Text (empty)",
            "token": "field/text/placeholder",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "#90A8D0",
              "#C2CFE5"
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
          "figma": "isFilled (Yes/No)",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "value: String"
        },
        {
          "figma": "State = Default",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "State = Active",
          "swift": ".focused()",
          "compose": "interactionSource"
        },
        {
          "figma": "State = Error",
          "swift": ".ebError(true)",
          "compose": "isError = true"
        },
        {
          "figma": "State = Disabled",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBInputField.swift",
        "compose": "android/components/form/EBInputField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Placeholder\"</span>, <span class=\"prp\">text</span>: $value)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Placeholder\"</span>\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Placeholder\"</span>, <span class=\"prp\">text</span>: $value)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Placeholder\"</span>,\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Placeholder\"</span>, <span class=\"prp\">text</span>: $value)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Placeholder\"</span>,\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 x 44 pt",
        "android": "48 x 48 dp"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Input\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pair with a visible label above or inside the field. Use placeholder text to hint at expected input format.",
        "dontText": "Use placeholder text as the only label — it disappears on focus and fails accessibility."
      },
      {
        "doText": "Show error state with a helper text message below the field explaining what needs to be corrected.",
        "dontText": "Use Input Field for selection — use Select Field instead. Input Field is for free-text entry only."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Layer renamed to <code>#label</code>, now consistent with sibling fields."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isFilled</code> now uses <code>true/false</code>. Boolean naming resolved."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colors appear correct but token binding not verified."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>TextField</code> (SwiftUI) / <code>OutlinedTextField</code> (Compose)."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 4 states defined: Default, Active, Error, Disabled."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No icons in base Input Field — text only."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isFilled</code> uses <code>true/false</code> — maps directly to native booleans"
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 4 states defined"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBInputField.swift / EBInputField.kt not yet created"
      }
    ],
    "variants": {
      "total": 8,
      "description": "4 <code>State</code> values × 2 <code>isFilled</code> values.",
      "columns": [
        "State",
        "isFilled",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "true",
            "17758:3688"
          ]
        },
        {
          "cells": [
            "Default",
            "false",
            "17758:3691"
          ]
        },
        {
          "cells": [
            "Active",
            "true",
            "17758:3694"
          ]
        },
        {
          "cells": [
            "Active",
            "false",
            "17758:3697"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "17758:3700"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "17758:3703"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "17758:3706"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "17758:3709"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.1.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C1 + C2 Fixes · Layer naming and boolean naming resolved",
      "rows": [
        {
          "body": "<strong>isFilled property renamed</strong> — <code>isFilled=Yes/No</code> updated to <code>isFilled=true/false</code> in Figma. Now maps directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Text layer renamed</strong> — <code>#text-label</code> renamed to <code>#label</code> in Figma. Now consistent with sibling fields (Labeled Field, Select Field, Recipient Field).\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "March 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 17758:3687",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across State (Default/Active/Error/Disabled) × isFilled (Yes/No). Part of Form Elements group.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>isFilled=Yes/No</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet. Blocked by C2 (property naming).\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
