import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/stepper-circular.js`.
const stepperCircularDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties (proposed)',
    rows: [
      {
        label: 'steps',
        prop: 'steps',
        defaultValue: '4',
        options: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
          { value: '9', label: '9' },
          { value: '10', label: '10' },
        ],
      },
      {
        label: 'current',
        prop: 'current',
        defaultValue: '2',
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
          { value: '9', label: '9' },
          { value: '10', label: '10' },
        ],
      },
    ],
  },
];

export const stepperCircular: ComponentData = {
  "meta": {
    "slug": "stepper-circular",
    "name": "Stepper - Circular",
    "node": "27:47768",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-47768",
    "description": "A row of numbered circles whose ring arcs indicate progress through a multi-step flow.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"7\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"/>\n      <circle cx=\"16\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\" stroke-dasharray=\"12 20\"/>\n      <circle cx=\"25\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"1.5\"/>\n    </svg>",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — merged into Stepper",
      "text": "This component no longer exists on its own. It is merged into <a href=\"/components/stepper-bullet\">Stepper</a> (node <code>4337:11140</code>), where its nine step-count siblings are now the <code>Steps</code> axis and the circular form is <code>Type=Circular</code>. Assessment for this pattern lives on the Stepper page."
    }
  },
  "overview": {
    "inContextNote": "Stepper - Circular appears at the top of multi-step flows (onboarding, KYC, form wizards) to show position and total count. Consumers pair it with a screen title and step-specific content.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stepper-circular-demo-preview\"><div class=\"eb-preview eb-preview-stepper-circular\" style=\"display:flex;align-items:center;gap:20px;padding:12px 0;flex-wrap:wrap;justify-content:center;\"><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-dasharray=\"125.66370614359172 0\" stroke-dashoffset=\"31.41592653589793\" transform=\"rotate(-90 22.5 22.5)\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">1</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-dasharray=\"62.83185307179586 62.83185307179586\" stroke-dashoffset=\"31.41592653589793\" transform=\"rotate(-90 22.5 22.5)\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">2</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">3</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">4</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">steps</span><select id=\"stepper-circular-ctrl-steps\" class=\"demo-panel-select\" onchange=\"_stepperCircularUpdate()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">current</span><input type=\"range\" id=\"stepper-circular-ctrl-current\" class=\"demo-panel-select demo-panel-input\" min=\"1\" max=\"4\" step=\"1\" value=\"2\" oninput=\"_stepperCircularUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><span class=\"demo-panel-value\" id=\"stepper-circular-ctrl-value\">2 of 4</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Historical rating from the standalone assessment. This component is merged into Stepper — see that page for current DS Health."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Historical rating from the standalone assessment. This component is merged into Stepper — see that page for current DS Health."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Historical rating from the standalone assessment. This component is merged into Stepper — see that page for current DS Health."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Historical rating from the standalone assessment. This component is merged into Stepper — see that page for current DS Health."
      }
    ],
    "behavior": [
      {
        "state": "Completed step",
        "ios": "yes",
        "android": "yes",
        "property": "ring = full",
        "notes": "Step index &lt; current. Full ring fill in brand blue, number in brand blue."
      },
      {
        "state": "Current step",
        "ios": "yes",
        "android": "yes",
        "property": "ring = partial arc",
        "notes": "Step index = current. Arc fills <code>current / steps</code> of the ring; number in brand blue."
      },
      {
        "state": "Upcoming step",
        "ios": "yes",
        "android": "yes",
        "property": "ring = track only",
        "notes": "Step index &gt; current. Track-only ring in light blue; number still in brand blue."
      },
      {
        "state": "Clickable / interactive",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Some wizards let the user tap a completed step to go back. No pressed / focused state exists today; add if interactive behavior is desired."
      },
      {
        "state": "Vertical orientation",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Horizontal only. Vertical steppers (common on narrow screens or list layouts) would need a second orientation mode or a sibling."
      }
    ],
    "resolved": [
      {
        "headline": "Merged into Stepper.",
        "body": "v2.0: Confirmed by the component owner — this no longer exists as a standalone component. It is merged into <a href=\"/components/stepper-bullet\">Stepper</a> (node <code>4337:11140</code>), where its nine step-count siblings are now the <code>Steps</code> axis and the circular form is <code>Type=Circular</code>. This page is kept as a pointer; all assessment for this pattern lives on Stepper. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "stepper-circular",
        "demoKey": "main",
        "demoControls": stepperCircularDemoControls,
        "title": "Stepper - Circular",
        "node": "27:47768",
        "description": "Row of N 45×45 numbered circles, each with a ring that indicates position through the flow. 9 hardcoded sibling frames today; target is one component with a <code>steps</code> prop.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"stepper-circular-spec-1\"><div class=\"eb-preview eb-preview-stepper-circular\" style=\"display:flex;align-items:center;gap:20px;padding:12px 0;flex-wrap:wrap;justify-content:center;\"><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-dasharray=\"125.66370614359172 0\" stroke-dashoffset=\"31.41592653589793\" transform=\"rotate(-90 22.5 22.5)\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">1</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-dasharray=\"62.83185307179586 62.83185307179586\" stroke-dashoffset=\"31.41592653589793\" transform=\"rotate(-90 22.5 22.5)\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">2</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">3</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">4</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Step counts",
                "value": "2–10",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Circular",
                "mono": false
              },
              {
                "key": "Number style",
                "value": "Primary/Headlines/Block",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Active label", "value": "#005CE5", "token": "stepper/color/label" },
              { "key": "Active arc", "value": "#005CE5", "token": "stepper/color/bg" },
              { "key": "Inactive arc", "value": "#D2E5FF", "token": "stepper/color/bg-track" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Step circle size",    "value": "45 × 45", "mono": true },
              { "key": "Ring stroke width",   "value": "2",       "mono": true },
              { "key": "Gap between circles", "value": "20",      "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "DS style",    "value": "Primary/Headlines/Block", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",       "mono": true },
              { "key": "Size",        "value": "18",                      "mono": true },
              { "key": "Line height", "value": "23",                      "mono": true },
              { "key": "Tracking",    "value": "0.25",                    "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>currentStep<span class=\"syn-punc\">: </span>4<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebTotalSteps</span><span class=\"syn-punc\">(</span>10<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.circular</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>\n    currentStep <span class=\"syn-eq\">=</span> 4<span class=\"syn-punc\">,</span>\n    totalSteps <span class=\"syn-eq\">=</span> 10<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBStepperStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Circular</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Stepper Circular — Colors',
        description: 'Circular ring progress indicator with a numeric step label inside.',
        rows: [
          { role: 'Active label', token: 'stepper/color/label',    value: '#005CE5' },
          { role: 'Active arc',   token: 'stepper/color/bg',       value: '#005CE5' },
          { role: 'Inactive arc', token: 'stepper/color/bg-track', value: '#D2E5FF' },
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
          "figma": "<code>Stepper - Circular - N Steps</code> (×9 siblings)",
          "swift": "<code>Stepper - Circular</code> (single component)",
          "compose": "<code>EBStepperCircular</code>"
        },
        {
          "figma": "(implicit in sibling name)",
          "swift": "<code>steps: 2…10</code>",
          "compose": "<code>total: Int</code>"
        },
        {
          "figma": "(implicit in <code>number</code> variant)",
          "swift": "<code>current: 1…steps</code>",
          "compose": "<code>current: Int</code>"
        },
        {
          "figma": "<code>number = 1 | … | N</code> (inner symbol)",
          "swift": "<code>index: Int</code> + <code>status: completed | current | upcoming</code>",
          "compose": "(derived internally from <code>current</code>)"
        },
        {
          "figma": "(horizontal only)",
          "swift": "<code>orientation: horizontal | vertical</code>",
          "compose": "<code>orientation: Axis = .horizontal</code>"
        },
        {
          "figma": "(raster arc)",
          "swift": "Stroked SVG / Canvas arc",
          "compose": "<code>Circle().trim(from: 0, to: progress).stroke(...)</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Progress role",
        "ios": "Wrap the row in <code>.accessibilityElement(children: .ignore)</code> and expose a single label. Set <code>.accessibilityValue(\"Step \\(current) of \\(total)\")</code>.",
        "android": "Treat the row as a single semantic node via <code>Modifier.semantics(mergeDescendants = true)</code> with <code>contentDescription = \"Step $current of $total\"</code>."
      },
      {
        "requirement": "Value announcement",
        "ios": "VoiceOver reads \"Step 2 of 4\". Avoid announcing each circle individually — it's noisy and position-less.",
        "android": "TalkBack reads the merged label. Update <code>stateDescription</code> when <code>current</code> changes to trigger re-announcement."
      },
      {
        "requirement": "Icon-only digits",
        "ios": "The digit itself is already semantic. Ensure contrast: #005CE5 on white = 5.3:1 ✓",
        "android": "Same. Digit color passes WCAG AA for non-text graphics."
      },
      {
        "requirement": "Interactive steps",
        "ios": "If completed steps are tappable, wrap each in a <code>Button</code> with <code>.accessibilityHint(\"Tap to return to step \\(index)\")</code>. Pressed state inherits from the button.",
        "android": "Use <code>Modifier.clickable(onClickLabel = \"Return to step $index\")</code>. Ripple indication appears natively."
      },
      {
        "requirement": "Contrast",
        "ios": "Ring fill #005CE5 on track #D2E5FF = 3.1:1 — passes 3:1 for non-text graphics (WCAG 1.4.11). OK.",
        "android": "Same ratio."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Step count is modeled as 9 sibling components instead of a property. Collapse to a single <code>Stepper - Circular</code>. Also rename <code>step-container</code> → <code>Ring</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Inner <code>number</code> axis conflates digit label and ring-arc rendering. Split into <code>index</code> + <code>status</code> (and lift <code>current</code> / <code>steps</code> to the top-level component)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/stepper/color/{bg, bg-track, label}</code>. Typography bound to <code>Primary/Headlines/Block</code>. Gap bound to <code>space/space-20</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native primitive matches. Requires a custom <code>EBStepperCircular</code>. Today's raster arcs block direct primitive composition."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed / focused / disabled / tappable-completed state modeled. Missing vertical orientation and check-on-complete variants."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Ring arcs are raster <code>&lt;img&gt;</code> — one PNG per step index per sibling component. Replace with stroked SVG / Canvas arcs."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until 9 siblings collapse into one component and raster arcs are replaced with vector strokes."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "Today: <strong>9 sibling components</strong>, one per hardcoded step count. Each sibling contains <code>N</code> step symbols (<code>number = 1 … N</code>) with baked raster ring arcs. Sum of step symbols: 2+3+4+5+6+7+8+9+10 = <strong>54</strong> step symbols (+ 9 outer frames = ~63 nodes). Target: <strong>1 component</strong> with <code>steps: 2…10</code> and <code>current: 1…steps</code> as runtime properties; ring arcs drawn by math, not asset.",
      "columns": [
        "#",
        "Sibling component",
        "Node",
        "Frame width",
        "Step symbols"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>Stepper - Circular - 2 Steps</code>",
            "<code>27:48036</code>",
            "150",
            "2 (<code>number = 1, 2</code>)"
          ]
        },
        {
          "cells": [
            "2",
            "<code>Stepper - Circular - 3 Steps</code>",
            "<code>27:48020</code>",
            "215",
            "3"
          ]
        },
        {
          "cells": [
            "3",
            "<code>Stepper - Circular - 4 Steps</code>",
            "<code>27:47999</code>",
            "280",
            "4"
          ]
        },
        {
          "cells": [
            "4",
            "<code>Stepper - Circular - 5 Steps</code>",
            "<code>27:47973</code>",
            "345",
            "5"
          ]
        },
        {
          "cells": [
            "5",
            "<code>Stepper - Circular - 6 Steps</code>",
            "<code>27:47942</code>",
            "410",
            "6"
          ]
        },
        {
          "cells": [
            "6",
            "<code>Stepper - Circular - 7 Steps</code>",
            "<code>27:47906</code>",
            "475",
            "7"
          ]
        },
        {
          "cells": [
            "7",
            "<code>Stepper - Circular - 8 Steps</code>",
            "<code>27:47865</code>",
            "540",
            "8"
          ]
        },
        {
          "cells": [
            "8",
            "<code>Stepper - Circular - 9 Steps</code>",
            "<code>27:47819</code>",
            "605",
            "9"
          ]
        },
        {
          "cells": [
            "9",
            "<code>Stepper - Circular - 10 Steps</code>",
            "<code>27:47768</code>",
            "670",
            "10 (<code>number = 1…10</code>)"
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
      "header": "Initial Assessment · canonical node 27:47768 (10 Steps) + 8 siblings",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Collapse 9 sibling components (<code>Stepper - Circular - 2…10 Steps</code>) into one <code>Stepper - Circular</code> with <code>steps: Int</code> and <code>current: Int</code> properties. Replace raster ring arcs with stroked SVG / Canvas. <span class=\"tag-open tag-c1 tag-c2 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C1 — Family structure</strong> — 9 top-level components differ only by hardcoded step count. Collapse into a single component with a <code>steps</code> property. Rename <code>step-container</code> layer → <code>Ring</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Property shape</strong> — Inner <code>number = 1…N</code> conflates digit label and arc-fill rendering. Split into <code>index</code> (label) + <code>status</code> (ring treatment). Lift <code>current</code> and <code>steps</code> to the parent component. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Native mapping</strong> — No native primitive matches. Requires custom <code>EBStepperCircular</code> on both platforms built over HStack/Row of stroked circles. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Missing states</strong> — Add pressed / focused for interactive steps, vertical orientation, and check-on-complete option. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster arcs</strong> — Each step's ring is a pre-baked PNG. Replace with stroked SVG circles bound to <code>main/stepper/color/bg-track</code> and <code>main/stepper/color/bg</code>. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Mappings pending restructure. Mapping 9 separate siblings would codify the anti-pattern. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
