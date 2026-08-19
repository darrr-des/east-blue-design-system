import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/action-list.js`.
const actionListDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'loading',  label: 'Loading' },
        ],
      },
      {
        label: 'Density',
        prop: 'density',
        defaultValue: 'compact',
        options: [
          { value: 'compact',  label: 'Compact' },
          { value: 'expanded', label: 'Expanded' },
        ],
      },
    ],
  },
];

export const actionList: ComponentData = {
  "meta": {
    "slug": "action-list",
    "name": "Action Row",
    "node": "4628:19843",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4628-19843",
    "description": "A tappable list row with a leading asset slot, label and description, and a trailing chevron with optional counter. Merges the former Action List, Action List with Counter and Action List with Description.",
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
    "navGroup": "Action List",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4628:19843</code> in the 2026 Working File and renamed <strong>Action Row</strong>, merging the three former Action List siblings into <code>TrailingContent</code> (2) × <code>State</code> (4) × <code>Density</code> (2) = 16 variants, plus a <code>hasDescription</code> boolean. Interaction states now exist where there were none, the leading asset and counter are real Figma Slots, and layer and property naming matches the conventions the rest of the family settled on. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Action-list rows stack inside Settings / Profile / Help menus. A typical screen mixes variants with/without description and with/without trailing counter.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Settings</text>\n          \n          <circle cx=\"44\" cy=\"38\" r=\"3\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"50\" y=\"35\" width=\"40\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <text x=\"146\" y=\"40\" fill=\"#005CE5\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">View</text>\n          <path d=\"M158 37l2 2-2 2\" stroke=\"#005CE5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n          \n          <circle cx=\"44\" cy=\"54\" r=\"3\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"50\" y=\"51\" width=\"52\" height=\"5\" rx=\"1\" fill=\"#005CE5\" opacity=\".9\"></rect>\n          <rect x=\"146\" y=\"50\" width=\"10\" height=\"7\" rx=\"3.5\" fill=\"#EEF2F9\"></rect>\n          <text x=\"151\" y=\"56\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"4.5\" font-weight=\"700\" font-family=\"system-ui\">3</text>\n          \n          <circle cx=\"44\" cy=\"70\" r=\"3\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"50\" y=\"67\" width=\"36\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"50\" y=\"74\" width=\"60\" height=\"3\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <path d=\"M158 69l2 2-2 2\" stroke=\"#0A2757\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n          \n          <rect x=\"40\" y=\"90\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"52\" y=\"91\" width=\"80\" height=\"5\" rx=\"1\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"146\" y=\"91\" width=\"14\" height=\"5\" rx=\"1\" fill=\"#EEF2F9\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"lit-demo-preview\"><div style=\"width:360px;background:#FFFFFF;\"><div style=\"display:flex;align-items:center;gap:12px;padding:8px 12px;\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;opacity:1;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;gap:6px;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:16px;line-height:16px;font-weight:600;letter-spacing:0.25px;color:#0A2757;\">Label</div></div><span style=\"font-family:'Proxima Soft',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:#005CE5;flex-shrink:0;\">CTA</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Shape</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><select class=\"demo-panel-select\" id=\"lit-ctrl-variant\" onchange=\"updateLitDemo()\"><option value=\"base\" selected=\"\">base (List)</option><option value=\"counter\">with Counter</option><option value=\"description\">with Description</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" id=\"lit-ctrl-state\" onchange=\"updateLitDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option><option value=\"loading\">Loading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">density</span><select class=\"demo-panel-select\" id=\"lit-ctrl-density\" onchange=\"updateLitDemo()\"><option value=\"compact\" selected=\"\">Compact</option><option value=\"expanded\">Expanded</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"lit-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"updateLitDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"lit-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"description\" oninput=\"updateLitDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">counter</span><input type=\"text\" id=\"lit-ctrl-counter\" class=\"demo-panel-select demo-panel-input\" value=\"3\" oninput=\"updateLitDemo()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used across Settings, Help Center, Profile, Wallet sub-screens. Covers the main action-list row patterns."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, dividers and state colors, and composes a chevron and counter from library instances. Nothing external required to render a complete row."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>TrailingContent</code>, <code>State</code> and <code>Density</code> are orthogonal, <code>Density</code> is used exactly as §1 defines it, <code>hasDescription</code> carries the correct verb prefix, and <code>TrailingContent</code> matches View Only Field for the same concept. Every addressable layer is semantically named; the skeleton loader keeps working names by design."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>Asset Slot</code> and <code>Counter Slot</code> are real Figma Slots, and the chevron and counter come from library instances — teams drop in content without detaching. Stacks cleanly into lists."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Baseline row. Label in Neutral Dark (or Brand Blue on the Counter variant)."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Label → <code>#C2CFE5</code>, chevron → <code>#9BC5FD</code>, CTA → <code>#9BC5FD</code>, counter bg stays <code>#EEF2F9</code> but label → <code>#C2CFE5</code>."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "State=Loading",
        "notes": "Icon becomes a neutral ring; label + trailing become 16 px pill placeholders filled with <code>#EEF2F9</code>."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Action rows are tap targets — a pressed state (row tint + possibly label darken) is a baseline expectation for native."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "TV / keyboard focus ring not defined. Android a11y also relies on it."
      }
    ],
    "resolved": [
      {
        "headline": "Three Action List components merged into Action Row.",
        "body": "v2.0: Rebuilt on node <code>4628:19843</code> in the 2026 Working File and renamed <strong>Action Row</strong>. Action List, Action List with Counter and Action List with Description are now one set: the counter is a <code>Trailing=Counter</code> value, and the description is part of the row rather than a separate component. Confirmed as a permanent merge by the component owner. (C4 · Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Variant matrix is orthogonal and complete.",
        "body": "v2.0: <code>Trailing</code> (CTA · Counter) × <code>State</code> (Default · Pressed · Disabled · Loading) × <code>Density</code> (Compact · Expanded) = <strong>16 variants</strong>, all authored. <code>Density</code> is used exactly as §1 defines it — adjusting row height and padding, 56px against 64px — rather than gating content. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Interaction states added.",
        "body": "v2.0: <code>State</code> now covers Default, Pressed, Disabled and Loading, where the original components had no state coverage at all. Pressed carries its own <code>#F6F9FD</code> surface. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Leading asset and counter are real Figma Slots.",
        "body": "v2.0: <code>Asset Slot</code> and <code>Counter Slot</code> are <code>SLOT</code> nodes, and the chevron and counter are library instances. Teams can drop in real content without detaching — the composition pattern the rest of the family has converged on. (C6 · Slot)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Frame naming aligned to the family.",
        "body": "v2.1: The two frames both called <code>Container</code> are now <code>Row</code> and <code>TrailingGroup</code>, and the spaced names are hyphenated to match the convention Toast, Upload File and Section Header settled on — <code>Asset-Slot</code>, <code>Counter-Slot</code>, <code>Text-Container</code>, <code>Icon-Container</code>, <code>Bottom-Stroke</code>. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Trailing</code> renamed to <code>TrailingContent</code>.",
        "body": "v2.1: The axis now carries the same name View Only Field uses for the same concept, satisfying §6 on consistent terminology. Any future component with a trailing area has one name to adopt rather than a choice between two. (C2 · Family)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Text and action layer naming completed.",
        "body": "v2.2: <code>#label</code> → <code>Label</code> and <code>#blurb</code> → <code>Description</code>, mapping onto §3 — the content is supporting text beneath a label rather than the promotional summary <code>Blurb</code> denotes. <code>leading icon</code> → <code>Leading-Icon</code> and <code>Action Button</code> → <code>Action-Button</code> complete the hyphenated convention. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>hasDescription</code> boolean added.",
        "body": "v2.3: Confirmed by the component owner — a <code>hasDescription</code> boolean now toggles the description line, restoring the label-only row the original Action List provided. Implemented as a boolean component property rather than a fourth variant axis, so the matrix stays at 16 rather than doubling. Not independently verifiable from the assessment tooling, which cannot read component property definitions. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Nested <code>Wrapper</code> collision resolved.",
        "body": "v2.3: The <code>Wrapper</code> frame nested inside another <code>Wrapper</code> in the Loading variants is now <code>Skeleton-Trailing</code>, naming what it actually holds. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Skeleton loader retained as authored.",
        "body": "v2.3: Closed by owner decision — the Loading variants keep their skeleton geometry as built, including the repeated <code>trailing icon</code> and <code>line</code> rectangle names. These are internal placeholder shapes with no property surface and no override target, so their names never reach a consumer or a Code Connect mapping — the same reasoning applied to View Only Field's wrapper frames. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is otherwise clean: three enums plus two swappable slots.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Record <code>State=Loading</code> under the existing State/Status exception.",
        "body": "<code>Loading</code> is a process status rather than an interaction state, the same shape as <code>Error</code> on the form fields. It falls under the exception already documented for that family rather than needing its own justification.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "list-—-icon-+-label-+-cta-+-chevron",
        "demoKey": "base",
        "demoControls": actionListDemoControls,
        "title": "List — icon + label + CTA + chevron",
        "node": "18577:14545",
        "description": "Baseline row. 6 variants (State × Density). Label in Neutral Dark Semibold 16. Trailing CTA text + 24 px chevron icon. 360 × 48 (compact) / 360 × 56 (expanded).",
        "previewHtml": "<div id=\"lit-spec-base\" style=\"width:360px;background:#FFFFFF;\"><div style=\"display:flex;align-items:center;gap:12px;padding:8px 12px;\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:16px;line-height:16px;font-weight:600;letter-spacing:0.25px;color:#0A2757;\">Label</div></div><span style=\"font-family:'Proxima Soft',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:#005CE5;flex-shrink:0;\">CTA</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "List — icon + label + CTA + chevron" },
              { "key": "State",   "value": "Default", "prop": "state" },
              { "key": "Density", "value": "Compact", "prop": "density" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",      "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Label", "value": "#0A2757", "token": "action-list/color/default/label",
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "action-list/color/disabled/label" }
                }
              },
              { "key": "Link", "value": "#005CE5", "token": "action-list/color/default/label-link",
                "variants": {
                  "state:disabled": { "value": "#9BC5FD", "token": "action-list/color/disabled/label-link" }
                }
              },
              { "key": "Chevron", "value": "#005CE5", "token": "action-list/color/default/chevron",
                "variants": {
                  "state:disabled": { "value": "#9BC5FD", "token": "action-list/color/disabled/chevron" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "48px", "mono": true,
                "variants": {
                  "density:expanded": { "value": "56px" }
                }
              },
              { "key": "Padding", "value": "8px 12px", "mono": true,
                "variants": {
                  "density:expanded": { "value": "12px 12px" }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",     "value": "Proxima Soft Semibold", "mono": true },
              { "key": "Size",     "value": "16px / 16px",           "mono": true },
              { "key": "Tracking", "value": "+0.25",                 "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "list---with-counter-—-icon-+-label-+-counter-+-chevron",
        "demoKey": "counter",
        "demoControls": actionListDemoControls,
        "title": "List - with Counter — icon + label + counter + chevron",
        "node": "18577:14637",
        "description": "Adds a trailing <a href=\"#\" onclick=\"showPanelById('counter');return false;\">Counter</a> pill. 6 variants (Density × State). Card-like container with <code>radius-2</code> (6 px) corners and <code>Depth/D0</code> drop-shadow — differs from the base's flat row. Label switches to Bold 18 Brand Blue. 360 × 56 / 360 × 64.",
        "previewHtml": "<div id=\"lit-spec-counter\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#005CE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "List - with Counter — icon + label + counter + chevron" },
              { "key": "State",   "value": "Default", "prop": "state" },
              { "key": "Density", "value": "Compact", "prop": "density" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",      "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Label", "value": "#005CE5", "token": "action-list/color/default/label-brand",
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "action-list/color/disabled/label" }
                }
              },
              { "key": "Counter", "value": "#005CE5", "token": "counter/color/filled/bg",
                "variants": {
                  "state:disabled": { "value": "#E5EBF4", "token": "counter/color/empty/bg" }
                }
              },
              { "key": "Chevron", "value": "#005CE5", "token": "action-list/color/default/chevron",
                "variants": {
                  "state:disabled": { "value": "#9BC5FD", "token": "action-list/color/disabled/chevron" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "56px", "mono": true,
                "variants": {
                  "density:expanded": { "value": "64px" }
                }
              },
              { "key": "Padding", "value": "11px 12px", "mono": true,
                "variants": {
                  "density:expanded": { "value": "15px 12px" }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",     "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size",     "value": "18px / 20px",       "mono": true },
              { "key": "Tracking", "value": "+0.25",             "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "list---with-description-—-icon-+-label-+-description-+-cta-+-chevron",
        "demoKey": "description",
        "demoControls": actionListDemoControls,
        "title": "List - with Description — icon + label + description + CTA + chevron",
        "node": "18577:14604",
        "description": "Adds a secondary description line under the label. 3 variants (State only — no Density axis). Label matches the base (Semibold 16 Neutral). Description uses Semibold 12 / tracking-wider / <code>main/action-list/color/default/description</code> (<code>#6780A9</code>). 360 × 60.",
        "previewHtml": "<div id=\"lit-spec-description\" style=\"width:360px;background:#FFFFFF;\"><div style=\"display:flex;align-items:center;gap:12px;padding:8px 12px;\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;gap:2px;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:16px;line-height:18px;font-weight:600;letter-spacing:0.25px;color:#0A2757;\">Label</div><div style=\"font-family:'Proxima Soft',system-ui;font-size:12px;line-height:16px;font-weight:600;letter-spacing:0.4px;color:#6780A9;\">Description</div></div><span style=\"font-family:'Proxima Soft',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:#005CE5;flex-shrink:0;\">CTA</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "List - with Description — icon + label + description + CTA + chevron" },
              { "key": "State",   "value": "Default", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",          "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Label", "value": "#0A2757", "token": "action-list/color/default/label",
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "action-list/color/disabled/label" }
                }
              },
              { "key": "Description", "value": "#6780A9", "token": "action-list/color/default/description",
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "action-list/color/disabled/description" }
                }
              },
              { "key": "Link", "value": "#005CE5", "token": "action-list/color/default/label-link",
                "variants": {
                  "state:disabled": { "value": "#9BC5FD", "token": "action-list/color/disabled/label-link" }
                }
              },
              { "key": "Chevron", "value": "#005CE5", "token": "action-list/color/default/chevron",
                "variants": {
                  "state:disabled": { "value": "#9BC5FD", "token": "action-list/color/disabled/chevron" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height",  "value": "60px",      "mono": true },
              { "key": "Padding", "value": "8px 12px", "mono": true,
                "variants": {
                  "density:expanded": { "value": "12px 12px" }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label font",       "value": "Proxima Soft Semibold · 16 / 18 · +0.25", "mono": true },
              { "key": "Description font", "value": "Proxima Soft Semibold · 12 / 16 · +0.4",  "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Default",
          "Disabled",
          "Loading"
        ],
        "rows": [
          {
            "role": "Row bg",
            "token": "main/action-list/color/default/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Label (base & with-description)",
            "token": "main/action-list/color/default/label",
            "values": [
              "#0A2757",
              "#C2CFE5",
              "—"
            ]
          },
          {
            "role": "Label (with-counter)",
            "token": "main/action-list/color/default/label-brand",
            "values": [
              "#005CE5",
              "#C2CFE5",
              "—"
            ]
          },
          {
            "role": "Description",
            "token": "main/action-list/color/default/description",
            "values": [
              "#6780A9",
              "#C2CFE5",
              "—"
            ]
          },
          {
            "role": "Trailing CTA label",
            "token": "main/action-list/color/default/label-link",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "—"
            ]
          },
          {
            "role": "Chevron",
            "token": "main/action-list/color/default/chevron",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "—"
            ]
          },
          {
            "role": "Counter bg",
            "token": "main/counter/color/filled/bg",
            "values": [
              "#EEF2F9",
              "#EEF2F9",
              "—"
            ]
          },
          {
            "role": "Counter label",
            "token": "main/counter/color/filled/label",
            "values": [
              "#072592",
              "#C2CFE5",
              "—"
            ]
          },
          {
            "role": "Skeleton fill",
            "token": "bg/color-bg-strong",
            "values": [
              "—",
              "—",
              "#EEF2F9"
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
            "role": "Frame width",
            "token": "—",
            "values": [
              "360px (fill container in product)"
            ]
          },
          {
            "role": "Row height — base",
            "token": "—",
            "values": [
              "48 (compact) / 56 (expanded)"
            ]
          },
          {
            "role": "Row height — with Counter",
            "token": "—",
            "values": [
              "56 (compact) / 64 (expanded)"
            ]
          },
          {
            "role": "Row height — with Description",
            "token": "—",
            "values": [
              "60 (no density axis)"
            ]
          },
          {
            "role": "Icon size",
            "token": "—",
            "values": [
              "32 × 32"
            ]
          },
          {
            "role": "Icon → label gap",
            "token": "space/space-12",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Wrapper padding (compact)",
            "token": "space/space-12 + 7/11",
            "values": [
              "12px / 7px (compact) · 12px / 11px (expanded)"
            ]
          },
          {
            "role": "Description gap",
            "token": "space/space-6",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Counter radius",
            "token": "radius/radius-round",
            "values": [
              "99999px (pill)"
            ]
          },
          {
            "role": "Counter size",
            "token": "—",
            "values": [
              "24 × 24 (filled) / h24 (empty)"
            ]
          },
          {
            "role": "Card radius (with Counter)",
            "token": "radius/radius-2",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Card shadow (with Counter)",
            "token": "Depth/D0",
            "values": [
              "0 1 3 0 · #E8EEF2C9"
            ]
          },
          {
            "role": "Chevron size",
            "token": "—",
            "values": [
              "24 × 24 (base + with-description) / 32 × 32 (with-counter)"
            ]
          },
          {
            "role": "Spacer annotations",
            "token": "—",
            "values": [
              "_space_2, _space_16 leak through (opacity 0)"
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
            "role": "Label — base & with-description",
            "token": "Primary/Label/Light/Base",
            "values": [
              "Proxima Soft Semibold · 16 / 16 · +0.25"
            ]
          },
          {
            "role": "Label — with-counter",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold · 18 / 18 · +0.25"
            ]
          },
          {
            "role": "Description",
            "token": "Primary/Multi-line Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold · 12 / 14 · +0.5"
            ]
          },
          {
            "role": "Trailing CTA",
            "token": "Primary/Label/Light/Base",
            "values": [
              "Proxima Soft Semibold · 16 / 16 · +0.25"
            ]
          },
          {
            "role": "Counter label",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold · 14 / 14 · +0.25"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:list:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "3 sibling components",
          "swift": "1 component: <code>List</code>",
          "compose": "EBActionListRow"
        },
        {
          "figma": "icon (Placeholder)",
          "swift": "leading (Slot)",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "label: String",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "description (only on sibling)",
          "swift": "description?: String",
          "compose": "description: String?"
        },
        {
          "figma": "trailingComponent (bool) / counter (bool) / chevron (bool)",
          "swift": "trailing: .cta(String) | .counter(Int) | .chevron | .none",
          "compose": "trailing: EBRowTrailing"
        },
        {
          "figma": "density: Compact/Expanded",
          "swift": "density: .compact / .expanded",
          "compose": ".controlSize(.regular / .large)"
        },
        {
          "figma": "state: Default/Disabled/Loading",
          "swift": "state: .default / .pressed / .disabled / .loading",
          "compose": ".disabled(Bool) + intrinsic press + loading: Bool"
        },
        {
          "figma": "bottomBorder: Bool",
          "swift": "bottomBorder: Bool",
          "compose": "divider: Bool"
        },
        {
          "figma": "(not modeled)",
          "swift": "onTap",
          "compose": "action: () -&gt; Void"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/List/EBActionListRow.swift",
        "compose": "android/components/list/EBActionListRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Base — icon + label + CTA + chevron</span>\n<span class=\"typ\">EBActionListRow</span>(<span class=\"str\">\"Payment methods\"</span>, <span class=\"prp\">trailing</span>: .<span class=\"prp\">cta</span>(<span class=\"str\">\"View\"</span>)) {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"creditcard.fill\"</span>)\n} action: { openPaymentMethods() }\n\n<span class=\"cmt\">// With counter — shows 3 pending items</span>\n<span class=\"typ\">EBActionListRow</span>(<span class=\"str\">\"Notifications\"</span>, <span class=\"prp\">trailing</span>: .<span class=\"prp\">counter</span>(<span class=\"kw\">3</span>)) {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"bell.fill\"</span>)\n} action: { openNotifications() }\n\n<span class=\"cmt\">// With description + chevron</span>\n<span class=\"typ\">EBActionListRow</span>(\n    <span class=\"str\">\"Profile\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Name, photo, and contact info\"</span>,\n    <span class=\"prp\">trailing</span>: .<span class=\"prp\">chevron</span>\n) {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"person.crop.circle\"</span>)\n} action: { openProfile() }\n\n<span class=\"cmt\">// Loading</span>\n<span class=\"typ\">EBActionListRow</span>.<span class=\"prp\">skeleton</span>()",
        "compose": "<span class=\"cmt\">// Base — icon + label + CTA + chevron</span>\n<span class=\"typ\">EBActionListRow</span>(\n    label = <span class=\"str\">\"Payment methods\"</span>,\n    leading = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.CreditCard, contentDescription = null) },\n    trailing = <span class=\"typ\">EBRowTrailing</span>.Cta(<span class=\"str\">\"View\"</span>),\n    onClick = { openPaymentMethods() }\n)\n\n<span class=\"cmt\">// With counter</span>\n<span class=\"typ\">EBActionListRow</span>(\n    label = <span class=\"str\">\"Notifications\"</span>,\n    leading = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Notifications, contentDescription = null) },\n    trailing = <span class=\"typ\">EBRowTrailing</span>.Counter(<span class=\"kw\">3</span>),\n    onClick = { openNotifications() }\n)\n\n<span class=\"cmt\">// With description + chevron</span>\n<span class=\"typ\">EBActionListRow</span>(\n    label = <span class=\"str\">\"Profile\"</span>,\n    description = <span class=\"str\">\"Name, photo, and contact info\"</span>,\n    leading = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Person, contentDescription = null) },\n    trailing = <span class=\"typ\">EBRowTrailing</span>.Chevron,\n    onClick = { openProfile() }\n)\n\n<span class=\"cmt\">// Loading</span>\n<span class=\"typ\">EBActionListRow</span>.Skeleton()"
      }
    ],
    "accessibility": [
      {
        "requirement": "Row as button",
        "ios": "Wrap row in <code>Button</code>; mark decorative leading icon with <code>.accessibilityHidden(true)</code>.",
        "android": "<code>Modifier.clickable { … }.semantics(mergeDescendants = true) { role = Role.Button }</code>."
      },
      {
        "requirement": "Combined label",
        "ios": "Announce label + description + trailing counter as one phrase: \"Notifications, 3 unread\".",
        "android": "Same — build via <code>contentDescription</code>."
      },
      {
        "requirement": "Touch target",
        "ios": "Minimum 44 × 44 — expanded density hits this; compact (48 px row) is safe; ensure whole row is the tap target, not just the chevron.",
        "android": "Minimum 48 × 48dp — same."
      },
      {
        "requirement": "Loading",
        "ios": "Announce \"Loading\" once; disable tap while loading.",
        "android": "Same — <code>enabled = false</code> plus <code>contentDescription = \"Loading\"</code>."
      },
      {
        "requirement": "Focus ring",
        "ios": "Provide a focused treatment for external keyboards.",
        "android": "Focus ring required for TV / external keyboards."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "3 sibling components for one pattern. Spacer annotations leak into production."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Inconsistent label typography across siblings. Counter sibling uses a different text style than its peers."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors / paddings bound to <code>main/action-list/*</code>, <code>space/*</code>, <code>radius/*</code> tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly once trailing is a single enum instead of three booleans across three components."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed / Focused. Disabled + Loading present."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Leading icon is a gray placeholder circle — move to a Figma Slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation. Mapping three siblings would cement the wrong schema."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "3 sibling components. Base + Counter multiply State (3) × Density (2) = 6 each. Description axis = State (3). Total <strong>6 + 6 + 3 = 15 variants</strong>.",
      "columns": [
        "Component",
        "Axes",
        "Count",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "<strong>List</strong>",
            "State (3) × Density (2)",
            "6",
            "18577:14545"
          ]
        },
        {
          "cells": [
            "<strong>List - with Counter</strong>",
            "Density (2) × State (3)",
            "6",
            "18577:14637"
          ]
        },
        {
          "cells": [
            "<strong>List - with Description</strong>",
            "State (3)",
            "3",
            "18577:14604"
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
      "header": "Initial Assessment · nodes 18577:14545, 18577:14637, 18577:14604",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Collapse 3 sibling components into one slot-driven <code>List</code> row. Reconcile label typography. Add Pressed state. <span class=\"tag-open tag-c1 tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — 3 siblings for 1 pattern</strong> — Description and Counter are <em>additive</em> features, not different components. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C1 — Spacer annotations leak</strong> — <code>_space_2</code> / <code>_space_16</code> are authoring artifacts exported as opacity-0 layers. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Divergent label typography</strong> — Semibold 16 Neutral vs. Bold 18 Brand across siblings. Same family must read as one. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Trailing baked per sibling</strong> — Replace CTA / Counter / Chevron booleans with a single <code>trailing</code> enum. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Missing Pressed state</strong> — Action rows are the primary nav tap target. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Placeholder icon</strong> — Leading is a gray <code>#C2C6CF</code> circle. Adopt a Figma Slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on consolidation. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — Colors / paddings / radii all bound to <code>main/action-list/*</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        }
      ]
    }
  ]
};
