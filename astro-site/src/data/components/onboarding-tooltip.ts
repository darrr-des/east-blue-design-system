import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/onboarding-tooltip.js`.
const onboardingTooltipDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'pointer',
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

export const onboardingTooltip: ComponentData = {
  "meta": {
    "slug": "onboarding-tooltip",
    "name": "Onboarding - Tooltip",
    "node": "51:17066",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=51-17066",
    "description": "A directional tooltip used in onboarding overlays, with a pointer, header, description, and dismiss control.",
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
      "text": "Superseded by <a href=\"/components/tooltip\">Tooltip</a>. This component was folded into the unified 24-variant set at node <code>6295:79647</code>, which resolves every issue raised here — the pointer is a vector, the close is a DS icon instance, the pointer schema became a single <code>Placement</code> enum, and content moved into named Figma slots. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "inContextNote": "A dismissible tip anchored to a feature element — commonly rendered during first-time user education, feature discovery, and coach-mark flows.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Wallet</text>\n          \n          <circle cx=\"100\" cy=\"42\" r=\"4\" fill=\"#005CE5\"></circle>\n          \n          <path d=\"M98 50 l2 -2 2 2 z\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-linejoin=\"round\"></path>\n          <rect x=\"50\" y=\"50\" width=\"100\" height=\"32\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"></rect>\n          <rect x=\"56\" y=\"56\" width=\"34\" height=\"4\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"56\" y=\"64\" width=\"72\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"56\" y=\"69\" width=\"58\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <path d=\"M138 56 l4 4 M142 56 l-4 4\" stroke=\"#0A2757\" stroke-width=\"1.3\" stroke-linecap=\"round\"></path>\n          \n          <rect x=\"42\" y=\"94\" width=\"60\" height=\"14\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"106\" y=\"94\" width=\"56\" height=\"14\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ont-demo-preview\"><div style=\"display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;\"><div style=\"position:relative;width:336px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;padding:16px;box-sizing:border-box;box-shadow:0 0 4px rgba(2,14,34,0.06);\"><div style=\"position:absolute;width:0;height:0;left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFFFFF;filter:drop-shadow(0 -1px 0 #E5EBF4);\"></div><div style=\"display:flex;align-items:center;gap:24px;width:100%;\"><div style=\"flex:1 0 0;min-width:0;font-family:'Proxima Soft',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;\">Header</div><div style=\"flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M1 1l10 10M11 1L1 11\" stroke=\"#0A2757\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div style=\"font-family:'BarkAda','Proxima Soft',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;margin-top:4px;\">Description goes here</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Placement</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">pointer</span><select class=\"demo-panel-select\" id=\"ont-ctrl-pointer\" onchange=\"updateOntDemo()\"><option value=\"top\" selected=\"\">top</option><option value=\"right\">right</option><option value=\"bottom\">bottom</option><option value=\"left\">left</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Works as a dismissible tip anchored to any target. But the \"Onboarding -\" prefix steers consumers toward walkthroughs it can't support (no step indicator, no Next/Skip). Misleading name fragments the primitive. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Surface, type, and spacing bind to <code>main/nudge/*</code> + <code>space/*</code> tokens — shares the collection with Tooltip V2. But the pointer arrow is 4 raster copies of one shape, and the close is an image asset rather than a DS icon instance. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Pointer is modeled as a single enum here, but Tooltip V2 models the same concept as 4 booleans. Siblings should not disagree on the shape of a shared axis. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "No Figma Slot for body content. No way to add an icon, an avatar, or a CTA — consumers who need those must switch components entirely. The primitive is closed. <span class=\"tag-open tag-c4\">C4</span>"
      }
    ],
    "behavior": [
      {
        "state": "Show / hide",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Expected: fade + slight scale-in anchored on the pointer side."
      },
      {
        "state": "Tap close (X)",
        "ios": "yes",
        "android": "yes",
        "property": "Close layer",
        "notes": "Dismiss icon is present but not wired to an interactive property. Close is an image asset, not a button instance."
      },
      {
        "state": "Tap outside",
        "ios": "na",
        "android": "na",
        "property": "Not defined",
        "notes": "Standard tooltip contract — tap-outside dismisses. Should be documented on the component."
      },
      {
        "state": "Primary CTA",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Despite the \"Onboarding\" name, no CTA is provided. Consumers must switch to Tooltip V2 for any advance/skip control."
      },
      {
        "state": "Pressed / Focused on close",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Close is a raw image; no pressed / focused treatment and no hit target metadata."
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
            "token": "main/nudge/color/primary/bg",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Border",
            "token": "main/nudge/color/primary/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Header label",
            "token": "main/nudge/color/primary/label",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Description",
            "token": "main/nudge/color/primary/description",
            "values": [
              "#6780A9"
            ]
          },
          {
            "role": "Close icon",
            "token": "main/nudge/color/primary/icon-close",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Shadow",
            "token": "elevation/app/shadow-low",
            "values": [
              "#020E22 · 6 %"
            ]
          },
          {
            "role": "Pointer triangle",
            "token": "—",
            "values": [
              "raster (4 images)"
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
            "role": "Surface width",
            "token": "—",
            "values": [
              "336 px"
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
            "role": "Surface border",
            "token": "main/nudge/color/primary/border",
            "values": [
              "1 px solid"
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
            "role": "Header row gap (title ↔ close)",
            "token": "—",
            "values": [
              "24 px"
            ]
          },
          {
            "role": "Title ↔ description gap",
            "token": "space/space-4",
            "values": [
              "4 px"
            ]
          },
          {
            "role": "Close hit-area padding",
            "token": "—",
            "values": [
              "3 px (18 × 18 icon, ~24 × 24 hit)"
            ]
          },
          {
            "role": "Pointer width / height",
            "token": "—",
            "values": [
              "24 × 12 (raster image)"
            ]
          },
          {
            "role": "Shadow offset / blur",
            "token": "elevation/app/shadow-low",
            "values": [
              "0 / 0 / 4 / 0"
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
          "figma": "Onboarding - Tooltip (this)",
          "swift": "Tooltip · appearance: .default",
          "compose": "EBTooltip().ebAppearance(.default)"
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
          "swift": "body: String? (or content slot)",
          "compose": "body: String?"
        },
        {
          "figma": "close (image asset, always shown)",
          "swift": "hasDismiss: Bool",
          "compose": "dismissible: Bool"
        },
        {
          "figma": "(not modeled)",
          "swift": "cta: .none / .primary / .pair",
          "compose": "primary / secondary: TooltipAction?"
        },
        {
          "figma": "(not modeled)",
          "swift": "leading (Slot)",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "(not modeled)",
          "swift": "onDismiss",
          "compose": "onDismiss: () -&gt; Void"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tooltip/EBTooltip.swift",
        "compose": "android/components/tooltip/EBTooltip.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Equivalent of today's \"Onboarding - Tooltip · pointer=bottom\"</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Quick transfers\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">bottom</span>\n)\n.<span class=\"prp\">onDismiss</span> { showTip = <span class=\"kw\">false</span> }\n\n<span class=\"cmt\">// pointer=right · same appearance, placement flipped</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Your balance\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Tap to reveal or hide.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">right</span>\n)",
        "compose": "<span class=\"cmt\">// Equivalent of today's \"Onboarding - Tooltip · pointer=bottom\"</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Quick transfers\"</span>,\n    body = <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Bottom,\n    onDismiss = { showTip = <span class=\"kw\">false</span> }\n)\n\n<span class=\"cmt\">// pointer=right</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Your balance\"</span>,\n    body = <span class=\"str\">\"Tap to reveal or hide.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Right\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role + focus",
        "ios": "Announce as <code>.accessibilityAddTraits(.isModal)</code> when dismissible; VoiceOver moves focus to the tooltip on appear.",
        "android": "<code>semantics { role = Role.Popup }</code>; TalkBack focuses the tooltip container on appear."
      },
      {
        "requirement": "Close control",
        "ios": "Wrap close as a <code>Button</code> with <code>accessibilityLabel</code> \"Dismiss tip\" and 44×44 hit target (current 24 × 24 is below minimum).",
        "android": "<code>IconButton</code> with <code>contentDescription = \"Dismiss tip\"</code>; 48×48 dp minimum (current hit area is ~24 × 24 dp)."
      },
      {
        "requirement": "Dismiss-outside",
        "ios": "Do not auto-dismiss while VoiceOver is active — hold until user explicitly moves on.",
        "android": "Do not auto-dismiss while TalkBack is active."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Respect <code>UIAccessibility.isReduceMotionEnabled</code> — fade only, skip scale-in.",
        "android": "Respect <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code> — fade only when motion reduced."
      },
      {
        "requirement": "Combined label",
        "ios": "Read title + body + \"Dismiss\" as one phrase; avoid reading pointer.",
        "android": "<code>mergeDescendants = true</code> on the container."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "\"Onboarding -\" prefix misleads — component ships no walkthrough content. 3 sibling Tooltip components for one primitive. Close uses a raw image inside a generic \"Close\" frame."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Pointer is correctly modeled as one enum here (cleaner than Tooltip V2's 4 booleans) — but siblings should agree on the shape of the shared axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface, border, label, description, close icon, shadow all bound to <code>main/nudge/*</code> / <code>elevation/*</code>. Spacing via <code>space/*</code>. Radius via <code>radius/radius-2</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Closed shape — no slot for body content or CTA. Maps cleanly to native only after consolidation into the unified Tooltip with content slot + cta axis."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed / Focused on close. No appearing / dismissing lifecycle annotated. Close isn't wired to a dismiss property."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pointer is 4 raster images (one per direction). Close is an image asset (<code>imgShapeFull</code>) rather than an <code>icon/close</code> instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation. Mapping today's sibling component would cement the wrong schema."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "One axis: <code>pointer</code> (4 values) = <strong>4 variants</strong>. Content (header / description / close) is fixed across all variants.",
      "columns": [
        "#",
        "Pointer",
        "Dimensions",
        "Pointer asset",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "top",
            "336 × 90",
            "imgPointer",
            "51:17065"
          ]
        },
        {
          "cells": [
            "2",
            "bottom",
            "336 × 89",
            "imgPointer1",
            "51:17063"
          ]
        },
        {
          "cells": [
            "3",
            "left",
            "348 × 78",
            "imgPointer2",
            "51:17062"
          ]
        },
        {
          "cells": [
            "4",
            "right",
            "348 × 78",
            "imgPointer3",
            "51:17064"
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
          "body": "<strong>Superseded by Tooltip</strong> — <code>Onboarding - Tooltip</code> was consolidated into the unified <a href=\"/components/tooltip\">Tooltip</a> set (node <code>6295:79647</code>) alongside its two siblings. Verdict changed to Remove; open issues and recommendations cleared, since they are resolved on the successor.\n          <span class=\"tag-fixed\">Resolved</span>",
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
      "header": "Initial Assessment · node 51:17066",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Fold into the unified Tooltip as <code>appearance: .default</code> with the <code>placement</code> axis. The \"Onboarding -\" prefix is misleading (no walkthrough content ships). <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Misleading name</strong> — No step indicator, no Next/Skip/Back CTAs, no progress dots. Component is not onboarding-specific. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C1 — 3 siblings for 1 primitive</strong> — Tooltip V2, Onboarding - Tooltip, Tooltip Blurred and Transparent. Merge via <code>appearance</code> + <code>placement</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Pointer schema disagrees with sibling</strong> — This sibling uses one enum; Tooltip V2 uses 4 booleans. Family members should agree on the shape of a shared axis. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — No slot for body or CTA</strong> — Closed shape forces consumers to switch to Tooltip V2 for anything richer than header + description. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — No dismiss/focus states</strong> — Close is a raw image; Pressed / Focused / Lifecycle not modeled. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster pointer + raw close</strong> — 4 raster images (one per direction). Close is an image asset rather than <code>icon/close</code>. Vector + icon instance. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on consolidation. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — Surface / border / label / description / close / shadow all bound to <code>main/nudge/*</code> and <code>elevation/*</code>. Spacing via <code>space/*</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        }
      ]
    }
  ]
};
