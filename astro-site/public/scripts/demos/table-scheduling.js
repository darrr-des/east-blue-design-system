/* Powers the live-preview controls for the table-scheduling component page.
 *
 * Tracks component set 5868:40468 — State (Default / Disabled). Detail cell
 * count is not a property: the ⤷ AmountRowSlot holds however many
 * Table Amount Cell instances you drop in, so the count control
 * here just varies what the preview renders.
 */

function _tschedEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Legacy option shape was { type: 'no' | '2' | '4' }. */
function _tschedNormalise(opts) {
  var o = opts || {};
  var cells = o.cells;
  if (cells === undefined) {
    cells = o.type === 'no' ? 1 : (o.type === '2' ? 2 : (o.type === '4' ? 3 : 2));
  }
  return {
    state:  o.state  || 'default',
    hasAmountRow: o.hasAmountRow === undefined ? true : (o.hasAmountRow === 'true' || o.hasAmountRow === true),
    hasBorder:    o.hasBorder    === undefined ? true : (o.hasBorder === 'true' || o.hasBorder === true),
    hasCurrency:  o.hasCurrency  === undefined ? true : (o.hasCurrency === 'true' || o.hasCurrency === true),
    cells:  parseInt(cells, 10) || 1,
    /* The date is three text properties separated by restylable layers. */
    month:  o.month  || 'MM',
    day:    o.day    || 'DD',
    year:   o.year   || 'YYYY',
    total:  o.total  || 'X,XXX.XX',
    label:  o.label  || 'Label'
  };
}

function _tschedBuild(opts) {
  var o = _tschedNormalise(opts);

  var cls = 'eb-preview eb-preview-tsched';
  if (o.state === 'disabled') cls += ' eb-preview-tsched--disabled';
  if (!o.hasBorder) cls += ' eb-preview-tsched--no-border';

  var s = '<div class="' + cls + '">';

  /* date-amount-row — #month / #day / #year, ⤷ CurrencySlot, then #amount */
  var date = _tschedEscape(o.month) + ' / ' + _tschedEscape(o.day) + ' / ' + _tschedEscape(o.year);
  s += '<div class="eb-preview-tsched__head">';
  s += '<span class="eb-preview-tsched__date">' + date + '</span>';
  if (o.hasCurrency) s += '<span class="eb-preview-tsched__peso">₱</span>';
  s += '<span class="eb-preview-tsched__total">' + _tschedEscape(o.total) + '</span>';
  s += '</div>';

  /* details-row — row label plus N amount cells, gated by hasAmountRow */
  if (o.hasAmountRow && o.cells > 0) {
    s += '<div class="eb-preview-tsched__details">';
    s += '<span class="eb-preview-tsched__row-label">' + _tschedEscape(o.label) + '</span>';
    s += '<div class="eb-preview-tsched__cells">';
    for (var i = 0; i < o.cells; i++) {
      s += '<div class="eb-preview-tsched__cell">';
      s += '<span class="eb-preview-tsched__cell-label">' + _tschedEscape(o.label) + '</span>';
      s += '<span class="eb-preview-tsched__cell-amount">' +
           (o.hasCurrency ? '<span>₱</span>' : '') +
           '<span>X,XXX.XX</span></span>';
      s += '</div>';
    }
    s += '</div></div>';
  }

  s += '</div>';
  return s;
}

function updateTableSchedulingDemo() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var el = document.getElementById('table-scheduling-demo-preview');
  if (!el) return;
  el.innerHTML = _tschedBuild({
    state:        get('table-scheduling-demo-state', 'default'),
    hasAmountRow: get('table-scheduling-demo-hasamountrow', 'true'),
    hasBorder:    get('table-scheduling-demo-hasborder', 'true'),
    hasCurrency:  get('table-scheduling-demo-hascurrency', 'true'),
    cells:       get('table-scheduling-demo-cells', '2'),
    month:       get('table-scheduling-demo-month', 'MM'),
    day:         get('table-scheduling-demo-day', 'DD'),
    year:        get('table-scheduling-demo-year', 'YYYY'),
    total:       get('table-scheduling-demo-total', 'X,XXX.XX'),
    label:       get('table-scheduling-demo-label', 'Label')
  });
}

/* ── Spec cards ─────────────────────────────────────────────────── */
var _specCards = {
  'default': { state: 'default', cells: '2' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBTableSchedulingRow('];
  lines.push('    date: "03 / 15 / 2026",');
  lines.push('    total: "1,250.00",');
  lines.push('    details: details');
  lines.push(card.state === 'disabled' ? ')\n.disabled(true)' : ')');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var lines = ['EBTableSchedulingRow('];
  lines.push('    date = "03 / 15 / 2026",');
  lines.push('    total = "1,250.00",');
  lines.push('    details = details' + (card.state === 'disabled' ? ',' : ''));
  if (card.state === 'disabled') lines.push('    enabled = false');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) {
    var hexEl = spEl.querySelector('.spec-prop-hex');
    if (hexEl) hexEl.textContent = value;
    else spEl.textContent = value;
  }

  document.querySelectorAll('[id^="spec-card-"]').forEach(function (c) {
    var preview = c.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _tschedBuild(card);
  });

  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var lang = codeEl.getAttribute('data-lang') || 'swift';
    var raw = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}

function _tschedInit() {
  updateTableSchedulingDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'cells', _specCards[k].cells);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tschedInit);
else _tschedInit();

document.addEventListener('astro:page-load', _tschedInit);
