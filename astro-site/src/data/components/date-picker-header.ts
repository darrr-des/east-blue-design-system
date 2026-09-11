import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

const headerControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Label',
        prop: 'label',
        control: 'input' as const,
        defaultValue: 'Su',
        options: []
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dph-demo-preview\"><span class=\"eb-preview-dpwk\">Su</span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Label</span><input id=\"dph-ctrl-label\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"Su\" oninput=\"_dphUpdate()\" /></div></div></div></div>",
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
        "headline": "The invisible white fill is gone.",
        "body": "The component frame carried a <code>#FFFFFF</code> fill switched off. Nothing drew it — the <code>Container</code> beneath paints the real surface — but it read as a second surface to anyone inspecting the layers, and it was the same leftover found on Date Picker - Cell. Cleared in Figma during this run and confirmed on the node.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
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
    ],
    "appliedRecommendations": [
      {
        "headline": "Note that the abbreviations are locale-dependent.",
        "body": "v1.1: Applied — a Usage Guideline pairs \"take the labels from the platform's calendar symbols\" with \"don't hardcode Su–Sa; not every locale starts the week on Sunday\", and Accessibility now names the API on each platform: <code>Calendar.current.veryShortWeekdaySymbols</code> and <code>DayOfWeek.getDisplayName(TextStyle.NARROW, locale)</code>.",
        "tag": "Docs"
      },
      {
        "headline": "Hide the weekday strip from screen readers.",
        "body": "v1.1: Applied — Accessibility carries it for both platforms: <code>.accessibilityHidden(true)</code> on the row and <code>Modifier.clearAndSetSemantics {}</code>, paired with a row confirming each day cell still announces its own weekday. The strip is hidden without the information being lost.",
        "tag": "A11y"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Header</code> in Figma.",
        "body": "v1.1: Applied — node <code>6788:109823</code> now reads <code>Date Picker - Header</code>, so all five family members group together in the assets panel. The recommendation described it as still <code>Picker Header</code>; that stopped being true during this run.",
        "tag": "Rename"
      },
    ]
  },
  "style": {
    "heading": "Anatomy",
    "description": "One component, no versions. A 32 × 32 slot matching the day cell beneath it, carrying a weekday abbreviation and nothing else.",
    "colorsTables": [
      buildStatelessColorsTable({
        title: "Colors",
        description: "Two roles and no states — the weekday label is never pressed, selected or disabled. Both tokens match the rest of the family: the same pair carries Date Picker - Cell's default day.",
        rows: [
          { role: "Container surface", token: "bg/color-bg-primary-inverse", value: "#FFFFFF" },
          { role: "#text",             token: "text/color-text",            value: "#0A2757" }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "dph-spec-card-default",
        "demoKey": "default",
        "demoControls": headerControls,
        "title": "Header",
        "node": "6788:109823",
        "description": "",
        "previewHtml": "<div id=\"dph-spec-default\"><span class=\"eb-preview-dpwk\">Su</span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Label", "value": "Su", "prop": "label" },
              { "key": "Versions", "value": "1" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#text", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "Container surface", "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#text", "value": "Primary/Label/Small", "mono": true }
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
              { "key": "Padding V", "value": "10px top · 8px bottom (derived)", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerHeader</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Su\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerHeader</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Su\"</span><span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Date Picker family, not this component: Cell, Header, Header Trigger, Calendar and the picker itself all ship in <code>com.eastblue.ds:date-picker</code> and import <code>com.eastblue.ds.datepicker.*</code>. On both platforms the weekday strip is normally supplied by the calendar view rather than assembled by hand."
    },
    "propertyMapping": {
      "description": "One property. Everything else about this component is fixed — a 32 × 32 slot that carries a weekday abbreviation.",
      "rows": [
        {
          "figma": "Label (text)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Header — one weekday column",
        "swift": "<span class=\"syn-type\">EBDatePickerHeader</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Su\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerHeader</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Su\"</span><span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label",
        "ios": "<code>.accessibilityLabel(\"Sunday\")</code> — the abbreviation spelled out",
        "android": "<code>contentDescription = \"Sunday\"</code>"
      },
      {
        "requirement": "Role / trait",
        "ios": "No trait — it is static text, never a control",
        "android": "<code>Modifier.semantics { }</code> — no role, it is not clickable"
      },
      {
        "requirement": "Dynamic type",
        "ios": "Supported, scales to AX5 — the 32pt slot is fixed, so very large sizes truncate before the grid reflows",
        "android": "<code>sp</code> units; the 32dp column is fixed for the same reason"
      },
      {
        "requirement": "Labels come from the locale",
        "ios": "<code>Calendar.current.veryShortWeekdaySymbols</code>",
        "android": "<code>DayOfWeek.getDisplayName(TextStyle.NARROW, locale)</code>"
      },
      {
        "requirement": "The strip is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> on the row",
        "android": "<code>Modifier.clearAndSetSemantics {}</code> on the row"
      },
      {
        "requirement": "Weekday still reaches the user",
        "ios": "Each day cell's label includes the weekday",
        "android": "Same, via the cell's <code>contentDescription</code>"
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
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "No versions and one property, named <code>Label</code> after what it carries. The component is now <code>Date Picker - Header</code>, so it groups with the rest of the family in the assets panel." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "One text colour and one surface, both standard tokens." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A text label in a row — trivially mappable on both platforms." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Not interactive." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "No assets." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
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
      "version": "1.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Renamed to the family, Style and Code tabs rebuilt — node 6788:109823",
      "rows": [
        {
          "body": "<strong>The component has its family name.</strong> It was <code>Picker Header</code> at the August assessment and is now <code>Date Picker - Header</code>, so Cell, Header, Header Trigger, Calendar and the picker sort together. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The invisible white fill is gone.</strong> The component frame carried a <code>#FFFFFF</code> fill switched off, over a <code>Container</code> that paints the real surface. Nothing drew it, but it read as a second surface when inspecting the layers — the same leftover cleared from Cell.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>The text property was documented as a layer.</strong> Both tabs called it <code>#text</code>; Figma names the property <code>Label</code>. Property Mapping, the spec card and the demo panel now use the property name, and the internal control key moved from <code>day</code> to <code>label</code> to match.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The weekday picker offered seven values Figma does not have.</strong> The demo panel was a dropdown of <code>Su</code> through <code>Sa</code>, which documented a picklist that does not exist and hid that the label is free text. It is now a text input, as the guide requires for a text property.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The documented type style did not exist.</strong> Typography read <code>Primary/Bold/Body</code> — no such style in the database. The layer resolves to <code>Primary/Label/Small</code>. Two rows went with it: the font spec, and a \"Weight vs cell\" row comparing this component to the day cell, which was neither a style name nor accurate any more.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Both colour tokens named the wrong steps.</strong> They read <code>text/color-text-heading</code> and <code>bg/color-bg-main</code>; the bindings are <code>text/color-text</code> and <code>bg/color-bg-primary-inverse</code> — the same pair the rest of the family uses. The hex values were right, which is what let the wrong token paths survive.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Layout had none of the seven keys.</strong> It carried <code>Dimensions</code>, <code>Corner radius</code> and an <code>Alignment</code> whose value was \"matches Date Picker - Cell\" — a cross-reference rather than a value. Now Height · Width · Radius · Padding H · Padding V · Alignment, with the asymmetric 10px top / 8px bottom recorded as read: the brand's fonts sit high in their box, so that split is intentional.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview rendered in the wrong typeface.</strong> <code>.eb-preview-dpwk</code> declared no font and inherited the documentation font, BarkAda, while the component is Proxima Soft. It also painted no background, though the <code>Container</code> is white, and had no line-height against Figma's 14px.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. Under the family rule the artifact is <code>com.eastblue.ds:date-picker</code>, imported as <code>com.eastblue.ds.datepicker.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets documented the strip, not the component.</strong> They showed <code>HStack</code> and <code>Row</code> looping over the locale's weekday symbols — how to assemble a header row. One call now, <code>EBDatePickerHeader(label:)</code>, built from the same definition as the spec card and the live preview, and renamed from <code>EBPickerHeader</code> to the family form.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Accessibility answered for the row, not the cell.</strong> All three rows described the strip. They are right and stayed; three more were added for this component — its label, its lack of a role, and how it behaves under Dynamic Type in a fixed 32pt column. Six rows, both platforms on every one.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The scorecard cited a rename two renames old.</strong> C2 read \"the slash that implied a variant group is gone from the name\" — true once, describing a name the component no longer has. It now records the current name and the single <code>Label</code> property.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Code Connect was populated on a component with nothing registered.</strong> Three rows claimed readiness against a native library that does not exist. The section is gone; C7 stays Not Mapped. A <code>getSnippet</code> was added so the DEV code block is live rather than frozen.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
