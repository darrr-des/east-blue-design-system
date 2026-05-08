/* Auto-extracted from assessment-src/components/table-transaction.html.
 * Powers the live-preview dropdowns/toggles for the table-transaction component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs table-transaction
 */
/* ── Table - Transaction JS ─────────────────────────────────────── */
var _tableTxnDemo = { type: 'header', cols: '3', icon: 'no' };

function _tableTxnBuildRow(type, cols, icon) {
  var W = 360;
  var padH = 24;
  var isHeader = type === 'header';
  var bg = isHeader ? '#F6F9FD' : '#FFFFFF';
  var border = 'border-bottom:1px solid #E5EBF4;';
  var headerGap = 8;
  var colsNum = parseInt(cols, 10);

  if (isHeader) {
    var height = icon === 'yes' ? 62 : 36;
    var labelFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:600; font-size:10px; line-height:12px; letter-spacing:0.25px;';
    var s = '<div style="width:' + W + 'px; height:' + height + 'px; background:' + bg + '; ' + border + ' padding:12px ' + padH + 'px; display:flex; align-items:center; gap:' + headerGap + 'px; box-sizing:border-box; color:#0A2757;">';
    for (var i = 0; i < colsNum; i++) {
      s += '<div style="flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; gap:2px;">';
      if (icon === 'yes') {
        s += '<div style="width:24px; height:24px; background:#C2C6CF; border-radius:41px;"></div>';
      }
      s += '<span style="' + labelFont + '">Column Label</span>';
      s += '</div>';
    }
    s += '</div>';
    return s;
  }

  // content row
  var preambleFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:600; font-size:14px; line-height:14px; letter-spacing:0.25px; color:#6780A9;';
  var amountFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:700; font-size:14px; line-height:14px; letter-spacing:0.25px; color:#0A2757;';
  var s2 = '<div style="width:' + W + 'px; background:' + bg + '; ' + border + ' padding:16px ' + padH + 'px; box-sizing:border-box; display:flex; flex-direction:column; gap:8px;">';
  s2 += '<div style="' + preambleFont + '">Label</div>';
  s2 += '<div style="display:flex; gap:16px; align-items:center;">';
  for (var j = 0; j < colsNum; j++) {
    s2 += '<div style="flex:1 0 0; min-width:0; display:flex; align-items:center; gap:2px;">';
    s2 += '<span style="' + amountFont + '">₱</span>';
    s2 += '<span style="' + amountFont + '">X,XXX.XX</span>';
    s2 += '</div>';
  }
  s2 += '</div></div>';
  return s2;
}

function updateTableTransactionDemo() {
  _tableTxnDemo.type = document.getElementById('table-transaction-demo-type').value;
  _tableTxnDemo.cols = document.getElementById('table-transaction-demo-cols').value;
  _tableTxnDemo.icon = document.getElementById('table-transaction-demo-icon').value;
  var effectiveIcon = _tableTxnDemo.type === 'content' ? 'no' : _tableTxnDemo.icon;
  var el = document.getElementById('table-transaction-demo-preview');
  if (el) el.innerHTML = _tableTxnBuildRow(_tableTxnDemo.type, _tableTxnDemo.cols, effectiveIcon);
}

/* ── Spec Cards (canonical) ──────────────────────────────────────── */
var _specCards = {
  header:  { type: 'header',  cols: '3', icon: 'no' },
  content: { type: 'content', cols: '3', icon: 'no' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  if (type === 'header') {
    var label = card.icon === 'yes'
      ? 'EBTransactionTable.Header("Section", icon: Image(systemName: "square"))'
      : 'EBTransactionTable.Header("Section")';
    return label + '\n    .ebColumns(' + card.cols + ')';
  }
  return 'EBTransactionTable.Row(transaction: item)\n    .ebColumns(' + card.cols + ')';
}

function buildComposeSnippet(type, card) {
  if (type === 'header') {
    var iconLine = card.icon === 'yes' ? '\n    icon = { Icon(Icons.Default.Square, null) },' : '';
    return 'EBTransactionTableHeader(\n    title = "Section",' + iconLine + '\n    columns = ' + card.cols + '\n)';
  }
  return 'EBTransactionTableRow(\n    transaction = item,\n    columns = ' + card.cols + '\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Content rows always have icon=no */
  var effectiveIcon = card.type === 'content' ? 'no' : card.icon;

  /* Update preview — find the inner div in the SpecCard preview block */
  var previewRoot = document.getElementById('spec-' + cardStyle + '-preview');
  if (previewRoot) {
    previewRoot.innerHTML = _tableTxnBuildRow(card.type, card.cols, effectiveIcon);
  }

  /* Update Properties readouts */
  var spCols = document.querySelector('[data-sp="' + cardStyle + '-cols"]');
  if (spCols) spCols.textContent = card.cols;
  var spIcon = document.querySelector('[data-sp="' + cardStyle + '-icon"]');
  if (spIcon) spIcon.textContent = card.type === 'content' ? '—' : card.icon;
  var spHeight = document.querySelector('[data-sp="' + cardStyle + '-height"]');
  if (spHeight) {
    if (card.type === 'header') spHeight.textContent = card.icon === 'yes' ? '62px' : '36px';
    else spHeight.textContent = '72.5px';
  }

  /* Update DEV code — locate via `[data-code-content="${demoKey}"]`. */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function _tableTxnInit() {
  if (document.getElementById('table-transaction-demo-preview')) {
    updateTableTransactionDemo();
  }
  /* Initialize spec card previews */
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'cols', _specCards[k].cols);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tableTxnInit);
else _tableTxnInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _tableTxnInit);
