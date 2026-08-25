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
var _sldrValue = { demo: 10, spec: 10 };

function _sldrRender(opts) {
  var state = opts.state || 'default';
  var hasTooltip = opts.hasTooltip !== false;
  var value = Math.round(opts.value == null ? 10 : opts.value);

  var h = '<div class="eb-preview-sldr eb-preview-sldr--' + state + '" data-sldr="' + opts.key + '">';
  h += '<div class="eb-preview-sldr__track">';
  h += '<div class="eb-preview-sldr__fill">';
  /* hasTooltip=false removes the knob as well as the bubble — both live
     inside DraggableFill and both are absent from those variants. The
     fill is still draggable, which is the oddity: there is nothing left
     to signal that it can be dragged. */
  if (hasTooltip) {
    h += '<div class="eb-preview-sldr__tooltip"><span class="eb-preview-sldr__pct">' + value + '%</span></div>';
    h += '<div class="eb-preview-sldr__knob"></div>';
  }
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
var _specCards = {
  default: { state: 'default', hastooltip: 'true' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sldr-spec-' + cardKey);
  if (host) {
    host.innerHTML = _sldrRender({
      key: 'spec',
      state: card.state,
      hasTooltip: card.hastooltip === 'true',
      value: _sldrValue.spec
    });
    _sldrApply('spec');
  }
}
window.updateSpecCard = updateSpecCard;

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
