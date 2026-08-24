import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/empty-state.js`.
const emptyStateDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasIcon',
        prop: 'icon',
        defaultValue: 'true',
        options: [
          { value: 'true',  label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'hasAsset',
        prop: 'asset',
        defaultValue: 'true',
        options: [
          { value: 'true',  label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'hasButton',
        prop: 'button',
        defaultValue: 'true',
        options: [
          { value: 'true',  label: 'true' },
          { value: 'false', label: 'false' },
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
        "cardKey": "white",
        "demoKey": "white",
        "demoControls": emptyStateDemoControls,
        "title": "White",
        "node": "27:169326",
        "description": "White background — use when the surface behind is dark or tinted. Asset placeholder uses <code>#EEF2F9</code>.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "White",
                "mono": false
              },
              {
                "key": "Style",
                "value": "Default",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "empty-state/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "empty-state/color/default/label-title" },
              { "key": "Description", "value": "#6780A9", "token": "empty-state/color/default/description" },
              { "key": "Placeholder", "value": "#EEF2F9", "token": "empty-state/color/default/placeholder" },
              { "key": "CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "328px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 horizontal · 24 vertical",
                "mono": true
              },
              {
                "key": "Illustration size",
                "value": "120 × 120",
                "mono": true
              },
              {
                "key": "Gap (illus ↔ title)",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBEmptyState</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Nothing here yet\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Try a different filter\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBEmptyState</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Nothing here yet\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Try a different filter\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEmptyStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"es-spec-white-host\"></div>"
      },
      {
        "cardKey": "grey-blue",
        "demoKey": "grey-blue",
        "demoControls": emptyStateDemoControls,
        "title": "Grey Blue",
        "node": "27:169339",
        "description": "Light blue-grey background (<code>#F6F9FD</code>) — use when the surface behind is white. Asset placeholder uses <code>#D7E0EF</code>.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Grey Blue",
                "mono": false
              },
              {
                "key": "Style",
                "value": "Default",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "empty-state/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "empty-state/color/default/label-title" },
              { "key": "Description", "value": "#6780A9", "token": "empty-state/color/default/description" },
              { "key": "Placeholder", "value": "#EEF2F9", "token": "empty-state/color/default/placeholder" },
              { "key": "CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "328px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 horizontal · 24 vertical",
                "mono": true
              },
              {
                "key": "Illustration size",
                "value": "120 × 120",
                "mono": true
              },
              {
                "key": "Gap (illus ↔ title)",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBEmptyState</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Nothing here yet\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Try a different filter\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBEmptyState</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Nothing here yet\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Try a different filter\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBEmptyStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"es-spec-grey-blue-host\"></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Style",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default (white)",
            "token": "bg",
            "values": [
              "main/empty-state/color/default/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/empty-state/color/default/label-title",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/empty-state/color/default/description",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "asset placeholder",
            "values": [
              "main/empty-state/color/default/placeholder",
              "#EEF2F9"
            ]
          },
          {
            "role": "Subtle (grey blue)",
            "token": "bg",
            "values": [
              "main/empty-state/color/subtle/bg",
              "#F6F9FD"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/empty-state/color/subtle/label-title",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/empty-state/color/subtle/description",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "asset placeholder",
            "values": [
              "main/empty-state/color/subtle/placeholder",
              "#D7E0EF"
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
            "role": "Container width",
            "token": "—",
            "values": [
              "360px"
            ]
          },
          {
            "role": "Top padding",
            "token": "—",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Bottom padding",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Top header padding",
            "token": "space/space-16 + space/space-24",
            "values": [
              "24h / 16b"
            ]
          },
          {
            "role": "Content padding",
            "token": "space/space-24",
            "values": [
              "24h / 16t"
            ]
          },
          {
            "role": "Content gap (title ↔ description)",
            "token": "—",
            "values": [
              "10px"
            ]
          },
          {
            "role": "Button top padding",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Icon slot size",
            "token": "—",
            "values": [
              "64 × 64"
            ]
          },
          {
            "role": "Asset size",
            "token": "—",
            "values": [
              "360 × 230"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "Top heading",
            "token": "Primary/Headlines/Block",
            "values": [
              "Proxima Soft Bold · 18 / 23 · +0.25"
            ]
          },
          {
            "role": "Top description",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda Semibold · 12 / 18"
            ]
          },
          {
            "role": "Main heading",
            "token": "Primary/Headlines/Segment",
            "values": [
              "Proxima Soft Bold · 20 / 24"
            ]
          },
          {
            "role": "Description",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda Semibold · 12 / 18"
            ]
          },
          {
            "role": "Button label",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold · 18 / 18 · +0.25"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:empty-state:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "color=white/grey blue",
          "swift": "style: EBEmptyStateStyle",
          "compose": ".ebStyle(.default/.subtle)"
        },
        {
          "figma": "header1 / topHeading",
          "swift": "title: String",
          "compose": "title: String"
        },
        {
          "figma": "topDescription / description",
          "swift": "description: String?",
          "compose": "description: String?"
        },
        {
          "figma": "hasIcon + icon placeholder",
          "swift": "Figma Slot → ViewBuilder",
          "compose": "@ViewBuilder icon"
        },
        {
          "figma": "hasAsset + asset placeholder",
          "swift": "Figma Slot → ViewBuilder",
          "compose": "@ViewBuilder asset"
        },
        {
          "figma": "hasButton + buttonInstance",
          "swift": "Figma Slot → ViewBuilder",
          "compose": "@ViewBuilder action"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/EmptyState/EBEmptyState.swift",
        "compose": "android/components/emptystate/EBEmptyState.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Empty transaction list — icon + title + description + action</span>\n<span class=\"typ\">EBEmptyState</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"No transactions yet\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Your transactions will show up here.\"</span>,\n    <span class=\"prp\">icon</span>: { <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"tray\"</span>) },\n    <span class=\"prp\">action</span>: { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Cash In\"</span>) { /* ... */ } }\n)\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">default</span>)\n\n<span class=\"cmt\">// Full illustration — asset slot instead of icon</span>\n<span class=\"typ\">EBEmptyState</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"No favorites added\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Tap the heart on any contact to save them here.\"</span>,\n    <span class=\"prp\">asset</span>: { <span class=\"typ\">Image</span>(<span class=\"str\">\"empty-favorites\"</span>).resizable().scaledToFit() }\n)\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">subtle</span>)",
        "compose": "<span class=\"cmt\">// Empty transaction list — icon + title + description + action</span>\n<span class=\"typ\">EBEmptyState</span>(\n    title = <span class=\"str\">\"No transactions yet\"</span>,\n    description = <span class=\"str\">\"Your transactions will show up here.\"</span>,\n    style = <span class=\"typ\">EBEmptyStateStyle</span>.<span class=\"prp\">Default</span>,\n    icon = { <span class=\"typ\">Icon</span>(painterResource(R.drawable.tray), contentDescription = null) },\n    action = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Cash In\"</span>, onClick = { /* ... */ }) }\n)\n\n<span class=\"cmt\">// Full illustration — asset slot instead of icon</span>\n<span class=\"typ\">EBEmptyState</span>(\n    title = <span class=\"str\">\"No favorites added\"</span>,\n    description = <span class=\"str\">\"Tap the heart on any contact to save them here.\"</span>,\n    style = <span class=\"typ\">EBEmptyStateStyle</span>.<span class=\"prp\">Subtle</span>,\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.empty_favorites), contentDescription = null) }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "Group as a single accessibility element with combined label",
        "android": "<code>mergeDescendants = true</code> on the container"
      },
      {
        "requirement": "Decorative icon / asset",
        "ios": "<code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      },
      {
        "requirement": "Action button",
        "ios": "Separate accessibility element with its own label",
        "android": "Standard Button semantics"
      },
      {
        "requirement": "Live region",
        "ios": "Announce when empty state appears (e.g. after filtering returns 0 results)",
        "android": "<code>liveRegion = LiveRegionMode.Polite</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use for first-run, no-results, and \"nothing here yet\" surfaces. Always include a primary action when the user can take a step to fill the empty state.",
        "dontText": "Use as an error surface — use Inline Message (error type) or a Toast. Empty State assumes the absence of content is expected, not a failure."
      },
      {
        "doText": "Pick either icon or illustration. Don't stack both — the duplication adds visual noise without adding meaning.",
        "dontText": "Leave the description blank — a one-line context sentence (\"Your transactions will show up here\") teaches the user what the feature does."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic: <code>header</code>, <code>content</code>, <code>asset-container</code>, <code>button-container</code>, <code>Icon-Slot</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Color values don't match tokens; duplicate <code>header</code>/<code>header1</code>; 7 booleans = 256 combos."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound — just mismatched in the property names."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "VStack / Column with slots — straightforward native builds."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only surface."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Icon + asset are placeholders. Should be slots."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2 restructure."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "Boolean props (<code>hasIcon</code>, <code>hasAsset</code>, <code>hasButton</code>, <code>header</code>, <code>header1</code>, <code>topDescription</code>, <code>topHeading</code>) multiply the effective prop combinations to 256. After restructure to slot-based API, this collapses to 2 <code>style</code> variants × optional slots — unlimited configurations without variant explosion.",
      "columns": [
        "color (current)",
        "Proposed style",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "<code>white</code>",
            "default",
            "27:169326"
          ]
        },
        {
          "cells": [
            "<code>grey blue</code>",
            "subtle",
            "27:169339"
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
