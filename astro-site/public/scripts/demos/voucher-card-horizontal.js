/* Auto-extracted from assessment-src/components/voucher-card-horizontal.html.
 * Powers the live-preview dropdowns/toggles for the voucher-card-horizontal component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs voucher-card-horizontal
 */
/* ── Voucher Card Horizontal JS ─────────────────────────────────── */
function _vchCard(state, hasOriginal, hasBadge) {
  if (typeof hasBadge === 'undefined') hasBadge = true;
  var isGreyed = state === 'used' || state === 'expired';
  var titleColor = isGreyed ? '#445C85' : '#0A2757';
  var amountColor = isGreyed ? '#6780A9' : '#2340A9';
  var metadataColor = isGreyed ? '#6780A9' : '#445C85';
  var partnerBg = isGreyed ? '#8A96AF' : '#005CE5';
  var badgeBg, badgeLabel;
  if (state === 'limited') { badgeBg = '#2340A9'; badgeLabel = 'Limited'; }
  else if (state === 'expiring') { badgeBg = '#D61B2C'; badgeLabel = 'Expiring'; }
  else if (state === 'used') { badgeBg = '#C2C5CA'; badgeLabel = 'Used'; }
  else { badgeBg = '#C2C5CA'; badgeLabel = 'Expired'; }

  var s = '<div style="display:flex;flex-direction:column;gap:6px;align-items:center;">';
  s += '<div style="width:336px;height:111px;display:flex;background:#FFFFFF;border-radius:6px;overflow:hidden;box-shadow:0 0 4px rgba(2,14,34,0.06);font-family:\'Proxima Soft\',system-ui;">';

  // Content block (left)
  s += '<div style="flex:1;padding:12px;display:flex;flex-direction:column;justify-content:space-between;min-width:0;">';
  s += '<div style="display:flex;flex-direction:column;gap:4px;">';
  s += '<div style="color:' + titleColor + ';font-size:16px;font-weight:700;line-height:20px;letter-spacing:0.25px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Buy Load Globe Go90</div>';
  s += '<div style="display:flex;gap:4px;align-items:center;">';
  s += '<div style="color:' + amountColor + ';font-size:14px;font-weight:700;letter-spacing:0.25px;">PHP 50.00</div>';
  if (hasOriginal) {
    s += '<div style="color:#90A8D0;font-size:14px;font-weight:600;text-decoration:line-through;letter-spacing:0.25px;">PHP 90.00</div>';
  }
  s += '</div>';
  s += '</div>';
  s += '<div style="color:' + metadataColor + ';font-size:10px;font-family:\'BarkAda\',system-ui;font-weight:600;line-height:15px;">Validity: Dec 25 2022 - Jan 5 2023</div>';
  s += '</div>';

  // Partner image (right) — 96 wide, perforated edge, logo, GET VOUCHER
  s += '<div style="position:relative;width:96px;height:111px;background:' + partnerBg + ';overflow:hidden;">';
  s += '<div style="position:absolute;left:0;top:0;bottom:0;width:1px;border-left:1px dashed rgba(255,255,255,0.9);"></div>';
  s += '<div style="position:absolute;left:calc(50% - 22px);top:calc(50% - 22px);width:44px;height:44px;border:3px solid #FFFFFF;border-right-color:transparent;border-radius:50%;opacity:' + (isGreyed ? '0.55' : '1') + ';"></div>';
  s += '<div style="position:absolute;left:calc(50% - 5px);top:calc(50% - 5px);width:10px;height:10px;background:#FFFFFF;border-radius:50%;opacity:' + (isGreyed ? '0.55' : '1') + ';"></div>';
  s += '<div style="position:absolute;right:0;top:0;bottom:0;width:28px;display:flex;align-items:center;justify-content:center;border-left:1px dashed rgba(255,255,255,0.6);">';
  s += '<div style="transform:rotate(-90deg);color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;white-space:nowrap;">GET VOUCHER</div>';
  s += '</div>';
  if (hasBadge) s += '<div style="position:absolute;top:8px;left:0;background:' + badgeBg + ';color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;padding:4px 8px 2px 8px;border-top-right-radius:4px;border-bottom-right-radius:4px;line-height:10px;">' + badgeLabel + '</div>';
  s += '</div>';

  s += '</div>';
  s += '</div>';
  return s;
}

