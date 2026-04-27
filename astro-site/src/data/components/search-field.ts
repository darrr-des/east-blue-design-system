import type { ComponentData } from '../types';

export const searchField: ComponentData = {
  "meta": {
    "slug": "search-field",
    "name": "Search Field",
    "node": "18577:14520",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-14520",
    "description": "A search input field with a leading magnifying-glass icon and an optional clear button.",
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
    "navGroup": "Form Elements"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <line x1=\"18\" y1=\"22\" x2=\"102\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></line>\n          <line x1=\"18\" y1=\"38\" x2=\"102\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></line>\n          <circle cx=\"26\" cy=\"30\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1\" fill=\"none\" opacity=\".35\"></circle>\n          <rect x=\"34\" y=\"29\" width=\"30\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".2\"></rect>\n          <rect x=\"20\" y=\"50\" width=\"80\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"20\" y=\"60\" width=\"60\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"srf-demo-preview\"><svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"></rect><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><g transform=\"translate(22,16)\" opacity=\"0.8\"><circle cx=\"10\" cy=\"10\" r=\"7\" stroke=\"#6780A9\" stroke-width=\"2\" fill=\"none\"></circle><line x1=\"15.5\" y1=\"15.5\" x2=\"20.5\" y2=\"20.5\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></line></g><text x=\"54\" y=\"32\" font-family=\"BarkAda, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" fill-opacity=\"0.5\">Search</text><circle cx=\"324\" cy=\"28\" r=\"12\" fill=\"#6780A9\"></circle></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" onchange=\"_srfDemo.state=this.value;updateSearchFieldDemo()\"><option value=\"default\">default</option><option value=\"filled\">filled</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Only usable when the surface tolerates a banded (top+bottom border) look. Won't compose into forms that use the standard rounded-rect field styling. No size variants, no dark mode."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Trailing <code>icon-container</code> holds an unresolved <code>Placeholder</code> wrapper with a raw <code>icon-placeholder</code> circle — consumers must instance-swap to get a usable clear/cancel affordance. Missing focused, error, and disabled tokens."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Variant axis is <code>state=default/filled</code> — conflates \"has content\" with the four interaction states used by every sibling field (Default/Active/Error/Disabled). Token namespace (<code>main/search/*</code>) isolates this from the shared <code>field/*</code> tokens other siblings rely on."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Trailing <code>icon-container</code> is a real slot and accepts a swap (<code>swapIcon</code>). Leading icon is not slotted — locked to the bundled search glyph (which is raster, not vector)."
      }
    ],
    "behavior": [
      {
        "state": "Default (empty)",
        "ios": "yes",
        "android": "yes",
        "property": "state=default",
        "notes": "Placeholder text at 50% opacity, trailing slot holds placeholder circle."
      },
      {
        "state": "Filled (has query)",
        "ios": "yes",
        "android": "yes",
        "property": "state=filled",
        "notes": "Text at full opacity (#0A2757), identical container, trailing slot unchanged."
      },
      {
        "state": "Focused",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "No visible focused variant. Native focus ring cannot be approximated from DS."
      },
      {
        "state": "Error",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "No error state defined."
      },
      {
        "state": "Disabled",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "No disabled state defined."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "State coverage is incomplete.",
        "body": "Only <code>default</code> and <code>filled</code> are shipped; focused, error, and disabled are absent. Native <code>TextField</code> / <code>SearchBar</code> expect all four interaction states for focus rings, validation, and disabled styling.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Leading search glyph is a raster asset.",
        "body": "The search icon renders via <code>&lt;img src={imgShapeFull}&gt;</code> (raster PNG) rather than a vector instance from the icon library. Blocks token-based recoloring and fails crisp rendering on high-density displays.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Trailing slot ships a <code>Placeholder</code> wrapper with a raw circle.",
        "body": "<code>icon-container</code> contains a <code>Placeholder</code> frame wrapping an <code>icon-placeholder</code> pink-circle shape. This is authoring scaffolding that should be replaced with a real clear/cancel icon (or removed) before the component leaves design.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>state</code> variant axis conflates content and interaction.",
        "body": "<code>state=default/filled</code> is a derived content signal (has a value or not) — it shouldn't occupy the same axis that other Form Elements reserve for Default/Active/Error/Disabled. Also fails Code Connect's expectation of boolean-like or enum-of-states schemas.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Banded border diverges from the Form Elements family.",
        "body": "Container uses <code>border-top + border-bottom</code> only, no left/right, <code>radius-0</code>. Every sibling (Input, Labeled, Select, Recipient, View Only) uses a full rounded-rect stroke at 6px radius. No native primitive renders this shape by default — forces custom background work on both platforms.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structural gaps (C1/C2/C5/C6) must be resolved before linking. No native file exists yet.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Compose from Input Field instead of shipping a parallel primitive.",
        "body": "Once Input Field gains <code>leadingIcon</code> / <code>trailingIcon</code> slots (already recommended in its assessment), a Search Field becomes Input Field + search glyph leading + clear-button trailing — no new component needed. Retires <code>main/search/*</code> tokens and inherits Default/Active/Error/Disabled for free.",
        "tag": "Composition"
      },
      {
        "headline": "Swap the raster <code>shape_full</code> for the canonical search icon instance.",
        "body": "Reference the same vector icon used elsewhere (24px Search Small) so it inherits <code>main/{component}/color/icon-leading</code> recoloring across modes.",
        "tag": "Asset"
      },
      {
        "headline": "Replace the trailing <code>Placeholder</code> wrapper with a real Clear (X) icon instance.",
        "body": "The current <code>Placeholder &gt; container &gt; icon-placeholder</code> path is authoring scaffolding. Bind to a 24px Close / Clear icon and expose it as an optional slot that hides when <code>state=default</code>.",
        "tag": "Slot"
      },
      {
        "headline": "Add Active, Error, and Disabled variants, and split content-filled from interaction state.",
        "body": "Adopt the sibling schema: <code>State = Default | Active | Error | Disabled</code> plus a boolean <code>isFilled = true/false</code>. That yields 8 variants and matches Input Field's axis model exactly.",
        "tag": "State"
      },
      {
        "headline": "Align the border treatment with the Form Elements family.",
        "body": "If Search Field remains a standalone component, switch to the shared 6px rounded-rect stroke — the banded top/bottom look is a screen-level pattern (section divider), not a field chrome treatment, and can be added by the surrounding layout.",
        "tag": "Family"
      },
      {
        "headline": "Rename the <code>main/search/color/default/*</code> namespace to match the new schema.",
        "body": "Either retire to <code>field/*</code> (if composed) or expand to <code>main/search/color/{default|active|error|disabled}/*</code> so tokens cover every state. Remove the <code>/default/</code> sub-mode once other states exist.",
        "tag": "Token"
      },
      {
        "headline": "Document search semantics for native handoff.",
        "body": "iOS uses <code>.searchable(text:)</code> on a container (it is not a standalone view); Android uses Material 3 <code>SearchBar</code> (which expands into full-screen search) or a <code>TextField</code> with a leading search icon. Document both paths and the Enter-to-submit / Escape-to-clear keyboard contract.",
        "tag": "Docs"
      },
      {
        "headline": "Add <code>role=\"search\"</code> / search semantics and a labeled clear button.",
        "body": "The clear-button slot needs its own accessibility label (\"Clear search\"). iOS VoiceOver and Android TalkBack must announce the field as a search input, not a generic text field.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "srf-spec-default",
        "title": "Default",
        "node": "50:78118",
        "description": "Empty state. Placeholder label at 50% opacity (#90A8D0), leading search glyph at 80% opacity.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Default",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/default/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">, </span>text<span class=\"syn-punc\">: </span>$query<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">,</span>\n    query <span class=\"syn-eq\">=</span> query<span class=\"syn-punc\">,</span>\n    onQueryChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"></rect><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><g transform=\"translate(22,16)\" opacity=\"0.8\"><circle cx=\"10\" cy=\"10\" r=\"7\" stroke=\"#6780A9\" stroke-width=\"2\" fill=\"none\"></circle><line x1=\"15.5\" y1=\"15.5\" x2=\"20.5\" y2=\"20.5\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></line></g><text x=\"54\" y=\"32\" font-family=\"BarkAda, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" fill-opacity=\"0.5\">Search</text><circle cx=\"324\" cy=\"28\" r=\"12\" fill=\"#6780A9\"></circle></svg>"
      },
      {
        "cardKey": "srf-spec-filled",
        "title": "Filled",
        "node": "50:78126",
        "description": "State shown when a query has been entered. Text uses #0A2757 at full opacity.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Filled",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "input-field/default/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Text",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Text token",
                "value": "input-field/default/text",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Placeholder token",
                "value": "input-field/default/placeholder",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">, </span>text<span class=\"syn-punc\">: </span>$query<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">,</span>\n    query <span class=\"syn-eq\">=</span> query<span class=\"syn-punc\">,</span>\n    onQueryChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"></rect><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><g transform=\"translate(22,16)\" opacity=\"0.8\"><circle cx=\"10\" cy=\"10\" r=\"7\" stroke=\"#6780A9\" stroke-width=\"2\" fill=\"none\"></circle><line x1=\"15.5\" y1=\"15.5\" x2=\"20.5\" y2=\"20.5\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></line></g><text x=\"54\" y=\"32\" font-family=\"BarkAda, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"1\">Search</text><circle cx=\"324\" cy=\"28\" r=\"12\" fill=\"#6780A9\"></circle></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Only a single variable mode (<code>default</code>) is bound on <code>main/search/*</code>. Focused, error, and disabled tokens do not exist yet.",
        "columns": [
          "DEFAULT",
          "FILLED"
        ],
        "rows": [
          {
            "role": "Background",
            "token": "main/search/color/default/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Border (top + bottom)",
            "token": "main/search/color/default/border",
            "values": [
              "#F6F9FD (80%)",
              "#F6F9FD (80%)"
            ]
          },
          {
            "role": "Placeholder",
            "token": "main/search/color/default/placeholder",
            "values": [
              "#90A8D0 (50%)",
              "–"
            ]
          },
          {
            "role": "Text",
            "token": "main/search/color/default/text",
            "values": [
              "–",
              "#0A2757"
            ]
          },
          {
            "role": "Icon (leading)",
            "token": "main/search/color/default/icon-leading",
            "values": [
              "#6780A9 (80%)",
              "#6780A9 (80%)"
            ]
          },
          {
            "role": "Icon (trailing)",
            "token": "main/search/color/default/icon-trailing",
            "values": [
              "#6780A9",
              "#6780A9"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Token"
        ],
        "rows": [
          {
            "role": "Container size",
            "token": "360 × 56 px",
            "values": [
              "—"
            ]
          },
          {
            "role": "Padding (horizontal)",
            "token": "22 px left / 24 px right",
            "values": [
              "— / space/space-24"
            ]
          },
          {
            "role": "Padding (vertical)",
            "token": "16 px",
            "values": [
              "space/space-16"
            ]
          },
          {
            "role": "Gap (icon ↔ text)",
            "token": "8 px",
            "values": [
              "space/space-8"
            ]
          },
          {
            "role": "Gap (trailing slot)",
            "token": "12 px",
            "values": [
              "space/space-12"
            ]
          },
          {
            "role": "Corner radius",
            "token": "0",
            "values": [
              "radius/radius-0"
            ]
          },
          {
            "role": "Border",
            "token": "1 px top + bottom only",
            "values": [
              "—"
            ]
          },
          {
            "role": "Leading icon size",
            "token": "24 × 24 px",
            "values": [
              "—"
            ]
          },
          {
            "role": "Trailing slot size",
            "token": "24 × 24 px",
            "values": [
              "—"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [],
        "rows": [
          {
            "role": "DS text style",
            "token": "Secondary/Bold/Base",
            "values": []
          },
          {
            "role": "Font family",
            "token": "BarkAda",
            "values": []
          },
          {
            "role": "Weight",
            "token": "Semibold (600)",
            "values": []
          },
          {
            "role": "Size",
            "token": "14 px (font-size-20)",
            "values": []
          },
          {
            "role": "Line height",
            "token": "20 px (leading-40)",
            "values": []
          },
          {
            "role": "Tracking",
            "token": "0 (tracking-normal)",
            "values": []
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "state = default / filled",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "query: String"
        },
        {
          "figma": "— (missing)",
          "swift": ".focused() / @FocusState",
          "compose": "interactionSource"
        },
        {
          "figma": "— (missing)",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "swapIcon (trailing)",
          "swift": "trailingIcon: Image?",
          "compose": "trailingIcon: @Composable"
        },
        {
          "figma": "label",
          "swift": "prompt: Text",
          "compose": "placeholder: String"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBSearchField.swift",
        "compose": "android/components/form/EBSearchField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Standalone Search Field",
        "swift": "<span class=\"typ\">EBSearchField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query,\n    <span class=\"prp\">onSubmit</span>: { runSearch(query) },\n    <span class=\"prp\">onClear</span>: { query = <span class=\"str\">\"\"</span> })",
        "compose": "<span class=\"typ\">EBSearchField</span>(\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">onSearch</span> = { runSearch(query) },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>\n)"
      },
      {
        "subheading": "Preferred: .searchable on a container",
        "swift": "<span class=\"typ\">NavigationStack</span> {\n    <span class=\"typ\">List</span>(results) { row <span class=\"kw\">in</span> <span class=\"typ\">Text</span>(row.title) }\n}\n.<span class=\"fn\">searchable</span>(<span class=\"prp\">text</span>: $query, <span class=\"prp\">prompt</span>: <span class=\"str\">\"Search\"</span>)",
        "compose": "<span class=\"typ\">SearchBar</span>(\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">onSearch</span> = { runSearch(query) },\n    <span class=\"prp\">active</span> = active,\n    <span class=\"prp\">onActiveChange</span> = { active = it },\n    <span class=\"prp\">placeholder</span> = { <span class=\"typ\">Text</span>(<span class=\"str\">\"Search\"</span>) },\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Search, <span class=\"kw\">null</span>) }\n) { <span class=\"cmt\">/* results */</span> }"
      },
      {
        "subheading": "Alternative: compose from EBInputField",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"search\"</span>))\n    .<span class=\"fn\">ebTrailingIcon</span>(query.isEmpty ? <span class=\"kw\">nil</span> : <span class=\"typ\">Image</span>(<span class=\"str\">\"close\"</span>)) { query = <span class=\"str\">\"\"</span> }\n    .<span class=\"fn\">ebRole</span>(.search)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = query,\n    <span class=\"prp\">onValueChange</span> = { query = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Search, <span class=\"kw\">null</span>) },\n    <span class=\"prp\">trailingIcon</span> = <span class=\"kw\">if</span> (query.isNotEmpty()) {\n        { <span class=\"typ\">IconButton</span>({ query = <span class=\"str\">\"\"</span> }) { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Close, <span class=\"str\">\"Clear search\"</span>) } }\n    } <span class=\"kw\">else</span> <span class=\"kw\">null</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 × 44 pt (container is 56pt ✓)",
        "android": "48 × 48 dp (container is 56dp ✓)"
      },
      {
        "requirement": "Search role / trait",
        "ios": "<code>.searchable</code> or <code>.accessibilityAddTraits(.isSearchField)</code>",
        "android": "<code>SearchBar</code> sets role automatically, else <code>semantics { role = Role.TextField; contentType = ContentType.SearchQuery }</code>"
      },
      {
        "requirement": "Clear button label",
        "ios": "<code>.accessibilityLabel(\"Clear search\")</code>",
        "android": "<code>contentDescription = \"Clear search\"</code>"
      },
      {
        "requirement": "Submit / Enter",
        "ios": "<code>.submitLabel(.search)</code> + <code>onSubmit</code>",
        "android": "<code>keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search)</code>"
      },
      {
        "requirement": "Escape to clear",
        "ios": "Hardware keyboard: handle in <code>onKeyPress(.escape)</code>",
        "android": "Handle in <code>onKeyEvent</code> for keyboard users"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Search Field for free-text query input that filters or retrieves results. Show the clear (X) button only when the field has content.",
        "dontText": "Use Search Field for destinations that don't actually filter or search. Use Input Field for generic text entry."
      },
      {
        "doText": "Pair with a results region below the field and announce result counts to assistive tech when the query updates.",
        "dontText": "Ship the placeholder circle in the trailing slot — always swap to a real Clear / Cancel icon before publishing a screen."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Trailing <code>Placeholder &gt; container &gt; icon-placeholder</code> chain is authoring scaffolding, not a named icon."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>state=default/filled</code> conflates content with interaction. Diverges from sibling State axis (Default/Active/Error/Disabled)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All visible colors bound to <code>main/search/color/default/*</code>, but only a <code>default</code> sub-mode exists — no tokens for focused/error/disabled."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Top+bottom banded border isn't a native default. Missing <code>role=search</code> semantics in layer model."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only default/filled. No focused, error, or disabled variants."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Leading search glyph is a raster <code>img</code> (<code>shape_full</code>), not a vector instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by C1/C2/C5/C6. No CLI mappings registered."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>state=default/filled</code> axis needs split into <code>State</code> (enum) + <code>isFilled</code> (bool)"
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing Active / Error / Disabled"
      },
      {
        "aspect": "Icon quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Raster leading glyph + placeholder trailing slot"
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "EBSearchField.swift / EBSearchField.kt not yet created"
      }
    ],
    "variants": {
      "total": 2,
      "description": "A single <code>state</code> axis with two values. Both variants are 360 × 56 px.",
      "columns": [
        "state",
        "Dimensions",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "default",
            "360 × 56",
            "50:78118"
          ]
        },
        {
          "cells": [
            "filled",
            "360 × 56",
            "50:78126"
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
      "header": "Initial Assessment · node 18577:14520",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 2 variants documented (<code>state=default/filled</code>). Part of Form Elements group. Verdict: Restructure / Requires Rework.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "open",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>State coverage incomplete</strong> — only default and filled; focused, error, disabled missing.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Leading glyph is raster</strong> — <code>shape_full</code> rendered via <code>img</code>, not a vector instance.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Trailing slot ships Placeholder wrapper</strong> — unresolved <code>Placeholder &gt; icon-placeholder</code> circle rather than a real Clear icon.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong><code>state</code> axis conflates content and interaction</strong> — <code>default/filled</code> is a derived content signal, not a state-machine value.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Banded border diverges from family</strong> — top+bottom only, <code>radius-0</code>. Siblings use full rounded-rect stroke at 6px.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — not registered. Blocked by C1/C2/C5/C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
