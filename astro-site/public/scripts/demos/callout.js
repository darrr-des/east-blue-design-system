/* Auto-extracted from assessment-src/components/callout.html.
 * Powers the live-preview dropdowns/toggles for the callout component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs callout
 */
/* ── Callout Component JS ──────────────────────────────────── */
var _calDemo = { label: 'yes', labelSize: 'default', description: 'yes', type: 'default' };

var _calColors = {
  'default':     { bg: '#F6F9FD', border: '#E5EBF4', label: '#445C85', description: '#6780A9' },
  'information': { bg: '#E5F1FF', border: '#D2E5FF', label: '#072592', description: '#6780A9' }
};

function _calBuildSvg(label, labelSize, description, type) {
  var c = _calColors[type] || _calColors['default'];
  var showLabel = (label === 'yes') && (labelSize === 'small' || labelSize === 'default');
  var showDesc  = (description === 'yes');
  var labelFontSize = (labelSize === 'small') ? 12 : 16;
  var labelLineHeight = (labelSize === 'small') ? 12 : 16;
  var descFontSize = 14;
  var descLineHeight = 20;
  var descLineCount = 4;
  var padH = 12;
  var padV = 12;
  var gap = 2;
  var width = 336;
  var innerW = width - (padH * 2);
  var contentH = 0;
  if (showLabel) contentH += labelLineHeight;
  if (showLabel && showDesc) contentH += gap;
  if (showDesc) contentH += descLineHeight * descLineCount;
  if (!showLabel && !showDesc) contentH = labelLineHeight;
  var height = contentH + (padV * 2);
  var s = '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0.5" y="0.5" width="' + (width - 1) + '" height="' + (height - 1) + '" rx="5.5" fill="' + c.bg + '" stroke="' + c.border + '"/>';
  var y = padV + labelLineHeight * 0.75;
  if (showLabel) {
    var tracking = (labelSize === 'small') ? 0.5 : 0.25;
    s += '<text x="' + padH + '" y="' + y + '" font-family="Proxima Soft, Proxima Nova, system-ui, sans-serif" font-size="' + labelFontSize + '" font-weight="700" fill="' + c.label + '" letter-spacing="' + tracking + '">Add title here</text>';
    y += (labelLineHeight - labelLineHeight * 0.75) + gap;
  }
  if (showDesc) {
    if (showLabel) {
      y += descLineHeight * 0.75;
    } else {
      y = padV + descLineHeight * 0.75;
    }
    var sentences = [
      'This is the first sentence. This is the second sentence. This is the third',
      'sentence. This is the fourth sentence. This is the fifth sentence.'
    ];
    var lines = [
      'This is the first sentence. This is the second sentence. This is the third',
      'sentence. This is the fourth sentence. This is the fifth',
      'sentence.'
    ];
    for (var i = 0; i < lines.length; i++) {
      s += '<text x="' + padH + '" y="' + y + '" font-family="BarkAda, system-ui, sans-serif" font-size="' + descFontSize + '" font-weight="600" fill="' + c.description + '">' + lines[i] + '</text>';
      y += descLineHeight;
    }
  }
  s += '</svg>';
  return s;
}

function updateCalloutDemo() {
  var el = document.getElementById('cal-demo-preview');
  if (el) el.innerHTML = _calBuildSvg(_calDemo.label, _calDemo.labelSize, _calDemo.description, _calDemo.type);
}

function _calInitSpecCards() {
  var cards = [
    { id: 'cal-default-both-preview',  label: 'yes', labelSize: 'default', description: 'yes', type: 'default' },
    { id: 'cal-info-both-preview',     label: 'yes', labelSize: 'default', description: 'yes', type: 'information' },
    { id: 'cal-default-small-preview', label: 'yes', labelSize: 'small',   description: 'yes', type: 'default' },
    { id: 'cal-default-desc-preview',  label: 'no',  labelSize: 'no',      description: 'yes', type: 'default' },
    { id: 'cal-default-label-preview', label: 'yes', labelSize: 'default', description: 'no',  type: 'default' }
  ];
  for (var i = 0; i < cards.length; i++) {
    var el = document.getElementById(cards[i].id);
    if (el) el.innerHTML = _calBuildSvg(cards[i].label, cards[i].labelSize, cards[i].description, cards[i].type);
  }
}

function _calInit() {
  updateCalloutDemo();
  _calInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _calInit);
} else {
  _calInit();
}
