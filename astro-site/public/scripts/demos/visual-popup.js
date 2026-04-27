/* Auto-extracted from assessment-src/components/visual-popup.html.
 * Powers the live-preview dropdowns/toggles for the visual-popup component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs visual-popup
 */
/* ── Visual Popup Component JS ────────────────────────────────────── */
var _vpDemo = { type: 'default' };

/* Image placeholder — soft gradient + mountain/sun icon (Material/Polaris style)
   x, y, w, h: bounds; r: corner radius; topOnly: round top corners only */
function _vpImagePlaceholder(x, y, w, h, r, topOnly) {
  var gid = 'vpph-' + Math.floor(Math.random() * 1e9);
  var path = topOnly
    ? 'M' + x + ' ' + (y + h) + ' L' + x + ' ' + (y + r) + ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + ' L' + (x + w - r) + ' ' + y + ' Q' + (x + w) + ' ' + y + ' ' + (x + w) + ' ' + (y + r) + ' L' + (x + w) + ' ' + (y + h) + ' Z'
    : null;
  var s = '';
  // Gradient
  s += '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#EAF2FE"/><stop offset="100%" stop-color="#C9DCF8"/></linearGradient></defs>';
  // Background
  if (topOnly) {
    s += '<path d="' + path + '" fill="url(#' + gid + ')"/>';
  } else {
    s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="url(#' + gid + ')"/>';
  }
  // Mountain + sun icon (centered)
  var cx = x + w / 2;
  var cy = y + h / 2;
  var iconScale = Math.min(w, h) * 0.18;
  var iconColor = '#6B8FC8';
  // Icon frame
  s += '<rect x="' + (cx - iconScale) + '" y="' + (cy - iconScale * 0.75) + '" width="' + (iconScale * 2) + '" height="' + (iconScale * 1.5) + '" rx="' + (iconScale * 0.18) + '" fill="none" stroke="' + iconColor + '" stroke-width="1.4" opacity=".75"/>';
  // Sun
  s += '<circle cx="' + (cx - iconScale * 0.35) + '" cy="' + (cy - iconScale * 0.25) + '" r="' + (iconScale * 0.22) + '" fill="' + iconColor + '" opacity=".75"/>';
  // Mountains (two triangles)
  var baseY = cy + iconScale * 0.6;
  s += '<path d="M' + (cx - iconScale * 0.85) + ' ' + baseY + ' L' + (cx - iconScale * 0.15) + ' ' + (baseY - iconScale * 0.7) + ' L' + (cx + iconScale * 0.25) + ' ' + (baseY - iconScale * 0.25) + ' L' + (cx + iconScale * 0.6) + ' ' + (baseY - iconScale * 0.6) + ' L' + (cx + iconScale * 0.85) + ' ' + baseY + ' Z" fill="' + iconColor + '" opacity=".75"/>';
  return s;
}

function _vpBuildSvg(type) {
  var w, h;
  if (type === '2cta') { w = 200; h = 270; }
  else if (type === 'version2') { w = 200; h = 250; }
  else { w = 200; h = 240; }

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  if (type === 'version2') {
    // Version 2: light-gray container only (white outer has zero padding so it's not visible)
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="6" fill="#F6F9FD"/>';
    // Preamble
    s += '<text x="20" y="26" fill="#90A8D0" font-size="6" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">PREAMBLE</text>';
    // Close icon
    s += '<g transform="translate(' + (w - 28) + ', 18) " stroke="#6780A9" stroke-width="1.4" stroke-linecap="round"><line x1="0" y1="0" x2="8" y2="8"/><line x1="8" y1="0" x2="0" y2="8"/></g>';
    // Title
    s += '<text x="20" y="42" fill="#0A2757" font-size="11" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Put the title here</text>';
    // Description
    s += '<text x="20" y="56" fill="#6780A9" font-size="7" font-family="\'BarkAda\', system-ui">Add description here.</text>';
    s += '<text x="20" y="66" fill="#6780A9" font-size="7" font-family="\'BarkAda\', system-ui">Add description here.</text>';
    // Hero image placeholder
    s += _vpImagePlaceholder(20, 78, w - 40, 100, 6);
    // CTA
    s += '<rect x="20" y="' + (h - 36) + '" width="' + (w - 40) + '" height="22" rx="11" fill="#005CE5"/>';
    s += '<text x="' + (w / 2) + '" y="' + (h - 21) + '" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Okay</text>';
  } else {
    // Default / 2 CTA: hero on top
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="4" fill="#FFFFFF" stroke="#E5EBF4" stroke-width="0.8"/>';
    // Hero placeholder (top corners rounded only)
    s += _vpImagePlaceholder(0, 0, w, 100, 4, true);
    // Title
    s += '<text x="' + (w / 2) + '" y="128" text-anchor="middle" fill="#0A2757" font-size="12" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Put the title here</text>';
    // Description
    s += '<text x="' + (w / 2) + '" y="146" text-anchor="middle" fill="#6780A9" font-size="8" font-family="\'BarkAda\', system-ui">Add description here.</text>';
    s += '<text x="' + (w / 2) + '" y="158" text-anchor="middle" fill="#6780A9" font-size="8" font-family="\'BarkAda\', system-ui">Add description here.</text>';
    // CTA(s)
    if (type === '2cta') {
      // Outline primary + text tertiary
      s += '<rect x="20" y="180" width="' + (w - 40) + '" height="24" rx="12" fill="#FFFFFF" stroke="#005CE5" stroke-width="2"/>';
      s += '<text x="' + (w / 2) + '" y="196" text-anchor="middle" fill="#005CE5" font-size="9" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Label</text>';
      s += '<text x="' + (w / 2) + '" y="232" text-anchor="middle" fill="#005CE5" font-size="9" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Label</text>';
    } else {
      // Single primary
      s += '<rect x="20" y="190" width="' + (w - 40) + '" height="26" rx="13" fill="#005CE5"/>';
      s += '<text x="' + (w / 2) + '" y="207" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Okay</text>';
    }
  }

  s += '</svg>';
  return s;
}

function updateVisualPopupDemo() {
  var t = document.getElementById('vp-demo-type').value;
  _vpDemo.type = t;
  var el = document.getElementById('vp-demo-preview');
  if (el) el.innerHTML = _vpBuildSvg(t);
}

function _vpInitSpecCards() {
  ['default', '2cta', 'version2'].forEach(function(t) {
    var el = document.getElementById('vp-preview-' + t);
    if (el) el.innerHTML = _vpBuildSvg(t);
  });
}

function _vpInit() {
  updateVisualPopupDemo();
  _vpInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _vpInit);
} else {
  _vpInit();
}
