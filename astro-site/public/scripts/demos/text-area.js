/* Text Area — live preview + spec cards.
 * Mirrors node 4781:35856 (2026 Working File):
 *   State    = Default | Focused | Error | Disabled   → the four cards
 *   hasValue = False | True                            → the panel control
 *
 * Fonts are set explicitly to the component's own families — Proxima Soft for
 * the label and value, BarkAda for the subtext — never inherited from the
 * documentation site.
 */

var TA_STATES = {
  default:  { bg: '#FFFFFF', border: '#D7E0EF' },
  focused:  { bg: '#FFFFFF', border: '#005CE5' },
  error:    { bg: '#FFFFFF', border: '#D61B2C' },
  disabled: { bg: '#EEF2F9', border: null }
};

var TA_PROXIMA = "'Proxima Soft', system-ui, sans-serif";
var TA_BARKADA = "BarkAda, system-ui, sans-serif";

function _taBuildSvg(o) {
  var S = TA_STATES[o.state] || TA_STATES.default;
  var filled = (o.hasValue === 'true' || o.hasValue === true);

  /* Geometry read off 4781:35856 and checked against export_node_as_image.
     Header block 22 · field 34 (empty) / 50 (filled) · subtext block 22.
     Field padding 12 left, 10 top; Value line-height 16.
     Filled Value is 338 × 32 — two lines, not one.
     hasLabel and hasSubtext are component properties: hiding either collapses
     its block and the card shrinks, the way it does in Figma. */
  var fieldH = filled ? 50 : 34;
  var topY = o.hasLabel ? 22 : 0;
  var H = topY + fieldH + (o.hasSubtext ? 22 : 0);

  var valColor = (o.state === 'disabled') ? '#90A8D0' : (filled ? '#0A2757' : '#90A8D0');
  var lines = filled
    ? ['This a text area. This a text area.', 'This a text area. This a text area.']
    : ['Write your message…'];
  var count = filled ? '71/100' : '0/100';
  /* Focused and Error carry a heavier rule than Default — read off the export;
     strokeWeight is not exposed by the plugin. */
  var sw = (o.state === 'focused' || o.state === 'error') ? 2 : 1;
  var inset = sw / 2;

  var out = '<svg width="358" height="' + H + '" viewBox="0 0 358 ' + H + '" fill="none" role="img" aria-label="Text Area, ' + o.state + ', ' + (filled ? 'with value' : 'empty') + '">';
  if (o.hasLabel) {
    /* Label keeps #0A2757 in every state, Disabled included. */
    out += '<text x="2" y="11" font-family="' + TA_PROXIMA + '" font-size="14" font-weight="600" letter-spacing="0.25" fill="#0A2757">Label</text>';
  }
  out += '<rect x="' + inset + '" y="' + (topY + inset) + '" width="' + (358 - sw) + '" height="' + (fieldH - sw) + '" rx="6" fill="' + S.bg + '"'
       + (S.border ? ' stroke="' + S.border + '" stroke-width="' + sw + '"' : '') + '></rect>';
  for (var i = 0; i < lines.length; i++) {
    out += '<text x="12" y="' + (topY + 10 + 12 + i * 16) + '" font-family="' + TA_PROXIMA + '" font-size="14" font-weight="600" letter-spacing="0.25" fill="' + valColor + '">' + lines[i] + '</text>';
  }
  if (o.hasSubtext) {
    var sy = topY + fieldH + 17;
    out += '<text x="2" y="' + sy + '" font-family="' + TA_BARKADA + '" font-size="12" font-weight="600" fill="#6780A9">Message content</text>';
    out += '<text x="356" y="' + sy + '" text-anchor="end" font-family="' + TA_BARKADA + '" font-size="12" font-weight="600" fill="#6780A9">' + count + '</text>';
  }
  out += '</svg>';
  return out;
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
/* `_taDemo` is the source of truth: the Overview's livePreviewHtml sets its
   fields directly from inline onchange handlers. That markup predates the
   Figma rename, so it still writes `filled` and the state value `active`.
   Normalise here rather than editing the Overview — this run is Style-tab
   scope — so those controls keep working while the names catch up.
   `expandable` is accepted and ignored: no such property exists on 4781:35856. */
var _taDemo = { state: 'default', hasValue: 'false' };

function _taNormalise() {
  var st = _taDemo.state === 'active' ? 'focused' : _taDemo.state;
  var hv = _taDemo.hasValue;
  if (hv === undefined && _taDemo.filled !== undefined) {
    hv = (_taDemo.filled === 'yes' || _taDemo.filled === 'true') ? 'true' : 'false';
  }
  return { state: TA_STATES[st] ? st : 'default', hasValue: hv === 'true' ? 'true' : 'false' };
}

function updateTextAreaDemo() {
  var st = document.getElementById('ta-ctrl-state');
  var hv = document.getElementById('ta-ctrl-hasValue');
  if (st) _taDemo.state = st.value;
  if (hv) _taDemo.hasValue = hv.value;
  var n = _taNormalise();
  var el = document.getElementById('ta-demo-preview') || document.getElementById('text-area-demo-preview');
  if (el) el.innerHTML = _taBuildSvg({ state: n.state, hasValue: n.hasValue, hasLabel: true, hasSubtext: true });
}
window.updateTextAreaDemo = updateTextAreaDemo;

/* ── Spec cards (Style tab) — keys equal each card's demoKey ─────── */
var _specCards = {
  main: { state: 'default', hasValue: 'false', hasLabel: true, hasSubtext: true }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBTextArea(placeholder: "Write your message…", text: $message)'];
  lines.push('    .ebState(.' + (card.state || 'default') + ')');
  if (card.hasValue === 'true') lines.push('    .ebText("This a text area. This a text area.")');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var st = card.state || 'default';
  var name = st.charAt(0).toUpperCase() + st.slice(1);
  var lines = ['EBTextArea('];
  lines.push('    placeholder = "Write your message…",');
  lines.push('    value = ' + (card.hasValue === 'true' ? '"This a text area. This a text area."' : 'message') + ',');
  lines.push('    onValueChange = { },');
  lines.push('    state = EBFieldState.' + name);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = (value === 'true' && (prop === 'hasLabel' || prop === 'hasSubtext')) ? true
             : (value === 'false' && (prop === 'hasLabel' || prop === 'hasSubtext')) ? false
             : value;

  /* Repaint the preview. The host div id is `text-area-spec-<demoKey>`. */
  var host = document.getElementById('text-area-spec-' + cardStyle);
  if (host) host.innerHTML = _taBuildSvg(card);

  /* Property readout. The Colors/Layout `variants` maps are applied by the
     shared patcher in assessment.js — this script must not rebuild those
     sections, or it would wipe them. */
  ['state', 'hasValue', 'hasLabel', 'hasSubtext'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = card[k];
    el.textContent = (typeof v === 'boolean') ? (v ? 'True' : 'False')
      : (v === 'true') ? 'True' : (v === 'false') ? 'False'
      : String(v).charAt(0).toUpperCase() + String(v).slice(1);
  });

  /* DEV code — both tabs. */
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

function _taInit() {
  updateTextAreaDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _taInit);
else _taInit();
document.addEventListener('astro:page-load', _taInit);
