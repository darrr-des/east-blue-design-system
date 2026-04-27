import type { ComponentData } from '../types';

export const tableScheduling: ComponentData = {
  "meta": {
    "slug": "table-scheduling",
    "name": "Table - Scheduling",
    "node": "47:324365",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=47-324365",
    "description": "A scheduled-payment row with a date-and-amount headline plus an optional grid of label/value detail pairs.",
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
      "title": "Fold into the Table consolidation; compose from Inline Text, not re-author",
      "text": "Table - Scheduling is the third feature-specific composition in the Table family (after Table - Transaction). It re-creates a date + peso-amount primary line and a grid of label/value pairs — layouts the DS already covers with <strong>Inline Text</strong> stacked inside a <strong>Generic Transaction Card</strong> or native <strong>List</strong> cell. Three records for three product surfaces (generic table, transaction limits, scheduled payments) is a family-level smell: the base pattern is \"label / value rows with optional peso prefix,\" and every sibling duplicates it with narrower coverage. Recommend removing Table - Scheduling from core DS and documenting a \"scheduled payment\" recipe on the Table page that composes <code>EBInlineText</code> rows — same guidance as Table - Transaction. Mobile scheduling surfaces (auto-debit plans, installment schedules) already render as vertical lists on iOS and Android; no phone surface needs this fixed 360px grid."
    }
  },
  "overview": {
    "inContextNote": "Scheduled payments screen (auto-debit, installment plans, standing orders): a list of upcoming payment rows stamped with a date, the total debit amount, and — where relevant — a breakdown of principal / interest / fee components.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"138\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Payment Schedule</text>\n          \n          <text x=\"48\" y=\"38\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">MAY 10, 2026</text>\n          <text x=\"165\" y=\"38\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <text x=\"86\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Principal</text>\n          <text x=\"86\" y=\"55\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 1,100</text>\n          <text x=\"140\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Interest</text>\n          <text x=\"140\" y=\"55\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 150</text>\n          <line x1=\"44\" y1=\"62\" x2=\"176\" y2=\"62\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"48\" y=\"74\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">JUN 10, 2026</text>\n          <text x=\"165\" y=\"74\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <text x=\"86\" y=\"84\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Principal</text>\n          <text x=\"86\" y=\"91\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 1,110</text>\n          <text x=\"140\" y=\"84\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Interest</text>\n          <text x=\"140\" y=\"91\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 140</text>\n          <line x1=\"44\" y1=\"98\" x2=\"176\" y2=\"98\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"48\" y=\"110\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">JUL 10, 2026</text>\n          <text x=\"165\" y=\"110\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <line x1=\"44\" y1=\"116\" x2=\"176\" y2=\"116\" stroke=\"#E5EBF4\"></line>\n          <rect x=\"56\" y=\"124\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"134\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Manage Schedule</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-scheduling-demo-preview\"><div style=\"width:360px; background:#FFFFFF; border-bottom:1px solid #E5EBF4; padding:16px 24px; box-sizing:border-box; display:flex; flex-direction:column; gap:8px;\"><div style=\"display:flex; align-items:center; width:100%;\"><div style=\"width:108px; font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;\">MMM DD, YYYY</div><div style=\"flex:1 0 0; display:flex; align-items:center; justify-content:flex-end; gap:2px;\"><span style=\"font-family:'Proxima Soft', system-ui; font-weight:700; font-size:14px; line-height:14px; letter-spacing:0.25px; color:#005CE5;\">₱</span><span style=\"font-family:'Proxima Soft', system-ui; font-weight:700; font-size:14px; line-height:14px; letter-spacing:0.25px; color:#005CE5;\">X,XXX.XX</span></div></div><div style=\"display:flex; flex-direction:column; gap:12px; width:100%;\"><div style=\"display:flex; align-items:flex-start; width:100%;\"><div style=\"width:111px; font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; color:#6780A9;\">Label</div><div style=\"flex:1 0 0; display:flex; gap:8px;\"><div style=\"flex:1 0 0; display:flex; flex-direction:column; gap:4px;\"><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; color:#6780A9;\">Label</div><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;\">PHP X,XXX.XX</div></div><div style=\"flex:1 0 0; display:flex; flex-direction:column; gap:4px;\"><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; color:#6780A9;\">Label</div><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;\">PHP X,XXX.XX</div></div></div></div><div style=\"display:flex; align-items:flex-start; width:100%;\"><div style=\"width:111px;\"></div><div style=\"flex:1 0 0; display:flex; gap:8px;\"><div style=\"flex:1 0 0; display:flex; flex-direction:column; gap:4px;\"><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; color:#6780A9;\">Label</div><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;\">PHP X,XXX.XX</div></div><div style=\"flex:1 0 0; display:flex; flex-direction:column; gap:4px;\"><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; color:#6780A9;\">Label</div><div style=\"font-family:'Proxima Soft', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;\">PHP X,XXX.XX</div></div></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-type\" onchange=\"updateTableSchedulingDemo()\"><option value=\"no\">no display amount</option><option value=\"2\">2 amounts display</option><option value=\"4\" selected=\"\">4 amounts display</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Locked to date + peso-prefixed amount + optional 2/4-cell label/value grid. Any scheduling surface that needs 1, 3, or N detail cells, a status chip, or a non-peso currency has to detach."
      },
      {
        "name": "Self-contained",
        "rating": "fail",
        "note": "Primary amount renders a raster <code>Peso Sign - Proxima</code> image fill (same remote <code>figma.com/api/mcp/asset/*</code> URL as Table - Transaction). Detail cells prefix amounts with the literal string <code>\"PHP\"</code>, mixing glyph and text prefixes inside one component."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Does not reuse Table's <code>type × no. of columns × icon</code> schema — introduces a brand-new <code>type</code> enum whose values embed the detail count in a sentence (<code>\"2 amounts display\"</code>). Third family member, third shape."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Not built from Table, Inline Text, or Generic Transaction Card — re-implements the label / value cell inline. A true composition would nest <code>EBInlineText</code> instances for each detail pair."
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "Third parallel Table-family record with a new schema.",
        "body": "After Table (<code>type × no. of columns × icon</code>) and Table - Transaction (<code>type × no. of columns × icon</code>, peso content), Scheduling introduces <em>another</em> axis shape: a single <code>type</code> enum that gates a fixed 0 / 2 / 4 detail count. Three records, three different schemas for the same underlying \"rows of label/value pairs\" idea.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>type</code> values embed the detail count in a sentence.",
        "body": "Values are <code>\"no display amount\"</code>, <code>\"2 amounts display\"</code>, <code>\"4 amounts display\"</code> — natural-language strings that bake the count into the property. Should be an integer <code>detailCount: 0 | 2 | 4</code>, or — better — replaced by a data-driven <code>details: [Pair]</code> array that accepts any length.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No native mobile primitive matches the layout.",
        "body": "Payment schedules on iOS and Android render as list cells (<code>List</code> / <code>LazyColumn</code>) — a date header, an accessory amount, and optional secondary label/value rows. The 360px fixed grid is a desktop pattern; on phone width the two-cell detail row already crowds at the 12px type scale used here.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No tap, pressed, or disabled states.",
        "body": "A scheduled payment row is typically tappable — to view, edit, or cancel the scheduled entry — and can be visually disabled (past / cancelled / skipped). None of that coverage exists.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Peso sign is a raster image asset.",
        "body": "Primary amount's currency prefix is an <code>&lt;img&gt;</code> pointing at a Figma-hosted bitmap, same remote URL as Table - Transaction. Detail amounts, meanwhile, use the literal string <code>\"PHP\"</code> — two different currency-prefix treatments in one component.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the family consolidation decision lands — Code Connect for Scheduling would just duplicate the Inline Text mapping.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Remove Table - Scheduling from core DS; publish as a recipe on Table's page composing Inline Text rows.",
        "body": "Same guidance as Table - Transaction. Recipe reads: \"For scheduled-payment lists (auto-debit, installments, standing orders), compose a date / primary-amount header row with <code>EBInlineText</code>, then stack additional <code>EBInlineText</code> rows for breakdown details inside a <code>Generic Transaction Card</code> or native <code>List</code> cell.\" Eliminates 3 variants, a raster peso asset, and the mixed <code>₱</code>/<code>PHP</code> prefix inconsistency.",
        "tag": "Family"
      },
      {
        "headline": "Collapse the Table family (Table + Table - Transaction + Table - Scheduling) into one data-driven row primitive.",
        "body": "If the family is retained for wider surfaces, publish a single <code>EBTableRow</code> with <code>role: .header | .content</code> and a <code>columns: [Column]</code> array where each column carries its own <code>format: .text | .amount | .date</code>. Scheduling's date-header + amount + detail-grid becomes: one row with two columns (date / amount), followed by N rows with detail pairs. Collapses 18 family variants into 2 role variants × data.",
        "tag": "Family"
      },
      {
        "headline": "Rename <code>type</code> values to integers, or drop the property.",
        "body": "If Scheduling is kept, rename to <code>detailCount: 0 | 2 | 4</code> (no sentence fragments in property values). If merged into Inline Text / Table's data-driven row, drop the property entirely — the count is inferred from the details array.",
        "tag": "Rename"
      },
      {
        "headline": "Unify the currency prefix treatment.",
        "body": "Primary amount uses a raster peso glyph; detail amounts use the literal string <code>\"PHP\"</code>. Pick one. Preferred: the Unicode <code>₱</code> glyph (U+20B1) everywhere, rendered in the row's type style — drop the raster asset and drop the <code>\"PHP\"</code> literal. Alternative: ship a vector peso icon (<code>icon/currency/peso-sm</code>) for the primary line and an optional <code>\"PHP\"</code> prefix for breakdown values, wired up as real tokens / slots.",
        "tag": "Asset"
      },
      {
        "headline": "Compose each detail cell from Inline Text.",
        "body": "The component already matches Inline Text's <code>label</code> + <code>value</code> shape (<code>main/table/color/label-preamble</code> on top, <code>main/table/color/label</code> below). Instance-swap to <code>Inline Text</code> so the tokens consolidate under <code>main/inline-text/*</code> and state / a11y improvements flow through to every consumer.",
        "tag": "Composition"
      },
      {
        "headline": "Add row interaction states if Scheduling stays.",
        "body": "A scheduled-payment row is tappable — add <code>State=Pressed</code> and <code>State=Disabled</code> variants (disabled = past / cancelled with muted labels and a strike or tag). Without these, every consumer re-invents the tap target.",
        "tag": "State"
      },
      {
        "headline": "Document scheduling semantics.",
        "body": "If Scheduling is kept, add guidance on which amounts belong on the primary line (total debit) vs. breakdown cells (principal / interest / fee / tax). Prevents the component from being used as a generic 3-amount row on non-scheduling surfaces.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "type-=-no-display-amount-—-50.5px-tall",
        "title": "type = no display amount — 50.5px tall",
        "node": "47:324362",
        "description": "Minimum variant. A single date-amount row: a 108px left-aligned date label (<code>MMM DD, YYYY</code>) and a right-aligned peso-prefixed primary amount. No detail rows.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "no display amount",
                "mono": false
              },
              {
                "key": "Height",
                "value": "50.5px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "table/color/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "table/color/label",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "table/color/label-amount",
                "mono": true
              },
              {
                "key": "Preamble",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Preamble token",
                "value": "table/color/label-preamble",
                "mono": true
              },
              {
                "key": "Currency icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Currency icon token",
                "value": "table/color/icon-currency-primary",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "50.5px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Preamble style",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "Preamble font",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
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
        "swift": "<span class=\"syn-type\">EBSchedulingTable.Row</span><span class=\"syn-punc\">(</span>item<span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.noAmount</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSchedulingTableRow</span><span class=\"syn-punc\">(</span>\n    item <span class=\"syn-eq\">=</span> item<span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBScheduleType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.NoAmount</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "type-=-2-amounts-display-—-89.5px-tall",
        "title": "type = 2 amounts display — 89.5px tall",
        "node": "47:324363",
        "description": "Date-amount row + one detail row. Details row carries a 111px \"row-item\" leading label and two equal-width cells in the remaining space, each a <code>Label</code> / <code>PHP X,XXX.XX</code> pair.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "2 amounts display",
                "mono": false
              },
              {
                "key": "Height",
                "value": "89.5px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "table/color/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "table/color/label",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "table/color/label-amount",
                "mono": true
              },
              {
                "key": "Preamble",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Preamble token",
                "value": "table/color/label-preamble",
                "mono": true
              },
              {
                "key": "Currency icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Currency icon token",
                "value": "table/color/icon-currency-primary",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "89.5px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Preamble style",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "Preamble font",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
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
        "swift": "<span class=\"syn-type\">EBSchedulingTable.Row</span><span class=\"syn-punc\">(</span>item<span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.twoAmounts</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSchedulingTableRow</span><span class=\"syn-punc\">(</span>\n    item <span class=\"syn-eq\">=</span> item<span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBScheduleType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.TwoAmounts</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "type-=-4-amounts-display-—-132.5px-tall",
        "title": "type = 4 amounts display — 132.5px tall",
        "node": "47:324364",
        "description": "Date-amount row + two detail rows (4 cells total). Second detail row shares the same 111px gutter and two label/value cells as the first, with 12px gap between detail rows.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "4 amounts display",
                "mono": false
              },
              {
                "key": "Height",
                "value": "132.5px",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "table/color/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "table/color/label",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "table/color/label-amount",
                "mono": true
              },
              {
                "key": "Preamble",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Preamble token",
                "value": "table/color/label-preamble",
                "mono": true
              },
              {
                "key": "Currency icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Currency icon token",
                "value": "table/color/icon-currency-primary",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "132.5px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Preamble style",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "Preamble font",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
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
        "swift": "<span class=\"syn-type\">EBSchedulingTable.Row</span><span class=\"syn-punc\">(</span>item<span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.fourAmounts</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSchedulingTableRow</span><span class=\"syn-punc\">(</span>\n    item <span class=\"syn-eq\">=</span> item<span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBScheduleType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.FourAmounts</span>\n<span class=\"syn-punc\">)</span>"
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
            "role": "Row bg",
            "token": "main/table/color/bg",
            "values": [
              "#FFFFFF",
              "–",
              "–"
            ]
          },
          {
            "role": "Date label",
            "token": "main/table/color/label",
            "values": [
              "#0A2757",
              "–",
              "–"
            ]
          },
          {
            "role": "Primary amount",
            "token": "main/table/color/label-amount",
            "values": [
              "#005CE5",
              "–",
              "–"
            ]
          },
          {
            "role": "Currency glyph (peso, primary)",
            "token": "main/table/color/icon-currency-primary",
            "values": [
              "#005CE5",
              "–",
              "–"
            ]
          },
          {
            "role": "Detail preamble label",
            "token": "main/table/color/label-preamble",
            "values": [
              "#6780A9",
              "–",
              "–"
            ]
          },
          {
            "role": "Detail value",
            "token": "main/table/color/label",
            "values": [
              "#0A2757",
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
            "role": "Height — no display amount",
            "token": "—",
            "values": [
              "50.5px"
            ]
          },
          {
            "role": "Height — 2 amounts display",
            "token": "—",
            "values": [
              "89.5px"
            ]
          },
          {
            "role": "Height — 4 amounts display",
            "token": "—",
            "values": [
              "132.5px"
            ]
          },
          {
            "role": "Horizontal padding",
            "token": "—",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Vertical padding",
            "token": "space/space-16",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Date column width",
            "token": "—",
            "values": [
              "108px"
            ]
          },
          {
            "role": "Detail leading column width",
            "token": "—",
            "values": [
              "111px"
            ]
          },
          {
            "role": "Date-row → details-row gap",
            "token": "—",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Detail row → detail row gap",
            "token": "—",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Detail label → value gap",
            "token": "—",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Detail cell gap",
            "token": "—",
            "values": [
              "8px"
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
            "role": "Date label",
            "token": "Primary/Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold · 12 / 12 · +0.5"
            ]
          },
          {
            "role": "Primary amount",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold · 14 / 14 · +0.25"
            ]
          },
          {
            "role": "Detail preamble label",
            "token": "Primary/Multi-line Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold · 12 / 14 · +0.5"
            ]
          },
          {
            "role": "Detail value (PHP X,XXX.XX)",
            "token": "Primary/Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold · 12 / 12 · +0.5"
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
          "figma": "type (drop)",
          "swift": "details: [EBInlineText]",
          "compose": "details: List&lt;EBInlineText&gt;"
        },
        {
          "figma": "Date label (MMM DD, YYYY)",
          "swift": "EBInlineText(label:, value:)",
          "compose": "EBInlineText(label =, value =)"
        },
        {
          "figma": "Primary amount (peso + X,XXX.XX)",
          "swift": "Text(\"\\u{20B1}\" + amount).ebAmountStyle(.primary)",
          "compose": "Text(\"₱$amount\", style = EBAmountStyle.Primary)"
        },
        {
          "figma": "Detail Label / PHP X,XXX.XX",
          "swift": "EBInlineText(label:, value:)",
          "compose": "EBInlineText(label =, value =)"
        },
        {
          "figma": "Row tap target",
          "swift": ".onTapGesture { … } / Button",
          "compose": "Modifier.clickable { … }"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Table/EBTableSchedulingRow.swift",
        "compose": "android/components/table/EBTableSchedulingRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Recommended — compose with Inline Text (phone-width)</span>\n<span class=\"typ\">EBGenericTransactionCard</span> {\n    <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"MAY 10, 2026\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"₱1,250.00\"</span>)\n        .<span class=\"fn\">ebAmountStyle</span>(.<span class=\"prp\">primary</span>)\n    <span class=\"typ\">HStack</span> {\n        <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Principal\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"PHP 1,100.00\"</span>)\n        <span class=\"typ\">EBInlineText</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Interest\"</span>,  <span class=\"prp\">value</span>: <span class=\"str\">\"PHP 150.00\"</span>)\n    }\n}\n\n<span class=\"cmt\">// Option B — if Scheduling row is retained</span>\n<span class=\"typ\">EBTableSchedulingRow</span>(\n    <span class=\"prp\">date</span>: <span class=\"typ\">Date</span>(),\n    <span class=\"prp\">amount</span>: <span class=\"kw\">1250.00</span>,\n    <span class=\"prp\">details</span>: [\n        .<span class=\"fn\">init</span>(<span class=\"str\">\"Principal\"</span>, <span class=\"str\">\"PHP 1,100.00\"</span>),\n        .<span class=\"fn\">init</span>(<span class=\"str\">\"Interest\"</span>,  <span class=\"str\">\"PHP 150.00\"</span>)\n    ]\n)",
        "compose": "<span class=\"cmt\">// Recommended — compose with Inline Text (phone-width)</span>\n<span class=\"typ\">EBGenericTransactionCard</span> {\n    <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"MAY 10, 2026\"</span>, value = <span class=\"str\">\"₱1,250.00\"</span>,\n                 style = <span class=\"typ\">EBAmountStyle</span>.<span class=\"prp\">Primary</span>)\n    <span class=\"typ\">Row</span> {\n        <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Principal\"</span>, value = <span class=\"str\">\"PHP 1,100.00\"</span>)\n        <span class=\"typ\">EBInlineText</span>(label = <span class=\"str\">\"Interest\"</span>,  value = <span class=\"str\">\"PHP 150.00\"</span>)\n    }\n}\n\n<span class=\"cmt\">// Option B — if Scheduling row is retained</span>\n<span class=\"typ\">EBTableSchedulingRow</span>(\n    date = <span class=\"typ\">LocalDate</span>.<span class=\"fn\">now</span>(),\n    amount = <span class=\"kw\">1250.00</span>,\n    details = listOf(\n        <span class=\"typ\">SchedulingDetail</span>(<span class=\"str\">\"Principal\"</span>, <span class=\"str\">\"PHP 1,100.00\"</span>),\n        <span class=\"typ\">SchedulingDetail</span>(<span class=\"str\">\"Interest\"</span>,  <span class=\"str\">\"PHP 150.00\"</span>)\n    )\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Row semantics",
        "ios": "If tappable, wrap as <code>Button</code> with <code>.accessibilityLabel(\"Scheduled payment, May 10 2026, 1,250 pesos\")</code> — combine the date and amount into one spoken phrase.",
        "android": "Wrap in <code>Modifier.clickable</code> + <code>Modifier.semantics(mergeDescendants = true)</code>; set <code>contentDescription</code> to a full spoken phrase."
      },
      {
        "requirement": "Currency glyph fallback",
        "ios": "Use Unicode <code>\\u{20B1}</code> inline — avoid a raster image that won't scale with Dynamic Type.",
        "android": "Use Unicode <code>₱</code> inline — avoid a bitmap that won't respect font-scale settings."
      },
      {
        "requirement": "Date formatting",
        "ios": "Use <code>Date.FormatStyle</code> with the user's locale; don't hardcode <code>MMM DD, YYYY</code>.",
        "android": "Use <code>DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM)</code>; don't hardcode format string."
      },
      {
        "requirement": "Detail label / value pairing",
        "ios": "Group each detail cell so VoiceOver reads \"Principal, 1,100 pesos\" as one element, not two.",
        "android": "Group each detail cell so TalkBack reads \"Principal, 1,100 pesos\" as one element, not two."
      },
      {
        "requirement": "Disabled / past rows",
        "ios": "Past or cancelled schedules: <code>.accessibilityHint(\"Past payment\")</code> + muted label tokens.",
        "android": "Past or cancelled schedules: <code>Modifier.semantics { stateDescription = \"Past payment\" }</code> + muted label tokens."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Third parallel record in the Table family with yet another schema. Should fold in, not stand alone."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>type</code> values embed the detail count in sentence fragments (\"2 amounts display\")."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "bg / label / label-amount / label-preamble / icon-currency-primary bound. The literal <code>\"PHP\"</code> string prefix on detail amounts has no token indirection."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Scheduled payments are a List / LazyColumn pattern on mobile, not a fixed-width grid."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No tap, pressed, or disabled states — rows are typically tappable (edit / cancel) or disabled (past / cancelled)."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Peso glyph is a raster image; detail amounts use a literal <code>\"PHP\"</code> prefix. Two currency-prefix treatments in one component."
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
      "total": 3,
      "description": "A single <code>type</code> axis with 3 values. No cross-axis matrix — detail count is the only variant driver.",
      "columns": [
        "type",
        "Detail cells",
        "Height",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "no display amount",
            "0",
            "50.5px",
            "47:324362"
          ]
        },
        {
          "cells": [
            "2 amounts display",
            "2 (1 row × 2 cells)",
            "89.5px",
            "47:324363"
          ]
        },
        {
          "cells": [
            "4 amounts display",
            "4 (2 rows × 2 cells)",
            "132.5px",
            "47:324364"
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
      "header": "Initial Assessment · node 47:324365",
      "rows": [
        {
          "body": "<strong>Family assessed</strong> — 3 variants selected by a single <code>type</code> enum. Third parallel Table-family record (Table, Table - Transaction, Table - Scheduling). <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Third family schema divergence</strong> — Introduces a new <code>type</code> enum instead of reusing Table's <code>type × no. of columns × icon</code> or Transaction's schema. Recommend folding into Inline Text / Table data-driven row. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Sentence-fragment enum values</strong> — <code>\"no display amount\"</code> / <code>\"2 amounts display\"</code> / <code>\"4 amounts display\"</code> bake the detail count into natural-language strings. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No native mobile primitive</strong> — Scheduled payments are a List / LazyColumn pattern on mobile, not a fixed 360px grid. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>No interaction / disabled states</strong> — Scheduling rows are typically tappable or visually muted for past / cancelled entries. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Mixed currency prefix treatments</strong> — Primary amount ships as a raster peso glyph; detail amounts use a literal <code>\"PHP\"</code> string. <span class=\"tag-open tag-c6\">Open</span>",
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
