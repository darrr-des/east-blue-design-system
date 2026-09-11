/* Toggle — Style tab demo.
 * Rebuilt from Figma component set 26510:37625 (GCash DS Sticker Sheets v2).
 * Every colour, dimension and the knob shadow are read off get_node_info /
 * get_svg on the matching variant.
 *
 * Axes (from the variant names — the property panel was not supplied, so a
 * boolean, text or instance-swap property would be invisible here):
 *   State      · Default, Pressed, Disabled
 *   Size       · Large, Medium, Small
 *   isSelected · false, true
 *
 * 3 × 3 × 2 = 18 variants, all built. Nothing to constrain.
 */

/* ── Geometry, per Size — read from the SVG exports ─────────────────── */
/*  w/h  = track          r    = track corner radius (h / 2, a pill)
 *  knob = thumb radius   off  = knob centre x when isSelected=false
 *  on   = knob centre x when isSelected=true. Inset is 2 at every size. */
var TG_GEO = {
  large:  { w: 48, h: 24, r: 12, knob: 10, off: 12, on: 36 },
  medium: { w: 40, h: 20, r: 10, knob: 8,  off: 10, on: 30 },
  small:  { w: 32, h: 16, r: 8,  knob: 6,  off: 8,  on: 24 }
};
var TG_PAD_X = 2;    /* drawing-box padding so the knob shadow is not clipped */
var TG_PAD_B = 12;

/* ── Track fill, keyed "state|isSelected" ───────────────────────────── */
var TG_TRACK = {
  'default|false':  '#D7E0EF',
  'pressed|false':  '#C2CFE5',
  'disabled|false': '#EEF2F9',
  'default|true':   '#005CE5',
  'pressed|true':   '#2340A9',
  'disabled|true':  '#9BC5FD'
};
var TG_KNOB = '#FFFFFF';   /* white in all 18 variants */

/* Knob drop shadow, transcribed from Figma's own filter chain:
   erode 8 → offset y 8 → blur 12 (stdDeviation 6) → #020E22 at 16%.
   The erode is a negative spread, which is why a 20px thumb throws such a
   small, tight shadow. Reproduced with the same primitives rather than
   approximated with a CSS drop-shadow, which has no spread. */
function _tgFilter(id, w, h) {
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
function _tgRender(card, scale) {
  scale = scale || 1;
  var g = TG_GEO[card.size] || TG_GEO.large;
  var W = g.w + TG_PAD_X * 2, H = g.h + TG_PAD_B;
  var cx = TG_PAD_X + (card.isSelected === 'true' ? g.on : g.off);
  var cy = g.h / 2;
  /* Deterministic id — the server-rendered markup has to match what JS
     re-renders. Keyed by size and knob position so two previews in
     different states never share a filter region. */
  var id = 'tgshadow-' + card.size + '-' + (card.isSelected === 'true' ? 'on' : 'off');

  var out = '<svg width="' + (W * scale) + '" height="' + (H * scale) +
            '" viewBox="0 0 ' + W + ' ' + H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += _tgFilter(id, W, H);
  out += '<rect x="' + TG_PAD_X + '" width="' + g.w + '" height="' + g.h +
         '" rx="' + g.r + '" fill="' + (TG_TRACK[card.state + '|' + card.isSelected] || TG_TRACK['default|false']) + '"/>';
  out += '<g filter="url(#' + id + ')">';
  out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + g.knob + '" fill="' + TG_KNOB + '"/>';
  out += '</g>';
  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { state: 'default', size: 'large', isSelected: 'false' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardStyle, card) {
  var size = { large: '.large', medium: '.regular', small: '.small' }[card.size] || '.large';
  var lines = ['EBToggle(isOn: $isOn)'];
  lines.push('    .controlSize(' + size + ')');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  if (card.state === 'pressed') lines.push('    // State=Pressed is the touch-down frame — nothing to set.');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var size = { large: 'Large', medium: 'Medium', small: 'Small' }[card.size] || 'Large';
  var lines = ['EBToggle('];
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
var TG_PREVIEW_SCALE = 3;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('toggle-spec-' + cardStyle);
  if (host) host.innerHTML = _tgRender(card, TG_PREVIEW_SCALE);

  /* Properties readout. Colors / Layout `variants` are applied by the shared
     patcher in assessment.js — this script must not rebuild those sections. */
  var TG_BOOL = { isSelected: 1 };
  ['state', 'size', 'isSelected'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = String(card[k]);
    el.textContent = TG_BOOL[k] ? v : v.charAt(0).toUpperCase() + v.slice(1);
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
/* The Overview panel still ships the pre-rebuild control set (isActive
   Yes/No, State Default/Disabled, plus a "proposed" size row). Map what it
   has onto the real axes so the preview draws the Figma component. */
function _toggleUpdate() {
  var el = document.getElementById('toggle-demo-preview');
  if (!el) return;
  var g = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  var size = (g('toggle-ctrl-size') || 'large').toLowerCase();
  el.innerHTML = _tgRender({
    state: (g('toggle-ctrl-state') || 'default').toLowerCase() === 'disabled' ? 'disabled' : 'default',
    size: TG_GEO[size] ? size : 'large',
    isSelected: /^(true|yes)$/i.test(g('toggle-ctrl-selected') || '') ? 'true' : 'false'
  }, 2);
}
window._toggleUpdate = _toggleUpdate;

/* The Overview preview is click-to-flip; keep that working. */
function _toggleFlip() {
  var sel = document.getElementById('toggle-ctrl-selected');
  if (sel) { sel.value = /^(true|yes)$/i.test(sel.value) ? 'false' : 'true'; }
  _toggleUpdate();
}
window._toggleFlip = _toggleFlip;

/* ── First paint ────────────────────────────────────────────────────── */
function _tgInit() {
  _toggleUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('toggle-spec-' + k);
    if (host) host.innerHTML = _tgRender(_specCards[k], TG_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tgInit);
else _tgInit();
document.addEventListener('astro:page-load', _tgInit);
