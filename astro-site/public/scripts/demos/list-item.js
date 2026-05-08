/* Auto-extracted from assessment-src/components/list-item.html.
 * Powers the live-preview dropdowns/toggles for the list-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs list-item
 */
/* ── List Item JS ─────────────────────────────────────────────────── */
var _liDemo = { level: 1, asset: 'bullet' };

function _liBuildMarker16(variant) {
  var v = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">';
  switch (variant) {
    case 'check': v += '<path d="M3 8l3 3 7-7" stroke="#90A8D0" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'; break;
    case 'check-positive': v += '<path d="M3 8l3 3 7-7" stroke="#27C990" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'; break;
    case 'pending': v += '<circle cx="8" cy="8" r="6.5" fill="none" stroke="#90A8D0" stroke-width="1.5"/><path d="M8 4v4l2.5 1.5" stroke="#90A8D0" stroke-width="1.5" stroke-linecap="round" fill="none"/>'; break;
    case 'pending-notice': v += '<circle cx="8" cy="8" r="6.5" fill="none" stroke="#CA970C" stroke-width="1.5"/><path d="M8 4v4l2.5 1.5" stroke="#CA970C" stroke-width="1.5" stroke-linecap="round" fill="none"/>'; break;
    case 'numbered': v += '<rect x="0" y="2" width="16" height="12" rx="6" fill="#EEF2F9"/><text x="8" y="11" text-anchor="middle" fill="#90A8D0" font-size="9" font-weight="700" font-family="\'Proxima Soft\', system-ui">1.</text>'; break;
    case 'custom': v += '<rect x="1" y="1" width="14" height="14" rx="2" fill="none" stroke="#ADBDDC" stroke-width="1" stroke-dasharray="2 2"/>'; break;
    default: v += '<circle cx="8" cy="8" r="2.5" fill="#90A8D0"/>';
  }
  v += '</svg>';
  return v;
}

function _liBuildRow(level, assetVariant) {
  var indent = level === 2 ? 16 : level === 3 ? 32 : 0;
  var body = 'List body with level-' + level + ' style';
  var w = 310;
  var s = '<div style="display:flex;gap:8px;align-items:flex-start;padding-left:' + indent + 'px;max-width:' + w + 'px;">';
  s += '<div style="padding-top:2px;">' + _liBuildMarker16(assetVariant) + '</div>';
  s += '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">' + body + '</div>';
  s += '</div>';
  return s;
}

function updateListItemDemo() {
  var lvEl = document.getElementById('li-demo-level');
  var asEl = document.getElementById('li-demo-asset');
  if (lvEl) _liDemo.level = parseInt(lvEl.value, 10);
  if (asEl) _liDemo.asset = asEl.value;
  var el = document.getElementById('li-demo-preview');
  if (el) el.innerHTML = _liBuildRow(_liDemo.level, _liDemo.asset);
}

/* ── List Item Spec Cards ─────────────────────────────────────────── */
var _liSpecCards = {
  level1: { level: '1', asset: 'bullet' },
  level2: { level: '2', asset: 'bullet' },
  level3: { level: '3', asset: 'bullet' }
};

var _specCards = _liSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var lvl = parseInt(card.level, 10);
  var asset = card.asset;
  var body = 'EBListItem("List body with level-' + lvl + ' style")';
  if (lvl > 1) body += '\n    .ebLevel(' + lvl + ')';
  if (asset !== 'bullet') body += '\n    .ebMarker(.' + _liSwiftAsset(asset) + ')';
  return body;
}

function buildComposeSnippet(type, card) {
  var lvl = parseInt(card.level, 10);
  var asset = card.asset;
  var s = 'EBListItem(\n    content = "List body with level-' + lvl + ' style"';
  if (lvl > 1) s += ',\n    level = ' + lvl;
  if (asset !== 'bullet') s += ',\n    marker = EBListMarker.' + _liComposeAsset(asset);
  s += '\n)';
  return s;
}

function _liSwiftAsset(a) {
  if (a === 'check') return 'check';
  if (a === 'check-positive') return 'checkPositive';
  if (a === 'pending') return 'pending';
  if (a === 'pending-notice') return 'pendingNotice';
  if (a === 'numbered') return 'numbered(1)';
  if (a === 'custom') return 'custom';
  return 'bullet';
}

function _liComposeAsset(a) {
  if (a === 'check') return 'Check';
  if (a === 'check-positive') return 'CheckPositive';
  if (a === 'pending') return 'Pending';
  if (a === 'pending-notice') return 'PendingNotice';
  if (a === 'numbered') return 'Numbered(1)';
  if (a === 'custom') return 'Custom';
  return 'Bullet';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _liSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var lvl = parseInt(card.level, 10);

  /* Update preview */
  var previewEl = document.getElementById('li-spec-' + cardStyle + '-preview');
  if (previewEl) previewEl.innerHTML = _liBuildRow(lvl, card.asset);

  /* Update Properties readouts via [data-sp] */
  var spLevel = document.querySelector('[data-sp="' + cardStyle + '-level"]');
  if (spLevel) spLevel.textContent = String(lvl);
  var spAsset = document.querySelector('[data-sp="' + cardStyle + '-asset"]');
  if (spAsset) spAsset.textContent = card.asset;

  /* Layout section is server-rendered from list-item.ts; Plan A's
     `_patchSpecCardRows` handles the level-keyed Indent override.
     Demo no longer rebuilds it. */

  /* Update DEV code via [data-code-content] */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
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

function _liInit() {
  updateListItemDemo();
  Object.keys(_liSpecCards).forEach(function(k) {
    var c = _liSpecCards[k];
    var el = document.getElementById('li-spec-' + k + '-preview');
    if (el) el.innerHTML = _liBuildRow(parseInt(c.level, 10), c.asset);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _liInit);
else _liInit();

(function(){
  document.addEventListener('astro:page-load', _liInit);
})();
