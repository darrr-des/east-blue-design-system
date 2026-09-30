import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)` in
// `public/scripts/demos/button.js`. The Properties section mirrors the
// property panel of set 17104:184842 in its order; the two Container rows
// are instance-swap slots and get no control. Appearance is a Variable Mode
// on the parent frame, not a variant axis, so it sits in its own section.
const buttonDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'filled',
        options: [
          { value: 'filled',  label: 'Filled' },
          { value: 'outline', label: 'Outline' },
          { value: 'text',    label: 'Text' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'pressed',  label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'large',
        options: [
          { value: 'large',   label: 'Large' },
          { value: 'medium',  label: 'Medium' },
          { value: 'small',   label: 'Small' },
          { value: 'xsmall',  label: 'XSmall' },
          { value: 'compact', label: 'Compact' },
        ],
      },
      {
        label: 'Icon Placement',
        prop: 'iconplacement',
        defaultValue: 'none',
        options: [
          { value: 'none',     label: 'None' },
          { value: 'leading',  label: 'Leading' },
          { value: 'trailing', label: 'Trailing' },
          { value: 'icononly', label: 'Icon Only' },
        ],
      },
      { label: 'Label', prop: 'label', control: 'input', defaultValue: 'Button', options: [] },
    ],
  },
  {
    heading: 'Mode',
    rows: [
      {
        label: 'Appearance',
        prop: 'appearance',
        defaultValue: 'default',
        options: [
          { value: 'default',     label: 'Default' },
          { value: 'destructive', label: 'Destructive' },
          { value: 'white',       label: 'White' },
          { value: 'subtle',      label: 'Subtle' },
        ],
      },
    ],
  },
];


export const button: ComponentData = {
  "meta": {
    "slug": "button",
    "name": "Button",
    "node": "17104:184842",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17104-184842",
    "description": "Used to trigger an action when tapped. The button's Call to Action describes the action that will occur. The Large/Medium Buttons are the default size for the GCash app.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect x=\"2\" y=\"8\" width=\"28\" height=\"10\" rx=\"5\" fill=\"#005CE5\"/>\n      \n      <rect x=\"9\" y=\"12\" width=\"14\" height=\"2\" rx=\"1\" fill=\"white\" opacity=\"0.9\"/>\n      \n      <rect x=\"2\" y=\"21\" width=\"28\" height=\"8\" rx=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"/>\n      <rect x=\"10\" y=\"24\" width=\"12\" height=\"2\" rx=\"1\" fill=\"#005CE5\" opacity=\"0.8\"/>\n    </svg>"
  },
  "overview": {
    "inContextNote": "How the button appears in a real product screen — primary and secondary actions in a bottom sheet.",
    "inContextHtml": "<img class=\"ctx-img\" src=\"/assets/previews/button-in-context.png\" alt=\"Button component shown in a GCash Physical Card bottom sheet with primary and secondary buttons\" >",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\"><div id=\"btn-demo-preview\"></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Style</span><select class=\"demo-panel-select\" onchange=\"setDemoStyle(this.value)\"><option value=\"filled\" selected=\"\">Filled</option><option value=\"outline\">Outline</option><option value=\"text\">Text</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"setDemoState(this.value)\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" onchange=\"setDemoSize(this.value)\"><option value=\"large\" selected=\"\">Large</option><option value=\"medium\">Medium</option><option value=\"small\">Small</option><option value=\"xsmall\">XSmall</option><option value=\"compact\">Compact</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Icon Placement</span><select class=\"demo-panel-select\" onchange=\"setDemoIconPlacement(this.value)\"><option value=\"none\" selected=\"\">None</option><option value=\"leading\">Leading</option><option value=\"trailing\">Trailing</option><option value=\"icononly\">Icon Only</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Label</span><input type=\"text\" class=\"demo-panel-select demo-panel-input\" value=\"Button\" placeholder=\"Label\" oninput=\"setDemoLabel(this.value)\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Mode</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Appearance</span><select class=\"demo-panel-select\" onchange=\"setDemoAppearance(this.value)\"><option value=\"default\" selected=\"\">Default</option><option value=\"destructive\">Destructive</option><option value=\"white\">White</option><option value=\"subtle\">Subtle</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Three styles × five sizes × four icon placements, with four appearance modes over the top — primary, secondary, tertiary, on-surface and destructive actions are all covered from one set."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "The variant itself carries the fill, stroke, radius and auto-layout — no wrapper frame. <code>#label</code> and the two Container slots are direct children."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "Clean <code>Property=Value</code> naming and all 180 combinations built. Two gaps: the Large <code>Icon Only</code> variants name their slot <code>Trailing Container</code> where the other sizes say <code>Leading Container</code>, and the Outline stroke is 3 at Large against 2 everywhere else."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>Leading Container</code> and <code>Trailing Container</code> are Figma SLOT nodes (80 and 54 items offered). Each size resolves to its own DS text style, so the label maps cleanly to a native type ramp."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "60 variants — every style, size and icon placement."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Darker fill, stroke and label from the pressed tokens."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted tokens across all four appearance modes."
      },
      {
        "state": "Destructive",
        "ios": "yes",
        "android": "yes",
        "property": "Mode: Appearance=Destructive",
        "notes": "A Variable Mode on the parent frame, not a variant — applies to all three styles."
      },
      {
        "state": "Icon Only",
        "ios": "yes",
        "android": "yes",
        "property": "Icon Placement=Icon Only",
        "notes": "Square the height of the size: 50, 48, 36, 28, 24. Needs <code>accessibilityLabel</code> / <code>contentDescription</code>."
      },
      {
        "state": "Focused (a11y)",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Mobile-only. iOS and Android draw focus natively — no Figma state needed."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "Native modifier",
        "notes": "<code>.ebLoading(true)</code> / <code>isLoading = true</code>. Not a Figma state."
      }
    ],
    "resolved": [
      {
        "body": "Layer renamed from <code>.base/button/small</code> → <code>container</code> on compact disabled container (C1)"
      },
      {
        "body": "Icon slots (<code>Leading Container</code>, <code>Trailing Container</code>) added to all variants as Figma SLOT nodes (C2)"
      },
      {
        "body": "<code>isError</code> replaced — Destructive is now an appearance variable mode, not a variant property (C2)"
      },
      {
        "body": "v2: Outlined and Text Link moved from appearance to <code>Style</code> variant property (Filled/Outline/Text) (C2)"
      },
      {
        "body": "v2: Size moved from variable modes to variant dimension — each size has its own text style, eliminating font-size variable conflict (C2/C3)"
      },
      {
        "body": "v3: <code>Button</code> variable collection created with 4 appearance modes (Default/Destructive/White/Subtle) — 12 color variables bound to all 60 variants (C3)"
      },
      {
        "body": "v3: Old <code>Button Size</code> and <code>button/variant</code> collections removed (C3)"
      },
      {
        "body": "v3.1: Loading state added — 12 new <code>State=Loading</code> variants with dot indicators replacing label, disabled appearance colors (C5)"
      },
      {
        "body": "v4.0: Icon Placement promoted to component property — replaces <code>leadingIcon</code>/<code>trailingIcon</code> booleans with a single 4-value enum (<code>None</code>/<code>Leading</code>/<code>Trailing</code>/<code>Icon Only</code>). Adds <code>Icon Only</code> square variant for toolbars/navigation (previously a design recommendation). Handoff is now explicit — developers see icon placement as a first-class property. (C2)"
      },
      {
        "body": "v4.0: Appearance Mode documented in Figma component description with SwiftUI/Compose API mapping — addresses the Mode-invisibility handoff gap until Code Connect is implemented. (C7 partial)"
      },
      {
        "body": "v4.0: State simplified to Default/Pressed/Disabled — Loading moved to a native interaction modifier rather than a Figma variant. (C5)"
      },
      {
        "body": "v4.1: <code>button-container</code> wrapper layer removed — outermost component now holds fill/radius/auto-layout directly. Layer depth reduced from 4 to 3 (component → container → label/icon). Inner <code>container</code> retained for icon-label gap grouping. (C1)"
      },
      {
        "body": "v4.1: Large height reduced from 56px → 50px per design review feedback. (C3)"
      },
      {
        "body": "v4.1: New Mode-driven token collection applied — all 60 Filled variants bound to <code>appearance/container/fill</code> (+ pressed/disabled), all 60 Outline variants bound to <code>appearance/stroke/color</code> + new <code>appearance/label/on-surface/color</code>, all 60 Text variants bound to <code>appearance/label/on-surface/color</code>. Switching the parent frame's Variable Mode (Default / Destructive / White / Subtle) now drives appearance across all 180 variants. (C3)"
      },
      {
        "body": "v4.1: New <code>appearance/label/on-surface/color</code> variable created — semantic separation between labels on filled vs surface backgrounds. Eliminates token-purpose confusion between Filled labels (white-on-fill) and Outline/Text labels (color-on-surface). (C3)"
      },
      {
        "body": "v4.1: Text styles renamed to cleaner <code>Primary/Label/Large</code>, <code>Primary/Label/Base</code>, <code>Primary/Label/Small</code>, <code>Primary/Label/Fine</code> (was <code>Primary/Label/Light/*</code> family). (C3)"
      }
    ],
    "open": [
      {
        "headline": "Icon Only at Large names its slot <code>Trailing Container</code>.",
        "body": "The other four sizes name the same single slot <code>Leading Container</code>. Nine variants are affected — 3 styles × 3 states at <code>Size=Large</code>. Code Connect would map one icon-only button to two different slot names.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Outline stroke is 3 at Large and 2 everywhere else.",
        "body": "Read off <code>get_svg</code> on the Outline row: Large exports at <code>stroke-width 3</code>, Medium, Small, Compact and XSmall at <code>2</code>. Large reads visibly heavier than the rest of the ramp.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Corner radius carries two raw values.",
        "body": "<code>99</code> at Large and Medium, <code>99999</code> at Small, Compact and XSmall. Both clamp to a pill, so nothing shows — but the value is unbound and inconsistent.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "The property shape is ready — four enums plus a text property and two slots. Registration can proceed once the slot naming above is settled.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename the component set <code>Button_New</code> \u2192 <code>Button</code>.",
        "body": "Decided by the DS owner. <code>_New</code> reads as a migration artifact and every consumer inherits it \u2014 the instances inside Alert, Callout, Carousel Item, Modal and Modal - Transaction Receipt all show <code>Button_New</code> in their layer trees. Renaming the master propagates to all of them at once. This page now shows <code>Button</code>; the Figma set is still named <code>Button_New</code> until the rename is made there.",
        "tag": "Rename"
      },
      {
        "headline": "Rename the Large Icon Only slot to <code>Leading Container</code>.",
        "body": "Brings the nine Large variants in line with the other four sizes so icon-only maps to one native parameter.",
        "tag": "Rename"
      },
      {
        "headline": "Bind the Outline stroke and the corner radius to tokens.",
        "body": "One stroke value across the ramp, or a documented per-size token; one radius token in place of the <code>99</code> / <code>99999</code> split.",
        "tag": "Token"
      },
      {
        "headline": "Order the Size enum by height.",
        "body": "The panel lists Large, Medium, Small, XSmall, Compact while Compact (28) is taller than XSmall (24). Reordering makes the ramp readable in the picker.",
        "tag": "Rename"
      },
      {
        "headline": "Document full-width (stretch) behavior.",
        "body": "Add an <code>isFullWidth</code> boolean for bottom-sheet CTAs. Today it is per-screen constraints, so the intent is invisible at handoff.",
        "tag": "Property"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "btn-spec-main",
        "demoKey": "main",
        "title": "Button",
        "node": "17104:184842",
        "description": "One card for the whole set: Style × State × Size × Icon Placement, with Appearance as a Variable Mode. Every reading below tracks the selection.",
        "previewHtml": "<div id=\"button-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": buttonDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Style",
                "value": "Filled",
                "prop": "style"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "Size",
                "value": "Large",
                "prop": "size"
              },
              {
                "key": "Icon Placement",
                "value": "None",
                "prop": "iconplacement"
              },
              {
                "key": "Icon slot",
                "value": "— (empty)",
                "prop": "slot"
              },
              {
                "key": "Label",
                "value": "Button",
                "prop": "label"
              },
              {
                "key": "Appearance (Mode)",
                "value": "Default",
                "prop": "appearance"
              },
              {
                "key": "Resolved variant",
                "value": "17104:184843 · 97 × 50",
                "prop": "variantNode",
                "mono": true
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
                "prop": "bg",
                "swatch": true
              },
              {
                "key": "Border",
                "value": "#005CE5",
                "prop": "border",
                "swatch": true
              },
              {
                "key": "Label",
                "value": "#FFFFFF",
                "prop": "labelColor",
                "swatch": true
              },
              {
                "key": "Icon slot",
                "value": "#020E22 @ 24%",
                "prop": "slotFill",
                "swatch": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Frame",
                "value": "97 × 50",
                "prop": "frame",
                "mono": true
              },
              {
                "key": "Height",
                "value": "50",
                "prop": "height",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "20",
                "prop": "padH",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16",
                "prop": "padV",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8",
                "prop": "gap",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "24 × 24",
                "prop": "icon",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "99",
                "prop": "radius",
                "mono": true
              },
              {
                "key": "Stroke",
                "value": "3 inside",
                "prop": "stroke",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#label",
                "value": "Primary/Label/Large",
                "prop": "textStyle",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAppearance</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.filled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">controlSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBButtonSize</span>.<span class=\"syn-dot\">Large</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Button\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Filled — Colors by Appearance Mode",
        "description": "Default mode re-read from the variant nodes in this pass. Destructive, White and Subtle carry the v3 / v4.1 Variable Mode capture — switching modes is a Figma write, so they were not re-read.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Default · bg",
            "token": "button/primary/brand/{state}/bg",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Default · label",
            "token": "button/primary/brand/{state}/label",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Destructive · bg",
            "token": "button/primary/destructive/{state}/bg",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "Destructive · label",
            "token": "button/primary/destructive/{state}/label",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "White · bg",
            "token": "button/primary/white/{state}/bg",
            "values": [
              "#FFFFFF",
              "#EEF2F9",
              "#F5F7FA"
            ]
          },
          {
            "role": "White · label",
            "token": "button/primary/white/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Subtle · bg",
            "token": "button/primary/subtle/{state}/bg",
            "values": [
              "#E5F1FF",
              "#D2E5FF",
              "#EEF5FF"
            ]
          },
          {
            "role": "Subtle · label",
            "token": "button/primary/subtle/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          }
        ]
      },
      {
        "title": "Outline — Colors by Appearance Mode",
        "description": "No fill. Stroke is 3 inside at Large and 2 inside at every other size.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Default · border",
            "token": "button/secondary/brand/{state}/border",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Default · label",
            "token": "button/secondary/brand/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Destructive · border",
            "token": "button/secondary/destructive/{state}/border",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "Destructive · label",
            "token": "button/secondary/destructive/{state}/label",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "White · border",
            "token": "button/secondary/white/{state}/border",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "White · label",
            "token": "button/secondary/white/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Subtle · border",
            "token": "button/secondary/subtle/{state}/border",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Subtle · label",
            "token": "button/secondary/subtle/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          }
        ]
      },
      {
        "title": "Text — Colors by Appearance Mode",
        "description": "Label only — no fill, no stroke. The frame keeps the same padding as Filled.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Default · label",
            "token": "button/tertiary/brand/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Destructive · label",
            "token": "button/tertiary/destructive/{state}/label",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "White · label",
            "token": "button/tertiary/white/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Subtle · label",
            "token": "button/tertiary/subtle/{state}/label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          }
        ]
      },
      {
        "title": "Icon slot placeholder",
        "description": "The unfilled Leading / Trailing Container slot as it ships in the set — replaced by the swapped instance.",
        "columns": [
          "All states"
        ],
        "rows": [
          {
            "role": "Container fill",
            "token": "— (raw value)",
            "values": [
              "#020E22 @ 24%"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Or in Package.swift:</span>\n.<span class=\"fn\">package</span>(\n    <span class=\"prp\">url</span>: <span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>,\n    <span class=\"prp\">from</span>: <span class=\"str\">\"2.0.0\"</span>\n)"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"cmt\">// build.gradle.kts (app)</span>\n<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:button:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.button.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. API shape is final — native implementation is pending."
    },
    "propertyMapping": {
      "description": "Every row maps a Figma component property to its native equivalent. When a developer selects a variant in Figma, Code Connect will output the corresponding native code using these mappings.",
      "rows": [
        {
          "figma": "<code>Style=Filled</code>",
          "swift": "<code>.ebAppearance(.filled)</code>",
          "compose": "<code>EBButton { }</code>"
        },
        {
          "figma": "<code>Style=Outline</code>",
          "swift": "<code>.ebAppearance(.outlined)</code>",
          "compose": "<code>EBOutlinedButton { }</code>"
        },
        {
          "figma": "<code>Style=Text</code>",
          "swift": "<code>.ebAppearance(.textLink)</code>",
          "compose": "<code>EBTextButton { }</code>"
        },
        {
          "figma": "<code>State=Default</code>",
          "swift": "(default — omit)",
          "compose": "(default — omit)"
        },
        {
          "figma": "<code>State=Pressed</code>",
          "swift": "Drawn by the press gesture",
          "compose": "Drawn by the ripple / pressed state"
        },
        {
          "figma": "<code>State=Disabled</code>",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "<code>Size=Large … Compact</code>",
          "swift": "<code>.controlSize(.large / .regular / .small / .mini / .compact)</code>",
          "compose": "<code>size = EBButtonSize.Large / Medium / Small / XSmall / Compact</code>"
        },
        {
          "figma": "<code>Icon Placement=None</code>",
          "swift": "(default — text only)",
          "compose": "(default — text only)"
        },
        {
          "figma": "<code>Icon Placement=Leading</code>",
          "swift": "<code>leadingIcon: Image(…)</code>",
          "compose": "<code>leadingIcon = { Icon(…) }</code>"
        },
        {
          "figma": "<code>Icon Placement=Trailing</code>",
          "swift": "<code>trailingIcon: Image(…)</code>",
          "compose": "<code>trailingIcon = { Icon(…) }</code>"
        },
        {
          "figma": "<code>Icon Placement=Icon Only</code>",
          "swift": "<code>EBButton(icon:, accessibilityLabel:)</code>",
          "compose": "<code>EBButton(contentDescription = …) { Icon(…) }</code>"
        },
        {
          "figma": "<code>Label</code> (text)",
          "swift": "First argument — <code>EBButton(\"Save\")</code>",
          "compose": "<code>Text(\"Save\")</code> in the content slot"
        },
        {
          "figma": "<code>Leading Container</code> (slot)",
          "swift": "<code>leadingIcon</code> parameter",
          "compose": "<code>leadingIcon</code> composable slot"
        },
        {
          "figma": "<code>Trailing Container</code> (slot)",
          "swift": "<code>trailingIcon</code> parameter",
          "compose": "<code>trailingIcon</code> composable slot"
        },
        {
          "figma": "Mode <code>Appearance=Default</code>",
          "swift": "(default — omit modifier)",
          "compose": "(default — omit colors)"
        },
        {
          "figma": "Mode <code>Appearance=Destructive</code>",
          "swift": "<code>.ebColorScheme(.destructive)</code>",
          "compose": "<code>colors = EBButtonDefaults.destructiveColors()</code>"
        },
        {
          "figma": "Mode <code>Appearance=White</code>",
          "swift": "<code>.ebColorScheme(.white)</code>",
          "compose": "<code>colors = EBButtonDefaults.whiteColors()</code>"
        },
        {
          "figma": "Mode <code>Appearance=Subtle</code>",
          "swift": "<code>.ebColorScheme(.subtle)</code>",
          "compose": "<code>colors = EBButtonDefaults.subtleColors()</code>"
        },
        {
          "figma": "(Loading — runtime, no Figma state)",
          "swift": "<code>.ebLoading(true)</code>",
          "compose": "<code>isLoading = true</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Button/EBButton.swift",
        "compose": "android/components/button/EBButton.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Filled — Primary action",
        "swift": "<span class=\"cmt\">// Default appearance — Mode resolves at parent (.environment(\\.ebAppearance, .default))</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Save Changes\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n\n<span class=\"cmt\">// Destructive appearance</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Delete Account\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n    .<span class=\"fn\">ebColorScheme</span>(.<span class=\"prp\">destructive</span>)\n\n<span class=\"cmt\">// Icon Placement = Leading</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Send Money\"</span>, <span class=\"prp\">leadingIcon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"arrow.up.right\"</span>))\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n\n<span class=\"cmt\">// Icon Placement = Trailing</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Continue\"</span>, <span class=\"prp\">trailingIcon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"chevron.right\"</span>))\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n\n<span class=\"cmt\">// Icon Placement = Icon Only — square target, accessibility label required</span>\n<span class=\"typ\">EBButton</span>(<span class=\"prp\">icon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"plus\"</span>), <span class=\"prp\">accessibilityLabel</span>: <span class=\"str\">\"Add item\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Submit\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Loading — runtime only, not a Figma state</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Submit\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n    .<span class=\"fn\">ebLoading</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Default appearance — Mode resolves at theme/parent</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { <span class=\"cmt\">/* action */</span> },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBButtonSize</span>.<span class=\"prp\">Large</span>\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Save Changes\"</span>)\n}\n\n<span class=\"cmt\">// Destructive appearance</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { <span class=\"cmt\">/* action */</span> },\n    <span class=\"prp\">colors</span> = <span class=\"typ\">EBButtonDefaults</span>.<span class=\"fn\">destructiveColors</span>()\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Delete Account\"</span>)\n}\n\n<span class=\"cmt\">// Icon Placement = Leading</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">Send</span>, <span class=\"prp\">contentDescription</span> = <span class=\"kw\">null</span>) }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Send Money\"</span>)\n}\n\n<span class=\"cmt\">// Icon Placement = Trailing</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">trailingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">ChevronRight</span>, <span class=\"prp\">contentDescription</span> = <span class=\"kw\">null</span>) }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Continue\"</span>)\n}\n\n<span class=\"cmt\">// Icon Placement = Icon Only — contentDescription required</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">contentDescription</span> = <span class=\"str\">\"Add item\"</span>\n) {\n    <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">Add</span>, <span class=\"prp\">contentDescription</span> = <span class=\"kw\">null</span>)\n}\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Submit\"</span>)\n}\n\n<span class=\"cmt\">// Loading — runtime only, not a Figma state</span>\n<span class=\"typ\">EBButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">isLoading</span> = <span class=\"kw\">true</span>\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Submit\"</span>)\n}"
      },
      {
        "subheading": "Outline — Secondary action",
        "swift": "<span class=\"cmt\">// Default</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Cancel\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">outlined</span>)\n\n<span class=\"cmt\">// Destructive</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Remove Item\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">outlined</span>)\n    .<span class=\"fn\">ebColorScheme</span>(.<span class=\"prp\">destructive</span>)\n\n<span class=\"cmt\">// Icon Placement = Leading</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Filter\"</span>, <span class=\"prp\">leadingIcon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"line.3.horizontal.decrease\"</span>))\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">outlined</span>)\n\n<span class=\"cmt\">// Icon Placement = Icon Only</span>\n<span class=\"typ\">EBButton</span>(<span class=\"prp\">icon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"square.and.arrow.up\"</span>), <span class=\"prp\">accessibilityLabel</span>: <span class=\"str\">\"Share\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">outlined</span>)\n\n<span class=\"cmt\">// Button pair</span>\n<span class=\"typ\">HStack</span>(<span class=\"prp\">spacing</span>: <span class=\"typ\">12</span>) {\n    <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Cancel\"</span>).<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">outlined</span>)\n    <span class=\"typ\">EBButton</span>(<span class=\"str\">\"Save\"</span>).<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">filled</span>)\n}",
        "compose": "<span class=\"typ\">EBOutlinedButton</span>(\n    <span class=\"prp\">onClick</span> = { <span class=\"cmt\">/* action */</span> }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Cancel\"</span>)\n}\n\n<span class=\"cmt\">// Icon Placement = Leading</span>\n<span class=\"typ\">EBOutlinedButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">FilterList</span>, <span class=\"prp\">contentDescription</span> = <span class=\"kw\">null</span>) }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Filter\"</span>)\n}\n\n<span class=\"cmt\">// Icon Placement = Icon Only</span>\n<span class=\"typ\">EBOutlinedButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">contentDescription</span> = <span class=\"str\">\"Share\"</span>\n) {\n    <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">Share</span>, <span class=\"prp\">contentDescription</span> = <span class=\"kw\">null</span>)\n}\n\n<span class=\"cmt\">// Button pair</span>\n<span class=\"typ\">Row</span>(<span class=\"prp\">horizontalArrangement</span> = <span class=\"typ\">Arrangement</span>.<span class=\"fn\">spacedBy</span>(<span class=\"typ\">12</span>.dp)) {\n    <span class=\"typ\">EBOutlinedButton</span>(<span class=\"prp\">onClick</span> = {}) { <span class=\"typ\">Text</span>(<span class=\"str\">\"Cancel\"</span>) }\n    <span class=\"typ\">EBButton</span>(<span class=\"prp\">onClick</span> = {}) { <span class=\"typ\">Text</span>(<span class=\"str\">\"Save\"</span>) }\n}"
      },
      {
        "subheading": "Text — Tertiary action",
        "swift": "<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Learn More\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">textLink</span>)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">small</span>)\n\n<span class=\"cmt\">// Destructive</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Remove\"</span>)\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">textLink</span>)\n    .<span class=\"fn\">ebColorScheme</span>(.<span class=\"prp\">destructive</span>)\n\n<span class=\"cmt\">// Icon Placement = Trailing (common for inline links)</span>\n<span class=\"typ\">EBButton</span>(<span class=\"str\">\"Read more\"</span>, <span class=\"prp\">trailingIcon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"chevron.right\"</span>))\n    .<span class=\"fn\">ebAppearance</span>(.<span class=\"prp\">textLink</span>)",
        "compose": "<span class=\"typ\">EBTextButton</span>(\n    <span class=\"prp\">onClick</span> = { <span class=\"cmt\">/* action */</span> },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBButtonSize</span>.<span class=\"prp\">Small</span>\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Learn More\"</span>)\n}\n\n<span class=\"cmt\">// Icon Placement = Trailing (common for inline links)</span>\n<span class=\"typ\">EBTextButton</span>(\n    <span class=\"prp\">onClick</span> = { },\n    <span class=\"prp\">trailingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">ChevronRight</span>, <span class=\"prp\">contentDescription</span> = <span class=\"kw\">null</span>) }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Read more\"</span>)\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "Min touch target",
        "ios": "<code>44 × 44pt</code>",
        "android": "<code>48 × 48dp</code>"
      },
      {
        "requirement": "Focus ring",
        "ios": "Handled by UIKit/SwiftUI",
        "android": "Handled by Material ripple"
      },
      {
        "requirement": "Icon-only buttons",
        "ios": "<code>.accessibilityLabel(\"Send\")</code>",
        "android": "<code>contentDescription = \"Send\"</code>"
      },
      {
        "requirement": "Destructive role",
        "ios": "<code>role: .destructive</code> — announced by VoiceOver",
        "android": "Use <code>semantics { role = Role.Button }</code>"
      },
      {
        "requirement": "Loading state",
        "ios": "<code>.accessibilityLabel(\"Loading\")</code> + disable tap",
        "android": "<code>semantics { stateDescription = \"Loading\" }</code> + disable click"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use one Filled button per screen area as the primary action. Pair with Outline or Text for secondary.",
        "dontText": "Place two filled buttons side by side — they compete for attention and neither reads as primary."
      },
      {
        "doText": "Use Destructive appearance for irreversible actions (delete, remove). Always pair with a confirmation.",
        "dontText": "Use Destructive for actions that are simply \"negative\" but reversible (dismiss, close, decline)."
      },
      {
        "doText": "Use White appearance on brand-colored or dark surfaces (hero banners, promotional cards).",
        "dontText": "Use White appearance on a white background — the button disappears. Use Default or Subtle instead."
      },
      {
        "doText": "Use Text style for inline or low-emphasis actions (Learn more, View terms, Skip).",
        "dontText": "Use Text style for primary form submission — it lacks the visual weight to signal the main action."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Semantic names throughout — <code>#label</code>, <code>Leading Container</code>, <code>Trailing Container</code> — and the wrapper frame is gone, so the variant itself carries the fill, radius and auto-layout. One gap: the nine <code>Icon Placement=Icon Only</code> variants at <code>Size=Large</code> hold a slot named <code>Trailing Container</code>, where the other four sizes name the same slot <code>Leading Container</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Four orthogonal axes in clean <code>Property=Value</code> form: <code>Style</code> (Filled/Outline/Text), <code>State</code> (Default/Pressed/Disabled), <code>Size</code> (Large/Medium/Small/XSmall/Compact), <code>Icon Placement</code> (None/Leading/Trailing/Icon Only). All 180 combinations are built — no holes. <code>Label</code> is a text property; the two Containers are instance-swap slots."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colour is mode-driven through the <code>Button</code> collection and every label resolves to a DS text style (<code>Primary/Label/Large</code> → <code>Base</code> → <code>Small</code> → <code>Fine</code>). Two raw-value inconsistencies remain: the Outline stroke is <code>3</code> at Large and <code>2</code> at every other size, and the corner radius is <code>99</code> at Large/Medium but <code>99999</code> at Small/Compact/XSmall."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>EBButton</code> / <code>EBOutlinedButton</code> / <code>EBTextButton</code>. Icon Only is a square the height of the size — a direct icon-button mapping. Nothing web-only in the set."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed and Disabled across all 180 variants. Focus is N/A on mobile — iOS and Android draw it. Loading is a runtime modifier, not a Figma state."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Both containers are Figma SLOT nodes taking vector instances — 80 items offered on Leading, 54 on Trailing. Unfilled, a slot ships as a <code>#020E22</code> circle at 24%, 24 at Large/Medium and 16 at Small/Compact/XSmall."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered. The property shape is ready: four enums plus one text property map 1:1 to the native API, and Appearance resolves from the environment rather than a parameter."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 180,
      "description": "3 <code>Style</code> × 3 <code>State</code> × 5 <code>Size</code> × 4 <code>Icon Placement</code> = <strong>180 variants</strong>, all built. <code>Appearance</code> is a Variable Mode (Default / Destructive / White / Subtle), so the set resolves to <strong>720 visual states</strong>. <details><summary>View full Size × geometry breakdown (5 rows)</summary><table class=\"data-table\"><thead><tr><th>Size</th><th>Height</th><th>Padding H / V</th><th>Icon</th><th>Outline stroke</th><th>Radius</th><th>Text style</th></tr></thead><tbody><tr><td><strong>Large</strong></td><td><code>50</code></td><td><code>20 / 16</code></td><td><code>24</code></td><td><code>3</code></td><td><code>99</code></td><td><code>Primary/Label/Large</code></td></tr><tr><td><strong>Medium</strong></td><td><code>48</code></td><td><code>16 / 16</code></td><td><code>24</code></td><td><code>2</code></td><td><code>99</code></td><td><code>Primary/Label/Base</code></td></tr><tr><td><strong>Small</strong></td><td><code>36</code></td><td><code>12 / 10</code></td><td><code>16</code></td><td><code>2</code></td><td><code>99999</code></td><td><code>Primary/Label/Base</code></td></tr><tr><td><strong>XSmall</strong></td><td><code>24</code></td><td><code>10 / 6</code></td><td><code>16</code></td><td><code>2</code></td><td><code>99999</code></td><td><code>Primary/Label/Fine</code></td></tr><tr><td><strong>Compact</strong></td><td><code>28</code></td><td><code>8 / 7</code></td><td><code>16</code></td><td><code>2</code></td><td><code>99999</code></td><td><code>Primary/Label/Small</code></td></tr></tbody></table><p class=\"table-footnote\">Icon gap is 8 at every size. Icon Only is a square the height of the size. Read off nodes in set 17104:184842.</p></details>",
      "columns": [
        "Style",
        "Sizes",
        "States",
        "Icon Placements",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Filled</strong>",
            "Large, Medium, Small, XSmall, Compact",
            "Default, Pressed, Disabled",
            "None, Leading, Trailing, Icon Only",
            "60"
          ]
        },
        {
          "cells": [
            "<strong>Outline</strong>",
            "Large, Medium, Small, XSmall, Compact",
            "Default, Pressed, Disabled",
            "None, Leading, Trailing, Icon Only",
            "60"
          ]
        },
        {
          "cells": [
            "<strong>Text</strong>",
            "Large, Medium, Small, XSmall, Compact",
            "Default, Pressed, Disabled",
            "None, Leading, Trailing, Icon Only",
            "60"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "4.2.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Set re-read; Style tab collapsed to one card · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Rename <code>Button_New</code> \u2192 <code>Button</code> decided.</strong> The DS owner settled the name. This page now shows <code>Button</code>. The Figma set is still named <code>Button_New</code>, and renaming it is a Figma edit this site does not make, so the consumer pages keep reading the instance as <code>Button_New</code> until the file changes. Carousel Item's held question is closed by the same decision. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Decided"
          }
        },
        {
          "body": "<strong>Style tab collapsed to a single card.</strong> Three per-style cards replaced by one card whose panel mirrors the Figma property panel in its order — Style, State, Size, Icon Placement, Label — with Appearance kept as a Mode section. The two Containers are instance-swap slots and get no control. Every Colors, Layout and Typography reading now tracks the selection, and the card reports the resolved variant node for all 180 combinations.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview rebuilt from the set.</strong> The HTML button stand-in was replaced by an SVG drawn from the measured geometry, so the preview hugs like the component: Icon Only is a square the height of the size, and the label drives the width.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Padding corrected at four of five sizes.</strong> Read off the Filled/Default row — Large <code>20 / 16</code>, Medium <code>16 / 16</code>, Small <code>12 / 10</code>, Compact <code>8 / 7</code>, XSmall <code>10 / 6</code>. The page previously carried Medium <code>16 / 12</code>, Small <code>12 / 8</code>, Compact <code>12 / 5</code> and XSmall <code>10 / 4</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Corrected"
          }
        },
        {
          "body": "<strong>Icon geometry documented.</strong> Slot is 24 at Large and Medium, 16 at Small, Compact and XSmall; the gap to the label is 8 at every size. An unfilled slot ships as a <code>#020E22</code> circle at 24%.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Documented"
          }
        },
        {
          "body": "<strong>Text styles re-resolved.</strong> All five label styles matched by id and by value — <code>Primary/Label/Large</code> (Large), <code>Primary/Label/Base</code> (Medium and Small), <code>Primary/Label/Small</code> (Compact), <code>Primary/Label/Fine</code> (XSmall). Per-row font, size and tracking dropped from the card; the style name carries them.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Verified"
          }
        },
        {
          "body": "<strong>Inner <code>container</code> frame is gone.</strong> <code>#label</code> and the Container slots are direct children of the variant, so the tree is two deep, not three. The v4.1 note saying the inner frame was retained no longer describes the set.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Improved"
          }
        },
        {
          "body": "<strong>Large <code>Icon Only</code> names its slot <code>Trailing Container</code></strong> — the other four sizes name the same slot <code>Leading Container</code>. Nine variants affected (3 styles × 3 states at Large). <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Outline stroke is 3 at Large, 2 at every other size</strong>, and the corner radius is <code>99</code> at Large/Medium against <code>99999</code> at Small/Compact/XSmall. Both are raw values, unbound. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Size enum is ordered Large, Medium, Small, XSmall, Compact</strong> while Compact (28) is taller than XSmall (24). Cosmetic in the picker, confusing at handoff. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Appearance modes not re-read.</strong> Default mode was re-read from the variant nodes and agrees with what the page carried. Destructive, White and Subtle keep the v3 / v4.1 capture — switching a Variable Mode is a Figma write, which this pass does not do.",
          "delta": {
            "kind": "open",
            "label": "C3 Unverified"
          }
        }
      ]
    },
    {
      "version": "4.1.0",
      "date": "April 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Mode-driven tokens applied + structure flatten + height refinement · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Mode-driven appearance tokens applied to all 180 variants</strong> — Filled fills bound to <code>appearance/container/fill</code> (and pressed/disabled), Outline borders bound to <code>appearance/stroke/color</code>, all Outline + Text labels bound to new <code>appearance/label/on-surface/color</code>. Switching the parent frame's Variable Mode now drives appearance across the entire variant set. Validates the Mode → Property → API translation pattern for upcoming Code Connect work. <span class=\"tag-fixed\">Applied</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Improved"
          }
        },
        {
          "body": "<strong>New <code>appearance/label/on-surface/color</code> variable created</strong> — 3 variants (color, color-pressed, color-disabled) × 4 modes. Provides semantic separation: <code>label/color</code> = labels on filled backgrounds (white-on-fill), <code>label/on-surface/color</code> = labels on transparent/surface backgrounds (color-on-surface). Eliminates the binding ambiguity for Outline/Text styles. <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Improved"
          }
        },
        {
          "body": "<strong><code>button-container</code> wrapper layer removed</strong> — Visual properties (fill, radius, auto-layout, padding) lifted from inner <code>button-container</code> frame up to the variant component itself. Layer depth: 4 → 3. Native parity improved (the component IS the styled element, matching SwiftUI/Compose conventions). Inner <code>container</code> frame retained for icon-label gap grouping. <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Improved"
          }
        },
        {
          "body": "<strong>Large height reduced 56 → 50px</strong> — Per design review approval. Matches the visual rhythm of other CTAs in the system. Padding adjusted to maintain proportions. <span class=\"tag-fixed\">Refined</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Refined"
          }
        },
        {
          "body": "<strong>Text styles renamed</strong> — <code>Primary/Label/Large</code> (was <code>Primary/Label/Light/Base</code>), <code>Primary/Label/Base</code>, <code>Primary/Label/Small</code>, <code>Primary/Label/Fine</code>. Cleaner semantic naming, removes the redundant \"Light\" prefix. <span class=\"tag-fixed\">Renamed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Improved"
          }
        },
        {
          "body": "<strong>Figma component description added</strong> — Documents the Appearance Mode → SwiftUI/Compose API mapping directly in the Figma component description. Surfaces the Mode layer in dev handoff (Dev Mode panel). Will be superseded by Code Connect when C7 is implemented. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "C7 Partial"
          }
        }
      ]
    },
    {
      "version": "4.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Icon Placement restructure + Appearance Mode documentation · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Icon Placement promoted to component property</strong> — Previously two boolean toggles (<code>leadingIcon</code>, <code>trailingIcon</code>) caused handoff ambiguity. Now a single 4-value enum: <code>None</code> / <code>Leading</code> / <code>Trailing</code> / <code>Icon Only</code>. Adds <code>Icon Only</code> as a new square-button variant. Total variants: 60 → 180 (3 Styles × 3 States × 5 Sizes × 4 Icon Placements). <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Improved"
          }
        },
        {
          "body": "<strong>Appearance Mode documented in Figma component description</strong> — Appearance (Default/Destructive/White/Subtle) remains a Variable Mode for token reuse but is now explicitly documented in the Figma component description with SwiftUI/Compose API mapping. Addresses the Mode-invisibility handoff gap. Will be superseded by Code Connect when C7 is implemented. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "C7 Partial"
          }
        },
        {
          "body": "<strong>State property reduced to 3 values</strong> — <code>State</code> now Default/Pressed/Disabled. Loading is handled as an interaction modifier in native code rather than a Figma variant. <span class=\"tag-fixed\">Simplified</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Refined"
          }
        }
      ]
    },
    {
      "version": "3.2.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Changes Applied via Figma MCP · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Compact size added</strong> — New Size=Compact (28px height) between Small and XSmall. 12 new variants. Total: 60 variants (3 Styles × 5 Sizes × 4 States). <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Improved"
          }
        },
        {
          "body": "<strong>Height tokens bound</strong> — All sizes now use space tokens for height: Large=space/space-56, Medium=space/space-48, Small=space/space-36, Compact=space/space-28. XSmall height still derived from padding. <span class=\"tag-fixed\">Refined</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Improved"
          }
        }
      ]
    },
    {
      "version": "3.1.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Loading State Added via Figma MCP · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Loading state added as 4th state dimension</strong> — 12 new <code>State=Loading</code> variants (3 Styles × 4 Sizes). Dot indicators (<code>●  ●  ●</code>) replace label text. Uses disabled appearance colors. Tap is disabled during loading. <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Variant count increased from 36 → 48</strong> — 4 states (Default/Pressed/Disabled/Loading) × 4 sizes × 3 styles. 192 visual states across 4 appearance modes. <span class=\"tag-fixed\">Updated</span>",
          "delta": {
            "kind": "resolved",
            "label": "+12 Variants"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "March 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Component Restructure via Figma MCP · node 17104:184842",
      "rows": [
        {
          "body": "<strong><code>isError</code> replaced with <code>Variant: Brand | Destructive</code></strong> — True orthogonal property applied to all 24 variants. Destructive Default (filled) variants added for all 3 states. All 30 existing variants renamed. <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>White and Subtle appearances added</strong> — 6 new Brand-only variants (3 States each). White for inverse/dark-surface contexts; Subtle for neutral-tinted surface contexts. <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "+6 Variants"
          }
        },
        {
          "body": "<strong>Size dimension removed from variant matrix</strong> — Compact variants deleted. Size is now driven by the <code>button/size</code> variable collection with 4 modes: Large (52px), Medium (36px), Small (28px), XSmall (24px). Reduces variant count from 36 → 24 while expanding size coverage. <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "36 → 24 Variants"
          }
        },
        {
          "body": "<strong><code>button/size</code> variable collection created</strong> — 5 variables (<code>height</code>, <code>font-size</code>, <code>padding-h</code>, <code>padding-v</code>, <code>icon-size</code>) bound to all containers, labels, and icon slots across all variants. Fixed height binding prevents icon slot size from affecting button height. <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Enhanced"
          }
        },
        {
          "body": "<strong>Icon slots upgraded to SLOT nodes with Boolean properties</strong> — <code>leadingIcon</code> and <code>trailingIcon</code> promoted from hidden frames to Figma SLOT nodes. Boolean component properties added for designer toggle control. <span class=\"tag-fixed\">Upgraded</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Enhanced"
          }
        }
      ]
    },
    {
      "version": "1.3.0",
      "date": "March 2026 Re-assessment",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Re-assessment · node 17104:184842",
      "rows": [
        {
          "body": "<strong>isError re-classified as C2 issue</strong> — <code>isError</code> is not a true orthogonal boolean. Only applies to <code>Outlined</code> and <code>Text Link</code>, not <code>Default</code>. Recommendation: fold into <code>Appearance</code> as <code>Outlined Error</code> / <code>Text Link Error</code>. Resolved in v2.0.0. <span class=\"tag-fixed\">Resolved in 2.0.0</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Re-opened"
          }
        },
        {
          "body": "<strong>Focus ring removed from C5 scope</strong> — Component is mobile-only. Focus rings rendered natively by iOS (UIKit/SwiftUI) and Android (Material a11y). No Figma state required. <span class=\"tag-fixed\">Clarified</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Scope Revised"
          }
        }
      ]
    },
    {
      "version": "1.2.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Changes Applied via Figma MCP · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Icon slots added: <code>leadingIcon</code> + <code>trailingIcon</code></strong> — Added to all 30 variants. Hidden by default. Upgraded to SLOT nodes with Boolean properties in v2.0.0. <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Changes Applied via Figma MCP · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Layer renamed: <code>.base/button/small</code> → <code>container</code></strong> — Resolves C1. <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "March 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 17104:184842",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 30 variants documented. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Token audit complete</strong> — 24 color + 9 layout tokens confirmed. <span class=\"tag-fixed\">Verified</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Pass"
          }
        },
        {
          "body": "<strong>Focus ring and loading state missing</strong> — Loading resolved in v3.1.0. Focus ring is N/A for mobile (rendered natively by iOS/Android). <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Pass"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered. <span class=\"tag-open tag-c7\">Still Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
