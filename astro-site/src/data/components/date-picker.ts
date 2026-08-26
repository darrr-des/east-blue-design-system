import type { ComponentData, DemoControlSection } from '../types';

const fieldControls: DemoControlSection[] = [
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
          { value: 'error', label: 'Error' }
        ]
      },
      {
        label: 'isFilled',
        prop: 'filled',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

export const datePicker: ComponentData = {
  "meta": {
    "slug": "date-picker",
    "name": "Date Picker",
    "node": "7201:112099",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7201-112099",
    "description": "The date field a user actually taps. Eight versions across four states and a filled flag, built on the system's own Dropdown rather than a redrawn field.",
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
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the entry point, now built on Dropdown",
      "text": "All four DS Health traits pass. This is the component teams reach for: the field, its states, and the calendar it opens. It composes <code>Dropdown - Generic</code> instead of redrawing a form field, which is what closed the old consistency gap with the rest of the form family. Error and Pressed exist for the first time, and Disabled moved onto <code>State</code> so the impossible combinations the old two-boolean schema allowed are gone. It is badged Needs Refinement for two inherited details from Dropdown, not for anything in its own structure."
    }
  },
  "overview": {
    "inContextNote": "Sits inline in a form — a transaction history filter, a scheduling screen, a date of birth field. Tapping it opens <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a> as an overlay; the chosen date returns to the field and flips isFilled.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dp-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"dp-ctrl-state\" class=\"demo-panel-select\" onchange=\"_dpUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option><option value=\"error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"dp-ctrl-filled\" class=\"demo-panel-select\" onchange=\"_dpUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#label</span><input type=\"text\" id=\"dp-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_dpUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#value</span><input type=\"text\" id=\"dp-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"Select option\" oninput=\"_dpUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One field covers every date entry in the app. Nothing about a particular form is baked in — the label and value are text properties."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its label, field, calendar icon, error subtext and all four states. What it does not carry it inherits from Dropdown, deliberately."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Uses <code>State</code> with the same vocabulary as <a href=\"/components/date-picker-header-trigger\">Date Picker - Header Trigger</a>, and looks like every other form field because it is one."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built from <code>Dropdown - Generic</code>, and pairs with <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a> as its overlay."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "312 × 68",
        "notes": "White field, <code>#D7E0EF</code> border."
      },
      {
        "state": "State=Pressed",
        "ios": "na",
        "android": "na",
        "property": "312 × 68",
        "notes": "Border goes brand blue while the calendar is open."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "312 × 68",
        "notes": "Filled <code>#EEF2F9</code>, no border. Same height as Default."
      },
      {
        "state": "State=Error",
        "ios": "na",
        "android": "na",
        "property": "312 × 94",
        "notes": "Red border plus subtext — the only version that is taller."
      },
      {
        "state": "isFilled=false",
        "ios": "na",
        "android": "na",
        "property": "placeholder",
        "notes": "\"Select option\" in the muted value colour."
      },
      {
        "state": "isFilled=true",
        "ios": "na",
        "android": "na",
        "property": "value",
        "notes": "The chosen date in the heading colour."
      }
    ],
    "resolved": [
      {
        "headline": "The field is a Dropdown, not a redraw.",
        "body": "Every version wraps one <code>Dropdown - Generic</code> instance. The old component drew its own field, which is why it drifted from the rest of the form family on border colour, height and label placement.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Error and Pressed exist.",
        "body": "Neither had a version before, so a form could not show an invalid date and the field gave no feedback while its calendar was open. Both are now <code>State</code> values, each covering both filled and empty.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "One state setting instead of overlapping booleans.",
        "body": "<code>isDisabled</code> used <code>Yes</code> and <code>No</code> while <code>isFilled</code> used <code>False</code> and <code>True</code>, and the two together permitted combinations that could not happen. Disabled is now a <code>State</code> value, leaving <code>State</code> × <code>isFilled</code> — orthogonal, and complete at eight of eight.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The calendar glyph is a vector.",
        "body": "It shipped as a raster image that could not recolour. It is now a <code>shape_full</code> vector inside a <code>Calendar</code> icon instance.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Disabled stopped being taller than Default.",
        "body": "Every version carries Dropdown's <code>description</code> frame. Disabled sized itself to include the empty frame and came out 26px taller than Default, so disabling a date field pushed the rest of the form down. It now hugs its content at 68, and only Error — which has real subtext — is 94.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The boolean values are lowercase.",
        "body": "<code>isFilled</code> read <code>False</code> and <code>True</code>. It now matches the rest of the family — <code>false</code> and <code>true</code>, like <code>isDisabled</code> on the cell and <code>hasCaret</code> on the header trigger.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The calendar moved out of the trigger.",
        "body": "The old component composed its calendar inline, so the field and the surface could not be used or assessed apart. The calendar is now <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a>, opened as an overlay.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Let the description frame size to the field.",
        "body": "Dropdown's <code>description</code> frame is 366 wide inside a 312 wide component — a 54px overflow on every version. It cannot be set to fill width while hidden, which is why it is fixed. Worth solving in <code>Dropdown - Generic</code> so every field built on it inherits the fix.",
        "tag": "Composition"
      },
      {
        "headline": "Drive the unused Dropdown slots by property, not by hiding.",
        "body": "Composing Dropdown brings a <code>peso-sign</code> prefix and a <code>flag-container</code> holding a raster Philippines flag. Both are currently switched off by hand. Hand-hidden layers reappear the moment someone swaps the instance — if Dropdown exposed booleans for them, a date field could turn them off declaratively.",
        "tag": "Property"
      },
      {
        "headline": "Take the <code>[Option 02]</code> suffix off the name.",
        "body": "The component is still <code>Date Picker Trigger [Option 02]</code> at node <code>7201:112099</code>. Option 01 was set aside; this one becomes <code>Date Picker</code>. Rename <a href=\"/components/date-picker-calendar\">the calendar</a> first, since it currently holds that name.",
        "tag": "Rename"
      },
      {
        "headline": "Announce the field as a date control.",
        "body": "Expose the current value as a spoken date rather than a formatted string, state that activating it opens a calendar, and tie the Error subtext to the field so it is read on focus rather than sitting as loose text.",
        "tag": "A11y"
      },
      {
        "headline": "Document that the picker is a wrapper, not a reimplementation.",
        "body": "Both platforms ship a date picker with locale, keyboard and accessibility built in. The Code tab should state that the intent is to present the platform picker inside this field's styling, so nobody rebuilds the calendar from the Figma grid.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "States",
    "description": "Four states across a filled flag. Default, Pressed and Disabled are all 68 tall; only Error grows to carry its subtext.",
    "specCards": [
      {
        "cardKey": "dp-spec-card-field",
        "demoKey": "field",
        "demoControls": fieldControls,
        "title": "Date Picker",
        "node": "7201:112099",
        "description": "One Dropdown - Generic instance per version. The calendar icon sits in the field's trailing slot.",
        "previewHtml": "<div id=\"dp-spec-field\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "isFilled", "value": "false", "prop": "filled" },
              { "key": "#label", "value": "Label" },
              { "key": "#value", "value": "Select option", "variants": { "filled:true": { "value": "the chosen date" } } },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Field — default", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Border — default", "value": "#D7E0EF", "token": "border/color-border-field", "swatch": true },
              { "key": "Border — pressed", "value": "#005CE5", "token": "border/color-border-focus", "swatch": true },
              { "key": "Field — disabled", "value": "#EEF2F9", "token": "bg/color-bg-disabled", "swatch": true },
              { "key": "Border — error", "value": "#D81E1E", "token": "border/color-border-error", "swatch": true },
              { "key": "#label", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "#value — placeholder", "value": "#90A8D0", "token": "text/color-text-placeholder", "swatch": true },
              { "key": "Calendar icon", "value": "#025AE9", "token": "icon/color-icon-link", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "312", "mono": true },
              { "key": "Height", "value": "68", "mono": true, "variants": { "state:error": { "value": "94 — subtext adds 26" } } },
              { "key": "Label row", "value": "312 × 22", "mono": true },
              { "key": "Field", "value": "312 × 46", "mono": true },
              { "key": "Corner radius", "value": "6", "mono": true },
              { "key": "Calendar icon", "value": "32 × 32", "mono": true },
              { "key": "Description frame", "value": "366 — overflows the 312 field", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label style", "value": "Primary/SemiBold/Subheading", "mono": true },
              { "key": "#label font", "value": "Proxima Soft SemiBold · 16 / 16 · +0.25", "mono": true },
              { "key": "#value font", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true },
              { "key": "Subtext", "value": "BarkAda SemiBold · 12 / 18", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> $date<span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select option\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select option\"</span><span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/gcash/east-blue-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Gradle",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.gcash.eastblue:components:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The intent is a styled field that presents the platform's own date picker, not a reimplementation of the calendar."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "State=Default / Pressed", "swift": "derived from focus and presentation", "compose": "interactionSource" },
        { "figma": "State=Disabled", "swift": ".disabled(true)", "compose": "enabled = false" },
        { "figma": "State=Error", "swift": "errorMessage: String?", "compose": "errorMessage: String?" },
        { "figma": "isFilled", "swift": "derived — selection != nil", "compose": "derived — selected != null" },
        { "figma": "#label", "swift": "label: String", "compose": "label: String" },
        { "figma": "#value", "swift": "selection: Date? / placeholder: String", "compose": "selected: LocalDate? / placeholder: String" },
        { "figma": "Calendar icon", "swift": "fixed trailing icon", "compose": "fixed trailing icon" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A date field",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Date of birth\"</span><span class=\"syn-punc\">,</span> selection<span class=\"syn-punc\">:</span> $birthday<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Date of birth\"</span><span class=\"syn-punc\">,</span> selected <span class=\"syn-eq\">=</span> birthday<span class=\"syn-punc\">,</span> onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> birthday <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">})</span>"
      },
      {
        "subheading": "Showing a validation error",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Start date\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> $start<span class=\"syn-punc\">,</span>\n    errorMessage<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Pick a date in the future\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Start date\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> start<span class=\"syn-punc\">,</span>\n    errorMessage <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Pick a date in the future\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Settlement date\"</span><span class=\"syn-punc\">,</span> selection<span class=\"syn-punc\">:</span> $date<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Settlement date\"</span><span class=\"syn-punc\">,</span> selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span> enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Announced as a date control",
        "ios": "<code>.accessibilityLabel(label)</code> with <code>.accessibilityValue(date.formatted(date: .long, time: .omitted))</code>",
        "android": "<code>contentDescription</code> plus <code>stateDescription</code> carrying the spoken date"
      },
      {
        "requirement": "Activation is described",
        "ios": "<code>.accessibilityHint(\"Opens a calendar\")</code>",
        "android": "<code>onClickLabel = \"Open calendar\"</code>"
      },
      {
        "requirement": "Error subtext is tied to the field",
        "ios": "Append to <code>accessibilityValue</code> so it reads on focus",
        "android": "<code>Modifier.semantics { error(message) }</code>"
      },
      {
        "requirement": "Disabled is announced, not just greyed",
        "ios": "<code>.disabled(true)</code> sets the trait automatically",
        "android": "<code>enabled = false</code> sets the trait automatically"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Present the platform's date picker inside this field's styling.",
        "dontText": "Don't rebuild the calendar from the Figma grid — locale and accessibility come free from the platform."
      },
      {
        "doText": "Let isFilled follow from whether a date is selected.",
        "dontText": "Don't expose isFilled as something a developer sets by hand."
      },
      {
        "doText": "Use Error with a message that says what to do.",
        "dontText": "Don't turn the border red without subtext explaining why."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "refine", "statusLabel": "Needs Refinement", "notes": "One Dropdown instance per version, and the disabled height is fixed. Outstanding: Dropdown's <code>description</code> frame is 366 wide inside a 312 field." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>State</code> × <code>isFilled</code> is orthogonal and complete, with lowercase booleans." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Field, border, text and icon colours all follow the shared form tokens through Dropdown." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A form field with a trailing icon that presents a picker — the standard pattern on both platforms." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Default, Pressed, Disabled and Error, each across both filled states." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "refine", "statusLabel": "Needs Refinement", "notes": "The calendar glyph is a vector. Inherited from Dropdown: a hidden raster flag and a currency prefix that a date field will never use." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>State</code> and <code>isFilled</code> map onto an enum and a derived boolean." },
      { "aspect": "Token coverage", "status": "ready", "statusLabel": "Ready", "notes": "Inherited from Dropdown, which is already tokenised." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 8,
      "description": "4 State × 2 isFilled = 8 versions, complete with no gaps.",
      "columns": ["State", "isFilled", "Height", "Node"],
      "rows": [
        { "cells": ["Default", "false", "68", "7201:112100"] },
        { "cells": ["Default", "true", "68", "7201:112105"] },
        { "cells": ["Pressed", "false", "68", "7201:112102"] },
        { "cells": ["Pressed", "true", "68", "7201:112107"] },
        { "cells": ["Disabled", "false", "68", "7201:112112"] },
        { "cells": ["Disabled", "true", "68", "7201:112110"] },
        { "cells": ["Error", "false", "94", "7201:112116"] },
        { "cells": ["Error", "true", "94", "7201:112114"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on Dropdown — node 7201:112099",
      "rows": [
        {
          "body": "<strong>Rebuilt in the 2026 Working File.</strong> The previous component at <code>12879:49826</code> in Sticker Sheets v2 is deprecated. The calendar it composed inline is now <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a>.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C4 — composes <code>Dropdown - Generic</code></strong> rather than redrawing a form field, closing the consistency gap with the rest of the form family.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>C5 — Error and Pressed added.</strong> Neither existed; a form could not show an invalid date, and the field gave no feedback while its calendar was open.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C2 — one state setting.</strong> <code>isDisabled</code> (<code>Yes</code>/<code>No</code>) folded into <code>State</code>, leaving <code>State</code> × <code>isFilled</code> orthogonal and complete. Boolean values lowercased.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C6 — the calendar glyph is a vector</strong> inside a <code>Calendar</code> icon instance, no longer a raster image.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C1 — Disabled hugs its content.</strong> It was 26px taller than Default because it sized around Dropdown's empty <code>description</code> frame, so disabling a field shifted the form.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — the description frame still overflows</strong> at 366 wide inside a 312 field. It cannot fill width while hidden; raised against <code>Dropdown - Generic</code>.",
          "delta": { "kind": "open", "label": "C1 open" }
        },
        {
          "body": "<strong>C6 — unused Dropdown slots are hand-hidden.</strong> A currency prefix and a raster flag ride along, switched off manually rather than by property.",
          "delta": { "kind": "partial", "label": "C6 partial" }
        }
      ]
    }
  ]
};
