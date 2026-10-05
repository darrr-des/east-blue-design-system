import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)` in
// `public/scripts/demos/select-field.js`. The panel mirrors the property
// panel of set 17758:3786 in its order: two variant axes then the three
// booleans, at Figma's own defaults. `Chevron State` is a nested instance
// property with one value in the set, so it gets no control.
const selectFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Default',
        options: [
          { value: 'Disabled', label: 'Disabled' },
          { value: 'Error',    label: 'Error' },
          { value: 'Active',   label: 'Active' },
          { value: 'Default',  label: 'Default' },
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
      { label: 'show PesoSign', prop: 'showpesosign', control: 'toggle', defaultValue: 'true', options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ] },
      { label: 'show Flag', prop: 'showflag', control: 'toggle', defaultValue: 'true', options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ] },
      { label: 'show Trailing Icon', prop: 'showtrailingicon', control: 'toggle', defaultValue: 'true', options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ] },
    ],
  },
];

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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\"><div id=\"select-field-demo-preview\"></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sf-demo-state\" class=\"demo-panel-select\" onchange=\"updateSelectFieldDemo()\"><option value=\"Disabled\">Disabled</option><option value=\"Error\">Error</option><option value=\"Active\">Active</option><option value=\"Default\" selected=\"\">Default</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"sf-demo-isfilled\" class=\"demo-panel-select\" onchange=\"updateSelectFieldDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">show PesoSign</span><select id=\"sf-demo-peso\" class=\"demo-panel-select\" onchange=\"updateSelectFieldDemo()\"><option value=\"false\">False</option><option value=\"true\" selected=\"\">True</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">show Flag</span><select id=\"sf-demo-flag\" class=\"demo-panel-select\" onchange=\"updateSelectFieldDemo()\"><option value=\"false\">False</option><option value=\"true\" selected=\"\">True</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">show Trailing Icon</span><select id=\"sf-demo-chev\" class=\"demo-panel-select\" onchange=\"updateSelectFieldDemo()\"><option value=\"false\">False</option><option value=\"true\" selected=\"\">True</option></select></div></div></div></div>",
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
        "headline": "No expanded state — the one a select field most needs.",
        "body": "<code>Chevron State</code> offers only <code>Chevron Down</code>, so nothing in the set shows the field while its picker is open. A developer has no reference for the state the control spends half its life in.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The flag never dims.",
        "body": "Peso, value and chevron all take a Disabled colour; the flag keeps full <code>#0038A8</code> / <code>#CE1126</code> / <code>#FCD116</code> saturation. On a disabled field the brightest element is the one that still looks live.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The flag is hard-coded to the Philippines.",
        "body": "No country property anywhere in the set. Any other market means detaching the instance.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "A hidden <code>#label</code> sits on top of <code>#value</code>.",
        "body": "<code>text-container</code> holds both at the same x. <code>#label</code> is <code>Primary/Label/Light/Base</code> at <code>#0A2757</code> and is never shown — it stays full-strength navy even in Disabled, which is how you can tell it is not rendered. Nothing in the panel toggles it.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The <code>State</code> enum is ordered backwards.",
        "body": "<code>Disabled, Error, Active, Default</code>. Every sibling in the field family reads <code>Default, Active, Error, Disabled</code>. The picker shows the least-used value first.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The peso glyph is <code>#183462</code>, a navy that appears nowhere else.",
        "body": "Every text layer across the field family is <code>#0A2757</code>. The peso sign is two stops off, and the difference is visible beside the value it sits next to.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The empty value fails contrast at 2.41:1, the resting border at 1.33:1.",
        "body": "<code>#90A8D0</code> on white against 4.5:1, and <code>#D7E0EF</code> on white against the 3:1 WCAG 1.4.11 asks of an input boundary. The disabled chevron is 1.59:1.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "A full-bleed <code>container</code> frame wraps everything.",
        "body": "366 × 46, the same size as the component, holding all four children. It adds a level without doing any layout work — the only sibling in the family with one.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add an expanded state.",
        "body": "Give <code>Chevron State</code> a <code>Chevron Up</code> value and build the open variants, or document that the picker is a separate component.",
        "tag": "State"
      },
      {
        "headline": "Dim the flag in the Disabled state.",
        "body": "A desaturated or reduced-opacity flag, so no element on a disabled field reads as live.",
        "tag": "Asset"
      },
      {
        "headline": "Make the country a property.",
        "body": "An instance-swap slot or a country enum. Hard-coding PH blocks every other market.",
        "tag": "Slot"
      },
      {
        "headline": "Delete the hidden <code>#label</code> and the full-bleed <code>container</code>.",
        "body": "Neither draws anything. The label overlaps <code>#value</code> and the wrapper adds a level with no layout role.",
        "tag": "Property"
      },
      {
        "headline": "Reorder <code>State</code> to match the family.",
        "body": "<code>Default, Active, Error, Disabled</code>, as Input, Labeled and Recipient Field all read.",
        "tag": "Rename"
      },
      {
        "headline": "Bring the peso glyph onto <code>#0A2757</code>.",
        "body": "<code>#183462</code> is the only place that colour appears.",
        "tag": "Token"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "sf-spec-main",
        "demoKey": "main",
        "title": "Select Field",
        "node": "17758:3786",
        "description": "One card for the whole set: State × isFilled plus the three booleans. Every reading below tracks the selection.",
        "previewHtml": "<div id=\"select-field-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": selectFieldDemoControls,
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
                "key": "show PesoSign",
                "value": "true",
                "prop": "showpesosign"
              },
              {
                "key": "show Flag",
                "value": "true",
                "prop": "showflag"
              },
              {
                "key": "show Trailing Icon",
                "value": "true",
                "prop": "showtrailingicon"
              },
              {
                "key": "Chevron State",
                "value": "Chevron Down · nested instance",
                "mono": true
              },
              {
                "key": "Resolved variant",
                "value": "17758:3787 · 366 × 46",
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
                "key": "#value",
                "value": "#0A2757",
                "prop": "valueColor",
                "swatch": true
              },
              {
                "key": "Peso glyph",
                "value": "#183462",
                "prop": "pesoColor",
                "swatch": true
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "prop": "chevColor",
                "swatch": true
              },
              {
                "key": "Flag",
                "value": "#0038A8 / #CE1126 / #FCD116",
                "prop": "flagColor",
                "swatch": false
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
                "value": "12 left and right",
                "mono": true
              },
              {
                "key": "peso-sign",
                "value": "19 frame · 15 glyph @ x 12",
                "prop": "pesoRow",
                "mono": true
              },
              {
                "key": "text-container",
                "value": "258 × 16",
                "prop": "textW",
                "mono": true
              },
              {
                "key": "flag-container",
                "value": "25 × 16 @ x 289",
                "prop": "flagRow",
                "mono": true
              },
              {
                "key": "Chevron slot",
                "value": "32 slot @ x 322",
                "prop": "chevRow",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#value",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "#label (hidden)",
                "value": "Primary/Label/Light/Base",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">: </span>$value<span class=\"syn-punc\">,</span>\n    prefix<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.pesoSign</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on all eight variants and <code>get_svg</code> on one variant per state, which is the only way the peso and chevron glyph colours surface. No token binding could be read. The flag is the one element that keeps its colour in every state.",
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
            "role": "Default · #value",
            "token": "—",
            "values": [
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Default · peso glyph",
            "token": "—",
            "values": [
              "#183462",
              "#183462"
            ]
          },
          {
            "role": "Default · chevron",
            "token": "— · stroke 2",
            "values": [
              "#005CE5",
              "#005CE5"
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
            "role": "Active · #value",
            "token": "—",
            "values": [
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Active · peso glyph",
            "token": "—",
            "values": [
              "#183462",
              "#183462"
            ]
          },
          {
            "role": "Active · chevron",
            "token": "— · stroke 2",
            "values": [
              "#005CE5",
              "#005CE5"
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
            "role": "Error · #value",
            "token": "—",
            "values": [
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Error · peso glyph",
            "token": "—",
            "values": [
              "#183462",
              "#183462"
            ]
          },
          {
            "role": "Error · chevron",
            "token": "— · stroke 2",
            "values": [
              "#005CE5",
              "#005CE5"
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
            "role": "Disabled · #value",
            "token": "—",
            "values": [
              "#90A8D0",
              "#C2CFE5"
            ]
          },
          {
            "role": "Disabled · peso glyph",
            "token": "—",
            "values": [
              "#7E96BE",
              "#7E96BE"
            ]
          },
          {
            "role": "Disabled · chevron",
            "token": "— · stroke 2",
            "values": [
              "#9BC5FD",
              "#9BC5FD"
            ]
          },
          {
            "role": "All states · flag",
            "token": "— · never dims",
            "values": [
              "#0038A8 / #CE1126 / #FCD116",
              "#0038A8 / #CE1126 / #FCD116"
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
      "description": "Two variant axes, three booleans and one nested instance property. <code>isFilled</code> is derived from the value on both platforms rather than passed.",
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
          "figma": "<code>show PesoSign=True</code>",
          "swift": "<code>prefix: .pesoSign</code>",
          "compose": "<code>prefix = { PesoSign() }</code>"
        },
        {
          "figma": "<code>show Flag=True</code>",
          "swift": "<code>accessory: Image(…)</code>",
          "compose": "<code>accessory = { … }</code>"
        },
        {
          "figma": "<code>show Trailing Icon=True</code>",
          "swift": "<code>chevron: .down</code>",
          "compose": "<code>chevron = ChevronState.Down</code>"
        },
        {
          "figma": "<code>Chevron State</code> (nested instance)",
          "swift": "<code>.down</code> — only value in the set",
          "compose": "<code>ChevronState.Down</code> — only value in the set"
        },
        {
          "figma": "<code>#value</code> (text layer)",
          "swift": "<code>value</code> binding",
          "compose": "<code>value</code>"
        },
        {
          "figma": "366 fixed width",
          "swift": "<code>.frame(maxWidth: .infinity)</code>",
          "compose": "<code>Modifier.fillMaxWidth()</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/SelectField/EBSelectField.swift",
        "compose": "android/components/selectfield/EBSelectField.kt"
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Semantic names throughout — <code>peso-sign</code>, <code>text-container</code>, <code>flag-container</code>, <code>Chevron Down</code>. Two problems: a full-bleed <code>container</code> frame wraps everything for no layout purpose, and <code>text-container</code> holds a <code>#label</code> that is never shown and sits directly on top of <code>#value</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All 8 combinations built. The <code>State</code> enum is ordered <code>Disabled, Error, Active, Default</code> — backwards from every sibling in the family — and the booleans mix spacing conventions (<code>show PesoSign</code> vs <code>show Trailing Icon</code>). <code>Chevron State</code> offers a single value."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Ten colours, no readable binding. The peso glyph is <code>#183462</code> where every text layer in the family is <code>#0A2757</code> — a near-navy that appears nowhere else. The empty <code>#value</code> is 2.41:1 and the resting border 1.33:1."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A tappable row with a prefix, a value, an accessory and a chevron — ordinary on both platforms. The three booleans become optional parameters and the chevron a small enum."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Active, Error and Disabled are present. Missing: an expanded state. <code>Chevron State</code> offers only <code>Chevron Down</code>, so nothing in the set shows the field while its picker is open — the one state a select field most needs."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Peso and chevron are real vectors that take a Disabled colour. The flag does not: it keeps full saturation on a disabled field, which reads as an active control. It is also hard-coded to the Philippines with no country property."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Nothing registered. The shape is mappable once the State ordering and the boolean naming are regularised."
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
      "description": "<code>State</code> (4) × <code>isFilled</code> (2) = <strong>8 variants</strong>, every one 366 × 46 with a 6 radius. Three booleans — <code>show PesoSign</code>, <code>show Flag</code>, <code>show Trailing Icon</code> — ride on top of each, so the set resolves to <strong>64 configurations</strong>. <code>Chevron State</code> is a nested instance property with one value.",
      "columns": [
        "#",
        "State",
        "isFilled",
        "Node",
        "Border",
        "Weight",
        "#value",
        "Peso",
        "Chevron"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>Default</code>",
            "<code>true</code>",
            "<code>17758:3787</code>",
            "#D7E0EF",
            "1",
            "#0A2757",
            "#183462",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "2",
            "<code>Default</code>",
            "<code>false</code>",
            "<code>17758:3797</code>",
            "#D7E0EF",
            "1",
            "#90A8D0",
            "#183462",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "3",
            "<code>Active</code>",
            "<code>true</code>",
            "<code>17758:3807</code>",
            "#005CE5",
            "2",
            "#0A2757",
            "#183462",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "4",
            "<code>Active</code>",
            "<code>false</code>",
            "<code>17758:3817</code>",
            "#005CE5",
            "2",
            "#90A8D0",
            "#183462",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "5",
            "<code>Error</code>",
            "<code>true</code>",
            "<code>17758:3827</code>",
            "#D61B2C",
            "2",
            "#0A2757",
            "#183462",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "6",
            "<code>Error</code>",
            "<code>false</code>",
            "<code>17758:3837</code>",
            "#D61B2C",
            "2",
            "#90A8D0",
            "#183462",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "7",
            "<code>Disabled</code>",
            "<code>true</code>",
            "<code>17758:3847</code>",
            "– (none)",
            "–",
            "#90A8D0",
            "#7E96BE",
            "#9BC5FD"
          ]
        },
        {
          "cells": [
            "8",
            "<code>Disabled</code>",
            "<code>false</code>",
            "<code>17758:3857</code>",
            "– (none)",
            "–",
            "#C2CFE5",
            "#7E96BE",
            "#9BC5FD"
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
      "header": "Set re-read; Style tab collapsed to one card · node 17758:3786",
      "rows": [
        {
          "body": "<strong>Style tab collapsed to a single card.</strong> Four per-state cards replaced by one whose panel mirrors the Figma property panel in its order — <code>State</code>, <code>isFilled</code>, then the three booleans at Figma's own defaults. Every colour and position tracks the selection.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Glyph colours recovered from the drawn output.</strong> The peso and chevron fills are not in the layer tree — both sit inside icon instances the plugin returns empty. <code>get_svg</code> on one variant per state gives them: peso <code>#183462</code>, chevron <code>#005CE5</code>, dimming to <code>#7E96BE</code> and <code>#9BC5FD</code> when Disabled.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Documented"
          }
        },
        {
          "body": "<strong>Geometry recorded.</strong> 366 × 46, radius 6, padding 12 left and right; <code>peso-sign</code> 19 at x 12, <code>text-container</code> 258 at x 31, <code>flag-container</code> 33 at x 289 holding a 25 × 16 flag, chevron slot 32 at x 322 with a 14-wide stroked glyph centred at x 338. Stroke ramp matches the family: Default <code>1</code>, Active and Error <code>2</code>, Disabled none.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Verified"
          }
        },
        {
          "body": "<strong>No expanded state.</strong> <code>Chevron State</code> offers only <code>Chevron Down</code>, so nothing in the set shows the field with its picker open. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>The flag never dims.</strong> Peso, value and chevron all take a Disabled colour; the flag keeps full saturation, so the brightest thing on a disabled field is the one that still looks live. It is also hard-coded to PH with no country property. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>A hidden <code>#label</code> sits on top of <code>#value</code>.</strong> Same x, never shown, and it stays full-strength <code>#0A2757</code> even in Disabled — which is how you can tell it is not rendered. A full-bleed <code>container</code> frame also wraps everything without doing any layout work. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>The <code>State</code> enum is ordered <code>Disabled, Error, Active, Default</code></strong> — backwards from every sibling in the field family. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>The peso glyph is <code>#183462</code></strong>, a navy that appears nowhere else; every text layer in the family is <code>#0A2757</code>. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        }
      ]
    },
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
