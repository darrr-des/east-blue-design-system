/* Auto-extracted from assessment-src/components/table-transaction.html.
 * Powers the live-preview dropdowns/toggles for the table-transaction component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs table-transaction
 */
/* ── Table - Transaction JS ─────────────────────────────────────── */
var _tableTxnDemo = { type: 'header', cols: 3, icon: 'no' };

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

function _tableTxnInitSpecCards() {
  var h = document.getElementById('table-transaction-preview-header');
  if (h) h.innerHTML = _tableTxnBuildRow('header', 3, 'no');
  var c = document.getElementById('table-transaction-preview-content');
  if (c) c.innerHTML = _tableTxnBuildRow('content', 3, 'no');
}

function _tableTxnInit() {
  updateTableTransactionDemo();
  _tableTxnInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tableTxnInit);
else _tableTxnInit();
