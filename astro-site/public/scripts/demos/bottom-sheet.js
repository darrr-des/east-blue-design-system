/* Bottom Sheet — live preview + spec cards.
 * Set 5304:32717 (2026 Working File): TitleAlignment = Left | Center ×
 * FooterOrientation = Vertical | Horizontal × hasSupportingText ×
 * hasDescription — 8 built variants (Center takes the Description subtitle
 * only, never the supporting text).
 *
 * Read off 5304:32718 (Left · Vertical · Description, 360 × 404),
 * 5304:32755 (Center, 378), 5377:35367 (supporting text, 398) and
 * 5304:32769 (Horizontal footer, 342); checked against export_node_as_image.
 * Above-Title-Slot and Content-Slot ship empty; Leading-Slot holds a 32 px
 * Placeholder, Trailing-Slot the 24 px Close, Footer-Slot two Button -
 * Large/Medium instances.
 */

function _bsEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Trailing-Slot › Close — get_svg on 5304:32730 (drawn at 80% opacity). */
function _bsClose() {
  return '<svg class="eb-preview-bs__close" viewBox="0 0 24 24" aria-hidden="true"><g opacity="0.8"><path d="M18.3652 4.36517C18.7166 4.01369 19.2871 4.01369 19.6386 4.36517C19.9897 4.71667 19.9899 5.28726 19.6386 5.6386L13.2753 12.0019L19.6386 18.3652C19.9897 18.7167 19.9899 19.2873 19.6386 19.6386C19.2873 19.9899 18.7167 19.9897 18.3652 19.6386L12.0019 13.2753L5.6386 19.6386C5.28726 19.9899 4.71667 19.9897 4.36517 19.6386C4.01369 19.2871 4.01369 18.7166 4.36517 18.3652L10.7284 12.0019L4.36517 5.6386C4.01369 5.28713 4.01369 4.71664 4.36517 4.36517C4.71664 4.01369 5.28713 4.01369 5.6386 4.36517L12.0019 10.7284L18.3652 4.36517Z" fill="currentColor"/></g></svg>';
}

function _bsOn(v, def) { return String(v == null ? def : v) === 'true'; }

/* opts: { align: left|center, footer: vertical|horizontal, hasSupportingText, hasDescription,
           preamble, title, description, message, primary, tertiary } */
function _bsRender(opts) {
  var align = opts.align === 'center' ? 'center' : 'left';
  var footer = opts.footer === 'horizontal' ? 'horizontal' : 'vertical';
  var supporting = align === 'left' && _bsOn(opts.hasSupportingText, 'false');
  var description = _bsOn(opts.hasDescription, 'true');
  var preamble = opts.preamble || 'Preamble here...';
  var title = opts.title || 'Title here of the header...';
  var desc = opts.description || (align === 'center' ? 'This is description' : 'This is a body description');
  var message = opts.message || 'This is a supporting text';
  var primary = opts.primary || 'Label', tertiary = opts.tertiary || 'Label';

  var cls = 'eb-preview eb-preview-bs eb-preview-bs--' + align + ' eb-preview-bs--' + footer;
  var html = '<div class="' + cls + '">';
  html += '<div class="eb-preview-bs__handle"><span></span></div>';
  html += '<div class="eb-preview-bs__header"><div class="eb-preview-bs__above"></div><div class="eb-preview-bs__titlerow">';
  if (align === 'left') html += '<span class="eb-preview-bs__leading" aria-hidden="true"></span>';
  html += '<div class="eb-preview-bs__titleblock"><p class="eb-preview-bs__preamble">' + _bsEscape(preamble) + '</p><p class="eb-preview-bs__title">' + _bsEscape(title) + '</p>';
  if (supporting) html += '<p class="eb-preview-bs__message">' + _bsEscape(message) + '</p>';
  html += '</div>';
  if (align === 'left') html += _bsClose();
  html += '</div></div>';
  if (description) html += '<p class="eb-preview-bs__description">' + _bsEscape(desc) + '</p>';
  html += '<div class="eb-preview-bs__content"></div>';
  html += '<div class="eb-preview-bs__footer">';
  if (footer === 'horizontal') html += '<span class="eb-preview-bs__button eb-preview-bs__button--tertiary">' + _bsEscape(tertiary) + '</span><span class="eb-preview-bs__button eb-preview-bs__button--primary">' + _bsEscape(primary) + '</span>';
  else html += '<span class="eb-preview-bs__button eb-preview-bs__button--primary">' + _bsEscape(primary) + '</span><span class="eb-preview-bs__button eb-preview-bs__button--tertiary">' + _bsEscape(tertiary) + '</span>';
  html += '</div></div>';
  return html;
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _bottomSheetUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('bs-demo-preview');
  if (!el) return;
  el.innerHTML = _bsRender({
    align:             getVal('bs-ctrl-align', 'left'),
    footer:            getVal('bs-ctrl-footer', 'vertical'),
    hasSupportingText: getVal('bs-ctrl-hassupportingtext', 'false'),
    hasDescription:    getVal('bs-ctrl-hasdescription', 'true'),
    preamble:          getVal('bs-ctrl-preamble', ''),
    title:             getVal('bs-ctrl-title', ''),
    description:       getVal('bs-ctrl-description', ''),
    message:           getVal('bs-ctrl-message', '')
  });
}
window._bottomSheetUpdate = _bottomSheetUpdate;

/* ── Spec cards — one per TitleAlignment value, keyed by demoKey ────── */
var _specCards = {
  'left':   { align: 'left',   footer: 'vertical', hasSupportingText: 'false', hasDescription: 'true' },
  'center': { align: 'center', footer: 'vertical', hasSupportingText: 'false', hasDescription: 'true' }
};
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var align = c.align === 'center' ? 'center' : 'leading', footer = c.footer === 'horizontal' ? 'horizontal' : 'vertical';
  var supporting = c.align !== 'center' && _bsOn(c.hasSupportingText, 'false'), description = _bsOn(c.hasDescription, 'true');
  var cap = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  if (lang === 'swift') {
    var s = 'EBBottomSheet(isPresented: $show) {\n    EBSheetHeader("Title here of the header...", preamble: "Preamble here...")';
    if (supporting) s += '\n        .ebSupportingText("This is a supporting text")';
    if (description) s += '\n    EBSheetDescription("This is a body description")';
    s += '\n    content\n}\n    .ebTitleAlignment(.' + align + ')\n    .ebFooter(.' + footer + ') {\n        EBButton("Label") { }\n        EBTextButton("Label") { }\n    }';
    return s;
  }
  var k = ['    title = "Title here of the header..."', '    preamble = "Preamble here..."'];
  if (supporting) k.push('    supportingText = "This is a supporting text"');
  if (description) k.push('    description = "This is a body description"');
  k.push('    titleAlignment = EBTitleAlignment.' + cap(align === 'leading' ? 'leading' : 'center'), '    footerOrientation = EBFooterOrientation.' + cap(footer), '    footer = { EBButton("Label") { }; EBTextButton("Label") { } }', '    content = { … }');
  return 'EBBottomSheet(\n' + k.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('bs-spec-' + cardKey);
  if (host) host.innerHTML = _bsRender(card);
}
window.updateSpecCard = updateSpecCard;

function _bsInit() {
  _bottomSheetUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'footer', _specCards[k].footer); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bsInit);
else _bsInit();
document.addEventListener('astro:page-load', _bsInit);
