import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(cardStyle, prop, value)`
// in `public/scripts/demos/labeled-field.js`.
const labeledFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Active', label: 'Active' },
          { value: 'Error', label: 'Error' },
          { value: 'Disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'isFilled',
        prop: 'filled',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'leadingIcon',
        prop: 'leadingIcon',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'action',
        prop: 'action',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
    ],
  },
];

export const labeledField: ComponentData = {
  "meta": {
    "slug": "labeled-field",
    "name": "Labeled Field",
    "node": "17758:3713",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17758-3713",
    "description": "A form field with a label-on-top layout, used for plain text and value inputs.",
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
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "fix",
      "title": "Fix required before handoff",
      "text": "Trailing icon uses rectangle placeholder instead of swappable icon instance (C6). Code Connect mappings not yet registered (C7)."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"18\" width=\"80\" height=\"16\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <circle cx=\"30\" cy=\"26\" r=\"3\" fill=\"currentColor\" opacity=\".1\"></circle>\n          <rect x=\"37\" y=\"22\" width=\"12\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <rect x=\"37\" y=\"27\" width=\"20\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <circle cx=\"90\" cy=\"26\" r=\"3\" fill=\"currentColor\" opacity=\".1\"></circle>\n          <rect x=\"20\" y=\"40\" width=\"80\" height=\"16\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <circle cx=\"30\" cy=\"48\" r=\"3\" fill=\"currentColor\" opacity=\".1\"></circle>\n          <rect x=\"37\" y=\"44\" width=\"16\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <rect x=\"37\" y=\"49\" width=\"28\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <circle cx=\"90\" cy=\"48\" r=\"3\" fill=\"currentColor\" opacity=\".1\"></circle>\n          <rect x=\"20\" y=\"62\" width=\"80\" height=\"8\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"lf-demo-preview\"><svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><rect x=\"12\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"24\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle><text x=\"44\" y=\"19\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\" opacity=\"0.7\">Label</text><text x=\"44\" y=\"33\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><rect x=\"260\" y=\"11\" width=\"60\" height=\"24\" rx=\"12\" fill=\"#005CE5\"></rect><text x=\"290\" y=\"27\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#FFFFFF\" text-anchor=\"middle\">Action</text><rect x=\"330\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"342\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_lfDemo.state=this.value;updateLabeledFieldDemo()\"><option value=\"Default\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_lfDemo.filled=this.value;updateLabeledFieldDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works across form contexts requiring labeled inputs with icons. Single-line only — no multi-line variant. Fixed 46px height with no size options."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own border, fill, icon slots, and text styles per state. All 4 interaction states defined. Disabled state has distinct background and hidden border."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "Boolean naming and casing fixed (C2 resolved): <code>isFilled</code> now uses <code>true/false</code> and property renamed to <code>State</code>. Action button layer renamed to <code>action-button</code> (C1 resolved)."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Nests in form layouts. However, <code>trailing-icon</code> uses a rectangle placeholder instead of a swappable icon instance (C6), limiting icon customization at the consumer level."
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
        "body": "<code>isFilled</code> renamed from <code>Yes/No</code> to <code>true/false</code> — now maps directly to Swift <code>Bool</code> / Kotlin <code>Boolean</code> <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "Property <code>state</code> renamed to <code>State</code> (capitalized) — consistent with sibling Form Elements fields <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "<code>Button - XSmall</code> layer renamed to <code>action-button</code> — now a semantic slot name for flexible consumer customization <span class=\"tag-fixed\">C1 Fixed</span>"
      },
      {
        "body": "Trailing icon uses shared Placeholder component instance — swappable by design. Internal RECTANGLE is the default visual, replaced by designers when consuming the component <span class=\"tag-fixed\">C6 Closed</span>"
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
        "headline": "Replace hardcoded <code>Button - XSmall</code> with an <code>action</code> slot.",
        "body": "Today the trailing action is baked in — consumers can't swap in other button variants or remove it. A named slot makes the action composable via instance swap.",
        "tag": "Slot"
      },
      {
        "headline": "Replace <code>trailing-icon</code> placeholder with a swappable icon instance.",
        "body": "The current <code>icon-placeholder</code> RECTANGLE blocks designers from overriding the trailing icon without detaching. Follow the instance-swap pattern used elsewhere in the DS.",
        "tag": "Slot"
      },
      {
        "headline": "Add a <code>helperText</code> slot.",
        "body": "Validation messages and hint copy are handled externally today — a first-class slot keeps the form anatomy self-contained.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "lf-spec-default",
        "demoKey": "default",
        "demoControls": labeledFieldDemoControls,
        "title": "Default",
        "node": "17758:3714",
        "description": "Idle state with gray border. Leading/trailing icon placeholders, label + value text container, and XSmall action button.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "isFilled",
                "value": "false",
                "mono": true,
                "prop": "filled"
              },
              {
                "key": "leadingIcon",
                "value": "true",
                "mono": true,
                "prop": "leadingIcon"
              },
              {
                "key": "action",
                "value": "true",
                "mono": true,
                "prop": "action"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/default/bg",
                "variants": { "state:Disabled": { "value": "#EEF2F9", "token": "labeled-field/disabled/bg" } }
              },
              { "key": "Border", "value": "#D7E0EF", "token": "labeled-field/default/border",
                "variants": {
                  "state:Active":   { "value": "#005CE5", "token": "labeled-field/active/border" },
                  "state:Error":    { "value": "#D61B2C", "token": "labeled-field/error/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/default/label",
                "variants": { "state:Disabled": { "value": "#90A8D0", "token": "labeled-field/disabled/label" } }
              },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/default/text",
                "variants": { "state:Disabled": { "value": "#C2CFE5", "token": "labeled-field/disabled/value" } }
              },
              { "key": "Placeholder", "value": "#90A8D0", "token": "labeled-field/default/placeholder",
                "variants": {
                  "state:Disabled": { "value": "#C2CFE5", "token": "labeled-field/disabled/placeholder" },
                  "filled:true":    { "hide": true }
                }
              }
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
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
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
        "swift": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><rect x=\"12\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"24\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle><text x=\"44\" y=\"19\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\" opacity=\"0.7\">Label</text><text x=\"44\" y=\"33\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><rect x=\"260\" y=\"11\" width=\"60\" height=\"24\" rx=\"12\" fill=\"#005CE5\"></rect><text x=\"290\" y=\"27\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#FFFFFF\" text-anchor=\"middle\">Action</text><rect x=\"330\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"342\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle></svg>"
      },
      {
        "cardKey": "lf-spec-active",
        "demoKey": "active",
        "demoControls": labeledFieldDemoControls,
        "title": "Active (Focused)",
        "node": "17758:3732",
        "description": "Focused state with blue border indicating active input.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Active",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "isFilled",
                "value": "false",
                "mono": true,
                "prop": "filled"
              },
              {
                "key": "leadingIcon",
                "value": "true",
                "mono": true,
                "prop": "leadingIcon"
              },
              {
                "key": "action",
                "value": "true",
                "mono": true,
                "prop": "action"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/active/bg",
                "variants": { "state:Disabled": { "value": "#EEF2F9", "token": "labeled-field/disabled/bg" } }
              },
              { "key": "Border", "value": "#005CE5", "token": "labeled-field/active/border",
                "variants": {
                  "state:Default":  { "value": "#D7E0EF", "token": "labeled-field/default/border" },
                  "state:Error":    { "value": "#D61B2C", "token": "labeled-field/error/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/active/label",
                "variants": { "state:Disabled": { "value": "#90A8D0", "token": "labeled-field/disabled/label" } }
              },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/active/text",
                "variants": { "state:Disabled": { "value": "#C2CFE5", "token": "labeled-field/disabled/value" } }
              }
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
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
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
        "swift": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.active</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Active</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"1.5\"></rect><rect x=\"12\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"24\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle><text x=\"44\" y=\"19\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\" opacity=\"0.7\">Label</text><text x=\"44\" y=\"33\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><rect x=\"260\" y=\"11\" width=\"60\" height=\"24\" rx=\"12\" fill=\"#005CE5\"></rect><text x=\"290\" y=\"27\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#FFFFFF\" text-anchor=\"middle\">Action</text><rect x=\"330\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"342\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle></svg>"
      },
      {
        "cardKey": "lf-spec-error",
        "demoKey": "error",
        "demoControls": labeledFieldDemoControls,
        "title": "Error",
        "node": "17758:3750",
        "description": "Validation error state with red border.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Error",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "isFilled",
                "value": "false",
                "mono": true,
                "prop": "filled"
              },
              {
                "key": "leadingIcon",
                "value": "true",
                "mono": true,
                "prop": "leadingIcon"
              },
              {
                "key": "action",
                "value": "true",
                "mono": true,
                "prop": "action"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/error/bg",
                "variants": { "state:Disabled": { "value": "#EEF2F9", "token": "labeled-field/disabled/bg" } }
              },
              { "key": "Border", "value": "#D61B2C", "token": "labeled-field/error/border",
                "variants": {
                  "state:Default":  { "value": "#D7E0EF", "token": "labeled-field/default/border" },
                  "state:Active":   { "value": "#005CE5", "token": "labeled-field/active/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/error/label",
                "variants": { "state:Disabled": { "value": "#90A8D0", "token": "labeled-field/disabled/label" } }
              },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/error/text",
                "variants": { "state:Disabled": { "value": "#C2CFE5", "token": "labeled-field/disabled/value" } }
              }
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
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
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
        "swift": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D61B2C\" stroke-width=\"1.5\"></rect><rect x=\"12\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"24\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle><text x=\"44\" y=\"19\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\" opacity=\"0.7\">Label</text><text x=\"44\" y=\"33\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><rect x=\"260\" y=\"11\" width=\"60\" height=\"24\" rx=\"12\" fill=\"#005CE5\"></rect><text x=\"290\" y=\"27\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#FFFFFF\" text-anchor=\"middle\">Action</text><rect x=\"330\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#90A8D0\" opacity=\"0.2\"></rect><circle cx=\"342\" cy=\"23\" r=\"4\" fill=\"#90A8D0\" opacity=\"0.5\"></circle></svg>"
      },
      {
        "cardKey": "lf-spec-disabled",
        "demoKey": "disabled",
        "demoControls": labeledFieldDemoControls,
        "title": "Disabled",
        "node": "17758:3768",
        "description": "Non-interactive state with gray background and hidden border.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Disabled",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "isFilled",
                "value": "false",
                "mono": true,
                "prop": "filled"
              },
              {
                "key": "leadingIcon",
                "value": "true",
                "mono": true,
                "prop": "leadingIcon"
              },
              {
                "key": "action",
                "value": "true",
                "mono": true,
                "prop": "action"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#EEF2F9", "token": "labeled-field/disabled/bg",
                "variants": {
                  "state:Default": { "value": "#FFFFFF", "token": "labeled-field/default/bg" },
                  "state:Active":  { "value": "#FFFFFF", "token": "labeled-field/active/bg" },
                  "state:Error":   { "value": "#FFFFFF", "token": "labeled-field/error/bg" }
                }
              },
              { "key": "Border", "value": "#D7E0EF", "token": "labeled-field/default/border",
                "variants": {
                  "state:Active":   { "value": "#005CE5", "token": "labeled-field/active/border" },
                  "state:Error":    { "value": "#D61B2C", "token": "labeled-field/error/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Label", "value": "#90A8D0", "token": "labeled-field/disabled/label",
                "variants": {
                  "state:Default": { "value": "#0A2757", "token": "labeled-field/default/label" },
                  "state:Active":  { "value": "#0A2757", "token": "labeled-field/active/label" },
                  "state:Error":   { "value": "#0A2757", "token": "labeled-field/error/label" }
                }
              },
              { "key": "Value", "value": "#C2CFE5", "token": "labeled-field/disabled/value",
                "variants": {
                  "state:Default": { "value": "#0A2757", "token": "labeled-field/default/text" },
                  "state:Active":  { "value": "#0A2757", "token": "labeled-field/active/text" },
                  "state:Error":   { "value": "#0A2757", "token": "labeled-field/error/text" }
                }
              }
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
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
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
        "swift": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Email\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#EEF2F9\"></rect><rect x=\"12\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#C2CFE5\" opacity=\"0.2\"></rect><circle cx=\"24\" cy=\"23\" r=\"4\" fill=\"#C2CFE5\" opacity=\"0.5\"></circle><text x=\"44\" y=\"19\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\" opacity=\"0.7\">Label</text><text x=\"44\" y=\"33\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\" letter-spacing=\"0.25\">Placeholder</text><rect x=\"260\" y=\"11\" width=\"60\" height=\"24\" rx=\"12\" fill=\"#EEF2F9\"></rect><text x=\"290\" y=\"27\" font-family=\"Proxima Soft, system-ui\" font-size=\"11\" font-weight=\"600\" fill=\"#C2CFE5\" text-anchor=\"middle\">Action</text><rect x=\"330\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#C2CFE5\" opacity=\"0.2\"></rect><circle cx=\"342\" cy=\"23\" r=\"4\" fill=\"#C2CFE5\" opacity=\"0.5\"></circle></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All states share the same container structure. Border color is the primary state indicator. Text colors depend on isFilled (true/false).",
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
            "role": "Label (filled)",
            "token": "field/text/label",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Value (filled)",
            "token": "field/text/value",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#C2CFE5"
            ]
          },
          {
            "role": "Value (empty)",
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
          "figma": "isFilled (true/false)",
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
        },
        {
          "figma": "#label (TEXT)",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "#value (TEXT)",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "value: String"
        },
        {
          "figma": "leading-icon",
          "swift": "leadingIcon: Image?",
          "compose": "leadingIcon: @Composable?"
        },
        {
          "figma": "trailing-icon",
          "swift": "trailingIcon: Image?",
          "compose": "trailingIcon: @Composable?"
        },
        {
          "figma": "action-button",
          "swift": "action: EBFieldAction?",
          "compose": "action: @Composable?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBLabeledField.swift",
        "compose": "android/components/form/EBLabeledField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBLabeledField</span>(<span class=\"str\">\"Label\"</span>, <span class=\"prp\">text</span>: $value)\n    .<span class=\"fn\">leadingIcon</span>(Image(<span class=\"str\">\"icon-placeholder\"</span>))\n    .<span class=\"fn\">trailingIcon</span>(Image(<span class=\"str\">\"chevron-right\"</span>))",
        "compose": "<span class=\"typ\">EBLabeledField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Placeholder, <span class=\"kw\">null</span>) },\n    <span class=\"prp\">trailingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.ChevronRight, <span class=\"kw\">null</span>) }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBLabeledField</span>(<span class=\"str\">\"Label\"</span>, <span class=\"prp\">text</span>: $value)\n    .<span class=\"fn\">leadingIcon</span>(Image(<span class=\"str\">\"icon-placeholder\"</span>))\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBLabeledField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Placeholder, <span class=\"kw\">null</span>) },\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBLabeledField</span>(<span class=\"str\">\"Label\"</span>, <span class=\"prp\">text</span>: $value)\n    .<span class=\"fn\">leadingIcon</span>(Image(<span class=\"str\">\"icon-placeholder\"</span>))\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBLabeledField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Placeholder, <span class=\"kw\">null</span>) },\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
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
        "ios": "<code>.accessibilityLabel(\"Label\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      },
      {
        "requirement": "Action button label",
        "ios": "<code>.accessibilityLabel(\"Action\")</code> on button",
        "android": "<code>contentDescription</code> on button"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Labeled Field when the input needs a persistent label above the value, a leading icon for context, and an optional action button.",
        "dontText": "Use Labeled Field for simple text entry — use Input Field instead. Labeled Field is for complex form rows with icon context."
      },
      {
        "doText": "Provide meaningful icons in the leading and trailing slots — they help users identify the field purpose at a glance.",
        "dontText": "Leave the icon placeholders as-is in production — always swap in a contextual icon or hide the slot."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Layer renamed to <code>action-button</code>, now a semantic slot name."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isFilled</code> uses <code>true/false</code>. Property renamed to <code>State</code> (capitalized). Both fixes confirmed in Figma."
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
        "notes": "Maps to custom <code>EBLabeledField</code> on both platforms."
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>trailing-icon</code> uses <code>icon-placeholder</code> RECTANGLE — not a swappable icon instance."
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
        "notes": "<code>isFilled=true/false</code> and <code>State</code> (capitalized) — C2 fixed in Figma, ready for mapping"
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 4 states defined"
      },
      {
        "aspect": "Icon slots",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>leading-icon</code> uses Placeholder instance (OK). <code>trailing-icon</code> uses RECTANGLE (blocked)."
      },
      {
        "aspect": "Action slot",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Renamed to <code>action-button</code> — semantic slot name, ready for Code Connect mapping"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBLabeledField.swift / EBLabeledField.kt not yet created"
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
            "17758:3714"
          ]
        },
        {
          "cells": [
            "Default",
            "false",
            "17758:3723"
          ]
        },
        {
          "cells": [
            "Active",
            "true",
            "17758:3732"
          ]
        },
        {
          "cells": [
            "Active",
            "false",
            "17758:3741"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "17758:3750"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "17758:3759"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "17758:3768"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "17758:3777"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.2.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C1 Figma Fix · node 17758:3713",
      "rows": [
        {
          "body": "<strong>Action button layer renamed</strong> — <code>Button - XSmall</code> renamed to <code>action-button</code>. Now uses a semantic slot name, enabling flexible consumer customization and clean Code Connect mapping.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Fixed"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C2 Figma Fix · node 17758:3713",
      "rows": [
        {
          "body": "<strong>Boolean property renamed</strong> — <code>isFilled</code> values changed from <code>Yes/No</code> to <code>true/false</code>. Now maps directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        },
        {
          "body": "<strong>Property casing corrected</strong> — <code>state</code> renamed to <code>State</code> (capitalized) to align with sibling Form Elements fields (Input Field, etc.).\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "March 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 17758:3713",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across State (Default/Active/Error/Disabled) × isFilled (true/false). Part of Form Elements group. Enhanced input with leading icon, label/value text, action button, and trailing icon.\n          <span class=\"tag-fixed\">Documented</span>",
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
          "body": "<strong>Lowercase property name</strong> — <code>state</code> uses lowercase, inconsistent with other Form Elements using <code>State</code> (capitalized).\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Hardcoded button instance</strong> — <code>Button - XSmall</code> is not a named action slot, limiting consumer customization.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Trailing icon uses RECTANGLE</strong> — <code>icon-placeholder</code> in <code>trailing-icon</code> is a RECTANGLE, not a swappable icon instance.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet. Blocked by C2 (property naming) and C6 (icon quality).\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
