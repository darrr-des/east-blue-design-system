/* Inline Message — sized 1:1 to Figma node 27:168910 (success variant 27:168911).
 *
 *   Total card:        360 × 664, bg #FFFFFF, radius 12, no shadow
 *   Content section:   360 × 284 (48 top / 24 horiz / 24 bottom, gap 16)
 *     - Receipt Status: illustration 106×106 + 24px spacer + title 26
 *     - Description:    312 wide, BarkAda Medium 14/20 #445C85, center-aligned
 *     - Download icon:  24×24 overlay at (top 16, right 18)
 *   Body content:      360 × 316, border-top + border-bottom #E5EBF4
 *     - section-1: 172 (title 44 + container 128)
 *     - section-2: 144 (title 44 + container 100)
 *     - Title bar: text "Header" Proxima Soft Bold 16/20 +0.25 #0A2757,
 *                  padding 12 vert · 48 left
 *     - Container bg: #F6F9FD @ 24% opacity, padding 12 vert · 48 horiz
 *     - List items: BarkAda Semibold 14/20 #445C85, 16px check icon + 8 gap
 *   Reference no.:    360 × 64, border-top #E5EBF4, 24 top spacer + 16 ref-block
 *     - "Reference no." Proxima Soft Semibold 16/16 +0.25 #90A8D0
 *     - "1234567890"     Proxima Soft Bold 18/18 +0.25 #0A2757, 4px gap
 */

var _itmIntent = {
  success: { titleColor: '#005CE5', img: '/assets/inline-message/success.png' },
  loading: { titleColor: '#CA970C', img: '/assets/inline-message/loading.png' },
  error:   { titleColor: '#D61B2C', img: '/assets/inline-message/error.png' },
};

function _itmCheckIcon() {
  /* Stroke color = main/list-item/color/default/icon-item → #90A8D0
     (resolved from List Item Asset master 10276:2686 icon-placeholder fill) */
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;">' +
    '<path d="M3 8.5l3 3 7-7" stroke="#90A8D0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _itmDownloadIcon() {
  return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none">' +
    '<path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" stroke="#005CE5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M12 4v11m0 0l-4-4m4 4l4-4" stroke="#005CE5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _itmListItem() {
  /* List item: 16×16 check + 8 gap + text. Item is 20 tall per Figma. */
  return '<div style="display:flex;gap:8px;align-items:center;height:20px;">' +
    _itmCheckIcon() +
    '<span style="flex:1;font-family:\'BarkAda\',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;">Content</span>' +
  '</div>';
}

function _itmSection(itemCount, withDivider) {
  /* Section: 44px title bar + container (128 for 4 items, 100 for 3 items).
     - Title bar: 12 vert padding, text starts at 48 left.
     - Container: bg #F6F9FD @ 24% opacity, 12 vert / 48 horiz padding, items stacked.
     - Items: 20 tall, 8px vertical gap (verified: 4 items × 20 + 3 gaps × 8 = 104).
     - withDivider: emit a border-bottom only when this isn't the last section
       (the body-content wrapper handles the bottom edge). */
  var rows = [];
  for (var i = 0; i < (itemCount || 4); i++) rows.push(_itmListItem());
  return '<div style="background:#FFFFFF;' + (withDivider ? 'border-bottom:1px solid #E5EBF4;' : '') + '">' +
    /* Title bar 44h — own border-bottom separates "Header" from the list rows */
    '<div style="height:44px;box-sizing:border-box;padding:12px 0 12px 48px;border-bottom:1px solid #E5EBF4;">' +
      '<p style="margin:0;font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:16px;line-height:20px;color:#0A2757;letter-spacing:0.25px;">Header</p>' +
    '</div>' +
    /* Container — light tinted bg, list items inside */
    '<div style="background:rgba(246,249,253,0.24);padding:12px 48px;display:flex;flex-direction:column;gap:8px;">' +
      rows.join('') +
    '</div>' +
  '</div>';
}

