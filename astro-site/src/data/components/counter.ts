import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/counter.js`.
const counterDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'auto',
        options: [
          { value: 'auto', label: 'Auto (from count)' },
          { value: 'filled', label: 'Filled' },
          { value: 'empty', label: 'Empty' },
        ],
      },
      {
        label: 'With Limit',
        prop: 'withLimit',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'No (single integer)' },
          { value: 'yes', label: 'Yes (slash format)' },
        ],
      },
      {
        label: 'Count',
        prop: 'count',
        defaultValue: '5',
        options: [
          { value: '0', label: '0' },
          { value: '5', label: '5' },
          { value: '10', label: '10' },
          { value: '99', label: '99' },
          { value: '247', label: '247' },
        ],
      },
      {
        label: 'Limit',
        prop: 'limit',
        defaultValue: '10',
        options: [
          { value: '5', label: '5' },
          { value: '10', label: '10' },
          { value: '50', label: '50' },
          { value: '100', label: '100' },
        ],
      },
    ],
  },
];

export const counter: ComponentData = {
  "meta": {
    "slug": "counter",
    "name": "Counter",
    "node": "18482:71321",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-71321",
    "description": "A small numeric badge used to display unread or pending counts on icons and rows.",
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
    "verdict": {
      "kind": "fix",
      "title": "Fix — parameterize values and clean boolean naming",
      "text": "Both formats (single-integer + slash) belong. The fixes are: rename <code>with limit</code> → <code>hasLimit</code> with <code>true/false</code>; parameterize <code>count: Int</code> and <code>limit: Int?</code>; add <code>99+</code> overflow handling. Variant count stays at 4."
    }
  },
  "overview": {
    "inContextNote": "Counter appears inline with text to show counts — section headers for unread notifications, tab item badges for pending items, limit/slot usage displays.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"counter-demo-preview\"><span class=\"eb-preview eb-preview-counter eb-preview-counter--filled\">5</span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">count</span><input type=\"text\" id=\"counter-ctrl-count\" class=\"demo-panel-select demo-panel-input\" value=\"5\" oninput=\"_counterUpdate()\" placeholder=\"0\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">limit</span><input type=\"text\" id=\"counter-ctrl-limit\" class=\"demo-panel-select demo-panel-input\" value=\"10\" oninput=\"_counterUpdate()\" placeholder=\"10\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">maxDisplay</span><input type=\"text\" id=\"counter-ctrl-max\" class=\"demo-panel-select demo-panel-input\" value=\"99\" oninput=\"_counterUpdate()\" placeholder=\"99\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">with limit</span><select id=\"counter-ctrl-withlimit\" class=\"demo-panel-select\" onchange=\"_counterUpdate()\"><option value=\"no\" selected=\"\">no (single integer)</option><option value=\"yes\">yes (N / M slash)</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"counter-ctrl-state\" class=\"demo-panel-select\" onchange=\"_counterUpdate()\"><option value=\"auto\" selected=\"\">auto (from count)</option><option value=\"filled\">filled (override)</option><option value=\"empty\">empty (override)</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic count primitive — used across Section Header, Tab Item, and standalone notification contexts."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, color tokens, and radius. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "<code>with limit</code> uses <code>yes/no</code> strings instead of <code>true/false</code>. Count/limit values are hardcoded text — not usable for real counts without detaching."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Hugs content width, drops into any inline layout (Section Header, Tab Item) without manual sizing."
      }
    ],
    "behavior": [
      {
        "state": "Empty",
        "ios": "yes",
        "android": "yes",
        "property": "state=empty",
        "notes": "Count is 0. Muted label, same bg. Used to indicate \"nothing pending\"."
      },
      {
        "state": "Filled",
        "ios": "yes",
        "android": "yes",
        "property": "state=filled",
        "notes": "Count is greater than 0. Brand-blue label, same bg. Used when there's activity to surface."
      },
      {
        "state": "With limit",
        "ios": "yes",
        "android": "yes",
        "property": "with limit=yes",
        "notes": "Renders \"N / M\" (e.g. \"3 / 10\") — for slot/limit displays like \"beneficiaries used\"."
      },
      {
        "state": "Without limit",
        "ios": "yes",
        "android": "yes",
        "property": "with limit=no",
        "notes": "Renders a single integer. Used for unread counts, inbox badges."
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Counter is display-only — no interactive states."
      },
      {
        "state": "Overflow (99+)",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Real counts can exceed 99 (unread messages, notifications). Need overflow display (\"99+\") — not built today."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "<code>with limit</code> uses <code>yes/no</code> strings.",
        "body": "Should be <code>hasLimit: true/false</code> for direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Count and limit values are hardcoded text.",
        "body": "\"0 / 10\" and \"10 / 10\" are baked into each variant — consumers must detach to show any other value. Expose <code>count: Int</code> and <code>limit: Int?</code> as parameters so the component renders its own formatted string.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No overflow handling for large counts.",
        "body": "Inbox counts routinely exceed 99 (unread messages, notifications). The single-integer format needs \"99+\" display; the slash format needs equivalent overflow when count exceeds the limit. Not modeled today.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Trivial once parameterization and boolean rename land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename <code>with limit</code> to <code>hasLimit</code>.",
        "body": "Change values from <code>yes/no</code> strings to <code>true/false</code>. Aligns with the boolean naming convention used across the DS.",
        "tag": "Rename"
      },
      {
        "headline": "Expose <code>count</code> and <code>limit</code> as parameters.",
        "body": "<code>count: Int</code> (required) + <code>limit: Int?</code> (optional — activates slash format when set). Drop the text overrides; the component formats the string itself. Eliminates the \"detach to change the number\" anti-pattern.",
        "tag": "Property"
      },
      {
        "headline": "Derive <code>state</code> from <code>count</code>.",
        "body": "Empty when <code>count == 0</code>, filled otherwise. Removes one property the consumer has to set manually. Allow explicit override for edge cases.",
        "tag": "Property"
      },
      {
        "headline": "Add overflow handling for both formats.",
        "body": "Single-integer: <code>count &gt; maxDisplay</code> renders \"99+\". Slash format: <code>count &gt; limit</code> should clamp display or render \"limit+\" to prevent visual overflow. Pattern used in Material / Apple badges.",
        "tag": "State"
      },
      {
        "headline": "Document the two use cases.",
        "body": "Single-integer = <em>how many of X are there</em> (notifications, unread, pending). Slash format = <em>progress against capacity</em> (slots used, steps completed). Clarify in the spec so teams pick the right format.",
        "tag": "Docs"
      },
      {
        "headline": "Document Counter ↔ Badge relationship.",
        "body": "Counter = numeric (count, progress). Badge = status/tag label (Success, Premium). Teams reach for the wrong one without this guidance.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "empty-—-with-limit",
        "demoKey": "empty-limit",
        "demoControls": counterDemoControls,
        "title": "Empty — with limit",
        "node": "18482:71322",
        "description": "Slash format showing zero progress against a limit (\"0 / 10\"). Muted label on neutral bg. Used when no slots are filled yet.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"counter-spec-empty-limit\"><span class=\"eb-preview eb-preview-counter eb-preview-counter--empty\">0 / 10</span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "empty",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "with limit",
                "value": "yes",
                "mono": true,
                "prop": "withLimit"
              },
              {
                "key": "Example text",
                "value": "0 / 10",
                "mono": true,
                "prop": "example"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#EEF2F9", "mono": true, "token": "counter/color/empty/bg",
                "variants": { "state:filled": { "token": "counter/color/filled/bg" } }
              },
              { "key": "Label", "value": "#C2CFE5", "mono": true, "token": "counter/color/empty/label",
                "variants": { "state:filled": { "value": "#072592", "token": "counter/color/filled/label" } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "24",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0 × 8 (hug width)",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "99 (pill)",
                "mono": true
              },
              {
                "key": "Example width",
                "value": "53 (for \"0 / 10\")",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size / line-height",
                "value": "14 / 14",
                "mono": true
              },
              {
                "key": "Letter-spacing",
                "value": "+0.25",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCounter</span><span class=\"syn-punc\">(</span>count<span class=\"syn-punc\">: </span>0<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebLimit</span><span class=\"syn-punc\">(</span>99<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.empty</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCounter</span><span class=\"syn-punc\">(</span>\n    count <span class=\"syn-eq\">=</span> 0<span class=\"syn-punc\">,</span>\n    limit <span class=\"syn-eq\">=</span> 99<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCounterState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Empty</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "filled-—-with-limit",
        "demoKey": "filled-limit",
        "demoControls": counterDemoControls,
        "title": "Filled — with limit",
        "node": "18482:71324",
        "description": "Slash format with a filled count (\"10 / 10\"). Brand-blue label on neutral bg. Used when capacity is at or approaching the limit.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"counter-spec-filled-limit\"><span class=\"eb-preview eb-preview-counter eb-preview-counter--filled\">10 / 10</span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Filled",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Has limit",
                "value": "Yes",
                "mono": true,
                "prop": "withLimit"
              },
              {
                "key": "Char count",
                "value": "120 / 200",
                "mono": true,
                "prop": "example"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Counter color",
                "value": "#3C4A5C",
                "mono": true,
                "token": "main/counter/label"
              },
              {
                "key": "Limit color",
                "value": "#3C4A5C",
                "mono": true,
                "token": "main/counter/label"
              },
              {
                "key": "Separator color",
                "value": "#3C4A5C",
                "mono": true,
                "token": "main/counter/label"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding (top)",
                "value": "4",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "right",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Style",
                "value": "Caption/Regular",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft",
                "mono": true
              },
              {
                "key": "Size",
                "value": "12",
                "mono": true
              },
              {
                "key": "Line-height",
                "value": "16",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCounter</span><span class=\"syn-punc\">(</span>\n    count<span class=\"syn-punc\">: </span><span class=\"syn-type\">Int</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"120\"</span><span class=\"syn-punc\">)!</span><span class=\"syn-punc\">,</span>\n    limit<span class=\"syn-punc\">: </span><span class=\"syn-type\">Int</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"200\"</span><span class=\"syn-punc\">)!</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCounter</span><span class=\"syn-punc\">(</span>\n    count <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"120\"</span><span class=\"syn-punc\">,</span>\n    limit <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"200\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "single-integer",
        "demoKey": "single",
        "demoControls": counterDemoControls,
        "title": "Single integer",
        "node": "18482:71326",
        "description": "Standalone count — notifications, unread messages, pending items. Hugs tightly around the digit (24 × 24 for single digit, grows for 2+ digits). Empty state shown muted; filled state shown in brand-blue. Pairs with overflow handling (\"99+\") once <code>count</code> is parameterized.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"counter-spec-single\"><span class=\"eb-preview eb-preview-counter eb-preview-counter--filled\">5</span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "with limit",
                "value": "no",
                "mono": true,
                "prop": "withLimit"
              },
              {
                "key": "state",
                "value": "empty | filled",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Example text",
                "value": "0",
                "mono": true,
                "prop": "example"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Empty bg",
                "value": "#EEF2F9",
                "mono": true,
                "token": "counter/color/empty/bg"
              },
              {
                "key": "Empty label",
                "value": "#C2CFE5",
                "mono": true,
                "token": "counter/color/empty/label"
              },
              {
                "key": "Filled bg",
                "value": "#EEF2F9",
                "mono": true,
                "token": "counter/color/filled/bg"
              },
              {
                "key": "Filled label",
                "value": "#072592",
                "mono": true,
                "token": "counter/color/filled/label"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Min-width",
                "value": "24 (circle for single digit)",
                "mono": true
              },
              {
                "key": "Max-width",
                "value": "hug (grows with digit count)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0 × 8",
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
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCounter</span><span class=\"syn-punc\">(</span>count<span class=\"syn-punc\">: </span>5<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"bell\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCounter</span><span class=\"syn-punc\">(</span>\n    count <span class=\"syn-eq\">=</span> 5<span class=\"syn-punc\">,</span>\n    showLimit <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Empty / zero state
      buildStatelessColorsTable({
        title: 'Empty — Colors',
        description: 'Counter at zero — neutral grey chip with muted label.',
        rows: [
          { role: 'Background', token: 'counter/color/empty/bg',    value: '#EEF2F9' },
          { role: 'Label',      token: 'counter/color/empty/label', value: '#3C4A5C' },
        ],
      }),
      // Card 2 — Filled / numeric value
      buildStatelessColorsTable({
        title: 'Filled — Colors',
        description: 'Counter showing a numeric value on the same surface.',
        rows: [
          { role: 'Label',      token: 'main/counter/label',        value: '#3C4A5C' },
          { role: 'Background', token: 'counter/color/empty/bg',    value: '#EEF2F9' },
        ],
      }),
      // Card 3 — Active / accented
      buildStatelessColorsTable({
        title: 'Active — Colors',
        description: 'Active counter highlight (e.g. unread or pending).',
        rows: [
          { role: 'Background', token: 'counter/color/active/bg',    value: '#EEF2F9' },
          { role: 'Label',      token: 'counter/color/active/label', value: '#005CE5' },
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
          "figma": "(hardcoded text \"0 / 10\", \"10 / 10\")",
          "swift": "<code>count: Int</code>",
          "compose": "<code>count: Int</code>"
        },
        {
          "figma": "<code>with limit: yes | no</code>",
          "swift": "<code>limit: Int?</code> (nil = single-integer format; set = slash format)",
          "compose": "<code>limit: Int?</code>"
        },
        {
          "figma": "<code>state: empty | filled</code>",
          "swift": "<em>derived</em> from count (0 = empty, &gt;0 = filled)",
          "compose": "<em>auto</em>, with override"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>maxDisplay: Int = 99</code>",
          "compose": "<code>maxDisplay: Int = 99</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Context-aware label",
        "ios": "Set <code>.accessibilityLabel(\"5 unread messages\")</code> — screen readers should hear what the number means, not just the digits.",
        "android": "Set <code>contentDescription = \"5 unread messages\"</code>."
      },
      {
        "requirement": "Zero state",
        "ios": "When <code>count == 0</code>, default behavior (<code>hideWhenZero: true</code>) removes the pill from the accessibility tree entirely. Best practice — nothing to announce.",
        "android": "Same — hidden at zero by default."
      },
      {
        "requirement": "Overflow",
        "ios": "Announce the actual count, not \"99+\" — e.g. <code>\"247 unread\"</code>. The \"99+\" is a visual truncation, not the truth.",
        "android": "Same — screen reader gets the real number."
      },
      {
        "requirement": "Contrast",
        "ios": "Filled: #072592 on #EEF2F9 = 11.8:1 ✓. Empty: #C2CFE5 on #EEF2F9 = 1.4:1 — fails AA. Empty is decorative (shown only when the user opts out of <code>hideWhenZero</code>); don't use for counts that must be read.",
        "android": "Same ratios apply."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean one-layer structure (container + label)."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>with limit</code> → <code>hasLimit</code> (bool). Parameterize count/limit."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface + label bound to <code>main/counter/color/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to a tiny <code>EBCounter</code> view/composable — Text inside a Capsule."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Display-only — no interactive states needed. But overflow (\"99+\") for large counts is missing."
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
        "notes": "Trivial once parameterization + boolean rename land."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>state</code> (2) × <code>with limit</code> (2) = <strong>4 variants</strong>. Both formats are kept — they solve different problems: single-integer for counts, slash for progress.",
      "columns": [
        "#",
        "Node",
        "state",
        "with limit",
        "Format",
        "Example",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18482:71322</code>",
            "empty",
            "yes",
            "slash",
            "<code>0 / 10</code>",
            "53 × 24"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18482:71324</code>",
            "filled",
            "yes",
            "slash",
            "<code>10 / 10</code>",
            "59 × 24"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18482:71326</code>",
            "empty",
            "no",
            "single integer",
            "<code>0</code>",
            "25 × 24"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18482:71328</code>",
            "filled",
            "no",
            "single integer",
            "<code>0</code>",
            "24 × 24"
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
      "header": "Initial Assessment · node 18482:71321",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Keep both formats (single integer + slash). Rename <code>with limit</code> → <code>hasLimit</code>, parameterize <code>count</code> + <code>limit</code>, add <code>99+</code> overflow. Variant count stays at 4. <span class=\"tag-open tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C2 — Boolean naming</strong> — <code>with limit: yes/no</code> → <code>hasLimit: true/false</code>. Direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C2 — Parameterize values</strong> — Expose <code>count: Int</code> + <code>limit: Int?</code>; drop hardcoded text. Derive <code>state</code> from count. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — Overflow</strong> — Add <code>maxDisplay</code> (default 99); counts beyond render \"99+\" in single-integer format, and clamp in slash format. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Trivial once parameterization + rename land. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
