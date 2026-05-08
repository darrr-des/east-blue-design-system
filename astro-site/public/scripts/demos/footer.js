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

/* Compose a footer markup from orthogonal props (used by spec cards
   when the user toggles alignment / description / partnerLogos away
   from the variant's defaults). */
function _footerComposed(opts) {
  var alignment    = opts.alignment    || 'left';
  var description  = opts.description  || 'none';
  var partnerLogos = opts.partnerLogos || 'none';

  var alignClass = alignment === 'center' ? ' eb-preview-footer--center' : '';
  var html = '<div class="eb-preview eb-preview-footer' + alignClass + '" data-variant="composed">';

  if (partnerLogos === 'powered-by') {
    html += '<div class="eb-preview-footer__powered-row">'
         +    '<span class="eb-preview-footer__label">Powered by</span>'
         +    EB_FOOTER_FUSE_SVG
         +  '</div>';
  }

  if (description === 'default') {
    html += '<p class="eb-preview-footer__desc">I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.</p>';
  } else if (description === 'with-link') {
    html += '<p class="eb-preview-footer__desc">Learn about the Product Information &amp; Support:</p>'
         +  '<a class="eb-preview-footer__link" href="#" onclick="return false;">Help Center</a>';
  }

  if (partnerLogos === 'gcash-x' || partnerLogos === 'grouped') {
    var logosAlign = alignment === 'center' ? 'center' : 'left';
    if (partnerLogos === 'grouped') {
      html += '<p class="eb-preview-footer__tiny">In partnership with</p>';
    }
    html += '<div class="eb-preview-footer__logos eb-preview-footer__logos--' + logosAlign + '">'
         +    EB_FOOTER_GCASH_SVG
         +    (partnerLogos === 'grouped' ? EB_FOOTER_PDAX_SVG : EB_FOOTER_CIMB_SVG)
         +  '</div>';
  }

  html += '</div>';
  return html;
}

/* Render a footer card. If only `variant` is set (or props match the
   variant defaults), use the canonical variant renderer. Otherwise,
   compose from orthogonal props. */
function _footerRenderCard(card) {
  var v = card.variant || '1';
  var defaults = _footerSpecCards['v' + v] || {};
  var matchesDefaults =
    (card.alignment    === undefined || card.alignment    === defaults.alignment) &&
    (card.description  === undefined || card.description  === defaults.description) &&
    (card.partnerLogos === undefined || card.partnerLogos === defaults.partnerLogos);
  if (matchesDefaults && _footerRenderers[v]) {
    return _footerRenderers[v]();
  }
  return _footerComposed(card);
}

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

/* ── Footer Spec Cards (cascaded pattern) ───────────────────────── */
/* Each spec card holds { variant, alignment, description, partnerLogos }.
   `variant` picks the canonical visual; the other props override the
   renderer's class/body/logo block when changed. */
var _footerSpecCards = {
  v1: { variant: '1', alignment: 'left',   description: 'none',      partnerLogos: 'powered-by' },
  v2: { variant: '2', alignment: 'left',   description: 'default',   partnerLogos: 'gcash-x' },
  v3: { variant: '3', alignment: 'center', description: 'with-link', partnerLogos: 'none' },
  v4: { variant: '4', alignment: 'center', description: 'none',      partnerLogos: 'gcash-x' },
  v5: { variant: '5', alignment: 'left',   description: 'with-link', partnerLogos: 'gcash-x' },
  v6: { variant: '6', alignment: 'left',   description: 'with-link', partnerLogos: 'powered-by' },
  v7: { variant: '7', alignment: 'center', description: 'none',      partnerLogos: 'grouped' }
};

var _specCards = _footerSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  return _getFooterSnippet(type, 'swift', card);
}
function buildComposeSnippet(type, card) {
  return _getFooterSnippet(type, 'compose', card);
}
function getSnippet(type, lang, card) {
  return _getFooterSnippet(type, lang, card);
}
window.getSnippet = getSnippet;

function _footerCardMatchesVariantDefaults(card) {
  var v = card && card.variant;
  if (!v) return false;
  var d = _footerSpecCards['v' + v];
  if (!d) return false;
  return card.alignment === d.alignment
      && card.description === d.description
      && card.partnerLogos === d.partnerLogos;
}

