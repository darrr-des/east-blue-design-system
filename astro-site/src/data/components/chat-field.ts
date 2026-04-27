import type { ComponentData } from '../types';

export const chatField: ComponentData = {
  "meta": {
    "slug": "chat-field",
    "name": "Chat Field",
    "node": "23:145915",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=23-145915",
    "description": "A message-composer input with a text area, leading attachment, and trailing send action.",
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
    "navGroup": "Chat",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure as a composed pattern",
      "text": "Chat Field wraps an Input Field instance with two icon buttons and exposes only a single <code>active</code> boolean. That schema drops Error, Disabled, and <code>isFilled</code> coverage that the inner Input Field already carries, and the leading/trailing glyphs ship as rasters. Rename to <strong>Chat Composer</strong> (or <strong>Message Composer</strong>), expose the field as a nested instance with its full state matrix, and replace both 32×32 icon slots with Icon Button instances so native can map 1:1 to <code>HStack { Button + TextField + Button }</code>."
    }
  },
  "overview": {
    "inContextNote": "Canonical contexts: chat threads, customer-support conversations, peer-to-peer messaging, and comment composers docked to the bottom of a scroll view.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"6\" width=\"100\" height=\"68\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"18\" y=\"14\" width=\"50\" height=\"10\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"50\" y=\"28\" width=\"54\" height=\"10\" rx=\"4\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"18\" y=\"42\" width=\"42\" height=\"10\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"14\" y=\"60\" width=\"92\" height=\"10\" rx=\"4\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".25\"></rect>\n          <path d=\"M18 65h4M20 63v4\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" opacity=\".4\"></path>\n          <path d=\"M98 62l-4 3 4 3-1-3zM94 65l8-3\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linejoin=\"round\" fill=\"none\" opacity=\".5\"></path>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cf-demo-preview\"><svg width=\"360\" height=\"88\" viewBox=\"0 0 360 88\" fill=\"none\"><rect width=\"360\" height=\"88\" fill=\"#FFFFFF\"></rect><rect x=\"12\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M28 36v16M20 44h16\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\"></path><rect x=\"52.5\" y=\"18.5\" width=\"247\" height=\"51\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"64\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Say hi!</text><rect x=\"312\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M319 44L339 35L332 55L329 46Z\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linejoin=\"round\" fill=\"none\"></path><path d=\"M319 44L329 46\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">active</span><select class=\"demo-panel-select\" onchange=\"_cfDemo.active=this.value;updateChatFieldDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works anywhere a message composer is needed, but the 360px fixed width and single layout (leading-attach + field + send) assume one use case. No variants for audio-only composers, multi-attach rows, or send-disabled states."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Bundles its own layout and icons but delegates all field styling and state to a nested Input Field, while exposing only <code>active</code>. Error, Disabled, and <code>isFilled</code> states that Input Field ships are silently unreachable through Chat Field's surface API."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>active=yes/no</code> (C2 anti-pattern). The property forwards to the inner field's <code>State=Active</code>, so a chat-field-level boolean duplicates a field-level enum. The two leading/trailing icon frames are named <code>container</code> rather than semantic slot names like <code>leading</code> / <code>trailing</code>."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Already nests an Input Field instance — good. But the leading and trailing icons are fixed raster glyphs, not Icon Button instances, so the composer cannot be recomposed for an emoji picker, voice-note, or camera entry point without editing the component."
      }
    ],
    "behavior": [
      {
        "state": "Default (inactive)",
        "ios": "yes",
        "android": "yes",
        "property": "active=no",
        "notes": "Inner field shows 1px #D7E0EF border, placeholder text \"Say hi!\"."
      },
      {
        "state": "Active (focused)",
        "ios": "yes",
        "android": "yes",
        "property": "active=yes",
        "notes": "Inner field shows 2px #005CE5 border. Text color switches from placeholder to filled."
      },
      {
        "state": "Filled (has content)",
        "ios": "na",
        "android": "na",
        "property": "(not represented)",
        "notes": "No distinct variant. Inner field's <code>isFilled</code> is pinned by the <code>active</code> toggle; the composer can't model \"typed but unfocused\"."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "(not represented)",
        "notes": "Input Field supports Error; Chat Field does not expose it."
      },
      {
        "state": "Disabled / send-disabled",
        "ios": "na",
        "android": "na",
        "property": "(not represented)",
        "notes": "No disabled state for the composer, and no way to dim the send icon when the field is empty."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Icon frames are generically named <code>container</code>.",
        "body": "Both the leading (plus/attach) and trailing (send) slots share the layer name <code>container</code>, so Code Connect can't tell leading from trailing. Should be semantic: <code>leading</code> / <code>trailing</code> (or <code>attach-slot</code> / <code>send-slot</code>) to match native <code>HStack</code> ordering.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Boolean uses <code>yes/no</code> and misnames the intent.",
        "body": "<code>active=yes/no</code> cannot map to Swift <code>Bool</code> / Kotlin <code>Boolean</code> without a translation layer, and <code>active</code> is ambiguous — the true meaning is \"inner field is focused\". The property is redundant with the inner Input Field's <code>State=Active</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Composer maps to three native siblings, not a single primitive.",
        "body": "iOS and Android both compose this pattern as <code>HStack { Button + TextField + Button }</code> / <code>Row { IconButton + OutlinedTextField + IconButton }</code>. Shipping Chat Field as a single Figma component with a private <code>active</code> boolean hides that composition from Code Connect, making 1:1 mapping impossible.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "2 variants cover less state than the inner Input Field already has.",
        "body": "Input Field ships 8 variants (State × isFilled). Chat Field wraps it but collapses the surface to a single Active toggle — Error, Disabled, and the Default-but-filled case are unreachable through Chat Field.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Leading and trailing icons are raster PNGs.",
        "body": "Both <code>Add_Full</code> (plus, 32×32) and <code>Send Message Medium</code> (paper-plane, 32×32) are referenced via PNG asset URLs (<code>imgShapeFull</code> / <code>imgShapeFull1</code>). Native platforms ship vector SF Symbols (<code>plus</code>, <code>paperplane.fill</code>) / Material icons (<code>Add</code>, <code>Send</code>); the rasters cannot tint, scale, or accept token-based color.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked by the composition decision, property rename, and icon vectorization. Once the composer is rebuilt as Input Field + two Icon Button slots, mapping is a direct pass-through to the sibling components' own Code Connect entries.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename to Chat Composer (or Message Composer) and rebuild as a composed pattern.",
        "body": "Target schema: a 3-slot layout — <code>leadingAction</code> (Icon Button instance), <code>field</code> (Input Field instance with <code>multiline</code>/<code>lineLimit</code> 1…5 per the Text Area consolidation), <code>trailingAction</code> (Icon Button instance). Drop the <code>active</code> boolean — focus comes from the nested field. Result: 0 net variants on the composer, full field state matrix inherited, and both icons become recomposable.",
        "tag": "Family"
      },
      {
        "headline": "Rename <code>active=yes/no</code> away.",
        "body": "If the composer keeps any boolean at all, use semantic naming tied to a real affordance — e.g. <code>sendEnabled: true/false</code> — and let the field's own focus state carry the focused appearance.",
        "tag": "Rename"
      },
      {
        "headline": "Expose <code>leadingAction</code> and <code>trailingAction</code> as Figma Slots.",
        "body": "Consumers will need to swap plus for camera, microphone, or emoji entry points, and paper-plane for voice-note-record without forking the component. Slots also let the layer names convey leading vs trailing, fixing C1.",
        "tag": "Slot"
      },
      {
        "headline": "Vectorize both action glyphs.",
        "body": "Replace the PNG <code>Add_Full</code> and <code>Send Message Medium</code> with vector icon components tinted via <code>main/chat-field/color/icon</code>. Aligns with the token that already exists and with SF Symbols / Material icons on native.",
        "tag": "Asset"
      },
      {
        "headline": "Add a send-disabled visual for empty fields.",
        "body": "Common chat pattern: the send icon dims to <code>~40% opacity</code> or a muted token when the field has no text. Currently not representable. Covered naturally by exposing <code>trailingAction</code> as an Icon Button slot with its own enabled/disabled variant.",
        "tag": "State"
      },
      {
        "headline": "Document a Chat component family.",
        "body": "This is the first component in the Chat group. Plan siblings now: <code>Chat Bubble (sent/received)</code>, <code>Chat Bubble (with attachment)</code>, <code>Chat Typing Indicator</code>, <code>Chat Date Separator</code>. Defining the family shape now prevents each bubble from being drawn ad-hoc in product files.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "cf-spec-default",
        "title": "Inactive (active=no)",
        "node": "23:145916",
        "description": "Idle composer. Inner field renders with 1px #D7E0EF border and placeholder \"Say hi!\" in #90A8D0.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Inactive (active=no)",
                "mono": false
              },
              {
                "key": "State",
                "value": "Default",
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
                "value": "chat-field/color/bg",
                "mono": true
              },
              {
                "key": "Border (default)",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border (default) token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Border (active)",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Border (active) token",
                "value": "input-field/active/border",
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
              },
              {
                "key": "Send icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Send icon token",
                "value": "chat-field/color/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px (auto-grow)",
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
                "key": "Send button",
                "value": "40 × 40",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Input style",
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              },
              {
                "key": "Input font",
                "value": "Proxima Soft Semibold · 16 / 20 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBChatField</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>$message<span class=\"syn-punc\">, </span>onSend<span class=\"syn-punc\">: </span><span class=\"syn-punc\">{ </span>sendMessage<span class=\"syn-punc\">() }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBChatField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> message<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ message = it }</span><span class=\"syn-punc\">,</span>\n    onSend <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ sendMessage() }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"88\" viewBox=\"0 0 360 88\" fill=\"none\"><rect width=\"360\" height=\"88\" fill=\"#FFFFFF\"></rect><rect x=\"12\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M28 36v16M20 44h16\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\"></path><rect x=\"52.5\" y=\"18.5\" width=\"247\" height=\"51\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"64\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Say hi!</text><rect x=\"312\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M319 44L339 35L332 55L329 46Z\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linejoin=\"round\" fill=\"none\"></path><path d=\"M319 44L329 46\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg>"
      },
      {
        "cardKey": "cf-spec-active",
        "title": "Active (active=yes)",
        "node": "23:145922",
        "description": "Focused composer. Inner field switches to a 2px #005CE5 border and text color flips to #0A2757 (filled tone).",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Active (active=yes)",
                "mono": false
              },
              {
                "key": "State",
                "value": "Active",
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
                "value": "chat-field/color/bg",
                "mono": true
              },
              {
                "key": "Border (default)",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Border (default) token",
                "value": "input-field/default/border",
                "mono": true
              },
              {
                "key": "Border (active)",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Border (active) token",
                "value": "input-field/active/border",
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
              },
              {
                "key": "Send icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Send icon token",
                "value": "chat-field/color/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px (auto-grow)",
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
                "key": "Send button",
                "value": "40 × 40",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Input style",
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              },
              {
                "key": "Input font",
                "value": "Proxima Soft Semibold · 16 / 20 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBChatField</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>$message<span class=\"syn-punc\">, </span>onSend<span class=\"syn-punc\">: </span><span class=\"syn-punc\">{ </span>sendMessage<span class=\"syn-punc\">() }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBChatField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> message<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ message = it }</span><span class=\"syn-punc\">,</span>\n    onSend <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ sendMessage() }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"88\" viewBox=\"0 0 360 88\" fill=\"none\"><rect width=\"360\" height=\"88\" fill=\"#FFFFFF\"></rect><rect x=\"12\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M28 36v16M20 44h16\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\"></path><rect x=\"52.5\" y=\"18.5\" width=\"247\" height=\"51\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#005CE5\" stroke-width=\"2\"></rect><text x=\"64\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Say hi!</text><rect x=\"312\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M319 44L339 35L332 55L329 46Z\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linejoin=\"round\" fill=\"none\"></path><path d=\"M319 44L329 46\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "The composer owns only two tokens (<code>bg</code>, <code>icon</code>). Every other color is inherited from the nested Input Field's <code>main/input-field/*</code> collection — another motivation for rebuilding the composer as a composition rather than a primitive.",
        "columns": [
          "DEFAULT (active=no)",
          "ACTIVE (active=yes)"
        ],
        "rows": [
          {
            "role": "Composer bg",
            "token": "main/chat-field/color/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Leading icon (plus)",
            "token": "main/chat-field/color/icon",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Trailing icon (send)",
            "token": "main/chat-field/color/icon",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Field bg",
            "token": "main/input-field/{state}/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Field border",
            "token": "main/input-field/{state}/border",
            "values": [
              "#D7E0EF (1px)",
              "#005CE5 (2px)"
            ]
          },
          {
            "role": "Field placeholder",
            "token": "main/input-field/default/placeholder",
            "values": [
              "#90A8D0",
              "#90A8D0"
            ]
          },
          {
            "role": "Field text (filled)",
            "token": "main/input-field/default/text",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:chat:1.0.0\"</span>)\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.chat.*  <span class=\"cmt\">// Compose</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(text content)",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "value: String"
        },
        {
          "figma": "active (yes/no)",
          "swift": "@FocusState",
          "compose": "interactionSource"
        },
        {
          "figma": "(leading slot)",
          "swift": "leadingAction: () -&gt; Void",
          "compose": "leadingAction: () -&gt; Unit"
        },
        {
          "figma": "(trailing slot)",
          "swift": "trailingAction: () -&gt; Void",
          "compose": "trailingAction: () -&gt; Unit"
        },
        {
          "figma": "(line growth)",
          "swift": "axis: .vertical, lineLimit(1...5)",
          "compose": "singleLine = false, maxLines = 5"
        },
        {
          "figma": "(placeholder)",
          "swift": "placeholder: String",
          "compose": "placeholder: String"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Chat/EBChatComposer.swift",
        "compose": "android/components/chat/EBChatComposer.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Inactive composer",
        "swift": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">text</span>: $message,\n    <span class=\"prp\">onAttach</span>: { presentAttachSheet() },\n    <span class=\"prp\">onSend</span>:   { send(message) }\n)",
        "compose": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">value</span> = message,\n    <span class=\"prp\">onValueChange</span> = { message = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">onAttach</span> = { presentAttachSheet() },\n    <span class=\"prp\">onSend</span> = { send(message) }\n)"
      },
      {
        "subheading": "Active with send-disabled",
        "swift": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">text</span>: $message,\n    <span class=\"prp\">onAttach</span>: attach,\n    <span class=\"prp\">onSend</span>:   send,\n    <span class=\"prp\">sendEnabled</span>: !message.<span class=\"prp\">isEmpty</span>\n)",
        "compose": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">value</span> = message,\n    <span class=\"prp\">onValueChange</span> = { message = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">onAttach</span> = attach,\n    <span class=\"prp\">onSend</span> = send,\n    <span class=\"prp\">sendEnabled</span> = message.isNotEmpty()\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target (icon buttons)",
        "ios": "44 × 44 pt — 32px frame pads to 44pt hit area",
        "android": "48 × 48 dp — 32px frame pads to 48dp hit area"
      },
      {
        "requirement": "Leading icon label",
        "ios": "<code>.accessibilityLabel(\"Attach\")</code>",
        "android": "<code>contentDescription = \"Attach\"</code>"
      },
      {
        "requirement": "Trailing icon label",
        "ios": "<code>.accessibilityLabel(\"Send\")</code>",
        "android": "<code>contentDescription = \"Send\"</code>"
      },
      {
        "requirement": "Send-disabled announcement",
        "ios": "VoiceOver reads \"Send, dimmed\" via <code>.accessibilityHint(\"Enter a message first\")</code>",
        "android": "TalkBack reads disabled state via <code>semantics { disabled() }</code>"
      },
      {
        "requirement": "Keyboard submit",
        "ios": "<code>.onSubmit { send() }</code> on the nested TextField",
        "android": "<code>keyboardOptions = KeyboardOptions(imeAction = ImeAction.Send)</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Dock the composer to the bottom of the chat scroll view with the keyboard inset, and let the field auto-grow within lineLimit(1...5) / maxLines = 5.",
        "dontText": "Use Chat Field for single-line structured inputs (name, phone, amount). Use Input Field or the typed form-element sibling instead."
      },
      {
        "doText": "Dim the trailing send icon when the field is empty. Reflects system chat conventions (iMessage, WhatsApp, Messenger) and prevents empty-send.",
        "dontText": "Swap the plus icon for unrelated actions (navigation, close). Leading slot is reserved for content-entry affordances: attach, camera, mic, emoji."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both icon frames share the generic name <code>container</code>. Should be <code>leading</code> / <code>trailing</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>active=yes/no</code> — boolean naming and semantic intent both wrong; the property duplicates the inner field's <code>State=Active</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>main/chat-field/color/bg</code> and <code>main/chat-field/color/icon</code> resolved. Spacing (<code>space/space-8</code>, <code>12</code>, <code>16</code>, <code>24</code>) and radius (<code>radius/radius-2</code>) bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native primitive for \"chat composer\"; maps to <code>HStack { Button + TextField + Button }</code>. Shipping as a single component hides the composition."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only Active/Inactive. Missing Error, Disabled, isFilled, and send-disabled states that the use case requires."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Both leading (plus) and trailing (send) glyphs are raster PNGs; must vectorize and bind to <code>main/chat-field/color/icon</code>."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by composition rebuild, property rename, and icon vectorization."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>active=yes/no</code> cannot map to native booleans and duplicates the nested field's focus"
      },
      {
        "aspect": "Component identity",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Native platforms compose this pattern from three siblings — Chat Field needs to ship as a composition, not a primitive"
      },
      {
        "aspect": "Icon slots",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Leading/trailing icon frames are fixed rasters, not Icon Button instances"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBChatComposer</code> under a new Chat package"
      }
    ],
    "variants": {
      "total": 2,
      "description": "Single axis: <code>active</code> (no/yes). Both variants are 360×88px.",
      "columns": [
        "active",
        "Size",
        "Inner field border",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "no",
            "360×88",
            "1px #D7E0EF",
            "23:145916"
          ]
        },
        {
          "cells": [
            "yes",
            "360×88",
            "2px #005CE5",
            "23:145922"
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
      "header": "Initial Assessment · node 23:145915",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 2 variants documented on a single <code>active</code> axis. First component in the new <em>Chat</em> group. Anatomy: leading plus icon (32px raster) + nested Input Field + trailing send icon (32px raster) in a 360×88 container.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Restructure proposed</strong> — Rebuild as a composition (<code>EBChatComposer</code> wrapping <code>EBInputField</code> + two <code>EBIconButton</code> slots) and rename to Chat Composer / Message Composer. Drops the ambiguous <code>active</code> boolean and inherits Input Field's full state matrix.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>active=yes/no</code> cannot map to Swift <code>Bool</code> / Kotlin <code>Boolean</code>, and the property duplicates the inner field's <code>State=Active</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Raster leading/trailing glyphs</strong> — Both <code>Add_Full</code> (plus) and <code>Send Message Medium</code> (paper-plane) ship as PNG references instead of vectors, on a 32×32 frame.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Hidden state gaps</strong> — Composer surface exposes only Default/Active. Error, Disabled, isFilled, and send-disabled cannot be represented at this layer despite being native requirements for the chat use case.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Icon frames share the name <code>container</code></strong> — Leading and trailing icon wrappers both use the same generic layer name; Code Connect cannot distinguish them.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered. Blocked by composition rebuild and property renames.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
