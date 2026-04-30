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
    "node": "27:168910",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-168910",
    "description": "A subtle inline status message rendered alongside form fields or content — neutral, info, success, or error intent.",
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
      "title": "Asset bundling + token + slot cleanup",
      "text": "3D illustrations + Lottie animation require bundling as native assets. Replace the alpha-composited <code>bg-subtle</code> token with a solid color. Expose the body-content section as a Figma Slot so consumers can override the List with their own content (transaction breakdowns, shared-with lists, etc.)."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Inline Message is the primary surface for transaction confirmations and error recovery flows.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"140\" viewBox=\"0 0 200 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" fill=\"#F6F9FD\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"46\" y=\"20\" width=\"108\" height=\"108\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect>\n          \n          <circle cx=\"100\" cy=\"44\" r=\"14\" fill=\"#EAF2FE\"></circle>\n          <circle cx=\"100\" cy=\"44\" r=\"9\" fill=\"#005CE5\"></circle>\n          <path d=\"M95 44l3 3 6-6\" stroke=\"#FFF\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          \n          <text x=\"100\" y=\"72\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"8\" font-weight=\"700\" font-family=\"\\'Proxima Soft\\', system-ui\">Payment Successful</text>\n          <rect x=\"62\" y=\"78\" width=\"76\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          <rect x=\"70\" y=\"83\" width=\"60\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          \n          <rect x=\"54\" y=\"92\" width=\"92\" height=\"0.5\" fill=\"#E5EBF4\"></rect>\n          <circle cx=\"64\" cy=\"99\" r=\"1.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"70\" y=\"98\" width=\"56\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".5\"></rect>\n          <circle cx=\"64\" cy=\"107\" r=\"1.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"70\" y=\"106\" width=\"48\" height=\"2\" rx=\"1\" fill=\"#445C85\" opacity=\".5\"></rect>\n          \n          <rect x=\"54\" y=\"116\" width=\"92\" height=\"0.5\" fill=\"#E5EBF4\"></rect>\n          <text x=\"100\" y=\"126\" text-anchor=\"middle\" fill=\"#0A2757\" font-size=\"5\" font-weight=\"600\" font-family=\"\\'Proxima Soft\\', system-ui\">Ref. 1234567890</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"im-demo-preview\"><svg width=\"280\" height=\"364\" viewBox=\"0 0 280 364\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"280\" height=\"364\" rx=\"12\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><circle cx=\"140\" cy=\"56\" r=\"32\" fill=\"#EAF2FE\"></circle><circle cx=\"140\" cy=\"56\" r=\"24\" fill=\"#005CE5\"></circle><path d=\"M132 56 l 6 6 l 12 -12\" stroke=\"#FFF\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><text x=\"140\" y=\"120\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"18\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Add your label here</text><text x=\"140\" y=\"138\" text-anchor=\"middle\" fill=\"#445C85\" font-size=\"11\" font-family=\"'BarkAda', system-ui\">Add your description here.</text><text x=\"140\" y=\"152\" text-anchor=\"middle\" fill=\"#445C85\" font-size=\"11\" font-family=\"'BarkAda', system-ui\">This is just a filler sentence.</text><rect x=\"0\" y=\"154\" width=\"280\" height=\"1\" fill=\"#E5EBF4\"></rect><text x=\"28\" y=\"174\" fill=\"#0A2757\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Header</text><rect x=\"0\" y=\"184\" width=\"280\" height=\"1\" fill=\"#E5EBF4\"></rect><path d=\"M46 198 l 3 3 l 6 -6\" stroke=\"#90A8D0\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><text x=\"62\" y=\"201\" fill=\"#445C85\" font-size=\"11\" font-family=\"'BarkAda', system-ui\">Content</text><path d=\"M46 218 l 3 3 l 6 -6\" stroke=\"#90A8D0\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><text x=\"62\" y=\"221\" fill=\"#445C85\" font-size=\"11\" font-family=\"'BarkAda', system-ui\">Content</text><path d=\"M46 238 l 3 3 l 6 -6\" stroke=\"#90A8D0\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><text x=\"62\" y=\"241\" fill=\"#445C85\" font-size=\"11\" font-family=\"'BarkAda', system-ui\">Content</text><rect x=\"0\" y=\"304\" width=\"280\" height=\"1\" fill=\"#E5EBF4\"></rect><text x=\"114\" y=\"328\" text-anchor=\"end\" fill=\"#90A8D0\" font-size=\"11\" font-weight=\"600\" font-family=\"'Proxima Soft', system-ui\">Reference no.</text><text x=\"120\" y=\"328\" fill=\"#0A2757\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">1234567890</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" id=\"im-demo-type\" onchange=\"updateInlineMessageDemo()\"><option value=\"success\" selected=\"\">Success</option><option value=\"loading\">Loading</option><option value=\"error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">assetSize</span><select class=\"demo-panel-select\" id=\"im-demo-size\" onchange=\"updateInlineMessageDemo()\"><option value=\"large\" selected=\"\">Large</option><option value=\"small\">Small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBodyContent</span><select class=\"demo-panel-select\" id=\"im-demo-body\" onchange=\"updateInlineMessageDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasReferenceNumber</span><select class=\"demo-panel-select\" id=\"im-demo-ref\" onchange=\"updateInlineMessageDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Covers confirm, processing, and error outcomes for transactions, logins, KYC, and any multi-step flow with a final status surface."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Carries its own bg, border, radius, and shadow. But illustrations are raster 3D renders bundled externally, and Loading likely uses a Lottie animation. Document both as required assets. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Type enum values are clean (Success / Loading / Error). <code>bg-subtle</code> token bakes in 24% alpha — rendered color depends on what's behind it, which is unusual for a \"bg\" token. <span class=\"tag-open tag-c3\">C3</span>"
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Body content composes instances of the canonical <strong>List Item</strong> component. Changes to List Item propagate here ✓."
      }
    ],
    "behavior": [
      {
        "state": "Success",
        "ios": "yes",
        "android": "yes",
        "property": "type=Success",
        "notes": "Blue palette. Completed action, positive outcome."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "type=Loading",
        "notes": "Lottie spinner animation. Processing state."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "type=Error",
        "notes": "Red/negative palette. Failed or blocked action."
      },
      {
        "state": "Asset Size",
        "ios": "yes",
        "android": "yes",
        "property": "assetSize=Large/Small",
        "notes": "Large: 106px illustration. Small: reduced illustration for denser layouts."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "<code>bg-subtle</code> token bakes in alpha",
        "body": "— <code>rgba(246,249,253,0.24)</code> composites against whatever sits behind it, so the actual rendered color varies by context. Should be a solid token (e.g. <code>#F9FBFD</code>) or use an explicit layering convention.",
        "tag": {
          "criterion": "C3",
          "label": "C3"
        }
      },
      {
        "headline": "Illustrations are raster 3D renders",
        "body": "— Success / Loading / Error illustrations must be bundled with the native package. Loading is almost certainly a Lottie animation (same pattern as Upload File). Document as required assets.",
        "tag": {
          "criterion": "C6",
          "label": "C6"
        }
      },
      {
        "headline": "Body content not exposed as a slot",
        "body": "— <code>hasBodyContent</code> is a boolean but the List inside is not overridable. Consumers doing transaction breakdowns, beneficiary lists, etc. need slot access.",
        "tag": {
          "criterion": "C2",
          "label": "C2"
        }
      },
      {
        "body": "Code Connect CLI mappings not registered.",
        "tag": {
          "criterion": "C7",
          "label": "C7"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Expose the body-content area as a Figma Slot",
        "body": "so consumers can compose their own List Items, tables, or custom content. Maps to <code>@ViewBuilder</code> / <code>@Composable</code> slot for Code Connect.",
        "tag": "Docs"
      },
      {
        "headline": "Replace <code>bg-subtle</code> with a solid token",
        "body": "— either <code>main/inline-message/color/{type}/bg-soft</code> or use a layering convention that doesn't depend on alpha compositing.",
        "tag": "Token"
      },
      {
        "headline": "Document illustration + Lottie asset dependencies",
        "body": "in the native package README. Bundle the JSON / raster sources so the component ships self-contained.",
        "tag": "Docs"
      },
      {
        "headline": "Consider a \"neutral / info\" type",
        "body": "— today only success/loading/error are covered, but some flows need a neutral informational outcome (e.g. \"Transaction pending review\").",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "success",
        "demoKey": "success",
        "demoControls": inlineMessageDemoControls,
        "title": "Success",
        "node": "27:168911",
        "description": "Blue palette. 106px 3D check illustration. Used for completed actions and positive outcomes.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itm-spec-success\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Success", "prop": "variant" },
              { "key": "Intent",  "value": "Success" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",         "value": "#FFFFFF", "token": "inline-message/color/success/bg" },
              { "key": "Border",          "value": "#E5EBF4", "token": "inline-message/color/success/border" },
              { "key": "Header",          "value": "#0A2757", "token": "inline-message/color/success/label-header" },
              { "key": "Title",           "value": "#005CE5", "token": "inline-message/color/success/label-title" },
              { "key": "Description",    "value": "#445C85", "token": "inline-message/color/success/label-description" },
              { "key": "Reference label", "value": "#90A8D0", "token": "inline-message/color/success/label-reference" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Card width",    "value": "360px", "mono": true },
              { "key": "Padding",       "value": "24 horizontal · 24 vertical", "mono": true },
              { "key": "Border radius", "value": "12px",  "mono": true },
              { "key": "Shadow",        "value": "Depth/D4", "mono": true },
              { "key": "Illustration",  "value": "106 × 106", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style",       "value": "Primary/Headlines/Section", "mono": true },
              { "key": "Title font",        "value": "Proxima Soft Bold · 22 / 26", "mono": true },
              { "key": "Description style", "value": "Secondary/Default/Base", "mono": true },
              { "key": "Description font",  "value": "BarkAda Medium · 14 / 20", "mono": true },
              { "key": "Reference no.",     "value": "Primary/Label/Light/Base · Proxima Soft Semibold", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.success</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebReferenceNumber</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"1234567890\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBMessageIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Success</span><span class=\"syn-punc\">,</span>\n    referenceNumber <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1234567890\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "loading",
        "demoKey": "loading",
        "demoControls": inlineMessageDemoControls,
        "title": "Loading",
        "node": "27:168980",
        "description": "Lottie spinner animation. Processing / waiting state.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itm-spec-loading\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Loading", "prop": "variant" },
              { "key": "Intent",  "value": "Loading" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",         "value": "#FFFFFF", "token": "inline-message/color/loading/bg" },
              { "key": "Border",          "value": "#E5EBF4", "token": "inline-message/color/loading/border" },
              { "key": "Header",          "value": "#0A2757", "token": "inline-message/color/loading/label-header" },
              { "key": "Title",           "value": "#CA970C", "token": "inline-message/color/loading/label-title" },
              { "key": "Description",    "value": "#445C85", "token": "inline-message/color/loading/label-description" },
              { "key": "Reference label", "value": "#90A8D0", "token": "inline-message/color/loading/label-reference" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Card width",    "value": "360px", "mono": true },
              { "key": "Padding",       "value": "24 horizontal · 24 vertical", "mono": true },
              { "key": "Border radius", "value": "12px",  "mono": true },
              { "key": "Shadow",        "value": "Depth/D4", "mono": true },
              { "key": "Illustration",  "value": "106 × 106", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style",       "value": "Primary/Headlines/Section", "mono": true },
              { "key": "Title font",        "value": "Proxima Soft Bold · 22 / 26", "mono": true },
              { "key": "Description style", "value": "Secondary/Default/Base", "mono": true },
              { "key": "Description font",  "value": "BarkAda Medium · 14 / 20", "mono": true },
              { "key": "Reference no.",     "value": "Primary/Label/Light/Base · Proxima Soft Semibold", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.loading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebReferenceNumber</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"1234567890\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBMessageIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Loading</span><span class=\"syn-punc\">,</span>\n    referenceNumber <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1234567890\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "error",
        "demoKey": "error",
        "demoControls": inlineMessageDemoControls,
        "title": "Error",
        "node": "27:169049",
        "description": "Red palette. Failure illustration. Used for blocked or rejected outcomes.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itm-spec-error\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Error", "prop": "variant" },
              { "key": "Intent",  "value": "Error" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",         "value": "#FFFFFF", "token": "inline-message/color/error/bg" },
              { "key": "Border",          "value": "#E5EBF4", "token": "inline-message/color/error/border" },
              { "key": "Header",          "value": "#0A2757", "token": "inline-message/color/error/label-header" },
              { "key": "Title",           "value": "#D61B2C", "token": "inline-message/color/error/label-title" },
              { "key": "Description",    "value": "#445C85", "token": "inline-message/color/error/label-description" },
              { "key": "Reference label", "value": "#90A8D0", "token": "inline-message/color/error/label-reference" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Card width",    "value": "360px", "mono": true },
              { "key": "Padding",       "value": "24 horizontal · 24 vertical", "mono": true },
              { "key": "Border radius", "value": "12px",  "mono": true },
              { "key": "Shadow",        "value": "Depth/D4", "mono": true },
              { "key": "Illustration",  "value": "106 × 106", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style",       "value": "Primary/Headlines/Section", "mono": true },
              { "key": "Title font",        "value": "Proxima Soft Bold · 22 / 26", "mono": true },
              { "key": "Description style", "value": "Secondary/Default/Base", "mono": true },
              { "key": "Description font",  "value": "BarkAda Medium · 14 / 20", "mono": true },
              { "key": "Reference no.",     "value": "Primary/Label/Light/Base · Proxima Soft Semibold", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebReferenceNumber</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"1234567890\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineMessage</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your label here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add your description here.\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBMessageIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span><span class=\"syn-punc\">,</span>\n    referenceNumber <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1234567890\"</span>\n<span class=\"syn-punc\">)</span>"
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
