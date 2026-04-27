/* Auto-extracted from assessment-src/components/text-area.html.
 * Powers the live-preview dropdowns/toggles for the text-area component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs text-area
 */
/* ── Text Area Component JS ──────────────────────────────────────── */
var _taDemo = { state: 'default', filled: 'no', expandable: 'true' };

var _taColors = {
  default:  { border: '#D7E0EF', bg: '#FFFFFF', borderW: 1 },
  active:   { border: '#005CE5', bg: '#FFFFFF', borderW: 2 },
  error:    { border: '#D61B2C', bg: '#FFFFFF', borderW: 2 },
  disabled: { border: 'none',    bg: '#EEF2F9', borderW: 0 }
};
var _taTextColors = {
  default:  { filled: '#0A2757', empty: '#C2CFE5' },
  active:   { filled: '#0A2757', empty: '#C2CFE5' },
  error:    { filled: '#0A2757', empty: '#C2CFE5' },
  disabled: { filled: '#C2CFE5', empty: '#C2CFE5' }
};

function _taBuildSvg(state, filled, expandable) {
  var c = _taColors[state] || _taColors.default;
  var tc = _taTextColors[state] || _taTextColors.default;
  var filledYes = (filled === 'yes');
  var h = filledYes ? 62 : 46;
  var textColor = filledYes ? tc.filled : tc.empty;
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="' + c.borderW + '"';
  var s = '<svg width="328" height="' + h + '" viewBox="0 0 328 ' + h + '" fill="none">';
  s += '<rect x="0.5" y="0.5" width="327" height="' + (h - 1) + '" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  if (filledYes) {
    s += '<text x="12" y="24" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">This a text area. This a text area.</text>';
    s += '<text x="12" y="42" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">This a text area. This a text area.</text>';
  } else {
    s += '<text x="12" y="27" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">Placeholder</text>';
  }
  if (expandable === 'true') {
    var gy = h - 12;
    var gc = '#D7E0EF';
    s += '<path d="M' + (328 - 14) + ' ' + (gy + 10) + 'L' + (328 - 6) + ' ' + (gy + 2) + 'M' + (328 - 10) + ' ' + (gy + 10) + 'L' + (328 - 6) + ' ' + (gy + 6) + '" stroke="' + gc + '" stroke-width="1.2" stroke-linecap="round"/>';
  }
  s += '</svg>';
  return s;
}

function updateTextAreaDemo() {
  var el = document.getElementById('ta-demo-preview');
  if (el) el.innerHTML = _taBuildSvg(_taDemo.state, _taDemo.filled, _taDemo.expandable);
}

function updateTextAreaSpecCard(state, filled) {
  var el = document.getElementById('ta-' + state + '-preview');
  if (el) el.innerHTML = _taBuildSvg(state, filled, 'true');
}

function _taInitSpecCards() {
  updateTextAreaSpecCard('default', 'no');
  updateTextAreaSpecCard('active', 'no');
  updateTextAreaSpecCard('error', 'no');
  updateTextAreaSpecCard('disabled', 'no');
}

function _taInit() {
  updateTextAreaDemo();
  _taInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _taInit);
} else {
  _taInit();
}
