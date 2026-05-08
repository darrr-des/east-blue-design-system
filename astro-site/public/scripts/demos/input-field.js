/* Auto-extracted from assessment-src/components/input-field.html.
 * Powers the live-preview dropdowns/toggles for the input-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs input-field
 */
/* ── Input Field Component JS ──────────────────────────────────────── */
var _infDemo = { state: 'Default', filled: 'false', leadingIcon: 'false', trailingIcon: 'false' };

var _infColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _infTextColors = {
  Default:  { filled: '#0A2757', empty: '#90A8D0' },
  Active:   { filled: '#0A2757', empty: '#90A8D0' },
  Error:    { filled: '#0A2757', empty: '#90A8D0' },
  Disabled: { filled: '#90A8D0', empty: '#C2CFE5' }
};

function _infIconColor(state) {
  if (state === 'Disabled') return '#C2CFE5';
  if (state === 'Active')   return '#005CE5';
  if (state === 'Error')    return '#D61B2C';
  return '#6780A9';
}

function _infBuildSvg(state, filled, leadingIcon, trailingIcon) {
  var c = _infColors[state] || _infColors.Default;
  var tc = _infTextColors[state] || _infTextColors.Default;
  var hasLeading  = leadingIcon === 'true';
  var hasTrailing = trailingIcon === 'true';
  var textColor = (filled === 'true') ? tc.filled : tc.empty;
  var displayText = (filled === 'true') ? 'Sample value' : 'Placeholder';
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var iconColor = _infIconColor(state);
  var textX = hasLeading ? 40 : 12;

  var s = '<svg width="366" height="46" viewBox="0 0 366 46" fill="none">';
  s += '<rect x="0.5" y="0.5" width="365" height="45" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  if (hasLeading) {
    /* Search-style magnifier icon */
    s += '<g stroke="' + iconColor + '" stroke-width="1.6" stroke-linecap="round" fill="none">';
    s += '<circle cx="20" cy="23" r="6"/>';
    s += '<path d="M25 28 L29 32"/>';
    s += '</g>';
  }
  s += '<text x="' + textX + '" y="27" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">' + displayText + '</text>';
  if (hasTrailing) {
    /* Clear (x) circle icon */
    s += '<g stroke="' + iconColor + '" stroke-width="1.6" stroke-linecap="round" fill="none">';
    s += '<circle cx="346" cy="23" r="7"/>';
    s += '<path d="M343 20 L349 26 M349 20 L343 26"/>';
    s += '</g>';
  }
  s += '</svg>';
  return s;
}

function updateInputFieldDemo() {
  var el = document.getElementById('inf-demo-preview');
  if (el) el.innerHTML = _infBuildSvg(_infDemo.state, _infDemo.filled, _infDemo.leadingIcon, _infDemo.trailingIcon);
}

/* ── Spec Cards (state-per-card with isFilled + icon toggles) ─────── */
var _specCards = {
  default:  { state: 'Default',  filled: 'false', leadingIcon: 'false', trailingIcon: 'false' },
  active:   { state: 'Active',   filled: 'false', leadingIcon: 'false', trailingIcon: 'false' },
  error:    { state: 'Error',    filled: 'false', leadingIcon: 'false', trailingIcon: 'false' },
  disabled: { state: 'Disabled', filled: 'false', leadingIcon: 'false', trailingIcon: 'false' }
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
  var s = 'EBInputField("Label", value: $value)';
  if (card.leadingIcon === 'true')  s += '\n    .ebLeadingIcon(Image(systemName: "magnifyingglass"))';
  if (card.trailingIcon === 'true') s += '\n    .ebTrailingIcon(Image(systemName: "xmark.circle.fill"))';
  s += '\n    .ebState(' + stateDot + ')';
  s += '\n    .isFilled(' + card.filled + ')';
  if (card.state === 'Disabled') s += '\n    .disabled(true)';
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
  var lines = ['EBInputField('];
  lines.push('    label = "Label",');
  lines.push('    value = value,');
  if (card.leadingIcon === 'true')  lines.push('    leadingIcon = { Icon(Icons.Default.Search, contentDescription = null) },');
  if (card.trailingIcon === 'true') lines.push('    trailingIcon = { Icon(Icons.Default.Clear, contentDescription = null) },');
  lines.push('    state = EBFieldState.' + stateName + ',');
  lines.push('    isFilled = ' + card.filled + (card.state === 'Disabled' ? ',' : ''));
  if (card.state === 'Disabled') lines.push('    enabled = false');
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

  /* Update SVG preview — locate by data-view body */
  var card$ = document.getElementById('spec-card-inf-spec-' + cardStyle);
  if (card$) {
    var previewEl = card$.querySelector('.spec-card-preview');
    if (previewEl) {
      previewEl.innerHTML = _infBuildSvg(card.state, card.filled, card.leadingIcon, card.trailingIcon);
    }
  }

  /* Update Properties readouts — data-sp="${cardStyle}-${prop}" */
  ['state', 'filled', 'leadingIcon', 'trailingIcon'].forEach(function(p) {
    var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (spEl) spEl.textContent = card[p];
  });

  /* Update DEV code — locate via [data-code-content="${cardStyle}"]. Always
     run, even when DEV view is hidden. Use highlightSyntax. */
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
function updateInputFieldSpecCard(state, filled) {
  var key = state.toLowerCase();
  if (_specCards[key]) {
    _specCards[key].filled = filled;
    updateSpecCard(key, 'filled', filled);
  }
}

function _infInitSpecCards() {
  Object.keys(_specCards).forEach(function (key) {
    /* Re-render preview + code by toggling the same value. */
    updateSpecCard(key, 'filled', _specCards[key].filled);
  });
}

function _infInit() {
  updateInputFieldDemo();
  _infInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _infInit);
} else {
  _infInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function () {
  document.addEventListener('astro:page-load', _infInit);
})();
