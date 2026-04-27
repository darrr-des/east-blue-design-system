/* Auto-extracted from assessment-src/components/terms-conditions-accordion.html.
 * Powers the live-preview dropdowns/toggles for the terms-conditions-accordion component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs terms-conditions-accordion
 */
/* ── Terms & Conditions Accordion JS ─────────────────────────────── */
function _tcAccordionRow(text) {
  var s = '<div style="display:flex;gap:8px;align-items:flex-start;">';
  s += '<div style="padding-top:2px;flex:0 0 auto;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5 6 11.5 13 4.5" stroke="#90A8D0" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  s += '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">' + text + '</div>';
  s += '</div>';
  return s;
}

function _tcAccordionBuildPreview() {
  var rules = [
    'Valid from March 11 to 14, 2021',
    'Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last',
    'The promo is not valid in conjunction with other promos or discounts.',
    'Metro Manila only.'
  ];
  var shell = 'max-width:336px;display:flex;flex-direction:column;gap:12px;';
  var headerBase = 'display:flex;align-items:center;justify-content:space-between;padding:20px 16px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:8px;';
  var titleStyle = 'color:#0A2757;font-family:\'Proxima Soft\', system-ui;font-weight:700;font-size:16px;line-height:20px;letter-spacing:.25px;';
  var chevron = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#005CE5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var chevronUp = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 12l4-4 4 4" stroke="#005CE5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var s = '<div style="' + shell + '">';

  // Collapsed variant
  s += '<div style="' + headerBase + '">';
  s +=   '<div style="' + titleStyle + '">Terms &amp; Conditions</div>';
  s +=   chevron;
  s += '</div>';

  // Expanded variant
  s += '<div style="display:flex;flex-direction:column;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:8px;overflow:hidden;">';
  s +=   '<div style="display:flex;align-items:center;justify-content:space-between;padding:20px 16px;">';
  s +=     '<div style="' + titleStyle + '">Terms &amp; Conditions</div>';
  s +=     chevronUp;
  s +=   '</div>';
  s +=   '<div style="background:#F6F9FD;padding:16px;display:flex;flex-direction:column;gap:8px;">';
  rules.forEach(function(r){ s += _tcAccordionRow(r); });
  s +=   '</div>';
  s += '</div>';

  s += '</div>';
  return s;
}

function _tcAccordionInit() {
  var el = document.getElementById('tc-accordion-demo-preview');
  if (el) el.innerHTML = _tcAccordionBuildPreview();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tcAccordionInit);
else _tcAccordionInit();
