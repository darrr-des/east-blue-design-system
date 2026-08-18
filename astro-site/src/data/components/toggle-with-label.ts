import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/toggle-with-label.js`.
const toggleWithLabelDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Placement',
        prop: 'placement',
        defaultValue: 'trailing',
        options: [
          { value: 'trailing', label: 'trailing' },
          { value: 'leading', label: 'leading' },
        ],
      },
      {
        label: 'isSelected',
        prop: 'selected',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'default' },
          { value: 'disabled', label: 'disabled' },
        ],
      },
    ],
  },
];

export const toggleWithLabel: ComponentData = {
  "meta": {
    "slug": "toggle-with-label",
    "name": "Toggle - With Label",
    "node": "26510:37680",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26510-37680",
    "description": "A toggle paired with a label and an optional subtext message, in a single row. 18 variants mirroring the Toggle atom — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> (Large / Medium / Small) × <code>isSelected</code> (true / false) — nesting the Toggle instance plus a <code>#label</code> and a composed <code>Subtext Message</code>.",
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
    "navGroup": "Toggle",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — real component, in sync with the atom",
      "text": "Promoted from a static frame to a real component that nests the Toggle atom as an instance and adds a <code>#label</code> plus a composed <code>Subtext Message</code>. Schema mirrors the atom exactly — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> × lowercase <code>isSelected</code>. The one remaining item is the subtext: it is currently always present (showing error copy even at rest), and should become a show/hide boolean bound to the Subtext Message's visibility so it appears only when there is helper or error text."
    }
  },
  "overview": {
    "inContextNote": "Labeled toggle is the primary form of Toggle shown in product. Settings rows, feature opt-ins, biometric/notification preferences — nearly all consumer-facing toggles are labeled.",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A real component now — full 18-variant property surface (<code>State</code> × <code>Size</code> × <code>isSelected</code>), with an editable <code>#label</code> and a composed Subtext Message. Drops into settings rows, form opt-ins, and list items without detaching."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own label typography and row layout, token-bound. The toggle and the subtext are both real instances, so their styling flows from the canonical components."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Schema mirrors the Toggle atom exactly and follows the Radio Button With Label pattern (real component, label + subtext). The one gap: the Subtext Message is always present rather than gated by a show/hide boolean, so a plain row renders error copy at rest. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Nests the canonical <code>Toggle</code> instance (atom changes propagate) and a <code>Subtext Message</code> instance for helper/error text. Both compose cleanly rather than being redrawn."
      }
    ],
    "behavior": [
      {
        "state": "Off / On",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=false / true",
        "notes": "Label left, nested Toggle right. The toggle reflects the row's isSelected."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Pressed feedback on the toggle; the whole row is the intended tap target on native."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Toggle and label both mute. No Pressed pairing, matching the atom."
      },
      {
        "state": "Subtext / error message",
        "ios": "yes",
        "android": "yes",
        "property": "Subtext Message instance",
        "notes": "Helper or error text below the row via a composed Subtext Message. Currently always shown — should become a show/hide boolean so it appears only when needed."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Promoted from a static frame to a real component — it now has a full property surface (<code>State</code> × <code>Size</code> × <code>isSelected</code>) and an editable <code>#label</code>, so consumers no longer detach and rebuild. (C2)"
      },
      {
        "body": "v2.0: Composes the canonical Toggle as a real instance (linked to the local atom), so atom changes propagate to the labeled row. (C4)"
      },
      {
        "body": "v2.1: Schema aligned to the Toggle atom — <code>State</code> (Default / Pressed / Disabled) with pressed folded in, and lowercase <code>isSelected=true/false</code>. 18 variants, mirroring the atom. (C2)"
      },
      {
        "body": "v2.1: Helper / error text moved to a composed <code>Subtext Message</code> instance rather than a separate <code>hasErrorText</code> variant axis — fewer variants, and the message inherits the canonical component. (C2)"
      },
      {
        "body": "v2.1: The always-present <code>Subtext Message</code> confirmed <strong>intentional</strong> — reviewed and accepted as a standing part of the labeled row, not gated behind a boolean. (C2)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structure and schema are settled. Registration is unblocked but the SwiftUI / Compose mappings are not yet wired and the native component does not exist — snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBToggleRow</code>.",
        "body": "Wire <code>State</code>, <code>Size</code>, and <code>isSelected</code> 1:1, forwarding them to the nested <code>EBToggle</code>, and expose the label + subtext as content.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Promote from frame to a real component.",
        "body": "v2.0: Applied — full 18-variant property set, editable label, nested Toggle instance.",
        "tag": "Composition"
      },
      {
        "headline": "Inherit Toggle state + size from the inner instance.",
        "body": "v2.1: Applied — <code>State</code> and <code>Size</code> mirror the atom and forward down to the nested Toggle.",
        "tag": "Property"
      },
      {
        "headline": "Add helper / error text.",
        "body": "v2.1: Applied via a composed <code>Subtext Message</code> instance rather than a variant axis (visibility gating still to add).",
        "tag": "Slot"
      }
    ],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toggle-with-label-demo-preview\"><div class=\"eb-preview eb-preview-setting-row\"><div class=\"eb-preview-setting-row__labels\"><div class=\"eb-preview-setting-row__label\"><span>Push notifications</span></div><div class=\"eb-preview-setting-row__desc\">Get alerts when money moves</div></div><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--interactive\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\" onclick=\"event.stopPropagation();_twlFlip();\" onkeydown=\"if(event.key===' '||event.key==='Enter'){event.preventDefault();_twlFlip();}\"><span class=\"eb-preview-toggle__knob\"></span></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"toggle-with-label-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Push notifications\" oninput=\"_toggleWithLabelUpdate()\" placeholder=\"Label text\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"toggle-with-label-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Get alerts when money moves\" oninput=\"_toggleWithLabelUpdate()\" placeholder=\"Optional — leave empty to hide\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select id=\"toggle-with-label-ctrl-selected\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"toggle-with-label-ctrl-state\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"disabled\">disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">placement</span><select id=\"toggle-with-label-ctrl-placement\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"trailing\" selected=\"\">trailing</option><option value=\"leading\">leading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">required</span><select id=\"toggle-with-label-ctrl-required\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">helper</span><select id=\"toggle-with-label-ctrl-helper\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"helper\">helper</option><option value=\"error\">error</option></select></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "today-—-single-frame",
        "demoKey": "today",
        "demoControls": toggleWithLabelDemoControls,
        "title": "Today — single frame",
        "node": "18482:36538",
        "description": "A 180×24 layout frame: Toggle instance on the left of its auto-layout, \"Label\" text on the right. No property set, no variants — functionally identical to placing a Toggle + Text next to each other on a canvas.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-with-label-spec-today\"><div class=\"eb-preview eb-preview-setting-row\"><div class=\"eb-preview-setting-row__labels\"><div class=\"eb-preview-setting-row__label\">Label</div></div><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\"><span class=\"eb-preview-toggle__knob\"></span></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "None",
                "value": "No property set",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Track", "value": "#005CE5", "token": "toggle/color/default/active/bg-track",
                "variants": {
                  "selected:false":                   { "value": "#C2CFE5", "token": "toggle/color/default/inactive/bg-track" },
                  "state:disabled":                   { "value": "#9BC5FD", "token": "toggle/color/disabled/active/bg-track" },
                  "selected:false|state:disabled":    { "value": "#EEF2F9", "token": "toggle/color/disabled/inactive/bg-track" }
                }
              },
              { "key": "Indicator", "value": "#FFFFFF", "token": "toggle/color/default/active/bg-indicator",
                "variants": {
                  "state:disabled":                { "value": "#F6F9FD", "token": "toggle/color/disabled/active/bg-indicator" },
                  "selected:false|state:disabled": { "value": "#F6F9FD", "token": "toggle/color/disabled/inactive/bg-indicator" }
                }
              },
              { "key": "Label", "value": "#445C85", "token": "text/color-text-weak" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "180 (fixed)",
                "mono": true
              },
              {
                "key": "Height",
                "value": "24",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "space/space-8",
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
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$enabled<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Allow notifications\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Allow notifications\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "proposed-—-trailing-placement-proposed",
        "demoKey": "trailing",
        "demoControls": toggleWithLabelDemoControls,
        "title": "Proposed — trailing placement proposed",
        "node": "",
        "description": "Default arrangement: label stack on the left, toggle on the right. Matches iOS Form and Material 3 list-item patterns.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-with-label-spec-trailing\"><div class=\"eb-preview eb-preview-setting-row\"><div class=\"eb-preview-setting-row__labels\"><div class=\"eb-preview-setting-row__label\"><span>Push notifications</span></div><div class=\"eb-preview-setting-row__desc\">Get alerts when money moves</div></div><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\"><span class=\"eb-preview-toggle__knob\"></span></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Placement",
                "value": "trailing",
                "mono": true,
                "prop": "placement"
              },
              {
                "key": "isSelected",
                "value": "true",
                "mono": true,
                "prop": "selected"
              },
              {
                "key": "State",
                "value": "default",
                "mono": true,
                "prop": "state"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label color", "value": "#0A2757", "token": "main/toggle-with-label/label" },
              { "key": "Track", "value": "#005CE5", "token": "toggle/color/default/active/bg-track",
                "variants": {
                  "selected:false":                   { "value": "#C2CFE5", "token": "toggle/color/default/inactive/bg-track" },
                  "state:disabled":                   { "value": "#9BC5FD", "token": "toggle/color/disabled/active/bg-track" },
                  "selected:false|state:disabled":    { "value": "#EEF2F9", "token": "toggle/color/disabled/inactive/bg-track" }
                }
              },
              { "key": "Indicator", "value": "#FFFFFF", "token": "toggle/color/default/active/bg-indicator",
                "variants": {
                  "state:disabled":                { "value": "#F6F9FD", "token": "toggle/color/disabled/active/bg-indicator" },
                  "selected:false|state:disabled": { "value": "#F6F9FD", "token": "toggle/color/disabled/inactive/bg-indicator" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "40",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              },
              {
                "key": "Toggle size",
                "value": "48 × 24",
                "mono": true
              },
              {
                "key": "Knob size",
                "value": "20 × 20",
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
                "value": "Body/Medium",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft",
                "mono": true
              },
              {
                "key": "Size",
                "value": "14",
                "mono": true
              },
              {
                "key": "Line-height",
                "value": "20",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggleRow</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Receive notifications\"</span><span class=\"syn-punc\">,</span>\n    isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">$enabled</span><span class=\"syn-punc\">,</span>\n    placement<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>trailing\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggleRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Receive notifications\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span><span class=\"syn-punc\">,</span>\n    placement <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTogglePlacement</span><span class=\"syn-punc\">.</span>Trailing\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "proposed-—-leading-placement-proposed",
        "demoKey": "leading",
        "demoControls": toggleWithLabelDemoControls,
        "title": "Proposed — leading placement proposed",
        "node": "",
        "description": "Inverse arrangement: toggle on the left, label stack on the right. Useful in inline form layouts where labels are right-heavy.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-with-label-spec-leading\"><div class=\"eb-preview eb-preview-setting-row eb-preview-setting-row--leading\"><div class=\"eb-preview-setting-row__labels\"><div class=\"eb-preview-setting-row__label\"><span>Remember me</span></div></div><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--off\" role=\"switch\" aria-checked=\"false\" tabindex=\"0\"><span class=\"eb-preview-toggle__knob\"></span></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Placement",
                "value": "leading",
                "mono": true,
                "prop": "placement"
              },
              {
                "key": "isSelected",
                "value": "false",
                "mono": true,
                "prop": "selected"
              },
              {
                "key": "State",
                "value": "default",
                "mono": true,
                "prop": "state"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Track", "value": "#005CE5", "token": "toggle/color/default/active/bg-track",
                "variants": {
                  "selected:false":                   { "value": "#C2CFE5", "token": "toggle/color/default/inactive/bg-track" },
                  "state:disabled":                   { "value": "#9BC5FD", "token": "toggle/color/disabled/active/bg-track" },
                  "selected:false|state:disabled":    { "value": "#EEF2F9", "token": "toggle/color/disabled/inactive/bg-track" }
                }
              },
              { "key": "Indicator", "value": "#FFFFFF", "token": "toggle/color/default/active/bg-indicator",
                "variants": {
                  "state:disabled":                { "value": "#F6F9FD", "token": "toggle/color/disabled/active/bg-indicator" },
                  "selected:false|state:disabled": { "value": "#F6F9FD", "token": "toggle/color/disabled/inactive/bg-indicator" }
                }
              },
              { "key": "Label", "value": "#445C85", "token": "text/color-text-weak" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Track size",
                "value": "40 × 24",
                "mono": true
              },
              {
                "key": "Indicator size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Gap (label ↔ toggle)",
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
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$enabled<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Active with label
      buildStatelessColorsTable({
        title: 'Active — Colors',
        description: 'Toggle in the on position with a leading label.',
        rows: [
          { role: 'Track',     token: 'toggle/color/default/active/bg-track',     value: '#005CE5' },
          { role: 'Indicator', token: 'toggle/color/default/active/bg-indicator', value: '#FFFFFF' },
          { role: 'Label',     token: 'text/color-text-weak',                     value: '#445C85' },
        ],
      }),
      // Card 2 — Inactive with label
      buildStatelessColorsTable({
        title: 'Inactive — Colors',
        description: 'Toggle in the off position with a leading label.',
        rows: [
          { role: 'Track',     token: 'toggle/color/default/inactive/bg-track',     value: '#C2CFE5' },
          { role: 'Indicator', token: 'toggle/color/default/inactive/bg-indicator', value: '#FFFFFF' },
          { role: 'Label',     token: 'text/color-text-weak',                       value: '#445C85' },
        ],
      }),
      // Card 3 — Inverse / on dark
      buildStatelessColorsTable({
        title: 'Inverse — Colors',
        description: 'Toggle with a navy label for use on dark surfaces or accent contexts.',
        rows: [
          { role: 'Label',     token: 'main/toggle-with-label/label',          value: '#0A2757' },
          { role: 'Track',     token: 'toggle/color/default/active/bg-track',  value: '#005CE5' },
          { role: 'Indicator', token: 'toggle/color/default/active/bg-indicator', value: '#FFFFFF' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>label: String</code>",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "<code>description?: String</code>",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>isSelected: true | false</code>",
          "swift": "<code>@Binding var isOn: Bool</code>",
          "compose": "<code>checked: Boolean</code>"
        },
        {
          "figma": "<code>placement: leading | trailing</code>",
          "swift": "<code>placement: EBTogglePlacement</code>",
          "compose": "<code>placement: EBTogglePlacement</code>"
        },
        {
          "figma": "<code>required: boolean</code>",
          "swift": "<code>required: Bool</code>",
          "compose": "<code>required: Boolean</code>"
        },
        {
          "figma": "<code>helper?: String</code>",
          "swift": "<code>helper: String?</code>",
          "compose": "<code>helper: String?</code>"
        },
        {
          "figma": "<code>error?: String</code>",
          "swift": "<code>error: String?</code>",
          "compose": "<code>error: String?</code>"
        },
        {
          "figma": "<code>State</code> (inherited)",
          "swift": "<code>.disabled(true)</code> / <code>.ebState(.error)</code>",
          "compose": "<code>enabled</code> / <code>error</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Label ↔ Toggle link",
        "ios": "VoiceOver announces label + state in one utterance (\"Push notifications, on\").",
        "android": "TalkBack announces label + state in one utterance. Use <code>Modifier.toggleable</code> on the row."
      },
      {
        "requirement": "Whole row tappable",
        "ios": "Row wrapped in <code>Button</code> or <code>.onTapGesture</code> that toggles.",
        "android": "Row uses <code>Modifier.toggleable</code>, merging semantics."
      },
      {
        "requirement": "Description announced",
        "ios": "Combine label + description with <code>.accessibilityElement(children: .combine)</code>.",
        "android": "Merge descendants, description as <code>stateDescription</code> or second line."
      },
      {
        "requirement": "Required marker",
        "ios": "Announce \"required\" after the label.",
        "android": "Append \"required\" to <code>contentDescription</code>."
      },
      {
        "requirement": "Error",
        "ios": "Error text linked via <code>.accessibilityHint</code>; announce on state change.",
        "android": "Error text in <code>error</code> semantics; TalkBack reads on focus."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Not a component — just a layout frame. Promote to real component."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No properties. Add <code>label</code>, <code>description</code>, <code>placement</code>, <code>required</code>, <code>helper</code>, <code>error</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Label typography and color bound via Toggle + Text styles."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Cannot map a frame. Once built, maps to <code>Toggle</code> inside <code>LabeledContent</code> on iOS, <code>Row</code> with <code>Modifier.toggleable</code> on Compose."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Need Default, Pressed (row), Disabled, Error."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until component exists."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "Today: 1 layout frame. Proposed: placement (leading/trailing) × description (yes/no) × required (yes/no) × state (5) = <strong>40 variants</strong>. May simplify by treating required and description as runtime props rather than Figma variants.",
      "columns": [
        "#",
        "Node",
        "Dimensions",
        "Contents"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18482:36538</code>",
            "180 × 24",
            "Toggle instance + \"Label\" text · auto-layout row"
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
      "header": "Initial Assessment · node 18482:36538",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Not a real component. Promote to a proper component with label, description, helper/error, required marker, and leading/trailing placement. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>Family alignment</strong> — Match Radio Button With Label's shape. Inherit Toggle's <code>isSelected</code>, <code>State</code>, <code>Size</code> from the inner Toggle instance. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until component exists. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
