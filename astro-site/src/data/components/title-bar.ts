import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/title-bar.js`.
const titleBarDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Leading icon',
        prop: 'leadingIcon',
        defaultValue: 'yes',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'Trailing icon',
        prop: 'trailingIcon',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'Leading control',
        prop: 'leadingControl',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'Subtext',
        prop: 'subtext',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
    ],
  },
];

export const titleBar: ComponentData = {
  "meta": {
    "slug": "title-bar",
    "name": "Title Bar - App",
    "node": "4784:34355",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4784-34355",
    "description": "The top-of-screen app bar, with status bar, title row, optional leading and trailing icons, and an optional expanded title block over an image background.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"2\" y=\"4\" width=\"28\" height=\"10\" rx=\"2\" fill=\"#1972F9\"/>\n      <path d=\"M6 9l2-2 2 2\" stroke=\"#FFF\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"rotate(180 8 9)\"/>\n      <text x=\"16\" y=\"10.5\" text-anchor=\"middle\" fill=\"white\" font-size=\"4\" font-weight=\"600\" font-family=\"system-ui\">Title</text>\n      <circle cx=\"25\" cy=\"9\" r=\"2\" stroke=\"#FFF\" stroke-width=\"0.8\" fill=\"none\"/>\n      <rect x=\"2\" y=\"16\" width=\"28\" height=\"8\" rx=\"2\" fill=\"#1972F9\" opacity=\".5\"/>\n      <text x=\"6\" y=\"21.5\" fill=\"white\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Header</text>\n    </svg>"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1972F9\" opacity=\".6\"></rect>\n          <path d=\"M18 17l3-3 3 3\" stroke=\"#FFF\" stroke-width=\"1\" stroke-linecap=\"round\" transform=\"rotate(180 21 16)\"></path>\n          <text x=\"60\" y=\"19\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Send Money</text>\n          \n          <rect x=\"18\" y=\"32\" width=\"84\" height=\"10\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\".1\"></rect>\n          <rect x=\"22\" y=\"35\" width=\"40\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"18\" y=\"48\" width=\"84\" height=\"10\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\".1\"></rect>\n          <rect x=\"22\" y=\"51\" width=\"50\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"18\" y=\"64\" width=\"84\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tb-demo-preview\"><div style=\"width:360px;max-width:100%;background:#1972F9;border-radius:4px;overflow:hidden;font-family:Proxima Soft,system-ui,sans-serif;color:#FFF;\"><div style=\"height:44px;display:flex;align-items:flex-end;padding:0 20px 8px;justify-content:space-between;font-size:12px;font-weight:600;\"><span>9:41</span><span style=\"display:flex;gap:4px;align-items:center;\"><svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\"><rect x=\"0\" y=\"8\" width=\"3\" height=\"4\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"4\" y=\"5\" width=\"3\" height=\"7\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"8\" y=\"2\" width=\"3\" height=\"10\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"12\" y=\"0\" width=\"3\" height=\"12\" rx=\"0.5\" fill=\"#FFF\"></rect></svg><svg width=\"14\" height=\"12\" viewBox=\"0 0 14 12\"><path d=\"M7 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z\" fill=\"#FFF\" transform=\"translate(0,-2)\"></path><path d=\"M3.5 7.5C4.8 6.2 5.9 5.5 7 5.5s2.2.7 3.5 2\" stroke=\"#FFF\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path><path d=\"M1 4.5C3 2.5 5 1.5 7 1.5s4 1 6 3\" stroke=\"#FFF\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path></svg><svg width=\"22\" height=\"12\" viewBox=\"0 0 22 12\"><rect x=\"0\" y=\"1\" width=\"19\" height=\"10\" rx=\"2\" stroke=\"#FFF\" stroke-width=\"1\" fill=\"none\"></rect><rect x=\"2\" y=\"3\" width=\"15\" height=\"6\" rx=\"1\" fill=\"#FFF\"></rect><rect x=\"20\" y=\"4\" width=\"2\" height=\"4\" rx=\"0.5\" fill=\"#FFF\"></rect></svg></span></div><div style=\"display:flex;align-items:center;padding:12px 20px;position:relative;min-height:16px;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;margin-right:12px;\"><path d=\"M15 18l-6-6 6-6\" stroke=\"#FFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><div style=\"position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;width:max-content;max-width:60%;\"><div style=\"font-size:16px;font-weight:600;letter-spacing:0.25px;line-height:16px;\">Title</div></div><div style=\"flex:1;\"></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading icon</span><select class=\"demo-panel-select\" id=\"tb-demo-leadingIcon\" onchange=\"updateTitleBarDemo()\"><option value=\"no\">no</option><option value=\"yes\" selected=\"\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailing icon</span><select class=\"demo-panel-select\" id=\"tb-demo-trailingIcon\" onchange=\"updateTitleBarDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading control</span><select class=\"demo-panel-select\" id=\"tb-demo-leadingControl\" onchange=\"updateTitleBarDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">subtext</span><select class=\"demo-panel-select\" id=\"tb-demo-subtext\" onchange=\"updateTitleBarDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">title block</span><select class=\"demo-panel-select\" id=\"tb-demo-titleBlock\" onchange=\"updateTitleBarDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Navigation title bar used across every screen in the app. Boolean property toggles cover all common configurations: back arrow, trailing action, subtext URL, CTA control, and large header block."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own status bar stub, title row, icon slots, subtext, and optional header block. Background color and all text/icon colors are token-bound. No external dependencies."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "All four properties carry correct <code>has</code> verb prefixes and genuine <code>True</code>/<code>False</code> boolean values, the leading-control dependency is explicit, and every layer this component owns is semantically named. <code>hasTitleBlock</code> remaining a boolean rather than a layout Variant is a documented, deliberate exception made for authoring usability."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Fits as the top element on any screen. Nests below the system status bar. Content area sits directly below the title bar. Title block expands naturally when toggled on."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "5 boolean properties",
        "notes": "Navigation bar. No interaction states beyond tap targets on icons and control text."
      }
    ],
    "resolved": [
      {
        "headline": "Trailing icon placeholder replaced with a real instance.",
        "body": "v2.0: Rebuilt on node <code>4784:34355</code> in the 2026 Working File as <strong>Title Bar - App</strong>. The placeholder RECTANGLE is gone — the trailing element is now an <code>icon</code> instance wrapping a <code>trailing-icon</code> from the library. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Boolean values normalised to True/False.",
        "body": "v2.1: All four properties — <code>hasLeadingIcon</code>, <code>hasTrailingElement</code>, <code>hasSubtext</code>, <code>hasTitleBlock</code> — carry the correct <code>has</code> verb prefix per §2 and now render <code>True</code>/<code>False</code> capitalised, confirming they are genuine Figma booleans rather than string variants. They map directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code>. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Leading control dependency made explicit.",
        "body": "v2.0: <code>hasLeadingIcon</code> exposes the back/close affordance as a property rather than leaving consumers to infer it from the layout. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Spacer instances removed from layout.",
        "body": "v2.2: The two <code>_space_12</code> spacer instances inside the title row are gone, replaced by auto-layout gap. Spacer components have no native equivalent — both platforms express this as layout spacing — and these rendered in bright <code>#0500FF</code>, so they would have shipped as visible artifacts. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Layer naming cleaned up.",
        "body": "v2.2: <code>Title Bar</code> → <code>TitleBar</code> (space removed), <code>title</code> → <code>TextContainer</code>, <code>title-block</code> → <code>TitleBlock</code>, and both <code>#title</code> text layers → <code>Title</code>. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Two <code>Title</code> layers confirmed intentional.",
        "body": "v2.2: Closed by owner decision — the 16px title in <code>TitleBar</code> and the 26px title in <code>TitleBlock</code> share the name deliberately. They sit in separate branches and represent the same content role at two scales, so a single name is the honest description. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Dark / transparent variant ruled out.",
        "body": "v2.2: Closed by owner decision — no dark or transparent variant is planned. The component ships on the brand surface only, so a Theme axis would add variants describing a treatment that is never used. (Family)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Background layer renamed.",
        "body": "v2.3: <code>image-placeholder</code> → <code>Background</code> across the expanded variants. The name now describes the role rather than implying scaffolding — it is a real background layer carrying the brand fill plus a 5% luminosity image. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Layer naming complete.",
        "body": "v2.4: <code>icon</code> → <code>TrailingIcon</code>, pairing with <code>Leading Icon</code> opposite it. Every layer this component owns now carries a semantic name — <code>Background</code>, <code>Status Bar</code>, <code>TitleBar</code> with <code>Leading Icon</code> / <code>TextContainer</code> / <code>TrailingIcon</code>, and <code>TitleBlock</code>. The remaining hash-prefixed and kebab names (<code>#time</code>, <code>trailing-icon</code>) belong to nested library instances, not to this component. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>hasTitleBlock</code> kept as a boolean by design.",
        "body": "v2.4: Closed by owner decision — the property stays a boolean rather than becoming a <code>Variant</code> axis, for authoring usability: keeping one axis means designers do not have to reposition the <code>Background</code> image when toggling the title block on and off. The guidelines reserve <code>has*</code> for content presence rather than layout modes, so this is a documented exception rather than conformance. Worth revisiting only if the two forms diverge further than background fill and height. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Status bar documented as illustrative.",
        "body": "v2.5: Documented rather than deferred. The <code>Status Bar - IOS</code> instance embedded in every variant — SF Pro clock, iOS battery glyph, cellular and wifi indicators — is <strong>mock fidelity only</strong>. Neither platform lets an app draw its own status bar: iOS and Android render it from system state, and an app controls only its appearance (light or dark content, and on Android the background behind it). Implementers should build the title row and treat the 44px above it as safe-area inset, not as anatomy to reproduce. That is also why no <code>Platform</code> axis is needed — the component would look identical on Android in every respect the app actually controls. (C4 · Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "tb-spec-standard",
        "demoKey": "standard",
        "demoControls": titleBarDemoControls,
        "title": "Standard",
        "node": "23:175149",
        "description": "Standard title bar without title block. Status bar (44px) + title row with optional icons, control, and subtext. Height ranges from 84px to 100px depending on subtext.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Standard",
                "mono": false
              },
              {
                "key": "Leading icon",
                "value": "yes",
                "mono": false,
                "prop": "leadingIcon"
              },
              {
                "key": "Trailing icon",
                "value": "no",
                "mono": false,
                "prop": "trailingIcon"
              },
              {
                "key": "Leading control",
                "value": "no",
                "mono": false,
                "prop": "leadingControl"
              },
              {
                "key": "Subtext",
                "value": "no",
                "mono": false,
                "prop": "subtext"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#1972F9", "token": "title-bar/color/bg" },
              { "key": "Title", "value": "#FFFFFF", "token": "title-bar/color/label-title" },
              { "key": "Header", "value": "#FFFFFF", "token": "title-bar/color/label-header" },
              { "key": "URL chip", "value": "#F6F9FDCC (80% alpha)", "token": "title-bar/color/label-url" },
              { "key": "Icon", "value": "#FFFFFF", "token": "title-bar/color/icon" },
              { "key": "CTA label", "value": "#FFFFFF", "token": "title-bar/color/label-cta" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Bar height",
                "value": "64px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
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
                "value": "Primary/Headlines/Light/Area",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Semibold · 26 / 31 · +0.85",
                "mono": true
              },
              {
                "key": "URL style",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "URL font",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTitleBar</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>url<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"gcash.com\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTitleBar</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    url <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"gcash.com\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-standard-preview\"><div style=\"width:360px;max-width:100%;background:#1972F9;border-radius:4px;overflow:hidden;font-family:Proxima Soft,system-ui,sans-serif;color:#FFF;\"><div style=\"height:44px;display:flex;align-items:flex-end;padding:0 20px 8px;justify-content:space-between;font-size:12px;font-weight:600;\"><span>9:41</span><span style=\"display:flex;gap:4px;align-items:center;\"><svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\"><rect x=\"0\" y=\"8\" width=\"3\" height=\"4\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"4\" y=\"5\" width=\"3\" height=\"7\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"8\" y=\"2\" width=\"3\" height=\"10\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"12\" y=\"0\" width=\"3\" height=\"12\" rx=\"0.5\" fill=\"#FFF\"></rect></svg><svg width=\"14\" height=\"12\" viewBox=\"0 0 14 12\"><path d=\"M7 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z\" fill=\"#FFF\" transform=\"translate(0,-2)\"></path><path d=\"M3.5 7.5C4.8 6.2 5.9 5.5 7 5.5s2.2.7 3.5 2\" stroke=\"#FFF\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path><path d=\"M1 4.5C3 2.5 5 1.5 7 1.5s4 1 6 3\" stroke=\"#FFF\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path></svg><svg width=\"22\" height=\"12\" viewBox=\"0 0 22 12\"><rect x=\"0\" y=\"1\" width=\"19\" height=\"10\" rx=\"2\" stroke=\"#FFF\" stroke-width=\"1\" fill=\"none\"></rect><rect x=\"2\" y=\"3\" width=\"15\" height=\"6\" rx=\"1\" fill=\"#FFF\"></rect><rect x=\"20\" y=\"4\" width=\"2\" height=\"4\" rx=\"0.5\" fill=\"#FFF\"></rect></svg></span></div><div style=\"display:flex;align-items:center;padding:12px 20px;position:relative;min-height:16px;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;margin-right:12px;\"><path d=\"M15 18l-6-6 6-6\" stroke=\"#FFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><div style=\"position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;width:max-content;max-width:60%;\"><div style=\"font-size:16px;font-weight:600;letter-spacing:0.25px;line-height:16px;\">Title</div></div></div></div></div>"
      },
      {
        "cardKey": "tb-spec-titleblock",
        "demoKey": "titleblock",
        "demoControls": titleBarDemoControls,
        "title": "With Title Block",
        "node": "23:175159",
        "description": "Title bar with expanded header block (72px) below the title row. Used for screens with prominent section headers. Adds \"Header\" text at 26px Semibold.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "With Title Block",
                "mono": false
              },
              {
                "key": "Leading icon",
                "value": "yes",
                "mono": false,
                "prop": "leadingIcon"
              },
              {
                "key": "Trailing icon",
                "value": "no",
                "mono": false,
                "prop": "trailingIcon"
              },
              {
                "key": "Leading control",
                "value": "no",
                "mono": false,
                "prop": "leadingControl"
              },
              {
                "key": "Subtext",
                "value": "no",
                "mono": false,
                "prop": "subtext"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#1972F9", "token": "title-bar/color/bg" },
              { "key": "Title", "value": "#FFFFFF", "token": "title-bar/color/label-title" },
              { "key": "Header", "value": "#FFFFFF", "token": "title-bar/color/label-header" },
              { "key": "URL chip", "value": "#F6F9FDCC (80% alpha)", "token": "title-bar/color/label-url" },
              { "key": "Icon", "value": "#FFFFFF", "token": "title-bar/color/icon" },
              { "key": "CTA label", "value": "#FFFFFF", "token": "title-bar/color/label-cta" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Bar height",
                "value": "64px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
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
                "value": "Primary/Headlines/Light/Area",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Semibold · 26 / 31 · +0.85",
                "mono": true
              },
              {
                "key": "URL style",
                "value": "Primary/Label/Light/Fine",
                "mono": true
              },
              {
                "key": "URL font",
                "value": "Proxima Soft Semibold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTitleBar</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>url<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"gcash.com\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTitleBar</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    url <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"gcash.com\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"spec-titleblock-preview\"><div style=\"width:360px;max-width:100%;background:#1972F9;border-radius:4px;overflow:hidden;font-family:Proxima Soft,system-ui,sans-serif;color:#FFF;\"><div style=\"height:44px;display:flex;align-items:flex-end;padding:0 20px 8px;justify-content:space-between;font-size:12px;font-weight:600;\"><span>9:41</span><span style=\"display:flex;gap:4px;align-items:center;\"><svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\"><rect x=\"0\" y=\"8\" width=\"3\" height=\"4\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"4\" y=\"5\" width=\"3\" height=\"7\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"8\" y=\"2\" width=\"3\" height=\"10\" rx=\"0.5\" fill=\"#FFF\"></rect><rect x=\"12\" y=\"0\" width=\"3\" height=\"12\" rx=\"0.5\" fill=\"#FFF\"></rect></svg><svg width=\"14\" height=\"12\" viewBox=\"0 0 14 12\"><path d=\"M7 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z\" fill=\"#FFF\" transform=\"translate(0,-2)\"></path><path d=\"M3.5 7.5C4.8 6.2 5.9 5.5 7 5.5s2.2.7 3.5 2\" stroke=\"#FFF\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path><path d=\"M1 4.5C3 2.5 5 1.5 7 1.5s4 1 6 3\" stroke=\"#FFF\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path></svg><svg width=\"22\" height=\"12\" viewBox=\"0 0 22 12\"><rect x=\"0\" y=\"1\" width=\"19\" height=\"10\" rx=\"2\" stroke=\"#FFF\" stroke-width=\"1\" fill=\"none\"></rect><rect x=\"2\" y=\"3\" width=\"15\" height=\"6\" rx=\"1\" fill=\"#FFF\"></rect><rect x=\"20\" y=\"4\" width=\"2\" height=\"4\" rx=\"0.5\" fill=\"#FFF\"></rect></svg></span></div><div style=\"display:flex;align-items:center;padding:12px 20px;position:relative;min-height:16px;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;margin-right:12px;\"><path d=\"M15 18l-6-6 6-6\" stroke=\"#FFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><div style=\"position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;width:max-content;max-width:60%;\"><div style=\"font-size:16px;font-weight:600;letter-spacing:0.25px;line-height:16px;\">Title</div></div></div><div style=\"height:72px;padding:0 24px;display:flex;align-items:center;\"><div style=\"font-size:26px;font-weight:600;letter-spacing:0.85px;line-height:31px;\">Header</div></div></div></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Single color scheme -- no appearance modes. All colors bound to <code>main/title-bar/color/</code> tokens. Display/navigation component with no state-driven color changes.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Background",
            "token": "main/title-bar/color/bg",
            "values": [
              "#1972F9"
            ]
          },
          {
            "role": "Title label",
            "token": "main/title-bar/color/label-title",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Header label",
            "token": "main/title-bar/color/label-header",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Subtext / URL",
            "token": "main/title-bar/color/label-url",
            "values": [
              "#F6F9FDCC (80% opacity)"
            ]
          },
          {
            "role": "CTA text",
            "token": "main/title-bar/color/label-cta",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Icon",
            "token": "main/title-bar/color/icon",
            "values": [
              "#FFFFFF"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Status bar height",
            "token": "44px",
            "values": []
          },
          {
            "role": "Title row padding H",
            "token": "20px",
            "values": []
          },
          {
            "role": "Title row padding V",
            "token": "12px",
            "values": []
          },
          {
            "role": "Leading icon size",
            "token": "24 x 24",
            "values": []
          },
          {
            "role": "Trailing icon size",
            "token": "24 x 24",
            "values": []
          },
          {
            "role": "Title block height",
            "token": "72px",
            "values": []
          },
          {
            "role": "Title block padding H",
            "token": "24px",
            "values": []
          },
          {
            "role": "Total height (no subtext, no block)",
            "token": "~84px",
            "values": []
          },
          {
            "role": "Total height (with subtext, no block)",
            "token": "~100px",
            "values": []
          },
          {
            "role": "Total height (with block)",
            "token": "~156--172px",
            "values": []
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Tracking",
          "Line-height"
        ],
        "rows": [
          {
            "role": "Title",
            "token": "Primary/Label/Light/Base",
            "values": [
              "Proxima Soft Semibold",
              "16px",
              "0.25px",
              "16px"
            ]
          },
          {
            "role": "Subtext",
            "token": "Primary/Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold",
              "12px",
              "0.5px",
              "12px"
            ]
          },
          {
            "role": "Header",
            "token": "Primary/Headlines/Light/Area",
            "values": [
              "Proxima Soft Semibold",
              "26px",
              "0.85px",
              "31px"
            ]
          },
          {
            "role": "CTA (control)",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "0.25px",
              "14px"
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
          "label": "iOS -- Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File -> Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android -- Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:titlebar:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.titlebar.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "leading icon (yes/no)",
          "swift": ".ebLeadingIcon(Image?)",
          "compose": "leadingIcon: @Composable (() -> Unit)?"
        },
        {
          "figma": "trailing icon (yes/no)",
          "swift": ".ebTrailingIcon(Image?)",
          "compose": "trailingIcon: @Composable (() -> Unit)?"
        },
        {
          "figma": "leading control (yes/no)",
          "swift": ".ebLeadingControl(\"Done\")",
          "compose": "leadingControlText: String?"
        },
        {
          "figma": "subtext (yes/no)",
          "swift": ".ebSubtext(\"m.gcash.com\")",
          "compose": "subtext: String?"
        },
        {
          "figma": "title block (yes/no)",
          "swift": ".ebTitleBlock(\"Header\")",
          "compose": "titleBlock: String?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/TitleBar/EBTitleBar.swift",
        "compose": "android/components/titlebar/EBTitleBar.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Basic (title only)",
        "swift": "<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Send Money\"</span>)",
        "compose": "<span class=\"typ\">EBTitleBar</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Send Money\"</span>\n)"
      },
      {
        "subheading": "With back arrow",
        "swift": "<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Send Money\"</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"arrow.left\"</span>))",
        "compose": "<span class=\"typ\">EBTitleBar</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Send Money\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">ArrowBack</span>, <span class=\"str\">\"Back\"</span>) }\n)"
      },
      {
        "subheading": "Full configuration",
        "swift": "<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"GCash\"</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"arrow.left\"</span>))\n    .<span class=\"fn\">ebTrailingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"ellipsis\"</span>))\n    .<span class=\"fn\">ebSubtext</span>(<span class=\"str\">\"m.gcash.com\"</span>)\n    .<span class=\"fn\">ebTitleBlock</span>(<span class=\"str\">\"My Wallet\"</span>)",
        "compose": "<span class=\"typ\">EBTitleBar</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"GCash\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">ArrowBack</span>, <span class=\"str\">\"Back\"</span>) },\n    <span class=\"prp\">trailingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">MoreVert</span>, <span class=\"str\">\"More\"</span>) },\n    <span class=\"prp\">subtext</span> = <span class=\"str\">\"m.gcash.com\"</span>,\n    <span class=\"prp\">titleBlock</span> = <span class=\"str\">\"My Wallet\"</span>\n)"
      },
      {
        "subheading": "With leading control",
        "swift": "<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Edit Profile\"</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"arrow.left\"</span>))\n    .<span class=\"fn\">ebLeadingControl</span>(<span class=\"str\">\"Done\"</span>)",
        "compose": "<span class=\"typ\">EBTitleBar</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Edit Profile\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">ArrowBack</span>, <span class=\"str\">\"Back\"</span>) },\n    <span class=\"prp\">leadingControlText</span> = <span class=\"str\">\"Done\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 x 44 pt (icons and control)",
        "android": "48 x 48 dp (icons and control)"
      },
      {
        "requirement": "Back button label",
        "ios": "<code>.accessibilityLabel(\"Back\")</code>",
        "android": "<code>contentDescription = \"Navigate back\"</code>"
      },
      {
        "requirement": "Trailing icon label",
        "ios": "<code>.accessibilityLabel(\"More options\")</code>",
        "android": "<code>contentDescription = \"More options\"</code>"
      },
      {
        "requirement": "Heading semantics",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> on title",
        "android": "<code>semantics { heading() }</code> on title"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use EBTitleBar as the top-level navigation element on every screen. Keep the title short and descriptive.",
        "dontText": "Nest a title bar inside scrollable content or use it as a section header within a page -- use a section heading component instead."
      },
      {
        "doText": "Use the title block for high-level section headers like \"My Wallet\" or \"Dashboard\" where the large text reinforces the current context.",
        "dontText": "Show both trailing icon and leading control simultaneously -- they occupy the same trailing slot. Use one or the other."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic layer names: <code>title</code>, <code>Title Bar</code>, <code>title-block</code>, <code>Leading Icon</code>, <code>Placeholder</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All 5 boolean properties use <code>yes/no</code> instead of <code>true/false</code>. <code>leading control</code> has implicit dependency on other properties."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 6 color roles bound to <code>main/title-bar/color/</code> tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>NavigationBar</code> (iOS) / <code>TopAppBar</code> (Android, Material 3)."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Navigation bar -- no interaction states needed beyond individual tap targets on icons and control."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Trailing icon uses <code>icon-placeholder</code> RECTANGLE instead of a swappable icon instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All booleans use <code>yes/no</code> -- must be renamed to <code>true/false</code> before Code Connect mapping"
      },
      {
        "aspect": "Asset quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Trailing icon placeholder RECTANGLE needs replacement with icon instance"
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Navigation bar -- no interaction states needed"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBTitleBar.swift / EBTitleBar.kt not yet created"
      }
    ],
    "variants": {
      "total": 20,
      "description": "5 boolean properties (<code>leading icon</code>, <code>trailing icon</code>, <code>leading control</code>, <code>subtext</code>, <code>title block</code>) with implicit constraints yield <strong>20 variants</strong>: 10 without title block + 10 with title block.",
      "columns": [
        "title block",
        "Combinations covered",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>no</strong>",
            "10 combos of leading/trailing icon + leading control + subtext",
            "10"
          ]
        },
        {
          "cells": [
            "<strong>yes</strong>",
            "Same 10 combos with title block enabled",
            "10"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment -- node 23:175148",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> -- 20 variants documented across 5 boolean properties: leading icon, trailing icon, leading control, subtext, title block. App navigation title bar with brand blue background and white text/icons. All colors bound to <code>main/title-bar/color/</code> tokens.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Boolean properties use yes/no</strong> -- All 5 boolean properties (<code>leading icon</code>, <code>trailing icon</code>, <code>leading control</code>, <code>subtext</code>, <code>title block</code>) use <code>yes/no</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Trailing icon uses placeholder RECTANGLE</strong> -- <code>icon-placeholder</code> is a 24x24 RECTANGLE instead of a swappable icon instance from the DS icon library. Blocks native icon slot mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> -- No CLI mappings registered yet. Blocked by C2 (boolean naming) and C6 (placeholder icon).\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
