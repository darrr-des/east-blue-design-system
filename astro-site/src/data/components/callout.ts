import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/callout.js`.
const calloutDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'information', label: 'Information' },
        ],
      },
      {
        label: 'Label',
        prop: 'label',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        label: 'Label Size',
        prop: 'labelSize',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'small', label: 'Small' },
        ],
      },
      {
        label: 'Description',
        prop: 'description',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
];

export const callout: ComponentData = {
  "meta": {
    "slug": "callout",
    "name": "Callout",
    "node": "23:179895",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=23-179895",
    "description": "A compact attention strip with neutral, info, warning, or danger intent, optional description, and an optional leading icon.",
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
      "title": "Rebuilt — intent enum and slots landed",
      "text": "The rebuild resolved every structural issue: renamed to <strong>Callout</strong>, <code>type</code> expanded to a 5-value intent enum (Information / Default / Warning / Error / Success), the redundant <code>label</code> + <code>label size</code> axes collapsed into <code>Content</code> × <code>Size</code>, and real Figma <code>Leading Slot</code> / <code>Trailing Slot</code> added. 45 variants with no invalid cells. Stateless by design — Callout is a display strip; interactivity lives in the Trailing Slot. Only Code Connect registration and the token rename remain."
    }
  },
  "overview": {
    "inContextNote": "Appears beneath form fields, inside modals, or between screen sections — to clarify what happens next, flag a soft warning, or offer supplemental instructions that don't rise to Alert-level severity.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\">\n          <rect x=\"12\" y=\"14\" width=\"176\" height=\"22\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".25\"></rect>\n          <rect x=\"22\" y=\"22\" width=\"60\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".2\"></rect>\n          <rect x=\"12\" y=\"46\" width=\"176\" height=\"42\" rx=\"5\" fill=\"#E5F1FF\" stroke=\"#D2E5FF\" stroke-width=\"1\"></rect>\n          <rect x=\"22\" y=\"54\" width=\"62\" height=\"3.2\" rx=\"1\" fill=\"#072592\" opacity=\".9\"></rect>\n          <rect x=\"22\" y=\"64\" width=\"156\" height=\"2.4\" rx=\"1\" fill=\"#6780A9\" opacity=\".75\"></rect>\n          <rect x=\"22\" y=\"71\" width=\"130\" height=\"2.4\" rx=\"1\" fill=\"#6780A9\" opacity=\".55\"></rect>\n          <rect x=\"22\" y=\"78\" width=\"96\" height=\"2.4\" rx=\"1\" fill=\"#6780A9\" opacity=\".4\"></rect>\n          <rect x=\"12\" y=\"98\" width=\"176\" height=\"14\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cal-demo-preview\"><div style=\"box-sizing:border-box;width:336px;padding:12px;background:#F6F9FD;border:1px solid #E5EBF4;border-radius:6px;font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;color:#445C85;margin-bottom:2px;\">Add title here</div><div style=\"font-weight:600;font-size:14px;line-height:20px;letter-spacing:0;color:#6780A9;\">This is the first sentence. This is the second sentence. This is the third sentence. This is the fourth sentence. This is the fifth sentence.</div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><select class=\"demo-panel-select\" onchange=\"_calDemo.label=this.value;updateCalloutDemo()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label size</span><select class=\"demo-panel-select\" onchange=\"_calDemo.labelSize=this.value;updateCalloutDemo()\"><option value=\"small\">small</option><option value=\"default\" selected=\"\">default</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select class=\"demo-panel-select\" onchange=\"_calDemo.description=this.value;updateCalloutDemo()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" onchange=\"_calDemo.type=this.value;updateCalloutDemo()\"><option value=\"default\" selected=\"\">default</option><option value=\"information\">information</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Covers the full intent range — Information, Default, Warning, Error, Success — so consumers no longer reach for the heavier Alert just to show a warning. Three sizes (Large / Small / XSmall) and three content shapes (Default / Description Only / Header Only) cover inline use in forms, modals, and flows."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own container, title, description, and per-intent tokens across all five intents. Both the leading icon and trailing action are now real Figma slots rather than missing affordances."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Three orthogonal props — <code>Type</code> × <code>Size</code> × <code>Content</code> = 45 variants with no invalid cells. The old <code>label</code> + <code>label size</code> pair that encoded one concept across two properties is gone, and <code>type</code> is a full intent enum rather than a two-value stub."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Named <code>Leading Slot</code> (24 × 24, radius 99) and <code>Trailing Slot</code> let consumers compose an icon and an inline action without forking the component. Both map to <code>@ViewBuilder</code> / <code>@Composable</code> slots on native."
      }
    ],
    "behavior": [
      {
        "state": "Default (neutral)",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Default",
        "notes": "Grey-blue bg <code>#F6F9FD</code>, border <code>#E5EBF4</code>, subtext <code>#6780A9</code>. Ambient hints with no intent."
      },
      {
        "state": "Information",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Information",
        "notes": "Light blue bg <code>#E5F1FF</code>, border <code>#D2E5FF</code>, title <code>#072592</code>. Helpful context."
      },
      {
        "state": "Warning",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Warning",
        "notes": "Amber bg <code>#FFF9EB</code>, border <code>#F9E39A</code>, subtext <code>#966F0B</code>. Added in the rebuild — previously required the heavier Alert."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Error",
        "notes": "Red bg <code>#F8E6E6</code>, border <code>#F4C7C9</code>, subtext <code>#D61B2C</code>. Added in the rebuild."
      },
      {
        "state": "Success",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Success",
        "notes": "Green bg <code>#E7F8F0</code>, border <code>#CAF2E0</code>, subtext <code>#035E50</code>. Added in the rebuild."
      },
      {
        "state": "Content composition",
        "ios": "yes",
        "android": "yes",
        "property": "Content",
        "notes": "<code>Default</code> shows title + description, <code>Header Only</code> shows the title alone, <code>Description Only</code> the body alone. Composes with every intent and size."
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not modelled by design. Callout is a display strip, not an interactive control — any interactivity lives in whatever occupies the Trailing Slot, which carries its own states."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Renamed <code>Contextual Help</code> → <strong>Callout</strong> — the internal jargon is gone and the name matches external precedent (Radix Themes uses the same term for an icon + short-message strip). (C1)"
      },
      {
        "body": "v2.0: <code>type</code> expanded from a two-value stub into a full 5-value intent enum — <code>Information</code> / <code>Default</code> / <code>Warning</code> / <code>Error</code> / <code>Success</code>. (C2)"
      },
      {
        "body": "v2.0: Redundant <code>label</code> + <code>label size</code> axes collapsed — content composition is now one <code>Content</code> axis (Default / Description Only / Header Only) with <code>Size</code> (Large / Small / XSmall) as a separate orthogonal prop. Full 5 × 3 × 3 = 45 matrix, no invalid combinations. (C2)"
      },
      {
        "body": "v2.0: Leading icon slot added — a real Figma <code>Leading Slot</code> (24 × 24, radius 99) in every variant, so consumers can drop in any icon or avatar. (C4)"
      },
      {
        "body": "v2.0: Trailing action slot added — a real Figma <code>Trailing Slot</code> in every variant for a dismiss affordance or inline action. (C4)"
      },
      {
        "body": "v2.0: Empty leading slot with no per-intent icon defaults confirmed <strong>intentional</strong> — the slot is left for the consumer to fill rather than shipping a default icon per intent. (C6)"
      },
      {
        "body": "v2.0: Absence of interaction states confirmed <strong>intentional</strong> — Callout is a display strip, not an interactive control. Any interactivity lives in whatever occupies the Trailing Slot, which carries its own states. (C5)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "The naming, intent enum, slot, and content-axis blockers are all resolved in the rebuild. Registration is now unblocked but the SwiftUI / Compose mappings are not yet wired, and the native component does not exist — snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename <code>main/contextual-help/color/info/*</code> → <code>main/callout/info/*</code>.",
        "body": "Token names should follow the component name now that the rename has landed. Deliberately deferred until native handoff so consuming files do not churn twice — still outstanding.",
        "tag": "Token"
      },
      {
        "headline": "Document the Callout vs Alert vs Subtext Message vs Tooltip decision tree.",
        "body": "Designers conflate these four because the naming overlaps. Publish a one-pager: Subtext (field helper), Callout (inline display strip, soft intent, no CTA), Alert (persistent status block with a title and optional action), Tooltip (transient, anchored). The clearest tell is the action — if it has a CTA or title hierarchy it is an Alert, not a Callout.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Rename <code>Contextual Help</code> → <code>Callout</code>.",
        "body": "v2.0: Applied — the component set is now named <strong>Callout</strong>, dropping the internal jargon and matching external precedent.",
        "tag": "Rename"
      },
      {
        "headline": "Collapse <code>label</code> + <code>label size</code> into one axis.",
        "body": "v2.0: Applied, and cleaner than proposed — instead of a single <code>labelSize</code> enum, content composition is now <code>Content</code> (Default / Description Only / Header Only) with <code>Size</code> (Large / Small / XSmall) as a separate orthogonal prop. No invalid cells across the full 45-variant matrix.",
        "tag": "Property"
      },
      {
        "headline": "Expand <code>type</code> into a proper intent enum.",
        "body": "v2.0: Applied, and one value beyond the recommendation — <code>Information</code> / <code>Default</code> / <code>Warning</code> / <code>Error</code> / <code>Success</code>, replacing the two-value stub.",
        "tag": "Property"
      },
      {
        "headline": "Add a leading-icon slot.",
        "body": "v2.0: Applied — a real Figma <code>Leading Slot</code> (24 × 24, radius 99) ships in every variant. The per-intent default icons from the original recommendation were deliberately <strong>not</strong> added; the slot is left for the consumer to fill.",
        "tag": "Slot"
      },
      {
        "headline": "Add a trailing action slot.",
        "body": "v2.0: Applied — a real Figma <code>Trailing Slot</code> ships in every variant for a dismiss affordance or inline action.",
        "tag": "Slot"
      },
      {
        "headline": "Add Pressed and Disabled states.",
        "body": "v2.0: Reviewed and closed as not needed — Callout is a display strip, not an interactive control. Any interactivity lives in whatever occupies the Trailing Slot, which carries its own states.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": calloutDemoControls,
        "title": "Default",
        "node": "23:179902",
        "description": "Compact attention strip. Flip Type / Label / Label size / Description to walk through every variant.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type",        "value": "Default", "prop": "type" },
              { "key": "Label",       "value": "yes",     "prop": "label" },
              { "key": "Label size",  "value": "Default", "prop": "labelSize",
                "variants": { "label:no": { "hide": true } }
              },
              { "key": "Description", "value": "yes",     "prop": "description" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#F6F9FD", "token": "contextual-help/color/default/bg",
                "variants": { "type:information": { "value": "#E5F1FF", "token": "contextual-help/color/info/bg" } }
              },
              { "key": "Border", "value": "#E5EBF4", "token": "contextual-help/color/default/border",
                "variants": { "type:information": { "value": "#D2E5FF", "token": "contextual-help/color/info/border" } }
              },
              { "key": "Label", "value": "#445C85", "token": "contextual-help/color/default/label",
                "variants": {
                  "type:information": { "value": "#072592", "token": "contextual-help/color/info/label" },
                  "label:no": { "hide": true }
                }
              },
              { "key": "Description", "value": "#6780A9", "token": "contextual-help/color/default/description",
                "variants": {
                  "type:information": { "token": "contextual-help/color/info/description" },
                  "description:no": { "hide": true }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Padding",       "value": "12 × 12", "mono": true },
              { "key": "Border radius", "value": "6",       "mono": true },
              { "key": "Border",        "value": "1px solid","mono": true },
              { "key": "Gap",           "value": "8",       "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Base", "mono": true,
                "variants": {
                  "labelSize:small": { "value": "Primary/Label/Fine" },
                  "label:no": { "hide": true }
                }
              },
              { "key": "Label font", "value": "Proxima Soft Bold · 16 / 16 · +0.25", "mono": true,
                "variants": {
                  "labelSize:small": { "value": "Proxima Soft Bold · 12 / 12 · +0.5" },
                  "label:no": { "hide": true }
                }
              },
              { "key": "Description style", "value": "Secondary/Bold/Base", "mono": true,
                "variants": { "description:no": { "hide": true } }
              },
              { "key": "Description font", "value": "BarkAda Semibold · 14 / 20", "mono": true,
                "variants": { "description:no": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCallout</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Body copy\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIntent</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCallout</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Body copy\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCalloutIntent</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"cal-spec-preview\"></div>"
      }

    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "All colors bound to <code>main/contextual-help/color/*</code> tokens (target after rename: <code>main/callout/*</code>). No appearance modes. No Pressed or Disabled state defined.",
        "columns": [
          "TOKEN",
          "VALUE"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "bg",
            "values": [
              "main/contextual-help/color/default/bg",
              "#F6F9FD"
            ]
          },
          {
            "role": "Default",
            "token": "border",
            "values": [
              "main/contextual-help/color/default/border",
              "#E5EBF4"
            ]
          },
          {
            "role": "Default",
            "token": "label",
            "values": [
              "main/contextual-help/color/default/label",
              "#445C85"
            ]
          },
          {
            "role": "Default",
            "token": "description",
            "values": [
              "main/contextual-help/color/default/description",
              "#6780A9"
            ]
          },
          {
            "role": "Information",
            "token": "bg",
            "values": [
              "main/contextual-help/color/info/bg",
              "#E5F1FF"
            ]
          },
          {
            "role": "Information",
            "token": "border",
            "values": [
              "main/contextual-help/color/info/border",
              "#D2E5FF"
            ]
          },
          {
            "role": "Information",
            "token": "label",
            "values": [
              "main/contextual-help/color/info/label",
              "#072592"
            ]
          },
          {
            "role": "Information",
            "token": "description",
            "values": [
              "main/contextual-help/color/info/description",
              "#6780A9"
            ]
          },
          {
            "role": "Success",
            "token": "—",
            "values": [
              "— (missing)",
              "—"
            ]
          },
          {
            "role": "Warning",
            "token": "—",
            "values": [
              "— (missing)",
              "—"
            ]
          },
          {
            "role": "Error",
            "token": "—",
            "values": [
              "— (missing)",
              "—"
            ]
          },
          {
            "role": "Pressed",
            "token": "—",
            "values": [
              "— (missing)",
              "—"
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
        "title": "Typography",
        "description": "Label uses the Primary (Proxima Soft Bold) scale; description uses the Secondary (BarkAda Semibold) scale.",
        "columns": [
          "FONT",
          "SIZE",
          "LINE HEIGHT",
          "TRACKING"
        ],
        "rows": [
          {
            "role": "Label (default)",
            "token": "Primary/Label/Base",
            "values": [
              "Proxima Soft Bold",
              "16 px",
              "16 px",
              "0.25 px"
            ]
          },
          {
            "role": "Label (small)",
            "token": "Primary/Label/Fine",
            "values": [
              "Proxima Soft Bold",
              "12 px",
              "12 px",
              "0.5 px"
            ]
          },
          {
            "role": "Description",
            "token": "Secondary/Bold/Base",
            "values": [
              "BarkAda Semibold",
              "14 px",
              "20 px",
              "0 px"
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
            "role": "Width",
            "token": "336 px (hug-content after native handoff)",
            "values": [
              "—"
            ]
          },
          {
            "role": "Padding horizontal",
            "token": "12 px",
            "values": [
              "space/space-12"
            ]
          },
          {
            "role": "Padding vertical",
            "token": "12 px",
            "values": [
              "space/space-12"
            ]
          },
          {
            "role": "Corner radius",
            "token": "6 px",
            "values": [
              "radius/radius-2"
            ]
          },
          {
            "role": "Border",
            "token": "1 px solid (per type)",
            "values": [
              "—"
            ]
          },
          {
            "role": "Gap (label ↔ description)",
            "token": "2 px",
            "values": [
              "space/space-2"
            ]
          },
          {
            "role": "Leading icon slot",
            "token": "— (missing, recommended 16×16)",
            "values": [
              "—"
            ]
          },
          {
            "role": "Trailing action slot",
            "token": "— (missing, recommended)",
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:feedback:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.feedback.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. Names reflect the proposed rename (EBCallout, not EBContextualHelp)."
    },
    "propertyMapping": {
      "description": "Assumes the recommended architecture: single labelSize enum (replacing label + label size), full 4-value intent enum (replacing type), plus an optional leading icon and trailing action slot.",
      "rows": [
        {
          "figma": "label (yes/no) + label size (small/default/no)",
          "swift": "labelSize: EBCalloutLabelSize = .none",
          "compose": "labelSize: EBCalloutLabelSize = None"
        },
        {
          "figma": "Label text",
          "swift": "title: String?",
          "compose": "title: String? = null"
        },
        {
          "figma": "description (yes/no)",
          "swift": "description: String?",
          "compose": "description: String? = null"
        },
        {
          "figma": "type=default | information",
          "swift": ".ebIntent(.info / .success / .warning / .error)",
          "compose": "intent: EBCalloutIntent"
        },
        {
          "figma": "— (missing)",
          "swift": "leadingIcon: Image?",
          "compose": "leadingIcon: @Composable (() -&gt; Unit)?"
        },
        {
          "figma": "— (missing)",
          "swift": "trailingAction: (() -&gt; some View)?",
          "compose": "trailingAction: @Composable (() -&gt; Unit)?"
        },
        {
          "figma": "— (missing)",
          "swift": ".disabled(true)",
          "compose": "enabled: Boolean = true"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Feedback/EBCallout.swift",
        "compose": "android/components/feedback/EBCallout.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Info callout — label + description",
        "swift": "<span class=\"typ\">EBCallout</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Add title here\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"This is a short helpful context message for the user.\"</span>\n)\n    .<span class=\"fn\">ebIntent</span>(.info)\n    .<span class=\"fn\">ebLabelSize</span>(.default)",
        "compose": "<span class=\"typ\">EBCallout</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Add title here\"</span>,\n    <span class=\"prp\">description</span> = <span class=\"str\">\"This is a short helpful context message for the user.\"</span>,\n    <span class=\"prp\">intent</span> = <span class=\"typ\">EBCalloutIntent</span>.Info,\n    <span class=\"prp\">labelSize</span> = <span class=\"typ\">EBCalloutLabelSize</span>.Default\n)"
      },
      {
        "subheading": "With trailing action (Learn more)",
        "swift": "<span class=\"typ\">EBCallout</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Verify your number\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"We'll send a one-time code to confirm this device.\"</span>\n)\n    .<span class=\"fn\">ebIntent</span>(.info)\n    .<span class=\"fn\">ebTrailingAction</span> {\n        <span class=\"typ\">EBTextButton</span>(<span class=\"str\">\"Learn more\"</span>) { showSheet = <span class=\"kw\">true</span> }\n    }",
        "compose": "<span class=\"typ\">EBCallout</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Verify your number\"</span>,\n    <span class=\"prp\">description</span> = <span class=\"str\">\"We'll send a one-time code to confirm this device.\"</span>,\n    <span class=\"prp\">intent</span> = <span class=\"typ\">EBCalloutIntent</span>.Info,\n    <span class=\"prp\">trailingAction</span> = {\n        <span class=\"typ\">EBTextButton</span>(<span class=\"str\">\"Learn more\"</span>, onClick = { showSheet = <span class=\"kw\">true</span> })\n    }\n)"
      },
      {
        "subheading": "Warning intent (new)",
        "swift": "<span class=\"typ\">EBCallout</span>(\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Transfers above ₱50,000 require ID verification.\"</span>\n)\n    .<span class=\"fn\">ebIntent</span>(.warning)\n    .<span class=\"fn\">ebLabelSize</span>(.none)",
        "compose": "<span class=\"typ\">EBCallout</span>(\n    <span class=\"prp\">description</span> = <span class=\"str\">\"Transfers above ₱50,000 require ID verification.\"</span>,\n    <span class=\"prp\">intent</span> = <span class=\"typ\">EBCalloutIntent</span>.Warning,\n    <span class=\"prp\">labelSize</span> = <span class=\"typ\">EBCalloutLabelSize</span>.None\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Don't rely on colour alone",
        "ios": "Pair intent with a leading icon (info / warning / error). WCAG 1.4.1.",
        "android": "Same — both icon and color must carry intent."
      },
      {
        "requirement": "Semantic grouping",
        "ios": "Wrap label + description in an <code>accessibilityElement(children: .combine)</code> so VoiceOver reads them as one note.",
        "android": "Use <code>Modifier.semantics(mergeDescendants = true)</code>."
      },
      {
        "requirement": "Live-region announce",
        "ios": "If the callout appears after a user action, post a <code>UIAccessibility.Notification.announcement</code> with its text.",
        "android": "Use <code>liveRegion = LiveRegionMode.Polite</code> when the callout mounts."
      },
      {
        "requirement": "Tappable callout target",
        "ios": "Minimum 44 × 44 pt if the whole container is tappable.",
        "android": "Minimum 48 × 48 dp same."
      },
      {
        "requirement": "Dynamic type / font scaling",
        "ios": "Label and description both scale with Dynamic Type; don't hard-lock line-height to 16/20.",
        "android": "Use <code>sp</code> units and respect <code>fontScale</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Callout for soft, inline guidance — a flow hint, a policy reminder, a \"this is what happens next\" note.",
        "dontText": "Use Callout for page-level critical messages — reach for Alert when the severity warrants a dismissible banner."
      },
      {
        "doText": "Pair intent colour with a leading icon. Every intent ships a default (info-circle, check-circle, warning-triangle, error-circle).",
        "dontText": "Rely on colour alone to communicate severity — fails WCAG 1.4.1 and breaks for colour-blind users."
      },
      {
        "doText": "Put a single TextButton in the trailing action slot when the callout opens a sheet or links to docs.",
        "dontText": "Nest a full filled Button — it overweights the callout. If the call to action is primary, it belongs outside the callout."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Component name \"Contextual Help\" is internal jargon. Rename to <code>Callout</code>. Inner layers are reasonable."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Redundant <code>label</code> + <code>label size</code> encode one concept; <code>type</code> is a 2-value stub of a 4-value intent."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All bg / border / label / description bound to <code>main/contextual-help/color/*</code>. Spacing uses <code>space/*</code>. Rename namespace alongside the component rename."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No leading-icon slot, no trailing-action slot, no system primitive match on either platform — custom <code>EBCallout</code> with intent enum required."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed, Focused, or Disabled states. Tappable callouts and disabled-form contexts can't be expressed."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No icons shipped today — Information variant carries intent via colour alone. Add vector Icon instances per intent."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by rename + property schema collapse + intent expansion + slot additions."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Component name",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename to <code>Callout</code> before Code Connect — otherwise the native file <code>EBCallout.swift</code> won't match the Figma name <code>Contextual Help</code>."
      },
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Collapse <code>label</code>+<code>label size</code> and expand <code>type</code>."
      },
      {
        "aspect": "Slot inference",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Add <code>#leading-icon</code> and <code>#trailing-action</code> slots."
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Add Pressed and Disabled states."
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Planned: <code>EBCallout.swift</code> / <code>EBCallout.kt</code>."
      }
    ],
    "variants": {
      "total": 8,
      "description": "4 axes: Label (yes/no) × Label Size (small / default / no) × Description (yes/no) × Type (default / information). Cartesian is constrained — of the 24 combinations, only 8 are shipped as valid variants.",
      "columns": [
        "Label",
        "Label Size",
        "Description",
        "Type",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "yes",
            "small",
            "yes",
            "default",
            "23:179896",
            "336 × 98"
          ]
        },
        {
          "cells": [
            "yes",
            "small",
            "yes",
            "information",
            "23:179899",
            "336 × 98"
          ]
        },
        {
          "cells": [
            "yes",
            "default",
            "yes",
            "default",
            "23:179902",
            "336 × 102"
          ]
        },
        {
          "cells": [
            "yes",
            "default",
            "yes",
            "information",
            "23:179905",
            "336 × 102"
          ]
        },
        {
          "cells": [
            "no",
            "no",
            "yes",
            "default",
            "23:179908",
            "336 × 84"
          ]
        },
        {
          "cells": [
            "no",
            "no",
            "yes",
            "information",
            "23:179910",
            "336 × 84"
          ]
        },
        {
          "cells": [
            "yes",
            "default",
            "no",
            "default",
            "23:179912",
            "336 × 39"
          ]
        },
        {
          "cells": [
            "yes",
            "default",
            "no",
            "information",
            "23:179915",
            "336 × 39"
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
      "header": "Initial Assessment · node 23:179895 (source name \"Contextual Help\")",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across Label × Label Size × Description × Type. Source Figma name is \"Contextual Help\"; this assessment recommends renaming to \"Callout\".\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Rename Contextual Help → Callout</strong> — Adopt the industry-standard name used by Atlassian, GitHub, Notion, Stripe. Rename token namespace to <code>main/callout/*</code> and native files to <code>EBCallout</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Redundant label axes</strong> — Collapse <code>label</code> + <code>label size</code> into a single <code>labelSize: none | small | default</code> enum. Three invalid Cartesian cells removed.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Expand type to 4-value intent</strong> — Replace <code>type=default | information</code> with <code>intent: info | success | warning | error</code>. Adds token groups for success / warning / error.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Add leading-icon slot</strong> — Every intent ships a default icon (info-circle, check-circle, warning-triangle, error-circle). Closes the colour-only accessibility gap.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Add trailing action slot</strong> — Figma Slot for a single TextButton or dismiss X. Consumers instance-swap into the slot.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Add Pressed and Disabled states</strong> — Pressed for tappable callouts; Disabled to mirror parent form disabled context.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>No icons shipped</strong> — Information variant signals intent via colour alone. Add DS Icon library instances per intent.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. Blocked by rename + property collapse + intent expansion + slot additions.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
