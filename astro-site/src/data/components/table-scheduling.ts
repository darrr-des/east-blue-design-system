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
        label: 'hasAmountRow',
        prop: 'hasAmountRow',
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
      { label: 'Amount', prop: 'amount', control: 'input', defaultValue: 'X,XXX.XX', options: [] },
      { label: 'Month', prop: 'month', control: 'input', defaultValue: 'MM', options: [] },
      { label: 'Day', prop: 'day', control: 'input', defaultValue: 'DD', options: [] },
      { label: 'Year', prop: 'year', control: 'input', defaultValue: 'YYYY', options: [] },
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
      "text": "Kept as its own component rather than folded into Table Row, because it carries more controls than a standard row entry. The rebuild answered everything else: the <code>type</code> enum with its sentence-shaped values (<code>\"2 amounts display\"</code>) is gone, replaced by a <code>⤷ AmountRowSlot</code> that takes however many <code>Table Amount Cell</code> instances you need. The raster peso is now a <code>Peso Sign - Proxima</code> vector instance sitting in a <code>⤷ CurrencySlot</code>, used consistently on both the primary line and the detail cells — the old mix of a bitmap glyph and a literal <code>\"PHP\"</code> string is gone. Slot names match the Table Row convention, the details row is named the same way in both states, and the date now reads <code>#month</code> / <code>#day</code> / <code>#year</code> with its separators kept as plain layers. Code Connect stays unmapped because the native library doesn't exist yet. A later pass went through the primitive and the panel: <code>Amount</code> and <code>Label</code> became text properties so the row's own values are settable, <code>Table Amount Cell</code>'s <code>#value</code> became <code>#amount</code> to match its property, its Disabled version now carries the dimming rather than each copy, and the disabled row got back the 16px gap it had lost under its breakdown. Every colour is bound. The peso glyph is still an unflattened boolean operation — delegated to the Iconography team, and the one thing holding this at Needs Refinement."
    }
  },
  "overview": {
    "inContextNote": "Scheduled payments screen (auto-debit, installment plans, standing orders): a list of upcoming payment rows stamped with a date, the total debit amount, and — where relevant — a breakdown of principal / interest / fee components.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"138\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".2\"></rect>\n          <rect x=\"40\" y=\"6\" width=\"140\" height=\"18\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"40\" y=\"14\" width=\"140\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"110\" y=\"18\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">Payment Schedule</text>\n          \n          <text x=\"48\" y=\"38\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">MAY 10, 2026</text>\n          <text x=\"165\" y=\"38\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <text x=\"86\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Principal</text>\n          <text x=\"86\" y=\"55\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 1,100</text>\n          <text x=\"140\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Interest</text>\n          <text x=\"140\" y=\"55\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 150</text>\n          <line x1=\"44\" y1=\"62\" x2=\"176\" y2=\"62\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"48\" y=\"74\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">JUN 10, 2026</text>\n          <text x=\"165\" y=\"74\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <text x=\"86\" y=\"84\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Principal</text>\n          <text x=\"86\" y=\"91\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 1,110</text>\n          <text x=\"140\" y=\"84\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Interest</text>\n          <text x=\"140\" y=\"91\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">PHP 140</text>\n          <line x1=\"44\" y1=\"98\" x2=\"176\" y2=\"98\" stroke=\"#E5EBF4\"></line>\n          \n          <text x=\"48\" y=\"110\" fill=\"#0A2757\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">JUL 10, 2026</text>\n          <text x=\"165\" y=\"110\" text-anchor=\"end\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">₱1,250.00</text>\n          <line x1=\"44\" y1=\"116\" x2=\"176\" y2=\"116\" stroke=\"#E5EBF4\"></line>\n          <rect x=\"56\" y=\"124\" width=\"108\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"110\" y=\"134\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Manage Schedule</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"table-scheduling-demo-preview\"><div class=\"eb-preview eb-preview-tsched\"><div class=\"eb-preview-tsched__head\"><span class=\"eb-preview-tsched__date\">MM / DD / YYYY</span><span class=\"eb-preview-tsched__peso\"><svg class=\"eb-peso\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8.32617 2.30762C9.85735 2.30882 11.1401 3.36907 11.4834 4.79492H11.9502C12.3918 4.79513 12.75 5.15303 12.75 5.59473C12.7499 6.03636 12.3918 6.39432 11.9502 6.39453H11.4648C11.0956 7.78388 9.82976 8.8075 8.32422 8.80762H5.64941V11.5303C5.64934 12.0549 5.22384 12.4805 4.69922 12.4805C4.17468 12.4804 3.7491 12.0548 3.74902 11.5303V6.39453H3.0498C2.60811 6.39443 2.25007 6.03643 2.25 5.59473C2.25 5.15296 2.60807 4.79503 3.0498 4.79492H3.74902V3.28027C3.74902 2.88131 3.99515 2.53924 4.34375 2.39844C4.46342 2.33872 4.59834 2.30461 4.74121 2.30469L8.32617 2.30762ZM5.64941 6.39453V7.02734H8.32422C8.82499 7.02726 9.26688 6.77691 9.53223 6.39453H5.64941ZM5.64941 4.79492H9.5791C9.32135 4.37153 8.85699 4.08736 8.3252 4.08691L5.64941 4.08398V4.79492Z\" fill=\"currentColor\"/></svg></span><span class=\"eb-preview-tsched__total\"><span class=\"eb-preview-tsched__total-text\">X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__details\"><span class=\"eb-preview-tsched__row-label\">Label</span><div class=\"eb-preview-tsched__cells\"><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-state\" onchange=\"updateTableSchedulingDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasAmountRow</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-hasamountrow\" onchange=\"updateTableSchedulingDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBorder</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-hasborder\" onchange=\"updateTableSchedulingDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#month</span><input type=\"text\" id=\"table-scheduling-demo-month\" class=\"demo-panel-select demo-panel-input\" value=\"MM\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#day</span><input type=\"text\" id=\"table-scheduling-demo-day\" class=\"demo-panel-select demo-panel-input\" value=\"DD\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#year</span><input type=\"text\" id=\"table-scheduling-demo-year\" class=\"demo-panel-select demo-panel-input\" value=\"YYYY\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#amount</span><input type=\"text\" id=\"table-scheduling-demo-total\" class=\"demo-panel-select demo-panel-input\" value=\"X,XXX.XX\" oninput=\"updateTableSchedulingDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#label</span><input type=\"text\" id=\"table-scheduling-demo-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"updateTableSchedulingDemo()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ CurrencySlot</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Peso Sign</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-hascurrency\" onchange=\"updateTableSchedulingDemo()\"><option value=\"true\" selected=\"\">filled</option><option value=\"false\">empty</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">⤷ AmountRowSlot</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Table Amount Cells</span><select class=\"demo-panel-select\" id=\"table-scheduling-demo-cells\" onchange=\"updateTableSchedulingDemo()\"><option value=\"1\">1</option><option value=\"2\" selected=\"\">2</option><option value=\"3\">3</option></select></div></div></div></div>",
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
        "note": "Slot names match the Table Row convention (<code>⤷ CurrencySlot</code>, <code>⤷ AmountRowSlot</code>), <code>State</code> is a PascalCase variant property, and both states name the details row identically. The date's three text properties are distinguishable from its separators. Text properties now match their layer names across the whole Table family, and <code>Table Amount Cell</code> carries its own Disabled version the same way the <code>Table Row</code> primitives do."
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
        "notes": "360 × 90. Date on the left at Proxima Soft Semibold 12, total in <code>#005CE5</code> Bold 14, then a details row of label/amount cells."
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
        "headline": "The disabled row lines up with the default one again.",
        "body": "v2.2: <code>State=Disabled</code> had lost the 16px gap between its row label and the breakdown cells, so its cells sat 16px left of where the same row sits enabled — a visible jump if a row ever toggled. Found by comparing the two exports side by side; the layer tree gives no hint of it. Restored.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Every text layer is named after the property that fills it.",
        "body": "v2.2: <code>Table Amount Cell</code>'s value layer was <code>#value</code> while its property was <code>Amount</code>. It is <code>#amount</code> now. The whole Table family follows one rule — the layer is the property name with a <code>#</code> in front.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The row's own text can be set from the panel.",
        "body": "v2.2: the scheduled total and the breakdown label were bare layers — the component's headline value could not be set without selecting the layer. <code>Amount</code> and <code>Label</code> are text properties now, and <code>Table Amount Cell</code> gained a <code>Label</code> of its own alongside its <code>Amount</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The disabled look lives in the primitive, not in each copy.",
        "body": "v2.2: <code>Table Amount Cell</code> publishes its own Disabled version, so a disabled row swaps to it rather than having its colours painted over copy by copy. Same pattern as the <code>Table Row</code> primitives.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Every colour is bound to a named system colour.",
        "body": "v2.2: checked against Figma's selection-colours panel, which the earlier tooling could not read. Six paints, six names — <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>text/color-text</code>, <code>text/color-text-primary</code>, <code>text/color-text-weaker</code>, <code>text/color-text-disabled</code>. The two-tier currency is deliberate: the scheduled total sits on <code>text/color-text-primary</code>, the itemised cells on <code>text/color-text</code>.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
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
        "headline": "Collapse <code>Month</code>, <code>Day</code> and <code>Year</code> into one <code>Date</code>.",
        "body": "Three text fields hold one value, and all five layers involved — the three fields and the two <code>separator</code> slashes — use the same text style and colour, so the split buys no styling control. <code>Date</code> is the catalogue name for this; <code>Month</code>, <code>Day</code> and <code>Year</code> are not in it. It also makes the accessibility guidance actionable: the Code tab already tells developers to format with the reader's locale, and three preformatted strings make that impossible. Deferred rather than done, because collapsing it would break instances already placed on screens — worth doing the next time those screens are touched.",
        "tag": "Property"
      },
      {
        "headline": "Flatten the peso glyph.",
        "body": "For the Iconography team: <code>Peso Sign - Proxima</code> wraps a <code>shape_full</code> BOOLEAN_OPERATION. Flattening it to a plain vector removes a class of export and scaling surprises.",
        "tag": "Asset"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('table');return false;\">Table Row</a> — the standard row for column-aligned data. Scheduling stays separate because it carries a date line and a variable detail row on top of that; keep slot naming and state coverage aligned across both.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Align the value layer name with Table Row.",
        "body": "v2.2: Applied, by a different rule than the one proposed. This asked both components to use <code>#value</code>. The family settled instead on <em>the layer is named after the property that fills it</em> — so <code>Table Row</code>'s cell became <code>#text</code> for its <code>Text</code> property, and this one became <code>#amount</code> for its <code>Amount</code>. One rule that keeps holding as properties are added, rather than one shared word that has to be renegotiated each time.",
        "tag": "Rename"
      },
      {
        "headline": "Document scheduling semantics.",
        "body": "v2.2: Applied — the Code tab's first usage guideline now says the scheduled total goes on the primary line and only its parts in the breakdown cells, with the warning not to repeat the total as one of the cells. That was the guidance this asked for, in the place a developer reads before building.",
        "tag": "Docs"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "v2.2: Applied — done from Figma's selection-colours panel. All four colours this named are bound (<code>#0A2757</code>, <code>#6780A9</code>, <code>#005CE5</code>, <code>#C2CFE5</code>), and so are the background and border. Details in the Resolved tab.",
        "tag": "Token"
      },
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
    "heading": "States",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": tableSchedulingDemoControls,
        "title": "Default",
        "node": "5868:40481",
        "description": "",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default"
              },
              {
                "key": "hasAmountRow",
                "value": "True",
                "variants": {
                  "hasAmountRow:false": {
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
                "key": "Amount",
                "value": "X,XXX.XX",
                "prop": "amount"
              },
              {
                "key": "Month",
                "value": "MM",
                "prop": "month"
              },
              {
                "key": "Day",
                "value": "DD",
                "prop": "day"
              },
              {
                "key": "Year",
                "value": "YYYY",
                "prop": "year"
              },
              {
                "key": "⤷ CurrencySlot",
                "value": "Peso Sign - Proxima"
              },
              {
                "key": "⤷ AmountRowSlot",
                "value": "2 × Table Amount Cell",
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
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
                "key": "Date",
                "value": "#0A2757",
                "token": "text/color-text"
              },
              {
                "key": "Primary amount · currency",
                "value": "#005CE5",
                "token": "text/color-text-primary"
              },
              {
                "key": "Labels",
                "value": "#6780A9",
                "token": "text/color-text-weaker",
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Cell value · currency",
                "value": "#0A2757",
                "token": "text/color-text",
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
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
                "key": "#month · #day · #year",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "#amount",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "#label",
                "value": "Primary/Multi-line Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Table Amount Cell #amount",
                "value": "Primary/Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
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
                "key": "Height",
                "value": "Hug · 90",
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
        "swift": "<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">date</span><span class=\"syn-punc\">: </span>dueDate<span class=\"syn-punc\">,</span>            <span class=\"syn-cmt\">// MM / DD / YYYY</span>\n    <span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"X,XXX.XX\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">breakdown</span><span class=\"syn-punc\">: </span>breakdown\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> dueDate<span class=\"syn-punc\">,</span>            <span class=\"syn-cmt\">// MM / DD / YYYY</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"X,XXX.XX\"</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    breakdown <span class=\"syn-eq\">=</span> breakdown\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-scheduling-spec-default\"><div class=\"eb-preview eb-preview-tsched\"><div class=\"eb-preview-tsched__head\"><span class=\"eb-preview-tsched__date\">MM / DD / YYYY</span><span class=\"eb-preview-tsched__peso\"><svg class=\"eb-peso\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8.32617 2.30762C9.85735 2.30882 11.1401 3.36907 11.4834 4.79492H11.9502C12.3918 4.79513 12.75 5.15303 12.75 5.59473C12.7499 6.03636 12.3918 6.39432 11.9502 6.39453H11.4648C11.0956 7.78388 9.82976 8.8075 8.32422 8.80762H5.64941V11.5303C5.64934 12.0549 5.22384 12.4805 4.69922 12.4805C4.17468 12.4804 3.7491 12.0548 3.74902 11.5303V6.39453H3.0498C2.60811 6.39443 2.25007 6.03643 2.25 5.59473C2.25 5.15296 2.60807 4.79503 3.0498 4.79492H3.74902V3.28027C3.74902 2.88131 3.99515 2.53924 4.34375 2.39844C4.46342 2.33872 4.59834 2.30461 4.74121 2.30469L8.32617 2.30762ZM5.64941 6.39453V7.02734H8.32422C8.82499 7.02726 9.26688 6.77691 9.53223 6.39453H5.64941ZM5.64941 4.79492H9.5791C9.32135 4.37153 8.85699 4.08736 8.3252 4.08691L5.64941 4.08398V4.79492Z\" fill=\"currentColor\"/></svg></span><span class=\"eb-preview-tsched__total\"><span class=\"eb-preview-tsched__total-text\">X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__details\"><span class=\"eb-preview-tsched__row-label\">Label</span><div class=\"eb-preview-tsched__cells\"><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div></div></div></div></div>"
      },
      {
        "cardKey": "disabled",
        "demoKey": "disabled",
        "demoControls": tableSchedulingDemoControls,
        "title": "Disabled",
        "node": "5878:41658",
        "description": "",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Disabled"
              },
              {
                "key": "hasAmountRow",
                "value": "True",
                "variants": {
                  "hasAmountRow:false": {
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
                "key": "Amount",
                "value": "X,XXX.XX",
                "prop": "amount"
              },
              {
                "key": "Month",
                "value": "MM",
                "prop": "month"
              },
              {
                "key": "Day",
                "value": "DD",
                "prop": "day"
              },
              {
                "key": "Year",
                "value": "YYYY",
                "prop": "year"
              },
              {
                "key": "⤷ CurrencySlot",
                "value": "Peso Sign - Proxima"
              },
              {
                "key": "⤷ AmountRowSlot",
                "value": "2 × Table Amount Cell",
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
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
                "key": "Date",
                "value": "#C2CFE5",
                "token": "text/color-text-disabled"
              },
              {
                "key": "Primary amount · currency",
                "value": "#C2CFE5",
                "token": "text/color-text-disabled"
              },
              {
                "key": "Labels",
                "value": "#C2CFE5",
                "token": "text/color-text-disabled",
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Cell value · currency",
                "value": "#C2CFE5",
                "token": "text/color-text-disabled",
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
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
                "key": "#month · #day · #year",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "#amount",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "#label",
                "value": "Primary/Multi-line Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Table Amount Cell #amount",
                "value": "Primary/Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hasAmountRow:false": {
                    "hide": true
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
                "key": "Height",
                "value": "Hug · 90",
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
        "swift": "<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">date</span><span class=\"syn-punc\">: </span>dueDate<span class=\"syn-punc\">,</span>            <span class=\"syn-cmt\">// MM / DD / YYYY</span>\n    <span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"X,XXX.XX\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">breakdown</span><span class=\"syn-punc\">: </span>breakdown\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-val\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> dueDate<span class=\"syn-punc\">,</span>            <span class=\"syn-cmt\">// MM / DD / YYYY</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"X,XXX.XX\"</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    breakdown <span class=\"syn-eq\">=</span> breakdown<span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-val\">false</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"table-scheduling-spec-disabled\"><div class=\"eb-preview eb-preview-tsched eb-preview-tsched--disabled\"><div class=\"eb-preview-tsched__head\"><span class=\"eb-preview-tsched__date\">MM / DD / YYYY</span><span class=\"eb-preview-tsched__peso\"><svg class=\"eb-peso\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8.32617 2.30762C9.85735 2.30882 11.1401 3.36907 11.4834 4.79492H11.9502C12.3918 4.79513 12.75 5.15303 12.75 5.59473C12.7499 6.03636 12.3918 6.39432 11.9502 6.39453H11.4648C11.0956 7.78388 9.82976 8.8075 8.32422 8.80762H5.64941V11.5303C5.64934 12.0549 5.22384 12.4805 4.69922 12.4805C4.17468 12.4804 3.7491 12.0548 3.74902 11.5303V6.39453H3.0498C2.60811 6.39443 2.25007 6.03643 2.25 5.59473C2.25 5.15296 2.60807 4.79503 3.0498 4.79492H3.74902V3.28027C3.74902 2.88131 3.99515 2.53924 4.34375 2.39844C4.46342 2.33872 4.59834 2.30461 4.74121 2.30469L8.32617 2.30762ZM5.64941 6.39453V7.02734H8.32422C8.82499 7.02726 9.26688 6.77691 9.53223 6.39453H5.64941ZM5.64941 4.79492H9.5791C9.32135 4.37153 8.85699 4.08736 8.3252 4.08691L5.64941 4.08398V4.79492Z\" fill=\"currentColor\"/></svg></span><span class=\"eb-preview-tsched__total\"><span class=\"eb-preview-tsched__total-text\">X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__details\"><span class=\"eb-preview-tsched__row-label\">Label</span><div class=\"eb-preview-tsched__cells\"><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div><div class=\"eb-preview-tsched__cell\"><span class=\"eb-preview-tsched__cell-label\">Label</span><span class=\"eb-preview-tsched__cell-amount\"><svg class=\"eb-peso\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z\" fill=\"currentColor\"/></svg><span>X,XXX.XX</span></span></div></div></div></div></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Six paints, and the six names Figma's selection-colours panel lists for node <code>5868:40468</code> — nothing is off-token. The currency glyph and amount are deliberately two-tier: <code>text/color-text-primary</code> on the scheduled total, <code>text/color-text</code> on the itemised breakdown beneath it.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default",
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
            "token": "Date",
            "values": [
              "text/color-text",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "Primary amount · currency",
            "values": [
              "text/color-text-primary",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Labels",
            "values": [
              "text/color-text-weaker",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "Cell value · currency",
            "values": [
              "text/color-text",
              "#0A2757"
            ]
          },
          {
            "role": "Disabled",
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
            "token": "Every text layer",
            "values": [
              "text/color-text-disabled",
              "#C2CFE5"
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
      "description": "Table Scheduling publishes ten properties. The four rows beneath them map <code>Table Amount Cell</code>, the primitive that fills <code>⤷ AmountRowSlot</code> and has no page of its own; its <code>State</code> is driven by the row rather than set on its own, so it takes no parameter here. Two mappings are deliberately not one-to-one. <code>Month</code>, <code>Day</code> and <code>Year</code> are three Figma text fields for one value — natively that is a single date the platform formats for the reader's locale, which is what the Accessibility section below asks for and what three preformatted strings would prevent. And <code>Amount</code> is text in Figma because Figma has no number type; a native implementation should take a decimal and let the formatter supply both the grouping and the currency symbol.",
      "rows": [
        {
          "figma": "State — Default, Disabled",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "hasAmountRow — true, false",
          "swift": "<code>breakdown: [AmountCell]?</code> <span class=\"muted\">— nil hides the row and its label</span>",
          "compose": "<code>breakdown: List&lt;AmountCell&gt;? = null</code>"
        },
        {
          "figma": "hasBorder — true, false",
          "swift": "<code>showsDivider: Bool = true</code>",
          "compose": "<code>showsDivider: Boolean = true</code>"
        },
        {
          "figma": "Label (text)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "Amount (text)",
          "swift": "<code>amount: String</code>",
          "compose": "<code>amount: String</code>"
        },
        {
          "figma": "Month (text)",
          "swift": "<code>date: Date</code> <span class=\"muted\">— one value, formatted by the platform</span>",
          "compose": "<code>date: LocalDate</code>"
        },
        {
          "figma": "Day (text)",
          "swift": "<code>date: Date</code>",
          "compose": "<code>date: LocalDate</code>"
        },
        {
          "figma": "Year (text)",
          "swift": "<code>date: Date</code>",
          "compose": "<code>date: LocalDate</code>"
        },
        {
          "figma": "⤷ CurrencySlot (slot)",
          "swift": "<code>currency: AnyView?</code>",
          "compose": "<code>currency: @Composable (() -&gt; Unit)?</code>"
        },
        {
          "figma": "⤷ AmountRowSlot (slot) — Table Amount Cell instances",
          "swift": "<code>breakdown: [AmountCell]</code>",
          "compose": "<code>breakdown: List&lt;AmountCell&gt;</code>"
        },
        {
          "figma": "Table Amount Cell → Label (text)",
          "swift": "<code>AmountCell.label: String</code>",
          "compose": "<code>AmountCell.label: String</code>"
        },
        {
          "figma": "Table Amount Cell → hasLabel — true, false",
          "swift": "<code>AmountCell.label == nil</code> <span class=\"muted\">— nil hides it</span>",
          "compose": "<code>AmountCell.label == null</code>"
        },
        {
          "figma": "Table Amount Cell → Amount (text)",
          "swift": "<code>AmountCell.amount: String</code>",
          "compose": "<code>AmountCell.amount: String</code>"
        },
        {
          "figma": "Table Amount Cell → ⤷ CurrencySlot (slot)",
          "swift": "<code>AmountCell.currency: AnyView?</code>",
          "compose": "<code>AmountCell.currency: @Composable (() -&gt; Unit)?</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Table/EBTableSchedulingRow.swift",
        "compose": "android/components/table/EBTableSchedulingRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"syn-cmt\">// The primary line carries the scheduled total; the cells itemise it.</span>\n<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">date</span><span class=\"syn-punc\">: </span>schedule<span class=\"syn-punc\">.</span>dueDate<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"1,250.00\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Monthly due\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">breakdown</span><span class=\"syn-punc\">: [</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Principal\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"1,100.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Interest\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"150.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">]</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// The primary line carries the scheduled total; the cells itemise it.</span>\n<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> schedule<span class=\"syn-punc\">.</span>dueDate<span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1,250.00\"</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Monthly due\"</span><span class=\"syn-punc\">,</span>\n    breakdown <span class=\"syn-eq\">=</span> <span class=\"syn-fn\">listOf</span><span class=\"syn-punc\">(</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Principal\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"1,100.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Interest\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"150.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"syn-cmt\">// For a schedule that has already run or been cancelled.</span>\n<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">date</span><span class=\"syn-punc\">: </span>schedule<span class=\"syn-punc\">.</span>dueDate<span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"1,250.00\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Monthly due\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">breakdown</span><span class=\"syn-punc\">: [</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Principal\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"1,100.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">label</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Interest\"</span><span class=\"syn-punc\">, </span><span class=\"syn-param\">amount</span><span class=\"syn-punc\">: </span><span class=\"syn-str\">\"150.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">]</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-val\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// For a schedule that has already run or been cancelled.</span>\n<span class=\"syn-type\">EBTableSchedulingRow</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> schedule<span class=\"syn-punc\">.</span>dueDate<span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1,250.00\"</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Monthly due\"</span><span class=\"syn-punc\">,</span>\n    breakdown <span class=\"syn-eq\">=</span> <span class=\"syn-fn\">listOf</span><span class=\"syn-punc\">(</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Principal\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"1,100.00\"</span><span class=\"syn-punc\">),</span>\n        <span class=\"syn-type\">AmountCell</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Interest\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"150.00\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">)</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-val\">false</span>\n<span class=\"syn-punc\">)</span>"
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
    "usageGuidelines": [
      {
        "doText": "Put the scheduled total on the primary line and only its parts in the breakdown cells.",
        "dontText": "Don't repeat the total as one of the cells — the primary line already states it, and a reader will add it twice."
      },
      {
        "doText": "Keep the breakdown to two Table Amount Cells per line.",
        "dontText": "Don't add a third: the ⤷ AmountRowSlot is 201px with 16 of right padding and each cell is 72, so a third wraps to a second line and the row grows past 90."
      },
      {
        "doText": "Pass a date and a decimal, and let the platform format both.",
        "dontText": "Don't ship MM / DD / YYYY or a hardcoded peso — those are Figma placeholders for layout, not the format a reader should see."
      },
      {
        "doText": "Use Disabled for a schedule that no longer applies — already paid, or cancelled.",
        "dontText": "Don't use it to mean read-only. Every row is display-only; Disabled is about the schedule, not the interaction."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Text layers all take the <code>#…</code> form and both swappable areas the <code>⤷ …Slot</code> form. <code>Table Amount Cell</code>'s value layer is <code>#amount</code>, matching its <code>Amount</code> property — it was <code>#value</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>State</code> setting with standard values, two <code>has*</code> booleans, five text properties named for what they hold. <code>Month</code>, <code>Day</code> and <code>Year</code> would be one <code>Date</code> under the naming catalogue; they stay split because collapsing them would break instances already placed, and that is tracked as a recommendation rather than a defect."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Verified against the selection-colours panel: six paints, six names — <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>text/color-text</code>, <code>text/color-text-primary</code>, <code>text/color-text-weaker</code> and <code>text/color-text-disabled</code>. The currency glyph and total sit on <code>text/color-text-primary</code> while the breakdown sits on <code>text/color-text</code>, which is the component's own rule about primary versus itemised values."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A stack of two rows with a wrapping list of cells — no platform table primitive needed. The only mapping that is not one-to-one is the date, which is three Figma fields and one native value."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only by design, so pressed and selected have nothing to show. <code>State=Disabled</code> dims every text layer to <code>text/color-text-disabled</code> and leaves the background alone, and <code>Table Amount Cell</code> publishes its own Disabled version so the row swaps to it rather than overriding fills per copy."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The <code>Peso Sign - Proxima</code> instance draws an unflattened <code>BOOLEAN_OPERATION</code> rather than a flat vector. It renders correctly and is tracked as a design recommendation; flattening is the iconography team's to do."
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
      "description": "<code>State</code> (2) = <strong>2 published versions</strong>. Two booleans sit on top without adding any — <code>hasAmountRow</code> and <code>hasBorder</code> — so the row has 8 combinations behind 2 versions. The five text properties and the two swappable areas add none either: <code>⤷ AmountRowSlot</code> takes however many <code>Table Amount Cell</code> copies you drop in, replacing the old <code>type</code> setting that hard-coded 0 / 2 / 4.",
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
      "version": "2.2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "One native name per primitive · node 5868:40468",
      "rows": [
        {
          "body": "<strong><code>Column</code> meant two different primitives.</strong> This page mapped <code>Table Amount Cell</code> to a native <code>Column</code>, while <code>Table Row</code> already used <code>Column</code> for <code>Table Cell</code>. Two pages, one name, two components. <code>Table Transaction</code> is where both appear together and would have collided in a single API, so it settled on <code>AmountCell</code> — and this page follows. The Figma side is unchanged; only the native type name moves.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.2.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Primitive aligned; Style, Code and Overview rebuilt to the content guides · node 5868:40468",
      "rows": [
        {
          "body": "<strong>The disabled row lines up with the default one again.</strong> <code>State=Disabled</code> had lost the 16px gap between its row label and its breakdown cells, so its cells sat 16px left of where the same row sits enabled. Found by diffing the two exports — the layer tree gives no hint of it, since both variants report the same 95px label and a slot that simply fills what is left.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>Every text layer is named after the property that fills it.</strong> <code>Table Amount Cell</code>'s value layer was <code>#value</code> while its property was <code>Amount</code>; it is <code>#amount</code> now. This replaced a standing recommendation that both components adopt <code>#value</code> — the rule that survived is the more useful one, because it keeps holding as properties are added instead of having to be renegotiated each time.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The row's own text can be set from the panel.</strong> The scheduled total and the breakdown label were bare layers, so the component's headline value could not be set without selecting the layer. <code>Amount</code> and <code>Label</code> are text properties now, and <code>Table Amount Cell</code> gained a <code>Label</code> alongside its <code>Amount</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>The disabled look lives in the primitive.</strong> <code>Table Amount Cell</code> publishes its own Disabled version, so a disabled row swaps to it rather than having its colours painted over copy by copy — the same pattern as the <code>Table Row</code> primitives.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Every colour is bound to a named system colour.</strong> Checked against Figma's selection-colours panel, which the earlier tooling could not read: six paints, six names. The two-tier currency turns out to be deliberate — the scheduled total on <code>text/color-text-primary</code>, the itemised cells on <code>text/color-text</code>. This closes the standing recommendation to audit the bindings.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Scheduling semantics are written down.</strong> The Code tab's first usage guideline now says the scheduled total goes on the primary line and only its parts in the cells, with the warning not to repeat the total as one of them. Without it the component gets reused as a generic multi-amount row.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Style tab described a component that had moved on.</strong> One card where <code>State</code> gives two. Height documented as <code>132.5</code> against a real <code>Hug · 90</code>. Five colour tokens — <code>table/color/bg</code>, <code>table/color/label-amount</code>, <code>table/color/icon-currency-primary</code> and two more — that do not exist in the file. And every colour and layout override keyed to a <code>type</code> control removed in v2.0, so none of them had fired since.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Layout is read rather than derived.</strong> The four Auto layout panels settle it: 24 left and right on the row, 16 top and bottom on <code>container</code>, an 8 gap between the two lines, and <code>Auto</code> horizontal spacing in the <code>⤷ AmountRowSlot</code> with 16 of right padding. That last one explains the 72 + 41 + 72 + 16 the export measures, which is otherwise unguessable.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab rebuilt to the content guide.</strong> Installation was empty — no SPM, no Gradle, no import — and now takes the <code>Table</code> family's coordinates. Property Mapping went from 9 rows to 14, regrouped into prose and extended to cover <code>Table Amount Cell</code>, whose whole API had been one row naming two layers. Usage Snippets split one per <code>State</code>; four usage guidelines written where there were none.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The two tabs had drifted apart on the date.</strong> The Code tab maps <code>Month</code>, <code>Day</code> and <code>Year</code> onto a single native <code>date</code>, because the Accessibility section asks for locale formatting and three preformatted strings make that impossible. The Style tab's snippets were still emitting three parameters. Both say <code>date:</code> now, with the three controls moving a trailing comment. Collapsing the three Figma fields into one <code>Date</code> stays open as a recommendation — it would break instances already placed.",
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
      "header": "Naming pass on the rebuild · node 5868:40468",
      "rows": [
        {
          "body": "<strong>Both states name the details row the same way.</strong> The two <code>State</code> versions had drifted onto different layer names for the same row, which is the kind of thing that only shows up when someone diffs the two.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The date's separator layers are distinguishable from its text.</strong> <code>#month</code>, <code>#day</code> and <code>#year</code> are the fields; the two slashes between them are <code>separator</code> layers, and the names now say which is which.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "2026 Working File · rebuilt on slots · node 5868:40468",
      "rows": [
        {
          "body": "<strong>The detail-count setting is gone.</strong> <code>type</code> held sentence-shaped values — \"2 amounts display\" — and fixed the number of breakdown cells at build time. The <code>⤷ AmountRowSlot</code> now takes however many <code>Table Amount Cell</code> copies you drop in.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>The peso sign became a vector.</strong> It was a raster image that would not scale with Dynamic Type. It is a <code>Peso Sign - Proxima</code> instance in a <code>⤷ CurrencySlot</code>, used the same way on the primary line and inside every detail cell.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Detail cells are composed, not redrawn.</strong> Each one is a <code>Table Amount Cell</code> copy placed in the slot, carrying its own <code>⤷ CurrencySlot</code>, rather than a label and an amount re-implemented inline.",
          "delta": {
            "kind": "resolved",
            "label": "Composition"
          }
        },
        {
          "body": "<strong>The row maps to native primitives.</strong> Two stacked rows with a wrapping list of cells — no platform table primitive needed, on either side.",
          "delta": {
            "kind": "resolved",
            "label": "C4 Resolved"
          }
        },
        {
          "body": "<strong>Disabled shipped; pressed and selected were dropped on purpose.</strong> The row is display-only and carries no tap target, so those two states have nothing to show. <code>State=Disabled</code> covers a schedule that no longer applies.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Scheduling stays its own component.</strong> The proposal was to remove it from core DS or fold it into <code>Table Row</code>. It carries a date line and a variable breakdown row on top of what a standard row does, so it stays separate — with slot naming and state coverage kept aligned across both.",
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
