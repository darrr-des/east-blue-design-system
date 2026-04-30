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
      "kind": "fix",
      "title": "Remove or restructure",
      "text": "List today is a frame of 8 hardcoded List Item instances — not a reusable component. Two paths forward: (1) remove it from the sticker sheet and keep List Item as the published atom; (2) restructure into a real container that accepts a collection of items (same approach proposed for Tabs)."
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
    "open": [
      {
        "headline": "Not a real component.",
        "body": "List today is a frame with 8 hardcoded List Item instances — no property set, no variants, no slots. Consumers can't populate it with their own items without detaching and rebuilding from the List Item atom.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Remove List from the sticker sheet.",
        "body": "Publish List Item (and List Item Asset) as the shipped components. Consumers stack List Items themselves using auto-layout — same pattern as plain text lists. Keeps the sticker sheet focused on reusable atoms.",
        "tag": "Family"
      },
      {
        "headline": "Or restructure into a real container.",
        "body": "Expose a single flexible List component with auto-layout that accepts a collection of List Items (same approach proposed for Tabs dropping <code>tabsCount</code>). Native maps to <code>ForEach</code> / <code>LazyColumn</code>. Provides a documented home for list-level concerns like spacing, dividers, or separators.",
        "tag": "Property"
      },
      {
        "headline": "If restructuring",
        "body": ", consider adding list-level props for spacing (<code>gap=8/12/16</code>) and an optional divider between items. These are the decisions that logically belong to a container, not an item.",
        "tag": "Property"
      }
    ],
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
