import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/radio-button-with-label.js`.
const radioButtonWithLabelDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'size',
        prop: 'size',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'default' },
          { value: 'large', label: 'large' },
        ],
      },
      {
        label: 'isError',
        prop: 'isError',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'selected',
        prop: 'selected',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];

export const radioButtonWithLabel: ComponentData = {
  "meta": {
    "slug": "radio-button-with-label",
    "name": "Radio Button with Label",
    "node": "26184:2712",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26184-2712",
    "description": "A form row pairing a Radio Button with a text label. 39 variants across <code>Style</code> (Default/Check) × <code>State</code> (Default/Pressed/Disabled) × <code>Size</code> (Large/Medium/Small) × <code>isSelected</code> × <code>isError</code> — mirroring the Radio Button atom exactly.",
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
    "navGroup": "Radio",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — in sync with the atom",
      "text": "The v2.0 rebuild split the compound <code>size</code> values into orthogonal <code>Size</code> × <code>State</code> × <code>isError</code> props, paired the radio size to the label size, added full state coverage including <code>Disabled + isSelected=false</code>, removed the <code>_space_12</code> spacer in favour of a real auto-layout gap, and fixed the <code>icon-ofsset</code> typo. Schema, property order, and all 39 variants now mirror the Radio Button atom. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Radio Button with Label appears in form questions and preference settings, stacked vertically as a group.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"42\" y=\"20\" width=\"98\" height=\"6\" rx=\"1\" fill=\"#0A2757\" opacity=\".65\"></rect>\n          <rect x=\"42\" y=\"30\" width=\"70\" height=\"4\" rx=\"1\" fill=\"#6780A9\"></rect>\n          \n          <circle cx=\"50\" cy=\"50\" r=\"6\" fill=\"#005CE5\"></circle>\n          <circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"#FFF\"></circle>\n          <rect x=\"62\" y=\"47\" width=\"60\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".7\"></rect>\n          \n          <circle cx=\"50\" cy=\"68\" r=\"6\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle>\n          <rect x=\"62\" y=\"65\" width=\"72\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          \n          <circle cx=\"50\" cy=\"86\" r=\"6\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle>\n          <rect x=\"62\" y=\"83\" width=\"56\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          \n          <rect x=\"42\" y=\"100\" width=\"116\" height=\"12\" rx=\"6\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"109\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"5.5\" font-weight=\"700\" font-family=\"system-ui\">Continue</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"rbl-demo-preview\"><div style=\"display:inline-flex;gap:12px;align-items:center;padding:4px 0;\"><div style=\"display:flex;align-items:center;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle></svg></div><div style=\"color:#445C85;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:14px;line-height:16px;letter-spacing:0.25px;\">Label</div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Proposed API</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" id=\"rbl-demo-size\" onchange=\"updateRBLDemo()\"><option value=\"default\" selected=\"\">default</option><option value=\"large\">large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isError</span><select class=\"demo-panel-select\" id=\"rbl-demo-error\" onchange=\"updateRBLDemo()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">selected</span><select class=\"demo-panel-select\" id=\"rbl-demo-selected\" onchange=\"updateRBLDemo()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used for mutually exclusive form choices: payment method, shipping option, preference questions."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own gap, vertical padding, and typography, all token-bound. The 12px gap is real auto-layout spacing — the <code>_space_12</code> annotation instance that used to shim it has been removed, so the row maps to native padding rather than a spacer view."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The compound <code>\"default - error\"</code> / <code>\"large - error\"</code> values are gone. Five orthogonal props — <code>Style</code> × <code>State</code> × <code>Size</code> × <code>isSelected</code> × <code>isError</code> — in the same order as the Radio Button atom, so native enum mapping is clean."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Wraps the Radio Button atom and mirrors its schema exactly — same props, same order, same 39 variants — so every atom state is reachable through the row. Radio size now pairs to label size (<code>Size=Large</code> nests the 24 × 24 atom) instead of always instancing the small radio."
      }
    ],
    "behavior": [
      {
        "state": "Default (unselected)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isSelected=false",
        "notes": "Empty ring, label <code>#445C85</code>. Resting state for every unpicked row."
      },
      {
        "state": "Selected",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isSelected=true",
        "notes": "Brand ring + dot <code>#005CE5</code>. Exactly one row per group carries this."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Radio darkens to <code>#2340A9</code> and the label to <code>#0A2757</code>. Derived at runtime from the touch interaction, not passed as a parameter."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Radio and label both mute. Ships at both <code>isSelected</code> values, so a disabled group renders its unselected rows."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "isError=true",
        "notes": "Radio switches to <code>#D61B2C</code>; the label is unchanged. Orthogonal to <code>State</code> — combines with Default and Pressed."
      },
      {
        "state": "Selected — check style",
        "ios": "yes",
        "android": "yes",
        "property": "Style=Check, isSelected=true",
        "notes": "Filled circle + vector checkmark. For single-select list rows; only meaningful when selected."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: <code>size</code> no longer encodes state — the compound <code>\"default - error\"</code> / <code>\"large - error\"</code> strings are gone, replaced by orthogonal <code>Size</code> (Large/Medium/Small) × <code>State</code> (Default/Pressed/Disabled) × <code>isError</code> props. Native enum mapping is now clean. (C2)"
      },
      {
        "body": "v2.0: Radio size now pairs to label size — <code>Size=Large</code> nests the 24 × 24 atom instead of hardcoding the 16 × 16 small radio into every variant. (C6)"
      },
      {
        "body": "v2.0: Full state coverage added — <code>isSelected</code>, <code>State=Pressed</code>, <code>State=Disabled</code>, and <code>isError</code>, including <code>Disabled + isSelected=false</code> so a disabled radio group renders its unselected rows. 39 variants total. (C5)"
      },
      {
        "body": "v2.0: <code>_space_12</code> spacer instance removed — the 12px gap is now real auto-layout spacing. The annotation instance (a <code>#0500FF</code> fill wrapping a Roboto <code>\"12\"</code> text node) no longer ships inside the component, and the layout maps to native padding rather than a spacer view. (C1/C4)"
      },
      {
        "body": "v2.0: Layer typo fixed — <code>icon-ofsset</code> renamed to <code>icon-offset</code> across all 39 variants. (C1)"
      },
      {
        "body": "v2.0: Schema aligned with the Radio Button atom — same five props, same property order, same 39-variant coverage. The wrapper can now express everything the atom can. (C2)"
      },
      {
        "body": "v2.0: Check + Pressed mislabel corrected — three Check variants (<code>26184:2839 / 2845 / 2851</code>) were labelled <code>isError=true</code> while painted pressed-navy, which also left <code>Check + Pressed + isError=false</code> non-existent. Renamed to <code>isError=false</code>; label and paint now agree and the wrapper matches the atom. (C5)"
      },
      {
        "body": "v2.0: <code>Disabled</code> deliberately excludes <code>isError</code> — confirmed intentional, matching the atom. A locked row offers no path to resolve a validation error, so the combination ships no variants by design. (C5)"
      },
      {
        "body": "v2.0: Nesting the radio as a plain INSTANCE rather than a Figma Slot reviewed and accepted — the mirrored 39-variant matrix already exposes every atom state through <code>Style</code> / <code>State</code> / <code>Size</code> / <code>isSelected</code> / <code>isError</code>, so a Slot would largely duplicate it. (C4)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Previously blocked by the <code>size</code> prop split and missing state variants — both resolved in v2.0. Registration is now unblocked, but the SwiftUI / Compose mappings are not yet wired.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Make the whole row tappable.",
        "body": "The label should be part of the tap target, not just the radio — standard for form rows and a meaningful hit-area win on mobile. Runtime behaviour, so it can't be expressed in Figma; document it in Accessibility instead.",
        "tag": "A11y"
      },
      {
        "headline": "Register Code Connect mapping to <code>EBRadioButtonRow</code>.",
        "body": "With the prop split, size pairing, and state coverage all shipped, wire the Figma properties (Style, State, Size, isSelected, isError) 1:1 to the SwiftUI / Compose API — forwarding the same values down to the nested <code>EBRadioButton</code>.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Split the <code>size</code> prop.",
        "body": "v2.0: Applied — and taken further than proposed. <code>Size</code> × <code>State</code> × <code>isError</code> × <code>isSelected</code> × <code>Style</code>, with pressed folded into <code>State</code>. The compound string values are gone.",
        "tag": "Property"
      },
      {
        "headline": "Pair radio size to label size.",
        "body": "v2.0: Applied — <code>Size=Large</code> nests the 24 × 24 atom; each size pairs correctly instead of always instancing the small radio.",
        "tag": "Composition"
      },
      {
        "headline": "Add disabled + selected variants.",
        "body": "v2.0: Applied — full coverage across <code>isSelected</code>, <code>Pressed</code>, <code>Disabled</code>, and <code>isError</code>, including the disabled-unselected rows.",
        "tag": "State"
      },
      {
        "headline": "Adopt a Figma Slot for the nested radio.",
        "body": "v2.0: Reviewed and closed as not needed — the mirrored 39-variant matrix already exposes every atom state, so a Slot would largely duplicate the variant surface. Revisit only if consumers need to nest a radio the matrix can't express.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": radioButtonWithLabelDemoControls,
        "title": "Default",
        "node": "18482:35674",
        "description": "Small radio + 14 / 16 label. Default unselected state.",
        "previewHtml": "<div id=\"rbl-spec-default-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding:24px;background:#F4F6FA;border-radius:8px;min-height:80px;\"><div style=\"display:inline-flex;gap:12px;align-items:center;padding:4px 0;\"><div style=\"display:flex;align-items:center;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle></svg></div><div style=\"color:#445C85;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:14px;line-height:16px;letter-spacing:0.25px;\">Label</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Default",
                "mono": false,
                "prop": "size"
              },
              {
                "key": "State",
                "value": "Default",
                "mono": false,
                "prop": "isError"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "radio-button/color/default/unselected/border",
                "variants": {
                  "selected:true": { "hide": true },
                  "isError:true":  { "hide": true }
                }
              },
              { "key": "Fill", "value": "#005CE5", "token": "radio-button/color/default/selected/bg",
                "variants": { "selected:false": { "hide": true } }
              },
              { "key": "Label", "value": "#445C85", "token": "radio-button/color/default/unselected/text" },
              { "key": "Error border", "value": "#D61B2C", "token": "radio-button/color/error/unselected/border",
                "variants": { "isError:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Outer ring",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Inner dot",
                "value": "12 × 12",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (radio ↔ label)",
                "value": "12px",
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
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 20 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>option<span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> option<span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "large",
        "demoKey": "large",
        "demoControls": radioButtonWithLabelDemoControls,
        "title": "Large",
        "node": "18482:35686",
        "description": "16 / 20 label (Proxima Soft Semibold). Still uses the 16 × 16 radio — should be 20 × 20.",
        "previewHtml": "<div id=\"rbl-spec-large-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding:24px;background:#F4F6FA;border-radius:8px;min-height:80px;\"><div style=\"display:inline-flex;gap:12px;align-items:center;padding:4px 0;\"><div style=\"display:flex;align-items:center;\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"2\"></circle></svg></div><div style=\"color:#445C85;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:16px;line-height:20px;letter-spacing:0.25px;\">Label</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Large",
                "mono": false,
                "prop": "size"
              },
              {
                "key": "State",
                "value": "Default",
                "mono": false,
                "prop": "isError"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "radio-button/color/default/unselected/border",
                "variants": {
                  "selected:true": { "hide": true },
                  "isError:true":  { "hide": true }
                }
              },
              { "key": "Fill", "value": "#005CE5", "token": "radio-button/color/default/selected/bg",
                "variants": { "selected:false": { "hide": true } }
              },
              { "key": "Label", "value": "#445C85", "token": "radio-button/color/default/unselected/text" },
              { "key": "Error border", "value": "#D61B2C", "token": "radio-button/color/error/unselected/border",
                "variants": { "isError:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Outer ring",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Inner dot",
                "value": "12 × 12",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (radio ↔ label)",
                "value": "12px",
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
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 20 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>option<span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> option<span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "default-—-error",
        "demoKey": "default-error",
        "demoControls": radioButtonWithLabelDemoControls,
        "title": "Default — error",
        "node": "18482:35680",
        "description": "Default size with red radio border. Label text color unchanged.",
        "previewHtml": "<div id=\"rbl-spec-default-error-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding:24px;background:#F4F6FA;border-radius:8px;min-height:80px;\"><div style=\"display:inline-flex;gap:12px;align-items:center;padding:4px 0;\"><div style=\"display:flex;align-items:center;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"7\" fill=\"none\" stroke=\"#D61B2C\" stroke-width=\"2\"></circle></svg></div><div style=\"color:#445C85;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:14px;line-height:16px;letter-spacing:0.25px;\">Label</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Default — error",
                "mono": false,
                "prop": "size"
              },
              {
                "key": "State",
                "value": "Error",
                "mono": false,
                "prop": "isError"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "radio-button/color/default/unselected/border",
                "variants": {
                  "selected:true": { "hide": true },
                  "isError:true":  { "hide": true }
                }
              },
              { "key": "Fill", "value": "#005CE5", "token": "radio-button/color/default/selected/bg",
                "variants": { "selected:false": { "hide": true } }
              },
              { "key": "Label", "value": "#445C85", "token": "radio-button/color/default/unselected/text" },
              { "key": "Error border", "value": "#D61B2C", "token": "radio-button/color/error/unselected/border",
                "variants": { "isError:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Outer ring",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Inner dot",
                "value": "12 × 12",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (radio ↔ label)",
                "value": "12px",
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
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 20 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>option<span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> option<span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "large-—-error",
        "demoKey": "large-error",
        "demoControls": radioButtonWithLabelDemoControls,
        "title": "Large — error",
        "node": "18482:35692",
        "description": "Large size with red radio border.",
        "previewHtml": "<div id=\"rbl-spec-large-error-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding:24px;background:#F4F6FA;border-radius:8px;min-height:80px;\"><div style=\"display:inline-flex;gap:12px;align-items:center;padding:4px 0;\"><div style=\"display:flex;align-items:center;\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"#D61B2C\" stroke-width=\"2\"></circle></svg></div><div style=\"color:#445C85;font-family:'Proxima Soft', system-ui;font-weight:600;font-size:16px;line-height:20px;letter-spacing:0.25px;\">Label</div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Large — error",
                "mono": false,
                "prop": "size"
              },
              {
                "key": "State",
                "value": "Error",
                "mono": false,
                "prop": "isError"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "radio-button/color/default/unselected/border",
                "variants": {
                  "selected:true": { "hide": true },
                  "isError:true":  { "hide": true }
                }
              },
              { "key": "Fill", "value": "#005CE5", "token": "radio-button/color/default/selected/bg",
                "variants": { "selected:false": { "hide": true } }
              },
              { "key": "Label", "value": "#445C85", "token": "radio-button/color/default/unselected/text" },
              { "key": "Error border", "value": "#D61B2C", "token": "radio-button/color/error/unselected/border",
                "variants": { "isError:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Outer ring",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Inner dot",
                "value": "12 × 12",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12 vertical · 0 horizontal",
                "mono": true
              },
              {
                "key": "Gap (radio ↔ label)",
                "value": "12px",
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
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 20 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>option<span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBRadioRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Option label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> option<span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "default",
            "token": "Primary/Multi-line Label/Light/Small",
            "values": [
              "Proxima Soft Semibold · 14 / 16 · +0.25"
            ]
          },
          {
            "role": "large",
            "token": "Primary/Multi-line Label/Light/Base",
            "values": [
              "Proxima Soft Semibold · 16 / 20 · +0.25"
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
            "role": "Radio → label gap",
            "token": "space/space-12",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Radio icon offset padding (top)",
            "token": "space/space-4",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Text container padding (default)",
            "token": "space/space-4",
            "values": [
              "4px vertical"
            ]
          },
          {
            "role": "Text container padding (large)",
            "token": "—",
            "values": [
              "3t / 5b"
            ]
          },
          {
            "role": "Default width (demo instance)",
            "token": "—",
            "values": [
              "63px"
            ]
          },
          {
            "role": "Large width (demo instance)",
            "token": "—",
            "values": [
              "69px"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:radio:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "size=default / large",
          "swift": "size: EBRadioSize",
          "compose": ".controlSize(.small/.large)"
        },
        {
          "figma": "\"- error\" suffix",
          "swift": "isError: Bool",
          "compose": ".ebError(true)"
        },
        {
          "figma": "—",
          "swift": "selected: Bool",
          "compose": "selected: Bool"
        },
        {
          "figma": "—",
          "swift": "label: String",
          "compose": "title: String"
        },
        {
          "figma": "—",
          "swift": "disabled: Bool",
          "compose": ".disabled(true)"
        },
        {
          "figma": "—",
          "swift": "onToggle",
          "compose": "onChange: (Bool) -&gt; Void"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Radio/EBRadioButtonWithLabel.swift",
        "compose": "android/components/radio/EBRadioButtonWithLabel.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default row</span>\n<span class=\"typ\">EBRadioButtonWithLabel</span>(<span class=\"str\">\"Pay with GCash\"</span>, <span class=\"prp\">selected</span>: $selection == .gcash) {\n    <span class=\"kw\">selection</span> = .gcash\n}\n\n<span class=\"cmt\">// Large row with error</span>\n<span class=\"typ\">EBRadioButtonWithLabel</span>(<span class=\"str\">\"Option A\"</span>, <span class=\"prp\">selected</span>: isSelected)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBRadioButtonWithLabel</span>(<span class=\"str\">\"Not available\"</span>, <span class=\"prp\">selected</span>: <span class=\"kw\">false</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Default row</span>\n<span class=\"typ\">EBRadioButtonWithLabel</span>(\n    label = <span class=\"str\">\"Pay with GCash\"</span>,\n    selected = selection == Option.Gcash,\n    onCheckedChange = { selection = Option.Gcash }\n)\n\n<span class=\"cmt\">// Large row with error</span>\n<span class=\"typ\">EBRadioButtonWithLabel</span>(\n    label = <span class=\"str\">\"Option A\"</span>,\n    selected = isSelected,\n    onCheckedChange = { isSelected = it },\n    size = <span class=\"typ\">EBRadioSize</span>.<span class=\"prp\">Large</span>,\n    isError = <span class=\"kw\">true</span>\n)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBRadioButtonWithLabel</span>(\n    label = <span class=\"str\">\"Not available\"</span>,\n    selected = <span class=\"kw\">false</span>,\n    onCheckedChange = { },\n    enabled = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Whole-row tap target",
        "ios": "Wrap the row in a <code>Button</code> or tap gesture — label must be tappable, not just the radio",
        "android": "Apply <code>Modifier.selectable(...)</code> to the row"
      },
      {
        "requirement": "Group semantics",
        "ios": "Wrap options in <code>.accessibilityElement(children: .contain)</code>",
        "android": "Use <code>Modifier.selectableGroup()</code> on parent"
      },
      {
        "requirement": "Role announcement",
        "ios": "Radio Button role inherited from the atom",
        "android": "<code>Role.RadioButton</code> via selectable"
      },
      {
        "requirement": "Error announcement",
        "ios": "Include error state in the option's accessibility label",
        "android": "Use <code>semantics { error(...) }</code>"
      },
      {
        "requirement": "Touch target size",
        "ios": "Row should be at least 44pt tall",
        "android": "48dp minimum"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names throughout: <code>icon-offset</code> (typo fixed in v2.0), <code>text-container</code>, <code>#label</code>. The <code>_space_12</code> annotation shim was removed — the 12px gap is real auto-layout spacing."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Five orthogonal props — <code>Style</code> × <code>State</code> × <code>Size</code> × <code>isSelected</code> × <code>isError</code> — in the same order as the atom. The compound <code>\"default - error\"</code> values are gone; booleans are lowercase <code>true</code>/<code>false</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Label colors, gap, and padding all token-bound. The radio itself inherits the atom's token-bound vector fills and strokes."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to an HStack / Row of radio + label. Auto-layout spacing translates to native padding — no spacer view to reproduce since <code>_space_12</code> was removed."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Full coverage: <code>isSelected</code> × <code>State</code> (Default / Pressed / Disabled) × <code>isError</code>, including <code>Disabled + isSelected=false</code>. Focused is N/A on mobile; <code>Disabled + isError</code> is a deliberate omission."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Radio size now pairs to label size — <code>Size=Large</code> nests the 24 × 24 atom instead of always instancing the 16 × 16 small radio."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Unblocked — the C2 prop split and state coverage both landed. No CLI mappings registered yet; waiting on the native component to exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 39,
      "description": "<code>Style</code> (2) × <code>State</code> (3) × <code>Size</code> (3) × <code>isSelected</code> (2) × <code>isError</code> (2) = 72 theoretical. 39 ship — mirroring the Radio Button atom exactly. <code>Check</code> is only meaningful when selected, and <code>Disabled</code> deliberately excludes <code>isError</code>. Grouped below by Style × State; each row covers all three sizes (Large / Medium / Small).",
      "columns": [
        "Style",
        "State",
        "isSelected",
        "isError",
        "Count",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Default",
            "false",
            "false",
            "3",
            "Empty ring + label"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "true",
            "false",
            "3",
            "Brand ring + dot, brand label"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "false",
            "true",
            "3",
            "Error ring #D61B2C"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "true",
            "true",
            "3",
            "Error ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "false",
            "false",
            "3",
            "Pressed ring #2340A9, navy label"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "true",
            "false",
            "3",
            "Pressed ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "false",
            "true",
            "3",
            "Pressed error ring"
          ]
        },
        {
          "cells": [
            "Default",
            "Pressed",
            "true",
            "true",
            "3",
            "Pressed error ring + dot"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "false",
            "false",
            "3",
            "Muted empty ring + muted label"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "true",
            "false",
            "3",
            "Muted ring + dot"
          ]
        },
        {
          "cells": [
            "Check",
            "Default",
            "true",
            "false",
            "3",
            "Brand fill + vector checkmark"
          ]
        },
        {
          "cells": [
            "Check",
            "Pressed",
            "true",
            "false",
            "3",
            "Pressed fill + checkmark"
          ]
        },
        {
          "cells": [
            "Check",
            "Disabled",
            "true",
            "false",
            "3",
            "Muted fill + checkmark"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "July 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt · node 26184:2712",
      "rows": [
        {
          "body": "<strong>Component rebuilt on a new node</strong> — 39 variants across <code>Style</code> × <code>State</code> × <code>Size</code> × <code>isSelected</code> × <code>isError</code>, mirroring the Radio Button atom exactly (same props, same order, same coverage).\n          <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong><code>size</code> no longer encodes state</strong> — the compound <code>\"default - error\"</code> / <code>\"large - error\"</code> values are replaced by orthogonal <code>Size</code> × <code>State</code> × <code>isError</code> props. Native enum mapping is clean.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Radio size now pairs to label size</strong> — <code>Size=Large</code> nests the 24 × 24 atom instead of hardcoding the 16 × 16 small radio into every variant.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Full state coverage added</strong> — <code>isSelected</code>, <code>Pressed</code>, <code>Disabled</code>, and <code>isError</code>, including <code>Disabled + isSelected=false</code> so disabled groups render their unselected rows.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong><code>_space_12</code> spacer removed</strong> — the 12px gap is now real auto-layout spacing. The annotation instance (<code>#0500FF</code> fill wrapping a Roboto <code>\"12\"</code> text node) no longer ships inside the component, and layout maps to native padding rather than a spacer view.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 · C4 Resolved"
          }
        },
        {
          "body": "<strong>Layer typo fixed</strong> — <code>icon-ofsset</code> → <code>icon-offset</code> across all 39 variants.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>Check + Pressed mislabel corrected</strong> — <code>26184:2839 / 2845 / 2851</code> were labelled <code>isError=true</code> while painted pressed-navy, leaving <code>Check + Pressed + isError=false</code> non-existent. Renamed to <code>isError=false</code>; the wrapper now matches the atom.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong><code>Disabled + isError=true</code> not covered</strong> — same gap as the atom. Likely intentional, but undocumented. Confirm and record.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
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
      "header": "Initial Assessment · node 18482:35673",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 4 variants (default / large × error). <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong><code>size</code> prop encodes state</strong> — \"default - error\" and \"large - error\" mix size + state. Should split. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Missing state variants</strong> — No disabled or selected. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Radio hardcoded to small</strong> — large label still uses 16 × 16 radio. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
