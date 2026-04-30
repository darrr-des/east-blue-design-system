import type { ComponentData } from '../types';

export const selectField: ComponentData = {
  "meta": {
    "slug": "select-field",
    "name": "Select Field",
    "node": "17758:3786",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17758-3786",
    "description": "A form field that opens a dropdown of options when tapped — label, value, and chevron.",
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
      "text": "Peso sign uses BOOLEAN_OPERATION instead of vector (C6). Flag uses raster IMAGE fill (C6). These block clean native mapping."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"20\" y=\"22\" font-size=\"6\" fill=\"currentColor\" opacity=\".15\" font-family=\"system-ui\">Send Money</text>\n          <rect x=\"20\" y=\"28\" width=\"80\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <text x=\"24\" y=\"37\" font-size=\"4\" fill=\"currentColor\" opacity=\".1\" font-family=\"system-ui\">₱ Amount</text>\n          <rect x=\"82\" y=\"32\" width=\"8\" height=\"5\" rx=\"1\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <path d=\"M94 33l2 2.5 2-2.5\" stroke=\"currentColor\" stroke-width=\".8\" stroke-linecap=\"round\" opacity=\".12\"></path>\n          <rect x=\"20\" y=\"50\" width=\"80\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"55\" width=\"45\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"68\" width=\"80\" height=\"8\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sf-demo-preview\"><svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"23\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#183462\" dominant-baseline=\"central\">₱</text><text x=\"36\" y=\"20\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\">#label</text><text x=\"36\" y=\"36\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">#value</text><rect x=\"298\" y=\"15\" width=\"25\" height=\"16\" rx=\"2\" fill=\"#0038A8\" opacity=\"1\"></rect><rect x=\"298\" y=\"20.3\" width=\"25\" height=\"5.4\" fill=\"#CE1126\" opacity=\"1\"></rect><rect x=\"298\" y=\"25.7\" width=\"25\" height=\"5.3\" rx=\"0 0 2 2\" fill=\"#FCD116\" opacity=\"1\"></rect><path d=\"M342 20l5 5 5-5\" stroke=\"#183462\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_sfDemo.state=this.value;updateSelectFieldDemo()\"><option value=\"Default\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_sfDemo.filled=this.value;updateSelectFieldDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Currency/amount selection pattern used across Send Money, Buy Load, Pay Bills, and other GCash flows. Tightly coupled to Philippine peso — not generalizable to other currencies without modification."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own border, fill, peso sign, flag, and chevron per state. All 4 interaction states defined with distinct visual treatment. Disabled state has separate background."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "<code>isFilled</code> now uses <code>true/false</code> (C2 fixed). Peso sign still uses <code>shape_full</code> BOOLEAN_OPERATION instead of a clean vector (C6)."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Nests cleanly in form layouts alongside Input Field, Labeled Field, and Recipient Field. Chevron down signals tappable selection affordance."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Gray #D7E0EF border, white bg. Peso sign #183462."
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
        "notes": "#EEF2F9 bg, border hidden. Peso sign #7E96BE."
      }
    ],
    "resolved": [
      {
        "body": "<code>isFilled</code> renamed from <code>Yes/No</code> to <code>true/false</code> for direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "Peso Sign <code>shape_full</code> BOOLEAN_OPERATION flattened to a single vector path across all 8 variants <span class=\"tag-fixed\">C6 Fixed</span>"
      },
      {
        "body": "Field Trailing Flag replaced from raster IMAGE fill to vector SVG across all 8 variants <span class=\"tag-fixed\">C6 Fixed</span>"
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
        "headline": "Flatten the Peso Sign <code>shape_full</code> BOOLEAN_OPERATION.",
        "body": "Boolean-operation paths render inconsistently across SVG export and native platforms. Replace with a single flattened vector path.",
        "tag": "Asset"
      },
      {
        "headline": "Use a vector flag asset.",
        "body": "The Philippine flag is currently a raster IMAGE fill. Swap to a vector from the DS icon library so it stays crisp across DPIs and platforms.",
        "tag": "Asset"
      },
      {
        "headline": "Generalize to multi-currency.",
        "body": "Expose currency symbol and flag as configurable slots so the field can support other currencies (USD, EUR, SGD) without creating a new component per currency.",
        "tag": "Property"
      },
      {
        "headline": "Add a <code>helperText</code> slot.",
        "body": "Error state has no accompanying text guidance today — add a slot for validation messages consistent with the other form fields.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "sf-spec-default",
        "title": "Default",
        "node": "17758:3787",
        "description": "Idle state with gray border. Peso sign in dark navy, flag visible, chevron down affordance.",
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
              { "key": "Bg", "value": "#FFFFFF", "token": "selected-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "selected-field/default/border" },
              { "key": "Value", "value": "#0A2757", "token": "selected-field/default/value" },
              { "key": "Icon", "value": "#005CE5", "token": "selected-field/default/icon" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "selected-field/default/placeholder" }
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
        "swift": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"23\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#183462\" dominant-baseline=\"central\">₱</text><text x=\"36\" y=\"20\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\">#label</text><text x=\"36\" y=\"36\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">#value</text><rect x=\"298\" y=\"15\" width=\"25\" height=\"16\" rx=\"2\" fill=\"#0038A8\" opacity=\"1\"></rect><rect x=\"298\" y=\"20.3\" width=\"25\" height=\"5.4\" fill=\"#CE1126\" opacity=\"1\"></rect><rect x=\"298\" y=\"25.7\" width=\"25\" height=\"5.3\" rx=\"0 0 2 2\" fill=\"#FCD116\" opacity=\"1\"></rect><path d=\"M342 20l5 5 5-5\" stroke=\"#183462\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      },
      {
        "cardKey": "sf-spec-active",
        "title": "Active (Focused)",
        "node": "17758:3807",
        "description": "Focused state with blue border indicating active selection.",
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
              { "key": "Bg", "value": "#FFFFFF", "token": "selected-field/active/bg" },
              { "key": "Border", "value": "#005CE5", "token": "selected-field/active/border" },
              { "key": "Value", "value": "#0A2757", "token": "selected-field/active/value" },
              { "key": "Icon", "value": "#005CE5", "token": "selected-field/active/icon" }
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
        "swift": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.active</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Active</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"23\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#183462\" dominant-baseline=\"central\">₱</text><text x=\"36\" y=\"20\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\">#label</text><text x=\"36\" y=\"36\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">#value</text><rect x=\"298\" y=\"15\" width=\"25\" height=\"16\" rx=\"2\" fill=\"#0038A8\" opacity=\"1\"></rect><rect x=\"298\" y=\"20.3\" width=\"25\" height=\"5.4\" fill=\"#CE1126\" opacity=\"1\"></rect><rect x=\"298\" y=\"25.7\" width=\"25\" height=\"5.3\" rx=\"0 0 2 2\" fill=\"#FCD116\" opacity=\"1\"></rect><path d=\"M342 20l5 5 5-5\" stroke=\"#183462\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      },
      {
        "cardKey": "sf-spec-error",
        "title": "Error",
        "node": "17758:3827",
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
              { "key": "Bg", "value": "#FFFFFF", "token": "selected-field/error/bg" },
              { "key": "Border", "value": "#D61B2C", "token": "selected-field/error/border" },
              { "key": "Value", "value": "#0A2757", "token": "selected-field/error/value" },
              { "key": "Icon", "value": "#005CE5", "token": "selected-field/error/icon" }
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
        "swift": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D61B2C\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"23\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#183462\" dominant-baseline=\"central\">₱</text><text x=\"36\" y=\"20\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\">#label</text><text x=\"36\" y=\"36\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">#value</text><rect x=\"298\" y=\"15\" width=\"25\" height=\"16\" rx=\"2\" fill=\"#0038A8\" opacity=\"1\"></rect><rect x=\"298\" y=\"20.3\" width=\"25\" height=\"5.4\" fill=\"#CE1126\" opacity=\"1\"></rect><rect x=\"298\" y=\"25.7\" width=\"25\" height=\"5.3\" rx=\"0 0 2 2\" fill=\"#FCD116\" opacity=\"1\"></rect><path d=\"M342 20l5 5 5-5\" stroke=\"#183462\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      },
      {
        "cardKey": "sf-spec-disabled",
        "title": "Disabled",
        "node": "17758:3847",
        "description": "Non-interactive state with gray background, hidden border, and muted peso sign.",
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
              { "key": "Bg", "value": "#EEF2F9", "token": "selected-field/disabled/bg" },
              { "key": "Value", "value": "#90A8D0", "token": "selected-field/disabled/value" },
              { "key": "Icon", "value": "#9BC5FD", "token": "selected-field/disabled/icon" }
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
        "swift": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Choose option\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"46\" viewBox=\"0 0 366 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"#EEF2F9\"></rect><text x=\"12\" y=\"23\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#7E96BE\" dominant-baseline=\"central\">₱</text><text x=\"36\" y=\"20\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\">#label</text><text x=\"36\" y=\"36\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#C2CFE5\">#value</text><rect x=\"298\" y=\"15\" width=\"25\" height=\"16\" rx=\"2\" fill=\"#0038A8\" opacity=\"0.5\"></rect><rect x=\"298\" y=\"20.3\" width=\"25\" height=\"5.4\" fill=\"#CE1126\" opacity=\"0.5\"></rect><rect x=\"298\" y=\"25.7\" width=\"25\" height=\"5.3\" rx=\"0 0 2 2\" fill=\"#FCD116\" opacity=\"0.5\"></rect><path d=\"M342 20l5 5 5-5\" stroke=\"#7E96BE\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All states share the same container structure. Border color is the primary state indicator. Peso sign and text colors shift in disabled state.",
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
            "token": "field/text/label",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#0A2757"
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
            "role": "Peso sign",
            "token": "field/icon/peso",
            "values": [
              "#183462",
              "#183462",
              "#183462",
              "#7E96BE"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Height",
            "token": "46px",
            "values": []
          },
          {
            "role": "Corner radius",
            "token": "6px",
            "values": []
          },
          {
            "role": "Peso sign size",
            "token": "15 × 15",
            "values": []
          },
          {
            "role": "Flag size",
            "token": "25 × 16",
            "values": []
          },
          {
            "role": "Flag corner radius",
            "token": "2px",
            "values": []
          },
          {
            "role": "Chevron size",
            "token": "32 × 32",
            "values": []
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "#label",
            "token": "Font",
            "values": [
              "HeyMeow Rnd Semibold"
            ]
          },
          {
            "role": "Size",
            "token": "16px",
            "values": []
          },
          {
            "role": "#value",
            "token": "Font",
            "values": [
              "HeyMeow Rnd"
            ]
          },
          {
            "role": "Size",
            "token": "14px",
            "values": []
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
          "swift": "selection: Binding&lt;String?&gt;",
          "compose": "selectedValue: String?"
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
        "swift": "ios/Components/FormElements/EBSelectField.swift",
        "compose": "android/components/form/EBSelectField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBSelectField</span>(<span class=\"str\">\"Amount\"</span>, <span class=\"prp\">selection</span>: $amount)",
        "compose": "<span class=\"typ\">EBSelectField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Amount\"</span>,\n    <span class=\"prp\">selectedValue</span> = amount,\n    <span class=\"prp\">onValueChange</span> = { amount = it }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBSelectField</span>(<span class=\"str\">\"Amount\"</span>, <span class=\"prp\">selection</span>: $amount)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBSelectField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Amount\"</span>,\n    <span class=\"prp\">selectedValue</span> = amount,\n    <span class=\"prp\">onValueChange</span> = { amount = it },\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBSelectField</span>(<span class=\"str\">\"Amount\"</span>, <span class=\"prp\">selection</span>: $amount)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBSelectField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Amount\"</span>,\n    <span class=\"prp\">selectedValue</span> = amount,\n    <span class=\"prp\">onValueChange</span> = { amount = it },\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
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
        "ios": "<code>.accessibilityLabel(\"Select amount\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Role hint",
        "ios": "<code>.accessibilityHint(\"Double tap to select\")</code>",
        "android": "<code>semantics { role = Role.DropdownList }</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Select Field for currency amount selection where the peso sign and flag indicator provide essential context for the user.",
        "dontText": "Use Select Field for free-text entry — use Input Field instead. Select Field is for predefined selection only."
      },
      {
        "doText": "Show error state with a helper text message below the field explaining the validation issue (e.g. \"Minimum amount is 1.00\").",
        "dontText": "Hide the peso sign or flag — these are essential visual cues that distinguish this field from a generic dropdown."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic layer names: <code>container</code>, <code>peso-sign</code>, <code>text-container</code>, <code>flag-container</code>, <code>Chevron Down</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isFilled=true/false</code> — correct boolean convention for native mapping."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colors appear correct but token binding not fully verified."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to custom <code>EBSelectField</code> (SwiftUI) / <code>EBSelectField</code> (Compose)."
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
        "notes": "Peso sign uses <code>shape_full</code> BOOLEAN_OPERATION (not a vector). Flag uses raster IMAGE fill."
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
        "notes": "<code>isFilled=true/false</code> — boolean convention now correct for Code Connect mapping"
      },
      {
        "aspect": "Asset quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Peso sign BOOLEAN_OPERATION and raster flag need replacement"
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
        "notes": "EBSelectField.swift / EBSelectField.kt not yet created"
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
            "17758:3787"
          ]
        },
        {
          "cells": [
            "Default",
            "false",
            "17758:3797"
          ]
        },
        {
          "cells": [
            "Active",
            "true",
            "17758:3807"
          ]
        },
        {
          "cells": [
            "Active",
            "false",
            "17758:3817"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "17758:3827"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "17758:3837"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "17758:3847"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "17758:3857"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.1.0",
      "date": "March 2026 Update",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C2 Fix — isFilled boolean naming · node 17758:3786",
      "rows": [
        {
          "body": "<strong>isFilled renamed from Yes/No to true/false</strong> — Figma component now uses correct boolean convention. Enables direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping for Code Connect.\n          <span class=\"tag-fixed\">Fixed</span>",
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
      "header": "Initial Assessment · node 17758:3786",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across State (Default/Active/Error/Disabled) × isFilled (true/false). Currency/amount selection field with peso sign, flag, and chevron. Part of Form Elements group.\n          <span class=\"tag-fixed\">Documented</span>",
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
          "body": "<strong>Peso sign uses BOOLEAN_OPERATION</strong> — <code>shape_full</code> is a BOOLEAN_OPERATION, not a clean vector path. May render inconsistently on native platforms.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Flag uses raster IMAGE fill</strong> — Philippine flag in <code>flag-container</code> uses a raster IMAGE fill instead of a vector. May degrade on high-density displays.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet. Blocked by C6 (asset quality).\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
