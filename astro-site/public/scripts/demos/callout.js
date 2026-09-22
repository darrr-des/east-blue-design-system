/* Callout — Style tab demo.
 * Rebuilt from Figma component set 6663:104524 (GCash DS 2026 Working File),
 * which Figma names "Callout". This page documents that set; the older
 * Sticker Sheets Callout (23:179895) it replaces is kept only in the
 * changelog.
 *
 * Offsets, fills and text sizes read off get_node_info; checked against
 * export_node_as_image.
 *
 * Panel (set 6663:104524, from the property-panel screenshot):
 *   Type            · Neutral, Information, Warning, Error, Success (variant)
 *   Style           · Banner, Card                                  (variant)
 *   Content         · Default, Header Only, Description Only        (variant)
 *   Size            · Small, Medium, Large                          (variant)
 *   hasLeadingIcon  · False    (boolean)
 *   hasActionButton · False    (boolean)
 *   hasTrailingIcon · True     (boolean)
 *   hasAccentBorder · True     (boolean)
 * Slots (no control): Leading-Slot (90 items) · Trailing-Slot (90 items)
 * 5 x 2 x 3 x 3 = 90 variants, all built.
 *
 * Height rule, confirmed against every variant: 12 + max(text stack, 32px
 * slot) + 12, with the text centred when it is shorter than the slot —
 * which is why Header Only sits at y 16.5 and Description Only at y 18.
 * The text stack is title, 2px, description, and — with hasActionButton —
 * 2px and the 24px button (the 2px is ContentRow's own spacing).
 *
 * Two values are not readable with the booleans off, so the preview assumes
 * them and the card says so: the gap after Leading-Slot (12, the gap Neutral
 * leaves before Trailing-Slot) and the button's chevron glyph (a hidden
 * layer does not export).
 */

var CO_W = 360;
var CO_NODES = {"neutral|card|default|large":"6663:104525","neutral|card|header-only|large":"6663:104590","neutral|card|header-only|small":"6682:111532","success|banner|description-only|small":"6801:110368","information|card|default|large":"6663:104538","warning|card|default|large":"6663:104551","error|card|default|large":"6663:104564","success|card|default|large":"6663:104577","information|card|header-only|large":"6663:104601","warning|card|header-only|large":"6663:104612","error|card|header-only|large":"6663:104623","success|card|header-only|large":"6663:104634","neutral|card|description-only|large":"6663:104645","information|card|description-only|large":"6663:104656","warning|card|description-only|large":"6663:104667","error|card|description-only|large":"6663:104678","success|card|description-only|large":"6663:104689","neutral|card|default|medium":"6679:107961","information|card|default|medium":"6679:107976","warning|card|default|medium":"6679:107991","error|card|default|medium":"6679:108006","success|card|default|medium":"6679:108021","neutral|card|header-only|medium":"6679:108036","information|card|header-only|medium":"6679:108049","warning|card|header-only|medium":"6679:108062","error|card|header-only|medium":"6679:108075","success|card|header-only|medium":"6679:108088","neutral|card|description-only|medium":"6679:108101","information|card|description-only|medium":"6679:108114","warning|card|description-only|medium":"6679:108127","error|card|description-only|medium":"6679:108140","success|card|description-only|medium":"6679:108153","neutral|card|default|small":"6682:111457","information|card|default|small":"6682:111472","warning|card|default|small":"6682:111487","error|card|default|small":"6682:111502","success|card|default|small":"6682:111517","information|card|header-only|small":"6682:111545","warning|card|header-only|small":"6682:111558","error|card|header-only|small":"6682:111571","success|card|header-only|small":"6682:111584","neutral|card|description-only|small":"6682:111597","information|card|description-only|small":"6682:111610","warning|card|description-only|small":"6682:111623","error|card|description-only|small":"6682:111636","success|card|description-only|small":"6682:111649","neutral|banner|default|large":"6801:109634","information|banner|default|large":"6801:109652","warning|banner|default|large":"6801:109670","error|banner|default|large":"6801:109688","success|banner|default|large":"6801:109706","neutral|banner|header-only|large":"6801:109724","information|banner|header-only|large":"6801:109740","warning|banner|header-only|large":"6801:109756","error|banner|header-only|large":"6801:109772","success|banner|header-only|large":"6801:109788","neutral|banner|description-only|large":"6801:109804","information|banner|description-only|large":"6801:109820","warning|banner|description-only|large":"6801:109836","error|banner|description-only|large":"6801:109852","success|banner|description-only|large":"6801:109868","neutral|banner|default|medium":"6801:109884","information|banner|default|medium":"6801:109902","warning|banner|default|medium":"6801:109920","error|banner|default|medium":"6801:109938","success|banner|default|medium":"6801:109956","neutral|banner|header-only|medium":"6801:109974","information|banner|header-only|medium":"6801:109990","warning|banner|header-only|medium":"6801:110006","error|banner|header-only|medium":"6801:110022","success|banner|header-only|medium":"6801:110038","neutral|banner|description-only|medium":"6801:110054","information|banner|description-only|medium":"6801:110070","warning|banner|description-only|medium":"6801:110086","error|banner|description-only|medium":"6801:110102","success|banner|description-only|medium":"6801:110118","neutral|banner|default|small":"6801:110134","information|banner|default|small":"6801:110152","warning|banner|default|small":"6801:110170","error|banner|default|small":"6801:110188","success|banner|default|small":"6801:110206","neutral|banner|header-only|small":"6801:110224","information|banner|header-only|small":"6801:110240","warning|banner|header-only|small":"6801:110256","error|banner|header-only|small":"6801:110272","success|banner|header-only|small":"6801:110288","neutral|banner|description-only|small":"6801:110304","information|banner|description-only|small":"6801:110320","warning|banner|description-only|small":"6801:110336","error|banner|description-only|small":"6801:110352"};

