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
      "text": "Rename to <strong>Callout</strong>, collapse the redundant <code>label</code> + <code>label size</code> booleans into a single <code>labelSize</code> enum, and expand <code>type</code> into a proper 4-value <code>intent</code> enum (info / success / warning / error). Add a leading-icon slot, a trailing action slot, and Pressed / Disabled states."
    }
  },
  "overview": {
    "inContextNote": "Appears beneath form fields, inside modals, or between screen sections — to clarify what happens next, flag a soft warning, or offer supplemental instructions that don't rise to Alert-level severity.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\">\n          <rect x=\"12\" y=\"14\" width=\"176\" height=\"22\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".25\"></rect>\n          <rect x=\"22\" y=\"22\" width=\"60\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".2\"></rect>\n          <rect x=\"12\" y=\"46\" width=\"176\" height=\"42\" rx=\"5\" fill=\"#E5F1FF\" stroke=\"#D2E5FF\" stroke-width=\"1\"></rect>\n          <rect x=\"22\" y=\"54\" width=\"62\" height=\"3.2\" rx=\"1\" fill=\"#072592\" opacity=\".9\"></rect>\n          <rect x=\"22\" y=\"64\" width=\"156\" height=\"2.4\" rx=\"1\" fill=\"#6780A9\" opacity=\".75\"></rect>\n          <rect x=\"22\" y=\"71\" width=\"130\" height=\"2.4\" rx=\"1\" fill=\"#6780A9\" opacity=\".55\"></rect>\n          <rect x=\"22\" y=\"78\" width=\"96\" height=\"2.4\" rx=\"1\" fill=\"#6780A9\" opacity=\".4\"></rect>\n          <rect x=\"12\" y=\"98\" width=\"176\" height=\"14\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cal-demo-preview\"><div style=\"box-sizing:border-box;width:336px;padding:12px;background:#F6F9FD;border:1px solid #E5EBF4;border-radius:6px;font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;color:#445C85;margin-bottom:2px;\">Add title here</div><div style=\"font-weight:600;font-size:14px;line-height:20px;letter-spacing:0;color:#6780A9;\">This is the first sentence. This is the second sentence. This is the third sentence. This is the fourth sentence. This is the fifth sentence.</div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><select class=\"demo-panel-select\" onchange=\"_calDemo.label=this.value;updateCalloutDemo()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label size</span><select class=\"demo-panel-select\" onchange=\"_calDemo.labelSize=this.value;updateCalloutDemo()\"><option value=\"small\">small</option><option value=\"default\" selected=\"\">default</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select class=\"demo-panel-select\" onchange=\"_calDemo.description=this.value;updateCalloutDemo()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" onchange=\"_calDemo.type=this.value;updateCalloutDemo()\"><option value=\"default\" selected=\"\">default</option><option value=\"information\">information</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works inline across forms, modals, and flows. But the intent enum is limited to Default and Information — consumers needing Warning or Error callouts today reach for Alert, which over-weights the UI."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Carries its own container, label, description, and per-type tokens (<code>main/contextual-help/color/{default|info}/*</code>). Missing: a leading icon slot and a trailing action slot; both are standard in the industry pattern."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Two properties encode one concept: <code>label=yes/no</code> + <code>label size=small/default/no</code>. Three Cartesian cells are invalid. The <code>type</code> property is also a 2-value stub of what should be a proper intent enum."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Drops into any column or modal. No interaction states means it can't host an inline \"Learn more\" link cleanly; consumers either link the whole container (no pressed state defined) or nest a Button, which over-pads."
      }
    ],
    "behavior": [
      {
        "state": "Default (neutral)",
        "ios": "yes",
        "android": "yes",
        "property": "type=default",
        "notes": "Grey-blue bg #F6F9FD, border #E5EBF4, label #445C85, description #6780A9. Ambient hints."
      },
      {
        "state": "Information",
        "ios": "yes",
        "android": "yes",
        "property": "type=information",
        "notes": "Light blue bg #E5F1FF, border #D2E5FF, label #072592. Helpful context."
      },
      {
        "state": "Warning",
        "ios": "na",
        "android": "na",
        "property": "— (missing)",
        "notes": "No warning intent. Consumers reach for Alert component instead, which is heavier."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "— (missing)",
        "notes": "No error intent. Same workaround as Warning."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "— (missing)",
        "notes": "If the callout is tappable (e.g. opens a sheet with more info), there's no pressed state to reflect that affordance."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "— (missing)",
        "notes": "No disabled state. Parent form disabled context is not reflected in the callout."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Component name \"Contextual Help\" is internal jargon.",
        "body": "Industry-standard term for this shape is <strong>Callout</strong> — used by Atlassian, GitHub, Notion, and Stripe. The current name doesn't describe the anatomy and overlaps conceptually with Tooltip. Rename the component to make its purpose self-evident in picker menus and code.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Redundant label axes.",
        "body": "<code>label=yes/no</code> and <code>label size=small/default/no</code> encode overlapping information. When <code>label=no</code>, <code>label size</code> is forced to <code>no</code>; two of the nine Cartesian cells (<code>no/small</code>, <code>no/default</code>) are invalid and unused. Collapse to a single <code>labelSize: none | small | default</code> enum.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>type=default | information</code> is a two-value stub.",
        "body": "Real-world callouts need Info / Success / Warning / Error. Today consumers escalate to Alert for Warning or Error because no Warning or Error callout exists — Alert over-weights the UI for soft messages. Expand to a 4-value <code>intent</code> enum.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No leading icon slot.",
        "body": "Every mature callout in the industry (Material, HIG, GitHub, Notion, Stripe) leads with an intent-bound icon — info, check, warning triangle, error circle. This component relies on colour alone, which fails WCAG 1.4.1 (Use of Color).",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No interaction states.",
        "body": "Callouts frequently host a trailing \"Learn more\" link or open a sheet on tap. Without Pressed / Focused / Disabled, the Figma source can't express either affordance and consumers nest a Button (too heavy) or link the whole container (no pressed feedback).",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No trailing action slot.",
        "body": "A named trailing slot — for a \"Learn more\" TextButton or a dismiss X — is a canonical callout affordance. Consumers currently detach the instance or append a sibling, both of which break DS governance.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Icon for <code>type=information</code> not wired.",
        "body": "Figma ships an Information variant with no actual information icon — only a blue tint. If the plan is to carry intent via colour, this is the C6 gap to close: add a vector icon instance bound to <code>main/callout/info/icon</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked behind the rename, property-schema collapse, intent-enum expansion, icon slot, and interaction states. No native component file exists yet.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename <em>Contextual Help</em> → <em>Callout</em>.",
        "body": "Industry-standard term (Atlassian, GitHub, Notion, Stripe). Describes the anatomy — an inline informational block — and doesn't collide with Tooltip, Alert, or Subtext Message. Also rename the token namespace from <code>main/contextual-help/*</code> to <code>main/callout/*</code>, and the component file to <code>EBCallout.swift</code> / <code>EBCallout.kt</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Collapse <code>label</code> + <code>label size</code> into one <code>labelSize</code> enum.",
        "body": "Replace the two properties with a single <code>labelSize: none | small | default</code> enum. Three Cartesian cells (<code>no/small</code>, <code>no/default</code>, plus the implicit invalid combinations) disappear, and consumers pick a size directly — no more \"turn label on then pick a size\" two-step.",
        "tag": "Property"
      },
      {
        "headline": "Expand <code>type</code> into a 4-value <code>intent</code> enum.",
        "body": "Replace <code>type=default | information</code> with <code>intent: .info | .success | .warning | .error</code>. Add the corresponding token groups (<code>main/callout/success/*</code>, <code>main/callout/warning/*</code>, <code>main/callout/error/*</code>) and default leading icons per intent. Pushes soft-severity messages off Alert and into Callout where they belong.",
        "tag": "Property"
      },
      {
        "headline": "Add a leading-icon slot with per-intent defaults.",
        "body": "Every callout intent ships a default icon (info-circle, check-circle, warning-triangle, error-circle) that consumers can override or hide. Bind to <code>main/callout/{intent}/icon</code>. Closes the colour-only accessibility gap and matches Material, HIG, GitHub, and Notion conventions.",
        "tag": "Slot"
      },
      {
        "headline": "Add a trailing action slot.",
        "body": "Adopt Figma Slots to expose <code>#trailing-action</code> for a single TextButton (e.g. \"Learn more\") or a close X icon. Consumers instance-swap a Text Button into the slot; the callout handles spacing and vertical alignment.",
        "tag": "Slot"
      },
      {
        "headline": "Add Pressed and Disabled states.",
        "body": "When the entire callout is tappable (opens a sheet with more detail), it needs a Pressed state with a slightly darker bg token. When a parent form is disabled, the callout needs a matched Disabled state (muted label + description + 0.6 opacity border).",
        "tag": "State"
      },
      {
        "headline": "Rename <code>main/contextual-help/color/info/*</code> → <code>main/callout/info/*</code>.",
        "body": "Token names follow the component name. Rename the whole group at once when the component rename lands; defer until native handoff so consuming files don't thrash.",
        "tag": "Token"
      },
      {
        "headline": "Document the Callout vs Alert vs Subtext Message vs Tooltip decision tree.",
        "body": "Designers conflate these four because the naming overlaps. Publish a one-pager: Subtext (field helper), Callout (inline block, soft intent), Alert (page-level banner, hard intent), Tooltip (hover/press popover). No Figma change — a usage doc on the guide page.",
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
