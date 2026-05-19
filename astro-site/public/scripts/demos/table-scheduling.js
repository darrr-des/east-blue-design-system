/* Auto-extracted from assessment-src/components/table-scheduling.html.
 * Powers the live-preview dropdowns/toggles for the table-scheduling component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs table-scheduling
 */
/* ── Table - Scheduling JS ─────────────────────────────────────── */
var _tableSchedDemo = { type: '4' };

function _tableSchedBuildRow(type) {
  var W = 360;
  var padH = 24;
  var padV = 16;
  var bg = '#FFFFFF';
  var border = 'border-bottom:1px solid #E5EBF4;';
  var dateFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;';
  var amountFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:700; font-size:14px; line-height:14px; letter-spacing:0.25px; color:#005CE5;';
  var preambleFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:600; font-size:12px; line-height:14px; letter-spacing:0.5px; color:#6780A9;';
  var valueFont = 'font-family:\'Proxima Soft\', system-ui; font-weight:600; font-size:12px; line-height:12px; letter-spacing:0.5px; color:#0A2757;';

  var containerGap = type === 'no' ? 0 : 8;
  var s = '<div style="width:' + W + 'px; background:' + bg + '; ' + border + ' padding:' + padV + 'px ' + padH + 'px; box-sizing:border-box; display:flex; flex-direction:column; gap:' + containerGap + 'px;">';

  // date-amount row
  s += '<div style="display:flex; align-items:center; width:100%;">';
  s += '<div style="width:108px; ' + dateFont + '">MMM DD, YYYY</div>';
  s += '<div style="flex:1 0 0; display:flex; align-items:center; justify-content:flex-start; gap:2px;">';
  s += '<span style="' + amountFont + '">₱</span>';
  s += '<span style="' + amountFont + '">X,XXX.XX</span>';
  s += '</div>';
  s += '</div>';

  function detailRow() {
    var r = '<div style="display:flex; align-items:flex-start; width:100%;">';
    r += '<div style="width:111px; ' + preambleFont + '">Label</div>';
    r += '<div style="flex:1 0 0; display:flex; gap:8px;">';
    r += '<div style="flex:1 0 0; display:flex; flex-direction:column; gap:4px;"><div style="' + preambleFont + '">Label</div><div style="' + valueFont + '">PHP X,XXX.XX</div></div>';
    r += '<div style="flex:1 0 0; display:flex; flex-direction:column; gap:4px;"><div style="' + preambleFont + '">Label</div><div style="' + valueFont + '">PHP X,XXX.XX</div></div>';
    r += '</div></div>';
    return r;
  }

  if (type === '2' || type === '4') {
    var detailsGap = type === '4' ? 12 : 0;
    s += '<div style="display:flex; flex-direction:column; gap:' + detailsGap + 'px; width:100%;">';
    s += detailRow();
    if (type === '4') {
      // second row: leading gutter is blank
      var r2 = '<div style="display:flex; align-items:flex-start; width:100%;">';
      r2 += '<div style="width:111px;"></div>';
      r2 += '<div style="flex:1 0 0; display:flex; gap:8px;">';
      r2 += '<div style="flex:1 0 0; display:flex; flex-direction:column; gap:4px;"><div style="' + preambleFont + '">Label</div><div style="' + valueFont + '">PHP X,XXX.XX</div></div>';
      r2 += '<div style="flex:1 0 0; display:flex; flex-direction:column; gap:4px;"><div style="' + preambleFont + '">Label</div><div style="' + valueFont + '">PHP X,XXX.XX</div></div>';
      r2 += '</div></div>';
      s += r2;
    }
    s += '</div>';
  }

  s += '</div>';
  return s;
}

function updateTableSchedulingDemo() {
  _tableSchedDemo.type = document.getElementById('table-scheduling-demo-type').value;
  var el = document.getElementById('table-scheduling-demo-preview');
  if (el) el.innerHTML = _tableSchedBuildRow(_tableSchedDemo.type);
}

/* ── Table-Scheduling Spec Card (single dynamic) ──────────────── */
var _specCards = {
  default: { type: '4' }
};
window._specCards = _specCards;

var _typeLabels = {
  'no': 'no display amount',
  '2':  '2 amounts display',
  '4':  '4 amounts display'
};

var _typeEnumSwift = { 'no': '.noAmount', '2': '.twoAmounts', '4': '.fourAmounts' };
var _typeEnumCompose = { 'no': 'EBScheduleType.NoAmount', '2': 'EBScheduleType.TwoAmounts', '4': 'EBScheduleType.FourAmounts' };

function buildSwiftSnippet(type, card) {
  return 'EBSchedulingTable.Row(item, type: ' + (_typeEnumSwift[card.type] || '.noAmount') + ')';
}

function buildComposeSnippet(type, card) {
  return 'EBSchedulingTableRow(\n    item = item,\n    type = ' + (_typeEnumCompose[card.type] || 'EBScheduleType.NoAmount') + '\n)';
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
    var displayValue = (prop === 'type') ? (_typeLabels[value] || value) : value;
    if (hexEl) hexEl.textContent = displayValue;
    else spEl.textContent = displayValue;
  }

  /* Update preview inside this card's spec-card-preview */
  var fullCardEl = document.getElementById('spec-card-' + cardStyle);
  if (fullCardEl) {
    var preview = fullCardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _tableSchedBuildRow(card.type);
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

function _tableSchedInitSpecCards() {
  /* Initialize the single spec card preview and DEV code */
  updateSpecCard('default', 'type', _specCards['default'].type);
}

function _tableSchedInit() {
  updateTableSchedulingDemo();
  _tableSchedInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tableSchedInit);
else _tableSchedInit();

document.addEventListener('astro:page-load', _tableSchedInit);
