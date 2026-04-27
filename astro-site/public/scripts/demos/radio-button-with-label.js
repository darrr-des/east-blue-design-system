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
  var selected = opts.selected === 'true';
  var error = opts.error === 'true';

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
  var s = '<div style="display:inline-flex;gap:12px;align-items:flex-start;padding:4px 0;">';
  s += '<div style="padding-top:' + (isLarge ? 2 : 4) + 'px;">' + _rblBuildRadio(opts) + '</div>';
  s += '<div style="color:' + labelColor + ';font-family:\'HeyMeow Rnd\', system-ui;font-weight:600;font-size:' + fontSize + 'px;line-height:' + lineHeight + 'px;letter-spacing:0.25px;">Label</div>';
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

function _rblInitSpecCards() {
  var cards = [
    ['rbl-preview-default', { size: 'default', error: 'false', selected: 'false' }],
    ['rbl-preview-large', { size: 'large', error: 'false', selected: 'false' }],
    ['rbl-preview-default-error', { size: 'default', error: 'true', selected: 'false' }],
    ['rbl-preview-large-error', { size: 'large', error: 'true', selected: 'false' }]
  ];
  cards.forEach(function(c) {
    var el = document.getElementById(c[0]);
    if (el) el.innerHTML = _rblBuildRow(c[1]);
  });
}

function _rblInit() {
  updateRBLDemo();
  _rblInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _rblInit);
else _rblInit();
