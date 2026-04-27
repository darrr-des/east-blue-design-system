/* Auto-extracted from assessment-src/components/dropdown.html.
 * Powers the live-preview dropdowns/toggles for the dropdown component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs dropdown
 */
/* ── Dropdown Component JS ──────────────────────────────────────── */
var _ddDemo = { variant: 'Text', type: 'Collapsed' };

var _ddColors = {
  Text:   { collapsed: { border: '#D7E0EF', bw: '1' }, expanded: { border: '#005CE5', bw: '2' } },
  Error:  { collapsed: { border: '#F4C7C9', bw: '2' }, expanded: { border: '#D61B2C', bw: '2' } },
  Amount: { collapsed: { border: '#D7E0EF', bw: '1' }, expanded: { border: '#005CE5', bw: '2' } },
  Mobile: { collapsed: { border: '#D7E0EF', bw: '1' }, expanded: { border: '#005CE5', bw: '2' } }
};

function _ddBuildSvg(variant, type) {
  var c = _ddColors[variant] || _ddColors.Text;
  var st = type === 'Expanded' ? c.expanded : c.collapsed;
  var isExpanded = type === 'Expanded';
  var isMobile = variant === 'Mobile';
  var isAmount = variant === 'Amount';
  var chevronColor = '#005CE5';
  var labelColor = '#0A2757';
  var placeholderColor = '#90A8D0';
  var pesoColor = '#183462';
  var itemColor = '#0A2757';
  var itemBorder = '#E5EBF4';
  var w = 366;
  var triggerY = 22;
  var s = '';

  if (isMobile) {
    /* Mobile variant — label row + select field + optional phone input */
    var totalH = isExpanded ? 468 : 118;
    s = '<svg width="' + w + '" height="' + totalH + '" viewBox="0 0 ' + w + ' ' + totalH + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
    /* label row */
    s += '<text x="2" y="12" font-family="HeyMeow Rnd, system-ui" font-size="14" font-weight="600" fill="' + labelColor + '">Label</text>';
    /* info icon */
    s += '<circle cx="52" cy="8" r="8" stroke="' + labelColor + '" stroke-width="1" fill="none" opacity=".4"/>';
    s += '<text x="49" y="12" font-family="system-ui" font-size="10" fill="' + labelColor + '" opacity=".4">i</text>';
    /* trigger field */
    s += '<rect x="0.5" y="22.5" width="' + (w - 1) + '" height="45" rx="5.5" fill="white" stroke="' + st.border + '" stroke-width="' + st.bw + '"/>';
    s += '<text x="12" y="48" font-family="HeyMeow Rnd, system-ui" font-size="14" fill="' + placeholderColor + '">Select option</text>';
    /* chevron */
    if (isExpanded) {
      s += '<path d="M339 50l5-5 5 5" stroke="' + chevronColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
      s += '<path d="M339 42l5 5 5-5" stroke="' + chevronColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    /* phone input */
    s += '<rect x="0.5" y="76.5" width="' + (w - 1) + '" height="37" rx="5.5" fill="white" stroke="#D7E0EF" stroke-width="1"/>';
    s += '<text x="12" y="98" font-family="HeyMeow Rnd, system-ui" font-size="14" font-weight="600" fill="' + labelColor + '">+63</text>';
    s += '<text x="52" y="98" font-family="HeyMeow Rnd, system-ui" font-size="14" fill="' + placeholderColor + '">XXX XXX XXXX</text>';

    if (isExpanded) {
      /* dropdown list */
      s += '<rect x="0" y="68" width="' + w + '" height="400" rx="6" fill="white" filter="url(#ddShadow)"/>';
      for (var i = 0; i < 8; i++) {
        var iy = 68 + (i * 50);
        s += '<text x="12" y="' + (iy + 30) + '" font-family="HeyMeow Rnd, system-ui" font-size="18" font-weight="600" fill="' + itemColor + '">Dropdown Item</text>';
        if (i < 7) s += '<line x1="0" y1="' + (iy + 50) + '" x2="' + w + '" y2="' + (iy + 50) + '" stroke="' + itemBorder + '" stroke-width="1"/>';
      }
    }
    s += '</svg>';
  } else {
    /* Text / Error / Amount variants */
    var totalH = isExpanded ? 468 : 68;
    s = '<svg width="' + w + '" height="' + totalH + '" viewBox="0 0 ' + w + ' ' + totalH + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
    /* shadow filter */
    s += '<defs><filter id="ddShadow" x="-4" y="64" width="' + (w + 8) + '" height="410" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#020E22" flood-opacity="0.16"/></filter></defs>';
    /* header label */
    s += '<text x="2" y="12" font-family="HeyMeow Rnd, system-ui" font-size="14" font-weight="600" fill="' + labelColor + '">Label</text>';
    /* trigger field */
    s += '<rect x="0.5" y="22.5" width="' + (w - 1) + '" height="45" rx="5.5" fill="white" stroke="' + st.border + '" stroke-width="' + st.bw + '"/>';
    /* peso sign for Amount */
    if (isAmount) {
      s += '<text x="12" y="48" font-family="HeyMeow Rnd, system-ui" font-size="15" font-weight="700" fill="' + pesoColor + '" dominant-baseline="central">&#8369;</text>';
      s += '<text x="30" y="48" font-family="HeyMeow Rnd, system-ui" font-size="14" fill="' + placeholderColor + '">Select option</text>';
    } else {
      s += '<text x="12" y="48" font-family="HeyMeow Rnd, system-ui" font-size="14" fill="' + placeholderColor + '">Select option</text>';
    }
    /* chevron */
    if (isExpanded) {
      s += '<path d="M339 50l5-5 5 5" stroke="' + chevronColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
      s += '<path d="M339 42l5 5 5-5" stroke="' + chevronColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    if (isExpanded) {
      /* dropdown list */
      s += '<rect x="0" y="68" width="' + w + '" height="400" rx="6" fill="white" filter="url(#ddShadow)"/>';
      for (var i = 0; i < 8; i++) {
        var iy = 68 + (i * 50);
        s += '<text x="12" y="' + (iy + 30) + '" font-family="HeyMeow Rnd, system-ui" font-size="18" font-weight="600" fill="' + itemColor + '">Dropdown Item</text>';
        if (i < 7) s += '<line x1="0" y1="' + (iy + 50) + '" x2="' + w + '" y2="' + (iy + 50) + '" stroke="' + itemBorder + '" stroke-width="1"/>';
      }
    }
    s += '</svg>';
  }
  return s;
}

function updateDropdownDemo() {
  var el = document.getElementById('dd-demo-preview');
  if (el) el.innerHTML = _ddBuildSvg(_ddDemo.variant, _ddDemo.type);
}

function updateDropdownSpecCard(variant, type) {
  var el = document.getElementById('dd-' + variant.toLowerCase() + '-preview');
  if (el) el.innerHTML = _ddBuildSvg(variant.charAt(0).toUpperCase() + variant.slice(1), type);
}

function _ddInitSpecCards() {
  updateDropdownSpecCard('text', 'Collapsed');
  updateDropdownSpecCard('error', 'Collapsed');
  updateDropdownSpecCard('amount', 'Collapsed');
  updateDropdownSpecCard('mobile', 'Collapsed');
}

function _ddInit() {
  updateDropdownDemo();
  _ddInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _ddInit);
} else {
  _ddInit();
}
