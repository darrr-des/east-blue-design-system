import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/stepper-bullet.js`.
// Panel mirrors the variant axes of set 4337:11140, in variant-name order.
// No property-panel screenshot was supplied, so a boolean or text property
// would not appear here. 225 variants ship — Bullet 52, Circular 56, Dash
// 117 — so the demo script snaps to the nearest built combination.
const stepperDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'bullet',
        options: [
          { value: 'bullet', label: 'Bullet' },
          { value: 'circular', label: 'Circular' },
          { value: 'dash', label: 'Dash' },
        ],
      },
      {
        label: 'Steps',
        prop: 'steps',
        defaultValue: '3',
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
        label: 'Current',
        prop: 'current',
        defaultValue: '1',
        options: [
          { value: '0', label: '0' },
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
        label: 'Status',
        prop: 'status',
        defaultValue: 'current',
        options: [
          { value: 'current', label: 'Current' },
          { value: 'completed', label: 'Completed' },
          { value: 'upcoming', label: 'Upcoming' },
          { value: 'error', label: 'Error' },
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
        "cardKey": "stp-spec-main",
        "demoKey": "main",
        "title": "Stepper",
        "node": "4337:11140",
        "description": "",
        "previewHtml": "<div id=\"stepper-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": stepperDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "Bullet",
                "prop": "type"
              },
              {
                "key": "Steps",
                "value": "3",
                "prop": "steps"
              },
              {
                "key": "Current",
                "value": "1",
                "prop": "current"
              },
              {
                "key": "Status",
                "value": "Current",
                "prop": "status"
              },
              {
                "key": "Step layers",
                "value": "One ellipse per step",
                "variants": {
                  "type:dash": {
                    "value": "One rectangle per step — 1st, 2nd, 3rd…"
                  },
                  "type:circular": {
                    "value": "ring + arc, #index text, label-container"
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "4337:11138 · 40 × 16",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "type:bullet|steps:3|current:1|status:current": {
                    "value": "4337:11138 · 40 × 16"
                  },
                  "type:bullet|steps:3|current:2|status:current": {
                    "value": "4337:11201 · 40 × 16"
                  },
                  "type:bullet|steps:3|current:3|status:completed": {
                    "value": "4337:11470 · 40 × 16"
                  },
                  "type:bullet|steps:4|current:1|status:current": {
                    "value": "4337:11137 · 56 × 16"
                  },
                  "type:bullet|steps:4|current:2|status:current": {
                    "value": "4337:11205 · 56 × 16"
                  },
                  "type:bullet|steps:4|current:3|status:current": {
                    "value": "4337:11474 · 56 × 16"
                  },
                  "type:bullet|steps:4|current:4|status:completed": {
                    "value": "4337:11586 · 56 × 16"
                  },
                  "type:bullet|steps:5|current:1|status:current": {
                    "value": "4337:11136 · 72 × 16"
                  },
                  "type:bullet|steps:5|current:2|status:current": {
                    "value": "4337:11210 · 72 × 16"
                  },
                  "type:bullet|steps:5|current:3|status:current": {
                    "value": "4337:11479 · 72 × 16"
                  },
                  "type:bullet|steps:5|current:4|status:current": {
                    "value": "4337:11591 · 72 × 16"
                  },
                  "type:bullet|steps:5|current:5|status:completed": {
                    "value": "4337:11714 · 72 × 16"
                  },
                  "type:bullet|steps:6|current:1|status:current": {
                    "value": "4337:11135 · 88 × 16"
                  },
                  "type:bullet|steps:6|current:2|status:current": {
                    "value": "4337:11216 · 88 × 16"
                  },
                  "type:bullet|steps:6|current:3|status:current": {
                    "value": "4337:11485 · 88 × 16"
                  },
                  "type:bullet|steps:6|current:4|status:current": {
                    "value": "4337:11597 · 88 × 16"
                  },
                  "type:bullet|steps:6|current:5|status:current": {
                    "value": "4337:11720 · 88 × 16"
                  },
                  "type:bullet|steps:6|current:6|status:completed": {
                    "value": "4337:12034 · 88 × 16"
                  },
                  "type:bullet|steps:7|current:1|status:current": {
                    "value": "4337:11134 · 104 × 16"
                  },
                  "type:bullet|steps:7|current:2|status:current": {
                    "value": "4337:11223 · 104 × 16"
                  },
                  "type:bullet|steps:7|current:3|status:current": {
                    "value": "4337:11492 · 104 × 16"
                  },
                  "type:bullet|steps:7|current:4|status:current": {
                    "value": "4337:11604 · 104 × 16"
                  },
                  "type:bullet|steps:7|current:5|status:current": {
                    "value": "4337:11727 · 104 × 16"
                  },
                  "type:bullet|steps:7|current:6|status:current": {
                    "value": "4337:12041 · 104 × 16"
                  },
                  "type:bullet|steps:7|current:7|status:completed": {
                    "value": "4337:12207 · 104 × 16"
                  },
                  "type:bullet|steps:8|current:1|status:current": {
                    "value": "4337:11133 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:2|status:current": {
                    "value": "4337:11231 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:3|status:current": {
                    "value": "4337:11500 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:4|status:current": {
                    "value": "4337:11612 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:5|status:current": {
                    "value": "4337:11735 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:6|status:current": {
                    "value": "4337:12049 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:7|status:current": {
                    "value": "4337:12215 · 120 × 16"
                  },
                  "type:bullet|steps:8|current:8|status:completed": {
                    "value": "4337:12275 · 120 × 16"
                  },
                  "type:bullet|steps:9|current:1|status:current": {
                    "value": "4337:11132 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:2|status:current": {
                    "value": "4337:11240 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:3|status:current": {
                    "value": "4337:11509 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:4|status:current": {
                    "value": "4337:11621 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:5|status:current": {
                    "value": "4337:11744 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:6|status:current": {
                    "value": "4337:12058 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:7|status:current": {
                    "value": "4337:12224 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:8|status:current": {
                    "value": "4337:12284 · 136 × 16"
                  },
                  "type:bullet|steps:9|current:9|status:completed": {
                    "value": "4337:12386 · 136 × 16"
                  },
                  "type:bullet|steps:10|current:1|status:current": {
                    "value": "4337:11139 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:2|status:current": {
                    "value": "4337:11250 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:3|status:current": {
                    "value": "4337:11519 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:4|status:current": {
                    "value": "4337:11631 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:5|status:current": {
                    "value": "4337:11754 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:6|status:current": {
                    "value": "4337:12068 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:7|status:current": {
                    "value": "4337:12234 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:8|status:current": {
                    "value": "4337:12294 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:9|status:current": {
                    "value": "4337:12396 · 152 × 16"
                  },
                  "type:bullet|steps:10|current:10|status:completed": {
                    "value": "4337:12460 · 152 × 16"
                  },
                  "type:circular|steps:2|current:1|status:current": {
                    "value": "4365:11866 · 45 × 45"
                  },
                  "type:circular|steps:2|current:0|status:upcoming": {
                    "value": "4773:31490 · 45 × 45"
                  },
                  "type:circular|steps:3|current:1|status:current": {
                    "value": "4365:11913 · 45 × 45"
                  },
                  "type:circular|steps:4|current:1|status:current": {
                    "value": "4365:12129 · 45 × 45"
                  },
                  "type:circular|steps:5|current:1|status:current": {
                    "value": "4365:12197 · 45 × 45"
                  },
                  "type:circular|steps:6|current:1|status:current": {
                    "value": "4365:12279 · 45 × 45"
                  },
                  "type:circular|steps:7|current:1|status:current": {
                    "value": "4365:12508 · 45 × 45"
                  },
                  "type:circular|steps:8|current:1|status:current": {
                    "value": "4365:12670 · 45 × 45"
                  },
                  "type:circular|steps:9|current:1|status:current": {
                    "value": "4365:12840 · 45 × 45"
                  },
                  "type:circular|steps:10|current:1|status:current": {
                    "value": "4365:13233 · 45 × 45"
                  },
                  "type:circular|steps:2|current:2|status:current": {
                    "value": "4365:11891 · 45 × 45"
                  },
                  "type:circular|steps:2|current:2|status:completed": {
                    "value": "4695:22509 · 45 × 45"
                  },
                  "type:circular|steps:3|current:2|status:current": {
                    "value": "4365:11921 · 45 × 45"
                  },
                  "type:circular|steps:4|current:2|status:current": {
                    "value": "4365:12137 · 45 × 45"
                  },
                  "type:circular|steps:5|current:2|status:current": {
                    "value": "4365:12205 · 45 × 45"
                  },
                  "type:circular|steps:6|current:2|status:current": {
                    "value": "4365:12287 · 45 × 45"
                  },
                  "type:circular|steps:7|current:2|status:current": {
                    "value": "4365:12516 · 45 × 45"
                  },
                  "type:circular|steps:8|current:2|status:current": {
                    "value": "4365:12678 · 45 × 45"
                  },
                  "type:circular|steps:9|current:2|status:current": {
                    "value": "4365:12848 · 45 × 45"
                  },
                  "type:circular|steps:10|current:2|status:current": {
                    "value": "4365:13241 · 45 × 45"
                  },
                  "type:circular|steps:3|current:3|status:current": {
                    "value": "4365:11936 · 45 × 45"
                  },
                  "type:circular|steps:4|current:3|status:current": {
                    "value": "4365:12145 · 45 × 45"
                  },
                  "type:circular|steps:5|current:3|status:current": {
                    "value": "4365:12213 · 45 × 45"
                  },
                  "type:circular|steps:6|current:3|status:current": {
                    "value": "4365:12295 · 45 × 45"
                  },
                  "type:circular|steps:7|current:3|status:current": {
                    "value": "4365:12524 · 45 × 45"
                  },
                  "type:circular|steps:8|current:3|status:current": {
                    "value": "4365:12686 · 45 × 45"
                  },
                  "type:circular|steps:9|current:3|status:current": {
                    "value": "4365:12856 · 45 × 45"
                  },
                  "type:circular|steps:10|current:3|status:current": {
                    "value": "4365:13249 · 45 × 45"
                  },
                  "type:circular|steps:4|current:4|status:current": {
                    "value": "4365:12160 · 45 × 45"
                  },
                  "type:circular|steps:5|current:4|status:current": {
                    "value": "4365:12221 · 45 × 45"
                  },
                  "type:circular|steps:6|current:4|status:current": {
                    "value": "4365:12303 · 45 × 45"
                  },
                  "type:circular|steps:7|current:4|status:current": {
                    "value": "4365:12532 · 45 × 45"
                  },
                  "type:circular|steps:8|current:4|status:current": {
                    "value": "4365:12694 · 45 × 45"
                  },
                  "type:circular|steps:9|current:4|status:current": {
                    "value": "4365:12864 · 45 × 45"
                  },
                  "type:circular|steps:10|current:4|status:current": {
                    "value": "4365:13257 · 45 × 45"
                  },
                  "type:circular|steps:5|current:5|status:current": {
                    "value": "4365:12236 · 45 × 45"
                  },
                  "type:circular|steps:6|current:5|status:current": {
                    "value": "4365:12311 · 45 × 45"
                  },
                  "type:circular|steps:7|current:5|status:current": {
                    "value": "4365:12540 · 45 × 45"
                  },
                  "type:circular|steps:8|current:5|status:current": {
                    "value": "4365:12702 · 45 × 45"
                  },
                  "type:circular|steps:9|current:5|status:current": {
                    "value": "4365:12872 · 45 × 45"
                  },
                  "type:circular|steps:10|current:5|status:current": {
                    "value": "4365:13265 · 45 × 45"
                  },
                  "type:circular|steps:6|current:6|status:current": {
                    "value": "4365:12326 · 45 × 45"
                  },
                  "type:circular|steps:7|current:6|status:current": {
                    "value": "4365:12548 · 45 × 45"
                  },
                  "type:circular|steps:8|current:6|status:current": {
                    "value": "4365:12710 · 45 × 45"
                  },
                  "type:circular|steps:9|current:6|status:current": {
                    "value": "4365:12880 · 45 × 45"
                  },
                  "type:circular|steps:10|current:6|status:current": {
                    "value": "4365:13273 · 45 × 45"
                  },
                  "type:circular|steps:7|current:7|status:current": {
                    "value": "4365:12563 · 45 × 45"
                  },
                  "type:circular|steps:8|current:7|status:current": {
                    "value": "4365:12718 · 45 × 45"
                  },
                  "type:circular|steps:9|current:7|status:current": {
                    "value": "4365:12888 · 45 × 45"
                  },
                  "type:circular|steps:10|current:7|status:current": {
                    "value": "4365:13281 · 45 × 45"
                  },
                  "type:circular|steps:8|current:8|status:current": {
                    "value": "4365:12757 · 45 × 45"
                  },
                  "type:circular|steps:9|current:8|status:current": {
                    "value": "4365:12896 · 45 × 45"
                  },
                  "type:circular|steps:10|current:8|status:current": {
                    "value": "4365:13289 · 45 × 45"
                  },
                  "type:circular|steps:9|current:9|status:current": {
                    "value": "4365:12911 · 45 × 45"
                  },
                  "type:circular|steps:10|current:9|status:current": {
                    "value": "4365:13297 · 45 × 45"
                  },
                  "type:circular|steps:10|current:10|status:current": {
                    "value": "4365:13312 · 45 × 45"
                  },
                  "type:dash|steps:10|current:1|status:current": {
                    "value": "4689:18458 · 256 × 4"
                  },
                  "type:dash|steps:10|current:1|status:error": {
                    "value": "4773:32272 · 256 × 4"
                  },
                  "type:dash|steps:9|current:1|status:current": {
                    "value": "4695:21583 · 230 × 4"
                  },
                  "type:dash|steps:9|current:1|status:error": {
                    "value": "4773:32283 · 230 × 4"
                  },
                  "type:dash|steps:8|current:1|status:current": {
                    "value": "4695:21783 · 204 × 4"
                  },
                  "type:dash|steps:8|current:1|status:error": {
                    "value": "4773:32293 · 204 × 4"
                  },
                  "type:dash|steps:7|current:1|status:current": {
                    "value": "4695:21945 · 178 × 4"
                  },
                  "type:dash|steps:7|current:1|status:error": {
                    "value": "4773:32302 · 178 × 4"
                  },
                  "type:dash|steps:6|current:1|status:current": {
                    "value": "4695:22073 · 152 × 4"
                  },
                  "type:dash|steps:6|current:1|status:error": {
                    "value": "4773:32310 · 152 × 4"
                  },
                  "type:dash|steps:5|current:1|status:current": {
                    "value": "4695:22171 · 126 × 4"
                  },
                  "type:dash|steps:5|current:1|status:error": {
                    "value": "4773:32317 · 126 × 4"
                  },
                  "type:dash|steps:4|current:1|status:current": {
                    "value": "4695:22247 · 100 × 4"
                  },
                  "type:dash|steps:4|current:1|status:error": {
                    "value": "4773:32323 · 100 × 4"
                  },
                  "type:dash|steps:3|current:1|status:current": {
                    "value": "4695:22297 · 74 × 4"
                  },
                  "type:dash|steps:3|current:1|status:error": {
                    "value": "4773:32328 · 74 × 4"
                  },
                  "type:dash|steps:2|current:1|status:current": {
                    "value": "4695:22329 · 48 × 4"
                  },
                  "type:dash|steps:2|current:1|status:error": {
                    "value": "4773:32332 · 48 × 4"
                  },
                  "type:dash|steps:10|current:2|status:current": {
                    "value": "4689:18469 · 256 × 4"
                  },
                  "type:dash|steps:10|current:2|status:error": {
                    "value": "4773:32335 · 256 × 4"
                  },
                  "type:dash|steps:9|current:2|status:current": {
                    "value": "4695:21594 · 230 × 4"
                  },
                  "type:dash|steps:9|current:2|status:error": {
                    "value": "4773:32346 · 230 × 4"
                  },
                  "type:dash|steps:8|current:2|status:current": {
                    "value": "4695:21793 · 204 × 4"
                  },
                  "type:dash|steps:8|current:2|status:error": {
                    "value": "4773:32356 · 204 × 4"
                  },
                  "type:dash|steps:7|current:2|status:current": {
                    "value": "4695:21954 · 178 × 4"
                  },
                  "type:dash|steps:7|current:2|status:error": {
                    "value": "4773:32365 · 178 × 4"
                  },
                  "type:dash|steps:6|current:2|status:current": {
                    "value": "4695:22081 · 152 × 4"
                  },
                  "type:dash|steps:6|current:2|status:error": {
                    "value": "4773:32373 · 152 × 4"
                  },
                  "type:dash|steps:5|current:2|status:current": {
                    "value": "4695:22178 · 126 × 4"
                  },
                  "type:dash|steps:5|current:2|status:error": {
                    "value": "4773:32380 · 126 × 4"
                  },
                  "type:dash|steps:4|current:2|status:current": {
                    "value": "4695:22253 · 100 × 4"
                  },
                  "type:dash|steps:4|current:2|status:error": {
                    "value": "4773:32386 · 100 × 4"
                  },
                  "type:dash|steps:3|current:2|status:current": {
                    "value": "4695:22302 · 74 × 4"
                  },
                  "type:dash|steps:3|current:2|status:error": {
                    "value": "4773:32391 · 74 × 4"
                  },
                  "type:dash|steps:2|current:2|status:current": {
                    "value": "4695:22333 · 48 × 4"
                  },
                  "type:dash|steps:2|current:2|status:error": {
                    "value": "4773:32395 · 48 × 4"
                  },
                  "type:dash|steps:2|current:2|status:completed": {
                    "value": "4773:32825 · 48 × 4"
                  },
                  "type:dash|steps:10|current:3|status:current": {
                    "value": "4689:18480 · 256 × 4"
                  },
                  "type:dash|steps:10|current:3|status:error": {
                    "value": "4773:32398 · 256 × 4"
                  },
                  "type:dash|steps:9|current:3|status:current": {
                    "value": "4695:21605 · 230 × 4"
                  },
                  "type:dash|steps:9|current:3|status:error": {
                    "value": "4773:32409 · 230 × 4"
                  },
                  "type:dash|steps:8|current:3|status:current": {
                    "value": "4695:21803 · 204 × 4"
                  },
                  "type:dash|steps:8|current:3|status:error": {
                    "value": "4773:32419 · 204 × 4"
                  },
                  "type:dash|steps:7|current:3|status:current": {
                    "value": "4695:21963 · 178 × 4"
                  },
                  "type:dash|steps:7|current:3|status:error": {
                    "value": "4773:32428 · 178 × 4"
                  },
                  "type:dash|steps:6|current:3|status:current": {
                    "value": "4695:22089 · 152 × 4"
                  },
                  "type:dash|steps:6|current:3|status:error": {
                    "value": "4773:32436 · 152 × 4"
                  },
                  "type:dash|steps:5|current:3|status:current": {
                    "value": "4695:22185 · 126 × 4"
                  },
                  "type:dash|steps:5|current:3|status:error": {
                    "value": "4773:32443 · 126 × 4"
                  },
                  "type:dash|steps:4|current:3|status:current": {
                    "value": "4695:22259 · 100 × 4"
                  },
                  "type:dash|steps:4|current:3|status:error": {
                    "value": "4773:32449 · 100 × 4"
                  },
                  "type:dash|steps:3|current:3|status:current": {
                    "value": "4695:22307 · 74 × 4"
                  },
                  "type:dash|steps:3|current:3|status:error": {
                    "value": "4773:32454 · 74 × 4"
                  },
                  "type:dash|steps:3|current:3|status:completed": {
                    "value": "4773:32828 · 74 × 4"
                  },
                  "type:dash|steps:10|current:4|status:current": {
                    "value": "4689:18491 · 256 × 4"
                  },
                  "type:dash|steps:10|current:4|status:error": {
                    "value": "4773:32458 · 256 × 4"
                  },
                  "type:dash|steps:9|current:4|status:current": {
                    "value": "4695:21616 · 230 × 4"
                  },
                  "type:dash|steps:9|current:4|status:error": {
                    "value": "4773:32469 · 230 × 4"
                  },
                  "type:dash|steps:8|current:4|status:current": {
                    "value": "4695:21813 · 204 × 4"
                  },
                  "type:dash|steps:8|current:4|status:error": {
                    "value": "4773:32479 · 204 × 4"
                  },
                  "type:dash|steps:7|current:4|status:current": {
                    "value": "4695:21972 · 178 × 4"
                  },
                  "type:dash|steps:7|current:4|status:error": {
                    "value": "4773:32488 · 178 × 4"
                  },
                  "type:dash|steps:6|current:4|status:current": {
                    "value": "4695:22097 · 152 × 4"
                  },
                  "type:dash|steps:6|current:4|status:error": {
                    "value": "4773:32496 · 152 × 4"
                  },
                  "type:dash|steps:5|current:4|status:current": {
                    "value": "4695:22192 · 126 × 4"
                  },
                  "type:dash|steps:5|current:4|status:error": {
                    "value": "4773:32503 · 126 × 4"
                  },
                  "type:dash|steps:4|current:4|status:current": {
                    "value": "4695:22265 · 100 × 4"
                  },
                  "type:dash|steps:4|current:4|status:error": {
                    "value": "4773:32509 · 100 × 4"
                  },
                  "type:dash|steps:4|current:4|status:completed": {
                    "value": "4773:32832 · 100 × 4"
                  },
                  "type:dash|steps:10|current:5|status:current": {
                    "value": "4689:18502 · 256 × 4"
                  },
                  "type:dash|steps:10|current:5|status:error": {
                    "value": "4773:32514 · 256 × 4"
                  },
                  "type:dash|steps:9|current:5|status:current": {
                    "value": "4695:21627 · 230 × 4"
                  },
                  "type:dash|steps:9|current:5|status:error": {
                    "value": "4773:32525 · 230 × 4"
                  },
                  "type:dash|steps:8|current:5|status:current": {
                    "value": "4695:21823 · 204 × 4"
                  },
                  "type:dash|steps:8|current:5|status:error": {
                    "value": "4773:32535 · 204 × 4"
                  },
                  "type:dash|steps:7|current:5|status:current": {
                    "value": "4695:21981 · 178 × 4"
                  },
                  "type:dash|steps:7|current:5|status:error": {
                    "value": "4773:32544 · 178 × 4"
                  },
                  "type:dash|steps:6|current:5|status:current": {
                    "value": "4695:22105 · 152 × 4"
                  },
                  "type:dash|steps:6|current:5|status:error": {
                    "value": "4773:32552 · 152 × 4"
                  },
                  "type:dash|steps:5|current:5|status:current": {
                    "value": "4695:22199 · 126 × 4"
                  },
                  "type:dash|steps:5|current:5|status:error": {
                    "value": "4773:32559 · 126 × 4"
                  },
                  "type:dash|steps:5|current:5|status:completed": {
                    "value": "4773:32837 · 126 × 4"
                  },
                  "type:dash|steps:10|current:6|status:current": {
                    "value": "4689:18513 · 256 × 4"
                  },
                  "type:dash|steps:10|current:6|status:error": {
                    "value": "4773:32565 · 256 × 4"
                  },
                  "type:dash|steps:9|current:6|status:current": {
                    "value": "4695:21638 · 230 × 4"
                  },
                  "type:dash|steps:9|current:6|status:error": {
                    "value": "4773:32576 · 230 × 4"
                  },
                  "type:dash|steps:8|current:6|status:current": {
                    "value": "4695:21833 · 204 × 4"
                  },
                  "type:dash|steps:8|current:6|status:error": {
                    "value": "4773:32586 · 204 × 4"
                  },
                  "type:dash|steps:7|current:6|status:current": {
                    "value": "4695:21990 · 178 × 4"
                  },
                  "type:dash|steps:7|current:6|status:error": {
                    "value": "4773:32595 · 178 × 4"
                  },
                  "type:dash|steps:6|current:6|status:current": {
                    "value": "4695:22113 · 152 × 4"
                  },
                  "type:dash|steps:6|current:6|status:error": {
                    "value": "4773:32603 · 152 × 4"
                  },
                  "type:dash|steps:6|current:6|status:completed": {
                    "value": "4773:32843 · 152 × 4"
                  },
                  "type:dash|steps:10|current:7|status:current": {
                    "value": "4689:18524 · 256 × 4"
                  },
                  "type:dash|steps:10|current:7|status:error": {
                    "value": "4773:32610 · 256 × 4"
                  },
                  "type:dash|steps:9|current:7|status:current": {
                    "value": "4695:21649 · 230 × 4"
                  },
                  "type:dash|steps:9|current:7|status:error": {
                    "value": "4773:32621 · 230 × 4"
                  },
                  "type:dash|steps:8|current:7|status:current": {
                    "value": "4695:21843 · 204 × 4"
                  },
                  "type:dash|steps:8|current:7|status:error": {
                    "value": "4773:32631 · 204 × 4"
                  },
                  "type:dash|steps:7|current:7|status:current": {
                    "value": "4695:21999 · 178 × 4"
                  },
                  "type:dash|steps:7|current:7|status:error": {
                    "value": "4773:32640 · 178 × 4"
                  },
                  "type:dash|steps:7|current:7|status:completed": {
                    "value": "4773:32850 · 178 × 4"
                  },
                  "type:dash|steps:10|current:8|status:current": {
                    "value": "4689:18535 · 256 × 4"
                  },
                  "type:dash|steps:10|current:8|status:error": {
                    "value": "4773:32648 · 256 × 4"
                  },
                  "type:dash|steps:9|current:8|status:current": {
                    "value": "4695:21660 · 230 × 4"
                  },
                  "type:dash|steps:9|current:8|status:error": {
                    "value": "4773:32659 · 230 × 4"
                  },
                  "type:dash|steps:8|current:8|status:current": {
                    "value": "4695:21853 · 204 × 4"
                  },
                  "type:dash|steps:8|current:8|status:error": {
                    "value": "4773:32669 · 204 × 4"
                  },
                  "type:dash|steps:8|current:8|status:completed": {
                    "value": "4773:32858 · 204 × 4"
                  },
                  "type:dash|steps:10|current:9|status:current": {
                    "value": "4689:18546 · 256 × 4"
                  },
                  "type:dash|steps:10|current:9|status:error": {
                    "value": "4773:32678 · 256 × 4"
                  },
                  "type:dash|steps:9|current:9|status:current": {
                    "value": "4695:21671 · 230 × 4"
                  },
                  "type:dash|steps:9|current:9|status:error": {
                    "value": "4773:32689 · 230 × 4"
                  },
                  "type:dash|steps:9|current:9|status:completed": {
                    "value": "4773:32867 · 230 × 4"
                  },
                  "type:dash|steps:10|current:10|status:current": {
                    "value": "4689:18557 · 256 × 4"
                  },
                  "type:dash|steps:10|current:10|status:error": {
                    "value": "4773:32699 · 256 × 4"
                  },
                  "type:dash|steps:10|current:10|status:completed": {
                    "value": "4773:32877 · 256 × 4"
                  }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Done steps",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "type:dash|status:completed": {
                    "value": "#12AF80"
                  },
                  "type:circular|status:completed": {
                    "value": "#12AF80"
                  }
                }
              },
              {
                "key": "Remaining steps",
                "value": "#D2E5FF",
                "token": "—",
                "variants": {
                  "status:completed": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Error step",
                "value": "#D61B2C",
                "token": "—",
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:circular": {
                    "hide": true
                  },
                  "type:dash|status:current": {
                    "hide": true
                  },
                  "type:dash|status:completed": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Ring track",
                "value": "#D2E5FF",
                "token": "—",
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Index",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  },
                  "type:circular|status:upcoming": {
                    "value": "#9BC5FD"
                  },
                  "type:circular|status:completed": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Checkmark",
                "value": "#12AF80",
                "token": "—",
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  },
                  "type:circular|status:current": {
                    "hide": true
                  },
                  "type:circular|status:upcoming": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label (clipped)",
                "value": "#90A8D0",
                "token": "—",
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Index",
                "value": "Primary/Headlines/Block",
                "mono": true,
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  },
                  "type:circular|status:completed": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label (clipped)",
                "value": "Primary/Label/Fine",
                "mono": true,
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Text layers",
                "value": "None — the track is shapes only",
                "variants": {
                  "type:circular": {
                    "hide": true
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
                "value": "40 × 16",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Step",
                "value": "8 × 8 dot · 16px pitch",
                "mono": true,
                "variants": {
                  "type:dash": {
                    "value": "22 × 4 bar · 26px pitch · radius 100"
                  },
                  "type:circular": {
                    "value": "45 × 45 ring · 5px stroke"
                  }
                }
              },
              {
                "key": "Width rule",
                "value": "16 × Steps − 8",
                "mono": true,
                "variants": {
                  "type:dash": {
                    "value": "26 × Steps − 4"
                  },
                  "type:circular": {
                    "value": "Fixed 45 × 45 at every Steps"
                  }
                }
              },
              {
                "key": "Index",
                "value": "18px, centred in the ring",
                "mono": true,
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  },
                  "type:circular|status:completed": {
                    "value": "16 × 16 checkmark, centred"
                  }
                }
              },
              {
                "key": "Label-container",
                "value": "68 × 16 below the ring — clipped by the 45 × 45 frame",
                "mono": true,
                "variants": {
                  "type:bullet": {
                    "hide": true
                  },
                  "type:dash": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBStepper(\n    steps: 3,\n    current: 1,\n    type: .bullet\n)",
        "compose": "EBStepper(\n    steps = 3,\n    current = 1,\n    type = EBStepperType.Bullet\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type & Status",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> across the 225 variants of set <code>4337:11140</code>. Steps up to <code>Current</code> paint done, the rest paint the track colour; <code>Completed</code> paints them all. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Done",
          "Remaining"
        ],
        "rows": [
          {
            "role": "Bullet · Current",
            "token": "—",
            "values": [
              "#005CE5",
              "#D2E5FF"
            ]
          },
          {
            "role": "Bullet · Completed",
            "token": "—",
            "values": [
              "#005CE5",
              "–"
            ]
          },
          {
            "role": "Dash · Current",
            "token": "—",
            "values": [
              "#005CE5",
              "#D2E5FF"
            ]
          },
          {
            "role": "Dash · Error",
            "token": "—",
            "values": [
              "#D61B2C on the current bar",
              "#D2E5FF"
            ]
          },
          {
            "role": "Dash · Completed",
            "token": "—",
            "values": [
              "#12AF80",
              "–"
            ]
          },
          {
            "role": "Circular · Current",
            "token": "—",
            "values": [
              "#005CE5 arc · #005CE5 index",
              "#D2E5FF ring"
            ]
          },
          {
            "role": "Circular · Upcoming",
            "token": "—",
            "values": [
              "No arc · #9BC5FD index",
              "#D2E5FF ring"
            ]
          },
          {
            "role": "Circular · Completed",
            "token": "—",
            "values": [
              "#12AF80 ring and checkmark",
              "–"
            ]
          },
          {
            "role": "Circular label (clipped)",
            "token": "—",
            "values": [
              "#90A8D0",
              "–"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:stepper:2.1.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.stepper.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per variant axis of set <code>4337:11140</code>, in variant-name order. <code>Steps</code> and <code>Current</code> are variant properties, so every count ships as its own variant — 225 in total. No property-panel screenshot was supplied, so a boolean or text property would be missing here.",
      "rows": [
        {
          "figma": "Type — Bullet, Circular, Dash",
          "swift": "<code>type: .bullet / .circular / .dash</code>",
          "compose": "<code>type = EBStepperType.Bullet / Circular / Dash</code>"
        },
        {
          "figma": "Steps — 3–10 (Bullet), 2–10 (Circular, Dash)",
          "swift": "<code>steps: Int</code>",
          "compose": "<code>steps: Int</code>"
        },
        {
          "figma": "Current — 1–Steps (Circular also 0)",
          "swift": "<code>current: Int</code>",
          "compose": "<code>current: Int</code>"
        },
        {
          "figma": "Status — Current, Completed, Upcoming (Circular), Error (Dash)",
          "swift": "<code>status: .current / .completed / .upcoming / .error</code>",
          "compose": "<code>status = EBStepperStatus.Current / Completed / Upcoming / Error</code>"
        },
        {
          "figma": "— <code>#index</code> text (Circular)",
          "swift": "drawn from <code>current</code>",
          "compose": "drawn from <code>current</code>"
        },
        {
          "figma": "— <code>#label</code> text (Circular, clipped)",
          "swift": "not drawn — see the open Changelog row",
          "compose": "not drawn — see the open Changelog row"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Stepper/EBStepper.swift",
        "compose": "android/components/stepper/EBStepper.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Bullet · 4 steps · step 1",
        "swift": "<span class=\"cmt\">// Type=Bullet, Steps=4, Current=1, Status=Current — 4337:11137, 56 × 16.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps: 4,\n    current: 1,\n    type: .<span class=\"prp\">bullet</span>\n)",
        "compose": "<span class=\"cmt\">// Type=Bullet, Steps=4, Current=1, Status=Current — 4337:11137, 56 × 16.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps = 4,\n    current = 1,\n    type = <span class=\"typ\">EBStepperType</span>.<span class=\"prp\">Bullet</span>\n)"
      },
      {
        "subheading": "Dash · 5 steps · error on step 3",
        "swift": "<span class=\"cmt\">// Type=Dash, Steps=5, Current=3, Status=Error — 4773:32443, 126 × 4.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps: 5,\n    current: 3,\n    type: .<span class=\"prp\">dash</span>,\n    status: .<span class=\"prp\">error</span>\n)",
        "compose": "<span class=\"cmt\">// Type=Dash, Steps=5, Current=3, Status=Error — 4773:32443, 126 × 4.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps = 5,\n    current = 3,\n    type = <span class=\"typ\">EBStepperType</span>.<span class=\"prp\">Dash</span>,\n    status = <span class=\"typ\">EBStepperStatus</span>.<span class=\"prp\">Error</span>\n)"
      },
      {
        "subheading": "Circular · 3 steps · step 1",
        "swift": "<span class=\"cmt\">// Type=Circular, Steps=3, Current=1, Status=Current — 4365:11913, 45 × 45.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps: 3,\n    current: 1,\n    type: .<span class=\"prp\">circular</span>\n)",
        "compose": "<span class=\"cmt\">// Type=Circular, Steps=3, Current=1, Status=Current — 4365:11913, 45 × 45.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps = 3,\n    current = 1,\n    type = <span class=\"typ\">EBStepperType</span>.<span class=\"prp\">Circular</span>\n)"
      },
      {
        "subheading": "Circular · completed",
        "swift": "<span class=\"cmt\">// Type=Circular, Steps=2, Current=2, Status=Completed — 4695:22509, 45 × 45.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps: 2,\n    current: 2,\n    type: .<span class=\"prp\">circular</span>,\n    status: .<span class=\"prp\">completed</span>\n)",
        "compose": "<span class=\"cmt\">// Type=Circular, Steps=2, Current=2, Status=Completed — 4695:22509, 45 × 45.</span>\n<span class=\"typ\">EBStepper</span>(\n    steps = 2,\n    current = 2,\n    type = <span class=\"typ\">EBStepperType</span>.<span class=\"prp\">Circular</span>,\n    status = <span class=\"typ\">EBStepperStatus</span>.<span class=\"prp\">Completed</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Progress semantics",
        "ios": "A stepper is progress, not decoration: expose it with <code>.accessibilityValue(\"Step 3 of 5\")</code> and the <code>.updatesFrequently</code> trait while a flow advances.",
        "android": "Use <code>Modifier.semantics { stateDescription = \"Step 3 of 5\" }</code>, or <code>LinearProgressIndicator</code> semantics for Dash."
      },
      {
        "requirement": "Announce the change",
        "ios": "When <code>current</code> moves, post an announcement; the dots and bars carry no text of their own.",
        "android": "Set <code>liveRegion = LiveRegionMode.Polite</code> on the stepper."
      },
      {
        "requirement": "Not colour alone",
        "ios": "Done and remaining differ only by fill — #005CE5 against #D2E5FF — and Error only by #D61B2C. Pair every state with text elsewhere on screen.",
        "android": "Same — the shape never changes, only the fill."
      },
      {
        "requirement": "Contrast",
        "ios": "These are non-text graphics, so the 3:1 bar applies: #005CE5 on white is 5.73:1 and #12AF80 is 2.81:1, below 3:1. The #D2E5FF track is 1.28:1 and reads as an inactive rail rather than content.",
        "android": "Same ratios."
      },
      {
        "requirement": "Circular index",
        "ios": "The 18pt index is the only text: #005CE5 is 5.73:1, and the Upcoming #9BC5FD is 1.78:1 — below AA for text.",
        "android": "Same."
      },
      {
        "requirement": "Touch",
        "ios": "Steppers are display-only here; if a flow lets users jump back, the target must be a separate control — the 4px Dash bar is far under 44pt.",
        "android": "Same — do not make a 4dp bar tappable."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Dash for a linear flow with a known number of steps, Bullet for a carousel or short sequence, Circular for a single step-of-total badge.",
        "dontText": "Don’t mix two types in one flow."
      },
      {
        "doText": "Set <code>Current</code> to the step in progress; everything before it paints done.",
        "dontText": "Don’t use <code>Completed</code> to mean the last step is in progress — it paints every step done."
      },
      {
        "doText": "Use Dash <code>Error</code> to mark the step that failed; earlier steps stay done.",
        "dontText": "Don’t expect an Error state on Bullet or Circular — Figma builds none."
      },
      {
        "doText": "Keep Circular for compact spots; it stays 45 × 45 at every step count.",
        "dontText": "Don’t rely on its \"Step 1 of 10\" label — it is clipped and never renders, and its text is the same in every variant."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Bullet repeats an <code>ellipse</code> layer per step and Dash names its bars <code>1st</code>, <code>2nd</code>, <code>3rd</code>…; Circular carries <code>#index</code> and <code>#label</code> with the legacy hash prefix. The Circular <code>label-container</code> sits below the 45 × 45 frame and is clipped, so it never renders."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Four PascalCase axes with Title Case values. But <code>Steps</code> and <code>Current</code> are variant properties, which is what makes the set 225 variants, and the ranges differ by Type — Bullet starts at 3 where Circular and Dash start at 2. <code>Status</code> values are also Type-specific: Upcoming only on Circular, Error only on Dash."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Both Circular text layers resolve <code>matched</code> — <code>Primary/Headlines/Block</code> and <code>Primary/Label/Fine</code>. Bullet and Dash carry no text. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Natively this is one view with <code>steps</code>, <code>current</code>, <code>type</code> and <code>status</code> — the geometry follows clean rules (16 × Steps − 8, 26 × Steps − 4, fixed 45 × 45). The mismatch is that Figma models the counts as 225 variants rather than as parameters, so Code Connect will map a range, not a variant."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only. <code>Status</code> is flow state rather than interaction, and nothing here is tappable."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Shapes throughout — ellipses, rounded rectangles and a stroked ring. The Completed check is a DS <code>Checkmark</code> instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No SwiftUI or Compose mappings are registered; the native library does not exist. <code>Steps</code> and <code>Current</code> should map to integer parameters rather than 225 variant rows."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 225,
      "description": "<code>Type</code> × <code>Steps</code> × <code>Current</code> × <code>Status</code> = <strong>225 variants</strong>: Bullet 52, Circular 56, Dash 117. <code>Current</code> runs 1–Steps within each count, so the set grows quadratically with the step range.",
      "columns": [
        "Type",
        "Steps",
        "Current",
        "Status",
        "Variants",
        "Size"
      ],
      "rows": [
        {
          "cells": [
            "Bullet",
            "3–10",
            "1–Steps",
            "Completed, Current",
            "52",
            "16 × Steps − 8 × 16"
          ]
        },
        {
          "cells": [
            "Circular",
            "2–10",
            "1–Steps (plus 0)",
            "Completed, Current, Upcoming",
            "56",
            "45 × 45"
          ]
        },
        {
          "cells": [
            "Dash",
            "2–10",
            "1–Steps",
            "Completed, Current, Error",
            "117",
            "26 × Steps − 4 × 4"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4337:11140",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card covering all three types.</strong> A single card on retired node <code>27:48287</code> documented Bullet alone. The merged set is <code>Type</code> × <code>Steps</code> × <code>Current</code> × <code>Status</code> — 225 variants — and the card now resolves every one of them.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Bullet is 8px dots on a 16px pitch, Dash 22 × 4 bars on a 26px pitch, and Circular a 45 × 45 ring whose arc sweeps <code>Current</code>/<code>Steps</code>, with the Completed checkmark taken from <code>get_svg</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> The Circular <code>#index</code> resolves <code>Primary/Headlines/Block</code> and <code>#label</code> <code>Primary/Label/Fine</code>, both matched. Bullet and Dash have no text.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab still described Bullet only.</strong> Rebuilt on the four live axes with <code>com.eastblue.ds:stepper:2.1.1</code>, four snippets and a per-type inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored against the merged set.</strong> C3 and C6 Ready; C1, C2 and C4 Needs Refinement on new findings; C5 Not Applicable; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Circular label never renders.</strong> <code>label-container</code> (68 × 16, \"Step 1 of 10\") sits below the 45 × 45 frame and is clipped — <code>get_svg</code> and <code>export_node_as_image</code> show the ring only. Its text is also the same in every variant, so it would read \"of 10\" on a 3-step stepper. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong><code>Steps</code> and <code>Current</code> are variant properties</strong>, which is what makes the set 225 variants. Native code takes them as integers, so Code Connect maps a range rather than a row. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Ranges and statuses differ by Type</strong> — Bullet starts at 3 steps where Circular and Dash start at 2; Upcoming exists only on Circular and Error only on Dash. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Layer names are positional or hash-prefixed</strong> — <code>ellipse</code> repeated per step, <code>1st</code>/<code>2nd</code>/<code>3rd</code> on Dash, <code>#index</code> and <code>#label</code> on Circular. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Completed green is 2.81:1 against white</strong>, below the 3:1 minimum for a non-text graphic, and the Upcoming index #9BC5FD is 1.78:1 as text. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Property panel not confirmed.</strong> The Style panel is built from variant names; a boolean or text property would be missing. <span class=\"tag-open\">Open</span>",
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