/* Surface, accent, title and description per Type — identical on Card and Banner. */
var CO_TYPE = {
  neutral:     { bg: '#F6F9FD', accent: '#D7E0EF', title: '#0A2757', desc: '#6780A9' },
  information: { bg: '#E5F1FF', accent: '#005CE5', title: '#072592', desc: '#2340A9' },
  warning:     { bg: '#FFF9EB', accent: '#EBB30A', title: '#6C5009', desc: '#966F0B' },
  error:       { bg: '#F8E6E6', accent: '#D61B2C', title: '#D61B2C', desc: '#D61B2C' },
  success:     { bg: '#E7F8F0', accent: '#27C990', title: '#035E50', desc: '#048570' }
};

/* Text per Size: [title size, title line, description size, description line]. */
var CO_SIZE = { large: [18, 23, 14, 20], medium: [16, 20, 12, 18], small: [14, 16, 10, 15] };
var CO_SLOT = '#9F3DFB';
var CO_ARROW = 'M13.4922 11.3926C15.6016 11.3926 16.6562 12.2422 16.6562 14.3691V17.1934L16.6152 18.418L17.4297 17.5039L18.7539 16.1738C18.8535 16.0742 18.9941 16.0098 19.1523 16.0098C19.457 16.0098 19.6855 16.2441 19.6855 16.5605C19.6855 16.7012 19.6328 16.8359 19.5156 16.959L16.5156 19.9707C16.4043 20.0879 16.252 20.1523 16.0996 20.1523C15.9473 20.1523 15.7949 20.0879 15.6836 19.9707L12.6836 16.959C12.5664 16.8359 12.5078 16.7012 12.5078 16.5605C12.5078 16.2441 12.7363 16.0098 13.0469 16.0098C13.1992 16.0098 13.3398 16.0742 13.4395 16.1738L14.7695 17.5039L15.584 18.4238L15.5371 17.1934L15.543 14.4395C15.5488 12.9629 14.9043 12.4941 13.4629 12.4941C13.2227 12.4941 13.0527 12.5117 12.8594 12.5117C12.5371 12.5117 12.3086 12.3066 12.3086 11.9785C12.3086 11.6445 12.5605 11.4805 12.8066 11.4395C13 11.4043 13.2285 11.3926 13.4922 11.3926Z';

function _coKey(c) { return [c.type, c.style, c.content, c.size].join('|'); }

/* Height: Default hugs 12 + title + 2 + description + 12; the one-line
   contents are 56 at every size. */
function _coOn(v, def) { return v == null ? def : v === 'true'; }

