/* Auto-extracted from assessment-src/components/labeled-field.html.
 * Powers the live-preview dropdowns/toggles for the labeled-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs labeled-field
 */
/* ── Labeled Field Component JS ──────────────────────────────────────── */
var _lfDemo = { state: 'Default', filled: 'false' };

var _lfColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _lfTextColors = {
  Default:  { label: '#0A2757', filledVal: '#0A2757', emptyVal: '#90A8D0' },
  Active:   { label: '#0A2757', filledVal: '#0A2757', emptyVal: '#90A8D0' },
  Error:    { label: '#0A2757', filledVal: '#0A2757', emptyVal: '#90A8D0' },
  Disabled: { label: '#90A8D0', filledVal: '#C2CFE5', emptyVal: '#C2CFE5' }
};

function _lfBuildSvg(state, filled, leadingIcon, action) {
  var c = _lfColors[state] || _lfColors.Default;
  var tc = _lfTextColors[state] || _lfTextColors.Default;
  var labelColor = tc.label;
  var valueColor = (filled === 'true') ? tc.filledVal : tc.emptyVal;
  var valueText = (filled === 'true') ? 'Sample value' : 'Placeholder';
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var iconFill = (state === 'Disabled') ? '#C2CFE5' : '#90A8D0';
  var btnBg = (state === 'Disabled') ? '#EEF2F9' : '#005CE5';
  var btnText = (state === 'Disabled') ? '#C2CFE5' : '#FFFFFF';
  var showLeading = leadingIcon !== 'false';
  var showAction = action !== 'false';
  var labelX = showLeading ? 44 : 16;
  var s = '<svg width="366" height="46" viewBox="0 0 366 46" fill="none">';
  s += '<rect x="0.5" y="0.5" width="365" height="45" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  if (showLeading) {
    s += '<rect x="12" y="11" width="24" height="24" rx="4" fill="' + iconFill + '" opacity="0.2"/>';
    s += '<circle cx="24" cy="23" r="4" fill="' + iconFill + '" opacity="0.5"/>';
  }
  s += '<text x="' + labelX + '" y="19" font-family="Proxima Soft, system-ui" font-size="11" font-weight="600" fill="' + labelColor + '" letter-spacing="0.25" opacity="0.7">Label</text>';
  s += '<text x="' + labelX + '" y="33" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + valueColor + '" letter-spacing="0.25">' + valueText + '</text>';
  if (showAction) {
    s += '<rect x="260" y="11" width="60" height="24" rx="12" fill="' + btnBg + '"/>';
    s += '<text x="290" y="27" font-family="Proxima Soft, system-ui" font-size="11" font-weight="600" fill="' + btnText + '" text-anchor="middle">Action</text>';
  }
  s += '<rect x="330" y="11" width="24" height="24" rx="4" fill="' + iconFill + '" opacity="0.2"/>';
  s += '<circle cx="342" cy="23" r="4" fill="' + iconFill + '" opacity="0.5"/>';
  s += '</svg>';
  return s;
}

function updateLabeledFieldDemo() {
  var el = document.getElementById('lf-demo-preview');
  if (el) el.innerHTML = _lfBuildSvg(_lfDemo.state, _lfDemo.filled, 'true', 'true');
}

