/* Auto-extracted from assessment-src/components/vertical-voucher.html.
 * Powers the live-preview dropdowns/toggles for the vertical-voucher component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs vertical-voucher
 */
/* ── Vertical Voucher JS ──────────────────────────────────────────── */
function _vvTicket(w, h, c1, c2, label, badgeText) {
  var notchR = 6;
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">';
  s += '<defs>';
  s += '<clipPath id="vv-clip-' + w + '-' + h + '-' + label + '"><path d="M0 0 H' + w + ' V' + (h / 2 - notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 ' + w + ' ' + (h / 2 + notchR) + ' V' + h + ' H0 V' + (h / 2 + notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 0 ' + (h / 2 - notchR) + ' Z" /></clipPath>';
  s += '<linearGradient id="vv-g-' + w + '-' + h + '-' + label + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient>';
  s += '</defs>';
  s += '<g clip-path="url(#vv-clip-' + w + '-' + h + '-' + label + ')">';
  s += '<rect width="' + w + '" height="' + h + '" fill="url(#vv-g-' + w + '-' + h + '-' + label + ')"/>';
  if (label) {
    s += '<text x="' + (w / 2) + '" y="' + (h / 2 - 10) + '" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="11" font-weight="700" font-family="system-ui">' + label + '</text>';
  }
  s += '</g>';
  s += '<line x1="6" y1="' + (h / 2) + '" x2="' + (w - 6) + '" y2="' + (h / 2) + '" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3"/>';
  if (badgeText) {
    var bw = 48, bh = 20;
    var bx = w - bw;
    var by = h / 2 - bh / 2 - 2;
    s += '<g transform="translate(' + bx + ',' + by + ')">';
    s += '<rect x="0" y="0" width="' + bw + '" height="' + bh + '" fill="#1972F9" rx="0"/>';
    s += '<text x="' + (bw / 2) + '" y="' + (bh / 2 + 4) + '" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="700" font-family="system-ui">' + badgeText + '</text>';
    s += '</g>';
  }
  s += '</svg>';
  return s;
}

function _vvCard(opts) {
  var largeOn = opts.large !== false;
  var smallOn = opts.small !== false;
  var row1 = opts.row1 !== false;
  var row2 = opts.row2 !== false;
  var header = opts.header !== false;
  var desc = opts.desc !== false;
  var amount = opts.amount !== false;
  var validity = opts.validity !== false;
  var label = opts.label || 'Vertical Voucher';

  var s = '<div style="display:flex;flex-direction:column;gap:6px;align-items:center;">';
  s += '<div style="width:162px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);">';
  if (largeOn) {
    s += _vvTicket(162, 153, '#D63A2F', '#8C1A15', 'Food', '35% off');
  }
  if (smallOn) {
    s += _vvTicket(162, 100, '#D63A2F', '#8C1A15', 'Food', '35% off');
  }
  // Content block
  s += '<div style="padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;">';
  if (row1) {
    s += '<div style="display:flex;gap:4px;">';
    s += '<span style="background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Limited</span>';
    s += '<span style="background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Expiring</span>';
    s += '</div>';
  }
  if (row2) {
    s += '<div style="display:flex;gap:4px;">';
    s += '<span style="background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Hot</span>';
    s += '<span style="background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Discounted</span>';
    s += '</div>';
  }
  if (header) {
    s += '<div style="color:#0A2757;font-size:14px;font-weight:700;font-family:\'Proxima Soft\',system-ui;line-height:18px;letter-spacing:0.25px;">Buy Load Pre-seeded SKU Voucher Sample</div>';
  }
  if (desc) {
    s += '<div style="color:#445C85;font-size:11px;font-family:\'BarkAda\',system-ui;line-height:16px;">This is the description of the voucher.</div>';
  }
  if (amount) {
    s += '<div style="display:flex;flex-direction:column;">';
    s += '<div style="color:#005CE5;font-size:13px;font-weight:700;font-family:\'Proxima Soft\',system-ui;letter-spacing:0.25px;">PHP 100.00</div>';
    s += '<div style="color:#90A8D0;font-size:11px;font-family:\'BarkAda\',system-ui;text-decoration:line-through;">PHP 150.00</div>';
    s += '</div>';
  }
  if (validity) {
    s += '<div style="color:#6780A9;font-size:8px;font-family:\'BarkAda\',system-ui;letter-spacing:0;">Validity: Dec 25 2022 - Jan 5 2023</div>';
  }
  s += '</div>';
  s += '</div>';
  s += '<div style="color:#666;font-size:10px;font-family:system-ui;font-weight:600;">' + label + '</div>';
  s += '</div>';
  return s;
}

function _vvBuildPreview() {
  var s = '<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;justify-content:center;">';
  s += _vvCard({ label: 'Default (all props on)' });
  s += _vvCard({ large: true, small: false, row2: false, label: 'Large asset only' });
  s += _vvCard({ large: false, small: true, row1: false, amount: false, validity: false, label: 'Small asset minimal' });
  s += '</div>';
  return s;
}

function _vvInit() {
  var el = document.getElementById('vv-demo-preview');
  if (el) el.innerHTML = _vvBuildPreview();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vvInit);
else _vvInit();
