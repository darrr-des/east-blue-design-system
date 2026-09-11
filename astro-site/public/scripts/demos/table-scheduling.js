/* Powers the live-preview controls for the table-scheduling component page.
 *
 * Tracks component set 5868:40468 — State (Default / Disabled). Detail cell
 * count is not a property: the ⤷ AmountRowSlot holds however many
 * Table Amount Cell instances you drop in, so the count control
 * here just varies what the preview renders.
 */

/* Peso Sign - Proxima, exported from Figma. Not the Unicode ₱ — the DS
   mark is its own outline, and the 15 is not the 13 scaled. */
var _PESO13 = '<svg class="eb-peso" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z" fill="currentColor"/></svg>';
var _PESO15 = '<svg class="eb-peso" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M8.32617 2.30762C9.85735 2.30882 11.1401 3.36907 11.4834 4.79492H11.9502C12.3918 4.79513 12.75 5.15303 12.75 5.59473C12.7499 6.03636 12.3918 6.39432 11.9502 6.39453H11.4648C11.0956 7.78388 9.82976 8.8075 8.32422 8.80762H5.64941V11.5303C5.64934 12.0549 5.22384 12.4805 4.69922 12.4805C4.17468 12.4804 3.7491 12.0548 3.74902 11.5303V6.39453H3.0498C2.60811 6.39443 2.25007 6.03643 2.25 5.59473C2.25 5.15296 2.60807 4.79503 3.0498 4.79492H3.74902V3.28027C3.74902 2.88131 3.99515 2.53924 4.34375 2.39844C4.46342 2.33872 4.59834 2.30461 4.74121 2.30469L8.32617 2.30762ZM5.64941 6.39453V7.02734H8.32422C8.82499 7.02726 9.26688 6.77691 9.53223 6.39453H5.64941ZM5.64941 4.79492H9.5791C9.32135 4.37153 8.85699 4.08736 8.3252 4.08691L5.64941 4.08398V4.79492Z" fill="currentColor"/></svg>';

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
    total:  o.amount || o.total || 'X,XXX.XX',
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
  if (o.hasCurrency) s += '<span class="eb-preview-tsched__peso">' + _PESO15 + '</span>';
  s += '<span class="eb-preview-tsched__total">' +
       '<span class="eb-preview-tsched__total-text">' + _tschedEscape(o.total) + '</span>' +
       '</span>';
  s += '</div>';

  /* details-row — row label plus N amount cells, gated by hasAmountRow */
  if (o.hasAmountRow && o.cells > 0) {
    s += '<div class="eb-preview-tsched__details">';
    s += '<span class="eb-preview-tsched__row-label">' + _tschedEscape(o.label) + '</span>';
    s += '<div class="eb-preview-tsched__cells">';
    for (var i = 0; i < o.cells; i++) {
      s += '<div class="eb-preview-tsched__cell">';
      s += '<span class="eb-preview-tsched__cell-label">Label</span>';
      s += '<span class="eb-preview-tsched__cell-amount">' +
           (o.hasCurrency ? _PESO13 : '') +
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
  'default':  { state: 'default',  hasAmountRow: 'true', hasBorder: 'true', cells: '2', month: 'MM', day: 'DD', year: 'YYYY', amount: 'X,XXX.XX', label: 'Label' },
  'disabled': { state: 'disabled', hasAmountRow: 'true', hasBorder: 'true', cells: '2', month: 'MM', day: 'DD', year: 'YYYY', amount: 'X,XXX.XX', label: 'Label' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var when = card.month + ' / ' + card.day + ' / ' + card.year;
  var tail = [];
  if (card.hasAmountRow !== 'false') {
    tail.push('    label: "' + card.label + '"');
    tail.push('    breakdown: breakdown');
  }
  if (card.hasBorder === 'false') tail.push('    showsDivider: false');
  var lines = ['EBTableSchedulingRow('];
  lines.push('    date: dueDate,            // ' + when);
  lines.push('    amount: "' + card.amount + '"' + (tail.length ? ',' : ''));
  tail.forEach(function (line, i) { lines.push(line + (i < tail.length - 1 ? ',' : '')); });
  lines.push(')');
  if (card.state === 'disabled') lines.push('.disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var when = card.month + ' / ' + card.day + ' / ' + card.year;
  var tail = [];
  if (card.hasAmountRow !== 'false') {
    tail.push('    label = "' + card.label + '"');
    tail.push('    breakdown = breakdown');
  }
  if (card.hasBorder === 'false') tail.push('    showsDivider = false');
  if (card.state === 'disabled') tail.push('    enabled = false');
  var lines = ['EBTableSchedulingRow('];
  lines.push('    date = dueDate,            // ' + when);
  lines.push('    amount = "' + card.amount + '"' + (tail.length ? ',' : ''));
  tail.forEach(function (line, i) { lines.push(line + (i < tail.length - 1 ? ',' : '')); });
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

  var host = document.getElementById('table-scheduling-spec-' + cardStyle);
  if (host) host.innerHTML = _tschedBuild(card);

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
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tschedInit);
else _tschedInit();

document.addEventListener('astro:page-load', _tschedInit);
