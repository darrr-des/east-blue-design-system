/* Sample Component — demo script for the framework reference page.
 *
 * SAMPLE DATA. This component does not exist in Figma; the set id 1234:5678
 * and every value below are invented so the page can show what a finished
 * assessment looks like. Nothing here is read from a design file.
 *
 * Schema the sample assumes:
 *   Style = Filled | Outlined · State = Default | Pressed | Disabled
 *   Size  = Medium | Small    · hasBadge (boolean)
 *   Title (text) · Description (text) · Icon-Slot (slot)
 * 2 × 3 × 2 = 12 variants.
 *
 * Style tab = Examples: one card per Figma property. The card draws every
 * value of its property, labelled; its panel holds the other properties.
 */
var SMP_ICON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.4 6.8 19.2l1-5.9L3.5 9.2l5.9-.8z" fill="currentColor"/></svg>';
var SMP_PROPS = {
  style:    { values: [['filled', 'Filled'], ['outlined', 'Outlined']] },
  state:    { values: [['default', 'Default'], ['pressed', 'Pressed'], ['disabled', 'Disabled']] },
  size:     { values: [['medium', 'Medium'], ['small', 'Small']] },
  hasBadge: { values: [['true', 'True'], ['false', 'False']] }
};

function _smpEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* One tile. */
function _smpRender(o) {
  var style = o.style === 'outlined' ? 'outlined' : 'filled';
  var state = o.state === 'pressed' || o.state === 'disabled' ? o.state : 'default';
  var size = o.size === 'small' ? 'small' : 'medium';
  var badge = o.hasBadge === 'true' || o.hasBadge === true;
  var title = o.title || 'Title';
  var desc = o.description || 'Description';
  return '<div class="eb-preview eb-preview-smp eb-preview-smp--' + style + ' eb-preview-smp--' + state + ' eb-preview-smp--' + size + '">'
    + '<span class="eb-preview-smp__icon">' + SMP_ICON + '</span>'
    + '<span class="eb-preview-smp__text">'
    + '<span class="eb-preview-smp__title">' + _smpEsc(title) + '</span>'
    + '<span class="eb-preview-smp__desc">' + _smpEsc(desc) + '</span>'
    + '</span>'
    + (badge ? '<span class="eb-preview-smp__badge">New</span>' : '')
    + '</div>';
}

/* Every value of one property, each labelled, the other properties from `card`. */
function _smpExamples(prop, card) {
  var def = SMP_PROPS[prop];
  if (!def) return _smpRender(card || {});
  return '<div class="eb-examples">' + def.values.map(function (val) {
    var o = {};
    for (var k in card) o[k] = card[k];
    o[prop] = val[0];
    return '<figure class="eb-example">' + _smpRender(o) + '<figcaption class="eb-example__label">' + val[1] + '</figcaption></figure>';
  }).join('') + '</div>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _smpUpdate() {
  var val = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var chk = function (id, fallback) { var el = document.getElementById(id); return el ? el.checked : fallback; };
  var host = document.getElementById('smp-demo-preview');
  if (!host) return;
  host.innerHTML = _smpRender({
    style: val('smp-ctrl-style', 'filled'),
    state: val('smp-ctrl-state', 'default'),
    size: val('smp-ctrl-size', 'medium'),
    hasBadge: chk('smp-ctrl-hasbadge', true)
  });
}
window._smpUpdate = _smpUpdate;

/* ── Examples cards — one per property; state = the other properties ── */
var _specCards = {
  style:    { state: 'default', size: 'medium', hasBadge: 'true' },
  state:    { style: 'filled', size: 'medium', hasBadge: 'true' },
  size:     { style: 'filled', state: 'default', hasBadge: 'true' },
  hasBadge: { style: 'filled', state: 'default', size: 'medium' }
};
window._specCards = _specCards;

/* The full call for one configuration — shared by the DEV code and the
   Code tab's usage snippets. `focus` names the card's own property; its
   alternatives are written as a trailing comment on that line. */
function _smpSnippet(lang, o, focus) {
  var style = o.style === 'outlined' ? 'outlined' : 'filled';
  var size = o.size === 'small' ? 'small' : 'medium';
  var badge = o.hasBadge === 'true' || o.hasBadge === true;
  var state = o.state === 'pressed' || o.state === 'disabled' ? o.state : 'default';
  var note = function (prop, text) { return focus === prop ? '  // ' + text : ''; };
  if (lang === 'swift') {
    var s = 'EBSampleComponent("Title")\n    .ebDescription("Description")\n'
      + '    .ebStyle(.' + style + ')' + note('style', 'or .' + (style === 'filled' ? 'outlined' : 'filled')) + '\n'
      + '    .ebSize(.' + size + ')' + note('size', 'or .' + (size === 'medium' ? 'small' : 'medium')) + '\n'
      + (badge ? '    .ebBadge("New")' + note('hasBadge', 'hasBadge false: omit') + '\n' : (focus === 'hasBadge' ? '    // hasBadge true: .ebBadge("New")\n' : ''))
      + '    .ebIcon(Image(systemName: "star.fill"))';
    if (state === 'disabled') s += '\n    .disabled(true)' + note('state', 'Default: omit · Pressed: the platform\'s own highlight');
    else if (focus === 'state') s += '\n    // Pressed: the platform\'s own highlight · Disabled: .disabled(true)';
    return s;
  }
  var k = 'EBSampleComponent(\n    title = "Title",\n    description = "Description",\n'
    + '    style = EBSampleStyle.' + (style === 'outlined' ? 'Outlined' : 'Filled') + ',' + note('style', 'or ' + (style === 'filled' ? 'Outlined' : 'Filled')) + '\n'
    + '    size = EBSampleSize.' + (size === 'small' ? 'Small' : 'Medium') + ',' + note('size', 'or ' + (size === 'medium' ? 'Small' : 'Medium')) + '\n'
    + '    badge = ' + (badge ? '"New"' : 'null') + ',' + note('hasBadge', badge ? 'hasBadge false: null' : 'hasBadge true: "New"') + '\n'
    + '    icon = { Icon(Icons.Filled.Star, null) }';
  if (state === 'disabled') k += ',\n    enabled = false' + note('state', 'Default: omit · Pressed: the platform\'s own ripple');
  else if (focus === 'state') k += '\n    // Pressed: the platform\'s own ripple · Disabled: enabled = false';
  k += '\n)';
  return k;
}
window._smpSnippet = _smpSnippet;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var o = {};
  for (var k in c) o[k] = c[k];
  if (SMP_PROPS[cardKey] && !(cardKey in o)) o[cardKey] = SMP_PROPS[cardKey].values[0][0];
  return _smpSnippet(lang, o, cardKey);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('smp-spec-' + cardKey);
  if (host) host.innerHTML = _smpExamples(cardKey, card);
}
window.updateSpecCard = updateSpecCard;

function _smpInit() {
  _smpUpdate();
  Object.keys(_specCards).forEach(function (k) { var first = Object.keys(_specCards[k])[0]; updateSpecCard(k, first, _specCards[k][first]); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _smpInit);
else _smpInit();
document.addEventListener('astro:page-load', _smpInit);
