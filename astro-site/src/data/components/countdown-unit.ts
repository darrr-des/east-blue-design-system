import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

const unitControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Value',
        prop: 'time',
        control: 'input' as const,
        defaultValue: '00',
        options: []
      },
      {
        label: 'UnitLabel',
        prop: 'unit',
        control: 'input' as const,
        defaultValue: 'days',
        options: []
      },
      {
        label: 'hasUnitLabel',
        prop: 'hasunit',
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cdu-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Layout</span><select id=\"cdu-ctrl-layout\" class=\"demo-panel-select\" onchange=\"_cduUpdate()\"><option value=\"stacked\" selected>Stacked</option><option value=\"inline\">Inline</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Value</span><input type=\"text\" id=\"cdu-ctrl-time\" class=\"demo-panel-select demo-panel-input\" value=\"00\" oninput=\"_cduUpdate()\" /></div><div class=\"demo-panel-row\" id=\"cdu-row-unit\"><span class=\"demo-panel-label\">UnitLabel</span><input type=\"text\" id=\"cdu-ctrl-unit\" class=\"demo-panel-select demo-panel-input\" value=\"days\" oninput=\"_cduUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasUnitLabel</span><select id=\"cdu-ctrl-hasunit\" class=\"demo-panel-select\" onchange=\"_cduUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div></div></div></div>",
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
        "headline": "The label property is one word.",
        "body": "It was <code>Unit Label</code>, with a space. Property names become parameters, and a space has to be transformed away wherever that happens — the same defect as <code>week 6</code> on Date Picker - Calendar. It is now <code>UnitLabel</code>, which also pairs with the <code>hasUnitLabel</code> boolean beside it.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
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
    ],
    "appliedRecommendations": [
      {
        "headline": "Let the number and label be separate parameters natively.",
        "body": "v1.1: Applied — Property Mapping takes them as two values, <code>value: Int</code> and <code>unit: EBTimeUnit</code>, never a preformatted string. The enum goes further than the recommendation asked: the platform renders the label from it, so the label follows the device locale instead of shipping whatever a designer typed in Figma.",
        "tag": "Docs"
      },
    ]
  },
  "style": {
    "heading": "Layouts",
    "description": "Two layouts of the same two text layers. Stacked sets the number over its label at contrasting sizes; Inline runs both on one line at a single size. <code>hasUnitLabel</code> drops the label from either.",
    "colorsTables": [
      buildStatelessColorsTable({
        title: "Colors",
        description: "Two text layers, one colour, no states — the unit is never pressed or disabled on its own. It also paints no surface: whatever sits behind it belongs to the countdown that places it.",
        rows: [
          { role: "#time", token: "text/color-text-primary", value: "#005CE5" },
          { role: "#unit", token: "text/color-text-primary", value: "#005CE5" }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "stacked",
        "demoKey": "stacked",
        "demoControls": unitControls,
        "title": "Stacked",
        "node": "5625:35647",
        "description": "",
        "previewHtml": "<div id=\"cdu-spec-stacked\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Stacked" },
              { "key": "Value", "value": "00", "prop": "time" },
              { "key": "UnitLabel", "value": "days", "prop": "unit" },
              { "key": "hasUnitLabel", "value": "true", "prop": "hasunit" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#time", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true },
              { "key": "#unit", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#time", "value": "Primary/Headlines/Segment", "mono": true },
              { "key": "#unit", "value": "Primary/Label/Light/Tiny", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "34px", "mono": true },
              { "key": "Width", "value": "25px", "mono": true },
              { "key": "Padding H", "value": "0px", "mono": true },
              { "key": "Padding V", "value": "0px", "mono": true },
              { "key": "Gap", "value": "0px — the label sits flush under the number", "mono": true },
              { "key": "Alignment", "value": "Center (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">,</span>\n    unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.days</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.stacked</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> 0<span class=\"syn-punc\">,</span>\n    unit <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTimeUnit</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Days</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownUnitLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "inline",
        "demoKey": "inline",
        "demoControls": unitControls,
        "title": "Inline",
        "node": "7831:111597",
        "description": "",
        "previewHtml": "<div id=\"cdu-spec-inline\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Inline" },
              { "key": "Value", "value": "00", "prop": "time" },
              { "key": "UnitLabel", "value": "days", "prop": "unit" },
              { "key": "hasUnitLabel", "value": "true", "prop": "hasunit" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#time", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true },
              { "key": "#unit", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#time", "value": "Primary/Label/Light/Base", "mono": true },
              { "key": "#unit", "value": "Primary/Label/Light/Base", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "16px", "mono": true },
              { "key": "Width", "value": "55px", "mono": true },
              { "key": "Padding H", "value": "0px", "mono": true },
              { "key": "Padding V", "value": "0px", "mono": true },
              { "key": "Gap", "value": "0px — the label follows the number with no space", "mono": true },
              { "key": "Alignment", "value": "Baseline (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">,</span>\n    unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.days</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.inline</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> 0<span class=\"syn-punc\">,</span>\n    unit <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTimeUnit</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Days</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownUnitLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Inline</span>\n<span class=\"syn-punc\">)</span>"
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:countdown:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>countdown<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Countdown family, not this component: Unit, Promo and Countdown itself all ship in <code>com.eastblue.ds:countdown</code> and import <code>com.eastblue.ds.countdown.*</code>. In practice a team places a Countdown rather than a Unit; this is the piece it renders."
    },
    "propertyMapping": {
      "description": "Four properties, in the order the Figma property panel lists them. One shape difference is deliberate and worth knowing: Figma exposes <code>UnitLabel</code> as free text because a designer has to type something to see it, but the native parameter is an enum the platform localises. The string in Figma is what that enum renders in English — passing a string through would put <code>days</code> in front of every user regardless of locale, which is what the Accessibility and Usage Guidelines sections both argue against.",
      "rows": [
        {
          "figma": "Layout — Stacked, Inline",
          "swift": "<code>layout: EBCountdownUnitLayout = .stacked</code>",
          "compose": "<code>layout: EBCountdownUnitLayout = Stacked</code>"
        },
        {
          "figma": "Value (text)",
          "swift": "<code>value: Int</code> — zero-padded on render, so Figma's <code>\"00\"</code> is what a value of <code>0</code> draws",
          "compose": "<code>value: Int</code> — same"
        },
        {
          "figma": "UnitLabel (text)",
          "swift": "<code>unit: EBTimeUnit</code> — the platform renders the label. Figma's text is the <em>result</em>, not an input: a typed <code>\"days\"</code> would hardcode English into every instance",
          "compose": "<code>unit: EBTimeUnit</code> — same, resolved against the device locale"
        },
        {
          "figma": "hasUnitLabel — true, false",
          "swift": "<code>showsUnit: Bool = true</code>",
          "compose": "<code>showsUnit: Boolean = true</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Stacked — the boxed and bar styles",
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">,</span>\n    unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.days</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.stacked</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> 0<span class=\"syn-punc\">,</span>\n    unit <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTimeUnit</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Days</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownUnitLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Stacked</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Inline — the pill",
        "swift": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">,</span>\n    unit<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.days</span><span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.inline</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownUnit</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> 0<span class=\"syn-punc\">,</span>\n    unit <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTimeUnit</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Days</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownUnitLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Inline</span>\n<span class=\"syn-punc\">)</span>"
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
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Both text layers are bound to <code>text/color-text-primary</code>, confirmed by design. The unit paints no surface of its own, so the contrast of a muted label on a filled box is the placing component's concern, not this one's." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "Two labels in a stack or a row — trivially mappable, and the split keeps localisation possible." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Display only — a countdown is read, not operated." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "No assets — type only." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "1 <code>Layout</code> setting × 2 values. <code>Value</code>, <code>UnitLabel</code> and <code>hasUnitLabel</code> are content settings and do not multiply the set.",
      "columns": ["Layout", "Size", "Type", "Used by", "Node"],
      "rows": [
        { "cells": ["Stacked", "25 × 34", "Primary/Headlines/Segment over Primary/Label/Light/Tiny", "Per · One", "5625:35647"] },
        { "cells": ["Inline", "55 × 16", "Primary/Label/Light/Base throughout", "Pill", "7831:111597"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "UnitLabel renamed, Style and Code tabs rebuilt — node 7831:111593",
      "rows": [
        {
          "body": "<strong>The label property is one word.</strong> <code>Unit Label</code> became <code>UnitLabel</code>. Property names become parameters, and a space has to be transformed away wherever that happens — the same defect as <code>week 6</code> on Date Picker - Calendar. It now pairs with the <code>hasUnitLabel</code> boolean beside it. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Three of the four properties were undocumented.</strong> The page described <code>Layout</code> and nothing else; the Figma panel also carries <code>Value</code>, <code>UnitLabel</code> and <code>hasUnitLabel</code>. <code>get_node_info</code> cannot read property definitions, so the gap only surfaced when the property panel was checked directly — worth remembering as a limit of reading the node tree alone.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The preview invented an abbreviation.</strong> It swapped <code>days</code> for <code>d</code> whenever Layout was Inline, and the Properties row documented that swap as a fact with a <code>variants</code> override. Figma has <code>days</code> in both versions — the characters are the same on both nodes. The swap was a preview convenience written up as a specification.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Two colour rows described a component that is not this one.</strong> They recorded white text and a muted label on a filled box, neither of which the unit paints — it has no surface at all. Colours are now the two text layers, both <code>text/color-text-primary</code>, confirmed by design.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Typography was three font specs.</strong> <code>Proxima Soft Bold · 20 / 24 · 0</code> and its siblings gave way to the styles the layers resolve to: <code>Primary/Headlines/Segment</code> over <code>Primary/Label/Light/Tiny</code> when Stacked, and <code>Primary/Label/Light/Base</code> for both layers when Inline.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>One card became two.</strong> <code>Layout</code> is the driving property, so Stacked and Inline each get a card, with the three content settings as controls on both.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout had none of the seven keys</strong> — <code>Dimensions</code>, <code>Arrangement</code> and an <code>Alignment</code> whose value read \"label centred under the number\". Now Height · Width · Padding H · Padding V · Gap · Alignment on each card. Radius is omitted: the unit paints no shape to round.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Inline preview rendered at the Stacked sizes.</strong> The stylesheet hardcoded 20px and 10px with no Inline override, so the pill layout drew a 20px number over a 10px label where Figma has both at 16 / 16. The preview also declared <code>font-family: inherit</code>, so every layer drew in the documentation font — all of them are <code>Primary/*</code>, which is Proxima Soft.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Countdown family artifact <code>com.eastblue.ds:countdown:1.0.0</code> and imports <code>com.eastblue.ds.countdown.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping named layers and missed a property.</strong> Two of its three rows were <code>#time</code> and <code>#unit</code> rather than <code>Value</code> and <code>UnitLabel</code>, and <code>hasUnitLabel</code> was absent. Four rows now, with the type corrected from <code>UnitLayout</code> to <code>EBCountdownUnitLayout</code>.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Figma and the native API disagree about the unit, deliberately.</strong> Figma exposes <code>UnitLabel</code> as free text because a designer has to type something to see it; the parameter is <code>unit: EBTimeUnit</code>, an enum the platform localises. Figma's string is what that enum renders in English. The mapping now says so outright rather than presenting a string parameter that would ship \"days\" to every user — which is what the Accessibility and Usage Guidelines sections already argued against.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>C3 was held open for a contrast problem on another component's surface.</strong> The note read \"the muted label on filled surfaces sits below 4.5:1\"; the unit never paints that surface. Both its text layers are bound and confirmed, so C3 moves to Ready. The recommendation about raising that colour stays open here but belongs to whatever places the unit — it should move to Countdown when that component is reviewed.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Variants understated one size and carried no node IDs.</strong> Inline read \"hugs · 16 tall\"; the node reports 55 × 16. Both rows now cite their node and name the resolved type styles rather than font specs. Code Connect is emptied, and a <code>getSnippet</code> keeps the DEV block following all four properties — including dropping <code>unit</code> for <code>showsUnit: false</code> when the label is switched off.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
