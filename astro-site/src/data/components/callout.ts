import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/callout.js`.
// Panel mirrors the property panel of set 6663:104524 (named "Callout" in
// Figma), in its order: four variant axes and four booleans. Leading-Slot
// and Trailing-Slot are SLOTs (90 swap options each) and get no control.
const calloutDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'neutral',
        options: [
          { value: 'neutral', label: 'Neutral' },
          { value: 'information', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
          { value: 'success', label: 'Success' },
        ],
      },
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'card',
        options: [
          { value: 'banner', label: 'Banner' },
          { value: 'card', label: 'Card' },
        ],
      },
      {
        label: 'Content',
        prop: 'content',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'header-only', label: 'Header Only' },
          { value: 'description-only', label: 'Description Only' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'large',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
      {
        label: 'hasLeadingIcon',
        prop: 'hasleadingicon',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasActionButton',
        prop: 'hasactionbutton',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingIcon',
        prop: 'hastrailingicon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasAccentBorder',
        prop: 'hasaccentborder',
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

export const callout: ComponentData = {
  "meta": {
    "slug": "callout",
    "name": "Callout",
    "node": "6663:104524",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6663-104524",
    "description": "An inline attention surface — title, description and optional leading icon, action button and trailing icon. 90 variants across <code>Type</code> (5) × <code>Style</code> (2) × <code>Content</code> (3) × <code>Size</code> (3), on node <code>6663:104524</code> in the 2026 Working File.",
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "callout-spec-main",
        "demoKey": "main",
        "title": "Callout",
        "node": "6663:104524",
        "description": "",
        "previewHtml": "<div id=\"callout-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": calloutDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "Neutral",
                "prop": "type"
              },
              {
                "key": "Style",
                "value": "Card",
                "prop": "style"
              },
              {
                "key": "Content",
                "value": "Default",
                "prop": "content"
              },
              {
                "key": "Size",
                "value": "Large",
                "prop": "size"
              },
              { "key": "hasLeadingIcon", "value": "False", "prop": "hasleadingicon" },
              { "key": "hasActionButton", "value": "False", "prop": "hasactionbutton" },
              { "key": "hasTrailingIcon", "value": "True", "prop": "hastrailingicon" },
              { "key": "hasAccentBorder", "value": "True", "prop": "hasaccentborder" },
              {
                "key": "Leading-Slot",
                "value": "Slot · 90 swap options — ships a placeholder",
                "variants": { "hasleadingicon:false": { "hide": true } }
              },
              {
                "key": "Button_New",
                "value": "Text button — Learn more + chevron",
                "variants": { "hasactionbutton:false": { "hide": true } }
              },
              {
                "key": "Trailing-Slot",
                "value": "Slot · 90 swap options — ships a placeholder",
                "variants": { "hastrailingicon:false": { "hide": true } }
              },
              {
                "key": "Resolved variant",
                "value": "6663:104525 · 360 × 69",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "type:neutral|style:card|content:default|size:large": {
                    "value": "6663:104525 · 360 × 69"
                  },
                  "type:neutral|style:card|content:header-only|size:large": {
                    "value": "6663:104590 · 360 × 56"
                  },
                  "type:neutral|style:card|content:header-only|size:small": {
                    "value": "6682:111532 · 360 × 56"
                  },
                  "type:success|style:banner|content:description-only|size:small": {
                    "value": "6801:110368 · 360 × 56"
                  },
                  "type:information|style:card|content:default|size:large": {
                    "value": "6663:104538 · 360 × 69"
                  },
                  "type:warning|style:card|content:default|size:large": {
                    "value": "6663:104551 · 360 × 69"
                  },
                  "type:error|style:card|content:default|size:large": {
                    "value": "6663:104564 · 360 × 69"
                  },
                  "type:success|style:card|content:default|size:large": {
                    "value": "6663:104577 · 360 × 69"
                  },
                  "type:information|style:card|content:header-only|size:large": {
                    "value": "6663:104601 · 360 × 56"
                  },
                  "type:warning|style:card|content:header-only|size:large": {
                    "value": "6663:104612 · 360 × 56"
                  },
                  "type:error|style:card|content:header-only|size:large": {
                    "value": "6663:104623 · 360 × 56"
                  },
                  "type:success|style:card|content:header-only|size:large": {
                    "value": "6663:104634 · 360 × 56"
                  },
                  "type:neutral|style:card|content:description-only|size:large": {
                    "value": "6663:104645 · 360 × 56"
                  },
                  "type:information|style:card|content:description-only|size:large": {
                    "value": "6663:104656 · 360 × 56"
                  },
                  "type:warning|style:card|content:description-only|size:large": {
                    "value": "6663:104667 · 360 × 56"
                  },
                  "type:error|style:card|content:description-only|size:large": {
                    "value": "6663:104678 · 360 × 56"
                  },
                  "type:success|style:card|content:description-only|size:large": {
                    "value": "6663:104689 · 360 × 56"
                  },
                  "type:neutral|style:card|content:default|size:medium": {
                    "value": "6679:107961 · 360 × 64"
                  },
                  "type:information|style:card|content:default|size:medium": {
                    "value": "6679:107976 · 360 × 64"
                  },
                  "type:warning|style:card|content:default|size:medium": {
                    "value": "6679:107991 · 360 × 64"
                  },
                  "type:error|style:card|content:default|size:medium": {
                    "value": "6679:108006 · 360 × 64"
                  },
                  "type:success|style:card|content:default|size:medium": {
                    "value": "6679:108021 · 360 × 64"
                  },
                  "type:neutral|style:card|content:header-only|size:medium": {
                    "value": "6679:108036 · 360 × 56"
                  },
                  "type:information|style:card|content:header-only|size:medium": {
                    "value": "6679:108049 · 360 × 56"
                  },
                  "type:warning|style:card|content:header-only|size:medium": {
                    "value": "6679:108062 · 360 × 56"
                  },
                  "type:error|style:card|content:header-only|size:medium": {
                    "value": "6679:108075 · 360 × 56"
                  },
                  "type:success|style:card|content:header-only|size:medium": {
                    "value": "6679:108088 · 360 × 56"
                  },
                  "type:neutral|style:card|content:description-only|size:medium": {
                    "value": "6679:108101 · 360 × 56"
                  },
                  "type:information|style:card|content:description-only|size:medium": {
                    "value": "6679:108114 · 360 × 56"
                  },
                  "type:warning|style:card|content:description-only|size:medium": {
                    "value": "6679:108127 · 360 × 56"
                  },
                  "type:error|style:card|content:description-only|size:medium": {
                    "value": "6679:108140 · 360 × 56"
                  },
                  "type:success|style:card|content:description-only|size:medium": {
                    "value": "6679:108153 · 360 × 56"
                  },
                  "type:neutral|style:card|content:default|size:small": {
                    "value": "6682:111457 · 360 × 57"
                  },
                  "type:information|style:card|content:default|size:small": {
                    "value": "6682:111472 · 360 × 57"
                  },
                  "type:warning|style:card|content:default|size:small": {
                    "value": "6682:111487 · 360 × 57"
                  },
                  "type:error|style:card|content:default|size:small": {
                    "value": "6682:111502 · 360 × 57"
                  },
                  "type:success|style:card|content:default|size:small": {
                    "value": "6682:111517 · 360 × 57"
                  },
                  "type:information|style:card|content:header-only|size:small": {
                    "value": "6682:111545 · 360 × 56"
                  },
                  "type:warning|style:card|content:header-only|size:small": {
                    "value": "6682:111558 · 360 × 56"
                  },
                  "type:error|style:card|content:header-only|size:small": {
                    "value": "6682:111571 · 360 × 56"
                  },
                  "type:success|style:card|content:header-only|size:small": {
                    "value": "6682:111584 · 360 × 56"
                  },
                  "type:neutral|style:card|content:description-only|size:small": {
                    "value": "6682:111597 · 360 × 56"
                  },
                  "type:information|style:card|content:description-only|size:small": {
                    "value": "6682:111610 · 360 × 56"
                  },
                  "type:warning|style:card|content:description-only|size:small": {
                    "value": "6682:111623 · 360 × 56"
                  },
                  "type:error|style:card|content:description-only|size:small": {
                    "value": "6682:111636 · 360 × 56"
                  },
                  "type:success|style:card|content:description-only|size:small": {
                    "value": "6682:111649 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:default|size:large": {
                    "value": "6801:109634 · 360 × 69"
                  },
                  "type:information|style:banner|content:default|size:large": {
                    "value": "6801:109652 · 360 × 69"
                  },
                  "type:warning|style:banner|content:default|size:large": {
                    "value": "6801:109670 · 360 × 69"
                  },
                  "type:error|style:banner|content:default|size:large": {
                    "value": "6801:109688 · 360 × 69"
                  },
                  "type:success|style:banner|content:default|size:large": {
                    "value": "6801:109706 · 360 × 69"
                  },
                  "type:neutral|style:banner|content:header-only|size:large": {
                    "value": "6801:109724 · 360 × 56"
                  },
                  "type:information|style:banner|content:header-only|size:large": {
                    "value": "6801:109740 · 360 × 56"
                  },
                  "type:warning|style:banner|content:header-only|size:large": {
                    "value": "6801:109756 · 360 × 56"
                  },
                  "type:error|style:banner|content:header-only|size:large": {
                    "value": "6801:109772 · 360 × 56"
                  },
                  "type:success|style:banner|content:header-only|size:large": {
                    "value": "6801:109788 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:description-only|size:large": {
                    "value": "6801:109804 · 360 × 56"
                  },
                  "type:information|style:banner|content:description-only|size:large": {
                    "value": "6801:109820 · 360 × 56"
                  },
                  "type:warning|style:banner|content:description-only|size:large": {
                    "value": "6801:109836 · 360 × 56"
                  },
                  "type:error|style:banner|content:description-only|size:large": {
                    "value": "6801:109852 · 360 × 56"
                  },
                  "type:success|style:banner|content:description-only|size:large": {
                    "value": "6801:109868 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:default|size:medium": {
                    "value": "6801:109884 · 360 × 64"
                  },
                  "type:information|style:banner|content:default|size:medium": {
                    "value": "6801:109902 · 360 × 64"
                  },
                  "type:warning|style:banner|content:default|size:medium": {
                    "value": "6801:109920 · 360 × 64"
                  },
                  "type:error|style:banner|content:default|size:medium": {
                    "value": "6801:109938 · 360 × 64"
                  },
                  "type:success|style:banner|content:default|size:medium": {
                    "value": "6801:109956 · 360 × 64"
                  },
                  "type:neutral|style:banner|content:header-only|size:medium": {
                    "value": "6801:109974 · 360 × 56"
                  },
                  "type:information|style:banner|content:header-only|size:medium": {
                    "value": "6801:109990 · 360 × 56"
                  },
                  "type:warning|style:banner|content:header-only|size:medium": {
                    "value": "6801:110006 · 360 × 56"
                  },
                  "type:error|style:banner|content:header-only|size:medium": {
                    "value": "6801:110022 · 360 × 56"
                  },
                  "type:success|style:banner|content:header-only|size:medium": {
                    "value": "6801:110038 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:description-only|size:medium": {
                    "value": "6801:110054 · 360 × 56"
                  },
                  "type:information|style:banner|content:description-only|size:medium": {
                    "value": "6801:110070 · 360 × 56"
                  },
                  "type:warning|style:banner|content:description-only|size:medium": {
                    "value": "6801:110086 · 360 × 56"
                  },
                  "type:error|style:banner|content:description-only|size:medium": {
                    "value": "6801:110102 · 360 × 56"
                  },
                  "type:success|style:banner|content:description-only|size:medium": {
                    "value": "6801:110118 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:default|size:small": {
                    "value": "6801:110134 · 360 × 57"
                  },
                  "type:information|style:banner|content:default|size:small": {
                    "value": "6801:110152 · 360 × 57"
                  },
                  "type:warning|style:banner|content:default|size:small": {
                    "value": "6801:110170 · 360 × 57"
                  },
                  "type:error|style:banner|content:default|size:small": {
                    "value": "6801:110188 · 360 × 57"
                  },
                  "type:success|style:banner|content:default|size:small": {
                    "value": "6801:110206 · 360 × 57"
                  },
                  "type:neutral|style:banner|content:header-only|size:small": {
                    "value": "6801:110224 · 360 × 56"
                  },
                  "type:information|style:banner|content:header-only|size:small": {
                    "value": "6801:110240 · 360 × 56"
                  },
                  "type:warning|style:banner|content:header-only|size:small": {
                    "value": "6801:110256 · 360 × 56"
                  },
                  "type:error|style:banner|content:header-only|size:small": {
                    "value": "6801:110272 · 360 × 56"
                  },
                  "type:success|style:banner|content:header-only|size:small": {
                    "value": "6801:110288 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:description-only|size:small": {
                    "value": "6801:110304 · 360 × 56"
                  },
                  "type:information|style:banner|content:description-only|size:small": {
                    "value": "6801:110320 · 360 × 56"
                  },
                  "type:warning|style:banner|content:description-only|size:small": {
                    "value": "6801:110336 · 360 × 56"
                  },
                  "type:error|style:banner|content:description-only|size:small": {
                    "value": "6801:110352 · 360 × 56"
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
                "value": "#F6F9FD",
                "token": "—",
                "variants": {
                  "type:neutral": {
                    "value": "#F6F9FD"
                  },
                  "type:information": {
                    "value": "#E5F1FF"
                  },
                  "type:warning": {
                    "value": "#FFF9EB"
                  },
                  "type:error": {
                    "value": "#F8E6E6"
                  },
                  "type:success": {
                    "value": "#E7F8F0"
                  }
                }
              },
              {
                "key": "Left accent",
                "value": "#D7E0EF",
                "token": "—",
                "variants": { "type:neutral|hasaccentborder:false": { "hide": true }, "type:information|hasaccentborder:false": { "hide": true }, "type:warning|hasaccentborder:false": { "hide": true }, "type:error|hasaccentborder:false": { "hide": true }, "type:success|hasaccentborder:false": { "hide": true },
                  "type:neutral": {
                    "value": "#D7E0EF"
                  },
                  "type:information": {
                    "value": "#005CE5"
                  },
                  "type:warning": {
                    "value": "#EBB30A"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:success": {
                    "value": "#27C990"
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "type:neutral": {
                    "value": "#0A2757"
                  },
                  "type:information": {
                    "value": "#072592"
                  },
                  "type:warning": {
                    "value": "#6C5009"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:success": {
                    "value": "#035E50"
                  },
                  "type:neutral|content:description-only": {
                    "hide": true
                  },
                  "type:information|content:description-only": {
                    "hide": true
                  },
                  "type:warning|content:description-only": {
                    "hide": true
                  },
                  "type:error|content:description-only": {
                    "hide": true
                  },
                  "type:success|content:description-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "type:neutral": {
                    "value": "#6780A9"
                  },
                  "type:information": {
                    "value": "#2340A9"
                  },
                  "type:warning": {
                    "value": "#966F0B"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:success": {
                    "value": "#048570"
                  },
                  "type:neutral|content:header-only": {
                    "hide": true
                  },
                  "type:information|content:header-only": {
                    "hide": true
                  },
                  "type:warning|content:header-only": {
                    "hide": true
                  },
                  "type:error|content:header-only": {
                    "hide": true
                  },
                  "type:success|content:header-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button label",
                "value": "#0A2757",
                "token": "—",
                "variants": { "hasactionbutton:false": { "hide": true } }
              },
              {
                "key": "Slot placeholder",
                "value": "#9F3DFB at 9% · dashed 4/4",
                "token": "—",
                "variants": { "hasleadingicon:false|hastrailingicon:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Button label",
                "value": "Primary/Label/Fine",
                "mono": true,
                "variants": { "hasactionbutton:false": { "hide": true } }
              },
              {
                "key": "Title",
                "value": "Primary/Headlines/Block",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "Primary/Multi-line Label/Base"
                  },
                  "size:small": {
                    "value": "Primary/Multi-line Label/Small"
                  },
                  "content:description-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Base",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "Secondary/Bold/Caption"
                  },
                  "size:small": {
                    "value": "Secondary/Bold/Small Caption"
                  },
                  "content:header-only": {
                    "hide": true
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
                "value": "69px",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Width",
                "value": "360px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6px",
                "mono": true,
                "variants": {
                  "style:banner": {
                    "value": "0 — square"
                  }
                }
              },
              {
                "key": "Left accent",
                "value": "6px, full height",
                "mono": true,
                "variants": { "hasaccentborder:false": { "hide": true } }
              },
              {
                "key": "Height rule",
                "value": "12 + max(text stack, 32px slot) + 12 — text centred when shorter",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12px top and bottom · 20px left · 16px right",
                "mono": true
              },
              {
                "key": "Title → description",
                "value": "2px",
                "mono": true,
                "variants": {
                  "content:header-only": {
                    "hide": true
                  },
                  "content:description-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing-Slot",
                "value": "32 × 32 at x 312, y 12",
                "mono": true,
                "variants": { "hastrailingicon:false": { "hide": true } }
              },
              {
                "key": "Leading-Slot",
                "value": "32 × 32 at x 20 · 12px to the text (assumed) — description wrap not measured",
                "mono": true,
                "variants": { "hasleadingicon:false": { "hide": true } }
              },
              {
                "key": "Button_New",
                "value": "91 × 24 · 2px below the text",
                "mono": true,
                "variants": { "hasactionbutton:false": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "EBCallout(\n    title: \"This is for the title.\",\n    description: \"This is the description.\",\n    type: .neutral,\n    style: .card,\n    size: .large\n)\n.ebTrailing { EBIconButton(.close) { dismiss() } }",
        "compose": "EBCallout(\n    title = \"This is for the title.\",\n    description = \"This is the description.\",\n    type = EBCalloutType.Neutral,\n    style = EBCalloutStyle.Card,\n    size = EBCalloutSize.Large,\n    trailing = { EBIconButton(EBIcons.Close) { dismiss() } }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Read off <code>get_node_info</code> on set <code>6663:104524</code>. <code>Style</code> changes only the corner radius — Card is 6, Banner square — so every colour is shared between the two. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Surface",
          "Accent",
          "Title",
          "Description"
        ],
        "rows": [
          {
            "role": "Neutral",
            "token": "—",
            "values": [
              "#F6F9FD",
              "#D7E0EF",
              "#0A2757",
              "#6780A9"
            ]
          },
          {
            "role": "Information",
            "token": "—",
            "values": [
              "#E5F1FF",
              "#005CE5",
              "#072592",
              "#2340A9"
            ]
          },
          {
            "role": "Warning",
            "token": "—",
            "values": [
              "#FFF9EB",
              "#EBB30A",
              "#6C5009",
              "#966F0B"
            ]
          },
          {
            "role": "Error",
            "token": "—",
            "values": [
              "#F8E6E6",
              "#D61B2C",
              "#D61B2C",
              "#D61B2C"
            ]
          },
          {
            "role": "Success",
            "token": "—",
            "values": [
              "#E7F8F0",
              "#27C990",
              "#035E50",
              "#048570"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:alert:2.2.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.alert.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>6663:104524</code> — named <strong>Callout</strong> in Figma — in panel order: four variant axes, four booleans, then the two SLOTs (90 swap options each).",
      "rows": [
        {
          "figma": "Type — Neutral, Information, Warning, Error, Success",
          "swift": "<code>type: .neutral / .information / .warning / .error / .success</code>",
          "compose": "<code>type = EBCalloutType.Neutral / Information / Warning / Error / Success</code>"
        },
        {
          "figma": "Style — Card, Banner",
          "swift": "<code>style: .card / .banner</code>",
          "compose": "<code>style = EBCalloutStyle.Card / Banner</code>"
        },
        {
          "figma": "Content — Default, Header Only, Description Only",
          "swift": "which of <code>title:</code> / <code>description:</code> is passed",
          "compose": "<code>title: String?</code>, <code>description: String?</code> — at least one"
        },
        {
          "figma": "Size — Large, Medium, Small",
          "swift": "<code>size: .large / .medium / .small</code>",
          "compose": "<code>size = EBCalloutSize.Large / Medium / Small</code>"
        },
        {
          "figma": "hasLeadingIcon — boolean, False",
          "swift": "<code>.ebLeading { }</code> — omit for False",
          "compose": "<code>leading: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasActionButton — boolean, False",
          "swift": "<code>.ebAction(String) { }</code> — omit for False",
          "compose": "<code>actionLabel: String? = null</code> + <code>onAction</code>"
        },
        {
          "figma": "hasTrailingIcon — boolean, True",
          "swift": "<code>.ebTrailing { }</code> — omit for False",
          "compose": "<code>trailing: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasAccentBorder — boolean, True",
          "swift": "<code>showsAccent: Bool = true</code>",
          "compose": "<code>showsAccent: Boolean = true</code>"
        },
        {
          "figma": "— <code>Trailing-Slot</code> (SLOT, 32 × 32)",
          "swift": "<code>.ebTrailing { }</code> — dismissal lives here (v2.2)",
          "compose": "<code>trailing: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Leading-Slot</code> (SLOT, 32 × 32)",
          "swift": "<code>.ebLeading { }</code>",
          "compose": "<code>leading: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Button_New</code> (text button, 91 × 24)",
          "swift": "<code>.ebAction(String) { }</code>",
          "compose": "<code>actionLabel: String? = null</code> + <code>onAction</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Callout/EBCallout.swift",
        "compose": "android/components/callout/EBCallout.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Information · Card · Default",
        "swift": "<span class=\"cmt\">// Type=Information, Style=Card, Content=Default, Size=Large — 6663:104538, 360 × 69.</span>\n<span class=\"typ\">EBCallout</span>(\n    title: <span class=\"str\">\"Transfer limit reached\"</span>,\n    description: <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type: .<span class=\"prp\">information</span>,\n    style: .<span class=\"prp\">card</span>,\n    size: .<span class=\"prp\">large</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Information, Style=Card, Content=Default, Size=Large — 6663:104538, 360 × 69.</span>\n<span class=\"typ\">EBCallout</span>(\n    title = <span class=\"str\">\"Transfer limit reached\"</span>,\n    description = <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Information</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Card</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Large</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      },
      {
        "subheading": "Warning · Banner · Header Only",
        "swift": "<span class=\"cmt\">// Type=Warning, Style=Banner, Content=Header Only, Size=Medium — 6801:110006, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    title: <span class=\"str\">\"Transfer limit reached\"</span>,\n    type: .<span class=\"prp\">warning</span>,\n    style: .<span class=\"prp\">banner</span>,\n    size: .<span class=\"prp\">medium</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Warning, Style=Banner, Content=Header Only, Size=Medium — 6801:110006, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    title = <span class=\"str\">\"Transfer limit reached\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Warning</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Banner</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Medium</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      },
      {
        "subheading": "Error · Card · Description Only",
        "swift": "<span class=\"cmt\">// Type=Error, Style=Card, Content=Description Only, Size=Small — 6682:111636, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    description: <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type: .<span class=\"prp\">error</span>,\n    style: .<span class=\"prp\">card</span>,\n    size: .<span class=\"prp\">small</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Error, Style=Card, Content=Description Only, Size=Small — 6682:111636, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    description = <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Error</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Card</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Small</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      },
      {
        "subheading": "Success · Banner · Default",
        "swift": "<span class=\"cmt\">// Type=Success, Style=Banner, Content=Default, Size=Medium — 6801:109956, 360 × 64.</span>\n<span class=\"typ\">EBCallout</span>(\n    title: <span class=\"str\">\"Transfer limit reached\"</span>,\n    description: <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type: .<span class=\"prp\">success</span>,\n    style: .<span class=\"prp\">banner</span>,\n    size: .<span class=\"prp\">medium</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Success, Style=Banner, Content=Default, Size=Medium — 6801:109956, 360 × 64.</span>\n<span class=\"typ\">EBCallout</span>(\n    title = <span class=\"str\">\"Transfer limit reached\"</span>,\n    description = <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Success</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Banner</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Medium</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Live region",
        "ios": "Post an announcement with the title and description when it appears; Error should interrupt, the rest queue.",
        "android": "<code>liveRegion = LiveRegionMode.Assertive</code> for Error, <code>Polite</code> otherwise (documented v2.2)."
      },
      {
        "requirement": "Not colour alone",
        "ios": "Type changes the surface, the 6px accent and the text colour — nothing else. Put the severity in the title copy.",
        "android": "Same."
      },
      {
        "requirement": "Dismiss",
        "ios": "Dismissal lives in the 32 × 32 trailing slot; label it \"Dismiss\" and extend it to 44pt.",
        "android": "<code>IconButton</code>, 48dp, <code>contentDescription = \"Dismiss\"</code>."
      },
      {
        "requirement": "Contrast — title",
        "ios": "Neutral 13.80:1, Information 10.87:1, Warning 7.17:1, Success 7.01:1 — but Error #D61B2C on #F8E6E6 is 4.31:1, below 4.5:1 at 14–18pt bold.",
        "android": "Same ratios."
      },
      {
        "requirement": "Contrast — description",
        "ios": "Only Information passes (7.72:1). Neutral 3.80:1, Warning 4.37:1, Error 4.31:1 and Success 4.15:1 are all below 4.5:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Card inside a content area and Banner edge-to-edge at the top of a screen.",
        "dontText": "Don’t round a Banner or square a Card — Style exists to make that choice."
      },
      {
        "doText": "Match Size to the surrounding text: Large beside 16pt body, Small inside dense lists.",
        "dontText": "Don’t mix sizes within one screen."
      },
      {
        "doText": "Use Header Only for a single-line status and Description Only for a hint.",
        "dontText": "Don’t put a sentence in the title of a Header Only callout."
      },
      {
        "doText": "Put dismissal in the trailing slot.",
        "dontText": "Don’t ship the purple Slot Block placeholder."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Names follow the v2.1 pass — <code>AlertContainer</code>, <code>ContentRow</code>, <code>LeadingSlotContainer</code>, <code>Leading-Slot</code>. But <code>LeftBorderAccent</code> sits <strong>inside</strong> <code>AlertContainer</code> on Information, Error and Success and <strong>outside</strong> it on Neutral and Warning, and Neutral’s ContentRow is 280 wide where the other Types’ are 292."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Four PascalCase axes over a complete 90-variant matrix, plus four <code>has*</code> booleans on <code>True</code>/<code>False</code>. The set is named <strong>Callout</strong> in Figma and this page now follows it, but the root frame is still <code>AlertContainer</code> and the Alert page documents the same node."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All six text layers resolve <code>matched</code> — <code>Primary/Headlines/Block</code>, <code>Primary/Multi-line Label/Base</code>, <code>Primary/Multi-line Label/Small</code>, <code>Secondary/Bold/Base</code>, <code>Secondary/Bold/Caption</code>, <code>Secondary/Bold/Small Caption</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One view with four enums and two slots; heights follow a rule — 12 + title + 2 + description + 12 for Default (69 / 64 / 57), and 56 for the one-line contents."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only; dismissal lives in the trailing slot (v2.2) and the button belongs to its owner."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading and trailing content are real SLOTs; <code>Button_New</code> is an instance delegated to the Button owner (v2.2)."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Four enums and two slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 90,
      "description": "<code>Type</code> (5) × <code>Style</code> (2) × <code>Content</code> (3) × <code>Size</code> (3) = 90 variants, a complete matrix, all 360 wide. Default is 69 / 64 / 57 tall at Large / Medium / Small; Header Only and Description Only are 56 at every size.",
      "columns": [
        "Type",
        "Style",
        "Variants",
        "Heights",
        "Default Large node"
      ],
      "rows": [
        {
          "cells": [
            "Neutral",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104525</code>"
          ]
        },
        {
          "cells": [
            "Neutral",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109634</code>"
          ]
        },
        {
          "cells": [
            "Information",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104538</code>"
          ]
        },
        {
          "cells": [
            "Information",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109652</code>"
          ]
        },
        {
          "cells": [
            "Warning",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104551</code>"
          ]
        },
        {
          "cells": [
            "Warning",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109670</code>"
          ]
        },
        {
          "cells": [
            "Error",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104564</code>"
          ]
        },
        {
          "cells": [
            "Error",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109688</code>"
          ]
        },
        {
          "cells": [
            "Success",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104577</code>"
          ]
        },
        {
          "cells": [
            "Success",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109706</code>"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Repointed to the 2026 Working File Callout · node 6663:104524",
      "rows": [
        {
          "body": "<strong>This page now documents the live Callout.</strong> It had been on the Sticker Sheets node <code>23:179895</code> — a 4-type strip with <code>label</code> / <code>label size</code> / <code>description</code> booleans. The component in the 2026 Working File, <code>6663:104524</code>, is named <strong>Callout</strong> in Figma and carries 90 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>Type</code> (Neutral, Information, Warning, Error, Success), <code>Style</code> (Banner, Card), <code>Content</code> (Default, Header Only, Description Only), <code>Size</code> (Small, Medium, Large), then <code>hasLeadingIcon</code>, <code>hasActionButton</code>, <code>hasTrailingIcon</code> and <code>hasAccentBorder</code>. <code>Leading-Slot</code> and <code>Trailing-Slot</code> (90 items each) are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 wide, height 12 + max(text stack, 32) + 12, with the text centred when it is shorter than the slot. Type drives the surface, accent border, title and description colours; Size drives the two text sizes.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live panel</strong> — install <code>com.eastblue.ds:callout:2.2.1</code>, a mapping in panel order, snippets per Type and Style, and a 90-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Two values are assumed and the card says so</strong> — the gap after <code>Leading-Slot</code> (12, taken from the gap Neutral leaves before <code>Trailing-Slot</code>) and the action button’s chevron glyph, which is a hidden layer and does not export. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>The Alert page still documents this same node.</strong> <code>6663:104524</code> was written up there earlier; with the set named Callout, the Alert page needs retiring or repointing so the two do not diverge. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the Sticker Sheets component</strong> — traits, issues and recommendations were scored against <code>23:179895</code>. <span class=\"tag-open\">Open</span>",
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
