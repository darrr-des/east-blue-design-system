import type { ComponentData } from '../types';

export const stepperDash: ComponentData = {
  "meta": {
    "slug": "stepper-dash",
    "name": "Stepper - Dash",
    "node": "18649:5223",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18649-5223",
    "description": "A flat segmented progress indicator — a row of rounded dashes where filled dashes mark current and earlier steps.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#005CE5\"/>\n      <rect x=\"11\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#005CE5\"/>\n      <rect x=\"19\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#D2E5FF\"/>\n      <rect x=\"27\" y=\"15\" width=\"2\" height=\"2\" rx=\"1\" fill=\"#D2E5FF\"/>\n    </svg>",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — collapse the boolean slot flags and ordinal enum into <code>current: Int</code> + <code>total: Int</code>",
      "text": "Visually the component is already in great shape — vector dashes, token-bound fills, clean rounded geometry. The structural problem is the schema: <code>highlighted</code> is an ordinal enum (1st…10th) when it should be a number, and the 10 <code>propNStepper</code> booleans emulate what should be a single <code>total</code> scalar. Rebuild as one variant with <code>current: 1…10</code> and <code>total: 2…10</code>, and fix the duplicate <code>6th</code> layer name that covers positions 7–10. Native side stays a custom component (no platform primitive renders \"N equal-width dashes\" out of the box)."
    }
  },
  "overview": {
    "inContextNote": "Stepper - Dash sits above multi-step flows to tell the user where they are — KYC wizards, onboarding carousels, checkout funnels. The dashed format reads as \"position in a sequence\" rather than \"percent done\".",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stepper-dash-demo-preview\"><div class=\"eb-preview eb-preview-stepper-dash\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"1\" aria-valuemax=\"4\" aria-label=\"Step 2 of 4\" style=\"width:268px;display:flex;gap:4px;align-items:center;\"><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#005CE5;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#005CE5;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#D2E5FF;\"></span><span class=\"eb-preview-stepper-dash__slot\" style=\"background:#D2E5FF;\"></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">total</span><select id=\"stepper-dash-ctrl-total\" class=\"demo-panel-select\" onchange=\"_stepperDashUpdate()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">current</span><select id=\"stepper-dash-ctrl-current\" class=\"demo-panel-select\" onchange=\"_stepperDashUpdate()\"><option value=\"1\">1</option><option value=\"2\" selected=\"\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Figma (today)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">highlighted</span><span class=\"demo-panel-value\" id=\"stepper-dash-ctrl-highlighted\">2nd</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">visible slots</span><span class=\"demo-panel-value\" id=\"stepper-dash-ctrl-slots\">prop1–prop4 = true</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Applies to any 2–10 step linear flow. Hard-capped at 10 (the ordinal enum only goes up to 10th), so longer flows need a different component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Pure vector — rounded rectangles bound to <code>main/stepper/color/bg</code> and <code>main/stepper/color/bg-track</code>. No raster assets, no external dependencies."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Ordinal enum (<code>1st…10th</code>) where a number belongs; 10 boolean visibility flags where a scalar <code>total</code> belongs; layer names duplicate <code>6th</code> across positions 7–10."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Frame is 268 px wide with fill-container dashes, so it stretches inside a parent. Family-wise, Dash, Bullet, and Circular each ship independently; a unified <code>EBStepper(style:)</code> API would compose better."
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
    "resolved": [],
    "open": [
      {
        "headline": "Total step count encoded as 10 boolean props instead of an integer.",
        "body": "Ships <code>prop1Stepper…prop10Steppers</code> — ten toggles used as visibility flags for \"how many dashes to render\". To spec a 4-dash stepper a consumer flips four toggles on and six off; to change to 5 dashes they flip one more. Should be a single <code>total: Int</code> (or <code>total: 2 | 3 | … | 10</code> enum).",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>highlighted</code> is ordinal, not numeric.",
        "body": "<code>highlighted = 1st | 2nd | … | 10th</code> reads as a label, not a position. Native APIs and product code want an integer they can feed a <code>current / total</code> calculation — rename to <code>current</code> and switch to a numeric range.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Duplicate <code>6th</code> layer name across positions 7–10.",
        "body": "In the <code>highlighted=1st</code> variant, dash layers are labelled <code>1st</code>, <code>2nd</code>, <code>3rd</code>, <code>4th</code>, <code>5th</code>, <code>6th</code>, <code>6th</code>, <code>6th</code>, <code>6th</code>, <code>6th</code>. Looks like a copy-paste oversight when the component was extended from 6 to 10 slots. Rename to <code>7th</code>…<code>10th</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No native primitive matches.",
        "body": "Neither SwiftUI nor Material 3 ships a \"segmented dash\" progress indicator. Implementation is a custom <code>HStack</code>/<code>Row</code> of rounded rectangles — manageable, but the DS must own the composable and its theming.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No completed, error, or interactive state modeled.",
        "body": "Only the default two-tone (brand / track) rendering exists. Add variants for completed-successfully (green), error-at-step-N (red), and optionally pressed/focused if steps are tappable.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the ordinal enum and boolean visibility props collapse into <code>current</code> and <code>total</code>. Mapping today's schema would codify the anti-pattern.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Replace the 10 <code>propNStepper</code> booleans with a single <code>total</code> property.",
        "body": "Today a designer builds \"4-dash stepper\" by toggling <code>prop1Stepper=true, prop2=true, prop3=true, prop4=true, prop5..10=false</code>. Replace with <code>total: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</code>. Variant math drops from (10 ordinal × 2^10 boolean combos, nominally) to <strong>9 × 10 = 90</strong>, and more importantly the schema becomes legible — \"4 dashes, step 2 active\" instead of \"highlighted=2nd + 4 booleans on, 6 booleans off\".",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>highlighted = 1st…10th</code> to <code>current: 1…10</code>.",
        "body": "The property name reads as a Boolean (\"is highlighted?\") and the values read as rank labels. Both are wrong — the value is a numeric index. Rename to <code>current</code> and switch values from ordinal strings to integers so consumers can do <code>current / total</code> math.",
        "tag": "Rename"
      },
      {
        "headline": "Fix duplicated <code>6th</code> layer names on slots 7–10.",
        "body": "Rename the last four inner dash layers to <code>7th</code>, <code>8th</code>, <code>9th</code>, <code>10th</code> so the inspector and dev handoff read cleanly. Low-effort cleanup.",
        "tag": "Rename"
      },
      {
        "headline": "Add <code>status</code> states for completed, error, and loading.",
        "body": "Introduce an optional component-level <code>state: default | success | error</code> that repaints the whole row (green when the flow finishes, red when the current step errors). Indeterminate / loading is optional — a subtle pulsing animation on the current dash while an async step resolves. Tokens: <code>main/stepper/color/bg-positive</code>, <code>main/stepper/color/bg-negative</code>.",
        "tag": "State"
      },
      {
        "headline": "Unify Stepper - Dash, Stepper - Bullet, and Stepper - Circular into one <code>EBStepper</code> API.",
        "body": "All three render the same underlying data (<code>current</code>, <code>total</code>) and differ only in the visual treatment of each slot. On the native side, ship one <code>EBStepper(current:total:style:)</code> with <code>style: .dash | .bullet | .circular</code> instead of three separate components — the state, accessibility, and layout logic are identical across styles. Figma can keep three sibling records for the sticker sheet, but the API is one surface.",
        "tag": "Family"
      },
      {
        "headline": "Document a canonical \"dash height × total\" sizing chart.",
        "body": "The single frame is 268 px wide with 4-px dash height and 4-px gap. As <code>total</code> grows the individual dash width shrinks — at <code>total=10</code> each dash is ~22 px. Document the minimum sensible per-dash width and the component's fill behavior inside narrower parents.",
        "tag": "Docs"
      },
      {
        "headline": "Announce \"Step X of Y\" to screen readers.",
        "body": "Dashes are purely decorative — assistive tech sees nothing today. Wrap in a container with <code>accessibilityLabel = \"Step \\(current) of \\(total)\"</code> on iOS and <code>Modifier.semantics { contentDescription = … }</code> on Android.",
        "tag": "A11y"
      },
      {
        "headline": "Spec a vertical orientation for long flows.",
        "body": "With 10 dashes in a narrow column, individual dashes get uncomfortably short. Add <code>orientation: horizontal | vertical</code> so flows can stack top-to-bottom when horizontal width is constrained.",
        "tag": "Property"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "stepper---dash-component-set-18649:5223-·-variants-18649:5224…18649:5323",
        "title": "Stepper - Dash component set 18649:5223 · variants 18649:5224…18649:5323",
        "node": "18649:5223",
        "description": "Horizontal row of equal-width rounded dashes. Dashes 1…<code>current</code> render in brand blue (<code>bg</code>); dashes <code>current+1</code>…<code>total</code> render in track blue (<code>bg-track</code>). All fills are real vector rectangles bound to stepper tokens.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"stepper-dash-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Step count",
                "value": "up to 10",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Dash (segmented)",
                "mono": false
              },
              {
                "key": "Active marker",
                "value": "filled segment",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Filled dash",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Filled dash token",
                "value": "stepper/color/bg",
                "mono": true
              },
              {
                "key": "Empty dash",
                "value": "#D2E5FF",
                "mono": true
              },
              {
                "key": "Empty dash token",
                "value": "stepper/color/bg-track",
                "mono": true
              }
            ]
          },
          {
            "label": "Properties (today)",
            "rows": [
              {
                "key": "highlighted",
                "value": "1st | 2nd | … | 10th",
                "mono": true
              },
              {
                "key": "prop1Stepper…prop10Steppers",
                "value": "boolean × 10",
                "mono": true
              },
              {
                "key": "Dash implementation",
                "value": "vector rect (rounded)",
                "mono": true
              },
              {
                "key": "Frame width",
                "value": "268 (inner) · 308 (outer)",
                "mono": true
              },
              {
                "key": "current",
                "value": "1 | 2 | … | 10",
                "mono": true
              },
              {
                "key": "total",
                "value": "2 | 3 | … | 10",
                "mono": true
              },
              {
                "key": "status",
                "value": "default | success | error",
                "mono": true
              },
              {
                "key": "orientation",
                "value": "horizontal | vertical",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Outer frame",
                "value": "308 × 260 (canvas)",
                "mono": true
              },
              {
                "key": "Row width",
                "value": "268 (fill-container)",
                "mono": true
              },
              {
                "key": "Dash height",
                "value": "4 (space/space-4)",
                "mono": true
              },
              {
                "key": "Gap between dashes",
                "value": "4 (space/space-4)",
                "mono": true
              },
              {
                "key": "Row padding",
                "value": "0 (space/space-0)",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "100 (pill)",
                "mono": true
              },
              {
                "key": "Dash width",
                "value": "flex-1 (equal share of row)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "No text",
                "value": "—",
                "mono": true
              },
              {
                "key": "Label pairing",
                "value": "external",
                "mono": true
              },
              {
                "key": "Stepper - Dash is a graphic-only primitive; any \"Step X of Y\" label is the consumer's responsibility and should live in the accessible name.",
                "value": "",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>currentStep<span class=\"syn-punc\">: </span>3<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebTotalSteps</span><span class=\"syn-punc\">(</span>7<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.dash</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>\n    currentStep <span class=\"syn-eq\">=</span> 3<span class=\"syn-punc\">,</span>\n    totalSteps <span class=\"syn-eq\">=</span> 7<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBStepperStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Dash</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
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
