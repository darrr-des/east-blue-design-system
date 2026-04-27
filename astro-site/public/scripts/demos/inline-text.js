/* Auto-extracted from assessment-src/components/inline-text.html.
 * Powers the live-preview dropdowns/toggles for the inline-text component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs inline-text
 */
/* ── Inline Text JS ─────────────────────────────────────────────── */
/* 5 variants = 5 trailing-slot compositions. Preview renders each
   honestly so the "one enum, five layouts" critique in Open Issues
   is visible in the live demo.                                       */

function _itxEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _itxCopyIcon() {
  /* Copy icon — inherits color from parent (#445C85 by default per Figma
   * inline-text/color/icon token). */
  return '<span style="display:inline-flex;color:#445C85;" aria-hidden="true">' +
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>' +
      '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
    '</svg>' +
  '</span>';
}

function _itxRender(opts) {
  var type  = opts.type  || 'default';
  var label = opts.label || 'Label';
  var value = opts.value || '0.00';
  var desc  = opts.desc  || 'Description goes here';
  var cta   = opts.cta   || 'CTA';
  var badge = opts.badge || 'Label';

  /* Inline Text in Figma: a single horizontal row with label on the left
   * and value/badge/value+copy on the right (right-aligned). Variants 4-5
   * stack a description below the label, with the value (and optional CTA)
   * stacked on the right. Tokens (per Figma var defs):
   *   label  → inline-text/color/label         #0A2757
   *   value  → inline-text/color/label-value   #445C85
   *   desc   → inline-text/color/description   #6780A9
   *   link   → inline-text/color/label-link    #005CE5
   *   badge  → badge/information/light/{bg #E5F1FF, label #005CE5} */
  var rowStyle    = "display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;";
  var labelStyle  = "font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;";
  var valueStyle  = "font-weight:600;font-size:16px;color:#445C85;margin:0;line-height:20px;";
  var descStyle   = "font-family:'BarkAda',sans-serif;font-weight:600;font-size:12px;color:#6780A9;margin:2px 0 0;line-height:18px;";
  var linkStyle   = "font-weight:600;font-size:12px;color:#005CE5;margin:2px 0 0;line-height:18px;letter-spacing:0.5px;";
  var badgeStyle  = "display:inline-flex;align-items:center;background:#E5F1FF;color:#005CE5;font-weight:700;font-size:12px;letter-spacing:0.5px;padding:4px 10px;border-radius:99px;";
  var clipStyle   = "display:inline-flex;align-items:center;gap:8px;color:#445C85;font-weight:600;font-size:16px;line-height:20px;";

  // Variants 4 & 5 — label + description on left column, value (+ CTA) on right column
  if (type === 'with-description' || type === 'with-text-link') {
    var leftCol  = '<div style="display:flex;flex-direction:column;align-items:flex-start;">' +
                     '<p style="' + labelStyle + '">' + _itxEscape(label) + '</p>' +
                     '<p style="' + descStyle + '">' + _itxEscape(desc) + '</p>' +
                   '</div>';
    var rightCol = '<div style="display:flex;flex-direction:column;align-items:flex-end;">' +
                     '<p style="' + valueStyle + '">' + _itxEscape(value) + '</p>' +
                     (type === 'with-text-link' ? '<p style="' + linkStyle + '">' + _itxEscape(cta) + '</p>' : '') +
                   '</div>';
    return '<div style="' + rowStyle + 'align-items:flex-start;">' + leftCol + rightCol + '</div>';
  }

  // Variants 1-3 — single horizontal row
  var trailing;
  if (type === 'with-badge') {
    trailing = '<span style="' + badgeStyle + '">' + _itxEscape(badge) + '</span>';
  } else if (type === 'with-clipboard') {
    trailing = '<span style="' + clipStyle + '"><span>' + _itxEscape(value) + '</span>' + _itxCopyIcon() + '</span>';
  } else {
    trailing = '<p style="' + valueStyle + '">' + _itxEscape(value) + '</p>';
  }
  return '<div style="' + rowStyle + '">' +
           '<p style="' + labelStyle + '">' + _itxEscape(label) + '</p>' +
           trailing +
         '</div>';
}

function _itxContextMarkup() {
  // A realistic fee-breakdown / receipt block
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm">' +
    _itxRender({type:'default',        label:'Amount',         value:'PHP 1,500.00'}) +
    _itxRender({type:'default',        label:'Service fee',    value:'PHP 10.00'}) +
    _itxRender({type:'with-badge',     label:'Voucher',        badge:'Applied'}) +
    _itxRender({type:'with-clipboard', label:'Reference No',   value:'GC123456789'}) +
    _itxRender({type:'with-text-link', label:'Promo code',     value:'GC50OFF', desc:'Saved PHP 50.00', cta:'Change'}) +
  '</div>';
}

function _itxUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('itx-demo-preview');
  if (!preview) return;
  preview.innerHTML = _itxRender({
    type:  getVal('itx-ctrl-type',  'default'),
    label: getVal('itx-ctrl-label', 'Amount'),
    value: getVal('itx-ctrl-value', 'PHP 1,500.00'),
    desc:  getVal('itx-ctrl-desc',  'Description goes here'),
    cta:   getVal('itx-ctrl-cta',   'CTA'),
    badge: getVal('itx-ctrl-badge', 'Label')
  });
}

function _itxInit() {
  var ctx = document.getElementById('itx-context-preview');
  if (ctx) ctx.innerHTML = _itxContextMarkup();
  _itxUpdate();

  var s1 = document.getElementById('itx-spec-1');
  if (s1) s1.innerHTML = _itxRender({type:'default', label:'Label', value:'0.00'});

  var s2 = document.getElementById('itx-spec-2');
  if (s2) s2.innerHTML = _itxRender({type:'with-clipboard', label:'Label', value:'00000000'});

  var s3 = document.getElementById('itx-spec-3');
  if (s3) s3.innerHTML = _itxRender({type:'with-badge', label:'Label', badge:'Label'});

  var s4 = document.getElementById('itx-spec-4');
  if (s4) s4.innerHTML = _itxRender({type:'with-description', label:'Label', value:'0.00', desc:'Description goes here'});

  var s5 = document.getElementById('itx-spec-5');
  if (s5) s5.innerHTML = _itxRender({type:'with-text-link', label:'Label', value:'0.00', desc:'Description goes here', cta:'CTA'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _itxInit);
else _itxInit();
