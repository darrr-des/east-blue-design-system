/* Auto-extracted from assessment-src/components/select-field.html.
 * Powers the live-preview dropdowns/toggles for the select-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs select-field
 */
/* ── Select Field Component JS ──────────────────────────────────────── */
var _sfDemo = { state: 'Default', filled: 'false' };

var _sfColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _sfTextColors = {
  Default:  { filled: '#0A2757', empty: '#90A8D0' },
  Active:   { filled: '#0A2757', empty: '#90A8D0' },
  Error:    { filled: '#0A2757', empty: '#90A8D0' },
  Disabled: { filled: '#90A8D0', empty: '#C2CFE5' }
};
var _sfPesoColors = {
  Default: '#183462', Active: '#183462', Error: '#183462', Disabled: '#7E96BE'
};

function _sfBuildSvg(state, filled) {
  var c = _sfColors[state] || _sfColors.Default;
  var tc = _sfTextColors[state] || _sfTextColors.Default;
  var pc = _sfPesoColors[state] || _sfPesoColors.Default;
  var textColor = (filled === 'true') ? tc.filled : tc.empty;
  var labelColor = '#0A2757';
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var flagOpacity = state === 'Disabled' ? '0.5' : '1';
  var chevronColor = state === 'Disabled' ? '#7E96BE' : '#183462';
  var s = '<svg width="366" height="46" viewBox="0 0 366 46" fill="none" xmlns="http://www.w3.org/2000/svg">';
  /* container */
  s += '<rect x="0.5" y="0.5" width="365" height="45" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  /* peso sign — vertically centered in 46px container */
  s += '<text x="12" y="23" font-family="HeyMeow Rnd, system-ui" font-size="15" font-weight="700" fill="' + pc + '" dominant-baseline="central">&#8369;</text>';
  /* label */
  s += '<text x="36" y="20" font-family="HeyMeow Rnd, system-ui" font-size="16" font-weight="600" fill="' + labelColor + '">#label</text>';
  /* value */
  s += '<text x="36" y="36" font-family="HeyMeow Rnd, system-ui" font-size="14" fill="' + textColor + '">' + (filled === 'true' ? '1,000.00' : '#value') + '</text>';
  /* flag container */
  s += '<rect x="298" y="15" width="25" height="16" rx="2" fill="#0038A8" opacity="' + flagOpacity + '"/>';
  s += '<rect x="298" y="20.3" width="25" height="5.4" fill="#CE1126" opacity="' + flagOpacity + '"/>';
  s += '<rect x="298" y="25.7" width="25" height="5.3" rx="0 0 2 2" fill="#FCD116" opacity="' + flagOpacity + '"/>';
  /* chevron down */
  s += '<path d="M342 20l5 5 5-5" stroke="' + chevronColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  s += '</svg>';
  return s;
}

function updateSelectFieldDemo() {
  var el = document.getElementById('sf-demo-preview');
  if (el) el.innerHTML = _sfBuildSvg(_sfDemo.state, _sfDemo.filled);
}

function updateSelectFieldSpecCard(state, filled) {
  var el = document.getElementById('sf-' + state.toLowerCase() + '-preview');
  if (el) el.innerHTML = _sfBuildSvg(state.charAt(0).toUpperCase() + state.slice(1), filled);
}

function _sfInitSpecCards() {
  updateSelectFieldSpecCard('default', 'false');
  updateSelectFieldSpecCard('active', 'false');
  updateSelectFieldSpecCard('error', 'false');
  updateSelectFieldSpecCard('disabled', 'false');
}

function _sfInit() {
  updateSelectFieldDemo();
  _sfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _sfInit);
} else {
  _sfInit();
}
