import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 6420:91212, in its order: one
// variant axis and three booleans. ⤷ BodySlot and ⤷ IllustrationSlot are
// SLOTs (4 swap options each) and get no control.
const inlineMessageDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'success',
        options: [
          { value: 'success', label: 'Success' },
          { value: 'loading', label: 'Loading' },
          { value: 'error', label: 'Error' },
          { value: 'neutral', label: 'Neutral' },
        ],
      },
      {
        label: 'hasReferenceNumber',
        prop: 'hasreferencenumber',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasBodyContent',
        prop: 'hasbodycontent',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasDownload',
        prop: 'hasdownload',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const inlineMessage: ComponentData = {
  "meta": {
    "slug": "inline-message",
    "name": "Inline Message",
    "node": "6420:91212",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6420-91212",
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "im-spec-main",
        "demoKey": "main",
        "title": "Inline Message",
        "node": "6420:91212",
        "description": "",
        "previewHtml": "<div id=\"inline-message-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": inlineMessageDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "Success",
                "prop": "type"
              },
              { "key": "hasReferenceNumber", "value": "True", "prop": "hasreferencenumber" },
              { "key": "hasBodyContent", "value": "True", "prop": "hasbodycontent" },
              { "key": "hasDownload", "value": "True", "prop": "hasdownload" },
              {
                "key": "⤷ BodySlot",
                "value": "Slot · 4 swap options — ships a placeholder",
                "variants": { "hasbodycontent:false": { "hide": true } }
              },
              {
                "key": "⤷ IllustrationSlot",
                "value": "Slot · 4 swap options — ships a placeholder"
              },
              {
                "key": "Reference row",
                "value": "#name + #amount — baked, not a slot",
                "variants": { "hasreferencenumber:false": { "hide": true } }
              },
              {
                "key": "Resolved variant",
                "value": "6420:91213 · 360 × 465",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "type:success": {
                    "value": "6420:91213 · 360 × 465"
                  },
                  "type:loading": {
                    "value": "6420:91228 · 360 × 465"
                  },
                  "type:error": {
                    "value": "6420:91243 · 360 × 465"
                  },
                  "type:neutral": {
                    "value": "6420:91258 · 360 × 465"
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
                "value": "None — the Container has no fill"
              },
              {
                "key": "Title",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "type:success": {
                    "value": "#005CE5"
                  },
                  "type:loading": {
                    "value": "#CA970C"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:neutral": {
                    "value": "#0A2757"
                  }
                }
              },
              {
                "key": "Description",
                "value": "#445C85",
                "token": "—"
              },
              {
                "key": "Download icon",
                "value": "#005CE5",
                "token": "—",
                "variants": { "hasdownload:false": { "hide": true } }
              },
              {
                "key": "Reference label",
                "value": "#90A8D0",
                "token": "—",
                "variants": { "hasreferencenumber:false": { "hide": true } }
              },
              {
                "key": "Reference value",
                "value": "#0A2757",
                "token": "—",
                "variants": { "hasreferencenumber:false": { "hide": true } }
              },
              {
                "key": "Row divider",
                "value": "#E5EBF4 — top edge only",
                "token": "—"
              },
              {
                "key": "Slot placeholder",
                "value": "#9F3DFB at 9% · dashed 4/4",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Secondary/Default/Base",
                "mono": true
              },
              {
                "key": "Reference label",
                "value": "Primary/Label/Light/Base",
                "mono": true,
                "variants": { "hasreferencenumber:false": { "hide": true } }
              },
              {
                "key": "Reference value",
                "value": "Primary/Label/Large",
                "mono": true,
                "variants": { "hasreferencenumber:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "360 × 465 · radius 12",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Height rule",
                "value": "Content 284 + BodySlot 117 + Reference 64 — the Container hugs",
                "mono": true
              },
              {
                "key": "Download icon",
                "value": "24 × 24 at x 318, y 16",
                "mono": true,
                "variants": { "hasdownload:false": { "hide": true } }
              },
              {
                "key": "IllustrationSlot",
                "value": "106 × 106 at x 127, y 48 — placeholder is a 4-radius square",
                "mono": true
              },
              {
                "key": "Title",
                "value": "328 wide at y 178 · centred",
                "mono": true
              },
              {
                "key": "Description",
                "value": "312 wide at y 220 · two lines of 20",
                "mono": true
              },
              {
                "key": "BodySlot",
                "value": "360 × 117 below Content · 1px top divider",
                "mono": true,
                "variants": { "hasbodycontent:false": { "hide": true } }
              },
              {
                "key": "Reference row",
                "value": "360 × 64 · 1px top divider · block at x 74",
                "mono": true,
                "variants": { "hasreferencenumber:false": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "EBInlineMessage(\n    title: \"Add your label here\",\n    description: \"Add your description here.\",\n    type: .success\n)",
        "compose": "EBInlineMessage(\n    title = \"Add your label here\",\n    description = \"Add your description here.\",\n    type = EBInlineMessageType.Success\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on the four variants of set <code>6420:91212</code>. <strong>Only the title colour changes between Types</strong> — every other value is shared, and the illustration is a slot, so nothing else carries the status. <code>hasReferenceNumber</code>, <code>hasBodyContent</code> and <code>hasDownload</code> remove their rows; the Container hugs what is left. The <code>#E5EBF4</code> stroke on BodySlot and ReferenceNumber is a <strong>top edge only</strong>, not a box. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Title",
          "Shared"
        ],
        "rows": [
          {
            "role": "Success",
            "token": "—",
            "values": [
              "#005CE5",
              "Description #445C85 · Reference #90A8D0 / #0A2757"
            ]
          },
          {
            "role": "Loading",
            "token": "—",
            "values": [
              "#CA970C",
              "as above"
            ]
          },
          {
            "role": "Error",
            "token": "—",
            "values": [
              "#D61B2C",
              "as above"
            ]
          },
          {
            "role": "Neutral",
            "token": "—",
            "values": [
              "#0A2757",
              "as above"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:inline-message:2.1.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.inlinemessage.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>6420:91212</code> — a single <code>Type</code> axis — then the two SLOTs, the download icon and the baked reference row. No property-panel screenshot was supplied, so a boolean or text property would be missing here.",
      "rows": [
        {
          "figma": "Type — Success, Loading, Error, Neutral",
          "swift": "<code>type: .success / .loading / .error / .neutral</code>",
          "compose": "<code>type = EBInlineMessageType.Success / Loading / Error / Neutral</code>"
        },
        {
          "figma": "hasReferenceNumber — boolean",
          "swift": "<code>.ebReference(String, value: String)</code> — omit for False",
          "compose": "<code>reference: EBReference? = null</code>"
        },
        {
          "figma": "hasBodyContent — boolean",
          "swift": "<code>.ebBody { }</code> — omit for False",
          "compose": "<code>body: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasDownload — boolean",
          "swift": "<code>.onDownload { }</code> — omit for False",
          "compose": "<code>onDownload: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ IllustrationSlot — SLOT, 106 × 106 (4 swap options)",
          "swift": "<code>.ebIllustration { }</code>",
          "compose": "<code>illustration: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ BodySlot — SLOT, 360 × 117 (4 swap options)",
          "swift": "trailing closure",
          "compose": "<code>body: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>#title</code> text layer",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "— <code>#description</code> text layer",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "— <code>Download Small</code> instance",
          "swift": "<code>.onDownload { }</code>",
          "compose": "<code>onDownload: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>ReferenceNumber</code> row (<code>#name</code>, <code>#amount</code>)",
          "swift": "baked in Figma — pass an <code>EBReferenceRow</code> yourself",
          "compose": "baked in Figma — pass an <code>EBReferenceRow</code> yourself"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/InlineMessage/EBInlineMessage.swift",
        "compose": "android/components/inlinemessage/EBInlineMessage.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Success",
        "swift": "<span class=\"cmt\">// Type=Success — 6420:91213, 360 × 465. Title #005CE5; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title: <span class=\"str\">\"Add your label here\"</span>,\n    description: <span class=\"str\">\"Add your description here.\"</span>,\n    type: .<span class=\"prp\">success</span>\n) {\n    <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, value: <span class=\"str\">\"1234567890\"</span>)\n}\n.<span class=\"fn\">ebIllustration</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"status\"</span>) }\n.<span class=\"fn\">onDownload</span> { saveReceipt() }",
        "compose": "<span class=\"cmt\">// Type=Success — 6420:91213, 360 × 465. Title #005CE5; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title = <span class=\"str\">\"Add your label here\"</span>,\n    description = <span class=\"str\">\"Add your description here.\"</span>,\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Success</span>,\n    illustration = { <span class=\"typ\">Image</span>(painterResource(R.drawable.status), null) },\n    onDownload = { saveReceipt() },\n    body = { <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, <span class=\"str\">\"1234567890\"</span>) }\n)"
      },
      {
        "subheading": "Loading",
        "swift": "<span class=\"cmt\">// Type=Loading — 6420:91228, 360 × 465. Title #CA970C; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title: <span class=\"str\">\"Add your label here\"</span>,\n    description: <span class=\"str\">\"Add your description here.\"</span>,\n    type: .<span class=\"prp\">loading</span>\n) {\n    <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, value: <span class=\"str\">\"1234567890\"</span>)\n}\n.<span class=\"fn\">ebIllustration</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"status\"</span>) }\n.<span class=\"fn\">onDownload</span> { saveReceipt() }",
        "compose": "<span class=\"cmt\">// Type=Loading — 6420:91228, 360 × 465. Title #CA970C; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title = <span class=\"str\">\"Add your label here\"</span>,\n    description = <span class=\"str\">\"Add your description here.\"</span>,\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Loading</span>,\n    illustration = { <span class=\"typ\">Image</span>(painterResource(R.drawable.status), null) },\n    onDownload = { saveReceipt() },\n    body = { <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, <span class=\"str\">\"1234567890\"</span>) }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"cmt\">// Type=Error — 6420:91243, 360 × 465. Title #D61B2C; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title: <span class=\"str\">\"Add your label here\"</span>,\n    description: <span class=\"str\">\"Add your description here.\"</span>,\n    type: .<span class=\"prp\">error</span>\n) {\n    <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, value: <span class=\"str\">\"1234567890\"</span>)\n}\n.<span class=\"fn\">ebIllustration</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"status\"</span>) }\n.<span class=\"fn\">onDownload</span> { saveReceipt() }",
        "compose": "<span class=\"cmt\">// Type=Error — 6420:91243, 360 × 465. Title #D61B2C; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title = <span class=\"str\">\"Add your label here\"</span>,\n    description = <span class=\"str\">\"Add your description here.\"</span>,\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Error</span>,\n    illustration = { <span class=\"typ\">Image</span>(painterResource(R.drawable.status), null) },\n    onDownload = { saveReceipt() },\n    body = { <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, <span class=\"str\">\"1234567890\"</span>) }\n)"
      },
      {
        "subheading": "Neutral",
        "swift": "<span class=\"cmt\">// Type=Neutral — 6420:91258, 360 × 465. Title #0A2757; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title: <span class=\"str\">\"Add your label here\"</span>,\n    description: <span class=\"str\">\"Add your description here.\"</span>,\n    type: .<span class=\"prp\">neutral</span>\n) {\n    <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, value: <span class=\"str\">\"1234567890\"</span>)\n}\n.<span class=\"fn\">ebIllustration</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"status\"</span>) }\n.<span class=\"fn\">onDownload</span> { saveReceipt() }",
        "compose": "<span class=\"cmt\">// Type=Neutral — 6420:91258, 360 × 465. Title #0A2757; everything else is shared.</span>\n<span class=\"typ\">EBInlineMessage</span>(\n    title = <span class=\"str\">\"Add your label here\"</span>,\n    description = <span class=\"str\">\"Add your description here.\"</span>,\n    type = <span class=\"typ\">EBInlineMessageType</span>.<span class=\"prp\">Neutral</span>,\n    illustration = { <span class=\"typ\">Image</span>(painterResource(R.drawable.status), null) },\n    onDownload = { saveReceipt() },\n    body = { <span class=\"typ\">EBReferenceRow</span>(<span class=\"str\">\"Reference no.\"</span>, <span class=\"str\">\"1234567890\"</span>) }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Announce the outcome",
        "ios": "This is the result of an action: post an announcement with the title and description when it appears, and mark the title <code>.accessibilityAddTraits(.isHeader)</code>.",
        "android": "Set <code>liveRegion = LiveRegionMode.Assertive</code> for Error and <code>Polite</code> otherwise; <code>heading()</code> on the title."
      },
      {
        "requirement": "Not colour alone",
        "ios": "Type changes the title colour and nothing else — the illustration is a slot the consumer fills. Make the copy say the outcome; never rely on blue versus red.",
        "android": "Same — the four variants are otherwise identical."
      },
      {
        "requirement": "Download action",
        "ios": "The 24 × 24 icon is the only control. Label it \"Download receipt\" and extend the hit area to 44pt.",
        "android": "<code>IconButton</code> with <code>contentDescription</code>; 48dp target."
      },
      {
        "requirement": "Reference number",
        "ios": "Read the digits as a group, not a number — set <code>.accessibilityLabel</code> with spaced digits so VoiceOver does not say \"one billion\".",
        "android": "Same; provide a spaced <code>contentDescription</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Titles: Success 5.73:1, Error 5.18:1, Neutral 14.58:1 — but Loading #CA970C is 2.64:1, below AA for 22pt text. The reference label #90A8D0 is 2.41:1 at 16pt.",
        "android": "Same ratios."
      },
      {
        "requirement": "Loading semantics",
        "ios": "Type=Loading is a static surface, not a spinner. If work is in flight, drive a real progress view and update the message when it resolves.",
        "android": "Same — pair it with a progress indicator in the illustration slot."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Inline Message as the full-screen result of a transaction — sent, processing, failed.",
        "dontText": "Don’t use it for a transient confirmation; that is Toast."
      },
      {
        "doText": "Fill both slots: an illustration for the status and whatever detail the flow needs in the body.",
        "dontText": "Don’t ship the purple Slot Block placeholders — they are authoring scaffolding."
      },
      {
        "doText": "Say the outcome in the title, since Type only changes its colour.",
        "dontText": "Don’t rely on the colour to carry the meaning, and don’t use Loading as a live spinner."
      },
      {
        "doText": "Replace the baked reference row when the flow has no reference number.",
        "dontText": "Don’t leave \"Reference no. 1234567890\" in place — it is sample content, not a slot."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Container</code>, <code>Content</code>, <code>ReceiptStatus</code>, <code>Description</code>, <code>ReferenceNumber</code> and <code>ReferenceBlock</code> are semantic, and the two slots follow the <code>⤷ …Slot</code> convention. The text layers keep the legacy hash prefix — <code>#title</code>, <code>#description</code>, <code>#name</code>, <code>#amount</code> — and <code>ReceiptStatus</code> names a receipt inside a component used for any outcome."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A single PascalCase <code>Type</code> axis with four Title Case values, plus three <code>has*</code> booleans on <code>True</code>/<code>False</code>. Complete at four variants."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All four text layers resolve <code>matched</code> — <code>Primary/Headlines/Section</code>, <code>Secondary/Default/Base</code>, <code>Primary/Label/Light/Base</code>, <code>Primary/Label/Large</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "One view with a type enum, two slots and a download action. Two things a developer inherits from the file: the reference row is baked sample content behind <code>hasReferenceNumber</code> rather than a slot, and <code>Type</code> changes only the title colour, so the status has to be carried by copy and by whatever the consumer puts in the illustration slot."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A result surface. The only control is the download icon, whose states belong to the icon button."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The download glyph is a DS icon instance, and the illustration is a real SLOT rather than a baked image. Both slots ship a <code>Slot Block</code> placeholder, which is the file-wide authoring convention."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "One enum and two slots are ready to map; no SwiftUI or Compose mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>Type</code> (4) = 4 variants, all built and all 360 × 465. Only <code>#title</code> changes colour between them.",
      "columns": [
        "Type",
        "Node ID",
        "Dimensions",
        "Title"
      ],
      "rows": [
        {
          "cells": [
            "Success",
            "<code>6420:91213</code>",
            "360 × 465",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Loading",
            "<code>6420:91228</code>",
            "360 × 465",
            "#CA970C"
          ]
        },
        {
          "cells": [
            "Error",
            "<code>6420:91243</code>",
            "360 × 465",
            "#D61B2C"
          ]
        },
        {
          "cells": [
            "Neutral",
            "<code>6420:91258</code>",
            "360 × 465",
            "#0A2757"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 6420:91212",
      "rows": [
        {
          "body": "<strong>Borders corrected to top-edge only.</strong> <code>get_svg</code> on <code>6420:91222</code> and <code>6420:91223</code> returns a 1px #E5EBF4 band across the top of each row, not a box; the preview had drawn a full rectangle. The illustration placeholder is also a 4-radius dashed square rather than a circle — the slot is fully rounded but the Slot Block inside it is not.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Documented against the 2026 Working File copy.</strong> The page pointed at <code>26416:18421</code> in Sticker Sheets v2, which the Working File does not contain. Meta, the spec card and the inventory now use <code>6420:91212</code> and its four variant nodes.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> A single card on retired node <code>27:168911</code> is replaced by one card with the <code>Type</code> axis; both slots are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 × 465 at radius 12, the 106 illustration slot at x 127, the download icon from <code>get_svg</code>, the 117-tall body slot and the 64-tall reference row — matching <code>export_node_as_image</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> <code>Primary/Headlines/Section</code>, <code>Secondary/Default/Base</code>, <code>Primary/Label/Light/Base</code> and <code>Primary/Label/Large</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab was rebuilt on the live axis.</strong> Install is <code>com.eastblue.ds:inline-message:2.1.1</code>, with one snippet per Type and a four-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong><code>Type</code> changes only the title colour.</strong> The four variants are otherwise identical, so the status rests on copy and on whatever the consumer swaps into the illustration slot. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>The reference row is baked sample content</strong> — \"Reference no. 1234567890\" in <code>#name</code> and <code>#amount</code>, not a slot, so a flow without a reference number has to detach. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Text layers keep the <code>#</code> prefix</strong> (<code>#title</code>, <code>#description</code>, <code>#name</code>, <code>#amount</code>) and <code>ReceiptStatus</code> names a receipt inside a general-purpose surface. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Loading title fails AA</strong> — #CA970C is 2.64:1 on white at 22pt; the reference label #90A8D0 is 2.41:1 at 16pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Panel confirmed from the property panel.</strong> Three booleans the variant names do not show — <code>hasReferenceNumber</code>, <code>hasBodyContent</code> and <code>hasDownload</code>, all True — plus <code>⤷ BodySlot</code> and <code>⤷ IllustrationSlot</code> with 4 swap options each. The Container hugs its rows: Content 284 + BodySlot 117 + Reference 64 = 465, so turning a boolean off removes that row.",
          "delta": {
            "kind": "resolved",
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
