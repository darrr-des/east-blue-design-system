import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/checkbox.js`.
const checkboxDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Default',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Pressed', label: 'Pressed' },
          { value: 'Focused', label: 'Focused' },
          { value: 'Disabled', label: 'Disabled' },
          { value: 'Error', label: 'Error' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'medium',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
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
        "body": "Composes Checkbox + Label (<code>HeyMeow Rnd Bold</code>) + Description (<code>BarkAda Medium</code>). 4 variants: <code>isSelected</code> (true/false) × <code>Size</code> (Small 14px label / Medium 18px label). Node: <code>17734:161220</code>. <span class=\"tag-fixed\">Created</span>",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "cb-spec-unchecked",
        "demoKey": "unchecked",
        "demoControls": checkboxDemoControls,
        "title": "Unchecked",
        "node": "17143:2471",
        "description": "Empty container with border stroke. Represents a deselected option.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "isSelected", "value": "false" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Size", "value": "Medium", "prop": "size" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "main/checkbox/color/default/unselected/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Size", "value": "20 × 20px", "mono": true },
              { "key": "Corner radius", "value": "4px (radius-1)", "mono": true },
              { "key": "Border width", "value": "2px", "mono": true },
              { "key": "Hit target", "value": "44 × 44 (mobile)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "—", "value": "icon-only control" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCheckbox</span><span class=\"syn-punc\">(</span>isSelected<span class=\"syn-punc\">: </span>$checked<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCheckbox</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> checked<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-unchecked-preview\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><rect x=\"1\" y=\"1\" width=\"18\" height=\"18\" rx=\"3\" stroke=\"#D7E0EF\" stroke-width=\"2\"></rect></svg></div>"
      },
      {
        "cardKey": "cb-spec-checked",
        "demoKey": "checked",
        "demoControls": checkboxDemoControls,
        "title": "Checked",
        "node": "17143:2473",
        "description": "Filled container with white checkmark. Represents a selected option. Checkmark is rendered via a separable <code>icon-check</code> child layer.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "isSelected", "value": "true" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Size", "value": "Medium", "prop": "size" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container bg", "value": "#1972F9", "token": "main/checkbox/color/default/selected/bg" },
              { "key": "Checkmark", "value": "#FFFFFF", "token": "main/checkbox/color/default/selected/check" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Size", "value": "20 × 20px", "mono": true },
              { "key": "Corner radius", "value": "4px (radius-1)", "mono": true },
              { "key": "Border width", "value": "None (filled)", "mono": true },
              { "key": "Hit target", "value": "44 × 44 (mobile)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "—", "value": "icon-only control" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCheckbox</span><span class=\"syn-punc\">(</span>isSelected<span class=\"syn-punc\">: </span>$checked<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCheckbox</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> checked<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-checked-preview\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><rect width=\"20\" height=\"20\" rx=\"4\" fill=\"#1972F9\"></rect><path d=\"M6 10L9 13L15 7\" stroke=\"white\" stroke-width=\"2.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All interaction states now have defined colors. Token paths follow <code>main/checkbox/color/{state}/{role}</code> convention.",
        "columns": [
          "Token",
          "DEFAULT",
          "PRESSED",
          "DISABLED",
          "ERROR"
        ],
        "rows": [
          {
            "role": "Unchecked",
            "token": "Border",
            "values": [
              "unselected/border",
              "#D7E0EF",
              "#1972F9",
              "#D7E0EF",
              "#D81E1E"
            ]
          },
          {
            "role": "Unchecked",
            "token": "Container bg",
            "values": [
              "unselected/bg",
              "–",
              "#EBF2FF",
              "–",
              "–"
            ]
          },
          {
            "role": "Checked",
            "token": "Container bg",
            "values": [
              "selected/bg",
              "#1972F9",
              "#0F57C8",
              "#9BC5FD",
              "#D81E1E"
            ]
          },
          {
            "role": "Checked",
            "token": "Checkmark",
            "values": [
              "selected/icon-check",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Indeterminate",
            "token": "Container bg",
            "values": [
              "indeterminate/bg",
              "#1972F9",
              "–",
              "–",
              "–"
            ]
          },
          {
            "role": "Indeterminate",
            "token": "Dash icon",
            "values": [
              "indeterminate/icon",
              "#FFFFFF",
              "–",
              "–",
              "–"
            ]
          },
          {
            "role": "Focused",
            "token": "Border",
            "values": [
              "focused/border",
              "#1972F9 (all isSelected values)"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Or in Package.swift:</span>\n.<span class=\"fn\">package</span>(\n    <span class=\"prp\">url</span>: <span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>,\n    <span class=\"prp\">from</span>: <span class=\"str\">\"2.0.0\"</span>\n)"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"cmt\">// build.gradle.kts (app)</span>\n<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:checkbox:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.checkbox.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. API shape is final — native implementation is pending."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "isSelected",
          "swift": "isOn: Binding&lt;Bool&gt;",
          "compose": "checked: Boolean"
        },
        {
          "figma": "isSelected = indeterminate",
          "swift": "toggleIndeterminate",
          "compose": "TriStateCheckbox"
        },
        {
          "figma": "Size",
          "swift": ".controlSize()",
          "compose": "size = EBCheckboxSize.*"
        },
        {
          "figma": "State = Disabled",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "State = Pressed",
          "swift": "—",
          "compose": "interactionSource"
        },
        {
          "figma": "State = Focused",
          "swift": ".focused()",
          "compose": "interactionSource"
        },
        {
          "figma": "State = Error",
          "swift": ".ebError(true)",
          "compose": "isError = true"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Checkbox/EBCheckbox.swift",
        "compose": "android/components/checkbox/EBCheckbox.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Unchecked",
        "swift": "<span class=\"cmt\">// Unchecked (default state)</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: $isSelected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n\n<span class=\"cmt\">// Small size</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: $isSelected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">mini</span>)",
        "compose": "<span class=\"cmt\">// Unchecked (default state)</span>\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">onCheckedChange</span> = { isSelected = it },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBCheckboxSize</span>.Medium\n)\n\n<span class=\"cmt\">// Small size</span>\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">onCheckedChange</span> = { isSelected = it },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBCheckboxSize</span>.Small\n)"
      },
      {
        "subheading": "Checked",
        "swift": "<span class=\"cmt\">// Checked (selected state)</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: .<span class=\"fn\">constant</span>(<span class=\"kw\">true</span>))\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n\n<span class=\"cmt\">// Bound to state</span>\n@<span class=\"typ\">State</span> <span class=\"kw\">private var</span> isChecked = <span class=\"kw\">true</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: $isChecked)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// Checked (selected state)</span>\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = <span class=\"kw\">true</span>,\n    <span class=\"prp\">onCheckedChange</span> = { isSelected = it },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBCheckboxSize</span>.Medium\n)\n\n<span class=\"cmt\">// Bound to state</span>\n<span class=\"kw\">var</span> isChecked <span class=\"kw\">by</span> <span class=\"fn\">remember</span> { <span class=\"fn\">mutableStateOf</span>(<span class=\"kw\">true</span>) }\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = isChecked,\n    <span class=\"prp\">onCheckedChange</span> = { isChecked = it }\n)"
      },
      {
        "subheading": "Indeterminate",
        "swift": "<span class=\"cmt\">// Indeterminate (partial selection)</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: $isSelected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n    .<span class=\"fn\">toggleIndeterminate</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Indeterminate (partial selection)</span>\n<span class=\"typ\">TriStateCheckbox</span>(\n    <span class=\"prp\">state</span> = <span class=\"typ\">ToggleableState</span>.Indeterminate,\n    <span class=\"prp\">onClick</span> = { <span class=\"cmt\">/* cycle state */</span> },\n    <span class=\"prp\">modifier</span> = <span class=\"typ\">Modifier</span>.<span class=\"fn\">size</span>(<span class=\"typ\">EBCheckboxSize</span>.Medium)\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// Disabled unchecked</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: $isSelected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Disabled checked</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: .<span class=\"fn\">constant</span>(<span class=\"kw\">true</span>))\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Disabled unchecked</span>\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">onCheckedChange</span> = {},\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBCheckboxSize</span>.Medium\n)\n\n<span class=\"cmt\">// Disabled checked</span>\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = <span class=\"kw\">true</span>,\n    <span class=\"prp\">onCheckedChange</span> = {},\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBCheckboxSize</span>.Medium\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"cmt\">// Error state (form validation)</span>\n<span class=\"typ\">EBCheckbox</span>(<span class=\"prp\">isOn</span>: $isSelected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Error state (form validation)</span>\n<span class=\"typ\">EBCheckbox</span>(\n    <span class=\"prp\">checked</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">onCheckedChange</span> = { isSelected = it },\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBCheckboxSize</span>.Medium\n)"
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
        "ios": "<code>.accessibilityLabel(\"Accept terms\")</code>",
        "android": "<code>semantics { contentDescription = \"Accept terms\" }</code>"
      },
      {
        "requirement": "Checked state announcement",
        "ios": "VoiceOver reads \"checked\" / \"unchecked\" automatically via Toggle",
        "android": "TalkBack reads state automatically via Checkbox semantics"
      },
      {
        "requirement": "Indeterminate",
        "ios": "<code>toggleIndeterminate</code> reads \"mixed\"",
        "android": "<code>TriStateCheckbox</code> reads \"partially checked\""
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pair with a visible label adjacent to the checkbox. Checkboxes must always have associated text.",
        "dontText": "Use for a single binary toggle — use Switch/Toggle instead. Checkboxes are for multi-select scenarios."
      },
      {
        "doText": "Use for multi-select scenarios — forms, filter lists, settings, and select-all patterns.",
        "dontText": "Use a standalone Checkbox without an accessible label. Pair with CheckboxItem or an adjacent text label for form use."
      },
      {
        "doText": "Expand touch area via padding when using Small (16px) size — minimum touch target is 44pt / 48dp.",
        "dontText": "Omit an accessible label. Use .accessibilityLabel / contentDescription when no visible label is present."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Root frame named <code>container</code>. Simple, semantic hierarchy. No generic layer names."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isSelected</code> now uses <code>true/false</code> — corrected in Figma. Maps directly to Swift <code>Bool</code> / Kotlin <code>Boolean</code>. <code>indeterminate</code> property is a C5 concern (missing state variant)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All states have defined color values. Default, Pressed, Disabled, Error, Focused, and Indeterminate containers use distinct fills/strokes. Separable <code>icon-check</code> and <code>icon-indeterminate</code> layers present."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>Toggle(.checkbox)</code> / <code>Checkbox</code>. Indeterminate maps to <code>TriStateCheckbox</code>. Label pairing via <code>CheckboxItem</code> compound component."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 5 interaction states defined (Default, Pressed, Focused, Disabled, Error) × isSelected (true/false) × 3 sizes. Indeterminate added as <code>isSelected=indeterminate</code> with <code>icon-indeterminate</code> dash layer. 33 total variants."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Checkmark rebuilt as a separable <code>icon-check</code> child vector layer inside each checked container. Can be tinted via <code>selected/icon-check</code> token and swapped natively."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All structural blockers resolved (C2, C5, C6). Ready for CLI mapping registration. No mappings registered yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>isSelected=true/false</code> — maps directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code>"
      },
      {
        "aspect": "Icon/asset quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>icon-check</code> is now a named, separable child layer — can be mapped to a native icon slot via Code Connect"
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All interaction states defined — Default, Pressed, Focused, Disabled, Error, plus Indeterminate"
      },
      {
        "aspect": "Usage descriptions",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 33 variants have usage descriptions attached in Figma"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBCheckbox.swift / EBCheckbox.kt not yet created"
      }
    ],
    "variants": {
      "total": 33,
      "description": "5 <code>State</code> × 3 <code>isSelected</code> × 3 <code>Size</code> = 45 theoretical. <code>isSelected=indeterminate</code> only ships <code>State=Default</code>, so actual count is (5 × 2 × 3) + (1 × 1 × 3) = <strong>33 variants</strong>.",
      "columns": [
        "isSelected",
        "States",
        "Sizes",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>false</strong>",
            "Default, Pressed, Focused, Disabled, Error",
            "Small, Medium, Large",
            "15"
          ]
        },
        {
          "cells": [
            "<strong>true</strong>",
            "Default, Pressed, Focused, Disabled, Error",
            "Small, Medium, Large",
            "15"
          ]
        },
        {
          "cells": [
            "<strong>indeterminate</strong>",
            "Default only",
            "Small, Medium, Large",
            "3"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.5.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Compound Component + Cleanup · node 17734:161220",
      "rows": [
        {
          "body": "<strong>CheckboxItem compound component created</strong> — 4 variants: isSelected (true/false) × Size (Small/Medium). Each contains a real Checkbox instance + Label (<code>HeyMeow Rnd Bold</code>, 14px/18px) + Description (<code>BarkAda Medium</code>, 12px). Wraps atomic Checkbox with label pairing for accessible form use.\n          <span class=\"tag-fixed\">Created</span>",
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
