/* Powers the live-preview controls for the table component page.
 *
 * Tracks component set 5734:37611 (Table Row) — Role (Header / Content)
 * x State (Default / Disabled). Column count is not a property: the
 * Columns Slot holds however many Table Cell instances you drop in, so
 * the count control here just varies how many cells the preview renders.
 */

var _tableDemo = { role: 'header', state: 'default', cols: '3', asset: 'yes' };

function _tableEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Legacy option shape from the pre-rebuild page was { type, cols, icon }. */
function _tableNormalise(opts) {
  var o = opts || {};
  return {
    role:  o.role  || (o.type === 'content' ? 'content' : 'header'),
    state: o.state || 'default',
    cols:  parseInt(o.cols, 10) || 3,
    asset: o.asset === undefined ? (o.icon === 'no' ? 'no' : 'yes') : o.asset,
    hasBorder: o.hasBorder === undefined ? true : (o.hasBorder === 'true' || o.hasBorder === true),
    /* Table Label's own properties, surfaced on the row */
    title: o.title,
    hasAsset: o.hasAsset === 'true' || o.hasAsset === true,
    showDesc: o.showDesc === 'yes' || o.showDesc === 'true' || o.showDesc === true
  };
}

function _tableBuildRow(opts) {
  var o = _tableNormalise(opts);
  var isHeader = o.role === 'header';

  var cls = 'eb-preview eb-preview-trow eb-preview-trow--' + (isHeader ? 'header' : 'content');
  if (o.state === 'disabled') cls += ' eb-preview-trow--disabled';
  if (!o.hasBorder) cls += ' eb-preview-trow--no-border';

  var labelText = o.title !== undefined && o.title !== '' ? o.title : (isHeader ? 'Header' : 'Row Title');
  var cellText  = isHeader ? 'Title' : 'Data';

  var s = '<div class="' + cls + '">';

  /* Table Label instance — Title, hasAsset and hasDescription live here. */
  s += '<div class="eb-preview-trow__label">';
  if (o.hasAsset) s += '<div class="eb-preview-trow__label-asset"></div>';
  s += '<span class="eb-preview-trow__label-text">' + _tableEscape(labelText) + '</span>';
  if (o.showDesc) {
    s += '<span class="eb-preview-trow__label-desc">Add description here. Add description here.</span>';
  }
  s += '</div>';

  /* Columns Slot — N Table Cell instances */
  s += '<div class="eb-preview-trow__cols">';
  for (var i = 0; i < o.cols; i++) {
    s += '<div class="eb-preview-trow__cell">';
    if (o.asset === 'yes') s += '<div class="eb-preview-trow__cell-asset"></div>';
    s += '<span class="eb-preview-trow__cell-text">' + _tableEscape(cellText) + '</span>';
    s += '</div>';
  }
  s += '</div>';

  s += '</div>';
  return s;
}

function updateTableDemo() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var el = document.getElementById('table-demo-preview');
  if (!el) return;

  _tableDemo.role      = get('table-demo-role', 'header');
  _tableDemo.state     = get('table-demo-state', 'default');
  _tableDemo.cols      = get('table-demo-cols', '3');
  _tableDemo.asset     = get('table-demo-asset', 'yes');
  _tableDemo.hasBorder = get('table-demo-hasborder', 'true');
  _tableDemo.title     = get('table-demo-title', '');
  _tableDemo.hasAsset  = get('table-demo-hasasset', 'false');
  _tableDemo.showDesc  = get('table-demo-showdesc', 'false');

  el.innerHTML = _tableBuildRow(_tableDemo);
}

/* ── Table Spec Cards ───────────────────────────────────────────── */
var _specCards = {
  header:  { role: 'header',  state: 'default', cols: '3', asset: 'yes' },
  content: { role: 'content', state: 'default', cols: '3', asset: 'yes' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var role = card.role === 'content' ? '.content' : '.header';
  var lines = ['EBTableRow('];
  lines.push('    role: ' + role + ',');
  lines.push('    label: "' + (card.role === 'content' ? 'Row Title' : 'Header') + '",');
  lines.push('    columns: columns');
  if (card.state === 'disabled') lines.push(') \n.disabled(true)');
  else lines.push(')');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var role = card.role === 'content' ? 'EBTableRowRole.Content' : 'EBTableRowRole.Header';
  var lines = ['EBTableRow('];
  lines.push('    role = ' + role + ',');
  lines.push('    label = "' + (card.role === 'content' ? 'Row Title' : 'Header') + '",');
  lines.push('    columns = columns' + (card.state === 'disabled' ? ',' : ''));
  if (card.state === 'disabled') lines.push('    enabled = false');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
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
    if (preview) preview.innerHTML = _tableBuildRow(card);
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

function _tableInitSpecCards() {
  var h = document.getElementById('table-preview-header');
  if (h) h.innerHTML = _tableBuildRow({ role: 'header', cols: '3' });
  var c = document.getElementById('table-preview-content');
  if (c) c.innerHTML = _tableBuildRow({ role: 'content', cols: '3' });
  ['header', 'content'].forEach(function (k) {
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
