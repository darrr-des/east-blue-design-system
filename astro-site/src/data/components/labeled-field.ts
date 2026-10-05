import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)` in
// `public/scripts/demos/labeled-field.js`. The panel mirrors the property
// panel of set 17758:3713 in its order: two variant axes then the four
// booleans, with Figma's own defaults.
const labeledFieldDemoControls: DemoControlSection[] = [
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
      {
        label: 'show LeadingIcon',
        prop: 'showleadingicon',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ],
      },
      {
        label: 'has Label',
        prop: 'haslabel',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ],
      },
      {
        label: 'show TrailingIcon',
        prop: 'showtrailingicon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ],
      },
      {
        label: 'show LinkButton',
        prop: 'showlinkbutton',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\"><div id=\"labeled-field-demo-preview\"></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"lf-demo-state\" class=\"demo-panel-select\" onchange=\"updateLabeledFieldDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"lf-demo-isfilled\" class=\"demo-panel-select\" onchange=\"updateLabeledFieldDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">show LeadingIcon</span><select id=\"lf-demo-lead\" class=\"demo-panel-select\" onchange=\"updateLabeledFieldDemo()\"><option value=\"false\" selected=\"\">False</option><option value=\"true\">True</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">has Label</span><select id=\"lf-demo-label\" class=\"demo-panel-select\" onchange=\"updateLabeledFieldDemo()\"><option value=\"false\">False</option><option value=\"true\" selected=\"\">True</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">show TrailingIcon</span><select id=\"lf-demo-trail\" class=\"demo-panel-select\" onchange=\"updateLabeledFieldDemo()\"><option value=\"false\">False</option><option value=\"true\" selected=\"\">True</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">show LinkButton</span><select id=\"lf-demo-link\" class=\"demo-panel-select\" onchange=\"updateLabeledFieldDemo()\"><option value=\"false\" selected=\"\">False</option><option value=\"true\">True</option></select></div></div></div></div>",
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
        "headline": "The two Disabled variants are identical.",
        "body": "<code>State=Disabled, isFilled=true</code> and <code>isFilled=false</code> carry the same fill, the same <code>#90A8D0</code> label and the same <code>#C2CFE5</code> value. Two of the eight variants are duplicates, and a disabled field cannot show whether it holds a value.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The four boolean names are inconsistent.",
        "body": "<code>show LeadingIcon</code>, <code>has Label</code>, <code>show TrailingIcon</code>, <code>show LinkButton</code> — two verbs, a space before a PascalCase noun, and no match with the <code>isFilled</code> camelCase on the variant axis. Code Connect would carry the irregularity into the native signature.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The empty value fails contrast at 2.41:1.",
        "body": "<code>#90A8D0</code> on white, against a 4.5:1 minimum. It is the resting appearance of every unfilled Labeled Field.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The resting border fails non-text contrast at 1.33:1.",
        "body": "<code>#D7E0EF</code> on white. WCAG 1.4.11 asks 3:1 for the boundary of an input. Active and Error pass; only the resting state does not.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Content sits 2px above centre.",
        "body": "The 24-tall content row starts at y 12 in a 46-tall frame, leaving 12 above and 10 below. Confirmed in the drawn output, not just the layer tree — the trailing icon renders at y 12.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The two icon placeholders are different greys.",
        "body": "Leading ships as <code>#868686</code>, trailing as <code>#C2C6CF</code> — two stand-ins for the same job, in the same row, 2 stops apart. Nothing in the set explains the split.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The component description belongs to another component.",
        "body": "It reads “The input field is inactive but ready for interaction, with input field for monetary value (PHP / +63).” — a description of a monetary or mobile-number field, not a labelled row. It is the first thing a consumer reads in the panel.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No token bindings readable.",
        "body": "Eight colours across the set, none resolving to a variable. Whether any are bound is unconfirmed.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Regularise the four boolean names.",
        "body": "Pick one verb and one case — <code>hasLeadingIcon</code>, <code>hasLabel</code>, <code>hasTrailingIcon</code>, <code>hasLinkButton</code> — so they match <code>isFilled</code> and map to a clean native signature.",
        "tag": "Rename"
      },
      {
        "headline": "Make Disabled respect <code>isFilled</code>, or drop the axis there.",
        "body": "Two identical variants carry no information. Either give the disabled filled state its own value colour, or document that Disabled collapses the axis.",
        "tag": "State"
      },
      {
        "headline": "Darken the empty value and the resting border.",
        "body": "The value needs 4.5:1 and the border 3:1. Both are decorative rather than perceivable today.",
        "tag": "Token"
      },
      {
        "headline": "Centre the content row.",
        "body": "12 above and 10 below in a 46-tall frame. Even padding removes the 2px drift.",
        "tag": "Docs"
      },
      {
        "headline": "Use one placeholder grey for both icon slots.",
        "body": "Leading is <code>#868686</code> and trailing <code>#C2C6CF</code>. Pick one, or state why they differ.",
        "tag": "Asset"
      },
      {
        "headline": "Rewrite the component description.",
        "body": "It currently describes a monetary / mobile-number field. Replace it with what Labeled Field is: a label and value on one row, with optional icons and a trailing link.",
        "tag": "Docs"
      },
      {
        "headline": "Add press states for the trailing icon and the link button.",
        "body": "Both are tap targets and neither has press feedback modelled anywhere in the set.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "lf-spec-main",
        "demoKey": "main",
        "title": "Labeled Field",
        "node": "17758:3713",
        "description": "One card for the whole set: State × isFilled plus the four booleans. Every reading below tracks the selection.",
        "previewHtml": "<div id=\"labeled-field-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": labeledFieldDemoControls,
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
                "key": "show LeadingIcon",
                "value": "false",
                "prop": "showleadingicon"
              },
              {
                "key": "has Label",
                "value": "true",
                "prop": "haslabel"
              },
              {
                "key": "show TrailingIcon",
                "value": "true",
                "prop": "showtrailingicon"
              },
              {
                "key": "show LinkButton",
                "value": "false",
                "prop": "showlinkbutton"
              },
              {
                "key": "Resolved variant",
                "value": "17758:3714 · 366 × 46",
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
                "key": "#label",
                "value": "#0A2757",
                "prop": "labelColor",
                "swatch": true
              },
              {
                "key": "#value",
                "value": "#0A2757",
                "prop": "valueColor",
                "swatch": true
              },
              {
                "key": "Leading placeholder",
                "value": "#868686",
                "prop": "leadFill",
                "swatch": true
              },
              {
                "key": "Trailing placeholder",
                "value": "#C2C6CF",
                "prop": "trailFill",
                "swatch": true
              },
              {
                "key": "Link label",
                "value": "#005CE5",
                "prop": "linkFg",
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
                "key": "Padding",
                "value": "12 left; right side flush",
                "mono": true
              },
              {
                "key": "Content row",
                "value": "24 tall at y 12",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8 — carried inside each frame",
                "mono": true
              },
              {
                "key": "text-container",
                "value": "310 × 24",
                "prop": "textW",
                "mono": true
              },
              {
                "key": "leading-icon",
                "value": "32 frame · icon @ x 12",
                "prop": "leadRow",
                "mono": true
              },
              {
                "key": "action-button",
                "value": "60 × 24 @ x 262",
                "prop": "linkRow",
                "mono": true
              },
              {
                "key": "trailing-icon",
                "value": "44 frame · icon @ x 330",
                "prop": "trailRow",
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
              },
              {
                "key": "#value",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "action-button › #label",
                "value": "Primary/Label/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">: </span>$value\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBLabeledField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> value <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on all eight variants, with stroke weights and drawn positions confirmed by <code>get_svg</code>. No token binding could be read — the plugin returns no variable references. Disabled draws no stroke at all, and its two variants are identical: <code>isFilled</code> changes nothing there.",
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
            "role": "Default · #label",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Default · #value",
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
            "role": "Active · #label",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Active · #value",
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
            "role": "Error · #label",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Error · #value",
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
            "token": "— · no stroke",
            "values": [
              "–",
              "–"
            ]
          },
          {
            "role": "Disabled · #label",
            "token": "—",
            "values": [
              "#90A8D0",
              "#90A8D0"
            ]
          },
          {
            "role": "Disabled · #value",
            "token": "—",
            "values": [
              "#C2CFE5",
              "#C2CFE5"
            ]
          },
          {
            "role": "All states · icon placeholder",
            "token": "— · 24 circle",
            "values": [
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
      "description": "Two variant axes plus four booleans. The booleans map to optional parameters or composable slots; <code>isFilled</code> is derived from the value on both platforms rather than passed.",
      "rows": [
        {
          "figma": "<code>State=Default</code>",
          "swift": "(default)",
          "compose": "(default)"
        },
        {
          "figma": "<code>State=Active</code>",
          "swift": "<code>isFocused: true</code>",
          "compose": "focus drawn by the field"
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
          "swift": "Derived from <code>value.isEmpty</code>",
          "compose": "Derived from <code>value.isEmpty()</code>"
        },
        {
          "figma": "<code>has Label=True</code>",
          "swift": "<code>label:</code> argument — omit for False",
          "compose": "<code>label =</code> argument — omit for False"
        },
        {
          "figma": "<code>show LeadingIcon=True</code>",
          "swift": "<code>leadingIcon: Image(…)</code>",
          "compose": "<code>leadingIcon = { Icon(…) }</code>"
        },
        {
          "figma": "<code>show TrailingIcon=True</code>",
          "swift": "<code>trailingIcon: Image(…)</code>",
          "compose": "<code>trailingIcon = { Icon(…) }</code>"
        },
        {
          "figma": "<code>show LinkButton=True</code>",
          "swift": "<code>link: EBTextButton(…)</code>",
          "compose": "<code>link = { EBTextButton(…) }</code>"
        },
        {
          "figma": "<code>#label</code> / <code>#value</code> (text layers)",
          "swift": "<code>label</code> / <code>value</code>",
          "compose": "<code>label</code> / <code>value</code>"
        },
        {
          "figma": "366 fixed width",
          "swift": "<code>.frame(maxWidth: .infinity)</code>",
          "compose": "<code>Modifier.fillMaxWidth()</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/LabeledField/EBLabeledField.swift",
        "compose": "android/components/labeledfield/EBLabeledField.kt"
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
        "notes": "Semantic and consistent across all eight: <code>leading-icon</code>, <code>text-container</code> wrapping <code>#label</code> and <code>#value</code>, <code>action-button</code>, <code>trailing-icon</code>. Unlike its Input Field sibling, Disabled carries no leftover hidden stroke."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State</code> and <code>isFilled</code> are clean, and the four booleans use <code>true</code>/<code>false</code>. Two problems: the boolean names are inconsistent in both case and verb — <code>show LeadingIcon</code>, <code>has Label</code>, <code>show TrailingIcon</code>, <code>show LinkButton</code> mix a space-separated prefix with PascalCase — and the two Disabled variants are byte-identical, so <code>isFilled</code> buys nothing there."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Eight distinct colours across the set, none with a readable binding. Three fail contrast: the empty <code>#value</code> at 2.41:1, the resting border at 1.33:1 against the 3:1 WCAG 1.4.11 asks of an input boundary, and the Disabled <code>#value</code> at 1.40:1."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to a labelled row with optional leading, trailing and link slots — ordinary on both platforms. The four booleans become optional parameters, and <code>isFilled</code> is derived rather than passed."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Active, Error and Disabled are all present. Missing a read-only state, and nothing shows the trailing icon or link button in a pressed state — both are tappable targets with no press feedback modelled."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both icon slots take a 24 <code>Placeholder</code> instance — a vector, but a stand-in rather than a real icon, and the two ship in different greys (<code>#868686</code> leading, <code>#C2C6CF</code> trailing). The <code>action-button</code> is an EB text button: a 60 × 24 white pill holding a <code>#005CE5</code> Bold 14 label plus two hidden <code>Add_Full</code> icon slots."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Nothing registered. The axes map cleanly once the boolean names are regularised; <code>isFilled</code> should map to derived state rather than a parameter."
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
      "description": "<code>State</code> (4) × <code>isFilled</code> (2) = <strong>8 variants</strong>, every one 366 × 46 with a 6 radius. Four booleans — <code>show LeadingIcon</code>, <code>has Label</code>, <code>show TrailingIcon</code>, <code>show LinkButton</code> — ride on top of each, so the set resolves to <strong>128 configurations</strong>. Rows 7 and 8 are identical: <code>isFilled</code> changes nothing in the Disabled state.",
      "columns": [
        "#",
        "State",
        "isFilled",
        "Node",
        "Border",
        "Weight",
        "#label",
        "#value"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>Default</code>",
            "<code>true</code>",
            "<code>17758:3714</code>",
            "#D7E0EF",
            "1",
            "#0A2757",
            "#0A2757"
          ]
        },
        {
          "cells": [
            "2",
            "<code>Default</code>",
            "<code>false</code>",
            "<code>17758:3723</code>",
            "#D7E0EF",
            "1",
            "#0A2757",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "3",
            "<code>Active</code>",
            "<code>true</code>",
            "<code>17758:3732</code>",
            "#005CE5",
            "2",
            "#0A2757",
            "#0A2757"
          ]
        },
        {
          "cells": [
            "4",
            "<code>Active</code>",
            "<code>false</code>",
            "<code>17758:3741</code>",
            "#005CE5",
            "2",
            "#0A2757",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "5",
            "<code>Error</code>",
            "<code>true</code>",
            "<code>17758:3750</code>",
            "#D61B2C",
            "2",
            "#0A2757",
            "#0A2757"
          ]
        },
        {
          "cells": [
            "6",
            "<code>Error</code>",
            "<code>false</code>",
            "<code>17758:3759</code>",
            "#D61B2C",
            "2",
            "#0A2757",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "7",
            "<code>Disabled</code>",
            "<code>true</code>",
            "<code>17758:3768</code>",
            "– (none)",
            "–",
            "#90A8D0",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "8",
            "<code>Disabled</code>",
            "<code>false</code>",
            "<code>17758:3777</code>",
            "– (none)",
            "–",
            "#90A8D0",
            "#C2CFE5"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.0",
      "date": "October 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Link button read; layout model corrected · node 17758:3713",
      "rows": [
        {
          "body": "<strong>The <code>action-button</code> is readable after all.</strong> The set's own instance returns no children, but instance <code>32149:5150</code> on the canvas does: it is an EB text button — a 60 × 24 white pill holding a <code>#005CE5</code> Proxima Soft Bold 14/14 label (<code>Primary/Label/Small</code>) between two hidden <code>Add_Full</code> icon slots. The preview drew a hairline stand-in; it now draws the blue label.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Layout model corrected — there is no outer right padding and no inter-element gap.</strong> The right-hand elements stack flush to x 366 and carry their own padding: the trailing frame is 44 (8 gap + 24 icon + 12 pad) at [322, 366], the link pill 60 (8 + 44 + 8). The text container takes whatever is left. This reproduces both widths Figma reports — <strong>310</strong> in the shipped configuration and <strong>294</strong> with the link shown instead of the trailing icon — where the previous model predicted 274.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Corrected"
          }
        },
        {
          "body": "<strong>The two icon placeholders are different greys.</strong> Leading <code>#868686</code>, trailing <code>#C2C6CF</code> — same job, same row, and nothing in the set explains the split. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>The component description belongs to another component.</strong> It reads “The input field is inactive but ready for interaction, with input field for monetary value (PHP / +63)” — a monetary or mobile-number field, not a labelled row. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>The link label passes contrast at 5.73:1.</strong> <code>#005CE5</code> on white — the one text colour in the set that clears 4.5:1 besides the filled value.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Checked"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "October 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Set re-read; Style tab collapsed to one card · node 17758:3713",
      "rows": [
        {
          "body": "<strong>Style tab collapsed to a single card.</strong> Four per-state cards replaced by one whose panel mirrors the Figma property panel in its order — <code>State</code>, <code>isFilled</code>, then the four booleans at Figma's own defaults. Colours, layout and the resolved variant node all track the selection.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Layout model derived and checked against the drawn output.</strong> The content box runs 12 → 354 and the text container takes what the shown elements leave: <code>342 − 32</code> per icon <code>− 68</code> for the link. That reproduces the 310 Figma reports for the shipped configuration, and the trailing icon lands at x 330 exactly as <code>get_svg</code> draws it.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Verified"
          }
        },
        {
          "body": "<strong>Stroke weights recorded.</strong> Default <code>1</code> inside, Active and Error <code>2</code>, Disabled none — the same ramp as the Input Field sibling. Both text layers resolve to <code>Primary/Label/Light/Small</code>, matched by id and by value.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Verified"
          }
        },
        {
          "body": "<strong>The two Disabled variants are identical.</strong> Same fill, same <code>#90A8D0</code> label, same <code>#C2CFE5</code> value — <code>isFilled</code> has no effect in that state, so two of the eight variants are duplicates. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Boolean naming is inconsistent.</strong> <code>show LeadingIcon</code>, <code>has Label</code>, <code>show TrailingIcon</code>, <code>show LinkButton</code> — two verbs, a space before PascalCase, and no match with <code>isFilled</code>. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Two contrast failures recorded.</strong> The empty <code>#value</code> is <strong>2.41:1</strong> on white against a 4.5:1 minimum, and the resting border is <strong>1.33:1</strong> against the 3:1 WCAG 1.4.11 asks of an input boundary. The Disabled value sits at 1.40:1. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Content sits 2px above centre</strong> — the 24-tall row starts at y 12 in a 46-tall frame, leaving 10 below. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Unlike Input Field, Disabled carries no leftover hidden stroke.</strong> The sibling set keeps an invisible <code>#0057E4</code> stroke on its disabled variants; this one has no strokes array at all. Noted so the two are not “fixed” the same way.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Checked"
          }
        }
      ]
    },
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
