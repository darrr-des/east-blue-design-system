/* Auto-extracted from assessment-src/components/checkbox.html.
 * Powers the live-preview dropdowns/toggles for the checkbox component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs checkbox
 */
/* ── Checkbox Component JS ───────────────────────────────────────────── */
/* SVG paths extracted from Figma export — pixel-accurate per variant    */

var _cbDemo = { sel: 'false', state: 'Default', size: 'medium' };

var _cbSpecCards = {
  unchecked: { size: 'medium', state: 'Default' },
  checked:   { size: 'medium', state: 'Default' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _cbSpecCards;
window._specCards = _specCards;

var _cbPxMap = { small: 16, medium: 20, large: 24 };
var _cbLabelMap = { small: 'Small', medium: 'Medium', large: 'Large' };
var _cbSwiftSize = { small: '.mini', medium: '.regular', large: '.large' };
var _cbComposeSize = { small: 'Small', medium: 'Medium', large: 'Large' };

/* Checkmark paths per size (from Figma) */
var _cbCheck = {
  16: { d: 'M5 8L7 10L11 6', sw: 2 },
  20: { d: 'M6 10L9 13L15 7', sw: 2.3 },
  24: { d: 'M6 12.5L9.5 16L17.5 8', sw: 2.5 }
};
/* Indeterminate dash paths per size */
var _cbDash = {
  16: { d: 'M4 8H12.5', sw: 2.3 },
  20: { d: 'M5 10H15', sw: 2.3 },
  24: { d: 'M6 12H18', sw: 2.5 }
};

/* Color config: state → { unchecked: {fill,stroke}, checked: {fill}, opacity } */
var _cbStateColors = {
  Default:  { unc: { fill: 'none', stroke: '#D7E0EF' }, chk: { fill: '#1972F9' }, ind: { fill: '#1972F9' } },
  Pressed:  { unc: { fill: '#EBF2FF', stroke: '#1972F9' }, chk: { fill: '#0F57C8' }, ind: { fill: '#0F57C8' } },
  Focused:  { unc: { fill: 'none', stroke: '#1972F9' }, chk: { fill: '#1972F9' }, ind: { fill: '#1972F9' } },
  Disabled: { unc: { fill: 'none', stroke: '#D7E0EF' }, chk: { fill: '#9BC5FD' }, ind: { fill: '#9BC5FD' }, opacity: 0.4 },
  Error:    { unc: { fill: 'none', stroke: '#D81E1E' }, chk: { fill: '#D81E1E' }, ind: { fill: '#D81E1E' } }
};

/* Node ID map: "state-sel-size" → nodeId */
var _cbNodeMap = {
  'Default-false-small':'17143:2465','Default-true-small':'17143:2468',
  'Default-false-medium':'17143:2471','Default-true-medium':'17143:2473',
  'Default-false-large':'17143:2476','Default-true-large':'17143:2478',
  'Pressed-false-small':'17733:968','Pressed-true-small':'17733:980',
  'Focused-false-small':'17733:971','Focused-true-small':'17733:984',
  'Disabled-false-small':'17733:974','Disabled-true-small':'17733:988',
  'Error-false-small':'17733:977','Error-true-small':'17733:992',
  'Pressed-false-medium':'17733:996','Pressed-true-medium':'17733:1004',
  'Focused-false-medium':'17733:998','Focused-true-medium':'17733:1008',
  'Disabled-false-medium':'17733:1000','Disabled-true-medium':'17733:1012',
  'Error-false-medium':'17733:1002','Error-true-medium':'17733:1016',
  'Pressed-false-large':'17733:1020','Pressed-true-large':'17733:1028',
  'Focused-false-large':'17733:1022','Focused-true-large':'17733:1032',
  'Disabled-false-large':'17733:1024','Disabled-true-large':'17733:1036',
  'Error-false-large':'17733:1026','Error-true-large':'17733:1040',
  'Default-indeterminate-small':'17733:1044','Default-indeterminate-medium':'17733:1048','Default-indeterminate-large':'17733:1052'
};

function _cbBuildSvg(sel, state, px) {
  var colors = _cbStateColors[state] || _cbStateColors.Default;
  var op = colors.opacity ? ' opacity="' + colors.opacity + '"' : '';
  var s = '<svg width="' + px + '" height="' + px + '" viewBox="0 0 ' + px + ' ' + px + '" fill="none">';
  if (op) s += '<g' + op + '>';

  if (sel === 'true') {
    /* Checked: filled rect + checkmark */
    var c = colors.chk;
    var ck = _cbCheck[px];
    s += '<rect width="' + px + '" height="' + px + '" rx="4" fill="' + c.fill + '"/>';
    s += '<path d="' + ck.d + '" stroke="white" stroke-width="' + ck.sw + '" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (sel === 'indeterminate') {
    /* Indeterminate: filled rect + dash */
    var ic = colors.ind;
    var dk = _cbDash[px];
    s += '<rect width="' + px + '" height="' + px + '" rx="4" fill="' + ic.fill + '"/>';
    s += '<path d="' + dk.d + '" stroke="white" stroke-width="' + dk.sw + '" stroke-linecap="round"/>';
  } else {
    /* Unchecked: stroked rect */
    var u = colors.unc;
    var fill = u.fill !== 'none' ? ' fill="' + u.fill + '"' : '';
    s += '<rect x="1" y="1" width="' + (px-2) + '" height="' + (px-2) + '" rx="3"' + fill + ' stroke="' + u.stroke + '" stroke-width="2"/>';
  }

  if (op) s += '</g>';
  s += '</svg>';
  return s;
}

function updateCheckboxDemo() {
  var px = _cbPxMap[_cbDemo.size] || 20;
  var el = document.getElementById('cb-demo-preview');
  if (el) el.innerHTML = _cbBuildSvg(_cbDemo.sel, _cbDemo.state, px);
}

function updateCheckboxSpecCard(cardType, prop, value) {
  return updateSpecCard(cardType, prop, value);
}

function updateSpecCard(cardType, prop, value) {
  var card = _cbSpecCards[cardType];
  if (!card) return;
  card[prop] = value;
  var sel = (cardType === 'checked') ? 'true' : 'false';
  var st = card.state || 'Default';
  var px = _cbPxMap[card.size] || 20;

  /* Preview SVG — id `spec-${demoKey}-preview` */
  var previewEl = document.getElementById('spec-' + cardType + '-preview');
  if (previewEl) previewEl.innerHTML = _cbBuildSvg(sel, st, px);

  /* Properties readouts — data-sp="${demoKey}-${prop}" */
  var spState = document.querySelector('[data-sp="' + cardType + '-state"]');
  if (spState) spState.textContent = st;
  var spSize = document.querySelector('[data-sp="' + cardType + '-size"]');
  if (spSize) spSize.textContent = _cbLabelMap[card.size];

  /* Colors section — id `spec-${demoKey}-colors` */
  var colorsEl = document.getElementById('spec-' + cardType + '-colors');
  if (colorsEl) {
    var sc = _cbStateColors[st] || _cbStateColors.Default;
    var rows = [];
    if (sel === 'true') {
      rows.push(['Container bg', sc.chk.fill, 'main/checkbox/color/' + st.toLowerCase() + '/selected/bg']);
      rows.push(['Checkmark',    '#FFFFFF',    'main/checkbox/color/' + st.toLowerCase() + '/selected/check']);
    } else {
      if (sc.unc.fill !== 'none') rows.push(['Container bg', sc.unc.fill, 'main/checkbox/color/' + st.toLowerCase() + '/unselected/bg']);
      rows.push(['Border', sc.unc.stroke, 'main/checkbox/color/' + st.toLowerCase() + '/unselected/border']);
    }
    if (sc.opacity) rows.push(['Opacity', (sc.opacity * 100) + '%', '']);
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var isPercent = String(r[1]).indexOf('%') !== -1;
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E5EBF4' : '';
      var hasToken = r[2] && !isPercent;
      var tokenHtml = hasToken ? '<span class="spec-token-name">' + r[2] + '</span>' : '';
      if (isPercent) {
        h += '<div class="spec-prop"><span class="spec-prop-key">' + r[0] + '</span><span class="spec-prop-val mono">' + r[1] + '</span></div>';
      } else {
        h += '<div class="spec-prop' + (hasToken ? ' has-token' : '') + '"><span class="spec-prop-key">' + r[0] + '</span>'
          + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '</span>'
          + tokenHtml + '</div>';
      }
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  /* Layout section — id `spec-${demoKey}-layout` */
  var layoutEl = document.getElementById('spec-' + cardType + '-layout');
  if (layoutEl) {
    var borderNote = (sel === 'true') ? 'None (filled)' : '2px';
    layoutEl.innerHTML = '<div class="spec-detail-label">Layout</div><div class="spec-props">'
      + '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + px + ' × ' + px + 'px</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">Corner radius</span><span class="spec-prop-val mono">4px (radius-1)</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">Border width</span><span class="spec-prop-val mono">' + borderNote + '</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">Hit target</span><span class="spec-prop-val mono">44 × 44 (mobile)</span></div>'
      + '</div>';
  }

  /* Typography — left static (icon-only control) */

  /* DEV code — locate via `[data-code-content="${demoKey}"]` */
  var devView = document.querySelector('[data-view="' + cardType + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardType + '"]');
    if (codeEl) {
      var code = getSnippet(cardType, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function buildSwiftSnippet(type, card) {
  return _getCheckboxSnippet(type, 'swift', card.size, card.state);
}
function buildComposeSnippet(type, card) {
  return _getCheckboxSnippet(type, 'compose', card.size, card.state);
}
function getSnippet(type, lang, card) {
  return _getCheckboxSnippet(type, lang, card.size, card.state);
}
window.getSnippet = getSnippet;

function _getCheckboxSnippet(cardType, lang, size, state) {
  var sw = _cbSwiftSize[size] || '.regular';
  var co = _cbComposeSize[size] || 'Medium';
  var st = state || 'Default';
  var isChk = (cardType === 'checked');

  if (lang === 'swift') {
    var base = isChk
      ? 'EBCheckbox(isOn: .constant(true))\n    .controlSize(' + sw + ')'
      : 'EBCheckbox(isOn: $isSelected)\n    .controlSize(' + sw + ')';
    if (st === 'Disabled') base += '\n    .disabled(true)';
    if (st === 'Error') base += '\n    .ebError(true)';
    if (st === 'Focused') base += '\n    .focused()';
    return base;
  }

  var chkVal = isChk ? 'true' : 'false';
  var extra = '';
  if (st === 'Disabled') extra = ',\n    enabled = false';
  if (st === 'Error') extra = ',\n    isError = true';
  return 'EBCheckbox(\n    checked = ' + chkVal + ',\n    onCheckedChange = { isSelected = it },\n    size = EBCheckboxSize.' + co + extra + '\n)';
}

function switchCheckboxCodeTab(tabBtn, lang, cardType) {
  var parent = tabBtn.parentElement;
  parent.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  var card = _cbSpecCards[cardType];
  var codeEl = document.getElementById('cb-code-' + cardType);
  if (codeEl && card) {
    var raw = _getCheckboxSnippet(cardType, lang, card.size, card.state || 'Default');
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
  }
}

function toggleCheckboxSpecMode(type, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desView = document.querySelector('[data-view="' + type + '-des"]');
  var devView = document.querySelector('[data-view="' + type + '-dev"]');
  if (isDes) {
    if (desView) desView.style.display = 'none';
    if (devView) {
      devView.style.display = '';
      var shortType = type.replace('cb-', '');
      var card = _cbSpecCards[shortType];
      var activeTab = devView.querySelector('.spec-code-tab.active');
      var lang = (activeTab && activeTab.textContent.indexOf('COMPOSE') !== -1) ? 'compose' : 'swift';
      var codeEl = devView.querySelector('code');
      if (codeEl && card) {
        var raw = _getCheckboxSnippet(shortType, lang, card.size, card.state || 'Default');
        codeEl.setAttribute('data-final', raw);
        codeEl.textContent = raw;
        if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
      }
    }
  } else {
    if (devView) devView.style.display = 'none';
    if (desView) desView.style.display = '';
  }
}

function _cbInit() {
  updateCheckboxDemo();
  updateCheckboxSpecCard('unchecked', 'size', 'medium');
  updateCheckboxSpecCard('checked', 'size', 'medium');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _cbInit);
} else {
  _cbInit();
}
