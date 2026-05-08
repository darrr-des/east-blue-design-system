/* Auto-extracted from assessment-src/components/generic-transaction-card.html.
 * Powers the live-preview dropdowns/toggles for the generic-transaction-card component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs generic-transaction-card
 */
/* ── Generic Transaction Card JS ────────────────────────────────── */
/* 5 variants, 5 layouts. Preview renders each honestly — the prop
   switch produces visibly different rows (the whole point of the
   "this is 5 components hiding as 1" argument in Open Issues).      */

function _gtxEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _gtxBadge(text) {
  return '<span class="eb-preview-gtx__badge">' + _gtxEscape(text) + '</span>';
}

function _gtxAvatar(initials) {
  return '<span class="eb-preview-gtx__avatar">' + _gtxEscape((initials || 'G').substring(0, 2)) + '</span>';
}

function _gtxRender(opts) {
  var type     = opts.type || 'default';
  var label    = opts.label || 'Label';
  var badge    = opts.badge || 'Label';
  var date     = opts.date || 'Date XX, XXXX, Time (AM,PM)';
  var amount   = opts.amount || 'PHP XX.XX';
  var ref      = opts.ref || 'Reference No: GC123456789876543';
  var initials = opts.initials || 'JD';

  if (type === 'skeleton') {
    return '<div class="eb-preview eb-preview-gtx">' +
      '<div class="eb-preview-gtx__content">' +
        '<div class="eb-preview-gtx__sk eb-preview-gtx__sk--label"></div>' +
        '<div class="eb-preview-gtx__sk eb-preview-gtx__sk--date"></div>' +
      '</div>' +
      '<div class="eb-preview-gtx__trailing">' +
        '<div class="eb-preview-gtx__sk eb-preview-gtx__sk--amount"></div>' +
      '</div>' +
    '</div>';
  }

  var html = '<div class="eb-preview eb-preview-gtx">';

  if (type === 'with-avatar') {
    html += _gtxAvatar(initials);
  }

  html += '<div class="eb-preview-gtx__content">';
  html += '<p class="eb-preview-gtx__label">' + _gtxEscape(label) + '</p>';

  if (type === 'no-amount') {
    html += '<p class="eb-preview-gtx__reference">' + _gtxEscape(ref) + '</p>';
  } else {
    html += '<div class="eb-preview-gtx__meta-row">';
    if (type === 'default' || type === 'with-avatar') {
      html += _gtxBadge(badge);
    }
    html += '<span class="eb-preview-gtx__meta">' + _gtxEscape(date) + '</span>';
    html += '</div>';
  }

  html += '</div>';

  // Trailing
  html += '<div class="eb-preview-gtx__trailing">';
  if (type === 'no-amount') {
    html += _gtxBadge(badge);
  } else {
    html += '<span class="eb-preview-gtx__amount">' + _gtxEscape(amount) + '</span>';
    if (type === 'more-information') {
      html += '<span class="eb-preview-gtx__menu" aria-hidden="true">⋯</span>';
    }
  }
  html += '</div>';

  html += '</div>';
  return html;
}

function _gtxContextMarkup() {
  // A realistic Activity-screen segment showing 3 transactions + a skeleton row
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm">' +
    _gtxRender({type:'with-avatar', label:'Juan Dela Cruz',       badge:'Sent',     date:'Apr 14, 2026, 10:24 AM', amount:'PHP 1,500.00', initials:'JD'}) +
    _gtxRender({type:'default',     label:'Globe Postpaid',       badge:'Paid',     date:'Apr 12, 2026, 09:15 AM', amount:'PHP 999.00'}) +
    _gtxRender({type:'no-amount',   label:'KYC Verification',                        ref:'Reference No: GC987654321012345',          badge:'Approved'}) +
    _gtxRender({type:'skeleton'}) +
  '</div>';
}

function _gtxUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('gtx-demo-preview');
  if (!preview) return;
  preview.innerHTML = _gtxRender({
    type:     getVal('gtx-ctrl-type', 'default'),
    label:    getVal('gtx-ctrl-label', 'Juan Dela Cruz'),
    badge:    getVal('gtx-ctrl-badge', 'Sent'),
    date:     getVal('gtx-ctrl-date', 'Apr 14, 2026, 10:24 AM'),
    amount:   getVal('gtx-ctrl-amount', 'PHP 1,500.00'),
    ref:      getVal('gtx-ctrl-ref', 'GC123456789876543'),
    initials: getVal('gtx-ctrl-initials', 'JD')
  });
}

/* ── Generic Transaction Card Spec Cards (cascaded pattern) ──────── */
var _gtxSpecCards = {
  'default':     { type: 'default' },
  'with-avatar': { type: 'with-avatar' },
  'no-amount':   { type: 'no-amount' }
};

var _specCards = _gtxSpecCards;
window._specCards = _specCards;

