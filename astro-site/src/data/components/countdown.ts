import type { ComponentData, DemoControlSection } from '../types';

const countdownControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'per',
        options: [
          { value: 'per', label: 'Per' },
          { value: 'one', label: 'One' },
          { value: 'pill', label: 'Pill' }
        ]
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'expiring', label: 'Expiring' },
          { value: 'expired', label: 'Expired' }
        ]
      },
      {
        label: 'Surface',
        prop: 'surface',
        defaultValue: 'oncolor',
        options: [
          { value: 'oncolor', label: 'onColor' },
          { value: 'onlight', label: 'onLight' }
        ]
      }
    ]
  }
];

export const countdown: ComponentData = {
  "meta": {
    "slug": "countdown",
    "name": "Countdown",
    "node": "5630:36052",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5630-36052",
    "description": "A live timer showing how long is left. Three layouts — boxed units, a single bar, or a compact pill — each with a running, nearly-over and finished state.",
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
      "title": "Keep — restructured exactly as the last review asked",
      "text": "All four DS Health traits pass. The previous component bundled four presentations into one set and mixed layout into its state setting. The promo card moved out to <a href=\"/components/countdown-promo\">Countdown Promo</a>, every unit became a <a href=\"/components/countdown-unit\">Countdown - Unit</a> instance, and the settings resolved into three that each do one job: <code>Style</code> is the layout, <code>State</code> is how much time is left, and <code>Surface</code> is what it sits on. A finished state exists for the first time."
    }
  },
  "overview": {
    "inContextNote": "Adds urgency to anything time-limited — a flash sale, a voucher about to lapse, a payment window closing. Per and One sit inline above a call to action; Pill docks inside a card as a small \"ends in\" badge.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cd-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Style</span><select id=\"cd-ctrl-style\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"per\" selected=\"\">Per</option><option value=\"one\">One</option><option value=\"pill\">Pill</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"cd-ctrl-state\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"expiring\">Expiring</option><option value=\"expired\">Expired</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Surface</span><select id=\"cd-ctrl-surface\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"oncolor\" selected=\"\">onColor</option><option value=\"onlight\">onLight</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Three layouts cover every place a timer appears — a dashboard rail, an inline block above a button, a badge inside a card. Nothing about a particular campaign is baked in."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, border, radius, spacing and all three states. The numbers come from <a href=\"/components/countdown-unit\">Countdown - Unit</a>, so the timer itself never draws type."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "All three styles assemble the same way: units named <code>days</code> / <code>hrs</code> / <code>mins</code> / <code>secs</code> with a <code>colon-separator</code> between each pair."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built from Countdown - Unit, and slots into <a href=\"/components/countdown-promo\">Countdown Promo</a>, which picks whichever Surface contrasts with its own card."
      }
    ],
    "behavior": [
      {
        "state": "Style=Per",
        "ios": "na",
        "android": "na",
        "property": "329 × 50",
        "notes": "One filled box per unit. The most prominent layout."
      },
      {
        "state": "Style=One",
        "ios": "na",
        "android": "na",
        "property": "237 × 44",
        "notes": "All four units share a single bar."
      },
      {
        "state": "Style=Pill",
        "ios": "na",
        "android": "na",
        "property": "198 × 30",
        "notes": "Compact badge with a leading icon slot. Uses the inline unit layout."
      },
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "running",
        "notes": "Blue treatment. Plenty of time left."
      },
      {
        "state": "State=Expiring",
        "ios": "na",
        "android": "na",
        "property": "warning",
        "notes": "Amber treatment. The threshold is a product decision, not a design one."
      },
      {
        "state": "State=Expired",
        "ios": "na",
        "android": "na",
        "property": "terminal",
        "notes": "Recessive grey. The timer has run out and nothing more will change."
      },
      {
        "state": "Surface=onLight",
        "ios": "na",
        "android": "na",
        "property": "bold fill",
        "notes": "For placing on a white page — the countdown supplies the colour."
      },
      {
        "state": "Surface=onColor",
        "ios": "na",
        "android": "na",
        "property": "pale fill",
        "notes": "For placing on a coloured card — the card supplies the colour."
      }
    ],
    "resolved": [
      {
        "headline": "The promo card is its own component.",
        "body": "The old set carried a full promo — header copy, a button and a close icon — alongside three timer layouts, as though they were siblings. That card is now <a href=\"/components/countdown-promo\">Countdown Promo</a>, and what remains here is only the timer.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Each setting does one job.",
        "body": "<code>State</code> used to mix how much time was left with which layout was showing, and the <code>Style</code> values <code>White</code> and <code>Blue</code> were colour treatments rather than layouts. Now <code>Style</code> is the layout, <code>State</code> is the time remaining, and <code>Surface</code> is the backdrop.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "A finished state exists.",
        "body": "There was no way to show a timer that had run out, so screens either kept displaying zeros as though still counting, or swapped the component for something else. <code>State=Expired</code> covers it in all three layouts and on both surfaces.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Which units show is no longer a variant.",
        "body": "<code>no Days</code> and <code>Mins and Secs</code> encoded the visible unit subset as separate versions, which multiplied the matrix for something that is really data. Both are gone.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The pill's icon is a slot.",
        "body": "It used to embed one fixed, feature-specific glyph. It is now <code>⤷ LeadingIcon</code>, so any surface can supply its own.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "All three layouts are assembled the same way.",
        "body": "Per named its boxes by unit while One left its instances unnamed and Pill wrapped everything in generic <code>Time Unit</code> frames with the separator tucked inside each one. Every layout now reads <code>days</code> / <code>hrs</code> / <code>mins</code> / <code>secs</code> with <code>colon-separator</code> as a sibling between them.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The backdrop setting says what it means.",
        "body": "It was <code>Theme = Light | Dark</code>, which reads as a system dark mode and would have been wired to one. It describes what the countdown sits on, so it is now <code>Surface = onLight | onColor</code> — and the values swapped, because the old names described the component's own colour rather than its backdrop.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Let the native component choose which units to show.",
        "body": "All four units are always drawn, so a two-unit countdown means detaching the instance. The zeros are deliberate in Figma — dropping units would leave the row ragged — but on native the units should be an array the caller passes, so a timer under an hour can show minutes and seconds alone.",
        "tag": "Property"
      },
      {
        "headline": "Define the timer's behaviour contract.",
        "body": "Figma cannot express the parts that matter most: what interval it ticks on, when it flips to Expiring, what happens at zero, and whether it keeps running in the background. Document those in the Code tab so every consumer behaves the same way.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the time remaining, not each digit.",
        "body": "Four numbers and four labels read separately are noise. Expose the whole countdown as one label — \"3 days, 5 hours remaining\" — updated on a polite interval rather than every second, which would talk over the user.",
        "tag": "A11y"
      },
      {
        "headline": "Consider making the separator a component.",
        "body": "The two-dot <code>colon-separator</code> is hand-built and repeated three times per version across all eighteen, with its colour set per state. It works and it is deliberate, but a component would keep the dots from drifting apart over time.",
        "tag": "Composition"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Styles",
    "description": "Three layouts across three states and two surfaces. Every unit in every one of them is a Countdown - Unit instance.",
    "specCards": [
      {
        "cardKey": "cd-spec-card-countdown",
        "demoKey": "countdown",
        "demoControls": countdownControls,
        "title": "Countdown",
        "node": "5630:36052",
        "description": "Per is the most prominent, One the most compact of the two stacked layouts, and Pill the badge. State drives the palette; Surface picks which way round it runs.",
        "previewHtml": "<div id=\"cd-spec-countdown\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Per", "prop": "style" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Surface", "value": "onColor", "prop": "surface" },
              { "key": "Units", "value": "days · hrs · mins · secs" },
              { "key": "Versions", "value": "18" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Box — Default", "value": "#EEF2F9", "token": "main/countdown/default/bg", "swatch": true, "variants": { "surface:onlight": { "value": "#1972F9" }, "state:expiring": { "value": "#FCF0CA" }, "state:expired": { "value": "#F6F9FD" } } },
              { "key": "Border — Default", "value": "#E5EBF4", "token": "main/countdown/default/border", "swatch": true, "variants": { "surface:onlight": { "value": "transparent" }, "state:expiring": { "value": "#EBB30A" }, "state:expired": { "value": "#C2CFE5" } } },
              { "key": "Number", "value": "#005CE5", "token": "text/color-text-link", "swatch": true, "variants": { "surface:onlight": { "value": "#FFFFFF" }, "state:expiring": { "value": "#966F0B" }, "state:expired": { "value": "#C2CFE5" } } },
              { "key": "Separator", "value": "#9BC5FD", "token": "main/countdown/separator", "swatch": true, "variants": { "state:expiring": { "value": "#CA970C" }, "state:expired": { "value": "#C2CFE5" } } }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "329 × 50", "mono": true, "variants": { "style:one": { "value": "237 × 44" }, "style:pill": { "value": "198 × 30" } } },
              { "key": "Unit box", "value": "56 × 50", "mono": true, "variants": { "style:one": { "value": "— no box" }, "style:pill": { "value": "— no box" } } },
              { "key": "Corner radius", "value": "8", "mono": true, "variants": { "style:one": { "value": "6" }, "style:pill": { "value": "99" } } },
              { "key": "Gap", "value": "16 each side of the separator", "mono": true },
              { "key": "Separator", "value": "3 × 10 — two 3px dots", "mono": true, "variants": { "style:pill": { "value": "2 × 8 — two 2px dots" } } },
              { "key": "Unit layout", "value": "Stacked", "mono": true, "variants": { "style:pill": { "value": "Inline" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Number", "value": "Proxima Soft Bold · 20 / 24 · 0", "mono": true, "variants": { "style:pill": { "value": "Proxima Soft SemiBold · 16 / 16 · +0.25" } } },
              { "key": "Unit label", "value": "Proxima Soft SemiBold · 10 / 10 · +0.25", "mono": true, "variants": { "style:pill": { "value": "Proxima Soft SemiBold · 16 / 16 · +0.25" } } },
              { "key": "Label wording", "value": "days · hrs · mins · secs", "mono": true, "variants": { "style:pill": { "value": "d · h · m · s" } } }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.per</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">CountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Per</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">CountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters. State is derived from the deadline rather than set by hand.",
      "rows": [
        { "figma": "Style", "swift": "CountdownStyle (.per / .one / .pill)", "compose": "style: CountdownStyle" },
        { "figma": "State", "swift": "derived from `until` and the expiring threshold", "compose": "derived from `until`" },
        { "figma": "Surface", "swift": "CountdownSurface (.onLight / .onColor)", "compose": "surface: CountdownSurface" },
        { "figma": "days / hrs / mins / secs", "swift": "units: [TimeUnit]", "compose": "units: List<TimeUnit>" },
        { "figma": "⤷ LeadingIcon", "swift": "icon: Image? — Pill only", "compose": "icon: @Composable (() -> Unit)? — Pill only" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Inline above a call to action",
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>until<span class=\"syn-punc\">:</span> voucher<span class=\"syn-punc\">.</span>expiresAt<span class=\"syn-punc\">,</span> style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>until <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">.</span>expiresAt<span class=\"syn-punc\">,</span> style <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">One</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "As a badge inside a card",
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> deal<span class=\"syn-punc\">.</span>endsAt<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pill</span><span class=\"syn-punc\">,</span>\n    icon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"alarm\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> deal<span class=\"syn-punc\">.</span>endsAt<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Pill</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>Alarm<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "On a coloured card",
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>until<span class=\"syn-punc\">:</span> endsAt<span class=\"syn-punc\">,</span> style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.one</span><span class=\"syn-punc\">,</span> surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>until <span class=\"syn-eq\">=</span> endsAt<span class=\"syn-punc\">,</span> style <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">One</span><span class=\"syn-punc\">,</span> surface <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">OnColor</span><span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The whole timer is one label",
        "ios": "<code>.accessibilityElement(children: .ignore)</code> with a formatted duration",
        "android": "<code>Modifier.clearAndSetSemantics { contentDescription = … }</code>"
      },
      {
        "requirement": "Updates are polite, not per-second",
        "ios": "Re-announce at meaningful thresholds, not on every tick",
        "android": "<code>LiveRegionMode.Polite</code> on a throttled value"
      },
      {
        "requirement": "Expiring is not signalled by colour alone",
        "ios": "Include the urgency in the spoken label",
        "android": "Same, via <code>stateDescription</code>"
      },
      {
        "requirement": "Expired is announced as finished",
        "ios": "\"Offer ended\" rather than a row of zeros",
        "android": "Same"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Derive State from the deadline so it flips to Expiring and Expired on its own.",
        "dontText": "Don't set State by hand — a timer that never changes state is worse than no timer."
      },
      {
        "doText": "Pick Surface by what the countdown sits on: onLight for a white page, onColor for a coloured card.",
        "dontText": "Don't wire Surface to the system theme — it is about the backdrop, not about dark mode."
      },
      {
        "doText": "Use Pill where space is tight and Per where the urgency is the point.",
        "dontText": "Don't put Per inside a card that already has a heading and a button; it will fight them."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "All three layouts read <code>days</code> / <code>hrs</code> / <code>mins</code> / <code>secs</code> with <code>colon-separator</code> siblings. Every unit is an instance." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Style</code>, <code>State</code> and <code>Surface</code> each carry one meaning, with semantic values throughout." },
      { "id": "C3", "criterion": "Token Coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Colour reaches the units as instance overrides rather than through a property — accepted as the mechanism. A <code>main/countdown/*</code> namespace is still worth proposing." },
      { "id": "C4", "criterion": "Native Mappability", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Maps cleanly to a formatted duration view. Outstanding: units are fixed at four, and Surface is a variant rather than a resolved token." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Display only — confirmed by design. Default, Expiring and Expired are time states, not interaction states." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The pill's icon is a slot holding a vector instance. No rasters anywhere." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "Three enums, all mapping one to one." },
      { "aspect": "Token coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Unit colours arrive as overrides; a countdown namespace would make them mappable." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 18,
      "description": "3 Style × 3 State × 2 Surface = 18 versions, complete with no gaps.",
      "columns": ["Style", "Size", "Unit layout", "States", "Surfaces"],
      "summary": {
        "columns": ["Style", "Size", "Unit layout", "Count"],
        "rows": [
          { "cells": ["Per", "329 × 50", "Stacked, boxed", "6"] },
          { "cells": ["One", "237 × 44", "Stacked, shared bar", "6"] },
          { "cells": ["Pill", "198 × 30", "Inline, with icon slot", "6"] }
        ]
      },
      "collapseLabel": "View full Style × State × Surface breakdown (18 rows)",
      "rows": [
        { "cells": ["Per", "329 × 50", "Stacked", "Default", "onLight · onColor"] },
        { "cells": ["Per", "329 × 50", "Stacked", "Expiring", "onLight · onColor"] },
        { "cells": ["Per", "329 × 50", "Stacked", "Expired", "onLight · onColor"] },
        { "cells": ["One", "237 × 44", "Stacked", "Default", "onLight · onColor"] },
        { "cells": ["One", "237 × 44", "Stacked", "Expiring", "onLight · onColor"] },
        { "cells": ["One", "237 × 44", "Stacked", "Expired", "onLight · onColor"] },
        { "cells": ["Pill", "198 × 30", "Inline", "Default", "onLight · onColor"] },
        { "cells": ["Pill", "198 × 30", "Inline", "Expiring", "onLight · onColor"] },
        { "cells": ["Pill", "198 × 30", "Inline", "Expired", "onLight · onColor"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Restructured into a primitive plus recipes — node 5630:36052",
      "rows": [
        {
          "body": "<strong>Rebuilt in the 2026 Working File.</strong> The previous component at <code>4076:9090</code> in Sticker Sheets v2 is deprecated.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>The promo card split out</strong> to <a href=\"/components/countdown-promo\">Countdown Promo</a>, leaving only the timer here.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>Every unit is a <a href=\"/components/countdown-unit\">Countdown - Unit</a> instance</strong> rather than type drawn per layout.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — the settings resolved.</strong> <code>State</code> stopped mixing in layout, the <code>White</code>/<code>Blue</code> Style values became <code>Per</code>/<code>One</code>/<code>Pill</code>, and the unit-subset versions were removed.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C5 — <code>State=Expired</code> added</strong> across all three layouts and both surfaces.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C6 — the pill's icon became <code>⤷ LeadingIcon</code></strong>, no longer one fixed feature-specific glyph.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C1 — all three layouts unified.</strong> Units are named <code>days</code> / <code>hrs</code> / <code>mins</code> / <code>secs</code> with <code>colon-separator</code> siblings, replacing three different internal structures.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — <code>Theme = Light | Dark</code> became <code>Surface = onLight | onColor</code></strong>, with the values swapped, since the old names described the component's own colour rather than its backdrop.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Surface remains a version rather than a resolved token.</strong> Known limitation — GCash has no dark theme today and the app is built on white, so baking it in is the practical choice.",
          "delta": { "kind": "partial", "label": "C4 partial" }
        }
      ]
    }
  ]
};
