/* Auto-extracted from assessment-src/components/footer.html.
 * Powers the live-preview dropdowns/toggles for the footer component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs footer
 */
/* ── Footer JS ──────────────────────────────────────────────────────
   Lightweight stylised replica of 7 shipped variants.
   Specs: 360px wide, #FFFFFF bg, BarkAda SemiBold 12/18 disclaimer,
   Proxima Soft Bold 12/12 label, #6780A9 description, #005CE5 link,
   #90A8D0 label.                                                     */

var EB_FOOTER_GCASH_SVG =
  '<span class="eb-preview-footer__logo eb-preview-footer__logo--gcash"><svg viewBox="0 0 97 32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'
  + '<circle cx="12" cy="16" r="9" fill="none" stroke="#005CE5" stroke-width="3"/>'
  + '<path d="M12 16h7" stroke="#005CE5" stroke-width="3" stroke-linecap="round"/>'
  + '<text x="26" y="22" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="16" fill="#0A2757">GCash</text>'
  + '</svg></span>';

var EB_FOOTER_FUSE_SVG =
  '<span class="eb-preview-footer__logo eb-preview-footer__logo--fuse"><svg viewBox="0 0 72 18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'
  + '<text x="0" y="14" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="14" fill="#F15B2E">FUSE</text>'
  + '<rect x="38" y="4" width="10" height="10" transform="rotate(45 43 9)" fill="#F15B2E"/>'
  + '</svg></span>';

var EB_FOOTER_CIMB_SVG =
  '<span class="eb-preview-footer__logo eb-preview-footer__logo--cimb"><svg viewBox="0 0 88 17" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'
  + '<rect x="0" y="2" width="42" height="13" fill="#A6192E"/>'
  + '<text x="4" y="12" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="10" fill="#FFFFFF">CIMB</text>'
  + '<text x="46" y="12" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="10" fill="#0A2757">BANK</text>'
  + '</svg></span>';

var EB_FOOTER_PDAX_SVG =
  '<span class="eb-preview-footer__logo eb-preview-footer__logo--pdax"><svg viewBox="0 0 97 29" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'
  + '<path d="M6 4 L18 14 L6 24 Z" fill="#00A859"/>'
  + '<text x="26" y="20" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="16" fill="#0A2757">PDAX</text>'
  + '</svg></span>';

var EB_FOOTER_BAYAD_SVG =
  '<span class="eb-preview-footer__logo eb-preview-footer__logo--bayad"><svg viewBox="0 0 59 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'
  + '<circle cx="7" cy="8" r="5" fill="#E4002B"/>'
  + '<text x="14" y="12" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="10" fill="#0A2757">Bayad</text>'
  + '</svg></span>';

function _footerVariant1() {
  return '<div class="eb-preview eb-preview-footer" data-variant="1">'
    + '<div class="eb-preview-footer__row">'
    +   '<div class="eb-preview-footer__powered-col">'
    +     '<span class="eb-preview-footer__label">Powered by</span>'
    +     EB_FOOTER_FUSE_SVG
    +   '</div>'
    +   '<div class="eb-preview-footer__body">'
    +     '<p class="eb-preview-footer__desc">Fuse Lending, Inc. SEC Reg. No. CS201617622,</p>'
    +     '<p class="eb-preview-footer__desc">Cert. of Authority to Operate Lending Company, (CA) No. 1897</p>'
    +     '<p class="eb-preview-footer__desc eb-preview-footer__desc--spaced">Learn about the Product Information & Support:</p>'
    +     '<a class="eb-preview-footer__link" href="#" onclick="return false;">GLoan on Help Center</a>'
    +   '</div>'
    + '</div>'
    + '</div>';
}

function _footerVariant2() {
  return '<div class="eb-preview eb-preview-footer" data-variant="2">'
    + '<p class="eb-preview-footer__desc">I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.</p>'
    + '<div class="eb-preview-footer__logos eb-preview-footer__logos--left">'
    +   EB_FOOTER_GCASH_SVG + EB_FOOTER_CIMB_SVG
    + '</div>'
    + '</div>';
}

