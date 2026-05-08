/* Auto-extracted from assessment-src/components/list-item-asset.html.
 * Powers the live-preview dropdowns/toggles for the list-item-asset component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs list-item-asset
 */
/* ── List Item Asset JS ───────────────────────────────────────────── */
var _liaDemo = { variant: 'check' };

function _liaBuildMarker(variant, scale) {
  scale = scale || 1;
  var s = 16 * scale;
  var v = '<svg width="' + s + '" height="' + s + '" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">';
  switch (variant) {
    case 'check':
      v += '<path d="M3 8l3 3 7-7" stroke="#90A8D0" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'; break;
    case 'check-positive':
      v += '<path d="M3 8l3 3 7-7" stroke="#27C990" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'; break;
    case 'pending':
      v += '<circle cx="8" cy="8" r="6.5" fill="none" stroke="#90A8D0" stroke-width="1.5"/><path d="M8 4v4l2.5 1.5" stroke="#90A8D0" stroke-width="1.5" stroke-linecap="round" fill="none"/>'; break;
    case 'pending-notice':
      v += '<circle cx="8" cy="8" r="6.5" fill="none" stroke="#CA970C" stroke-width="1.5"/><path d="M8 4v4l2.5 1.5" stroke="#CA970C" stroke-width="1.5" stroke-linecap="round" fill="none"/>'; break;
    case 'bullet':
      v += '<circle cx="8" cy="8" r="2.5" fill="#90A8D0"/>'; break;
    case 'hollow':
      v += '<circle cx="8" cy="8" r="2" fill="none" stroke="#90A8D0" stroke-width="1"/>'; break;
    case 'square':
      v += '<rect x="5.5" y="5.5" width="5" height="5" rx="1" fill="#90A8D0"/>'; break;
    case 'numbered':
      v += '<rect x="0" y="2" width="16" height="12" rx="6" fill="#EEF2F9"/><text x="8" y="11" text-anchor="middle" fill="#90A8D0" font-size="9" font-weight="700" font-family="\'Proxima Soft\', system-ui">1.</text>'; break;
    case 'custom':
      v += '<rect x="1" y="1" width="14" height="14" rx="2" fill="none" stroke="#ADBDDC" stroke-width="1" stroke-dasharray="2 2"/><text x="8" y="11" text-anchor="middle" fill="#90A8D0" font-size="6" font-family="\'Proxima Soft\', system-ui">slot</text>'; break;
  }
  v += '</svg>';
  return v;
}

function updateListItemAssetDemo() {
  _liaDemo.variant = document.getElementById('lia-demo-variant').value;
  var el = document.getElementById('lia-demo-preview');
  if (el) el.innerHTML = _liaBuildMarker(_liaDemo.variant, 3);
}

function _liaInitSpecCards() {
  var all = ['check', 'check-positive', 'pending', 'pending-notice', 'bullet', 'hollow', 'square', 'numbered', 'custom'];
  var html = '<div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;padding:12px 0;">';
  all.forEach(function(v) {
    html += '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;">' +
      _liaBuildMarker(v, 2.5) +
      '<code style="font-size:11px;color:var(--muted);">' + v + '</code></div>';
  });
  html += '</div>';
  var el = document.getElementById('lia-preview-all');
  if (el) el.innerHTML = html;
}

function _liaInit() {
  updateListItemAssetDemo();
  _liaInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _liaInit);
else _liaInit();

/* ── Canonical wiring (matches avatar.js shape) ────────────────────── */
/* Static showcase — no per-card state. Expose stubs so the shared
   `switchCodeTab(_, lang, cardStyle)` and any future dropdown bindings
   don't error. */
var _specCards = {
  'lia-all': { variant: 'check' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardStyle, card) {
  var lines = [];
  lines.push('EBListItem("Item label") {');
  lines.push('    Image("asset")');
  lines.push('}');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var lines = [];
  lines.push('EBListItem(');
  lines.push('    label = "Item label",');
  lines.push('    leadingAsset = { Image(painterResource(R.drawable.asset), null) }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var el = document.getElementById('spec-' + cardStyle + '-preview');
  if (el && typeof _liaBuildMarker === 'function') {
    el.innerHTML = _liaBuildMarker(card.variant, 1);
  }
}
window.updateSpecCard = updateSpecCard;

function _liaInitSpecCard() {
  var card = _specCards['lia-all'];
  if (!card) return;
  var el = document.getElementById('spec-lia-all-preview');
  if (el && typeof _liaBuildMarker === 'function') {
    el.innerHTML = _liaBuildMarker(card.variant, 1);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _liaInitSpecCard);
} else {
  _liaInitSpecCard();
}
document.addEventListener('astro:page-load', _liaInitSpecCard);
