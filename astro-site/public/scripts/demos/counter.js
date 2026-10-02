/* Counter — live preview + spec card.
 * Set 4675:21497 (2026 Working File): State = Default | Disabled ×
 * hasLimit = True | False = 4 variants.
 *
 * Read off the variants and checked against export_node_as_image:
 *   Default·True 4675:21502 (53×24) · Default·False 4675:21508 (24×24)
 *   Disabled·True 4675:21498 · Disabled·False 4675:22734
 * Overflow (owner decision, v2.0): the single integer clamps at maxDisplay
 * (default 99) and shows "99+"; the slash format clamps count at limit.
 */

function _ctrEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* opts: { state: default|disabled, hasLimit: 'true'|'false', count, limit, maxDisplay } */
function _ctrRender(opts) {
  var state = opts.state || 'default';
  var hasLimit = String(opts.hasLimit == null ? 'true' : opts.hasLimit) === 'true';
  var count = opts.count == null || opts.count === '' ? '0' : String(opts.count);
  var limit = opts.limit == null || opts.limit === '' ? '10' : String(opts.limit);
  var max = parseInt(opts.maxDisplay, 10); if (isNaN(max)) max = 99;
  var n = parseInt(count, 10);

  var cls = 'eb-preview eb-preview-counter';
  if (state === 'disabled') cls += ' eb-preview-counter--disabled';
  if (hasLimit) cls += ' eb-preview-counter--limit';

  var html = '<span class="' + cls + '">';
  if (hasLimit) {
    var lim = parseInt(limit, 10);
    var shown = (!isNaN(n) && !isNaN(lim) && n > lim) ? String(lim) : count;
    html += '<span class="eb-preview-counter__count">' + _ctrEscape(shown) + '</span>';
    html += '<span class="eb-preview-counter__sep">/</span>';
    html += '<span class="eb-preview-counter__limit">' + _ctrEscape(limit) + '</span>';
  } else {
    var over = !isNaN(n) && n > max;
    html += '<span class="eb-preview-counter__count">' + _ctrEscape(over ? String(max) : count) + '</span>';
    if (over) html += '<span class="eb-preview-counter__plus">+</span>';
  }
  return html + '</span>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _counterUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('counter-demo-preview');
  if (!preview) return;
  preview.innerHTML = _ctrRender({
    state:      getVal('counter-ctrl-state', 'default'),
    hasLimit:   getVal('counter-ctrl-haslimit', 'true'),
    count:      getVal('counter-ctrl-count', '0'),
    limit:      getVal('counter-ctrl-limit', '10'),
    maxDisplay: getVal('counter-ctrl-max', '99')
  });
}
window._counterUpdate = _counterUpdate;

/* ── Spec card — one card: every property is State or a boolean ─────── */
var _specCards = {
  'counter': { state: 'default', hasLimit: 'true', count: '0', limit: '10', maxDisplay: '99' }
};
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var hasLimit = String(c.hasLimit) !== 'false';
  var disabled = c.state === 'disabled';
  if (lang === 'swift') {
    var s = 'EBCounter(count: 0)';
    if (hasLimit) s += '\n    .ebLimit(10)';
    if (disabled) s += '\n    .disabled(true)';
    return s;
  }
  var lines = ['    count = 0'];
  if (hasLimit) lines.push('    limit = 10');
  if (disabled) lines.push('    enabled = false');
  return 'EBCounter(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('counter-spec-' + cardKey);
  if (host) host.innerHTML = _ctrRender(card);
}
window.updateSpecCard = updateSpecCard;

function _counterInit() {
  _counterUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'state', _specCards[k].state); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _counterInit);
else _counterInit();
document.addEventListener('astro:page-load', _counterInit);
