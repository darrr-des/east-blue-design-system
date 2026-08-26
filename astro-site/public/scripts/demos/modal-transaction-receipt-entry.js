/* Powers the live-preview controls for the modal-transaction-receipt-entry
 * component page. The primitive (node 5947:181504) is two text layers and
 * one setting: Layout = Stacked | Inline.
 *
 * Stacked puts the value under the label at 14/16 so it can wrap.
 * Inline puts it on the right at 14/14, where the label fills the slack
 * and the value hugs — a longer label pushes the value rather than
 * clipping it. That fill/hug split is the whole reason the inline layout
 * survives real content, so the preview reproduces it with flex rather
 * than with the fixed 164/108 widths Figma reports.
 */

function _mtreEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _mtreRender(opts) {
  var layout = opts.layout === 'inline' ? 'inline' : 'stacked';
  var h = '<div class="eb-preview-mtre-shell">';
  h += '<div class="eb-preview-mtre eb-preview-mtre--' + layout + '">';
  h += '<div class="eb-preview-mtre__label">' + _mtreEscape(opts.label || 'Label') + '</div>';
  h += '<div class="eb-preview-mtre__value">' + _mtreEscape(opts.value || 'Put content here') + '</div>';
  h += '</div></div>';
  return h;
}

function _mtreUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('mtre-demo-preview');
  if (!preview) return;
  preview.innerHTML = _mtreRender({
    layout: getVal('mtre-ctrl-layout', 'stacked'),
    label: getVal('mtre-ctrl-label', 'Label'),
    value: getVal('mtre-ctrl-value', 'Put content here')
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { layout: 'stacked' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('mtre-spec-' + cardKey);
  if (host) {
    host.innerHTML = _mtreRender({
      layout: card.layout,
      label: 'Label',
      value: 'Put content here'
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _mtreInit() {
  _mtreUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mtreInit);
  else _mtreInit();
  document.addEventListener('astro:page-load', _mtreInit);
})();
