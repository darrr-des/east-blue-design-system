import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 26327:10941, in its order: five
// variant axes then three booleans. Icon Slot and Icon Slot2 are SLOTs and
// get no control. 24 of the 48 variant combinations are built; the demo
// script snaps to the nearest built variant.
const tabItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'hover', label: 'Hover' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'Orientation',
        prop: 'orientation',
        defaultValue: 'vertical',
        options: [
          { value: 'vertical', label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'medium',
        options: [
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
      {
        label: 'Placement',
        prop: 'placement',
        defaultValue: 'leading',
        options: [
          { value: 'leading', label: 'Leading' },
          { value: 'trailing', label: 'Trailing' },
        ],
      },
      {
        label: 'isSelected',
        prop: 'isselected',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'hasIcon',
        prop: 'hasicon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasCounter',
        prop: 'hascounter',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasNotificationDot',
        prop: 'hasnotificationdot',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const tabItem: ComponentData = {
  "meta": {
    "slug": "tab-item",
    "name": "Tab Item",
    "node": "26327:10941",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26327-10941",
    "description": "A single tab inside Tabs — label, swappable Icon slot, optional Counter and red dot. 24 variants across <code>State</code> (Default/Hover/Disabled) × <code>Orientation</code> (Vertical/Horizontal) × <code>Size</code> (Medium/Large) × <code>Placement</code> (Leading/Trailing) × <code>isSelected</code>.",
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
    "navGroup": "Tabs",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — structurally clean",
      "text": "The rebuild resolved every structural issue: <code>isActive?</code> renamed <code>isSelected</code> with lowercase <code>true</code>/<code>false</code>, a real <code>Icon Slot</code> replaces the placeholder circle in both orientations, the counter is a <code>Counter</code> INSTANCE on tokenised <code>#EEF2F9</code>, and a <code>State</code> axis (Default / Hover / Disabled) now ships alongside <code>isSelected</code> — 24 variants. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Tab Items appear inside the Tabs container. See the Tabs in-context preview for the full screen layout.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ti-demo-preview\"><svg width=\"72\" height=\"84\" viewBox=\"0 0 72 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"36\" y=\"62\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"72\" height=\"2\" fill=\"#005CE5\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isActive?</span><select class=\"demo-panel-select\" id=\"ti-demo-active\" onchange=\"updateTabItemDemo()\"><option value=\"yes\" selected=\"\">Yes</option><option value=\"no\">No</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">orientation</span><select class=\"demo-panel-select\" id=\"ti-demo-orient\" onchange=\"updateTabItemDemo()\"><option value=\"vertical\" selected=\"\">vertical</option><option value=\"horizontal\">horizontal</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" id=\"ti-demo-size\" onchange=\"updateTabItemDemo()\"><option value=\"small\" selected=\"\">small</option><option value=\"large\">large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLeadingIcon</span><select class=\"demo-panel-select\" id=\"ti-demo-leadicon\" onchange=\"updateTabItemDemo()\"><option value=\"no\" selected=\"\">No</option><option value=\"yes\">Yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCounter</span><select class=\"demo-panel-select\" id=\"ti-demo-counter\" onchange=\"updateTabItemDemo()\"><option value=\"no\" selected=\"\">No</option><option value=\"yes\">Yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasRedDot</span><select class=\"demo-panel-select\" id=\"ti-demo-dot\" onchange=\"updateTabItemDemo()\"><option value=\"no\" selected=\"\">No</option><option value=\"yes\">Yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used by Tabs across both orientations and two sizes. The Icon Slot and Counter make one atom cover icon tabs, label-only tabs, and tabs with a count."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own layout, border, and typography. The counter is a <code>Counter</code> instance on <code>#EEF2F9</code> rather than a locally drawn pill with raw hex, so token changes propagate."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Five orthogonal props — <code>State</code> × <code>Orientation</code> × <code>Size</code> × <code>Placement</code> × <code>isSelected</code>. Booleans are lowercase <code>true</code>/<code>false</code>, matching the DS-wide standard, and <code>State</code> is kept separate from <code>isSelected</code> the way Radio Button models it. <code>Placement</code> is scoped to Horizontal by design, since Vertical stacks the icon above the label."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "A real <code>Icon Slot</code> SLOT (32px vertical / 24px horizontal) lets consumers swap in any icon, and the counter instances the canonical component so its updates propagate. Nests inside Tabs as an instance."
      }
    ],
    "behavior": [
      {
        "state": "Selected",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=true",
        "notes": "Brand <code>#005CE5</code> indicator border on the container, brand label."
      },
      {
        "state": "Unselected",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=false",
        "notes": "Muted label <code>#6780A9</code>, neutral <code>#E5EBF4</code> border."
      },
      {
        "state": "Horizontal",
        "ios": "yes",
        "android": "yes",
        "property": "Orientation=Horizontal",
        "notes": "Label beside the icon, 24px Icon Slot. <code>Placement</code> puts the icon leading or trailing."
      },
      {
        "state": "Vertical",
        "ios": "yes",
        "android": "yes",
        "property": "Orientation=Vertical",
        "notes": "Icon above the label, 32px Icon Slot. Only <code>Placement=Leading</code> ships."
      },
      {
        "state": "Counter",
        "ios": "yes",
        "android": "yes",
        "property": "Counter instance",
        "notes": "Pill on <code>#EEF2F9</code>, radius 99999. A real instance, so Counter updates propagate."
      },
      {
        "state": "Red dot",
        "ios": "yes",
        "android": "yes",
        "property": "red-dot",
        "notes": "6px <code>#D61B2C</code> notification dot. Modelled as a fixed layer by design rather than a boolean or slot."
      },
      {
        "state": "Hover (pressed)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Hover",
        "notes": "Touch-down feedback — container stroke darkens to <code>#2340A9</code>, the DS pressed navy. Named <code>Hover</code> here; maps to the platform pressed binding (<code>configuration.isPressed</code> / <code>InteractionSource</code>) since touch has no hover. Ships at <code>isSelected=true</code>."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Non-interactive tab. Ships at <code>isSelected=false</code> — the current tab is not disabled in practice."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Property <code>isActive?</code> renamed <code>isSelected</code> — the trailing <code>?</code> is gone from the generated type. Values remain capitalised and are tracked separately. (C2)"
      },
      {
        "body": "v2.0: Icon placeholder replaced with a real Figma <code>Icon Slot</code> SLOT — 32 × 32 vertical, 24 × 24 horizontal, both empty and swappable. The hardcoded grey <code>icon-placeholder</code> circle is gone. (C6)"
      },
      {
        "body": "v2.0: Counter is now a <code>Counter</code> INSTANCE rather than a locally drawn pill, so updates to the canonical component propagate to every Tab Item. (C6)"
      },
      {
        "body": "v2.0: Counter colours moved off raw hex — the instance ships on <code>#EEF2F9</code>, matching the DS counter token, replacing the hardcoded <code>#ECF1FA</code> / <code>#0F3390</code> pair. (C3)"
      },
      {
        "body": "v2.0: Leading-icon behaviour unified across orientations — both Vertical and Horizontal now carry the same <code>Icon Slot</code>, and icon position is expressed by the <code>Placement</code> property rather than a vertical-always-renders rule plus a <code>hasLeadingIcon</code> boolean. (C2)"
      },
      {
        "body": "v2.0: <code>red-dot</code> as a fixed 6px <code>#D61B2C</code> ELLIPSE confirmed <strong>intentional</strong> — kept as a layer rather than promoted to a boolean property or slot. (C6)"
      },
      {
        "body": "v2.1: <code>isSelected</code> values renamed <code>True</code>/<code>False</code> → <code>true</code>/<code>false</code> across all 12 variants — Tab Item is now on the DS-wide boolean standard alongside Radio Button, Select Item, and Select. Verified with no stray property values or conflicting variants. (C2)"
      },
      {
        "body": "v2.1: Interaction states added — a <code>State</code> axis (Default / Hover / Disabled) takes the set from 12 to 24 variants. <code>State</code> is kept orthogonal to <code>isSelected</code> rather than collapsed into it, because the two vary independently: <code>isSelected</code> is which tab is active, <code>State</code> is the transient interaction. Same model as Radio Button. (C5)"
      },
      {
        "body": "v2.1: <code>State=Hover</code> retained deliberately rather than renamed <code>Pressed</code>. The variants are painted <code>#2340A9</code> (the DS pressed navy) and behave as the touch-down state; the term is a naming convention only. Tab Item is the sole component using <code>Hover</code> — Button, Radio Button, Select Item, and Select Group all say <code>Pressed</code> — so Code Connect should bind it to the platform pressed state. (C2)"
      },
      {
        "body": "v2.1: State coverage confirmed <strong>intentional</strong> — <code>Hover</code> ships only at <code>isSelected=true</code> and <code>Disabled</code> only at <code>isSelected=false</code>, giving 24 of 36 theoretical cells. Reviewed and accepted as the useful set. (C5)"
      },
      {
        "body": "v2.1: <code>Placement</code> being meaningful only for Horizontal confirmed <strong>intentional</strong> — Vertical stacks the icon above the label, so a trailing (below-label) variant is not a layout GCash uses. (C2)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "All asset, composition, naming, and state blockers are resolved. Registration is unblocked but the SwiftUI / Compose mappings are not yet wired and the native component does not exist — snippets remain a Planned API. Note for whoever wires it: <code>State=Hover</code> maps to the pressed/<code>isPressed</code> binding on both platforms.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBTabItem</code>.",
        "body": "Wire <code>State</code>, <code>Orientation</code>, <code>Size</code>, <code>Placement</code>, and <code>isSelected</code> 1:1 to the SwiftUI / Compose API. Map <code>State=Hover</code> to the platform pressed binding (<code>configuration.isPressed</code> / <code>InteractionSource</code>), since touch has no hover.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Rename <code>isActive?</code> → <code>selected</code> with <code>true</code>/<code>false</code>.",
        "body": "v2.1: Fully applied — the property is <code>isSelected</code> (trailing <code>?</code> gone) and all 12 variants now carry lowercase <code>true</code>/<code>false</code>, matching Radio Button, Select Item, and Select. Code Connect can map straight to <code>Bool</code>.",
        "tag": "Rename"
      },
      {
        "headline": "Unify the leading-icon slot.",
        "body": "v2.0: Applied — both orientations carry the same <code>Icon Slot</code>, with icon position expressed by <code>Placement</code> instead of a vertical-only render plus a <code>hasLeadingIcon</code> boolean.",
        "tag": "Property"
      },
      {
        "headline": "Replace the local counter pill with an instance.",
        "body": "v2.0: Applied — <code>Counter</code> is a real INSTANCE, so its updates propagate to every Tab Item.",
        "tag": "Composition"
      },
      {
        "headline": "Replace <code>icon-placeholder</code> with a swappable Icon slot.",
        "body": "v2.0: Applied — a real Figma <code>Icon Slot</code> SLOT ships in both orientations.",
        "tag": "Slot"
      },
      {
        "headline": "Add tokens for the counter.",
        "body": "v2.0: Applied — the counter instance ships on <code>#EEF2F9</code>, matching the DS counter token rather than raw hex.",
        "tag": "Token"
      },
      {
        "headline": "Add <code>pressed</code> and <code>disabled</code> states.",
        "body": "v2.1: Applied — a <code>State</code> axis now ships (Default / Hover / Disabled), taking the set from 12 to 24 variants. <code>State</code> is orthogonal to <code>isSelected</code>, matching the Radio Button model rather than collapsing the two.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "ti-spec-main",
        "demoKey": "main",
        "title": "Tab Item",
        "node": "26327:10941",
        "description": "",
        "previewHtml": "<div id=\"tab-item-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": tabItemDemoControls,
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
                "key": "Orientation",
                "value": "Vertical",
                "prop": "orientation"
              },
              {
                "key": "Size",
                "value": "Medium",
                "prop": "size"
              },
              {
                "key": "Placement",
                "value": "Leading",
                "prop": "placement"
              },
              {
                "key": "isSelected",
                "value": "true",
                "prop": "isselected"
              },
              { "key": "hasIcon", "value": "True", "prop": "hasicon" },
              { "key": "hasCounter", "value": "False", "prop": "hascounter" },
              { "key": "hasNotificationDot", "value": "False", "prop": "hasnotificationdot" },
              { "key": "Icon Slot", "value": "Slot · 23 swap options — ships empty" },
              { "key": "Icon Slot2", "value": "Slot · 1 swap option" },
              {
                "key": "Resolved variant",
                "value": "26327:10942 · 65 × 92 — Hug",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "26327:10942 · 65 × 92"
                  },
                  "state:hover|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "26347:4682 · 65 × 92"
                  },
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "26327:10951 · 65 × 92"
                  },
                  "state:disabled|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "26347:4673 · 65 × 92"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "26327:10960 · 70 × 92"
                  },
                  "state:hover|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "26347:4691 · 70 × 92"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "26327:10969 · 70 × 92"
                  },
                  "state:disabled|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "26347:4700 · 70 × 92"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "26327:10978 · 97 × 48"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "26347:4741 · 97 × 48"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "26327:10986 · 97 × 48"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "26347:4709 · 97 × 48"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "26327:11034 · 97 × 48"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "26347:4749 · 97 × 48"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "26327:10994 · 97 × 48"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "26347:4717 · 97 × 48"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "26327:11002 · 102 × 50"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "26347:4757 · 102 × 50"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "26327:11018 · 102 × 50"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "26347:4773 · 102 × 50"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "26327:11010 · 102 × 50"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "26347:4765 · 102 × 50"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "26327:11026 · 102 × 50"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "26347:4781 · 102 × 50"
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
                "key": "Surface",
                "value": "None — the frame fill is hidden"
              },
              {
                "key": "Label",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "#6780A9"
                  },
                  "state:disabled|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "#C2CFE5"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "#6780A9"
                  },
                  "state:disabled|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "#C2CFE5"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "#6780A9"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "#C2CFE5"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "#6780A9"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "#C2CFE5"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "#6780A9"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "#C2CFE5"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "#6780A9"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Underline",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:disabled|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:disabled|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "#005CE5"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "#2340A9"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "#E5EBF4"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "#E5EBF4"
                  }
                }
              },
              {
                "key": "Counter surface",
                "value": "#EEF2F9",
                "token": "—",
                  "variants": { "hascounter:false": { "hide": true } }
              },
              {
                "key": "Counter value",
                "value": "#072592",
                "token": "—",
                  "variants": { "hascounter:false": { "hide": true } }
              },
              {
                "key": "red-dot",
                "value": "#D61B2C",
                "token": "—",
                  "variants": { "hasnotificationdot:false": { "hide": true } }
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
                "mono": true,
                "variants": {
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "Primary/Label/Base"
                  },
                  "state:hover|orientation:vertical|size:medium|placement:leading|isselected:true": {
                    "value": "Primary/Label/Base"
                  },
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "Primary/Label/Base"
                  },
                  "state:disabled|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "Primary/Label/Base"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "Primary/Label/Large"
                  },
                  "state:hover|orientation:vertical|size:large|placement:leading|isselected:true": {
                    "value": "Primary/Label/Large"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "Primary/Label/Large"
                  },
                  "state:disabled|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "Primary/Label/Large"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "Primary/Label/Base"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:leading|isselected:true": {
                    "value": "Primary/Label/Base"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "Primary/Label/Base"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "Primary/Label/Base"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "Primary/Label/Base"
                  },
                  "state:hover|orientation:horizontal|size:medium|placement:trailing|isselected:true": {
                    "value": "Primary/Label/Base"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "Primary/Label/Base"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "Primary/Label/Base"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "Primary/Label/Large"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:leading|isselected:true": {
                    "value": "Primary/Label/Large"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "Primary/Label/Large"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "Primary/Label/Large"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "Primary/Label/Large"
                  },
                  "state:hover|orientation:horizontal|size:large|placement:trailing|isselected:true": {
                    "value": "Primary/Label/Large"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "Primary/Label/Large"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "Primary/Label/Large"
                  }
                }
              },
              {
                "key": "Counter value",
                "value": "Primary/Label/Small",
                "mono": true,
                  "variants": { "hascounter:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "65 × 92 — Hug",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Underline",
                "value": "2px, full width, bottom edge",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12px all sides · 8px between parts",
                "mono": true
              },
              {
                "key": "Stroke owner",
                "value": "Component node",
                "mono": true,
                "variants": {
                  "state:default|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:disabled|orientation:vertical|size:medium|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:default|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:disabled|orientation:vertical|size:large|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:default|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "container frame"
                  },
                  "state:disabled|orientation:horizontal|size:medium|placement:trailing|isselected:false": {
                    "value": "container frame"
                  },
                  "state:default|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:leading|isselected:false": {
                    "value": "container frame"
                  },
                  "state:default|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "container frame"
                  },
                  "state:disabled|orientation:horizontal|size:large|placement:trailing|isselected:false": {
                    "value": "container frame"
                  }
                }
              },
              {
                "key": "Label box",
                "value": "41 wide at Medium · 46 at Large",
                "mono": true
              },
              {
                "key": "Icon Slot",
                "value": "32 × 32 — above the label",
                "mono": true,
                "variants": {
                  "orientation:horizontal": { "value": "24 × 24 — beside the label" },
                  "hasicon:false": { "hide": true },
                  "orientation:vertical|hasicon:false": { "hide": true },
                  "orientation:horizontal|hasicon:false": { "hide": true }
                }
              },
              {
                "key": "Counter",
                "value": "24 × 24 · 8px after the label",
                "mono": true,
                  "variants": { "hascounter:false": { "hide": true } }
              },
              {
                "key": "red-dot",
                "value": "6 × 6 — absolute, top right",
                "mono": true,
                "variants": { "hasnotificationdot:false": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "EBTabItem(\"Label\", isSelected: true)\n    .ebOrientation(.vertical)\n    .ebControlSize(.medium)",
        "compose": "EBTabItem(\n    label = \"Label\",\n    isSelected = true,\n    orientation = EBTabOrientation.Vertical,\n    size = EBTabSize.Medium,\n    onClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on set <code>26327:10941</code>. At the panel defaults only the label and the 2px underline render: <code>hasCounter</code> and <code>hasNotificationDot</code> are <code>False</code>, and <code>hasIcon</code> is <code>True</code> over an <code>Icon Slot</code> that ships empty. Token paths could not be read.",
        "columns": [
          "Label",
          "Underline"
        ],
        "rows": [
          {
            "role": "Selected · Default",
            "token": "—",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Selected · Hover",
            "token": "—",
            "values": [
              "#2340A9",
              "#2340A9"
            ]
          },
          {
            "role": "Unselected · Default",
            "token": "—",
            "values": [
              "#6780A9",
              "#E5EBF4"
            ]
          },
          {
            "role": "Unselected · Disabled",
            "token": "—",
            "values": [
              "#C2CFE5",
              "#E5EBF4"
            ]
          },
          {
            "role": "Counter (hasCounter=True)",
            "token": "—",
            "values": [
              "#072592 on #EEF2F9",
              "–"
            ]
          },
          {
            "role": "red-dot (hasNotificationDot=True)",
            "token": "—",
            "values": [
              "#D61B2C",
              "–"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tabs:2.1.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.tabs.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per variant axis of set <code>26327:10941</code>, in variant-name order, then the three content layers. No property-panel screenshot was supplied, so a boolean or text property would be missing here. <code>State=Hover</code> binds to the platform pressed state — touch has no hover (Overview, v2.1).",
      "rows": [
        {
          "figma": "State — Default, Hover, Disabled",
          "swift": "<code>Hover</code> → <code>configuration.isPressed</code>; <code>Disabled</code> → <code>.disabled(true)</code>",
          "compose": "<code>Hover</code> → <code>InteractionSource</code> pressed; <code>Disabled</code> → <code>enabled = false</code>"
        },
        {
          "figma": "Orientation — Vertical, Horizontal",
          "swift": "<code>.ebOrientation(.vertical / .horizontal)</code>",
          "compose": "<code>orientation = EBTabOrientation.Vertical / Horizontal</code>"
        },
        {
          "figma": "Size — Medium, Large",
          "swift": "<code>.ebControlSize(.medium / .large)</code>",
          "compose": "<code>size = EBTabSize.Medium / Large</code>"
        },
        {
          "figma": "Placement — Leading, Trailing",
          "swift": "<code>.ebIconPlacement(.leading / .trailing)</code> — Horizontal only",
          "compose": "<code>placement = EBTabPlacement.Leading / Trailing</code>"
        },
        {
          "figma": "isSelected — true, false",
          "swift": "<code>isSelected: Bool</code>",
          "compose": "<code>isSelected: Boolean</code>"
        },
        {
          "figma": "— <code>#label</code> text layer",
          "swift": "<code>EBTabItem(_ label: String)</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "— <code>Icon Slot</code> (SLOT, not rendered)",
          "swift": "<code>.ebIcon { }</code>",
          "compose": "<code>icon: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Counter</code> instance and <code>red-dot</code> (not rendered)",
          "swift": "<code>.ebCounter(Int)</code>, <code>.ebBadge(true)</code>",
          "compose": "<code>counter: Int? = null</code>, <code>showsBadge: Boolean = false</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tabs/EBTabItem.swift",
        "compose": "android/components/tabs/EBTabItem.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Vertical · Medium · selected",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Size=Medium, Placement=Leading, isSelected=true — 26327:10942, 65 × 92.</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>, isSelected: <span class=\"prp\">true</span>)\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">vertical</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">medium</span>)",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Size=Medium, Placement=Leading, isSelected=true — 26327:10942, 65 × 92.</span>\n<span class=\"typ\">EBTabItem</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    isSelected = <span class=\"prp\">true</span>,\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Vertical</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Medium</span>,\n    onClick = { select() }\n)"
      },
      {
        "subheading": "Vertical · Large · unselected",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Size=Large, Placement=Leading, isSelected=false — 26327:10969, 70 × 92.</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>, isSelected: <span class=\"prp\">false</span>)\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">vertical</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Size=Large, Placement=Leading, isSelected=false — 26327:10969, 70 × 92.</span>\n<span class=\"typ\">EBTabItem</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    isSelected = <span class=\"prp\">false</span>,\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Vertical</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Large</span>,\n    onClick = { select() }\n)"
      },
      {
        "subheading": "Horizontal · Medium · Trailing · selected",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Horizontal, Size=Medium, Placement=Trailing, isSelected=true — 26327:11034, 97 × 48.</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>, isSelected: <span class=\"prp\">true</span>)\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">horizontal</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">medium</span>)\n    .<span class=\"fn\">ebIconPlacement</span>(.<span class=\"prp\">trailing</span>)",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Horizontal, Size=Medium, Placement=Trailing, isSelected=true — 26327:11034, 97 × 48.</span>\n<span class=\"typ\">EBTabItem</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    isSelected = <span class=\"prp\">true</span>,\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Horizontal</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Medium</span>,\n    placement = <span class=\"typ\">EBTabPlacement</span>.<span class=\"prp\">Trailing</span>,\n    onClick = { select() }\n)"
      },
      {
        "subheading": "Horizontal · Large · Leading · disabled",
        "swift": "<span class=\"cmt\">// State=Disabled, Orientation=Horizontal, Size=Large, Placement=Leading, isSelected=false — 26347:4773, 102 × 50.</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"str\">\"Label\"</span>, isSelected: <span class=\"prp\">false</span>)\n    .<span class=\"fn\">ebOrientation</span>(.<span class=\"prp\">horizontal</span>)\n    .<span class=\"fn\">ebControlSize</span>(.<span class=\"prp\">large</span>)\n    .<span class=\"fn\">ebIconPlacement</span>(.<span class=\"prp\">leading</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"prp\">true</span>)",
        "compose": "<span class=\"cmt\">// State=Disabled, Orientation=Horizontal, Size=Large, Placement=Leading, isSelected=false — 26347:4773, 102 × 50.</span>\n<span class=\"typ\">EBTabItem</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    isSelected = <span class=\"prp\">false</span>,\n    orientation = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Horizontal</span>,\n    size = <span class=\"typ\">EBTabSize</span>.<span class=\"prp\">Large</span>,\n    placement = <span class=\"typ\">EBTabPlacement</span>.<span class=\"prp\">Leading</span>,\n    enabled = <span class=\"prp\">false</span>,\n    onClick = { select() }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tab semantics",
        "ios": "Each item is a tab in a tab bar: give it the button trait plus <code>.accessibilityAddTraits(.isSelected)</code> when selected, and expose the set as one group.",
        "android": "Use <code>Modifier.semantics { role = Role.Tab; selected = isSelected }</code> inside a <code>TabRow</code>."
      },
      {
        "requirement": "Touch target",
        "ios": "Vertical items are 65–70 × 92 and horizontal 97–102 × 48–50 — the horizontal ones are above 44pt only because of their width; keep the full cell tappable.",
        "android": "Keep the whole cell clickable; both orientations clear 48dp in height except by 0 on Medium (48)."
      },
      {
        "requirement": "Selection colour",
        "ios": "Selected and unselected differ by colour and a 2px underline only. Do not rely on colour alone — the selected trait carries the meaning for VoiceOver.",
        "android": "Same — <code>selected = true</code> carries it for TalkBack."
      },
      {
        "requirement": "Disabled",
        "ios": "Disabled labels are #C2CFE5 on white (1.57:1). Mark them <code>.disabled(true)</code> so they are announced as unavailable rather than read as ordinary text.",
        "android": "<code>enabled = false</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Selected #005CE5 is 5.73:1 and Hover #2340A9 8.83:1. Unselected #6780A9 is 4.01:1 at 16–18pt bold — below the 4.5:1 AA minimum.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Tab Item only inside Tabs — it is the atom that Tabs lays out.",
        "dontText": "Don’t use it as a standalone button or segmented control."
      },
      {
        "doText": "Keep one item selected per Tabs group, and pair Vertical with the icon-above layout.",
        "dontText": "Don’t ask for Vertical + Trailing — Figma builds no such variant (confirmed intentional, v2.1)."
      },
      {
        "doText": "Treat <code>State=Hover</code> as the pressed state on both platforms.",
        "dontText": "Don’t implement it as a pointer hover; touch has none."
      },
      {
        "doText": "Ship the label only, matching what Figma renders today.",
        "dontText": "Don’t build the counter, icon or red dot from this component until they render in Figma — the layers are present but invisible."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Inner layers are lowercase or hash-prefixed — two nested <code>container</code> frames, <code>icon-label</code>, <code>offset</code>, <code>label</code>, <code>counter-container</code>, <code>red-dot</code>, <code>#label</code>. <code>Icon Slot</code> and <code>Counter</code> are the only semantic names."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Five PascalCase variant axes plus three <code>has*</code> booleans on <code>True</code>/<code>False</code>. <code>isSelected</code> carries lowercase <code>true</code>/<code>false</code> (v2.1), so the set mixes both casings — lowercase on the variant axis, Title Case on the booleans. <code>Hover</code> instead of <code>Pressed</code> and the 24-of-48 coverage are both owner decisions (v2.1)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three text layers resolve <code>matched</code> — <code>Primary/Label/Base</code>, <code>Primary/Label/Large</code>, <code>Primary/Label/Small</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The rendered component is a label plus a 2px underline — one composable with an enum each for orientation, size and placement. But the selected variants carry the stroke on the component node while the unselected and disabled ones carry it on the inner <code>container</code>, and the frame hugs its visible children — label only is 65 × 48, and the same tab with the counter on is 97 × 48 — so a native implementation sizes from content rather than from the variant dimensions."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Hover and Disabled ship alongside <code>isSelected</code> (v2.1); Hover only when selected and Disabled only when unselected is the accepted set."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Icon Slot</code> is a real SLOT with 23 swap options (plus <code>Icon Slot2</code>), <code>Counter</code> a real instance and <code>red-dot</code> an ellipse, each gated by a boolean. They are invisible at the panel defaults — <code>hasCounter</code> and <code>hasNotificationDot</code> are <code>False</code> — and the slot ships empty, so a consumer sees a label-only tab until content is swapped in."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Unblocked but not registered; the native component does not exist. <code>State=Hover</code> should bind to the platform pressed state."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 24,
      "description": "<code>State</code> (3) × <code>Orientation</code> (2) × <code>Size</code> (2) × <code>Placement</code> (2) × <code>isSelected</code> (2) = 48 combinations; <strong>24 built</strong>. Hover ships only with <code>isSelected=true</code> and Disabled only with <code>isSelected=false</code>, and Vertical is Leading-only — both accepted as intentional in v2.1.",
      "columns": [
        "State",
        "Orientation",
        "Size",
        "Placement",
        "isSelected",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Vertical",
            "Medium",
            "Leading",
            "<code>true</code>",
            "<code>26327:10942</code>",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Hover",
            "Vertical",
            "Medium",
            "Leading",
            "<code>true</code>",
            "<code>26347:4682</code>",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Default",
            "Vertical",
            "Medium",
            "Leading",
            "<code>false</code>",
            "<code>26327:10951</code>",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Vertical",
            "Medium",
            "Leading",
            "<code>false</code>",
            "<code>26347:4673</code>",
            "65 × 92"
          ]
        },
        {
          "cells": [
            "Default",
            "Vertical",
            "Large",
            "Leading",
            "<code>true</code>",
            "<code>26327:10960</code>",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Hover",
            "Vertical",
            "Large",
            "Leading",
            "<code>true</code>",
            "<code>26347:4691</code>",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Default",
            "Vertical",
            "Large",
            "Leading",
            "<code>false</code>",
            "<code>26327:10969</code>",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Vertical",
            "Large",
            "Leading",
            "<code>false</code>",
            "<code>26347:4700</code>",
            "70 × 92"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Medium",
            "Leading",
            "<code>true</code>",
            "<code>26327:10978</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Hover",
            "Horizontal",
            "Medium",
            "Leading",
            "<code>true</code>",
            "<code>26347:4741</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Medium",
            "Leading",
            "<code>false</code>",
            "<code>26327:10986</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Horizontal",
            "Medium",
            "Leading",
            "<code>false</code>",
            "<code>26347:4709</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Medium",
            "Trailing",
            "<code>true</code>",
            "<code>26327:11034</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Hover",
            "Horizontal",
            "Medium",
            "Trailing",
            "<code>true</code>",
            "<code>26347:4749</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Medium",
            "Trailing",
            "<code>false</code>",
            "<code>26327:10994</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Horizontal",
            "Medium",
            "Trailing",
            "<code>false</code>",
            "<code>26347:4717</code>",
            "97 × 48"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Large",
            "Leading",
            "<code>true</code>",
            "<code>26327:11002</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Hover",
            "Horizontal",
            "Large",
            "Leading",
            "<code>true</code>",
            "<code>26347:4757</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Large",
            "Leading",
            "<code>false</code>",
            "<code>26327:11018</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Horizontal",
            "Large",
            "Leading",
            "<code>false</code>",
            "<code>26347:4773</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Large",
            "Trailing",
            "<code>true</code>",
            "<code>26327:11010</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Hover",
            "Horizontal",
            "Large",
            "Trailing",
            "<code>true</code>",
            "<code>26347:4765</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Default",
            "Horizontal",
            "Large",
            "Trailing",
            "<code>false</code>",
            "<code>26327:11026</code>",
            "102 × 50"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Horizontal",
            "Large",
            "Trailing",
            "<code>false</code>",
            "<code>26347:4781</code>",
            "102 × 50"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 26327:10941",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the variant axes.</strong> Four cards on retired <code>18482:*</code> nodes carried invented panels — <code>hasRedDot</code>, <code>hasLeadingIcon</code>, <code>hasCounter</code> — that the set has never had. Now one card with <code>State</code>, <code>Orientation</code>, <code>Size</code>, <code>Placement</code> and <code>isSelected</code>, snapping to the 24 built variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from what Figma renders.</strong> At the panel defaults <code>get_svg</code> and <code>export_node_as_image</code> show a label and a 2px underline. The earlier preview drew a filled icon circle and a counter pill regardless; the icon, counter and dot now follow <code>hasIcon</code>, <code>hasCounter</code> and <code>hasNotificationDot</code>, and the empty Icon Slot draws as a slot outline.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> Label resolves <code>Primary/Label/Base</code> at Medium and <code>Primary/Label/Large</code> at Large, the counter value <code>Primary/Label/Small</code> — all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab still described the 1.0.0 component.</strong> Rebuilt on the five live axes with <code>com.eastblue.ds:tabs:2.1.1</code>, four snippets and a 24-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored against v2.0–v2.1.</strong> C2, C3, C5 Ready; C1, C4, C6 Needs Refinement on new findings; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The panel adds three booleans the variant names do not show</strong> — <code>hasIcon</code> (True), <code>hasCounter</code> (False), <code>hasNotificationDot</code> (False) — plus <code>Icon Slot</code> (23 swap options) and <code>Icon Slot2</code> (1). They explain why only the label and underline render at the defaults.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The frame hugs its content.</strong> Confirmed in Figma: label only is <code>65 Hug × 48 Hug</code> and the same tab with the counter on is <code>97 Hug × 48</code> — 12px padding, an 8px gap between parts, a 24px icon slot and a 24px counter; the red dot is absolute and changes nothing. The Style tab now sizes the preview and the Size row from the booleans. This also explains the earlier reading that the counter sat past the right edge — a hidden child keeps its last coordinates.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The underline is on the component node when selected and on the inner <code>container</code> when not.</strong> <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Inner layers keep lowercase and hash-prefixed names</strong> — two nested <code>container</code> frames, <code>icon-label</code>, <code>offset</code>, <code>counter-container</code>, <code>#label</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Unselected label fails AA</strong> — #6780A9 on white is 4.01:1 at 16–18pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Boolean casing is mixed</strong> — <code>isSelected</code> takes lowercase <code>true</code>/<code>false</code> while <code>hasIcon</code>, <code>hasCounter</code> and <code>hasNotificationDot</code> take <code>True</code>/<code>False</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:33262",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants across isActive × orientation × size. Horizontal variants expose optional leading icon, counter, and red-dot slots.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Property naming issues</strong> — <code>isActive?</code> has a <code>?</code> and uses Yes/No. Leading-icon slot behaves differently across orientations.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Counter colors hardcoded</strong> — <code>#ECF1FA</code> bg and <code>#0F3390</code> label are raw hex. Should use tokens or instance the Badge component.\n          <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>No pressed/disabled states</strong> — State coverage limited to active/inactive.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Icon placeholder + duplicated counter</strong> — Icon should be a swappable slot; counter should instance the canonical Badge.\n          <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
