import type { ComponentData } from '../types';

export const modal: ComponentData = {
  "meta": {
    "slug": "modal",
    "name": "Modal",
    "node": "18507:71705",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18507-71705",
    "description": "A centered overlay surface used for blocking confirmations and dialogs — header, body, and primary/secondary actions.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"modal-demo-preview\"><div style=\"position:relative;width:280px;height:360px;margin:0 auto;background:#F6F9FD;border-radius:18px;overflow:hidden;border:1px solid #E5EBF4;\"><div style=\"padding:14px;\"><div style=\"width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;\"></div><div style=\"width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;\"></div><div style=\"width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;\"></div><div style=\"width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;\"></div></div><div style=\"position:absolute;inset:0;background:#020E22;opacity:0.56;\"></div><div style=\"position:absolute;inset:0;display:flex;align-items:center;justify-content:center;\"><div style=\"background:#fff;border-radius:6px;padding:20px 18px;box-shadow:0 0 4px rgba(232,238,242,0.79);width:220px;text-align:center;\"><div style=\"font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:14px;color:#0A2757;margin-bottom:8px;\">Put the title here</div><div style=\"font-size:11px;color:#6780A9;line-height:1.45;\">Add description here.<br>Add description here.</div><div style=\"height:28px;background:#005CE5;border-radius:99px;margin-top:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;\">Label</div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"modal-ctrl-type\" class=\"demo-panel-select\" onchange=\"_modalUpdate()\"><option value=\"default\">default</option><option value=\"with-icon\">with icon</option><option value=\"transaction-v1\">transaction_v1</option><option value=\"transaction-v2\">transaction_v2</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><select id=\"modal-ctrl-cta\" class=\"demo-panel-select\" onchange=\"_modalUpdate()\"><option value=\"1\">1</option><option value=\"1-vertical\">1 - vertical</option><option value=\"2-horizontal\">2 - horizontal</option><option value=\"2-vertical\">2 - vertical</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">scrim</span><select id=\"modal-ctrl-scrim\" class=\"demo-panel-select\" onchange=\"_modalUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "General-dialog variants (default / with icon) are reusable across many screens, but transaction_v1 / v2 are specific to the receipt / order-summary use case and shouldn't live inside a generic Modal."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Modal owns its bg, border, shadow, and label tokens, but relies on an external Overlay to dim the page. The relationship between the two components is not annotated anywhere."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Enum casing is mixed within the same property: <code>transaction_v1</code> / <code>transaction_v2</code> use snake_case, <code>1 - vertical</code> / <code>2 - horizontal</code> use space-dashed-space. Also duplicates scope with the Overlay component."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Transaction variants hard-code inner transaction rows and a reference-number slot — consumers can't swap content. Should be split into a Modal shell + a composable Transaction Receipt child."
      }
    ],
    "behavior": [
      {
        "state": "Present / dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Scale-in + fade animation is implied by pattern but not documented on the component."
      },
      {
        "state": "Tap-outside dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Overlay owns the tap-region. Contract should be documented (dismissible vs. modal)."
      },
      {
        "state": "CTA resolution",
        "ios": "yes",
        "android": "yes",
        "property": "Via Button child",
        "notes": "1 / 2-horizontal / 2-vertical layouts maped by <code>cta</code> property."
      },
      {
        "state": "Copy to clipboard (transaction)",
        "ios": "yes",
        "android": "yes",
        "property": "Icon only, no state",
        "notes": "Copy icon is raster, with no pressed / success feedback state defined."
      },
      {
        "state": "Focus trap / a11y",
        "ios": "yes",
        "android": "yes",
        "property": "Implicit",
        "notes": "Focus should be trapped inside the modal while open; restore to trigger on close."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Duplicate scope with Overlay component.",
        "body": "A separate <code>Overlay</code> record (node <code>47:329691</code>) already owns the scrim primitive; this Modal should compose it, not re-declare the modal surface. Today the two are maintained independently and there's no annotation describing which is canonical.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      },
      {
        "headline": "Two unrelated layouts compressed into one component.",
        "body": "<code>type=default</code> and <code>type=with icon</code> are general-purpose dialog shapes, while <code>type=transaction_v1</code> and <code>type=transaction_v2</code> are transaction-receipt layouts with their own inner rows and reference-number slot. These are different components masquerading as variants.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Mixed enum casing within a single property.",
        "body": "<code>type</code> uses <code>default</code>, <code>with icon</code> (space), <code>transaction_v1</code>, <code>transaction_v2</code> (snake_case). <code>cta</code> uses <code>1</code>, <code>1 - vertical</code>, <code>2 - horizontal</code>, <code>2 - vertical</code> (spaces around dashes). Neither is consistent with the rest of the DS.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Opacity-0 spacer frames instead of gap.",
        "body": "Inner layers named <code>_space_16</code>, <code>_space_12</code> with <code>opacity:0</code> are used to create vertical rhythm. These are non-semantic and don't translate to native auto-layout. Use <code>gap</code> on the parent instead.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Raster copy-to-clipboard icon.",
        "body": "The transaction variants use PNG assets <code>shape_half</code> / <code>shape_full</code> for the copy icon. Should be a vector icon instance bound to <code>main/modal-popup/color/icon-copy</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Icon-placeholder slot is a grey circle, not an instance swap.",
        "body": "The <code>with icon</code> variants render a raw <code>#C2C6CF</code> circle (<code>icon-placeholder</code>). Consumers can't swap in a real icon without detaching. Should be a Slot backed by the <code>Icon</code> component.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No interaction states on the modal surface.",
        "body": "The component ships only a default state — no pressed / dragging state for the CTA group, no loading state for async actions, and no entrance/exit transition annotation.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Missing CTA combos.",
        "body": "Transaction variants only ship with <code>cta=1</code>; \"with icon\" only ships with vertical CTAs. The <code>cta</code> axis is not complete across all <code>type</code> values, so designers resort to detaching when they need another arrangement.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Blocked on restructure — once the transaction layout is extracted and the enum values are cleaned up, mapping is trivial.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Consolidate with Overlay — one canonical Modal family.",
        "body": "The current split (Overlay = scrim only, Modal = surface + scrim baked in) duplicates intent. Rename and re-partition into: <code>Overlay</code> (scrim primitive, already assessed) + <code>Modal</code> (surface composition that references Overlay) + <code>TransactionReceipt</code> (the transaction_v1/v2 layout pulled out as its own card). Document which component owns which concern.",
        "tag": "Family"
      },
      {
        "headline": "Extract transaction_v1 / transaction_v2 as a separate component.",
        "body": "Move the receipt layout into a new <code>Transaction Receipt</code> component (likely a composition of List + Reference Number + Copy action), and drop the <code>transaction_*</code> values from Modal's <code>type</code> enum. Modal keeps only general-dialog variants.",
        "tag": "Composition"
      },
      {
        "headline": "Normalise enum casing.",
        "body": "Pick one convention for all multi-word values. Recommendation: single lowercase words separated by dashes — <code>default</code>, <code>with-icon</code>, <code>cta-single</code>, <code>cta-single-vertical</code>, <code>cta-double-horizontal</code>, <code>cta-double-vertical</code>. Align with Button and other DS components.",
        "tag": "Rename"
      },
      {
        "headline": "Replace opacity-0 spacer frames with auto-layout gap.",
        "body": "Remove the <code>_space_16</code> / <code>_space_12</code> invisible rectangles and set <code>gap</code> on the parent auto-layout frames (using <code>space/space-16</code> and <code>space/space-12</code> tokens). Native translators can then emit proper <code>spacing</code> parameters.",
        "tag": "Property"
      },
      {
        "headline": "Convert icon-placeholder into a Figma Slot.",
        "body": "Add a named <code>icon</code> slot to the <code>with icon</code> variants backed by the DS Icon component, so designers can instance-swap without detaching. Default to a neutral status icon.",
        "tag": "Slot"
      },
      {
        "headline": "Replace raster copy icon with a vector instance.",
        "body": "Swap <code>shape_half</code> / <code>shape_full</code> PNGs for the DS vector Copy icon and bind colour to <code>main/modal-popup/color/icon-copy</code>. While there, add a pressed / copied success state.",
        "tag": "Asset"
      },
      {
        "headline": "Complete the CTA matrix.",
        "body": "Ship every <code>type × cta</code> combination (or constrain the schema so unsupported combos aren't implied). Currently <code>default</code> is missing <code>1-vertical</code>, <code>with icon</code> is missing horizontal pairs, and transactions only ship with <code>cta=1</code>. Either fill the gaps or reshape the enum.",
        "tag": "Property"
      },
      {
        "headline": "Add loading and destructive states.",
        "body": "Modals routinely host async confirmations — add a <code>state=loading</code> variant (CTA replaced with spinner) and surface destructive-action styling via a boolean or via the child Button's existing <code>isError</code> prop.",
        "tag": "State"
      },
      {
        "headline": "Annotate the dismiss contract.",
        "body": "Document on the component: entrance / exit animation, focus trap, restore-focus-on-close, ESC-to-dismiss, tap-outside-dismiss. Developers currently have to infer these from adjacent patterns.",
        "tag": "Docs"
      },
      {
        "headline": "Title + description copy should come from the DS text styles.",
        "body": "Title is bound to <code>Primary/Headlines/Section</code> and description to <code>Secondary/Default/Base</code> (BarkAda). Confirm the secondary-font description is intentional — flag as the standing custom-font action item if not.",
        "tag": "Docs"
      }
    ],
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"10\" width=\"100\" height=\"60\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"22\" width=\"56\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"30\" width=\"34\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"38\" width=\"48\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <circle cx=\"86\" cy=\"32\" r=\"3\" fill=\"#CA970C\" opacity=\".7\"></circle>\n          <circle cx=\"86\" cy=\"44\" r=\"3\" fill=\"#D61B2C\" opacity=\".7\"></circle>\n        </svg>\n      </div>"
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default",
        "title": "Default",
        "node": "18507:71792",
        "description": "The general-purpose dialog. Title + description + single CTA on a white card. Use for confirmations, errors, and neutral informational prompts.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"modal-spec-preview-default\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Name",
                "value": "Modal",
                "mono": true
              },
              {
                "key": "type",
                "value": "default",
                "mono": true
              },
              {
                "key": "cta",
                "value": "1",
                "mono": true
              },
              {
                "key": "Title slot",
                "value": "Text · Primary/Headlines/Section",
                "mono": false
              },
              {
                "key": "Description slot",
                "value": "Text · Secondary/Default/Base",
                "mono": false
              },
              {
                "key": "CTA slot",
                "value": "Button instance(s)",
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
                "value": "modal-popup/color/bg",
                "mono": true
              },
              {
                "key": "Subtle surface",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Subtle token",
                "value": "modal-popup/color/bg-subtle",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "modal-popup/color/border",
                "mono": true
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title token",
                "value": "modal-popup/color/label",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Desc token",
                "value": "modal-popup/color/label-primary",
                "mono": true
              },
              {
                "key": "Accent icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "modal-popup/color/icon-copy",
                "mono": true
              },
              {
                "key": "Primary CTA bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "CTA bg token",
                "value": "button/primary/brand/enabled/bg",
                "mono": true
              },
              {
                "key": "Primary CTA label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Secondary CTA",
                "value": "#005CE5 (border + label)",
                "mono": true
              },
              {
                "key": "Secondary token",
                "value": "button/secondary/brand/enabled/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "320",
                "mono": true
              },
              {
                "key": "Height (cta=1)",
                "value": "212",
                "mono": true
              },
              {
                "key": "Height (cta=2-h)",
                "value": "212",
                "mono": true
              },
              {
                "key": "Height (cta=2-v)",
                "value": "270",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "24 / 32 top · 24 sides",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "6",
                "mono": true
              },
              {
                "key": "Border",
                "value": "none (shadow only)",
                "mono": true
              },
              {
                "key": "CTA group padding",
                "value": "py 24",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft · Bold",
                "mono": true
              },
              {
                "key": "Title size",
                "value": "22 / 26",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Default/Base",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda · Medium",
                "mono": true
              },
              {
                "key": "Description size",
                "value": "14 / 20",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBModalAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-icon-node-18507:71773-/-18507:71783",
        "title": "With Icon node 18507:71773 / 18507:71783",
        "node": "18507:71773",
        "description": "Dialog that leads with a 92×92 icon to set tone — success, warning, or info. CTAs stack vertically (1 or 2).",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"modal-spec-preview-icon\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "with icon",
                "mono": true
              },
              {
                "key": "cta",
                "value": "1 - vertical",
                "mono": true
              },
              {
                "key": "Icon slot",
                "value": "92 × 92 placeholder circle (should be Slot)",
                "mono": false
              },
              {
                "key": "Title slot",
                "value": "Text · Primary/Headlines/Section",
                "mono": false
              },
              {
                "key": "Description slot",
                "value": "Text · Secondary/Default/Base",
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
                "value": "modal-popup/color/bg",
                "mono": true
              },
              {
                "key": "Subtle surface",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Subtle token",
                "value": "modal-popup/color/bg-subtle",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "modal-popup/color/border",
                "mono": true
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title token",
                "value": "modal-popup/color/label",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Desc token",
                "value": "modal-popup/color/label-primary",
                "mono": true
              },
              {
                "key": "Accent icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "modal-popup/color/icon-copy",
                "mono": true
              },
              {
                "key": "Primary CTA bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "CTA bg token",
                "value": "button/primary/brand/enabled/bg",
                "mono": true
              },
              {
                "key": "Primary CTA label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Secondary CTA",
                "value": "#005CE5 (border + label)",
                "mono": true
              },
              {
                "key": "Secondary token",
                "value": "button/secondary/brand/enabled/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "320",
                "mono": true
              },
              {
                "key": "Height (cta=1-v)",
                "value": "312",
                "mono": true
              },
              {
                "key": "Height (cta=2-v)",
                "value": "370",
                "mono": true
              },
              {
                "key": "Icon container",
                "value": "92 × 92",
                "mono": true
              },
              {
                "key": "Icon radius",
                "value": "~72.5 (circle)",
                "mono": true
              },
              {
                "key": "Gap icon → title",
                "value": "16",
                "mono": true
              },
              {
                "key": "Gap title → desc",
                "value": "16",
                "mono": true
              },
              {
                "key": "CTA gap",
                "value": "8 (vertical)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft · Bold · 22 / 26",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Secondary/Default/Base",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda · Medium · 14 / 20",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIcon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"checkmark.circle\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebSecondaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.CheckCircle</span><span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBModalAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">) { }</span><span class=\"syn-punc\">,</span>\n    secondaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBModalAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "transaction-(v1-·-v2)-node-18507:71706-/-18507:71732",
        "title": "Transaction (v1 · v2) node 18507:71706 / 18507:71732",
        "node": "18507:71706",
        "description": "Receipt-style dialog used for order, transfer, and subscription summaries. <code>v1</code> stacks label + value per row; <code>v2</code> is horizontal. Both include a reference-number row with copy-to-clipboard. <strong>Recommended for extraction into its own <code>TransactionReceipt</code> component.</strong>",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"modal-spec-preview-txn\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "transaction_v1",
                "mono": true
              },
              {
                "key": "cta",
                "value": "1",
                "mono": true
              },
              {
                "key": "Detail rows",
                "value": "3 per variant, stacked (v1) or inline (v2)",
                "mono": false
              },
              {
                "key": "Reference row",
                "value": "Label + value + copy icon",
                "mono": false
              },
              {
                "key": "Copy icon",
                "value": "shape_half",
                "mono": true
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
                "value": "modal-popup/color/bg",
                "mono": true
              },
              {
                "key": "Subtle surface",
                "value": "#F6F9FD",
                "mono": true
              },
              {
                "key": "Subtle token",
                "value": "modal-popup/color/bg-subtle",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "modal-popup/color/border",
                "mono": true
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title token",
                "value": "modal-popup/color/label",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Desc token",
                "value": "modal-popup/color/label-primary",
                "mono": true
              },
              {
                "key": "Accent icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "modal-popup/color/icon-copy",
                "mono": true
              },
              {
                "key": "Primary CTA bg",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "CTA bg token",
                "value": "button/primary/brand/enabled/bg",
                "mono": true
              },
              {
                "key": "Primary CTA label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Secondary CTA",
                "value": "#005CE5 (border + label)",
                "mono": true
              },
              {
                "key": "Secondary token",
                "value": "button/secondary/brand/enabled/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "320",
                "mono": true
              },
              {
                "key": "Height (v1)",
                "value": "398",
                "mono": true
              },
              {
                "key": "Height (v2)",
                "value": "404",
                "mono": true
              },
              {
                "key": "Content padding",
                "value": "24 all sides",
                "mono": true
              },
              {
                "key": "Reference row padding",
                "value": "16 top · 8 bottom · 24 sides",
                "mono": true
              },
              {
                "key": "CTA padding",
                "value": "8 top · 24 bottom · 24 sides",
                "mono": true
              },
              {
                "key": "Row gap (v1)",
                "value": "12",
                "mono": true
              },
              {
                "key": "Row gap (v2)",
                "value": "12",
                "mono": true
              },
              {
                "key": "Copy icon",
                "value": "24 × 24",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft · Bold · 22 / 26",
                "mono": true
              },
              {
                "key": "Section text",
                "value": "Primary/Multi-line Label/Light/Base · 16 / 20",
                "mono": true
              },
              {
                "key": "Row label / value",
                "value": "Primary/Label/Light/Small · 14 / 14",
                "mono": true
              },
              {
                "key": "Multi-line row (v1)",
                "value": "Primary/Multi-line Label/Light/Small · 14 / 16",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "left (v1/v2 body), center (title)",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.transaction</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebTransactionRows</span><span class=\"syn-punc\">(</span>rows<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebReferenceNumber</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"165A25912345\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBModalStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Transaction</span><span class=\"syn-punc\">,</span>\n    rows <span class=\"syn-eq\">=</span> transactionDetails<span class=\"syn-punc\">,</span>\n    referenceNumber <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"165A25912345\"</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBModalAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>type = default</code>",
          "swift": "<code>EBModal(title:, description:)</code>",
          "compose": "<code>EBModal(title, description)</code>"
        },
        {
          "figma": "<code>type = with icon</code>",
          "swift": "<code>EBModal(icon:, title:, description:)</code>",
          "compose": "<code>EBModal(icon = { … }, title, description)</code>"
        },
        {
          "figma": "<code>type = transaction_v1 / v2</code>",
          "swift": "Extract → <code>EBTransactionReceipt(layout: .stacked / .inline)</code>",
          "compose": "Extract → <code>EBTransactionReceipt(layout = Stacked / Inline)</code>"
        },
        {
          "figma": "<code>cta = 1</code>",
          "swift": "<code>{ EBButton(…) }</code> (single trailing closure)",
          "compose": "<code>content: { EBButton(…) }</code>"
        },
        {
          "figma": "<code>cta = 1 - vertical</code>",
          "swift": "Implicit — single button is always full-width",
          "compose": "Implicit — single button is always full-width"
        },
        {
          "figma": "<code>cta = 2 - horizontal</code>",
          "swift": "<code>{ EBButton(…); EBOutlinedButton(…) }</code> + <code>.ctaLayout(.horizontal)</code>",
          "compose": "<code>ctaLayout = CtaLayout.Horizontal</code>"
        },
        {
          "figma": "<code>cta = 2 - vertical</code>",
          "swift": "<code>.ctaLayout(.vertical)</code>",
          "compose": "<code>ctaLayout = CtaLayout.Vertical</code>"
        },
        {
          "figma": "(proposed) Dismissible",
          "swift": "<code>.interactiveDismissDisabled(!dismissible)</code>",
          "compose": "<code>DialogProperties(dismissOnClickOutside = dismissible)</code>"
        },
        {
          "figma": "(proposed) Loading state",
          "swift": "<code>.ebLoading(isLoading)</code>",
          "compose": "<code>isLoading = true</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Modal trait",
        "ios": "Apply <code>.accessibilityAddTraits(.isModal)</code> — VoiceOver trap focus inside.",
        "android": "Use <code>Dialog</code> / <code>AlertDialog</code> — TalkBack treats content as modal by default."
      },
      {
        "requirement": "Focus management",
        "ios": "Focus moves to modal on present; restores to trigger on dismiss.",
        "android": "Focus enters dialog content on show; restored to trigger element on dismiss."
      },
      {
        "requirement": "Title announcement",
        "ios": "Bind the title Text as the <code>accessibilityHeading</code> so it's read first.",
        "android": "Use <code>Modifier.semantics { heading() }</code> on the title; set <code>paneTitle</code> on the surface."
      },
      {
        "requirement": "Dismiss gesture",
        "ios": "ESC / tap-outside / swipe-down should all route through one dismiss handler.",
        "android": "Back gesture + tap-outside configured via <code>DialogProperties(dismissOnBackPress, dismissOnClickOutside)</code>."
      },
      {
        "requirement": "Destructive action",
        "ios": "Use <code>role: .destructive</code> on the CTA so VoiceOver announces destructive intent.",
        "android": "Use destructive colour palette; set <code>contentDescription</code> on CTA explicitly."
      },
      {
        "requirement": "Copy to clipboard",
        "ios": "Announce \"Copied\" via <code>UIAccessibility.post(.announcement, …)</code>.",
        "android": "Announce via <code>view.announceForAccessibility(\"Copied\")</code>."
      },
      {
        "requirement": "Tap target (copy icon)",
        "ios": "Wrap 24×24 icon in a ≥44×44 tappable area.",
        "android": "Wrap 24×24 icon in a ≥48×48 dp tappable area."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Opacity-0 <code>_space_*</code> spacer rectangles used instead of gap. Icon-placeholder is a raw circle node, not a named icon slot."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Mixed casing: <code>transaction_v1</code> (snake) vs <code>1 - vertical</code> (space-dash-space). CTA matrix is sparse across <code>type</code> values."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "bg, label, label-primary, border, bg-subtle, icon-copy all bound to <code>main/modal-popup/color/*</code>. Shadow uses <code>Shadow/Depth 0</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "General-dialog variants map to <code>.sheet</code> / <code>Dialog</code>; transaction variants do not — they need a dedicated Receipt component. Not a single native primitive."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Only default state shipped. No loading, no destructive variant, no copy-success feedback, no present/dismiss transition annotation."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Copy icon is raster PNG (<code>shape_half</code>, <code>shape_full</code>). Icon-placeholder slot is a hardcoded grey circle instead of a vector icon instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on restructure — duplicate scope with Overlay + embedded transaction layout must be resolved before mapping."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 7,
      "description": "A <code>type</code> × <code>cta</code> matrix would yield <strong>4 × 4 = 16</strong>, but only 7 combinations are shipped. The rest are gaps.",
      "columns": [
        "Type",
        "CTA",
        "Node",
        "Dimensions",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "<strong>default</strong>",
            "<code>1</code>",
            "<code>18507:71792</code>",
            "320 × 212",
            "Title + description + single CTA."
          ]
        },
        {
          "cells": [
            "<strong>default</strong>",
            "<code>2 - horizontal</code>",
            "<code>18507:71799</code>",
            "320 × 212",
            "Outlined secondary + filled primary, side-by-side."
          ]
        },
        {
          "cells": [
            "<strong>default</strong>",
            "<code>2 - vertical</code>",
            "<code>18507:71807</code>",
            "320 × 270",
            "Stacked CTAs, both full-width."
          ]
        },
        {
          "cells": [
            "<strong>with icon</strong>",
            "<code>1 - vertical</code>",
            "<code>18507:71783</code>",
            "320 × 312",
            "92×92 icon placeholder + title + desc + single CTA."
          ]
        },
        {
          "cells": [
            "<strong>with icon</strong>",
            "<code>2 - vertical</code>",
            "<code>18507:71773</code>",
            "320 × 370",
            "92×92 icon + title + desc + two stacked CTAs."
          ]
        },
        {
          "cells": [
            "<strong>transaction_v1</strong>",
            "<code>1</code>",
            "<code>18507:71706</code>",
            "320 × 398",
            "Receipt layout — rows stacked (label above value). Reference row with copy icon."
          ]
        },
        {
          "cells": [
            "<strong>transaction_v2</strong>",
            "<code>1</code>",
            "<code>18507:71732</code>",
            "320 × 404",
            "Receipt layout — rows inline (label left, value right). Reference row with copy icon. Outer surface uses <code>bg-subtle</code>."
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
      "header": "Initial Assessment · node 18507:71705",
      "rows": [
        {
          "body": "<strong>DS Health</strong> — 7 variants across 2 axes. Reusable and Composable flagged Warn due to transaction layouts being compressed into a general-purpose Modal. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Baseline"
          }
        },
        {
          "body": "<strong>Duplicate scope with Overlay</strong> — Modal and Overlay (<code>47:329691</code>) are maintained independently but overlap in intent. Family consolidation required. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>C1 — Layer structure</strong> — Opacity-0 <code>_space_*</code> spacer rectangles + hardcoded icon-placeholder circle. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Enum naming</strong> — Mixed casing (<code>transaction_v1</code> vs <code>1 - vertical</code>). Sparse CTA matrix. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Native mappability</strong> — Transaction variants are a different component wearing the Modal hat. Recommend extraction into <code>EBTransactionReceipt</code>. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — State coverage</strong> — No loading / destructive / copy-success states. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster copy icon</strong> — <code>shape_half</code> / <code>shape_full</code> PNGs should be a vector icon instance. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on restructure. Token coverage is the only Ready-status criterion. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Typography note</strong> — Description copy uses <code>BarkAda</code> (secondary font). Confirm with design — otherwise covered by the standing custom-font action item. <span class=\"tag-fixed\">Info</span>",
          "delta": {
            "kind": "resolved",
            "label": "Info"
          }
        }
      ]
    }
  ]
};