function _itmRender(opts) {
  var type = opts.type || 'success';
  var intent = _itmIntent[type] || _itmIntent.success;
  var hasBody = opts.hasBodyContent !== false;
  var hasRef = opts.hasReferenceNumber !== false;

  /* CARD — 360 wide, white, radius 12, NO shadow per Figma container */
  var html =
    '<div style="width:360px;font-family:\'Proxima Soft\',sans-serif;background:#FFFFFF;border-radius:12px;overflow:hidden;">' +
      /* CONTENT — 284 tall: 48 top / 24 horiz / 24 bottom, gap 16 between receipt-status and description */
      '<div style="position:relative;padding:48px 24px 24px;display:flex;flex-direction:column;gap:16px;align-items:center;">' +
        /* Download icon overlay (top 16, right 18, 24×24 hit area with 20×20 glyph) */
        '<div style="position:absolute;top:16px;right:18px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;">' +
          _itmDownloadIcon() +
        '</div>' +
        /* Receipt Status — illustration 106×106 + 24 spacer + title 26 = 156 tall */
        '<div style="display:flex;flex-direction:column;align-items:center;width:100%;">' +
          '<img src="' + intent.img + '" alt="" style="width:106px;height:106px;display:block;object-fit:contain;" />' +
          '<div style="height:24px;"></div>' +
          '<p style="margin:0;width:100%;text-align:center;font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:22px;line-height:26px;color:' + intent.titleColor + ';">Add your label here</p>' +
        '</div>' +
        /* Description — 312 wide × 40 tall (2 lines × 20) */
        '<p style="margin:0;width:100%;text-align:center;font-family:\'BarkAda\',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#445C85;">' +
          'Add your description here.<br>This is just a filler sentence.' +
        '</p>' +
      '</div>';

  if (hasBody) {
    /* BODY CONTENT — 316 tall (172 + 144).
       Borders: top edge + bottom edge of body-content + 1 divider between sections.
       The reference-number section relies on body-content's bottom border, so it
       does NOT add its own border-top (avoids the doubled-line effect). */
    html += '<div style="border-top:1px solid #E5EBF4;' + (hasRef ? 'border-bottom:1px solid #E5EBF4;' : '') + 'display:flex;flex-direction:column;">' +
      _itmSection(4, true) +
      _itmSection(3, false) +
    '</div>';
  }

  if (hasRef) {
    /* REFERENCE NO. — 64 tall, 24 top spacer, 16 ref-block, 24 bottom.
       No border-top: when body-content is present it already has border-bottom;
       when body-content is hidden we add the border-top inline below. */
    var refBorder = !hasBody ? 'border-top:1px solid #E5EBF4;' : '';
    html += '<div style="' + refBorder + 'height:64px;box-sizing:border-box;padding:24px 0;display:flex;align-items:center;justify-content:center;gap:4px;">' +
      '<span style="font-family:\'Proxima Soft\',sans-serif;font-weight:600;font-size:16px;line-height:16px;color:#90A8D0;letter-spacing:0.25px;">Reference no.</span>' +
      '<span style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:18px;line-height:18px;color:#0A2757;letter-spacing:0.25px;">1234567890</span>' +
    '</div>';
  }

  html += '</div>';
  return html;
}

function _itmUpdate() {
  var get = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('im-demo-preview');
  if (!preview) return;
  preview.innerHTML = _itmRender({
    type: (get('im-demo-type', 'success') || 'success').toLowerCase(),
    assetSize: get('im-demo-size', 'Large'),
    hasBodyContent: get('im-demo-body', 'true') === 'true',
    hasReferenceNumber: get('im-demo-ref', 'true') === 'true',
  });
}
// Legacy alias — captured HTML uses this name on its onchange handlers
function updateInlineMessageDemo() { _itmUpdate(); }

/* ── Spec card state — single dynamic card ─────────────────────── */
var _specCards = {
  'default': { variant: 'success', hasBody: 'true', hasRef: 'true' }
};
window._specCards = _specCards;

var _intentLabel = { success: 'Success', loading: 'Loading', error: 'Error' };

/* ── Code snippet builders ────────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var v = (card && card.variant) || type || 'success';
  var lines = [];
  lines.push('EBInlineMessage("Add your label here")');
  lines.push('    .ebDescription("Add your description here.")');
  lines.push('    .ebIntent(.' + v + ')');
  if (card && card.hasRef !== 'false') lines.push('    .ebReferenceNumber("1234567890")');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var v = (card && card.variant) || type || 'success';
  var label = _intentLabel[v] || 'Success';
  var lines = [];
  lines.push('EBInlineMessage(');
  lines.push('    title = "Add your label here",');
  lines.push('    description = "Add your description here.",');
  lines.push('    intent = EBMessageIntent.' + label + ',');
  if (card && card.hasRef !== 'false') lines.push('    referenceNumber = "1234567890",');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

/* ── Spec card update ─────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — render inside the spec card root's preview slot */
  var rootEl = document.getElementById('spec-card-' + cardStyle);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) {
      previewEl.innerHTML = _itmRender({
        type: card.variant,
        hasBodyContent: card.hasBody === 'true',
        hasReferenceNumber: card.hasRef === 'true'
      });
    }
  }

  /* Update properties text */
  var spVariant = document.querySelector('[data-sp="' + cardStyle + '-variant"]');
  if (spVariant) spVariant.textContent = _intentLabel[card.variant] || 'Success';

  /* Update DEV code */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function _itmInit() {
  var ctx = document.getElementById('itm-context-preview');
  if (ctx) ctx.innerHTML =
    '<div style="display:flex;gap:24px;justify-content:center;align-items:flex-start;flex-wrap:wrap;padding:24px;background:#F8FAFC;border:1px dashed #C7D2FE;border-radius:8px;">' +
      _itmRender({ type: 'success', hasBodyContent: false, hasReferenceNumber: false }) +
      _itmRender({ type: 'loading', hasBodyContent: false, hasReferenceNumber: false }) +
      _itmRender({ type: 'error', hasBodyContent: false, hasReferenceNumber: false }) +
    '</div>';
  _itmUpdate();

  updateSpecCard('default', 'variant', _specCards['default'].variant);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _itmInit);
else _itmInit();
document.addEventListener('astro:page-load', _itmInit);
