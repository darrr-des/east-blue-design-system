import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/date-picker-item.js`.
const datePickerItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'Default',
        options: [
          { value: 'Default',        label: 'Default' },
          { value: 'Today',          label: 'Today' },
          { value: 'Selected',       label: 'Selected' },
          { value: 'Range (Middle)', label: 'Range (Middle)' },
          { value: 'Prev/Next',      label: 'Prev/Next' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Enabled',
        options: [
          { value: 'Enabled',  label: 'Enabled' },
          { value: 'Disabled', label: 'Disabled' },
        ],
      },
    ],
  },
];

export const datePickerItem: ComponentData = {
  "meta": {
    "slug": "date-picker-item",
    "name": "Date Picker - Item",
    "node": "12874:42180",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=12874-42180",
    "description": "The 32×32 selectable day cell rendered inside the Date Picker calendar grid.",
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
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate into a unified Picker Cell",
      "text": "This cell and Month and Year Picker - Item are the same selectable-cell primitive at different pixel sizes (32×32 vs 100×32) with identical state semantics. Collapse both into a single <code>Picker Cell</code> with <code>kind: day | month | year</code> + <code>state: default | today | selected | range-middle | prev-next | disabled</code>. Also note: at 32×32 the cell is below WCAG's 44×44 minimum touch target (A11y)."
    }
  },
  "overview": {
    "inContextNote": "The cell is an instance inside Date Picker - Group (Type=Date). 42 cells are rendered across 6 rows × 7 columns. A sibling weekday-header row also instance-swaps this component, which is one of the reasons C1 flags the layer-naming convention.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"140\" height=\"120\" viewBox=\"0 0 140 120\" fill=\"none\">\n          <rect x=\"14\" y=\"8\" width=\"112\" height=\"104\" rx=\"4\" fill=\"currentColor\" opacity=\".03\" stroke=\"currentColor\" stroke-width=\".8\" stroke-opacity=\".25\"></rect>\n          <g opacity=\".18\" fill=\"currentColor\" font-family=\"system-ui\" font-size=\"4\">\n            <text x=\"24\" y=\"22\">Su</text><text x=\"39\" y=\"22\">M</text><text x=\"53\" y=\"22\">T</text><text x=\"67\" y=\"22\">W</text><text x=\"80\" y=\"22\">Th</text><text x=\"95\" y=\"22\">F</text><text x=\"108\" y=\"22\">Sa</text>\n          </g>\n          <g fill=\"currentColor\" opacity=\".22\">\n            <circle cx=\"26\" cy=\"34\" r=\"1.8\"></circle><circle cx=\"40\" cy=\"34\" r=\"1.8\"></circle><circle cx=\"54\" cy=\"34\" r=\"1.8\"></circle><circle cx=\"68\" cy=\"34\" r=\"1.8\"></circle><circle cx=\"82\" cy=\"34\" r=\"1.8\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\".8\" opacity=\"1\"></circle><circle cx=\"96\" cy=\"34\" r=\"1.8\"></circle><circle cx=\"110\" cy=\"34\" r=\"1.8\"></circle>\n            <circle cx=\"26\" cy=\"48\" r=\"1.8\"></circle><circle cx=\"40\" cy=\"48\" r=\"1.8\"></circle><circle cx=\"54\" cy=\"48\" r=\"1.8\"></circle><circle cx=\"68\" cy=\"48\" r=\"1.8\" fill=\"#005CE5\" opacity=\"1\"></circle><circle cx=\"82\" cy=\"48\" r=\"1.8\"></circle><circle cx=\"96\" cy=\"48\" r=\"1.8\"></circle><circle cx=\"110\" cy=\"48\" r=\"1.8\"></circle>\n            <circle cx=\"26\" cy=\"62\" r=\"1.8\"></circle><circle cx=\"40\" cy=\"62\" r=\"1.8\"></circle><circle cx=\"54\" cy=\"62\" r=\"1.8\"></circle><circle cx=\"68\" cy=\"62\" r=\"1.8\"></circle><circle cx=\"82\" cy=\"62\" r=\"1.8\"></circle><circle cx=\"96\" cy=\"62\" r=\"1.8\"></circle><circle cx=\"110\" cy=\"62\" r=\"1.8\"></circle>\n            <circle cx=\"26\" cy=\"76\" r=\"1.8\"></circle><circle cx=\"40\" cy=\"76\" r=\"1.8\"></circle><circle cx=\"54\" cy=\"76\" r=\"1.8\"></circle><circle cx=\"68\" cy=\"76\" r=\"1.8\"></circle><circle cx=\"82\" cy=\"76\" r=\"1.8\"></circle><circle cx=\"96\" cy=\"76\" r=\"1.8\"></circle><circle cx=\"110\" cy=\"76\" r=\"1.8\"></circle>\n            <circle cx=\"26\" cy=\"90\" r=\"1.8\"></circle><circle cx=\"40\" cy=\"90\" r=\"1.8\"></circle><circle cx=\"54\" cy=\"90\" r=\"1.8\"></circle><circle cx=\"68\" cy=\"90\" r=\"1.8\"></circle><circle cx=\"82\" cy=\"90\" r=\"1.8\"></circle><circle cx=\"96\" cy=\"90\" r=\"1.8\"></circle><circle cx=\"110\" cy=\"90\" r=\"1.8\"></circle>\n          </g>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpi-demo-preview\"><div style=\"display:flex;align-items:center;justify-content:center;padding:40px;background:#F4F6FA;border-radius:8px;min-height:120px;\"><div style=\"position:relative;display:inline-block;font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"position:relative;width:32px;height:32px;box-sizing:border-box;background:#FFFFFF;border:none;border-radius:30px;display:flex;align-items:center;justify-content:center;color:#0A2757;font-weight:600;font-size:14px;line-height:1;letter-spacing:.25px;\">1</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" onchange=\"_dpiDemo.type=this.value;updateDatePickerItemDemo()\"><option value=\"Default\">Default</option><option value=\"Today\">Today</option><option value=\"Selected\">Selected</option><option value=\"Range (Middle)\">Range (Middle)</option><option value=\"Prev/Next\">Prev/Next</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_dpiDemo.state=this.value;updateDatePickerItemDemo()\"><option value=\"Enabled\">Enabled</option><option value=\"Disabled\">Disabled</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Used only inside Date Picker - Group (Date view). Because it is coupled to the 32×32 day grid it cannot be reused for month or year cells — which is exactly why a sibling <code>Month and Year Picker - Item</code> exists at 100×32 doing nearly the same job."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Text, bg, ring, and radius are all token-bound via <code>main/date-picker/day/*</code>. However, Range (Middle) uses absolutely-positioned sibling rectangles (<code>Range highlight start</code>, <code>Range highlight end</code>) to spill the range strip into adjacent cells — this is row-level geometry leaking into a cell-level component."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>Type</code> mixes display roles (Default, Today, Prev/Next) with selection state (Selected, Range Middle) on one axis. Disabled exists only on Default and Today — Selected, Range (Middle), and Prev/Next have no Disabled variant. Value <code>Range (Middle)</code> uses parentheses/space in a variant name."
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Doesn't compose into a native picker — both SwiftUI <code>DatePicker(.graphical)</code> and Material 3 <code>DatePicker</code> render their own cells. Even if kept as a visual reference, it duplicates Month and Year Picker - Item at a different size instead of being one <code>Picker Cell</code> with a <code>kind</code> axis."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Default, State=Enabled",
        "notes": "Plain day number on white. No ring, no fill. <code>#0A2757</code> label."
      },
      {
        "state": "Today",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Today, State=Enabled",
        "notes": "1.5px blue ring, blue label. Native equivalent: <code>todayDateBorderColor</code> on Material 3."
      },
      {
        "state": "Selected",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Selected, State=Enabled",
        "notes": "Solid blue fill (<code>#005CE5</code>), white bold label. Only exists as Enabled — no Disabled form."
      },
      {
        "state": "Range (Middle)",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Range (Middle), State=Enabled",
        "notes": "Weakest-info bg (<code>#E5F1FF</code>), bold blue label. Ships with <code>extraLeft</code>/<code>extraRight</code> booleans that bleed the strip into adjacent cells."
      },
      {
        "state": "Prev/Next",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Prev/Next, State=Enabled",
        "notes": "Greyed label (<code>#C2CFE5</code>) for days spilling over from the adjacent month. Not a true Disabled — the day is still conceptually pickable, just visually dimmed."
      },
      {
        "state": "Disabled (Default/Today)",
        "ios": "yes",
        "android": "yes",
        "property": "Type={Default|Today}, State=Disabled",
        "notes": "Label drops to <code>#9BC5FD</code> (Today) or <code>#C2CFE5</code> (Default). Disabled missing on Selected, Range, and Prev/Next."
      },
      {
        "state": "Pressed / Focused / Hover",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined on any Type. Native pickers supply these automatically."
      },
      {
        "state": "Today + Selected",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Unclear which presentation wins when today is also the selected date."
      },
      {
        "state": "Touch target",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Below WCAG minimum 44×44. Native pickers enforce their own hit areas, but any custom wrapper would need to extend the tap area beyond the visual cell."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Sibling duplication with Month and Year Picker - Item.",
        "body": "The two components are the same selectable-cell primitive at different pixel sizes (32×32 vs 100×32) with overlapping state semantics (Default, Today, Selected). Maintaining them as siblings doubles the variant surface and forces the Group panel to decide which cell to instance-swap based on the current view.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Range continuity is drawn per-cell, not at the row.",
        "body": "The <code>Range (Middle)</code> variant includes two absolutely-positioned siblings (<code>Range highlight start</code>, <code>Range highlight end</code>) that spill 28–34% beyond the cell bounds to visually connect with neighbours. Range continuity is row-level geometry; modelling it on the cell produces per-cell decoration with leak.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Type</code> axis mixes display role with selection state.",
        "body": "Default, Today, and Prev/Next describe what the cell <em>is</em>; Selected and Range (Middle) describe what the user has <em>done</em>. These belong on two axes (<code>role</code> and <code>selection</code>), not one. The current shape produces invalid combinations (e.g. you can't express \"Today that is also Selected\").",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Variant value <code>Range (Middle)</code> uses punctuation and whitespace.",
        "body": "Rename to <code>range-middle</code> (or, after the axis-split, <code>selection = range-middle</code>). Current value generates <code>type=\"Range (Middle)\"</code> in code-connect output, which is awkward to match on.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Cell has no 1:1 native primitive.",
        "body": "Both SwiftUI <code>DatePicker(.graphical)</code> and Material 3 <code>DatePicker</code> render their own day cells and don't accept a custom cell view. This Figma component is therefore a reference spec, not a mappable component — should be marked as such or merged into the Picker Cell family.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Disabled coverage incomplete.",
        "body": "The <code>State</code> axis nominally supports Disabled, but Disabled variants exist only on Default and Today. Selected, Range (Middle), and Prev/Next have no Disabled form — unreachable if the user picks a selected date then the parent toggles disabled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No Pressed, Hover, or Focused variants.",
        "body": "Tap feedback (iOS ripple / Android state layer) and keyboard focus ring are not defined. Native pickers supply these automatically, but any custom overlay or wrapper has no tokens to apply.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Today + Selected collision is unresolved.",
        "body": "There is no variant for the common case of today being the currently-selected date. The design team should decide which presentation wins (ring + fill, fill-only, or a hybrid) and publish a variant.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Selection emphasis pattern not shared with Month/Year cells.",
        "body": "Selected on this cell is a solid fill; Selected on Month and Year Picker - Item is a 1px ring. The two selection treatments drift — should be one token-driven \"selection emphasis\" applied consistently per <code>kind</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked by the native-pickers-own-it direction (C4) and by the pending Picker Cell family unification (C1). Map only once the unified component exists and the wrapper surface is confirmed.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Family — Consolidate Date Picker - Item + Month and Year Picker - Item into ONE <code>Picker Cell</code>.",
        "body": "Both are selectable cells with identical state semantics (Default / Today / Selected / Disabled); only pixel size (32×32 vs 100×32) and typography differ. Proposed schema: <code>kind = day | month | year</code> + <code>state = default | today | selected | range-middle | prev-next | disabled</code>. Collapses 10 sibling variants across two components into one component with two clean axes. A single native <code>PickerCell</code> composable renders the correct typography per <code>kind</code>.",
        "tag": "Family"
      },
      {
        "headline": "Property — Split <code>Type</code> into <code>role</code> + <code>selection</code> (after consolidation).",
        "body": "Within the unified Picker Cell, separate display role (<code>default | today | prev-next</code>) from selection state (<code>none | selected | range-start | range-middle | range-end</code>). Lets designers express \"Today that is also Selected\" and fixes the current invalid combinations.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>Range (Middle)</code> to <code>range-middle</code>.",
        "body": "Remove parentheses and whitespace from the variant value. Cleaner code-connect output and matches the kebab-case used by other DS enums.",
        "tag": "Rename"
      },
      {
        "headline": "State — Add Pressed, Focused, and Today+Selected variants.",
        "body": "Extend the state axis with Pressed and Focused (needed for any custom wrapper rendering tap / keyboard affordances), and publish a decision variant for the common \"today is also selected\" case.",
        "tag": "State"
      },
      {
        "headline": "State — Complete Disabled coverage across all Types.",
        "body": "The <code>State</code> axis currently only exists on Default and Today. Publish Disabled variants for Selected, Range (Middle), and Prev/Next so the axis is rectangular — no missing cells in the variant matrix.",
        "tag": "State"
      },
      {
        "headline": "Composition — Move range-strip continuity from the cell to the row.",
        "body": "Remove the absolutely-positioned <code>Range highlight start</code> / <code>Range highlight end</code> siblings from the cell. Render the range strip as a row-level decoration behind the cells (a full-width rectangle between range-start and range-end). Keeps the cell component self-contained.",
        "tag": "Composition"
      },
      {
        "headline": "Token — Share a selection-emphasis token across Picker Cell kinds.",
        "body": "Create <code>main/picker-cell/selection/*</code> tokens that resolve to either \"fill\" or \"ring\" based on <code>kind</code>, so day/month/year selection treatments stay intentionally consistent rather than drifting.",
        "tag": "Token"
      },
      {
        "headline": "A11y — Flag the 32×32 touch target.",
        "body": "Below WCAG 2.5.5 minimum 44×44. If a custom wrapper is ever built, extend the hit area beyond the visual cell (add transparent padding). Document this on the component so consumers don't accidentally ship the tight target outside the native picker context.",
        "tag": "A11y"
      },
      {
        "headline": "Docs — Mark as reference, not a production component.",
        "body": "Given that both platforms render their own day cells inside the native <code>DatePicker</code>, this cell is a visual reference for the token-styled wrapper, not a component developers rebuild. Add a description banner and a <code>_reference</code> prefix once the Picker Cell family unification lands.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": datePickerItemDemoControls,
        "title": "Default",
        "node": "12874:42181",
        "description": "32×32 day cell rendered inside the calendar grid. Flip Type and State to walk through every variant.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Default", "prop": "type" },
              { "key": "State", "value": "Enabled", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#0A2757", "token": "date-picker/day/color/unselected/label",
                "variants": {
                  "type:Today":          { "value": "#005CE5", "token": "date-picker/day/color/today/label" },
                  "type:Selected":       { "value": "#FFFFFF", "token": "date-picker/day/color/selected/label" },
                  "type:Prev/Next":      { "value": "#C2CFE5", "token": "date-picker/day/color/dimmed/label" },
                  "state:Disabled":      { "value": "#C2CFE5", "token": "date-picker/day/color/disabled/label" }
                }
              },
              { "key": "Bg", "value": "#FFFFFF", "token": "date-picker/day/color/unselected/bg",
                "variants": {
                  "type:Selected":       { "value": "#005CE5", "token": "date-picker/day/color/selected/bg" },
                  "type:Range (Middle)": { "value": "#E5F0FF", "token": "bg/color-bg-info-weakest" }
                }
              },
              { "key": "Border", "value": "none", "token": "—",
                "variants": {
                  "type:Today": { "value": "1.5px #005CE5", "token": "border/color-border-primary" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Cell size", "value": "32 × 32", "mono": true },
              { "key": "Border radius", "value": "pill (16)", "mono": true,
                "variants": { "type:Range (Middle)": { "value": "0" } }
              },
              { "key": "Hit target", "value": "44 × 44", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Style", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "Font", "value": "Proxima Soft Semibold · 14 / 14 · +0.25", "mono": true,
                "variants": { "type:Selected": { "value": "Proxima Soft Bold · 14 / 14 · +0.25" } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDayCell</span><span class=\"syn-punc\">(</span>date<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDayCell</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDayState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"dpi-spec-preview\"></div>"
      }

    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "All cell colors are bound to tokens. Selected uses the <code>main/date-picker/day/color/selected/*</code> scope; Default/Today borrow <code>main/date-picker/day/color/unselected/*</code> plus primary text/border tokens for the ring and label. Range (Middle) reuses the shared <code>bg/color-bg-info-weakest</code> rather than a picker-scoped token.",
        "columns": [
          "Token",
          "ENABLED",
          "DISABLED"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/unselected/bg",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Default",
            "token": "label",
            "values": [
              "main/date-picker/day/color/unselected/label",
              "#0A2757",
              "#C2CFE5 (text/color-text-disabled)"
            ]
          },
          {
            "role": "Today",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/unselected/bg",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Today",
            "token": "ring",
            "values": [
              "border/color-border-primary",
              "#005CE5 (1.5px)",
              "#9BC5FD (border/color-border-primary-disabled)"
            ]
          },
          {
            "role": "Today",
            "token": "label",
            "values": [
              "text/color-text-primary",
              "#005CE5",
              "#9BC5FD (text/color-text-primary-disabled)"
            ]
          },
          {
            "role": "Selected",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/selected/bg",
              "#005CE5",
              "–"
            ]
          },
          {
            "role": "Selected",
            "token": "label",
            "values": [
              "main/date-picker/day/color/selected/label",
              "#FFFFFF",
              "–"
            ]
          },
          {
            "role": "Range (Middle)",
            "token": "bg",
            "values": [
              "bg/color-bg-info-weakest",
              "#E5F1FF",
              "–"
            ]
          },
          {
            "role": "Range (Middle)",
            "token": "label",
            "values": [
              "text/color-text-primary",
              "#005CE5 (bold)",
              "–"
            ]
          },
          {
            "role": "Prev/Next",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/unselected/bg",
              "#FFFFFF",
              "–"
            ]
          },
          {
            "role": "Prev/Next",
            "token": "label",
            "values": [
              "text/color-text-disabled",
              "#C2CFE5",
              "–"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Cell size",
            "token": "32 × 32",
            "values": []
          },
          {
            "role": "Corner radius",
            "token": "30px (pill)",
            "values": []
          },
          {
            "role": "Padding",
            "token": "10px top, 12px bottom, 6px horizontal",
            "values": []
          },
          {
            "role": "Label width",
            "token": "20px (fixed, centred)",
            "values": []
          },
          {
            "role": "Today ring",
            "token": "1.5px solid",
            "values": []
          },
          {
            "role": "Range highlight strip",
            "token": "32px tall, bleeds ~28–34% beyond cell edges via extraLeft / extraRight",
            "values": []
          },
          {
            "role": "Gap (inside grid)",
            "token": "0 (cells are edge-to-edge in the row)",
            "values": []
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Weight",
          "Size",
          "Line-height",
          "Tracking"
        ],
        "rows": [
          {
            "role": "Default / Today / Prev/Next",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft",
              "Semibold (600)",
              "14px",
              "14px",
              "0.25px"
            ]
          },
          {
            "role": "Selected / Range (Middle)",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft",
              "Bold (700)",
              "14px",
              "14px",
              "0.25px"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Type=Default",
          "swift": "(default rendering)",
          "compose": "dayContentColor"
        },
        {
          "figma": "Type=Today",
          "swift": ".accentColor / automatic Today ring",
          "compose": "todayDateBorderColor"
        },
        {
          "figma": "Type=Selected",
          "swift": ".tint (via selection binding)",
          "compose": "selectedDayContainerColor / selectedDayContentColor"
        },
        {
          "figma": "Type=Range (Middle)",
          "swift": "(no direct API — requires custom calendar)",
          "compose": "dayInSelectionRangeContainerColor"
        },
        {
          "figma": "Type=Prev/Next",
          "swift": "(automatic dimming)",
          "compose": "(automatic dimming via dayContentColor)"
        },
        {
          "figma": "State=Disabled",
          "swift": "in: Date... range parameter",
          "compose": "selectableDates"
        },
        {
          "figma": "extraLeft / extraRight",
          "swift": "—",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/DatePicker/EBPickerCell.swift · kind: day",
        "compose": "android/components/datepicker/EBPickerCell.kt · kind: Day"
      }
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Touch target (44 × 44 min)",
        "ios": "Figma cell is 32 × 32 — native picker extends hit area",
        "android": "Figma cell is 32 × 32 — native picker extends hit area"
      },
      {
        "requirement": "Screen reader label",
        "ios": "VoiceOver: \"Friday, 5 March, Today\" (from <code>DatePicker</code>)",
        "android": "TalkBack: \"5 March 2026, Today\" (from Material 3)"
      },
      {
        "requirement": "Selected announcement",
        "ios": "\"Selected\" trait added automatically",
        "android": "\"Selected\" state added automatically"
      },
      {
        "requirement": "Focus ring",
        "ios": "System focus ring on iPad / hw keyboard",
        "android": "System focus indicator on D-Pad / hw keyboard"
      },
      {
        "requirement": "Disabled announcement",
        "ios": "\"Dimmed\" trait when outside <code>in:</code> range",
        "android": "\"Disabled\" state when outside <code>selectableDates</code>"
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Automatic",
        "android": "Automatic"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Treat this cell as a visual reference for how the native picker should look in GCash theme — colors, ring thickness, radius, and label weight.",
        "dontText": "Don't ship a standalone EBDatePickerItem composable. Native pickers render their own cells; a custom cell composable has no slot to plug into."
      },
      {
        "doText": "If you genuinely need a custom cell (e.g. event dots, legend markers), merge with Month and Year Picker - Item into a unified PickerCell(kind:, state:) and compose it inside a custom calendar grid.",
        "dontText": "Don't maintain Date Picker - Item and Month and Year Picker - Item as siblings — they're the same primitive at different sizes."
      },
      {
        "doText": "Rely on the native picker for locale-aware firstDayOfWeek, leap-year handling, VoiceOver / TalkBack, and minDate/maxDate enforcement.",
        "dontText": "Don't draw disabled days manually. Pass an in: range (SwiftUI) or selectableDates (Compose) and let the platform style them."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Sibling-duplication with Month and Year Picker - Item. Range continuity modelled with absolute-positioned siblings that spill beyond cell bounds."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>Type</code> mixes display role with selection state on one axis. Value <code>Range (Middle)</code> uses punctuation/whitespace."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, spacing, radius, and typography are token-bound (<code>main/date-picker/day/*</code> + primary text/border tokens)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Native pickers own the day cell and don't accept a custom cell view. Reference-only unless merged into a custom <code>PickerCell</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Disabled missing on Selected, Range (Middle), Prev/Next. No Pressed, Hover, Focused. Today + Selected collision unresolved."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No raster assets — cell is pure geometry + text. But selection emphasis (fill vs ring) drifts from Month and Year Picker - Item; should be one token-driven pattern."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by C4 (native owns it) and by the pending Picker Cell family unification."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Split <code>Type</code> into <code>role</code> + <code>selection</code>; rename <code>Range (Middle)</code> to <code>range-middle</code>."
      },
      {
        "aspect": "Family unification",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Merge with Month and Year Picker - Item into <code>PickerCell</code> with <code>kind: day | month | year</code>."
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No standalone composable — native <code>DatePicker</code> renders cells. Only materialize <code>EBPickerCell</code> if a custom calendar grid is ever built."
      },
      {
        "aspect": "Range continuity",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Move <code>Range highlight start</code>/<code>end</code> geometry from the cell up to the row before mapping."
      },
      {
        "aspect": "Recommendation",
        "status": "empty",
        "statusLabel": "Consolidate",
        "notes": "Merge into PickerCell, mark as reference spec for the native picker's day cell."
      }
    ],
    "variants": {
      "total": 7,
      "description": "5 Type × 2 State would produce 10 variants, but only 7 are published — Selected, Range (Middle), and Prev/Next exist only with <code>State=Enabled</code>.",
      "columns": [
        "Type",
        "State",
        "Dimensions",
        "Emphasis",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Enabled",
            "32 × 32",
            "none",
            "12874:42181"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "32 × 32",
            "dim label",
            "13948:3888"
          ]
        },
        {
          "cells": [
            "Today",
            "Enabled",
            "32 × 32",
            "1.5px blue ring",
            "13944:5633"
          ]
        },
        {
          "cells": [
            "Today",
            "Disabled",
            "32 × 32",
            "1.5px primary-disabled ring",
            "13948:3891"
          ]
        },
        {
          "cells": [
            "Selected",
            "Enabled",
            "32 × 32",
            "solid blue fill, white label",
            "12874:42183"
          ]
        },
        {
          "cells": [
            "Range (Middle)",
            "Enabled",
            "32 × 32",
            "weakest-info fill, bold blue label, <code>extraLeft</code>/<code>extraRight</code> booleans",
            "13944:5637"
          ]
        },
        {
          "cells": [
            "Prev/Next",
            "Enabled",
            "32 × 32",
            "dim label only",
            "13944:5653"
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
      "header": "Initial Assessment · node 12874:42180",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 7 variants across <code>Type</code> × <code>State</code>. 32×32 pill cell with token-bound colors, spacing, radius, and typography.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Sibling duplication with Month and Year Picker - Item</strong> — Same selectable-cell primitive at different sizes. Proposal: collapse both into <code>Picker Cell</code> with <code>kind: day | month | year</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Range continuity modelled per-cell</strong> — <code>Range highlight start</code> and <code>Range highlight end</code> are absolute-positioned siblings that spill beyond the cell. Should be row-level geometry.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong><code>Type</code> mixes role and selection</strong> — Default/Today/Prev-Next are display roles; Selected/Range (Middle) are selection states. Split into <code>role</code> + <code>selection</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Variant value <code>Range (Middle)</code> needs cleanup</strong> — Rename to <code>range-middle</code> for clean code-connect output.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No native primitive for a day cell</strong> — Native <code>DatePicker</code> renders its own cells on both platforms. Reference-only unless a custom calendar grid is built.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Disabled missing on Selected/Range/Prev-Next</strong> — State axis is not rectangular. Also missing Pressed, Hover, Focused, and Today + Selected.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Selection emphasis drifts across sibling cells</strong> — Day cell Selected is a fill; month/year cell Selected is a ring. Align on one token-driven pattern per <code>kind</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect not registered</strong> — Blocked by the native-pickers-own-it direction and by the pending Picker Cell family unification.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
