/* Progress Bar — Style tab demo.
 * Rebuilt from Figma component set 4244:187349 (GCash DS 2026 Working File).
 * Geometry and colours are read off get_svg on the matching variant and
 * confirmed against export_node_as_image.
 *
 * Axes (from the variant names and the Edit-variant-property panel):
 *   Progress · 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
 *
 * 11 variants, all built. There is no State, Size or mode axis — the bar is
 * a graphic-only primitive and the only thing that changes is fill length.
 */

/* ── Geometry ────────────────────────────────────────────────────────
   Both zones are STROKED PATHS, not filled rects — which is why the
   component's bounding box is 312 x 0. The stroke width is the bar's
   visible height, and the round caps are its corner treatment. The path
   runs 2.5 in from each end, so the painted bar spans 313 including caps. */
var PB_W = 312;          /* component width */
var PB_STROKE = 5;       /* stroke-width — the bar's visible height */
var PB_INSET = 2.5;      /* path start; half the stroke */
var PB_TRACK_LEN = 308;  /* 2.5 → 310.5 */
var PB_BOX_W = PB_TRACK_LEN + PB_STROKE;   /* 313 — caps included */

/* ── Colours ────────────────────────────────────────────────────────── */
var PB_TRACK = '#9BC5FD';
var PB_FILL  = '#005CE5';

/* Figma's step. A continuous value renders fine; these are the 11 built. */
var PB_STEPS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function _pbFillLength(progress) {
  var p = Math.max(0, Math.min(100, parseFloat(progress) || 0));
  return PB_TRACK_LEN * (p / 100);
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _pbRender(card, scale) {
  scale = scale || 1;
  var len = _pbFillLength(card.progress);
  var cy = PB_STROKE / 2;

  var out = '<svg width="' + (PB_BOX_W * scale) + '" height="' + (PB_STROKE * scale) +
            '" viewBox="0 0 ' + PB_BOX_W + ' ' + PB_STROKE +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<path d="M' + PB_INSET + ' ' + cy + 'L' + (PB_INSET + PB_TRACK_LEN) + ' ' + cy +
         '" stroke="' + PB_TRACK + '" stroke-width="' + PB_STROKE + '" stroke-linecap="round"/>';
  /* Progress=0 ships no fill path at all — not a zero-length one. */
  if (len > 0) {
    out += '<path d="M' + PB_INSET + ' ' + cy + 'H' + (PB_INSET + len) +
           '" stroke="' + PB_FILL + '" stroke-width="' + PB_STROKE + '" stroke-linecap="round"/>';
  }
  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { progress: '0' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, card) {
  var v = (parseFloat(card.progress) || 0) / 100;
  return 'EBProgressBar(value: ' + v.toFixed(1) + ')';
}

function buildComposeSnippet(cardKey, card) {
  var v = (parseFloat(card.progress) || 0) / 100;
  return 'EBProgressBar(progress = ' + v.toFixed(1) + 'f)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardKey, card)
    : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var PB_PREVIEW_SCALE = 1;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('progress-bar-spec-' + cardStyle);
  if (host) host.innerHTML = _pbRender(card, PB_PREVIEW_SCALE);

  /* Properties readout. Colors / Layout `variants` are applied by the shared
     patcher in assessment.js — this script must not rebuild those sections. */
  var el = document.querySelector('[data-sp="' + cardStyle + '-progress"]');
  if (el) el.textContent = card.progress;

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
/* The Overview panel still ships a `State` control (determinate /
   indeterminate / success / error) that the set does not have. Read the
   progress value it offers and draw the Figma component. */
function _progressBarUpdate() {
  var g = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  var progress = g('progress-bar-ctrl-progress') || g('progress-bar-ctrl-value') || '0';
  var el = document.getElementById('progress-bar-demo-preview');
  if (el) el.innerHTML = _pbRender({ progress: progress }, 1);
}
window._progressBarUpdate = _progressBarUpdate;

/* In-context preview — the built steps, as Figma lays them out. */
function _progressBarContextMarkup() {
  return '<div class="pb-context">' +
    PB_STEPS.map(function (p) { return _pbRender({ progress: p }, 1); }).join('') +
    '</div>';
}
window._progressBarContextMarkup = _progressBarContextMarkup;

/* ── First paint ────────────────────────────────────────────────────── */
function _progressBarInit() {
  var ctx = document.getElementById('progress-bar-context-preview');
  if (ctx) ctx.innerHTML = _progressBarContextMarkup();
  _progressBarUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('progress-bar-spec-' + k);
    if (host) host.innerHTML = _pbRender(_specCards[k], PB_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _progressBarInit);
else _progressBarInit();
document.addEventListener('astro:page-load', _progressBarInit);
