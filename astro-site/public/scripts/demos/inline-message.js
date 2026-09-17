/* Inline Message — Style tab demo.
 * Rebuilt from Figma component set 6420:91212 (GCash DS 2026 Working File).
 * Offsets, fills and the download glyph are read off get_node_info and
 * get_svg, and checked against export_node_as_image.
 *
 * Panel (set 6420:91212, from the property-panel screenshot):
 *   Type               · Success, Loading, Error, Neutral  (variant)
 *   hasReferenceNumber · True                              (boolean)
 *   hasBodyContent     · True                              (boolean)
 *   hasDownload        · True                              (boolean)
 * Slots (no control): ⤷ BodySlot (4 items) · ⤷ IllustrationSlot (4 items)
 *
 * 4 variants, all built, each 360 × 465 at the panel defaults. Only the
 * title colour changes between Types; everything else is shared.
 *
 * The Container hugs its rows — Content 284 + BodySlot 117 + Reference 64
 * = 465 — so turning a boolean off removes that row's height. hasDownload
 * changes nothing, since the icon sits inside Content.
 */

var IM_W = 360;
var IM_CONTENT_H = 284, IM_BODY_H = 117, IM_REF_H = 64;
var IM_TITLE = { success: '#005CE5', loading: '#CA970C', error: '#D61B2C', neutral: '#0A2757' };
var IM_NODES = { success: '6420:91213', loading: '6420:91228', error: '6420:91243', neutral: '6420:91258' };
var IM_DESC = '#445C85', IM_NAME = '#90A8D0', IM_AMOUNT = '#0A2757', IM_RULE = '#E5EBF4';
/* Slot Block placeholder — 9% fill on a solid stroke, both #9F3DFB. */
var IM_SLOT = '#9F3DFB';
var IM_DOWNLOAD = 'M7.00195 4.10156C7.49883 4.10177 7.90234 4.50503 7.90234 5.00195C7.90213 5.4987 7.4987 5.90213 7.00195 5.90234H6.00195C5.39444 5.90234 4.90234 6.39444 4.90234 7.00195V16.002C4.90255 17.1616 5.84229 18.1016 7.00195 18.1016H17.002C18.1614 18.1014 19.1014 17.1614 19.1016 16.002V7.00195C19.1016 6.39457 18.6093 5.90255 18.002 5.90234H17.002C16.505 5.90234 16.1018 5.49883 16.1016 5.00195C16.1016 4.5049 16.5049 4.10156 17.002 4.10156H18.002C19.6034 4.10177 20.9023 5.40046 20.9023 7.00195V16.002C20.9021 18.1556 19.1556 19.9021 17.002 19.9023H7.00195C4.84817 19.9023 3.10177 18.1557 3.10156 16.002V7.00195C3.10156 5.40033 4.40033 4.10156 6.00195 4.10156H7.00195ZM12.001 4.10156C12.4979 4.10156 12.9011 4.50414 12.9014 5.00098V12.8271L14.3643 11.3643C14.7157 11.0131 15.2863 11.0131 15.6377 11.3643C15.9891 11.7156 15.9889 12.2862 15.6377 12.6377L12.6377 15.6377C12.2862 15.9892 11.7157 15.9892 11.3643 15.6377L8.36426 12.6387C8.01287 12.2873 8.01303 11.7167 8.36426 11.3652C8.71565 11.0138 9.2862 11.013 9.6377 11.3643L11.1006 12.8271V5.00195C11.1006 4.5049 11.5039 4.10156 12.001 4.10156Z';

function _imOn(v, def) { return v == null ? def : v === 'true'; }

/* Container height hugs the rows that are shown. */
function _imHeight(card) {
  return IM_CONTENT_H + (_imOn(card.hasbodycontent, true) ? IM_BODY_H : 0) +
         (_imOn(card.hasreferencenumber, true) ? IM_REF_H : 0);
}

