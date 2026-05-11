import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/recipient-field.js`.
const recipientFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'state',
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
        label: 'showLabel',
        prop: 'showLabel',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'trailingIcons',
        prop: 'trailingIcons',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
    ],
  },
];

export const recipientField: ComponentData = {
  "meta": {
    "slug": "recipient-field",
    "name": "Recipient Field",
    "node": "17758:3867",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17758-3867",
    "description": "A form field showing a selected recipient — avatar, name, and contact identifier.",
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
      "text": "Both trailing icons are non-swappable rectangles (C6). This blocks direct native property mapping for icon slots."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"5\" width=\"100\" height=\"70\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"28\" y=\"18\" font-size=\"6\" fill=\"currentColor\" opacity=\".3\" font-family=\"system-ui\">Send Money</text>\n          <rect x=\"18\" y=\"24\" width=\"84\" height=\"24\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"24\" y=\"29\" width=\"22\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".12\"></rect>\n          <rect x=\"24\" y=\"35\" width=\"35\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <circle cx=\"86\" cy=\"36\" r=\"4\" fill=\"currentColor\" opacity=\".08\"></circle>\n          <circle cx=\"96\" cy=\"36\" r=\"4\" fill=\"currentColor\" opacity=\".08\"></circle>\n          <rect x=\"18\" y=\"54\" width=\"84\" height=\"12\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".12\"></rect>\n          <rect x=\"24\" y=\"59\" width=\"40\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"rf-demo-preview\"><svg width=\"366\" height=\"56\" viewBox=\"0 0 366 56\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"55\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"22\" font-family=\"Proxima Soft, system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.5\">Mobile Number</text><text x=\"12\" y=\"40\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Enter number or name</text><rect x=\"288\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect><rect x=\"322\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_rfDemo.state=this.value;updateRecipientFieldDemo()\"><option value=\"Default\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_rfDemo.filled=this.value;updateRecipientFieldDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Specific to recipient/contact entry in money transfer flows (Send Money, Pay Bills). Not a general-purpose field — the two-line layout with trailing icon pair is domain-specific."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own border, fill, label, and text styles per state. All 4 interaction states defined. 56px height, 6px corner radius. Disabled state has distinct background."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "<code>isFilled</code> now uses <code>true/false</code> (C2 fixed). Value layer renamed to <code>#value</code> (C1 fixed) — now consistent with sibling fields."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Trailing icons are <code>icon-placeholder</code> RECTANGLEs (C6) — not swappable icon instances. Cannot compose different icon actions (phonebook, scan QR) without editing the component."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Gray #D7E0EF border, white bg. Label + placeholder/value visible."
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
        "notes": "#EEF2F9 bg, border hidden. Muted label and text."
      }
    ],
    "resolved": [
      {
        "body": "<code>isFilled</code> property renamed from <code>Yes/No</code> to <code>true/false</code> — now maps directly to Swift <code>Bool</code> / Kotlin <code>Boolean</code> <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "Text layer renamed from <code>#text-placeholder</code> to <code>#value</code> — now consistent with sibling fields (Input Field, Labeled Field) <span class=\"tag-fixed\">C1 Fixed</span>"
      },
      {
        "body": "Both trailing icons use shared Placeholder component instances — swappable by design. Internal RECTANGLE is the default visual, replaced by designers when consuming the component <span class=\"tag-fixed\">C6 Closed</span>"
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
        "headline": "Replace icon placeholders with swappable icon instances.",
        "body": "The two <code>icon-placeholder</code> RECTANGLEs block instance-swap — phonebook, scan-QR, and other trailing actions can't be dropped in without detaching the master.",
        "tag": "Slot"
      },
      {
        "headline": "Document the 56px height rationale.",
        "body": "Recipient Field is taller than the standard 46px form fields because of the two-line label + value layout. Call this out in the DS guidelines so it's not mistaken for a design error.",
        "tag": "Docs"
      },
      {
        "headline": "Add an <code>errorMessage</code> slot below the field.",
        "body": "Inline validation text keeps the field self-contained and matches the pattern proposed for the other form fields.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "rf-spec-default",
        "demoKey": "default",
        "demoControls": recipientFieldDemoControls,
        "title": "Default",
        "node": "17758:3868",
        "description": "Idle state with gray border. Two-line layout: small label above, value/placeholder below. Two trailing icon placeholders.",
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
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "showLabel",
                "value": "true",
                "mono": false,
                "prop": "showLabel"
              },
              {
                "key": "trailingIcons",
                "value": "true",
                "mono": false,
                "prop": "trailingIcons"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/default/bg",
                "variants": { "state:Disabled": { "value": "#EEF2F9", "token": "input-field/disabled/bg" } }
              },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border",
                "variants": {
                  "state:Active":   { "value": "#005CE5", "token": "input-field/active/border" },
                  "state:Error":    { "value": "#D61B2C", "token": "input-field/error/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Text", "value": "#0A2757", "token": "input-field/default/text",
                "variants": { "state:Disabled": { "value": "#90A8D0", "token": "input-field/disabled/text" } }
              },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder",
                "variants": {
                  "state:Disabled": { "value": "#C2CFE5", "token": "input-field/disabled/placeholder" },
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
        "swift": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>recipient<span class=\"syn-punc\">: </span>selectedRecipient<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>\n    recipient <span class=\"syn-eq\">=</span> selectedRecipient<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"56\" viewBox=\"0 0 366 56\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"55\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"22\" font-family=\"Proxima Soft, system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.5\">Mobile Number</text><text x=\"12\" y=\"40\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Enter number or name</text><rect x=\"288\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect><rect x=\"322\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect></svg>"
      },
      {
        "cardKey": "rf-spec-active",
        "demoKey": "active",
        "demoControls": recipientFieldDemoControls,
        "title": "Active (Focused)",
        "node": "17758:3882",
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
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "showLabel",
                "value": "true",
                "mono": false,
                "prop": "showLabel"
              },
              {
                "key": "trailingIcons",
                "value": "true",
                "mono": false,
                "prop": "trailingIcons"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/active/bg",
                "variants": { "state:Disabled": { "value": "#EEF2F9", "token": "input-field/disabled/bg" } }
              },
              { "key": "Border", "value": "#005CE5", "token": "input-field/active/border",
                "variants": {
                  "state:Default":  { "value": "#D7E0EF", "token": "input-field/default/border" },
                  "state:Error":    { "value": "#D61B2C", "token": "input-field/error/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Text", "value": "#0A2757", "token": "input-field/active/text",
                "variants": { "state:Disabled": { "value": "#90A8D0", "token": "input-field/disabled/text" } }
              },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/active/placeholder",
                "variants": {
                  "state:Disabled": { "value": "#C2CFE5", "token": "input-field/disabled/placeholder" },
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
        "swift": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>recipient<span class=\"syn-punc\">: </span>selectedRecipient<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.active</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>\n    recipient <span class=\"syn-eq\">=</span> selectedRecipient<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Active</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"56\" viewBox=\"0 0 366 56\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"55\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"22\" font-family=\"Proxima Soft, system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.5\">Mobile Number</text><text x=\"12\" y=\"40\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Enter number or name</text><rect x=\"288\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect><rect x=\"322\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect></svg>"
      },
      {
        "cardKey": "rf-spec-error",
        "demoKey": "error",
        "demoControls": recipientFieldDemoControls,
        "title": "Error",
        "node": "17758:3896",
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
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "showLabel",
                "value": "true",
                "mono": false,
                "prop": "showLabel"
              },
              {
                "key": "trailingIcons",
                "value": "true",
                "mono": false,
                "prop": "trailingIcons"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/error/bg",
                "variants": { "state:Disabled": { "value": "#EEF2F9", "token": "input-field/disabled/bg" } }
              },
              { "key": "Border", "value": "#D61B2C", "token": "input-field/error/border",
                "variants": {
                  "state:Default":  { "value": "#D7E0EF", "token": "input-field/default/border" },
                  "state:Active":   { "value": "#005CE5", "token": "input-field/active/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Text", "value": "#0A2757", "token": "input-field/error/text",
                "variants": { "state:Disabled": { "value": "#90A8D0", "token": "input-field/disabled/text" } }
              },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/error/placeholder",
                "variants": {
                  "state:Disabled": { "value": "#C2CFE5", "token": "input-field/disabled/placeholder" },
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
        "swift": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>recipient<span class=\"syn-punc\">: </span>selectedRecipient<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>\n    recipient <span class=\"syn-eq\">=</span> selectedRecipient<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"56\" viewBox=\"0 0 366 56\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"55\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D61B2C\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"22\" font-family=\"Proxima Soft, system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.5\">Mobile Number</text><text x=\"12\" y=\"40\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Enter number or name</text><rect x=\"288\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect><rect x=\"322\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect></svg>"
      },
      {
        "cardKey": "rf-spec-disabled",
        "demoKey": "disabled",
        "demoControls": recipientFieldDemoControls,
        "title": "Disabled",
        "node": "17758:3910",
        "description": "Non-interactive state with gray background and hidden border. Muted label and text colors.",
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
                "mono": false,
                "prop": "filled"
              },
              {
                "key": "showLabel",
                "value": "true",
                "mono": false,
                "prop": "showLabel"
              },
              {
                "key": "trailingIcons",
                "value": "true",
                "mono": false,
                "prop": "trailingIcons"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#EEF2F9", "token": "input-field/disabled/bg",
                "variants": {
                  "state:Default": { "value": "#FFFFFF", "token": "input-field/default/bg" },
                  "state:Active":  { "value": "#FFFFFF", "token": "input-field/active/bg" },
                  "state:Error":   { "value": "#FFFFFF", "token": "input-field/error/bg" }
                }
              },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border",
                "variants": {
                  "state:Active":   { "value": "#005CE5", "token": "input-field/active/border" },
                  "state:Error":    { "value": "#D61B2C", "token": "input-field/error/border" },
                  "state:Disabled": { "hide": true }
                }
              },
              { "key": "Text", "value": "#90A8D0", "token": "input-field/disabled/text",
                "variants": {
                  "state:Default": { "value": "#0A2757", "token": "input-field/default/text" },
                  "state:Active":  { "value": "#0A2757", "token": "input-field/active/text" },
                  "state:Error":   { "value": "#0A2757", "token": "input-field/error/text" }
                }
              },
              { "key": "Placeholder", "value": "#C2CFE5", "token": "input-field/disabled/placeholder",
                "variants": {
                  "state:Default": { "value": "#90A8D0", "token": "input-field/default/placeholder" },
                  "state:Active":  { "value": "#90A8D0", "token": "input-field/active/placeholder" },
                  "state:Error":   { "value": "#90A8D0", "token": "input-field/error/placeholder" },
                  "filled:true":   { "hide": true }
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
        "swift": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>recipient<span class=\"syn-punc\">: </span>selectedRecipient<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>\n    recipient <span class=\"syn-eq\">=</span> selectedRecipient<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"56\" viewBox=\"0 0 366 56\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"55\" rx=\"5.5\" fill=\"#EEF2F9\"></rect><text x=\"12\" y=\"22\" font-family=\"Proxima Soft, system-ui\" font-size=\"12\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.5\">Mobile Number</text><text x=\"12\" y=\"40\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\" letter-spacing=\"0.25\">Enter number or name</text><rect x=\"288\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect><rect x=\"322\" y=\"12\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2C6CF\" opacity=\".35\"></rect></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All states share the same two-line container (56px height, 6px radius). Border color is the primary state indicator. Two trailing icon placeholders use a fixed fill across all states.",
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
            "role": "Label text",
            "token": "field/label",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Value (filled)",
            "token": "field/text/filled",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#90A8D0"
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
          },
          {
            "role": "Icon placeholder",
            "token": "field/icon",
            "values": [
              "#C2C6CF",
              "#C2C6CF",
              "#C2C6CF",
              "#C2C6CF"
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
          "figma": "#label",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "#text-placeholder",
          "swift": "placeholder: String",
          "compose": "placeholder: String"
        },
        {
          "figma": "icon-group (2x icons)",
          "swift": "trailingIcons: [Image]",
          "compose": "trailingIcons: @Composable"
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
        "swift": "ios/Components/FormElements/EBRecipientField.swift",
        "compose": "android/components/form/EBRecipientField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBRecipientField</span>(\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">text</span>: $recipientNumber,\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Enter number or name\"</span>,\n    <span class=\"prp\">trailingIcons</span>: [\n        <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"person.crop.circle\"</span>),\n        <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"qrcode.viewfinder\"</span>)\n    ]\n)",
        "compose": "<span class=\"typ\">EBRecipientField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">value</span> = recipientNumber,\n    <span class=\"prp\">onValueChange</span> = { recipientNumber = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Enter number or name\"</span>,\n    <span class=\"prp\">trailingIcons</span> = {\n        <span class=\"typ\">IconButton</span>(onClick = onContactsClick) {\n            <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Person, <span class=\"str\">\"Contacts\"</span>)\n        }\n        <span class=\"typ\">IconButton</span>(onClick = onScanClick) {\n            <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.QrCode, <span class=\"str\">\"Scan QR\"</span>)\n        }\n    }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBRecipientField</span>(\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">text</span>: $recipientNumber,\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Enter number or name\"</span>\n)\n.<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBRecipientField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">value</span> = recipientNumber,\n    <span class=\"prp\">onValueChange</span> = { recipientNumber = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Enter number or name\"</span>,\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBRecipientField</span>(\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">text</span>: $recipientNumber,\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Enter number or name\"</span>\n)\n.<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBRecipientField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">value</span> = recipientNumber,\n    <span class=\"prp\">onValueChange</span> = { recipientNumber = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Enter number or name\"</span>,\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 x 44 pt (56px field exceeds)",
        "android": "48 x 48 dp (56px field exceeds)"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Recipient\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      },
      {
        "requirement": "Trailing icon labels",
        "ios": "<code>.accessibilityLabel(\"Contacts\")</code> per icon",
        "android": "<code>contentDescription</code> per icon button"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Recipient Field for contact/number entry in money transfer flows (Send Money, Pay Bills, Buy Load). The two-line layout with trailing icons is purpose-built for this context.",
        "dontText": "Use Recipient Field for general text input — use Input Field or Labeled Field instead. The 56px height and icon slots add unnecessary weight for simple text entry."
      },
      {
        "doText": "Provide meaningful trailing icons (e.g. contacts picker, QR scanner) that match the field's purpose. Both slots should have distinct actions.",
        "dontText": "Leave icon placeholders as-is in production — they are design placeholders only. Always replace with real icon instances before handoff."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Layer renamed to <code>#value</code>, now consistent with sibling fields."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isFilled=true/false</code> — correctly uses native boolean values."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colors appear correct but token binding not verified. Icon placeholders use hardcoded #C2C6CF."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to custom <code>EBRecipientField</code> (SwiftUI + Compose). Two-line layout with trailing icon slots."
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
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Both trailing icons are <code>icon-placeholder</code> RECTANGLEs — not swappable icon instances."
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
        "notes": "<code>isFilled=true/false</code> — boolean values map directly to native types"
      },
      {
        "aspect": "Layer naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>#text-placeholder</code> needs rename to <code>#value</code>"
      },
      {
        "aspect": "Icon slots",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "RECTANGLE placeholders — need swappable icon instances"
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
        "notes": "EBRecipientField.swift / EBRecipientField.kt not yet created"
      }
    ],
    "variants": {
      "total": 8,
      "description": "4 <code>State</code> values × 2 <code>isFilled</code> values (true/false).",
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
            "17758:3868"
          ]
        },
        {
          "cells": [
            "Default",
            "false",
            "17758:3875"
          ]
        },
        {
          "cells": [
            "Active",
            "true",
            "17758:3882"
          ]
        },
        {
          "cells": [
            "Active",
            "false",
            "17758:3889"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "17758:3896"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "17758:3903"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "17758:3910"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "17758:3917"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.2.0",
      "date": "March 2026 Fix",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C1 Resolved · node 17758:3867",
      "rows": [
        {
          "body": "<strong>#text-placeholder renamed to #value</strong> — Value text layer renamed from <code>#text-placeholder</code> to <code>#value</code>. Now consistent with sibling fields (Input Field, Labeled Field) for direct native property mapping.\n          <span class=\"tag-fixed\">C1 Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "March 2026 Fix",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C2 Resolved · node 17758:3867",
      "rows": [
        {
          "body": "<strong>isFilled renamed to true/false</strong> — Figma property <code>isFilled</code> updated from <code>Yes/No</code> to <code>true/false</code>. Now maps directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect.\n          <span class=\"tag-fixed\">C2 Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "March 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 17758:3867",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across State (Default/Active/Error/Disabled) × isFilled (true/false). GCash-specific two-line recipient field with trailing action icons. 56px height (vs 46px standard).\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>isFilled=Yes/No</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        },
        {
          "body": "<strong>Layer naming inconsistency</strong> — Value text layer is <code>#text-placeholder</code> instead of <code>#value</code> used by other Form Elements.\n          <span class=\"tag-fixed\">Fixed in 1.2.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Fixed"
          }
        },
        {
          "body": "<strong>Non-swappable icon placeholders</strong> — Both trailing icons are <code>icon-placeholder</code> RECTANGLEs, not component instances.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet. Blocked by C1 and C6 issues.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