/* Text stack height for the current Content, Size and action button. */
function _coStack(c) {
  var s = CO_SIZE[c.size] || CO_SIZE.large;
  var h = c.content === 'header-only' ? s[1] : c.content === 'description-only' ? s[3] : s[1] + 2 + s[3];
  if (_coOn(c.hasactionbutton, false)) h += 2 + 24;
  return h;
}
function _coHeight(c) {
  var slot = (_coOn(c.hasleadingicon, false) || _coOn(c.hastrailingicon, true)) ? 32 : 0;
  return 12 + Math.max(_coStack(c), slot) + 12;
}

function _coSlot(x, y) {
  return '<rect x="' + (x + 0.5) + '" y="' + (y + 0.5) + '" width="31" height="31" rx="3.5" fill="' + CO_SLOT + '" fill-opacity="0.09"/>' +
         '<rect x="' + (x + 0.5) + '" y="' + (y + 0.5) + '" width="31" height="31" rx="3.5" stroke="' + CO_SLOT + '" stroke-dasharray="4 4"/>' +
         '<g transform="translate(' + x + ' ' + y + ')"><path d="' + CO_ARROW + '" fill="' + CO_SLOT + '"/></g>';
}

function _coRender(c) {
  var t = CO_TYPE[c.type] || CO_TYPE.neutral, s = CO_SIZE[c.size] || CO_SIZE.large;
  var lead = _coOn(c.hasleadingicon, false), trail = _coOn(c.hastrailingicon, true);
  var action = _coOn(c.hasactionbutton, false), accent = _coOn(c.hasaccentborder, true);
  var H = _coHeight(c), rx = c.style === 'card' ? 6 : 0, id = 'co-clip-' + Math.random().toString(36).slice(2, 7);
  var out = '<svg width="' + CO_W + '" height="' + H + '" viewBox="0 0 ' + CO_W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<defs><clipPath id="' + id + '"><rect width="' + CO_W + '" height="' + H + '" rx="' + rx + '"/></clipPath></defs>';
  out += '<g clip-path="url(#' + id + ')">';
  out += '<rect width="' + CO_W + '" height="' + H + '" fill="' + t.bg + '"/>';
  if (accent) out += '<rect width="6" height="' + H + '" fill="' + t.accent + '"/>';
  out += '</g>';

  /* Leading-Slot at x 20; the text moves 32 + 12 (assumed gap) to the right. */
  if (lead) out += _coSlot(20, 12);
  var tx = lead ? 64 : 20;
  /* Keep the text inside its column. With Leading-Slot on, Figma would wrap
     the description inside ContentRow — that wrap is not measurable while
     the slot is hidden, so the preview clips instead of guessing a height. */
  var textRight = trail ? 300 : 344, tid = id + '-t';
  out += '<defs><clipPath id="' + tid + '"><rect x="' + tx + '" y="0" width="' + (textRight - tx) + '" height="' + H + '"/></clipPath></defs>';
  out += '<g clip-path="url(#' + tid + ')">';

  /* The text stack is centred in the row when it is shorter than a slot. */
  var stack = _coStack(c), inner = H - 24, y = 12 + (inner - stack) / 2;
  if (c.content !== 'description-only') {
    out += '<text class="co-title" x="' + tx + '" y="' + (y + s[1] / 2) + '" font-size="' + s[0] + '" font-weight="700" fill="' + t.title +
           '" dominant-baseline="central">This is for the title.</text>';
    y += s[1] + 2;
  }
  if (c.content !== 'header-only') {
    out += '<text class="co-desc" x="' + tx + '" y="' + (y + s[3] / 2) + '" font-size="' + s[2] + '" font-weight="600" fill="' + t.desc +
           '" dominant-baseline="central">This is the description. Put description here.</text>';
    y += s[3] + 2;
  }
  out += '</g>';
  /* Button_New — a text button: "Learn more" 12/12 #0A2757 and a 16px
     chevron. The chevron glyph is a hidden layer and does not export, so
     a plain chevron stands in for it. */
  if (action) {
    out += '<text class="co-btn" x="' + tx + '" y="' + (y + 12) + '" font-size="12" font-weight="700" fill="#0A2757"' +
           ' dominant-baseline="central">Learn more</text>';
    out += '<path d="M' + (tx + 72) + ' ' + (y + 8) + 'L' + (tx + 76) + ' ' + (y + 12) + 'L' + (tx + 72) + ' ' + (y + 16) +
           '" stroke="#0A2757" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  /* Trailing-Slot — 32 × 32 at x 312, y 12, shipping a Slot Block placeholder. */
  if (trail) out += _coSlot(312, 12);
  return out + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: {
    type: 'neutral', style: 'card', content: 'default', size: 'large',
    hasleadingicon: 'false', hasactionbutton: 'false', hastrailingicon: 'true', hasaccentborder: 'true'
  }
};
window._specCards = _specCards;
var CO_AXES = ['type', 'style', 'content', 'size'];
var CO_LABEL = { 'header-only': 'Header Only', 'description-only': 'Description Only' };
function _coCap(v) { return CO_LABEL[v] || (v.charAt(0).toUpperCase() + v.slice(1)); }
function _coEnum(v) { return _coCap(v).replace(/ /g, ''); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBCallout('];
  if (c.content !== 'description-only') l.push('    title: "This is for the title.",');
  if (c.content !== 'header-only') l.push('    description: "This is the description.",');
  l.push('    type: .' + c.type + ',');
  l.push('    style: .' + c.style + ',');
  l.push('    size: .' + c.size + (_coOn(c.hasaccentborder, true) ? '' : ','));
  if (!_coOn(c.hasaccentborder, true)) l.push('    showsAccent: false');
  l.push(')');
  if (_coOn(c.hasleadingicon, false)) l.push('.ebLeading { Image("info") }');
  if (_coOn(c.hasactionbutton, false)) l.push('.ebAction("Learn more") { openDetails() }');
  if (_coOn(c.hastrailingicon, true)) l.push('.ebTrailing { EBIconButton(.close) { dismiss() } }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBCallout('];
  if (c.content !== 'description-only') l.push('    title = "This is for the title.",');
  if (c.content !== 'header-only') l.push('    description = "This is the description.",');
  l.push('    type = EBCalloutType.' + _coEnum(c.type) + ',');
  l.push('    style = EBCalloutStyle.' + _coEnum(c.style) + ',');
  l.push('    size = EBCalloutSize.' + _coEnum(c.size) + ',');
  if (!_coOn(c.hasaccentborder, true)) l.push('    showsAccent = false,');
  if (_coOn(c.hasleadingicon, false)) l.push('    leading = { Icon(EBIcons.Info, null) },');
  if (_coOn(c.hasactionbutton, false)) l.push('    actionLabel = "Learn more",');
  if (_coOn(c.hasactionbutton, false)) l.push('    onAction = { openDetails() },');
  if (_coOn(c.hastrailingicon, true)) l.push('    trailing = { EBIconButton(EBIcons.Close) { dismiss() } },');
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

  var host = document.getElementById('callout-spec-' + cardStyle);
  if (host) host.innerHTML = _coRender(card);

  CO_AXES.concat(['hasleadingicon', 'hasactionbutton', 'hastrailingicon', 'hasaccentborder']).forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = a.indexOf('has') === 0 ? (card[a] === 'true' ? 'True' : 'False') : _coCap(card[a]);
  });
  var size = CO_W + ' × ' + _coHeight(card);
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = _coHeight(card) + 'px';
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = CO_NODES[_coKey(card)] + ' · ' + size;

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

/* ── Overview tab shim — the old panel had label / label size /
 * description / type over the retired Sticker Sheets node. It maps onto
 * the current set: type -> Type, label+description -> Content, label size
 * small -> Size=Small. ─────────────────────────────────────────────── */
var _calDemo = { label: 'yes', labelSize: 'default', description: 'yes', type: 'default' };
function updateCalloutDemo() {
  var el = document.getElementById('cal-demo-preview');
  if (!el) return;
  var hasLabel = _calDemo.label === 'yes' && _calDemo.labelSize !== 'no';
  var hasDesc = _calDemo.description === 'yes';
  var content = hasLabel && hasDesc ? 'default' : (hasLabel ? 'header-only' : 'description-only');
  el.innerHTML = _coRender({
    type: _calDemo.type === 'information' ? 'information' : 'neutral',
    style: 'card',
    content: content,
    size: _calDemo.labelSize === 'small' ? 'small' : 'large'
  });
}
window._calDemo = _calDemo;
window.updateCalloutDemo = updateCalloutDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _coInit() {
  updateCalloutDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('callout-spec-' + k);
    if (host) host.innerHTML = _coRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _coInit);
else _coInit();
document.addEventListener('astro:page-load', _coInit);
