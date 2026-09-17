import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 26327:11046: three variant axes
// and nothing else. Figma has no active-tab property — the first Tab Item
// is the selected one in every variant.
const tabsDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Orientation',
        prop: 'orientation',
        defaultValue: 'vertical',
        options: [
          { value: 'vertical', label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'medium',
        options: [
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
      {
        label: 'Tabs Count',
        prop: 'count',
        defaultValue: '4',
        options: [
          { value: '4', label: '4' },
          { value: '3', label: '3' },
          { value: '2', label: '2' },
        ],
      },
    ],
  },
];

export const tabs: ComponentData = {
  "meta": {
    "slug": "tabs",
    "name": "Tabs",
    "node": "26327:11046",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26327-11046",
    "description": "The Tabs container composes a row of <strong>Tab Item</strong> instances. 12 variants across <code>Orientation</code> (Vertical/Horizontal) × <code>Size</code> (Medium/Large) × <code>Tabs Count</code> (2/3/4).",
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
    "navGroup": "Tabs",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — container is clean",
      "text": "Renamed to <strong>Tabs</strong> (plural), disambiguating it from the Tab Item atom, and rebuilt to 12 variants across <code>Orientation</code> × <code>Size</code> × <code>Tabs Count</code>. Every cell is a real Tab Item instance, so atom changes propagate. The fixed <code>Tabs Count</code> axis and the absence of a scrollable variant are both intentional — GCash tabs are capped at 2–4. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Tabs sit below a Title Bar to switch between screen sections.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"22\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"20\" width=\"132\" height=\"8\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"20\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Title</text>\n          \n          <rect x=\"34\" y=\"34\" width=\"132\" height=\"20\" fill=\"#FFFFFF\"></rect>\n          <rect x=\"34\" y=\"52\" width=\"44\" height=\"2\" fill=\"#005CE5\"></rect>\n          <rect x=\"78\" y=\"52\" width=\"44\" height=\"2\" fill=\"#E5EBF4\"></rect>\n          <rect x=\"122\" y=\"52\" width=\"44\" height=\"2\" fill=\"#E5EBF4\"></rect>\n          <text x=\"56\" y=\"48\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Overview</text>\n          <text x=\"100\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Details</text>\n          <text x=\"144\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">History</text>\n          \n          <rect x=\"42\" y=\"62\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"42\" y=\"76\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"42\" y=\"90\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tabs-demo-preview\"><svg width=\"248\" height=\"84\" viewBox=\"0 0 248 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"248\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"217\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"217\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"186\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">tabsCount</span><select class=\"demo-panel-select\" id=\"tabs-demo-count\" onchange=\"updateTabsDemo()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">active</span><select class=\"demo-panel-select\" id=\"tabs-demo-active\" onchange=\"updateTabsDemo()\"><option value=\"0\" selected=\"\">1st</option><option value=\"1\">2nd</option><option value=\"2\">3rd</option><option value=\"3\">4th</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used anywhere a screen switches between sections — Transactions, Vouchers, Profile, category filters. Two orientations and two sizes cover both compact rows and vertical rails."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own layout and spacing across all 12 variants, and delegates every cell to the Tab Item atom rather than redrawing tabs locally."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Named <strong>Tabs</strong> (plural), correctly distinguishing the container from the Tab Item atom. Three orthogonal props — <code>Orientation</code> × <code>Size</code> × <code>Tabs Count</code> = a complete 2 × 2 × 3 matrix with no invalid cells."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Every cell is a real <code>Tab Item</code> INSTANCE, so atom changes propagate automatically. Orientation and Size forward down to the nested items."
      }
    ],
    "behavior": [
      {
        "state": "Horizontal",
        "ios": "yes",
        "android": "yes",
        "property": "Orientation=Horizontal",
        "notes": "Tabs laid out in a row with the label beside the optional icon. Medium 48px tall, Large 50px."
      },
      {
        "state": "Vertical",
        "ios": "yes",
        "android": "yes",
        "property": "Orientation=Vertical",
        "notes": "Tabs stacked with the icon above the label, 92px tall. Used for rail-style navigation."
      },
      {
        "state": "Tab count",
        "ios": "yes",
        "android": "yes",
        "property": "Tabs Count=2 | 3 | 4",
        "notes": "Container width adapts to the number of tabs. Capped at 4 by design — GCash tab bars do not exceed four destinations."
      },
      {
        "state": "5+ tabs / scrollable",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not modelled by design. The 2–4 cap is deliberate, so horizontal overflow and scrolling do not arise."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Component renamed <code>Tab</code> → <strong>Tabs</strong> (plural) — the container is no longer confusable with the Tab Item atom. (C2)"
      },
      {
        "body": "v2.0: Rebuilt to 12 variants across <code>Orientation</code> (Vertical / Horizontal) × <code>Size</code> (Medium / Large) × <code>Tabs Count</code> (2 / 3 / 4) — a complete 2 × 2 × 3 matrix, up from the earlier count-only split. (C2)"
      },
      {
        "body": "v2.0: <code>Tabs Count</code> as a fixed variant axis confirmed <strong>intentional</strong> — GCash tab bars are capped at 2–4 destinations, so a Slot-based container is not needed here. (C2)"
      },
      {
        "body": "v2.0: Absence of a scrollable / overflow variant confirmed <strong>intentional</strong> — follows directly from the 2–4 cap; horizontal overflow never occurs. (C5)"
      },
      {
        "body": "v2.0: Composition verified — every cell is a real <code>Tab Item</code> INSTANCE rather than a redrawn tab, so atom changes propagate to all 12 variants. (C4)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "The rename and container structure are settled, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBTabs</code>.",
        "body": "Wire <code>Orientation</code>, <code>Size</code>, and <code>Tabs Count</code> to the SwiftUI / Compose API, forwarding orientation and size down to the nested <code>EBTabItem</code> children.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Rename \"Tab\" → \"Tabs\".",
        "body": "v2.0: Applied — the container is now plural, disambiguating it from the Tab Item atom.",
        "tag": "Rename"
      },
      {
        "headline": "Drop the <code>tabsCount</code> variant.",
        "body": "v2.0: Reviewed and closed as not needed — the 2–4 cap is deliberate, so a flexible slot-based container would add complexity without covering a real case.",
        "tag": "Property"
      },
      {
        "headline": "Add a scrollable variant.",
        "body": "v2.0: Reviewed and closed as not needed — follows from the 2–4 cap; overflow never occurs.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "tabs-spec-main",
        "demoKey": "main",
        "title": "Tabs",
        "node": "26327:11046",
        "description": "",
        "previewHtml": "<div id=\"tabs-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": tabsDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Orientation",
                "value": "Vertical",
                "prop": "orientation"
              },
              {
                "key": "Size",
                "value": "Medium",
                "prop": "size"
              },
              {
                "key": "Tabs Count",
                "value": "4",
                "prop": "count"
              },
              {
                "key": "Cells",
                "value": "Tab Item instances — Orientation and Size forward down"
              },
              {
                "key": "Selected tab",
                "value": "The first cell — no active-tab property"
              },
              {
                "key": "Resolved variant",
                "value": "26327:11047 · 260 × 92",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "orientation:vertical|size:medium|count:4": {
                    "value": "26327:11047 · 260 × 92"
                  },
                  "orientation:vertical|size:large|count:4": {
                    "value": "26327:11052 · 280 × 92"
                  },
                  "orientation:horizontal|size:large|count:4": {
                    "value": "26327:11057 · 408 × 50"
                  },
                  "orientation:horizontal|size:medium|count:4": {
                    "value": "26327:11062 · 388 × 48"
                  },
                  "orientation:vertical|size:medium|count:3": {
                    "value": "26327:11067 · 195 × 92"
                  },
                  "orientation:vertical|size:large|count:3": {
                    "value": "26327:11071 · 210 × 92"
                  },
                  "orientation:horizontal|size:large|count:3": {
                    "value": "26327:11075 · 306 × 50"
                  },
                  "orientation:horizontal|size:medium|count:3": {
                    "value": "26327:11079 · 291 × 48"
                  },
                  "orientation:vertical|size:medium|count:2": {
                    "value": "26327:11083 · 130 × 92"
                  },
                  "orientation:vertical|size:large|count:2": {
                    "value": "26327:11086 · 140 × 92"
                  },
                  "orientation:horizontal|size:large|count:2": {
                    "value": "26327:11089 · 204 × 50"
                  },
                  "orientation:horizontal|size:medium|count:2": {
                    "value": "26327:11092 · 194 × 48"
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
                "value": "None — the container has no fill"
              },
              {
                "key": "Selected label",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Selected underline",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Unselected label",
                "value": "#6780A9",
                "token": "—"
              },
              {
                "key": "Unselected underline",
                "value": "#E5EBF4",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Tab label",
                "value": "Primary/Label/Base",
                "mono": true,
                "variants": {
                  "size:large": {
                    "value": "Primary/Label/Large"
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
                "key": "Container size (Figma)",
                "value": "260 × 92",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Cell",
                "value": "65 × 92 each, flush",
                "mono": true,
                "prop": "item-readout"
              },
              {
                "key": "Preview",
                "value": "Drawn at the 4-tab width, 260 — 65 per cell",
                "mono": true,
                "prop": "preview-readout"
              },
              {
                "key": "Gap",
                "value": "0 — cells sit edge to edge",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "2px along the bottom of every cell",
                "mono": true
              },
              {
                "key": "Cell padding",
                "value": "12px sides · 8px to the Icon Slot",
                "mono": true
              }
            ]
          }
        ],
        "swift": "EBTabs(selection: $tab) {\n    EBTabItem(\"Label\").tag(0)\n    EBTabItem(\"Label\").tag(1)\n    EBTabItem(\"Label\").tag(2)\n    EBTabItem(\"Label\").tag(3)\n}\n    .ebOrientation(.vertical)\n    .ebControlSize(.medium)",
        "compose": "EBTabs(\n    selectedIndex = selected,\n    labels = listOf(\"Label\", \"Label\", \"Label\", \"Label\"),\n    orientation = EBTabOrientation.Vertical,\n    size = EBTabSize.Medium,\n    onSelect = { selected = it }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Cell State",
        "description": "The container paints nothing — every colour belongs to the nested <code>Tab Item</code> instances, read off set <code>26327:10941</code>. The first cell ships selected in all 12 variants. The preview draws every count at the 4-tab width so the group keeps one size; Figma's own widths are in the Layout rows and the Variants inventory. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Label",
          "Underline"
        ],
        "rows": [
          {
            "role": "Selected cell",
            "token": "—",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Unselected cells",
            "token": "—",
            "values": [
              "#6780A9",
              "#E5EBF4"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tabs:2.0.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.tabs.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>26327:11046</code> — three variant axes and nothing else. Selection is state, not a Figma property: the first <code>Tab Item</code> ships selected in all 12 variants, so the native API owns it.",
      "rows": [
        {
          "figma": "Orientation — Vertical, Horizontal",
          "swift": "<code>.ebOrientation(.vertical / .horizontal)</code>",
          "compose": "<code>orientation = EBTabOrientation.Vertical / Horizontal</code>"
        },
        {
          "figma": "Size — Medium, Large",
          "swift": "<code>.ebControlSize(.medium / .large)</code>",
          "compose": "<code>size = EBTabSize.Medium / Large</code>"
        },
        {
          "figma": "Tabs Count — 4, 3, 2",
          "swift": "the number of <code>EBTabItem</code> children (2–4)",
          "compose": "<code>labels: List&lt;String&gt;</code> (2–4 entries)"
        },
        {
          "figma": "— nested <code>Tab Item</code> instances",
          "swift": "<code>EBTabItem</code> — see its own page",
          "compose": "<code>EBTabItem</code> — see its own page"
        },
        {
          "figma": "— no active-tab property",
          "swift": "<code>selection: Binding&lt;Int&gt;</code>",
          "compose": "<code>selectedIndex: Int</code> + <code>onSelect: (Int) -&gt; Unit</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tabs/EBTabs.swift",
        "compose": "android/components/tabs/EBTabs.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Horizontal · Medium · 4 tabs",
        "swift": "<span class=\"cmt\">// Orientation=Horizontal, Size=Medium, Tabs Count=4 — 26327:11062, 388 × 48.</span>\n<span class=\"typ\">EBTabs</span>(selection: $tab) {\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(0)\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(1)\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(2)\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(3)\n}\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">horizontal</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">medium</span>)",
        "compose": "<span class=\"cmt\">// Orientation=Horizontal, Size=Medium, Tabs Count=4 — 26327:11062, 388 × 48.</span>\n<span class=\"typ\">EBTabs</span>(\n    selectedIndex = selected,\n    labels = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Horizontal</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Medium</span>,\n    onSelect = { selected = it }\n)"
      },
      {
        "subheading": "Horizontal · Large · 2 tabs",
        "swift": "<span class=\"cmt\">// Orientation=Horizontal, Size=Large, Tabs Count=2 — 26327:11089, 204 × 50.</span>\n<span class=\"typ\">EBTabs</span>(selection: $tab) {\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(0)\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(1)\n}\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">horizontal</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// Orientation=Horizontal, Size=Large, Tabs Count=2 — 26327:11089, 204 × 50.</span>\n<span class=\"typ\">EBTabs</span>(\n    selectedIndex = selected,\n    labels = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Horizontal</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Large</span>,\n    onSelect = { selected = it }\n)"
      },
      {
        "subheading": "Vertical · Medium · 3 tabs",
        "swift": "<span class=\"cmt\">// Orientation=Vertical, Size=Medium, Tabs Count=3 — 26327:11067, 195 × 92.</span>\n<span class=\"typ\">EBTabs</span>(selection: $tab) {\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(0)\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(1)\n    <span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>).<span class=\"fn\">tag</span>(2)\n}\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">vertical</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">medium</span>)",
        "compose": "<span class=\"cmt\">// Orientation=Vertical, Size=Medium, Tabs Count=3 — 26327:11067, 195 × 92.</span>\n<span class=\"typ\">EBTabs</span>(\n    selectedIndex = selected,\n    labels = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Vertical</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Medium</span>,\n    onSelect = { selected = it }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tab list semantics",
        "ios": "Group the row as one tab bar and mark the selected cell with <code>.accessibilityAddTraits(.isSelected)</code>; each cell keeps the button trait.",
        "android": "Use <code>TabRow</code> with <code>Modifier.semantics { role = Role.Tab; selected = … }</code> per tab."
      },
      {
        "requirement": "Selection announcement",
        "ios": "Announce the new section when selection changes; the panel below should move focus only if its content replaces the screen.",
        "android": "Same — rely on the selected semantics rather than a manual announcement."
      },
      {
        "requirement": "Touch targets",
        "ios": "Cells are 65–102 wide and 48–92 tall; the horizontal Medium row is exactly 48 — keep the full cell tappable and do not inset it.",
        "android": "Same; 48dp is the minimum, so do not shrink the row."
      },
      {
        "requirement": "Count cap",
        "ios": "Two to four tabs. With four at Large the row is 408 wide, which overflows a 360 screen — scroll the container or drop to Medium.",
        "android": "Same — <code>ScrollableTabRow</code> if the row exceeds the screen."
      },
      {
        "requirement": "Contrast",
        "ios": "Selected #005CE5 is 5.73:1. Unselected #6780A9 is 4.01:1 at 16–18pt bold, below the 4.5:1 AA minimum — inherited from Tab Item.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Tabs to switch between two and four sections of one screen.",
        "dontText": "Don’t use it for navigation between screens — that is the app’s bottom bar."
      },
      {
        "doText": "Pick the count that matches your sections; the container width follows (4 × 97 = 388 at Horizontal Medium).",
        "dontText": "Don’t author a fifth tab — the 2–4 cap is deliberate, and no scrollable variant exists."
      },
      {
        "doText": "Check the row against a 360 screen: Horizontal Large with 4 tabs is 408 wide.",
        "dontText": "Don’t let the row overflow silently; drop to Medium or scroll."
      },
      {
        "doText": "Let the container own selection and forward Orientation and Size to the cells.",
        "dontText": "Don’t detach a cell to mark it selected — Figma bakes the first cell as selected."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The container holds nothing but <code>Tab Item</code> instances — no wrapper frames and no locally drawn tabs. The lowercase layer names inside the cells belong to Tab Item and are assessed there."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Renamed <strong>Tabs</strong> (v2.0) and a complete 2 × 2 × 3 matrix. But <code>Tabs Count</code> carries a space, where every other property in the file is single-token PascalCase, and a count as a variant axis means a fifth tab needs a new variant rather than another child."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The container paints nothing; all colour and type belong to <code>Tab Item</code>, whose three text layers resolve <code>matched</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one <code>EBTabs</code> over a list of items. Two things a developer needs from outside the set: selection is not a property (the first cell is baked selected), and Horizontal Large with 4 tabs is 408 wide, past a 360 screen, with no scrollable variant."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The container has no states of its own — Default, Hover and Disabled live on Tab Item."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No assets. Every cell is a real instance, so atom changes propagate."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Three clean axes to map once the native library exists; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 12,
      "description": "<code>Orientation</code> (2) × <code>Size</code> (2) × <code>Tabs Count</code> (3) = 12 variants, a complete matrix. Width is the cell width times the count, with no gap: 65, 70, 97 and 102 per cell.",
      "columns": [
        "Orientation",
        "Size",
        "Tabs Count",
        "Node ID",
        "Dimensions",
        "Cell"
      ],
      "rows": [
        {
          "cells": [
            "Vertical",
            "Medium",
            "4",
            "<code>26327:11047</code>",
            "260 × 92",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Large",
            "4",
            "<code>26327:11052</code>",
            "280 × 92",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Large",
            "4",
            "<code>26327:11057</code>",
            "408 × 50",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Medium",
            "4",
            "<code>26327:11062</code>",
            "388 × 48",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Medium",
            "3",
            "<code>26327:11067</code>",
            "195 × 92",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Large",
            "3",
            "<code>26327:11071</code>",
            "210 × 92",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Large",
            "3",
            "<code>26327:11075</code>",
            "306 × 50",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Medium",
            "3",
            "<code>26327:11079</code>",
            "291 × 48",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Medium",
            "2",
            "<code>26327:11083</code>",
            "130 × 92",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Large",
            "2",
            "<code>26327:11086</code>",
            "140 × 92",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Large",
            "2",
            "<code>26327:11089</code>",
            "204 × 50",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Medium",
            "2",
            "<code>26327:11092</code>",
            "194 × 48",
            "97 × 48"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 26327:11046",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Three cards on retired <code>18482:*</code> nodes were split by tab count and carried an <em>Active tab</em> control Figma does not have. Now one card with <code>Orientation</code>, <code>Size</code> and <code>Tabs Count</code>, resolving all 12 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Cells are Tab Item at its hug width laid flush — 4 × 97 = 388, 3 × 97 = 291, 2 × 102 = 204 — with the first cell selected, matching <code>export_node_as_image</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> The cell label resolves <code>Primary/Label/Base</code> at Medium and <code>Primary/Label/Large</code> at Large, both matched on Tab Item.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab still described the 1.0.0 component.</strong> Rebuilt on the three live axes with <code>com.eastblue.ds:tabs:2.0.1</code>, three snippets and a 12-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored against v2.0.</strong> C1, C3, C6 Ready; C2 and C4 Needs Refinement on new findings; C5 Not Applicable; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview drawn at a constant width.</strong> Asked for: every count is drawn at the 4-tab width — 388 at Horizontal Medium, 260 at Vertical Medium — and the cells share it, so the group keeps one size while the count changes. Figma hugs instead, narrowing to 291 or 194 as tabs are removed, and that is what the Layout rows and the Variants inventory report.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong><code>Tabs Count</code> carries a space</strong> where every other property in the file is single-token PascalCase, and a count as a variant axis means a fifth tab needs a new variant. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Horizontal Large with 4 tabs is 408 wide</strong> — past a 360 screen, with no scrollable variant. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Selection is not a property.</strong> The first cell is baked selected in all 12 variants, so the native API owns selection and the set cannot show a different active tab. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Unselected label fails AA</strong> — #6780A9 on white is 4.01:1, inherited from Tab Item. <span class=\"tag-open tag-c3\">Open</span>",
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
      "header": "Initial Assessment · node 18482:33249",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (tabsCount 2/3/4). Container composing Tab Item children. Recommended rename \"Tab\" → \"Tabs\" and dropping the count variant.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Component named singular</strong> — \"Tab\" should be \"Tabs\" (plural) to disambiguate from the Tab Item atom.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong><code>tabsCount</code> is a variant property</strong> — Should be removed; the container should accept a list of Tab Items instead of exposing a fixed count enum.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No scrollable variant</strong> — 5+ tabs have no documented overflow pattern.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
