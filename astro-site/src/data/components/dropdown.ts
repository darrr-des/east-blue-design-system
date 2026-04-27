import type { ComponentData } from '../types';

export const dropdown: ComponentData = {
  "meta": {
    "slug": "dropdown",
    "name": "Dropdown",
    "node": "18482:31910",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-31910",
    "description": "A trigger button that opens a popover surface containing selectable options.",
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
    "navGroup": "Dropdown"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"20\" y=\"22\" font-size=\"6\" fill=\"currentColor\" opacity=\".15\" font-family=\"system-ui\">Select Option</text>\n          <rect x=\"20\" y=\"28\" width=\"80\" height=\"12\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"32\" width=\"35\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <path d=\"M94 32l2 2.5 2-2.5\" stroke=\"currentColor\" stroke-width=\".8\" stroke-linecap=\"round\" opacity=\".12\"></path>\n          <rect x=\"20\" y=\"42\" width=\"80\" height=\"8\" rx=\"2\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <rect x=\"20\" y=\"50\" width=\"80\" height=\"8\" rx=\"2\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <rect x=\"20\" y=\"58\" width=\"80\" height=\"8\" rx=\"2\" fill=\"currentColor\" opacity=\".05\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dd-demo-preview\"><svg width=\"366\" height=\"68\" viewBox=\"0 0 366 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"ddShadow\" x=\"-4\" y=\"64\" width=\"374\" height=\"410\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"white\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"48\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">Select option</text><path d=\"M339 42l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><select class=\"demo-panel-select\" onchange=\"_ddDemo.variant=this.value;updateDropdownDemo()\"><option value=\"Text\">Text</option><option value=\"Error\">Error</option><option value=\"Amount\">Amount</option><option value=\"Mobile\">Mobile</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" onchange=\"_ddDemo.type=this.value;updateDropdownDemo()\"><option value=\"Collapsed\">Collapsed</option><option value=\"Expanded\">Expanded</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Text and Error variants are generic dropdown patterns usable across many flows. Amount (peso-specific) and Mobile (phone input) variants are product-specific to GCash and limit cross-context reuse."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Bundles trigger field, chevron affordance, dropdown list overlay with shadow, and subtext slot. All visual states (collapsed/expanded/error) are self-contained with proper token bindings."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "DropdownItem <code>selected</code> uses <code>yes/no</code> string instead of <code>true/false</code> boolean (C2). Property <code>type</code> is a generic name — could conflict with platform keywords. Layer <code>dropdowncontainer</code> inconsistent with kebab-case convention."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Text/Error/Amount variants compose well with form layouts. Mobile variant bundles too many concerns (dropdown + phone input) — should be separated into discrete components. Trigger field is not a swappable slot."
      }
    ],
    "behavior": [
      {
        "state": "Collapsed (Default)",
        "ios": "yes",
        "android": "yes",
        "property": "type=Collapsed",
        "notes": "Gray #D7E0EF border, white bg. Chevron down."
      },
      {
        "state": "Expanded (Active)",
        "ios": "yes",
        "android": "yes",
        "property": "type=Expanded",
        "notes": "Blue #005CE5 border, chevron up. Dropdown list overlay with shadow."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "variant=Error",
        "notes": "Red border — weak #F4C7C9 (collapsed), strong #D61B2C (expanded)."
      },
      {
        "state": "Disabled",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Required for form accessibility."
      },
      {
        "state": "Pressed",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Touch feedback expected on mobile."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "DropdownItem <code>selected</code> uses <code>yes/no</code> strings.",
        "body": "Should be <code>true/false</code> for direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping in Code Connect.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No disabled state.",
        "body": "Form dropdowns must support a non-interactive state for accessibility and conditional form flows (e.g. \"Country\" disabled until \"Region\" is picked).",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No pressed state.",
        "body": "Touch feedback is expected on both platforms — iOS highlight, Android ripple. Currently consumers improvise this.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Peso Sign uses a <code>shape_full</code> BOOLEAN_OPERATION.",
        "body": "Not a clean vector path — renders inconsistently across SVG export and native platforms. Flatten to a single path.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the boolean and state issues above are resolved.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add a <code>Disabled</code> state to the variant matrix.",
        "body": "Required for form accessibility and conditional logic — without it, consumers hack opacity filters on the parent frame.",
        "tag": "State"
      },
      {
        "headline": "Rename <code>type</code> to <code>isExpanded</code>.",
        "body": "Avoids platform keyword conflicts (<code>type</code> is reserved in many languages) and aligns with boolean naming convention.",
        "tag": "Rename"
      },
      {
        "headline": "Rename DropdownItem <code>selected</code> values to <code>true/false</code>.",
        "body": "Direct boolean mapping eliminates the string-to-bool conversion layer when wiring Code Connect.",
        "tag": "Rename"
      },
      {
        "headline": "Extract Mobile variant into a dedicated <code>CountryCodeDropdown</code>.",
        "body": "It bundles too many concerns (dropdown + phone input) for a generic dropdown and forces the base component to carry country-specific logic.",
        "tag": "Family"
      },
      {
        "headline": "Add a selected-visual state to DropdownItem.",
        "body": "Checkmark or background highlight makes the current selection unambiguous — today the open menu looks the same whether an item is picked or not.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "dd-spec-text",
        "title": "Text",
        "node": "18482:31966",
        "description": "Default text dropdown. Label header, select trigger with placeholder text and chevron, optional subtext. Used for general-purpose list selection.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Text",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "selected-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "selected-field/default/border",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/default/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/default/icon",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "swift": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>options<span class=\"syn-punc\">: </span>items<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    options <span class=\"syn-eq\">=</span> items<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"68\" viewBox=\"0 0 366 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"ddShadow\" x=\"-4\" y=\"64\" width=\"374\" height=\"410\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"white\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"48\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">Select option</text><path d=\"M339 42l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      },
      {
        "cardKey": "dd-spec-error",
        "title": "Error",
        "node": "18482:31955",
        "description": "Error state dropdown with red border. Collapsed uses weak border (#F4C7C9), expanded uses strong border (#D61B2C). Subtext turns red for error messaging.",
        "sections": [
          {
            "label": "Properties",
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
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "selected-field/error/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "selected-field/error/border",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/error/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/error/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "swift": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>options<span class=\"syn-punc\">: </span>items<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    options <span class=\"syn-eq\">=</span> items<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"68\" viewBox=\"0 0 366 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"ddShadow\" x=\"-4\" y=\"64\" width=\"374\" height=\"410\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"white\" stroke=\"#F4C7C9\" stroke-width=\"2\"></rect><text x=\"12\" y=\"48\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">Select option</text><path d=\"M339 42l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      },
      {
        "cardKey": "dd-spec-amount",
        "title": "Amount",
        "node": "18482:31944",
        "description": "Amount selection with peso sign prefix. Same trigger structure as Text but with a currency indicator for monetary value selection.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Amount",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "selected-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "selected-field/default/border",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/default/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/default/icon",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "swift": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>options<span class=\"syn-punc\">: </span>items<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    options <span class=\"syn-eq\">=</span> items<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"68\" viewBox=\"0 0 366 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"ddShadow\" x=\"-4\" y=\"64\" width=\"374\" height=\"410\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"white\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"48\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#183462\" dominant-baseline=\"central\">₱</text><text x=\"30\" y=\"48\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">Select option</text><path d=\"M339 42l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"
      },
      {
        "cardKey": "dd-spec-mobile",
        "title": "Mobile",
        "node": "18482:31911",
        "description": "Country code dropdown with phone number input. Bundles a label row (with info icon), a select field for country code, and a Labeled Field for phone number entry. Product-specific to GCash mobile number flows.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Mobile",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "selected-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "selected-field/default/border",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/default/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/default/icon",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "swift": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>options<span class=\"syn-punc\">: </span>items<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    options <span class=\"syn-eq\">=</span> items<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"118\" viewBox=\"0 0 366 118\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"12\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><circle cx=\"52\" cy=\"8\" r=\"8\" stroke=\"#0A2757\" stroke-width=\"1\" fill=\"none\" opacity=\".4\"></circle><text x=\"49\" y=\"12\" font-family=\"system-ui\" font-size=\"10\" fill=\"#0A2757\" opacity=\".4\">i</text><rect x=\"0.5\" y=\"22.5\" width=\"365\" height=\"45\" rx=\"5.5\" fill=\"white\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"48\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">Select option</text><path d=\"M339 42l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><rect x=\"0.5\" y=\"76.5\" width=\"365\" height=\"37\" rx=\"5.5\" fill=\"white\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"98\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">+63</text><text x=\"52\" y=\"98\" font-family=\"HeyMeow Rnd, system-ui\" font-size=\"14\" fill=\"#90A8D0\">XXX XXX XXXX</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Trigger field and dropdown list colors. Border color is the primary state indicator. Error variant uses distinct border tokens.",
        "columns": [
          "DEFAULT",
          "ACTIVE",
          "ERROR (collapsed)",
          "ERROR (expanded)"
        ],
        "rows": [
          {
            "role": "Trigger border",
            "token": "selected-field/color/{state}/border",
            "values": [
              "#D7E0EF",
              "#005CE5",
              "#F4C7C9",
              "#D61B2C"
            ]
          },
          {
            "role": "Trigger bg",
            "token": "selected-field/color/{state}/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Placeholder",
            "token": "selected-field/color/{state}/placeholder",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "#90A8D0",
              "#90A8D0"
            ]
          },
          {
            "role": "Chevron icon",
            "token": "selected-field/color/{state}/icon",
            "values": [
              "#005CE5",
              "#005CE5",
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Peso sign (Amount)",
            "token": "selected-field/color/{state}/icon-currency",
            "values": [
              "#183462",
              "#183462",
              "–",
              "–"
            ]
          },
          {
            "role": "Header label",
            "token": "formgroup-header/color/label",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Item label",
            "token": "dropdown-item/color/default/label",
            "values": [
              "–",
              "#0A2757",
              "–",
              "#0A2757"
            ]
          },
          {
            "role": "Item border",
            "token": "dropdown-item/color/default/border",
            "values": [
              "–",
              "#E5EBF4",
              "–",
              "#E5EBF4"
            ]
          },
          {
            "role": "Dropdown bg",
            "token": "bg/color-bg-main",
            "values": [
              "–",
              "#FFFFFF",
              "–",
              "#FFFFFF"
            ]
          },
          {
            "role": "Subtext",
            "token": "text/color-text-weak",
            "values": [
              "#445C85",
              "#445C85",
              "–",
              "–"
            ]
          },
          {
            "role": "Error subtext",
            "token": "border/color-border-destructive",
            "values": [
              "–",
              "–",
              "#D61B2C",
              "#D61B2C"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Trigger height",
            "token": "46px",
            "values": []
          },
          {
            "role": "Corner radius",
            "token": "6px (radius-2)",
            "values": []
          },
          {
            "role": "Trigger padding",
            "token": "6px top, 8px bottom, 12px horizontal",
            "values": []
          },
          {
            "role": "Chevron size",
            "token": "32 × 32",
            "values": []
          },
          {
            "role": "Peso sign size (Amount)",
            "token": "15 × 15",
            "values": []
          },
          {
            "role": "Item padding",
            "token": "16px vertical, 12px left, 16px right",
            "values": []
          },
          {
            "role": "Dropdown corner radius",
            "token": "6px",
            "values": []
          },
          {
            "role": "Dropdown shadow",
            "token": "0 6px 12px rgba(2,14,34,0.16)",
            "values": []
          },
          {
            "role": "Header padding bottom",
            "token": "8px",
            "values": []
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
            "role": "Header label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "HeyMeow Rnd Semibold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Trigger placeholder",
            "token": "Primary/Label/Light/Small",
            "values": [
              "HeyMeow Rnd Semibold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Dropdown item",
            "token": "Primary/Label/Light/Large",
            "values": [
              "HeyMeow Rnd Semibold",
              "18px",
              "0.25px",
              "18px"
            ]
          },
          {
            "role": "Subtext",
            "token": "—",
            "values": [
              "BarkAda Semibold",
              "12px",
              "0px",
              "18px"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:dropdown:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.dropdown.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "variant = Text",
          "swift": "EBDropdown(label:items:)",
          "compose": "EBDropdown(label, items)"
        },
        {
          "figma": "variant = Error",
          "swift": ".ebError(true)",
          "compose": "isError = true"
        },
        {
          "figma": "variant = Amount",
          "swift": ".ebStyle(.amount)",
          "compose": "style = EBDropdownStyle.Amount"
        },
        {
          "figma": "variant = Mobile",
          "swift": ".ebStyle(.mobile)",
          "compose": "style = EBDropdownStyle.Mobile"
        },
        {
          "figma": "type = Collapsed",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "type = Expanded",
          "swift": "isPresented: Binding&lt;Bool&gt;",
          "compose": "expanded: Boolean"
        },
        {
          "figma": "subtext (boolean)",
          "swift": "helperText: String?",
          "compose": "helperText: String?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Dropdown/EBDropdown.swift",
        "compose": "android/components/dropdown/EBDropdown.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Text (Default)",
        "swift": "<span class=\"typ\">EBDropdown</span>(<span class=\"str\">\"Category\"</span>, <span class=\"prp\">selection</span>: $category) {\n    <span class=\"typ\">ForEach</span>(categories) { item <span class=\"kw\">in</span>\n        <span class=\"typ\">Text</span>(item.name)\n    }\n}",
        "compose": "<span class=\"typ\">EBDropdown</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Category\"</span>,\n    <span class=\"prp\">items</span> = categories,\n    <span class=\"prp\">selectedItem</span> = selected,\n    <span class=\"prp\">onItemSelected</span> = { selected = it }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBDropdown</span>(<span class=\"str\">\"Category\"</span>, <span class=\"prp\">selection</span>: $category) {\n    <span class=\"typ\">ForEach</span>(categories) { item <span class=\"kw\">in</span>\n        <span class=\"typ\">Text</span>(item.name)\n    }\n}\n.<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)\n.<span class=\"fn\">ebHelperText</span>(<span class=\"str\">\"Please select a category\"</span>)",
        "compose": "<span class=\"typ\">EBDropdown</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Category\"</span>,\n    <span class=\"prp\">items</span> = categories,\n    <span class=\"prp\">selectedItem</span> = selected,\n    <span class=\"prp\">onItemSelected</span> = { selected = it },\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>,\n    <span class=\"prp\">helperText</span> = <span class=\"str\">\"Please select a category\"</span>\n)"
      },
      {
        "subheading": "Amount",
        "swift": "<span class=\"typ\">EBDropdown</span>(<span class=\"str\">\"Amount\"</span>, <span class=\"prp\">selection</span>: $amount) {\n    <span class=\"typ\">ForEach</span>(amounts) { item <span class=\"kw\">in</span>\n        <span class=\"typ\">Text</span>(item.formatted)\n    }\n}\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">amount</span>)",
        "compose": "<span class=\"typ\">EBDropdown</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Amount\"</span>,\n    <span class=\"prp\">items</span> = amounts,\n    <span class=\"prp\">selectedItem</span> = selected,\n    <span class=\"prp\">onItemSelected</span> = { selected = it },\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBDropdownStyle</span>.<span class=\"prp\">Amount</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 × 44 pt",
        "android": "48 × 48 dp"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Select category\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Role",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code>",
        "android": "<code>semantics { role = Role.DropdownList }</code>"
      },
      {
        "requirement": "Expanded state",
        "ios": "VoiceOver: \"collapsed\" / \"expanded\"",
        "android": "TalkBack: announce expansion state"
      },
      {
        "requirement": "Item selection",
        "ios": "<code>.accessibilityValue(selectedItem)</code>",
        "android": "<code>semantics { stateDescription }</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Dropdown for selecting from a predefined list of options. Label the trigger clearly so users know what they're selecting.",
        "dontText": "Use Dropdown for free-text entry — use Input Field instead. Dropdown is for constrained selection only."
      },
      {
        "doText": "Show error state with helper text below the field explaining the validation issue.",
        "dontText": "Use the Mobile variant for generic dropdown needs — it bundles phone-specific UI that adds complexity without value."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>label</code>, <code>container</code>, <code>text-container</code>, <code>peso-sign</code>, <code>Chevron Up/Down</code>. Minor: <code>dropdowncontainer</code> missing separator."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "DropdownItem <code>selected</code> uses <code>yes/no</code> instead of <code>true/false</code>. <code>type</code> is a generic property name."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to design tokens. Space, radius, typography, and elevation tokens all present."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Text/Error/Amount map to <code>Menu</code> (iOS) / <code>ExposedDropdownMenuBox</code> (Android). Mobile variant needs custom composition."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing disabled and pressed states. Only Collapsed, Expanded, and Error defined."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Chevrons are vector instances. Amount variant Peso Sign uses BOOLEAN_OPERATION (<code>shape_full</code>)."
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "DropdownItem <code>selected</code> needs boolean rename; <code>type</code> is generic"
      },
      {
        "aspect": "Asset quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Peso Sign BOOLEAN_OPERATION in Amount variant"
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing disabled/pressed states blocks complete mapping"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBDropdown.swift / EBDropdown.kt not yet created"
      }
    ],
    "variants": {
      "total": 8,
      "description": "4 <code>variant</code> values × 2 <code>type</code> values (Collapsed/Expanded). <code>subtext</code> boolean toggleable on all variants.",
      "columns": [
        "variant",
        "type",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Text",
            "Collapsed",
            "18482:31966"
          ]
        },
        {
          "cells": [
            "Text",
            "Expanded",
            "18482:31960"
          ]
        },
        {
          "cells": [
            "Error",
            "Collapsed",
            "18482:31955"
          ]
        },
        {
          "cells": [
            "Error",
            "Expanded",
            "18482:31949"
          ]
        },
        {
          "cells": [
            "Amount",
            "Collapsed",
            "18482:31944"
          ]
        },
        {
          "cells": [
            "Amount",
            "Expanded",
            "18482:31938"
          ]
        },
        {
          "cells": [
            "Mobile",
            "Collapsed",
            "18482:31911"
          ]
        },
        {
          "cells": [
            "Mobile",
            "Expanded",
            "18482:31924"
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
      "header": "Initial Assessment · node 18482:31910",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across variant (Text/Error/Amount/Mobile) × type (Collapsed/Expanded). Generic dropdown with trigger field, chevron affordance, and overlay item list.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>DropdownItem selected uses yes/no</strong> — <code>selected=yes/no</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Missing disabled and pressed states</strong> — Only Collapsed, Expanded, and Error states defined. No disabled state for non-interactive forms, no pressed state for touch feedback.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Amount variant Peso Sign uses BOOLEAN_OPERATION</strong> — <code>shape_full</code> is a BOOLEAN_OPERATION, not a clean vector path. May render inconsistently on native platforms.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
