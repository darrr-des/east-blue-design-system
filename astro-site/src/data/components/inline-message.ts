import type { ComponentData, DemoControlSection } from '../types';

const inlineMessageDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Variant',
        prop: 'variant',
        defaultValue: 'success',
        options: [
          { value: 'success', label: 'Success' },
          { value: 'loading', label: 'Loading' },
          { value: 'error', label: 'Error' },
        ],
      },
      {
        label: 'Body content',
        prop: 'hasBody',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'Show' },
          { value: 'false', label: 'Hide' },
        ],
      },
      {
        label: 'Reference no.',
        prop: 'hasRef',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'Show' },
          { value: 'false', label: 'Hide' },
        ],
      },
    ],
  },
];

export const inlineMessage: ComponentData = {
  "meta": {
    "slug": "inline-message",
    "name": "Inline Message",
    "node": "26416:18421",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26416-18421",
    "description": "A full-frame status surface — illustration, title, description, and an optional body — for confirm / processing / error / neutral outcomes. 4 variants across a single <code>Type</code> axis (Success / Loading / Error / Neutral), with an <code>Illustration Container</code> and a <code>Body Container</code> slot.",
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
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — slot-based and simplified",
      "text": "The rebuild exposed the body content as a real <code>Body Container</code> slot, added a <code>Neutral</code> type, resolved the alpha <code>bg-subtle</code> token, and collapsed the two illustration sizes into a single 106px <code>Illustration Container</code> — dropping the redundant <code>Illustration Size</code> axis to a clean single-axis <code>Type</code> enum. Slot names were also de-duplicated and the illustration term unified. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Inline Message is the primary surface for transaction confirmations and error recovery flows.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"140\" viewBox=\"0 0 200 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" fill=\"#F6F9FD\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"46\" y=\"20\" width=\"108\" height=\"108\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect>\n          \n          <circle cx=\"100\" cy=\"44\" r=\"14\" fill=\"#EAF2FE\"></circle>\n          <circle cx=\"100\" cy=\"44\" r=\"9\" fill=\"#005CE5\"></circle>\n          <path d=\"M95 44l3 3 6-6\" stroke=\"#FFF\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          \n          <text x=\"100\" y=\"72\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"8\" font-weight=\"700\" font-family=\"\\'Proxima Soft\\', system-ui\">Payment Successful</text>\n          <rect x=\"62\" y=\"78\" width=\"76\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          <rect x=\"70\" y=\"83\" width=\"60\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          \n          <rect x=\"54\" y=\"92\" width=\"92\" height=\"0.5\" fill=\"#E5EBF4\"></rect>\n          <circle cx=\"64\" cy=\"99\" r=\"1.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"70\" y=\"98\" width=\"56\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".5\"></rect>\n          <circle cx=\"64\" cy=\"107\" r=\"1.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"70\" y=\"106\" width=\"48\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".5\"></rect>\n          \n          <rect x=\"54\" y=\"116\" width=\"92\" height=\"0.5\" fill=\"#E5EBF4\"></rect>\n          <text x=\"100\" y=\"126\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"\\'Proxima Soft\\', system-ui\">Ref. 1234567890</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"im-demo-preview\"><div style=\"width:360px;font-family:'Proxima Soft',sans-serif;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 0 8px rgba(115,129,154,0.10);\"><div style=\"position:relative;padding:48px 16px 24px;display:flex;flex-direction:column;align-items:center;gap:16px;\"><div style=\"position:absolute;top:16px;right:18px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;\"><svg width=\"18\" height=\"16\" viewBox=\"0 0 18 16\" fill=\"none\"><path d=\"M3 11v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3\" stroke=\"#0A2757\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M9 1v10m0 0L5.5 7.5M9 11l3.5-3.5\" stroke=\"#0A2757\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"display:flex;flex-direction:column;align-items:center;width:100%;\"><img src=\"/assets/inline-message/success.png\" alt=\"\" style=\"width:106px;height:106px;display:block;object-fit:cover;\"><div style=\"height:24px;\"></div><p style=\"margin:0;width:100%;text-align:center;font-weight:700;font-size:22px;line-height:26px;color:#005CE5;\">Add your label here</p></div><div style=\"padding:0 24px;width:100%;\"><p style=\"margin:0;text-align:center;font-family:'BarkAda',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#445C85;\">Add your description here.<br>This is just a filler sentence.</p></div></div><div style=\"border-top:1px solid #E5EBF4;display:flex;flex-direction:column;\"><div style=\"background:#FFFFFF;border:1px solid #E5EBF4;box-shadow:0 1px 1.5px rgba(232,238,242,0.79);\"><div style=\"border-bottom:1px solid #E5EBF4;padding:12px 20px 12px 24px;\"><p style=\"margin:0;font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:16px;line-height:20px;color:#0A2757;letter-spacing:0.25px;\">Header</p></div><div style=\"background:rgba(246,249,253,0.24);padding:12px 24px;\"><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div></div></div><div style=\"background:#FFFFFF;border:1px solid #E5EBF4;box-shadow:0 1px 1.5px rgba(232,238,242,0.79);\"><div style=\"border-bottom:1px solid #E5EBF4;padding:12px 20px 12px 24px;\"><p style=\"margin:0;font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:16px;line-height:20px;color:#0A2757;letter-spacing:0.25px;\">Header</p></div><div style=\"background:rgba(246,249,253,0.24);padding:12px 24px;\"><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div><div style=\"display:flex;gap:8px;align-items:center;padding:2px 0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M3 8.5l3 3 7-7\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><span style=\"flex:1;font-family:'BarkAda',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;\">Content</span></div></div></div></div><div style=\"border-top:1px solid #E5EBF4;padding:24px 0;display:flex;align-items:center;justify-content:center;gap:4px;\"><span style=\"font-weight:600;font-size:16px;line-height:16px;color:#90A8D0;letter-spacing:0.25px;\">Reference no.</span><span style=\"font-weight:700;font-size:18px;line-height:18px;color:#0A2757;letter-spacing:0.25px;\">1234567890</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" id=\"im-demo-type\" onchange=\"updateInlineMessageDemo()\"><option value=\"success\" selected=\"\">Success</option><option value=\"loading\">Loading</option><option value=\"error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">assetSize</span><select class=\"demo-panel-select\" id=\"im-demo-size\" onchange=\"updateInlineMessageDemo()\"><option value=\"large\" selected=\"\">Large</option><option value=\"small\">Small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBodyContent</span><select class=\"demo-panel-select\" id=\"im-demo-body\" onchange=\"updateInlineMessageDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasReferenceNumber</span><select class=\"demo-panel-select\" id=\"im-demo-ref\" onchange=\"updateInlineMessageDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Covers confirm, processing, and error outcomes for transactions, logins, KYC, and any multi-step flow with a final status surface."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own background, border, radius, and typography, all token-bound. The illustration is a swappable <code>Illustration Container</code> slot at a single 106px size, and the asset itself is resolved."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Single <code>Type</code> axis (Success / Loading / Error / Neutral), Title Case. The redundant <code>Illustration Size</code> axis was removed, the <code>bg-subtle</code> alpha token was resolved, and the slot names were de-duplicated (<code>Illustration Container</code> / <code>Body Container</code>) with the illustration term unified."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Two real Figma slots — <code>Illustration Container</code> for the visual and <code>Body Container</code> for custom content (transaction breakdowns, beneficiary lists), so consumers compose their own body rather than being locked to a fixed List. Both map to <code>@ViewBuilder</code> / <code>@Composable</code> slots."
      }
    ],
    "behavior": [
      {
        "state": "Success",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Success",
        "notes": "Positive-outcome palette. Completed action."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Loading",
        "notes": "Processing state — the illustration slot carries the loading animation."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Error",
        "notes": "Negative palette. Failed or blocked action."
      },
      {
        "state": "Neutral",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Neutral",
        "notes": "Informational, no positive/negative charge. Added in the rebuild."
      },
      {
        "state": "Body content",
        "ios": "yes",
        "android": "yes",
        "property": "Body Container (slot)",
        "notes": "Optional custom content below the header — transaction breakdown, beneficiary list, or any composed instances."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Body content exposed as a real Figma slot — <code>Body Container</code> — so consumers compose their own List Items, tables, or custom content instead of being locked to a fixed List. (C2)"
      },
      {
        "body": "v2.0: <code>Neutral</code> type added — the enum now covers Success / Loading / Error / Neutral, so informational messages no longer have to borrow a charged intent. (C2)"
      },
      {
        "body": "v2.0: <code>bg-subtle</code> alpha token resolved — the background no longer composites against whatever sits behind it. (C3)"
      },
      {
        "body": "v2.0: Illustration is now a swappable <code>Illustration Container</code> slot rather than a baked-in raster, and the asset itself is resolved. (C6)"
      },
      {
        "body": "v2.1: Redundant <code>Illustration Size</code> axis removed — the two 106 / 64 sizes collapsed to a single 106px <code>Illustration Container</code>, leaving a clean single-axis <code>Type</code> enum (8 variants → 4). (C2)"
      },
      {
        "body": "v2.1: Slot names de-duplicated — <code>Illustration Container Slot</code> / <code>Body Container Slot</code> → <code>Illustration Container</code> / <code>Body Container</code> (dropping the doubled \"Container Slot\"), and the size property was aligned from <code>Asset Size</code> to the same <code>Illustration</code> term so the prop and slot agree. (C1/C2)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "The slot, token, and schema blockers are all resolved. Registration is unblocked but the SwiftUI / Compose mappings are not yet wired and the native component does not exist — snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBInlineMessage</code>.",
        "body": "Wire <code>Type</code> to the SwiftUI / Compose API and map the <code>Illustration Container</code> and <code>Body Container</code> slots to <code>@ViewBuilder</code> / <code>@Composable</code> content slots.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Expose the body-content area as a Figma Slot.",
        "body": "v2.0: Applied — <code>Body Container</code> is a real slot; consumers compose their own content and it maps to a native content slot.",
        "tag": "Slot"
      },
      {
        "headline": "Consider a \"neutral / info\" type.",
        "body": "v2.0: Applied — <code>Type=Neutral</code> ships alongside Success / Loading / Error.",
        "tag": "Property"
      },
      {
        "headline": "Replace <code>bg-subtle</code> with a solid token.",
        "body": "v2.0: Applied — the alpha-composited background is resolved to a context-independent value.",
        "tag": "Token"
      },
      {
        "headline": "Document illustration + Lottie asset dependencies.",
        "body": "v2.0: Superseded — the illustration is now a swappable slot with a resolved asset rather than a bundled raster to document.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": inlineMessageDemoControls,
        "title": "Default",
        "node": "27:168911",
        "description": "Result-state notification card with 3D illustration, title, description, optional content body, and optional reference number. Flip Variant for Success / Loading / Error; toggle Body content + Reference no. independently.",
        "previewHtml": "<div id=\"im-spec-preview\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant",      "value": "Success", "prop": "variant" },
              { "key": "Body content", "value": "Show",    "prop": "hasBody" },
              { "key": "Reference no.","value": "Show",    "prop": "hasRef" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",          "value": "#FFFFFF", "token": "inline-message/color/{variant}/bg" },
              { "key": "Border",           "value": "#E5EBF4", "token": "inline-message/color/{variant}/border" },
              { "key": "Header",           "value": "#0A2757", "token": "inline-message/color/{variant}/label-header" },
              { "key": "Title",            "value": "#005CE5", "token": "inline-message/color/success/label-title",
                "variants": {
                  "variant:loading": { "value": "#CA970C", "token": "inline-message/color/loading/label-title" },
                  "variant:error":   { "value": "#D61B2C", "token": "inline-message/color/error/label-title" }
                }
              },
              { "key": "Description",     "value": "#445C85", "token": "inline-message/color/{variant}/label-description" },
              { "key": "Reference label",  "value": "#90A8D0", "token": "inline-message/color/{variant}/label-reference",
                "variants": { "hasRef:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Card",            "value": "360 × 664", "mono": true },
              { "key": "Card radius",     "value": "12 (no shadow)", "mono": true },
              { "key": "Content section", "value": "360 × 284 · 48 top / 24 horiz / 24 bottom", "mono": true },
              { "key": "Illustration",    "value": "106 × 106 (24 spacer below)", "mono": true },
              { "key": "Receipt → desc gap", "value": "16", "mono": true },
              { "key": "Description",     "value": "312 wide · 2 lines × 20", "mono": true },
              { "key": "Download icon",   "value": "24 × 24 overlay at top 16 / right 18", "mono": true },
              { "key": "Body content",    "value": "360 × 316 · border-top + bottom", "mono": true,
                "variants": { "hasBody:false": { "hide": true } }
              },
              { "key": "Section title bar", "value": "44 · padding 12 vert · text x=48", "mono": true,
                "variants": { "hasBody:false": { "hide": true } }
              },
              { "key": "Section container", "value": "bg #F6F9FD @ 24% · 12 vert / 48 horiz", "mono": true,
                "variants": { "hasBody:false": { "hide": true } }
              },
              { "key": "List rows",       "value": "List Item instances — see List Item component", "mono": false,
                "variants": { "hasBody:false": { "hide": true } }
              },
              { "key": "Reference no.",   "value": "360 × 64 · 24 top / 16 row / 24 bottom", "mono": true,
                "variants": { "hasRef:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title",         "value": "Proxima Soft Bold · 22 / 26 · Primary/Headlines/Section", "mono": true },
              { "key": "Description",   "value": "BarkAda Medium · 14 / 20 · Secondary/Default/Base",       "mono": true },
              { "key": "Reference no.", "value": "Proxima Soft Semibold · 16 / 16 · +0.25", "mono": true,
                "variants": { "hasRef:false": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.success</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebReferenceNumber</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"1234567890\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBMessageIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Success</span><span class=\"syn-punc\">,</span>\n    referenceNumber <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1234567890\"</span>\n<span class=\"syn-punc\">)</span>"
      }

    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Each type ships its own bg, border, bg-subtle, and label tokens. <code>bg-subtle</code> currently bakes in 24% alpha — flagged under C3.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Success",
            "token": "bg",
            "values": [
              "main/inline-message/color/success/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/inline-message/color/success/border",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "bg-subtle alpha baked",
            "values": [
              "main/inline-message/color/success/bg-subtle",
              "rgba(246,249,253,0.24)"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/inline-message/color/success/label-title",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/inline-message/color/success/label-description",
              "#445C85"
            ]
          },
          {
            "role": "—",
            "token": "section header",
            "values": [
              "main/inline-message/color/success/label-header",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "reference label",
            "values": [
              "main/inline-message/color/success/label-reference",
              "#90A8D0"
            ]
          },
          {
            "role": "—",
            "token": "reference number",
            "values": [
              "main/inline-message/color/success/label-number",
              "#0A2757"
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
            "role": "Container width",
            "token": "—",
            "values": [
              "360px"
            ]
          },
          {
            "role": "Corner radius",
            "token": "radius/radius-4",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Shadow",
            "token": "Depth/D4",
            "values": [
              "0 0 8px #73819A1A"
            ]
          },
          {
            "role": "Top padding",
            "token": "—",
            "values": [
              "48px"
            ]
          },
          {
            "role": "Content padding (h)",
            "token": "space/space-16",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Section header padding",
            "token": "space/space-36 + space/space-20",
            "values": [
              "36L / 20R / 12v"
            ]
          },
          {
            "role": "Section body padding",
            "token": "space/space-48 + space/space-12",
            "values": [
              "48h / 12v"
            ]
          },
          {
            "role": "Reference number bottom padding",
            "token": "space/space-24",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Illustration size (Large)",
            "token": "—",
            "values": [
              "106 × 106"
            ]
          },
          {
            "role": "Download icon",
            "token": "—",
            "values": [
              "24 × 24, abs top-right 18R / 16T"
            ]
          },
          {
            "role": "Checkmark bullet size",
            "token": "—",
            "values": [
              "16 × 16 (List Item Asset)"
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
              "Proxima Soft Bold · 22 / 26"
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
            "role": "Section header",
            "token": "Primary/Multi-line Label/Base",
            "values": [
              "Proxima Soft Bold · 16 / 20 · +0.25"
            ]
          },
          {
            "role": "List content",
            "token": "Secondary/Bold/Base",
            "values": [
              "BarkAda Semibold · 14 / 20"
            ]
          },
          {
            "role": "Reference label",
            "token": "Primary/Label/Light/Base",
            "values": [
              "Proxima Soft Semibold · 16 / 16 · +0.25"
            ]
          },
          {
            "role": "Reference number",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold · 18 / 18 · +0.25"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Requires: lottie-ios for loading animation</span>\n<span class=\"str\">\"https://github.com/airbnb/lottie-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:inline-message:1.0.0\"</span>)\n    <span class=\"cmt\">// Requires: lottie-compose for loading animation</span>\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.airbnb.android:lottie-compose:6.4.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "type=Success/Loading/Error",
          "swift": ".ebType(.success/.loading/.error)",
          "compose": "type = EBInlineMessageType.*"
        },
        {
          "figma": "assetSize=Large/Small",
          "swift": ".assetSize(.large/.small)",
          "compose": "assetSize = EBAssetSize.*"
        },
        {
          "figma": "title / description",
          "swift": "title: String · description: String",
          "compose": "title: String · description: String"
        },
        {
          "figma": "hasDownload",
          "swift": "onDownload: (() -&gt; Void)?",
          "compose": "onDownload: (() -&gt; Unit)?"
        },
        {
          "figma": "hasBodyContent (proposed slot)",
          "swift": "@ViewBuilder body",
          "compose": "body: @Composable () -&gt; Unit"
        },
        {
          "figma": "hasReferenceNumber",
          "swift": "referenceNumber: String?",
          "compose": "referenceNumber: String?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/InlineMessage/EBInlineMessage.swift",
        "compose": "android/components/inlinemessage/EBInlineMessage.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Success with body content + reference</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Payment Successful\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Your transfer of ₱500 is complete.\"</span>,\n    <span class=\"prp\">referenceNumber</span>: <span class=\"str\">\"1234567890\"</span>\n) {\n    <span class=\"typ\">EBListItem</span>(<span class=\"str\">\"Send amount: ₱500\"</span>) { <span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">check</span>) }\n    <span class=\"typ\">EBListItem</span>(<span class=\"str\">\"Fee: ₱0\"</span>) { <span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">check</span>) }\n}\n.<span class=\"fn\">ebType</span>(.<span class=\"prp\">success</span>)\n\n<span class=\"cmt\">// Loading (Lottie spinner)</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Processing your transaction\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"This usually takes a few seconds.\"</span>\n)\n.<span class=\"fn\">ebType</span>(.<span class=\"prp\">loading</span>)\n\n<span class=\"cmt\">// Error</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Transfer Failed\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Insufficient balance. Please top up and try again.\"</span>\n)\n.<span class=\"fn\">ebType</span>(.<span class=\"prp\">error</span>)",
        "compose": "<span class=\"cmt\">// Success with body content + reference</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Success</span>,\n    title = <span class=\"str\">\"Payment Successful\"</span>,\n    description = <span class=\"str\">\"Your transfer of ₱500 is complete.\"</span>,\n    referenceNumber = <span class=\"str\">\"1234567890\"</span>\n) {\n    <span class=\"typ\">EBListItem</span>(content = <span class=\"str\">\"Send amount: ₱500\"</span>) { <span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">Check</span>) }\n    <span class=\"typ\">EBListItem</span>(content = <span class=\"str\">\"Fee: ₱0\"</span>) { <span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">Check</span>) }\n}\n\n<span class=\"cmt\">// Loading (Lottie spinner)</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Loading</span>,\n    title = <span class=\"str\">\"Processing your transaction\"</span>,\n    description = <span class=\"str\">\"This usually takes a few seconds.\"</span>\n)\n\n<span class=\"cmt\">// Error</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Error</span>,\n    title = <span class=\"str\">\"Transfer Failed\"</span>,\n    description = <span class=\"str\">\"Insufficient balance. Please top up and try again.\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "Group the card as a single accessibility element with combined label",
        "android": "<code>mergeDescendants = true</code> on the container"
      },
      {
        "requirement": "Live region",
        "ios": "Announce on type change: <code>.accessibilityLiveRegion</code>",
        "android": "<code>liveRegion = LiveRegionMode.Polite</code>"
      },
      {
        "requirement": "Illustrations",
        "ios": "Decorative: <code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      },
      {
        "requirement": "Loading progress",
        "ios": "Announce \"Processing\" via <code>.accessibilityValue</code>",
        "android": "<code>stateDescription = \"Processing\"</code>"
      },
      {
        "requirement": "Download action",
        "ios": "Separate button with <code>.accessibilityLabel(\"Download receipt\")</code>",
        "android": "<code>contentDescription = \"Download receipt\"</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Inline Message as the final surface of a transaction flow — confirm, failure recovery, or pending processing. Include the reference number so users can escalate if needed.",
        "dontText": "Use it for transient notifications — use Toast instead. Inline Message is persistent and occupies the screen."
      },
      {
        "doText": "Let users tap the download icon to save a PDF receipt or share the reference number. Makes customer support escalations easier.",
        "dontText": "Include the download affordance on the Loading variant — there's nothing to download until the transaction completes."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic: <code>content</code>, <code>body-content</code>, <code>section-1</code>, <code>reference-number</code>, <code>Download Small</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Type values clean. Body content should be a slot, not a boolean-gated hardcoded List."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>bg-subtle</code> uses alpha-composited value instead of a solid token."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Custom card composable — no standard native primitive but straightforward to build."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display surface — interactive states live on children (download button, list items)."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "3D raster illustrations + Lottie animation — asset bundling required."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not mapped."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 6,
      "description": "",
      "columns": [
        "type",
        "assetSize",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Success",
            "Large",
            "27:168911"
          ]
        },
        {
          "cells": [
            "Success",
            "Small",
            "27:169118"
          ]
        },
        {
          "cells": [
            "Loading",
            "Large",
            "27:168980"
          ]
        },
        {
          "cells": [
            "Loading",
            "Small",
            "27:169187"
          ]
        },
        {
          "cells": [
            "Error",
            "Large",
            "27:169049"
          ]
        },
        {
          "cells": [
            "Error",
            "Small",
            "27:169256"
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
      "header": "Initial Assessment · node 27:168910",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 6 variants (type × assetSize). Composes canonical List Item for body content. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong><code>bg-subtle</code> alpha token</strong> — 24% alpha baked in. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Raster illustrations + Lottie dependency</strong>. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Body content should be a slot</strong>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
