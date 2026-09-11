import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/table.js`.
// The Figma panel lists Role, State, ⤷ ColumnSlot, hasBorder. Role drives
// the cards and ⤷ ColumnSlot is a slot, so State and hasBorder are the
// only controls — column count is not a property. Every published
// variant holds three Table Cell instances in the slot.
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
        label: 'hasBorder',
        prop: 'hasBorder',
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
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Table",
    "verdict": {
      "kind": "keep",
      "title": "Keep — rebuilt as one composable row",
      "text": "The old three-component setup (Table + Table - Item + Table - Label) is gone, and with it the <code>no. of columns</code> variant matrix. <code>Table Row</code> now composes <code>Table Label</code> and <code>Table Cell</code> as real instances through slots, so column count is whatever you put in the <code>Columns Slot</code> rather than a property to pick from. Settings are <code>Role</code> (Header / Content) and <code>State</code> (Default / Disabled) — 4 versions in place of 3 components and 14 variants. Rows are display-only by design, so there is no pressed or selected state. Two follow-up passes cleared the rest. The first moved <code>#description</code> to the 10px token, dimmed every text layer when disabled, and settled all three swappable areas on <code>⤷ …Slot</code>. The second went through the two primitives: one setting name across all three components, text layers named after the properties that fill them, disabled built into <code>Table Label</code> and <code>Table Cell</code> rather than painted on by hand, and an empty version that is finally empty. Every colour is bound. Code Connect stays unmapped because the native library doesn't exist yet."
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
        "note": "<code>Role</code> and <code>State</code> are PascalCase settings with Title Case values, and Default / Disabled is a valid subset of the standard interaction set. All three components in the family now use the same two names, and every text property matches the layer it fills. The <code>no. of columns</code> property, with its period, is gone."
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
        "notes": "360 × 68 on a <code>#F6F9FD</code> ground. Label and cell text both use <code>Primary/Label/Small</code>, so the whole row is Proxima Soft."
      },
      {
        "state": "Content",
        "ios": "yes",
        "android": "yes",
        "property": "Role=Content",
        "notes": "360 × 70 on white. The label drops to <code>Primary/Label/Fine</code> and the cell text becomes <code>Secondary/Light/Caption</code> — the one place the row uses BarkAda."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Every text layer dims to <code>text/color-text-disabled</code>. The background does not change — a disabled Content row stays white and a disabled Header row stays <code>#F6F9FD</code>. Both primitives carry their own disabled version, so the row swaps to them."
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
        "headline": "One name for one setting, across all three components.",
        "body": "v2.2: <code>Table Cell</code> called its setting <code>Type</code> while <code>Table Row</code> and <code>Table Label</code> called the same thing <code>Role</code>. All three say <code>Role</code> now. It matters beyond tidiness: <code>Role=Header</code> is what becomes an accessibility heading on both platforms, so the name is describing a real role.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Every text layer is named after the property that fills it.",
        "body": "v2.2: the cell's text layer was <code>#description</code> — a name copied from <code>Table Label</code>, promising a second line the cell never had. It is <code>#text</code> now, filled by a new <code>Text</code> property. <code>Table Label</code>'s <code>#label</code> became <code>#title</code> to match its <code>Title</code> property. Property name and layer name agree everywhere.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The empty version is actually empty.",
        "body": "v2.2: <code>Role=Empty</code> on <code>Table Cell</code> held a stray blue checkmark — a copy of another component parked in the set, drawing an unflattened shape on an unbound <code>#025ae9</code>. Both primitives now draw nothing for <code>Role=Empty</code>, which is what a column with no value for that row should look like.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The disabled look lives in the primitives, not in each copy.",
        "body": "v2.2: <code>Table Label</code> and <code>Table Cell</code> each publish their own Disabled version, so a disabled row swaps to them. Before, every copy had its colours painted over by hand — which meant the disabled look did not travel if either primitive were used anywhere else.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Every colour is bound to a named system colour.",
        "body": "v2.2: checked against Figma's selection colours. The set paints six colours and the panel lists exactly six names — <code>bg/color-bg</code>, <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>border/color-border</code>, <code>text/color-text</code> and <code>text/color-text-disabled</code>. The icon placeholder was documented as a hardcoded <code>#C2C6CF</code>; it is <code>border/color-border</code> at <code>#D7E0EF</code>. <code>Table Label</code>'s description sits on <code>text/color-text-weaker</code>.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
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
    ],
    "appliedRecommendations": [
      {
        "headline": "Introduce a shared label/value token set with Inline Text.",
        "body": "v2.2.1: Closed — there is no longer a set to share. This row already draws from the system-wide <code>text/*</code> colours, and the <code>inline-text/color/*</code> tokens the recommendation wanted to converge on have been retired from the file. What is left belongs to Inline Text's own page, which still documents them.",
        "tag": "Token"
      },
      {
        "headline": "Give disabled rows their own background.",
        "body": "v2.2: No change needed — the row already does what the second half of this asked for. The recommendation said disabled reuses the Header <code>#F6F9FD</code>, so a disabled row and a header row read alike in a stack. Exporting the set shows otherwise: a disabled Content row is still white and a disabled Header row is still <code>#F6F9FD</code>. Disabled changes text colour and nothing else. The claim described our own preview, which had an invented background rule, rather than the component.",
        "tag": "Token"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "v2.2: Applied — done from Figma's selection-colours panel, which the old tooling could not read. Six colours, six names, no gaps. Details in the Resolved tab.",
        "tag": "Token"
      },
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
    "heading": "Roles",
    "specCards": [
      {
        "cardKey": "header-row",
        "demoKey": "header",
        "demoControls": tableRowDemoControls,
        "title": "Header",
        "node": "5734:37630",
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
                "key": "⤷ ColumnSlot",
                "value": "3 × Table Cell"
              },
              {
                "key": "hasBorder",
                "value": "True",
                "variants": {
                  "hasBorder:false": {
                    "value": "False"
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
                "key": "Label",
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
                "key": "#label",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Table Cell #text",
                "value": "Primary/Label/Small",
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
                "value": "24",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "8 / 12",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "16",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Left · Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    role<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>header<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    columns<span class=\"syn-punc\">: </span>columns\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Header<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> columns\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-preview-header\"><div class=\"eb-preview eb-preview-trow eb-preview-trow--header\"><div class=\"eb-preview-trow__label\"><span class=\"eb-preview-trow__label-text\">Header</span></div><div class=\"eb-preview-trow__cols\"><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Title</span></div><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Title</span></div><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Title</span></div></div></div></div>"
      },
      {
        "cardKey": "content-row",
        "demoKey": "content",
        "demoControls": tableRowDemoControls,
        "title": "Content",
        "node": "5734:37657",
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
                "key": "⤷ ColumnSlot",
                "value": "3 × Table Cell"
              },
              {
                "key": "hasBorder",
                "value": "True",
                "variants": {
                  "hasBorder:false": {
                    "value": "False"
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
                "key": "Label",
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
                "key": "#label",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Table Cell #text",
                "value": "Secondary/Light/Caption",
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
                "value": "Hug · 70",
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
                "value": "24",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "16",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Left · Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    role<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>content<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Row Title\"</span><span class=\"syn-punc\">,</span>\n    columns<span class=\"syn-punc\">: </span>columns\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Content<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Row Title\"</span><span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> columns\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-preview-content\"><div class=\"eb-preview eb-preview-trow eb-preview-trow--content\"><div class=\"eb-preview-trow__label\"><span class=\"eb-preview-trow__label-text\">Row Title</span></div><div class=\"eb-preview-trow__cols\"><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Data</span></div><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Data</span></div><div class=\"eb-preview-trow__cell\"><div class=\"eb-preview-trow__cell-asset\"></div><span class=\"eb-preview-trow__cell-text\">Data</span></div></div></div></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Role",
        "description": "Every paint in the set is bound. The six tokens here are exactly the six the Figma selection-colors panel lists for node <code>5734:37611</code> — nothing is off-token, including the cell asset placeholder.",
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
            "token": "Label",
            "values": [
              "text/color-text",
              "#0A2757"
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
            "token": "Label",
            "values": [
              "text/color-text",
              "#0A2757"
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
            "role": "Disabled",
            "token": "Label",
            "values": [
              "text/color-text-disabled",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "Cell text",
            "values": [
              "text/color-text-disabled",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "Background",
            "values": [
              "— unchanged",
              "–"
            ]
          },
          {
            "role": "—",
            "token": "Cell asset",
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
      "description": "Table Row publishes four properties — <code>Role</code>, <code>State</code>, <code>⤷ ColumnSlot</code> and <code>hasBorder</code>. The rows beneath them map the two nested primitives, <code>Table Label</code> and <code>Table Cell</code>, which ship inside every row and have no page of their own. Both carry their own <code>Role</code> / <code>Type</code> and <code>State</code> variants, driven by the row rather than set independently, so neither takes a parameter here. All three components name the axis <code>Role</code> and expose their text as properties. Both primitives also publish <code>Role=Empty</code> — a variant that draws nothing, for a column that has no value on this row. It takes no parameter of its own: natively it is an absent <code>Column</code> entry, or one whose text is empty.",
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
          "figma": "⤷ ColumnSlot (slot) — Table Cell instances",
          "swift": "<code>columns: [Column]</code>",
          "compose": "<code>columns: List&lt;Column&gt;</code>"
        },
        {
          "figma": "hasBorder — true, false",
          "swift": "<code>showsDivider: Bool = true</code>",
          "compose": "<code>showsDivider: Boolean = true</code>"
        },
        {
          "figma": "Table Label → Title (text)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "Table Label → Description (text)",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "Table Label → hasDescription — true, false",
          "swift": "<code>description == nil</code> <span class=\"muted\">— nil hides the line</span>",
          "compose": "<code>description == null</code>"
        },
        {
          "figma": "Table Label → hasAsset — true, false",
          "swift": "<code>leadingIcon == nil</code> <span class=\"muted\">— nil hides the slot</span>",
          "compose": "<code>leadingIcon == null</code>"
        },
        {
          "figma": "Table Label → ⤷ AssetSlot (slot)",
          "swift": "<code>leadingIcon: AnyView?</code>",
          "compose": "<code>leadingIcon: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "Table Cell → Role — Header, Content, Transaction, Empty",
          "swift": "<code>Column.role: .header / .content / .transaction</code>",
          "compose": "<code>role = EBTableCellRole.Header / Content / Transaction</code>"
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
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Table/EBTableRow.swift",
        "compose": "android/components/table/EBTableRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Header",
        "swift": "<span class=\"syn-cmt\">// One Header row at the top of the table.</span>\n<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">role</span><span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>header<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">columns</span><span class=\"syn-punc\">: [</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">asset</span><span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"wallet\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">asset</span><span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"bank\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">asset</span><span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"card\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">]</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// One Header row at the top of the table.</span>\n<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Header<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> <span class=\"syn-fn\">listOf</span><span class=\"syn-punc\">(</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>asset <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"wallet\"</span><span class=\"syn-punc\">) }</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>asset <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"bank\"</span><span class=\"syn-punc\">) }</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>asset <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"card\"</span><span class=\"syn-punc\">) }</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Content",
        "swift": "<span class=\"syn-cmt\">// Column count must match the Header row above it.</span>\n<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">role</span><span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>content<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Row Title\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">columns</span><span class=\"syn-punc\">: [</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Data\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Data\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Data\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">]</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span>isUnavailable<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// Column count must match the Header row above it.</span>\n<span class=\"syn-type\">EBTableRow</span><span class=\"syn-punc\">(</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTableRowRole</span><span class=\"syn-punc\">.</span>Content<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Row Title\"</span><span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> <span class=\"syn-fn\">listOf</span><span class=\"syn-punc\">(</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Data\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Data\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n        <span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Data\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">!</span>isUnavailable\n<span class=\"syn-punc\">)</span>"
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
    "usageGuidelines": [
      {
        "doText": "Give every row in one table the same number of Table Cell instances.",
        "dontText": "Don't put 3 cells in the Header and 4 in the rows beneath it — the ⤷ ColumnSlot divides its 176px evenly and nothing aligns the two."
      },
      {
        "doText": "Use Role=Header once, at the top of the table.",
        "dontText": "Don't reach for Header mid-table to emphasise a row — it reads as a second table starting."
      },
      {
        "doText": "Put the row's subject in Table Label and its data in the cells.",
        "dontText": "Don't fold a fourth data point into the label to save a column — the label is 120px and fixed."
      },
      {
        "doText": "Use Inline Text when a row carries a single value.",
        "dontText": "Don't use Table Row for a two-column label/value list — three cells share 176px, so each gets about 59px."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>Table Row</code> composing <code>Table Label</code> and <code>Table Cell</code> through slots, all named <code>⤷ …Slot</code>. The cell's text layer is <code>#text</code> — it was <code>#description</code>, a name copied from <code>Table Label</code> that promised a second line the cell never had."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three components name the axis <code>Role</code> with Title Case values, and both primitives expose their text as properties — <code>Title</code> and <code>Description</code> on <code>Table Label</code>, <code>Text</code> on <code>Table Cell</code>, each matching its layer name. <code>Role=Empty</code> draws nothing on both, as the name says. The <code>no. of columns</code> property and its period are long gone."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Verified against the selection-colors panel: the set paints six colours and the panel lists exactly six tokens — <code>bg/color-bg</code>, <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>border/color-border</code>, <code>text/color-text</code>, <code>text/color-text-disabled</code>. <code>Table Label</code>'s <code>#description</code> is on <code>text/color-text-weaker</code>."
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
        "notes": "Display-only by design, so pressed and selected are not needed. <code>State=Disabled</code> dims every text layer to <code>text/color-text-disabled</code> and leaves the row's own background alone. Both primitives publish their own Disabled variant, so the row swaps to them rather than overriding fills per instance."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "24 × 24 <code>⤷ AssetSlot</code> on both primitives, holding a swappable <code>Placeholder</code> instance drawn on <code>border/color-border</code>."
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
      "description": "<code>Role</code> (2) × <code>State</code> (2) = <strong>4 published variants</strong>. <code>hasBorder</code> sits on top of them without adding any, so Table Row has 8 combinations behind 4 versions. Column count is not a version either — the <code>⤷ ColumnSlot</code> takes however many <code>Table Cell</code> instances you drop in — three in every published variant, each one <code>Role=Header</code> or <code>Role=Content</code> to match the row. This replaces the old three-component family, which published 9 + 3 + 2 variants between them.",
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
            "<code>#FFFFFF</code>",
            "<code>5734:37657</code>"
          ]
        },
        {
          "cells": [
            "Content",
            "Disabled",
            "360 × 70",
            "<code>#FFFFFF</code>",
            "<code>5761:37773</code>"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Corrections after shared facts moved · node 5734:37611",
      "rows": [
        {
          "body": "<strong><code>Table Cell</code> gained a fourth role.</strong> Property Mapping listed <code>Header, Content, Empty</code>; the primitive now also publishes <code>Role=Transaction</code> (nodes <code>9567:96672</code> and <code>9567:96676</code>), added during the Table Transaction review so that row could stop overriding the cell's text style. Nothing about <code>Table Row</code> changed — a component it references did, which is why its own checks all passed while the page went stale.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Inline Text token recommendation is closed.</strong> It asked this row's label and value colours to converge with Inline Text's own set. Both sides moved instead: this row is on the system-wide <code>text/*</code> colours, and the <code>inline-text/color/*</code> tokens no longer exist. Nothing to reconcile from here.",
          "delta": {
            "kind": "resolved",
            "label": "Token"
          }
        }
      ]
    },
    {
      "version": "2.2.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Primitives aligned; Style, Code and Overview rebuilt to the content guides · node 5734:37611",
      "rows": [
        {
          "body": "<strong>One name for one setting, across all three components.</strong> <code>Table Cell</code> called its setting <code>Type</code> while <code>Table Row</code> and <code>Table Label</code> called the same thing <code>Role</code>. All three say <code>Role</code> now. It matters beyond tidiness: <code>Role=Header</code> is what becomes an accessibility heading on both platforms.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Every text layer is named after the property that fills it.</strong> The cell's text layer was <code>#description</code>, a name copied from <code>Table Label</code> that promised a second line the cell never had — it is <code>#text</code> now, filled by a new <code>Text</code> property. <code>Table Label</code>'s <code>#label</code> became <code>#title</code> to match its <code>Title</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The empty version is actually empty.</strong> <code>Role=Empty</code> on <code>Table Cell</code> held a stray blue checkmark — a copy of another component parked in the set, drawing an unflattened shape on an unbound <code>#025ae9</code>. Both primitives now draw nothing for <code>Role=Empty</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>The disabled look lives in the primitives, not in each copy.</strong> <code>Table Label</code> and <code>Table Cell</code> each publish their own Disabled version, so a disabled row swaps to them. Before, every copy had its colours painted over by hand, which meant the disabled look did not travel if either primitive were used elsewhere.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Every colour is bound to a named system colour.</strong> Checked against Figma's selection-colours panel, which the earlier tooling could not read — the set paints six colours and the panel lists exactly six names. The icon placeholder had been documented as a hardcoded <code>#C2C6CF</code>; it is <code>border/color-border</code> at <code>#D7E0EF</code>. This closes the standing recommendation to audit the bindings.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>A recommendation turned out to describe our own preview.</strong> \"Give disabled rows their own background\" said disabled reuses the Header <code>#F6F9FD</code>, so the two read alike in a stack. Exporting the set shows otherwise: a disabled Content row is still white. The claim came from an invented CSS rule in the documentation preview, not from the component. Closed with no Figma change.",
          "delta": {
            "kind": "resolved",
            "label": "Token"
          }
        },
        {
          "body": "<strong>The preview was drawing three things Figma does not.</strong> The asset placeholder was <code>#C8D3E5</code> against a real <code>#D7E0EF</code>; disabled rows were given a <code>#F6F9FD</code> background the component never had; and the preview root drew in the documentation face rather than Proxima Soft. Corrected against the SVG export of the whole set.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Layout was documented from numbers that were never read.</strong> Heights said 37 / 65 / 56 where Figma has <code>Hug · 68</code> and <code>Hug · 70</code>, and the four spec sections carried font specs instead of text style names. Rebuilt from the Auto layout panels and the resolved styles: <code>Primary/Label/Small</code>, <code>Primary/Label/Fine</code> and <code>Secondary/Light/Caption</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab rebuilt to the content guide.</strong> Property Mapping regrouped into prose rows, one per setting, and grown from 10 to 13 to cover both primitives; the missing Import block added; Usage Snippets split into one per <code>Role</code>; four usage guidelines written where there were none.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Native readiness moved to Ready.</strong> C1 through C6 all pass now. C7 stays Not Mapped and is excluded from the badge by rule — the native library does not exist yet.",
          "delta": {
            "kind": "resolved",
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
      "header": "Follow-up pass on the rebuild · node 5734:37611",
      "rows": [
        {
          "body": "<strong>The supporting line got bigger.</strong> <code>#description</code> moved to the shared 10px text style, up from 8px. 12px is still the target and stays as a recommendation — it is the floor the rest of the system's body text sits on.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Disabled now dims every text layer.</strong> The description had been left at full strength while the label and cells dimmed, so a disabled row read as half-available. All of it takes <code>text/color-text-disabled</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Swappable areas settled on one naming pattern.</strong> All three took the <code>⤷ …Slot</code> form — <code>⤷ ColumnSlot</code> on the row, <code>⤷ AssetSlot</code> on both primitives. Settling it library-wide stays open as a documentation item.",
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
      "header": "2026 Working File · rebuilt as one composable row · node 5734:37611",
      "rows": [
        {
          "body": "<strong>Three components became one.</strong> <code>Table</code>, <code>Table - Item</code> and <code>Table - Label</code> published 9 + 3 + 2 versions between them, and only <code>Table</code> was ever placed on a screen. <code>Table Row</code> replaces all three with 4 versions, composing <code>Table Label</code> and <code>Table Cell</code> as real copies inside swappable areas rather than redrawing them.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The column-count setting is gone.</strong> <code>no. of columns</code> was a text setting with a period in its name, and it fixed the number of columns at build time. Column count is now however many <code>Table Cell</code> copies you drop into <code>⤷ ColumnSlot</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>The header icon became a swappable area.</strong> It was a hardcoded <code>#C2C6CF</code> circle behind an <code>icon=yes/no</code> toggle. Both <code>Table Label</code> and <code>Table Cell</code> now carry a 24 × 24 <code>⤷ AssetSlot</code> holding a swappable <code>Placeholder</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>The row maps to native primitives after all.</strong> The initial assessment doubted a table belonged in a mobile design system. A slot-based row is a stack of cells on both platforms — no platform <code>Table</code> needed — so Table stays, scoped to genuine multi-column data.",
          "delta": {
            "kind": "resolved",
            "label": "C4 Resolved"
          }
        },
        {
          "body": "<strong>Disabled shipped; pressed and selected were dropped on purpose.</strong> Rows are display-only and carry no tap target, so those two states have nothing to show. <code>State=Disabled</code> was added for rows showing unavailable data.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        }
      ]
    },
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
