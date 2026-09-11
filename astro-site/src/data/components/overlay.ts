import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/overlay.js`.
/* The Figma property panel for 4465:20631 lists exactly one property:
   Strength · Weak, Default, Strong. No booleans, no slots, no text properties.
   The panel mirrors that and nothing else — the sheet-over-screen backdrop in
   the preview is fixed scenery, not something a consumer configures. */
const overlayDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Strength',
        prop: 'strength',
        defaultValue: 'default',
        options: [
          { value: 'weak', label: 'Weak' },
          { value: 'default', label: 'Default' },
          { value: 'strong', label: 'Strong' },
        ],
      },
    ],
  },
];

export const overlay: ComponentData = {
  "meta": {
    "slug": "overlay",
    "name": "Overlay",
    "node": "4465:20631",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4465-20631",
    "description": "A full-viewport scrim used to dim background content behind sheets, modals, and tooltips. Three strength tiers.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Three strength tiers — Weak 24%, Default 40%, Strong 56% — on a 360×800 default that scales exactly with its instance, verified across five placements from 640 to 932. Structure is one layer deep, each tier binds to its own semantic token, and the dismiss contract and layer order are documented. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Overlay sits between page content and a floating surface (bottom sheet, dialog, drawer). It dims the content below to focus attention on the surface above.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"overlay-demo-preview\"><div class=\"eb-preview-overlay-stage\"><div class=\"eb-preview-overlay-stage__content\"><div class=\"eb-preview-overlay-stage__content-title eb-preview\">Activity</div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div></div><div class=\"eb-preview-overlay-stage__dim\"></div><div class=\"eb-preview-overlay-stage__sheet eb-preview\"><div class=\"eb-preview-overlay-stage__handle\"></div><p class=\"eb-preview-overlay-stage__sheet-title\">Send Money</p><p class=\"eb-preview-overlay-stage__sheet-body\">Choose a recipient from your contacts or enter a mobile number.</p><div class=\"eb-preview-overlay-stage__sheet-btn\">Continue</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">strength</span><select id=\"overlay-ctrl-strength\" class=\"demo-panel-select\" onchange=\"_overlayUpdate()\"><option value=\"weak\">weak</option><option value=\"default\">default</option><option value=\"strong\" selected=\"\">strong</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">background</span><select id=\"overlay-ctrl-bg\" class=\"demo-panel-select\" onchange=\"_overlayUpdate()\"><option value=\"light\">light</option><option value=\"dark\">dark</option><option value=\"image\">image</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">surface above</span><select id=\"overlay-ctrl-surface\" class=\"demo-panel-select\" onchange=\"_overlayUpdate()\"><option value=\"none\">none</option><option value=\"sheet\" selected=\"\">sheet</option><option value=\"dialog\">dialog</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works as the dim layer behind any modal surface. Ships at a 360×800 default and the <code>dim</code> layer scales exactly with the instance — verified rendering at 640, 761, 826 and 932."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its fill and opacity. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Three named strengths (<code>Weak</code> · <code>Default</code> · <code>Strong</code>) under a single <code>Strength</code> property. Naming no longer implies a missing sibling."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Sits behind sheets, dialogs and drawers and sizes correctly at any placement. Layer order is documented — <code>Content → Overlay → Floating surface</code> — so teams no longer have to infer it."
      }
    ],
    "behavior": [
      {
        "state": "Show / hide",
        "ios": "yes",
        "android": "yes",
        "property": "Not defined",
        "notes": "Fades with the presentation transition of its owning surface."
      },
      {
        "state": "Tap to dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Contract: tap-scrim dismisses unless surface is marked modal."
      },
      {
        "state": "Scroll lock",
        "ios": "na",
        "android": "na",
        "property": "Handled by surface",
        "notes": "Owning sheet/dialog locks background scroll on mount."
      },
      {
        "state": "Focus / a11y",
        "ios": "yes",
        "android": "yes",
        "property": "Implicit",
        "notes": "Scrim itself is not focusable — owning surface traps focus."
      }
    ],
    "resolved": [
      {
        "headline": "<code>Strength</code> property added.",
        "body": "v2.0: <code>Weak</code> (24%) · <code>Default</code> (40%) · <code>Strong</code> (56%), replacing the single 56% variant whose <code>-strong</code> token name implied a missing sibling. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Default frame resized and verified at scale.",
        "body": "v2.0: 360×640 → <code>360×800</code>, with the <code>dim</code> layer tracking the instance exactly at every size — verified across five placements from 640 to 932. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>Container</code> wrapper removed.",
        "body": "v2.0: Structure simplified to <code>COMPONENT → dim</code>, one layer deep. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Tap-to-dismiss contract settled.",
        "body": "v2.1: The behaviour is documented on this page — tap outside dismisses the surface above unless that surface is modal, in which case dismissal requires an explicit action. Layer order is <code>Content → Overlay → Floating surface</code>. (C5 · Docs)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Strength tiers bound to their own tokens.",
        "body": "v2.2: Confirmed by the component owner — each tier now resolves through its own semantic token rather than a shared fill with a hand-set opacity, so a theme change is one edit and developers no longer copy three loose alpha values. Not independently verifiable from the assessment tooling, which cannot read variable bindings: the paint still reports as <code>#020E22</code> at 24/40/56% opacity either way. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "\"Don't Use\" label clarified.",
        "body": "v2.2: Closed by owner confirmation — the label belongs to the enclosing Figma section, which is a working container for in-progress material, not a directive against the component. The <code>Overlay</code> set at <code>4465:20631</code> inside it is current and is what this page documents. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Cross-system naming documented.",
        "body": "v2.2: Closed — the team keeps <strong>Overlay</strong>. Other systems name this primitive differently: <em>Scrim</em> (Material 3), <em>Backdrop</em> (Fluent, Polaris), <em>Mask</em> (Ant), <em>Blanket</em> (Atlassian), <em>Underlay</em> (Spectrum). Recorded here so anyone cross-referencing another system finds the equivalent rather than assuming a gap. (Docs)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. Three variants map 1:1 to a single <code>strength</code> enum parameter.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "overlay-spec-main",
        "demoKey": "main",
        "demoControls": overlayDemoControls,
        "title": "Overlay",
        "node": "4465:20631",
        "description": "",
        "previewHtml": "<div id=\"overlay-spec-preview\"><div class=\"eb-preview-overlay-stage\"><div class=\"eb-preview-overlay-stage__content\"><div class=\"eb-preview-overlay-stage__content-title eb-preview\">Activity</div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div></div><div class=\"eb-preview-overlay-stage__dim eb-preview-overlay-stage__dim--default\"></div><div class=\"eb-preview-overlay-stage__sheet eb-preview\"><div class=\"eb-preview-overlay-stage__handle\"></div><p class=\"eb-preview-overlay-stage__sheet-title\">Send Money</p><p class=\"eb-preview-overlay-stage__sheet-body\">Choose a recipient from your contacts or enter a mobile number.</p><div class=\"eb-preview-overlay-stage__sheet-btn\">Continue</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Strength", "value": "Default", "prop": "strength" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Dim", "value": "#020E22 @ 40%", "token": "overlay/scrim",
                "variants": {
                  "strength:weak": { "value": "#020E22 @ 24%" },
                  "strength:strong": { "value": "#020E22 @ 56%" }
                } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text layers", "value": "— none", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "800px", "mono": true },
              { "key": "Width", "value": "360px", "mono": true },
              { "key": "Radius", "value": "0px", "mono": true },
              { "key": "Padding H", "value": "0px", "mono": true },
              { "key": "Padding V", "value": "0px", "mono": true },
              { "key": "Gap", "value": "— none", "mono": true },
              { "key": "Alignment", "value": "—", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOverlay</span><span class=\"syn-punc\">(</span>isPresented<span class=\"syn-punc\">: </span>$showSheet<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStrength</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-cmt\">// content shown above the scrim</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBOverlay</span><span class=\"syn-punc\">(</span>\n    visible <span class=\"syn-eq\">=</span> showSheet<span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    strength <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBOverlayStrength</span><span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-cmt\">// content shown above the scrim</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Strength",
        "description": "Read off node <code>4465:20631</code>. The component is one <code>dim</code> rectangle per variant — a single fill at three opacities, with no border, radius or content of its own. Alpha is applied to the fill rather than to a separate token, so a consumer reads the composited value. The token path is indicative; variable bindings are not readable through the review tooling.",
        "columns": ["Token", "Value"],
        "rows": [
          { "role": "Weak", "token": "Dim", "values": ["overlay/scrim", "#020E22 @ 24%"] },
          { "role": "Default", "token": "Dim", "values": ["overlay/scrim", "#020E22 @ 40%"] },
          { "role": "Strong", "token": "Dim", "values": ["overlay/scrim", "#020E22 @ 56%"] }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Strength = Weak | Default | Strong",
          "swift": ".ebStrength(.weak / .default / .strong)",
          "compose": "strength = EBOverlayStrength.Weak / Default / Strong"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": ".ignoresSafeArea() — the scrim is always full-bleed; the 360 × 800 frame is canvas presentation only",
          "compose": "Modifier.fillMaxSize() — same; no dimension is read off the Figma frame"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": "isPresented: Binding&lt;Bool&gt;",
          "compose": "visible: Boolean"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": ".onTapGesture { onDismiss() }",
          "compose": "Modifier.clickable { onDismiss() }"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Behind a bottom sheet",
        "swift": "<span class=\"typ\">EBOverlay</span>(<span class=\"prp\">isPresented</span>: $showSheet)\n    .<span class=\"fn\">ebStrength</span>(<span class=\"dot\">.default</span>) {\n    <span class=\"typ\">EBBottomSheet</span>(<span class=\"str\">\"Send Money\"</span>) { … }\n}",
        "compose": "<span class=\"typ\">EBOverlay</span>(\n    <span class=\"prp\">visible</span> = showSheet,\n    <span class=\"prp\">onDismiss</span> = { showSheet = <span class=\"kw\">false</span> },\n    <span class=\"prp\">strength</span> = <span class=\"typ\">EBOverlayStrength</span>.Default\n) {\n    <span class=\"typ\">EBBottomSheet</span>(<span class=\"prp\">title</span> = <span class=\"str\">\"Send Money\"</span>) { … }\n}"
      },
      {
        "subheading": "Weak — a light dim for a tooltip or popover",
        "swift": "<span class=\"typ\">EBOverlay</span>(<span class=\"prp\">isPresented</span>: $showTip)\n    .<span class=\"fn\">ebStrength</span>(<span class=\"dot\">.weak</span>) {\n    <span class=\"typ\">EBTooltip</span>(<span class=\"str\">\"Tap to copy\"</span>)\n}",
        "compose": "<span class=\"typ\">EBOverlay</span>(\n    <span class=\"prp\">visible</span> = showTip,\n    <span class=\"prp\">onDismiss</span> = { showTip = <span class=\"kw\">false</span> },\n    <span class=\"prp\">strength</span> = <span class=\"typ\">EBOverlayStrength</span>.Weak\n) {\n    <span class=\"typ\">EBTooltip</span>(<span class=\"str\">\"Tap to copy\"</span>)\n}"
      },
      {
        "subheading": "Strong — a blocking modal, dismissal by action only",
        "swift": "<span class=\"typ\">EBOverlay</span>(<span class=\"prp\">isPresented</span>: $showModal)\n    .<span class=\"fn\">ebStrength</span>(<span class=\"dot\">.strong</span>)\n    .<span class=\"fn\">ebDismissOnTap</span>(<span class=\"kw\">false</span>) {\n    <span class=\"typ\">EBModal</span>(<span class=\"str\">\"Confirm transfer?\"</span>) { … }\n}",
        "compose": "<span class=\"typ\">EBOverlay</span>(\n    <span class=\"prp\">visible</span> = showModal,\n    <span class=\"prp\">onDismiss</span> = { },\n    <span class=\"prp\">strength</span> = <span class=\"typ\">EBOverlayStrength</span>.Strong,\n    <span class=\"prp\">dismissOnTap</span> = <span class=\"kw\">false</span>\n) {\n    <span class=\"typ\">EBModal</span>(<span class=\"prp\">title</span> = <span class=\"str\">\"Confirm transfer?\"</span>) { … }\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "Not focusable itself",
        "ios": "Overlay is decorative. Do not expose it to VoiceOver — focus belongs to the surface above.",
        "android": "Use <code>Modifier.clearAndSetSemantics { }</code> on the scrim so TalkBack ignores it."
      },
      {
        "requirement": "Modal announcement",
        "ios": "The sheet/dialog above owns <code>.accessibilityAddTraits(.isModal)</code>.",
        "android": "The sheet/dialog above owns <code>semantics { paneTitle = \"...\" }</code> and modal behavior."
      },
      {
        "requirement": "Tap-to-dismiss target",
        "ios": "Full-screen tap area counts as the dismiss hit region — comfortably above the 44×44pt target.",
        "android": "Full-screen tap area — comfortably above the 48×48dp target."
      },
      {
        "requirement": "Reduce transparency",
        "ios": "Respect <code>UIAccessibility.isReduceTransparencyEnabled</code> — fall back to an opaque dim color if true.",
        "android": "Respect <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code> and high-contrast mode — increase opacity or swap to solid dim."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One layer named <code>dim</code> — semantic and accurate. The redundant <code>Container</code> wrapper was removed in v2.0, leaving <code>COMPONENT → dim</code>, one layer deep."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A single <code>Strength</code> property with a clean three-value enum — <code>Weak</code> · <code>Default</code> · <code>Strong</code>, PascalCase per §1 with Title Case values per §5. It is the component’s only property: no booleans, no slots, no text."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Each tier resolves through its own semantic token rather than a shared fill with a hand-set opacity, confirmed by the component owner in v2.2 — so a theme change is one edit and developers no longer copy three loose alpha values. Note for handoff: the alpha is applied to the fill, so a consumer reads the composited value (<code>#020E22</code> at 24% / 40% / 56%) rather than a separate opacity token."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to SwiftUI <code>.presentationBackground</code> and Compose <code>Scrim</code>. The <code>dim</code> layer tracks the instance exactly — verified at 640, 761, 826 and 932. A scrim is full-bleed on both platforms, so no dimension is read off the Figma frame; the 360 × 800 is canvas presentation only."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Tap-to-dismiss is a documented contract as of v2.1: tapping outside dismisses the surface above unless that surface is modal, in which case dismissal requires an explicit action. The scrim itself has no visual states — it is one fill at three strengths."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets or icons. The component is a single rectangle."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — no native library exists yet. Nothing in the schema blocks it: three variants mapping 1:1 onto a single <code>strength</code> enum parameter."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One enum, three values, 1:1 onto a native <code>strength</code> parameter. Nothing to disambiguate."
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three variants exist — a single-axis matrix with no gaps."
      },
      {
        "aspect": "Asset linkability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets to link."
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBOverlay</code>. Not yet written — blocked on the native library, same as C7."
      }
    ],
    "variants": {
      "total": 3,
      "description": "<code>Strength</code> (3) — a single-axis matrix with no gaps. Geometry is identical throughout; only the scrim alpha changes. The 360 × 800 frame is canvas presentation: a scrim is full-bleed on both platforms, so no dimension is read off it.",
      "columns": [
        "Strength",
        "Node ID",
        "Dimensions",
        "Fill",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "Weak",
            "4465:20549",
            "360 × 800",
            "#020E22 @ 24%",
            "Lightest tier — a tooltip or popover, where the screen behind stays readable."
          ]
        },
        {
          "cells": [
            "Default",
            "4465:20632",
            "360 × 800",
            "#020E22 @ 40%",
            "The standard scrim behind a bottom sheet."
          ]
        },
        {
          "cells": [
            "Strong",
            "4465:20634",
            "360 × 800",
            "#020E22 @ 56%",
            "Heaviest tier — a blocking modal, where the screen behind should recede."
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.3",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Style + Code tabs rebuilt against node 4465:20631",
      "rows": [
        {
          "body": "<strong>Panel reduced to the one real property</strong> — the Style tab offered <code>Strength</code>, <code>Surface</code> and <code>Background</code> as three properties. Figma has one. The backdrop controls implied a schema the component does not have, and are now fixed scenery in the preview rather than configurable properties. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Value labels moved to Title Case</strong> — <code>weak / default / strong</code> → <code>Weak / Default / Strong</code> per §5, and the default moved from <code>Strong</code> to <code>Default</code>. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Usage snippets written</strong> — the section was empty. Three now cover the tiers by the surface each is for: Default behind a bottom sheet, Weak behind a tooltip, Strong behind a blocking modal with tap-dismiss disabled. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Code Connect filled in</strong> — <code>codeConnect</code> was an empty array. Four rows now, with asset linkability marked Not Applicable: the component is a single rectangle. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Scorecard reconciled with the resolved record</strong> — C3 still said per-tier token binding was unconfirmed and C5 still called tap-to-dismiss implicit, both closed in v2.1 and v2.2. Both now Ready, with the composited-alpha caveat kept on C3 for handoff. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        }
      ]
    },
    {
      "version": "2.2",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Tokens, scope and naming confirmed",
      "rows": [
        {
          "body": "<strong>Strength tiers bound to their own tokens</strong> — each tier resolves through its own semantic token rather than a shared fill with a hand-set opacity, so a theme change is one edit and developers no longer copy three loose alpha values. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>“Don’t Use” label clarified</strong> — the label belongs to the enclosing Figma section, a working container for in-progress material, not a directive against the component. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Cross-system naming documented</strong> — the team keeps <strong>Overlay</strong>. Other systems name this primitive <em>Scrim</em> (Material 3), <em>Backdrop</em> (Fluent, Polaris), <em>Mask</em> (Ant) or <em>Blanket</em> (Atlassian); the note exists so a developer reading any of those recognises the same thing. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Dismissal contract documented",
      "rows": [
        {
          "body": "<strong>Tap-to-dismiss contract settled</strong> — tapping outside dismisses the surface above unless that surface is modal, in which case dismissal requires an explicit action. Layer order is <code>Content → Overlay → Floating surface</code>. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        }
      ]
    },
    {
      "version": "2.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on node 4465:20631 — 2026 Working File",
      "rows": [
        {
          "body": "<strong><code>Strength</code> property added</strong> — <code>Weak</code> (24%) · <code>Default</code> (40%) · <code>Strong</code> (56%), replacing the single 56% variant whose <code>-strong</code> token name implied a sibling that did not exist. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Default frame resized and verified at scale</strong> — 360 × 640 → <strong>360 × 800</strong>, with the <code>dim</code> layer tracking the instance exactly at every size, verified across five placements from 640 to 932. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong><code>Container</code> wrapper removed</strong> — structure simplified to <code>COMPONENT → dim</code>, one layer deep. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "August 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Re-assessment · node 4465:20631 (2026 Working File)",
      "rows": [
        {
          "body": "<strong>Component rebuilt</strong> — moved from Sticker Sheets v2 <code>47:329691</code> to 2026 Working File <code>4465:20631</code>. Section is still marked <em>(Don't Use)</em> — not yet published. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Migrated"
          }
        },
        {
          "body": "<strong>C2 — Strength variants</strong> — <code>Strength = Weak (24%) | Default (40%) | Strong (56%)</code> added, replacing the single 56% variant. Shipped as three tiers rather than the two proposed at baseline. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Frame sizing</strong> — default resized 360×640 → <code>360×800</code>; <code>dim</code> tracks the instance exactly, verified at 640 / 761 / 826 / 932 across five placements. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C1 — Layer structure</strong> — redundant <code>Container</code> wrapper removed; structure is now <code>COMPONENT → dim</code>. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C3 — Token Coverage</strong> — downgraded to Needs Refinement pending confirmation that each tier binds its own token rather than a manual opacity override. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>C5 — Dismiss contract</strong> — no annotation found on the component set or any variant. Still open. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — still unmapped, but now unblocked: three variants map 1:1 to one <code>strength</code> enum. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 47:329691",
      "rows": [
        {
          "body": "<strong>DS Health</strong> — Single-variant scrim, token-bound fill. Reusable/Composable flagged Partial due to fixed frame size. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Baseline"
          }
        },
        {
          "body": "<strong>C2 — Strength variants</strong> — Only <code>strong</code> (56%) exposed, token name implies a <code>standard</code> counterpart. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Fill parent</strong> — Current 360×640 frame should be Fill × Fill. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Dismiss contract</strong> — Tap-to-dismiss not annotated on the component. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — No mapping registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Naming note</strong> — Other DS call this Scrim / Backdrop / Mask / Blanket / Underlay. Team keeps <em>Overlay</em>. Documented for cross-DS reference. <span class=\"tag-fixed\">Convention</span>",
          "delta": {
            "kind": "resolved",
            "label": "Info"
          }
        }
      ]
    }
  ]
};
