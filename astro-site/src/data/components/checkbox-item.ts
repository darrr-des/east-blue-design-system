import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/checkbox-item.js`.
// Panel mirrors the property panel of set 17734:161220: two variant axes
// and the row's two text layers.
const checkboxItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'isSelected',
        prop: 'isselected',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true',  label: 'true' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'medium',
        options: [
          { value: 'small',  label: 'Small' },
          { value: 'medium', label: 'Medium' },
        ],
      },
      { label: 'label', prop: 'label', control: 'input', defaultValue: 'Label', options: [] },
      { label: 'description', prop: 'description', control: 'input', defaultValue: 'Description', options: [] },
    ],
  },
];

export const checkboxItem: ComponentData = {
  "meta": {
    "slug": "checkbox-item",
    "name": "Checkbox with Label",
    "node": "17734:161220",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17734-161220",
    "description": "A Checkbox_New instance beside a label and a description. 4 variants across <code>isSelected</code> × <code>Size</code> (Small, Medium).",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  "overview": {
    "inContextNote": "Appears in forms and consent rows — “save this card”, “remember me”, opt-ins — wherever a checkbox needs a label the user can also tap.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ci-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select id=\"ci-demo-selected\" class=\"demo-panel-select\" onchange=\"updateCheckboxItemDemo()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select id=\"ci-demo-size\" class=\"demo-panel-select\" onchange=\"updateCheckboxItemDemo()\"><option value=\"small\">Small</option><option value=\"medium\" selected=\"\">Medium</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A label-and-box row that drops into any form or consent list."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography and spacing; the box comes from a Checkbox_New instance."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "Property names match Checkbox_New, but the set ships two Sizes where the box ships three, and no State axis."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Fixed at 226 wide in the set; the text column has to stretch for real copy."
      }
    ],
    "behavior": [
    {
      "state": "Unselected",
      "ios": "yes",
      "android": "yes",
      "property": "isSelected=false",
      "notes": "A #D7E0EF outlined box beside the label and description."
    },
    {
      "state": "Selected",
      "ios": "yes",
      "android": "yes",
      "property": "isSelected=true",
      "notes": "The box fills #1972F9 and shows a white tick; the text does not change."
    },
    {
      "state": "Pressed",
      "ios": "no",
      "android": "no",
      "property": "—",
      "notes": "Not built. Checkbox_New has it; the labelled row does not."
    },
    {
      "state": "Focused",
      "ios": "no",
      "android": "no",
      "property": "—",
      "notes": "Not built, though the row is the focus target on Android."
    },
    {
      "state": "Disabled",
      "ios": "no",
      "android": "no",
      "property": "—",
      "notes": "Not built, so a disabled row cannot be drawn from the library."
    },
    {
      "state": "Error",
      "ios": "no",
      "android": "no",
      "property": "—",
      "notes": "Not built. A required checkbox that fails has to borrow the surrounding field's message."
    }
  ],
  "resolved": [],
    "open": [
      {
        "headline": "The labelled row has no interaction states.",
        "body": "Checkbox_New carries Default, Pressed, Focused, Disabled and Error. CheckboxItem carries none, so a disabled or errored row cannot be drawn from the library.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Two sizes against the box’s three.",
        "body": "Checkbox_New ships Small, Medium and Large; CheckboxItem stops at Medium, so a Large box cannot be labelled.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Text colours are off-palette.",
        "body": "label #102C57 and description #66788F, where the rest of the library uses #0A2757 and #6780A9. Close enough to look like a slip rather than a decision.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add the missing States and the Large size.",
        "body": "Mirror Checkbox_New so a labelled row can be disabled, focused or errored, and so the Large box can carry a label.",
        "tag": "State"
      },
      {
        "headline": "Pull the text colours back to the library values.",
        "body": "Use #0A2757 and #6780A9 unless the off-palette pair is deliberate.",
        "tag": "Token"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "ci-spec-main",
        "demoKey": "main",
        "title": "Checkbox with Label",
        "node": "17734:161220",
        "description": "A Checkbox_New instance beside a label and a description. Small is 226 × 34 with a 16 box, Medium 226 × 40 with a 20 box.",
        "previewHtml": "<div id=\"checkbox-item-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": checkboxItemDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
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
                "key": "label",
                "value": "Label",
                "prop": "label"
              },
              {
                "key": "description",
                "value": "Description",
                "prop": "description"
              },
              {
                "key": "⤷ Checkbox_New",
                "value": "Instance · 20 × 20",
                "prop": "box-readout"
              },
              {
                "key": "Resolved variant",
                "value": "17739:1058 · 226 × 40",
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
                "key": "Row",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Box outline",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF",
                "variants": {
                  "isselected:true": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Box fill",
                "value": "#1972F9",
                "token": "—",
                "swatch": "#1972F9",
                "variants": {
                  "isselected:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Tick",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF",
                "variants": {
                  "isselected:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "label",
                "value": "#102C57",
                "token": "—",
                "swatch": "#102C57"
              },
              {
                "key": "description",
                "value": "#66788F",
                "token": "—",
                "swatch": "#66788F"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "226 × 40",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Checkbox",
                "value": "20 × 20",
                "mono": true,
                "prop": "box-readout"
              },
              {
                "key": "Gap",
                "value": "8 between the box and the text",
                "mono": true
              },
              {
                "key": "Label",
                "value": "18 / 22",
                "mono": true,
                "prop": "label-readout"
              },
              {
                "key": "Description",
                "value": "12 / 18 · directly under the label",
                "mono": true
              },
              {
                "key": "Box alignment",
                "value": "Top of the row, not centred on the text",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "label",
                "value": "Primary/Multi-line Label/Large",
                "mono": true,
                "prop": "style-readout"
              },
              {
                "key": "description",
                "value": "Secondary/Default/Caption",
                "mono": true
              }
            ]
          }
        ],
        "swift": "EBCheckboxItem(\n    \"Label\",\n    description: \"Description\",\n    isOn: $isOn,\n    size: .medium\n)",
        "compose": "EBCheckboxItem(\n    label = \"Label\",\n    description = \"Description\",\n    checked = checked,\n    onCheckedChange = { checked = it },\n    size = EBCheckboxSize.Medium\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Selection",
        "description": "Read off <code>get_node_info</code> on the four variants of set <code>17734:161220</code>; Size does not change them. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "false",
          "true"
        ],
        "rows": [
          {
            "role": "Row",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Box",
            "token": "—",
            "values": [
              "Outline #D7E0EF",
              "Fill #1972F9"
            ]
          },
          {
            "role": "Tick",
            "token": "—",
            "values": [
              "–",
              "#FFFFFF"
            ]
          },
          {
            "role": "label",
            "token": "—",
            "values": [
              "#102C57",
              "#102C57"
            ]
          },
          {
            "role": "description",
            "token": "—",
            "values": [
              "#66788F",
              "#66788F"
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
      "footnote": "Ships with the Checkbox package. Not yet published — these are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Set <code>17734:161220</code> has two axes and two text layers. The box itself is a <code>Checkbox_New</code> instance, so its states come from that component.",
      "rows": [
        {
          "figma": "isSelected — false, true",
          "swift": "<code>isOn: Binding&lt;Bool&gt;</code>",
          "compose": "<code>checked: Boolean</code> + <code>onCheckedChange</code>"
        },
        {
          "figma": "Size — Small, Medium",
          "swift": "<code>size: .small / .medium</code>",
          "compose": "<code>size = EBCheckboxSize.Small / Medium</code>"
        },
        {
          "figma": "— <code>label</code>",
          "swift": "<code>EBCheckboxItem(_ label: String)</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "— <code>description</code>",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "⤷ <code>Checkbox_New</code> instance",
          "swift": "the box drawn by <code>EBCheckbox</code>",
          "compose": "the box drawn by <code>EBCheckbox</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Checkbox/EBCheckboxItem.swift",
        "compose": "android/components/checkbox/EBCheckboxItem.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Medium · unselected",
        "swift": "<span class=\"cmt\">// isSelected=false, Size=Medium — 17739:1058, 226 × 40.</span>\nEBCheckboxItem(\n    \"Save this card\",\n    description: \"We’ll use it for your next purchase\",\n    isOn: $save,\n    size: .medium\n)",
        "compose": "<span class=\"cmt\">// isSelected=false, Size=Medium — 17739:1058, 226 × 40.</span>\nEBCheckboxItem(\n    label = \"Save this card\",\n    description = \"We’ll use it for your next purchase\",\n    checked = save,\n    onCheckedChange = { save = it },\n    size = EBCheckboxSize.Medium\n)"
      },
      {
        "subheading": "Medium · selected",
        "swift": "<span class=\"cmt\">// isSelected=true, Size=Medium — 17739:1052; the box fills #1972F9 with a white tick.</span>\nEBCheckboxItem(\"Save this card\", description: \"…\", isOn: .constant(true), size: .medium)",
        "compose": "<span class=\"cmt\">// isSelected=true, Size=Medium — 17739:1052; the box fills #1972F9 with a white tick.</span>\nEBCheckboxItem(\n    label = \"Save this card\",\n    description = \"…\",\n    checked = true,\n    onCheckedChange = { },\n    size = EBCheckboxSize.Medium\n)"
      },
      {
        "subheading": "Small",
        "swift": "<span class=\"cmt\">// isSelected=false, Size=Small — 17734:161187, 226 × 34; a 16 box and a 14/16 label.</span>\nEBCheckboxItem(\"Remember me\", description: \"On this device\", isOn: $remember, size: .small)",
        "compose": "<span class=\"cmt\">// isSelected=false, Size=Small — 17734:161187, 226 × 34; a 16 box and a 14/16 label.</span>\nEBCheckboxItem(\n    label = \"Remember me\",\n    description = \"On this device\",\n    checked = remember,\n    onCheckedChange = { remember = it },\n    size = EBCheckboxSize.Small\n)"
      },
      {
        "subheading": "Label only",
        "swift": "<span class=\"cmt\">// The description layer is part of every variant; pass null to drop it — a height the set does not ship.</span>\nEBCheckboxItem(\"I agree to the terms\", isOn: $agreed, size: .medium)",
        "compose": "<span class=\"cmt\">// The description layer is part of every variant; pass null to drop it — a height the set does not ship.</span>\nEBCheckboxItem(\n    label = \"I agree to the terms\",\n    checked = agreed,\n    onCheckedChange = { agreed = it },\n    size = EBCheckboxSize.Medium\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "One control",
        "ios": "The row is the control — wrap label, description and box in a single <code>Toggle</code> so the whole row is tappable.",
        "android": "<code>Modifier.toggleable</code> on the row with <code>Role.Checkbox</code>; the box itself not focusable."
      },
      {
        "requirement": "Name",
        "ios": "The label is the accessible name; the description reads as the value or hint.",
        "android": "Merge both into the row’s <code>contentDescription</code>."
      },
      {
        "requirement": "Tap target",
        "ios": "The row is 34 or 40 tall — still under 44pt, so pad it or let the list row carry the target.",
        "android": "48dp minimum on the toggleable row."
      },
      {
        "requirement": "No error state",
        "ios": "The set ships none — if a required checkbox fails, the message has to come from the field around it.",
        "android": "Same."
      },
      {
        "requirement": "Contrast",
        "ios": "label #102C57 is 13.90:1 on white and description #66788F 4.63:1 — both pass. The unselected box outline #D7E0EF is 1.42:1, below the 3:1 a control boundary needs.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use this when a checkbox needs a label — it wires the two together.",
        "dontText": "Don’t place a bare Checkbox beside loose text; the row stops being one control."
      },
      {
        "doText": "Use Medium in forms and Small in dense lists.",
        "dontText": "Don’t expect a Large — the set ships two sizes where Checkbox ships three."
      },
      {
        "doText": "Keep the description to one line at this width.",
        "dontText": "Don’t use the description for the legal text of a consent — link it instead."
      },
      {
        "doText": "Let the whole row toggle the box.",
        "dontText": "Don’t make only the 16 or 20 box tappable."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>checkbox-container</code>, <code>text-group</code>, <code>label</code> and <code>description</code> — lowercase but consistent and semantic."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>isSelected</code> and <code>Size</code> match Checkbox_New’s names, but this set ships two Sizes where the box ships three, and no <code>State</code> axis at all."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All three text styles resolve <code>matched</code> — <code>Primary/Multi-line Label/Large</code> and <code>/Small</code>, and <code>Secondary/Default/Caption</code>. But the text colours #102C57 and #66788F are not the #0A2757 / #6780A9 the rest of the library uses."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to one <code>EBCheckboxItem</code> with a label, an optional description, a binding and a size."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed, focused, disabled or error row — the box has all five States, the labelled row has none."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The box is a real <code>Checkbox_New</code> instance rather than a copy."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Two axes and two text layers are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>isSelected</code> (2) × <code>Size</code> (2) = 4 variants, all built. There is no <code>State</code> axis and no Large size, where <code>Checkbox_New</code> has five States and three Sizes.",
      "columns": [
        "isSelected",
        "Size",
        "Node ID",
        "Dimensions",
        "Box"
      ],
      "rows": [
        {
          "cells": [
            "false",
            "Small",
            "<code>17734:161187</code>",
            "226 × 34",
            "16"
          ]
        },
        {
          "cells": [
            "true",
            "Small",
            "<code>17734:161188</code>",
            "226 × 34",
            "16"
          ]
        },
        {
          "cells": [
            "false",
            "Medium",
            "<code>17739:1058</code>",
            "226 × 40",
            "20"
          ]
        },
        {
          "cells": [
            "true",
            "Medium",
            "<code>17739:1052</code>",
            "226 × 40",
            "20"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial assessment · node 17734:161220",
      "rows": [
        {
          "body": "<strong>Component documented</strong> — <code>CheckboxItem</code>, a <code>Checkbox_New</code> instance beside a label and a description. 4 variants across <code>isSelected</code> × <code>Size</code>, all built. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Read off the set.</strong> 226 wide: Small 34 tall with a 16 box and a 14/16 label, Medium 40 tall with a 20 box and an 18/22 label; 8 between the box and the text in both.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> label → <code>Primary/Multi-line Label/Large</code> at Medium and <code>/Small</code> at Small, description → <code>Secondary/Default/Caption</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>No State axis.</strong> The box inside has Default, Pressed, Focused, Disabled and Error; the labelled row has none, so a disabled or errored row cannot be expressed. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>No Large size.</strong> <code>Checkbox_New</code> ships Small, Medium and Large; this set stops at Medium. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The text colours are off-palette</strong> — #102C57 and #66788F where the rest of the library uses #0A2757 and #6780A9. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The box sits at the top of the row</strong> rather than centred on the label, which reads as misaligned when the description wraps. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>The unselected box outline fails contrast</strong> — #D7E0EF is 1.42:1 on white, below the 3:1 a control boundary needs. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Code Connect</strong> — not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
