import type { ComponentData } from '../types';

export const voucherDetails: ComponentData = {
  "meta": {
    "slug": "voucher-details",
    "name": "Voucher Details",
    "node": "5119:5368",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=5119-5368",
    "description": "A 336×704 single-instance screen rendering merchant header, voucher content, and optional terms-and-conditions sections.",
    "badges": [
      {
        "kind": "product-layer",
        "label": "Product Layer"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"5\" y=\"4\" width=\"22\" height=\"24\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"/>\n      <circle cx=\"9.5\" cy=\"8.5\" r=\"2\" fill=\"#E5EBF4\"/>\n      <rect x=\"13\" y=\"7\" width=\"9\" height=\"1.6\" rx=\"0.5\" fill=\"#0A2757\"/>\n      <rect x=\"13\" y=\"9.5\" width=\"6\" height=\"1.2\" rx=\"0.5\" fill=\"#90A8D0\"/>\n      <line x1=\"6\" y1=\"12\" x2=\"26\" y2=\"12\" stroke=\"#E5EBF4\" stroke-width=\"0.6\" stroke-dasharray=\"1.2 1.2\"/>\n      <rect x=\"7\" y=\"13.5\" width=\"10\" height=\"2\" rx=\"0.5\" fill=\"#005CE5\"/>\n      <rect x=\"7\" y=\"16.5\" width=\"14\" height=\"1.2\" rx=\"0.5\" fill=\"#445C85\" opacity=\".5\"/>\n      <line x1=\"6\" y1=\"19.5\" x2=\"26\" y2=\"19.5\" stroke=\"#E5EBF4\" stroke-width=\"0.6\" stroke-dasharray=\"1.2 1.2\"/>\n      <rect x=\"7\" y=\"21\" width=\"12\" height=\"1.4\" rx=\"0.5\" fill=\"#0A2757\"/>\n      <path d=\"M23 22l1.5 1.5L26 22\" stroke=\"#005CE5\" stroke-width=\"0.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <rect x=\"7\" y=\"24\" width=\"16\" height=\"1\" rx=\"0.4\" fill=\"#445C85\" opacity=\".4\"/>\n      <rect x=\"7\" y=\"25.5\" width=\"13\" height=\"1\" rx=\"0.4\" fill=\"#445C85\" opacity=\".4\"/>\n    </svg>",
    "verdict": {
      "kind": "rework",
      "title": "Product Layer — ship as a screen recipe, not a component",
      "text": "A 336×704 single-instance symbol with no variants is not a DS primitive — it is a <strong>screen</strong>. DS primitives are reusable across many contexts with meaningful variant axes; Voucher Details exists exactly once and only toggles which optional child subtree renders. The DS should ship the primitives it composes from (<code>EBLogo</code>, <code>EBBadge</code>, <code>EBAccordion</code>, <code>EBListItem</code>) and publish this screen as a recipe in product documentation. The shared \"amount + slashed original\" row and the dashed strip divider are the only pieces worth extracting — and those belong in a product-layer <code>VoucherAmountRow</code> + <code>TicketDivider</code>, still outside the core DS."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "Not reusable — the component is the voucher-details screen. It has no abstraction; every text string (\"Brand\", \"Voucher Title\", \"PHP 200.00\", \"Limited\", \"All branches\", the 4 T&amp;C rows) is baked in. Any consumer must detach to change anything."
      },
      {
        "name": "Self-contained",
        "rating": "fail",
        "note": "Every meaningful piece — Logo, Badge, Accordion, List Item — is owned by another DS component. What's unique here (the amount row and strip divider) is custom layers, not tokens or logic. The component carries no DS-level behavior of its own."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Schema is 4 booleans that flip child visibility — not states, not variants, not semantic props. Worse, two of them (<code>tCWithTextLink</code>, <code>accordion</code>) render overlapping content (plain-text T&amp;C vs accordion T&amp;C) in parallel. No real voucher turns both on."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "The composition of primitives is clean — Logo 40px, Badge, Accordion, and List Item are all instance-swapped correctly and inherit their own tokens. That's exactly why this should be product code, not a DS atom."
      }
    ],
    "behavior": [
      {
        "state": "Container",
        "ios": "na",
        "android": "na",
        "property": "Root frame",
        "notes": "Screen-level scroll, not a component"
      },
      {
        "state": "Merchant logo",
        "ios": "na",
        "android": "na",
        "property": "Instance of Logo 40px",
        "notes": "Canonical Logo primitive"
      },
      {
        "state": "\"Limited\" pill",
        "ios": "na",
        "android": "na",
        "property": "Instance of Badge",
        "notes": "String is hardcoded today"
      },
      {
        "state": "Amount row",
        "ios": "na",
        "android": "na",
        "property": "Local layer",
        "notes": "Current amount + slashed original — product-layer concern"
      },
      {
        "state": "Strip divider",
        "ios": "na",
        "android": "na",
        "property": "Raster image fill",
        "notes": "Should be a stroke, not a raster asset"
      },
      {
        "state": "T&C accordion",
        "ios": "na",
        "android": "na",
        "property": "Instance",
        "notes": "Canonical Accordion with <code>ForEach</code> of <code>EBListItem</code>"
      },
      {
        "state": "\"See full promo mechanics\"",
        "ios": "na",
        "android": "na",
        "property": "Inline colored span",
        "notes": "Needs a real link primitive or product-owned <code>LinkText</code>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Screen masquerading as a DS component.",
        "body": "A 336×704 single-instance symbol with four optional-content booleans is a screen, not a primitive. DS primitives are reusable across many contexts with meaningful variant axes; this exists exactly once and only toggles which optional child renders.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Booleans are child-visibility switches, not states.",
        "body": "<code>accordion</code>, <code>badge</code>, <code>slashedAmount</code>, <code>tCWithTextLink</code> each mean \"render this optional subtree.\" They are not semantic props (e.g. <code>hasLimitedOffer</code>, <code>hasOriginalPrice</code>) and not behavioral states. 2^4 = 16 possible combinations of which only ~4 are legitimate in real product screens.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Overlapping T&amp;C display paths.",
        "body": "<code>tCWithTextLink</code> renders a plain-text Terms &amp; Conditions block with a \"See full promo mechanics\" link; <code>accordion</code> renders a full Terms &amp; Conditions Accordion with 4 list rows. Both describe the same information and can be toggled on simultaneously. Real screens pick one.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Native handoff is a View/Screen, not a Component.",
        "body": "SwiftUI would model this as <code>VoucherDetailsView</code> — a scrollable parent that composes <code>EBLogo</code>, <code>EBBadge</code>, a product-owned amount row, <code>EBAccordion</code>, and <code>EBListItem</code>. There is no value in mapping the screen as a single-symbol Code Connect entry.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Missing interaction states.",
        "body": "Voucher details is interactive on mobile — accordion expands/collapses, the \"See full promo mechanics\" link navigates, the voucher itself may have a primary \"Use Voucher\" CTA on the real screen. The symbol ships only one static frame and happens to use <code>expanded=yes</code> for the embedded accordion.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Strip divider is a raster image fill.",
        "body": "The dashed horizontal line between voucher content and description is rendered as an imported image (<code>imgStrip</code>), not a <code>stroke-dasharray</code> or a vector pattern. It will not scale with density, re-color, or adapt to dark mode.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Not linkable via Code Connect.",
        "body": "A 4-boolean screen symbol cannot map 1:1 to a meaningful native API. Linkability belongs at the primitive level (Logo, Badge, Accordion, ListItem) — each of which already has its own Code Connect track.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Retire from the sticker sheet; publish as a product-screen recipe.",
        "body": "Move Voucher Details out of the DS file and into a product documentation page titled \"Voucher Details Screen\". The recipe shows how to compose <code>EBLogo</code>, <code>EBBadge</code>, the amount row, the strip divider, and <code>EBAccordion</code> with a <code>ForEach</code> of <code>EBListItem</code>. The DS owns primitives; product owns screens.",
        "tag": "Docs"
      },
      {
        "headline": "Extract the shared amount row into a product-layer component.",
        "body": "Current amount + slashed original amount is a genuinely reusable product pattern (appears in every voucher variant and on other commerce screens). Lift it into a <code>VoucherAmountRow(current: \"PHP 200.00\", original: \"PHP 180.00\")</code> living in the product library — not the core DS.",
        "tag": "Composition"
      },
      {
        "headline": "Replace the raster strip divider with a stroke pattern.",
        "body": "The dashed horizontal rule between voucher content and description is rendered as a raster image. Replace it with a stroke-based divider (<code>stroke-dasharray</code> in SVG, <code>Canvas</code> on native) so it scales, retints, and adapts to dark mode without a new asset.",
        "tag": "Asset"
      },
      {
        "headline": "Collapse the dual Terms &amp; Conditions paths into one.",
        "body": "The symbol ships both a plain-text T&amp;C section and a full accordion T&amp;C section as independent booleans. Pick one pattern for the product — recommendation: keep the accordion (collapsible saves vertical space on small screens) and drop <code>tCWithTextLink</code> entirely, moving the \"See full promo mechanics\" link into the accordion body or next to the CTA.",
        "tag": "Composition"
      },
      {
        "headline": "Promote user-facing strings to properties (if this symbol survives as a product component).",
        "body": "If the design team keeps Voucher Details as a product-layer component, hoist \"Brand\", \"All branches\", \"Voucher Title\", \"PHP 200.00\", \"PHP 180.00\", validity range, description, and the badge label into named text props so product teams do not detach to change copy.",
        "tag": "Property"
      },
      {
        "headline": "Native mapping lives at the primitive level.",
        "body": "Document that Code Connect mappings for Voucher Details are not added at the screen level. Each composed primitive — <code>EBLogo</code>, <code>EBBadge</code>, <code>EBAccordion</code>, <code>EBListItem</code> — carries its own mapping. The screen itself ships as a SwiftUI <code>View</code> / Compose screen-level composable inside product code.",
        "tag": "Docs"
      }
    ],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vd-demo-preview\"><div style=\"max-width:320px;border:1px solid #E5EBF4;border-radius:8px;overflow:hidden;background:#FFFFFF;box-shadow:0 0 4px rgba(2,14,34,0.06);display:flex;flex-direction:column;\"><div style=\"display:flex;gap:8px;align-items:flex-start;padding:12px 16px 12px 10px;border-bottom:1px solid #E5EBF4;\"><div style=\"width:40px;height:40px;border-radius:20px;background:#E5EBF4;display:flex;align-items:center;justify-content:center;\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 16h16M4 12h16M4 8h10\" stroke=\"#0A2757\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path></svg></div><div style=\"flex:1 0 0;padding-top:4px;\"><div style=\"color:#0A2757;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:16px;line-height:16px;letter-spacing:.25px;\">Brand</div><div style=\"color:#6780A9;font-family:'BarkAda', system-ui;font-weight:600;font-size:12px;line-height:18px;margin-top:2px;\">All branches</div></div><div style=\"padding-top:6px;\"><div style=\"background:#2340A9;color:#FFFFFF;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:12px;line-height:12px;letter-spacing:.5px;padding:3px 4px 1px;border-radius:4px;\">Limited</div></div></div><div style=\"padding:12px 16px;display:flex;flex-direction:column;gap:8px;\"><div style=\"color:#0A2757;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:18px;line-height:23px;letter-spacing:.25px;\">Voucher Title</div><div style=\"display:flex;gap:4px;align-items:center;\"><div style=\"color:#005CE5;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:16px;line-height:16px;letter-spacing:.25px;\">PHP 200.00</div><div style=\"color:#90A8D0;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:16px;line-height:16px;letter-spacing:.25px;text-decoration:line-through;\">PHP 180.00</div></div><div style=\"font-family:'Proxima Soft', system-ui;font-weight:600;font-size:14px;line-height:14px;color:#6780A9;letter-spacing:.25px;\"><span>Validity:</span> Mar 11 2023 - Mar 14 2023</div></div><div style=\"padding:0;line-height:0;background:#F6F9FD;\"><svg width=\"320\" height=\"16\" viewBox=\"0 0 320 16\" style=\"display:block\"><circle cx=\"0\" cy=\"8\" r=\"6\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1\"></circle><circle cx=\"320\" cy=\"8\" r=\"6\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1\"></circle><line x1=\"14\" y1=\"8\" x2=\"306\" y2=\"8\" stroke=\"#90A8D0\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line></svg></div><div style=\"padding:8px 12px 12px;\"><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">For every 12 oz or larger beverage purchase, you'll receive an Eco Tumbler Voucher for a FREE Tall Drink when you bring your personal cup with you on your next visit.</div></div><div style=\"border-top:1px solid #E5EBF4;background:#FDFEFF;padding:16px;display:flex;flex-direction:column;gap:12px;\"><div style=\"color:#0A2757;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Terms &amp; Conditions</div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Valid from March 11 to 14, 2023. Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last. The promo is not valid in conjunction with other promos or discounts. Metro Manila only.</div><div style=\"color:#005CE5;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">See full <span style=\"text-decoration:underline;\">promo mechanics</span>.</div></div><div style=\"border-top:1px solid #E5EBF4;display:flex;flex-direction:column;\"><div style=\"display:flex;align-items:center;justify-content:space-between;padding:20px 16px;background:#FFFFFF;\"><div style=\"color:#0A2757;font-family:'Proxima Soft', system-ui;font-weight:700;font-size:16px;line-height:20px;letter-spacing:.25px;\">Terms &amp; Conditions</div><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M6 12l4-4 4 4\" stroke=\"#005CE5\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"background:#F6F9FD;padding:16px;display:flex;flex-direction:column;gap:6px;\"><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Valid from March 11 to 14, 2021</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">The promo is not valid in conjunction with other promos or discounts.</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8.5 6 11.5 13 4.5\" stroke=\"#90A8D0\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">Metro Manila only.</div></div></div></div></div><div style=\"margin-top:16px;max-width:320px;color:#666;font-family:system-ui;font-size:11px;line-height:16px;\">Single 336×704 symbol, no variants. Four optional-content booleans: <code>accordion</code>, <code>badge</code>, <code>slashedAmount</code>, <code>tCWithTextLink</code> — all shown on here with their defaults.</div></div></div>"
  },
  "style": {
    "specCards": [],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "description": "No 1:1 Code Connect mapping — the screen is not a primitive. Each composed primitive maps via its own component. The current Figma booleans correspond to product-level state on the Voucher model, not to component props.",
      "rows": [
        {
          "figma": "<code>badge</code>",
          "swift": "<code>voucher.limitedLabel: String?</code>",
          "compose": "Conditional <code>EBBadge</code> render"
        },
        {
          "figma": "<code>slashedAmount</code>",
          "swift": "<code>voucher.originalAmount: Money?</code>",
          "compose": "Conditional strikethrough text"
        },
        {
          "figma": "<code>tCWithTextLink</code>",
          "swift": "—",
          "compose": "Drop"
        },
        {
          "figma": "<code>accordion</code>",
          "swift": "<code>voucher.rules: [Rule]</code>",
          "compose": "<code>EBAccordion</code> + <code>ForEach EBListItem</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Screen, not a component — layer-naming discipline applies per primitive, not here."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Four boolean visibility switches, no variant axis. Not a schema worth normalising."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every color resolves to <code>main/vouchers/*</code>, <code>main/badge/*</code>, <code>main/accordion/*</code>, or <code>main/list-item/*</code> tokens from composed primitives."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Maps to a product-layer <code>View</code>/<code>Screen</code>, not a component. No 1:1 DS-to-native handoff."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Interaction lives on primitives (Accordion expand/collapse, link tap). Screen-level state is product concern."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Strip divider is a raster image fill — should be a stroke pattern."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Not linkable as a unit. Primitives carry their own mappings."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "Single symbol, no variant axes. Four boolean toggles (<code>accordion</code>, <code>badge</code>, <code>slashedAmount</code>, <code>tCWithTextLink</code>) drive optional child subtrees but do not generate variants in the component set.",
      "columns": [
        "Node ID",
        "Dimensions",
        "Default booleans"
      ],
      "rows": [
        {
          "cells": [
            "<code>5119:5368</code>",
            "336 × 704",
            "<code>accordion=true</code>, <code>badge=true</code>, <code>slashedAmount=true</code>, <code>tCWithTextLink=true</code>"
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
      "header": "Initial Assessment · node 5119:5368",
      "rows": [
        {
          "body": "<strong>Assessed as Product Layer.</strong> 336×704 single-symbol screen composition with four optional-content booleans — not a DS primitive. Composes canonical <code>Logo 40px</code>, <code>Badge</code>, <code>Accordion</code>, and <code>List Item</code>. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        },
        {
          "body": "<strong>Recommendation: retire from the DS file.</strong> Ship as a product-screen recipe. Extract the shared amount row + strip divider into product-layer <code>VoucherAmountRow</code> and <code>TicketDivider</code>. Replace the raster strip with a stroke pattern. Drop the <code>tCWithTextLink</code> path to eliminate overlap with the embedded accordion. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        }
      ]
    }
  ]
};
