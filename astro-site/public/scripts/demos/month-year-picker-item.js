/* Auto-extracted from assessment-src/components/month-year-picker-item.html.
 * Powers the live-preview dropdowns/toggles for the month-year-picker-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs month-year-picker-item
 */
/* ── Month and Year Picker - Item Component JS ─────────────────────── */
var _mypiDemo = { type: 'Default', label: 'March' };

function _mypiBuildCell(type, label) {
  /*
    Render a single 100×32 cell matching the Figma variant.
    - Default: white bg, primary label (#0A2757)
    - Today: 1px blue border, blue label
    - Selected: solid blue fill, white bold label
  */
  var bg = '#FFFFFF';
  var border = 'none';
  var color = '#0A2757';
  var fontWeight = '600';

  if (type === 'Today') {
    border = '1px solid #005CE5';
    color = '#005CE5';
  } else if (type === 'Selected') {
    bg = '#005CE5';
    color = '#FFFFFF';
    fontWeight = '700';
  }

  return ''
    + '<div style="display:inline-block;font-family:\'Proxima Soft\', system-ui, sans-serif;">'
    +   '<div style="box-sizing:border-box;width:100px;height:32px;background:' + bg + ';border:' + border + ';border-radius:8px;padding:10px 12px 8px;display:flex;align-items:center;justify-content:center;gap:4px;color:' + color + ';font-weight:' + fontWeight + ';font-size:14px;line-height:14px;letter-spacing:.25px;">'
    +     label
    +   '</div>'
    + '</div>';
}

function _mypiFramedCell(type, label) {
  /* Wrap the cell in a neutral backdrop so small cells are visible in the demo panel. */
  return ''
    + '<div style="display:flex;align-items:center;justify-content:center;padding:40px;background:#F4F6FA;border-radius:8px;min-height:120px;">'
    +   _mypiBuildCell(type, label)
    + '</div>';
}

function updateMonthYearPickerItemDemo() {
  var demo = document.getElementById('mypi-demo-preview');
  if (demo) demo.innerHTML = _mypiFramedCell(_mypiDemo.type, _mypiDemo.label);
}

/* ── Spec cards ─────────────────────────────────────────────────────── */
var _specCards = {
  'default':  { type: 'Default',  label: 'March' },
  'today':    { type: 'Today',    label: 'March' },
  'selected': { type: 'Selected', label: 'March' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var s = String(card.type || 'Default').toLowerCase();
  return 'EBMonthYearCell(value)\n    .ebState(.' + s + ')';
}
function buildComposeSnippet(type, card) {
  var s = String(card.type || 'Default');
  return 'EBMonthYearCell(\n    value = value,\n    state = EBCellState.' + s + '\n)';
}
function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview by replacing innerHTML of the framed wrapper */
  var previewEl = document.getElementById('mypi-spec-' + cardStyle + '-preview');
  if (previewEl) {
    previewEl.innerHTML = ''
      + '<div style="display:inline-block;font-family:\'Proxima Soft\', system-ui, sans-serif;">'
      + _mypiBuildCell(card.type, card.label).replace(/^<div[^>]*>|<\/div>$/g, '')
      + '</div>';
    /* Simpler: just rewrap the cell */
    var inner = _mypiBuildCell(card.type, card.label);
    previewEl.innerHTML = inner;
  }

  /* Update Properties text — data-sp="${cardStyle}-${prop}" */
  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) {
    var hex = spEl.querySelector('.spec-prop-hex');
    if (hex) hex.textContent = value;
    else spEl.textContent = value;
  }

  /* Update DEV code — locate via `[data-code-content="${cardStyle}"]`. */
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
window.updateSpecCard = updateSpecCard;

function _mypiInit() {
  updateMonthYearPickerItemDemo();
  /* Initialize each spec card so DEV-tab snippets are syntax-highlighted */
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _mypiInit);
} else {
  _mypiInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
document.addEventListener('astro:page-load', _mypiInit);
