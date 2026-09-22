import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/visual-popup.js`.
// Panel mirrors the property panel of set 4120:10317: one variant axis and
// four booleans. The three SLOTs and the nested Close get no control.
const visualPopupDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Layout',
        prop: 'layout',
        defaultValue: 'centered',
        options: [
          { value: 'centered', label: 'Centered' },
          { value: 'surface',  label: 'Surface' },
        ],
      },
      { label: 'hasCloseButton', prop: 'hasclosebutton', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasPreamble', prop: 'haspreamble', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasHeader', prop: 'hasheader', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasSupportingContent', prop: 'hassupportingcontent', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
    ],
  },
];

export const visualPopup: ComponentData = {
  "meta": {
    "slug": "visual-popup",
    "name": "Visual Popup",
    "node": "4120:10317",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4120-10317",
    "description": "An illustrated centered popup used for promos, success moments, and notable announcements.",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "verdict": {
      "kind": "fix",
      "title": "Open issues remain",
      "text": "Variant naming mixes paradigms — <code>Default</code> / <code>2 CTA</code> / <code>Version 2</code> (C2). Hero image is a raster placeholder with \"Replace me\" overlay instead of a swappable image slot (C6). No destructive/error/loading state coverage (C5). Code Connect mappings not registered (C7)."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Visual Popup overlays the app surface to confirm critical actions or onboard users to a new feature.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"180\" height=\"120\" viewBox=\"0 0 180 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          \n          <rect x=\"34\" y=\"6\" width=\"112\" height=\"108\" rx=\"10\" fill=\"#0A2757\" opacity=\".18\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"112\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"50\" y=\"22\" width=\"80\" height=\"80\" rx=\"4\" fill=\"#FFFFFF\"></rect>\n          \n          <rect x=\"50\" y=\"22\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#005CE5\" opacity=\".25\"></rect>\n          <text x=\"90\" y=\"42\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\" opacity=\".6\">Hero image</text>\n          \n          <rect x=\"58\" y=\"62\" width=\"64\" height=\"3\" rx=\"1.5\" fill=\"#0A2757\" opacity=\".85\"></rect>\n          \n          <rect x=\"62\" y=\"69\" width=\"56\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"68\" y=\"73\" width=\"44\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          \n          <rect x=\"58\" y=\"84\" width=\"64\" height=\"10\" rx=\"5\" fill=\"#005CE5\"></rect>\n          <text x=\"90\" y=\"91\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"4.5\" font-weight=\"700\" font-family=\"system-ui\">Okay</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vp-demo-preview\"><svg width=\"200\" height=\"240\" viewBox=\"0 0 200 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"240\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"0.8\"></rect><defs><linearGradient id=\"vpph-337330137\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EAF2FE\"></stop><stop offset=\"100%\" stop-color=\"#C9DCF8\"></stop></linearGradient></defs><path d=\"M0 100 L0 4 Q0 0 4 0 L196 0 Q200 0 200 4 L200 100 Z\" fill=\"url(#vpph-337330137)\"></path><rect x=\"82\" y=\"36.5\" width=\"36\" height=\"27\" rx=\"3.2399999999999998\" fill=\"none\" stroke=\"#6B8FC8\" stroke-width=\"1.4\" opacity=\".75\"></rect><circle cx=\"93.7\" cy=\"45.5\" r=\"3.96\" fill=\"#6B8FC8\" opacity=\".75\"></circle><path d=\"M84.7 60.8 L97.3 48.199999999999996 L104.5 56.3 L110.8 50 L115.3 60.8 Z\" fill=\"#6B8FC8\" opacity=\".75\"></path><text x=\"100\" y=\"128\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Put the title here</text><text x=\"100\" y=\"146\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-weight=\"500\" font-family=\"'BarkAda', system-ui\">Add description here.</text><text x=\"100\" y=\"158\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-weight=\"500\" font-family=\"'BarkAda', system-ui\">Add description here.</text><rect x=\"20\" y=\"190\" width=\"160\" height=\"26\" rx=\"13\" fill=\"#005CE5\"></rect><text x=\"100\" y=\"207\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Okay</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"vp-demo-type\" onchange=\"updateVisualPopupDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"2cta\">2 CTA</option><option value=\"version2\">Version 2</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Three layouts cover info modals, confirmation prompts (single + dual CTA), and onboarding popups (Version 2). Fixed 320 / 312 px width fits standard mobile dialog patterns."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own bg (<code>main/modal-popup/color/bg</code>), <code>Shadow/Depth 0</code>, <code>radius/radius-2</code>, and 24px padding. Composes Button instances rather than redefining button styles."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Variant naming mixes three paradigms: <code>Default</code> (generic), <code>2 CTA</code> (count), <code>Version 2</code> (version). Native enums need a single semantic axis — e.g. <code>single-cta</code> / <code>dual-cta</code> / <code>dismissible</code>. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "All CTAs are real Button instances. Close icon (V2) is a vector instance. Hero image is the only non-component child — see C6."
      }
    ],
    "behavior": [
      {
        "state": "Single CTA",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Default",
        "notes": "Hero (180px) + title + description + primary CTA. Use for info or single-action confirm."
      },
      {
        "state": "Dual CTA",
        "ios": "yes",
        "android": "yes",
        "property": "Type=2 CTA",
        "notes": "Adds a secondary outline + tertiary text button below primary. Use for cancel/confirm pairs."
      },
      {
        "state": "Dismissible (V2)",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Version 2",
        "notes": "Preamble label + title with close icon + content-first layout. Use for onboarding/tutorial popups."
      },
      {
        "state": "Destructive / Error / Loading",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "No variants for destructive confirms or async/loading states. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Variant naming mixes paradigms.",
        "body": "<code>Default</code> (generic), <code>2 CTA</code> (count), and <code>Version 2</code> (version) can't coexist as one enum. Collapse to a single semantic axis: <code>single-cta</code> / <code>dual-cta</code> / <code>dismissible</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No destructive / error / loading state coverage.",
        "body": "Engineers must improvise these for \"Cancel transaction?\", error confirms, and async submit flows.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Hero image is a raster placeholder with \"Replace me\" overlay.",
        "body": "Should be a swappable Image slot (component instance) so product teams override per-popup without editing the master.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the variant naming and asset-slot issues above are resolved.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Collapse <code>Type</code> to one semantic enum.",
        "body": "Values: <code>single-cta</code>, <code>dual-cta</code>, <code>dismissible</code>. Eliminates the version/count/default mix and maps cleanly to an <code>EBVisualPopupKind</code> enum.",
        "tag": "Property"
      },
      {
        "headline": "Replace the raster <code>Modals Asset</code> with a swappable Image slot.",
        "body": "A component placeholder that product teams can instance-swap with their illustration — matches the pattern Avatar uses for its <code>image</code> type.",
        "tag": "Slot"
      },
      {
        "headline": "Add a <code>destructive</code> mode.",
        "body": "Whether as a boolean or a <code>kind=destructive</code> variant — lets destructive confirms (Cancel / Logout / Delete) use red CTAs without bespoke overrides.",
        "tag": "State"
      },
      {
        "headline": "Add a <code>loading</code> state for the primary CTA.",
        "body": "Async submits in popups currently have no documented affordance — reuse the planned Button loading state rather than invent a new pattern.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Layouts",
    "specCards": [
      {
        "cardKey": "vp-spec-main",
        "demoKey": "main",
        "title": "Visual Popup",
        "node": "4120:10317",
        "description": "A modal card with an image slot, title, message and one action. It hugs its stack — 320 × 279 Centered and 312 × 277 Surface with everything on.",
        "previewHtml": "<div id=\"visual-popup-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": visualPopupDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
                {
                  "key": "Layout",
                  "value": "Centered",
                  "prop": "layout"
                },
                {
                  "key": "hasCloseButton",
                  "value": "True",
                  "prop": "hasclosebutton"
                },
                {
                  "key": "hasPreamble",
                  "value": "True",
                  "prop": "haspreamble"
                },
                {
                  "key": "hasHeader",
                  "value": "True",
                  "prop": "hasheader"
                },
                {
                  "key": "hasSupportingContent",
                  "value": "True",
                  "prop": "hassupportingcontent"
                },
                {
                  "key": "⤷ Supporting Content Slot",
                  "value": "Slot · 1 item",
                  "variants": {
                    "hassupportingcontent:false": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "⤷ Image Slot Container",
                  "value": "Slot · 2 items"
                },
                {
                  "key": "⤷ Action Slot Container",
                  "value": "Slot · 2 items"
                },
                {
                  "key": "Close",
                  "value": "Nested instance · 24 × 24",
                  "variants": {
                    "hasclosebutton:false": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Resolved variant",
                  "value": "4120:10318 · 320 × 279",
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
                "key": "Card",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Surface",
                "value": "#F6F9FD",
                "token": "—",
                "swatch": "#F6F9FD",
                "variants": {
                  "layout:centered": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Preamble",
                "value": "#90A8D0",
                "token": "—",
                "swatch": "#90A8D0",
                "variants": {
                  "layout:centered": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "swatch": "#0A2757"
              },
              {
                "key": "Message",
                "value": "#6780A9",
                "token": "—",
                "swatch": "#6780A9"
              },
              {
                "key": "Button",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5"
              },
              {
                "key": "Button label",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Close glyph",
                "value": "#445C85",
                "token": "—",
                "swatch": "#445C85"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
                {
                  "key": "Size",
                  "value": "320 × 279",
                  "mono": true,
                  "prop": "size-readout"
                },
                {
                  "key": "Radius",
                  "value": "6px",
                  "mono": true
                },
                {
                  "key": "Padding",
                  "value": "24px",
                  "mono": true,
                  "variants": {
                    "layout:surface": {
                      "value": "16px"
                    }
                  }
                },
                {
                  "key": "Stack",
                  "value": "image 89 · 24 · title 26 · 16 · message 40 · supporting 24 · action 36 · 24",
                  "mono": true,
                  "variants": {
                    "layout:surface": {
                      "value": "16 · preamble 10 · 4 · title 26 · message 40 · 16 · image 89 · supporting 24 · action 36 · 16"
                    }
                  }
                },
                {
                  "key": "Height",
                  "value": "Hugs the stack",
                  "variants": {}
                },
                {
                  "key": "Image Slot",
                  "value": "320 × 89",
                  "mono": true,
                  "variants": {
                    "layout:surface": {
                      "value": "280 × 89 · radius 6"
                    }
                  }
                },
                {
                  "key": "Title → message",
                  "value": "gap 16",
                  "mono": true,
                  "variants": {
                    "layout:surface": {
                      "value": "gap 0"
                    }
                  }
                },
                {
                  "key": "Preamble → title",
                  "value": "gap 4",
                  "mono": true,
                  "variants": {
                    "layout:centered": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Action Slot",
                  "value": "272 × 36",
                  "mono": true,
                  "variants": {
                    "layout:surface": {
                      "value": "280 × 36"
                    }
                  }
                },
                {
                  "key": "Button radius",
                  "value": "99px",
                  "mono": true
                },
                {
                  "key": "Close",
                  "value": "24 × 24 · top right · y 16",
                  "mono": true,
                  "variants": {
                    "hasclosebutton:false": {
                      "hide": true
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
                "key": "#title",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "#message",
                "value": "Secondary/Default/Base",
                "mono": true
              },
              {
                "key": "Preamble",
                "value": "Primary/Label/Tiny",
                "mono": true,
                "variants": {
                  "layout:centered": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button #label",
                "value": "Primary/Label/Base",
                "mono": true
              }
            ]
          }
        ],
        "swift": "EBVisualPopup(\n    title: \"Put the title here\",\n    message: \"Add description here.\",\n    layout: .centered\n)\n    .ebImage { Image(\"popup\") }\n    .ebAction(\"Label\") { dismiss() }",
        "compose": "EBVisualPopup(\n    title = \"Put the title here\",\n    message = \"Add description here.\",\n    layout = EBVisualPopupLayout.Centered,\n    image = { Image(painterResource(R.drawable.popup), null) },\n    actionLabel = \"Label\",\n    onAction = { dismiss() }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Layout",
        "description": "Read off <code>get_node_info</code> on both variants of set <code>4120:10317</code>. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Centered",
          "Surface"
        ],
        "rows": [
          {
            "role": "Card",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Inner surface",
            "token": "—",
            "values": [
              "–",
              "#F6F9FD"
            ]
          },
          {
            "role": "Preamble",
            "token": "—",
            "values": [
              "–",
              "#90A8D0"
            ]
          },
          {
            "role": "Title",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Message",
            "token": "—",
            "values": [
              "#6780A9",
              "#6780A9"
            ]
          },
          {
            "role": "Button / label",
            "token": "—",
            "values": [
              "#005CE5 / #FFFFFF",
              "#005CE5 / #FFFFFF"
            ]
          },
          {
            "role": "Close glyph",
            "token": "—",
            "values": [
              "#445C85",
              "#445C85"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:visual-popup:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.visualpopup.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4120:10317</code>, in panel order, then the three SLOTs and the text layers.",
      "rows": [
        {
          "figma": "Layout — Centered, Surface",
          "swift": "<code>layout: .centered / .surface</code>",
          "compose": "<code>layout = EBVisualPopupLayout.Centered / Surface</code>"
        },
        {
          "figma": "hasCloseButton — boolean",
          "swift": "<code>.ebOnDismiss { }</code> — omit for False",
          "compose": "<code>onDismiss: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasPreamble — boolean · Surface only",
          "swift": "<code>preamble: String?</code>",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "hasHeader — boolean",
          "swift": "<code>title: String?</code>",
          "compose": "<code>title: String? = null</code>"
        },
        {
          "figma": "hasSupportingContent — boolean",
          "swift": "<code>.ebSupporting { }</code> — omit for False",
          "compose": "<code>supporting: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ Image Slot Container — SLOT · 2 items",
          "swift": "content of <code>.ebImage { }</code>",
          "compose": "<code>image: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ Supporting Content Slot — SLOT · 1 item",
          "swift": "<code>.ebSupporting { }</code>",
          "compose": "<code>supporting: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ Action Slot Container — SLOT · 2 items",
          "swift": "<code>.ebAction(String) { }</code>",
          "compose": "<code>actionLabel: String</code> + <code>onAction: () -&gt; Unit</code>"
        },
        {
          "figma": "<code>Close</code> instance",
          "swift": "<code>.ebOnDismiss { }</code>",
          "compose": "<code>onDismiss: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>#title</code> / <code>#message</code>",
          "swift": "<code>title: String</code>, <code>message: String</code>",
          "compose": "<code>title: String</code>, <code>message: String</code>"
        },
        {
          "figma": "— preamble (Surface, a second <code>#message</code>)",
          "swift": "<code>preamble: String?</code>",
          "compose": "<code>preamble: String? = null</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/VisualPopup/EBVisualPopup.swift",
        "compose": "android/components/visualpopup/EBVisualPopup.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Centered",
        "swift": "<span class=\"cmt\">// Layout=Centered — 4120:10318, 320 × 279.</span>\nEBVisualPopup(\n    title: \"You’re all set\",\n    message: \"Your account is ready to use.\",\n    layout: .centered\n)\n    .ebImage { Image(\"popup-success\") }\n    .ebAction(\"Got it\") { dismiss() }",
        "compose": "<span class=\"cmt\">// Layout=Centered — 4120:10318, 320 × 279.</span>\nEBVisualPopup(\n    title = \"You’re all set\",\n    message = \"Your account is ready to use.\",\n    layout = EBVisualPopupLayout.Centered,\n    image = { Image(painterResource(R.drawable.popup_success), null) },\n    actionLabel = \"Got it\",\n    onAction = { dismiss() }\n)"
      },
      {
        "subheading": "Surface",
        "swift": "<span class=\"cmt\">// Layout=Surface — 4120:10339, 312 × 277.</span>\nEBVisualPopup(\n    title: \"Limited time offer\",\n    message: \"Claim your voucher before Friday.\",\n    preamble: \"Promo\",\n    layout: .surface\n)\n    .ebImage { Image(\"popup-promo\") }\n    .ebAction(\"Claim now\") { claim() }",
        "compose": "<span class=\"cmt\">// Layout=Surface — 4120:10339, 312 × 277.</span>\nEBVisualPopup(\n    preamble = \"Promo\",\n    title = \"Limited time offer\",\n    message = \"Claim your voucher before Friday.\",\n    layout = EBVisualPopupLayout.Surface,\n    image = { Image(painterResource(R.drawable.popup_promo), null) },\n    actionLabel = \"Claim now\",\n    onAction = { claim() }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Dialog role",
        "ios": "Present as a sheet or overlay with <code>.accessibilityAddTraits(.isModal)</code>; focus moves to the title.",
        "android": "<code>Dialog</code> with <code>Modifier.semantics { paneTitle = title }</code>."
      },
      {
        "requirement": "Title",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> on <code>#title</code>.",
        "android": "<code>Modifier.semantics { heading() }</code>."
      },
      {
        "requirement": "Image",
        "ios": "Decorative when the title carries the message — <code>.accessibilityHidden(true)</code>.",
        "android": "<code>contentDescription = null</code>."
      },
      {
        "requirement": "Dismiss",
        "ios": "The 24 × 24 Close needs a 44pt target and a label, and the popup should also dismiss on a background tap.",
        "android": "48dp target; <code>onDismissRequest</code> handles back and outside taps."
      },
      {
        "requirement": "Contrast",
        "ios": "Title #0A2757 is 14.58:1 on white and 13.80:1 on #F6F9FD. Message #6780A9 is 4.01:1 on white at 14pt — below 4.5:1. The Surface preamble #90A8D0 is 2.41:1. White on the #005CE5 button is 5.10:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Centered for a single confirmation moment with one action.",
        "dontText": "Don’t stack two actions — the set ships one Action Slot."
      },
      {
        "doText": "Use Surface when the popup carries a promo image and a preamble.",
        "dontText": "Don’t use Surface for errors; its tinted card reads promotional."
      },
      {
        "doText": "Keep the title to one line and the message to two.",
        "dontText": "Don’t rely on the card growing — both variants are fixed height."
      },
      {
        "doText": "Always provide a dismiss path — the Close instance or a background tap.",
        "dontText": "Don’t set hasCloseButton=False without another way out."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Two different layers are both named <code>#message</code> in the Surface heading — the preamble and the body copy. Generic <code>container</code> / <code>offset</code> frames and a <code>_space_16</code> instance that is 24 tall compound it."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One PascalCase axis, <code>Layout</code>, over two built variants, plus four <code>has*</code> booleans on True/False."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All four text layers resolve <code>matched</code> — Primary/Headlines/Section, Secondary/Default/Base, Primary/Label/Tiny, Primary/Label/Base. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one <code>EBVisualPopup</code> with an image slot and one action, but both variants are fixed-height frames rather than stacks that hug their content."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A static surface; the button carries its own states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Three real SLOTs with swap options (2, 1, 2) and a nested Close instance, but the Image and Supporting Content slots ship empty."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "One axis, four booleans and three slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "<code>Layout</code> (2) = 2 variants, both built; both hug their stack. Four booleans — <code>hasCloseButton</code>, <code>hasPreamble</code>, <code>hasHeader</code>, <code>hasSupportingContent</code> — add none.",
      "columns": [
        "Layout",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Centered",
            "<code>4120:10318</code>",
            "320 × 279"
          ]
        },
        {
          "cells": [
            "Surface",
            "<code>4120:10339</code>",
            "312 × 277"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "The preview hugs its stack · node 4120:10317",
      "rows": [
        {
          "body": "<strong>Height now follows the content.</strong> Turning off <code>hasHeader</code>, <code>hasPreamble</code> or <code>hasSupportingContent</code> drops that row and its gap instead of leaving a fixed 279 / 277 frame. <code>hasCloseButton</code> does not change the height — Close is pinned, not stacked.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Row model read off the set and the six placed instances</strong> in the section, which run 348, 370, 404, 426 and 499 tall as their slots change. Centered: 89 + 24 + 26 + 16 + 40 + 24 + 36 + 24 = 279. Surface: 16 + 10 + 4 + 26 + 40 + 16 + 89 + 24 + 36 + 16 = 277.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Title sits flush against the message on Surface</strong> (gap 0) and 16 above it on Centered.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Supporting Content row is the 24 the set reserves</strong>, not the height of swapped-in content — the slot ships empty and the instances show it growing with whatever is placed in it. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        }
      ]
    },
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Surface heading spacing and the Centered preamble · node 4120:10317",
      "rows": [
        {
          "body": "<strong>Surface heading spacing corrected.</strong> Preamble sits at y 16 (10 tall), the title at y 30 — a 4 gap, not 16 — and the message at y 56.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong><code>hasPreamble</code> is Surface only.</strong> Centered has no preamble layer, so the control is disabled there and the row reads <code>—</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Repointed to the 2026 Working File Visual Popup · node 4120:10317",
      "rows": [
        {
          "body": "<strong>This page now documents the rebuilt Visual Popup.</strong> It had been on the Sticker Sheets node <code>18477:23788</code>; the Working File set <code>4120:10317</code> carries two variants, <code>Layout=Centered</code> and <code>Layout=Surface</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card.</strong> Two cards on retired nodes became one with a <code>Layout</code> control; the Image, Supporting Content and Action slots are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Centered is 320 × 279 at 24 padding; Surface is 312 × 277 at 16 padding over an #F6F9FD card, with a left-aligned preamble, title and message.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>#title</code> → <code>Primary/Headlines/Section</code>, <code>#message</code> → <code>Secondary/Default/Base</code>, the Surface preamble → <code>Primary/Label/Tiny</code>, button <code>#label</code> → <code>Primary/Label/Base</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:visual-popup:2.0.0</code>, a seven-row mapping, two snippets and a two-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Two layers share the name <code>#message</code></strong> in the Surface heading — the 10px preamble and the 14px body copy. Code Connect cannot map both. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>The Close instance does not render.</strong> It sits at 24 × 24 in the tree on both variants but is absent from <code>export_node_as_image</code>, so the popup ships with no visible dismiss control. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>The Image and Supporting Content slots ship empty</strong> — 89 tall and 40 tall of blank space in the rendered variants. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>A <code>_space_16</code> instance is 24 tall</strong> in the Surface stack, and the stack is spaced with spacer instances rather than auto-layout gaps. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Message and preamble fail AA</strong> — #6780A9 is 4.01:1 on white at 14pt and the #90A8D0 preamble 2.41:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Panel added from the property panel.</strong> Four booleans — <code>hasCloseButton</code>, <code>hasPreamble</code>, <code>hasHeader</code>, <code>hasSupportingContent</code> — all True, plus the slot item counts: Supporting Content 1, Image 2, Action 2.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The set sits in a section named “[NEW] Visual Popup (Don’t Use)”.</strong> <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the Sticker Sheets component.</strong> <span class=\"tag-open\">Open</span>",
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
      "header": "Initial Assessment · node 18477:23788",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (Default / 2 CTA / Version 2). Hero image, title, description, CTA(s). Used for confirms, success states, and onboarding popups.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Variant naming mixes paradigms</strong> — <code>Default</code> (generic), <code>2 CTA</code> (count), <code>Version 2</code> (version). Should be a single semantic axis (single-cta / dual-cta / dismissible).\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No destructive/error/loading state</strong> — Engineers must improvise these for cancel/delete confirms and async submits.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Hero image is a raster placeholder</strong> — \"Replace me\" overlay on a flat <code>Modals Asset</code> image. Should be a swappable Image slot via instance swap.\n          <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
