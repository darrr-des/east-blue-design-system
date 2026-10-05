/* Inline Text — TEST page demo script.
 *
 * Trial read of the Inline Text component set, independent of the existing
 * `inline-text` page: file pbxY8a2xcIfVZKxwnud9Xe (GCash DS · 2026 Working
 * File), set 4419:24515, read 18 September 2026.
 *
 * Two toolchains, each for what only it can return:
 *   · Figma REST (file_content:read) — the property panel (including the
 *     boolean hasTrailingElement), auto-layout padding / gap / alignment,
 *     text-style names, bound variable ids, and layer→property bindings.
 *   · Talk To Figma plugin — PNG and SVG exports, so the preview is
 *     checked against what draws, not against the layer tree.
 *
 * Schema (16 of 16 combinations built):
 *   Type               = Copy Icon | Badge | Checkmark | Slot     (variant)
 *   hasDescription     = True | False                            (variant)
 *   hasTextLink        = True | False                            (variant)
 *   hasTrailingElement = true | false   (boolean → Trailing Elements.visible)
 *
 * The two icons below are the SVG exports, stroke colour and width as read.
 */
var TIT_PROPS = {
  type:               { values: [['copy', 'Copy Icon'], ['badge', 'Badge'], ['check', 'Checkmark'], ['slot', 'Slot']] },
  hasDescription:     { values: [['true', 'True'], ['false', 'False']] },
  hasTextLink:        { values: [['true', 'True'], ['false', 'False']] },
  hasTrailingElement: { values: [['true', 'True'], ['false', 'False']] }
};

/* Copy — I5643:34699;4419:17339 exported as SVG: two stroked sheets,
 * #445C85 at 1.8, the back sheet at 40% opacity. */
var TIT_COPY = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">'
  + '<path opacity="0.4" d="M8 7H7.4C6.6268 7 6 7.6268 6 8.4V18.6C6 19.3732 6.6268 20 7.4 20H13.6C14.3732 20 15 19.3732 15 18.6V17.1111" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
  + '<path d="M18 15.6V5.4C18 4.6268 17.3732 4 16.6 4H10.4C9.6268 4 9 4.6268 9 5.4V15.6C9 16.3732 9.6268 17 10.4 17H16.6C17.3732 17 18 16.3732 18 15.6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
  + '</svg>';

/* Checkmark — I5652:37195;4419:17343 exported as SVG: one path, #445C85 at 3. */
var TIT_CHECK = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">'
  + '<path d="M3 8L6.5 11L13 5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
  + '</svg>';

function _titOn(v) { return v === true || v === 'true'; }

/* One Inline Text. `o` carries the four properties as strings. */
function _titRender(o) {
  var type = (o.type === 'badge' || o.type === 'check' || o.type === 'slot') ? o.type : 'copy';
  var desc = o.hasDescription === undefined ? true : _titOn(o.hasDescription);
  var link = o.hasTextLink === undefined ? true : _titOn(o.hasTextLink);
  var trail = o.hasTrailingElement === undefined ? true : _titOn(o.hasTrailingElement);

  var trailing = '';
  if (trail) {
    if (type === 'copy') trailing = '<span class="eb-preview-tit__trail eb-preview-tit__trail--icon">' + TIT_COPY + '</span>';
    else if (type === 'check') trailing = '<span class="eb-preview-tit__trail eb-preview-tit__trail--check">' + TIT_CHECK + '</span>';
    else if (type === 'badge') trailing = '<span class="eb-preview-tit__trail"><span class="eb-preview-tit__badge">Label</span></span>';
    /* Type=Slot: an empty Slot, 24 × 24 of reserved space, nothing drawn. */
    else trailing = '<span class="eb-preview-tit__trail eb-preview-tit__trail--slot"></span>';
  }

  var main = '<span class="eb-preview-tit__main">'
    + '<span class="eb-preview-tit__label">Label</span>'
    + '<span class="eb-preview-tit__value-group"><span class="eb-preview-tit__value">0.00</span>' + trailing + '</span>'
    + '</span>';

  /* SupportingRow is removed, not hidden, when both are off. With only the
   * link it right-aligns (MAX); with both it carries 2px of right padding. */
  var support = '';
  if (desc || link) {
    var rowCls = 'eb-preview-tit__support' + (desc && link ? ' eb-preview-tit__support--both' : '') + (!desc ? ' eb-preview-tit__support--end' : '');
    support = '<span class="' + rowCls + '">'
      + (desc ? '<span class="eb-preview-tit__desc">Description goes here</span>' : '')
      + (link ? '<span class="eb-preview-tit__link">CTA</span>' : '')
      + '</span>';
  }

  return '<div class="eb-preview eb-preview-tit eb-preview-tit--' + type + '">' + main + support + '</div>';
}

