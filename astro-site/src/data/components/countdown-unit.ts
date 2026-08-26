import type { ComponentData, DemoControlSection } from '../types';

const unitControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Layout',
        prop: 'layout',
        defaultValue: 'stacked',
        options: [
          { value: 'stacked', label: 'Stacked' },
          { value: 'inline', label: 'Inline' }
        ]
      }
    ]
  }
];

export const countdownUnit: ComponentData = {
  "meta": {
    "slug": "countdown-unit",
    "name": "Countdown - Unit",
    "node": "7831:111593",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7831-111593",
    "description": "One slice of a countdown — a number and the unit it counts. Stacked for the boxed and bar layouts, inline for the pill.",
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
    "navGroup": "Countdown",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the piece every countdown is built from",
      "text": "All four DS Health traits pass. <a href=\"/components/countdown\">Countdown</a> assembles four of these in all three of its layouts, so the number and its label are drawn one way everywhere. <code>Layout = Stacked | Inline</code> covers both arrangements the system needs: the number above its label in the boxed and bar styles, and the two side by side in the pill. Colour comes from whatever places it — see the note on that in Countdown."
    }
  },
  "overview": {
    "inContextNote": "Never used on its own. Four instances sit inside every Countdown, one per unit, and the layout that holds them decides whether they stack or run inline.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cdu-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Layout</span><select id=\"cdu-ctrl-layout\" class=\"demo-panel-select\" onchange=\"_cduUpdate()\"><option value=\"stacked\" selected=\"\">Stacked</option><option value=\"inline\">Inline</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#time</span><input type=\"text\" id=\"cdu-ctrl-time\" class=\"demo-panel-select demo-panel-input\" value=\"00\" oninput=\"_cduUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#unit</span><input type=\"text\" id=\"cdu-ctrl-unit\" class=\"demo-panel-select demo-panel-input\" value=\"days\" oninput=\"_cduUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Every unit in every countdown layout is this component — four per Countdown, across all eighteen of its versions."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own two text layers and both arrangements. It holds no box, border or padding, which is what lets the same piece sit in a filled box, a bar and a pill."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both versions read <code>#time</code> then <code>#unit</code>. Stacked centres the label under the number; Inline sets both at the same size on one line."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Instanced by <a href=\"/components/countdown\">Countdown</a> in all three styles, and reaches <a href=\"/components/countdown-promo\">Countdown Promo</a> through the Countdown it contains."
      }
    ],
    "behavior": [
      {
        "state": "Layout=Stacked",
        "ios": "na",
        "android": "na",
        "property": "25 × 34",
        "notes": "Number above label. Used by the Per and One styles."
      },
      {
        "state": "Layout=Inline",
        "ios": "na",
        "android": "na",
        "property": "hugs content",
        "notes": "Number and label on one line at 16px. Used by the Pill style."
      },
      {
        "state": "#time",
        "ios": "na",
        "android": "na",
        "property": "String",
        "notes": "Always two digits — a leading zero keeps the row from shifting as the value falls."
      },
      {
        "state": "#unit",
        "ios": "na",
        "android": "na",
        "property": "String",
        "notes": "\"days\" / \"hrs\" / \"mins\" / \"secs\" stacked; \"d\" / \"h\" / \"m\" / \"s\" inline."
      }
    ],
    "resolved": [
      {
        "headline": "The component says what it is.",
        "body": "It was called <code>Base Time-Unit Primitive</code> — a description of its place in the architecture rather than of the object. Everything else in the system is named for the thing itself, so it is now <code>Countdown - Unit</code>, matching the family prefix.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The setting has real values.",
        "body": "It shipped with Figma's untouched default, <code>Property 1=Default</code> — a dropdown with one meaningless value. It is now <code>Layout = Stacked | Inline</code>, where both values do something.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The label layer is called what it holds.",
        "body": "<code>#blurb</code> became <code>#unit</code>. In the naming guidelines a blurb is a short descriptive passage; this layer holds \"days\".",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The pill stopped abusing the stacked version.",
        "body": "Pill used to take the stacked unit, put the whole string into <code>#time</code> as \"00d\", override the type from Bold 20 to SemiBold 16, and leave <code>#unit</code> reading \"days\" on all four instances just outside the pill's edge. The Inline version replaced all of that — 24 dead layers across the six pill versions are gone.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Raise the muted label colour on filled surfaces if the palette allows.",
        "body": "On the bold blue treatment the label renders at roughly 3.2:1 against its box, where 10px text wants 4.5:1. It was raised one tier already. The ceiling is the surface rather than the token — pure white on that blue reaches only about 4.4:1 — so clearing it needs a darker box, which the brand palette does not currently offer. Kept as-is deliberately to preserve the hierarchy between the number and its label.",
        "tag": "Token"
      },
      {
        "headline": "Let the number and label be separate parameters natively.",
        "body": "Keeping <code>#time</code> and <code>#unit</code> apart is what lets one component serve both layouts and both abbreviation schemes. The native API should take them as two values rather than a preformatted string, so the platform can localise the unit and the layout can decide how to arrange them.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Layouts",
    "description": "Two arrangements of the same two text layers. Stacked carries the size contrast; Inline flattens both to one line.",
    "specCards": [
      {
        "cardKey": "cdu-spec-card-unit",
        "demoKey": "unit",
        "demoControls": unitControls,
        "title": "Countdown - Unit",
        "node": "7831:111593",
        "description": "The number is always two digits. The label changes wording between layouts — full words when stacked, single letters inline.",
        "previewHtml": "<div id=\"cdu-spec-unit\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Stacked", "prop": "layout" },
              { "key": "#time", "value": "00" },
              { "key": "#unit", "value": "days", "variants": { "layout:inline": { "value": "d" } } },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#time", "value": "#005CE5", "token": "text/color-text-link", "swatch": true },
              { "key": "#unit", "value": "#005CE5", "token": "text/color-text-link", "swatch": true },
              { "key": "On a filled box", "value": "#FFFFFF", "token": "set by Countdown", "swatch": true },
              { "key": "Label on a filled box", "value": "#F6F9FD @ 80%", "token": "set by Countdown", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "25 × 34", "mono": true, "variants": { "layout:inline": { "value": "hugs content · 16 tall" } } },
              { "key": "Arrangement", "value": "number above label", "mono": true, "variants": { "layout:inline": { "value": "number then label, one line" } } },
              { "key": "Alignment", "value": "label centred under the number", "mono": true, "variants": { "layout:inline": { "value": "baseline" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#time", "value": "Proxima Soft Bold · 20 / 24 · 0", "mono": true, "variants": { "layout:inline": { "value": "Proxima Soft SemiBold · 16 / 16 · +0.25" } } },
              { "key": "#unit", "value": "Proxima Soft SemiBold · 10 / 10 · +0.25", "mono": true, "variants": { "layout:inline": { "value": "Proxima Soft SemiBold · 16 / 16 · +0.25" } } }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">,</span>\n    unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.days</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.stacked</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">,</span>\n    unit <span class=\"syn-eq\">=</span> <span class=\"syn-type\">TimeUnit</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Days</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">UnitLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet. Most teams will never call this directly; it is what Countdown draws."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "Layout", "swift": "UnitLayout (.stacked / .inline)", "compose": "layout: UnitLayout" },
        { "figma": "#time", "swift": "value: Int — zero-padded on render", "compose": "value: Int" },
        { "figma": "#unit", "swift": "unit: TimeUnit — localised label", "compose": "unit: TimeUnit" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Stacked, as the boxed and bar styles use it",
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">:</span> hours<span class=\"syn-punc\">,</span> unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.hours</span><span class=\"syn-punc\">,</span> layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.stacked</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>value <span class=\"syn-eq\">=</span> hours<span class=\"syn-punc\">,</span> unit <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Hours</span><span class=\"syn-punc\">,</span> layout <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Stacked</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Inline, as the pill uses it",
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">:</span> hours<span class=\"syn-punc\">,</span> unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.hours</span><span class=\"syn-punc\">,</span> layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.inline</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>value <span class=\"syn-eq\">=</span> hours<span class=\"syn-punc\">,</span> unit <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Hours</span><span class=\"syn-punc\">,</span> layout <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Inline</span><span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The unit is not announced on its own",
        "ios": "<code>.accessibilityHidden(true)</code> — the countdown announces the whole duration",
        "android": "<code>Modifier.clearAndSetSemantics {}</code> on the unit"
      },
      {
        "requirement": "Labels come from the locale",
        "ios": "<code>DateComponentsFormatter</code> supplies the unit wording",
        "android": "<code>MeasureFormat</code> with the user's locale"
      },
      {
        "requirement": "Numerals respect the user's numbering system",
        "ios": "<code>NumberFormatter</code> rather than string interpolation",
        "android": "<code>NumberFormat.getInstance(locale)</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pass the number and the unit separately so the platform can localise the label.",
        "dontText": "Don't pass a preformatted \"00d\" string — it can't be translated or re-laid-out."
      },
      {
        "doText": "Keep two digits, including the leading zero.",
        "dontText": "Don't let the width change as the value drops; the row will jitter every second."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "Two text layers, <code>#time</code> and <code>#unit</code>, in both versions. No leftover or hidden layers." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Layout = Stacked | Inline</code>. The untouched <code>Property 1</code> default is gone." },
      { "id": "C3", "criterion": "Token Coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Colour is set by whatever places the unit. The muted label on filled surfaces sits below 4.5:1 — a palette constraint, accepted deliberately." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "Two labels in a stack or a row — trivially mappable, and the split keeps localisation possible." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Display only — a countdown is read, not operated." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "No assets — type only." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "One enum and two text values." },
      { "aspect": "Token coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Colour arrives from the parent rather than from the component." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 2,
      "description": "1 Layout setting × 2 values.",
      "columns": ["Layout", "Size", "Type", "Used by"],
      "rows": [
        { "cells": ["Stacked", "25 × 34", "Bold 20 over SemiBold 10", "Per · One"] },
        { "cells": ["Inline", "hugs · 16 tall", "SemiBold 16 throughout", "Pill"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "Extracted as a primitive · node 7831:111593",
      "rows": [
        {
          "body": "<strong>Split out of Countdown.</strong> The old component drew its own numbers in every layout; the unit is now one shared piece.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C1 — renamed</strong> from <code>Base Time-Unit Primitive</code> to <code>Countdown - Unit</code>, matching the family prefix.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — <code>Property 1=Default</code> replaced</strong> with <code>Layout = Stacked | Inline</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — <code>#blurb</code> renamed to <code>#unit</code></strong>, which is what it holds.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C1 — the Inline version replaced Pill's overrides.</strong> Pill previously packed \"00d\" into <code>#time</code>, changed the type style, and left <code>#unit</code> reading \"days\" outside the pill on all four instances.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C3 — muted label raised one tier</strong> on filled surfaces, from roughly 2.9:1 to 3.2:1. Still under 4.5:1; the surface, not the token, is the ceiling.",
          "delta": { "kind": "partial", "label": "C3 partial" }
        }
      ]
    }
  ]
};
