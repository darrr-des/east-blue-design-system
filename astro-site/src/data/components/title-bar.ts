import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the variant axes of set 4784:34355, in variant-name order.
// No property-panel screenshot was supplied, so a text or instance-swap
// property would not appear here. All 16 combinations are built.
const titleBarDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasLeadingIcon',
        prop: 'hasleadingicon',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingElement',
        prop: 'hastrailingelement',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasSubtext',
        prop: 'hassubtext',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTitleBlock',
        prop: 'hastitleblock',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
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
        "cardKey": "tb-spec-main",
        "demoKey": "main",
        "title": "Title Bar - App",
        "node": "4784:34355",
        "description": "",
        "previewHtml": "<div id=\"title-bar-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": titleBarDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "hasLeadingIcon",
                "value": "False",
                "prop": "hasleadingicon"
              },
              {
                "key": "hasTrailingElement",
                "value": "False",
                "prop": "hastrailingelement"
              },
              {
                "key": "hasSubtext",
                "value": "False",
                "prop": "hassubtext"
              },
              {
                "key": "hasTitleBlock",
                "value": "False",
                "prop": "hastitleblock"
              },
              {
                "key": "Leading instance",
                "value": "Left Arrow",
                "variants": {
                  "hastitleblock:true": {
                    "value": "Left Arrow — layer named Leading Icon"
                  },
                  "hasleadingicon:false|hastitleblock:false": {
                    "hide": true
                  },
                  "hasleadingicon:false|hastitleblock:true": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing instance",
                "value": "Information",
                "variants": {
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Status Bar",
                "value": "Status Bar - IOS — mock only"
              },
              {
                "key": "Resolved variant",
                "value": "4784:34356 · 360 × 84",
                "mono": true,
                "variants": {
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "4784:34356 · 360 × 84"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "4784:34474 · 360 × 100"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "4784:34499 · 360 × 92"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "4784:34507 · 360 × 100"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "4784:34535 · 360 × 92"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "4784:34543 · 360 × 100"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "4784:34480 · 360 × 92"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "4784:34489 · 360 × 100"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "4784:34361 · 360 × 156"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "4784:34369 · 360 × 172"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "4784:34378 · 360 × 164"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "4784:34389 · 360 × 172"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "4784:34426 · 360 × 164"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "4784:34437 · 360 × 172"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "4784:34401 · 360 × 164"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "4784:34413 · 360 × 172"
                  }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#1972F9",
                "token": "—"
              },
              {
                "key": "Background",
                "value": "#1972F9 + image at 5% luminosity",
                "variants": {
                  "hastitleblock:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "#FFFFFF",
                "token": "—"
              },
              {
                "key": "Subtext",
                "value": "#F6F9FD @ 80%",
                "token": "—",
                "variants": {
                  "hassubtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Icons",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "hasleadingicon:false|hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Header",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "hastitleblock:false": {
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
                "key": "Title",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "Primary/Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hassubtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Header",
                "value": "Primary/Headlines/Light/Area",
                "mono": true,
                "variants": {
                  "hastitleblock:false": {
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
                "key": "Height",
                "value": "84px",
                "mono": true,
                "variants": {
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "84px"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "100px"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "92px"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "100px"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "92px"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "100px"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "92px"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "100px"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "156px"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "172px"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "164px"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "172px"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "164px"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "172px"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "164px"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "172px"
                  }
                }
              },
              {
                "key": "Width",
                "value": "360px",
                "mono": true
              },
              {
                "key": "Status Bar",
                "value": "360 × 44",
                "mono": true
              },
              {
                "key": "TitleBar",
                "value": "360 × 40",
                "mono": true,
                "variants": {
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "360 × 40"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "360 × 48"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "360 × 48"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "360 × 48"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "360 × 40"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "360 × 48"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "360 × 48"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "360 × 56"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "360 × 48"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "360 × 56"
                  }
                }
              },
              {
                "key": "TextContainer",
                "value": "320px · Title centred at x 180",
                "mono": true,
                "variants": {
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "320px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "320px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "272px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "272px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "320px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "320px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "296px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "272px · Title centred at x 180"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "272px · Title centred at x 180"
                  }
                }
              },
              {
                "key": "Icons",
                "value": "24 × 24 · x 20 and x 316",
                "mono": true,
                "variants": {
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "hide": true
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "hide": true
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "24 × 24 · 12px from TitleBar top"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "24 × 24 · 16px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:false": {
                    "value": "24 × 24 · 12px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:false": {
                    "value": "24 × 24 · 16px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:false": {
                    "value": "24 × 24 · 12px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:false": {
                    "value": "24 × 24 · 16px from TitleBar top"
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "hide": true
                  },
                  "hasleadingicon:false|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "hide": true
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "24 × 24 · 12px from TitleBar top"
                  },
                  "hasleadingicon:false|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "24 × 24 · 16px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:false|hastitleblock:true": {
                    "value": "24 × 24 · 12px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:false|hassubtext:true|hastitleblock:true": {
                    "value": "24 × 24 · 16px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:false|hastitleblock:true": {
                    "value": "24 × 24 · 12px from TitleBar top"
                  },
                  "hasleadingicon:true|hastrailingelement:true|hassubtext:true|hastitleblock:true": {
                    "value": "24 × 24 · 16px from TitleBar top"
                  }
                }
              },
              {
                "key": "Subtext",
                "value": "4px below Title",
                "mono": true,
                "variants": {
                  "hassubtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "TitleBlock",
                "value": "360 × 72 · Header at x 24, y 29",
                "mono": true,
                "variants": {
                  "hastitleblock:false": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBTitleBar(\"Title\")",
        "compose": "EBTitleBar(\n    title = \"Title\"\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on set <code>4784:34355</code>. One brand surface — a dark or transparent variant was ruled out in v2.2. The title-block variants add a <code>Background</code> rectangle carrying the same blue plus an image fill at 5% luminosity; that raster is not reproduced in the preview. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Surface",
            "token": "—",
            "values": [
              "#1972F9"
            ]
          },
          {
            "role": "Background (title block)",
            "token": "—",
            "values": [
              "#1972F9 + image @ 5% luminosity"
            ]
          },
          {
            "role": "Title, Header, icons, status bar",
            "token": "—",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Subtext",
            "token": "—",
            "values": [
              "#F6F9FD @ 80%"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:titlebar:2.5.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.titlebar.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per variant axis of set <code>4784:34355</code>, then the instances and text layers. The four <code>has*</code> axes are <strong>variant</strong> properties — they appear in every variant name and multiply the set to 16 — not Figma boolean properties. No property-panel screenshot was supplied, so a text property would be missing here.",
      "rows": [
        {
          "figma": "hasLeadingIcon — False, True",
          "swift": "<code>.ebLeading { }</code> — omit for False",
          "compose": "<code>onLeading: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasTrailingElement — False, True",
          "swift": "<code>.ebTrailing(Image) { }</code> — omit for False",
          "compose": "<code>trailing: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasSubtext — False, True",
          "swift": "<code>.ebSubtext(String)</code> — omit for False",
          "compose": "<code>subtext: String? = null</code>"
        },
        {
          "figma": "hasTitleBlock — False, True",
          "swift": "<code>.ebTitleBlock(String)</code> — omit for False",
          "compose": "<code>titleBlock: String? = null</code>"
        },
        {
          "figma": "— <code>Left Arrow</code> / <code>Leading Icon</code> instance",
          "swift": "the back glyph, drawn by the component",
          "compose": "the back glyph, drawn by the component"
        },
        {
          "figma": "— <code>TrailingIcon</code> instance (Information)",
          "swift": "the <code>Image</code> passed to <code>.ebTrailing</code>",
          "compose": "content of <code>trailing</code>"
        },
        {
          "figma": "— <code>Title</code> (TitleBar) text layer",
          "swift": "<code>EBTitleBar(_ title: String)</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "— <code>Status Bar</code> instance",
          "swift": "not drawn — safe-area inset; set <code>.preferredColorScheme</code> / light status-bar content",
          "compose": "not drawn — <code>WindowInsets.statusBars</code> padding"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/TitleBar/EBTitleBar.swift",
        "compose": "android/components/titlebar/EBTitleBar.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Title only",
        "swift": "<span class=\"cmt\">// hasLeadingIcon=False, hasTrailingElement=False, hasSubtext=False, hasTitleBlock=False — 4784:34356, 360 × 84.</span>\n<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Title\"</span>)",
        "compose": "<span class=\"cmt\">// hasLeadingIcon=False, hasTrailingElement=False, hasSubtext=False, hasTitleBlock=False — 4784:34356, 360 × 84.</span>\n<span class=\"typ\">EBTitleBar</span>(\n    title = <span class=\"str\">\"Title\"</span>\n)"
      },
      {
        "subheading": "Back + info",
        "swift": "<span class=\"cmt\">// hasLeadingIcon=True, hasTrailingElement=True, hasSubtext=False, hasTitleBlock=False — 4784:34480, 360 × 92.</span>\n<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Title\"</span>)\n    .<span class=\"fn\">ebLeading</span> { dismiss() }\n    .<span class=\"fn\">ebTrailing</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"information\"</span>)) { showInfo() }",
        "compose": "<span class=\"cmt\">// hasLeadingIcon=True, hasTrailingElement=True, hasSubtext=False, hasTitleBlock=False — 4784:34480, 360 × 92.</span>\n<span class=\"typ\">EBTitleBar</span>(\n    title = <span class=\"str\">\"Title\"</span>,\n    onLeading = { dismiss() },\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Information</span>) { showInfo() } }\n)"
      },
      {
        "subheading": "Back + subtext",
        "swift": "<span class=\"cmt\">// hasLeadingIcon=True, hasTrailingElement=False, hasSubtext=True, hasTitleBlock=False — 4784:34543, 360 × 100.</span>\n<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Title\"</span>)\n    .<span class=\"fn\">ebSubtext</span>(<span class=\"str\">\"m.gcash.com\"</span>)\n    .<span class=\"fn\">ebLeading</span> { dismiss() }",
        "compose": "<span class=\"cmt\">// hasLeadingIcon=True, hasTrailingElement=False, hasSubtext=True, hasTitleBlock=False — 4784:34543, 360 × 100.</span>\n<span class=\"typ\">EBTitleBar</span>(\n    title = <span class=\"str\">\"Title\"</span>,\n    subtext = <span class=\"str\">\"m.gcash.com\"</span>,\n    onLeading = { dismiss() }\n)"
      },
      {
        "subheading": "Full, with title block",
        "swift": "<span class=\"cmt\">// hasLeadingIcon=True, hasTrailingElement=True, hasSubtext=True, hasTitleBlock=True — 4784:34413, 360 × 172.</span>\n<span class=\"typ\">EBTitleBar</span>(<span class=\"str\">\"Title\"</span>)\n    .<span class=\"fn\">ebSubtext</span>(<span class=\"str\">\"m.gcash.com\"</span>)\n    .<span class=\"fn\">ebLeading</span> { dismiss() }\n    .<span class=\"fn\">ebTrailing</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"information\"</span>)) { showInfo() }\n    .<span class=\"fn\">ebTitleBlock</span>(<span class=\"str\">\"Header\"</span>)",
        "compose": "<span class=\"cmt\">// hasLeadingIcon=True, hasTrailingElement=True, hasSubtext=True, hasTitleBlock=True — 4784:34413, 360 × 172.</span>\n<span class=\"typ\">EBTitleBar</span>(\n    title = <span class=\"str\">\"Title\"</span>,\n    subtext = <span class=\"str\">\"m.gcash.com\"</span>,\n    onLeading = { dismiss() },\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Information</span>) { showInfo() } },\n    titleBlock = <span class=\"str\">\"Header\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Heading",
        "ios": "Mark the Title with <code>.accessibilityAddTraits(.isHeader)</code>; when the title block is shown, the Header is the heading and the bar Title is hidden from VoiceOver to avoid reading it twice.",
        "android": "<code>Modifier.semantics { heading() }</code> on the visible heading only."
      },
      {
        "requirement": "Leading and trailing actions",
        "ios": "Label the back arrow “Back” and the Information icon by what it opens. Both are 24 × 24 — extend to 44pt.",
        "android": "<code>contentDescription</code> on both; use <code>IconButton</code> for the 48dp target."
      },
      {
        "requirement": "Status bar",
        "ios": "Never draw the status bar. Request light content so system icons stay white on #1972F9.",
        "android": "Draw behind the status bar with <code>WindowInsets</code> and set light icons."
      },
      {
        "requirement": "Contrast",
        "ios": "On #1972F9: Title white 16pt is 4.36:1 and Subtext #F6F9FD 80% at 12pt is 3.19:1 — both below 4.5:1. The 26pt Header passes as large text (4.36:1 ≥ 3:1).",
        "android": "Same ratios."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "The bar is 40–56 tall in Figma. Let the title truncate to one line with an accessible full label; let the title block grow.",
        "android": "Use <code>sp</code>; single-line title with ellipsis, full text in <code>contentDescription</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Title Bar - App at the top of every app screen that needs a title or navigation.",
        "dontText": "Don’t use it for brand-only screens — that is Brand App Bar."
      },
      {
        "doText": "Use the title block for landing screens that introduce a section.",
        "dontText": "Don’t combine the title block with a long subtext; the bar is already 172 tall."
      },
      {
        "doText": "Treat the 44px status bar as a safe-area inset.",
        "dontText": "Don’t reproduce the mock iOS status bar in code."
      },
      {
        "doText": "Keep the title to one line — 272px with both icons.",
        "dontText": "Don’t put actions other than the single trailing element in the bar."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "v2.4 recorded naming as complete, but the leading instance is <code>Left Arrow</code> on the eight bar-only variants and <code>Leading Icon</code> on the eight title-block variants, and the subtext text layer is named <code>Link</code> rather than for its role."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Four <code>has*</code> axes on <code>True</code>/<code>False</code>, a complete 16-variant matrix. They are variant properties rather than Figma boolean properties — the Overview calls them genuine booleans — which is why the set has 16 variants. <code>hasTitleBlock</code> as a boolean is an owner decision (v2.4)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three text layers resolve <code>matched</code> — <code>Primary/Label/Light/Base</code>, <code>Primary/Label/Light/Fine</code>, <code>Primary/Headlines/Light/Area</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "One <code>EBTitleBar</code> with four optionals. But TitleBar grows from 40 to 48 when either icon appears, so the title shifts 4px down — native bars keep a fixed height. The <code>Background</code> rectangle is 1px short on 4784:34361 and 364.24 wide at x −2.12 on 4784:34413 and 4784:34437."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The bar has no states; the back arrow and trailing icon carry their own."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Left Arrow and Information are vector DS icons. The title-block <code>Background</code> carries a raster IMAGE fill at 5% luminosity, which native code would have to ship as a bitmap."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No SwiftUI or Compose mappings are registered; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "<code>hasLeadingIcon</code> × <code>hasTrailingElement</code> × <code>hasSubtext</code> × <code>hasTitleBlock</code> = 16 variants, a complete matrix. Height is 44 status bar + TitleBar (40, 48 with an icon, 56 with subtext) + 72 with the title block.",
      "columns": [
        "hasLeadingIcon",
        "hasTrailingElement",
        "hasSubtext",
        "hasTitleBlock",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4784:34356</code>",
            "360 × 84"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4784:34474</code>",
            "360 × 100"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4784:34499</code>",
            "360 × 92"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4784:34507</code>",
            "360 × 100"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4784:34535</code>",
            "360 × 92"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4784:34543</code>",
            "360 × 100"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4784:34480</code>",
            "360 × 92"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4784:34489</code>",
            "360 × 100"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>4784:34361</code>",
            "360 × 156"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4784:34369</code>",
            "360 × 172"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>4784:34378</code>",
            "360 × 164"
          ]
        },
        {
          "cells": [
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4784:34389</code>",
            "360 × 172"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>4784:34426</code>",
            "360 × 164"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4784:34437</code>",
            "360 × 172"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>True</code>",
            "<code>4784:34401</code>",
            "360 × 164"
          ]
        },
        {
          "cells": [
            "<code>True</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4784:34413</code>",
            "360 × 172"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.5.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4784:34355",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the variant axes.</strong> Two cards on retired <code>23:*</code> nodes carried five yes/no controls, including <code>Leading control</code>, which no longer exists. Now one card with the four <code>has*</code> toggles resolving all 16 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from Figma.</strong> TitleBar heights (40 / 48 / 56), icon offsets, the centred title, the mock status bar and the 72px title block now follow the set; the Left Arrow and Information glyphs come from the library.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> Title <code>Primary/Label/Light/Base</code>, subtext <code>Primary/Label/Light/Fine</code>, Header <code>Primary/Headlines/Light/Area</code> — all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab still described the 1.0.0 component.</strong> Property Mapping listed five yes/no properties including <code>leading control</code>. Rebuilt on the four live axes with <code>com.eastblue.ds:titlebar:2.5.1</code> and four snippets.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored against v2.0–v2.5.</strong> C2 and C3 Ready; C1, C4, C6 Needs Refinement on new findings; C5 Not Applicable; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Leading instance named two ways</strong> — <code>Left Arrow</code> on bar-only variants, <code>Leading Icon</code> on title-block variants — and the subtext layer is <code>Link</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>TitleBar height changes with icons</strong> (40 → 48), and the <code>Background</code> rectangle is 1px short on 4784:34361 and overflows to 364.24 wide on 4784:34413 and 4784:34437. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Title-block Background is a raster image fill</strong> at 5% luminosity. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>Title and subtext fail AA</strong> on #1972F9 — 4.36:1 at 16pt and 3.19:1 at 12pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Overview calls the four axes genuine Figma booleans.</strong> They are variant properties, which is why the set has 16 variants. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Property panel not confirmed, and v2.0.0–v2.5.0 have no changelog entries.</strong> The panel is built from variant names; the Overview records eleven resolutions across those versions but their dates are not recorded, so they are not invented. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
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
