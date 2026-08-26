import type { ComponentData, DemoControlSection } from '../types';

const voucherControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'AssetSize',
        prop: 'size',
        defaultValue: 'small',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'large', label: 'Large' }
        ]
      },
      {
        label: 'Orientation',
        prop: 'orientation',
        defaultValue: 'vertical',
        options: [
          { value: 'vertical', label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' }
        ]
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'used', label: 'Used' },
          { value: 'expired', label: 'Expired' }
        ]
      }
    ]
  }
];

export const voucher: ComponentData = {
  "meta": {
    "slug": "voucher",
    "name": "Voucher",
    "node": "5372:38309",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5372-38309",
    "description": "The voucher card, in the two shapes the app uses — a portrait tile for grids and a landscape row for lists — across the three states a voucher can be in.",
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
      "title": "Keep — four components collapsed into one",
      "text": "All four DS Health traits pass. <code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and <code>Voucher Asset</code> are gone; all four are now settings on this one component. <code>AssetSize</code>, <code>Orientation</code> and <code>State</code> each carry one meaning, and the artwork, status badge and discount badge are real slots instead of baked artwork with frozen strings. The two orientations are laid out differently on purpose — they are not the same card rotated."
    }
  },
  "overview": {
    "inContextNote": "Vertical fills the voucher grid on Discover and in campaign carousels, where cards sit side by side. Horizontal fills the list on My Vouchers, where each row needs room for a description and its own claim action.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vch-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">AssetSize</span><select id=\"vch-ctrl-size\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"small\" selected=\"\">Small</option><option value=\"large\">Large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Orientation</span><select id=\"vch-ctrl-orientation\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"vch-ctrl-state\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"used\">Used</option><option value=\"expired\">Expired</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"vch-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Buy Load Pre-seeded SKU Voucher Sample\" oninput=\"_vchUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#price</span><input type=\"text\" id=\"vch-ctrl-price\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 100.00\" oninput=\"_vchUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One component covers the grid tile and the list row. Artwork, status badge and discount badge all arrive through slots, so a campaign supplies its own without touching the component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, ticket notch, type styles and all three states. The notch is a real vector — a rectangle with two circles subtracted — rather than the raster mask the old cards used."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both orientations use the same vocabulary: <code>Content</code> → <code>Details</code>, <code>Price Container</code>, and <code>⤷ AssetSlot</code> / <code>⤷ BadgeSlot</code> for the swappable parts. Text layers are <code>#title</code>, <code>#description</code>, <code>#price</code>, <code>#originalPrice</code> and <code>#validity</code> in both."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Takes a Badge instance in both badge slots and any artwork in the asset slot. Sits in grids, lists and carousels without a wrapper."
      }
    ],
    "behavior": [
      {
        "state": "Orientation=Vertical",
        "ios": "na",
        "android": "na",
        "property": "162 wide",
        "notes": "Artwork on top, then badge, title, description, price, validity. Carries the discount badge."
      },
      {
        "state": "Orientation=Horizontal",
        "ios": "na",
        "android": "na",
        "property": "312 / 344 wide",
        "notes": "Text on the left, artwork on the right with a fixed claim rail. No discount badge — there is no room for it."
      },
      {
        "state": "AssetSize=Small",
        "ios": "na",
        "android": "na",
        "property": "162 × 278 · 312 × 124",
        "notes": "The default for both orientations."
      },
      {
        "state": "AssetSize=Large",
        "ios": "na",
        "android": "na",
        "property": "162 × 341 · 344 × 124",
        "notes": "Taller artwork on vertical; a wider card on horizontal."
      },
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "claimable",
        "notes": "Full colour. The badge reads the offer status, e.g. \"Limited\"."
      },
      {
        "state": "State=Used",
        "ios": "na",
        "android": "na",
        "property": "dimmed",
        "notes": "A <code>#020E22</code> overlay at 56% darkens the artwork; the card stays legible."
      },
      {
        "state": "State=Expired",
        "ios": "na",
        "android": "na",
        "property": "washed out",
        "notes": "A flat <code>#C2CFE5</code> overlay replaces the artwork and the text recedes."
      }
    ],
    "resolved": [
      {
        "headline": "Four components became one.",
        "body": "<code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and <code>Voucher Asset</code> all described the same card. They are now <code>AssetSize</code>, <code>Orientation</code> and <code>State</code> on a single 12-version component, which is what stopped four near-identical cards from drifting apart.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The card has states at all.",
        "body": "Two of the old components had no state axis, so a used or expired voucher had to be drawn by hand. <code>State = Default | Used | Expired</code> covers it in every orientation and size, and there is a neutral default for the first time.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Content is no longer frozen.",
        "body": "Every string used to be hardcoded placeholder text, and the badges were fixed to whatever state the version represented. Title, description, price, original price and validity are all text layers now, and the badges are slots that take any Badge instance.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The discount is a slot, not baked artwork.",
        "body": "\"35% off\" used to be burned into the image frame, so changing it meant editing artwork. It is now <code>⤷ DiscountSlot</code> holding a Badge.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Artwork arrives through a real slot.",
        "body": "The asset was a raster photograph with a partner wordmark burned in, and the frame that held it was an ordinary layer named to look like a slot. <code>⤷ AssetSlot</code> is now a genuine Figma slot, so artwork swaps without detaching.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The ticket notch is a vector.",
        "body": "It was a raster mask that could not resize or recolour. It is now <code>Stub Cutout</code> — a rectangle with two circles subtracted — so it scales with the card and takes the state colours.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The claim action is a real Button.",
        "body": "\"GET VOUCHER\" was rotated text pretending to be a control. It is a <code>Button - XSmall</code> instance in the horizontal card's action rail.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The settings can map one to one.",
        "body": "The old cards exposed six to eight independent booleans plus a four-value enum, a shape no native component matches. Three orthogonal enums, complete at twelve of twelve, map directly onto native parameters.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Names follow the system.",
        "body": "<code>Asset Size</code> became <code>AssetSize</code>; <code>DIscount Slot</code> lost its stray capital and became <code>⤷ DiscountSlot</code>; <code>blurb</code> became <code>#validity</code> and <code>title</code> became <code>#title</code>; <code>Subtract</code> became <code>Stub Cutout</code>; and the lowercase <code>content</code> / <code>container</code> / <code>price</code> frames are now <code>Content</code>, <code>Container</code> and <code>Price Container</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Price is one string per value.",
        "body": "The current price was split into <code>#unit</code> and <code>#value</code> while the original price was already a single string — and both were called <code>#value</code>, so nothing downstream could tell them apart. They are now <code>#price</code> and <code>#originalPrice</code>, which also lets the platform format currency for the locale rather than assuming symbol-then-number.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Rename the Filter overlay's shape to match the asset's.",
        "body": "The <code>Stub Cutout</code> rename reached the asset panel but not the <code>Filter</code> frames used by Used and Expired, where the same shape is still called <code>Subtract</code> — the Figma operation rather than what it draws. Small, and the last of that rename to land.",
        "tag": "Rename"
      },
      {
        "headline": "Let the platform format the price.",
        "body": "Pass an amount and a currency code, not a preformatted string. <code>NumberFormatter</code> with <code>.currency</code> on iOS and <code>NumberFormat.getCurrencyInstance(locale)</code> on Android both place the symbol, separator and grouping correctly for the user's locale.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the card as one element with its state.",
        "body": "Title, price, original price, validity and badge read separately is five fragments. Group them, include the saving rather than making the user compare two numbers, and put the state in the label so \"Used\" and \"Expired\" are not carried by dimming alone.",
        "tag": "A11y"
      },
      {
        "headline": "Document what Used and Expired mean for interaction.",
        "body": "Both dim the card, but a used voucher may still open its details while an expired one may not. The design does not say which, and the difference matters for whether the card stays tappable.",
        "tag": "Docs"
      },
      {
        "headline": "Retire the four superseded components in Figma.",
        "body": "Once usages are migrated, delete <code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and the standalone <code>Voucher Asset</code>. Their assessments are kept on this site as the record of what drove the consolidation.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Orientations",
    "description": "Two shapes, deliberately built differently. Vertical stacks artwork over content and carries a discount badge; horizontal sets content beside artwork and carries a claim rail.",
    "specCards": [
      {
        "cardKey": "vch-spec-card-voucher",
        "demoKey": "voucher",
        "demoControls": voucherControls,
        "title": "Voucher",
        "node": "5372:38309",
        "description": "AssetSize changes the artwork panel, Orientation changes the whole layout, State changes the overlay and the text treatment.",
        "previewHtml": "<div id=\"vch-spec-voucher\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "AssetSize", "value": "Small", "prop": "size" },
              { "key": "Orientation", "value": "Vertical", "prop": "orientation" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "⤷ AssetSlot", "value": "artwork" },
              { "key": "⤷ BadgeSlot", "value": "status badge" },
              { "key": "⤷ DiscountSlot", "value": "discount badge", "variants": { "orientation:horizontal": { "value": "— vertical only" } } },
              { "key": "Versions", "value": "12" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Asset panel", "value": "#F6F9FD", "token": "bg/color-bg-subtle", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "#description", "value": "#445C85", "token": "text/color-text-body", "swatch": true },
              { "key": "#price", "value": "#005CE5", "token": "text/color-text-link", "swatch": true },
              { "key": "#originalPrice", "value": "#C2CFE5", "token": "text/color-text-weakest", "swatch": true },
              { "key": "Used overlay", "value": "#020E22 @ 56%", "token": "main/voucher/used/overlay", "swatch": true },
              { "key": "Expired overlay", "value": "#C2CFE5", "token": "main/voucher/expired/overlay", "swatch": true },
              { "key": "Claim rail", "value": "#0A2757", "token": "main/voucher/action/bg", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "162 × 278", "mono": true, "variants": { "orientation:horizontal": { "value": "312 × 124" }, "size:large": { "value": "162 × 341" }, "orientation:horizontal|size:large": { "value": "344 × 124" } } },
              { "key": "Asset panel", "value": "162 × 90", "mono": true, "variants": { "orientation:horizontal": { "value": "96 × 124" }, "size:large": { "value": "162 × 153" } } },
              { "key": "Corner radius", "value": "4", "mono": true },
              { "key": "Notch", "value": "two 16px circles subtracted", "mono": true },
              { "key": "Claim rail", "value": "— vertical has none", "mono": true, "variants": { "orientation:horizontal": { "value": "28 wide, full height" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Proxima Soft Bold · 16 / 20 · +0.25", "mono": true },
              { "key": "#description", "value": "BarkAda Medium · 10 / 15 · 0", "mono": true },
              { "key": "#price", "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true },
              { "key": "#originalPrice", "value": "BarkAda Medium · 12 / 18, struck", "mono": true },
              { "key": "#validity", "value": "BarkAda Medium · 8 / 12 · 0", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    voucher<span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span><span class=\"syn-punc\">,</span>\n    assetSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.small</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">.</span>artwork<span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    voucher <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">Orientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span><span class=\"syn-punc\">,</span>\n    assetSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AssetSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Small</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">.</span>artwork<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>"
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
        { "figma": "AssetSize", "swift": "AssetSize (.small / .large)", "compose": "assetSize: AssetSize" },
        { "figma": "Orientation", "swift": "Orientation (.vertical / .horizontal)", "compose": "orientation: Orientation" },
        { "figma": "State", "swift": "derived from the voucher's status", "compose": "derived from status" },
        { "figma": "⤷ AssetSlot", "swift": "@ViewBuilder artwork", "compose": "artwork: @Composable () -> Unit" },
        { "figma": "⤷ BadgeSlot", "swift": "badge: EBBadge?", "compose": "badge: @Composable (() -> Unit)?" },
        { "figma": "⤷ DiscountSlot", "swift": "discount: EBBadge? — vertical only", "compose": "discount — vertical only" },
        { "figma": "#title / #description", "swift": "title / description: String", "compose": "title / description: String" },
        { "figma": "#price / #originalPrice", "swift": "amount + currency, formatted", "compose": "amount + currency, formatted" },
        { "figma": "#validity", "swift": "validity: DateInterval", "compose": "validity: ClosedRange<LocalDate>" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A grid of vouchers",
        "swift": "<span class=\"syn-type\">LazyVGrid</span><span class=\"syn-punc\">(</span>columns<span class=\"syn-punc\">:</span> two<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>vouchers<span class=\"syn-punc\">) {</span> v <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>v<span class=\"syn-punc\">,</span> orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>v<span class=\"syn-punc\">.</span>artwork<span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">LazyVerticalGrid</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">GridCells</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">Fixed</span><span class=\"syn-punc\">(</span><span class=\"syn-num\">2</span><span class=\"syn-punc\">)) {</span>\n    items<span class=\"syn-punc\">(</span>vouchers<span class=\"syn-punc\">) {</span> v <span class=\"syn-eq\">-&gt;</span>\n        <span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>v<span class=\"syn-punc\">,</span> orientation <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Vertical</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>v<span class=\"syn-punc\">.</span>artwork<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "A list row with its claim action",
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    voucher<span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span><span class=\"syn-punc\">,</span>\n    onClaim<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> claim<span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">.</span>artwork<span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    voucher <span class=\"syn-eq\">=</span> voucher<span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Horizontal</span><span class=\"syn-punc\">,</span>\n    onClaim <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-fn\">claim</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">.</span>artwork<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>"
      },
      {
        "subheading": "A used voucher",
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">)</span>  <span class=\"syn-cmt\">// State follows voucher.status</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>voucher<span class=\"syn-punc\">)</span>  <span class=\"syn-cmt\">// State follows voucher.status</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The card is one element",
        "ios": "<code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code>"
      },
      {
        "requirement": "State is spoken, not only dimmed",
        "ios": "Append \"Used\" or \"Expired\" to the label",
        "android": "<code>stateDescription</code> carries it"
      },
      {
        "requirement": "The saving is stated",
        "ios": "\"PHP 100, reduced from PHP 150\" rather than two bare numbers",
        "android": "Same, built into <code>contentDescription</code>"
      },
      {
        "requirement": "Artwork is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> on the image",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Vertical in grids and carousels, Horizontal in lists where each row needs a description.",
        "dontText": "Don't put Horizontal in a two-column grid; at 312 wide it will not fit."
      },
      {
        "doText": "Let State follow the voucher's own status.",
        "dontText": "Don't set State by hand — an expired voucher showing as claimable is worse than no card."
      },
      {
        "doText": "Supply artwork through the asset slot.",
        "dontText": "Don't burn the discount or the partner logo into the image; both have their own slots."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "Both orientations use one vocabulary. Text layers all carry the <code>#</code> prefix and no name is used twice." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>AssetSize</code>, <code>Orientation</code> and <code>State</code> — three orthogonal enums, complete at 12 of 12." },
      { "id": "C3", "criterion": "Token Coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "Surfaces and text are bound. A <code>main/voucher/*</code> namespace is still worth proposing for the two state overlays and the claim rail." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "Three enums plus slots map directly. The claim action is a real Button instance rather than rotated text." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Default, Used and Expired across every orientation and size. Pressed belongs to the host list or the claim button." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The notch is a vector subtract; artwork and both badges are slots. No raster masks or burned-in strings." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "Three enums and three slots, all one to one." },
      { "aspect": "Token coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "State overlays need their own namespace before mapping." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 12,
      "description": "2 AssetSize × 2 Orientation × 3 State = 12 versions, complete with no gaps.",
      "columns": ["Orientation", "AssetSize", "Size", "States"],
      "summary": {
        "columns": ["Orientation", "AssetSize", "Card size", "Count"],
        "rows": [
          { "cells": ["Vertical", "Small", "162 × 278", "3"] },
          { "cells": ["Vertical", "Large", "162 × 341", "3"] },
          { "cells": ["Horizontal", "Small", "312 × 124", "3"] },
          { "cells": ["Horizontal", "Large", "344 × 124", "3"] }
        ]
      },
      "collapseLabel": "View full Orientation × AssetSize × State breakdown (12 rows)",
      "rows": [
        { "cells": ["Vertical", "Small", "162 × 278", "Default · Used · Expired"] },
        { "cells": ["Vertical", "Large", "162 × 341", "Default · Used · Expired"] },
        { "cells": ["Horizontal", "Small", "312 × 124", "Default · Used · Expired"] },
        { "cells": ["Horizontal", "Large", "344 × 124", "Default · Used · Expired"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Consolidated rebuild — node 5372:38309",
      "rows": [
        {
          "body": "<strong>Four components became one.</strong> <code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and <code>Voucher Asset</code> fold into <code>AssetSize</code> × <code>Orientation</code> × <code>State</code>.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C5 — a state axis exists.</strong> Two of the old components had none; Used and Expired had to be drawn by hand.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C1 — content unfrozen.</strong> Every string was hardcoded placeholder; all are now text layers, and both badges are slots.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C6 — rasters replaced.</strong> The ticket notch is a vector subtract, the artwork arrives through a real slot, and the \"35% off\" burned into the image is now a Badge in <code>⤷ DiscountSlot</code>.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C4 — \"GET VOUCHER\" is a Button.</strong> It was rotated text with no control behind it.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>C2 — naming aligned:</strong> <code>AssetSize</code>, <code>⤷ AssetSlot</code>, <code>⤷ BadgeSlot</code>, <code>⤷ DiscountSlot</code>, <code>Stub Cutout</code>, <code>#title</code>, <code>#validity</code>, and <code>Content</code> / <code>Container</code> / <code>Price Container</code> in PascalCase.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — price split resolved.</strong> <code>#unit</code> + <code>#value</code> and a second <code>#value</code> became <code>#price</code> and <code>#originalPrice</code>, clearing a duplicate-name collision and letting the platform format currency.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The Filter overlay's shape is still called <code>Subtract</code></strong> — the last of the <code>Stub Cutout</code> rename to land.",
          "delta": { "kind": "open", "label": "Rename" }
        }
      ]
    }
  ]
};
