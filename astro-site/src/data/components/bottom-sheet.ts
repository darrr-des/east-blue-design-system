import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/bottom-sheet.js`.
const bottomSheetDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Alignment',
        prop: 'align',
        defaultValue: 'left',
        options: [
          { value: 'left', label: 'Left Align' },
          { value: 'center', label: 'Center Align' },
        ],
      },
      {
        label: 'Preamble',
        prop: 'preamble',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        label: 'Description',
        prop: 'desc',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        label: 'CTA',
        prop: 'cta',
        defaultValue: '2',
        options: [
          { value: '2', label: 'Primary + Tertiary' },
          { value: '1', label: 'Primary Only' },
          { value: '0', label: 'None' },
        ],
      },
    ],
  },
];

export const bottomSheet: ComponentData = {
  "meta": {
    "slug": "bottom-sheet",
    "name": "Bottom Sheet",
    "node": "12817:43833",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=12817-43833",
    "description": "The bottom-anchored sheet surface used for list pickers, confirmations, forms, and onboarding.",
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
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — rebuild around a content slot and delegate sheet mechanics to the platform",
      "text": "Three structural problems stack: (1) scope is wrong — the component is the sheet header, not the sheet; (2) the content region is 4 decorative boxes instead of a Figma Slot, so every real usage detaches or adds a new product-local variant; and (3) it overlaps with <code>Modal</code> (<code>18507:71705</code>) and <code>Overlay</code> (<code>47:329691</code>), all three independently declaring what a floating-surface-over-scrim looks like. Proposal: rebuild as <code>EBBottomSheet</code> — a thin wrapper around SwiftUI <code>.sheet</code> / Compose <code>ModalBottomSheet</code> — with explicit <em>dragHandle</em>, <em>header</em>, <em>content</em>, and <em>footer</em> slots, and consume the already-assessed Overlay for the scrim."
    }
  },
  "overview": {
    "inContextNote": "Bottom Sheet anchors to the bottom edge over a dimmed background. In the sticker-sheet context file (12522:109042), instances are used across a wide range of content shapes: ID pickers, confirmation dialogs, transfer summaries, tips lists, welcome cards, and switch-account prompts — each with different inner composition, all wrapped in the same surface.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"bottom-sheet-demo-preview\"><div style=\"position:relative;width:280px;height:360px;margin:0 auto;background:#F6F9FD;border-radius:18px;overflow:hidden;border:1px solid #E5EBF4;\"><div style=\"padding:14px;\"><div style=\"width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;\"></div><div style=\"width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;\"></div><div style=\"width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;\"></div><div style=\"width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;\"></div></div><div style=\"position:absolute;inset:0;background:#020E22;opacity:0.56;\"></div><div style=\"position:absolute;left:50%;transform:translateX(-50%);bottom:0;top:110px;display:flex;align-items:flex-start;justify-content:center;\"><div style=\"background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;width:240px;overflow:hidden;box-shadow:0 -2px 10px rgba(2,14,34,0.08);\"><div style=\"width:32px;height:4px;background:#C2C6CF;border-radius:2px;margin:8px auto 0;\"></div><div style=\"display:flex;align-items:flex-start;gap:8px;padding:16px 48px 8px 18px;position:relative;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-top:2px;\"></div><div style=\"flex:1;\"><div style=\"font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;\">Preamble here...</div><div style=\"font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;\">Title here of the header...</div></div><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"position:absolute;right:18px;top:18px;opacity:0.8;\"><path d=\"M6 6l12 12M18 6L6 18\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></path></svg></div><div style=\"padding:0 18px 20px;\"><div style=\"font-family:'BarkAda',serif;font-weight:500;font-size:11px;color:#445C85;line-height:1.5;\">This area is designated for descriptions...</div></div><div style=\"padding:4px 18px 20px;display:flex;flex-direction:column;gap:8px;\"><div style=\"height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;\">Label</div><div style=\"height:22px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;\">Label</div></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (current)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">alignment</span><select id=\"bottom-sheet-ctrl-align\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"left\" selected=\"\">Left Align</option><option value=\"center\">Center Align</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">preamble</span><select id=\"bottom-sheet-ctrl-preamble\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select id=\"bottom-sheet-ctrl-desc\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><select id=\"bottom-sheet-ctrl-cta\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"2\" selected=\"\">primary + tertiary</option><option value=\"1\">primary only</option><option value=\"0\">none</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Proposed (not in Figma yet)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">detent</span><select id=\"bottom-sheet-ctrl-detent\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"medium\" selected=\"\">medium</option><option value=\"large\">large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">drag handle</span><select id=\"bottom-sheet-ctrl-handle\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"yes\" selected=\"\">visible</option><option value=\"no\">hidden</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">scrim</span><select id=\"bottom-sheet-ctrl-scrim\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">content</span><select id=\"bottom-sheet-ctrl-content\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"text\" selected=\"\">text + CTAs</option><option value=\"list\">list picker</option><option value=\"form\">form fields</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "fail",
        "note": "The component ships only the header block — every real product usage (list picker, confirmation, form, tips list) has to either detach or duplicate the surface. Content region is 4 fixed placeholder rectangles, not a slot."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Owns its surface bg, header colours, and CTA buttons via token bindings, but redraws the modal-surface concern already owned by the separately-maintained Overlay component. Scrim is not part of the component — consumers must add Overlay by hand every time."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Token namespace is <code>main/bottom-header/color/*</code>, but the component is named <em>Bottom Drawer</em> — neither name matches common usage \"Bottom Sheet\". The Alignment axis silently changes the shape of the component (Center drops Close X, adds a headerSlot). Two axis values behave like two separate components."
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Content cannot be swapped without detaching. CTAs are hard-baked Button instances (1 primary + 1 tertiary) — count and pairing are fixed. No way to compose DS Action List, Form fields, or Filter chips inside the sheet as a first-class operation."
      }
    ],
    "behavior": [
      {
        "state": "Present / dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "iOS: <code>.sheet(isPresented:)</code>. Android: <code>ModalBottomSheet(onDismissRequest:)</code>. Slide-up entrance implied by pattern, not documented on the component."
      },
      {
        "state": "Drag handle (grabber)",
        "ios": "yes",
        "android": "yes",
        "property": "Missing",
        "notes": "No handle node in Figma. iOS renders via <code>.presentationDragIndicator(.visible)</code>. Material 3 renders via <code>ModalBottomSheet(dragHandle = { BottomSheetDefaults.DragHandle() })</code>."
      },
      {
        "state": "Detent snapping (medium / large)",
        "ios": "yes",
        "android": "yes",
        "property": "Missing",
        "notes": "Sheet height in Figma is driven by content height only — no half / full axis. Natively handled via <code>.presentationDetents([.medium, .large])</code> / <code>SheetValue.PartiallyExpanded</code>."
      },
      {
        "state": "Swipe-down-to-dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not annotated",
        "notes": "Platform-native gesture — should be configurable via a <em>dismissible</em> boolean on the wrapper."
      },
      {
        "state": "Scrim / tap-outside dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not composed",
        "notes": "Scrim lives in the separate Overlay component today (<code>47:329691</code>). Sheet should consume it, not redraw."
      },
      {
        "state": "Close button (X)",
        "ios": "yes",
        "android": "yes",
        "property": "Asymmetric",
        "notes": "Only present on <code>Left Align</code>. Raster PNG. Should become a <em>trailing</em> slot in a title-bar region, available to both alignments."
      },
      {
        "state": "Header slot (e.g. stepper)",
        "ios": "yes",
        "android": "yes",
        "property": "Center Align only",
        "notes": "Center Align silently adds a <code>headerSlot</code> used for progress bars / steppers. Left Align has no equivalent. Either surface it on both or model as its own region."
      },
      {
        "state": "Content scroll lock",
        "ios": "na",
        "android": "na",
        "property": "Not documented",
        "notes": "Background scroll locked while sheet is presented; sheet's own content scrolls independently when detent &lt; content height."
      },
      {
        "state": "Empty / loading / error (content)",
        "ios": "yes",
        "android": "yes",
        "property": "Not modeled",
        "notes": "Content slot owner's responsibility; sheet itself has no intrinsic empty/loading/error state."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Component scope is the header, not the sheet.",
        "body": "\"Bottom Drawer\" only models the rounded top surface plus a header and hard-baked CTA row. The actual sheet primitives — drag handle, detents, scrim, snap behaviour, swipe-down-to-dismiss — are absent. Every product usage in the context file (<code>12522:109042</code>) has to re-compose the sheet by hand.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Content region is 4 decorative placeholder rectangles, not a Slot.",
        "body": "Inside the body, <code>UI Slot</code>, <code>SLOT 2</code>, <code>SLOT 3</code>, <code>SLOT 4</code> are pink-dashed <code>#FFECF8</code> rectangles toggled by booleans <code>showSlot1..4</code>. They are not Figma Slots — designers can't instance-swap in Action List rows, form fields, or Filter chips without detaching.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Alignment axis hides a second component.",
        "body": "Left Align and Center Align are not just text-alignment differences: Left Align has an icon placeholder + title block + Close X on the right; Center Align has a separate <code>headerSlot</code> (used for progress bars / steppers) + title block and no Close X. These are two distinct layouts collapsed into one enum.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No drag handle primitive.",
        "body": "Nothing in the Figma tree renders a drag handle (\"grabber\"). iOS and Android expect this as an explicit visual affordance the user grabs to resize. Either add a handle node bound to a token, or document that rendering is delegated to the platform primitive.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No detent axis.",
        "body": "There's no <code>medium / large / fitContent</code> axis on the component. Sheet height is whatever the decorative slots sum to. Native APIs require a discrete detent set; the Figma model doesn't reflect this.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Scope overlap with Modal and Overlay.",
        "body": "Bottom Sheet, Modal (<code>18507:71705</code>), and Overlay (<code>47:329691</code>) all independently model \"surface above a scrim\". None of them compose each other. The scrim should live in Overlay (already assessed); Modal and Bottom Sheet should consume it.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      },
      {
        "headline": "Close X is raster and asymmetric.",
        "body": "The close icon is a Figma CDN PNG asset (<code>shape_full</code>) rendered only on Left Align — Center Align has no dismiss affordance at all. Both alignments should offer the same affordance, and it should be a vector Icon instance bound to <code>main/bottom-header/color/icon-close</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "CTAs are hard-baked, not composable.",
        "body": "A single primary button + a single tertiary button are instance-swapped inside the component with booleans <code>primaryAction</code> / <code>secondaryAction</code>. Consumers who need one button, two horizontal buttons, three stacked options, or a link-only footer have to detach. CTA should be a footer slot receiving any button composition.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Icon placeholder is a raw grey circle, not a Slot.",
        "body": "Left Align's leading icon is a hardcoded <code>#C2C6CF</code> circle inside an <code>icon-placeholder</code> frame. Same anti-pattern as Modal's icon slot. Should be a Figma Slot backed by the Icon component.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Token namespace and component name disagree.",
        "body": "The component is named \"Bottom Drawer\" while its tokens live in <code>main/bottom-header/color/*</code>. DS literature (Material, HIG) and this report use \"Bottom Sheet\". Pick one name and propagate: rename the component, rename the token collection, or both.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Blocked until the restructure lands — mapping the current schema would hardcode the wrong architecture.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Restructure around a clean shell with four named slots.",
        "body": "Target shape: <code>EBBottomSheet(isPresented, detents, dragHandle, header, content, footer)</code>. <em>header</em> = optional title bar region (title, preamble, leading icon, trailing icon / close). <em>content</em> = the one and only body Slot — accepts any DS composition (Action List, form fields, filter chips, tips list). <em>footer</em> = button group pinned to the bottom. Every current product usage becomes a <strong>composition</strong>: list picker = BottomSheet + Action List; confirmation = BottomSheet + description + button group; form = BottomSheet + Labeled Fields + button group; tips list = BottomSheet + numbered list; welcome card = BottomSheet + illustration + button group.",
        "tag": "Property"
      },
      {
        "headline": "Promote the body to a real Figma Slot.",
        "body": "Replace the 4 pink-dashed placeholder rectangles with a single named <code>content</code> Slot (Figma's Slot feature). Default to an empty 24-padded frame; let consumers instance-swap in Action List rows, form fields, or any other DS primitive without detaching.",
        "tag": "Slot"
      },
      {
        "headline": "Consolidate the Bottom Sheet / Modal / Overlay family.",
        "body": "Canonical hierarchy: <code>Overlay</code> (scrim primitive, already shipped) → consumed by both <code>Modal</code> (centered dialog) and <code>Bottom Sheet</code> (bottom-anchored sheet). The three ship distinct anchor positions but share the scrim. Do not collapse Modal and Bottom Sheet into one — native platforms treat them as separate APIs (<code>.sheet</code> vs <code>.alert</code> / <code>Dialog</code> vs <code>ModalBottomSheet</code>).",
        "tag": "Family"
      },
      {
        "headline": "Replace the Alignment enum with a proper header schema.",
        "body": "Split the silent shape-shift into explicit properties: <code>titleAlignment = left | center</code> (just text-align), <code>leadingSlot</code> (icon / avatar / empty), <code>trailingSlot</code> (close X / icon button / empty), <code>aboveTitleSlot</code> (stepper / progress bar / empty). Both alignments now share the same structural shape, just different text-align and slot content.",
        "tag": "Property"
      },
      {
        "headline": "Add an explicit detent axis.",
        "body": "Introduce <code>Detent = medium | large | fitContent</code> as a Figma variant — even if visually similar, this makes the Code Connect mapping 1:1 with <code>.presentationDetents([.medium, .large])</code> / <code>SheetValue.PartiallyExpanded</code>. Designers can then show in mocks which detent a sheet resolves to.",
        "tag": "Property"
      },
      {
        "headline": "Add a drag-handle primitive.",
        "body": "Vector rect, 32×4, radius 4, bound to a new token <code>main/bottom-header/color/drag-handle</code> (suggest <code>#C2C6CF</code>). Ship as its own tiny component so Modal-style sheets can omit it and Bottom Sheet can include it. Default visible for Bottom Sheet.",
        "tag": "Asset"
      },
      {
        "headline": "Footer action group should be a slot, not baked buttons.",
        "body": "Replace the <code>primaryAction</code> + <code>secondaryAction</code> booleans with a <code>footer</code> slot that accepts any button composition — 0, 1, 2 horizontal, 2 vertical, link-only, icon+label. Same fix that Modal needs, and both should share a new <code>EBButtonGroup</code> primitive if the team wants to keep the DS tight.",
        "tag": "Slot"
      },
      {
        "headline": "Replace the raster close icon with a vector instance.",
        "body": "Swap the Figma CDN PNG close for the DS vector <em>Close</em> icon, and bind colour to <code>main/bottom-header/color/icon-close</code> (<code>#6780A9</code>). Available on both alignments via the trailing slot.",
        "tag": "Asset"
      },
      {
        "headline": "Convert the leading icon-placeholder into an Icon slot.",
        "body": "Same pattern as Modal: add a Figma Slot for the leading icon backed by the Icon component so designers can swap without detaching. Default to a neutral status icon or nothing.",
        "tag": "Slot"
      },
      {
        "headline": "Rename the component and its token namespace.",
        "body": "Pick one: either rename the component to <strong>Bottom Sheet</strong> and rename the token collection from <code>main/bottom-header/color/*</code> to <code>main/bottom-sheet/color/*</code>, or keep \"Drawer\" and align tokens to <code>main/bottom-drawer/*</code>. Current disagreement between component name, token name, and common DS vocabulary costs designers every time they search. Recommended: rename to <strong>Bottom Sheet</strong> to match Material / HIG / this assessment.",
        "tag": "Rename"
      },
      {
        "headline": "Annotate the present / dismiss / gesture contract.",
        "body": "Document on the component: slide-up entrance, fade-out-with-scrim exit, swipe-down-to-dismiss, tap-outside-dismiss, ESC/back button behaviour, focus trap, restore-focus-on-close. Developers currently have to infer these from adjacent patterns.",
        "tag": "Docs"
      },
      {
        "headline": "Add a dismissible/modal switch.",
        "body": "Some flows (transfer confirmation, destructive action) need a non-swipe-dismiss sheet. Surface this as <code>dismissible: bool</code> on the component, mapping to iOS <code>.interactiveDismissDisabled(!dismissible)</code> and Compose <code>sheetState.confirmValueChange</code>.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "left-align",
        "demoKey": "left-align",
        "demoControls": bottomSheetDemoControls,
        "title": "Left Align",
        "node": "12522:12860",
        "description": "Header aligned to the leading edge. Ships with an optional leading icon placeholder, preamble + title stack, a trailing close X, then the decorative body slots and 2 hard-baked CTAs.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"bottom-sheet-spec-preview-left-align\"><div style=\"background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;width:240px;overflow:hidden;box-shadow:0 -2px 10px rgba(2,14,34,0.08);\"><div style=\"display:flex;align-items:flex-start;gap:8px;padding:16px 48px 8px 18px;position:relative;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-top:2px;\"></div><div style=\"flex:1;\"><div style=\"font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;\">Preamble here...</div><div style=\"font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;\">Title here of the header...</div></div><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"position:absolute;right:18px;top:18px;opacity:0.8;\"><path d=\"M6 6l12 12M18 6L6 18\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></path></svg></div><div style=\"padding:0 18px 20px;\"><div style=\"font-family:'BarkAda',serif;font-weight:500;font-size:11px;color:#445C85;line-height:1.5;\">This area is designated for descriptions...</div></div><div style=\"padding:4px 18px 20px;display:flex;flex-direction:column;gap:8px;\"><div style=\"height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;\">Label</div><div style=\"height:22px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Name",            "value": "Bottom Drawer",                            "mono": true },
              { "key": "Alignment",       "value": "Left Align",                               "mono": true, "prop": "align" },
              { "key": "Preamble",        "value": "yes",                                      "mono": true, "prop": "preamble" },
              { "key": "Description",     "value": "yes",                                      "mono": true, "prop": "desc" },
              { "key": "CTA",             "value": "Primary + Tertiary",                       "mono": true, "prop": "cta" },
              { "key": "iconPlaceholder", "value": "boolean (default true)",                   "mono": true },
              { "key": "Header",          "value": "string \"Title here of the header...\"",   "mono": true },
              { "key": "showSlot1..4",    "value": "booleans — decorative only",               "mono": true },
              { "key": "Close X",         "value": "Hardcoded — raster PNG" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",           "value": "#FFFFFF", "token": "bottom-header/color/bg" },
              { "key": "Preamble",          "value": "#90A8D0", "token": "bottom-header/color/preamble" },
              { "key": "Header",            "value": "#0A2757", "token": "bottom-header/color/header" },
              { "key": "Description",      "value": "#445C85",  "token": "bottom-header/color/description" },
              { "key": "Close icon",       "value": "#6780A9",  "token": "bottom-header/color/icon-close" },
              { "key": "Primary CTA bg",   "value": "#005CE5",  "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label","value": "#FFFFFF",  "token": "button/primary/brand/enabled/label" },
              { "key": "Tertiary CTA",     "value": "#005CE5",  "token": "button/tertiary/brand/enabled/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",                  "value": "360",                            "mono": true },
              { "key": "Height (default)",       "value": "324",                            "mono": true },
              { "key": "Corner radius (top)",    "value": "8",                              "mono": true },
              { "key": "Corner radius (bottom)", "value": "0",                              "mono": true },
              { "key": "Header padding",         "value": "pt 24 · pb 8 · pl 24 · pr 48",   "mono": true },
              { "key": "Header gap (icon ↔ title)", "value": "8",                          "mono": true },
              { "key": "Preamble ↔ title gap",   "value": "6",                              "mono": true },
              { "key": "Content padding",        "value": "24 sides · 32 bottom",           "mono": true },
              { "key": "Description pb",         "value": "12",                             "mono": true },
              { "key": "CTA group padding",      "value": "px 24 · pb 36",                  "mono": true },
              { "key": "CTA gap",                "value": "12",                             "mono": true },
              { "key": "Primary button radius",  "value": "99 (pill)",                      "mono": true },
              { "key": "Close icon size",        "value": "24 · top 24 · right 24",         "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Preamble style",    "value": "Primary/Label/Small",          "mono": true },
              { "key": "Preamble font",     "value": "Proxima Soft · Bold · 14 / 14","mono": true },
              { "key": "Preamble tracking", "value": "0.25",                         "mono": true },
              { "key": "Title style",       "value": "Primary/Headlines/Section",    "mono": true },
              { "key": "Title font",        "value": "Proxima Soft · Bold · 22 / 26","mono": true },
              { "key": "Title tracking",    "value": "0",                            "mono": true },
              { "key": "Description style", "value": "Secondary/Default/Base",       "mono": true },
              { "key": "Description font",  "value": "BarkAda · Medium · 14 / 20",   "mono": true },
              { "key": "CTA label style",   "value": "Primary/Label/Large",          "mono": true },
              { "key": "CTA font",          "value": "Proxima Soft · Bold · 18 / 18","mono": true },
              { "key": "Header alignment",  "value": "left",                         "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBottomSheet</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPreamble</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAlignment</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.leading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Continue\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBottomSheet</span><span class=\"syn-punc\">(</span>\n    header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">,</span>\n    alignment <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSheetAlignment</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Leading</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSheetAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Continue\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "center-align",
        "demoKey": "center-align",
        "demoControls": bottomSheetDemoControls,
        "title": "Center Align",
        "node": "12817:43834",
        "description": "Header centered. Silently drops the leading icon + trailing close X and adds an above-title <code>headerSlot</code> used for progress bars / steppers. Same body placeholders and hard-baked CTAs as Left Align.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"bottom-sheet-spec-preview-center-align\"><div style=\"background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;width:240px;overflow:hidden;box-shadow:0 -2px 10px rgba(2,14,34,0.08);\"><div style=\"padding:16px 18px 8px 18px;text-align:center;\"><div style=\"height:4px;background:linear-gradient(90deg,#005CE5 60%,#E5EBF4 60%);border-radius:2px;margin-bottom:10px;\"></div><div style=\"font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;\">Preamble here...</div><div style=\"font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;\">Title here of the header...</div></div><div style=\"padding:0 18px 20px;text-align:center;\"><div style=\"font-family:'BarkAda',serif;font-weight:500;font-size:11px;color:#445C85;line-height:1.5;\">This area is designated for descriptions...</div></div><div style=\"padding:4px 18px 20px;display:flex;flex-direction:column;gap:8px;\"><div style=\"height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;\">Label</div><div style=\"height:22px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Name",         "value": "Bottom Drawer",                                         "mono": true },
              { "key": "Alignment",    "value": "Center Align",                                          "mono": true, "prop": "align" },
              { "key": "Preamble",     "value": "yes",                                                   "mono": true, "prop": "preamble" },
              { "key": "Description",  "value": "yes",                                                   "mono": true, "prop": "desc" },
              { "key": "CTA",          "value": "Primary + Tertiary",                                    "mono": true, "prop": "cta" },
              { "key": "headerSlot",   "value": "boolean (default true) — above-title",                  "mono": true },
              { "key": "Header",       "value": "string \"Title here of the header...\"",                "mono": true },
              { "key": "Leading icon", "value": "Not present in Center Align" },
              { "key": "Close X",      "value": "Not present in Center Align" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",            "value": "#FFFFFF", "token": "bottom-header/color/bg" },
              { "key": "Preamble",           "value": "#90A8D0", "token": "bottom-header/color/preamble" },
              { "key": "Header",             "value": "#0A2757", "token": "bottom-header/color/header" },
              { "key": "Description",        "value": "#445C85", "token": "bottom-header/color/description" },
              { "key": "Close icon",         "value": "#6780A9", "token": "bottom-header/color/icon-close" },
              { "key": "Primary CTA bg",     "value": "#005CE5", "token": "button/primary/brand/enabled/bg" },
              { "key": "Primary CTA label",  "value": "#FFFFFF", "token": "button/primary/brand/enabled/label" },
              { "key": "Tertiary CTA",       "value": "#005CE5", "token": "button/tertiary/brand/enabled/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",                  "value": "360",                              "mono": true },
              { "key": "Height (default)",       "value": "330",                              "mono": true },
              { "key": "Corner radius (top)",    "value": "8",                                "mono": true },
              { "key": "Header padding",         "value": "pt 24 · pb 8 · px 24",             "mono": true },
              { "key": "Header gap (slot ↔ title)","value": "16",                            "mono": true },
              { "key": "Preamble ↔ title gap",   "value": "6",                                "mono": true },
              { "key": "Header slot height",     "value": "~16 (progress bar / stepper)",     "mono": true },
              { "key": "Content padding",        "value": "24 sides · 32 bottom",             "mono": true },
              { "key": "Description pb",         "value": "12",                               "mono": true },
              { "key": "CTA group padding",      "value": "px 24 · pb 36",                    "mono": true },
              { "key": "CTA gap",                "value": "12",                               "mono": true },
              { "key": "Primary button radius",  "value": "99 (pill)",                        "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Preamble style",    "value": "Primary/Label/Small",          "mono": true },
              { "key": "Preamble font",     "value": "Proxima Soft · Bold · 14 / 14","mono": true },
              { "key": "Title style",       "value": "Primary/Headlines/Section",    "mono": true },
              { "key": "Title font",        "value": "Proxima Soft · Bold · 22 / 26","mono": true },
              { "key": "Description style", "value": "Secondary/Default/Base",       "mono": true },
              { "key": "Description font",  "value": "BarkAda · Medium · 14 / 20",   "mono": true },
              { "key": "CTA label style",   "value": "Primary/Label/Large",          "mono": true },
              { "key": "CTA font",          "value": "Proxima Soft · Bold · 18 / 18","mono": true },
              { "key": "Header alignment",  "value": "center",                       "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBottomSheet</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPreamble</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAlignment</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.center</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Continue\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBottomSheet</span><span class=\"syn-punc\">(</span>\n    header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">,</span>\n    alignment <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSheetAlignment</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Center</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSheetAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Continue\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Default sheet with header + CTA
      buildStatelessColorsTable({
        title: 'Default — Colors',
        description: 'Bottom sheet with preamble, heading, description, optional close icon, and primary CTA.',
        rows: [
          { role: 'Surface',           token: 'bottom-header/color/bg',          value: '#FFFFFF' },
          { role: 'Preamble',          token: 'bottom-header/color/preamble',    value: '#90A8D0' },
          { role: 'Header',            token: 'bottom-header/color/header',      value: '#0A2757' },
          { role: 'Description',       token: 'bottom-header/color/description', value: '#445C85' },
          { role: 'Close icon',        token: 'bottom-header/color/icon-close',  value: '#6780A9' },
          { role: 'Primary CTA bg',    token: 'button/primary/brand/enabled/bg', value: '#005CE5' },
          { role: 'Primary CTA label', token: 'button/primary/brand/enabled/label', value: '#FFFFFF' },
        ],
      }),
      // Card 2 — Without close icon
      buildStatelessColorsTable({
        title: 'No Close — Colors',
        description: 'Same surface palette as Default; close icon omitted (modal-style mandatory action).',
        rows: [
          { role: 'Surface',     token: 'bottom-header/color/bg',          value: '#FFFFFF' },
          { role: 'Preamble',    token: 'bottom-header/color/preamble',    value: '#90A8D0' },
          { role: 'Header',      token: 'bottom-header/color/header',      value: '#0A2757' },
          { role: 'Description', token: 'bottom-header/color/description', value: '#445C85' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "description": "The current Figma schema (alignment + 9 booleans) is not fit for 1:1 mapping. The table below maps the proposed post-restructure schema to native APIs.",
      "rows": [
        {
          "figma": "<code>isPresented</code>",
          "swift": "<code>.sheet(isPresented: $binding)</code>",
          "compose": "<code>if (showSheet) ModalBottomSheet(onDismissRequest:)</code>"
        },
        {
          "figma": "<code>detents</code>",
          "swift": "<code>.presentationDetents([.medium, .large])</code>",
          "compose": "<code>sheetState = rememberModalBottomSheetState(…)</code> + <code>Detent</code> enum"
        },
        {
          "figma": "<code>dragHandle = visible|hidden</code>",
          "swift": "<code>.presentationDragIndicator(.visible / .hidden)</code>",
          "compose": "<code>dragHandle = { BottomSheetDefaults.DragHandle() }</code> or <code>null</code>"
        },
        {
          "figma": "<code>titleAlignment = leading|center</code>",
          "swift": "<code>titleAlignment: .leading / .center</code>",
          "compose": "<code>titleAlignment = Alignment.Start / Center</code>"
        },
        {
          "figma": "<code>leading</code> slot",
          "swift": "<code>leading: { EBAvatar(…) }</code> (ViewBuilder)",
          "compose": "<code>leading: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<code>trailing</code> slot (e.g. close)",
          "swift": "<code>trailing: { EBIconButton(.close) { dismiss() } }</code>",
          "compose": "<code>trailing: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<code>aboveTitle</code> slot (progress / stepper)",
          "swift": "<code>aboveTitle: { EBProgressBar(…) }</code>",
          "compose": "<code>aboveTitle: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "<code>preamble</code>",
          "swift": "<code>preamble: String?</code>",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "<code>title</code>",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "<code>description</code>",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "<code>content</code> slot",
          "swift": "<code>@ViewBuilder content: () -&gt; Content</code> (trailing closure)",
          "compose": "<code>content: @Composable ColumnScope.() -&gt; Unit</code>"
        },
        {
          "figma": "<code>footer</code> slot",
          "swift": "<code>footer: () -&gt; Footer</code>",
          "compose": "<code>footer: @Composable RowScope.() -&gt; Unit</code>"
        },
        {
          "figma": "<code>dismissible</code>",
          "swift": "<code>.interactiveDismissDisabled(!dismissible)</code>",
          "compose": "<code>sheetState.confirmValueChange = { dismissible }</code>"
        },
        {
          "figma": "(legacy) <code>alignment = Left Align</code>",
          "swift": "→ split into <code>titleAlignment</code> + <code>leading</code> + <code>trailing</code>",
          "compose": "→ split into <code>titleAlignment</code> + <code>leading</code> + <code>trailing</code>"
        },
        {
          "figma": "(legacy) <code>showSlot1..4</code> booleans",
          "swift": "→ removed, replaced by <code>content</code> slot",
          "compose": "→ removed, replaced by <code>content</code> slot"
        },
        {
          "figma": "(legacy) <code>primaryAction</code> / <code>secondaryAction</code>",
          "swift": "→ removed, replaced by <code>footer</code> slot",
          "compose": "→ removed, replaced by <code>footer</code> slot"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Modal trait",
        "ios": "<code>.sheet</code> applies the modal trait automatically — VoiceOver traps focus inside the sheet.",
        "android": "<code>ModalBottomSheet</code> treats content as modal by default — TalkBack swipe is contained."
      },
      {
        "requirement": "Focus management",
        "ios": "Focus moves to the sheet on present; restores to trigger on dismiss. If a first-field focus is desired, use <code>.focused($firstField)</code>.",
        "android": "Focus enters sheet content on show; restored to trigger on dismiss. Request initial focus via <code>LaunchedEffect</code> + <code>focusRequester</code>."
      },
      {
        "requirement": "Title as heading",
        "ios": "Mark the title Text with <code>.accessibilityAddTraits(.isHeader)</code> so VoiceOver reads it first.",
        "android": "Use <code>Modifier.semantics { heading() }</code> on the title; set <code>paneTitle</code> on the sheet surface."
      },
      {
        "requirement": "Drag handle announcement",
        "ios": "iOS's built-in grabber is announced as \"Adjustable\". Custom handles need <code>.accessibilityLabel(\"Resize sheet\")</code> and <code>.accessibilityAdjustableAction</code>.",
        "android": "Material 3 default handle exposes resize action. Custom handles need <code>Modifier.semantics { contentDescription = \"Resize sheet\" }</code>."
      },
      {
        "requirement": "Dismiss gesture",
        "ios": "Swipe-down + ESC + tap-outside all route through <code>isPresented</code>. For non-dismissible, use <code>.interactiveDismissDisabled(true)</code>.",
        "android": "Back gesture + tap-outside via <code>onDismissRequest</code>. Non-dismissible: <code>sheetState.confirmValueChange = { false }</code>."
      },
      {
        "requirement": "Close button (if trailing slot)",
        "ios": "Wrap 24×24 icon in a ≥44×44pt tappable area. Label: <code>.accessibilityLabel(\"Close\")</code>.",
        "android": "Wrap 24×24 icon in a ≥48×48dp tappable area. <code>contentDescription = stringResource(R.string.close)</code>."
      },
      {
        "requirement": "Destructive CTA",
        "ios": "Use <code>role: .destructive</code> on the footer button.",
        "android": "Use <code>EBButtonDefaults.destructiveColors()</code> and explicit <code>contentDescription</code>."
      },
      {
        "requirement": "Reduce motion",
        "ios": "Respect <code>UIAccessibility.isReduceMotionEnabled</code> — skip slide-up / use cross-fade.",
        "android": "Respect <code>Settings.Global.ANIMATOR_DURATION_SCALE</code> — shorten animation when accessibility demands it."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Scope is the header, not the sheet. Content region is 4 decorative placeholder rectangles instead of a Figma Slot. Icon-placeholder is a raw circle. Component name (\"Bottom Drawer\") disagrees with token namespace (\"bottom-header\") and DS convention (\"Bottom Sheet\")."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Alignment axis collapses two structurally different layouts (Left has leading icon + close X; Center has above-title headerSlot + no close X). No detent axis. 9 booleans (<code>showSlot1..4</code>, <code>primaryAction</code>, <code>secondaryAction</code>, <code>preamble</code>, <code>description</code>, <code>iconPlaceholder</code>) that should be slots."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Surface, preamble, header, description, close icon all bound to <code>main/bottom-header/color/*</code>. Icon-placeholder grey (<code>#C2C6CF</code>) is hardcoded. Drag-handle token doesn't exist yet (component has no handle)."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Does not map to <code>.sheet</code> / <code>ModalBottomSheet</code> as-is. No detent axis, no drag handle, no dismissible contract, hard-baked CTAs. After restructure → clean 1:1 mapping."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only default state. No drag states (resting / dragging / snapping), no present / dismiss transition annotation, no empty / loading / error state guidance for the content slot."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Close X is a remote raster PNG (<code>shape_full</code> from Figma CDN) rather than a vector Icon instance. Icon-placeholder is a raw <code>#C2C6CF</code> circle, not a vector icon slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on restructure. Scope overlap with Modal and Overlay must be resolved; mapping the current schema would hardcode the wrong architecture."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "Single axis — <code>Alignment = Left Align | Center Align</code>. The header shape-shifts across these two values (see Open Issues).",
      "columns": [
        "#",
        "Alignment",
        "Node",
        "Dimensions",
        "Header slots present",
        "Notes"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<strong>Left Align</strong>",
            "<code>12522:12860</code>",
            "360 × 324",
            "iconPlaceholder (leading) · preamble · title · Close X (trailing, raster)",
            "Title + preamble left-aligned next to optional leading icon. Close X fixed top-right at (24, 24)."
          ]
        },
        {
          "cells": [
            "2",
            "<strong>Center Align</strong>",
            "<code>12817:43834</code>",
            "360 × 330",
            "headerSlot (above-title, e.g. progress bar) · preamble · title",
            "No leading icon, no close X. Adds an <code>headerSlot</code> used for progress bars / steppers. Title + preamble centered."
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
      "header": "Initial Assessment · node 12817:43833",
      "rows": [
        {
          "body": "<strong>DS Health</strong> — 2 variants across 1 axis (<code>alignment</code>). Reusable and Composable both Fail: content is decorative placeholders, CTAs are hard-baked, no Slot architecture. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Baseline"
          }
        },
        {
          "body": "<strong>C1 — Component scope</strong> — Registered as \"Bottom Drawer\" but only models the sheet header + CTA area. Actual sheet primitives (drag handle, detents, scrim) absent. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C1 — Content region</strong> — 4 decorative placeholder rectangles (<code>UI Slot</code>, <code>SLOT 2..4</code>) toggled by booleans instead of a Figma Slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Alignment axis</strong> — Left vs Center are not just text-alignment; Center adds an above-title headerSlot and drops Close X. Two component shapes collapsed into one enum. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C2 — Naming disagreement</strong> — Component named \"Bottom Drawer\", tokens in <code>main/bottom-header/color/*</code>, DS convention is \"Bottom Sheet\". Recommend rename to Bottom Sheet. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Native mappability</strong> — No detent axis, no drag handle, hard-baked CTAs. Does not map to <code>.sheet</code> / <code>ModalBottomSheet</code> until restructure. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Interaction states</strong> — No drag states, no empty / loading / error guidance for the content slot, no present / dismiss transition annotation. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster close icon</strong> — Close X is a Figma CDN PNG (<code>shape_full</code>). Should be a vector Icon instance bound to <code>main/bottom-header/color/icon-close</code>. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on restructure. Scope overlap with Modal (<code>18507:71705</code>) and Overlay (<code>47:329691</code>) must be resolved first. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Family note</strong> — Recommended hierarchy: Overlay (scrim, shipped) → consumed by Modal (centered) + Bottom Sheet (bottom-anchored). Do not collapse Modal and Bottom Sheet; native APIs are distinct. <span class=\"tag-fixed\">Family</span>",
          "delta": {
            "kind": "resolved",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Typography note</strong> — Description uses <code>BarkAda</code> (secondary font) at <code>Secondary/Default/Base</code>. Covered by the standing custom-font action item. <span class=\"tag-fixed\">Info</span>",
          "delta": {
            "kind": "resolved",
            "label": "Info"
          }
        }
      ]
    }
  ]
};
