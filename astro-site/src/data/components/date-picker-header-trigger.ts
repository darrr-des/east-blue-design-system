import type { ComponentData, DemoControlSection } from '../types';

const triggerControls: DemoControlSection[] = [
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
          { value: 'disabled', label: 'Disabled' }
        ]
      },
      {
        label: 'hasCaret',
        prop: 'caret',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' }
        ]
      }
    ]
  }
];

export const datePickerHeaderTrigger: ComponentData = {
  "meta": {
    "slug": "date-picker-header-trigger",
    "name": "Date Picker - Header Trigger",
    "node": "6779:105937",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6779-105937",
    "description": "The month and year chips in the calendar header. Tapping one switches the calendar to its month or year view. Six versions — three states, with or without a caret.",
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
      "title": "Keep — one State setting, and the caret it was missing",
      "text": "All four DS Health traits pass. Two independent booleans became a single <code>State</code> setting, matching the field trigger and the naming guidelines. A <code>hasCaret</code> option adds the disclosure indicator that was missing — without it the chips read as static labels rather than controls that open a view. It is badged Needs Refinement for one reason: at 24px tall the chip is well under the minimum touch target."
    }
  },
  "overview": {
    "inContextNote": "Two instances sit between the chevrons in the calendar header — one for the month, one for the year. Tapping either switches Date Picker - Calendar into its Month or Year mode, where the chip is replaced by a static title and a back chevron.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpht-demo-preview\"><span class=\"eb-preview-dphdr\"><span>Month</span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"dpht-ctrl-state\" class=\"demo-panel-select\" onchange=\"_dphtUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCaret</span><select id=\"dpht-ctrl-caret\" class=\"demo-panel-select\" onchange=\"_dphtUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#text</span><input type=\"text\" id=\"dpht-ctrl-text\" class=\"demo-panel-select demo-panel-input\" value=\"Month\" oninput=\"_dphtUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "The same chip serves both the month and the year position; only its text differs. <code>hasCaret</code> lets it be used where a disclosure indicator would be wrong."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, radius, type style, all three states, and the caret icon instance."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Uses <code>State</code> like <a href=\"/components/date-picker\">Date Picker</a> does, and wraps in a <code>Container</code> like every other component in the family."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Instanced twice inside the calendar header's <code>Container</code>, between the two chevrons."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "#F6F9FD",
        "notes": "Resting chip. Both header instances use this."
      },
      {
        "state": "State=Pressed",
        "ios": "na",
        "android": "na",
        "property": "#EEF2F9",
        "notes": "Momentary. Not used to mark which view is open."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "#FFFFFF",
        "notes": "Surface stays, text and caret mute together."
      },
      {
        "state": "hasCaret=true",
        "ios": "na",
        "android": "na",
        "property": "Chevron Down",
        "notes": "16px icon instance. Widens the chip from 57 to 81."
      }
    ],
    "resolved": [
      {
        "headline": "Two booleans became one State setting.",
        "body": "<code>isDisabled</code> and <code>isPressed</code> sat side by side, which allowed a pressed-and-disabled combination that means nothing. They are now <code>State = Default | Pressed | Disabled</code> — the shape the naming guidelines ask for, and the one <a href=\"/components/date-picker\">Date Picker</a> already used.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The setting with one value is gone.",
        "body": "A <code>Kind</code> setting existed with <code>Month</code> as its only value — a dropdown with nothing to choose, and no matching <code>Year</code>. It was dropped: the same chip serves both positions, and only its text differs.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The chip now says it opens something.",
        "body": "It was a filled rectangle with a bold label and no disclosure indicator, which reads as a static chip. <code>hasCaret</code> adds a <code>Chevron Down</code> icon instance after the text — the same signal the field trigger's dropdown carries. The caret mutes along with the label in Disabled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The wrapper matches the family.",
        "body": "The inner frame was <code>Label Container</code>, spaced Title Case. It is now <code>Container</code>, like the cell and the weekday header.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The header no longer uses Pressed to mean selected.",
        "body": "In the calendar's Day mode the month chip shipped in its Pressed version while the year chip sat at Default, which read as \"this one is active\". Both are Default now — pressed is a momentary state, not a way to mark the open view.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Give the chip a taller tap area.",
        "body": "It is 24px tall against 44 on iOS and 48 on Android — shorter even than the 32px day cell. Keep the drawn chip at 24 and extend a transparent tap area around it, so the header layout is unchanged.",
        "tag": "A11y"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Header Trigger</code> in Figma.",
        "body": "It is still <code>Header Trigger</code> at node <code>6779:105937</code>, which is generic enough to collide with other headers. The <code>Date Picker - </code> prefix scopes it to this family.",
        "tag": "Rename"
      },
      {
        "headline": "Announce the chip as a button that opens a picker.",
        "body": "The label alone reads as text. Expose it as a button whose accessibility label names both the current value and what tapping does — \"August, select month\" rather than \"August\".",
        "tag": "A11y"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "States",
    "description": "Three states across two caret options. The caret adds 24px of width and mutes with the label when disabled.",
    "specCards": [
      {
        "cardKey": "dpht-spec-card-default",
        "demoKey": "default",
        "demoControls": triggerControls,
        "title": "Date Picker - Header Trigger",
        "node": "6779:105937",
        "description": "Six versions. Default and Pressed differ only in surface; Disabled keeps the surface and mutes the content.",
        "previewHtml": "<div id=\"dpht-spec-default\"><span class=\"eb-preview-dphdr\"><span>Month</span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "hasCaret", "value": "true", "prop": "caret" },
              { "key": "#text", "value": "Month" },
              { "key": "Versions", "value": "6" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface — default", "value": "#F6F9FD", "token": "bg/color-bg-subtle", "swatch": true },
              { "key": "Surface — pressed", "value": "#EEF2F9", "token": "bg/color-bg-subtle-pressed", "swatch": true },
              { "key": "Surface — disabled", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Text", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "Text — disabled", "value": "#C2CFE5", "token": "text/color-text-weakest", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "24", "mono": true },
              { "key": "Width", "value": "57 without caret · 81 with", "mono": true },
              { "key": "Padding H", "value": "8", "mono": true },
              { "key": "Gap to caret", "value": "4", "mono": true },
              { "key": "Corner radius", "value": "4", "mono": true },
              { "key": "Caret", "value": "16 × 16", "mono": true },
              { "key": "Touch target", "value": "24 — below the 44/48 minimum", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/Bold/Subheading", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold · 16 / 16 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBPickerHeaderTrigger</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Month\"</span><span class=\"syn-punc\">,</span>\n    showsCaret<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">) {</span> picker<span class=\"syn-punc\">.</span>mode <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">.month</span> <span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBPickerHeaderTrigger</span><span class=\"syn-punc\">(</span>\n    text <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Month\"</span><span class=\"syn-punc\">,</span>\n    showsCaret <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> mode <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Month</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "State", "swift": "derived — .disabled(true) / press gesture", "compose": "enabled / interactionSource" },
        { "figma": "hasCaret", "swift": "showsCaret: Bool", "compose": "showsCaret: Boolean" },
        { "figma": "#text", "swift": "String", "compose": "text: String" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "The month and year chips",
        "swift": "<span class=\"syn-type\">HStack</span><span class=\"syn-punc\">(</span>spacing<span class=\"syn-punc\">:</span> <span class=\"syn-num\">4</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBPickerHeaderTrigger</span><span class=\"syn-punc\">(</span>monthName<span class=\"syn-punc\">) {</span> mode <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">.month</span> <span class=\"syn-punc\">}</span>\n    <span class=\"syn-type\">EBPickerHeaderTrigger</span><span class=\"syn-punc\">(</span>yearName<span class=\"syn-punc\">) {</span> mode <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">.year</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">Row</span><span class=\"syn-punc\">(</span>horizontalArrangement <span class=\"syn-eq\">=</span> <span class=\"syn-type\">Arrangement</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">spacedBy</span><span class=\"syn-punc\">(</span><span class=\"syn-num\">4</span><span class=\"syn-punc\">.</span>dp<span class=\"syn-punc\">)) {</span>\n    <span class=\"syn-type\">EBPickerHeaderTrigger</span><span class=\"syn-punc\">(</span>monthName<span class=\"syn-punc\">) {</span> mode <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Month</span> <span class=\"syn-punc\">}</span>\n    <span class=\"syn-type\">EBPickerHeaderTrigger</span><span class=\"syn-punc\">(</span>yearName<span class=\"syn-punc\">) {</span> mode <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Year</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as a button",
        "ios": "<code>Button</code> with <code>.accessibilityLabel(\"August, select month\")</code>",
        "android": "<code>Modifier.clickable(onClickLabel = \"Select month\")</code>"
      },
      {
        "requirement": "Tap area meets the minimum",
        "ios": "<code>.frame(minHeight: 44)</code> around the 24pt chip",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code>"
      },
      {
        "requirement": "Caret is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> on the chevron",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Turn the caret on wherever the chip opens a view.",
        "dontText": "Don't ship a bare chip that looks identical to a static label."
      },
      {
        "doText": "Keep both chips in Default while the calendar is on the day view.",
        "dontText": "Don't use Pressed to mark which view is open — that's a selection meaning on a momentary state."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Container</code> → <code>#text</code> plus an optional icon instance." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>State</code> replaced two booleans; <code>hasCaret</code> follows the boolean prefix convention with lowercase values." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Three surfaces and two text colours, all standard tokens." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A labelled button with an optional trailing icon." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "refine", "statusLabel": "Needs Refinement", "notes": "All three states present and the caret added. Outstanding: the 24px tap area." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The caret is a <code>Chevron Down</code> icon instance that recolours per state." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [
      { "aspect": "Property naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>State</code> and <code>hasCaret</code> map cleanly." },
      { "aspect": "Token coverage", "status": "ready", "statusLabel": "Ready", "notes": "All surfaces and text bound." },
      { "aspect": "Registration", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked until the native library exists." }
    ],
    "variants": {
      "total": 6,
      "description": "3 State × 2 hasCaret = 6 versions.",
      "columns": ["State", "hasCaret", "Surface", "Width"],
      "rows": [
        { "cells": ["Default", "false", "#F6F9FD", "57"] },
        { "cells": ["Pressed", "false", "#EEF2F9", "57"] },
        { "cells": ["Disabled", "false", "#FFFFFF", "57"] },
        { "cells": ["Default", "true", "#F6F9FD", "81"] },
        { "cells": ["Pressed", "true", "#EEF2F9", "81"] },
        { "cells": ["Disabled", "true", "#FFFFFF", "81"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "First assessment · node 6779:105937",
      "rows": [
        {
          "body": "<strong>C2 — <code>isDisabled</code> and <code>isPressed</code> collapsed into <code>State</code>.</strong> Interaction states belong on one setting, not on parallel booleans that permit combinations with no meaning.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — the single-value <code>Kind</code> setting removed.</strong> It offered only <code>Month</code>, with no <code>Year</code> counterpart.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C5 — <code>hasCaret</code> added.</strong> A <code>Chevron Down</code> instance now signals that the chip opens a view; it mutes with the label in Disabled.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C1 — <code>Label Container</code> renamed to <code>Container</code></strong>, matching the rest of the family.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C5 — the calendar header stopped using Pressed to mean selected.</strong> Both chips now render Default in Day mode.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C5 — tap area unchanged</strong> at 24px against 44/48 minimums.",
          "delta": { "kind": "open", "label": "C5 open" }
        }
      ]
    }
  ]
};
