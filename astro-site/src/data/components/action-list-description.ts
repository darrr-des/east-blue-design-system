import type { ComponentData } from '../types';

export const actionListDescription: ComponentData = {
  "meta": {
    "slug": "action-list-description",
    "name": "Action List - with Description",
    "node": "18577:14604",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-14604",
    "description": "Action-list row with a primary label and a secondary description line beneath it.",
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
    "navGroup": "Action List"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Description rows appear in settings lists, notification preferences, and profile menus where each row needs a subtitle explaining the action.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"140\" viewBox=\"0 0 200 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Notifications</text>\n          \n          <circle cx=\"48\" cy=\"44\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"60\" y=\"38\" width=\"48\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"60\" y=\"46\" width=\"62\" height=\"4\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <text x=\"148\" y=\"44\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"600\" font-family=\"system-ui\">Edit</text>\n          \n          <circle cx=\"48\" cy=\"74\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"60\" y=\"68\" width=\"60\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"60\" y=\"76\" width=\"72\" height=\"4\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <text x=\"148\" y=\"74\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"600\" font-family=\"system-ui\">On</text>\n          \n          <circle cx=\"48\" cy=\"104\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <rect x=\"60\" y=\"98\" width=\"54\" height=\"5\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"60\" y=\"106\" width=\"66\" height=\"4\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <text x=\"148\" y=\"104\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"600\" font-family=\"system-ui\">Off</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"litd-demo-preview\"><div style=\"display:flex;align-items:center;padding:12px;width:360px;background:#FFF;box-sizing:border-box;\"><div style=\"display:flex;align-items:flex-start;gap:12px;flex:1;min-width:0;\"><div style=\"padding-top:2px;flex:0 0 auto;\"><div style=\"width:32px;height:32px;border-radius:99px;background:#C2C6CF;\"></div></div><div style=\"display:flex;flex-direction:column;gap:6px;flex:1;min-width:0;justify-content:center;\"><div style=\"font-family:'Proxima Soft', system-ui;font-weight:600;font-size:16px;line-height:16px;letter-spacing:0.25px;color:#0A2757;\">Label</div><div style=\"font-family:'Proxima Soft', system-ui;font-weight:600;font-size:12px;line-height:14px;letter-spacing:0.5px;color:#6780A9;\">description</div></div></div><div style=\"padding-left:8px;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:16px;letter-spacing:0.25px;color:#005CE5;flex:0 0 auto;\">CTA</div><div style=\"padding:4px;flex:0 0 auto;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" id=\"litd-demo-state\" onchange=\"updateListItemTdDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Disabled\">Disabled</option><option value=\"Loading\">Loading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">icon</span><select class=\"demo-panel-select\" id=\"litd-demo-icon\" onchange=\"updateListItemTdDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailingComponent</span><select class=\"demo-panel-select\" id=\"litd-demo-trailing\" onchange=\"updateListItemTdDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">chevron</span><select class=\"demo-panel-select\" id=\"litd-demo-chevron\" onchange=\"updateListItemTdDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">bottomBorder</span><select class=\"demo-panel-select\" id=\"litd-demo-border\" onchange=\"updateListItemTdDemo()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Works for any settings or notification list row with a subtitle. Duplicates base List's anatomy instead of reusing it — a <code>description</code> slot on the base component would handle this."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own text styles (<code>Primary/Label/Light/Base</code> + <code>Primary/Multi-line Label/Light/Fine</code>), background, and spacing."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Ships only 3 states vs base List's 6 (missing Density axis). Leading asset is a raw <code>#c2c6cf</code> circle placeholder, not an instance of List Item Asset. <span class=\"tag-open tag-c5\">C5</span> <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Exists as a standalone sibling of base List rather than a compositional variant — bloats the library and forces consumers to swap entire components just to add a subtitle. <span class=\"tag-open tag-c4\">C4</span>"
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "na",
        "android": "na",
        "property": "state=Default",
        "notes": "Label <code>#0A2757</code>, description <code>#6780A9</code>"
      },
      {
        "state": "Disabled",
        "ios": "no",
        "android": "na",
        "property": "state=Disabled",
        "notes": "Label + description both recolor to <code>#c2cfe5</code>, CTA to <code>#9bc5fd</code>"
      },
      {
        "state": "Loading",
        "ios": "na",
        "android": "na",
        "property": "state=Loading",
        "notes": "Two shimmer lines replace text; trailing icon becomes a 53px shimmer block"
      },
      {
        "state": "Pressed",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Missing — native pressed token should map to <code>main/action-list/color/pressed/bg</code> (to be added) <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Sibling component duplicates base List anatomy.",
        "body": "A 12/14 description line is a single optional parameter on every native list primitive (SwiftUI secondary label, Material <code>supportingContent</code>). Standalone sibling forces consumers to swap whole components instead of flipping one prop.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Leading asset is a raw <code>#c2c6cf</code> placeholder.",
        "body": "The icon container is a 32px filled circle with a hard-coded gray — not an instance of List Item Asset, not bound to a token. Consumers can override via instance-swap but the default is visually broken.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Missing Density axis.",
        "body": "Base List ships <code>Density=Compact</code> (48px) and <code>Density=Expanded</code> (56px). This variant skips the axis entirely, producing a 70–76px row with no Compact counterpart.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No Pressed state.",
        "body": "Only Default / Disabled / Loading are modeled. Action lists are tappable — pressed styling should live in Figma as a token so native <code>.pressed</code> / <code>ripple</code> can reference it.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until family consolidation lands — no point mapping a component that will be removed.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate into one <code>Action Row</code> component.",
        "body": "This file becomes a <code>subtitle: String?</code> configuration of the unified <code>Action Row</code>, alongside the \"with Counter\" sibling mapped to <code>trailing=counter</code>. Three components collapse into one with clean slot-based composition.",
        "tag": "Family"
      },
      {
        "headline": "Replace the leading-icon placeholder with a Figma Slot.",
        "body": "The raw 32px <code>#c2c6cf</code> circle should become a named <code>leading</code> slot accepting any List Item Asset instance or a 32 × 32 icon. Maps 1:1 to SwiftUI <code>@ViewBuilder leading</code> / Compose <code>leadingContent</code>.",
        "tag": "Slot"
      },
      {
        "headline": "Add Density × Pressed coverage to the merged component.",
        "body": "The consolidated Action List should carry Compact (48px) + Expanded (56px) from base List, plus a Pressed visual state so tokens like <code>main/action-list/color/pressed/bg</code> exist for native ripple/highlight.",
        "tag": "State"
      },
      {
        "headline": "Rename the family to <code>Action Row</code>.",
        "body": "\"Action List\" implies a collection; each component here is a single row. Native name: <code>EBActionRow</code>. Tokens can stay under <code>main/action-list/...</code> or be renamed to <code>main/action-row/...</code> for consistency.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "state=default",
        "title": "State=Default",
        "node": "18577:14605",
        "description": "Active row. Leading icon + label + description + optional CTA + chevron.",
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
                "value": "State=Default",
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
        "cardKey": "state=disabled",
        "title": "State=Disabled",
        "node": "18577:14617",
        "description": "Non-interactive. Label + description recolor to <code>#c2cfe5</code>; CTA + chevron use <code>#9bc5fd</code>.",
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
                "value": "State=Disabled",
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
        "cardKey": "state=loading",
        "title": "State=Loading",
        "node": "18577:14629",
        "description": "Skeleton. Two shimmer lines replace text; trailing is a 53px shimmer block.",
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
                "value": "State=Loading",
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
            "token": "main/action-list/color/{state}/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Label",
            "token": "main/action-list/color/{state}/label",
            "values": [
              "#0A2757",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Description",
            "token": "main/action-list/color/{state}/description",
            "values": [
              "#6780A9",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "CTA label",
            "token": "main/action-list/color/default/label-link",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Chevron",
            "token": "main/action-list/color/{state}/chevron",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Skeleton line / block",
            "token": "bg/color-bg-strong",
            "values": [
              "–",
              "–",
              "#EEF2F9"
            ]
          },
          {
            "role": "Leading placeholder",
            "token": "—",
            "values": [
              "#C2C6CF",
              "#C2C6CF",
              "–"
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
              "360px (fixed)"
            ]
          },
          {
            "role": "Row height",
            "token": "—",
            "values": [
              "60px (hug, 2 text lines + 6px gap)"
            ]
          },
          {
            "role": "Outer padding (Default / Disabled)",
            "token": "space/space-12",
            "values": [
              "12px all sides"
            ]
          },
          {
            "role": "Loading padding",
            "token": "space/space-12, space/space-24",
            "values": [
              "14px vertical · 12px left · 24px right"
            ]
          },
          {
            "role": "Icon → text gap",
            "token": "space/space-12",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Label → description gap",
            "token": "space/space-6",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Leading icon size",
            "token": "—",
            "values": [
              "32 × 32"
            ]
          },
          {
            "role": "Chevron wrapper padding",
            "token": "space/space-4",
            "values": [
              "4px top/bottom · 4px left/right"
            ]
          },
          {
            "role": "Chevron icon size",
            "token": "—",
            "values": [
              "24 × 24"
            ]
          },
          {
            "role": "Corner radius",
            "token": "radius/radius-0",
            "values": [
              "0 (square)"
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
            "token": "Primary/Label/Light/Base",
            "values": [
              "Proxima Soft Semibold · 16 / 16 · tracking 0.25"
            ]
          },
          {
            "role": "Description",
            "token": "Primary/Multi-line Label/Light/Fine",
            "values": [
              "Proxima Soft Semibold · 12 / 14 · tracking 0.5"
            ]
          },
          {
            "role": "CTA",
            "token": "Primary/Label/Light/Base",
            "values": [
              "Proxima Soft Semibold · 16 / 16 · tracking 0.25"
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
          "figma": "label",
          "swift": "title: String",
          "compose": "title: String"
        },
        {
          "figma": "description?",
          "swift": "subtitle: String?",
          "compose": "supportingContent: String?"
        },
        {
          "figma": "icon (Slot)",
          "swift": "@ViewBuilder leading",
          "compose": "leadingContent: @Composable () -&gt; Unit"
        },
        {
          "figma": "trailingComponent (Slot)",
          "swift": "@ViewBuilder trailing",
          "compose": "trailingContent: @Composable () -&gt; Unit"
        },
        {
          "figma": "chevron",
          "swift": "showChevron: Bool",
          "compose": "showChevron: Boolean"
        },
        {
          "figma": "bottomBorder",
          "swift": "showDivider: Bool",
          "compose": "showDivider: Boolean"
        },
        {
          "figma": "state",
          "swift": ".disabled(true), loading modifier",
          "compose": "enabled = false, loading param"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/List/EBActionList.swift",
        "compose": "android/components/list/EBActionList.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// With description + CTA + chevron</span>\n<span class=\"typ\">EBActionList</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Notifications\"</span>,\n    <span class=\"prp\">subtitle</span>: <span class=\"str\">\"Receive alerts for new transactions\"</span>,\n    <span class=\"prp\">leading</span>: { <span class=\"typ\">EBListItemAsset</span>(.<span class=\"prp\">icon</span>(<span class=\"str\">\"bell\"</span>)) },\n    <span class=\"prp\">trailing</span>: { <span class=\"typ\">Text</span>(<span class=\"str\">\"Edit\"</span>).<span class=\"fn\">foregroundStyle</span>(.<span class=\"prp\">blue</span>) },\n    <span class=\"prp\">showChevron</span>: <span class=\"kw\">true</span>\n)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBActionList</span>(<span class=\"prp\">title</span>: <span class=\"str\">\"Premium\"</span>, <span class=\"prp\">subtitle</span>: <span class=\"str\">\"Unlock higher limits\"</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Loading</span>\n<span class=\"typ\">EBActionList</span>(<span class=\"prp\">title</span>: <span class=\"str\">\"\"</span>, <span class=\"prp\">subtitle</span>: <span class=\"str\">\"\"</span>)\n    .<span class=\"fn\">redacted</span>(<span class=\"prp\">reason</span>: .<span class=\"prp\">placeholder</span>)",
        "compose": "<span class=\"cmt\">// With description + CTA + chevron</span>\n<span class=\"typ\">EBActionList</span>(\n    title = <span class=\"str\">\"Notifications\"</span>,\n    supportingContent = <span class=\"str\">\"Receive alerts for new transactions\"</span>,\n    leadingContent = { <span class=\"typ\">EBListItemAsset</span>(<span class=\"typ\">Icon</span>.<span class=\"prp\">Bell</span>) },\n    trailingContent = { <span class=\"typ\">Text</span>(<span class=\"str\">\"Edit\"</span>, color = <span class=\"typ\">Color</span>.<span class=\"prp\">Blue</span>) },\n    showChevron = <span class=\"kw\">true</span>\n)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBActionList</span>(\n    title = <span class=\"str\">\"Premium\"</span>,\n    supportingContent = <span class=\"str\">\"Unlock higher limits\"</span>,\n    enabled = <span class=\"kw\">false</span>\n)\n\n<span class=\"cmt\">// Loading</span>\n<span class=\"typ\">EBActionList</span>(title = <span class=\"str\">\"\"</span>, loading = <span class=\"kw\">true</span>)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Touch target",
        "ios": "Row is tappable via <code>Button</code> wrapper or <code>.onTapGesture</code>; min 44pt",
        "android": "<code>Modifier.clickable(...)</code>; min 48dp"
      },
      {
        "requirement": "Combined label",
        "ios": "<code>.accessibilityElement(children: .combine)</code> so VoiceOver reads \"Label, description, button\"",
        "android": "<code>Modifier.semantics(mergeDescendants = true) { role = Role.Button }</code>"
      },
      {
        "requirement": "Disabled state",
        "ios": "<code>.disabled(true)</code> — VoiceOver announces \"dimmed\"",
        "android": "<code>enabled = false</code> — TalkBack announces \"disabled\""
      },
      {
        "requirement": "Loading state",
        "ios": "<code>.accessibilityLabel(\"Loading\")</code> on skeleton rows",
        "android": "<code>Modifier.semantics { contentDescription = \"Loading\" }</code>"
      },
      {
        "requirement": "Chevron semantics",
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
        "notes": "Leading asset is a raw <code>#c2c6cf</code> circle placeholder, not a List Item Asset instance or a Figma Slot."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Property names are clean (<code>state</code>, <code>icon</code>, <code>chevron</code>, <code>description</code>) but the Density axis from base List is missing."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All label, description, CTA, chevron, bg colors bound to <code>main/action-list/...</code>. Spacing uses <code>space/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Sibling component for what natives handle as a single parameter. Consolidate with base List."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default / Disabled / Loading only — no Pressed. Action lists are tappable; pressed token needed."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Chevron is a vector instance. Leading placeholder is decorative, user-provided via instance swap."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — consolidate family first, then map once."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "",
      "columns": [
        "State",
        "Width × Height",
        "Padding",
        "Notes",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Default</strong>",
            "360 × 60",
            "12 all sides",
            "Label + description + CTA + chevron",
            "18577:14605"
          ]
        },
        {
          "cells": [
            "<strong>Disabled</strong>",
            "360 × 60",
            "12 all sides",
            "Label + description recolored; CTA + chevron dimmed",
            "18577:14617"
          ]
        },
        {
          "cells": [
            "<strong>Loading</strong>",
            "360 × 60",
            "14 V · 12 L · 24 R",
            "Two shimmer lines + 53px trailing shimmer block",
            "18577:14629"
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
      "header": "Initial Assessment · node 18577:14604",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (Default / Disabled / Loading). Sibling of base List + List with Counter. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Leading placeholder hardcoded</strong> — 32px circle fill <code>#c2c6cf</code>, not an instance of List Item Asset. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Missing Density axis</strong> — Base List ships Compact + Expanded; this sibling ships neither. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Sibling duplicates base List</strong> — Description is a single optional parameter on every native list primitive; collapse into one Action List with <code>description</code> slot. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>No Pressed state</strong> — Action list is tappable; pressed token should exist. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered; blocked until family consolidation. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
