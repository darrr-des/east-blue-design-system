import type { ComponentData, DemoControlSection } from '../types';
import { buildMultiModeColorsTable, buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/toast-with-button.js`.
const toastWithButtonDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Theme',
        prop: 'theme',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'default' },
          { value: 'light', label: 'light' },
        ],
      },
      {
        label: 'Description',
        prop: 'description',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no', label: 'no' },
        ],
      },
    ],
  },
];

export const toastWithButton: ComponentData = {
  "meta": {
    "slug": "toast-with-button",
    "name": "Toast - With Button",
    "node": "27:53205",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-53205",
    "description": "A toast variant with a trailing action button used for undo or in-flight confirmations.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Toast",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — merged into Toast",
      "text": "This component no longer exists on its own. Its trailing button is now a <code>hasTrailingAction</code> boolean on <a href=\"/components/toast\">Toast</a> (node <code>4915:25141</code>), with the button in a swappable <code>addon</code> slot. Assessment for this pattern lives on the Toast page."
    }
  },
  "overview": {
    "inContextNote": "The actionable toast appears after reversible operations — \"Transfer sent · Undo\", \"Message failed · Retry\", \"Photo uploaded · View\". The action button sits right-aligned, tappable without dismissing the toast. Auto-dismiss is suppressed while an action is present.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toast-with-button-demo-preview\"><div class=\"eb-preview eb-preview-toastwb eb-preview-toastwb--default eb-preview-toastwb--has-desc\"><div class=\"eb-preview-toastwb__container\"><div class=\"eb-preview-toastwb__text-container\"><p class=\"eb-preview-toastwb__label\">Add label here</p><p class=\"eb-preview-toastwb__desc\">Add description here.</p></div><div class=\"eb-preview-toastwb__action-slot\"><div class=\"eb-preview-toastwb__action eb-preview-toastwb__action--white\">Label</div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"toast-with-button-ctrl-type\" class=\"demo-panel-select\" onchange=\"_toastWithButtonUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"light\">light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Description</span><select id=\"toast-with-button-ctrl-description\" class=\"demo-panel-select\" onchange=\"_toastWithButtonUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Historical rating from the standalone assessment. This component is merged into Toast — see that page for the current DS Health."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Historical rating from the standalone assessment. This component is merged into Toast — see that page for the current DS Health."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Historical rating from the standalone assessment. This component is merged into Toast — see that page for the current DS Health."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Historical rating from the standalone assessment. This component is merged into Toast — see that page for the current DS Health."
      }
    ],
    "behavior": [
      {
        "state": "Action tap",
        "ios": "yes",
        "android": "yes",
        "property": "Button instance embedded",
        "notes": "The deprecated Button - Small/XS is the action surface. Only one fixed appearance; consumers can't disable or show a loading spinner on the action."
      },
      {
        "state": "Whole-container tap",
        "ios": "na",
        "android": "na",
        "property": "Root is a <button> in some variants",
        "notes": "The <code>default, description=no</code> variant wraps the whole toast in a <code>button</code> element, overlapping the inner action — tap target is unclear."
      },
      {
        "state": "Auto-dismiss when action present",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Toasts with actions should stay visible until the action is taken or explicitly dismissed. Not spec'd."
      },
      {
        "state": "Action loading / disabled state",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "\"Retry\" actions often need a loading state after tap. No provision in the component."
      },
      {
        "state": "A11y — action label",
        "ios": "na",
        "android": "na",
        "property": "Text \"Label\"",
        "notes": "The default text in the instance is literally \"Label\". Needs a content contract and an accessibility label override."
      }
    ],
    "resolved": [
      {
        "headline": "Merged into Toast.",
        "body": "v2.0: Confirmed by the component owner — Toast - With Button no longer exists as a standalone component. Its trailing button is now a <code>hasTrailingAction</code> boolean on <a href=\"/components/toast\">Toast</a> (node <code>4915:25141</code>), with the button itself living in an <code>addon</code> slot so it can be swapped without detaching. This page is kept as a pointer; all assessment for this pattern lives on Toast. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [],
    "recommendations": []
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "darkdesc",
        "demoControls": toastWithButtonDemoControls,
        "title": "Default",
        "node": "813:31117",
        "description": "Confirms a reversible action that the user might want to undo right away — \"Removed from favorites\", \"Transfer sent\". Pairs a label and optional description with a trailing action button.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-with-button-spec-1\"><div class=\"eb-preview eb-preview-toastwb eb-preview-toastwb--default eb-preview-toastwb--has-desc\"><div class=\"eb-preview-toastwb__container\"><div class=\"eb-preview-toastwb__text-container\"><p class=\"eb-preview-toastwb__label\">Add label here</p><p class=\"eb-preview-toastwb__desc\">Add description here.</p></div><div class=\"eb-preview-toastwb__action-slot\"><div class=\"eb-preview-toastwb__action eb-preview-toastwb__action--white\">Label</div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Theme",       "value": "default", "mono": true, "prop": "theme" },
              { "key": "Description", "value": "yes",     "mono": true, "prop": "description" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#0A2757", "token": "toast/color/default/bg",
                "variants": { "theme:light": { "value": "#FFFFFF", "token": "toast/color/light/bg" } }
              },
              { "key": "Label", "value": "#FFFFFF", "token": "toast/color/default/label",
                "variants": { "theme:light": { "value": "#0A2757", "token": "toast/color/light/label" } }
              },
              { "key": "Description", "value": "#F6F9FDCC", "token": "toast/color/default/description",
                "variants": {
                  "theme:light":    { "value": "#445C85", "token": "toast/color/light/description" },
                  "description:no": { "hide": true }
                }
              },
              { "key": "Button label", "value": "#005CE5", "token": "button/v1/default/label" },
              { "key": "Button bg",    "value": "#FFFFFF", "token": "button/v1/default/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "330",      "mono": true },
              { "key": "Padding",       "value": "16 × 12",  "mono": true,
                "variants": { "description:no": { "value": "16 × 8" } }
              },
              { "key": "Corner radius", "value": "8",        "mono": true },
              { "key": "Button height", "value": "24",       "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label",       "value": "Proxima Soft Bold · 14 / 16 · +0.25", "mono": true },
              { "key": "Description", "value": "BarkAda Medium · 10 / 15", "mono": true,
                "variants": { "description:no": { "hide": true } }
              },
              { "key": "Button",      "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Removed from favorites\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tap undo to revert\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Undo\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    message <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Removed from favorites\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tap undo to revert\"</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Undo\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      
    ],
    colorsTables: [
      // Card 1 — Default with action button (theme=dark)
      buildMultiModeColorsTable({
        title: 'Default — Colors by Theme',
        description: 'Default toast with a trailing action button. Theme axis flips surface + label between Dark and Light.',
        modes: ['Theme · Dark', 'Theme · Light'],
        rows: [
          { role: 'Surface bg',  token: 'toast/color/{theme}/bg',          values: ['#0A2757', '#FFFFFF'] },
          { role: 'Border',      token: 'toast/color/{theme}/border',      values: ['#E5EBF4', '#E5EBF4'] },
          { role: 'Label',       token: 'toast/color/{theme}/label',       values: ['#FFFFFF', '#0A2757'] },
          { role: 'Description', token: 'toast/color/{theme}/description', values: ['#F6F9FD @ 80%', '#445C85'] },
          { role: 'Action label', token: 'toast/color/{theme}/action',     values: ['#9BC5FD', '#005CE5'] },
        ],
      }),
      // Card 2 — Light surface card with button
      buildStatelessColorsTable({
        title: 'Light — Colors',
        description: 'Light toast variant with brand-blue trailing action.',
        rows: [
          { role: 'Surface bg',  token: 'main/toast/light/bg',          value: '#FFFFFF' },
          { role: 'Label',       token: 'main/toast/light/label',       value: '#0A2757' },
          { role: 'Description', token: 'main/toast/light/description', value: '#3C4A5C' },
          { role: 'Action label', token: 'main/toast/light/action',     value: '#005CE5' },
        ],
      }),
      // Card 3 — Pending with progress
      buildMultiModeColorsTable({
        title: 'Pending — Colors by Theme',
        description: 'In-progress toast — same theme palette as Default.',
        modes: ['Theme · Dark', 'Theme · Light'],
        rows: [
          { role: 'Surface bg', token: 'toast/color/pending/{theme}/bg',      values: ['#0A2757', '#FFFFFF'] },
          { role: 'Label',      token: 'toast/color/pending/{theme}/label',   values: ['#FFFFFF', '#0A2757'] },
          { role: 'Spinner',    token: 'toast/color/pending/{theme}/spinner', values: ['#FFFFFF', '#0A2757'] },
        ],
      }),
      // Card 4 — Error
      buildStatelessColorsTable({
        title: 'Error — Colors',
        description: 'Critical error toast with white text on red.',
        rows: [
          { role: 'Surface bg', token: 'main/toast/error/bg',     value: '#D61B2C' },
          { role: 'Border',     token: 'main/toast/error/border', value: '#F4C7C9' },
          { role: 'Label',      token: 'main/toast/error/label',  value: '#FFFFFF' },
          { role: 'Action',     token: 'main/toast/error/action', value: '#FFFFFF' },
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
      "description": "This component collapses into the base Toast. Figma properties map to the consolidated Toast API, not to a standalone EBToastWithButton.",
      "rows": [
        {
          "figma": "<code>Type: default | light</code>",
          "swift": "<code>theme: light | dark</code> (shared with Toast)",
          "compose": "<code>.ebToastTheme(.dark)</code>"
        },
        {
          "figma": "<code>Description: yes | no</code>",
          "swift": "<code>supportingText?: String</code> (slot)",
          "compose": "<code>supportingText: String?</code>"
        },
        {
          "figma": "(embedded Button - Small/XS — deprecated)",
          "swift": "<code>action?: ToastAction</code> (slot)",
          "compose": "<code>action: EBToastAction?</code>"
        },
        {
          "figma": "(implicit label text)",
          "swift": "<code>message: String</code>",
          "compose": "<code>message: String</code>"
        },
        {
          "figma": "(no icon axis)",
          "swift": "<code>leadingIcon?: Icon</code> (inherited from Toast)",
          "compose": "<code>leadingIcon: Image?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Action label",
        "ios": "Action passes <code>accessibilityLabel</code> through to the inner Button. Default: the visible label.",
        "android": "Action passes <code>contentDescription</code> to the inner Button. Default: the visible label."
      },
      {
        "requirement": "Live region",
        "ios": "Polite announcement; use the Toast's appearance to decide (destructive → assertive).",
        "android": "<code>LiveRegionMode.Polite</code> by default; assertive for destructive."
      },
      {
        "requirement": "Suppress auto-dismiss",
        "ios": "When <code>action</code> is non-nil, host overlay keeps the toast on screen until the action is tapped or the user swipes.",
        "android": "<code>SnackbarDuration.Indefinite</code> when an action is present."
      },
      {
        "requirement": "Action loading state",
        "ios": "Swap label for a ProgressView; keep the button reachable for VoiceOver (don't disable mid-announcement).",
        "android": "Swap label for a <code>CircularProgressIndicator</code>; set <code>enabled = false</code> after the state is announced."
      },
      {
        "requirement": "Tap target",
        "ios": "Action button must have a ≥ 44 × 44 hit area; the 24 px pill extends via <code>.contentShape</code> if visual size is smaller.",
        "android": "Action button must have a ≥ 48 dp touch target; use <code>Modifier.minimumInteractiveComponentSize()</code>."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Separate component for a property slot. Consolidate into base Toast; normalize width from 330 to 312."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>type</code> values drift from base Toast; <code>description=yes|no</code> should be a content slot."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface, label, description, border tokens all bound via <code>main/toast/color/{default|light}/*</code>. Action uses <code>comp/button-v1/default/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Action surface uses the deprecated Button - Small/XS; maps cleanly to Snackbar's action slot once migrated."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No action states (pressed / disabled / loading); whole-container tap overlaps the inner action."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No leading-icon axis at all — consolidation recovers it from base Toast."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation — no standalone Code Connect entry; action maps to base Toast's <code>action</code> parameter."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "Axes: <code>Type</code> (2) × <code>Description</code> (2) = <strong>4 variants</strong>. Flat matrix — no collapsed axes, no illegal combinations. Every variant embeds the deprecated <code>.[DEPRECATED] Button - Small/XS</code> instance.",
      "columns": [
        "#",
        "Node",
        "Type",
        "Description",
        "Dimensions",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>813:31117</code>",
            "default",
            "yes",
            "330 × 74",
            "Root is a <code>&lt;button&gt;</code> element"
          ]
        },
        {
          "cells": [
            "2",
            "<code>27:53213</code>",
            "light",
            "yes",
            "330 × 74",
            "Root is a <code>&lt;div&gt;</code> element"
          ]
        },
        {
          "cells": [
            "3",
            "<code>813:31125</code>",
            "default",
            "no",
            "330 × 41",
            "Root is a <code>&lt;button&gt;</code> element (tap conflict)"
          ]
        },
        {
          "cells": [
            "4",
            "<code>27:53225</code>",
            "light",
            "no",
            "330 × 41",
            "Root is a <code>&lt;div&gt;</code> element"
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
      "header": "Initial Assessment · node 27:53205",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Fold into the base Toast. Action becomes an optional slot; supporting text becomes an optional content slot. Remove this sibling from the family. <span class=\"tag-open tag-c1 tag-c2 tag-c4 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — Duplicate component</strong> — Exists to add an action slot to Toast. Collapse into base Toast with <code>action?: EBToastAction</code>. Width drifts from base (330 vs. 312). <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Axis drift</strong> — <code>type=default|light</code> here vs. <code>type=default|pending|error</code> + <code>theme=default|light|dark</code> on base Toast. <code>description=yes|no</code> should be <code>supportingText?: String</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Deprecated Button embedded</strong> — Action surface uses <code>.[DEPRECATED] Button - Small/XS</code> (node 21:164490), slated for deletion Aug 22, 2025. Rebind to Button - XSmall before migration. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Tap conflict + missing action states</strong> — <code>description=no</code> variants wrap the root in a <code>&lt;button&gt;</code> overlapping the inner action. No pressed/disabled/loading states for the action. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — No icon axis</strong> — Silently drops the <code>With Icon</code> axis that base Toast exposes. Consolidation recovers it. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on family consolidation. No standalone entry expected. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
