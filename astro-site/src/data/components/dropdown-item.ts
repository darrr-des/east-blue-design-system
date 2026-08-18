import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/dropdown-item.js`.
const dropdownItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'type',
        prop: 'type',
        defaultValue: 'text',
        options: [
          { value: 'text',          label: 'text' },
          { value: 'text with tag', label: 'text with tag' },
          { value: 'amount',        label: 'amount' },
          { value: 'country',       label: 'country' },
          { value: 'disabeld',      label: 'disabeld' },
        ],
      },
      {
        label: 'selected',
        prop: 'selected',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true',  label: 'true' },
        ],
      },
    ],
  },
];

export const dropdownItem: ComponentData = {
  "meta": {
    "slug": "dropdown-item",
    "name": "Select Item",
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
        "note": "Single row primitive powering every Select Group and Dropdown overlay. One component covers Icon, Peso Sign, and Flag leading content across three densities (Compact 40 / Default 48 / Comfortable 56), with named Leading / Content / Trailing slots taking anything else."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Ships its own padding, label + supporting text styling, and slot scaffolding. Colors are token-bound across Default, Pressed, and Disabled; the Flag type resolves through the shared <code>Flags Library</code> rather than baking in an asset."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The <code>disabeld</code> typo is gone — disabled is now an orthogonal <code>State</code> value (Default / Pressed / Disabled) that composes with any <code>Type</code>. <code>isSelected</code> is a clean two-value boolean on <code>true</code>/<code>false</code>, matching the C2 rule and Radio Button."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Nests inside Select Group via a Figma Slot. The Flag type is a swappable vector instance (<code>Flags Library - 16px</code>) rather than a hardcoded raster, so any locale works, and the three named element slots let consumers compose badges, checkmarks, or values without forking the component."
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
    "resolved": [
      {
        "body": "v2.0: Enum typo <code>disabeld</code> fixed — disabled is now a correctly-spelled <code>State</code> value, not a misspelled content type. (C2)"
      },
      {
        "body": "v2.0: Disabled promoted to an orthogonal <code>State</code> axis (Default / Pressed / Disabled) — composes with any Type, so \"Peso Sign + Disabled\" and \"Flag + Disabled\" are now expressible. (C4)"
      },
      {
        "body": "v2.0: Country flag replaced with a vector instance — now maps to <code>Flags Library - 16px</code> in the Leading slot, locale-swappable rather than a baked-in Philippines PNG. (C6)"
      },
      {
        "body": "v2.0: Pressed state added — <code>State=Pressed</code> covers touch feedback (iOS highlight / Android ripple). Focused is N/A on mobile. (C5)"
      },
      {
        "body": "v2.0: Selected affordance added — <code>isSelected=Yes</code> flips the label to brand <code>#005CE5</code> and exposes a checkmark via the Trailing icon slot, no longer relying on label color alone. (C5)"
      },
      {
        "body": "v2.1: <code>isSelected</code> collapsed to a clean two-value boolean — the ambiguous third <code>Default</code> value was removed and the prop now applies uniformly across all three Types. Coverage is consistent at 9 × unselected + 3 × selected per Type, and the selection prop maps 1:1 to a native <code>Bool</code>. (C2)"
      },
      {
        "body": "v2.1: <code>isSelected</code> values renamed <code>Yes</code>/<code>No</code> → <code>true</code>/<code>false</code> across all 36 variants — Select Item now matches the documented C2 rule and the rebuilt Radio Button. The system is on a single boolean vocabulary. (C2)"
      },
      {
        "body": "v2.1: <code>State=Disabled</code> + <code>isSelected=true</code> deliberately omitted — reviewed and confirmed intentional. A disabled row offers the user no action, and when the parent Select is disabled the menu never opens, so the combination is unreachable. (C5)"
      },
      {
        "body": "v2.1: <code>State=Pressed</code> + <code>isSelected=true</code> deliberately not modelled — reviewed and confirmed correct. Pressed is the act of choosing, so the meaningful case is pressing an <em>unselected</em> row, which ships. On native, pressed is not an authored state but an overlay the platform applies (SwiftUI <code>configuration.isPressed</code>, Compose <code>InteractionSource</code>), so pressed-over-selected composes at runtime without a dedicated variant. Authoring the 9 would specify nothing a developer does not already get. (C5)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Previously blocked by the enum typo, missing states, and raster flag — all resolved in the Select Item rebuild. Registration is now unblocked, but the SwiftUI / Compose mappings are not yet wired.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBSelectItem</code>.",
        "body": "With the rename, orthogonal state axis, and vector flag all shipped, wire the Figma properties (Type, Density, State, isSelected + the Leading / Content / Trailing slots) 1:1 to the SwiftUI / Compose API.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Renamed <code>disabeld</code> → <code>disabled</code>.",
        "body": "v2.0: Applied — disabled is now a correctly-spelled <code>State</code> value.",
        "tag": "Rename"
      },
      {
        "headline": "Promoted disabled to its own axis.",
        "body": "v2.0: Applied — <code>State</code> (Default / Pressed / Disabled) is orthogonal to Type, so disabled composes with Icon / Peso Sign / Flag.",
        "tag": "Property"
      },
      {
        "headline": "Replaced the raster flag with a vector flag slot.",
        "body": "v2.0: Applied — the Leading slot now carries a <code>Flags Library - 16px</code> vector instance, locale-swappable.",
        "tag": "Slot"
      },
      {
        "headline": "Added a pressed state.",
        "body": "v2.0: Applied — <code>State=Pressed</code> maps touch feedback to a tokenized background. Focused is N/A on mobile.",
        "tag": "State"
      },
      {
        "headline": "Added an explicit selected-visual affordance.",
        "body": "v2.0: Applied — brand-color label plus a checkmark via the Trailing icon slot on <code>isSelected=Yes</code>.",
        "tag": "State"
      },
      {
        "headline": "Generalized the amount variant around slots.",
        "body": "v2.0: Applied — the peso sign is a Leading vector slot (<code>Peso Sign - Proxima</code>) with the value in Content and a free Trailing slot for a badge or value.",
        "tag": "Slot"
      },
      {
        "headline": "Collapsed <code>isSelected</code> to a clean boolean.",
        "body": "v2.1: Applied — the third <code>Default</code> value is gone; <code>isSelected</code> is a true two-value boolean across every Type, with consistent coverage.",
        "tag": "Property"
      },
      {
        "headline": "Standardise the boolean vocabulary on <code>true</code>/<code>false</code>.",
        "body": "v2.1: Applied — <code>isSelected</code> values renamed <code>Yes</code>/<code>No</code> → <code>true</code>/<code>false</code> across all 36 variants, matching the C2 rule and Radio Button. The system is now on one boolean vocabulary.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "ddi-spec-text",
        "demoKey": "text",
        "demoControls": dropdownItemDemoControls,
        "title": "Text",
        "node": "23:199456",
        "description": "Plain text row. Default content type used by Dropdown. Label switches from neutral #0A2757 (default) to brand #005CE5 (selected).",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false,
                "prop": "selected"
              },
              {
                "key": "Variant",
                "value": "Text",
                "mono": false,
                "prop": "type"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "dropdown-item/color/default/bg",
                "variants": { "selected:true": { "value": "#F6F9FD", "token": "dropdown-item/color/selected/bg" } }
              },
              { "key": "Label", "value": "#0A2757", "token": "dropdown-item/color/default/label",
                "variants": {
                  "type:disabeld":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "type:disabled":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "selected:true":  { "value": "#005CE5", "token": "dropdown-item/color/selected/label" }
                }
              },
              { "key": "Border", "value": "#E5EBF4", "token": "dropdown-item/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 18 / 18",
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
        "demoKey": "tag",
        "demoControls": dropdownItemDemoControls,
        "title": "Text with tag",
        "node": "883:29328",
        "description": "Row with a trailing Badge instance (Negative/Heavy variant in stock). Used when an option needs an inline status label.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false,
                "prop": "selected"
              },
              {
                "key": "Variant",
                "value": "Text with tag",
                "mono": false,
                "prop": "type"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "dropdown-item/color/default/bg",
                "variants": { "selected:true": { "value": "#F6F9FD", "token": "dropdown-item/color/selected/bg" } }
              },
              { "key": "Label", "value": "#0A2757", "token": "dropdown-item/color/default/label",
                "variants": {
                  "type:disabeld":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "type:disabled":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "selected:true":  { "value": "#005CE5", "token": "dropdown-item/color/selected/label" }
                }
              },
              { "key": "Border", "value": "#E5EBF4", "token": "dropdown-item/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 18 / 18",
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
        "demoKey": "amount",
        "demoControls": dropdownItemDemoControls,
        "title": "Amount",
        "node": "23:199458",
        "description": "Peso sign (vector, Proxima-sized) + amount text. Icon currency token flips to brand on selected.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false,
                "prop": "selected"
              },
              {
                "key": "Variant",
                "value": "Amount",
                "mono": false,
                "prop": "type"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "dropdown-item/color/default/bg",
                "variants": { "selected:true": { "value": "#F6F9FD", "token": "dropdown-item/color/selected/bg" } }
              },
              { "key": "Label", "value": "#0A2757", "token": "dropdown-item/color/default/label",
                "variants": {
                  "type:disabeld":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "type:disabled":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "selected:true":  { "value": "#005CE5", "token": "dropdown-item/color/selected/label" }
                }
              },
              { "key": "Border", "value": "#E5EBF4", "token": "dropdown-item/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 18 / 18",
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
        "demoKey": "country",
        "demoControls": dropdownItemDemoControls,
        "title": "Country",
        "node": "23:199472",
        "description": "Leading flag (25 × 16, 2px radius) + country name and dial code. <strong>Flag is a raster PNG</strong>, not a vector instance — open issue (C6).",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false,
                "prop": "selected"
              },
              {
                "key": "Variant",
                "value": "Country",
                "mono": false,
                "prop": "type"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "dropdown-item/color/default/bg",
                "variants": { "selected:true": { "value": "#F6F9FD", "token": "dropdown-item/color/selected/bg" } }
              },
              { "key": "Label", "value": "#0A2757", "token": "dropdown-item/color/default/label",
                "variants": {
                  "type:disabeld":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "type:disabled":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "selected:true":  { "value": "#005CE5", "token": "dropdown-item/color/selected/label" }
                }
              },
              { "key": "Border", "value": "#E5EBF4", "token": "dropdown-item/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 18 / 18",
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
        "demoKey": "disabled",
        "demoControls": dropdownItemDemoControls,
        "title": "Disabeld Typo",
        "node": "883:30386",
        "description": "Soft fill row with muted label. Currently only exists at <code>selected=false</code>. <strong>Enum value is misspelled (<code>disabeld</code>)</strong> — open issue (C2).",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Disabled",
                "mono": false,
                "prop": "selected"
              },
              {
                "key": "Variant",
                "value": "Disabeld Typo",
                "mono": false,
                "prop": "type"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "dropdown-item/color/default/bg",
                "variants": { "selected:true": { "value": "#F6F9FD", "token": "dropdown-item/color/selected/bg" } }
              },
              { "key": "Label", "value": "#0A2757", "token": "dropdown-item/color/default/label",
                "variants": {
                  "type:disabeld":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "type:disabled":  { "value": "#C2CFE5", "token": "text/color-text-disabled" },
                  "selected:true":  { "value": "#005CE5", "token": "dropdown-item/color/selected/label" }
                }
              },
              { "key": "Border", "value": "#E5EBF4", "token": "dropdown-item/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 18 / 18",
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
      "version": "2.1.0",
      "date": "July 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "isSelected normalised · node 25689:371384",
      "rows": [
        {
          "body": "<strong><code>isSelected</code> collapsed to two values</strong> — the ambiguous third <code>Default</code> value was removed; the prop now applies uniformly across Icon, Peso Sign, and Flag. Coverage is consistent at 9 × unselected + 3 × selected per Type, and selection maps 1:1 to a native <code>Bool</code>.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Boolean vocabulary standardised</strong> — <code>isSelected</code> values renamed <code>Yes</code>/<code>No</code> → <code>true</code>/<code>false</code> across all 36 variants. Select Item now matches the documented C2 rule and the rebuilt Radio Button; the system is on a single boolean vocabulary.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "July 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt as Select Item · node 25689:371384",
      "rows": [
        {
          "body": "<strong>Component rebuilt and renamed Dropdown Item → Select Item</strong> — new slot-based architecture: Type (Icon / Peso Sign / Flag) × Density (Compact / Default / Comfortable) × State (Default / Pressed / Disabled) × isSelected (No / Yes / Default), with named Leading / Content / Trailing element slots.\n          <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong>Enum typo <code>disabeld</code> resolved</strong> — disabled is now a correctly-spelled orthogonal <code>State</code> value, not a misspelled content type. Composes with any Type (e.g. Peso Sign + Disabled), resolving the earlier C2 + C4 issues.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 · C4 Resolved"
          }
        },
        {
          "body": "<strong>Raster flag replaced with a vector instance</strong> — the country flag now maps to <code>Flags Library - 16px</code> in the Leading slot, locale-swappable rather than a baked-in Philippines PNG.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Pressed state + selected affordance added</strong> — <code>State=Pressed</code> covers touch feedback (focused is N/A on mobile), and <code>isSelected=Yes</code> flips the label to brand color plus exposes a checkmark via the Trailing icon slot.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Amount variant generalized</strong> — the peso sign is now a Leading vector slot (<code>Peso Sign - Proxima</code>) with the value in Content; the trailing slot stays free for a badge or value.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "Slot"
          }
        },
        {
          "body": "<strong><code>isSelected</code> exposes three values (No / Yes / Default)</strong> — ambiguous for a boolean and inconsistent across Types. Collapse to Yes/No.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — now unblocked by the rebuild; SwiftUI / Compose mappings not yet registered.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    },
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
