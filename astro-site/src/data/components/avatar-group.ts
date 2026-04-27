import type { ComponentData } from '../types';

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
    "navGroup": "Avatar"
  },
  "overview": {
    "inContextNote": "How the avatar group appears in a real product screen — conversation list where grouped chats display stacked avatars (DX Team, David's Surprise Party) alongside single-avatar threads.",
    "inContextHtml": "<img class=\"ctx-img\" src=\"/assets/previews/avatar-group-in-context.png\" alt=\"Avatar Group component shown in the GCash messaging/chat list, where group conversations display 2–3 stacked circular avatars\" >",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"avg-demo-preview\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text><circle cx=\"28\" cy=\"28\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"28\" y=\"31\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">LM</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">layout</span><select class=\"demo-panel-select\" id=\"avg-demo-count\" onchange=\"updateAvatarGroupDemo()\"><option value=\"pair\" selected=\"\">pair</option><option value=\"trio\">trio</option><option value=\"quad\">quad</option><option value=\"overflow\">overflow</option></select></div></div></div></div>",
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
    "specCards": [
      {
        "cardKey": "avg-spec-2",
        "title": "Pair — 2 avatars",
        "node": "18276:4555",
        "description": "Two avatars placed diagonally. Top-left uses dark-initials (brand), bottom-right uses initials-light (default).",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Pair",
                "mono": false
              },
              {
                "key": "Avatar count",
                "value": "2",
                "mono": false
              },
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Brand bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Brand token",
                "value": "avatar/brand/bg",
                "mono": true
              },
              {
                "key": "Brand initials",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Default bg",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Default token",
                "value": "avatar/default/bg",
                "mono": true
              },
              {
                "key": "Default initials",
                "value": "#2340A9",
                "mono": true
              },
              {
                "key": "Border (all)",
                "value": "#E5EBF4",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": true
              },
              {
                "key": "Inner avatar",
                "value": "24 &#215; 24",
                "mono": true
              },
              {
                "key": "Inner radius",
                "value": "12px (circle)",
                "mono": true
              },
              {
                "key": "Inner border",
                "value": "1.5px solid",
                "mono": true
              },
              {
                "key": "Overlap offset",
                "value": "16px diagonal",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Initials style",
                "value": "Primary/Label/Bold/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size/lh",
                "value": "10px / 12px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars<span class=\"syn-punc\">:</span> members<span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Renders Pair (2 avatars) automatically when members.count == 2</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars <span class=\"syn-eq\">=</span> members<span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Renders Pair (2 avatars) automatically when members.size == 2</span></code>",
        "previewHtml": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text><circle cx=\"28\" cy=\"28\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"28\" y=\"31\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">LM</text></svg>"
      },
      {
        "cardKey": "avg-spec-3",
        "title": "Trio — 3 avatars",
        "node": "18276:4558",
        "description": "Three avatars in a triangular arrangement. Two on top (dark + dark), one default at bottom.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Trio",
                "mono": false
              },
              {
                "key": "Avatar count",
                "value": "3",
                "mono": false
              },
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Brand bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Brand token",
                "value": "avatar/brand/bg",
                "mono": true
              },
              {
                "key": "Brand initials",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Default bg",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Default token",
                "value": "avatar/default/bg",
                "mono": true
              },
              {
                "key": "Default initials",
                "value": "#2340A9",
                "mono": true
              },
              {
                "key": "Border (all)",
                "value": "#E5EBF4",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": true
              },
              {
                "key": "Inner avatar",
                "value": "24 &#215; 24",
                "mono": true
              },
              {
                "key": "Inner radius",
                "value": "12px (circle)",
                "mono": true
              },
              {
                "key": "Inner border",
                "value": "1.5px solid",
                "mono": true
              },
              {
                "key": "Overlap offset",
                "value": "12px horizontal, 24px vertical",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Initials style",
                "value": "Primary/Label/Bold/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size/lh",
                "value": "10px / 12px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars<span class=\"syn-punc\">:</span> members<span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Renders Trio (3 avatars) automatically when members.count == 3</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars <span class=\"syn-eq\">=</span> members<span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Renders Trio (3 avatars) automatically when members.size == 3</span></code>",
        "previewHtml": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"24\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text><circle cx=\"12\" cy=\"36\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"39\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">LM</text><circle cx=\"36\" cy=\"36\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"36\" y=\"39\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">AB</text></svg>"
      },
      {
        "cardKey": "avg-spec-4",
        "title": "Quad — 4 avatars",
        "node": "18276:4562",
        "description": "Four avatars in a 2×2 grid. Top row: brand + brand. Bottom row: default + default.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Quad",
                "mono": false
              },
              {
                "key": "Avatar count",
                "value": "4",
                "mono": false
              },
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Brand bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Brand token",
                "value": "avatar/brand/bg",
                "mono": true
              },
              {
                "key": "Brand initials",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Default bg",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Default token",
                "value": "avatar/default/bg",
                "mono": true
              },
              {
                "key": "Default initials",
                "value": "#2340A9",
                "mono": true
              },
              {
                "key": "Border (all)",
                "value": "#E5EBF4",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": true
              },
              {
                "key": "Inner avatar",
                "value": "24 &#215; 24",
                "mono": true
              },
              {
                "key": "Inner radius",
                "value": "12px (circle)",
                "mono": true
              },
              {
                "key": "Inner border",
                "value": "1.5px solid",
                "mono": true
              },
              {
                "key": "Overlap offset",
                "value": "24px grid step",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Initials style",
                "value": "Primary/Label/Bold/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size/lh",
                "value": "10px / 12px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars<span class=\"syn-punc\">:</span> members<span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Renders Quad (4 avatars) automatically when members.count == 4</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars <span class=\"syn-eq\">=</span> members<span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Renders Quad (4 avatars) automatically when members.size == 4</span></code>",
        "previewHtml": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text><circle cx=\"36\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"36\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">LM</text><circle cx=\"12\" cy=\"36\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"39\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">AB</text><circle cx=\"36\" cy=\"36\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"36\" y=\"39\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">CD</text></svg>"
      },
      {
        "cardKey": "avg-spec-5plus",
        "title": "Overflow — 3 + \"+N\" badge",
        "node": "18276:4585",
        "description": "Overflow variant — 3 avatars plus a \"+N\" badge in the bottom-right position. Use when group has 5 or more members. The \"+N\" uses the default/light avatar style with overridable text content.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Overflow",
                "mono": false
              },
              {
                "key": "Avatar count",
                "value": "3 + \"+N\"",
                "mono": false
              },
              {
                "key": "Badge",
                "value": "\"+N\" (overridable text)",
                "mono": false
              },
              {
                "key": "Badge style",
                "value": "default/light avatar",
                "mono": false
              },
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Brand bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Brand token",
                "value": "avatar/brand/bg",
                "mono": true
              },
              {
                "key": "Brand initials",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Default bg",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Default token",
                "value": "avatar/default/bg",
                "mono": true
              },
              {
                "key": "Default initials",
                "value": "#2340A9",
                "mono": true
              },
              {
                "key": "Border (all)",
                "value": "#E5EBF4",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Container",
                "value": "48 &#215; 48",
                "mono": true
              },
              {
                "key": "Inner avatar",
                "value": "24 &#215; 24",
                "mono": true
              },
              {
                "key": "Inner radius",
                "value": "12px (circle)",
                "mono": true
              },
              {
                "key": "Inner border",
                "value": "1.5px solid",
                "mono": true
              },
              {
                "key": "Overlap offset",
                "value": "24px grid step · badge in bottom-right",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Initials style",
                "value": "Primary/Label/Bold/Small",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size/lh",
                "value": "10px / 12px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>avatars<span class=\"syn-punc\">:</span> members<span class=\"syn-punc\">,</span> overflowFrom<span class=\"syn-punc\">:</span> <span class=\"syn-num\">3</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-cmt\">// Shows first 3 avatars + \"+N\" badge when members.count &gt; 4</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAvatarGroup</span><span class=\"syn-punc\">(</span>\n    avatars <span class=\"syn-eq\">=</span> members<span class=\"syn-punc\">,</span>\n    overflowFrom <span class=\"syn-eq\">=</span> <span class=\"syn-num\">3</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">DM</text><circle cx=\"36\" cy=\"12\" r=\"11\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"36\" y=\"15\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">LM</text><circle cx=\"12\" cy=\"36\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"12\" y=\"39\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">AB</text><circle cx=\"36\" cy=\"36\" r=\"11\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></circle><text x=\"36\" y=\"39\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"8\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">+5</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Inner avatars use the same tokens as the main Avatar component. See Avatar / Style tab for the full token reference.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Brand avatar bg",
            "token": "main/avatar/brand/bg",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "Brand avatar border",
            "token": "main/avatar/brand/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Brand avatar initials",
            "token": "main/avatar/brand/intials library typo",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Default avatar bg",
            "token": "main/avatar/default/bg",
            "values": [
              "#F6F9FD"
            ]
          },
          {
            "role": "Default avatar border",
            "token": "main/avatar/default/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Default avatar initials",
            "token": "main/avatar/default/initials",
            "values": [
              "#2340A9"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Container size",
            "token": "48 × 48",
            "values": []
          },
          {
            "role": "Inner avatar size",
            "token": "24 × 24",
            "values": []
          },
          {
            "role": "Inner avatar radius",
            "token": "12px",
            "values": []
          },
          {
            "role": "Inner avatar border",
            "token": "1.5px solid",
            "values": []
          },
          {
            "role": "Overlap offset (2 avatars)",
            "token": "16px diagonal",
            "values": []
          },
          {
            "role": "Overlap offset (3 avatars)",
            "token": "12px horizontal, 24px vertical",
            "values": []
          },
          {
            "role": "Overlap offset (4 avatars)",
            "token": "24px grid step",
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:avatar:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "layout=pair",
          "swift": ".ebLayout(.pair)",
          "compose": "layout = EBAvatarGroupLayout.Pair"
        },
        {
          "figma": "layout=trio",
          "swift": ".ebLayout(.trio)",
          "compose": "layout = EBAvatarGroupLayout.Trio"
        },
        {
          "figma": "layout=quad",
          "swift": ".ebLayout(.quad)",
          "compose": "layout = EBAvatarGroupLayout.Quad"
        },
        {
          "figma": "layout=overflow",
          "swift": ".ebLayout(.overflow)",
          "compose": "layout = EBAvatarGroupLayout.Overflow"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Avatar/EBAvatarGroup.swift",
        "compose": "android/components/avatar/EBAvatarGroup.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Pair / trio / quad — pass avatars, layout auto-detected from count</span>\n<span class=\"typ\">EBAvatarGroup</span>(<span class=\"prp\">avatars</span>: [\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"DM\"</span>),\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"LM\"</span>),\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"AB\"</span>)\n])\n\n<span class=\"cmt\">// Overflow — pass full list + max visible count</span>\n<span class=\"typ\">EBAvatarGroup</span>(<span class=\"prp\">avatars</span>: allAvatars, <span class=\"prp\">maxVisible</span>: <span class=\"kw\">3</span>)\n    .<span class=\"fn\">ebLayout</span>(.<span class=\"prp\">overflow</span>)\n    <span class=\"cmt\">// renders 3 avatars + \"+N\" if allAvatars.count > 3</span>",
        "compose": "<span class=\"cmt\">// Pair / trio / quad — pass avatars, layout auto-detected from count</span>\n<span class=\"typ\">EBAvatarGroup</span>(\n    <span class=\"prp\">avatars</span> = <span class=\"fn\">listOf</span>(\n        <span class=\"typ\">Avatar</span>(<span class=\"prp\">initials</span> = <span class=\"str\">\"DM\"</span>),\n        <span class=\"typ\">Avatar</span>(<span class=\"prp\">initials</span> = <span class=\"str\">\"LM\"</span>),\n        <span class=\"typ\">Avatar</span>(<span class=\"prp\">initials</span> = <span class=\"str\">\"AB\"</span>)\n    )\n)\n\n<span class=\"cmt\">// Overflow — pass full list + maxVisible</span>\n<span class=\"typ\">EBAvatarGroup</span>(\n    <span class=\"prp\">avatars</span> = allAvatars,\n    <span class=\"prp\">maxVisible</span> = <span class=\"kw\">3</span>,\n    <span class=\"prp\">layout</span> = <span class=\"typ\">EBAvatarGroupLayout</span>.<span class=\"prp\">Overflow</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"3 participants: Dara, Lara, Alex\")</code>",
        "android": "<code>contentDescription = \"3 participants: ...\"</code>"
      },
      {
        "requirement": "Role",
        "ios": "Decorative if not tappable — use <code>.accessibilityHidden(true)</code> on individual avatars",
        "android": "Same — prefer single group-level semantic"
      },
      {
        "requirement": "Tap target",
        "ios": "48 × 48 container meets iOS HIG when whole group is tappable",
        "android": "Meets Material 48dp minimum"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Avatar Group for 2–4 participants in a list item, header, or shared-with indicator.",
        "dontText": "Use for counts above 4 without an overflow \"+N\" badge — users can't infer total count from a cluster alone."
      },
      {
        "doText": "Provide a single group-level accessibility label listing all participants.",
        "dontText": "Let each avatar announce separately — creates VoiceOver/TalkBack noise."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>Avatar</code>, <code>container</code>. Top-level component set uses \"Avatar Group\" — clean."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Property <code>no. of initals</code> has typo, spaces, and uses string values. Rename to <code>count</code> with integer values."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to Avatar's tokens. Inherits the same typo in <code>intials</code> — tracked under Avatar's open issues."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to stacked avatars via ZStack (iOS) / Box + offset (Compose). Fixed 48×48 and count=2/3/4 don't match a dynamic native list — API should accept an array."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No overflow state for 5+ avatars. Common DS pattern (\"+N\" badge) is missing."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Inner avatars are hardcoded 24px containers, not Avatar component instances. Breaks compositional inheritance — changes to Avatar won't propagate."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "",
      "columns": [
        "layout",
        "Node ID",
        "Size",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "pair",
            "18276:4555",
            "48 × 48",
            "2 avatars — diagonal"
          ]
        },
        {
          "cells": [
            "trio",
            "18276:4558",
            "48 × 48",
            "3 avatars — triangle"
          ]
        },
        {
          "cells": [
            "quad",
            "18276:4562",
            "48 × 48",
            "4 avatars — 2×2 grid"
          ]
        },
        {
          "cells": [
            "overflow",
            "18276:4585",
            "48 × 48",
            "3 avatars + \"+N\" overflow badge"
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
