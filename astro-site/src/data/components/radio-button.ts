import type { ComponentData } from '../types';

export const radioButton: ComponentData = {
  "meta": {
    "slug": "radio-button",
    "name": "Radio Button",
    "node": "18482:35698",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-35698",
    "description": "A circular radio control used inside single-select groups; supports default, selected, and disabled.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Radio",
    "verdict": {
      "kind": "fix",
      "title": "Split properties + rebuild as vector",
      "text": "Replace the sparse <code>selected × style</code> matrix with orthogonal props: <code>selected: Bool</code> + <code>state: default/disabled/error</code>. Retire the <code>checkmark</code> style (it's a checkbox affordance, not a radio). Rebuild the large radio with token-bound vector layers instead of raster SVG images. Rename <code>.base/checkbox</code> → <code>.base/radio</code>. Add pressed + focused states."
    }
  },
  "overview": {
    "inContextNote": "Radio Buttons appear in Radio Button with Label groups — see the Radio Button with Label preview for the composed form row.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"rb-demo-preview\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">selected</span><select class=\"demo-panel-select\" id=\"rb-demo-selected\" onchange=\"updateRadioButtonDemo()\"><option value=\"unselected\" selected=\"\">unselected</option><option value=\"selected\">selected</option><option value=\"disabled\">disabled</option><option value=\"error\">error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" id=\"rb-demo-size\" onchange=\"updateRadioButtonDemo()\"><option value=\"large\" selected=\"\">large</option><option value=\"small\">small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">style</span><select class=\"demo-panel-select\" id=\"rb-demo-style\" onchange=\"updateRadioButtonDemo()\"><option value=\"default\" selected=\"\">default</option><option value=\"filled\">filled</option><option value=\"checkmark\">checkmark</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used in forms, surveys, preference pickers. Two sizes cover 360px and 414px screen needs."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Small variants use token-bound borders + fills. Large variants export a pre-rendered SVG image for each state — tokens won't propagate to the large size. <span class=\"tag-open tag-c3\">C3</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Two property-naming issues: <code>selected</code> mixes selection with modifiers (disabled/error), and <code>style</code> is conditional (only meaningful when selected is true). Sparse matrix with ~50% invalid combinations. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Internal frame is named <code>.base/checkbox</code> instead of <code>.base/radio</code>. Suggests checkbox primitives were reused here. Also the checkmark style is a checkbox affordance, not standard radio iconography. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "Sparse variant matrix.",
        "body": "<code>selected × size × style</code> = 24 theoretical, ~11 valid. The <code>style</code> property is only meaningful when a selection is present, and <code>selected</code> conflates selection with modifier states.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Large radio is raster-baked.",
        "body": "Every large variant exports the ring+dot as a pre-rendered SVG image (<code>imgContainer</code>). Token changes won't propagate to the large size until this is rebuilt with layered vectors.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Internal frame named <code>.base/checkbox</code>.",
        "body": "Misleading layer naming — the small radio nests a frame called <code>.base/checkbox</code> instead of <code>.base/radio</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Checkmark style is not standard radio iconography.",
        "body": "Radios use filled dots universally; checkmarks communicate \"checked\" — a checkbox affordance. The <code>style=checkmark</code> variant visually overlaps with Checkbox.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed or focused states.",
        "body": "Engineers must improvise these affordances.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until property split (selected/state/size) and large-radio vector rebuild land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Split properties into orthogonal axes",
        "body": ":<br>• <code>selected: Bool</code> (true/false) — pure selection state<br>• <code>state: default / disabled / error</code> — modifier state (can combine with selected)<br>• <code>size: small / large</code> — unchanged<br>Eliminates invalid combinations, maps to Swift <code>Bool</code> and native radio APIs.",
        "tag": "Property"
      },
      {
        "headline": "Retire the checkmark style.",
        "body": "Pick filled (blue dot) as the single visual style — it's the universally understood radio affordance. The checkmark variant is visually a checkbox and may cause user confusion when placed next to actual checkboxes.",
        "tag": "Rename"
      },
      {
        "headline": "Rebuild the large radio as vector layers.",
        "body": "Each variant today exports a flat SVG image; convert to a base ring + inner dot, both with token-bound fills. Matches the small radio's structure and lets tokens flow to both sizes.",
        "tag": "Asset"
      },
      {
        "headline": "Rename internal frame",
        "body": "<code>.base/checkbox</code> → <code>.base/radio</code>. Minor but signals correct primitive ownership.",
        "tag": "Rename"
      },
      {
        "headline": "Add pressed + focused states.",
        "body": "Pressed = darker blue ring/fill; focused = outer 2px focus ring. Documents the interactive affordances native needs to render.",
        "tag": "State"
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
              { "key": "Border (unselected)", "value": "#D7E0EF", "token": "radio-button/color/default/unselected/border" },
              { "key": "Selected fill",       "value": "#005CE5", "token": "radio-button/color/default/selected/bg" },
              { "key": "Selected dot",        "value": "#FFFFFF", "token": "radio-button/color/default/selected/dot" },
              { "key": "Error border",        "value": "#D61B2C", "token": "radio-button/color/error/unselected/border" }
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
    "usageGuidelines": [],
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
      "total": 11,
      "description": "After the proposed restructure: 2 <code>selected</code> × 3 <code>state</code> × 2 <code>size</code> = 12 well-formed orthogonal variants (no invalid combinations possible).",
      "columns": [
        "selected",
        "size",
        "style",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "unselected",
            "large",
            "default",
            "18482:35699"
          ]
        },
        {
          "cells": [
            "unselected",
            "small",
            "default",
            "18482:35702"
          ]
        },
        {
          "cells": [
            "selected",
            "large",
            "filled",
            "18482:35715"
          ]
        },
        {
          "cells": [
            "selected",
            "small",
            "filled",
            "18482:35718"
          ]
        },
        {
          "cells": [
            "selected",
            "large",
            "checkmark",
            "18482:35721"
          ]
        },
        {
          "cells": [
            "selected",
            "small",
            "checkmark",
            "18482:35724"
          ]
        },
        {
          "cells": [
            "disabled",
            "large",
            "filled",
            "18482:35704"
          ]
        },
        {
          "cells": [
            "disabled",
            "small",
            "filled",
            "18482:35707"
          ]
        },
        {
          "cells": [
            "disabled",
            "large",
            "checkmark",
            "18482:35710"
          ]
        },
        {
          "cells": [
            "disabled",
            "small",
            "checkmark",
            "18482:35713"
          ]
        },
        {
          "cells": [
            "error",
            "large",
            "default",
            "18482:35726"
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
