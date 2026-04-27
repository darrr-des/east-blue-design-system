/* Auto-extracted from assessment-src/components/dropdown-item-group.html.
 * Powers the live-preview dropdowns/toggles for the dropdown-item-group component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs dropdown-item-group
 */
/* ── Dropdown Item Group Component JS ──────────────────────────────── */
function _digBuildSvg() {
  var w = 366;
  var rowH = 50;
  var rows = 8;
  var totalH = rowH * rows + 8; /* padding for shadow */
  var shadowOffsetY = 6;
  var bg = '#FFFFFF';
  var divider = '#E5EBF4';
  var labelColor = '#0A2757';
  var s = '<svg width="' + w + '" height="' + totalH + '" viewBox="0 0 ' + w + ' ' + totalH + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<defs><filter id="digShadow" x="-8" y="-4" width="' + (w + 16) + '" height="' + (totalH + 16) + '" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="' + shadowOffsetY + '" stdDeviation="6" flood-color="#020E22" flood-opacity="0.16"/></filter></defs>';
  /* card */
  s += '<rect x="2" y="2" width="' + (w - 4) + '" height="' + (rowH * rows) + '" rx="6" fill="' + bg + '" filter="url(#digShadow)"/>';
  /* rows */
  for (var i = 0; i < rows; i++) {
    var y = 2 + (i * rowH);
    s += '<text x="14" y="' + (y + 30) + '" font-family="Proxima Soft, system-ui" font-size="18" font-weight="600" fill="' + labelColor + '">Dropdown Item</text>';
    /* divider below every row (mirrors Figma — includes the problematic last-row border) */
    if (i < rows) {
      s += '<line x1="2" y1="' + (y + rowH) + '" x2="' + (w - 2) + '" y2="' + (y + rowH) + '" stroke="' + divider + '" stroke-width="1"/>';
    }
  }
  s += '</svg>';
  return s;
}

function updateDropdownItemGroupDemo() {
  var el = document.getElementById('dig-demo-preview');
  if (el) el.innerHTML = _digBuildSvg();
  var spec = document.getElementById('dig-default-preview');
  if (spec) spec.innerHTML = _digBuildSvg();
}

function _digInit() {
  updateDropdownItemGroupDemo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _digInit);
} else {
  _digInit();
}