/* ── Live preview state (top-of-page playground) ──────────────── */
var _vchDemo = { state: 'limited', hasOriginal: true, hasBadge: true };

function _vchDemoUpdate() {
  var stateEl    = document.getElementById('vch-ctrl-state');
  var badgeEl    = document.getElementById('vch-ctrl-badge');
  var originalEl = document.getElementById('vch-ctrl-original');
  if (stateEl)    _vchDemo.state      = stateEl.value;
  if (badgeEl)    _vchDemo.hasBadge   = (badgeEl.value === 'yes');
  if (originalEl) _vchDemo.hasOriginal = (originalEl.value === 'yes');
  var el = document.getElementById('vch-demo-preview');
  if (el) el.innerHTML = _vchCard(_vchDemo.state, _vchDemo.hasOriginal, _vchDemo.hasBadge);
}

function _vchInit() {
  _vchDemoUpdate();
}

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _vchSpecCards = {
  'default':     { state: 'limited', originalPrice: 'Yes' },
  'expired':     { state: 'expired', originalPrice: 'Yes' },
  'no-original': { state: 'limited', originalPrice: 'No' }
};

/* Expose for shared utilities — `switchCodeTab` reads this. */
var _specCards = _vchSpecCards;
window._specCards = _specCards;

function _vchRenderPreview(cardStyle, card) {
  var el = document.getElementById('vch-spec-' + cardStyle + '-preview');
  if (!el) return;
  el.innerHTML = _vchCard(card.state, card.originalPrice === 'Yes');
}

function buildSwiftSnippet(cardStyle, card) {
  return getSnippet(cardStyle, 'swift', card);
}
function buildComposeSnippet(cardStyle, card) {
  return getSnippet(cardStyle, 'compose', card);
}
function getSnippet(cardStyle, lang, card) {
  var hasOriginal = card.originalPrice === 'Yes';
  var stateCap = card.state.charAt(0).toUpperCase() + card.state.slice(1);
  var includeState = card.state !== 'limited';
  if (lang === 'swift') {
    var lines = 'EBVoucherCard(\n    title: "Buy Load Globe Go90",\n    amount: "PHP 50.00"';
    if (hasOriginal) lines += ',\n    originalAmount: "PHP 90.00"';
    lines += ',\n    metadata: "Validity: Dec 25 2022 - Jan 5 2023",\n    image: Image("voucher-cinema"),\n    orientation: .horizontal';
    if (includeState) lines += ',\n    state: .' + card.state;
    lines += '\n)';
    return lines;
  } else {
    var lines = 'EBVoucherCard(\n    title = "Buy Load Globe Go90",\n    amount = "PHP 50.00"';
    if (hasOriginal) lines += ',\n    originalAmount = "PHP 90.00"';
    lines += ',\n    metadata = "Validity: Dec 25 2022 - Jan 5 2023",\n    image = R.drawable.voucher_cinema,\n    orientation = EBVoucherOrientation.Horizontal';
    if (includeState) lines += ',\n    state = EBVoucherState.' + stateCap;
    lines += '\n)';
    return lines;
  }
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _vchSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Render preview */
  _vchRenderPreview(cardStyle, card);

  /* Update Properties readouts — data-sp="${demoKey}-${prop}" */
  var spState = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  if (spState) spState.textContent = card.state;
  var spOriginal = document.querySelector('[data-sp="' + cardStyle + '-originalPrice"]');
  if (spOriginal) spOriginal.textContent = card.originalPrice;

  /* Update DEV code — `[data-code-content="${cardStyle}"]` */
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

function _vchInitSpecCards() {
  Object.keys(_vchSpecCards).forEach(function(key) {
    _vchRenderPreview(key, _vchSpecCards[key]);
  });
}

function _vchInitAll() {
  _vchInit();
  _vchInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vchInitAll);
else _vchInitAll();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  document.addEventListener('astro:page-load', _vchInitAll);
})();
