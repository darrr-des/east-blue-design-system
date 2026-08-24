import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

const toggleDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'isActive',
        prop: 'isActive',
        defaultValue: 'No',
        options: [
          { value: 'No', label: 'No' },
          { value: 'Yes', label: 'Yes' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Default',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Disabled', label: 'Disabled' },
        ],
      },
    ],
  },
];

export const toggle: ComponentData = {
  "meta": {
    "slug": "toggle",
    "name": "Toggle",
    "node": "26510:37625",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26510-37625",
    "description": "A binary switch. 18 variants across <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> (Large / Medium / Small) × <code>isSelected</code> (true / false). Vector track + thumb, all colors token-bound.",
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
      "title": "Rebuilt — normalized to the Selection Control schema",
      "text": "The rebuild added the Size axis (Large / Medium / Small), added interaction states, folded pressed into <code>State</code> (Default / Pressed / Disabled), and moved the booleans to lowercase <code>true</code>/<code>false</code>. Toggle now shares the same schema as Radio Button — <code>State</code> × <code>Size</code> × a selection boolean — and maps cleanly to native <code>Toggle</code> / <code>Switch</code>. Only Code Connect and the ARIA-role docs remain."
    }
  },
  "overview": {
    "inContextNote": "Toggle appears in settings rows, form opt-ins, and any control that flips a single boolean. Usually paired with a label (see Toggle - With Label).",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toggle-demo-preview\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--interactive\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\" onclick=\"_toggleFlip()\" onkeydown=\"if(event.key===' '||event.key==='Enter'){event.preventDefault();_toggleFlip();}\"><span class=\"eb-preview-toggle__knob\"></span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (today)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isActive</span><select id=\"toggle-ctrl-selected\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"true\" selected=\"\">Yes</option><option value=\"false\">No</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"toggle-ctrl-state\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Proposed (post-normalization)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select id=\"toggle-ctrl-size\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"small\">small</option><option value=\"medium\" selected=\"\">medium</option><option value=\"large\">large</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic on/off switch usable anywhere a boolean needs a visual control."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its track, knob, colors, and shadow tokens."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Normalized to the shared Selection Control schema — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> × <code>isSelected</code> (<code>true</code>/<code>false</code>), matching Radio Button. Pressed is folded into <code>State</code> rather than a stray boolean, and Disabled correctly omits Pressed. It now shares the full schema with Checkbox and Radio Button, including the <code>isSelected</code> boolean name."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into rows and forms, and Toggle - With Label now nests it as a real instance — so atom changes propagate to the labeled variant."
      }
    ],
    "behavior": [
      {
        "state": "Off / On",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=false / true",
        "notes": "Grey track + knob-left when off; brand <code>#005CE5</code> track + knob-right when on."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Darker track for tap feedback. Composes with either isSelected. Derived at runtime on native, not a passed parameter."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted track/knob, tap blocked. Ships at both isSelected values; correctly has no Pressed pairing."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "N/A on mobile — touch has no focus ring."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Size axis added — <code>Large</code> / <code>Medium</code> / <code>Small</code> (48 / 40 / 32 wide), previously absent. (C2)"
      },
      {
        "body": "v2.0: Interaction states added — a <code>State</code> axis now covers Default / Pressed / Disabled where the old component had only on/off/disabled. (C5)"
      },
      {
        "body": "v2.1: Schema normalized to the Selection Control pattern — <code>isPressed</code> folded into <code>State</code> (Default / Pressed / Disabled, matching Radio Button), and the selection boolean moved from <code>isActive=Yes/No</code> to lowercase <code>isActive=true/false</code>. Disabled correctly omits Pressed. Same 18 variants, no illegal-combination gap. (C2)"
      },
      {
        "body": "v2.1: Divergence from the Checkbox / Radio Button schema closed on the structural axes — Toggle now shares <code>State</code> × <code>Size</code> × selection-boolean, so it maps to native <code>Toggle</code> / <code>Switch</code> the same way. (C2)"
      },
      {
        "body": "v2.2: Selection boolean renamed <code>isActive</code> → <code>isSelected</code> across all 18 variants — Toggle now uses the exact same name as Checkbox and Radio Button, so the three selection controls are fully interchangeable. (C2)"
      }
    ],
    "open": [
      {
        "headline": "ARIA role not documented.",
        "body": "The native switch role and the required-toggle error announcement are not annotated on the component, so engineers have no spec for the a11y wiring.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Schema is normalized and stable, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document the ARIA / switch role.",
        "body": "Spell out the native switch role and the required-toggle error announcement in the handoff spec.",
        "tag": "A11y"
      },
      {
        "headline": "Register Code Connect mapping to <code>EBToggle</code>.",
        "body": "Wire <code>State</code>, <code>Size</code>, and <code>isSelected</code> 1:1 to the SwiftUI <code>Toggle</code> / Compose <code>Switch</code> API.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Normalize to the Selection Control schema.",
        "body": "v2.1: Applied — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> × lowercase <code>isSelected</code>, matching Radio Button. Pressed folded into <code>State</code>; booleans lowercase.",
        "tag": "Property"
      },
      {
        "headline": "Add the Size axis.",
        "body": "v2.0: Applied — Large / Medium / Small.",
        "tag": "Property"
      },
      {
        "headline": "Add interaction states.",
        "body": "v2.0: Applied — Pressed and Disabled now ship as <code>State</code> values.",
        "tag": "State"
      },
      {
        "headline": "Promote Toggle - With Label to a real component.",
        "body": "v2.0: Applied — the labeled variant is now its own component that nests this Toggle as an instance (see the Toggle with Label assessment).",
        "tag": "Composition"
      },
      {
        "headline": "Rename <code>isActive</code> → <code>isSelected</code>.",
        "body": "v2.2: Applied — aligns the selection boolean with Checkbox and Radio Button across all 18 variants.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "States",
    "specCards": [
      {
        "cardKey": "default-·-off",
        "demoKey": "default-off",
        "demoControls": toggleDemoControls,
        "title": "Default · Off",
        "node": "18482:36509",
        "description": "The \"off\" resting state. Gray track, white knob pinned left.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-default-off\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--off\" role=\"switch\" aria-checked=\"false\" tabindex=\"0\"><span class=\"eb-preview-toggle__knob\"></span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State",    "value": "Default", "prop": "state" },
              { "key": "isActive", "value": "No",      "prop": "isActive" }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Track',
                value: '#C2CFE5',
                token: 'toggle/color/default/inactive/bg-track',
                variants: {
                  'state:Default|isActive:No':   { value: '#C2CFE5', token: 'toggle/color/default/inactive/bg-track' },
                  'state:Default|isActive:Yes':  { value: '#005CE5', token: 'toggle/color/default/active/bg-track' },
                  'state:Disabled|isActive:No':  { value: '#EEF2F9', token: 'toggle/color/disabled/inactive/bg-track' },
                  'state:Disabled|isActive:Yes': { value: '#9BC5FD', token: 'toggle/color/disabled/active/bg-track' },
                },
              },
              {
                key: 'Indicator',
                value: '#FFFFFF',
                token: 'toggle/color/default/inactive/bg-indicator',
                variants: {
                  'state:Default|isActive:No':   { value: '#FFFFFF', token: 'toggle/color/default/inactive/bg-indicator' },
                  'state:Default|isActive:Yes':  { value: '#FFFFFF', token: 'toggle/color/default/active/bg-indicator' },
                  'state:Disabled|isActive:No':  { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                  'state:Disabled|isActive:Yes': { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Track size",    "value": "48 × 24", "mono": true },
              { "key": "Knob size",     "value": "20 × 20", "mono": true },
              { "key": "Knob inset",    "value": "2px",     "mono": true },
              { "key": "Corner radius", "value": "12px (pill)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "N/A", "value": "No text" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$enabled<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "default-·-on",
        "demoKey": "default-on",
        "demoControls": toggleDemoControls,
        "title": "Default · On",
        "node": "18482:36512",
        "description": "The \"on\" resting state. Brand-blue track, knob pinned right.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-default-on\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\"><span class=\"eb-preview-toggle__knob\"></span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State",    "value": "Default", "prop": "state" },
              { "key": "isActive", "value": "Yes",     "prop": "isActive" }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Track',
                value: '#005CE5',
                token: 'toggle/color/default/active/bg-track',
                variants: {
                  'state:Default|isActive:No':   { value: '#C2CFE5', token: 'toggle/color/default/inactive/bg-track' },
                  'state:Default|isActive:Yes':  { value: '#005CE5', token: 'toggle/color/default/active/bg-track' },
                  'state:Disabled|isActive:No':  { value: '#EEF2F9', token: 'toggle/color/disabled/inactive/bg-track' },
                  'state:Disabled|isActive:Yes': { value: '#9BC5FD', token: 'toggle/color/disabled/active/bg-track' },
                },
              },
              {
                key: 'Indicator',
                value: '#FFFFFF',
                token: 'toggle/color/default/active/bg-indicator',
                variants: {
                  'state:Default|isActive:No':   { value: '#FFFFFF', token: 'toggle/color/default/inactive/bg-indicator' },
                  'state:Default|isActive:Yes':  { value: '#FFFFFF', token: 'toggle/color/default/active/bg-indicator' },
                  'state:Disabled|isActive:No':  { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                  'state:Disabled|isActive:Yes': { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Track size",    "value": "48 × 24", "mono": true },
              { "key": "Knob size",     "value": "20 × 20", "mono": true },
              { "key": "Knob inset",    "value": "2px",     "mono": true },
              { "key": "Corner radius", "value": "12px (pill)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "N/A", "value": "No text" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>constant<span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "disabled-·-off",
        "demoKey": "disabled-off",
        "demoControls": toggleDemoControls,
        "title": "Disabled · Off",
        "node": "18482:36515",
        "description": "Disabled off state. Muted gray track; interaction blocked.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-disabled-off\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--off eb-preview-toggle--disabled\" role=\"switch\" aria-checked=\"false\" tabindex=\"-1\" aria-disabled=\"true\"><span class=\"eb-preview-toggle__knob\"></span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State",    "value": "Disabled", "prop": "state" },
              { "key": "isActive", "value": "No",       "prop": "isActive" }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Track',
                value: '#EEF2F9',
                token: 'toggle/color/disabled/inactive/bg-track',
                variants: {
                  'state:Default|isActive:No':   { value: '#C2CFE5', token: 'toggle/color/default/inactive/bg-track' },
                  'state:Default|isActive:Yes':  { value: '#005CE5', token: 'toggle/color/default/active/bg-track' },
                  'state:Disabled|isActive:No':  { value: '#EEF2F9', token: 'toggle/color/disabled/inactive/bg-track' },
                  'state:Disabled|isActive:Yes': { value: '#9BC5FD', token: 'toggle/color/disabled/active/bg-track' },
                },
              },
              {
                key: 'Indicator',
                value: '#F6F9FD',
                token: 'toggle/color/disabled/inactive/bg-indicator',
                variants: {
                  'state:Default|isActive:No':   { value: '#FFFFFF', token: 'toggle/color/default/inactive/bg-indicator' },
                  'state:Default|isActive:Yes':  { value: '#FFFFFF', token: 'toggle/color/default/active/bg-indicator' },
                  'state:Disabled|isActive:No':  { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                  'state:Disabled|isActive:Yes': { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Track size",    "value": "48 × 24", "mono": true },
              { "key": "Knob size",     "value": "20 × 20", "mono": true },
              { "key": "Knob inset",    "value": "2px",     "mono": true },
              { "key": "Corner radius", "value": "12px (pill)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "N/A", "value": "No text" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>constant<span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">))</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span><span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "disabled-·-on",
        "demoKey": "disabled-on",
        "demoControls": toggleDemoControls,
        "title": "Disabled · On",
        "node": "18482:36518",
        "description": "Disabled on state. Muted brand-blue track; interaction blocked.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-disabled-on\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--disabled\" role=\"switch\" aria-checked=\"true\" tabindex=\"-1\" aria-disabled=\"true\"><span class=\"eb-preview-toggle__knob\"></span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State",    "value": "Disabled", "prop": "state" },
              { "key": "isActive", "value": "Yes",      "prop": "isActive" }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              {
                key: 'Track',
                value: '#9BC5FD',
                token: 'toggle/color/disabled/active/bg-track',
                variants: {
                  'state:Default|isActive:No':   { value: '#C2CFE5', token: 'toggle/color/default/inactive/bg-track' },
                  'state:Default|isActive:Yes':  { value: '#005CE5', token: 'toggle/color/default/active/bg-track' },
                  'state:Disabled|isActive:No':  { value: '#EEF2F9', token: 'toggle/color/disabled/inactive/bg-track' },
                  'state:Disabled|isActive:Yes': { value: '#9BC5FD', token: 'toggle/color/disabled/active/bg-track' },
                },
              },
              {
                key: 'Indicator',
                value: '#F6F9FD',
                token: 'toggle/color/disabled/inactive/bg-indicator',
                variants: {
                  'state:Default|isActive:No':   { value: '#FFFFFF', token: 'toggle/color/default/inactive/bg-indicator' },
                  'state:Default|isActive:Yes':  { value: '#FFFFFF', token: 'toggle/color/default/active/bg-indicator' },
                  'state:Disabled|isActive:No':  { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                  'state:Disabled|isActive:Yes': { value: '#F6F9FD', token: 'toggle/color/disabled/inactive/bg-indicator' },
                },
              },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Track size",    "value": "48 × 24", "mono": true },
              { "key": "Knob size",     "value": "20 × 20", "mono": true },
              { "key": "Knob inset",    "value": "2px",     "mono": true },
              { "key": "Corner radius", "value": "12px (pill)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "N/A", "value": "No text" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>constant<span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">))</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Inactive
      buildStatelessColorsTable({
        title: 'Inactive — Colors',
        description: 'Off / unchecked state.',
        rows: [
          { role: 'Track',     token: 'toggle/color/default/inactive/bg-track',     value: '#C2CFE5' },
          { role: 'Indicator', token: 'toggle/color/default/inactive/bg-indicator', value: '#FFFFFF' },
        ],
      }),
      // Card 2 — Active
      buildStatelessColorsTable({
        title: 'Active — Colors',
        description: 'On / checked state.',
        rows: [
          { role: 'Track',     token: 'toggle/color/default/active/bg-track',     value: '#005CE5' },
          { role: 'Indicator', token: 'toggle/color/default/active/bg-indicator', value: '#FFFFFF' },
        ],
      }),
      // Card 3 — Disabled inactive
      buildStatelessColorsTable({
        title: 'Disabled Inactive — Colors',
        description: 'Disabled toggle in the off position — desaturated track.',
        rows: [
          { role: 'Track',     token: 'toggle/color/disabled/inactive/bg-track',     value: '#E5EBF4' },
          { role: 'Indicator', token: 'toggle/color/disabled/inactive/bg-indicator', value: '#F6F9FD' },
        ],
      }),
      // Card 4 — Disabled active
      buildStatelessColorsTable({
        title: 'Disabled Active — Colors',
        description: 'Disabled toggle in the on position — muted brand fill.',
        rows: [
          { role: 'Track',     token: 'toggle/color/disabled/active/bg-track',     value: '#9BC5FD' },
          { role: 'Indicator', token: 'toggle/color/disabled/active/bg-indicator', value: '#F6F9FD' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>isActive: Yes | No</code>",
          "swift": "<code>isSelected: true | false</code>",
          "compose": "<code>@Binding var isOn: Bool</code>"
        },
        {
          "figma": "<code>State: Default | Disabled</code>",
          "swift": "<code>State: Default | Pressed | Focused | Disabled | Error</code>",
          "compose": "Modifier: <code>.disabled(true)</code>, <code>.ebState(.error)</code>"
        },
        {
          "figma": "(no size axis)",
          "swift": "<code>Size: Small | Medium | Large</code>",
          "compose": "<code>.controlSize(.small / .regular / .large)</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Switch role",
        "ios": "SwiftUI <code>Toggle</code> automatically applies the <em>switch</em> accessibility trait — VoiceOver says \"on/off\", not \"checked/unchecked\".",
        "android": "Material <code>Switch</code> applies <code>Role.Switch</code> semantics automatically."
      },
      {
        "requirement": "Touch target",
        "ios": "Minimum 44 × 44pt (pad the container — the 48×24 track alone is too small).",
        "android": "Minimum 48 × 48dp."
      },
      {
        "requirement": "State announcement",
        "ios": "VoiceOver announces \"On\" / \"Off\" as the value.",
        "android": "TalkBack announces \"On\" / \"Off\" as the state description."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> blocks interaction; VoiceOver announces \"dimmed\".",
        "android": "<code>enabled = false</code> blocks click; TalkBack announces \"disabled\"."
      },
      {
        "requirement": "Focus (external keyboard / switch control)",
        "ios": "iPad keyboards and Switch Control need a visible focus ring — must be added as part of the Focused state.",
        "android": "D-pad / keyboard focus indicator — must be added as part of the Focused state."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Track/knob layers cleanly named."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>isSelected</code> → <code>isSelected</code>, values <code>Yes/No</code> → <code>true/false</code>; add Size axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Track + knob + shadow bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps 1:1 to SwiftUI <code>Toggle</code> / Material <code>Switch</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing Pressed, Focused, Error. Need full 5-state model."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until schema normalizes."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>State</code> × <code>isSelected</code> = <strong>4 variants</strong> today. Proposed: <code>isSelected</code> × <code>State</code> × <code>Size</code> = <strong>30 variants</strong>.",
      "columns": [
        "#",
        "Node",
        "State",
        "isActive",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18482:36509</code>",
            "Default",
            "No",
            "48 × 24"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18482:36512</code>",
            "Default",
            "Yes",
            "48 × 24"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18482:36515</code>",
            "Disabled",
            "No",
            "48 × 24"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18482:36518</code>",
            "Disabled",
            "Yes",
            "48 × 24"
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
      "header": "Initial Assessment · node 18482:36508",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Normalize to the shared Selection Control schema alongside Checkbox and Radio Button. <span class=\"tag-open tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C2 — Property naming</strong> — Rename <code>isSelected</code> → <code>isSelected</code>; change values <code>Yes/No</code> → <code>true/false</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — States</strong> — Add Pressed, Focused, Error states. Add Small/Medium/Large size axis. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until schema normalizes. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
