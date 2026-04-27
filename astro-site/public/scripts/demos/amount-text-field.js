/* Auto-extracted from assessment-src/components/amount-text-field.html.
 * Powers the live-preview dropdowns/toggles for the amount-text-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs amount-text-field
 */
/* ── Amount Text Field Component JS ─────────────────────────────────── */
var _amtDemo = { size: 'Large', state: 'Filled', label: 'yes' };

/* Per-state color tables, keyed on state */
var _amtColors = {
  Default: { border: '#ADBDDC', amount: '#90A8D0', peso: '#D7E0EF', label: '#0A2757', subtext: '#0A2757', value: '0.00' },
  Filled:  { border: '#445C85', amount: '#0A2757', peso: '#0A2757', label: '#0A2757', subtext: '#0A2757', value: '500.00' },
  Error:   { border: '#D61B2C', amount: '#D61B2C', peso: '#D61B2C', label: '#0A2757', subtext: '#D61B2C', value: '500.00' }
};

function _amtBuildSvg(size, state, label) {
  var c = _amtColors[state] || _amtColors.Default;
  var hasLabel = (label === 'yes');
  var subtextCopy = (state === 'Error' && label === 'no' && size === 'Default')
    ? 'How much do you want to save?' : 'Add your subtext here';

  var W = 360;
  var H = hasLabel ? (size === 'Large' ? 184 : 165) : (size === 'Large' ? 150 : 131);
  var s = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  var y = 24;

  if (hasLabel) {
    s += '<text x="' + (W/2) + '" y="' + (y + 14) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="18" font-weight="600" fill="' + c.label + '" fill-opacity="0.9" letter-spacing="0.25">Add Your Label Here</text>';
    y += 40;
  }

  /* Amount row (centered) + underline */
  if (size === 'Large') {
    s += '<text x="' + (W/2) + '" y="' + (y + 50) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="53" font-weight="600" fill="' + c.amount + '">' + c.value + '</text>';
    y += 70;
  } else {
    /* Peso glyph + amount, horizontally centered as a group */
    var amountText = c.value;
    var pesoText = 'P';
    /* approximate group centering */
    var groupCx = W/2;
    s += '<text x="' + (groupCx - 56) + '" y="' + (y + 36) + '" font-family="Proxima Soft, system-ui" font-size="32" font-weight="700" fill="' + c.peso + '">₱</text>';
    s += '<text x="' + (groupCx - 30) + '" y="' + (y + 36) + '" font-family="Proxima Soft, system-ui" font-size="35" font-weight="700" fill="' + c.amount + '">' + amountText + '</text>';
    y += 50;
  }

  /* Underline */
  s += '<line x1="24" y1="' + y + '" x2="' + (W - 24) + '" y2="' + y + '" stroke="' + c.border + '" stroke-width="1"/>';
  y += 20;

  /* Subtext */
  s += '<text x="' + (W/2) + '" y="' + (y + 10) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + c.subtext + '" letter-spacing="0.25">' + subtextCopy + '</text>';

  s += '</svg>';
  return s;
}

function updateAmountFieldDemo() {
  var el = document.getElementById('amt-demo-preview');
  if (el) el.innerHTML = _amtBuildSvg(_amtDemo.size, _amtDemo.state, _amtDemo.label);
}

function updateAmountFieldSpecCard(id, size, state, label) {
  var el = document.getElementById('amt-' + id + '-preview');
  if (el) el.innerHTML = _amtBuildSvg(size, state, label);
}

function _amtInitSpecCards() {
  updateAmountFieldSpecCard('large-filled',    'Large',   'Filled',  'yes');
  updateAmountFieldSpecCard('large-default',   'Large',   'Default', 'yes');
  updateAmountFieldSpecCard('large-error',     'Large',   'Error',   'yes');
  updateAmountFieldSpecCard('default-filled',  'Default', 'Filled',  'yes');
  updateAmountFieldSpecCard('default-default', 'Default', 'Default', 'yes');
  updateAmountFieldSpecCard('default-error',   'Default', 'Error',   'yes');
}

function _amtInit() {
  updateAmountFieldDemo();
  _amtInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _amtInit);
} else {
  _amtInit();
}

function toggleAmtSpecMode(cardKey, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desEl = document.querySelector('[data-view="' + cardKey + '-des"]');
  var devEl = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (desEl) desEl.style.display = isDes ? 'none' : '';
  if (devEl) devEl.style.display = isDes ? '' : 'none';
}
function switchAmtCodeTab(tabBtn, lang, cardKey) {
  var block = tabBtn.closest('.spec-card-code');
  if (!block) return;
  block.querySelectorAll('.spec-code-tab').forEach(function(t){ t.classList.remove('active'); });
  tabBtn.classList.add('active');
  block.querySelectorAll('.spec-code-block').forEach(function(pre){
    pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
  });
}
