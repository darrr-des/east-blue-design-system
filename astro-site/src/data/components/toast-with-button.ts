import type { ComponentData } from '../types';

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
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Toast",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — fold into the base Toast",
      "text": "Remove this component from the family. Base Toast picks up <code>action?: EBToastAction</code> (label + callback) and <code>supportingText?: String</code> (the 10/15 BarkAda second line). Align width with base Toast (312 vs. 330 today) and swap the deprecated Button - Small/XS for Button - XSmall. Covers the \"Undo / Retry / View\" use cases and collapses two components into one."
    }
  },
  "overview": {
    "inContextNote": "The actionable toast appears after reversible operations — \"Transfer sent · Undo\", \"Message failed · Retry\", \"Photo uploaded · View\". The action button sits right-aligned, tappable without dismissing the toast. Auto-dismiss is suppressed while an action is present.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toast-with-button-demo-preview\"><div class=\"eb-preview eb-preview-toastwb eb-preview-toastwb--default eb-preview-toastwb--has-desc\"><div class=\"eb-preview-toastwb__container\"><div class=\"eb-preview-toastwb__text-container\"><p class=\"eb-preview-toastwb__label\">Add label here</p><p class=\"eb-preview-toastwb__desc\">Add description here.</p></div><div class=\"eb-preview-toastwb__action-slot\"><div class=\"eb-preview-toastwb__action eb-preview-toastwb__action--white\">Label</div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"toast-with-button-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Add label here\" oninput=\"_toastWithButtonUpdate()\" placeholder=\"Toast label\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"toast-with-button-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Add description here.\" oninput=\"_toastWithButtonUpdate()\" placeholder=\"Supporting text\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">action</span><input type=\"text\" id=\"toast-with-button-ctrl-action\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_toastWithButtonUpdate()\" placeholder=\"Action label\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"toast-with-button-ctrl-type\" class=\"demo-panel-select\" onchange=\"_toastWithButtonUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"light\">light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Description</span><select id=\"toast-with-button-ctrl-description\" class=\"demo-panel-select\" onchange=\"_toastWithButtonUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Drops into reversible-action moments (Undo, Retry, View). But the narrow axis set (no error, no pending, no icon) means it can't replace the base Toast for most feedback moments — consumers pick the wrong component half the time."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Embeds the <code>.[DEPRECATED] Button - Small/XS</code> instance (scheduled for deletion). When that source is removed, this component breaks. Owns its surface tokens, but its action surface is borrowed from a deprecated source."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Exists as a parallel component for what should be a property on Toast. <code>type=default|light</code> here vs. base Toast's <code>type=default|pending|error</code> and <code>theme=default|light|dark</code> — same axis name, incompatible value sets. Width is 330; base Toast is 312."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "The action is baked in as a fixed Button instance — consumers can't swap it for a text-only link, an icon button, or disable/load it. A real slot would let consumers compose the action they need."
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
    "resolved": [],
    "open": [
      {
        "headline": "Separate component for a button slot that should be a prop on the base Toast.",
        "body": "Material's Snackbar, SwiftUI's <code>.alert(actions:)</code>, and every other mature DS handle this as an optional action parameter — not a sibling record. Maintaining two components doubles the surface area of every future change and invites drift (different widths, different type sets).",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Axis names + values drift from the base Toast.",
        "body": "Base Toast exposes <code>type = default | pending | error</code> + <code>theme = default | light | dark</code>. This sibling exposes <code>type = default | light</code> — same axis name, narrower value set, collides on meaning. Consumers wiring Code Connect can't treat them as the same prop.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>description=yes|no</code> is a slot + sizing flag bundled into a string.",
        "body": "When description is present, vertical padding grows from 8 to 12 and a 4 px gap is inserted below the label. The trigger should be the presence of supporting-text content (<code>supportingText?: String</code>), not a hard-coded variant.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Action surface uses the deprecated Button - Small/XS.",
        "body": "The embedded Button instance (node <code>21:164490</code>) is marked <strong>DEPRECATED</strong> in Figma, slated for deletion. When that source is removed, every variant of this toast breaks. Must re-link to Button - XSmall.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No icon axis at all.",
        "body": "Base Toast has <code>With Icon = yes | no</code>. This sibling drops the axis entirely — you can't have an actionable toast with a leading checkmark or error glyph. Merging into Toast recovers the icon automatically.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Whole-container tap overlaps the action button.",
        "body": "The <code>default, description=no</code> variant wraps the entire toast in a <code>&lt;button&gt;</code> element, while the inner action is also a button — two conflicting tap targets stacked. Behavior is undefined when the user taps the non-action area.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Action has no states.",
        "body": "No pressed, disabled, or loading state on the action. \"Retry\" actions commonly need a spinner after tap; destructive \"Undo\" often needs to grey out during processing. Not modeled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Width 330 vs. base Toast 312.",
        "body": "Inconsistent with the base Toast's fixed width. A single consolidated component picks one width (recommend 312, matching the rest of the family).",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on consolidation — there should be no separate Code Connect entry; the action slot maps to the base Toast's <code>action</code> parameter.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate into the base Toast.",
        "body": "Remove Toast - With Button from the family. Base Toast picks up two new optional slots: <code>supportingText?: String</code> (the 10/15 BarkAda second line) and <code>action?: EBToastAction</code> (label + callback, with optional loading and disabled states). One component, covers every use case today and the ones this sibling misses (actionable error, actionable with icon).",
        "tag": "Family"
      },
      {
        "headline": "Migrate the action surface to Button - XSmall.",
        "body": "The embedded Button - Small/XS is marked deprecated in Figma. Rebind the action instance to the canonical Button - XSmall before the deprecated source is deleted — otherwise every variant breaks.",
        "tag": "Composition"
      },
      {
        "headline": "Replace <code>description=yes|no</code> with a supporting-text slot.",
        "body": "Promote the second text line to an optional content slot. The padding and gap changes follow from the slot being populated — no duplicate variants required.",
        "tag": "Slot"
      },
      {
        "headline": "Normalize width to 312.",
        "body": "Match the base Toast. One width across the family.",
        "tag": "Property"
      },
      {
        "headline": "Define the action's state contract.",
        "body": "Spec pressed / disabled / loading states on the action slot so \"Retry\" and \"Undo\" flows can reflect processing state.",
        "tag": "State"
      },
      {
        "headline": "Resolve the whole-container tap conflict.",
        "body": "Decide: either the toast is dismiss-on-tap (drop the action as the only interactive surface), or the action owns the only tappable region. Pick one and drop the root <code>&lt;button&gt;</code> wrapper from the other variants.",
        "tag": "State"
      },
      {
        "headline": "Document auto-dismiss suppression when an action is present.",
        "body": "A toast with an action stays visible until the user taps the action or explicitly dismisses. Call this out as a usage note.",
        "tag": "Docs"
      },
      {
        "headline": "Document the A11y announcement mapping.",
        "body": "Action label feeds <code>accessibilityLabel</code> (iOS) / <code>contentDescription</code> (Android). Live region polite for neutral, assertive if consolidated into a destructive Toast.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-—-with-description",
        "title": "Default — with description",
        "node": "813:31117",
        "description": "The two-line dark toast. Label (14 px bold) above supporting text (10 px BarkAda Medium, 80% white), action button right-aligned and bottom-aligned. Used for reversible success moments that need more context — \"Transfer sent · to Juan Dela Cruz\".",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-with-button-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "default",
                "mono": true
              },
              {
                "key": "Description",
                "value": "yes",
                "mono": true
              },
              {
                "key": "Action",
                "value": "Button - Small/XS (deprecated)",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Default bg",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Default bg token",
                "value": "toast/color/default/bg",
                "mono": true
              },
              {
                "key": "Default label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Default label token",
                "value": "toast/color/default/label",
                "mono": true
              },
              {
                "key": "Default desc",
                "value": "#F6F9FDCC (80% alpha)",
                "mono": true
              },
              {
                "key": "Default desc token",
                "value": "toast/color/default/description",
                "mono": true
              },
              {
                "key": "Default border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Default border token",
                "value": "toast/color/default/border",
                "mono": true
              },
              {
                "key": "Light bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Light bg token",
                "value": "toast/color/light/bg",
                "mono": true
              },
              {
                "key": "Light label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Light label token",
                "value": "toast/color/light/label",
                "mono": true
              },
              {
                "key": "Light desc",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Light desc token",
                "value": "toast/color/light/description",
                "mono": true
              },
              {
                "key": "Button label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Button label token",
                "value": "comp/button v1/default/label",
                "mono": true
              },
              {
                "key": "Button bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Button bg token",
                "value": "comp/button v1/default/background-primary",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "330",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16",
                "mono": true
              },
              {
                "key": "Padding V (description=yes)",
                "value": "12",
                "mono": true
              },
              {
                "key": "Padding V (description=no)",
                "value": "8",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "8",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1 solid token",
                "mono": true
              },
              {
                "key": "Gap (text ↔ button)",
                "value": "24",
                "mono": true
              },
              {
                "key": "Gap (label ↔ description)",
                "value": "4",
                "mono": true
              },
              {
                "key": "Button height",
                "value": "24",
                "mono": true
              },
              {
                "key": "Button padding",
                "value": "16 × 8/7",
                "mono": true
              },
              {
                "key": "Button radius",
                "value": "99 (pill)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Multi-line Label/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Label size",
                "value": "14 / 16 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Default/Small Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Medium",
                "mono": true
              },
              {
                "key": "Description size",
                "value": "10 / 15 · +0",
                "mono": true
              },
              {
                "key": "Button label style",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Button font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Button size",
                "value": "14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Removed from favorites\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tap undo to revert\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Undo\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    message <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Removed from favorites\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tap undo to revert\"</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Undo\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "light-—-with-description",
        "title": "Light — with description",
        "node": "27:53213",
        "description": "Same two-line layout, inverted surface. White bg, navy label, slate supporting text, blue-on-white action button. Used on dark backgrounds or when the surrounding screen is already high-contrast.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-with-button-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Theme",
                "value": "Light",
                "mono": true
              },
              {
                "key": "Has description",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/toast/light/bg",
                "mono": true
              },
              {
                "key": "Label color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/toast/light/label",
                "mono": true
              },
              {
                "key": "Description color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Description color token",
                "value": "main/toast/light/description",
                "mono": true
              },
              {
                "key": "Action color",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Action color token",
                "value": "main/toast/light/action",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "343 (fill, 16 inset)",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "88",
                "mono": true
              },
              {
                "key": "Padding (h)",
                "value": "16",
                "mono": true
              },
              {
                "key": "Padding (v)",
                "value": "12",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "8",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Body/Large",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Body/Small",
                "mono": true
              },
              {
                "key": "Action style",
                "value": "Body/Medium · Bold",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Bills paid\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Receipt was sent to your email.\"</span><span class=\"syn-punc\">,</span>\n    appearance<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>light<span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>init<span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"View\"</span><span class=\"syn-punc\">, </span>handler<span class=\"syn-punc\">: </span><span class=\"syn-punc\">{ }))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Bills paid\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Receipt was sent to your email.\"</span><span class=\"syn-punc\">,</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastAppearance</span><span class=\"syn-punc\">.</span>Light<span class=\"syn-punc\">,</span>\n    actionLabel <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"View\"</span><span class=\"syn-punc\">,</span>\n    onAction <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "default-—-no-description",
        "title": "Default — no description",
        "node": "813:31125",
        "description": "The compact single-line toast with action. 8 px vertical padding, label only. Used for short reversible actions — \"Copied · Undo\".",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-with-button-spec-3\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Theme",
                "value": "Dark",
                "mono": true
              },
              {
                "key": "Has description",
                "value": "No",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/toast/dark/bg",
                "mono": true
              },
              {
                "key": "Label color",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/toast/dark/label",
                "mono": true
              },
              {
                "key": "Action color",
                "value": "#9BC5FD",
                "mono": true
              },
              {
                "key": "Action color token",
                "value": "main/toast/dark/action",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "343 (fill, 16 inset)",
                "mono": true
              },
              {
                "key": "Min height",
                "value": "64",
                "mono": true
              },
              {
                "key": "Padding (h)",
                "value": "16",
                "mono": true
              },
              {
                "key": "Padding (v)",
                "value": "12",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "8",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Body/Large",
                "mono": true
              },
              {
                "key": "Action style",
                "value": "Body/Medium · Bold",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Bills paid\"</span><span class=\"syn-punc\">,</span>\n    appearance<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>dark<span class=\"syn-punc\">,</span>\n    action<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>init<span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"View\"</span><span class=\"syn-punc\">, </span>handler<span class=\"syn-punc\">: </span><span class=\"syn-punc\">{ }))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Bills paid\"</span><span class=\"syn-punc\">,</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastAppearance</span><span class=\"syn-punc\">.</span>Dark<span class=\"syn-punc\">,</span>\n    actionLabel <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"View\"</span><span class=\"syn-punc\">,</span>\n    onAction <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "light-—-no-description",
        "title": "Light — no description",
        "node": "27:53225",
        "description": "The compact light-surface toast. Single-line label, blue action button, white bg.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toast-with-button-spec-4\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "light",
                "mono": true
              },
              {
                "key": "Description",
                "value": "no",
                "mono": true
              },
              {
                "key": "Root element",
                "value": "&lt;div&gt;",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Light bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Light bg token",
                "value": "toast/color/light/bg",
                "mono": true
              },
              {
                "key": "Light label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Light label token",
                "value": "toast/color/light/label",
                "mono": true
              },
              {
                "key": "Light border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Light border token",
                "value": "toast/color/light/border",
                "mono": true
              },
              {
                "key": "Button label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Button label token",
                "value": "comp/button v1/default/label",
                "mono": true
              },
              {
                "key": "Button bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Button bg token",
                "value": "comp/button v1/default/background-primary",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Padding",
                "value": "16 horizontal · 12 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-3 (8px)",
                "mono": true
              },
              {
                "key": "Button",
                "value": "Tertiary inline",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Multi-line Label/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Label size",
                "value": "14 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Saved\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.light</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"View\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToast</span><span class=\"syn-punc\">(</span>\n    message <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Saved\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Light</span><span class=\"syn-punc\">,</span>\n    action <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBToastAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"View\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
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
