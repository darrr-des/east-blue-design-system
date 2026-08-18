import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/tooltip-v2.js`.
const tooltipV2DemoControls: DemoControlSection[] = [
  {
    heading: 'Content',
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
        label: 'Icon',
        prop: 'icon',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'hidden' },
          { value: 'true', label: 'shown' },
        ],
      },
      {
        label: 'CTA',
        prop: 'cta',
        defaultValue: 'one',
        options: [
          { value: 'none', label: 'none' },
          { value: 'one', label: 'one' },
          { value: 'two', label: 'two' },
        ],
      },
    ],
  },
  {
    heading: 'Placement',
    rows: [
      {
        label: 'Pointer',
        prop: 'pointer',
        defaultValue: 'bottom',
        options: [
          { value: 'top', label: 'top' },
          { value: 'right', label: 'right' },
          { value: 'bottom', label: 'bottom' },
          { value: 'left', label: 'left' },
          { value: 'none', label: 'none' },
        ],
      },
    ],
  },
];

export const tooltipV2: ComponentData = {
  "meta": {
    "slug": "tooltip-v2",
    "name": "Tooltip V2",
    "node": "70:14908",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=70-14908",
    "description": "A small floating callout anchored to a target with a directional pointer; ships in eight pointer positions.",
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
      "text": "Superseded by <a href=\"/components/tooltip\">Tooltip</a>. The version suffix is gone, the four pointer booleans became a single <code>Placement</code> enum, the leading placeholder and CTA moved into <code>⤷ AssetSlot</code> and <code>⤷ ActionSlot</code>, and the raster pointer and close image were replaced with a vector and a DS icon instance. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "inContextNote": "Tooltips sit over a target element (tab, button, icon, card) with a pointer aimed at the thing they describe.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Wallet</text>\n          \n          <circle cx=\"150\" cy=\"42\" r=\"4\" fill=\"#005CE5\"></circle>\n          \n          <rect x=\"50\" y=\"52\" width=\"88\" height=\"36\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"></rect>\n          <path d=\"M138 58 l4 -4 0 8 z\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-linejoin=\"round\"></path>\n          <rect x=\"56\" y=\"58\" width=\"32\" height=\"4\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"56\" y=\"66\" width=\"60\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"56\" y=\"71\" width=\"50\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"118\" y=\"78\" width=\"16\" height=\"6\" rx=\"3\" fill=\"#005CE5\"></rect>\n          <text x=\"126\" y=\"83\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"4\" font-weight=\"700\" font-family=\"system-ui\">Next</text>\n          \n          <rect x=\"42\" y=\"98\" width=\"60\" height=\"10\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"106\" y=\"98\" width=\"56\" height=\"10\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tt2-demo-preview\"><div style=\"display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;\"><div style=\"position:relative;width:335px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;padding:16px;box-sizing:border-box;\"><div style=\"position:absolute;width:0;height:0;left:50%;bottom:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFFFFF;filter:drop-shadow(0 1px 0 #E5EBF4);\"></div><div style=\"display:flex;align-items:flex-start;gap:8px;\"><div style=\"flex:1 0 0;min-width:0;display:flex;flex-direction:column;gap:4px;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;\">Header</div><div style=\"font-family:'BarkAda','Proxima Soft',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;\">Description goes here. This is the second sentence. The third sentence.</div></div><div style=\"flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M1 1l10 10M11 1L1 11\" stroke=\"#0A2757\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div style=\"display:flex;align-items:center;margin-top:16px;justify-content:flex-end;\"><div style=\"display:inline-flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:16px;line-height:16px;font-weight:700;letter-spacing:0.25px;\">Next</div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">header</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-header\" onchange=\"updateTt2Demo()\"><option value=\"true\" selected=\"\">shown</option><option value=\"false\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-desc\" onchange=\"updateTt2Demo()\"><option value=\"true\" selected=\"\">shown</option><option value=\"false\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">icon</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-icon\" onchange=\"updateTt2Demo()\"><option value=\"false\" selected=\"\">hidden</option><option value=\"true\">shown</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-cta\" onchange=\"updateTt2Demo()\"><option value=\"none\">none</option><option value=\"one\" selected=\"\">one</option><option value=\"two\">two</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Placement</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">pointer</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-pointer\" onchange=\"updateTt2Demo()\"><option value=\"top\">top</option><option value=\"right\">right</option><option value=\"bottom\" selected=\"\">bottom</option><option value=\"left\">left</option><option value=\"none\">none</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Covers the main in-product tooltip pattern across onboarding, tips, and nudges. But because 3 siblings exist for 3 skins, consumers have to hunt for the right one — the primitive is fragmented. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Surface, type, and spacing bind to <code>main/nudge/*</code> + <code>space/*</code> tokens. But the pointer arrow is a raster image (4 rotated copies of one shape) and the leading icon is a gray placeholder circle, not a slot. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Component is named <code>Tooltip V2</code> — version suffixes don't belong in production DS names. Pointer direction is 4 separate booleans rather than one enum, letting consumers set nonsensical combinations (e.g. all 4 pointers on). <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "No Figma Slot for leading icon or body content. CTAs are baked Button instances that re-implement pill padding rather than composing the Button component consistently across variants (one variant uses px-16 / py-12, another uses px-8 / py-6). <span class=\"tag-open tag-c4\">C4</span>"
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
        "notes": "Dismiss icon is present in markup but not wired to a property or interaction. Contract should be explicit."
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
        "ios": "yes",
        "android": "yes",
        "property": "CTA=one / two",
        "notes": "Advances in onboarding or performs the tip's primary action."
      },
      {
        "state": "Secondary CTA",
        "ios": "yes",
        "android": "yes",
        "property": "CTA=two",
        "notes": "\"Back\" in onboarding; \"Learn more\" in tips."
      },
      {
        "state": "Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "CTAs and close have no pressed/focused treatment on the tooltip component itself. Inner Button instances handle their own press, but close + the tooltip surface do not."
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
            "role": "Leading icon placeholder",
            "token": "—",
            "values": [
              "#C2C6CF (not tokenized — placeholder)"
            ]
          },
          {
            "role": "CTA primary bg",
            "token": "main/button/primary/brand/enabled/bg",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "CTA primary label",
            "token": "main/button/primary/brand/enabled/label",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "CTA secondary border / label",
            "token": "main/button/secondary/brand/enabled/border",
            "values": [
              "#005CE5"
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
              "335 px (content) · 359 px (with offsets)"
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
            "role": "Surface padding — hero",
            "token": "space/space-16",
            "values": [
              "16 px all sides"
            ]
          },
          {
            "role": "Surface padding — text+CTA",
            "token": "space/space-16 · space/space-12",
            "values": [
              "16 / 12 (inconsistent with hero)"
            ]
          },
          {
            "role": "Leading icon size",
            "token": "—",
            "values": [
              "46 × 46 (placeholder circle)"
            ]
          },
          {
            "role": "Close size",
            "token": "—",
            "values": [
              "18 × 18 (image asset)"
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
            "role": "Icon → text gap",
            "token": "space/space-4",
            "values": [
              "4 px"
            ]
          },
          {
            "role": "Text-container gap",
            "token": "space/space-8",
            "values": [
              "8 px"
            ]
          },
          {
            "role": "CTA row gap (two CTAs)",
            "token": "space/space-8",
            "values": [
              "8 px (justify between)"
            ]
          },
          {
            "role": "CTA Button — size",
            "token": "—",
            "values": [
              "XSmall (Button component)"
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
          },
          {
            "role": "CTA label",
            "token": "Primary/Label/Base",
            "values": [
              "Proxima Soft Bold · 16 / 16 · +0.25"
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
          "figma": "3 sibling components",
          "swift": "1 component: <code>Tooltip</code>",
          "compose": "EBTooltip"
        },
        {
          "figma": "(sibling = appearance)",
          "swift": "appearance: .default / .onboarding / .translucent",
          "compose": ".ebAppearance(.default / .onboarding / .translucent)"
        },
        {
          "figma": "pointerTop/Right/Bottom/Left: Bool × 4",
          "swift": "placement: .top / .right / .bottom / .left / .none",
          "compose": "arrowEdge: Edge"
        },
        {
          "figma": "header: Bool + text baked",
          "swift": "title: String?",
          "compose": "title: String?"
        },
        {
          "figma": "description: Bool + text baked",
          "swift": "body: String? (or content slot)",
          "compose": "body: String?"
        },
        {
          "figma": "icon: Bool (gray placeholder)",
          "swift": "leading (Slot)",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "Close image asset (always)",
          "swift": "hasDismiss: Bool",
          "compose": "dismissible: Bool"
        },
        {
          "figma": "cta: none / one / two",
          "swift": "cta: .none / .primary(String) / .pair(back, next)",
          "compose": "primary / secondary: TooltipAction?"
        },
        {
          "figma": "outlineButton: Bool",
          "swift": "(absorbed into cta.pair)",
          "compose": "—"
        },
        {
          "figma": "(not modeled)",
          "swift": "hasArrow: Bool",
          "compose": "arrow: Bool"
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
        "swift": "<span class=\"cmt\">// Simple tip — title + body, pointer below</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Quick transfers\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">bottom</span>\n)\n.<span class=\"prp\">onDismiss</span> { showTip = <span class=\"kw\">false</span> }\n\n<span class=\"cmt\">// Walkthrough step — two CTAs</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Step 2 of 4\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Review your balance before confirming.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">top</span>,\n    <span class=\"prp\">cta</span>: .<span class=\"prp\">pair</span>(back: <span class=\"str\">\"Back\"</span>, next: <span class=\"str\">\"Next\"</span>)\n)\n.<span class=\"prp\">ebAppearance</span>(.<span class=\"prp\">onboarding</span>)\n\n<span class=\"cmt\">// Rich — custom leading slot</span>\n<span class=\"typ\">EBTooltip</span>(<span class=\"prp\">title</span>: <span class=\"str\">\"Welcome\"</span>, <span class=\"prp\">body</span>: <span class=\"str\">\"Tap a card to begin.\"</span>) {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"sparkles\"</span>)\n}\n\n<span class=\"cmt\">// iOS 17 + Tips — recommended for onboarding flows</span>\n.<span class=\"prp\">popoverTip</span>(quickTransferTip)",
        "compose": "<span class=\"cmt\">// Simple tip</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Quick transfers\"</span>,\n    body = <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Bottom,\n    onDismiss = { showTip = <span class=\"kw\">false</span> }\n)\n\n<span class=\"cmt\">// Walkthrough step — two CTAs, onboarding skin</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Step 2 of 4\"</span>,\n    body = <span class=\"str\">\"Review your balance before confirming.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Top,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.Onboarding,\n    primaryAction = <span class=\"typ\">TooltipAction</span>(<span class=\"str\">\"Next\"</span>, onClick = { advance() }),\n    secondaryAction = <span class=\"typ\">TooltipAction</span>(<span class=\"str\">\"Back\"</span>, onClick = { rewind() })\n)\n\n<span class=\"cmt\">// Custom leading slot</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Welcome\"</span>,\n    body = <span class=\"str\">\"Tap a card to begin.\"</span>,\n    leading = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.AutoAwesome, contentDescription = null) }\n)\n\n<span class=\"cmt\">// Material 3 PlainTooltip equivalent</span>\n<span class=\"typ\">PlainTooltip</span> { <span class=\"typ\">Text</span>(<span class=\"str\">\"Shortcut\"</span>) }"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role + focus",
        "ios": "Announce tooltip as <code>.accessibilityAddTraits(.isModal)</code> when <code>hasDismiss = true</code> — otherwise role <code>.staticText</code>.",
        "android": "<code>semantics { role = Role.Popup }</code> on the container; TalkBack focuses it on appear."
      },
      {
        "requirement": "Close control",
        "ios": "Wrap close as a <code>Button</code> with <code>accessibilityLabel</code> \"Dismiss tip\" and 44×44 hit target.",
        "android": "<code>IconButton</code> with <code>contentDescription = \"Dismiss tip\"</code>; 48×48dp minimum."
      },
      {
        "requirement": "Dismiss-outside",
        "ios": "Respect <code>UIAccessibility.isVoiceOverRunning</code> — do not auto-dismiss tooltips while VO is active.",
        "android": "Do not auto-dismiss while TalkBack is active; hold the tooltip until the user explicitly moves on."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Respect <code>UIAccessibility.isReduceMotionEnabled</code> — skip the scale-in animation; fade only.",
        "android": "Respect <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code> — fade only when user has motion reduced."
      },
      {
        "requirement": "Combined label",
        "ios": "Read title + body + \"Dismiss\" as one phrase; avoid reading pointer.",
        "android": "Same; set <code>mergeDescendants = true</code> on the container."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "3 sibling components for one primitive. Close uses a raw image asset inside a generic frame rather than an <code>icon/close</code> instance."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Version suffix in the component name (<code>Tooltip V2</code>). Pointer direction is 4 booleans instead of one enum."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface, border, label, description, and CTA colors bound to <code>main/nudge/*</code> and <code>main/button/*</code> tokens. Spacing via <code>space/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Maps cleanly once pointer booleans → <code>placement</code> enum and sibling skins → <code>appearance</code> enum. CTA padding inconsistencies block a 1:1 Button reuse."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed / Focused on close. No lifecycle (appearing / dismissing) annotated. Close isn't wired to a dismiss property."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pointer is 4 raster images (one per edge). Leading icon is a gray placeholder circle. Close is an image asset."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation + enum conversion + slot adoption. Mapping today's shape would cement the wrong schema."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "4 booleans and one 3-value enum yield <strong>8 shipped variants</strong> out of a 24-cell theoretical matrix (<code>CTA (3) × Icon (2) × Description (2) × Header (2) = 24</code>). Only the 8 meaningful combinations are exposed. Pointer direction is 4 additional booleans outside the variant matrix.",
      "columns": [
        "#",
        "CTA",
        "Icon",
        "Description",
        "Header",
        "Dimensions",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "one",
            "yes",
            "yes",
            "yes",
            "359 × 181",
            "70:14907"
          ]
        },
        {
          "cells": [
            "2",
            "one",
            "no",
            "yes",
            "yes",
            "359 × 155",
            "7977:12260"
          ]
        },
        {
          "cells": [
            "3",
            "none",
            "yes",
            "yes",
            "yes",
            "359 × 137",
            "70:14903"
          ]
        },
        {
          "cells": [
            "4",
            "none",
            "no",
            "yes",
            "yes",
            "359 × 119",
            "70:14902"
          ]
        },
        {
          "cells": [
            "5",
            "none",
            "no",
            "no",
            "yes",
            "359 × 79",
            "70:14900"
          ]
        },
        {
          "cells": [
            "6",
            "none",
            "no",
            "yes",
            "no",
            "359 × 92",
            "70:14901"
          ]
        },
        {
          "cells": [
            "7",
            "two",
            "no",
            "yes",
            "no",
            "359 × 136",
            "70:14905"
          ]
        },
        {
          "cells": [
            "8",
            "one",
            "no",
            "yes",
            "no",
            "359 × 136",
            "70:14906"
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
          "body": "<strong>Superseded by Tooltip</strong> — <code>Tooltip V2</code> was consolidated into the unified <a href=\"/components/tooltip\">Tooltip</a> set (node <code>6295:79647</code>) alongside its two siblings. Verdict changed to Remove; open issues and recommendations cleared, since they are resolved on the successor.\n          <span class=\"tag-fixed\">Resolved</span>",
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
      "header": "Initial Assessment · node 70:14908",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Consolidate 3 sibling Tooltip components; drop the <code>V2</code> suffix; replace 4 pointer booleans with one <code>placement</code> enum; replace raster pointer with vector; replace placeholder icon with a Figma Slot. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — 3 siblings for 1 primitive</strong> — Tooltip V2, Onboarding - Tooltip, Tooltip Blurred and Transparent. Merge via <code>appearance</code> enum. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Version suffix in name</strong> — <code>Tooltip V2</code> shouldn't exist in production; no V1 surfaces in the file. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C2 — Pointer is 4 booleans</strong> — Replace <code>pointerTop/Right/Bottom/Left</code> with a single <code>placement</code> enum. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — CTA padding drift</strong> — Same XSmall Button, three different paddings across variants. Normalize. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — No dismiss/focus states</strong> — Close is decorative; Pressed / Focused / Lifecycle not modeled. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster pointer + placeholder icon</strong> — 4 raster images for the pointer; gray circle for the leading icon. Vector + slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on the architectural changes above. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — Surface / border / label / description / CTA colors all bound to <code>main/nudge/*</code> and <code>main/button/*</code>. Spacing via <code>space/*</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        }
      ]
    }
  ]
};
