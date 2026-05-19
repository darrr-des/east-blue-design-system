/* Auto-extracted from assessment-src/components/table.html.
 * Powers the live-preview dropdowns/toggles for the table component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs table
 */
/* ── Table JS ─────────────────────────────────────────────────────── */
var _tableDemo = { type: 'header', cols: 4, icon: 'no' };

function _tableBuildRow(type, cols, icon) {
  var W = 360;
  var padH = 24;
  var gap = 16;
  var isHeader = type === 'header';
  var bg = isHeader ? '#F6F9FD' : '#FFFFFF';
  var border = isHeader ? 'border-bottom:1px solid #E5EBF4;' : '';
  var height = isHeader ? (icon === 'yes' ? 65 : 37) : 56;
  var labelFont = isHeader
    ? 'font-family:\'Proxima Soft\', system-ui; font-weight:700; font-size:14px; line-height:14px; letter-spacing:0.25px;'
    : 'font-family:\'Proxima Soft\', system-ui; font-weight:700; font-size:12px; line-height:12px; letter-spacing:0.5px;';
  var colFont = isHeader
    ? 'font-family:\'Proxima Soft\', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px;'
    : 'font-family:\'BarkAda\', system-ui; font-weight:600; font-size:10px; line-height:15px;';
  var labelText = isHeader ? 'Header' : 'Label here';
  var colText = isHeader ? 'Column' : 'Description';

  var s = '<div style="width:' + W + 'px; height:' + height + 'px; background:' + bg + '; ' + border + ' padding:0 ' + padH + 'px; display:flex; align-items:center; gap:' + gap + 'px; box-sizing:border-box; color:#0A2757;">';
  // Label column
  s += '<div style="min-width:99px; width:99px; ' + labelFont + '">' + labelText + '</div>';
  // Data columns
  var colsNum = parseInt(cols, 10);
  for (var i = 0; i < colsNum - 1; i++) {
    s += '<div style="flex:1 0 0; min-width:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px;">';
    if (isHeader && icon === 'yes') {
      s += '<div style="width:24px; height:24px; background:#C2C6CF; border-radius:41px;"></div>';
    }
    s += '<span style="' + colFont + ' text-align:center;">' + colText + '</span>';
    s += '</div>';
  }
  s += '</div>';
  return s;
}

function updateTableDemo() {
  _tableDemo.type = document.getElementById('table-demo-type').value;
  _tableDemo.cols = document.getElementById('table-demo-cols').value;
  _tableDemo.icon = document.getElementById('table-demo-icon').value;
  // Force icon=no for content rows (icon is header-only in the Figma schema)
  var effectiveIcon = _tableDemo.type === 'content' ? 'no' : _tableDemo.icon;
  var el = document.getElementById('table-demo-preview');
  if (el) el.innerHTML = _tableBuildRow(_tableDemo.type, _tableDemo.cols, effectiveIcon);
}

/* ── Table Spec Cards ───────────────────────────────────────────── */
var _specCards = {
  header:  { type: 'header',  cols: '4', icon: 'no' },
  content: { type: 'content', cols: '4', icon: 'no' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  if (card.type === 'header') {
    return 'EBTableRow(\n    role: .header,\n    label: "Header",\n    columns: Array(repeating: "Column", count: ' + card.cols + ')\n)';
  }
  return 'EBTableRow(\n    role: .content,\n    label: "Label",\n    columns: Array(repeating: "Value", count: ' + card.cols + ')\n)';
}

function buildComposeSnippet(type, card) {
  if (card.type === 'header') {
    return 'EBTableRow(\n    role = EBTableRowRole.Header,\n    label = "Header",\n    columns = List(' + card.cols + ') { "Column" }\n)';
  }
  return 'EBTableRow(\n    role = EBTableRowRole.Content,\n    label = "Label",\n    columns = List(' + card.cols + ') { "Value" }\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update Properties row text — data-sp="${cardStyle}-${prop}" */
  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) {
    var hexEl = spEl.querySelector('.spec-prop-hex');
    if (hexEl) hexEl.textContent = value;
    else spEl.textContent = value;
  }

  /* Update preview SVG inside this card's spec-card-preview */
  var cardKey = cardStyle === 'header' ? 'header-row' : 'content-row';
  var fullCardEl = document.getElementById('spec-card-' + cardKey);
  if (fullCardEl) {
    var preview = fullCardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _tableBuildRow(card.type, card.cols, card.icon);
  }

  /* Update DEV code — `[data-code-content="${cardStyle}"]` */
  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var lang = codeEl.getAttribute('data-lang') || 'swift';
    var raw = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}

function _tableInitSpecCards() {
  var h = document.getElementById('table-preview-header');
  if (h) h.innerHTML = _tableBuildRow('header', 4, 'no');
  var c = document.getElementById('table-preview-content');
  if (c) c.innerHTML = _tableBuildRow('content', 4, 'no');
  /* Initialize each spec card so DEV code reflects current state */
  ['header', 'content'].forEach(function(k) {
    updateSpecCard(k, 'cols', _specCards[k].cols);
  });
}

function _tableInit() {
  updateTableDemo();
  _tableInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tableInit);
else _tableInit();

document.addEventListener('astro:page-load', _tableInit);
