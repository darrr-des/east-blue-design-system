import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/stepper-dash.js`.
const stepperDashDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties (proposed)',
    rows: [
      {
        label: 'total',
        prop: 'total',
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
      {
        label: 'status',
        prop: 'status',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'default' },
          { value: 'success', label: 'success' },
          { value: 'error',   label: 'error' },
        ],
      },
    ],
  },
];

export const stepperDash: ComponentData = {
  "meta": {
    "slug": "stepper-dash",
    "name": "Stepper - Dash",
    "node": "18649:5223",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18649-5223",
    "description": "A flat segmented progress indicator — a row of rounded dashes where filled dashes mark current and earlier steps.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#005CE5\"/>\n      <rect x=\"11\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#005CE5\"/>\n      <rect x=\"19\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#D2E5FF\"/>\n      <rect x=\"27\" y=\"15\" width=\"2\" height=\"2\" rx=\"1\" fill=\"#D2E5FF\"/>\n    </svg>",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — merged into Stepper",
      "text": "This component no longer exists on its own. It is merged into <a href=\"/components/stepper-bullet\">Stepper</a> (node <code>4337:11140</code>), where its ten <code>propNStepper</code> booleans are now the <code>Steps</code> axis and the dash form is <code>Type=Dash</code>. Assessment for this pattern lives on the Stepper page."
    }
  },
  "overview": {
    "inContextNote": "Stepper - Dash sits above multi-step flows to tell the user where they are — KYC wizards, onboarding carousels, checkout funnels. The dashed format reads as \"position in a sequence\" rather than \"percent done\".",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stepper-dash-demo-preview\"><div class=\"eb-preview eb-preview-stepper-dash\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"1\" aria-valuemax=\"4\" aria-label=\"Step 2 of 4\" style=\"width:268px;display:flex;gap:4px;align-items:center;\"><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#005CE5;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#005CE5;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#D2E5FF;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#D2E5FF;\"></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">total</span><select id=\"stepper-dash-ctrl-total\" class=\"demo-panel-select\" onchange=\"_stepperDashUpdate()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">current</span><select id=\"stepper-dash-ctrl-current\" class=\"demo-panel-select\" onchange=\"_stepperDashUpdate()\"><option value=\"1\">1</option><option value=\"2\" selected=\"\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Figma (today)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">highlighted</span><span class=\"demo-panel-value\" id=\"stepper-dash-ctrl-highlighted\">2nd</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">visible slots</span><span class=\"demo-panel-value\" id=\"stepper-dash-ctrl-slots\">prop1–prop4 = true</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Historical rating from the standalone assessment. This component is merged into Stepper — see that page for current DS Health."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Historical rating from the standalone assessment. This component is merged into Stepper — see that page for current DS Health."
      },
      {
        "name": "Consistent",
        "rating": "warn",
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
        "state": "Default (current)",
        "ios": "yes",
        "android": "yes",
        "property": "highlighted=1st…10th",
        "notes": "Dashes 1…current fill <code>#005CE5</code>; dashes current+1…total fill <code>#D2E5FF</code>."
      },
      {
        "state": "Completed",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "No distinct \"all done\" state. Once <code>current === total</code> the final dash just reuses the same brand blue — consider a positive-green variant when the whole flow finishes successfully."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Flows that can fail mid-way (KYC rejected, upload failed) have no way to indicate which step errored. Add a per-dash <code>status</code> or a component-level error state."
      },
      {
        "state": "Tappable step",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Display-only today — no pressed or focused variant. If designers want to allow tapping a completed dash to return, that interaction needs spec'ing."
      }
    ],
    "resolved": [
      {
        "headline": "Merged into Stepper.",
        "body": "v2.0: Confirmed by the component owner — this no longer exists as a standalone component. It is merged into <a href=\"/components/stepper-bullet\">Stepper</a> (node <code>4337:11140</code>), where its ten <code>propNStepper</code> booleans are now the <code>Steps</code> axis and the dash form is <code>Type=Dash</code>. This page is kept as a pointer; all assessment for this pattern lives on Stepper. (Family)",
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
        "cardKey": "stepper-dash",
        "demoKey": "main",
        "demoControls": stepperDashDemoControls,
        "title": "Stepper - Dash",
        "node": "18649:5223",
        "description": "Horizontal row of equal-width rounded dashes. Dashes 1…<code>current</code> render in brand blue (<code>bg</code>); dashes <code>current+1</code>…<code>total</code> render in track blue (<code>bg-track</code>). All fills are real vector rectangles bound to stepper tokens.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"stepper-dash-spec-1\"><div class=\"eb-preview eb-preview-stepper-dash\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"1\" aria-valuemax=\"4\" aria-label=\"Step 2 of 4\" style=\"width:268px;display:flex;gap:4px;align-items:center;\"><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#005CE5;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#005CE5;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#D2E5FF;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#D2E5FF;\"></span></div></div>",
        "sections": [
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Filled dash", "value": "#005CE5", "token": "stepper/color/bg" },
              { "key": "Empty dash",  "value": "#D2E5FF", "token": "stepper/color/bg-track" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dash height",        "value": "4",           "mono": true },
              { "key": "Gap between dashes", "value": "4",           "mono": true },
              { "key": "Corner radius",      "value": "100 (pill)",  "mono": true },
              { "key": "Dash width",         "value": "flex-1",      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>currentStep<span class=\"syn-punc\">: </span>3<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebTotalSteps</span><span class=\"syn-punc\">(</span>7<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.dash</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>\n    currentStep <span class=\"syn-eq\">=</span> 3<span class=\"syn-punc\">,</span>\n    totalSteps <span class=\"syn-eq\">=</span> 7<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBStepperStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Dash</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Stepper Dash — Colors',
        description: 'Dash-style step indicator. Filled dashes are brand-blue; empty dashes are pale-blue.',
        rows: [
          { role: 'Filled dash', token: 'stepper/color/bg',       value: '#005CE5' },
          { role: 'Empty dash',  token: 'stepper/color/bg-track', value: '#D2E5FF' },
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
          "figma": "<code>highlighted: 1st | … | 10th</code>",
          "swift": "<code>current: Int (1…10)</code>",
          "compose": "<code>current: Int</code>"
        },
        {
          "figma": "<code>prop1Stepper…prop10Steppers</code> (Bool × 10)",
          "swift": "<code>total: Int (2…10)</code>",
          "compose": "<code>total: Int</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>status: default | success | error</code>",
          "compose": "<code>status: EBStepperStatus</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>orientation: horizontal | vertical</code>",
          "compose": "<code>axis: Axis</code>"
        },
        {
          "figma": "<code>bg</code> token",
          "swift": "unchanged",
          "compose": "<code>EBColors.stepperBg</code>"
        },
        {
          "figma": "<code>bg-track</code> token",
          "swift": "unchanged",
          "compose": "<code>EBColors.stepperTrack</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Progress role",
        "ios": "Expose as a single <code>.accessibilityElement()</code> with the <code>.progressbar</code> trait, value <code>Double(current) / Double(total)</code>, label <code>\"Step 2 of 4\"</code>.",
        "android": "Wrap in <code>Modifier.semantics { role = Role.ProgressBar; progressBarRangeInfo = ProgressBarRangeInfo(current.toFloat(), 0f..total.toFloat()) }</code>."
      },
      {
        "requirement": "Label announcement",
        "ios": "VoiceOver should read \"Step 2 of 4, 50%\". Localize the substitutions.",
        "android": "TalkBack same — use <code>stateDescription</code> for the \"Step X of Y\" phrasing."
      },
      {
        "requirement": "Non-decorative colors",
        "ios": "Brand blue on track blue is a 3.1:1 non-text contrast ratio — passes WCAG 1.4.11. OK.",
        "android": "Same ratio."
      },
      {
        "requirement": "Grouping",
        "ios": "Use <code>.accessibilityElement(children: .ignore)</code> so VoiceOver hears one unified announcement, not N dash descriptions.",
        "android": "Use <code>Modifier.semantics(mergeDescendants = true)</code>."
      },
      {
        "requirement": "Dynamic Type / text scale",
        "ios": "Stepper has no text, so Dynamic Type doesn't apply to the component itself. Labels paired above/below should scale.",
        "android": "Same — font scale applies to paired labels, not dashes."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Inner dash layers on slots 7–10 are all named <code>6th</code> (copy-paste bug). Otherwise clean."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>highlighted = 1st…10th</code> should be numeric <code>current</code>; 10 <code>propNStepper</code> booleans should collapse to <code>total: Int</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All fills bound to <code>main/stepper/color/bg</code> and <code>main/stepper/color/bg-track</code>. Gap uses <code>space/space-4</code>. Add <code>bg-positive</code> / <code>bg-negative</code> when status states land."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native primitive. Custom <code>HStack</code>/<code>Row</code> of rounded rectangles. Small composable, but must be owned by the DS."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only default two-tone. Missing completed/success, error, and (optional) tappable-step pressed/focused."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Pure vector rectangles — no raster assets. Resolution-independent, theme-able. Best-in-class for the Stepper family."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the ordinal enum and boolean slot flags collapse into <code>current</code> + <code>total</code>."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 10,
      "description": "A single <code>highlighted</code> axis with 10 ordinal values (<code>1st, 2nd, …, 10th</code>) = <strong>10 variants</strong>. Each variant additionally exposes 10 boolean <code>propNStepper</code> visibility flags (not counted in the variant total — they're instance props). The proposed architecture replaces all of them with <code>current: Int</code> + <code>total: Int</code>, producing <strong>9 × 10 = 90</strong> representable states with no boolean juggling.",
      "columns": [
        "#",
        "Node",
        "highlighted",
        "Dimensions",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18649:5224</code>",
            "<code>1st</code>",
            "268 × 4",
            "Dash 1 <code>bg</code>; 2–10 <code>bg-track</code>"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18649:5235</code>",
            "<code>2nd</code>",
            "268 × 4",
            "Dashes 1–2 <code>bg</code>; 3–10 <code>bg-track</code>"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18649:5246</code>",
            "<code>3rd</code>",
            "268 × 4",
            "Dashes 1–3 <code>bg</code>; 4–10 <code>bg-track</code>"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18649:5257</code>",
            "<code>4th</code>",
            "268 × 4",
            "Dashes 1–4 <code>bg</code>; 5–10 <code>bg-track</code>"
          ]
        },
        {
          "cells": [
            "5",
            "<code>18649:5268</code>",
            "<code>5th</code>",
            "268 × 4",
            "Dashes 1–5 <code>bg</code>; 6–10 <code>bg-track</code>"
          ]
        },
        {
          "cells": [
            "6",
            "<code>18649:5279</code>",
            "<code>6th</code>",
            "268 × 4",
            "Dashes 1–6 <code>bg</code>; 7–10 <code>bg-track</code>"
          ]
        },
        {
          "cells": [
            "7",
            "<code>18649:5290</code>",
            "<code>7th</code>",
            "268 × 4",
            "Dashes 1–7 <code>bg</code>; 8–10 <code>bg-track</code> · inner layer mislabel <code>6th</code>"
          ]
        },
        {
          "cells": [
            "8",
            "<code>18649:5301</code>",
            "<code>8th</code>",
            "268 × 4",
            "Dashes 1–8 <code>bg</code>; 9–10 <code>bg-track</code> · inner layer mislabel <code>6th</code>"
          ]
        },
        {
          "cells": [
            "9",
            "<code>18649:5312</code>",
            "<code>9th</code>",
            "268 × 4",
            "Dashes 1–9 <code>bg</code>; 10 <code>bg-track</code> · inner layer mislabel <code>6th</code>"
          ]
        },
        {
          "cells": [
            "10",
            "<code>18649:5323</code>",
            "<code>10th</code>",
            "268 × 4",
            "All 10 dashes <code>bg</code> · inner layer mislabel <code>6th</code>"
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
      "header": "Initial Assessment · node 18649:5223",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Collapse <code>highlighted = 1st…10th</code> + 10 <code>propNStepper</code> booleans into <code>current: Int</code> + <code>total: Int</code>. Asset quality already clean (pure vector). <span class=\"tag-open tag-c1 tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C1 — Layer naming</strong> — Dash layers at positions 7–10 are all labelled <code>6th</code> (copy-paste bug). Rename to <code>7th</code>…<code>10th</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Ordinal enum + boolean flags</strong> — <code>highlighted</code> is ordinal (<code>1st…10th</code>) where a number belongs; 10 <code>propNStepper</code> booleans emulate what should be <code>total: Int</code>. Rename and collapse. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Native mapping</strong> — No platform primitive matches. Requires custom <code>EBStepperDash</code> on both platforms. Consider unified <code>EBStepper(style:)</code> shared with Bullet and Circular. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Missing states</strong> — No completed-success, error, or tappable-step variants. Add <code>status: default | success | error</code> and optional pressed/focused. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Asset quality</strong> — Pure vector rectangles bound to <code>main/stepper/color/*</code> tokens. No raster. Ready. <span class=\"tag-recommend\">Ready</span>",
          "delta": {
            "kind": "partial",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until the schema collapses to <code>current</code> + <code>total</code>. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
