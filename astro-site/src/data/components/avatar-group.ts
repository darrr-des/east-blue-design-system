import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/avatar-group.js`.
// Panel mirrors the property panel of set 18276:4554 (Avatar Group_New):
// one axis, which is all the set exposes. The overflow tile's "+5" is
// baked into that variant, not a property.
const avatarGroupDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'layout',
        prop: 'layout',
        defaultValue: 'pair',
        options: [
          { value: 'pair',     label: 'pair' },
          { value: 'overflow', label: 'overflow' },
          { value: 'quad',     label: 'quad' },
          { value: 'trio',     label: 'trio' },
        ],
      },
    ],
  },
];

export const avatarGroup: ComponentData = {
  "meta": {
    "slug": "avatar-group",
    "name": "Avatar Group",
    "node": "18276:4554",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18276-4554",
    "description": "Stacked or overlapping avatars used to show participant lists — conversation members, shared documents, collaboration indicators.",
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
    "navGroup": "Avatar",
    "verdict": {
      "kind": "fix",
      "title": "All structural issues resolved",
      "text": "Property renamed to <code>layout</code> with semantic values ✓. Overflow variant added ✓. Inner avatars repointed to canonical Avatar via instance swap ✓. Only C7 (Code Connect) remains — tracked universally across all components."
    }
  },
  "overview": {
    "inContextNote": "How the avatar group appears in a real product screen — conversation list where grouped chats display stacked avatars (DX Team, David's Surprise Party) alongside single-avatar threads.",
    "inContextHtml": "<img class=\"ctx-img\" src=\"/assets/previews/avatar-group-in-context.png\" alt=\"Avatar Group component shown in the GCash messaging/chat list, where group conversations display 2–3 stacked circular avatars\" >",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"avg-demo-preview\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">DM</text><circle cx=\"28\" cy=\"28\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"28\" y=\"31\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">LM</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">layout</span><select class=\"demo-panel-select\" id=\"avg-demo-count\" onchange=\"updateAvatarGroupDemo()\"><option value=\"pair\" selected=\"\">pair</option><option value=\"trio\">trio</option><option value=\"quad\">quad</option><option value=\"overflow\">overflow</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Fits participant lists and collaboration indicators. 4 variants (pair/trio/quad/overflow) cover 2–4 visible avatars plus \"+N\" overflow for larger groups. Fixed 48×48 container — suitable for most list/row contexts."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Group carries its own overlap positioning, border overlap treatment, and fixed dimensions. All colors token-bound."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Property renamed from <code>no. of initals</code> → <code>layout</code> with semantic values (<code>pair</code>/<code>trio</code>/<code>quad</code>/<code>overflow</code>). C2 resolved. Inherits the <code>main/avatar/brand/intials</code> typo from Avatar's shared variable collection (tracked under Avatar, not an Avatar Group blocker)."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "All inner avatars are instances of the canonical Avatar component (<code>17143:4488</code>). Changes to Avatar now propagate to Avatar Group automatically. Compositional inheritance restored."
      }
    ],
    "behavior": [
      {
        "state": "2 avatars",
        "ios": "yes",
        "android": "yes",
        "property": "layout=pair",
        "notes": "Diagonal overlap — top-left + bottom-right"
      },
      {
        "state": "3 avatars",
        "ios": "yes",
        "android": "yes",
        "property": "layout=trio",
        "notes": "Triangle arrangement"
      },
      {
        "state": "4 avatars",
        "ios": "yes",
        "android": "yes",
        "property": "layout=quad",
        "notes": "2×2 grid"
      },
      {
        "state": "Overflow (5+)",
        "ios": "yes",
        "android": "yes",
        "property": "layout=overflow",
        "notes": "3 avatars + \"+N\" badge in bottom-right slot. Uses the same default/light style as the avatar it replaces."
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Display-only. Tap behavior handled by parent container."
      }
    ],
    "resolved": [
      {
        "body": "Property renamed: <code>no. of initals</code> → <code>layout</code> with semantic values (<code>pair</code>/<code>trio</code>/<code>quad</code>/<code>overflow</code>). Fixes typo, removes spaces/dots, replaces pseudo-numeric strings with true enum values. Maps cleanly to SwiftUI <code>EBAvatarGroupLayout.pair/.trio/.quad/.overflow</code> / Compose <code>EBAvatarGroupLayout.Pair</code> etc. <span class=\"tag-fixed\">C2 Fixed</span>"
      },
      {
        "body": "Overflow variant <code>layout=overflow</code> added — bottom-right slot shows \"+N\" badge instead of a 4th avatar. Handles groups larger than 4. <span class=\"tag-fixed\">C5 Fixed</span>"
      },
      {
        "body": "Inner avatars repointed via instance swap to the canonical Avatar component (<code>17143:4488</code>). Previously referenced a duplicate Avatar at <code>21:94766</code> — now all 4 variants inherit from the canonical source. Compositional pattern restored: changes to Avatar will propagate here automatically. <span class=\"tag-fixed\">C6 Fixed</span>"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structural work (count → layout rename, overflow variant, instance swap to canonical Avatar) is complete — registration can proceed.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add size variants.",
        "body": "Current 48×48 container is fixed — bigger groups (5+ avatars) benefit from a larger container for readability. Propose <code>groupSize = small | medium | large</code> with appropriate inner avatar sizes.",
        "tag": "Property"
      },
      {
        "headline": "Deprecate the duplicate Avatar at <code>21:94766</code>.",
        "body": "Now that Avatar Group points at the canonical <code>17143:4488</code>, the duplicate should be marked deprecated and removed in a future DS cleanup pass.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Layouts",
    "specCards": [
      {
        "cardKey": "avg-spec-main",
        "demoKey": "main",
        "title": "Avatar Group",
        "node": "18276:4554",
        "description": "A 48 × 48 cluster of Avatar_New tiles — two overlapping at 32, or three or four at 24, with the last tile as a “+N” counter.",
        "previewHtml": "<div id=\"avatar-group-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": avatarGroupDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "layout",
                "value": "pair",
                "prop": "layout"
              },
              {
                "key": "Tiles",
                "value": "2",
                "prop": "count-readout"
              },
              {
                "key": "Tile",
                "value": "Avatar_New instance"
              },
              {
                "key": "Resolved variant",
                "value": "18276:4555 · 48 × 48",
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
                "key": "Dark tile",
                "value": "#005CE5 / #FFFFFF",
                "token": "—",
                "swatch": "#005CE5"
              },
              {
                "key": "Light tile",
                "value": "#F6F9FD / #2340A9",
                "token": "—",
                "swatch": "#F6F9FD"
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
                "value": "48 × 48",
                "mono": true
              },
              {
                "key": "Tile",
                "value": "32 × 32",
                "mono": true,
                "prop": "tile-readout"
              },
              {
                "key": "Ring",
                "value": "2 centred",
                "mono": true,
                "variants": {
                  "layout:trio": {
                    "value": "1.5 centred"
                  },
                  "layout:quad": {
                    "value": "1.5 centred"
                  },
                  "layout:overflow": {
                    "value": "1.5 centred"
                  }
                }
              },
              {
                "key": "Placement",
                "value": "Dark (0, 0) · light (16, 16) — overlapping",
                "mono": true,
                "variants": {
                  "layout:trio": {
                    "value": "Dark (12, 0) · dark (0, 24) · light (24, 24)"
                  },
                  "layout:quad": {
                    "value": "2 × 2 grid — dark on top, light beneath"
                  },
                  "layout:overflow": {
                    "value": "2 × 2 grid — the last tile is the counter"
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
                "key": "Tile initials",
                "value": "Primary/Multi-line Label/Small",
                "mono": true,
                "variants": {
                  "layout:trio": {
                    "value": "Primary/Label/Fine"
                  },
                  "layout:quad": {
                    "value": "Primary/Label/Fine"
                  },
                  "layout:overflow": {
                    "value": "Primary/Label/Fine"
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBAvatarGroup(\n    avatars: people.prefix(2),\n    layout: .pair\n)",
        "compose": "EBAvatarGroup(\n    avatars = people.take(2),\n    layout = EBAvatarGroupLayout.Pair\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Tile",
        "description": "Every tile is an Avatar_New instance, so the colours are that component’s. Read off <code>get_node_info</code> on the four variants of set <code>18276:4554</code>; token paths could not be read.",
        "columns": [
          "Fill",
          "Initials"
        ],
        "rows": [
          {
            "role": "Dark tile",
            "token": "—",
            "values": [
              "#005CE5",
              "#FFFFFF"
            ]
          },
          {
            "role": "Light tile / counter",
            "token": "—",
            "values": [
              "#F6F9FD",
              "#2340A9"
            ]
          },
          {
            "role": "Ring",
            "token": "—",
            "values": [
              "#E5EBF4",
              "–"
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
      "footnote": "Ships with the Avatar package. Not yet published — these are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Set <code>18276:4554</code> has one axis. Natively the layout follows the number of avatars passed in, so the enum is a fallback rather than a parameter callers set by hand.",
      "rows": [
        {
          "figma": "layout — pair, overflow, quad, trio",
          "swift": "<code>layout: .pair / .trio / .quad / .overflow</code>",
          "compose": "<code>layout = EBAvatarGroupLayout.Pair / Trio / Quad / Overflow</code>"
        },
        {
          "figma": "Tile — Avatar_New instance (32 on pair, 24 elsewhere)",
          "swift": "<code>avatars: [EBAvatarModel]</code>",
          "compose": "<code>avatars: List&lt;EBAvatarModel&gt;</code>"
        },
        {
          "figma": "Counter tile — <code>Overflow</code> instance",
          "swift": "<code>overflow: Int</code>",
          "compose": "<code>overflow: Int</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Avatar/EBAvatarGroup.swift",
        "compose": "android/components/avatar/EBAvatarGroup.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "pair",
        "swift": "<span class=\"cmt\">// layout=pair — 18276:4555, 48 × 48; two 32 tiles overlapping.</span>\nEBAvatarGroup(\n    avatars: people.prefix(2),\n    layout: .pair\n)",
        "compose": "<span class=\"cmt\">// layout=pair — 18276:4555, 48 × 48; two 32 tiles overlapping.</span>\nEBAvatarGroup(\n    avatars = people.take(2),\n    layout = EBAvatarGroupLayout.Pair\n)"
      },
      {
        "subheading": "trio",
        "swift": "<span class=\"cmt\">// layout=trio — 18276:4558; three 24 tiles, one above two.</span>\nEBAvatarGroup(\n    avatars: people.prefix(3),\n    layout: .trio\n)",
        "compose": "<span class=\"cmt\">// layout=trio — 18276:4558; three 24 tiles, one above two.</span>\nEBAvatarGroup(\n    avatars = people.take(3),\n    layout = EBAvatarGroupLayout.Trio\n)"
      },
      {
        "subheading": "quad",
        "swift": "<span class=\"cmt\">// layout=quad — 18276:4562; four 24 tiles on a 2 × 2 grid.</span>\nEBAvatarGroup(\n    avatars: people.prefix(4),\n    layout: .quad\n)",
        "compose": "<span class=\"cmt\">// layout=quad — 18276:4562; four 24 tiles on a 2 × 2 grid.</span>\nEBAvatarGroup(\n    avatars = people.take(4),\n    layout = EBAvatarGroupLayout.Quad\n)"
      },
      {
        "subheading": "overflow",
        "swift": "<span class=\"cmt\">// layout=overflow — 18276:4585; three tiles and a “+5” counter.</span>\nEBAvatarGroup(\n    avatars: people.prefix(3),\n    overflow: people.count - 3,\n    layout: .overflow\n)",
        "compose": "<span class=\"cmt\">// layout=overflow — 18276:4585; three tiles and a “+5” counter.</span>\nEBAvatarGroup(\n    avatars = people.take(3),\n    overflow = people.size - 3,\n    layout = EBAvatarGroupLayout.Overflow\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "One element",
        "ios": "Group the cluster — <code>.accessibilityElement(children: .ignore)</code> — and label it “Ana, Ben and 5 others”.",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code> with the same phrasing."
      },
      {
        "requirement": "Counter",
        "ios": "Spell it out — “and 5 others”, not “plus five”.",
        "android": "Same."
      },
      {
        "requirement": "Decorative",
        "ios": "When the names are already in the row, hide the group.",
        "android": "<code>contentDescription = null</code>."
      },
      {
        "requirement": "Tap target",
        "ios": "The whole 48 cluster clears 44pt; do not make individual tiles tappable at 24.",
        "android": "Clears 48dp as one target."
      },
      {
        "requirement": "Contrast",
        "ios": "White on #005CE5 is 5.10:1; #2340A9 on #F6F9FD is 9.32:1. Both pass.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use pair for two people, trio and quad for three or four.",
        "dontText": "Don’t use quad for five — that is what overflow is for."
      },
      {
        "doText": "Put the count of the people not shown in the counter.",
        "dontText": "Don’t put the total in it; the three visible tiles already count."
      },
      {
        "doText": "Keep the cluster at 48 so rows line up.",
        "dontText": "Don’t scale the group; the tiles are fixed at 32 and 24."
      },
      {
        "doText": "Order the tiles by relevance — the first is the most prominent.",
        "dontText": "Don’t rely on the tile order to convey rank; it is not announced."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Every tile is an <code>Avatar_New</code> instance and the counter an <code>Overflow</code> instance, but no layer names the positions, so the four layouts are only distinguishable by coordinates."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>layout</code> is lowercase where the DS uses PascalCase, and its values mix a count word (pair, trio, quad) with a behaviour word (overflow)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Colours and text styles come from the Avatar instances, which resolve <code>matched</code> — <code>Primary/Multi-line Label/Small</code> at 32 and <code>Primary/Label/Fine</code> at 24."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one group that takes a list of avatars, but the layout enum duplicates what the list length already says."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A display cluster; any pressed state belongs to whatever wraps it."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Tiles are instances of the Avatar component, so they inherit its ring and text styles."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "One axis and the counter text are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>layout</code> (4) = 4 variants, all built and all 48 × 48. pair uses two 32 tiles; trio, quad and overflow use 24 tiles.",
      "columns": [
        "layout",
        "Tiles",
        "Tile size",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "pair",
            "2",
            "32",
            "<code>18276:4555</code>",
            "48 × 48"
          ]
        },
        {
          "cells": [
            "trio",
            "3",
            "24",
            "<code>18276:4558</code>",
            "48 × 48"
          ]
        },
        {
          "cells": [
            "quad",
            "4",
            "24",
            "<code>18276:4562</code>",
            "48 × 48"
          ]
        },
        {
          "cells": [
            "overflow",
            "3 + counter",
            "24",
            "<code>18276:4585</code>",
            "48 × 48"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Counter control dropped · node 18276:4554",
      "rows": [
        {
          "body": "<strong>The Counter input is gone.</strong> The overflow tile's “+5” is baked into that variant, not a Figma property, so a control for it only invited edits the set cannot express. The native <code>overflow</code> parameter stays in the Code tab, where it belongs.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 18276:4554",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>layout</code> plus a Counter input for the overflow tile’s text. The cards on retired nodes are replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Every layout is 48 × 48: pair is two 32 tiles at (0, 0) and (16, 16); trio is 24s at (12, 0), (0, 24) and (24, 24); quad and overflow are a 2 × 2 grid of 24s, with overflow’s last tile the counter.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Tiles inherit the Avatar ring</strong> — 2 at 32 and 1.5 at 24, centred, from <code>get_svg</code> on the Avatar set.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — a three-row mapping, four snippets and a four-row inventory. It ships with the Avatar package.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The layout enum duplicates the list length.</strong> Natively the cluster can pick its own arrangement from the number of avatars passed in, so three of the four values are redundant. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Naming needs a pass</strong> — <code>layout</code> is lowercase, and its values mix counts (pair, trio, quad) with a behaviour (overflow). <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
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
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Structural closure · node 18276:4554",
      "rows": [
        {
          "body": "<strong>Property renamed</strong> — <code>no. of initals</code> → <code>layout</code>. Values changed from pseudo-numeric strings (2/3/4/5+) to semantic enum values (pair/trio/quad/overflow). Fixes typo, spaces, and dots in one pass. Clean native enum mapping.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        },
        {
          "body": "<strong>Overflow variant added</strong> — <code>layout=overflow</code> displays 3 avatars + a \"+N\" badge in the 4th slot. Handles groups larger than 4.\n          <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Fixed"
          }
        },
        {
          "body": "<strong>Inner avatars repointed to canonical Avatar</strong> — Previously referenced a duplicate Avatar component at <code>21:94766</code>. All 4 variants now use instances of the canonical Avatar at <code>17143:4488</code>. Compositional inheritance restored.\n          <span class=\"tag-fixed\">Swapped</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Fixed"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "April 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Structural closure · node 18276:4554",
      "rows": [
        {
          "body": "<strong>Property renamed</strong> — <code>no. of initals</code> → <code>layout</code>. Values changed from pseudo-numeric strings (2/3/4/5+) to semantic enum values (pair/trio/quad/overflow). Fixes typo, spaces, and dots in one pass. Clean native enum mapping.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        },
        {
          "body": "<strong>Overflow variant added</strong> — <code>layout=overflow</code> displays 3 avatars + a \"+N\" badge in the 4th slot. Handles groups larger than 4.\n          <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Fixed"
          }
        },
        {
          "body": "<strong>Inner avatars repointed to canonical Avatar</strong> — Previously referenced a duplicate Avatar component at <code>21:94766</code>. All 4 variants now use instances of the canonical Avatar at <code>17143:4488</code>. Compositional inheritance restored.\n          <span class=\"tag-fixed\">Swapped</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Fixed"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 21:94828",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (2/3/4 avatars) in a fixed 48×48 container. Used for participant lists, collaboration indicators.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Property name has typo and spaces</strong> — <code>no. of initals</code>: missing second \"i\", contains dot + space. Values are strings instead of integers. Blocks native enum mapping.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Fixed"
          }
        },
        {
          "body": "<strong>No overflow variant</strong> — Component supports only 2/3/4 avatars. Most DS patterns include a \"+N\" overflow badge for groups larger than the max shown.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Fixed"
          }
        },
        {
          "body": "<strong>Inner avatars hardcoded, not Avatar instances</strong> — The 24px child avatars are duplicated as plain containers inside this component. If the main Avatar changes, this group won't inherit updates.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Fixed"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
