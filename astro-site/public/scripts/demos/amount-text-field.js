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

  if (size === 'Large') {
    s += '<text x="' + (W/2) + '" y="' + (y + 50) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="53" font-weight="600" fill="' + c.amount + '">' + c.value + '</text>';
    y += 70;
  } else {
    var amountText = c.value;
    var groupCx = W/2;
    s += '<text x="' + (groupCx - 56) + '" y="' + (y + 36) + '" font-family="Proxima Soft, system-ui" font-size="32" font-weight="700" fill="' + c.peso + '">₱</text>';
    s += '<text x="' + (groupCx - 30) + '" y="' + (y + 36) + '" font-family="Proxima Soft, system-ui" font-size="35" font-weight="700" fill="' + c.amount + '">' + amountText + '</text>';
    y += 50;
  }

  s += '<line x1="24" y1="' + y + '" x2="' + (W - 24) + '" y2="' + y + '" stroke="' + c.border + '" stroke-width="1"/>';
  y += 20;

  s += '<text x="' + (W/2) + '" y="' + (y + 10) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + c.subtext + '" letter-spacing="0.25">' + subtextCopy + '</text>';

  s += '</svg>';
  return s;
}

function updateAmountFieldDemo() {
  var el = document.getElementById('amt-demo-preview');
  if (el) el.innerHTML = _amtBuildSvg(_amtDemo.size, _amtDemo.state, _amtDemo.label);
}

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
/* demoKey → state (size derives from key prefix). */
var _specCards = {
  'large-filled':    { size: 'Large',   state: 'Filled',  label: 'yes' },
  'large-default':   { size: 'Large',   state: 'Default', label: 'yes' },
  'large-error':     { size: 'Large',   state: 'Error',   label: 'yes' },
  'default-filled':  { size: 'Default', state: 'Filled',  label: 'yes' },
  'default-default': { size: 'Default', state: 'Default', label: 'yes' },
  'default-error':   { size: 'Default', state: 'Error',   label: 'yes' }
};
window._specCards = _specCards;

function _amtColorRowsFor(card) {
  var c = _amtColors[card.state] || _amtColors.Default;
  var stateKey = card.state.toLowerCase();
  var rows = [
    ['Border (underline)', c.border, 'amount-text-field/' + stateKey + '/border'],
    ['Label',              c.label,  'amount-text-field/' + stateKey + '/label'],
    ['Amount',             c.amount, 'amount-text-field/' + stateKey + '/label-amount']
  ];
  if (card.size === 'Default') {
    rows.push(['Peso glyph', c.peso, 'amount-text-field/' + stateKey + '/icon-currency']);
  }
  rows.push(['Subtext', c.subtext, 'amount-text-field/' + stateKey + '/subtext']);
  return rows;
}

/* ── Code snippet builders ──────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var sizeMap = { Large: '.large', Default: '.default' };
  var sz = sizeMap[card.size] || '.default';
  var lines = [];
  if (card.state === 'Error') {
    lines.push('EBAmountTextField(');
    lines.push('    value: $amount,');
    lines.push('    label: "Amount",');
    lines.push('    subtext: "Enter a valid amount"');
    lines.push(')');
    lines.push('.ebAmountSize(' + sz + ')');
    lines.push('.ebAmountState(.error)');
  } else {
    lines.push('EBAmountTextField(');
    lines.push('    value: $amount,');
    lines.push('    label: "Amount"');
    lines.push(')');
    lines.push('.ebAmountSize(' + sz + ')');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var sizeMap = { Large: 'Large', Default: 'Default' };
  var sz = sizeMap[card.size] || 'Default';
  var lines = [];
  lines.push('EBAmountTextField(');
  lines.push('    value = amount,');
  lines.push('    onValueChange = { amount = it },');
  lines.push('    label = "Amount",');
  if (card.state === 'Error') {
    lines.push('    subtext = "Enter a valid amount",');
    lines.push('    size = EBAmountSize.' + sz + ',');
    lines.push('    state = EBAmountState.Error');
  } else {
    lines.push('    size = EBAmountSize.' + sz);
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview wrapper #amt-{cardStyle}-preview */
  var preview = document.getElementById('amt-' + cardStyle + '-preview');
  if (preview) {
    preview.innerHTML = _amtBuildSvg(card.size, card.state, card.label);
  }

  /* Update Properties text */
  var spState = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  var spLabel = document.querySelector('[data-sp="' + cardStyle + '-label"]');
  if (spState) spState.textContent = card.state;
  if (spLabel) spLabel.textContent = card.label;

  /* Update Colors section */
  var colorsEl = document.getElementById('spec-' + cardStyle + '-colors');
  if (colorsEl) {
    var rows = _amtColorRowsFor(card);
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
      var tokenHtml = r[2] ? '<span class="spec-token-name">' + r[2] + '</span>' : '';
      h += '<div class="spec-prop has-token"><span class="spec-prop-key">' + r[0] + '</span>'
         + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '</span>'
         + tokenHtml + '</div>';
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

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

/* Legacy alias */
function updateAmountFieldSpecCard(id, size, state, label) {
  return updateSpecCard(id, 'state', state);
}

function _amtInitSpecCards() {
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

function _amtInit() {
  updateAmountFieldDemo();
  _amtInitSpecCards();
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _amtInit);
  else _amtInit();
  document.addEventListener('astro:page-load', _amtInit);
})();

/* ── Legacy aliases ────────────────────────────────────────────── */
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
