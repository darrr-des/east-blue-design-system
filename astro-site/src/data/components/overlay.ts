import type { ComponentData } from '../types';

export const overlay: ComponentData = {
  "meta": {
    "slug": "overlay",
    "name": "Overlay",
    "node": "47:329691",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=47-329691",
    "description": "A full-viewport scrim used to dim background content behind sheets, modals, and tooltips.",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  "overview": {
    "inContextNote": "Overlay sits between page content and a floating surface (bottom sheet, dialog, drawer). It dims the content below to focus attention on the surface above.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"overlay-demo-preview\"><div class=\"eb-preview-overlay-stage\"><div class=\"eb-preview-overlay-stage__content\"><div class=\"eb-preview-overlay-stage__content-title eb-preview\">Activity</div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div></div><div class=\"eb-preview-overlay-stage__dim\"></div><div class=\"eb-preview-overlay-stage__sheet eb-preview\"><div class=\"eb-preview-overlay-stage__handle\"></div><p class=\"eb-preview-overlay-stage__sheet-title\">Send Money</p><p class=\"eb-preview-overlay-stage__sheet-body\">Choose a recipient from your contacts or enter a mobile number.</p><div class=\"eb-preview-overlay-stage__sheet-btn\">Continue</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">background</span><select id=\"overlay-ctrl-bg\" class=\"demo-panel-select\" onchange=\"_overlayUpdate()\"><option value=\"light\">light</option><option value=\"dark\">dark</option><option value=\"image\">image</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">surface above</span><select id=\"overlay-ctrl-surface\" class=\"demo-panel-select\" onchange=\"_overlayUpdate()\"><option value=\"none\">none</option><option value=\"sheet\" selected=\"\">sheet</option><option value=\"dialog\">dialog</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works as the dim layer behind any modal surface, but the fixed 360×640 frame forces consumers to resize on every use. Should Fill parent."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its fill and opacity, bound to a semantic token. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "Token is named <code>overlay-strong</code> suggesting a standard-strength companion, but only one strength is exposed as a component. Naming implies a set of two."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Intended to sit behind sheets/dialogs/drawers, but lacks fill-parent sizing and a documented z-index order."
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
    "resolved": [],
    "open": [
      {
        "headline": "No strength variants.",
        "body": "Only <code>bg/color-bg-overlay-strong</code> (56%) is exposed. Token name implies a standard-strength (32%) counterpart that isn't surfaced. Consider a <code>Strength = Standard | Strong</code> property.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Fixed frame size 360×640.",
        "body": "Forces consumers to resize the instance every time. Should use auto-layout Fill on both axes so it scales to any parent.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Tap-to-dismiss contract not annotated.",
        "body": "The standard behavior (tap-scrim dismisses, unless the surface is modal) should be documented on the component so designers and devs agree on the contract.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Trivial once the size and variant questions above are settled.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Set frame to Fill parent.",
        "body": "Change both width and height from fixed to Fill so Overlay adapts to any container (phone, tablet, custom sheet). Matches how native <code>Scrim</code> behaves.",
        "tag": "Composition"
      },
      {
        "headline": "Decide on strength variants.",
        "body": "Two paths: (a) add <code>Strength = Standard (32%) | Strong (56%)</code> property and bind to two tokens, matching Material 3; or (b) keep a single 56% strength and rename the token from <code>overlay-strong</code> to <code>overlay</code> so the name stops implying a second variant exists.",
        "tag": "Property"
      },
      {
        "headline": "Annotate the dismiss contract.",
        "body": "Add a description on the component: <em>\"Tap-outside dismisses the surface above, unless the surface is modal (requires explicit action).\"</em> This closes the gap between designer intent and developer implementation.",
        "tag": "Docs"
      },
      {
        "headline": "Document layer order.",
        "body": "Add a short note: <code>Content → Overlay → Floating surface (Sheet / Dialog / Drawer)</code>. Prevents teams from accidentally putting the floating surface under the scrim.",
        "tag": "Docs"
      },
      {
        "headline": "Naming note (informational).",
        "body": "Other DS call this primitive <em>Scrim</em> (Material 3), <em>Backdrop</em> (Fluent / Polaris), <em>Mask</em> (Ant), <em>Blanket</em> (Atlassian), <em>Underlay</em> (Spectrum). Team keeps <strong>Overlay</strong> — worth documenting here so cross-DS references aren't confusing.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-·-strong",
        "title": "Default · Strong",
        "node": "47:329691",
        "description": "The only current variant — a flat translucent fill at 56% opacity of the overlay color. Drop it behind any sheet, dialog, or drawer.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"overlay-spec-preview\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Name",
                "value": "Overlay",
                "mono": true
              },
              {
                "key": "Variants",
                "value": "1",
                "mono": true
              },
              {
                "key": "Properties",
                "value": "None exposed",
                "mono": false
              },
              {
                "key": "Inner layer",
                "value": "dim",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Scrim",
                "value": "#020E228F (56% alpha)",
                "mono": true
              },
              {
                "key": "Scrim token",
                "value": "bg/color-bg-overlay-strong",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width (sticker sheet)",
                "value": "360",
                "mono": true
              },
              {
                "key": "Height (sticker sheet)",
                "value": "640",
                "mono": true
              },
              {
                "key": "Recommended sizing",
                "value": "Fill × Fill",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "0",
                "mono": true
              },
              {
                "key": "Border",
                "value": "None",
                "mono": false
              },
              {
                "key": "Padding",
                "value": "None",
                "mono": false
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text layers",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOverlay</span><span class=\"syn-punc\">(</span>isPresented<span class=\"syn-punc\">: </span>$showSheet<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStrength</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.strong</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-cmt\">// content shown above the scrim</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBOverlay</span><span class=\"syn-punc\">(</span>\n    visible <span class=\"syn-eq\">=</span> showSheet<span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    strength <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBOverlayStrength</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Strong</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-cmt\">// content shown above the scrim</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "None exposed",
          "swift": "<code>EBOverlay()</code> — no parameters today.",
          "compose": "<code>EBOverlay(modifier: Modifier = Modifier)</code>"
        },
        {
          "figma": "(proposed) Strength",
          "swift": "<code>.ebStrength(.standard | .strong)</code>",
          "compose": "<code>strength = EBOverlayStrength.Standard | Strong</code>"
        },
        {
          "figma": "(proposed) onDismiss",
          "swift": "<code>.onTapGesture { onDismiss() }</code>",
          "compose": "<code>Modifier.clickable { onDismiss() }</code>"
        }
      ]
    },
    "usageSnippets": [],
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
        "notes": "Inner layer named <code>dim</code> — semantic and accurate."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No properties exposed. Token name <code>overlay-strong</code> implies a standard-strength counterpart that isn't available. Either add a <code>Strength</code> property or drop the <em>-strong</em> qualifier from the token."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fill bound to <code>bg/color-bg-overlay-strong</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly to SwiftUI <code>.presentationBackground</code> and Compose <code>Scrim</code>, but fixed 360×640 frame needs to become Fill × Fill before linking."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Tap-to-dismiss behavior is implicit — should be annotated on the component as a documented contract."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets or icons."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No Code Connect mapping yet. Trivial once sizing and strength are finalized."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "Single variant — no property matrix.",
      "columns": [
        "#",
        "Name",
        "Node",
        "Dimensions",
        "Fill",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<strong>Overlay / Strong</strong>",
            "<code>47:329691</code>",
            "360 × 640",
            "<span class=\"swatch-dot\" style=\"background:#020E228F\"></span><code>bg/color-bg-overlay-strong</code>",
            "Default state — the single shipped variant."
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
