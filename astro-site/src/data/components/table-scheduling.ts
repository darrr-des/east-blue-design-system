import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/table-scheduling.js`.
// Detail count is not a property — the ⤷ AmountRowSlot holds however many
// Table Amount Cell instances you drop in, so `cells` just varies
// what the preview renders.
const tableSchedulingDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'hasAmountRow',
        prop: 'hasAmountRow',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'Table Amount Cells',
        prop: 'cells',
        defaultValue: '2',
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ],
      },
    ],
  },
];

export const tableScheduling: ComponentData = {
  "meta": {
    "slug": "table-scheduling",
    "name": "Table Scheduling",
    "node": "5868:40468",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5868-40468",
    "description": "A display-only scheduled-payment row — a date and total on the first line, then however many label/amount cells you drop into its slot. Default and disabled states.",
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
    "navGroup": "Table",
    "verdict": {
      "kind": "keep",
      "title": "Keep — rebuilt on slots, naming settled",
      "text": "Kept as its own component rather than folded into Table Row, because it carries more controls than a standard row entry. The rebuild answered everything else: the <code>type</code> enum with its sentence-shaped values (<code>\"2 amounts display\"</code>) is gone, replaced by a <code>⤷ AmountRowSlot</code> that takes however many <code>Table Amount Cell</code> instances you need. The raster peso is now a <code>Peso Sign - Proxima</code> vector instance sitting in a <code>⤷ CurrencySlot</code>, used consistently on both the primary line and the detail cells — the old mix of a bitmap glyph and a literal <code>\"PHP\"</code> string is gone. Slot names match the Table Row convention, the details row is named the same way in both states, and the date now reads <code>#month</code> / <code>#day</code> / <code>#year</code> with its separators kept as plain layers. Code Connect stays unmapped because the native library doesn't exist yet."
    }
  },
  "overview": {
    "inContextNote": "Scheduled payments screen (auto-debit, installment plans, standing orders): a list of upcoming payment rows stamped with a date, the total debit amount, and — where relevant — a breakdown of principal / interest / fee components.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"138\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Payment Schedule</text>\n          \n          <text x=\"48\" y=\"38\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">MAY 10, 2026</text>\n          <text x=\"165\" y=\"38\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <text x=\"86\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Principal</text>\n          <text x=\"86\" y=\"55\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 1,100</text>\n          <text x=\"140\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Interest</text>\n          <text x=\"140\" y=\"55\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 150</text>\n          <line x1=\"44\" y1=\"62\" x2=\"176\" y2=\"62\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"48\" y=\"74\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">JUN 10, 2026</text>\n          <text x=\"165\" y=\"74\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <text x=\"86\" y=\"84\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Principal</text>\n          <text x=\"86\" y=\"91\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 1,110</text>\n          <text x=\"140\" y=\"84\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Interest</text>\n          <text x=\"140\" y=\"91\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 140</text>\n          <line x1=\"44\" y1=\"98\" x2=\"176\" y2=\"98\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"48\" y=\"110\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">JUL 10, 2026</text>\n          <text x=\"165\" y=\"110\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <line x1=\"44\" y1=\"116\" x2=\"176\" y2=\"116\" stroke=\"#E5EBF4\"></line>\n          <rect x=\"56\" y=\"124\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"134\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Manage Schedule</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-scheduling-demo-preview\"><div class=\"eb-preview eb-preview-tsched\"><div class=\"eb-preview-tsched__head\"><span class=\"eb-preview-tsched__date\">MM / DD / YYYY</span><span class=\"eb-preview-tsched__peso\">₱</span><span class=\"eb-preview-tsched__total\">X,XXX.XX</span></div><div class=\"eb-preview-tsched__details\"><span class=\"eb-preview-tsched__row-label\">Label</span><div class=\"eb-preview-tsched__cells\"><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><span>₱</span><span>X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><span>₱</span><span>X,XXX.XX</span></span></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-state\" onchange=\"updateTableSchedulingDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasAmountRow</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-hasamountrow\" onchange=\"updateTableSchedulingDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBorder</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-hasborder\" onchange=\"updateTableSchedulingDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#month</span><input type=\"text\" id=\"table-scheduling-demo-month\" class=\"demo-panel-select demo-panel-input\" value=\"MM\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#day</span><input type=\"text\" id=\"table-scheduling-demo-day\" class=\"demo-panel-select demo-panel-input\" value=\"DD\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#year</span><input type=\"text\" id=\"table-scheduling-demo-year\" class=\"demo-panel-select demo-panel-input\" value=\"YYYY\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#amount</span><input type=\"text\" id=\"table-scheduling-demo-total\" class=\"demo-panel-select demo-panel-input\" value=\"X,XXX.XX\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#label</span><input type=\"text\" id=\"table-scheduling-demo-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"updateTableSchedulingDemo()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ CurrencySlot</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Peso Sign</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-hascurrency\" onchange=\"updateTableSchedulingDemo()\"><option value=\"true\" selected=\"\">filled</option><option value=\"false\">empty</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ AmountRowSlot</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Table Amount Cells</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-cells\" onchange=\"updateTableSchedulingDemo()\"><option value=\"1\">1</option><option value=\"2\" selected=\"\">2</option><option value=\"3\">3</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "<code>⤷ AmountRowSlot</code> takes any number of detail cells rather than a fixed 0 / 2 / 4, and <code>⤷ CurrencySlot</code> means a non-peso currency is a swap rather than a detach."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "The currency prefix is one <code>Peso Sign - Proxima</code> vector instance used the same way on the primary line and inside each detail cell. The raster asset and the literal <code>\"PHP\"</code> string are both gone."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Slot names match the Table Row convention (<code>⤷ CurrencySlot</code>, <code>⤷ AmountRowSlot</code>), <code>State</code> is a PascalCase variant property, and both states name the details row identically. The date's three text properties are distinguishable from its separators."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Detail cells are <code>Table Amount Cell</code> instances placed in a slot, and each nests its own <code>⤷ CurrencySlot</code>. The old inline re-implementation of the label / value pair is gone."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "360 × 89. Date on the left at Proxima Soft Semibold 12, total in <code>#005CE5</code> Bold 14, then a details row of label/amount cells."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Every text layer dims to <code>#C2CFE5</code> — date, total, labels, and cell values alike."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Not needed — the row is display-only and carries no tap target."
      }
    ],
    "resolved": [
      {
        "headline": "The <code>type</code> enum is gone.",
        "body": "v2.0: rebuilt on node <code>5868:40468</code>. The sentence-shaped values (<code>\"no display amount\"</code>, <code>\"2 amounts display\"</code>, <code>\"4 amounts display\"</code>) are replaced by <code>⤷ AmountRowSlot</code>, which holds however many <code>Table Amount Cell</code> instances the surface needs.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The peso sign is a vector.",
        "body": "v2.0: the raster image fill is replaced by a <code>Peso Sign - Proxima</code> component instance in a <code>⤷ CurrencySlot</code>, on both the primary line and inside each detail cell. The literal <code>\"PHP\"</code> prefix on detail amounts is gone, so one treatment now covers the whole component. The custom glyph is deliberate — it matches Proxima and takes less width than spelling out <code>PHP</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The row maps to native primitives.",
        "body": "v2.0: frames and slots throughout, so it builds as a <code>VStack</code> / <code>Column</code> with a nested row of cells. No platform table primitive required.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Interaction states are intentionally minimal.",
        "body": "v2.0: reviewed and settled. The row is display-only, so pressed is not needed. <code>State=Disabled</code> is built for past, cancelled, or skipped entries and dims every text layer to <code>#C2CFE5</code>.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Both states name the details row the same way.",
        "body": "v2.1: <code>details-row</code> in Default (<code>5868:40492</code>) and Disabled (<code>5878:41670</code>) alike. The stray <code>item-row</code> is gone.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The date's text properties are distinguishable.",
        "body": "v2.1: the five identically-named <code>#label</code> layers are now <code>#month</code>, <code>separator</code>, <code>#day</code>, <code>separator</code>, <code>#year</code>. The three a developer sets are obvious from the layer tree, and the two restylable separators no longer read as text properties.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Staying a separate component is intentional.",
        "body": "v2.0: reviewed and dismissed. Scheduling carries more controls than a standard Table Row entry — a date line, a primary total, and a variable row of label/amount cells — so it keeps its own record rather than folding into Table Row or shipping as a recipe. It now shares Table Row's slot naming, so the two read as one family.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "The peso glyph is still a boolean operation.",
        "body": "<code>Peso Sign - Proxima</code> wraps a <code>shape_full</code> BOOLEAN_OPERATION rather than a flattened vector. It renders correctly and is a clear improvement on the old raster, but boolean operations are the pattern this review process routes to the Iconography team to flatten. Delegated — not this component's owner to fix.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native component library doesn't exist yet. Nothing to action on the design side.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Align the value layer name with Table Row.",
        "body": "The detail cell here uses <code>#value</code>, which reads correctly. Table Row's data cell uses <code>#description</code> for the same role. <code>#value</code> is the better name — worth aligning the two when Table Row is next touched.",
        "tag": "Rename"
      },
      {
        "headline": "Flatten the peso glyph.",
        "body": "For the Iconography team: <code>Peso Sign - Proxima</code> wraps a <code>shape_full</code> BOOLEAN_OPERATION. Flattening it to a plain vector removes a class of export and scaling surprises.",
        "tag": "Asset"
      },
      {
        "headline": "Document scheduling semantics.",
        "body": "Add guidance on which amount belongs on the primary line (the total debit) versus the detail cells (principal, interest, fee, tax). Without it the component gets reused as a generic multi-amount row on surfaces that aren't schedules.",
        "tag": "Docs"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "The review tooling reads raw hex and can't see variable bindings, so C3 is recorded as unverified. Confirm <code>#0A2757</code>, <code>#6780A9</code>, <code>#005CE5</code>, and the <code>#C2CFE5</code> disabled colour are all bound.",
        "tag": "Token"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('table');return false;\">Table Row</a> — the standard row for column-aligned data. Scheduling stays separate because it carries a date line and a variable detail row on top of that; keep slot naming and state coverage aligned across both.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Rename <code>type</code> values to integers, or drop the property.",
        "body": "v2.0: Applied — dropped entirely. Detail count comes from the number of cells in <code>⤷ AmountRowSlot</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Unify the currency prefix treatment.",
        "body": "v2.0: Applied — one <code>Peso Sign - Proxima</code> vector instance in a <code>⤷ CurrencySlot</code>, on the primary line and in every detail cell. The raster and the <code>\"PHP\"</code> literal are both gone.",
        "tag": "Asset"
      },
      {
        "headline": "Compose each detail cell rather than re-implementing it.",
        "body": "v2.0: Applied — detail cells are <code>Table Amount Cell</code> instances placed through a slot, each nesting its own currency slot.",
        "tag": "Composition"
      },
      {
        "headline": "Add row interaction states if Scheduling stays.",
        "body": "v2.0: Applied as far as it goes — <code>State=Disabled</code> shipped. Pressed was reviewed and dropped: the row is display-only.",
        "tag": "State"
      },
      {
        "headline": "Remove Table - Scheduling from core DS, or collapse the family.",
        "body": "v2.0: Settled — neither. Scheduling stays its own component because it carries more controls than a standard row entry, and it now shares Table Row's slot conventions so the family reads as one.",
        "tag": "Family"
      },
      {
        "headline": "Give the details row one name across both states.",
        "body": "v2.1: Applied — <code>details-row</code> in Default and Disabled alike.",
        "tag": "Rename"
      },
      {
        "headline": "Name the date's separator layers distinctly from its text properties.",
        "body": "v2.1: Applied — <code>#month</code>, <code>separator</code>, <code>#day</code>, <code>separator</code>, <code>#year</code>. The three editable properties are now obvious from the layer tree.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": tableSchedulingDemoControls,
        "title": "Default",
        "node": "5868:40481",
        "description": "360 × 90 on white. A date and peso-prefixed total on the first line, then a details row of <code>Table Amount Cell</code> instances. Toggle <code>hasAmountRow</code> to drop the details row, or vary how many cells sit in the slot.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "prop": "state",
                "mono": false
              },
              {
                "key": "hasAmountRow",
                "value": "true",
                "prop": "hasAmountRow",
                "mono": false
              },
              {
                "key": "Table Amount Cells",
                "value": "2",
                "prop": "cells",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Date label", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Primary amount", "value": "#005CE5", "token": "table/color/label-amount" },
              { "key": "Currency glyph", "value": "#005CE5", "token": "table/color/icon-currency-primary" },
              { "key": "Detail label", "value": "#6780A9", "token": "table/color/label-preamble",
                "variants": { "type:no": { "hide": true } }
              },
              { "key": "Detail value", "value": "#0A2757", "token": "table/color/label",
                "variants": { "type:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "132.5",
                "mono": true,
                "variants": {
                  "type:no": { "value": "50.5" },
                  "type:2":  { "value": "89.5" }
                }
              },
              {
                "key": "Padding H",
                "value": "24",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16",
                "mono": true
              },
              {
                "key": "Date column width",
                "value": "108",
                "mono": true
              },
              {
                "key": "Detail leading width",
                "value": "111",
                "mono": true,
                "variants": { "type:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Date label",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
                "mono": true
              },
              {
                "key": "Primary amount",
                "value": "Proxima Soft Bold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Detail label",
                "value": "Proxima Soft Semibold · 12 / 14 · +0.5",
                "mono": true,
                "variants": { "type:no": { "hide": true } }
              },
              {
                "key": "Detail value",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
                "mono": true,
                "variants": { "type:no": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSchedulingTable.Row</span><span class=\"syn-punc\">(</span>item<span class=\"syn-punc\">, </span>type<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.fourAmounts</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSchedulingTableRow</span><span class=\"syn-punc\">(</span>\n    item <span class=\"syn-eq\">=</span> item<span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBScheduleType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.FourAmounts</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-scheduling-spec-preview\"></div>"
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
            "role": "Height — hasAmountRow=false",
            "token": "—",
            "values": [
              "47px"
            ]
          },
          {
            "role": "Height — hasAmountRow=true",
            "token": "—",
            "values": [
              "90px"
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
          "figma": "<code>State = Default | Disabled</code>",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "<code>hasAmountRow: Boolean</code>",
          "swift": "<code>details: [AmountCell]</code> <span class=\"muted\">— empty hides the row</span>",
          "compose": "<code>details: List&lt;AmountCell&gt; = emptyList()</code>"
        },
        {
          "figma": "<code>hasBorder: Boolean</code>",
          "swift": "<code>showsDivider: Bool = true</code>",
          "compose": "<code>showsDivider: Boolean = true</code>"
        },
        {
          "figma": "<code>#month</code> · <code>#day</code> · <code>#year</code>",
          "swift": "<code>date: DateComponents</code>",
          "compose": "<code>date: LocalDate</code>"
        },
        {
          "figma": "<code>#amount</code> <span class=\"muted\">(primary total)</span>",
          "swift": "<code>total: String</code>",
          "compose": "<code>total: String</code>"
        },
        {
          "figma": "<code>#label</code> <span class=\"muted\">(details row)</span>",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "<code>⤷ CurrencySlot</code>",
          "swift": "<code>currency: AnyView</code>",
          "compose": "<code>currency: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<code>⤷ AmountRowSlot</code> (N × <code>Table Amount Cell</code>)",
          "swift": "<code>details: [AmountCell]</code>",
          "compose": "<code>details: List&lt;AmountCell&gt;</code>"
        },
        {
          "figma": "<code>Table Amount Cell → #label</code> / <code>#value</code>",
          "swift": "<code>AmountCell(label:, value:)</code>",
          "compose": "<code>AmountCell(label =, value =)</code>"
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
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Composes <code>Table Amount Cell</code> instances through <code>⤷ AmountRowSlot</code>, with <code>details-row</code> named identically in both states."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>State</code> is a PascalCase variant property. The <code>type</code> enum and its sentence-shaped values are gone."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not verified — the read-only tooling can't see variable bindings. The literal <code>\"PHP\"</code> prefix is gone, so there is one currency treatment to bind rather than two."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Frames and slots throughout — builds as a <code>VStack</code> / <code>Column</code> with a nested row of cells."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only by design, so pressed is not needed. <code>State=Disabled</code> dims every text layer to <code>#C2CFE5</code>."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Raster replaced by a <code>Peso Sign - Proxima</code> vector instance in <code>⤷ CurrencySlot</code>, used consistently. It still wraps a <code>shape_full</code> BOOLEAN_OPERATION — delegated to the Iconography team to flatten."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native component library doesn't exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "<code>State</code> (2) = <strong>2 published versions</strong>. Two booleans sit on top without adding variants — <code>hasAmountRow</code> and <code>hasBorder</code> — so the real combination count is 8. Detail-cell count isn't a version either: the <code>⤷ AmountRowSlot</code> takes however many <code>Table Amount Cell</code> instances you drop in, replacing the old <code>type</code> axis that hard-coded 0 / 2 / 4.",
      "columns": [
        "State",
        "Dimensions",
        "Background",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Default</strong>",
            "360 × 90",
            "<code>#FFFFFF</code>",
            "<code>5868:40481</code>"
          ]
        },
        {
          "cells": [
            "Disabled",
            "360 × 90",
            "<code>#FFFFFF</code>",
            "<code>5878:41658</code>"
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
