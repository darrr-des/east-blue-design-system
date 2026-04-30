import type { ComponentData } from '../types';

export const tableTransaction: ComponentData = {
  "meta": {
    "slug": "table-transaction",
    "name": "Table - Transaction",
    "node": "47:324709",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=47-324709",
    "description": "A transaction row showing label/value pairs in a structured table layout.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Table",
    "verdict": {
      "kind": "fix",
      "title": "Fold into Table as a recipe, not a separate primitive",
      "text": "Table - Transaction is a feature-specific composition of existing DS primitives — a header row (which Table already ships) and a content row that is effectively an <strong>Inline Text</strong> with a peso-prefixed amount. Publishing it as its own component duplicates the Table variant matrix and introduces a raster peso asset to DS surface. On mobile, \"transaction details\" render as vertical label / amount stacks — exactly what <strong>Generic Transaction Card</strong> and <strong>Inline Text</strong> already cover. Recommend removing from core DS and documenting the pattern as a recipe on Table's page: \"For transaction totals, compose an <code>EBInlineText</code> stack; use Table only for multi-column tabular history on wider surfaces.\""
    }
  },
  "overview": {
    "inContextNote": "Per-variant descriptions cite account limits — e.g. daily / monthly send caps showing used vs. remaining peso amounts in aligned columns. Other GCash surfaces like transaction history and receipts use the Generic Transaction Card vertical stack, not this tabular layout.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"120\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Account Limits</text>\n          \n          <rect x=\"40\" y=\"28\" width=\"140\" height=\"12\" fill=\"#F6F9FD\"></rect>\n          <text x=\"64\" y=\"37\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">USED</text>\n          <text x=\"110\" y=\"37\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">REMAINING</text>\n          <text x=\"156\" y=\"37\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">TOTAL</text>\n          \n          <text x=\"46\" y=\"52\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Daily</text>\n          <text x=\"64\" y=\"62\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱3,500</text>\n          <text x=\"110\" y=\"62\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱6,500</text>\n          <text x=\"156\" y=\"62\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱10,000</text>\n          <line x1=\"40\" y1=\"68\" x2=\"180\" y2=\"68\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"46\" y=\"78\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Monthly</text>\n          <text x=\"64\" y=\"88\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱42,000</text>\n          <text x=\"110\" y=\"88\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱58,000</text>\n          <text x=\"156\" y=\"88\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱100,000</text>\n          <line x1=\"40\" y1=\"94\" x2=\"180\" y2=\"94\" stroke=\"#E5EBF4\"></line>\n          <rect x=\"56\" y=\"104\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"114\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Request Increase</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-transaction-demo-preview\"><div style=\"width:360px; height:36px; background:#F6F9FD; border-bottom:1px solid #E5EBF4; padding:12px 24px; display:flex; align-items:center; gap:8px; box-sizing:border-box; color:#0A2757;\"><div style=\"flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:10px; line-height:12px; letter-spacing:0.25px;\">Column Label</span></div><div style=\"flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:10px; line-height:12px; letter-spacing:0.25px;\">Column Label</span></div><div style=\"flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:10px; line-height:12px; letter-spacing:0.25px;\">Column Label</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-type\" onchange=\"updateTableTransactionDemo()\"><option value=\"header\" selected=\"\">header</option><option value=\"content\">content</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">no. of columns</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-cols\" onchange=\"updateTableTransactionDemo()\"><option value=\"2\">2</option><option value=\"3\" selected=\"\">3</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">icon <span class=\"muted\" style=\"font-size:11px;\">(header only)</span></span><select class=\"demo-panel-select\" id=\"table-transaction-demo-icon\" onchange=\"updateTableTransactionDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Locked to the peso-prefixed amount shape. Any transaction surface that needs a date column, a badge, a status chip, or a non-peso currency has to detach or reach for a different component."
      },
      {
        "name": "Self-contained",
        "rating": "fail",
        "note": "Content row ships a raster <code>Peso Sign - Proxima</code> image fill, not a DS icon instance or text glyph. Handoff code references a remote <code>figma.com/api/mcp/asset/*</code> URL — not deliverable to native."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Reuses Table's <code>no. of columns</code> string-with-period naming, but drops the 4-column option and the content icon variant — schema diverges from parent for no apparent reason. Label token <code>main/table/color/label-preamble</code> appears only here."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Not built from Table, Inline Text, or Generic Transaction Card — re-implements the label and amount stack directly. A true composition would reuse those primitives as nested instances."
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "Duplicate of Table's variant matrix with narrower coverage.",
        "body": "Table already ships header / content rows with 2–4 columns and the same icon=yes/no axis. Table - Transaction re-creates that axis but only for 2 and 3 columns, then specializes the content row to peso amounts. The overlap is a maintenance drag and the layer tree is a separate sibling instead of a reuse.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>no. of columns</code> inherits Table's period-in-name string enum.",
        "body": "Should be an integer <code>columnCount</code> — or, better, removed altogether in favor of a data-driven <code>columns</code> array on the parent Table. The Transaction fork inherits the anti-pattern without fixing it.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No native mobile primitive matches this layout.",
        "body": "Same mobile problem as Table: iOS SwiftUI <code>Table</code> is macOS/iPad only, Material Compose has no Table primitive. Phone-width transaction totals render as stacked <code>EBInlineText</code> rows (label + peso amount) — not a 360px fixed three-column table.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No interaction or semantic-amount states.",
        "body": "Content row has no pressed / disabled states and amount cells don't distinguish positive, negative, or zero amounts despite being a transaction surface.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Peso sign ships as a raster image asset.",
        "body": "The content row's currency prefix is an <code>&lt;img&gt;</code> pointing at a Figma-hosted bitmap (<code>figma.com/api/mcp/asset/...</code>), not an inline glyph, SF Symbol, or vector icon. Header icon placeholder is still a hardcoded <code>#C2C6CF</code> circle as in Table.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the family consolidation decision lands — Code Connect for Table - Transaction would just duplicate Table's mapping.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Remove Table - Transaction from core DS; publish as a Table recipe and a Generic Transaction Card / Inline Text pattern.",
        "body": "The component is a feature-specific composition, not a primitive. Document two ready-made paths in the Table page: (a) \"For aligned multi-column amount totals on wider surfaces, use Table with amount-formatted column content\"; (b) \"For phone-width transaction details (receipt, limits, fees), compose <code>EBInlineText</code> rows inside <code>Generic Transaction Card</code>.\" Eliminates 6 duplicate variants and the raster peso asset from DS surface.",
        "tag": "Family"
      },
      {
        "headline": "If Transaction stays, consolidate with Table's row primitive and add an <code>amountFormat</code> column flag.",
        "body": "Merge into Table's data-driven row with a per-column <code>format: .text | .amount</code>. Amount formatting would auto-prefix the currency glyph. Collapses Table + Table - Transaction from 3 records / 15 variants into 1 record / 2 variants × data.",
        "tag": "Composition"
      },
      {
        "headline": "Replace the raster peso sign with a text glyph or vector icon.",
        "body": "Currency prefix should be the native Unicode glyph <code>₱</code> (U+20B1) rendered in the row's type style, or — if visual weight needs to match Proxima's peso — a vector SVG shipped as a DS icon (<code>icon/currency/peso-sm</code>). Drop the Figma-hosted bitmap reference.",
        "tag": "Asset"
      },
      {
        "headline": "Rename or drop <code>no. of columns</code>.",
        "body": "Same fix as Table. If the component is kept, rename to an integer <code>columnCount</code>. If merged into Table's data-driven row, drop it entirely — column count is inferred from the <code>columns</code> array.",
        "tag": "Rename"
      },
      {
        "headline": "Align amount label token with Inline Text.",
        "body": "The content-row label uses <code>main/table/color/label-preamble</code> (#6780A9) while the amount value uses <code>main/table/color/label</code> (#0A2757). Inline Text covers the same semantic pair with <code>label</code> / <code>value</code> tokens. Merge into a shared token set (<code>main/inline-text/color/label</code>, <code>main/inline-text/color/value</code>) to prevent drift.",
        "tag": "Token"
      },
      {
        "headline": "Document amount-sign semantics.",
        "body": "If Table - Transaction is kept for account limits, add explicit guidance that amounts are always positive totals (used / remaining / cap). For signed transaction flows (income / expense), direct consumers to Generic Transaction Card. Prevents the component from being mis-used on flows it wasn't designed for.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "header-row-—-36-/-62px-tall",
        "title": "Header row — 36 / 62px tall",
        "node": "47:324703",
        "description": "Subtle-bg row with bottom border. Repeats a 10px Proxima Soft Semibold \"Column Label\" N times across equal-width flex columns. <code>icon=yes</code> grows height from 36 to 62px and stacks a 24px placeholder circle above each label.",
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
                "value": "36 / 62px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Subtle row bg", "value": "#F6F9FD", "token": "table/color/bg-subtle" },
              { "key": "Border", "value": "#E5EBF4", "token": "table/color/border" },
              { "key": "Label", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Preamble", "value": "#6780A9", "token": "table/color/label-preamble" },
              { "key": "Currency icon", "value": "#183462", "token": "table/color/icon-currency-secondary" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Header height",
                "value": "36 / 62px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
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
                "key": "Preamble style",
                "value": "Primary/Multi-line Label/Light/Tiny",
                "mono": true
              },
              {
                "key": "Preamble font",
                "value": "Proxima Soft Semibold · 10 / 12 · +0.25",
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
        "swift": "<span class=\"syn-type\">EBTransactionTable.Header</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Section\"</span><span class=\"syn-punc\">, </span>preamble<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Today\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionTableHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Section\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Today\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "content-row-—-72.5px-tall",
        "title": "Content row — 72.5px tall",
        "node": "47:324708",
        "description": "White bg, bottom border. Two-line layout: a 14px preamble label on top, then N equal-width amount cells below. Each amount cell renders a 15px peso-sign raster + a 14px Proxima Soft Bold numeric value (<code>X,XXX.XX</code>).",
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
                "value": "72.5px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Subtle row bg", "value": "#F6F9FD", "token": "table/color/bg-subtle" },
              { "key": "Border", "value": "#E5EBF4", "token": "table/color/border" },
              { "key": "Label", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Preamble", "value": "#6780A9", "token": "table/color/label-preamble" },
              { "key": "Currency icon", "value": "#183462", "token": "table/color/icon-currency-secondary" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "72.5px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
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
                "key": "Preamble style",
                "value": "Primary/Multi-line Label/Light/Tiny",
                "mono": true
              },
              {
                "key": "Preamble font",
                "value": "Proxima Soft Semibold · 10 / 12 · +0.25",
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
        "swift": "<span class=\"syn-type\">EBTransactionTable.Row</span><span class=\"syn-punc\">(</span>transaction<span class=\"syn-punc\">: </span>item<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionTableRow</span><span class=\"syn-punc\">(</span>\n    transaction <span class=\"syn-eq\">=</span> item\n<span class=\"syn-punc\">)</span>"
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
            "role": "Header column label",
            "token": "main/table/color/label",
            "values": [
              "#0A2757",
              "–",
              "–"
            ]
          },
          {
            "role": "Content preamble label",
            "token": "main/table/color/label-preamble",
            "values": [
              "#6780A9",
              "–",
              "–"
            ]
          },
          {
            "role": "Amount value",
            "token": "main/table/color/label",
            "values": [
              "#0A2757",
              "–",
              "–"
            ]
          },
          {
            "role": "Currency icon (peso)",
            "token": "main/table/color/icon-currency-secondary",
            "values": [
              "#183462",
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
              "36px"
            ]
          },
          {
            "role": "Header height (icon=yes)",
            "token": "—",
            "values": [
              "62px"
            ]
          },
          {
            "role": "Content row height",
            "token": "—",
            "values": [
              "72.5px"
            ]
          },
          {
            "role": "Header horizontal padding",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Header pt / pb",
            "token": "12 / space/space-12",
            "values": [
              "12 / 12px"
            ]
          },
          {
            "role": "Content horizontal padding",
            "token": "—",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Content py",
            "token": "space/space-16",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Header column gap",
            "token": "—",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Content label → amounts gap",
            "token": "—",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Amount column gap",
            "token": "—",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Header icon → label gap",
            "token": "—",
            "values": [
              "2px"
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
            "role": "Peso glyph size",
            "token": "—",
            "values": [
              "15 × 15px (raster)"
            ]
          },
          {
            "role": "Peso → amount gap",
            "token": "—",
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
            "role": "Header column label",
            "token": "Primary/Multi-line Label/Light/Tiny",
            "values": [
              "Proxima Soft Semibold · 10 / 12 · +0.25"
            ]
          },
          {
            "role": "Content preamble label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold · 14 / 14 · +0.25"
            ]
          },
          {
            "role": "Amount value",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold · 14 / 14 · +0.25"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "type=header",
          "swift": "EBTableRow(role: .header, …)",
          "compose": "EBTableRow(role = Header, …)"
        },
        {
          "figma": "type=content (peso amounts)",
          "swift": "VStack { EBInlineText(…) }",
          "compose": "Column { EBInlineText(…) }"
        },
        {
          "figma": "no. of columns (drop)",
          "swift": "columns: [Column]",
          "compose": "columns: List&lt;Column&gt;"
        },
        {
          "figma": "icon=yes (header slot)",
          "swift": "leadingIcon: Image?",
          "compose": "leadingIcon: @Composable (() -&gt; Unit)?"
        },
        {
          "figma": "Peso Sign - Proxima (raster)",
          "swift": "Text(\"\\u{20B1}\" + amount)",
          "compose": "Text(\"₱$amount\")"
        },
        {
          "figma": "Label (preamble) / X,XXX.XX",
          "swift": "EBInlineText(label:, value:)",
          "compose": "EBInlineText(label =, value =)"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Table/EBTableTransactionRow.swift",
        "compose": "android/components/table/EBTableTransactionRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Recommended — compose with Inline Text (phone-width)</span>\n<span class=\"typ\">EBGenericTransactionCard</span> {\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Daily used\"</span>,      <span class=\"prp\">value</span>: <span class=\"str\">\"₱3,500.00\"</span>)\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Daily remaining\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"₱6,500.00\"</span>)\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Daily cap\"</span>,       <span class=\"prp\">value</span>: <span class=\"str\">\"₱10,000.00\"</span>)\n}\n\n<span class=\"cmt\">// Option B — if multi-column Table row is retained (tablet / wider)</span>\n<span class=\"typ\">VStack</span>(<span class=\"prp\">spacing</span>: <span class=\"kw\">0</span>) {\n    <span class=\"typ\">EBTableRow</span>(\n        <span class=\"prp\">role</span>: .<span class=\"prp\">header</span>,\n        <span class=\"prp\">columns</span>: [<span class=\"str\">\"Used\"</span>, <span class=\"str\">\"Remaining\"</span>, <span class=\"str\">\"Cap\"</span>]\n    )\n    <span class=\"typ\">EBTableRow</span>(\n        <span class=\"prp\">role</span>: .<span class=\"prp\">content</span>,\n        <span class=\"prp\">label</span>: <span class=\"str\">\"Daily\"</span>,\n        <span class=\"prp\">columns</span>: [\n            .<span class=\"fn\">amount</span>(<span class=\"str\">\"3,500.00\"</span>),\n            .<span class=\"fn\">amount</span>(<span class=\"str\">\"6,500.00\"</span>),\n            .<span class=\"fn\">amount</span>(<span class=\"str\">\"10,000.00\"</span>)\n        ]\n    )\n}",
        "compose": "<span class=\"cmt\">// Recommended — compose with Inline Text (phone-width)</span>\n<span class=\"typ\">EBGenericTransactionCard</span> {\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Daily used\"</span>,      value = <span class=\"str\">\"₱3,500.00\"</span>)\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Daily remaining\"</span>, value = <span class=\"str\">\"₱6,500.00\"</span>)\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Daily cap\"</span>,       value = <span class=\"str\">\"₱10,000.00\"</span>)\n}\n\n<span class=\"cmt\">// Option B — if multi-column Table row is retained (tablet / wider)</span>\n<span class=\"typ\">Column</span> {\n    <span class=\"typ\">EBTableRow</span>(\n        role = <span class=\"typ\">EBTableRowRole</span>.<span class=\"prp\">Header</span>,\n        columns = listOf(<span class=\"str\">\"Used\"</span>, <span class=\"str\">\"Remaining\"</span>, <span class=\"str\">\"Cap\"</span>)\n    )\n    <span class=\"typ\">EBTableRow</span>(\n        role = <span class=\"typ\">EBTableRowRole</span>.<span class=\"prp\">Content</span>,\n        label = <span class=\"str\">\"Daily\"</span>,\n        columns = listOf(\n            <span class=\"typ\">TableColumn</span>.<span class=\"fn\">Amount</span>(<span class=\"str\">\"3,500.00\"</span>),\n            <span class=\"typ\">TableColumn</span>.<span class=\"fn\">Amount</span>(<span class=\"str\">\"6,500.00\"</span>),\n            <span class=\"typ\">TableColumn</span>.<span class=\"fn\">Amount</span>(<span class=\"str\">\"10,000.00\"</span>)\n        )\n    )\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "Amount semantics",
        "ios": "Each amount cell should read as a single element — wrap peso + value and use <code>.accessibilityLabel(\"Three thousand five hundred pesos\")</code>.",
        "android": "Merge peso + value with <code>Modifier.semantics(mergeDescendants = true)</code>; set <code>contentDescription</code> to a spoken phrase, not the raw glyph."
      },
      {
        "requirement": "Currency glyph fallback",
        "ios": "Use Unicode <code>\\u{20B1}</code> inline — avoid a raster image that won't scale with Dynamic Type.",
        "android": "Use Unicode <code>₱</code> inline — avoid a bitmap that won't respect font-scale settings."
      },
      {
        "requirement": "Header vs content row",
        "ios": "Header rows carry <code>.accessibilityAddTraits(.isHeader)</code>.",
        "android": "Header rows use <code>Modifier.semantics { heading() }</code>."
      },
      {
        "requirement": "Column label / amount pairing",
        "ios": "Group the preamble label with each amount column so VoiceOver reads \"Daily, three thousand five hundred pesos\".",
        "android": "Group the preamble label with each amount column so TalkBack reads \"Daily, three thousand five hundred pesos\"."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Duplicate sibling to Table with narrower column coverage. Should fold in, not stand alone."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Inherits Table's <code>no. of columns</code> string-with-period anti-pattern unchanged."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "bg / border / label / label-preamble / icon-currency-secondary all bound. Header icon placeholder uses hardcoded <code>#C2C6CF</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native mobile Table primitive; transaction totals render as Inline Text stacks."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed / disabled states; no semantic handling of positive / negative amounts."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Peso sign ships as a raster <code>&lt;img&gt;</code>; header icon is a hardcoded placeholder circle."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the family consolidation decision lands."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 6,
      "description": "A <code>2 type</code> × <code>2 no. of columns</code> × <code>2 icon</code> matrix, pruned: icon only applies to header rows, so content × icon=yes doesn't exist. Total 6 variants.",
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
            "36px",
            "47:324707"
          ]
        },
        {
          "cells": [
            "header",
            "3",
            "no",
            "36px",
            "47:324703"
          ]
        },
        {
          "cells": [
            "header",
            "2",
            "yes",
            "62px",
            "47:324705"
          ]
        },
        {
          "cells": [
            "header",
            "3",
            "yes",
            "62px",
            "47:324706"
          ]
        },
        {
          "cells": [
            "content",
            "2",
            "no",
            "72.5px",
            "47:324704"
          ]
        },
        {
          "cells": [
            "content",
            "3",
            "no",
            "72.5px",
            "47:324708"
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
      "header": "Initial Assessment · node 47:324709",
      "rows": [
        {
          "body": "<strong>Family assessed</strong> — 6 variants (2 type × 2 columns × 2 icon, pruned). Only used for account-limit surfaces in the sticker sheet. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Duplicate of Table</strong> — Reuses Table's variant schema with narrower column coverage and a peso-specialised content row. Recommend folding into Table as a recipe. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong><code>no. of columns</code> inherited naming</strong> — String enum with a period in the property name, carried over from Table. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No native mobile primitive</strong> — Same mobile problem as Table; transaction totals should be Inline Text stacks. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>No interaction or amount-sign states</strong> — No pressed / disabled, no positive / negative amount differentiation. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Peso sign is a raster asset</strong> — Content row currency prefix is an image fill, not a text glyph or vector. Header icon placeholder is still hardcoded <code>#C2C6CF</code>. <span class=\"tag-open tag-c6\">Open</span>",
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