function _getGtxSnippet(cardKey, lang, card) {
  var t = (card && card.type) || cardKey;
  if (lang === 'swift') {
    if (t === 'with-avatar') return 'EBTransactionCard(\n    title: "Juan Dela Cruz",\n    date: "Today, 3:24 PM",\n    amount: "PHP 500.00",\n    leading: .avatar("JD")\n)';
    if (t === 'no-amount')   return 'EBTransactionCard(\n    title: "Profile updated",\n    metadata: "Reference No: GC123456789876543",\n    trailing: .badge(EBBadge("Approved"))\n)';
    if (t === 'more-information') return 'EBTransactionCard(\n    title: "Globe Postpaid",\n    date: "Apr 12, 2026, 9:15 AM",\n    amount: "PHP 999.00",\n    trailing: .menu { /* show actions */ }\n)';
    if (t === 'skeleton')    return 'EBTransactionCard(loading: true)';
    return 'EBTransactionCard(\n    title: "Globe Postpaid",\n    badge: EBBadge("Paid", intent: .information),\n    date: "Apr 12, 2026, 9:15 AM",\n    amount: "PHP 999.00"\n)';
  }
  if (t === 'with-avatar') return 'EBTransactionCard(\n    title = "Juan Dela Cruz",\n    date = "Today, 3:24 PM",\n    amount = "PHP 500.00",\n    leading = { EBAvatar(initials = "JD") }\n)';
  if (t === 'no-amount')   return 'EBTransactionCard(\n    title = "Profile updated",\n    metadata = "Reference No: GC123456789876543",\n    trailing = EBRowTrailing.Badge(EBBadge("Approved"))\n)';
  if (t === 'more-information') return 'EBTransactionCard(\n    title = "Globe Postpaid",\n    date = "Apr 12, 2026, 9:15 AM",\n    amount = "PHP 999.00",\n    trailing = EBRowTrailing.Menu { /* show actions */ }\n)';
  if (t === 'skeleton')    return 'EBTransactionCard(loading = true)';
  return 'EBTransactionCard(\n    title = "Globe Postpaid",\n    badge = EBBadge("Paid", EBBadgeIntent.Information),\n    date = "Apr 12, 2026, 9:15 AM",\n    amount = "PHP 999.00"\n)';
}

function buildSwiftSnippet(type, card)   { return _getGtxSnippet(type, 'swift', card); }
function buildComposeSnippet(type, card) { return _getGtxSnippet(type, 'compose', card); }
function getSnippet(type, lang, card)    { return _getGtxSnippet(type, lang, card); }
window.getSnippet = getSnippet;

function _gtxSpecRender(card) {
  // Use sensible per-type defaults so the preview looks complete
  var t = card.type || 'default';
  if (t === 'with-avatar') return _gtxRender({type:t, label:'Juan Dela Cruz', badge:'Sent', date:'Apr 14, 2026, 10:24 AM', amount:'PHP 1,500.00', initials:'JD'});
  if (t === 'no-amount')   return _gtxRender({type:t, label:'KYC Verification', ref:'Reference No: GC987654321012345', badge:'Approved'});
  if (t === 'more-information') return _gtxRender({type:t, label:'Globe Postpaid', date:'Apr 12, 2026, 9:15 AM', amount:'PHP 999.00'});
  if (t === 'skeleton')    return _gtxRender({type:t});
  return _gtxRender({type:t, label:'Globe Postpaid', badge:'Paid', date:'Apr 12, 2026, 9:15 AM', amount:'PHP 999.00'});
}

function updateSpecCard(cardKey, prop, value) {
  var card = _gtxSpecCards[cardKey];
  if (!card) return;
  card[prop] = value;

  /* Update preview body */
  var card$ = document.getElementById('spec-card-' + _gtxCardKeyFor(cardKey));
  if (card$) {
    var preview = card$.querySelector('.spec-card-preview, .spec-preview-body, .spec-preview-frame');
    if (preview) preview.innerHTML = _gtxSpecRender(card);
  }

  /* Update Type readout — data-sp="<demoKey>-type" */
  var spType = document.querySelector('[data-sp="' + cardKey + '-type"]');
  if (spType) spType.textContent = card.type;

  /* Update DEV code */
  var devView = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardKey + '"]');
    if (codeEl) {
      var code = getSnippet(cardKey, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

/* Map a demoKey to the spec card's full cardKey via the inner preview id. */
function _gtxCardKeyFor(demoKey) {
  var idMap = { 'default': 'gtx-spec-1', 'with-avatar': 'gtx-spec-2', 'no-amount': 'gtx-spec-3' };
  var inner = document.getElementById(idMap[demoKey]);
  if (!inner) return null;
  var card$ = inner.closest('.spec-card');
  if (!card$) return null;
  return (card$.id || '').replace(/^spec-card-/, '');
}

function _gtxInit() {
  var ctx = document.getElementById('gtx-context-preview');
  if (ctx) ctx.innerHTML = _gtxContextMarkup();
  _gtxUpdate();

  var s1 = document.getElementById('gtx-spec-1');
  if (s1) s1.innerHTML = _gtxRender({type:'default', label:'Label', badge:'Label', date:'Date XX, XXXX, Time (AM,PM)', amount:'PHP XX.XX'});

  var s2 = document.getElementById('gtx-spec-2');
  if (s2) s2.innerHTML = _gtxRender({type:'with-avatar', label:'Label', badge:'Label', date:'Date XX, XXXX, Time (AM,PM)', amount:'XXX.XX', initials:'G'});

  var s3 = document.getElementById('gtx-spec-3');
  if (s3) s3.innerHTML = _gtxRender({type:'no-amount', label:'Label', ref:'Reference No: GC123456789876543', badge:'Label'});

  /* Sync each per-card type dropdown to the card's default type. */
  ['default', 'with-avatar', 'no-amount'].forEach(function(k) {
    var ck = _gtxCardKeyFor(k);
    if (!ck) return;
    var card$ = document.getElementById('spec-card-' + ck);
    if (!card$) return;
    var sel = card$.querySelector('.demo-figma-panel select');
    if (!sel) return;
    var t = (_gtxSpecCards[k] || {}).type || k;
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === t) { sel.selectedIndex = i; break; }
    }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _gtxInit);
else _gtxInit();

(function(){
  function reinit(){ if (typeof _gtxInit === 'function') _gtxInit(); }
  document.addEventListener('astro:page-load', reinit);
})();
