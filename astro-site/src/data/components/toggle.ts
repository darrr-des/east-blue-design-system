import type { ComponentData } from '../types';

export const toggle: ComponentData = {
  "meta": {
    "slug": "toggle",
    "name": "Toggle",
    "node": "18482:36508",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-36508",
    "description": "A binary switch control with on, off, and disabled states.",
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
    "navGroup": "Toggle",
    "verdict": {
      "kind": "fix",
      "title": "Fix — normalize to the Selection Control schema",
      "text": "Rename <code>isActive</code> → <code>isSelected</code>, change <code>Yes/No</code> values to <code>true/false</code>, expand states from 2 → 5 (Default, Pressed, Focused, Disabled, Error), add Small/Medium/Large sizes. Once normalized, Toggle sits alongside Checkbox and Radio Button under one shared schema and maps cleanly to native <code>Toggle</code> / <code>Switch</code>."
    }
  },
  "overview": {
    "inContextNote": "Toggle appears in settings rows, form opt-ins, and any control that flips a single boolean. Usually paired with a label (see Toggle - With Label).",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toggle-demo-preview\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--interactive\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\" onclick=\"_toggleFlip()\" onkeydown=\"if(event.key===' '||event.key==='Enter'){event.preventDefault();_toggleFlip();}\"><span class=\"eb-preview-toggle__knob\"></span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (today)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isActive</span><select id=\"toggle-ctrl-selected\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"true\" selected=\"\">Yes</option><option value=\"false\">No</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"toggle-ctrl-state\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Proposed (post-normalization)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select id=\"toggle-ctrl-size\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"small\">small</option><option value=\"medium\" selected=\"\">medium</option><option value=\"large\">large</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic on/off switch usable anywhere a boolean needs a visual control."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its track, knob, colors, and shadow tokens."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>isActive</code> + <code>Yes/No</code> breaks the DS convention set by Checkbox (<code>isSelected</code> + <code>true/false</code>). Selection controls should share one schema."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Drops into rows and forms fine, but Toggle - With Label is a frame not a component, limiting composition into list items and labeled form rows."
      }
    ],
    "behavior": [
      {
        "state": "Default · Off",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isActive=No",
        "notes": "Gray track, knob left."
      },
      {
        "state": "Default · On",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default, isActive=Yes",
        "notes": "Brand track, knob right."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Need darker track + scaled knob — critical feedback for tap."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "2px focus ring for keyboard / switch-control users."
      },
      {
        "state": "Disabled · Off / On",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted track/knob, tap blocked."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Needed when required toggle (e.g. \"accept terms\") is unset on submit."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Property schema diverges from Checkbox.",
        "body": "Rename <code>isActive</code> → <code>isSelected</code>, change values <code>Yes/No</code> → <code>true/false</code>. Selection controls should share one schema.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Missing interaction states.",
        "body": "Only Default + Disabled built. Add Pressed, Focused, Error to match Checkbox's 5-state model.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Missing size axis.",
        "body": "No Small/Medium/Large. Add to match Checkbox + Radio Button.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Blocked until schema normalizes.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Normalize to the Selection Control schema.",
        "body": "Bring Toggle in line with Checkbox and Radio Button so all three share one property language: <code>isSelected: true | false</code> (from <code>isActive: Yes | No</code>) × <code>State: Default | Pressed | Focused | Disabled | Error</code> (up from Default/Disabled only) × <code>Size: Small | Medium | Large</code> (new axis). Variant count grows from 4 → 30, all covered by a clean 2 × 5 × 3 matrix.",
        "tag": "Property"
      },
      {
        "headline": "Promote Toggle - With Label to a proper component",
        "body": "with <code>label</code>, optional <code>description</code>, optional <code>helper</code>/<code>error</code> text, <code>required</code> marker, and <code>placement = leading | trailing</code>. See <a href=\"#\" onclick=\"showPanelById('toggle-with-label');return false;\">Toggle - With Label</a>.",
        "tag": "Composition"
      },
      {
        "headline": "Consider a Loading state",
        "body": "for async toggles (settings that sync to the server). Shows a spinner on the knob while the request is in flight — common in Material 3 and iOS 17.",
        "tag": "State"
      },
      {
        "headline": "Document the ARIA role.",
        "body": "Natively, Toggle maps to the <code>switch</code> role with <code>aria-checked = true | false</code>. Screen readers say \"on/off\" instead of \"checked/unchecked\" — the correct affordance for a settings toggle.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-·-off",
        "title": "Default · Off",
        "node": "18482:36509",
        "description": "The \"off\" resting state. Gray track, white knob pinned left.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "mono": true
              },
              {
                "key": "isActive",
                "value": "No",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Inactive track",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Inactive track token",
                "value": "toggle/color/default/inactive/bg-track",
                "mono": true
              },
              {
                "key": "Inactive indicator",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Inactive indicator token",
                "value": "toggle/color/default/inactive/bg-indicator",
                "mono": true
              },
              {
                "key": "Active track",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active track token",
                "value": "toggle/color/default/active/bg-track",
                "mono": true
              },
              {
                "key": "Active indicator",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Active indicator token",
                "value": "toggle/color/default/active/bg-indicator",
                "mono": true
              },
              {
                "key": "Disabled inactive track",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Disabled inactive track token",
                "value": "toggle/color/disabled/inactive/bg-track",
                "mono": true
              },
              {
                "key": "Disabled active track",
                "value": "#9BC5FD",
                "mono": true
              },
              {
                "key": "Disabled active track token",
                "value": "toggle/color/disabled/active/bg-track",
                "mono": true
              },
              {
                "key": "Disabled indicator",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Disabled indicator token",
                "value": "toggle/color/disabled/inactive/bg-indicator",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Track size",
                "value": "48 × 24",
                "mono": true
              },
              {
                "key": "Knob size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Knob inset",
                "value": "2",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12 (pill)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$enabled<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "default-·-on",
        "title": "Default · On",
        "node": "18482:36512",
        "description": "The \"on\" resting state. Brand-blue track, knob pinned right.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "mono": true
              },
              {
                "key": "isActive",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Active track",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active track token",
                "value": "toggle/color/default/active/bg-track",
                "mono": true
              },
              {
                "key": "Active indicator",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Active indicator token",
                "value": "toggle/color/default/active/bg-indicator",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Track size",
                "value": "48 × 24",
                "mono": true
              },
              {
                "key": "Knob size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Knob inset",
                "value": "2",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12 (pill)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>constant<span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "disabled-·-off",
        "title": "Disabled · Off",
        "node": "18482:36515",
        "description": "Disabled off state. Muted gray track; interaction blocked.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-3\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "State",
                "value": "Disabled",
                "mono": true
              },
              {
                "key": "isActive",
                "value": "No",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Disabled inactive track",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Disabled inactive track token",
                "value": "toggle/color/disabled/inactive/bg-track",
                "mono": true
              },
              {
                "key": "Disabled indicator",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Disabled indicator token",
                "value": "toggle/color/disabled/inactive/bg-indicator",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Track size",
                "value": "48 × 24",
                "mono": true
              },
              {
                "key": "Knob size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Knob inset",
                "value": "2",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12 (pill)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>constant<span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">))</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span><span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "disabled-·-on",
        "title": "Disabled · On",
        "node": "18482:36518",
        "description": "Disabled on state. Muted brand-blue track; interaction blocked.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-spec-4\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "State",
                "value": "Disabled",
                "mono": true
              },
              {
                "key": "isActive",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Disabled active track",
                "value": "#9BC5FD",
                "mono": true
              },
              {
                "key": "Disabled active track token",
                "value": "toggle/color/disabled/active/bg-track",
                "mono": true
              },
              {
                "key": "Disabled indicator",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Disabled indicator token",
                "value": "toggle/color/disabled/inactive/bg-indicator",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Track size",
                "value": "48 × 24",
                "mono": true
              },
              {
                "key": "Knob size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Knob inset",
                "value": "2",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12 (pill)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>constant<span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">))</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
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
          "figma": "<code>isActive: Yes | No</code>",
          "swift": "<code>isSelected: true | false</code>",
          "compose": "<code>@Binding var isOn: Bool</code>"
        },
        {
          "figma": "<code>State: Default | Disabled</code>",
          "swift": "<code>State: Default | Pressed | Focused | Disabled | Error</code>",
          "compose": "Modifier: <code>.disabled(true)</code>, <code>.ebState(.error)</code>"
        },
        {
          "figma": "(no size axis)",
          "swift": "<code>Size: Small | Medium | Large</code>",
          "compose": "<code>.controlSize(.small / .regular / .large)</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Switch role",
        "ios": "SwiftUI <code>Toggle</code> automatically applies the <em>switch</em> accessibility trait — VoiceOver says \"on/off\", not \"checked/unchecked\".",
        "android": "Material <code>Switch</code> applies <code>Role.Switch</code> semantics automatically."
      },
      {
        "requirement": "Touch target",
        "ios": "Minimum 44 × 44pt (pad the container — the 48×24 track alone is too small).",
        "android": "Minimum 48 × 48dp."
      },
      {
        "requirement": "State announcement",
        "ios": "VoiceOver announces \"On\" / \"Off\" as the value.",
        "android": "TalkBack announces \"On\" / \"Off\" as the state description."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> blocks interaction; VoiceOver announces \"dimmed\".",
        "android": "<code>enabled = false</code> blocks click; TalkBack announces \"disabled\"."
      },
      {
        "requirement": "Focus (external keyboard / switch control)",
        "ios": "iPad keyboards and Switch Control need a visible focus ring — must be added as part of the Focused state.",
        "android": "D-pad / keyboard focus indicator — must be added as part of the Focused state."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Track/knob layers cleanly named."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>isActive</code> → <code>isSelected</code>, values <code>Yes/No</code> → <code>true/false</code>; add Size axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Track + knob + shadow bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps 1:1 to SwiftUI <code>Toggle</code> / Material <code>Switch</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing Pressed, Focused, Error. Need full 5-state model."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until schema normalizes."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>State</code> × <code>isActive</code> = <strong>4 variants</strong> today. Proposed: <code>isSelected</code> × <code>State</code> × <code>Size</code> = <strong>30 variants</strong>.",
      "columns": [
        "#",
        "Node",
        "State",
        "isActive",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18482:36509</code>",
            "Default",
            "No",
            "48 × 24"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18482:36512</code>",
            "Default",
            "Yes",
            "48 × 24"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18482:36515</code>",
            "Disabled",
            "No",
            "48 × 24"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18482:36518</code>",
            "Disabled",
            "Yes",
            "48 × 24"
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
      "header": "Initial Assessment · node 18482:36508",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Normalize to the shared Selection Control schema alongside Checkbox and Radio Button. <span class=\"tag-open tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C2 — Property naming</strong> — Rename <code>isActive</code> → <code>isSelected</code>; change values <code>Yes/No</code> → <code>true/false</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — States</strong> — Add Pressed, Focused, Error states. Add Small/Medium/Large size axis. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until schema normalizes. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
