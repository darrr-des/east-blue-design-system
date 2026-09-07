/* Powers the live-preview controls for the dropdown-item (Select Item)
 * component page. Rebuilt for the 2026 Working File (node 7947:111969).
 *
 * Four axes, 48 variants — but the State x isSelected grid is sparse on
 * purpose: selected-and-pressed and selected-and-disabled do not exist.
 * Rather than hide that, the preview clamps the combination and says so,
 * which is what Figma's variant picker effectively does.
 */

var _SITEM_GEAR =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="1.6"/>' +
  '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" stroke-width="1.6"/></svg>';

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
var _SITEM_CASED = {
  icon: 'Icon', pesosignvector: 'PesoSignVector',
  flag: 'Flag', pesosigntext: 'PesoSignText'
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
      : '<span class="syn-dot">.' + card.type + '</span>'),
    'density' + sep + enumVal('EBSelectItemDensity', card.density)
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
