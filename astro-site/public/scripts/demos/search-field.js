/* Auto-extracted from assessment-src/components/search-field.html.
 * Powers the live-preview dropdowns/toggles for the search-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs search-field
 */
/* ── Search Field Component JS ─────────────────────────────────────── */
var _srfDemo = { state: 'default' };

var _srfColors = {
  bg: '#FFFFFF',
  border: 'rgba(246,249,253,0.8)',
  placeholder: '#90A8D0',
  text: '#0A2757',
  iconLeading: '#6780A9',
  iconTrailing: '#6780A9'
};

function _srfBuildSvg(state) {
  var isFilled = (state === 'filled');
  var textColor = isFilled ? _srfColors.text : _srfColors.placeholder;
  var textOpacity = isFilled ? '1' : '0.5';
  var s = '<svg width="360" height="56" viewBox="0 0 360 56" fill="none">';
  // bg
  s += '<rect x="0" y="0" width="360" height="56" fill="' + _srfColors.bg + '"/>';
  // top + bottom border only
  s += '<line x1="0" y1="0.5" x2="360" y2="0.5" stroke="' + _srfColors.border + '" stroke-width="1"/>';
  s += '<line x1="0" y1="55.5" x2="360" y2="55.5" stroke="' + _srfColors.border + '" stroke-width="1"/>';
  // leading search icon (simplified)
  s += '<g transform="translate(22,16)" opacity="0.8">';
  s += '<circle cx="10" cy="10" r="7" stroke="' + _srfColors.iconLeading + '" stroke-width="2" fill="none"/>';
  s += '<line x1="15.5" y1="15.5" x2="20.5" y2="20.5" stroke="' + _srfColors.iconLeading + '" stroke-width="2" stroke-linecap="round"/>';
  s += '</g>';
  // text
  s += '<text x="54" y="32" font-family="BarkAda, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" fill-opacity="' + textOpacity + '">Search</text>';
  // trailing placeholder circle
  s += '<circle cx="324" cy="28" r="12" fill="' + _srfColors.iconTrailing + '"/>';
  s += '</svg>';
  return s;
}

function updateSearchFieldDemo() {
  var el = document.getElementById('srf-demo-preview');
  if (el) el.innerHTML = _srfBuildSvg(_srfDemo.state);
}

function updateSearchFieldSpecCard(state) {
  var el = document.getElementById('srf-' + state + '-preview');
  if (el) el.innerHTML = _srfBuildSvg(state);
}

function _srfInitSpecCards() {
  updateSearchFieldSpecCard('default');
  updateSearchFieldSpecCard('filled');
}

function _srfInit() {
  updateSearchFieldDemo();
  _srfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _srfInit);
} else {
  _srfInit();
}

/* ── Canonical wiring (matches avatar.js shape) ────────────────────── */
/* Per-card state — keyed by the data file's `demoKey` values
   (`srf-default`, `srf-filled`). */
var _specCards = {
  'srf-default': { state: 'default' },
  'srf-filled':  { state: 'filled' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardStyle, card) {
  var lines = [];
  lines.push('EBSearchField(placeholder: "Search", text: $query)');
  lines.push('    .ebState(.' + (card.state || 'default') + ')');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var stateName = (card.state || 'default');
  stateName = stateName.charAt(0).toUpperCase() + stateName.slice(1);
  var lines = [];
  lines.push('EBSearchField(');
  lines.push('    placeholder = "Search",');
  lines.push('    query = query,');
  lines.push('    onQueryChange = { },');
  lines.push('    state = EBFieldState.' + stateName);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update SVG preview — `srf-default-preview`, `srf-filled-preview`. */
  var previewEl = document.getElementById(cardStyle + '-preview');
  if (previewEl) previewEl.innerHTML = _srfBuildSvg(card.state);

  /* Property-text cell. */
  var spState = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  if (spState) spState.textContent = card.state.charAt(0).toUpperCase() + card.state.slice(1);

  /* DEV code. */
  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var lang = codeEl.getAttribute('data-lang') || 'swift';
    var code = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', code);
    codeEl.textContent = code;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}
window.updateSpecCard = updateSpecCard;
