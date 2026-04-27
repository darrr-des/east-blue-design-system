/* Auto-extracted from assessment-src/components/stepper-dash.html.
 * Powers the live-preview dropdowns/toggles for the stepper-dash component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs stepper-dash
 */
/* ── Stepper - Dash JS ──────────────────────────────────────────── */
/* Horizontal row of equal-width pill dashes. Dashes 1..current fill
   brand blue; dashes current+1..total fill track blue. Pure vector —
   no raster assets.                                                  */

function _stepperDashRender(opts) {
  var total   = Math.max(2, Math.min(10, opts.total   | 0 || 4));
  var current = Math.max(1, Math.min(total, opts.current | 0 || 1));
  var status  = opts.status || 'default';
  var width   = typeof opts.width === 'number' ? opts.width : 268;

  var fillOn;
  switch (status) {
    case 'success': fillOn = '#12AF80'; break;
    case 'error':   fillOn = '#D81E1E'; break;
    default:        fillOn = '#005CE5';
  }
  var fillOff = '#D2E5FF';

  var dashes = '';
  for (var i = 1; i <= total; i++) {
    var bg = i <= current ? fillOn : fillOff;
    dashes += '<span class="eb-preview-stepper-dash__slot" style="background:' + bg + ';"></span>';
  }

  return '<div class="eb-preview eb-preview-stepper-dash" role="progressbar"' +
    ' aria-valuenow="' + current + '" aria-valuemin="1" aria-valuemax="' + total + '"' +
    ' aria-label="Step ' + current + ' of ' + total + '"' +
    ' style="width:' + width + 'px;display:flex;gap:4px;align-items:center;">' +
    dashes +
    '</div>';
}

function _stepperDashSlotStyles() {
  /* One-time style injection for the dash slots */
  if (document.getElementById('stepper-dash-slot-styles')) return;
  var s = document.createElement('style');
  s.id = 'stepper-dash-slot-styles';
  s.textContent = '.eb-preview-stepper-dash__slot{flex:1 0 0;min-width:1px;height:4px;border-radius:100px;display:inline-block;}';
  document.head.appendChild(s);
}

function _stepperDashListRow(label, current, total, status) {
  return '<div class="eb-preview eb-preview-stack eb-preview-stack--start eb-preview-stack--gap-xs" style="padding:12px 0;">' +
    '<div style="display:flex;justify-content:space-between;width:268px;font:500 13px system-ui;color:#3C4A5C;">' +
      '<span>' + label + '</span>' +
      '<span style="color:#666;">' + 'Step ' + current + ' of ' + total + '</span>' +
    '</div>' +
    _stepperDashRender({current: current, total: total, status: status, width: 268}) +
  '</div>';
}

function _stepperDashContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm" style="padding:8px 0;">' +
    _stepperDashListRow('Onboarding',      1, 3) +
    _stepperDashListRow('KYC verification',2, 4) +
    _stepperDashListRow('Checkout',        4, 5) +
    _stepperDashListRow('Flow complete',   6, 6, 'success') +
    _stepperDashListRow('Step 3 failed',   3, 5, 'error') +
  '</div>';
}

function _stepperDashUpdate() {
  var totalEl   = document.getElementById('stepper-dash-ctrl-total');
  var currentEl = document.getElementById('stepper-dash-ctrl-current');
  var highEl    = document.getElementById('stepper-dash-ctrl-highlighted');
  var slotsEl   = document.getElementById('stepper-dash-ctrl-slots');
  var preview   = document.getElementById('stepper-dash-demo-preview');
  if (!preview) return;

  var total   = totalEl   ? parseInt(totalEl.value, 10)   : 4;
  var current = currentEl ? parseInt(currentEl.value, 10) : 2;
  if (current > total) current = total;

  var ordinals = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'];
  if (highEl)  highEl.textContent  = ordinals[current - 1];
  if (slotsEl) slotsEl.textContent = 'prop1–prop' + total + ' = true';

  preview.innerHTML = _stepperDashRender({current: current, total: total, width: 268});
}

function _stepperDashInit() {
  _stepperDashSlotStyles();

  var ctx = document.getElementById('stepper-dash-context-preview');
  if (ctx) ctx.innerHTML = _stepperDashContextMarkup();

  _stepperDashUpdate();

  var s1 = document.getElementById('stepper-dash-spec-1');
  if (s1) {
    s1.innerHTML = '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-xs" style="padding:12px 0;">' +
      _stepperDashRender({current: 1, total: 4, width: 268}) +
      _stepperDashRender({current: 2, total: 4, width: 268}) +
      _stepperDashRender({current: 3, total: 4, width: 268}) +
      _stepperDashRender({current: 4, total: 4, width: 268}) +
      _stepperDashRender({current: 6, total: 6, status: 'success', width: 268}) +
      _stepperDashRender({current: 3, total: 5, status: 'error',   width: 268}) +
    '</div>';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stepperDashInit);
else _stepperDashInit();
