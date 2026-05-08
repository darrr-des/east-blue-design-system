/* Auto-extracted from assessment-src/components/radio-button-with-label.html.
 * Powers the live-preview dropdowns/toggles for the radio-button-with-label component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs radio-button-with-label
 */
/* ── Radio Button with Label JS ───────────────────────────────────── */
var _rblDemo = { size: 'default', error: 'false', selected: 'false' };

function _rblBuildRadio(opts) {
  var isLarge = opts.size === 'large';
  var box = isLarge ? 20 : 16;
  var cx = box / 2;
  var selected = opts.selected === 'true' || opts.selected === true;
  var error = opts.error === 'true' || opts.isError === 'true' || opts.isError === true || opts.error === true;

  var ringColor, fillColor;
  if (error && selected) { ringColor = '#D61B2C'; fillColor = '#D61B2C'; }
  else if (error) { ringColor = '#D61B2C'; fillColor = 'none'; }
  else if (selected) { ringColor = '#005CE5'; fillColor = '#005CE5'; }
  else { ringColor = '#D7E0EF'; fillColor = 'none'; }

  var s = '<svg width="' + box + '" height="' + box + '" viewBox="0 0 ' + box + ' ' + box + '" xmlns="http://www.w3.org/2000/svg">';
  s += '<circle cx="' + cx + '" cy="' + cx + '" r="' + (box / 2 - 1) + '" fill="' + fillColor + '" stroke="' + ringColor + '" stroke-width="2"/>';
  if (selected) s += '<circle cx="' + cx + '" cy="' + cx + '" r="' + (isLarge ? 3 : 2) + '" fill="#FFFFFF"/>';
  s += '</svg>';
  return s;
}

function _rblBuildRow(opts) {
  var isLarge = opts.size === 'large';
  var fontSize = isLarge ? 16 : 14;
  var lineHeight = isLarge ? 20 : 16;
  var labelColor = '#445C85';
  var s = '<div style="display:inline-flex;gap:12px;align-items:center;padding:4px 0;">';
  s += '<div style="display:flex;align-items:center;">' + _rblBuildRadio(opts) + '</div>';
  s += '<div style="color:' + labelColor + ';font-family:\'Proxima Soft\', system-ui;font-weight:600;font-size:' + fontSize + 'px;line-height:' + lineHeight + 'px;letter-spacing:0.25px;">Label</div>';
  s += '</div>';
  return s;
}

function updateRBLDemo() {
  _rblDemo.size = document.getElementById('rbl-demo-size').value;
  _rblDemo.error = document.getElementById('rbl-demo-error').value;
  _rblDemo.selected = document.getElementById('rbl-demo-selected').value;
  var el = document.getElementById('rbl-demo-preview');
  if (el) el.innerHTML = _rblBuildRow(_rblDemo);
}

/* ── Spec cards ─────────────────────────────────────────────────────── */
var _specCards = {
  'default':       { size: 'default', isError: 'false', selected: 'false' },
  'large':         { size: 'large',   isError: 'false', selected: 'false' },
  'default-error': { size: 'default', isError: 'true',  selected: 'false' },
  'large-error':   { size: 'large',   isError: 'true',  selected: 'false' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var size = card.size === 'large' ? '.large' : '.regular';
  var err = (card.isError === 'true' || card.isError === true) ? '.ebError(true)' : '.ebError(false)';
  var sel = (card.selected === 'true' || card.selected === true) ? 'true' : 'false';
  return 'EBRadioButtonWithLabel("Option label", selected: ' + sel + ')\n    .controlSize(' + size + ')\n    ' + err;
}
function buildComposeSnippet(type, card) {
  var size = card.size === 'large' ? 'EBRadioSize.Large' : 'EBRadioSize.Default';
  var err = (card.isError === 'true' || card.isError === true) ? 'true' : 'false';
  var sel = (card.selected === 'true' || card.selected === true) ? 'true' : 'false';
  return 'EBRadioButtonWithLabel(\n    label = "Option label",\n    selected = ' + sel + ',\n    onCheckedChange = { },\n    size = ' + size + ',\n    isError = ' + err + '\n)';
}
function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — replace inner content of `rbl-spec-${cardStyle}-preview` */
  var previewEl = document.getElementById('rbl-spec-' + cardStyle + '-preview');
  if (previewEl) {
    /* Map `isError` → `error` for renderer compatibility */
    var renderOpts = {
      size: card.size,
      error: card.isError,
      selected: card.selected
    };
    previewEl.innerHTML = _rblBuildRow(renderOpts);
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

function _rblInit() {
  updateRBLDemo();
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'size', _specCards[k].size);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _rblInit);
else _rblInit();

document.addEventListener('astro:page-load', _rblInit);
