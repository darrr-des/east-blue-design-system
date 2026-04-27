/* Auto-extracted from assessment-src/components/view-only-field.html.
 * Powers the live-preview dropdowns/toggles for the view-only-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs view-only-field
 */
/* ── View Only Field Component JS ─────────────────────────────────── */
var _vofDemo = { variant: 'Default', size: 'Default', checkmark: 'false', description: 'true' };

function _vofBuildSvg(variant, size, checkmark, description) {
  var w = 360;
  var isLarge = size === 'Large';
  var labelSize = isLarge ? 16 : 14;
  var valueSize = isLarge ? 22 : 16;
  var valueWeight = isLarge ? 700 : 600;
  var descSize = isLarge ? 12 : 10;
  var h = isLarge ? 71 : 57;
  if (description === 'true') h += (isLarge ? 22 : 18);

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* Label */
  var labelY = labelSize - 1;
  s += '<text x="0" y="' + labelY + '" font-family="HeyMeow Rnd, system-ui" font-size="' + labelSize + '" font-weight="600" fill="#6780A9">Label</text>';

  /* Value text */
  var valueY = labelY + 8 + valueSize;
  s += '<text x="0" y="' + valueY + '" font-family="HeyMeow Rnd, system-ui" font-size="' + valueSize + '" font-weight="' + valueWeight + '" fill="#0A2757">Text</text>';

  /* Checkmark */
  if (checkmark === 'true') {
    var textWidth = valueSize * 1.8;
    var checkX = textWidth + 8;
    var checkY = valueY - valueSize + 3;
    s += '<path d="M' + checkX + ' ' + (checkY + 6) + 'l3 3 6-7" stroke="#005CE5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
  }

  /* Trailing slot */
  if (variant === 'with Badge') {
    var badgeY = isLarge ? (labelY + 20) : (labelY + 12);
    s += '<rect x="' + (w - 60) + '" y="' + badgeY + '" width="54" height="16" rx="8" fill="#E5F1FF"/>';
    s += '<text x="' + (w - 33) + '" y="' + (badgeY + 11) + '" text-anchor="middle" font-family="HeyMeow Rnd, system-ui" font-size="11" font-weight="700" fill="#005CE5">Change</text>';
  } else if (variant === 'with Text Link') {
    var linkY = isLarge ? 12 : 10;
    s += '<text x="' + w + '" y="' + linkY + '" text-anchor="end" font-family="BarkAda, system-ui" font-size="12" font-weight="600" fill="#005CE5">What is this?</text>';
  } else if (variant === 'with Icon') {
    var iconX = w - 20;
    var iconY = isLarge ? 16 : 8;
    s += '<g transform="translate(' + iconX + ', ' + iconY + ')" stroke="#005CE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">';
    s += '<path d="M12 20h9"/>';
    s += '<path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>';
    s += '</g>';
  }

  /* Description subtext */
  if (description === 'true') {
    var descY = valueY + (isLarge ? 22 : 18);
    s += '<text x="0" y="' + descY + '" font-family="BarkAda, system-ui" font-size="' + descSize + '" font-weight="600" fill="#6780A9">Message content</text>';
  }

  s += '</svg>';
  return s;
}

function updateViewOnlyFieldDemo() {
  var el = document.getElementById('vof-demo-preview');
  if (el) el.innerHTML = _vofBuildSvg(_vofDemo.variant, _vofDemo.size, _vofDemo.checkmark, _vofDemo.description);
}

function _vofInitSpecCards() {
  var map = { 'default': 'Default', 'badge': 'with Badge', 'textlink': 'with Text Link', 'icon': 'with Icon' };
  Object.keys(map).forEach(function(key) {
    var el = document.getElementById('vof-preview-' + key);
    if (el) el.innerHTML = _vofBuildSvg(map[key], 'Default', 'false', 'true');
  });
}

function _vofInit() {
  updateViewOnlyFieldDemo();
  _vofInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _vofInit);
} else {
  _vofInit();
}
