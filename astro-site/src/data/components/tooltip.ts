import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 6295:79647, in its order: three
// variant axes, two text properties, four booleans. The three ⤷ …Slot
// layers are SLOTs and get no control.
const tooltipDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Text',
        prop: 'text',
        defaultValue: 'header',
        options: [
          { value: 'header', label: 'Header' },
          { value: 'description', label: 'Description' },
          { value: 'both', label: 'Both' },
        ],
      },
      {
        label: 'Placement',
        prop: 'placement',
        defaultValue: 'top',
        options: [
          { value: 'top', label: 'Top' },
          { value: 'bottom', label: 'Bottom' },
          { value: 'left', label: 'Left' },
          { value: 'right', label: 'Right' },
        ],
      },
      {
        label: 'Appearance',
        prop: 'appearance',
        defaultValue: 'opaque',
        options: [
          { value: 'opaque', label: 'Opaque' },
          { value: 'translucent', label: 'Translucent' },
        ],
      },
      {
        label: 'Header',
        prop: 'header',
        control: 'input',
        options: [],
        defaultValue: 'Header',
      },
      {
        label: 'Description',
        prop: 'description',
        control: 'input',
        options: [],
        defaultValue: 'Description goes here',
      },
      {
        label: 'hasDismiss',
        prop: 'hasdismiss',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasArrow',
        prop: 'hasarrow',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasLeadingAsset',
        prop: 'hasleadingasset',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasAction',
        prop: 'hasaction',
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

export const tooltip: ComponentData = {
    "meta": {
      "slug": "tooltip",
      "name": "Tooltip",
      "node": "6295:79647",
      "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6295-79647",
      "description": "A pointered callout for walkthroughs and contextual hints. Carries a header, a description, and three slots — <code>⤷ AssetSlot</code>, <code>⤷ CloseSlot</code>, <code>⤷ ActionSlot</code>.",
      "badges": [
        {
          "kind": "keep",
          "label": "Keep"
        },
        {
          "kind": "ready",
          "label": "Ready"
        }
      ],
      "navGroup": "Tooltip",
      "verdict": {
        "kind": "keep",
        "title": "Ship as-is",
        "text": "Consolidates three sibling components — <code>Onboarding - Tooltip</code>, <code>Tooltip Blurred and Transparent</code> and <code>Tooltip V2</code> — into one 24-variant set. Every issue raised against those three is resolved: the pointer is a vector, the close is a DS icon instance, the four pointer booleans became a single <code>Placement</code> enum, and content sits in three named Figma slots. Interaction states are carried by the Button and close icon and are assessed on those components. Code Connect mappings are left open for engineering to register."
      }
    },
    "overview": {
      "inContextNote": "Contexts are illustrative. Tooltip sits above a dimmed cut-out during walkthroughs, and inline against a target element for contextual hints. The GBonds walkthrough screens in the Figma section show both.",
      "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tt-demo-preview\"><svg width=\"336\" height=\"134\" viewBox=\"0 0 336 134\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"12.5\" width=\"335\" height=\"121\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"/><g transform=\"translate(15, 1)\"><path d=\"M15.08 2.81459C13.6929 1.30131 11.3071 1.3013 9.91996 2.81459L1.5 12L23.5 12L15.08 2.81459Z\" fill=\"#FFFFFF\"/><path d=\"M0.5 11.5H2.05464C2.33812 11.5 2.60829 11.3797 2.79793 11.169L10.831 2.24329C11.2569 1.77017 11.8635 1.5 12.5 1.5C13.1365 1.5 13.7431 1.77017 14.169 2.24329L22.2021 11.169C22.3917 11.3797 22.6619 11.5 22.9454 11.5H24.5\" stroke=\"#E5EBF4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></g><rect x=\"16\" y=\"28\" width=\"46\" height=\"46\" rx=\"23\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-dasharray=\"3 3\"/><text x=\"74\" y=\"45.5\" fill=\"#0A2757\" font-size=\"18\" font-weight=\"700\" letter-spacing=\"0.25\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Header</text><text x=\"74\" y=\"68.5\" fill=\"#6780A9\" fill-opacity=\"1\" font-size=\"12\" font-weight=\"600\" font-family=\"'BarkAda', system-ui, sans-serif\">Description goes here</text><g stroke=\"#0A2757\" stroke-width=\"1.6\" stroke-linecap=\"round\"><line x1=\"307.5\" y1=\"31.5\" x2=\"316.5\" y2=\"40.5\"/><line x1=\"316.5\" y1=\"31.5\" x2=\"307.5\" y2=\"40.5\"/></g><rect x=\"258\" y=\"90\" width=\"59\" height=\"28\" rx=\"14\" ry=\"14\" fill=\"#005CE5\"/><text x=\"287.5\" y=\"109\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"16\" font-weight=\"700\" letter-spacing=\"0.25\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Next</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Text</span><select class=\"demo-panel-select\" id=\"tt-demo-text\" onchange=\"updateTooltipDemo()\"><option value=\"header\">Header</option><option value=\"description\">Description</option><option value=\"both\" selected=\"\">Both</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Placement</span><select class=\"demo-panel-select\" id=\"tt-demo-placement\" onchange=\"updateTooltipDemo()\"><option value=\"top\" selected=\"\">Top</option><option value=\"bottom\">Bottom</option><option value=\"left\">Left</option><option value=\"right\">Right</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Appearance</span><select class=\"demo-panel-select\" id=\"tt-demo-appearance\" onchange=\"updateTooltipDemo()\"><option value=\"opaque\" selected=\"\">Opaque</option><option value=\"translucent\">Translucent</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Slots</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">⤷ AssetSlot</span><select class=\"demo-panel-select\" id=\"tt-demo-asset\" onchange=\"updateTooltipDemo()\"><option value=\"on\" selected=\"\">Filled</option><option value=\"off\">Empty</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">⤷ CloseSlot</span><select class=\"demo-panel-select\" id=\"tt-demo-close\" onchange=\"updateTooltipDemo()\"><option value=\"on\" selected=\"\">Filled</option><option value=\"off\">Empty</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">⤷ ActionSlot</span><select class=\"demo-panel-select\" id=\"tt-demo-action\" onchange=\"updateTooltipDemo()\"><option value=\"on\" selected=\"\">Filled</option><option value=\"off\">Empty</option></select></div></div></div></div>",
      "traits": [
        {
          "name": "Reusable",
          "rating": "pass",
          "note": "One component covers walkthrough coach-marks and inline hints across both surfaces. 24 variants span every text, placement and appearance combination with no gaps."
        },
        {
          "name": "Self-contained",
          "rating": "pass",
          "note": "Carries its own surface, border, radius, padding and pointer. Height is a hug — <code>Details</code> takes the taller of the 46px asset slot and the text stack, so emptying a slot shrinks the card."
        },
        {
          "name": "Consistent",
          "rating": "pass",
          "note": "One vocabulary end to end: the <code>Text</code> axis reads <code>Header</code> / <code>Description</code> / <code>Both</code> and the layers are <code>#header</code> / <code>#description</code>. All three slots use the <code>⤷ …Slot</code> convention shared with the Table family."
        },
        {
          "name": "Composable",
          "rating": "pass",
          "note": "Composes DS parts rather than redrawing them — the close is an icon instance and the CTA is a real <code>Button - XSmall</code>, both inside named slots a consumer can swap or empty."
        }
      ],
      "behavior": [
        {
          "state": "Default",
          "ios": "yes",
          "android": "yes",
          "property": "Text × Placement × Appearance",
          "notes": "Tooltip is a presentation surface with no interaction states of its own. Tap and pressed behaviour belong to the <code>Button - XSmall</code> in <code>⤷ ActionSlot</code> and the close icon in <code>⤷ CloseSlot</code>."
        }
      ],
      "resolved": [
        {
          "headline": "Three sibling Tooltips folded into one component.",
          "body": "<code>Onboarding - Tooltip</code>, <code>Tooltip Blurred and Transparent</code> and <code>Tooltip V2</code> are gone. The section now holds a single <code>Tooltip</code> set, and the visual treatment that shipped as its own component is now <code>Appearance=Translucent</code>.",
          "tag": {
            "criterion": "C2",
            "label": "C2 · Variant & Property Naming"
          }
        },
        {
          "headline": "Pointer direction is a single enum.",
          "body": "The four independent booleans on <code>Tooltip V2</code>, and the conflicting pointer schema on <code>Onboarding - Tooltip</code>, are replaced by <code>Placement = Top | Bottom | Left | Right</code>. Geometry follows: 24 × 12 on the vertical placements, 12 × 24 on the horizontal ones.",
          "tag": {
            "criterion": "C2",
            "label": "C2 · Variant & Property Naming"
          }
        },
        {
          "headline": "Pointer is a vector, not a raster.",
          "body": "All three predecessors shipped the triangle as a raster asset. It is now a real vector — a filled path plus a rounded stroke — that recolours per appearance and rotates per placement.",
          "tag": {
            "criterion": "C6",
            "label": "C6 · Asset & Icon Quality"
          }
        },
        {
          "headline": "Close is a DS icon instance.",
          "body": "Previously an image asset on two of the three siblings. It is now an icon instance sitting in <code>⤷ CloseSlot</code>.",
          "tag": {
            "criterion": "C6",
            "label": "C6 · Asset & Icon Quality"
          }
        },
        {
          "headline": "Content sits in named slots.",
          "body": "The missing body and CTA support is resolved by three Figma slots — <code>⤷ AssetSlot</code> (46 × 46), <code>⤷ CloseSlot</code> (16 × 16) and <code>⤷ ActionSlot</code> holding a real <code>Button - XSmall</code>. The leading gray placeholder circle is now the slot default rather than baked artwork.",
          "tag": {
            "criterion": "C1",
            "label": "C1 · Layer Structure & Naming"
          }
        },
        {
          "headline": "One vocabulary across property, layer and content.",
          "body": "The <code>Text</code> axis, the layer names and the slot names were reconciled in the same pass — <code>Header</code> / <code>Description</code> / <code>Both</code>, <code>#header</code> / <code>#description</code>, and the <code>⤷ …Slot</code> convention shared with Table.",
          "tag": {
            "criterion": "C1",
            "label": "C1 · Layer Structure & Naming"
          }
        }
      ],
      "open": [
        {
          "headline": "Code Connect mappings not registered.",
          "body": "Left open for engineering. The property surface is stable and linkable — three enums and three named slots, with layer names that match the property values.",
          "tag": {
            "criterion": "C7",
            "label": "C7 · Code Connect Linkability"
          }
        }
      ],
      "recommendations": [
        {
          "headline": "Document the dismiss contract and walkthrough lifecycle.",
          "body": "Tooltip renders a close affordance but owns no dismiss behaviour. Write down who dismisses it, whether dismissal advances a walkthrough step, and what happens to the backdrop cut-out — otherwise each consumer invents it. No Figma change required.",
          "tag": "Docs"
        },
        {
          "headline": "Fold Tooltip into the library-wide slot naming rule.",
          "body": "Tooltip now follows the Table family convention (<code>⤷ AssetSlot</code>, <code>⤷ CloseSlot</code>, <code>⤷ ActionSlot</code>), making it two families to one against the carousel components’ unsuffixed form. Table already carries an open recommendation to write a single rule into the guidelines — this component should be named in it.",
          "tag": "Docs"
        }
      ]
    },
    "style": {
      "heading": "Styles",
      "specCards": [
        {
          "cardKey": "tt-spec-main",
          "demoKey": "main",
          "title": "Tooltip",
          "node": "6295:79647",
          "description": "",
          "previewHtml": "<div id=\"tooltip-spec-main\" class=\"spec-preview-body\"></div>",
          "demoControls": tooltipDemoControls,
          "sections": [
            {
              "label": "Properties",
              "slug": "props",
              "rows": [
                {
                  "key": "Text",
                  "value": "Header",
                  "prop": "text"
                },
                {
                  "key": "Placement",
                  "value": "Top",
                  "prop": "placement"
                },
                {
                  "key": "Appearance",
                  "value": "Opaque",
                  "prop": "appearance"
                },
                {
                  "key": "Header",
                  "value": "Header",
                  "prop": "header",
                  "variants": { "text:description": { "hide": true } }
                },
                {
                  "key": "Description",
                  "value": "Description goes here",
                  "prop": "description",
                  "variants": { "text:header": { "hide": true } }
                },
                { "key": "hasDismiss", "value": "True", "prop": "hasdismiss" },
                { "key": "hasArrow", "value": "True", "prop": "hasarrow" },
                { "key": "hasLeadingAsset", "value": "True", "prop": "hasleadingasset" },
                { "key": "hasAction", "value": "True", "prop": "hasaction" },
                { "key": "⤷ CloseSlot", "value": "Slot · Close icon" },
                { "key": "⤷ AssetSlot", "value": "Slot · Icon Placeholder" },
                { "key": "⤷ ActionSlot", "value": "Slot · Button - XSmall" },
                {
                  "key": "Resolved variant",
                  "value": "6295:79648 · 336 × 134",
                  "mono": true,
                  "variants": {
                    "text:header|placement:top|appearance:opaque": {
                      "value": "6295:79648 · 336 × 134"
                    },
                    "text:description|placement:top|appearance:opaque": {
                      "value": "6295:79663 · 336 × 134"
                    },
                    "text:both|placement:top|appearance:opaque": {
                      "value": "6295:79678 · 336 × 134"
                    },
                    "text:header|placement:top|appearance:translucent": {
                      "value": "6295:79694 · 336 × 134"
                    },
                    "text:description|placement:top|appearance:translucent": {
                      "value": "6295:79709 · 336 × 134"
                    },
                    "text:both|placement:top|appearance:translucent": {
                      "value": "6295:79724 · 336 × 134"
                    },
                    "text:header|placement:bottom|appearance:opaque": {
                      "value": "6295:79740 · 336 × 134"
                    },
                    "text:description|placement:bottom|appearance:opaque": {
                      "value": "6295:79755 · 336 × 134"
                    },
                    "text:both|placement:bottom|appearance:opaque": {
                      "value": "6295:79770 · 336 × 134"
                    },
                    "text:header|placement:bottom|appearance:translucent": {
                      "value": "6295:79786 · 336 × 134"
                    },
                    "text:description|placement:bottom|appearance:translucent": {
                      "value": "6295:79801 · 336 × 134"
                    },
                    "text:both|placement:bottom|appearance:translucent": {
                      "value": "6295:79816 · 336 × 134"
                    },
                    "text:header|placement:left|appearance:opaque": {
                      "value": "6295:79832 · 348 × 122"
                    },
                    "text:description|placement:left|appearance:opaque": {
                      "value": "6295:79847 · 348 × 122"
                    },
                    "text:both|placement:left|appearance:opaque": {
                      "value": "6295:79862 · 348 × 122"
                    },
                    "text:header|placement:left|appearance:translucent": {
                      "value": "6295:79878 · 348 × 122"
                    },
                    "text:description|placement:left|appearance:translucent": {
                      "value": "6295:79893 · 348 × 122"
                    },
                    "text:both|placement:left|appearance:translucent": {
                      "value": "6295:79908 · 348 × 122"
                    },
                    "text:header|placement:right|appearance:opaque": {
                      "value": "6295:79924 · 348 × 122"
                    },
                    "text:description|placement:right|appearance:opaque": {
                      "value": "6295:79939 · 348 × 122"
                    },
                    "text:both|placement:right|appearance:opaque": {
                      "value": "6295:79954 · 348 × 122"
                    },
                    "text:header|placement:right|appearance:translucent": {
                      "value": "6295:79970 · 348 × 122"
                    },
                    "text:description|placement:right|appearance:translucent": {
                      "value": "6295:79985 · 348 × 122"
                    },
                    "text:both|placement:right|appearance:translucent": {
                      "value": "6295:80000 · 348 × 122"
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
                  "key": "Opacity",
                  "value": "100%",
                  "mono": true,
                  "variants": {
                    "appearance:translucent": {
                      "value": "80% — on the whole variant"
                    }
                  }
                },
                {
                  "key": "Surface",
                  "value": "#FFFFFF",
                  "token": "—",
                  "variants": {
                    "appearance:translucent": {
                      "value": "#0A2757"
                    }
                  }
                },
                {
                  "key": "Border",
                  "value": "#E5EBF4",
                  "token": "—",
                  "variants": {
                    "appearance:translucent": {
                      "value": "#0A2757"
                    }
                  }
                },
                {
                  "key": "Header",
                  "value": "#0A2757",
                  "token": "—",
                  "variants": {
                    "appearance:translucent": {
                      "value": "#FFFFFF"
                    },
                    "text:description": {
                      "hide": true
                    },
                    "text:description|appearance:translucent": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Description",
                  "value": "#6780A9",
                  "token": "—",
                  "variants": {
                    "appearance:translucent": {
                      "value": "#F6F9FD @ 80%"
                    },
                    "text:header": {
                      "hide": true
                    },
                    "text:header|appearance:translucent": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Close glyph",
                  "value": "#0A2757",
                  "token": "—",
                  "variants": { "hasdismiss:false": { "hide": true },
                    "appearance:translucent": {
                      "value": "#FFFFFF"
                    }
                  }
                },
                {
                  "key": "Asset placeholder",
                  "value": "#D7E0EF",
                  "token": "—",
                  "variants": { "hasleadingasset:false": { "hide": true } }
                },
                {
                  "key": "Button",
                  "value": "#005CE5",
                  "token": "—",
                  "variants": { "hasaction:false": { "hide": true } }
                }
              ]
            },
            {
              "label": "Typography",
              "slug": "typo",
              "rows": [
                {
                  "key": "Header",
                  "value": "Primary/Headlines/Block",
                  "mono": true,
                  "variants": {
                    "text:description": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Description",
                  "value": "Secondary/Bold/Caption",
                  "mono": true,
                  "variants": {
                    "text:header": {
                      "hide": true
                    }
                  }
                },
                {
                  "key": "Button label",
                  "value": "Primary/Label/Base",
                  "mono": true,
                  "variants": { "hasaction:false": { "hide": true } }
                }
              ]
            },
            {
              "label": "Layout",
              "slug": "layout",
              "rows": [
                {
                  "key": "Variant",
                  "value": "336 × 134 — all booleans True",
                  "mono": true,
                  "variants": {
                    "placement:left": {
                      "value": "348 × 122"
                    },
                    "placement:right": {
                      "value": "348 × 122"
                    }
                  }
                },
                {
                  "key": "Container",
                  "value": "336 × 122 · radius 6",
                  "mono": true,
                  "variants": {"text:header|hasleadingasset:true|hasaction:false":{"value":"336 × 78 · radius 6 — assumed hug"},"text:header|hasleadingasset:false|hasaction:true":{"value":"336 × 100 · radius 6 — assumed hug"},"text:header|hasleadingasset:false|hasaction:false":{"value":"336 × 56 · radius 6 — assumed hug"},"text:description|hasleadingasset:true|hasaction:false":{"value":"336 × 78 · radius 6 — assumed hug"},"text:description|hasleadingasset:false|hasaction:true":{"value":"336 × 94 · radius 6 — assumed hug"},"text:description|hasleadingasset:false|hasaction:false":{"value":"336 × 50 · radius 6 — assumed hug"},"text:both|hasleadingasset:true|hasaction:false":{"value":"336 × 78 · radius 6 — assumed hug"},"text:both|hasleadingasset:false|hasaction:true":{"value":"336 × 121 · radius 6 — assumed hug"},"text:both|hasleadingasset:false|hasaction:false":{"value":"336 × 77 · radius 6 — assumed hug"}}
                },
                {
                  "key": "Padding",
                  "value": "16px",
                  "mono": true
                },
                {
                  "key": "Details",
                  "value": "304 × 46",
                  "mono": true,
                  "variants": { "text:header|hasleadingasset:false": { "value": "304 × 24 — assumed hug" }, "text:description|hasleadingasset:false": { "value": "304 × 18 — assumed hug" }, "text:both|hasleadingasset:false": { "value": "304 × 45 — assumed hug" } }
                },
                {
                  "key": "AssetSlot",
                  "value": "46 × 46 · 12px to text",
                  "mono": true,
                  "variants": { "hasleadingasset:false": { "hide": true } }
                },
                {
                  "key": "Text Container",
                  "value": "246 × 24 · centred in 46",
                  "mono": true,
                  "variants": {
                    "text:description": {
                      "value": "246 × 18 · centred in 46"
                    },
                    "text:both": {
                      "value": "246 × 45 · Header 23, 4px, Description 18"
                    }
                  }
                },
                {
                  "key": "CloseSlot",
                  "value": "16 × 16 · x 304, 3.5px above Details",
                  "mono": true,
                  "variants": { "hasdismiss:false": { "hide": true } }
                },
                {
                  "key": "ActionSlot",
                  "value": "304 × 28 · 16px below Details",
                  "mono": true,
                  "variants": { "hasaction:false": { "hide": true } }
                },
                {
                  "key": "Button",
                  "value": "59 × 28 · ends 3px short of the slot",
                  "mono": true,
                  "variants": { "hasaction:false": { "hide": true } }
                },
                {
                  "key": "Pointer",
                  "value": "24 × 12 · x 14.5, above the container",
                  "mono": true,
                  "variants": { "placement:top|hasarrow:false": { "hide": true }, "placement:bottom|hasarrow:false": { "hide": true }, "placement:left|hasarrow:false": { "hide": true }, "placement:right|hasarrow:false": { "hide": true },
                    "placement:bottom": {
                      "value": "24 × 12 · x 14.5, below the container"
                    },
                    "placement:left": {
                      "value": "12 × 24 · y 6, left of the container"
                    },
                    "placement:right": {
                      "value": "12 × 24 · y 6, right of the container"
                    }
                  }
                },
                {
                  "key": "Pointer overlap",
                  "value": "1px into the container",
                  "mono": true,
                  "variants": { "hasarrow:false": { "hide": true } }
                }
              ]
            }
          ],
          "swift": "EBTooltip(\n    header: \"Header\",\n    placement: .top,\n    appearance: .opaque\n)\n.ebLeadingAsset { Image(\"illustration\") }\n.ebAction { EBButton(\"Next\").controlSize(.mini) }\n.onDismiss { }",
          "compose": "EBTooltip(\n    header = \"Header\",\n    placement = EBTooltipPlacement.Top,\n    appearance = EBTooltipAppearance.Opaque,\n    leadingAsset = { Image(painterResource(R.drawable.illustration), null) },\n    action = { EBButton(\"Next\", size = EBButtonSize.XSmall) { } },\n    onDismiss = { }\n)"
        }
      ],
      "colorsTables": [
        {
          "title": "Colors by Appearance",
          "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on set <code>6295:79647</code>. <strong>Translucent is 80% opacity on the whole variant</strong> — surface, text, asset placeholder and Button alike — not a translucent fill, so every colour on it blends with the backdrop. The Button and close glyph belong to their own components. Token paths could not be read; the plugin returns no variable bindings.",
          "columns": [
            "Opaque",
            "Translucent"
          ],
          "rows": [
            {
              "role": "Variant opacity",
              "token": "—",
              "values": [
                "100%",
                "80%"
              ]
            },
            {
              "role": "Surface",
              "token": "—",
              "values": [
                "#FFFFFF",
                "#0A2757"
              ]
            },
            {
              "role": "Border",
              "token": "—",
              "values": [
                "#E5EBF4",
                "#0A2757"
              ]
            },
            {
              "role": "Pointer fill / stroke",
              "token": "—",
              "values": [
                "#FFFFFF / #E5EBF4",
                "#0A2757 / #0A2757"
              ]
            },
            {
              "role": "Header",
              "token": "—",
              "values": [
                "#0A2757",
                "#FFFFFF"
              ]
            },
            {
              "role": "Description",
              "token": "—",
              "values": [
                "#6780A9",
                "#F6F9FD @ 80%"
              ]
            },
            {
              "role": "Close glyph",
              "token": "—",
              "values": [
                "#0A2757",
                "#FFFFFF"
              ]
            },
            {
              "role": "Asset placeholder",
              "token": "—",
              "values": [
                "#D7E0EF",
                "#D7E0EF"
              ]
            },
            {
              "role": "Button surface",
              "token": "—",
              "values": [
                "#005CE5",
                "#005CE5"
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
            "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tooltip:1.0.1\"</span>)\n}"
          },
          {
            "label": "Import",
            "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.tooltip.*  <span class=\"cmt\">// Compose</span>"
          }
        ],
        "footnote": "Package not yet published. These are the planned distribution paths."
      },
      "propertyMapping": {
        "description": "One row per property of set <code>6295:79647</code>, in panel order: three variant axes, two text properties, four booleans, then the three SLOTs. Which layer each boolean hides is not readable with the plugin; each is mapped to the element its name describes.",
        "rows": [
          {
            "figma": "Text — Header, Description, Both",
            "swift": "which of <code>header:</code> / <code>description:</code> is shown",
            "compose": "<code>header: String? = null</code>, <code>description: String? = null</code> — at least one"
          },
          {
            "figma": "Placement — Top, Bottom, Left, Right",
            "swift": "<code>placement: .top / .bottom / .left / .right</code>",
            "compose": "<code>placement = EBTooltipPlacement.Top / Bottom / Left / Right</code>"
          },
          {
            "figma": "Appearance — Opaque, Translucent",
            "swift": "<code>appearance: .opaque / .translucent</code>",
            "compose": "<code>appearance = EBTooltipAppearance.Opaque / Translucent</code>"
          },
          {
              "figma": "Header — text property",
              "swift": "<code>header: String?</code>",
              "compose": "<code>header: String? = null</code>"
            },
            {
              "figma": "Description — text property",
              "swift": "<code>description: String?</code>",
              "compose": "<code>description: String? = null</code>"
            },
            {
              "figma": "hasDismiss — boolean",
              "swift": "<code>.onDismiss { }</code> — omit to hide the close",
              "compose": "<code>onDismiss: (() -&gt; Unit)? = null</code>"
            },
            {
              "figma": "hasArrow — boolean",
              "swift": "<code>showsArrow: Bool = true</code>",
              "compose": "<code>showsArrow: Boolean = true</code>"
            },
            {
              "figma": "hasLeadingAsset — boolean",
              "swift": "<code>.ebLeadingAsset { }</code> — omit for False",
              "compose": "<code>leadingAsset: @Composable (() -&gt; Unit)? = null</code>"
            },
            {
              "figma": "hasAction — boolean",
              "swift": "<code>.ebAction { }</code> — omit for False",
              "compose": "<code>action: @Composable (() -&gt; Unit)? = null</code>"
            },
            {
              "figma": "⤷ CloseSlot — SLOT, 16 × 16",
              "swift": "the close control — defaults to the DS close icon",
              "compose": "the close control — defaults to the DS close icon"
            },
            {
              "figma": "⤷ AssetSlot — SLOT, 46 × 46",
              "swift": "content of <code>.ebLeadingAsset { }</code>",
              "compose": "content of <code>leadingAsset</code>"
            },
            {
              "figma": "⤷ ActionSlot — SLOT, 304 × 28",
              "swift": "content of <code>.ebAction { }</code>",
              "compose": "content of <code>action</code>"
            }
          ],
        "filePaths": {
          "swift": "ios/Components/Tooltip/EBTooltip.swift",
          "compose": "android/components/tooltip/EBTooltip.kt"
        }
      },
      "usageSnippets": [
        {
          "subheading": "Header · Top · Opaque",
          "swift": "<span class=\"cmt\">// Text=Header, Placement=Top, Appearance=Opaque — 6295:79648, 336 × 134.</span>\n<span class=\"typ\">EBTooltip</span>(\n    header: <span class=\"str\">\"Header\"</span>,\n    placement: .<span class=\"prp\">top</span>,\n    appearance: .<span class=\"prp\">opaque</span>\n)\n.<span class=\"fn\">ebLeadingAsset</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"illustration\"</span>) }\n.<span class=\"fn\">ebAction</span> { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">mini</span>) }\n.<span class=\"fn\">onDismiss</span> { dismissStep() }",
          "compose": "<span class=\"cmt\">// Text=Header, Placement=Top, Appearance=Opaque — 6295:79648, 336 × 134.</span>\n<span class=\"typ\">EBTooltip</span>(\n    header = <span class=\"str\">\"Header\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.<span class=\"prp\">Top</span>,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.<span class=\"prp\">Opaque</span>,\n    leadingAsset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.illustration), contentDescription = null) },\n    action = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>, size = <span class=\"typ\">EBButtonSize</span>.<span class=\"prp\">XSmall</span>) { nextStep() } },\n    onDismiss = { dismissStep() }\n)"
        },
        {
          "subheading": "Description · Bottom · Opaque",
          "swift": "<span class=\"cmt\">// Text=Description, Placement=Bottom, Appearance=Opaque — 6295:79755, 336 × 134.</span>\n<span class=\"typ\">EBTooltip</span>(\n    description: <span class=\"str\">\"Description goes here\"</span>,\n    placement: .<span class=\"prp\">bottom</span>,\n    appearance: .<span class=\"prp\">opaque</span>\n)\n.<span class=\"fn\">ebLeadingAsset</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"illustration\"</span>) }\n.<span class=\"fn\">ebAction</span> { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">mini</span>) }\n.<span class=\"fn\">onDismiss</span> { dismissStep() }",
          "compose": "<span class=\"cmt\">// Text=Description, Placement=Bottom, Appearance=Opaque — 6295:79755, 336 × 134.</span>\n<span class=\"typ\">EBTooltip</span>(\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.<span class=\"prp\">Bottom</span>,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.<span class=\"prp\">Opaque</span>,\n    leadingAsset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.illustration), contentDescription = null) },\n    action = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>, size = <span class=\"typ\">EBButtonSize</span>.<span class=\"prp\">XSmall</span>) { nextStep() } },\n    onDismiss = { dismissStep() }\n)"
        },
        {
          "subheading": "Both · Left · Translucent",
          "swift": "<span class=\"cmt\">// Text=Both, Placement=Left, Appearance=Translucent — 6295:79908, 348 × 122.</span>\n<span class=\"typ\">EBTooltip</span>(\n    header: <span class=\"str\">\"Header\"</span>,\n    description: <span class=\"str\">\"Description goes here\"</span>,\n    placement: .<span class=\"prp\">left</span>,\n    appearance: .<span class=\"prp\">translucent</span>\n)\n.<span class=\"fn\">ebLeadingAsset</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"illustration\"</span>) }\n.<span class=\"fn\">ebAction</span> { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">mini</span>) }\n.<span class=\"fn\">onDismiss</span> { dismissStep() }",
          "compose": "<span class=\"cmt\">// Text=Both, Placement=Left, Appearance=Translucent — 6295:79908, 348 × 122.</span>\n<span class=\"typ\">EBTooltip</span>(\n    header = <span class=\"str\">\"Header\"</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.<span class=\"prp\">Left</span>,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.<span class=\"prp\">Translucent</span>,\n    leadingAsset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.illustration), contentDescription = null) },\n    action = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>, size = <span class=\"typ\">EBButtonSize</span>.<span class=\"prp\">XSmall</span>) { nextStep() } },\n    onDismiss = { dismissStep() }\n)"
        },
        {
          "subheading": "Both · Right · Translucent",
          "swift": "<span class=\"cmt\">// Text=Both, Placement=Right, Appearance=Translucent — 6295:80000, 348 × 122.</span>\n<span class=\"typ\">EBTooltip</span>(\n    header: <span class=\"str\">\"Header\"</span>,\n    description: <span class=\"str\">\"Description goes here\"</span>,\n    placement: .<span class=\"prp\">right</span>,\n    appearance: .<span class=\"prp\">translucent</span>\n)\n.<span class=\"fn\">ebLeadingAsset</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"illustration\"</span>) }\n.<span class=\"fn\">ebAction</span> { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">mini</span>) }\n.<span class=\"fn\">onDismiss</span> { dismissStep() }",
          "compose": "<span class=\"cmt\">// Text=Both, Placement=Right, Appearance=Translucent — 6295:80000, 348 × 122.</span>\n<span class=\"typ\">EBTooltip</span>(\n    header = <span class=\"str\">\"Header\"</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.<span class=\"prp\">Right</span>,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.<span class=\"prp\">Translucent</span>,\n    leadingAsset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.illustration), contentDescription = null) },\n    action = { <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Next\"</span>, size = <span class=\"typ\">EBButtonSize</span>.<span class=\"prp\">XSmall</span>) { nextStep() } },\n    onDismiss = { dismissStep() }\n)"
        }
      ],
      "accessibility": [
        {
          "requirement": "Announcement",
          "ios": "When a tooltip appears, post <code>UIAccessibility.post(notification: .layoutChanged, argument: tooltip)</code> so VoiceOver moves to it. Read Header, then Description.",
          "android": "Use <code>Modifier.semantics { paneTitle = header }</code> or <code>liveRegion = LiveRegionMode.Polite</code> so TalkBack announces it."
        },
        {
          "requirement": "Dismiss",
          "ios": "The close glyph is 16 × 16 — under 44pt. Extend its hit area and label it “Close”. Support the escape gesture (<code>.accessibilityAction(.escape)</code>).",
          "android": "Label the close “Close” and apply <code>Modifier.minimumInteractiveComponentSize()</code>; back dismisses."
        },
        {
          "requirement": "Pointer and asset",
          "ios": "The pointer and the Icon Placeholder are decorative — <code>.accessibilityHidden(true)</code>. An asset that carries meaning needs its own label.",
          "android": "<code>contentDescription = null</code> on decorative content."
        },
        {
          "requirement": "Focus order in walkthroughs",
          "ios": "Focus the tooltip, not the dimmed screen behind it. Next → Close, then return focus to the highlighted target on dismiss.",
          "android": "Trap focus inside the tooltip while it is shown; restore it to the target on dismiss."
        },
        {
          "requirement": "Contrast — Opaque",
          "ios": "Header #0A2757 on #FFFFFF 14.58:1. Description #6780A9 4.01:1 at 12pt — below 4.5:1. Button label white on #005CE5 5.73:1.",
          "android": "Same ratios."
        },
        {
          "requirement": "Contrast — Translucent",
          "ios": "The whole variant is 80% opaque, so ratios depend on what is behind it. Over white: Header 7.86:1, Description 5.51:1, Button label 4.00:1 — below 4.5:1. Over black: 10.09, 6.58 and 4.93:1. Use Translucent over a dimmed backdrop.",
          "android": "Same — measure against the real backdrop."
        }
      ],
      "usageGuidelines": [
        {
          "doText": "Use Tooltip for walkthrough steps and short contextual hints anchored to one target.",
          "dontText": "Don’t use it for errors or confirmations — use Inline Message, Alert or Toast."
        },
        {
          "doText": "Pick <code>Placement</code> so the pointer faces the target. The pointer sits 14.5px in on Top/Bottom and 6px down on Left/Right.",
          "dontText": "Don’t reposition the pointer to the centre; Figma has no centred placement."
        },
        {
          "doText": "Use Translucent over a dimmed walkthrough backdrop.",
          "dontText": "Don’t place Translucent over white content — the 80% variant opacity washes out the Button label to 4.00:1."
        },
        {
          "doText": "Keep Header to one line and Description to one or two; the Text Container is 246 wide.",
          "dontText": "Don’t put long body copy in a tooltip — link to a detail screen from ActionSlot instead."
        }
      ],
      "scorecard": [
        {
          "id": "C1",
          "criterion": "Layer Structure & Naming",
          "status": "refine",
          "statusLabel": "Needs Refinement",
          "notes": "<code>Container</code>, <code>Details</code> and the three <code>⤷ …Slot</code> layers are semantic. But the text layers keep the <code>#</code> prefix (<code>#header</code>, <code>#description</code>) that Page Banner, Detail Hero and Inline Text dropped, <code>pointer-adjustment</code> and <code>pointer</code> are lowercase, and <code>Text Container</code> has a space."
        },
        {
          "id": "C2",
          "criterion": "Variant & Property Naming",
          "status": "ready",
          "statusLabel": "Ready",
          "notes": "Three PascalCase enums — <code>Text</code>, <code>Placement</code>, <code>Appearance</code> — with Title Case values and a complete 24-variant matrix."
        },
        {
          "id": "C3",
          "criterion": "Token Coverage",
          "status": "refine",
          "statusLabel": "Needs Refinement",
          "notes": "All text layers resolve <code>matched</code> — <code>Primary/Headlines/Block</code>, <code>Secondary/Bold/Caption</code>, <code>Primary/Label/Base</code>. But Translucent is a 0.8 opacity on the whole variant rather than a token-bound translucent surface, so it also fades the nested Button. Colour bindings cannot be read with the plugin."
        },
        {
          "id": "C4",
          "criterion": "Native Mappability",
          "status": "refine",
          "statusLabel": "Needs Refinement",
          "notes": "Maps to one <code>EBTooltip</code> with three enums and three optional slots. Two offsets a developer would copy: the close sits 3.5px above <code>Details</code> (a half-pixel y of 12.5), and the Button ends 3px short of <code>ActionSlot</code>’s edge."
        },
        {
          "id": "C5",
          "criterion": "Interaction State Coverage",
          "status": "na",
          "statusLabel": "Not Applicable",
          "notes": "A presentation surface. Pressed and disabled belong to the Button and close icon in the slots."
        },
        {
          "id": "C6",
          "criterion": "Asset & Icon Quality",
          "status": "ready",
          "statusLabel": "Ready",
          "notes": "The pointer is a vector path per placement, the close a DS icon, the CTA a real <code>Button - XSmall</code>, and the asset a swappable SLOT."
        },
        {
          "id": "C7",
          "criterion": "Code Connect Linkability",
          "status": "empty",
          "statusLabel": "Not Mapped",
          "notes": "Three enums and three named slots are ready to map. No SwiftUI or Compose mappings are registered; the native library does not exist."
        }
      ],
      "codeConnect": [],
      "variants": { "hasarrow:false": { "hide": true },
        "total": 24,
        "description": "<code>Text</code> (3) × <code>Placement</code> (4) × <code>Appearance</code> (2) = 24 variants, a complete matrix. Top and Bottom are 336 × 134; Left and Right 348 × 122. The container is 336 × 122 on all 24.",
        "columns": [
          "Text",
          "Placement",
          "Appearance",
          "Node ID",
          "Dimensions"
        ],
        "rows": [
          {
            "cells": [
              "Header",
              "Top",
              "Opaque",
              "<code>6295:79648</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Header",
              "Top",
              "Translucent",
              "<code>6295:79694</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Description",
              "Top",
              "Opaque",
              "<code>6295:79663</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Description",
              "Top",
              "Translucent",
              "<code>6295:79709</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Both",
              "Top",
              "Opaque",
              "<code>6295:79678</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Both",
              "Top",
              "Translucent",
              "<code>6295:79724</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Header",
              "Bottom",
              "Opaque",
              "<code>6295:79740</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Header",
              "Bottom",
              "Translucent",
              "<code>6295:79786</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Description",
              "Bottom",
              "Opaque",
              "<code>6295:79755</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Description",
              "Bottom",
              "Translucent",
              "<code>6295:79801</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Both",
              "Bottom",
              "Opaque",
              "<code>6295:79770</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Both",
              "Bottom",
              "Translucent",
              "<code>6295:79816</code>",
              "336 × 134"
            ]
          },
          {
            "cells": [
              "Header",
              "Left",
              "Opaque",
              "<code>6295:79832</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Header",
              "Left",
              "Translucent",
              "<code>6295:79878</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Description",
              "Left",
              "Opaque",
              "<code>6295:79847</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Description",
              "Left",
              "Translucent",
              "<code>6295:79893</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Both",
              "Left",
              "Opaque",
              "<code>6295:79862</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Both",
              "Left",
              "Translucent",
              "<code>6295:79908</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Header",
              "Right",
              "Opaque",
              "<code>6295:79924</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Header",
              "Right",
              "Translucent",
              "<code>6295:79970</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Description",
              "Right",
              "Opaque",
              "<code>6295:79939</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Description",
              "Right",
              "Translucent",
              "<code>6295:79985</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Both",
              "Right",
              "Opaque",
              "<code>6295:79954</code>",
              "348 × 122"
            ]
          },
          {
            "cells": [
              "Both",
              "Right",
              "Translucent",
              "<code>6295:80000</code>",
              "348 × 122"
            ]
          }
        ]
      }
    },
    "changelog": [
      {
        "version": "1.0.1",
        "date": "September 2026",
        "kind": "patch",
        "kindLabel": "Patch",
        "header": "Style + Code tabs rebuilt against the live component · node 6295:79647",
        "rows": [
          {
            "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Two cards split by Appearance each carried a Filled/Empty control for all three slots. Now one card with <code>Text</code>, <code>Placement</code>, <code>Appearance</code>, the <code>Header</code> and <code>Description</code> text properties, and <code>hasDismiss</code>, <code>hasArrow</code>, <code>hasLeadingAsset</code>, <code>hasAction</code>; the slots are listed, not controlled.",
            "delta": {
              "kind": "resolved",
              "label": "Docs"
            }
          },
          {
            "body": "<strong>Translucent was drawn as a solid #0A2757 surface.</strong> Figma applies 80% opacity to the whole variant — Button and asset placeholder included. The preview and colours now show it.",
            "delta": {
              "kind": "resolved",
              "label": "Docs"
            }
          },
          {
            "body": "<strong>Preview geometry corrected.</strong> The asset placeholder is a solid #D7E0EF circle, not a dashed outline; the close sits 3.5px above Details; the Bottom pointer uses Figma’s own path rather than a rotated Top one.",
            "delta": {
              "kind": "resolved",
              "label": "Docs"
            }
          },
          {
            "body": "<strong>Typography named text styles incorrectly and repeated font specs.</strong> The Header row read <code>Primary/Header/Small</code> and Description <code>Primary/Body/Fine</code>. They resolve <code>Primary/Headlines/Block</code> and <code>Secondary/Bold/Caption</code>, matched; the Button label <code>Primary/Label/Base</code>.",
            "delta": {
              "kind": "resolved",
              "label": "C3"
            }
          },
          {
            "body": "<strong>Token paths had no reading behind them.</strong> <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>space/space-16</code> and others were listed; the plugin reads no bindings. Removed.",
            "delta": {
              "kind": "resolved",
              "label": "C3"
            }
          },
          {
            "body": "<strong>Code tab install pointed at a retired package.</strong> <code>com.gcash.eastblue:components</code> → <code>com.eastblue.ds:tooltip:1.0.1</code>; scorecard rescored against the live component.",
            "delta": {
              "kind": "resolved",
              "label": "Docs"
            }
          },
          {
            "body": "<strong>Translucent is variant opacity, not a translucent surface.</strong> The 0.8 fades the nested Button too; over white its label drops to 4.00:1. <span class=\"tag-open tag-c3\">Open</span>",
            "delta": {
              "kind": "open",
              "label": "C3"
            }
          },
          {
            "body": "<strong>Text layers keep the <code>#</code> prefix</strong> (<code>#header</code>, <code>#description</code>) that sibling components dropped; <code>pointer-adjustment</code> and <code>pointer</code> are lowercase. <span class=\"tag-open tag-c1\">Open</span>",
            "delta": {
              "kind": "open",
              "label": "C1"
            }
          },
          {
            "body": "<strong>Close sits 3.5px above Details</strong> at a half-pixel y, and the Button ends 3px short of ActionSlot. <span class=\"tag-open tag-c4\">Open</span>",
            "delta": {
              "kind": "open",
              "label": "C4"
            }
          },
          {
            "body": "<strong>Description fails AA on Opaque</strong> — #6780A9 on white is 4.01:1 at 12pt. <span class=\"tag-open tag-c3\">Open</span>",
            "delta": {
              "kind": "open",
              "label": "A11y"
            }
          },
          {
          "body": "<strong>Boolean bindings not readable.</strong> <code>hasDismiss</code>, <code>hasArrow</code>, <code>hasLeadingAsset</code> and <code>hasAction</code> are documented as hiding the element each names, and the card is assumed to hug when one is off; neither the binding nor the resulting size could be read. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        }
        ]
      },
      {
        "version": "1.0.0",
        "date": "August 2026",
        "kind": "initial",
        "kindLabel": "Initial",
        "header": "Consolidated assessment · node 6295:79647",
        "rows": [
          {
            "body": "<strong>Three components became one</strong> — <code>Onboarding - Tooltip</code>, <code>Tooltip Blurred and Transparent</code> and <code>Tooltip V2</code> are superseded by this 24-variant set. Their pages are retained as <code>remove</code> stubs pointing here.\n          <span class=\"tag-fixed\">Documented</span>",
            "delta": {
              "kind": "resolved",
              "label": "Initial"
            }
          },
          {
            "body": "<strong>Pointer booleans became an enum</strong> — four independent booleans replaced by <code>Placement = Top | Bottom | Left | Right</code>.\n          <span class=\"tag-fixed tag-c2\">Resolved</span>",
            "delta": {
              "kind": "resolved",
              "label": "C2"
            }
          },
          {
            "body": "<strong>Raster assets replaced</strong> — the pointer is a vector path that recolours per appearance and rotates per placement; the close is a DS icon instance.\n          <span class=\"tag-fixed tag-c6\">Resolved</span>",
            "delta": {
              "kind": "resolved",
              "label": "C6"
            }
          },
          {
            "body": "<strong>Content moved into named slots</strong> — <code>⤷ AssetSlot</code>, <code>⤷ CloseSlot</code> and <code>⤷ ActionSlot</code>, the last holding a real <code>Button - XSmall</code>.\n          <span class=\"tag-fixed tag-c1\">Resolved</span>",
            "delta": {
              "kind": "resolved",
              "label": "C1"
            }
          },
          {
            "body": "<strong>Naming reconciled post-consolidation</strong> — <code>Text</code> values recased to <code>Header</code> / <code>Description</code> / <code>Both</code>, the wrapper frame unified to <code>Text Container</code>, layers renamed to <code>#header</code> / <code>#description</code>, <code>Appearance</code> changed from <code>Onboarding</code> to <code>Opaque</code>, and the slots adopted the <code>⤷ …Slot</code> convention.\n          <span class=\"tag-fixed tag-c2\">Resolved</span>",
            "delta": {
              "kind": "resolved",
              "label": "C2"
            }
          },
          {
            "body": "<strong>Interaction states delegated</strong> — Tooltip is a presentation surface; pressed and disabled are carried by the Button and close icon and assessed there.\n          <span class=\"tag-fixed tag-c5\">Reassigned</span>",
            "delta": {
              "kind": "resolved",
              "label": "C5"
            }
          },
          {
            "body": "<strong>Code Connect mappings not registered</strong> — left open for engineering.\n          <span class=\"tag-open tag-c7\">Open</span>",
            "delta": {
              "kind": "open",
              "label": "C7"
            }
          }
        ]
      }
    ]
};
