import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)` in
// `public/scripts/demos/input-field.js`. The panel mirrors the property
// panel of set 17758:3687 exactly: two variant axes and nothing else. The
// set defines no icon slots and no text property.
const inputFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Default',
        options: [
          { value: 'Default',  label: 'Default' },
          { value: 'Active',   label: 'Active' },
          { value: 'Error',    label: 'Error' },
          { value: 'Disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'isFilled',
        prop: 'isfilled',
        defaultValue: 'true',
        options: [
          { value: 'true',  label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
    ],
  },
];

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
      "text": "The <code>Yes/No</code> naming is resolved \u2014 the panel reads <code>true, false</code>. Three things still block handoff: the placeholder and the resting border both fail contrast (2.41:1 and 1.33:1), <code>isFilled=true</code> shows no filled content, and the set offers no icon slot for the clear button or password toggle every form needs."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"20\" width=\"80\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"25\" width=\"30\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"42\" width=\"80\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"47\" width=\"45\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"62\" width=\"80\" height=\"8\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\"><div id=\"input-field-demo-preview\"></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"inf-demo-state\" class=\"demo-panel-select\" onchange=\"updateInputFieldDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"inf-demo-isfilled\" class=\"demo-panel-select\" onchange=\"updateInputFieldDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "One fixed 366 × 46 frame covering the four states a text input needs. It stops short of reuse because there is no icon slot — any field wanting a clear button, a password toggle or a unit suffix has to be drawn from scratch."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Fill, border, radius and label all live on the variant. Two levels deep — <code>text-container</code> wrapping <code>#label</code> — identical across all eight."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "<code>State</code> and <code>isFilled</code> are orthogonal and all 8 combinations are built, with <code>true</code>/<code>false</code> naming that maps straight to a native Bool. But <code>isFilled=true</code> does not depict a filled field — every variant reads “Placeholder” and only the label colour moves."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Drops into a form row cleanly and maps to <code>TextField</code> / <code>OutlinedTextField</code>. Nothing composes <em>into</em> it, though: no slot, no instance-swap, no leading or trailing affordance anywhere in the set."
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
        "headline": "Placeholder text fails contrast at 2.41:1.",
        "body": "<code>#90A8D0</code> on white. WCAG asks 4.5:1 for body text. It is the resting appearance of every empty field in the system, so this is the most-seen text in any form.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The Disabled empty label is effectively invisible at 1.40:1.",
        "body": "<code>#C2CFE5</code> on <code>#EEF2F9</code>. Disabled text is exempt from the WCAG minimum, but at this ratio the field reads as blank rather than disabled.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The resting border fails non-text contrast at 1.33:1.",
        "body": "<code>#D7E0EF</code> on white. WCAG 1.4.11 asks 3:1 for the boundary of an input, which is what tells a user the control is there at all. Active and Error both pass; only the resting state does not.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "<code>isFilled=true</code> shows no filled content.",
        "body": "All eight variants read “Placeholder”. The flag only darkens the label from <code>#90A8D0</code> to <code>#0A2757</code>, so nothing in the set shows what a field with a value in it looks like.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No icon slot anywhere in the set.",
        "body": "A clear button, a password visibility toggle and a unit suffix are all ordinary input needs with no Figma counterpart here. This page previously rendered leading and trailing icons that the component does not have.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Disabled carries a hidden stroke rather than none.",
        "body": "Both Disabled variants define a <code>#0057E4</code> stroke with visibility switched off — a colour that appears nowhere else in the set. Leftover from an earlier revision.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No token bindings readable.",
        "body": "Seven colours across the set, none resolving to a variable through the plugin. Whether they are bound at all is unconfirmed.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Darken the placeholder and the resting border.",
        "body": "Placeholder needs 4.5:1 and the border 3:1. Both are currently decorative rather than perceivable.",
        "tag": "Token"
      },
      {
        "headline": "Make <code>isFilled=true</code> show a value.",
        "body": "Give the filled variants real sample content instead of the placeholder string, so the difference between the two states is visible rather than inferred from a colour shift.",
        "tag": "State"
      },
      {
        "headline": "Add a trailing icon slot.",
        "body": "One slot covers clear, password toggle, unit suffix and validation tick. Without it every consumer draws its own and the field stops being reusable.",
        "tag": "Slot"
      },
      {
        "headline": "Delete the hidden stroke on the Disabled variants.",
        "body": "The invisible <code>#0057E4</code> stroke is dead weight and the only place that colour appears.",
        "tag": "Token"
      },
      {
        "headline": "Add a read-only state.",
        "body": "Distinct from Disabled in both SwiftUI and Compose — the value stays selectable and legible, the field just is not editable.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "inf-spec-main",
        "demoKey": "main",
        "title": "Input Field",
        "node": "17758:3687",
        "description": "One card for the whole set: State × isFilled. Every reading below tracks the selection.",
        "previewHtml": "<div id=\"input-field-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": inputFieldDemoControls,
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
                "key": "isFilled",
                "value": "true",
                "prop": "isfilled"
              },
              {
                "key": "Layers",
                "value": "text-container › #label",
                "mono": true
              },
              {
                "key": "Resolved variant",
                "value": "17758:3688 · 366 × 46",
                "prop": "variantNode",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Background",
                "value": "#FFFFFF",
                "prop": "bg",
                "swatch": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "prop": "border",
                "swatch": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "prop": "labelColor",
                "swatch": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Frame",
                "value": "366 × 46",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6",
                "mono": true
              },
              {
                "key": "Stroke",
                "value": "1 inside",
                "prop": "stroke",
                "mono": true
              },
              {
                "key": "Label area",
                "value": "342 × 14",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#label",
                "value": "Primary/Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Placeholder\"</span><span class=\"syn-punc\">,</span>\n    text<span class=\"syn-punc\">: </span>$value\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInputField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> value <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Placeholder\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on all eight variants and <code>get_svg</code> for the stroke weights. No token binding could be read — the Talk To Figma plugin returns no variable references, so whether these are tokens or raw values is unconfirmed. Disabled draws no border: the stroke is present on the node but switched off.",
        "columns": [
          "isFilled = true",
          "isFilled = false"
        ],
        "rows": [
          {
            "role": "Default · bg",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Default · border",
            "token": "— · 1 inside",
            "values": [
              "#D7E0EF",
              "#D7E0EF"
            ]
          },
          {
            "role": "Default · label",
            "token": "—",
            "values": [
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Active · bg",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Active · border",
            "token": "— · 2 inside",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Active · label",
            "token": "—",
            "values": [
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Error · bg",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Error · border",
            "token": "— · 2 inside",
            "values": [
              "#D61B2C",
              "#D61B2C"
            ]
          },
          {
            "role": "Error · label",
            "token": "—",
            "values": [
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Disabled · bg",
            "token": "—",
            "values": [
              "#EEF2F9",
              "#EEF2F9"
            ]
          },
          {
            "role": "Disabled · border",
            "token": "— · stroke hidden",
            "values": [
              "–",
              "–"
            ]
          },
          {
            "role": "Disabled · label",
            "token": "—",
            "values": [
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
      "description": "Two variant axes and nothing else. The set defines no icon slot and no text property, so the placeholder string and any trailing affordance are native-side concerns with no Figma counterpart.",
      "rows": [
        {
          "figma": "<code>State=Default</code>",
          "swift": "(default)",
          "compose": "(default)"
        },
        {
          "figma": "<code>State=Active</code>",
          "swift": "<code>isFocused: true</code> — or the focus state itself",
          "compose": "<code>interactionSource</code> focus — drawn by the field"
        },
        {
          "figma": "<code>State=Error</code>",
          "swift": "<code>isError: true</code>",
          "compose": "<code>isError = true</code>"
        },
        {
          "figma": "<code>State=Disabled</code>",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "<code>isFilled=true / false</code>",
          "swift": "Derived from <code>text.isEmpty</code> — not a parameter",
          "compose": "Derived from <code>value.isEmpty()</code> — not a parameter"
        },
        {
          "figma": "<code>#label</code> (text layer, not a property)",
          "swift": "<code>placeholder</code> argument",
          "compose": "<code>placeholder</code> argument"
        },
        {
          "figma": "(no icon slot in the set)",
          "swift": "<code>trailingIcon</code> — native only",
          "compose": "<code>trailingIcon</code> — native only"
        },
        {
          "figma": "366 fixed width",
          "swift": "<code>.frame(maxWidth: .infinity)</code>",
          "compose": "<code>Modifier.fillMaxWidth()</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/InputField/EBInputField.swift",
        "compose": "android/components/inputfield/EBInputField.kt"
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Two levels and semantic throughout — <code>text-container</code> wrapping <code>#label</code>, identical across all eight variants. One leftover: the Disabled variants still carry a stroke (<code>#0057E4</code>) with visibility switched off rather than no stroke at all."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State</code> and <code>isFilled</code> are clean, orthogonal, and all 8 combinations are built. But <code>isFilled=true</code> does not show filled content — every variant reads “Placeholder”, and the flag only darkens the label from <code>#90A8D0</code> to <code>#0A2757</code>. The axis names a state it does not actually depict."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Seven distinct colours across the set, none with a readable binding — the plugin returns no variable references, so token coverage is unconfirmed. Needs a Dev Mode check."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The frame maps cleanly to <code>TextField</code> / <code>OutlinedTextField</code>, and <code>isFilled</code> is derived from the text on both platforms rather than passed. The gap is that the set offers no icon slot, so the clear button, password toggle and unit suffix every real form needs have no Figma counterpart."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Active and Error are covered, and Disabled is distinct. Missing: a filled-with-content rendering (see C2), and no read-only state — which is distinct from Disabled in both native frameworks."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The set contains no icons or raster assets — a rounded rect and one text layer. Nothing to assess, which is also the C4 finding."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Nothing registered. The two axes are clean enough to map, though <code>isFilled</code> should map to derived state rather than a parameter."
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
      "description": "<code>State</code> (4) × <code>isFilled</code> (2) = <strong>8 variants</strong>, all built, every one 366 × 46 with a 6 radius. <code>isFilled</code> changes the label colour only — the characters read “Placeholder” in all eight.",
      "columns": [
        "#",
        "State",
        "isFilled",
        "Node",
        "Border",
        "Weight",
        "Label"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>Default</code>",
            "<code>true</code>",
            "<code>17758:3688</code>",
            "#D7E0EF",
            "1",
            "#0A2757"
          ]
        },
        {
          "cells": [
            "2",
            "<code>Default</code>",
            "<code>false</code>",
            "<code>17758:3691</code>",
            "#D7E0EF",
            "1",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "3",
            "<code>Active</code>",
            "<code>true</code>",
            "<code>17758:3694</code>",
            "#005CE5",
            "2",
            "#0A2757"
          ]
        },
        {
          "cells": [
            "4",
            "<code>Active</code>",
            "<code>false</code>",
            "<code>17758:3697</code>",
            "#005CE5",
            "2",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "5",
            "<code>Error</code>",
            "<code>true</code>",
            "<code>17758:3700</code>",
            "#D61B2C",
            "2",
            "#0A2757"
          ]
        },
        {
          "cells": [
            "6",
            "<code>Error</code>",
            "<code>false</code>",
            "<code>17758:3703</code>",
            "#D61B2C",
            "2",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "7",
            "<code>Disabled</code>",
            "<code>true</code>",
            "<code>17758:3706</code>",
            "– (hidden)",
            "–",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "8",
            "<code>Disabled</code>",
            "<code>false</code>",
            "<code>17758:3709</code>",
            "– (hidden)",
            "–",
            "#C2CFE5"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "October 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Set re-read; Style tab collapsed to one card · node 17758:3687",
      "rows": [
        {
          "body": "<strong>Style tab collapsed to a single card.</strong> Four per-state cards replaced by one whose panel mirrors the Figma property panel exactly — <code>State</code> and <code>isFilled</code>, nothing else. Colours, layout and the resolved variant node all track the selection across the 8 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The <code>leadingIcon</code> and <code>trailingIcon</code> controls were removed — the set has no icon layers.</strong> The previous demo drew a magnifier and a clear button, and the panel exposed two boolean properties, none of which exist in Figma. The preview now renders what the component actually is: a rounded rect and one <code>#label</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Corrected"
          }
        },
        {
          "body": "<strong>Stroke weights corrected.</strong> Read off <code>get_svg</code>: Default is <code>1</code> inside, Active and Error <code>2</code>, Disabled none. The demo previously drew <code>1.5</code> on every state, so neither the resting nor the focused field was right.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Corrected"
          }
        },
        {
          "body": "<strong>Geometry recorded from the set.</strong> 366 × 46, radius 6, padding 12 horizontal and 16 vertical, label area 342 × 14. <code>#label</code> resolves to <code>Primary/Label/Light/Small</code>, matched by id and by value.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Verified"
          }
        },
        {
          "body": "<strong>Three contrast failures recorded.</strong> Placeholder <code>#90A8D0</code> on white is <strong>2.41:1</strong> against a 4.5:1 minimum; the resting border <code>#D7E0EF</code> on white is <strong>1.33:1</strong> against the 3:1 that WCAG 1.4.11 asks of an input boundary; the Disabled empty label is <strong>1.40:1</strong>. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong><code>isFilled=true</code> shows no filled content.</strong> All eight variants read “Placeholder” — the flag only darkens the label. Nothing in the set shows a field with a value in it. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Disabled carries a hidden <code>#0057E4</code> stroke</strong> rather than no stroke — a colour that appears nowhere else in the set. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>C6 moved to Not Applicable.</strong> The set contains no icons or raster assets at all, so there is nothing to score — which is itself the C4 finding about the missing icon slot.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Reclassified"
          }
        }
      ]
    },
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
