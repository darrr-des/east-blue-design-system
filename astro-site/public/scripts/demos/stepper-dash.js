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

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
var _specCards = {
  'main': { current: '2', total: '4', status: 'default' }
};
window._specCards = _specCards;

/* ── Code snippet builders (called by updateSpecCard + switchCodeTab) ── */
function _stepperDashStatusSwift(card) {
  if (card.status === 'success') return '.success';
  if (card.status === 'error')   return '.error';
  return '.default';
}

function _stepperDashStatusCompose(card) {
  if (card.status === 'success') return 'Success';
  if (card.status === 'error')   return 'Error';
  return 'Default';
}

function buildSwiftSnippet(type, card) {
  var lines = [];
  lines.push('EBStepperDash(');
  lines.push('    current: ' + card.current + ',');
  lines.push('    total: ' + card.total);
  lines.push(')');
  if (card.status && card.status !== 'default') {
    lines.push('    .ebStatus(' + _stepperDashStatusSwift(card) + ')');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var lines = [];
  lines.push('EBStepperDash(');
  lines.push('    current = ' + card.current + ',');
  lines.push('    total = ' + card.total + ',');
  lines.push('    status = EBStepperStatus.' + _stepperDashStatusCompose(card));
  lines.push(')');
  return lines.join('\n');
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
  var total   = parseInt(card.total, 10);
  if (isNaN(total) || total < 2) total = 2;
  if (total > 10) total = 10;
  if (isNaN(current) || current < 1) current = 1;
  if (current > total) { current = total; card.current = String(current); }

  /* Re-render the spec preview into its host slot */
  var host = document.getElementById('stepper-dash-spec-1');
  if (host) host.innerHTML = _stepperDashRender({current: current, total: total, status: card.status, width: 268});

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

function _stepperDashInitSpecCards() {
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'current', _specCards[k].current);
  });
}

function _stepperDashInit() {
  _stepperDashSlotStyles();

  var ctx = document.getElementById('stepper-dash-context-preview');
  if (ctx) ctx.innerHTML = _stepperDashContextMarkup();

  _stepperDashUpdate();
  _stepperDashInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stepperDashInit);
else _stepperDashInit();
document.addEventListener('astro:page-load', _stepperDashInit);
