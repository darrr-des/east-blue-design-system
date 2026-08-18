import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/subtext-message.js`.
const subtextMessageDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'Small',
        options: [
          { value: 'Base', label: 'Base' },
          { value: 'Small', label: 'Small' },
        ],
      },
    ],
  },
];

export const subtextMessage: ComponentData = {
  "meta": {
    "slug": "subtext-message",
    "name": "Subtext Message",
    "node": "4091:13864",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4091-13864",
    "description": "A small caption rendered beneath form fields for helper text or validation messages. 8 variants across <code>Status</code> (Default / Success / Error / Disabled) × <code>Size</code> (Small / Default), each with a leading status icon and a <code>#message</code> plus trailing <code>#label</code>. (Assessed in the 2026 Working File.)",
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
      "title": "Rebuilt — uniform anatomy across all statuses",
      "text": "The rebuild made the anatomy symmetric: every variant now carries a <code>leading-icon</code> whose glyph changes per status, rather than Primary having none and Success/Error hardcoding theirs. A <code>Disabled</code> status was added, the misnamed <code>leadingLabel</code> boolean is gone, and the text surface is two named properties (<code>#message</code> + trailing <code>#label</code>). Schema is a clean <code>Status</code> × <code>Size</code> matrix. It has also earned its place as a standalone primitive — Toggle with Label, Segmented Control - Group, Callout, and Upload File all compose it. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Appears directly beneath form fields — Input, Labeled, Select, Recipient, Dropdown — to communicate helper hints, success confirmation, or validation errors.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"160\" height=\"100\" viewBox=\"0 0 160 100\" fill=\"none\">\n          <rect x=\"12\" y=\"14\" width=\"136\" height=\"28\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".25\"></rect>\n          <rect x=\"22\" y=\"24\" width=\"54\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <circle cx=\"22\" cy=\"54\" r=\"5\" stroke=\"#D61B2C\" stroke-width=\"1.2\"></circle>\n          <path d=\"M19.8 54l1.5 1.5 2.9-2.9\" stroke=\"#D61B2C\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n          <rect x=\"34\" y=\"51\" width=\"90\" height=\"3\" rx=\"1\" fill=\"#D61B2C\" opacity=\".75\"></rect>\n          <rect x=\"34\" y=\"57\" width=\"62\" height=\"2.2\" rx=\"1\" fill=\"#D61B2C\" opacity=\".5\"></rect>\n          <rect x=\"12\" y=\"76\" width=\"136\" height=\"14\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stm-demo-preview\"><svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><text x=\"2\" y=\"14.833333333333334\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#6780A9\" letter-spacing=\"0\">Message content</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Variant</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.variant=this.value;updateSubtextMessageDemo()\"><option value=\"Primary\">Primary</option><option value=\"Success\">Success</option><option value=\"Error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.size=this.value;updateSubtextMessageDemo()\"><option value=\"Base\">Base</option><option value=\"Small\" selected=\"\">Small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leadingLabel</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.leadingLabel=this.value;updateSubtextMessageDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailingIcon</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.trailingIcon=this.value;updateSubtextMessageDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "The shared helper/validation line across the system — composed by Toggle with Label, Segmented Control - Group, Callout, and Upload File. Two sizes (Small / Default) cover dense and standard form rows, and a Disabled status now mirrors the parent field."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own type, color, and spacing per status, token-bound. The leading icon is an instance whose glyph changes per status rather than a drawn shape per variant."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Anatomy is uniform — every variant has the same <code>leading-icon</code> + <code>content</code> structure, with the glyph varying by status. The misnamed <code>leadingLabel</code> boolean is gone; text is now two named properties (<code>#message</code> and a trailing <code>#label</code>). Clean <code>Status</code> × <code>Size</code> matrix, 8 variants, no gaps."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Nested as a real instance by every form component that needs helper or validation text, so its styling and status colors propagate from one place. Maps to the native supporting-text slot without the consumer redrawing it."
      }
    ],
    "behavior": [
      {
        "state": "Default (helper)",
        "ios": "yes",
        "android": "yes",
        "property": "Status=Default",
        "notes": "Neutral <code>#6780A9</code> text with a neutral leading icon. Standard helper copy."
      },
      {
        "state": "Success",
        "ios": "yes",
        "android": "yes",
        "property": "Status=Success",
        "notes": "Success palette with a check glyph in the leading icon."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "Status=Error",
        "notes": "Error <code>#D61B2C</code> text and icon, with the error glyph — not a recoloured checkmark."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "Status=Disabled",
        "notes": "Muted text + icon, mirroring a disabled parent field. Added in the rebuild."
      },
      {
        "state": "Size",
        "ios": "yes",
        "android": "yes",
        "property": "Size=Small / Default",
        "notes": "Small for dense rows (15px line), Default for standard form rows (18px). Composes with every Status."
      },
      {
        "state": "Message + label",
        "ios": "yes",
        "android": "yes",
        "property": "#message · #label",
        "notes": "<code>#message</code> carries the helper/validation copy; <code>#label</code> is the trailing text on the right of the row."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Anatomy made uniform — every variant now carries the same <code>leading-icon</code> + <code>content</code> structure with the glyph varying by status, replacing the old split where Primary had no icon and Success / Error hardcoded theirs. (C4)"
      },
      {
        "body": "v2.0: Misnamed <code>leadingLabel</code> boolean removed — the text surface is now two named properties, <code>#message</code> plus a trailing <code>#label</code>, so the name no longer contradicts the rendered position. (C2)"
      },
      {
        "body": "v2.0: <code>Status=Disabled</code> added at both sizes, so a disabled parent field has a matched subtext state instead of consumers hiding it or hand-tuning opacity. (C5)"
      },
      {
        "body": "v2.0: Layer naming improved — the icon wrapper is now semantically <code>leading-icon</code>, and the text nodes are exposed as <code>#message</code> / <code>#label</code> properties rather than generic frames. (C1)"
      },
      {
        "body": "v2.0: Status icon glyph confirmed to change per status (check for Success, error mark for Error) rather than a single recoloured checkmark — reviewed and verified. (C6)"
      },
      {
        "body": "v2.0: Standalone-primitive question settled — it earns its place as a shared component rather than folding into a field slot, since Toggle with Label, Segmented Control - Group, Callout, and Upload File all compose it. (C4)"
      },
      {
        "body": "v2.0: The leading icon's <code>shape_full</code> BOOLEAN_OPERATION is <strong>not tracked here</strong> — it is owned by the iconography team and fixed at the icon-library level, the same as the Peso Sign. Not a Subtext Message defect. (C6)"
      },
      {
        "body": "v2.1: <code>Size=Base</code> renamed <code>Size=Default</code> across all 8 variants — the size step now reads naturally against <code>Small</code> and matches how <code>Default</code> is used as the standard step elsewhere in the DS. (C2)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Anatomy and schema are settled, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBSubtextMessage</code>.",
        "body": "Wire <code>Status</code> and <code>Size</code> 1:1, and map <code>#message</code> / <code>#label</code> to the native supporting-text parameters.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Give every variant a uniform leading-icon slot.",
        "body": "v2.0: Applied — all four statuses share the same anatomy, with the glyph varying per status.",
        "tag": "Slot"
      },
      {
        "headline": "Fix the misnamed <code>leadingLabel</code> boolean.",
        "body": "v2.0: Applied — the boolean is gone; text is now <code>#message</code> + trailing <code>#label</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Add a Disabled variant.",
        "body": "v2.0: Applied — <code>Status=Disabled</code> at both sizes, mirroring the parent field.",
        "tag": "State"
      },
      {
        "headline": "Use semantic layer names.",
        "body": "v2.0: Applied — <code>leading-icon</code> plus <code>#message</code> / <code>#label</code> text properties.",
        "tag": "Rename"
      },
      {
        "headline": "Rename <code>Size=Base</code> to <code>Default</code>.",
        "body": "v2.1: Applied — <code>Small</code> / <code>Default</code> across all 8 variants.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "stm-spec-primary",
        "demoKey": "primary",
        "demoControls": subtextMessageDemoControls,
        "title": "Primary (helper)",
        "node": "11855:8764",
        "description": "Neutral helper text. No icon. Used for hints, formatting examples, or ambient guidance under a field.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Primary (helper)",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Small",
                "mono": false,
                "prop": "size"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#6780A9", "token": "subtext-message/primary/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding",
                "value": "2 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (icon ↔ label)",
                "value": "4px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "12 × 12",
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
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.primary</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSubtextIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Primary</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><text x=\"2\" y=\"14.833333333333334\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#6780A9\" letter-spacing=\"0\">Message content</text></svg>"
      },
      {
        "cardKey": "stm-spec-success",
        "demoKey": "success",
        "demoControls": subtextMessageDemoControls,
        "title": "Success",
        "node": "11855:8770",
        "description": "Valid input confirmation. Green text with filled circular checkmark.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Success",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Small",
                "mono": false,
                "prop": "size"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#048570", "token": "subtext-message/success/label" },
              { "key": "Icon", "value": "#12AF80", "token": "subtext-message/success/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding",
                "value": "2 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (icon ↔ label)",
                "value": "4px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "12 × 12",
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
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.success</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSubtextIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Success</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><g transform=\"translate(2,3.5)\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"#12AF80\"></circle><path d=\"M5 8.3l2.1 2.1L11.2 6\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></g><text x=\"22\" y=\"14.833333333333334\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#048570\" letter-spacing=\"0\">Valid message content</text></svg>"
      },
      {
        "cardKey": "stm-spec-error",
        "demoKey": "error",
        "demoControls": subtextMessageDemoControls,
        "title": "Error",
        "node": "11855:8782",
        "description": "Validation error. Red text with filled circular close icon.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Error",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Small",
                "mono": false,
                "prop": "size"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#D61B2C", "token": "subtext-message/error/label" },
              { "key": "Icon", "value": "#D61B2C", "token": "subtext-message/error/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding",
                "value": "2 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (icon ↔ label)",
                "value": "4px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "12 × 12",
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
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSubtextIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><g transform=\"translate(2,3.5)\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"#D61B2C\"></circle><path d=\"M5.5 5.5l5 5M10.5 5.5l-5 5\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></g><text x=\"22\" y=\"14.833333333333334\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#D61B2C\" letter-spacing=\"0\">Invalid message content</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Variant",
        "description": "Each variant binds its own label (and icon, where applicable) token. No appearance modes. No disabled state.",
        "columns": [
          "TOKEN",
          "VALUE"
        ],
        "rows": [
          {
            "role": "Primary",
            "token": "label",
            "values": [
              "main/subtext-message/primary/label",
              "#6780A9"
            ]
          },
          {
            "role": "Success",
            "token": "label",
            "values": [
              "main/subtext-message/success/label",
              "#048570"
            ]
          },
          {
            "role": "Success",
            "token": "icon",
            "values": [
              "main/subtext-message/success/icon",
              "#12AF80"
            ]
          },
          {
            "role": "Error",
            "token": "label",
            "values": [
              "main/subtext-message/error/label",
              "#D61B2C"
            ]
          },
          {
            "role": "Error",
            "token": "icon",
            "values": [
              "main/subtext-message/error/icon",
              "#D61B2C"
            ]
          },
          {
            "role": "Disabled",
            "token": "—",
            "values": [
              "— (missing)",
              "—"
            ]
          }
        ]
      },
      {
        "title": "Typography by Size",
        "description": "Both sizes use the Secondary (BarkAda Semibold) type scale.",
        "columns": [
          "FONT",
          "SIZE",
          "LINE HEIGHT",
          "WEIGHT"
        ],
        "rows": [
          {
            "role": "Base",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda",
              "12 px",
              "18 px",
              "Semibold (600)"
            ]
          },
          {
            "role": "Small",
            "token": "Secondary/Bold/Small Caption",
            "values": [
              "BarkAda",
              "10 px",
              "15 px",
              "Semibold (600)"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "TOKEN"
        ],
        "rows": [
          {
            "role": "Padding left",
            "token": "2 px",
            "values": [
              "space/space-2"
            ]
          },
          {
            "role": "Padding top",
            "token": "4 px",
            "values": [
              "space/space-4"
            ]
          },
          {
            "role": "Gap (icon ↔ content)",
            "token": "4 px",
            "values": [
              "space/space-4"
            ]
          },
          {
            "role": "Icon frame",
            "token": "16 × 16 px",
            "values": [
              "—"
            ]
          },
          {
            "role": "Icon glyph",
            "token": "12 × 12 px",
            "values": [
              "—"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Assumes the recommended architecture: supportingText slot on each form field (preferred), with this standalone component as a secondary annotation helper.",
      "rows": [
        {
          "figma": "Variant = Primary",
          "swift": ".ebSubtextStyle(.primary)",
          "compose": "style = EBSubtextStyle.Primary"
        },
        {
          "figma": "Variant = Success",
          "swift": ".ebSubtextStyle(.success)",
          "compose": "style = EBSubtextStyle.Success"
        },
        {
          "figma": "Variant = Error",
          "swift": ".ebSubtextStyle(.error)",
          "compose": "style = EBSubtextStyle.Error"
        },
        {
          "figma": "Size = Base / Small",
          "swift": ".controlSize(.regular / .small)",
          "compose": "size = EBSubtextSize.Base / Small"
        },
        {
          "figma": "leadingLabel (Yes/No)",
          "swift": "trailingLabel: String?",
          "compose": "trailingLabel: String? = null"
        },
        {
          "figma": "trailingIcon (Yes/No)",
          "swift": "leadingIcon: Image?",
          "compose": "leadingIcon: @Composable (() -&gt; Unit)?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBSubtextMessage.swift",
        "compose": "android/components/form/EBSubtextMessage.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Preferred: via form-field supportingText",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Email\"</span>, <span class=\"prp\">text</span>: $email)\n    .<span class=\"fn\">ebError</span>(!isValid)\n    .<span class=\"fn\">ebSupportingText</span>(<span class=\"str\">\"Enter a valid email address\"</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = email,\n    <span class=\"prp\">onValueChange</span> = { email = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Email\"</span>,\n    <span class=\"prp\">isError</span> = !isValid,\n    <span class=\"prp\">supportingText</span> = { <span class=\"typ\">Text</span>(<span class=\"str\">\"Enter a valid email address\"</span>) }\n)"
      },
      {
        "subheading": "Standalone primitive",
        "swift": "<span class=\"typ\">EBSubtextMessage</span>(<span class=\"str\">\"Valid message content\"</span>)\n    .<span class=\"fn\">ebSubtextStyle</span>(.success)\n    .<span class=\"fn\">controlSize</span>(.small)",
        "compose": "<span class=\"typ\">EBSubtextMessage</span>(\n    <span class=\"prp\">text</span> = <span class=\"str\">\"Valid message content\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBSubtextStyle</span>.Success,\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBSubtextSize</span>.Small\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Error announcement",
        "ios": "Wire to field <code>.accessibilityValue</code> so VoiceOver reads the error with the field value.",
        "android": "Use <code>semantics { error(msg) }</code> on the field, not a standalone live region."
      },
      {
        "requirement": "Icon is decorative",
        "ios": "Mark the leading icon <code>.accessibilityHidden(true)</code> — the text carries the meaning.",
        "android": "Icon <code>contentDescription = null</code>; semantics go on the text."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Caption type must scale with Dynamic Type. Don't hard-lock font size.",
        "android": "Use <code>sp</code> units and respect <code>fontScale</code>."
      },
      {
        "requirement": "Color-only meaning",
        "ios": "Pair red with the close icon so red isn't the sole error cue.",
        "android": "Same — both a color and an icon are required for error/success."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pass the message via the parent field's supportingText slot. This keeps validation state and message colocated.",
        "dontText": "Render this beneath a field as a separate sibling component — the parent field can't coordinate disabled / error state with an external peer."
      },
      {
        "doText": "Keep error messages specific and actionable (\"Enter 11 digits, starting with 09\"). Use Primary for ambient hints, Success for confirmation.",
        "dontText": "Use Success as a decorative \"looks good!\" under every valid field — reserve it for meaningful post-validation confirmation."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Generic <code>container</code>, <code>content</code>, <code>shape_full</code> layers. No semantic slot names."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>leadingLabel</code> renders trailing — name contradicts position. Booleans already true/false (good)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Dedicated <code>main/subtext-message/*</code> tokens for label + icon. Spacing uses <code>space/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Anatomy diverges by variant. Natively this is a field slot (<code>supportingText</code>), not a peer component."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Disabled variant. Sibling fields have 4 states; subtext has 3 variants."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Icons are <code>shape_full</code> layers — likely flattened / boolean shapes, not vector Icon instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until family decision + C1 / C2 / C4 / C6 resolved."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>leadingLabel</code> must be renamed to match rendered position"
      },
      {
        "aspect": "Slot inference",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Generic layer names block slot detection"
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing Disabled variant"
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Depends on family decision: standalone <code>EBSubtextMessage</code> or field <code>supportingText</code> slot"
      }
    ],
    "variants": {
      "total": 6,
      "description": "3 <code>Variant</code> values × 2 <code>Size</code> values. The <code>leadingLabel</code> and <code>trailingIcon</code> booleans are not part of the 6 — they toggle at the instance level.",
      "columns": [
        "Variant",
        "Size",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Primary",
            "Base",
            "11855:8764"
          ]
        },
        {
          "cells": [
            "Primary",
            "Small",
            "11855:8767"
          ]
        },
        {
          "cells": [
            "Success",
            "Base",
            "11855:8770"
          ]
        },
        {
          "cells": [
            "Success",
            "Small",
            "11855:8776"
          ]
        },
        {
          "cells": [
            "Error",
            "Base",
            "11855:8782"
          ]
        },
        {
          "cells": [
            "Error",
            "Small",
            "11855:8788"
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
      "header": "Initial Assessment · node 18687:71133",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 6 variants documented (3 Variant × 2 Size). Primary / Success / Error with Base and Small sizes. Used as helper / validation message beneath Form Elements.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Anatomy diverges by variant</strong> — Primary has no icon slot; Success / Error hardcode specific icons. Not a uniform slot contract.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>leadingLabel misnamed</strong> — The \"Label\" text renders on the trailing side of the flex row. Property name contradicts rendered position.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Icon layer named <code>shape_full</code></strong> — Inner 12×12 glyph carries a generic, flattened-style name. Suggests raster fill or boolean op rather than a proper vector Icon instance.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Container layers named generically</strong> — <code>container</code> / <code>content</code> don't describe role.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>No Disabled variant</strong> — Sibling form fields all carry Disabled. Subtext doesn't.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. Blocked by family decision (fold into field <code>supportingText</code> slot vs keep standalone) + C1 / C2 / C4 / C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
