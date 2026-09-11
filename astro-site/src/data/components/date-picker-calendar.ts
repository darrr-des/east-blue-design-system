import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

const dayControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasWeek6',
        prop: 'week6',
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

export const datePickerCalendar: ComponentData = {
  "meta": {
    "slug": "date-picker-calendar",
    "name": "Date Picker - Calendar",
    "node": "6769:105110",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6769-105110",
    "description": "The calendar surface itself. Three modes — a day grid, a month list and a year list — assembled entirely from Date Picker - Cell and Date Picker - Header instances.",
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
      "title": "Keep — composed, not redrawn",
      "text": "All four DS Health traits pass. The previous calendar was a from-scratch redraw with raster chevrons, weekday-named layers, a missing Month chevron and a misleading <code>Type</code> setting. This one is built from <a href=\"/components/date-picker-cell\">Date Picker - Cell</a> and <a href=\"/components/date-picker-header\">Date Picker - Header</a> instances, the chevrons are icon instances, and <code>Mode = Day | Year | Month</code> uses the same words the native APIs do. It is badged Needs Refinement for the scroll indicator it draws itself and the touch targets it inherits from the cell."
    }
  },
  "overview": {
    "inContextNote": "Appears as an overlay above the field once a date picker is opened. Day mode is the default; tapping the month or year chip in its header switches to the corresponding list, and the back chevron returns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpcal-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Mode</span><select id=\"dpcal-ctrl-mode\" class=\"demo-panel-select\" onchange=\"_dpcalUpdate()\"><option value=\"day\" selected=\"\">Day</option><option value=\"month\">Month</option><option value=\"year\">Year</option></select></div><div class=\"demo-panel-row\" id=\"dpcal-row-week6\"><span class=\"demo-panel-label\">hasWeek6</span><select id=\"dpcal-ctrl-week6\" class=\"demo-panel-select\" onchange=\"_dpcalUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One surface serves all three views. Nothing about a particular month or year is baked into the component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own card surface, border, radius, header layout and grid spacing. Everything inside it is an instance of a sibling component."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "All three modes read <code>Header</code> → <code>Content</code>, and the rows are <code>Row</code> in every mode. The centre of the header names its own role — <code>Container</code> when it holds the chips, <code>Title</code> when it holds static text."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Assembled from <a href=\"/components/date-picker-cell\">Date Picker - Cell</a>, <a href=\"/components/date-picker-header\">Date Picker - Header</a> and <a href=\"/components/date-picker-header-trigger\">Date Picker - Header Trigger</a>. Sits inside <a href=\"/components/date-picker\">Date Picker</a> as its overlay."
      }
    ],
    "behavior": [
      {
        "state": "Mode=Day",
        "ios": "na",
        "android": "na",
        "property": "312 × 336",
        "notes": "Weekday row plus six rows of seven cells. Header pages through months."
      },
      {
        "state": "Mode=Month",
        "ios": "na",
        "android": "na",
        "property": "312 × 296",
        "notes": "Twelve cells in a three-column grid. Header shows a back chevron and a title."
      },
      {
        "state": "Mode=Year",
        "ios": "na",
        "android": "na",
        "property": "312 × 296",
        "notes": "Eighteen cells, scrollable. Header shows a back chevron and a title."
      },
      {
        "state": "Header chevrons",
        "ios": "na",
        "android": "na",
        "property": "Chevron Left / Right",
        "notes": "Previous and next month in Day mode; back in Month and Year."
      }
    ],
    "resolved": [
      {
        "headline": "The row-count setting is named for what it does.",
        "body": "It was <code>week 6</code> — lowercase, with a space, and named as a noun rather than a state. It is now <code>hasWeek6</code>, matching <code>hasCaret</code> on Header Trigger. A dropdown of 4, 5 and 6 was considered and rejected: Figma has no enum that is not a variant, so it would have turned three components into nine. The boolean stays, and the native side counts rows instead.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The Title frame no longer paints twice.",
        "body": "The Month and Year header carried a white fill on an already-white card and an <code>#E5EBF4</code> stroke switched off. Neither drew anything, but both read as surfaces when inspecting the layers. Cleared in Figma during this run — the fourth and last of these leftovers in the family.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The calendar is assembled, not redrawn.",
        "body": "Every cell in every mode is a <a href=\"/components/date-picker-cell\">Date Picker - Cell</a> instance, and the weekday strip is seven <a href=\"/components/date-picker-header\">Date Picker - Header</a> instances. The old surface drew its own cells, which is why cell states were undefined on the grid.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Layers are named by role, not by weekday.",
        "body": "Day cells were previously named after the weekday they happened to fall on, which broke as soon as the month started on a different day. Rows are now <code>Row</code> and cells are <code>Picker Cell</code> instances throughout.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The mode setting uses native words.",
        "body": "<code>Type = Date | Year | Month</code> became <code>Mode = Day | Year | Month</code>. \"Date\" described the whole component rather than the view; \"Day\" matches what both platforms call it.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The chevrons are icon instances.",
        "body": "They were raster <code>shape_full</code> assets that could not recolour or scale. Both are now <code>Chevron Left</code> and <code>Chevron Right</code> icon instances, and Month gained the previous-chevron it was missing entirely.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Cell states are defined by the cell.",
        "body": "The grid used to have no way to express a pressed, selected or disabled day. Those now come from Date Picker - Cell's own settings, so the surface does not need to know about them.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The header centre names its own role.",
        "body": "Day mode's centre is a <code>Container</code> holding two chips; Month and Year use a <code>Title</code> holding static text. Reading the layer name now tells you which of the two header behaviours you are looking at.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The grid content is correct.",
        "body": "The day grid previously repeated the 21st across two rows and filled its last row with cells reading \"0\". It now runs 1 to 31 with the trailing row showing the next month's days in the Prev-Next treatment.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
    ],
    "appliedRecommendations": [
      {
        "headline": "Take the row, not the cell, for range continuity.",
        "body": "v2.1: Closed — decided against, matching the same call on Date Picker - Cell. The strip bleeds past the cell on purpose so the highlight meets its neighbour and reads as one bar across the row; moving it to the row would mean the row deciding which days are in range, which is the cell's job.",
        "tag": "Composition"
      },
      {
        "headline": "Expose the grid as a grid to assistive tech.",
        "body": "v2.1: Applied — Accessibility carries both halves of the ask: the grid is announced as a grid so a screen reader user can move by week as well as by day, and the decorative weekday strip is hidden.",
        "tag": "A11y"
      },
      {
        "headline": "Document that the chevrons change meaning by mode.",
        "body": "v2.1: Applied — Accessibility spells both behaviours out for each platform: \"Previous month\" and \"Next month\" in Day, \"Back\" in Month and Year. Month and Year carry no right chevron at all, which the Style tab now renders correctly.",
        "tag": "Docs"
      },
      {
        "headline": "Drop the drawn scroll indicator before handoff.",
        "body": "v2.1: Applied — a Usage Guideline now pairs \"let the platform draw scroll indicators in Year mode\" with \"don't build the drawn scrollbar from the Figma file\", and the scorecard records that the Scrollbar is a shared component instance mapping to the platform indicator, not a rectangle to reproduce.",
        "tag": "Docs"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Calendar</code> in Figma.",
        "body": "v2.1: Applied — node <code>6769:105110</code> reads <code>Date Picker - Calendar</code>. The recommendation also asked that the field trigger be renamed after this one; that is still outstanding on <code>date-picker</code> (node <code>7201:112099</code>) and carries over to its own review.",
        "tag": "Rename"
      },
    ]
  },
  "style": {
    "heading": "Modes",
    "description": "Three modes on one 312px card. Day shows a month grid, Month a twelve-cell list, Year a scrolling list — each assembled from family instances rather than redrawn.",
    "colorsTables": [
      buildStatelessColorsTable({
        title: "Colors",
        description: "The calendar paints only three things of its own — the card, its border and the two chevrons. Everything inside is a Date Picker - Cell, - Header or - Header Trigger instance carrying its own colours; the scrollbar in Year mode is a shared Scrollbar component. No states: the surface never changes.",
        rows: [
          { role: "Card surface",         token: "bg/color-bg-primary-inverse", value: "#FFFFFF" },
          { role: "Card border",          token: "border/color-border-weak",    value: "#E5EBF4" },
          { role: "Chevron Left / Right", token: "border/color-border-primary", value: "#005CE5" },
          { role: "Scrollbar thumb — Year", token: "text/color-text",           value: "#0A2757" }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "day",
        "demoKey": "day",
        "demoControls": dayControls,
        "title": "Day",
        "node": "6769:105099",
        "description": "",
        "previewHtml": "<div id=\"dpcal-spec-day\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Mode", "value": "Day" },
              { "key": "hasWeek6", "value": "true", "prop": "week6" },
              { "key": "Rows", "value": "1 weekday + 6 week", "variants": { "week6:false": { "value": "1 weekday + 5 week" } } },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card surface", "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse", "swatch": true },
              { "key": "Card border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Chevron Left / Right", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Header Trigger · #text", "value": "Primary/Label/Base", "mono": true },
              { "key": "Header · #text", "value": "Primary/Label/Small", "mono": true },
              { "key": "Cell · #text", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "336px", "mono": true, "variants": { "week6:false": { "value": "296px" } } },
              { "key": "Width", "value": "312px", "mono": true },
              { "key": "Radius", "value": "8px", "mono": true },
              { "key": "Padding H", "value": "16px", "mono": true },
              { "key": "Padding V", "value": "16px", "mono": true },
              { "key": "Gap", "value": "8px", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span>\n    weeks<span class=\"syn-punc\">:</span> 6\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span>\n    weeks <span class=\"syn-eq\">=</span> 6\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "month",
        "demoKey": "month",
        "demoControls": [],
        "title": "Month",
        "node": "6769:105109",
        "description": "",
        "previewHtml": "<div id=\"dpcal-spec-month\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Mode", "value": "Month" },
              { "key": "Cells", "value": "12 — 3 columns × 4 rows" },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card surface", "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse", "swatch": true },
              { "key": "Card border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Chevron Left / Right", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title · #text", "value": "Primary/Label/Base", "mono": true },
              { "key": "Cell · #text", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "296px", "mono": true },
              { "key": "Width", "value": "312px", "mono": true },
              { "key": "Radius", "value": "8px", "mono": true },
              { "key": "Padding H", "value": "16px", "mono": true },
              { "key": "Padding V", "value": "16px", "mono": true },
              { "key": "Gap", "value": "8px header → content · 32px between rows, 16px between columns", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.month</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Month</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "year",
        "demoKey": "year",
        "demoControls": [],
        "title": "Year",
        "node": "6769:105100",
        "description": "",
        "previewHtml": "<div id=\"dpcal-spec-year\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Mode", "value": "Year" },
              { "key": "Cells", "value": "18 — 3 columns × 6 rows, scrolled" },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card surface", "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse", "swatch": true },
              { "key": "Card border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Chevron Left / Right", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title · #text", "value": "Primary/Label/Base", "mono": true },
              { "key": "Cell · #text", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "296px", "mono": true },
              { "key": "Width", "value": "312px", "mono": true },
              { "key": "Radius", "value": "8px", "mono": true },
              { "key": "Padding H", "value": "16px", "mono": true },
              { "key": "Padding V", "value": "16px", "mono": true },
              { "key": "Gap", "value": "8px header → content · 32px between rows, 16px between columns", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.year</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Year</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
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
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Date Picker family, not this component: Cell, Header, Header Trigger, Calendar and the picker itself all ship in <code>com.eastblue.ds:date-picker</code> and import <code>com.eastblue.ds.datepicker.*</code>."
    },
    "propertyMapping": {
      "description": "Two properties. Everything else on this component is a nested instance rather than a setting: the header chevrons, the two Header Trigger chips, the weekday row and every date cell are Date Picker instances that carry their own properties. <code>hasWeek6</code> is the one place Figma and the platform disagree in shape — Figma toggles a row, the platform counts them, because a February that starts on the first day of the week needs four.",
      "rows": [
        {
          "figma": "Mode — Day, Month, Year",
          "swift": "<code>mode: EBDatePickerCalendarMode</code>",
          "compose": "<code>mode: EBDatePickerCalendarMode</code>"
        },
        {
          "figma": "hasWeek6 — true, false",
          "swift": "<code>weeks: Int = 6</code> — the boolean is a row count on both platforms, clamped to 4...6",
          "compose": "<code>weeks: Int = 6</code> — same, clamped to 4..6"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Day — the month grid",
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span>\n    weeks<span class=\"syn-punc\">:</span> 6\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span>\n    weeks <span class=\"syn-eq\">=</span> 6\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Month — the twelve-month list",
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.month</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Month</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Year — the scrolling year list",
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.year</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDatePickerCalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Year</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The grid is announced as a grid",
        "ios": "<code>.accessibilityElement(children: .contain)</code> with row and column traits",
        "android": "<code>Modifier.semantics { collectionInfo = CollectionInfo(rows, 7) }</code>"
      },
      {
        "requirement": "Weekday strip is hidden",
        "ios": "<code>.accessibilityHidden(true)</code> — each cell names its own weekday",
        "android": "<code>Modifier.clearAndSetSemantics {}</code>"
      },
      {
        "requirement": "Mode changes are announced",
        "ios": "<code>UIAccessibility.post(.screenChanged)</code> on switching mode",
        "android": "<code>LiveRegionMode.Polite</code> on the header title"
      },
      {
        "requirement": "Chevrons are labelled by what they do",
        "ios": "\"Previous month\" and \"Next month\" in Day; \"Back\" in Month and Year",
        "android": "Same, via <code>contentDescription</code>"
      },
      {
        "requirement": "Dynamic type",
        "ios": "Supported, scales to AX5 — the 312pt card is fixed, so the grid keeps its columns and the cells truncate rather than reflow",
        "android": "<code>sp</code> units; the 312dp card behaves the same way"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Let the platform's calendar supply locale, first-day-of-week and date arithmetic.",
        "dontText": "Don't reimplement the calendar maths to match this Figma grid exactly."
      },
      {
        "doText": "Open Day mode first and treat Month and Year as drill-downs from the header.",
        "dontText": "Don't expose Mode as a user-facing toggle — it is navigation state."
      },
      {
        "doText": "Let the platform draw scroll indicators in Year mode.",
        "dontText": "Don't build the drawn scrollbar from the Figma file."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Header</code> → <code>Content</code> → <code>Row</code>, with every cell an instance. Grid content is correct." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Mode = Day | Year | Month</code> matches native terminology." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "All four roles the calendar paints itself are bound and confirmed by design: the card surface, its border, the two chevrons and the Year scrollbar. Everything inside carries the tokens of the instance that draws it." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "The card maps to a calendar view on both platforms. The scrollbar is a shared Scrollbar component, not a drawn rectangle, and maps to the platform indicator. <code>hasWeek6</code> is the one shape difference: Figma toggles a row, the platform counts them, so it maps to <code>weeks: Int</code> clamped to 4...6." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Every state comes from the cell, which is the only interactive part. The 32 × 32 cell and the 24px header chip are deliberate visual sizes with tap targets expanded natively to 44 pt / 48 dp, as settled on those components." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "Chevrons are icon instances; the rasters are gone." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "1 Mode setting × 3 values. Everything else varies by the instances placed inside.",
      "columns": ["Mode", "Size", "Content", "Header centre", "Node"],
      "rows": [
        { "cells": ["Day", "312 × 336", "7 weekday + 42 cells", "2 Header Trigger", "6769:105099"] },
        { "cells": ["Month", "312 × 296", "12 cells", "Title", "6769:105109"] },
        { "cells": ["Year", "312 × 296", "18 cells + scroll indicator", "Title", "6769:105100"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "hasWeek6 renamed, Style and Code tabs rebuilt — node 6769:105110",
      "rows": [
        {
          "body": "<strong>The row-count setting is named for what it does.</strong> <code>week 6</code> became <code>hasWeek6</code> — lowercase, a space, and a noun where a state belonged. A <code>Weeks = 4, 5, 6</code> dropdown was weighed and rejected: Figma has no enum that is not a variant, so it would have taken the set from three components to nine. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The Title frame no longer paints twice.</strong> The Month and Year header carried a white fill on an already-white card plus an <code>#E5EBF4</code> stroke switched off. The fourth and last of these leftovers in the family, cleared in Figma during this run.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>One card became three.</strong> The Style tab had a single card switching its rows by <code>variants</code>; <code>Mode</code> is the driving property, so Day, Month and Year each get their own card. <code>hasWeek6</code> is the only control left, on the Day card alone.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The documented type style did not exist.</strong> Typography read <code>Primary/Bold/Subheading</code>, which is not in the database, alongside a font spec and a <code>\"Cell text: supplied by Date Picker - Cell\"</code> cross-reference. Each card now lists the text layers visible in that mode with the instance that owns them: <code>Primary/Label/Base</code> for the Title and header chips, <code>Primary/Label/Small</code> for the weekday row, <code>Primary/Label/Light/Small</code> for the cells.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Four of five colour tokens named the wrong steps</strong> — <code>bg/color-bg-main</code>, <code>border/color-border-subtle</code>, <code>text/color-text-heading</code> and <code>icon/color-icon-link</code>. The bindings are <code>bg/color-bg-primary-inverse</code>, <code>border/color-border-weak</code>, <code>text/color-text</code> and <code>border/color-border-primary</code>. The fifth was worse: the scroll indicator was recorded as <code>#E5EBF4</code> with the token <code>\"annotation only — not built\"</code>, when it is built and its thumb is <code>#0A2757</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Layout had none of the seven keys</strong> — <code>Padding</code>, <code>Header height</code>, <code>Header to content</code>, <code>Row height</code>, <code>Row gap</code> and <code>Corner radius</code>. All three cards now carry Height · Width · Radius · Padding H · Padding V · Gap · Alignment, with Day switching to 296px when <code>hasWeek6</code> is off — the same height as Month and Year.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Five preview corrections.</strong> The chevrons were a 16px approximation at stroke 1.8 against Figma's 24px at 2; the two header chips were drawn without their carets; the Month and Year grid used a 16px row gap and no column gap where Figma has 32 and 16; the scrollbar was <code>#E5EBF4</code> at 120px against <code>#0A2757</code> at 80px; and the card declared no font-family, so it rendered in the documentation font rather than Proxima Soft.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the family artifact <code>com.eastblue.ds:date-picker:1.0.0</code> and imports <code>com.eastblue.ds.datepicker.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping listed layers as properties.</strong> Four of its five rows were nested instances — the chevrons, the two Header Trigger chips, the cells and the scrollbar — while <code>hasWeek6</code> was missing entirely. Two rows now, for the two real properties. <code>hasWeek6</code> maps to <code>weeks: Int</code> clamped to 4...6: Figma toggles a row, the platform counts them, because a February starting on the first day of the week needs four.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to scenarios, not to the driving property.</strong> They showed \"as the overlay of a date field\" and \"selecting a range\", and between them used three spellings of one enum — <code>CalendarMode</code>, <code>mode: CalendarMode</code> and <code>EBDatePickerCalendarMode</code>. One snippet per Mode now, built from the same definition as the spec cards and the live preview.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two scorecard notes had gone stale.</strong> C3 said only the surface and border were bound; all four roles are bound and confirmed. C4 said the drawn scrollbar maps to nothing; it is a shared Scrollbar component that maps to the platform indicator. C5 inherited the 32 × 32 cell and 24px chip as open concerns, both since settled as deliberate. C3, C4 and C5 all move to Ready.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>Code Connect was populated on a component with nothing registered.</strong> Three rows claimed readiness against a native library that does not exist. The section is gone; C7 stays Not Mapped. Accessibility gained a Dynamic Type row, and a <code>getSnippet</code> keeps the DEV code live.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>All five recommendations are closed.</strong> The rename landed; the scroll indicator, the chevrons' two behaviours and the grid semantics are documented for both platforms; and the range-continuity ask is closed as decided against, matching the same call on Date Picker - Cell. The one thing carried forward is the second half of the rename note — the field trigger at node <code>7201:112099</code> still takes the <code>Date Picker</code> name.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt as a composed surface — node 6769:105110",
      "rows": [
        {
          "body": "<strong>Replaces <code>Date Picker - Group</code>.</strong> The calendar is now assembled from Date Picker - Cell and Date Picker - Header instances rather than redrawn.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C2 — <code>Type</code> became <code>Mode = Day | Year | Month</code></strong>, matching what both platforms call these views.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C6 — raster chevrons replaced with icon instances</strong>, and Month gained the previous-chevron it never had.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C1 — layers named by role.</strong> Weekday-named day cells became <code>Picker Cell</code> instances inside <code>Row</code> frames; <code>content-container</code> and <code>row</code> were recased to <code>Container</code> and <code>Row</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — grid content corrected.</strong> The duplicated 21st and the row of cells reading \"0\" are gone; the trailing row now shows the next month in the Prev-Next treatment.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C4 — the header centre names its role</strong>: <code>Container</code> when it holds the chips, <code>Title</code> when it holds static text.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>C4 — the drawn scroll indicator stays</strong> as a visual spec note for handover, not as something to build.",
          "delta": { "kind": "partial", "label": "C4 partial" }
        }
      ]
    }
  ]
};
