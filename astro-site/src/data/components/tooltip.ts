import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/tooltip.js`. Values mirror the Figma
// component set (node 6295:79647).
const tooltipDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Text',
        prop: 'text',
        defaultValue: 'both',
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
    ],
  },
  {
    heading: 'Slots',
    rows: [
      {
        label: '\u2937 AssetSlot',
        prop: 'asset',
        defaultValue: 'on',
        options: [
          { value: 'on', label: 'Filled' },
          { value: 'off', label: 'Empty' },
        ],
      },
      {
        label: '\u2937 CloseSlot',
        prop: 'close',
        defaultValue: 'on',
        options: [
          { value: 'on', label: 'Filled' },
          { value: 'off', label: 'Empty' },
        ],
      },
      {
        label: '\u2937 ActionSlot',
        prop: 'action',
        defaultValue: 'on',
        options: [
          { value: 'on', label: 'Filled' },
          { value: 'off', label: 'Empty' },
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
          "cardKey": "tt-spec-opaque",
          "demoKey": "opaque",
          "demoControls": tooltipDemoControls,
          "title": "Opaque — light surface",
          "node": "6295:79678",
          "description": "The default surface: white container, weak border, dark header and secondary description. Used over ordinary screen content.",
          "sections": [
            {
              "label": "Properties",
              "slug": "props",
              "rows": [
                {
                  "key": "Text",
                  "value": "Both",
                  "prop": "text"
                },
                {
                  "key": "Placement",
                  "value": "Top",
                  "prop": "placement"
                },
                {
                  "key": "Appearance",
                  "value": "Opaque"
                }
              ]
            },
            {
              "label": "Colors",
              "slug": "colors",
              "rows": [
                {
                  "key": "Container bg",
                  "value": "#FFFFFF",
                  "token": "bg/color-bg-main"
                },
                {
                  "key": "Container border",
                  "value": "#E5EBF4",
                  "token": "border/color-border-weak"
                },
                {
                  "key": "Header",
                  "value": "#0A2757",
                  "token": "text/color-text-primary"
                },
                {
                  "key": "Description",
                  "value": "#6780A9",
                  "token": "text/color-text-secondary"
                },
                {
                  "key": "Close glyph",
                  "value": "#0A2757",
                  "token": "text/color-text-primary"
                },
                {
                  "key": "Pointer",
                  "value": "#FFFFFF",
                  "token": "bg/color-bg-main"
                }
              ]
            },
            {
              "label": "Layout",
              "slug": "layout",
              "rows": [
                {
                  "key": "Container width",
                  "value": "336",
                  "mono": true
                },
                {
                  "key": "Container height",
                  "value": "122",
                  "prop": "height",
                  "mono": true
                },
                {
                  "key": "Padding",
                  "value": "16",
                  "mono": true
                },
                {
                  "key": "Details → Action gap",
                  "value": "16",
                  "mono": true
                },
                {
                  "key": "⤷ AssetSlot",
                  "value": "46 × 46",
                  "mono": true
                },
                {
                  "key": "Asset → text gap",
                  "value": "12",
                  "mono": true
                },
                {
                  "key": "⤷ CloseSlot",
                  "value": "16 × 16",
                  "mono": true
                },
                {
                  "key": "⤷ ActionSlot",
                  "value": "304 × 28",
                  "mono": true
                },
                {
                  "key": "Corner radius",
                  "value": "radius/radius-2 (6px)",
                  "mono": true
                },
                {
                  "key": "Pointer",
                  "value": "24 × 12 top/bottom · 12 × 24 left/right",
                  "mono": true
                }
              ]
            },
            {
              "label": "Typography",
              "slug": "typo",
              "rows": [
                {
                  "key": "Header",
                  "value": "Primary/Header/Small"
                },
                {
                  "key": "Font",
                  "value": "Proxima Soft Bold",
                  "mono": true
                },
                {
                  "key": "Size / line",
                  "value": "18 / 23",
                  "mono": true
                },
                {
                  "key": "Tracking",
                  "value": "+0.25",
                  "mono": true
                },
                {
                  "key": "Description",
                  "value": "Primary/Body/Fine"
                },
                {
                  "key": "Font ",
                  "value": "BarkAda SemiBold",
                  "mono": true
                },
                {
                  "key": "Size / line ",
                  "value": "12 / 18",
                  "mono": true
                },
                {
                  "key": "Tracking ",
                  "value": "0",
                  "mono": true
                }
              ]
            }
          ],
          "swift": "EBTooltip(\n    header: \"Header\",\n    description: \"Description goes here\",\n    placement: .top,\n    appearance: .opaque\n    , onDismiss: { … }\n)\n.ebLeadingAsset { Image(\"illustration\") }\n.ebAction { EBButton(\"Next\").controlSize(.mini) }",
          "compose": "EBTooltip(\n    header = \"Header\",\n    description = \"Description goes here\",\n    placement = EBTooltipPlacement.Top,\n    appearance = EBTooltipAppearance.Opaque,\n    leadingAsset = { Image(painterResource(R.drawable.illustration), null) },\n    action = { EBButton(\"Next\", size = EBButtonSize.XSmall) },\n    onDismiss = { … },\n)"
        },
        {
          "cardKey": "tt-spec-translucent",
          "demoKey": "translucent",
          "demoControls": tooltipDemoControls,
          "title": "Translucent — inverse surface",
          "node": "6295:79724",
          "description": "Inverse surface for placement over imagery and dimmed walkthrough backdrops. Naming only — no blur or alpha is attached to the fill.",
          "sections": [
            {
              "label": "Properties",
              "slug": "props",
              "rows": [
                {
                  "key": "Text",
                  "value": "Both",
                  "prop": "text"
                },
                {
                  "key": "Placement",
                  "value": "Top",
                  "prop": "placement"
                },
                {
                  "key": "Appearance",
                  "value": "Translucent"
                }
              ]
            },
            {
              "label": "Colors",
              "slug": "colors",
              "rows": [
                {
                  "key": "Container bg",
                  "value": "#0A2757",
                  "token": "bg/color-bg-inverse"
                },
                {
                  "key": "Container border",
                  "value": "#0A2757",
                  "token": "bg/color-bg-inverse"
                },
                {
                  "key": "Header",
                  "value": "#FFFFFF",
                  "token": "text/color-text-inverse"
                },
                {
                  "key": "Description",
                  "value": "#F6F9FD @ 80%",
                  "token": "text/color-text-inverse-weak"
                },
                {
                  "key": "Close glyph",
                  "value": "#FFFFFF",
                  "token": "text/color-text-inverse"
                },
                {
                  "key": "Pointer",
                  "value": "#0A2757",
                  "token": "bg/color-bg-inverse"
                }
              ]
            },
            {
              "label": "Layout",
              "slug": "layout",
              "rows": [
                {
                  "key": "Container width",
                  "value": "336",
                  "mono": true
                },
                {
                  "key": "Container height",
                  "value": "122",
                  "prop": "height",
                  "mono": true
                },
                {
                  "key": "Padding",
                  "value": "16",
                  "mono": true
                },
                {
                  "key": "Details → Action gap",
                  "value": "16",
                  "mono": true
                },
                {
                  "key": "⤷ AssetSlot",
                  "value": "46 × 46",
                  "mono": true
                },
                {
                  "key": "Asset → text gap",
                  "value": "12",
                  "mono": true
                },
                {
                  "key": "⤷ CloseSlot",
                  "value": "16 × 16",
                  "mono": true
                },
                {
                  "key": "⤷ ActionSlot",
                  "value": "304 × 28",
                  "mono": true
                },
                {
                  "key": "Corner radius",
                  "value": "radius/radius-2 (6px)",
                  "mono": true
                },
                {
                  "key": "Pointer",
                  "value": "24 × 12 top/bottom · 12 × 24 left/right",
                  "mono": true
                }
              ]
            },
            {
              "label": "Typography",
              "slug": "typo",
              "rows": [
                {
                  "key": "Header",
                  "value": "Primary/Header/Small"
                },
                {
                  "key": "Font",
                  "value": "Proxima Soft Bold",
                  "mono": true
                },
                {
                  "key": "Size / line",
                  "value": "18 / 23",
                  "mono": true
                },
                {
                  "key": "Tracking",
                  "value": "+0.25",
                  "mono": true
                },
                {
                  "key": "Description",
                  "value": "Primary/Body/Fine"
                },
                {
                  "key": "Font ",
                  "value": "BarkAda SemiBold",
                  "mono": true
                },
                {
                  "key": "Size / line ",
                  "value": "12 / 18",
                  "mono": true
                },
                {
                  "key": "Tracking ",
                  "value": "0",
                  "mono": true
                }
              ]
            }
          ],
          "swift": "EBTooltip(\n    header: \"Header\",\n    description: \"Description goes here\",\n    placement: .top,\n    appearance: .translucent\n    , onDismiss: { … }\n)\n.ebLeadingAsset { Image(\"illustration\") }\n.ebAction { EBButton(\"Next\").controlSize(.mini) }",
          "compose": "EBTooltip(\n    header = \"Header\",\n    description = \"Description goes here\",\n    placement = EBTooltipPlacement.Top,\n    appearance = EBTooltipAppearance.Translucent,\n    leadingAsset = { Image(painterResource(R.drawable.illustration), null) },\n    action = { EBButton(\"Next\", size = EBButtonSize.XSmall) },\n    onDismiss = { … },\n)"
        }
      ],
      "colorsTables": [
        {
          "title": "Colors by Appearance Mode",
          "description": "Tooltip owns the container, pointer and text colours. The CTA button and close glyph are DS components documented on their own pages.",
          "columns": [
            "Opaque",
            "Translucent"
          ],
          "rows": [
            {
              "role": "Container bg",
              "token": "bg/color-bg-main · bg/color-bg-inverse",
              "values": [
                "#FFFFFF",
                "#0A2757"
              ]
            },
            {
              "role": "Container border",
              "token": "border/color-border-weak · bg/color-bg-inverse",
              "values": [
                "#E5EBF4",
                "#0A2757"
              ]
            },
            {
              "role": "Header",
              "token": "text/color-text-primary · text/color-text-inverse",
              "values": [
                "#0A2757",
                "#FFFFFF"
              ]
            },
            {
              "role": "Description",
              "token": "text/color-text-secondary · text/color-text-inverse-weak",
              "values": [
                "#6780A9",
                "#F6F9FD @ 80%"
              ]
            },
            {
              "role": "Close glyph",
              "token": "text/color-text-primary · text/color-text-inverse",
              "values": [
                "#0A2757",
                "#FFFFFF"
              ]
            },
            {
              "role": "Pointer fill",
              "token": "matches container bg",
              "values": [
                "#FFFFFF",
                "#0A2757"
              ]
            },
            {
              "role": "Pointer stroke",
              "token": "matches container border",
              "values": [
                "#E5EBF4",
                "#0A2757"
              ]
            }
          ]
        },
        {
          "title": "Layout",
          "description": "Measured from the component set. Height is a hug, not a fixed value.",
          "columns": [
            "Value"
          ],
          "rows": [
            {
              "role": "Container width",
              "token": "—",
              "values": [
                "336 (348 including a left/right pointer)"
              ]
            },
            {
              "role": "Padding",
              "token": "space/space-16",
              "values": [
                "16"
              ]
            },
            {
              "role": "Details → Action gap",
              "token": "space/space-16",
              "values": [
                "16"
              ]
            },
            {
              "role": "Asset → text gap",
              "token": "space/space-12",
              "values": [
                "12"
              ]
            },
            {
              "role": "Text → close gap",
              "token": "space/space-16",
              "values": [
                "16"
              ]
            },
            {
              "role": "Corner radius",
              "token": "radius/radius-2",
              "values": [
                "6"
              ]
            },
            {
              "role": "⤷ AssetSlot",
              "token": "—",
              "values": [
                "46 × 46"
              ]
            },
            {
              "role": "⤷ CloseSlot",
              "token": "—",
              "values": [
                "16 × 16"
              ]
            },
            {
              "role": "⤷ ActionSlot",
              "token": "—",
              "values": [
                "304 × 28"
              ]
            },
            {
              "role": "Pointer",
              "token": "—",
              "values": [
                "24 × 12 top/bottom · 12 × 24 left/right"
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
            "label": "Swift Package Manager",
            "code": "https://github.com/gcash/east-blue-ios"
          },
          {
            "label": "Gradle",
            "code": "implementation(\"com.gcash.eastblue:components:1.0.0\")"
          },
          {
            "label": "Import — SwiftUI",
            "code": "import EastBlue"
          },
          {
            "label": "Import — Compose",
            "code": "import com.gcash.eastblue.components.EBTooltip"
          }
        ],
        "footnote": "Native components are not yet implemented — all snippets show the planned API."
      },
      "propertyMapping": {
        "description": "Three enums and three slots. Placement drives the pointer edge only; anchoring and collision handling are the caller’s responsibility.",
        "rows": [
          {
            "figma": "Text = Header | Description | Both",
            "swift": "header: String? / description: String?",
            "compose": "header: String? / description: String?"
          },
          {
            "figma": "Placement = Top | Bottom | Left | Right",
            "swift": "placement: .top / .bottom / .leading / .trailing",
            "compose": "placement: EBTooltipPlacement"
          },
          {
            "figma": "Appearance = Opaque | Translucent",
            "swift": "appearance: .opaque / .translucent",
            "compose": "appearance: EBTooltipAppearance"
          },
          {
            "figma": "⤷ AssetSlot",
            "swift": ".ebLeadingAsset { … }",
            "compose": "leadingAsset: @Composable (() -> Unit)?"
          },
          {
            "figma": "⤷ CloseSlot",
            "swift": "onDismiss: (() -> Void)?",
            "compose": "onDismiss: (() -> Unit)?"
          },
          {
            "figma": "⤷ ActionSlot",
            "swift": ".ebAction { … }",
            "compose": "action: @Composable (() -> Unit)?"
          }
        ],
        "filePaths": {
          "swift": "Sources/EastBlue/Components/EBTooltip.swift",
          "compose": "components/src/main/kotlin/com/gcash/eastblue/components/EBTooltip.kt"
        }
      },
      "usageSnippets": [
        {
          "subheading": "Walkthrough coach-mark — header, description, asset and CTA",
          "swift": "EBTooltip(\n    header: \"Header\",\n    description: \"Description goes here\",\n    placement: .top,\n    appearance: .opaque,\n    onDismiss: { step.skip() }\n)\n.ebLeadingAsset { Image(\"illustration\") }\n.ebAction { EBButton(\"Next\").controlSize(.mini) }",
          "compose": "EBTooltip(\n    header = \"Header\",\n    description = \"Description goes here\",\n    placement = EBTooltipPlacement.Top,\n    appearance = EBTooltipAppearance.Opaque,\n    leadingAsset = { Image(painterResource(R.drawable.illustration), null) },\n    action = { EBButton(\"Next\", size = EBButtonSize.XSmall) },\n    onDismiss = { step.skip() },\n)"
        },
        {
          "subheading": "Inline hint — description only, no slots",
          "swift": "EBTooltip(\n    description: \"Description goes here\",\n    placement: .bottom,\n    appearance: .translucent\n)",
          "compose": "EBTooltip(\n    description = \"Description goes here\",\n    placement = EBTooltipPlacement.Bottom,\n    appearance = EBTooltipAppearance.Translucent,\n)"
        }
      ],
      "accessibility": [
        {
          "requirement": "Announced as a single unit",
          "ios": "Group header + description with <code>.accessibilityElement(children: .combine)</code>",
          "android": "Wrap content in <code>Modifier.semantics(mergeDescendants = true)</code>"
        },
        {
          "requirement": "Dismiss is reachable",
          "ios": "The close control needs a 44 × 44 hit target — the 16 × 16 glyph is the visual only",
          "android": "Expand the touch target to 48 × 48 with <code>Modifier.minimumInteractiveComponentSize()</code>"
        },
        {
          "requirement": "Focus order during walkthroughs",
          "ios": "Move focus to the tooltip on present with <code>.accessibilitySortPriority</code>",
          "android": "Request focus on the tooltip container when the step begins"
        },
        {
          "requirement": "Contrast",
          "ios": "Translucent pairs #FFFFFF on #0A2757 — passes AA at both text sizes",
          "android": "Same — verify against the underlying backdrop when placed over imagery"
        }
      ],
      "usageGuidelines": [
        {
          "doText": "Use Placement to point at the anchor element, and keep the tooltip within the safe area.",
          "dontText": "Do not rely on Placement for positioning — it sets the pointer edge only, not the tooltip’s location."
        },
        {
          "doText": "Empty ⤷ AssetSlot and ⤷ ActionSlot for short inline hints — the container hugs down to the text.",
          "dontText": "Do not stack more than a header and one short description; Tooltip is not a modal."
        },
        {
          "doText": "Use Translucent over imagery and dimmed walkthrough backdrops.",
          "dontText": "Do not expect Translucent to blur what is behind it — the name describes the palette, not an effect."
        }
      ],
      "scorecard": [
        {
          "id": "C1",
          "criterion": "Layer Structure & Naming",
          "status": "ready",
          "statusLabel": "Ready",
          "notes": "Semantic names throughout — <code>Container</code>, <code>Details</code>, <code>Text Container</code>, <code>#header</code>, <code>#description</code>, and three <code>⤷ …Slot</code> slots."
        },
        {
          "id": "C2",
          "criterion": "Variant & Property Naming",
          "status": "ready",
          "statusLabel": "Ready",
          "notes": "Three clean enums with consistent casing. <code>Placement</code> replaced four booleans; <code>Appearance</code> values both name visual treatments."
        },
        {
          "id": "C3",
          "criterion": "Token Coverage",
          "status": "na",
          "statusLabel": "Not Applicable",
          "notes": "Tooltip owns the container, pointer and text colours listed under Styles. The CTA button and close icon carry their own tokens and are audited on their own pages."
        },
        {
          "id": "C4",
          "criterion": "Native Mappability",
          "status": "ready",
          "statusLabel": "Ready",
          "notes": "Maps to a popover or overlay with three enums and three composable slots. The container hugs its content, matching native layout behaviour."
        },
        {
          "id": "C5",
          "criterion": "Interaction State Coverage",
          "status": "na",
          "statusLabel": "Not Applicable",
          "notes": "A presentation surface with no states of its own. Pressed and disabled belong to the Button and close icon."
        },
        {
          "id": "C6",
          "criterion": "Asset & Icon Quality",
          "status": "ready",
          "statusLabel": "Ready",
          "notes": "The pointer is a vector that recolours and rotates; the close is an icon instance. Both raster assets flagged on the predecessors are gone."
        },
        {
          "id": "C7",
          "criterion": "Code Connect Linkability",
          "status": "empty",
          "statusLabel": "Not Mapped",
          "notes": "No CLI mappings registered yet — left open for engineering."
        }
      ],
      "codeConnect": [],
      "variants": {
        "total": 24,
        "description": "3 <code>Text</code> × 4 <code>Placement</code> × 2 <code>Appearance</code> = <strong>24 variants</strong>, a complete matrix with no gaps. Top and Bottom measure 336 × 134; Left and Right measure 348 × 122, the extra 12 being the pointer.",
        "columns": [
          "Text",
          "Placement",
          "Appearance",
          "Node"
        ],
        "rows": [
          {
            "cells": [
              "Header",
              "Top",
              "Opaque",
              "<code>6295:79648</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Top",
              "Opaque",
              "<code>6295:79663</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Top",
              "Opaque",
              "<code>6295:79678</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Top",
              "Translucent",
              "<code>6295:79694</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Top",
              "Translucent",
              "<code>6295:79709</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Top",
              "Translucent",
              "<code>6295:79724</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Bottom",
              "Opaque",
              "<code>6295:79740</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Bottom",
              "Opaque",
              "<code>6295:79755</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Bottom",
              "Opaque",
              "<code>6295:79770</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Bottom",
              "Translucent",
              "<code>6295:79786</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Bottom",
              "Translucent",
              "<code>6295:79801</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Bottom",
              "Translucent",
              "<code>6295:79816</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Left",
              "Opaque",
              "<code>6295:79832</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Left",
              "Opaque",
              "<code>6295:79847</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Left",
              "Opaque",
              "<code>6295:79862</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Left",
              "Translucent",
              "<code>6295:79878</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Left",
              "Translucent",
              "<code>6295:79893</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Left",
              "Translucent",
              "<code>6295:79908</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Right",
              "Opaque",
              "<code>6295:79924</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Right",
              "Opaque",
              "<code>6295:79939</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Right",
              "Opaque",
              "<code>6295:79954</code>"
            ]
          },
          {
            "cells": [
              "Header",
              "Right",
              "Translucent",
              "<code>6295:79970</code>"
            ]
          },
          {
            "cells": [
              "Description",
              "Right",
              "Translucent",
              "<code>6295:79985</code>"
            ]
          },
          {
            "cells": [
              "Both",
              "Right",
              "Translucent",
              "<code>6295:80000</code>"
            ]
          }
        ],
        "summary": {
          "columns": [
            "Placement",
            "Text",
            "Appearance",
            "Container",
            "Count"
          ],
          "rows": [
            {
              "cells": [
                "<strong>Top</strong>",
                "Header · Description · Both",
                "Opaque · Translucent",
                "336 × 134",
                "6"
              ]
            },
            {
              "cells": [
                "<strong>Bottom</strong>",
                "Header · Description · Both",
                "Opaque · Translucent",
                "336 × 134",
                "6"
              ]
            },
            {
              "cells": [
                "<strong>Left</strong>",
                "Header · Description · Both",
                "Opaque · Translucent",
                "348 × 122",
                "6"
              ]
            },
            {
              "cells": [
                "<strong>Right</strong>",
                "Header · Description · Both",
                "Opaque · Translucent",
                "348 × 122",
                "6"
              ]
            }
          ]
        },
        "collapseLabel": "View full Text × Placement × Appearance breakdown (24 rows)"
      }
    },
    "changelog": [
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
