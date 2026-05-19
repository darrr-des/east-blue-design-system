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
    "name": "Stepper - Bullet",
    "node": "27:48287",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-48287",
    "description": "A row of dot markers indicating progress through a multi-step flow, with the current step using a larger emphasis dot.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"9\" cy=\"16\" r=\"2.5\" fill=\"#005CE5\"/>\n      <circle cx=\"16\" cy=\"16\" r=\"2.5\" fill=\"#D2E5FF\"/>\n      <circle cx=\"23\" cy=\"16\" r=\"2.5\" fill=\"#D2E5FF\"/>\n    </svg>",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — collapse 3 sibling components into one <code>Stepper - Bullet</code> with <code>steps</code> and <code>current</code> properties",
      "text": "Step count is a scalar, not a component axis. The current schema has 3 top-level components (3/4/5 steps) and inside each, an <code>highlighted = 1st … Nth</code> ordinal enum for the active dot. Rebuild as a single component: <code>steps: Int</code> (3–10) and <code>current: Int</code> (1..steps). Replace the raster dot PNGs with a vector <code>Ellipse</code> whose fill is bound to <code>main/stepper/color/bg</code> (active) or <code>main/stepper/color/bg-track</code> (inactive). Native side maps to a custom <code>EBStepperBullet(current:total:)</code> rendered as an <code>HStack</code> / <code>Row</code> of <code>Circle</code> shapes. Better still: unify Dash + Bullet + Circular into one <code>EBStepper(current:total:style: .bullet | .dash | .circular)</code> API."
    }
  },
  "overview": {
    "inContextNote": "Stepper - Bullet appears at the top or bottom of multi-step flows — most commonly paginated onboarding, swipeable carousels of tutorial cards, and photo galleries where the user needs a minimal position indicator without numerical labels.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"stepper-bullet-demo-preview\"><div class=\"eb-preview eb-preview-stepper-bullet\" style=\"display:inline-flex;align-items:center;gap:8px;padding:4px 0;\"><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#005CE5;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#005CE5;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#D2E5FF;\"></span><span class=\"eb-preview-stepper-bullet-dot\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#D2E5FF;\"></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">steps</span><select id=\"stepper-bullet-ctrl-steps\" class=\"demo-panel-select\" onchange=\"_stepperBulletUpdate()\"><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">current</span><input type=\"range\" id=\"stepper-bullet-ctrl-current\" class=\"demo-panel-select demo-panel-input\" min=\"1\" max=\"4\" step=\"1\" value=\"2\" oninput=\"_stepperBulletUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><span class=\"demo-panel-value\" id=\"stepper-bullet-ctrl-value\">2 of 4</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Fits any low-information position indicator (carousel, onboarding), but the 3-sibling split forces consumers to swap components when step count changes instead of flipping a prop."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Each 8×8 dot renders as a raster <code>&lt;img&gt;</code>. Two PNG assets per sibling (filled + track) — six total for what should be one vector <code>Ellipse</code> with two token-bound fills."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Step count modeled as 3 top-level components, same anti-pattern as Stepper - Circular (9 siblings). Every other scalar axis in the DS is a property. Breaks the naming hierarchy — \"Stepper - Bullet\" is three components, not one."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Small footprint (8px dots, 8px gaps) composes cleanly into carousel, modal, and onboarding layouts. But no connector line between dots means it reads as isolated markers rather than a progress rail."
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
    "resolved": [],
    "open": [
      {
        "headline": "Step count is modeled as 3 sibling components instead of a <code>steps</code> prop.",
        "body": "The family ships as <code>Stepper - Bullet - 3 Steps</code>, <code>- 4 Steps</code>, <code>- 5 Steps</code> — three top-level components that differ only by hardcoded count. Same anti-pattern as Stepper - Circular (9 siblings). Should be a single <code>Stepper - Bullet</code> with <code>steps: Int</code> and <code>current: Int</code> — 3× maintenance collapses to 1×, and the component scales to 6, 7, 8+ without new files.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Variant axis <code>highlighted = 1st | 2nd | … | Nth</code> uses ordinal enums instead of an integer.",
        "body": "Each sibling has a nested symbol with <code>highlighted=1st</code>, <code>2nd</code>, <code>3rd</code>, <code>4th</code>, <code>5th</code> to mark the active dot. Ordinals don't compose — the 4-step sibling can't have a \"5th\" option, and there's no path to current=N+1. Promote to a top-level integer <code>current: 1..steps</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Every dot is a raster <code>&lt;img&gt;</code> PNG — 8×8 ellipse baked as an image.",
        "body": "Two PNGs per sibling (filled + track) × 3 siblings = six raster assets for what is mathematically a filled circle. Blocks theming (can't retint), breaks at @3x, and ships bytes the native renderer doesn't need. An 8-px <code>Circle()</code> / <code>Box(Modifier.clip(CircleShape))</code> with a token-bound fill is all that's required.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No native primitive matches — this needs a custom component.",
        "body": "SwiftUI has no <code>BulletStepper</code>; Material 3 provides only <code>LinearProgressIndicator</code> and a linear <code>Stepper</code>. Both platforms need a custom <code>EBStepperBullet</code> built from an <code>HStack</code>/<code>Row</code> of <code>Circle</code>/<code>Box</code> shapes. The raster-baked dots make this worse — the dev can't reuse the asset.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No completed / upcoming distinction, no pressed / focused states, no connector line.",
        "body": "The spec treats every non-current dot identically. Users can't see direction of travel. Tappable-to-jump behavior (common in carousels) has no pressed state modeled. And the 8-px blank gaps between dots would normally be a connector rail in classic bullet steppers.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the family collapses to one component and the raster dots are replaced with vector circles. Mapping 3 separate siblings would codify the anti-pattern into the tooling.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Collapse all 3 siblings into one <code>Stepper - Bullet</code> with <code>steps</code> and <code>current</code> properties.",
        "body": "Delete <code>Stepper - Bullet - 3 Steps</code>, <code>- 4 Steps</code>, <code>- 5 Steps</code> as separate components. Create one <code>Stepper - Bullet</code> with <code>steps: 3 | 4 | … | 10</code> and <code>current: 1 | 2 | … | 10</code>. Variant math drops from 3 top-level × 3–5 <code>highlighted</code> = 12 pre-baked variants to 1 component with runtime-computed fills. Native API: <code>EBStepperBullet(current: Int, total: Int)</code>.",
        "tag": "Family"
      },
      {
        "headline": "Unify Dash + Bullet + Circular under one <code>EBStepper(current:total:style:)</code> API.",
        "body": "All three siblings share the same data shape (<code>current</code> + <code>total</code>) and the same token set (<code>main/stepper/color/*</code>). Collapse them into one native component with <code>style: .dash | .bullet | .circular</code>. Figma keeps three component symbols (different visual languages) but they share the same property schema — making migration / swap between styles trivial.",
        "tag": "Family"
      },
      {
        "headline": "Rename the nested <code>highlighted = 1st | 2nd | … | Nth</code> ordinal axis to an integer <code>current</code>.",
        "body": "Ordinal enums don't scale and conflate position with presentation. Use <code>current: Int</code> at the top level and let each dot compute its own fill from <code>index == current ? bg : bg-track</code>.",
        "tag": "Property"
      },
      {
        "headline": "Replace raster dot PNGs with vector <code>Ellipse</code> fills bound to tokens.",
        "body": "Each dot is an 8×8 ellipse — the simplest possible vector. Two fills only: <code>main/stepper/color/bg</code> (active) and <code>main/stepper/color/bg-track</code> (inactive). No PNG assets, resolution-independent, theme-able.",
        "tag": "Asset"
      },
      {
        "headline": "Add <code>completed</code> vs <code>upcoming</code> differentiation.",
        "body": "Optional but common: completed dots use a muted brand tint; upcoming use the track. Model as <code>status: completed | current | upcoming</code> computed per-slot from <code>current</code>. Adds direction-of-travel cue without the user having to count.",
        "tag": "State"
      },
      {
        "headline": "Spec a connector line between dots (optional variant).",
        "body": "Classic bullet steppers draw a 1–2 px line between each dot pair, tinted to match completed (brand) vs upcoming (track). Today the 8-px blank gap reads as isolated markers. Add <code>showConnector: Bool</code> (default off for carousel-style use, on for wizard-style use).",
        "tag": "Property"
      },
      {
        "headline": "Add an <code>orientation</code> property for vertical layouts.",
        "body": "Dot steppers sometimes appear as a vertical list in sidebars or long-form onboarding. Add <code>orientation: horizontal | vertical</code>.",
        "tag": "Property"
      },
      {
        "headline": "Build as a custom native component.",
        "body": "Neither SwiftUI nor Material has a <code>BulletStepper</code> primitive. Ship <code>EBStepperBullet</code>: iOS uses <code>HStack { ForEach(0..&lt;total) { Circle().fill(index == current ? Color.stepperBg : Color.stepperBgTrack).frame(width: 8, height: 8) } }</code>; Android uses <code>Row { repeat(total) { Box(Modifier.size(8.dp).clip(CircleShape).background(if (it == current) EBTokens.stepperBg else EBTokens.stepperBgTrack)) } }</code>.",
        "tag": "Composition"
      },
      {
        "headline": "Announce \"Step X of Y\" to screen readers.",
        "body": "The component is decorative by default — assistive tech reads nothing. Wrap in a semantic container that announces <code>\"Step \\(current) of \\(total)\"</code> (SwiftUI <code>.accessibilityLabel</code>, Compose <code>Modifier.semantics { contentDescription = … }</code>). Also: minimum touch target is 44×44 — if dots are tappable, wrap each in a padded hit area, don't make the 8-px dot itself the target.",
        "tag": "A11y"
      },
      {
        "headline": "Document the canonical composition and retire the sibling names.",
        "body": "Update the sticker sheet page to show one <code>Stepper - Bullet</code> with property controls; add a migration note pointing <code>Stepper - Bullet - N Steps</code> consumers at the new <code>steps</code> prop.",
        "tag": "Docs"
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
