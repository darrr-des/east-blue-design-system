import type { ComponentData } from '../types';

export const dropdownItemGroup: ComponentData = {
  "meta": {
    "slug": "dropdown-item-group",
    "name": "Select Group",
    "node": "25783:1255",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=25783-1255",
    "description": "The menu surface that opens when a Select is tapped — a rounded card wrapping a Figma Slot of Select Items. 9 variants across <code>Border Type</code> (Middle Inset / Full Width / None) × <code>Density</code> (Compact / Default / Comfortable).",
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
    "navGroup": "Dropdown",
    "verdict": {
      "kind": "fix",
      "title": "Rebuilt as a real container — cleanup remains",
      "text": "The v2.0 rebuild turned a hardcoded preview artifact into a genuine Slot-based container: every variant wraps a Figma <code>SLOT</code>, the detached last row is now a real instance, dividers are separate nodes (so no stray bottom border), and it's consumed by Select. The <strong>Consolidate</strong> verdict is withdrawn — it earns its place as a component. Remaining work is cleanup: a <code>MIddle Inset</code> typo, a vestigial <code>Dropdown Item - Last</code> name, hidden 366px leftovers, and a Scrollbar frame native renders itself."
    }
  },
  "overview": {
    "inContextNote": "The group appears immediately below a Dropdown trigger in the expanded state. On native platforms it is rendered by the OS menu primitive, not drawn manually.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"140\" height=\"120\" viewBox=\"0 0 140 120\" fill=\"none\">\n          <rect x=\"16\" y=\"8\" width=\"108\" height=\"12\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"22\" y=\"12\" width=\"40\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".12\"></rect>\n          <path d=\"M110 13l2 3 2-3\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" opacity=\".25\"></path>\n          <rect x=\"16\" y=\"26\" width=\"108\" height=\"86\" rx=\"4\" fill=\"currentColor\" opacity=\".03\" stroke=\"currentColor\" stroke-width=\".6\" stroke-opacity=\".2\"></rect>\n          <line x1=\"20\" y1=\"40\" x2=\"120\" y2=\"40\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"54\" x2=\"120\" y2=\"54\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"68\" x2=\"120\" y2=\"68\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"82\" x2=\"120\" y2=\"82\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <line x1=\"20\" y1=\"96\" x2=\"120\" y2=\"96\" stroke=\"currentColor\" stroke-width=\".4\" opacity=\".15\"></line>\n          <rect x=\"22\" y=\"31\" width=\"50\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"45\" width=\"60\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"59\" width=\"46\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"73\" width=\"54\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"87\" width=\"58\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"22\" y=\"101\" width=\"48\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dig-demo-preview\"><div style=\"display:inline-block;border-radius:6px;box-shadow:0 6px 12px -8px rgba(2,14,34,.16);background:#FFFFFF;\"><svg width=\"366\" height=\"400\" viewBox=\"0 0 366 400\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;border-radius:6px;\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"399\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><text x=\"14\" y=\"30\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"50\" x2=\"366\" y2=\"50\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"80\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"100\" x2=\"366\" y2=\"100\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"130\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"150\" x2=\"366\" y2=\"150\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"180\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"200\" x2=\"366\" y2=\"200\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"230\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"250\" x2=\"366\" y2=\"250\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"280\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"300\" x2=\"366\" y2=\"300\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"330\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"350\" x2=\"366\" y2=\"350\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"380\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><span class=\"demo-panel-value\">(none)</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">item count</span><span class=\"demo-panel-value\">8 (fixed)</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">width</span><span class=\"demo-panel-value\">366px (fixed)</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A real Figma <code>SLOT</code> now wraps the content, so consumers can drop in any number of Select Items rather than rebuilding the composition. Fill behaviour works — nested in Select the instance resizes to the 366px trigger and the Slot, items, and dividers all fill with it."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own background, radius, border, and divider scaffolding across three densities. The detached last row is gone — every row is now a real Select Item instance, so item changes propagate."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Named <code>Select Group</code>, matching Avatar Group / Button Group — the irregular <code>\" - \"</code> separator is gone. <code>Border Type</code> values are spelled correctly (Middle Inset / Full Width / None), and the terminal row reads <code>Select Item - Last</code>, where the <code>- Last</code> suffix is a deliberate semantic marker rather than a leftover."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Now a genuine container — every variant exposes a Figma <code>SLOT</code>, and Select nests it as an instance alongside Select Field rather than drawing its own list. Maps to a <code>@ViewBuilder</code> / <code>@Composable</code> content slot."
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
    "resolved": [
      {
        "body": "v2.0: Rebuilt as a real Slot-based container — every variant now wraps a Figma <code>SLOT</code>, so consumers can compose any number of Select Items instead of rebuilding the stack. The <strong>Consolidate</strong> verdict is withdrawn: it is a genuine component, not a preview artifact. (C1)"
      },
      {
        "body": "v2.0: Detached last row replaced with a real instance — the hand-built <code>Dropdown - Item</code> frame (node <code>6383:3442</code>) is gone. Every row is now a Select Item instance, so item changes propagate. (C1)"
      },
      {
        "body": "v2.0: Redundant bottom border removed — dividers are now separate <code>Horizontal / Divider</code> nodes placed <em>between</em> rows, so the last row carries none. <code>Border Type=None</code> drops them entirely. (C1)"
      },
      {
        "body": "v2.0: Renamed <code>Dropdown Item - Group</code> → <code>Select Group</code>, matching Avatar Group / Button Group. The irregular <code>\" - \"</code> separator is gone. (C2)"
      },
      {
        "body": "v2.0: Now genuinely composed — Select nests this as an instance alongside Select Field rather than drawing its own list. The popover surface is a real container mapping to a native content slot, which answers the earlier C4 concern that it was a phantom. (C4)"
      },
      {
        "body": "v2.0: Divider treatment promoted to a property — <code>Border Type</code> (Middle Inset / Full Width / None) × <code>Density</code> (Compact / Default / Comfortable) gives 9 variants where the old component had one hardcoded layout. (C2)"
      },
      {
        "body": "v2.0: The stacked 366px <code>Select Item</code> / <code>Horizontal / Divider</code> instances and the <code>Label</code> inside the Slot are <strong>intentional</strong>, not leftovers — reviewed and confirmed. They sit inside the Slot as scroll-overflow content and are not dead layers. (C1)"
      },
      {
        "body": "v2.0: The <code>Scrollbar</code> frame is <strong>intentional</strong> — reviewed and confirmed. It documents the menu's scroll affordance in the design. Handoff note: SwiftUI and Compose render scroll indicators inside their own scroll containers, so developers should rely on the native indicator rather than rebuilding this layer. (C4)"
      },
      {
        "body": "v2.0: Fill-container width verified working — the standalone component sits at 320px, but nested in Select the instance resizes to 366px and the Slot, every Select Item, and every divider fill with it. The Scrollbar stays right-aligned to the card edge. No fixed-width bug; the 320px is just the component's canvas size. (C1)"
      },
      {
        "body": "v2.0: <code>Border Type=MIddle Inset</code> typo fixed — the value now reads <code>Middle Inset</code> across all 9 variants, so the generated type no longer carries the capital-I misspelling. (C2)"
      },
      {
        "body": "v2.0: Last row renamed <code>Dropdown Item - Last</code> → <code>Select Item - Last</code> — the vestigial <code>Dropdown</code> prefix from the old architecture is gone. The <code>- Last</code> suffix is <strong>intentional</strong>, marking the terminal row. (C1)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Unblocked by the Slot rebuild — the container now has a real native counterpart rather than being a preview artifact. Not yet wired, and still waiting on the native library to exist.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBSelectGroup</code>.",
        "body": "With the Slot rebuild the container now has a genuine native counterpart — a menu surface wrapping a content slot. Wire <code>Border Type</code> and <code>Density</code> to the SwiftUI / Compose API once the native component exists.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Convert to a Slot-based container.",
        "body": "v2.0: Applied — every variant now wraps a real Figma <code>SLOT</code>, so consumers compose any number of Select Items instead of rebuilding the stack. This is what withdrew the <strong>Consolidate</strong> verdict.",
        "tag": "Slot"
      },
      {
        "headline": "Replace the detached last row with a real instance.",
        "body": "v2.0: Applied — the hand-built <code>Dropdown - Item</code> frame is gone; every row is a live Select Item instance, so item changes propagate.",
        "tag": "Composition"
      },
      {
        "headline": "Remove the bottom border on the last item.",
        "body": "v2.0: Applied — dividers are now separate <code>Horizontal / Divider</code> nodes placed between rows, so the last row carries none. <code>Border Type=None</code> drops them entirely.",
        "tag": "Property"
      },
      {
        "headline": "Rename to match DS group naming.",
        "body": "v2.0: Applied — <code>Dropdown Item - Group</code> → <code>Select Group</code>, matching Avatar Group / Button Group. The irregular <code>\" - \"</code> separator is gone.",
        "tag": "Rename"
      },
      {
        "headline": "Fix the <code>MIddle Inset</code> typo.",
        "body": "v2.0: Applied — the value now reads <code>Middle Inset</code> across all 9 variants, so the generated type no longer carries the capital-I misspelling.",
        "tag": "Rename"
      },
      {
        "headline": "Rename the last row off the old <code>Dropdown</code> prefix.",
        "body": "v2.0: Applied — the terminal row is now <code>Select Item - Last</code>. The vestigial <code>Dropdown</code> prefix is gone; the <code>- Last</code> suffix is retained deliberately as a semantic marker for the last row.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "dig-spec-default",
        "demoKey": "default",
        "title": "Default",
        "node": "6383:3446",
        "description": "Rounded card surface containing a vertical stack of Dropdown Items. 6px corner radius, white background, 12px-blur drop shadow at 6px offset.",
        // Intentionally static showcase — Figma has a single variant with no
        // property axes. Empty array marks that this was considered, not forgotten.
        demoControls: [],
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant",    "value": "Default" },
              { "key": "Item count", "value": "8 (fixed)" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF",       "token": "bg/color-bg-main" },
              { "key": "Border",  "value": "#E5EBF4",       "token": "border/color-border-weak" },
              { "key": "Shadow",  "value": "depth 6/12", "mono": true, "token": "app/shadow/shadow" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "328px",  "mono": true },
              { "key": "Border radius", "value": "6px",    "mono": true },
              { "key": "Padding",       "value": "8 vertical", "mono": true },
              { "key": "Item count",    "value": "up to 8", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Item style", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "Item font",  "value": "Proxima Soft Semibold · 14 / 14", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDropdown</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$selected<span class=\"syn-punc\">, </span>options<span class=\"syn-punc\">: </span>items<span class=\"syn-punc\">) {</span> item <span class=\"syn-kw\">in</span>\n    <span class=\"syn-type\">EBDropdownItem</span><span class=\"syn-punc\">(</span>item.label<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBDropdownMenu</span><span class=\"syn-punc\">(</span>\n    items <span class=\"syn-eq\">=</span> items<span class=\"syn-punc\">,</span>\n    onItemSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div style=\"display:inline-block;border-radius:6px;box-shadow:0 6px 12px -8px rgba(2,14,34,.16);background:#FFFFFF;\"><svg width=\"366\" height=\"400\" viewBox=\"0 0 366 400\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;border-radius:6px;\"><rect x=\"0.5\" y=\"0.5\" width=\"365\" height=\"399\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><text x=\"14\" y=\"30\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"50\" x2=\"366\" y2=\"50\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"80\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"100\" x2=\"366\" y2=\"100\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"130\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"150\" x2=\"366\" y2=\"150\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"180\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"200\" x2=\"366\" y2=\"200\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"230\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"250\" x2=\"366\" y2=\"250\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"280\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"300\" x2=\"366\" y2=\"300\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"330\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text><line x1=\"0\" y1=\"350\" x2=\"366\" y2=\"350\" stroke=\"#E5EBF4\" stroke-width=\"1\"></line><text x=\"14\" y=\"380\" font-family=\"'Proxima Soft', system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\">Dropdown Item</text></svg></div>"
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