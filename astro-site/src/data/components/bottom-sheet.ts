import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/bottom-sheet.js`.
const bottomSheetDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'TitleAlignment',
        prop: 'align',
        defaultValue: 'left',
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
        ],
      },
      {
        label: 'FooterOrientation',
        prop: 'footer',
        defaultValue: 'vertical',
        options: [
          { value: 'vertical', label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' },
        ],
      },
      {
        label: 'Subtitle',
        prop: 'subtitle',
        defaultValue: 'description',
        options: [
          { value: 'none', label: 'None' },
          { value: 'supporting', label: 'Supporting' },
          { value: 'description', label: 'Description' },
        ],
      },
    ],
  },
];

export const bottomSheet: ComponentData = {
  "meta": {
    "slug": "bottom-sheet",
    "name": "Bottom Sheet",
    "node": "5304:32717",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5304-32717",
    "description": "The bottom-anchored sheet surface — a drag handle, a slotted header, an optional subtitle, and content and footer slots a consumer fills.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>5304:32717</code> in the 2026 Working File. The component is the sheet rather than its header — <code>DragHandle</code> → <code>Header</code> → <code>Description</code> → <code>Content-Slot</code> → <code>Footer-Slot</code>, with five real Figma Slots and a vector <code>Close</code> instance. Naming is complete: <code>TitleAlignment</code> and <code>FooterOrientation</code> follow §1 and §5, the subtitle is a single <code>Subtitle</code> enum enforcing an exclusivity that was previously an unwritten convention, slots are kebab-cased per §4, and text layers follow §7 as <code>Preamble → Title → Description</code>. The centred header is confirmed a deliberate second layout rather than a stripped-down first one, the present/dismiss/detent contract is documented and owner-confirmed, and the boundary with Modal and Overlay is recorded — Overlay is the scrim, Bottom Sheet is bottom-anchored and gesture-dismissible, Modal is centred and blocking. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Bottom Sheet anchors to the bottom edge over a dimmed background. In the sticker-sheet context file (12522:109042), instances are used across a wide range of content shapes: ID pickers, confirmation dialogs, transfer summaries, tips lists, welcome cards, and switch-account prompts — each with different inner composition, all wrapped in the same surface.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"bottom-sheet-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">TitleAlignment</span><select id=\"bottom-sheet-ctrl-align\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"left\" selected=\"\">Left</option><option value=\"center\">Center</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">FooterOrientation</span><select id=\"bottom-sheet-ctrl-footer\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Subtitle</span><select id=\"bottom-sheet-ctrl-subtitle\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"none\">None</option><option value=\"supporting\">Supporting</option><option value=\"description\" selected=\"\">Description</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content-Slot (illustrative)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Slot content</span><select id=\"bottom-sheet-ctrl-content\" class=\"demo-panel-select\" onchange=\"_bottomSheetUpdate()\"><option value=\"text\" selected=\"\">Empty slot</option><option value=\"list\">List picker</option><option value=\"form\">Form fields</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A list picker, a confirmation, a form and a tips list are now the same component with different slot contents. The <code>content</code> slot removed the reason every product usage previously detached or spawned a local variant."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its surface, drag handle, header structure and subtitle. It correctly does not own the scrim — that belongs to the platform presentation on both iOS and Android — though that division still needs stating for consumers."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>TitleAlignment</code> and <code>FooterOrientation</code> are PascalCase per §1 with Title Case values per §5, <code>Subtitle</code> collapses two mutually exclusive booleans into one enum so the type no longer permits an undefined combination, the five slots are kebab-cased per §4, frames are PascalCase, and text layers follow the §7 hierarchy as <code>Preamble → Title → Description</code>. The centred header carrying fewer slots is recorded as a deliberate second layout rather than an inconsistency."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Five real Figma Slots — <code>content</code>, <code>footer</code>, and three in the header — so body, actions, leading icon and trailing control are all consumer-supplied. The footer buttons are slot defaults rather than fixed structure."
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
    "resolved": [
      {
        "headline": "Scope corrected — the component is now the sheet, not its header.",
        "body": "v2.0: Rebuilt on node <code>5304:32717</code> in the 2026 Working File. The shell is <code>dragHandle</code> → <code>header</code> → <code>description</code> → <code>content</code> → <code>footer</code>, so a list picker, a confirmation and a form are all the same component with different slot contents. This was the headline finding of the previous assessment and it is fully addressed. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Content region is a real Figma Slot.",
        "body": "v2.0: The four decorative placeholder rectangles are gone. <code>content</code> is a genuine <code>SLOT</code> node, so a consumer drops their own body in without detaching and without spawning a product-local variant. This is what took Reusable and Composable from <em>fail</em> to <em>pass</em>. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Footer is a slot, not baked buttons.",
        "body": "v2.0: <code>footer</code> is a <code>SLOT</code> carrying two <code>Button - Large/Medium</code> instances as default content rather than as fixed structure. Action count and pairing are now the consumer’s decision, and the <code>footerOreintation</code> axis switches the default pair between a 312px stack and two 150px side-by-side buttons. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Header gained three named slots.",
        "body": "v2.0: <code>aboveTitleSlot</code>, <code>leadingSlot</code> and <code>trailingSlot</code> are all real <code>SLOT</code> nodes around a <code>titleBlock</code>. The raw grey circle that stood in for a leading icon and the baked close control are both replaced by slots a consumer fills. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Drag handle is a shared primitive.",
        "body": "v2.0: <code>dragHandle</code> is an instance wrapping a 32×4 <code>#C2CFE5</code> pill at radius 99999, consistent across all eight variants. The sheet no longer redraws its own affordance. (C6 · Composition)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Component renamed to Bottom Sheet.",
        "body": "v2.0: The set now reads <strong>Bottom Sheet</strong> rather than <em>Bottom Drawer</em>, matching how the pattern is actually referred to and how both platforms name it. The token namespace was not readable through the review tooling and is tracked separately. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>footerOreintation</code> typo corrected.",
        "body": "v2.1: Verified on the live node — all eight variants now read <code>footerOrientation</code>. Fixed before Code Connect or any generated native constant could bind to the misspelling, which is the cheap moment to do it. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Variant values moved to Title Case.",
        "body": "v2.1: <code>Left | Center</code>, <code>Vertical | Horizontal</code> and <code>True | False</code> across all eight variants, per §5. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Slots kebab-cased and frames moved to PascalCase.",
        "body": "v2.1: <code>content</code> → <code>Content-Slot</code>, <code>footer</code> → <code>Footer-Slot</code>, <code>aboveTitleSlot</code> → <code>Title-Slot</code>, <code>leadingSlot</code> → <code>Leading-Slot</code>, <code>trailingSlot</code> → <code>Trailing-Slot</code>, all kebab-case per §4. The wrapping frames <code>header</code> and <code>description</code> are now <code>Header</code> and <code>Description</code>, and <code>#description</code> → <code>Description</code>, dropping the last legacy sigil. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Header slots now carry real content.",
        "body": "v2.1: <code>Leading-Slot</code> holds a <code>Placeholder</code> instance as its swap target and <code>Trailing-Slot</code> holds a <code>Close</code> icon instance built on a <code>shape_full</code> boolean operation — the raster close control the original assessment flagged is gone, replaced by a vector from the shared library. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "<code>Title-Slot</code> renamed <code>Above-Title-Slot</code>.",
        "body": "v2.2: Position meaning restored. The slot sits above the title row for a badge, an illustration or an eyebrow, and its name now says so rather than implying it holds the title. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Title text layer renamed <code>Title</code>.",
        "body": "v2.2: <code>5377:35197</code> was called <code>Header</code> inside a frame also called <code>Header</code> — two things under one name in a single variant. It now reads <code>Title</code>, which resolves the collision and completes the §7 hierarchy alongside its sibling <code>Preamble</code>. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Drag Handle</code> → <code>DragHandle</code>.",
        "body": "v2.2: The space is gone, matching the unspaced PascalCase used for frames everywhere else in the system. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Naming pass complete.",
        "body": "v2.3: Verified on the live node. The <code>⤷</code> glyph is stripped from all three header slots, so the five slots now read one way — <code>Above-Title-Slot</code>, <code>Leading-Slot</code>, <code>Trailing-Slot</code>, <code>Content-Slot</code>, <code>Footer-Slot</code>, kebab-case per §4. <code>titleRow</code> and <code>titleBlock</code> are now <code>TitleRow</code> and <code>TitleBlock</code>, and the enum properties read <code>TitleAlignment</code> and <code>FooterOrientation</code> in PascalCase per §1 with Title Case values per §5. The two booleans correctly stay lowerCamelCase per §2. Nothing in the component carries a legacy name, a sigil or a decorative character. (C1 · C2 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Centred header confirmed control-free.",
        "body": "v2.4: Confirmed by the owner as a deliberate constraint. <code>TitleAlignment=Center</code> drops <code>Leading-Slot</code> and <code>Trailing-Slot</code> because a centred title serves a different kind of sheet — a confirmation, a success or a celebration, where the whole surface <em>is</em> the message and the footer carries every action. A close control in the corner of that layout competes with the centred composition and duplicates a dismissal the footer already offers. A sheet that needs a leading icon or a close button uses <code>TitleAlignment=Left</code>, which carries both slots. Native implementations should treat the two alignments as two header layouts rather than one layout with a text-align flag. Recorded so the missing slots read as a rule rather than as an incomplete variant. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Present, dismiss and detent contract documented.",
        "body": "v2.4: <strong>Height</strong> — the sheet is content-sized: it grows to fit <code>Content-Slot</code> and stops at a maximum of roughly 90% of the viewport, beyond which the content scrolls inside the sheet while the header and footer stay pinned. There is no fixed detent ladder, which is why no detent axis exists in Figma. <strong>Dismissal</strong> — the <code>DragHandle</code> is functional: swipe-down dismisses, and tapping the scrim dismisses. Where a flow must not be abandoned midway, the consumer disables both and relies on the footer actions. <strong>Scrim</strong> — supplied by the platform presentation, not by this component, which is why the set has no scrim layer. <strong>Native mapping</strong> — iOS <code>.sheet</code> with <code>.presentationDetents([.height(contentHeight), .large])</code>, <code>.presentationDragIndicator(.visible)</code> and <code>.interactiveDismissDisabled()</code> where dismissal is blocked; Android <code>ModalBottomSheet</code> with <code>sheetState</code>, <code>dragHandle = { BottomSheetDefaults.DragHandle() }</code> and <code>properties = ModalBottomSheetProperties(shouldDismissOnBackPress = …)</code>. Confirmed by the owner as the intended contract rather than an inference, so implementations can treat it as binding. (C5 · Docs)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Boundary with Modal and Overlay recorded.",
        "body": "v2.4: The three are not duplicates once their jobs are named. <strong><a href=\"#\" onclick=\"showPanelById('overlay');return false;\">Overlay</a></strong> is the scrim itself — a full-viewport dimming layer in three strength tiers, and nothing else; it is what a surface sits <em>on top of</em>. <strong>Bottom Sheet</strong> is bottom-anchored, content-sized, draggable and dismissible, for choices and flows where the underlying screen stays relevant — pickers, summaries, forms. <strong><a href=\"#\" onclick=\"showPanelById('modal');return false;\">Modal</a></strong> is centre-anchored and blocking, for confirmations that must be answered before anything else continues; it does not drag and should not be dismissible by scrim tap. The rule of thumb: bottom-anchored and dismissible by gesture is a Bottom Sheet, centred and requiring an answer is a Modal, and the dimming behind either is Overlay. Bottom Sheet does not contain a scrim because the platform presentation supplies it; Modal, which is placed rather than presented, composes Overlay directly. (C4 · Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Subtitle modelled as one enum.",
        "body": "v2.5: <code>hasSupportingText</code> × <code>hasDescription</code> is replaced by <code>Subtitle = None | Supporting | Description</code>. The two booleans were never independent — no variant in the set carries both, because they are alternative treatments of the same slot beneath the title — so the pair advertised a fourth combination the component does not define, with nothing preventing a designer landing on it. The enum enforces the exclusivity in the type rather than as an unwritten convention, and makes the matrix honest at 3 × 2 × 2 = 12 rather than a nominal 16. Accepted as a breaking property change, taken now while the cost is a reset binding in Figma rather than a native API revision after Code Connect exists. Remaining gap, now countable: <code>Center</code> ships only the <code>Description</code> subtitle, so four of the twelve are unbuilt pending the same call already made about the centred header’s slots. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Centred sheets take the Description subtitle only — matrix complete at 8.",
        "body": "v2.6: Confirmed by the owner — the centred-header rule extends to the subtitle. <code>Center</code> is the layout for confirmations, successes and celebrations, where the surface itself is the message — so it takes the fuller <code>Description</code> treatment, while <code>Supporting</code> is the denser, left-aligned option and <code>None</code> belongs to sheets whose content carries the meaning. The four <code>Center</code> × <code>Supporting|None</code> combinations are therefore unsupported rather than unbuilt, and eight is the complete matrix: <code>Left</code> × 3 subtitles × 2 footer orientations = 6, plus <code>Center</code> × <code>Description</code> × 2 = 2. Native implementations should treat a centred sheet without a description as out of contract. Recorded so the gap reads as the same rule that governs the centred header’s slots rather than as a backlog. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. Nothing in the schema blocks it: three cleanly named axes over five kebab-case slots, with the typo and the invalid identifier characters cleared and the subtitle exclusivity enforced by the type.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "left-align",
        "demoControls": bottomSheetDemoControls,
        "title": "Default",
        "node": "12522:12860",
        "description": "A modal sheet that slides up from the bottom of the screen — typically used to confirm an action, collect a single input, or surface a focused decision without leaving the current screen.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"bottom-sheet-spec-preview-left-align\"><div style=\"background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;width:240px;overflow:hidden;box-shadow:0 -2px 10px rgba(2,14,34,0.08);\"><div style=\"display:flex;align-items:flex-start;gap:8px;padding:16px 48px 8px 18px;position:relative;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-top:2px;\"></div><div style=\"flex:1;\"><div style=\"font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;\">Preamble here...</div><div style=\"font-family:'Proxima Soft',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;\">Title here of the header...</div></div><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"position:absolute;right:18px;top:18px;opacity:0.8;\"><path d=\"M6 6l12 12M18 6L6 18\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></path></svg></div><div style=\"padding:0 18px 20px;\"><div style=\"font-family:'BarkAda',serif;font-weight:500;font-size:11px;color:#445C85;line-height:1.5;\">This area is designated for descriptions...</div></div><div style=\"padding:4px 18px 20px;display:flex;flex-direction:column;gap:8px;\"><div style=\"height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;\">Label</div><div style=\"height:22px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Alignment",   "value": "Left Align",          "mono": true, "prop": "align" },
              { "key": "Preamble",    "value": "yes",                 "mono": true, "prop": "preamble" },
              { "key": "Description", "value": "yes",                 "mono": true, "prop": "desc" },
              { "key": "CTA",         "value": "Primary + Tertiary",  "mono": true, "prop": "cta" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",     "value": "#FFFFFF", "token": "bottom-sheet/color/bg" },
              { "key": "Preamble", "value": "#90A8D0", "token": "bottom-sheet/color/preamble",
                "variants": { "preamble:no": { "hide": true } }
              },
              { "key": "Header",      "value": "#0A2757", "token": "bottom-sheet/color/header" },
              { "key": "Description", "value": "#445C85", "token": "bottom-sheet/color/description",
                "variants": { "desc:no": { "hide": true } }
              },
              { "key": "Close icon", "value": "#6780A9", "token": "bottom-sheet/color/icon-close",
                "variants": { "align:center": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "360", "mono": true },
              { "key": "Corner radius", "value": "8",   "mono": true },
              { "key": "Header padding","value": "24 × 8", "mono": true },
              { "key": "Content padding","value": "24 sides · 32 bottom", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Preamble",    "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true,
                "variants": { "preamble:no": { "hide": true } }
              },
              { "key": "Title",       "value": "Proxima Soft Bold · 22 / 26", "mono": true },
              { "key": "Description", "value": "BarkAda Medium · 14 / 20", "mono": true,
                "variants": { "desc:no": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBBottomSheet</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPreamble</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAlignment</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.leading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPrimaryAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Continue\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: { }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBBottomSheet</span><span class=\"syn-punc\">(</span>\n    header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Header\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">,</span>\n    alignment <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSheetAlignment</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Leading</span><span class=\"syn-punc\">,</span>\n    primaryAction <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSheetAction</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Continue\"</span><span class=\"syn-punc\">) { }</span>\n<span class=\"syn-punc\">)</span>"
      },
      
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
