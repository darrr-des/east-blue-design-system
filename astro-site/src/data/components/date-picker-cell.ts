import type { ComponentData, DemoControlSection } from '../types';
import { buildInteractiveColorsTable } from './_helpers';

/* One card per Kind. Role and Selection are the axes worth exercising;
   isDisabled rides along on both. */
const dayControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Role',
        prop: 'role',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'today', label: 'Today' },
          { value: 'prev-next', label: 'Prev-Next' }
        ]
      },
      {
        label: 'Selection',
        prop: 'selection',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'selected', label: 'Selected' },
          { value: 'range-start', label: 'Range-Start' },
          { value: 'range-middle', label: 'Range-Middle' },
          { value: 'range-end', label: 'Range-End' }
        ]
      },
      {
        label: 'isDisabled',
        prop: 'disabled',
        control: 'toggle' as const,
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "Day",
        prop: "day",
        control: 'input' as const,
        defaultValue: "1",
        options: []
      }
    ]
  }
];

const monthYearControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Role',
        prop: 'role',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'today', label: 'Today' }
        ]
      },
      {
        label: 'Selection',
        prop: 'selection',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'selected', label: 'Selected' }
        ]
      },
      {
        label: 'isDisabled',
        prop: 'disabled',
        control: 'toggle' as const,
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "Text",
        prop: "text",
        control: 'input' as const,
        defaultValue: "Label",
        options: []
      }
    ]
  }
];