function _footerVariant3() {
  return '<div class="eb-preview eb-preview-footer eb-preview-footer--center" data-variant="3">'
    + '<p class="eb-preview-footer__desc">Get information and product support.</p>'
    + '<a class="eb-preview-footer__link" href="#" onclick="return false;">Find GSave in the Help Center</a>'
    + '</div>';
}

function _footerVariant4() {
  return '<div class="eb-preview eb-preview-footer eb-preview-footer--center" data-variant="4">'
    + '<div class="eb-preview-footer__logos eb-preview-footer__logos--center">'
    +   EB_FOOTER_GCASH_SVG + EB_FOOTER_CIMB_SVG
    + '</div>'
    + '</div>';
}

function _footerVariant5() {
  return '<div class="eb-preview eb-preview-footer" data-variant="5">'
    + '<p class="eb-preview-footer__desc">Learn about the Product Information & Support:</p>'
    + '<a class="eb-preview-footer__link" href="#" onclick="return false;">GCredit on Help Center</a>'
    + '<div class="eb-preview-footer__logos eb-preview-footer__logos--left">'
    +   EB_FOOTER_GCASH_SVG + EB_FOOTER_CIMB_SVG
    + '</div>'
    + '</div>';
}

function _footerVariant6() {
  return '<div class="eb-preview eb-preview-footer" data-variant="6">'
    + '<div class="eb-preview-footer__powered-row">'
    +   '<span class="eb-preview-footer__label">Powered by</span>'
    +   EB_FOOTER_BAYAD_SVG
    + '</div>'
    + '<p class="eb-preview-footer__desc">Learn about the Product Information & Support:</p>'
    + '<a class="eb-preview-footer__link" href="#" onclick="return false;">GCredit on Help Center</a>'
    + '</div>';
}

function _footerVariant7() {
  return '<div class="eb-preview eb-preview-footer eb-preview-footer--center" data-variant="7">'
    + '<p class="eb-preview-footer__tiny">In partnership with</p>'
    + '<div class="eb-preview-footer__logos eb-preview-footer__logos--center">'
    +   EB_FOOTER_GCASH_SVG + EB_FOOTER_PDAX_SVG
    + '</div>'
    + '</div>';
}

var _footerRenderers = {
  '1': _footerVariant1,
  '2': _footerVariant2,
  '3': _footerVariant3,
  '4': _footerVariant4,
  '5': _footerVariant5,
  '6': _footerVariant6,
  '7': _footerVariant7
};

var _footerMeta = {
  '1': {alignment: 'left',   description: 'none'},
  '2': {alignment: 'left',   description: 'default (acknowledgement)'},
  '3': {alignment: 'center', description: 'with link'},
  '4': {alignment: 'center', description: 'none'},
  '5': {alignment: 'left',   description: 'with link'},
  '6': {alignment: 'left',   description: 'with link'},
  '7': {alignment: 'center', description: 'none (label)'}
};

function _footerContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--gap-lg">' +
    _footerVariant1() +
    _footerVariant5() +
    _footerVariant7() +
  '</div>';
}

function _footerUpdate() {
  var sel = document.getElementById('footer-ctrl-variant');
  var key = sel ? sel.value : '1';
  var preview = document.getElementById('footer-demo-preview');
  var alignReadout = document.getElementById('footer-ctrl-alignment-readout');
  var descReadout  = document.getElementById('footer-ctrl-description-readout');
  if (preview && _footerRenderers[key]) preview.innerHTML = _footerRenderers[key]();
  if (alignReadout) alignReadout.textContent = _footerMeta[key].alignment;
  if (descReadout)  descReadout.textContent  = _footerMeta[key].description;
}

function _footerInit() {
  var ctx = document.getElementById('footer-context-preview');
  if (ctx) ctx.innerHTML = _footerContextMarkup();
  _footerUpdate();
  for (var i = 1; i <= 7; i++) {
    var el = document.getElementById('footer-spec-' + i);
    if (el && _footerRenderers[String(i)]) el.innerHTML = _footerRenderers[String(i)]();
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _footerInit);
else _footerInit();
