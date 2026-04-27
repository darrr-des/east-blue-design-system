/* Auto-extracted from assessment-src/components/voucher-details.html.
 * Powers the live-preview dropdowns/toggles for the voucher-details component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs voucher-details
 */
/* ── Voucher Details JS ──────────────────────────────────────────── */
function _vdStrip(w) {
  var s = '<svg width="' + w + '" height="16" viewBox="0 0 ' + w + ' 16" style="display:block">';
  s += '<circle cx="0" cy="8" r="6" fill="#F6F9FD" stroke="#E5EBF4" stroke-width="1"/>';
  s += '<circle cx="' + w + '" cy="8" r="6" fill="#F6F9FD" stroke="#E5EBF4" stroke-width="1"/>';
  s += '<line x1="14" y1="8" x2="' + (w - 14) + '" y2="8" stroke="#90A8D0" stroke-width="1" stroke-dasharray="3 3"/>';
  s += '</svg>';
  return s;
}

function _vdListRow(text) {
  var s = '<div style="display:flex;gap:8px;align-items:flex-start;">';
  s += '<div style="padding-top:2px;flex:0 0 auto;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5 6 11.5 13 4.5" stroke="#90A8D0" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  s += '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">' + text + '</div>';
  s += '</div>';
  return s;
}

function _vdBuildPreview() {
  var w = 320;
  var rules = [
    'Valid from March 11 to 14, 2021',
    'Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last',
    'The promo is not valid in conjunction with other promos or discounts.',
    'Metro Manila only.'
  ];

  var s = '<div style="max-width:' + w + 'px;border:1px solid #E5EBF4;border-radius:8px;overflow:hidden;background:#FFFFFF;box-shadow:0 0 4px rgba(2,14,34,0.06);display:flex;flex-direction:column;">';

  // Merchant header
  s +=   '<div style="display:flex;gap:8px;align-items:flex-start;padding:12px 16px 12px 10px;border-bottom:1px solid #E5EBF4;">';
  s +=     '<div style="width:40px;height:40px;border-radius:20px;background:#E5EBF4;display:flex;align-items:center;justify-content:center;">';
  s +=       '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 16h16M4 12h16M4 8h10" stroke="#0A2757" stroke-width="1.5" stroke-linecap="round"/></svg>';
  s +=     '</div>';
  s +=     '<div style="flex:1 0 0;padding-top:4px;">';
  s +=       '<div style="color:#0A2757;font-family:\'Proxima Soft\', system-ui;font-weight:700;font-size:16px;line-height:16px;letter-spacing:.25px;">Brand</div>';
  s +=       '<div style="color:#6780A9;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:12px;line-height:18px;margin-top:2px;">All branches</div>';
  s +=     '</div>';
  s +=     '<div style="padding-top:6px;"><div style="background:#2340A9;color:#FFFFFF;font-family:\'Proxima Soft\', system-ui;font-weight:700;font-size:12px;line-height:12px;letter-spacing:.5px;padding:3px 4px 1px;border-radius:4px;">Limited</div></div>';
  s +=   '</div>';

  // Voucher content
  s +=   '<div style="padding:12px 16px;display:flex;flex-direction:column;gap:8px;">';
  s +=     '<div style="color:#0A2757;font-family:\'Proxima Soft\', system-ui;font-weight:700;font-size:18px;line-height:23px;letter-spacing:.25px;">Voucher Title</div>';
  s +=     '<div style="display:flex;gap:4px;align-items:center;">';
  s +=       '<div style="color:#005CE5;font-family:\'Proxima Soft\', system-ui;font-weight:700;font-size:16px;line-height:16px;letter-spacing:.25px;">PHP 200.00</div>';
  s +=       '<div style="color:#90A8D0;font-family:\'Proxima Soft\', system-ui;font-weight:600;font-size:16px;line-height:16px;letter-spacing:.25px;text-decoration:line-through;">PHP 180.00</div>';
  s +=     '</div>';
  s +=     '<div style="font-family:\'Proxima Soft\', system-ui;font-weight:600;font-size:14px;line-height:14px;color:#6780A9;letter-spacing:.25px;"><span>Validity:</span> Mar 11 2023 - Mar 14 2023</div>';
  s +=   '</div>';

  // Strip divider
  s +=   '<div style="padding:0;line-height:0;background:#F6F9FD;">' + _vdStrip(w) + '</div>';

  // Description
  s +=   '<div style="padding:8px 12px 12px;">';
  s +=     '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">For every 12 oz or larger beverage purchase, you\'ll receive an Eco Tumbler Voucher for a FREE Tall Drink when you bring your personal cup with you on your next visit.</div>';
  s +=   '</div>';

  // T&C plain text (tCWithTextLink)
  s +=   '<div style="border-top:1px solid #E5EBF4;background:#FDFEFF;padding:16px;display:flex;flex-direction:column;gap:12px;">';
  s +=     '<div style="color:#0A2757;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">Terms &amp; Conditions</div>';
  s +=     '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">Valid from March 11 to 14, 2023. Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last. The promo is not valid in conjunction with other promos or discounts. Metro Manila only.</div>';
  s +=     '<div style="color:#005CE5;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">See full <span style="text-decoration:underline;">promo mechanics</span>.</div>';
  s +=   '</div>';

  // T&C Accordion (accordion=true, expanded)
  s +=   '<div style="border-top:1px solid #E5EBF4;display:flex;flex-direction:column;">';
  s +=     '<div style="display:flex;align-items:center;justify-content:space-between;padding:20px 16px;background:#FFFFFF;">';
  s +=       '<div style="color:#0A2757;font-family:\'Proxima Soft\', system-ui;font-weight:700;font-size:16px;line-height:20px;letter-spacing:.25px;">Terms &amp; Conditions</div>';
  s +=       '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 12l4-4 4 4" stroke="#005CE5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  s +=     '</div>';
  s +=     '<div style="background:#F6F9FD;padding:16px;display:flex;flex-direction:column;gap:6px;">';
  rules.forEach(function(r){ s += _vdListRow(r); });
  s +=     '</div>';
  s +=   '</div>';

  s += '</div>';

  // Composition callout
  s += '<div style="margin-top:16px;max-width:' + w + 'px;color:#666;font-family:system-ui;font-size:11px;line-height:16px;">Single 336×704 symbol, no variants. Four optional-content booleans: <code>accordion</code>, <code>badge</code>, <code>slashedAmount</code>, <code>tCWithTextLink</code> — all shown on here with their defaults.</div>';

  return s;
}

function _vdInit() {
  var el = document.getElementById('vd-demo-preview');
  if (el) el.innerHTML = _vdBuildPreview();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vdInit);
else _vdInit();
