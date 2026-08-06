import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/overlay.js`.
const overlayDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Strength',
        prop: 'strength',
        defaultValue: 'strong',
        options: [
          { value: 'weak', label: 'weak' },
          { value: 'default', label: 'default' },
          { value: 'strong', label: 'strong' },
        ],
      },
      {
        label: 'Surface',
        prop: 'surface',
        defaultValue: 'sheet',
        options: [
          { value: 'none', label: 'none' },
          { value: 'sheet', label: 'sheet' },
          { value: 'dialog', label: 'dialog' },
        ],
      },
      {
        label: 'Background',
        prop: 'bg',
        defaultValue: 'light',
        options: [
          { value: 'light', label: 'light' },
          { value: 'dark', label: 'dark' },
          { value: 'image', label: 'image' },
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
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "verdict": {
      "kind": "fix",
      "title": "Keep — documentation gaps only",
      "text": "Overlay now exposes a <code>Strength</code> property with three tiers (Weak 24% · Default 40% · Strong 56%) and ships at a 360×800 default that scales correctly at any size. It maps cleanly to native primitives (SwiftUI <code>.presentationBackground</code>, Compose <code>Scrim</code>). Remaining work is documentation: annotate the tap-to-dismiss contract and register a Code Connect mapping."
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
        "rating": "partial",
        "note": "Sits behind sheets/dialogs/drawers and sizes correctly, but the layer order (Content → Overlay → floating surface) is still undocumented."
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
        "body": "<code>Strength</code> property added — <code>Weak</code> (24%) · <code>Default</code> (40%) · <code>Strong</code> (56%), replacing the single 56% variant whose <code>-strong</code> token name implied a missing sibling (C2)"
      },
      {
        "body": "Default frame resized 360×640 → <code>360×800</code>; the <code>dim</code> layer tracks the instance exactly at every size, verified across five placements from 640 to 932 (C4)"
      },
      {
        "body": "<code>Container</code> wrapper frame removed — structure simplified to <code>COMPONENT → dim</code> (C1)"
      }
    ],
    "open": [
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
        "body": "Both prior blockers (frame sizing and the strength property) are now settled, so the mapping is unblocked — three variants map 1:1 to a single <code>strength</code> enum parameter.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Confirm one token per strength tier.",
        "body": "Each tier should bind to its own semantic token (<code>bg/color-bg-overlay-weak</code> · <code>-default</code> · <code>-strong</code>) rather than carrying a manual opacity override on a shared token. Not verifiable from the assessment tooling — needs a Dev Mode check on each <code>dim</code> layer.",
        "tag": "Token"
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "strength",
        "demoKey": "strong",
        "demoControls": overlayDemoControls,
        "title": "Strength",
        "node": "4465:20631",
        "description": "A flat translucent fill of the overlay color at one of three strengths. Drop it behind any sheet, dialog, or drawer — switch Strength to match how much the content below should recede.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"overlay-spec-preview\"><div class=\"eb-preview-overlay-stage\"><div class=\"eb-preview-overlay-stage__content\"><div class=\"eb-preview-overlay-stage__content-title eb-preview\">Activity</div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div><div class=\"eb-preview-overlay-stage__card\"></div></div><div class=\"eb-preview-overlay-stage__dim\"></div><div class=\"eb-preview-overlay-stage__sheet eb-preview\"><div class=\"eb-preview-overlay-stage__handle\"></div><p class=\"eb-preview-overlay-stage__sheet-title\">Send Money</p><p class=\"eb-preview-overlay-stage__sheet-body\">Choose a recipient from your contacts or enter a mobile number.</p><div class=\"eb-preview-overlay-stage__sheet-btn\">Continue</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Name",
                "value": "Overlay",
                "mono": true
              },
              {
                "key": "Variants",
                "value": "3",
                "mono": true
              },
              {
                "key": "Properties",
                "value": "Strength",
                "mono": true
              },
              {
                "key": "Inner layer",
                "value": "dim",
                "mono": true
              },
              {
                "key": "Strength",
                "value": "strong",
                "mono": true,
                "prop": "strength"
              },
              {
                "key": "Variant node",
                "value": "4465:20634",
                "mono": true,
                "variants": {
                  "strength:weak": { "value": "4465:20549" },
                  "strength:default": { "value": "4465:20632" },
                  "strength:strong": { "value": "4465:20634" }
                }
              },
              {
                "key": "Surface above",
                "value": "sheet",
                "mono": true,
                "prop": "surface"
              },
              {
                "key": "Background tone",
                "value": "light",
                "mono": true,
                "prop": "bg"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Scrim",
                "value": "#020E228F (56% alpha)",
                "token": "bg/color-bg-overlay-strong",
                "swatch": true,
                "variants": {
                  "strength:weak": {
                    "value": "#020E223D (24% alpha)",
                    "token": "bg/color-bg-overlay-weak",
                    "swatch": true
                  },
                  "strength:default": {
                    "value": "#020E2266 (40% alpha)",
                    "token": "bg/color-bg-overlay-default",
                    "swatch": true
                  },
                  "strength:strong": {
                    "value": "#020E228F (56% alpha)",
                    "token": "bg/color-bg-overlay-strong",
                    "swatch": true
                  }
                }
              },
              {
                "key": "Base color",
                "value": "#020E22",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width (default)",
                "value": "360",
                "mono": true
              },
              {
                "key": "Height (default)",
                "value": "800",
                "mono": true
              },
              {
                "key": "Resize behavior",
                "value": "dim scales with the instance on both axes",
                "mono": false
              },
              {
                "key": "Verified at",
                "value": "640 · 761 · 800 · 826 · 932",
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
            "slug": "typo",
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
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Colors by Strength',
        description: 'Dimming layer placed under modal/sheet surfaces. One row per Strength tier — same base color, different alpha.',
        rows: [
          { role: 'Scrim — Weak', token: 'bg/color-bg-overlay-weak', value: '#020E22 @ 24%' },
          { role: 'Scrim — Default', token: 'bg/color-bg-overlay-default', value: '#020E22 @ 40%' },
          { role: 'Scrim — Strong', token: 'bg/color-bg-overlay-strong', value: '#020E22 @ 56%' },
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
          "figma": "Strength = Weak | Default | Strong",
          "swift": "<code>.ebStrength(.weak | .default | .strong)</code>",
          "compose": "<code>strength = EBOverlayStrength.Weak | Default | Strong</code>"
        },
        {
          "figma": "Frame size (360×800 default)",
          "swift": "<code>.ignoresSafeArea()</code> — scrim is always full-bleed; the Figma size is canvas presentation only.",
          "compose": "<code>Modifier.fillMaxSize()</code> — same; no dimension is read off the Figma frame."
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
        "notes": "Inner layer named <code>dim</code> — semantic and accurate. The redundant <code>Container</code> wrapper has been removed, leaving <code>COMPONENT → dim</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Single <code>Strength</code> property with a clean three-value enum — <code>Weak</code> · <code>Default</code> · <code>Strong</code>. The <code>-strong</code> token no longer implies a missing sibling."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All three tiers share base color <code>#020E22</code> at 24% / 40% / 56%. Per-tier token binding could not be confirmed from the assessment tooling — needs a Dev Mode check that each tier resolves to its own token rather than a manual opacity override."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to SwiftUI <code>.presentationBackground</code> and Compose <code>Scrim</code>. Ships at a 360×800 default and the <code>dim</code> layer tracks the instance exactly — verified at 640, 761, 826 and 932. A scrim is full-bleed on both platforms, so no dimension is read off the Figma frame."
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
        "notes": "No Code Connect mapping yet. Both prior blockers are cleared — the three variants map 1:1 to a single <code>strength</code> enum parameter."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "3 Strength = 3 variants. Single-axis matrix — same geometry throughout, only the scrim alpha changes.",
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
            "<strong>Strength = Weak</strong>",
            "<code>4465:20549</code>",
            "360 × 800",
            "<span class=\"swatch-dot\" style=\"background:#020E223D\"></span><code>#020E22 @ 24%</code>",
            "Lightest tier — content below stays legible."
          ]
        },
        {
          "cells": [
            "2",
            "<strong>Strength = Default</strong>",
            "<code>4465:20632</code>",
            "360 × 800",
            "<span class=\"swatch-dot\" style=\"background:#020E2266\"></span><code>#020E22 @ 40%</code>",
            "Standard tier for sheets and dialogs."
          ]
        },
        {
          "cells": [
            "3",
            "<strong>Strength = Strong</strong>",
            "<code>4465:20634</code>",
            "360 × 800",
            "<span class=\"swatch-dot\" style=\"background:#020E228F\"></span><code>#020E22 @ 56%</code>",
            "Heaviest tier — carried over from the original single variant. Used by all five in-file placements."
          ]
        }
      ]
    }
  },
  "changelog": [
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
