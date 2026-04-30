/* Inline Message — live-preview renderer matching Figma node 27:168910.
 * 3D illustration assets exported from Figma to /assets/inline-message/.
 * Three variants: success (blue), loading (yellow), error (red). */

var _itmIntent = {
  success: { titleColor: '#005CE5', img: '/assets/inline-message/success.png' },
  loading: { titleColor: '#CA970C', img: '/assets/inline-message/loading.png' },
  error:   { titleColor: '#D61B2C', img: '/assets/inline-message/error.png' },
};

function _itmCheckIcon() {
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;">' +
    '<path d="M3 8.5l3 3 7-7" stroke="#005CE5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _itmDownloadIcon() {
  return '<svg width="18" height="16" viewBox="0 0 18 16" fill="none">' +
    '<path d="M3 11v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3" stroke="#0A2757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M9 1v10m0 0L5.5 7.5M9 11l3.5-3.5" stroke="#0A2757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _itmListItem() {
  return '<div style="display:flex;gap:8px;align-items:flex-start;padding:2px 0;">' +
    _itmCheckIcon() +
    '<span style="flex:1;font-family:\'BarkAda\',sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#445C85;">Content</span>' +
  '</div>';
}

function _itmSection(items) {
  var rows = [];
  for (var i = 0; i < (items || 3); i++) rows.push(_itmListItem());
  return '<div style="background:#FFFFFF;border:1px solid #E5EBF4;box-shadow:0 1px 1.5px rgba(232,238,242,0.79);">' +
    '<div style="border-bottom:1px solid #E5EBF4;padding:12px 20px 12px 36px;">' +
      '<p style="margin:0;font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:16px;line-height:20px;color:#0A2757;letter-spacing:0.25px;">Header</p>' +
    '</div>' +
    '<div style="background:rgba(246,249,253,0.24);padding:12px 48px;">' + rows.join('') + '</div>' +
  '</div>';
}

function _itmRender(opts) {
  var type = opts.type || 'success';
  var intent = _itmIntent[type] || _itmIntent.success;
  var hasBody = opts.hasBodyContent !== false;
  var hasRef = opts.hasReferenceNumber !== false;

  var html =
    '<div style="width:360px;font-family:\'Proxima Soft\',sans-serif;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 0 8px rgba(115,129,154,0.10);">' +
      '<div style="position:relative;padding:48px 16px 24px;display:flex;flex-direction:column;align-items:center;gap:16px;">' +
        '<div style="position:absolute;top:16px;right:18px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;">' +
          _itmDownloadIcon() +
        '</div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;width:100%;">' +
          '<img src="' + intent.img + '" alt="" style="width:106px;height:106px;display:block;object-fit:cover;" />' +
          '<div style="height:24px;"></div>' +
          '<p style="margin:0;width:100%;text-align:center;font-weight:700;font-size:22px;line-height:26px;color:' + intent.titleColor + ';">Add your label here</p>' +
        '</div>' +
        '<div style="padding:0 24px;width:100%;">' +
          '<p style="margin:0;text-align:center;font-family:\'BarkAda\',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#445C85;">' +
            'Add your description here.<br>This is just a filler sentence.' +
          '</p>' +
        '</div>' +
      '</div>';

  if (hasBody) {
    html += '<div style="border-top:1px solid #E5EBF4;display:flex;flex-direction:column;">' +
      _itmSection(4) + _itmSection(3) +
    '</div>';
  }

  if (hasRef) {
    html += '<div style="border-top:1px solid #E5EBF4;padding:24px 0;display:flex;align-items:center;justify-content:center;gap:4px;">' +
      '<span style="font-weight:600;font-size:16px;line-height:16px;color:#90A8D0;letter-spacing:0.25px;">Reference no.</span>' +
      '<span style="font-weight:700;font-size:18px;line-height:18px;color:#0A2757;letter-spacing:0.25px;">1234567890</span>' +
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

/* ── Spec card state ──────────────────────────────────────────────── */
var _specCards = {
  success: { variant: 'success', hasBody: 'true', hasRef: 'true' },
  loading: { variant: 'loading', hasBody: 'true', hasRef: 'true' },
  error:   { variant: 'error',   hasBody: 'true', hasRef: 'true' }
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

  /* Update preview */
  var el = document.getElementById('itm-spec-' + cardStyle);
  if (el) {
    el.innerHTML = _itmRender({
      type: card.variant,
      hasBodyContent: card.hasBody === 'true',
      hasReferenceNumber: card.hasRef === 'true'
    });
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

  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'variant', _specCards[k].variant);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _itmInit);
else _itmInit();
document.addEventListener('astro:page-load', _itmInit);
