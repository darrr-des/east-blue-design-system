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
    "node": "21:215190",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=21-215190",
    "description": "A page-bottom region containing partner logos, regulatory disclaimers, and helper links.",
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
    "navGroup": "Header",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — rename props, collapse partner axes, slot partner logos",
      "text": "The current 6-axis boolean model invites ~96 invalid combinations for only 7 real shapes. Three of those axes (<code>gcash x partner</code>, <code>with partner</code>, <code>grouped logos</code>) all describe the same thing: which partner logo(s) sit next to GCash. Collapse them into one <code>partnerLogos</code> enum, rename the remaining props to camelCase, and expose a Slot so consumers can instance-swap any partner logo instead of shipping a new variant per brand (CIMB, Fuse, PDAX, Bayad…)."
    }
  },
  "overview": {
    "inContextNote": "The Footer sits at the bottom of lending/savings/investment flows — carrying regulatory disclosures, partner attribution, and a link to more information on the Help Center.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"footer-demo-preview\"><div class=\"eb-preview eb-preview-footer\" data-variant=\"1\"><div class=\"eb-preview-footer__row\"><div class=\"eb-preview-footer__powered-col\"><span class=\"eb-preview-footer__label\">Powered by</span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--fuse\"><svg viewBox=\"0 0 72 18\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"0\" y=\"14\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"14\" fill=\"#F15B2E\">FUSE</text><rect x=\"38\" y=\"4\" width=\"10\" height=\"10\" transform=\"rotate(45 43 9)\" fill=\"#F15B2E\"></rect></svg></span></div><div class=\"eb-preview-footer__body\"><p class=\"eb-preview-footer__desc\">Fuse Lending, Inc. SEC Reg. No. CS201617622,</p><p class=\"eb-preview-footer__desc\">Cert. of Authority to Operate Lending Company, (CA) No. 1897</p><p class=\"eb-preview-footer__desc eb-preview-footer__desc--spaced\">Learn about the Product Information &amp; Support:</p><a class=\"eb-preview-footer__link\" href=\"#\" onclick=\"return false;\">GLoan on Help Center</a></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><select id=\"footer-ctrl-variant\" class=\"demo-panel-select\" onchange=\"_footerUpdate()\"><option value=\"1\">1 · Powered-by + disclaimer + link</option><option value=\"2\">2 · Disclaimer + GCash×Partner (left)</option><option value=\"3\">3 · Help Center link (center)</option><option value=\"4\">4 · GCash×Partner logos (center)</option><option value=\"5\">5 · GCash×Partner + link (left)</option><option value=\"6\">6 · Powered-by row + link (left)</option><option value=\"7\">7 · In partnership with · grouped logos (center)</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">alignment</span><code id=\"footer-ctrl-alignment-readout\" class=\"demo-panel-readout\">left</code></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><code id=\"footer-ctrl-description-readout\" class=\"demo-panel-readout\">none</code></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Works only for products that match one of the seven hardcoded shapes (GLoan, GCredit, GSave, PDAX, Bayad). Any new product or partner requires a new variant rather than an instance swap."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Carries its own bg, typography, and spacing tokens — but disclaimer copy is baked per variant instead of accepting a text prop."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Property names mix spaces and verbose phrasing (\"gcash x partner\", \"with partner\", \"grouped logos\"). Three axes describe the same concept (which partner logo). <code>alignment</code> is a layout concern the consumer should own."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Disclaimer + link render as drawn text rather than instances of <strong>Inline Text</strong> / <strong>Callout</strong>. Partner logos are baked raster fills, not a Slot accepting Logo instances."
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
    "resolved": [],
    "open": [
      {
        "headline": "Variant names carry the full property matrix.",
        "body": "Every variant is literally named <code>description=…, label=…, gcash x partner=…, alignment=…, with partner=…, grouped logos=…</code>. Cumbersome to read and includes spaces inside values.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Property names contain spaces and jargon.",
        "body": "<code>gcash x partner</code>, <code>with partner</code>, <code>grouped logos</code> are invalid identifiers for code generation and Code Connect, and three of them all describe \"which partner logo is shown\".",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Sparse 6-axis cartesian.",
        "body": "2 × 2 × 2 × 2 × 2 × 3 (counting <code>description</code> as 3-value) ≈ 96 theoretical combos, only 7 built. Boolean model promises invalid combinations.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Alignment is a layout concern, not a component prop.",
        "body": "The consumer's parent frame should control centering — not a footer variant. Forces two full variant trees for the same content.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Disclaimer copy is baked into each variant.",
        "body": "\"Fuse Lending, Inc. SEC Reg. No. CS201617622…\" and \"I acknowledge receipt of this statement…\" live inside the component. Any copy change requires reshipping the variant. Should be a <code>disclaimer: String</code> prop.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Help-center link is drawn, not an instance.",
        "body": "\"GLoan on Help Center\" / \"GCredit on Help Center\" / \"Find GSave in the Help Center\" are styled text spans, not Text Button instances. No pressed state, no underline affordance, no tap target.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Partner logos are baked raster.",
        "body": "CIMB, Fuse, PDAX, and Bayad ship as <code>&lt;img&gt;</code> tags with remote asset URLs. No vector source, no slot for consumers to instance-swap. Adding a new partner requires a new variant.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Cannot map until property names normalize and drawn text becomes slots.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Collapse three partner axes into one enum.",
        "body": "Replace <code>gcash x partner</code> + <code>with partner</code> + <code>grouped logos</code> with a single <code>partnerLogos: .none | .single | .grouped | .gcashX</code>. Removes ~40 invalid combos and makes the design space legible.",
        "tag": "Property"
      },
      {
        "headline": "Rename all property names to camelCase.",
        "body": "<code>gcash x partner</code> → <code>partnerLogos</code>, <code>with partner</code> → absorbed into <code>partnerLogos</code>, <code>grouped logos</code> → absorbed, <code>label</code> → <code>poweredByLabel</code>. No spaces, no ambiguity.",
        "tag": "Rename"
      },
      {
        "headline": "Expose partner logos as a Slot.",
        "body": "Instead of shipping a variant per brand (CIMB, Fuse, PDAX, Bayad), adopt a Figma Slot that accepts any Logo instance. New partner = new instance, not new variant.",
        "tag": "Slot"
      },
      {
        "headline": "Move <code>alignment</code> to the consumer.",
        "body": "Parent screen/frame owns centering. Removes one full axis and halves the variant count.",
        "tag": "Property"
      },
      {
        "headline": "Expose disclaimer + help link as slots, not baked copy.",
        "body": "Disclaimer becomes an instance of <strong>Inline Text</strong> or <strong>Callout</strong>. \"…on Help Center\" becomes a <strong>Text Button</strong> instance. Both inherit their component's state + accessibility.",
        "tag": "Composition"
      },
      {
        "headline": "Provide vector source for partner logos.",
        "body": "Swap raster fills for vector Logo instances in a dedicated Partner Logos set. Fixes C6 and unlocks the Slot recommendation above.",
        "tag": "Asset"
      },
      {
        "headline": "Consider whether Footer is a component at all.",
        "body": "Once alignment moves to the consumer and disclaimer/link/logos become slot-filled instances, Footer is essentially a layout primitive (VStack with padding + white bg). It may be cheaper to document the recipe than ship a 7-variant component.",
        "tag": "Composition"
      },
      {
        "headline": "Family context.",
        "body": "Footer lives with <a href=\"#\" onclick=\"showPanelById('header');return false;\">Header</a> siblings in the Figma Pages panel. Keep them grouped in the sidebar but treat restructure independently.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "variant-1-·-powered-by-+-disclaimer-+-help-link-(left)",
        "demoKey": "v1",
        "demoControls": footerDemoControls,
        "title": "Variant 1 · Powered-by + disclaimer + help link (left)",
        "node": "21:215191",
        "description": "Left-aligned column: \"Powered by\" label, Fuse logo, dense regulatory disclaimer, help-center link. Used at the end of GLoan flows.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-1\"><div class=\"eb-preview eb-preview-footer\" data-variant=\"1\"><div class=\"eb-preview-footer__row\"><div class=\"eb-preview-footer__powered-col\"><span class=\"eb-preview-footer__label\">Powered by</span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--fuse\"><svg viewBox=\"0 0 72 18\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"0\" y=\"14\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"14\" fill=\"#F15B2E\">FUSE</text><rect x=\"38\" y=\"4\" width=\"10\" height=\"10\" transform=\"rotate(45 43 9)\" fill=\"#F15B2E\"></rect></svg></span></div><div class=\"eb-preview-footer__body\"><p class=\"eb-preview-footer__desc\">Fuse Lending, Inc. SEC Reg. No. CS201617622,</p><p class=\"eb-preview-footer__desc\">Cert. of Authority to Operate Lending Company, (CA) No. 1897</p><p class=\"eb-preview-footer__desc eb-preview-footer__desc--spaced\">Learn about the Product Information &amp; Support:</p><a class=\"eb-preview-footer__link\" href=\"#\" onclick=\"return false;\">GLoan on Help Center</a></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "1",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "none",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "left",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "powered-by",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link", "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "\"Powered by\"",
                "value": "Primary/Label/Fine · Proxima Soft Bold 12/12 · 0.5 tracking",
                "mono": true
              },
              {
                "key": "Disclaimer",
                "value": "Secondary/Bold/Caption · BarkAda SemiBold 12/18",
                "mono": true
              },
              {
                "key": "Help link",
                "value": "Secondary/Bold/Caption · BarkAda SemiBold 12/18",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "360",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "pt 24 · pb 32 · px 24",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              },
              {
                "key": "Content gap",
                "value": "space/space-16 (16)",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Powered by Fuse\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDisclaimer</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Regulatory disclaimer copy\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebHelpLink</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Help center\"</span><span class=\"syn-punc\">, </span>destination<span class=\"syn-punc\">: </span>url<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>\n    poweredBy <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Powered by Fuse\"</span><span class=\"syn-punc\">,</span>\n    disclaimer <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Regulatory disclaimer copy\"</span><span class=\"syn-punc\">,</span>\n    helpLink <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFooterLink</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Help center\"</span><span class=\"syn-punc\">, </span>url<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "variant-2-·-acknowledgement-disclaimer-+-gcash×partner-(left)",
        "demoKey": "v2",
        "demoControls": footerDemoControls,
        "title": "Variant 2 · Acknowledgement disclaimer + GCash×Partner (left)",
        "node": "21:215193",
        "description": "Acknowledgement text above a GCash × CIMB logo pair. Used to confirm credit disclosure.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-2\"><div class=\"eb-preview eb-preview-footer\" data-variant=\"2\"><p class=\"eb-preview-footer__desc\">I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.</p><div class=\"eb-preview-footer__logos eb-preview-footer__logos--left\"><span class=\"eb-preview-footer__logo eb-preview-footer__logo--gcash\"><svg viewBox=\"0 0 97 32\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"16\" r=\"9\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"3\"></circle><path d=\"M12 16h7\" stroke=\"#005CE5\" stroke-width=\"3\" stroke-linecap=\"round\"></path><text x=\"26\" y=\"22\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#0A2757\">GCash</text></svg></span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--cimb\"><svg viewBox=\"0 0 88 17\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"2\" width=\"42\" height=\"13\" fill=\"#A6192E\"></rect><text x=\"4\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#FFFFFF\">CIMB</text><text x=\"46\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#0A2757\">BANK</text></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "2",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "default",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "left",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "gcash-x",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding",
                "value": "p 24",
                "mono": true
              },
              {
                "key": "Content gap",
                "value": "space/space-16 (16)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>disclaimer<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Acknowledgement disclaimer copy\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPartnerLogos</span><span class=\"syn-punc\">(</span><span class=\"syn-punc\">[</span>gcashLogo<span class=\"syn-punc\">, </span>partnerLogo<span class=\"syn-punc\">]</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAlignment</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.leading</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>\n    disclaimer <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Acknowledgement disclaimer copy\"</span><span class=\"syn-punc\">,</span>\n    partnerLogos <span class=\"syn-eq\">=</span> logos<span class=\"syn-punc\">,</span>\n    alignment <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFooterAlignment</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Leading</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "variant-3-·-help-center-link-(center)",
        "demoKey": "v3",
        "demoControls": footerDemoControls,
        "title": "Variant 3 · Help Center link (center)",
        "node": "21:215195",
        "description": "Two centered lines: preamble + help-center link. Used at the foot of GSave.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-3\"><div class=\"eb-preview eb-preview-footer eb-preview-footer--center\" data-variant=\"3\"><p class=\"eb-preview-footer__desc\">Get information and product support.</p><a class=\"eb-preview-footer__link\" href=\"#\" onclick=\"return false;\">Find GSave in the Help Center</a></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "3",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "with-link",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "center",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "none",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link", "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "24px / 32px",
                "mono": true
              },
              {
                "key": "Logo gap",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "variant-4-·-gcash-×-partner-logos-only-(center)",
        "demoKey": "v4",
        "demoControls": footerDemoControls,
        "title": "Variant 4 · GCash × Partner logos only (center)",
        "node": "21:215197",
        "description": "Minimal centered variant — GCash + partner logo pair, no text. Disclosure compliance only.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-4\"><div class=\"eb-preview eb-preview-footer eb-preview-footer--center\" data-variant=\"4\"><div class=\"eb-preview-footer__logos eb-preview-footer__logos--center\"><span class=\"eb-preview-footer__logo eb-preview-footer__logo--gcash\"><svg viewBox=\"0 0 97 32\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"16\" r=\"9\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"3\"></circle><path d=\"M12 16h7\" stroke=\"#005CE5\" stroke-width=\"3\" stroke-linecap=\"round\"></path><text x=\"26\" y=\"22\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#0A2757\">GCash</text></svg></span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--cimb\"><svg viewBox=\"0 0 88 17\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"2\" width=\"42\" height=\"13\" fill=\"#A6192E\"></rect><text x=\"4\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#FFFFFF\">CIMB</text><text x=\"46\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#0A2757\">BANK</text></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "4",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "none",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "center",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "gcash-x",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link", "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "24px / 32px",
                "mono": true
              },
              {
                "key": "Logo gap",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "variant-5-·-link-+-gcash-×-partner-(left)",
        "demoKey": "v5",
        "demoControls": footerDemoControls,
        "title": "Variant 5 · Link + GCash × Partner (left)",
        "node": "21:215199",
        "description": "Left-aligned: help-center link on top, GCash × CIMB pair below. Used at the foot of GCredit.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-5\"><div class=\"eb-preview eb-preview-footer\" data-variant=\"5\"><p class=\"eb-preview-footer__desc\">Learn about the Product Information &amp; Support:</p><a class=\"eb-preview-footer__link\" href=\"#\" onclick=\"return false;\">GCredit on Help Center</a><div class=\"eb-preview-footer__logos eb-preview-footer__logos--left\"><span class=\"eb-preview-footer__logo eb-preview-footer__logo--gcash\"><svg viewBox=\"0 0 97 32\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"16\" r=\"9\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"3\"></circle><path d=\"M12 16h7\" stroke=\"#005CE5\" stroke-width=\"3\" stroke-linecap=\"round\"></path><text x=\"26\" y=\"22\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#0A2757\">GCash</text></svg></span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--cimb\"><svg viewBox=\"0 0 88 17\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"2\" width=\"42\" height=\"13\" fill=\"#A6192E\"></rect><text x=\"4\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#FFFFFF\">CIMB</text><text x=\"46\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#0A2757\">BANK</text></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "5",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "with-link",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "left",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "gcash-x",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link", "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "24px / 32px",
                "mono": true
              },
              {
                "key": "Logo gap",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "variant-6-·-powered-by-row-+-link-(left)",
        "demoKey": "v6",
        "demoControls": footerDemoControls,
        "title": "Variant 6 · Powered-by row + link (left)",
        "node": "21:215201",
        "description": "\"Powered by Bayad Partners\" row on top, help-center link underneath.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-6\"><div class=\"eb-preview eb-preview-footer\" data-variant=\"6\"><div class=\"eb-preview-footer__powered-row\"><span class=\"eb-preview-footer__label\">Powered by</span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--bayad\"><svg viewBox=\"0 0 59 16\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7\" cy=\"8\" r=\"5\" fill=\"#E4002B\"></circle><text x=\"14\" y=\"12\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#0A2757\">Bayad</text></svg></span></div><p class=\"eb-preview-footer__desc\">Learn about the Product Information &amp; Support:</p><a class=\"eb-preview-footer__link\" href=\"#\" onclick=\"return false;\">GCredit on Help Center</a></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "6",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "with-link",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "left",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "powered-by",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link", "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "24px / 32px",
                "mono": true
              },
              {
                "key": "Logo gap",
                "value": "16px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Acknowledgement\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "variant-7-·-\"in-partnership-with\"-·-grouped-logos-(center)",
        "demoKey": "v7",
        "demoControls": footerDemoControls,
        "title": "Variant 7 · \"In partnership with\" · grouped logos (center)",
        "node": "21:215203",
        "description": "Tiny header label above a centered GCash + PDAX logo pair. Used in crypto/partnership flows.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"footer-spec-7\"><div class=\"eb-preview eb-preview-footer eb-preview-footer--center\" data-variant=\"7\"><p class=\"eb-preview-footer__tiny\">In partnership with</p><div class=\"eb-preview-footer__logos eb-preview-footer__logos--center\"><span class=\"eb-preview-footer__logo eb-preview-footer__logo--gcash\"><svg viewBox=\"0 0 97 32\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"16\" r=\"9\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"3\"></circle><path d=\"M12 16h7\" stroke=\"#005CE5\" stroke-width=\"3\" stroke-linecap=\"round\"></path><text x=\"26\" y=\"22\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#0A2757\">GCash</text></svg></span><span class=\"eb-preview-footer__logo eb-preview-footer__logo--pdax\"><svg viewBox=\"0 0 97 29\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 4 L18 14 L6 24 Z\" fill=\"#00A859\"></path><text x=\"26\" y=\"20\" font-family=\"Inter, Arial, sans-serif\" font-weight=\"800\" font-size=\"16\" fill=\"#0A2757\">PDAX</text></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "7",
                "prop": "variant",
                "mono": true
              },
              {
                "key": "description",
                "value": "none",
                "prop": "description",
                "mono": true
              },
              {
                "key": "alignment",
                "value": "center",
                "prop": "alignment",
                "mono": true
              },
              {
                "key": "partner logos",
                "value": "grouped",
                "prop": "partnerLogos",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "footer/color/bg" },
              { "key": "Label", "value": "#90A8D0", "token": "footer/color/label" },
              { "key": "Description", "value": "#6780A9", "token": "footer/color/description" },
              { "key": "Link", "value": "#005CE5", "token": "footer/color/label-link" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "\"In partnership with\"",
                "value": "Secondary/Bold/Small Caption · BarkAda SemiBold 10/15",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding",
                "value": "px 24 · py 16",
                "mono": true
              },
              {
                "key": "Logos gap",
                "value": "12",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"In partnership with\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPartnerLogos</span><span class=\"syn-punc\">(</span>logos<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAlignment</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.center</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBFooter</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"In partnership with\"</span><span class=\"syn-punc\">,</span>\n    partnerLogos <span class=\"syn-eq\">=</span> logos<span class=\"syn-punc\">,</span>\n    alignment <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFooterAlignment</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Center</span>\n<span class=\"syn-punc\">)</span>"
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
