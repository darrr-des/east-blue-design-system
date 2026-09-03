/* Amount Text Field — live preview + spec cards.
 * Mirrors node 4602:18144 (2026 Working File). Property panel:
 *   Size   ◇ LG, MD
 *   State  ◇ Default, Focused, Disabled, Error
 *   hasLabel · hasLeadingCurrency · hasSubtext · hasTrailingCurrency  (booleans)
 *
 * Geometry read off the node and checked against export_node_as_image:
 *   Component 400 wide · LG 184 tall · MD 164 tall
 *   Label      24 top, 352 wide, 18 tall, centred
 *   AmountRow  58 top, 352 wide, LG 70 / MD 50 — a BOTTOM RULE only,
 *              not a box: the stroke renders as a single line under the amount
 *   HelperText LG 144 / MD 124, 352 wide, 16 tall, centred
 *   Amount type LG 53/58 Semibold · MD 35/38 Bold
 */

var ATF_PX = "'Proxima Soft', system-ui, sans-serif";

var ATF_STATES = {
  'default':  { rule: '#E5EBF4', amount: '#0A2757', helper: '#445C85', value: '0.00' },
  'focused':  { rule: '#183462', amount: '#0A2757', helper: '#445C85', value: '1000.00' },
  'disabled': { rule: '#E5EBF4', amount: '#C2CFE5', helper: '#445C85', value: '0.00' },
  'error':    { rule: '#D61B2C', amount: '#D61B2C', helper: '#D61B2C', value: '0.00' }
};

var ATF_SIZE = {
  LG: { h: 184, rowH: 70, rowTop: 58, helperTop: 144, fs: 53, fw: 600, adv: 0.60 },
  MD: { h: 164, rowH: 50, rowTop: 58, helperTop: 124, fs: 35, fw: 700, adv: 0.60 }
};

function _atfEscape(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _atfBuildSvg(o) {
  var S = ATF_STATES[o.state] || ATF_STATES['default'];
  var Z = ATF_SIZE[o.size] || ATF_SIZE.LG;

  /* Hiding a block collapses it and everything below moves up, the way the
     Figma auto-layout does. Gaps are 16 above and below the amount row. */
  var y = 24;
  var labelY = null;
  if (o.hasLabel) { labelY = y + 14; y += 18 + 16; }
  var rowTop = y;
  y += Z.rowH + 16;
  var helperY = null;
  if (o.hasSubtext) { helperY = y + 13; y += 16; }
  var H = y + 24;

  /* Amount group is centred as a whole, so hiding either currency part
     re-centres what remains rather than leaving a gap. */
  var parts = [];
  if (o.hasLeadingCurrency)  parts.push('₱');
  parts.push(S.value);
  if (o.hasTrailingCurrency) parts.push('Php');
  var text = parts.join(' ');
  var baseline = rowTop + Z.rowH / 2 + Z.fs * 0.34;

  var out = '<svg width="400" height="' + H + '" viewBox="0 0 400 ' + H + '" fill="none" role="img" aria-label="Amount Text Field, ' + o.size + ', ' + o.state + '">';
  if (labelY !== null) {
    /* Label keeps #0A2757 in every state, Disabled included. */
    out += '<text x="200" y="' + labelY + '" text-anchor="middle" font-family="' + ATF_PX + '" font-size="18" font-weight="600" letter-spacing="0.25" fill="#0A2757">Add Your Label Here</text>';
  }
  out += '<text x="200" y="' + baseline + '" text-anchor="middle" font-family="' + ATF_PX + '" font-size="' + Z.fs + '" font-weight="' + Z.fw + '" fill="' + S.amount + '">' + _atfEscape(text) + '</text>';
  /* Bottom rule — the AmountRow stroke renders as a single line, not a box. */
  out += '<line x1="24" y1="' + (rowTop + Z.rowH + 0.5) + '" x2="376" y2="' + (rowTop + Z.rowH + 0.5) + '" stroke="' + S.rule + '" stroke-width="1"/>';
  if (helperY !== null) {
    out += '<text x="200" y="' + helperY + '" text-anchor="middle" font-family="' + ATF_PX + '" font-size="14" font-weight="600" letter-spacing="0.25" fill="' + S.helper + '">Add your subtext here</text>';
  }
  out += '</svg>';
  return out;
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
var _atfDemo = { size: 'LG', state: 'default' };

function updateAmountTextFieldDemo() {
  var el = document.getElementById('atf-demo-preview') || document.getElementById('amount-text-field-demo-preview');
  if (!el) return;
  /* Legacy Overview markup used a single `state` enum carrying Filled. */
  var st = _atfDemo.state;
  if (st === 'Filled' || st === 'filled') st = 'focused';
  if (!ATF_STATES[st]) st = String(st).toLowerCase();
  if (!ATF_STATES[st]) st = 'default';
  el.innerHTML = _atfBuildSvg({
    size: _atfDemo.size, state: st,
    hasLabel: true, hasLeadingCurrency: true, hasSubtext: true, hasTrailingCurrency: true
  });
}
window.updateAmountTextFieldDemo = updateAmountTextFieldDemo;

/* ── Spec card (Style tab) ───────────────────────────────────────── */
var _specCards = {
  main: { size: 'LG', state: 'default', hasLabel: true, hasLeadingCurrency: true, hasSubtext: true, hasTrailingCurrency: true }
};
window._specCards = _specCards;

var ATF_BOOLS = ['hasLabel', 'hasLeadingCurrency', 'hasSubtext', 'hasTrailingCurrency'];

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBAmountField(amount: $amount)'];
  lines.push('    .controlSize(.' + (card.size === 'MD' ? 'regular' : 'large') + ')');
  lines.push('    .ebState(.' + card.state + ')');
  if (card.hasLabel)   lines.push('    .ebLabel("Add Your Label Here")');
  if (card.hasSubtext) lines.push('    .ebHelperText("Add your subtext here")');
  if (!card.hasLeadingCurrency)  lines.push('    .ebCurrencySymbol(false)');
  if (!card.hasTrailingCurrency) lines.push('    .ebCurrencyCode(false)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  function cap(x) { return x.charAt(0).toUpperCase() + x.slice(1); }
  return [
    'EBAmountField(',
    '    amount = amount,',
    '    onAmountChange = { },',
    '    size = EBAmountSize.' + card.size + ',',
    '    state = EBFieldState.' + cap(card.state) + ',',
    '    label = ' + (card.hasLabel ? '"Add Your Label Here"' : 'null') + ',',
    '    helperText = ' + (card.hasSubtext ? '"Add your subtext here"' : 'null') + ',',
    '    showCurrencySymbol = ' + (card.hasLeadingCurrency ? 'true' : 'false') + ',',
    '    showCurrencyCode = ' + (card.hasTrailingCurrency ? 'true' : 'false'),
    ')'
  ].join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = (ATF_BOOLS.indexOf(prop) !== -1)
    ? (value === 'true' || value === true)
    : value;

  var host = document.getElementById('amount-text-field-spec-' + cardStyle);
  if (host) host.innerHTML = _atfBuildSvg(card);

  ['size', 'state'].concat(ATF_BOOLS).forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = card[k];
    el.textContent = (typeof v === 'boolean') ? (v ? 'True' : 'False')
      : (k === 'state') ? String(v).charAt(0).toUpperCase() + String(v).slice(1)
      : String(v);
  });

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
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

function _atfInit() {
  updateAmountTextFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'size', _specCards[k].size);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _atfInit);
else _atfInit();
document.addEventListener('astro:page-load', _atfInit);
