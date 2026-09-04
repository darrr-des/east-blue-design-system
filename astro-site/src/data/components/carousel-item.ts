import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

/* Controls mirror the Figma property panel, in its order. `Appearance` is
   the driving property so each card already is that value, and
   `⤷ LeadingIcon` and `Background` are slots — none of those gets a
   control. Defaults are Figma's: Size Default, isPressed false,
   TopElement Icon, hasDescription true, hasTextLink true. */
const carouselItemControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size', prop: 'size', defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'small', label: 'Small' },
        ],
      },
      {
        label: 'isPressed', prop: 'isPressed', control: 'toggle' as const,
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'TopElement', prop: 'topElement', defaultValue: 'icon',
        options: [
          { value: 'icon', label: 'Icon' },
          { value: 'preamble', label: 'Preamble' },
          { value: 'none', label: 'None' },
        ],
      },
      {
        label: 'Preamble', prop: 'preamble', control: 'input' as const,
        defaultValue: 'Preamble', options: [],
      },
      {
        label: 'Heading', prop: 'heading', control: 'input' as const,
        defaultValue: 'Heading', options: [],
      },
      {
        label: 'hasDescription', prop: 'hasDescription', control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'Description', prop: 'desc', control: 'input' as const,
        defaultValue: 'This is a description for this banner.', options: [],
      },
      {
        label: 'hasTextLink', prop: 'hasTextLink', control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];

