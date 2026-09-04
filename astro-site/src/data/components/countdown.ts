import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

const countdownControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
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
      },
      {
        label: "hasSeconds",
        prop: "hassecs",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasMinutes",
        prop: "hasmins",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasHours",
        prop: "hashrs",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasDays",
        prop: "hasdays",
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

/* Pill is the only style with a leading icon. */
const pillControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
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
      },
      {
        label: "hasSeconds",
        prop: "hassecs",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasMinutes",
        prop: "hasmins",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasHours",
        prop: "hashrs",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasDays",
        prop: "hasdays",
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasLeadingIcon",
        prop: "hasicon",
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cd-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Style</span><select id=\"cd-ctrl-style\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"per\" selected=\"\">Per</option><option value=\"one\">One</option><option value=\"pill\">Pill</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"cd-ctrl-state\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"expiring\">Expiring</option><option value=\"expired\">Expired</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Surface</span><select id=\"cd-ctrl-surface\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"oncolor\" selected=\"\">onColor</option><option value=\"onlight\">onLight</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasSeconds</span><select id=\"cd-ctrl-hassecs\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasMinutes</span><select id=\"cd-ctrl-hasmins\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasHours</span><select id=\"cd-ctrl-hashrs\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasDays</span><select id=\"cd-ctrl-hasdays\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\" id=\"cd-row-hasicon\"><span class=\"demo-panel-label\">hasLeadingIcon</span><select id=\"cd-ctrl-hasicon\" class=\"demo-panel-select\" onchange=\"_cdUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div></div></div></div>",
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
        "headline": "Define the timer's behaviour contract.",
        "body": "Figma cannot express the parts that matter most: what interval it ticks on, when it flips to Expiring, what happens at zero, and whether it keeps running in the background. Document those in the Code tab so every consumer behaves the same way.",
        "tag": "Docs"
      },
      {
        "headline": "Consider making the separator a component.",
        "body": "The two-dot <code>colon-separator</code> is hand-built and repeated three times per version across all eighteen, with its colour set per state. It works and it is deliberate, but a component would keep the dots from drifting apart over time.",
        "tag": "Composition"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Announce the time remaining, not each digit.",
        "body": "v2.0.1: Applied — Accessibility carries both halves for each platform: the whole timer is exposed as one label rather than four numbers and four labels read separately, and updates go out on a polite interval rather than every second, which would talk over the user.",
        "tag": "A11y"
      },
      {
        "headline": "Let the native component choose which units to show.",
        "body": "v2.0.1: Applied, by a different mechanism than the recommendation proposed. Its premise — \"all four units are always drawn, so a two-unit countdown means detaching the instance\" — is no longer true: the panel carries <code>hasDays</code>, <code>hasHours</code>, <code>hasMinutes</code> and <code>hasSeconds</code>, and each switches a unit off in place. The mapping keeps them as four booleans rather than the array the recommendation asked for, so every one traces 1:1 to a Figma property for Code Connect.",
        "tag": "Property"
      },
    ]
  },
  "style": {
    "heading": "Styles",
    "description": "Three layouts of the same four Countdown - Unit instances. Per gives each unit its own box, One puts them in a single bar, Pill compresses them onto one line behind a leading icon. Every style carries the running, nearly-over and finished states, on a light surface or a coloured one.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by State",
        description: "The columns are the three states, not interaction states — a countdown is never pressed. Each cell gives the onColor value first and the onLight value after the slash where they differ. Values are Per and One; Pill runs its own warning step, <code>text/color-text-warning-stronger</code>, and carries no opacity override. Two colours are set by layer opacity rather than by the token: the unit label is <code>text/color-text-inverse-weak</code> at 80% on the brand surface, and drops to 70% in Expiring and Expired on the pale one. The 80% pairing still falls short of 4.5:1, and that is deliberate for now: it carries over from the Sticker Sheet design and is the next token up that moved the contrast closer without changing the palette. Raising it further is a design recommendation, not a defect.",
        columns: ["Default", "Expiring", "Expired"],
        rows: [
          { role: "Surface", token: "bg/color-bg-secondary · onLight bg/color-bg-brand · warning and info steps by state",
            values: ["#EEF2F9 / #1972F9", "#FCF0CA / #F7D96E", "#F6F9FD / #E5F1FF"] },
          { role: "Border", token: "border/color-border-weak · -warning · -disabled",
            values: ["#E5EBF4 / –", "#EBB30A", "#C2CFE5"] },
          { role: "#time", token: "text/color-text-primary · -inverse · -warning-strongest on the brand fill, -warning-strong on the pale one · brand-border-primary-disabled",
            values: ["#005CE5 / #FFFFFF", "#966F0B / #453408", "#C2CFE5"] },
          { role: "#unit", token: "text/color-text-primary · -inverse-weak · -warning-strong · brand-border-primary-disabled",
            values: ["#005CE5 / #F6F9FD @ 80%", "#966F0B", "#C2CFE5"] },
          { role: "Separator", token: "border/color-border-info · Pill and One lift it on the brand surface · bg/color-bg-warning · brand-border-primary-disabled",
            values: ["#9BC5FD · One #69A6FC, Pill #FFFFFF on brand", "#CA970C", "#C2CFE5"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "per",
        "demoKey": "per",
        "demoControls": countdownControls,
        "title": "Per",
        "node": "5630:36051",
        "description": "",
        "previewHtml": "<div id=\"cd-spec-per\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Per" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Surface", "value": "onColor", "prop": "surface" },
              { "key": "hasSeconds", "value": "true", "prop": "hassecs" },
              { "key": "hasMinutes", "value": "true", "prop": "hasmins" },
              { "key": "hasHours", "value": "true", "prop": "hashrs" },
              { "key": "hasDays", "value": "true", "prop": "hasdays" },
              { "key": "Versions", "value": "18" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#EEF2F9", "token": "bg/color-bg-secondary", "swatch": true, "variants": { "surface:onlight": { "value": "#1972F9", "token": "bg/color-bg-brand" }, "state:expiring": { "value": "#FCF0CA", "token": "bg/color-bg-warning-weaker" }, "state:expired": { "value": "#F6F9FD", "token": "bg/color-bg" }, "state:expiring|surface:onlight": { "value": "#F7D96E", "token": "bg/color-bg-warning-weak" }, "state:expired|surface:onlight": { "value": "#E5F1FF", "token": "bg/color-bg-info-weak" } } },
              { "key": "Border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true, "variants": { "surface:onlight": { "value": "–", "token": "none — the brand surface carries no stroke" }, "state:expiring": { "value": "#EBB30A", "token": "border/color-border-warning" }, "state:expired": { "value": "#C2CFE5", "token": "border/color-border-disabled" }, "state:expiring|surface:onlight": { "value": "#EBB30A", "token": "border/color-border-warning" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "border/color-border-disabled" } } },
              { "key": "#time", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "surface:onlight": { "value": "#FFFFFF", "token": "text/color-text-inverse" }, "state:expiring": { "value": "#966F0B", "token": "text/color-text-warning-strong" }, "state:expired": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "state:expiring|surface:onlight": { "value": "#453408", "token": "text/color-text-warning-strongest" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "#unit", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "surface:onlight": { "value": "#F6F9FD @ 80%", "token": "text/color-text-inverse-weak" }, "state:expiring": { "value": "#966F0B @ 70%", "token": "text/color-text-warning-strong" }, "state:expired": { "value": "#C2CFE5 @ 70%", "token": "text/color-text-disabled" }, "state:expiring|surface:onlight": { "value": "#966F0B", "token": "text/color-text-warning-strong" }, "state:expired|surface:onlight": { "value": "#C2CFE5 @ 70%", "token": "text/color-text-disabled" } } },
              { "key": "Separator", "value": "#9BC5FD", "token": "border/color-border-info", "swatch": true, "variants": { "surface:onlight": { "value": "#9BC5FD", "token": "border/color-border-info" }, "state:expiring": { "value": "#CA970C", "token": "bg/color-bg-warning" }, "state:expired": { "value": "#C2CFE5", "token": "border/brand-border-primary-disabled" } } }
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
              { "key": "Height", "value": "50px", "mono": true },
              { "key": "Width", "value": "329px", "mono": true },
              { "key": "Radius", "value": "8px — on each unit box", "mono": true },
              { "key": "Padding H", "value": "0px on the row · 8px inside each unit box", "mono": true },
              { "key": "Padding V", "value": "0px on the row · 8px inside each unit box", "mono": true },
              { "key": "Gap", "value": "16px", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.per</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Per</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "pill",
        "demoKey": "pill",
        "demoControls": pillControls,
        "title": "Pill",
        "node": "5630:36053",
        "description": "",
        "previewHtml": "<div id=\"cd-spec-pill\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Pill" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Surface", "value": "onColor", "prop": "surface" },
              { "key": "hasSeconds", "value": "true", "prop": "hassecs" },
              { "key": "hasMinutes", "value": "true", "prop": "hasmins" },
              { "key": "hasHours", "value": "true", "prop": "hashrs" },
              { "key": "hasDays", "value": "true", "prop": "hasdays" },
              { "key": "hasLeadingIcon", "value": "true", "prop": "hasicon" },
              { "key": "LeadingIcon (slot)", "value": "6 icons · Task Delayed Small" },
              { "key": "Versions", "value": "18" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#EEF2F9", "token": "bg/color-bg-secondary", "swatch": true, "variants": { "surface:onlight": { "value": "#1972F9", "token": "bg/color-bg-brand" }, "state:expiring": { "value": "#FCF0CA", "token": "bg/color-bg-warning-weaker" }, "state:expired": { "value": "#F6F9FD", "token": "bg/color-bg" }, "state:expiring|surface:onlight": { "value": "#F7D96E", "token": "bg/color-bg-warning-weak" }, "state:expired|surface:onlight": { "value": "#E5F1FF", "token": "bg/color-bg-info-weak" } } },
              { "key": "Border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true, "variants": { "surface:onlight": { "value": "–", "token": "none — the brand surface carries no stroke" }, "state:expiring": { "value": "#EBB30A", "token": "border/color-border-warning" }, "state:expired": { "value": "#C2CFE5", "token": "border/color-border-disabled" }, "state:expiring|surface:onlight": { "value": "#EBB30A", "token": "border/color-border-warning" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "border/color-border-disabled" } } },
              { "key": "#time", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "surface:onlight": { "value": "#FFFFFF", "token": "text/color-text-inverse" }, "state:expiring": { "value": "#6C5009", "token": "text/color-text-warning-stronger" }, "state:expired": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "state:expiring|surface:onlight": { "value": "#453408", "token": "text/color-text-warning-strongest" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "#unit", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "surface:onlight": { "value": "#F6F9FD @ 80%", "token": "text/color-text-inverse-weak" }, "state:expiring": { "value": "#6C5009", "token": "text/color-text-warning-stronger" }, "state:expired": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "state:expiring|surface:onlight": { "value": "#453408", "token": "text/color-text-warning-strongest" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "Separator", "value": "#9BC5FD", "token": "border/color-border-info", "swatch": true, "variants": { "surface:onlight": { "value": "#FFFFFF", "token": "text/color-text-inverse" }, "state:expiring": { "value": "#CA970C", "token": "bg/color-bg-warning" }, "state:expired": { "value": "#C2CFE5", "token": "border/brand-border-primary-disabled" } } }
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
              { "key": "Height", "value": "30px", "mono": true },
              { "key": "Width", "value": "198px", "mono": true },
              { "key": "Radius", "value": "99px", "mono": true },
              { "key": "Padding H", "value": "8px left · 10px right", "mono": true },
              { "key": "Padding V", "value": "4px top · 5px bottom", "mono": true },
              { "key": "Gap", "value": "Auto — the icon and the timer sit at opposite ends of 198px", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pill</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Pill</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "one",
        "demoKey": "one",
        "demoControls": countdownControls,
        "title": "One",
        "node": "5630:36048",
        "description": "",
        "previewHtml": "<div id=\"cd-spec-one\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "One" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Surface", "value": "onColor", "prop": "surface" },
              { "key": "hasSeconds", "value": "true", "prop": "hassecs" },
              { "key": "hasMinutes", "value": "true", "prop": "hasmins" },
              { "key": "hasHours", "value": "true", "prop": "hashrs" },
              { "key": "hasDays", "value": "true", "prop": "hasdays" },
              { "key": "Versions", "value": "18" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#EEF2F9", "token": "bg/color-bg-secondary", "swatch": true, "variants": { "surface:onlight": { "value": "#1972F9", "token": "bg/color-bg-brand" }, "state:expiring": { "value": "#FCF0CA", "token": "bg/color-bg-warning-weaker" }, "state:expired": { "value": "#F6F9FD", "token": "bg/color-bg" }, "state:expiring|surface:onlight": { "value": "#F7D96E", "token": "bg/color-bg-warning-weak" }, "state:expired|surface:onlight": { "value": "#E5F1FF", "token": "bg/color-bg-info-weak" } } },
              { "key": "Border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true, "variants": { "surface:onlight": { "value": "–", "token": "none — the brand surface carries no stroke" }, "state:expiring": { "value": "#EBB30A", "token": "border/color-border-warning" }, "state:expired": { "value": "#C2CFE5", "token": "border/color-border-disabled" }, "state:expiring|surface:onlight": { "value": "#EBB30A", "token": "border/color-border-warning" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "border/color-border-disabled" } } },
              { "key": "#time", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "surface:onlight": { "value": "#FFFFFF", "token": "text/color-text-inverse" }, "state:expiring": { "value": "#966F0B", "token": "text/color-text-warning-strong" }, "state:expired": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "state:expiring|surface:onlight": { "value": "#453408", "token": "text/color-text-warning-strongest" }, "state:expired|surface:onlight": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "#unit", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "surface:onlight": { "value": "#F6F9FD @ 80%", "token": "text/color-text-inverse-weak" }, "state:expiring": { "value": "#966F0B @ 70%", "token": "text/color-text-warning-strong" }, "state:expired": { "value": "#C2CFE5 @ 70%", "token": "text/color-text-disabled" }, "state:expiring|surface:onlight": { "value": "#966F0B", "token": "text/color-text-warning-strong" }, "state:expired|surface:onlight": { "value": "#C2CFE5 @ 70%", "token": "text/color-text-disabled" } } },
              { "key": "Separator", "value": "#9BC5FD", "token": "border/color-border-info", "swatch": true, "variants": { "surface:onlight": { "value": "#69A6FC", "token": "bg/color-bg-info-weak" }, "state:expiring": { "value": "#CA970C", "token": "bg/color-bg-warning" }, "state:expired": { "value": "#C2CFE5", "token": "border/brand-border-primary-disabled" } } }
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
              { "key": "Height", "value": "44px", "mono": true },
              { "key": "Width", "value": "237px", "mono": true },
              { "key": "Radius", "value": "6px", "mono": true },
              { "key": "Padding H", "value": "16px", "mono": true },
              { "key": "Padding V", "value": "4px top · 6px bottom", "mono": true },
              { "key": "Gap", "value": "16px", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.one</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">One</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Countdown family, not this component: Countdown, Unit and Promo all ship in <code>com.eastblue.ds:countdown</code> and import <code>com.eastblue.ds.countdown.*</code>."
    },
    "propertyMapping": {
      "description": "Nine properties, in the order the Figma property panel lists them. <code>State</code> is the one that is not a parameter: Figma exposes it as a variant because a designer has to pick one to see it, but the platform works it out from the deadline — which is also what the Usage Guidelines ask for. The four unit booleans are independent flags, not a list: switching off <code>hasDays</code> alone is a real combination.",
      "rows": [
        {
          "figma": "Style — Per, Pill, One",
          "swift": "<code>style: EBCountdownStyle</code>",
          "compose": "<code>style: EBCountdownStyle</code>"
        },
        {
          "figma": "State — Default, Expiring, Expired",
          "swift": "<em>not a parameter</em> — computed from <code>until</code> against an expiring threshold",
          "compose": "<em>not a parameter</em> — computed the same way"
        },
        {
          "figma": "Surface — onColor, onLight",
          "swift": "<code>surface: EBCountdownSurface = .onColor</code>",
          "compose": "<code>surface: EBCountdownSurface = OnColor</code>"
        },
        {
          "figma": "⤷ LeadingIcon (slot)",
          "swift": "<code>icon: Image?</code> — Pill only",
          "compose": "<code>icon: @Composable (() -> Unit)?</code> — Pill only"
        },
        {
          "figma": "hasSeconds — true, false",
          "swift": "<code>hasSeconds: Bool = true</code>",
          "compose": "<code>hasSeconds: Boolean = true</code>"
        },
        {
          "figma": "hasMinutes — true, false",
          "swift": "<code>hasMinutes: Bool = true</code>",
          "compose": "<code>hasMinutes: Boolean = true</code>"
        },
        {
          "figma": "hasHours — true, false",
          "swift": "<code>hasHours: Bool = true</code>",
          "compose": "<code>hasHours: Boolean = true</code>"
        },
        {
          "figma": "hasDays — true, false",
          "swift": "<code>hasDays: Bool = true</code>",
          "compose": "<code>hasDays: Boolean = true</code>"
        },
        {
          "figma": "hasLeadingIcon — true, false",
          "swift": "<code>hasLeadingIcon: Bool = true</code> — Pill only",
          "compose": "<code>hasLeadingIcon: Boolean = true</code> — Pill only"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Per — one box per unit",
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.per</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Per</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Pill — compact, behind a leading icon",
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pill</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Pill</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "One — a single bar",
        "swift": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    style<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.one</span><span class=\"syn-punc\">,</span>\n    surface<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.onColor</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdown</span><span class=\"syn-punc\">(</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">One</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownSurface</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">OnColor</span>\n<span class=\"syn-punc\">)</span>"
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
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Every colour is bound and confirmed by design — five roles across three states and two surfaces, including the four warning steps the Expiring state uses. Colour still reaches the units as instance overrides rather than through a property; that is the accepted mechanism, and the Design Recommendations carry the case for driving it by property instead." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "Maps to a formatted duration view on both platforms. Units are not fixed at four — <code>hasDays</code>, <code>hasHours</code>, <code>hasMinutes</code> and <code>hasSeconds</code> switch each one independently. <code>State</code> is the one property that is not a parameter: the platform computes it from the deadline, which is what the guidelines ask for." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Display only — confirmed by design. Default, Expiring and Expired are time states, not interaction states." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The pill's icon is a slot holding a vector instance. No rasters anywhere." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 18,
      "description": "3 <code>Style</code> × 3 <code>State</code> × 2 <code>Surface</code> = <strong>18 variants</strong>, complete with no gaps. The four unit booleans, <code>hasLeadingIcon</code> and the icon slot are content settings and do not multiply the set.",
      "summary": {
        "columns": ["Style", "Size", "Unit layout", "Count"],
        "rows": [
          { "cells": ["Per", "329 × 50", "Stacked, one box per unit", "6"] },
          { "cells": ["Pill", "198 × 30", "Inline, with a leading icon slot", "6"] },
          { "cells": ["One", "237 × 44", "Stacked, in a shared bar", "6"] }
        ]
      },
      "columns": ["Style", "State", "Surface", "Size", "Node"],
      "rows": [
        { "cells": ["Per", "Default", "onColor", "329 × 50", "5630:36049"] },
        { "cells": ["Per", "Default", "onLight", "329 × 50", "5630:36051"] },
        { "cells": ["Per", "Expiring", "onColor", "329 × 50", "5642:37087"] },
        { "cells": ["Per", "Expiring", "onLight", "329 × 50", "5642:37069"] },
        { "cells": ["Per", "Expired", "onColor", "329 × 50", "5656:42337"] },
        { "cells": ["Per", "Expired", "onLight", "329 × 50", "5656:42319"] },
        { "cells": ["Pill", "Default", "onColor", "198 × 30", "5630:36053"] },
        { "cells": ["Pill", "Default", "onLight", "198 × 30", "5630:36054"] },
        { "cells": ["Pill", "Expiring", "onColor", "198 × 30", "5642:37367"] },
        { "cells": ["Pill", "Expiring", "onLight", "198 × 30", "5642:37383"] },
        { "cells": ["Pill", "Expired", "onColor", "198 × 30", "5656:42383"] },
        { "cells": ["Pill", "Expired", "onLight", "198 × 30", "5656:42399"] },
        { "cells": ["One", "Default", "onColor", "237 × 44", "5630:36048"] },
        { "cells": ["One", "Default", "onLight", "237 × 44", "5630:36050"] },
        { "cells": ["One", "Expiring", "onColor", "237 × 44", "5642:36616"] },
        { "cells": ["One", "Expiring", "onLight", "237 × 44", "5642:36876"] },
        { "cells": ["One", "Expired", "onColor", "237 × 44", "5656:42355"] },
        { "cells": ["One", "Expired", "onLight", "237 × 44", "5656:42369"] }
      ],
      "collapseLabel": "View full Style × State × Surface breakdown (18 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt, six properties documented — node 5630:36052",
      "rows": [
        {
          "body": "<strong>Six of the nine properties were undocumented.</strong> The page described <code>Style</code>, <code>State</code> and <code>Surface</code>; the Figma panel also carries <code>hasSeconds</code>, <code>hasMinutes</code>, <code>hasHours</code>, <code>hasDays</code>, <code>hasLeadingIcon</code> and the <code>LeadingIcon</code> slot. Nothing changed in Figma — they were always there. <code>get_node_info</code> cannot read property definitions, so a node-tree reading alone will keep missing them; this is the second component in the family where the property panel held more than the tree could show.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Four of the eighteen variants rendered the wrong surface.</strong> <code>.eb-preview-cd--onlight</code> and <code>.eb-preview-cd--expiring</code> carry the same specificity, so the state rule won on source order and Surface was ignored whenever State was not Default. Expiring and Expired on the brand surface drew the pale onColor palette — <code>#FCF0CA</code> for <code>#F7D96E</code>, <code>#F6F9FD</code> for <code>#E5F1FF</code> — across all three styles.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The separator is a per-style decision, not a per-state one.</strong> On the brand surface Per keeps <code>#9BC5FD</code>, One lifts to <code>#69A6FC</code> and Pill goes white; at Expiring the Pill tracks its own text colour while Per and One use <code>bg/color-bg-warning</code>. The preview applied one rule to all three. Per's is the weakest of the three against its own fill.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Expiring runs four warning steps, not one.</strong> <code>text/color-text-warning-strongest</code> for the number on the brand surface, <code>-strong</code> for it on the pale one and for the unit label on both, <code>-stronger</code> for the Pill on both, and <code>bg/color-bg-warning</code> for the Per and One separator. The page had a single value.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Colour is set by layer opacity in two places, which the node tree does not report.</strong> <code>get_node_info</code> returns a fill's own opacity — which is how the 80% unit label on the brand surface was found — but not the layer's. The 70% on the Expiring and Expired unit label only appeared in the Figma Appearance panel, and the preview was resetting it to full strength.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The 80% unit label on the brand fill is deliberate.</strong> It carries over from the Sticker Sheet design and is the next token up that moved the contrast closer to 4.5:1 without changing the palette. It still falls short, so raising it stays a design recommendation rather than a defect — and this is where Countdown - Unit's open recommendation about that label actually lands, since the unit paints no surface of its own.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>One card became three.</strong> <code>Style</code> is the driving property, so Per, Pill and One each get a card — in Figma's panel order, which runs Per, Pill, One rather than the Per, One, Pill the page had. The six content settings are controls on every card, with <code>hasLeadingIcon</code> on Pill alone.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Typography was three font specs, one of which was not type.</strong> <code>\"Label wording\": \"days · hrs · mins · secs\"</code> sat in the Typography section. The rows now name the styles the Unit instances resolve to: <code>Primary/Headlines/Segment</code> over <code>Primary/Label/Light/Tiny</code> for Per and One, <code>Primary/Label/Light/Base</code> for Pill.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Layout had none of the seven keys, and two of its values were wrong.</strong> Per's unit box has 8px padding, not the 0 the page implied — the row has none, but the box the unit sits in does. Pill's gap is <code>Auto</code> across a fixed 198px, not a flat 8px; it resolves to 8 only at full content and would diverge the moment a unit is switched off. All twelve values are now read from the auto-layout panel rather than derived from bounding boxes.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three preview geometry fixes.</strong> One rendered its units centred instead of 4px from the top; Pill had no vertical padding at all and its inline separator gap was 6px against Figma's 4, which made the row overflow its own width; and the card declared <code>font-family: inherit</code>, so it drew in the documentation font rather than Proxima Soft.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Countdown family artifact <code>com.eastblue.ds:countdown:1.0.0</code> and imports <code>com.eastblue.ds.countdown.*</code>, matching Countdown - Unit.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping collapsed four properties into one and missed two.</strong> A single <code>days / hrs / mins / secs</code> row mapped to <code>units: [TimeUnit]</code> — a list cannot express \"days off, hours on\", which the four independent booleans can. <code>hasLeadingIcon</code> was absent, and the types read <code>CountdownStyle</code> rather than <code>EBCountdownStyle</code>. Nine rows now, in panel order.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong><code>State</code> is documented as something the platform works out, not something it is passed.</strong> Figma exposes it as a variant because a designer has to pick one to see it; natively it follows from <code>until</code> against an expiring threshold, which is what the Usage Guidelines already asked for. The third shape difference in this family, after <code>hasWeek6 → weeks: Int</code> and <code>UnitLabel → EBTimeUnit</code>.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to placement, not to a property.</strong> They read \"Inline above a call to action\", \"As a badge inside a card\" and \"On a coloured card\". One per <code>Style</code> now, built from the same definition as the spec cards and the live preview.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The variants breakdown described half the matrix.</strong> Nine rows collapsed both surfaces into one cell for eighteen variants, and none carried a node. Eighteen rows now, each with its State, Surface and node ID, behind the existing grouped summary.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>C4 was held open on a claim that had stopped being true.</strong> Its note read \"units are fixed at four\" — the four booleans mean they are not. C3's note asked for a <code>main/countdown/*</code> namespace that is no longer needed now every colour is bound and confirmed. Both move to Ready, and Code Connect is emptied.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Two recommendations close, two stay open on their merits.</strong> The unit-selection ask is applied, though as four booleans rather than the array it proposed, so each traces 1:1 to a Figma property. The accessibility ask is applied for both platforms. Still open: the behaviour contract — Figma cannot say what interval the timer ticks on, what happens at zero, or whether it runs in the background — and making the separator a component, which this run strengthened by finding its colour differs three ways across the styles.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
