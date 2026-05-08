import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/progress-bar.js`.
const progressBarDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'determinate',
        options: [
          { value: 'determinate', label: 'determinate' },
          { value: 'indeterminate', label: 'indeterminate' },
          { value: 'success', label: 'success' },
          { value: 'error', label: 'error' },
        ],
      },
      {
        label: 'Progress',
        prop: 'progress',
        defaultValue: '60',
        options: [
          { value: '0', label: '0%' },
          { value: '15', label: '15%' },
          { value: '30', label: '30%' },
          { value: '45', label: '45%' },
          { value: '60', label: '60%' },
          { value: '75', label: '75%' },
          { value: '90', label: '90%' },
          { value: '100', label: '100%' },
        ],
      },
    ],
  },
];

export const progressBar: ComponentData = {
  "meta": {
    "slug": "progress-bar",
    "name": "Progress Bar",
    "node": "18577:13227",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-13227",
    "description": "A linear progress indicator showing completion percentage; supports determinate and indeterminate modes.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"14\" width=\"26\" height=\"4\" rx=\"2\" fill=\"#D2E5FF\"/>\n      <rect x=\"3\" y=\"14\" width=\"15\" height=\"4\" rx=\"2\" fill=\"#005CE5\"/>\n    </svg>",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — collapse 11 percentage variants into one component with a continuous <code>progress</code> value",
      "text": "Progress is a scalar — not an enum. The current schema cannot represent 37% or 62%, and every variant ships two raster PNGs for what should be two token-bound rectangles. Rebuild as a single component: <code>progress: Float</code> (0–1), <code>state: determinate | indeterminate | success | error</code>. Replace the raster <code>back</code> / <code>front</code> layers with vector strokes bound to <code>main/progress-bar/color/border-track</code> and <code>main/progress-bar/color/border</code>. Native side maps 1:1 to <code>ProgressView</code> / <code>LinearProgressIndicator</code>."
    }
  },
  "overview": {
    "inContextNote": "Progress Bar appears above or below task content to show completion — KYC steps, file upload progress, multi-step form wizards.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"progress-bar-demo-preview\"><div class=\"eb-preview eb-preview-progress-bar\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:280px;\"><span class=\"eb-preview-progress-bar__track\"></span><span class=\"eb-preview-progress-bar__fill\" style=\"width:45.0%;background:#005CE5;\"></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">progress</span><input type=\"range\" id=\"progress-bar-ctrl-progress\" class=\"demo-panel-select demo-panel-input\" min=\"0\" max=\"100\" step=\"1\" value=\"45\" oninput=\"_progressBarUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><span class=\"demo-panel-value\" id=\"progress-bar-ctrl-value\">45%</span></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"progress-bar-ctrl-state\" class=\"demo-panel-select\" onchange=\"_progressBarUpdate()\"><option value=\"determinate\" selected=\"\">determinate</option><option value=\"indeterminate\">indeterminate</option><option value=\"success\">success</option><option value=\"error\">error</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic task-progress primitive — fits anywhere a linear completion indicator is needed (KYC, uploads, wizards)."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Renders via raster <code>back</code> / <code>front</code> image layers instead of shape layers. Ships 11 PNGs worth of assets for what should be two rectangles."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Progress modelled as a discrete <code>percentage</code> enum with 11 variants — cannot express 37%, 62%, or any non-decile value. Every other slider-style value in the DS is continuous."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Fixed 312-px width with 2-px horizontal padding hugs a single canonical layout; doesn't stretch responsively inside a fill container today."
      }
    ],
    "behavior": [
      {
        "state": "Determinate",
        "ios": "yes",
        "android": "yes",
        "property": "percentage=0…100",
        "notes": "Fill grows left-to-right in 10% steps today. Should be continuous (0–1)."
      },
      {
        "state": "Indeterminate",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Not modeled in Figma. Native primitives support it out of the box — add a variant so designers can spec it."
      },
      {
        "state": "Success",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Green fill at 100%. Used to confirm the task completed cleanly (file uploaded, verification passed)."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Red fill at the point of failure. Used when the task fails mid-progress (upload retry, network dropped)."
      },
      {
        "state": "Buffered",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Compose supports a secondary buffered fill. Optional — only add if media streaming is a real use case."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Progress is an enum of 10% steps, not a value.",
        "body": "The Figma component exposes <code>percentage</code> as 11 discrete options (0, 10, 20, …, 100). Consumers can't spec 37% or animate smoothly — they must pick the closest variant. Every scalar value in the DS should be continuous.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Track and fill are raster PNGs.",
        "body": "The <code>back</code> and <code>front</code> layers are <code>&lt;img&gt;</code> assets, not shape layers. Blocks token-driven theming, breaks at non-1× resolutions, and ships 11 PNG pairs for what should be two rectangles.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Layer names are structural (<code>back</code> / <code>front</code>), not semantic.",
        "body": "Should be <code>Track</code> and <code>Fill</code> to match native parlance and make the inspector readable for handoff.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No indeterminate, success, or error state modeled.",
        "body": "Native <code>ProgressView</code> and <code>LinearProgressIndicator</code> both support indeterminate natively; product flows (KYC failure, upload retry) need success / error color states. Today Figma has only the determinate-blue variants.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Property name <code>percentage</code> reads as a unit, not a ratio.",
        "body": "Native APIs use <code>progress</code> as a 0–1 <code>Float</code>. Renaming to <code>progress</code> (with a 0–1 range, or 0–100 if kept as integer) aligns the DS with iOS / Compose conventions.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Cannot land until the progress value is parameterized and the raster layers are replaced with token-bound shapes.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Collapse 11 percentage variants into a single component with a continuous <code>progress</code> value.",
        "body": "Delete the <code>percentage = 0 | 10 | … | 100</code> enum. Expose <code>progress: Float</code> (0–1). In Figma, drive the fill width by layout — either a single variant with a layer the designer resizes, or a published component that lives as a native primitive on the dev side. Variant math drops from 11 to 1 (+ state).",
        "tag": "Property"
      },
      {
        "headline": "Replace raster <code>back</code> / <code>front</code> images with token-bound rectangles.",
        "body": "Two filled rectangles (or stroked lines) bound to <code>main/progress-bar/color/border-track</code> and <code>main/progress-bar/color/border</code>. Same visual output, theme-able, resolution-independent, no PNG pairs to ship.",
        "tag": "Asset"
      },
      {
        "headline": "Rename layers <code>back</code> → <code>Track</code> and <code>front</code> → <code>Fill</code>.",
        "body": "Matches native terminology (<code>track</code> / <code>tint</code> in SwiftUI, <code>trackColor</code> / <code>color</code> in Compose) and reads better in the inspector.",
        "tag": "Rename"
      },
      {
        "headline": "Add <code>state</code> variant: determinate / indeterminate / success / error.",
        "body": "Indeterminate is a looping animation designers should be able to spec. Success (positive green) and error (negative red) cover KYC / upload result states. Token references: <code>main/progress-bar/color/success</code> and <code>main/progress-bar/color/error</code> — add to the collection.",
        "tag": "State"
      },
      {
        "headline": "Reuse existing semantic color tokens for success / error.",
        "body": "Don't mint new hex values. Align with Alert / Badge semantic colors (<code>text/positive</code>, <code>text/negative</code>) so the progress fill reads the same as the rest of the system.",
        "tag": "Token"
      },
      {
        "headline": "Evaluate whether a bespoke <code>EBProgressBar</code> is needed at all.",
        "body": "SwiftUI <code>ProgressView(value:)</code> and Compose <code>LinearProgressIndicator</code> are 1:1 matches for this component. If the only custom requirement is token-bound colors, a lightweight theming wrapper suffices; otherwise use the native primitive directly. Document either way.",
        "tag": "Composition"
      },
      {
        "headline": "Make the component width-flexible.",
        "body": "Today it's locked to 312 px with 2-px horizontal padding. Spec as fill-container so a designer can drop it into any column width.",
        "tag": "Property"
      },
      {
        "headline": "Document accessibility expectations.",
        "body": "<code>role=\"progressbar\"</code>, <code>aria-valuenow</code> / <code>aria-valuemin</code> / <code>aria-valuemax</code> for determinate; announce a localized label for indeterminate (\"Loading…\"). Both native APIs handle this automatically, but the web/hybrid consumer needs the spec.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "determinate-nodes-27:64947-through-27:64985",
        "demoKey": "determinate",
        "demoControls": progressBarDemoControls,
        "title": "Determinate nodes 27:64947 through 27:64985",
        "node": "27:64947",
        "description": "Linear fill with a light-blue track and a brand-blue fill. The 11 Figma variants step through <code>percentage = 0, 10, 20, …, 100</code> — each variant swaps a pre-sized raster pair. The target implementation renders a single component with a continuous <code>progress</code> value.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"progress-bar-spec-1\"><div class=\"eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-xs\" style=\"padding:12px 0;\"><div class=\"eb-preview eb-preview-progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:280px;\"><span class=\"eb-preview-progress-bar__track\"></span><span class=\"eb-preview-progress-bar__fill\" style=\"width:60.0%;background:#005CE5;\"></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Mode",
                "value": "determinate",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "Progress",
                "value": "60%",
                "mono": false,
                "prop": "progress"
              },
              {
                "key": "Range",
                "value": "0–100%",
                "mono": false
              },
              {
                "key": "Track style",
                "value": "rounded",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Track", "value": "#D2E5FF", "token": "progress-bar/color/border-track" },
              { "key": "Fill", "value": "#005CE5", "token": "progress-bar/color/border" }
            ]
          },
          {
            "label": "Properties (today)",
            "rows": [
              {
                "key": "percentage",
                "value": "0 | 10 | 20 | … | 100",
                "mono": true
              },
              {
                "key": "Fill implementation",
                "value": "raster &lt;img&gt;",
                "mono": true
              },
              {
                "key": "Track implementation",
                "value": "raster &lt;img&gt;",
                "mono": true
              },
              {
                "key": "Width",
                "value": "312 (fixed)",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Total width",
                "value": "312",
                "mono": true
              },
              {
                "key": "Horizontal padding",
                "value": "2",
                "mono": true
              },
              {
                "key": "Inner track width",
                "value": "308",
                "mono": true
              },
              {
                "key": "Stroke height",
                "value": "4 (raster-baked)",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "0 (radius/radius-0)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
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
                "key": "Progress Bar is a graphic-only primitive; labels and percentage text are the consumer's responsibility.",
                "value": "",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBProgressBar</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>0.6<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBProgressBar</span><span class=\"syn-punc\">(</span>progress <span class=\"syn-eq\">=</span> 0.6f<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Track + Fill — Colors',
        description: 'Two-zone bar: a static track and an animated fill segment driven by the percentage variant.',
        rows: [
          { role: 'Track', token: 'progress-bar/color/border-track', value: '#D2E5FF' },
          { role: 'Fill',  token: 'progress-bar/color/border',       value: '#005CE5' },
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
          "figma": "<code>percentage: 0 | 10 | … | 100</code> (enum)",
          "swift": "<code>progress: Float (0–1)</code>",
          "compose": "<code>value: Double</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>state: determinate | indeterminate | success | error</code>",
          "compose": "<code>ProgressView()</code> (indeterminate) / <code>.tint(.green / .red)</code>"
        },
        {
          "figma": "(raster <code>back</code>)",
          "swift": "<code>Track</code> (vector, <code>border-track</code>)",
          "compose": "<code>.progressViewStyle(.linear)</code>"
        },
        {
          "figma": "(raster <code>front</code>)",
          "swift": "<code>Fill</code> (vector, <code>border</code>)",
          "compose": "<code>.tint(EBColors.progressFill)</code>"
        },
        {
          "figma": "312 fixed",
          "swift": "fill-container",
          "compose": "<code>.frame(maxWidth: .infinity)</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Progress role",
        "ios": "<code>ProgressView</code> exposes the progressbar trait automatically. Set <code>.accessibilityLabel(\"Verification progress\")</code> for context.",
        "android": "<code>LinearProgressIndicator</code> emits <code>ProgressBarInfo</code> via semantics automatically. Set <code>Modifier.semantics { contentDescription = \"Verification progress\" }</code>."
      },
      {
        "requirement": "Value announcement",
        "ios": "VoiceOver reads the current value (0–100%). For non-percentage ranges, use <code>.accessibilityValue(\"\\(step) of \\(total)\")</code>.",
        "android": "TalkBack reads the progress fraction. For custom phrasing, set <code>stateDescription</code>."
      },
      {
        "requirement": "Indeterminate",
        "ios": "Announce a localized label (\"Loading…\"). Avoid announcing a fake percentage.",
        "android": "Same — <code>LinearProgressIndicator()</code> with no <code>progress</code> lambda handles this natively."
      },
      {
        "requirement": "Contrast",
        "ios": "Fill #005CE5 on track #D2E5FF = 3.1:1 — passes 3:1 for non-text graphics (WCAG 1.4.11). OK.",
        "android": "Same ratio."
      },
      {
        "requirement": "Reduced motion",
        "ios": "Indeterminate animation should honor <code>UIAccessibility.isReduceMotionEnabled</code>. Native <code>ProgressView</code> does this automatically.",
        "android": "Native <code>LinearProgressIndicator</code> already respects <code>Animator.getDurationScale</code>."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Rename <code>back</code> → <code>Track</code>, <code>front</code> → <code>Fill</code>. Otherwise structurally clean."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>percentage</code> is a discrete enum; should be a continuous <code>progress: Float</code> (0–1)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Track + fill colors bound to <code>main/progress-bar/color/*</code>. Add <code>success</code> / <code>error</code> tokens once states are introduced."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps 1:1 to <code>ProgressView(value:)</code> / <code>LinearProgressIndicator</code>. No custom gesture or web-only patterns."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing indeterminate, success, error. Only determinate (in 10% steps) modeled today."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Track + fill are raster <code>&lt;img&gt;</code>. Replace with token-bound rectangles or vector strokes."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until progress is parameterized and rasters replaced."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 11,
      "description": "A single <code>percentage</code> axis with 11 discrete values (<code>0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</code>) = <strong>11 variants</strong>. The target architecture collapses this axis into a continuous <code>progress</code> value — variant count drops to <strong>1</strong> (plus the new <code>state</code> axis for indeterminate / success / error).",
      "columns": [
        "#",
        "Node",
        "percentage",
        "Fill width",
        "Layer pair"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>27:64947</code>",
            "<code>0</code>",
            "0 / 308",
            "back only (no front rendered)"
          ]
        },
        {
          "cells": [
            "2",
            "<code>27:64949</code>",
            "<code>10</code>",
            "~31 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "3",
            "<code>27:64953</code>",
            "<code>20</code>",
            "~62 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "4",
            "<code>27:64957</code>",
            "<code>30</code>",
            "~92 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "5",
            "<code>27:64961</code>",
            "<code>40</code>",
            "~123 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "6",
            "<code>27:64965</code>",
            "<code>50</code>",
            "~154 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "7",
            "<code>27:64969</code>",
            "<code>60</code>",
            "~185 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "8",
            "<code>27:64973</code>",
            "<code>70</code>",
            "~216 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "9",
            "<code>27:64977</code>",
            "<code>80</code>",
            "~246 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "10",
            "<code>27:64981</code>",
            "<code>90</code>",
            "~277 / 308",
            "back + front raster"
          ]
        },
        {
          "cells": [
            "11",
            "<code>27:64985</code>",
            "<code>100</code>",
            "308 / 308",
            "back + front raster"
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
      "header": "Initial Assessment · node 18577:13227",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Collapse 11 <code>percentage</code> variants into a single component with continuous <code>progress: Float</code> (0–1). Add <code>state</code> axis (determinate / indeterminate / success / error). Replace raster back/front with token-bound rectangles. <span class=\"tag-open tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C1 — Layer naming</strong> — Rename <code>back</code> → <code>Track</code> and <code>front</code> → <code>Fill</code>. Aligns with native terminology. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Continuous value</strong> — Replace <code>percentage: 0 | 10 | … | 100</code> enum with <code>progress: Float</code> (0–1). Renaming from <code>percentage</code> to <code>progress</code> aligns with iOS / Compose conventions. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — Missing states</strong> — Add indeterminate, success, error variants. Native <code>ProgressView</code> / <code>LinearProgressIndicator</code> support these out of the box. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster fills</strong> — Replace <code>&lt;img&gt;</code> back/front layers with token-bound rectangles using <code>main/progress-bar/color/border-track</code> and <code>main/progress-bar/color/border</code>. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Mappings pending restructure. Blocked until progress is parameterized and rasters replaced. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
