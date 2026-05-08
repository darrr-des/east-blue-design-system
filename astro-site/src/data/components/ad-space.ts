import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/ad-space.js`.
const adSpaceBannerControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'banner-sm',
        options: [
          { value: 'banner-sm',   label: 'banner-sm · 320×50' },
          { value: 'banner-lg',   label: 'banner-lg · 320×100' },
          { value: 'banner-mrec', label: 'banner-mrec · 300×250' },
        ],
      },
      {
        label: 'isLoading',
        prop: 'loading',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true',  label: 'true' },
        ],
      },
    ],
  },
];

const adSpacePromoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'promo-md',
        options: [
          { value: 'promo-sm', label: 'promo-sm · 131×126' },
          { value: 'promo-md', label: 'promo-md · 224×200' },
        ],
      },
      {
        label: 'isLoading',
        prop: 'loading',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true',  label: 'true' },
        ],
      },
    ],
  },
];

const adSpaceHeroControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'hero-md',
        options: [
          { value: 'hero-sm', label: 'hero-sm · 296×174' },
          { value: 'hero-md', label: 'hero-md · 336×174' },
        ],
      },
      {
        label: 'isLoading',
        prop: 'loading',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true',  label: 'true' },
        ],
      },
    ],
  },
];

export const adSpace: ComponentData = {
  "meta": {
    "slug": "ad-space",
    "name": "Ad Space",
    "node": "18563:9789",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18563-9789",
    "description": "A canonical surface for ads, promos, and sponsored placements — supports banner, promo, and hero size families with a single content slot.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"6\" width=\"26\" height=\"8\" rx=\"1.5\" fill=\"#005CE5\"/>\n      <text x=\"16\" y=\"12\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Ad</text>\n      <rect x=\"3\" y=\"17\" width=\"12\" height=\"9\" rx=\"1.5\" fill=\"#E6E1EF\"/>\n      <rect x=\"17\" y=\"17\" width=\"12\" height=\"9\" rx=\"1.5\" fill=\"#EEF2F9\"/>\n    </svg>"
  },
  "overview": {
    "inContextNote": "Each of the three size families has a canonical home in the app: banners inline within transaction flows, promos on the dashboard tile grid, and heroes full-width on home or category surfaces.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ads-demo-preview\"><div class=\"eb-preview-adspace eb-preview-adspace--promo eb-preview-adspace--promo-md\" style=\"width:224px;height:200px;\"><div class=\"eb-preview-adspace__image\"><span class=\"eb-preview-adspace__image-label\">Replace me · 224×200</span></div><div class=\"eb-preview-adspace__caption eb-preview-adspace__caption--below\">Offer title</div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select id=\"ads-ctrl-size\" class=\"demo-panel-select\" onchange=\"_adsUpdate()\"><optgroup label=\"banner (AdMob)\"><option value=\"banner-sm\">banner-sm · 320×50</option><option value=\"banner-lg\">banner-lg · 320×100</option><option value=\"banner-mrec\">banner-mrec · 300×250</option></optgroup><optgroup label=\"promo (tile)\"><option value=\"promo-sm\">promo-sm · 131×126</option><option value=\"promo-md\" selected=\"\">promo-md · 224×200</option></optgroup><optgroup label=\"hero (full-width)\"><option value=\"hero-sm\">hero-sm · 296×174</option><option value=\"hero-md\">hero-md · 336×174</option></optgroup></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isLoading</span><select id=\"ads-ctrl-loading\" class=\"demo-panel-select\" onchange=\"_adsUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">caption</span><input type=\"text\" id=\"ads-ctrl-caption\" class=\"demo-panel-select demo-panel-input\" value=\"Offer title\" oninput=\"_adsUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One component serves every ad placement across the app: inline receipt banners, dashboard tiles, and full-width heroes. Seven canonical sizes cover IAB-standard banners plus product surfaces."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Ships its own surface, caption typography, loading skeleton, and corner radius tokens. Media flows through the <code>content</code> slot — no hardcoded rasters, no placeholder \"replace me\" assets."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Size naming follows a predictable pattern: <code>&lt;family&gt;-&lt;size&gt;</code>. Content and state are orthogonal axes. Caption typography uses the same DS text style across all promo and hero sizes."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Plugs into the DS Carousel for multi-ad layouts (e.g. a row of <code>hero-md</code>), into list rows for inline banners, and into the dashboard grid for promo tiles. No sibling \"Ad Carousel\" or \"Ad Group\" needed."
      }
    ],
    "behavior": [
      {
        "state": "banner-sm",
        "ios": "na",
        "android": "na",
        "property": "GADBannerView",
        "notes": "<code>AdView</code>"
      },
      {
        "state": "banner-lg",
        "ios": "na",
        "android": "na",
        "property": "GADBannerView",
        "notes": "<code>AdView</code>"
      },
      {
        "state": "banner-mrec",
        "ios": "na",
        "android": "na",
        "property": "GADBannerView",
        "notes": "<code>AdView</code>"
      },
      {
        "state": "promo-sm",
        "ios": "na",
        "android": "na",
        "property": "custom EBAdSpace",
        "notes": "custom composable"
      },
      {
        "state": "promo-md",
        "ios": "na",
        "android": "na",
        "property": "custom EBAdSpace",
        "notes": "custom composable"
      },
      {
        "state": "hero-sm",
        "ios": "na",
        "android": "na",
        "property": "custom EBAdSpace",
        "notes": "custom composable"
      },
      {
        "state": "hero-md",
        "ios": "na",
        "android": "na",
        "property": "custom EBAdSpace",
        "notes": "custom composable"
      },
      {
        "state": "isLoading",
        "ios": "na",
        "android": "na",
        "property": "RedactedShape",
        "notes": "shimmer composable"
      }
    ],
    "resolved": [],
    "open": [],
    "recommendations": [
      {
        "headline": "Adoption — deprecate and delete the three legacy components.",
        "body": "Swap all Figma usages of Ads On Receipt, Ad Space - Group - Large, and Dashboard Promo Cards to <code>Ad Space</code> with the matching <code>size</code>. Delete the old components plus the Placeholder Banner and Promo Cards Images asset libraries once zero-usage is confirmed.",
        "tag": "Family"
      },
      {
        "headline": "Asset pipeline — ship promo and hero imagery as product assets, not DS assets.",
        "body": "Product teams export 1×/2×/3× image assets from their marketing pipeline and pass them into the <code>content</code> slot. The DS ships the container, typography, radius, and skeleton only — no imagery. This is what retires the 8-variant Placeholder Banner and 6-variant Promo Cards Images asset sets.",
        "tag": "Asset"
      },
      {
        "headline": "Carousel composition — no \"Ad Carousel\" component.",
        "body": "Multi-ad rails (e.g. a horizontal row of <code>hero-md</code>) are authored as <code>&lt;Carousel&gt;&lt;AdSpace size=\"hero-md\" /&gt;&lt;AdSpace size=\"hero-md\" /&gt;…&lt;/Carousel&gt;</code>. The old <code>carousel=yes</code> pseudo-variant is retired because it was a static 3-card Figma preview, not a runtime carousel. Document this composition pattern in the Carousel and Ad Space guidelines.",
        "tag": "Composition"
      },
      {
        "headline": "Tokens — propose a <code>main/ad-space/color/*</code> namespace.",
        "body": "Ship <code>main/ad-space/color/surface</code> (card background), <code>main/ad-space/color/caption</code> (caption text), and <code>main/ad-space/color/loading-skeleton</code> (shimmer fill). Today the legacy components reuse generic <code>bg/color-bg-main</code> and <code>bg/color-bg-strong</code>; a dedicated namespace makes cross-family theming (dark mode, partner-branded surfaces) tractable.",
        "tag": "Token"
      },
      {
        "headline": "Telemetry — bake impression and tap tracking into the native component.",
        "body": "The iOS <code>EBAdSpace</code> view and Android composable should emit <code>onImpression</code> (50% visible for ≥1s) and <code>onTap</code> callbacks. AdMob-backed <code>banner-*</code> sizes get this for free; <code>promo-*</code> and <code>hero-*</code> need product-side reporting. Document the contract in the Code tab so consumer teams wire analytics consistently.",
        "tag": "Docs"
      },
      {
        "headline": "A11y — treat ads as labeled buttons, not decorative images.",
        "body": "Every Ad Space is tappable and leads somewhere; the whole surface must expose a single accessibility label (caption + \"Advertisement\" trait). Banner family should announce \"Advertisement\" as its accessibility hint per App Store / Play Store disclosure norms.",
        "tag": "A11y"
      },
      {
        "headline": "Caption — optional, typography-constrained, never mandatory.",
        "body": "Promo and hero families accept an optional caption string; banner family has none (AdMob renders its own chrome). Caption uses <code>Secondary/Bold/Caption</code> — one line for promo-sm, up to two lines for promo-md / hero-*. Empty caption hides the label slot; it does not reserve space.",
        "tag": "Slot"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('carousel-card');return false;\">Carousel Card</a> and the broader Carousel family — Ad Space heroes wrap inside the DS Carousel; keep skeleton treatment aligned across card primitives.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Size families",
    "specCards": [
      {
        "cardKey": "ads-spec-card-banner",
        "demoKey": "banner",
        "demoControls": adSpaceBannerControls,
        "title": "Banner family",
        "node": "18563:9789",
        "description": "IAB-standard banner sizes driven by AdMob. The DS provides a fixed-dimension surface; the ad SDK renders the creative in the content slot.",
        "previewHtml": "<div id=\"ads-spec-banner\"><div class=\"eb-preview-adspace eb-preview-adspace--banner eb-preview-adspace--banner-sm\" style=\"width:320px;height:50px;\"><div class=\"eb-preview-adspace__banner-fill\"><span class=\"eb-preview-adspace__banner-label\">Ad</span><span class=\"eb-preview-adspace__banner-dim\">320×50</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size family",   "value": "banner" },
              { "key": "Size",          "value": "banner-sm", "prop": "size" },
              { "key": "isLoading",     "value": "false", "prop": "loading" },
              { "key": "Content slot",  "value": "AdMob view" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",          "value": "#FFFFFF", "token": "ad-space/color/surface" },
              { "key": "Loading skeleton", "value": "#EEF2F9", "token": "ad-space/color/loading-skeleton" },
              { "key": "\"Ad\" marker",      "value": "#6780A9", "token": "text/color-text-subtle" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "320 × 50", "mono": true,
                "variants": {
                  "size:banner-lg":   { "value": "320 × 100" },
                  "size:banner-mrec": { "value": "300 × 250" }
                }
              },
              { "key": "Corner radius",  "value": "radius/radius-1 (4px)", "mono": true },
              { "key": "Padding",        "value": "0 (ad fills surface)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "\"Ad\" marker style", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Font",              "value": "BarkAda Semibold · 10 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>size<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.bannerSm</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">GADBannerView</span><span class=\"syn-punc\">(</span>adSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.banner</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">BannerSm</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AndroidView</span><span class=\"syn-punc\">(</span>factory <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> ctx <span class=\"syn-eq\">-&gt;</span> <span class=\"syn-type\">AdView</span><span class=\"syn-punc\">(</span>ctx<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">})</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "ads-spec-card-promo",
        "demoKey": "promo",
        "demoControls": adSpacePromoControls,
        "title": "Promo family",
        "node": "18563:9917",
        "description": "Product-owned dashboard tiles. Image fills the upper portion; an optional caption sits beneath.",
        "previewHtml": "<div id=\"ads-spec-promo\"><div class=\"eb-preview-adspace eb-preview-adspace--promo eb-preview-adspace--promo-md\" style=\"width:224px;height:200px;\"><div class=\"eb-preview-adspace__image\"><span class=\"eb-preview-adspace__image-label\">Replace me · 224×200</span></div><div class=\"eb-preview-adspace__caption eb-preview-adspace__caption--below\">Earn up to 5% on savings</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size family",   "value": "promo" },
              { "key": "Size",          "value": "promo-md", "prop": "size" },
              { "key": "isLoading",     "value": "false",    "prop": "loading" },
              { "key": "Content slot",  "value": "Image or illustration" },
              { "key": "Caption prop",  "value": "caption: String?" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",           "value": "#FFFFFF", "token": "ad-space/color/surface" },
              { "key": "Caption",           "value": "#2340A9", "token": "ad-space/color/caption" },
              { "key": "Image placeholder", "value": "#E6E1EF", "token": "ad-space/color/loading-skeleton" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "224 × 200", "mono": true,
                "variants": { "size:promo-sm": { "value": "131 × 126" } } },
              { "key": "Image aspect", "value": "3:2", "mono": true,
                "variants": { "size:promo-sm": { "value": "4:3" } } },
              { "key": "Corner radius",   "value": "radius/radius-2 (8px)", "mono": true },
              { "key": "Caption padding", "value": "8 horizontal, 6 vertical", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Caption style", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Font",          "value": "BarkAda Semibold · 12 / 16", "mono": true },
              { "key": "Max lines",     "value": "1 (sm) · 2 (md)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    size<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.promoMd</span><span class=\"syn-punc\">,</span>\n    caption<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Earn rewards every day\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> imageURL<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PromoMd</span><span class=\"syn-punc\">,</span>\n    caption <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Earn rewards every day\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> imageUrl<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "ads-spec-card-hero",
        "demoKey": "hero",
        "demoControls": adSpaceHeroControls,
        "title": "Hero family",
        "node": "18563:9808",
        "description": "Full-width hero banners for home and category surfaces. <code>hero-md</code> is the canonical item inside a DS Carousel for multi-ad rails.",
        "previewHtml": "<div id=\"ads-spec-hero\"><div class=\"eb-preview-adspace eb-preview-adspace--hero eb-preview-adspace--hero-md\" style=\"width:336px;height:174px;\"><div class=\"eb-preview-adspace__image eb-preview-adspace__image--full\"><span class=\"eb-preview-adspace__image-label\">Replace me · 336×174</span></div><div class=\"eb-preview-adspace__caption eb-preview-adspace__caption--overlay\">Weekend deals are here</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size family",  "value": "hero" },
              { "key": "Size",         "value": "hero-md",  "prop": "size" },
              { "key": "isLoading",    "value": "false",    "prop": "loading" },
              { "key": "Content slot", "value": "Image or illustration" },
              { "key": "Carousel",     "value": "DS Carousel for multi-ad rails" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",           "value": "#FFFFFF", "token": "ad-space/color/surface" },
              { "key": "Caption (overlay)", "value": "#FFFFFF", "token": "ad-space/color/caption-overlay" },
              { "key": "Caption scrim",     "value": "#040506", "token": "overlay/scrim-bottom" },
              { "key": "Image placeholder", "value": "#E6E1EF", "token": "ad-space/color/loading-skeleton" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "336 × 174", "mono": true,
                "variants": { "size:hero-sm": { "value": "296 × 174" } } },
              { "key": "Image aspect", "value": "15:8", "mono": true,
                "variants": { "size:hero-sm": { "value": "17:10" } } },
              { "key": "Corner radius",   "value": "radius/radius-3 (12px)", "mono": true },
              { "key": "Caption padding", "value": "12 horizontal, 8 vertical", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Caption style", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "Font",          "value": "Proxima Soft Bold · 16 / 20 · +0.25", "mono": true },
              { "key": "Max lines",     "value": "2", "mono": true },
              { "key": "Position",      "value": "Overlay on lower third", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">Carousel</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>ads<span class=\"syn-punc\">) {</span> ad <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>size<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.heroMd</span><span class=\"syn-punc\">,</span> caption<span class=\"syn-punc\">:</span> ad.caption<span class=\"syn-punc\">) {</span>\n            <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> ad.image<span class=\"syn-punc\">)</span>\n        <span class=\"syn-punc\">}</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarousel</span><span class=\"syn-punc\">(</span>items <span class=\"syn-eq\">=</span> ads<span class=\"syn-punc\">) {</span> ad <span class=\"syn-eq\">-&gt;</span>\n    <span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n        size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">HeroMd</span><span class=\"syn-punc\">,</span>\n        caption <span class=\"syn-eq\">=</span> ad.caption\n    <span class=\"syn-punc\">) {</span>\n        <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad.image<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    colorsTables: [
      // All three cards (banner, promo, hero) share the same surface palette.
      // The actual ad creative is supplied by the publisher and lives outside
      // the design system's color contract.
      buildStatelessColorsTable({
        title: 'Banner — Colors',
        description: 'Surface tile that hosts the ad creative. Skeleton + label colors are the only DS-owned tokens.',
        rows: [
          { role: 'Surface',          token: 'ad-space/color/surface',          value: '#FFFFFF' },
          { role: 'Loading skeleton', token: 'ad-space/color/loading-skeleton', value: '#EEF2F9' },
          { role: '"Ad" marker',      token: 'text/color-text-subtle',          value: '#6780A9' },
        ],
      }),
      buildStatelessColorsTable({
        title: 'Promo — Colors',
        description: 'Same DS-owned palette as the Banner; promo creative fills the surface.',
        rows: [
          { role: 'Surface',          token: 'ad-space/color/surface',          value: '#FFFFFF' },
          { role: 'Loading skeleton', token: 'ad-space/color/loading-skeleton', value: '#EEF2F9' },
          { role: '"Ad" marker',      token: 'text/color-text-subtle',          value: '#6780A9' },
        ],
      }),
      buildStatelessColorsTable({
        title: 'Hero — Colors',
        description: 'Same DS-owned palette as the Banner; hero creative fills the larger surface.',
        rows: [
          { role: 'Surface',          token: 'ad-space/color/surface',          value: '#FFFFFF' },
          { role: 'Loading skeleton', token: 'ad-space/color/loading-skeleton', value: '#EEF2F9' },
          { role: '"Ad" marker',      token: 'text/color-text-subtle',          value: '#6780A9' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>size: banner-sm | banner-lg | banner-mrec | promo-sm | promo-md | hero-sm | hero-md</code>",
          "swift": "<code>size: EBAdSpaceSize</code>",
          "compose": "<code>size: EBAdSpaceSize</code>"
        },
        {
          "figma": "<code>isLoading: Boolean</code>",
          "swift": "<code>isLoading: Bool</code>",
          "compose": "<code>isLoading: Boolean</code>"
        },
        {
          "figma": "<code>content: Frame</code> (slot)",
          "swift": "<code>content: () -&gt; AnyView</code>",
          "compose": "<code>content: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<code>caption: String?</code>",
          "swift": "<code>caption: String?</code>",
          "compose": "<code>caption: String?</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onImpression: (() -&gt; Void)?</code>",
          "compose": "<code>onImpression: (() -&gt; Unit)?</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap: (() -&gt; Void)?</code>",
          "compose": "<code>onClick: (() -&gt; Unit)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Ad disclosure",
        "ios": "Add <code>.accessibilityHint(\"Advertisement\")</code> so VoiceOver announces the trait alongside the caption.",
        "android": "Set <code>Modifier.semantics { contentDescription = \"Advertisement, ${caption}\" }</code>."
      },
      {
        "requirement": "Ad as a single button",
        "ios": "Whole surface wrapped in <code>Button { onTap() }</code> with <code>accessibilityElement(children: .combine)</code>.",
        "android": "<code>Modifier.clickable { onClick() }.semantics(mergeDescendants = true)</code>."
      },
      {
        "requirement": "Image alt",
        "ios": "Banner content is decorative from a11y's perspective — caption carries the meaning.",
        "android": "<code>contentDescription = null</code> on the inner image; caption carries meaning."
      },
      {
        "requirement": "Min touch target",
        "ios": "All seven sizes exceed 44 pt height ✓",
        "android": "All seven sizes exceed 48 dp height ✓"
      },
      {
        "requirement": "Loading state",
        "ios": "<code>accessibilityLabel(\"Loading advertisement\")</code> on the skeleton; suppress individual shimmer announcements.",
        "android": "<code>contentDescription = \"Loading advertisement\"</code> on the skeleton container."
      },
      {
        "requirement": "Focus ring",
        "ios": "<code>.focused()</code> → 2 px outline using <code>border/focus</code> token for iPad keyboard nav.",
        "android": "<code>Modifier.focusable()</code> + border in <code>border/focus</code>."
      },
      {
        "requirement": "AdMob compliance",
        "ios": "Google Mobile Ads SDK handles its own a11y metadata for <code>banner-*</code> — do not override.",
        "android": "Google Mobile Ads SDK handles its own a11y metadata for <code>banner-*</code> — do not override."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Single <code>Ad Space</code> component, semantic frame naming (<code>surface</code>, <code>content</code>, <code>caption</code>). No legacy \"Group\"/\"Large\"/\"hifi\"/\"midfi\" baggage."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>size</code> enum, one <code>isLoading</code> boolean, one <code>caption</code> string. Content and state axes are orthogonal."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Proposes a <code>main/ad-space/color/*</code> namespace (surface, caption, loading-skeleton) plus <code>radius/radius-1|2|3</code> per family. All typography bound to DS text styles."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>banner-*</code> maps 1:1 to <code>GADBannerView</code> / <code>AdView</code>. <code>promo-*</code> / <code>hero-*</code> map to <code>EBAdSpace</code> (ZStack/Box image + optional caption). Carousel composition reuses <code>EBCarousel</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, pressed, focused, disabled, and loading states all modeled. Loading is an orthogonal boolean, not a variant."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No DS-side assets. Content flows through the slot; placeholder libraries are retired."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean single-component mapping: <code>EBAdSpace</code> with enum <code>size</code>, boolean <code>isLoading</code>, slot <code>content</code>, string <code>caption</code>. 1:1 param mapping to both platforms."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean: <code>size</code> (7), <code>isLoading</code> (bool), <code>caption</code> (string), <code>content</code> (slot)."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>main/ad-space/color/*</code> namespace proposed; all colors and radii bound."
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default + loading modeled; pressed/focused handled at the native layer."
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBAdSpace.swift / EBAdSpace.kt not yet published — Planned API."
      },
      {
        "aspect": "AdMob SDK wiring",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Google Mobile Ads SPM + Gradle dependencies documented in Installation."
      }
    ],
    "variants": {
      "total": 7,
      "description": "One <code>size</code> enum with 7 values across 3 size families. <code>isLoading</code> is an orthogonal boolean, not a variant (would otherwise double the count to 14). <code>caption</code> is optional input, not a variant.",
      "columns": [
        "Family",
        "Size value",
        "Dimensions",
        "Aspect",
        "Corner radius",
        "Content slot"
      ],
      "rows": [
        {
          "cells": [
            "<strong>banner</strong>",
            "<code>banner-sm</code>",
            "320 × 50",
            "32:5",
            "4",
            "AdMob · IAB Mobile Banner"
          ]
        },
        {
          "cells": [
            "<strong>banner</strong>",
            "<code>banner-lg</code>",
            "320 × 100",
            "16:5",
            "4",
            "AdMob · IAB Large Banner"
          ]
        },
        {
          "cells": [
            "<strong>banner</strong>",
            "<code>banner-mrec</code>",
            "300 × 250",
            "6:5",
            "4",
            "AdMob · IAB MREC"
          ]
        },
        {
          "cells": [
            "<strong>promo</strong>",
            "<code>promo-sm</code>",
            "131 × 126",
            "4:3 (image)",
            "8",
            "Image + 1-line caption"
          ]
        },
        {
          "cells": [
            "<strong>promo</strong>",
            "<code>promo-md</code>",
            "224 × 200",
            "3:2 (image)",
            "8",
            "Image + up to 2-line caption"
          ]
        },
        {
          "cells": [
            "<strong>hero</strong>",
            "<code>hero-sm</code>",
            "296 × 174",
            "17:10",
            "12",
            "Image + optional caption overlay"
          ]
        },
        {
          "cells": [
            "<strong>hero</strong>",
            "<code>hero-md</code>",
            "336 × 174",
            "15:8",
            "12",
            "Image + caption; default Carousel item"
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
      "header": "Canonical consolidation — node 18563:9789",
      "rows": [
        {
          "body": "<strong>Consolidates Ads On Receipt, Ad Space - Group - Large, Dashboard Promo Cards</strong> — 3 source components (5 total with the Placeholder Banner and Promo Cards Images asset libraries) collapse into a single <code>Ad Space</code> with a 7-value <code>size</code> enum grouped into three families: <code>banner</code> (IAB / AdMob), <code>promo</code> (dashboard tile), <code>hero</code> (full-width).\n          <span class=\"tag-fixed\">Initial</span>",
          "delta": {
            "kind": "resolved",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — Component splintering resolved</strong> — Ads On Receipt (18563:9789), Ad Space - Group - Large (18563:9808), and Dashboard Promo Cards (18563:9917) merged into one component. Legacy components marked for deletion post-adoption.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — hifi/midfi fidelity axis retired</strong> — Legacy <code>type=hifi | midfi</code> was a placeholder-authoring crutch, not a runtime variant. Replaced with an orthogonal <code>isLoading</code> boolean. Content flows through the <code>content</code> slot regardless of state.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — <code>carousel=yes</code> pseudo-variant retired</strong> — The legacy \"carousel preview\" variant was a static 3-card Figma layout, not a runtime carousel. Multi-ad rails are now authored by composing multiple <code>AdSpace size=\"hero-md\"</code> instances inside the DS <code>EBCarousel</code>.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C6 — Placeholder asset libraries retired</strong> — Placeholder Banner (18563:9937, 8 variants) and Promo Cards Images (18563:9928) no longer ship. Media flows through the <code>content</code> slot; product teams provide imagery from their own asset pipeline.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — 1:1 native mapping</strong> — <code>banner-*</code> sizes map to <code>GADBannerView</code> / <code>AdView</code>. <code>promo-*</code> / <code>hero-*</code> map to a single <code>EBAdSpace</code> view/composable. Clean enum, boolean, string, slot signatures ready for Code Connect CLI registration.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Token namespace proposed</strong> — <code>main/ad-space/color/surface</code>, <code>main/ad-space/color/caption</code>, <code>main/ad-space/color/loading-skeleton</code>. Replaces ad-hoc use of generic surface tokens across the legacy trio.\n          <span class=\"tag-fixed\">Initial</span>",
          "delta": {
            "kind": "resolved",
            "label": "Tokens"
          }
        },
        {
          "body": "<strong>Telemetry contract added</strong> — Native component exposes <code>onImpression</code> (50% visible ≥1s) and <code>onTap</code>. AdMob-backed <code>banner-*</code> inherits the SDK's tracking; product-owned <code>promo-*</code> / <code>hero-*</code> wire consumer analytics via the callbacks.\n          <span class=\"tag-fixed\">Initial</span>",
          "delta": {
            "kind": "resolved",
            "label": "API"
          }
        }
      ]
    }
  ]
};
