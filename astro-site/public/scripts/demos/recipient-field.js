/* Auto-extracted from assessment-src/components/recipient-field.html.
 * Powers the live-preview dropdowns/toggles for the recipient-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs recipient-field
 */
/* ── Recipient Field Component JS ──────────────────────────────────── */
var _rfDemo = { state: 'Default', filled: 'false' };

var _rfColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _rfLabelColors = {
  Default:  '#0A2757',
  Active:   '#0A2757',
  Error:    '#0A2757',
  Disabled: '#90A8D0'
};
var _rfTextColors = {
  Default:  { filled: '#0A2757', empty: '#90A8D0' },
  Active:   { filled: '#0A2757', empty: '#90A8D0' },
  Error:    { filled: '#0A2757', empty: '#90A8D0' },
  Disabled: { filled: '#90A8D0', empty: '#C2CFE5' }
};

function _rfBuildSvg(state, filled) {
  var c = _rfColors[state] || _rfColors.Default;
  var lc = _rfLabelColors[state] || _rfLabelColors.Default;
  var tc = _rfTextColors[state] || _rfTextColors.Default;
  var textColor = (filled === 'true') ? tc.filled : tc.empty;
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var textVal = (filled === 'true') ? '0917 123 4567' : 'Enter number or name';
  var s = '<svg width="366" height="56" viewBox="0 0 366 56" fill="none">';
  s += '<rect x="0.5" y="0.5" width="365" height="55" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  /* label (top line) */
  s += '<text x="12" y="22" font-family="HeyMeow Rnd, system-ui" font-size="12" font-weight="600" fill="' + lc + '" letter-spacing="0.5">Mobile Number</text>';
  /* value/placeholder (bottom line) */
  s += '<text x="12" y="40" font-family="HeyMeow Rnd, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">' + textVal + '</text>';
  /* trailing icon placeholders */
  s += '<rect x="298" y="12" width="32" height="32" rx="16" fill="#C2C6CF" opacity=".35"/>';
  s += '<rect x="332" y="12" width="32" height="32" rx="16" fill="#C2C6CF" opacity=".35"/>';
  s += '</svg>';
  return s;
}

function updateRecipientFieldDemo() {
  var el = document.getElementById('rf-demo-preview');
  if (el) el.innerHTML = _rfBuildSvg(_rfDemo.state, _rfDemo.filled);
}

function updateRecipientFieldSpecCard(state, filled) {
  var el = document.getElementById('rf-' + state.toLowerCase() + '-preview');
  if (el) el.innerHTML = _rfBuildSvg(state.charAt(0).toUpperCase() + state.slice(1), filled);
}

function _rfInitSpecCards() {
  updateRecipientFieldSpecCard('default', 'false');
  updateRecipientFieldSpecCard('active', 'false');
  updateRecipientFieldSpecCard('error', 'false');
  updateRecipientFieldSpecCard('disabled', 'false');
}

function _rfInit() {
  updateRecipientFieldDemo();
  _rfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _rfInit);
} else {
  _rfInit();
}
