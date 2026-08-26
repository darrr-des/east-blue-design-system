/* Powers the live preview on the date-picker-header page.
 * Date Picker - Header (node 6788:109823) is one component with no
 * versions — only its text changes across the seven columns.
 */

function _dphEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _dphRender(text) {
  return '<span class="eb-preview-dpwk">' + _dphEscape(text || 'Su') + '</span>';
}

function _dphUpdate() {
  var el = document.getElementById('dph-ctrl-day');
  var preview = document.getElementById('dph-demo-preview');
  if (!preview) return;
  preview.innerHTML = _dphRender(el ? el.value : 'Su');
}
window._dphUpdate = _dphUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { default: { day: 'Su' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dph-spec-' + cardKey);
  if (host) host.innerHTML = _dphRender(card.day);
}
window.updateSpecCard = updateSpecCard;

function _dphInit() {
  _dphUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'day', _specCards[k].day);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dphInit);
  else _dphInit();
  document.addEventListener('astro:page-load', _dphInit);
})();
