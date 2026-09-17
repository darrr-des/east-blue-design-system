/* Title Bar - App — Style tab demo.
 * Rebuilt from Figma component set 4784:34355 (GCash DS 2026 Working File).
 * Offsets and fills read off get_node_info on the variants; icons and the
 * status bar from get_svg; checked against export_node_as_image.
 *
 * Axes (from the variant names — no property panel was supplied):
 *   hasLeadingIcon · hasTrailingElement · hasSubtext · hasTitleBlock
 * 2 x 2 x 2 x 2 = 16 variants, all built.
 */

var TB_W = 360, TB_STATUS = 44, TB_BLOCK = 72;
var TB_BG = '#1972F9', TB_FG = '#FFFFFF', TB_SUB = '#F6F9FD', TB_SUB_OPACITY = 0.8;

var TB_NODES = {
  'false|false|false|false': '4784:34356', 'false|false|true|false': '4784:34474',
  'false|true|false|false':  '4784:34499', 'false|true|true|false':  '4784:34507',
  'true|false|false|false':  '4784:34535', 'true|false|true|false':  '4784:34543',
  'true|true|false|false':   '4784:34480', 'true|true|true|false':   '4784:34489',
  'false|false|false|true':  '4784:34361', 'false|false|true|true':  '4784:34369',
  'false|true|false|true':   '4784:34378', 'false|true|true|true':   '4784:34389',
  'true|false|false|true':   '4784:34426', 'true|false|true|true':   '4784:34437',
  'true|true|false|true':    '4784:34401', 'true|true|true|true':    '4784:34413'
};

/* Status Bar - IOS instance, exported with get_svg. Mock fidelity only —
   the app never draws its own status bar (Overview, v2.5). */
