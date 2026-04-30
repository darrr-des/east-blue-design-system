import type { ComponentData } from '../types';

export const visualPopup: ComponentData = {
  "meta": {
    "slug": "visual-popup",
    "name": "Visual Popup",
    "node": "18477:23788",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18477-23788",
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vp-demo-preview\"><svg width=\"200\" height=\"240\" viewBox=\"0 0 200 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"240\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"0.8\"></rect><defs><linearGradient id=\"vpph-541341453\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EAF2FE\"></stop><stop offset=\"100%\" stop-color=\"#C9DCF8\"></stop></linearGradient></defs><path d=\"M0 100 L0 4 Q0 0 4 0 L196 0 Q200 0 200 4 L200 100 Z\" fill=\"url(#vpph-541341453)\"></path><rect x=\"82\" y=\"36.5\" width=\"36\" height=\"27\" rx=\"3.2399999999999998\" fill=\"none\" stroke=\"#6B8FC8\" stroke-width=\"1.4\" opacity=\".75\"></rect><circle cx=\"93.7\" cy=\"45.5\" r=\"3.96\" fill=\"#6B8FC8\" opacity=\".75\"></circle><path d=\"M84.7 60.8 L97.3 48.199999999999996 L104.5 56.3 L110.8 50 L115.3 60.8 Z\" fill=\"#6B8FC8\" opacity=\".75\"></path><text x=\"100\" y=\"128\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"12\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Put the title here</text><text x=\"100\" y=\"146\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-family=\"'BarkAda', system-ui\">Add description here.</text><text x=\"100\" y=\"158\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-family=\"'BarkAda', system-ui\">Add description here.</text><rect x=\"20\" y=\"190\" width=\"160\" height=\"26\" rx=\"13\" fill=\"#005CE5\"></rect><text x=\"100\" y=\"207\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Okay</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"vp-demo-type\" onchange=\"updateVisualPopupDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"2cta\">2 CTA</option><option value=\"version2\">Version 2</option></select></div></div></div></div>",
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "vp-spec-default",
        "title": "Default — single primary CTA",
        "node": "18477:23789",
        "description": "Hero image (320 × 180, 16:9) + title + 2-line description + single primary CTA. Use for informational modals or single-action confirms (\"Okay\").",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Default — single primary CTA",
                "mono": false
              },
              {
                "key": "Style",
                "value": "Centered illustration popup",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "modal-popup/color/bg" },
              { "key": "Title", "value": "#0A2757", "token": "modal-popup/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "modal-popup/color/label-primary" },
              { "key": "Preamble", "value": "#90A8D0", "token": "modal-popup/color/label-preamble" },
              { "key": "Close icon", "value": "#6780A9", "token": "modal-popup/color/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "320px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "24 horizontal · 24 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Illustration height",
                "value": "160px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 22 / 26",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVisualPopup</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIllustration</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"illustration\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVisualPopup</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">,</span>\n    illustration <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>painterResource(R.drawable.illus)<span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPopupAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"200\" height=\"240\" viewBox=\"0 0 200 240\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"240\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"0.8\"></rect><defs><linearGradient id=\"vpph-561979128\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EAF2FE\"></stop><stop offset=\"100%\" stop-color=\"#C9DCF8\"></stop></linearGradient></defs><path d=\"M0 100 L0 4 Q0 0 4 0 L196 0 Q200 0 200 4 L200 100 Z\" fill=\"url(#vpph-561979128)\"></path><rect x=\"82\" y=\"36.5\" width=\"36\" height=\"27\" rx=\"3.2399999999999998\" fill=\"none\" stroke=\"#6B8FC8\" stroke-width=\"1.4\" opacity=\".75\"></rect><circle cx=\"93.7\" cy=\"45.5\" r=\"3.96\" fill=\"#6B8FC8\" opacity=\".75\"></circle><path d=\"M84.7 60.8 L97.3 48.199999999999996 L104.5 56.3 L110.8 50 L115.3 60.8 Z\" fill=\"#6B8FC8\" opacity=\".75\"></path><text x=\"100\" y=\"128\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"12\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Put the title here</text><text x=\"100\" y=\"146\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-family=\"'BarkAda', system-ui\">Add description here.</text><text x=\"100\" y=\"158\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-family=\"'BarkAda', system-ui\">Add description here.</text><rect x=\"20\" y=\"190\" width=\"160\" height=\"26\" rx=\"13\" fill=\"#005CE5\"></rect><text x=\"100\" y=\"207\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"10\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Okay</text></svg>"
      },
      {
        "cardKey": "vp-spec-2cta",
        "title": "2 CTA — primary outline + tertiary text",
        "node": "18477:23797",
        "description": "Same hero + title + description as Default, then a secondary outline button on top of a tertiary text button. Use for confirm/cancel pairs.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "2 CTA — primary outline + tertiary text",
                "mono": false
              },
              {
                "key": "Style",
                "value": "Centered illustration popup",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "modal-popup/color/bg" },
              { "key": "Title", "value": "#0A2757", "token": "modal-popup/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "modal-popup/color/label-primary" },
              { "key": "Preamble", "value": "#90A8D0", "token": "modal-popup/color/label-preamble" },
              { "key": "Close icon", "value": "#6780A9", "token": "modal-popup/color/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "320px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "24 horizontal · 24 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Illustration height",
                "value": "160px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 22 / 26",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVisualPopup</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIllustration</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"illustration\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVisualPopup</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">,</span>\n    illustration <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>painterResource(R.drawable.illus)<span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPopupAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"200\" height=\"270\" viewBox=\"0 0 200 270\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"270\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"0.8\"></rect><defs><linearGradient id=\"vpph-239981133\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EAF2FE\"></stop><stop offset=\"100%\" stop-color=\"#C9DCF8\"></stop></linearGradient></defs><path d=\"M0 100 L0 4 Q0 0 4 0 L196 0 Q200 0 200 4 L200 100 Z\" fill=\"url(#vpph-239981133)\"></path><rect x=\"82\" y=\"36.5\" width=\"36\" height=\"27\" rx=\"3.2399999999999998\" fill=\"none\" stroke=\"#6B8FC8\" stroke-width=\"1.4\" opacity=\".75\"></rect><circle cx=\"93.7\" cy=\"45.5\" r=\"3.96\" fill=\"#6B8FC8\" opacity=\".75\"></circle><path d=\"M84.7 60.8 L97.3 48.199999999999996 L104.5 56.3 L110.8 50 L115.3 60.8 Z\" fill=\"#6B8FC8\" opacity=\".75\"></path><text x=\"100\" y=\"128\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"12\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Put the title here</text><text x=\"100\" y=\"146\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-family=\"'BarkAda', system-ui\">Add description here.</text><text x=\"100\" y=\"158\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"8\" font-family=\"'BarkAda', system-ui\">Add description here.</text><rect x=\"20\" y=\"180\" width=\"160\" height=\"24\" rx=\"12\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"2\"></rect><text x=\"100\" y=\"196\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><text x=\"100\" y=\"232\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text></svg>"
      },
      {
        "cardKey": "vp-spec-version2",
        "title": "Version 2 — preamble + close icon, content-first",
        "node": "18477:23806",
        "description": "Onboarding/tutorial layout. The popup itself is a single light-gray (<code>bg/color-bg</code>) container — preamble label, title with close icon, description, a 280×180 hero image with 10px radius, then primary CTA. (The outer white frame has zero padding, so only the gray container is visible.)",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Version 2 — preamble + close icon, content-first",
                "mono": false
              },
              {
                "key": "Style",
                "value": "Centered illustration popup",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "modal-popup/color/bg" },
              { "key": "Title", "value": "#0A2757", "token": "modal-popup/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "modal-popup/color/label-primary" },
              { "key": "Preamble", "value": "#90A8D0", "token": "modal-popup/color/label-preamble" },
              { "key": "Close icon", "value": "#6780A9", "token": "modal-popup/color/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "320px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "24 horizontal · 24 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Illustration height",
                "value": "160px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 22 / 26",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVisualPopup</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIllustration</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"illustration\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBVisualPopup</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description\"</span><span class=\"syn-punc\">,</span>\n    illustration <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>painterResource(R.drawable.illus)<span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPopupAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"200\" height=\"250\" viewBox=\"0 0 200 250\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"250\" rx=\"6\" fill=\"#F6F9FD\"></rect><text x=\"20\" y=\"26\" fill=\"#90A8D0\" font-size=\"6\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">PREAMBLE</text><g transform=\"translate(172, 18) \" stroke=\"#6780A9\" stroke-width=\"1.4\" stroke-linecap=\"round\"><line x1=\"0\" y1=\"0\" x2=\"8\" y2=\"8\"></line><line x1=\"8\" y1=\"0\" x2=\"0\" y2=\"8\"></line></g><text x=\"20\" y=\"42\" fill=\"#0A2757\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Put the title here</text><text x=\"20\" y=\"56\" fill=\"#6780A9\" font-size=\"7\" font-family=\"'BarkAda', system-ui\">Add description here.</text><text x=\"20\" y=\"66\" fill=\"#6780A9\" font-size=\"7\" font-family=\"'BarkAda', system-ui\">Add description here.</text><defs><linearGradient id=\"vpph-631797677\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#EAF2FE\"></stop><stop offset=\"100%\" stop-color=\"#C9DCF8\"></stop></linearGradient></defs><rect x=\"20\" y=\"78\" width=\"160\" height=\"100\" rx=\"6\" fill=\"url(#vpph-631797677)\"></rect><rect x=\"82\" y=\"114.5\" width=\"36\" height=\"27\" rx=\"3.2399999999999998\" fill=\"none\" stroke=\"#6B8FC8\" stroke-width=\"1.4\" opacity=\".75\"></rect><circle cx=\"93.7\" cy=\"123.5\" r=\"3.96\" fill=\"#6B8FC8\" opacity=\".75\"></circle><path d=\"M84.7 138.8 L97.3 126.20000000000002 L104.5 134.3 L110.8 128 L115.3 138.8 Z\" fill=\"#6B8FC8\" opacity=\".75\"></path><rect x=\"20\" y=\"214\" width=\"160\" height=\"22\" rx=\"11\" fill=\"#005CE5\"></rect><text x=\"100\" y=\"229\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Okay</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Variant",
        "description": "Modal popup ships display-only color tokens — no pressed/disabled states (the popup itself doesn't have interaction states; CTAs handle that via Button tokens).",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Modal background",
            "token": "main/modal-popup/color/bg",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Title label",
            "token": "main/modal-popup/color/label",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Description label",
            "token": "main/modal-popup/color/label-primary",
            "values": [
              "#6780A9"
            ]
          },
          {
            "role": "Preamble (V2)",
            "token": "main/modal-popup/color/label-preamble",
            "values": [
              "#90A8D0"
            ]
          },
          {
            "role": "Close icon (V2)",
            "token": "main/modal-popup/color/icon-close",
            "values": [
              "#6780A9"
            ]
          },
          {
            "role": "V2 inner container",
            "token": "bg/color-bg",
            "values": [
              "#F6F9FD"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Default / 2 CTA width",
            "token": "—",
            "values": [
              "320px"
            ]
          },
          {
            "role": "Version 2 width",
            "token": "—",
            "values": [
              "312px"
            ]
          },
          {
            "role": "Hero image (Default / 2 CTA)",
            "token": "—",
            "values": [
              "320 × 180 (16:9)"
            ]
          },
          {
            "role": "Hero image (V2)",
            "token": "—",
            "values": [
              "280 × 180, 10px radius"
            ]
          },
          {
            "role": "Body padding",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "CTA group padding (vertical)",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "2 CTA gap between buttons",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "V2 inner container padding",
            "token": "space/space-16",
            "values": [
              "16px h, 16t / 24b"
            ]
          },
          {
            "role": "Corner radius",
            "token": "radius/radius-2",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Shadow",
            "token": "Shadow/Depth 0",
            "values": [
              "0 0 4px #E8EEF2C9"
            ]
          },
          {
            "role": "Close icon (V2)",
            "token": "—",
            "values": [
              "24 × 24"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "Title",
            "token": "Primary/Headlines/Section",
            "values": [
              "HeyMeow Rnd Bold · 22 / 26"
            ]
          },
          {
            "role": "Description",
            "token": "Secondary/Default/Base",
            "values": [
              "BarkAda Medium · 14 / 20"
            ]
          },
          {
            "role": "Preamble (V2)",
            "token": "Primary/Label/Tiny",
            "values": [
              "HeyMeow Rnd Bold · 10 / 10 · +0.25"
            ]
          },
          {
            "role": "CTA label",
            "token": "Primary/Label/Large",
            "values": [
              "HeyMeow Rnd Bold · 18 / 18 · +0.25"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:visual-popup:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Type=Default",
          "swift": ".ebKind(.singleCTA)",
          "compose": "kind = EBVisualPopupKind.SingleCTA"
        },
        {
          "figma": "Type=2 CTA",
          "swift": ".ebKind(.dualCTA)",
          "compose": "kind = EBVisualPopupKind.DualCTA"
        },
        {
          "figma": "Type=Version 2",
          "swift": ".ebKind(.dismissible)",
          "compose": "kind = EBVisualPopupKind.Dismissible"
        },
        {
          "figma": "Hero image (raster)",
          "swift": "heroImage: Image",
          "compose": "heroImage: Painter"
        },
        {
          "figma": "CTA buttons",
          "swift": "primary / secondary / tertiary: EBButton",
          "compose": "primary / secondary / tertiary: @Composable"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/VisualPopup/EBVisualPopup.swift",
        "compose": "android/components/visualpopup/EBVisualPopup.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default — single CTA</span>\n<span class=\"typ\">EBVisualPopup</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Cash In Successful\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"₱500.00 added to your wallet.\"</span>,\n    <span class=\"prp\">heroImage</span>: <span class=\"typ\">Image</span>(<span class=\"str\">\"cash-in-success\"</span>),\n    <span class=\"prp\">primary</span>: <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Okay\"</span>) { /* dismiss */ }\n)\n.<span class=\"fn\">ebKind</span>(.<span class=\"prp\">singleCTA</span>)\n\n<span class=\"cmt\">// 2 CTA — confirm/cancel</span>\n<span class=\"typ\">EBVisualPopup</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Cancel transaction?\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"This cannot be undone.\"</span>,\n    <span class=\"prp\">heroImage</span>: <span class=\"typ\">Image</span>(<span class=\"str\">\"warning-illustration\"</span>),\n    <span class=\"prp\">primary</span>: <span class=\"typ\">EBOutlinedButton</span>(<span class=\"str\">\"Confirm\"</span>) { /* confirm */ },\n    <span class=\"prp\">secondary</span>: <span class=\"typ\">EBTextButton</span>(<span class=\"str\">\"Go Back\"</span>) { /* dismiss */ }\n)\n.<span class=\"fn\">ebKind</span>(.<span class=\"prp\">dualCTA</span>)\n\n<span class=\"cmt\">// Version 2 — onboarding with close icon</span>\n<span class=\"typ\">EBVisualPopup</span>(\n    <span class=\"prp\">preamble</span>: <span class=\"str\">\"NEW\"</span>,\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Save your receipts\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Tap any transaction to save its receipt.\"</span>,\n    <span class=\"prp\">heroImage</span>: <span class=\"typ\">Image</span>(<span class=\"str\">\"receipt-tutorial\"</span>),\n    <span class=\"prp\">primary</span>: <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Got it\"</span>) { /* dismiss */ },\n    <span class=\"prp\">onClose</span>: { /* dismiss */ }\n)\n.<span class=\"fn\">ebKind</span>(.<span class=\"prp\">dismissible</span>)",
        "compose": "<span class=\"cmt\">// Default — single CTA</span>\n<span class=\"typ\">EBVisualPopup</span>(\n    <span class=\"prp\">kind</span> = <span class=\"typ\">EBVisualPopupKind</span>.<span class=\"prp\">SingleCTA</span>,\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Cash In Successful\"</span>,\n    <span class=\"prp\">description</span> = <span class=\"str\">\"₱500.00 added to your wallet.\"</span>,\n    <span class=\"prp\">heroImage</span> = painterResource(R.drawable.cash_in_success),\n    <span class=\"prp\">primary</span> = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Okay\"</span>, onClick = { /* dismiss */ }) }\n)\n\n<span class=\"cmt\">// 2 CTA — confirm/cancel</span>\n<span class=\"typ\">EBVisualPopup</span>(\n    <span class=\"prp\">kind</span> = <span class=\"typ\">EBVisualPopupKind</span>.<span class=\"prp\">DualCTA</span>,\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Cancel transaction?\"</span>,\n    <span class=\"prp\">description</span> = <span class=\"str\">\"This cannot be undone.\"</span>,\n    <span class=\"prp\">heroImage</span> = painterResource(R.drawable.warning),\n    <span class=\"prp\">primary</span> = { <span class=\"typ\">EBOutlinedButton</span>(<span class=\"str\">\"Confirm\"</span>, onClick = { /* confirm */ }) },\n    <span class=\"prp\">secondary</span> = { <span class=\"typ\">EBTextButton</span>(<span class=\"str\">\"Go Back\"</span>, onClick = { /* dismiss */ }) }\n)\n\n<span class=\"cmt\">// Version 2 — onboarding with close icon</span>\n<span class=\"typ\">EBVisualPopup</span>(\n    <span class=\"prp\">kind</span> = <span class=\"typ\">EBVisualPopupKind</span>.<span class=\"prp\">Dismissible</span>,\n    <span class=\"prp\">preamble</span> = <span class=\"str\">\"NEW\"</span>,\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Save your receipts\"</span>,\n    <span class=\"prp\">description</span> = <span class=\"str\">\"Tap any transaction to save its receipt.\"</span>,\n    <span class=\"prp\">heroImage</span> = painterResource(R.drawable.receipt_tutorial),\n    <span class=\"prp\">primary</span> = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Got it\"</span>, onClick = { /* dismiss */ }) },\n    <span class=\"prp\">onClose</span> = { /* dismiss */ }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Modal trait / role",
        "ios": "Present via <code>.sheet</code> or <code>.alert</code> — VoiceOver announces as modal",
        "android": "<code>Dialog</code> announces as modal; TalkBack focus trapped inside"
      },
      {
        "requirement": "Focus trap",
        "ios": "Automatic with <code>.sheet</code>",
        "android": "Automatic with <code>Dialog</code> — set <code>dismissOnClickOutside = false</code> for confirm popups"
      },
      {
        "requirement": "Close button label (V2)",
        "ios": "<code>.accessibilityLabel(\"Close\")</code>",
        "android": "<code>contentDescription = \"Close\"</code>"
      },
      {
        "requirement": "Hero image",
        "ios": "If decorative: <code>.accessibilityHidden(true)</code>. If informative: provide a label.",
        "android": "Same — <code>contentDescription = null</code> for decorative, otherwise describe"
      },
      {
        "requirement": "Tap targets",
        "ios": "CTAs use Button which meets HIG 44pt",
        "android": "CTAs meet Material 48dp"
      },
      {
        "requirement": "Destructive role",
        "ios": "Currently undefined — needs <code>role: .destructive</code> when state lands",
        "android": "Currently undefined — needs Button destructive colors when state lands"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Visual Popup for critical confirms, success states with celebration, and onboarding moments — places where the hero image adds emotional weight.",
        "dontText": "Use for inline form errors or transient notifications — those belong in Toast, Banner, or inline error patterns, not a blocking modal."
      },
      {
        "doText": "Use the Default variant when the popup has one obvious next step (Okay, Got it, Continue).",
        "dontText": "Use 2 CTA when one button is clearly more important than the other — that's still a Default with the secondary action elsewhere."
      },
      {
        "doText": "Use Version 2 (with close icon) only for onboarding/tutorial popups where the user can dismiss without taking action.",
        "dontText": "Add a close icon to confirm/destructive popups — forces the user to consciously choose the CTA."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>Modals Asset</code>, <code>body</code>, <code>header</code>, <code>CTA - Base Button Group</code>, <code>Close</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Property values mix paradigms: <code>Default</code> / <code>2 CTA</code> / <code>Version 2</code>. Should be one semantic axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, spacing, radii, shadow, and typography bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>.sheet</code> / <code>.alert</code> on iOS and <code>Dialog</code> / <code>AlertDialog</code> on Android."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No destructive, error, or loading variants. Close affordance only on Version 2."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Hero is a flat raster placeholder with \"Replace me\" overlay. Should be a swappable Image slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "",
      "columns": [
        "Type",
        "Width",
        "Hero",
        "CTAs",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "320px",
            "320 × 180 (raster)",
            "1 primary",
            "18477:23789"
          ]
        },
        {
          "cells": [
            "2 CTA",
            "320px",
            "320 × 180 (raster)",
            "1 outline + 1 text",
            "18477:23797"
          ]
        },
        {
          "cells": [
            "Version 2",
            "312px",
            "280 × 180 (raster, in container)",
            "1 primary + close icon",
            "18477:23806"
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
