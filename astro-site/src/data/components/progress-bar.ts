import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/progress-bar.js`.
const progressBarDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Progress',
        prop: 'progress',
        defaultValue: '0',
        options: [
          { value: '0', label: '0' },
          { value: '10', label: '10' },
          { value: '20', label: '20' },
          { value: '30', label: '30' },
          { value: '40', label: '40' },
          { value: '50', label: '50' },
          { value: '60', label: '60' },
          { value: '70', label: '70' },
          { value: '80', label: '80' },
          { value: '90', label: '90' },
          { value: '100', label: '100' },
        ],
      },
    ],
  },
];

export const progressBar: ComponentData = {
  "meta": {
    "slug": "progress-bar",
    "name": "Progress Bar",
    "node": "4244:187349",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4244-187349",
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
      "title": "Restructure — collapse the 11-value <code>Progress</code> enum into one component taking a continuous value",
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
        "note": "Progress modelled as a discrete <code>Progress</code> enum with 11 variants — cannot express 37%, 62%, or any non-decile value. Every other slider-style value in the DS is continuous."
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
        "property": "Progress=0…100",
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
        "body": "The Figma component exposes <code>Progress</code> as 11 discrete options (0, 10, 20, …, 100). Consumers can't spec 37% or animate smoothly — they must pick the closest variant. Every scalar value in the DS should be continuous.",
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
        "headline": "<code>Progress</code> is typed as an enum where both platforms take a scalar.",
        "body": "The name now matches native convention — the earlier <code>percentage</code> has been renamed. What is left is the type: 11 discrete options cannot carry 0–1 continuous, so a mapping still has to quantise.",
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
        "headline": "Collapse the 11 <code>Progress</code> variants into a single component taking a continuous value.",
        "body": "Delete the <code>Progress = 0 | 10 | … | 100</code> enum. Expose <code>progress: Float</code> (0–1). In Figma, drive the fill width by layout — either a single variant with a layer the designer resizes, or a published component that lives as a native primitive on the dev side. Variant math drops from 11 to 1 (+ state).",
        "tag": "Property"
      },
      {
        "headline": "Name the two zones and bind their colours to tokens.",
        "body": "Both zones are already vector strokes — the raster pair is gone. They are still unnamed strokes on the component with no readable variable binding, so give them <code>Track</code> and <code>Fill</code> layers bound to <code>main/progress-bar/color/border-track</code> and <code>main/progress-bar/color/border</code>.",
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
        "cardKey": "pb-spec-main",
        "demoKey": "main",
        "title": "Progress Bar",
        "node": "4244:187349",
        "description": "",
        "previewHtml": "<div id=\"progress-bar-spec-main\" class=\"spec-preview-body\"><svg width=\"313\" height=\"5\" viewBox=\"0 0 313 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.5 2.5L310.5 2.5\" stroke=\"#9BC5FD\" stroke-width=\"5\" stroke-linecap=\"round\"/></svg></div>",
        "demoControls": progressBarDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Progress",
                "value": "0",
                "prop": "progress"
              },
              {
                "key": "Layers",
                "value": "fill-container · strokes, no children",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Track",
                "value": "#9BC5FD",
                "token": "—"
              },
              {
                "key": "Fill",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "progress:0": {
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
                "key": "Text layers",
                "value": "None"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "5 (stroke width)",
                "mono": true
              },
              {
                "key": "Width",
                "value": "312",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "2.5 (round caps)",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "2",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "0",
                "mono": true
              },
              {
                "key": "Track",
                "value": "308",
                "mono": true
              },
              {
                "key": "Fill",
                "value": "0 (no fill path)",
                "mono": true,
                "variants": {
                  "progress:10": {
                    "value": "30.8"
                  },
                  "progress:20": {
                    "value": "61.6"
                  },
                  "progress:30": {
                    "value": "92.4"
                  },
                  "progress:40": {
                    "value": "123.2"
                  },
                  "progress:50": {
                    "value": "154"
                  },
                  "progress:60": {
                    "value": "184.8"
                  },
                  "progress:70": {
                    "value": "215.6"
                  },
                  "progress:80": {
                    "value": "246.4"
                  },
                  "progress:90": {
                    "value": "277.2"
                  },
                  "progress:100": {
                    "value": "308"
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Leading",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBProgressBar</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>0.0<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBProgressBar</span><span class=\"syn-punc\">(</span>progress <span class=\"syn-eq\">=</span> 0.0f<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Zone",
        "description": "Read off <code>get_svg</code> on each variant of set <code>4244:187349</code> and confirmed against <code>export_node_as_image</code>. <strong>Both zones are stroked paths, not filled rectangles</strong> — which is why the component’s bounding box is 312 × 0 and why the bar’s height is its stroke width. Neither colour changes with <code>Progress</code>. Token paths could not be read; the Talk To Figma plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Track",
            "token": "Stroke · full 308 length, all 11 variants",
            "values": [
              "—",
              "#9BC5FD"
            ]
          },
          {
            "role": "Fill",
            "token": "Stroke · 308 × Progress, absent at 0",
            "values": [
              "—",
              "#005CE5"
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
          "label": "Android — Gradle",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:progress-bar:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.progressbar.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. The component is a Restructure candidate — the API below is the target shape, not a shipped one."
    },
    "propertyMapping": {
      "description": "The Figma column reads the set as it stands today; the native columns are the target API from the Restructure verdict, so several rows map a Figma value that does not exist yet.",
      "rows": [
        {
          "figma": "<code>Progress</code> · 0, 10 … 100 (enum, 11 values)",
          "swift": "<code>value: Double</code> — continuous 0–1",
          "compose": "<code>progress: Float</code> — continuous 0f–1f"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>EBProgressBar()</code> — indeterminate",
          "compose": "<code>LinearProgressIndicator()</code> with no progress"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>.tint(.green)</code> / <code>.tint(.red)</code>",
          "compose": "<code>color = EBColors.success / error</code>"
        },
        {
          "figma": "Track — stroked path, full 308",
          "swift": "<code>.progressViewStyle(.linear)</code> track",
          "compose": "<code>trackColor</code>"
        },
        {
          "figma": "Fill — stroked path, 308 × Progress",
          "swift": "<code>.tint(EBColors.progressFill)</code>",
          "compose": "<code>color</code>"
        },
        {
          "figma": "312 fixed width",
          "swift": "<code>.frame(maxWidth: .infinity)</code>",
          "compose": "<code>Modifier.fillMaxWidth()</code>"
        },
        {
          "figma": "5 stroke, round caps",
          "swift": "<code>.frame(height: 5)</code> · <code>.clipShape(.capsule)</code>",
          "compose": "<code>strokeCap = StrokeCap.Round</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/ProgressBar/EBProgressBar.swift",
        "compose": "android/components/progressbar/EBProgressBar.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Determinate — target API",
        "swift": "<span class=\"cmt\">// value is continuous, not one of 11 steps</span>\n<span class=\"typ\">EBProgressBar</span>(<span class=\"prp\">value</span>: <span class=\"typ\">0.62</span>)\n    .<span class=\"fn\">accessibilityLabel</span>(<span class=\"str\">\"Verification progress\"</span>)\n\n<span class=\"cmt\">// Driven by state</span>\n<span class=\"kw\">@State</span> <span class=\"kw\">private var</span> uploaded: <span class=\"typ\">Double</span> = <span class=\"typ\">0</span>\n<span class=\"typ\">EBProgressBar</span>(<span class=\"prp\">value</span>: uploaded)",
        "compose": "<span class=\"cmt\">// progress is continuous, not one of 11 steps</span>\n<span class=\"typ\">EBProgressBar</span>(\n    <span class=\"prp\">progress</span> = <span class=\"typ\">0.62f</span>,\n    <span class=\"prp\">modifier</span> = <span class=\"typ\">Modifier</span>\n        .<span class=\"fn\">fillMaxWidth</span>()\n        .<span class=\"fn\">semantics</span> { contentDescription = <span class=\"str\">\"Verification progress\"</span> }\n)"
      },
      {
        "subheading": "Indeterminate — not modeled in Figma",
        "swift": "<span class=\"cmt\">// No Figma variant covers this — see C5</span>\n<span class=\"typ\">EBProgressBar</span>()\n    .<span class=\"fn\">accessibilityLabel</span>(<span class=\"str\">\"Loading\"</span>)",
        "compose": "<span class=\"cmt\">// No Figma variant covers this — see C5</span>\n<span class=\"typ\">EBProgressBar</span>(\n    <span class=\"prp\">modifier</span> = <span class=\"typ\">Modifier</span>.<span class=\"fn\">fillMaxWidth</span>()\n)"
      }
    ],
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
    "usageGuidelines": [
      {
        "doText": "Use for operations with a knowable completion — uploads, multi-step KYC, form wizards.",
        "dontText": "Use for an operation of unknown length. That is an indeterminate indicator, which the set does not yet model."
      },
      {
        "doText": "Pair the bar with a text label when the exact figure matters. The component renders no text of its own.",
        "dontText": "Rely on the bar alone to convey a number — a 5px bar is not readable to the nearest percent."
      },
      {
        "doText": "Let the bar stretch to the content width. 312 is the Figma frame, not a fixed native width.",
        "dontText": "Hard-code 312 in native code — it strands the bar on wider screens."
      },
      {
        "doText": "Give it an accessibility label naming the task it is tracking.",
        "dontText": "Leave it unlabelled — \"62 percent\" with no subject tells a screen-reader user nothing."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Flat and simple — the only named layer read off the set is <code>fill-container</code>, and both zones are strokes on the component rather than child nodes. The earlier <code>back</code> / <code>front</code> raster pair is gone. What remains is that neither zone is a named layer, so there is nothing for a reviewer or Code Connect to point at."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>Progress</code> is modelled as an 11-value enum (<code>0, 10 … 100</code>). Progress is a scalar — the schema cannot express 37% or 62%, and both native platforms take a continuous value. The name is right; the type is not."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Track <code>#9BC5FD</code> and fill <code>#005CE5</code> are consistent across all 11 variants, but no binding could be read — the Talk To Figma plugin returns no variable references, so whether these are tokens or raw values is unconfirmed. Needs a Dev Mode check."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps 1:1 to <code>ProgressView(value:)</code> and <code>LinearProgressIndicator</code>. A stroked path with round caps is a capsule-clipped bar on both platforms. No gesture or web-only pattern."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Determinate only, in 10% steps. No indeterminate, success or error — all three are built into the native primitives and all three are needed in product."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Both zones are vector stroked paths, 5 wide with round caps — confirmed by <code>get_svg</code> and <code>export_node_as_image</code> on the set. The raster <code>&lt;img&gt;</code> fills recorded against the retired Sticker Sheets set are no longer present."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Nothing registered. Blocked on C2 — an 11-value enum cannot map to a continuous native parameter, so the mapping waits for the restructure."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 11,
      "description": "One <code>Progress</code> axis with 11 discrete values (<code>0, 10 … 100</code>) = <strong>11 variants</strong>. Fill length is <code>308 × Progress</code>; at <code>0</code> no fill path is drawn at all. The Restructure verdict collapses the axis into a single component taking a continuous value, dropping this to <strong>1</strong> plus a <code>state</code> axis. Per-variant node IDs are not listed — the ones previously here belonged to the retired Sticker Sheets set <code>18577:13227</code>, and the current set has not been re-read.",
      "columns": [
        "#",
        "Progress",
        "Fill length",
        "Rendering"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>0</code>",
            "0 / 308",
            "Track only — no fill path drawn"
          ]
        },
        {
          "cells": [
            "2",
            "<code>10</code>",
            "30.8 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "3",
            "<code>20</code>",
            "61.6 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "4",
            "<code>30</code>",
            "92.4 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "5",
            "<code>40</code>",
            "123.2 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "6",
            "<code>50</code>",
            "154 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "7",
            "<code>60</code>",
            "184.8 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "8",
            "<code>70</code>",
            "215.6 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "9",
            "<code>80</code>",
            "246.4 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "10",
            "<code>90</code>",
            "277.2 / 308",
            "Track + fill"
          ]
        },
        {
          "cells": [
            "11",
            "<code>100</code>",
            "308 / 308",
            "Track + fill"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "October 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Repointed to the 2026 Working File set · node 4244:187349",
      "rows": [
        {
          "body": "<strong>Page repointed from Sticker Sheets v2 <code>18577:13227</code> to 2026 Working File <code>4244:187349</code>.</strong> The spec card already documented the newer set; the component meta, the Code tab and the Overview still described the retired one, so the page contradicted itself. Everything now names one set.",
          "delta": {
            "kind": "resolved",
            "label": "Supersession"
          }
        },
        {
          "body": "<strong>Property is <code>Progress</code>, not <code>percentage</code>.</strong> Read off the property panel: <code>Progress · 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</code>. The rename closes half of the old C2 finding — the name now matches native convention, and only the enum-versus-scalar typing remains.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Partly closed"
          }
        },
        {
          "body": "<strong>The raster <code>back</code> / <code>front</code> layers are gone.</strong> Both zones are vector stroked paths, 5 wide with round caps, confirmed by <code>get_svg</code> and <code>export_node_as_image</code> on the set. C6 moves from Requires Rework to Ready, and the raster recommendation is replaced by one about naming and binding the two zones.",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>C3 downgraded to Needs Refinement.</strong> It previously claimed track and fill were bound to <code>main/progress-bar/color/*</code>. No binding can actually be read — the plugin returns no variable references — so the claim was unsupported. Recorded as unconfirmed pending a Dev Mode check.",
          "delta": {
            "kind": "open",
            "label": "C3 Corrected"
          }
        },
        {
          "body": "<strong>Code tab filled in.</strong> Installation blocks, usage snippets for determinate and indeterminate, and usage guidelines were all empty. The property mapping now maps <code>Progress</code> rather than <code>percentage</code> and states plainly which rows describe a Figma value that does not exist yet.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Per-variant node IDs dropped from the inventory.</strong> The eleven listed (<code>27:64947</code> onward) belonged to the retired set. The table now carries the fill maths — <code>308 × Progress</code>, with no fill path drawn at <code>0</code> — and says the current set has not been re-read. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Re-read needed"
          }
        }
      ]
    },
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
