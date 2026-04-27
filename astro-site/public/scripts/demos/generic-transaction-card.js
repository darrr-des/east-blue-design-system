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
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _gtxInit);
else _gtxInit();
