/* Auto-extracted from assessment-src/components/select-field.html.
 * Powers the live-preview dropdowns/toggles for the select-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs select-field
 */
/* ── Select Field Component JS ──────────────────────────────────────── */
var _sfDemo = { state: 'Default', filled: 'false', leadingCurrency: 'true', trailingFlag: 'true' };

var _sfColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _sfTextColors = {
  Default:  { filled: '#0A2757', empty: '#90A8D0' },
  Active:   { filled: '#0A2757', empty: '#90A8D0' },
  Error:    { filled: '#0A2757', empty: '#90A8D0' },
  Disabled: { filled: '#90A8D0', empty: '#C2CFE5' }
};
var _sfPesoColors = {
  Default: '#183462', Active: '#183462', Error: '#183462', Disabled: '#7E96BE'
};

function _sfBuildSvg(state, filled, leadingCurrency, trailingFlag) {
  var c = _sfColors[state] || _sfColors.Default;
  var tc = _sfTextColors[state] || _sfTextColors.Default;
  var pc = _sfPesoColors[state] || _sfPesoColors.Default;
  var hasCurrency = leadingCurrency !== 'false';
  var hasFlag = trailingFlag !== 'false';
  var textColor = (filled === 'true') ? tc.filled : tc.empty;
  var labelColor = '#0A2757';
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var flagOpacity = state === 'Disabled' ? '0.5' : '1';
  var chevronColor = state === 'Disabled' ? '#7E96BE' : '#005CE5';
  var labelX = hasCurrency ? 36 : 12;
  var s = '<svg width="366" height="46" viewBox="0 0 366 46" fill="none" xmlns="http://www.w3.org/2000/svg">';
  /* container */
  s += '<rect x="0.5" y="0.5" width="365" height="45" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  /* peso sign — vertically centered in 46px container */
  if (hasCurrency) {
    s += '<text x="12" y="23" font-family="Proxima Soft, system-ui" font-size="15" font-weight="700" fill="' + pc + '" dominant-baseline="central">&#8369;</text>';
  }
  /* label */
  s += '<text x="' + labelX + '" y="20" font-family="Proxima Soft, system-ui" font-size="16" font-weight="600" fill="' + labelColor + '">Label</text>';
  /* value */
  s += '<text x="' + labelX + '" y="36" font-family="Proxima Soft, system-ui" font-size="14" fill="' + textColor + '">' + (filled === 'true' ? '1,000.00' : 'Value') + '</text>';
  /* flag container — Philippine flag: blue top, red bottom, white triangle on hoist (left) */
  if (hasFlag) {
    s += '<rect x="298" y="15" width="25" height="8" fill="#0038A8" opacity="' + flagOpacity + '"/>';
    s += '<rect x="298" y="23" width="25" height="8" fill="#CE1126" opacity="' + flagOpacity + '"/>';
    s += '<polygon points="298,15 298,31 308.5,23" fill="#FFFFFF" opacity="' + flagOpacity + '"/>';
  }
  /* chevron down */
  s += '<path d="M342 20l5 5 5-5" stroke="' + chevronColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  s += '</svg>';
  return s;
}

function updateSelectFieldDemo() {
  var el = document.getElementById('sf-demo-preview');
  if (el) el.innerHTML = _sfBuildSvg(_sfDemo.state, _sfDemo.filled, _sfDemo.leadingCurrency, _sfDemo.trailingFlag);
}

/* ── Select Field Spec Cards ──────────────────────────────────────── */
var _sfSpecCards = {
  default:  { state: 'Default',  filled: 'false', leadingCurrency: 'true', trailingFlag: 'true' },
  active:   { state: 'Active',   filled: 'false', leadingCurrency: 'true', trailingFlag: 'true' },
  error:    { state: 'Error',    filled: 'false', leadingCurrency: 'true', trailingFlag: 'true' },
  disabled: { state: 'Disabled', filled: 'false', leadingCurrency: 'true', trailingFlag: 'true' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _sfSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var stateMap = { Default: '.default', Active: '.active', Error: '.error', Disabled: '.disabled' };
  var st = stateMap[card.state] || '.default';
  var lines = [];
  lines.push('EBSelectField("Amount", selection: $amount)');
  if (card.leadingCurrency === 'true') lines.push('    .ebLeadingCurrency(.peso)');
  if (card.trailingFlag === 'true')    lines.push('    .ebTrailingFlag(.philippines)');
  lines.push('    .ebState(' + st + ')');
  lines.push('    .isFilled(' + card.filled + ')');
  if (card.state === 'Disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var stateMap = { Default: 'Default', Active: 'Active', Error: 'Error', Disabled: 'Disabled' };
  var st = stateMap[card.state] || 'Default';
  var lines = [];
  lines.push('EBSelectField(');
  lines.push('    label = "Amount",');
  lines.push('    selectedValue = amount,');
  lines.push('    onValueChange = { amount = it },');
  if (card.leadingCurrency === 'true') lines.push('    leadingCurrency = EBCurrency.Peso,');
  if (card.trailingFlag === 'true')    lines.push('    trailingFlag = EBFlag.Philippines,');
  lines.push('    state = EBFieldState.' + st + ',');
  lines.push('    isFilled = ' + (card.filled === 'true' ? 'true' : 'false') + (card.state === 'Disabled' ? ',' : ''));
  if (card.state === 'Disabled') lines.push('    enabled = false');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _sfSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG — find the <svg> inside the card's preview pane */
  var cardEl = document.getElementById('spec-card-sf-spec-' + cardStyle);
  if (cardEl) {
    var preview = cardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _sfBuildSvg(card.state, card.filled, card.leadingCurrency, card.trailingFlag);
  }

  /* Update Properties readouts — data-sp="${cardStyle}-${prop}" for each axis */
  ['state', 'filled', 'leadingCurrency', 'trailingFlag'].forEach(function (p) {
    var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (spEl) spEl.textContent = card[p];
  });

  /* Update DEV code — locate via [data-code-content="${cardStyle}"]. Always
     rebuild even when DEV view is hidden. */
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

function _sfInitSpecCards() {
  Object.keys(_sfSpecCards).forEach(function (k) {
    updateSpecCard(k, 'filled', _sfSpecCards[k].filled);
  });
}

function _sfInit() {
  updateSelectFieldDemo();
  _sfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _sfInit);
} else {
  _sfInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
document.addEventListener('astro:page-load', _sfInit);