function _imRender(card) {
  card = card || {};
  var type = card.type || 'success';
  var title = IM_TITLE[type] || IM_TITLE.success;
  var body = _imOn(card.hasbodycontent, true), ref = _imOn(card.hasreferencenumber, true), dl = _imOn(card.hasdownload, true);
  var H = _imHeight(card);

  var s = '<svg width="' + IM_W + '" height="' + H + '" viewBox="0 0 ' + IM_W + ' ' + H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + IM_W + '" height="' + H + '" rx="12" fill="#FFFFFF"/>';

  /* Download Small, 24 × 24 at x 318, y 16 — inside Content, so it never
     changes the height. */
  if (dl) s += '<g transform="translate(318 16)"><path d="' + IM_DOWNLOAD + '" fill="#005CE5"/></g>';

  /* ⤷ IllustrationSlot — 106 × 106 at x 127, y 48. The slot itself is fully
     rounded, but the Slot Block placeholder it ships is a 4-radius square
     with a 4/4 dash — that is what renders. */
  s += '<rect x="127.5" y="48.5" width="105" height="105" rx="3.5" fill="' + IM_SLOT + '" fill-opacity="0.09"/>';
  s += '<rect x="127.5" y="48.5" width="105" height="105" rx="3.5" stroke="' + IM_SLOT + '" stroke-dasharray="4 4"/>';

  s += '<text class="im-title" x="180" y="191" font-size="22" font-weight="700" fill="' + title +
       '" text-anchor="middle" dominant-baseline="central">Add your label here</text>';
  s += '<text class="im-desc" x="180" y="230" font-size="14" font-weight="500" fill="' + IM_DESC +
       '" text-anchor="middle" dominant-baseline="central">Add your description here.</text>';
  s += '<text class="im-desc" x="180" y="250" font-size="14" font-weight="500" fill="' + IM_DESC +
       '" text-anchor="middle" dominant-baseline="central">This is just a filler sentence.</text>';

  /* ⤷ BodySlot — 360 × 117 below Content, a Slot Block placeholder */
  var y = IM_CONTENT_H;
  if (body) {
    /* 1px #E5EBF4 on the top edge only — the frame's stroke is one-sided. */
    s += '<rect x="0" y="' + y + '" width="360" height="1" fill="' + IM_RULE + '"/>';
    s += '<rect x="0.5" y="' + (y + 0.5) + '" width="359" height="' + (IM_BODY_H - 1) + '" rx="3.5" fill="' + IM_SLOT + '" fill-opacity="0.09"/>';
    s += '<rect x="0.5" y="' + (y + 0.5) + '" width="359" height="' + (IM_BODY_H - 1) + '" rx="3.5" stroke="' + IM_SLOT + '" stroke-dasharray="4 4"/>';
    s += '<text class="im-slot" x="180" y="' + (y + IM_BODY_H / 2) + '" font-size="11" font-weight="700" fill="' + IM_SLOT +
         '" text-anchor="middle" dominant-baseline="central">Remove &amp; Insert Content here</text>';
    y += IM_BODY_H;
  }

  /* ReferenceNumber — 360 × 64. Its 1px #E5EBF4 stroke is the top edge
     only, so the row reads as a divider rather than a boxed card. */
  if (ref) {
    s += '<rect x="0" y="' + y + '" width="360" height="1" fill="' + IM_RULE + '"/>';
    s += '<text class="im-name" x="74" y="' + (y + 32) + '" font-size="16" font-weight="600" fill="' + IM_NAME +
         '" dominant-baseline="central">Reference no.</text>';
    s += '<text class="im-amount" x="180" y="' + (y + 32) + '" font-size="18" font-weight="700" fill="' + IM_AMOUNT +
         '" dominant-baseline="central">1234567890</text>';
  }

  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { type: 'success', hasreferencenumber: 'true', hasbodycontent: 'true', hasdownload: 'true' }
};
window._specCards = _specCards;
function _imCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBInlineMessage(', '    title: "Add your label here",', '    description: "Add your description here.",',
           '    type: .' + c.type, ')'];
  if (_imOn(c.hasbodycontent, true)) l.push('.ebBody { EBReferenceRow("Reference no.", value: "1234567890") }');
  if (_imOn(c.hasreferencenumber, true)) l.push('.ebReference("Reference no.", value: "1234567890")');
  l.push('.ebIllustration { Image("status") }');
  if (_imOn(c.hasdownload, true)) l.push('.onDownload { saveReceipt() }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBInlineMessage(', '    title = "Add your label here",', '    description = "Add your description here.",',
           '    type = EBInlineMessageType.' + _imCap(c.type) + ',',
           '    illustration = { Image(painterResource(R.drawable.status), null) },'];
  if (_imOn(c.hasdownload, true)) l.push('    onDownload = { saveReceipt() },');
  if (_imOn(c.hasbodycontent, true)) l.push('    body = { EBReferenceRow("Reference no.", "1234567890") },');
  if (_imOn(c.hasreferencenumber, true)) l.push('    reference = EBReference("Reference no.", "1234567890"),');
  l[l.length - 1] = l[l.length - 1].replace(/,$/, '');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('inline-message-spec-' + cardStyle);
  if (host) host.innerHTML = _imRender(card);

  ['type', 'hasreferencenumber', 'hasbodycontent', 'hasdownload'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = a === 'type' ? _imCap(card.type) : (card[a] === 'true' ? 'True' : 'False');
  });
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = '360 × ' + _imHeight(card) + ' · radius 12';
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = IM_NODES[card.type] + ' · 360 × ' + _imHeight(card);

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
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
window.updateSpecCard = updateSpecCard;

/* ── Overview tab shim — the old panel had type / size / body / ref. ── */
function _imUpdate() {
  var el = document.getElementById('im-demo-preview');
  if (!el) return;
  var t = document.getElementById('im-demo-type');
  var v = t && IM_TITLE[t.value] ? t.value : 'success';
  el.innerHTML = _imRender({ type: v });
}
window._imUpdate = _imUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _imInit() {
  _imUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('inline-message-spec-' + k);
    if (host) host.innerHTML = _imRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _imInit);
else _imInit();
document.addEventListener('astro:page-load', _imInit);
