import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/checkbox.js`.
// Panel mirrors the property panel of set 17143:2464: three variant axes.
// indeterminate ships on State=Default only, so the panel snaps.
const checkboxDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'pressed',  label: 'Pressed' },
          { value: 'focused',  label: 'Focused' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'error',    label: 'Error' },
        ],
      },
      {
        label: 'isSelected',
        prop: 'isselected',
        defaultValue: 'false',
        options: [
          { value: 'false',         label: 'false' },
          { value: 'true',          label: 'true' },
          { value: 'indeterminate', label: 'indeterminate' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'medium',
        options: [
          { value: 'small',  label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large',  label: 'Large' },
        ],
      },
    ],
  },
];

export const checkbox: ComponentData = {
  "meta": {
    "slug": "checkbox",
    "name": "Checkbox",
    "node": "17143:2464",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17143-2464",
    "description": "A selection control for binary and partial choices. 33 variants across isSelected (true/false/indeterminate) × State (Default/Pressed/Focused/Disabled/Error) × Size (Small/Medium/Large). Code Connect registration pending.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"4\" y=\"8\" width=\"10\" height=\"10\" rx=\"2\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"/>\n      <rect x=\"18\" y=\"8\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#1972F9\"/>\n      <path d=\"M21 13.5 L22.5 15 L25.5 11.5\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n      <rect x=\"4\" y=\"22\" width=\"6\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n      <rect x=\"13\" y=\"22\" width=\"8\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n      <rect x=\"24\" y=\"22\" width=\"4\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n    </svg>"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"10\" width=\"100\" height=\"60\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"22\" width=\"8\" height=\"8\" rx=\"1.5\" fill=\"#1972F9\" opacity=\".35\"></rect>\n          <path d=\"M22 26l2 2 3-3\" stroke=\"white\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".7\"></path>\n          <rect x=\"34\" y=\"24\" width=\"40\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"38\" width=\"8\" height=\"8\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"34\" y=\"40\" width=\"32\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"54\" width=\"8\" height=\"8\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"34\" y=\"56\" width=\"36\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cb-demo-preview\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><rect x=\"1\" y=\"1\" width=\"18\" height=\"18\" rx=\"3\" stroke=\"#D7E0EF\" stroke-width=\"2\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select class=\"demo-panel-select\" onchange=\"_cbDemo.sel=this.value;updateCheckboxDemo()\"><option value=\"false\">false</option><option value=\"true\">true</option><option value=\"indeterminate\">indeterminate</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_cbDemo.state=this.value;updateCheckboxDemo()\"><option value=\"Default\">Default</option><option value=\"Pressed\">Pressed</option><option value=\"Focused\">Focused</option><option value=\"Disabled\">Disabled</option><option value=\"Error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" onchange=\"_cbDemo.size=this.value;updateCheckboxDemo()\"><option value=\"small\">Small</option><option value=\"medium\" selected=\"\">Medium</option><option value=\"large\">Large</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "All 5 interaction states and indeterminate defined across 3 sizes (C5 resolved). Checkbox is icon-only by design — <code>CheckboxItem</code> compound component provides label + description pairing."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Checkmark is a separable <code>icon-check</code> child layer (C6 resolved). All 5 interaction states and indeterminate defined across 3 sizes (C5 resolved). Carries its own visual states and token bindings."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Token naming follows DS convention (<code>main/checkbox/color/...</code>). <code>isSelected</code> uses <code>true/false/indeterminate</code>. All property values follow boolean and enum standards (C2 resolved)."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Nests in form layouts, list rows, and select-all patterns. Indeterminate state defined. <code>CheckboxItem</code> compound component wraps Checkbox + Label + Description for accessible form groups."
      }
    ],
    "behavior": [
      {
        "state": "Unchecked",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=false",
        "notes": "Border-only container. 3 sizes."
      },
      {
        "state": "Checked",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=true",
        "notes": "Blue fill + separable icon-check layer."
      },
      {
        "state": "Indeterminate",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=indeterminate",
        "notes": "Blue fill + icon-indeterminate dash."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "40% opacity. Checked: #9BC5FD fill."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Unchecked: #EBF2FF bg. Checked: #0F57C8."
      },
      {
        "state": "Focused",
        "ios": "yes",
        "android": "yes",
        "property": "State=Focused",
        "notes": "Blue #1972F9 border stroke."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "State=Error",
        "notes": "Red border / red #D81E1E fill."
      }
    ],
    "resolved": [
      {
        "body": "<code>isSelected=Yes/No</code> renamed to <code>isSelected=true/false</code> in Figma — now maps correctly to Swift <code>Bool</code> and Kotlin <code>Boolean</code> <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "Checkmark rebuilt as a separable <code>icon-check</code> child layer inside each checked container — engineers can now tint, swap, and reference it via Code Connect <span class=\"tag-fixed\">C6 Fixed</span>"
      },
      {
        "body": "Added 27 new variants — State (Pressed/Focused/Disabled/Error) × isSelected (true/false) × Size, plus <code>isSelected=indeterminate</code> per size with <code>icon-indeterminate</code> dash layer. 6 → 33 total variants <span class=\"tag-fixed\">C5 Fixed</span>"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "All structural blockers resolved — registration can now proceed against the 33-variant <code>isSelected × State × Size</code> schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "<code>CheckboxItem</code> compound component created.",
        "body": "Composes Checkbox + Label (<code>Proxima Soft Bold</code>) + Description (<code>BarkAda Medium</code>). 4 variants: <code>isSelected</code> (true/false) × <code>Size</code> (Small 14px label / Medium 18px label). Node: <code>17734:161220</code>. <span class=\"tag-fixed\">Created</span>",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "cb-spec-main",
        "demoKey": "main",
        "title": "Checkbox",
        "node": "17143:2464",
        "description": "A 16, 20 or 24 box at radius 4 — a 2 outline when clear, a filled box with a white tick or dash when not.",
        "previewHtml": "<div id=\"checkbox-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": checkboxDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "isSelected",
                "value": "false",
                "prop": "isselected"
              },
              {
                "key": "Size",
                "value": "Medium",
                "prop": "size"
              },
              {
                "key": "Resolved variant",
                "value": "17143:2471 · 20 × 20",
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
                "key": "Box fill",
                "value": "None",
                "token": "—",
                "prop": "fill-readout"
              },
              {
                "key": "Outline",
                "value": "#D7E0EF · 2",
                "token": "—",
                "prop": "stroke-readout"
              },
              {
                "key": "Glyph",
                "value": "—",
                "token": "—",
                "prop": "glyph-readout"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "20 × 20",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Radius",
                "value": "4",
                "mono": true
              },
              {
                "key": "Outline",
                "value": "2, centred",
                "mono": true,
                "variants": {
                  "isselected:true": {
                    "hide": true
                  },
                  "isselected:indeterminate": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Tick",
                "value": "M6 10L9 13L15 7 · stroke 2.3",
                "mono": true,
                "variants": {
                  "isselected:false": {
                    "hide": true
                  },
                  "isselected:indeterminate": {
                    "hide": true
                  },
                  "size:small": {
                    "value": "M5 8L7 10L11 6 · stroke 2"
                  },
                  "size:large": {
                    "value": "M6 12.5L9.5 16L17.5 8 · stroke 2.5"
                  }
                }
              },
              {
                "key": "Dash",
                "value": "M5 10H15 · stroke 2.3",
                "mono": true,
                "variants": {
                  "isselected:false": {
                    "hide": true
                  },
                  "isselected:true": {
                    "hide": true
                  },
                  "size:small": {
                    "value": "M4 8H12.5 · stroke 2.3"
                  },
                  "size:large": {
                    "value": "M6 12H18 · stroke 2.5"
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
                "key": "Text",
                "value": "— the checkbox carries no label; see CheckboxItem",
                "mono": false
              }
            ]
          }
        ],
        "swift": "EBCheckbox(\n    isOn: $isOn,\n    size: .medium\n)",
        "compose": "EBCheckbox(\n    checked = checked,\n    onCheckedChange = { checked = it },\n    size = EBCheckboxSize.Medium\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> across the 33 variants of set <code>17143:2464</code>; Size does not change them. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Unselected fill",
          "Unselected outline",
          "Selected fill"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "—",
            "values": [
              "–",
              "#D7E0EF",
              "#1972F9"
            ]
          },
          {
            "role": "Pressed",
            "token": "—",
            "values": [
              "#EBF2FF",
              "#1972F9",
              "#0F57C8"
            ]
          },
          {
            "role": "Focused",
            "token": "—",
            "values": [
              "–",
              "#1972F9",
              "#1972F9"
            ]
          },
          {
            "role": "Disabled",
            "token": "—",
            "values": [
              "–",
              "#D7E0EF",
              "#9BC5FD"
            ]
          },
          {
            "role": "Error",
            "token": "—",
            "values": [
              "–",
              "#D81E1E",
              "#D81E1E"
            ]
          },
          {
            "role": "Glyph",
            "token": "—",
            "values": [
              "–",
              "–",
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:checkbox:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.checkbox.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>17143:2464</code>. Natively only <code>Size</code> is a parameter — selection is a binding and the other four States are interaction or validation state.",
      "rows": [
        {
          "figma": "State — Default, Pressed, Focused",
          "swift": "the control’s own pressed and focus styling",
          "compose": "<code>interactionSource</code>"
        },
        {
          "figma": "State — Disabled",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "State — Error",
          "swift": "<code>.ebError(true)</code>",
          "compose": "<code>isError = true</code>"
        },
        {
          "figma": "isSelected — false, true",
          "swift": "<code>isOn: Binding&lt;Bool&gt;</code>",
          "compose": "<code>checked: Boolean</code> + <code>onCheckedChange</code>"
        },
        {
          "figma": "isSelected — indeterminate",
          "swift": "<code>.indeterminate</code> state",
          "compose": "<code>EBToggleableState.Indeterminate</code>"
        },
        {
          "figma": "Size — Small 16, Medium 20, Large 24",
          "swift": "<code>size: .small / .medium / .large</code>",
          "compose": "<code>size = EBCheckboxSize.Small / Medium / Large</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Checkbox/EBCheckbox.swift",
        "compose": "android/components/checkbox/EBCheckbox.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Unselected · Medium",
        "swift": "<span class=\"cmt\">// State=Default, isSelected=false, Size=Medium — 17143:2471, 20 × 20.</span>\nEBCheckbox(isOn: $agreed, size: .medium)",
        "compose": "<span class=\"cmt\">// State=Default, isSelected=false, Size=Medium — 17143:2471, 20 × 20.</span>\nEBCheckbox(\n    checked = agreed,\n    onCheckedChange = { agreed = it },\n    size = EBCheckboxSize.Medium\n)"
      },
      {
        "subheading": "Selected",
        "swift": "<span class=\"cmt\">// State=Default, isSelected=true, Size=Medium — 17143:2473; #1972F9 with a white tick.</span>\nEBCheckbox(isOn: .constant(true), size: .medium)",
        "compose": "<span class=\"cmt\">// State=Default, isSelected=true, Size=Medium — 17143:2473; #1972F9 with a white tick.</span>\nEBCheckbox(\n    checked = true,\n    onCheckedChange = { },\n    size = EBCheckboxSize.Medium\n)"
      },
      {
        "subheading": "Indeterminate",
        "swift": "<span class=\"cmt\">// State=Default, isSelected=indeterminate, Size=Medium — 17733:1048; a white dash for a partial selection.</span>\n// A parent row whose children are partly selected.\nEBCheckbox(isOn: .indeterminate, size: .medium)",
        "compose": "<span class=\"cmt\">// State=Default, isSelected=indeterminate, Size=Medium — 17733:1048; a white dash for a partial selection.</span>\nEBTriStateCheckbox(\n    state = EBToggleableState.Indeterminate,\n    onClick = { selectAll() },\n    size = EBCheckboxSize.Medium\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"cmt\">// State=Error, isSelected=false, Size=Medium — 17733:1002; a #D81E1E outline for an unticked required box.</span>\nEBCheckbox(isOn: $agreed, size: .medium)\n    .ebError(!agreed && submitted)",
        "compose": "<span class=\"cmt\">// State=Error, isSelected=false, Size=Medium — 17733:1002; a #D81E1E outline for an unticked required box.</span>\nEBCheckbox(\n    checked = agreed,\n    onCheckedChange = { agreed = it },\n    size = EBCheckboxSize.Medium,\n    isError = !agreed && submitted\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label",
        "ios": "A bare checkbox has no name — pair it with a label or set <code>.accessibilityLabel</code>. CheckboxItem does this for you.",
        "android": "Use the labelled row, or set <code>contentDescription</code>."
      },
      {
        "requirement": "Tap target",
        "ios": "All three sizes are below 44pt — expand the target with <code>.contentShape</code> or let the whole row take the tap.",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code> for 48dp."
      },
      {
        "requirement": "Indeterminate",
        "ios": "Announce it as “mixed” — <code>.accessibilityValue(\"mixed\")</code> — not as checked.",
        "android": "<code>ToggleableState.Indeterminate</code> announces “partially checked”."
      },
      {
        "requirement": "Error",
        "ios": "Colour alone carries Error — pair it with a message and <code>.accessibilityHint</code>.",
        "android": "Same; expose the message with <code>error</code> semantics."
      },
      {
        "requirement": "Contrast",
        "ios": "The #D7E0EF outline is 1.42:1 against white — below the 3:1 a control boundary needs. Selected #1972F9 is 3.68:1 and Disabled #9BC5FD 1.78:1. White on #1972F9 is 3.68:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use indeterminate for a parent whose children are partly selected.",
        "dontText": "Don’t use it as a third user-settable value — tapping it should resolve to checked."
      },
      {
        "doText": "Match the size to the row — Medium in forms, Small in dense lists.",
        "dontText": "Don’t use Large for a list of many items."
      },
      {
        "doText": "Pair Error with a message under the field.",
        "dontText": "Don’t rely on the red outline alone."
      },
      {
        "doText": "Use CheckboxItem when the control needs a label.",
        "dontText": "Don’t place a bare checkbox next to loose text and call it labelled."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Each variant is a <code>container</code> holding <code>icon-check</code> or <code>icon-indeterminate</code> — nothing extra, nothing misnamed."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State</code> and <code>Size</code> are PascalCase but <code>isSelected</code> is camelCase, and its values are lowercase strings rather than True/False, so the tri-state reads as three unrelated words."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Ten colour values are hard-coded across the five states; no bindings can be read. There is no text layer to resolve."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one checkbox with a size enum, but four of the five States are interaction or validation state natively, and <code>isSelected</code> is a binding — only Size is a parameter."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Pressed, Focused, Disabled and Error all ship, but only for <code>false</code> and <code>true</code> — indeterminate has no pressed, focused, disabled or error variant."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The tick and dash are vector paths that scale per size — 2, 2.3 and 2.5 stroke."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Three axes are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 33,
      "description": "<code>State</code> (5) × <code>isSelected</code> (3) × <code>Size</code> (3) would be 45; 33 are built, because <code>indeterminate</code> ships on <code>State=Default</code> only.",
      "columns": [
        "State",
        "isSelected",
        "Size",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "false",
            "Small",
            "<code>17143:2465</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Default",
            "true",
            "Small",
            "<code>17143:2468</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Default",
            "indeterminate",
            "Small",
            "<code>17733:1044</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Pressed",
            "false",
            "Small",
            "<code>17733:968</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Pressed",
            "true",
            "Small",
            "<code>17733:980</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Focused",
            "false",
            "Small",
            "<code>17733:971</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Focused",
            "true",
            "Small",
            "<code>17733:984</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "Small",
            "<code>17733:974</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "Small",
            "<code>17733:988</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "Small",
            "<code>17733:977</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "Small",
            "<code>17733:992</code>",
            "16 × 16"
          ]
        },
        {
          "cells": [
            "Default",
            "false",
            "Medium",
            "<code>17143:2471</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Default",
            "true",
            "Medium",
            "<code>17143:2473</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Default",
            "indeterminate",
            "Medium",
            "<code>17733:1048</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Pressed",
            "false",
            "Medium",
            "<code>17733:996</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Pressed",
            "true",
            "Medium",
            "<code>17733:1004</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Focused",
            "false",
            "Medium",
            "<code>17733:998</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Focused",
            "true",
            "Medium",
            "<code>17733:1008</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "Medium",
            "<code>17733:1000</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "Medium",
            "<code>17733:1012</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "Medium",
            "<code>17733:1002</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "Medium",
            "<code>17733:1016</code>",
            "20 × 20"
          ]
        },
        {
          "cells": [
            "Default",
            "false",
            "Large",
            "<code>17143:2476</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Default",
            "true",
            "Large",
            "<code>17143:2478</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Default",
            "indeterminate",
            "Large",
            "<code>17733:1052</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Pressed",
            "false",
            "Large",
            "<code>17733:1020</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Pressed",
            "true",
            "Large",
            "<code>17733:1028</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Focused",
            "false",
            "Large",
            "<code>17733:1022</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Focused",
            "true",
            "Large",
            "<code>17733:1032</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Disabled",
            "false",
            "Large",
            "<code>17733:1024</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Disabled",
            "true",
            "Large",
            "<code>17733:1036</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Error",
            "false",
            "Large",
            "<code>17733:1026</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Error",
            "true",
            "Large",
            "<code>17733:1040</code>",
            "24 × 24"
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
      "header": "Style + Code tabs rebuilt against the live set · node 17143:2464",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>State</code>, <code>isSelected</code> and <code>Size</code>. The three cards on retired nodes are replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Small 16, Medium 20 and Large 24, all at radius 4: a 2 outline when clear, a filled box with a white glyph when not. The tick and dash paths and their 2 / 2.3 / 2.5 strokes come from <code>get_svg</code> on each size.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Ten colour values read per State.</strong> Pressed is the only one that fills an unselected box (#EBF2FF inside a #1972F9 outline); Pressed selected deepens to #0F57C8 and Disabled selected lightens to #9BC5FD.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:checkbox:2.0.0</code>, a six-row mapping, four snippets and a 33-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>indeterminate ships on Default only.</strong> 33 of the theoretical 45 exist — there is no pressed, focused, disabled or error indeterminate box — so the panel snaps. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>The unselected outline fails the 3:1 a control boundary needs</strong> — #D7E0EF is 1.42:1 on white, and Disabled selected #9BC5FD is 1.78:1. Even the selected #1972F9 is 3.68:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>All three sizes are below the minimum tap target</strong> — 16, 20 and 24 against 44pt / 48dp — so the row has to carry the target. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Naming is mixed</strong> — <code>State</code> and <code>Size</code> PascalCase beside a camelCase <code>isSelected</code> whose values are lowercase words. <span class=\"tag-open tag-c2\">Open</span>",
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
      "version": "1.5.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Compound Component + Cleanup · node 17734:161220",
      "rows": [
        {
          "body": "<strong>CheckboxItem compound component created</strong> — 4 variants: isSelected (true/false) × Size (Small/Medium). Each contains a real Checkbox instance + Label (<code>Proxima Soft Bold</code>, 14px/18px) + Description (<code>BarkAda Medium</code>, 12px). Wraps atomic Checkbox with label pairing for accessible form use.\n          <span class=\"tag-fixed\">Created</span>",
          "delta": {
            "kind": "resolved",
            "label": "New Component"
          }
        },
        {
          "body": "<strong>Variant property order reordered</strong> — Naming changed from <code>isSelected=X, Size=Y, State=Z</code> to <code>State=X, isSelected=Y, Size=Z</code>. State is now the first property axis in the component set. Section renamed from \"Claude Testing\" to \"Checkbox\".\n          <span class=\"tag-fixed\">Updated</span>",
          "delta": {
            "kind": "resolved",
            "label": "Cleanup"
          }
        }
      ]
    },
    {
      "version": "1.4.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C5 Fix · node 17143:2464",
      "rows": [
        {
          "body": "<strong>All interaction states added</strong> — Added 27 new variants covering State (Pressed/Focused/Disabled/Error) × isSelected (true/false) × Size (Small/Medium/Large). Variants 6 → 33. Colors: Pressed uses light blue fill + blue border (unchecked) / <code>#0F57C8</code> (checked); Focused uses blue border; Disabled uses 40% opacity; Error uses red border / <code>#D81E1E</code> fill.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Indeterminate state added</strong> — Added <code>isSelected=indeterminate</code> variants for Small, Medium, and Large. Each contains a blue <code>container</code> frame with a named <code>icon-indeterminate</code> horizontal dash child layer. Maps to <code>ToggleableState.Indeterminate</code> (Android) and <code>toggleIndeterminate</code> (iOS).\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Indeterminate"
          }
        }
      ]
    },
    {
      "version": "1.3.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C6 Fix · node 17143:2464",
      "rows": [
        {
          "body": "<strong>Checkmark rebuilt as separable vector layer</strong> — Deleted the flattened boolean-op containers from all 3 <code>isSelected=true</code> variants. Created clean blue <code>container</code> frames (4px radius) with a named <code>icon-check</code> child vector inside each. Engineers can now tint via <code>selected/icon-check</code> token and map to a native icon slot. Nodes: 17721:962 (Small), 17721:963 (Medium), 17721:964 (Large).\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.2.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "C2 Fix · node 17143:2464",
      "rows": [
        {
          "body": "<strong>Boolean property renamed in Figma</strong> — All 6 variants renamed from <code>isSelected=Yes/No</code> to <code>isSelected=true/false</code>. Now maps directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect. C2 criterion resolved.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Assessment Rebuild · node 17143:2464",
      "rows": [
        {
          "body": "<strong>Full 4-tab assessment built</strong> — Overview, Style, Code, and Changelog tabs. Interactive live preview with size and state controls. Spec cards for Unchecked and Checked appearances. Full criteria scorecard and Code Connect readiness table.\n          <span class=\"tag-fixed\">Updated</span>",
          "delta": {
            "kind": "resolved",
            "label": "Documentation"
          }
        },
        {
          "body": "<strong>Property name corrected</strong> — Existing assessment incorrectly referenced <code>isChecked</code>. Figma metadata confirms the property is <code>isSelected</code>. All documentation updated.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Note"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "March 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 17143:2464",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 6 variants documented across isSelected (Yes/No) x Size (Small 16px / Medium 20px / Large 24px). Token audit found 7 variables defined.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Flattened checkmark icon</strong> — Checked containers had no child layers. The white checkmark was a boolean operation baked into the container frame. Cannot be extracted, tinted, or swapped as a component instance. Hard C6 blocker.\n          <span class=\"tag-fixed\">Fixed in v1.3.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Missing interaction states</strong> — Only checked/unchecked defined. No disabled, pressed, focused, indeterminate, or error state variants. Checkboxes require all of these for production form use.\n          <span class=\"tag-fixed\">Fixed in v1.4.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>isSelected=Yes/No</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-fixed\">Fixed in v1.2.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Usage descriptions attached per variant. Was blocked by C2 and C6 (both resolved). Pending C5 (missing states) before complete CLI mapping. No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
