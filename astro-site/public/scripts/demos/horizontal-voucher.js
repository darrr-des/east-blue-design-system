/* Auto-extracted from assessment-src/components/horizontal-voucher.html.
 * Powers the live-preview dropdowns/toggles for the horizontal-voucher component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs horizontal-voucher
 */
/* ── Horizontal Voucher JS ─────────────────────────────────────────── */
function _hvHero(w, h, c1, c2, label, badgeText) {
  var notchR = 6;
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">';
  s += '<defs>';
  s += '<clipPath id="hv-clip-' + w + '-' + h + '-' + label + '"><path d="M0 0 H' + w + ' V' + h + ' H0 Z" /></clipPath>';
  s += '<linearGradient id="hv-g-' + w + '-' + h + '-' + label + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient>';
  s += '</defs>';
  s += '<g clip-path="url(#hv-clip-' + w + '-' + h + '-' + label + ')">';
  s += '<rect width="' + w + '" height="' + h + '" fill="url(#hv-g-' + w + '-' + h + '-' + label + ')"/>';
  if (label) {
    s += '<text x="' + (w / 2) + '" y="' + (h / 2 + 6) + '" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="22" font-weight="700" font-family="system-ui">' + label + '</text>';
  }
  // perforated line near the bottom
  s += '<line x1="6" y1="' + (h - 8) + '" x2="' + (w - 6) + '" y2="' + (h - 8) + '" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3" opacity="0.7"/>';
  s += '</g>';
  if (badgeText) {
    var bw = 52, bh = 22;
    var bx = w - bw;
    var by = 12;
    s += '<g transform="translate(' + bx + ',' + by + ')">';
    s += '<rect x="0" y="0" width="' + bw + '" height="' + bh + '" fill="#1972F9" rx="0"/>';
    s += '<text x="' + (bw / 2) + '" y="' + (bh / 2 + 4) + '" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="700" font-family="system-ui">' + badgeText + '</text>';
    s += '</g>';
  }
  s += '</svg>';
  return s;
}

function _hvCard(opts) {
  var asset = opts.asset !== false;
  var badges = opts.badges !== false;
  var header = opts.header !== false;
  var desc = opts.desc !== false;
  var amount = opts.amount !== false;
  var validity = opts.validity !== false;
  var label = opts.label || 'Horizontal Voucher';

  var s = '<div style="display:flex;flex-direction:column;gap:6px;align-items:center;">';
  s += '<div style="width:336px;background:#FFFFFF;border:1px solid #E6EAF2;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(10,39,87,0.06);">';
  if (asset) {
    s += _hvHero(336, 144, '#D63A2F', '#8C1A15', 'GrabFood', '35% off');
  }
  // Content block
  s += '<div style="padding:8px 12px 12px 12px;display:flex;flex-direction:column;gap:4px;">';
  if (badges) {
    s += '<div style="display:flex;gap:4px;flex-wrap:wrap;">';
    s += '<span style="background:#2340A9;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Limited</span>';
    s += '<span style="background:#D61B2C;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Expiring</span>';
    s += '<span style="background:#B50707;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Hot</span>';
    s += '<span style="background:#1972F9;color:#FFF;font-size:10px;font-weight:700;font-family:\'Proxima Soft\',system-ui;padding:3px 4px 1px 4px;border-radius:4px;letter-spacing:0.5px;">Discounted</span>';
    s += '</div>';
  }
  if (header) {
    s += '<div style="color:#0A2757;font-size:16px;font-weight:700;font-family:\'Proxima Soft\',system-ui;line-height:20px;letter-spacing:0.25px;">Grab Food</div>';
  }
  if (desc) {
    s += '<div style="color:#445C85;font-size:12px;font-weight:500;font-family:\'BarkAda\',system-ui;line-height:18px;">This is the description of the voucher.</div>';
  }
  if (amount) {
    s += '<div style="display:flex;gap:6px;align-items:center;">';
    s += '<div style="color:#005CE5;font-size:14px;font-weight:700;font-family:\'Proxima Soft\',system-ui;letter-spacing:0.25px;">PHP 100.00</div>';
    s += '<div style="color:#90A8D0;font-size:12px;font-weight:700;font-family:\'Proxima Soft\',system-ui;text-decoration:line-through;">PHP 150.00</div>';
    s += '</div>';
  }
  if (validity) {
    s += '<div style="color:#6780A9;font-size:8px;font-weight:500;font-family:\'BarkAda\',system-ui;letter-spacing:0;">Validity: Dec 25 2022 - Jan 5 2023</div>';
  }
  s += '</div>';
  s += '</div>';
  s += '<div style="color:#666;font-size:10px;font-family:system-ui;font-weight:600;">' + label + '</div>';
  s += '</div>';
  return s;
}

function _hvBuildPreview() {
  var s = '<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;justify-content:center;">';
  s += _hvCard({ label: 'Default (all props on)' });
  s += _hvCard({ badges: false, desc: false, label: 'Minimal — header + price + validity' });
  s += '</div>';
  return s;
}

function _hvInit() {
  var el = document.getElementById('hv-demo-preview');
  if (el) el.innerHTML = _hvBuildPreview();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _hvInit);
else _hvInit();
