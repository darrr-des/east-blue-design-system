/* Auto-extracted from assessment-src/components/progress-bar.html.
 * Powers the live-preview dropdowns/toggles for the progress-bar component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs progress-bar
 */
/* ── Progress Bar JS ────────────────────────────────────────────── */
/* Progress Bar — continuous 0–1 fill. Today Figma only ships 11
   decile variants; the preview here uses a continuous slider to
   show what the proposed parameterized component would render.     */

function _progressBarRender(opts) {
  var progress = typeof opts.progress === 'number' ? opts.progress : parseFloat(opts.progress);
  if (isNaN(progress)) progress = 0;
  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;

  var state = opts.state || 'determinate';
  var width = typeof opts.width === 'number' ? opts.width : 280;

  var fillColor;
  switch (state) {
    case 'success': fillColor = '#12AF80'; break;
    case 'error':   fillColor = '#D81E1E'; break;
    default:        fillColor = '#005CE5';
  }

  var fillPct = (progress * 100).toFixed(1) + '%';
  var indeterminate = state === 'indeterminate';

  var inner;
  if (indeterminate) {
    inner = '<span class="eb-preview-progress-bar__indeterminate" style="background:' + fillColor + ';"></span>';
  } else {
    inner = '<span class="eb-preview-progress-bar__fill" style="width:' + fillPct + ';background:' + fillColor + ';"></span>';
  }

  return '<div class="eb-preview eb-preview-progress-bar" role="progressbar"' +
    (indeterminate ? '' : ' aria-valuenow="' + Math.round(progress * 100) + '" aria-valuemin="0" aria-valuemax="100"') +
    ' style="width:' + width + 'px;">' +
    '<span class="eb-preview-progress-bar__track"></span>' +
    inner +
    '</div>';
}

function _progressBarListRow(label, progress, state) {
  return '<div class="eb-preview eb-preview-stack eb-preview-stack--start eb-preview-stack--gap-xs" style="padding:12px 0;">' +
    '<div style="display:flex;justify-content:space-between;width:280px;font:500 13px system-ui;color:#3C4A5C;">' +
      '<span>' + label + '</span>' +
      '<span style="color:#666;">' + (state === 'indeterminate' ? 'Loading…' : Math.round(progress * 100) + '%') + '</span>' +
    '</div>' +
    _progressBarRender({progress: progress, state: state || 'determinate', width: 280}) +
  '</div>';
}

function _progressBarContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm" style="padding:8px 0;">' +
    _progressBarListRow('ID verification',     0.30) +
    _progressBarListRow('Uploading document',  0.00, 'indeterminate') +
    _progressBarListRow('Payment confirmed',   1.00, 'success') +
    _progressBarListRow('Upload failed',       0.60, 'error') +
  '</div>';
}

function _progressBarUpdate() {
  var progressEl = document.getElementById('progress-bar-ctrl-progress');
  var stateEl    = document.getElementById('progress-bar-ctrl-state');
  var valueEl    = document.getElementById('progress-bar-ctrl-value');
  var preview    = document.getElementById('progress-bar-demo-preview');
  if (!preview) return;

  var raw = progressEl ? parseInt(progressEl.value, 10) : 45;
  if (isNaN(raw)) raw = 0;
  var progress = raw / 100;
  var state = stateEl ? stateEl.value : 'determinate';

  if (valueEl) {
    valueEl.textContent = state === 'indeterminate' ? '—' : raw + '%';
  }

  preview.innerHTML = _progressBarRender({progress: progress, state: state, width: 280});
}

/* ── Progress Bar Spec Cards (canonical) ─────────────────────────── */
var _progressBarSpecCards = {
  determinate: { state: 'determinate', progress: '60' }
};
var _specCards = _progressBarSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  return getSnippet(type, 'swift', card);
}
function buildComposeSnippet(type, card) {
  return getSnippet(type, 'compose', card);
}
function getSnippet(type, lang, card) {
  var pct = parseInt(card && card.progress ? card.progress : '60', 10);
  if (isNaN(pct)) pct = 60;
  var f = (pct / 100).toFixed(2);
  var state = (card && card.state) || 'determinate';

  if (lang === 'swift') {
    if (state === 'indeterminate') return 'EBProgressBar()\n    .ebState(.indeterminate)';
    if (state === 'success')       return 'EBProgressBar(value: ' + f + ')\n    .ebState(.success)';
    if (state === 'error')         return 'EBProgressBar(value: ' + f + ')\n    .ebState(.error)';
    return 'EBProgressBar(value: ' + f + ')';
  }
  if (state === 'indeterminate') return 'EBProgressBar(\n    state = EBProgressBarState.Indeterminate\n)';
  if (state === 'success')       return 'EBProgressBar(\n    progress = ' + f + 'f,\n    state = EBProgressBarState.Success\n)';
  if (state === 'error')         return 'EBProgressBar(\n    progress = ' + f + 'f,\n    state = EBProgressBarState.Error\n)';
  return 'EBProgressBar(\n    progress = ' + f + 'f\n)';
}
window.getSnippet = getSnippet;

function _progressBarRenderSpec(card) {
  var raw = parseInt(card.progress, 10);
  if (isNaN(raw)) raw = 60;
  return _progressBarRender({progress: raw / 100, state: card.state || 'determinate', width: 280});
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _progressBarSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update the spec preview canvas */
  var s1 = document.getElementById('progress-bar-spec-1');
  if (s1) {
    s1.innerHTML = '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-xs" style="padding:12px 0;">' +
      _progressBarRenderSpec(card) +
    '</div>';
  }

  /* Update Properties row text via [data-sp="<cardStyle>-<prop>"] */
  var spVal = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spVal) {
    var hexEl = spVal.querySelector('.spec-prop-hex');
    var display = (prop === 'progress') ? value + '%' : value;
    if (hexEl) hexEl.textContent = display;
    else spVal.textContent = display;
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

function _progressBarInit() {
  var ctx = document.getElementById('progress-bar-context-preview');
  if (ctx) ctx.innerHTML = _progressBarContextMarkup();
  _progressBarUpdate();

  var s1 = document.getElementById('progress-bar-spec-1');
  if (s1) {
    s1.innerHTML = '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-xs" style="padding:12px 0;">' +
      _progressBarRenderSpec(_progressBarSpecCards.determinate) +
    '</div>';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _progressBarInit);
else _progressBarInit();

(function(){
  function reinit(){
    if (typeof _progressBarInit === 'function') _progressBarInit();
  }
  document.addEventListener('astro:page-load', reinit);
})();
