/* Powers the live preview and spec card on the date-picker-header-trigger
 * page. Date Picker - Header Trigger (node 6779:105937) is State ×
 * hasCaret — six versions.
 */

var _dphtCaret =
  '<svg class="eb-preview-dphdr__caret" width="16" height="16" viewBox="0 0 16 16" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M4.5 6.25 8 9.75l3.5-3.5" stroke="currentColor" stroke-width="1.6" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _dphtEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _dphtRender(opts) {
  var state = opts.state || 'default';
  var cls = ['eb-preview-dphdr'];
  if (state === 'pressed') cls.push('eb-preview-dphdr--pressed');
  if (state === 'disabled') cls.push('eb-preview-dphdr--disabled');
  var h = '<span class="' + cls.join(' ') + '">';
  h += '<span>' + _dphtEscape(opts.text || 'Month') + '</span>';
  /* The caret inherits currentColor, so it mutes with the label. */
  if (opts.caret) h += _dphtCaret;
  return h + '</span>';
}

function _dphtUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('dpht-demo-preview');
  if (!preview) return;
  preview.innerHTML = _dphtRender({
    state: getVal('dpht-ctrl-state', 'default'),
    caret: getVal('dpht-ctrl-caret', 'true') === 'true',
    text: getVal('dpht-ctrl-text', 'Month')
  });
}
window._dphtUpdate = _dphtUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { default: { state: 'default', caret: 'true' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dpht-spec-' + cardKey);
  if (host) {
    host.innerHTML = _dphtRender({
      state: card.state,
      caret: card.caret === 'true',
      text: 'Month'
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _dphtInit() {
  _dphtUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dphtInit);
  else _dphtInit();
  document.addEventListener('astro:page-load', _dphtInit);
})();
