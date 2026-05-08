/* Auto-extracted from assessment-src/components/overlay.html.
 * Powers the live-preview dropdowns/toggles for the overlay component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs overlay
 */
/* ── Overlay JS ─────────────────────────────────────────────────── */
/* Renders the Overlay (scrim) over a miniature phone-like surface so
   the translucent 56% dim is actually visible. Uses class-based
   primitives from styles.css (.eb-preview-overlay-stage*).            */

function _overlayStageMarkup(opts) {
  var surface = opts.surface || 'sheet';
  var bgTone  = opts.bg || 'light';
  var showDim = opts.dim !== false;

  // Background content — a fake app screen sitting behind the dim.
  var content =
    '<div class="eb-preview-overlay-stage__content">' +
      '<div class="eb-preview-overlay-stage__content-title eb-preview">Activity</div>' +
      '<div class="eb-preview-overlay-stage__card"></div>' +
      '<div class="eb-preview-overlay-stage__card"></div>' +
      '<div class="eb-preview-overlay-stage__card"></div>' +
      '<div class="eb-preview-overlay-stage__card"></div>' +
    '</div>';

  var dim = showDim ? '<div class="eb-preview-overlay-stage__dim"></div>' : '';

  var floatingSurface = '';
  if (surface === 'sheet') {
    floatingSurface =
      '<div class="eb-preview-overlay-stage__sheet eb-preview">' +
        '<div class="eb-preview-overlay-stage__handle"></div>' +
        '<p class="eb-preview-overlay-stage__sheet-title">Send Money</p>' +
        '<p class="eb-preview-overlay-stage__sheet-body">Choose a recipient from your contacts or enter a mobile number.</p>' +
        '<div class="eb-preview-overlay-stage__sheet-btn">Continue</div>' +
      '</div>';
  } else if (surface === 'dialog') {
    floatingSurface =
      '<div class="eb-preview-overlay-stage__dialog eb-preview">' +
        '<p class="eb-preview-overlay-stage__sheet-title">Confirm transfer?</p>' +
        '<p class="eb-preview-overlay-stage__sheet-body">You are about to send ₱1,500.00 to Juan Dela Cruz. This cannot be undone.</p>' +
        '<div class="eb-preview-overlay-stage__dialog-actions">' +
          '<div class="eb-preview-overlay-stage__dialog-btn eb-preview-overlay-stage__dialog-btn--ghost">Cancel</div>' +
          '<div class="eb-preview-overlay-stage__dialog-btn eb-preview-overlay-stage__dialog-btn--primary">Confirm</div>' +
        '</div>' +
      '</div>';
  }

  var stageBg = bgTone === 'dark'  ? 'background:#0A1628;' :
                bgTone === 'image' ? 'background:linear-gradient(135deg,#4876D6 0%,#6B93E5 100%);' : '';

  return '<div class="eb-preview-overlay-stage" ' + (stageBg ? 'style="' + stageBg + '"' : '') + '>' +
    content + dim + floatingSurface +
  '</div>';
}

function _overlayUpdate() {
  var bg      = document.getElementById('overlay-ctrl-bg');
  var surface = document.getElementById('overlay-ctrl-surface');
  var preview = document.getElementById('overlay-demo-preview');
  if (!preview) return;
  preview.innerHTML = _overlayStageMarkup({
    bg: bg ? bg.value : 'light',
    surface: surface ? surface.value : 'sheet',
    dim: true
  });
}

/* ── Overlay Spec Cards (canonical) ──────────────────────────────── */
var _overlaySpecCards = {
  strong: { surface: 'sheet', bg: 'light' }
};
var _specCards = _overlaySpecCards;
window._specCards = _specCards;

var slug = 'overlay';

function buildSwiftSnippet(type, card) {
  return getSnippet(type, 'swift', card);
}
function buildComposeSnippet(type, card) {
  return getSnippet(type, 'compose', card);
}
function getSnippet(type, lang, card) {
  if (lang === 'swift') {
    return 'EBOverlay(isPresented: $showSheet)\n    .ebStrength(.strong) {\n    // content shown above the scrim\n}';
  }
  return 'EBOverlay(\n    visible = showSheet,\n    onDismiss = { },\n    strength = EBOverlayStrength.Strong\n) {\n    // content shown above the scrim\n}';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _overlaySpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update the stage preview inside the spec card */
  var specPreview = document.getElementById('overlay-spec-preview');
  if (specPreview) {
    specPreview.innerHTML = _overlayStageMarkup({
      bg: card.bg || 'light',
      surface: card.surface || 'sheet',
      dim: true
    });
  }

  /* Update Properties row text via [data-sp="<cardStyle>-<prop>"] */
  var spVal = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spVal) {
    var hexEl = spVal.querySelector('.spec-prop-hex');
    if (hexEl) hexEl.textContent = value;
    else spVal.textContent = value;
  }

  /* Update DEV code via [data-code-content="<cardStyle>"]. Always run. */
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

function _overlayInit() {
  var ctx = document.getElementById('overlay-context-preview');
  if (ctx) ctx.innerHTML = _overlayStageMarkup({bg:'light', surface:'sheet', dim:true});
  _overlayUpdate();
  var spec = document.getElementById('overlay-spec-preview');
  if (spec) spec.innerHTML = _overlayStageMarkup({bg:'light', surface:'sheet', dim:true});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _overlayInit);
else _overlayInit();

(function(){
  function reinit(){
    if (typeof _overlayInit === 'function') _overlayInit();
  }
  document.addEventListener('astro:page-load', reinit);
})();