function _getFooterSnippet(cardKey, lang, card) {
  var v = (card && card.variant) || cardKey.replace('v', '');

  /* Canonical per-variant snippets when no overrides applied. */
  if (_footerCardMatchesVariantDefaults(card)) {
    if (lang === 'swift') {
      if (v === '1') return 'EBFooter("Powered by Fuse")\n    .ebDisclaimer("Regulatory disclaimer copy")\n    .ebHelpLink("Help center", destination: url)';
      if (v === '2') return 'EBFooter(disclaimer: "Acknowledgement disclaimer copy")\n    .ebPartnerLogos([gcashLogo, partnerLogo])\n    .ebAlignment(.leading)';
      if (v === '3') return 'EBFooter()\n    .ebDescription("Get information and product support.")\n    .ebHelpLink("Help center", destination: url)\n    .ebAlignment(.center)';
      if (v === '4') return 'EBFooter()\n    .ebPartnerLogos([gcashLogo, partnerLogo])\n    .ebAlignment(.center)';
      if (v === '5') return 'EBFooter()\n    .ebHelpLink("Help center", destination: url)\n    .ebPartnerLogos([gcashLogo, partnerLogo])\n    .ebAlignment(.leading)';
      if (v === '6') return 'EBFooter("Powered by Bayad Partners")\n    .ebHelpLink("Help center", destination: url)';
      return 'EBFooter("In partnership with")\n    .ebPartnerLogos([gcashLogo, pdaxLogo])\n    .ebAlignment(.center)';
    }
    if (v === '1') return 'EBFooter(\n    poweredBy = "Powered by Fuse",\n    disclaimer = "Regulatory disclaimer copy",\n    helpLink = EBFooterLink("Help center", url)\n)';
    if (v === '2') return 'EBFooter(\n    disclaimer = "Acknowledgement disclaimer copy",\n    partnerLogos = logos,\n    alignment = EBFooterAlignment.Leading\n)';
    if (v === '3') return 'EBFooter(\n    description = "Get information and product support.",\n    helpLink = EBFooterLink("Help center", url),\n    alignment = EBFooterAlignment.Center\n)';
    if (v === '4') return 'EBFooter(\n    partnerLogos = logos,\n    alignment = EBFooterAlignment.Center\n)';
    if (v === '5') return 'EBFooter(\n    helpLink = EBFooterLink("Help center", url),\n    partnerLogos = logos,\n    alignment = EBFooterAlignment.Leading\n)';
    if (v === '6') return 'EBFooter(\n    poweredBy = "Powered by Bayad Partners",\n    helpLink = EBFooterLink("Help center", url)\n)';
    return 'EBFooter(\n    title = "In partnership with",\n    partnerLogos = logos,\n    alignment = EBFooterAlignment.Center\n)';
  }

  /* Composed snippet — overrides applied. Build from current props. */
  var alignment    = (card && card.alignment)    || 'left';
  var description  = (card && card.description)  || 'none';
  var partnerLogos = (card && card.partnerLogos) || 'none';

  if (lang === 'swift') {
    var s = 'EBFooter()';
    if (partnerLogos === 'powered-by') s += '\n    .ebPoweredBy("Powered by Fuse")';
    if (description === 'default')     s += '\n    .ebDisclaimer("Acknowledgement disclaimer copy")';
    if (description === 'with-link')   s += '\n    .ebHelpLink("Help center", destination: url)';
    if (partnerLogos === 'gcash-x')    s += '\n    .ebPartnerLogos([gcashLogo, partnerLogo])';
    if (partnerLogos === 'grouped')    s += '\n    .ebPartnerLogos([gcashLogo, pdaxLogo])';
    s += '\n    .ebAlignment(.' + (alignment === 'center' ? 'center' : 'leading') + ')';
    return s;
  }
  var lines = ['EBFooter('];
  var args = [];
  if (partnerLogos === 'powered-by') args.push('    poweredBy = "Powered by Fuse"');
  if (description === 'default')     args.push('    disclaimer = "Acknowledgement disclaimer copy"');
  if (description === 'with-link')   args.push('    helpLink = EBFooterLink("Help center", url)');
  if (partnerLogos === 'gcash-x' || partnerLogos === 'grouped') args.push('    partnerLogos = logos');
  args.push('    alignment = EBFooterAlignment.' + (alignment === 'center' ? 'Center' : 'Leading'));
  lines.push(args.join(',\n'));
  lines.push(')');
  return lines.join('\n');
}

