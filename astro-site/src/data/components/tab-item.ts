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
    "node": "18482:33262",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-33262",
    "description": "A single tab inside the Tabs component — label, optional leading icon, and active/inactive/disabled states.",
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
    "navGroup": "Tabs",
    "verdict": {
      "kind": "fix",
      "title": "Prop and asset cleanup needed",
      "text": "Rename <code>isActive?</code> → <code>selected</code> (true/false). Unify the leading-icon slot across orientations. Replace the hardcoded counter (and its raw hex colors) with an instance of the canonical <strong>Badge</strong>. Replace the placeholder circle with a swappable Icon slot. <span class=\"tag-open tag-c2\">C2</span> <span class=\"tag-open tag-c3\">C3</span> <span class=\"tag-open tag-c6\">C6</span>"
    }
  },
  "overview": {
    "inContextNote": "Tab Items appear inside the Tabs container. See the Tabs in-context preview for the full screen layout.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ti-demo-preview\"><svg width=\"72\" height=\"84\" viewBox=\"0 0 72 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"72\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"36\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"36\" y=\"62\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"12\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"72\" height=\"2\" fill=\"#005CE5\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isActive?</span><select class=\"demo-panel-select\" id=\"ti-demo-active\" onchange=\"updateTabItemDemo()\"><option value=\"yes\" selected=\"\">Yes</option><option value=\"no\">No</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">orientation</span><select class=\"demo-panel-select\" id=\"ti-demo-orient\" onchange=\"updateTabItemDemo()\"><option value=\"vertical\" selected=\"\">vertical</option><option value=\"horizontal\">horizontal</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" id=\"ti-demo-size\" onchange=\"updateTabItemDemo()\"><option value=\"small\" selected=\"\">small</option><option value=\"large\">large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLeadingIcon</span><select class=\"demo-panel-select\" id=\"ti-demo-leadicon\" onchange=\"updateTabItemDemo()\"><option value=\"no\" selected=\"\">No</option><option value=\"yes\">Yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCounter</span><select class=\"demo-panel-select\" id=\"ti-demo-counter\" onchange=\"updateTabItemDemo()\"><option value=\"no\" selected=\"\">No</option><option value=\"yes\">Yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasRedDot</span><select class=\"demo-panel-select\" id=\"ti-demo-dot\" onchange=\"updateTabItemDemo()\"><option value=\"no\" selected=\"\">No</option><option value=\"yes\">Yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used by Tabs for all tab surfaces. Four orientation/size combinations cover 360px and 414px screens."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Carries layout, border, typography. But the counter pill uses hardcoded colors (<code>#ECF1FA</code>, <code>#0F3390</code>) instead of tokens. <span class=\"tag-open tag-c3\">C3</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Property <code>isActive?</code> has a trailing <code>?</code> and uses Yes/No. The leading-icon slot behaves differently across orientations: vertical always renders one, horizontal exposes <code>hasLeadingIcon</code> boolean. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Counter pill is drawn locally rather than instancing the canonical <strong>Badge</strong> component — changes to Badge won't propagate. Icon is a hardcoded gray circle <code>icon-placeholder</code> instead of a swappable Icon slot. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [
      {
        "state": "Active",
        "ios": "yes",
        "android": "yes",
        "property": "isActive?=Yes",
        "notes": "Blue label, blue bottom border"
      },
      {
        "state": "Inactive",
        "ios": "yes",
        "android": "yes",
        "property": "isActive?=No",
        "notes": "Gray label, light gray bottom border"
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not defined. <span class=\"tag-open tag-c5\">C5</span>"
      },
      {
        "state": "Has counter",
        "ios": "yes",
        "android": "yes",
        "property": "hasCounter=true (horizontal only)",
        "notes": "Counter pill. Should instance Badge, not duplicate colors. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "state": "Has red dot",
        "ios": "yes",
        "android": "yes",
        "property": "hasRedDot=true",
        "notes": "6px red dot in top-right corner"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Property <code>isActive?</code> has a <code>?</code> in its name.",
        "body": "And uses <code>Yes</code>/<code>No</code> values. Rename to <code>selected</code> with <code>true</code>/<code>false</code> to match Checkbox/Radio conventions.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Leading-icon slot is inconsistent across orientations.",
        "body": "Vertical always renders an icon; horizontal gates it on <code>hasLeadingIcon</code>. Unify to a single <code>leading = none | icon</code> prop that behaves identically in both orientations.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Counter pill uses hardcoded hex values.",
        "body": "<code>#ECF1FA</code> bg, <code>#0F3390</code> label — not bound to tokens, so theme changes won't propagate.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Counter is drawn locally instead of instancing Badge.",
        "body": "Breaks compositional inheritance — future Badge updates (color, sizing, overflow) won't reach Tab Item.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Icon is a hardcoded placeholder circle.",
        "body": "32px (vertical) / 24px (horizontal) gray <code>icon-placeholder</code> — should be a swappable Icon slot via instance swap.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed / disabled states documented.",
        "body": "Tap feedback and non-interactive state are critical for a tab atom — engineers are improvising them today.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until property rename, slot adoption, and state coverage land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename <code>isActive?</code> → <code>selected</code>",
        "body": "with <code>true</code>/<code>false</code> values. Matches Swift <code>Bool</code> / Kotlin <code>Boolean</code> for Code Connect.",
        "tag": "Rename"
      },
      {
        "headline": "Unify the leading-icon slot",
        "body": "— replace the always-on vertical icon and the <code>hasLeadingIcon</code> boolean with a single <code>leading=none/icon</code> slot that behaves identically across orientations.",
        "tag": "Property"
      },
      {
        "headline": "Replace the local counter pill with a Badge instance",
        "body": "Badge already ships tokenized colors and will inherit any future token changes. Same pattern used when Avatar Group was repointed to the canonical Avatar.",
        "tag": "Composition"
      },
      {
        "headline": "Replace <code>icon-placeholder</code> with a swappable Icon slot",
        "body": "(instance-swap). Lets product teams drop in any icon without editing the master.",
        "tag": "Slot"
      },
      {
        "headline": "Add <code>pressed</code> and <code>disabled</code> states",
        "body": "as explicit variants so engineers don't have to improvise tap feedback.",
        "tag": "State"
      },
      {
        "headline": "Add tokens for the counter",
        "body": "under <code>main/tab/counter/{bg,label}</code> if keeping it standalone, or adopt Badge's existing tokens.",
        "tag": "Token"
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
