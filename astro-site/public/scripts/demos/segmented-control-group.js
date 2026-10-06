/* Segmented Control - Group — live preview demo.
 * Rebuilt from Figma component 26628:50786 (GCash DS Sticker Sheets v2).
 * Every colour, size, radius and stroke below is read off the component —
 * nothing here is derived or invented.
 *
 * Panel (component 26628:50786 — a single component, no variants):
 *   hasSlotContainer  ◉ boolean · True
 *   Slot Container    ⊞ slot · empty            (a SLOT node — no control)
 *   Nested instances: FormGroup Header, Segmented Control (props not exposed)
 *
 * The subtext is no longer part of the component: helper text, avatars or any
 * other content goes in the Slot Container. Figma ships the slot EMPTY, so the
 * preview draws its 40px band and nothing in it.
 */

/* ── Anatomy — every part is 312 wide and stacked with gap 0 ────────── */
var SCG_W        = 312;
var SCG_HEADER_H = 22;   /* FormGroup Header instance; its #label band is 14 tall */
var SCG_CTRL_H   = 40;   /* Segmented Control instance */
var SCG_SLOT_H   = 40;   /* Slot Container SLOT — empty by default */
var SCG_RADIUS   = 6;
var SCG_STROKE   = 1;
var SCG_SEG_W    = 156;  /* two equal segments, 312 / 2 */

/* ── Colours ────────────────────────────────────────────────────────── */
var SCG_COLOR = {
  headerLabel:      '#0A2757',
  controlBorder:    '#005CE5',
  segSelectedBg:    '#005CE5',
  segSelectedLabel: '#FFFFFF',
  segRestLabel:     '#005CE5'
};

function _scgHeight(card) {
  return SCG_HEADER_H + SCG_CTRL_H + (card.hasSlotContainer ? SCG_SLOT_H : 0);
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _scgRender(card, scale) {
  scale = scale || 1;
  var H = _scgHeight(card), y = 0;

  var out = '<svg width="' + (SCG_W * scale) + '" height="' + (H * scale) +
            '" viewBox="0 0 ' + SCG_W + ' ' + H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* FormGroup Header — #label sits in a 14px band at the top of the 22px
     instance, so the 8px below it is the header's own bottom padding. */
  out += '<text class="scg-proxima" x="2" y="7" font-size="14" font-weight="600" fill="' +
         SCG_COLOR.headerLabel + '" dominant-baseline="central">Label</text>';
  y += SCG_HEADER_H;

  /* Segmented Control — first segment selected, left corners rounded. */
  var r = SCG_RADIUS;
  var seg = 'M' + r + ' 0'
          + 'H' + SCG_SEG_W
          + 'V' + SCG_CTRL_H
          + 'H' + r
          + 'A' + r + ' ' + r + ' 0 0 1 0 ' + (SCG_CTRL_H - r)
          + 'V' + r
          + 'A' + r + ' ' + r + ' 0 0 1 ' + r + ' 0'
          + 'Z';
  out += '<g transform="translate(0,' + y + ')">';
  out += '<path d="' + seg + '" fill="' + SCG_COLOR.segSelectedBg + '"/>';
  out += '<rect x="0.5" y="0.5" width="' + (SCG_W - 1) + '" height="' + (SCG_CTRL_H - 1) +
         '" rx="' + (r - 0.5) + '" stroke="' + SCG_COLOR.controlBorder +
         '" stroke-width="' + SCG_STROKE + '"/>';
  out += '<text class="scg-proxima" x="' + (SCG_SEG_W / 2) + '" y="' + (SCG_CTRL_H / 2) +
         '" font-size="16" font-weight="700" fill="' + SCG_COLOR.segSelectedLabel +
         '" text-anchor="middle" dominant-baseline="central">Label</text>';
  out += '<text class="scg-proxima" x="' + (SCG_SEG_W + SCG_SEG_W / 2) + '" y="' + (SCG_CTRL_H / 2) +
         '" font-size="16" font-weight="700" fill="' + SCG_COLOR.segRestLabel +
         '" text-anchor="middle" dominant-baseline="central">Label</text>';
  out += '</g>';
  y += SCG_CTRL_H;

  /* Slot Container — Figma ships it empty: the band takes its 40px and
     draws nothing. What goes in it is the consumer's content. */
  return out + '</svg>';
}

/* ── DEV code — component API ───────────────────────────────────────── */
function buildSwiftSnippet(card) {
  var lines = ['EBSegmentedControlGroup(', '    label: "Label",', '    segments: ["Label", "Label"],', '    selectedIndex: $selected', ')'];
  if (card.hasSlotContainer) lines.push('.ebSlotContainer {', '    EBSubtextMessage("Use this space for your subtext.")', '}');
  return lines.join('\n');
}

function buildComposeSnippet(card) {
  var lines = ['EBSegmentedControlGroup(', '    label = "Label",', '    segments = listOf("Label", "Label"),', '    selectedIndex = selected'];
  if (card.hasSlotContainer) {
    lines[lines.length - 1] += ',';
    lines.push('    slotContainer = {', '        EBSubtextMessage(message = "Use this space for your subtext.")', '    }');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  card = card || _scgDemo;
  return lang === 'swift' ? buildSwiftSnippet(card) : buildComposeSnippet(card);
}
window.getSnippet = getSnippet;

/* ── Overview tab live preview ──────────────────────────────────────── */
/* One control, the component's one property: hasSlotContainer, on by default
   as Figma ships it. */
var _scgDemo = { hasSlotContainer: true };
window._scgDemo = _scgDemo;
function updateSegmentedControlGroupDemo() {
  var el = document.getElementById('scg-demo-preview');
  if (!el) return;
  el.innerHTML = _scgRender(_scgDemo, 1);
}
window.updateSegmentedControlGroupDemo = updateSegmentedControlGroupDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _scgInit() {
  var box = document.getElementById('scg-demo-slot');
  _scgDemo.hasSlotContainer = box ? box.checked : true;
  updateSegmentedControlGroupDemo();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _scgInit);
else _scgInit();
document.addEventListener('astro:page-load', _scgInit);
