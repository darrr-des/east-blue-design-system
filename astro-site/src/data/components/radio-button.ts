import type { ComponentData } from '../types';

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
        "cardKey": "all-states-—-large-+-small",
        "demoKey": "rb-all",
        "title": "All states — large + small",
        "node": "",
        "description": "Pick a state, size, and style to preview. The same matrix would otherwise be 12 static cells; here it's controlled.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"spec-rb-all-preview\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"/></svg></div>",
        demoControls: [
          {
            heading: 'Properties',
            rows: [
              {
                label: 'selected',
                prop: 'selected',
                defaultValue: 'unselected',
                options: [
                  { value: 'unselected', label: 'unselected' },
                  { value: 'selected', label: 'selected' },
                  { value: 'disabled', label: 'disabled' },
                  { value: 'error', label: 'error' },
                ],
              },
              {
                label: 'size',
                prop: 'size',
                defaultValue: 'large',
                options: [
                  { value: 'large', label: 'large' },
                  { value: 'small', label: 'small' },
                ],
              },
              {
                label: 'style',
                prop: 'style',
                defaultValue: 'default',
                options: [
                  { value: 'default', label: 'default' },
                  { value: 'filled', label: 'filled' },
                  { value: 'checkmark', label: 'checkmark' },
                ],
              },
            ],
          },
        ],
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant",  "value": "All states — large + small" },
              { "key": "Selected", "value": "true/false (boolean)" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "radio-button/color/default/unselected/border",
                "variants": {
                  "selected:selected": { "hide": true },
                  "selected:disabled": { "value": "#EEF2F9" },
                  "selected:error":    { "hide": true }
                }
              },
              { "key": "Fill", "value": "#005CE5", "token": "radio-button/color/default/selected/bg",
                "variants": {
                  "selected:unselected": { "hide": true },
                  "selected:disabled":   { "hide": true },
                  "selected:error":      { "hide": true }
                }
              },
              { "key": "Dot", "value": "#FFFFFF", "token": "radio-button/color/default/selected/dot",
                "variants": {
                  "selected:unselected": { "hide": true },
                  "selected:disabled":   { "hide": true },
                  "selected:error":      { "hide": true }
                }
              },
              { "key": "Error border", "value": "#D61B2C", "token": "radio-button/color/error/unselected/border",
                "variants": {
                  "selected:unselected": { "hide": true },
                  "selected:selected":   { "hide": true },
                  "selected:disabled":   { "hide": true }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Outer ring",    "value": "20 × 20", "mono": true },
              { "key": "Inner dot",     "value": "10 × 10 (when selected)", "mono": true },
              { "key": "Border radius", "value": "50% (circle)", "mono": true },
              { "key": "Border",        "value": "1.5px solid", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Inline label", "value": "Primary/Multi-line Label/Light/Small", "mono": true },
              { "key": "Label font",   "value": "Proxima Soft Semibold · 14 / 16", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRadioButton</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>option<span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRadioButton</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> option<span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Unselected",
            "token": "border",
            "values": [
              "main/radio-button/color/default/unselected/border",
              "#D7E0EF"
            ]
          },
          {
            "role": "Selected",
            "token": "bg (fill + ring)",
            "values": [
              "main/radio-button/color/default/selected/bg",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/radio-button/color/default/selected/border",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "inner dot / checkmark",
            "values": [
              "main/radio-button/color/default/selected/icon",
              "#FFFFFF"
            ]
          },
          {
            "role": "Disabled",
            "token": "bg",
            "values": [
              "main/radio-button/color/disabled/selected/bg",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/radio-button/color/disabled/selected/border",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "inner icon",
            "values": [
              "main/radio-button/color/disabled/selected/icon",
              "#FFFFFF"
            ]
          },
          {
            "role": "Error",
            "token": "border (unselected)",
            "values": [
              "main/radio-button/color/error/unselected/border",
              "#D61B2C"
            ]
          },
          {
            "role": "—",
            "token": "bg (selected)",
            "values": [
              "main/radio-button/color/error/selected/bg",
              "#D61B2C"
            ]
          },
          {
            "role": "—",
            "token": "border (selected)",
            "values": [
              "main/radio-button/color/error/selected/border",
              "#D61B2C"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Large size",
            "token": "—",
            "values": [
              "20 × 20"
            ]
          },
          {
            "role": "Small size",
            "token": "—",
            "values": [
              "16 × 16"
            ]
          },
          {
            "role": "Ring border width",
            "token": "—",
            "values": [
              "2px"
            ]
          },
          {
            "role": "Inner dot (small filled)",
            "token": "—",
            "values": [
              "8 × 8 ellipse"
            ]
          },
          {
            "role": "Inner checkmark",
            "token": "—",
            "values": [
              "6 × 4 vector"
            ]
          },
          {
            "role": "Corner radius",
            "token": "space/space-8",
            "values": [
              "8px (fully round at 16×16)"
            ]
          },
          {
            "role": "Selected-filled wrapper padding",
            "token": "space/space-4",
            "values": [
              "4px (creates the \"outer ring\" illusion)"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:radio:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "selected=unselected/selected",
          "swift": "selected: Bool",
          "compose": "selected: Bool"
        },
        {
          "figma": "selected=disabled",
          "swift": "state=disabled (combine w/ selected)",
          "compose": ".disabled(true)"
        },
        {
          "figma": "selected=error",
          "swift": "state=error",
          "compose": "state: .error"
        },
        {
          "figma": "size=small/large",
          "swift": "size: EBRadioSize",
          "compose": ".controlSize(.small)"
        },
        {
          "figma": "style=filled/checkmark",
          "swift": "(retire — pick filled only)",
          "compose": "—"
        },
        {
          "figma": "style=default (unselected/error)",
          "swift": "implicit from selected=false",
          "compose": "—"
        },
        {
          "figma": "—",
          "swift": "onToggle",
          "compose": "onChange: (Bool) -&gt; Void"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Radio/EBRadioButton.swift",
        "compose": "android/components/radio/EBRadioButton.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Basic selection</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">selected</span>: $isSelected)\n\n<span class=\"cmt\">// Large size with error state</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">selected</span>: $isSelected, <span class=\"prp\">state</span>: .<span class=\"prp\">error</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBRadioButton</span>(<span class=\"prp\">selected</span>: <span class=\"kw\">true</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Basic selection</span>\n<span class=\"typ\">EBRadioButton</span>(selected = checked, onCheckedChange = { checked = it })\n\n<span class=\"cmt\">// Large size with error state</span>\n<span class=\"typ\">EBRadioButton</span>(\n    selected = checked,\n    onCheckedChange = { checked = it },\n    size = <span class=\"typ\">EBRadioSize</span>.<span class=\"prp\">Large</span>,\n    state = <span class=\"typ\">EBRadioState</span>.<span class=\"prp\">Error</span>\n)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBRadioButton</span>(\n    selected = <span class=\"kw\">true</span>,\n    onCheckedChange = { },\n    enabled = <span class=\"kw\">false</span>\n)"
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
        "ios": "Radio is 20px; wrap in 44pt hit area",
        "android": "Wrap in 48dp hit area"
      },
      {
        "requirement": "Error announcement",
        "ios": "Pair with a label and announce the error message after the label",
        "android": "Use <code>semantics { error(...) }</code>"
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
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Internal frame named <code>.base/checkbox</code> instead of <code>.base/radio</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>selected</code> mixes selection with modifiers; <code>style</code> is conditional."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Large variants are raster — tokens don't flow to the large size."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to Toggle / RadioButton with custom style."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed or focused states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Checkmark style conflicts with Checkbox visually; large radio is a pre-rendered image."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2. Clean mapping lands after prop split."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 39,
      "description": "<code>Style</code> (2) × <code>State</code> (3) × <code>Size</code> (3) × <code>isSelected</code> (2) × <code>isError</code> (2) = 72 theoretical. 39 ship. <code>Check</code> is only meaningful when selected, and <code>Disabled</code> deliberately excludes <code>isError</code> — a locked control offers no path to resolve the error. Grouped below by Style × State; each row covers all three sizes.",
      "columns": [
        "Style",
        "State",
        "isSelected",
        "isError",
        "Count",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Default",
            "false",
            "false",
            "3",
            "Empty ring · all sizes"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "true",
            "false",
            "3",
            "Brand ring + dot #005CE5"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "false",
            "true",
            "3",
            "Error ring #D61B2C"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "true",
            "true",
            "3",
            "Error ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "false",
            "false",
            "3",
            "Pressed ring #2340A9"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "true",
            "false",
            "3",
            "Pressed ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "false",
            "true",
            "3",
            "Pressed error ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "true",
            "true",
            "3",
            "Pressed error ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "false",
            "false",
            "3",
            "Muted empty ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "true",
            "false",
            "3",
            "Muted ring + dot"
          ]
        },
        {
          "cells": [
            "Check",
            "Default",
            "true",
            "false",
            "3",
            "Brand fill + vector checkmark"
          ]
        },
        {
          "cells": [
            "Check",
            "Pressed",
            "true",
            "false",
            "3",
            "Pressed fill + checkmark"
          ]
        },
        {
          "cells": [
            "Check",
            "Disabled",
            "true",
            "false",
            "3",
            "Muted fill + checkmark"
          ]
        }
      ]
    }
  },
  "changelog": [
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
