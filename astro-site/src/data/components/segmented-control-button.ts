import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the variant axes of set 26628:50752. The property panel
// itself was not supplied, so any boolean, text or instance-swap property
// would be invisible here — flagged in the review rather than guessed.
const segmentedControlButtonDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'isActive',
        prop: 'isActive',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];


export const segmentedControlButton: ComponentData = {
  meta: {
    slug: 'segmented-control-button',
    name: 'Segmented Control Button',
    node: '4111:10773',
    figmaUrl: 'https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4111-10773',
    description: 'A single tappable segment inside a Segmented Control. 6 variants across <code>State</code> (Default / Pressed / Disabled) × <code>Active</code> (true / false). Active segments fill brand-blue; inactive segments carry a brand-blue outline. (Assessed in the 2026 Working File.)',
    badges: [
      { kind: 'keep', label: 'Keep' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    navGroup: 'Toggle',
    verdict: {
      kind: 'keep',
      title: 'Clean atom — complete state matrix',
      text: 'The single-segment atom for the Segmented Control family. Six variants cover the full <code>State</code> × <code>Active</code> matrix — including the pressed-active state — with token-bound fills (active <code>#005CE5</code>, pressed-active <code>#2340A9</code>, disabled <code>#9BC5FD</code>) and a token-bound outline for inactive segments. Booleans are lowercase <code>true</code>/<code>false</code>. <code>Active</code> is retained as the property name (intentional for this component rather than <code>isSelected</code>). Only Code Connect registration remains.',
    },
  },
  overview: {
    inContextNote: 'Not used standalone — the Segmented Control row composes N of these buttons, and the Segmented Control - Group wraps that row with a header and optional subtext.',
    livePreviewHtml: '<div class="demo-layout"><div class="demo-preview" id="scb-demo-preview"><div style="display:inline-flex;border:1.5px solid #005CE5;border-radius:6px;overflow:hidden;font-family:\'Proxima Soft\', system-ui;"><span style="background:#005CE5;color:#FFFFFF;font-weight:700;font-size:16px;padding:10px 16px;">Active</span><span style="color:#005CE5;font-weight:700;font-size:16px;padding:10px 16px;">Inactive</span></div></div><div class="demo-figma-panel"><div class="demo-panel-section"><div class="demo-panel-heading">Properties</div><div class="demo-panel-row"><span class="demo-panel-label">State</span><span class="demo-panel-value">Default · Pressed · Disabled</span></div><div class="demo-panel-row"><span class="demo-panel-label">Active</span><span class="demo-panel-value">true · false</span></div></div></div></div>',
    traits: [
      { name: 'Reusable', rating: 'pass', note: 'The one segment primitive for every Segmented Control — the row composes N instances at any count, so a single atom covers 2-, 3-, and 4-segment controls.' },
      { name: 'Self-contained', rating: 'pass', note: 'Owns its own fill, outline, label, and radius tokens across all six State × Active combinations. No external instance dependencies.' },
      { name: 'Consistent', rating: 'pass', note: 'Complete 3 × 2 matrix — <code>State</code> (Default / Pressed / Disabled) × <code>Active</code> (<code>true</code>/<code>false</code>), lowercase booleans. Active segments fill brand-blue, inactive carry the brand-blue outline; pressed and disabled shift the shade predictably.' },
      { name: 'Composable', rating: 'pass', note: 'Nests inside the Segmented Control row as an instance, so atom changes propagate to every segment across every item count.' },
    ],
    behavior: [
      { state: 'Active', ios: 'yes', android: 'yes', property: 'Active=true', notes: 'Fills brand-blue <code>#005CE5</code> with a white label. The currently-selected segment.' },
      { state: 'Inactive', ios: 'yes', android: 'yes', property: 'Active=false', notes: 'White fill with a 1.5px brand-blue outline and a brand-blue label.' },
      { state: 'Pressed', ios: 'yes', android: 'yes', property: 'State=Pressed', notes: 'Touch-down feedback — active darkens to <code>#2340A9</code>; inactive shows a light <code>#F6F9FD</code> (72%) fill under the outline.' },
      { state: 'Disabled', ios: 'yes', android: 'yes', property: 'State=Disabled', notes: 'Muted <code>#9BC5FD</code> for both active fill and inactive outline; tap blocked.' },
    ],
    resolved: [
      { body: 'v1.0: <code>Active</code> boolean moved to lowercase <code>true</code>/<code>false</code> (from <code>Yes</code>/<code>No</code>), matching the DS boolean standard. (C2)' },
      { body: 'v1.0: <code>State=Pressed, Active=true</code> variant added — the matrix is now the complete 3 × 2 = 6, so an already-active segment has a pressed treatment too (<code>#2340A9</code>). (C5)' },
      { body: 'v1.0: Segment label node renamed from <code>#value</code> to <code>label</code>. (C2)' },
    ],
    open: [
      { body: 'Code Connect mappings not registered. The schema and state coverage are settled, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.', tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' } },
    ],
    recommendations: [
      { headline: 'Register Code Connect mapping to <code>EBSegment</code>.', body: 'Wire <code>State</code> and <code>Active</code> 1:1 to the SwiftUI / Compose segment API, forwarding from the parent <code>EBSegmentedControl</code>.', tag: 'Docs' },
    ],
    appliedRecommendations: [
      { headline: 'Normalize the <code>Active</code> boolean to <code>true</code>/<code>false</code>.', body: 'v1.0: Applied — lowercase, matching the DS standard.', tag: 'Rename' },
      { headline: 'Complete the State × Active matrix.', body: 'v1.0: Applied — added the missing pressed-active variant; the atom now ships all six combinations.', tag: 'State' },
    ],
  },
  style: {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "scb-spec-main",
        "demoKey": "main",
        "title": "Segmented Control Button",
        "node": "26628:50752",
        "description": "",
        "previewHtml": "<div id=\"segmented-control-button-spec-main\" class=\"spec-preview-body\"><svg width=\"183.3334\" height=\"80.6666\" viewBox=\"0 0 91.6667 40.3333\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"90.6667\" height=\"40.3333\" fill=\"#005CE5\"/><text class=\"scb-label\" x=\"45.33335\" y=\"20.16665\" font-size=\"16\" font-weight=\"700\" fill=\"#FFFFFF\" text-anchor=\"middle\" dominant-baseline=\"central\">Label</text></svg></div>",
        "demoControls": segmentedControlButtonDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "isActive",
                "value": "true",
                "prop": "isActive"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Background",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "isActive:true|state:pressed": {
                    "value": "#2340A9"
                  },
                  "isActive:true|state:disabled": {
                    "value": "#9BC5FD"
                  },
                  "isActive:false|state:default": {
                    "hide": true
                  },
                  "isActive:false|state:pressed": {
                    "value": "#F6F9FD @ 72%"
                  },
                  "isActive:false|state:disabled": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Divider (right edge)",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "isActive:true": {
                    "hide": true
                  },
                  "isActive:false|state:disabled": {
                    "value": "#9BC5FD"
                  }
                }
              },
              {
                "key": "Label",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "isActive:false|state:default": {
                    "value": "#005CE5"
                  },
                  "isActive:false|state:pressed": {
                    "value": "#2340A9"
                  },
                  "isActive:false|state:disabled": {
                    "value": "#9BC5FD"
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
                "key": "Label",
                "value": "Primary/Label/Base",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "40.33px — 40px once instantiated",
                "mono": true
              },
              {
                "key": "Width",
                "value": "Fill — 90.67px in the set, 156px in a 2-segment 312 control",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "None — the parent Segmented Control clips the row to 6px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12.17px — derived from bounding boxes",
                "mono": true
              },
              {
                "key": "Border",
                "value": "Right edge only, outside align — weight not readable with this plugin",
                "mono": true,
                "variants": {
                  "isActive:true": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-cmt\">// Composed by EBSegmentedControl — one per segment.</span>\n<span class=\"syn-type\">EBSegmentedControl</span><span class=\"syn-punc\">(</span>segments<span class=\"syn-punc\">: [</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">], </span>selectedIndex<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-cmt\">// Composed by EBSegmentedControl — one per segment.</span>\n<span class=\"syn-type\">EBSegmentedControl</span><span class=\"syn-punc\">(</span>\n    segments <span class=\"syn-eq\">=</span> listOf<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">),</span>\n    selectedIndex <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> true\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State and isActive",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on each variant of set <code>26628:50752</code>, and confirmed against <code>export_node_as_image</code>. <strong>Inactive segments carry a right-edge divider, not an outline</strong> — the stroke is declared on all four sides but only the right one has weight. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "isActive = true",
            "token": "Background · Default",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Background · Pressed",
            "values": [
              "—",
              "#2340A9"
            ]
          },
          {
            "role": "—",
            "token": "Background · Disabled",
            "values": [
              "—",
              "#9BC5FD"
            ]
          },
          {
            "role": "—",
            "token": "Label · all states",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "isActive = false",
            "token": "Background · Default",
            "values": [
              "–",
              "– none"
            ]
          },
          {
            "role": "—",
            "token": "Background · Pressed",
            "values": [
              "—",
              "#F6F9FD @ 72%"
            ]
          },
          {
            "role": "—",
            "token": "Background · Disabled",
            "values": [
              "–",
              "– none"
            ]
          },
          {
            "role": "—",
            "token": "Divider · Default and Pressed",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Divider · Disabled",
            "values": [
              "—",
              "#9BC5FD"
            ]
          },
          {
            "role": "—",
            "token": "Label · Default",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Label · Pressed",
            "values": [
              "—",
              "#2340A9"
            ]
          },
          {
            "role": "—",
            "token": "Label · Disabled",
            "values": [
              "—",
              "#9BC5FD"
            ]
          }
        ]
      }
    ]
  },
  code: {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:toggle:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.toggle.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. The segment ships inside the Toggle bundle — it is never installed or constructed on its own."
    },
    "propertyMapping": {
      "description": "The segment is composed by the parent <code>Segmented Control</code>; neither property is set directly. <code>isActive</code> forwards from the row’s selected index and <code>State</code> derives at runtime, so both are outputs of the row rather than inputs to the segment.",
      "rows": [
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "derived — <code>isPressed</code> from the gesture, <code>isEnabled</code> from the environment",
          "compose": "derived — <code>interactionSource</code> for pressed, <code>enabled</code> for disabled"
        },
        {
          "figma": "isActive — true, false",
          "swift": "<code>isSelected: Bool</code> — forwarded from the row’s <code>selectedIndex</code>",
          "compose": "<code>selected: Boolean</code> — forwarded from the row’s <code>selectedIndex</code>"
        },
        {
          "figma": "label — a TEXT layer, not a confirmed text property",
          "swift": "<code>Segment.label: String</code>",
          "compose": "<code>Segment.label: String</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Toggle/EBSegment.swift",
        "compose": "android/components/toggle/EBSegment.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Composed by the row",
        "swift": "<span class=\"cmt\">// The segment is never constructed directly. The row makes one per</span>\n<span class=\"cmt\">// entry; isActive is index == selectedIndex.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected\n)",
        "compose": "<span class=\"cmt\">// The segment is never constructed directly. The row makes one per</span>\n<span class=\"cmt\">// entry; isActive is index == selectedIndex.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected\n)"
      },
      {
        "subheading": "Disabled and pressed",
        "swift": "<span class=\"cmt\">// State=Disabled comes from the row, not per segment —</span>\n<span class=\"cmt\">// every segment mutes together.</span>\n<span class=\"typ\">EBSegmentedControl</span>(segments: segments, selectedIndex: $selected)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// State=Pressed is the touch-down frame. Nothing to set:</span>\n<span class=\"cmt\">// the active segment darkens to #2340A9, an inactive one takes</span>\n<span class=\"cmt\">// a #F6F9FD 72% wash under its label.</span>",
        "compose": "<span class=\"cmt\">// State=Disabled comes from the row, not per segment —</span>\n<span class=\"cmt\">// every segment mutes together.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments = segments,\n    selectedIndex = selected,\n    enabled = <span class=\"kw\">false</span>\n)\n\n<span class=\"cmt\">// State=Pressed is the touch-down frame, read from</span>\n<span class=\"cmt\">// interactionSource.collectIsPressedAsState().</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "Each segment is a <code>.button</code> with <code>.isSelected</code> on the active one.",
        "android": "Apply <code>Role.RadioButton</code> per segment inside the row’s <code>Modifier.selectableGroup()</code>."
      },
      {
        "requirement": "Selection announcement",
        "ios": "Announce position in the set — \"Label, selected, 1 of 3\" — so the user knows how many segments there are.",
        "android": "Set <code>stateDescription</code> and let <code>selectableGroup()</code> supply the index."
      },
      {
        "requirement": "Minimum target",
        "ios": "The segment is 40.33pt tall — under the 44 × 44pt minimum. Extend with <code>.contentShape</code> rather than resizing; the drawn height belongs to the row.",
        "android": "Under the 48 × 48dp minimum. Use <code>Modifier.minimumInteractiveComponentSize()</code>, which pads the target without changing the drawn height."
      },
      {
        "requirement": "Disabled",
        "ios": "Not focusable; <code>.disabled(true)</code> comes from the parent control, so the whole row leaves the focus order together.",
        "android": "<code>enabled = false</code> on the row; not focusable."
      },
      {
        "requirement": "Colour is not the only cue",
        "ios": "Active versus inactive is carried by fill and label colour alone — no icon, no weight change. Pair the control with a heading that names what is being switched.",
        "android": "Same. The right-edge divider is decorative and must not be announced."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "The label is 16pt and must scale; the 40.33pt segment has to grow with it rather than clip.",
        "android": "Use <code>sp</code> for the label and let the segment height follow <code>fontScale</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Let the parent <code>Segmented Control</code> own selection. <code>isActive</code> is <code>index == selectedIndex</code>, and <code>State</code> derives from the gesture and the enabled flag.",
        "dontText": "Don’t place a segment on its own or drive <code>isActive</code> per instance — two active segments in one row is a state the component cannot express."
      },
      {
        "doText": "Treat the right-edge line as a divider between segments. It only renders on inactive segments, which is why it earns its place in a 3- or 4-segment control.",
        "dontText": "Don’t read it as a border. The stroke is declared on all four sides but only the right one has weight, so an inactive segment is not outlined — it is separated."
      },
      {
        "doText": "Keep labels short enough to fit at the row’s widest segment. The segment is 16px padding either side of the label and every segment shares the row’s width equally.",
        "dontText": "Don’t rely on truncation. The label has no wrap or ellipsis treatment in any of the six variants, so an over-long label pushes the row past its container."
      },
      {
        "doText": "Disable the whole row when the choice is unavailable — <code>State=Disabled</code> mutes active and inactive alike, to <code>#9BC5FD</code>.",
        "dontText": "Don’t disable a single segment to show it is unavailable. There is no per-segment disabled path, and a muted segment beside live ones reads as selected-but-faded."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Naming is fine — each variant is a frame with a single <code>label</code> TEXT child, and the old <code>#value</code> node is gone. The defect is the stroke: it is declared on <strong>all four sides but only the right one carries weight</strong>, so the node reads as a fully outlined button. That is exactly how the previous assessment came to document a \"1.5px brand-blue outline\" that does not render. Declare the three zero-weight sides off."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>State</code> is PascalCase with Title Case values; <code>isActive</code> takes the <code>is</code> prefix with lowercase <code>true</code>/<code>false</code>. The property was <code>Active</code> in the retired 2026 Working File node and now matches the C2 boolean convention."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Fills are internally consistent and reuse the family’s blues, but no <code>segmented-control/*</code> namespace is registered and bindings cannot be read with the Talk To Figma plugin — so the Style tab’s token column is <code>—</code> rather than asserted."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly: <code>isActive</code> forwards from the row’s selected index, <code>State</code> derives from the press gesture and the enabled flag. Nothing here needs a property the platforms do not already have."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Complete 3 × 2 matrix with no gaps — Default, Pressed and Disabled at both <code>isActive</code> values, including the pressed-active frame that the 1.0.0 assessment added."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Text-only segment. No icons, no images, nothing to vectorise."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Unblocked; not yet registered, and the native component does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 6,
      "description": "<code>State</code> (3) × <code>isActive</code> (2) = 6. Complete matrix, no gaps. Active segments are a solid fill with a white label; inactive ones have no fill — bar Pressed — and carry a right-edge divider in the state’s own colour.",
      "columns": [
        "State",
        "isActive",
        "Node ID",
        "Background",
        "Divider",
        "Label"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "<code>true</code>",
            "<code>26628:50753</code>",
            "#005CE5",
            "–",
            "#FFFFFF"
          ]
        },
        {
          "cells": [
            "Pressed",
            "<code>true</code>",
            "<code>26628:50755</code>",
            "#2340A9",
            "–",
            "#FFFFFF"
          ]
        },
        {
          "cells": [
            "Disabled",
            "<code>true</code>",
            "<code>26628:50757</code>",
            "#9BC5FD",
            "–",
            "#FFFFFF"
          ]
        },
        {
          "cells": [
            "Default",
            "<code>false</code>",
            "<code>26628:50759</code>",
            "–",
            "#005CE5",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Pressed",
            "<code>false</code>",
            "<code>26628:50761</code>",
            "#F6F9FD @ 72%",
            "#005CE5",
            "#2340A9"
          ]
        },
        {
          "cells": [
            "Disabled",
            "<code>false</code>",
            "<code>26628:50763</code>",
            "–",
            "#9BC5FD",
            "#9BC5FD"
          ]
        }
      ]
    }
  },
  changelog: [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Repointed to the Sticker Sheets file · node 26628:50752",
      "rows": [
        {
          "body": "<strong>The record assessed a different Figma file.</strong> <code>meta.node</code> pointed at <code>4111:10773</code> in the <em>2026 Working File</em> (<code>pbxY8a2xcIfVZKxwnud9Xe</code>); the live component is <code>26628:50752</code> in <em>Sticker Sheets v2</em> (<code>HwWDwPit2xJjDH4zszOZ5o</code>). Every value in this entry is re-read from the latter. Dated when found — nothing records when the move happened.",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong>Inactive segments have a right-edge divider, not an outline.</strong> Every tab described \"a 1.5px brand-blue outline\" around the whole segment. <code>export_node_as_image</code> shows a single vertical line on the right edge only — the stroke is declared on all four sides and just the right one has weight. The component is a segment divider, not a bordered button.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong><code>Active</code> renamed <code>isActive</code>.</strong> The property now takes the <code>is</code> prefix with lowercase <code>true</code>/<code>false</code>, matching the C2 boolean convention and its siblings in the Radio family.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Two label colours were undocumented.</strong> The Colors section listed active and inactive-default labels only. Pressed-inactive is <code>#2340A9</code> and disabled-inactive is <code>#9BC5FD</code> — both now recorded, so all six variants have a label value.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>The pressed-inactive wash carries 72% opacity.</strong> Documented as a flat <code>#F6F9FD</code>; the fill is <code>#F6F9FD</code> at <code>0.72</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Typography resolved to a style name.</strong> <code>Primary/Label/Base</code>, <code>matched</code>. Replaces the font spec <code>Proxima Soft Bold · 16 / 16 · +0.25</code>, which the guide bans as a stand-in for a style name.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>The Style tab became interactive.</strong> The component had no demo script at all — <code>demoControls: []</code> and a hand-written inline-styled span for a preview. It now has <code>public/scripts/demos/segmented-control-button.js</code> with <code>State</code> and <code>isActive</code> controls, and the preview and the server-rendered markup come from one renderer.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Variants Inventory repointed.</strong> Six rows on <code>4111:*</code> / <code>4715:*</code> nodes from the retired file, replaced with <code>26628:50753</code>–<code>26628:50763</code>, each carrying its verified background, divider and label.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab filled in.</strong> Installation had no blocks, and Usage Snippets and Usage Guidelines were both empty. Property Mapping used <code>Prop=Value</code> form and is now one prose row per property.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard note corrected.</strong> C1 described layers as <code>container</code> / <code>label</code>; each variant has a single <code>label</code> TEXT child and no container frame. C2 said <code>Active</code> was \"retained by design\" — it was renamed.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The stroke is declared on four sides with weight on one.</strong> That is what made the outline reading look right for two versions. Until the three zero-weight sides are turned off, anyone reading the node sees a fully bordered button.",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Divider weight is unread.</strong> The Talk To Figma plugin does not return <code>strokeWeight</code>, and the outside-aligned stroke falls outside the SVG export bounds, so <code>get_svg</code> drops it entirely. The preview draws 1px — the one value in the Style tab that is not attested.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>The segment is under the minimum touch target.</strong> 40.33pt tall against 44 × 44pt on iOS and 48 × 48dp on Android. The Accessibility table says to extend the hit area rather than resize, since the drawn height belongs to the row.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Whether <code>label</code> is an exposed text property is unverified.</strong> The layer is named <code>label</code>, not <code>#label</code>, and the property panel was not supplied. If it is not exposed, segment text cannot be set in Figma at all — a gap rather than a documentation issue.",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Token bindings unread</strong>, so all twelve colour rows carry <code>—</code>. No <code>segmented-control/*</code> namespace is registered; the previous record’s paths were not carried forward because they named the retired file.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the retired node.</strong> <code>meta.node</code>, <code>meta.figmaUrl</code>, the description, the verdict and the Behavior table all name <code>4111:10773</code>, <code>Active</code>, and the 1.5px outline. Overview scope — needs a <em>Component Review</em> run before the page stops contradicting itself.",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
    {
      version: '1.0.0',
      date: 'July 2026',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 4111:10773',
      rows: [
        { body: '<strong>Component assessed</strong> — the single-segment atom for the Segmented Control family. 6 variants across <code>State</code> × <code>Active</code>. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Active boolean lowercased</strong> — <code>Yes</code>/<code>No</code> → <code>true</code>/<code>false</code>, matching the DS standard. <span class="tag-fixed">Resolved</span>', delta: { kind: 'resolved', label: 'C2 Resolved' } },
        { body: '<strong>Pressed-active variant added</strong> — completes the 3 × 2 matrix; an already-active segment now has a pressed treatment (<code>#2340A9</code>). <span class="tag-fixed">Resolved</span>', delta: { kind: 'resolved', label: 'C5 Resolved' } },
        { body: '<strong>Label node renamed</strong> — <code>#value</code> → <code>label</code>. <span class="tag-fixed">Resolved</span>', delta: { kind: 'resolved', label: 'C2 Resolved' } },
        { body: '<strong>Code Connect</strong> — unblocked; not yet registered. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7 Open' } },
      ],
    },
  ],
};
