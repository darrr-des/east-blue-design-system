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

  return '<div style="position:relative;width:' + size + 'px;height:' + size + 'px;display:inline-flex;align-items:center;justify-content:center;">' +
    '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" style="position:absolute;inset:0;">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + trackColor + '" stroke-width="2.5"/>' +
      (dashLen > 0 ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fillColor + '" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="' + dashArray + '" stroke-dashoffset="' + dashOffset + '" transform="rotate(-90 ' + cx + ' ' + cy + ')"/>' : '') +
    '</svg>' +
    '<span style="position:relative;font:700 18px \'Proxima Soft\', system-ui, sans-serif;color:' + labelColor + ';letter-spacing:0.25px;">' + index + '</span>' +
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

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
var _specCards = {
  'main': { current: '2', steps: '4' }
};
window._specCards = _specCards;

/* ── Code snippet builders (called by updateSpecCard + switchCodeTab) ── */
function buildSwiftSnippet(type, card) {
  return 'EBStepperCircular(\n    current: ' + card.current + ',\n    total: ' + card.steps + '\n)';
}

function buildComposeSnippet(type, card) {
  return 'EBStepperCircular(\n    current = ' + card.current + ',\n    total = ' + card.steps + '\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

/* ── updateSpecCard — canonical signature ───────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var current = parseInt(card.current, 10);
  var steps   = parseInt(card.steps, 10);
  if (isNaN(steps) || steps < 2) steps = 2;
  if (steps > 10) steps = 10;
  if (isNaN(current) || current < 1) current = 1;
  if (current > steps) { current = steps; card.current = String(current); }

  /* Re-render the spec preview into its host slot */
  var host = document.getElementById('stepper-circular-spec-1');
  if (host) host.innerHTML = _stepperCircularRender(current, steps);

  /* Update DEV code — always */
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

function _stepperCircularInitSpecCards() {
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'current', _specCards[k].current);
  });
}

function _stepperCircularInit() {
  var ctx = document.getElementById('stepper-circular-context-preview');
  if (ctx) ctx.innerHTML = _stepperCircularContextMarkup();
  _stepperCircularUpdate();
  _stepperCircularInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stepperCircularInit);
else _stepperCircularInit();
document.addEventListener('astro:page-load', _stepperCircularInit);
