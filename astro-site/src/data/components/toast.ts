import type { ComponentData, DemoControlSection } from '../types';
import { buildMultiModeColorsTable, buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/toast.js`.
const toastDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Theme',
        prop: 'theme',
        defaultValue: 'dark',
        options: [
          { value: 'dark', label: 'dark' },
          { value: 'light', label: 'light' },
          { value: 'default', label: 'default' },
        ],
      },
      {
        label: 'With Icon',
        prop: 'withIcon',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no', label: 'no' },
        ],
      },
      {
        label: 'Large Label',
        prop: 'largeLabel',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no', label: 'no' },
        ],
      },
    ],
  },
];

export const toast: ComponentData = {
  "meta": {
    "slug": "toast",
    "name": "Toast",
    "node": "27:53135",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-53135",
    "description": "A transient bottom-anchored message used for confirmations and inline alerts; auto-dismisses after a short delay.",
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
    "navGroup": "Toast",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — collapse the family and clean up the axes",
      "text": "Merge Toast + Toast - With Button into one component with an optional <code>action</code> slot. Split the overloaded <code>theme</code> axis into <code>appearance = neutral | destructive | pending</code> + <code>theme = light | dark</code>. Replace <code>Large Label</code> with <code>size = small | base</code>. Replace the Pending placeholder circle with a real spinner instance. Add a dismiss contract (swipe + auto-duration)."
    }
  },
  "overview": {
    "inContextNote": "Toasts float over the app screen — not inline with content. Success toasts confirm completed actions (\"Transfer sent\"), pending toasts acknowledge background work (\"Uploading…\"), and error toasts surface failures that don't block the flow. They auto-dismiss after ~3 seconds unless swiped.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toast-demo-preview\"><div class=\"eb-preview eb-preview-toast eb-preview-toast--dark eb-preview-toast--large\"><div class=\"eb-preview-toast__container\"><div class=\"eb-preview-toast__icon-wrap\"><svg class=\"eb-preview-toast__icon eb-preview-toast__icon--large\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" fill=\"none\"></circle><path d=\"M7.50 12.20 L10.80 16.50 L17.00 7.50\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></svg></div><p class=\"eb-preview-toast__label\">Add the popup message here</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"toast-ctrl-type\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"pending\">pending</option><option value=\"error\">error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Theme</span><select id=\"toast-ctrl-theme\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"dark\" selected=\"\">dark</option><option value=\"light\">light</option><option value=\"default\">default</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">With Icon</span><select id=\"toast-ctrl-withicon\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Large Label</span><select id=\"toast-ctrl-largelabel\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Drops into any transient-feedback moment — transfers, uploads, validation errors. Not tied to a specific screen."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Owns its colors and typography, but the Pending type ships a 16/24 <code>icon-placeholder</code> gray circle instead of a real spinner — consumers can't drop in a live progress indicator without editing the master."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "The <code>theme</code> axis mixes appearance (light/dark surface) with semantic status — Error forces <code>theme=default</code> and loses the dark/light choice. <code>Large Label</code> is really a size axis phrased as a content flag."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "No action slot — a sibling component (Toast - With Button) exists just to add one button. Action should be an optional slot on this component, not a separate family member."
      }
    ],
    "behavior": [
      {
        "state": "Show / auto-dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not modeled",
        "notes": "Toasts appear on a host overlay and auto-dismiss after a duration (~3s short, ~5s long). Host-screen concern — no visual state variant needed."
      },
      {
        "state": "Swipe to dismiss",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Standard gesture on both platforms. Not called out in the component spec."
      },
      {
        "state": "Tap to dismiss",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Pending variants already wrap the container in a <code>button</code> element in the Figma code — but no interaction callback is documented."
      },
      {
        "state": "Pending spinner animation",
        "ios": "na",
        "android": "na",
        "property": "Gray circle",
        "notes": "Pending icon is a static gray circle (<code>icon-placeholder</code>) — should be an animated spinner (ProgressView / CircularProgressIndicator)."
      },
      {
        "state": "A11y announcement",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Error toasts should announce as assertive; default/pending as polite. Not spec'd."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Two components model one primitive.",
        "body": "Toast + Toast - With Button differ only in the presence of an action button. Action belongs on this component as an optional slot, not a separate family member. Doubling the surface area of every future change.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>theme</code> axis overloaded with status.",
        "body": "Values are <code>default | light | dark</code> but <code>default</code> is only valid when <code>type=error</code> (it paints the destructive red surface). Real axes are <code>appearance = neutral | destructive | pending</code> × <code>theme = light | dark</code>. Current schema blocks light/dark error variants.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>Large Label</code> is a size flag, not a content flag.",
        "body": "The two values change padding, font size, and line-height — this is a size axis. Rename to <code>size = small | base</code> (or <code>compact</code> / <code>regular</code>) so the schema reads correctly.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Booleans use <code>yes/no</code> strings.",
        "body": "<code>With Icon</code> / <code>Large Label</code> — blocks direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pending type uses a placeholder icon.",
        "body": "16 × 16 (small) and 24 × 24 (base) gray <code>icon-placeholder</code> circles instead of an animated spinner. No instance of a ProgressView / CircularProgressIndicator — native consumers can't wire up a real loading state.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No swipe-to-dismiss or auto-duration contract.",
        "body": "Standard toast behaviors on both iOS and Android. Neither is annotated in the Figma component spec — engineers have to guess the duration budget and gesture handling.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No native primitive mapping documented.",
        "body": "SwiftUI has no first-party toast (pre-iOS 17); Compose uses SnackbarHost + Snackbar. The component doesn't call out either mapping — dev-handoff guessing game.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on family consolidation and axis cleanup.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate Toast + Toast - With Button.",
        "body": "Target schema: <code>EBToast(message, appearance = .neutral | .destructive | .pending, theme = .light | .dark, size = .small | .base, leadingIcon?: Icon, action?: EBToastAction)</code>. Remove the <code>With Button</code> component from the family.",
        "tag": "Family"
      },
      {
        "headline": "Split <code>theme</code> into <code>appearance</code> + <code>theme</code>.",
        "body": "<code>appearance = neutral | destructive | pending</code> controls semantic status + surface palette; <code>theme = light | dark</code> controls the neutral-surface contrast mode. Unlocks light/dark destructive variants and matches every other DS component's mental model.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>Large Label</code> to <code>size = small | base</code>.",
        "body": "Matches the actual axis (padding, font size, spacing) and mirrors Button / Alert sizing.",
        "tag": "Rename"
      },
      {
        "headline": "Normalize booleans to <code>true/false</code>.",
        "body": "<code>With Icon</code> and any remaining flags. Then rename <code>With Icon</code> to <code>leadingIcon</code> once promoted to a Slot.",
        "tag": "Rename"
      },
      {
        "headline": "Replace Pending placeholder with a real spinner.",
        "body": "Instance-swap a ProgressView / CircularProgressIndicator (or the DS Spinner component when it ships) into the leading-icon slot for <code>appearance=pending</code>. Same slot covers the checkmark for <code>appearance=neutral</code> and the X for <code>appearance=destructive</code>.",
        "tag": "Asset"
      },
      {
        "headline": "Promote the leading icon to a swappable Slot.",
        "body": "Adopt Figma Slots so consumers can drop in any Icon from the DS icon library. Default slot content per appearance: checkmark / spinner / error glyph.",
        "tag": "Slot"
      },
      {
        "headline": "Add an optional action slot.",
        "body": "<code>action?: EBToastAction</code> — takes label + callback. Covers the \"Undo\", \"Retry\", \"View\" use cases and replaces the need for Toast - With Button entirely.",
        "tag": "Slot"
      },
      {
        "headline": "Document duration + dismiss behavior.",
        "body": "Annotate default duration (3s short / 5s long), swipe-to-dismiss, tap-to-dismiss, and the <code>onDismiss</code> callback contract in the component spec. Not a visual variant — a usage note.",
        "tag": "Docs"
      },
      {
        "headline": "Document the A11y live-region mapping.",
        "body": "Error toasts announce as assertive (<code>UIAccessibility .high</code> / <code>LiveRegionMode.Assertive</code>); default + pending as polite. Spell this out so engineers wire the right roles.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "dark",
        "demoControls": toastDemoControls,
        "title": "Default",
        "node": "27:53136",
        "description": "Confirms a completed action — transfer sent, settings saved, upload finished. Default theme places a checkmark glyph on a dark navy surface.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-spec-1\"><div class=\"eb-preview eb-preview-toast eb-preview-toast--dark eb-preview-toast--large\"><div class=\"eb-preview-toast__container\"><div class=\"eb-preview-toast__icon-wrap\"><svg class=\"eb-preview-toast__icon eb-preview-toast__icon--large\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" fill=\"none\"></circle><path d=\"M7.50 12.20 L10.80 16.50 L17.00 7.50\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></svg></div><p class=\"eb-preview-toast__label\">Add the popup message here</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Theme",       "value": "dark", "mono": true, "prop": "theme" },
              { "key": "With Icon",   "value": "yes",  "mono": true, "prop": "withIcon" },
              { "key": "Large Label", "value": "yes",  "mono": true, "prop": "largeLabel" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#0A2757", "token": "toast/color/default/bg",
                "variants": {
                  "theme:light":   { "value": "#FFFFFF", "token": "toast/color/light/bg" },
                  "theme:default": { "value": "#0A2757", "token": "toast/color/default/bg" }
                }
              },
              { "key": "Label", "value": "#FFFFFF", "token": "toast/color/default/label",
                "variants": {
                  "theme:light": { "value": "#0A2757", "token": "toast/color/light/label" }
                }
              },
              { "key": "Icon", "value": "#FFFFFF", "token": "toast/color/default/icon",
                "variants": {
                  "theme:light":   { "value": "#0A2757", "token": "toast/color/light/icon" },
                  "withIcon:no":   { "hide": true }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "312", "mono": true },
              { "key": "Padding",       "value": "12 × 12", "mono": true },
              { "key": "Corner radius", "value": "8",   "mono": true },
              { "key": "Icon size",     "value": "24 × 24", "mono": true,
                "variants": { "largeLabel:no": { "value": "16 × 16" }, "withIcon:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",  "value": "Proxima Soft Semibold", "mono": true },
              { "key": "Style", "value": "Primary/Label/Light/Small", "mono": true,
                "variants": { "largeLabel:no": { "value": "Primary/Multi-line Label/Light/Fine" } }
              },
              { "key": "Size",  "value": "14 / 14 · +0.25", "mono": true,
                "variants": { "largeLabel:no": { "value": "12 / 14 · +0.5" } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Action successful\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIcon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"checkmark\"</span><span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    message <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Action successful\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Check</span><span class=\"syn-punc\">, null) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "error",
        "demoKey": "error",
        "demoControls": toastDemoControls,
        "title": "Error",
        "node": "27:53154",
        "description": "Surfaces a failure that needs the user's attention — failed transfer, invalid input, expired session. Red surface with a leading X glyph.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-spec-2\"><div class=\"eb-preview eb-preview-toast eb-preview-toast--destructive eb-preview-toast--large\"><div class=\"eb-preview-toast__container\"><div class=\"eb-preview-toast__icon-wrap\"><svg class=\"eb-preview-toast__icon eb-preview-toast__icon--large\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" fill=\"none\"></circle><path d=\"M8 8 L16 16 M16 8 L8 16\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div><p class=\"eb-preview-toast__label\">Add the popup message here</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Theme",       "value": "default", "mono": true, "prop": "theme" },
              { "key": "With Icon",   "value": "yes",     "mono": true, "prop": "withIcon" },
              { "key": "Large Label", "value": "yes",     "mono": true, "prop": "largeLabel" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#D61B2C", "token": "toast/color/destructive/bg" },
              { "key": "Label",      "value": "#FFFFFF", "token": "toast/color/destructive/label" },
              { "key": "Icon", "value": "#FFFFFF", "token": "toast/color/destructive/icon",
                "variants": { "withIcon:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "312", "mono": true },
              { "key": "Padding",       "value": "12 × 12", "mono": true },
              { "key": "Corner radius", "value": "8",   "mono": true },
              { "key": "Icon size",     "value": "24 × 24", "mono": true,
                "variants": { "largeLabel:no": { "value": "16 × 16" }, "withIcon:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",  "value": "Proxima Soft Semibold", "mono": true },
              { "key": "Style", "value": "Primary/Label/Light/Small", "mono": true,
                "variants": { "largeLabel:no": { "value": "Primary/Multi-line Label/Light/Fine" } }
              },
              { "key": "Size",  "value": "14 / 14 · +0.25", "mono": true,
                "variants": { "largeLabel:no": { "value": "12 / 14 · +0.5" } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Something went wrong\"</span><span class=\"syn-punc\">,</span>\n    intent<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>error\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Something went wrong\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastIntent</span><span class=\"syn-punc\">.</span>Error\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "pending",
        "demoKey": "pending",
        "demoControls": toastDemoControls,
        "title": "Pending",
        "node": "3424:1308",
        "description": "Acknowledges in-flight work the user kicked off — submitting a form, syncing a balance, processing a payment. A spinner glyph signals the action is still running.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-spec-3\"><div class=\"eb-preview eb-preview-toast eb-preview-toast--dark eb-preview-toast--large\"><div class=\"eb-preview-toast__container\"><div class=\"eb-preview-toast__icon-wrap\"><div class=\"eb-preview-toast__icon-placeholder eb-preview-toast__icon-placeholder--large\"></div></div><p class=\"eb-preview-toast__label\">Add the popup message here</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Theme",       "value": "dark", "mono": true, "prop": "theme" },
              { "key": "With Icon",   "value": "yes",  "mono": true, "prop": "withIcon" },
              { "key": "Large Label", "value": "yes",  "mono": true, "prop": "largeLabel" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#0A2757", "token": "toast/color/pending/bg",
                "variants": {
                  "theme:light": { "value": "#FFFFFF", "token": "toast/color/light/bg" }
                }
              },
              { "key": "Label", "value": "#FFFFFF", "token": "toast/color/pending/label",
                "variants": {
                  "theme:light": { "value": "#0A2757", "token": "toast/color/light/label" }
                }
              },
              { "key": "Icon", "value": "#FFC857", "token": "toast/color/pending/icon",
                "variants": { "withIcon:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "312", "mono": true },
              { "key": "Padding",       "value": "12 × 12", "mono": true },
              { "key": "Corner radius", "value": "8",   "mono": true },
              { "key": "Icon size",     "value": "24 × 24", "mono": true,
                "variants": { "largeLabel:no": { "value": "16 × 16" }, "withIcon:no": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Font",  "value": "Proxima Soft Semibold", "mono": true },
              { "key": "Style", "value": "Primary/Label/Light/Small", "mono": true,
                "variants": { "largeLabel:no": { "value": "Primary/Multi-line Label/Light/Fine" } }
              },
              { "key": "Size",  "value": "14 / 14 · +0.25", "mono": true,
                "variants": { "largeLabel:no": { "value": "12 / 14 · +0.5" } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Processing your request…\"</span><span class=\"syn-punc\">,</span>\n    intent<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>pending\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Processing your request…\"</span><span class=\"syn-punc\">,</span>\n    intent <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastIntent</span><span class=\"syn-punc\">.</span>Pending\n<span class=\"syn-punc\">)</span>"
      },
      
    ],
    colorsTables: [
      // Card 1 — Default · with icon · large label
      buildMultiModeColorsTable({
        title: 'Default — Colors by Theme',
        description: 'Information toast. Theme axis flips surface + label between Dark (navy) and Light (white).',
        modes: ['Theme · Dark', 'Theme · Light'],
        rows: [
          { role: 'Surface bg', token: 'main/toast/default/{theme}/bg',     values: ['#0A2757', '#FFFFFF'] },
          { role: 'Border',     token: 'main/toast/default/{theme}/border', values: ['#E5EBF4', '#E5EBF4'] },
          { role: 'Label',      token: 'main/toast/default/{theme}/label',  values: ['#FFFFFF', '#0A2757'] },
          { role: 'Icon',       token: 'main/toast/default/{theme}/icon',   values: ['#FFFFFF', '#0A2757'] },
        ],
      }),
      // Card 2 — Error
      buildStatelessColorsTable({
        title: 'Error — Colors',
        description: 'Critical/error toast. Single appearance regardless of theme.',
        rows: [
          { role: 'Surface bg', token: 'main/toast/error/bg',     value: '#D61B2C' },
          { role: 'Border',     token: 'main/toast/error/border', value: '#F4C7C9' },
          { role: 'Label',      token: 'main/toast/error/label',  value: '#FFFFFF' },
          { role: 'Icon',       token: 'main/toast/error/icon',   value: '#FFFFFF' },
        ],
      }),
      // Card 3 — Pending · with icon · large label
      buildMultiModeColorsTable({
        title: 'Pending — Colors by Theme',
        description: 'In-progress / loading state toast. Same surface palette as Default; spinner replaces the static icon.',
        modes: ['Theme · Dark', 'Theme · Light'],
        rows: [
          { role: 'Surface bg',  token: 'main/toast/pending/{theme}/bg',      values: ['#0A2757', '#FFFFFF'] },
          { role: 'Border',      token: 'main/toast/pending/{theme}/border',  values: ['#E5EBF4', '#E5EBF4'] },
          { role: 'Label',       token: 'main/toast/pending/{theme}/label',   values: ['#FFFFFF', '#0A2757'] },
          { role: 'Spinner',     token: 'main/toast/pending/{theme}/spinner', values: ['#FFFFFF', '#0A2757'] },
        ],
      }),
      // Card 4 — Default · no icon, small label
      buildMultiModeColorsTable({
        title: 'Default (No Icon) — Colors by Theme',
        description: 'Same theme palette as the with-icon variant; only the icon role drops out.',
        modes: ['Theme · Dark', 'Theme · Light'],
        rows: [
          { role: 'Surface bg', token: 'main/toast/default/{theme}/bg',     values: ['#0A2757', '#FFFFFF'] },
          { role: 'Border',     token: 'main/toast/default/{theme}/border', values: ['#E5EBF4', '#E5EBF4'] },
          { role: 'Label',      token: 'main/toast/default/{theme}/label',  values: ['#FFFFFF', '#0A2757'] },
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
      "description": "The proposed schema collapses Toast + Toast - With Button into one API. Action becomes an optional slot, theme splits into appearance + theme, and Large Label becomes size.",
      "rows": [
        {
          "figma": "<code>Type: default | pending | error</code>",
          "swift": "<code>appearance: neutral | pending | destructive</code>",
          "compose": "<code>appearance: EBToastAppearance</code>"
        },
        {
          "figma": "<code>Theme: default | light | dark</code> (overloaded)",
          "swift": "<code>theme: light | dark</code> (neutral + pending only)",
          "compose": "<code>.ebToastTheme(.dark)</code>"
        },
        {
          "figma": "<code>Large Label: yes | no</code>",
          "swift": "<code>size: small | base</code>",
          "compose": "<code>.controlSize(.small / .regular)</code>"
        },
        {
          "figma": "<code>With Icon: yes | no</code>",
          "swift": "<code>leadingIcon?: Icon</code> (slot)",
          "compose": "<code>leadingIcon: Image?</code>"
        },
        {
          "figma": "(implicit)",
          "swift": "<code>message: String</code>",
          "compose": "<code>message: String</code>"
        },
        {
          "figma": "(separate component)",
          "swift": "<code>action?: ToastAction</code>",
          "compose": "<code>action: EBToastAction?</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>duration: short | long</code>",
          "compose": "<code>duration: EBToastDuration</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onDismiss?: () -&gt; Void</code>",
          "compose": "<code>onDismiss: (() -&gt; Void)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Live region — error",
        "ios": "Post <code>UIAccessibility.Notification.announcement</code> with <code>.high</code> priority on present.",
        "android": "<code>Modifier.semantics { liveRegion = LiveRegionMode.Assertive }</code> on the Snackbar container."
      },
      {
        "requirement": "Live region — neutral / pending",
        "ios": "Post announcement with default priority.",
        "android": "<code>LiveRegionMode.Polite</code>."
      },
      {
        "requirement": "Minimum duration",
        "ios": "Short ≥ 3s, long ≥ 5s; extend for longer messages per iOS HIG.",
        "android": "<code>SnackbarDuration.Short / Long</code> (Material 3 defaults)."
      },
      {
        "requirement": "Action button label",
        "ios": "Action slot owns its own <code>accessibilityLabel</code>.",
        "android": "Action slot owns its own <code>contentDescription</code>."
      },
      {
        "requirement": "Dismiss gesture",
        "ios": "Swipe horizontally to dismiss; respect reduce-motion for the slide-out animation.",
        "android": "Swipe to dismiss built into <code>Snackbar</code>; honor <code>TalkBackUserTouchExplorationEnabled</code> to extend duration."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Two components for one primitive — consolidate with Toast - With Button."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>theme</code> overloaded with status; <code>Large Label</code> is a size flag; booleans on <code>yes/no</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/toast/color/{mode}/*</code>. Spacing + typography fully tokenized."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No SwiftUI first-party primitive; Compose has Snackbar. Needs documented mapping + ToastManager pattern."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No auto-duration, swipe, or tap-to-dismiss contract; pending has no animation."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pending uses <code>icon-placeholder</code> gray circle instead of a real spinner."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on family consolidation and axis cleanup."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "Effective axes today: <code>Type</code> (3) × <code>Theme</code> (3, coupled to Type) × <code>With Icon</code> (2) × <code>Large Label</code> (2). Built variants collapse the illegal combinations — Error only pairs with <code>theme=default</code>; Pending only pairs with <code>theme=dark | light</code> + <code>with icon=yes</code>. = <strong>16 built variants</strong>.",
      "columns": [
        "Group",
        "Count",
        "Axes"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Default / Dark</strong>",
            "4",
            "withIcon=yes/no × largeLabel=yes/no"
          ]
        },
        {
          "cells": [
            "<strong>Default / Light</strong>",
            "4",
            "withIcon=yes/no × largeLabel=yes/no"
          ]
        },
        {
          "cells": [
            "<strong>Error / Default</strong>",
            "4",
            "withIcon=yes/no × largeLabel=yes/no"
          ]
        },
        {
          "cells": [
            "<strong>Pending / Dark</strong>",
            "2",
            "withIcon=yes (forced) × largeLabel=yes/no"
          ]
        },
        {
          "cells": [
            "<strong>Pending / Light</strong>",
            "2",
            "withIcon=yes (forced) × largeLabel=yes/no"
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
      "header": "Initial Assessment · node 27:53135",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Consolidate with Toast - With Button, split the overloaded <code>theme</code> axis, rename <code>Large Label</code> to <code>size</code>, and replace the Pending placeholder with a real spinner. <span class=\"tag-open tag-c1 tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C1 — Family duplication</strong> — Toast + Toast - With Button model one primitive; merge via optional <code>action</code> slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Axis overload</strong> — <code>theme</code> mixes appearance + status; <code>Large Label</code> is a size flag; booleans on <code>yes/no</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Pending placeholder</strong> — 16/24 gray <code>icon-placeholder</code> circle; adopt a real spinner instance. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Dismiss + duration</strong> — No auto-dismiss, swipe, or tap-to-dismiss documented. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C4 — Native mapping</strong> — Document ToastManager overlay (iOS) + SnackbarHost wrapper (Android). <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on family consolidation + schema cleanup. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
