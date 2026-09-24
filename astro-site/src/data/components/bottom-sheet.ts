import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/bottom-sheet.js`.
// Panel mirrors the property panel of set 5304:32717, in its order: four
// variant axes then the seven booleans. The five SLOTs get no control.
const bottomSheetDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'TitleAlignment',
        prop: 'titlealignment',
        defaultValue: 'left',
        options: [
          { value: 'center', label: 'Center' },
          { value: 'left',   label: 'Left' },
        ],
      },
      {
        label: 'FooterOrientation',
        prop: 'footerorientation',
        defaultValue: 'vertical',
        options: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical',   label: 'Vertical' },
        ],
      },
      { label: 'hasSupportingText', prop: 'hassupportingtext', control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasDescription', prop: 'hasdescription', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'showDragHandle', prop: 'showdraghandle', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasAboveTitleSlot', prop: 'hasabovetitleslot', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasPreamble', prop: 'haspreamble', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasLeadingSlot', prop: 'hasleadingslot', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasTrailingSlot', prop: 'hastrailingslot', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasContent', prop: 'hascontent', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasFooter', prop: 'hasfooter', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "bs-spec-main",
        "demoKey": "main",
        "title": "Bottom Sheet",
        "node": "5304:32717",
        "description": "A 360-wide sheet — drag handle, header with preamble and title, an optional description or supporting text, a content slot and a one- or two-button footer.",
        "previewHtml": "<div id=\"bottom-sheet-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": bottomSheetDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "TitleAlignment",
                "value": "Left",
                "prop": "titlealignment"
              },
              {
                "key": "FooterOrientation",
                "value": "Vertical",
                "prop": "footerorientation"
              },
              {
                "key": "hasSupportingText",
                "value": "False",
                "prop": "hassupportingtext"
              },
              {
                "key": "hasDescription",
                "value": "True",
                "prop": "hasdescription"
              },
              {
                "key": "showDragHandle",
                "value": "True",
                "prop": "showdraghandle"
              },
              {
                "key": "hasAboveTitleSlot",
                "value": "True",
                "prop": "hasabovetitleslot"
              },
              {
                "key": "hasPreamble",
                "value": "True",
                "prop": "haspreamble"
              },
              {
                "key": "hasLeadingSlot",
                "value": "True",
                "prop": "hasleadingslot"
              },
              {
                "key": "hasTrailingSlot",
                "value": "True",
                "prop": "hastrailingslot"
              },
              {
                "key": "hasContent",
                "value": "True",
                "prop": "hascontent"
              },
              {
                "key": "hasFooter",
                "value": "True",
                "prop": "hasfooter"
              },
              {
                "key": "⤷ Above-Title-Slot",
                "value": "Slot · 8 items",
                "variants": {
                  "hasabovetitleslot:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Leading-Slot",
                "value": "Slot · 6 items",
                "variants": {
                  "hasleadingslot:false": {
                    "hide": true
                  },
                  "titlealignment:center": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Trailing-Slot",
                "value": "Slot · 6 items — Close",
                "variants": {
                  "hastrailingslot:false": {
                    "hide": true
                  },
                  "titlealignment:center": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Content-Slot",
                "value": "Slot · 8 items",
                "variants": {
                  "hascontent:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Footer-Slot",
                "value": "Slot · 8 items — Button - Large/Medium",
                "variants": {
                  "hasfooter:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "5304:32718 · 360 × 404",
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
                "key": "Sheet",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Drag handle",
                "value": "#C2CFE5",
                "token": "—",
                "swatch": "#C2CFE5",
                "variants": {
                  "showdraghandle:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Preamble",
                "value": "#90A8D0",
                "token": "—",
                "swatch": "#90A8D0",
                "variants": {
                  "haspreamble:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "swatch": "#0A2757"
              },
              {
                "key": "Supporting text",
                "value": "#445C85",
                "token": "—",
                "swatch": "#445C85",
                "variants": {
                  "hassupportingtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "#445C85",
                "token": "—",
                "swatch": "#445C85",
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Primary button",
                "value": "#005CE5 / #FFFFFF",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "hasfooter:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Secondary button",
                "value": "Transparent / #005CE5",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "hasfooter:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "360 × 404",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Width",
                "value": "360 — fixed",
                "mono": true
              },
              {
                "key": "Top radius",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "24 sides",
                "mono": true
              },
              {
                "key": "Drag handle",
                "value": "32 × 4 centred · 12 row",
                "mono": true,
                "variants": {
                  "showdraghandle:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Above-Title-Slot",
                "value": "312 × 16",
                "mono": true,
                "variants": {
                  "hasabovetitleslot:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Header",
                "value": "24 top · slot 16 · 16 gap · TitleRow · 8 bottom",
                "mono": true
              },
{
                "key": "TitleRow",
                "value": "72 tall",
                "mono": true,
                "prop": "titlerow-readout"
              },
              {
                "key": "Title column",
                "value": "232 wide — wraps clear of the trailing slot",
                "mono": true,
                "variants": {
                  "titlealignment:center": {
                    "value": "312 wide"
                  },
                  "hasleadingslot:false": {
                    "value": "276 wide"
                  }
                }
              },
{
                "key": "Leading / Trailing slot",
                "value": "32 circle · 24 × 24",
                "mono": true,
                "variants": {
                  "titlealignment:center": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "32 row · text 312 wide",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Content-Slot",
                "value": "360 × 64",
                "mono": true,
                "variants": {
                  "hascontent:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Footer-Slot",
                "value": "160 tall · two 312 × 50 buttons",
                "mono": true,
                "variants": {
                  "hasfooter:false": {
                    "hide": true
                  },
                  "footerorientation:horizontal": {
                    "value": "98 tall · two 150 × 50 buttons, 12 apart"
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
                "key": "Preamble",
                "value": "Primary/Label/Small",
                "mono": true,
                "variants": {
                  "haspreamble:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Supporting text",
                "value": "Secondary/Bold/Base",
                "mono": true,
                "variants": {
                  "hassupportingtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "Secondary/Default/Base",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBBottomSheet(\n    title: \"Title here of the header...\",\n    preamble: \"Preamble here...\",\n    description: \"This is a body description\"\n)\n    .ebTitleAlignment(.left)\n    .ebFooterOrientation(.vertical)\n    .ebTrailing(.close) { dismiss() }\n    .ebFooter { EBButton(\"Label\") { }; EBTextButton(\"Label\") { } }",
        "compose": "EBBottomSheet(\n    title = \"Title here of the header...\",\n    preamble = \"Preamble here...\",\n    description = \"This is a body description\",\n    titleAlignment = EBTitleAlignment.Left,\n    footerOrientation = EBFooterOrientation.Vertical,\n    trailing = { EBIconButton(EBIcons.Close) { dismiss() } },\n    footer = { EBButton(\"Label\") { }; EBTextButton(\"Label\") { } },\n    onDismiss = { dismiss() }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Role",
        "description": "Read off <code>get_node_info</code> across the eight variants of set <code>5304:32717</code>; nothing changes with the axes. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Sheet",
            "token": "—",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Drag handle",
            "token": "—",
            "values": [
              "#C2CFE5"
            ]
          },
          {
            "role": "Preamble",
            "token": "—",
            "values": [
              "#90A8D0"
            ]
          },
          {
            "role": "Title",
            "token": "—",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Supporting text / Description",
            "token": "—",
            "values": [
              "#445C85"
            ]
          },
          {
            "role": "Primary button / label",
            "token": "—",
            "values": [
              "#005CE5 / #FFFFFF"
            ]
          },
          {
            "role": "Secondary button label",
            "token": "—",
            "values": [
              "#005CE5"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:bottom-sheet:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.bottomsheet.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>5304:32717</code>, in panel order, then the five SLOTs. <code>hasSupportingText</code> and <code>hasDescription</code> are never both True, and Center ships only with a description.",
      "rows": [
        {
          "figma": "TitleAlignment — Center, Left",
          "swift": "<code>.ebTitleAlignment(.center / .left)</code>",
          "compose": "<code>titleAlignment = EBTitleAlignment.Center / Left</code>"
        },
        {
          "figma": "FooterOrientation — Horizontal, Vertical",
          "swift": "<code>.ebFooterOrientation(.horizontal / .vertical)</code>",
          "compose": "<code>footerOrientation = EBFooterOrientation.Horizontal / Vertical</code>"
        },
        {
          "figma": "hasSupportingText — boolean",
          "swift": "<code>supportingText: String?</code>",
          "compose": "<code>supportingText: String? = null</code>"
        },
        {
          "figma": "hasDescription — boolean",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "showDragHandle — boolean",
          "swift": "<code>.ebDragHandle(false)</code> to drop it",
          "compose": "<code>showDragHandle: Boolean = true</code>"
        },
        {
          "figma": "hasAboveTitleSlot — boolean",
          "swift": "<code>.ebAboveTitle { }</code>",
          "compose": "<code>aboveTitle: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasPreamble — boolean",
          "swift": "<code>preamble: String?</code>",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "hasLeadingSlot — boolean",
          "swift": "<code>.ebLeading { }</code>",
          "compose": "<code>leading: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasTrailingSlot — boolean",
          "swift": "<code>.ebTrailing(.close) { }</code>",
          "compose": "<code>trailing: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasContent — boolean",
          "swift": "<code>.ebContent { }</code>",
          "compose": "<code>content: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasFooter — boolean",
          "swift": "<code>.ebFooter { }</code>",
          "compose": "<code>footer: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "⤷ Above-Title / Leading / Trailing / Content / Footer slots",
          "swift": "the closures above",
          "compose": "the lambdas above"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/BottomSheet/EBBottomSheet.swift",
        "compose": "android/components/bottomsheet/EBBottomSheet.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Left · vertical footer",
        "swift": "<span class=\"cmt\">// TitleAlignment=Left, FooterOrientation=Vertical, hasDescription=True — 5304:32718, 360 × 404.</span>\nEBBottomSheet(\n    title: \"Confirm your transfer\",\n    preamble: \"Review\",\n    description: \"Double-check the details before you send.\"\n)\n    .ebTitleAlignment(.left)\n    .ebFooterOrientation(.vertical)\n    .ebTrailing(.close) { dismiss() }\n    .ebFooter { EBButton(\"Send\") { send() }; EBTextButton(\"Cancel\") { dismiss() } }",
        "compose": "<span class=\"cmt\">// TitleAlignment=Left, FooterOrientation=Vertical, hasDescription=True — 5304:32718, 360 × 404.</span>\nEBBottomSheet(\n    title = \"Confirm your transfer\",\n    preamble = \"Review\",\n    description = \"Double-check the details before you send.\",\n    titleAlignment = EBTitleAlignment.Left,\n    footerOrientation = EBFooterOrientation.Vertical,\n    trailing = { EBIconButton(EBIcons.Close) { dismiss() } },\n    footer = { EBButton(\"Send\") { send() }; EBTextButton(\"Cancel\") { dismiss() } },\n    onDismiss = { dismiss() }\n)"
      },
      {
        "subheading": "Left · horizontal footer",
        "swift": "<span class=\"cmt\">// FooterOrientation=Horizontal — 5304:32769, 360 × 342; two 150-wide buttons.</span>\nEBBottomSheet(title: \"Confirm your transfer\", description: \"…\")\n    .ebFooterOrientation(.horizontal)\n    .ebFooter { EBTextButton(\"Cancel\") { dismiss() }; EBButton(\"Send\") { send() } }",
        "compose": "<span class=\"cmt\">// FooterOrientation=Horizontal — 5304:32769, 360 × 342; two 150-wide buttons.</span>\nEBBottomSheet(\n    title = \"Confirm your transfer\",\n    description = \"…\",\n    footerOrientation = EBFooterOrientation.Horizontal,\n    footer = { EBTextButton(\"Cancel\") { dismiss() }; EBButton(\"Send\") { send() } },\n    onDismiss = { dismiss() }\n)"
      },
      {
        "subheading": "Supporting text",
        "swift": "<span class=\"cmt\">// hasSupportingText=True, hasDescription=False — 5377:35367, 360 × 398; the text sits inside the title block.</span>\nEBBottomSheet(\n    title: \"Confirm your transfer\",\n    supportingText: \"This is a supporting text\"\n)",
        "compose": "<span class=\"cmt\">// hasSupportingText=True, hasDescription=False — 5377:35367, 360 × 398; the text sits inside the title block.</span>\nEBBottomSheet(\n    title = \"Confirm your transfer\",\n    supportingText = \"This is a supporting text\",\n    onDismiss = { dismiss() }\n)"
      },
      {
        "subheading": "Centred title",
        "swift": "<span class=\"cmt\">// TitleAlignment=Center — 5304:32755, 360 × 378; the leading and trailing slots are dropped.</span>\nEBBottomSheet(\n    title: \"You’re all set\",\n    preamble: \"Done\",\n    description: \"This is description\"\n)\n    .ebTitleAlignment(.center)",
        "compose": "<span class=\"cmt\">// TitleAlignment=Center — 5304:32755, 360 × 378; the leading and trailing slots are dropped.</span>\nEBBottomSheet(\n    title = \"You’re all set\",\n    preamble = \"Done\",\n    description = \"This is description\",\n    titleAlignment = EBTitleAlignment.Center,\n    onDismiss = { dismiss() }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Sheet semantics",
        "ios": "Present as a sheet with <code>.presentationDetents</code>; focus moves to the title, which carries <code>.isHeader</code>.",
        "android": "<code>ModalBottomSheet</code> with <code>Modifier.semantics { paneTitle = title }</code>."
      },
      {
        "requirement": "Drag handle",
        "ios": "Decorative — <code>.accessibilityHidden(true)</code>; dismissal is the Close button or the swipe gesture.",
        "android": "<code>dragHandle</code> is not focusable; keep <code>onDismissRequest</code>."
      },
      {
        "requirement": "Close",
        "ios": "The 24 × 24 Close needs a 44pt target and the label “Close”.",
        "android": "48dp target and a <code>contentDescription</code>."
      },
      {
        "requirement": "Footer order",
        "ios": "Vertical puts the primary first; horizontal puts it on the right. Keep the reading order primary-last on horizontal.",
        "android": "Same — mind the traversal order when the footer is a Row."
      },
      {
        "requirement": "Contrast",
        "ios": "Title #0A2757 is 14.58:1 on white; supporting text and description #445C85 are 6.74:1. The preamble #90A8D0 is 2.41:1, below AA. White on the #005CE5 button is 5.10:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the description for one line under the header, the supporting text when it belongs with the title block.",
        "dontText": "Don’t use both — the set never ships them together."
      },
      {
        "doText": "Use a vertical footer when the primary action needs full width.",
        "dontText": "Don’t put more than two buttons in the footer."
      },
      {
        "doText": "Keep the drag handle on for a sheet the user can swipe away.",
        "dontText": "Don’t hide the handle and the Close button at once — the sheet becomes a trap."
      },
      {
        "doText": "Use the centred title for confirmations with no leading icon.",
        "dontText": "Don’t expect a leading or trailing slot on Center; the set drops both."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>DragHandle</code>, <code>Header</code>, <code>Above-Title-Slot</code>, <code>TitleRow</code>, <code>TitleBlock</code>, <code>Description</code>, <code>Content-Slot</code> and <code>Footer-Slot</code> — semantic throughout, no <code>#</code> sigils."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Two PascalCase axes plus seven booleans, but <code>hasSupportingText</code> and <code>hasDescription</code> are variant axes rather than booleans, and only 8 of their 16 combinations are built."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All four text layers resolve <code>matched</code> — <code>Primary/Label/Small</code>, <code>Primary/Headlines/Section</code>, <code>Secondary/Bold/Base</code>, <code>Secondary/Default/Base</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to one sheet with two enums, five optional slots and optional strings."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A container; the buttons and the Close carry their own states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Five real SLOTs — 8, 6, 6, 8 and 8 swap options — plus a Close instance and Button - Large/Medium instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Four axes, seven booleans and five slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "<code>TitleAlignment</code> (2) × <code>FooterOrientation</code> (2) × <code>hasSupportingText</code> (2) × <code>hasDescription</code> (2) would be 16; 8 are built. The two text axes never combine, and Center ships only with a description. The seven booleans add none.",
      "columns": [
        "TitleAlignment",
        "FooterOrientation",
        "hasSupportingText",
        "hasDescription",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Left",
            "Vertical",
            "False",
            "True",
            "<code>5304:32718</code>",
            "360 × 404"
          ]
        },
        {
          "cells": [
            "Left",
            "Vertical",
            "True",
            "False",
            "<code>5377:35367</code>",
            "360 × 398"
          ]
        },
        {
          "cells": [
            "Left",
            "Vertical",
            "False",
            "False",
            "<code>5377:35438</code>",
            "360 × 372"
          ]
        },
        {
          "cells": [
            "Center",
            "Vertical",
            "False",
            "True",
            "<code>5304:32755</code>",
            "360 × 378"
          ]
        },
        {
          "cells": [
            "Left",
            "Horizontal",
            "False",
            "True",
            "<code>5304:32769</code>",
            "360 × 342"
          ]
        },
        {
          "cells": [
            "Left",
            "Horizontal",
            "True",
            "False",
            "<code>5377:35473</code>",
            "360 × 336"
          ]
        },
        {
          "cells": [
            "Left",
            "Horizontal",
            "False",
            "False",
            "<code>5377:35510</code>",
            "360 × 310"
          ]
        },
        {
          "cells": [
            "Center",
            "Horizontal",
            "False",
            "True",
            "<code>5304:32806</code>",
            "360 × 316"
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
      "header": "Leading slot drawn round · node 5304:32717",
      "rows": [
        {
          "body": "<strong>The Leading-Slot placeholder is a 32 circle</strong>, matching the round Placeholder instance the set ships; it had been drawn as a rounded square.",
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
      "header": "Title wraps inside its column · node 5304:32717",
      "rows": [
        {
          "body": "<strong>The title no longer runs under the Close button.</strong> It wraps to the column Figma gives it — 232 on Left with a leading slot, 276 without, 312 on Center — instead of drawing fixed lines.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The TitleRow height now follows the wrap</strong> — preamble 20, then 26 a line, then 26 for the supporting text. That reproduces all three measured shapes: 72 on Left, 98 with supporting text and 46 on Center.",
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
      "header": "Style + Code tabs rebuilt against the live set · node 5304:32717",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — four variant axes and seven booleans, with the five SLOTs listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 wide, stacked: DragHandle 12, Header (Above-Title-Slot 16 then the TitleRow), Description 32, Content-Slot 64 and a Footer-Slot of 160 vertical or 98 horizontal. Heights run 310 to 404.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>TitleRow height follows the content</strong> — 72 on Left, 98 with supporting text, 46 on Center, which drops the leading and trailing slots altogether.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> Preamble → <code>Primary/Label/Small</code>, Title → <code>Primary/Headlines/Section</code>, supporting text → <code>Secondary/Bold/Base</code>, description → <code>Secondary/Default/Base</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:bottom-sheet:2.0.0</code>, a twelve-row mapping, four snippets and an eight-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Only 8 of the 16 combinations are built.</strong> <code>hasSupportingText</code> and <code>hasDescription</code> never combine, and Center ships only with a description, so the panel snaps. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Two booleans are variant axes.</strong> <code>hasSupportingText</code> and <code>hasDescription</code> sit beside <code>hasPreamble</code> and <code>hasContent</code>, which are real booleans — the same idea expressed two ways. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The footer swaps button order with orientation.</strong> Vertical puts the primary on top; horizontal puts it on the right, with the secondary first in the layer order. <span class=\"tag-open tag-a11y\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>The preamble fails AA</strong> — #90A8D0 is 2.41:1 on white at 14pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Heights with the booleans off are computed, not read</strong> — every variant ships them on, so the hidden layers report stale coordinates. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
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
