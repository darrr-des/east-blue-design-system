import type { ComponentData, DemoControlSection } from '../types';

const headerControls: DemoControlSection[] = [
  {
    heading: 'Content',
    rows: [
      {
        label: '#text',
        prop: 'day',
        defaultValue: 'Su',
        options: [
          { value: 'Su', label: 'Su' },
          { value: 'M', label: 'M' },
          { value: 'T', label: 'T' },
          { value: 'W', label: 'W' },
          { value: 'Th', label: 'Th' },
          { value: 'F', label: 'F' },
          { value: 'Sa', label: 'Sa' }
        ]
      }
    ]
  }
];

export const datePickerHeader: ComponentData = {
  "meta": {
    "slug": "date-picker-header",
    "name": "Date Picker - Header",
    "node": "6788:109823",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6788-109823",
    "description": "The weekday label above each column of the calendar grid. One component, no versions — it only ever displays text.",
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
      "title": "Keep — small, static, and doing exactly one job",
      "text": "All four DS Health traits pass. Seven instances sit in the first row of <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a>'s Day mode. It shares the day cell's 32×32 footprint so the columns line up, and it is deliberately heavier — Bold against the cells' SemiBold — so the weekday strip reads as a header rather than as another row of dates."
    }
  },
  "overview": {
    "inContextNote": "Sits in the top row of the day grid, one per column. It replaced the old pattern of instance-swapping a day cell into the weekday row, which meant the header inherited states and selection behaviour it could never use.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dph-demo-preview\"><span class=\"eb-preview-dpwk\">Su</span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#text</span><select id=\"dph-ctrl-day\" class=\"demo-panel-select\" onchange=\"_dphUpdate()\"><option value=\"Su\" selected=\"\">Su</option><option value=\"M\">M</option><option value=\"T\">T</option><option value=\"W\">W</option><option value=\"Th\">Th</option><option value=\"F\">F</option><option value=\"Sa\">Sa</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One component covers all seven columns; only the text changes."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own footprint and type style. Nothing about which weekday it shows is baked in."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Same <code>Container</code> → <code>#text</code> anatomy and same 32×32 footprint as <a href=\"/components/date-picker-cell\">Date Picker - Cell</a>, which is what keeps the columns aligned."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Instanced seven times in the first <code>Row</code> of the calendar's Day mode."
      }
    ],
    "behavior": [
      {
        "state": "Static",
        "ios": "na",
        "android": "na",
        "property": "Text",
        "notes": "No states. The weekday strip is not interactive."
      },
      {
        "state": "#text",
        "ios": "na",
        "android": "na",
        "property": "String",
        "notes": "Su · M · T · W · Th · F · Sa. Mixed lengths are deliberate, to save width on small screens."
      }
    ],
    "resolved": [
      {
        "headline": "The weekday row has its own component.",
        "body": "It used to be a <code>Date Picker - Item</code> instance with its number swapped for a weekday, which meant the header carried selection, today and disabled states it could never use. This component has none of them.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The name no longer implies versions it doesn't have.",
        "body": "It was called <code>Picker Header/Default</code>. Figma reads the slash as nesting, so the assets panel showed a variant group around a component that has no variants. It is now a plain name.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The wrapper matches the rest of the family.",
        "body": "The inner frame was <code>container</code>, lowercase — a third spelling alongside the cell's <code>Container</code> and the trigger's <code>Label Container</code>. All three now read <code>Container</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Rename the component to <code>Date Picker - Header</code> in Figma.",
        "body": "It is still <code>Picker Header</code> at node <code>6788:109823</code>. The family agreed on the <code>Date Picker - </code> prefix so all five components group together.",
        "tag": "Rename"
      },
      {
        "headline": "Hide the weekday strip from screen readers.",
        "body": "The letters are a visual aid; a screen reader announcing \"Su M T W Th F Sa\" before every calendar adds noise, and each day cell already announces its own full date including the weekday.",
        "tag": "A11y"
      },
      {
        "headline": "Note that the abbreviations are locale-dependent.",
        "body": "The mixed one and two letter set is a deliberate width saving for small screens, but it is English-specific. Document that the native implementation should take these from the locale's calendar symbols rather than hardcoding them.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Anatomy",
    "specCards": [
      {
        "cardKey": "dph-spec-card-default",
        "demoKey": "default",
        "demoControls": headerControls,
        "title": "Date Picker - Header",
        "node": "6788:109823",
        "description": "A single component with no versions. The 32×32 footprint matches the day cell so the grid columns align.",
        "previewHtml": "<div id=\"dph-spec-default\"><span class=\"eb-preview-dpwk\">Su</span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Versions", "value": "none" },
              { "key": "#text", "value": "Su", "prop": "day" },
              { "key": "States", "value": "none — not interactive" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Text", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "32 × 32", "mono": true },
              { "key": "Corner radius", "value": "24", "mono": true },
              { "key": "Alignment", "value": "matches Date Picker - Cell", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/Bold/Body", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true },
              { "key": "Weight vs cell", "value": "Bold 700 against the cell's SemiBold 600", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBPickerHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Su\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBPickerHeader</span><span class=\"syn-punc\">(</span>text <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Su\"</span><span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet. On both platforms the weekday strip is normally supplied by the calendar view rather than built by hand."
    },
    "propertyMapping": {
      "description": "One text property. Everything else is fixed.",
      "rows": [
        { "figma": "#text", "swift": "String", "compose": "text: String" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A weekday strip from the locale",
        "swift": "<span class=\"syn-type\">HStack</span><span class=\"syn-punc\">(</span>spacing<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>calendar<span class=\"syn-punc\">.</span>veryShortWeekdaySymbols<span class=\"syn-punc\">,</span> id<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">\\.self</span><span class=\"syn-punc\">) {</span>\n        <span class=\"syn-type\">EBPickerHeader</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">accessibilityHidden</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">Row</span><span class=\"syn-punc\">(</span>Modifier<span class=\"syn-punc\">.</span><span class=\"syn-fn\">clearAndSetSemantics</span><span class=\"syn-punc\">{}) {</span>\n    weekdays<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBPickerHeader</span><span class=\"syn-punc\">(</span>text <span class=\"syn-eq\">=</span> it<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The strip is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> on the row",
        "android": "<code>Modifier.clearAndSetSemantics {}</code> on the row"
      },
      {
        "requirement": "Weekday still reaches the user",
        "ios": "Each day cell's label includes the weekday",
        "android": "Same, via the cell's <code>contentDescription</code>"
      },
      {
        "requirement": "Labels come from the locale",
        "ios": "<code>Calendar.current.veryShortWeekdaySymbols</code>",
        "android": "<code>DayOfWeek.getDisplayName(TextStyle.NARROW, locale)</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Take the labels from the platform's calendar symbols so they follow the user's locale and first-day-of-week.",
        "dontText": "Don't hardcode Su–Sa; not every locale starts the week on Sunday."
      },
      {
        "doText": "Keep the 32×32 footprint so the header aligns with the day columns.",
        "dontText": "Don't let the header set its own width — the grid columns will drift."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Container</code> → <code>#text</code>, matching the rest of the family." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "No versions, and the slash that implied a variant group is gone from the name." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "One text colour and one surface, both standard tokens." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A text label in a row — trivially mappable on both platforms." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Not interactive." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "No assets." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "A single text property." },
      { "aspect": "Token coverage", "status": "ready", "statusLabel": "Ready", "notes": "Text and surface both bound." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 1,
      "description": "One component, no versions. The seven columns differ only by their text.",
      "columns": ["Component", "Size", "Node"],
      "rows": [
        { "cells": ["Date Picker - Header", "32 × 32", "6788:109823"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "First assessment · node 6788:109823",
      "rows": [
        {
          "body": "<strong>C1 — the weekday row got its own component.</strong> It was previously a <code>Date Picker - Item</code> instance carrying states a header can never use.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — name no longer contains a slash.</strong> <code>Picker Header/Default</code> read as a variant group in the assets panel around a component with no variants.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C1 — wrapper renamed</strong> from <code>container</code> to <code>Container</code>, matching the cell and the header trigger.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Bold 700 against the cell's SemiBold 600 confirmed as intentional header hierarchy.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    }
  ]
};
