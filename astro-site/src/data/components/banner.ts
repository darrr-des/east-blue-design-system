import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/banner.js`.
// Panel mirrors the property panel of set 4430:14807, in its order: four
// variant axes and one boolean. Asset Slot (24 items), Leading Asset Slot
// (6) and Icon Slot (6) are SLOTs and get no control.
const bannerDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'imagePosition',
        prop: 'imageposition',
        defaultValue: 'right',
        options: [
          { value: 'right', label: 'Right' },
          { value: 'left',  label: 'Left' },
        ],
      },
      {
        label: 'Action',
        prop: 'action',
        defaultValue: 'button',
        options: [
          { value: 'button', label: 'Button' },
          { value: 'none',   label: 'None' },
          { value: 'link',   label: 'Link' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'pressed',  label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'hasLeadingAsset',
        prop: 'hasleadingasset',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true',  label: 'True' },
        ],
      },
      { label: 'hasPreamble', prop: 'haspreamble', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
    ],
  },
];

export const banner: ComponentData = {
  "meta": {
    "slug": "banner",
    "name": "Banner",
    "node": "4430:14807",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4430-14807",
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"bnr-demo-preview\"><div class=\"eb-preview eb-preview-bnr eb-preview-bnr--container eb-preview-bnr--img-left\"><div class=\"eb-preview-bnr__card\"><div class=\"eb-preview-bnr__asset\"><div class=\"eb-preview-bnr__asset-disk\"></div><div class=\"eb-preview-bnr__asset-chip\">Replace me</div></div><div class=\"eb-preview-bnr__content\"><div class=\"eb-preview-bnr__heading\">Heading</div><div class=\"eb-preview-bnr__desc\">Add description here.</div><div class=\"eb-preview-bnr__link\"><span>Button</span><svg class=\"eb-preview-bnr__chev\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"M9 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Property</span><select id=\"bnr-ctrl-property\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"container\" selected=\"\">Within A Container</option><option value=\"full\">Full Width</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">position</span><select id=\"bnr-ctrl-position\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"left\" selected=\"\">left</option><option value=\"right\">right</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">with preamble</span><select id=\"bnr-ctrl-preamble-flag\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">with icon</span><select id=\"bnr-ctrl-icon-flag\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">action</span><select id=\"bnr-ctrl-action-flag\" class=\"demo-panel-select\" onchange=\"_bnrUpdate()\"><option value=\"button\" selected=\"\">with button</option><option value=\"link\">with link</option><option value=\"none\">none</option></select></div></div></div></div>",
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "bnr-spec-main",
        "demoKey": "main",
        "title": "Banner",
        "node": "4430:14807",
        "description": "A 360 × 160 promo card — full-bleed asset, preamble, heading, description and an optional button or link.",
        "previewHtml": "<div id=\"banner-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": bannerDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
                {
                  "key": "imagePosition",
                  "value": "Right",
                  "prop": "imageposition"
                },
                {
                  "key": "Action",
                  "value": "Button",
                  "prop": "action"
                },
                {
                  "key": "State",
                  "value": "Default",
                  "prop": "state"
                },
                {
                  "key": "hasLeadingAsset",
                  "value": "False",
                  "prop": "hasleadingasset"
                },
                {
                  "key": "hasPreamble",
                  "value": "True",
                  "prop": "haspreamble"
                },
                {
                  "key": "⤷ Asset Slot",
                  "value": "Slot · 24 items"
                },
                {
                  "key": "⤷ Leading Asset Slot",
                  "value": "Slot · 6 items",
                  "variants": {
                    "hasleadingasset:false": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "⤷ Icon Slot",
                  "value": "Slot · 6 items",
                  "variants": {
                    "action:none": {
                      "hide": true
                    },
                    "action:link": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Resolved variant",
                  "value": "4430:14808 · 360 × 160",
                  "mono": true,
                  "prop": "variantNode"
                }
              ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
                {
                  "key": "Container",
                  "value": "#FFFFFF",
                  "token": "—",
                  "swatch": "#FFFFFF"
                },
                {
                  "key": "Preamble",
                  "value": "#072592 at 50%",
                  "token": "—",
                  "swatch": "#7A8CC5",
                  "variants": {
                    "haspreamble:false": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Title",
                  "value": "#072592",
                  "token": "—",
                  "swatch": "#072592"
                },
                {
                  "key": "Description",
                  "value": "#6780A9",
                  "token": "—",
                  "swatch": "#6780A9"
                },
                {
                  "key": "Action label",
                  "value": "#005CE5",
                  "token": "—",
                  "swatch": "#005CE5",
                  "variants": {
                    "action:none": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Pressed overlay",
                  "value": "#020E22 at 24%",
                  "token": "—",
                  "swatch": "#020E22",
                  "variants": {
                    "state:default": {
                      "hide": true
                    },
                    "state:disabled": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Disabled overlay",
                  "value": "#C2CFE5",
                  "token": "—",
                  "swatch": "#C2CFE5",
                  "variants": {
                    "state:default": {
                      "hide": true
                    },
                    "state:pressed": {
                      "hide": true
                    }
                  }
                }
              ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
                {
                  "key": "Size",
                  "value": "360 × 160",
                  "mono": true
                },
                {
                  "key": "Radius",
                  "value": "8px",
                  "mono": true
                },
                {
                  "key": "Asset Slot",
                  "value": "360 × 160",
                  "mono": true
                },
                {
                  "key": "Content",
                  "value": "312 × 112",
                  "mono": true
                },
                {
                  "key": "Padding",
                  "value": "24px",
                  "mono": true
                },
                {
                  "key": "Text column",
                  "value": "312px · x 24",
                  "mono": true,
                  "variants": {
                    "imageposition:left": {
                      "value": "191px · x 145"
                    }
                  }
                },
                {
                  "key": "Text stack",
                  "value": "119px",
                  "mono": true,
                  "variants": {
                    "action:none": {
                      "value": "73px"
                    },
                    "action:link": {
                      "value": "101px"
                    },
                    "haspreamble:false": {
                      "value": "107px"
                    }
                  }
                },
                {
                  "key": "Leading asset",
                  "value": "24 × 24 · gap 4",
                  "mono": true,
                  "variants": {
                    "hasleadingasset:false": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Action row",
                  "value": "45 × 26 · gap 4 · icon 24",
                  "mono": true,
                  "variants": {
                    "action:none": {
                      "hide": true
                    },
                    "action:link": {
                      "value": "Label only"
                    }
                  }
                }
              ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
                {
                  "key": "#preamble",
                  "value": "Primary/Label/Fine",
                  "mono": true,
                  "variants": {
                    "haspreamble:false": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "#title",
                  "value": "Primary/Headlines/Block",
                  "mono": true
                },
                {
                  "key": "#blurb",
                  "value": "Secondary/Bold/Caption",
                  "mono": true
                },
                {
                  "key": "Action #label",
                  "value": "Primary/Label/Small",
                  "mono": true,
                  "variants": {
                    "action:none": {
                      "hide": true
                    }
                  }
                }
              ]
          }
        ],
        "swift": "EBBanner(\n    title: \"Heading\",\n    description: \"Add description here.\",\n    preamble: \"Preamble\",\n)\n    .ebImagePosition(.right)\n    .ebAction(\"Button\") { open() }\n    .ebAsset { Image(\"banner\") }",
        "compose": "EBBanner(\n    preamble = \"Preamble\",\n    title = \"Heading\",\n    description = \"Add description here.\",\n    imagePosition = EBBannerImagePosition.Right,\n    action = EBBannerAction.Button(\"Button\"),\n    asset = { Image(painterResource(R.drawable.banner), null) },\n    onClick = { open() }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> across the 24 variants of set <code>4430:14807</code>. Text and container colours do not change with State; Pressed and Disabled add a full-bleed <code>Overlay</code> frame above the content. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Container",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Title",
            "token": "—",
            "values": [
              "#072592",
              "#072592",
              "#072592"
            ]
          },
          {
            "role": "Preamble",
            "token": "—",
            "values": [
              "#072592 at ~50%",
              "#072592 at ~50%",
              "#072592 at ~50%"
            ]
          },
          {
            "role": "Description",
            "token": "—",
            "values": [
              "#6780A9",
              "#6780A9",
              "#6780A9"
            ]
          },
          {
            "role": "Action label",
            "token": "—",
            "values": [
              "#005CE5",
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Overlay",
            "token": "—",
            "values": [
              "–",
              "#020E22 at 24%",
              "#C2CFE5 (opacity not readable)"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:banner:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.banner.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4430:14807</code>, in panel order, then the three SLOTs. <code>hasLeadingAsset=True</code> ships only with <code>Action=None</code>.",
      "rows": [
        {
          "figma": "imagePosition — Right, Left",
          "swift": "<code>.ebImagePosition(.right / .left)</code>",
          "compose": "<code>imagePosition = EBBannerImagePosition.Right / Left</code>"
        },
        {
          "figma": "Action — Button, None, Link",
          "swift": "<code>.ebAction(String) { }</code> / omit / <code>.ebLink(String) { }</code>",
          "compose": "<code>action = EBBannerAction.Button(..) / null / EBBannerAction.Link(..)</code>"
        },
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "Pressed is the button style; <code>.disabled(true)</code> for Disabled",
          "compose": "Pressed from <code>interactionSource</code>; <code>enabled = false</code>"
        },
        {
          "figma": "hasLeadingAsset — False, True",
          "swift": "<code>.ebLeadingAsset { }</code> — omit for False",
          "compose": "<code>leadingAsset: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasPreamble — boolean",
          "swift": "<code>preamble: String?</code>",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "⤷ Asset Slot — SLOT (360 × 160)",
          "swift": "content of <code>.ebAsset { }</code>",
          "compose": "<code>asset: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "⤷ Leading Asset Slot — SLOT (24 × 24)",
          "swift": "content of <code>.ebLeadingAsset { }</code>",
          "compose": "the value of <code>leadingAsset</code>"
        },
        {
          "figma": "⤷ Icon Slot — SLOT (Chevron Right Small, 24)",
          "swift": "the chevron beside the action label",
          "compose": "the chevron beside the action label"
        },
        {
          "figma": "— <code>#preamble</code> / <code>#title</code> / <code>#blurb</code>",
          "swift": "<code>preamble</code>, <code>title</code>, <code>description</code>",
          "compose": "<code>preamble</code>, <code>title</code>, <code>description</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Banner/EBBanner.swift",
        "compose": "android/components/banner/EBBanner.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Right · Button",
        "swift": "<span class=\"cmt\">// imagePosition=Right, Action=Button, State=Default — 4430:14808, 360 × 160.</span>\nEBBanner(\n    title: \"Send money for free\",\n    description: \"No fees on your first five transfers.\",\n    preamble: \"New\"\n)\n    .ebImagePosition(.right)\n    .ebAction(\"Send now\") { openSend() }\n    .ebAsset { Image(\"banner-send\") }",
        "compose": "<span class=\"cmt\">// imagePosition=Right, Action=Button, State=Default — 4430:14808, 360 × 160.</span>\nEBBanner(\n    preamble = \"New\",\n    title = \"Send money for free\",\n    description = \"No fees on your first five transfers.\",\n    imagePosition = EBBannerImagePosition.Right,\n    action = EBBannerAction.Button(\"Send now\"),\n    asset = { Image(painterResource(R.drawable.banner_send), null) },\n    onClick = { openSend() }\n)"
      },
      {
        "subheading": "Left · Link",
        "swift": "<span class=\"cmt\">// imagePosition=Left, Action=Link, State=Default — 4430:14874, 360 × 160; text column 191 wide.</span>\nEBBanner(\n    title: \"Pay bills in seconds\",\n    description: \"Over 1,000 billers supported.\"\n)\n    .ebImagePosition(.left)\n    .ebLink(\"Learn more\") { openBills() }\n    .ebAsset { Image(\"banner-bills\") }",
        "compose": "<span class=\"cmt\">// imagePosition=Left, Action=Link, State=Default — 4430:14874, 360 × 160; text column 191 wide.</span>\nEBBanner(\n    title = \"Pay bills in seconds\",\n    description = \"Over 1,000 billers supported.\",\n    imagePosition = EBBannerImagePosition.Left,\n    action = EBBannerAction.Link(\"Learn more\"),\n    asset = { Image(painterResource(R.drawable.banner_bills), null) },\n    onClick = { openBills() }\n)"
      },
      {
        "subheading": "Leading asset · no action",
        "swift": "<span class=\"cmt\">// imagePosition=Right, Action=None, hasLeadingAsset=True — 4430:14840, 360 × 160.</span>\nEBBanner(\n    title: \"GInsure\",\n    description: \"Protect what matters.\",\n    preamble: \"Sponsored\"\n)\n    .ebImagePosition(.right)\n    .ebLeadingAsset { Image(\"ginsure\") }\n    .ebAsset { Image(\"banner-insure\") }",
        "compose": "<span class=\"cmt\">// imagePosition=Right, Action=None, hasLeadingAsset=True — 4430:14840, 360 × 160.</span>\nEBBanner(\n    preamble = \"Sponsored\",\n    title = \"GInsure\",\n    description = \"Protect what matters.\",\n    imagePosition = EBBannerImagePosition.Right,\n    leadingAsset = { Image(painterResource(R.drawable.ginsure), null) },\n    asset = { Image(painterResource(R.drawable.banner_insure), null) },\n    onClick = { openInsure() }\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// State=Disabled — 4430:17444, 360 × 160; an Overlay frame covers the card.</span>\nEBBanner(\n    title: \"Coming soon\",\n    description: \"This offer is not available yet.\"\n)\n    .ebAction(\"Button\") { }\n    .disabled(true)\n    .ebAsset { Image(\"banner-soon\") }",
        "compose": "<span class=\"cmt\">// State=Disabled — 4430:17444, 360 × 160; an Overlay frame covers the card.</span>\nEBBanner(\n    title = \"Coming soon\",\n    description = \"This offer is not available yet.\",\n    action = EBBannerAction.Button(\"Button\"),\n    enabled = false,\n    asset = { Image(painterResource(R.drawable.banner_soon), null) },\n    onClick = { }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Card role",
        "ios": "One <code>Button</code> wrapping the card; label reads preamble, title then description.",
        "android": "<code>Modifier.clickable(role = Role.Button)</code> with a merged <code>contentDescription</code>."
      },
      {
        "requirement": "Asset",
        "ios": "The artwork is decorative when the text carries the message — <code>.accessibilityHidden(true)</code>.",
        "android": "<code>contentDescription = null</code> on the asset."
      },
      {
        "requirement": "Action",
        "ios": "The label is 26 tall — expand the tap target to 44pt, or let the whole card be the target.",
        "android": "48dp minimum; <code>Modifier.minimumInteractiveComponentSize()</code>."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code>; the overlay is presentation only.",
        "android": "<code>enabled = false</code>; mark the overlay <code>clearAndSetSemantics {}</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Text sits over a swappable image, so contrast depends on the asset. On white: #072592 is 12.44:1, #6780A9 4.01:1 at 12pt (below 4.5:1), #005CE5 5.10:1. Under the Disabled overlay every ratio drops further.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Keep the artwork on the side imagePosition names, so it never sits under the text.",
        "dontText": "Don’t put the subject of the image behind the text column."
      },
      {
        "doText": "Use Link for a soft, secondary destination and Button for the primary one.",
        "dontText": "Don’t ship Action=None with a card that is still tappable — there is no visible affordance."
      },
      {
        "doText": "Keep the heading to one line and the description to two; the frame is fixed at 160.",
        "dontText": "Don’t rely on the card growing — longer copy overflows rather than expands."
      },
      {
        "doText": "Use the leading asset for a partner or product mark beside the preamble.",
        "dontText": "Don’t pair a leading asset with an action — the set has no such variant."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>container</code>, <code>Asset Slot</code>, <code>content</code>, <code>learn-more</code> and <code>Overlay</code> are semantic, but the text layers keep the <code>#</code> sigil and the stack is spaced with <code>_space_2</code> / <code>_space_16</code> instances instead of auto-layout gaps."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>imagePosition</code> is camelCase while <code>Action</code> and <code>State</code> are PascalCase, and <code>hasLeadingAsset</code> is a variant axis with False/True rather than a boolean property like <code>hasPreamble</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All four text layers resolve <code>matched</code>. Colour bindings cannot be read with the plugin, and the Disabled overlay’s opacity is not readable at all."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one <code>EBBanner</code> with an asset slot and an optional action, but the fixed 360 × 160 frame with a 119-tall stack inside a 112 frame does not translate to a native layout that grows with text."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed and Disabled on every position and action."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Three real SLOTs — Asset (24 items), Leading Asset (6) and Icon (6); the chevron is an instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Four axes and one boolean are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 24,
      "description": "<code>imagePosition</code> (2) × <code>Action</code> (3) × <code>State</code> (3) × <code>hasLeadingAsset</code> (2) would be 36; 24 are built, because <code>hasLeadingAsset=True</code> ships only with <code>Action=None</code>. <code>hasPreamble</code> is a boolean and adds none.",
      "columns": [
        "imagePosition",
        "Action",
        "State",
        "hasLeadingAsset",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Right",
            "Button",
            "Default",
            "False",
            "<code>4430:14808</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "Button",
            "Pressed",
            "False",
            "<code>4430:17360</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "Button",
            "Disabled",
            "False",
            "<code>4430:17444</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "Link",
            "Default",
            "False",
            "<code>4430:14862</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "Link",
            "Pressed",
            "False",
            "<code>4430:20472</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "Link",
            "Disabled",
            "False",
            "<code>4430:20490</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "None",
            "Default",
            "False",
            "<code>4430:14886</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "None",
            "Pressed",
            "False",
            "<code>4430:20556</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "None",
            "Disabled",
            "False",
            "<code>4430:20566</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "None",
            "Default",
            "True",
            "<code>4430:14840</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "None",
            "Pressed",
            "True",
            "<code>4430:20404</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Right",
            "None",
            "Disabled",
            "True",
            "<code>4430:20418</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "Button",
            "Default",
            "False",
            "<code>4430:14824</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "Button",
            "Pressed",
            "False",
            "<code>4430:17938</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "Button",
            "Disabled",
            "False",
            "<code>4430:17972</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "Link",
            "Default",
            "False",
            "<code>4430:14874</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "Link",
            "Pressed",
            "False",
            "<code>4430:20508</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "Link",
            "Disabled",
            "False",
            "<code>4430:20526</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "None",
            "Default",
            "False",
            "<code>4430:14895</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "None",
            "Pressed",
            "False",
            "<code>4430:20576</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "None",
            "Disabled",
            "False",
            "<code>4430:20586</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "None",
            "Default",
            "True",
            "<code>4430:14851</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "None",
            "Pressed",
            "True",
            "<code>4430:20432</code>",
            "360 × 160"
          ]
        },
        {
          "cells": [
            "Left",
            "None",
            "Disabled",
            "True",
            "<code>4430:20446</code>",
            "360 × 160"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Repointed to the 2026 Working File Banner · node 4430:14807",
      "rows": [
        {
          "body": "<strong>This page now documents the rebuilt Banner.</strong> It had been on the Sticker Sheets node <code>756:82673</code> — 20 variants across <code>Property</code> / <code>position</code> and four boolean-ish axes. The Working File set <code>4430:14807</code> carries 24 variants on <code>imagePosition</code> × <code>Action</code> × <code>State</code> × <code>hasLeadingAsset</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong>, in panel order, with <code>hasPreamble</code> as the only boolean. <code>Asset Slot</code> (24 items), <code>Leading Asset Slot</code> (6) and <code>Icon Slot</code> (6) are listed without controls. Three cards on retired nodes were replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Every variant is 360 × 160 with a full-bleed Asset Slot; <code>content</code> is 312 × 112 at 24 padding, and <code>imagePosition=Left</code> narrows the text column to 191 and pushes it to x 145.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>#preamble</code> → <code>Primary/Label/Fine</code>, <code>#title</code> → <code>Primary/Headlines/Block</code>, <code>#blurb</code> → <code>Secondary/Bold/Caption</code>, action <code>#label</code> → <code>Primary/Label/Small</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live panel</strong> — install <code>com.eastblue.ds:banner:2.0.0</code>, a nine-row mapping, four snippets and a 24-row inventory replacing the 20-row one.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>12 of 36 combinations are not built.</strong> <code>hasLeadingAsset=True</code> ships only with <code>Action=None</code>, so the panel snaps to a built variant. Whether the pairing is deliberate is for the owner to confirm. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The text stack is taller than its frame.</strong> At the default it is 12 + 23 + 2 + 36 + 2 + 16 + 2 + 26 = 119 inside a 112 <code>content</code> frame, so Figma centres it and it overflows 3.5 top and bottom. On a fixed 160 card, longer copy overflows rather than grows. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>The stack is spaced with <code>_space_2</code> / <code>_space_16</code> instances</strong> rather than auto-layout gaps, and the text layers keep the <code>#</code> sigil. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Action=Link stretches its button instance.</strong> The <code>Button - XSmall</code> instance measures 324 × 43 inside the 312 column — 12 wider — while only the label renders. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Axis naming is mixed</strong> — <code>imagePosition</code> is camelCase beside <code>Action</code> and <code>State</code>, and <code>hasLeadingAsset</code> is a variant axis with False/True while <code>hasPreamble</code> is a real boolean. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The preamble renders lighter than its fill.</strong> <code>#preamble</code> reports <code>#072592</code> bound to the same variable as <code>#title</code>, but the export shows it much lighter — the layer carries node opacity, which the plugin does not report. The preview uses 50% to match the export and the card says so. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Disabled overlay’s opacity is not readable</strong> with the plugin. The fill is <code>#C2CFE5</code> and the export shows the artwork through it, so the preview uses 60% and the card says so. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The set sits in a section named “[NEW] Banner (Don’t Use)”.</strong> It is the only Banner of this shape in the file, so this page follows it — worth confirming the section label is stale. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the Sticker Sheets component</strong> — traits, issues and recommendations were scored against <code>756:82673</code>. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
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
