/* Powers the live-preview controls for the dropdown-item (Select Item)
 * component page. Rebuilt for the 2026 Working File (node 7947:111969).
 *
 * Four axes, 48 variants — but the State x isSelected grid is sparse on
 * purpose: selected-and-pressed and selected-and-disabled do not exist.
 * Rather than hide that, the preview clamps the combination and says so,
 * which is what Figma's variant picker effectively does.
 */

/* The real Settings icon, exported from the Leading Element at node
   7947:111971 — the same artwork Select Group draws, so the two pages
   render this nested instance identically. A stroked gear outline over a
   40%-opacity inner dot, in currentColor so it tracks the label. */
var _SITEM_GEAR =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path opacity="0.4" fill="currentColor" d="M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 ' +
  '11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 ' +
  '9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 ' +
  '15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 ' +
  '14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 ' +
  '14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z"/>' +
  '<path stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ' +
  'd="M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 ' +
  '6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 ' +
  '11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 ' +
  '16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 ' +
  '19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 ' +
  '19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 ' +
  '16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 ' +
  '9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 ' +
  '6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 ' +
  '4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z"/></svg>';

/* Stand-in for the Flags Library instance — the real one is a vector
   from the shared library, which is what closed the raster-PNG finding. */
var _SITEM_FLAG =
  '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">' +
  '<rect x="0.5" y="0.5" width="15" height="11" rx="1.5" fill="#FFFFFF" stroke="#E5EBF4"/>' +
  '<rect x="1" y="1" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="3.8" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="6.6" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="9.4" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="1" width="6" height="5" fill="#434389"/></svg>';

/* The real PesoSignVector artwork, exported from node 7947:112019. It is a
   bespoke mark, not the font's glyph: 15 wide against the text glyph's 10,
   with a single bar through the P where Proxima draws two. currentColor so
   it tracks the label, which is what Figma does — #0A2757 by default,
   #C2CFE5 disabled, #005CE5 selected. */
var _SITEM_PESO_VECTOR =
  '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" aria-hidden="true">' +
  '<path d="M8.23438 6.44531C9.85278 6.44534 11.2144 7.54183 11.6191 9.03223H12.1533C12.6311 ' +
  '9.0324 13.0185 9.41968 13.0186 9.89746C13.0186 10.3753 12.6311 10.7625 12.1533 10.7627H11.6475C11.2821 ' +
  '12.3099 9.8932 13.4619 8.23438 13.4619H5.75293V16.498C5.75271 17.0778 5.28289 17.5479 4.70312 ' +
  '17.5479C4.12345 17.5478 3.65354 17.0777 3.65332 16.498V10.7627H3.05273C2.57485 10.7626 2.1875 ' +
  '10.3754 2.1875 9.89746C2.18755 9.41961 2.57488 9.03229 3.05273 9.03223H3.65332V7.49805C3.65332 ' +
  '6.93887 4.09045 6.48214 4.6416 6.4502C4.67527 6.44658 4.70951 6.44532 4.74414 6.44531H8.23438ZM5.75293 ' +
  '10.7627V11.5576H8.23438C8.82481 11.5576 9.33957 11.2377 9.61816 10.7627H5.75293ZM5.75293 ' +
  '9.03223H9.54688C9.2565 8.6196 8.77714 8.34962 8.23438 8.34961H5.75293V9.03223Z" fill="currentColor"/></svg>';

function _sitemLead(type) {
  if (type === 'flag') return ['--flag', _SITEM_FLAG];
  /* The two peso marks are genuinely different objects, which is the whole
     reason both versions exist: PesoSignVector is drawn artwork and
     PesoSignText is Proxima Soft's own ₱ set as type. */
  if (type === 'pesosignvector') return ['--peso-vector', _SITEM_PESO_VECTOR];
  if (type === 'pesosigntext') return ['--peso-text', '₱'];
  return ['', _SITEM_GEAR];
}

function _sitemRender(o) {
  var state = o.state || 'default';
  /* Selected only exists alongside State=Default. */
  var selected = o.selected && state === 'default';
  var lead = _sitemLead(o.type);

  var cls = 'eb-preview-sitem eb-preview-sitem--' + (o.density || 'compact');
  if (state !== 'default') cls += ' eb-preview-sitem--' + state;
  if (selected) cls += ' eb-preview-sitem--selected';
  if (o.supporting) cls += ' eb-preview-sitem--supporting';

  /* Row and footnote stack in a column at the row's own width, so the
     note sits under the row in both the live preview and the spec cards
     rather than beside it — the preview frames centre their children,
     which put two siblings side by side. */
  var h = '<div class="eb-preview-sitem-stack">';
  h += '<div class="' + cls + '">';
  /* hasLeading and hasTrailing switch the two nested instances. Supporting
     Text is not a property — it is a layer inside Content Element that
     ships hidden, so the preview leaves it hidden too and the spec rows
     say so rather than offering a control Figma does not have. */
  if (o.hasLeading !== false) {
    h += '<span class="eb-preview-sitem__lead' + (lead[0] ? ' eb-preview-sitem__lead' + lead[0] : '') + '">' + lead[1] + '</span>';
  }
  h += '<span class="eb-preview-sitem__content">';
  h += '<span class="eb-preview-sitem__primary">Text</span>';
  h += '</span>';
  if (o.hasTrailing !== false) {
    h += '<span class="eb-preview-sitem__trail"><span class="eb-preview-sitem__badge">Label</span></span>';
  }
  h += '</div>';

  if (o.selected && state !== 'default') {
    h += '<div class="table-footnote">isSelected=true has no variant with State=' +
         (state === 'pressed' ? 'Pressed' : 'Disabled') +
         ' — the grid is sparse by design, which is what holds the set at 48 rather than 72.</div>';
  }
  return h + '</div>';
}

