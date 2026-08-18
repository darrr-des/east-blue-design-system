import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/tab-item.js`.
const tabItemVerticalControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'selected',
        prop: 'selected',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'hasRedDot',
        prop: 'redDot',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];

const tabItemHorizontalControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'selected',
        prop: 'selected',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'hasLeadingIcon',
        prop: 'leadingIcon',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'hasCounter',
        prop: 'counter',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'hasRedDot',
        prop: 'redDot',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
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
        "cardKey": "ti-spec-vs",
        "demoKey": "vs",
        "demoControls": tabItemVerticalControls,
        "title": "Vertical · small — 360px screen",
        "node": "18482:33263",
        "description": "Icon above label. 32px icon, 16/16 label (Primary/Label/Base). Active + inactive shown side-by-side.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Vertical · small — 360px screen",
                "mono": false
              },
              {
                "key": "State",
                "value": "Active",
                "prop": "selected",
                "mono": false
              },
              {
                "key": "Red dot",
                "value": "false",
                "prop": "redDot",
                "mono": false
              }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Label',
                value: '#6780A9',
                token: 'tab/color/inactive/label',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/label' },
                  'selected:false': { value: '#6780A9', token: 'tab/color/inactive/label' },
                },
              },
              {
                key: 'Border',
                value: '#E5EBF4',
                token: 'tab/color/inactive/border',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/border' },
                  'selected:false': { value: '#E5EBF4', token: 'tab/color/inactive/border' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px below tab",
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
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebActive</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;\"><svg width=\"72\" height=\"84\" viewBox=\"0 0 72 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"36\" y=\"62\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"72\" height=\"2\" fill=\"#005CE5\"></rect></svg><svg width=\"72\" height=\"84\" viewBox=\"0 0 72 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"36\" y=\"62\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"72\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      },
      {
        "cardKey": "ti-spec-vl",
        "demoKey": "vl",
        "demoControls": tabItemVerticalControls,
        "title": "Vertical · large — 414px screen",
        "node": "18482:33277",
        "description": "Icon above label. 32px icon, 18/18 label (Primary/Label/Large). Optimized for 414px screens.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Vertical · large — 414px screen",
                "mono": false
              },
              {
                "key": "State",
                "value": "Active",
                "prop": "selected",
                "mono": false
              },
              {
                "key": "Red dot",
                "value": "false",
                "prop": "redDot",
                "mono": false
              }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Label',
                value: '#6780A9',
                token: 'tab/color/inactive/label',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/label' },
                  'selected:false': { value: '#6780A9', token: 'tab/color/inactive/label' },
                },
              },
              {
                key: 'Border',
                value: '#E5EBF4',
                token: 'tab/color/inactive/border',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/border' },
                  'selected:false': { value: '#E5EBF4', token: 'tab/color/inactive/border' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px below tab",
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
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebActive</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;\"><svg width=\"72\" height=\"84\" viewBox=\"0 0 72 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"36\" y=\"62\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"14\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"72\" height=\"2\" fill=\"#005CE5\"></rect></svg><svg width=\"72\" height=\"84\" viewBox=\"0 0 72 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"36\" y=\"62\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"14\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"72\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      },
      {
        "cardKey": "ti-spec-hs",
        "demoKey": "hs",
        "demoControls": tabItemHorizontalControls,
        "title": "Horizontal · small — label only + optional slots",
        "node": "18482:33291",
        "description": "Label-first row. Optional leading icon (24px) and trailing counter (18px pill). Red dot anchored to top-right.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Horizontal · small — label only + optional slots",
                "mono": false
              },
              {
                "key": "State",
                "value": "Active",
                "prop": "selected",
                "mono": false
              },
              {
                "key": "Leading icon",
                "value": "true",
                "prop": "leadingIcon",
                "mono": false
              },
              {
                "key": "Counter",
                "value": "true",
                "prop": "counter",
                "mono": false
              },
              {
                "key": "Red dot",
                "value": "false",
                "prop": "redDot",
                "mono": false
              }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Label',
                value: '#6780A9',
                token: 'tab/color/inactive/label',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/label' },
                  'selected:false': { value: '#6780A9', token: 'tab/color/inactive/label' },
                },
              },
              {
                key: 'Border',
                value: '#E5EBF4',
                token: 'tab/color/inactive/border',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/border' },
                  'selected:false': { value: '#E5EBF4', token: 'tab/color/inactive/border' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px below tab",
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
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebActive</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;\"><svg width=\"120\" height=\"48\" viewBox=\"0 0 120 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"48\" fill=\"#FFFFFF\"></rect><circle cx=\"22\" cy=\"24\" r=\"10\" fill=\"#B3B3B3\"></circle><text x=\"36\" y=\"29\" fill=\"#005CE5\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"74\" y=\"15\" width=\"22\" height=\"18\" rx=\"9\" fill=\"#ECF1FA\"></rect><text x=\"85\" y=\"28\" text-anchor=\"middle\" fill=\"#0F3390\" font-size=\"10\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">0</text><rect x=\"0\" y=\"46\" width=\"120\" height=\"2\" fill=\"#005CE5\"></rect></svg><svg width=\"120\" height=\"48\" viewBox=\"0 0 120 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"48\" fill=\"#FFFFFF\"></rect><circle cx=\"22\" cy=\"24\" r=\"10\" fill=\"#B3B3B3\"></circle><text x=\"36\" y=\"29\" fill=\"#6780A9\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"74\" y=\"15\" width=\"22\" height=\"18\" rx=\"9\" fill=\"#ECF1FA\"></rect><text x=\"85\" y=\"28\" text-anchor=\"middle\" fill=\"#0F3390\" font-size=\"10\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">0</text><rect x=\"0\" y=\"46\" width=\"120\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      },
      {
        "cardKey": "ti-spec-hl",
        "demoKey": "hl",
        "demoControls": tabItemHorizontalControls,
        "title": "Horizontal · large",
        "node": "18482:33309",
        "description": "Same anatomy as horizontal small but with 18/18 label and 112px cell width.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Horizontal · large",
                "mono": false
              },
              {
                "key": "State",
                "value": "Active",
                "prop": "selected",
                "mono": false
              },
              {
                "key": "Leading icon",
                "value": "true",
                "prop": "leadingIcon",
                "mono": false
              },
              {
                "key": "Counter",
                "value": "true",
                "prop": "counter",
                "mono": false
              },
              {
                "key": "Red dot",
                "value": "false",
                "prop": "redDot",
                "mono": false
              }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Label',
                value: '#6780A9',
                token: 'tab/color/inactive/label',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/label' },
                  'selected:false': { value: '#6780A9', token: 'tab/color/inactive/label' },
                },
              },
              {
                key: 'Border',
                value: '#E5EBF4',
                token: 'tab/color/inactive/border',
                variants: {
                  'selected:true':  { value: '#005CE5', token: 'tab/color/active/border' },
                  'selected:false': { value: '#E5EBF4', token: 'tab/color/inactive/border' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px below tab",
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
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebActive</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div style=\"display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;\"><svg width=\"130\" height=\"48\" viewBox=\"0 0 130 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"130\" height=\"48\" fill=\"#FFFFFF\"></rect><circle cx=\"22\" cy=\"24\" r=\"10\" fill=\"#B3B3B3\"></circle><text x=\"36\" y=\"29\" fill=\"#005CE5\" font-size=\"14\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"74\" y=\"15\" width=\"22\" height=\"18\" rx=\"9\" fill=\"#ECF1FA\"></rect><text x=\"85\" y=\"28\" text-anchor=\"middle\" fill=\"#0F3390\" font-size=\"10\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">0</text><rect x=\"0\" y=\"46\" width=\"130\" height=\"2\" fill=\"#005CE5\"></rect></svg><svg width=\"130\" height=\"48\" viewBox=\"0 0 130 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"130\" height=\"48\" fill=\"#FFFFFF\"></rect><circle cx=\"22\" cy=\"24\" r=\"10\" fill=\"#B3B3B3\"></circle><text x=\"36\" y=\"29\" fill=\"#6780A9\" font-size=\"14\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"74\" y=\"15\" width=\"22\" height=\"18\" rx=\"9\" fill=\"#ECF1FA\"></rect><text x=\"85\" y=\"28\" text-anchor=\"middle\" fill=\"#0F3390\" font-size=\"10\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">0</text><rect x=\"0\" y=\"46\" width=\"130\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Two states: active and inactive. Counter colors are currently hardcoded (flagged as C3).",
        "columns": [
          "Active",
          "Inactive"
        ],
        "rows": [
          {
            "role": "Label",
            "token": "main/tab/color/{active|inactive}/label",
            "values": [
              "#005CE5",
              "#6780A9"
            ]
          },
          {
            "role": "Bottom border",
            "token": "main/tab/color/{active|inactive}/border",
            "values": [
              "#005CE5",
              "#E5EBF4"
            ]
          },
          {
            "role": "Counter bg",
            "token": "— (hardcoded)",
            "values": [
              "#ECF1FA",
              "#ECF1FA"
            ]
          },
          {
            "role": "Counter label",
            "token": "— (hardcoded)",
            "values": [
              "#0F3390",
              "#0F3390"
            ]
          },
          {
            "role": "Red dot",
            "token": "— (raster)",
            "values": [
              "Red 6×6px indicator"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Vertical padding (top)",
            "token": "12px",
            "values": []
          },
          {
            "role": "Vertical padding (bottom)",
            "token": "16px",
            "values": []
          },
          {
            "role": "Horizontal padding (left/right)",
            "token": "12px",
            "values": []
          },
          {
            "role": "Icon size (vertical)",
            "token": "32 × 32",
            "values": []
          },
          {
            "role": "Icon size (horizontal leading)",
            "token": "24 × 24",
            "values": []
          },
          {
            "role": "Icon → label gap (vertical)",
            "token": "12px",
            "values": []
          },
          {
            "role": "Counter size",
            "token": "18px h × padding 6h / 4v",
            "values": []
          },
          {
            "role": "Counter radius",
            "token": "99999px (pill)",
            "values": []
          },
          {
            "role": "Red dot size",
            "token": "6 × 6 (top-right)",
            "values": []
          },
          {
            "role": "Bottom border",
            "token": "2px solid",
            "values": []
          },
          {
            "role": "Horizontal small width",
            "token": "105px",
            "values": []
          },
          {
            "role": "Horizontal large width",
            "token": "112px",
            "values": []
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
            "role": "Small",
            "token": "Primary/Label/Base",
            "values": [
              "Proxima Soft Bold · 16 / 16 · +0.25"
            ]
          },
          {
            "role": "Large",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold · 18 / 18 · +0.25"
            ]
          },
          {
            "role": "Counter",
            "token": "— (hardcoded)",
            "values": [
              "Proxima Soft Bold · 12 / 12 · +0.5"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tabs:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "isActive?=Yes/No",
          "swift": "selected: Bool",
          "compose": "selected: Bool"
        },
        {
          "figma": "orientation=vertical/horizontal",
          "swift": "orientation: EBTabOrientation",
          "compose": ".orientation(.vertical)"
        },
        {
          "figma": "size=small/large",
          "swift": "size: EBTabSize",
          "compose": ".size(.small)"
        },
        {
          "figma": "hasLeadingIcon + vertical always-on icon",
          "swift": "leading: Icon?",
          "compose": "leading: Image?"
        },
        {
          "figma": "hasCounter=true/false",
          "swift": "counter: Int?",
          "compose": "counter: Int?"
        },
        {
          "figma": "hasRedDot=true/false",
          "swift": "showBadge: Bool",
          "compose": "showBadge: Bool"
        },
        {
          "figma": "—",
          "swift": "label: String",
          "compose": "title: String"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tabs/EBTabItem.swift",
        "compose": "android/components/tabs/EBTabItem.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Vertical tab with icon</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Overview\"</span>, <span class=\"prp\">leading</span>: <span class=\"typ\">Image</span>(<span class=\"str\">\"overview\"</span>))\n    .<span class=\"fn\">selected</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Horizontal tab with counter</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Inbox\"</span>, <span class=\"prp\">counter</span>: <span class=\"kw\">12</span>)\n    .<span class=\"fn\">orientation</span>(.<span class=\"prp\">horizontal</span>)\n    .<span class=\"fn\">selected</span>(<span class=\"kw\">false</span>)\n\n<span class=\"cmt\">// Horizontal tab with red-dot indicator</span>\n<span class=\"typ\">EBTabItem</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Alerts\"</span>, <span class=\"prp\">showBadge</span>: <span class=\"kw\">true</span>)\n    .<span class=\"fn\">orientation</span>(.<span class=\"prp\">horizontal</span>)",
        "compose": "<span class=\"cmt\">// Vertical tab with icon</span>\n<span class=\"typ\">EBTabItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Overview\"</span>,\n    <span class=\"prp\">leading</span> = painterResource(R.drawable.overview),\n    <span class=\"prp\">selected</span> = <span class=\"kw\">true</span>\n)\n\n<span class=\"cmt\">// Horizontal tab with counter</span>\n<span class=\"typ\">EBTabItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Inbox\"</span>,\n    <span class=\"prp\">orientation</span> = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Horizontal</span>,\n    <span class=\"prp\">counter</span> = <span class=\"kw\">12</span>,\n    <span class=\"prp\">selected</span> = <span class=\"kw\">false</span>\n)\n\n<span class=\"cmt\">// Horizontal tab with red-dot indicator</span>\n<span class=\"typ\">EBTabItem</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Alerts\"</span>,\n    <span class=\"prp\">orientation</span> = <span class=\"typ\">EBTabOrientation</span>.<span class=\"prp\">Horizontal</span>,\n    <span class=\"prp\">showBadge</span> = <span class=\"kw\">true</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Selected state",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code>",
        "android": "<code>selected = true</code> in semantics"
      },
      {
        "requirement": "Counter value",
        "ios": "<code>.accessibilityValue(\"\\(count) unread\")</code>",
        "android": "<code>contentDescription</code> includes the count"
      },
      {
        "requirement": "Red dot",
        "ios": "<code>.accessibilityLabel(\"New\")</code> or append to label",
        "android": "Append to <code>contentDescription</code>"
      },
      {
        "requirement": "Tap target",
        "ios": "Icon-only cells need 44pt hit area",
        "android": "Cells meet 48dp with padding"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use vertical orientation when tabs have icons + short labels (iconic nav). Use horizontal when labels are longer or icons aren't semantically needed.",
        "dontText": "Mix orientations within the same Tabs container."
      },
      {
        "doText": "Use counter for numeric indicators (unread counts, items). Use showBadge for \"new / unseen\" indicators where the count is unimportant.",
        "dontText": "Stack counter + red-dot on the same tab — the counter already communicates \"there's something here.\""
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic: <code>container</code>, <code>icon-label</code>, <code>icon</code>, <code>label</code>, <code>counter-container</code>, <code>red-dot</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isActive?</code> Yes/No + inconsistent leading-icon slot across orientations."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Counter bg <code>#ECF1FA</code> and label <code>#0F3390</code> are hardcoded."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Custom cell on iOS, Material <code>Tab</code> content on Android."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pressed and disabled states not defined."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Placeholder circle instead of Icon slot; counter is duplicated, not a Badge instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not mapped."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "",
      "columns": [
        "isActive?",
        "orientation",
        "size",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Yes",
            "vertical",
            "small",
            "18482:33263"
          ]
        },
        {
          "cells": [
            "No",
            "vertical",
            "small",
            "18482:33270"
          ]
        },
        {
          "cells": [
            "Yes",
            "vertical",
            "large",
            "18482:33277"
          ]
        },
        {
          "cells": [
            "No",
            "vertical",
            "large",
            "18482:33284"
          ]
        },
        {
          "cells": [
            "Yes",
            "horizontal",
            "small",
            "18482:33291"
          ]
        },
        {
          "cells": [
            "No",
            "horizontal",
            "small",
            "18482:33300"
          ]
        },
        {
          "cells": [
            "Yes",
            "horizontal",
            "large",
            "18482:33309"
          ]
        },
        {
          "cells": [
            "No",
            "horizontal",
            "large",
            "18482:33318"
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
