import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/upload-file.js`.
const uploadFileDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Status',
        prop: 'status',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'uploading', label: 'Uploading' },
          { value: 'error', label: 'Error' },
          { value: 'uploaded', label: 'Uploaded' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'focused', label: 'Focused' },
        ],
      },
      {
        label: 'hasLabel',
        prop: 'hasLabel',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasThumbnail',
        prop: 'hasThumbnail',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasLeadingIcon',
        prop: 'hasLeadingIcon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasSubtext',
        prop: 'hasSubtext',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
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
        "cardKey": "uf-spec-main",
        "demoKey": "main",
        "demoControls": uploadFileDemoControls,
        "title": "Upload File",
        "node": "4853:26511",
        "description": "",
        "previewHtml": "<div id=\"upload-file-spec-main\"><svg width=\"304\" height=\"148\" viewBox=\"0 0 304 148\" fill=\"none\" role=\"img\" aria-label=\"Upload File, default, default\"><text x=\"2\" y=\"11\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"14\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"303\" height=\"99\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><rect x=\"20\" y=\"50\" width=\"44\" height=\"44\" rx=\"4\" fill=\"#EEF2F9\"></rect><g transform=\"translate(72,60)\" fill=\"none\" stroke=\"#445C85\" stroke-width=\"1.8\" stroke-linecap=\"round\"><path d=\"M14.5 6.5 L7.5 13.5 a3.2 3.2 0 0 0 4.5 4.5 L19 11 a5.2 5.2 0 0 0-7.3-7.3 L5 10.4\"/></g><text x=\"100\" y=\"78\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"18\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#90A8D0\">Attach file / photo</text><text x=\"2\" y=\"143\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\">Accepted format: JPEG, PNG, or PDF, Up to 3 MB</text></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Status", "value": "Default", "prop": "status" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "hasLabel", "value": "True", "prop": "hasLabel" },
              { "key": "hasThumbnail", "value": "True", "prop": "hasThumbnail" },
              { "key": "hasLeadingIcon", "value": "True", "prop": "hasLeadingIcon" },
              { "key": "hasSubtext", "value": "True", "prop": "hasSubtext" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Field background", "value": "#FFFFFF", "token": "surface/default",
                "variants": { "state:disabled": { "value": "#EEF2F9", "token": "surface/disabled" } } },
              { "key": "Border", "value": "#E5EBF4", "token": "border/subtle",
                "variants": {
                  "state:focused": { "value": "#005CE5", "token": "border/focused" },
                  "state:disabled": { "value": "–", "token": "–" },
                  "status:error": { "value": "#D61B2C", "token": "border/error" }
                } },
              { "key": "File name", "value": "#90A8D0", "token": "text/placeholder",
                "variants": {
                  "status:uploading": { "value": "#005CE5", "token": "text/interactive" },
                  "status:error": { "value": "#005CE5", "token": "text/interactive" },
                  "status:uploaded": { "value": "#005CE5", "token": "text/interactive" }
                } },
              { "key": "Thumbnail placeholder", "value": "#EEF2F9", "token": "surface/subtle",
                "variants": { "state:disabled": { "value": "#F6F9FD", "token": "surface/subtle-disabled" } } },
              { "key": "Attach icon", "value": "—", "token": "—" },
              { "key": "Trash icon", "value": "–", "token": "–",
                "variants": { "status:uploaded": { "value": "#005CE5", "token": "icon/interactive" } } },
              { "key": "Label", "value": "#0A2757", "token": "text/primary" },
              { "key": "Subtext", "value": "#6780A9", "token": "text/secondary",
                "variants": { "status:error": { "value": "#D61B2C", "token": "text/error" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label", "value": "—", "mono": true },
              { "key": "File name", "value": "—", "mono": true },
              { "key": "Subtext", "value": "—", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "100px", "mono": true,
                "variants": { "status:uploading": { "value": "119px" } } },
              { "key": "Width", "value": "304px", "mono": true },
              { "key": "Radius", "value": "6px", "mono": true },
              { "key": "Padding H", "value": "16px", "mono": true },
              { "key": "Padding V", "value": "24px", "mono": true },
              { "key": "Gap", "value": "4px", "mono": true },
              { "key": "Alignment", "value": "—", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>file<span class=\"syn-punc\">: </span>$file<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStatus</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBUploadField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    file <span class=\"syn-eq\">=</span> file<span class=\"syn-punc\">,</span>\n    status <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBUploadStatus</span><span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Status",
        "description": "Read off node <code>4853:26511</code> and checked against an export. ROLE is the Status value; the second column is the ELEMENT. Focused replaces the border with <code>#005CE5</code> at 2px and Disabled drops it entirely for an <code>#EEF2F9</code> fill — both are State, not Status. Token paths are indicative; variable bindings are not readable through the plugin.",
        "columns": ["Token", "Value"],
        "rows": [
          { "role": "Default", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/subtle", "#E5EBF4"] },
          { "role": "—", "token": "File name", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "—", "token": "Thumbnail placeholder", "values": ["surface/subtle", "#EEF2F9"] },
          { "role": "—", "token": "Attach icon", "values": ["—", "—"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] },
          { "role": "Uploading", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/subtle", "#E5EBF4"] },
          { "role": "—", "token": "File name", "values": ["text/interactive", "#005CE5"] },
          { "role": "—", "token": "Thumbnail placeholder", "values": ["surface/subtle", "#EEF2F9"] },
          { "role": "—", "token": "Attach icon", "values": ["—", "—"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] },
          { "role": "Error", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/error", "#D61B2C"] },
          { "role": "—", "token": "File name", "values": ["text/interactive", "#005CE5"] },
          { "role": "—", "token": "Thumbnail placeholder", "values": ["surface/subtle", "#EEF2F9"] },
          { "role": "—", "token": "Attach icon", "values": ["—", "—"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/error", "#D61B2C"] },
          { "role": "Uploaded", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/subtle", "#E5EBF4"] },
          { "role": "—", "token": "File name", "values": ["text/interactive", "#005CE5"] },
          { "role": "—", "token": "Thumbnail placeholder", "values": ["surface/subtle", "#EEF2F9"] },
          { "role": "—", "token": "Attach icon", "values": ["—", "—"] },
          { "role": "—", "token": "Trash icon", "values": ["icon/interactive", "#005CE5"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] }
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
          "figma": "Status = Default | Uploading | Error | Uploaded",
          "swift": "status: EBUploadStatus",
          "compose": "status = EBUploadStatus.Default"
        },
        {
          "figma": "State = Default | Disabled | Focused",
          "swift": ".disabled(true) · @FocusState",
          "compose": "enabled = false · interactionSource"
        },
        {
          "figma": "hasLabel <em>(boolean)</em>",
          "swift": "label: String?",
          "compose": "label: String?"
        },
        {
          "figma": "hasThumbnail <em>(boolean)</em>",
          "swift": "showThumbnail: Bool",
          "compose": "showThumbnail: Boolean"
        },
        {
          "figma": "hasLeadingIcon <em>(boolean)</em>",
          "swift": "showAttachIcon: Bool",
          "compose": "showAttachIcon: Boolean"
        },
        {
          "figma": "hasSubtext <em>(boolean)</em>",
          "swift": "subtext: String?",
          "compose": "subtext: String?"
        },
        {
          "figma": "Thumbnail-Slot <em>(instance swap)</em>",
          "swift": "@ViewBuilder thumbnail",
          "compose": "thumbnail: @Composable () -&gt; Unit"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": "fileName: String?",
          "compose": "fileName: String?"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": "progress: Double (0.0–1.0)",
          "compose": "progress: Float"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": "onSelect / onRemove",
          "compose": "onSelect / onRemove"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Empty field",
        "swift": "<span class=\"typ\">EBUploadField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">file</span>: $file)\n    .<span class=\"fn\">ebStatus</span>(<span class=\"dot\">.default</span>)\n    .<span class=\"fn\">ebSubtext</span>(<span class=\"str\">\"Accepted format: JPEG, PNG, or PDF, Up to 3 MB\"</span>)",
        "compose": "<span class=\"typ\">EBUploadField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">file</span> = file,\n    <span class=\"prp\">status</span> = <span class=\"typ\">EBUploadStatus</span>.Default,\n    <span class=\"prp\">subtext</span> = <span class=\"str\">\"Accepted format: JPEG, PNG, or PDF, Up to 3 MB\"</span>\n)"
      },
      {
        "subheading": "Uploading — indeterminate progress",
        "swift": "<span class=\"typ\">EBUploadField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">file</span>: $file)\n    .<span class=\"fn\">ebStatus</span>(<span class=\"dot\">.uploading</span>)",
        "compose": "<span class=\"typ\">EBUploadField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">file</span> = file,\n    <span class=\"prp\">status</span> = <span class=\"typ\">EBUploadStatus</span>.Uploading\n)"
      },
      {
        "subheading": "Uploaded — with a thumbnail",
        "swift": "<span class=\"typ\">EBUploadField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">file</span>: $file)\n    .<span class=\"fn\">ebStatus</span>(<span class=\"dot\">.uploaded</span>)\n    .<span class=\"fn\">ebThumbnail</span> { <span class=\"typ\">Image</span>(uiImage: preview) }\n    .<span class=\"fn\">onRemove</span> { file = <span class=\"kw\">nil</span> }",
        "compose": "<span class=\"typ\">EBUploadField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">file</span> = file,\n    <span class=\"prp\">status</span> = <span class=\"typ\">EBUploadStatus</span>.Uploaded,\n    <span class=\"prp\">thumbnail</span> = { <span class=\"typ\">Image</span>(preview, <span class=\"kw\">null</span>) },\n    <span class=\"prp\">onRemove</span> = { file = <span class=\"kw\">null</span> }\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBUploadField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">file</span>: $file)\n    .<span class=\"fn\">ebStatus</span>(<span class=\"dot\">.error</span>)\n    .<span class=\"fn\">ebSubtext</span>(<span class=\"str\">\"Maximum file size: 20MB\"</span>)",
        "compose": "<span class=\"typ\">EBUploadField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">file</span> = file,\n    <span class=\"prp\">status</span> = <span class=\"typ\">EBUploadStatus</span>.Error,\n    <span class=\"prp\">subtext</span> = <span class=\"str\">\"Maximum file size: 20MB\"</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBUploadField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">file</span>: $file)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBUploadField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">file</span> = file,\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
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
        "notes": "<code>UploadField</code> → <code>FileRow</code> → <code>Thumbnail-Slot</code> · <code>FileName</code> · <code>TrailingAction</code>, with a real <code>Trash</code> instance. Two internal container frames — <code>Attach File - Input</code> and <code>input-field</code> — keep their original names as a recorded exception; nothing binds to them."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Status = Default | Uploading | Error | Uploaded</code> × <code>State = Default | Disabled | Focused</code>, the two-axis split §6 prescribes, plus four <code>has</code> booleans in lowerCamelCase per §2. The old single axis with <code>\"Upload error\"</code> and <code>\"Uploaded with thumbnail\"</code> is gone."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The <code>boder</code> typo is corrected and the thumbnail placeholder is confirmed token-bound at <code>#EEF2F9</code>. Both are attested rather than verified — token names and variable bindings are not readable through the review tooling."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to PhotosPicker / DocumentPicker on iOS and GetContent / PickVisualMedia on Android. <code>Thumbnail-Slot</code> is a real Figma Slot, so the preview binds to a ViewBuilder rather than a fixed image."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>State</code> ships Default, Disabled and Focused on <code>Status=Default</code> and <code>Uploaded</code>. <code>Uploading</code> and <code>Error</code> carry <code>State=Default</code> only — documented as unreachable rather than undrawn: a transfer in flight is not interactive, and a disabled field cannot have failed an upload it never started."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The <code>Attach</code> and <code>Trash</code> glyphs are shared icon instances. The thumbnail is a Slot with a token-bound placeholder. The Lottie dependency behind <code>Uploading</code> is documented, including its failure fallback."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — no native library exists yet. Nothing in the schema blocks it: two cleanly named enums, four booleans and one named slot."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Status</code> and <code>State</code> map onto native enums; the four <code>has</code> booleans map onto optional arguments."
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Eight variants covering every reachable combination. The four unbuilt pairings are documented as unreachable, so a generated binding will not expect them."
      },
      {
        "aspect": "Slot binding",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Thumbnail-Slot</code> is a real Figma Slot, which Code Connect can bind to a ViewBuilder / composable parameter."
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBUploadField</code>. Not yet written — blocked on the native library, same as C7."
      }
    ],
    "variants": {
      "total": 8,
      "description": "<code>Status</code> (4) × <code>State</code> (3) describes twelve combinations; eight are built. <code>Uploading</code> and <code>Error</code> ship <code>State=Default</code> only — the four missing pairings are unreachable by design rather than unfinished. The four <code>has</code> booleans are component properties, not variant axes, so they do not multiply the count. <code>Uploading</code> is 19px taller for the progress row.",
      "columns": [
        "Status",
        "State",
        "Dimensions",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Default",
            "304 × 148",
            "4850:26409"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "304 × 148",
            "6526:105079"
          ]
        },
        {
          "cells": [
            "Default",
            "Focused",
            "304 × 148",
            "6572:111764"
          ]
        },
        {
          "cells": [
            "Uploading",
            "Default",
            "304 × 167",
            "4868:26884"
          ]
        },
        {
          "cells": [
            "Error",
            "Default",
            "304 × 148",
            "4850:26460"
          ]
        },
        {
          "cells": [
            "Uploaded",
            "Default",
            "304 × 148",
            "4868:26932"
          ]
        },
        {
          "cells": [
            "Uploaded",
            "Disabled",
            "304 × 148",
            "6572:111324"
          ]
        },
        {
          "cells": [
            "Uploaded",
            "Focused",
            "304 × 148",
            "6572:111782"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.6",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Style + Code tabs rebuilt against node 4853:26511",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt as a single card</strong> — one spec card driven by a panel mirroring the Figma property panel: <code>Status</code> and <code>State</code> as selects, and <code>hasLabel</code>, <code>hasThumbnail</code>, <code>hasLeadingIcon</code>, <code>hasSubtext</code> as toggles. The four booleans were invisible to <code>get_node_info</code>, which returns variant properties only. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>State control constrained to real variants</strong> — selecting <code>Uploading</code> or <code>Error</code> disables Focused and Disabled, marking them “not built”, so the panel cannot produce the four combinations Figma does not contain. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Booleans reflow rather than hide</strong> — turning off the thumbnail collapses 52px and shifts the file name left; the leading icon collapses 28px; the label and subtext blocks remove their rows and the card shrinks. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Disabled label corrected</strong> — the preview had muted it. Verified on <code>6526:105079</code>: the label stays <code>#0A2757</code> in Disabled while the field contents mute. The thumbnail placeholder is <code>#F6F9FD</code> there, not the value first drawn. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Property mapping corrected</strong> — the retired single <code>state</code> axis, <code>\"Uploaded with thumbnail\"</code> and <code>hasLabel=yes/no</code> are gone. Now maps <code>Status</code>, <code>State</code>, the four booleans and <code>Thumbnail-Slot</code>, plus the file name, progress and callbacks. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Variants inventory corrected</strong> — from <code>total: 10</code> on a “5 state × 2 hasLabel” matrix to the real 8, with the four unreachable pairings explained. <code>codeConnect</code> was an empty array and is now filled. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        }
      ]
    },
    {
      "version": "2.5",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Naming completed and remaining items closed",
      "rows": [
        {
          "body": "<strong>Layer naming complete across all eight variants.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Container frame names accepted as-is</strong> — <code>Attach File - Input</code> and <code>input-field</code> are internal structural frames that nothing binds to; renaming carried more churn than the consistency was worth. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Unsupported variant combinations documented</strong> — <code>Uploading</code> and <code>Error</code> have no Focused or Disabled because a transfer in flight is not interactive and a disabled field cannot have failed an upload it never started. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong><code>boder</code> token typo corrected</strong> — fixed before Code Connect could bind generated native constants to the misspelling. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Thumbnail placeholder confirmed token-bound</strong> at the shared surface value. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Lottie dependency documented</strong> — indeterminate by design, replaced rather than stopped on completion, and falling back to the platform progress indicator if it fails to load. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        }
      ]
    },
    {
      "version": "2.4",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "State property split onto two axes",
      "rows": [
        {
          "body": "<strong><code>State</code> restructured onto two axes</strong> — <code>Status = Default | Uploading | Error | Uploaded</code> beside <code>State = Default | Focused | Disabled</code>, the split §6 of the Property Naming Guidelines prescribes. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Thumbnail is a real Figma Slot</strong> — a genuine <code>SLOT</code> node, kebab-case per §4, so a consumer swaps their own preview in without detaching. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Label and subtext scaffolding reuses the shared components</strong> — <code>FormGroup Header</code> and <code>Subtext Message</code> instances rather than redrawn locally. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>File row layer naming cleaned up</strong> — <code>FileRow</code>, <code>FileNameWrapper</code>, <code>FileName</code>, <code>TrailingAction</code>, with a real <code>Trash</code> instance. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong><code>Focused</code> state added.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Token namespace resolved</strong> — generic tokens applied. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Progress-bar GIF confirmed preview-only</strong> — a Figma preview device, not a shipped asset. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        }
      ]
    },
    {
      "version": "2.3",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Progress-bar naming",
      "rows": [
        {
          "body": "<strong>Progress-bar layer names cleaned up.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.2",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Structure normalised",
      "rows": [
        {
          "body": "<strong><code>State</code> split onto its own axis.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Disabled + Uploaded variant authored.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Thumbnail converted to a Figma Slot.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Error progress bar removed</strong> — a failed upload has no progress to show. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong><code>label</code> wrapper renamed <code>FileRow</code>.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong><code>Pressed</code> ruled out of scope</strong> — the field opens a system picker; the picker owns the press feedback. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        }
      ]
    },
    {
      "version": "2.1",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Axis renamed and variants filled in",
      "rows": [
        {
          "body": "<strong>Axis renamed <code>State</code> → <code>Status</code></strong> — the values describe what the system is reporting, not how the user is interacting. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Disabled variant added.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Error variant structure normalised.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on node 4853:26511 — 2026 Working File",
      "rows": [
        {
          "body": "<strong>Property naming cleaned up</strong> — <code>\"Upload error\"</code> with a space and the orthogonal <code>\"Uploaded with thumbnail\"</code> both retired from the value list. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Label and subtext scaffolding reused</strong> from the shared Form Elements components. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        }
      ]
    },
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
