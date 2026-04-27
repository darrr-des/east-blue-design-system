/* Auto-extracted from assessment-src/components/input-field.html.
 * Powers the live-preview dropdowns/toggles for the input-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs input-field
 */
/* ── Input Field Component JS ──────────────────────────────────────── */
var _infDemo = { state: 'Default', filled: 'false' };

var _infColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _infTextColors = {
  Default:  { filled: '#0A2757', empty: '#90A8D0' },
  Active:   { filled: '#0A2757', empty: '#90A8D0' },
  Error:    { filled: '#0A2757', empty: '#90A8D0' },
  Disabled: { filled: '#90A8D0', empty: '#C2CFE5' }
};

function _infBuildSvg(state, filled) {
  var c = _infColors[state] || _infColors.Default;
  var tc = _infTextColors[state] || _infTextColors.Default;
  var textColor = (filled === 'true') ? tc.filled : tc.empty;
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var s = '<svg width="366" height="46" viewBox="0 0 366 46" fill="none">';
  s += '<rect x="0.5" y="0.5" width="365" height="45" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  s += '<text x="12" y="27" font-family="HeyMeow Rnd, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">' + (filled === 'true' ? 'Placeholder' : 'Placeholder') + '</text>';
  s += '</svg>';
  return s;
}

function updateInputFieldDemo() {
  var el = document.getElementById('inf-demo-preview');
  if (el) el.innerHTML = _infBuildSvg(_infDemo.state, _infDemo.filled);
}

function updateInputFieldSpecCard(state, filled) {
  var el = document.getElementById('inf-' + state.toLowerCase() + '-preview');
  if (el) el.innerHTML = _infBuildSvg(state.charAt(0).toUpperCase() + state.slice(1), filled);
}

function _infInitSpecCards() {
  updateInputFieldSpecCard('default', 'false');
  updateInputFieldSpecCard('active', 'false');
  updateInputFieldSpecCard('error', 'false');
  updateInputFieldSpecCard('disabled', 'false');
}

function _infInit() {
  updateInputFieldDemo();
  _infInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _infInit);
} else {
  _infInit();
}
