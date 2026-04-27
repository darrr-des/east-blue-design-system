import type { ComponentData } from '../types';

export const subtextMessage: ComponentData = {
  "meta": {
    "slug": "subtext-message",
    "name": "Subtext Message",
    "node": "18687:71133",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18687-71133",
    "description": "A small caption rendered beneath form fields for helper text or validation messages.",
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
    "verdict": {
      "kind": "restructure",
      "title": "Restructure before native handoff",
      "text": "Asymmetric anatomy (Primary has no icon, Success/Error hardcode icons), misnamed <code>leadingLabel</code> boolean, generic <code>shape_full</code> icon layers, no disabled state. Decide: keep as standalone primitive or fold into form-field <code>supportingText</code> slot."
    }
  },
  "overview": {
    "inContextNote": "Appears directly beneath form fields — Input, Labeled, Select, Recipient, Dropdown — to communicate helper hints, success confirmation, or validation errors.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"160\" height=\"100\" viewBox=\"0 0 160 100\" fill=\"none\">\n          <rect x=\"12\" y=\"14\" width=\"136\" height=\"28\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".25\"></rect>\n          <rect x=\"22\" y=\"24\" width=\"54\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <circle cx=\"22\" cy=\"54\" r=\"5\" stroke=\"#D61B2C\" stroke-width=\"1.2\"></circle>\n          <path d=\"M19.8 54l1.5 1.5 2.9-2.9\" stroke=\"#D61B2C\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n          <rect x=\"34\" y=\"51\" width=\"90\" height=\"3\" rx=\"1\" fill=\"#D61B2C\" opacity=\".75\"></rect>\n          <rect x=\"34\" y=\"57\" width=\"62\" height=\"2.2\" rx=\"1\" fill=\"#D61B2C\" opacity=\".5\"></rect>\n          <rect x=\"12\" y=\"76\" width=\"136\" height=\"14\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stm-demo-preview\"><svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><text x=\"2\" y=\"14.833333333333334\" font-family=\"HeyMeow Rnd, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#6780A9\" letter-spacing=\"0\">Message content</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Variant</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.variant=this.value;updateSubtextMessageDemo()\"><option value=\"Primary\">Primary</option><option value=\"Success\">Success</option><option value=\"Error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.size=this.value;updateSubtextMessageDemo()\"><option value=\"Base\">Base</option><option value=\"Small\" selected=\"\">Small</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leadingLabel</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.leadingLabel=this.value;updateSubtextMessageDemo()\"><option value=\"true\">true</option><option value=\"false\" selected=\"\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailingIcon</span><select class=\"demo-panel-select\" onchange=\"_stmDemo.trailingIcon=this.value;updateSubtextMessageDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works under any form field. But it's only ever rendered beneath a field — in practice it's a field-composition concern, not a standalone primitive. No disabled variant to mirror field disabled state."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Carries own type, color, spacing, and icon per variant. However, Success / Error icons are drawn shapes named <code>shape_full</code> — not instance-swapped from the DS Icon library."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Anatomy diverges by variant — Primary has no icon slot, Success / Error hardcode icons. Boolean <code>leadingLabel</code> is misnamed (the Label text renders trailing in the flex row)."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Instance-placed under form fields today. Native equivalents (SwiftUI convention, Compose <code>supportingText</code>) treat this as a field slot, not a peer component — suggesting it should be folded in."
      }
    ],
    "behavior": [
      {
        "state": "Primary (helper)",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=Primary",
        "notes": "Neutral weaker text #6780A9. No icon."
      },
      {
        "state": "Success",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=Success",
        "notes": "Green text #048570, filled check icon #12AF80."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=Error",
        "notes": "Red text + icon #D61B2C."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "No disabled variant today. When parent field is disabled, there's no matched subtext state."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Anatomy diverges by variant.",
        "body": "Primary has no icon, Success / Error hardcode specific icons (Checkmark Circular / Close). The \"leading icon\" is not a uniform slot — it's an if-branch on Variant. Consumers can't override the Success / Error icon without detaching.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>leadingLabel</code> boolean is misnamed.",
        "body": "The \"Label\" text actually renders on the trailing side of the flex row (after the message content), not leading. Naming contradicts rendered position and will mislead SwiftUI / Compose param names downstream.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Icon layer named <code>shape_full</code>.",
        "body": "The inner 12×12 shape inside the Checkmark / Close containers carries a generic, flattened-style name. Suggests a raster image fill or BOOLEAN_OPERATION rather than a proper vector Icon instance swappable from the DS Icon library.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Container layers named generically.",
        "body": "Nested frames labeled <code>container</code> and <code>content</code> don't describe role — Code Connect slot inference relies on semantic names like <code>#leading-icon</code>, <code>#message</code>, <code>#label</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No Disabled variant.",
        "body": "When the parent field is disabled, the subtext has no paired state — consumers either hide it or rely on manual opacity adjustments. Every sibling form field carries a Disabled state; the subtext should too.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked behind C1 / C2 / C4 / C6. Also depends on the family-level decision below — whether this stays a standalone component or folds into the form-field <code>supportingText</code> slot.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Fold Subtext Message into each form field as a <code>supportingText</code> slot.",
        "body": "This is the native convention on both platforms — Material 3 <code>TextField</code> exposes <code>supportingText</code>, and SwiftUI pairs a <code>Text</code> under the field using the same validation state. Folding it in removes the C4 / C5 gaps (field already has Disabled + Error states) and lets consumers drive the message by passing <code>supportingText: String?</code> + deriving color from <code>isError</code>. The standalone component can stay as an annotation helper for designers but is no longer the canonical consumer integration path.",
        "tag": "Family"
      },
      {
        "headline": "Rename <code>leadingLabel</code> → <code>trailingLabel</code>.",
        "body": "The \"Label\" text renders at the end of the flex row — the property name must match rendered position so SwiftUI / Compose params don't surprise developers. If the intent is to actually make the Label leading, swap the layer order in Figma and keep the current name.",
        "tag": "Rename"
      },
      {
        "headline": "Normalize anatomy with a real leading-icon slot across all variants.",
        "body": "Rebuild so every variant shares the same structure: optional <code>#leading-icon</code> (Icon instance) → <code>#message</code> (text) → optional <code>#trailing-label</code> (Label text). Primary keeps icon = off by default; Success / Error default icon = on. This lets one <code>Variant</code> enum + one boolean icon slot + one boolean label slot cover all six variants uniformly.",
        "tag": "Property"
      },
      {
        "headline": "Replace <code>shape_full</code> with DS Icon library instances.",
        "body": "Swap the Success checkmark and Error close for <code>Icon=Checkmark Circular</code> and <code>Icon=Close</code> instance-swaps bound to <code>main/subtext-message/*/icon</code> tokens. Flattened boolean shapes can't be retinted, recolored, or resized cleanly and they block Code Connect 1:1 icon param mapping.",
        "tag": "Asset"
      },
      {
        "headline": "Add a Disabled variant.",
        "body": "Match the 4-state contract of every sibling form field (Default / Active / Error / Disabled). When the parent field is disabled, the subtext needs a paired muted color token (e.g. <code>main/subtext-message/disabled/label</code>).",
        "tag": "State"
      },
      {
        "headline": "Rename container layers.",
        "body": "<code>container</code> → <code>#leading-icon-slot</code>, <code>content</code> → <code>#content</code>, inner shape → <code>#icon-glyph</code>. Semantic names drive Code Connect slot inference.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "stm-spec-primary",
        "title": "Primary (helper)",
        "node": "11855:8764",
        "description": "Neutral helper text. No icon. Used for hints, formatting examples, or ambient guidance under a field.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Primary (helper)",
                "mono": false
              },
              {
                "key": "Intent",
                "value": "Primary",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "subtext-message/primary/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "previewHtml": "<svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><text x=\"2\" y=\"14.833333333333334\" font-family=\"HeyMeow Rnd, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#6780A9\" letter-spacing=\"0\">Message content</text></svg>"
      },
      {
        "cardKey": "stm-spec-success",
        "title": "Success",
        "node": "11855:8770",
        "description": "Valid input confirmation. Green text with filled circular checkmark.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Success",
                "mono": false
              },
              {
                "key": "Intent",
                "value": "Success",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Label",
                "value": "#048570",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "subtext-message/success/label",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#12AF80",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "subtext-message/success/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "previewHtml": "<svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><g transform=\"translate(2,3.5)\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"#12AF80\"></circle><path d=\"M5 8.3l2.1 2.1L11.2 6\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></g><text x=\"22\" y=\"14.833333333333334\" font-family=\"HeyMeow Rnd, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#048570\" letter-spacing=\"0\">Valid message content</text></svg>"
      },
      {
        "cardKey": "stm-spec-error",
        "title": "Error",
        "node": "11855:8782",
        "description": "Validation error. Red text with filled circular close icon.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Error",
                "mono": false
              },
              {
                "key": "Intent",
                "value": "Error",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Label",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "subtext-message/error/label",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "subtext-message/error/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "previewHtml": "<svg width=\"260\" height=\"23\" viewBox=\"0 0 260 23\" fill=\"none\"><g transform=\"translate(2,3.5)\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"#D61B2C\"></circle><path d=\"M5.5 5.5l5 5M10.5 5.5l-5 5\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></g><text x=\"22\" y=\"14.833333333333334\" font-family=\"HeyMeow Rnd, system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#D61B2C\" letter-spacing=\"0\">Invalid message content</text></svg>"
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
