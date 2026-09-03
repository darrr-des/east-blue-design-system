/* Upload File — live preview + spec cards.
 * Mirrors node 4853:26511 (2026 Working File):
 *   Status = Default | Uploading | Error | Uploaded   → the four cards
 *   State  = Default | Focused | Disabled            → the panel control
 *
 * Only 8 of the 12 combinations exist. Uploading and Error ship State=Default
 * only, which the Overview records as deliberate — a transfer in flight is not
 * interactive. Those cards get a Default-only control rather than a preview
 * that invents variants Figma does not contain.
 *
 * Fonts are the component's own — Proxima Soft for the label and file name,
 * BarkAda for the subtext — never inherited from the documentation site.
 */

var UF_PX = "'Proxima Soft', system-ui, sans-serif";
var UF_BK = "BarkAda, system-ui, sans-serif";

var UF_STATUS = {
  'default':   { filled: false, trailing: false, progress: false, sub: '#6780A9', subText: 'Accepted format: JPEG, PNG, or PDF, Up to 3 MB' },
  'uploading': { filled: true,  trailing: false, progress: true,  sub: '#6780A9', subText: 'Accepted format: JPEG, PNG, or PDF, Up to 3 MB' },
  'error':     { filled: true,  trailing: false, progress: false, sub: '#D61B2C', subText: 'Maximum file size: 20MB' },
  'uploaded':  { filled: true,  trailing: true,  progress: false, sub: '#6780A9', subText: 'Accepted format: JPEG, PNG, or PDF, Up to 3 MB' }
};

