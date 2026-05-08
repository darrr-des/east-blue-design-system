import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — same across all 3 button styles. Wired to
// the legacy `updateSpecCard(cardStyle, prop, value)` function in
// `public/scripts/demos/button.js`.
const buttonDemoControls: DemoControlSection[] = [
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
        label: 'Size',
        prop: 'size',
        defaultValue: 'large',
        options: [
          { value: 'large', label: 'Large' },
          { value: 'medium', label: 'Medium' },
          { value: 'small', label: 'Small' },
          { value: 'compact', label: 'Compact' },
          { value: 'xsmall', label: 'XSmall' },
        ],
      },
      {
        label: 'Icon Placement',
        prop: 'iconPlacement',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'leading', label: 'Leading' },
          { value: 'trailing', label: 'Trailing' },
          { value: 'iconOnly', label: 'Icon Only' },
        ],
      },
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
          { value: 'default', label: 'Default' },
          { value: 'destructive', label: 'Destructive' },
          { value: 'white', label: 'White' },
          { value: 'subtle', label: 'Subtle' },
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
        "kind": "keep",
        "label": "Keep"
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\"><button class=\"demo-btn demo-btn-primary\" id=\"demo-btn-live\" style=\"display:inline-flex;align-items:center;gap:8px;\"><svg id=\"demo-btn-leading\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg><span id=\"demo-btn-text\">Label</span><svg id=\"demo-btn-trailing\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg></button></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Style</span><select class=\"demo-panel-select\" onchange=\"setDemoStyle(this.value)\"><option value=\"filled\" selected=\"\">Filled</option><option value=\"outline\">Outline</option><option value=\"text\">Text</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"setDemoState(this.value)\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" onchange=\"setDemoSize(this.value)\"><option value=\"large\" selected=\"\">Large</option><option value=\"medium\">Medium</option><option value=\"small\">Small</option><option value=\"compact\">Compact</option><option value=\"xsmall\">XSmall</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Icon Placement</span><select class=\"demo-panel-select\" onchange=\"setDemoIconPlacement(this.value)\"><option value=\"none\" selected=\"\">None</option><option value=\"leading\">Leading</option><option value=\"trailing\">Trailing</option><option value=\"iconOnly\">Icon Only</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Mode</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Appearance</span><select class=\"demo-panel-select\" onchange=\"setDemoAppearance(this.value)\"><option value=\"default\" selected=\"\">Default</option><option value=\"destructive\">Destructive</option><option value=\"white\">White</option><option value=\"subtle\">Subtle</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Three styles (Filled/Outline/Text) with four appearance modes cover primary, secondary, tertiary, surface, and destructive action patterns across all contexts."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "All styles, states, and appearance colors are self-contained via variable bindings. <code>Leading Container</code> and <code>Trailing Container</code> SLOT nodes in every variant."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Clean <code>Property=Value</code> naming across all 60 variants. Size, State, and Style are orthogonal variant dimensions. Appearance is a variable mode — no naming conflicts. 12 color variables bound consistently."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Style=Filled → <code>Button</code>, Style=Outline → <code>OutlinedButton</code>, Style=Text → <code>TextButton</code>. SLOT nodes support icon+label compositions. Each size has its own text style — clean native mapping."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "All four appearance modes fully defined."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Darker fill/border using pressed tokens."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted color tokens applied across all appearances."
      },
      {
        "state": "Destructive",
        "ios": "yes",
        "android": "yes",
        "property": "Appearance mode: Destructive",
        "notes": "Red tokens via variable mode. Applies to all 3 styles (Filled/Outline/Text)."
      },
      {
        "state": "Focused (a11y)",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Mobile-only component. Focus rings rendered natively by iOS (UIKit/SwiftUI) and Android (Material a11y). No Figma state required."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "Native modifier",
        "notes": "Handled as an interaction modifier in native code — <code>.ebLoading(true)</code> (SwiftUI) / <code>isLoading = true</code> (Compose). Removed as a Figma state in v4.0."
      },
      {
        "state": "Icon Only (a11y)",
        "ios": "yes",
        "android": "yes",
        "property": "Icon Placement=Icon Only",
        "notes": "Square target matches size height. Requires <code>accessibilityLabel</code> / <code>contentDescription</code> since no visible text."
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
        "headline": "Code Connect mappings not registered.",
        "body": "All structural blockers resolved through v4.1 — registration can now proceed against the current API (Style × Appearance × Size + Icon Placement).",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document full-width (stretch) behavior.",
        "body": "Add an <code>isFullWidth</code> boolean property for bottom-sheet CTAs and standalone action areas. Today this is achieved via constraints on each screen; a first-class property makes the intent explicit and removes per-screen guesswork.",
        "tag": "Property"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "btn-spec-filled",
        "demoKey": "filled",
        "demoControls": buttonDemoControls,
        "title": "Filled",
        "node": "17104:184843",
        "description": "Solid background with contrasting label. Primary action style. Colors change via Appearance variable mode.",
        "previewHtml": "<button class=\"demo-btn demo-btn-primary\" id=\"spec-filled-btn\" style=\"display:inline-flex;align-items:center;gap:8px;\"><svg id=\"spec-filled-leading\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg><span>Button</span><svg id=\"spec-filled-trailing\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg></button>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style",      "value": "Filled" },
              { "key": "Appearance", "value": "Default", "prop": "appearance" },
              { "key": "State",      "value": "Default", "prop": "state" },
              { "key": "Size",       "value": "Large",   "prop": "size" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Default bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg",
                "variants": {
                  "appearance:destructive": { "value": "#D81E1E", "token": "button/primary/destructive/enabled/bg" },
                  "appearance:white":       { "value": "#FFFFFF", "token": "button/primary/white/enabled/bg" },
                  "appearance:subtle":      { "value": "#E5F1FF", "token": "button/primary/subtle/enabled/bg" }
                }
              },
              { "key": "Default label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label",
                "variants": {
                  "appearance:destructive": { "value": "#FFFFFF", "token": "button/primary/destructive/enabled/label" },
                  "appearance:white":       { "value": "#005CE5", "token": "button/primary/white/enabled/label" },
                  "appearance:subtle":      { "value": "#005CE5", "token": "button/primary/subtle/enabled/label" }
                }
              },
              { "key": "Pressed bg", "value": "#2340A9", "token": "button/primary/brand/pressed/bg",
                "variants": {
                  "appearance:destructive": { "value": "#B01818", "token": "button/primary/destructive/pressed/bg" },
                  "appearance:white":       { "value": "#EEF2F9", "token": "button/primary/white/pressed/bg" },
                  "appearance:subtle":      { "value": "#D2E5FF", "token": "button/primary/subtle/pressed/bg" }
                }
              },
              { "key": "Disabled bg", "value": "#9BC5FD", "token": "button/primary/brand/disabled/bg",
                "variants": {
                  "appearance:destructive": { "value": "#F5A3A3", "token": "button/primary/destructive/disabled/bg" },
                  "appearance:white":       { "value": "#F5F7FA", "token": "button/primary/white/disabled/bg" },
                  "appearance:subtle":      { "value": "#EEF5FF", "token": "button/primary/subtle/disabled/bg" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "50px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "48px" },
                  "size:small":   { "value": "36px" },
                  "size:compact": { "value": "28px" },
                  "size:xsmall":  { "value": "24px" }
                }
              },
              { "key": "Padding H", "value": "20px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "16px" },
                  "size:small":   { "value": "12px" },
                  "size:compact": { "value": "12px" },
                  "size:xsmall":  { "value": "10px" }
                }
              },
              { "key": "Padding V", "value": "16px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "12px" },
                  "size:small":   { "value": "8px" },
                  "size:compact": { "value": "5px" },
                  "size:xsmall":  { "value": "4px" }
                }
              },
              { "key": "Radius", "value": "99px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",       "value": "Proxima Soft Bold", "mono": true },
              { "key": "Text Style", "value": "Primary/Label/Large", "mono": true,
                "variants": {
                  "size:medium":  { "value": "Primary/Label/Base" },
                  "size:small":   { "value": "Primary/Label/Base" },
                  "size:compact": { "value": "Primary/Label/Small" },
                  "size:xsmall":  { "value": "Primary/Label/Fine" }
                }
              },
              { "key": "Size", "value": "18px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "16px" },
                  "size:small":   { "value": "16px" },
                  "size:compact": { "value": "14px" },
                  "size:xsmall":  { "value": "12px" }
                }
              },
              { "key": "Tracking",   "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Save\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAppearance</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.filled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">controlSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Save\"</span><span class=\"syn-punc\">,</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAppearance</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBButtonSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Large</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "btn-spec-outline",
        "demoKey": "outline",
        "demoControls": buttonDemoControls,
        "title": "Outline",
        "node": "17104:184852",
        "description": "Transparent background with border and accent-colored label. Secondary action style.",
        "previewHtml": "<button class=\"demo-btn demo-btn-outlined\" id=\"spec-outline-btn\" style=\"display:inline-flex;align-items:center;gap:8px;\"><svg id=\"spec-outline-leading\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg><span>Button</span><svg id=\"spec-outline-trailing\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg></button>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style",      "value": "Outline" },
              { "key": "Appearance", "value": "Default", "prop": "appearance" },
              { "key": "State",      "value": "Default", "prop": "state" },
              { "key": "Size",       "value": "Large",   "prop": "size" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Default border", "value": "#005CE5", "token": "button/secondary/brand/enabled/border",
                "variants": {
                  "appearance:destructive": { "value": "#D81E1E", "token": "button/secondary/destructive/enabled/border" }
                }
              },
              { "key": "Default label", "value": "#005CE5", "token": "button/secondary/brand/enabled/label",
                "variants": {
                  "appearance:destructive": { "value": "#D81E1E", "token": "button/secondary/destructive/enabled/label" }
                }
              },
              { "key": "Pressed border", "value": "#2340A9", "token": "button/secondary/brand/pressed/border",
                "variants": {
                  "appearance:destructive": { "value": "#B01818", "token": "button/secondary/destructive/pressed/border" }
                }
              },
              { "key": "Disabled border", "value": "#9BC5FD", "token": "button/secondary/brand/disabled/border",
                "variants": {
                  "appearance:destructive": { "value": "#F5A3A3", "token": "button/secondary/destructive/disabled/border" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "50px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "48px" },
                  "size:small":   { "value": "36px" },
                  "size:compact": { "value": "28px" },
                  "size:xsmall":  { "value": "24px" }
                }
              },
              { "key": "Padding H", "value": "20px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "16px" },
                  "size:small":   { "value": "12px" },
                  "size:compact": { "value": "12px" },
                  "size:xsmall":  { "value": "10px" }
                }
              },
              { "key": "Padding V", "value": "16px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "12px" },
                  "size:small":   { "value": "8px" },
                  "size:compact": { "value": "5px" },
                  "size:xsmall":  { "value": "4px" }
                }
              },
              { "key": "Border",    "value": "1.5px solid", "mono": true },
              { "key": "Radius",    "value": "99px",  "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",       "value": "Proxima Soft Bold", "mono": true },
              { "key": "Text Style", "value": "Primary/Label/Large", "mono": true,
                "variants": {
                  "size:medium":  { "value": "Primary/Label/Base" },
                  "size:small":   { "value": "Primary/Label/Base" },
                  "size:compact": { "value": "Primary/Label/Small" },
                  "size:xsmall":  { "value": "Primary/Label/Fine" }
                }
              },
              { "key": "Size", "value": "18px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "16px" },
                  "size:small":   { "value": "16px" },
                  "size:compact": { "value": "14px" },
                  "size:xsmall":  { "value": "12px" }
                }
              },
              { "key": "Tracking",   "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Cancel\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">controlSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Cancel\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBButtonSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Large</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "btn-spec-text",
        "demoKey": "text",
        "demoControls": buttonDemoControls,
        "title": "Text",
        "node": "17104:184855",
        "description": "No background or border. Label only. Tertiary action style.",
        "previewHtml": "<button class=\"demo-btn\" style=\"background:transparent;color:#005CE5;border:none;padding:14px 24px;border-radius:99px;font-weight:700;display:inline-flex;align-items:center;gap:8px;\" id=\"spec-text-btn\"><svg id=\"spec-text-leading\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg><span>Button</span><svg id=\"spec-text-trailing\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"display:none;flex-shrink:0;\"><path d=\"M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"></path></svg></button>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              { "key": "Style",      "value": "Text" },
              { "key": "Appearance", "value": "Default", "prop": "appearance" },
              { "key": "State",      "value": "Default", "prop": "state" },
              { "key": "Size",       "value": "Large",   "prop": "size" }
            ],
            "slug": "props"
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Default label", "value": "#005CE5", "token": "button/tertiary/brand/enabled/label",
                "variants": {
                  "appearance:destructive": { "value": "#D81E1E", "token": "button/tertiary/destructive/enabled/label" }
                }
              },
              { "key": "Pressed label", "value": "#2340A9", "token": "button/tertiary/brand/pressed/label",
                "variants": {
                  "appearance:destructive": { "value": "#B01818", "token": "button/tertiary/destructive/pressed/label" }
                }
              },
              { "key": "Disabled label", "value": "#9BC5FD", "token": "button/tertiary/brand/disabled/label",
                "variants": {
                  "appearance:destructive": { "value": "#F5A3A3", "token": "button/tertiary/destructive/disabled/label" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "50px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "48px" },
                  "size:small":   { "value": "36px" },
                  "size:compact": { "value": "28px" },
                  "size:xsmall":  { "value": "24px" }
                }
              },
              { "key": "Padding H", "value": "20px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "16px" },
                  "size:small":   { "value": "12px" },
                  "size:compact": { "value": "12px" },
                  "size:xsmall":  { "value": "10px" }
                }
              },
              { "key": "Padding V", "value": "16px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "12px" },
                  "size:small":   { "value": "8px" },
                  "size:compact": { "value": "5px" },
                  "size:xsmall":  { "value": "4px" }
                }
              },
              { "key": "Radius",    "value": "99px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",       "value": "Proxima Soft Bold", "mono": true },
              { "key": "Text Style", "value": "Primary/Label/Large", "mono": true,
                "variants": {
                  "size:medium":  { "value": "Primary/Label/Base" },
                  "size:small":   { "value": "Primary/Label/Base" },
                  "size:compact": { "value": "Primary/Label/Small" },
                  "size:xsmall":  { "value": "Primary/Label/Fine" }
                }
              },
              { "key": "Size", "value": "18px", "mono": true,
                "variants": {
                  "size:medium":  { "value": "16px" },
                  "size:small":   { "value": "16px" },
                  "size:compact": { "value": "14px" },
                  "size:xsmall":  { "value": "12px" }
                }
              },
              { "key": "Tracking",   "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Skip\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">controlSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Skip\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBButtonSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Large</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Appearance Mode",
        "description": "Token names resolve to different hex values per mode. All 4 modes share the same 4 variables from the <code>Button</code> collection.",
        "columns": [
          "Enabled",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "bg",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "label",
            "token": "#FFFFFF",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Destructive",
            "token": "bg",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "label",
            "token": "#FFFFFF",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "White",
            "token": "bg",
            "values": [
              "#FFFFFF",
              "#EEF2F9",
              "#F5F7FA"
            ]
          },
          {
            "role": "label",
            "token": "#005CE5",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Subtle",
            "token": "bg",
            "values": [
              "#E5F1FF",
              "#D2E5FF",
              "#EEF5FF"
            ]
          },
          {
            "role": "label",
            "token": "#005CE5",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          }
        ]
      },
      {
        "title": "Colors by Appearance Mode",
        "description": "Outline uses border + label tokens — no background fill. All 4 modes share the same 3 variables from the <code>Button</code> collection.",
        "columns": [
          "Enabled",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "border",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "label",
            "token": "#005CE5",
            "values": [
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Destructive",
            "token": "border",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "label",
            "token": "#D81E1E",
            "values": [
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "White",
            "token": "border",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "label",
            "token": "#005CE5",
            "values": [
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Subtle",
            "token": "border",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "label",
            "token": "#005CE5",
            "values": [
              "#2340A9",
              "#9BC5FD"
            ]
          }
        ]
      },
      {
        "title": "Colors by Appearance Mode",
        "description": "Text style uses label-only tokens — no background or border. All 4 modes share the same 3 variables from the <code>Button</code> collection.",
        "columns": [
          "Enabled",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Destructive",
            "token": "label",
            "values": [
              "#D81E1E",
              "#B01818",
              "#F5A3A3"
            ]
          },
          {
            "role": "White",
            "token": "label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
            ]
          },
          {
            "role": "Subtle",
            "token": "label",
            "values": [
              "#005CE5",
              "#2340A9",
              "#9BC5FD"
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
          "compose": "<code>EBButton {}</code>"
        },
        {
          "figma": "<code>Style=Outline</code>",
          "swift": "<code>.ebAppearance(.outlined)</code>",
          "compose": "<code>EBOutlinedButton {}</code>"
        },
        {
          "figma": "<code>Style=Text</code>",
          "swift": "<code>.ebAppearance(.textLink)</code>",
          "compose": "<code>EBTextButton {}</code>"
        },
        {
          "figma": "<code>Appearance=Default</code>",
          "swift": "(default — omit modifier)",
          "compose": "(default — omit colors param)"
        },
        {
          "figma": "<code>Appearance=Destructive</code>",
          "swift": "<code>.ebColorScheme(.destructive)</code>",
          "compose": "<code>colors = EBButtonDefaults.destructiveColors()</code>"
        },
        {
          "figma": "<code>Appearance=White</code>",
          "swift": "<code>.ebColorScheme(.white)</code>",
          "compose": "<code>colors = EBButtonDefaults.whiteColors()</code>"
        },
        {
          "figma": "<code>Appearance=Subtle</code>",
          "swift": "<code>.ebColorScheme(.subtle)</code>",
          "compose": "<code>colors = EBButtonDefaults.subtleColors()</code>"
        },
        {
          "figma": "<code>Size=Large…XSmall</code>",
          "swift": "<code>controlSize: .large / .regular / .small / .compact / .mini</code>",
          "compose": "<code>size = EBButtonSize.Large / Medium / Small / Compact / XSmall</code>"
        },
        {
          "figma": "<code>State=Disabled</code>",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "<code>(Loading — runtime)</code>",
          "swift": "<code>.ebLoading(true)</code>",
          "compose": "<code>isLoading = true</code>"
        },
        {
          "figma": "<code>Icon Placement=None</code>",
          "swift": "(default — text only)",
          "compose": "(default — text only)"
        },
        {
          "figma": "<code>Icon Placement=Leading</code>",
          "swift": "<code>Label(\"…\", systemImage: \"…\")</code>",
          "compose": "<code>leadingIcon = { Icon(…) }</code>"
        },
        {
          "figma": "<code>Icon Placement=Trailing</code>",
          "swift": "<code>Label + trailing Image</code>",
          "compose": "<code>trailingIcon = { Icon(…) }</code>"
        },
        {
          "figma": "<code>Icon Placement=Icon Only</code>",
          "swift": "<code>EBButton(icon: Image(…), accessibilityLabel: \"…\")</code>",
          "compose": "<code>EBButton(contentDescription = \"…\") { Icon(…) }</code>"
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
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All layers use semantic names. <code>container</code>, <code>#label</code>, <code>leadingIcon</code>, <code>trailingIcon</code> consistent across all 60 variants."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "v3 clean orthogonal dimensions: <code>Style</code> (Filled/Outline/Text), <code>Size</code> (Large/Medium/Small/Compact/XSmall), <code>State</code> (Default/Pressed/Disabled). Appearance via 4 variable modes. <code>leadingIcon</code>/<code>trailingIcon</code> are SLOT nodes with Boolean component properties."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All color values connected to semantic tokens. Layout/sizing driven by <code>button/size</code> variable collection (height, padding-h, padding-v, font-size)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>Button</code>, <code>OutlinedButton</code>, <code>TextButton</code>. Destructive maps to <code>role: .destructive</code> / <code>contentColor = errorColor</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed, Disabled, Loading covered across all 60 variants. Focus ring is N/A — mobile OS handles natively. Loading uses dot indicators with disabled appearance colors."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Icon slots are Figma SLOT nodes accepting vector icon instances. Boolean properties control visibility."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet. Property structure is clean and ready for mapping."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 180,
      "description": "3 <code>Style</code> × 5 <code>Size</code> × 3 <code>State</code> × 4 <code>Icon Placement</code> = <strong>180 variants</strong>. <code>Appearance</code> is a variable mode (Default/Destructive/White/Subtle) that further multiplies visual states × 4 = <strong>720 resolved visual states</strong>.",
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
            "Large, Medium, Small, Compact, XSmall",
            "Default, Pressed, Disabled",
            "None, Leading, Trailing, Icon Only",
            "60"
          ]
        },
        {
          "cells": [
            "<strong>Outline</strong>",
            "Large, Medium, Small, Compact, XSmall",
            "Default, Pressed, Disabled",
            "None, Leading, Trailing, Icon Only",
            "60"
          ]
        },
        {
          "cells": [
            "<strong>Text</strong>",
            "Large, Medium, Small, Compact, XSmall",
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
