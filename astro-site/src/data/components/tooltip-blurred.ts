import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/tooltip-blurred.js`.
const tooltipBlurredDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Header',
        prop: 'header',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'shown' },
          { value: 'false', label: 'hidden' },
        ],
      },
      {
        label: 'Description',
        prop: 'description',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'shown' },
          { value: 'false', label: 'hidden' },
        ],
      },
      {
        label: 'Pointer',
        prop: 'pointer',
        defaultValue: 'top',
        options: [
          { value: 'top', label: 'top' },
          { value: 'right', label: 'right' },
          { value: 'bottom', label: 'bottom' },
          { value: 'left', label: 'left' },
        ],
      },
    ],
  },
];

export const tooltipBlurred: ComponentData = {
  "meta": {
    "slug": "tooltip-blurred",
    "name": "Tooltip Blurred and Transparent",
    "node": "49:335349",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=49-335349",
    "description": "A dark, translucent directional tooltip with a backdrop blur, for use over photographic or high-contrast content.",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Tooltip",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Tooltip",
      "text": "Superseded by <a href=\"/components/tooltip\">Tooltip</a>. The visual treatment that shipped as a standalone component is now <code>Appearance=Translucent</code> on the unified set. Note that the appearance is a palette only — no blur or alpha is attached to the fill — so the reduce-transparency fallback raised here no longer applies. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "inContextNote": "Used over photographic, gradient, or high-contrast imagery where an opaque white tooltip would feel heavy. The backdrop blur keeps the background legible while the dark surface carries white type with full contrast.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <defs>\n            <linearGradient id=\"tbt-ctx-bg\" x1=\"34\" y1=\"6\" x2=\"166\" y2=\"114\" gradientUnits=\"userSpaceOnUse\">\n              <stop offset=\"0\" stop-color=\"#003B8C\"></stop>\n              <stop offset=\"1\" stop-color=\"#005CE5\"></stop>\n            </linearGradient>\n          </defs>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" fill=\"url(#tbt-ctx-bg)\"></rect>\n          <circle cx=\"70\" cy=\"40\" r=\"14\" fill=\"#FFFFFF\" opacity=\".25\"></circle>\n          <circle cx=\"128\" cy=\"86\" r=\"22\" fill=\"#FFFFFF\" opacity=\".2\"></circle>\n          \n          <circle cx=\"150\" cy=\"42\" r=\"4\" fill=\"#FFFFFF\"></circle>\n          \n          <rect x=\"50\" y=\"52\" width=\"88\" height=\"36\" rx=\"3\" fill=\"#0A2757\" fill-opacity=\"0.8\"></rect>\n          <path d=\"M138 58 l4 -4 0 8 z\" fill=\"#0A2757\" fill-opacity=\"0.8\"></path>\n          <rect x=\"56\" y=\"58\" width=\"32\" height=\"4\" rx=\"1\" fill=\"#FFFFFF\"></rect>\n          <rect x=\"56\" y=\"66\" width=\"60\" height=\"2\" rx=\"1\" fill=\"#F6F9FD\" fill-opacity=\".8\"></rect>\n          <rect x=\"56\" y=\"71\" width=\"50\" height=\"2\" rx=\"1\" fill=\"#F6F9FD\" fill-opacity=\".8\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tbt-demo-preview\"><div style=\"display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;background:radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 18%),radial-gradient(circle at 75% 70%, rgba(255,210,120,0.45) 0%, rgba(255,210,120,0) 22%),radial-gradient(circle at 60% 20%, rgba(255,120,160,0.35) 0%, rgba(255,120,160,0) 25%),linear-gradient(135deg,#2B4F7A 0%,#5A7AAD 50%,#B36B8A 100%);border-radius:8px;\"><div style=\"position:relative;width:336px;background:rgba(10,39,87,0.80);backdrop-filter:blur(2.5px);-webkit-backdrop-filter:blur(2.5px);border-radius:6px;padding:16px;box-sizing:border-box;display:flex;flex-direction:column;gap:4px;\"><div style=\"position:absolute;width:0;height:0;left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(10,39,87,0.8);\"></div><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#FFFFFF;\">Header</div><div style=\"font-family:'BarkAda','Proxima Soft',system-ui;font-size:12px;line-height:18px;font-weight:600;color:rgba(246,249,253,0.8);\">Description goes here</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">header</span><select class=\"demo-panel-select\" id=\"tbt-ctrl-header\" onchange=\"updateTbtDemo()\"><option value=\"true\" selected=\"\">shown</option><option value=\"false\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select class=\"demo-panel-select\" id=\"tbt-ctrl-desc\" onchange=\"updateTbtDemo()\"><option value=\"true\" selected=\"\">shown</option><option value=\"false\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">pointer</span><select class=\"demo-panel-select\" id=\"tbt-ctrl-pointer\" onchange=\"updateTbtDemo()\"><option value=\"top\" selected=\"\">top</option><option value=\"right\">right</option><option value=\"bottom\">bottom</option><option value=\"left\">left</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">scene</span><select class=\"demo-panel-select\" id=\"tbt-ctrl-scene\" onchange=\"updateTbtDemo()\"><option value=\"photo\" selected=\"\">photo</option><option value=\"gradient\">gradient</option><option value=\"flat\">flat</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Covers a real use case (tooltips over imagery), but the <em>component</em> is the wrong unit of reuse — the reusable thing is a translucent <em>appearance</em> on the canonical Tooltip. Today a consumer must pick between 3 sibling components to choose a skin. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Surface, label, and description colors bind to <code>main/nudge/color/secondary/*</code> tokens; spacing to <code>space/*</code>; radius to <code>radius/radius-2</code>. Blur amount (2.5 px) is a raw literal — no <code>effect/blur-*</code> token. Pointer is a raster. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Component name is a visual-effect description (\"Blurred and Transparent\") rather than a role. Pointer direction is already correctly modelled as a single <code>pointer</code> enum here — which makes the 4-boolean shape on <code>Tooltip V2</code> even harder to defend. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "No slots for leading icon or body content. No dismiss control. No CTA support. If a consumer needs any of those, they must switch to a different Tooltip component — a clear signal this should be an appearance, not a component. <span class=\"tag-open tag-c4\">C4</span>"
      }
    ],
    "behavior": [
      {
        "state": "Show / hide",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Expected: fade + slight scale-in anchored on the pointer side. Under the unified schema, shared with other <code>appearance</code> values."
      },
      {
        "state": "Backdrop blur",
        "ios": "na",
        "android": "na",
        "property": "backdrop-blur 2.5 px",
        "notes": "iOS: <code>.background(.ultraThinMaterial)</code> or a custom blurred <code>UIVisualEffectView</code>. Compose: <code>Modifier.blur()</code> or a Haze effect for true behind-content blur."
      },
      {
        "state": "Tap outside",
        "ios": "na",
        "android": "na",
        "property": "Not defined",
        "notes": "Standard tooltip contract — tap-outside dismisses. Same as other Tooltip siblings."
      },
      {
        "state": "Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "No interaction states modelled. No dismiss affordance at all — consumer must rely on tap-outside or a timer."
      },
      {
        "state": "Reduce transparency",
        "ios": "na",
        "android": "na",
        "property": "Not defined",
        "notes": "iOS: respect <code>UIAccessibility.isReduceTransparencyEnabled</code> — fall back to an opaque <code>#0A2757</code> surface. Android: same fallback when high-contrast mode is on."
      }
    ],
    "resolved": [],
    "open": [],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Default"
        ],
        "rows": [
          {
            "role": "Surface",
            "token": "main/nudge/color/secondary/bg",
            "values": [
              "#0A2757 @ 80% group opacity"
            ]
          },
          {
            "role": "Backdrop blur",
            "token": "— (untokenized literal)",
            "values": [
              "2.5 px"
            ]
          },
          {
            "role": "Header label",
            "token": "main/nudge/color/secondary/label",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Description",
            "token": "main/nudge/color/secondary/description",
            "values": [
              "#F6F9FD @ 80% (#F6F9FDCC)"
            ]
          },
          {
            "role": "Pointer triangle",
            "token": "— (raster, 4 images)",
            "values": [
              "#0A2757 (baked into raster)"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Surface width — top / bottom",
            "token": "—",
            "values": [
              "336 px"
            ]
          },
          {
            "role": "Surface width — left / right",
            "token": "—",
            "values": [
              "336 px (content) · 348 px (with pointer offset)"
            ]
          },
          {
            "role": "Surface corner radius",
            "token": "radius/radius-2",
            "values": [
              "6 px"
            ]
          },
          {
            "role": "Surface padding",
            "token": "space/space-16",
            "values": [
              "16 px all sides"
            ]
          },
          {
            "role": "Surface background alpha",
            "token": "—",
            "values": [
              "0.80 (group opacity)"
            ]
          },
          {
            "role": "Backdrop blur",
            "token": "—",
            "values": [
              "2.5 px (untokenized)"
            ]
          },
          {
            "role": "Header → description gap",
            "token": "space/space-4",
            "values": [
              "4 px"
            ]
          },
          {
            "role": "Pointer width / height",
            "token": "—",
            "values": [
              "22 × 12 (top/bottom) · 20 × 12 (left/right) — raster"
            ]
          },
          {
            "role": "Pointer → surface gap",
            "token": "space/space-0",
            "values": [
              "0 px (abutting)"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "Header",
            "token": "Primary/Headlines/Block",
            "values": [
              "Proxima Soft Bold · 18 / 23 · +0.25"
            ]
          },
          {
            "role": "Description",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda Semibold · 12 / 18 · +0"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tooltip:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Tooltip Blurred and Transparent",
          "swift": "Tooltip <em>(same component)</em>",
          "compose": "EBTooltip"
        },
        {
          "figma": "(distinct sibling)",
          "swift": "appearance: .translucent",
          "compose": ".ebAppearance(.translucent)"
        },
        {
          "figma": "pointer: top / right / bottom / left",
          "swift": "placement: .top / .right / .bottom / .left",
          "compose": "arrowEdge: Edge"
        },
        {
          "figma": "header (baked text)",
          "swift": "title: String?",
          "compose": "title: String?"
        },
        {
          "figma": "description (baked text)",
          "swift": "body: String?",
          "compose": "body: String?"
        },
        {
          "figma": "backdrop-blur 2.5 px (raw)",
          "swift": "(absorbed into .translucent appearance)",
          "compose": ".background(.ultraThinMaterial)"
        },
        {
          "figma": "surface @ 80% opacity",
          "swift": "main/nudge/color/translucent/bg",
          "compose": "Color.nudgeTranslucentBg"
        },
        {
          "figma": "(not modelled — no close)",
          "swift": "hasDismiss: Bool (inherited)",
          "compose": "dismissible: Bool"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tooltip/EBTooltip.swift (shared — no separate file)",
        "compose": "android/components/tooltip/EBTooltip.kt (shared — no separate file)"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Translucent tooltip over imagery</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Featured deal\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Limited-time discount on your next top-up.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">top</span>\n)\n.<span class=\"prp\">ebAppearance</span>(.<span class=\"prp\">translucent</span>)\n\n<span class=\"cmt\">// Under the hood, .translucent applies:</span>\n<span class=\"cmt\">//   .background(.ultraThinMaterial)</span>\n<span class=\"cmt\">//   .foregroundStyle(.white)</span>\n<span class=\"cmt\">// + respects UIAccessibility.isReduceTransparencyEnabled</span>",
        "compose": "<span class=\"cmt\">// Translucent tooltip over imagery</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Featured deal\"</span>,\n    body = <span class=\"str\">\"Limited-time discount on your next top-up.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Top,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.Translucent\n)\n\n<span class=\"cmt\">// Under the hood, .Translucent applies:</span>\n<span class=\"cmt\">//   Modifier.blur(radius = 2.5.dp) on the backing layer</span>\n<span class=\"cmt\">//   background = nudgeTranslucentBg (#0A2757 @ 80%)</span>\n<span class=\"cmt\">// + respects high-contrast settings (falls back to solid #0A2757)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Reduce transparency",
        "ios": "Respect <code>UIAccessibility.isReduceTransparencyEnabled</code> — fall back to an opaque <code>#0A2757</code> surface with no blur.",
        "android": "Respect high-contrast text setting — fall back to an opaque <code>#0A2757</code> surface with no blur."
      },
      {
        "requirement": "Contrast",
        "ios": "White-on-<code>#0A2757</code> meets WCAG AA at both states. Over photographic backdrops, the 80% alpha + blur keeps contrast above 4.5:1 in the designer's tested scenes.",
        "android": "Same. Always test the <code>.translucent</code> appearance over real content; do not use it for critical error messaging."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Respect <code>UIAccessibility.isReduceMotionEnabled</code> — fade only; skip scale-in.",
        "android": "Respect <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code> — fade only when motion is reduced."
      },
      {
        "requirement": "Role",
        "ios": "Announce as tooltip; group title + body via <code>.accessibilityElement(children: .combine)</code>.",
        "android": "<code>semantics { role = Role.Popup; mergeDescendants = true }</code>."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Third sibling for one primitive. A visual treatment shipped as a discrete component. Consolidate into the canonical Tooltip."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Component name is a visual-effect description (\"Blurred and Transparent\"). Should collapse into <code>Tooltip / appearance=.translucent</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Surface, label, description, radius, and spacing all bound to tokens. The <strong>blur amount</strong> (2.5 px) and the <strong>80% group opacity</strong> are raw literals — move to a translucent-surface token set."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Backdrop-blur is a platform material (<code>.ultraThinMaterial</code> / <code>Modifier.blur()</code>), not a component shape. A 1:1 Figma→native mapping today would emit a drawn blur layer instead of calling the correct API. Fixes when consolidated as an <code>appearance</code> value."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed / Focused / Dismissing states. No dismiss affordance at all (no close X)."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pointer triangle is 4 raster images (one per edge). Same anti-pattern as <code>Tooltip V2</code>."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation — mapping today's shape would cement a duplicate component. Map once as one of the unified Tooltip's <code>appearance</code> values."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "One enum axis yields <strong>4 variants</strong> — <code>pointer: top / right / bottom / left</code>. Header + description are present in all shipped variants. Under the unified Tooltip, these 4 collapse into the shared <code>placement</code> enum, and the distinguishing surface treatment moves to <code>appearance=.translucent</code>.",
      "columns": [
        "#",
        "Pointer",
        "Dimensions",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "top",
            "336 × 89",
            "49:335345"
          ]
        },
        {
          "cells": [
            "2",
            "right",
            "348 × 77",
            "49:335347"
          ]
        },
        {
          "cells": [
            "3",
            "bottom",
            "336 × 89",
            "49:335348"
          ]
        },
        {
          "cells": [
            "4",
            "left",
            "348 × 77",
            "49:335346"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Consolidated into Tooltip · node 6295:79647",
      "rows": [
        {
          "body": "<strong>Superseded by Tooltip</strong> — <code>Tooltip Blurred and Transparent</code> was consolidated into the unified <a href=\"/components/tooltip\">Tooltip</a> set (node <code>6295:79647</code>) alongside its two siblings. Verdict changed to Remove; open issues and recommendations cleared, since they are resolved on the successor.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "Consolidated"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 49:335349",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Fold into the canonical Tooltip as <code>appearance: .translucent</code>. Do not ship a separate \"Tooltip Blurred and Transparent\" component. <span class=\"tag-open tag-c1 tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Third sibling for one primitive</strong> — Tooltip V2, Onboarding - Tooltip, Tooltip Blurred and Transparent. Merge via <code>appearance</code> enum. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Visual-effect name</strong> — \"Blurred and Transparent\" describes a treatment, not a role. Collapse to <code>Tooltip / appearance=.translucent</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Backdrop-blur is a platform material</strong> — iOS uses <code>.ultraThinMaterial</code>; Compose uses <code>Modifier.blur()</code>. A component can't model a native modifier 1:1. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — No interaction states, no dismiss</strong> — No Pressed / Focused / Dismissing; no close control at all. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster pointer + untokenized blur</strong> — 4 raster pointer images; blur radius (2.5 px) is a raw literal. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on consolidation. Mapping today's shape would cement a duplicate. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Pointer enum ✓</strong> — Unlike <code>Tooltip V2</code>'s 4-boolean pointer shape, this sibling already uses a single <code>pointer</code> enum — the correct model. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — Surface / label / description bound to <code>main/nudge/color/secondary/*</code>. Spacing via <code>space/*</code>. Radius via <code>radius/radius-2</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        }
      ]
    }
  ]
};
