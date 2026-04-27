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

function _progressBarInit() {
  var ctx = document.getElementById('progress-bar-context-preview');
  if (ctx) ctx.innerHTML = _progressBarContextMarkup();
  _progressBarUpdate();

  var s1 = document.getElementById('progress-bar-spec-1');
  if (s1) {
    s1.innerHTML = '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-xs" style="padding:12px 0;">' +
      _progressBarRender({progress: 0.00, width: 280}) +
      _progressBarRender({progress: 0.30, width: 280}) +
      _progressBarRender({progress: 0.60, width: 280}) +
      _progressBarRender({progress: 1.00, width: 280}) +
    '</div>';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _progressBarInit);
else _progressBarInit();