var TB_STATUS_SVG = '<path d="M37.2073 17.1675C39.4632 17.1675 41.4261 18.7715 41.4261 22.5801V22.5947C41.4261 26.1543 39.8221 28.2637 37.1634 28.2637C35.2225 28.2637 33.7723 27.1138 33.4354 25.4951L33.4207 25.4146H35.2811L35.303 25.4878C35.5813 26.2275 36.2332 26.7109 37.1634 26.7109C38.8406 26.7109 39.5511 25.0703 39.6316 23.0488C39.6316 22.9683 39.639 22.8877 39.639 22.8071H39.4925C39.1043 23.6421 38.1814 24.3818 36.7312 24.3818C34.7024 24.3818 33.2815 22.9023 33.2815 20.8955V20.8809C33.2815 18.7349 34.9148 17.1675 37.2073 17.1675ZM37.2 22.9316C38.3938 22.9316 39.3094 22.0674 39.3094 20.8735V20.8589C39.3094 19.6504 38.3938 18.7056 37.222 18.7056C36.0574 18.7056 35.1272 19.6357 35.1272 20.8149V20.8296C35.1272 22.0527 35.9988 22.9316 37.2 22.9316ZM44.4513 21.1519C43.7848 21.1519 43.2867 20.6392 43.2867 19.9946C43.2867 19.3428 43.7848 18.8374 44.4513 18.8374C45.1251 18.8374 45.6158 19.3428 45.6158 19.9946C45.6158 20.6392 45.1251 21.1519 44.4513 21.1519ZM44.4513 26.5864C43.7848 26.5864 43.2867 26.0811 43.2867 25.4292C43.2867 24.7773 43.7848 24.272 44.4513 24.272C45.1251 24.272 45.6158 24.7773 45.6158 25.4292C45.6158 26.0811 45.1251 26.5864 44.4513 26.5864ZM52.6034 28V25.9712H47.4325V24.4258C48.8021 22.0454 50.3036 19.6138 51.7392 17.4312H54.4125V24.4111H55.8334V25.9712H54.4125V28H52.6034ZM49.1903 24.4551H52.6327V18.9399H52.5229C51.4389 20.5952 50.2157 22.5508 49.1903 24.3452V24.4551ZM59.9279 28V19.2915H59.8034L57.174 21.1519V19.3721L59.9353 17.4312H61.8176V28H59.9279Z" fill="white"/>' +
  '<rect opacity="0.35" x="309.832" y="17.832" width="21" height="10.3333" rx="2.16667" fill="white" stroke="white"/>' +
  '<path opacity="0.4" d="M332.332 21V25C333.137 24.6612 333.66 23.8731 333.66 23C333.66 22.1269 333.137 21.3388 332.332 21Z" fill="white"/>' +
  '<rect x="311.332" y="19.332" width="18" height="7.33333" rx="1.33333" fill="white"/>' +
  '<path d="M294.448 25.7587C295.729 24.6764 297.605 24.6764 298.886 25.7587C298.95 25.8169 298.987 25.8995 298.989 25.9863C298.991 26.0729 298.956 26.156 298.895 26.2167L296.89 28.2392C296.831 28.2986 296.751 28.332 296.667 28.332C296.583 28.3319 296.503 28.2986 296.444 28.2392L294.438 26.2167C294.377 26.156 294.343 26.0727 294.345 25.9863C294.347 25.8996 294.384 25.8169 294.448 25.7587ZM291.772 23.0615C294.532 20.4971 298.804 20.4971 301.563 23.0615C301.626 23.1216 301.661 23.2044 301.662 23.2909C301.663 23.3773 301.629 23.4601 301.568 23.5214L300.409 24.6923C300.29 24.8116 300.097 24.8135 299.975 24.6972C299.069 23.8774 297.889 23.4237 296.667 23.4238C295.446 23.4243 294.268 23.8781 293.362 24.6972C293.24 24.8135 293.046 24.8118 292.927 24.6923L291.769 23.5214C291.707 23.4602 291.673 23.3774 291.674 23.2909C291.675 23.2045 291.71 23.1216 291.772 23.0615ZM289.097 20.371C293.328 16.319 300.004 16.3191 304.236 20.371C304.298 20.4312 304.333 20.5137 304.333 20.5995C304.333 20.6853 304.3 20.7682 304.239 20.829L303.079 21.999C302.96 22.1191 302.765 22.1201 302.644 22.0019C301.031 20.4705 298.892 19.6162 296.667 19.6161C294.442 19.6162 292.302 20.4703 290.689 22.0019C290.568 22.1203 290.374 22.1191 290.255 21.999L289.094 20.829C289.033 20.7681 289 20.6853 289 20.5995C289.001 20.5137 289.035 20.4312 289.097 20.371Z" fill="white"/>' +
  '<path d="M269 24.335C269.552 24.335 270 24.7827 270 25.335V27.335C270 27.8871 269.552 28.335 269 28.335H268C267.448 28.335 267 27.8871 267 27.335V25.335C267 24.7827 267.448 24.335 268 24.335H269ZM273.667 22.335C274.219 22.3351 274.667 22.7828 274.667 23.335V27.335C274.667 27.887 274.219 28.3348 273.667 28.335H272.667C272.115 28.335 271.667 27.8871 271.667 27.335V23.335C271.667 22.7827 272.115 22.335 272.667 22.335H273.667ZM278.333 20.001C278.885 20.001 279.333 20.4488 279.333 21.001V27.335C279.333 27.8871 278.885 28.335 278.333 28.335H277.333C276.781 28.3348 276.333 27.887 276.333 27.335V21.001C276.333 20.4489 276.781 20.0012 277.333 20.001H278.333ZM283 17.668C283.552 17.668 284 18.1157 284 18.668V27.335C284 27.8871 283.552 28.335 283 28.335H282C281.448 28.335 281 27.8871 281 27.335V18.668C281 18.1157 281.448 17.668 282 17.668H283Z" fill="white"/>';
var TB_LEFT_ARROW = '<path d="M10.5 6L4.5 12L10.5 18M4.5 12L19.5 12" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
var TB_INFO = '<path d="M12.002 3.10156C16.9171 3.10177 20.9023 7.08675 20.9023 12.002C20.9021 16.917 16.917 20.9021 12.002 20.9023C7.08675 20.9023 3.10177 16.9171 3.10156 12.002C3.10156 7.08662 7.08662 3.10156 12.002 3.10156ZM12.002 4.90234C8.08073 4.90234 4.90234 8.08073 4.90234 12.002C4.90255 15.923 8.08086 19.1016 12.002 19.1016C15.9229 19.1014 19.1014 15.9229 19.1016 12.002C19.1016 8.08086 15.923 4.90255 12.002 4.90234ZM12.002 10.2021C12.4436 10.2024 12.8018 10.5603 12.8018 11.002V15.2021H13.002C13.4436 15.2024 13.8018 15.5603 13.8018 16.002C13.8015 16.4435 13.4435 16.8015 13.002 16.8018H11.002C10.5603 16.8018 10.2024 16.4436 10.2021 16.002C10.2021 15.5601 10.5601 15.2021 11.002 15.2021H11.2021V11.8018H11.002C10.5603 11.8018 10.2024 11.4436 10.2021 11.002C10.2021 10.5601 10.5601 10.2021 11.002 10.2021H12.002ZM12.002 7.00195C12.5541 7.00216 13.002 7.4498 13.002 8.00195C13.0017 8.55393 12.5539 9.00174 12.002 9.00195C11.4498 9.00195 11.0022 8.55406 11.002 8.00195C11.002 7.44967 11.4497 7.00195 12.002 7.00195Z" fill="white"/>';

