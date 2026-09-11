/* Powers the live-preview controls for the dropdown (Select) component
 * page. Rebuilt for the 2026 Working File (node 7947:111865).
 *
 * Select composes two other components: Select Field for the trigger and
 * Select Group for the menu. Select Field is deliberately out of this
 * review's scope — it also backs text fields — so the trigger here is
 * drawn to match rather than presented as documented behaviour.
 *
 * The menu instance exists in all 24 Figma variants and is hidden unless
 * State=Expanded, which is why the trigger's box stays 46 tall. The
 * preview does the same: the menu overlays rather than growing the field.
 */

/* The real Settings icon (node 7947:111971) and the real PesoSignVector
   artwork (node 7947:112019) — the same blocks Select Item and Select
   Group draw, so all three pages render these instances identically.
   Both in currentColor, so state and selection reach them. */
var _SEL_GEAR =
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

var _SEL_PESO_VECTOR =
  '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" aria-hidden="true">' +
  '<path d="M8.23438 6.44531C9.85278 6.44534 11.2144 7.54183 11.6191 9.03223H12.1533C12.6311 ' +
  '9.0324 13.0185 9.41968 13.0186 9.89746C13.0186 10.3753 12.6311 10.7625 12.1533 10.7627H11.6475C11.2821 ' +
  '12.3099 9.8932 13.4619 8.23438 13.4619H5.75293V16.498C5.75271 17.0778 5.28289 17.5479 4.70312 ' +
  '17.5479C4.12345 17.5478 3.65354 17.0777 3.65332 16.498V10.7627H3.05273C2.57485 10.7626 2.1875 ' +
  '10.3754 2.1875 9.89746C2.18755 9.41961 2.57488 9.03229 3.05273 9.03223H3.65332V7.49805C3.65332 ' +
  '6.93887 4.09045 6.48214 4.6416 6.4502C4.67527 6.44658 4.70951 6.44532 4.74414 6.44531H8.23438ZM5.75293 ' +
  '10.7627V11.5576H8.23438C8.82481 11.5576 9.33957 11.2377 9.61816 10.7627H5.75293ZM5.75293 ' +
  '9.03223H9.54688C9.2565 8.6196 8.77714 8.34962 8.23438 8.34961H5.75293V9.03223Z" fill="currentColor"/></svg>';

/* The real chevrons, exported from the two instances Select Field places
   (Chevron Down 23:199755, Chevron Up 23:199773). Both are 32 × 32 with a
   2px round-capped stroke — the box the tap target is measured against.
   currentColor, so the disabled state reaches them. */
function _selChevron(up) {
  return '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<path d="' + (up ? 'M23 20L16 13L9 20' : 'M9 13L16 20L23 13') + '" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function _selMenu() {
  var h = '<div class="eb-preview-sel__menu">';
  h += '<div class="eb-preview-sgroup eb-preview-sgroup--middleinset eb-preview-sgroup--compact">';
  /* Seven rows, MiddleInset, Compact — the instance Figma places in every
     Expanded variant, and the composition that makes the menu 312 tall. */
  for (var i = 0; i < 7; i++) {
    /* Select Group ships with its first row selected; the menu here is
       that component, so it inherits the same treatment. */
    var sel = i === 0 ? ' eb-preview-sgroup__row--selected' : '';
    h += '<div class="eb-preview-sgroup__row' + sel + '">';
    h += '<span class="eb-preview-sgroup__lead">' + _SEL_GEAR + '</span>';
    h += '<span class="eb-preview-sgroup__label">Text</span>';
    h += '</div>';
  }
  return h + '</div></div>';
}

/* The copy each Type carries, matching the field in all 24 variants:
   Default asks for an option and fills with one, the two currency
   Types ask for a value and fill with an amount. */
var _SEL_COPY = {
  'default': { empty: 'Select Option', filled: 'Selected Option' },
  pesosignvector: { empty: 'Select Value', filled: '1,000.00' },
  pesosigntext: { empty: 'Select Value', filled: '1,000.00' }
};

