/* Auto-extracted from assessment-src/components/toast-with-button.html.
 * Powers the live-preview dropdowns/toggles for the toast-with-button component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs toast-with-button
 */
/* ── Toast - With Button JS ─────────────────────────────────────────
   Pixel-accurate replica of node 27:53205 variants.
   330 wide, 8 radius, 1 border. Dark/light surfaces, description optional.
   Action button is the (deprecated) Button - Small/XS — white on dark, blue on light.
*/

function _toastWBEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function _toastWBRender(opts) {
  var type        = opts.type || 'default';
  var description = opts.description !== 'no';
  var label       = opts.label || 'Add label here';
  var desc        = opts.desc || 'Add description here.';
  var action      = opts.action || 'Label';

  var surfaceClass = (type === 'light') ? 'eb-preview-toastwb--light' : 'eb-preview-toastwb--default';
  var sizeClass    = description ? 'eb-preview-toastwb--has-desc' : 'eb-preview-toastwb--no-desc';
  var actionClass  = (type === 'default')
    ? 'eb-preview-toastwb__action eb-preview-toastwb__action--white'
    : 'eb-preview-toastwb__action eb-preview-toastwb__action--blue';

  var html = '<div class="eb-preview eb-preview-toastwb ' + surfaceClass + ' ' + sizeClass + '">';
  html += '<div class="eb-preview-toastwb__container">';
  html += '<div class="eb-preview-toastwb__text-container">';
  html += '<p class="eb-preview-toastwb__label">' + _toastWBEscape(label) + '</p>';
  if (description) {
    html += '<p class="eb-preview-toastwb__desc">' + _toastWBEscape(desc) + '</p>';
  }
  html += '</div>';
  html += '<div class="eb-preview-toastwb__action-slot">';
  html += '<div class="' + actionClass + '">' + _toastWBEscape(action) + '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
}

function _toastWBContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _toastWBRender({ type:'default', description:'yes', label:'Transfer sent', desc:'to Juan Dela Cruz · ₱500.00', action:'Undo' }) +
    _toastWBRender({ type:'light',   description:'no',  label:'Message deleted', action:'Undo' }) +
    _toastWBRender({ type:'default', description:'yes', label:"Couldn't send money", desc:'Check your connection and try again.', action:'Retry' }) +
    _toastWBRender({ type:'light',   description:'yes', label:'Photo uploaded', desc:'Tap to see it in your gallery.', action:'View' }) +
  '</div>';
}

function _toastWithButtonUpdate() {
  var type    = document.getElementById('toast-with-button-ctrl-type');
  var desc    = document.getElementById('toast-with-button-ctrl-description');
  var preview = document.getElementById('toast-with-button-demo-preview');
  if (!preview) return;
  preview.innerHTML = _toastWBRender({
    type:        type ? type.value : 'default',
    description: desc ? desc.value : 'yes',
    label:       'Add label here',
    desc:        'Add description here.',
    action:      'Label'
  });
}

/* ── Toast - With Button Spec Cards (canonical wiring) ────────── */
var _specCards = {
  darkdesc: { theme: 'default', description: 'yes' }
};
window._specCards = _specCards;

var _toastWBSpecPreviewId = {
  darkdesc: 'toast-with-button-spec-1'
};

function _toastWBRenderSpec(cardKey) {
  var card = _specCards[cardKey];
  if (!card) return;
  var host = document.getElementById(_toastWBSpecPreviewId[cardKey]);
  if (!host) return;
  host.innerHTML = _toastWBRender({
    type:        card.theme,
    description: card.description,
    label:       'Add label here',
    desc:        'Add description here.',
    action:      'Label'
  });
}

function buildSwiftSnippet(type, card) {
  var lines = [];
  lines.push('EBToast("Removed from favorites")');
  if (card.theme === 'light') lines.push('    .ebTheme(.light)');
  else                        lines.push('    .ebTheme(.dark)');
  if (card.description === 'yes') lines.push('    .ebSupportingText("Tap undo to revert")');
  lines.push('    .ebAction("Undo", action: { })');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var theme = card.theme === 'light' ? 'Light' : 'Dark';
  var lines = [];
  lines.push('EBToast(');
  lines.push('    message = "Removed from favorites",');
  if (card.description === 'yes') lines.push('    supportingText = "Tap undo to revert",');
  lines.push('    theme = EBToastTheme.' + theme + ',');
  lines.push('    action = EBToastAction("Undo") { }');
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

  /* Re-render preview */
  _toastWBRenderSpec(cardStyle);

  /* Sync prop readouts */
  ['theme','description'].forEach(function (p) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (el) el.textContent = card[p];
  });

  /* Update DEV code */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
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

function _toastWithButtonInit() {
  var ctx = document.getElementById('toast-with-button-context-preview');
  if (ctx) ctx.innerHTML = _toastWBContextMarkup();
  _toastWithButtonUpdate();

  Object.keys(_specCards).forEach(function (k) {
    _toastWBRenderSpec(k);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toastWithButtonInit);
else _toastWithButtonInit();

/* ── Re-init after Astro view-transition swaps ─────────────── */
document.addEventListener('astro:page-load', _toastWithButtonInit);
