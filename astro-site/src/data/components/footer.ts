import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/footer.js`.
const footerDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Variant',
        prop: 'variant',
        options: [
          { value: '1', label: '1 · Powered-by + disclaimer + link' },
          { value: '2', label: '2 · Acknowledgement + GCash×Partner' },
          { value: '3', label: '3 · Help-center link (center)' },
          { value: '4', label: '4 · GCash×Partner only (center)' },
          { value: '5', label: '5 · Link + GCash×Partner' },
          { value: '6', label: '6 · Powered-by Bayad + link' },
          { value: '7', label: '7 · In partnership with' },
        ],
      },
      {
        label: 'Alignment',
        prop: 'alignment',
        options: [
          { value: 'left', label: 'left' },
          { value: 'center', label: 'center' },
        ],
      },
      {
        label: 'Description',
        prop: 'description',
        options: [
          { value: 'none', label: 'none' },
          { value: 'default', label: 'default' },
          { value: 'with-link', label: 'with link' },
        ],
      },
      {
        label: 'Partner Logos',
        prop: 'partnerLogos',
        options: [
          { value: 'none', label: 'none' },
          { value: 'gcash-x', label: 'GCash × partner' },
          { value: 'grouped', label: 'grouped' },
          { value: 'powered-by', label: 'powered-by row' },
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
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": footerDemoControls,
        "title": "Default",
        "node": "21:215191",
        "description": "Page-bottom region. Flip the Variant control to walk through every shipped layout (1–7), then override Alignment / Description / Partner Logos to compose your own.",
        "previewHtml": "<div id=\"footer-spec-preview\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant",         "value": "1",          "prop": "variant",      "mono": true },
              { "key": "Alignment",       "value": "left",       "prop": "alignment",    "mono": true },
              { "key": "Description",     "value": "none",       "prop": "description",  "mono": true },
              { "key": "Partner logos",   "value": "powered-by", "prop": "partnerLogos", "mono": true }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",     "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label",       "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link",        "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "360",       "mono": true },
              { "key": "Padding",        "value": "24 all sides", "mono": true },
              { "key": "Row gap (V1/V6)","value": "16",        "mono": true },
              { "key": "Logo→logo gap",  "value": "16",        "mono": true },
              { "key": "Logo size",      "value": "18 tall (asset)",  "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label (Powered by)", "value": "Proxima Soft Bold · 12 / 12 · +0.5 · #90A8D0", "mono": true },
              { "key": "Disclaimer",         "value": "BarkAda Semibold · 12 / 18 · #6780A9",          "mono": true },
              { "key": "Link",               "value": "BarkAda Semibold · 12 / 18 · #005CE5",          "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Powered by Fuse\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDisclaimer</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Regulatory disclaimer copy\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebHelpLink</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Help center\"</span><span class=\"syn-punc\">, </span>destination<span class=\"syn-punc\">: </span>url<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>\n    poweredBy <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Powered by Fuse\"</span><span class=\"syn-punc\">,</span>\n    disclaimer <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Regulatory disclaimer copy\"</span><span class=\"syn-punc\">,</span>\n    helpLink <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFooterLink</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Help center\"</span><span class=\"syn-punc\">, </span>url<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      }

    ],
    colorsTables: (() => {
      // All seven footer cards share the same palette; only structural roles differ.
      const rows = [
        { role: 'Surface',     token: 'footer/color/bg',          value: '#FFFFFF' },
        { role: 'Label',       token: 'footer/color/label',       value: '#90A8D0' },
        { role: 'Description', token: 'footer/color/description', value: '#6780A9' },
        { role: 'Link',        token: 'footer/color/label-link',  value: '#005CE5' },
      ];
      const variants = [1, 2, 3, 4, 5, 6, 7];
      return variants.map((i) => buildStatelessColorsTable({
        title: `Variant ${i} — Colors`,
        description: 'Footer chrome palette: white surface with muted helper labels and an accent link.',
        rows,
      }));
    })(),
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>label: yes | no</code>",
          "swift": "<code>poweredByLabel?: String</code>",
          "compose": "<code>poweredByLabel: String?</code>"
        },
        {
          "figma": "<code>gcash x partner</code> + <code>with partner</code> + <code>grouped logos</code>",
          "swift": "<code>partnerLogos?: .none | .single | .grouped | .gcashX</code>",
          "compose": "<code>partnerLogos: EBPartnerLogos?</code>"
        },
        {
          "figma": "(baked in each variant)",
          "swift": "<code>partnerLogo slot</code>",
          "compose": "<code>partnerLogo: Image?</code>"
        },
        {
          "figma": "<code>description: none | default | with link</code>",
          "swift": "<code>disclaimer?: String</code>",
          "compose": "<code>disclaimer: String?</code>"
        },
        {
          "figma": "(baked in each variant)",
          "swift": "<code>helpLink?: { label, action }</code>",
          "compose": "<code>helpLink: EBHelpLink?</code>"
        },
        {
          "figma": "<code>alignment: left | center</code>",
          "swift": "(removed — consumer owns layout)",
          "compose": "(n/a)"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Logo alt text",
        "ios": "Each partner logo must carry <code>.accessibilityLabel(\"GCash\")</code> / <code>.accessibilityLabel(\"CIMB\")</code>.",
        "android": "Each logo <code>Image</code> must supply <code>contentDescription</code>."
      },
      {
        "requirement": "Help link role",
        "ios": "Expose as Button with accessibility hint \"Opens help center\".",
        "android": "Wrap in <code>Modifier.clickable</code> with <code>Role.Button</code> semantics."
      },
      {
        "requirement": "Minimum touch target",
        "ios": "Help-link hit area ≥44×44pt.",
        "android": "Help-link hit area ≥48×48dp."
      },
      {
        "requirement": "Reading order",
        "ios": "Label → logos → disclaimer → help link. VoiceOver follows DOM order.",
        "android": "Same order — TalkBack follows composition order."
      },
      {
        "requirement": "Disclaimer readability",
        "ios": "Ensure Dynamic Type scales disclaimer text; do not clip at large sizes.",
        "android": "Support <code>fontScale</code>; wrap rather than truncate."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Variant names spell out all 6 axes verbatim; layer names default-hug groups like \"Logos - Footer Group\" repeat across variants."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Property names contain spaces (<code>gcash x partner</code>, <code>grouped logos</code>, <code>with partner</code>). Three axes describe the same thing."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Spacing, bg, label, description, and link-label are all bound to <code>main/footer/color/*</code> and <code>space/space-*</code> tokens. Typography pulls <code>Primary/Label/Fine</code>, <code>Secondary/Bold/Caption</code>, and <code>Secondary/Bold/Small Caption</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Disclaimer copy + help link live inside variants — not props. Alignment is a consumer concern. Partner logos are baked assets, not a slot."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Help-center link is styled text, not a Text Button instance — no pressed/focused/disabled states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "CIMB, Fuse, PDAX, Bayad logos ship as raster <code>&lt;img&gt;</code> fills. Need vector source + a Partner Logos set."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Cannot map until property names normalize, drawn text becomes slots, and partner logos resolve via a Slot."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 7,
      "description": "Six boolean-ish axes combine to ~96 theoretical shapes — only <strong>7 built</strong>. Each shipped variant solves a specific product flow (GLoan, GCredit, GSave, PDAX, Bayad).",
      "columns": [
        "#",
        "Node",
        "description",
        "label",
        "gcash x partner",
        "alignment",
        "with partner",
        "grouped logos",
        "Use case"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>21:215191</code>",
            "none",
            "no",
            "no",
            "left",
            "yes",
            "no",
            "GLoan — Powered-by Fuse + disclaimer + link"
          ]
        },
        {
          "cells": [
            "2",
            "<code>21:215193</code>",
            "default",
            "no",
            "yes",
            "left",
            "no",
            "no",
            "Credit acknowledgement + GCash × CIMB"
          ]
        },
        {
          "cells": [
            "3",
            "<code>21:215195</code>",
            "with link",
            "no",
            "no",
            "center",
            "no",
            "no",
            "GSave — centered help-link only"
          ]
        },
        {
          "cells": [
            "4",
            "<code>21:215197</code>",
            "none",
            "no",
            "yes",
            "center",
            "no",
            "no",
            "GCash × CIMB logos, centered, no text"
          ]
        },
        {
          "cells": [
            "5",
            "<code>21:215199</code>",
            "with link",
            "no",
            "yes",
            "left",
            "no",
            "no",
            "GCredit — link + GCash × CIMB"
          ]
        },
        {
          "cells": [
            "6",
            "<code>21:215201</code>",
            "with link",
            "no",
            "no",
            "left",
            "yes",
            "no",
            "Powered-by Bayad row + link"
          ]
        },
        {
          "cells": [
            "7",
            "<code>21:215203</code>",
            "none",
            "yes",
            "no",
            "center",
            "no",
            "yes",
            "\"In partnership with\" · GCash + PDAX grouped"
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
