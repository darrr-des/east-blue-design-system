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
    "node": "18482:35673",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-35673",
    "description": "A form row pairing a Radio Button with a text label. 4 variants across a <code>size</code> property with mixed values: <code>default</code>, <code>large</code>, <code>default - error</code>, <code>large - error</code>. Only the unselected state is documented across sizes.",
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
    "navGroup": "Radio",
    "verdict": {
      "kind": "fix",
      "title": "Split size + state props",
      "text": "Split the <code>size</code> property into <code>size=default/large</code> and <code>isError: Bool</code>. Add <code>disabled</code> and <code>selected</code> variants. Instance-swap (or Figma Slot) the radio so the large label pairs with a large radio. The label component should track the atom's state via a single <code>selected</code> prop forwarded down."
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
        "note": "Carries gap, vertical padding, and typography. Body color, font, and indent all token-bound."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>size</code> values include <code>\"default - error\"</code> and <code>\"large - error\"</code> — space-hyphen-space strings that encode state in a size prop. Breaks native enum mapping. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Always instances the small radio — even when <code>size=large</code>. The large label doesn't visually scale the radio accordingly. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "<code>size</code> property encodes state.",
        "body": "Values include <code>\"default - error\"</code> and <code>\"large - error\"</code>. Should be two orthogonal props: <code>size = default | large</code> + <code>isError: Bool</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Missing state variants.",
        "body": "No <code>disabled</code> or <code>selected</code> variants. Forms need all four selection states (selected/unselected × enabled/disabled) plus the error variant.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Radio is hardcoded to the small instance.",
        "body": "Even in <code>size=large</code> variants, the radio uses the 16×16 small atom. Large label should pair with the 20×20 large radio.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the <code>size</code> prop split and missing state variants land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Split the <code>size</code> prop",
        "body": ":<br>• <code>size: default / large</code><br>• <code>isError: Bool</code><br>• <code>selected: Bool</code><br>• <code>disabled: Bool</code> (or unified <code>state</code> enum)<br>Flat orthogonal props — eliminates the compound string values.",
        "tag": "Property"
      },
      {
        "headline": "Pair radio size to label size",
        "body": "— <code>size=default</code> → small radio (16 × 16); <code>size=large</code> → large radio (20 × 20). The current always-small behavior breaks visual hierarchy.",
        "tag": "Composition"
      },
      {
        "headline": "Adopt a Figma Slot for the radio",
        "body": "— lets consumers swap in a Radio Button with any state (selected/disabled/error/etc.) from the atom component. Maps to <code>@ViewBuilder</code> / <code>@Composable</code> slots.",
        "tag": "Slot"
      },
      {
        "headline": "Add disabled + selected variants",
        "body": "— forms need all state combinations documented.",
        "tag": "State"
      },
      {
        "headline": "Make the whole row tappable",
        "body": "— labels should be tap targets, not just the radio. Document in Accessibility.",
        "tag": "A11y"
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
        "notes": "<code>icon-ofsset</code> (typo — \"offset\"), <code>text-container</code>. Minor spelling issue."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>size</code> values encode error state with space-hyphen-space strings."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Label colors, gap, padding all token-bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "HStack / Row with radio + label."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No disabled, selected, or pressed variants."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Always uses small radio instance — large label doesn't scale the radio."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2 prop split."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "After the prop split, these 4 become 2 <code>size</code> × 2 <code>isError</code> = 4 clean variants, with <code>selected</code> + <code>disabled</code> added as booleans (not variants).",
      "columns": [
        "size (current)",
        "Decomposed",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "<code>default</code>",
            "size=default, isError=false",
            "18482:35674"
          ]
        },
        {
          "cells": [
            "<code>large</code>",
            "size=large, isError=false",
            "18482:35686"
          ]
        },
        {
          "cells": [
            "<code>default - error</code>",
            "size=default, isError=true",
            "18482:35680"
          ]
        },
        {
          "cells": [
            "<code>large - error</code>",
            "size=large, isError=true",
            "18482:35692"
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
