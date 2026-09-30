import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/counter.js`.
// Panel mirrors the property panel of set 4675:21497, in its order: two
// variant axes, the two text properties and one boolean.
const counterDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'disabled', label: 'Disabled' },
          { value: 'default',  label: 'Default' },
        ],
      },
      { label: 'hasLimit', prop: 'haslimit', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'Count', prop: 'count', control: 'input', defaultValue: '0', options: [] },
      { label: 'Limit', prop: 'limit', control: 'input', defaultValue: '10', options: [] },
      { label: 'hasOverflow', prop: 'hasoverflow', control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
    ],
  },
];

export const counter: ComponentData = {
  "meta": {
    "slug": "counter",
    "name": "Counter",
    "node": "4675:21497",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4675-21497",
    "description": "A small numeric badge used to display unread or pending counts on icons and rows.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4675:21497</code> in the 2026 Working File and cleared through v2.4. <code>State</code> and <code>hasLimit</code> follow the Property Naming Guidelines; all four variants are dimensionally consistent; every frame and text layer carries a correct semantic name (<code>Count</code> ×4, <code>Separator</code> ×2, <code>Limit</code> ×2, <code>Plus</code> ×2, <code>LimitGroup</code> ×2). <code>Count</code> and <code>Limit</code> are exposed as text properties and the <code>Overflow</code> affordance is property-bound. All four DS Health traits pass. The only item still open is Code Connect registration, blocked until the native library exists. Variant count stays at 4."
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
        "rating": "pass",
        "note": "<code>State</code> and <code>hasLimit</code> follow the Property Naming Guidelines, all four variants are dimensionally consistent, and every frame and text layer carries a correct, distinct semantic name — <code>Count</code>, <code>Separator</code>, <code>Limit</code>, <code>Plus</code>, <code>LimitGroup</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Hugs content width, drops into any inline layout (Section Header, Tab Item) without manual sizing."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Brand-blue label (#072592) on the neutral chip. The normal presentation."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted label (#C2CFE5) on the same bg. Documented as a disabled <em>context</em> — a Counter sitting inside a disabled row or field. Zero-count styling is no longer modeled as a variant; derive it from <code>count</code> in code."
      },
      {
        "state": "With limit",
        "ios": "yes",
        "android": "yes",
        "property": "hasLimit=True",
        "notes": "Renders \"N / M\" (e.g. \"3 / 10\") — for slot/limit displays like \"beneficiaries used\"."
      },
      {
        "state": "Without limit",
        "ios": "yes",
        "android": "yes",
        "property": "hasLimit=False",
        "notes": "Renders a single integer in a 24×24 circle. Used for unread counts, inbox badges."
      },
      {
        "state": "Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Counter is display-only — no interactive states."
      },
      {
        "state": "Overflow (99+)",
        "ios": "yes",
        "android": "yes",
        "property": "<code>Overflow</code> layer",
        "notes": "A hidden <code>Overflow</code> frame holding a <code>+</code> glyph sits in the two <code>hasLimit=False</code> circle variants only — it was removed from the slash format in v2.1. Single-integer clamps at <code>maxDisplay</code> (default 99) → \"99+\"; slash format clamps at <code>limit</code>. Clamping is handled in code."
      }
    ],
    "resolved": [
      {
        "headline": "<code>with limit</code> renamed to <code>hasLimit</code>.",
        "body": "v2.0: Rebuilt on node <code>4675:21497</code>. The property is now <code>hasLimit</code> with <code>True/False</code> values — a real Figma boolean toggle that maps directly to Swift <code>Bool</code> / Kotlin <code>Boolean</code>. The <code>State</code> axis was also recased to PascalCase, bringing both properties in line with the Property Naming Guidelines. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Applied — Rename recommendation shipped.",
        "body": "v2.0: Applied — <code>with limit: yes/no</code> → <code>hasLimit: True/False</code>, exactly as recommended. Logged here rather than in an Applied tab because <code>overview.appliedRecommendations</code> does not yet exist in the schema. (Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>State=Disabled</code> semantics confirmed.",
        "body": "v2.0: Closed by owner decision — <code>Disabled</code> describes the <em>control context</em> (a Counter sitting inside a disabled row or field), not a zero count. Zero-count styling is derived from <code>count</code> in code and is deliberately not modeled as a variant. This also settles the contrast question: the muted label (#C2CFE5 on #EEF2F9, 1.4:1) is disabled text, which WCAG 1.4.3 exempts. (Docs)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Overflow clamp rule settled.",
        "body": "v2.0: Closed by owner decision — no further spec work required. Single-integer format clamps at <code>maxDisplay</code> (default 99) and renders \"99+\"; slash format clamps at <code>limit</code> when <code>count &gt; limit</code>. Handled in code; the Figma <code>Overflow</code> layer only supplies the <code>+</code> glyph. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Two use cases documented.",
        "body": "v2.0: Closed — single-integer answers <em>how many of X are there</em> (notifications, unread, pending); slash format shows <em>progress against capacity</em> (slots used, steps completed). Captured in the Behavior table and the Style tab; no further action. (Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Counter ↔ Badge relationship documented.",
        "body": "v2.0: Closed — Counter is numeric (a count or progress); Badge is a status or tag label (Success, Premium). Teams pick by whether the content is a number. No further action. (Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>Disabled</code> variant width evened up.",
        "body": "v2.1: <code>State=Disabled, hasLimit=True</code> went from 61 × 24 to <code>53 × 24</code>, matching its <code>Default</code> sibling for identical content; the component set narrowed from 109 to 101. Achieved by removing the <code>Overflow</code> frame from the slash-format variants rather than excluding it from layout. Instances no longer jump 8px when switching state. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Count and separator layers renamed.",
        "body": "v2.1: Applied — all four count layers are now <code>Count</code> (<code>4675:21499</code> · <code>4675:21503</code> · <code>4675:22735</code> · <code>4675:21509</code>) and both slash glyphs are <code>Separator</code> (<code>4675:21500</code> · <code>4675:21504</code>). The property surface is legible for the first time. Two limit layers were misnamed in the same sweep — tracked as an open issue. (Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Overflow glyph layers renamed to <code>Plus</code>.",
        "body": "v2.2: <code>4681:19238</code> and <code>4681:19235</code> went from <code>#overflow-value</code> to <code>Plus</code> — PascalCase, no hash prefix, per the Property Naming Guidelines. Every layer in the two circle variants now carries a correct semantic name. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Text layer naming complete.",
        "body": "v2.3: <code>4675:21501</code> and <code>4675:21505</code> renamed to <code>Limit</code>, resolving the duplicate-<code>Count</code> collision in the slash-format variants. Every text layer in the set now carries a correct, distinct semantic name — <code>Count</code> ×4, <code>Separator</code> ×2, <code>Limit</code> ×2, <code>Plus</code> ×2 — verified by characters, not position. Closes the C1 naming issue opened at initial assessment. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Container</code> renamed to <code>LimitGroup</code>.",
        "body": "v2.4: <code>4675:23030</code> and <code>4675:23007</code> renamed from the generic <code>Container</code> to <code>LimitGroup</code>. Every frame and text layer in the set now carries a semantic name — C1 is fully clean. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Text properties confirmed exposed.",
        "body": "v2.4: Closed on owner confirmation — <code>Count</code> and <code>Limit</code> are exposed as text properties, so consumers set values without detaching. This closes the \"hardcoded text\" issue raised at initial assessment. Not independently verifiable from the read-only assessment tooling, which cannot read component property definitions. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>Overflow</code> layer binding confirmed.",
        "body": "v2.4: Closed on owner confirmation — the <code>Overflow</code> frames in the two <code>hasLimit=False</code> circle variants (<code>4681:19237</code> · <code>4681:19234</code>) are property-bound, not manual visibility overrides. Their removal from the slash-format variants in v2.1 was deliberate, and resolves the nonsensical <code>0 / 10+</code> rendering. Clamping stays in code. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the native library exists. Everything upstream is ready: <code>State</code> maps to a two-value enum, <code>hasLimit</code> to a <code>Bool</code>, and <code>Count</code> / <code>Limit</code> to text parameters. Registration is mechanical once there is a component to link to.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "ctr-spec-main",
        "demoKey": "main",
        "title": "Counter",
        "node": "4675:21497",
        "description": "A 24-tall pill showing a count, optionally against a limit. It hugs its digits — 53 wide at “0 / 10”, a 24 circle with the count alone.",
        "previewHtml": "<div id=\"counter-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": counterDemoControls,
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
                "key": "hasLimit",
                "value": "True",
                "prop": "haslimit"
              },
              {
                "key": "Count",
                "value": "0",
                "prop": "count"
              },
              {
                "key": "Limit",
                "value": "10",
                "prop": "limit",
                "variants": {
                  "haslimit:false": {
                    "value": "—"
                  }
                }
              },
              {
                "key": "hasOverflow",
                "value": "False",
                "prop": "hasoverflow",
                "variants": {
                  "haslimit:true": {
                    "value": "— only without a limit"
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "4675:21502 · 53 × 24",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Pill",
                "value": "#EEF2F9",
                "token": "—",
                "swatch": "#EEF2F9"
              },
              {
                "key": "Text",
                "value": "#072592",
                "token": "—",
                "swatch": "#072592",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "53 × 24",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Height",
                "value": "24 — fixed",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "99 — pill",
                "mono": true,
                "variants": {
                  "haslimit:false": {
                    "value": "Full — a 24 circle"
                  }
                }
              },
              {
                "key": "Padding",
                "value": "8 horizontal",
                "mono": true,
                "variants": {
                  "haslimit:false": {
                    "value": "7.5 horizontal — the circle is exactly 24"
                  }
                }
              },
              {
                "key": "Gap",
                "value": "4 between Count, / and Limit",
                "mono": true,
                "variants": {
                  "haslimit:false": {
                    "value": "4 before the + when hasOverflow"
                  }
                }
              },
              {
                "key": "Width",
                "value": "Hugs the digits",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Count / Separator / Limit",
                "value": "Primary/Label/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "EBCounter(0, limit: 10)",
        "compose": "EBCounter(\n    count = 0,\n    limit = 10\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on the four variants of set <code>4675:21497</code>; hasLimit does not change them. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Pill",
            "token": "—",
            "values": [
              "#EEF2F9",
              "#EEF2F9"
            ]
          },
          {
            "role": "Count / Separator / Limit",
            "token": "—",
            "values": [
              "#072592",
              "#C2CFE5"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:counter:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.counter.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4675:21497</code>, in panel order. <code>hasLimit</code> is really “was a limit passed”, and <code>hasOverflow</code> applies only when none was.",
      "rows": [
        {
          "figma": "State — Default, Disabled",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "hasLimit — True, False",
          "swift": "pass <code>limit:</code> or omit it",
          "compose": "<code>limit: Int? = null</code>"
        },
        {
          "figma": "Count — text",
          "swift": "<code>EBCounter(_ count: Int)</code>",
          "compose": "<code>count: Int</code>"
        },
        {
          "figma": "Limit — text",
          "swift": "<code>limit: Int?</code>",
          "compose": "<code>limit: Int?</code>"
        },
        {
          "figma": "hasOverflow — boolean",
          "swift": "<code>.ebOverflow(true)</code> — appends “+”",
          "compose": "<code>overflow: Boolean = false</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Counter/EBCounter.swift",
        "compose": "android/components/counter/EBCounter.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "With a limit",
        "swift": "<span class=\"cmt\">// State=Default, hasLimit=True — 4675:21502, 53 × 24.</span>\nEBCounter(3, limit: 10)",
        "compose": "<span class=\"cmt\">// State=Default, hasLimit=True — 4675:21502, 53 × 24.</span>\nEBCounter(\n    count = 3,\n    limit = 10\n)"
      },
      {
        "subheading": "Count alone",
        "swift": "<span class=\"cmt\">// State=Default, hasLimit=False — 4675:21508, a 24 circle.</span>\nEBCounter(3)",
        "compose": "<span class=\"cmt\">// State=Default, hasLimit=False — 4675:21508, a 24 circle.</span>\nEBCounter(count = 3)"
      },
      {
        "subheading": "Overflow",
        "swift": "<span class=\"cmt\">// hasLimit=False, hasOverflow=True — the count is followed by “+”.</span>\nEBCounter(99)\n    .ebOverflow(true)",
        "compose": "<span class=\"cmt\">// hasLimit=False, hasOverflow=True — the count is followed by “+”.</span>\nEBCounter(\n    count = 99,\n    overflow = true\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// State=Disabled, hasLimit=True — 4675:21498; the text drops to #C2CFE5 and the pill stays #EEF2F9.</span>\nEBCounter(0, limit: 10)\n    .disabled(true)",
        "compose": "<span class=\"cmt\">// State=Disabled, hasLimit=True — 4675:21498; the text drops to #C2CFE5 and the pill stays #EEF2F9.</span>\nEBCounter(\n    count = 0,\n    limit = 10,\n    enabled = false\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Read as a value",
        "ios": "Attach it to what it counts — <code>.accessibilityValue(\"3 of 10\")</code> on the row, not a separate element.",
        "android": "Append it to the row’s <code>stateDescription</code>."
      },
      {
        "requirement": "Spell the limit",
        "ios": "“3 of 10”, not “3 slash 10”.",
        "android": "Same — do not let the separator be read literally."
      },
      {
        "requirement": "Overflow",
        "ios": "“99 plus” — announce the plus, it changes the meaning.",
        "android": "Same."
      },
      {
        "requirement": "Not interactive",
        "ios": "A counter is a readout; do not attach a tap to it.",
        "android": "No <code>clickable</code> on the pill."
      },
      {
        "requirement": "Contrast",
        "ios": "#072592 on #EEF2F9 is 11.87:1. Disabled #C2CFE5 on #EEF2F9 is 1.42:1 — unreadable, though that is the point of a disabled readout.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the limit form when there is a cap the user is working towards.",
        "dontText": "Don’t show a limit the user cannot affect."
      },
      {
        "doText": "Use hasOverflow for a count past what the space can show — 99+.",
        "dontText": "Don’t pair the “+” with a limit; the set has no such variant."
      },
      {
        "doText": "Keep it to counts and progress, as the component description says.",
        "dontText": "Don’t use it as a badge for status words — that is Badge."
      },
      {
        "doText": "Let the pill hug; it grows with the digits.",
        "dontText": "Don’t pad it to a fixed width in code."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Count</code>, <code>Separator</code>, <code>LimitGroup</code> / <code>Limit</code> and <code>Overflow</code> / <code>Plus</code> — every layer says what it holds."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State</code> and <code>hasLimit</code> are variant axes while <code>hasOverflow</code> is a boolean, though all three change what renders; and <code>hasLimit</code> only restates whether a Limit value was given."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The text layers resolve <code>matched</code> to <code>Primary/Label/Small</code>. Three colour values are hard-coded; no bindings can be read."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to one <code>EBCounter</code> taking a count, an optional limit and an overflow flag."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A readout; Disabled is the only state and it is inherited from the control it sits in."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons or assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Two axes, two text properties and one boolean are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>State</code> (2) × <code>hasLimit</code> (2) = 4 variants, all built. <code>Count</code>, <code>Limit</code> and <code>hasOverflow</code> add none; the pill hugs whatever the digits measure.",
      "columns": [
        "State",
        "hasLimit",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "True",
            "<code>4675:21502</code>",
            "53 × 24"
          ]
        },
        {
          "cells": [
            "Default",
            "False",
            "<code>4675:21508</code>",
            "24 × 24"
          ]
        },
        {
          "cells": [
            "Disabled",
            "True",
            "<code>4675:21498</code>",
            "53 × 24"
          ]
        },
        {
          "cells": [
            "Disabled",
            "False",
            "<code>4675:22734</code>",
            "24 × 24"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Padding differs between the two shapes · node 4675:21497",
      "rows": [
        {
          "body": "<strong>The count-only circle pads 7.5 a side, not 8.</strong> 7.5 + 9 + 7.5 is the 24 Figma reports; the limit pill pads 8 (8 + 9 + 4 + 5 + 4 + 15 + 8 = 53). The preview had both at 8 and drew the circle a pixel wide.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Widths beyond the sample copy are computed.</strong> The set ships “0” and “0 / 10” only, so a longer count grows from those paddings rather than from a second measurement. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 4675:21497",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>State</code>, <code>hasLimit</code>, the <code>Count</code> and <code>Limit</code> inputs and <code>hasOverflow</code>. The three cards on retired nodes <code>18482:71322</code>, <code>71324</code> and <code>71326</code> are replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 24 tall at 8 padding with 4 gaps: 53 × 24 at “0 / 10”, a 24 circle with the count alone. It hugs the digits, so typing a longer count widens it.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Colours read per State.</strong> The #EEF2F9 pill does not change; the text goes #072592 → #C2CFE5 when Disabled.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> Count, Separator and Limit all match <code>Primary/Label/Small</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:counter:2.0.0</code>, a five-row mapping, four snippets and a four-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong><code>hasOverflow</code> only applies without a limit.</strong> The “+” sits beside the count in the no-limit variant, so the panel locks it when hasLimit is on. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Three ways to say the same thing.</strong> <code>hasLimit</code> is a variant axis, <code>hasOverflow</code> a boolean and <code>Limit</code> a text property — natively passing a limit is the only signal needed. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the earlier assessment.</strong> <span class=\"tag-open\">Open</span>",
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
