/* Powers the live-preview controls for the table-transaction component page.
 *
 * Tracks component set 5896:39727 — Role (Header / Content) × State
 * (Default / Disabled). Column count is not a property: the ⤷ ColumnSlot
 * holds however many cells you drop in — Table Cell instances in the header,
 * Table Amount Cell instances in the content row.
 */

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
      s += '<span class="eb-preview-ttxn__cell-amount"><span>₱</span><span>X,XXX.XX</span></span>';
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
  header:  { role: 'header',  state: 'default', cols: '3', asset: 'yes' },
  content: { role: 'content', state: 'default', cols: '3' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var role = card.role === 'content' ? '.content' : '.header';
  var lines = ['EBTableTransactionRow('];
  lines.push('    role: ' + role + ',');
  if (card.role === 'content') lines.push('    label: "Label",');
  lines.push(card.role === 'content' ? '    amounts: amounts' : '    columns: columns');
  lines.push(card.state === 'disabled' ? ')\n.disabled(true)' : ')');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var role = card.role === 'content' ? 'EBTableRowRole.Content' : 'EBTableRowRole.Header';
  var lines = ['EBTableTransactionRow('];
  lines.push('    role = ' + role + ',');
  if (card.role === 'content') lines.push('    label = "Label",');
  lines.push((card.role === 'content' ? '    amounts = amounts' : '    columns = columns') + (card.state === 'disabled' ? ',' : ''));
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

  var cardKey = cardStyle === 'header' ? 'header-row' : 'content-row';
  var fullCardEl = document.getElementById('spec-card-' + cardKey);
  if (fullCardEl) {
    var preview = fullCardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _ttxnBuild(card);
  }

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
    updateSpecCard(k, 'cols', _specCards[k].cols);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ttxnInit);
else _ttxnInit();

document.addEventListener('astro:page-load', _ttxnInit);
