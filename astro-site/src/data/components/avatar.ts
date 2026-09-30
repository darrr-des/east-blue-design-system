import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/avatar.js`.
// Panel mirrors the property panel of set 17143:4488 (Avatar_New): two
// variant axes. The Initials input is the component's own text layer.
const avatarDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'type',
        prop: 'type',
        defaultValue: 'dark-initials',
        options: [
          { value: 'dark-initials',  label: 'dark-initials' },
          { value: 'image',          label: 'image' },
          { value: 'initials-light', label: 'initials-light' },
        ],
      },
      {
        label: 'size',
        prop: 'size',
        defaultValue: '64',
        options: [
          { value: '90', label: '90px' },
          { value: '64', label: '64px' },
          { value: '48', label: '48px' },
          { value: '40', label: '40px' },
          { value: '32', label: '32px' },
          { value: '24', label: '24px' },
          { value: '20', label: '20px' },
        ],
      },
      { label: 'Initials', prop: 'initials', control: 'input', defaultValue: 'DM', options: [] },
    ],
  },
];

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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ava-demo-preview\"><svg id=\"ava-demo-svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"2\"></circle><text x=\"32\" y=\"38\" text-anchor=\"middle\" fill=\"white\" font-size=\"22\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">DM</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"ava-demo-type\" onchange=\"updateAvatarDemo()\"><option value=\"dark-initials\" selected=\"\">dark-initials</option><option value=\"initials-light\">initials-light</option><option value=\"image\">image</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" id=\"ava-demo-size\" onchange=\"updateAvatarDemo()\"><option value=\"20\">20px</option><option value=\"24\">24px</option><option value=\"32\">32px</option><option value=\"40\">40px</option><option value=\"48\">48px</option><option value=\"64\" selected=\"\">64px</option><option value=\"90\">90px</option></select></div></div></div></div>",
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
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "ava-spec-main",
        "demoKey": "main",
        "title": "Avatar",
        "node": "17143:4488",
        "description": "A circular avatar at seven sizes — the user’s initials on a dark or light circle, or a photo. Each size carries its own DS text style.",
        "previewHtml": "<div id=\"avatar-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": avatarDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "dark-initials",
                "prop": "type"
              },
              {
                "key": "size",
                "value": "64px",
                "prop": "size"
              },
              {
                "key": "Initials",
                "value": "DM",
                "prop": "initials"
              },
              {
                "key": "Resolved variant",
                "value": "17143:4531 · 64 × 64",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Circle",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "type:initials-light": {
                    "value": "#F6F9FD",
                    "swatch": "#F6F9FD"
                  },
                  "type:image": {
                    "value": "#C2CFE5 — photo placeholder",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Initials",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF",
                "variants": {
                  "type:initials-light": {
                    "value": "#2340A9",
                    "swatch": "#2340A9"
                  },
                  "type:image": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Ring",
                "value": "#E5EBF4",
                "token": "—",
                "swatch": "#E5EBF4"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "64 × 64",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Shape",
                "value": "Circle · radius full",
                "mono": true
              },
              {
                "key": "Ring",
                "value": "3 centred",
                "mono": true,
                "prop": "stroke-readout"
              },
              {
                "key": "Initials font",
                "value": "31 / 35 · tracking 0",
                "mono": true,
                "prop": "font-readout",
                "variants": {
                  "type:image": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#initials",
                "value": "Primary/Headlines/Region",
                "mono": true,
                "prop": "style-readout",
                "variants": {
                  "type:image": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBAvatar(\n    initials: \"DM\",\n    type: .darkInitials,\n    size: .px64\n)",
        "compose": "EBAvatar(\n    initials = \"DM\",\n    type = EBAvatarType.DarkInitials,\n    size = EBAvatarSize.Px64\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Read off <code>get_node_info</code> across the 21 variants of set <code>17143:4488</code>; nothing changes with size. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "dark-initials",
          "initials-light",
          "image"
        ],
        "rows": [
          {
            "role": "Circle",
            "token": "—",
            "values": [
              "#005CE5",
              "#F6F9FD",
              "#C2CFE5"
            ]
          },
          {
            "role": "Initials",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#2340A9",
              "–"
            ]
          },
          {
            "role": "Ring",
            "token": "—",
            "values": [
              "#E5EBF4",
              "#E5EBF4",
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
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:avatar:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.avatar.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Set <code>17143:4488</code> has two axes and no booleans. The size enum carries the initials’ text style with it — each of the seven sizes uses a different one.",
      "rows": [
        {
          "figma": "type — dark-initials, image, initials-light",
          "swift": "<code>type: .darkInitials / .image / .initialsLight</code>",
          "compose": "<code>type = EBAvatarType.DarkInitials / Image / InitialsLight</code>"
        },
        {
          "figma": "size — 90, 64, 48, 40, 32, 24, 20",
          "swift": "<code>size: .px90 … .px20</code>",
          "compose": "<code>size = EBAvatarSize.Px90 … Px20</code>"
        },
        {
          "figma": "— <code>#initials</code>",
          "swift": "<code>initials: String</code>",
          "compose": "<code>initials: String</code>"
        },
        {
          "figma": "— <code>replace here - image</code>",
          "swift": "<code>image: Image</code>",
          "compose": "<code>image: Painter</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Avatar/EBAvatar.swift",
        "compose": "android/components/avatar/EBAvatar.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "dark-initials · 64px",
        "swift": "<span class=\"cmt\">// type=dark-initials, size=64px — 17143:4531; #005CE5 circle, white initials at 31/35.</span>\nEBAvatar(\n    initials: \"DM\",\n    type: .darkInitials,\n    size: .px64\n)",
        "compose": "<span class=\"cmt\">// type=dark-initials, size=64px — 17143:4531; #005CE5 circle, white initials at 31/35.</span>\nEBAvatar(\n    initials = \"DM\",\n    type = EBAvatarType.DarkInitials,\n    size = EBAvatarSize.Px64\n)"
      },
      {
        "subheading": "initials-light · 40px",
        "swift": "<span class=\"cmt\">// type=initials-light, size=40px — 17143:4517; #F6F9FD circle, #2340A9 initials at 18/23.</span>\nEBAvatar(\n    initials: \"LM\",\n    type: .initialsLight,\n    size: .px40\n)",
        "compose": "<span class=\"cmt\">// type=initials-light, size=40px — 17143:4517; #F6F9FD circle, #2340A9 initials at 18/23.</span>\nEBAvatar(\n    initials = \"LM\",\n    type = EBAvatarType.InitialsLight,\n    size = EBAvatarSize.Px40\n)"
      },
      {
        "subheading": "image · 90px",
        "swift": "<span class=\"cmt\">// type=image, size=90px — 17143:4548; the ellipse is the photo placeholder.</span>\nEBAvatar(\n    image: Image(\"profile\"),\n    size: .px90\n)",
        "compose": "<span class=\"cmt\">// type=image, size=90px — 17143:4548; the ellipse is the photo placeholder.</span>\nEBAvatar(\n    image = painterResource(R.drawable.profile),\n    size = EBAvatarSize.Px90\n)"
      },
      {
        "subheading": "20px in a dense list",
        "swift": "<span class=\"cmt\">// type=dark-initials, size=20px — 17143:4489; initials drop to 10/10.</span>\nEBAvatar(initials: \"DM\", type: .darkInitials, size: .px20)",
        "compose": "<span class=\"cmt\">// type=dark-initials, size=20px — 17143:4489; initials drop to 10/10.</span>\nEBAvatar(initials = \"DM\", type = EBAvatarType.DarkInitials, size = EBAvatarSize.Px20)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Decorative by default",
        "ios": "An avatar beside a name is decorative — <code>.accessibilityHidden(true)</code> so the name is not read twice.",
        "android": "<code>contentDescription = null</code>."
      },
      {
        "requirement": "Standalone",
        "ios": "When the avatar is the only identifier, label it with the person’s full name, not the initials.",
        "android": "Same — <code>contentDescription = fullName</code>."
      },
      {
        "requirement": "Initials",
        "ios": "Two letters at most; the circle clips, it does not shrink the text.",
        "android": "Same."
      },
      {
        "requirement": "Tap target",
        "ios": "A tappable avatar below 44pt — 40, 32, 24 and 20 — needs its target expanded with <code>.contentShape</code>.",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code> for 48dp."
      },
      {
        "requirement": "Contrast",
        "ios": "White on the #005CE5 circle is 5.10:1. #2340A9 on #F6F9FD is 9.32:1. Both pass at every size.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use dark-initials as the default and initials-light on a coloured or busy surface.",
        "dontText": "Don’t mix both types in one list."
      },
      {
        "doText": "Match the size to the row — 64 and 90 for profile headers, 32 and below in lists.",
        "dontText": "Don’t scale an avatar between the built sizes; each one carries its own text style."
      },
      {
        "doText": "Fall back to initials when the photo has not been set.",
        "dontText": "Don’t ship the grey ellipse as a finished state — it is a placeholder."
      },
      {
        "doText": "Keep initials to the person’s first and last initial.",
        "dontText": "Don’t put three letters in a 20px circle."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>container</code>, <code>background</code> and <code>#initials</code> are clear, but the image variant’s layer is called <code>replace here - image</code> — an instruction, not a name."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Both axes are lowercase where the DS uses PascalCase, the values mix word order — <code>dark-initials</code> against <code>initials-light</code> — and <code>size</code> carries the <code>px</code> suffix inside the value."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All seven sizes resolve <code>matched</code>, each to its own style — Spotlight, Region, Section, Block, Multi-line Label/Small, Label/Fine and Label/Tiny. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>EBAvatar</code> with a type enum, a size enum and either initials or an image."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A display element; any pressed state belongs to whatever wraps it."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The photo is a plain ellipse rather than a SLOT, so there is no swap list for it."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Two axes and one text layer are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 21,
      "description": "<code>type</code> (3) × <code>size</code> (7) = 21 variants, all built. The initials scale with the circle and each size uses its own DS text style.",
      "columns": [
        "type",
        "size",
        "Node ID",
        "Dimensions",
        "Initials font",
        "Text style"
      ],
      "rows": [
        {
          "cells": [
            "dark-initials",
            "90px",
            "<code>17143:4539</code>",
            "90 × 90",
            "35 / 38",
            "Primary/Headlines/Spotlight",
            "3"
          ]
        },
        {
          "cells": [
            "initials-light",
            "90px",
            "<code>17143:4542</code>",
            "90 × 90",
            "35 / 38",
            "Primary/Headlines/Spotlight",
            "3"
          ]
        },
        {
          "cells": [
            "image",
            "90px",
            "<code>17143:4548</code>",
            "90 × 90",
            "–",
            "–",
            "3"
          ]
        },
        {
          "cells": [
            "dark-initials",
            "64px",
            "<code>17143:4531</code>",
            "64 × 64",
            "31 / 35",
            "Primary/Headlines/Region",
            "3"
          ]
        },
        {
          "cells": [
            "initials-light",
            "64px",
            "<code>17143:4535</code>",
            "64 × 64",
            "31 / 35",
            "Primary/Headlines/Region",
            "3"
          ]
        },
        {
          "cells": [
            "image",
            "64px",
            "<code>17143:4546</code>",
            "64 × 64",
            "–",
            "–",
            "3"
          ]
        },
        {
          "cells": [
            "dark-initials",
            "48px",
            "<code>17143:4523</code>",
            "48 × 48",
            "22 / 26",
            "Primary/Headlines/Section",
            "3"
          ]
        },
        {
          "cells": [
            "initials-light",
            "48px",
            "<code>17143:4526</code>",
            "48 × 48",
            "22 / 26",
            "Primary/Headlines/Section",
            "3"
          ]
        },
        {
          "cells": [
            "image",
            "48px",
            "<code>17143:4529</code>",
            "48 × 48",
            "–",
            "–",
            "3"
          ]
        },
        {
          "cells": [
            "dark-initials",
            "40px",
            "<code>17143:4513</code>",
            "40 × 40",
            "18 / 23",
            "Primary/Headlines/Block",
            "2"
          ]
        },
        {
          "cells": [
            "initials-light",
            "40px",
            "<code>17143:4517</code>",
            "40 × 40",
            "18 / 23",
            "Primary/Headlines/Block",
            "2"
          ]
        },
        {
          "cells": [
            "image",
            "40px",
            "<code>17143:4521</code>",
            "40 × 40",
            "–",
            "–",
            "2"
          ]
        },
        {
          "cells": [
            "dark-initials",
            "32px",
            "<code>17143:4505</code>",
            "32 × 32",
            "14 / 16",
            "Primary/Multi-line Label/Small",
            "2"
          ]
        },
        {
          "cells": [
            "initials-light",
            "32px",
            "<code>17143:4508</code>",
            "32 × 32",
            "14 / 16",
            "Primary/Multi-line Label/Small",
            "2"
          ]
        },
        {
          "cells": [
            "image",
            "32px",
            "<code>17143:4511</code>",
            "32 × 32",
            "–",
            "–",
            "2"
          ]
        },
        {
          "cells": [
            "dark-initials",
            "24px",
            "<code>17143:4497</code>",
            "24 × 24",
            "12 / 12",
            "Primary/Label/Fine",
            "1.5"
          ]
        },
        {
          "cells": [
            "initials-light",
            "24px",
            "<code>17143:4500</code>",
            "24 × 24",
            "12 / 12",
            "Primary/Label/Fine",
            "1.5"
          ]
        },
        {
          "cells": [
            "image",
            "24px",
            "<code>17143:4503</code>",
            "24 × 24",
            "–",
            "–",
            "1.5"
          ]
        },
        {
          "cells": [
            "dark-initials",
            "20px",
            "<code>17143:4489</code>",
            "20 × 20",
            "10 / 10",
            "Primary/Label/Tiny",
            "1.25"
          ]
        },
        {
          "cells": [
            "initials-light",
            "20px",
            "<code>17143:4492</code>",
            "20 × 20",
            "10 / 10",
            "Primary/Label/Tiny",
            "1.25"
          ]
        },
        {
          "cells": [
            "image",
            "20px",
            "<code>17143:4495</code>",
            "20 × 20",
            "–",
            "–",
            "1.25"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Ring widths read exactly · node 17143:4488",
      "rows": [
        {
          "body": "<strong>The ring is thicker than the preview had it, and stepped rather than proportional</strong> — 3 at 90, 64 and 48, 2 at 40 and 32, 1.5 at 24, 1.25 at 20. Figma draws one circle with a fill and a centred #E5EBF4 stroke inset by half its width, so the ring's outer edge is the frame edge.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The widths come from <code>get_svg</code>, not a measurement.</strong> <code>get_node_info</code> exposes the stroke's colour but neither its weight nor its alignment; the SVG export carries both, so the earlier “measured, not read” note is closed.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "The ring sits outside the fill · node 17143:4488",
      "rows": [
        {
          "body": "<strong>The #E5EBF4 ring is drawn outside the coloured circle.</strong> The variant's box is the full diameter and the fill is inset by the stroke, so a 64 avatar is a 60 blue circle inside a 2 ring — the preview had it as a 1px centred stroke and it barely showed.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The ring's weight is measured, not read.</strong> The plugin exposes neither <code>strokeWeight</code> nor <code>strokeAlign</code>; the width comes from <code>export_node_as_image</code> — about 2 at 64 — and the preview scales it with the circle. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 17143:4488",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>type</code> and <code>size</code>, plus an Initials input for the component’s own text layer. The three cards on retired nodes are replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> A circle of the chosen size with a #E5EBF4 stroke: dark-initials #005CE5 with white initials, initials-light #F6F9FD with #2340A9, image a #C2CFE5 placeholder ellipse.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The initials scale with the circle</strong> — 35/38, 31/35, 22/26, 18/23, 14/16, 12/12 and 10/10 from 90 down to 20 — and the card reads the font per size rather than deriving it.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>All seven sizes resolve to their own DS text style</strong>, matched: Headlines/Spotlight, Region, Section, Block, then Multi-line Label/Small, Label/Fine and Label/Tiny.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:avatar:2.0.0</code>, a four-row mapping, four snippets and a 21-row inventory carrying each size’s font and text style.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Property naming needs a pass.</strong> Both axes are lowercase, <code>dark-initials</code> and <code>initials-light</code> put the same two words in opposite order, and <code>size</code> bakes <code>px</code> into every value. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The photo is a plain ellipse named <code>replace here - image</code></strong> — an instruction rather than a name, and not a SLOT, so there is no swap list. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>Four sizes are below the minimum tap target</strong> — 40, 32, 24 and 20 — so a tappable avatar needs its target expanded. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the earlier assessment.</strong> <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
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
