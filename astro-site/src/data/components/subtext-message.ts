import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/subtext-message.js`.
const subtextMessageDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Status',
        prop: 'status',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'success', label: 'Success' },
          { value: 'error', label: 'Error' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'small',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'default', label: 'Default' },
        ],
      },
      {
        label: 'hasLeadingIcon',
        prop: 'hasLeadingIcon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingLabel',
        prop: 'hasTrailingLabel',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
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
        "cardKey": "stm-spec-main",
        "demoKey": "main",
        "title": "Subtext Message",
        "node": "26715:17362",
        "description": "",
        "previewHtml": "<div id=\"subtext-message-spec-main\" class=\"spec-preview-body\"><svg width=\"378\" height=\"44\" viewBox=\"0 0 189 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(2,5)\"><path d=\"M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM11.4238 6.07617C11.1895 5.84186 10.8095 5.84186 10.5752 6.07617L6.99902 9.65137L5.42383 8.07617C5.18952 7.84187 4.81049 7.84188 4.57617 8.07617C4.34187 8.31048 4.34188 8.68951 4.57617 8.92383L6.5752 10.9238C6.68772 11.0364 6.84086 11.0996 7 11.0996C7.15905 11.0996 7.31136 11.0363 7.42383 10.9238L11.4238 6.92383C11.658 6.68954 11.658 6.31046 11.4238 6.07617Z\" fill=\"#7E96BE\"/></g><text class=\"stm-text\" x=\"22\" y=\"13\" font-size=\"10\" fill=\"#6780A9\" dominant-baseline=\"central\">Message content</text></svg></div>",
        "demoControls": subtextMessageDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "Default",
                "prop": "status"
              },
              {
                "key": "Size",
                "value": "Small",
                "prop": "size"
              },
              {
                "key": "hasLeadingIcon",
                "value": "True",
                "prop": "hasLeadingIcon"
              },
              {
                "key": "Icon (slot)",
                "value": "Checkmark (Circular) · 26715:17365",
                "mono": true
              },
              {
                "key": "hasTrailingLabel",
                "value": "False",
                "prop": "hasTrailingLabel"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Icon",
                "value": "#7E96BE",
                "token": "main/subtext-message/default/icon",
                "variants": {
                  "hasLeadingIcon:false": {
                    "hide": true
                  },
                  "status:success": {
                    "value": "#12AF80"
                  },
                  "status:error": {
                    "value": "#D61B2C"
                  },
                  "status:disabled": {
                    "value": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Message",
                "value": "#6780A9",
                "token": "main/subtext-message/default/label",
                "variants": {
                  "status:success": {
                    "value": "#048570"
                  },
                  "status:error": {
                    "value": "#D61B2C"
                  },
                  "status:disabled": {
                    "value": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Trailing label",
                "value": "#6780A9",
                "token": "main/subtext-message/default/label",
                "variants": {
                  "hasTrailingLabel:false": {
                    "hide": true
                  },
                  "status:success": {
                    "value": "#048570"
                  },
                  "status:error": {
                    "value": "#D61B2C"
                  },
                  "status:disabled": {
                    "value": "#C2CFE5"
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Message",
                "value": "Secondary/Bold/Small Caption",
                "mono": true,
                "variants": {
                  "size:default": {
                    "value": "Secondary/Bold/Caption"
                  }
                }
              },
              {
                "key": "Trailing label",
                "value": "Secondary/Bold/Small Caption",
                "mono": true,
                "variants": {
                  "hasTrailingLabel:false": {
                    "hide": true
                  },
                  "size:default": {
                    "value": "Secondary/Bold/Caption"
                  }
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
                "value": "22px",
                "mono": true
              },
              {
                "key": "Width",
                "value": "Hug · 189px at the sample content",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "2px left · 0 right — derived from bounding boxes",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "5px top · 1px bottom — derived; the 16px icon is not centred in the 22px box",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "4px",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "16 × 16 frame · 12 × 12 glyph",
                "mono": true,
                "variants": {
                  "hasLeadingIcon:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Top — derived; auto-layout alignment is not exposed",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Message content\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebStatus<span class=\"syn-punc\">(.</span>default<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>controlSize<span class=\"syn-punc\">(.</span>small<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebLeadingIcon<span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"checkmark-circular\"</span><span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBSubtextMessage</span><span class=\"syn-punc\">(</span>\n    message <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Message content\"</span><span class=\"syn-punc\">,</span>\n    status <span class=\"syn-eq\">=</span> EBSubtextStatus<span class=\"syn-punc\">.</span>Default<span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> EBSubtextSize<span class=\"syn-punc\">.</span>Small<span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>EBIcons<span class=\"syn-punc\">.</span>CheckmarkCircular<span class=\"syn-punc\">,</span> null<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Status",
        "description": "Read off <code>get_node_info</code> on each variant of set <code>26715:17362</code>. <strong>Default and Success paint the icon a different colour from the text; Error and Disabled use one colour for both.</strong> Token paths are carried over from the previous record only where the hex still agrees; a <code>—</code> means the binding could not be read — the Talk To Figma plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "Icon",
            "values": [
              "—",
              "#7E96BE"
            ]
          },
          {
            "role": "—",
            "token": "Message + Trailing label",
            "values": [
              "main/subtext-message/primary/label",
              "#6780A9"
            ]
          },
          {
            "role": "Success",
            "token": "Icon",
            "values": [
              "main/subtext-message/success/icon",
              "#12AF80"
            ]
          },
          {
            "role": "—",
            "token": "Message + Trailing label",
            "values": [
              "main/subtext-message/success/label",
              "#048570"
            ]
          },
          {
            "role": "Error",
            "token": "Icon",
            "values": [
              "main/subtext-message/error/icon",
              "#D61B2C"
            ]
          },
          {
            "role": "—",
            "token": "Message + Trailing label",
            "values": [
              "main/subtext-message/error/label",
              "#D61B2C"
            ]
          },
          {
            "role": "Disabled",
            "token": "Icon",
            "values": [
              "—",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "Message + Trailing label",
            "values": [
              "—",
              "#C2CFE5"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:2.1.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Read off the property panel of set <code>26715:17362</code>. <code>Icon</code> is an instance swap — a slot — so it is absent from the Style tab’s demo panel but mapped here.",
      "rows": [
        {
          "figma": "Status — Default, Success, Error, Disabled",
          "swift": "<code>.ebStatus(.default / .success / .error / .disabled)</code>",
          "compose": "<code>status = EBSubtextStatus.Default / Success / Error / Disabled</code>"
        },
        {
          "figma": "Size — Small, Default",
          "swift": "<code>.controlSize(.small / .regular)</code>",
          "compose": "<code>size = EBSubtextSize.Small / Default</code>"
        },
        {
          "figma": "hasLeadingIcon — true, false",
          "swift": "<code>leadingIcon: Image?</code> — omit to hide",
          "compose": "<code>leadingIcon: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "Icon (slot) — defaults to Checkmark (Circular) on every variant",
          "swift": "<code>.ebLeadingIcon(Image(\"checkmark-circular\"))</code>",
          "compose": "<code>leadingIcon = { Icon(EBIcons.CheckmarkCircular, null) }</code>"
        },
        {
          "figma": "hasTrailingLabel — true, false",
          "swift": "<code>trailingLabel: String?</code> — omit to hide",
          "compose": "<code>trailingLabel: String? = null</code>"
        },
        {
          "figma": "— no Figma property (the message text)",
          "swift": "<code>EBSubtextMessage(\"Message content\")</code>",
          "compose": "<code>message = \"Message content\"</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBSubtextMessage.swift",
        "compose": "android/components/form/EBSubtextMessage.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBSubtextMessage</span>(<span class=\"str\">\"Message content\"</span>)\n    .<span class=\"fn\">ebStatus</span>(.<span class=\"prp\">default</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">small</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"checkmark-circular\"</span>))",
        "compose": "<span class=\"typ\">EBSubtextMessage</span>(\n    message = <span class=\"str\">\"Message content\"</span>,\n    status = <span class=\"typ\">EBSubtextStatus</span>.<span class=\"prp\">Default</span>,\n    size = <span class=\"typ\">EBSubtextSize</span>.<span class=\"prp\">Small</span>,\n    leadingIcon = { <span class=\"typ\">Icon</span>(EBIcons.CheckmarkCircular, null) }\n)"
      },
      {
        "subheading": "Success",
        "swift": "<span class=\"typ\">EBSubtextMessage</span>(<span class=\"str\">\"Message content\"</span>)\n    .<span class=\"fn\">ebStatus</span>(.<span class=\"prp\">success</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">small</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"checkmark-circular\"</span>))",
        "compose": "<span class=\"typ\">EBSubtextMessage</span>(\n    message = <span class=\"str\">\"Message content\"</span>,\n    status = <span class=\"typ\">EBSubtextStatus</span>.<span class=\"prp\">Success</span>,\n    size = <span class=\"typ\">EBSubtextSize</span>.<span class=\"prp\">Small</span>,\n    leadingIcon = { <span class=\"typ\">Icon</span>(EBIcons.CheckmarkCircular, null) }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBSubtextMessage</span>(<span class=\"str\">\"Message content\"</span>)\n    .<span class=\"fn\">ebStatus</span>(.<span class=\"prp\">error</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">small</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"checkmark-circular\"</span>))",
        "compose": "<span class=\"typ\">EBSubtextMessage</span>(\n    message = <span class=\"str\">\"Message content\"</span>,\n    status = <span class=\"typ\">EBSubtextStatus</span>.<span class=\"prp\">Error</span>,\n    size = <span class=\"typ\">EBSubtextSize</span>.<span class=\"prp\">Small</span>,\n    leadingIcon = { <span class=\"typ\">Icon</span>(EBIcons.CheckmarkCircular, null) }\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBSubtextMessage</span>(<span class=\"str\">\"Message content\"</span>)\n    .<span class=\"fn\">ebStatus</span>(.<span class=\"prp\">disabled</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">small</span>)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"checkmark-circular\"</span>))\n    .<span class=\"fn\">ebTrailingLabel</span>(<span class=\"str\">\"Label\"</span>)",
        "compose": "<span class=\"typ\">EBSubtextMessage</span>(\n    message = <span class=\"str\">\"Message content\"</span>,\n    status = <span class=\"typ\">EBSubtextStatus</span>.<span class=\"prp\">Disabled</span>,\n    size = <span class=\"typ\">EBSubtextSize</span>.<span class=\"prp\">Small</span>,\n    leadingIcon = { <span class=\"typ\">Icon</span>(EBIcons.CheckmarkCircular, null) },\n    trailingLabel = <span class=\"str\">\"Label\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role and semantics",
        "ios": "Not a control — expose as static text. Attach it to the field with <code>.accessibilityValue</code> so VoiceOver reads it with the field.",
        "android": "Static text. Put it in the field’s <code>supportingText</code> slot so TalkBack reads them together."
      },
      {
        "requirement": "Error announcement",
        "ios": "On <code>Status=Error</code>, set the field’s <code>.accessibilityValue</code> to the message — don’t rely on a separate live region.",
        "android": "Use <code>semantics { error(msg) }</code> on the field, not a standalone live region."
      },
      {
        "requirement": "Icon is decorative",
        "ios": "Mark the leading icon <code>.accessibilityHidden(true)</code> — the text carries the meaning.",
        "android": "Icon <code>contentDescription = null</code>; semantics go on the text."
      },
      {
        "requirement": "Colour is not the only cue",
        "ios": "Status is carried by colour alone today — the same checkmark ships on all four. Until per-status glyphs land, the message text must state the condition.",
        "android": "Same. Don’t let the icon be the error signal; write the condition into the message string."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Caption type must scale with Dynamic Type. Don’t hard-lock the font size.",
        "android": "Use <code>sp</code> units and respect <code>fontScale</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Disabled is <code>#C2CFE5</code> on white — roughly 1.6:1. Treat it as decorative and never the only copy on screen.",
        "android": "Same value, same caveat — pair a disabled field with its own accessible description."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Put the message in the parent field’s <code>supportingText</code> slot so validation state and message stay colocated.",
        "dontText": "Don’t render it as a separate sibling under a field — the field can’t coordinate its <code>Disabled</code> or error state with an external peer."
      },
      {
        "doText": "Match <code>Size</code> to the field it sits under — <code>Small</code> (10 / 15) for dense forms, <code>Default</code> (12 / 18) otherwise.",
        "dontText": "Don’t expect <code>Size</code> to change the height. Both sizes are 22px tall with the same 16px icon; only the type scale moves."
      },
      {
        "doText": "Write the condition into the message — \"Enter 11 digits, starting with 09\". Use <code>Default</code> for ambient hints and <code>Success</code> for meaningful post-validation confirmation.",
        "dontText": "Don’t rely on the icon to say which status this is. All four statuses ship the same <code>Checkmark (Circular)</code> glyph, recoloured."
      },
      {
        "doText": "Turn <code>hasTrailingLabel</code> on for a right-aligned counter or unit that belongs with the message — it shares the message’s colour and type style.",
        "dontText": "Don’t put a second sentence in the trailing label. It is right-aligned in the same 22px row and will collide with a long message."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic throughout — <code>leading-icon</code> wraps the swap, <code>content</code> holds <code>#message</code> and <code>#label</code>. The <code>shape_full</code> BOOLEAN_OPERATION lives inside the shared icon component and is owned by the iconography team (v2.0)."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "PascalCase variant properties, booleans on the <code>has</code> prefix with lowercase values. The misnamed <code>leadingLabel</code> that rendered trailing is gone (v2.0), and <code>Size=Base</code> became <code>Size=Default</code> (v2.1)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Two statuses paint the icon a different colour from the text — Default is <code>#7E96BE</code> icon on <code>#6780A9</code> text, Success is <code>#12AF80</code> on <code>#048570</code> — while Error and Disabled use one value for both. Either the split is deliberate and needs two tokens per status, or it is drift. Bindings themselves cannot be read with the Talk To Figma plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A text row with an optional leading icon and an optional trailing label — maps directly to a field’s <code>supportingText</code> slot on both platforms, and stands alone where no field owns it."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Not an interactive control, so there is no pressed or focused state to cover. <code>Status=Disabled</code> was added at both sizes in v2.0, so a disabled parent field now has a matching subtext."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The glyph is a proper vector instance, but <strong>all four statuses default the <code>Icon</code> swap to <code>Checkmark (Circular)</code></strong> — confirmed on <code>export_node_as_image</code>, where Error renders a red checkmark. The swap already exists; the per-variant defaults are what need setting."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Unblocked by the v2.0 rebuild — the anatomy, naming and state gaps that blocked it are resolved. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "4 <code>Status</code> × 2 <code>Size</code> = 8 variants, all built. <code>hasLeadingIcon</code>, <code>hasTrailingLabel</code> and the <code>Icon</code> swap are instance-level and add no variants. Both sizes are 189 × 22 with the same 16px icon — only the type scale changes.",
      "columns": [
        "Status",
        "Size",
        "Node ID",
        "Icon fill",
        "Text fill"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Small",
            "<code>26715:17363</code>",
            "#7E96BE",
            "#6780A9"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "<code>26715:17369</code>",
            "#7E96BE",
            "#6780A9"
          ]
        },
        {
          "cells": [
            "Success",
            "Small",
            "<code>26715:17375</code>",
            "#12AF80",
            "#048570"
          ]
        },
        {
          "cells": [
            "Success",
            "Default",
            "<code>26715:17381</code>",
            "#12AF80",
            "#048570"
          ]
        },
        {
          "cells": [
            "Error",
            "Small",
            "<code>26715:17387</code>",
            "#D61B2C",
            "#D61B2C"
          ]
        },
        {
          "cells": [
            "Error",
            "Default",
            "<code>26715:17393</code>",
            "#D61B2C",
            "#D61B2C"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Small",
            "<code>26715:17399</code>",
            "#C2CFE5",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Default",
            "<code>26715:17405</code>",
            "#C2CFE5",
            "#C2CFE5"
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
      "header": "Style + Code tabs rebuilt against the live component · node 26715:17362",
      "rows": [
        {
          "body": "<strong>Both tabs were documenting a retired node.</strong> The record pointed at <code>4091:13864</code> with variants on <code>11855:*</code>; the live set is <code>26715:17362</code>. Every value below is re-read from it.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Three cards on a retired <code>Variant</code> axis (<code>Primary (helper)</code> / <code>Success</code> / <code>Error</code>) became one card carrying <code>Status</code> · <code>Size</code> · <code>hasLeadingIcon</code> · <code>hasTrailingLabel</code>. <code>Icon</code> is an instance swap, so it is a static Properties row rather than a control.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Disabled was missing from the Style tab entirely.</strong> It was added to the component in v2.0 but never documented — the tab still showed three statuses against the component’s four.",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Variants Inventory rebuilt.</strong> Was 6 rows on the retired <code>11855:*</code> nodes with a <code>Size=Base</code> that v2.1 renamed. Now 8 rows on <code>26715:17363</code>–<code>26715:17405</code>, each carrying its verified icon and text fills.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Property Mapping rewritten against the current schema.</strong> It mapped <code>Variant = Primary/Success/Error</code>, <code>Size = Base / Small</code>, and the retired <code>leadingLabel</code> / <code>trailingIcon</code> booleans — one row per value in <code>Prop = Value</code> form. Now one prose row per property in panel order, with the <code>Icon</code> slot mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard contradicted the v2.0 record on five criteria.</strong> C1 still cited generic <code>container</code> / <code>content</code> layers, C2 the misnamed <code>leadingLabel</code>, C4 the standalone-versus-slot question, C5 the missing Disabled variant, C6 flattened non-vector icons — all resolved in v2.0 and recorded as such on the Overview tab. Rescored C1, C2, C4 and C5 Ready.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code Connect table emptied.</strong> Four rows restated blockers the rebuild removed. C7 stays Not Mapped — the native library does not exist — and its note now says so instead of citing C1 / C2 / C4 / C6.",
          "delta": {
            "kind": "resolved",
            "label": "C7 Open"
          }
        },
        {
          "body": "<strong>Install version corrected.</strong> The Gradle block read <code>com.eastblue.ds:form-elements:1.0.0</code> against a record already at v2.1.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography rows resolved to style names.</strong> <code>Secondary/Bold/Small Caption</code> at Small and <code>Secondary/Bold/Caption</code> at Default, both <code>matched</code>. The banned <code>Label font</code> row (<code>BarkAda Semibold · 12 / 18</code>) is gone.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>All four statuses ship the same icon.</strong> Every variant defaults the <code>Icon</code> swap to <code>Checkmark (Circular)</code>, so <code>Status=Error</code> renders a red checkmark — confirmed on <code>export_node_as_image</code>. This contradicts the v2.0 resolved note claiming the glyph changes per status. Logged against C6; the swap exists, the per-variant defaults do not.",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Two statuses paint the icon a different colour from the text.</strong> Default is <code>#7E96BE</code> icon on <code>#6780A9</code> text and Success is <code>#12AF80</code> on <code>#048570</code>, while Error and Disabled use one value for both. Either two tokens per status are intended, or this is drift.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>The leading icon is not vertically centred.</strong> The 16px frame sits 5px from the top and 1px from the bottom of the 22px row, at both sizes.",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>v2.0.0 and v2.1.0 have no changelog entries.</strong> The Overview tab records eight resolutions under those versions — the rebuild, the <code>leadingLabel</code> removal, <code>Status=Disabled</code>, the layer renames, and <code>Size=Base</code> → <code>Size=Default</code> — but the changelog jumps from 1.0.0 to here. The entries need writing; their dates are not recorded anywhere I can read, so they are not invented here.",
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
