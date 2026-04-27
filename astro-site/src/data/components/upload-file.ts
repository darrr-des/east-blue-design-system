import type { ComponentData } from '../types';

export const uploadFile: ComponentData = {
  "meta": {
    "slug": "upload-file",
    "name": "Upload File",
    "node": "18482:35064",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-35064",
    "description": "A file-upload field with a tappable upload affordance, file-name display, and progress/error states.",
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
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "fix",
      "title": "Property + token cleanup needed",
      "text": "Fix the <code>boder</code> → <code>border</code> token typo (library-wide). Normalize <code>hasLabel</code> to <code>true/false</code>. Split <code>state=\"Uploaded with thumbnail\"</code> into <code>state=uploaded</code> + <code>hasThumbnail: Bool</code>. Rename <code>\"Upload error\"</code> → <code>error</code> (remove space). Adopt a Figma Slot for the thumbnail image. Add <code>disabled</code> state."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Upload File appears in forms requiring document proof (KYC, insurance claims, verification).",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"140\" viewBox=\"0 0 200 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Upload Docs</text>\n          \n          <rect x=\"42\" y=\"36\" width=\"40\" height=\"4\" rx=\"1\" fill=\"#0A2757\" opacity=\".8\"></rect>\n          <rect x=\"42\" y=\"44\" width=\"116\" height=\"22\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></rect>\n          <path d=\"M50 52v2a1.4 1.4 0 002.8 0v-3a2 2 0 00-4 0v3\" stroke=\"#6780A9\" stroke-width=\"0.9\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <text x=\"62\" y=\"58\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Attach file / photo</text>\n          \n          <rect x=\"42\" y=\"72\" width=\"60\" height=\"4\" rx=\"1\" fill=\"#0A2757\" opacity=\".8\"></rect>\n          <rect x=\"42\" y=\"80\" width=\"116\" height=\"22\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></rect>\n          <path d=\"M50 88v2a1.4 1.4 0 002.8 0v-3a2 2 0 00-4 0v3\" stroke=\"#6780A9\" stroke-width=\"0.9\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <text x=\"62\" y=\"94\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">ID_proof.jpg</text>\n          <path d=\"M148 88l3 3 3-3\" stroke=\"#6780A9\" stroke-width=\"1\" fill=\"none\" stroke-linecap=\"round\"></path>\n          \n          <rect x=\"42\" y=\"112\" width=\"116\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"100\" y=\"122\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Submit</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"uf-demo-preview\"><svg width=\"304\" height=\"98\" viewBox=\"0 0 304 98\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"1\" width=\"302\" height=\"70\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"2\"></rect><path d=\"M22 34 v6 a4 4 0 008 0 v-8 a6 6 0 00-12 0 v8\" stroke=\"#6780A9\" stroke-width=\"1.4\" fill=\"none\" stroke-linecap=\"round\"></path><text x=\"38\" y=\"42\" fill=\"#005CE5\" font-size=\"18\" font-weight=\"600\" font-family=\"'HeyMeow Rnd', system-ui\">Attach file / photo</text><text x=\"2\" y=\"88\" fill=\"#6780A9\" font-size=\"12\" font-weight=\"600\" font-family=\"'BarkAda', system-ui\">Accepted format: JPEG, PNG, or PDF, Up to 3 MB</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" id=\"uf-demo-state\" onchange=\"updateUploadFileDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"uploading\">Uploading</option><option value=\"uploaded\">Uploaded</option><option value=\"error\">Upload error</option><option value=\"thumbnail\">Uploaded with thumbnail</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLabel</span><select class=\"demo-panel-select\" id=\"uf-demo-label\" onchange=\"updateUploadFileDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used in KYC flows, insurance claims, profile setup — anywhere a user uploads a document or photo. Five states cover the full upload lifecycle."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Carries its own bg, border, padding, radius. Progress bar relies on an external <strong>Lottie animation</strong> — must be bundled with the native package as an asset dependency. Thumbnail placeholder uses a hardcoded hex with baked opacity instead of a token. <span class=\"tag-open tag-c3\">C3</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Three property-naming issues: <code>hasLabel</code> uses yes/no, <code>state=\"Upload error\"</code> contains a space, and <code>\"Uploaded with thumbnail\"</code> is really an orthogonal boolean, not a state. Also the <code>boder</code> typo in every border token. <span class=\"tag-open tag-c2\">C2</span> <span class=\"tag-open tag-c3\">C3</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Thumbnail is a 52×52 hardcoded placeholder block (same <code>icon-placeholder</code> pattern we've flagged in Chip, Tab Item, List Item Asset) — should be a Figma Slot so product teams can drop in any preview image. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "state=Default",
        "notes": "Empty input with paperclip + \"Attach file / photo\" label"
      },
      {
        "state": "Uploading",
        "ios": "yes",
        "android": "yes",
        "property": "state=Uploading",
        "notes": "Shows file name + Lottie progress bar + percentage"
      },
      {
        "state": "Uploaded",
        "ios": "yes",
        "android": "yes",
        "property": "state=Uploaded",
        "notes": "File name + trailing trash icon to remove"
      },
      {
        "state": "Uploaded with thumbnail",
        "ios": "yes",
        "android": "yes",
        "property": "state=Uploaded with thumbnail",
        "notes": "52×52 image preview + truncated file name + trash. Should be orthogonal <code>hasThumbnail</code> prop."
      },
      {
        "state": "Upload error",
        "ios": "yes",
        "android": "yes",
        "property": "state=Upload error",
        "notes": "Red 2px border + red subtext (\"Maximum file size: 20MB\")"
      },
      {
        "state": "Disabled / Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not defined. Engineers must improvise. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Property naming issues.",
        "body": "<code>hasLabel</code> uses <code>yes/no</code> instead of <code>true/false</code>; <code>state=\"Upload error\"</code> contains a space; <code>state=\"Uploaded with thumbnail\"</code> mixes two orthogonal dimensions (state + thumbnail presence).",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Token typo — <code>boder</code>.",
        "body": "Every border token is misspelled: <code>main/upload-file/color/default/boder</code>, <code>main/upload-file/color/error/boder</code>. Rename across the whole collection.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Thumbnail color hardcoded.",
        "body": "Uses <code>#0057E4</code> with <code>opacity: 5%</code> baked in instead of a token.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "No disabled / pressed / focused states.",
        "body": "Forms need a disabled variant for read-only views; pressed and focused are expected interaction affordances.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Thumbnail is a placeholder.",
        "body": "52×52 gray block instead of a swappable image slot. Should be a Figma Slot that accepts a real image instance.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Lottie dependency.",
        "body": "Progress bar requires the Lottie animation (<code>0a1cb540-b53a-4e28-afa5-8aa5ca7ebaa1</code>) to be bundled with the native package. Document as a required asset.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until state/property restructure and token rename land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Restructure the state property",
        "body": ":<br>• <code>state: default / uploading / uploaded / error</code> (4 values, clean enums)<br>• <code>hasThumbnail: Bool</code> (orthogonal — can combine with <code>uploaded</code>)<br>• <code>hasLabel: Bool</code> (true/false)<br>• <code>disabled: Bool</code> (new)<br>Collapses 10 variants into 4 states × 2 hasLabel × 2 hasThumbnail × 2 disabled = 32 prop combinations with no invalid states.",
        "tag": "Property"
      },
      {
        "headline": "Fix the <code>boder</code> typo across the token collection.",
        "body": "Rename both <code>default/boder</code> and <code>error/boder</code>. Library-wide change — affects every variant.",
        "tag": "Token"
      },
      {
        "headline": "Tokenize the thumbnail placeholder",
        "body": "— replace hardcoded <code>#0057E4 @ 5%</code> with <code>main/upload-file/color/default/thumbnail-bg</code>.",
        "tag": "Token"
      },
      {
        "headline": "Adopt a Figma Slot for the thumbnail",
        "body": "— swappable preview image. Maps to <code>@ViewBuilder</code> / <code>@Composable</code> slot for Code Connect.",
        "tag": "Slot"
      },
      {
        "headline": "Reuse Labeled Field for the label + subtext scaffolding.",
        "body": "Today Upload File reimplements the label-above + subtext-below pattern that Labeled Field already ships. Making Upload File an input slot inside Labeled Field reduces duplication.",
        "tag": "Composition"
      },
      {
        "headline": "Document the Lottie dependency",
        "body": "— Progress bar is a Lottie animation. Native packages must bundle the animation JSON. Consider replacing with a native progress bar for a lighter dependency.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-—-empty-state",
        "title": "Default — empty state",
        "node": "18482:35065",
        "description": "Empty state with paperclip + \"Attach file / photo\" placeholder text. 2px border, white bg. Subtext below lists accepted formats.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Default — empty state",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/default/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "uploading-—-lottie-progress",
        "title": "Uploading — Lottie progress",
        "node": "18482:35084",
        "description": "Shows file name + 5px-tall Lottie progress bar + percentage. Height grows to 91px to accommodate the progress row.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Uploading — Lottie progress",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/default/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "uploaded-—-file-name-+-trash",
        "title": "Uploaded — file name + trash",
        "node": "18482:35119",
        "description": "File name (<code>GCash_File.png</code>) + trailing trash icon for removal.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Uploaded — file name + trash",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/default/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "uploaded-with-thumbnail-—-preview-+-name",
        "title": "Uploaded with thumbnail — preview + name",
        "node": "18482:35163",
        "description": "52×52 thumbnail preview + truncated file name (<code>New_GCash_Fi….jpeg</code>) + trash. Recommended to split into <code>state=uploaded</code> + <code>hasThumbnail: true</code>.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Uploaded with thumbnail — preview + name",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/default/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "upload-error-—-red-border-+-error-subtext",
        "title": "Upload error — red border + error subtext",
        "node": "18482:35142",
        "description": "Red 2px border + red error subtext (\"Maximum file size: 20MB\").",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Error",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Upload error — red border + error subtext",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/error/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/error/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/error/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/error/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "bg",
            "values": [
              "main/upload-file/color/default/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/upload-file/color/default/boder typo",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "leading icon",
            "values": [
              "main/upload-file/color/default/icon-leading",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "trailing icon",
            "values": [
              "main/upload-file/color/default/icon-trailing",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/upload-file/color/default/label",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "file name",
            "values": [
              "main/upload-file/color/default/label-name",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "progress label",
            "values": [
              "main/upload-file/color/default/progress-label",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "thumbnail bg",
            "values": [
              "— (hardcoded #0057E4 @ 5%) not tokenized",
              "—"
            ]
          },
          {
            "role": "Error",
            "token": "bg",
            "values": [
              "main/upload-file/color/error/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/upload-file/color/error/boder typo",
              "#D61B2C"
            ]
          },
          {
            "role": "—",
            "token": "leading icon",
            "values": [
              "main/upload-file/color/error/icon-leading",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/upload-file/color/error/label",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "file name",
            "values": [
              "main/upload-file/color/error/label-name",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "error subtext",
            "values": [
              "main/subtext-message/error/label",
              "#D61B2C"
            ]
          },
          {
            "role": "Subtext",
            "token": "default label",
            "values": [
              "main/subtext-message/primary/label",
              "#6780A9"
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
              "304px"
            ]
          },
          {
            "role": "Input height (default/uploaded/error)",
            "token": "—",
            "values": [
              "72px"
            ]
          },
          {
            "role": "Input height (uploading)",
            "token": "—",
            "values": [
              "91px (adds progress row)"
            ]
          },
          {
            "role": "Border width",
            "token": "—",
            "values": [
              "2px"
            ]
          },
          {
            "role": "Corner radius",
            "token": "radius/radius-2",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Horizontal padding",
            "token": "—",
            "values": [
              "16px (12L / 16R for thumbnail)"
            ]
          },
          {
            "role": "Vertical padding",
            "token": "—",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Icon → name gap",
            "token": "space/space-4",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Thumbnail size",
            "token": "—",
            "values": [
              "52 × 52"
            ]
          },
          {
            "role": "Thumbnail → name gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Label → input gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Input → subtext gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Progress bar height",
            "token": "—",
            "values": [
              "5px"
            ]
          },
          {
            "role": "Progress bar width",
            "token": "—",
            "values": [
              "250px"
            ]
          },
          {
            "role": "Leading / trailing icon size",
            "token": "—",
            "values": [
              "24 × 24"
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
            "role": "Label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "HeyMeow Rnd Semibold · 14 / 14 · +0.25"
            ]
          },
          {
            "role": "File name / placeholder",
            "token": "Primary/Label/Light/Large",
            "values": [
              "HeyMeow Rnd Semibold · 18 / 18 · +0.25"
            ]
          },
          {
            "role": "Subtext",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda Semibold · 12 / 18"
            ]
          },
          {
            "role": "Progress percentage",
            "token": "Secondary/Bold/Small Caption",
            "values": [
              "BarkAda Semibold · 10 / 15"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Requires: lottie-ios for progress animation</span>\n<span class=\"str\">\"https://github.com/airbnb/lottie-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:upload-file:1.0.0\"</span>)\n    <span class=\"cmt\">// Requires: lottie-compose for progress animation</span>\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.airbnb.android:lottie-compose:6.4.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "state=Default/Uploading/Uploaded/Upload error",
          "swift": "state: EBUploadState",
          "compose": "state: .default / .uploading / .uploaded / .error"
        },
        {
          "figma": "state=Uploaded with thumbnail",
          "swift": "state=uploaded + hasThumbnail",
          "compose": ".hasThumbnail(true)"
        },
        {
          "figma": "hasLabel=yes/no",
          "swift": "label: String?",
          "compose": "label: String?"
        },
        {
          "figma": "—",
          "swift": "fileName: String?",
          "compose": "fileName: String?"
        },
        {
          "figma": "—",
          "swift": "progress: Double",
          "compose": "progress: Double (0.0–1.0)"
        },
        {
          "figma": "thumbnail placeholder",
          "swift": "Figma Slot → ViewBuilder",
          "compose": "@ViewBuilder thumbnail"
        },
        {
          "figma": "—",
          "swift": "disabled: Bool",
          "compose": ".disabled(true)"
        },
        {
          "figma": "—",
          "swift": "onSelect / onRemove",
          "compose": "onSelect / onRemove"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/UploadFile/EBUploadFile.swift",
        "compose": "android/components/uploadfile/EBUploadFile.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default — empty state</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Proof of ID\"</span>, <span class=\"prp\">onSelect</span>: { url <span class=\"kw\">in</span>\n    <span class=\"cmt\">// handle picked file</span>\n})\n\n<span class=\"cmt\">// Uploading</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">fileName</span>: <span class=\"str\">\"GCash_File.png\"</span>, <span class=\"prp\">progress</span>: <span class=\"kw\">0.2</span>)\n    .<span class=\"fn\">ebState</span>(.<span class=\"prp\">uploading</span>)\n\n<span class=\"cmt\">// Uploaded with thumbnail (Figma Slot)</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">fileName</span>: <span class=\"str\">\"ID_proof.jpg\"</span>, <span class=\"prp\">onRemove</span>: { ... }) {\n    <span class=\"typ\">AsyncImage</span>(url: imageURL)\n        .<span class=\"fn\">aspectRatio</span>(contentMode: .fill)\n        .<span class=\"fn\">clipShape</span>(<span class=\"typ\">RoundedRectangle</span>(cornerRadius: <span class=\"kw\">4</span>))\n}\n.<span class=\"fn\">ebState</span>(.<span class=\"prp\">uploaded</span>)\n\n<span class=\"cmt\">// Error</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Upload receipt\"</span>,\n    <span class=\"prp\">errorMessage</span>: <span class=\"str\">\"Maximum file size: 20MB\"</span>)\n    .<span class=\"fn\">ebState</span>(.<span class=\"prp\">error</span>)",
        "compose": "<span class=\"cmt\">// Default — empty state</span>\n<span class=\"typ\">EBUploadFile</span>(\n    label = <span class=\"str\">\"Proof of ID\"</span>,\n    onSelect = { uri -&gt; /* handle picked file */ }\n)\n\n<span class=\"cmt\">// Uploading</span>\n<span class=\"typ\">EBUploadFile</span>(\n    state = <span class=\"typ\">EBUploadState</span>.<span class=\"prp\">Uploading</span>,\n    fileName = <span class=\"str\">\"GCash_File.png\"</span>,\n    progress = <span class=\"kw\">0.2f</span>\n)\n\n<span class=\"cmt\">// Uploaded with thumbnail (Figma Slot)</span>\n<span class=\"typ\">EBUploadFile</span>(\n    state = <span class=\"typ\">EBUploadState</span>.<span class=\"prp\">Uploaded</span>,\n    fileName = <span class=\"str\">\"ID_proof.jpg\"</span>,\n    onRemove = { /* ... */ }\n) {\n    <span class=\"typ\">AsyncImage</span>(\n        model = imageUrl,\n        contentDescription = null,\n        modifier = <span class=\"typ\">Modifier</span>.<span class=\"fn\">clip</span>(<span class=\"typ\">RoundedCornerShape</span>(<span class=\"kw\">4</span>.dp))\n    )\n}\n\n<span class=\"cmt\">// Error</span>\n<span class=\"typ\">EBUploadFile</span>(\n    state = <span class=\"typ\">EBUploadState</span>.<span class=\"prp\">Error</span>,\n    label = <span class=\"str\">\"Upload receipt\"</span>,\n    errorMessage = <span class=\"str\">\"Maximum file size: 20MB\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code> when empty; announce as \"Upload\" when actionable",
        "android": "<code>Role.Button</code> in semantics"
      },
      {
        "requirement": "File picked announcement",
        "ios": "Announce file name after selection via <code>.accessibilityAnnouncement</code>",
        "android": "<code>AccessibilityManager.announce()</code>"
      },
      {
        "requirement": "Progress announcement",
        "ios": "<code>.accessibilityValue(\"\\(Int(progress * 100)) percent\")</code>",
        "android": "<code>stateDescription = \"$percent percent\"</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "Include error message in accessibility label; use <code>.isRejected</code> trait",
        "android": "<code>semantics { error(...) }</code>"
      },
      {
        "requirement": "Remove button",
        "ios": "Separate accessibility element: <code>.accessibilityLabel(\"Remove \\(fileName)\")</code>",
        "android": "<code>contentDescription = \"Remove $fileName\"</code>"
      },
      {
        "requirement": "Tap target",
        "ios": "72px height &gt; 44pt minimum",
        "android": "&gt; 48dp minimum"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the thumbnail slot for image uploads (ID photos, receipts) so users can verify the correct file was picked.",
        "dontText": "Show a generic thumbnail placeholder as the final state — either show the real thumbnail or use the plain uploaded state with just the filename."
      },
      {
        "doText": "Always pair the default state with subtext listing accepted formats and size limits so users don't discover constraints only via error state.",
        "dontText": "Let users attempt uploads silently only to show an error — preempt format / size violations on the client side."
      },
      {
        "doText": "Use the error state for client-side validation failures (size, format). Show a specific error message indicating what needs to change.",
        "dontText": "Use the error state for network failures during upload — those are transient. Show a toast or retry affordance instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic: <code>input-field</code>, <code>Attach</code>, <code>Trash</code>, <code>Icon Placeholder</code>, <code>upload-file-progress</code>, <code>Subtext Message</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>hasLabel</code> yes/no, <code>state</code> has \"Upload error\" with space, <code>\"Uploaded with thumbnail\"</code> is orthogonal."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Library-wide <code>boder</code> token typo. Thumbnail bg hardcoded."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to PhotosPicker / DocumentPicker (iOS), GetContent / PickVisualMedia (Android)."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No disabled, pressed, or focused states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Thumbnail is a placeholder; Lottie dependency needs documentation."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2 cleanup."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 10,
      "description": "5 <code>state</code> × 2 <code>hasLabel</code> = <strong>10 variants</strong>. Clean matrix — every combination exists.",
      "columns": [
        "State",
        "hasLabel",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Default</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Uploading</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Uploaded</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Upload error</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Uploaded with thumbnail</strong>",
            "yes + no",
            "2"
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
      "header": "Initial Assessment · node 18482:35064",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 10 variants (5 state × 2 hasLabel). Lottie progress bar, thumbnail placeholder. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Property naming issues</strong> — <code>hasLabel=yes/no</code>, <code>state=\"Upload error\"</code> has a space, <code>\"Uploaded with thumbnail\"</code> is orthogonal to the state axis. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Token typo</strong> — All border tokens spelled <code>boder</code>. Library-level rename needed. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Thumbnail bg hardcoded</strong> — <code>#0057E4 @ 5%</code> not tokenized. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Missing states</strong> — No disabled, pressed, or focused. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Thumbnail placeholder + Lottie dependency</strong> — Thumbnail is not a slot; Lottie requires asset bundling. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
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
