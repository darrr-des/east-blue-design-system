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
  var card = _cbSpecCards[cardType];
  if (!card) return;
  card[prop] = value;
  var sel = (cardType === 'checked') ? 'true' : 'false';
  var st = card.state || 'Default';
  var px = _cbPxMap[card.size] || 20;

  /* Preview SVG */
  var previewEl = document.getElementById('cb-' + (cardType === 'checked' ? 'chk' : 'unc') + '-preview');
  if (previewEl) previewEl.innerHTML = _cbBuildSvg(sel, st, px);

  /* Properties */
  var propsEl = document.getElementById('cb-spec-' + cardType + '-props');
  if (propsEl) {
    propsEl.innerHTML = '<div class="spec-detail-label">Properties</div><div class="spec-props">'
      + '<div class="spec-prop"><span class="spec-prop-key">isSelected</span><span class="spec-prop-val">' + sel + '</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">State</span><span class="spec-prop-val">' + st + '</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val">' + _cbLabelMap[card.size] + '</span></div>'
      + '</div>';
  }

  /* Colors */
  var colorsEl = document.getElementById('cb-spec-' + cardType + '-colors');
  if (colorsEl) {
    var sc = _cbStateColors[st] || _cbStateColors.Default;
    var rows = [];
    if (sel === 'true') {
      rows.push(['Container bg', sc.chk.fill]);
      rows.push(['Checkmark', '#FFFFFF']);
    } else {
      if (sc.unc.fill !== 'none') rows.push(['Container bg', sc.unc.fill]);
      rows.push(['Border', sc.unc.stroke]);
    }
    if (sc.opacity) rows.push(['Opacity', (sc.opacity * 100) + '%']);
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
      var isPercent = r[1].indexOf('%') !== -1;
      if (isPercent) {
        h += '<div class="spec-prop"><span class="spec-prop-key">' + r[0] + '</span><span class="spec-prop-val mono">' + r[1] + '</span></div>';
      } else {
        h += '<div class="spec-prop"><span class="spec-prop-key">' + r[0] + '</span>'
          + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '</span></div>';
      }
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  /* Layout */
  var layoutEl = document.getElementById('cb-spec-' + cardType + '-layout');
  if (layoutEl) {
    var borderNote = (sel === 'true') ? 'None (filled)' : '2px';
    layoutEl.innerHTML = '<div class="spec-detail-label">Layout</div><div class="spec-props">'
      + '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + px + ' x ' + px + 'px</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">Corner radius</span><span class="spec-prop-val mono">4px</span></div>'
      + '<div class="spec-prop"><span class="spec-prop-key">Border width</span><span class="spec-prop-val mono">' + borderNote + '</span></div>'
      + '</div>';
  }

  /* Typography */
  var typoEl = document.getElementById('cb-spec-' + cardType + '-typo');
  if (typoEl) {
    typoEl.innerHTML = '<div class="spec-detail-label">Typography</div><div class="spec-props">'
      + '<div class="spec-prop"><span class="spec-prop-key muted">No text layer</span></div>'
      + '</div>';
  }

  /* DEV code */
  var codeEl = document.getElementById('cb-code-' + cardType);
  if (codeEl) {
    var devView = codeEl.closest('[data-view]');
    if (devView) {
      var activeTab = devView.querySelector('.spec-code-tab.active');
      var lang = (activeTab && activeTab.textContent.indexOf('COMPOSE') !== -1) ? 'compose' : 'swift';
      var raw = _getCheckboxSnippet(cardType, lang, card.size, st);
      codeEl.setAttribute('data-final', raw);
      codeEl.textContent = raw;
      if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
    }
  }
}

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
