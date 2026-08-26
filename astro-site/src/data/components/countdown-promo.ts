import type { ComponentData, DemoControlSection } from '../types';

const promoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Emphasis',
        prop: 'emphasis',
        defaultValue: 'low',
        options: [
          { value: 'low', label: 'Low' },
          { value: 'high', label: 'High' }
        ]
      }
    ]
  }
];

export const countdownPromo: ComponentData = {
  "meta": {
    "slug": "countdown-promo",
    "name": "Countdown Promo",
    "node": "5630:36047",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5630-36047",
    "description": "A promotional card built around a countdown — a line of copy, the timer, a full-width action and a dismiss control. Two levels of emphasis.",
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
      "title": "Keep — the recipe the last review asked for",
      "text": "All four DS Health traits pass. This card used to live inside <a href=\"/components/countdown\">Countdown</a> as a fourth \"style\", which is what made that component hard to reason about — a promo with copy, a button and a close icon is not a sibling of a timer layout. It is now its own component composing the timer, with the button and the dismiss control as real slots rather than baked instances."
    }
  },
  "overview": {
    "inContextNote": "Runs full-width on the dashboard and on Discover, above the fold, for a campaign with a deadline. High emphasis for a headline promotion, Low for one that sits alongside other cards without shouting.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cdp-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Emphasis</span><select id=\"cdp-ctrl-emphasis\" class=\"demo-panel-select\" onchange=\"_cdpUpdate()\"><option value=\"low\" selected=\"\">Low</option><option value=\"high\">High</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"cdp-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Hurry up!\" oninput=\"_cdpUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">⤷ ActionSlot</span><input type=\"text\" id=\"cdp-ctrl-action\" class=\"demo-panel-select demo-panel-input\" value=\"Show now!\" oninput=\"_cdpUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One card serves any campaign with a deadline. The copy, the action and the dismiss control are all supplied by whoever uses it."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, radius, spacing and both emphasis levels, and picks the countdown treatment that contrasts with its own card."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both versions read <code>Container</code> → <code>⤷ ActionSlot</code> → <code>⤷ CloseSlot</code>, using the slot naming the rest of the system uses."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes <a href=\"/components/countdown\">Countdown</a> for the timer and takes a button and a close icon through slots, so none of the three is baked in."
      }
    ],
    "behavior": [
      {
        "state": "Emphasis=High",
        "ios": "na",
        "android": "na",
        "property": "#1972F9 card",
        "notes": "Blue card, white copy, and a pale countdown so the timer reads against it."
      },
      {
        "state": "Emphasis=Low",
        "ios": "na",
        "android": "na",
        "property": "#FFFFFF card",
        "notes": "White card, dark copy, and a gradient blue countdown to carry the emphasis instead."
      },
      {
        "state": "⤷ ActionSlot",
        "ios": "na",
        "android": "na",
        "property": "full-width bar",
        "notes": "Holds a Button - XSmall stretched edge to edge, which keeps the button's padding and label size."
      },
      {
        "state": "⤷ CloseSlot",
        "ios": "na",
        "android": "na",
        "property": "16 × 16",
        "notes": "Dismiss control, top right."
      }
    ],
    "resolved": [
      {
        "headline": "The promo is its own component.",
        "body": "It used to be a fourth value on Countdown's <code>Style</code> setting, sitting alongside three timer layouts as though a card with copy and a button were the same kind of thing. Splitting it is what let both components get simple.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The copy, button and close are no longer baked in.",
        "body": "The old card hard-coded its header text, its call to action and its close icon, so any campaign that needed different words meant detaching. <code>#title</code> is a text layer, and the other two are <code>⤷ ActionSlot</code> and <code>⤷ CloseSlot</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The emphasis setting says what it controls.",
        "body": "It was <code>Theme = Light | Dark</code>, then briefly <code>Color = Light | Blue</code>. Neither fitted: the card is not following a system theme, and naming a value after its hue is the pattern the guidelines rule out — and the one this very component fixed when <code>White</code> and <code>Blue</code> stopped being Style values. It is now <code>Emphasis = High | Low</code>, which survives a palette change.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The dismiss control is visible enough to find.",
        "body": "The close icon sat at roughly 1.9:1 against the white card — about half what an interactive control needs. Both versions were re-coloured and now clear 3:1.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Slot and wrapper names match the system.",
        "body": "<code>Action Slot</code> and <code>Icon Slot</code> became <code>⤷ ActionSlot</code> and <code>⤷ CloseSlot</code>, and <code>container</code> became <code>Container</code> — the same vocabulary as Ad Space, Tooltip and the Date Picker family.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Replace the placeholder copy before handoff.",
        "body": "<code>#title</code> currently holds <code>\"Hurry up!  ⏎Sale ends in:\"</code> — a manual line break and a double space. It is a stand-in while the content model is undecided, but a forced break will not survive translation, so the native side should let the string wrap on its own.",
        "tag": "Docs"
      },
      {
        "headline": "Document that the countdown inside is deliberately inverted.",
        "body": "The High card holds a pale timer and the Low card a bold one, so each reads against its own surface. It looks backwards in the layers panel and is worth stating plainly, or someone will \"fix\" it.",
        "tag": "Docs"
      },
      {
        "headline": "Give dismissal somewhere to go.",
        "body": "The card can be dismissed but nothing says what that means — gone for the session, gone permanently, or gone until the campaign changes. Define it alongside the timer contract so every surface behaves the same way.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the card as one region.",
        "body": "Copy, timer, action and dismiss read separately is four unrelated fragments. Group them so a screen reader announces the promotion, the time remaining and the action together, with the dismiss control reachable but not first.",
        "tag": "A11y"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Emphasis",
    "description": "Two levels. The card and the countdown inside it always run opposite, so the timer reads against its own surface.",
    "specCards": [
      {
        "cardKey": "cdp-spec-card-promo",
        "demoKey": "promo",
        "demoControls": promoControls,
        "title": "Countdown Promo",
        "node": "5630:36047",
        "description": "360 wide, with a 68px content row above a 24px full-width action bar. The dismiss control sits over the top-right corner.",
        "previewHtml": "<div id=\"cdp-spec-promo\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Emphasis", "value": "Low", "prop": "emphasis" },
              { "key": "#title", "value": "Hurry up! Sale ends in:" },
              { "key": "⤷ ActionSlot", "value": "Button - XSmall" },
              { "key": "⤷ CloseSlot", "value": "Close" },
              { "key": "Countdown inside", "value": "Style=One, Surface=onLight", "variants": { "emphasis:high": { "value": "Style=One, Surface=onColor" } } },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true, "variants": { "emphasis:high": { "value": "#1972F9" } } },
              { "key": "#title", "value": "#071969", "token": "text/color-text-heading", "swatch": true, "variants": { "emphasis:high": { "value": "#FFFFFF" } } },
              { "key": "Action bar", "value": "#005CE5", "token": "main/button/primary/brand/enabled/bg", "swatch": true, "variants": { "emphasis:high": { "value": "#2340A9" } } },
              { "key": "Close icon", "value": "#7E96BE", "token": "icon/color-icon-weaker", "swatch": true, "variants": { "emphasis:high": { "value": "#F6F9FD @ 80%" } } }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "360 × 92", "mono": true },
              { "key": "Content row", "value": "360 × 68", "mono": true },
              { "key": "Action bar", "value": "360 × 24", "mono": true },
              { "key": "Side padding", "value": "20", "mono": true },
              { "key": "Close", "value": "16 × 16, inset 4 from the top right", "mono": true },
              { "key": "Countdown", "value": "173 × 44", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title style", "value": "Primary/Bold/Subheading", "mono": true },
              { "key": "#title font", "value": "Proxima Soft Bold · 16 / 16 · +0.25", "mono": true },
              { "key": "Action label", "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true },
              { "key": "Timer type", "value": "supplied by Countdown - Unit", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Hurry up! Sale ends in:\"</span><span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.low</span><span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">.</span><span class=\"syn-fn\">init</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Show now!\"</span><span class=\"syn-punc\">) {</span> router<span class=\"syn-punc\">.</span><span class=\"syn-fn\">push</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.sale</span><span class=\"syn-punc\">) },</span>\n    onDismiss<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> promo<span class=\"syn-punc\">.</span><span class=\"syn-fn\">hide</span><span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Hurry up! Sale ends in:\"</span><span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-type\">Emphasis</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Low</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Show now!\"</span><span class=\"syn-punc\">) },</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> promo<span class=\"syn-punc\">.</span><span class=\"syn-fn\">hide</span><span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">)</span>"
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
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "Emphasis", "swift": "Emphasis (.high / .low)", "compose": "emphasis: Emphasis" },
        { "figma": "#title", "swift": "title: String", "compose": "title: String" },
        { "figma": "Countdown", "swift": "until: Date — surface derived from emphasis", "compose": "until: Instant" },
        { "figma": "⤷ ActionSlot", "swift": "action: EBPromoAction", "compose": "action: @Composable () -> Unit" },
        { "figma": "⤷ CloseSlot", "swift": "onDismiss: (() -> Void)?", "compose": "onDismiss: (() -> Unit)?" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A headline promotion",
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> campaign<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> campaign<span class=\"syn-punc\">.</span>endsAt<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.high</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> campaign<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> campaign<span class=\"syn-punc\">.</span>endsAt<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">High</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Dismissible, sitting among other cards",
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> voucher<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> voucher<span class=\"syn-punc\">.</span>expiresAt<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.low</span><span class=\"syn-punc\">,</span>\n    onDismiss<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> feed<span class=\"syn-punc\">.</span><span class=\"syn-fn\">dismiss</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">.</span>expiresAt<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Low</span><span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> feed<span class=\"syn-punc\">.</span><span class=\"syn-fn\">dismiss</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The card is one region",
        "ios": "<code>.accessibilityElement(children: .contain)</code> with the title as its label",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code>"
      },
      {
        "requirement": "Time remaining is spoken, not spelled out",
        "ios": "The countdown supplies one formatted duration",
        "android": "Same, via the countdown's <code>contentDescription</code>"
      },
      {
        "requirement": "Dismiss is reachable but not first",
        "ios": "Place it last in the accessibility order with a clear label",
        "android": "Same, via traversal order and <code>onClickLabel</code>"
      },
      {
        "requirement": "The action is a button",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code> on the bar",
        "android": "<code>Role.Button</code> on the bar"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Let the card pick the countdown treatment that contrasts with it — pale timer on the blue card, bold timer on the white one.",
        "dontText": "Don't match the timer to the card; it will disappear into its own background."
      },
      {
        "doText": "Use High for one headline promotion per surface.",
        "dontText": "Don't stack two High cards — competing urgency reads as neither."
      },
      {
        "doText": "Give the dismiss control a defined lifetime.",
        "dontText": "Don't ship a close button that brings the card back on the next launch."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Container</code> → <code>⤷ ActionSlot</code> → <code>⤷ CloseSlot</code> in both versions, matching the system's slot vocabulary." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Emphasis = High | Low</code> — semantic, and survives a palette change." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Card, copy, action and dismiss all bound. The close icon now clears 3:1 on both versions." },
      { "id": "C4", "criterion": "Native Mappability", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Maps to a card with a title, a timer, an action and a dismiss. The action bar is a Button - XSmall stretched full width, which is intentional but will read oddly in a mapping." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "The card has no states of its own — pressed behaviour belongs to the button and the dismiss control." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The close icon is a vector instance in a slot." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "One enum, one text property and two slots." },
      { "aspect": "Token coverage", "status": "ready", "statusLabel": "Ready", "notes": "All surfaces, copy and icons bound." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 2,
      "description": "1 Emphasis setting × 2 values. The countdown inside always runs opposite to the card.",
      "columns": ["Emphasis", "Card", "Countdown inside", "Node"],
      "rows": [
        { "cells": ["High", "#1972F9", "Style=One, Surface=onColor", "5630:36045"] },
        { "cells": ["Low", "#FFFFFF", "Style=One, Surface=onLight", "5630:36046"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "Split out of Countdown · node 5630:36047",
      "rows": [
        {
          "body": "<strong>Extracted from <a href=\"/components/countdown\">Countdown</a>.</strong> The promo card was a fourth value on that component's Style setting, sitting alongside three timer layouts.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C1 — copy, action and dismiss are no longer baked in.</strong> <code>#title</code> is a text layer; the button and close icon are slots.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — <code>Theme</code> became <code>Emphasis = High | Low</code></strong>, after a pass through <code>Color = Light | Blue</code>, which repeated the hue-as-value pattern the guidelines rule out.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C3 — the dismiss control was re-coloured</strong> on both versions, from roughly 1.9:1 to about 3.0:1 on the white card and 3.2:1 on the blue.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>C1 — slot and wrapper names aligned:</strong> <code>⤷ ActionSlot</code>, <code>⤷ CloseSlot</code>, <code>Container</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong><code>#title</code> still holds placeholder copy</strong> with a manual line break, kept while the content model is undecided.",
          "delta": { "kind": "open", "label": "Docs" }
        }
      ]
    }
  ]
};
