import type { ComponentData, DemoControlSection } from '../types';

const carouselDiscountCardDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'default' },
          { value: 'with-violator', label: 'with violator' },
          { value: 'skeleton', label: 'skeleton loader' },
        ],
      },
    ],
  },
];

export const carouselDiscountCard: ComponentData = {
  "meta": {
    "slug": "carousel-discount-card",
    "name": "Carousel - Discount Card",
    "node": "18543:2761",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18543-2761",
    "description": "A discount-themed card variant inside a horizontally scrolling carousel — hero image, percent-off badge, and label.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Carousel",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — fold into Carousel Card with <code>variant=discount</code>",
      "text": "Same 140-wide frame, same banner + text block composition, same skeleton axis. The only net-new capabilities are (a) a trailing-corner violator tag and (b) a two-line label slot with a peso-value line below. Both belong as optional slots on a unified <code>Carousel Card</code> rather than a separate component. Today's 3 variants collapse into <code>Carousel Card</code> props: <code>variant: default | with-icon | discount</code>, <code>violator?: string</code>, <code>isLoading: bool</code>."
    }
  },
  "overview": {
    "inContextNote": "Discount Card appears in horizontally-scrolling voucher rails — GDeals, Voucher Pocket, \"For You\" promotions. Violator tag calls out freshness (New, Ending Soon, Limited).",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cdcard-demo-preview\"><div class=\"eb-preview eb-preview-cdcard\"><div class=\"eb-preview-cdcard__banner\"><div class=\"eb-preview-cdcard__banner-img\"></div><svg class=\"eb-preview-cdcard__perforate\" viewBox=\"0 0 120 4\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M0,2 C2,4 4,4 6,2 C8,0 10,0 12,2 C14,4 16,4 18,2 C20,0 22,0 24,2 C26,4 28,4 30,2 C32,0 34,0 36,2 C38,4 40,4 42,2 C44,0 46,0 48,2 C50,4 52,4 54,2 C56,0 58,0 60,2 C62,4 64,4 66,2 C68,0 70,0 72,2 C74,4 76,4 78,2 C80,0 82,0 84,2 C86,4 88,4 90,2 C92,0 94,0 96,2 C98,4 100,4 102,2 C104,0 106,0 108,2 C110,4 112,4 114,2 C116,0 118,0 120,2 L120,4 L0,4 Z\" fill=\"#FFFFFF\"></path></svg></div><div class=\"eb-preview-cdcard__content\"><p class=\"eb-preview-cdcard__label\">Add label here<br>Add label here</p><p class=\"eb-preview-cdcard__value\">PHP 200.00</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label line 1</span><input type=\"text\" id=\"cdcard-ctrl-label1\" class=\"demo-panel-select demo-panel-input\" value=\"Add label here\" oninput=\"_cdcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label line 2</span><input type=\"text\" id=\"cdcard-ctrl-label2\" class=\"demo-panel-select demo-panel-input\" value=\"Add label here\" oninput=\"_cdcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><input type=\"text\" id=\"cdcard-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 200.00\" oninput=\"_cdcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">violator</span><input type=\"text\" id=\"cdcard-ctrl-violator\" class=\"demo-panel-select demo-panel-input\" value=\"New\" oninput=\"_cdcardUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"cdcard-ctrl-type\" class=\"demo-panel-select\" onchange=\"_cdcardUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"with-violator\">with violator</option><option value=\"skeleton\">skeleton loader</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Perforate edge is baked into the banner image — ties the card to voucher contexts. A generic carousel card should accept any banner and only show the perforate when it's actually a voucher."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Banner image, perforate edge, and placeholder asset are raster PNGs stitched via mask layers. Violator text is hardcoded \"New\". No token governance over banner/violator colors per state."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Anatomy duplicates <a href=\"#\" onclick=\"showPanelById('carousel-card');return false;\">Carousel Card</a> (140-wide banner + text + skeleton). Shipping as a separate component splits a single concept across two files with independent token collections."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Violator placement is an absolute-positioned overlay — works, but should be a named slot. Hidden <code>_space_12</code> layer acts as a 12 px spacer via an invisible rectangle rather than a gap token."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type=default",
        "notes": "Banner + perforate + label + value. No violator."
      },
      {
        "state": "With violator",
        "ios": "yes",
        "android": "yes",
        "property": "type=with violator",
        "notes": "Same layout with a blue tag anchored to the banner's top-right corner. Text is hardcoded \"New\"."
      },
      {
        "state": "Skeleton (loading)",
        "ios": "yes",
        "android": "yes",
        "property": "type=skeleton loader",
        "notes": "Flat 140 × 152 placeholder fill for the banner; rounded rectangles for title (27 h) and amount (10 h × 101 w)."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Cards tap through to voucher detail — needs a pressed state (subtle dim or scale) for feedback."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Duplicates Carousel Card's anatomy.",
        "body": "Same 140-wide frame, same banner + text + skeleton composition. Ships as a second component with its own variants and tokens instead of a <code>variant=discount</code> on the shared card.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>type</code> conflates layout and state.",
        "body": "<code>default</code> and <code>with violator</code> are layout variants; <code>skeleton loader</code> is a loading state. Packing them on one enum forces mutually-exclusive combinations that shouldn't be — a violator card can also be loading.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Violator label hardcoded.",
        "body": "The \"New\" string is baked into the variant — consumers can't show \"Ending Soon\", \"Limited\", or localized copy without detaching.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Perforated voucher edge baked into the banner image.",
        "body": "The serrated bottom is part of a raster PNG, not a vector overlay. Ties every \"discount card\" to voucher visuals even when the use case is a plain promo card.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Banner is a raster PNG with mask layers.",
        "body": "<code>replace-this-asset</code> + mask intersect + overflow-clip is fragile on native (iOS <code>AsyncImage</code> / Compose <code>AsyncImage</code> don't need any of that). Also blocks the image from being sized/cropped consistently.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "<code>_space_12</code> invisible rectangle used as a spacer.",
        "body": "A 10.305 px tall <code>#0500ff</code> rectangle with <code>opacity:0</code> sits between label and value as a spacing hack. Should be a <code>gap</code> / <code>space-*</code> token on the auto-layout.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No pressed state.",
        "body": "Card is tappable (opens voucher detail) but no pressed/active appearance is modeled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the consolidation into Carousel Card is decided.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate into Carousel Card with <code>variant=discount</code>.",
        "body": "The entire Carousel family (Carousel Card, Carousel - Discount Card, Carousel - Item, Carousel Item - Center, Carousel Item - Side) shares a 140-wide frame and banner + text + skeleton composition. Merge the three \"card\" siblings into one <code>Carousel Card</code> with <code>variant: default | with-icon | discount</code>. Preserves every existing layout; eliminates redundant components.",
        "tag": "Family"
      },
      {
        "headline": "Split <code>type</code> into independent props.",
        "body": "On the consolidated <code>Carousel Card</code>: <code>variant: default | with-icon | discount</code> (layout), <code>violator?: string</code> (optional slot — any text, any variant), <code>isLoading: bool</code> (orthogonal state). 3 × 2 × 2 visual cases from 3 clean props instead of conflated enums.",
        "tag": "Property"
      },
      {
        "headline": "Make the violator a named slot.",
        "body": "Adopt Figma Slots for the top-right corner overlay. Accepts Badge instance or custom text — maps to <code>@ViewBuilder</code> (SwiftUI) / <code>@Composable</code> slot (Compose) via Code Connect.",
        "tag": "Slot"
      },
      {
        "headline": "Replace the perforate edge with a vector overlay.",
        "body": "Today it's baked into the banner raster. Extract as a vector SVG rendered on top of the banner when <code>variant=discount</code>. Token-bindable fill + crisp at any scale.",
        "tag": "Asset"
      },
      {
        "headline": "Remove the <code>_space_12</code> placeholder rectangle.",
        "body": "Use <code>gap: 12</code> on the content auto-layout frame instead. Invisible elements used as spacers are a C1 anti-pattern — they clutter the layer tree and break native handoff.",
        "tag": "Property"
      },
      {
        "headline": "Rename the value slot to match Figma's token.",
        "body": "The peso amount binds to <code>main/carousel/color/value</code> but renders as a standalone text. Expose as <code>amount: String</code> on the proposed Carousel Card so Code Connect can target it directly.",
        "tag": "Rename"
      },
      {
        "headline": "Add a pressed state on the consolidated card.",
        "body": "Subtle scale (0.98) or overlay tint when tapped. One state that covers all three variants on the merged component.",
        "tag": "State"
      },
      {
        "headline": "Banner should accept an Image instance, not a mask layer.",
        "body": "Replace the <code>Asset Placeholder</code> + <code>replace-this-asset</code> + mask stack with a single image-fill slot on the banner frame. Cleaner handoff to <code>AsyncImage</code> on both platforms.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": carouselDiscountCardDemoControls,
        "title": "Default",
        "node": "18543:2762",
        "description": "Voucher card with perforated banner image, two-line label, and peso-value line.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cdcard-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "default", "prop": "type" },
              { "key": "Variant", "value": "Discount card" },
              { "key": "Layout", "value": "image-left + label-right" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#0A2757", "token": "carousel/color/label" },
              { "key": "Discount", "value": "#2340A9", "token": "carousel/color/value" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Inverse text", "value": "#FFFFFF", "token": "text/color-text-inverse" },
              { "key": "Active dot", "value": "#005CE5", "token": "bg/color-bg-primary" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width × Height", "value": "140 × 223.48px", "mono": true },
              { "key": "Banner size", "value": "140 × 152px", "mono": true },
              { "key": "Content padding", "value": "6.87 / 10.305px", "mono": true },
              { "key": "Corner radius", "value": "4px", "mono": true },
              { "key": "Drop shadow", "value": "0 1 3 0 rgba(232,238,242,.79)", "mono": true },
              { "key": "Perforate edge", "value": "bottom 43.8 · raster PNG", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Multi-line Label/Small", "mono": true },
              { "key": "Label font", "value": "Proxima Soft Bold · 14 / 16 · +0.25", "mono": true },
              { "key": "Value style", "value": "Primary/Label/Fine", "mono": true },
              { "key": "Value font", "value": "Proxima Soft Bold · 12 / 12 · +0.5", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDiscountCard</span><span class=\"syn-punc\">(</span>discount<span class=\"syn-punc\">: </span>item<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebHeroImage</span><span class=\"syn-punc\">(</span>item.image<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPercentBadge</span><span class=\"syn-punc\">(</span>item.percent<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDiscountCard</span><span class=\"syn-punc\">(</span>\n    heroImage <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>item.image<span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    percent <span class=\"syn-eq\">=</span> item.percent<span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> item.label\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-violator",
        "demoKey": "with-violator",
        "demoControls": carouselDiscountCardDemoControls,
        "title": "With violator",
        "node": "18543:2770",
        "description": "Adds a blue violator tag anchored to the banner's top-right corner. Text is hardcoded \"New\" today — should be a parameterized slot.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cdcard-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "with-violator", "prop": "type" },
              { "key": "Has violator", "value": "Yes" },
              { "key": "Discount label", "value": "50% OFF" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/discount-card/bg" },
              { "key": "Violator bg", "value": "#D81E1E", "token": "main/discount-card/violator/bg" },
              { "key": "Violator label", "value": "#FFFFFF", "token": "main/discount-card/violator/label" },
              { "key": "Title", "value": "#0A2757", "token": "main/discount-card/title" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "180px", "mono": true },
              { "key": "Height", "value": "220px", "mono": true },
              { "key": "Image area", "value": "180 × 110px", "mono": true },
              { "key": "Body padding", "value": "12px", "mono": true },
              { "key": "Violator height", "value": "20px", "mono": true },
              { "key": "Violator padding (H)", "value": "8px", "mono": true },
              { "key": "Corner radius", "value": "12px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Violator style", "value": "Caption/Bold", "mono": true },
              { "key": "Title style", "value": "Body/Medium · Bold", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDiscountCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Cinema voucher\"</span><span class=\"syn-punc\">,</span>\n    image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"cinema\"</span><span class=\"syn-punc\">),</span>\n    violator<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"50% OFF\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDiscountCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Cinema voucher\"</span><span class=\"syn-punc\">,</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>cinema<span class=\"syn-punc\">,</span>\n    violator <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"50% OFF\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "skeleton-loader",
        "demoKey": "skeleton-loader",
        "demoControls": carouselDiscountCardDemoControls,
        "title": "Skeleton loader",
        "node": "18543:2782",
        "description": "Loading pattern: flat banner fill, rounded title rectangle, shorter amount rectangle. Centered column (differs from the left-aligned default).",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cdcard-spec-3\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "skeleton", "prop": "type" },
              { "key": "State", "value": "Loading" },
              { "key": "Has content", "value": "No" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Skeleton bg", "value": "#EEF2F9", "token": "main/skeleton/bg" },
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/discount-card/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "180px", "mono": true },
              { "key": "Height", "value": "220px", "mono": true },
              { "key": "Image placeholder", "value": "180 × 110px", "mono": true },
              { "key": "Title bar", "value": "120 × 12px", "mono": true },
              { "key": "Subtitle bar", "value": "80 × 8px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "—", "value": "No text in skeleton state" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDiscountCard</span><span class=\"syn-punc\">(</span>isLoading<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDiscountCard</span><span class=\"syn-punc\">(</span>\n    isLoading <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>type=default</code>",
          "swift": "<code>variant: discount</code>",
          "compose": "<code>.ebVariant(.discount)</code>"
        },
        {
          "figma": "<code>type=with violator</code>",
          "swift": "<code>violator?: String</code> (slot)",
          "compose": "<code>violator: String?</code> / <code>violatorSlot: (()-&gt;Badge)?</code>"
        },
        {
          "figma": "<code>type=skeleton loader</code>",
          "swift": "<code>isLoading: Bool</code>",
          "compose": "<code>loading: Bool</code>"
        },
        {
          "figma": "(hardcoded 2-line label)",
          "swift": "<code>label: String</code> (2-line auto-wrap)",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "(hardcoded \"PHP 200.00\")",
          "swift": "<code>amount: String</code>",
          "compose": "<code>amount: String</code>"
        },
        {
          "figma": "(mask + raster asset)",
          "swift": "<code>banner: Image</code> (slot)",
          "compose": "<code>banner: Image</code>"
        },
        {
          "figma": "(baked perforate PNG)",
          "swift": "(auto-rendered vector when <code>variant=discount</code>)",
          "compose": "—"
        },
        {
          "figma": "(<code>_space_12</code> invisible rect)",
          "swift": "(auto-layout gap token)",
          "compose": "—"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap?: () -&gt; Void</code>",
          "compose": "<code>onTap: (() -&gt; Void)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Card as a button",
        "ios": "Wrap in <code>Button</code>; <code>accessibilityLabel</code> combines violator + label + amount.",
        "android": "<code>Modifier.clickable { onTap() }.semantics(mergeDescendants = true)</code> on the card."
      },
      {
        "requirement": "Combined announcement",
        "ios": "\"New, 2% off GCrypto Bitcoin purchase, PHP 200.00\"",
        "android": "Same reading order via TalkBack."
      },
      {
        "requirement": "Loading state",
        "ios": "Announce \"Loading voucher\" once on mount; suppress placeholder reads.",
        "android": "<code>contentDescription = \"Loading voucher\"</code> on the skeleton container."
      },
      {
        "requirement": "Min touch target",
        "ios": "223 pt card height ≫ 44 pt ✓",
        "android": "223 dp ≫ 48 dp ✓"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>_space_12</code> invisible rectangle acts as a spacer; <code>Asset Placeholder</code> + <code>replace-this-asset</code> leak authoring affordances."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>type</code> conflates layout and loading state; violator text hardcoded."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/carousel/color/*</code>, <code>bg/*</code>, <code>text/*</code>. Typography via <code>Primary/Multi-line Label/Small</code> + <code>Primary/Label/Fine</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Perforate edge baked into the banner raster; mask-intersect image composition doesn't translate cleanly to AsyncImage."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default + skeleton built. Missing pressed for a tappable card."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Banner + perforate ship as raster PNGs."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until consolidation into Carousel Card is decided."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "<code>type</code> (3) = <strong>3 variants</strong>. Single-axis enum conflates layout (<code>default</code>, <code>with violator</code>) with loading state (<code>skeleton loader</code>) — should split into <code>variant</code> + <code>violator?</code> + <code>isLoading</code> on consolidation.",
      "columns": [
        "type",
        "Node",
        "Dimensions",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "<strong>default</strong>",
            "<code>18543:2762</code>",
            "140 × 223.48",
            "Banner + label + value. Left-aligned."
          ]
        },
        {
          "cells": [
            "<strong>with violator</strong>",
            "<code>18543:2770</code>",
            "140 × 223.48",
            "Adds blue \"New\" tag top-right of banner."
          ]
        },
        {
          "cells": [
            "<strong>skeleton loader</strong>",
            "<code>18543:2782</code>",
            "140 × 211",
            "Flat banner fill + 2 rounded rect placeholders. Centered column."
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18543:2761",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Fold into Carousel Card with <code>variant=discount</code> + <code>violator?</code> slot + <code>isLoading</code>. Anatomy duplicates Carousel Card. <span class=\"tag-open tag-c1 tag-c2 tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — <code>_space_12</code> invisible spacer</strong> — Replace with <code>gap: 12</code> on auto-layout. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — <code>type</code> conflates layout + state</strong> — Split into <code>variant</code>, <code>violator?</code>, <code>isLoading</code> on consolidated Carousel Card. Parameterize violator text. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Perforate edge baked into banner raster</strong> — Extract as vector overlay. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Missing pressed state</strong> — Tappable card with no press feedback. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster banner + perforate</strong> — Replace with image slot + vector overlay. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until consolidation decision. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
