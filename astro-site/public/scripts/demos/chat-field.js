/* Chat Composer — Style tab demo.
 * Rebuilt from Figma component set 5536:31209 (GCash DS 2026 Working File),
 * inside the section "[NEW] Chat Composer (Don't Use)".
 * Offsets, fills and the text style read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 5536:31209, from the property-panel screenshot):
 *   isActive        · True, False   (variant)
 *   hasValue        · True, False   (variant)
 *   trailingAction  · 4 items       (slot — Send Message Medium)
 *   leadingAction   · 4 items       (slot — Add_Full)
 * 2 x 2 = 4 variants, all built, every one 360 x 88.
 *
 * Row: leadingAction slot 40 x 52 at (12, 12) with a 32 icon, Input Field
 * 248 x 52 at (52, 12) radius 6, trailingAction slot 44 x 52 at (300, 12).
 * The frame pads 12 on top and the sides and 24 underneath.
 *
 * isActive swaps the field border from #D7E0EF to #005CE5 and the export
 * draws the active one heavier, so the preview uses 1 and 2. hasValue
 * swaps the text from the #90A8D0 placeholder to a #0A2757 value, and the
 * send glyph from pale to solid blue — the icon fills are not exposed by
 * the plugin, so those two come from the export.
 */

var CC_W = 360, CC_H = 88;
var CC_NODES = {
  'false|false': '5536:31210', 'true|false': '5554:36222',
  'false|true': '5554:36272',  'true|true': '5554:36279'
};
var CC_BORDER = { on: '#005CE5', off: '#D7E0EF' };
var CC_TEXT = { placeholder: '#90A8D0', value: '#0A2757' };
var CC_SEND = { on: '#005CE5', off: '#9BC5FD' };
var CC_ADD = '#005CE5';

function _ccOn(v, def) { return v == null ? def : v === 'true'; }

/* Add_Full — 32 box, 20 glyph. */
function _ccAdd(x, y) {
  return '<path d="M' + (x + 16) + ' ' + (y + 6) + 'v20 M' + (x + 6) + ' ' + (y + 16) + 'h20" stroke="' + CC_ADD +
         '" stroke-width="2" stroke-linecap="round"/>';
}

/* Send Message Medium — 32 box. The library glyph is not exposed by the
 * plugin, so this is a stand-in drawn to match the export. */
function _ccSend(x, y, fill) {
  return '<path d="M' + (x + 26) + ' ' + (y + 7) + 'L' + (x + 6) + ' ' + (y + 15) + 'l8 3 3 8z" fill="none" stroke="' + fill +
         '" stroke-width="2" stroke-linejoin="round"/>' +
         '<path d="M' + (x + 26) + ' ' + (y + 7) + 'l-12 11" stroke="' + fill + '" stroke-width="2" stroke-linecap="round"/>';
}

function _ccRender(c) {
  var active = _ccOn(c.isactive, false), value = _ccOn(c.hasvalue, false);
  var border = active ? CC_BORDER.on : CC_BORDER.off, weight = active ? 2 : 1;
  var s = '<svg width="' + CC_W + '" height="' + CC_H + '" viewBox="0 0 ' + CC_W + ' ' + CC_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + CC_W + '" height="' + CC_H + '" fill="#FFFFFF"/>';
  s += _ccAdd(12, 22);
  s += '<rect x="' + (52 + weight / 2) + '" y="' + (12 + weight / 2) + '" width="' + (248 - weight) + '" height="' + (52 - weight) +
       '" rx="6" fill="#FFFFFF" stroke="' + border + '" stroke-width="' + weight + '"/>';
  s += '<text class="cc-text" x="64" y="38" font-size="16" font-weight="600" fill="' +
       (value ? CC_TEXT.value : CC_TEXT.placeholder) + '" dominant-baseline="central">' +
       (value ? 'Hi!' : 'Say hi!') + '</text>';
  s += _ccSend(312, 22, value ? CC_SEND.on : CC_SEND.off);
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { isactive: 'false', hasvalue: 'false' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBChatComposer(', '    text: $message,', '    placeholder: "Say hi!"', ')'];
  l.push('    .ebLeadingAction(.add) { attach() }');
  l.push('    .ebTrailingAction(.send) { send() }');
  if (_ccOn(c.isactive, false)) l.push('    .focused($isFocused)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBChatComposer(', '    value = message,', '    onValueChange = { message = it },', '    placeholder = "Say hi!",'];
  l.push('    leadingAction = { EBIconButton(EBIcons.Add) { attach() } },');
  l.push('    trailingAction = { EBIconButton(EBIcons.Send) { send() } }');
  l.push(')');
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

  var host = document.getElementById('chat-field-spec-' + cardStyle);
  if (host) host.innerHTML = _ccRender(card);

  ['isactive', 'hasvalue'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = card[a] === 'true' ? 'True' : 'False';
  });
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = CC_NODES[card.isactive + '|' + card.hasvalue] + ' · 360 × 88';

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

/* ── Overview tab shim — the old panel toggled an active flag. ─────── */
function updateChatFieldDemo() {
  var el = document.getElementById('cf-demo-preview');
  if (!el) return;
  var n = document.getElementById('cf-demo-active');
  el.innerHTML = _ccRender({ isactive: n && n.value === 'true' ? 'true' : 'false', hasvalue: 'false' });
}
window.updateChatFieldDemo = updateChatFieldDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _ccInit() {
  updateChatFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'isactive', _specCards[k].isactive);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ccInit);
else _ccInit();
document.addEventListener('astro:page-load', _ccInit);