export const datePickerCell: ComponentData = {
  "meta": {
    "slug": "date-picker-cell",
    "name": "Date Picker - Cell",
    "node": "5943:41825",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5943-41825",
    "description": "The one selectable cell used everywhere in the picker — day numbers in the calendar grid, and month and year labels in the header views. 16 versions.",
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
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "keep",
      "title": "Keep — two components merged into one, cleanly",
      "text": "All four DS Health traits pass. <code>Date Picker - Item</code> and <code>Month and Year Picker - Item</code> are gone; both are now <code>Kind</code> values on this one component. The old <code>Type</code> setting that mixed display role with selection state is split into <code>Role</code> and <code>Selection</code>, every version wraps in a <code>Container</code>, and the Today ring is identical across both kinds. It is badged Needs Refinement for one reason: the cell is 32×32, below the 44×44 and 48×48 minimum touch targets."
    }
  },
  "overview": {
    "inContextNote": "Day cells fill the seven-column calendar grid; month and year cells fill the three-column header views. The same component serves both, which is what keeps selection, today and disabled looking identical wherever they appear.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpc-demo-preview\"><span class=\"eb-preview-dpcell eb-preview-dpcell--day\"><span class=\"eb-preview-dpcell__label\">1</span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Kind</span><select id=\"dpc-ctrl-kind\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"day\" selected=\"\">Day</option><option value=\"monthyear\">MonthYear</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Role</span><select id=\"dpc-ctrl-role\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"today\">Today</option><option value=\"prev-next\">Prev-Next</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Selection</span><select id=\"dpc-ctrl-selection\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"none\" selected=\"\">None</option><option value=\"selected\">Selected</option><option value=\"range-start\">Range-Start</option><option value=\"range-middle\">Range-Middle</option><option value=\"range-end\">Range-End</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isDisabled</span><select id=\"dpc-ctrl-disabled\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\" id=\"dpc-row-day\"><span class=\"demo-panel-label\">Day</span><input id=\"dpc-ctrl-day\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"1\" oninput=\"_dpcUpdate()\" /></div><div class=\"demo-panel-row\" id=\"dpc-row-text\" hidden><span class=\"demo-panel-label\">Text</span><input id=\"dpc-ctrl-text\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"Label\" oninput=\"_dpcUpdate()\" /></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One cell covers the day grid and both header views. Where the system used to keep two near-identical components, a single <code>Kind</code> value now tells them apart."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, radius, type style and every state it can be in. The range strip is drawn inside the cell rather than by the row that holds it."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both kinds wrap in a <code>Container</code> holding one <code>#text</code>. Selection is <code>#005CE5</code> with white text in both; Today is a <code>#005CE5</code> ring in both; Selected text is SemiBold 600 in both."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Instanced by <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a> in all three modes — seven per row in Day, twelve in Month, eighteen in Year."
      }
    ],
    "behavior": [
      {
        "state": "Kind=Day",
        "ios": "na",
        "android": "na",
        "property": "32 × 32",
        "notes": "Circular container, radius 24."
      },
      {
        "state": "Kind=MonthYear",
        "ios": "na",
        "android": "na",
        "property": "59 × 32",
        "notes": "Rounded rectangle, radius 8. Header views only."
      },
      {
        "state": "Role=Today",
        "ios": "na",
        "android": "na",
        "property": "ring",
        "notes": "<code>#005CE5</code> stroke and text, no fill."
      },
      {
        "state": "Role=Prev-Next",
        "ios": "na",
        "android": "na",
        "property": "muted",
        "notes": "Adjacent-month days. Tappable, not disabled."
      },
      {
        "state": "Selection=Selected",
        "ios": "na",
        "android": "na",
        "property": "filled",
        "notes": "<code>#005CE5</code> fill, white text. Also carries the pressed meaning."
      },
      {
        "state": "Selection=Range-*",
        "ios": "na",
        "android": "na",
        "property": "strip",
        "notes": "<code>#E5F1FF</code> strip bleeding 10px past the cell to meet its neighbour. Day only."
      },
      {
        "state": "isDisabled=true",
        "ios": "na",
        "android": "na",
        "property": "muted",
        "notes": "Not available on the range or Prev-Next versions."
      }
    ],
    "resolved": [
      {
        "headline": "The 32 × 32 cell is deliberate.",
        "body": "A seven-column grid at 312px leaves 32px per cell, so the drawn circle stays 32 × 32 by design. The tap target is not the circle: it expands natively to 44 pt on iOS and 48 dp on Android, which the Accessibility table sets out for both platforms. Confirmed with design — the intended trade for now, not a gap. Sizing the cell to its target is logged as a recommendation for a future redesign.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Two cell components became one.",
        "body": "<code>Date Picker - Item</code> and <code>Month and Year Picker - Item</code> are gone. Both are now <code>Kind</code> values on this component, which is what stopped the two from drifting apart on state coverage, ring thickness and selection colour.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Display role and selection are separate settings.",
        "body": "The old <code>Type</code> setting mixed the two, so \"this is today\" and \"this is selected\" competed for one slot. They are now <code>Role</code> and <code>Selection</code>, which is what made the Today and Selected combination expressible at all.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Value names lost their punctuation and spacing.",
        "body": "<code>Range (Middle)</code> is now <code>Range-Middle</code>, alongside <code>Range-Start</code> and <code>Range-End</code>. <code>Kind</code> reads <code>MonthYear</code> rather than carrying a slash, and the booleans are lowercase <code>true</code> and <code>false</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Every version wraps the same way.",
        "body": "Day cells used to wrap in <code>container</code> and month cells in <code>Label Container</code>, and the month cell's inner frame was called <code>Month</code> even on the year view. All sixteen now read <code>Container</code> → <code>#text</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The range strip is drawn once, consistently.",
        "body": "Range-Start carried two overlapping rectangles whose names sat on the wrong sides, Range-Middle painted <code>#E5F1FF</code> twice, and the plain Selected cell shipped two hidden range rectangles it never used. Each range version now has one rectangle, correctly named, bleeding the same 10px.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Selected reads the same weight on both kinds.",
        "body": "Month and year labels were Bold 700 while day numbers were SemiBold 600 in the same <code>Selection=Selected</code> state. Both are SemiBold 600 now.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Today and Selected no longer pretend to differ.",
        "body": "Four <code>Role=Today, Selection=Selected</code> versions existed but rendered identically to <code>Role=Default, Selection=Selected</code> — the day cell's only difference was a stroke in the same colour as its own fill. They were dropped rather than given a treatment: once a date is selected, the selected fill is the signal.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Adjacent-month days got a stronger colour.",
        "body": "Prev-Next moved from the weakest text token to the next step up, taking contrast against white from roughly 2.4:1 to about 4.0:1. These are real tappable days, not disabled ones, so they need to be readable.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "open": [
    ],
    "recommendations": [
      {
        "headline": "Size the cell to the touch target in a future redesign.",
        "body": "The 32 × 32 cell is deliberate today — the seven-column grid leaves 32px, and the tap target is expanded natively to 44 pt / 48 dp. But an expanded target the user cannot see still misleads: two adjacent days sit 32px apart while both claim 44. Worth revisiting whenever the calendar’s grid is next opened up, so the drawn cell and the tappable one are the same thing. Not a blocker for this release.",
        "tag": "A11y"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Cell</code> in Figma.",
        "body": "The component is still called <code>Picker Cell</code> at node <code>5943:41825</code>. The family agreed on the <code>Date Picker - </code> prefix so the five components group together in the assets panel.",
        "tag": "Rename"
      },
      {
        "headline": "Document that Selected carries the pressed meaning.",
        "body": "There is no separate pressed version, by design — tapping a cell selects it. Worth noting in the Code tab that Compose attaches a ripple to clickable surfaces by default, so Android will show press feedback the design does not draw.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Give the row the range strip, not the cell.",
        "body": "v2.1: Closed — decided against. The strip stays on the cell and bleeds past its edge on purpose: it meets the neighbouring cell so the highlight reads as one continuous bar across the row. Moving it to the row would mean the row deciding which days are in range, which is the cell's job.",
        "tag": "Composition"
      },
      {
        "headline": "Take Prev-Next one more step up the token scale.",
        "body": "v2.1: Applied — Prev-Next sits on <code>text/color-text-weaker</code>. That is the next step available that does not read as disabled, chosen over a higher-contrast value on purpose: going further would make an adjacent-month day look unavailable.",
        "tag": "Token"
      },
    ]
  },
  "style": {
    "heading": "Kinds",
    "description": "Two kinds, one anatomy. Every version is a Container wrapping a single #text.",
    "specCards": [
      {
        "cardKey": "dpc-spec-card-day",
        "demoKey": "day",
        "demoControls": dayControls,
        "title": "Day",
        "node": "5943:41826",
        "description": "",
        "previewHtml": "<div id=\"dpc-spec-day\"><span class=\"eb-preview-dpcell eb-preview-dpcell--day\"><span class=\"eb-preview-dpcell__label\">1</span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Kind", "value": "Day" },
              { "key": "Role", "value": "Default", "prop": "role" },
              { "key": "Selection", "value": "None", "prop": "selection" },
              { "key": "isDisabled", "value": "false", "prop": "disabled" },
              { "key": "Day", "value": "1", "prop": "day" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container surface", "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse", "swatch": true },
              { "key": "#text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "disabled:true": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "#text — Today", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "disabled:true": { "value": "#9BC5FD", "token": "text/color-text-primary-disabled" } } },
              { "key": "Border — Today", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true, "variants": { "disabled:true": { "value": "#9BC5FD", "token": "border/color-border-primary-disabled" } } },
              { "key": "Container — Selected", "value": "#005CE5", "token": "bg/color-bg-primary", "swatch": true, "variants": { "disabled:true": { "value": "#9BC5FD", "token": "bg/color-bg-primary-disabled" } } },
              { "key": "#text — Selected", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "Range highlight", "value": "#E5F1FF", "token": "bg/color-bg-info-weakest", "swatch": true },
              { "key": "#text — Prev-Next", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#text", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "32px", "mono": true },
              { "key": "Width", "value": "32px", "mono": true },
              { "key": "Radius", "value": "24px", "mono": true },
              { "key": "Padding H", "value": "6px (derived)", "mono": true },
              { "key": "Padding V", "value": "9px (derived)", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span>\n    day<span class=\"syn-punc\">:</span> 1\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCellKind</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span>\n    day <span class=\"syn-eq\">=</span> 1\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "dpc-spec-card-monthyear",
        "demoKey": "monthyear",
        "demoControls": monthYearControls,
        "title": "MonthYear",
        "node": "6442:73668",
        "description": "",
        "previewHtml": "<div id=\"dpc-spec-monthyear\"><span class=\"eb-preview-dpcell eb-preview-dpcell--monthyear\"><span class=\"eb-preview-dpcell__label\">Label</span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Kind", "value": "MonthYear" },
              { "key": "Role", "value": "Default", "prop": "role" },
              { "key": "Selection", "value": "None", "prop": "selection" },
              { "key": "isDisabled", "value": "false", "prop": "disabled" },
              { "key": "Text", "value": "Label", "prop": "text" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container surface", "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse", "swatch": true },
              { "key": "#text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "disabled:true": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "#text — Today", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "disabled:true": { "value": "#9BC5FD", "token": "text/color-text-primary-disabled" } } },
              { "key": "Border — Today", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true, "variants": { "disabled:true": { "value": "#9BC5FD", "token": "border/color-border-primary-disabled" } } },
              { "key": "Container — Selected", "value": "#005CE5", "token": "bg/color-bg-primary", "swatch": true, "variants": { "disabled:true": { "value": "#9BC5FD", "token": "bg/color-bg-primary-disabled" } } },
              { "key": "#text — Selected", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#text", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "32px", "mono": true },
              { "key": "Width", "value": "59px", "mono": true },
              { "key": "Radius", "value": "8px", "mono": true },
              { "key": "Padding H", "value": "12px (derived)", "mono": true },
              { "key": "Padding V", "value": "9px (derived)", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.monthYear</span><span class=\"syn-punc\">,</span>\n    text<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCellKind</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MonthYear</span><span class=\"syn-punc\">,</span>\n    text <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      buildInteractiveColorsTable({
        title: "Day — Colors",
        description: "The cell has no pressed state, so that column is blank throughout. Range and Prev-Next exist only on Day and have no disabled version.",
        rows: [
          { role: "Container surface", token: "bg/color-bg-primary-inverse",
            default: "#FFFFFF", pressed: '–', disabled: "#FFFFFF" },
          { role: "#text", token: "text/color-text · disabled text/color-text-disabled",
            default: "#0A2757", pressed: '–', disabled: "#C2CFE5" },
          { role: "#text — Today", token: "text/color-text-primary · disabled text/color-text-primary-disabled",
            default: "#005CE5", pressed: '–', disabled: "#9BC5FD" },
          { role: "Border — Today", token: "border/color-border-primary · disabled border/color-border-primary-disabled",
            default: "#005CE5", pressed: '–', disabled: "#9BC5FD" },
          { role: "Container — Selected", token: "bg/color-bg-primary · disabled bg/color-bg-primary-disabled",
            default: "#005CE5", pressed: '–', disabled: "#9BC5FD" },
          { role: "#text — Selected", token: "text/color-text-inverse",
            default: "#FFFFFF", pressed: '–', disabled: "#FFFFFF" },
          { role: "Range highlight", token: "bg/color-bg-info-weakest",
            default: "#E5F1FF", pressed: '–', disabled: "–" },
          { role: "#text — Prev-Next", token: "text/color-text-weaker",
            default: "#6780A9", pressed: '–', disabled: "–" },
        ],
      }),
      buildInteractiveColorsTable({
        title: "MonthYear — Colors",
        description: "Identical palette to Day — the two kinds differ in width and corner radius, never in colour. MonthYear has no Range or Prev-Next version.",
        rows: [
          { role: "Container surface", token: "bg/color-bg-primary-inverse",
            default: "#FFFFFF", pressed: '–', disabled: "#FFFFFF" },
          { role: "#text", token: "text/color-text · disabled text/color-text-disabled",
            default: "#0A2757", pressed: '–', disabled: "#C2CFE5" },
          { role: "#text — Today", token: "text/color-text-primary · disabled text/color-text-primary-disabled",
            default: "#005CE5", pressed: '–', disabled: "#9BC5FD" },
          { role: "Border — Today", token: "border/color-border-primary · disabled border/color-border-primary-disabled",
            default: "#005CE5", pressed: '–', disabled: "#9BC5FD" },
          { role: "Container — Selected", token: "bg/color-bg-primary · disabled bg/color-bg-primary-disabled",
            default: "#005CE5", pressed: '–', disabled: "#9BC5FD" },
          { role: "#text — Selected", token: "text/color-text-inverse",
            default: "#FFFFFF", pressed: '–', disabled: "#FFFFFF" },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:date-picker:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>datepicker<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Date Picker family, not this component: Cell, Header, Header Trigger, Calendar and the picker itself all ship in <code>com.eastblue.ds:date-picker</code> and import <code>com.eastblue.ds.datepicker.*</code>. In practice most teams never call this directly; it is the cell the calendar grid renders."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters, in the order the Figma property panel lists them. Each cell shows one value — the day number or the month/year label — so the two text properties are alternatives, never both at once.",
      "rows": [
        {
          "figma": "Kind — Day, MonthYear",
          "swift": "<code>kind: EBDatePickerCellKind</code>",
          "compose": "<code>kind = EBDatePickerCellKind.Day / MonthYear</code>"
        },
        {
          "figma": "Role — Default, Today, Prev-Next",
          "swift": "<code>role: EBDatePickerCellRole = .default</code>",
          "compose": "<code>role: EBDatePickerCellRole = Default</code>"
        },
        {
          "figma": "Selection — None, Selected, Range-Start, Range-Middle, Range-End",
          "swift": "<code>selection: EBDatePickerCellSelection = .none</code>",
          "compose": "<code>selection: EBDatePickerCellSelection = None</code>"
        },
        {
          "figma": "isDisabled — true, false",
          "swift": "<code>isDisabled: Bool = false</code>",
          "compose": "<code>isDisabled: Boolean = false</code>"
        },
        {
          "figma": "Day (text) — shown when Kind is Day",
          "swift": "<code>day: Int</code>",
          "compose": "<code>day: Int</code>"
        },
        {
          "figma": "Text (text) — shown when Kind is MonthYear",
          "swift": "<code>text: String</code>",
          "compose": "<code>text: String</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Day — a single date in the grid",
        "swift": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span>\n    day<span class=\"syn-punc\">:</span> 1\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCellKind</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span>\n    day <span class=\"syn-eq\">=</span> 1\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "MonthYear — a month or year in the picker",
        "swift": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.monthYear</span><span class=\"syn-punc\">,</span>\n    text<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCell</span><span class=\"syn-punc\">(</span>\n    kind <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCellKind</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MonthYear</span><span class=\"syn-punc\">,</span>\n    text <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tap area meets the platform minimum",
        "ios": "<code>.frame(minWidth: 44, minHeight: 44)</code> around the 32pt circle",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code>"
      },
      {
        "requirement": "The date is announced, not the number",
        "ios": "<code>.accessibilityLabel(date.formatted(date: .complete, time: .omitted))</code>",
        "android": "<code>contentDescription</code> built from the full date"
      },
      {
        "requirement": "Selection is a state, not part of the label",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code>",
        "android": "<code>Modifier.semantics { selected = true }</code>"
      },
      {
        "requirement": "Today is announced",
        "ios": "Append \"Today\" to the label when <code>Role=Today</code>",
        "android": "Same, via <code>stateDescription</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Prev-Next for days belonging to the neighbouring month — they stay tappable.",
        "dontText": "Don't use Disabled for adjacent-month days; disabled means unavailable."
      },
      {
        "doText": "Let Selected carry the pressed meaning — tapping a cell selects it.",
        "dontText": "Don't add a separate pressed style that competes with selection."
      },
      {
        "doText": "Keep range selections on Day cells.",
        "dontText": "Don't try to range-select months or years; those views pick one value."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All sixteen versions read <code>Container</code> → <code>#text</code>. Range rectangles are single, correctly named, and bleed a consistent 10px."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Kind</code>, <code>Role</code>, <code>Selection</code> and <code>isDisabled</code> follow the naming guidelines, with lowercase booleans and no punctuation in values."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is bound and confirmed by design. Prev-Next uses <code>text/color-text-weaker</code> — the next step available that does not read as disabled, chosen deliberately over a higher-contrast value."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to a cell on both platforms. The range strip bleeds past the cell on purpose: it meets the neighbouring cell so the highlight reads as one continuous bar across the row."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "States are complete for the intended set — no Focused, since these are mobile components, and Selected carries the pressed meaning. The 32 × 32 cell is a deliberate visual size; the tap target is expanded natively to 44 pt / 48 dp, as the Accessibility table sets out."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No icons or rasters — the cell is type on a shape."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "2 <code>Kind</code> × 3 <code>Role</code> × 5 <code>Selection</code> × 2 <code>isDisabled</code> permits 60 combinations; <strong>16 are built</strong>. The matrix is sparse on purpose — MonthYear takes no range and no Prev-Next, range cells have no disabled version, and Prev-Next takes no selection.",
      "summary": {
        "columns": ["Kind", "Versions", "Count"],
        "rows": [
          { "cells": ["Day", "Default · Today · Prev-Next, with the full Selection range", "10"] },
          { "cells": ["MonthYear", "Default · Today, None and Selected only", "6"] }
        ]
      },
      "columns": ["Kind", "Role", "Selection", "isDisabled", "Node"],
      "rows": [
        { "cells": ["Day", "Default", "None", "false", "5943:41826"] },
        { "cells": ["Day", "Default", "None", "true", "5943:41829"] },
        { "cells": ["Day", "Today", "None", "false", "5943:41832"] },
        { "cells": ["Day", "Today", "None", "true", "5943:41835"] },
        { "cells": ["Day", "Default", "Selected", "false", "5943:41838"] },
        { "cells": ["Day", "Default", "Selected", "true", "5943:41843"] },
        { "cells": ["Day", "Default", "Range-Start", "false", "6442:72593"] },
        { "cells": ["Day", "Default", "Range-Middle", "false", "5943:41848"] },
        { "cells": ["Day", "Default", "Range-End", "false", "6442:72603"] },
        { "cells": ["Day", "Prev-Next", "None", "false", "5943:41853"] },
        { "cells": ["MonthYear", "Default", "None", "false", "6442:73668"] },
        { "cells": ["MonthYear", "Default", "None", "true", "6442:73665"] },
        { "cells": ["MonthYear", "Today", "None", "false", "6442:73671"] },
        { "cells": ["MonthYear", "Today", "None", "true", "6442:73674"] },
        { "cells": ["MonthYear", "Default", "Selected", "false", "6442:73662"] },
        { "cells": ["MonthYear", "Default", "Selected", "true", "6442:73677"] }
      ],
      "collapseLabel": "View full Kind × Role × Selection breakdown (16 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Family artifact and preview font — node 5943:41825",
      "rows": [
        {
          "body": "<strong>The Gradle artifact named this component, not its family.</strong> It read <code>com.eastblue.ds:date-picker-cell</code>, which was correct when v2.1.0 shipped and stopped being correct the same week: §3.2 now rules that an artifact is a family, never a component. Cell, Header, Header Trigger, Calendar and the picker itself all install <code>com.eastblue.ds:date-picker</code>. The Kotlin import was already on the family package and did not move.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview rendered in the wrong typeface.</strong> <code>.eb-preview-dpcell</code> declared <code>font-family: inherit</code>, which reads as a deliberate choice in a diff but resolves through <code>.eb-preview-scope</code> to <code>body</code> — the documentation font, BarkAda. The cell is Proxima Soft. The font was loaded the whole time; the preview simply never asked for it. Found on Header Trigger and swept back here.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The text properties did not move the preview.</strong> Typing into Day or Text updated the DEV snippet but not the cell, on both tabs: the renderer hardcoded <code>kind === 'day' ? '1' : 'Label'</code> and never read the value the control had already stored. It now takes the text and falls back to Figma’s defaults only when the field is empty.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Overview had no way to set the text at all.</strong> Its panel offered Kind, Role, Selection and isDisabled and stopped there. Day and Text rows now sit after isDisabled in Figma’s panel order, and only the one belonging to the current Kind is shown — each cell carries one value, so the two are alternatives, never both.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The control keys still used the pre-rename names.</strong> Day’s control was keyed <code>index</code> and MonthYear’s <code>label</code> — the property names Figma used before v2.1.0 renamed them to <code>Day</code> and <code>Text</code>. Nothing user-facing was wrong, but the data file and the demo script disagreed with the Code tab. All nine references now read <code>day</code> and <code>text</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Text settings added, Style and Code tabs rebuilt — node 5943:41825",
      "rows": [
        {
          "body": "<strong>The day and the label can be set on a copy.</strong> The cell had one text layer and no way to fill it from an instance. It now carries two text settings — <code>Day</code> for the date number and <code>Text</code> for the month or year — named after what each shows rather than the generic <code>Index</code> and <code>Label</code> they started as. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>One text setting was considered and rejected.</strong> A single <code>Value</code> property would serve both kinds, but Figma gives a text property one placeholder for every version — and \"Value\" overflows a 32 × 32 day cell. Two properties is the deliberate trade.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The documented type style did not exist.</strong> Typography read <code>Primary/SemiBold/Body</code>, which is not a style in the database. The layer resolves to <code>Primary/Label/Light/Small</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Every colour is a named colour, confirmed by design.</strong> Two colours tables were written from nothing — the token paths had never been on the page. Prev-Next stays on <code>text/color-text-weaker</code> deliberately: the next step up would read as disabled.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The invisible white fills are gone.</strong> Every version carried a white fill switched off on the component frame. Nothing drew it, but it read as a surface to anyone inspecting the layers.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Default cells had no background in the preview.</strong> The preview painted a background only for Selected, so every Default cell rendered transparent while Figma's <code>Container</code> paints white on all sixteen versions.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The range strip painted over the selected circle.</strong> The preview had rebuilt the strip as a child of the cell, and a parent's background always sits behind its children — so no stacking order could fix it. The Container is now its own layer with the strip beneath, matching Figma, where the highlight is a sibling drawn before Container.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Disabled Today used the wrong blue.</strong> The preview drew its border and text in <code>#C2CFE5</code>, which is Default's disabled text. Today's disabled state is <code>#9BC5FD</code> on both.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Card titles carried raw Figma syntax.</strong> They read <code>Kind=Day</code> and <code>Kind=MonthYear</code>. Titles are the bare value.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The component had two names.</strong> The spec cards called it <code>EBPickerCell</code> while the Code tab and the live snippet called it <code>EBDatePickerCell</code>, and the argument names disagreed too — <code>index</code> against <code>day</code>. All three surfaces now build from one definition.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Install coordinates corrected.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components</code> became <code>AY-Org/eb-ds-ios</code> and <code>com.eastblue.ds:date-picker-cell:2.1.0</code>, with the Kotlin import on the family package <code>com.eastblue.ds.datepicker</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were split by state, not by version.</strong> They showed \"a selected day\" and \"a day inside a range\"; they now show <code>Day</code> and <code>MonthYear</code>, the two values of the driving setting. Property Mapping gained the two text settings, and the Variants Inventory gained the full sixteen-row breakdown behind its summary.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The 32 × 32 cell is a decision, not a gap.</strong> The seven-column grid leaves 32px per cell, so the drawn circle stays 32 × 32; the tap target expands natively to 44 pt and 48 dp, which the Accessibility table sets out. Confirmed with design and moved out of Open Issues — C5 moves to Ready. Sizing the cell to its target is now a recommendation for a future redesign, not an open defect.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>Prev-Next’s token was already at the right step.</strong> The recommendation to raise it further is applied and closed: <code>text/color-text-weaker</code> is the last step before an adjacent-month day starts reading as unavailable. C3 moves to Ready.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The range strip stays on the cell.</strong> The recommendation to move it to the row is closed, decided against — the strip bleeds past the cell on purpose so the highlight meets its neighbour and reads as one bar across the row. C4 moves to Ready.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Consolidated rebuild — node 5943:41825",
      "rows": [
        {
          "body": "<strong>Two components became one.</strong> <code>Date Picker - Item</code> and <code>Month and Year Picker - Item</code> fold into this component as <code>Kind=Day</code> and <code>Kind=MonthYear</code>.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C2 — <code>Type</code> split into <code>Role</code> and <code>Selection</code>.</strong> Display role and selection state no longer compete for one setting.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — value names cleaned.</strong> <code>Range (Middle)</code> → <code>Range-Middle</code>, <code>Month/Year</code> → <code>MonthYear</code>, booleans lowercased.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C1 — one anatomy.</strong> <code>container</code> and <code>Label Container</code> both became <code>Container</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — range strip rebuilt.</strong> One rectangle per range version, names matching their sides, 10px bleed throughout. Hidden range rectangles removed from the plain Selected cell.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C5 — Today+Selected dropped.</strong> The four versions rendered identically to Default+Selected; selection now wins outright.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C3 — Prev-Next token raised</strong> from the weakest step to the next, taking contrast from about 2.4:1 to about 4.0:1. Still short of 4.5:1.",
          "delta": { "kind": "partial", "label": "C3 partial" }
        },
        {
          "body": "<strong>C5 — touch target unchanged.</strong> The cell remains 32×32 against 44/48 minimums.",
          "delta": { "kind": "open", "label": "C5 open" }
        }
      ]
    }
  ]
};
