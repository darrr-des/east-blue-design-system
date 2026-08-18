import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/stepper-bullet.js`.
const stepperBulletDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Steps',
        prop: 'steps',
        defaultValue: '4',
        options: [
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
        label: 'Current',
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

export const stepperBullet: ComponentData = {
  "meta": {
    "slug": "stepper-bullet",
    "name": "Stepper",
    "node": "4337:11140",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4337-11140",
    "description": "A progress indicator for multi-step flows, in bullet, circular and dash forms. Merges the former Stepper - Bullet, Stepper - Circular and Stepper - Dash.",
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
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"9\" cy=\"16\" r=\"2.5\" fill=\"#005CE5\"/>\n      <circle cx=\"16\" cy=\"16\" r=\"2.5\" fill=\"#D2E5FF\"/>\n      <circle cx=\"23\" cy=\"16\" r=\"2.5\" fill=\"#D2E5FF\"/>\n    </svg>",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4337:11140</code> in the 2026 Working File as a single <strong>Stepper</strong>, merging the former Bullet, Circular and Dash components into <code>Type</code> × <code>Steps</code> × <code>Current</code> × <code>Status</code>. Step count is a property rather than sibling components, the ordinal position enum is now an integer, Status states exist where the originals had almost none, property naming follows the guidelines throughout, and the step markers are vectors. The full 2–10 range, the per-Type Status coverage and horizontal-only orientation are all deliberate. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Stepper - Bullet appears at the top or bottom of multi-step flows — most commonly paginated onboarding, swipeable carousels of tutorial cards, and photo galleries where the user needs a minimal position indicator without numerical labels.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stepper-bullet-demo-preview\"><div class=\"eb-preview eb-preview-stepper-bullet\" style=\"display:inline-flex;align-items:center;gap:8px;padding:4px 0;\"><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#005CE5;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#005CE5;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#D2E5FF;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#D2E5FF;\"></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">steps</span><select id=\"stepper-bullet-ctrl-steps\" class=\"demo-panel-select\" onchange=\"_stepperBulletUpdate()\"><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">current</span><input type=\"range\" id=\"stepper-bullet-ctrl-current\" class=\"demo-panel-select demo-panel-input\" min=\"1\" max=\"4\" step=\"1\" value=\"2\" oninput=\"_stepperBulletUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><span class=\"demo-panel-value\" id=\"stepper-bullet-ctrl-value\">2 of 4</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One component now covers all three visual forms and every step count from 2 to 10, where the same coverage previously took three components and twelve siblings between them."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, spacing and status colours, and the step markers are vector shapes bound to tokens rather than baked assets. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Type</code>, <code>Steps</code>, <code>Current</code> and <code>Status</code> are orthogonal and correctly named — <code>Type</code> is a §1 standard property, integers replace the old ordinal enum, and every value is Title Cased per §5."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into any multi-step flow, and all three visual forms share one API so a screen can switch between them without swapping components. Horizontal-only is a deliberate scope decision."
      }
    ],
    "behavior": [
      {
        "state": "Current step",
        "ios": "yes",
        "android": "yes",
        "property": "fill = bg",
        "notes": "Dot at <code>current</code> index fills in <code>main/stepper/color/bg</code> (#005CE5)."
      },
      {
        "state": "Other steps",
        "ios": "yes",
        "android": "yes",
        "property": "fill = bg-track",
        "notes": "All other dots fill in <code>main/stepper/color/bg-track</code> (#D2E5FF). Note: the spec does not distinguish completed vs upcoming — both look identical."
      },
      {
        "state": "Completed vs upcoming",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Bullet steppers in other systems often shade completed dots differently from upcoming ones. This family collapses both into the track color — direction of travel is lost."
      },
      {
        "state": "Clickable / interactive",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Used in carousels, some implementations let the user tap a dot to jump to that page. No pressed / focused state exists today."
      },
      {
        "state": "Connector line",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Classic Material / iOS bullet steppers draw a thin line between dots tinted to match completed / upcoming. This family uses blank 8-px gaps instead."
      }
    ],
    "resolved": [
      {
        "headline": "Three Stepper components merged into one.",
        "body": "v2.0: Rebuilt on node <code>4337:11140</code> in the 2026 Working File as a single <strong>Stepper</strong> set. Stepper - Bullet, Stepper - Circular and Stepper - Dash are now <code>Type = Bullet | Circular | Dash</code> — the unification all three assessments recommended independently. (C4 · Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Step count is a property, not sibling components.",
        "body": "v2.0: Bullet had three siblings and Circular nine, each hard-coding a step count; Dash encoded it as ten <code>propNStepper</code> booleans. All of that is now a single <code>Steps</code> axis. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Ordinal position replaced by an integer.",
        "body": "v2.0: The <code>highlighted = 1st | 2nd | … | Nth</code> ordinal enum is now <code>Current</code> carrying integers, which maps directly to a <code>currentStep: Int</code> parameter rather than needing a lookup table. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Status states added.",
        "body": "v2.0: <code>Status = Current | Completed | Upcoming | Error</code> now exists where none of the three originals distinguished completed from upcoming, and only Dash had any notion of error. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>Style</code> renamed to <code>Type</code>.",
        "body": "v2.1: §6 names <code>Style</code> explicitly as a catch-all to avoid, alongside <code>Configuration</code> and <code>Settings</code>. <code>Type</code> is a standard variant property from §1 and says the same thing without the anti-pattern. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "All variant values Title Cased.",
        "body": "v2.1: <code>Bullet | Circular | Dash</code> and <code>Current | Completed | Upcoming | Error</code> now follow §5, replacing the lowercase values. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Uneven Status coverage confirmed intentional.",
        "body": "v2.1: Closed by owner decision — Bullet carries only Current and Completed, Circular is almost entirely Current with single Completed and Upcoming entries, and Dash carries Error throughout. Each Type supports the statuses its usage actually calls for rather than filling out a uniform matrix. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Full 2–10 step range retained.",
        "body": "v2.1: Closed by owner decision, superseding an earlier intent to cap the range — the set keeps all <strong>225 variants</strong>. Figma cannot parameterise a repeating count, so enumerating every combination is the only way to make each one selectable; capping would mean any flow longer than the cap had no variant and a designer would have to detach. The cost is set size in Figma only — the native API takes <code>steps</code> and <code>current</code> as integers and has no such limit. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Dots and ring arcs confirmed as vectors.",
        "body": "v2.1: Confirmed by the component owner — the step markers are vector shapes, not the raster PNGs all three original assessments flagged. They recolour with tokens and stay crisp at any density. Not independently verifiable from the assessment tooling, whose response limit the node exceeds. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Horizontal-only orientation confirmed intentional.",
        "body": "v2.1: Closed by owner decision — Stepper ships horizontal only. An <code>Orientation</code> axis would multiply an already large set for a layout the product does not use, and vertical progress indication is better served by a different pattern than a rotated stepper. Revisit only if a long-flow screen genuinely calls for it. (Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema maps cleanly once one exists: <code>Type</code> as an enum, <code>Steps</code> and <code>Current</code> as integers, <code>Status</code> as an enum.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Announce \"Step X of Y\" to screen readers.",
        "body": "All three original assessments raised this and it is still unaddressed. A progress indicator that conveys position only visually is invisible to assistive technology — the native component should expose the position as an accessibility value.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "stepper-bullet",
        "demoKey": "bullet",
        "demoControls": stepperBulletDemoControls,
        "title": "Stepper - Bullet",
        "node": "27:48287",
        "description": "Horizontal row of N 8×8 dots with one dot filled in brand blue to indicate the current step. 3 hardcoded sibling frames today; target is one component with a <code>steps</code> prop.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"stepper-bullet-spec-1\"><div class=\"eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm\" style=\"padding:12px 0;\"><div class=\"eb-preview eb-preview-stepper-bullet\" style=\"display:inline-flex;align-items:center;gap:8px;padding:4px 0;\"><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#005CE5;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#005CE5;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#D2E5FF;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#D2E5FF;\"></span></div></div></div>",
        "sections": [
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Active dot", "value": "#005CE5", "token": "stepper/color/bg" },
              { "key": "Inactive dot", "value": "#D2E5FF", "token": "stepper/color/bg-track" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dot size",         "value": "8 × 8",          "mono": true },
              { "key": "Gap between dots", "value": "8",              "mono": true },
              { "key": "Corner radius",    "value": "full (circle)",  "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>currentStep<span class=\"syn-punc\">: </span>2<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebTotalSteps</span><span class=\"syn-punc\">(</span>5<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.bullet</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBStepper</span><span class=\"syn-punc\">(</span>\n    currentStep <span class=\"syn-eq\">=</span> 2<span class=\"syn-punc\">,</span>\n    totalSteps <span class=\"syn-eq\">=</span> 5<span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBStepperStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Bullet</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Stepper Bullet — Colors',
        description: 'Dot-style step indicator. Active dots are brand-blue; inactive dots are pale-blue.',
        rows: [
          { role: 'Active dot',   token: 'stepper/color/bg',        value: '#005CE5' },
          { role: 'Inactive dot', token: 'stepper/color/bg-track',  value: '#D2E5FF' },
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
          "figma": "<code>Stepper - Bullet - N Steps</code> (×3 siblings)",
          "swift": "<code>Stepper - Bullet</code> (single component)",
          "compose": "<code>EBStepperBullet</code>"
        },
        {
          "figma": "(implicit in sibling name)",
          "swift": "<code>steps: 3…10</code>",
          "compose": "<code>total: Int</code>"
        },
        {
          "figma": "<code>highlighted = 1st | … | Nth</code> (inner symbol)",
          "swift": "<code>current: 1…steps</code>",
          "compose": "<code>current: Int</code>"
        },
        {
          "figma": "(horizontal only)",
          "swift": "<code>orientation: horizontal | vertical</code>",
          "compose": "<code>orientation: Axis = .horizontal</code>"
        },
        {
          "figma": "(single track color for all non-current)",
          "swift": "<code>status: completed | current | upcoming</code> (per slot)",
          "compose": "(derived internally from <code>current</code>)"
        },
        {
          "figma": "(raster dot PNGs)",
          "swift": "Vector <code>Ellipse</code> fills",
          "compose": "<code>Circle().fill(...)</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Progress role",
        "ios": "Wrap the row in <code>.accessibilityElement(children: .ignore)</code> and expose one semantic label. Use <code>.accessibilityValue(\"Step \\(current) of \\(total)\")</code>.",
        "android": "Merge descendants via <code>Modifier.semantics(mergeDescendants = true)</code> with <code>contentDescription = \"Step $current of $total\"</code>."
      },
      {
        "requirement": "Value announcement",
        "ios": "VoiceOver reads \"Step 2 of 4\". Do not announce each dot individually — they're decorative at the unit level.",
        "android": "TalkBack reads the merged label. Update <code>stateDescription</code> when <code>current</code> changes to trigger re-announcement."
      },
      {
        "requirement": "Touch targets (if interactive)",
        "ios": "Dots are 8×8 — far below the 44×44 HIG minimum. If tappable, wrap each in a <code>Button</code> with an 18-px invisible hit-area padding on all sides.",
        "android": "Same. Wrap each dot in <code>Modifier.clickable().minimumInteractiveComponentSize()</code> so the 48-dp target is enforced."
      },
      {
        "requirement": "Contrast",
        "ios": "Active #005CE5 on white = 5.3:1 ✓. Inactive #D2E5FF on white = 1.2:1 — below the 3:1 non-text graphic threshold. Inactive dots rely on position + count to communicate, not contrast alone. Pair with announced label.",
        "android": "Same ratios. Same concern."
      },
      {
        "requirement": "Reduce motion",
        "ios": "If animating between <code>current</code> values, honor <code>UIAccessibility.isReduceMotionEnabled</code> and snap instead of cross-fading.",
        "android": "Honor <code>Settings.Global.ANIMATOR_DURATION_SCALE</code> and skip the animation when disabled."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Step count is modeled as 3 sibling components (<code>Stepper - Bullet - 3/4/5 Steps</code>) instead of a property. Collapse to a single <code>Stepper - Bullet</code> with <code>steps</code> + <code>current</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Nested <code>highlighted = 1st | 2nd | … | Nth</code> ordinal axis should become a top-level integer <code>current: 1..steps</code>. Ordinals don't compose across step counts."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fills bound to <code>main/stepper/color/bg</code> and <code>main/stepper/color/bg-track</code>. Padding bound to <code>space/space-4</code>, gap to <code>space/space-0</code>. Shared token set with Stepper - Circular and Stepper - Dash."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native primitive matches. Requires custom <code>EBStepperBullet</code> on both platforms. Unify with Dash + Circular under a shared <code>EBStepper(style:)</code> API."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No completed / upcoming differentiation, no pressed / focused / tappable state, no connector line, no vertical orientation. Every non-current dot is identical."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Dots are raster <code>&lt;img&gt;</code> PNGs — two per sibling (filled + track). Replace with vector <code>Ellipse</code> with token-bound fills. Trivial vector; no reason to bake as raster."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until 3 siblings collapse to one component and raster dots are replaced with vectors. Consider mapping through a unified <code>EBStepper(style: .bullet)</code> API."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "Today: <strong>3 sibling components</strong>, one per hardcoded step count, each with <code>N</code> <code>highlighted</code> variants (3+4+5 = <strong>12 pre-baked variants</strong>). Target: <strong>1 component</strong> with <code>steps: 3…10</code> and <code>current: 1…steps</code> as runtime properties; no pre-baked variants needed.",
      "columns": [
        "#",
        "Sibling component",
        "Node",
        "Frame (w × h)",
        "Highlighted variants"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>Stepper - Bullet - 3 Steps</code>",
            "<code>27:48235</code>",
            "80 × 128",
            "3 (<code>highlighted = 1st, 2nd, 3rd</code>)"
          ]
        },
        {
          "cells": [
            "2",
            "<code>Stepper - Bullet - 4 Steps</code>",
            "<code>27:48254</code>",
            "96 × 164",
            "4 (<code>highlighted = 1st, 2nd, 3rd, 4th</code>)"
          ]
        },
        {
          "cells": [
            "3",
            "<code>Stepper - Bullet - 5 Steps</code>",
            "<code>27:48287</code>",
            "112 × 200",
            "5 (<code>highlighted = 1st, 2nd, 3rd, 4th, 5th</code>)"
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
      "header": "Initial Assessment · canonical node 27:48287 (5 Steps) + 2 siblings (27:48254 4 Steps, 27:48235 3 Steps)",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Collapse 3 sibling components (<code>Stepper - Bullet - 3/4/5 Steps</code>) into one <code>Stepper - Bullet</code> with <code>steps: Int</code> and <code>current: Int</code> properties. Replace raster dot PNGs with vector ellipses. Long-term, unify with Dash + Circular under <code>EBStepper(style:)</code>. <span class=\"tag-open tag-c1 tag-c2 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C1 — Family structure</strong> — 3 top-level components differ only by hardcoded step count. Collapse into one component with a <code>steps</code> property. Same anti-pattern as Stepper - Circular. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Property shape</strong> — Nested <code>highlighted = 1st | 2nd | … | Nth</code> ordinal axis should become a top-level integer <code>current</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Native mapping</strong> — No native primitive matches. Requires custom <code>EBStepperBullet</code> on both platforms built over HStack/Row of Circle shapes. Consider unifying with Dash + Circular under <code>EBStepper(style:)</code>. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Missing states</strong> — No completed / upcoming distinction, no pressed / focused states for interactive carousels, no connector line, no vertical orientation. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster dots</strong> — Each 8×8 dot is a pre-baked PNG. Replace with vector <code>Ellipse</code> fills bound to <code>main/stepper/color/bg</code> and <code>main/stepper/color/bg-track</code>. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Mappings pending restructure. Mapping 3 separate siblings would codify the anti-pattern. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
