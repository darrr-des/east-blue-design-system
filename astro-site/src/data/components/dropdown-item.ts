import type { ComponentData } from '../types';

export const dropdownItem: ComponentData = {
  "meta": {
    "slug": "dropdown-item",
    "name": "Dropdown Item",
    "node": "18577:13033",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-13033",
    "description": "A single selectable row inside a Dropdown popover — label, optional leading icon, and selected/disabled states.",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Dropdown",
    "verdict": {
      "kind": "fix",
      "title": "Fix required before handoff",
      "text": "Enum value typo <code>disabeld</code> (C2). Country variant uses a raster PNG flag (C6). No pressed/focused state variants (C5). Disabled is modeled as a <code>type</code> value rather than an orthogonal state (C4)."
    }
  },
  "overview": {
    "inContextNote": "Dropdown Item is the row primitive consumed by the Dropdown overlay and by Dropdown Item Group. Not used standalone.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"6\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".15\"></rect>\n          <rect x=\"14\" y=\"14\" width=\"92\" height=\"11\" rx=\"1\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <rect x=\"18\" y=\"18\" width=\"40\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <line x1=\"14\" y1=\"25\" x2=\"106\" y2=\"25\" stroke=\"currentColor\" stroke-width=\".5\" opacity=\".15\"></line>\n          <rect x=\"14\" y=\"25\" width=\"92\" height=\"11\" rx=\"1\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <rect x=\"18\" y=\"29\" width=\"32\" height=\"3\" rx=\"1\" fill=\"#005CE5\" opacity=\".4\"></rect>\n          <line x1=\"14\" y1=\"36\" x2=\"106\" y2=\"36\" stroke=\"currentColor\" stroke-width=\".5\" opacity=\".15\"></line>\n          <rect x=\"14\" y=\"36\" width=\"92\" height=\"11\" rx=\"1\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <rect x=\"18\" y=\"40\" width=\"24\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <rect x=\"80\" y=\"39\" width=\"18\" height=\"5\" rx=\"1\" fill=\"#D61B2C\" opacity=\".5\"></rect>\n          <line x1=\"14\" y1=\"47\" x2=\"106\" y2=\"47\" stroke=\"currentColor\" stroke-width=\".5\" opacity=\".15\"></line>\n          <rect x=\"14\" y=\"47\" width=\"92\" height=\"11\" rx=\"1\" fill=\"currentColor\" opacity=\".05\"></rect>\n          <rect x=\"18\" y=\"51\" width=\"8\" height=\"4\" rx=\".5\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <rect x=\"28\" y=\"51\" width=\"28\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <line x1=\"14\" y1=\"58\" x2=\"106\" y2=\"58\" stroke=\"currentColor\" stroke-width=\".5\" opacity=\".15\"></line>\n          <rect x=\"14\" y=\"58\" width=\"92\" height=\"11\" rx=\"1\" fill=\"currentColor\" opacity=\".04\"></rect>\n          <rect x=\"18\" y=\"62\" width=\"30\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ddi-demo-preview\"><svg width=\"366\" height=\"50\" viewBox=\"0 0 366 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"0\" y1=\"49.5\" x2=\"366\" y2=\"49.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"12\" y=\"31\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select class=\"demo-panel-select\" onchange=\"_ddiDemo.type=this.value;updateDropdownItemDemo()\"><option value=\"text\">text</option><option value=\"text with tag\">text with tag</option><option value=\"amount\">amount</option><option value=\"country\">country</option><option value=\"disabeld\">disabeld</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">selected</span><select class=\"demo-panel-select\" onchange=\"_ddiDemo.selected=this.value;updateDropdownItemDemo()\"><option value=\"false\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Single row primitive that powers every Dropdown overlay and Dropdown Item Group. Covers plain text, tag labeled, amount, country, and disabled content types from one component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Ships its own divider, padding, label styling, optional badge slot, peso sign, and flag slot. Tokens cover default, active, and disabled roles via <code>main/dropdown-item/color/*</code>."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Enum value <code>disabeld</code> is misspelled and ships in the generated TypeScript type. Disabled is modeled as a <code>type</code> rather than an orthogonal state, so you cannot combine it with text / amount / country cleanly."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Fits inside Dropdown overlay and Dropdown Item Group. The country variant hardcodes the Philippines flag as a raster image rather than a swappable flag slot, which blocks reuse for any other locale."
      }
    ],
    "behavior": [
      {
        "state": "Default (unselected)",
        "ios": "yes",
        "android": "yes",
        "property": "selected=false",
        "notes": "Label #0A2757, bottom border #E5EBF4."
      },
      {
        "state": "Selected",
        "ios": "yes",
        "android": "yes",
        "property": "selected=true",
        "notes": "Label #005CE5 (brand), same divider. No background highlight — relies on text color alone."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "type=disabeld",
        "notes": "Soft fill #F6F9FD, label #C2CFE5. Modeled as a content type rather than a state (C4)."
      },
      {
        "state": "Pressed",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. iOS highlight and Android ripple will have to be improvised at instance level."
      },
      {
        "state": "Focused",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Required for keyboard / D-pad navigation in dropdown overlays."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Enum value <code>disabeld</code> is misspelled.",
        "body": "The variant name ships into the generated TS type (<code>type?: \"text\" | \"amount\" | \"country\" | \"text with tag\" | \"disabeld\"</code>). Every consumer has to mirror the typo or lose autocomplete. Rename to <code>disabled</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Country flag is a raster PNG.",
        "body": "The <code>country</code> variant embeds a Philippines image (<code>imgPhilippines</code>) as a raster fill, not a vector flag instance. Blocks clean native handoff and freezes the row to a single locale.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed or focused state variants.",
        "body": "Only <code>selected</code> on/off plus a pseudo-disabled type. Touch feedback (iOS highlight, Android ripple) and keyboard focus are not covered at the DS layer.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Disabled is modeled as a <code>type</code> value.",
        "body": "It collides with content types (text, amount, country) — you can't express \"amount + disabled\" or \"country + disabled\" in the current schema. Should be an orthogonal <code>state</code> / <code>disabled</code> axis.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No selected-visual affordance beyond label color.",
        "body": "Selected state only changes label hex (#0A2757 → #005CE5). A checkmark trailing slot or background fill would make the picked item unambiguous, especially for color-blind users.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked by the typo, missing states, and raster asset above.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename <code>disabeld</code> enum value to <code>disabled</code>.",
        "body": "Zero visual change, fixes the type surface, and unblocks Code Connect naming hygiene.",
        "tag": "Rename"
      },
      {
        "headline": "Promote disabled to its own axis.",
        "body": "Split the current 5-value <code>type</code> into two props: <code>type</code> (text / text with tag / amount / country) × <code>disabled</code> (true / false). Matches how every native primitive models enabled/disabled and collapses the matrix to 4 × 2 × 2 (selected) = 16 compositional variants with clean semantics.",
        "tag": "Property"
      },
      {
        "headline": "Replace the raster Philippines flag with a vector flag slot.",
        "body": "Introduce a <code>leadingAsset</code> slot (or `flag` slot) that accepts a vector flag instance. Current PNG blocks reuse for any non-PH locale and ships a raster asset to native.",
        "tag": "Slot"
      },
      {
        "headline": "Add pressed and focused state variants.",
        "body": "Define a state axis so iOS highlight and Android ripple map to tokenized backgrounds instead of being improvised at instance level.",
        "tag": "State"
      },
      {
        "headline": "Add an explicit selected-visual affordance.",
        "body": "A trailing checkmark (or tokenized background fill) on <code>selected=true</code> removes the reliance on label color alone — improves accessibility and scannability.",
        "tag": "State"
      },
      {
        "headline": "Generalize the amount variant around a trailing value slot.",
        "body": "Instead of a baked-in peso + amount text, expose a trailing content slot that the peso sign and amount compose into. Opens the row to reuse for any key/value pair (balance, fee, exchange rate).",
        "tag": "Slot"
      },
      {
        "headline": "Register Code Connect mapping to <code>EBDropdownItem</code>.",
        "body": "After the rename and state work, wire the Figma properties 1:1 to the SwiftUI / Compose API.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "ddi-spec-text",
        "title": "Text",
        "node": "23:199456",
        "description": "Plain text row. Default content type used by Dropdown. Label switches from neutral #0A2757 (default) to brand #005CE5 (selected).",
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
                "value": "Text",
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
                "value": "dropdown-item/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "dropdown-item/color/default/label",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "dropdown-item/color/default/border",
                "mono": true
              },
              {
                "key": "Disabled label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Disabled label token",
                "value": "text/color-text-disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48px",
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
                "key": "Divider",
                "value": "1px bottom border",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBItemState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"50\" viewBox=\"0 0 366 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"0\" y1=\"49.5\" x2=\"366\" y2=\"49.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"12\" y=\"31\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text></svg>"
      },
      {
        "cardKey": "ddi-spec-tag",
        "title": "Text with tag",
        "node": "883:29328",
        "description": "Row with a trailing Badge instance (Negative/Heavy variant in stock). Used when an option needs an inline status label.",
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
                "value": "Text with tag",
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
                "value": "dropdown-item/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "dropdown-item/color/default/label",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "dropdown-item/color/default/border",
                "mono": true
              },
              {
                "key": "Disabled label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Disabled label token",
                "value": "text/color-text-disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48px",
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
                "key": "Divider",
                "value": "1px bottom border",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBItemState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"50\" viewBox=\"0 0 366 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"0\" y1=\"49.5\" x2=\"366\" y2=\"49.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"12\" y=\"31\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><rect x=\"308\" y=\"16\" width=\"42\" height=\"18\" rx=\"4\" fill=\"#D61B2C\"></rect><text x=\"329\" y=\"28\" font-family=\"Proxima Soft, system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#FFFFFF\" text-anchor=\"middle\">Label</text></svg>"
      },
      {
        "cardKey": "ddi-spec-amount",
        "title": "Amount",
        "node": "23:199458",
        "description": "Peso sign (vector, Proxima-sized) + amount text. Icon currency token flips to brand on selected.",
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
                "value": "Amount",
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
                "value": "dropdown-item/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "dropdown-item/color/default/label",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "dropdown-item/color/default/border",
                "mono": true
              },
              {
                "key": "Disabled label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Disabled label token",
                "value": "text/color-text-disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48px",
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
                "key": "Divider",
                "value": "1px bottom border",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBItemState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"50\" viewBox=\"0 0 366 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"0\" y1=\"49.5\" x2=\"366\" y2=\"49.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"12\" y=\"32\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"700\" fill=\"#0A2757\">₱</text><text x=\"34\" y=\"32\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">X,XXX.XX</text></svg>"
      },
      {
        "cardKey": "ddi-spec-country",
        "title": "Country",
        "node": "23:199472",
        "description": "Leading flag (25 × 16, 2px radius) + country name and dial code. <strong>Flag is a raster PNG</strong>, not a vector instance — open issue (C6).",
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
                "value": "Country",
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
                "value": "dropdown-item/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "dropdown-item/color/default/label",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "dropdown-item/color/default/border",
                "mono": true
              },
              {
                "key": "Disabled label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Disabled label token",
                "value": "text/color-text-disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48px",
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
                "key": "Divider",
                "value": "1px bottom border",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBItemState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"50\" viewBox=\"0 0 366 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"0\" y1=\"49.5\" x2=\"366\" y2=\"49.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><rect x=\"12\" y=\"17\" width=\"25\" height=\"16\" rx=\"2\" fill=\"#FCFCFC\" stroke=\"#E5EBF4\" stroke-width=\"0.5\"></rect><path d=\"M12 17h25v8H12z\" fill=\"#0038A8\"></path><path d=\"M12 25h25v8H12z\" fill=\"#CE1126\"></path><path d=\"M12 17l10 8-10 8z\" fill=\"#FFFFFF\"></path><circle cx=\"16\" cy=\"25\" r=\"1.5\" fill=\"#FCD116\"></circle><text x=\"45\" y=\"31\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Philippines +63</text></svg>"
      },
      {
        "cardKey": "ddi-spec-disabled",
        "title": "Disabeld Typo",
        "node": "883:30386",
        "description": "Soft fill row with muted label. Currently only exists at <code>selected=false</code>. <strong>Enum value is misspelled (<code>disabeld</code>)</strong> — open issue (C2).",
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
                "value": "Disabeld Typo",
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
                "value": "dropdown-item/color/default/bg",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "dropdown-item/color/default/label",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "dropdown-item/color/default/border",
                "mono": true
              },
              {
                "key": "Disabled label",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Disabled label token",
                "value": "text/color-text-disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "48px",
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
                "key": "Divider",
                "value": "1px bottom border",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBItemState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"50\" viewBox=\"0 0 366 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"366\" height=\"50\" fill=\"#F6F9FD\"></rect><line x1=\"0\" y1=\"49.5\" x2=\"366\" y2=\"49.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"12\" y=\"31\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#C2CFE5\">Dropdown Item</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All color roles are bound to the <code>main/dropdown-item/color/*</code> token family. Dropdown Item has no variable modes — colors are keyed by state only.",
        "columns": [
          "DEFAULT",
          "SELECTED",
          "DISABLED"
        ],
        "rows": [
          {
            "role": "Row bg",
            "token": "main/dropdown-item/color/{state}/bg",
            "values": [
              "transparent",
              "transparent",
              "#F6F9FD"
            ]
          },
          {
            "role": "Label",
            "token": "main/dropdown-item/color/{state}/label",
            "values": [
              "#0A2757",
              "#005CE5",
              "#C2CFE5"
            ]
          },
          {
            "role": "Bottom border",
            "token": "main/dropdown-item/color/{state}/border",
            "values": [
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4"
            ]
          },
          {
            "role": "Peso sign (amount)",
            "token": "main/dropdown-item/color/{state}/icon-currency",
            "values": [
              "#0A2757",
              "#005CE5",
              "–"
            ]
          },
          {
            "role": "Badge bg (text with tag)",
            "token": "main/badge/negative/heavy/background",
            "values": [
              "#D61B2C",
              "#D61B2C",
              "–"
            ]
          },
          {
            "role": "Badge label (text with tag)",
            "token": "main/badge/negative/heavy/label",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "–"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Token"
        ],
        "rows": [
          {
            "role": "Row width",
            "token": "366px (fill)",
            "values": [
              "—"
            ]
          },
          {
            "role": "Row height",
            "token": "50px (text / text with tag) · 51.2–52px (amount / country)",
            "values": [
              "—"
            ]
          },
          {
            "role": "Padding top/bottom",
            "token": "16px",
            "values": [
              "space/space-16"
            ]
          },
          {
            "role": "Padding left",
            "token": "12px",
            "values": [
              "space/space-12"
            ]
          },
          {
            "role": "Padding right",
            "token": "16px",
            "values": [
              "space/space-16"
            ]
          },
          {
            "role": "Gap (country / text with tag)",
            "token": "8px",
            "values": [
              "space/space-8"
            ]
          },
          {
            "role": "Flag size (country)",
            "token": "25 × 16",
            "values": [
              "—"
            ]
          },
          {
            "role": "Flag radius",
            "token": "2px",
            "values": [
              "radius/radius-1 (approx)"
            ]
          },
          {
            "role": "Peso sign size (amount)",
            "token": "18 × 18",
            "values": [
              "—"
            ]
          },
          {
            "role": "Bottom border",
            "token": "1px solid",
            "values": [
              "main/dropdown-item/color/{state}/border"
            ]
          },
          {
            "role": "Row corner radius",
            "token": "0",
            "values": [
              "radius/radius-0"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Tracking",
          "Line-height"
        ],
        "rows": [
          {
            "role": "Label (all types)",
            "token": "Primary/Label/Light/Large",
            "values": [
              "Proxima Soft Semibold",
              "18px",
              "0.25px",
              "18px"
            ]
          },
          {
            "role": "Amount text",
            "token": "Primary/Label/Light/Large",
            "values": [
              "Proxima Soft Semibold",
              "18px",
              "0.25px",
              "18px"
            ]
          },
          {
            "role": "Badge label (text with tag)",
            "token": "Primary/Label/Fine",
            "values": [
              "Proxima Soft Bold",
              "12px",
              "0.5px",
              "12px"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:dropdown:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.dropdown.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Dropdown Item is bundled with the Dropdown package. The planned SwiftUI API exposes it as EBDropdownItem; on Compose it maps to Material 3's DropdownMenuItem with EB-styled content."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "type = text",
          "swift": "EBDropdownItem(label:)",
          "compose": "DropdownMenuItem(text = { Text(label) })"
        },
        {
          "figma": "type = text with tag",
          "swift": "EBDropdownItem(label:tag:)",
          "compose": "trailing = { EBBadge(…) }"
        },
        {
          "figma": "type = amount",
          "swift": ".ebStyle(.amount)",
          "compose": "style = EBDropdownItemStyle.Amount"
        },
        {
          "figma": "type = country",
          "swift": "EBDropdownItem(flag:name:dialCode:)",
          "compose": "leadingIcon = { FlagIcon(…) }"
        },
        {
          "figma": "type = disabeld <span class=\"badge badge-rework\">Typo</span>",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "selected = true",
          "swift": "isSelected: Bool",
          "compose": "selected: Boolean"
        },
        {
          "figma": "selected = false",
          "swift": "isSelected: Bool (default)",
          "compose": "selected: Boolean (default)"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Dropdown/EBDropdownItem.swift",
        "compose": "android/components/dropdown/EBDropdownItem.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Text",
        "swift": "<span class=\"typ\">EBDropdownItem</span>(<span class=\"str\">\"Dropdown Item\"</span>)\n    .<span class=\"fn\">isSelected</span>(category == <span class=\"str\">\"item\"</span>)\n    .<span class=\"fn\">onTap</span> { category = <span class=\"str\">\"item\"</span> }",
        "compose": "<span class=\"typ\">EBDropdownItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Dropdown Item\"</span>,\n    <span class=\"prp\">selected</span> = selected == <span class=\"str\">\"item\"</span>,\n    <span class=\"prp\">onClick</span> = { selected = <span class=\"str\">\"item\"</span> }\n)"
      },
      {
        "subheading": "Text with tag",
        "swift": "<span class=\"typ\">EBDropdownItem</span>(<span class=\"str\">\"Dropdown Item\"</span>) {\n    <span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Label\"</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">heavy</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">negative</span>)\n}",
        "compose": "<span class=\"typ\">EBDropdownItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Dropdown Item\"</span>,\n    <span class=\"prp\">trailing</span> = { <span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Label\"</span>, level = <span class=\"typ\">EBBadgeLevel</span>.Heavy, state = <span class=\"typ\">EBBadgeState</span>.Negative) }\n)"
      },
      {
        "subheading": "Amount",
        "swift": "<span class=\"typ\">EBDropdownItem</span>(<span class=\"prp\">amount</span>: <span class=\"str\">\"1,000.00\"</span>)\n    .<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">amount</span>)",
        "compose": "<span class=\"typ\">EBDropdownItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"1,000.00\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBDropdownItemStyle</span>.<span class=\"prp\">Amount</span>\n)"
      },
      {
        "subheading": "Country",
        "swift": "<span class=\"typ\">EBDropdownItem</span>(\n    <span class=\"prp\">flag</span>: <span class=\"typ\">Image</span>(<span class=\"str\">\"flag_ph\"</span>),\n    <span class=\"prp\">name</span>: <span class=\"str\">\"Philippines\"</span>,\n    <span class=\"prp\">dialCode</span>: <span class=\"str\">\"+63\"</span>\n)",
        "compose": "<span class=\"typ\">EBDropdownItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Philippines +63\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">FlagIcon</span>(<span class=\"typ\">CountryCode</span>.PH) }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 × 44 pt (row is 50pt tall)",
        "android": "48 × 48 dp"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Philippines, +63\")</code>",
        "android": "<code>contentDescription = \"Philippines, +63\"</code>"
      },
      {
        "requirement": "Role",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code>",
        "android": "<code>Role.Button</code>"
      },
      {
        "requirement": "Selected announcement",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code>",
        "android": "<code>selected = true</code> in semantics"
      },
      {
        "requirement": "Disabled announcement",
        "ios": "<code>.disabled(true)</code> → VoiceOver says \"dimmed\"",
        "android": "<code>enabled = false</code> → TalkBack says \"disabled\""
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Consume Dropdown Item through Dropdown or Dropdown Item Group. Keep labels short — 18px Semibold is the only supported text size.",
        "dontText": "Don't use Dropdown Item outside a dropdown overlay. For standalone list rows, use the List Item component instead."
      },
      {
        "doText": "Pair selected state with a trailing checkmark (once added) so the picked item is unambiguous, especially on the country and amount variants.",
        "dontText": "Don't rely on the disabeld type to build disabled versions of amount or country — it only ships for the text content type. Use the planned disabled state axis instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>container</code>, <code>name</code>, <code>offset</code>, <code>Peso Sign - Proxima</code>, <code>Field Trailing Flag</code>, <code>philippines</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Enum value <code>disabeld</code> is misspelled and ships into the generated TS type."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/dropdown-item/color/*</code>; space + radius + typography tokens all present."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to a custom SwiftUI row / Material 3 <code>DropdownMenuItem</code>. Disabled should be an orthogonal prop, not a type value."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed or focused variants. Selected state relies on label color alone — no checkmark or background fill."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Country variant uses a raster PNG flag, not a vector instance. Peso sign is a vector via <code>Peso Sign - Proxima</code>."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet; blocked by C2, C5, C6."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>disabeld</code> → <code>disabled</code> before registering"
      },
      {
        "aspect": "Asset quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Replace raster PH flag with vector flag slot"
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pressed / focused variants missing"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBDropdownItem.swift / EBDropdownItem.kt not yet created"
      }
    ],
    "variants": {
      "total": 9,
      "description": "5 <code>type</code> values × 2 <code>selected</code> values = 10 theoretical slots, but <code>disabeld</code> only ships with <code>selected=false</code>, giving 9 actual variants.",
      "columns": [
        "type",
        "selected",
        "Node ID",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "text",
            "false",
            "23:199454",
            "Neutral label"
          ]
        },
        {
          "cells": [
            "text",
            "true",
            "23:199456",
            "Brand label"
          ]
        },
        {
          "cells": [
            "text with tag",
            "false",
            "883:29328",
            "Trailing Badge instance"
          ]
        },
        {
          "cells": [
            "text with tag",
            "true",
            "883:30370",
            "Brand label + Badge"
          ]
        },
        {
          "cells": [
            "amount",
            "false",
            "23:199458",
            "Peso sign + \"X,XXX.XX\""
          ]
        },
        {
          "cells": [
            "amount",
            "true",
            "23:199465",
            "Brand peso + brand label"
          ]
        },
        {
          "cells": [
            "country",
            "false",
            "23:199472",
            "Raster flag + \"Philippines +63\""
          ]
        },
        {
          "cells": [
            "country",
            "true",
            "23:199476",
            "Brand \"Philippines +63\""
          ]
        },
        {
          "cells": [
            "disabeld <span class=\"badge badge-rework\">Typo</span>",
            "false",
            "883:30386",
            "Soft fill + muted label"
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
      "header": "Initial Assessment · node 18577:13033",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 9 variants documented across type (text / amount / country / text with tag / disabeld) × selected (true/false). Row primitive for Dropdown overlay.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Enum value <code>disabeld</code> misspelled</strong> — ships into the generated TS type. Rename to <code>disabled</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Country variant uses a raster PNG flag</strong> — Philippines image is bitmap, not a vector flag instance. Blocks reuse and native handoff.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>No pressed or focused state variants</strong> — only <code>selected</code> on/off and a pseudo-disabled content type. Touch/keyboard feedback unmodeled.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Disabled modeled as <code>type</code> value</strong> — collides with content types (text / amount / country). Should be an orthogonal <code>disabled</code> axis.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — no CLI mappings registered yet; blocked by C2, C5, C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
