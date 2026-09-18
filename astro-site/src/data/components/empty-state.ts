import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/empty-state.js`.
// Panel mirrors the property panel of set 26356:13970, in its order: two
// variant axes and one boolean. ⤷ VisualSlot and ⤷ ActionSlot are SLOTs
// (4 swap options each) and get no control.
const emptyStateDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'subtle', label: 'Subtle' },
        ],
      },
      {
        label: 'VisualType',
        prop: 'visualtype',
        defaultValue: 'icon',
        options: [
          { value: 'icon', label: 'Icon' },
          { value: 'asset', label: 'Asset' },
        ],
      },
      {
        label: 'hasButton',
        prop: 'hasbutton',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const emptyState: ComponentData = {
  "meta": {
    "slug": "empty-state",
    "name": "Empty State",
    "node": "26356:13970",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26356-13970",
    "description": "A centred no-content surface — visual, header (title + description), and an action. 4 variants across <code>Style</code> (Default/Subtle) × <code>VisualType</code> (Icon/Asset), with a <code>Visual Container</code>, <code>Action Container</code> slot, and a token-bound header.",
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
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — schema and slots landed",
      "text": "The rebuild collapsed a 7-boolean, 256-combination mess into a clean 2 × 2 — <code>Style</code> (Default/Subtle) × <code>VisualType</code> (Icon/Asset). The duplicate header booleans merged into one header (title + description), <code>color</code> became <code>Style</code>, and the icon, asset, and action are all real Figma slots. The visual slot was unified to a single <code>Visual Container</code> so switching <code>VisualType</code> keeps its content, and <code>visualType</code> was recased to <code>VisualType</code> to match the enum convention. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Empty State fills a surface where content would normally sit — empty transaction lists, no search results, first-run tabs.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"140\" viewBox=\"0 0 200 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Transactions</text>\n          \n          <circle cx=\"100\" cy=\"54\" r=\"10\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"60\" y=\"72\" width=\"80\" height=\"20\" rx=\"3\" fill=\"#EEF2F9\"></rect>\n          <text x=\"100\" y=\"102\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"8\" font-weight=\"700\" font-family=\"\\'Proxima Soft\\', system-ui\">No transactions yet</text>\n          <text x=\"100\" y=\"112\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-family=\"\\'BarkAda\\', system-ui\">Your transactions will show here.</text>\n          <rect x=\"72\" y=\"118\" width=\"56\" height=\"10\" rx=\"5\" fill=\"#005CE5\"></rect>\n          <text x=\"100\" y=\"126\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Cash In</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"es-demo-preview\"><svg width=\"300\" height=\"468\" viewBox=\"0 0 300 468\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"300\" height=\"468\" rx=\"4\" fill=\"#FFFFFF\"></rect><text x=\"24\" y=\"34\" fill=\"#0A2757\" font-size=\"14\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Header</text><text x=\"24\" y=\"50\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"600\" font-family=\"'BarkAda', system-ui\">Description goes here</text><circle cx=\"150\" cy=\"98\" r=\"20\" fill=\"#C2C6CF\"></circle><rect x=\"0\" y=\"146\" width=\"300\" height=\"170\" fill=\"#EEF2F9\"></rect><text x=\"150\" y=\"346\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"16\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Header</text><text x=\"150\" y=\"366\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"600\" font-family=\"'BarkAda', system-ui\">Description goes here</text><rect x=\"80\" y=\"406\" width=\"140\" height=\"34\" rx=\"17\" fill=\"#005CE5\"></rect><text x=\"150\" y=\"428\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"13\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Current properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">color</span><select class=\"demo-panel-select\" id=\"es-demo-color\" onchange=\"updateEmptyStateDemo()\"><option value=\"white\" selected=\"\">white</option><option value=\"grey-blue\">grey blue</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasIcon</span><select class=\"demo-panel-select\" id=\"es-demo-icon\" onchange=\"updateEmptyStateDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasAsset</span><select class=\"demo-panel-select\" id=\"es-demo-asset\" onchange=\"updateEmptyStateDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasButton</span><select class=\"demo-panel-select\" id=\"es-demo-button\" onchange=\"updateEmptyStateDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used for any \"no content\" surface — empty transaction lists, no search results, first-run inbox, unfilled saved contacts. Icon and Asset visual types cover both compact and illustrative empties."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own background, padding, and typography, all token-bound. Subtle ships <code>#F6F9FD</code>, Default white."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Two orthogonal enums — <code>Style</code> × <code>VisualType</code> = a complete 2 × 2, replacing the old 7-boolean / 256-combination schema. Values match the token namespace (Default / Subtle), the duplicate header booleans are gone, and both enums are Title Case."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Three real Figma slots — a unified <code>Visual Container</code> for the icon or asset, and an <code>Action Container</code> holding a canonical Button instance. Switching <code>VisualType</code> preserves the visual slot content because both types share one slot name."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Style=Default",
        "notes": "White background — use when the empty state sits on a light-blue surface."
      },
      {
        "state": "Subtle",
        "ios": "yes",
        "android": "yes",
        "property": "Style=Subtle",
        "notes": "Light-blue <code>#F6F9FD</code> background — use when sitting on a white surface."
      },
      {
        "state": "Icon visual",
        "ios": "yes",
        "android": "yes",
        "property": "VisualType=Icon",
        "notes": "64px icon in the Visual Container. Compact empties."
      },
      {
        "state": "Asset visual",
        "ios": "yes",
        "android": "yes",
        "property": "VisualType=Asset",
        "notes": "230px illustration in the Visual Container. Richer, first-run empties."
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not modelled by design — Empty State is a display surface. Interactivity lives on the Button in the Action Container, which carries its own states."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: 7-boolean schema collapsed to two enums — <code>Style</code> (Default/Subtle) × <code>VisualType</code> (Icon/Asset), a clean 2 × 2. The old 256-combination surface with mutually exclusive booleans is gone. (C2)"
      },
      {
        "body": "v2.0: Duplicate <code>header</code> / <code>header1</code> booleans merged into a single header frame with <code>#heading</code> + <code>#description</code>. (C2)"
      },
      {
        "body": "v2.0: <code>color=white/grey blue</code> renamed <code>Style=Default/Subtle</code>, matching the token namespace and dropping the space-in-value. Subtle ships <code>#F6F9FD</code>. (C2)"
      },
      {
        "body": "v2.0: Icon placeholder replaced with a real Figma slot, and the flat coloured asset rectangle with an <code>Asset</code> slot wrapping an instance — both swappable. (C6)"
      },
      {
        "body": "v2.0: Action promoted to a slot too — <code>Action Container</code> holds a canonical <code>Button</code> instance rather than a drawn button. (C6)"
      },
      {
        "body": "v2.1: Visual slot unified to a single <code>Visual Container</code> across all four variants (was <code>Icon Container</code> / <code>Asset Container</code>). Switching <code>VisualType</code> on an instance now preserves the slot content, and Code Connect maps one slot instead of two. (C1)"
      },
      {
        "body": "v2.1: <code>visualType</code> recased to <code>VisualType</code> — Title Case, matching the enum convention (<code>Style</code>, <code>Type</code>, <code>State</code>) rather than the boolean camelCase style. (C2)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "The schema collapse, slot adoption, and naming are all resolved. Registration is unblocked but the SwiftUI / Compose mappings are not yet wired and the native component does not exist — snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBEmptyState</code>.",
        "body": "Wire <code>Style</code> and <code>VisualType</code> to the SwiftUI / Compose API, and map the <code>Visual Container</code> and <code>Action Container</code> slots to <code>@ViewBuilder</code> / <code>@Composable</code> content slots.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Collapse to one title + description.",
        "body": "v2.0: Applied — the duplicate header booleans merged into a single header with <code>#heading</code> + <code>#description</code>.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>color</code> → <code>Style</code> with values Default / Subtle.",
        "body": "v2.0: Applied — matches the token namespace and drops the space-in-value.",
        "tag": "Rename"
      },
      {
        "headline": "Adopt Figma Slots for icon, asset, and action.",
        "body": "v2.0: Applied — all three are real slots, and the visual slot was unified to a single <code>Visual Container</code> in v2.1.",
        "tag": "Slot"
      },
      {
        "headline": "Document \"icon vs asset\".",
        "body": "v2.0: Superseded by the schema — the choice is now an explicit <code>VisualType</code> enum (Icon / Asset) rather than a convention to document.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "es-spec-main",
        "demoKey": "main",
        "title": "Empty State",
        "node": "26356:13970",
        "description": "An empty state serves as a placeholder when there are no results or information to be displayed.",
        "previewHtml": "<div id=\"empty-state-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": emptyStateDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Style",
                "value": "Default",
                "prop": "style"
              },
              {
                "key": "VisualType",
                "value": "Icon",
                "prop": "visualtype"
              },
              {
                "key": "hasButton",
                "value": "True",
                "prop": "hasbutton"
              },
              {
                "key": "⤷ VisualSlot",
                "value": "Slot · 4 swap options — ships a placeholder"
              },
              {
                "key": "⤷ ActionSlot",
                "value": "Slot · 4 swap options — Button - Large/Medium",
                "variants": {
                  "hasbutton:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "26356:13971 · 360 × 307",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "style:default|visualtype:icon": {
                    "value": "26356:13971 · 360 × 307"
                  },
                  "style:subtle|visualtype:icon": {
                    "value": "26356:13979 · 360 × 307"
                  },
                  "style:default|visualtype:asset": {
                    "value": "26356:13987 · 360 × 425"
                  },
                  "style:subtle|visualtype:asset": {
                    "value": "26356:13995 · 360 × 425"
                  }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "style:subtle": {
                    "value": "#F6F9FD"
                  }
                }
              },
              {
                "key": "Heading",
                "value": "#0A2757",
                "token": "—"
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—"
              },
              {
                "key": "Button",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "hasbutton:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button label",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "hasbutton:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Slot placeholder",
                "value": "#9F3DFB at 9% · dashed 4/4",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Heading",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Button label",
                "value": "Primary/Label/Large",
                "mono": true,
                "variants": {
                  "hasbutton:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "360 × 307",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Height rule",
                "value": "48 + Visual 64 + Header 97 + Action 50 + 48 — hugs",
                "mono": true,
                "variants": {
                  "visualtype:asset": {
                    "value": "24 + Visual 230 + Header 97 + Action 50 + 24 — hugs"
                  }
                }
              },
              {
                "key": "VisualSlot",
                "value": "64 × 64 at x 148 · radius 4",
                "mono": true,
                "variants": {
                  "visualtype:asset": {
                    "value": "360 × 230 · full width, square"
                  }
                }
              },
              {
                "key": "Header",
                "value": "360 × 97 · 24px inset · 8px gap",
                "mono": true
              },
              {
                "key": "ActionSlot",
                "value": "312 × 50 button at x 24 · pill",
                "mono": true,
                "variants": {
                  "hasbutton:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Vertical padding",
                "value": "48px top and bottom",
                "mono": true,
                "variants": {
                  "visualtype:asset": {
                    "value": "24px top and bottom"
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBEmptyState(\n    heading: \"Header\",\n    description: \"Description goes here\",\n    style: .default\n)\n.ebVisual(.icon) { Image(\"empty\") }\n.ebAction(\"Label\") { retry() }",
        "compose": "EBEmptyState(\n    heading = \"Header\",\n    description = \"Description goes here\",\n    style = EBEmptyStateStyle.Default,\n    visualType = EBEmptyStateVisual.Icon,\n    visual = { Image(painterResource(R.drawable.empty), null) },\n    actionLabel = \"Label\",\n    onAction = { retry() }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Style",
        "description": "Read off <code>get_node_info</code> on the four variants of set <code>26356:13970</code>. <code>Style</code> changes only the surface; heading, description and button are shared. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Subtle"
        ],
        "rows": [
          {
            "role": "Surface",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#F6F9FD"
            ]
          },
          {
            "role": "Heading",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Description",
            "token": "—",
            "values": [
              "#6780A9",
              "#6780A9"
            ]
          },
          {
            "role": "Button / label",
            "token": "—",
            "values": [
              "#005CE5 / #FFFFFF",
              "#005CE5 / #FFFFFF"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:empty-state:2.1.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.emptystate.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>26356:13970</code>, in panel order, then the two text layers. <code>hasButton</code> is a boolean property; <code>⤷ VisualSlot</code> and <code>⤷ ActionSlot</code> are SLOTs with 4 swap options each.",
      "rows": [
        {
          "figma": "Style — Default, Subtle",
          "swift": "<code>style: .default / .subtle</code>",
          "compose": "<code>style = EBEmptyStateStyle.Default / Subtle</code>"
        },
        {
          "figma": "VisualType — Icon, Asset",
          "swift": "<code>.ebVisual(.icon / .asset) { }</code>",
          "compose": "<code>visualType = EBEmptyStateVisual.Icon / Asset</code>"
        },
        {
          "figma": "hasButton — boolean",
          "swift": "<code>.ebAction(String) { }</code> — omit for False",
          "compose": "<code>actionLabel: String? = null</code> + <code>onAction: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ VisualSlot — SLOT (64 × 64 Icon, 360 × 230 Asset)",
          "swift": "content of <code>.ebVisual { }</code>",
          "compose": "<code>visual: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "⤷ ActionSlot — SLOT (Button - Large/Medium)",
          "swift": "the button from <code>.ebAction</code>",
          "compose": "the button from <code>actionLabel</code>"
        },
        {
          "figma": "— <code>#heading</code> / <code>#description</code>",
          "swift": "<code>heading: String</code>, <code>description: String?</code>",
          "compose": "<code>heading: String</code>, <code>description: String? = null</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/EmptyState/EBEmptyState.swift",
        "compose": "android/components/emptystate/EBEmptyState.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default · Icon",
        "swift": "<span class=\"cmt\">// Style=Default, VisualType=Icon, hasButton=True — 26356:13971, 360 × 307.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading: <span class=\"str\">\"No transactions yet\"</span>,\n    description: <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style: .<span class=\"prp\">default</span>\n)\n.<span class=\"fn\">ebVisual</span>(.<span class=\"prp\">icon</span>) { <span class=\"typ\">Image</span>(<span class=\"str\">\"empty\"</span>) }\n.<span class=\"fn\">ebAction</span>(<span class=\"str\">\"Send money\"</span>) { startTransfer() }",
        "compose": "<span class=\"cmt\">// Style=Default, VisualType=Icon, hasButton=True — 26356:13971, 360 × 307.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading = <span class=\"str\">\"No transactions yet\"</span>,\n    description = <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style = <span class=\"typ\">EBEmptyStateStyle</span>.<span class=\"prp\">Default</span>,\n    visualType = <span class=\"typ\">EBEmptyStateVisual</span>.<span class=\"prp\">Icon</span>,\n    visual = { <span class=\"typ\">Image</span>(painterResource(R.drawable.empty), null) },\n    actionLabel = <span class=\"str\">\"Send money\"</span>,\n    onAction = { startTransfer() }\n)"
      },
      {
        "subheading": "Subtle · Icon, no button",
        "swift": "<span class=\"cmt\">// Style=Subtle, VisualType=Icon, hasButton=False — 26356:13979, 360 × 257.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading: <span class=\"str\">\"No transactions yet\"</span>,\n    description: <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style: .<span class=\"prp\">subtle</span>\n)\n.<span class=\"fn\">ebVisual</span>(.<span class=\"prp\">icon</span>) { <span class=\"typ\">Image</span>(<span class=\"str\">\"empty\"</span>) }",
        "compose": "<span class=\"cmt\">// Style=Subtle, VisualType=Icon, hasButton=False — 26356:13979, 360 × 257.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading = <span class=\"str\">\"No transactions yet\"</span>,\n    description = <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style = <span class=\"typ\">EBEmptyStateStyle</span>.<span class=\"prp\">Subtle</span>,\n    visualType = <span class=\"typ\">EBEmptyStateVisual</span>.<span class=\"prp\">Icon</span>,\n    visual = { <span class=\"typ\">Image</span>(painterResource(R.drawable.empty), null) }\n)"
      },
      {
        "subheading": "Default · Asset",
        "swift": "<span class=\"cmt\">// Style=Default, VisualType=Asset, hasButton=True — 26356:13987, 360 × 425.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading: <span class=\"str\">\"No transactions yet\"</span>,\n    description: <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style: .<span class=\"prp\">default</span>\n)\n.<span class=\"fn\">ebVisual</span>(.<span class=\"prp\">asset</span>) { <span class=\"typ\">Image</span>(<span class=\"str\">\"empty\"</span>) }\n.<span class=\"fn\">ebAction</span>(<span class=\"str\">\"Send money\"</span>) { startTransfer() }",
        "compose": "<span class=\"cmt\">// Style=Default, VisualType=Asset, hasButton=True — 26356:13987, 360 × 425.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading = <span class=\"str\">\"No transactions yet\"</span>,\n    description = <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style = <span class=\"typ\">EBEmptyStateStyle</span>.<span class=\"prp\">Default</span>,\n    visualType = <span class=\"typ\">EBEmptyStateVisual</span>.<span class=\"prp\">Asset</span>,\n    visual = { <span class=\"typ\">Image</span>(painterResource(R.drawable.empty), null) },\n    actionLabel = <span class=\"str\">\"Send money\"</span>,\n    onAction = { startTransfer() }\n)"
      },
      {
        "subheading": "Subtle · Asset",
        "swift": "<span class=\"cmt\">// Style=Subtle, VisualType=Asset, hasButton=True — 26356:13995, 360 × 425.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading: <span class=\"str\">\"No transactions yet\"</span>,\n    description: <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style: .<span class=\"prp\">subtle</span>\n)\n.<span class=\"fn\">ebVisual</span>(.<span class=\"prp\">asset</span>) { <span class=\"typ\">Image</span>(<span class=\"str\">\"empty\"</span>) }\n.<span class=\"fn\">ebAction</span>(<span class=\"str\">\"Send money\"</span>) { startTransfer() }",
        "compose": "<span class=\"cmt\">// Style=Subtle, VisualType=Asset, hasButton=True — 26356:13995, 360 × 425.</span>\n<span class=\"typ\">EBEmptyState</span>(\n    heading = <span class=\"str\">\"No transactions yet\"</span>,\n    description = <span class=\"str\">\"Your activity will show up here.\"</span>,\n    style = <span class=\"typ\">EBEmptyStateStyle</span>.<span class=\"prp\">Subtle</span>,\n    visualType = <span class=\"typ\">EBEmptyStateVisual</span>.<span class=\"prp\">Asset</span>,\n    visual = { <span class=\"typ\">Image</span>(painterResource(R.drawable.empty), null) },\n    actionLabel = <span class=\"str\">\"Send money\"</span>,\n    onAction = { startTransfer() }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Heading",
        "ios": "Mark <code>#heading</code> <code>.accessibilityAddTraits(.isHeader)</code> — it names why the screen is empty.",
        "android": "<code>Modifier.semantics { heading() }</code>."
      },
      {
        "requirement": "Visual",
        "ios": "The icon or asset is decorative when the heading already explains the state — <code>.accessibilityHidden(true)</code>.",
        "android": "<code>contentDescription = null</code>."
      },
      {
        "requirement": "Action",
        "ios": "The 312 × 50 button clears 44pt. Its label should say what happens, not \"Label\" or \"OK\".",
        "android": "Clears 48dp; same guidance on the label."
      },
      {
        "requirement": "Announcement",
        "ios": "When a search or filter returns nothing, announce the heading — the empty state replaces content the user expected.",
        "android": "<code>liveRegion = LiveRegionMode.Polite</code> on the container."
      },
      {
        "requirement": "Contrast",
        "ios": "Heading #0A2757 is 14.58:1 on Default and 13.80:1 on Subtle. Description #6780A9 is 4.01:1 on Default and 3.80:1 on Subtle at 12pt — both below 4.5:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Empty State where a list, search or feed has nothing to show.",
        "dontText": "Don’t use it for errors — that is Inline Message with Type=Error."
      },
      {
        "doText": "Use Icon for compact areas and Asset for a full-screen moment.",
        "dontText": "Don’t ship the purple Slot Block placeholder — swap in a real icon or illustration."
      },
      {
        "doText": "Pick Subtle when the empty state sits inside a card on a white screen.",
        "dontText": "Don’t put Subtle on a #F6F9FD page; it disappears."
      },
      {
        "doText": "Offer one action that gets the user out of the empty state.",
        "dontText": "Don’t add a button with nowhere useful to go — set <code>hasButton=False</code>."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Header</code> and the two <code>⤷ …Slot</code> layers are semantic. The text layers keep the legacy <code>#</code> prefix — <code>#heading</code>, <code>#description</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two PascalCase axes — <code>Style</code>, <code>VisualType</code> — and one <code>hasButton</code> boolean on <code>True</code>/<code>False</code>; a complete 2 × 2 matrix."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three text layers resolve <code>matched</code> — <code>Primary/Headlines/Block</code>, <code>Secondary/Bold/Caption</code>, <code>Primary/Label/Large</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A vertical stack that hugs — 48 + 64 + 97 + 50 + 48 = 307, 24 + 230 + 97 + 50 + 24 = 425 — maps to one <code>EBEmptyState</code> with a style enum, a visual slot and an optional action."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A static surface; the button carries its own states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The visual and action are real SLOTs with 4 swap options each; the button is a <code>Button - Large/Medium</code> instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Two enums, a boolean and two slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>Style</code> (2) × <code>VisualType</code> (2) = 4 variants, all built. <code>hasButton</code> is a boolean and adds none; turning it off removes the 50px ActionSlot.",
      "columns": [
        "Style",
        "VisualType",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Icon",
            "<code>26356:13971</code>",
            "360 × 307"
          ]
        },
        {
          "cells": [
            "Subtle",
            "Icon",
            "<code>26356:13979</code>",
            "360 × 307"
          ]
        },
        {
          "cells": [
            "Default",
            "Asset",
            "<code>26356:13987</code>",
            "360 × 425"
          ]
        },
        {
          "cells": [
            "Subtle",
            "Asset",
            "<code>26356:13995</code>",
            "360 × 425"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 26356:13970",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Two cards on retired nodes <code>27:169326</code> and <code>27:169339</code>, named White and Grey Blue, became one card with <code>Style</code>, <code>VisualType</code> and <code>hasButton</code>; the two slots are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> The stack hugs exactly — 48 + 64 + 97 + 50 + 48 = 307 for Icon, 24 + 230 + 97 + 50 + 24 = 425 for Asset — so <code>hasButton=False</code> removes the 50px ActionSlot. The Slot Block placeholders use their 4/4 dash from <code>get_svg</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> <code>Primary/Headlines/Block</code>, <code>Secondary/Bold/Caption</code> and <code>Primary/Label/Large</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab was rebuilt on the live panel.</strong> Install is <code>com.eastblue.ds:empty-state:2.1.1</code>, with four snippets and a four-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored.</strong> C2, C3, C4, C6 Ready; C1 Needs Refinement; C5 Not Applicable; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Text layers keep the <code>#</code> prefix</strong> — <code>#heading</code>, <code>#description</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Description fails AA</strong> — #6780A9 is 4.01:1 on Default and 3.80:1 on Subtle at 12pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 27:169325",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 2 color variants + 7 boolean props. Icon + asset placeholders. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Property naming mismatch</strong> — <code>color</code> values don't match token namespace (<code>default</code>/<code>subtle</code>). <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Duplicate <code>header</code>/<code>header1</code> booleans</strong> + duplicate top/bottom heading surfaces. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Icon + asset are placeholders</strong> — should be Figma Slots. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
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
