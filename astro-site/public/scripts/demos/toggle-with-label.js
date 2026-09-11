/* Toggle - With Label — Style tab demo.
 * Rebuilt from Figma component set 26510:37680 (GCash DS Sticker Sheets v2).
 * The nested Toggle's colours and geometry are the same reads that drive
 * public/scripts/demos/toggle.js (set 26510:37625); the row metrics and the
 * label are read off this set's own layers.
 *
 * Panel (set 26510:37680):
 *   State      ◇ variant · Default, Disabled, Pressed
 *   Size       ◇ variant · Large, Medium, Small
 *   isSelected ◇ variant · false, true
 *   hasSubtext ◉ boolean · False
 *
 * 3 × 3 × 2 = 18 variants. `hasSubtext` reveals the nested Subtext Message
 * without adding a variant, so nothing is unreachable and there is nothing
 * to constrain.
 */

/* ── Row metrics, per Size ───────────────────────────────────────────
   The row is 180 wide at every size. `label` is a Fill frame that runs
   from the left edge to the toggle, so the two are flush — there is no
   gap; this is a space-between row. */
var TWL_W = 180;
var TWL_GEO = {
  large:  { row: 24, labelW: 132, labelH: 16, font: 16, tw: 48, th: 24, knob: 10, off: 12, on: 36, r: 12 },
  medium: { row: 20, labelW: 140, labelH: 16, font: 16, tw: 40, th: 20, knob: 8,  off: 10, on: 30, r: 10 },
  small:  { row: 16, labelW: 148, labelH: 14, font: 14, tw: 32, th: 16, knob: 6,  off: 8,  on: 24, r: 8  }
};
var TWL_PAD_B = 12;   /* room for the toggle's knob shadow */
/* Subtext Message sits flush below the row — 180 x 22, its 18px text band
   inset 2 from the left and 4 from the top. Identical at every Size and
   every State: neither the copy nor the colour changes. */
var TWL_SUB_H = 22;
var TWL_SUB_FONT = 12;
var TWL_SUB_TEXT = 'Please Try Again';
var TWL_TEXT_X = 2;   /* #label inset inside the label frame */

/* ── Colours ─────────────────────────────────────────────────────────
   The track values are the atom's, unchanged. The label is #445C85 in
   all 18 variants — it does not mute when State=Disabled. */
var TWL_TRACK = {
  'default|false':  '#D7E0EF',
  'pressed|false':  '#C2CFE5',
  'disabled|false': '#EEF2F9',
  'default|true':   '#005CE5',
  'pressed|true':   '#2340A9',
  'disabled|true':  '#9BC5FD'
};
var TWL_LABEL = '#445C85';
var TWL_KNOB = '#FFFFFF';
var TWL_SUBTEXT = '#6780A9';

/* Knob shadow — the atom's filter chain, transcribed from Figma:
   erode 8 → offset y 8 → blur 12 → #020E22 at 16%. */
