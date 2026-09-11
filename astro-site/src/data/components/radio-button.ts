import type { ComponentData, DemoControlSection } from '../types';

/* Panel mirrors the Figma property panel of component set 26184:2588,
   in panel order. `Style` is the driving property — it makes the two
   cards, so it is not a control. Constraints for the combinations Figma
   does not build live in public/scripts/demos/radio-button.js. */
const radioButtonDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'default',
        options: [
          { value: 'check', label: 'Check' },
          { value: 'default', label: 'Default' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'large',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
      {
        label: 'isSelected',
        prop: 'isSelected',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'isError',
        prop: 'isError',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];


export const radioButton: ComponentData = {
  "meta": {
    "slug": "radio-button",
    "name": "Radio Button",
    "node": "26184:2588",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26184-2588",
    "description": "A circular radio control for single-select groups. 39 variants across <code>Style</code> (Default/Check) × <code>State</code> (Default/Pressed/Disabled) × <code>Size</code> (Large/Medium/Small) × <code>isSelected</code> × <code>isError</code>.",
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
    "navGroup": "Radio",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — structurally clean",
      "text": "The v2.0 rebuild resolved every structural issue: orthogonal axes (<code>Style</code> × <code>State</code> × <code>Size</code> × <code>isSelected</code> × <code>isError</code>), vector ring + dot at all three sizes, semantic layer names, a real <code>Pressed</code> state, and <code>Disabled</code> + unselected coverage. Pressed now folds into <code>State</code> and error is an orthogonal <code>isError</code> boolean — matching Button v4.0 and Select Item. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Radio Buttons appear in Radio Button with Label groups — see the Radio Button with Label preview for the composed form row.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"rb-demo-preview\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">selected</span><select class=\"demo-panel-select\" id=\"rb-demo-selected\" onchange=\"updateRadioButtonDemo()\"><option value=\"unselected\" selected=\"\">unselected</option><option value=\"selected\">selected</option><option value=\"disabled\">disabled</option><option value=\"error\">error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" id=\"rb-demo-size\" onchange=\"updateRadioButtonDemo()\"><option value=\"large\" selected=\"\">large</option><option value=\"small\">small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">style</span><select class=\"demo-panel-select\" id=\"rb-demo-style\" onchange=\"updateRadioButtonDemo()\"><option value=\"default\" selected=\"\">default</option><option value=\"filled\">filled</option><option value=\"checkmark\">checkmark</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works across forms, surveys, preference pickers, and single-select list rows. Three sizes (24 / 20 / 16) cover the Large, Medium, and Small text scales, and the Check style extends it to iOS-style picker rows without a second component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Every size is built from layered vectors — <code>container</code> → <code>circle</code> (fill) + <code>ring</code> (stroke) — so tokens propagate to all three. Carries its own selection, error, and interaction styling; the raster <code>imgContainer</code> export is gone."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Five orthogonal props — <code>Style</code> × <code>State</code> × <code>Size</code> × <code>isSelected</code> × <code>isError</code>. No conditional axes and no invalid combinations: pressed lives in <code>State</code> alongside Disabled, error is its own boolean, and booleans are lowercase <code>true</code>/<code>false</code>. Matches Button v4.0 and Select Item."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Nests inside Radio Button – With Label, which mirrors this schema exactly — same props, same order, same 39 variants. Layers are semantic (<code>container</code> / <code>circle</code> / <code>ring</code>) and the Check style is a vector icon instance rather than a drawn shape."
      }
    ],
    "behavior": [
      {
        "state": "Default (unselected)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isSelected=false",
        "notes": "Empty ring. Resting state for every unpicked option in a group."
      },
      {
        "state": "Selected",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isSelected=true",
        "notes": "Brand ring + inner dot, both <code>#005CE5</code>. Exactly one option per group carries this."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Ring and dot darken to <code>#2340A9</code>. Combines with either <code>isSelected</code> value. Derived at runtime from the touch interaction — not a parameter you pass."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted ring and dot. Ships at both <code>isSelected</code> values, so a disabled group can render its unselected options."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "isError=true",
        "notes": "Ring and dot switch to <code>#D61B2C</code>. Orthogonal to <code>State</code> — combines with Default and Pressed."
      },
      {
        "state": "Selected — check style",
        "ios": "yes",
        "android": "yes",
        "property": "Style=Check, isSelected=true",
        "notes": "Filled circle + vector checkmark instead of a dot. For single-select list rows; only meaningful when selected."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Variant matrix restructured into orthogonal axes — <code>Style</code> (Default/Check) × <code>State</code> (Default/Pressed/Disabled) × <code>Size</code> (Large/Medium/Small) × <code>isSelected</code> × <code>isError</code>. <code>selected</code> no longer conflates selection with modifier states, and no property is conditional on another. (C2)"
      },
      {
        "body": "v2.0: Pressed folded into <code>State</code>, error split into an orthogonal <code>isError</code> boolean — removes the illegal <code>Disabled + Pressed</code> combination the old two-axis model allowed, and matches the Button v4.0 / Select Item pattern. (C2/C4)"
      },
      {
        "body": "v2.0: Large radio rebuilt as layered vectors — <code>container</code> → <code>circle</code> (ELLIPSE fill) + <code>ring</code> (ELLIPSE stroke), both on <code>#005CE5</code>. The pre-rendered <code>imgContainer</code> raster is gone, so token changes now propagate to every size. (C3)"
      },
      {
        "body": "v2.0: Misleading <code>.base/checkbox</code> frame renamed — layers are now <code>container</code> / <code>circle</code> / <code>ring</code>. (C6)"
      },
      {
        "body": "v2.0: Pressed state added — <code>State=Pressed</code> covers touch feedback across Default, Check, and error variants (<code>#2340A9</code>). Focused is N/A on mobile: touch has no focus ring. (C5)"
      },
      {
        "body": "v2.0: <code>Disabled</code> + <code>isSelected=false</code> added at all three sizes — a disabled radio group can now render its unselected options, which was previously impossible. (C5)"
      },
      {
        "body": "v2.0: Boolean variant values lowercased to <code>true</code>/<code>false</code>, matching the C2 convention. (C2)"
      },
      {
        "body": "v2.0: Checkmark promoted to a vector icon instance (<code>Checkmark</code> → <code>Grid</code>) rather than a drawn shape. (C6)"
      },
      {
        "body": "v2.0: <code>Disabled</code> deliberately excludes <code>isError</code> — confirmed as an intentional omission, not a gap. A locked control offers the user no path to resolve a validation error, so the combination has no affordance and ships no variants. (C5)"
      },
      {
        "body": "v2.0: <code>Style=Check</code> confirmed as intentional — retained rather than retired, now shipping as a vector icon instance with full Default / Pressed / Disabled coverage. Usage guidance added to disambiguate it from Checkbox. (C6)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Previously blocked by the sparse matrix and the raster large radio — both resolved in v2.0. Registration is now unblocked, but the SwiftUI / Compose mappings are not yet wired.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBRadioButton</code>.",
        "body": "With the orthogonal axes, vector rebuild, and state coverage all shipped, wire the Figma properties (Style, State, Size, isSelected, isError) 1:1 to the SwiftUI / Compose API. Note <code>isSelected</code>/<code>isError</code> are variant enums, so Code Connect maps them via <code>figma.enum()</code> → <code>Bool</code>.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Split properties into orthogonal axes.",
        "body": "v2.0: Applied — and taken further than proposed. <code>Style</code> × <code>State</code> × <code>Size</code> × <code>isSelected</code> × <code>isError</code>, with pressed folded into <code>State</code> and error split out as its own boolean. No invalid combinations remain.",
        "tag": "Property"
      },
      {
        "headline": "Rebuild the large radio as vector layers.",
        "body": "v2.0: Applied — every size is now <code>container</code> → <code>circle</code> + <code>ring</code> vector ellipses. Tokens flow to all three sizes.",
        "tag": "Asset"
      },
      {
        "headline": "Rename the internal frame.",
        "body": "v2.0: Applied — <code>.base/checkbox</code> is gone; layers are <code>container</code> / <code>circle</code> / <code>ring</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Add pressed states.",
        "body": "v2.0: Applied — <code>State=Pressed</code> maps touch feedback to <code>#2340A9</code>. Focused was dropped as N/A on mobile.",
        "tag": "State"
      },
      {
        "headline": "Document when to use Check vs Default.",
        "body": "v2.0: Applied — the Check style was reviewed and deliberately retained rather than retired. Usage guidance now disambiguates it from Checkbox: Check for single-select list rows, Default (filled dot) for forms where real Checkboxes appear alongside.",
        "tag": "Docs"
      },
      {
        "headline": "Record <code>Disabled + isError</code> as an intentional omission.",
        "body": "v2.0: Applied — reviewed and confirmed deliberate. A locked control offers no path to resolve a validation error, so the combination ships no variants by design.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "rb-spec-main",
        "demoKey": "main",
        "title": "Radio Button",
        "node": "26184:2588",
        "description": "",
        "previewHtml": "<div id=\"radio-button-spec-main\" class=\"spec-preview-body\"><svg width=\"72\" height=\"72\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"10.5\" stroke=\"#D7E0EF\" stroke-width=\"3\"/></svg></div>",
        demoControls: radioButtonDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style",      "value": "Default", "prop": "style" },
              { "key": "State",      "value": "Default", "prop": "state" },
              { "key": "Size",       "value": "Large",   "prop": "size" },
              { "key": "isSelected", "value": "false",   "prop": "isSelected" },
              { "key": "isError",    "value": "false",   "prop": "isError" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Ring", "value": "#D7E0EF", "token": "main/radio-button/color/default/unselected/border",
                "variants": {
                  "style:check":                                            { "hide": true },
                  "style:default|state:pressed":                            { "value": "#ADBDDC" },
                  "style:default|state:disabled":                           { "value": "#D7E0EF @ 40%" },
                  "style:default|isSelected:true":                          { "value": "#005CE5", "token": "main/radio-button/color/default/selected/border" },
                  "style:default|state:pressed|isSelected:true":            { "value": "#2340A9" },
                  "style:default|state:disabled|isSelected:true":           { "value": "#9BC5FD" },
                  "style:default|isError:true":                             { "value": "#D61B2C", "token": "main/radio-button/color/error/unselected/border" },
                  "style:default|state:pressed|isError:true":               { "value": "#B50707" },
                  "style:default|isSelected:true|isError:true":             { "value": "#D61B2C", "token": "main/radio-button/color/error/selected/border" },
                  "style:default|state:pressed|isSelected:true|isError:true": { "value": "#B50707" }
                }
              },
              {
                "key": "Dot", "value": "#005CE5", "token": "main/radio-button/color/default/selected/bg",
                "variants": {
                  "style:check":                                            { "hide": true },
                  "isSelected:false":                                       { "hide": true },
                  "style:default|state:pressed|isSelected:true":            { "value": "#2340A9" },
                  "style:default|state:disabled|isSelected:true":           { "value": "#9BC5FD" },
                  "style:default|isSelected:true|isError:true":             { "value": "#D61B2C", "token": "main/radio-button/color/error/selected/bg" },
                  "style:default|state:pressed|isSelected:true|isError:true": { "value": "#B50707" }
                }
              },
              {
                "key": "Disc", "value": "#005CE5", "token": "main/radio-button/color/default/selected/bg",
                "variants": {
                  "style:default":               { "hide": true },
                  "style:check|state:pressed":   { "value": "#2340A9" },
                  "style:check|state:disabled":  { "value": "#9BC5FD" }
                }
              },
              {
                "key": "Checkmark", "value": "#FFFFFF", "token": "main/radio-button/color/default/selected/icon",
                "variants": { "style:default": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text layers", "value": "None — the control renders no text" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height",    "value": "24px", "mono": true,
                "variants": { "size:medium": { "value": "20px" }, "size:small": { "value": "16px" } } },
              { "key": "Width",     "value": "24px", "mono": true,
                "variants": { "size:medium": { "value": "20px" }, "size:small": { "value": "16px" } } },
              { "key": "Radius",    "value": "Full — the ring is an ELLIPSE", "mono": true,
                "variants": {
                  "style:check|size:large":  { "value": "14.4px — clamps to a circle" },
                  "style:check|size:medium": { "value": "12px — clamps to a circle" },
                  "style:check|size:small":  { "value": "8px — clamps to a circle" }
                } },
              { "key": "Padding H", "value": "0", "mono": true,
                "variants": {
                  "style:check|size:large":  { "value": "4px" },
                  "style:check|size:medium": { "value": "2px" },
                  "style:check|size:small":  { "value": "2px" }
                } },
              { "key": "Padding V", "value": "0", "mono": true,
                "variants": {
                  "style:check|size:large":  { "value": "4px" },
                  "style:check|size:medium": { "value": "2px" },
                  "style:check|size:small":  { "value": "2px" }
                } },
              { "key": "Border",    "value": "3px", "mono": true,
                "variants": {
                  "style:check":              { "hide": true },
                  "style:default|size:medium": { "value": "2.5px" },
                  "style:default|size:small":  { "value": "2px" }
                } },
              { "key": "Indicator", "value": "12 × 12", "mono": true,
                "variants": {
                  "style:check":                                 { "hide": true },
                  "isSelected:false":                            { "hide": true },
                  "style:default|size:medium|isSelected:true":   { "value": "10 × 10" },
                  "style:default|size:small|isSelected:true":    { "value": "8 × 8" }
                } },
              { "key": "Icon",      "value": "16 × 16", "mono": true,
                "variants": {
                  "style:default":          { "hide": true },
                  "style:check|size:small": { "value": "12 × 12" }
                } },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRadioButton</span><span class=\"syn-punc\">(</span>isSelected<span class=\"syn-punc\">: </span>$isSelected<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>controlSize<span class=\"syn-punc\">(.</span>large<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRadioButton</span><span class=\"syn-punc\">(</span>\n    selected <span class=\"syn-eq\">=</span> false<span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> selected <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">!</span>selected <span class=\"syn-punc\">},</span>\n    size <span class=\"syn-eq\">=</span> EBRadioSize<span class=\"syn-punc\">.</span>Large<span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> true\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Style and State",
        "description": "Every hex is read off <code>get_svg</code> on the named variant of component set <code>26184:2588</code>. Token paths are carried over from the previous record only where the hex still agrees; a <code>—</code> means the binding could not be read — the Talk To Figma plugin does not return variable bindings, so those rows need Dev Mode confirmation.",
        "columns": ["Token", "Value"],
        "rows": [
          { "role": "Check · selected", "token": "Disc · default",  "values": ["main/radio-button/color/default/selected/bg", "#005CE5"] },
          { "role": "—", "token": "Disc · pressed",  "values": ["—", "#2340A9"] },
          { "role": "—", "token": "Disc · disabled", "values": ["—", "#9BC5FD"] },
          { "role": "—", "token": "Checkmark",       "values": ["main/radio-button/color/default/selected/icon", "#FFFFFF"] },
          { "role": "Default · unselected", "token": "Ring · default",  "values": ["main/radio-button/color/default/unselected/border", "#D7E0EF"] },
          { "role": "—", "token": "Ring · pressed",  "values": ["—", "#ADBDDC"] },
          { "role": "—", "token": "Ring · disabled", "values": ["—", "#D7E0EF @ 40%"] },
          { "role": "Default · selected", "token": "Ring + Dot · default",  "values": ["main/radio-button/color/default/selected/bg", "#005CE5"] },
          { "role": "—", "token": "Ring + Dot · pressed",  "values": ["—", "#2340A9"] },
          { "role": "—", "token": "Ring + Dot · disabled", "values": ["—", "#9BC5FD"] },
          { "role": "Default · error · unselected", "token": "Ring · default", "values": ["main/radio-button/color/error/unselected/border", "#D61B2C"] },
          { "role": "—", "token": "Ring · pressed", "values": ["—", "#B50707"] },
          { "role": "Default · error · selected", "token": "Ring + Dot · default", "values": ["main/radio-button/color/error/selected/bg", "#D61B2C"] },
          { "role": "—", "token": "Ring + Dot · pressed", "values": ["—", "#B50707"] },
          { "role": "—", "token": "Ring + Dot · disabled", "values": ["–", "– not built"] }
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:radio-button:2.0.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> EastBlueDS\n\n<span class=\"cmt\">// Compose</span>\n<span class=\"kw\">import</span> com.eastblue.ds.radio.*"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Style — Check, Default",
          "swift": "<code>.ebRadioStyle(.check / .default)</code>",
          "compose": "<code>style = EBRadioStyle.Check / Default</code>"
        },
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "<code>.disabled(true)</code> for Disabled; Pressed is the press gesture, not a parameter",
          "compose": "<code>enabled = false</code> for Disabled; Pressed comes from <code>interactionSource</code>"
        },
        {
          "figma": "Size — Small, Medium, Large",
          "swift": "<code>.controlSize(.small / .regular / .large)</code>",
          "compose": "<code>size = EBRadioSize.Small / Medium / Large</code>"
        },
        {
          "figma": "isSelected — false, true",
          "swift": "<code>isSelected: Bool</code>",
          "compose": "<code>selected: Boolean</code>"
        },
        {
          "figma": "isError — false, true",
          "swift": "<code>.ebInvalid(true)</code>",
          "compose": "<code>isError = true</code>"
        },
        {
          "figma": "— no Figma property (selection callback)",
          "swift": "<code>onTap: () -&gt; Void</code>",
          "compose": "<code>onClick: () -&gt; Unit</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Radio/EBRadioButton.swift",
        "compose": "android/components/radio/EBRadioButton.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"cmt\">// Unselected — the empty ring</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">isSelected</span>: $selected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n\n<span class=\"cmt\">// One option in a single-select group</span>\n<span class=\"kw\">ForEach</span>(options) { option <span class=\"kw\">in</span>\n    <span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">isSelected</span>: .constant(option == choice))\n        .<span class=\"fn\">onTapGesture</span> { choice = option }\n}",
        "compose": "<span class=\"cmt\">// Unselected — the empty ring</span>\n<span class=\"typ\">EBRadioButton</span>(\n    selected = selected,\n    onClick = { selected = <span class=\"kw\">true</span> },\n    size = <span class=\"typ\">EBRadioSize</span>.<span class=\"prp\">Large</span>\n)\n\n<span class=\"cmt\">// One option in a single-select group</span>\noptions.forEach { option ->\n    <span class=\"typ\">EBRadioButton</span>(\n        selected = option == choice,\n        onClick = { choice = option }\n    )\n}"
      },
      {
        "subheading": "Check",
        "swift": "<span class=\"cmt\">// Checkmark disc — settings and picker rows.</span>\n<span class=\"cmt\">// Built only as selected; there is no unselected Check.</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">isSelected</span>: $selected)\n    .<span class=\"fn\">ebRadioStyle</span>(.<span class=\"prp\">check</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// Checkmark disc — settings and picker rows.</span>\n<span class=\"cmt\">// Built only as selected; there is no unselected Check.</span>\n<span class=\"typ\">EBRadioButton</span>(\n    selected = <span class=\"kw\">true</span>,\n    onClick = { },\n    style = <span class=\"typ\">EBRadioStyle</span>.<span class=\"prp\">Check</span>,\n    size = <span class=\"typ\">EBRadioSize</span>.<span class=\"prp\">Large</span>\n)"
      },
      {
        "subheading": "Validation and disabled",
        "swift": "<span class=\"cmt\">// Failed validation the user can still act on</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">isSelected</span>: $selected)\n    .<span class=\"fn\">ebInvalid</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Locked. Never pair .disabled(true) with .ebInvalid(true) —</span>\n<span class=\"cmt\">// Figma ships no Disabled + isError variant.</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">isSelected</span>: .constant(<span class=\"kw\">true</span>))\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Failed validation the user can still act on</span>\n<span class=\"typ\">EBRadioButton</span>(\n    selected = selected,\n    onClick = { selected = !selected },\n    isError = <span class=\"kw\">true</span>\n)\n\n<span class=\"cmt\">// Locked. Never pair enabled = false with isError = true —</span>\n<span class=\"cmt\">// Figma ships no Disabled + isError variant.</span>\n<span class=\"typ\">EBRadioButton</span>(\n    selected = <span class=\"kw\">true</span>,\n    onClick = { },\n    enabled = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "Inherit radio semantics via <code>Toggle(isOn:)</code> with radio style",
        "android": "Use <code>Modifier.selectable(role = Role.RadioButton)</code>"
      },
      {
        "requirement": "Selected state",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code>",
        "android": "<code>selected = true</code> in semantics"
      },
      {
        "requirement": "Group label",
        "ios": "Wrap options in a <code>.accessibilityElement(children: .contain)</code> with group label",
        "android": "Use <code>Modifier.selectableGroup()</code> on parent"
      },
      {
        "requirement": "Tap target",
        "ios": "The control is 24 / 20 / 16pt — every size needs a 44 × 44pt hit area around it",
        "android": "The control is 24 / 20 / 16dp — every size needs a 48 × 48dp hit area around it"
      },
      {
        "requirement": "Error announcement",
        "ios": "Pair with a label and announce the error message after the label",
        "android": "Use <code>semantics { error(...) }</code>"
      },
      {
        "requirement": "Disabled contrast",
        "ios": "Unselected + Disabled is the default ring at 40% opacity — do not rely on it alone; dim the paired label too",
        "android": "Same 40% ring; set <code>enabled = false</code> on the whole selectable row so the label dims with it"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use <code>Style=Check</code> for single-select list rows — settings pickers, option lists, and full-width choice rows where the checkmark reads as \"this one is chosen\" (the iOS picker convention).",
        "dontText": "Don't use <code>Style=Check</code> in a form where real Checkboxes appear alongside it — the two become visually indistinguishable. Use <code>Style=Default</code> (filled dot) there; the dot is the universal single-select affordance."
      },
      {
        "doText": "Use <code>isError=true</code> together with <code>State=Default</code> or <code>Pressed</code> to flag a failed validation the user can still act on.",
        "dontText": "Don't expect <code>Disabled + isError</code> — it ships no variants by design. A locked control gives the user no way to resolve the error, so surface the message elsewhere (e.g. a Callout or Alert) rather than on the radio."
      },
      {
        "doText": "Pair <code>Size</code> to the surrounding text scale — Large (24) for 18px labels, Medium (20) for 16px, Small (16) for dense lists.",
        "dontText": "Don't mix sizes within a single radio group — every option in one group should share the same <code>Size</code> and <code>Style</code>."
      },
      {
        "doText": "Reach for <code>Style=Check</code> only when the row is already selected-or-not; it exists in nine variants, all <code>isSelected=true</code>.",
        "dontText": "Don't try to render an unselected or errored Check — Figma builds neither. Fall back to <code>Style=Default</code> for those states."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic throughout — <code>container</code> → <code>circle</code> + <code>ring</code>; the misleading <code>.base/checkbox</code> frame is gone (v2.0). The four error-selected variants carry a stroke on <code>container</code> as well as on <code>ring</code> — harmless, but one of them is redundant."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Five orthogonal axes, no conditional properties. Booleans use the <code>is</code> prefix with lowercase <code>true</code>/<code>false</code> values — the reference implementation of the C2 boolean convention."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Every fill is consistent across all three sizes, so nothing is size-specific or raster-baked. Two gaps: <code>Disabled + isSelected=false</code> paints the ordinary <code>#D7E0EF</code> ring at <code>opacity 0.4</code> rather than binding a disabled token — while <code>Disabled + isSelected=true</code> does use a distinct <code>#9BC5FD</code>; and variable bindings themselves cannot be read with the Talk To Figma plugin, so the token paths on the Style tab are attested, not verified."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every axis maps to a native parameter or modifier — <code>Toggle</code> with a radio style on iOS, <code>Modifier.selectable(role = Role.RadioButton)</code> on Android. No web-only patterns."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed and Disabled ship at all three sizes for both Style values. <code>Disabled + isError</code> is absent on purpose — recorded, not a gap. Focused is N/A on mobile."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All vector — the pre-rendered large radio is gone and the Check glyph is an icon instance. One gap: the glyph does not scale between sizes. Large and Medium both draw a 16 × 16 icon with a 3px stroke, so at Medium it fills proportionally more of the disc; only Small steps down to 12 × 12 / 2.25px."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Unblocked by the v2.0 rebuild — the sparse matrix and the raster large radio were the blockers and both are resolved. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 39,
      "description": "<code>Style</code> (2) × <code>State</code> (3) × <code>Size</code> (3) × <code>isSelected</code> (2) × <code>isError</code> (2) = 72 theoretical · 39 ship. <code>Check</code> is built only as <code>isSelected=true, isError=false</code>, which accounts for 27 of the 33 absent slots; the remaining 6 are <code>Disabled</code> paired with <code>isError=true</code>, omitted on purpose — a locked control gives the user no way to resolve the error. Summary groups all three sizes per row; node IDs are in the full breakdown.",
      "columns": [
        "Style",
        "State",
        "Size",
        "isSelected",
        "isError",
        "Node",
        "Fill"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Disabled",
            "Large",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26203:601</code>",
            "#D7E0EF @ 40% ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "Medium",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26203:598</code>",
            "#D7E0EF @ 40% ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "Small",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26203:604</code>",
            "#D7E0EF @ 40% ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Large",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26184:2589</code>",
            "#D7E0EF ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Medium",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26184:2592</code>",
            "#D7E0EF ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Small",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26184:2595</code>",
            "#D7E0EF ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Large",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26184:2598</code>",
            "#ADBDDC ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Medium",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26184:2601</code>",
            "#ADBDDC ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Small",
            "<code>false</code>",
            "<code>false</code>",
            "<code>26184:2604</code>",
            "#ADBDDC ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "Large",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2607</code>",
            "#9BC5FD ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "Medium",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2611</code>",
            "#9BC5FD ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "Small",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2615</code>",
            "#9BC5FD ring + dot"
          ]
        },
        {
          "cells": [
            "Check",
            "Disabled",
            "Large",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2619</code>",
            "#9BC5FD disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Disabled",
            "Medium",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2622</code>",
            "#9BC5FD disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Disabled",
            "Small",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2625</code>",
            "#9BC5FD disc + white check"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Large",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2628</code>",
            "#005CE5 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Medium",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2632</code>",
            "#005CE5 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Small",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2636</code>",
            "#005CE5 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Large",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2640</code>",
            "#2340A9 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Medium",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2644</code>",
            "#2340A9 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Small",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2648</code>",
            "#2340A9 ring + dot"
          ]
        },
        {
          "cells": [
            "Check",
            "Default",
            "Large",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2652</code>",
            "#005CE5 disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Default",
            "Medium",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2655</code>",
            "#005CE5 disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Default",
            "Small",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2658</code>",
            "#005CE5 disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Pressed",
            "Large",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2661</code>",
            "#2340A9 disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Pressed",
            "Medium",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2664</code>",
            "#2340A9 disc + white check"
          ]
        },
        {
          "cells": [
            "Check",
            "Pressed",
            "Small",
            "<code>true</code>",
            "<code>false</code>",
            "<code>26184:2667</code>",
            "#2340A9 disc + white check"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Large",
            "<code>false</code>",
            "<code>true</code>",
            "<code>26184:2670</code>",
            "#D61B2C ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Medium",
            "<code>false</code>",
            "<code>true</code>",
            "<code>26184:2673</code>",
            "#D61B2C ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Small",
            "<code>false</code>",
            "<code>true</code>",
            "<code>26184:2676</code>",
            "#D61B2C ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Large",
            "<code>false</code>",
            "<code>true</code>",
            "<code>26184:2679</code>",
            "#B50707 ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Medium",
            "<code>false</code>",
            "<code>true</code>",
            "<code>26184:2682</code>",
            "#B50707 ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Small",
            "<code>false</code>",
            "<code>true</code>",
            "<code>26184:2685</code>",
            "#B50707 ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Large",
            "<code>true</code>",
            "<code>true</code>",
            "<code>26184:2688</code>",
            "#D61B2C ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Medium",
            "<code>true</code>",
            "<code>true</code>",
            "<code>26184:2692</code>",
            "#D61B2C ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "Small",
            "<code>true</code>",
            "<code>true</code>",
            "<code>26184:2696</code>",
            "#D61B2C ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Large",
            "<code>true</code>",
            "<code>true</code>",
            "<code>26184:2700</code>",
            "#B50707 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Medium",
            "<code>true</code>",
            "<code>true</code>",
            "<code>26184:2704</code>",
            "#B50707 ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "Small",
            "<code>true</code>",
            "<code>true</code>",
            "<code>26184:2708</code>",
            "#B50707 ring + dot"
          ]
        }
      ],
      "summary": {
        "columns": [
          "Style",
          "State",
          "isSelected",
          "isError",
          "Count",
          "Fill"
        ],
        "rows": [
          {
            "cells": [
              "Default",
              "Default",
              "<code>false</code>",
              "<code>false</code>",
              "3",
              "#D7E0EF ring"
            ]
          },
          {
            "cells": [
              "Default",
              "Default",
              "<code>true</code>",
              "<code>false</code>",
              "3",
              "#005CE5 ring + dot"
            ]
          },
          {
            "cells": [
              "Default",
              "Pressed",
              "<code>false</code>",
              "<code>false</code>",
              "3",
              "#ADBDDC ring"
            ]
          },
          {
            "cells": [
              "Default",
              "Pressed",
              "<code>true</code>",
              "<code>false</code>",
              "3",
              "#2340A9 ring + dot"
            ]
          },
          {
            "cells": [
              "Default",
              "Disabled",
              "<code>false</code>",
              "<code>false</code>",
              "3",
              "#D7E0EF @ 40% ring"
            ]
          },
          {
            "cells": [
              "Default",
              "Disabled",
              "<code>true</code>",
              "<code>false</code>",
              "3",
              "#9BC5FD ring + dot"
            ]
          },
          {
            "cells": [
              "Default",
              "Default",
              "<code>false</code>",
              "<code>true</code>",
              "3",
              "#D61B2C ring"
            ]
          },
          {
            "cells": [
              "Default",
              "Default",
              "<code>true</code>",
              "<code>true</code>",
              "3",
              "#D61B2C ring + dot"
            ]
          },
          {
            "cells": [
              "Default",
              "Pressed",
              "<code>false</code>",
              "<code>true</code>",
              "3",
              "#B50707 ring"
            ]
          },
          {
            "cells": [
              "Default",
              "Pressed",
              "<code>true</code>",
              "<code>true</code>",
              "3",
              "#B50707 ring + dot"
            ]
          },
          {
            "cells": [
              "Check",
              "Default",
              "<code>true</code>",
              "<code>false</code>",
              "3",
              "#005CE5 disc + white check"
            ]
          },
          {
            "cells": [
              "Check",
              "Pressed",
              "<code>true</code>",
              "<code>false</code>",
              "3",
              "#2340A9 disc + white check"
            ]
          },
          {
            "cells": [
              "Check",
              "Disabled",
              "<code>true</code>",
              "<code>false</code>",
              "3",
              "#9BC5FD disc + white check"
            ]
          }
        ]
      },
      "collapseLabel": "View full Style × State × Size breakdown (39 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 26184:2588",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt off the live component.</strong> The documented control was not the one Figma ships: it described a <code>selected</code> enum (<code>unselected/selected/disabled/error</code>), a <code>style</code> axis of <code>default/filled/checkmark</code>, and two sizes. Replaced with the real five axes read from node <code>26184:2588</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Four colour values were wrong and one state was missing entirely.</strong> The selected inner dot was documented white — it is <code>#005CE5</code>, the same blue as the ring, and white appears only as the Check glyph. Disabled-selected was <code>#C2CFE5</code>, actually <code>#9BC5FD</code>. The whole <code>Pressed</code> state (<code>#ADBDDC</code> · <code>#2340A9</code> · <code>#B50707</code>) was undocumented, as was <code>Size=Medium</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Ring stroke corrected and made size-aware.</strong> The Layout section said <code>1.5px</code> while the colours table said <code>2px</code>; both were wrong. Read off the SVG exports: <code>3px</code> at Large, <code>2.5px</code> at Medium, <code>2px</code> at Small, with the inner dot at exactly half the box.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Demo panel now mirrors the Figma property panel.</strong> One spec card carrying all five properties — <code>Style</code> · <code>State</code> · <code>Size</code> · <code>isSelected</code> · <code>isError</code> — in panel order, with Figma’s own value order and lowercase boolean values. Combinations Figma does not build are disabled rather than offered: reachable 39 equals built 39.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Second colours table was dead markup.</strong> <code>colorsTables[i]</code> pairs positionally with <code>specCards[i]</code>, so with one card the second table never rendered. Merged into a single <code>Colors by Style and State</code> table.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab scorecard contradicted the v2.0 record.</strong> C1 still cited the <code>.base/checkbox</code> frame, C2 the mixed <code>selected</code> axis, C3 the raster large radio, C5 the missing pressed state, C6 the pre-rendered image — all five resolved in v2.0 and recorded as such on the Overview tab. Rescored C1, C2, C4 and C5 Ready.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Property Mapping rewritten against the current schema.</strong> It still mapped the retired axes — <code>selected=unselected/selected</code>, <code>size=small/large</code>, <code>style=filled/checkmark</code> marked \"retire\". Now one prose row per property with all its values, plus the selection callback.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Installation coordinates corrected.</strong> Gradle artifact was <code>com.eastblue.ds:radio</code> at version <code>1.0.0</code>; the slug is <code>radio-button</code> and the version tracks this entry. Import block added — <code>import EastBlueDS</code> and <code>com.eastblue.ds.radio.*</code>, the package derived from the <code>Radio</code> family.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Variants Inventory gained a full breakdown.</strong> 39 rows carrying every node ID and its verified fill, behind the summary. The absent-slot arithmetic is now stated: 33 of 72 theoretical, being 27 Check (built only as <code>isSelected=true, isError=false</code>) and 6 <code>Disabled + isError</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Correction to v2.0.0.</strong> That entry recorded <code>Disabled + isError=true</code> as \"9 slots absent\". It is 6 — two combinations (<code>isSelected</code> false and true) across three sizes. The v2.0.0 entry is left as written; this row is the correction.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Disabled uses two different mechanisms.</strong> Unselected-disabled wraps the ordinary <code>#D7E0EF</code> ring in <code>opacity 0.4</code>; selected-disabled uses a distinct <code>#9BC5FD</code> at full opacity. One native modifier cannot express both. Logged against C3, not yet filed as an Overview issue.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Check glyph does not scale between Large and Medium.</strong> Both draw a 16 × 16 icon at <code>stroke-width 3</code> inside a 24px and a 20px disc; only Small steps down to 12 × 12 at <code>2.25</code>. Logged against C6.",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Token bindings unread.</strong> The Talk To Figma plugin returns no variable bindings, so 8 of the 15 colour rows carry <code>—</code> and the rest are attested from the previous record where the hex still agreed. Needs a Dev Mode pass.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "July 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt · node 26184:2588",
      "rows": [
        {
          "body": "<strong>Component rebuilt on a new node</strong> — 39 variants across <code>Style</code> (Default/Check) × <code>State</code> (Default/Pressed/Disabled) × <code>Size</code> (Large/Medium/Small) × <code>isSelected</code> × <code>isError</code>, replacing the old sparse <code>selected × size × style</code> matrix.\n          <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong>Properties split into orthogonal axes</strong> — pressed folded into <code>State</code>, error split into an orthogonal <code>isError</code> boolean. Removes the illegal <code>Disabled + Pressed</code> combination and aligns with Button v4.0 / Select Item.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 · C4 Resolved"
          }
        },
        {
          "body": "<strong>Large radio rebuilt as vector layers</strong> — <code>container</code> → <code>circle</code> + <code>ring</code> ellipses on <code>#005CE5</code>. The pre-rendered <code>imgContainer</code> raster is gone; tokens now propagate to all three sizes.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Layer naming fixed + checkmark promoted to an icon</strong> — <code>.base/checkbox</code> replaced by <code>container</code> / <code>circle</code> / <code>ring</code>; the Check style now nests a vector <code>Checkmark</code> icon instance.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Pressed state + disabled-unselected coverage added</strong> — <code>State=Pressed</code> (<code>#2340A9</code>) covers touch feedback, and <code>Disabled + isSelected=false</code> now exists at all sizes so disabled groups can render unselected options. Focused dropped as N/A on mobile.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Boolean variant values lowercased</strong> — <code>True</code>/<code>False</code> → <code>true</code>/<code>false</code>, matching the C2 convention. Radio Button is now the reference for boolean vocabulary in the system.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Check + Pressed mislabel corrected</strong> — three Check variants were relabelled <code>isError=true</code> while still painted pressed-navy, which also removed Check's pressed state. Renamed back to <code>State=Pressed, isError=false</code>; label and paint now agree.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong><code>Disabled + isError=true</code> not covered</strong> — 9 slots absent. Likely intentional, but undocumented. Confirm and record.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — now unblocked by the rebuild; SwiftUI / Compose mappings not yet registered.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:35698",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 11 variants across sparse selected × size × style matrix. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Sparse matrix, mixed paradigms</strong> — <code>selected</code> mixes selection with modifier states; <code>style</code> is only meaningful when selected. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Large radio is raster-baked</strong> — tokens don't flow to the large size. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Internal frame named <code>.base/checkbox</code></strong> + checkmark style overlaps with Checkbox. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>No pressed/focused states</strong>. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
