import type { ComponentData } from '../types';

export const datePicker: ComponentData = {
  "meta": {
    "slug": "date-picker",
    "name": "Date Picker",
    "node": "12879:49826",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=12879-49826",
    "description": "The full calendar UI used to pick a date — header, weekday row, and a 7×6 day grid.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Date Picker"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"20\" y=\"22\" font-size=\"6\" fill=\"currentColor\" opacity=\".15\" font-family=\"system-ui\">Date of Birth</text>\n          <rect x=\"20\" y=\"26\" width=\"80\" height=\"12\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"24\" y=\"31\" width=\"30\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"86\" y=\"28\" width=\"10\" height=\"8\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\".8\" opacity=\".25\"></rect>\n          <line x1=\"86\" y1=\"31\" x2=\"96\" y2=\"31\" stroke=\"currentColor\" stroke-width=\".8\" opacity=\".25\"></line>\n          <rect x=\"20\" y=\"42\" width=\"80\" height=\"22\" rx=\"3\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <text x=\"32\" y=\"52\" font-size=\"5\" fill=\"currentColor\" opacity=\".2\" font-family=\"system-ui\">March 2026</text>\n          <g opacity=\".15\" fill=\"currentColor\">\n            <circle cx=\"28\" cy=\"58\" r=\"1.5\"></circle><circle cx=\"38\" cy=\"58\" r=\"1.5\"></circle><circle cx=\"48\" cy=\"58\" r=\"1.5\"></circle><circle cx=\"58\" cy=\"58\" r=\"1.5\"></circle><circle cx=\"68\" cy=\"58\" r=\"1.5\"></circle><circle cx=\"78\" cy=\"58\" r=\"1.5\"></circle><circle cx=\"88\" cy=\"58\" r=\"1.5\"></circle>\n          </g>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dp-demo-preview\"><svg width=\"360\" height=\"68\" viewBox=\"0 0 360 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"dpShadow\" x=\"-4\" y=\"64\" width=\"368\" height=\"370\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"359\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\">Value</text><rect x=\"328\" y=\"31\" width=\"20\" height=\"20\" rx=\"3\" stroke=\"#005CE5\" stroke-width=\"1.6\" fill=\"none\"></rect><line x1=\"328\" y1=\"37\" x2=\"348\" y2=\"37\" stroke=\"#005CE5\" stroke-width=\"1.6\"></line><line x1=\"333\" y1=\"28\" x2=\"333\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"343\" y1=\"28\" x2=\"343\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"_dpDemo.state=this.value;updateDatePickerDemo()\"><option value=\"Default\">Default</option><option value=\"Active\">Active</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_dpDemo.filled=this.value;updateDatePickerDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isDisabled</span><select class=\"demo-panel-select\" onchange=\"_dpDemo.disabled=this.value;updateDatePickerDemo()\"><option value=\"Yes\">Yes</option><option value=\"No\" selected=\"\">No</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Trigger is generic enough for any date field context. Re-use is limited because the calendar panel is bundled inline — consumers can't show the trigger without the whole calendar, and can't show the calendar without the trigger."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Carries its own tokens for trigger states, but no Error state despite sibling Select Field having one. Calendar glyph is a raster image reference, not a DS icon instance."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>isDisabled</code> uses <code>Yes/No</code> (should be <code>true/false</code>). Axis design is ambiguous — Disabled is conceptually a state, not orthogonal to State, yielding 5 usable of 8 combinations. Diverges from Input Field / Select Field pattern which use a single <code>State</code> enum including <code>Disabled</code>."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Calendar popover (Date Picker - Group) is composed inline, not as a separate overlay with its own positioning. Cannot be swapped for a sheet, bottom sheet, or native dialog. Blocks 1:1 mapping to SwiftUI <code>DatePicker</code> / Compose <code>DatePickerDialog</code>."
      }
    ],
    "behavior": [
      {
        "state": "Default (empty)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isFilled=false",
        "notes": "Gray #D7E0EF border. Placeholder \"Value\" #90A8D0."
      },
      {
        "state": "Default (filled)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isFilled=true",
        "notes": "Gray border, selected date shown in #0A2757."
      },
      {
        "state": "Active (opening — empty)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Active, isFilled=false",
        "notes": "Blue #005CE5 2px border. Inline calendar panel attached below."
      },
      {
        "state": "Active (filled)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Active, isFilled=true",
        "notes": "Blue border, filled value, calendar visible."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "isDisabled=Yes",
        "notes": "Gray #EEF2F9 bg. Value #90A8D0. No border. Calendar glyph dims."
      },
      {
        "state": "Error",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Sibling Select/Input Field both support Error — must be added for validation flows (e.g. \"Enter a valid birth date\")."
      },
      {
        "state": "Pressed",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Touch feedback expected on both platforms."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Layer naming inconsistent with sibling fields.",
        "body": "Trigger frame is named <code>Select Field</code> and its inner <code>container</code> / <code>text-container</code> are generic — but the component itself is <code>Date Picker</code>. The Date Picker - Group popover has layer names like <code>row</code>, <code>Monday</code>...<code>Saturday</code> (day-of-week labels as layer names rather than semantic roles). Normalize to kebab-case semantic names.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>isDisabled</code> uses <code>Yes/No</code>, <code>isFilled</code> uses <code>False/True</code>.",
        "body": "Should be lowercase <code>true/false</code> for direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping. Inconsistent casing between the two booleans also breaks Code Connect naming uniformity.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Axis design produces invalid combinations.",
        "body": "<code>State × isFilled × isDisabled</code> is a 2×2×2=8 matrix but only 5 combinations exist because Disabled collapses State. Siblings (Input Field, Select Field) use a single <code>State</code> enum including <code>Disabled</code> — Date Picker should follow that pattern.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Calendar popover is composed inline, not as an overlay.",
        "body": "Date Picker - Group is nested inside the trigger's stack and positioned absolutely — it cannot be swapped for a sheet or presented by the native date dialog. SwiftUI <code>DatePicker</code> and Compose <code>DatePickerDialog</code> both expect the trigger and the picker to be separable.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No Error state.",
        "body": "Input Field, Select Field, and Dropdown all support Error; Date Picker does not. Birth-date and expiry flows routinely need inline validation (\"Must be 18+\", \"Date can't be in the past\").",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No Pressed state.",
        "body": "Standard tap feedback (iOS highlight, Android ripple) is missing. Consumers improvise it per-screen.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Calendar glyph is a raster <code>shape_full</code> image.",
        "body": "The trigger icon pulls from an MCP asset URL rather than a vector icon instance. Won't scale cleanly, won't inherit state tokens, can't be swapped.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked by C1/C2/C4/C5/C6 above.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Family — Unify the two cell primitives.",
        "body": "<code>Date Picker - Item</code> (day cells) and <code>Month and Year Picker - Item</code> (month/year cells) are both selectable cells with identical state semantics (Default/Today/Selected/Disabled). Only size + typography differ. Propose one <code>Picker Cell</code> component with axes <code>kind: day | month | year</code> + <code>state: default | today | selected | disabled</code>. Reduces 10 variants across 2 components to 1 component with 2 clean axes.",
        "tag": "Family"
      },
      {
        "headline": "Composition — Wrap the native date pickers instead of redrawing them.",
        "body": "iOS: <code>DatePicker(selection:, displayedComponents:)</code> with <code>.datePickerStyle(.graphical|.compact|.wheel|.field)</code>. Android: Material 3 <code>DatePicker</code> + <code>DatePickerDialog</code>. The DS <code>EBDatePicker</code> should be a thin wrapper that tokenizes the trigger and cells to match brand — not a from-scratch calendar redraw in Figma. Keeps accessibility, localization, and leap-year logic native.",
        "tag": "Composition"
      },
      {
        "headline": "Field-trigger consistency — Unify with Input Field as <code>type: .date</code>.",
        "body": "Structurally this is an Input Field with a date value display + calendar glyph. Matches SwiftUI <code>TextField(value:, format: .date)</code> / Compose <code>OutlinedTextField(readOnly=true) + DatePickerDialog</code>. Consolidates a fragmented field family and inherits Input Field's Error state, label slot, and helper text.",
        "tag": "Family"
      },
      {
        "headline": "Collapse <code>State × isFilled × isDisabled</code> into a single <code>state</code> enum.",
        "body": "Target schema: <code>state: default | active | error | disabled</code> + <code>isFilled: true | false</code>. Matches Input Field (8 variants from 4×2). Removes the 3 invalid combinations in the current matrix and aligns with the rest of the Form Elements family.",
        "tag": "Property"
      },
      {
        "headline": "Separate the calendar panel from the trigger.",
        "body": "Move Date Picker - Group to a true overlay component (top-anchored, dismissible, shadow-elevated) rather than an inline child of the trigger. Lets the trigger be used alone (e.g. inline text input mode) and lets the panel be presented by either a dropdown or a sheet depending on context.",
        "tag": "Composition"
      },
      {
        "headline": "Add Error and Pressed states.",
        "body": "Error: red border + subtext (mirror Input Field tokens). Pressed: slight bg tint for tap feedback. Required for form accessibility and parity with the rest of Form Elements.",
        "tag": "State"
      },
      {
        "headline": "Replace the calendar raster with a vector icon instance.",
        "body": "Use the existing DS calendar icon (if present) or add one to the icon library. Color-bind to <code>selected-field/color/{state}/icon</code> so it dims with Disabled automatically.",
        "tag": "Asset"
      },
      {
        "headline": "Rename booleans to lowercase <code>true/false</code>.",
        "body": "<code>isDisabled=Yes/No</code> to <code>isDisabled=true/false</code>; <code>isFilled=False/True</code> to <code>isFilled=false/true</code>. Consistent with the naming convention adopted by Input Field.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "dp-spec-default-empty",
        "title": "Default — Empty",
        "node": "12879:49784",
        "description": "Idle trigger with gray border and placeholder text. Calendar glyph visible on the right.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "filled",
                "value": "false",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Empty placeholder",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Field bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Field bg token",
                "value": "selected-field/color/default/bg",
                "mono": true
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Field border token",
                "value": "selected-field/color/default/border",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/color/default/placeholder",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/color/default/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/color/default/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>$selectedDate<span class=\"syn-punc\">, </span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Select a date\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> selectedDate<span class=\"syn-punc\">,</span>\n    onDateChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select a date\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"68\" viewBox=\"0 0 360 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"dpShadow\" x=\"-4\" y=\"64\" width=\"368\" height=\"370\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"359\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\">Value</text><rect x=\"328\" y=\"31\" width=\"20\" height=\"20\" rx=\"3\" stroke=\"#005CE5\" stroke-width=\"1.6\" fill=\"none\"></rect><line x1=\"328\" y1=\"37\" x2=\"348\" y2=\"37\" stroke=\"#005CE5\" stroke-width=\"1.6\"></line><line x1=\"333\" y1=\"28\" x2=\"333\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"343\" y1=\"28\" x2=\"343\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line></svg>"
      },
      {
        "cardKey": "dp-spec-default-filled",
        "title": "Default — Filled",
        "node": "12890:42872",
        "description": "Trigger showing a selected date. Gray border, filled text color #0A2757.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "filled",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Selected date",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Field bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Field bg token",
                "value": "selected-field/color/default/bg",
                "mono": true
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Field border token",
                "value": "selected-field/color/default/border",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/color/default/placeholder",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/color/default/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/color/default/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>$selectedDate<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> selectedDate<span class=\"syn-punc\">,</span>\n    onDateChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"68\" viewBox=\"0 0 360 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"dpShadow\" x=\"-4\" y=\"64\" width=\"368\" height=\"370\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"359\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">03/05/2026</text><rect x=\"328\" y=\"31\" width=\"20\" height=\"20\" rx=\"3\" stroke=\"#005CE5\" stroke-width=\"1.6\" fill=\"none\"></rect><line x1=\"328\" y1=\"37\" x2=\"348\" y2=\"37\" stroke=\"#005CE5\" stroke-width=\"1.6\"></line><line x1=\"333\" y1=\"28\" x2=\"333\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"343\" y1=\"28\" x2=\"343\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line></svg>"
      },
      {
        "cardKey": "dp-spec-active-empty",
        "title": "Active — Empty",
        "node": "12879:49827",
        "description": "Trigger focused with 2px blue border. Inline calendar panel attached below showing month header, weekday row, and date grid.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Active",
                "mono": false
              },
              {
                "key": "filled",
                "value": "false",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Picker open · empty",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Field bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Field bg token",
                "value": "selected-field/color/active/bg",
                "mono": true
              },
              {
                "key": "Field border",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Field border token",
                "value": "selected-field/color/active/border",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/color/active/placeholder",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/color/active/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/color/active/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>$selectedDate<span class=\"syn-punc\">, </span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Select a date\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebFocused</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> selectedDate<span class=\"syn-punc\">,</span>\n    onDateChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    focused <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"430\" viewBox=\"0 0 360 430\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"dpShadow\" x=\"-4\" y=\"64\" width=\"368\" height=\"370\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"359\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"2\"></rect><text x=\"12\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\">Value</text><rect x=\"328\" y=\"31\" width=\"20\" height=\"20\" rx=\"3\" stroke=\"#005CE5\" stroke-width=\"1.6\" fill=\"none\"></rect><line x1=\"328\" y1=\"37\" x2=\"348\" y2=\"37\" stroke=\"#005CE5\" stroke-width=\"1.6\"></line><line x1=\"333\" y1=\"28\" x2=\"333\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"343\" y1=\"28\" x2=\"343\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><rect x=\"0\" y=\"70\" width=\"360\" height=\"358\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\" filter=\"url(#dpShadow)\"></rect><path d=\"M20 94l-5 5 5 5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path><text x=\"180\" y=\"103\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"700\" fill=\"#0A2757\">Month / Year</text><path d=\"M340 94l5 5-5 5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path><text x=\"39.42857142857143\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">Su</text><text x=\"86.28571428571428\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">M</text><text x=\"133.14285714285714\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">T</text><text x=\"179.99999999999997\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">W</text><text x=\"226.85714285714283\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">Th</text><text x=\"273.7142857142857\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">F</text><text x=\"320.57142857142856\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">Sa</text><text x=\"39.42857142857143\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">1</text><text x=\"86.28571428571428\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">2</text><text x=\"133.14285714285714\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">3</text><text x=\"179.99999999999997\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">4</text><circle cx=\"226.85714285714283\" cy=\"168\" r=\"14\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"></circle><text x=\"226.85714285714283\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#005CE5\">5</text><text x=\"273.7142857142857\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">6</text><text x=\"320.57142857142856\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">7</text><text x=\"39.42857142857143\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">8</text><text x=\"86.28571428571428\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">9</text><text x=\"133.14285714285714\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">10</text><text x=\"179.99999999999997\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">11</text><text x=\"226.85714285714283\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">12</text><text x=\"273.7142857142857\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">13</text><text x=\"320.57142857142856\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">14</text><text x=\"39.42857142857143\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">15</text><text x=\"86.28571428571428\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">16</text><text x=\"133.14285714285714\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">17</text><text x=\"179.99999999999997\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">18</text><text x=\"226.85714285714283\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">19</text><text x=\"273.7142857142857\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">20</text><text x=\"320.57142857142856\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">21</text><text x=\"39.42857142857143\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">22</text><text x=\"86.28571428571428\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">23</text><text x=\"133.14285714285714\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">24</text><text x=\"179.99999999999997\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">25</text><text x=\"226.85714285714283\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">26</text><text x=\"273.7142857142857\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">27</text><text x=\"320.57142857142856\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">28</text><text x=\"39.42857142857143\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">29</text><text x=\"86.28571428571428\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">30</text><text x=\"133.14285714285714\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">31</text><text x=\"179.99999999999997\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">1</text><text x=\"226.85714285714283\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">2</text><text x=\"273.7142857142857\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">3</text><text x=\"320.57142857142856\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">4</text></svg>"
      },
      {
        "cardKey": "dp-spec-active-filled",
        "title": "Active — Filled",
        "node": "13342:9932",
        "description": "Trigger focused with 2px blue border and filled value. Calendar visible with the selected day highlighted in the grid.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Active",
                "mono": false
              },
              {
                "key": "filled",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Picker open · with value",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Field bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Field bg token",
                "value": "selected-field/color/active/bg",
                "mono": true
              },
              {
                "key": "Field border",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Field border token",
                "value": "selected-field/color/active/border",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "selected-field/color/active/placeholder",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/color/active/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/color/active/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>$selectedDate<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebFocused</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> selectedDate<span class=\"syn-punc\">,</span>\n    onDateChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    focused <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"430\" viewBox=\"0 0 360 430\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"dpShadow\" x=\"-4\" y=\"64\" width=\"368\" height=\"370\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"359\" height=\"45\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"2\"></rect><text x=\"12\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">03/05/2026</text><rect x=\"328\" y=\"31\" width=\"20\" height=\"20\" rx=\"3\" stroke=\"#005CE5\" stroke-width=\"1.6\" fill=\"none\"></rect><line x1=\"328\" y1=\"37\" x2=\"348\" y2=\"37\" stroke=\"#005CE5\" stroke-width=\"1.6\"></line><line x1=\"333\" y1=\"28\" x2=\"333\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"343\" y1=\"28\" x2=\"343\" y2=\"32\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><rect x=\"0\" y=\"70\" width=\"360\" height=\"358\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\" filter=\"url(#dpShadow)\"></rect><path d=\"M20 94l-5 5 5 5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path><text x=\"180\" y=\"103\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"700\" fill=\"#0A2757\">Month / Year</text><path d=\"M340 94l5 5-5 5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path><text x=\"39.42857142857143\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">Su</text><text x=\"86.28571428571428\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">M</text><text x=\"133.14285714285714\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">T</text><text x=\"179.99999999999997\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">W</text><text x=\"226.85714285714283\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">Th</text><text x=\"273.7142857142857\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">F</text><text x=\"320.57142857142856\" y=\"142\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\">Sa</text><text x=\"39.42857142857143\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">1</text><text x=\"86.28571428571428\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">2</text><text x=\"133.14285714285714\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">3</text><text x=\"179.99999999999997\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">4</text><circle cx=\"226.85714285714283\" cy=\"168\" r=\"14\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"></circle><text x=\"226.85714285714283\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#005CE5\">5</text><text x=\"273.7142857142857\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">6</text><text x=\"320.57142857142856\" y=\"173\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">7</text><text x=\"39.42857142857143\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">8</text><text x=\"86.28571428571428\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">9</text><text x=\"133.14285714285714\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">10</text><text x=\"179.99999999999997\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">11</text><text x=\"226.85714285714283\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">12</text><text x=\"273.7142857142857\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">13</text><text x=\"320.57142857142856\" y=\"213\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">14</text><text x=\"39.42857142857143\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">15</text><text x=\"86.28571428571428\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">16</text><text x=\"133.14285714285714\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">17</text><text x=\"179.99999999999997\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">18</text><text x=\"226.85714285714283\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">19</text><text x=\"273.7142857142857\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">20</text><text x=\"320.57142857142856\" y=\"253\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">21</text><text x=\"39.42857142857143\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">22</text><text x=\"86.28571428571428\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">23</text><text x=\"133.14285714285714\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">24</text><text x=\"179.99999999999997\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">25</text><text x=\"226.85714285714283\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">26</text><text x=\"273.7142857142857\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">27</text><text x=\"320.57142857142856\" y=\"293\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">28</text><text x=\"39.42857142857143\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">29</text><text x=\"86.28571428571428\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">30</text><text x=\"133.14285714285714\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">31</text><text x=\"179.99999999999997\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">1</text><text x=\"226.85714285714283\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">2</text><text x=\"273.7142857142857\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">3</text><text x=\"320.57142857142856\" y=\"333\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#C2CFE5\">4</text></svg>"
      },
      {
        "cardKey": "dp-spec-disabled",
        "title": "Disabled",
        "node": "13342:10148",
        "description": "Non-interactive. Gray #EEF2F9 bg, no border, value dims to #90A8D0. Calendar glyph dims. Only isFilled=true is defined in Disabled.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Disabled",
                "mono": false
              },
              {
                "key": "filled",
                "value": "false",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Disabled",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Field bg",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Field bg token",
                "value": "selected-field/color/disabled/bg",
                "mono": true
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Field border token",
                "value": "selected-field/color/default/border",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "selected-field/color/disabled/value",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#9BC5FD",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "selected-field/color/disabled/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>$selectedDate<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> selectedDate<span class=\"syn-punc\">,</span>\n    onDateChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"68\" viewBox=\"0 0 360 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"dpShadow\" x=\"-4\" y=\"64\" width=\"368\" height=\"370\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><text x=\"2\" y=\"12\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"359\" height=\"45\" rx=\"5.5\" fill=\"#EEF2F9\"></rect><text x=\"12\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\">03/05/2026</text><rect x=\"328\" y=\"31\" width=\"20\" height=\"20\" rx=\"3\" stroke=\"#9BC5FD\" stroke-width=\"1.6\" fill=\"none\"></rect><line x1=\"328\" y1=\"37\" x2=\"348\" y2=\"37\" stroke=\"#9BC5FD\" stroke-width=\"1.6\"></line><line x1=\"333\" y1=\"28\" x2=\"333\" y2=\"32\" stroke=\"#9BC5FD\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"343\" y1=\"28\" x2=\"343\" y2=\"32\" stroke=\"#9BC5FD\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Trigger colors reuse the <code>selected-field</code> token family (shared with Dropdown and Select Field). Calendar panel uses dedicated <code>date-picker</code> tokens.",
        "columns": [
          "DEFAULT",
          "ACTIVE",
          "DISABLED"
        ],
        "rows": [
          {
            "role": "Trigger border",
            "token": "selected-field/color/{state}/border",
            "values": [
              "#D7E0EF",
              "#005CE5 (2px)",
              "hidden"
            ]
          },
          {
            "role": "Trigger bg",
            "token": "selected-field/color/{state}/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#EEF2F9"
            ]
          },
          {
            "role": "Value (filled)",
            "token": "selected-field/color/{state}/value",
            "values": [
              "#0A2757",
              "#0A2757",
              "#90A8D0"
            ]
          },
          {
            "role": "Placeholder",
            "token": "selected-field/color/{state}/placeholder",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "–"
            ]
          },
          {
            "role": "Calendar icon",
            "token": "selected-field/color/{state}/icon",
            "values": [
              "#005CE5",
              "#005CE5",
              "#9BC5FD"
            ]
          },
          {
            "role": "Header label",
            "token": "formgroup-header/color/label",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Panel bg",
            "token": "date-picker/month-header/color/bg",
            "values": [
              "–",
              "#FFFFFF",
              "–"
            ]
          },
          {
            "role": "Panel border",
            "token": "date-picker/month-header/color/border",
            "values": [
              "–",
              "#E5EBF4",
              "–"
            ]
          },
          {
            "role": "Panel shadow",
            "token": "elevation/app/shadow",
            "values": [
              "–",
              "0 6px 12px rgba(2,14,34,.16)",
              "–"
            ]
          },
          {
            "role": "Month label",
            "token": "date-picker/month-header/color/label",
            "values": [
              "–",
              "#0A2757",
              "–"
            ]
          },
          {
            "role": "Month chevron",
            "token": "date-picker/month-header/color/icon",
            "values": [
              "–",
              "#005CE5",
              "–"
            ]
          },
          {
            "role": "Weekday label",
            "token": "date-picker/week-header/color/label",
            "values": [
              "–",
              "#0A2757",
              "–"
            ]
          },
          {
            "role": "Day (unselected)",
            "token": "date-picker/day/color/unselected/label",
            "values": [
              "–",
              "#0A2757",
              "–"
            ]
          },
          {
            "role": "Day (today border)",
            "token": "border/color-border-primary",
            "values": [
              "–",
              "#005CE5 (1.5px)",
              "–"
            ]
          },
          {
            "role": "Day (prev/next month)",
            "token": "text/color-text-disabled",
            "values": [
              "–",
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
            "role": "Component width",
            "token": "360px (fixed)",
            "values": []
          },
          {
            "role": "Trigger height",
            "token": "46px",
            "values": []
          },
          {
            "role": "Trigger height (Active, empty)",
            "token": "46px (border 2px inset)",
            "values": []
          },
          {
            "role": "Corner radius (trigger)",
            "token": "6px (radius/radius-2)",
            "values": []
          },
          {
            "role": "Trigger padding",
            "token": "6px top, 8px bottom, 12px horizontal",
            "values": []
          },
          {
            "role": "Calendar icon size",
            "token": "32 × 32 (glyph ~24 × 25 inside)",
            "values": []
          },
          {
            "role": "Panel padding",
            "token": "16px all sides",
            "values": []
          },
          {
            "role": "Panel corner radius",
            "token": "8px top-left/top-right, 6px bottom-left/bottom-right",
            "values": []
          },
          {
            "role": "Panel gap (rows)",
            "token": "8px",
            "values": []
          },
          {
            "role": "Day cell size",
            "token": "32 × 32",
            "values": []
          },
          {
            "role": "Day cell radius",
            "token": "30px (pill)",
            "values": []
          },
          {
            "role": "Month chevron size",
            "token": "24 × 24",
            "values": []
          },
          {
            "role": "Header label padding-bottom",
            "token": "8px",
            "values": []
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Tracking",
          "Line-height"
        ],
        "rows": [
          {
            "role": "Header label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Trigger value / placeholder",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Month / Year label",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold",
              "18px",
              "0.25px",
              "18px"
            ]
          },
          {
            "role": "Weekday label",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Day label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "0.25px",
              "14px"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:date-picker:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.datepicker.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. The recommendation is to wrap native date pickers rather than redraw them."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "State = Default",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "State = Active",
          "swift": "isPresented: Binding&lt;Bool&gt;",
          "compose": "showPicker: Boolean"
        },
        {
          "figma": "isFilled (False/True)",
          "swift": "selection: Binding&lt;Date?&gt;",
          "compose": "selectedDate: LocalDate?"
        },
        {
          "figma": "isDisabled (Yes/No)",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "label (formgroup-header)",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "subtext (optional)",
          "swift": "helperText: String?",
          "compose": "helperText: String?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/DatePicker/EBDatePicker.swift",
        "compose": "android/components/datepicker/EBDatePicker.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBDatePicker</span>(<span class=\"str\">\"Date of Birth\"</span>, <span class=\"prp\">selection</span>: $birthDate)",
        "compose": "<span class=\"typ\">EBDatePicker</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Date of Birth\"</span>,\n    <span class=\"prp\">selectedDate</span> = birthDate,\n    <span class=\"prp\">onDateSelected</span> = { birthDate = it }\n)"
      },
      {
        "subheading": "With Helper Text",
        "swift": "<span class=\"typ\">EBDatePicker</span>(<span class=\"str\">\"Date of Birth\"</span>, <span class=\"prp\">selection</span>: $birthDate)\n    .<span class=\"fn\">ebHelperText</span>(<span class=\"str\">\"You must be 18 or older\"</span>)",
        "compose": "<span class=\"typ\">EBDatePicker</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Date of Birth\"</span>,\n    <span class=\"prp\">selectedDate</span> = birthDate,\n    <span class=\"prp\">onDateSelected</span> = { birthDate = it },\n    <span class=\"prp\">helperText</span> = <span class=\"str\">\"You must be 18 or older\"</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBDatePicker</span>(<span class=\"str\">\"Date of Birth\"</span>, <span class=\"prp\">selection</span>: $birthDate)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBDatePicker</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Date of Birth\"</span>,\n    <span class=\"prp\">selectedDate</span> = birthDate,\n    <span class=\"prp\">onDateSelected</span> = { birthDate = it },\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 × 44 pt",
        "android": "48 × 48 dp"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Date of Birth\")</code>",
        "android": "<code>contentDescription = \"Date of Birth\"</code>"
      },
      {
        "requirement": "Selected value",
        "ios": "<code>.accessibilityValue(formattedDate)</code>",
        "android": "<code>semantics { stateDescription }</code>"
      },
      {
        "requirement": "Role",
        "ios": "VoiceOver announces as date picker",
        "android": "TalkBack announces via <code>Role.Button</code> + expanded state"
      },
      {
        "requirement": "Localization",
        "ios": "Native <code>DatePicker</code> respects locale calendar",
        "android": "Native <code>DatePickerDialog</code> respects locale calendar"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Wrap the native DatePicker / DatePickerDialog so accessibility, localization, and leap-year logic are handled by the OS.",
        "dontText": "Redraw the calendar grid from scratch — the Figma calendar is a visual spec, not a reimplementation target."
      },
      {
        "doText": "Pair the trigger with a visible label above it. Use helper text to clarify expected range (\"Pick a future date\").",
        "dontText": "Use the trigger as a free-text date field — it's for picking from the panel, not typing. If free-entry is required, use Input Field with a date format."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Trigger reuses <code>Select Field</code> / <code>container</code> / <code>text-container</code>. Day cell rows use weekday names (<code>Monday</code>…<code>Saturday</code>) as layer names."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isDisabled=Yes/No</code>, <code>isFilled=False/True</code>. Inconsistent casing. Axis design yields 5 of 8 combinations."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>selected-field</code> and <code>date-picker</code> tokens. Spacing and radius tokens consistent."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Inline calendar panel blocks mapping to native <code>DatePicker</code> / <code>DatePickerDialog</code>. Must be separable."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Error state (siblings have it). No Pressed state."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Calendar glyph is a raster <code>shape_full</code> image. Month chevrons use <code>shape_full</code> images as well."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C1/C2/C4/C5/C6."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isDisabled</code>/<code>isFilled</code> need lowercase boolean values"
      },
      {
        "aspect": "Axis design",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Collapse to single <code>state</code> enum matching Input/Select Field pattern"
      },
      {
        "aspect": "Composition",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Calendar panel must be separable to map native dialog/sheet"
      },
      {
        "aspect": "Asset quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Calendar glyph + chevrons must be vector icons"
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Error and Pressed states missing"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBDatePicker.swift / EBDatePicker.kt not yet created"
      }
    ],
    "variants": {
      "total": 5,
      "description": "Declared as a 2×2×2 matrix (<code>State × isFilled × isDisabled</code>) but only 5 combinations exist — Disabled collapses both State and isFilled=false into a single variant.",
      "columns": [
        "State",
        "isFilled",
        "isDisabled",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "false",
            "No",
            "12879:49784"
          ]
        },
        {
          "cells": [
            "Default",
            "true",
            "No",
            "12890:42872"
          ]
        },
        {
          "cells": [
            "Active",
            "false",
            "No",
            "12879:49827"
          ]
        },
        {
          "cells": [
            "Active",
            "true",
            "No",
            "13342:9932"
          ]
        },
        {
          "cells": [
            "Default",
            "true",
            "Yes",
            "13342:10148"
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
      "header": "Initial Assessment · node 12879:49826",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 5 usable variants documented across <code>State × isFilled × isDisabled</code>. Field-shaped trigger with inline calendar panel on Active. Lead component of the Date Picker family.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Axis design produces invalid combinations</strong> — 2×2×2 matrix yields only 5 of 8 possible variants. Should collapse to a single <code>state</code> enum like Input/Select Field.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Boolean casing inconsistent</strong> — <code>isDisabled=Yes/No</code> and <code>isFilled=False/True</code>. Both need lowercase <code>true/false</code> for Code Connect.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Calendar panel nested in trigger</strong> — Date Picker - Group is composed inline rather than being a separate overlay. Blocks mapping to native <code>DatePicker</code> / <code>DatePickerDialog</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>No Error or Pressed state</strong> — Siblings (Input Field, Select Field, Dropdown) have Error. Pressed is required for touch feedback parity.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Calendar glyph is a raster image</strong> — <code>shape_full</code> image reference, not a vector icon instance. Month chevrons also use raster <code>shape_full</code> assets.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. Blocked by C1/C2/C4/C5/C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
