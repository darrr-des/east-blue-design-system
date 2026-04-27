import type { ComponentData } from '../types';

export const avatar: ComponentData = {
  "meta": {
    "slug": "avatar",
    "name": "Avatar",
    "node": "17143:4488",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=17143-4488",
    "description": "A circular display element showing user initials or a profile image. Supports 7 sizes (20px-90px) and 3 types (dark initials, light initials, image). Used when a profile image is unavailable or for visual user identification.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Avatar",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <circle cx=\"11\" cy=\"12\" r=\"9\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"/>\n      <text x=\"11\" y=\"15\" text-anchor=\"middle\" fill=\"white\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">DM</text>\n      \n      <circle cx=\"23\" cy=\"20\" r=\"6\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1\"/>\n      <text x=\"23\" y=\"22.5\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">LM</text>\n    </svg>"
  },
  "overview": {
    "inContextNote": "How the avatar appears in a real product screen — Contacts list with Favorites row (brand fill + default fill avatars in circular display).",
    "inContextHtml": "<img class=\"ctx-img\" src=\"/assets/previews/avatar-in-context.png\" alt=\"Avatar component shown in the GCash Contacts screen with a Favorites row of circular initials avatars (JF, JD, D, C, ZD)\" >",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ava-demo-preview\"><svg id=\"ava-demo-svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"2\"></circle><text x=\"32\" y=\"38\" text-anchor=\"middle\" fill=\"white\" font-size=\"22\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"ava-demo-type\" onchange=\"updateAvatarDemo()\"><option value=\"dark-initials\" selected=\"\">dark-initials</option><option value=\"initials-light\">initials-light</option><option value=\"image\">image</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" id=\"ava-demo-size\" onchange=\"updateAvatarDemo()\"><option value=\"20\">20px</option><option value=\"24\">24px</option><option value=\"32\">32px</option><option value=\"40\">40px</option><option value=\"48\">48px</option><option value=\"64\" selected=\"\">64px</option><option value=\"90\">90px</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "7 sizes from 20px to 90px cover all common avatar placements. 3 types (dark initials, light initials, image) handle fallback and branded scenarios."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "All variants are self-contained with vector ELLIPSE fills, token-bound colors, and editable text. No external assets required."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "Token naming follows DS convention (<code>main/avatar/...</code>). Variant naming verified correct (<code>type=initials-light</code>). Border-radius tokenized to <code>radius/radius-round</code>. <strong>One C2 issue remaining:</strong> token <code>main/avatar/brand/intials</code> has typo (should be <code>initials</code>) — manual rename needed in Figma Variables panel."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Fits naturally in headers, list rows, profile screens, chat bubbles, and badge overlays. Simple circular shape composes well with any layout container."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type + size",
        "notes": "Display-only. All 3 types fully defined across 7 sizes."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "--",
        "notes": "Display-only component. Tap behavior handled by parent container."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "--",
        "notes": "Display-only component. No disabled state."
      },
      {
        "state": "Focused (a11y)",
        "ios": "na",
        "android": "na",
        "property": "--",
        "notes": "Display-only. Focus rings rendered by parent interactive container if needed."
      }
    ],
    "resolved": [
      {
        "body": "Border-radius: bound to <code>radius/radius-round</code> (99999) across all sizes — previously hardcoded per size (C3)"
      },
      {
        "body": "Border-width: confirmed fixed per size by design — not a token gap (C3)"
      },
      {
        "body": "Raster backgrounds replaced with vector ELLIPSE layers across all 5 affected initials variants (C6)"
      },
      {
        "body": "Avatar Group compound component created (previously a design recommendation) — see sibling component under Avatar group (C2)"
      },
      {
        "body": "Variant property value naming verified on recheck: variant names are correctly hyphenated as <code>type=initials-light</code> in Figma source. Earlier \"spaces\" report was an MCP output artifact (TypeScript enum generation converts hyphens to spaces). No action required. <span class=\"tag-fixed\">C2 Verified</span>"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structural issues are resolved — registration can proceed against the current <code>type</code> × <code>shape</code> × <code>size</code> schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add a status <code>badge</code> overlay slot.",
        "body": "Common in chat, contacts, and profile lists — online/offline dots, notification counts, verified checkmarks. Today consumers stack a Badge manually on top of Avatar; a built-in slot encodes the correct offset and sizing.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "ava-spec-dark",
        "title": "Dark Initials",
        "node": "17143:4531",
        "description": "Blue circle with white initials text. Branded avatar used as default when no photo is available.",
        "previewHtml": "<svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"ava-spec-dark-svg\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"2\"></circle><text x=\"32\" y=\"42.85\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"31\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text></svg>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Dark Initials",
                "mono": false
              },
              {
                "key": "Text",
                "value": "first + last initials",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "avatar/brand/bg",
                "mono": true
              },
              {
                "key": "Initials",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Initials token",
                "value": "avatar/brand/intials",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "avatar/brand/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Sizes",
                "value": "20 / 24 / 32 / 40 / 48 / 64 / 90",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "50% (circle)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1.5px solid",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Tiny / Fine / Multi-line / Block / Section / Region / Spotlight",
                "value": "responsive per avatar size",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>initials<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"JD\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.darkInitials</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.size40</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>\n    initials <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"JD\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAvatarStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.DarkInitials</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAvatarSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Size40</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "ava-spec-light",
        "title": "Light Initials",
        "node": "17143:4535",
        "description": "Light circle with blue initials text. Neutral variant for non-branded contexts.",
        "previewHtml": "<svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"ava-spec-light-svg\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"2\"></circle><text x=\"32\" y=\"42.85\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"31\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">LM</text></svg>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Light Initials",
                "mono": false
              },
              {
                "key": "Text",
                "value": "first + last initials",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Bg",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "avatar/default/bg",
                "mono": true
              },
              {
                "key": "Initials",
                "value": "#2340A9",
                "mono": true
              },
              {
                "key": "Initials token",
                "value": "avatar/default/initials",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "avatar/default/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Sizes",
                "value": "20 / 24 / 32 / 40 / 48 / 64 / 90",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "50% (circle)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1.5px solid",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Style",
                "value": "responsive per avatar size",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>initials<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"JD\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.lightInitials</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.size40</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>\n    initials <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"JD\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAvatarStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.LightInitials</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAvatarSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Size40</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "ava-spec-image",
        "title": "Image",
        "node": "17143:4546",
        "description": "User profile photo in a circle clip. Falls back to placeholder when image fails to load.",
        "previewHtml": "<svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"ava-spec-image-svg\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#C2CFE5\" stroke=\"#E5EBF4\" stroke-width=\"2\"></circle><circle cx=\"32\" cy=\"25.6\" r=\"8\" fill=\"#9BABC4\" opacity=\".6\"></circle><ellipse cx=\"32\" cy=\"48\" rx=\"14.08\" ry=\"10.24\" fill=\"#9BABC4\" opacity=\".4\"></ellipse></svg>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Type",
                "value": "Image",
                "mono": false
              },
              {
                "key": "Source",
                "value": "user profile image",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Placeholder bg",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Placeholder bg token",
                "value": "avatar/placeholder/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "avatar/placeholder/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Sizes",
                "value": "20 / 24 / 32 / 40 / 48 / 64 / 90",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "50% (circle)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1.5px solid",
                "mono": true
              },
              {
                "key": "Image fit",
                "value": "cover",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "image-only avatar",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"user-photo\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.size40</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span>\n    image <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> url<span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAvatarSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Size40</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type -- Dark Initials",
        "description": "Display-only component. No interaction states. All colors bound to <code>main/avatar/brand/</code> tokens.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Circle bg",
            "token": "main/avatar/brand/bg",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "Circle border",
            "token": "main/avatar/brand/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Initials text",
            "token": "main/avatar/brand/initials",
            "values": [
              "#FFFFFF"
            ]
          }
        ]
      },
      {
        "title": "Colors by Type -- Light Initials",
        "description": "Display-only component. No interaction states. All colors bound to <code>main/avatar/default/</code> tokens.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Circle bg",
            "token": "main/avatar/default/bg",
            "values": [
              "#F6F9FD"
            ]
          },
          {
            "role": "Circle border",
            "token": "main/avatar/default/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Initials text",
            "token": "main/avatar/default/initials",
            "values": [
              "#2340A9"
            ]
          }
        ]
      },
      {
        "title": "Colors by Type -- Image",
        "description": "Display-only component. Placeholder colors shown when image has not loaded. All colors bound to <code>main/avatar/placeholder/</code> tokens.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Placeholder bg",
            "token": "main/avatar/placeholder/bg",
            "values": [
              "#C2CFE5"
            ]
          },
          {
            "role": "Placeholder border",
            "token": "main/avatar/placeholder/border",
            "values": [
              "#E5EBF4"
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
          "label": "iOS -- Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File -> Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Or in Package.swift:</span>\n.<span class=\"fn\">package</span>(\n    <span class=\"prp\">url</span>: <span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>,\n    <span class=\"prp\">from</span>: <span class=\"str\">\"1.0.0\"</span>\n)"
        },
        {
          "label": "Android -- Gradle (Kotlin DSL)",
          "code": "<span class=\"cmt\">// build.gradle.kts (app)</span>\n<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:avatar:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.avatar.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. API shape is final -- native implementation is pending."
    },
    "propertyMapping": {
      "description": "Every row maps a Figma component property to its native equivalent.",
      "rows": [
        {
          "figma": "<code>type=dark-initials</code>",
          "swift": "<code>.darkInitials</code>",
          "compose": "<code>AvatarType.DarkInitials</code>"
        },
        {
          "figma": "<code>type=initials-light</code>",
          "swift": "<code>.lightInitials</code>",
          "compose": "<code>AvatarType.LightInitials</code>"
        },
        {
          "figma": "<code>type=image</code>",
          "swift": "<code>.image(url:)</code>",
          "compose": "<code>AvatarType.Image(url)</code>"
        },
        {
          "figma": "<code>size=20px...90px</code>",
          "swift": "<code>size: AvatarSize</code>",
          "compose": "<code>size: AvatarSize</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Avatar/EBAvatar.swift",
        "compose": "android/components/avatar/EBAvatar.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Dark Initials",
        "swift": "<span class=\"cmt\">// Dark initials</span>\n<span class=\"typ\">EBAvatar</span>(<span class=\"str\">\"DM\"</span>, <span class=\"prp\">type</span>: .<span class=\"prp\">darkInitials</span>, <span class=\"prp\">size</span>: .<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// Dark initials</span>\n<span class=\"typ\">EBAvatar</span>(\n    <span class=\"prp\">initials</span> = <span class=\"str\">\"DM\"</span>,\n    <span class=\"prp\">type</span> = <span class=\"typ\">AvatarType</span>.<span class=\"prp\">DarkInitials</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">AvatarSize</span>.<span class=\"prp\">Large</span>\n)"
      },
      {
        "subheading": "Light Initials",
        "swift": "<span class=\"cmt\">// Light initials</span>\n<span class=\"typ\">EBAvatar</span>(<span class=\"str\">\"LM\"</span>, <span class=\"prp\">type</span>: .<span class=\"prp\">lightInitials</span>, <span class=\"prp\">size</span>: .<span class=\"prp\">medium</span>)",
        "compose": "<span class=\"cmt\">// Light initials</span>\n<span class=\"typ\">EBAvatar</span>(\n    <span class=\"prp\">initials</span> = <span class=\"str\">\"LM\"</span>,\n    <span class=\"prp\">type</span> = <span class=\"typ\">AvatarType</span>.<span class=\"prp\">LightInitials</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">AvatarSize</span>.<span class=\"prp\">Medium</span>\n)"
      },
      {
        "subheading": "Image",
        "swift": "<span class=\"cmt\">// Image</span>\n<span class=\"typ\">EBAvatar</span>(<span class=\"prp\">imageURL</span>: profileURL, <span class=\"prp\">size</span>: .<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// Image</span>\n<span class=\"typ\">EBAvatar</span>(\n    <span class=\"prp\">imageUrl</span> = profileUrl,\n    <span class=\"prp\">type</span> = <span class=\"typ\">AvatarType</span>.<span class=\"prp\">Image</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">AvatarSize</span>.<span class=\"prp\">Large</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Alt text",
        "ios": "<code>accessibilityLabel(\"User avatar\")</code>",
        "android": "<code>contentDescription = \"User avatar\"</code>"
      },
      {
        "requirement": "Decorative mode",
        "ios": "<code>isAccessibilityElement = false</code> (in lists)",
        "android": "<code>importantForAccessibility = no</code>"
      },
      {
        "requirement": "Image loading",
        "ios": "<code>AsyncImage</code> with placeholder",
        "android": "<code>SubcomposeAsyncImage</code> with placeholder"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use dark-initials as default when no photo is available.",
        "dontText": "Use image type with placeholder -- use initials instead."
      },
      {
        "doText": "Match avatar size to context (20px in dense lists, 90px in profiles).",
        "dontText": "Mix initials types in the same context."
      },
      {
        "doText": "Always pass 2-letter initials (first + last).",
        "dontText": "Show single-letter or empty initials."
      },
      {
        "doText": "Provide alt text for image avatars.",
        "dontText": "Skip accessibility labels."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Layers named <code>container</code>, <code>background</code>, <code>replace here - image</code>. Simple hierarchy. Minor: some sizes have a child also named <code>container</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Variant naming resolved (<code>initials-light</code>). Token name typo fixed (<code>main/avatar/brand/initials</code>). Size values use <code>px</code> suffix (minor, no impact on native mapping)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "8 color tokens, full typography tokens, and <code>radius/radius-round</code> connected. Border-width is fixed per size (by design)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to custom Circle-clipped view on both platforms. No web-only patterns."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only component. No interactive states needed."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All initials variants now use vector ELLIPSE layers. Image type rasters are expected (user photos)."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Usage descriptions attached. Variant naming now clean. Token typo remains. No CLI mappings."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "3 <code>type</code> × 7 <code>size</code> = <strong>21 variants</strong>. No interaction state axis (display-only component).",
      "columns": [
        "Type",
        "Sizes",
        "Notes",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>dark-initials</strong>",
            "20, 24, 32, 40, 48, 64, 90 px",
            "Brand background, white initials",
            "7"
          ]
        },
        {
          "cells": [
            "<strong>initials-light</strong>",
            "20, 24, 32, 40, 48, 64, 90 px",
            "Light background, dark initials",
            "7"
          ]
        },
        {
          "cells": [
            "<strong>image</strong>",
            "20, 24, 32, 40, 48, 64, 90 px",
            "Photo fill (raster expected)",
            "7"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment -- node 17143:4488",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> -- 21 variants documented across type (dark-initials / initials-light / image) x size (20px / 24px / 32px / 40px / 48px / 64px / 90px). Token audit found 8 component-specific color tokens + full typography token set.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Variant naming resolved</strong> -- <code>type=initials - light</code> renamed to <code>type=initials-light</code> across all 7 variants. Now matches <code>dark-initials</code> hyphen style.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Token name typo fixed</strong> -- <code>main/avatar/brand/intials</code> corrected to <code>main/avatar/brand/initials</code>. Token now maps correctly to native implementations.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Raster backgrounds replaced</strong> -- 5 initials variants (dark-initials 40px/64px, initials-light 40px/64px/90px) now use vector ELLIPSE layers with token-bound fills instead of raster backgrounds.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Border-radius tokenized</strong> -- All sizes now use <code>radius/radius-round</code> (99999) instead of hardcoded per-size values (45.213px, 24px, 16px, 12px, 10px).\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> -- Usage descriptions and documentation links attached per variant. No native component files or Code Connect CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Still Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
