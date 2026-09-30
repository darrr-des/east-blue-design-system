/* Counter — Style tab demo.
 * Rebuilt from Figma component set 4675:21497 (GCash DS 2026 Working File).
 * Fills, offsets and the text style read off get_node_info and
 * get_styled_text_segments.
 *
 * Panel (set 4675:21497, from the property-panel screenshot):
 *   State       · Disabled, Default   (variant)
 *   hasLimit    · True, False         (variant)
 *   Count       · "0"                 (text)
 *   Limit       · "10"                (text)
 *   hasOverflow · False               (boolean)
 * 2 x 2 = 4 variants, all built.
 *
 * hasLimit=True is a 53 x 24 pill — 8 padding, Count, a 4 gap, the "/"
 * separator, another 4 gap, the Limit. hasLimit=False is a 24 circle
 * holding the Count alone, with a hidden "+" that hasOverflow reveals.
 * Both hug their text, so the preview measures the digits rather than
 * assuming the sample's width.
 */

var CTR_NODES = {
  'default|true': '4675:21502',  'default|false': '4675:21508',
  'disabled|true': '4675:21498', 'disabled|false': '4675:22734'
};
var CTR_BG = '#EEF2F9';
var CTR_TEXT = { 'default': '#072592', 'disabled': '#C2CFE5' };
var CTR_H = 24, CTR_GAP = 4;
/* Horizontal padding differs between the two shapes: the limit pill is
 * 8 a side (8 + 9 + 4 + 5 + 4 + 15 + 8 = 53, the width Figma reports),
 * the count-only circle 7.5 (7.5 + 9 + 7.5 = 24). Anything wider than the
 * sample grows from those paddings — that part is computed, not read. */
function _ctrPad(c) { return _ctrOn(c.haslimit, true) ? 8 : 7.5; }

function _ctrOn(v, def) { return v == null ? def : v === 'true'; }
function _ctrKey(c) { return c.state + '|' + c.haslimit; }

/* The pill hugs, so the digits have to be measured. Figma's own sample
 * gives the anchors: "0" is 9 wide, "/" 5, "10" 15 and "+" 8 at 14pt. */
var _ctrCanvas = null;
function _ctrTextW(text, known) {
  if (known && known[text] != null) return known[text];
  try {
    _ctrCanvas = _ctrCanvas || document.createElement('canvas');
    var ctx = _ctrCanvas.getContext('2d');
    ctx.font = "700 14px 'Proxima Soft', sans-serif";
    return Math.ceil(ctx.measureText(text).width + 0.25 * text.length);
  } catch (e) { return text.length * 8; }
}
var CTR_KNOWN = { '0': 9, '/': 5, '10': 15, '+': 8 };

function _ctrParts(c) {
  var count = c.count == null ? '0' : c.count;
  var parts = [{ t: count, w: _ctrTextW(count, CTR_KNOWN) }];
  if (_ctrOn(c.haslimit, true)) {
    parts.push({ t: '/', w: CTR_KNOWN['/'] });
    parts.push({ t: c.limit == null ? '10' : c.limit, w: _ctrTextW(c.limit == null ? '10' : c.limit, CTR_KNOWN) });
  } else if (_ctrOn(c.hasoverflow, false)) {
    parts.push({ t: '+', w: CTR_KNOWN['+'] });
  }
  return parts;
}

function _ctrWidth(c) {
  var parts = _ctrParts(c);
  var text = parts.reduce(function (a, p) { return a + p.w; }, 0) + CTR_GAP * (parts.length - 1);
  return Math.max(CTR_H, _ctrPad(c) * 2 + text);
}

function _ctrRender(c) {
  var w = _ctrWidth(c), fill = CTR_TEXT[c.state] || CTR_TEXT['default'];
  var parts = _ctrParts(c);
  var textW = parts.reduce(function (a, p) { return a + p.w; }, 0) + CTR_GAP * (parts.length - 1);
  var x = (w - textW) / 2;
  var s = '<svg width="' + w + '" height="' + CTR_H + '" viewBox="0 0 ' + w + ' ' + CTR_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + CTR_H + '" rx="' + (CTR_H / 2) + '" fill="' + CTR_BG + '"/>';
  parts.forEach(function (p) {
    s += '<text class="ctr-text" x="' + (x + p.w / 2) + '" y="12" font-size="14" font-weight="700" fill="' + fill +
         '" text-anchor="middle" dominant-baseline="central">' + p.t + '</text>';
    x += p.w + CTR_GAP;
  });
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { state: 'default', haslimit: 'true', hasoverflow: 'false', count: '0', limit: '10' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBCounter(' + (c.count || '0')];
  if (_ctrOn(c.haslimit, true)) l[0] += ', limit: ' + (c.limit || '10');
  l[0] += ')';
  if (!_ctrOn(c.haslimit, true) && _ctrOn(c.hasoverflow, false)) l.push('    .ebOverflow(true)');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBCounter(', '    count = ' + (c.count || '0') + ','];
  if (_ctrOn(c.haslimit, true)) l.push('    limit = ' + (c.limit || '10') + ',');
  else if (_ctrOn(c.hasoverflow, false)) l.push('    overflow = true,');
  if (c.state === 'disabled') l.push('    enabled = false,');
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

  /* Limit belongs to hasLimit; overflow only exists without one. */
  var lock = function (name, disabled) {
    var row = document.querySelector('[data-panel-card="' + cardStyle + '"][data-panel-prop="' + name + '"]');
    if (!row) return;
    var input = row.querySelector('input');
    if (input) input.disabled = disabled;
    row.classList.toggle('is-disabled', disabled);
  };
  lock('limit', !_ctrOn(card.haslimit, true));
  lock('hasoverflow', _ctrOn(card.haslimit, true));

  var host = document.getElementById('counter-spec-' + cardStyle);
  if (host) host.innerHTML = _ctrRender(card);

  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('state', card.state.charAt(0).toUpperCase() + card.state.slice(1));
  put('haslimit', card.haslimit === 'true' ? 'True' : 'False');
  put('hasoverflow', _ctrOn(card.haslimit, true) ? '—' : (card.hasoverflow === 'true' ? 'True' : 'False'));
  put('count', card.count);
  put('limit', _ctrOn(card.haslimit, true) ? card.limit : '—');
  put('size-readout', _ctrWidth(card) + ' × ' + CTR_H);
  put('variantNode', CTR_NODES[_ctrKey(card)] + ' · ' + _ctrWidth(card) + ' × ' + CTR_H);

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

/* ── Overview tab shim — the old panel drove counter-ctrl-* fields. ── */
function _counterUpdate() {
  var el = document.getElementById('counter-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var withLimit = v('counter-ctrl-withlimit', 'yes') !== 'no';
  el.innerHTML = _ctrRender({
    state: v('counter-ctrl-state', 'default'),
    haslimit: withLimit ? 'true' : 'false',
    hasoverflow: v('counter-ctrl-max', 'no') === 'yes' ? 'true' : 'false',
    count: v('counter-ctrl-count', '0'),
    limit: v('counter-ctrl-limit', '10')
  });
}
window._counterUpdate = _counterUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _ctrInit() {
  _counterUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ctrInit);
else _ctrInit();
document.addEventListener('astro:page-load', _ctrInit);