function _twlFilter(id, w, h) {
  return '<defs><filter id="' + id + '" x="0" y="0" width="' + w + '" height="' + h +
    '" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
    '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
    '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>' +
    '<feMorphology radius="8" operator="erode" in="SourceAlpha" result="shadow"/>' +
    '<feOffset dy="8"/>' +
    '<feGaussianBlur stdDeviation="6"/>' +
    '<feComposite in2="hardAlpha" operator="out"/>' +
    '<feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.054902 0 0 0 0 0.133333 0 0 0 0.16 0"/>' +
    '<feBlend mode="normal" in2="BackgroundImageFix" result="shadow"/>' +
    '<feBlend mode="normal" in="SourceGraphic" in2="shadow" result="shape"/>' +
    '</filter></defs>';
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _twlRender(card, scale) {
  scale = scale || 1;
  var g = TWL_GEO[card.size] || TWL_GEO.large;
  var hasSub = card.hasSubtext === 'true';
  var H = g.row + (hasSub ? TWL_SUB_H : 0) + TWL_PAD_B;
  var tx = TWL_W - g.tw;                                   /* toggle is flush right */
  var cx = tx + (card.isSelected === 'true' ? g.on : g.off);
  var id = 'twlshadow-' + card.size + '-' + (card.isSelected === 'true' ? 'on' : 'off') + (hasSub ? '-sub' : '');

  var out = '<svg width="' + (TWL_W * scale) + '" height="' + (H * scale) +
            '" viewBox="0 0 ' + TWL_W + ' ' + H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += _twlFilter(id, TWL_W, H);

  /* #label — vertically centred in the row at every size. */
  out += '<text class="twl-label" x="' + TWL_TEXT_X + '" y="' + (g.row / 2) +
         '" font-size="' + g.font + '" font-weight="600" fill="' + TWL_LABEL +
         '" dominant-baseline="central">Label</text>';

  /* nested Toggle instance */
  out += '<rect x="' + tx + '" width="' + g.tw + '" height="' + g.th + '" rx="' + g.r +
         '" fill="' + (TWL_TRACK[card.state + '|' + card.isSelected] || TWL_TRACK['default|false']) + '"/>';
  out += '<g filter="url(#' + id + ')">';
  out += '<circle cx="' + cx + '" cy="' + (g.th / 2) + '" r="' + g.knob + '" fill="' + TWL_KNOB + '"/>';
  out += '</g>';

  if (hasSub) {
    out += '<text class="twl-subtext" x="' + TWL_TEXT_X + '" y="' + (g.row + 13) +
           '" font-size="' + TWL_SUB_FONT + '" font-weight="600" fill="' + TWL_SUBTEXT +
           '" dominant-baseline="central">' + TWL_SUB_TEXT + '</text>';
  }

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { state: 'default', size: 'large', isSelected: 'false', hasSubtext: 'false' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardStyle, card) {
  var size = { large: '.large', medium: '.regular', small: '.small' }[card.size] || '.large';
  var lines = ['EBToggleRow("Label", isOn: $isOn)'];
  lines.push('    .controlSize(' + size + ')');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  if (card.state === 'pressed') lines.push('    // State=Pressed is the touch-down frame — nothing to set.');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var size = { large: 'Large', medium: 'Medium', small: 'Small' }[card.size] || 'Large';
  var lines = ['EBToggleRow('];
  lines.push('    label = "Label",');
  lines.push('    checked = ' + card.isSelected + ',');
  lines.push('    onCheckedChange = { checked = it },');
  lines.push('    size = EBToggleSize.' + size + ',');
  lines.push('    enabled = ' + (card.state === 'disabled' ? 'false' : 'true'));
  lines.push(')');
  if (card.state === 'pressed') lines.push('// State=Pressed comes from interactionSource, not a parameter.');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var TWL_PREVIEW_SCALE = 2;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('toggle-with-label-spec-' + cardStyle);
  if (host) host.innerHTML = _twlRender(card, TWL_PREVIEW_SCALE);

  /* Properties readout. Colors / Typography / Layout `variants` are applied
     by the shared patcher in assessment.js — do not rebuild those here. */
  var TWL_BOOL = { isSelected: 1 };
  ['state', 'size', 'isSelected', 'hasSubtext'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = String(card[k]);
    el.textContent = TWL_BOOL[k] ? v : v.charAt(0).toUpperCase() + v.slice(1);
    if (k === 'hasSubtext') el.textContent = v === 'true' ? 'True' : 'False';
  });

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
/* The Overview panel still ships the pre-rebuild control set — label text,
   description, required, helper and a `placement` axis Figma does not have.
   Map the three that exist onto the real axes and draw the component. */
function _toggleWithLabelUpdate() {
  var el = document.getElementById('toggle-with-label-demo-preview');
  if (!el) return;
  var g = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  el.innerHTML = _twlRender({
    state: (g('toggle-with-label-ctrl-state') || 'default').toLowerCase() === 'disabled' ? 'disabled' : 'default',
    size: 'large',
    isSelected: /^(true|yes)$/i.test(g('toggle-with-label-ctrl-selected') || '') ? 'true' : 'false',
    hasSubtext: 'false'
  }, 2);
}
window._toggleWithLabelUpdate = _toggleWithLabelUpdate;

function _twlFlip() {
  var sel = document.getElementById('toggle-with-label-ctrl-selected');
  if (sel) sel.value = /^(true|yes)$/i.test(sel.value) ? 'false' : 'true';
  _toggleWithLabelUpdate();
}
window._twlFlip = _twlFlip;

/* In-context preview — a short stack of rows at the three sizes. */
function _twlContextMarkup() {
  return '<div class="twl-context">' +
    _twlRender({ state: 'default',  size: 'large',  isSelected: 'true',  hasSubtext: 'false' }, 1) +
    _twlRender({ state: 'default',  size: 'medium', isSelected: 'false', hasSubtext: 'true'  }, 1) +
    _twlRender({ state: 'disabled', size: 'small',  isSelected: 'true',  hasSubtext: 'false' }, 1) +
    '</div>';
}
window._twlContextMarkup = _twlContextMarkup;

/* ── First paint ────────────────────────────────────────────────────── */
function _twlInit() {
  var ctx = document.getElementById('toggle-with-label-context-preview');
  if (ctx) ctx.innerHTML = _twlContextMarkup();
  _toggleWithLabelUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('toggle-with-label-spec-' + k);
    if (host) host.innerHTML = _twlRender(_specCards[k], TWL_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _twlInit);
else _twlInit();
document.addEventListener('astro:page-load', _twlInit);
