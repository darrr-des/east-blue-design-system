import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/month-year-picker-item.js`.
const monthYearPickerItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'Default',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Today', label: 'Today' },
          { value: 'Selected', label: 'Selected' },
        ],
      },
    ],
  },
];

export const monthYearPickerItem: ComponentData = {
  "meta": {
    "slug": "month-year-picker-item",
    "name": "Month and Year Picker - Item",
    "node": "18414:5854",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18414-5854",
    "description": "The 100×32 selectable cell used inside the Month and Year views of Date Picker - Group.",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Date Picker - Cell",
      "text": "Superseded by <a href=\"/components/date-picker-cell\">Date Picker - Cell</a>. This cell and <a href=\"/components/date-picker-item\">Date Picker - Item</a> folded into one component at node <code>5943:41825</code> as <code>Kind=MonthYear</code>. The Disabled version it never had now exists, the inner frame that was always called <code>Month</code> is now <code>Container</code>, and the Today ring matches the day cell exactly. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "inContextNote": "The cell is instance-swapped inside Date Picker - Group when the user switches to Month or Year view. 12 cells are rendered as a 4 × 3 month grid, or 20 cells as a 4 × 5 year grid. Same Figma component for both — only the text label changes.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"160\" height=\"120\" viewBox=\"0 0 160 120\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"140\" height=\"104\" rx=\"4\" fill=\"currentColor\" opacity=\".03\" stroke=\"currentColor\" stroke-width=\".8\" stroke-opacity=\".25\"></rect>\n          <g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"5\" opacity=\".55\">\n            <rect x=\"18\" y=\"18\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"32\" y=\"28\" text-anchor=\"middle\">Jan</text>\n            <rect x=\"50\" y=\"18\" width=\"28\" height=\"14\" rx=\"2\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\".8\" opacity=\"1\"></rect><text x=\"64\" y=\"28\" text-anchor=\"middle\" fill=\"#005CE5\" opacity=\"1\">Feb</text>\n            <rect x=\"82\" y=\"18\" width=\"28\" height=\"14\" rx=\"2\" fill=\"#005CE5\" opacity=\"1\"></rect><text x=\"96\" y=\"28\" text-anchor=\"middle\" fill=\"#fff\" opacity=\"1\" font-weight=\"700\">Mar</text>\n            <rect x=\"114\" y=\"18\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"128\" y=\"28\" text-anchor=\"middle\">Apr</text>\n            <rect x=\"18\" y=\"38\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"32\" y=\"48\" text-anchor=\"middle\">May</text>\n            <rect x=\"50\" y=\"38\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"64\" y=\"48\" text-anchor=\"middle\">Jun</text>\n            <rect x=\"82\" y=\"38\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"96\" y=\"48\" text-anchor=\"middle\">Jul</text>\n            <rect x=\"114\" y=\"38\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"128\" y=\"48\" text-anchor=\"middle\">Aug</text>\n            <rect x=\"18\" y=\"58\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"32\" y=\"68\" text-anchor=\"middle\">Sep</text>\n            <rect x=\"50\" y=\"58\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"64\" y=\"68\" text-anchor=\"middle\">Oct</text>\n            <rect x=\"82\" y=\"58\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"96\" y=\"68\" text-anchor=\"middle\">Nov</text>\n            <rect x=\"114\" y=\"58\" width=\"28\" height=\"14\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect><text x=\"128\" y=\"68\" text-anchor=\"middle\">Dec</text>\n          </g>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"mypi-demo-preview\"><div style=\"display:flex;align-items:center;justify-content:center;padding:40px;background:#F4F6FA;border-radius:8px;min-height:120px;\"><div style=\"display:inline-block;font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"box-sizing:border-box;width:100px;height:32px;background:#FFFFFF;border:none;border-radius:8px;padding:10px 12px 8px;display:flex;align-items:center;justify-content:center;gap:4px;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">March</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" onchange=\"_mypiDemo.type=this.value;updateMonthYearPickerItemDemo()\"><option value=\"Default\">Default</option><option value=\"Today\">Today</option><option value=\"Selected\">Selected</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Used inside Date Picker - Group for both the Month and Year views — which is good. But because it is a separate sibling from the 32×32 day cell, the picker has to instance-swap between two near-identical components depending on the view. A single <code>Picker Cell</code> with a <code>kind</code> axis would be truly reusable."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Bg, label, border, radius, padding, and typography are all token-bound. No absolute-positioned overflow, no external dependencies — the cell is a clean self-contained pill."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "State axis is <em>narrower</em> than the sibling day cell (no Disabled, no Pressed, no Focused). The Today ring is also 1px here but 1.5px on the day cell — same visual pattern with drift. Cells in the same family should share state shape and stroke tokens."
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Doesn't compose into a native picker — SwiftUI <code>DatePicker(.graphical)</code> and Material 3 <code>DatePicker</code> render their own month/year views. And as a DS primitive it duplicates Date Picker - Item at a different size instead of being one <code>Picker Cell</code> with a <code>kind</code> axis."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Default",
        "notes": "Plain label on white. <code>#0A2757</code> primary label. No ring, no fill."
      },
      {
        "state": "Today",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Today",
        "notes": "1px blue border, blue label. Marks the current month or year. Border thickness differs from the sibling day cell's 1.5px ring."
      },
      {
        "state": "Selected",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Selected",
        "notes": "Solid blue fill (<code>#005CE5</code>), white bold label. Uses the shared <code>main/date-picker/day/color/selected/*</code> token scope."
      },
      {
        "state": "Disabled",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined on any Type. Sibling day cell exposes State=Disabled for Default and Today — this cell has no equivalent, so a disabled month or year has no token-bound appearance."
      },
      {
        "state": "Pressed / Focused / Hover",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Native pickers supply these automatically, but a custom wrapper has no tokens to apply."
      },
      {
        "state": "Today + Selected",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Unclear which presentation wins when the current month/year is also the selected one."
      },
      {
        "state": "Touch target",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Height is 32px — below WCAG minimum 44×44 on the vertical axis. Native pickers enforce their own hit areas; any custom wrapper would need to pad the tap zone."
      }
    ],
    "resolved": [],
    "open": [],
    "recommendations": []
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": monthYearPickerItemDemoControls,
        "title": "Default",
        "node": "18414:5851",
        "description": "100×32 cell rendered inside the Month and Year grids of Date Picker - Group. Flip Type between Default / Today / Selected.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Default", "prop": "type" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#0A2757", "token": "date-picker/day/color/unselected/label",
                "variants": {
                  "type:Today":    { "value": "#005CE5", "token": "date-picker/day/color/today/label" },
                  "type:Selected": { "value": "#FFFFFF", "token": "date-picker/day/color/selected/label" }
                }
              },
              { "key": "Bg", "value": "#FFFFFF", "token": "date-picker/day/color/unselected/bg",
                "variants": {
                  "type:Selected": { "value": "#005CE5", "token": "date-picker/day/color/selected/bg" }
                }
              },
              { "key": "Border", "value": "none", "token": "—",
                "variants": {
                  "type:Today": { "value": "1px #005CE5", "token": "border/color-border-primary" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Cell size", "value": "100 × 32", "mono": true },
              { "key": "Border radius", "value": "8", "mono": true },
              { "key": "Padding H", "value": "12", "mono": true }
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
        "swift": "<span class=\"syn-type\">EBMonthYearCell</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBMonthYearCell</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> value<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCellState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"mypi-spec-preview\"></div>"
      }

    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "All cell colors are bound to tokens — but the tokens live under the <code>main/date-picker/day/*</code> scope even though this cell renders months and years. Selected uses <code>main/date-picker/day/color/selected/*</code>; Default/Today use <code>main/date-picker/day/color/unselected/*</code> plus the shared primary text and border tokens for the ring and label. The scope name is a mismatch — flagged as C3.",
        "columns": [
          "Token",
          "VALUE"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/unselected/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "Default",
            "token": "label",
            "values": [
              "main/date-picker/day/color/unselected/label",
              "#0A2757"
            ]
          },
          {
            "role": "Today",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/unselected/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "Today",
            "token": "border",
            "values": [
              "border/color-border-primary",
              "#005CE5 (1px)"
            ]
          },
          {
            "role": "Today",
            "token": "label",
            "values": [
              "text/color-text-primary",
              "#005CE5"
            ]
          },
          {
            "role": "Selected",
            "token": "bg",
            "values": [
              "main/date-picker/day/color/selected/bg",
              "#005CE5"
            ]
          },
          {
            "role": "Selected",
            "token": "label",
            "values": [
              "main/date-picker/day/color/selected/label",
              "#FFFFFF"
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
            "token": "100 × 32",
            "values": []
          },
          {
            "role": "Corner radius",
            "token": "8px (radius/radius-3)",
            "values": []
          },
          {
            "role": "Padding",
            "token": "10px top, 8px bottom, 12px horizontal",
            "values": []
          },
          {
            "role": "Label gap",
            "token": "4px (space/space-4)",
            "values": []
          },
          {
            "role": "Today border",
            "token": "1px solid",
            "values": []
          },
          {
            "role": "Grid gap (month view 4×3)",
            "token": "per Date Picker - Group",
            "values": []
          },
          {
            "role": "Grid gap (year view 4×5)",
            "token": "per Date Picker - Group",
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
            "role": "Default / Today",
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
            "role": "Selected",
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
          "compose": "yearContentColor / monthContentColor"
        },
        {
          "figma": "Type=Today",
          "swift": ".accentColor / automatic current-year marker",
          "compose": "currentYearContentColor"
        },
        {
          "figma": "Type=Selected",
          "swift": ".tint (via selection binding)",
          "compose": "selectedYearContainerColor / selectedYearContentColor"
        },
        {
          "figma": "(missing) Disabled",
          "swift": "in: Date... range parameter",
          "compose": "yearRange / selectableDates"
        },
        {
          "figma": "(missing) Pressed / Focused",
          "swift": "—",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/DatePicker/EBPickerCell.swift · kind: month | year",
        "compose": "android/components/datepicker/EBPickerCell.kt · kind: Month | Year"
      }
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Touch target (44 × 44 min)",
        "ios": "Figma cell is 100 × 32 — native picker extends vertical hit area",
        "android": "Figma cell is 100 × 32 — native picker extends vertical hit area"
      },
      {
        "requirement": "Screen reader label",
        "ios": "VoiceOver: \"March, Month\" / \"2026, Year\" (from <code>DatePicker</code>)",
        "android": "TalkBack: \"March\" / \"2026\" with \"selected\" state"
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
        "doText": "Treat this cell as a visual reference for how the native picker's month and year views should look in GCash theme — colors, ring thickness, radius, and label weight.",
        "dontText": "Don't ship a standalone EBMonthYearPickerItem composable. Native pickers render their own month/year cells; a custom cell composable has no slot to plug into."
      },
      {
        "doText": "If you genuinely need a custom month/year grid, merge with Date Picker - Item into a unified PickerCell(kind:, state:) and compose it inside a custom grid.",
        "dontText": "Don't maintain Date Picker - Item and Month and Year Picker - Item as siblings — they're the same primitive at different sizes."
      },
      {
        "doText": "Rely on the native picker for locale-aware month names, era handling, VoiceOver / TalkBack, and minDate/maxDate enforcement on both the month and year axes.",
        "dontText": "Don't draw disabled months/years manually. Pass an in: range (SwiftUI) or selectableDates (Compose) and let the platform dim them."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Sibling-duplication with Date Picker - Item. Inner frame named <code>Month</code> even when used as the year cell."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Narrower state axis than the sibling day cell — single <code>Type</code> axis with no <code>State</code>. Cells in the same family should share state shape."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All values are token-bound, but tokens are scoped <code>main/date-picker/day/*</code> on a cell that renders months and years. Rename to <code>main/date-picker/cell/*</code> or split per kind."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Native pickers own the month/year view and don't accept a custom cell view. Reference-only unless merged into a custom <code>PickerCell</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Disabled, no Pressed, no Focused, no Today + Selected. Single-axis variant matrix with no State dimension."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No raster assets. But Today ring is 1px here vs 1.5px on the sibling day cell — should be one shared token."
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
        "notes": "Add a <code>State</code> axis; align with day cell shape or merge into <code>PickerCell</code>."
      },
      {
        "aspect": "Family unification",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Merge with Date Picker - Item into <code>PickerCell</code> with <code>kind: day | month | year</code>."
      },
      {
        "aspect": "Token scope",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>main/date-picker/day/*</code> to <code>main/date-picker/cell/*</code> (or split per kind)."
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No standalone composable — native <code>DatePicker</code> renders month/year cells. Only materialize <code>EBPickerCell</code> if a custom grid is ever built."
      },
      {
        "aspect": "Recommendation",
        "status": "empty",
        "statusLabel": "Consolidate",
        "notes": "Merge into PickerCell, mark as reference spec for the native picker's month/year view."
      }
    ],
    "variants": {
      "total": 3,
      "description": "3 variants on a single <code>Type</code> axis. The sibling day cell has 7 variants on <code>Type × State</code> — this cell lacks the <code>State</code> dimension entirely.",
      "columns": [
        "Type",
        "Dimensions",
        "Emphasis",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "100 × 32",
            "none",
            "18414:5851"
          ]
        },
        {
          "cells": [
            "Today",
            "100 × 32",
            "1px blue border",
            "18414:5852"
          ]
        },
        {
          "cells": [
            "Selected",
            "100 × 32",
            "solid blue fill, white bold label",
            "18414:5853"
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
      "header": "Initial Assessment · node 18414:5854",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants on a single <code>Type</code> axis. 100×32 rounded-rect cell with token-bound colors, spacing, radius, and typography.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Sibling duplication with Date Picker - Item</strong> — Same selectable-cell primitive at different sizes. Proposal: collapse both into <code>Picker Cell</code> with <code>kind: day | month | year</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Inner frame named <code>Month</code> across all variants</strong> — Same component instance-swapped as both month and year cell; layer name is inaccurate for year instances.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>State axis narrower than sibling day cell</strong> — Single <code>Type</code> axis only. No <code>State</code> dimension, so Disabled / Pressed / Focused are all missing. Cells in the same family should share state shape.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Tokens scoped <code>main/date-picker/day/*</code> used for non-day cell</strong> — Bg and label tokens are named <code>day</code> but style months and years. Rename to <code>main/date-picker/cell/*</code> or split per <code>kind</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>No native primitive for a month/year cell</strong> — Native <code>DatePicker</code> renders its own month/year cells on both platforms. Reference-only unless a custom grid is built.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Disabled / Pressed / Focused / Today+Selected missing</strong> — No <code>State</code> axis published at all. The common \"today is also selected\" combination is undefined.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Today ring thickness drifts from sibling day cell</strong> — 1px here vs 1.5px on Date Picker - Item. Align on one shared stroke token per Picker Cell kind.\n          <span class=\"tag-open\">Open</span>",
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
