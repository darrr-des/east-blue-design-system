import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

const carouselItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Mode',
        prop: 'mode',
        defaultValue: 'light',
        options: [
          { value: 'light', label: 'Light Text' },
          { value: 'dark',  label: 'Dark Text' },
        ],
      },
      {
        label: 'hasPreamble',
        prop: 'hasPreamble',
        defaultValue: 'no',
        options: [
          { value: 'no',  label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'hasTextLink',
        prop: 'hasTextLink',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no',  label: 'no' },
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
        "kind": "refine",
        "label": "Needs Refinement"
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
        "headline": "Note why <code>Size</code> uses <code>Default</code> and <code>Small</code>.",
        "body": "The standard size scale is <code>XS · SM · MD · LG · XL</code>. This component deliberately uses <code>Default</code> and <code>Small</code> to put the emphasis on the default behaviour. Write the exception down so the next reviewer doesn't file it as drift.",
        "tag": "Docs"
      },
      {
        "headline": "Settle the <code>Button_New</code> name.",
        "body": "The button instance inside every version is named <code>Button_New</code>, which reads like a migration artifact. Held for the final reviewer to decide — it belongs to the Button component, not this one.",
        "tag": "Rename"
      },
      {
        "headline": "Decide whether Carousel Item needs a loading state.",
        "body": "Carousel Card ships <code>isLoading</code> with skeletons; this component has none. Deferred for now. Settle it either way so the card family stays predictable.",
        "tag": "State"
      },
      {
        "headline": "Audit the colour token bindings.",
        "body": "The review tooling reads raw hex and can't see which values are bound to variables, so C3 is recorded as unverified rather than passing. The description colour in particular is <code>#f6f9fd</code> at 80% opacity rather than a flat token value — worth confirming that's the intended binding.",
        "tag": "Token"
      },
      {
        "headline": "Document the carousel container.",
        "body": "Peek behaviour, snap-to-centre, the page indicator, and auto-advance belong on a dedicated <code>EBCarousel</code> container — not on each item. On iOS that's <code>.scrollTransition</code>; on Android, <code>graphicsLayer</code> keyed off <code>HorizontalPager</code> page offset.",
        "tag": "Family"
      },
      {
        "headline": "Announce as a link or button.",
        "body": "The whole card is tappable — VoiceOver and TalkBack should read heading, description, and the button label as one actionable announcement.",
        "tag": "A11y"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('carousel-card');return false;\">Carousel Card</a> — the narrow 140-wide card for the same rails. Keep slot naming and state coverage aligned across both.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
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
        "cardKey": "default-·-light-text-·-hastextlink=yes",
        "demoKey": "cit-default",
        "demoControls": carouselItemDemoControls,
        "title": "Default · Light Text · hasTextLink=yes",
        "node": "18543:2807",
        "description": "The most common variant — heading + description + button link, inverse text over a dark background image. Used on promotional carousels when the photo has dark tones.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cit-spec-1\"><div class=\"eb-preview eb-preview-cit eb-preview-cit--bg-dark\"><div class=\"eb-preview-cit__hero\"></div><div class=\"eb-preview-cit__content\"><div class=\"eb-preview-cit__heading\" style=\"color:#FFFFFF\">Heading</div><div class=\"eb-preview-cit__desc\" style=\"color:#FFFFFF\">This is a description for this banner.</div><div class=\"eb-preview-cit__link\" style=\"color:#FFFFFF\"><span>Button</span><svg class=\"eb-preview-cit__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Mode", "value": "Light Text", "prop": "mode" },
              { "key": "Type", "value": "Default", "prop": "type" },
              { "key": "hasPreamble", "value": "no", "prop": "hasPreamble" },
              { "key": "hasTextLink", "value": "yes", "prop": "hasTextLink" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Heading", "value": "#2340A9", "token": "carousel/color/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "carousel/color/description" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Active dot", "value": "#005CE5", "token": "bg/color-bg-primary" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Item width", "value": "328px (carousel-controlled)", "mono": true },
              { "key": "Padding", "value": "16 horizontal · 16 vertical", "mono": true },
              { "key": "Border radius", "value": "radius/radius-1 (4px)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Heading style", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "Heading font", "value": "Proxima Soft Bold · 18 / 23", "mono": true },
              { "key": "Description style", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Description font", "value": "BarkAda Semibold · 12 / 18", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    heading <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "headline-only-·-has-preamble-·-has-textlink",
        "demoKey": "cit-headline",
        "demoControls": carouselItemDemoControls,
        "title": "Headline Only · has Preamble · has TextLink",
        "node": "18543:2839",
        "description": "Preamble + headline only — no description line. Use when the headline itself is the full message. Name is misleading: the variant actually requires Preamble + Heading + Button, with description hidden.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cit-spec-2\"><div class=\"eb-preview eb-preview-cit eb-preview-cit--bg-dark\"><div class=\"eb-preview-cit__hero\"></div><div class=\"eb-preview-cit__content\"><div class=\"eb-preview-cit__preamble\" style=\"color:rgba(246,249,253,0.8)\">Preamble</div><div class=\"eb-preview-cit__heading\" style=\"color:#FFFFFF\">Heading</div><div class=\"eb-preview-cit__link\" style=\"color:#FFFFFF\"><span>Button</span><svg class=\"eb-preview-cit__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Mode", "value": "Light Text", "prop": "mode" },
              { "key": "Type", "value": "Headline Only", "prop": "type" },
              { "key": "hasPreamble", "value": "yes", "prop": "hasPreamble" },
              { "key": "hasTextLink", "value": "yes", "prop": "hasTextLink" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Heading", "value": "#2340A9", "token": "carousel/color/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "carousel/color/description" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Active dot", "value": "#005CE5", "token": "bg/color-bg-primary" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Item width", "value": "328px (carousel-controlled)", "mono": true },
              { "key": "Padding", "value": "16 horizontal · 16 vertical", "mono": true },
              { "key": "Border radius", "value": "radius/radius-1 (4px)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Heading style", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "Heading font", "value": "Proxima Soft Bold · 18 / 23", "mono": true },
              { "key": "Description style", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Description font", "value": "BarkAda Semibold · 12 / 18", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">, </span>preamble<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCarouselItem</span><span class=\"syn-punc\">(</span>\n    heading <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Preamble\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Default item
      buildStatelessColorsTable({
        title: 'Default — Colors',
        description: 'Single carousel slide with heading and description on a white surface.',
        rows: [
          { role: 'Heading',     token: 'carousel/color/label-header', value: '#2340A9' },
          { role: 'Description', token: 'carousel/color/description',  value: '#6780A9' },
          { role: 'Surface',     token: 'bg/color-bg-main',            value: '#FFFFFF' },
          { role: 'Active dot',  token: 'bg/color-bg-primary',         value: '#005CE5' },
        ],
      }),
      // Card 2 — same colors, structural variant
      buildStatelessColorsTable({
        title: 'Variant — Colors',
        description: 'Same palette as Card 1 — variant differs in slot composition, not color.',
        rows: [
          { role: 'Heading',     token: 'carousel/color/label-header', value: '#2340A9' },
          { role: 'Description', token: 'carousel/color/description',  value: '#6780A9' },
          { role: 'Surface',     token: 'bg/color-bg-main',            value: '#FFFFFF' },
          { role: 'Active dot',  token: 'bg/color-bg-primary',         value: '#005CE5' },
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
          "figma": "<code>mode: Light Text | Dark Text</code>",
          "swift": "<code>appearance: light | dark</code>",
          "compose": "<code>.ebAppearance(.light)</code>"
        },
        {
          "figma": "<code>type: Default | with Icon | Headline Only</code>",
          "swift": "<code>type: default | withIcon</code> + <code>hasDescription: Bool</code>",
          "compose": "<code>leadingIcon: Image?</code>, <code>hasDescription: Bool</code>"
        },
        {
          "figma": "<code>hasPreamble</code>",
          "swift": "<code>preamble?: String</code>",
          "compose": "<code>preamble: String?</code>"
        },
        {
          "figma": "<code>hasTextLink</code>",
          "swift": "<code>actionLabel?: String</code>",
          "compose": "<code>actionLabel: String?</code>"
        },
        {
          "figma": "(baked raster background)",
          "swift": "<code>background: Image | Gradient</code> (slot)",
          "compose": "<code>background: AnyView</code>"
        },
        {
          "figma": "(drawn grey circle)",
          "swift": "part of <code>leadingIcon</code> slot",
          "compose": "<code>leadingIcon: Image?</code>"
        },
        {
          "figma": "(raster chevron)",
          "swift": "<code>showChevron: Bool</code> (vector)",
          "compose": "<code>showChevron: Bool = true</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap: () -&gt; Void</code>",
          "compose": "<code>onTap: (() -&gt; Void)?</code>"
        },
        {
          "figma": "<strong>Carousel - Item</strong>",
          "swift": "merge into <code>Carousel Item</code>",
          "compose": "position is carousel-container-driven"
        }
      ]
    },
    "usageSnippets": [],
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
    "usageGuidelines": [],
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not verified. The read-only review tooling reads raw hex and can't see variable bindings. No evidence of a problem, but a token audit is needed to close this out — the 80% opacity on the description colour is worth confirming."
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
      "total": 10,
      "description": "<code>mode</code> (2) × <code>type</code> (3) × <code>hasTextLink</code> (2) × <code>hasPreamble</code> (2) = 24 combinatorial variants, but only <strong>10</strong> are modeled — the author pruned invalid combinations (e.g. <code>Headline Only</code> without Preamble, <code>with Icon</code> with TextLink). Each mode has 5 variants.",
      "columns": [
        "Mode",
        "Type",
        "hasTextLink",
        "hasPreamble",
        "Node",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Light Text</strong>",
            "Default",
            "yes",
            "no",
            "<code>18543:2807</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Light Text",
            "with Icon",
            "no",
            "no",
            "<code>18543:2818</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Light Text",
            "Default",
            "yes",
            "yes",
            "<code>18543:2826</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Light Text",
            "Headline Only",
            "yes",
            "yes",
            "<code>18543:2839</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Light Text",
            "Default",
            "no",
            "no",
            "<code>18543:2850</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "<strong>Dark Text</strong>",
            "Default",
            "yes",
            "no",
            "<code>18543:2856</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Dark Text",
            "with Icon",
            "no",
            "no",
            "<code>18543:2867</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Dark Text",
            "Default",
            "yes",
            "yes",
            "<code>18543:2875</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Dark Text",
            "Headline Only",
            "yes",
            "yes",
            "<code>18543:2888</code>",
            "282 × 160"
          ]
        },
        {
          "cells": [
            "Dark Text",
            "Default",
            "no",
            "no",
            "<code>18543:2899</code>",
            "282 × 160"
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
