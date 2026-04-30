import type { ComponentData } from '../types';

export const table: ComponentData = {
  "meta": {
    "slug": "table",
    "name": "Table",
    "node": "47:326260",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=47-326260",
    "description": "A structured table primitive for displaying rows of label/value or column-aligned data.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Table",
    "verdict": {
      "kind": "fix",
      "title": "Collapse the family and rethink Table on mobile",
      "text": "The 3-component setup (Table + Table - Item + Table - Label) hardcodes a column-count variant matrix that doesn't scale. On mobile, tabular data almost always renders as a vertical stack of label/value pairs — which is exactly what the existing <strong>Inline Text</strong> component already does. Evaluate whether Table should ship as a DS primitive at all, or be reserved for true data-dense desktop contexts while mobile screens compose <code>List</code> + <code>Inline Text</code> rows instead. If Table stays, collapse the matrix into a single data-driven row (<code>columns: [Column]</code>) with named <code>leading</code> / <code>trailing</code> slots and optional per-row icon."
    }
  },
  "overview": {
    "inContextNote": "Sticker sheet shows Table instances stacked on a Template Screen to build a static 6-row pattern — 1 header row + 5 content rows. No scroll, no sort, no selection.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"120\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Title</text>\n          \n          <rect x=\"40\" y=\"28\" width=\"140\" height=\"16\" fill=\"#F6F9FD\"></rect>\n          <text x=\"46\" y=\"38\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Header</text>\n          <text x=\"94\" y=\"38\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Column</text>\n          <text x=\"128\" y=\"38\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Column</text>\n          <text x=\"162\" y=\"38\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Column</text>\n          <line x1=\"40\" y1=\"44\" x2=\"180\" y2=\"44\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"46\" y=\"54\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"54\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"54\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"54\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"46\" y=\"66\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"66\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"66\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"66\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"46\" y=\"78\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"78\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"78\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"78\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"46\" y=\"90\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"90\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"90\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"90\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <rect x=\"56\" y=\"104\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"114\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-demo-preview\"><div style=\"width:360px; height:37px; background:#F6F9FD; border-bottom:1px solid #E5EBF4; padding:0 24px; display:flex; align-items:center; gap:16px; box-sizing:border-box; color:#0A2757;\"><div style=\"min-width:99px; width:99px; font-family:'Proxima Soft', system-ui; font-weight:700; font-size:14px; line-height:14px; letter-spacing:0.25px;\">Header</div><div style=\"flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; text-align:center;\">Column</span></div><div style=\"flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; text-align:center;\">Column</span></div><div style=\"flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; text-align:center;\">Column</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" id=\"table-demo-type\" onchange=\"updateTableDemo()\"><option value=\"header\" selected=\"\">header</option><option value=\"content\">content</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">no. of columns</span><select class=\"demo-panel-select\" id=\"table-demo-cols\" onchange=\"updateTableDemo()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">icon <span class=\"muted\" style=\"font-size:11px;\">(header only)</span></span><select class=\"demo-panel-select\" id=\"table-demo-icon\" onchange=\"updateTableDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Works for the narrow case of 2–4 equal-width columns with a left label and right descriptions. Breaks for mixed widths, amounts, badges, or sortable columns — all common table use cases."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Header row carries bg, border, label/column typography; content row carries label + description. But column count is locked at build time — consumers can't add or remove columns without detaching."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "<code>no. of columns</code> is a string enum with a period in the name — collides with C2 naming conventions. Three orphan sibling components (Table, Table - Item, Table - Label) when one data-driven row would suffice. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Items and Labels are declared as reusable atoms but the parent Table doesn't slot them — it re-implements the label and description directly. No real composition."
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "Three orphan components instead of one data-driven row.",
        "body": "Table, Table - Item, and Table - Label are published as separate components but only Table is consumed — Item and Label are never placed directly. Should collapse into a single row primitive that accepts a columns array.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>no. of columns</code> uses string enum with a period in the property name.",
        "body": "Should be an integer <code>columnCount</code> — the period breaks code-friendly naming and the string \"2\"/\"3\"/\"4\" can't interpolate to a data-driven row count.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No native mobile primitive matches this layout.",
        "body": "iOS SwiftUI <code>Table</code> is macOS/iPad-only; Material Compose has no Table primitive. On phones, tabular data is a vertical stack of label/value pairs (Inline Text) or a horizontally-scrollable list. Current 360px-fixed rows don't adapt.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No interaction state coverage.",
        "body": "Rows have no hover, pressed, focused, selected, or disabled states. If rows are ever tappable (drill-down into a row detail), there's no visual affordance.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Header icon is a raw placeholder circle.",
        "body": "<code>icon=yes</code> variants render a hardcoded <code>#C2C6CF</code> 24px circle with no instance swap or named slot. Consumers have no documented way to set the icon.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the family consolidates and native decision lands.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Reconsider whether Table belongs in a mobile-first DS.",
        "body": "GCash ships on phones where tables almost never render as true HTML-style tables. The sticker sheet pattern screen is doing what <strong>Inline Text</strong> already does — a stack of label / value rows. Two cleaner paths: (a) remove Table from core DS, publish usage guidance pointing to <code>List</code> + <code>Inline Text</code> for label/value data; (b) keep Table but scope it to genuine multi-column data (transaction history, scheduled payments, etc.) and rebuild it as a data-driven row.",
        "tag": "Family"
      },
      {
        "headline": "Collapse the three-component family into one row primitive.",
        "body": "Merge <em>Table</em>, <em>Table - Item</em>, and <em>Table - Label</em> into a single <strong>Table Row</strong> component with a <code>columns</code> slot array and a <code>role</code> variant (<code>header</code> / <code>content</code>). Eliminates the <code>no. of columns</code> variant explosion — 9 records collapse into 2 + slot content. Published node count drops from 3 components / 14 variants to 1 component / 2 variants.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>no. of columns</code> to an integer (or drop it entirely).",
        "body": "The period in the property name breaks C2 naming conventions. If the data-driven restructure lands, column count is inferred from the <code>columns</code> array and the prop disappears. Otherwise rename to <code>columnCount</code> with integer values.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the header icon placeholder with a named slot.",
        "body": "Declare an <code>icon</code> Slot on the header-role row so consumers drop in any 24px icon component. Drop the <code>icon=yes/no</code> boolean — slot presence signals intent. Maps cleanly to <code>@ViewBuilder</code> / <code>@Composable</code> slot.",
        "tag": "Slot"
      },
      {
        "headline": "Add row interaction states.",
        "body": "If rows are ever tappable (drill-down row detail, sortable columns), publish <code>default</code> / <code>pressed</code> / <code>selected</code> / <code>disabled</code> state variants. If rows stay display-only, document that explicitly so native devs wrap in a non-interactive container.",
        "tag": "State"
      },
      {
        "headline": "Introduce shared label/value token set with Inline Text.",
        "body": "Table label and Inline Text label serve the same semantic role — \"a thing and its value\". Aligning tokens (<code>main/table/color/label</code> with <code>main/inline-text/*</code>) reduces drift and supports cross-component theming.",
        "tag": "Token"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "header-row-—-37-/-65px-tall",
        "title": "Header row — 37 / 65px tall",
        "node": "47:323224",
        "description": "Subtle-bg row with bottom border. Primary-bold label on the left, semibold columns on the right. <code>icon=yes</code> grows height from 37 to 65px and adds a 24px placeholder circle above each column.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Row type",
                "value": "Header",
                "mono": false
              },
              {
                "key": "Height",
                "value": "37 / 65px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Subtle row bg", "value": "#D7D8DA", "token": "table/color/bg-subtle" },
              { "key": "Border", "value": "#828591", "token": "table/color/border" },
              { "key": "Label", "value": "#0A0A0B", "token": "table/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "table/color/description" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Header height",
                "value": "37 / 65px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
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
                "key": "Header style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Header font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              },
              {
                "key": "Body style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Body font",
                "value": "Proxima Soft Bold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTable.Header</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Section description\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Section description\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "content-row-—-56px-tall",
        "title": "Content row — 56px tall",
        "node": "47:325869",
        "description": "White bg. Bold 12px label on the left, 10px BarkAda Semibold description columns on the right (1, 2, or 3 of them).",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Row type",
                "value": "Content",
                "mono": false
              },
              {
                "key": "Height",
                "value": "56px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Subtle row bg", "value": "#D7D8DA", "token": "table/color/bg-subtle" },
              { "key": "Border", "value": "#828591", "token": "table/color/border" },
              { "key": "Label", "value": "#0A0A0B", "token": "table/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "table/color/description" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Header style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Header font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              },
              {
                "key": "Body style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Body font",
                "value": "Proxima Soft Bold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTable.Row</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Value\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Value\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Header bg",
            "token": "main/table/color/bg-subtle",
            "values": [
              "#F6F9FD",
              "–",
              "–"
            ]
          },
          {
            "role": "Content bg",
            "token": "main/table/color/bg",
            "values": [
              "#FFFFFF",
              "–",
              "–"
            ]
          },
          {
            "role": "Row border",
            "token": "main/table/color/border",
            "values": [
              "#E5EBF4",
              "–",
              "–"
            ]
          },
          {
            "role": "Label / column text",
            "token": "main/table/color/label",
            "values": [
              "#0A2757",
              "–",
              "–"
            ]
          },
          {
            "role": "Description text",
            "token": "main/table/color/description",
            "values": [
              "#6780A9",
              "–",
              "–"
            ]
          },
          {
            "role": "Header icon placeholder",
            "token": "— (hardcoded)",
            "values": [
              "#C2C6CF",
              "–",
              "–"
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
            "role": "Row width (fixed)",
            "token": "—",
            "values": [
              "360px"
            ]
          },
          {
            "role": "Header height (icon=no)",
            "token": "—",
            "values": [
              "37px"
            ]
          },
          {
            "role": "Header height (icon=yes)",
            "token": "—",
            "values": [
              "65px"
            ]
          },
          {
            "role": "Content row height",
            "token": "—",
            "values": [
              "56px"
            ]
          },
          {
            "role": "Horizontal padding",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Header pt / pb",
            "token": "space/space-8, space/space-12",
            "values": [
              "8 / 12px"
            ]
          },
          {
            "role": "Content py",
            "token": "—",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Column gap",
            "token": "—",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Label width",
            "token": "—",
            "values": [
              "99px min"
            ]
          },
          {
            "role": "Header icon size",
            "token": "—",
            "values": [
              "24 × 24px"
            ]
          },
          {
            "role": "Icon → column gap",
            "token": "space/space-2",
            "values": [
              "2px"
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
            "role": "Header label",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold · 14 / 14 · +0.25"
            ]
          },
          {
            "role": "Header column",
            "token": "Primary/Multi-line Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold · 12 / 14 · +0.5"
            ]
          },
          {
            "role": "Content label",
            "token": "Primary/Label/Fine",
            "values": [
              "Proxima Soft Bold · 12 / 12 · +0.5"
            ]
          },
          {
            "role": "Content description",
            "token": "Secondary/Bold/Small Caption",
            "values": [
              "BarkAda Semibold · 10 / 15 · 0"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:table:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "type=header/content",
          "swift": "role: .header / .content",
          "compose": "role = EBTableRowRole.Header / Content"
        },
        {
          "figma": "no. of columns (drop)",
          "swift": "columns: [Column]",
          "compose": "columns: List&lt;Column&gt;"
        },
        {
          "figma": "icon (slot)",
          "swift": "leadingIcon: Image?",
          "compose": "leadingIcon: @Composable (() -&gt; Unit)?"
        },
        {
          "figma": "Label here text",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "Description text (xN)",
          "swift": "columns: [Column]",
          "compose": "columns: List&lt;Column&gt;"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Table/EBTableRow.swift",
        "compose": "android/components/table/EBTableRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Option A — dedicated row primitive (if Table stays in DS)</span>\n<span class=\"typ\">VStack</span>(<span class=\"prp\">spacing</span>: <span class=\"kw\">0</span>) {\n    <span class=\"typ\">EBTableRow</span>(\n        <span class=\"prp\">role</span>: .<span class=\"prp\">header</span>,\n        <span class=\"prp\">label</span>: <span class=\"str\">\"Header\"</span>,\n        <span class=\"prp\">columns</span>: [<span class=\"str\">\"Column\"</span>, <span class=\"str\">\"Column\"</span>, <span class=\"str\">\"Column\"</span>]\n    )\n    <span class=\"typ\">ForEach</span>(rows) { row <span class=\"kw\">in</span>\n        <span class=\"typ\">EBTableRow</span>(\n            <span class=\"prp\">role</span>: .<span class=\"prp\">content</span>,\n            <span class=\"prp\">label</span>: row.<span class=\"prp\">label</span>,\n            <span class=\"prp\">columns</span>: row.<span class=\"prp\">values</span>\n        )\n    }\n}\n\n<span class=\"cmt\">// Option B — compose with Inline Text (recommended for mobile)</span>\n<span class=\"typ\">VStack</span>(<span class=\"prp\">spacing</span>: <span class=\"kw\">12</span>) {\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Amount\"</span>,      <span class=\"prp\">value</span>: <span class=\"str\">\"₱1,000.00\"</span>)\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Reference\"</span>,   <span class=\"prp\">value</span>: <span class=\"str\">\"0000 0123 4567\"</span>)\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Date\"</span>,        <span class=\"prp\">value</span>: <span class=\"str\">\"Apr 22, 2026\"</span>)\n}",
        "compose": "<span class=\"cmt\">// Option A — dedicated row primitive (if Table stays in DS)</span>\n<span class=\"typ\">Column</span> {\n    <span class=\"typ\">EBTableRow</span>(\n        role = <span class=\"typ\">EBTableRowRole</span>.<span class=\"prp\">Header</span>,\n        label = <span class=\"str\">\"Header\"</span>,\n        columns = listOf(<span class=\"str\">\"Column\"</span>, <span class=\"str\">\"Column\"</span>, <span class=\"str\">\"Column\"</span>)\n    )\n    rows.<span class=\"fn\">forEach</span> { row -&gt;\n        <span class=\"typ\">EBTableRow</span>(\n            role = <span class=\"typ\">EBTableRowRole</span>.<span class=\"prp\">Content</span>,\n            label = row.label,\n            columns = row.values\n        )\n    }\n}\n\n<span class=\"cmt\">// Option B — compose with Inline Text (recommended for mobile)</span>\n<span class=\"typ\">Column</span>(verticalArrangement = <span class=\"typ\">Arrangement</span>.<span class=\"fn\">spacedBy</span>(<span class=\"kw\">12</span>.dp)) {\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Amount\"</span>,      value = <span class=\"str\">\"₱1,000.00\"</span>)\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Reference\"</span>,   value = <span class=\"str\">\"0000 0123 4567\"</span>)\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Date\"</span>,        value = <span class=\"str\">\"Apr 22, 2026\"</span>)\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tabular semantics",
        "ios": "On iPad/macOS use <code>Table</code>; on iPhone use <code>accessibilityElement(children: .combine)</code> per row so each reads as \"Label, value, value\".",
        "android": "Wrap in <code>Modifier.semantics { collectionInfo = CollectionInfo(rowCount, columnCount) }</code>."
      },
      {
        "requirement": "Header vs content row",
        "ios": "Use <code>.accessibilityAddTraits(.isHeader)</code> on header rows.",
        "android": "Use <code>Modifier.semantics { heading() }</code> on header rows."
      },
      {
        "requirement": "Column headers without visible text",
        "ios": "If icon-only header columns exist, provide <code>.accessibilityLabel</code>.",
        "android": "Set <code>contentDescription</code> on the icon slot."
      },
      {
        "requirement": "Row-level tap",
        "ios": "If rows become tappable, wrap row in <code>Button</code> with <code>.accessibilityHint</code>.",
        "android": "Wrap in <code>Modifier.clickable</code> with <code>role = Role.Button</code>."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "3 orphan components (Table, Table - Item, Table - Label) where 1 data-driven row would suffice."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>no. of columns</code> uses string enum with a period; should be integer or dropped."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Label / bg / border bound to <code>main/table/*</code>. Header icon placeholder uses hardcoded <code>#C2C6CF</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native iOS/Android mobile primitive. Needs a mobile rethink — list of label/value pairs vs true desktop table."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No hover / pressed / selected / disabled states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Header icon is a raw placeholder circle with no slot or instance swap."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until family consolidation and native decision land."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "Table ships 9 variants. Family siblings <strong>Table - Item</strong> (3 variants) and <strong>Table - Label</strong> (2 variants) are declared but never placed directly in screens — only Table is consumed.",
      "columns": [
        "type",
        "no. of columns",
        "icon",
        "Height",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "header",
            "2",
            "no",
            "37px",
            "47:323220"
          ]
        },
        {
          "cells": [
            "header",
            "3",
            "no",
            "37px",
            "47:323222"
          ]
        },
        {
          "cells": [
            "header",
            "4",
            "no",
            "37px",
            "47:323224"
          ]
        },
        {
          "cells": [
            "header",
            "2",
            "yes",
            "65px",
            "47:323221"
          ]
        },
        {
          "cells": [
            "header",
            "3",
            "yes",
            "65px",
            "47:323223"
          ]
        },
        {
          "cells": [
            "header",
            "4",
            "yes",
            "65px",
            "47:323225"
          ]
        },
        {
          "cells": [
            "content",
            "2",
            "no",
            "56px",
            "47:325867"
          ]
        },
        {
          "cells": [
            "content",
            "3",
            "no",
            "56px",
            "47:325868"
          ]
        },
        {
          "cells": [
            "content",
            "4",
            "no",
            "56px",
            "47:325869"
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
      "header": "Initial Assessment · node 47:326260",
      "rows": [
        {
          "body": "<strong>Family assessed</strong> — 3 published components (Table / Table - Item / Table - Label) with 9 + 3 + 2 variants. Only Table is consumed in screens. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Three orphan components</strong> — Table - Item and Table - Label exist but are never placed directly. Recommend collapsing into one data-driven row. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong><code>no. of columns</code> naming</strong> — String enum with a period in the property name. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No native mobile primitive</strong> — Mobile tables are almost always stacks of label/value pairs (Inline Text) — reconsider whether Table belongs in the DS at all. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>No interaction states</strong> — No hover / pressed / selected / disabled state variants. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Header icon is a raw placeholder</strong> — Hardcoded <code>#C2C6CF</code> circle with no slot or instance swap. <span class=\"tag-open tag-c6\">Open</span>",
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
