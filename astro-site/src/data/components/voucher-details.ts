import type { ComponentData, DemoControlSection } from '../types';

const detailsControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Layout',
        prop: 'layout',
        defaultValue: 'accordion',
        options: [
          { value: 'accordion', label: 'Accordion' },
          { value: 'textblock', label: 'TextBlock' }
        ]
      }
    ]
  }
];

export const voucherDetails: ComponentData = {
  "meta": {
    "slug": "voucher-details",
    "name": "Voucher Details",
    "node": "5542:32287",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5542-32287",
    "description": "The expanded voucher card — merchant, offer, price and validity above a notched divider, with the description and terms below. Two ways of presenting the terms.",
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
    "navGroup": "Voucher",
    "verdict": {
      "kind": "keep",
      "title": "Keep — no longer a screen pretending to be a component",
      "text": "All four DS Health traits pass, and the previous Product Layer verdict is overturned. That verdict rested on this being \"a 336×704 single-instance symbol with no variants\" — a screen. What exists now is a 336-wide card with a real <code>Layout</code> setting, slots for the merchant logo and status badge, and text properties throughout. It composes the DS Accordion for the collapsible terms. The redesign into a component was deliberate."
    }
  },
  "overview": {
    "inContextNote": "Opens when a voucher is tapped from the grid or the list. Accordion keeps long terms collapsed so the price and validity stay above the fold; TextBlock shows shorter terms outright and links out to the full mechanics.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vdet-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Layout</span><select id=\"vdet-ctrl-layout\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"accordion\" selected=\"\">Accordion</option><option value=\"textblock\">TextBlock</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#header</span><input type=\"text\" id=\"vdet-ctrl-header\" class=\"demo-panel-select demo-panel-input\" value=\"Brand\" oninput=\"_vdetUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"vdet-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Voucher Title\" oninput=\"_vdetUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One card serves every voucher detail view. Merchant, badge, copy and terms all come from outside; nothing about a particular offer is baked in."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, border, radius, the notched divider and both terms layouts. The divider is a real vector — a rectangle minus two circles, plus a hairline — not the raster it used to be."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Reads <code>Header</code> → <code>Details</code> → <code>strip</code> → <code>Body</code>, and shares <code>Price Container</code>, <code>#price</code>, <code>#originalPrice</code> and <code>#validity</code> with <a href=\"/components/voucher\">Voucher</a>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Takes a logo through <code>⤷ LogoSlot</code> and a status badge through <code>⤷ BadgeSlot</code>, and the Accordion layout instances the DS Accordion rather than redrawing it."
      }
    ],
    "behavior": [
      {
        "state": "Layout=Accordion",
        "ios": "na",
        "android": "na",
        "property": "336 × 507",
        "notes": "Terms collapse behind a DS Accordion instance. The only tappable part of the card."
      },
      {
        "state": "Layout=TextBlock",
        "ios": "na",
        "android": "na",
        "property": "336 × 472",
        "notes": "Terms run as a paragraph with a link to the full mechanics. Drawn locally rather than instanced — see the note on that below."
      },
      {
        "state": "⤷ LogoSlot",
        "ios": "na",
        "android": "na",
        "property": "40 × 40",
        "notes": "Merchant logo."
      },
      {
        "state": "⤷ BadgeSlot",
        "ios": "na",
        "android": "na",
        "property": "Badge",
        "notes": "Offer status, top right of the header."
      },
      {
        "state": "strip",
        "ios": "na",
        "android": "na",
        "property": "336 × 16",
        "notes": "Notched divider separating the offer summary from its detail."
      }
    ],
    "resolved": [
      {
        "headline": "It is a card now, not a screen.",
        "body": "The previous version was one 336×704 symbol with no variants — the reason it was ruled Product Layer. What exists now is a card with a real setting, sized to sit inside a screen rather than to be one. The redesign was deliberate, so the Product Layer verdict no longer applies.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "One setting replaced a set of visibility switches.",
        "body": "Terms display used to be driven by booleans that toggled which child subtree rendered, so two paths could be on at once. <code>Layout = Accordion | TextBlock</code> makes them mutually exclusive.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The notched divider is a vector.",
        "body": "It was a raster image fill that could not resize or recolour. It is now a <code>fill</code> rectangle with a <code>Union</code> of two circles subtracted, plus a <code>separator</code> line.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The logo and badge are slots.",
        "body": "<code>logo-container</code> and the frame that positioned the badge were ordinary layers. They are <code>⤷ LogoSlot</code> and <code>⤷ BadgeSlot</code> — real Figma slots, so a merchant supplies its own logo without detaching.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No layer name is used twice.",
        "body": "Two frames were both called <code>Content</code>, and <code>#title</code> held both the merchant name and the offer name. They are now <code>Details</code> and <code>Body</code>, and the merchant line is <code>#header</code> with <code>#subheader</code> beneath — named for their place in the hierarchy rather than their content.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Price reads the same as it does on the card.",
        "body": "<code>#price</code> and <code>#originalPrice</code>, one string each, matching <a href=\"/components/voucher\">Voucher</a> — so the two components describe money the same way and the platform can format it for the locale.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Names follow the system.",
        "body": "<code>termsAndCondition</code> became <code>Layout</code>, its <code>Text Block</code> value became <code>TextBlock</code>, <code>merchant-details</code> became <code>Merchant Details</code>, and the boolean operation inside <code>strip</code> is <code>shape</code> rather than repeating its parent's name.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Document that the two layouts compose differently.",
        "body": "Accordion instances the DS <code>Accordion</code>; TextBlock draws its own <code>Terms and Conditions Block</code> frame. That is deliberate — a static paragraph does not need a collapsible component — but a developer reading the layers will see one composed and one drawn, so it is worth stating rather than leaving them to guess.",
        "tag": "Docs"
      },
      {
        "headline": "Note that only the accordion is tappable.",
        "body": "The card has no states of its own by design. The accordion header expands and collapses, and TextBlock's \"See full promo mechanics.\" is a link; everything else is read-only. Say so in the Code tab so nobody wires a tap target around the whole card.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the card as a region, with the terms reachable.",
        "body": "Group the merchant, offer, price and validity so a screen reader gives the offer in one pass, then expose the terms as their own region. In the Accordion layout the collapsed state must be announced, or the terms are invisible to anyone not looking at the screen.",
        "tag": "A11y"
      },
      {
        "headline": "Give the discount a place, or confirm it belongs only on the card.",
        "body": "<a href=\"/components/voucher\">Voucher</a> carries a discount badge in its vertical layout; this card shows the original price struck through but no discount badge. That may be right — the saving is visible from the two prices — but the two components currently tell the story differently.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Layouts",
    "description": "Two ways of presenting terms on the same card. Everything above the notched divider is identical between them.",
    "specCards": [
      {
        "cardKey": "vdet-spec-card-details",
        "demoKey": "details",
        "demoControls": detailsControls,
        "title": "Voucher Details",
        "node": "5542:32287",
        "description": "Header, offer summary, notched divider, then the body. Only the body differs between the two layouts.",
        "previewHtml": "<div id=\"vdet-spec-details\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Layout", "value": "Accordion", "prop": "layout" },
              { "key": "⤷ LogoSlot", "value": "Logo - 40px" },
              { "key": "⤷ BadgeSlot", "value": "Badge" },
              { "key": "Terms", "value": "Accordion instance", "variants": { "layout:textblock": { "value": "locally drawn block" } } },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Border", "value": "#E5EBF4", "token": "border/color-border-subtle", "swatch": true },
              { "key": "#header", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "#subheader", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "#price", "value": "#005CE5", "token": "text/color-text-link", "swatch": true },
              { "key": "#originalPrice", "value": "#90A8D0", "token": "text/color-text-placeholder", "swatch": true },
              { "key": "#validity", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Badge", "value": "#2340A9", "token": "main/badge/info/bg", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "336 × 507", "mono": true, "variants": { "layout:textblock": { "value": "336 × 472" } } },
              { "key": "Header", "value": "336 × 64", "mono": true },
              { "key": "Details", "value": "336 × 95", "mono": true },
              { "key": "strip", "value": "336 × 16", "mono": true },
              { "key": "Body", "value": "336 × 332", "mono": true, "variants": { "layout:textblock": { "value": "336 × 297" } } },
              { "key": "Corner radius", "value": "8", "mono": true },
              { "key": "Logo", "value": "40 × 40", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#header", "value": "Proxima Soft Bold · 16 / 16 · +0.25", "mono": true },
              { "key": "#subheader", "value": "BarkAda SemiBold · 12 / 18 · 0", "mono": true },
              { "key": "#title", "value": "Proxima Soft Bold · 18 / 23 · +0.25", "mono": true },
              { "key": "#price", "value": "Proxima Soft Bold · 16 / 16 · +0.25", "mono": true },
              { "key": "#originalPrice", "value": "Proxima Soft SemiBold · 16 / 16, struck", "mono": true },
              { "key": "#validity", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    voucher<span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.accordion</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>merchant<span class=\"syn-punc\">.</span>logo<span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    voucher <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">TermsLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Accordion</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>merchant<span class=\"syn-punc\">.</span>logo<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>"
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
        { "figma": "Layout", "swift": "TermsLayout (.accordion / .textBlock)", "compose": "layout: TermsLayout" },
        { "figma": "⤷ LogoSlot", "swift": "@ViewBuilder logo", "compose": "logo: @Composable () -> Unit" },
        { "figma": "⤷ BadgeSlot", "swift": "badge: EBBadge?", "compose": "badge: @Composable (() -> Unit)?" },
        { "figma": "#header / #subheader", "swift": "merchant name / branch scope", "compose": "same" },
        { "figma": "#title / #description", "swift": "title / description: String", "compose": "title / description: String" },
        { "figma": "#price / #originalPrice", "swift": "amount + currency, formatted", "compose": "amount + currency, formatted" },
        { "figma": "#validity", "swift": "validity: DateInterval", "compose": "validity: ClosedRange<LocalDate>" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Long terms, collapsed",
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">,</span> layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.accordion</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> merchant<span class=\"syn-punc\">.</span>logoURL<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">,</span> layout <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Accordion</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>merchant<span class=\"syn-punc\">.</span>logoUrl<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Short terms, shown outright",
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    voucher<span class=\"syn-punc\">,</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.textBlock</span><span class=\"syn-punc\">,</span>\n    mechanicsURL<span class=\"syn-punc\">:</span> campaign<span class=\"syn-punc\">.</span>mechanics\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> merchant<span class=\"syn-punc\">.</span>logoURL<span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    voucher<span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">TextBlock</span><span class=\"syn-punc\">,</span>\n    mechanicsUrl <span class=\"syn-eq\">=</span> campaign<span class=\"syn-punc\">.</span>mechanics\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>merchant<span class=\"syn-punc\">.</span>logoUrl<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The offer summary reads as one unit",
        "ios": "Group merchant, title, price and validity with <code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code> on the Details frame"
      },
      {
        "requirement": "Collapsed terms are announced as collapsed",
        "ios": "The Accordion supplies <code>.isExpanded</code> and its own toggle label",
        "android": "<code>Role.Button</code> with <code>stateDescription</code> of expanded or collapsed"
      },
      {
        "requirement": "The mechanics link is a link",
        "ios": "<code>.accessibilityAddTraits(.isLink)</code>",
        "android": "<code>Role.Button</code> with a descriptive <code>onClickLabel</code>"
      },
      {
        "requirement": "The notched divider is decorative",
        "ios": "<code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Accordion when the terms run long enough to push the price off screen.",
        "dontText": "Don't collapse two lines of terms; the extra tap buys nothing."
      },
      {
        "doText": "Use TextBlock with a link out when the full mechanics live elsewhere.",
        "dontText": "Don't put the entire mechanics text in the block — that is what the link is for."
      },
      {
        "doText": "Let the merchant supply its own logo through the slot.",
        "dontText": "Don't detach the card to swap a logo."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Header</code> → <code>Details</code> → <code>strip</code> → <code>Body</code>, no duplicated names, text layers all prefixed." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Layout = Accordion | TextBlock</code> — PascalCase property, single-token values." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Surface, border, all six text roles and the badge are bound." },
      { "id": "C4", "criterion": "Native Mappability", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Maps to a card with a header, summary and body. The two layouts compose differently — one instances the Accordion, one draws its own block — which is intentional but needs documenting for a clean mapping." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Display only by design. The accordion header and the mechanics link own their own states." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The notched divider is a vector; the logo arrives through a slot. No rasters." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "One enum plus two slots and six text properties." },
      { "aspect": "Token coverage", "status": "ready", "statusLabel": "Ready", "notes": "All surfaces and text bound." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 2,
      "description": "1 Layout setting × 2 values. Everything above the notched divider is identical between them.",
      "columns": ["Layout", "Size", "Terms", "Node"],
      "rows": [
        { "cells": ["Accordion", "336 × 507", "DS Accordion instance, collapsible", "5450:32408"] },
        { "cells": ["TextBlock", "336 × 472", "Locally drawn block with a mechanics link", "5450:32877"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt as a component — node 5542:32287",
      "rows": [
        {
          "body": "<strong>Product Layer verdict overturned.</strong> The old assessment ruled this a screen — one 336×704 symbol with no variants. The redesign into a 336-wide card with a real setting was deliberate.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C2 — visibility booleans became one setting.</strong> <code>Layout = Accordion | TextBlock</code> makes the two terms paths mutually exclusive; previously both could render.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C6 — the notched divider is a vector</strong>, replacing a raster image fill.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C1 — logo and badge became real slots</strong>: <code>⤷ LogoSlot</code> and <code>⤷ BadgeSlot</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — duplicate layer names cleared.</strong> Two frames named <code>Content</code> became <code>Details</code> and <code>Body</code>; the two <code>#title</code> layers became <code>#header</code> / <code>#subheader</code> and <code>#title</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — price aligned with <a href=\"/components/voucher\">Voucher</a></strong>: <code>#price</code> and <code>#originalPrice</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "The two layouts compose differently — Accordion instances the DS component, TextBlock draws its own block. Confirmed intentional.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    }
  ]
};
