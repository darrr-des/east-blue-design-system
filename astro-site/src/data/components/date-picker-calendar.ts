import type { ComponentData, DemoControlSection } from '../types';

const calendarControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Mode',
        prop: 'mode',
        defaultValue: 'day',
        options: [
          { value: 'day', label: 'Day' },
          { value: 'month', label: 'Month' },
          { value: 'year', label: 'Year' }
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
        "kind": "refine",
        "label": "Needs Refinement"
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpcal-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Mode</span><select id=\"dpcal-ctrl-mode\" class=\"demo-panel-select\" onchange=\"_dpcalUpdate()\"><option value=\"day\" selected=\"\">Day</option><option value=\"month\">Month</option><option value=\"year\">Year</option></select></div></div></div></div>",
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
      {
        "headline": "Drop the drawn scroll indicator before handoff.",
        "body": "Year mode carries a <code>Scrollbar</code> instance. Both platforms draw their own scroll indicators, with their own show and fade behaviour, so this maps to nothing in code. Keeping it as a visual spec note is the current decision — mark it clearly as annotation so nobody builds it.",
        "tag": "Docs"
      },
      {
        "headline": "Document that the chevrons change meaning by mode.",
        "body": "In Day mode they page through months. In Month and Year the left chevron goes back and the right one is a hidden spacer keeping the title centred. Same layers, two behaviours — worth stating in the Code tab so the mapping is obvious.",
        "tag": "Docs"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Calendar</code> in Figma.",
        "body": "It is still called <code>Date Picker</code> at node <code>6769:105110</code>, which now collides with the field trigger taking that name. Rename this one first, then the trigger.",
        "tag": "Rename"
      },
      {
        "headline": "Take the row, not the cell, for range continuity.",
        "body": "Range strips currently bleed out of each cell to meet its neighbours. If the row owned that highlight, the cells would stop overflowing and the grid would map more directly onto a native row.",
        "tag": "Composition"
      },
      {
        "headline": "Expose the grid as a grid to assistive tech.",
        "body": "Announce rows and columns so a screen reader user can move by week as well as by day, and hide the decorative weekday strip.",
        "tag": "A11y"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Modes",
    "description": "Three modes on one Mode setting. The header changes behaviour between them; the content area changes from a seven-column grid to a three-column list.",
    "specCards": [
      {
        "cardKey": "dpcal-spec-card-modes",
        "demoKey": "modes",
        "demoControls": calendarControls,
        "title": "Date Picker - Calendar",
        "node": "6769:105110",
        "description": "Day mode is the default. Month and Year are reached from the header chips and return via the back chevron.",
        "previewHtml": "<div id=\"dpcal-spec-modes\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Mode", "value": "Day", "prop": "mode" },
              { "key": "Cells", "value": "42", "variants": { "mode:month": { "value": "12" }, "mode:year": { "value": "18" } } },
              { "key": "Header centre", "value": "2 Header Trigger instances", "variants": { "mode:month": { "value": "Title — static text" }, "mode:year": { "value": "Title — static text" } } },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Border", "value": "#E5EBF4", "token": "border/color-border-subtle", "swatch": true },
              { "key": "Title", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "Chevrons", "value": "#005CE5", "token": "icon/color-icon-link", "swatch": true },
              { "key": "Scroll indicator", "value": "#E5EBF4", "token": "annotation only — not built", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "312", "mono": true },
              { "key": "Height", "value": "336", "mono": true, "variants": { "mode:month": { "value": "296" }, "mode:year": { "value": "296" } } },
              { "key": "Padding", "value": "16", "mono": true },
              { "key": "Header height", "value": "24", "mono": true },
              { "key": "Header to content", "value": "8", "mono": true },
              { "key": "Row height", "value": "32", "mono": true },
              { "key": "Row gap", "value": "8", "mono": true, "variants": { "mode:month": { "value": "16" }, "mode:year": { "value": "16" } } },
              { "key": "Corner radius", "value": "8", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Header title", "value": "Primary/Bold/Subheading", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold · 16 / 16 · +0.25", "mono": true },
              { "key": "Cell text", "value": "supplied by Date Picker - Cell", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    selection<span class=\"syn-punc\">:</span> $date<span class=\"syn-punc\">,</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.day</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">CalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/gcash/east-blue-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Gradle",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.gcash.eastblue:components:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Both platforms ship a calendar with locale, keyboard and accessibility support built in; the intent is a tokenised wrapper over those, not a reimplementation."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "Mode", "swift": "CalendarMode (.day / .month / .year)", "compose": "mode: CalendarMode" },
        { "figma": "Header chevrons", "swift": "onPrevious / onNext / dismiss", "compose": "onPrevious / onNext / onBack" },
        { "figma": "Header Trigger ×2", "swift": "month and year selectors", "compose": "month and year selectors" },
        { "figma": "Content cells", "swift": "EBPickerCell per date", "compose": "EBPickerCell per date" },
        { "figma": "Scrollbar", "swift": "— platform indicator", "compose": "— platform indicator" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "As the overlay of a date field",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">:</span> $date<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">:</span> $date<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span> onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">})</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Selecting a range",
        "swift": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    range<span class=\"syn-punc\">:</span> $dateRange<span class=\"syn-punc\">,</span>\n    mode<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.day</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerCalendar</span><span class=\"syn-punc\">(</span>\n    range <span class=\"syn-eq\">=</span> dateRange<span class=\"syn-punc\">,</span>\n    mode <span class=\"syn-eq\">=</span> <span class=\"syn-type\">CalendarMode</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span>\n<span class=\"syn-punc\">)</span>"
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
      { "id": "C3", "criterion": "Token Coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Surface and border are bound; a <code>main/date-picker/surface/*</code> namespace is still worth proposing for the card itself." },
      { "id": "C4", "criterion": "Native Mappability", "status": "refine", "statusLabel": "Needs Refinement", "notes": "The header carries two behaviours, disambiguated by <code>Mode</code> and by the centre layer's name. The drawn scrollbar maps to nothing." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "States come from the cell. Inherits the cell's 32×32 and the header trigger's 24px touch targets." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "Chevrons are icon instances; the rasters are gone." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Mode</code> is the only setting and maps to an enum." },
      { "aspect": "Token coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Surface namespace still to be proposed." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
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
