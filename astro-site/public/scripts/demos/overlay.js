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

function _overlaySpecMode(mode) {
  var btns = document.querySelectorAll('#panel-overlay .mode-toggle-btn');
  btns.forEach(function(b) { b.classList.remove('active'); });
  var sel = document.querySelector('#panel-overlay .mode-toggle-btn[onclick*="\'' + mode + '\'"]');
  if (sel) sel.classList.add('active');
  var el = document.getElementById('overlay-spec-preview');
  if (!el) return;
  if (mode === 'dev') {
    el.innerHTML =
      '<div class="dev-spec-block">' +
        '<div class="dev-spec-row"><span class="dev-spec-key">name</span><span class="dev-spec-val">Overlay</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">node</span><span class="dev-spec-val">47:329691</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">dim.fill</span><span class="dev-spec-val">bg/color-bg-overlay-strong · #020E228F</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">dim.size</span><span class="dev-spec-val">Fill × Fill (recommended)</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">radius</span><span class="dev-spec-val">0</span></div>' +
      '</div>';
  } else {
    el.innerHTML = _overlayStageMarkup({bg:'light', surface:'sheet', dim:true});
  }
}

function _overlayInit() {
  var ctx = document.getElementById('overlay-context-preview');
  if (ctx) ctx.innerHTML = _overlayStageMarkup({bg:'light', surface:'sheet', dim:true});
  _overlayUpdate();
  var spec = document.getElementById('overlay-spec-preview');
  if (spec) spec.innerHTML = _overlayStageMarkup({bg:'light', surface:'sheet', dim:true});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _overlayInit);
else _overlayInit();
