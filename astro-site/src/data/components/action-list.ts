import type { ComponentData } from '../types';

export const actionList: ComponentData = {
  "meta": {
    "slug": "action-list",
    "name": "Action List",
    "node": "18577:14545",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-14545",
    "description": "A row primitive used in lists of tappable rows — title, optional trailing CTA, and chevron.",
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
    "navGroup": "Action List",
    "verdict": {
      "kind": "restructure",
      "title": "Collapse 3 siblings into one slot-driven row",
      "text": "The three components differ by <em>presence</em> — a description line, a trailing counter — not by role. Replace with one <code>List</code> component with <code>description?: String</code>, <code>trailing: .cta | .counter | .chevron | .none</code>, plus a named <code>leading</code> slot for the icon. Align label typography across the family (currently Semibold 16 Neutral vs. Bold 18 Brand). Add a Pressed state — these rows are primary nav targets. Reconcile with <a href=\"/components/list-item\">List Item</a> (display-only body rows) and clarify when to use which."
    }
  },
  "overview": {
    "inContextNote": "Action-list rows stack inside Settings / Profile / Help menus. A typical screen mixes variants with/without description and with/without trailing counter.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Settings</text>\n          \n          <circle cx=\"44\" cy=\"38\" r=\"3\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"50\" y=\"35\" width=\"40\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <text x=\"146\" y=\"40\" fill=\"#005CE5\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">View</text>\n          <path d=\"M158 37l2 2-2 2\" stroke=\"#005CE5\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n          \n          <circle cx=\"44\" cy=\"54\" r=\"3\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"50\" y=\"51\" width=\"52\" height=\"5\" rx=\"1\" fill=\"#005CE5\" opacity=\".9\"></rect>\n          <rect x=\"146\" y=\"50\" width=\"10\" height=\"7\" rx=\"3.5\" fill=\"#EEF2F9\"></rect>\n          <text x=\"151\" y=\"56\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"4.5\" font-weight=\"700\" font-family=\"system-ui\">3</text>\n          \n          <circle cx=\"44\" cy=\"70\" r=\"3\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"50\" y=\"67\" width=\"36\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"50\" y=\"74\" width=\"60\" height=\"3\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <path d=\"M158 69l2 2-2 2\" stroke=\"#0A2757\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n          \n          <rect x=\"40\" y=\"90\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"52\" y=\"91\" width=\"80\" height=\"5\" rx=\"1\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"146\" y=\"91\" width=\"14\" height=\"5\" rx=\"1\" fill=\"#EEF2F9\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"lit-demo-preview\"><div style=\"width:360px;background:#FFFFFF;\"><div style=\"display:flex;align-items:center;gap:12px;padding:8px 12px;\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;opacity:1;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;gap:6px;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:16px;line-height:16px;font-weight:600;letter-spacing:0.25px;color:#0A2757;\">Label</div></div><span style=\"font-family:'Proxima Soft',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:#005CE5;flex-shrink:0;\">CTA</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Shape</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><select class=\"demo-panel-select\" id=\"lit-ctrl-variant\" onchange=\"updateLitDemo()\"><option value=\"base\" selected=\"\">base (List)</option><option value=\"counter\">with Counter</option><option value=\"description\">with Description</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" id=\"lit-ctrl-state\" onchange=\"updateLitDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option><option value=\"loading\">Loading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">density</span><select class=\"demo-panel-select\" id=\"lit-ctrl-density\" onchange=\"updateLitDemo()\"><option value=\"compact\" selected=\"\">Compact</option><option value=\"expanded\">Expanded</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"lit-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"updateLitDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"lit-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"description\" oninput=\"updateLitDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">counter</span><input type=\"text\" id=\"lit-ctrl-counter\" class=\"demo-panel-select demo-panel-input\" value=\"3\" oninput=\"updateLitDemo()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used across Settings, Help Center, Profile, Wallet sub-screens. Covers the main action-list row patterns."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Colors and padding bound to <code>main/action-list/*</code> tokens. Loading skeleton uses <code>bg/color-bg-strong</code> for placeholders. Leaked internal spacer annotations (<code>_space_2</code>, <code>_space_16</code>) are rendered inside production instances. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Three sibling components encode a single row pattern by presence. Label typography diverges: <code>List</code> and <code>List - with Description</code> use Semibold 16 Neutral (<code>#0A2757</code>); <code>List - with Counter</code> uses Bold 18 Brand Blue (<code>#005CE5</code>). <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Leading icon is an always-gray placeholder circle, not a Figma Slot. Trailing content is baked into each sibling rather than driven by a <code>trailing</code> enum. <span class=\"tag-open tag-c4\">C4</span> <span class=\"tag-open tag-c6\">C6</span>"
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
    "resolved": [],
    "open": [
      {
        "headline": "Three sibling components for one row pattern.",
        "body": "<code>List</code>, <code>List - with Counter</code>, and <code>List - with Description</code> differ only by the presence of a description line and/or a trailing counter. Collapse into a single <code>List</code> component with optional <code>description</code> and a <code>trailing</code> union.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Label typography diverges across the family.",
        "body": "<code>List</code> + <code>List - with Description</code> use Proxima Soft Semibold 16 / Neutral Dark (<code>#0A2757</code>). <code>List - with Counter</code> uses Proxima Soft Bold 18 / Brand Blue (<code>#005CE5</code>). Same row family should read as one thing. Pick one token (<code>label</code> or <code>label-brand</code>) and one size.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Leaked spacer annotation layers.",
        "body": "Internal <code>_space_2</code> (<code>4115:3220</code>) and <code>_space_16</code> (<code>21:40139</code>) annotation frames are rendered as opacity-0 layers inside every production instance. Artifacts of authoring, not part of the public component. Remove or move to a separate documentation artboard.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Leading icon is a gray placeholder.",
        "body": "All three siblings default to a <code>#C2C6CF</code> filled 32 px circle under a frame named <em>Placeholder</em>. Same instance-swap anti-pattern as <a href=\"#\" onclick=\"showPanelById('list-item');return false;\">List Item</a>. Adopt a Figma Slot so consumers can drop in a real icon (or an Avatar).",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No Pressed state.",
        "body": "These rows are the primary tap surface for navigation menus. The State enum exposes only Default / Disabled / Loading. Add Pressed (tinted bg and/or chevron darken).",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Trailing content is baked per sibling.",
        "body": "CTA text lives on the base, a filled Counter lives on the Counter sibling, and a chevron appears only sometimes. Introduce a <code>trailing</code> enum (<code>.cta(String) | .counter(Int) | .chevron | .none</code>) so one component covers all three patterns. Maps cleanly to native enums.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on the consolidation + slot adoption. Adding mappings for three siblings would cement the wrong schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate into one <code>Action Row</code> component.",
        "body": "One component with properties <code>title: String</code>, <code>subtitle?: String</code> (replaces \"with Description\"), <code>trailing: chevron | counter | switch | badge | none</code> (replaces \"with Counter\"), <code>state: default | pressed | disabled | loading</code>, plus a <code>leading</code> slot for icon/avatar. Replaces 15 variants across 3 components with clean slot-based composition.",
        "tag": "Family"
      },
      {
        "headline": "Add a <code>leading</code> Figma Slot for the icon.",
        "body": "Maps 1:1 to <code>@ViewBuilder</code> (SwiftUI) and a <code>@Composable</code> slot (Compose). Accepts Icon, Avatar, or a custom 32 px component. Remove the placeholder fill entirely — empty slot means no leading.",
        "tag": "Slot"
      },
      {
        "headline": "Reconcile label typography.",
        "body": "Pick one: either Neutral Dark Semibold 16 (matches <code>List Item</code> + most action rows) or Brand Blue Bold 18 (matches the current Counter sibling). Neutral is the safer default — Brand Blue reads like a <em>link</em>, which the whole row already behaves as. Apply the choice to all three shapes.",
        "tag": "Token"
      },
      {
        "headline": "Add Pressed (and ideally Focused) states.",
        "body": "Pressed = <code>bg</code> tints to <code>#F4F6FA</code>, chevron / CTA darkens one step. Focused = 2 px brand ring at 2 px offset. Baseline for native row components.",
        "tag": "State"
      },
      {
        "headline": "Remove <code>_space_2</code> / <code>_space_16</code> spacer annotations.",
        "body": "These are authoring artifacts. Move to a separate \"Annotations\" artboard or delete once the auto-layout is settled. They export as opacity-0 layers to consumers.",
        "tag": "Composition"
      },
      {
        "headline": "Disambiguate vs <code>List Item</code>.",
        "body": "This component is <em>tappable action navigation</em> (icon + label + trailing CTA/counter/chevron). <code>List Item</code> is <em>display body rows</em> (bullet + text for terms/steps). Document the distinction and cross-link the two — today the names don't telegraph which is which.",
        "tag": "Docs"
      },
      {
        "headline": "Rename the family to <code>Action Row</code>.",
        "body": "\"Action List\" implies a collection, but each component here is a single row. Native name: <code>EBActionRow</code>. Disambiguates from the <code>List</code> container (scroll primitive) and the <code>List Item</code> display rows (terms/steps). Single-component consolidation eliminates the \"with X\" naming pattern entirely.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "list-—-icon-+-label-+-cta-+-chevron",
        "title": "List — icon + label + CTA + chevron",
        "node": "18577:14545",
        "description": "Baseline row. 6 variants (State × Density). Label in Neutral Dark Semibold 16. Trailing CTA text + 24 px chevron icon. 360 × 48 (compact) / 360 × 56 (expanded).",
        "previewHtml": "<div style=\"width:360px;background:#FFFFFF;\"><div style=\"display:flex;align-items:center;gap:12px;padding:8px 12px;\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:16px;line-height:16px;font-weight:600;letter-spacing:0.25px;color:#0A2757;\">Label</div></div><span style=\"font-family:'Proxima Soft',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:#005CE5;flex-shrink:0;\">CTA</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
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
                "value": "List — icon + label + CTA + chevron",
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
                "value": "action-list/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "action-list/color/default/label",
                "mono": true
              },
              {
                "key": "Link",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Link token",
                "value": "action-list/color/default/label-link",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Chevron token",
                "value": "action-list/color/default/chevron",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48 / 56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Chevron size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Hit target",
                "value": "full row",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "list---with-counter-—-icon-+-label-+-counter-+-chevron",
        "title": "List - with Counter — icon + label + counter + chevron",
        "node": "18577:14637",
        "description": "Adds a trailing <a href=\"#\" onclick=\"showPanelById('counter');return false;\">Counter</a> pill. 6 variants (Density × State). Card-like container with <code>radius-2</code> (6 px) corners and <code>Depth/D0</code> drop-shadow — differs from the base's flat row. Label switches to Bold 18 Brand Blue. 360 × 56 / 360 × 64.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#005CE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
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
                "value": "List - with Counter — icon + label + counter + chevron",
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
                "value": "action-list/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "action-list/color/default/label",
                "mono": true
              },
              {
                "key": "Link",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Link token",
                "value": "action-list/color/default/label-link",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Chevron token",
                "value": "action-list/color/default/chevron",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48 / 56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Chevron size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Hit target",
                "value": "full row",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "list---with-description-—-icon-+-label-+-description-+-cta-+-chevron",
        "title": "List - with Description — icon + label + description + CTA + chevron",
        "node": "18577:14604",
        "description": "Adds a secondary description line under the label. 3 variants (State only — no Density axis). Label matches the base (Semibold 16 Neutral). Description uses Semibold 12 / tracking-wider / <code>main/action-list/color/default/description</code> (<code>#6780A9</code>). 360 × 60.",
        "previewHtml": "<div style=\"width:360px;background:#FFFFFF;\"><div style=\"display:flex;align-items:center;gap:12px;padding:8px 12px;\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;gap:2px;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:16px;line-height:18px;font-weight:600;letter-spacing:0.25px;color:#0A2757;\">Label</div><div style=\"font-family:'Proxima Soft',system-ui;font-size:12px;line-height:16px;font-weight:600;letter-spacing:0.4px;color:#6780A9;\">Description</div></div><span style=\"font-family:'Proxima Soft',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:#005CE5;flex-shrink:0;\">CTA</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
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
                "value": "List - with Description — icon + label + description + CTA + chevron",
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
                "value": "action-list/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "action-list/color/default/label",
                "mono": true
              },
              {
                "key": "Link",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Link token",
                "value": "action-list/color/default/label-link",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Chevron token",
                "value": "action-list/color/default/chevron",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48 / 56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Chevron size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Hit target",
                "value": "full row",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              }
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
