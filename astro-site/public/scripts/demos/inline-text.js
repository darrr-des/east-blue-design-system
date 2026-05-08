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
  var state = opts.state || 'default';

  /* State styling — dim everything 50% on disabled, shift colors
     subtly on pressed. Mirrors the C5 Pressed-state recommendation. */
  var stateOpacity = state === 'disabled' ? '0.4' : '1';
  var labelColor   = state === 'pressed'  ? '#072592' : '#0A2757';
  var valueColor   = state === 'pressed'  ? '#072592' : '#445C85';
  var linkColor    = state === 'pressed'  ? '#003ea0' : '#005CE5';

  var rowStyle    = "display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:" + stateOpacity + ";";
  var labelStyle  = "font-weight:600;font-size:16px;color:" + labelColor + ";margin:0;line-height:20px;";
  var valueStyle  = "font-weight:600;font-size:16px;color:" + valueColor + ";margin:0;line-height:20px;";
  var descStyle   = "font-family:'BarkAda',sans-serif;font-weight:600;font-size:12px;color:#6780A9;margin:2px 0 0;line-height:18px;";
  var linkStyle   = "font-weight:600;font-size:12px;color:" + linkColor + ";margin:2px 0 0;line-height:18px;letter-spacing:0.5px;";
  var badgeStyle  = "display:inline-flex;align-items:center;background:#E5F1FF;color:#005CE5;font-weight:700;font-size:12px;letter-spacing:0.5px;padding:4px 10px;border-radius:99px;";
  var clipStyle   = "display:inline-flex;align-items:center;gap:8px;color:" + valueColor + ";font-weight:600;font-size:16px;line-height:20px;";

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

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _specCards = {
  default:     { type: 'default',         label: 'Amount',      value: 'PHP 1,500.00', state: 'default' },
  clipboard:   { type: 'with-clipboard',  label: 'Reference No',value: 'GC123456789',  state: 'default' },
  badge:       { type: 'with-badge',      label: 'Voucher',     badge: 'Applied',      state: 'default' },
  description: { type: 'with-description',label: 'Service fee', value: 'PHP 10.00', desc: 'Includes ₱10 service fee', state: 'default' },
  link:        { type: 'with-text-link',  label: 'Promo code',  value: 'GC50OFF', desc: 'Saved PHP 50.00', cta: 'Change', state: 'default' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var label = card.label || 'Label';
  var state = card.state || 'default';
  var snippet;
  switch (card.type) {
    case 'with-clipboard':
      snippet = 'EBInlineText(\n    label: "' + label + '",\n    value: "' + (card.value || '') + '",\n    trailing: .clipboard\n)';
      break;
    case 'with-badge':
      snippet = 'EBInlineText(\n    label: "' + label + '",\n    trailing: .badge("' + (card.badge || 'Label') + '")\n)';
      break;
    case 'with-description':
      snippet = 'EBInlineText(\n    label: "' + label + '",\n    value: "' + (card.value || '') + '",\n    description: "' + (card.desc || '') + '"\n)';
      break;
    case 'with-text-link':
      snippet = 'EBInlineText(\n    label: "' + label + '",\n    value: "' + (card.value || '') + '",\n    description: "' + (card.desc || '') + '",\n    trailing: .link("' + (card.cta || 'CTA') + '", action: { })\n)';
      break;
    default:
      snippet = 'EBInlineText(label: "' + label + '", value: "' + (card.value || '') + '")';
  }
  if (state === 'disabled') snippet += '\n    .disabled(true)';
  return snippet;
}

function buildComposeSnippet(type, card) {
  var label = card.label || 'Label';
  var state = card.state || 'default';
  var snippet;
  switch (card.type) {
    case 'with-clipboard':
      snippet = 'EBInlineText(\n    label = "' + label + '",\n    value = "' + (card.value || '') + '",\n    trailing = EBInlineTextTrailing.Clipboard';
      break;
    case 'with-badge':
      snippet = 'EBInlineText(\n    label = "' + label + '",\n    trailing = { EBBadge("' + (card.badge || 'Label') + '") }';
      break;
    case 'with-description':
      snippet = 'EBInlineText(\n    label = "' + label + '",\n    value = "' + (card.value || '') + '",\n    description = "' + (card.desc || '') + '"';
      break;
    case 'with-text-link':
      snippet = 'EBInlineText(\n    label = "' + label + '",\n    value = "' + (card.value || '') + '",\n    description = "' + (card.desc || '') + '",\n    trailing = { EBTextLink("' + (card.cta || 'CTA') + '") { } }';
      break;
    default:
      snippet = 'EBInlineText(\n    label = "' + label + '",\n    value = "' + (card.value || '') + '"';
  }
  if (state === 'disabled') snippet += ',\n    enabled = false';
  snippet += '\n)';
  return snippet;
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update the inner #itx-spec-${cardStyle} preview body */
  var previewBody = document.getElementById('itx-spec-' + cardStyle);
  if (previewBody) {
    previewBody.innerHTML = _itxRender(card);
  }

  /* Update Properties readout — data-sp="${cardStyle}-label" */
  var spLabel = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spLabel) spLabel.textContent = value;

  /* Update DEV code */
  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var activeTab = null;
    var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
    if (devView) activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var code = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', code);
    codeEl.setAttribute('data-lang', lang);
    codeEl.textContent = code;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}
window.updateSpecCard = updateSpecCard;

function _itxInit() {
  var ctx = document.getElementById('itx-context-preview');
  if (ctx) ctx.innerHTML = _itxContextMarkup();
  _itxUpdate();

  /* Initialize each spec card preview using the current _specCards state */
  Object.keys(_specCards).forEach(function (key) {
    updateSpecCard(key, 'label', _specCards[key].label);
  });

  /* Sync each spec card's per-prop dropdowns to the card's defaults.
     SpecCard.astro renders selects with option-0 selected by default;
     force-select the right option per row (type / label / state). */
  Object.keys(_specCards).forEach(function (key) {
    var card$ = document.getElementById('spec-card-' + key);
    /* The cardKey in the data file is the human-readable slug (e.g.
       "default-—-label-+-value"); demoKey is the short key (e.g.
       "default"). updateSpecCard uses demoKey as the card-id, but the
       DOM id is `spec-card-${cardKey}`. Walk up via the inner preview
       body to find the correct outer card. */
    if (!card$) {
      var inner = document.getElementById('itx-spec-' + key);
      if (inner) card$ = inner.closest('.spec-card');
    }
    if (!card$) return;
    var card = _specCards[key];
    var rows = card$.querySelectorAll('.demo-figma-panel .demo-panel-row');
    rows.forEach(function (row) {
      var labelEl = row.querySelector('.demo-panel-label');
      var sel     = row.querySelector('select');
      if (!labelEl || !sel) return;
      var k = (labelEl.textContent || '').trim().toLowerCase();
      var p = k === 'type' ? 'type' : k === 'label' ? 'label' : k === 'state' ? 'state' : null;
      if (!p || card[p] == null) return;
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === card[p]) { sel.selectedIndex = i; break; }
      }
    });
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _itxInit);
else _itxInit();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function () {
  document.addEventListener('astro:page-load', _itxInit);
})();
