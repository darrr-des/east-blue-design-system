/* Segmented Control - Group — Style tab demo.
 * Rebuilt from Figma component set 26628:50778 (GCash DS Sticker Sheets v2).
 * Every colour, size, radius and stroke below is read off get_node_info /
 * get_svg on the matching node — nothing here is derived or invented.
 *
 * Panel (set 26628:50778):
 *   hasSubtext        ◇ variant · true, false
 *   hasSlotContainer  ◉ boolean · False
 *   Slot Container    ⊞ slot · 2 items          (a SLOT node — no control)
 *   Nested instances: Segmented Control          (its props are not exposed)
 *
 * The set ships 2 variants — hasSubtext false and true. hasSlotContainer
 * toggles the SLOT's visibility and adds no variant, so nothing is
 * unreachable and there is nothing to constrain.
 */

/* ── Anatomy — every part is 312 wide and stacked with gap 0 ────────── */
var SCG_W        = 312;
var SCG_HEADER_H = 22;   /* FormGroup Header instance; its #label band is 14 tall */
var SCG_CTRL_H   = 40;   /* Segmented Control instance */
var SCG_SUB_H    = 22;   /* Subtext Message instance; its text band is 18 tall at +4 */
var SCG_SLOT_H   = 40;   /* Slot Container SLOT; its avatars are 32 tall at +8 */
var SCG_RADIUS   = 6;
var SCG_STROKE   = 1;
var SCG_SEG_W    = 156;  /* two equal segments, 312 / 2 */
var SCG_AV       = 32;   /* Avatar */
var SCG_AV_GAP   = 2;

/* ── Colours ────────────────────────────────────────────────────────── */
var SCG_COLOR = {
  headerLabel:      '#0A2757',
  controlBorder:    '#005CE5',
  segSelectedBg:    '#005CE5',
  segSelectedLabel: '#FFFFFF',
  segRestLabel:     '#005CE5',
  subtext:          '#6780A9',
  avatarBg:         '#005CE5',
  avatarBorder:     '#E5EBF4',
  avatarInitials:   '#FFFFFF'
};

function _scgHeight(card) {
  return SCG_HEADER_H + SCG_CTRL_H
       + (card.hasSubtext === 'true' ? SCG_SUB_H : 0)
       + (card.hasSlotContainer === 'true' ? SCG_SLOT_H : 0);
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

  /* Segmented Control. Figma clips a square 156x40 rect to the container's
     6px radius; drawn here as an explicit path with the LEFT corners rounded
     and the right ones square, which is the same shape without depending on
     a <clipPath> id resolving inside injected markup. */
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

  /* Subtext Message — text band is 18 tall at +4 inside the 22px instance. */
  if (card.hasSubtext === 'true') {
    out += '<text class="scg-barkada" x="2" y="' + (y + 13) +
           '" font-size="12" font-weight="600" fill="' + SCG_COLOR.subtext +
           '" dominant-baseline="central">Use this space for your subtext.</text>';
    y += SCG_SUB_H;
  }

  /* Slot Container — ships three 32px Avatars, 2px apart, 8px from the top.
     The contents are swappable; only the frame is a spec of this component. */
  if (card.hasSlotContainer === 'true') {
    for (var i = 0; i < 3; i++) {
      var ax = i * (SCG_AV + SCG_AV_GAP), ay = y + 8, r = SCG_AV / 2;
      out += '<g transform="translate(' + ax + ',' + ay + ')">';
      out += '<rect width="' + SCG_AV + '" height="' + SCG_AV + '" rx="' + r + '" fill="' +
             SCG_COLOR.avatarBg + '" stroke="' + SCG_COLOR.avatarBorder + '"/>';
      out += '<text class="scg-proxima" x="' + r + '" y="' + r +
             '" font-size="14" font-weight="700" fill="' + SCG_COLOR.avatarInitials +
             '" text-anchor="middle" dominant-baseline="central">DM</text>';
      out += '</g>';
    }
  }

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { hasSubtext: 'false', hasSlotContainer: 'false' }
};
window._specCards = _specCards;

/* ── DEV code — component API, live on both tabs ────────────────────── */
function buildSwiftSnippet(cardStyle, card) {
  var lines = ['EBSegmentedControlGroup('];
  lines.push('    label: "Label",');
  lines.push('    segments: ["Label", "Label"],');
  lines.push('    selectedIndex: $selected');
  if (card.hasSubtext === 'true') {
    lines[lines.length - 1] += ',';
    lines.push('    subtext: "Use this space for your subtext."');
  }
  lines.push(')');
  if (card.hasSlotContainer === 'true') {
    lines.push('.ebSlotContainer {');
    lines.push('    HStack(spacing: 2) { ForEach(recentContacts) { EBAvatar($0) } }');
    lines.push('}');
  }
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var lines = ['EBSegmentedControlGroup('];
  lines.push('    label = "Label",');
  lines.push('    segments = listOf("Label", "Label"),');
  lines.push('    selectedIndex = selected');
  if (card.hasSubtext === 'true') {
    lines[lines.length - 1] += ',';
    lines.push('    subtext = "Use this space for your subtext."');
  }
  if (card.hasSlotContainer === 'true') {
    lines[lines.length - 1] += ',';
    lines.push('    slotContainer = { recentContacts.forEach { EBAvatar(it) } }');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var SCG_PREVIEW_SCALE = 1;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('segmented-control-group-spec-' + cardStyle);
  if (host) host.innerHTML = _scgRender(card, SCG_PREVIEW_SCALE);

  /* Properties readout. Colors / Typography / Layout `variants` are applied
     by the shared patcher in assessment.js — do not rebuild those here.
     Both properties keep Figma's own true / False capitalisation. */
  var el = document.querySelector('[data-sp="' + cardStyle + '-hasSubtext"]');
  if (el) el.textContent = card.hasSubtext;
  el = document.querySelector('[data-sp="' + cardStyle + '-hasSlotContainer"]');
  if (el) el.textContent = card.hasSlotContainer === 'true' ? 'True' : 'False';
  el = document.querySelector('[data-sp="' + cardStyle + '-height"]');
  if (el) el.textContent = _scgHeight(card) + 'px';

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}
window.updateSpecCard = updateSpecCard;

/* ── Overview tab live preview ──────────────────────────────────────── */
/* The Overview panel still ships the pre-rebuild control set. Map what it
   has onto the real axes so the preview draws the Figma component. */
function updateSCGDemo() {
  var el = document.getElementById('scg-demo-preview');
  if (!el) return;
  var g = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  el.innerHTML = _scgRender({
    hasSubtext: /^(yes|true|show)$/i.test(g('scg-demo-subtext') || '') ? 'true' : 'false',
    hasSlotContainer: /^(yes|true|show)$/i.test(g('scg-demo-avatars') || '') ? 'true' : 'false'
  }, 1);
}
window.updateSCGDemo = updateSCGDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _scgInit() {
  updateSCGDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('segmented-control-group-spec-' + k);
    if (host) host.innerHTML = _scgRender(_specCards[k], SCG_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _scgInit);
else _scgInit();
document.addEventListener('astro:page-load', _scgInit);
