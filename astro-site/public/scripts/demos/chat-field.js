/* Auto-extracted from assessment-src/components/chat-field.html.
 * Powers the live-preview dropdowns/toggles for the chat-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs chat-field
 */
/* ── Chat Field Component JS ──────────────────────────────────────── */
var _cfDemo = { active: 'no' };

function _cfBuildSvg(active) {
  var isActive = (active === 'yes');
  var fieldBorder = isActive ? '#005CE5' : '#D7E0EF';
  var fieldBorderW = isActive ? 2 : 1;
  var textColor = isActive ? '#0A2757' : '#90A8D0';
  var iconColor = '#005CE5';

  // Container: 360×88, white bg, paddings 12/16/24/12 (top/right/bottom/left)
  // Field width = 360 - 12 - 32 - 8 - 12 - 32 - 16 = 248
  // Field height = fills vertical between padding = 88 - 12 - 24 = 52
  var s = '<svg width="360" height="88" viewBox="0 0 360 88" fill="none">';
  s += '<rect width="360" height="88" fill="#FFFFFF"/>';

  // Leading plus icon at x=12, y=(88-24)/2... center it in container vertical content band (12..64 → 38)
  // icon frame 32×32 center at x=12+16=28, y=12+16=28 → content area from y=12 to y=64
  // actual glyph inset 18.75% → draw plus from 18 to 38 in frame 12..44
  var lx = 12, ly = 28; // frame top-left
  s += '<rect x="' + lx + '" y="' + ly + '" width="32" height="32" fill="none"/>';
  // plus glyph centered in 32×32
  s += '<path d="M' + (lx + 16) + ' ' + (ly + 8) + 'v16M' + (lx + 8) + ' ' + (ly + 16) + 'h16" stroke="' + iconColor + '" stroke-width="2" stroke-linecap="round"/>';

  // Field: x = 12 + 32 + 8 = 52, y = 12+4 = 16 (approximate vertical centering within 12..64 band), width = 248, height = 52
  var fx = 52, fy = 18, fw = 248, fh = 52;
  s += '<rect x="' + (fx + 0.5) + '" y="' + (fy + 0.5) + '" width="' + (fw - 1) + '" height="' + (fh - 1) + '" rx="5.5" fill="#FFFFFF" stroke="' + fieldBorder + '" stroke-width="' + fieldBorderW + '"/>';
  s += '<text x="' + (fx + 12) + '" y="' + (fy + 32) + '" font-family="Proxima Soft, system-ui" font-size="16" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">Say hi!</text>';

  // Trailing send icon at x = fx + fw + 12 = 312, y = 28 (same as leading)
  var tx = 312, ty = 28;
  s += '<rect x="' + tx + '" y="' + ty + '" width="32" height="32" fill="none"/>';
  // paper-plane glyph roughly inset [18.75%, 18.75%, 12.5%, 10.94%] → draw a simplified plane
  s += '<path d="M' + (tx + 7) + ' ' + (ty + 16) + 'L' + (tx + 27) + ' ' + (ty + 7) + 'L' + (tx + 20) + ' ' + (ty + 27) + 'L' + (tx + 17) + ' ' + (ty + 18) + 'Z" stroke="' + iconColor + '" stroke-width="1.6" stroke-linejoin="round" fill="none"/>';
  s += '<path d="M' + (tx + 7) + ' ' + (ty + 16) + 'L' + (tx + 17) + ' ' + (ty + 18) + '" stroke="' + iconColor + '" stroke-width="1.6" stroke-linecap="round"/>';

  s += '</svg>';
  return s;
}

function updateChatFieldDemo() {
  var el = document.getElementById('cf-demo-preview');
  if (el) el.innerHTML = _cfBuildSvg(_cfDemo.active);
}

function _cfInitSpecCards() {
  var a = document.getElementById('cf-default-preview');
  if (a) a.innerHTML = _cfBuildSvg('no');
  var b = document.getElementById('cf-active-preview');
  if (b) b.innerHTML = _cfBuildSvg('yes');
}

function _cfInit() {
  updateChatFieldDemo();
  _cfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _cfInit);
} else {
  _cfInit();
}
