import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/table-transaction.js`.
// Column count is not a property — the ⤷ ColumnSlot holds however many cells
// you drop in, so `cols` just varies what the preview renders.
const tableTxnStateRow = {
  label: 'State',
  prop: 'state',
  defaultValue: 'default',
  options: [
    { value: 'default', label: 'Default' },
    { value: 'disabled', label: 'Disabled' },
  ],
};

const tableTxnCellsRow = {
  label: 'Cells',
  prop: 'cols',
  defaultValue: '3',
  options: [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ],
};

const tableTxnHeaderDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      tableTxnStateRow,
      tableTxnCellsRow,
      {
        label: '⤷ AssetSlot',
        prop: 'asset',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'filled' },
          { value: 'no', label: 'empty' },
        ],
      },
    ],
  },
];

const tableTxnContentDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [tableTxnStateRow, tableTxnCellsRow],
  },
];

export const tableTransaction: ComponentData = {
  "meta": {
    "slug": "table-transaction",
    "name": "Table Transaction",
    "node": "5896:39727",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5896-39727",
    "description": "A display-only transaction row — a header of column labels, or a content row with a full-width label above however many peso-amount cells you drop into its slot.",
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
      "title": "Keep — now built from the family's shared atoms",
      "text": "The rebuild turned this from a parallel re-implementation into a genuine composition. Its header slot holds the same <code>Table Cell</code> component that <a href=\"/components/table\">Table Row</a> uses; its content slot holds the same <code>Table Amount Cell</code> that <a href=\"/components/table-scheduling\">Table Scheduling</a> uses. Settings are <code>Role</code> (Header / Content) and <code>State</code> (Default / Disabled), matching Table Row exactly, and <code>no. of columns</code> is gone — column count is however many cells sit in the <code>⤷ ColumnSlot</code>. The raster peso is a <code>Peso Sign - Proxima</code> vector instance inherited from the shared amount cell. Kept as its own component because it carries a full-width <code>#label</code> row above its amount cells, which a plain Table Row doesn't. Rows are display-only, and amounts are unsigned by approved design."
    }
  },
  "overview": {
    "inContextNote": "Per-variant descriptions cite account limits — e.g. daily / monthly send caps showing used vs. remaining peso amounts in aligned columns. Other GCash surfaces like transaction history and receipts use the Generic Transaction Card vertical stack, not this tabular layout.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"120\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Account Limits</text>\n          \n          <rect x=\"40\" y=\"28\" width=\"140\" height=\"12\" fill=\"#F6F9FD\"></rect>\n          <text x=\"64\" y=\"37\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">USED</text>\n          <text x=\"110\" y=\"37\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">REMAINING</text>\n          <text x=\"156\" y=\"37\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">TOTAL</text>\n          \n          <text x=\"46\" y=\"52\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Daily</text>\n          <text x=\"64\" y=\"62\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱3,500</text>\n          <text x=\"110\" y=\"62\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱6,500</text>\n          <text x=\"156\" y=\"62\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱10,000</text>\n          <line x1=\"40\" y1=\"68\" x2=\"180\" y2=\"68\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"46\" y=\"78\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Monthly</text>\n          <text x=\"64\" y=\"88\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱42,000</text>\n          <text x=\"110\" y=\"88\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱58,000</text>\n          <text x=\"156\" y=\"88\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱100,000</text>\n          <line x1=\"40\" y1=\"94\" x2=\"180\" y2=\"94\" stroke=\"#E5EBF4\"></line>\n          <rect x=\"56\" y=\"104\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"114\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Request Increase</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-transaction-demo-preview\"><div class=\"eb-preview eb-preview-ttxn eb-preview-ttxn--header\"><div class=\"eb-preview-ttxn__cols\"><div class=\"eb-preview-ttxn__cell\"><div class=\"eb-preview-ttxn__cell-asset\"></div><span class=\"eb-preview-ttxn__cell-label\">Column Label</span></div><div class=\"eb-preview-ttxn__cell\"><div class=\"eb-preview-ttxn__cell-asset\"></div><span class=\"eb-preview-ttxn__cell-label\">Column Label</span></div><div class=\"eb-preview-ttxn__cell\"><div class=\"eb-preview-ttxn__cell-asset\"></div><span class=\"eb-preview-ttxn__cell-label\">Column Label</span></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Role</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-role\" onchange=\"updateTableTransactionDemo()\"><option value=\"header\" selected=\"\">Header</option><option value=\"content\">Content</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-state\" onchange=\"updateTableTransactionDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\" id=\"table-transaction-row-haslabel\"><span class=\"demo-panel-label\">hasLabel</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-haslabel\" onchange=\"updateTableTransactionDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\" id=\"table-transaction-row-label\"><span class=\"demo-panel-label\">#label</span><input type=\"text\" id=\"table-transaction-demo-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"updateTableTransactionDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBorder</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-hasborder\" onchange=\"updateTableTransactionDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ ColumnSlot</div><div class=\"demo-panel-row\" id=\"table-transaction-row-asset\"><span class=\"demo-panel-label\">Table Cell ⤷ AssetSlot</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-asset\" onchange=\"updateTableTransactionDemo()\"><option value=\"yes\" selected=\"\">filled</option><option value=\"no\">empty</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Cells</span><select class=\"demo-panel-select\" id=\"table-transaction-demo-cols\" onchange=\"updateTableTransactionDemo()\"><option value=\"2\">2</option><option value=\"3\" selected=\"\">3</option><option value=\"4\">4</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "<code>⤷ ColumnSlot</code> takes any number of cells, and the shared <code>Table Amount Cell</code> carries its own <code>⤷ CurrencySlot</code> — a non-peso currency is a swap, not a detach."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "The currency prefix is a <code>Peso Sign - Proxima</code> vector instance inherited from the shared amount cell. The raster image fill and its remote asset URL are gone."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Role</code> and <code>State</code> match Table Row exactly, slots use the family's <code>⤷ …Slot</code> form, and <code>container</code> is named the same way across all four versions. The <code>no. of columns</code> string-with-period property is gone."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built from the family's own atoms — <code>Table Cell</code> in the header, <code>Table Amount Cell</code> in the content row. Nothing is re-implemented locally."
      }
    ],
    "behavior": [
      {
        "state": "Header",
        "ios": "yes",
        "android": "yes",
        "property": "Role=Header",
        "notes": "360 × 66 on a <code>#F6F9FD</code> ground. <code>⤷ ColumnSlot</code> holds <code>Table Cell</code> instances, each with a 24 × 24 <code>⤷ AssetSlot</code> above a Proxima Soft Semibold 12 label."
      },
      {
        "state": "Content",
        "ios": "yes",
        "android": "yes",
        "property": "Role=Content",
        "notes": "360 × 68 on white. A full-width <code>#label</code> in <code>#6780A9</code> sits above a row of <code>Table Amount Cell</code> instances, each pairing a label with a peso-prefixed <code>#value</code>."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Text dims to <code>#C2CFE5</code> across labels and values alike."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Not needed — rows are display-only and carry no tap target."
      }
    ],
    "resolved": [
      {
        "headline": "It composes the family's atoms instead of duplicating them.",
        "body": "v2.0: rebuilt on node <code>5896:39727</code>. The header's <code>⤷ ColumnSlot</code> holds the same <code>Table Cell</code> component Table Row uses; the content row holds the same <code>Table Amount Cell</code> Table Scheduling uses. What were three parallel re-implementations are now one family sharing parts.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>no. of columns</code> is gone.",
        "body": "v2.0: column count comes from the number of cells in <code>⤷ ColumnSlot</code>. The period-in-name string enum inherited from the old Table is no longer there to fix.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The row maps to native primitives.",
        "body": "v2.0: frames and slots throughout — a <code>VStack</code> / <code>Column</code> with a nested row of cells. No platform table primitive required.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Interaction states are intentionally minimal.",
        "body": "v2.0: reviewed and settled. Rows are display-only, so pressed and selected are not needed. <code>State=Disabled</code> is built and dims text to <code>#C2CFE5</code>. Amounts carry no <code>+</code> / <code>−</code> prefix and no positive/negative colouring — that is the approved design, not a gap.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The peso sign is a vector.",
        "body": "v2.0: the raster image fill and its remote <code>figma.com/api/mcp/asset/*</code> URL are gone, replaced by a <code>Peso Sign - Proxima</code> instance in <code>⤷ CurrencySlot</code>. The header's hardcoded <code>#C2C6CF</code> circle is now a <code>⤷ AssetSlot</code> holding a swappable <code>Placeholder</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Staying a separate component is intentional.",
        "body": "v2.0: reviewed and dismissed. Transaction keeps its own record because its content row carries a full-width <code>#label</code> above the amount cells, which a plain Table Row entry doesn't. Same reasoning as Table Scheduling — and since both now build from shared atoms, the family reads as one.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>container</code> is named consistently.",
        "body": "v2.1: all four versions use lowercase <code>container</code>. The Header versions previously used <code>Container</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The shared amount cell has a family-neutral name.",
        "body": "v2.1: <code>Table Scheduling Amount Cell</code> renamed to <code>Table Amount Cell</code>. It is used by both Scheduling and Transaction, so the old name claimed a family it no longer belonged to exclusively. The rename propagated to both components.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
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
        "headline": "Document amount-sign semantics.",
        "body": "Amounts here are unsigned by approved design — used, remaining, and cap totals rather than signed movements. Write that down so the component isn't reached for on flows that need <code>+</code> / <code>−</code>; those belong to Generic Transaction Card.",
        "tag": "Docs"
      },
      {
        "headline": "Align the amount label token with Inline Text.",
        "body": "The content-row label uses <code>#6780A9</code> and the value <code>#0A2757</code> — the same semantic pair Inline Text covers with its own tokens. A shared set would stop the two drifting apart.",
        "tag": "Token"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "The review tooling reads raw hex and can't see variable bindings, so C3 is recorded as unverified. Confirm <code>#F6F9FD</code>, <code>#E5EBF4</code>, <code>#0A2757</code>, <code>#6780A9</code>, and the <code>#C2CFE5</code> disabled colour are all bound.",
        "tag": "Token"
      },
      {
        "headline": "Flatten the peso glyph.",
        "body": "For the Iconography team: <code>Peso Sign - Proxima</code> wraps a <code>shape_full</code> BOOLEAN_OPERATION. Flattening it to a plain vector removes a class of export and scaling surprises. Shared with Table Scheduling.",
        "tag": "Asset"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('table');return false;\">Table Row</a> and <a href=\"#\" onclick=\"showPanelById('table-scheduling');return false;\">Table Scheduling</a> — all three share <code>Table Cell</code> and <code>Table Amount Cell</code>. Keep slot naming and state coverage aligned across the family.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Remove Table - Transaction from core DS, or fold it into Table as a recipe.",
        "body": "v2.0: Settled — neither. It keeps its own record because its content row carries a full-width label above the amount cells, and it now composes the family's shared atoms rather than duplicating them.",
        "tag": "Family"
      },
      {
        "headline": "Consolidate with Table's row primitive.",
        "body": "v2.0: Applied in substance — the header slot holds Table Row's <code>Table Cell</code> and the content slot holds <code>Table Amount Cell</code>, so the parts are shared even though the record stays separate.",
        "tag": "Composition"
      },
      {
        "headline": "Rename or drop <code>no. of columns</code>.",
        "body": "v2.0: Applied — dropped. Column count comes from the number of cells in <code>⤷ ColumnSlot</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the raster peso sign with a text glyph or vector icon.",
        "body": "v2.0: Applied — a <code>Peso Sign - Proxima</code> vector instance in <code>⤷ CurrencySlot</code>, inherited from the shared amount cell.",
        "tag": "Asset"
      },
      {
        "headline": "Give the container one name across all versions.",
        "body": "v2.1: Applied — lowercase <code>container</code> on all four.",
        "tag": "Rename"
      },
      {
        "headline": "Give the shared amount cell a family-neutral name.",
        "body": "v2.1: Applied — <code>Table Scheduling Amount Cell</code> is now <code>Table Amount Cell</code>, propagated to both Scheduling and Transaction.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "header-row",
        "demoKey": "header",
        "demoControls": tableTxnHeaderDemoControls,
        "title": "Header row",
        "node": "47:324703",
        "description": "Subtle-bg row with bottom border. 10px Proxima Soft Semibold column labels across equal-width flex columns. Optional 24px icon above each label.",
        "previewHtml": "<div id=\"spec-header-preview\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Columns",
                "value": "3",
                "mono": false,
                "prop": "cols"
              },
              {
                "key": "Icon",
                "value": "no",
                "mono": false,
                "prop": "icon"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#F6F9FD", "token": "table/color/bg-subtle" },
              { "key": "Border", "value": "#E5EBF4", "token": "table/color/border" },
              { "key": "Column label", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Icon placeholder", "value": "#C2C6CF", "token": "— (hardcoded)",
                "variants": { "icon:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "36",
                "mono": true,
                "variants": { "icon:yes": { "value": "62" } }
              },
              {
                "key": "Padding H",
                "value": "24",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true,
                "variants": { "icon:no": { "hide": true } }
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
        "cardKey": "content-row",
        "demoKey": "content",
        "demoControls": tableTxnContentDemoControls,
        "title": "Content row",
        "node": "47:324708",
        "description": "White bg with bottom border. Preamble label on top, then equal-width amount cells with a peso glyph + numeric value (<code>X,XXX.XX</code>).",
        "previewHtml": "<div id=\"spec-content-preview\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Columns",
                "value": "3",
                "mono": false,
                "prop": "cols"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "table/color/border" },
              { "key": "Preamble label", "value": "#6780A9", "token": "table/color/label-preamble" },
              { "key": "Amount value", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Currency glyph", "value": "#183462", "token": "table/color/icon-currency-secondary" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "72.5",
                "mono": true
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
          "figma": "<code>Role = Header | Content</code>",
          "swift": "<code>role: .header / .content</code>",
          "compose": "<code>role = EBTableRowRole.Header / Content</code>"
        },
        {
          "figma": "<code>State = Default | Disabled</code>",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "<code>hasLabel: Boolean</code> <span class=\"muted\">(content only)</span>",
          "swift": "<code>label: String?</code> <span class=\"muted\">— nil hides it</span>",
          "compose": "<code>label: String? = null</code>"
        },
        {
          "figma": "<code>hasBorder: Boolean</code>",
          "swift": "<code>showsDivider: Bool = true</code>",
          "compose": "<code>showsDivider: Boolean = true</code>"
        },
        {
          "figma": "<code>⤷ ColumnSlot</code> (N × <code>Table Cell</code>)",
          "swift": "<code>columns: [Column]</code>",
          "compose": "<code>columns: List&lt;Column&gt;</code>"
        },
        {
          "figma": "<code>⤷ ColumnSlot</code> (N × <code>Table Amount Cell</code>)",
          "swift": "<code>amounts: [AmountCell]</code>",
          "compose": "<code>amounts: List&lt;AmountCell&gt;</code>"
        },
        {
          "figma": "<code>Table Cell → ⤷ AssetSlot</code>",
          "swift": "<code>Column.asset: AnyView?</code>",
          "compose": "<code>Column.asset: @Composable (() -&gt; Unit)?</code>"
        },
        {
          "figma": "<code>Table Amount Cell → ⤷ CurrencySlot</code>",
          "swift": "<code>currency: AnyView</code>",
          "compose": "<code>currency: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<code>#label</code> (content row)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "<code>Table Amount Cell → #label</code>",
          "swift": "<span class=\"muted\">hidden here — the row's single <code>label</code> covers every cell</span>",
          "compose": "<span class=\"muted\">hidden here — the row's single <code>label</code> covers every cell</span>"
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
        "criterion": "Layer Structure &amp; Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Composes Table Row&#39;s <code>Table Cell</code> in the header and the shared <code>Table Amount Cell</code> in the content row. <code>container</code> is named the same way across all four versions."
      },
      {
        "id": "C2",
        "criterion": "Variant &amp; Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Role</code> and <code>State</code> match Table Row exactly. The <code>no. of columns</code> property and its period are gone."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not verified — the read-only tooling cannot see variable bindings. The hardcoded <code>#C2C6CF</code> header circle is gone, replaced by a <code>⤷ AssetSlot</code>."
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
        "notes": "Display-only by design, so pressed is not needed. <code>State=Disabled</code> dims text to <code>#C2CFE5</code>. Amounts are unsigned by approved design."
      },
      {
        "id": "C6",
        "criterion": "Asset &amp; Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Raster replaced by a <code>Peso Sign - Proxima</code> vector instance, and the header circle by a <code>⤷ AssetSlot</code>. The glyph still wraps a <code>shape_full</code> BOOLEAN_OPERATION — delegated to the Iconography team."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native component library does not exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>Role</code> (2) × <code>State</code> (2) = <strong>4 published versions</strong>, listed below. Two booleans sit on top without adding variants — <code>hasBorder</code> on every row, and <code>hasLabel</code> on Content only — so the real combination count is 12. Column count isn't a version either: the <code>⤷ ColumnSlot</code> takes however many cells you drop in — <code>Table Cell</code> instances in the header, <code>Table Amount Cell</code> instances in the content row, where each cell's own <code>#label</code> is hidden.",
      "columns": [
        "Role",
        "State",
        "Dimensions",
        "Background",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Header</strong>",
            "Default",
            "360 × 66",
            "<code>#F6F9FD</code>",
            "<code>5896:39740</code>"
          ]
        },
        {
          "cells": [
            "Header",
            "Disabled",
            "360 × 66",
            "<code>#F6F9FD</code>",
            "<code>5900:40254</code>"
          ]
        },
        {
          "cells": [
            "<strong>Content</strong>",
            "Default",
            "360 × 68",
            "<code>#FFFFFF</code>",
            "<code>5896:39762</code>"
          ]
        },
        {
          "cells": [
            "Content",
            "Disabled",
            "360 × 68",
            "<code>#FFFFFF</code>",
            "<code>5900:40274</code>"
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
