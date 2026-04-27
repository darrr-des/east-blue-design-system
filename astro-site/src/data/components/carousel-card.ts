import type { ComponentData } from '../types';

export const carouselCard: ComponentData = {
  "meta": {
    "slug": "carousel-card",
    "name": "Carousel Card",
    "node": "23:121311",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=23-121311",
    "description": "A tappable card used inside a horizontally scrolling carousel — image, title, and optional description.",
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
    "navGroup": "Carousel"
  },
  "overview": {
    "inContextNote": "Carousel Card lives in a horizontal scroller — typically a \"Featured\" or \"For You\" rail on a home or category screen. Cards are peeked (part of the next one visible) to signal scrollability.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ccard-demo-preview\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--default\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">title</span><input type=\"text\" id=\"ccard-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Title\" oninput=\"_ccardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"ccard-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description here. Description here.\" oninput=\"_ccardUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"ccard-ctrl-type\" class=\"demo-panel-select\" onchange=\"_ccardUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"with-icon\">with icon</option><option value=\"skeleton\">skeleton loader</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works across \"featured\", \"services\", \"articles\" carousels, but is one of 5 near-duplicate Carousel components — reuse is fragmented across the family."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Banner ships a hardcoded \"replace-this-asset\" PNG + a purple <code>#e6e1ef</code> multiply dimmer + a hardcoded <code>#c2c6cf</code> icon circle. None of these are instance slots, so consumers can't swap media or icons cleanly."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>type</code> enum mixes content axes with a loading state. Naming diverges from the sibling <code>Carousel - Item</code> family, which uses <code>position</code> and a different anatomy."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Stacks cleanly into a horizontal scroller. Skeleton state is first-class (good), but the icon badge isn't an Icon instance so it can't be composed with the DS icon set."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type=default",
        "notes": "Banner image + title + 2-line description. No overlay."
      },
      {
        "state": "With icon",
        "ios": "yes",
        "android": "yes",
        "property": "type=with icon",
        "notes": "Adds a bottom gradient shadow on the banner and a circular icon badge (30×30, blue fill) at the bottom-left of the banner."
      },
      {
        "state": "Skeleton (loading)",
        "ios": "yes",
        "android": "yes",
        "property": "type=skeleton loader",
        "notes": "Gray block for the banner; bar placeholders for title + 2 description lines."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Card is tappable (navigates to detail) — needs a pressed state: scale-down 0.98 or a subtle bg tint."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Keyboard/D-pad navigation — needs an outline ring for TV/tablet surfaces and accessibility."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "<code>type</code> enum conflates a content variant with a loading state.",
        "body": "<code>default</code> and <code>with icon</code> describe content shape; <code>skeleton loader</code> describes a loading state. Split into two orthogonal axes: <code>variant = default | with-icon</code> and <code>isLoading: Boolean</code> (or a sibling <code>CarouselCardSkeleton</code> component).",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Banner is a hardcoded raster placeholder.",
        "body": "Ships a static <code>replace-this-asset</code> PNG plus a purple <code>#e6e1ef</code> <code>mix-blend-multiply</code> dimmer layer. Neither is a Figma Slot — designers must detach and redraw to swap media. Expose an image slot and drop the fixed dimmer (tint should be optional + tokenized).",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Icon badge on \"with icon\" variant is a filled circle, not an Icon instance.",
        "body": "A <code>#c2c6cf</code> 24×24 circle sits inside a 30×30 blue pill — there's no instance swap, so brand icons, service glyphs, or Avatars can't be dropped in without detaching.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed or focused state.",
        "body": "Carousel cards are tappable and navigate somewhere — pressed feedback (scale or tint) is expected, and focused is needed for keyboard/D-pad surfaces. Only Default + skeleton are modeled today.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the <code>type</code> split, the image/icon slots, and the family consolidation land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate Carousel Card + Carousel - Discount Card into a single <code>Carousel Card</code>.",
        "body": "The two are the same anatomy — 140-wide vertical card with banner + block-content — differing only in visual treatment. Merge into one component with a <code>variant</code> prop (<code>default</code> / <code>discount</code>) and let the discount-specific overlay (price tag, strikethrough, etc.) live as an overlay slot. Today's 5-component family collapses to 2: <code>Carousel Card</code> and <code>Carousel Item</code>.",
        "tag": "Family"
      },
      {
        "headline": "Consolidate Carousel - Item + Carousel Item - Center + Carousel Item - Side into a single <code>Carousel Item</code>.",
        "body": "\"Center\" and \"side\" describe a peek carousel's runtime layout position, not a component variant — a carousel layout computes which item is center vs side, it shouldn't be baked into the component as an enum. Merge these 3 into one <code>Carousel Item</code> and let the parent carousel apply the peek transform.",
        "tag": "Family"
      },
      {
        "headline": "Split <code>type</code> into <code>variant</code> + <code>isLoading</code>.",
        "body": "<code>variant = default | with-icon</code> describes content shape. <code>isLoading: Boolean</code> (or a dedicated <code>CarouselCardSkeleton</code> sibling) describes the loading state. Keeps content and state axes orthogonal and matches how Generic Card proposes to handle skeleton.",
        "tag": "Property"
      },
      {
        "headline": "Adopt Figma Slots for banner and icon badge.",
        "body": "Banner becomes an image slot accepting any frame; icon badge becomes an Icon / Avatar instance slot. Native maps banner → <code>AsyncImage</code> / <code>AsyncImage</code> slot and icon → <code>@ViewBuilder</code> (SwiftUI) or <code>@Composable</code> (Compose).",
        "tag": "Slot"
      },
      {
        "headline": "Replace the hardcoded purple dimmer with an optional tint token.",
        "body": "The <code>#e6e1ef</code> <code>mix-blend-multiply</code> layer is a loudly-colored overlay that shouldn't ship as a default on every banner. Make it an optional <code>overlay</code> prop bound to <code>main/carousel/color/overlay</code> (currently unbound).",
        "tag": "Token"
      },
      {
        "headline": "Add pressed + focused states.",
        "body": "Pressed: scale 0.98 or bg tint on the full card. Focused: 2px outline ring in <code>border/focus</code>. Tappable components need both.",
        "tag": "State"
      },
      {
        "headline": "Rename to clarify hierarchy.",
        "body": "After consolidation, <code>Carousel Card</code> (this component + Discount Card) handles the full-width banner pattern; <code>Carousel Item</code> (peek variants) handles the peek pattern. Avoid overlap in naming between the two.",
        "tag": "Rename"
      },
      {
        "headline": "Document the skeleton treatment as a shared DS convention.",
        "body": "Carousel Card, Generic Card, and other card primitives all ship first-class skeletons — call out the pattern in the guidelines so card-family consistency holds as more components adopt it.",
        "tag": "Docs"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('generic-card');return false;\">Generic Card</a> (horizontal list row) — same \"card + skeleton + tappable\" pattern, different layout. Keep skeleton treatment aligned across both.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default",
        "title": "Default",
        "node": "23:121312",
        "description": "Banner image + title + 2-line description. The banner ships a placeholder PNG dimmed by a purple multiply layer — replace both with your real media.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Aspect",
                "value": "3:2 hero image",
                "mono": false
              },
              {
                "key": "Pagination",
                "value": "dots",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Heading",
                "value": "#2340A9",
                "mono": true
              },
              {
                "key": "Heading token",
                "value": "carousel/color/label-header",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Description token",
                "value": "carousel/color/description",
                "mono": true
              },
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "bg/color-bg-main",
                "mono": true
              },
              {
                "key": "Active dot",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active dot token",
                "value": "bg/color-bg-primary",
                "mono": true
              },
              {
                "key": "Inactive dot",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Inactive dot token",
                "value": "bg/color-bg-strong",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Card width",
                "value": "140",
                "mono": true
              },
              {
                "key": "Banner size",
                "value": "140 × 140",
                "mono": true
              },
              {
                "key": "Banner radius",
                "value": "4 (radius/radius-1)",
                "mono": true
              },
              {
                "key": "Gap (banner ↔ content)",
                "value": "12",
                "mono": true
              },
              {
                "key": "Title → description gap",
                "value": "4",
                "mono": true
              },
              {
                "key": "Total height",
                "value": "215",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18 · 0",
                "mono": true
              }
            ]
          },
          {
            "label": "Composed sub-components",
            "rows": [
              {
                "key": "Banner (today)",
                "value": "Hardcoded raster",
                "mono": false
              },
              {
                "key": "Banner (proposed)",
                "value": "Image slot",
                "mono": false
              },
              {
                "key": "Dimmer (today)",
                "value": "Purple multiply layer",
                "mono": false
              },
              {
                "key": "Dimmer (proposed)",
                "value": "Optional tint token",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarousel</span><span class=\"syn-punc\">(</span>items<span class=\"syn-punc\">: </span>cards<span class=\"syn-punc\">) {</span> card <span class=\"syn-kw\">in</span>\n    <span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>card<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarousel</span><span class=\"syn-punc\">(</span>items <span class=\"syn-eq\">=</span> cards<span class=\"syn-punc\">) {</span> card <span class=\"syn-punc\">-></span>\n    <span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>card<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "with-icon",
        "title": "With icon",
        "node": "23:121322",
        "description": "Default layout + a bottom-left icon badge on the banner. A gradient shadow along the lower third improves icon contrast against bright imagery.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Has icon",
                "value": "Yes",
                "mono": true
              },
              {
                "key": "Has description",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/card/bg",
                "mono": true
              },
              {
                "key": "Icon container bg",
                "value": "#E8F1FF",
                "mono": true
              },
              {
                "key": "Icon container bg token",
                "value": "main/card/icon/bg",
                "mono": true
              },
              {
                "key": "Title color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title color token",
                "value": "main/card/title",
                "mono": true
              },
              {
                "key": "Description color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Description color token",
                "value": "main/card/description",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "280",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "160",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "20",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "16",
                "mono": true
              },
              {
                "key": "Icon container",
                "value": "48 × 48",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Heading/Small",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Body/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Send money\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Free transfers to GCash users\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"paperplane.fill\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Send money\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Free transfers to GCash users\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span>Send<span class=\"syn-punc\">, </span><span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "skeleton-loader",
        "title": "Skeleton loader",
        "node": "23:121334",
        "description": "Loading placeholder: banner becomes a flat light-gray block; title and description become bar placeholders. Card total height drops to 212 (vs 215 default) due to the 16 top gap in the content block.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-3\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "State",
                "value": "Loading",
                "mono": true
              },
              {
                "key": "Has content",
                "value": "No",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Skeleton bg",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Skeleton bg token",
                "value": "main/skeleton/bg",
                "mono": true
              },
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/card/bg",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "280",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "160",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "20",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "16",
                "mono": true
              },
              {
                "key": "Bar 1 size",
                "value": "120 × 12",
                "mono": true
              },
              {
                "key": "Bar 2 size",
                "value": "180 × 8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text in skeleton state",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>isLoading<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    isLoading <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
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
          "figma": "<code>type: default | with icon | skeleton loader</code>",
          "swift": "<code>variant: default | with-icon</code> <span class=\"muted\">+</span> <code>isLoading: Boolean</code>",
          "compose": "<code>variant: EBCarouselCardVariant</code> <span class=\"muted\">+</span> <code>isLoading: Bool</code>"
        },
        {
          "figma": "(hardcoded raster)",
          "swift": "<code>image: Frame</code> (slot)",
          "compose": "<code>image: () -&gt; Image</code>"
        },
        {
          "figma": "(hardcoded text)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "(hardcoded text)",
          "swift": "<code>description: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "(hardcoded circle)",
          "swift": "<code>icon?: Icon</code> (slot)",
          "compose": "<code>icon: EBIcon?</code>"
        },
        {
          "figma": "(hardcoded purple multiply)",
          "swift": "<code>overlay?: Color</code> (token)",
          "compose": "<code>overlay: Color?</code>"
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
        "ios": "Whole card wrapped in <code>Button</code> with combined <code>accessibilityLabel</code> (title + description).",
        "android": "<code>Modifier.clickable { onClick() }.semantics(mergeDescendants = true)</code> on the column."
      },
      {
        "requirement": "Combined announcement",
        "ios": "\"Send Money, Locally or abroad, same day\" — VoiceOver reads title then description.",
        "android": "Same reading order — TalkBack follows composition."
      },
      {
        "requirement": "Image alt",
        "ios": "If the banner carries meaning, pass <code>accessibilityLabel</code> on the image; otherwise mark as decorative.",
        "android": "<code>contentDescription</code> set when banner is content-bearing, <code>null</code> when decorative."
      },
      {
        "requirement": "Min touch target",
        "ios": "Card is 140×215 — comfortably above 44 pt ✓",
        "android": "140 dp × 215 dp — above 48 dp ✓"
      },
      {
        "requirement": "Loading state",
        "ios": "Announce \"Loading\" once on mount; suppress per-placeholder announcements.",
        "android": "<code>contentDescription = \"Loading\"</code> on the skeleton container."
      },
      {
        "requirement": "Focus ring",
        "ios": "Add a <code>.focused()</code> modifier → 2 px outline for tvOS/iPad keyboard.",
        "android": "<code>Modifier.focusable()</code> + border in <code>border/focus</code> token."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean container / banner / block-content hierarchy. Layer names are semantic."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>type</code> conflates content variant with loading state — split into <code>variant</code> + <code>isLoading</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Title / description / skeleton fills bound to tokens. Banner PNG, purple dimmer, and icon glyph color are not."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly to <code>VStack</code> / <code>Column</code> in a horizontal scroller once image/icon slots and skeleton split land."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default + skeleton built. Missing pressed + focused."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Banner is a raster placeholder PNG; icon is a drawn circle, not an Icon instance; purple dimmer is hardcoded."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on property split, slot adoption, and family consolidation."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "<code>type</code> (3) = <strong>3 variants</strong>. <code>default</code> and <code>with icon</code> share the same overall dimensions (140 × 215); <code>skeleton loader</code> is 140 × 212 due to a different content padding.",
      "columns": [
        "type",
        "Node",
        "Dimensions",
        "Anatomy"
      ],
      "rows": [
        {
          "cells": [
            "<strong>default</strong>",
            "<code>23:121312</code>",
            "140 × 215",
            "Banner + title + 2-line description."
          ]
        },
        {
          "cells": [
            "<strong>with icon</strong>",
            "<code>23:121322</code>",
            "140 × 215",
            "Default + gradient shadow + bottom-left 30×30 icon badge on banner."
          ]
        },
        {
          "cells": [
            "<strong>skeleton loader</strong>",
            "<code>23:121334</code>",
            "140 × 212",
            "Flat banner + 3 bar placeholders (title 16, desc 10, desc 10 @ 97w)."
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
      "header": "Initial Assessment · node 23:121311",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Split <code>type</code> into <code>variant</code> + <code>isLoading</code>, adopt image + icon slots, drop the hardcoded purple dimmer, add pressed/focused states, and consolidate the 5-component Carousel family. <span class=\"tag-open tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>Skeleton pattern acknowledged</strong> — First-class skeleton variant is valuable; keep it when restructuring into <code>EBCarouselCardSkeleton</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>Family consolidation</strong> — 5 Carousel components collapse to 2: <code>Carousel Card</code> (default / discount) and <code>Carousel Item</code> (peek). <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C2 — Type split</strong> — <code>variant</code> for content, <code>isLoading</code> for state. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Image + icon slots</strong> — Replace banner PNG and hardcoded icon circle with Figma Slots. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Pressed / focused</strong> — Tappable card needs both. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on above. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
