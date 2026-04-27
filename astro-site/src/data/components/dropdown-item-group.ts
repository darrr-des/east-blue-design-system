import type { ComponentData } from '../types';

export const dropdownItemGroup: ComponentData = {
  "meta": {
    "slug": "dropdown-item-group",
    "name": "Dropdown Item Group",
    "node": "6383:3446",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=6383-3446",
    "description": "The popover surface that opens when a Dropdown is tapped — a stack of Dropdown Items in a rounded card with a drop shadow.",
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
    "navGroup": "Dropdown"
  },
  "overview": {
    "inContextNote": "The group appears immediately below a Dropdown trigger in the expanded state. On native platforms it is rendered by the OS menu primitive, not drawn manually.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"140\" height=\"120\" viewBox=\"0 0 140 120\" fill=\"none\">\n          <rect x=\"16\" y=\"8\" width=\"108\" height=\"12\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"22\" y=\"12\" width=\"40\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".12\"></rect>\n          <path d=\"M110 13l2 3 2-3\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" opacity=\".25\"></path>\n          <rect x=\"16\" y=\"26\" width=\"108\" height=\"86\" rx=\"4\" fill=\"currentColor\" opacity=\".03\" stroke=\"currentColor\" stroke-width=\".6\" stroke-opacity=\".2\"></rect>\n          <line x1=\"20\" y1=\"40\" x2=\"120\" y2=\"40\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"54\" x2=\"120\" y2=\"54\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"68\" x2=\"120\" y2=\"68\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"82\" x2=\"120\" y2=\"82\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"96\" x2=\"120\" y2=\"96\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <rect x=\"22\" y=\"31\" width=\"50\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"45\" width=\"60\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"59\" width=\"46\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"73\" width=\"54\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"87\" width=\"58\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"101\" width=\"48\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dig-demo-preview\"><svg width=\"366\" height=\"408\" viewBox=\"0 0 366 408\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"digShadow\" x=\"-8\" y=\"-4\" width=\"382\" height=\"424\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><rect x=\"2\" y=\"2\" width=\"362\" height=\"400\" rx=\"6\" fill=\"#FFFFFF\" filter=\"url(#digShadow)\"></rect><text x=\"14\" y=\"32\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"52\" x2=\"364\" y2=\"52\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"82\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"102\" x2=\"364\" y2=\"102\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"132\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"152\" x2=\"364\" y2=\"152\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"182\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"202\" x2=\"364\" y2=\"202\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"232\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"252\" x2=\"364\" y2=\"252\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"282\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"302\" x2=\"364\" y2=\"302\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"332\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"352\" x2=\"364\" y2=\"352\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"382\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"402\" x2=\"364\" y2=\"402\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><span class=\"demo-panel-value\">(none)</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">item count</span><span class=\"demo-panel-value\">8 (fixed)</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">width</span><span class=\"demo-panel-value\">366px (fixed)</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Layout is hardcoded to 8 Dropdown Items with a fixed 366px width. No item count property, no content slot, no width-fills-container behavior. Consumers cannot reuse this for a 3-item menu or a 12-item menu without manually rebuilding the composition."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Carries its own bg, radius, and shadow tokens. But the last row is a detached frame named <code>Dropdown - Item</code> (node <code>6383:3442</code>) instead of a DropdownItem component instance — breaking the self-contained promise."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Seven rows are DropdownItem instances, the eighth is a detached duplicate frame. The component name uses a hyphenated \" - \" (<code>Dropdown Item - Group</code>) which doesn't match other DS naming (\"Avatar Group\", \"Button Group\")."
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Not a composable container. No slot, no <code>items</code> property, no variant axis. Cannot be nested inside Dropdown as an overlay — the Dropdown's <code>Expanded</code> variant draws its own list instead of referencing this group. Effectively a preview artifact, not a component."
      }
    ],
    "behavior": [
      {
        "state": "Default (open)",
        "ios": "yes",
        "android": "yes",
        "property": "—",
        "notes": "White bg, 6px radius, drop shadow. Rendered by <code>Menu</code> (iOS) / <code>DropdownMenu</code> (Android) automatically."
      },
      {
        "state": "Item hover/press",
        "ios": "yes",
        "android": "yes",
        "property": "—",
        "notes": "Handled by the per-item Dropdown Item component, not the group. Touch feedback is platform-native."
      },
      {
        "state": "Scroll",
        "ios": "yes",
        "android": "yes",
        "property": "—",
        "notes": "Native menus clip and scroll automatically when item count exceeds available height."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Last row is a detached frame, not a component instance.",
        "body": "The eighth row (node <code>6383:3442</code>, <code>Dropdown - Item</code>) is a hand-built frame with inline styles instead of a DropdownItem instance. Breaks the group's consistency and means any DropdownItem property change will not propagate to the last row.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No slot, no item count, no width parameter.",
        "body": "The group is a fixed layout of 8 rows at 366px. There is no <code>items</code> slot, no numeric count property, and no fill-container option. Consumers cannot build a 3-item menu or a wider menu without rebuilding it.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Component name uses irregular \" - \" separator.",
        "body": "<code>Dropdown Item - Group</code> doesn't match other DS group naming (<code>Avatar Group</code>, <code>Button Group</code>, <code>List</code>). Consider renaming to <code>Dropdown Menu</code> or folding under <code>Dropdown/Menu</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Popover surface does not exist as a separate native primitive.",
        "body": "Both SwiftUI (<code>Menu</code>) and Compose (<code>DropdownMenu</code>) handle the surface — shadow, radius, bg, positioning, clipping — automatically. Modeling it as a standalone Figma component creates a phantom that cannot be Code Connect-mapped 1:1.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Last row has a bottom border.",
        "body": "Every row in the group carries <code>border-b</code> including the final row, producing a redundant separator flush with the card's bottom edge. Should be removed on the last item or moved to a top-border-all-except-first pattern.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "If the component is kept, it has no parameters to map. If consolidated into Dropdown, it will not need its own mapping.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate into the <code>Dropdown</code> component's Expanded state.",
        "body": "The popover surface is not independently reusable — it always pairs with a Dropdown trigger. Remove this as a separate DS primitive and express the overlay via Dropdown's <code>type=Expanded</code> variant. Native <code>Menu</code>/<code>DropdownMenu</code> primitives render the surface automatically.",
        "tag": "Family"
      },
      {
        "headline": "Alternatively, convert to a Slot-based container.",
        "body": "If kept, replace the hardcoded 8 instances with a Figma Slot accepting any number of Dropdown Items. Rename to <code>Dropdown Menu</code>. Set width to fill-container so the parent trigger decides sizing.",
        "tag": "Slot"
      },
      {
        "headline": "Replace the detached last row with a DropdownItem instance.",
        "body": "Node <code>6383:3442</code> is a hand-built frame — swap it for a DropdownItem component instance so property changes propagate uniformly.",
        "tag": "Composition"
      },
      {
        "headline": "Remove the bottom border on the last item.",
        "body": "Use a <code>::not(:last-child)</code>-equivalent pattern (separator between rows, not after the final row) to avoid the double line against the card's bottom edge.",
        "tag": "Property"
      },
      {
        "headline": "Rename to <code>Dropdown Menu</code> (if kept).",
        "body": "\"Dropdown Item - Group\" reads as a group of items; \"Dropdown Menu\" matches the native primitive (<code>Menu</code> / <code>DropdownMenu</code>) and reads better in the component picker.",
        "tag": "Rename"
      },
      {
        "headline": "Document as an internal artifact, not a shipped component.",
        "body": "If the team keeps it purely for Figma layout previews, mark it <code>_internal</code> or move it to a Hidden page so it doesn't appear in the public component picker.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "dig-spec-default",
        "title": "Default",
        "node": "6383:3446",
        "description": "Rounded card surface containing a vertical stack of Dropdown Items. 6px corner radius, white background, 12px-blur drop shadow at 6px offset.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Item count",
                "value": "8 (fixed)",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "bg/color-bg-main",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "border/color-border-weak",
                "mono": true
              },
              {
                "key": "Shadow",
                "value": "depth 6/12",
                "mono": true
              },
              {
                "key": "Shadow token",
                "value": "app/shadow/shadow",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "328px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "8 vertical",
                "mono": true
              },
              {
                "key": "Item count",
                "value": "up to 8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Item style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Item font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>options<span class=\"syn-punc\">: </span>items<span class=\"syn-punc\">) {</span> item <span class=\"syn-kw\">in</span>\n    <span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>item.label<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBDropdownMenu</span><span class=\"syn-punc\">(</span>\n    items <span class=\"syn-eq\">=</span> items<span class=\"syn-punc\">,</span>\n    onItemSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"366\" height=\"408\" viewBox=\"0 0 366 408\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"digShadow\" x=\"-8\" y=\"-4\" width=\"382\" height=\"424\" filterUnits=\"userSpaceOnUse\"><feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-color=\"#020E22\" flood-opacity=\"0.16\"></feDropShadow></filter></defs><rect x=\"2\" y=\"2\" width=\"362\" height=\"400\" rx=\"6\" fill=\"#FFFFFF\" filter=\"url(#digShadow)\"></rect><text x=\"14\" y=\"32\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"52\" x2=\"364\" y2=\"52\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"82\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"102\" x2=\"364\" y2=\"102\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"132\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"152\" x2=\"364\" y2=\"152\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"182\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"202\" x2=\"364\" y2=\"202\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"232\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"252\" x2=\"364\" y2=\"252\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"282\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"302\" x2=\"364\" y2=\"302\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"332\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"352\" x2=\"364\" y2=\"352\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"382\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"2\" y1=\"402\" x2=\"364\" y2=\"402\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Display-only surface. The group itself only contributes bg, shadow, and row dividers — all per-item colors come from Dropdown Item.",
        "columns": [
          "VALUE"
        ],
        "rows": [
          {
            "role": "Surface bg",
            "token": "bg/color-bg-main",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Row divider",
            "token": "main/dropdown-item/color/default/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Shadow color",
            "token": "elevation/app/shadow/color-shadow",
            "values": [
              "#020E2229"
            ]
          },
          {
            "role": "Shadow border",
            "token": "elevation/app/shadow/color-border",
            "values": [
              "#FFFFFF00"
            ]
          },
          {
            "role": "Item label",
            "token": "main/dropdown-item/color/default/label",
            "values": [
              "#0A2757"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Width",
            "token": "366px (fixed)",
            "values": []
          },
          {
            "role": "Item count",
            "token": "8 (fixed)",
            "values": []
          },
          {
            "role": "Corner radius",
            "token": "6px",
            "values": []
          },
          {
            "role": "Item padding",
            "token": "16px vertical, 12px left, 16px right",
            "values": []
          },
          {
            "role": "Item gap",
            "token": "space-8 (0px effective)",
            "values": []
          },
          {
            "role": "Row divider",
            "token": "1px bottom border per row",
            "values": []
          },
          {
            "role": "Shadow offset",
            "token": "0 6px (x y)",
            "values": []
          },
          {
            "role": "Shadow blur",
            "token": "12px",
            "values": []
          },
          {
            "role": "Shadow spread",
            "token": "-8px",
            "values": []
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Tracking",
          "Line-height"
        ],
        "rows": [
          {
            "role": "Dropdown item label",
            "token": "Primary/Label/Light/Large",
            "values": [
              "Proxima Soft Semibold",
              "18px",
              "0.25px",
              "18px"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(no properties)",
          "swift": "Menu / View ZStack",
          "compose": "DropdownMenu"
        },
        {
          "figma": "Width 366px",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "Item count 8",
          "swift": "ForEach(items)",
          "compose": "items.forEach"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Dropdown/EBDropdownMenu.swift",
        "compose": "android/components/dropdown/EBDropdownMenu.kt"
      }
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Menu role",
        "ios": "Automatic via <code>Menu</code>",
        "android": "Automatic via <code>DropdownMenu</code> (<code>Role.DropdownList</code>)"
      },
      {
        "requirement": "Focus trap",
        "ios": "VoiceOver moves focus into the menu on open",
        "android": "TalkBack moves focus into the menu on open"
      },
      {
        "requirement": "Dismiss on outside tap",
        "ios": "Automatic",
        "android": "<code>onDismissRequest</code>"
      },
      {
        "requirement": "Max visible items",
        "ios": "Native scroll when exceeded",
        "android": "Native scroll when exceeded"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Render the menu surface through SwiftUI's Menu or Compose's DropdownMenu. Let the platform handle shadow, clipping, positioning, and keyboard dismissal.",
        "dontText": "Don't hand-draw a shadowed card and place items inside it. You'll reimplement focus management, scroll clipping, and accessibility semantics that the platform gives you for free."
      },
      {
        "doText": "Keep Dropdown Item as the per-row component. Use it inside the native menu's builder closure (SwiftUI) or inside DropdownMenuItem's text slot (Compose).",
        "dontText": "Don't use this Figma component as a layout reference for production — the fixed 8-row, 366px-wide, detached-last-row structure won't match real menu content."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Fixed 8-item layout with no slot. Last row is a detached frame (<code>6383:3442</code>), not a DropdownItem instance. Component name uses irregular \" - \" separator."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No variant properties exist. Component name <code>Dropdown Item - Group</code> is irregular; prefer <code>Dropdown Menu</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, radius, spacing, and shadow values bound to tokens (<code>bg/color-bg-main</code>, <code>elevation/app/shadow/*</code>, <code>space/space-*</code>)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Popover surface is rendered by <code>Menu</code> / <code>DropdownMenu</code> natively. No 1:1 component to map to."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface has no interactive states of its own. Per-item states live on Dropdown Item."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No icons or raster assets. Pure layout + shadow."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No native component to map to. Consolidate into Dropdown instead."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No properties exist on the component."
      },
      {
        "aspect": "Slot coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No items slot — blocks any meaningful mapping."
      },
      {
        "aspect": "Native component file",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Handled by <code>Menu</code>/<code>DropdownMenu</code>. No dedicated EB component required."
      },
      {
        "aspect": "Recommendation",
        "status": "empty",
        "statusLabel": "Consolidate",
        "notes": "Fold into Dropdown's Expanded variant or convert to a slot-based Dropdown Menu before mapping."
      }
    ],
    "variants": {
      "total": 1,
      "description": "Single variant, no property axes.",
      "columns": [
        "Variant",
        "Width",
        "Item Count",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "366px",
            "8 (7 instances + 1 detached frame)",
            "6383:3446"
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
      "header": "Initial Assessment · node 6383:3446",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — Single variant, 8-item fixed layout at 366px. Rounded 6px card, white bg, 6px/12px drop shadow. All tokens bound (bg, radius, shadow, space).\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Last row is a detached frame</strong> — Node <code>6383:3442</code> is a hand-built <code>Dropdown - Item</code> frame instead of a DropdownItem component instance. Breaks consistency.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>No slot, no item count, no fill-container width</strong> — Layout is hardcoded to 8 rows at 366px. Cannot be reused for menus of different sizes.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Irregular component name</strong> — \"Dropdown Item - Group\" uses a \" - \" separator inconsistent with other DS group names. Recommend rename to \"Dropdown Menu\".\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Popover surface not a native primitive</strong> — Both <code>Menu</code> (iOS) and <code>DropdownMenu</code> (Compose) draw the shadowed card automatically. This component has no 1:1 native mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect not registered</strong> — No properties to map. Consolidate into Dropdown before mapping.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
