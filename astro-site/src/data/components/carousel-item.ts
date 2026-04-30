import type { ComponentData, DemoControlSection } from '../types';

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
          { value: 'dark', label: 'Dark Text' },
        ],
      },
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'icon', label: 'with Icon' },
          { value: 'headline', label: 'Headline Only' },
        ],
      },
      {
        label: 'hasPreamble',
        prop: 'hasPreamble',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'hasTextLink',
        prop: 'hasTextLink',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no', label: 'no' },
        ],
      },
    ],
  },
];

export const carouselItem: ComponentData = {
  "meta": {
    "slug": "carousel-item",
    "name": "Carousel - Item",
    "node": "",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=",
    "description": "A horizontal-scroll item used as a building block for product/promo carousels.",
    "badges": [],
    "navGroup": "Carousel",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — merge Carousel - Item + Center + Side into a single position-agnostic component",
      "text": "All three have the same 10 variants (Mode × Type × hasTextLink × hasPreamble) — only dimensions differ. Position (center vs side) is a runtime layout concern: the carousel container applies scale/opacity based on scroll progress, not via component variants. Collapse to one <code>Carousel Item</code> (or fold into <code>Carousel Card</code>), strip <code>mode</code> in favour of a proper <code>appearance</code> mode set, replace the raster background with a <code>background</code> slot, vectorize the chevron, and add pressed state."
    }
  },
  "overview": {
    "inContextNote": "Carousel - Item is one card in a horizontal swipe carousel — typically a promotional banner stack on the Home or Dashboard screen. The center item is emphasized; side items peek in at reduced opacity/scale. In today's Figma file, those visual states exist as separate components (Item, Item - Center, Item - Side) rather than being driven by the carousel container.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cit-demo-preview\"><div class=\"eb-preview eb-preview-cit eb-preview-cit--bg-dark\"><div class=\"eb-preview-cit__hero\"></div><div class=\"eb-preview-cit__content\"><div class=\"eb-preview-cit__heading\" style=\"color:#FFFFFF\">Heading</div><div class=\"eb-preview-cit__desc\" style=\"color:#FFFFFF\">This is a description for this banner. This is a description.</div><div class=\"eb-preview-cit__link\" style=\"color:#FFFFFF\"><span>Button</span><svg class=\"eb-preview-cit__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">preamble</span><input type=\"text\" id=\"cit-ctrl-preamble\" class=\"demo-panel-select demo-panel-input\" value=\"Preamble\" oninput=\"_citUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">heading</span><input type=\"text\" id=\"cit-ctrl-heading\" class=\"demo-panel-select demo-panel-input\" value=\"Heading\" oninput=\"_citUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"cit-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"This is a description for this banner. This is a description.\" oninput=\"_citUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">button</span><input type=\"text\" id=\"cit-ctrl-button\" class=\"demo-panel-select demo-panel-input\" value=\"Button\" oninput=\"_citUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">mode</span><select id=\"cit-ctrl-mode\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"light\" selected=\"\">Light Text</option><option value=\"dark\">Dark Text</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"cit-ctrl-type\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"icon\">with Icon</option><option value=\"headline\">Headline Only</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasPreamble</span><select id=\"cit-ctrl-haspreamble\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTextLink</span><select id=\"cit-ctrl-hastextlink\" class=\"demo-panel-select\" onchange=\"_citUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "The card itself is reusable for banner carousels. But because the background is a baked-in raster and there's no image slot, every product team has to detach or fork to change imagery."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Card chrome + text tokens are self-contained, but background image, chevron, and icon placeholder ship as rasters embedded in the variant — not swappable instances."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Three near-identical components (Item 282, Center 312, Side 312/146) with the same 10-variant schema. Property casing is mixed (<code>hasPreamble</code> vs <code>with Icon</code>). <code>type=Headline Only</code> is actually \"with Preamble + Heading Only\" — mis-named."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Slots into a horizontal carousel container, but the container hasn't been formalized — consumers stitch peek/scale behaviour per screen."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "mode × type × hasTextLink × hasPreamble",
        "notes": "Static banner with tap target on the whole card (if <code>hasTextLink</code>) or on the button only."
      },
      {
        "state": "Focused (center)",
        "ios": "na",
        "android": "na",
        "property": "Carousel Item - Center (312×160)",
        "notes": "Modeled as a sibling component. Should be a scroll-progress-driven style inside the carousel container."
      },
      {
        "state": "Peeking (side)",
        "ios": "na",
        "android": "na",
        "property": "Carousel Item - Side (312×146)",
        "notes": "Modeled as a sibling component. Should be a scroll-progress-driven style inside the carousel container."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Banner is tappable — needs a subtle scale-down or overlay tint on press."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Promotional banner — disabled state isn't meaningful."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Position is a separate component, not a runtime style.",
        "body": "Carousel - Item (282), Carousel Item - Center (312×160), and Carousel Item - Side (312×146) all share the same 10-variant schema. Center/side should be carousel-container-driven visual states via scale + opacity on scroll progress — not distinct DS components.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Property casing is inconsistent.",
        "body": "Booleans are camelCase (<code>hasPreamble</code>, <code>hasTextLink</code>) but enum values are Title-Cased or hyphenated with lowercase (<code>Light Text</code>, <code>with Icon</code>, <code>Headline Only</code>). Pick one convention.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>type=Headline Only</code> is misleading.",
        "body": "That variant renders Preamble + Heading + Button (no description). Either rename to <code>noDescription</code> or collapse into a boolean <code>hasDescription</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>mode</code> is about text color, not appearance.",
        "body": "The enum decides text color only (inverse on dark photos vs dark on light photos). Native platforms should infer contrast from the background image or expose a proper <code>appearance</code> enum — not a layer-level token swap.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Background image has no slot.",
        "body": "The image is baked into the variant — product teams can't drop in their own artwork without detaching the instance.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Chevron is a raster <code>shape_full</code> PNG.",
        "body": "Doesn't scale cleanly and can't accept a token-bound tint. Ships twice (once per <code>mode</code>).",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Icon placeholder in <code>with Icon</code> is a drawn grey circle.",
        "body": "Not a swappable Icon or Avatar instance.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed state.",
        "body": "Banner is tappable but only Default is modeled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the three siblings are consolidated and the image + icon slots are adopted.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate Carousel - Item + Center + Side into a single <code>Carousel Item</code>.",
        "body": "All three share the same 10-variant schema; only dimensions differ. Pick one canonical size (312×160 is the most common) and let the carousel container handle center-vs-side styling via scroll progress. Preferred target: fold into <a href=\"#\" onclick=\"showPanelById('carousel-card');return false;\">Carousel Card</a> if content shape is compatible, otherwise keep as <code>EBCarouselItem</code> sibling.",
        "tag": "Family"
      },
      {
        "headline": "Let the carousel container own focus/peek styling.",
        "body": "Center-item scale, side-item opacity, and peek offset are layout concerns — not component variants. On iOS use <code>.scrollTransition { content, phase in content.opacity(phase.isIdentity ? 1 : 0.6).scaleEffect(phase.isIdentity ? 1 : 0.94) }</code>. On Android use <code>graphicsLayer</code> keyed off <code>HorizontalPager</code> page offset.",
        "tag": "Composition"
      },
      {
        "headline": "Add a <code>background</code> slot.",
        "body": "Replace the baked-in raster with a Figma Slot that accepts an image, gradient, or illustration instance. Native: <code>background: AnyView</code> (SwiftUI) / <code>background: @Composable () -&gt; Unit</code> (Compose).",
        "tag": "Slot"
      },
      {
        "headline": "Replace <code>mode</code> with an <code>appearance</code> enum.",
        "body": "<code>appearance: light | dark</code> (matching Button's conventions) — picks the full text/link color set in one go rather than Figma overriding each layer. Later, auto-derive from background luminance if tooling supports it.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>type=Headline Only</code> to <code>hasDescription: false</code>.",
        "body": "The current name doesn't describe what that variant renders. Collapse <code>type</code> to <code>Default | with Icon</code> and move description visibility to a boolean.",
        "tag": "Rename"
      },
      {
        "headline": "Add a leading icon slot (Icon or Avatar).",
        "body": "Replace the grey circle placeholder with a proper Figma Slot that accepts an Icon or Avatar instance.",
        "tag": "Slot"
      },
      {
        "headline": "Vectorize the chevron.",
        "body": "Swap the raster <code>shape_full</code> for a vector glyph — one instance, token-bound color, crisp at any scale.",
        "tag": "Asset"
      },
      {
        "headline": "Add pressed state.",
        "body": "Subtle scale-down (0.98) or dark overlay (6–8% black) on press — banners are tappable and need tap feedback.",
        "tag": "State"
      },
      {
        "headline": "Document the carousel container.",
        "body": "The peek behaviour, snap-to-center, page indicator, and auto-advance belong on a dedicated <code>EBCarousel</code> container component — not in each item.",
        "tag": "Family"
      },
      {
        "headline": "Announce as a link / button.",
        "body": "The whole card is tappable — VoiceOver and TalkBack should read heading + description + \"Button\" as a single actionable announcement.",
        "tag": "A11y"
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
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cit-spec-1\"></div>",
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
        "previewHtml": "<div class=\"spec-preview-body\" id=\"cit-spec-2\"></div>",
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
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Position-specific duplicates (Item / Center / Side) should be one component with container-driven styling."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Mixed casing; <code>Headline Only</code> is mis-named."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Text colors bind to <code>main/carousel/color/*</code>, <code>text/color-text-inverse*</code>, radius + shadow tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Background is a baked raster — needs to become a slot. Position-as-variant doesn't map to pager APIs."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default only — no pressed state for a tappable card."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Raster chevron; drawn circle icon placeholder."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until consolidation + slots land."
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
