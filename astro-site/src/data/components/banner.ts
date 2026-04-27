import type { ComponentData } from '../types';

export const banner: ComponentData = {
  "meta": {
    "slug": "banner",
    "name": "Banner",
    "node": "756:82673",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=756-82673",
    "description": "A neutral-background promotional banner with an image or icon, a text stack (preamble, heading, description), and an optional button link.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"2\" y=\"8\" width=\"28\" height=\"16\" rx=\"2\" fill=\"#EEF3FB\" stroke=\"#B8CFF8\" stroke-width=\"1\"/>\n      <circle cx=\"8\" cy=\"16\" r=\"4\" fill=\"#005CE5\"/>\n      <rect x=\"14\" y=\"12\" width=\"12\" height=\"2\" rx=\"1\" fill=\"#072592\"/>\n      <rect x=\"14\" y=\"16\" width=\"10\" height=\"1.5\" rx=\"0.75\" fill=\"#6780A9\"/>\n      <rect x=\"14\" y=\"20\" width=\"6\" height=\"1.5\" rx=\"0.75\" fill=\"#005CE5\"/>\n    </svg>",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — collapse 5 boolean-ish axes into a clean API, add asset/background slots, consolidate with Carousel - Item",
      "text": "Property names with spaces (<code>with link</code>, <code>with button</code>, <code>with preamble</code>, <code>with icon</code>) don't survive codegen. <code>with link</code> + <code>with button</code> describe mutually exclusive CTAs and should be one <code>action</code> enum. <code>with icon</code> is too narrow — a leading <code>asset</code> slot accepting Icon / Avatar / Illustration / Image is more reusable. <code>Property = Within A Container | Full Width</code> is a padding/layout concern owned by the parent. Background image and chevron should be vector slots. Finally, Banner and Carousel - Item share enough DNA to be one component with carousel behaviour on the container."
    }
  },
  "overview": {
    "inContextNote": "Banner is used in-flow as a promotional callout — typically between sections on a Home or Dashboard screen. \"Within A Container\" leaves horizontal padding on either side so the banner sits as a card; \"Full Width\" bleeds edge-to-edge. The image or icon sits on the opposite side of the text per the position axis.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"bnr-demo-preview\"><div class=\"eb-preview eb-preview-bnr eb-preview-bnr--container eb-preview-bnr--img-left\"><div class=\"eb-preview-bnr__card\"><div class=\"eb-preview-bnr__asset\"><div class=\"eb-preview-bnr__asset-disk\"></div><div class=\"eb-preview-bnr__asset-chip\">Replace me</div></div><div class=\"eb-preview-bnr__content\"><div class=\"eb-preview-bnr__heading\">Heading</div><div class=\"eb-preview-bnr__desc\">Add description here.</div><div class=\"eb-preview-bnr__link\"><span>Button</span><svg class=\"eb-preview-bnr__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"M9 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">preamble</span><input type=\"text\" id=\"bnr-ctrl-preamble\" class=\"demo-panel-select demo-panel-input\" value=\"Preamble\" oninput=\"_bnrUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">heading</span><input type=\"text\" id=\"bnr-ctrl-heading\" class=\"demo-panel-select demo-panel-input\" value=\"Heading\" oninput=\"_bnrUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"bnr-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Add description here.\" oninput=\"_bnrUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">action label</span><input type=\"text\" id=\"bnr-ctrl-action\" class=\"demo-panel-select demo-panel-input\" value=\"Button\" oninput=\"_bnrUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Property</span><select id=\"bnr-ctrl-property\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"container\" selected=\"\">Within A Container</option><option value=\"full\">Full Width</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">position</span><select id=\"bnr-ctrl-position\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"left\" selected=\"\">left</option><option value=\"right\">right</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">with preamble</span><select id=\"bnr-ctrl-preamble-flag\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">with icon</span><select id=\"bnr-ctrl-icon-flag\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">action</span><select id=\"bnr-ctrl-action-flag\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"button\" selected=\"\">with button</option><option value=\"link\">with link</option><option value=\"none\">none</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Banner reads cleanly across promo, info, and up-sell contexts, but the image asset is an instance of a sibling component (not a declared slot) and the icon variant bakes in a grey placeholder — both force product teams to detach or fork to drop in real artwork."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Card chrome, text tokens, and colors resolve to <code>main/banner/color/*</code>. But the chevron on the button link is a raster <code>shape_full</code> PNG, and the icon placeholder is a drawn circle — neither is self-contained as a vector instance."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Five boolean-ish axes with space-separated names (<code>with link</code>, <code>with button</code>, <code>with preamble</code>, <code>with icon</code>) — no other DS component uses spaces in property names. <code>Property = Within A Container | Full Width</code> is a padding concern named like a semantic mode. <code>with link</code> + <code>with button</code> are mutually exclusive but modeled as independent booleans."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Nests cleanly into Home/Dashboard scrollers and maps to iOS <code>HStack</code> / Compose <code>Row</code>. Duplicates ~95% of <a href=\"#\" onclick=\"showPanelById('carousel-item');return false;\">Carousel - Item</a>'s schema — the two should be one component."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Property × position × with link × with button × with preamble × with icon",
        "notes": "Static banner; whole card is the tap target when an action is present."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Tappable banner lacks pressed feedback — needs a subtle scale-down or overlay tint."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Keyboard / D-pad focus ring needed when used in an a11y-first flow."
      },
      {
        "state": "Within A Container",
        "ios": "na",
        "android": "na",
        "property": "Property=Within A Container",
        "notes": "12 px outer padding + 8 px corner radius around the banner card. Owned by the parent layout on native — not a component variant."
      },
      {
        "state": "Full Width",
        "ios": "na",
        "android": "na",
        "property": "Property=Full Width",
        "notes": "No outer padding, no corner radius. Also owned by the parent layout."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Property names use spaces.",
        "body": "<code>with link</code>, <code>with button</code>, <code>with preamble</code>, <code>with icon</code> aren't valid identifiers in any native codegen target. Should be camelCase: <code>hasLink</code>, <code>hasAction</code>, <code>hasPreamble</code>, <code>hasLeadingAsset</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>Property</code> is a meta-name, not a semantic one.",
        "body": "Its values (<code>Within A Container</code> / <code>Full Width</code>) describe outer padding and corner radius — a layout concern the parent should own. Rename to <code>padding</code> if kept, or drop the axis entirely and let the consumer control width + padding.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>with link</code> + <code>with button</code> encode mutually exclusive CTAs as independent booleans.",
        "body": "Both are text + chevron link styles — the distinction is cosmetic. This schema admits the impossible state <code>with link=yes</code> + <code>with button=yes</code> (excluded by authoring convention, not by the schema). Collapse into one <code>action</code> enum.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Sparse cartesian variant space.",
        "body": "5 boolean-ish axes × 2 container modes would yield 64 combinations; only 20 ship. Author manually pruned invalid combos — that logic should live in the schema (enums, mutually exclusive props), not in variant authoring discipline.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No first-class image slot.",
        "body": "The image is an instance of a separate \"Banner Asset Placeholder\" component — product teams swap via instance-override rather than a declared Figma Slot. Should be a named <code>asset</code> slot accepting an Image, Illustration, or Gradient.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>with icon=yes</code> renders a drawn grey circle.",
        "body": "The icon slot is a flat <code>#C2C6CF</code> circle, not a swappable Icon / Avatar / Illustration instance. Can't carry a token-bound color or glyph.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Chevron is a raster <code>shape_full</code> PNG.",
        "body": "The \"learn more\" arrow ships as an <code>&lt;img&gt;</code> asset. Doesn't scale cleanly and can't take a token tint.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed / focused / disabled states.",
        "body": "The whole banner is tappable but only Default is modeled. Native platforms need pressed (tap feedback) and focused (keyboard/D-pad) at minimum.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Container padding modeled as a component variant.",
        "body": "<code>Within A Container</code> adds 12 px outer padding and wraps the inner card in a rounded container; <code>Full Width</code> drops both. On native this is a layout-level decision (parent gives Banner its width + padding), not a Figma variant.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until properties are renamed, axes are collapsed, and asset/background slots are adopted.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename space-separated booleans to camelCase.",
        "body": "<code>with link</code> → <code>hasLink</code>, <code>with button</code> → <code>hasAction</code>, <code>with preamble</code> → <code>hasPreamble</code>, <code>with icon</code> → <code>hasLeadingAsset</code>. Matches the DS-wide naming fix applied to Carousel Item and the Form family.",
        "tag": "Rename"
      },
      {
        "headline": "Collapse <code>with link</code> + <code>with button</code> into one <code>action</code> enum.",
        "body": "<code>action: .none | .link(\"Label\") | .button(\"Label\")</code>. Mutually exclusive CTAs shouldn't be modeled as independent booleans — the schema should make <code>with link=yes + with button=yes</code> unrepresentable.",
        "tag": "Property"
      },
      {
        "headline": "Replace <code>with icon</code> boolean with a leading <code>asset</code> slot.",
        "body": "Accept an Icon, Avatar, Illustration, or Image instance. Native: <code>leadingAsset: @ViewBuilder</code> (SwiftUI) / <code>leadingAsset: @Composable () -&gt; Unit</code> (Compose). Eliminates the rigid icon-only placeholder.",
        "tag": "Slot"
      },
      {
        "headline": "Add a <code>background</code> / image slot.",
        "body": "Replace the \"Banner Asset Placeholder\" instance with a first-class Figma Slot that accepts an Image, Illustration, or Gradient. Native: <code>background: AnyView</code> / <code>background: @Composable () -&gt; Unit</code>.",
        "tag": "Slot"
      },
      {
        "headline": "Rename <code>Property</code> → drop it or make it <code>padding</code>.",
        "body": "<code>Within A Container</code> vs <code>Full Width</code> is a padding + radius concern owned by the parent layout on native. Either remove the axis entirely (the banner fills whatever width its parent hands it) or rename to <code>padding: .container | .full</code>.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>position</code> → <code>imagePosition</code>.",
        "body": "More specific and self-documenting. Keep as <code>.left | .right</code> enum.",
        "tag": "Rename"
      },
      {
        "headline": "Consolidate with <a href=\"#\" onclick=\"showPanelById('carousel-item');return false;\">Carousel - Item</a>.",
        "body": "Both components have preamble / heading / description / button / image-with-position slots. The only difference is peek/snap behaviour — which belongs on the carousel container (scroll snap + scale/opacity transforms), not a sibling component. Target: one <code>EBBanner</code> used standalone or inside <code>EBCarousel</code>.",
        "tag": "Family"
      },
      {
        "headline": "Vectorize the chevron.",
        "body": "Swap the raster <code>shape_full</code> for a vector Icon instance — crisp at any scale, token-bound tint.",
        "tag": "Asset"
      },
      {
        "headline": "Add pressed + focused states.",
        "body": "Pressed: 0.98 scale or 6–8% overlay on tap. Focused: 2 px focus ring at <code>border/focus</code>. Banners are always tappable and need both feedback signals.",
        "tag": "State"
      },
      {
        "headline": "Announce as a single actionable element.",
        "body": "VoiceOver and TalkBack should read <em>preamble + heading + description + action label</em> as one announcement with a button/link role.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "bnr-spec-card-1",
        "title": "Within A Container · with preamble",
        "node": "756:82655",
        "description": "The most content-rich variant — preamble + heading + description + button link, with the image on the right and the content column left-aligned. Wraps in a rounded card with 12px outer padding.",
        "previewHtml": "<div class=\"eb-preview eb-preview-bnr eb-preview-bnr--container eb-preview-bnr--img-right\"><div class=\"eb-preview-bnr__card\"><div class=\"eb-preview-bnr__content\"><div class=\"eb-preview-bnr__preamble\">Preamble</div><div class=\"eb-preview-bnr__heading\">Heading</div><div class=\"eb-preview-bnr__desc\">Add description here.</div><div class=\"eb-preview-bnr__link\"><span>Button</span><svg class=\"eb-preview-bnr__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"M9 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div><div class=\"eb-preview-bnr__asset\"><div class=\"eb-preview-bnr__asset-disk\"></div><div class=\"eb-preview-bnr__asset-chip\">Replace me</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Property",
                "value": "Within A Container",
                "mono": false
              },
              {
                "key": "position",
                "value": "left",
                "mono": false
              },
              {
                "key": "with preamble",
                "value": "yes",
                "mono": false
              },
              {
                "key": "with button",
                "value": "yes",
                "mono": false
              },
              {
                "key": "with icon",
                "value": "no",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Card bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Card bg token",
                "value": "banner/color/bg",
                "mono": true
              },
              {
                "key": "Preamble",
                "value": "#072592 (60%)",
                "mono": true
              },
              {
                "key": "Heading",
                "value": "#072592",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Action label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Chevron tint",
                "value": "#005CE5",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Outer frame",
                "value": "360 &#215; 155 (hug)",
                "mono": true
              },
              {
                "key": "Outer padding",
                "value": "12 (space/space-12)",
                "mono": true
              },
              {
                "key": "Inner card padding",
                "value": "16",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "radius/radius-3 (8px)",
                "mono": true
              },
              {
                "key": "Content column",
                "value": "216 (pl=120 for image)",
                "mono": true
              },
              {
                "key": "Content gap",
                "value": "2 lines &#183; 16 before button",
                "mono": true
              },
              {
                "key": "Image area",
                "value": "360 &#215; 152 absolute",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "24 &#215; 24",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Preamble style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Preamble font",
                "value": "Proxima Soft Bold &#183; 12/12 &#183; +0.5",
                "mono": true
              },
              {
                "key": "Heading style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Heading font",
                "value": "Proxima Soft Bold &#183; 18/23 &#183; +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold &#183; 12/18",
                "mono": true
              },
              {
                "key": "Action label",
                "value": "Secondary/Heavy/Base &#183; 14/20",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBBanner</span><span class=\"syn-punc\">(</span>\n    preamble<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"LIMITED TIME\"</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Extra 10&#37; off weekends\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Use code SAVE10 at checkout\"</span><span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.button</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Shop now\"</span><span class=\"syn-punc\">) {</span> <span class=\"syn-cmt\">/* tap */</span> <span class=\"syn-punc\">},</span>\n    asset<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.image</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"banner-art\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebBannerLayout</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.container</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBBanner</span><span class=\"syn-punc\">(</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"LIMITED TIME\"</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Extra 10&#37; off weekends\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Use code SAVE10 at checkout\"</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBannerAction</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Button</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Shop now\"</span><span class=\"syn-punc\">) {</span> <span class=\"syn-cmt\">/* tap */</span> <span class=\"syn-punc\">},</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBannerLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Container</span><span class=\"syn-punc\">,</span>\n    asset <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"banner-art\"</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "bnr-spec-card-2",
        "title": "Full Width · with button",
        "node": "756:82667",
        "description": "Edge-to-edge variant — no outer padding, no corner radius. The banner's own 16px padding sits directly against the screen edges. Used when the banner is the hero element of the section.",
        "previewHtml": "<div class=\"eb-preview eb-preview-bnr eb-preview-bnr--full eb-preview-bnr--img-right\"><div class=\"eb-preview-bnr__card\"><div class=\"eb-preview-bnr__content\"><div class=\"eb-preview-bnr__heading\">Heading</div><div class=\"eb-preview-bnr__desc\">Add description here.</div><div class=\"eb-preview-bnr__link\"><span>Button</span><svg class=\"eb-preview-bnr__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"M9 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div><div class=\"eb-preview-bnr__asset\"><div class=\"eb-preview-bnr__asset-disk\"></div><div class=\"eb-preview-bnr__asset-chip\">Replace me</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Property",
                "value": "Full Width",
                "mono": false
              },
              {
                "key": "position",
                "value": "right",
                "mono": false
              },
              {
                "key": "with preamble",
                "value": "no",
                "mono": false
              },
              {
                "key": "with button",
                "value": "yes",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Card bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Heading",
                "value": "#072592",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Action label",
                "value": "#005CE5",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width × Height",
                "value": "360 &#215; 119 (hug)",
                "mono": true
              },
              {
                "key": "Outer padding",
                "value": "0 (full-width)",
                "mono": true
              },
              {
                "key": "Inner padding",
                "value": "16",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "0",
                "mono": true
              },
              {
                "key": "Content column",
                "value": "184",
                "mono": true
              },
              {
                "key": "Image area",
                "value": "360 &#215; 152 absolute",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Heading style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Action label",
                "value": "Secondary/Heavy/Base",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBBanner</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Weekend rewards\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Earn double points every Saturday\"</span><span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.button</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Learn more\"</span><span class=\"syn-punc\">) {</span> <span class=\"syn-cmt\">/* tap */</span> <span class=\"syn-punc\">},</span>\n    asset<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.image</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"banner-art\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebBannerLayout</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.fullWidth</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBBanner</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Weekend rewards\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Earn double points every Saturday\"</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBannerAction</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Button</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Learn more\"</span><span class=\"syn-punc\">) {</span> <span class=\"syn-punc\">},</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBannerLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">FullWidth</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "bnr-spec-card-3",
        "title": "Within A Container · icon · no action",
        "node": "756:82657",
        "description": "Icon-led variant — replaces the image with a drawn grey circle placeholder. No action CTA. Used when the banner is informational rather than promotional.",
        "previewHtml": "<div class=\"eb-preview eb-preview-bnr eb-preview-bnr--container eb-preview-bnr--img-left\"><div class=\"eb-preview-bnr__card\"><div class=\"eb-preview-bnr__asset eb-preview-bnr__asset--icon\"><div class=\"eb-preview-bnr__icon-dot\"></div></div><div class=\"eb-preview-bnr__content\"><div class=\"eb-preview-bnr__heading\">Heading</div><div class=\"eb-preview-bnr__desc\">This is a description for this banner. This is a description for this banner.</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Property",
                "value": "Within A Container",
                "mono": false
              },
              {
                "key": "position",
                "value": "left",
                "mono": false
              },
              {
                "key": "with icon",
                "value": "yes",
                "mono": false
              },
              {
                "key": "with button",
                "value": "no",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Card bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Icon placeholder",
                "value": "#C2C6CF",
                "mono": true
              },
              {
                "key": "Heading",
                "value": "#072592",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Outer frame",
                "value": "360 &#215; 176 (hug)",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "19.7 &#215; 19.7 circle",
                "mono": true
              },
              {
                "key": "Content column",
                "value": "240 (pl=119)",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "4 between icon and heading",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Heading style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBBanner</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Service update\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Maintenance window tonight at 11 PM\"</span><span class=\"syn-punc\">,</span>\n    leadingAsset<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"info.circle.fill\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebBannerLayout</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.container</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBBanner</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Service update\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Maintenance window tonight at 11 PM\"</span><span class=\"syn-punc\">,</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBannerLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Container</span><span class=\"syn-punc\">,</span>\n    leadingAsset <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Info</span><span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span></code>"
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
          "figma": "<code>Property: Within A Container | Full Width</code>",
          "swift": "<code>padding: container | none</code> <em>(or drop)</em>",
          "compose": "Parent layout"
        },
        {
          "figma": "<code>position: left | right</code>",
          "swift": "<code>imagePosition: left | right</code>",
          "compose": "<code>imagePosition: .left</code>"
        },
        {
          "figma": "<code>with preamble</code>",
          "swift": "<code>preamble?: String</code>",
          "compose": "<code>preamble: String?</code>"
        },
        {
          "figma": "<code>with link</code> + <code>with button</code>",
          "swift": "<code>action: .none | .link | .button</code>",
          "compose": "<code>action: EBBannerAction?</code>"
        },
        {
          "figma": "<code>with icon</code>",
          "swift": "<code>leadingAsset</code> slot",
          "compose": "<code>leadingAsset: () -&gt; AnyView</code>"
        },
        {
          "figma": "(Banner Asset Placeholder instance)",
          "swift": "<code>background: Image | Illustration</code> slot",
          "compose": "<code>background: AnyView</code>"
        },
        {
          "figma": "(raster chevron)",
          "swift": "vector Icon",
          "compose": "Built into <code>.link</code>/<code>.button</code> action"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap: () -&gt; Void</code>",
          "compose": "<code>onTap: (() -&gt; Void)?</code>"
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
        "requirement": "Role announcement",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code> when <code>action</code> is set.",
        "android": "<code>Role.Button</code> inside <code>semantics</code>."
      },
      {
        "requirement": "Decorative image",
        "ios": "<code>.accessibilityHidden(true)</code> on the background image view.",
        "android": "<code>contentDescription = null</code> on the background <code>Image</code>."
      },
      {
        "requirement": "Focus ring",
        "ios": "Default SwiftUI focus ring (tvOS + iPadOS keyboard nav).",
        "android": "D-pad focus: 2 dp outline at <code>border/focus</code>."
      },
      {
        "requirement": "Min touch target",
        "ios": "360 × (93-176) ≫ 44 pt ✓",
        "android": "360 × (93-176) ≫ 48 dp ✓"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Banner for in-flow promo / info callouts between content sections. Keep the heading to 1-2 lines.",
        "dontText": "Use both a link and a button — action is single-CTA by design."
      },
      {
        "doText": "Pick imagePosition based on reading flow — LTR locales usually prefer .left image + right-aligned text.",
        "dontText": "Stack Banner inside a carousel — compose EBBanner inside EBCarousel instead."
      },
      {
        "doText": "Use preamble for category context (PROMO, NEW, TIP). Let the parent layout own outer padding.",
        "dontText": "Bake text into the image — background is decorative only. Don't ship the drawn-circle icon placeholder."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Sparse cartesian — 5 boolean-ish axes × 2 container modes yields 64 combos; 20 ship. Container-padding axis conflates layout with identity."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Property names use spaces (<code>with link</code>, <code>with button</code>, <code>with preamble</code>, <code>with icon</code>). <code>Property</code> is a meta-name. <code>with link</code> + <code>with button</code> encode mutually exclusive CTAs as two booleans."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bind to <code>main/banner/color/*</code>; radii to <code>radius/radius-3</code>; spacing to <code>space/space-*</code>; bg to <code>main/banner/color/bg</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Image is an instance (not a slot); container-padding axis doesn't map to native; icon-only asset axis is rigid."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only Default — no pressed, focused, or disabled for a tappable banner."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Raster <code>shape_full</code> chevron. Drawn grey circle icon placeholder. Image asset is a separate component instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on property renames, axis collapse, and slot adoption."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 20,
      "description": "<code>Property</code> (2) × <code>position</code> (2) × <code>with link</code> × <code>with button</code> × <code>with preamble</code> × <code>with icon</code> — if all boolean combinations shipped, 2 × 2 × 2 × 2 × 2 × 2 = 64 variants. The author pruned invalid combos (<code>with link=yes</code> + <code>with button=yes</code>, <code>with icon=yes</code> + <code>with button=yes</code>, etc.) and shipped <strong>20</strong> variants — 10 per <code>Property</code> mode, mirrored across <code>position=left|right</code>.",
      "columns": [
        "Content shape",
        "Property",
        "Count",
        "Example nodes (left · right)"
      ],
      "rows": [
        {
          "cells": [
            "<strong>heading + desc + button</strong>",
            "Within A Container",
            "2",
            "<code>756:82659</code> · <code>756:82653</code>"
          ]
        },
        {
          "cells": [
            "heading + desc + button",
            "Full Width",
            "2",
            "<code>756:82669</code> · <code>756:82667</code>"
          ]
        },
        {
          "cells": [
            "<strong>heading + desc + icon (no action)</strong>",
            "Within A Container",
            "2",
            "<code>756:82657</code> · <code>756:82658</code>"
          ]
        },
        {
          "cells": [
            "heading + desc + icon (no action)",
            "Full Width",
            "2",
            "<code>756:82668</code> · <code>756:82672</code>"
          ]
        },
        {
          "cells": [
            "<strong>preamble + heading + desc + button</strong>",
            "Within A Container",
            "2",
            "<code>756:82655</code> · <code>756:82656</code>"
          ]
        },
        {
          "cells": [
            "preamble + heading + desc + button",
            "Full Width",
            "2",
            "<code>756:82664</code> · <code>756:82662</code>"
          ]
        },
        {
          "cells": [
            "<strong>heading + desc + link</strong>",
            "Within A Container",
            "2",
            "<code>756:82654</code> · <code>756:82671</code>"
          ]
        },
        {
          "cells": [
            "heading + desc + link",
            "Full Width",
            "2",
            "<code>756:82663</code> · <code>756:82670</code>"
          ]
        },
        {
          "cells": [
            "<strong>heading + desc (no action)</strong>",
            "Within A Container",
            "2",
            "<code>756:82665</code> · <code>756:82666</code>"
          ]
        },
        {
          "cells": [
            "heading + desc (no action)",
            "Full Width",
            "2",
            "<code>756:82661</code> · <code>756:82660</code>"
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
      "header": "Initial Assessment · node 756:82673",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename space-separated booleans, collapse link/button into one action enum, add leading asset + background slots, vectorize chevron, add pressed state, consolidate with Carousel - Item. <span class=\"tag-open tag-c1 tag-c2 tag-c4 tag-c5 tag-c6 tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — Sparse cartesian axes</strong> — 5 boolean-ish axes × 2 container modes = 64 combos; 20 ship. Invalid combos pruned by convention, not by schema. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Property names with spaces</strong> — <code>with link</code>, <code>with button</code>, <code>with preamble</code>, <code>with icon</code>, and meta-named <code>Property</code>. Mutually exclusive CTAs modeled as independent booleans. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Image slot + container-padding axis</strong> — Image is a sibling-component instance, not a Figma Slot. <code>Property=Within A Container | Full Width</code> conflates layout with identity. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Missing interaction states</strong> — No pressed, focused, or disabled for a tappable banner. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster chevron + drawn icon placeholder</strong> — Vectorize chevron; swap drawn circle for a leading asset slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on renames, axis collapse, and slot adoption. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
