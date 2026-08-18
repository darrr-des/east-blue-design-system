import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/table.js`.
// Column count is not a property — the Columns Slot holds however many
// Table Cell instances you drop in, so `cols` just varies what the preview
// renders. `asset` toggles the Placeholder inside each cell's Asset Slot.
const tableRowDemoControls: DemoControlSection[] = [
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
        label: 'Table Cells',
        prop: 'cols',
        defaultValue: '3',
        options: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
        ],
      },
      {
        label: '⤷ Asset Slot',
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

const tableHeaderDemoControls = tableRowDemoControls;
const tableContentDemoControls = tableRowDemoControls;

export const table: ComponentData = {
  "meta": {
    "slug": "table",
    "name": "Table Row",
    "node": "5734:37611",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5734-37611",
    "description": "A display-only table row — a leading label and however many data cells you drop into its Columns Slot. Comes in Header and Content roles, each with a disabled state.",
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
      "title": "Keep — rebuilt as one composable row",
      "text": "The old three-component setup (Table + Table - Item + Table - Label) is gone, and with it the <code>no. of columns</code> variant matrix. <code>Table Row</code> now composes <code>Table Label</code> and <code>Table Cell</code> as real instances through slots, so column count is whatever you put in the <code>Columns Slot</code> rather than a property to pick from. Settings are <code>Role</code> (Header / Content) and <code>State</code> (Default / Disabled) — 4 versions in place of 3 components and 14 variants. Rows are display-only by design, so there is no pressed or selected state. The follow-up pass cleared the rest: <code>#description</code> moved to the 10px token, the disabled state now dims every text layer, and all three slots settled on <code>⤷ …Slot</code>. Code Connect stays unmapped because the native library doesn't exist yet."
    }
  },
  "overview": {
    "inContextNote": "Sticker sheet shows Table instances stacked on a Template Screen to build a static 6-row pattern — 1 header row + 5 content rows. No scroll, no sort, no selection.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"130\" viewBox=\"0 0 220 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"120\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Title</text>\n          \n          <rect x=\"40\" y=\"28\" width=\"140\" height=\"16\" fill=\"#F6F9FD\"></rect>\n          <text x=\"46\" y=\"38\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Header</text>\n          <text x=\"94\" y=\"38\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Column</text>\n          <text x=\"128\" y=\"38\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Column</text>\n          <text x=\"162\" y=\"38\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Column</text>\n          <line x1=\"40\" y1=\"44\" x2=\"180\" y2=\"44\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"46\" y=\"54\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"54\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"54\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"54\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"46\" y=\"66\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"66\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"66\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"66\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"46\" y=\"78\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"78\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"78\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"78\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"46\" y=\"90\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n          <text x=\"94\" y=\"90\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"128\" y=\"90\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <text x=\"162\" y=\"90\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-family=\"system-ui\">Desc</text>\n          <rect x=\"56\" y=\"104\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"114\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-demo-preview\"><div class=\"eb-preview eb-preview-trow eb-preview-trow--header\"><div class=\"eb-preview-trow__label\"><span class=\"eb-preview-trow__label-text\">Header</span></div><div class=\"eb-preview-trow__cols\"><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Title</span></div><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Title</span></div><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Title</span></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Role</span><select class=\"demo-panel-select\" id=\"table-demo-role\" onchange=\"updateTableDemo()\"><option value=\"header\" selected=\"\">Header</option><option value=\"content\">Content</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"table-demo-state\" onchange=\"updateTableDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBorder</span><select class=\"demo-panel-select\" id=\"table-demo-hasborder\" onchange=\"updateTableDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ Table Label</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Title</span><input type=\"text\" id=\"table-demo-title\" class=\"demo-panel-select demo-panel-input\" value=\"Header\" oninput=\"updateTableDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasAsset</span><select class=\"demo-panel-select\" id=\"table-demo-hasasset\" onchange=\"updateTableDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasDescription</span><select class=\"demo-panel-select\" id=\"table-demo-showdesc\" onchange=\"updateTableDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ ColumnSlot</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Table Cell ⤷ AssetSlot</span><select class=\"demo-panel-select\" id=\"table-demo-asset\" onchange=\"updateTableDemo()\"><option value=\"yes\" selected=\"\">filled</option><option value=\"no\">empty</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Table Cells</span><select class=\"demo-panel-select\" id=\"table-demo-cols\" onchange=\"updateTableDemo()\"><option value=\"2\">2</option><option value=\"3\" selected=\"\">3</option><option value=\"4\">4</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "The <code>Columns Slot</code> takes any number of <code>Table Cell</code> instances, and each cell carries its own <code>Asset Slot</code> and text. Column count, icons, and cell content are all the consumer's to set."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Row carries its own background, border, and typography per role. Nothing is locked at build time any more — the old fixed column matrix is gone."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Role</code> and <code>State</code> are PascalCase variant properties with Title Case values, and <code>State=Default | Disabled</code> is a valid subset of the standard interaction set. The <code>no. of columns</code> property, with its period, is gone."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Real composition at last — <code>Table Label</code> and <code>Table Cell</code> are placed as instances inside slots rather than redrawn. The old complaint was that both atoms were published but never actually slotted."
      }
    ],
    "behavior": [
      {
        "state": "Header",
        "ios": "yes",
        "android": "yes",
        "property": "Role=Header",
        "notes": "360 × 68 on a <code>#F6F9FD</code> ground. Label is Proxima Soft Bold 14 / 14; each cell's text is Bold 14 too."
      },
      {
        "state": "Content",
        "ios": "yes",
        "android": "yes",
        "property": "Role=Content",
        "notes": "360 × 70, transparent ground. Label drops to Bold 12 / 12 and cell text becomes BarkAda Regular 12 / 18."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Every text layer — label, description, and all cells — dims to <code>#C2CFE5</code>. The row takes a <code>#F6F9FD</code> ground, the same colour a Header row uses."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Not needed — rows are display-only and carry no tap target."
      },
      {
        "state": "Selected",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Not needed — no row selection in this pattern."
      }
    ],
    "resolved": [
      {
        "headline": "One row replaces three components.",
        "body": "v2.0: rebuilt on node <code>5734:37611</code> as <code>Table Row</code>. <code>Table Label</code> and <code>Table Cell</code> are now placed as real instances inside slots instead of being published and ignored. 3 components and 14 variants become 1 component and 4.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>no. of columns</code> is gone.",
        "body": "v2.0: column count is no longer a property. The <code>Columns Slot</code> holds however many <code>Table Cell</code> instances you drop in, which is what data-driven was always meant to mean. The period in the property name goes with it.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The icon placeholder is a slot.",
        "body": "v2.0: every <code>Table Cell</code> carries a 24 × 24 <code>Asset Slot</code> holding a swappable <code>Placeholder</code> instance, and <code>Table Label</code> has one too. The hardcoded <code>#C2C6CF</code> circle and the <code>icon=yes/no</code> boolean are both gone.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The row maps to native primitives.",
        "body": "v2.0: a slot-based row is just an <code>HStack</code> / <code>Row</code> of cells, so it no longer depends on a platform <code>Table</code> primitive that phones don't have. Rows stay 360 wide for now because they sit inside a fixed component group; they move to fill when the screens that need it are reworked.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The label description is readable now.",
        "body": "v2.1: <code>#description</code> moved from 8 / 12 to the 10px token used elsewhere in the system — BarkAda SemiBold 10 / 15. 10px is the accepted middle ground; moving to the 12px token stays open as a recommendation.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The disabled state dims every text layer.",
        "body": "v2.1: <code>#description</code> now takes <code>#C2CFE5</code> in <code>State=Disabled</code> (<code>5761:37774</code>), matching <code>#label</code> and the cells. A disabled row dims as one thing.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Slot layer names follow one pattern.",
        "body": "v2.1: all three slots renamed to the <code>⤷ …Slot</code> form — <code>⤷ ColumnSlot</code> on the row, and <code>⤷ AssetSlot</code> on both <code>Table Label</code> and <code>Table Cell</code>. Table Scheduling uses the same pattern.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Interaction states are intentionally minimal.",
        "body": "v2.0: reviewed and settled. Rows are display-only — no tap target, no selection — so pressed, focused, and selected are not needed. <code>State=Disabled</code> is built for rows showing unavailable data.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
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
        "headline": "Move <code>#description</code> from the 10px token to the 12px one.",
        "body": "10px was chosen as a middle ground and matches other components today, so this isn't urgent. 12px is the target — it's the floor the rest of the system's body text sits on, and small supporting text is exactly where legibility is thinnest.",
        "tag": "A11y"
      },
      {
        "headline": "Give disabled rows their own background.",
        "body": "Disabled currently uses <code>#F6F9FD</code>, the same ground as a Header row, so the two read alike in a stack. Either give disabled a distinct tint or let it keep the row's own background and carry the state through text colour alone.",
        "tag": "Token"
      },
      {
        "headline": "Write the slot naming convention into the guidelines.",
        "body": "The Table family now uses <code>⤷ …Slot</code> — <code>⤷ ColumnSlot</code>, <code>⤷ AssetSlot</code>, <code>⤷ CurrencySlot</code>. The carousel components use <code>⤷</code> without the suffix (<code>⤷ LeadingIcon</code>, <code>⤷ Violator</code>) and no prefix at all on top-level slots (<code>Banner</code>, <code>Background</code>). Both are internally consistent; the library needs one rule so new slot-based components stop diverging.",
        "tag": "Docs"
      },
      {
        "headline": "Document that rows are display-only.",
        "body": "There is no tap target and no selection by design. Write it down so native developers wrap the row in a non-interactive container rather than inferring a missing state.",
        "tag": "Docs"
      },
      {
        "headline": "Revisit the fixed 360 width when screens are reworked.",
        "body": "Rows are 360 wide because they currently sit inside a fixed component group. The intent is to move to fill. Worth tracking so it doesn't get forgotten once those screens are edited.",
        "tag": "Composition"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "The review tooling reads raw hex and can't see variable bindings, so C3 is recorded as unverified rather than passing. Confirm <code>#F6F9FD</code>, <code>#E5EBF4</code>, <code>#0A2757</code>, <code>#6780A9</code>, and the <code>#C2CFE5</code> disabled colour are all bound.",
        "tag": "Token"
      },
      {
        "headline": "Introduce a shared label/value token set with Inline Text.",
        "body": "A table label and an Inline Text label play the same role — a thing and its value. Aligning <code>main/table/color/label</code> with <code>main/inline-text/*</code> reduces drift and helps cross-component theming.",
        "tag": "Token"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Collapse the three-component family into one row primitive.",
        "body": "v2.0: Applied — <code>Table Row</code> with a <code>Columns Slot</code> and a <code>Role</code> variant, exactly as proposed. 3 components and 14 variants become 1 component and 4.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>no. of columns</code> to an integer, or drop it entirely.",
        "body": "v2.0: Applied — dropped. Column count comes from the number of <code>Table Cell</code> instances in the slot.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the header icon placeholder with a named slot.",
        "body": "v2.0: Applied — <code>Asset Slot</code> on both <code>Table Label</code> and <code>Table Cell</code>, and the <code>icon=yes/no</code> boolean is gone.",
        "tag": "Slot"
      },
      {
        "headline": "Add row interaction states.",
        "body": "v2.0: Applied as far as it goes — <code>State=Disabled</code> shipped. Pressed and selected were reviewed and dropped: rows are display-only.",
        "tag": "State"
      },
      {
        "headline": "Reconsider whether Table belongs in a mobile-first DS.",
        "body": "v2.0: Settled — Table stays, scoped to genuine multi-column data and rebuilt as a data-driven row. That was option (b) of the two paths originally offered.",
        "tag": "Family"
      },
      {
        "headline": "Raise the label description above 8px.",
        "body": "v2.1: Applied — <code>#description</code> is now BarkAda SemiBold 10 / 15, on the shared 10px token. The move to 12px stays open as a recommendation.",
        "tag": "A11y"
      },
      {
        "headline": "Dim <code>#description</code> in the disabled state.",
        "body": "v2.1: Applied — it takes <code>#C2CFE5</code> alongside the label and cells.",
        "tag": "Token"
      },
      {
        "headline": "Settle one slot naming convention for the component.",
        "body": "v2.1: Applied — <code>⤷ ColumnSlot</code> and <code>⤷ AssetSlot</code> throughout. Settling it library-wide stays open as a Docs item.",
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
        "demoControls": tableHeaderDemoControls,
        "title": "Header row",
        "node": "5734:37630",
        "description": "360 × 68 on a <code>#F6F9FD</code> ground with a bottom border. <code>Table Label</code> on the left at Proxima Soft Bold 14; each <code>Table Cell</code> stacks a 24 × 24 <code>⤷ Asset Slot</code> above Bold 14 text.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Columns",
                "value": "4",
                "prop": "cols",
                "mono": false
              },
              {
                "key": "Icon",
                "value": "no",
                "prop": "icon",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#F6F9FD", "token": "table/color/bg-subtle" },
              { "key": "Border", "value": "#E5EBF4", "token": "table/color/border" },
              { "key": "Label", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Column", "value": "#0A2757", "token": "table/color/label" },
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
                "value": "37",
                "mono": true,
                "variants": { "icon:yes": { "value": "65" } }
              },
              {
                "key": "Padding H",
                "value": "24",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "8 / 12",
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
        "compose": "<span class=\"syn-type\">EBTableHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Section description\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-preview-header\"></div>"
      },
      {
        "cardKey": "content-row",
        "demoKey": "content",
        "demoControls": tableContentDemoControls,
        "title": "Content row",
        "node": "5734:37657",
        "description": "360 × 70 on a transparent ground. <code>Table Label</code> drops to Proxima Soft Bold 12, and each <code>Table Cell</code> renders BarkAda Regular 12 / 18 beneath its <code>⤷ Asset Slot</code>.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Columns",
                "value": "4",
                "prop": "cols",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "table/color/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "table/color/border" },
              { "key": "Label", "value": "#0A2757", "token": "table/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "table/color/description" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "56",
                "mono": true
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
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTable.Row</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Value\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Value\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-preview-content\"></div>"
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
          "figma": "<code>Table Label → Title</code> <span class=\"muted\">(text)</span>",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "<code>Table Label → hasDescription</code>",
          "swift": "<code>description: String?</code> <span class=\"muted\">— nil hides it</span>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "<code>Table Label → hasAsset</code>",
          "swift": "<code>leadingIcon: AnyView?</code> <span class=\"muted\">— nil hides it</span>",
          "compose": "<code>leadingIcon: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "<code>Table Label → ⤷ AssetSlot</code>",
          "swift": "<code>leadingIcon: AnyView?</code>",
          "compose": "<code>leadingIcon: @Composable (() -&gt; Unit)?</code>"
        },
        {
          "figma": "<code>Table Cell → #description</code>",
          "swift": "<code>Column.text: String</code>",
          "compose": "<code>Column.text: String</code>"
        },
        {
          "figma": "<code>Table Cell → ⤷ AssetSlot</code>",
          "swift": "<code>Column.asset: AnyView?</code>",
          "compose": "<code>Column.asset: @Composable (() -&gt; Unit)?</code>"
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
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>Table Row</code> composing <code>Table Label</code> and <code>Table Cell</code> instances through slots, all named <code>⤷ …Slot</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Role</code> and <code>State</code> are PascalCase with Title Case values. The <code>no. of columns</code> property and its period are gone."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not verified — the read-only tooling can't see variable bindings. <code>#description</code> now sits on the shared 10px token; moving it to 12px is an open recommendation."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A slot-based row is an <code>HStack</code> / <code>Row</code> of cells — no platform <code>Table</code> primitive needed. Fixed 360 width is deliberate for now and moves to fill when the screens are reworked."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only by design, so pressed and selected are not needed. <code>State=Disabled</code> dims every text layer to <code>#C2CFE5</code>. It still reuses the Header background — tracked as a recommendation."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "24 × 24 <code>Asset Slot</code> on both <code>Table Label</code> and <code>Table Cell</code>, holding a swappable <code>Placeholder</code> instance."
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
      "description": "<code>Role</code> (2) × <code>State</code> (2) = <strong>4 published versions</strong>, listed below. Three booleans sit on top of them without adding variants — <code>hasBorder</code> on the row, and <code>hasAsset</code> and <code>hasDescription</code> on the nested <code>Table Label</code> — so the real combination count is 32. Column count isn't a version either: the <code>⤷ ColumnSlot</code> takes however many <code>Table Cell</code> instances you drop in. This replaces the old three-component family, which published 9 + 3 + 2 variants between them.",
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
            "360 × 68",
            "<code>#F6F9FD</code>",
            "<code>5734:37630</code>"
          ]
        },
        {
          "cells": [
            "Header",
            "Disabled",
            "360 × 68",
            "<code>#F6F9FD</code>",
            "<code>5761:37748</code>"
          ]
        },
        {
          "cells": [
            "<strong>Content</strong>",
            "Default",
            "360 × 70",
            "transparent",
            "<code>5734:37657</code>"
          ]
        },
        {
          "cells": [
            "Content",
            "Disabled",
            "360 × 70",
            "<code>#F6F9FD</code>",
            "<code>5761:37773</code>"
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
