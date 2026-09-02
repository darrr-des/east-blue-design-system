import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

/* Ad Space is three versions on one `Variant` setting (node 6507:74166).
   Controls mirror the Figma property panel, in its order. `Variant` is the
   driving property so each card already is that value, and `⤷ AssetSlot`
   is a slot — neither gets a control. Every other panel row appears here,
   in Figma's order. */
const boolRow = (name: string) => ({
  label: name,
  prop: name,
  control: 'toggle' as const,
  defaultValue: 'true',
  options: [
    { value: 'false', label: 'false' },
    { value: 'true', label: 'true' },
  ],
});

const textRow = (label: string, prop: string, value: string) => ({
  label,
  prop,
  control: 'input' as const,
  defaultValue: value,
  options: [],
});

const bannerControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      boolRow('hasTitle'),
      boolRow('hasDescription'),
      textRow('Title', 'title', 'Title'),
      textRow('Header', 'header', 'Header'),
      textRow('Description', 'description', 'Description Goes Here'),
    ],
  },
];

const promoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      boolRow('hasDescription'),
      textRow('Header', 'header', 'Header'),
      textRow('Description', 'description', 'Description Goes Here'),
    ],
  },
];
export const adSpace: ComponentData = {
  "meta": {
    "slug": "ad-space",
    "name": "Ad Space",
    "node": "6507:74166",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6507-74166",
    "description": "A container for ads, promos, and sponsored placements. Three versions — Receipt, Banner, and Promo — each built around one swappable asset area.",
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
    "navGroup": "Ad Space",
    "verdict": {
      "kind": "keep",
      "title": "Keep — rebuilt on a clean three-version shape",
      "text": "All four DS Health traits pass. The old seven-size schema is gone: the component is now three versions on a single <code>Variant</code> setting, each built the same way — <code>Container</code> wrapping a <code>⤷ AssetSlot</code> and an optional <code>Content</code> block. Layer names share one vocabulary across every version. Media flows through the slot, so no campaign artwork ships inside the design system. Code Connect stays unmapped because the native library doesn't exist yet — a dev-side dependency, not a design gap."
    },
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"6\" width=\"26\" height=\"8\" rx=\"1.5\" fill=\"#005CE5\"/>\n      <text x=\"16\" y=\"12\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Ad</text>\n      <rect x=\"3\" y=\"17\" width=\"12\" height=\"9\" rx=\"1.5\" fill=\"#E6E1EF\"/>\n      <rect x=\"17\" y=\"17\" width=\"12\" height=\"9\" rx=\"1.5\" fill=\"#EEF2F9\"/>\n    </svg>"
  },
  "overview": {
    "inContextNote": "Each version has a home in the app: Receipt sits inside transaction and receipt flows, Banner runs inline in a feed or content column, and Promo is the dashboard tile that also fills the Ad Carousel rail.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ads-demo-preview\"><div class=\"eb-preview-adspace eb-preview-adspace--banner\"><div class=\"eb-preview-adspace__title\">Title</div><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Variant</span><select id=\"ads-ctrl-variant\" class=\"demo-panel-select\" onchange=\"_adsUpdate()\"><option value=\"receipt\">Receipt</option><option value=\"banner\" selected=\"\">Banner</option><option value=\"promo\">Promo</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"ads-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Title\" oninput=\"_adsUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#header</span><input type=\"text\" id=\"ads-ctrl-header\" class=\"demo-panel-select demo-panel-input\" value=\"Header\" oninput=\"_adsUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#description</span><input type=\"text\" id=\"ads-ctrl-description\" class=\"demo-panel-select demo-panel-input\" value=\"Description Goes Here\" oninput=\"_adsUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One shape covers every ad placement — receipt inserts, in-feed banners, and dashboard promo tiles. The asset area is a real slot, so a product team drops in its own media without asking for a new component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Ships its own container, text styles, corner radius, and slot placeholder. No campaign artwork lives inside the design system, and nothing about a specific surface is baked in."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "All three versions read the same way: <code>Container</code> → <code>⤷ AssetSlot</code> → <code>Content</code>. Text layers share one vocabulary — <code>#title</code>, <code>#header</code>, <code>#description</code> — so the same name means the same thing everywhere."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into the <a href=\"/components/ad-carousel\">Ad Carousel</a> rail through <code>⤷ CarouselSlot</code>, and stands alone inline. No sibling component per placement."
      }
    ],
    "behavior": [
      {
        "state": "Variant=Receipt",
        "ios": "na",
        "android": "na",
        "property": "EBAdSpace(.receipt)",
        "notes": "300 × 250. Asset only — no text."
      },
      {
        "state": "Variant=Banner",
        "ios": "na",
        "android": "na",
        "property": "EBAdSpace(.banner)",
        "notes": "320 × 262. Carries <code>#title</code> above the asset."
      },
      {
        "state": "Variant=Promo",
        "ios": "na",
        "android": "na",
        "property": "EBAdSpace(.promo)",
        "notes": "224 × 208. Fills the Ad Carousel rail."
      },
      {
        "state": "⤷ AssetSlot",
        "ios": "na",
        "android": "na",
        "property": "content slot",
        "notes": "Swappable area for product-supplied media."
      }
    ],
    "resolved": [
      {
        "headline": "The setting holds versions, not sizes.",
        "body": "The <code>Size</code> setting was renamed to <code>Variant</code>. Its values — Receipt, Banner, Promo — name where the ad goes, which is what they always described. <code>Size</code> is reserved for XS–XL under the naming guidelines.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "All three versions share one anatomy.",
        "body": "Receipt used to hang its asset area straight off the root while the other two wrapped theirs. It now has the same <code>Container</code>, so every version reads <code>Container</code> → <code>⤷ AssetSlot</code>. The slot was renamed to <code>⤷ AssetSlot</code> in all three, matching the convention Tooltip uses.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Text layers no longer contradict their contents.",
        "body": "A layer called <code>#label</code> held the text \"Title\", while a different layer called <code>#title</code> held \"Header\". They are now <code>#title</code> and <code>#header</code> — each name matches what it holds, in every version.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Retire the old component in Sticker Sheets v2.",
        "body": "This assessment now points at <code>6507:74166</code> in the 2026 Working File. The previous component at <code>18563:9789</code> is deprecated. Swap the remaining Figma usages, then delete it along with the Placeholder Banner and Promo Cards Images asset libraries once zero usage is confirmed.",
        "tag": "Family"
      },
      {
        "headline": "Ship imagery as product assets, not design system assets.",
        "body": "Product teams export their own 1×/2×/3× images and pass them into <code>⤷ AssetSlot</code>. The design system ships the container, type styles, radius, and slot placeholder — never the artwork.",
        "tag": "Asset"
      },
      {
        "headline": "Revisit whether the carousel container should stay ad-specific.",
        "body": "<a href=\"/components/ad-carousel\">Ad Carousel</a> is a title, an optional button, and a rail of cards — nothing in it is about ads. Swap Ad Space for a Carousel Card and it becomes the dashboard rail. Keeping it ad-specific was a deliberate call this pass, to avoid a name collision with Carousel Card and Carousel Item. Worth revisiting when the Carousel family is reviewed.",
        "tag": "Family"
      },
      {
        "headline": "Propose a <code>main/ad-space/color/*</code> token namespace.",
        "body": "Ship <code>main/ad-space/color/surface</code>, <code>main/ad-space/color/title</code>, <code>main/ad-space/color/header</code>, and <code>main/ad-space/color/description</code>. A dedicated namespace makes dark mode and partner-branded surfaces tractable instead of inheriting generic background tokens.",
        "tag": "Token"
      },
      {
        "headline": "Bake impression and tap tracking into the native component.",
        "body": "The iOS view and Android composable should emit <code>onImpression</code> (50% visible for at least one second) and <code>onTap</code>. Document the contract in the Code tab so every consumer team wires analytics the same way.",
        "tag": "Docs"
      },
      {
        "headline": "Treat ads as labeled buttons, not decorative images.",
        "body": "Every Ad Space is tappable and leads somewhere, so the whole surface should expose one accessibility label built from <code>#header</code> and <code>#description</code>, plus an \"Advertisement\" trait to meet App Store and Play Store disclosure norms.",
        "tag": "A11y"
      },
      {
        "headline": "Watch the Banner title override inside the carousel.",
        "body": "Banner carries <code>#title</code> above the asset, Promo has only <code>#header</code> and <code>#description</code>, and Receipt has no text. Inside Ad Carousel the Banner title is switched off on each copy so it doesn't repeat the rail heading. That is a per-copy override rather than a property, so a designer who swaps the copy gets the title back. A <code>hasTitle</code> boolean would remove the risk if it proves annoying in practice.",
        "tag": "Slot"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/ad-carousel\">Ad Carousel</a> wraps this component in a scrolling rail. Keep the asset slot and placeholder treatment aligned with <a href=\"/components/carousel-card\">Carousel Card</a> as the Carousel family is reviewed.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Versions",
    "description": "Three versions on one Variant setting. Every version wraps a Container around a ⤷ AssetSlot; Banner and Promo add a Content block beneath it, and Banner alone carries a #title above.",
    "specCards": [
      {
        "cardKey": "ads-spec-card-receipt",
        "demoKey": "receipt",
        "title": "Receipt",
        "node": "6518:74485",
        "description": "",
        "previewHtml": "<div id=\"ads-spec-receipt\"><div class=\"eb-preview-adspace eb-preview-adspace--receipt\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Receipt" },
              { "key": "⤷ AssetSlot", "value": "Slot Block placeholder" },
              { "key": "#title", "value": "—" },
              { "key": "#header / #description", "value": "—" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "Transparent", "token": "— no fill bound; inherits the page" },
              { "key": "Slot placeholder", "value": "#9F3DFB", "token": "authoring only — not rendered in product", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text layers", "value": "none", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "250px", "mono": true },
              { "key": "Width", "value": "300px", "mono": true },
              { "key": "Radius", "value": "4px", "mono": true },
              { "key": "Padding H", "value": "0px (derived)", "mono": true },
              { "key": "Padding V", "value": "0px (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.receipt</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">)</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">()</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Receipt</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "ads-spec-card-banner",
        "demoKey": "banner",
        "demoControls": bannerControls,
        "title": "Banner",
        "node": "5703:38546",
        "description": "",
        "previewHtml": "<div id=\"ads-spec-banner\"><div class=\"eb-preview-adspace eb-preview-adspace--banner\"><div class=\"eb-preview-adspace__title\">Title</div><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Banner" },
              { "key": "⤷ AssetSlot", "value": "Slot Block placeholder" },
              { "key": "#title", "value": "Title" },
              { "key": "#header", "value": "Header" },
              { "key": "#description", "value": "Description Goes Here" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "Transparent", "token": "— no fill bound; inherits the page" },
              { "key": "#title", "value": "#072592", "token": "text/color-text-stronger", "swatch": true },
              { "key": "#header", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true },
              { "key": "#description", "value": "#445C85", "token": "text/color-text-weak", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Label/Large", "mono": true },
              { "key": "#header", "value": "Primary/Label/Large", "mono": true },
              { "key": "#description", "value": "Secondary/Bold/Caption", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "262px", "mono": true },
              { "key": "Width", "value": "320px", "mono": true },
              { "key": "Radius", "value": "4px", "mono": true },
              { "key": "Padding H", "value": "0px (derived)", "mono": true },
              { "key": "Padding V", "value": "0px (derived)", "mono": true },
              { "key": "Gap", "value": "16px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.banner</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    header<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Description Goes Here\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">)</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">()</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Banner</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description Goes Here\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "ads-spec-card-promo",
        "demoKey": "promo",
        "demoControls": promoControls,
        "title": "Promo",
        "node": "6528:77243",
        "description": "",
        "previewHtml": "<div id=\"ads-spec-promo\"><div class=\"eb-preview-adspace eb-preview-adspace--promo\"><div class=\"eb-preview-adspace__asset\"><span class=\"eb-preview-adspace__asset-label\">Asset</span></div><div class=\"eb-preview-adspace__content\"><div class=\"eb-preview-adspace__header\">Header</div><div class=\"eb-preview-adspace__description\">Description Goes Here</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Promo" },
              { "key": "⤷ AssetSlot", "value": "Slot Block placeholder" },
              { "key": "#title", "value": "—" },
              { "key": "#header", "value": "Header" },
              { "key": "#description", "value": "Description Goes Here" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "Transparent", "token": "— no fill bound; inherits the page" },
              { "key": "#header", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true },
              { "key": "#description", "value": "#445C85", "token": "text/color-text-weak", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#header", "value": "Primary/Label/Large", "mono": true },
              { "key": "#description", "value": "Secondary/Bold/Caption", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "208px", "mono": true },
              { "key": "Width", "value": "224px", "mono": true },
              { "key": "Radius", "value": "4px", "mono": true },
              { "key": "Padding H", "value": "0px (derived)", "mono": true },
              { "key": "Padding V", "value": "0px (derived)", "mono": true },
              { "key": "Gap", "value": "16px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">,</span>\n    header<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Description Goes Here\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">)</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">()</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">,</span>\n    header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description Goes Here\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Receipt — Colors',
        description: 'Asset only. The purple slot placeholder is an authoring aid and never renders in product.',
        rows: [
          { role: 'Surface', token: '— no fill bound', value: 'Transparent' },
        ],
      }),
      buildStatelessColorsTable({
        title: 'Banner — Colors',
        description: 'Three text roles. #title and #header share a size and weight but not a colour.',
        rows: [
          { role: 'Surface',      token: '— no fill bound',         value: 'Transparent' },
          { role: '#title',       token: 'text/color-text-stronger', value: '#072592' },
          { role: '#header',      token: 'text/color-text-primary',    value: '#005CE5' },
          { role: '#description', token: 'text/color-text-weak',    value: '#445C85' },
        ],
      }),
      buildStatelessColorsTable({
        title: 'Promo — Colors',
        description: 'Same palette as Banner, minus the title role.',
        rows: [
          { role: 'Surface',      token: '— no fill bound',      value: 'Transparent' },
          { role: '#header',      token: 'text/color-text-primary', value: '#005CE5' },
          { role: '#description', token: 'text/color-text-weak', value: '#445C85' },
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
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"2.0.3\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:ad-space:2.0.3\"</span><span class=\"syn-punc\">)</span>"
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
          "figma": "Variant — Receipt, Banner, Promo",
          "swift": "<code>AdSpaceVariant (.receipt / .banner / .promo)</code>",
          "compose": "<code>variant = AdSpaceVariant.Receipt / Banner / Promo</code>"
        },
        {
          "figma": "hasTitle — true, false (Banner only)",
          "swift": "<code>title: String?</code> — nil hides it",
          "compose": "<code>title: String? = null</code>"
        },
        {
          "figma": "hasDescription — true, false (Banner, Promo)",
          "swift": "<code>description: String?</code> — nil hides it",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "Title (text) — Banner only",
          "swift": "<code>title: String?</code>",
          "compose": "<code>title: String?</code>"
        },
        {
          "figma": "Header (text) — Banner, Promo",
          "swift": "<code>header: String?</code>",
          "compose": "<code>header: String?</code>"
        },
        {
          "figma": "Description (text) — Banner, Promo",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "⤷ AssetSlot (slot)",
          "swift": "<code>@ViewBuilder content: () -> Content</code>",
          "compose": "<code>content: @Composable BoxScope.() -> Unit</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Receipt — asset only",
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.receipt</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">)</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">()</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Receipt</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Banner — title above, text beneath",
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.banner</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Sponsored\"</span><span class=\"syn-punc\">,</span>\n    header<span class=\"syn-punc\">:</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> ad<span class=\"syn-punc\">.</span>blurb\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">)</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">() }</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Banner</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Sponsored\"</span><span class=\"syn-punc\">,</span>\n    header <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>headline<span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>blurb\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>"
      },
      {
        "subheading": "Promo — asset with header and description",
        "swift": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.promo</span><span class=\"syn-punc\">,</span>\n    header<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Description Goes Here\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">)</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">()</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAdSpace</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">AdSpaceVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Promo</span><span class=\"syn-punc\">,</span>\n    header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description Goes Here\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>creative<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The whole card is one tappable element",
        "ios": "<code>.accessibilityElement(children: .combine)</code> with a single <code>.isButton</code> trait",
        "android": "<code>Modifier.clickable</code> on the container, children marked <code>clearAndSetSemantics</code>"
      },
      {
        "requirement": "Disclosed as advertising",
        "ios": "<code>.accessibilityHint(\"Advertisement\")</code>",
        "android": "<code>contentDescription</code> prefixed with \"Advertisement\""
      },
      {
        "requirement": "Label built from the text layers",
        "ios": "<code>#header</code> then <code>#description</code>, joined",
        "android": "Same order in <code>contentDescription</code>"
      },
      {
        "requirement": "Asset is not announced separately",
        "ios": "<code>.accessibilityHidden(true)</code> on the image",
        "android": "<code>contentDescription = null</code> on the image"
      },
      {
        "requirement": "Minimum tap target",
        "ios": "44 × 44 pt — every version clears it at its documented size",
        "android": "48 × 48 dp — every version clears it at its documented size"
      },
      {
        "requirement": "Dynamic type",
        "ios": "<code>#header</code> and <code>#description</code> scale to AX5; the asset keeps its ratio",
        "android": "<code>sp</code> units on both text roles; the asset keeps its ratio"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pass campaign artwork into ⤷ AssetSlot from the product's own asset pipeline.",
        "dontText": "Don't add campaign images to the design system library."
      },
      {
        "doText": "Use Promo inside an Ad Carousel when the rail should read as scrollable.",
        "dontText": "Don't expect a peek from Banner in a rail; at 320 wide it fills the shell by design."
      },
      {
        "doText": "Let Receipt carry no text where the surrounding screen already gives context.",
        "dontText": "Don't force a header onto Receipt by detaching the copy."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three versions read <code>Container</code> → <code>⤷ AssetSlot</code>. Text layers renamed so each name matches its contents."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Size</code> renamed to <code>Variant</code>; values name the placement, which is what they always described."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Text roles bind to <code>text/color-text-stronger</code>, <code>text/color-text-primary</code> and <code>text/color-text-weak</code>, confirmed by design. No surface token — the container ships no fill. A <code>main/ad-space/color/*</code> namespace is recommended — see Overview."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A container with an image slot and two optional text rows maps directly to both platforms."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only surface — confirmed by design. Tap handling belongs to the host."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No raster ships inside the component. The Slot Block placeholder is the standard authoring aid."
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
      "total": 3,
      "description": "1 Variant setting × 3 values = 3 versions. Content is supplied through the slot and the text layers, not through extra versions.",
      "columns": ["Variant", "Size", "Text layers", "Node"],
      "rows": [
        { "cells": ["Receipt", "300 × 250", "none", "6518:74485"] },
        { "cells": ["Banner", "320 × 262", "#title · #header · #description", "5703:38546"] },
        { "cells": ["Promo", "224 × 208", "#header · #description", "6528:77243"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.3",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Panel order follows the design — node 6507:74166",
      "rows": [
        {
          "body": "<strong><code>Title</code> moved above <code>Header</code>.</strong> Design reordered the Figma property panel to match the order the three text layers actually appear in Banner. The demo panel and Property Mapping follow: <code>hasTitle</code>, <code>hasDescription</code>, <code>Title</code>, <code>Header</code>, <code>Description</code>. Promo is unaffected — it has no title.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Text properties wired to the demo panel — node 6507:74166",
      "rows": [
        {
          "body": "<strong>The three text properties now have controls.</strong> <code>Title</code>, <code>Header</code> and <code>Description</code> render as text inputs on Banner and Promo, in the Figma panel's order. Typing updates the preview and the string literal in both DEV snippets.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Spec-card panels can render text inputs.</strong> <code>SpecCard.astro</code> branched only to a toggle or a select, so a text property had nowhere to go. A <code>control: 'input'</code> kind was added to the shared schema and renderer — additive, and no existing row changes behaviour.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Documentation pass on the 2026 Working File — node 6507:74166",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to the content guides.</strong> Four spec sections in order, card descriptions cleared, and <code>Layout</code> cut to the seven canonical keys — slot and content-block dimensions came out, <code>Padding H</code>, <code>Padding V</code>, <code>Gap</code> and <code>Alignment</code> went in, derived from the frame positions.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Typography reduced to text style names.</strong> Font, size and tracking rows removed. <code>Title</code> and <code>Header</code> are <code>Primary/Label/Large</code>; <code>Description</code> is <code>Secondary/Bold/Caption</code>, replacing the previously documented <code>Primary/Bold/Heading</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Colour tokens corrected.</strong> The three text roles bind to <code>text/color-text-stronger</code>, <code>text/color-text-primary</code> and <code>text/color-text-weak</code>, confirmed by design. The previous <code>text/color-text-heading</code> / <code>-link</code> / <code>-body</code> paths were unverified.",
          "delta": { "kind": "resolved", "label": "C3 Resolved" }
        },
        {
          "body": "<strong>The surface row was documenting a fill that does not exist.</strong> <code>Container</code> paints nothing in any version — the <code>Title</code> and <code>Content</code> frames carry white fills set to hidden. <code>Surface</code> now reads Transparent with no token, in the spec cards and all three colours tables.",
          "delta": { "kind": "resolved", "label": "C3 Resolved" }
        },
        {
          "body": "<strong>Two boolean properties were missing from the documentation.</strong> The Figma property panel exposes <code>hasTitle</code> (Banner) and <code>hasDescription</code> (Banner, Promo). Neither appears in the layer tree, so no read-only tool had surfaced them. Both are now demo-panel toggles and Property Mapping rows.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>Text properties renamed to their panel names.</strong> <code>#title</code>, <code>#header</code> and <code>#description</code> are layer names; the properties are <code>Title</code>, <code>Header</code> and <code>Description</code>. Property Mapping now uses the property names and runs to seven rows.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>The asset slot no longer has a demo control.</strong> <code>⤷ AssetSlot</code> is a slot, so the panel drops it and each card shows the placeholder Figma ships by default.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>DEV code is live.</strong> <code>getSnippet</code> in <code>demos/ad-space.js</code> rebuilds the SwiftUI and Compose snippets from the card's controls, so turning <code>hasTitle</code> off drops the <code>title</code> argument from both.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Install coordinates corrected.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code> became <code>AY-Org/eb-ds-ios</code> and <code>com.eastblue.ds:ad-space:2.0.3</code>, matching the changelog head, and an Import block was added.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Promo usage snippet documented the wrong component.</strong> Both blocks led with <code>EBAdCarousel</code>, showing how to build a rail rather than how to use Promo. Rewritten as <code>EBAdSpace</code>. Accessibility also gained minimum tap target and dynamic type rows, and Code Connect was emptied.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The three text properties still have no demo control.</strong> <code>SpecCard.astro</code> renders <code>select</code> and <code>toggle</code> only, so <code>Title</code>, <code>Header</code> and <code>Description</code> cannot be edited from the panel. Blocked on a shared renderer change.",
          "delta": { "kind": "partial", "label": "Docs Partial" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt in the 2026 Working File — node 6507:74166",
      "rows": [
        {
          "body": "<strong>Seven sizes became three versions.</strong> The <code>banner-sm</code> … <code>hero-md</code> enum is gone. The component is now <code>Variant = Receipt | Banner | Promo</code> on a new node in the 2026 Working File. The previous component at <code>18563:9789</code> in Sticker Sheets v2 is deprecated.\n          <span class=\"tag-fixed\">Rebuilt</span>",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C2 — <code>Size</code> renamed to <code>Variant</code>.</strong> The values name where the ad goes rather than how big it is, so <code>Size</code> is freed for its XS–XL meaning under the naming guidelines.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C1 — one anatomy across all three versions.</strong> Receipt gained the <code>Container</code> wrapper the other two already had, and the slot was renamed <code>⤷ AssetSlot</code> everywhere.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — text layers renamed.</strong> <code>#label</code> (holding \"Title\") became <code>#title</code>, and the old <code>#title</code> (holding \"Header\") became <code>#header</code>, in every version.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong><code>isLoading</code> and the caption removed.</strong> Neither exists on the rebuilt component. The skeleton treatment and the optional caption string documented against the old seven-size schema no longer apply.\n          <span class=\"tag-fixed\">Removed</span>",
          "delta": { "kind": "resolved", "label": "Property" }
        },
        {
          "body": "<strong>C3 — token binding attested, not verified.</strong> Text colours are reported as bound to colour styles, but the read-only tools used for this assessment return raw hex without exposing bindings. Needs a Dev Mode confirmation.",
          "delta": { "kind": "partial", "label": "C3 partial" }
        },
        {
          "body": "<strong>New sibling: <a href=\"/components/ad-carousel\">Ad Carousel</a>.</strong> The rail that wraps this component is now assessed as its own page under the Ad Space group.",
          "delta": { "kind": "resolved", "label": "Family" }
        }
      ]
    },
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
