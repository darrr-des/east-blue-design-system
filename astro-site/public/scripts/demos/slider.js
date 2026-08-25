/* Powers the live-preview controls for the slider component page.
 * Rebuilt for the 2026 Working File (node 6802:105580).
 *
 * The value is deliberately NOT a variant here, the same as in Figma —
 * it is the width of DraggableFill. The old build enumerated it as
 * eleven variants at 10% steps; the slot is what made a continuous
 * value possible, so the Width control drives a width class rather
 * than swapping a variant.
 *
 * Knob and tooltip are children of the fill so they ride its right
 * edge, mirroring why Tooltip lives inside DraggableFill in Figma.
 */

var _sldrValues = ['0', '10', '25', '50', '75', '100'];

function _sldrRender(opts) {
  var state = opts.state || 'default';
  var value = _sldrValues.indexOf(opts.value) === -1 ? '10' : opts.value;
  var hasTooltip = opts.hasTooltip !== false;

  var cls = 'eb-preview-sldr eb-preview-sldr--' + state;
  /* Without the bubble there is nothing to clear above the track. */
  if (!hasTooltip) cls += ' eb-preview-sldr--no-tooltip';

  var h = '<div class="' + cls + '">';
  h += '<div class="eb-preview-sldr__track">';
  h += '<div class="eb-preview-sldr__fill eb-preview-sldr__fill--v' + value + '">';
  if (hasTooltip) {
    h += '<div class="eb-preview-sldr__tooltip"><span class="eb-preview-sldr__pct">' + value + '%</span></div>';
  }
  h += '<div class="eb-preview-sldr__knob"></div>';
  h += '</div></div></div>';
  return h;
}

function _sldrUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('sldr-demo-preview');
  if (!preview) return;
  preview.innerHTML = _sldrRender({
    state: getVal('sldr-ctrl-state', 'default'),
    value: getVal('sldr-ctrl-value', '10'),
    hasTooltip: getVal('sldr-ctrl-hastooltip', 'true') === 'true'
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { state: 'default', hastooltip: 'true', value: '10' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sldr-spec-' + cardKey);
  if (host) {
    host.innerHTML = _sldrRender({
      state: card.state,
      value: card.value,
      hasTooltip: card.hastooltip === 'true'
    });
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
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sldrInit);
  else _sldrInit();
  document.addEventListener('astro:page-load', _sldrInit);
})();
