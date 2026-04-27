/* Auto-extracted from assessment-src/components/voucher-card-horizontal.html.
 * Powers the live-preview dropdowns/toggles for the voucher-card-horizontal component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs voucher-card-horizontal
 */
/* ── Voucher Card Horizontal JS ─────────────────────────────────── */
function _vchCard(state) {
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
  s += '<div style="color:#90A8D0;font-size:14px;font-weight:600;text-decoration:line-through;letter-spacing:0.25px;">PHP 90.00</div>';
  s += '</div>';
  s += '</div>';
  s += '<div style="color:' + metadataColor + ';font-size:10px;font-family:\'BarkAda\',system-ui;font-weight:600;line-height:15px;">Validity: Dec 25 2022 - Jan 5 2023</div>';
  s += '</div>';

  // Partner image (right) — 96 wide, perforated edge, logo, GET VOUCHER
  s += '<div style="position:relative;width:96px;height:111px;background:' + partnerBg + ';overflow:hidden;">';
  // Perforated dashed edge (left)
  s += '<div style="position:absolute;left:0;top:0;bottom:0;width:1px;border-left:1px dashed rgba(255,255,255,0.9);"></div>';
  // Logo circle (GCash-ish G)
  s += '<div style="position:absolute;left:calc(50% - 22px);top:calc(50% - 22px);width:44px;height:44px;border:3px solid #FFFFFF;border-right-color:transparent;border-radius:50%;opacity:' + (isGreyed ? '0.55' : '1') + ';"></div>';
  s += '<div style="position:absolute;left:calc(50% - 5px);top:calc(50% - 5px);width:10px;height:10px;background:#FFFFFF;border-radius:50%;opacity:' + (isGreyed ? '0.55' : '1') + ';"></div>';
  // Right sliver with rotated GET VOUCHER
  s += '<div style="position:absolute;right:0;top:0;bottom:0;width:28px;display:flex;align-items:center;justify-content:center;border-left:1px dashed rgba(255,255,255,0.6);">';
  s += '<div style="transform:rotate(-90deg);color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;white-space:nowrap;">GET VOUCHER</div>';
  s += '</div>';
  // Corner badge (top-left)
  s += '<div style="position:absolute;top:8px;left:0;background:' + badgeBg + ';color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:0.25px;padding:4px 8px 2px 8px;border-top-right-radius:4px;border-bottom-right-radius:4px;line-height:10px;">' + badgeLabel + '</div>';
  s += '</div>';

  s += '</div>';
  s += '<div style="color:#666;font-size:10px;font-family:system-ui;font-weight:600;">state=' + state + '</div>';
  s += '</div>';
  return s;
}

function _vchBuildPreview() {
  var s = '<div style="display:flex;flex-direction:column;gap:14px;align-items:center;">';
  s += _vchCard('limited');
  s += _vchCard('expiring');
  s += _vchCard('used');
  s += _vchCard('expired');
  s += '</div>';
  return s;
}

function _vchInit() {
  var el = document.getElementById('vch-demo-preview');
  if (el) el.innerHTML = _vchBuildPreview();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vchInit);
else _vchInit();
