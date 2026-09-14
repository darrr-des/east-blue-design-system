import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 4227:11068, in its order. Only 7
// of the 36 combinations are built, so the demo script snaps to the nearest
// built variant rather than drawing a layout Figma has never made.
const footerDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Alignment',
        prop: 'alignment',
        defaultValue: 'center',
        options: [
          { value: 'center', label: 'Center' },
          { value: 'left', label: 'Left' },
        ],
      },
      {
        label: 'LogoType',
        prop: 'logotype',
        defaultValue: 'group',
        options: [
          { value: 'none', label: 'None' },
          { value: 'single', label: 'Single' },
          { value: 'group', label: 'Group' },
        ],
      },
      {
        label: 'Label',
        prop: 'label',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'Description',
        prop: 'description',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'default', label: 'Default' },
          { value: 'link', label: 'Link' },
        ],
      },
    ],
  },
];

export const footer: ComponentData = {
  "meta": {
    "slug": "footer",
    "name": "Footer",
    "node": "4227:11068",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4227-11068",
    "description": "A page-bottom region containing partner logos, regulatory disclaimers, and helper links.",
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
    "navGroup": "Header",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4227:11068</code> in the 2026 Working File as <code>Alignment</code> × <code>LogoType</code> × <code>Label</code> × <code>Description</code>, authored as a curated seven-variant set. The per-partner axes are collapsed into one enum, property and layer naming follow the guidelines throughout, and every dimension is a whole pixel. Five questions the original assessment left open are settled by decision: the raster partner marks, the baked disclaimer, <code>Alignment</code> staying a property, Footer remaining a component, and the variant selection being curated rather than partial. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "The Footer sits at the bottom of lending/savings/investment flows — carrying regulatory disclosures, partner attribution, and a link to more information on the Help Center.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"footer-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Variant</span><select id=\"footer-ctrl-variant\" class=\"demo-panel-select\" onchange=\"_footerUpdate('variant')\"><option value=\"1\">1 · Powered-by + disclaimer + link</option><option value=\"2\">2 · Disclaimer + GCash×Partner (left)</option><option value=\"3\">3 · Help Center link (center)</option><option value=\"4\">4 · GCash×Partner logos (center)</option><option value=\"5\">5 · GCash×Partner + link (left)</option><option value=\"6\">6 · Powered-by row + link (left)</option><option value=\"7\">7 · In partnership with · grouped logos (center)</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Alignment</span><select id=\"footer-ctrl-alignment\" class=\"demo-panel-select\" onchange=\"_footerUpdate()\"><option value=\"left\">left</option><option value=\"center\">center</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Description</span><select id=\"footer-ctrl-description\" class=\"demo-panel-select\" onchange=\"_footerUpdate()\"><option value=\"none\">none</option><option value=\"default\">default</option><option value=\"with-link\">with link</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Partner Logos</span><select id=\"footer-ctrl-partner\" class=\"demo-panel-select\" onchange=\"_footerUpdate()\"><option value=\"none\">none</option><option value=\"gcash-x\">GCash × partner</option><option value=\"grouped\">grouped</option><option value=\"powered-by\">powered-by row</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works as the page-bottom region across the flows that need a regulatory disclaimer. The seven authored variants are a curated set matching real screens rather than a partial matrix, so every supported arrangement is available without detaching."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its disclaimer copy, partner marks and layout. The baked legal text is deliberate — fixed wording that must not drift per instance."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Property names follow §1, the partner axes are collapsed into one <code>LogoType</code> enum, <code>Label</code> reads <code>True</code>/<code>False</code>, and every layer carries a semantic name."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Partner marks come from <code>Logos - Footer</code> instances so a logo change updates from one source, and the component drops into any page bottom without configuration."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "7 variants",
        "notes": "The only modeled state — footer is informational."
      },
      {
        "state": "Link pressed",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "\"GLoan/GCredit/GSave on Help Center\" should be a Text Button / Link instance with its own pressed state."
      },
      {
        "state": "Link disabled",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Informational link — rarely disabled in practice."
      }
    ],
    "resolved": [
      {
        "headline": "Property names cleaned up.",
        "body": "v2.0: Rebuilt on node <code>4227:11068</code> in the 2026 Working File. The spaced, jargon-laden property names are gone — the schema is now <code>Alignment</code> × <code>LogoType</code> × <code>Label</code> × <code>Description</code>, all PascalCase per §1. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Three partner axes collapsed into one enum.",
        "body": "v2.0: <code>LogoType = Group | Single | None</code> replaces the separate per-partner axes, which is what drove most of the original cartesian blow-up. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>hasDescription</code> renamed to <code>Description</code>.",
        "body": "v2.1: The property carries three values — <code>Default</code>, <code>None</code>, <code>Link</code> — so a <code>has*</code> prefix was wrong on two counts: §2 reserves it for true/false booleans, and <code>Link</code> describes a content type rather than presence. Now a plain enum. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer naming cleaned up.",
        "body": "v2.1: <code>container</code> → <code>FooterContent</code> and <code>#text</code> → <code>Disclaimer</code>, so the layer names say what they hold. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Raster partner logos accepted.",
        "body": "v2.1: Closed by owner decision — the partner marks stay as supplied raster assets inside <code>Logos - Footer</code> instances. Partner branding arrives as fixed artwork the DS does not control and may not redraw, so vectorising would mean recreating third-party marks. The instancing is the part that matters: a logo change updates from one source rather than per variant. (C6)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Baked disclaimer copy accepted.",
        "body": "v2.1: Closed by owner decision — the regulatory disclaimer stays as text in the component rather than becoming a slot. It is legal copy with fixed wording, so making it freely editable per instance would invite exactly the drift the fixed wording exists to prevent. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Alignment</code> retained as a property.",
        "body": "v2.1: Closed by owner decision — alignment stays on the component rather than moving to the consumer. The original assessment argued it is a layout concern; in practice the two alignments pair with different logo and label arrangements, so treating it as a component property keeps those pairings authored rather than left to each screen. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Footer confirmed as a component.",
        "body": "v2.1: Closed by owner decision — Footer stays a DS component rather than becoming a screen-level composition. The regulatory disclaimer and partner marks are fixed content that must appear identically wherever they appear, which is precisely what a component guarantees and a composition does not. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>Label</code> values normalised.",
        "body": "v2.2: The <code>No</code> value is renamed <code>False</code>, so <code>Label</code> now reads <code>True</code> / <code>False</code> consistently across all seven variants. It maps cleanly to a Swift <code>Bool</code> or Kotlin <code>Boolean</code>. The property keeps the bare name <code>Label</code> rather than taking a <code>has</code> prefix — worth revisiting only if the family standardises on verb-prefixed booleans. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Variant heights rounded.",
        "body": "v2.3: All seven variants now measure whole pixels — 150, 182, 120, 116, 95, 108 and 80 — replacing the unrounded auto-layout results. The last outlier, <code>Alignment=Left, LogoType=Single, Label=False, Description=Link</code>, went 115.751 → 116. Every dimension maps cleanly to a native layout value. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Variant selection confirmed curated.",
        "body": "v2.3: Closed by owner decision — the seven authored variants are the curated set, not a partial fill of a 36-cell matrix. Each corresponds to a screen that exists: left-aligned footers carry no label, <code>LogoType=None</code> and <code>Description=Default</code> each serve a single context. Unauthored combinations are deliberately unsupported rather than pending, so a consumer finding no variant for a pairing has the answer. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
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
    "recommendations": [
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "ft-spec-main",
        "demoKey": "main",
        "title": "Footer",
        "node": "4227:11068",
        "description": "",
        "previewHtml": "<div id=\"footer-spec-main\" class=\"spec-preview-body\"><svg width=\"360\" height=\"80\" viewBox=\"0 0 360 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"80\" fill=\"#FFFFFF\"/><rect x=\"24\" y=\"24\" width=\"312\" height=\"32\" rx=\"2\" fill=\"#EEF2F9\" stroke=\"#C2CFE5\" stroke-dasharray=\"3 3\"/><text class=\"ft-placeholder\" x=\"180\" y=\"40\" font-size=\"9\" fill=\"#C2CFE5\" text-anchor=\"middle\" dominant-baseline=\"central\">raster logo 312 × 32</text></svg></div>",
        "demoControls": footerDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Alignment",
                "value": "Center",
                "prop": "alignment"
              },
              {
                "key": "LogoType",
                "value": "Group",
                "prop": "logotype"
              },
              {
                "key": "Label",
                "value": "false",
                "prop": "label"
              },
              {
                "key": "Description",
                "value": "None",
                "prop": "description"
              },
              {
                "key": "Resolved variant",
                "value": "4227:11082 · 360 × 80",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": {
                    "value": "4227:11075 · 360 × 150"
                  },
                  "alignment:left|logotype:single|label:false|description:none": {
                    "value": "4227:11069 · 360 × 182"
                  },
                  "alignment:left|logotype:group|label:false|description:link": {
                    "value": "4227:11085 · 360 × 120"
                  },
                  "alignment:left|logotype:single|label:false|description:link": {
                    "value": "4227:11089 · 360 × 116"
                  },
                  "alignment:center|logotype:group|label:true|description:none": {
                    "value": "4227:11093 · 360 × 95"
                  },
                  "alignment:center|logotype:none|label:false|description:link": {
                    "value": "4227:11079 · 360 × 108"
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
                "value": "#FFFFFF",
                "token": "—"
              },
              {
                "key": "Preamble",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": { "hide": true },
                  "alignment:left|logotype:single|label:false|description:none": { "hide": true },
                  "alignment:left|logotype:group|label:false|description:link": { "hide": true },
                  "alignment:left|logotype:single|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:none|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:group|label:false|description:none": { "hide": true }
                }
              },
              {
                "key": "Disclaimer",
                "value": "#10346F",
                "token": "—",
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": {
                    "value": "#6780A9"
                  },
                  "alignment:left|logotype:single|label:false|description:none": {
                    "value": "#10346F"
                  },
                  "alignment:left|logotype:group|label:false|description:link": {
                    "value": "#7085A9"
                  },
                  "alignment:left|logotype:single|label:false|description:link": {
                    "value": "#7085A9"
                  },
                  "alignment:center|logotype:none|label:false|description:link": {
                    "value": "#10346F"
                  },
                  "alignment:center|logotype:group|label:true|description:none": {
                    "hide": true
                  },
                  "alignment:center|logotype:group|label:false|description:none": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Powered by label",
                "value": "#90A8D0",
                "token": "—",
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": { "hide": true },
                  "alignment:left|logotype:single|label:false|description:none": { "hide": true },
                  "alignment:left|logotype:group|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:group|label:true|description:none": { "hide": true },
                  "alignment:center|logotype:none|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:group|label:false|description:none": { "hide": true }
                }
              },
              {
                "key": "Logos",
                "value": "Raster — no colour to bind",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Preamble",
                "value": "Secondary/Bold/Small Caption",
                "mono": true,
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": { "hide": true },
                  "alignment:left|logotype:single|label:false|description:none": { "hide": true },
                  "alignment:left|logotype:group|label:false|description:link": { "hide": true },
                  "alignment:left|logotype:single|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:none|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:group|label:false|description:none": { "hide": true }
                }
              },
              {
                "key": "Disclaimer",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "alignment:center|logotype:group|label:true|description:none": { "hide": true },
                  "alignment:center|logotype:group|label:false|description:none": { "hide": true }
                }
              },
              {
                "key": "Powered by label",
                "value": "Primary/Multi-line Label/Fine",
                "mono": true,
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": { "hide": true },
                  "alignment:left|logotype:single|label:false|description:none": { "hide": true },
                  "alignment:left|logotype:group|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:group|label:true|description:none": { "hide": true },
                  "alignment:center|logotype:none|label:false|description:link": { "hide": true },
                  "alignment:center|logotype:group|label:false|description:none": { "hide": true }
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
                "value": "80px",
                "mono": true,
                "variants": {
                  "alignment:left|logotype:group|label:false|description:default": {
                    "value": "150px"
                  },
                  "alignment:left|logotype:single|label:false|description:none": {
                    "value": "182px"
                  },
                  "alignment:left|logotype:group|label:false|description:link": {
                    "value": "120px"
                  },
                  "alignment:left|logotype:single|label:false|description:link": {
                    "value": "116px"
                  },
                  "alignment:center|logotype:group|label:true|description:none": {
                    "value": "95px"
                  },
                  "alignment:center|logotype:none|label:false|description:link": {
                    "value": "108px"
                  }
                }
              },
              {
                "key": "Width",
                "value": "360px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "None",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V (measured)",
                "value": "24px top · 24px bottom",
                "mono": true,
                "variants": {
                  "alignment:left|logotype:single|label:false|description:none": { "value": "24px top · 32px bottom" },
                  "alignment:left|logotype:group|label:false|description:link": { "value": "12px top · 24px bottom" },
                  "alignment:center|logotype:group|label:true|description:none": { "value": "16px top · 16px bottom" },
                  "alignment:center|logotype:none|label:false|description:link": { "value": "24px top · 48px bottom" }
                }
              },
              {
                "key": "Gap",
                "value": "16px between every stacked block",
                "mono": true
              },
              {
                "key": "Content",
                "value": "312px — 360 less 24 either side",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Center — derived from layer bounds",
                "mono": true,
                "variants": {
                  "alignment:left": { "value": "Leading — derived from layer bounds" },
                  "alignment:left|logotype:group|label:false|description:default": { "value": "Leading text; logo group centred (x 86, 188 wide) — derived" }
                }
              }
            ]
          }
        ],
        "swift": "EBFooter()\n    .ebAlignment(.center)\n    .ebLogoType(.group)\n    .ebDescription(.none)",
        "compose": "EBFooter(\n    alignment = EBFooterAlignment.Center,\n    logoType = EBFooterLogoType.Group,\n    description = EBFooterDescription.None\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Variant",
        "description": "Read off <code>get_node_info</code> on each of the seven built variants of set <code>4227:11068</code>. <strong>The Disclaimer takes three different fills and they do not follow the <code>Description</code> axis</strong> — <code>Description=None</code> is <code>#10346F</code> on one variant and shows no disclaimer at all on another. The logos are <code>RECTANGLE</code> nodes with <code>IMAGE</code> fills, so they have no bindable colour. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Surface",
            "token": "All seven variants",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "Preamble",
            "token": "Center · Group · Label=True",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "Disclaimer",
            "token": "Left · Group · Description=Default",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "Left · Group · Description=Link",
            "values": [
              "—",
              "#7085A9"
            ]
          },
          {
            "role": "—",
            "token": "Left · Single · Description=Link",
            "values": [
              "—",
              "#7085A9"
            ]
          },
          {
            "role": "—",
            "token": "Left · Single · Description=None",
            "values": [
              "—",
              "#10346F"
            ]
          },
          {
            "role": "—",
            "token": "Center · None · Description=Link",
            "values": [
              "—",
              "#10346F"
            ]
          },
          {
            "role": "Powered by label",
            "token": "Left · Single · Description=Link",
            "values": [
              "—",
              "#90A8D0"
            ]
          },
          {
            "role": "Logos",
            "token": "Raster IMAGE fills — nothing to bind",
            "values": [
              "–",
              "– n/a"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:header:2.3.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.header.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4227:11068</code>, in panel order. Only seven of the 36 combinations are built, so the native API should accept a combination only if Figma draws it — see the Variants Inventory. The disclaimer copy, the partner marks and the Help Center action have no Figma property behind them.",
      "rows": [
        {
          "figma": "Alignment — Center, Left",
          "swift": "<code>.ebAlignment(.center / .leading)</code>",
          "compose": "<code>alignment = EBFooterAlignment.Center / Start</code>"
        },
        {
          "figma": "LogoType — None, Single, Group",
          "swift": "<code>.ebLogoType(.none / .single / .group)</code>",
          "compose": "<code>logoType = EBFooterLogoType.None / Single / Group</code>"
        },
        {
          "figma": "Label — True, False",
          "swift": "<code>.ebPreamble(String)</code> — omit for <code>False</code>",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "Description — None, Default, Link",
          "swift": "<code>.ebDescription(.none / .default / .link)</code>",
          "compose": "<code>description = EBFooterDescription.None / Default / Link</code>"
        },
        {
          "figma": "— no Figma property (disclaimer copy, baked per variant)",
          "swift": "<code>disclaimer: String?</code>",
          "compose": "<code>disclaimer: String? = null</code>"
        },
        {
          "figma": "— no Figma property (raster marks inside <code>Logos - Footer</code>)",
          "swift": "<code>logos: [Image]</code>",
          "compose": "<code>logos: List&lt;Painter&gt; = emptyList()</code>"
        },
        {
          "figma": "— no Figma property (the Help Center action on Link)",
          "swift": "<code>.onHelpCenter { }</code>",
          "compose": "<code>onHelpCenter: (() -&gt; Unit)? = null</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Header/EBFooter.swift",
        "compose": "android/components/header/EBFooter.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Left · Group · Default",
        "swift": "<span class=\"cmt\">// Alignment=Left, LogoType=Group, Label=False, Description=Default — 4227:11075, 360 × 150.</span>\n<span class=\"typ\">EBFooter</span>(disclaimer: <span class=\"str\">\"I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.\"</span>, logos: [gcash, cimb])\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">leading</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">group</span>)\n    .<span class=\"fn\">ebDescription</span>(.<span class=\"prp\">default</span>)",
        "compose": "<span class=\"cmt\">// Alignment=Left, LogoType=Group, Label=False, Description=Default — 4227:11075, 360 × 150.</span>\n<span class=\"typ\">EBFooter</span>(\n    disclaimer = <span class=\"str\">\"I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.\"</span>,\n    logos = listOf(gcash, cimb),\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Start</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">Group</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">Default</span>\n)"
      },
      {
        "subheading": "Left · Single · None",
        "swift": "<span class=\"cmt\">// Alignment=Left, LogoType=Single, Label=False, Description=None — 4227:11069, 360 × 182. Figma still draws a disclaimer here; see the open Changelog row.</span>\n<span class=\"typ\">EBFooter</span>(disclaimer: <span class=\"str\">\"Fuse Lending, Inc. SEC Reg. No. CS201617622, …\"</span>, logos: [fuse])\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">leading</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">single</span>)\n    .<span class=\"fn\">ebDescription</span>(.<span class=\"prp\">none</span>)",
        "compose": "<span class=\"cmt\">// Alignment=Left, LogoType=Single, Label=False, Description=None — 4227:11069, 360 × 182. Figma still draws a disclaimer here; see the open Changelog row.</span>\n<span class=\"typ\">EBFooter</span>(\n    disclaimer = <span class=\"str\">\"Fuse Lending, Inc. SEC Reg. No. CS201617622, …\"</span>,\n    logos = listOf(fuse),\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Start</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">Single</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">None</span>\n)"
      },
      {
        "subheading": "Left · Group · Link",
        "swift": "<span class=\"cmt\">// Alignment=Left, LogoType=Group, Label=False, Description=Link — 4227:11085, 360 × 120.</span>\n<span class=\"typ\">EBFooter</span>(disclaimer: <span class=\"str\">\"Learn about the Product Information & Support: GCredit on Help Center\"</span>, logos: [gcash, cimb])\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">leading</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">group</span>)\n    .<span class=\"fn\">ebDescription</span>(.<span class=\"prp\">link</span>)\n    .<span class=\"fn\">onHelpCenter</span> { openHelpCenter() }",
        "compose": "<span class=\"cmt\">// Alignment=Left, LogoType=Group, Label=False, Description=Link — 4227:11085, 360 × 120.</span>\n<span class=\"typ\">EBFooter</span>(\n    disclaimer = <span class=\"str\">\"Learn about the Product Information & Support: GCredit on Help Center\"</span>,\n    logos = listOf(gcash, cimb),\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Start</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">Group</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">Link</span>,\n    onHelpCenter = { openHelpCenter() }\n)"
      },
      {
        "subheading": "Left · Single · Link",
        "swift": "<span class=\"cmt\">// Alignment=Left, LogoType=Single, Label=False, Description=Link — 4227:11089, 360 × 116. The “Powered by” label is part of the nested logo row, not the Label property.</span>\n<span class=\"typ\">EBFooter</span>(disclaimer: <span class=\"str\">\"Learn about the Product Information & Support: GCredit on Help Center\"</span>, logos: [partner])\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">leading</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">single</span>)\n    .<span class=\"fn\">ebDescription</span>(.<span class=\"prp\">link</span>)\n    .<span class=\"fn\">onHelpCenter</span> { openHelpCenter() }",
        "compose": "<span class=\"cmt\">// Alignment=Left, LogoType=Single, Label=False, Description=Link — 4227:11089, 360 × 116. The “Powered by” label is part of the nested logo row, not the Label property.</span>\n<span class=\"typ\">EBFooter</span>(\n    disclaimer = <span class=\"str\">\"Learn about the Product Information & Support: GCredit on Help Center\"</span>,\n    logos = listOf(partner),\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Start</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">Single</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">Link</span>,\n    onHelpCenter = { openHelpCenter() }\n)"
      },
      {
        "subheading": "Center · Group · Label",
        "swift": "<span class=\"cmt\">// Alignment=Center, LogoType=Group, Label=True, Description=None — 4227:11093, 360 × 95.</span>\n<span class=\"typ\">EBFooter</span>(logos: [gcash, pdax])\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">center</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">group</span>)\n    .<span class=\"fn\">ebPreamble</span>(<span class=\"str\">\"In partnership with\"</span>)",
        "compose": "<span class=\"cmt\">// Alignment=Center, LogoType=Group, Label=True, Description=None — 4227:11093, 360 × 95.</span>\n<span class=\"typ\">EBFooter</span>(\n    logos = listOf(gcash, pdax),\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Center</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">Group</span>,\n    preamble = <span class=\"str\">\"In partnership with\"</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">None</span>\n)"
      },
      {
        "subheading": "Center · None · Link",
        "swift": "<span class=\"cmt\">// Alignment=Center, LogoType=None, Label=False, Description=Link — 4227:11079, 360 × 108.</span>\n<span class=\"typ\">EBFooter</span>(disclaimer: <span class=\"str\">\"Get information and product support. Find GSave in the Help Center\"</span>)\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">center</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">none</span>)\n    .<span class=\"fn\">ebDescription</span>(.<span class=\"prp\">link</span>)\n    .<span class=\"fn\">onHelpCenter</span> { openHelpCenter() }",
        "compose": "<span class=\"cmt\">// Alignment=Center, LogoType=None, Label=False, Description=Link — 4227:11079, 360 × 108.</span>\n<span class=\"typ\">EBFooter</span>(\n    disclaimer = <span class=\"str\">\"Get information and product support. Find GSave in the Help Center\"</span>,\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Center</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">None</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">Link</span>,\n    onHelpCenter = { openHelpCenter() }\n)"
      },
      {
        "subheading": "Center · Group · None",
        "swift": "<span class=\"cmt\">// Alignment=Center, LogoType=Group, Label=False, Description=None — 4227:11082, 360 × 80.</span>\n<span class=\"typ\">EBFooter</span>(logos: [gcash, cimb])\n    .<span class=\"fn\">ebAlignment</span>(.<span class=\"prp\">center</span>)\n    .<span class=\"fn\">ebLogoType</span>(.<span class=\"prp\">group</span>)\n    .<span class=\"fn\">ebDescription</span>(.<span class=\"prp\">none</span>)",
        "compose": "<span class=\"cmt\">// Alignment=Center, LogoType=Group, Label=False, Description=None — 4227:11082, 360 × 80.</span>\n<span class=\"typ\">EBFooter</span>(\n    logos = listOf(gcash, cimb),\n    alignment = <span class=\"typ\">EBFooterAlignment</span>.<span class=\"prp\">Center</span>,\n    logoType = <span class=\"typ\">EBFooterLogoType</span>.<span class=\"prp\">Group</span>,\n    description = <span class=\"typ\">EBFooterDescription</span>.<span class=\"prp\">None</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Partner mark labels",
        "ios": "The marks are raster images. Give each <code>.accessibilityLabel(\"CIMB\")</code> — the partner name, not \"logo\".",
        "android": "Supply <code>contentDescription</code> with the partner name on every logo <code>Image</code>."
      },
      {
        "requirement": "Help Center action",
        "ios": "On <code>Description=Link</code> the whole disclaimer is one text run in one colour — Figma draws no link span. Expose the action as a Button trait with the hint \"Opens Help Center\"; do not rely on colour.",
        "android": "Use <code>Modifier.clickable(role = Role.Button)</code> on the disclaimer, with an <code>onClickLabel</code>."
      },
      {
        "requirement": "Touch target",
        "ios": "A 2-line disclaimer is 36pt tall — under 44pt. Extend the hit area with <code>.contentShape</code>.",
        "android": "Under 48dp. Apply <code>Modifier.minimumInteractiveComponentSize()</code>."
      },
      {
        "requirement": "Reading order",
        "ios": "Preamble or “Powered by” → logos → disclaimer, in drawn order. On Left · Group · Default the disclaimer is drawn first and reads first. Combine the preamble with its logos using <code>.accessibilityElement(children: .combine)</code>.",
        "android": "Merge preamble and logos with <code>Modifier.semantics(mergeDescendants = true)</code>; composition order sets the rest."
      },
      {
        "requirement": "Contrast",
        "ios": "Preamble #6780A9 and Powered by #90A8D0 are light blue-greys on #FFFFFF at 10–12pt. Check both against WCAG AA before shipping.",
        "android": "Same fills — verify contrast; #90A8D0 at 12sp is the weakest."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Every Figma variant is a fixed height, and the Left · Single · None disclaimer already runs 7 lines. Let the footer grow; never truncate regulatory copy.",
        "android": "Use <code>sp</code> and wrap — no <code>maxLines</code> on the disclaimer."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Footer at the bottom of a product screen that must carry partner branding or regulatory copy.",
        "dontText": "Don’t use it as a general page footer or for navigation. It holds no links other than the single Help Center action."
      },
      {
        "doText": "Pick one of the seven built variants. The set is curated by owner decision; each maps to a screen that exists.",
        "dontText": "Don’t compose an unbuilt combination such as Left · None. Figma has no layout for it, so there is nothing to match."
      },
      {
        "doText": "Pass the disclaimer copy the product or compliance team supplies, verbatim.",
        "dontText": "Don’t edit, shorten or truncate regulatory text to fit the fixed Figma height."
      },
      {
        "doText": "Use <code>Label=True</code> for “In partnership with” above a centred logo group.",
        "dontText": "Don’t treat the “Powered by” text on Left · Single · Link as the Label property — it belongs to the nested logo row and is <code>Label=False</code>."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Renamed in v2.1 — <code>FooterContent</code> and <code>Disclaimer</code> — and partner marks sit inside <code>Logos - Footer</code> instances. Variant names read all four axes in panel order."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Names are clean — four PascalCase axes, <code>Label</code> True/False since v2.2. But a value does not always mean the same thing: <code>Description=None</code> still draws a 7-line disclaimer on Left · Single (4227:11069), and <code>Description=Link</code> draws no link. The curated seven-variant set itself is an owner decision and is not re-raised."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All three text layers resolve <code>matched</code> on every variant — <code>Secondary/Bold/Small Caption</code>, <code>Secondary/Bold/Caption</code>, <code>Primary/Multi-line Label/Fine</code>. But the same Disclaimer layer carries three fills — #6780A9, #7085A9, #10346F — that follow no axis. Colour bindings cannot be read with the plugin, so whether any is tokenised is unconfirmed."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A vertical stack of preamble, logo row and text — one <code>EBFooter</code> view and composable. Heights are whole pixels since v2.3. Top and bottom offsets vary by variant (12 to 48) with no rule, so the native layout must reproduce each measured variant rather than one padding value."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Description=Link</code> implies a Help Center action, yet the disclaimer is one text segment in the same grey with no link colour, underline or pressed state. The tap target and its states are undesigned."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Raster partner marks accepted by owner decision in v2.1 — third-party artwork the DS may not redraw. Delivered through <code>Logos - Footer</code> instances, so a mark updates from one source."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Property names are ready to map. No SwiftUI or Compose mappings are registered; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 7,
      "description": "<code>Alignment</code> (2) × <code>LogoType</code> (3) × <code>Label</code> (2) × <code>Description</code> (3) = 36 combinations; <strong>7 built</strong>, a curated set by owner decision (v2.3). Every variant is 360 wide. Offsets are measured from layer bounds — the plugin cannot read auto-layout padding.",
      "columns": [
        "Alignment",
        "LogoType",
        "Label",
        "Description",
        "Node ID",
        "Height",
        "Top / bottom",
        "Content"
      ],
      "rows": [
        {
          "cells": [
            "Left",
            "Group",
            "<code>False</code>",
            "Default",
            "<code>4227:11075</code>",
            "150px",
            "24 / 24",
            "Disclaimer (3 lines, #6780A9) above a 188 × 32 logo group"
          ]
        },
        {
          "cells": [
            "Left",
            "Single",
            "<code>False</code>",
            "None",
            "<code>4227:11069</code>",
            "182px",
            "24 / 32",
            "73 × 59 logo beside a 7-line disclaimer (#10346F)"
          ]
        },
        {
          "cells": [
            "Left",
            "Group",
            "<code>False</code>",
            "Link",
            "<code>4227:11085</code>",
            "120px",
            "12 / 24",
            "2-line disclaimer (#7085A9) above a 312 × 32 logo group"
          ]
        },
        {
          "cells": [
            "Left",
            "Single",
            "<code>False</code>",
            "Link",
            "<code>4227:11089</code>",
            "116px",
            "24 / 24",
            "“Powered by” label + 58.5 × 15.75 logo, then 2-line disclaimer (#7085A9)"
          ]
        },
        {
          "cells": [
            "Center",
            "Group",
            "<code>True</code>",
            "None",
            "<code>4227:11093</code>",
            "95px",
            "16 / 16",
            "“In partnership with” preamble above a 206 × 32 logo group"
          ]
        },
        {
          "cells": [
            "Center",
            "None",
            "<code>False</code>",
            "Link",
            "<code>4227:11079</code>",
            "108px",
            "24 / 48",
            "2-line centred disclaimer (#10346F), no logos"
          ]
        },
        {
          "cells": [
            "Center",
            "Group",
            "<code>False</code>",
            "None",
            "<code>4227:11082</code>",
            "80px",
            "24 / 24",
            "312 × 32 logo group only"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.3.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4227:11068",
      "rows": [
        {
          "body": "<strong>The Code tab still described the pre-v2.0 component.</strong> Property Mapping listed <code>label: yes | no</code>, <code>gcash x partner</code>, <code>with partner</code>, <code>grouped logos</code> and <code>description: with link</code>; the inventory pointed at retired <code>21:215*</code> nodes. Rebuilt on <code>Alignment</code> × <code>LogoType</code> × <code>Label</code> × <code>Description</code>, seven variants on <code>4227:*</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard contradicted the resolved record.</strong> C1, C2, C4, C5 and C6 were Requires Rework for problems closed in v2.0–v2.3 — the renames, the logo-axis collapse, raster marks (owner decision v2.1), <code>Alignment</code> retained (v2.1). Rescored C1, C4, C6 Ready; C2, C3, C5 Needs Refinement on new findings.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Installation, usage snippets and guidelines were empty.</strong> Added SPM + Gradle <code>com.eastblue.ds:header:2.3.1</code>, one snippet per built variant, and four do/don’t pairs.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab: the Disclaimer text style was wrong.</strong> The row read “no text style bound” with a font spec. All five Disclaimer layers — 4227:11077, 11074, 11087, 11092, 11081 — carry <code>Secondary/Bold/Caption</code>, matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Style tab: the “Powered by” label was missing.</strong> On Left · Single · Link (4227:11089) a nested text layer draws “Powered by” in #90A8D0 with <code>Primary/Multi-line Label/Fine</code>, matched. Added to Colors, Typography and the preview; the earlier note that #90A8D0 appeared nowhere is withdrawn.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Style tab: Padding V was wrong on four variants.</strong> The row claimed 24/24 with 16 on two variants. Measured offsets are 24/24, 24/32, 12/24, 24/24, 16/16, 24/48 and 24/24. Now a per-variant row, labelled measured.",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
          {
          "body": "<strong>Style tab: Preamble rows showed on every variant.</strong> Only Center · Group · Label=True (4227:11093) draws a preamble; the Colors and Typography rows now hide elsewhere. The Layout Alignment row, which stated the logo group was centred on every Left variant, is now per variant — true only for Left · Group · Default — and still labelled derived.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
      {
          "body": "<strong>Disclaimer takes three fills with no axis behind them</strong> — #6780A9 (Left · Group · Default), #7085A9 (both Left · Link), #10346F (Left · Single · None, Center · None · Link). <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong><code>Description=None</code> still draws a disclaimer</strong> on Left · Single (4227:11069) — seven lines of Fuse Lending copy. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong><code>Description=Link</code> draws no link.</strong> The disclaimer is a single text segment in the same fill as the other values, so the Help Center action has no visual affordance or pressed state. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Top and bottom offsets follow no rule</strong> — from 12 to 48 across seven variants. Auto-layout padding is not readable with the plugin; the designer should confirm whether 12 and 48 are intended. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Colour token bindings unconfirmed.</strong> The plugin cannot read variable bindings, so every token column reads <code>—</code>. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>v2.0.0 through v2.3.0 have no changelog entries.</strong> The Overview records eleven resolutions across those versions, but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere readable, so they are not invented. <span class=\"tag-open\">Open</span>",
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
      "header": "Initial Assessment · node 21:215190",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename 6 axes to camelCase, collapse three partner booleans into one <code>partnerLogos</code> enum, expose partner-logo Slot, remove <code>alignment</code> axis (consumer owns layout). <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>Disclaimer + help link should be slots, not baked copy</strong> — Disclaimer becomes <code>disclaimer: String</code> (or Inline Text instance). Help link becomes a Text Button instance with its own state coverage. <span class=\"tag-open tag-c4 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 · C5"
          }
        },
        {
          "body": "<strong>Partner logos are raster</strong> — Provide vector source in a Partner Logos set; swap raster fills for Logo instances. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until property names normalize and content slots are introduced. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