function _selRender(o) {
  var state = o.state || 'default';
  var filled = !!o.filled;
  var copy = _SEL_COPY[o.type] || _SEL_COPY['default'];

  var cls = 'eb-preview-sel';
  if (state !== 'default') cls += ' eb-preview-sel--' + state;
  if (filled) cls += ' eb-preview-sel--filled';

  var h = '<div class="' + cls + '">';
  h += '<div class="eb-preview-sel__field">';
  /* The two currency marks are different objects, not two names for one:
     PesoSignVector is drawn artwork 15 wide, PesoSignText is Proxima
     Soft's own glyph at 10. Type=Default carries no leading mark. */
  if (o.type === 'pesosignvector') {
    h += '<span class="eb-preview-sel__lead eb-preview-sel__lead--vector">' + _SEL_PESO_VECTOR + '</span>';
  } else if (o.type === 'pesosigntext') {
    h += '<span class="eb-preview-sel__lead eb-preview-sel__lead--text">₱</span>';
  }
  h += '<span class="eb-preview-sel__value">' + (filled ? copy.filled : copy.empty) + '</span>';
  h += '<span class="eb-preview-sel__chevron">' + _selChevron(state === 'expanded') + '</span>';
  h += '</div>';
  if (state === 'expanded') h += _selMenu();
  return h + '</div>';
}

function _selRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    type: v('sel-ctrl-type', 'default'),
    state: v('sel-ctrl-state', 'default'),
    filled: v('sel-ctrl-isfilled', 'false') === 'true'
  };
}

function _selUpdate() {
  var el = document.getElementById('sel-demo-preview');
  if (el) el.innerHTML = _selRender(_selRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
/* One card per Type value, in the Figma panel's order. State and
   isFilled are controls on every card — Type is the only axis that gets
   its own card, which is what keeps three cards describing 24 variants. */
var _specCards = {
  'default': { type: 'default', state: 'default', isfilled: 'false' },
  'pesosignvector': { type: 'pesosignvector', state: 'default', isfilled: 'false' },
  'pesosigntext': { type: 'pesosigntext', state: 'default', isfilled: 'false' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sel-spec-' + cardKey);
  if (host) {
    host.innerHTML = _selRender({
      type: card.type,
      state: card.state,
      filled: card.isfilled === 'true'
    });
  }
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* State is not a parameter. Expanded is what the menu's own presentation
   does, and Disabled is each platform's idiom — the same shape settled on
   Select Item. Error is the exception: it is a real API concern, since a
   caller has to be able to put the field into it. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['default'];
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  /* Compose takes the Figma value verbatim; Swift lowerCamels it, which is
     the shape Select Group already uses and what check 9 compares against
     the Code tab. */
  var cased = { 'default': 'Default', 'pesosignvector': 'PesoSignVector', 'pesosigntext': 'PesoSignText' }[card.type];
  var swiftCase = { 'default': 'default', 'pesosignvector': 'pesoSignVector', 'pesosigntext': 'pesoSignText' }[card.type];
  var typeVal = compose
    ? '<span class="syn-type">EBSelectType</span><span class="syn-punc">.</span><span class="syn-dot">' + cased + '</span>'
    : '<span class="syn-dot">.' + swiftCase + '</span>';

  /* Same copy the preview draws, so the card and its code agree. */
  var copy = _SEL_COPY[card.type] || _SEL_COPY['default'];
  var args = [
    'label' + sep + '<span class="syn-str">"Label"</span>',
    'placeholder' + sep + '<span class="syn-str">"' + copy.empty + '"</span>',
    'type' + sep + typeVal
  ];
  if (card.isfilled === 'true') {
    args.push('selection' + sep + '<span class="syn-str">"' + copy.filled + '"</span>');
  }
  if (card.state === 'error') {
    args.push('errorMessage' + sep + '<span class="syn-str">"Pick an option"</span>');
  }
  if (compose && card.state === 'disabled') {
    args.push('enabled' + sep + '<span class="syn-kw">false</span>');
  }

  var call = '<span class="syn-type">EBSelect</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">) {</span>\n    ' +
    '<span class="syn-type">EBSelectItem</span><span class="syn-punc">(</span>label' + sep +
    '<span class="syn-str">"Text"</span><span class="syn-punc">)</span>\n' +
    '<span class="syn-punc">}</span>';
  if (!compose && card.state === 'disabled') {
    call += '\n<span class="syn-punc">.</span><span class="syn-fn">disabled</span>' +
            '<span class="syn-punc">(</span><span class="syn-kw">true</span><span class="syn-punc">)</span>';
  }
  return call;
}
window.getSnippet = getSnippet;

function _selInit() {
  _selUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _selInit);
  else _selInit();
  document.addEventListener('astro:page-load', _selInit);
})();
