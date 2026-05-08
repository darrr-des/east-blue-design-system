/* Auto-extracted from assessment-src/components/dropdown-item-group.html.
 * Powers the live-preview dropdowns/toggles for the dropdown-item-group component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs dropdown-item-group
 */
/* ── Dropdown Item Group Component JS ──────────────────────────────── */
function _digBuildSvg() {
  var w = 366;
  var rowH = 50;
  var rows = 8;
  var totalH = rowH * rows;
  var bg = '#FFFFFF';
  var divider = '#E5EBF4';
  var labelColor = '#0A2757';
  /* Card wrapper with subtle CSS box-shadow (matches date-picker-group pattern). */
  var wrap = '<div style="display:inline-block;border-radius:6px;box-shadow:0 6px 12px -8px rgba(2,14,34,.16);background:#FFFFFF;">';
  var s = '<svg width="' + w + '" height="' + totalH + '" viewBox="0 0 ' + w + ' ' + totalH + '" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;border-radius:6px;">';
  s += '<rect x="0.5" y="0.5" width="' + (w - 1) + '" height="' + (totalH - 1) + '" rx="5.5" fill="' + bg + '" stroke="' + divider + '" stroke-width="1"/>';
  /* rows */
  for (var i = 0; i < rows; i++) {
    var y = i * rowH;
    s += '<text x="14" y="' + (y + 30) + '" font-family="\'Proxima Soft\', system-ui" font-size="18" font-weight="600" fill="' + labelColor + '">Dropdown Item</text>';
    /* divider between rows (skip below last row) */
    if (i < rows - 1) {
      s += '<line x1="0" y1="' + (y + rowH) + '" x2="' + w + '" y2="' + (y + rowH) + '" stroke="' + divider + '" stroke-width="1"/>';
    }
  }
  s += '</svg>';
  return wrap + s + '</div>';
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
