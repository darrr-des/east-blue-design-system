/* Inline Text — live preview + spec cards.
 * Set 4419:24515 (2026 Working File): Type = Copy Icon | Badge | Checkmark |
 * Slot × hasDescription × hasTextLink = 16 variants. The default variant is
 * Type=Copy Icon, hasDescription=True, hasTextLink=True (4419:20913).
 *
 * Read off the variants and checked against export_node_as_image:
 *   Copy Icon 5643:34623 · Badge 5652:37006 · Checkmark 5652:37217 ·
 *   Slot 5652:37590 (all hasDescription=False, hasTextLink=False) and
 *   4419:20913 for the SupportingRow.
 */

function _itxEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Trailing Elements › Copy — paths and stroke from get_svg(5643:34711). */
function _itxCopyIcon() {
  return '<svg class="eb-preview-itx__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path opacity="0.4" d="M8 7H7.4C6.6268 7 6 7.6268 6 8.4V18.6C6 19.3732 6.6268 20 7.4 20H13.6C14.3732 20 15 19.3732 15 18.6V17.1111" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M18 15.6V5.4C18 4.6268 17.3732 4 16.6 4H10.4C9.6268 4 9 4.6268 9 5.4V15.6C9 16.3732 9.6268 17 10.4 17H16.6C17.3732 17 18 16.3732 18 15.6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' +
  '</svg>';
}

/* Trailing Elements › Checkmark — path and stroke from get_svg(5652:37222). */
function _itxCheckIcon() {
  return '<svg class="eb-preview-itx__icon eb-preview-itx__icon--check" viewBox="0 4 16 16" fill="none" aria-hidden="true">' +
    '<path d="M3 12L6.5 15L13 9" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _itxTrailing(type, badge) {
  if (type === 'badge') return '<span class="eb-preview-itx__badge">' + _itxEscape(badge) + '</span>';
  if (type === 'checkmark') return _itxCheckIcon();
  if (type === 'slot') return '<span class="eb-preview-itx__slot" aria-hidden="true"></span>';
  return _itxCopyIcon();
}

/* opts: { type: copy-icon|badge|checkmark|slot, hasDescription: 'true'|'false',
           hasTextLink: 'true'|'false', label, value, description, link, badge } */
function _itxRender(opts) {
  var type = opts.type || 'copy-icon';
  var hasDescription = String(opts.hasDescription == null ? 'true' : opts.hasDescription) === 'true';
  var hasTextLink = String(opts.hasTextLink == null ? 'true' : opts.hasTextLink) === 'true';
  var label = opts.label || 'Label';
  var value = opts.value || '0.00';
  var description = opts.description || 'Description goes here';
  var link = opts.link || 'CTA';
  var badge = opts.badge || 'Label';

  var html = '<div class="eb-preview eb-preview-itx eb-preview-itx--' + type + '">';
  html += '<div class="eb-preview-itx__main">';
  html += '<p class="eb-preview-itx__label">' + _itxEscape(label) + '</p>';
  html += '<div class="eb-preview-itx__value-group"><span class="eb-preview-itx__value">' + _itxEscape(value) + '</span>' + _itxTrailing(type, badge) + '</div>';
  html += '</div>';
  if (hasDescription || hasTextLink) {
    html += '<div class="eb-preview-itx__supporting">';
    html += '<span class="eb-preview-itx__description">' + (hasDescription ? _itxEscape(description) : '') + '</span>';
    if (hasTextLink) html += '<span class="eb-preview-itx__link">' + _itxEscape(link) + '</span>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

/* ── Overview live preview — the three Figma properties + text slots ── */
function _itxUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('itx-demo-preview');
  if (!preview) return;
  preview.innerHTML = _itxRender({
    type:           getVal('itx-ctrl-type', 'copy-icon'),
    hasDescription: getVal('itx-ctrl-hasdescription', 'true'),
    hasTextLink:    getVal('itx-ctrl-hastextlink', 'true'),
    label:          getVal('itx-ctrl-label', 'Label'),
    value:          getVal('itx-ctrl-value', '0.00'),
    description:    getVal('itx-ctrl-description', 'Description goes here'),
    link:           getVal('itx-ctrl-link', 'CTA'),
    badge:          getVal('itx-ctrl-badge', 'Label')
  });
}
window._itxUpdate = _itxUpdate;

/* ── Spec cards — one per Type value, keyed by demoKey ──────────────── */
var _specCards = {
  'copy-icon': { type: 'copy-icon', hasDescription: 'true', hasTextLink: 'true' },
  'badge':     { type: 'badge',     hasDescription: 'true', hasTextLink: 'true' },
  'checkmark': { type: 'checkmark', hasDescription: 'true', hasTextLink: 'true' },
  'slot':      { type: 'slot',      hasDescription: 'true', hasTextLink: 'true' }
};
window._specCards = _specCards;

/* Component-API snippets that follow the panel — plain text. */
function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var type = c.type || 'copy-icon';
  var hasDescription = String(c.hasDescription) !== 'false';
  var hasTextLink = String(c.hasTextLink) !== 'false';
  if (lang === 'swift') {
    var trailing = { 'copy-icon': '.copy', 'badge': '.badge("Label")', 'checkmark': '.checkmark', 'slot': '.slot { Image("custom") }' }[type];
    var s = 'EBInlineText("Label", value: "0.00")\n    .ebTrailing(' + trailing + ')';
    if (hasDescription) s += '\n    .ebDescription("Description goes here")';
    if (hasTextLink) s += '\n    .ebTextLink("CTA") { }';
    return s;
  }
  var kt = { 'copy-icon': 'EBInlineTextTrailing.Copy', 'badge': 'EBInlineTextTrailing.Badge("Label")', 'checkmark': 'EBInlineTextTrailing.Checkmark', 'slot': 'EBInlineTextTrailing.Slot { Icon(…) }' }[type];
  var lines = ['    label = "Label"', '    value = "0.00"', '    trailing = ' + kt];
  if (hasDescription) lines.push('    description = "Description goes here"');
  if (hasTextLink) lines.push('    textLink = EBTextLink("CTA") { }');
  return 'EBInlineText(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('itx-spec-' + cardKey);
  if (host) host.innerHTML = _itxRender(card);
}
window.updateSpecCard = updateSpecCard;

function _itxInit() {
  _itxUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'type', _specCards[k].type); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _itxInit);
else _itxInit();
document.addEventListener('astro:page-load', _itxInit);
