/* Auto-extracted from assessment-src/components/tab-item.html.
 * Powers the live-preview dropdowns/toggles for the tab-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs tab-item
 */
/* ── Tab Item Component JS ─────────────────────────────────────────── */
var _tiDemo = { active: 'yes', orient: 'vertical', size: 'small', leadicon: 'no', counter: 'no', dot: 'no' };

function _tiBuildSvg(opts) {
  var active = opts.active === 'yes';
  var vertical = opts.orient === 'vertical';
  var large = opts.size === 'large';
  var leadIcon = opts.leadicon === 'yes';
  var counter = opts.counter === 'yes';
  var dot = opts.dot === 'yes';

  var labelColor = active ? '#005CE5' : '#6780A9';
  var borderColor = active ? '#005CE5' : '#E5EBF4';
  var fontSize = large ? 14 : 12;

  var w, h, s;
  if (vertical) {
    w = 72; h = 84;
    s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#FFFFFF"/>';
    // Icon
    s += '<circle cx="' + (w / 2) + '" cy="28" r="16" fill="#C2C6CF"/>';
    // Label
    s += '<text x="' + (w / 2) + '" y="' + (h - 22) + '" text-anchor="middle" fill="' + labelColor + '" font-size="' + fontSize + '" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Label</text>';
    // Border
    s += '<rect x="0" y="' + (h - 2) + '" width="' + w + '" height="2" fill="' + borderColor + '"/>';
    // Red dot
    if (dot) s += '<circle cx="' + (w - 8) + '" cy="8" r="3" fill="#D81E1E"/>';
    s += '</svg>';
    return s;
  }

  // Horizontal
  w = large ? 130 : 120;
  h = 48;
  s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#FFFFFF"/>';
  var x = 12;
  if (leadIcon) {
    s += '<circle cx="' + (x + 10) + '" cy="' + (h / 2) + '" r="10" fill="#B3B3B3"/>';
    x += 24;
  }
  s += '<text x="' + x + '" y="' + (h / 2 + 5) + '" fill="' + labelColor + '" font-size="' + fontSize + '" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Label</text>';
  x += 38;
  if (counter) {
    s += '<rect x="' + x + '" y="' + (h / 2 - 9) + '" width="22" height="18" rx="9" fill="#ECF1FA"/>';
    s += '<text x="' + (x + 11) + '" y="' + (h / 2 + 4) + '" text-anchor="middle" fill="#0F3390" font-size="10" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">0</text>';
  }
  s += '<rect x="0" y="' + (h - 2) + '" width="' + w + '" height="2" fill="' + borderColor + '"/>';
  if (dot) s += '<circle cx="' + (w - 8) + '" cy="8" r="3" fill="#D81E1E"/>';
  s += '</svg>';
  return s;
}

function updateTabItemDemo() {
  _tiDemo.active = document.getElementById('ti-demo-active').value;
  _tiDemo.orient = document.getElementById('ti-demo-orient').value;
  _tiDemo.size = document.getElementById('ti-demo-size').value;
  _tiDemo.leadicon = document.getElementById('ti-demo-leadicon').value;
  _tiDemo.counter = document.getElementById('ti-demo-counter').value;
  _tiDemo.dot = document.getElementById('ti-demo-dot').value;
  var el = document.getElementById('ti-demo-preview');
  if (el) el.innerHTML = _tiBuildSvg(_tiDemo);
}

/* Spec card: render active + inactive side by side */
function _tiSideBySide(baseOpts) {
  var act = Object.assign({}, baseOpts, { active: 'yes' });
  var inact = Object.assign({}, baseOpts, { active: 'no' });
  return '<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;">' +
    _tiBuildSvg(act) + _tiBuildSvg(inact) +
    '</div>';
}

function _tiInitSpecCards() {
  var cards = [
    ['ti-preview-vs', { orient: 'vertical', size: 'small' }],
    ['ti-preview-vl', { orient: 'vertical', size: 'large' }],
    ['ti-preview-hs', { orient: 'horizontal', size: 'small', leadicon: 'yes', counter: 'yes' }],
    ['ti-preview-hl', { orient: 'horizontal', size: 'large', leadicon: 'yes', counter: 'yes' }]
  ];
  cards.forEach(function(c) {
    var el = document.getElementById(c[0]);
    if (el) el.innerHTML = _tiSideBySide(c[1]);
  });
}

function _tiInit() {
  updateTabItemDemo();
  _tiInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tiInit);
} else {
  _tiInit();
}
