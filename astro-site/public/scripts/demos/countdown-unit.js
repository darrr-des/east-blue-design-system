/* Powers the live preview and spec card on the countdown-unit page.
 * Countdown - Unit (node 7831:111593) is Layout = Stacked | Inline.
 * Stacked sets the number over its label at contrasting sizes; Inline
 * runs both on one line at 16px, which is what the Pill needs.
 */

function _cduEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _cduRender(opts) {
  var layout = opts.layout === 'inline' ? 'inline' : 'stacked';
  var h = '<span class="eb-preview-cdunit eb-preview-cdunit--' + layout + '">';
  h += '<span class="eb-preview-cdunit__time">' + _cduEscape(opts.time || '00') + '</span>';
  h += '<span class="eb-preview-cdunit__unit">' + _cduEscape(opts.unit || 'days') + '</span>';
  return h + '</span>';
}

function _cduUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('cdu-demo-preview');
  if (!preview) return;

  var layoutSel = byId('cdu-ctrl-layout');
  var unitInput = byId('cdu-ctrl-unit');
  var layout = layoutSel ? layoutSel.value : 'stacked';

  /* The two layouts use different abbreviations — full words stacked,
     single letters inline. Swap the placeholder when the user has not
     typed something of their own. */
  if (unitInput) {
    if (layout === 'inline' && unitInput.value === 'days') unitInput.value = 'd';
    if (layout === 'stacked' && unitInput.value === 'd') unitInput.value = 'days';
  }

  preview.innerHTML = _cduRender({
    layout: layout,
    time: byId('cdu-ctrl-time') ? byId('cdu-ctrl-time').value : '00',
    unit: unitInput ? unitInput.value : 'days'
  });
}
window._cduUpdate = _cduUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { unit: { layout: 'stacked' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('cdu-spec-' + cardKey);
  if (!host) return;
  host.innerHTML = _cduRender({
    layout: card.layout,
    time: '00',
    unit: card.layout === 'inline' ? 'd' : 'days'
  });
}
window.updateSpecCard = updateSpecCard;

function _cduInit() {
  _cduUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cduInit);
  else _cduInit();
  document.addEventListener('astro:page-load', _cduInit);
})();
