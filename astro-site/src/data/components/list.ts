import type { ComponentData } from '../types';

export const list: ComponentData = {
  "meta": {
    "slug": "list",
    "name": "List",
    "node": "18482:34737",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-34737",
    "description": "A frame containing 8 hardcoded List Item instances stacked with an 8px gap. No component properties, no variants. Functions as a layout example on the sticker sheet rather than a reusable component.",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "List",
    "verdict": {
      "kind": "remove",
      "title": "Removed — List Item is the published atom",
      "text": "The April assessment offered two paths: remove List from the sticker sheet and publish <a href=\"/components/list-item\">List Item</a> as the atom, or restructure it into a real container that accepts a collection of items. The first was taken, and List is gone from the 2026 rebuild. Consumers stack List Items themselves with auto layout, the same way a plain text list is built. What remains of the family is <a href=\"/components/list-item\">List Item</a> and <a href=\"/components/list-item-asset\">List Item - Asset</a>. Kept as a record of the assessment that drove the removal."
    }
  },
  "overview": {
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "Not reusable — consumers can't populate this with their own items. They must detach or rebuild from List Item atoms."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Carries only the parent flex layout + 8px gap. All real structure lives on the child List Items."
      },
      {
        "name": "Consistent",
        "rating": "fail",
        "note": "Not a component in the DS sense — it's a frame posing as one. Breaks the pattern established by Tabs (container + atom), Menu Grid + Service Item, Avatar Group + Avatar."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Each child is a List Item instance — at least the composition is correct."
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [],
    "recommendations": [],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"list-demo-preview\"><div style=\"display:flex;flex-direction:column;gap:8px;max-width:310px;\"><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:0px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-1 style</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:0px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-1 style</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:16px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-2 style</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:32px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-3 style</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:0px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-1 style</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:0px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-1 style</div></div><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:0px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-1 style</div></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [],
    "colorsTables": [
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Gap between rows",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Direction",
            "token": "—",
            "values": [
              "column"
            ]
          },
          {
            "role": "Alignment",
            "token": "—",
            "values": [
              "items-start"
            ]
          },
          {
            "role": "Width",
            "token": "—",
            "values": [
              "hug (expands to widest child)"
            ]
          },
          {
            "role": "Item count (current demo)",
            "token": "—",
            "values": [
              "8 hardcoded List Item instances"
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
      "rows": []
    },
    "usageSnippets": [],
    "accessibility": [],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Trivial wrapper — List Item children named correctly."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No properties."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Gap bound to <code>space/space-8</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Maps to plain <code>VStack</code> / <code>Column</code>. No DS-specific component needed unless restructured."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Layout only."
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
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Not a linkable DS component in current form."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "",
      "columns": [],
      "rows": []
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Removed from the 2026 rebuild",
      "rows": [
        {
          "body": "<strong>List removed.</strong> The April assessment gave two paths — remove it and publish List Item as the atom, or restructure it into a real container. The first was taken.",
          "delta": { "kind": "resolved", "label": "Removed" }
        },
        {
          "body": "<a href=\"/components/list-item\">List Item</a> and <a href=\"/components/list-item-asset\">List Item - Asset</a> are the family. Both were reassessed against the 2026 Working File and both came back Keep.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "List-level concerns — spacing between rows, dividers — sit with whatever composes the rows, since there is no container component to own them.",
          "delta": { "kind": "resolved", "label": "Documented" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:34737",
      "rows": [
        {
          "body": "<strong>Assessed as layout-only</strong> — Frame of 8 hardcoded List Item instances. Not a reusable component in its current form. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Recommendation: Remove or Restructure</strong> — Either remove from the sticker sheet (List Item is the shipped atom) or restructure into a real container that accepts a collection. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Design Decision"
          }
        }
      ]
    }
  ]
};