function _sitemRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    type: v('sitem-ctrl-type', 'icon'),
    density: v('sitem-ctrl-density', 'compact'),
    state: v('sitem-ctrl-state', 'default'),
    selected: v('sitem-ctrl-isselected', 'false') === 'true',
    hasLeading: v('sitem-ctrl-hasleading', 'true') === 'true',
    hasTrailing: v('sitem-ctrl-hastrailing', 'true') === 'true'
  };
}

function _sitemUpdate() {
  var el = document.getElementById('sitem-demo-preview');
  if (el) el.innerHTML = _sitemRender(_sitemRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
/* One card per Type value, in the Figma panel's order. Density, State,
   isSelected and the two booleans are controls on every card — Type is
   the only axis that gets its own card. */
var _SITEM_TYPES = ['icon', 'pesosignvector', 'flag', 'pesosigntext'];
var _specCards = {};
_SITEM_TYPES.forEach(function (t) {
  _specCards[t] = {
    type: t, density: 'compact', state: 'default',
    isselected: 'false', hasleading: 'true', hastrailing: 'true'
  };
});
window._specCards = _specCards;

function _sitemOpts(card) {
  return {
    type: card.type,
    density: card.density,
    state: card.state,
    selected: card.isselected === 'true',
    hasLeading: card.hasleading !== 'false',
    hasTrailing: card.hastrailing !== 'false'
  };
}

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sitem-spec-' + cardKey);
  if (host) host.innerHTML = _sitemRender(_sitemOpts(card));
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* isSelected is only emitted alongside State=Default, matching the
   variant set — there is no selected-and-pressed to call for. */
/* Compose takes the Figma value verbatim; Swift lowerCamels it. The two
   multi-word Types are the only ones that differ, and getting them wrong
   left this page the odd one out in a family where Select and Select
   Group both lowerCamel. */
var _SITEM_CASED = {
  icon: 'Icon', pesosignvector: 'PesoSignVector',
  flag: 'Flag', pesosigntext: 'PesoSignText'
};
var _SITEM_SWIFT = {
  icon: 'icon', pesosignvector: 'pesoSignVector',
  flag: 'flag', pesosigntext: 'pesoSignText'
};

function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['icon'];
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  var enumVal = function (type, value) {
    var cased = value.charAt(0).toUpperCase() + value.slice(1);
    return compose
      ? '<span class="syn-type">' + type + '</span><span class="syn-punc">.</span><span class="syn-dot">' + cased + '</span>'
      : '<span class="syn-dot">.' + value + '</span>';
  };

  var args = [
    'label' + sep + '<span class="syn-str">"Text"</span>',
    'type' + sep + (compose
      ? '<span class="syn-type">EBSelectItemType</span><span class="syn-punc">.</span><span class="syn-dot">' + _SITEM_CASED[card.type] + '</span>'
      : '<span class="syn-dot">.' + _SITEM_SWIFT[card.type] + '</span>'),
    'density' + sep + enumVal('EBDensity', card.density)
  ];
  if (card.isselected === 'true' && card.state === 'default') {
    args.push('isSelected' + sep + '<span class="syn-kw">true</span>');
  }
  if (card.hasleading === 'false') args.push('hasLeading' + sep + '<span class="syn-kw">false</span>');
  if (card.hastrailing === 'false') args.push('hasTrailing' + sep + '<span class="syn-kw">false</span>');
  /* State is not a parameter. Pressed is what the platform does while a
     finger is down, and Disabled is each platform's own idiom — a
     modifier in SwiftUI, a parameter in Compose. */
  if (compose && card.state === 'disabled') {
    args.push('enabled' + sep + '<span class="syn-kw">false</span>');
  }

  var call = '<span class="syn-type">EBSelectItem</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
  if (!compose && card.state === 'disabled') {
    call += '\n<span class="syn-punc">.</span><span class="syn-fn">disabled</span>' +
            '<span class="syn-punc">(</span><span class="syn-kw">true</span><span class="syn-punc">)</span>';
  }
  return call;
}
window.getSnippet = getSnippet;

function _sitemInit() {
  _sitemUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sitemInit);
  else _sitemInit();
  document.addEventListener('astro:page-load', _sitemInit);
})();
