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
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"7\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"/>\n      <circle cx=\"16\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\" stroke-dasharray=\"12 20\"/>\n      <circle cx=\"25\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"1.5\"/>\n    </svg>",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — collapse 9 sibling components into one <code>Stepper - Circular</code> with <code>steps</code> and <code>current</code> properties",
      "text": "Step count is a scalar — not a component axis. The current schema has 9 top-level components (2..10 steps) and inside each, 10 symbols of pre-rendered ring arcs. Every step count ships ~N PNGs. Rebuild as a single component: <code>steps: Int</code> (range 2–10) and <code>current: Int</code> (1..steps). Redraw the ring as a stroked SVG arc derived from <code>current / steps</code> so the fill scales with math, not image swaps. Native side maps to a custom <code>EBStepperCircular(current:total:)</code> rendered over an <code>HStack</code> / <code>Row</code> of <code>Circle</code> shapes with <code>.trim(from:to:)</code> or <code>drawArc</code>."
    }
  },
  "overview": {
    "inContextNote": "Stepper - Circular appears at the top of multi-step flows (onboarding, KYC, form wizards) to show position and total count. Consumers pair it with a screen title and step-specific content.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stepper-circular-demo-preview\"><div class=\"eb-preview eb-preview-stepper-circular\" style=\"display:flex;align-items:center;gap:20px;padding:12px 0;flex-wrap:wrap;justify-content:center;\"><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-dasharray=\"125.66370614359172 0\" stroke-dashoffset=\"31.41592653589793\" transform=\"rotate(-90 22.5 22.5)\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">1</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-dasharray=\"62.83185307179586 62.83185307179586\" stroke-dashoffset=\"31.41592653589793\" transform=\"rotate(-90 22.5 22.5)\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">2</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">3</span></div><div style=\"position:relative;width:45px;height:45px;display:inline-flex;align-items:center;justify-content:center;\"><svg width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" style=\"position:absolute;inset:0;\"><circle cx=\"22.5\" cy=\"22.5\" r=\"20\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"2.5\"></circle></svg><span style=\"position:relative;font:700 18px 'Proxima Soft', system-ui, sans-serif;color:#005CE5;letter-spacing:0.25px;\">4</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">steps</span><select id=\"stepper-circular-ctrl-steps\" class=\"demo-panel-select\" onchange=\"_stepperCircularUpdate()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">current</span><input type=\"range\" id=\"stepper-circular-ctrl-current\" class=\"demo-panel-select demo-panel-input\" min=\"1\" max=\"4\" step=\"1\" value=\"2\" oninput=\"_stepperCircularUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><span class=\"demo-panel-value\" id=\"stepper-circular-ctrl-value\">2 of 4</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Visually fits any multi-step flow, but the 9-sibling split forces consumers to swap components when step count changes, not just a prop."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Each step circle's ring arc renders via raster <code>&lt;img&gt;</code>. ~10 PNGs per sibling × 9 siblings ≈ 50+ assets for what should be one SVG arc with two parameters."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Step count modelled as 9 top-level components. Every other scalar in the DS (Badge counter, Progress Bar target) is a property, not a component family. Breaks the naming hierarchy — \"Stepper - Circular\" is not a component, it's nine."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Fixed 45-px circles at 20-px gaps fit most screen widths for 2–6 steps; at 7+ steps the total width exceeds a typical mobile canvas (410+ px). No responsive shrink or wrap behavior."
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
    "resolved": [],
    "open": [
      {
        "headline": "Step count is modeled as 9 sibling components instead of a <code>steps</code> prop.",
        "body": "Today the family ships as <code>Stepper - Circular - 2 Steps</code>, <code>… - 3 Steps</code>, … <code>… - 10 Steps</code> — 9 top-level components that differ only by hardcoded count. Every other design system exposes one <code>Stepper</code> with <code>steps: Int</code> (or <code>total: Int</code> + <code>current: Int</code>). 9× maintenance, 9× Code Connect mapping, and no path to N=11+ without adding a 10th file.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Step ring arcs are pre-rendered raster <code>&lt;img&gt;</code> assets, one per step index.",
        "body": "Each <code>number=N</code> symbol's ring is a baked PNG — the progressive fill is achieved by image swap, not by math. Blocks theming (can't retint), breaks at high DPI, and ships dozens of assets the native renderer doesn't need. Should be a stroked SVG arc with <code>strokeDasharray</code> (or <code>Circle().trim(from:to:)</code> on iOS, <code>drawArc</code> on Compose).",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Variant axis <code>number</code> encodes position, not a property.",
        "body": "The inner symbol uses <code>number = 1 | 2 | … | N</code> which both labels the circle (the displayed digit) and implicitly sets the ring-arc raster. Two concerns collapsed into one enum. Should be: <code>index: Int</code> (the number shown) and <code>status: completed | current | upcoming</code> (the visual).",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No native primitive is a 1:1 match — this needs a custom component.",
        "body": "SwiftUI has no built-in circular stepper; Material 3 shows only a linear <code>Stepper</code>. Both platforms require a custom <code>EBStepperCircular</code> built from a <code>Row</code>/<code>HStack</code> of <code>Circle</code>/<code>Box</code> shapes with arc-drawn progress. Today's raster baking makes this worse — the dev can't reuse the asset.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No pressed / focused / disabled state modeled.",
        "body": "Wizards often allow tapping a completed step to return to it. With no interaction states in Figma, the developer has to invent hover / pressed treatment and the designer has no reference.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the family collapses to one component and the raster arcs are replaced with vector strokes. Mapping 9 separate siblings would codify the anti-pattern into the tooling.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Collapse all 9 siblings into one <code>Stepper - Circular</code> with <code>steps</code> and <code>current</code> properties.",
        "body": "Delete <code>Stepper - Circular - 2 Steps</code> through <code>… - 10 Steps</code> as separate components. Create one <code>Stepper - Circular</code> with <code>steps: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</code> (enum) and <code>current: 1 | 2 | … | 10</code> — or, if Figma supports integer ranges, a numeric property. Variant math drops from 9 top-level components × ~10 step symbols = ~90 variant assets to 1 component with a runtime-computed arc. Native API: <code>EBStepperCircular(current: Int, total: Int)</code>.",
        "tag": "Family"
      },
      {
        "headline": "Split the inner symbol's <code>number</code> axis into <code>index</code> (digit shown) and <code>status</code> (ring treatment).",
        "body": "Today one enum does both. Separate them: <code>index: Int</code> for the label text and <code>status: completed | current | upcoming</code> for the ring fill. The outer component then computes status per slot from <code>current</code>.",
        "tag": "Property"
      },
      {
        "headline": "Replace raster ring arcs with stroked SVG / vector arcs.",
        "body": "Each step circle's ring should be a 2-px stroked circle with <code>stroke-dasharray</code> (or two half-circles via <code>trim</code>). Colors bound to <code>main/stepper/color/bg-track</code> (unfilled) and <code>main/stepper/color/bg</code> (filled). Same visual output, theme-able, resolution-independent, no PNG assets.",
        "tag": "Asset"
      },
      {
        "headline": "Add a <code>completed</code> visual state with a checkmark icon option.",
        "body": "Many wizards replace the digit with a check once a step is done. Today there's no variant for this — everything shows a number. Add <code>showCheckOnComplete: Bool</code> (or model it into the <code>status</code> enum as <code>completed-check</code>).",
        "tag": "State"
      },
      {
        "headline": "Add an <code>orientation</code> property for vertical layouts.",
        "body": "Long flows (8+ steps) don't fit a phone-width row. Vertical stacks are common for checkout or document review wizards. Add <code>orientation: horizontal | vertical</code> and spec the connector line between circles for both axes.",
        "tag": "Property"
      },
      {
        "headline": "Spec a connector line between circles.",
        "body": "Today the 9 sibling frames space circles with a 20-px gap but no visible connector. Most steppers draw a line from the trailing edge of one circle to the leading edge of the next, tinted to match completed (brand) vs upcoming (track) states. Add this to the spec — it's the difference between \"a row of circles\" and \"a stepper\".",
        "tag": "Property"
      },
      {
        "headline": "Rename layers <code>step-container</code> → <code>Ring</code> (and the ring arc layer → <code>Arc</code>).",
        "body": "\"step-container\" is a technical label; \"Ring\" is what a designer or developer searches for.",
        "tag": "Rename"
      },
      {
        "headline": "Build as a custom native component, not a ProgressView wrapper.",
        "body": "Neither SwiftUI <code>ProgressView</code> nor Material <code>LinearProgressIndicator</code> visually match this pattern. Ship a dedicated <code>EBStepperCircular</code>: iOS uses an <code>HStack</code> of <code>ZStack { Circle().stroke(track); Circle().trim(from:0,to:progress).stroke(fill); Text(index) }</code>; Android uses a <code>Row</code> of <code>Box(Modifier.size(45.dp))</code> with <code>Canvas</code> drawing <code>drawArc(sweepAngle = progress * 360f)</code>.",
        "tag": "Composition"
      },
      {
        "headline": "Announce \"Step X of Y\" to screen readers.",
        "body": "The component is decorative by default — assistive tech reads only the number. Wrap in a semantic container that announces <code>\"Step \\(current) of \\(total)\"</code> (SwiftUI <code>.accessibilityLabel</code>, Compose <code>Modifier.semantics { contentDescription = … }</code>).",
        "tag": "A11y"
      },
      {
        "headline": "Document the canonical composition and retire the sibling names.",
        "body": "Update the sticker sheet page to show one <code>Stepper - Circular</code> with property controls; add a migration note pointing <code>Stepper - Circular - N Steps</code> consumers to the new <code>steps</code> prop.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "stepper---circular-canonical-node-27:47768-(10-steps)-·-sibling-frames-27:47819…27:48036",
        "demoKey": "main",
        "demoControls": stepperCircularDemoControls,
        "title": "Stepper - Circular canonical node 27:47768 (10 Steps) · sibling frames 27:47819…27:48036",
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
            "label": "Properties (today)",
            "rows": [
              {
                "key": "Top-level component",
                "value": "Stepper - Circular - N Steps",
                "mono": true
              },
              {
                "key": "Inner symbol",
                "value": "number = 1 | 2 | … | N",
                "mono": true
              },
              {
                "key": "Ring implementation",
                "value": "raster &lt;img&gt;",
                "mono": true
              },
              {
                "key": "Layout",
                "value": "horizontal only",
                "mono": true
              },
              {
                "key": "steps",
                "value": "2 | 3 | … | 10",
                "mono": true
              },
              {
                "key": "current",
                "value": "1 | 2 | … | steps",
                "mono": true
              },
              {
                "key": "orientation",
                "value": "horizontal | vertical",
                "mono": true
              },
              {
                "key": "status (per slot)",
                "value": "completed | current | upcoming",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Step circle size",
                "value": "45 × 45",
                "mono": true
              },
              {
                "key": "Ring stroke width",
                "value": "~2 (raster-baked)",
                "mono": true
              },
              {
                "key": "Gap between circles",
                "value": "20 (space/space-20)",
                "mono": true
              },
              {
                "key": "Outer frame padding",
                "value": "20 vertical, 20 horizontal",
                "mono": true
              },
              {
                "key": "Total width (N steps)",
                "value": "45 × N + 20 × (N−1) + 40",
                "mono": true
              },
              {
                "key": "Height",
                "value": "85",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "DS style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size",
                "value": "18",
                "mono": true
              },
              {
                "key": "Line height",
                "value": "23",
                "mono": true
              },
              {
                "key": "Tracking",
                "value": "0.25",
                "mono": true
              },
              {
                "key": "Digits are center-aligned within the 45×45 circle.",
                "value": "",
                "mono": false
              }
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
