import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)` in
// `public/scripts/demos/recipient-field.js`. The panel mirrors the property
// panel of set 17758:3867: two variant axes and nothing else. The set
// defines no booleans and no slots.
const recipientFieldDemoControls: DemoControlSection[] = [
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\"><div id=\"recipient-field-demo-preview\"></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"rf-demo-state\" class=\"demo-panel-select\" onchange=\"updateRecipientFieldDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Active\">Active</option><option value=\"Error\">Error</option><option value=\"Disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"rf-demo-isfilled\" class=\"demo-panel-select\" onchange=\"updateRecipientFieldDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
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
        "headline": "The two trailing actions have no property at all.",
        "body": "<code>icon-group</code> draws two 32 circles in all eight variants. Nothing names them, nothing distinguishes them, and nothing turns either off — so a field that needs one action, or none, cannot be expressed. Its siblings <a href=\"/components/labeled-field\">Labeled Field</a> and <a href=\"/components/input-field\">Input Field</a> handle the same problem three different ways.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>isFilled=true</code> shows no recipient.",
        "body": "<code>#value</code> reads “Placeholder” in all eight variants; the flag only darkens it from <code>#90A8D0</code> to <code>#0A2757</code>. The same gap as Input Field.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The empty value fails contrast at 2.41:1.",
        "body": "<code>#90A8D0</code> on white against a 4.5:1 minimum — and here it is the recipient line, the most important text in the component.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The resting border fails non-text contrast at 1.33:1.",
        "body": "<code>#D7E0EF</code> on white, against the 3:1 WCAG 1.4.11 asks of an input boundary. Active and Error pass.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Disabled carries a hidden <code>#D6DDE9</code> stroke.",
        "body": "Present on the node, visibility off. Across the family this is the third different answer: Input Field hides <code>#0057E4</code>, Labeled Field has no stroke array at all, and this one hides <code>#D6DDE9</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The icon gap is 4 where the family uses 8.",
        "body": "The two circles sit 4 apart. Every other gap in the field family — and in Labeled Field's icon frames — is 8.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "No token bindings readable.",
        "body": "Seven colours across the set, none resolving to a variable through the plugin.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Give the two actions properties, and name them.",
        "body": "At minimum <code>hasPrimaryAction</code> / <code>hasSecondaryAction</code> booleans and real layer names. Better still, align the whole field family on one trailing-slot pattern instead of three.",
        "tag": "Slot"
      },
      {
        "headline": "Make <code>isFilled=true</code> show a recipient.",
        "body": "A name or number in the filled variants, so the difference between states is visible rather than inferred from a colour shift.",
        "tag": "State"
      },
      {
        "headline": "Darken the empty value and the resting border.",
        "body": "The value needs 4.5:1 and the border 3:1.",
        "tag": "Token"
      },
      {
        "headline": "Delete the hidden stroke on the Disabled variants.",
        "body": "<code>#D6DDE9</code>, invisible, and the only place that colour appears.",
        "tag": "Token"
      },
      {
        "headline": "Use 8 for the icon gap.",
        "body": "4 is the only such value in the family.",
        "tag": "Token"
      },
      {
        "headline": "Settle one trailing-affordance pattern across the field family.",
        "body": "Input Field has no slot, Labeled Field has three booleans and a link button, Recipient Field has two unnamed always-on circles. One pattern would let all three share a native signature.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "rf-spec-main",
        "demoKey": "main",
        "title": "Recipient Field",
        "node": "17758:3867",
        "description": "One card for the whole set: State × isFilled. Every reading below tracks the selection.",
        "previewHtml": "<div id=\"recipient-field-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": recipientFieldDemoControls,
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
                "key": "Resolved variant",
                "value": "17758:3868 · 366 × 56",
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
                "key": "Icon placeholder",
                "value": "#C2C6CF",
                "prop": "iconFill",
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
                "value": "366 × 56",
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
                "value": "12 all sides",
                "mono": true
              },
              {
                "key": "text-container",
                "value": "274 × 32 @ (12, 12)",
                "mono": true
              },
              {
                "key": "Label → value gap",
                "value": "6",
                "mono": true
              },
              {
                "key": "icon-group",
                "value": "68 × 32 @ x 286",
                "mono": true
              },
              {
                "key": "Icons",
                "value": "2 × 32 circle, gap 4",
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
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "#value",
                "value": "Primary/Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">: </span>$value\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRecipientField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> value <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on all eight variants, with stroke weights and drawn positions confirmed by <code>get_svg</code>. No token binding could be read. Disabled draws no border, but the stroke is still present on the node — <code>#D6DDE9</code>, switched off.",
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
            "token": "— · hidden #D6DDE9",
            "values": [
              "– (hidden)",
              "– (hidden)"
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
              "#90A8D0",
              "#C2CFE5"
            ]
          },
          {
            "role": "All states · icon placeholder",
            "token": "— · 32 circle × 2",
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
      "description": "Two variant axes and nothing else. The two trailing actions are always drawn and have no property, so the native API has to invent the slot the set does not model.",
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
          "figma": "<code>#label</code> (text layer)",
          "swift": "<code>label</code> argument",
          "compose": "<code>label</code> argument"
        },
        {
          "figma": "<code>#value</code> (text layer)",
          "swift": "<code>value</code> binding",
          "compose": "<code>value</code> + <code>onValueChange</code>"
        },
        {
          "figma": "<code>icon-group</code> — 2 × 32, no property",
          "swift": "<code>actions: […]</code> — native only",
          "compose": "<code>actions = { … }</code> — native only"
        },
        {
          "figma": "366 fixed width",
          "swift": "<code>.frame(maxWidth: .infinity)</code>",
          "compose": "<code>Modifier.fillMaxWidth()</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/RecipientField/EBRecipientField.swift",
        "compose": "android/components/recipientfield/EBRecipientField.kt"
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Clean and consistent: <code>text-container</code> holding <code>#label</code> and <code>#value</code>, and <code>icon-group</code> holding two <code>Placeholder</code> instances. One leftover: the Disabled variants keep a <code>#D6DDE9</code> stroke with visibility switched off."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State</code> and <code>isFilled</code> are clean and all 8 combinations are built. But <code>#value</code> reads “Placeholder” in every variant, so <code>isFilled=true</code> never shows a recipient — only a darker placeholder."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Seven colours, no readable binding. The empty <code>#value</code> is 2.41:1 and the resting border 1.33:1 — both below their WCAG thresholds."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The two-line label-over-value row maps cleanly to a native text field with a caption. The gap is the <code>icon-group</code>: two 32 tap targets with no property, no naming and no way to turn either off, so the native signature has to invent the slot."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Active, Error and Disabled all present. Missing a read-only state, and the two icons are tap targets with no press feedback modelled anywhere."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both icons are 32 <code>Placeholder</code> instances — vectors, but flat <code>#C2C6CF</code> stand-ins. Nothing distinguishes the two, so what each is for is unreadable from the set."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Nothing registered. The two axes map cleanly; the unmodelled icon group is what blocks a complete mapping."
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
      "description": "<code>State</code> (4) × <code>isFilled</code> (2) = <strong>8 variants</strong>, every one 366 × 56 with a 6 radius. No booleans and no slots — the two 32 trailing circles are drawn in all eight and nothing turns either off.",
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
            "<code>17758:3868</code>",
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
            "<code>17758:3875</code>",
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
            "<code>17758:3882</code>",
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
            "<code>17758:3889</code>",
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
            "<code>17758:3896</code>",
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
            "<code>17758:3903</code>",
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
            "<code>17758:3910</code>",
            "– (hidden)",
            "–",
            "#90A8D0",
            "#90A8D0"
          ]
        },
        {
          "cells": [
            "8",
            "<code>Disabled</code>",
            "<code>false</code>",
            "<code>17758:3917</code>",
            "– (hidden)",
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
      "version": "2.0.0",
      "date": "October 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Set re-read; Style tab collapsed to one card · node 17758:3867",
      "rows": [
        {
          "body": "<strong>Style tab collapsed to a single card.</strong> Four per-state cards replaced by one whose panel mirrors the Figma property panel: <code>State</code> and <code>isFilled</code>, nothing else. Colours and the resolved variant node track the selection across all 8 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Geometry recorded from the set.</strong> 366 × 56, radius 6, padding 12 on all four sides — symmetric, unlike Labeled Field. <code>text-container</code> 274 × 32 at (12, 12) with a 6 gap between <code>#label</code> and <code>#value</code>; <code>icon-group</code> 68 × 32 at x 286 holding two 32 circles. Confirmed against the drawn output: the circles land at x 286 and x 322.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Verified"
          }
        },
        {
          "body": "<strong>Text styles resolved.</strong> <code>#label</code> is <code>Primary/Label/Light/Fine</code> (12/12 @ 0.5) and <code>#value</code> <code>Primary/Label/Light/Small</code> (14/14 @ 0.25) — both matched by id and by value. Stroke ramp matches the family: Default <code>1</code> inside, Active and Error <code>2</code>, Disabled none.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Verified"
          }
        },
        {
          "body": "<strong>The two trailing actions have no property.</strong> <code>icon-group</code> draws two 32 circles in every variant; nothing names them, distinguishes them or turns either off. A field needing one action, or none, cannot be expressed. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Two contrast failures.</strong> The empty <code>#value</code> is <strong>2.41:1</strong> on white — and here it is the recipient line — and the resting border is <strong>1.33:1</strong> against the 3:1 WCAG 1.4.11 asks of an input boundary. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Disabled carries a hidden <code>#D6DDE9</code> stroke.</strong> Across the field family this is the third different answer — Input Field hides <code>#0057E4</code>, Labeled Field has no stroke array at all. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>The icon gap is 4 where the family uses 8.</strong> <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        }
      ]
    },
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
