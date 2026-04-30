import type { ComponentData } from '../types';

export const onboardingTooltip: ComponentData = {
  "meta": {
    "slug": "onboarding-tooltip",
    "name": "Onboarding - Tooltip",
    "node": "51:17066",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=51-17066",
    "description": "A directional tooltip used in onboarding overlays, with a pointer, header, description, and dismiss control.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Tooltip",
    "verdict": {
      "kind": "restructure",
      "title": "Fold into the unified Tooltip; \"Onboarding -\" prefix is misleading (no walkthrough content)",
      "text": "This component, <a href=\"#\">Tooltip V2</a>, and <a href=\"#\">Tooltip Blurred and Transparent</a> model the same primitive with slightly different shapes. Merge into one <code>Tooltip</code> with <code>placement: .top | .right | .bottom | .left</code> (the only axis this sibling ships), <code>appearance: .default | .onboarding | .translucent</code>, <code>hasDismiss</code>, and an optional content/CTA body. Replace the 4 raster pointers with one vector and the raw close image with an <code>icon/close</code> instance. Once merged, rename the sibling that truly supports walkthroughs (with step indicator + Next/Skip) to carry the <code>.onboarding</code> appearance — or drop the name entirely."
    }
  },
  "overview": {
    "inContextNote": "A dismissible tip anchored to a feature element — commonly rendered during first-time user education, feature discovery, and coach-mark flows.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Wallet</text>\n          \n          <circle cx=\"100\" cy=\"42\" r=\"4\" fill=\"#005CE5\"></circle>\n          \n          <path d=\"M98 50 l2 -2 2 2 z\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-linejoin=\"round\"></path>\n          <rect x=\"50\" y=\"50\" width=\"100\" height=\"32\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"></rect>\n          <rect x=\"56\" y=\"56\" width=\"34\" height=\"4\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"56\" y=\"64\" width=\"72\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"56\" y=\"69\" width=\"58\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <path d=\"M138 56 l4 4 M142 56 l-4 4\" stroke=\"#0A2757\" stroke-width=\"1.3\" stroke-linecap=\"round\"></path>\n          \n          <rect x=\"42\" y=\"94\" width=\"60\" height=\"14\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"106\" y=\"94\" width=\"56\" height=\"14\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ont-demo-preview\"><div style=\"display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;\"><div style=\"position:relative;width:336px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;padding:16px;box-sizing:border-box;box-shadow:0 0 4px rgba(2,14,34,0.06);\"><div style=\"position:absolute;width:0;height:0;left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFFFFF;filter:drop-shadow(0 -1px 0 #E5EBF4);\"></div><div style=\"display:flex;align-items:center;gap:24px;width:100%;\"><div style=\"flex:1 0 0;min-width:0;font-family:'Proxima Soft',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;\">Header</div><div style=\"flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M1 1l10 10M11 1L1 11\" stroke=\"#0A2757\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div style=\"font-family:'BarkAda','Proxima Soft',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;margin-top:4px;\">Description goes here</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Placement</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">pointer</span><select class=\"demo-panel-select\" id=\"ont-ctrl-pointer\" onchange=\"updateOntDemo()\"><option value=\"top\" selected=\"\">top</option><option value=\"right\">right</option><option value=\"bottom\">bottom</option><option value=\"left\">left</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content (not exposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">header</span><span class=\"demo-panel-label muted\">always shown</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><span class=\"demo-panel-label muted\">always shown</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">close</span><span class=\"demo-panel-label muted\">always shown</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><span class=\"demo-panel-label muted\">not supported</span></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">icon</span><span class=\"demo-panel-label muted\">not supported</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Works as a dismissible tip anchored to any target. But the \"Onboarding -\" prefix steers consumers toward walkthroughs it can't support (no step indicator, no Next/Skip). Misleading name fragments the primitive. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Surface, type, and spacing bind to <code>main/nudge/*</code> + <code>space/*</code> tokens — shares the collection with Tooltip V2. But the pointer arrow is 4 raster copies of one shape, and the close is an image asset rather than a DS icon instance. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Pointer is modeled as a single enum here, but Tooltip V2 models the same concept as 4 booleans. Siblings should not disagree on the shape of a shared axis. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "No Figma Slot for body content. No way to add an icon, an avatar, or a CTA — consumers who need those must switch components entirely. The primitive is closed. <span class=\"tag-open tag-c4\">C4</span>"
      }
    ],
    "behavior": [
      {
        "state": "Show / hide",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Expected: fade + slight scale-in anchored on the pointer side."
      },
      {
        "state": "Tap close (X)",
        "ios": "yes",
        "android": "yes",
        "property": "Close layer",
        "notes": "Dismiss icon is present but not wired to an interactive property. Close is an image asset, not a button instance."
      },
      {
        "state": "Tap outside",
        "ios": "na",
        "android": "na",
        "property": "Not defined",
        "notes": "Standard tooltip contract — tap-outside dismisses. Should be documented on the component."
      },
      {
        "state": "Primary CTA",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Despite the \"Onboarding\" name, no CTA is provided. Consumers must switch to Tooltip V2 for any advance/skip control."
      },
      {
        "state": "Pressed / Focused on close",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Close is a raw image; no pressed / focused treatment and no hit target metadata."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Name implies walkthrough content that isn't shipped.",
        "body": "<code>Onboarding - Tooltip</code> has no step indicator, no Next/Skip/Back CTAs, no progress dots, no illustration slot — it's just header + description + close. The prefix misleads consumers. Either rename to <code>Tooltip / Placement</code> and fold into the unified Tooltip, or add the actual onboarding axes (step indicator, Next/Skip) before keeping the name.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Three sibling Tooltip components for one primitive.",
        "body": "<code>Tooltip V2</code> (70:14908), this component (51:17066), and <code>Tooltip Blurred and Transparent</code> (49:335349) all model the same floating popover with slightly different shapes. Collapse into one <code>Tooltip</code> with <code>appearance</code> + <code>placement</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Pointer schema disagrees with sibling.",
        "body": "Onboarding - Tooltip models pointer direction as one <code>pointer</code> enum (correct), but Tooltip V2 models the same concept as 4 independent booleans. Siblings in the same family should never disagree on the shape of a shared axis.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pointer triangle is a raster asset.",
        "body": "4 separate image fills (<code>imgPointer</code>, <code>imgPointer1</code>, <code>imgPointer2</code>, <code>imgPointer3</code>) for what should be one vector shape rotated per direction. Replace with a single vector triangle; rotation handled by the <code>placement</code> enum.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Close (X) is an image asset, not a DS icon instance.",
        "body": "The dismiss control uses <code>imgShapeFull</code> inside a generic \"Close\" frame rather than an instance of the DS's <code>icon/close</code>. Hides the icon from a11y labeling and token updates, blocks Code Connect from seeing it as a real control.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No body or CTA slot.",
        "body": "There is no way to add a leading icon, an illustration, a step indicator, or a CTA. Any consumer that needs those must abandon this component for Tooltip V2 — defeating the point of a dedicated \"Onboarding\" sibling.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No dismiss / show states modeled.",
        "body": "Close button is decorative; no Pressed / Focused state on the dismiss control. No <em>appearing / dismissing</em> lifecycle documented.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on the family consolidation. Mapping today's 3-sibling shape to native would cement the wrong schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Fold the 3 Tooltip siblings into one component.",
        "body": "New schema: <code>placement: .top | .right | .bottom | .left</code> (this sibling's only axis), <code>appearance: .default | .onboarding | .translucent</code>, <code>hasArrow: Bool</code>, <code>hasDismiss: Bool</code>, <code>cta: .none | .primary | .primaryAndSecondary</code>, and a <code>leading</code> slot. This sibling's 4 variants collapse into the <code>placement</code> axis of the <code>.default</code> appearance — no dedicated component needed.",
        "tag": "Family"
      },
      {
        "headline": "Rename or retire the \"Onboarding -\" prefix.",
        "body": "The prefix should either be reserved for a sibling that actually ships onboarding affordances (step indicator, Next/Skip, Back) — in which case this component doesn't qualify — or dropped entirely in favor of an <code>appearance: .onboarding</code> enum on the unified Tooltip. Today's name promises content it doesn't deliver.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the 4 raster pointers with one vector triangle.",
        "body": "Today there are 4 separate rasters (top/right/bottom/left). One vector shape, rotated per <code>placement</code>, fills the same role with zero asset burden, scales cleanly, and picks up surface + border token updates automatically.",
        "tag": "Asset"
      },
      {
        "headline": "Instance-swap the close to <code>icon/close</code>.",
        "body": "Use the canonical DS close-icon instance rather than an inline <code>imgShapeFull</code>. Gets you token-driven color, a11y labeling, and press-state handling for free.",
        "tag": "Composition"
      },
      {
        "headline": "Adopt a content slot for body + optional CTA.",
        "body": "The current closed shape (header + description + close, nothing else) is the reason this sibling exists. Adopt the unified Tooltip's content slot and this component disappears into the single source of truth.",
        "tag": "Slot"
      },
      {
        "headline": "Add Pressed / Focused on the close control.",
        "body": "Once the close becomes an icon-button instance rather than an image, states follow the canonical Button/Icon pattern.",
        "tag": "State"
      },
      {
        "headline": "Document the dismiss contract + lifecycle.",
        "body": "Add a description on the component: <em>\"Tap the close X or tap outside to dismiss. Tooltip appears with fade + slight scale from the pointer anchor; dismisses with reverse.\"</em> Close the gap between designer intent and dev implementation.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "pointer=top-—-target-element-above",
        "title": "pointer=top — target element above",
        "node": "51:17065",
        "description": "Pointer triangle above the bubble, surface below. 336 × 90 (pointer adds 12 px on top). Used when the tip describes an element positioned above the tooltip in the flow.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "pointer",
                "value": "top",
                "mono": false
              },
              {
                "key": "Target",
                "value": "element above the tooltip",
                "mono": false
              },
              {
                "key": "Header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Description",
                "value": "true",
                "mono": false
              },
              {
                "key": "Close icon",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "nudge/color/primary/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "nudge/color/primary/border" },
              { "key": "Header", "value": "#0A2757", "token": "nudge/color/primary/label" },
              { "key": "Description", "value": "#6780A9", "token": "nudge/color/primary/description" },
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "296px (max)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 horizontal · 12 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid #E5EBF4",
                "mono": true
              },
              {
                "key": "Gap (header ↔ desc)",
                "value": "4px (space/space-4)",
                "mono": true
              },
              {
                "key": "Pointer size",
                "value": "12 × 8 (width × height)",
                "mono": true
              },
              {
                "key": "Shadow",
                "value": "app/shadow/shadow-low",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Header style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Header font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPointer</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.top</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebOnDismiss</span><span class=\"syn-punc\">(</span><span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">,</span>\n    pointer <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPointer</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Top</span><span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "pointer=bottom-—-target-element-below",
        "title": "pointer=bottom — target element below",
        "node": "51:17063",
        "description": "Pointer triangle below the bubble. 336 × 89. Most common placement for tips anchored to an icon in a toolbar or nav bar.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "pointer",
                "value": "bottom",
                "mono": false
              },
              {
                "key": "Target",
                "value": "element below the tooltip",
                "mono": false
              },
              {
                "key": "Header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Description",
                "value": "true",
                "mono": false
              },
              {
                "key": "Close icon",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "nudge/color/primary/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "nudge/color/primary/border" },
              { "key": "Header", "value": "#0A2757", "token": "nudge/color/primary/label" },
              { "key": "Description", "value": "#6780A9", "token": "nudge/color/primary/description" },
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "296px (max)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 horizontal · 12 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid #E5EBF4",
                "mono": true
              },
              {
                "key": "Gap (header ↔ desc)",
                "value": "4px (space/space-4)",
                "mono": true
              },
              {
                "key": "Pointer size",
                "value": "12 × 8 (width × height)",
                "mono": true
              },
              {
                "key": "Shadow",
                "value": "app/shadow/shadow-low",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Header style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Header font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPointer</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.bottom</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebOnDismiss</span><span class=\"syn-punc\">(</span><span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">,</span>\n    pointer <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPointer</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Bottom</span><span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "pointer=left-—-target-element-to-the-left",
        "title": "pointer=left — target element to the left",
        "node": "51:17062",
        "description": "Pointer triangle on the left edge. 348 × 78 (pointer adds 12 px on the left). Used for tips describing a leading-edge control.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "pointer",
                "value": "left",
                "mono": false
              },
              {
                "key": "Target",
                "value": "element to the left",
                "mono": false
              },
              {
                "key": "Header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Description",
                "value": "true",
                "mono": false
              },
              {
                "key": "Close icon",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "nudge/color/primary/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "nudge/color/primary/border" },
              { "key": "Header", "value": "#0A2757", "token": "nudge/color/primary/label" },
              { "key": "Description", "value": "#6780A9", "token": "nudge/color/primary/description" },
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "296px (max)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 horizontal · 12 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid #E5EBF4",
                "mono": true
              },
              {
                "key": "Gap (header ↔ desc)",
                "value": "4px (space/space-4)",
                "mono": true
              },
              {
                "key": "Pointer size",
                "value": "12 × 8 (width × height)",
                "mono": true
              },
              {
                "key": "Shadow",
                "value": "app/shadow/shadow-low",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Header style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Header font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPointer</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.left</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebOnDismiss</span><span class=\"syn-punc\">(</span><span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">,</span>\n    pointer <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPointer</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Left</span><span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "pointer=right-—-target-element-to-the-right",
        "title": "pointer=right — target element to the right",
        "node": "51:17064",
        "description": "Pointer triangle on the right edge. 348 × 78 (pointer adds 12 px on the right). Used for tips describing a trailing-edge control.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "pointer",
                "value": "right",
                "mono": false
              },
              {
                "key": "Target",
                "value": "element to the right",
                "mono": false
              },
              {
                "key": "Header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Description",
                "value": "true",
                "mono": false
              },
              {
                "key": "Close icon",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "nudge/color/primary/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "nudge/color/primary/border" },
              { "key": "Header", "value": "#0A2757", "token": "nudge/color/primary/label" },
              { "key": "Description", "value": "#6780A9", "token": "nudge/color/primary/description" },
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "296px (max)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 horizontal · 12 vertical",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid #E5EBF4",
                "mono": true
              },
              {
                "key": "Gap (header ↔ desc)",
                "value": "4px (space/space-4)",
                "mono": true
              },
              {
                "key": "Pointer size",
                "value": "12 × 8 (width × height)",
                "mono": true
              },
              {
                "key": "Shadow",
                "value": "app/shadow/shadow-low",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Header style",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "Header font",
                "value": "Proxima Soft Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 12 / 18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPointer</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.right</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebOnDismiss</span><span class=\"syn-punc\">(</span><span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBOnboardingTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Onboarding hint\"</span><span class=\"syn-punc\">,</span>\n    pointer <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPointer</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Right</span><span class=\"syn-punc\">,</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Default"
        ],
        "rows": [
          {
            "role": "Surface",
            "token": "main/nudge/color/primary/bg",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Border",
            "token": "main/nudge/color/primary/border",
            "values": [
              "#E5EBF4"
            ]
          },
          {
            "role": "Header label",
            "token": "main/nudge/color/primary/label",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Description",
            "token": "main/nudge/color/primary/description",
            "values": [
              "#6780A9"
            ]
          },
          {
            "role": "Close icon",
            "token": "main/nudge/color/primary/icon-close",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Shadow",
            "token": "elevation/app/shadow-low",
            "values": [
              "#020E22 · 6 %"
            ]
          },
          {
            "role": "Pointer triangle",
            "token": "—",
            "values": [
              "raster (4 images)"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Surface width",
            "token": "—",
            "values": [
              "336 px"
            ]
          },
          {
            "role": "Surface corner radius",
            "token": "radius/radius-2",
            "values": [
              "6 px"
            ]
          },
          {
            "role": "Surface border",
            "token": "main/nudge/color/primary/border",
            "values": [
              "1 px solid"
            ]
          },
          {
            "role": "Surface padding",
            "token": "space/space-16",
            "values": [
              "16 px all sides"
            ]
          },
          {
            "role": "Header row gap (title ↔ close)",
            "token": "—",
            "values": [
              "24 px"
            ]
          },
          {
            "role": "Title ↔ description gap",
            "token": "space/space-4",
            "values": [
              "4 px"
            ]
          },
          {
            "role": "Close hit-area padding",
            "token": "—",
            "values": [
              "3 px (18 × 18 icon, ~24 × 24 hit)"
            ]
          },
          {
            "role": "Pointer width / height",
            "token": "—",
            "values": [
              "24 × 12 (raster image)"
            ]
          },
          {
            "role": "Shadow offset / blur",
            "token": "elevation/app/shadow-low",
            "values": [
              "0 / 0 / 4 / 0"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "Header",
            "token": "Primary/Headlines/Block",
            "values": [
              "Proxima Soft Bold · 18 / 23 · +0.25"
            ]
          },
          {
            "role": "Description",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda Semibold · 12 / 18 · +0"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tooltip:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Onboarding - Tooltip (this)",
          "swift": "Tooltip · appearance: .default",
          "compose": "EBTooltip().ebAppearance(.default)"
        },
        {
          "figma": "pointer: top / right / bottom / left",
          "swift": "placement: .top / .right / .bottom / .left",
          "compose": "arrowEdge: Edge"
        },
        {
          "figma": "header (baked text)",
          "swift": "title: String?",
          "compose": "title: String?"
        },
        {
          "figma": "description (baked text)",
          "swift": "body: String? (or content slot)",
          "compose": "body: String?"
        },
        {
          "figma": "close (image asset, always shown)",
          "swift": "hasDismiss: Bool",
          "compose": "dismissible: Bool"
        },
        {
          "figma": "(not modeled)",
          "swift": "cta: .none / .primary / .pair",
          "compose": "primary / secondary: TooltipAction?"
        },
        {
          "figma": "(not modeled)",
          "swift": "leading (Slot)",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "(not modeled)",
          "swift": "onDismiss",
          "compose": "onDismiss: () -&gt; Void"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tooltip/EBTooltip.swift",
        "compose": "android/components/tooltip/EBTooltip.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Equivalent of today's \"Onboarding - Tooltip · pointer=bottom\"</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Quick transfers\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">bottom</span>\n)\n.<span class=\"prp\">onDismiss</span> { showTip = <span class=\"kw\">false</span> }\n\n<span class=\"cmt\">// pointer=right · same appearance, placement flipped</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Your balance\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Tap to reveal or hide.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">right</span>\n)",
        "compose": "<span class=\"cmt\">// Equivalent of today's \"Onboarding - Tooltip · pointer=bottom\"</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Quick transfers\"</span>,\n    body = <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Bottom,\n    onDismiss = { showTip = <span class=\"kw\">false</span> }\n)\n\n<span class=\"cmt\">// pointer=right</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Your balance\"</span>,\n    body = <span class=\"str\">\"Tap to reveal or hide.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Right\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role + focus",
        "ios": "Announce as <code>.accessibilityAddTraits(.isModal)</code> when dismissible; VoiceOver moves focus to the tooltip on appear.",
        "android": "<code>semantics { role = Role.Popup }</code>; TalkBack focuses the tooltip container on appear."
      },
      {
        "requirement": "Close control",
        "ios": "Wrap close as a <code>Button</code> with <code>accessibilityLabel</code> \"Dismiss tip\" and 44×44 hit target (current 24 × 24 is below minimum).",
        "android": "<code>IconButton</code> with <code>contentDescription = \"Dismiss tip\"</code>; 48×48 dp minimum (current hit area is ~24 × 24 dp)."
      },
      {
        "requirement": "Dismiss-outside",
        "ios": "Do not auto-dismiss while VoiceOver is active — hold until user explicitly moves on.",
        "android": "Do not auto-dismiss while TalkBack is active."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Respect <code>UIAccessibility.isReduceMotionEnabled</code> — fade only, skip scale-in.",
        "android": "Respect <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code> — fade only when motion reduced."
      },
      {
        "requirement": "Combined label",
        "ios": "Read title + body + \"Dismiss\" as one phrase; avoid reading pointer.",
        "android": "<code>mergeDescendants = true</code> on the container."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "\"Onboarding -\" prefix misleads — component ships no walkthrough content. 3 sibling Tooltip components for one primitive. Close uses a raw image inside a generic \"Close\" frame."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Pointer is correctly modeled as one enum here (cleaner than Tooltip V2's 4 booleans) — but siblings should agree on the shape of the shared axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface, border, label, description, close icon, shadow all bound to <code>main/nudge/*</code> / <code>elevation/*</code>. Spacing via <code>space/*</code>. Radius via <code>radius/radius-2</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Closed shape — no slot for body content or CTA. Maps cleanly to native only after consolidation into the unified Tooltip with content slot + cta axis."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed / Focused on close. No appearing / dismissing lifecycle annotated. Close isn't wired to a dismiss property."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pointer is 4 raster images (one per direction). Close is an image asset (<code>imgShapeFull</code>) rather than an <code>icon/close</code> instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation. Mapping today's sibling component would cement the wrong schema."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "One axis: <code>pointer</code> (4 values) = <strong>4 variants</strong>. Content (header / description / close) is fixed across all variants.",
      "columns": [
        "#",
        "Pointer",
        "Dimensions",
        "Pointer asset",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "top",
            "336 × 90",
            "imgPointer",
            "51:17065"
          ]
        },
        {
          "cells": [
            "2",
            "bottom",
            "336 × 89",
            "imgPointer1",
            "51:17063"
          ]
        },
        {
          "cells": [
            "3",
            "left",
            "348 × 78",
            "imgPointer2",
            "51:17062"
          ]
        },
        {
          "cells": [
            "4",
            "right",
            "348 × 78",
            "imgPointer3",
            "51:17064"
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
      "header": "Initial Assessment · node 51:17066",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Fold into the unified Tooltip as <code>appearance: .default</code> with the <code>placement</code> axis. The \"Onboarding -\" prefix is misleading (no walkthrough content ships). <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Misleading name</strong> — No step indicator, no Next/Skip/Back CTAs, no progress dots. Component is not onboarding-specific. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C1 — 3 siblings for 1 primitive</strong> — Tooltip V2, Onboarding - Tooltip, Tooltip Blurred and Transparent. Merge via <code>appearance</code> + <code>placement</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Pointer schema disagrees with sibling</strong> — This sibling uses one enum; Tooltip V2 uses 4 booleans. Family members should agree on the shape of a shared axis. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — No slot for body or CTA</strong> — Closed shape forces consumers to switch to Tooltip V2 for anything richer than header + description. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — No dismiss/focus states</strong> — Close is a raw image; Pressed / Focused / Lifecycle not modeled. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster pointer + raw close</strong> — 4 raster images (one per direction). Close is an image asset rather than <code>icon/close</code>. Vector + icon instance. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on consolidation. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — Surface / border / label / description / close / shadow all bound to <code>main/nudge/*</code> and <code>elevation/*</code>. Spacing via <code>space/*</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        }
      ]
    }
  ]
};