function updateSpecCard(cardKey, prop, value) {
  var card = _footerSpecCards[cardKey];
  if (!card) return;
  /* When the user picks a new variant, snap the other axes to that
     variant's defaults so the preview shows the canonical layout. */
  if (prop === 'variant') {
    var defaults = _footerSpecCards['v' + value];
    if (defaults) {
      card.alignment    = defaults.alignment;
      card.description  = defaults.description;
      card.partnerLogos = defaults.partnerLogos;
    }
  }
  card[prop] = value;

  /* Update the rendered preview body */
  var card$ = document.getElementById('spec-card-' + _footerCardKeyFor(cardKey));
  if (card$) {
    var preview = card$.querySelector('.spec-card-preview, .spec-preview-body, .spec-preview-frame');
    if (preview) {
      preview.innerHTML = _footerRenderCard(card);
    }
    /* When `variant` changes, also resync the per-card panel selects so
       the alignment / description / partnerLogos dropdowns reflect the
       newly selected variant's defaults. */
    if (prop === 'variant') {
      var rows = card$.querySelectorAll('.demo-figma-panel .demo-panel-row');
      rows.forEach(function (row) {
        var label = row.querySelector('.demo-panel-label');
        var sel   = row.querySelector('select');
        if (!label || !sel) return;
        var key = (label.textContent || '').trim().toLowerCase();
        var p =
          key === 'alignment'    ? 'alignment' :
          key === 'description'  ? 'description' :
          key === 'partner logos' ? 'partnerLogos' :
          null;
        if (!p || card[p] == null) return;
        for (var i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value === card[p]) { sel.selectedIndex = i; break; }
        }
      });
    }
  }

  /* Update Properties readouts — data-sp="<demoKey>-<prop>" */
  ['variant', 'alignment', 'description', 'partnerLogos'].forEach(function (p) {
    var spEl = document.querySelector('[data-sp="' + cardKey + '-' + p + '"]');
    if (spEl) spEl.textContent = card[p];
  });

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

/* Map demoKey ('v1') back to the spec card's full cardKey. We can
   look this up via the DOM (every spec card sets id=spec-card-{cardKey}). */
function _footerCardKeyFor(demoKey) {
  // Each card's previewHtml has an inner id `footer-spec-{n}` where
  // n matches the demoKey's number. Walk up to the parent spec-card.
  var n = demoKey.replace('v', '');
  var inner = document.getElementById('footer-spec-' + n);
  if (!inner) return null;
  var card$ = inner.closest('.spec-card');
  if (!card$) return null;
  var id = card$.id || '';
  return id.replace(/^spec-card-/, '');
}

function _footerInit() {
  var ctx = document.getElementById('footer-context-preview');
  if (ctx) ctx.innerHTML = _footerContextMarkup();
  _footerUpdate();
  for (var i = 1; i <= 7; i++) {
    var el = document.getElementById('footer-spec-' + i);
    var card = _footerSpecCards['v' + i];
    if (el && card) el.innerHTML = _footerRenderCard(card);
  }
  /* Sync each spec card's per-prop dropdowns to the card's defaults.
     SpecCard.astro has no per-card defaultValue, so the dropdowns
     show option 0 by default. Force-select the right option per row. */
  ['v1','v2','v3','v4','v5','v6','v7'].forEach(function(k) {
    var ck = _footerCardKeyFor(k);
    if (!ck) return;
    var card$ = document.getElementById('spec-card-' + ck);
    if (!card$) return;
    var card = _footerSpecCards[k];
    var rows = card$.querySelectorAll('.demo-figma-panel .demo-panel-row');
    rows.forEach(function (row) {
      var label = row.querySelector('.demo-panel-label');
      var sel   = row.querySelector('select');
      if (!label || !sel) return;
      var key = (label.textContent || '').trim().toLowerCase();
      var p =
        key === 'variant'       ? 'variant' :
        key === 'alignment'     ? 'alignment' :
        key === 'description'   ? 'description' :
        key === 'partner logos' ? 'partnerLogos' :
        null;
      if (!p || card[p] == null) return;
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === card[p]) { sel.selectedIndex = i; break; }
      }
    });
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _footerInit);
else _footerInit();

/* Re-init after Astro view-transition swaps */
(function(){
  function reinit(){ if (typeof _footerInit === 'function') _footerInit(); }
  document.addEventListener('astro:page-load', reinit);
})();