export const carouselItem: ComponentData = {
  "meta": {
    "slug": "carousel-item",
    "name": "Carousel Item",
    "node": "5776:37969",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5776-37969",
    "description": "A full-bleed banner item for a horizontal carousel — background image, heading, description, and a button. 24 versions across size, appearance, top element, and pressed state.",
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
    "navGroup": "Carousel",
    "verdict": {
      "kind": "keep",
      "title": "Keep — rebuilt as one component with a complete version grid",
      "text": "The three near-identical siblings (Item, Center, Side) collapsed into one <code>Carousel Item</code>, and every issue from the first assessment is closed. Settings are now <code>Size</code>, <code>Appearance</code>, <code>TopElement</code>, and <code>isPressed</code> — a full 2 × 2 × 3 × 2 grid with all 24 versions built, no gaps. <code>Background</code> and <code>⤷ LeadingIcon</code> are real slots, the chevron is a vector instance inside a proper Button, and pressed ships as a dim overlay. Code Connect stays unmapped because the native library doesn't exist yet."
    }
  },
  "overview": {
    "inContextNote": "Carousel - Item is one card in a horizontal swipe carousel — typically a promotional banner stack on the Home or Dashboard screen. The center item is emphasized; side items peek in at reduced opacity/scale. In today's Figma file, those visual states exist as separate components (Item, Item - Center, Item - Side) rather than being driven by the carousel container.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cit-demo-preview\"><div class=\"eb-preview eb-preview-cit eb-preview-cit--bg-dark\"><div class=\"eb-preview-cit__hero\"></div><div class=\"eb-preview-cit__content\"><div class=\"eb-preview-cit__icon\"></div><div class=\"eb-preview-cit__heading\" style=\"color:#FFFFFF\">Heading</div><div class=\"eb-preview-cit__desc\" style=\"color:rgba(246,249,253,0.8)\">This is a description for this banner.</div><div class=\"eb-preview-cit__link\" style=\"color:#FFFFFF\"><span>Button</span><svg class=\"eb-preview-cit__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\" id=\"cit-row-preamble\"><span class=\"demo-panel-label\">preamble</span><input type=\"text\" id=\"cit-ctrl-preamble\" class=\"demo-panel-select demo-panel-input\" value=\"Preamble\" oninput=\"_citUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">heading</span><input type=\"text\" id=\"cit-ctrl-heading\" class=\"demo-panel-select demo-panel-input\" value=\"Heading\" oninput=\"_citUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"cit-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"This is a description for this banner.\" oninput=\"_citUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">button</span><input type=\"text\" id=\"cit-ctrl-button\" class=\"demo-panel-select demo-panel-input\" value=\"Button\" oninput=\"_citUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select id=\"cit-ctrl-size\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"small\">Small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Appearance</span><select id=\"cit-ctrl-appearance\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"dark\" selected=\"\">Dark</option><option value=\"light\">Light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">TopElement</span><select id=\"cit-ctrl-topelement\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"icon\" selected=\"\">Icon</option><option value=\"preamble\">Preamble</option><option value=\"none\">None</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isPressed</span><select id=\"cit-ctrl-ispressed\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "<code>Background</code> is a slot, so any team drops in its own artwork without detaching. One component now covers what took three."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Background, leading icon, and the button all arrive as slots or instances. Pressed is handled inside the component by an <code>Overlay</code> instance rather than left to the consumer."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "All 24 versions share one anatomy — <code>Background</code>, <code>content</code>, <code>top-container</code>, <code>text-container</code>, <code>Button_New</code>. Settings follow the naming guidelines: <code>Size</code>, <code>Appearance</code>, and <code>TopElement</code> in PascalCase, <code>isPressed</code> as an <code>is</code>-prefixed boolean with <code>true</code> / <code>false</code> values."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes the DS button rather than drawing its own, and the chevron rides in the button's <code>Trailing Container</code> slot. Stacks into a horizontal scroller; the carousel container itself is still undocumented and tracked as a recommendation."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Size=Default",
        "notes": "282 × 160. Background slot, heading, description, and a button with a trailing chevron."
      },
      {
        "state": "Small",
        "ios": "yes",
        "android": "yes",
        "property": "Size=Small",
        "notes": "282 × 146. Same anatomy, 14px shorter. These are the two heights the old Center and Side components used, so a carousel that shrinks its side items swaps versions rather than applying a transform."
      },
      {
        "state": "Dark appearance",
        "ios": "yes",
        "android": "yes",
        "property": "Appearance=Dark",
        "notes": "For dark artwork — heading in <code>#ffffff</code>, description in <code>#f6f9fd</code> at 80%."
      },
      {
        "state": "Light appearance",
        "ios": "yes",
        "android": "yes",
        "property": "Appearance=Light",
        "notes": "For pale artwork — dark text. Note the inversion from the old <code>mode</code> setting: what was <code>mode=Light Text</code> is now <code>Appearance=Dark</code>."
      },
      {
        "state": "Top element",
        "ios": "yes",
        "android": "yes",
        "property": "TopElement=Icon | Preamble | None",
        "notes": "Chooses what sits above the heading — a 24 × 24 <code>⤷ LeadingIcon</code> slot, a preamble line, or nothing."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "isPressed=true",
        "notes": "An <code>Overlay</code> instance drops a <code>dim</code> layer over the background at <code>#020e22</code> / 24%. Text colours stay put."
      },
      {
        "state": "Loading",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "No skeleton. Carousel Card ships one — deferred for now, tracked as a family-consistency item."
      }
    ],
    "resolved": [
      {
        "headline": "The heading and description can be set on a copy.",
        "body": "Only the preamble was a real setting. The headline and body text were plain layers, so anyone placing the card had to detach it to change the words. <code>Heading</code> and <code>Description</code> are now settings.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The preamble setting is named after its layer.",
        "body": "It was called <code>Text</code>, which said nothing about what it fills. Renamed to <code>Preamble</code>, matching <code>#preamble</code> and the rest of the Carousel family.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Every colour is a named colour.",
        "body": "Both appearances carry their full token set, confirmed by design — including the surfaces, <code>bg/color-bg-brand</code> on Dark and <code>bg/color-bg-info-weakest</code> on Light. C3 moves to Ready.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The three sibling components are now one.",
        "body": "v2.0: rebuilt on node <code>5776:37969</code>. Item, Center, and Side collapsed into a single <code>Carousel Item</code>, and what was carousel position is now a <code>Size</code> setting — <code>Default</code> (282 × 160) and <code>Small</code> (282 × 146).",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Property names follow the guidelines.",
        "body": "v2.0: <code>Size</code>, <code>Appearance</code>, and <code>TopElement</code> are PascalCase variant properties; <code>isPressed</code> is an <code>is</code>-prefixed boolean with lowercase <code>true</code> / <code>false</code>; the slot is <code>⤷ LeadingIcon</code>. The old mix of <code>hasPreamble</code>, <code>with Icon</code>, and <code>Light Text</code> is gone.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>type=Headline Only</code> is gone.",
        "body": "v2.0: replaced by <code>TopElement = Icon | Preamble | None</code>, which names what actually changes — the element above the heading.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>mode</code> became a real appearance setting.",
        "body": "v2.0: now <code>Appearance = Dark | Light</code>, picking the whole text colour set at once instead of overriding layers. Watch the inversion — the old <code>mode=Light Text</code> is the new <code>Appearance=Dark</code>.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The background is a slot.",
        "body": "v2.0: <code>Background</code> is a SLOT on all 24 versions, wrapping an <code>Asset</code> instance. Teams drop in their own artwork without detaching.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The chevron is a vector instance.",
        "body": "v2.0: now <code>Chevron Right Small</code>, riding in the button's <code>Trailing Container</code> slot. The raster <code>shape_full</code> is gone, and it ships once rather than once per appearance.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The icon placeholder is a slot.",
        "body": "v2.0: <code>⤷ LeadingIcon</code> (<code>5804:42380</code>) is an empty 24 × 24 slot in place of the drawn grey circle. Any DS icon or Avatar drops in.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The card has a pressed state.",
        "body": "v2.0: <code>isPressed</code> ships on all 24 versions. An <code>Overlay</code> instance dims the background with a <code>#020e22</code> layer at 24%, leaving text colours untouched.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native component library doesn't exist yet. Nothing to action on the design side.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Settle the <code>Button_New</code> name.",
        "body": "The button instance inside every version is named <code>Button_New</code>, which reads like a migration artifact. Held for the final reviewer to decide — it belongs to the Button component, not this one.",
        "tag": "Rename"
      },
      {
        "headline": "Document the carousel container.",
        "body": "Peek behaviour, snap-to-centre, the page indicator, and auto-advance belong on a dedicated <code>EBCarousel</code> container — not on each item. On iOS that's <code>.scrollTransition</code>; on Android, <code>graphicsLayer</code> keyed off <code>HorizontalPager</code> page offset.",
        "tag": "Family"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('carousel-card');return false;\">Carousel Card</a> — the narrow 140-wide card for the same rails. Keep slot naming and state coverage aligned across both.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Decide whether Carousel Item needs a loading state.",
        "body": "v2.1: Closed — decided against. Approved designs do not list a loading state for Carousel Item, and the recommendation came from an older asset. <a href=\"/components/carousel-card\">Carousel Card</a> ships skeletons as its own approved pattern; that is not a precedent for this component.",
        "tag": "State"
      },
      {
        "headline": "Announce as a link or button.",
        "body": "v2.1: Applied — the whole card is the tap target, matching the behaviour already shipping in the app. The Accessibility table documents it for both platforms, along with page-change announcements for the surrounding carousel.",
        "tag": "A11y"
      },
      {
        "headline": "Note why <code>Size</code> uses <code>Default</code> and <code>Small</code>.",
        "body": "v2.1: Applied — recorded in the v2.0.0 changelog entry: <code>Default</code> and <code>Small</code> are a deliberate exception to the <code>XS–XL</code> scale, kept so the emphasis stays on the default behaviour rather than on a size step.",
        "tag": "Docs"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "v2.1: Applied — design confirmed every binding on both appearances. Dark uses <code>bg/color-bg-brand</code> with <code>text/color-text-inverse</code> and <code>-inverse-weak</code>; Light uses <code>bg/color-bg-info-weakest</code> with <code>text/color-text</code>, <code>-strong</code>, <code>-weaker</code> and <code>-primary</code>. The text link icon binds to <code>border/color-border-primary</code> and its inverse.",
        "tag": "Token"
      },
      {
        "headline": "Consolidate Carousel - Item + Center + Side into a single <code>Carousel Item</code>.",
        "body": "v2.0: Applied — one component replaces three. Position became the <code>Size</code> setting.",
        "tag": "Family"
      },
      {
        "headline": "Add a <code>background</code> slot.",
        "body": "v2.0: Applied — <code>Background</code> is a SLOT on all 24 versions.",
        "tag": "Slot"
      },
      {
        "headline": "Replace <code>mode</code> with an <code>appearance</code> enum.",
        "body": "v2.0: Applied — <code>Appearance = Dark | Light</code> now picks the whole text colour set.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>type=Headline Only</code>.",
        "body": "v2.0: Applied — replaced by <code>TopElement = Icon | Preamble | None</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Add a leading icon slot.",
        "body": "v2.0: Applied — <code>⤷ LeadingIcon</code>, an empty 24 × 24 slot.",
        "tag": "Slot"
      },
      {
        "headline": "Vectorize the chevron.",
        "body": "v2.0: Applied — <code>Chevron Right Small</code> instance inside the button's <code>Trailing Container</code> slot.",
        "tag": "Asset"
      },
      {
        "headline": "Add pressed state.",
        "body": "v2.0: Applied — <code>isPressed</code> dims the background via an <code>Overlay</code> instance at <code>#020e22</code> / 24%.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "dark",
        "demoKey": "dark",
        "demoControls": carouselItemControls,
        "title": "Dark",
        "node": "5804:39914",
        "description": "",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cit-spec-1\"><div class=\"eb-preview eb-preview-cit eb-preview-cit--bg-dark\"><div class=\"eb-preview-cit__hero\"></div><div class=\"eb-preview-cit__content\"><div class=\"eb-preview-cit__icon\"></div><div class=\"eb-preview-cit__heading\" style=\"color:#FFFFFF\">Heading</div><div class=\"eb-preview-cit__desc\" style=\"color:rgba(246,249,253,0.8)\">This is a description for this banner.</div><div class=\"eb-preview-cit__link\" style=\"color:#FFFFFF\"><span>Button</span></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Appearance", "value": "Dark" },
              { "key": "Size", "value": "Default", "prop": "size" },
              { "key": "isPressed", "value": "false", "prop": "isPressed" },
              { "key": "TopElement", "value": "Icon", "prop": "topElement" },
              { "key": "Preamble", "value": "Preamble", "prop": "preamble" },
              { "key": "Heading", "value": "Heading", "prop": "heading" },
              { "key": "hasDescription", "value": "true", "prop": "hasDescription" },
              { "key": "Description", "value": "This is a description for this banner.", "prop": "desc" },
              { "key": "hasTextLink", "value": "true", "prop": "hasTextLink" },
              { "key": "⤷ LeadingIcon", "value": "empty slot · 24 × 24" },
              { "key": "Background", "value": "Asset placeholder" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#1972F9", "token": "bg/color-bg-brand", "swatch": true },
              { "key": "#preamble", "value": "#F6F9FD · 80%", "token": "text/color-text-inverse-weak" },
              { "key": "#heading", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "#description", "value": "#F6F9FD · 80%", "token": "text/color-text-inverse-weak" },
              { "key": "Text link label", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "Text link icon", "value": "#FFFFFF", "token": "border/color-border-primary-inverse", "swatch": true },
              { "key": "Pressed overlay", "value": "#020E22 · 24%", "token": "— dim layer added by isPressed" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#preamble", "value": "Primary/Label/Fine", "mono": true },
              { "key": "#heading", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "#description", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Text link label", "value": "Primary/Label/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "160px", "mono": true, "variants": { "size:small": { "value": "146px" } } },
              { "key": "Width", "value": "282px", "mono": true },
              { "key": "Radius", "value": "8px", "mono": true },
              { "key": "Padding H", "value": "20px (derived)", "mono": true },
              { "key": "Padding V", "value": "20px (derived)", "mono": true },
              { "key": "Gap", "value": "0px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.dark</span><span class=\"syn-punc\">,</span>\n    heading<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAppearance</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Dark</span><span class=\"syn-punc\">,</span>\n    heading <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>Icons<span class=\"syn-punc\">.</span>Filled<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "light",
        "demoKey": "light",
        "demoControls": carouselItemControls,
        "title": "Light",
        "node": "5804:41501",
        "description": "",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cit-spec-2\"><div class=\"eb-preview eb-preview-cit eb-preview-cit--bg-light\"><div class=\"eb-preview-cit__hero\"></div><div class=\"eb-preview-cit__content\"><div class=\"eb-preview-cit__icon\"></div><div class=\"eb-preview-cit__heading\" style=\"color:#0A2757\">Heading</div><div class=\"eb-preview-cit__desc\" style=\"color:#6780A9\">This is a description for this banner.</div><div class=\"eb-preview-cit__link\" style=\"color:#005CE5\"><span>Button</span></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Appearance", "value": "Light" },
              { "key": "Size", "value": "Default", "prop": "size" },
              { "key": "isPressed", "value": "false", "prop": "isPressed" },
              { "key": "TopElement", "value": "Icon", "prop": "topElement" },
              { "key": "Preamble", "value": "Preamble", "prop": "preamble" },
              { "key": "Heading", "value": "Heading", "prop": "heading" },
              { "key": "hasDescription", "value": "true", "prop": "hasDescription" },
              { "key": "Description", "value": "This is a description for this banner.", "prop": "desc" },
              { "key": "hasTextLink", "value": "true", "prop": "hasTextLink" },
              { "key": "⤷ LeadingIcon", "value": "empty slot · 24 × 24" },
              { "key": "Background", "value": "Asset placeholder" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#E5F1FF", "token": "bg/color-bg-info-weakest", "swatch": true },
              { "key": "#preamble", "value": "#072592 · 60%", "token": "text/color-text-strong" },
              { "key": "#heading", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "#description", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Text link label", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true },
              { "key": "Text link icon", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true },
              { "key": "Pressed overlay", "value": "#020E22 · 24%", "token": "— dim layer added by isPressed" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#preamble", "value": "Primary/Label/Fine", "mono": true },
              { "key": "#heading", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "#description", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Text link label", "value": "Primary/Label/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "160px", "mono": true, "variants": { "size:small": { "value": "146px" } } },
              { "key": "Width", "value": "282px", "mono": true },
              { "key": "Radius", "value": "8px", "mono": true },
              { "key": "Padding H", "value": "20px (derived)", "mono": true },
              { "key": "Padding V", "value": "20px (derived)", "mono": true },
              { "key": "Gap", "value": "0px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.light</span><span class=\"syn-punc\">,</span>\n    heading<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAppearance</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Light</span><span class=\"syn-punc\">,</span>\n    heading <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>Icons<span class=\"syn-punc\">.</span>Filled<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: "Dark — Colors",
        description: "Appearance=Dark is a dark surface with light text — the old mode=Light Text. Pressed reuses these colours and adds a dim layer over the whole card.",
        rows: [
          { role: "Surface", token: "bg/color-bg-brand", value: "#1972F9" },
          { role: "#preamble", token: "text/color-text-inverse-weak", value: "#F6F9FD · 80%" },
          { role: "#heading", token: "text/color-text-inverse", value: "#FFFFFF" },
          { role: "#description", token: "text/color-text-inverse-weak", value: "#F6F9FD · 80%" },
          { role: "Text link label", token: "text/color-text-inverse", value: "#FFFFFF" },
          { role: "Text link icon", token: "border/color-border-primary-inverse", value: "#FFFFFF" },
          { role: "Pressed overlay", token: "— dim layer added by isPressed", value: "#020E22 · 24%" },
        ],
      }),
      buildStatelessColorsTable({
        title: "Light — Colors",
        description: "Appearance=Light is a pale surface with dark text — the old mode=Dark Text. Same pressed behaviour.",
        rows: [
          { role: "Surface", token: "bg/color-bg-info-weakest", value: "#E5F1FF" },
          { role: "#preamble", token: "text/color-text-strong", value: "#072592 · 60%" },
          { role: "#heading", token: "text/color-text", value: "#0A2757" },
          { role: "#description", token: "text/color-text-weaker", value: "#6780A9" },
          { role: "Text link label", token: "text/color-text-primary", value: "#005CE5" },
          { role: "Text link icon", token: "border/color-border-primary", value: "#005CE5" },
          { role: "Pressed overlay", token: "— dim layer added by isPressed", value: "#020E22 · 24%" },
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
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"2.1.1\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:carousel-item:2.1.1\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>carousel<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters, in the order the Figma property panel lists them. Note <code>Appearance</code> names the surface, not the text — <code>Dark</code> is a dark card with light copy.",
      "rows": [
        {
          "figma": "Size — Default, Small",
          "swift": "<code>size: EBCarouselItemSize = .default</code>",
          "compose": "<code>size: EBCarouselItemSize = Default</code>"
        },
        {
          "figma": "isPressed — true, false",
          "swift": "<code>isPressed: Bool = false</code> — driven by the press gesture",
          "compose": "<code>isPressed: Boolean = false</code> — driven by the press gesture"
        },
        {
          "figma": "Appearance — Dark, Light",
          "swift": "<code>appearance: EBAppearance</code> — <code>.dark</code> is a dark surface with light text",
          "compose": "<code>appearance: EBAppearance</code> — <code>Dark</code> is a dark surface with light text"
        },
        {
          "figma": "TopElement — Icon, Preamble, None",
          "swift": "<code>topElement: EBCarouselItemTop = .icon</code>",
          "compose": "<code>topElement: EBCarouselItemTop = Icon</code>"
        },
        {
          "figma": "⤷ LeadingIcon (slot) — shown when TopElement is Icon",
          "swift": "<code>@ViewBuilder leadingIcon: (() -> Icon)?</code>",
          "compose": "<code>leadingIcon: (@Composable () -> Unit)? = null</code>"
        },
        {
          "figma": "Preamble (text) — shown when TopElement is Preamble",
          "swift": "<code>preamble: String?</code>",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "Heading (text)",
          "swift": "<code>heading: String</code>",
          "compose": "<code>heading: String</code>"
        },
        {
          "figma": "hasDescription — true, false",
          "swift": "<code>description: String?</code> — nil hides it",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "Description (text)",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "Background (slot)",
          "swift": "<code>@ViewBuilder background: () -> Background</code>",
          "compose": "<code>background: @Composable BoxScope.() -> Unit</code>"
        },
        {
          "figma": "hasTextLink — true, false",
          "swift": "<code>textLink: String?</code> — nil hides the button",
          "compose": "<code>textLink: String? = null</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Dark — light copy on a dark surface",
        "swift": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.dark</span><span class=\"syn-punc\">,</span>\n    heading<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAppearance</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Dark</span><span class=\"syn-punc\">,</span>\n    heading <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>Icons<span class=\"syn-punc\">.</span>Filled<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Light — dark copy on a pale surface",
        "swift": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.light</span><span class=\"syn-punc\">,</span>\n    heading<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAppearance</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Light</span><span class=\"syn-punc\">,</span>\n    heading <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is a description for this banner.\"</span><span class=\"syn-punc\">,</span>\n    textLink <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>Icons<span class=\"syn-punc\">.</span>Filled<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> banner<span class=\"syn-punc\">.</span>asset<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Whole-card tap target",
        "ios": "Wrap in <code>Button</code> with combined <code>accessibilityLabel</code> (preamble + heading + description + action).",
        "android": "<code>Modifier.clickable().semantics(mergeDescendants = true)</code>."
      },
      {
        "requirement": "Page-change announcements",
        "ios": "Announce current page index via <code>accessibilityValue</code> on the carousel container.",
        "android": "<code>semantics { contentDescription = \"Banner 2 of 5\" }</code> on the pager."
      },
      {
        "requirement": "Contrast on image",
        "ios": "Designer ensures 4.5:1 between text + underlying image area; optional scrim overlay.",
        "android": "Same — ensure WCAG AA against the image region."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Skip scale + opacity transitions when <code>UIAccessibility.isReduceMotionEnabled</code>.",
        "android": "Check <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code>; skip <code>graphicsLayer</code> animation."
      },
      {
        "requirement": "Min touch target",
        "ios": "282×160 ≫ 44 pt ✓",
        "android": "282×160 ≫ 48 dp ✓"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pick <code>Appearance</code> by the surface you want, not the text. <code>Dark</code> is a dark card with light copy.",
        "dontText": "Don't map it from the old <code>mode</code> setting by memory. <code>mode=Light Text</code> is <code>Appearance=Dark</code> — the two are named for opposite things."
      },
      {
        "doText": "Drop artwork into the <code>Background</code> slot from the product's own asset pipeline.",
        "dontText": "Don't bake artwork into the component. The slot is why one card serves every campaign."
      },
      {
        "doText": "Check the copy against the artwork you ship. The card tints the surface, not the image.",
        "dontText": "Don't rely on the appearance alone for contrast — a busy photo can leave white text unreadable even on <code>Dark</code>."
      },
      {
        "doText": "Use <code>Small</code> where the rail is tight; it keeps the same width and trims the description.",
        "dontText": "Don't reach for it to fit longer copy. It gives the description less room, not more."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One component replaces three. All 24 versions share <code>Background</code>, <code>content</code>, <code>top-container</code>, <code>text-container</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Size</code>, <code>Appearance</code>, <code>TopElement</code> in PascalCase; <code>isPressed</code> boolean with lowercase values. <code>Size=Default|Small</code> is a deliberate exception to the <code>XS–XL</code> scale."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is bound and confirmed by design. Dark sits on <code>bg/color-bg-brand</code>, Light on <code>bg/color-bg-info-weakest</code>, with the text roles on <code>text/color-text-*</code> and the link icon on <code>border/color-border-primary</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Background</code> and <code>⤷ LeadingIcon</code> map to <code>@ViewBuilder</code> / <code>@Composable</code> slots. <code>Size</code> and <code>Appearance</code> are plain enums."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default and pressed built across all 24. No loading state — deferred, tracked as a family-consistency item."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Vector <code>Chevron Right Small</code> instance; <code>⤷ LeadingIcon</code> slot; <code>Background</code> slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native component library doesn't exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 24,
      "description": "2 <code>Size</code> × 2 <code>isPressed</code> × 2 <code>Appearance</code> × 3 <code>TopElement</code> = <strong>24 versions</strong>, all built — a complete grid with no gaps.",
      "summary": {
        "columns": ["Appearance", "Versions", "Count"],
        "rows": [
          { "cells": ["Dark", "2 Size × 3 TopElement × 2 isPressed", "12"] },
          { "cells": ["Light", "2 Size × 3 TopElement × 2 isPressed", "12"] }
        ]
      },      "columns": ["Appearance", "Size", "TopElement", "isPressed", "Node"],
      "rows": [
        { "cells": ["Dark", "Default", "Icon", "false", "5804:39914"] },
        { "cells": ["Dark", "Default", "Icon", "true", "5821:44302"] },
        { "cells": ["Dark", "Default", "Preamble", "false", "5804:42210"] },
        { "cells": ["Dark", "Default", "Preamble", "true", "5821:44312"] },
        { "cells": ["Dark", "Default", "None", "false", "5821:44670"] },
        { "cells": ["Dark", "Default", "None", "true", "5821:44814"] },
        { "cells": ["Dark", "Small", "Icon", "false", "5804:42531"] },
        { "cells": ["Dark", "Small", "Icon", "true", "5821:43953"] },
        { "cells": ["Dark", "Small", "Preamble", "false", "5804:42540"] },
        { "cells": ["Dark", "Small", "Preamble", "true", "5821:43973"] },
        { "cells": ["Dark", "Small", "None", "false", "5821:44680"] },
        { "cells": ["Dark", "Small", "None", "true", "5821:44825"] },
        { "cells": ["Light", "Default", "Icon", "false", "5804:41501"] },
        { "cells": ["Light", "Default", "Icon", "true", "5821:43983"] },
        { "cells": ["Light", "Default", "Preamble", "false", "5804:42291"] },
        { "cells": ["Light", "Default", "Preamble", "true", "5821:44003"] },
        { "cells": ["Light", "Default", "None", "false", "5821:44690"] },
        { "cells": ["Light", "Default", "None", "true", "5821:44836"] },
        { "cells": ["Light", "Small", "Icon", "false", "5804:42549"] },
        { "cells": ["Light", "Small", "Icon", "true", "5821:43993"] },
        { "cells": ["Light", "Small", "Preamble", "false", "5804:42558"] },
        { "cells": ["Light", "Small", "Preamble", "true", "5821:44013"] },
        { "cells": ["Light", "Small", "None", "false", "5821:44700"] },
        { "cells": ["Light", "Small", "None", "true", "5821:44847"] }
      ],
      "collapseLabel": "View full Appearance × Size × TopElement breakdown (24 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Kotlin import corrected to the family package",
      "rows": [
        {
          "body": "<strong>The Kotlin import named the component, not its family.</strong> It read <code>com.eastblue.ds.carouselitem.*</code>. Under the packaging rule settled on 2 September the package is the family — <code>Carousel</code> — so it is <code>com.eastblue.ds.carousel.*</code>. One package per family keeps imports stable when a family gains a component. The Gradle artifact keeps the slug and is unchanged.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Text settings added, Style and Code tabs rebuilt — node 5776:37969",
      "rows": [
        {
          "body": "<strong>The heading and description can be set on a copy.</strong> Only the preamble was a real setting, so anyone placing the card had to detach it to change the headline or body. <code>Heading</code> and <code>Description</code> are now settings. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>The preamble setting is named after its layer.</strong> It was called <code>Text</code>, which said nothing about what it fills. Renamed to <code>Preamble</code>, matching <code>#preamble</code> and the rest of the Carousel family.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>The Style tab was documenting retired settings.</strong> Its two cards were \"Default · Light Text · hasTextLink=yes\" and \"Headline Only · has Preamble · has TextLink\" — three properties crammed into each title, and both leaning on the old <code>mode</code> and <code>type</code> vocabulary. They are now <code>Dark</code> and <code>Light</code>, the two values of the driving <code>Appearance</code> setting.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The appearance inversion is written down.</strong> <code>Appearance</code> names the surface where <code>mode</code> named the text, so the old <code>mode=Light Text</code> is the new <code>Appearance=Dark</code>. Both colour tables and the Property Mapping now say so, because reading it from memory gets it backwards.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Type styles are read from the component.</strong> Typography carries four style names — <code>Primary/Label/Fine</code>, <code>Primary/Headlines/Block</code>, <code>Secondary/Bold/Caption</code>, <code>Primary/Label/Small</code> — each resolved through the style database rather than written by hand. Both <code>Size</code> values were read; Small trims the description box but keeps the same styles.",
          "delta": { "kind": "resolved", "label": "C3 Resolved" }
        },
        {
          "body": "<strong>Every colour is a named colour, confirmed by design.</strong> Both appearances now carry their full token set, including the surfaces — <code>bg/color-bg-brand</code> on Dark and <code>bg/color-bg-info-weakest</code> on Light.",
          "delta": { "kind": "resolved", "label": "C3 Resolved" }
        },
        {
          "body": "<strong>The preview was drawing a component that does not exist.</strong> It showed a two-tone card with a grey image well and a peach gradient; the component is one flat colour edge to edge. Corrected against nodes <code>8942:79573</code> and <code>8942:79589</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Pressed was dimming the text.</strong> The preview stacked the dim above the copy. In Figma the <code>Background</code> and <code>Overlay</code> are positioned beneath <code>content</code>, so a press dims the artwork only.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Text controls hide when their layer is not on screen.</strong> The preamble field only applies at <code>TopElement=Preamble</code> and the description field only when <code>hasDescription</code> is on. Both now appear and disappear with those settings.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Code tab described the component before the rebuild.</strong> Property Mapping carried eight rows built on <code>mode</code>, <code>type</code> and <code>hasPreamble</code>, with the background, icon and chevron all listed as baked in. It now maps all eleven settings. Installation, Usage Snippets and Usage Guidelines were empty and are written.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The version count was wrong in two directions at once.</strong> The inventory read <code>10</code> while its own description claimed 24, using a multiplier built from settings that no longer exist. It now reads 24 — the real grid, with a summary and a full breakdown.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        }
      ]
    },
{
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt in the 2026 Working File — node 18543:2806 → 5776:37969",
      "rows": [
        {
          "body": "<strong>Rebuilt on a new node.</strong> The component moved from <code>18543:2806</code> to <code>5776:37969</code>. The assessment was repointed at the time; this entry records the move itself, which had gone unwritten.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>Three components became one.</strong> <code>Carousel - Item</code>, <code>Carousel Item - Center</code> and <code>Carousel Item - Side</code> all shipped the same schema and differed only in height. They collapsed into a single <code>Carousel Item</code>, and what had been carousel position became a <code>Size</code> setting — <code>Default</code> (282 × 160) and <code>Small</code> (282 × 146).",
          "delta": { "kind": "resolved", "label": "C1 Resolved" }
        },
        {
          "body": "<strong>Settings now follow the naming guidelines.</strong> The old mix of <code>hasPreamble</code>, <code>with Icon</code> and <code>Light Text</code> is gone. <code>Size</code>, <code>Appearance</code> and <code>TopElement</code> are PascalCase, <code>isPressed</code> is an <code>is</code>-prefixed boolean with lowercase <code>true</code> / <code>false</code>, and the slot reads <code>⤷ LeadingIcon</code>.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>A misleading setting was replaced.</strong> <code>type=Headline Only</code> actually rendered a preamble, a heading and a button. It became <code>TopElement = Icon | Preamble | None</code>, which names what really changes — the element above the heading.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        },
        {
          "body": "<strong>Text colour became a real appearance setting.</strong> <code>mode</code> only swapped layer colours. It is now <code>Appearance = Dark | Light</code>, picking the whole set at once. Note the inversion when reading old files: the former <code>mode=Light Text</code> is the new <code>Appearance=Dark</code>.",
          "delta": { "kind": "resolved", "label": "C4 Resolved" }
        },
        {
          "body": "<strong>The background became a swappable area.</strong> The artwork had been baked into every version, so any team wanting its own image had to detach. <code>Background</code> is a Figma Slot on all 24 versions.",
          "delta": { "kind": "resolved", "label": "C4 Resolved" }
        },
        {
          "body": "<strong>The chevron is a vector again.</strong> It had shipped as a raster <code>shape_full</code>, once per appearance. It is now a <code>Chevron Right Small</code> instance riding in the DS button's <code>Trailing Container</code> slot — one copy, crisp at any size.",
          "delta": { "kind": "resolved", "label": "C6 Resolved" }
        },
        {
          "body": "<strong>The icon placeholder became a slot.</strong> A drawn grey circle stood in for the leading icon. <code>⤷ LeadingIcon</code> is now an empty 24 × 24 slot, so any DS icon or Avatar drops straight in.",
          "delta": { "kind": "resolved", "label": "C6 Resolved" }
        },
        {
          "body": "<strong>The card gained a pressed state.</strong> A tappable banner had no way to show it was being pressed. <code>isPressed</code> now dims the card with an <code>Overlay</code> instance at <code>#020E22</code> / 24%, leaving text colours untouched.",
          "delta": { "kind": "resolved", "label": "C5 Resolved" }
        },
        {
          "body": "<strong>The version grid is complete.</strong> <code>Size</code> × <code>isPressed</code> × <code>Appearance</code> × <code>TopElement</code> gives 24 versions with no gaps, against 10 before. <code>Size=Default|Small</code> is a deliberate exception to the <code>XS–XL</code> scale, kept to put the emphasis on default behaviour.",
          "delta": { "kind": "resolved", "label": "C2 Resolved" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18543:2806",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Merge with Carousel Item - Center + Side; replace raster bg/chevron with slots/vectors; add pressed; rename Type enum. <span class=\"tag-open tag-c1 tag-c2 tag-c4 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — Position-as-variant</strong> — Center/Side are separate components with identical schemas. Should be one component + container-driven styling. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Property names</strong> — Mixed casing (<code>hasPreamble</code> vs <code>with Icon</code>); <code>Headline Only</code> mis-named. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Background slot + mode rename</strong> — Background is baked raster; <code>mode</code> should be <code>appearance</code>. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Pressed state</strong> — Tappable card lacks pressed feedback. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster chevron + drawn icon</strong> — Vectorize chevron; swap icon placeholder for a slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on consolidation + slots. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
