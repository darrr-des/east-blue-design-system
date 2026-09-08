/* Powers the live-preview controls for the table-transaction component page.
 *
 * Tracks component set 5896:39727 — Role (Header / Content) × State
 * (Default / Disabled). Column count is not a property: the ⤷ ColumnSlot
 * holds however many cells you drop in — Table Cell instances in the header,
 * Table Amount Cell instances in the content row.
 */

/* Peso Sign - Proxima, exported from Figma. Not the Unicode ₱ — the DS
   mark is its own outline, and the 15 is not the 13 scaled. */
var _PESO13 = '<svg class="eb-peso" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M3.7998 1.83594C3.84465 1.83595 3.88852 1.84042 3.93164 1.84668L6.7666 1.84863C8.04707 1.84929 9.12165 2.71892 9.43848 3.89941H10.2432C10.6294 3.89964 10.9422 4.21333 10.9424 4.59961C10.9424 4.98607 10.6296 5.29958 10.2432 5.2998H9.44727C9.14305 6.49949 8.05979 7.38858 6.76562 7.38867H4.71387V9.7998C4.71369 10.3042 4.30425 10.7138 3.7998 10.7139C3.29527 10.7139 2.88592 10.3043 2.88574 9.7998V5.2998H2.32129C1.93469 5.2998 1.62109 4.98621 1.62109 4.59961C1.6213 4.21319 1.93482 3.89941 2.32129 3.89941H2.88574V2.75C2.88574 2.24535 3.29516 1.83594 3.7998 1.83594ZM4.71387 5.81738H6.76562C7.17397 5.81732 7.53373 5.61193 7.75 5.2998H4.71387V5.81738ZM4.71387 3.89941H7.72266C7.50428 3.60886 7.15805 3.42029 6.7666 3.41992L4.71387 3.41895V3.89941Z" fill="currentColor"/></svg>';

function _ttxnEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Legacy option shape was { type, cols, icon }. */
function _ttxnNormalise(opts) {
  var o = opts || {};
  return {
    role:  o.role  || (o.type === 'content' ? 'content' : 'header'),
    state: o.state || 'default',
    cols:  parseInt(o.cols, 10) || 3,
    asset: o.asset === undefined ? (o.icon === 'no' ? 'no' : 'yes') : o.asset,
    hasLabel:  o.hasLabel  === undefined ? true : (o.hasLabel === 'true' || o.hasLabel === true),
    hasBorder: o.hasBorder === undefined ? true : (o.hasBorder === 'true' || o.hasBorder === true),
    label: o.label || 'Label'
  };
}

function _ttxnBuild(opts) {
  var o = _ttxnNormalise(opts);
  var isHeader = o.role === 'header';

  var cls = 'eb-preview eb-preview-ttxn eb-preview-ttxn--' + (isHeader ? 'header' : 'content');
  if (o.state === 'disabled') cls += ' eb-preview-ttxn--disabled';
  if (!o.hasBorder) cls += ' eb-preview-ttxn--no-border';

  var s = '<div class="' + cls + '">';

  /* Content rows carry a full-width #label above the amount cells. */
  if (!isHeader && o.hasLabel) {
    s += '<div class="eb-preview-ttxn__label">' + _ttxnEscape(o.label) + '</div>';
  }

  s += '<div class="eb-preview-ttxn__cols">';
  for (var i = 0; i < o.cols; i++) {
    s += '<div class="eb-preview-ttxn__cell">';
    if (isHeader) {
      /* Table Cell — ⤷ AssetSlot above a column label */
      if (o.asset === 'yes') s += '<div class="eb-preview-ttxn__cell-asset"></div>';
      s += '<span class="eb-preview-ttxn__cell-label">Column Label</span>';
    } else {
      /* Table Amount Cell — its own #label is hidden here, so only the
         peso-prefixed value renders. The row's single #label covers them all. */
      s += '<span class="eb-preview-ttxn__cell-amount">' + _PESO13 + '<span>X,XXX.XX</span></span>';
    }
    s += '</div>';
  }
  s += '</div>';

  s += '</div>';
  return s;
}

function updateTableTransactionDemo() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var el = document.getElementById('table-transaction-demo-preview');
  if (!el) return;

  var role = get('table-transaction-demo-role', 'header');

  /* The asset slot is header-only; hasLabel is content-only, and the #label
     text only applies while that boolean is on. */
  var isHeader = role === 'header';
  var hasLabel = get('table-transaction-demo-haslabel', 'true') === 'true';

  var assetRow = document.getElementById('table-transaction-row-asset');
  if (assetRow) assetRow.style.display = isHeader ? '' : 'none';
  var hasLabelRow = document.getElementById('table-transaction-row-haslabel');
  if (hasLabelRow) hasLabelRow.style.display = isHeader ? 'none' : '';
  var labelRow = document.getElementById('table-transaction-row-label');
  if (labelRow) labelRow.style.display = (!isHeader && hasLabel) ? '' : 'none';

  el.innerHTML = _ttxnBuild({
    role:  role,
    state: get('table-transaction-demo-state', 'default'),
    hasLabel:  hasLabel,
    hasBorder: get('table-transaction-demo-hasborder', 'true'),
    cols:  get('table-transaction-demo-cols', '3'),
    asset: get('table-transaction-demo-asset', 'yes'),
    label: get('table-transaction-demo-label', 'Label')
  });
}

/* ── Spec cards ─────────────────────────────────────────────────── */
var _specCards = {
  header:  { role: 'header',  state: 'default', hasLabel: 'true', hasBorder: 'true', label: 'Label', cols: '3', asset: 'yes' },
  content: { role: 'content', state: 'default', hasLabel: 'true', hasBorder: 'true', label: 'Label', cols: '3' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var isHeader = card.role !== 'content';
  var tail = [];
  if (!isHeader && card.hasLabel !== 'false') tail.push('    label: "' + card.label + '"');
  tail.push('    ' + (isHeader ? 'columns: columns' : 'amounts: amounts'));
  if (card.hasBorder === 'false') tail.push('    showsDivider: false');
  var lines = ['EBTableTransactionRow('];
  lines.push('    role: ' + (isHeader ? '.header' : '.content') + ',');
  tail.forEach(function (line, i) { lines.push(line + (i < tail.length - 1 ? ',' : '')); });
  lines.push(')');
  if (card.state === 'disabled') lines.push('.disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var isHeader = card.role !== 'content';
  var tail = [];
  if (!isHeader && card.hasLabel !== 'false') tail.push('    label = "' + card.label + '"');
  tail.push('    ' + (isHeader ? 'columns = columns' : 'amounts = amounts'));
  if (card.hasBorder === 'false') tail.push('    showsDivider = false');
  if (card.state === 'disabled') tail.push('    enabled = false');
  var lines = ['EBTableTransactionRow('];
  lines.push('    role = EBTableRowRole.' + (isHeader ? 'Header' : 'Content') + ',');
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

  var host = document.getElementById('table-transaction-spec-' + cardStyle);
  if (host) host.innerHTML = _ttxnBuild(card);

  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var lang = codeEl.getAttribute('data-lang') || 'swift';
    var raw = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}

function _ttxnInit() {
  updateTableTransactionDemo();
  ['header', 'content'].forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ttxnInit);
else _ttxnInit();

document.addEventListener('astro:page-load', _ttxnInit);
