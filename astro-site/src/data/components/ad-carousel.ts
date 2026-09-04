import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

/* Demo controls mirror the Figma property panel, in its order:
   `Title`, `hasCTA`, `⤷ CarouselSlot`. The slot gets no control. */
const adCarouselControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Title',
        prop: 'title',
        control: 'input',
        options: [],
        defaultValue: 'Title'
      },
      {
        label: 'hasCTA',
        prop: 'hascta',
        control: 'toggle',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
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
        "description": "",
        "previewHtml": "<div id=\"adc-spec-default\"><div class=\"eb-preview-adcarousel\"><div class=\"eb-preview-adcarousel__header\"><div class=\"eb-preview-adcarousel__title\">Title</div></div><div class=\"eb-preview-adcarousel__rail\"><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Title", "value": "Title" },
              { "key": "hasCTA", "value": "true", "prop": "hascta" },
              { "key": "⤷ CarouselSlot", "value": "Ad Space · Promo" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "#title", "value": "#072592", "token": "text/color-text-stronger", "swatch": true },
              { "key": "CTA label", "value": "#005CE5", "token": "main/button/tertiary/brand/enabled/label", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Label/Large", "mono": true },
              { "key": "CTA label", "value": "Primary/Label/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "288px", "mono": true },
              { "key": "Width", "value": "360px", "mono": true },
              { "key": "Padding H", "value": "24px leading · 0 trailing (derived)", "mono": true },
              { "key": "Padding V", "value": "12px (derived)", "mono": true },
              { "key": "Gap", "value": "16px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> ad <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">,</span> header<span class=\"syn-punc\">:</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    ads<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> ad <span class=\"syn-eq\">-&gt;</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">,</span> header <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Ad Carousel — Colors',
        description: 'The frame paints a real white surface. The cards inside the rail carry their own colours — see Ad Space.',
        rows: [
          { role: 'Surface',    token: 'bg/color-bg-main',                          value: '#FFFFFF' },
          { role: '#title',     token: 'text/color-text-stronger',                  value: '#072592' },
          { role: 'CTA label',  token: 'main/button/tertiary/brand/enabled/label',  value: '#005CE5' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.1.3\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:ad-carousel:1.1.3\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>adspace<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        {
          "figma": "Title (text)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "hasCTA — true, false",
          "swift": "<code>action: EBAdCarouselAction?</code> — nil hides the button",
          "compose": "<code>action: (() -> Unit)? = null</code>"
        },
        {
          "figma": "⤷ CarouselSlot (slot)",
          "swift": "<code>@ViewBuilder content: () -> Content</code>",
          "compose": "<code>content: @Composable RowScope.() -> Unit</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "With the button (hasCTA=true)",
        "swift": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">:</span> <span class=\"syn-type\">EBAdCarouselAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Show more\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* action */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> ad <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">,</span> header<span class=\"syn-punc\">:</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* action */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    ads<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> ad <span class=\"syn-eq\">-&gt;</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">,</span> header <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Heading only (default)",
        "swift": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> ad <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">,</span> header<span class=\"syn-punc\">:</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdCarousel</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    ads<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> ad <span class=\"syn-eq\">-&gt;</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">,</span> header <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
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
        "notes": "Confirmed by design: surface <code>bg/color-bg-main</code>, <code>#title</code> <code>text/color-text-stronger</code>, CTA label <code>main/button/tertiary/brand/enabled/label</code>."
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
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "A single component, not a component set — 1 variant. <code>hasCTA</code> is a boolean property and <code>⤷ CarouselSlot</code> is a slot, so neither multiplies the matrix. The two rows below are the states that boolean produces.",
      "columns": ["hasCTA", "Header", "Node"],
      "rows": [
        { "cells": ["false", "#title only", "5703:38564"] },
        { "cells": ["true", "#title + Button - XSmall", "5703:38564"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.1.4",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Preview typeface corrected — node 6507:74166",
      "rows": [
        {
          "body": "<strong>The preview rendered Primary text in the wrong typeface.</strong> Every <code>Primary/*</code> layer is Proxima Soft and every <code>Secondary/*</code> layer is BarkAda, but the preview never said so: the root declared no <code>font-family</code> at all, which resolves through <code>.eb-preview-scope</code> to <code>body</code> — the documentation font, BarkAda. Both text layers here are Primary — <code>#title</code> at <code>Primary/Label/Large</code> and the CTA label at <code>Primary/Label/Small</code> — so the whole preview was in the wrong face. There is no Secondary text on this component, so the root declaration settles it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "1.1.3",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Kotlin import corrected to the family package",
      "rows": [
        {
          "body": "<strong>The Kotlin import named the component, not its family.</strong> It read <code>com.eastblue.ds.adcarousel.*</code>. Under the packaging rule settled on 2 September the package is the family — <code>Ad Space</code> — so it is <code>com.eastblue.ds.adspace.*</code>. One package per family keeps imports stable when a family gains a component. The Gradle artifact keeps the slug and is unchanged.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "1.1.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Corrects the default recorded in v1.1.1 — node 5703:38564",
      "rows": [
        {
          "body": "<strong><code>hasCTA</code> defaults to <code>false</code>.</strong> v1.1.1 recorded the opposite, reading the toggle's on state in the Figma file as the component default. It was set on to show the full scope for preview. The panel control, the spec-card fallback snippet and the Usage Snippets order all now start from the button hidden.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Overview behavior table was right.</strong> v1.1.1 logged it as contradicting the panel; it does not. That open item is withdrawn — no Component Review is owed for it.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        }
      ]
    },
    {
      "version": "1.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Corrections to v1.1.0 — node 5703:38564",
      "rows": [
        {
          "body": "<strong>The <code>Title</code> property now has a control.</strong> v1.1.0 recorded it as blocked on a shared renderer change; the renderer gained a <code>control: 'input'</code> kind later the same day, so the heading is editable from the spec-card panel. That row is superseded, not deleted.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The default snippet was labelled on the wrong state.</strong> Usage Snippets called <code>hasCTA=false</code> \"default\" while the Figma panel ships the button <strong>on</strong>. The two snippets are now \"With the button (default)\" and \"Heading only (hasCTA=false)\", in that order.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>One call, written three ways.</strong> The spec card's fallback used <code>ad.image</code>, the Code tab used <code>$0.image</code>, and the live <code>getSnippet</code> used <code>Image(ad.creative)</code>. All three now match the generated form.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Overview behavior table still calls <code>hasCTA=false</code> the shipped default.</strong> The Figma panel shows it on. Overview is not this run's scope — logged for a Component Review pass.",
          "delta": { "kind": "open", "label": "C2 Open" }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Text property added, documentation pass — node 5703:38564",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to the content guides.</strong> Four spec sections in order, card description cleared, and <code>Layout</code> cut to the canonical keys — <code>Side inset</code>, <code>Heading to rail</code>, <code>Card gap</code> and <code>Next card visible</code> came out in favour of <code>Padding H</code>, <code>Padding V</code>, <code>Gap</code> and <code>Alignment</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Typography reduced to text style names.</strong> <code>#title</code> is <code>Primary/Label/Large</code> and the CTA label is <code>Primary/Label/Small</code>, replacing the previously documented <code>Primary/Bold/Heading</code> and its font rows.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Colour tokens confirmed by design.</strong> Surface <code>bg/color-bg-main</code>, <code>#title</code> <code>text/color-text-stronger</code>, CTA label <code>main/button/tertiary/brand/enabled/label</code>. The previous <code>text/color-text-heading</code> and <code>text/color-text-link</code> paths were unverified. Unlike <a href=\"/components/ad-space\">Ad Space</a>, the frame here paints a real white fill, so the surface row is correct as written.",
          "delta": { "kind": "resolved", "label": "C3 Resolved" }
        },
        {
          "body": "<strong>A colours table was added.</strong> The component had none.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The slot no longer has a demo control.</strong> <code>⤷ CarouselSlot</code> is a slot, so the panel drops it and <code>hasCTA</code> is the only control — a toggle, defaulting to <code>true</code> as the Figma panel does.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>DEV code is live.</strong> <code>getSnippet</code> in <code>demos/ad-carousel.js</code> rebuilds both snippets from the card's controls, so turning <code>hasCTA</code> off drops the <code>action</code> argument.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Install coordinates corrected.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code> became <code>AY-Org/eb-ds-ios</code> and <code>com.eastblue.ds:ad-carousel:1.1.3</code>, and an Import block was added. Property Mapping was regrouped and Code Connect emptied.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Variant count corrected to 1.</strong> Ad Carousel is a single component, not a component set. The inventory read <code>2</code> by counting <code>hasCTA</code>'s two states; a boolean property does not multiply the variant matrix.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong><code>#title</code> gained a <code>Title</code> text property.</strong> The panel previously exposed only <code>hasCTA</code> and <code>⤷ CarouselSlot</code>, so the heading could not be set from an instance while <a href=\"/components/ad-space\">Ad Space</a> exposed one for the same job. Design added it during this pass, named to match Ad Space, default value <code>Title</code>. It sits first in the panel.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>The heading row holds its height.</strong> The live preview let the 26px CTA stretch the header; in Figma the <code>Header</code> frame stays 18px and the button overflows it, centred. The preview now matches.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The text property has no demo control.</strong> <code>SpecCard.astro</code> renders <code>select</code> and <code>toggle</code> only, so the heading cannot be edited from the panel. Blocked on a shared renderer change — the same gap logged on <a href=\"/components/ad-space\">Ad Space</a>.",
          "delta": { "kind": "partial", "label": "Docs Partial" }
        }
      ]
    },
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
