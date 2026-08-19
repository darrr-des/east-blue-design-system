import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/upload-file.js`.
const uploadFileDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'state',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'uploading', label: 'Uploading' },
          { value: 'uploaded', label: 'Uploaded' },
          { value: 'thumbnail', label: 'Uploaded with thumbnail' },
          { value: 'error', label: 'Upload error' },
        ],
      },
      {
        label: 'hasLabel',
        prop: 'hasLabel',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'hasThumbnail',
        prop: 'hasThumbnail',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'disabled',
        prop: 'disabled',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];

export const uploadFile: ComponentData = {
  "meta": {
    "slug": "upload-file",
    "name": "Upload File",
    "node": "4853:26511",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4853-26511",
    "description": "A file-upload field with a tappable upload affordance, file-name display, and progress/error states.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4853:26511</code> in the 2026 Working File, and the headline recommendation has landed: the conflated state property is now <code>Status = Default | Uploading | Error | Uploaded</code> × <code>State = Default | Focused | Disabled</code>, the two-axis split §6 of the Property Naming Guidelines prescribes, with the four unsupported combinations documented as unreachable. <code>Thumbnail-Slot</code> is a real Figma Slot on a token-bound placeholder, the label and subtext rows reuse the shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances, the file row is cleanly named throughout, the <code>boder</code> token typo is fixed, and the Lottie dependency behind the <code>Uploading</code> status is documented including its failure fallback. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Upload File appears in forms requiring document proof (KYC, insurance claims, verification).",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"140\" viewBox=\"0 0 200 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"128\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Upload Docs</text>\n          \n          <rect x=\"42\" y=\"36\" width=\"40\" height=\"4\" rx=\"1\" fill=\"#0A2757\" opacity=\".8\"></rect>\n          <rect x=\"42\" y=\"44\" width=\"116\" height=\"22\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></rect>\n          <path d=\"M50 52v2a1.4 1.4 0 002.8 0v-3a2 2 0 00-4 0v3\" stroke=\"#6780A9\" stroke-width=\"0.9\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <text x=\"62\" y=\"58\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Attach file / photo</text>\n          \n          <rect x=\"42\" y=\"72\" width=\"60\" height=\"4\" rx=\"1\" fill=\"#0A2757\" opacity=\".8\"></rect>\n          <rect x=\"42\" y=\"80\" width=\"116\" height=\"22\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"></rect>\n          <path d=\"M50 88v2a1.4 1.4 0 002.8 0v-3a2 2 0 00-4 0v3\" stroke=\"#6780A9\" stroke-width=\"0.9\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <text x=\"62\" y=\"94\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">ID_proof.jpg</text>\n          <path d=\"M148 88l3 3 3-3\" stroke=\"#6780A9\" stroke-width=\"1\" fill=\"none\" stroke-linecap=\"round\"></path>\n          \n          <rect x=\"42\" y=\"112\" width=\"116\" height=\"14\" rx=\"7\" fill=\"#005CE5\"></rect>\n          <text x=\"100\" y=\"122\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Submit</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"uf-demo-preview\"><svg width=\"304\" height=\"98\" viewBox=\"0 0 304 98\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"1\" width=\"302\" height=\"70\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"2\"></rect><path d=\"M22 34 v6 a4 4 0 008 0 v-8 a6 6 0 00-12 0 v8\" stroke=\"#6780A9\" stroke-width=\"1.4\" fill=\"none\" stroke-linecap=\"round\"></path><text x=\"38\" y=\"42\" fill=\"#005CE5\" font-size=\"18\" font-weight=\"600\" font-family=\"'Proxima Soft', system-ui\">Attach file / photo</text><text x=\"2\" y=\"88\" fill=\"#6780A9\" font-size=\"12\" font-weight=\"600\" font-family=\"'BarkAda', system-ui\">Accepted format: JPEG, PNG, or PDF, Up to 3 MB</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" id=\"uf-demo-state\" onchange=\"updateUploadFileDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"uploading\">Uploading</option><option value=\"uploaded\">Uploaded</option><option value=\"error\">Upload error</option><option value=\"thumbnail\">Uploaded with thumbnail</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLabel</span><select class=\"demo-panel-select\" id=\"uf-demo-label\" onchange=\"updateUploadFileDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used in KYC flows, insurance claims, profile setup — anywhere a user uploads a document or photo. <code>Status</code> covers the full upload lifecycle — Default, Uploading, Uploaded and Error."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own bg, border, padding and radius, and composes shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances for labelling and helper copy. The progress-bar GIF is a Figma-preview device only — native drives the platform progress primitive from real upload percentage, with no asset to bundle."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The property model is exemplary — <code>Status</code> and <code>State</code> on separate axes, the split §6 of the Property Naming Guidelines prescribes — with the four unsupported combinations documented as unreachable rather than undrawn. The file row, the Figma Slot and the shared scaffolding instances all follow convention; the two internal container frames keep their original names as a recorded exception."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "The thumbnail is a real Figma <code>SLOT</code> (<code>Thumbnail-Slot</code>), so product teams can drop in a file preview without detaching, and the component composes shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances for its label and helper rows."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "state=Default",
        "notes": "Empty input with paperclip + \"Attach file / photo\" label"
      },
      {
        "state": "Uploading",
        "ios": "yes",
        "android": "yes",
        "property": "state=Uploading",
        "notes": "Shows file name + Lottie progress bar + percentage"
      },
      {
        "state": "Uploaded",
        "ios": "yes",
        "android": "yes",
        "property": "state=Uploaded",
        "notes": "File name + trailing trash icon to remove"
      },
      {
        "state": "Uploaded with thumbnail",
        "ios": "yes",
        "android": "yes",
        "property": "state=Uploaded with thumbnail",
        "notes": "52×52 image preview + truncated file name + trash. Should be orthogonal <code>hasThumbnail</code> prop."
      },
      {
        "state": "Upload error",
        "ios": "yes",
        "android": "yes",
        "property": "state=Upload error",
        "notes": "Red 2px border + red subtext (\"Maximum file size: 20MB\")"
      },
      {
        "state": "Disabled / Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not defined. Engineers must improvise. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [
      {
        "headline": "Property naming cleaned up.",
        "body": "v2.0: Rebuilt on node <code>4853:26511</code> in the 2026 Working File. <code>Upload error</code> → <code>Error</code> (no space), <code>Uploaded with thumbnail</code> split so thumbnail presence is no longer folded into the state value, and <code>hasLabel</code> is gone — the label is now an always-present <code>FormGroup Header</code> instance. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Label and subtext scaffolding reused.",
        "body": "v2.0: Every variant composes a shared <code>FormGroup Header</code> above and a <code>Subtext Message</code> below, matching Text Area. The label, helper copy and error message are no longer re-authored per component. (Composition)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Axis renamed <code>State</code> → <code>Status</code>.",
        "body": "v2.1: <code>Uploading</code>, <code>Uploaded</code> and <code>Error</code> are process outcomes rather than interaction states, so <code>Status</code> is the correct axis per the Property Naming Guidelines. Closes the half-applied state restructure. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Disabled variant added.",
        "body": "v2.1: A fifth variant covers the read-only case that KYC review and locked submission screens need — previously there was no canonical appearance for it. Added on the <code>Status</code> axis rather than a separate <code>State</code> axis; see open issues for the consequence. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Error variant structure normalised.",
        "body": "v2.1: <code>Status=Error</code> now wraps its <code>input-field</code> in an <code>Attach File - Input</code> frame (<code>6526:105078</code>) like the other four variants. Previously it was the only one missing that layer, which made the tree inconsistent across the set. Its filename layer was also renamed <code>#name</code> → <code>FileName</code>. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>State</code> split onto its own axis.",
        "body": "v2.2: <code>Status = Default | Uploading | Uploaded | Error</code> × <code>State = Default | Disabled</code>, authored as a deliberately sparse sparse matrix. <code>Disabled × Uploading</code> and <code>Disabled × Error</code> are intentionally left unauthored — an upload in flight is already non-interactive, and an error you can't act on is a dead end. Process outcome and interaction state are now cleanly separated, and <code>Pressed</code> / <code>Focused</code> have somewhere to live. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Disabled + Uploaded variant authored.",
        "body": "v2.2: <code>6572:111324</code> covers the locked review screen showing an already-attached document — the case the single-axis set couldn't express. Muted container, muted filename, and the subtext dims with it. The trash icon is muted rather than removed, a deliberate choice to signal that deletion returns when the form unlocks. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Thumbnail converted to a Figma Slot.",
        "body": "v2.2: <code>Icon Placeholder</code> is now <code>Thumbnail-Slot</code>, a real <code>SLOT</code> node (<code>6572:111570</code>) carrying an <code>icon-placeholder</code> rectangle as its default content. Product teams can drop a real file preview in without detaching, and the hardcoded placeholder colour is now slot default rather than baked component chrome. Closes the placeholder, slot-adoption and thumbnail-token findings together. (C6 · Slot)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Error progress bar removed.",
        "body": "v2.2: <code>Status=Error</code> no longer renders a 20% progress bar against its <em>\"Maximum file size: 20MB\"</em> message — a file rejected for size never starts uploading, so the two contradicted. Variant height dropped 167 → 148 to match. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>label</code> wrapper renamed to <code>FileRow</code>.",
        "body": "v2.2: The frame holding the thumbnail, attach icon and filename is now <code>FileRow</code> rather than <code>label</code>, which had described none of its contents. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Progress-bar layer names cleaned up.",
        "body": "v2.3: <code>🟢 https://app.lottiefiles.com/animation/0a1cb540-…</code> → <code>progress-fill</code>, and the progress percentage text <code>#label</code> → <code>ProgressValue</code>. The filename wrapper also went <code>name</code> → <code>FileNameWrapper</code>. Layer naming is now clean apart from <code>container</code>. The asset behind <code>progress-fill</code> is a separate finding — see open issues. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Focused</code> state added.",
        "body": "v2.4: <code>State = Default | Focused | Disabled</code>, with <code>Focused</code> authored against <code>Status=Default</code> (<code>6572:111764</code>) and <code>Status=Uploaded</code> (<code>6572:111782</code>) — the same two pairings <code>Disabled</code> carries, and for the same reason. Eight variants in the sparse matrix. Completes interaction-state coverage, since <code>Pressed</code> is deliberately out of scope. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Layer naming complete across all eight variants.",
        "body": "v2.5: The wrapper frame is now exactly <code>UploadField</code> in all eight variants — verified by exact string match, with no trailing whitespace and no leftover <code>container</code>. An intermediate pass had left three different names for the same frame, including five with an invisible trailing space that would have broken name-based override matching. Together with <code>FileRow</code>, <code>FileName</code>, <code>FileNameWrapper</code>, <code>ProgressValue</code> and <code>Thumbnail-Slot</code>, every layer in the set now carries a correct, consistent semantic name. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Token namespace resolved — generic tokens applied.",
        "body": "v2.4: Closed by owner confirmation. The component-scoped <code>main/upload-file/color/*</code> namespace was dropped in favour of the shared generic token scale, which retires the <code>boder</code> misspelling along with it — there is no longer a per-component tier carrying the typo. Same direction Search Field and Text Area took. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Progress-bar GIF confirmed preview-only.",
        "body": "v2.4: Closed by owner decision — the animated GIF fill on <code>progress-fill</code> exists so the Figma variant previews motion, not as a handoff asset. Native implementations use the platform progress primitive (SwiftUI <code>ProgressView(value:)</code>, Compose <code>LinearProgressIndicator(progress =)</code>) driven by real upload percentage; the Figma fill is never exported. Worth stating in the handoff notes so an implementer doesn't mistake it for a required asset. (C6)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "<code>Pressed</code> ruled out of scope.",
        "body": "v2.2: Closed by owner decision — Upload File will not carry a <code>Pressed</code> variant. Tapping the field opens the system file picker, and both platforms supply their own touch feedback for that transition, so a DS-defined pressed appearance would add a variant without adding information. <code>Focused</code> remains in scope; it carries accessibility weight that <code>Pressed</code> does not. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "State property restructured onto two axes.",
        "body": "v2.4: Verified on the live node. The single conflated axis is now <code>Status = Default | Uploading | Error | Uploaded</code> × <code>State = Default | Focused | Disabled</code> — system report and user interaction on separate properties, exactly the split §6 of the Property Naming Guidelines now prescribes. This is the recommendation applied. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Thumbnail is a real Figma Slot.",
        "body": "v2.4: <code>Thumbnail-Slot</code> (<code>6572:111553</code>) is a genuine <code>SLOT</code> node, not a frame standing in for one, and its name is kebab-case per §4. A consumer swaps their own thumbnail in without detaching, and native handoff has a real content slot to bind. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Label and subtext scaffolding reuses the shared components.",
        "body": "v2.4: The row above the field is a <code>FormGroup Header</code> instance and the row below is a <code>Subtext Message</code> instance — the same two Upload File’s siblings use, rather than redrawn locally. A change to either propagates across Form Elements for free. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "File row layer naming cleaned up.",
        "body": "v2.4: <code>FileRow</code>, <code>FileNameWrapper</code>, <code>FileName</code> and <code>TrailingAction</code> all read as PascalCase semantic names, and the trailing control is a real <code>Trash</code> icon instance rather than a drawn glyph. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Container frame names accepted as-is.",
        "body": "v2.5: <code>Attach File - Input</code> and <code>input-field</code> keep their current names by owner decision. They are internal structural frames rather than slots or text layers, nothing binds to them, and renaming carried more churn than the consistency was worth. Recorded so a later reviewer reads them as a settled exception rather than a missed pass. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Unsupported variant combinations documented.",
        "body": "v2.5: Eight of twelve combinations ship, and the four gaps are deliberate. <code>Uploading</code> has no Focused or Disabled because a field mid-transfer is not interactive — the control is busy, not available. <code>Error</code> has no Focused or Disabled because the error state is what a user focuses in order to fix, so it collapses back to <code>Default</code> the moment they do, and a disabled field cannot have failed an upload it was never able to start. Only <code>Default</code> and <code>Uploaded</code> carry the full interaction range. Native implementations should treat the missing combinations as unreachable rather than undrawn. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>boder</code> token typo corrected.",
        "body": "v2.5: Fixed in the token collection on owner confirmation, before Code Connect could bind generated native constants to the misspelling. Attested rather than verified — token names are not readable through the review tooling. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Thumbnail placeholder confirmed token-bound.",
        "body": "v2.5: The placeholder inside <code>Thumbnail-Slot</code> fills <code>#EEF2F9</code>, the shared surface value used across Form Elements rather than a local hex. Confirmed by the owner; variable bindings are not readable through the review tooling, so this is attested. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Lottie dependency documented.",
        "body": "v2.5: The <code>Uploading</code> status is driven by a Lottie animation the static component cannot depict — the file row holds its layout while the animation plays in place of the thumbnail. It loops for the duration of the transfer and is replaced, not stopped, when the status moves to <code>Uploaded</code> or <code>Error</code>. If the animation fails to load, implementations should fall back to the platform’s indeterminate progress indicator rather than an empty slot, so the field never reads as idle while a transfer is running. Progress is indeterminate by design: the component reports that an upload is happening, not how far along it is. (Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The property schema is clean and every layer is semantically named, so mapping is a mechanical step once the library lands.",
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
        "cardKey": "default-—-empty-state",
        "demoKey": "default",
        "demoControls": uploadFileDemoControls,
        "title": "Default — empty state",
        "node": "18482:35065",
        "description": "Empty state with paperclip + \"Attach file / photo\" placeholder text. 2px border, white bg. Subtext below lists accepted formats.",
        "previewHtml": "<div id=\"uf-preview-default\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "Variant",
                "value": "Default — empty state",
                "mono": false
              },
              {
                "key": "hasLabel",
                "value": "no",
                "prop": "hasLabel",
                "mono": false
              },
              {
                "key": "hasThumbnail",
                "value": "false",
                "prop": "hasThumbnail",
                "mono": true
              },
              {
                "key": "disabled",
                "value": "false",
                "prop": "disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "uploading-—-lottie-progress",
        "demoKey": "uploading",
        "demoControls": uploadFileDemoControls,
        "title": "Uploading — Lottie progress",
        "node": "18482:35084",
        "description": "Shows file name + 5px-tall Lottie progress bar + percentage. Height grows to 91px to accommodate the progress row.",
        "previewHtml": "<div id=\"uf-preview-uploading\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Uploading",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "Variant",
                "value": "Uploading — Lottie progress",
                "mono": false
              },
              {
                "key": "hasLabel",
                "value": "no",
                "prop": "hasLabel",
                "mono": false
              },
              {
                "key": "hasThumbnail",
                "value": "false",
                "prop": "hasThumbnail",
                "mono": true
              },
              {
                "key": "disabled",
                "value": "false",
                "prop": "disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "uploaded-—-file-name-+-trash",
        "demoKey": "uploaded",
        "demoControls": uploadFileDemoControls,
        "title": "Uploaded — file name + trash",
        "node": "18482:35119",
        "description": "File name (<code>GCash_File.png</code>) + trailing trash icon for removal.",
        "previewHtml": "<div id=\"uf-preview-uploaded\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Uploaded",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "Variant",
                "value": "Uploaded — file name + trash",
                "mono": false
              },
              {
                "key": "hasLabel",
                "value": "no",
                "prop": "hasLabel",
                "mono": false
              },
              {
                "key": "hasThumbnail",
                "value": "false",
                "prop": "hasThumbnail",
                "mono": true
              },
              {
                "key": "disabled",
                "value": "false",
                "prop": "disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "uploaded-with-thumbnail-—-preview-+-name",
        "demoKey": "thumbnail",
        "demoControls": uploadFileDemoControls,
        "title": "Uploaded with thumbnail — preview + name",
        "node": "18482:35163",
        "description": "52×52 thumbnail preview + truncated file name (<code>New_GCash_Fi….jpeg</code>) + trash. Recommended to split into <code>state=uploaded</code> + <code>hasThumbnail: true</code>.",
        "previewHtml": "<div id=\"uf-preview-thumbnail\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Uploaded with thumbnail",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "Variant",
                "value": "Uploaded with thumbnail — preview + name",
                "mono": false
              },
              {
                "key": "hasLabel",
                "value": "no",
                "prop": "hasLabel",
                "mono": false
              },
              {
                "key": "hasThumbnail",
                "value": "true",
                "prop": "hasThumbnail",
                "mono": true
              },
              {
                "key": "disabled",
                "value": "false",
                "prop": "disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "upload-error-—-red-border-+-error-subtext",
        "demoKey": "error",
        "demoControls": uploadFileDemoControls,
        "title": "Upload error — red border + error subtext",
        "node": "18482:35142",
        "description": "Red 2px border + red error subtext (\"Maximum file size: 20MB\").",
        "previewHtml": "<div id=\"uf-preview-error\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Error",
                "mono": false,
                "prop": "state"
              },
              {
                "key": "Variant",
                "value": "Upload error — red border + error subtext",
                "mono": false
              },
              {
                "key": "hasLabel",
                "value": "no",
                "prop": "hasLabel",
                "mono": false
              },
              {
                "key": "hasThumbnail",
                "value": "false",
                "prop": "hasThumbnail",
                "mono": true
              },
              {
                "key": "disabled",
                "value": "false",
                "prop": "disabled",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "input-field/error/bg" },
              { "key": "Border", "value": "#D61B2C", "token": "input-field/error/border" },
              { "key": "Text", "value": "#0A2757", "token": "input-field/error/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/error/placeholder" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Upload icon",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">, </span>selection<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Attach file\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    onFileChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Error</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "bg",
            "values": [
              "main/upload-file/color/default/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/upload-file/color/default/boder typo",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "leading icon",
            "values": [
              "main/upload-file/color/default/icon-leading",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "trailing icon",
            "values": [
              "main/upload-file/color/default/icon-trailing",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/upload-file/color/default/label",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "file name",
            "values": [
              "main/upload-file/color/default/label-name",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "progress label",
            "values": [
              "main/upload-file/color/default/progress-label",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "thumbnail bg",
            "values": [
              "— (hardcoded #0057E4 @ 5%) not tokenized",
              "—"
            ]
          },
          {
            "role": "Error",
            "token": "bg",
            "values": [
              "main/upload-file/color/error/bg",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "border",
            "values": [
              "main/upload-file/color/error/boder typo",
              "#D61B2C"
            ]
          },
          {
            "role": "—",
            "token": "leading icon",
            "values": [
              "main/upload-file/color/error/icon-leading",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/upload-file/color/error/label",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "file name",
            "values": [
              "main/upload-file/color/error/label-name",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "error subtext",
            "values": [
              "main/subtext-message/error/label",
              "#D61B2C"
            ]
          },
          {
            "role": "Subtext",
            "token": "default label",
            "values": [
              "main/subtext-message/primary/label",
              "#6780A9"
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
            "role": "Container width",
            "token": "—",
            "values": [
              "304px"
            ]
          },
          {
            "role": "Input height (default/uploaded/error)",
            "token": "—",
            "values": [
              "72px"
            ]
          },
          {
            "role": "Input height (uploading)",
            "token": "—",
            "values": [
              "91px (adds progress row)"
            ]
          },
          {
            "role": "Border width",
            "token": "—",
            "values": [
              "2px"
            ]
          },
          {
            "role": "Corner radius",
            "token": "radius/radius-2",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Horizontal padding",
            "token": "—",
            "values": [
              "16px (12L / 16R for thumbnail)"
            ]
          },
          {
            "role": "Vertical padding",
            "token": "—",
            "values": [
              "24px"
            ]
          },
          {
            "role": "Icon → name gap",
            "token": "space/space-4",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Thumbnail size",
            "token": "—",
            "values": [
              "52 × 52"
            ]
          },
          {
            "role": "Thumbnail → name gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Label → input gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Input → subtext gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Progress bar height",
            "token": "—",
            "values": [
              "5px"
            ]
          },
          {
            "role": "Progress bar width",
            "token": "—",
            "values": [
              "250px"
            ]
          },
          {
            "role": "Leading / trailing icon size",
            "token": "—",
            "values": [
              "24 × 24"
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
            "role": "Label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold · 14 / 14 · +0.25"
            ]
          },
          {
            "role": "File name / placeholder",
            "token": "Primary/Label/Light/Large",
            "values": [
              "Proxima Soft Semibold · 18 / 18 · +0.25"
            ]
          },
          {
            "role": "Subtext",
            "token": "Secondary/Bold/Caption",
            "values": [
              "BarkAda Semibold · 12 / 18"
            ]
          },
          {
            "role": "Progress percentage",
            "token": "Secondary/Bold/Small Caption",
            "values": [
              "BarkAda Semibold · 10 / 15"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Requires: lottie-ios for progress animation</span>\n<span class=\"str\">\"https://github.com/airbnb/lottie-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:upload-file:1.0.0\"</span>)\n    <span class=\"cmt\">// Requires: lottie-compose for progress animation</span>\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.airbnb.android:lottie-compose:6.4.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "state=Default/Uploading/Uploaded/Upload error",
          "swift": "state: EBUploadState",
          "compose": "state: .default / .uploading / .uploaded / .error"
        },
        {
          "figma": "state=Uploaded with thumbnail",
          "swift": "state=uploaded + hasThumbnail",
          "compose": ".hasThumbnail(true)"
        },
        {
          "figma": "hasLabel=yes/no",
          "swift": "label: String?",
          "compose": "label: String?"
        },
        {
          "figma": "—",
          "swift": "fileName: String?",
          "compose": "fileName: String?"
        },
        {
          "figma": "—",
          "swift": "progress: Double",
          "compose": "progress: Double (0.0–1.0)"
        },
        {
          "figma": "thumbnail placeholder",
          "swift": "Figma Slot → ViewBuilder",
          "compose": "@ViewBuilder thumbnail"
        },
        {
          "figma": "—",
          "swift": "disabled: Bool",
          "compose": ".disabled(true)"
        },
        {
          "figma": "—",
          "swift": "onSelect / onRemove",
          "compose": "onSelect / onRemove"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/UploadFile/EBUploadFile.swift",
        "compose": "android/components/uploadfile/EBUploadFile.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default — empty state</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Proof of ID\"</span>, <span class=\"prp\">onSelect</span>: { url <span class=\"kw\">in</span>\n    <span class=\"cmt\">// handle picked file</span>\n})\n\n<span class=\"cmt\">// Uploading</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">fileName</span>: <span class=\"str\">\"GCash_File.png\"</span>, <span class=\"prp\">progress</span>: <span class=\"kw\">0.2</span>)\n    .<span class=\"fn\">ebState</span>(.<span class=\"prp\">uploading</span>)\n\n<span class=\"cmt\">// Uploaded with thumbnail (Figma Slot)</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">fileName</span>: <span class=\"str\">\"ID_proof.jpg\"</span>, <span class=\"prp\">onRemove</span>: { ... }) {\n    <span class=\"typ\">AsyncImage</span>(url: imageURL)\n        .<span class=\"fn\">aspectRatio</span>(contentMode: .fill)\n        .<span class=\"fn\">clipShape</span>(<span class=\"typ\">RoundedRectangle</span>(cornerRadius: <span class=\"kw\">4</span>))\n}\n.<span class=\"fn\">ebState</span>(.<span class=\"prp\">uploaded</span>)\n\n<span class=\"cmt\">// Error</span>\n<span class=\"typ\">EBUploadFile</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Upload receipt\"</span>,\n    <span class=\"prp\">errorMessage</span>: <span class=\"str\">\"Maximum file size: 20MB\"</span>)\n    .<span class=\"fn\">ebState</span>(.<span class=\"prp\">error</span>)",
        "compose": "<span class=\"cmt\">// Default — empty state</span>\n<span class=\"typ\">EBUploadFile</span>(\n    label = <span class=\"str\">\"Proof of ID\"</span>,\n    onSelect = { uri -&gt; /* handle picked file */ }\n)\n\n<span class=\"cmt\">// Uploading</span>\n<span class=\"typ\">EBUploadFile</span>(\n    state = <span class=\"typ\">EBUploadState</span>.<span class=\"prp\">Uploading</span>,\n    fileName = <span class=\"str\">\"GCash_File.png\"</span>,\n    progress = <span class=\"kw\">0.2f</span>\n)\n\n<span class=\"cmt\">// Uploaded with thumbnail (Figma Slot)</span>\n<span class=\"typ\">EBUploadFile</span>(\n    state = <span class=\"typ\">EBUploadState</span>.<span class=\"prp\">Uploaded</span>,\n    fileName = <span class=\"str\">\"ID_proof.jpg\"</span>,\n    onRemove = { /* ... */ }\n) {\n    <span class=\"typ\">AsyncImage</span>(\n        model = imageUrl,\n        contentDescription = null,\n        modifier = <span class=\"typ\">Modifier</span>.<span class=\"fn\">clip</span>(<span class=\"typ\">RoundedCornerShape</span>(<span class=\"kw\">4</span>.dp))\n    )\n}\n\n<span class=\"cmt\">// Error</span>\n<span class=\"typ\">EBUploadFile</span>(\n    state = <span class=\"typ\">EBUploadState</span>.<span class=\"prp\">Error</span>,\n    label = <span class=\"str\">\"Upload receipt\"</span>,\n    errorMessage = <span class=\"str\">\"Maximum file size: 20MB\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code> when empty; announce as \"Upload\" when actionable",
        "android": "<code>Role.Button</code> in semantics"
      },
      {
        "requirement": "File picked announcement",
        "ios": "Announce file name after selection via <code>.accessibilityAnnouncement</code>",
        "android": "<code>AccessibilityManager.announce()</code>"
      },
      {
        "requirement": "Progress announcement",
        "ios": "<code>.accessibilityValue(\"\\(Int(progress * 100)) percent\")</code>",
        "android": "<code>stateDescription = \"$percent percent\"</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "Include error message in accessibility label; use <code>.isRejected</code> trait",
        "android": "<code>semantics { error(...) }</code>"
      },
      {
        "requirement": "Remove button",
        "ios": "Separate accessibility element: <code>.accessibilityLabel(\"Remove \\(fileName)\")</code>",
        "android": "<code>contentDescription = \"Remove $fileName\"</code>"
      },
      {
        "requirement": "Tap target",
        "ios": "72px height &gt; 44pt minimum",
        "android": "&gt; 48dp minimum"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the thumbnail slot for image uploads (ID photos, receipts) so users can verify the correct file was picked.",
        "dontText": "Show a generic thumbnail placeholder as the final state — either show the real thumbnail or use the plain uploaded state with just the filename."
      },
      {
        "doText": "Always pair the default state with subtext listing accepted formats and size limits so users don't discover constraints only via error state.",
        "dontText": "Let users attempt uploads silently only to show an error — preempt format / size violations on the client side."
      },
      {
        "doText": "Use the error state for client-side validation failures (size, format). Show a specific error message indicating what needs to change.",
        "dontText": "Use the error state for network failures during upload — those are transient. Show a toast or retry affordance instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic: <code>input-field</code>, <code>Attach</code>, <code>Trash</code>, <code>Icon Placeholder</code>, <code>upload-file-progress</code>, <code>Subtext Message</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>hasLabel</code> yes/no, <code>state</code> has \"Upload error\" with space, <code>\"Uploaded with thumbnail\"</code> is orthogonal."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Library-wide <code>boder</code> token typo. Thumbnail bg hardcoded."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to PhotosPicker / DocumentPicker (iOS), GetContent / PickVisualMedia (Android)."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No disabled, pressed, or focused states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Thumbnail is a placeholder; Lottie dependency needs documentation."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2 cleanup."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 10,
      "description": "5 <code>state</code> × 2 <code>hasLabel</code> = <strong>10 variants</strong>. Clean matrix — every combination exists.",
      "columns": [
        "State",
        "hasLabel",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Default</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Uploading</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Uploaded</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Upload error</strong>",
            "yes + no",
            "2"
          ]
        },
        {
          "cells": [
            "<strong>Uploaded with thumbnail</strong>",
            "yes + no",
            "2"
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
      "header": "Initial Assessment · node 18482:35064",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 10 variants (5 state × 2 hasLabel). Lottie progress bar, thumbnail placeholder. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Property naming issues</strong> — <code>hasLabel=yes/no</code>, <code>state=\"Upload error\"</code> has a space, <code>\"Uploaded with thumbnail\"</code> is orthogonal to the state axis. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Token typo</strong> — All border tokens spelled <code>boder</code>. Library-level rename needed. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Thumbnail bg hardcoded</strong> — <code>#0057E4 @ 5%</code> not tokenized. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Missing states</strong> — No disabled, pressed, or focused. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Thumbnail placeholder + Lottie dependency</strong> — Thumbnail is not a slot; Lottie requires asset bundling. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
