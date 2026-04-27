/* Auto-extracted from assessment-src/components/stepper-bullet.html.
 * Powers the live-preview dropdowns/toggles for the stepper-bullet component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs stepper-bullet
 */
/* ── Stepper - Bullet JS ────────────────────────────────────────── */
/* Renders a horizontal row of 8×8 dots. One dot (at `current` index)
   fills in brand blue; the rest use the track color. Dots are drawn
   as SVG circles, not raster — this is the proposed vector model.   */

function _stepperBulletDotMarkup(index, current) {
  var size = 8;
  var activeColor = '#005CE5';
  var trackColor  = '#D2E5FF';
  var fill = (index <= current) ? activeColor : trackColor;
  return '<span class="eb-preview-stepper-bullet-dot" style="display:inline-block;width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' + fill + ';"></span>';
}

function _stepperBulletRender(current, total) {
  var parts = [];
  for (var i = 1; i <= total; i++) {
    parts.push(_stepperBulletDotMarkup(i, current));
  }
  return '<div class="eb-preview eb-preview-stepper-bullet" style="display:inline-flex;align-items:center;gap:8px;padding:4px 0;">' +
    parts.join('') +
  '</div>';
}

function _stepperBulletContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm" style="padding:8px 0;">' +
    '<div style="font:500 13px system-ui;color:#3C4A5C;margin-bottom:6px;">Onboarding carousel · page 2 of 4</div>' +
    _stepperBulletRender(2, 4) +
    '<div style="font:500 13px system-ui;color:#3C4A5C;margin:18px 0 6px;">Tutorial swipe · page 3 of 5</div>' +
    _stepperBulletRender(3, 5) +
    '<div style="font:500 13px system-ui;color:#3C4A5C;margin:18px 0 6px;">Image gallery · slide 1 of 3</div>' +
    _stepperBulletRender(1, 3) +
  '</div>';
}

function _stepperBulletUpdate() {
  var stepsEl   = document.getElementById('stepper-bullet-ctrl-steps');
  var currentEl = document.getElementById('stepper-bullet-ctrl-current');
  var valueEl   = document.getElementById('stepper-bullet-ctrl-value');
  var preview   = document.getElementById('stepper-bullet-demo-preview');
  if (!preview) return;

  var steps = stepsEl ? parseInt(stepsEl.value, 10) : 4;
  if (isNaN(steps) || steps < 3) steps = 3;
  if (steps > 10) steps = 10;

  if (currentEl) {
    currentEl.max = steps;
    var current = parseInt(currentEl.value, 10);
    if (isNaN(current) || current < 1) current = 1;
    if (current > steps) { current = steps; currentEl.value = steps; }
    if (valueEl) valueEl.textContent = current + ' of ' + steps;
    preview.innerHTML = _stepperBulletRender(current, steps);
  }
}

function _stepperBulletInit() {
  var ctx = document.getElementById('stepper-bullet-context-preview');
  if (ctx) ctx.innerHTML = _stepperBulletContextMarkup();
  _stepperBulletUpdate();

  var s1 = document.getElementById('stepper-bullet-spec-1');
  if (s1) {
    s1.innerHTML = '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm" style="padding:12px 0;">' +
      '<div style="font:500 13px system-ui;color:#3C4A5C;margin-bottom:4px;">3 steps, current = 1</div>' +
      _stepperBulletRender(1, 3) +
      '<div style="font:500 13px system-ui;color:#3C4A5C;margin:16px 0 4px;">4 steps, current = 2</div>' +
      _stepperBulletRender(2, 4) +
      '<div style="font:500 13px system-ui;color:#3C4A5C;margin:16px 0 4px;">5 steps, current = 5 (last)</div>' +
      _stepperBulletRender(5, 5) +
    '</div>';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stepperBulletInit);
else _stepperBulletInit();
