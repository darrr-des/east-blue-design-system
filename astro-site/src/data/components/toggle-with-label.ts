import type { ComponentData } from '../types';

export const toggleWithLabel: ComponentData = {
  "meta": {
    "slug": "toggle-with-label",
    "name": "Toggle - With Label",
    "node": "18482:36538",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-36538",
    "description": "A toggle paired with a label and optional helper text in a single row.",
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
    "navGroup": "Toggle"
  },
  "overview": {
    "inContextNote": "Labeled toggle is the primary form of Toggle shown in product. Settings rows, feature opt-ins, biometric/notification preferences — nearly all consumer-facing toggles are labeled.",
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "Not reusable in its current form — consumers can't set the label, can't add description, helper, or required marker. They must detach and rebuild."
      },
      {
        "name": "Self-contained",
        "rating": "fail",
        "note": "No properties, no slots. Just a frame with a static Toggle + text."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Breaks the pattern established by Radio Button With Label (real component with label + description) and Labeled Field."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Child Toggle is an instance — at least the composition is correct. But the wrapper has no slot / property surface to expose."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Frame only",
        "notes": "Today: one static instance. Proposed: Toggle + label rendered in row."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Tapping label should also toggle — entire row is the tap target."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Label dims to secondary when toggle is disabled."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Required toggle + form submit shows error text below label."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Not a real component.",
        "body": "Layout frame with a Toggle + text, no properties or variants. Promote to a proper component.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No slots.",
        "body": "Cannot set label, add description, mark required, or show helper/error.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No placement option.",
        "body": "iOS Form convention is trailing toggle; Material 3 allows either. Need <code>placement = leading | trailing</code>.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No state coverage.",
        "body": "Pressed row, disabled label, error visual all missing.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Blocked until component exists.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Build as a real component",
        "body": "with property set: <code>label</code>, <code>description?</code>, <code>helper?</code>, <code>error?</code>, <code>required: boolean</code>, <code>placement = leading | trailing</code>. Inherit <code>isSelected</code>, <code>State</code>, <code>Size</code> from the inner Toggle via instance-swap.",
        "tag": "Composition"
      },
      {
        "headline": "Match Radio Button With Label's shape",
        "body": "for consistency — same label/description layout, same required marker, same error styling. Selection controls should read alike.",
        "tag": "Family"
      },
      {
        "headline": "Whole-row tap target.",
        "body": "Tapping the label or the description should toggle the switch — the entire row is the hit region. Matches iOS Form and Material 3 list-item behavior.",
        "tag": "State"
      },
      {
        "headline": "Consider a List Row wrapper",
        "body": "that adds full-width chrome (dividers, padding) for use inside Settings screens. Today this shape would be built ad-hoc per screen; a dedicated variant makes Settings screens trivially composable.",
        "tag": "Family"
      },
      {
        "headline": "See:",
        "body": "<a href=\"#\" onclick=\"showPanelById('toggle');return false;\">Toggle</a> for the base control, <a href=\"#\" onclick=\"showPanelById('radio-button-with-label');return false;\">Radio Button With Label</a> for the target shape.",
        "tag": "Family"
      }
    ],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toggle-with-label-demo-preview\"><div class=\"eb-preview eb-preview-setting-row\"><div class=\"eb-preview-setting-row__labels\"><div class=\"eb-preview-setting-row__label\"><span>Push notifications</span></div><div class=\"eb-preview-setting-row__desc\">Get alerts when money moves</div></div><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--interactive\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\" onclick=\"event.stopPropagation();_twlFlip();\" onkeydown=\"if(event.key===' '||event.key==='Enter'){event.preventDefault();_twlFlip();}\"><span class=\"eb-preview-toggle__knob\"></span></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"toggle-with-label-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Push notifications\" oninput=\"_toggleWithLabelUpdate()\" placeholder=\"Label text\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"toggle-with-label-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Get alerts when money moves\" oninput=\"_toggleWithLabelUpdate()\" placeholder=\"Optional — leave empty to hide\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select id=\"toggle-with-label-ctrl-selected\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"toggle-with-label-ctrl-state\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"disabled\">disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">placement</span><select id=\"toggle-with-label-ctrl-placement\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"trailing\" selected=\"\">trailing</option><option value=\"leading\">leading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">required</span><select id=\"toggle-with-label-ctrl-required\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">helper</span><select id=\"toggle-with-label-ctrl-helper\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"helper\">helper</option><option value=\"error\">error</option></select></div></div></div></div>"
  },
  "style": {
    "specCards": [
      {
        "cardKey": "today-—-single-frame",
        "title": "Today — single frame",
        "node": "18482:36538",
        "description": "A 180×24 layout frame: Toggle instance on the left of its auto-layout, \"Label\" text on the right. No property set, no variants — functionally identical to placing a Toggle + Text next to each other on a canvas.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-with-label-spec-today\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "None",
                "value": "No property set",
                "mono": false
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
              },
              {
                "key": "Label",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "text/color-text-weak",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "180 (fixed)",
                "mono": true
              },
              {
                "key": "Height",
                "value": "24",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "space/space-8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$enabled<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Allow notifications\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Allow notifications\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "proposed-—-trailing-placement-proposed",
        "title": "Proposed — trailing placement proposed",
        "node": "",
        "description": "Default arrangement: label stack on the left, toggle on the right. Matches iOS Form and Material 3 list-item patterns.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-with-label-spec-trailing\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Placement",
                "value": "Trailing",
                "mono": true
              },
              {
                "key": "Label",
                "value": "Receive notifications",
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
                "key": "Label color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/toggle-with-label/label",
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
                "key": "Indicator",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Indicator token",
                "value": "toggle/color/default/active/bg-indicator",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "40",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              },
              {
                "key": "Toggle size",
                "value": "48 × 24",
                "mono": true
              },
              {
                "key": "Knob size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Body/Medium",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft",
                "mono": true
              },
              {
                "key": "Size",
                "value": "14",
                "mono": true
              },
              {
                "key": "Line-height",
                "value": "20",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggleRow</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Receive notifications\"</span><span class=\"syn-punc\">,</span>\n    isOn<span class=\"syn-punc\">: </span><span class=\"syn-punc\">$enabled</span><span class=\"syn-punc\">,</span>\n    placement<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>trailing\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggleRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Receive notifications\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span><span class=\"syn-punc\">,</span>\n    placement <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTogglePlacement</span><span class=\"syn-punc\">.</span>Trailing\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "proposed-—-leading-placement-proposed",
        "title": "Proposed — leading placement proposed",
        "node": "",
        "description": "Inverse arrangement: toggle on the left, label stack on the right. Useful in inline form layouts where labels are right-heavy.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"toggle-with-label-spec-leading\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Proposed — leading placement proposed",
                "mono": false
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
                "key": "Indicator",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Indicator token",
                "value": "toggle/color/default/active/bg-indicator",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "text/color-text-weak",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Track size",
                "value": "40 × 24",
                "mono": true
              },
              {
                "key": "Indicator size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Gap (label ↔ toggle)",
                "value": "12px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 16 / 16",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$enabled<span class=\"syn-punc\">, </span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> enabled<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ enabled = it }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>label: String</code>",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "<code>description?: String</code>",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>isSelected: true | false</code>",
          "swift": "<code>@Binding var isOn: Bool</code>",
          "compose": "<code>checked: Boolean</code>"
        },
        {
          "figma": "<code>placement: leading | trailing</code>",
          "swift": "<code>placement: EBTogglePlacement</code>",
          "compose": "<code>placement: EBTogglePlacement</code>"
        },
        {
          "figma": "<code>required: boolean</code>",
          "swift": "<code>required: Bool</code>",
          "compose": "<code>required: Boolean</code>"
        },
        {
          "figma": "<code>helper?: String</code>",
          "swift": "<code>helper: String?</code>",
          "compose": "<code>helper: String?</code>"
        },
        {
          "figma": "<code>error?: String</code>",
          "swift": "<code>error: String?</code>",
          "compose": "<code>error: String?</code>"
        },
        {
          "figma": "<code>State</code> (inherited)",
          "swift": "<code>.disabled(true)</code> / <code>.ebState(.error)</code>",
          "compose": "<code>enabled</code> / <code>error</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Label ↔ Toggle link",
        "ios": "VoiceOver announces label + state in one utterance (\"Push notifications, on\").",
        "android": "TalkBack announces label + state in one utterance. Use <code>Modifier.toggleable</code> on the row."
      },
      {
        "requirement": "Whole row tappable",
        "ios": "Row wrapped in <code>Button</code> or <code>.onTapGesture</code> that toggles.",
        "android": "Row uses <code>Modifier.toggleable</code>, merging semantics."
      },
      {
        "requirement": "Description announced",
        "ios": "Combine label + description with <code>.accessibilityElement(children: .combine)</code>.",
        "android": "Merge descendants, description as <code>stateDescription</code> or second line."
      },
      {
        "requirement": "Required marker",
        "ios": "Announce \"required\" after the label.",
        "android": "Append \"required\" to <code>contentDescription</code>."
      },
      {
        "requirement": "Error",
        "ios": "Error text linked via <code>.accessibilityHint</code>; announce on state change.",
        "android": "Error text in <code>error</code> semantics; TalkBack reads on focus."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Not a component — just a layout frame. Promote to real component."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No properties. Add <code>label</code>, <code>description</code>, <code>placement</code>, <code>required</code>, <code>helper</code>, <code>error</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Label typography and color bound via Toggle + Text styles."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Cannot map a frame. Once built, maps to <code>Toggle</code> inside <code>LabeledContent</code> on iOS, <code>Row</code> with <code>Modifier.toggleable</code> on Compose."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Need Default, Pressed (row), Disabled, Error."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until component exists."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 1,
      "description": "Today: 1 layout frame. Proposed: placement (leading/trailing) × description (yes/no) × required (yes/no) × state (5) = <strong>40 variants</strong>. May simplify by treating required and description as runtime props rather than Figma variants.",
      "columns": [
        "#",
        "Node",
        "Dimensions",
        "Contents"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18482:36538</code>",
            "180 × 24",
            "Toggle instance + \"Label\" text · auto-layout row"
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
      "header": "Initial Assessment · node 18482:36538",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Not a real component. Promote to a proper component with label, description, helper/error, required marker, and leading/trailing placement. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>Family alignment</strong> — Match Radio Button With Label's shape. Inherit Toggle's <code>isSelected</code>, <code>State</code>, <code>Size</code> from the inner Toggle instance. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until component exists. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
