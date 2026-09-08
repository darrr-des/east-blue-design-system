/* Powers the live-preview controls for the slider component page.
 * Rebuilt for the 2026 Working File (node 6802:105580).
 *
 * The value is deliberately NOT a control here, the same as in Figma —
 * it is the width of DraggableFill, and you set it by dragging. The old
 * build enumerated it as eleven variants at 10% steps; the slot is what
 * made a continuous value possible, so the preview is continuous too.
 *
 * Knob and tooltip are children of the fill so they ride its right edge,
 * mirroring why Tooltip lives inside DraggableFill in Figma.
 */

/* Value lives per-container so a control change re-renders at the width
   you last dragged to, rather than snapping back to the default. */
/* One entry per container — the live preview plus a card per State — so
   dragging one card does not move the others. */
var _sldrValue = { demo: 10, default: 10, disabled: 10, pressed: 10 };

function _sldrRender(opts) {
  var state = opts.state || 'default';
  var hasTooltip = opts.hasTooltip !== false;
  var value = Math.round(opts.value == null ? 10 : opts.value);

  var h = '<div class="eb-preview-sldr eb-preview-sldr--' + state + '" data-sldr="' + opts.key + '">';
  h += '<div class="eb-preview-sldr__track">';
  h += '<div class="eb-preview-sldr__fill">';
  /* hasTooltip gates the bubble only — the knob is present in all six
     variants, so the control still reads as draggable with it off. */
  if (hasTooltip) {
    h += '<div class="eb-preview-sldr__tooltip"><span class="eb-preview-sldr__pct">' + value + '%</span></div>';
  }
  h += '<div class="eb-preview-sldr__knob"></div>';
  h += '</div></div></div>';
  return h;
}

/* Written straight to the DOM rather than re-rendering, so the drag
   stays smooth. --sldr-v is a number the CSS turns into a percentage. */
function _sldrPaint(root, value) {
  var fill = root.querySelector('.eb-preview-sldr__fill');
  var pct = root.querySelector('.eb-preview-sldr__pct');
  if (fill) fill.style.setProperty('--sldr-v', value);
  if (pct) pct.textContent = Math.round(value) + '%';
}

function _sldrApply(key) {
  var root = document.querySelector('[data-sldr="' + key + '"]');
  if (root) _sldrPaint(root, _sldrValue[key]);
}

/* ── Drag ────────────────────────────────────────────────────────── */
var _sldrDrag = null;

function _sldrValueFromEvent(root, clientX) {
  var track = root.querySelector('.eb-preview-sldr__track');
  if (!track) return null;
  var box = track.getBoundingClientRect();
  if (!box.width) return null;
  var pct = ((clientX - box.left) / box.width) * 100;
  return Math.max(0, Math.min(100, pct));
}

function _sldrPointerDown(e) {
  var root = e.target.closest ? e.target.closest('.eb-preview-sldr') : null;
  if (!root) return;
  /* Disabled means disabled — the preview refuses the drag, which is
     the clearest way to show what the state actually does. */
  if (root.classList.contains('eb-preview-sldr--disabled')) return;

  var key = root.getAttribute('data-sldr');
  var value = _sldrValueFromEvent(root, e.clientX);
  if (value == null) return;

  _sldrDrag = { root: root, key: key };
  root.classList.add('eb-preview-sldr--dragging');
  _sldrValue[key] = value;
  _sldrPaint(root, value);
  e.preventDefault();
}

function _sldrPointerMove(e) {
  if (!_sldrDrag) return;
  var value = _sldrValueFromEvent(_sldrDrag.root, e.clientX);
  if (value == null) return;
  _sldrValue[_sldrDrag.key] = value;
  _sldrPaint(_sldrDrag.root, value);
  e.preventDefault();
}

function _sldrPointerUp() {
  if (!_sldrDrag) return;
  _sldrDrag.root.classList.remove('eb-preview-sldr--dragging');
  _sldrDrag = null;
}

/* ── Overview preview ────────────────────────────────────────────── */
function _sldrUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('sldr-demo-preview');
  if (!preview) return;
  preview.innerHTML = _sldrRender({
    key: 'demo',
    state: getVal('sldr-ctrl-state', 'default'),
    hasTooltip: getVal('sldr-ctrl-hastooltip', 'true') === 'true',
    value: _sldrValue.demo
  });
  _sldrApply('demo');
}

/* ── Spec card state ─────────────────────────────────────────────── */
/* One card per State value, in the panel's order. hasTooltip stays a
   control — three cards describing six versions. */
var _specCards = {
  default: { state: 'default', hastooltip: 'true' },
  disabled: { state: 'disabled', hastooltip: 'true' },
  pressed: { state: 'pressed', hastooltip: 'true' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sldr-spec-' + cardKey);
  if (host) {
    host.innerHTML = _sldrRender({
      key: cardKey,
      state: card.state,
      hasTooltip: card.hastooltip === 'true',
      value: _sldrValue[cardKey]
    });
    _sldrApply(cardKey);
  }
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* State is not a parameter. Pressed is what the platform does while a
   finger is down, and Disabled is each platform's own idiom — the same
   shape settled across the rest of the system. The value is a binding
   rather than a property, which is the whole reason the Figma component
   needs a slot to fake it. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['default'];
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  var T = function (t) { return '<span class="syn-type">' + t + '</span>'; };
  var P = function (t) { return '<span class="syn-punc">' + t + '</span>'; };
  var K = function (t) { return '<span class="syn-kw">' + t + '</span>'; };
  var Fn = function (t) { return '<span class="syn-fn">' + t + '</span>'; };
  var N = function (t) { return '<span class="syn-num">' + t + '</span>'; };

  var args = compose
    ? ['value' + sep + 'amount',
       'onValueChange' + sep + P('{') + ' amount ' + '<span class="syn-eq">=</span>' + ' it ' + P('}'),
       'valueRange' + sep + N('0f') + P('..') + N('100f'),
       'showsTooltip' + sep + K(card.hastooltip === 'true' ? 'true' : 'false')]
    : ['value' + sep + P('$') + 'amount',
       'in' + sep + N('0') + P('...') + N('100'),
       'showsTooltip' + sep + K(card.hastooltip === 'true' ? 'true' : 'false')];

  if (compose && card.state === 'disabled') args.push('enabled' + sep + K('false'));

  var call = T('EBSlider') + P('(') + '\n    ' + args.join(P(',') + '\n    ') + '\n' + P(')');
  if (!compose && card.state === 'disabled') {
    call += '\n' + P('.') + Fn('disabled') + P('(') + K('true') + P(')');
  }
  return call;
}
window.getSnippet = getSnippet;

function _sldrInit() {
  _sldrUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  /* Delegated, so the handlers survive every re-render of the preview. */
  document.addEventListener('pointerdown', _sldrPointerDown);
  document.addEventListener('pointermove', _sldrPointerMove);
  document.addEventListener('pointerup', _sldrPointerUp);
  document.addEventListener('pointercancel', _sldrPointerUp);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sldrInit);
  else _sldrInit();
  document.addEventListener('astro:page-load', _sldrInit);
})();
