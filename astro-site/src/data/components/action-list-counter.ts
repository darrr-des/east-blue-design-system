import type { ComponentData } from '../types';

export const actionListCounter: ComponentData = {
  "meta": {
    "slug": "action-list-counter",
    "name": "Action List - with Counter",
    "node": "18577:14637",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-14637",
    "description": "Action-list row with a 32px leading icon, label, trailing chevron, and a trailing Counter pill.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Action List",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — fold into base Action List as a trailing slot",
      "text": "This variant sibling just adds an <code>EBCounter</code> to the base transaction row. That should be a <code>trailing</code> slot (or a <code>counter: Int?</code> parameter that swaps in a Counter) on the base component — not a second component with a duplicated 2 × 3 density/state matrix. Shipping as a sibling doubles maintenance cost on every token or layout change, and the same anti-pattern will repeat for the \"with Description\" sibling."
    }
  },
  "overview": {
    "inContextNote": "Used where a row needs to surface a pending count alongside the action — inbox folders, notification categories, or settings entries with outstanding items.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"240\" height=\"140\" viewBox=\"0 0 240 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"20\" y=\"8\" width=\"200\" height=\"124\" rx=\"12\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"120\" y=\"24\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"9\" font-weight=\"700\" font-family=\"system-ui\" opacity=\".7\">Inbox</text>\n          \n          <rect x=\"32\" y=\"36\" width=\"176\" height=\"24\" rx=\"5\" fill=\"#FFF\" stroke=\"#E8EEF2\" stroke-width=\"1\"></rect>\n          <circle cx=\"44\" cy=\"48\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <text x=\"56\" y=\"51\" fill=\"#005CE5\" font-size=\"8\" font-weight=\"700\" font-family=\"system-ui\">Notifications</text>\n          <path d=\"M172 45 176 48 172 51\" stroke=\"#005CE5\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <rect x=\"182\" y=\"42\" width=\"18\" height=\"12\" rx=\"6\" fill=\"#EEF2F9\"></rect>\n          <text x=\"191\" y=\"51\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">5</text>\n          \n          <rect x=\"32\" y=\"68\" width=\"176\" height=\"24\" rx=\"5\" fill=\"#FFF\" stroke=\"#E8EEF2\" stroke-width=\"1\"></rect>\n          <circle cx=\"44\" cy=\"80\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <text x=\"56\" y=\"83\" fill=\"#005CE5\" font-size=\"8\" font-weight=\"700\" font-family=\"system-ui\">Promos</text>\n          <path d=\"M172 77 176 80 172 83\" stroke=\"#005CE5\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <rect x=\"182\" y=\"74\" width=\"18\" height=\"12\" rx=\"6\" fill=\"#EEF2F9\"></rect>\n          <text x=\"191\" y=\"83\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">2</text>\n          \n          <rect x=\"32\" y=\"100\" width=\"176\" height=\"24\" rx=\"5\" fill=\"#FFF\" stroke=\"#E8EEF2\" stroke-width=\"1\"></rect>\n          <circle cx=\"44\" cy=\"112\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <text x=\"56\" y=\"115\" fill=\"#C2CFE5\" font-size=\"8\" font-weight=\"700\" font-family=\"system-ui\">Archive</text>\n          <path d=\"M172 109 176 112 172 115\" stroke=\"#9BC5FD\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <rect x=\"182\" y=\"106\" width=\"18\" height=\"12\" rx=\"6\" fill=\"#EEF2F9\"></rect>\n          <text x=\"191\" y=\"115\" text-anchor=\"middle\" fill=\"#C2CFE5\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">0</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"litc-demo-preview\"><div style=\"display:flex;align-items:center;gap:12px;width:360px;height:56px;padding:11px 12px;background:#FFF;border-radius:6px;box-shadow:0 1px 3px 0 #E8EEF2C9;box-sizing:border-box;\"><div style=\"width:32px;height:32px;border-radius:999px;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1;min-width:0;color:#005CE5;font-family:'BarkAda',system-ui;font-weight:700;font-size:18px;line-height:18px;letter-spacing:0.25px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">Notifications</div><div style=\"display:flex;align-items:center;gap:8px;flex-shrink:0;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M6 4l4 4-4 4\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></svg><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:999px;background:#EEF2F9;color:#072592;font-family:'HeyMeow Rnd',system-ui;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.25px;\">5</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Density</span><select class=\"demo-panel-select\" id=\"litc-demo-density\" onchange=\"updateLitcDemo()\"><option value=\"Compact\" selected=\"\">Compact</option><option value=\"Expanded\">Expanded</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"litc-demo-state\" onchange=\"updateLitcDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Disabled\">Disabled</option><option value=\"Loading\">Loading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" class=\"demo-panel-select demo-panel-input\" id=\"litc-demo-label\" value=\"Notifications\" oninput=\"updateLitcDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">count</span><input type=\"text\" class=\"demo-panel-select demo-panel-input\" id=\"litc-demo-count\" value=\"5\" oninput=\"updateLitcDemo()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Reusable on its own — but the reuse path collides with the base Transaction row. Teams have to pick between two near-identical components instead of one with a trailing slot. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own tokens, typography, and the trailing Counter composition. Nothing external needed to render."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>Density</code> is PascalCase; <code>State</code> is PascalCase here but <code>state</code> (lowercase) on Counter — inconsistent casing across the family. Loading skeleton is a generic strip instead of a trailing pill shape. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Composition happens at the wrong layer. The Counter is already a standalone component — \"row with a trailing Counter\" should be the consumer wiring two components together (or a trailing slot on the row), not a third component that hardcodes both. <span class=\"tag-open tag-c1\">C1</span>"
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Brand-blue label, brand-blue chevron, filled Counter pill (<code>#072592</code> on <code>#EEF2F9</code>)."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted label (<code>#C2CFE5</code>), muted chevron (<code>#9BC5FD</code>), empty Counter pill."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "State=Loading",
        "notes": "Avatar circle, long label skeleton, trailing 46 × 16 strip. The strip doesn't actually match the Counter pill shape — see open issue."
      },
      {
        "state": "Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "No pressed / focused variants on the row. Inherited gap — same issue as base Transaction row."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Duplicated variant matrix.",
        "body": "This sibling recreates the base row's 2 × 3 (<code>Density</code> × <code>State</code>) matrix just to bolt on a trailing Counter. Every future change to the base row (radius, padding, token rename) has to be mirrored here. Fold into the base row via a <code>trailing</code> slot or a <code>counter: Int?</code> parameter.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Property casing is inconsistent across the family.",
        "body": "<code>Density</code> and <code>State</code> use PascalCase, while the composed <code>Counter</code> child uses lowercase <code>state</code>. Pick one (recommend lowercase) and apply across every List Item and Counter property.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Loading skeleton doesn't match the trailing Counter shape.",
        "body": "The 46 × 16 strip is the generic \"trailing icon\" skeleton used on the base row — it doesn't look like a 24 × 24 pill. Either shape the skeleton to match or drop the Counter entirely in Loading (and let the skeleton stand in).",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No pressed / focused states.",
        "body": "Action rows are interactive targets; they need pressed and focused visuals for native parity. Missing on the base row too — fix once at the base.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the consolidation lands — wiring this sibling directly would entrench the duplication.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate into one <code>Action Row</code> component.",
        "body": "This file becomes a <code>trailing=counter</code> configuration of the unified <code>Action Row</code> (with a <code>counter: Int</code> value prop), alongside the \"with Description\" sibling mapped to <code>subtitle: String?</code>. Three components collapse into one with clean slot-based composition.",
        "tag": "Family"
      },
      {
        "headline": "Adopt a Figma Slot for the trailing area.",
        "body": "With the slot, this file's 6 variants disappear; consumers drop an existing <code>Counter</code> instance (node <code>18482:71321</code>) into the trailing slot of the base row. Maps cleanly to <code>@ViewBuilder trailing</code> (SwiftUI) / <code>trailing: @Composable () -&gt; Unit</code> (Compose) for Code Connect.",
        "tag": "Slot"
      },
      {
        "headline": "Normalize property casing.",
        "body": "Rename <code>Density</code> → <code>density</code> and <code>State</code> → <code>state</code> so the whole Transaction family (base, with Counter, with Description) matches the lowercase convention used on Counter and most of the DS.",
        "tag": "Rename"
      },
      {
        "headline": "Shape the Loading skeleton or omit the trailing.",
        "body": "If the base row's Loading skeleton stays, match the trailing skeleton to a 24 × 24 pill so consumers see the actual footprint. Easier path: drop the trailing skeleton and let the 46 × 16 strip stand in for all trailing content.",
        "tag": "State"
      },
      {
        "headline": "Add pressed / focused states at the base row.",
        "body": "Action rows are tappable; native parity requires pressed + focused visuals. Fix on the base Transaction row once, and every \"with X\" sibling (or slotted consumer) inherits it.",
        "tag": "State"
      },
      {
        "headline": "Document the migration path.",
        "body": "When the base row gets a trailing slot, deprecate this component and link consumers to the base row with Counter composition. Otherwise teams keep instancing the sibling and the duplication doesn't go away.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "compact-·-default-—-brand-label-+-filled-counter",
        "title": "Compact · Default — brand label + filled Counter",
        "node": "18577:14638",
        "description": "360 × 56. 32 px icon, brand-blue label, chevron, trailing 24 × 24 filled Counter pill.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:11px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#005CE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
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
                "value": "Compact · Default — brand label + filled Counter",
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
        "cardKey": "expanded-·-default-—-taller-row-variant",
        "title": "Expanded · Default — taller row variant",
        "node": "18577:14647",
        "description": "360 × 64. Same composition; 15 px vertical padding vs 11 px on Compact.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:15px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#005CE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
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
                "value": "Expanded · Default — taller row variant",
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
        "cardKey": "compact-·-disabled-—-muted-tokens",
        "title": "Compact · Disabled — muted tokens",
        "node": "18577:14656",
        "description": "Muted label, muted chevron, empty Counter pill.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:11px 12px;background:#F4F6FA;border-radius:6px;box-shadow:0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#E5EBF4;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#C2CFE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#E5EBF4;color:#C2CFE5;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;opacity:0.4;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Disabled",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Compact · Disabled — muted tokens",
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
                "value": "action-list/color/disabled/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "action-list/color/disabled/label",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "#9BC5FD",
                "mono": true
              },
              {
                "key": "Chevron token",
                "value": "action-list/color/disabled/chevron",
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
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "expanded-·-disabled-—-taller-muted-variant",
        "title": "Expanded · Disabled — taller muted variant",
        "node": "18577:14665",
        "description": "Expanded height + Disabled tokens.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:15px 12px;background:#F4F6FA;border-radius:6px;box-shadow:0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#E5EBF4;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#C2CFE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#E5EBF4;color:#C2CFE5;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;opacity:0.4;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Disabled",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Expanded · Disabled — taller muted variant",
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
                "value": "action-list/color/disabled/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "action-list/color/disabled/label",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "#9BC5FD",
                "mono": true
              },
              {
                "key": "Chevron token",
                "value": "action-list/color/disabled/chevron",
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
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "compact-·-loading-—-skeleton-row",
        "title": "Compact · Loading — skeleton row",
        "node": "18577:14674",
        "description": "Avatar circle + label line + 46 × 16 trailing strip. Strip shape doesn't match the Counter pill.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:11px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#EEF2F9;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"height:14px;width:120px;border-radius:4px;background:#EEF2F9;\"></div></div><div style=\"width:46px;height:16px;border-radius:8px;background:#EEF2F9;flex-shrink:0;\"></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Loading",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Compact · Loading — skeleton row",
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
                "key": "Skeleton",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Skeleton token",
                "value": "bg/color-bg-strong",
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
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.loading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Loading</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "expanded-·-loading-—-taller-skeleton-row",
        "title": "Expanded · Loading — taller skeleton row",
        "node": "18577:14679",
        "description": "Same skeleton with 16 px padding.",
        "previewHtml": "<div style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:16px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#EEF2F9;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"height:14px;width:140px;border-radius:4px;background:#EEF2F9;\"></div></div><div style=\"width:46px;height:16px;border-radius:8px;background:#EEF2F9;flex-shrink:0;\"></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Loading",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Expanded · Loading — taller skeleton row",
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
                "key": "Skeleton",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Skeleton token",
                "value": "bg/color-bg-strong",
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
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.loading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Loading</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
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
            "role": "Label",
            "token": "main/action-list/color/default/label-brand",
            "values": [
              "#005CE5",
              "–",
              "–"
            ]
          },
          {
            "role": "Label (disabled)",
            "token": "main/action-list/color/disabled/label",
            "values": [
              "–",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Chevron",
            "token": "main/action-list/color/default/chevron",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Counter bg",
            "token": "main/counter/color/filled/bg",
            "values": [
              "#EEF2F9",
              "#EEF2F9",
              "–"
            ]
          },
          {
            "role": "Counter label (filled)",
            "token": "main/counter/color/filled/label",
            "values": [
              "#072592",
              "–",
              "–"
            ]
          },
          {
            "role": "Counter label (empty)",
            "token": "main/counter/color/empty/label",
            "values": [
              "–",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Skeleton bar",
            "token": "bg/color-bg-strong",
            "values": [
              "–",
              "–",
              "#EEF2F9"
            ]
          },
          {
            "role": "Row shadow",
            "token": "Depth/D0",
            "values": [
              "drop-shadow(0 1 3 0 #E8EEF2C9)"
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
            "role": "Row width",
            "token": "—",
            "values": [
              "360px"
            ]
          },
          {
            "role": "Row height (Compact)",
            "token": "—",
            "values": [
              "56px"
            ]
          },
          {
            "role": "Row height (Expanded)",
            "token": "—",
            "values": [
              "64px"
            ]
          },
          {
            "role": "Row padding H",
            "token": "space/space-12",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Row padding V (Compact)",
            "token": "—",
            "values": [
              "11px"
            ]
          },
          {
            "role": "Row padding V (Expanded)",
            "token": "—",
            "values": [
              "15px"
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
            "role": "Label → trailing gap",
            "token": "space/space-16",
            "values": [
              "16px"
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
            "role": "Chevron size",
            "token": "—",
            "values": [
              "32 × 32"
            ]
          },
          {
            "role": "Counter size",
            "token": "—",
            "values": [
              "24 × 24 (min) · hugs digits"
            ]
          },
          {
            "role": "Counter pad H",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Counter radius",
            "token": "radius/radius-round",
            "values": [
              "pill (99999)"
            ]
          },
          {
            "role": "Row radius",
            "token": "radius/radius-2",
            "values": [
              "6px"
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
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold · 18 / 18 · +0.25"
            ]
          },
          {
            "role": "Counter",
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"kw\">import</span> EBDesignSystem"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:list:1.0.0\"</span>)\n}\n\n<span class=\"kw\">import</span> com.eastblue.ds.components.EBListItemTransaction"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(separate component)",
          "swift": "<code>trailing</code> Slot on base row",
          "compose": "@ViewBuilder trailing"
        },
        {
          "figma": "Density",
          "swift": "<code>density</code> (renamed)",
          "compose": "density: .compact | .expanded"
        },
        {
          "figma": "State",
          "swift": "<code>state</code> (renamed)",
          "compose": "state: .default | .disabled | .loading"
        },
        {
          "figma": "icon (bool)",
          "swift": "<code>leading</code> Slot",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "label",
          "swift": "<code>label</code>",
          "compose": "label: String"
        },
        {
          "figma": "chevron (bool)",
          "swift": "<code>chevron</code>",
          "compose": "chevron: Bool = true"
        },
        {
          "figma": "counter (bool)",
          "swift": "<em>derived</em> from trailing slot",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/List/EBListItemTransaction.swift",
        "compose": "android/components/list/EBListItemTransaction.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default — Compact density, trailing Counter</span>\n<span class=\"typ\">EBListItemTransaction</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Notifications\"</span>) {\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"N\"</span>)\n} trailing: {\n    <span class=\"typ\">EBCounter</span>(<span class=\"prp\">count</span>: unreadCount)\n}\n\n<span class=\"cmt\">// Expanded density</span>\n<span class=\"typ\">EBListItemTransaction</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Promos\"</span>) {\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"P\"</span>)\n} trailing: {\n    <span class=\"typ\">EBCounter</span>(<span class=\"prp\">count</span>: <span class=\"kw\">2</span>)\n}\n.<span class=\"fn\">density</span>(.<span class=\"prp\">expanded</span>)\n\n<span class=\"cmt\">// Disabled row — counter stays in empty state</span>\n<span class=\"typ\">EBListItemTransaction</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Archive\"</span>) {\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"A\"</span>)\n} trailing: {\n    <span class=\"typ\">EBCounter</span>(<span class=\"prp\">count</span>: <span class=\"kw\">0</span>)\n}\n.<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Loading — trailing slot omitted; skeleton fills</span>\n<span class=\"typ\">EBListItemTransaction</span>.<span class=\"fn\">loading</span>()",
        "compose": "<span class=\"cmt\">// Default — Compact density, trailing Counter</span>\n<span class=\"typ\">EBListItemTransaction</span>(\n    label = <span class=\"str\">\"Notifications\"</span>,\n    leading = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"N\"</span>) },\n    trailing = { <span class=\"typ\">EBCounter</span>(count = unreadCount) }\n)\n\n<span class=\"cmt\">// Expanded density</span>\n<span class=\"typ\">EBListItemTransaction</span>(\n    label = <span class=\"str\">\"Promos\"</span>,\n    density = <span class=\"typ\">EBListDensity</span>.<span class=\"prp\">Expanded</span>,\n    leading = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"P\"</span>) },\n    trailing = { <span class=\"typ\">EBCounter</span>(count = <span class=\"kw\">2</span>) }\n)\n\n<span class=\"cmt\">// Disabled row</span>\n<span class=\"typ\">EBListItemTransaction</span>(\n    label = <span class=\"str\">\"Archive\"</span>,\n    enabled = <span class=\"kw\">false</span>,\n    leading = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"A\"</span>) },\n    trailing = { <span class=\"typ\">EBCounter</span>(count = <span class=\"kw\">0</span>) }\n)\n\n<span class=\"cmt\">// Loading — trailing slot omitted; skeleton fills</span>\n<span class=\"typ\">EBListItemTransaction</span>(state = <span class=\"typ\">EBListState</span>.<span class=\"prp\">Loading</span>)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Row role",
        "ios": "Wrap in <code>Button</code> / <code>NavigationLink</code> for tappable semantics",
        "android": "Apply <code>Modifier.clickable(...)</code> + <code>Role.Button</code>"
      },
      {
        "requirement": "Counter label",
        "ios": "Compose accessibility label: <code>\"Notifications, 5 unread\"</code> — don't let VoiceOver read the digit alone",
        "android": "Merge into row: <code>contentDescription = \"Notifications, 5 unread\"</code>"
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> — drops from hit-testing + dims label/chevron/counter",
        "android": "<code>enabled = false</code> on clickable modifier"
      },
      {
        "requirement": "Loading",
        "ios": "Announce <code>\"Loading\"</code>; hide skeleton children from a11y tree",
        "android": "<code>Modifier.semantics { liveRegion = Polite }</code> + hide skeletons"
      },
      {
        "requirement": "Chevron",
        "ios": "Decorative — <code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Sibling duplicates the base Transaction row matrix. Consolidate via trailing slot."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Density</code>/<code>State</code> PascalCase mismatches lowercase Counter and most of DS."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors + spacing bound. Uses <code>main/action-list/*</code> + <code>main/counter/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "HStack/Row maps cleanly. Loading skeleton's 46 × 16 trailing strip doesn't match a Counter pill."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No pressed / focused variants — inherited from base row."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Chevron is a vector instance; icon is a swap placeholder — same pattern as other List Items."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Do not wire this sibling — map the base row with trailing slot after consolidation."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 6,
      "description": "<code>Density</code> (2) × <code>State</code> (3) = <strong>6 variants</strong>. Identical matrix to the base Transaction row.",
      "columns": [
        "#",
        "Density",
        "State",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "Compact",
            "Default",
            "18577:14638",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "2",
            "Expanded",
            "Default",
            "18577:14647",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "3",
            "Compact",
            "Disabled",
            "18577:14656",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "4",
            "Expanded",
            "Disabled",
            "18577:14665",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "5",
            "Compact",
            "Loading",
            "18577:14674",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "6",
            "Expanded",
            "Loading",
            "18577:14679",
            "360 × 64"
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
      "header": "Initial Assessment · node 18577:14637",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Sibling of base Action List; duplicates the 2 × 3 density/state matrix just to add a trailing Counter. Fold into base via a trailing slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — Duplicated matrix</strong> — 6 variants re-created instead of using a slot on the base. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — PascalCase naming</strong> — <code>Density</code>/<code>State</code> mismatch lowercase <code>state</code> on composed Counter. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Loading skeleton shape</strong> — 46 × 16 trailing strip doesn't match a 24 × 24 Counter pill. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Not mapped; wait for consolidation so the mapping targets the base row. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
