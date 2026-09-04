import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

const promoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'headerText',
        prop: 'header',
        control: 'input' as const,
        defaultValue: 'Hurry up! Sale ends in:',
        options: []
      },
      {
        label: 'hasCTA',
        prop: 'hascta',
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasCloseButton',
        prop: 'hasclose',
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

export const countdownPromo: ComponentData = {
  "meta": {
    "slug": "countdown-promo",
    "name": "Countdown - Promo",
    "node": "5630:36047",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5630-36047",
    "description": "A promotional card built around a countdown — a line of copy, the timer, a full-width action and a dismiss control. Two levels of emphasis.",
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
    "navGroup": "Countdown",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the recipe the last review asked for",
      "text": "All four DS Health traits pass. This card used to live inside <a href=\"/components/countdown\">Countdown</a> as a fourth \"style\", which is what made that component hard to reason about — a promo with copy, a button and a close icon is not a sibling of a timer layout. It is now its own component composing the timer, with the button and the dismiss control as real slots rather than baked instances."
    }
  },
  "overview": {
    "inContextNote": "Runs full-width on the dashboard and on Discover, above the fold, for a campaign with a deadline. High emphasis for a headline promotion, Low for one that sits alongside other cards without shouting.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cdp-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Emphasis</span><select id=\"cdp-ctrl-emphasis\" class=\"demo-panel-select\" onchange=\"_cdpUpdate()\"><option value=\"high\" selected>High</option><option value=\"low\">Low</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">headerText</span><input type=\"text\" id=\"cdp-ctrl-header\" class=\"demo-panel-select demo-panel-input\" value=\"Hurry up! Sale ends in:\" oninput=\"_cdpUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCTA</span><select id=\"cdp-ctrl-hascta\" class=\"demo-panel-select\" onchange=\"_cdpUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCloseButton</span><select id=\"cdp-ctrl-hasclose\" class=\"demo-panel-select\" onchange=\"_cdpUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div></div></div></div>",
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
    "description": "A promotional card built around a countdown — a line of copy, the timer, a full-width action and a dismiss control. High puts the card on the brand colour and the timer on white; Low reverses it. The timer is a Countdown instance at <code>Style=One</code>, narrowed to 173 × 44 so copy can sit beside it — an instance override that also drops its padding from 16 to 8 and its gap from 16 to 8.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Emphasis",
        description: "The five roles Promo paints itself. Everything inside the timer belongs to Countdown and carries its tokens: <code>text/color-text-primary</code> for the numbers and labels, <code>text/color-text-inverse-weak</code> for the label on the brand fill, <code>bg/color-bg-info-weak</code> and <code>border/color-border-info</code> for the separator on the onLight and onColor surfaces. Promo swaps which Countdown surface it places, not those colours.",
        columns: ["High", "Low"],
        rows: [
          { role: "Card", token: "bg/color-bg-brand · bg/color-bg-main",
            values: ["#1972F9", "#FFFFFF"] },
          { role: "#title", token: "text/color-text-inverse · text/color-text-info-strongest",
            values: ["#FFFFFF", "#071969"] },
          { role: "ActionSlot bar", token: "bg/color-bg-primary-hover · bg/color-bg-primary",
            values: ["#2340A9", "#005CE5"] },
          { role: "ActionSlot #label", token: "text/color-text-inverse",
            values: ["#FFFFFF", "#FFFFFF"] },
          { role: "CloseSlot icon", token: "border/color-border-inverse-weak · border/color-border-stronger",
            values: ["#F6F9FD @ 80%", "#7E96BE"] },
          { role: "Countdown inside", token: "placed as Style=One, Surface follows the emphasis",
            values: ["onColor — white on the brand card", "onLight — the brand gradient on white"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "high",
        "demoKey": "high",
        "demoControls": promoControls,
        "title": "High",
        "node": "5630:36045",
        "description": "",
        "previewHtml": "<div id=\"cdp-spec-high\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Emphasis", "value": "High" },
              { "key": "headerText", "value": "Hurry up! Sale ends in:", "prop": "header" },
              { "key": "⤷ ActionSlot (slot)", "value": "Button - XSmall · 2 items" },
              { "key": "⤷ CloseSlot (slot)", "value": "Close · 2 items" },
              { "key": "hasCTA", "value": "true", "prop": "hascta" },
              { "key": "hasCloseButton", "value": "true", "prop": "hasclose" },
              { "key": "Countdown inside", "value": "Style=One · Surface=onColor · resized to 173 × 44 with 8px padding and an 8px gap" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card", "value": "#1972F9", "token": "bg/color-bg-brand", "swatch": true, "variants": { "emphasis:low": { "value": "#FFFFFF", "token": "bg/color-bg-main" } } },
              { "key": "#title", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true, "variants": { "emphasis:low": { "value": "#071969", "token": "text/color-text-info-strongest" } } },
              { "key": "ActionSlot bar", "value": "#2340A9", "token": "bg/color-bg-primary-hover", "swatch": true, "variants": { "emphasis:low": { "value": "#005CE5", "token": "bg/color-bg-primary" } } },
              { "key": "ActionSlot #label", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "CloseSlot icon", "value": "#F6F9FD @ 80%", "token": "border/color-border-inverse-weak", "swatch": true, "variants": { "emphasis:low": { "value": "#7E96BE", "token": "border/color-border-stronger" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Label/Base", "mono": true },
              { "key": "ActionSlot #label", "value": "Primary/Label/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "92px — 68px content row + 24px action bar", "mono": true },
              { "key": "Width", "value": "360px", "mono": true },
              { "key": "Radius", "value": "0px — the card is square", "mono": true },
              { "key": "Padding H", "value": "20px left · 24px right, in the content row", "mono": true },
              { "key": "Padding V", "value": "12px in the content row · 5px in the action bar", "mono": true },
              { "key": "Gap", "value": "Auto — the title and the timer sit at opposite ends; 0 between the content row and the action bar", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Hurry up! Sale ends in:\"</span><span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.high</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Hurry up! Sale ends in:\"</span><span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownPromoEmphasis</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">High</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "low",
        "demoKey": "low",
        "demoControls": promoControls,
        "title": "Low",
        "node": "5630:36046",
        "description": "",
        "previewHtml": "<div id=\"cdp-spec-low\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Emphasis", "value": "Low" },
              { "key": "headerText", "value": "Hurry up! Sale ends in:", "prop": "header" },
              { "key": "⤷ ActionSlot (slot)", "value": "Button - XSmall · 2 items" },
              { "key": "⤷ CloseSlot (slot)", "value": "Close · 2 items" },
              { "key": "hasCTA", "value": "true", "prop": "hascta" },
              { "key": "hasCloseButton", "value": "true", "prop": "hasclose" },
              { "key": "Countdown inside", "value": "Style=One · Surface=onLight · resized to 173 × 44 with 8px padding and an 8px gap" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card", "value": "#1972F9", "token": "bg/color-bg-brand", "swatch": true, "variants": { "emphasis:low": { "value": "#FFFFFF", "token": "bg/color-bg-main" } } },
              { "key": "#title", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true, "variants": { "emphasis:low": { "value": "#071969", "token": "text/color-text-info-strongest" } } },
              { "key": "ActionSlot bar", "value": "#2340A9", "token": "bg/color-bg-primary-hover", "swatch": true, "variants": { "emphasis:low": { "value": "#005CE5", "token": "bg/color-bg-primary" } } },
              { "key": "ActionSlot #label", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "CloseSlot icon", "value": "#F6F9FD @ 80%", "token": "border/color-border-inverse-weak", "swatch": true, "variants": { "emphasis:low": { "value": "#7E96BE", "token": "border/color-border-stronger" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Label/Base", "mono": true },
              { "key": "ActionSlot #label", "value": "Primary/Label/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "92px — 68px content row + 24px action bar", "mono": true },
              { "key": "Width", "value": "360px", "mono": true },
              { "key": "Radius", "value": "0px — the card is square", "mono": true },
              { "key": "Padding H", "value": "20px left · 24px right, in the content row", "mono": true },
              { "key": "Padding V", "value": "12px in the content row · 5px in the action bar", "mono": true },
              { "key": "Gap", "value": "Auto — the title and the timer sit at opposite ends; 0 between the content row and the action bar", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Hurry up! Sale ends in:\"</span><span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> saleEnds<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.low</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Hurry up! Sale ends in:\"</span><span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> saleEnds<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownPromoEmphasis</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Low</span>\n<span class=\"syn-punc\">)</span>"
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
      "description": "Six properties, in the order the Figma property panel lists them. The deadline is not among them: Figma places a static <a href=\"/components/countdown\">Countdown</a> instance showing <code>00:00:00:00</code>, so nothing in the file states when the promotion ends — natively that is <code>until</code>, and the platform derives the timer from it. Each slot keeps its boolean alongside it rather than being inferred from a nil parameter, so every Figma property traces 1:1 for Code Connect.",
      "rows": [
        {
          "figma": "Emphasis — High, Low",
          "swift": "<code>emphasis: EBCountdownPromoEmphasis</code>",
          "compose": "<code>emphasis: EBCountdownPromoEmphasis</code>"
        },
        {
          "figma": "headerText — free text",
          "swift": "<code>headerText: String</code>",
          "compose": "<code>headerText: String</code>"
        },
        {
          "figma": "hasCTA — true, false",
          "swift": "<code>hasCTA: Bool = true</code>",
          "compose": "<code>hasCTA: Boolean = true</code>"
        },
        {
          "figma": "hasCloseButton — true, false",
          "swift": "<code>hasCloseButton: Bool = true</code>",
          "compose": "<code>hasCloseButton: Boolean = true</code>"
        },
        {
          "figma": "⤷ ActionSlot (slot)",
          "swift": "<code>action: EBButton?</code> — shown when <code>hasCTA</code>",
          "compose": "<code>action: @Composable (() -> Unit)?</code> — shown when <code>hasCTA</code>"
        },
        {
          "figma": "⤷ CloseSlot (slot)",
          "swift": "<code>onDismiss: (() -> Void)?</code> — shown when <code>hasCloseButton</code>",
          "compose": "<code>onDismiss: (() -> Unit)?</code> — shown when <code>hasCloseButton</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "High — a headline promotion",
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText<span class=\"syn-punc\">:</span> campaign<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> campaign<span class=\"syn-punc\">.</span>endsAt<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.high</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText <span class=\"syn-eq\">=</span> campaign<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> campaign<span class=\"syn-punc\">.</span>endsAt<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownPromoEmphasis</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">High</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Low — dismissible, alongside other cards",
        "swift": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText<span class=\"syn-punc\">:</span> voucher<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until<span class=\"syn-punc\">:</span> voucher<span class=\"syn-punc\">.</span>expiresAt<span class=\"syn-punc\">,</span>\n    emphasis<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.low</span><span class=\"syn-punc\">,</span>\n    onDismiss<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> feed<span class=\"syn-punc\">.</span><span class=\"syn-fn\">dismiss</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCountdownPromo</span><span class=\"syn-punc\">(</span>\n    headerText <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    until <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">.</span>expiresAt<span class=\"syn-punc\">,</span>\n    emphasis <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCountdownPromoEmphasis</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Low</span><span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> feed<span class=\"syn-punc\">.</span><span class=\"syn-fn\">dismiss</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
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
      { "id": "C4", "criterion": "Native Mappability", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Five parameters, no web-only pattern — but the <code>⤷ ActionSlot</code> does not map as it stands. It holds a Button - XSmall overridden away from what Button is: 24px tall against Button’s 26, square against its 99px pill, filling 360 against its hug, and on the High card painted <code>#2340A9</code> — Button’s <em>pressed</em> fill — as a resting state. A developer given <code>action: EBButton?</code> would render a 26px enabled-blue pill, not the full-bleed bar the design shows. Either Button gains a full-bleed appearance or Promo’s action becomes its own treatment; the slot maps once that is decided." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "The card has no states of its own — pressed behaviour belongs to the button and the dismiss control." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The close icon is a vector instance in a slot." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
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
      "version": "1.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt, three properties documented — node 5630:36047",
      "rows": [
        {
          "body": "<strong>Three of the four properties were undocumented.</strong> The page described <code>Emphasis</code>; the Figma panel also carries <code>headerText</code>, <code>hasCTA</code> and <code>hasCloseButton</code>. Nothing changed in Figma — they were always there. <code>get_node_info</code> cannot read property definitions, so this is the third component in the family where the panel held more than the node tree could show.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>One card per <code>Emphasis</code> value.</strong> High and Low, in the panel’s order, with the three content properties as controls on both rather than as extra cards.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout was derived from bounding boxes; it is now read from the panel.</strong> All seven keys: 20px left and 24px right in the content row, 12px vertical, 5px in the action bar, gap <code>Auto</code>, radius <code>0</code>. Four of the old values were labelled \"(derived)\" and three of those were wrong.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The nested <a href=\"/components/countdown\">Countdown</a> is overridden three ways.</strong> The instance is resized from 237 to 173 wide, its padding cut from 16/16 to 8/8 and its gap from 16 to 8, so copy can sit beside it. Recorded on the Properties row of both cards; <code>Style=One</code> cannot express a narrow timer on its own.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Preview geometry and typeface corrected.</strong> The container drew no padding, the timer inherited Countdown’s full 237px width and overflowed the card, the action bar had none of its 5×8 padding, the card carried a radius it does not have, and the whole preview rendered in the documentation font instead of Proxima Soft.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>#title</code> renders its line break again.</strong> Figma sets the placeholder as <code>Hurry up!</code> then a break then <code>Sale ends in:</code>. A text input cannot hold a newline, so the control shows the flattened string and the break is restored while it is untouched.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three of the four tabs rendered nothing.</strong> Two surplus <code>&lt;/div&gt;</code> in <code>livePreviewHtml</code> closed <code>[data-tab-group]</code> two levels early, which left the Style, Code and Changelog panels outside the root <code>switchTab</code> queries — clicking a tab deactivated Overview and had no panel to activate. The markup and the previews were correct throughout; only the nesting was wrong, and both the build and the lint passed. Measured across all 95 components afterwards: no other page is affected.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Countdown family artifact <code>com.eastblue.ds:countdown:1.0.0</code> and imports <code>com.eastblue.ds.countdown.*</code> — the third and last member of the family onto the family artifact.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping was missing two properties and misnamed a third.</strong> <code>hasCTA</code> and <code>hasCloseButton</code> had no rows; <code>#title</code> named the layer rather than the <code>headerText</code> property; and a <code>Countdown</code> row mapped something that is not a property at all. Six rows now, one per property. The deadline is named in the description instead: Figma places a static instance showing <code>00:00:00:00</code>, so nothing in the file says when a promotion ends.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Code tab contradicted the Style tab.</strong> Usage Snippets called <code>title:</code> and <code>emphasis = High</code> where the Style tab’s DEV code calls <code>headerText:</code> and <code>EBCountdownPromoEmphasis.Low</code>. Both now use one API, and the two snippets are keyed to the <code>Emphasis</code> values rather than to placement.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The DEV snippet split its own string literal.</strong> <code>getSnippet</code> interpolated the placeholder’s real line break straight into the Swift literal, so switching language tabs printed a string broken across two lines. It escapes to <code>\\n</code> now, the way a developer would have to write it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Code Connect emptied.</strong> Three rows describing readiness for a registration that cannot happen while the native library does not exist.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>C4 held open: the action slot holds a button that is no longer a button.</strong> <code>⤷ ActionSlot</code> takes a Button - XSmall overridden four ways — 24px tall against Button’s 26, square against its 99px pill, filling 360 against its hug, and on the High card painted <code>#2340A9</code>, which is Button’s <em>pressed</em> fill, as a resting state. A developer given <code>action: EBButton?</code> would render a 26px enabled-blue pill, not the full-bleed bar the design shows. Native Readiness moves from Ready to Needs Refinement; the Overview issue and the fix are a separate pass.",
          "delta": { "kind": "open", "label": "C4 open" }
        }
      ]
    },
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
