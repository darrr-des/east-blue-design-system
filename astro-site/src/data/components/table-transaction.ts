import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to updateSpecCard(card, prop, value)
// in public/scripts/demos/table-transaction.js.
// The Figma panel lists Role, State, hasLabel, hasBorder, Label and
// ⤷ ColumnSlot. Role drives the cards and the slot gets no control, so
// four rows are left. Column count is not a property: the slot holds
// three cells in every published variant.
const tableTransactionDemoControls: DemoControlSection[] = [
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
        label: 'hasLabel',
        prop: 'hasLabel',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasBorder',
        prop: 'hasBorder',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      { label: 'Label', prop: 'label', control: 'input', defaultValue: 'Label', options: [] },
    ],
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
      "text": "The rebuild turned this from a parallel re-implementation into a genuine composition. Its header slot holds the same <code>Table Cell</code> component that <a href=\"/components/table\">Table Row</a> uses; its content slot holds the same <code>Table Amount Cell</code> that <a href=\"/components/table-scheduling\">Table Scheduling</a> uses. Settings are <code>Role</code> (Header / Content) and <code>State</code> (Default / Disabled), matching Table Row exactly, and <code>no. of columns</code> is gone — column count is however many cells sit in the <code>⤷ ColumnSlot</code>. The raster peso is a <code>Peso Sign - Proxima</code> vector instance inherited from the shared amount cell. Kept as its own component because it carries a full-width <code>#label</code> row above its amount cells, which a plain Table Row doesn't. Rows are display-only, and amounts are unsigned by approved design. A later pass closed the last gap in that composition: the header had been overriding <code>Table Cell</code>'s text style rather than asking for a different version of it, so the primitive gained <code>Role=Transaction</code> and the override is gone. Every colour is bound, and they are the same seven <code>Table Row</code> uses. The peso glyph is still an unflattened boolean operation — delegated to the Iconography team, and the one thing holding this at Needs Refinement."
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
        "notes": "360 × 66 on a <code>#F6F9FD</code> ground. <code>⤷ ColumnSlot</code> holds <code>Table Cell</code> copies at <code>Role=Transaction</code>, each with a 24 × 24 <code>⤷ AssetSlot</code> above a Proxima Soft Semibold 12 label."
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
        "headline": "The header cell has its own version instead of an override.",
        "body": "v2.2: the header's <code>Table Cell</code> copies were painting over the primitive's text style — <code>Table Row</code>'s header draws <code>Primary/Label/Small</code>, this one drew <code>Primary/Multi-line Label/Light/Fine</code>, from the same version of the same component. <code>Table Cell</code> now publishes a <code>Role=Transaction</code> version that carries that style itself, so the two consumers declare their difference rather than one of them quietly repainting it.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The label belongs to the content row by design.",
        "body": "v2.2: reviewed and settled. <code>hasLabel</code> and <code>Label</code> appear on the panel for both roles, but the Header version has no <code>#label</code> layer for them to act on — a header's column names live in its cells. Recorded so it is not re-raised as a missing layer.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Every colour is bound to a named system colour.",
        "body": "v2.2: checked against Figma's selection-colours panel, which the earlier tooling could not read. Seven paints, seven names, and they are the same seven <code>Table Row</code> uses — which is what makes the two read as one family rather than two components that happen to look alike.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
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
        "headline": "Align the amount label token with Inline Text.",
        "body": "v2.2: Applied — the alignment happened by both sides moving to the same place. This row draws from the system-wide <code>text/color-text-weaker</code> and <code>text/color-text</code>, and the <code>inline-text/color/*</code> set the recommendation wanted to align with no longer exists in the file. There is nothing left to reconcile here. What remains is on Inline Text's own page, which still documents those retired tokens.",
        "tag": "Token"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "v2.2: Applied — done from Figma's selection-colours panel. All five colours this named are bound (<code>#F6F9FD</code>, <code>#E5EBF4</code>, <code>#0A2757</code>, <code>#6780A9</code>, <code>#C2CFE5</code>), and so are the white background and the <code>#D7E0EF</code> asset placeholder it did not know about. Details in the Resolved tab.",
        "tag": "Token"
      },
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
    "heading": "Roles",
    "specCards": [
      {
        "cardKey": "header-row",
        "demoKey": "header",
        "demoControls": tableTransactionDemoControls,
        "title": "Header",
        "node": "5896:39740",
        "description": "",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Role",
                "value": "Header"
              },
              {
                "key": "State",
                "value": "Default",
                "variants": {
                  "state:disabled": {
                    "value": "Disabled"
                  }
                }
              },
              {
                "key": "hasLabel",
                "value": "True",
                "variants": {
                  "hasLabel:false": {
                    "value": "False"
                  }
                }
              },
              {
                "key": "hasBorder",
                "value": "True",
                "variants": {
                  "hasBorder:false": {
                    "value": "False"
                  }
                }
              },
              {
                "key": "Label",
                "value": "Label",
                "prop": "label"
              },
              {
                "key": "⤷ ColumnSlot",
                "value": "3 × Table Cell · Role=Transaction"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Background",
                "value": "#F6F9FD",
                "token": "bg/color-bg"
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "variants": {
                  "hasBorder:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Cell text",
                "value": "#0A2757",
                "token": "text/color-text",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  }
                }
              },
              {
                "key": "Cell asset",
                "value": "#D7E0EF",
                "token": "border/color-border"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Table Cell #text",
                "value": "Primary/Multi-line Label/Light/Fine",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "Hug · 66",
                "mono": true
              },
              {
                "key": "Width",
                "value": "360",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24 · on container",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12 · on container",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "10 · on container",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Left · Top",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">role</span><span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>header<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">columns</span><span class=\"syn-punc\">: </span>columns\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Header<span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> columns\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-transaction-spec-header\"><div class=\"eb-preview eb-preview-ttxn eb-preview-ttxn--header\"><div class=\"eb-preview-ttxn__cols\"><div class=\"eb-preview-ttxn__cell\"><div class=\"eb-preview-ttxn__cell-asset\"></div><span class=\"eb-preview-ttxn__cell-label\">Column Label</span></div><div class=\"eb-preview-ttxn__cell\"><div class=\"eb-preview-ttxn__cell-asset\"></div><span class=\"eb-preview-ttxn__cell-label\">Column Label</span></div><div class=\"eb-preview-ttxn__cell\"><div class=\"eb-preview-ttxn__cell-asset\"></div><span class=\"eb-preview-ttxn__cell-label\">Column Label</span></div></div></div></div>"
      },
      {
        "cardKey": "content-row",
        "demoKey": "content",
        "demoControls": tableTransactionDemoControls,
        "title": "Content",
        "node": "5896:39762",
        "description": "",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Role",
                "value": "Content"
              },
              {
                "key": "State",
                "value": "Default",
                "variants": {
                  "state:disabled": {
                    "value": "Disabled"
                  }
                }
              },
              {
                "key": "hasLabel",
                "value": "True",
                "variants": {
                  "hasLabel:false": {
                    "value": "False"
                  }
                }
              },
              {
                "key": "hasBorder",
                "value": "True",
                "variants": {
                  "hasBorder:false": {
                    "value": "False"
                  }
                }
              },
              {
                "key": "Label",
                "value": "Label",
                "prop": "label"
              },
              {
                "key": "⤷ ColumnSlot",
                "value": "3 × Table Amount Cell · hasLabel=false"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Background",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main"
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "variants": {
                  "hasBorder:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "#label",
                "value": "#6780A9",
                "token": "text/color-text-weaker",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  },
                  "hasLabel:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Cell amount · currency",
                "value": "#0A2757",
                "token": "text/color-text",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#label",
                "value": "Primary/Multi-line Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hasLabel:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Table Amount Cell #amount",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "Hug · 68",
                "mono": true
              },
              {
                "key": "Width",
                "value": "360",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24 · on container",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16 · on container",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8 · on container",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Left · Top",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">role</span><span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>content<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">amounts</span><span class=\"syn-punc\">: </span>amounts\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Content<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    amounts <span class=\"syn-eq\">=</span> amounts\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-transaction-spec-content\"><div class=\"eb-preview eb-preview-ttxn eb-preview-ttxn--content\"><div class=\"eb-preview-ttxn__label\">Label</div><div class=\"eb-preview-ttxn__cols\"><div class=\"eb-preview-ttxn__cell\"><span class=\"eb-preview-ttxn__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div><div class=\"eb-preview-ttxn__cell\"><span class=\"eb-preview-ttxn__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div><div class=\"eb-preview-ttxn__cell\"><span class=\"eb-preview-ttxn__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div></div></div></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Role",
        "description": "Seven paints, and the seven names Figma's selection-colours panel lists for node <code>5896:39727</code> — the same set <code>Table Row</code> uses, which is what makes the two read as one family. The <code>⤷ ColumnSlot</code> holds a different primitive per role: <code>Table Cell</code> at <code>Role=Transaction</code> in Header, <code>Table Amount Cell</code> in Content with its own label switched off, so the row's single <code>#label</code> covers all three columns.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Header",
            "token": "Background",
            "values": [
              "bg/color-bg",
              "#F6F9FD"
            ]
          },
          {
            "role": "—",
            "token": "Border",
            "values": [
              "border/color-border-weak",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "Cell text",
            "values": [
              "text/color-text",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "Cell asset",
            "values": [
              "border/color-border",
              "#D7E0EF"
            ]
          },
          {
            "role": "Content",
            "token": "Background",
            "values": [
              "bg/color-bg-main",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Border",
            "values": [
              "border/color-border-weak",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "#label",
            "values": [
              "text/color-text-weaker",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "Cell amount · currency",
            "values": [
              "text/color-text",
              "#0A2757"
            ]
          },
          {
            "role": "Disabled",
            "token": "Every text layer",
            "values": [
              "text/color-text-disabled",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "Background · border · asset",
            "values": [
              "— unchanged",
              "–"
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
          "code": "<span class=\"syn-cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">dependencies</span> {\n    <span class=\"syn-fn\">implementation</span>(<span class=\"syn-str\">\"com.eastblue.ds:table:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>table<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ]
    },
    "propertyMapping": {
      "description": "Table Transaction publishes six properties. The rows beneath them map the two nested primitives — <code>Table Cell</code> and <code>Table Amount Cell</code> — neither of which has a page of its own; their <code>Role</code> and <code>State</code> are driven by the row, so neither takes a parameter here. One property behaves differently by role: <code>⤷ ColumnSlot</code> holds <code>Table Cell</code> at <code>Role=Transaction</code> in a Header row and <code>Table Amount Cell</code> in a Content row, so it maps to two different arrays rather than one. And <code>hasLabel</code> with <code>Label</code> apply to Content only — the Header variant has no <code>#label</code> layer for them to act on, which is deliberate.",
      "rows": [
        {
          "figma": "Role — Header, Content",
          "swift": "<code>role: .header / .content</code>",
          "compose": "<code>role = EBTableRowRole.Header / Content</code>"
        },
        {
          "figma": "State — Default, Disabled",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "hasLabel — true, false (Content only)",
          "swift": "<code>label == nil</code> <span class=\"muted\">— nil hides the line</span>",
          "compose": "<code>label == null</code>"
        },
        {
          "figma": "hasBorder — true, false",
          "swift": "<code>showsDivider: Bool = true</code>",
          "compose": "<code>showsDivider: Boolean = true</code>"
        },
        {
          "figma": "Label (text, Content only)",
          "swift": "<code>label: String?</code>",
          "compose": "<code>label: String? = null</code>"
        },
        {
          "figma": "⤷ ColumnSlot (slot) — Table Cell in Header, Table Amount Cell in Content",
          "swift": "<code>columns: [Column]</code> <span class=\"muted\">/</span><code>amounts: [AmountCell]</code>",
          "compose": "<code>columns: List&lt;Column&gt;</code> <span class=\"muted\">/</span><code>amounts: List&lt;AmountCell&gt;</code>"
        },
        {
          "figma": "Table Cell → Text (text)",
          "swift": "<code>Column.text: String</code>",
          "compose": "<code>Column.text: String</code>"
        },
        {
          "figma": "Table Cell → hasAsset — true, false",
          "swift": "<code>Column.asset == nil</code> <span class=\"muted\">— nil hides the slot</span>",
          "compose": "<code>Column.asset == null</code>"
        },
        {
          "figma": "Table Cell → ⤷ AssetSlot (slot)",
          "swift": "<code>Column.asset: AnyView?</code>",
          "compose": "<code>Column.asset: @Composable (() -&gt; Unit)?</code>"
        },
        {
          "figma": "Table Amount Cell → Amount (text)",
          "swift": "<code>AmountCell.amount: String</code>",
          "compose": "<code>AmountCell.amount: String</code>"
        },
        {
          "figma": "Table Amount Cell → Label (text)",
          "swift": "<code>AmountCell.label: String?</code>",
          "compose": "<code>AmountCell.label: String? = null</code>"
        },
        {
          "figma": "Table Amount Cell → hasLabel — true, false",
          "swift": "<code>AmountCell.label == nil</code> <span class=\"muted\">— false here; the row's own Label covers all columns</span>",
          "compose": "<code>AmountCell.label == null</code>"
        },
        {
          "figma": "Table Amount Cell → ⤷ CurrencySlot (slot)",
          "swift": "<code>AmountCell.currency: AnyView?</code>",
          "compose": "<code>AmountCell.currency: @Composable (() -&gt; Unit)?</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Table/EBTableTransactionRow.swift",
        "compose": "android/components/table/EBTableTransactionRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Header",
        "swift": "<span class=\"syn-cmt\">// One Header row above the content rows it labels.</span>\n<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">role</span><span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>header<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">columns</span><span class=\"syn-punc\">: [</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Daily\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">asset</span><span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"calendar\"</span><span class=\"syn-punc\">)),</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Weekly\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">asset</span><span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"week\"</span><span class=\"syn-punc\">)),</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Monthly\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">asset</span><span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"month\"</span><span class=\"syn-punc\">))</span>\n    <span class=\"syn-punc\">]</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// One Header row above the content rows it labels.</span>\n<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Header<span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> <span class=\"syn-fn\">listOf</span><span class=\"syn-punc\">(</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Daily\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Weekly\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Monthly\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Content",
        "swift": "<span class=\"syn-cmt\">// The row's Label names all three columns at once.</span>\n<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">role</span><span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>content<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Transaction limit\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">amounts</span><span class=\"syn-punc\">: [</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"3,500.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"20,000.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"80,000.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">]</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// The row's Label names all three columns at once.</span>\n<span class=\"syn-type\">EBTableTransactionRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Content<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Transaction limit\"</span><span class=\"syn-punc\">,</span>\n    amounts <span class=\"syn-eq\">=</span> <span class=\"syn-fn\">listOf</span><span class=\"syn-punc\">(</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"3,500.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"20,000.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"80,000.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
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
    "usageGuidelines": [
      {
        "doText": "Use one Header row at the top, naming the columns beneath it.",
        "dontText": "Don't repeat it between groups — the header's cells carry column labels, not group titles."
      },
      {
        "doText": "Put the row's subject in Label and only figures in the cells.",
        "dontText": "Don't reach for hasLabel on a Header row — that variant has no #label layer, so nothing happens."
      },
      {
        "doText": "Give every row in one table the same number of cells.",
        "dontText": "Don't mix 3 in the header and 4 below: the ⤷ ColumnSlot divides its 312px evenly, so the two rows land on 104px and 78px columns and nothing lines up."
      },
      {
        "doText": "Let the platform format each amount and its currency symbol.",
        "dontText": "Don't ship ₱ as literal text beside a preformatted number — the glyph is a slot so it can follow the locale."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>container</code> per role, a single <code>⤷ ColumnSlot</code>, and text layers on the <code>#…</code> form. The primitives it composes carry their own names rather than being redrawn here."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Role</code> and <code>State</code> are PascalCase with Title Case values, matching <code>Table Row</code>; two <code>has*</code> booleans and one text property named for what it holds. <code>hasLabel</code> and <code>Label</code> apply to Content only — deliberate, since the Header role has no label line."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Verified against the selection-colours panel: seven paints, seven names — <code>bg/color-bg</code>, <code>bg/color-bg-main</code>, <code>border/color-border</code>, <code>border/color-border-weak</code>, <code>text/color-text</code>, <code>text/color-text-weaker</code> and <code>text/color-text-disabled</code>. The same set <code>Table Row</code> uses, which is what makes the two read as one family."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A row of evenly divided cells on both platforms — no table primitive needed. The one wrinkle is that <code>⤷ ColumnSlot</code> holds a different primitive per role, so it maps to two arrays rather than one."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only by design, so pressed and selected have nothing to show. <code>State=Disabled</code> dims every text layer to <code>text/color-text-disabled</code> and leaves background, border and asset alone. Both primitives publish their own Disabled version, so the row swaps to them rather than overriding fills per copy."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The <code>Peso Sign - Proxima</code> instance inside each Content cell draws an unflattened <code>BOOLEAN_OPERATION</code> rather than a flat vector. It renders correctly and is tracked as a design recommendation; flattening is the iconography team's to do."
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
      "total": 4,
      "description": "<code>Role</code> (2) × <code>State</code> (2) = <strong>4 published versions</strong>. Two booleans and a text property sit on top without adding any — <code>hasBorder</code> on every row, <code>hasLabel</code> and <code>Label</code> on Content only — so the row has 8 combinations behind 4 versions. Cell count is not a version either: the <code>⤷ ColumnSlot</code> takes however many cells you drop in, three in every published variant, and which primitive fills it follows the role — <code>Table Cell</code> at <code>Role=Transaction</code> in Header, <code>Table Amount Cell</code> in Content.",
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
      "version": "2.2.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Header override closed; Style, Code and Overview rebuilt to the content guides · node 5896:39727",
      "rows": [
        {
          "body": "<strong>The header cell has its own version instead of an override.</strong> The header's <code>Table Cell</code> copies were painting over the primitive's text style — <code>Table Row</code>'s header draws <code>Primary/Label/Small</code>, this one drew <code>Primary/Multi-line Label/Light/Fine</code>, from the same version of the same component. <code>Table Cell</code> now publishes <code>Role=Transaction</code> (nodes <code>9567:96672</code> and <code>9567:96676</code>) carrying that style itself. The defect was invisible from either side: both components looked correct alone, and only comparing the two consumers showed one repainting the other.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>The label belongs to the content row by design.</strong> <code>hasLabel</code> and <code>Label</code> appear on the panel for both roles, but the Header version has no <code>#label</code> layer for them to act on — a header's column names live in its cells. Reviewed and recorded so it is not re-raised as a missing layer.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Every colour is bound to a named system colour.</strong> Checked against Figma's selection-colours panel: seven paints, seven names, and they are the same seven <code>Table Row</code> uses. This closes the standing recommendation to audit the bindings, which had listed five colours and missed the <code>#D7E0EF</code> asset placeholder.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>The Inline Text alignment resolved itself.</strong> A recommendation asked this row's label and value tokens to align with Inline Text's. Both sides moved: this row draws from the system-wide <code>text/*</code> set, and the <code>inline-text/color/*</code> tokens no longer exist in the file. Nothing left to reconcile here — what remains is on Inline Text's own page, which still documents the retired tokens.",
          "delta": {
            "kind": "resolved",
            "label": "Token"
          }
        },
        {
          "body": "<strong>The Style tab pointed at nodes that no longer exist.</strong> Both spec cards cited <code>47:324703</code> and <code>47:324708</code> from before the rebuild. Heights read <code>36</code> and <code>72.5</code> against a real <code>Hug · 66</code> and <code>Hug · 68</code>, and both text style names were wrong — <code>Primary/Multi-line Label/Light/Tiny</code> for a style that is <code>/Fine</code>, and <code>Primary/Label/Small</code> for one that is <code>Primary/Label/Light/Fine</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Layout is read rather than derived.</strong> The Auto layout panels settle it: padding sits on the inner <code>container</code>, 24 both sides with 12 top and bottom on Header and 16 on Content. The two containers also carry different gaps — 10 on Header, 8 on Content — both inert today since Header has a single child. Documented as Figma has them rather than normalised, since removing either could disturb something already placed.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab rebuilt to the content guide.</strong> Installation was empty — no SPM, no Gradle, no import — and now takes the <code>Table</code> family's coordinates. Property Mapping went from 10 rows to 13, regrouped into prose, with <code>Label</code> added (it had no row at all) and the two nested primitives mapped properly. Usage Snippets split one per <code>Role</code>; four usage guidelines written where there were none.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>One native name meant two primitives.</strong> <code>Table Row</code> maps <code>Table Cell</code> to <code>Column</code>, and <code>Table Scheduling</code> maps <code>Table Amount Cell</code> to <code>Column</code> as well. This row is where both appear together, so it would have been the first place they collided in one API. <code>Table Amount Cell</code> is <code>AmountCell</code> here; <code>Table Scheduling</code>'s five rows still need the same rename.",
          "delta": {
            "kind": "partial",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Two versions of history were missing.</strong> The v2.0 and v2.1 work shipped together in <code>7f5cafa</code> (August 2026) and never got changelog entries, while the Overview tab referenced both throughout. Both are written above, reconstructed from that commit and from the Overview's own version-tagged records.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.1.0",
      "date": "August 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Naming pass on the rebuild · node 5896:39727",
      "rows": [
        {
          "body": "<strong>The container is named the same way in every version.</strong> The four versions had drifted onto different names for the same wrapper.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The shared amount cell got a family-neutral name.</strong> It had been named for the component that first used it, which reads wrong the moment a second one adopts it — as <code>Table Scheduling</code> and this row both now do.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "2026 Working File · rebuilt on the family's atoms · node 5896:39727",
      "rows": [
        {
          "body": "<strong>It composes the family's atoms instead of duplicating them.</strong> The header row was a parallel re-implementation of what <code>Table Row</code> already drew. Its <code>⤷ ColumnSlot</code> now holds the same <code>Table Cell</code> component, and the content row holds the same <code>Table Amount Cell</code> that <code>Table Scheduling</code> uses.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The column-count setting is gone.</strong> <code>no. of columns</code> fixed the number of cells at build time; the slot now takes however many you drop in.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>The peso sign became a vector.</strong> It was a raster image that would not scale with Dynamic Type, and is now a <code>Peso Sign - Proxima</code> instance inherited from the shared amount cell.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>The row maps to native primitives.</strong> Evenly divided cells in a stack — no platform table primitive needed on either side.",
          "delta": {
            "kind": "resolved",
            "label": "C4 Resolved"
          }
        },
        {
          "body": "<strong>Disabled shipped; pressed and selected were dropped on purpose.</strong> The row is display-only and carries no tap target, so those two states have nothing to show.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Transaction stays its own component.</strong> The proposal was to remove it from core DS or fold it into <code>Table Row</code> as a recipe. It keeps a full-width label above a row of amount cells, which a standard row has no shape for, so it stays separate and shares the atoms instead.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        }
      ]
    },
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
