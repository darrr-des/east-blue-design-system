import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. */
const adCarouselControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasCTA',
        prop: 'hascta',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
      },
      {
        label: '⤷ CarouselSlot',
        prop: 'slot',
        options: [
          { value: 'promo', label: 'Ad Space · Promo' },
          { value: 'receipt', label: 'Ad Space · Receipt' },
          { value: 'banner', label: 'Ad Space · Banner' }
        ],
        defaultValue: 'promo'
      }
    ]
  }
];

export const adCarousel: ComponentData = {
  "meta": {
    "slug": "ad-carousel",
    "name": "Ad Carousel",
    "node": "5703:38564",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5703-38564",
    "description": "A titled rail that scrolls Ad Space cards sideways, with an optional button in the header. One version, driven by a content slot.",
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
    "navGroup": "Ad Space",
    "verdict": {
      "kind": "keep",
      "title": "Keep — clean structure, one open family question",
      "text": "The component reads in two levels: a <code>Header</code> holding <code>#title</code> and an optional button, over a <code>⤷ CarouselSlot</code> that holds the cards. Names match <a href=\"/components/ad-space\">Ad Space</a> exactly, and the slot is the single control for what appears in the rail. It is badged Needs Refinement for one reason: nothing inside it is actually about ads. A title, a button, and a row of cards is the generic rail pattern, so the ad-specific framing is worth revisiting once the Carousel family is reviewed."
    }
  },
  "overview": {
    "inContextNote": "Sits on dashboard and category surfaces as a sponsored rail — a section heading, an optional \"Show more\" button, and a horizontally scrolling row of Ad Space cards with the next one peeking at the right edge.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"adc-demo-preview\"><div class=\"eb-preview-adcarousel\"><div class=\"eb-preview-adcarousel__header\"><div class=\"eb-preview-adcarousel__title\">Title</div></div><div class=\"eb-preview-adcarousel__rail\"><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCTA</span><select id=\"adc-ctrl-hascta\" class=\"demo-panel-select\" onchange=\"_adcUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">⤷ CarouselSlot</span><select id=\"adc-ctrl-slot\" class=\"demo-panel-select\" onchange=\"_adcUpdate()\"><option value=\"promo\" selected=\"\">Ad Space · Promo</option><option value=\"receipt\">Ad Space · Receipt</option><option value=\"banner\">Ad Space · Banner</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"adc-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Title\" oninput=\"_adcUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "The rail is content-agnostic in structure — <code>⤷ CarouselSlot</code> takes whatever card is dropped into it. Every ad surface that needs a scrolling row uses this one component rather than a bespoke frame."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, heading type style, spacing, and clipping behaviour. The button comes from the design system's own <code>Button - XSmall</code> rather than a hand-built shape."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Layer names match <a href=\"/components/ad-space\">Ad Space</a> one for one — <code>Header</code>, <code>#title</code>, and a <code>⤷ </code>-prefixed slot. The duplicate hand-built button and the spacer node that used to sit in the header are both gone."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "It nests Ad Space cleanly through the slot. What it cannot do is hold anything else: the component is named and documented for ads, so a dashboard rail of Carousel Cards needs a second component. That is the open family question behind the Needs Refinement badge."
      }
    ],
    "behavior": [
      {
        "state": "hasCTA=false",
        "ios": "na",
        "android": "na",
        "property": "default",
        "notes": "Heading only. This is the default the component ships with."
      },
      {
        "state": "hasCTA=true",
        "ios": "na",
        "android": "na",
        "property": "Button - XSmall",
        "notes": "Adds the \"Show more\" button at the right of the heading row."
      },
      {
        "state": "⤷ CarouselSlot",
        "ios": "na",
        "android": "na",
        "property": "content slot",
        "notes": "Selects which Ad Space version fills the rail. Promo is the default."
      },
      {
        "state": "Peek",
        "ios": "na",
        "android": "na",
        "property": "overflow clip",
        "notes": "The rail is wider than the shell, so the next card is cut off at the right edge to signal scrollability."
      }
    ],
    "resolved": [
      {
        "headline": "One button in the heading, not two.",
        "body": "The header used to carry a hand-built \"Show more\" — an <code>offset</code> frame, a spacer, and an arrow — alongside a real <code>Button - XSmall</code> instance saying the same thing. The hand-built one is gone.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The spacer node is gone.",
        "body": "A <code>_space_8</code> instance was faking a gap between the label and the arrow. Spacer nodes have no native equivalent — auto layout spacing does the job — and it went with the hand-built button.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Names match Ad Space.",
        "body": "<code>header-content</code> became <code>Header</code>, and the empty <code>header</code> frame wrapping it was removed. The heading text is <code>#title</code>, the same name Ad Space uses for the same job.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The one-value setting is gone.",
        "body": "The component was a set with a single <code>Type=Default</code> version — a dropdown with nothing to choose. It is now a plain component; what varies is the slot content and <code>hasCTA</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Banner filling the rail edge to edge is intentional.",
        "body": "A 320-wide Banner in a 360-wide shell leaves no room for the next card, so nothing peeks — Promo shows about 96px and Receipt about 20px. Confirmed as intended: Banner is the full-width option, and the rail still scrolls. No change to the inset or the gap.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The next card now actually peeks.",
        "body": "With Banner cards in the rail, the second card started exactly on the shell's right edge — nothing showed, so the rail read as a single card. Promo is now the default slot content, which leaves about 96px of the next card visible.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Revisit whether this should be ad-specific.",
        "body": "Strip the name away and this is a heading, an optional button, and a row of cards — the generic rail. Swap Ad Space for <a href=\"/components/carousel-card\">Carousel Card</a> and it is the dashboard rail. Keeping it ad-specific was a deliberate call this pass, because calling it Carousel would collide with Carousel Card and Carousel Item. Settle it as a family decision when the Carousel family is reviewed, so the design system does not end up with one rail per card type.",
        "tag": "Family"
      },
      {
        "headline": "Give the heading a way to switch off.",
        "body": "<code>hasCTA</code> hides the button, but the heading itself is always on. Rails that sit under an existing section heading would repeat it. A <code>hasHeader</code> boolean, matching the <code>has</code> prefix already used for <code>hasCTA</code>, would cover that case.",
        "tag": "Property"
      },
      {
        "headline": "Make the button a slot if the label ever varies.",
        "body": "The button is a fixed <code>Button - XSmall</code> instance today. If \"Show more\" ever becomes \"See all\" or \"View offers\", promote it to <code>⤷ ActionSlot</code>, the same pattern Tooltip uses, so the label and icon can change without detaching.",
        "tag": "Slot"
      },
      {
        "headline": "Confirm the heading colour is token-bound.",
        "body": "<code>#title</code> renders <code>#072592</code> and the button label <code>#005CE5</code>. Both should resolve to named colours rather than raw values. Worth a Dev Mode check, since the read-only tools used for this assessment report the hex without showing whether a token sits behind it.",
        "tag": "Token"
      },
      {
        "headline": "Treat the rail as a list for assistive tech.",
        "body": "Expose the rail as a single horizontally scrollable group with the heading as its label, and each card as an element within it, so screen reader users can skip the whole rail instead of stepping through every ad.",
        "tag": "A11y"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/ad-space\">Ad Space</a> supplies every card in the rail. <a href=\"/components/carousel-card\">Carousel Card</a> and <a href=\"/components/carousel-item\">Carousel Item</a> are the non-ad equivalents and are the reason this component is not simply called Carousel.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "adc-spec-card-default",
        "demoKey": "default",
        "demoControls": adCarouselControls,
        "title": "Ad Carousel",
        "node": "5703:38564",
        "description": "One version. The heading row carries #title and an optional button; the slot below holds the cards and clips the last one.",
        "previewHtml": "<div id=\"adc-spec-default\"><div class=\"eb-preview-adcarousel\"><div class=\"eb-preview-adcarousel__header\"><div class=\"eb-preview-adcarousel__title\">Title</div></div><div class=\"eb-preview-adcarousel__rail\"><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "hasCTA", "value": "false", "prop": "hascta" },
              { "key": "⤷ CarouselSlot", "value": "Ad Space · Promo", "prop": "slot",
                "variants": {
                  "slot:receipt": { "value": "Ad Space · Receipt" },
                  "slot:banner": { "value": "Ad Space · Banner" }
                }
              },
              { "key": "#title", "value": "Title" },
              { "key": "Button", "value": "Button - XSmall instance" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "#title", "value": "#072592", "token": "text/color-text-heading", "swatch": true },
              { "key": "Button label", "value": "#005CE5", "token": "text/color-text-link", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "360", "mono": true },
              { "key": "Height", "value": "288", "mono": true },
              { "key": "Padding top", "value": "12", "mono": true },
              { "key": "Side inset", "value": "24", "mono": true },
              { "key": "Heading to rail", "value": "16", "mono": true },
              { "key": "Card gap", "value": "16", "mono": true },
              { "key": "Next card visible", "value": "96 (Promo)", "mono": true,
                "variants": {
                  "slot:receipt": { "value": "20 (Receipt)" },
                  "slot:banner": { "value": "full width — no peek by design (Banner)" }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title style", "value": "Primary/Bold/Heading", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold · 18 / 18 · +0.25", "mono": true },
              { "key": "Button label", "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> ad <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">) {</span> ad<span class=\"syn-punc\">.</span>image <span class=\"syn-punc\">}</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">) {</span>\n    ads<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> ad <span class=\"syn-eq\">-&gt;</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Asset</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
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
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        {
          "figma": "#title",
          "swift": "title: String",
          "compose": "title: String"
        },
        {
          "figma": "hasCTA",
          "swift": "action: EBAdCarouselAction?",
          "compose": "action: (() -> Unit)?"
        },
        {
          "figma": "⤷ CarouselSlot",
          "swift": "@ViewBuilder content: () -> Content",
          "compose": "content: @Composable RowScope.() -> Unit"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Heading only (default)",
        "swift": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Sponsored\"</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">) {</span> $0<span class=\"syn-punc\">.</span>image <span class=\"syn-punc\">} }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Sponsored\"</span><span class=\"syn-punc\">) {</span>\n    ads<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Asset</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">) } }</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "With the button (hasCTA=true)",
        "swift": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Sponsored\"</span><span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">.</span><span class=\"syn-fn\">init</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Show more\"</span><span class=\"syn-punc\">) {</span> router<span class=\"syn-punc\">.</span><span class=\"syn-fn\">push</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.allAds</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">) {</span> $0<span class=\"syn-punc\">.</span>image <span class=\"syn-punc\">} }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Sponsored\"</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> navController<span class=\"syn-punc\">.</span><span class=\"syn-fn\">navigate</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"ads\"</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">) {</span>\n    ads<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Asset</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">) } }</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Rail is one navigable group",
        "ios": "<code>accessibilityElement(children: .contain)</code> on the rail, labelled by <code>#title</code>",
        "android": "<code>Modifier.semantics { collectionInfo = CollectionInfo(1, itemCount) }</code>"
      },
      {
        "requirement": "Heading is exposed as a heading",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code>",
        "android": "<code>Modifier.semantics { heading() }</code>"
      },
      {
        "requirement": "Button reachable without scrolling the rail",
        "ios": "Button precedes the rail in the accessibility order",
        "android": "Button precedes the rail in the traversal order"
      },
      {
        "requirement": "Clipped card is still reachable",
        "ios": "Scroll to reveal on accessibility focus",
        "android": "<code>bringIntoViewRequester</code> on focus"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Promo cards when the rail should read as scrollable — about 96px of the next card stays visible.",
        "dontText": "Don't expect a peek from Banner cards; at 320 wide they fill the rail by design."
      },
      {
        "doText": "Let the heading describe the whole rail, and switch off the card titles inside it.",
        "dontText": "Don't repeat the same wording in the rail heading and in every card."
      },
      {
        "doText": "Turn on the button only when there is somewhere further to go.",
        "dontText": "Don't ship a \"Show more\" that leads back to the same surface."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two levels, names matching Ad Space. Banner filling the rail edge to edge is intentional."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The one-value <code>Type</code> setting was removed. <code>hasCTA</code> follows the boolean prefix convention."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colours are attested as token-bound but were not verifiable with read-only tools. Needs a Dev Mode confirmation."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The spacer instance is gone. Heading plus scrolling row maps to a lazy row with a header on both platforms."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The container has no states of its own. Pressed behaviour belongs to the cards and the button."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The button's arrow uses a <code>shape_full</code> boolean operation — delegated to the iconography team, not fixable here."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>hasCTA</code> (bool), <code>#title</code> (text), <code>⤷ CarouselSlot</code> (slot) map one to one."
      },
      {
        "aspect": "Token coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Heading and button colours need a Dev Mode check before mapping."
      },
      {
        "aspect": "Registration",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the native library exists."
      }
    ],
    "variants": {
      "total": 2,
      "description": "1 component × 2 hasCTA values = 2 states. Rail content is set through the slot, not through a variant.",
      "columns": ["hasCTA", "Header", "Node"],
      "rows": [
        { "cells": ["false", "#title only", "5703:38564"] },
        { "cells": ["true", "#title + Button - XSmall", "5703:38564"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "First assessment · node 5703:38564",
      "rows": [
        {
          "body": "Duplicate <strong>Show more</strong> removed — the hand-built frame is gone, the <code>Button - XSmall</code> instance stays.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>_space_8</code> spacer instance deleted with the hand-built button.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<code>header-content</code> renamed to <code>Header</code>, the redundant <code>header</code> wrapper removed, and the heading text renamed to <code>#title</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "The single-value <code>Type</code> setting removed — the component set became a plain component, which is why the node changed.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "Promo set as the default rail content so the next card peeks. Banner fills the rail edge to edge, confirmed as intentional.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        }
      ]
    }
  ]
};
