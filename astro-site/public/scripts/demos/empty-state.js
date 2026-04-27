/* Auto-extracted from assessment-src/components/empty-state.html.
 * Powers the live-preview dropdowns/toggles for the empty-state component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs empty-state
 */
/* ── Empty State JS ───────────────────────────────────────────────── */
var _esDemo = { color: 'white', icon: 'true', asset: 'true', button: 'true' };

function _esBuildSvg(opts) {
  var isGrey = opts.color === 'grey-blue';
  var bg = isGrey ? '#F6F9FD' : '#FFFFFF';
  var placeholder = isGrey ? '#D7E0EF' : '#EEF2F9';
  var w = 300;
  var yCursor = 16;
  var blocks = [];

  // Top header (always rendered in this demo for clarity)
  blocks.push({ type: 'topHeader', h: 50 });
  if (opts.icon === 'true') blocks.push({ type: 'icon', h: 80 });
  if (opts.asset === 'true') blocks.push({ type: 'asset', h: 180 });
  blocks.push({ type: 'content', h: 70 });
  if (opts.button === 'true') blocks.push({ type: 'button', h: 56 });

  var totalH = blocks.reduce(function(sum, b) { return sum + b.h; }, 0) + 32;
  var s = '<svg width="' + w + '" height="' + totalH + '" viewBox="0 0 ' + w + ' ' + totalH + '" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + totalH + '" rx="4" fill="' + bg + '"/>';

  blocks.forEach(function(b) {
    if (b.type === 'topHeader') {
      s += '<text x="24" y="' + (yCursor + 18) + '" fill="#0A2757" font-size="14" font-weight="700" font-family="\'Proxima Soft\', system-ui">Header</text>';
      s += '<text x="24" y="' + (yCursor + 34) + '" fill="#6780A9" font-size="11" font-family="\'BarkAda\', system-ui">Description goes here</text>';
    } else if (b.type === 'icon') {
      s += '<circle cx="' + (w / 2) + '" cy="' + (yCursor + 32) + '" r="20" fill="#C2C6CF"/>';
    } else if (b.type === 'asset') {
      s += '<rect x="0" y="' + yCursor + '" width="' + w + '" height="170" fill="' + placeholder + '"/>';
    } else if (b.type === 'content') {
      s += '<text x="' + (w / 2) + '" y="' + (yCursor + 20) + '" text-anchor="middle" fill="#0A2757" font-size="16" font-weight="700" font-family="\'Proxima Soft\', system-ui">Header</text>';
      s += '<text x="' + (w / 2) + '" y="' + (yCursor + 40) + '" text-anchor="middle" fill="#6780A9" font-size="11" font-family="\'BarkAda\', system-ui">Description goes here</text>';
    } else if (b.type === 'button') {
      s += '<rect x="' + (w / 2 - 70) + '" y="' + (yCursor + 10) + '" width="140" height="34" rx="17" fill="#005CE5"/>';
      s += '<text x="' + (w / 2) + '" y="' + (yCursor + 32) + '" text-anchor="middle" fill="#FFF" font-size="13" font-weight="700" font-family="\'Proxima Soft\', system-ui">Label</text>';
    }
    yCursor += b.h;
  });

  s += '</svg>';
  return s;
}

function updateEmptyStateDemo() {
  _esDemo.color = document.getElementById('es-demo-color').value;
  _esDemo.icon = document.getElementById('es-demo-icon').value;
  _esDemo.asset = document.getElementById('es-demo-asset').value;
  _esDemo.button = document.getElementById('es-demo-button').value;
  var el = document.getElementById('es-demo-preview');
  if (el) el.innerHTML = _esBuildSvg(_esDemo);
}

function _esInitSpecCards() {
  ['white', 'grey-blue'].forEach(function(c) {
    var el = document.getElementById('es-preview-' + c);
    if (el) el.innerHTML = _esBuildSvg({ color: c, icon: 'true', asset: 'true', button: 'true' });
  });
}

function _esInit() {
  updateEmptyStateDemo();
  _esInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _esInit);
else _esInit();
