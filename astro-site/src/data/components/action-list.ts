import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/action-list.js`.
// Panel mirrors the property panel of set 4628:19843, in its order: three
// variant axes, five booleans and the two text properties. Asset-Slot,
// Counter-Slot and Leading-Slot get no control.
const actionListDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'TrailingContent',
        prop: 'trailingcontent',
        defaultValue: 'cta',
        options: [
          { value: 'cta',     label: 'CTA' },
          { value: 'counter', label: 'Counter' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'loading',  label: 'Loading' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'pressed',  label: 'Pressed' },
        ],
      },
      {
        label: 'Density',
        prop: 'density',
        defaultValue: 'expanded',
        options: [
          { value: 'expanded', label: 'Expanded' },
          { value: 'compact',  label: 'Compact' },
        ],
      },
      { label: 'hasAsset', prop: 'hasasset', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasDescription', prop: 'hasdescription', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasLeadingComponent', prop: 'hasleadingcomponent', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasTrailingComponent', prop: 'hastrailingcomponent', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasBottomBorder', prop: 'hasbottomborder', control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'Title', prop: 'title', control: 'input', defaultValue: 'Label', options: [] },
      { label: 'Description', prop: 'description', control: 'input', defaultValue: 'description', options: [] },
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "al-spec-main",
        "demoKey": "main",
        "title": "Action Row",
        "node": "4628:19843",
        "description": "A 360-wide tappable row — asset, title, description and either a CTA label or a counter. It hugs its tallest column; Density adds 13 or 9 above and below.",
        "previewHtml": "<div id=\"action-list-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": actionListDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "TrailingContent",
                "value": "CTA",
                "prop": "trailingcontent"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "Density",
                "value": "Expanded",
                "prop": "density"
              },
              {
                "key": "hasAsset",
                "value": "True",
                "prop": "hasasset"
              },
              {
                "key": "hasDescription",
                "value": "True",
                "prop": "hasdescription"
              },
              {
                "key": "hasLeadingComponent",
                "value": "True",
                "prop": "hasleadingcomponent"
              },
              {
                "key": "hasTrailingComponent",
                "value": "True",
                "prop": "hastrailingcomponent"
              },
              {
                "key": "hasBottomBorder",
                "value": "False",
                "prop": "hasbottomborder"
              },
              {
                "key": "Title",
                "value": "Label",
                "prop": "title"
              },
              {
                "key": "Description",
                "value": "description",
                "prop": "description"
              },
              {
                "key": "⤷ Asset-Slot",
                "value": "Slot · 12 items",
                "variants": {
                  "hasasset:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Leading-Slot",
                "value": "Slot · 6 items — CTA label",
                "variants": {
                  "trailingcontent:counter": {
                    "value": "Slot · 6 items — Counter"
                  }
                }
              },
              {
                "key": "⤷ Counter-Slot",
                "value": "Slot · 6 items",
                "variants": {
                  "trailingcontent:cta": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "4628:19857 · 360 × 64",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Background",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF",
                "variants": {
                  "state:pressed": {
                    "value": "#F6F9FD",
                    "swatch": "#F6F9FD"
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "swatch": "#0A2757",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—",
                "swatch": "#6780A9",
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  },
                  "trailingcontent:counter": {
                    "value": "#90A8D0",
                    "swatch": "#90A8D0"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Asset",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF",
                "variants": {
                  "hasasset:false": {
                    "hide": true
                  },
                  "state:disabled": {
                    "value": "#EEF2F9",
                    "swatch": "#EEF2F9"
                  }
                }
              },
              {
                "key": "CTA label",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "trailingcontent:counter": {
                    "hide": true
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Counter",
                "value": "#EEF2F9 / #072592",
                "token": "—",
                "swatch": "#EEF2F9",
                "variants": {
                  "trailingcontent:cta": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Skeleton",
                "value": "#EEF2F9",
                "token": "—",
                "swatch": "#EEF2F9",
                "variants": {
                  "state:default": {
                    "hide": true
                  },
                  "state:pressed": {
                    "hide": true
                  },
                  "state:disabled": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Bottom border",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF",
                "variants": {
                  "hasbottomborder:false": {
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
                "key": "Size",
                "value": "360 × 64",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Width",
                "value": "360 — fixed",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12 sides · 13 top and bottom",
                "mono": true,
                "variants": {
                  "density:compact": {
                    "value": "12 sides · 9 top and bottom"
                  }
                }
              },
              {
                "key": "Row",
                "value": "336 × 38",
                "mono": true
              },
              {
                "key": "Row height",
                "value": "Tallest of asset 32 · text 38 · trailing 32",
                "mono": true
              },
              {
                "key": "CTA chevron",
                "value": "32 box centred at x 332",
                "mono": true,
                "variants": {
                  "trailingcontent:counter": {
                    "value": "32 box centred at x 300"
                  },
                  "hastrailingcomponent:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Asset-Slot",
                "value": "32 × 32 at x 12 · gap 12",
                "mono": true,
                "variants": {
                  "hasasset:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Text column",
                "value": "216 wide",
                "mono": true,
                "variants": {
                  "trailingcontent:counter": {
                    "value": "224 wide"
                  }
                }
              },
              {
                "key": "Title → description",
                "value": "gap 8",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "TrailingGroup",
                "value": "64 wide — CTA 30 + icon 32",
                "mono": true,
                "variants": {
                  "trailingcontent:counter": {
                    "value": "56 wide — icon 32 + counter 24"
                  }
                }
              },
              {
                "key": "Counter",
                "value": "24 × 24 · radius full",
                "mono": true,
                "variants": {
                  "trailingcontent:cta": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Loading skeleton",
                "value": "lines 206 × 16 and 206 × 6 · two 24 blocks",
                "mono": true,
                "variants": {
                  "state:default": {
                    "hide": true
                  },
                  "state:pressed": {
                    "hide": true
                  },
                  "state:disabled": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Bottom border",
                "value": "1px full width",
                "mono": true,
                "variants": {
                  "hasbottomborder:false": {
                    "hide": true
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
                "key": "Title",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Primary/Multi-line Label/Light/Fine",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBActionRow(\"Label\")\n    .ebDescription(\"description\")\n    .ebAsset { Image(\"asset\") }\n    .ebDensity(.expanded)\n    .ebCTA(\"CTA\")",
        "compose": "EBActionRow(\n    title = \"Label\",\n    description = \"description\",\n    asset = { Image(painterResource(R.drawable.asset), null) },\n    density = EBActionRowDensity.Expanded,\n    ctaLabel = \"CTA\",\n    onClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> across the 16 variants of set <code>4628:19843</code>. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled",
          "Loading"
        ],
        "rows": [
          {
            "role": "Background",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#F6F9FD",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Title",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Description (CTA)",
            "token": "—",
            "values": [
              "#6780A9",
              "#6780A9",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Description (Counter)",
            "token": "—",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Asset",
            "token": "—",
            "values": [
              "#D7E0EF",
              "#D7E0EF",
              "#EEF2F9",
              "#EEF2F9"
            ]
          },
          {
            "role": "CTA label",
            "token": "—",
            "values": [
              "#005CE5",
              "#005CE5",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Counter fill / value",
            "token": "—",
            "values": [
              "#EEF2F9 / #072592",
              "#EEF2F9 / #072592",
              "#EEF2F9 / #C2CFE5",
              "–"
            ]
          },
          {
            "role": "Skeleton",
            "token": "—",
            "values": [
              "–",
              "–",
              "–",
              "#EEF2F9"
            ]
          },
          {
            "role": "Bottom border",
            "token": "—",
            "values": [
              "#D7E0EF",
              "#D7E0EF",
              "#D7E0EF",
              "#D7E0EF"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:action-row:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.actionrow.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4628:19843</code>, in panel order, then the three SLOTs.",
      "rows": [
        {
          "figma": "TrailingContent — CTA, Counter",
          "swift": "<code>.ebCTA(String)</code> or <code>.ebCounter(Int)</code>",
          "compose": "<code>ctaLabel: String?</code> or <code>counter: Int?</code>"
        },
        {
          "figma": "State — Default, Loading, Disabled, Pressed",
          "swift": "<code>.ebLoading(true)</code>, <code>.disabled(true)</code>; Pressed is the row’s pressed style",
          "compose": "<code>loading = true</code>, <code>enabled = false</code>; Pressed from <code>interactionSource</code>"
        },
        {
          "figma": "Density — Expanded, Compact",
          "swift": "<code>.ebDensity(.expanded / .compact)</code>",
          "compose": "<code>density = EBActionRowDensity.Expanded / Compact</code>"
        },
        {
          "figma": "hasAsset — boolean",
          "swift": "<code>.ebAsset { }</code> — omit for False",
          "compose": "<code>asset: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasDescription — boolean",
          "swift": "<code>.ebDescription(String)</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "hasLeadingComponent — boolean",
          "swift": "the CTA label or counter itself",
          "compose": "<code>ctaLabel</code> / <code>counter</code> set to null"
        },
        {
          "figma": "hasTrailingComponent — boolean",
          "swift": "<code>.ebTrailingIcon(nil)</code> to drop the chevron",
          "compose": "<code>trailingIcon: EBIcon? = EBIcons.ChevronRight</code>"
        },
        {
          "figma": "hasBottomBorder — boolean",
          "swift": "<code>.ebBottomBorder(true)</code>",
          "compose": "<code>showsBottomBorder = true</code>"
        },
        {
          "figma": "Title / Description — text",
          "swift": "<code>EBActionRow(_ title: String)</code>, <code>.ebDescription</code>",
          "compose": "<code>title: String</code>, <code>description: String?</code>"
        },
        {
          "figma": "⤷ Asset-Slot — SLOT · 12 items (32 × 32)",
          "swift": "content of <code>.ebAsset</code>",
          "compose": "the value of <code>asset</code>"
        },
        {
          "figma": "⤷ Leading-Slot — SLOT · 6 items",
          "swift": "the CTA label",
          "compose": "the CTA label"
        },
        {
          "figma": "⤷ Counter-Slot — SLOT · 6 items (24 × 24)",
          "swift": "the counter badge",
          "compose": "the counter badge"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/ActionRow/EBActionRow.swift",
        "compose": "android/components/actionrow/EBActionRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "CTA · Expanded",
        "swift": "<span class=\"cmt\">// TrailingContent=CTA, State=Default, Density=Expanded — 4628:19857, 360 × 64.</span>\nEBActionRow(\"Linked accounts\")\n    .ebDescription(\"3 connected\")\n    .ebAsset { Image(\"bank\") }\n    .ebDensity(.expanded)\n    .ebCTA(\"Manage\")",
        "compose": "<span class=\"cmt\">// TrailingContent=CTA, State=Default, Density=Expanded — 4628:19857, 360 × 64.</span>\nEBActionRow(\n    title = \"Linked accounts\",\n    description = \"3 connected\",\n    asset = { Image(painterResource(R.drawable.bank), null) },\n    density = EBActionRowDensity.Expanded,\n    ctaLabel = \"Manage\",\n    onClick = { openAccounts() }\n)"
      },
      {
        "subheading": "Counter · Compact",
        "swift": "<span class=\"cmt\">// TrailingContent=Counter, State=Default, Density=Compact — 4628:19883, 360 × 56.</span>\nEBActionRow(\"Notifications\")\n    .ebDescription(\"Unread\")\n    .ebAsset { Image(\"bell\") }\n    .ebDensity(.compact)\n    .ebCounter(4)",
        "compose": "<span class=\"cmt\">// TrailingContent=Counter, State=Default, Density=Compact — 4628:19883, 360 × 56.</span>\nEBActionRow(\n    title = \"Notifications\",\n    description = \"Unread\",\n    asset = { Image(painterResource(R.drawable.bell), null) },\n    density = EBActionRowDensity.Compact,\n    counter = 4,\n    onClick = { openInbox() }\n)"
      },
      {
        "subheading": "Loading",
        "swift": "<span class=\"cmt\">// State=Loading — 4649:16639, 360 × 56 whatever Density says.</span>\nEBActionRow(\"Linked accounts\")\n    .ebLoading(true)",
        "compose": "<span class=\"cmt\">// State=Loading — 4649:16639, 360 × 56 whatever Density says.</span>\nEBActionRow(\n    title = \"Linked accounts\",\n    loading = true,\n    onClick = { }\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// State=Disabled, Density=Expanded — 4628:19952, 360 × 64.</span>\nEBActionRow(\"Linked accounts\")\n    .ebDescription(\"Unavailable\")\n    .ebCTA(\"Manage\")\n    .disabled(true)",
        "compose": "<span class=\"cmt\">// State=Disabled, Density=Expanded — 4628:19952, 360 × 64.</span>\nEBActionRow(\n    title = \"Linked accounts\",\n    description = \"Unavailable\",\n    ctaLabel = \"Manage\",\n    enabled = false,\n    onClick = { }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Row role",
        "ios": "Wrap as <code>Button</code>; the label reads title then description.",
        "android": "<code>Modifier.clickable(role = Role.Button)</code> with a merged <code>contentDescription</code>."
      },
      {
        "requirement": "Counter",
        "ios": "<code>.accessibilityValue(\"4 unread\")</code> — a bare digit is not enough.",
        "android": "Append the count to <code>stateDescription</code>."
      },
      {
        "requirement": "CTA",
        "ios": "The CTA is part of the row, not a second button — do not expose it separately unless it has its own action.",
        "android": "Same; keep one clickable per row."
      },
      {
        "requirement": "Loading",
        "ios": "<code>.accessibilityLabel(\"Loading\")</code> and hide the skeleton bars.",
        "android": "<code>contentDescription = \"Loading\"</code>; skeletons <code>clearAndSetSemantics {}</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Title #0A2757 is 14.58:1 on white. Description #6780A9 is 4.01:1 at 12pt and #90A8D0 2.41:1 — both below 4.5:1. The CTA #005CE5 is 5.10:1. Disabled #C2CFE5 is 1.57:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Expanded where the row carries a description, Compact in dense lists.",
        "dontText": "Don’t mix densities within one list."
      },
      {
        "doText": "Use the counter for an unread or pending count.",
        "dontText": "Don’t put a number in the CTA label — that is what the counter is for."
      },
      {
        "doText": "Turn on the bottom border when rows stack without a divider of their own.",
        "dontText": "Don’t double up a border and a list divider."
      },
      {
        "doText": "Use Loading while the row’s data is in flight.",
        "dontText": "Don’t leave Loading on a row that has nothing to fetch."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Wrapper</code>, <code>Row</code>, <code>Asset-Slot</code>, <code>Text-Container</code> and <code>TrailingGroup</code> are semantic, but <code>Leading-Slot</code> holds the trailing CTA and sits inside <code>TrailingGroup</code> — the name says the opposite of where it is."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Three PascalCase axes and five <code>has*</code> booleans over a complete 16-variant matrix, but <code>hasLeadingComponent</code> / <code>hasTrailingComponent</code> describe the slots inside the trailing group rather than the row’s own leading and trailing."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both text layers resolve <code>matched</code> — <code>Primary/Label/Base</code> and <code>Primary/Multi-line Label/Light/Fine</code>. The description uses two different greys depending on TrailingContent, and colour bindings cannot be read."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>EBActionRow</code> with a density enum, an asset slot and either a CTA label or a counter."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed, Disabled and Loading on both TrailingContent values and both densities."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Three real SLOTs — Asset (12 items), Leading and Counter (6 each) — plus a chevron instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Three axes, five booleans and three slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "<code>TrailingContent</code> (2) × <code>State</code> (4) × <code>Density</code> (2) = 16 variants, all built. The five booleans and two text properties add none. Loading is 56 tall in both densities.",
      "columns": [
        "TrailingContent",
        "State",
        "Density",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "CTA",
            "Default",
            "Expanded",
            "<code>4628:19857</code>",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "CTA",
            "Default",
            "Compact",
            "<code>4628:19844</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "CTA",
            "Pressed",
            "Expanded",
            "<code>4628:19870</code>",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "CTA",
            "Pressed",
            "Compact",
            "<code>4628:20022</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "CTA",
            "Disabled",
            "Expanded",
            "<code>4628:19952</code>",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "CTA",
            "Disabled",
            "Compact",
            "<code>4628:19939</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "CTA",
            "Loading",
            "Expanded",
            "<code>4649:16639</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "CTA",
            "Loading",
            "Compact",
            "<code>4649:16649</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "Counter",
            "Default",
            "Expanded",
            "<code>4628:19911</code>",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "Counter",
            "Default",
            "Compact",
            "<code>4628:19883</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "Counter",
            "Pressed",
            "Expanded",
            "<code>4628:19925</code>",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "Counter",
            "Pressed",
            "Compact",
            "<code>4628:19897</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "Counter",
            "Disabled",
            "Expanded",
            "<code>4628:19979</code>",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "Counter",
            "Disabled",
            "Compact",
            "<code>4628:19965</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "Counter",
            "Loading",
            "Expanded",
            "<code>4628:20016</code>",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "Counter",
            "Loading",
            "Compact",
            "<code>4628:20010</code>",
            "360 × 56"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Chevron alignment and a hugging height · node 4628:19843",
      "rows": [
        {
          "body": "<strong>Chevron re-centred on the set.</strong> Its 32 box sits at x 332 with a CTA and x 300 with a Counter, centred on the row — the preview had it 2px low and 3px left.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Height follows the content.</strong> The row is the tallest of the 32 asset, the text stack (16, plus 8 + 14 with a description) and the 32 trailing group, with Density adding 13 or 9 above and below — so 64 Expanded with everything on, 58 without the description, 42 with the label alone.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Those boolean-off heights are computed, not read.</strong> The set ships all five booleans on in every variant, so the hidden layers report stale coordinates. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 4628:19843",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>TrailingContent</code>, <code>State</code>, <code>Density</code>, five <code>has*</code> booleans and the <code>Title</code> / <code>Description</code> inputs. The three cards on retired nodes are replaced; the three SLOTs are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 wide with a 38-tall Row: Asset-Slot 32 at x 12, a 12 gap, the text column (216 with CTA, 224 with Counter), then the TrailingGroup — 64 wide for CTA (30 label + 32 icon), 56 for Counter (32 chevron + 24 counter).",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Density is vertical padding only</strong> — 13 top and bottom for Expanded (64 tall), 9 for Compact (56).",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>Title</code> → <code>Primary/Label/Base</code> and <code>Description</code> → <code>Primary/Multi-line Label/Light/Fine</code>, both matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:action-row:2.0.0</code>, a twelve-row mapping, four snippets and a 16-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Loading ignores Density.</strong> Both Loading variants are 56 tall, so an Expanded list jumps 8px when a row finishes loading. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>The description uses two different greys</strong> — #6780A9 with a CTA and #90A8D0 with a Counter — for the same layer in the same state. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong><code>Leading-Slot</code> holds the trailing CTA</strong> and sits inside <code>TrailingGroup</code>, so <code>hasLeadingComponent</code> controls something on the right-hand side. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Description contrast fails AA</strong> — #6780A9 is 4.01:1 and #90A8D0 2.41:1 at 12pt; Disabled #C2CFE5 is 1.57:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the earlier assessment.</strong> <span class=\"tag-open\">Open</span>",
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