/* TitleBar is 40 tall, 48 with either icon, 56 with the subtext. */
function _tbBarH(c) {
  if (c.hassubtext === 'true') return 56;
  return (c.hasleadingicon === 'true' || c.hastrailingelement === 'true') ? 48 : 40;
}
function _tbHeight(c) { return TB_STATUS + _tbBarH(c) + (c.hastitleblock === 'true' ? TB_BLOCK : 0); }

function _tbRender(c) {
  var barH = _tbBarH(c), H = _tbHeight(c), y0 = TB_STATUS;
  var s = '<svg width="' + TB_W + '" height="' + H + '" viewBox="0 0 ' + TB_W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + TB_W + '" height="' + H + '" fill="' + TB_BG + '"/>';
  s += TB_STATUS_SVG;

  var iconY = y0 + (barH === 56 ? 16 : 12);
  if (c.hasleadingicon === 'true') s += '<g transform="translate(20 ' + iconY + ')">' + TB_LEFT_ARROW + '</g>';
  if (c.hastrailingelement === 'true') s += '<g transform="translate(316 ' + iconY + ')">' + TB_INFO + '</g>';

  var titleY = y0 + (barH === 48 ? 24 : 20);
  s += '<text class="tb-title" x="180" y="' + titleY + '" font-size="16" font-weight="600" fill="' + TB_FG +
       '" text-anchor="middle" dominant-baseline="central">Title</text>';
  if (c.hassubtext === 'true') {
    s += '<text class="tb-link" x="180" y="' + (y0 + 38) + '" font-size="12" font-weight="600" fill="' + TB_SUB +
         '" fill-opacity="' + TB_SUB_OPACITY + '" text-anchor="middle" dominant-baseline="central">m.gcash.com</text>';
  }
  if (c.hastitleblock === 'true') {
    s += '<text class="tb-header" x="24" y="' + (y0 + barH + 29 + 15.5) + '" font-size="26" font-weight="600" fill="' + TB_FG +
         '" dominant-baseline="central">Header</text>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { hasleadingicon: 'false', hastrailingelement: 'false', hassubtext: 'false', hastitleblock: 'false' }
};
window._specCards = _specCards;
var TB_AXES = ['hasleadingicon', 'hastrailingelement', 'hassubtext', 'hastitleblock'];

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBTitleBar("Title")'];
  if (c.hassubtext === 'true') l.push('    .ebSubtext("m.gcash.com")');
  if (c.hasleadingicon === 'true') l.push('    .ebLeading { dismiss() }');
  if (c.hastrailingelement === 'true') l.push('    .ebTrailing(Image("information")) { showInfo() }');
  if (c.hastitleblock === 'true') l.push('    .ebTitleBlock("Header")');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBTitleBar(', '    title = "Title",'];
  if (c.hassubtext === 'true') l.push('    subtext = "m.gcash.com",');
  if (c.hasleadingicon === 'true') l.push('    onLeading = { dismiss() },');
  if (c.hastrailingelement === 'true') l.push('    trailing = { EBIconButton(EBIcons.Information) { showInfo() } },');
  if (c.hastitleblock === 'true') l.push('    titleBlock = "Header",');
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

  var host = document.getElementById('title-bar-spec-' + cardStyle);
  if (host) host.innerHTML = _tbRender(card);

  TB_AXES.forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = card[a] === 'true' ? 'True' : 'False';
  });

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

/* ── Overview tab shim ───────────────────────────────────────────────
   The Overview panel still carries the retired yes/no controls, including
   a Leading control that no longer exists; they map onto the four axes. */
function updateTitleBarDemo() {
  var v = function (id) { var el = document.getElementById(id); return el && el.value === 'yes' ? 'true' : 'false'; };
  var el = document.getElementById('tb-demo-preview');
  if (!el) return;
  el.innerHTML = _tbRender({
    hasleadingicon: v('tb-demo-leadingIcon'), hastrailingelement: v('tb-demo-trailingIcon'),
    hassubtext: v('tb-demo-subtext'), hastitleblock: v('tb-demo-titleBlock')
  });
}
window.updateTitleBarDemo = updateTitleBarDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _tbInit() {
  updateTitleBarDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('title-bar-spec-' + k);
    if (host) host.innerHTML = _tbRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tbInit);
else _tbInit();
document.addEventListener('astro:page-load', _tbInit);
