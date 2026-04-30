import type { ComponentData } from '../types';

export const termsConditionsAccordion: ComponentData = {
  "meta": {
    "slug": "terms-conditions-accordion",
    "name": "Terms & Conditions Accordion",
    "node": "5119:5447",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=5119-5447",
    "description": "A specialized accordion used inside voucher details to disclose terms and conditions.",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Voucher",
    "verdict": {
      "kind": "rework",
      "title": "Remove — use the canonical Accordion",
      "text": "The DS already ships one <a href=\"/components/accordion\"><code>Accordion</code></a> primitive with a <code>title</code> prop and a content slot. Every time a product needs an accordion with a different title or body, the answer is to author a new instance — not to ship a new sibling. Replace this component with a documented usage example: <code>EBAccordion(title: \"Terms &amp; Conditions\", content: [...])</code>."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "Not reusable — the title is hardcoded to \"Terms &amp; Conditions\" and the body is a fixed list of four voucher rules. Any other use case must detach and rebuild."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Structure is correct, but every token it carries belongs to the canonical Accordion. This component adds no styles or logic of its own."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Breaks the DS pattern where components are primitives with props. This is a composition (a filled-in instance) disguised as a component, and it would set a precedent for a sibling per hardcoded title."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "The composition itself is clean — it uses the canonical Accordion tokens and embeds list rows correctly. That's exactly why it should live in product code, not as a DS atom."
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [],
    "recommendations": [],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tc-accordion-demo-preview\"><div style=\"max-width:336px;display:flex;flex-direction:column;gap:12px;\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:20px 16px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:8px;\"><div style=\"color:#0A2757;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:16px;line-height:20px;letter-spacing:.25px;\">Terms &amp; Conditions</div><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M6 8l4 4 4-4\" stroke=\"#005CE5\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"display:flex;flex-direction:column;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:8px;overflow:hidden;\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:20px 16px;\"><div style=\"color:#0A2757;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:16px;line-height:20px;letter-spacing:.25px;\">Terms &amp; Conditions</div><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M6 12l4-4 4 4\" stroke=\"#005CE5\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"background:#F6F9FD;padding:16px;display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Valid from March 11 to 14, 2021</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">The promo is not valid in conjunction with other promos or discounts.</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Metro Manila only.</div></div></div></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": []
    },
    "usageSnippets": [],
    "accessibility": [],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Layers match the canonical Accordion."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Only an <code>expanded</code> boolean — identical to the canonical Accordion's state axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/accordion/*</code> and <code>main/list-item/*</code> tokens from the canonical components."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Do not map. Use <code>EBAccordion</code> with a product-defined title and body."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Inherits expanded/collapsed from the canonical Accordion."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Chevron and check icons are vector instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Not linkable — no native counterpart. Consumers call <code>EBAccordion</code> directly."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "",
      "columns": [],
      "rows": []
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 5119:5447",
      "rows": [
        {
          "body": "<strong>Assessed as a product composition</strong> — Instance of the canonical Accordion (<code>16870:9288</code>) with hardcoded title and body. No unique schema or tokens. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Recommendation: Remove</strong> — Delete from the sticker sheet and publish as a usage example of <code>EBAccordion</code>. Sets the precedent that product-specific compositions do not become DS siblings. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        }
      ]
    }
  ]
};