/* ── Spec Cards (state-per-card with isFilled / leadingIcon / action toggles) ── */
var _specCards = {
  default:  { state: 'Default',  filled: 'false', leadingIcon: 'true', action: 'true' },
  active:   { state: 'Active',   filled: 'false', leadingIcon: 'true', action: 'true' },
  error:    { state: 'Error',    filled: 'false', leadingIcon: 'true', action: 'true' },
  disabled: { state: 'Disabled', filled: 'false', leadingIcon: 'true', action: 'true' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var stateDot;
  switch (card.state) {
    case 'Active':   stateDot = '.active'; break;
    case 'Error':    stateDot = '.error'; break;
    case 'Disabled': stateDot = '.disabled'; break;
    default:         stateDot = '.default';
  }
  var s = 'EBLabeledField(label: "Email", value: $value)';
  s += '\n    .ebState(' + stateDot + ')';
  s += '\n    .isFilled(' + card.filled + ')';
  if (card.leadingIcon === 'true') s += '\n    .leadingIcon(Image("icon-placeholder"))';
  if (card.action === 'true')      s += '\n    .ebAction(EBFieldAction("Action") { })';
  if (card.state === 'Disabled')   s += '\n    .disabled(true)';
  return s;
}

function buildComposeSnippet(type, card) {
  var stateName;
  switch (card.state) {
    case 'Active':   stateName = 'Active'; break;
    case 'Error':    stateName = 'Error'; break;
    case 'Disabled': stateName = 'Disabled'; break;
    default:         stateName = 'Default';
  }
  var lines = ['EBLabeledField('];
  lines.push('    label = "Email",');
  lines.push('    value = value,');
  lines.push('    state = EBFieldState.' + stateName + ',');
  lines.push('    isFilled = ' + card.filled + ',');
  if (card.leadingIcon === 'true') {
    lines.push('    leadingIcon = { Icon(Icons.Default.Placeholder, null) },');
  }
  if (card.action === 'true') {
    lines.push('    action = { EBFieldAction("Action") { } },');
  }
  lines.push('    enabled = ' + (card.state === 'Disabled' ? 'false' : 'true'));
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update SVG preview */
  var card$ = document.getElementById('spec-card-lf-spec-' + cardStyle);
  if (card$) {
    var previewEl = card$.querySelector('.spec-card-preview');
    if (previewEl) {
      previewEl.innerHTML = _lfBuildSvg(card.state, card.filled, card.leadingIcon, card.action);
    }
  }

  /* Update Properties readouts — data-sp="${cardStyle}-${prop}" */
  ['state', 'filled', 'leadingIcon', 'action'].forEach(function (p) {
    var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (!spEl) return;
    var hex = spEl.querySelector('.spec-prop-hex');
    if (hex) hex.textContent = card[p];
    else spEl.textContent = card[p];
  });

  /* Update DEV code */
  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var activeTab = null;
    var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
    if (devView) activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var code = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', code);
    codeEl.setAttribute('data-lang', lang);
    codeEl.textContent = code;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}
window.updateSpecCard = updateSpecCard;

/* Legacy alias */
function updateLabeledFieldSpecCard(state, filled) {
  var key = state.toLowerCase();
  if (_specCards[key]) {
    _specCards[key].filled = filled;
    updateSpecCard(key, 'filled', filled);
  }
}

function _lfSyncSelects() {
  /* For each card, sync its dropdowns to the card's actual values
     (since defaultValue in DemoControlSection is shared across cards). */
  Object.keys(_specCards).forEach(function (key) {
    var card$ = document.getElementById('spec-card-lf-spec-' + key);
    if (!card$) return;
    var card = _specCards[key];
    var rows = card$.querySelectorAll('.demo-figma-panel .demo-panel-row');
    var labelToProp = { 'State': 'state', 'isFilled': 'filled', 'leadingIcon': 'leadingIcon', 'action': 'action' };
    rows.forEach(function (row) {
      var label = row.querySelector('.demo-panel-label');
      var sel   = row.querySelector('select');
      if (!label || !sel) return;
      var prop = labelToProp[label.textContent.trim()];
      if (!prop) return;
      var v = card[prop];
      if (v == null) return;
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === v) { sel.selectedIndex = i; break; }
      }
    });
  });
}

function _lfInitSpecCards() {
  Object.keys(_specCards).forEach(function (key) {
    /* Trigger a render pass per card */
    updateSpecCard(key, 'filled', _specCards[key].filled);
  });
  _lfSyncSelects();
}

function _lfInit() {
  updateLabeledFieldDemo();
  _lfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _lfInit);
} else {
  _lfInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function () {
  document.addEventListener('astro:page-load', _lfInit);
})();
