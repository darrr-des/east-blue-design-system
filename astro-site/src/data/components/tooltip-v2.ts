import type { ComponentData } from '../types';

export const tooltipV2: ComponentData = {
  "meta": {
    "slug": "tooltip-v2",
    "name": "Tooltip V2",
    "node": "70:14908",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=70-14908",
    "description": "A small floating callout anchored to a target with a directional pointer; ships in eight pointer positions.",
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
    "navGroup": "Tooltip",
    "verdict": {
      "kind": "restructure",
      "title": "Unify 3 Tooltip siblings into one Tooltip component; drop the \"V2\" suffix",
      "text": "This component, <a href=\"#\">Onboarding - Tooltip</a>, and <a href=\"#\">Tooltip Blurred and Transparent</a> model the same primitive with different skins. Merge into one <code>Tooltip</code> with <code>placement: .top | .right | .bottom | .left</code> (one enum, not 4 booleans), <code>appearance: .default | .onboarding | .translucent</code>, <code>hasArrow</code>, <code>hasDismiss</code>, and a content slot. Replace the raster pointer with a vector, the placeholder icon circle with a Figma Slot, and strip the <code>V2</code> suffix — production component names should never carry a version. Maps cleanly to <code>TipKit</code> / <code>PlainTooltip</code> / <code>RichTooltip</code> on native."
    }
  },
  "overview": {
    "inContextNote": "Tooltips sit over a target element (tab, button, icon, card) with a pointer aimed at the thing they describe.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Wallet</text>\n          \n          <circle cx=\"150\" cy=\"42\" r=\"4\" fill=\"#005CE5\"></circle>\n          \n          <rect x=\"50\" y=\"52\" width=\"88\" height=\"36\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"></rect>\n          <path d=\"M138 58 l4 -4 0 8 z\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-linejoin=\"round\"></path>\n          <rect x=\"56\" y=\"58\" width=\"32\" height=\"4\" rx=\"1\" fill=\"#0A2757\"></rect>\n          <rect x=\"56\" y=\"66\" width=\"60\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"56\" y=\"71\" width=\"50\" height=\"2\" rx=\"1\" fill=\"#6780A9\"></rect>\n          <rect x=\"118\" y=\"78\" width=\"16\" height=\"6\" rx=\"3\" fill=\"#005CE5\"></rect>\n          <text x=\"126\" y=\"83\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"4\" font-weight=\"700\" font-family=\"system-ui\">Next</text>\n          \n          <rect x=\"42\" y=\"98\" width=\"60\" height=\"10\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"106\" y=\"98\" width=\"56\" height=\"10\" rx=\"2\" fill=\"#EEF2F9\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tt2-demo-preview\"><div style=\"display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;\"><div style=\"position:relative;width:335px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;padding:16px;box-sizing:border-box;\"><div style=\"position:absolute;width:0;height:0;left:50%;bottom:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFFFFF;filter:drop-shadow(0 1px 0 #E5EBF4);\"></div><div style=\"display:flex;align-items:flex-start;gap:8px;\"><div style=\"flex:1 0 0;min-width:0;display:flex;flex-direction:column;gap:4px;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;\">Header</div><div style=\"font-family:'BarkAda','Proxima Soft',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;\">Description goes here. This is the second sentence. The third sentence.</div></div><div style=\"flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M1 1l10 10M11 1L1 11\" stroke=\"#0A2757\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div style=\"display:flex;align-items:center;margin-top:16px;justify-content:flex-end;\"><div style=\"display:inline-flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:16px;line-height:16px;font-weight:700;letter-spacing:0.25px;\">Next</div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">header</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-header\" onchange=\"updateTt2Demo()\"><option value=\"true\" selected=\"\">shown</option><option value=\"false\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-desc\" onchange=\"updateTt2Demo()\"><option value=\"true\" selected=\"\">shown</option><option value=\"false\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">icon</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-icon\" onchange=\"updateTt2Demo()\"><option value=\"false\" selected=\"\">hidden</option><option value=\"true\">shown</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-cta\" onchange=\"updateTt2Demo()\"><option value=\"none\">none</option><option value=\"one\" selected=\"\">one</option><option value=\"two\">two</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Placement</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">pointer</span><select class=\"demo-panel-select\" id=\"tt2-ctrl-pointer\" onchange=\"updateTt2Demo()\"><option value=\"top\">top</option><option value=\"right\">right</option><option value=\"bottom\" selected=\"\">bottom</option><option value=\"left\">left</option><option value=\"none\">none</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Covers the main in-product tooltip pattern across onboarding, tips, and nudges. But because 3 siblings exist for 3 skins, consumers have to hunt for the right one — the primitive is fragmented. <span class=\"tag-open tag-c1\">C1</span>"
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Surface, type, and spacing bind to <code>main/nudge/*</code> + <code>space/*</code> tokens. But the pointer arrow is a raster image (4 rotated copies of one shape) and the leading icon is a gray placeholder circle, not a slot. <span class=\"tag-open tag-c6\">C6</span>"
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Component is named <code>Tooltip V2</code> — version suffixes don't belong in production DS names. Pointer direction is 4 separate booleans rather than one enum, letting consumers set nonsensical combinations (e.g. all 4 pointers on). <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "No Figma Slot for leading icon or body content. CTAs are baked Button instances that re-implement pill padding rather than composing the Button component consistently across variants (one variant uses px-16 / py-12, another uses px-8 / py-6). <span class=\"tag-open tag-c4\">C4</span>"
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
        "notes": "Dismiss icon is present in markup but not wired to a property or interaction. Contract should be explicit."
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
        "ios": "yes",
        "android": "yes",
        "property": "CTA=one / two",
        "notes": "Advances in onboarding or performs the tip's primary action."
      },
      {
        "state": "Secondary CTA",
        "ios": "yes",
        "android": "yes",
        "property": "CTA=two",
        "notes": "\"Back\" in onboarding; \"Learn more\" in tips."
      },
      {
        "state": "Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "CTAs and close have no pressed/focused treatment on the tooltip component itself. Inner Button instances handle their own press, but close + the tooltip surface do not."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Component is named <code>Tooltip V2</code>.",
        "body": "Version suffixes don't belong in production DS component names — they imply a V1 that wasn't removed, and force consumers to choose which version is \"right\". Rename to <code>Tooltip</code> and delete V1 (or, if V1 is still in use, merge/deprecate before renaming).",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Three sibling Tooltip components for one primitive.",
        "body": "<code>Tooltip V2</code> (70:14908), <code>Onboarding - Tooltip</code> (51:17066), and <code>Tooltip Blurred and Transparent</code> (49:335349) all model the same floating popover with different skins. Collapse into one <code>Tooltip</code> with an <code>appearance</code> enum.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Pointer direction is 4 independent booleans.",
        "body": "<code>pointerTop</code>, <code>pointerRight</code>, <code>pointerBottom</code>, <code>pointerLeft</code> — nothing prevents a consumer from enabling two or all four. A single <code>placement: .top | .right | .bottom | .left | .none</code> enum is the correct shape. Maps 1:1 to <code>TipKit</code> <code>.arrowEdge</code> and Compose <code>TooltipAnchorPosition</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pointer triangle is a raster asset.",
        "body": "4 separate image fills (<code>imgPointer</code>, <code>imgPointer1</code>, <code>imgPointer2</code>, <code>imgPointer3</code>) for what should be one vector shape rotated per edge. Replace with a single vector triangle component; rotation handled by the <code>placement</code> enum.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Leading icon is a gray placeholder circle.",
        "body": "The <code>Icon=yes</code> variant renders a flat <code>#C2C6CF</code> 46 px circle under a \"Placeholder\" frame — same anti-pattern as Action List / List Item. Replace with a named <code>leading</code> Figma Slot so consumers can drop in an Icon, Avatar, or illustration.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Close (X) is an image asset, not a DS icon instance.",
        "body": "The dismiss control uses <code>imgShapeFull</code> inside a generic \"Close\" frame rather than an instance of the DS's <code>icon/close</code>. That hides the icon from a11y / token updates and blocks Code Connect from seeing it as a real control.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "CTA Button padding drifts between variants.",
        "body": "<code>CTA=one, Header=yes</code> uses <code>px-16 / py-12</code>; <code>CTA=one, Header=no</code> uses <code>px-12 / py-6</code>; <code>CTA=two</code> uses yet another combo. The underlying <code>Button - XSmall</code> instance should be identical across all variants — same size mode, same padding.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No dismiss / show states modeled.",
        "body": "Close button exists visually but carries no interaction property; there is no Pressed / Focused state on the dismiss control or on CTAs at the tooltip level. Tooltips also have an implicit \"appearing / dismissing\" lifecycle that isn't documented.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on the consolidation + slot adoption + enum conversion. Mapping the current 3-sibling / 4-boolean shape to native would cement the wrong schema.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate the 3 Tooltip siblings into one component.",
        "body": "New schema: <code>placement: .top | .right | .bottom | .left</code> (replaces the 4 booleans), <code>appearance: .default | .onboarding | .translucent</code> (replaces the 3 sibling components), <code>hasArrow: Bool</code>, <code>hasDismiss: Bool</code>, <code>cta: .none | .primary | .primaryAndSecondary</code>, plus a <code>leading</code> slot for icon/avatar and a content slot for the body. Replaces today's <code>8 + ? + ?</code> variants across 3 components with roughly <code>4 placement × 3 appearance × 3 cta = 36</code> permutations of one clean schema.",
        "tag": "Family"
      },
      {
        "headline": "Rename <code>Tooltip V2</code> → <code>Tooltip</code>.",
        "body": "Version suffixes shouldn't appear in production DS names. If V1 is still referenced anywhere, migrate its instances first, then delete V1, then drop the suffix.",
        "tag": "Rename"
      },
      {
        "headline": "Replace 4 pointer booleans with a single <code>placement</code> enum.",
        "body": "Prevents nonsensical states (all 4 pointers on), maps 1:1 to SwiftUI <code>.arrowEdge</code> and Compose <code>TooltipAnchorPosition</code>, and reduces the variant matrix dramatically.",
        "tag": "Property"
      },
      {
        "headline": "Replace the raster pointer with a vector triangle.",
        "body": "Today there are 4 separate rasters (top/right/bottom/left). One vector shape, rotated per <code>placement</code>, fills the same role with zero asset burden, scales cleanly, and picks up token color updates automatically.",
        "tag": "Asset"
      },
      {
        "headline": "Adopt a <code>leading</code> Figma Slot for the icon.",
        "body": "Drop the <code>#C2C6CF</code> placeholder circle. Maps to <code>@ViewBuilder</code> (SwiftUI) and a <code>@Composable</code> slot (Compose). Empty slot = no leading.",
        "tag": "Slot"
      },
      {
        "headline": "Instance-swap the close button to <code>icon/close</code>.",
        "body": "Use the canonical DS close-icon instance rather than an inline <code>imgShapeFull</code>. Gets you token-driven color, a11y labeling, and press-state handling for free.",
        "tag": "Composition"
      },
      {
        "headline": "Normalize CTA Button padding.",
        "body": "Every tooltip variant uses the same Button size mode (XSmall). Enforce one padding via the Button component itself — don't let the tooltip override.",
        "tag": "Composition"
      },
      {
        "headline": "Document the dismiss contract + lifecycle.",
        "body": "Add a description on the component: <em>\"Tap the close X or tap outside to dismiss, unless <code>hasDismiss = false</code> (force interaction with CTA). Tooltip appears with fade + slight scale from the pointer anchor; dismisses with reverse.\"</em> Close the gap between designer intent and dev implementation.",
        "tag": "Docs"
      },
      {
        "headline": "Add Pressed / Focused on the close control and CTAs.",
        "body": "Inner Button instances handle their own states, but the close X does not — it's an image. Once it becomes an icon-button instance, states follow.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "cta=one-·-icon=yes-·-description-·-header-—-the-hero-variant",
        "title": "CTA=one · Icon=yes · Description · Header — the hero variant",
        "node": "70:14907",
        "description": "Full-shape onboarding variant. Leading icon placeholder + header + description + primary CTA + close. 359 × 181.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "one",
                "mono": false
              },
              {
                "key": "icon",
                "value": "yes",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Hero — full content",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebLeadingIcon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"info.circle\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Info</span><span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTooltipAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=one-·-description-·-header-—-tip-with-action",
        "title": "CTA=one · Description · Header — tip with action",
        "node": "7977:12260",
        "description": "Text-only tip with a primary CTA. No leading icon. 359 × 155. Inherits different outer padding (<code>px-16 py-12</code>) than the hero variant (<code>p-16</code>).",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "one",
                "mono": false
              },
              {
                "key": "icon",
                "value": "no",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Tip with action",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTooltipAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=none-·-icon=yes-·-description-·-header-—-icon-+-explanatory-text",
        "title": "CTA=none · Icon=yes · Description · Header — icon + explanatory text",
        "node": "70:14903",
        "description": "Dismissible explanatory tooltip with an icon. 359 × 137.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "none",
                "mono": false
              },
              {
                "key": "icon",
                "value": "yes",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Icon + explanatory text",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebLeadingIcon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"info.circle\"</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Info</span><span class=\"syn-punc\">, null) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=none-·-description-·-header-—-plain-tip-card",
        "title": "CTA=none · Description · Header — plain tip card",
        "node": "70:14902",
        "description": "Plain text tip with header + description + close. 359 × 119.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "none",
                "mono": false
              },
              {
                "key": "icon",
                "value": "no",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Plain tip card",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helpful tip\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=none-·-header-only-—-pointer/label",
        "title": "CTA=none · Header only — pointer/label",
        "node": "70:14900",
        "description": "Single-line title pointer — used to label or point at a UI element. 359 × 79.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "none",
                "mono": false
              },
              {
                "key": "icon",
                "value": "no",
                "mono": false
              },
              {
                "key": "description",
                "value": "false",
                "mono": false
              },
              {
                "key": "header",
                "value": "true",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Header-only pointer label",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=none-·-description-only-—-concise-explanation",
        "title": "CTA=none · Description only — concise explanation",
        "node": "70:14901",
        "description": "Description-only tooltip — short explanatory body, no title. 359 × 92.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "none",
                "mono": false
              },
              {
                "key": "icon",
                "value": "no",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "false",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Description-only concise tip",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helpful tip\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=two-·-description-—-back-+-next-walkthrough",
        "title": "CTA=two · Description — back + next walkthrough",
        "node": "70:14905",
        "description": "Two-CTA walkthrough step: outline \"Back\" + filled \"Next\". 359 × 136.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "two (back + next)",
                "mono": false
              },
              {
                "key": "icon",
                "value": "no",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "false",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Walkthrough step",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Step 2 of 4\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebSecondaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Back\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Next\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Step 2 of 4\"</span><span class=\"syn-punc\">,</span>\n    secondaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTooltipAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Back\"</span><span class=\"syn-punc\">) { }</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTooltipAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Next\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "cta=one-·-description-·-no-header-—-tip-→-single-cta",
        "title": "CTA=one · Description · no Header — tip → single CTA",
        "node": "70:14906",
        "description": "Body + single CTA, no header. 359 × 136. Uses <code>px-12 / py-6</code> CTA padding — different from the two variants above.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "cta",
                "value": "one",
                "mono": false
              },
              {
                "key": "icon",
                "value": "no",
                "mono": false
              },
              {
                "key": "description",
                "value": "true",
                "mono": false
              },
              {
                "key": "header",
                "value": "false",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Tip → single CTA",
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
              { "key": "Close icon", "value": "#0A2757", "token": "nudge/color/primary/icon-close" },
              { "key": "Primary CTA bg", "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label", "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Secondary CTA", "value": "#005CE5", "token": "button/secondary/brand/enabled/border" }
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
              },
              {
                "key": "CTA style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "CTA font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTooltip</span><span class=\"syn-punc\">(</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helpful tip\"</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBTooltipAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Got it\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
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
            "role": "Leading icon placeholder",
            "token": "—",
            "values": [
              "#C2C6CF (not tokenized — placeholder)"
            ]
          },
          {
            "role": "CTA primary bg",
            "token": "main/button/primary/brand/enabled/bg",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "CTA primary label",
            "token": "main/button/primary/brand/enabled/label",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "CTA secondary border / label",
            "token": "main/button/secondary/brand/enabled/border",
            "values": [
              "#005CE5"
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
              "335 px (content) · 359 px (with offsets)"
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
            "role": "Surface padding — hero",
            "token": "space/space-16",
            "values": [
              "16 px all sides"
            ]
          },
          {
            "role": "Surface padding — text+CTA",
            "token": "space/space-16 · space/space-12",
            "values": [
              "16 / 12 (inconsistent with hero)"
            ]
          },
          {
            "role": "Leading icon size",
            "token": "—",
            "values": [
              "46 × 46 (placeholder circle)"
            ]
          },
          {
            "role": "Close size",
            "token": "—",
            "values": [
              "18 × 18 (image asset)"
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
            "role": "Icon → text gap",
            "token": "space/space-4",
            "values": [
              "4 px"
            ]
          },
          {
            "role": "Text-container gap",
            "token": "space/space-8",
            "values": [
              "8 px"
            ]
          },
          {
            "role": "CTA row gap (two CTAs)",
            "token": "space/space-8",
            "values": [
              "8 px (justify between)"
            ]
          },
          {
            "role": "CTA Button — size",
            "token": "—",
            "values": [
              "XSmall (Button component)"
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
          },
          {
            "role": "CTA label",
            "token": "Primary/Label/Base",
            "values": [
              "Proxima Soft Bold · 16 / 16 · +0.25"
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
          "figma": "3 sibling components",
          "swift": "1 component: <code>Tooltip</code>",
          "compose": "EBTooltip"
        },
        {
          "figma": "(sibling = appearance)",
          "swift": "appearance: .default / .onboarding / .translucent",
          "compose": ".ebAppearance(.default / .onboarding / .translucent)"
        },
        {
          "figma": "pointerTop/Right/Bottom/Left: Bool × 4",
          "swift": "placement: .top / .right / .bottom / .left / .none",
          "compose": "arrowEdge: Edge"
        },
        {
          "figma": "header: Bool + text baked",
          "swift": "title: String?",
          "compose": "title: String?"
        },
        {
          "figma": "description: Bool + text baked",
          "swift": "body: String? (or content slot)",
          "compose": "body: String?"
        },
        {
          "figma": "icon: Bool (gray placeholder)",
          "swift": "leading (Slot)",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "Close image asset (always)",
          "swift": "hasDismiss: Bool",
          "compose": "dismissible: Bool"
        },
        {
          "figma": "cta: none / one / two",
          "swift": "cta: .none / .primary(String) / .pair(back, next)",
          "compose": "primary / secondary: TooltipAction?"
        },
        {
          "figma": "outlineButton: Bool",
          "swift": "(absorbed into cta.pair)",
          "compose": "—"
        },
        {
          "figma": "(not modeled)",
          "swift": "hasArrow: Bool",
          "compose": "arrow: Bool"
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
        "swift": "<span class=\"cmt\">// Simple tip — title + body, pointer below</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Quick transfers\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">bottom</span>\n)\n.<span class=\"prp\">onDismiss</span> { showTip = <span class=\"kw\">false</span> }\n\n<span class=\"cmt\">// Walkthrough step — two CTAs</span>\n<span class=\"typ\">EBTooltip</span>(\n    <span class=\"prp\">title</span>: <span class=\"str\">\"Step 2 of 4\"</span>,\n    <span class=\"prp\">body</span>: <span class=\"str\">\"Review your balance before confirming.\"</span>,\n    <span class=\"prp\">placement</span>: .<span class=\"prp\">top</span>,\n    <span class=\"prp\">cta</span>: .<span class=\"prp\">pair</span>(back: <span class=\"str\">\"Back\"</span>, next: <span class=\"str\">\"Next\"</span>)\n)\n.<span class=\"prp\">ebAppearance</span>(.<span class=\"prp\">onboarding</span>)\n\n<span class=\"cmt\">// Rich — custom leading slot</span>\n<span class=\"typ\">EBTooltip</span>(<span class=\"prp\">title</span>: <span class=\"str\">\"Welcome\"</span>, <span class=\"prp\">body</span>: <span class=\"str\">\"Tap a card to begin.\"</span>) {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"sparkles\"</span>)\n}\n\n<span class=\"cmt\">// iOS 17 + Tips — recommended for onboarding flows</span>\n.<span class=\"prp\">popoverTip</span>(quickTransferTip)",
        "compose": "<span class=\"cmt\">// Simple tip</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Quick transfers\"</span>,\n    body = <span class=\"str\">\"Tap here to send money to recent contacts.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Bottom,\n    onDismiss = { showTip = <span class=\"kw\">false</span> }\n)\n\n<span class=\"cmt\">// Walkthrough step — two CTAs, onboarding skin</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Step 2 of 4\"</span>,\n    body = <span class=\"str\">\"Review your balance before confirming.\"</span>,\n    placement = <span class=\"typ\">EBTooltipPlacement</span>.Top,\n    appearance = <span class=\"typ\">EBTooltipAppearance</span>.Onboarding,\n    primaryAction = <span class=\"typ\">TooltipAction</span>(<span class=\"str\">\"Next\"</span>, onClick = { advance() }),\n    secondaryAction = <span class=\"typ\">TooltipAction</span>(<span class=\"str\">\"Back\"</span>, onClick = { rewind() })\n)\n\n<span class=\"cmt\">// Custom leading slot</span>\n<span class=\"typ\">EBTooltip</span>(\n    title = <span class=\"str\">\"Welcome\"</span>,\n    body = <span class=\"str\">\"Tap a card to begin.\"</span>,\n    leading = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.AutoAwesome, contentDescription = null) }\n)\n\n<span class=\"cmt\">// Material 3 PlainTooltip equivalent</span>\n<span class=\"typ\">PlainTooltip</span> { <span class=\"typ\">Text</span>(<span class=\"str\">\"Shortcut\"</span>) }"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role + focus",
        "ios": "Announce tooltip as <code>.accessibilityAddTraits(.isModal)</code> when <code>hasDismiss = true</code> — otherwise role <code>.staticText</code>.",
        "android": "<code>semantics { role = Role.Popup }</code> on the container; TalkBack focuses it on appear."
      },
      {
        "requirement": "Close control",
        "ios": "Wrap close as a <code>Button</code> with <code>accessibilityLabel</code> \"Dismiss tip\" and 44×44 hit target.",
        "android": "<code>IconButton</code> with <code>contentDescription = \"Dismiss tip\"</code>; 48×48dp minimum."
      },
      {
        "requirement": "Dismiss-outside",
        "ios": "Respect <code>UIAccessibility.isVoiceOverRunning</code> — do not auto-dismiss tooltips while VO is active.",
        "android": "Do not auto-dismiss while TalkBack is active; hold the tooltip until the user explicitly moves on."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Respect <code>UIAccessibility.isReduceMotionEnabled</code> — skip the scale-in animation; fade only.",
        "android": "Respect <code>Settings.Global.TRANSITION_ANIMATION_SCALE</code> — fade only when user has motion reduced."
      },
      {
        "requirement": "Combined label",
        "ios": "Read title + body + \"Dismiss\" as one phrase; avoid reading pointer.",
        "android": "Same; set <code>mergeDescendants = true</code> on the container."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "3 sibling components for one primitive. Close uses a raw image asset inside a generic frame rather than an <code>icon/close</code> instance."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Version suffix in the component name (<code>Tooltip V2</code>). Pointer direction is 4 booleans instead of one enum."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface, border, label, description, and CTA colors bound to <code>main/nudge/*</code> and <code>main/button/*</code> tokens. Spacing via <code>space/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Maps cleanly once pointer booleans → <code>placement</code> enum and sibling skins → <code>appearance</code> enum. CTA padding inconsistencies block a 1:1 Button reuse."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No Pressed / Focused on close. No lifecycle (appearing / dismissing) annotated. Close isn't wired to a dismiss property."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Pointer is 4 raster images (one per edge). Leading icon is a gray placeholder circle. Close is an image asset."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on consolidation + enum conversion + slot adoption. Mapping today's shape would cement the wrong schema."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "4 booleans and one 3-value enum yield <strong>8 shipped variants</strong> out of a 24-cell theoretical matrix (<code>CTA (3) × Icon (2) × Description (2) × Header (2) = 24</code>). Only the 8 meaningful combinations are exposed. Pointer direction is 4 additional booleans outside the variant matrix.",
      "columns": [
        "#",
        "CTA",
        "Icon",
        "Description",
        "Header",
        "Dimensions",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "one",
            "yes",
            "yes",
            "yes",
            "359 × 181",
            "70:14907"
          ]
        },
        {
          "cells": [
            "2",
            "one",
            "no",
            "yes",
            "yes",
            "359 × 155",
            "7977:12260"
          ]
        },
        {
          "cells": [
            "3",
            "none",
            "yes",
            "yes",
            "yes",
            "359 × 137",
            "70:14903"
          ]
        },
        {
          "cells": [
            "4",
            "none",
            "no",
            "yes",
            "yes",
            "359 × 119",
            "70:14902"
          ]
        },
        {
          "cells": [
            "5",
            "none",
            "no",
            "no",
            "yes",
            "359 × 79",
            "70:14900"
          ]
        },
        {
          "cells": [
            "6",
            "none",
            "no",
            "yes",
            "no",
            "359 × 92",
            "70:14901"
          ]
        },
        {
          "cells": [
            "7",
            "two",
            "no",
            "yes",
            "no",
            "359 × 136",
            "70:14905"
          ]
        },
        {
          "cells": [
            "8",
            "one",
            "no",
            "yes",
            "no",
            "359 × 136",
            "70:14906"
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
      "header": "Initial Assessment · node 70:14908",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Consolidate 3 sibling Tooltip components; drop the <code>V2</code> suffix; replace 4 pointer booleans with one <code>placement</code> enum; replace raster pointer with vector; replace placeholder icon with a Figma Slot. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — 3 siblings for 1 primitive</strong> — Tooltip V2, Onboarding - Tooltip, Tooltip Blurred and Transparent. Merge via <code>appearance</code> enum. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Version suffix in name</strong> — <code>Tooltip V2</code> shouldn't exist in production; no V1 surfaces in the file. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C2 — Pointer is 4 booleans</strong> — Replace <code>pointerTop/Right/Bottom/Left</code> with a single <code>placement</code> enum. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — CTA padding drift</strong> — Same XSmall Button, three different paddings across variants. Normalize. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — No dismiss/focus states</strong> — Close is decorative; Pressed / Focused / Lifecycle not modeled. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster pointer + placeholder icon</strong> — 4 raster images for the pointer; gray circle for the leading icon. Vector + slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on the architectural changes above. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — Surface / border / label / description / CTA colors all bound to <code>main/nudge/*</code> and <code>main/button/*</code>. Spacing via <code>space/*</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        }
      ]
    }
  ]
};
