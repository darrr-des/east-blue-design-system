/* Auto-extracted from assessment-src/components/labeled-field.html.
 * Powers the live-preview dropdowns/toggles for the labeled-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs labeled-field
 */
/* ── Labeled Field Component JS ──────────────────────────────────────── */
var _lfDemo = { state: 'Default', filled: 'false' };

var _lfColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _lfTextColors = {
  Default:  { label: '#0A2757', filledVal: '#0A2757', emptyVal: '#90A8D0' },
  Active:   { label: '#0A2757', filledVal: '#0A2757', emptyVal: '#90A8D0' },
  Error:    { label: '#0A2757', filledVal: '#0A2757', emptyVal: '#90A8D0' },
  Disabled: { label: '#90A8D0', filledVal: '#C2CFE5', emptyVal: '#C2CFE5' }
};

function _lfBuildSvg(state, filled) {
  var c = _lfColors[state] || _lfColors.Default;
  var tc = _lfTextColors[state] || _lfTextColors.Default;
  var labelColor = tc.label;
  var valueColor = (filled === 'true') ? tc.filledVal : tc.emptyVal;
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var iconFill = (state === 'Disabled') ? '#C2CFE5' : '#90A8D0';
  var btnBg = (state === 'Disabled') ? '#EEF2F9' : '#005CE5';
  var btnText = (state === 'Disabled') ? '#C2CFE5' : '#FFFFFF';
  var s = '<svg width="366" height="46" viewBox="0 0 366 46" fill="none">';
  /* container */
  s += '<rect x="0.5" y="0.5" width="365" height="45" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  /* leading icon placeholder */
  s += '<rect x="12" y="11" width="24" height="24" rx="4" fill="' + iconFill + '" opacity="0.2"/>';
  s += '<circle cx="24" cy="23" r="4" fill="' + iconFill + '" opacity="0.5"/>';
  /* label text */
  s += '<text x="44" y="19" font-family="HeyMeow Rnd, system-ui" font-size="11" font-weight="600" fill="' + labelColor + '" letter-spacing="0.25" opacity="0.7">Label</text>';
  /* value text */
  s += '<text x="44" y="33" font-family="HeyMeow Rnd, system-ui" font-size="14" font-weight="600" fill="' + valueColor + '" letter-spacing="0.25">' + (filled === 'Yes' ? 'Value' : 'Placeholder') + '</text>';
  /* action button */
  s += '<rect x="260" y="11" width="60" height="24" rx="12" fill="' + btnBg + '"/>';
  s += '<text x="290" y="27" font-family="HeyMeow Rnd, system-ui" font-size="11" font-weight="600" fill="' + btnText + '" text-anchor="middle">Action</text>';
  /* trailing icon placeholder */
  s += '<rect x="330" y="11" width="24" height="24" rx="4" fill="' + iconFill + '" opacity="0.2"/>';
  s += '<circle cx="342" cy="23" r="4" fill="' + iconFill + '" opacity="0.5"/>';
  s += '</svg>';
  return s;
}

function updateLabeledFieldDemo() {
  var el = document.getElementById('lf-demo-preview');
  if (el) el.innerHTML = _lfBuildSvg(_lfDemo.state, _lfDemo.filled);
}

function updateLabeledFieldSpecCard(state, filled) {
  var el = document.getElementById('lf-' + state.toLowerCase() + '-preview');
  if (el) el.innerHTML = _lfBuildSvg(state.charAt(0).toUpperCase() + state.slice(1), filled);
}

function _lfInitSpecCards() {
  updateLabeledFieldSpecCard('default', 'false');
  updateLabeledFieldSpecCard('active', 'false');
  updateLabeledFieldSpecCard('error', 'false');
  updateLabeledFieldSpecCard('disabled', 'false');
}

function _lfInit() {
  updateLabeledFieldDemo();
  _lfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _lfInit);
} else {
  _lfInit();
}
