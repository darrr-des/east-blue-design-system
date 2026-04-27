/* Auto-extracted from assessment-src/components/stepper-circular.html.
 * Powers the live-preview dropdowns/toggles for the stepper-circular component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs stepper-circular
 */
/* ── Stepper - Circular JS ──────────────────────────────────────── */
/* Renders a horizontal row of numbered circles. Each circle has a
   track ring (upcoming) plus an arc-fill whose length is derived
   from the step's status: completed = full, current = partial
   (current / steps), upcoming = none.                              */

function _stepperCircularRingMarkup(index, status, progress) {
  var size = 45;
  var cx = size / 2;
  var cy = size / 2;
  var r = 20;
  var circumference = 2 * Math.PI * r;

  var trackColor = '#D2E5FF';
  var fillColor  = '#005CE5';
  var labelColor = '#005CE5';

  var dashLen;
  if (status === 'completed') dashLen = circumference;
  else if (status === 'upcoming') dashLen = 0;
  else /* current */ dashLen = circumference * progress;

  var dashArray = dashLen + ' ' + (circumference - dashLen);
  var dashOffset = circumference / 4; /* start at 12 o'clock */

  return '<div class="eb-preview-stepper-circle" style="position:relative;width:' + size + 'px;height:' + size + 'px;display:inline-flex;align-items:center;justify-content:center;">' +
    '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" style="position:absolute;inset:0;">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + trackColor + '" stroke-width="2.5"/>' +
      (dashLen > 0 ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fillColor + '" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="' + dashArray + '" stroke-dashoffset="' + dashOffset + '" transform="rotate(-90 ' + cx + ' ' + cy + ')"/>' : '') +
    '</svg>' +
    '<span style="position:relative;font:700 16px \'Proxima Soft\', system-ui, sans-serif;color:' + labelColor + ';letter-spacing:0.25px;">' + index + '</span>' +
  '</div>';
}

function _stepperCircularRender(current, total) {
  var parts = [];
  for (var i = 1; i <= total; i++) {
    var status, progress = 1;
    if (i < current) status = 'completed';
    else if (i === current) { status = 'current'; progress = current / total; }
    else status = 'upcoming';
    parts.push(_stepperCircularRingMarkup(i, status, progress));
  }
  return '<div class="eb-preview eb-preview-stepper-circular" style="display:flex;align-items:center;gap:20px;padding:12px 0;flex-wrap:wrap;justify-content:center;">' +
    parts.join('') +
  '</div>';
}

function _stepperCircularContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm" style="padding:8px 0;">' +
    '<div style="font:500 13px system-ui;color:#3C4A5C;margin-bottom:6px;">Onboarding · Step 2 of 4</div>' +
    _stepperCircularRender(2, 4) +
    '<div style="font:500 13px system-ui;color:#3C4A5C;margin:18px 0 6px;">KYC · Step 5 of 8</div>' +
    _stepperCircularRender(5, 8) +
    '<div style="font:500 13px system-ui;color:#3C4A5C;margin:18px 0 6px;">Checkout · Step 3 of 3</div>' +
    _stepperCircularRender(3, 3) +
  '</div>';
}

function _stepperCircularUpdate() {
  var stepsEl   = document.getElementById('stepper-circular-ctrl-steps');
  var currentEl = document.getElementById('stepper-circular-ctrl-current');
  var valueEl   = document.getElementById('stepper-circular-ctrl-value');
  var preview   = document.getElementById('stepper-circular-demo-preview');
  if (!preview) return;

  var steps = stepsEl ? parseInt(stepsEl.value, 10) : 4;
  if (isNaN(steps) || steps < 2) steps = 2;
  if (steps > 10) steps = 10;

  if (currentEl) {
    currentEl.max = steps;
    var current = parseInt(currentEl.value, 10);
    if (isNaN(current) || current < 1) current = 1;
    if (current > steps) { current = steps; currentEl.value = steps; }
    if (valueEl) valueEl.textContent = current + ' of ' + steps;
    preview.innerHTML = _stepperCircularRender(current, steps);
  }
}

function _stepperCircularInit() {
  var ctx = document.getElementById('stepper-circular-context-preview');
  if (ctx) ctx.innerHTML = _stepperCircularContextMarkup();
  _stepperCircularUpdate();

  var s1 = document.getElementById('stepper-circular-spec-1');
  if (s1) {
    s1.innerHTML = '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm" style="padding:12px 0;">' +
      '<div style="font:500 13px system-ui;color:#3C4A5C;margin-bottom:4px;">4 steps, current = 2</div>' +
      _stepperCircularRender(2, 4) +
      '<div style="font:500 13px system-ui;color:#3C4A5C;margin:16px 0 4px;">7 steps, current = 5</div>' +
      _stepperCircularRender(5, 7) +
      '<div style="font:500 13px system-ui;color:#3C4A5C;margin:16px 0 4px;">10 steps, current = 10 (all completed)</div>' +
      _stepperCircularRender(10, 10) +
    '</div>';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stepperCircularInit);
else _stepperCircularInit();
