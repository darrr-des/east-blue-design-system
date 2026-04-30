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

/* ── Spec card state ──────────────────────────────────────────────── */
var _specCards = {
  text:   { variant: 'Text',   type: 'Collapsed' },
  error:  { variant: 'Error',  type: 'Collapsed' },
  amount: { variant: 'Amount', type: 'Collapsed' },
  mobile: { variant: 'Mobile', type: 'Collapsed' }
};
window._specCards = _specCards;

/* ── Code snippet builders ────────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var v = (card && card.variant) || 'Text';
  var t = (card && card.type) || 'Collapsed';
  var lines = [];
  lines.push('EBDropdown(selection: $selected, options: items)');
  if (v === 'Error')  lines.push('    .ebState(.error)');
  else if (v === 'Amount') lines.push('    .ebStyle(.amount)');
  else if (v === 'Mobile') lines.push('    .ebStyle(.mobile)');
  else lines.push('    .ebState(.default)');
  if (t === 'Expanded') lines.push('    .ebExpanded(true)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var v = (card && card.variant) || 'Text';
  var t = (card && card.type) || 'Collapsed';
  var lines = [];
  lines.push('EBDropdown(');
  lines.push('    selected = selected,');
  lines.push('    options = items,');
  lines.push('    onSelectionChange = { },');
  if (v === 'Error')  lines.push('    state = EBFieldState.Error,');
  else if (v === 'Amount') lines.push('    style = EBDropdownStyle.Amount,');
  else if (v === 'Mobile') lines.push('    style = EBDropdownStyle.Mobile,');
  else lines.push('    state = EBFieldState.Default,');
  if (t === 'Expanded') lines.push('    expanded = true,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

/* ── Spec card update ─────────────────────────────────────────────── */
function _ddRenderColors(variant, type) {
  var key = variant.toLowerCase();
  var isExpanded = type === 'Expanded';
  var entries;
  if (key === 'error') {
    entries = [
      ['Bg',     '#FFFFFF', 'selected-field/error/bg'],
      ['Border', isExpanded ? '#D61B2C' : '#F4C7C9', 'selected-field/error/border'],
      ['Value',  '#0A2757', 'selected-field/error/value'],
      ['Icon',   '#005CE5', 'selected-field/error/icon']
    ];
  } else if (key === 'amount') {
    entries = [
      ['Bg',          '#FFFFFF', 'selected-field/default/bg'],
      ['Border',      isExpanded ? '#005CE5' : '#D7E0EF', 'selected-field/default/border'],
      ['Value',       '#0A2757', 'selected-field/default/value'],
      ['Icon',        '#005CE5', 'selected-field/default/icon'],
      ['Peso sign',   '#183462', 'selected-field/default/icon-currency'],
      ['Placeholder', '#90A8D0', 'selected-field/default/placeholder']
    ];
  } else {
    entries = [
      ['Bg',          '#FFFFFF', 'selected-field/default/bg'],
      ['Border',      isExpanded ? '#005CE5' : '#D7E0EF', 'selected-field/default/border'],
      ['Value',       '#0A2757', 'selected-field/default/value'],
      ['Icon',        '#005CE5', 'selected-field/default/icon'],
      ['Placeholder', '#90A8D0', 'selected-field/default/placeholder']
    ];
  }
  var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
  entries.forEach(function (r) {
    var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
    h += '<div class="spec-prop has-token"><span class="spec-prop-key">' + r[0] + '</span>' +
         '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span>' +
         '<span class="spec-prop-hex">' + r[1] + '</span></span>' +
         '<span class="spec-token-name">' + r[2] + '</span></div>';
  });
  h += '</div>';
  return h;
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview */
  var el = document.getElementById('dd-' + cardStyle + '-preview');
  if (el) el.innerHTML = _ddBuildSvg(card.variant, card.type);

  /* Update properties text */
  var spVariant = document.querySelector('[data-sp="' + cardStyle + '-variant"]');
  var spType    = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spVariant) spVariant.textContent = card.variant;
  if (spType)    spType.textContent    = card.type;

  /* Update colors section */
  var colorsEl = document.getElementById('spec-' + cardStyle + '-colors');
  if (colorsEl) colorsEl.innerHTML = _ddRenderColors(card.variant, card.type);

  /* Update DEV code */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function _ddInitSpecCards() {
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'variant', _specCards[k].variant);
  });
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
document.addEventListener('astro:page-load', _ddInit);