/* Every value of one property, each labelled, the others taken from `card`. */
function _titExamples(cardKey, card) {
  var spec = TIT_PROPS[cardKey];
  if (!spec) return '';
  var out = '';
  for (var i = 0; i < spec.values.length; i++) {
    var o = {};
    for (var k in card) o[k] = card[k];
    o[cardKey] = spec.values[i][0];
    out += '<figure class="eb-example">' + _titRender(o)
      + '<figcaption class="eb-example__label">' + spec.values[i][1] + '</figcaption></figure>';
  }
  return '<div class="eb-examples">' + out + '</div>';
}

var _specCards = {
  type:               { type: 'copy', hasDescription: 'true', hasTextLink: 'true', hasTrailingElement: 'true' },
  hasDescription:     { type: 'copy', hasDescription: 'true', hasTextLink: 'true', hasTrailingElement: 'true' },
  hasTextLink:        { type: 'copy', hasDescription: 'true', hasTextLink: 'true', hasTrailingElement: 'true' },
  hasTrailingElement: { type: 'copy', hasDescription: 'true', hasTextLink: 'true', hasTrailingElement: 'true' }
};

/* ── Live preview panel ───────────────────────────────────────────── */
function _titRead() {
  var g = function (id) { return document.getElementById(id); };
  var chk = function (id) { return g(id) ? (g(id).checked ? 'true' : 'false') : 'true'; };
  return {
    type: g('tit-ctrl-type') ? g('tit-ctrl-type').value : 'copy',
    hasDescription: chk('tit-ctrl-hasdescription'),
    hasTextLink: chk('tit-ctrl-hastextlink'),
    hasTrailingElement: chk('tit-ctrl-hastrailing')
  };
}

function _titUpdate() {
  var host = document.getElementById('tit-demo-preview');
  if (host) host.innerHTML = _titRender(_titRead());
}
window._titUpdate = _titUpdate;

/* ── DEV code — component API, never container code ───────────────── */
function _titSnippet(lang, o, focus) {
  var type = o.type || 'copy';
  var desc = _titOn(o.hasDescription === undefined ? true : o.hasDescription);
  var link = _titOn(o.hasTextLink === undefined ? true : o.hasTextLink);
  var trail = _titOn(o.hasTrailingElement === undefined ? true : o.hasTrailingElement);
  var note = function (prop, text) { return focus === prop ? '   // ' + text : ''; };
  var sw = { copy: '.copyIcon', badge: '.badge("Label")', check: '.checkmark', slot: '.custom { … }' };
  var kt = { copy: 'EBInlineTextTrailing.CopyIcon', badge: 'EBInlineTextTrailing.Badge("Label")', check: 'EBInlineTextTrailing.Checkmark', slot: 'EBInlineTextTrailing.Custom { }' };

  if (lang === 'swift') {
    var s = 'EBInlineText("Label", value: "0.00")';
    if (desc) s += '\n    .ebDescription("Description goes here")' + note('hasDescription', 'False: omit');
    else if (focus === 'hasDescription') s += '\n    // True: .ebDescription("…")';
    if (link) s += '\n    .ebLink("CTA") { }' + note('hasTextLink', 'False: omit');
    else if (focus === 'hasTextLink') s += '\n    // True: .ebLink("CTA") { }';
    if (trail) s += '\n    .ebTrailing(' + sw[type] + ')' + note('type', 'or .copyIcon · .badge · .checkmark · .custom');
    else s += note('hasTrailingElement', 'true: .ebTrailing(…)');
    return s;
  }

  var k = 'EBInlineText(\n    label = "Label",\n    value = "0.00"';
  if (desc) k += ',\n    description = "Description goes here"' + note('hasDescription', 'False: omit');
  if (link) k += ',\n    link = EBTextLink("CTA") { }' + note('hasTextLink', 'False: omit');
  if (trail) k += ',\n    trailing = ' + kt[type] + note('type', 'or CopyIcon · Badge · Checkmark · Custom');
  else if (focus === 'hasTrailingElement') k += '\n    // true: trailing = …';
  k += '\n)';
  return k;
}
window._titSnippet = _titSnippet;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var o = {};
  for (var k in c) o[k] = c[k];
  if (TIT_PROPS[cardKey] && !(cardKey in o)) o[cardKey] = TIT_PROPS[cardKey].values[0][0];
  return _titSnippet(lang, o, cardKey);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('tit-spec-' + cardKey);
  if (host) host.innerHTML = _titExamples(cardKey, card);
}
window.updateSpecCard = updateSpecCard;

function _titInit() {
  _titUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var first = Object.keys(_specCards[k])[0];
    updateSpecCard(k, first, _specCards[k][first]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _titInit);
else _titInit();
document.addEventListener('astro:page-load', _titInit);
