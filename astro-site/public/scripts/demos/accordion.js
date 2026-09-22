/* Accordion — Style tab demo.
 * Panel mirrors the property panel of set 16870:9288 (Sticker Sheets v2),
 * in its order:
 *   Type          · Collapsed, Expanded              (variant)
 *   State         · Default, Disabled, Pressed       (variant)
 *   Leading Icon  · True                             (boolean)
 *   Description   · True                             (boolean)
 *   Content-Body  · 3 items                          (slot — no control)
 * 6 variants = Type (2) x State (3).
 *
 * Geometry and colours below are carried from the earlier assessment of
 * this node (v1.0 - v1.4); the plugin has no channel this session, so they
 * are not re-read. Two colours contradict between the old spec cards and
 * the Colors by State table and are shown as a conflict, not guessed.
 */

var ACC_W = 396, ACC_HEADER = 56, ACC_BODY = 56;

var ACC_STATE = {
  'default':  { bg: '#FFFFFF', label: '#0A2757', chev: '#005CE5' },
  'pressed':  { bg: '#F4F7FB', label: '#0A2757', chev: '#005CE5' },
  'disabled': { bg: '#F8F9FB', label: '#C2C6CF', chev: '#C2CFE5' }
};
var ACC_BORDER = '#E5EBF4', ACC_DESC = '#90A8D0', ACC_ICON = '#C2C6CF', ACC_BODY_BG = '#F6F9FD';

function _accOn(v, def) { return v == null ? def : v === 'true'; }
function _accCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

function _accRender(c) {
  var st = ACC_STATE[c.state] || ACC_STATE['default'];
  var icon = _accOn(c.leadingicon, true), desc = _accOn(c.description, true);
  var expanded = c.type === 'expanded';
  var h = ACC_HEADER + (expanded ? ACC_BODY : 0);
  var textX = icon ? 56 : 16;                       /* 16 padding + 32 icon + 8 gap */
  var labelY = desc ? 18 : 28, descY = 38;
  var s = '<svg width="' + ACC_W + '" height="' + h + '" viewBox="0 0 ' + ACC_W + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + ACC_W + '" height="' + ACC_HEADER + '" fill="' + st.bg + '"/>';
  if (expanded) s += '<rect x="0" y="' + ACC_HEADER + '" width="' + ACC_W + '" height="' + ACC_BODY + '" fill="' + ACC_BODY_BG + '"/>';
  if (icon) s += '<rect x="16" y="12" width="32" height="32" rx="16" fill="' + ACC_ICON + '"/>';
  s += '<text class="acc-label" x="' + textX + '" y="' + labelY + '" font-size="16" font-weight="700" fill="' + st.label +
       '" dominant-baseline="central">Label</text>';
  if (desc) s += '<text class="acc-desc" x="' + textX + '" y="' + descY + '" font-size="14" font-weight="600" fill="' +
                 (c.state === 'disabled' ? st.label : ACC_DESC) + '" dominant-baseline="central">Description here...</text>';
  /* Chevron — 32 box at the right edge, 16 padding. */
  var cx = ACC_W - 16 - 16, cy = ACC_HEADER / 2;
  var d = expanded ? 'M' + (cx - 5) + ' ' + (cy + 2.5) + 'l5 -5 5 5' : 'M' + (cx - 5) + ' ' + (cy - 2.5) + 'l5 5 5 -5';
  s += '<path d="' + d + '" stroke="' + st.chev + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
  if (expanded) s += '<rect x="0" y="' + ACC_HEADER + '" width="' + ACC_W + '" height="1" fill="' + ACC_BORDER + '"/>';
  s += '<rect x="0" y="' + (h - 1) + '" width="' + ACC_W + '" height="1" fill="' + ACC_BORDER + '"/>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { type: 'collapsed', state: 'default', leadingicon: 'true', description: 'true' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBAccordion(', '    "Label",', '    isExpanded: .constant(' + (c.type === 'expanded') + ')'];
  if (_accOn(c.description, true)) l.push('    description: "Description here..."');
  if (_accOn(c.leadingicon, true)) l.push('    leadingIcon: Image("icon")');
  l.push(') {');
  l.push('    Text("Content-Body")');
  l.push('}');
  if (c.state === 'disabled') l.push('.disabled(true)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBAccordion(', '    title = "Label",', '    expanded = ' + (c.type === 'expanded') + ','];
  if (_accOn(c.description, true)) l.push('    description = "Description here...",');
  if (_accOn(c.leadingicon, true)) l.push('    leadingIcon = { Icon(painterResource(R.drawable.icon), null) },');
  if (c.state === 'disabled') l.push('    enabled = false,');
  l.push('    onExpandChange = { }');
  l.push(') {');
  l.push('    Text("Content-Body")');
  l.push('}');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('accordion-spec-' + cardStyle);
  if (host) host.innerHTML = _accRender(card);

  ['type', 'state', 'leadingicon', 'description'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    el.textContent = (a === 'leadingicon' || a === 'description')
      ? (card[a] === 'true' ? 'True' : 'False') : _accCap(card[a]);
  });
  var h = ACC_HEADER + (card.type === 'expanded' ? ACC_BODY : 0);
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = ACC_W + ' × ' + h;

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
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
window.updateSpecCard = updateSpecCard;

/* ── Overview tab shim — the old panel drove demo-acc-* elements. ───── */
var _accDemo = { type: 'collapsed', state: 'default', leadingIcon: 'true', description: 'true' };
function _applyAccDemo() {
  var host = document.getElementById('demo-acc-live') || document.getElementById('acc-demo-preview-wrap');
  if (host) host.innerHTML = _accRender({
    type: _accDemo.type, state: _accDemo.state,
    leadingicon: _accDemo.leadingIcon, description: _accDemo.description
  });
}
function setAccDemoType(type) { _accDemo.type = type; _applyAccDemo(); }
function setAccDemoState(state) { _accDemo.state = state; _applyAccDemo(); }
function setAccDemoProp(prop, val) { _accDemo[prop] = val; _applyAccDemo(); }
window.setAccDemoType = setAccDemoType;
window.setAccDemoState = setAccDemoState;
window.setAccDemoProp = setAccDemoProp;

/* ── First paint ────────────────────────────────────────────────────── */
function _accInit() {
  _applyAccDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('accordion-spec-' + k);
    if (host) host.innerHTML = _accRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _accInit);
else _accInit();
document.addEventListener('astro:page-load', _accInit);