function _ufBuildSvg(o) {
  var S = UF_STATUS[o.status] || UF_STATUS['default'];
  var dis = (o.state === 'disabled');
  var foc = (o.state === 'focused');
  var bodyH = S.progress ? 119 : 100;
  var topY = o.hasLabel ? 22 : 0;
  var H = topY + bodyH + (o.hasSubtext ? 8 + 18 : 0);

  var stroke = (o.status === 'error') ? '#D61B2C' : (foc ? '#005CE5' : '#E5EBF4');
  var sw = (o.status === 'error' || foc) ? 2 : 1;
  var fill = '#FFFFFF';
  if (dis) { stroke = null; sw = 0; fill = '#EEF2F9'; }
  function mute(c) { return dis ? '#C2CFE5' : c; }

  var nameColor = mute(S.filled ? '#005CE5' : '#90A8D0');
  var nameText  = S.filled ? 'GCash_File.png' : 'Attach file / photo';
  var inset = sw / 2;
  var rowY = topY + 24;
  var x = 16;   /* FileRow starts 16 in; each hidden part collapses the row */

  var out = '<svg width="304" height="' + H + '" viewBox="0 0 304 ' + H + '" fill="none" role="img" aria-label="Upload File, ' + o.status + ', ' + o.state + '">';
  if (o.hasLabel) {
    /* Label keeps #0A2757 in every state, Disabled included — verified on 6526:105079. */
    out += '<text x="2" y="11" font-family="' + UF_PX + '" font-size="14" font-weight="600" letter-spacing="0.25" fill="#0A2757">Label</text>';
  }
  out += '<rect x="' + inset + '" y="' + (topY + inset) + '" width="' + (304 - sw) + '" height="' + (bodyH - sw) + '" rx="6" fill="' + fill + '"'
       + (stroke ? ' stroke="' + stroke + '" stroke-width="' + sw + '"' : '') + '></rect>';
  if (o.hasThumbnail) {
    out += '<rect x="' + (x + 4) + '" y="' + (rowY + 4) + '" width="44" height="44" rx="4" fill="' + (dis ? '#F6F9FD' : '#EEF2F9') + '"></rect>';
    x += 56;
  }
  if (o.hasLeadingIcon) {
    out += '<g transform="translate(' + x + ',' + (rowY + 14) + ')" fill="none" stroke="' + mute('#445C85') + '" stroke-width="1.8" stroke-linecap="round">'
         + '<path d="M14.5 6.5 L7.5 13.5 a3.2 3.2 0 0 0 4.5 4.5 L19 11 a5.2 5.2 0 0 0-7.3-7.3 L5 10.4"/></g>';
    x += 28;
  }
  out += '<text x="' + x + '" y="' + (rowY + 32) + '" font-family="' + UF_PX + '" font-size="18" font-weight="600" letter-spacing="0.25" fill="' + nameColor + '">' + nameText + '</text>';
  if (S.trailing) {
    out += '<g transform="translate(264,' + (rowY + 14) + ')" fill="none" stroke="' + mute('#005CE5') + '" stroke-width="1.8" stroke-linecap="round">'
         + '<path d="M3 5.5h18M8 5.5V3.5h8v2M5.5 5.5l1 15h11l1-15"/></g>';
  }
  if (S.progress) {
    out += '<rect x="' + (o.hasThumbnail ? 72 : 24) + '" y="' + (topY + 80) + '" width="180" height="4" rx="2" fill="#C2CFE5"></rect>';
    out += '<text x="262" y="' + (topY + 85) + '" font-family="' + UF_BK + '" font-size="11" font-weight="600" fill="#6780A9">20%</text>';
  }
  if (o.hasSubtext) {
    out += '<text x="2" y="' + (topY + bodyH + 8 + 13) + '" font-family="' + UF_BK + '" font-size="12" font-weight="600" fill="' + (dis ? '#C2CFE5' : S.sub) + '">' + S.subText + '</text>';
  }
  return out + '</svg>';
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
/* `_ufDemo` is the source of truth so the Overview's inline handlers keep
   working; legacy names from the retired single-`state` enum are normalised. */
var _ufDemo = { status: 'default', state: 'default' };

function _ufNormalise() {
  var st = _ufDemo.status;
  if (!UF_STATUS[st]) {
    /* Old Overview markup used one `state` enum carrying the status values. */
    st = UF_STATUS[_ufDemo.state] ? _ufDemo.state : 'default';
  }
  if (st === 'thumbnail') st = 'uploaded';
  var s2 = ['default', 'focused', 'disabled'].indexOf(_ufDemo.state) >= 0 ? _ufDemo.state : 'default';
  return { status: st, state: s2 };
}

function updateUploadFileDemo() {
  var n = _ufNormalise();
  var el = document.getElementById('uf-demo-preview') || document.getElementById('upload-file-demo-preview');
  if (el) el.innerHTML = _ufBuildSvg({
    status: n.status, state: n.state,
    hasLabel: true, hasThumbnail: true, hasLeadingIcon: true, hasSubtext: true
  });
}
window.updateUploadFileDemo = updateUploadFileDemo;

/* ── Spec cards (Style tab) — keys equal each card's demoKey ─────── */
var _specCards = {
  main: { status: 'default', state: 'default', hasLabel: true, hasThumbnail: true, hasLeadingIcon: true, hasSubtext: true }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBUploadField(label: "Label", file: $file)'];
  lines.push('    .ebStatus(.' + (card.status || 'default') + ')');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  function cap(x) { return x.charAt(0).toUpperCase() + x.slice(1); }
  return [
    'EBUploadField(',
    '    label = "Label",',
    '    file = file,',
    '    status = EBUploadStatus.' + cap(card.status || 'default') + ',',
    '    state = EBFieldState.' + cap(card.state || 'default'),
    ')'
  ].join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* The set contains exactly 8 variants — Uploading and Error ship State=Default
   only. Keep the State control to what Figma actually has, rather than letting
   the panel produce combinations that do not exist:

     Default    Default · Focused · Disabled
     Uploading  Default
     Error      Default
     Uploaded   Default · Focused · Disabled                          */
var UF_STATES_BY_STATUS = {
  'default':   ['default', 'disabled', 'focused'],
  'uploading': ['default'],
  'error':     ['default'],
  'uploaded':  ['default', 'disabled', 'focused']
};

function _ufConstrainState(cardStyle, card) {
  var allowed = UF_STATES_BY_STATUS[card.status] || ['default'];
  if (allowed.indexOf(card.state) === -1) card.state = 'default';

  var sel = document.querySelector(
    '[onchange*="updateSpecCard(\'' + cardStyle + '\', \'state\'"]');
  if (!sel) return;
  for (var i = 0; i < sel.options.length; i++) {
    var o = sel.options[i];
    o.disabled = allowed.indexOf(o.value) === -1;
    o.textContent = o.textContent.replace(/ — not built$/, '');
    if (o.disabled) o.textContent += ' — not built';
  }
  sel.value = card.state;
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = (value === 'true') ? true : (value === 'false') ? false : value;
  _ufConstrainState(cardStyle, card);

  var host = document.getElementById('upload-file-spec-' + cardStyle);
  if (host) host.innerHTML = _ufBuildSvg(card);

  /* Property readout. Colors/Layout `variants` are applied by the shared
     patcher in assessment.js — this script must not rebuild those sections. */
  ['status', 'state', 'hasLabel', 'hasThumbnail', 'hasLeadingIcon', 'hasSubtext'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = card[k];
    el.textContent = (typeof v === 'boolean')
      ? (v ? 'True' : 'False')
      : String(v).charAt(0).toUpperCase() + String(v).slice(1);
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

function _ufInit() {
  updateUploadFileDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'status', _specCards[k].status);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ufInit);
else _ufInit();
document.addEventListener('astro:page-load', _ufInit);
