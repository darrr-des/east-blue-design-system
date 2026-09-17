/* Toast — Style tab demo.
 * Rebuilt from Figma component set 4915:25141 (GCash DS 2026 Working File).
 * Offsets, fills and text read off get_node_info on the variants; icon
 * glyphs from get_svg; checked against export_node_as_image.
 *
 * Axes (from the variant names — no property panel was supplied):
 *   Appearance        · Default, Destructive, Pending
 *   Theme             · Dark, Light
 *   Size              · MD, SM
 *   hasLeadingIcon    · True, False
 *   hasTrailingAction · True, False
 *   hasDescription    · True, False
 * Slots (no control): Text-Slot · Component-Slot
 *
 * 3 x 2 x 2 x 2 x 2 x 2 = 96 theoretical. 22 are built, so the panel snaps
 * to the nearest built variant rather than drawing a layout Figma lacks.
 */

var TS_W = 312;
var TS_AXES = ['appearance', 'theme', 'size', 'hasleadingicon', 'hastrailingaction', 'hasdescription'];

/* key = appearance|theme|size|icon|action|description. `kind` picks the
   layout: msg (38 tall), act (41, no description), actd (59). */
var TS_VARIANTS = [
  ['default|dark|md|true|false|false',       '4915:25142', 'msg'],
  ['default|light|md|true|false|false',      '4915:25148', 'msg'],
  ['destructive|dark|md|true|false|false',   '4915:25154', 'msg'],
  ['pending|dark|md|true|false|false',       '4915:25160', 'msg'],
  ['pending|light|md|true|false|false',      '4915:25166', 'msg'],
  ['destructive|dark|md|false|false|false',  '4915:25172', 'msg'],
  ['default|dark|md|false|false|false',      '4915:25175', 'msg'],
  ['default|light|md|false|false|false',     '4915:25178', 'msg'],
  ['destructive|dark|sm|true|false|false',   '4915:25181', 'msg'],
  ['default|dark|sm|true|false|false',       '4915:25186', 'msg'],
  ['default|light|sm|true|false|false',      '4915:25192', 'msg'],
  ['destructive|dark|sm|false|false|false',  '4915:25197', 'msg'],
  ['pending|dark|sm|true|false|false',       '4915:25200', 'msg'],
  ['pending|light|sm|true|false|false',      '4915:25205', 'msg'],
  ['default|dark|sm|false|false|false',      '4915:25210', 'msg'],
  ['default|light|sm|false|false|false',     '4915:25213', 'msg'],
  ['default|dark|md|false|true|true',        '4915:25216', 'actd'],
  ['default|light|md|false|true|true',       '4915:25224', 'actd'],
  ['destructive|light|md|false|true|true',   '4915:25232', 'actd'],
  ['default|dark|md|false|true|false',       '4915:25240', 'act'],
  ['default|light|md|false|true|false',      '4915:25245', 'act'],
  ['destructive|light|md|false|true|false',  '4915:25250', 'act']
].map(function (v) { return { key: v[0], node: v[1], kind: v[2] }; });
var TS_H = { msg: 38, act: 41, actd: 59 };

/* ── Colours — Destructive is red whatever its Theme value says ─────── */
function _tsColors(appearance, theme) {
  if (appearance === 'destructive') {
    return { bg: '#D61B2C', border: '#F4C7C9', title: '#FFFFFF', icon: '#FFFFFF',
             desc: '#F6F9FD', descOpacity: 0.8, btnBg: null, btnLabel: '#FFFFFF', btnText: 'Retry', btnW: 67 };
  }
  if (theme === 'light') {
    return { bg: '#FFFFFF', border: '#E5EBF4', title: '#0A2757', icon: '#0A2757',
             desc: '#6780A9', descOpacity: 1, btnBg: '#005CE5', btnLabel: '#FFFFFF', btnText: 'Label', btnW: 68 };
  }
  return { bg: '#0A2757', border: '#E5EBF4', title: '#FFFFFF', icon: '#FFFFFF',
           desc: '#F6F9FD', descOpacity: 0.72, btnBg: '#FFFFFF', btnLabel: '#005CE5', btnText: 'Label', btnW: 68 };
}

/* Icon glyphs from get_svg — Checkmark (Circular), Information, Close. */
var TS_ICON = {
  md: {
    'default': 'M12.002 3.09961C16.9171 3.09982 20.9023 7.0848 20.9023 12C20.9021 16.915 16.917 20.9002 12.002 20.9004C7.08675 20.9004 3.10177 16.9152 3.10156 12C3.10156 7.08467 7.08662 3.09961 12.002 3.09961ZM12.002 4.90039C8.08073 4.90039 4.90234 8.07878 4.90234 12C4.90255 15.921 8.08086 19.0996 12.002 19.0996C15.9229 19.0994 19.1014 15.9209 19.1016 12C19.1016 8.07891 15.923 4.9006 12.002 4.90039ZM15.4004 9.33008C15.7703 8.99817 16.3399 9.0287 16.6719 9.39844C17.0034 9.76831 16.9731 10.338 16.6035 10.6699L11.0312 15.6699C10.6717 15.9923 10.1218 15.9731 9.78516 15.627L7.35645 13.127C7.01016 12.7704 7.01849 12.2008 7.375 11.8545C7.73153 11.5082 8.30114 11.5165 8.64746 11.873L10.4727 13.752L15.4004 9.33008Z',
    'pending': 'M12.002 3.09961C16.9171 3.09982 20.9023 7.0848 20.9023 12C20.9021 16.915 16.917 20.9002 12.002 20.9004C7.08675 20.9004 3.10177 16.9152 3.10156 12C3.10156 7.08467 7.08662 3.09961 12.002 3.09961ZM12.002 4.90039C8.08073 4.90039 4.90234 8.07878 4.90234 12C4.90255 15.921 8.08086 19.0996 12.002 19.0996C15.9229 19.0994 19.1014 15.9209 19.1016 12C19.1016 8.07891 15.923 4.9006 12.002 4.90039ZM12.002 10.2002C12.4436 10.2004 12.8018 10.5583 12.8018 11V15.2002H13.002C13.4436 15.2004 13.8018 15.5583 13.8018 16C13.8015 16.4415 13.4435 16.7996 13.002 16.7998H11.002C10.5603 16.7998 10.2024 16.4416 10.2021 16C10.2021 15.5582 10.5601 15.2002 11.002 15.2002H11.2021V11.7998H11.002C10.5603 11.7998 10.2024 11.4416 10.2021 11C10.2021 10.5582 10.5601 10.2002 11.002 10.2002H12.002ZM12.002 7C12.5541 7.00021 13.002 7.44785 13.002 8C13.0017 8.55198 12.5539 8.99979 12.002 9C11.4498 9 11.0022 8.55211 11.002 8C11.002 7.44772 11.4497 7 12.002 7Z',
    'destructive': 'M12.002 3.09961C16.9171 3.09982 20.9023 7.0848 20.9023 12C20.9021 16.915 16.917 20.9002 12.002 20.9004C7.08675 20.9004 3.10177 16.9152 3.10156 12C3.10156 7.08467 7.08662 3.09961 12.002 3.09961ZM12.002 4.90039C8.08073 4.90039 4.90234 8.07878 4.90234 12C4.90255 15.921 8.08086 19.0996 12.002 19.0996C15.9229 19.0994 19.1014 15.9209 19.1016 12C19.1016 8.07891 15.923 4.9006 12.002 4.90039ZM13.7949 8.79297C14.1854 8.40244 14.8185 8.40244 15.209 8.79297C15.5991 9.18352 15.5994 9.81664 15.209 10.207L13.416 12L15.209 13.793C15.5991 14.1835 15.5994 14.8166 15.209 15.207C14.8186 15.5974 14.1855 15.5972 13.7949 15.207L12.002 13.4141L10.209 15.207C9.81859 15.5974 9.18548 15.5972 8.79492 15.207C8.4044 14.8165 8.4044 14.1835 8.79492 13.793L10.5879 12L8.79492 10.207C8.4044 9.81651 8.4044 9.18349 8.79492 8.79297C9.18545 8.40244 9.81846 8.40244 10.209 8.79297L12.002 10.5859L13.7949 8.79297Z'
  },
  sm: {
    'default': 'M8.00195 1.90234C11.3708 1.90234 14.1014 4.6332 14.1016 8.00195C14.1016 11.3709 11.3709 14.1016 8.00195 14.1016C4.6332 14.1014 1.90234 11.3708 1.90234 8.00195C1.90255 4.63333 4.63333 1.90255 8.00195 1.90234ZM8.00195 3.10156C5.29607 3.10177 3.10177 5.29607 3.10156 8.00195C3.10156 10.708 5.29594 12.9021 8.00195 12.9023C10.7081 12.9023 12.9023 10.7081 12.9023 8.00195C12.9021 5.29594 10.708 3.10156 8.00195 3.10156ZM10.0771 6.07715C10.3115 5.84283 10.6905 5.84283 10.9248 6.07715C11.1589 6.31148 11.1591 6.69056 10.9248 6.9248L7.4248 10.4248C7.19056 10.6591 6.81148 10.6589 6.57715 10.4248L5.07715 8.9248C4.84283 8.69049 4.84283 8.31146 5.07715 8.07715C5.31146 7.84283 5.69049 7.84283 5.9248 8.07715L7.00098 9.15332L10.0771 6.07715Z',
    'pending': 'M8.00195 1.90234C11.3707 1.90237 14.1014 4.63321 14.1016 8.00195C14.1016 11.3709 11.3709 14.1015 8.00195 14.1016C4.63321 14.1013 1.90234 11.3707 1.90234 8.00195C1.90255 4.63334 4.63334 1.90258 8.00195 1.90234ZM8.00195 3.10156C5.29609 3.10179 3.10177 5.29608 3.10156 8.00195C3.10156 10.708 5.29596 12.9021 8.00195 12.9023C10.7081 12.9023 12.9023 10.7081 12.9023 8.00195C12.9021 5.29595 10.708 3.10158 8.00195 3.10156ZM7.99805 6.7998C8.38434 6.79997 8.69798 7.11373 8.69824 7.5V10.332C8.98662 10.4184 9.19803 10.6836 9.19824 11C9.19814 11.3864 8.88444 11.7 8.49805 11.7002H7.49805C7.11151 11.7002 6.79796 11.3865 6.79785 11C6.79807 10.6835 7.00937 10.4184 7.29785 10.332V8.16699C7.00942 8.08054 6.79794 7.81655 6.79785 7.5C6.79811 7.11362 7.11161 6.7998 7.49805 6.7998H7.99805ZM7.79785 4.39941C8.23956 4.39948 8.59755 4.75752 8.59766 5.19922C8.59755 5.64092 8.23956 5.99896 7.79785 5.99902C7.35609 5.99902 6.99815 5.64096 6.99805 5.19922C6.99815 4.75748 7.35609 4.39941 7.79785 4.39941Z',
    'destructive': 'M8.00195 1.90234C11.3708 1.90234 14.1014 4.6332 14.1016 8.00195C14.1016 11.3709 11.3709 14.1016 8.00195 14.1016C4.6332 14.1014 1.90234 11.3708 1.90234 8.00195C1.90255 4.63333 4.63333 1.90255 8.00195 1.90234ZM8.00195 3.10156C5.29607 3.10177 3.10177 5.29607 3.10156 8.00195C3.10156 10.708 5.29594 12.9021 8.00195 12.9023C10.7081 12.9023 12.9023 10.7081 12.9023 8.00195C12.9021 5.29594 10.708 3.10156 8.00195 3.10156ZM9.58008 5.58008C9.81439 5.34576 10.1934 5.34576 10.4277 5.58008C10.662 5.81439 10.662 6.19342 10.4277 6.42773L8.85156 8.00391L10.4277 9.58008C10.662 9.81439 10.662 10.1934 10.4277 10.4277C10.1934 10.662 9.81439 10.662 9.58008 10.4277L8.00391 8.85156L6.42773 10.4277C6.19342 10.662 5.81439 10.662 5.58008 10.4277C5.34576 10.1934 5.34576 9.81439 5.58008 9.58008L7.15625 8.00391L5.58008 6.42773C5.34576 6.19342 5.34576 5.81439 5.58008 5.58008C5.81439 5.34576 6.19342 5.34576 6.42773 5.58008L8.00391 7.15625L9.58008 5.58008Z'
  }
};

function _tsKey(card) { return TS_AXES.map(function (a) { return card[a]; }).join('|'); }

function _tsResolve(card, changed) {
  var key = _tsKey(card);
  for (var i = 0; i < TS_VARIANTS.length; i++) if (TS_VARIANTS[i].key === key) return TS_VARIANTS[i];
  var parts = key.split('|'), ci = changed ? TS_AXES.indexOf(changed) : -1;
  var best = null, bestScore = -1;
  TS_VARIANTS.forEach(function (v) {
    var vp = v.key.split('|');
    if (ci >= 0 && vp[ci] !== parts[ci]) return;   /* keep what was just set */
    var score = 0;
    for (var j = 0; j < vp.length; j++) if (vp[j] === parts[j]) score++;
    if (score > bestScore) { bestScore = score; best = v; }
  });
  return best || TS_VARIANTS[0];
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _tsRender(v) {
  var p = v.key.split('|');
  var appearance = p[0], theme = p[1], size = p[2], icon = p[3] === 'true';
  var c = _tsColors(appearance, theme), H = TS_H[v.kind];
  var s = '<svg width="' + TS_W + '" height="' + H + '" viewBox="0 0 ' + TS_W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0.5" y="0.5" width="' + (TS_W - 1) + '" height="' + (H - 1) + '" rx="7.5" fill="' + c.bg + '" stroke="' + c.border + '"/>';

  if (v.kind === 'msg') {
    var md = size === 'md';
    if (icon) {
      var isz = md ? 24 : 16, iy = md ? 7 : 11;
      s += '<path transform="translate(12 ' + iy + ')" d="' + TS_ICON[size][appearance] + '" fill="' + c.icon + '"/>';
    }
    var tx = icon ? (md ? 44 : 36) : 12;
    s += '<text class="' + (md ? 'ts-md' : 'ts-sm') + '" x="' + tx + '" y="19" font-size="' + (md ? 14 : 12) +
         '" font-weight="600" fill="' + c.title + '" dominant-baseline="central">Add the popup message here</text>';
  } else {
    var withDesc = v.kind === 'actd';
    var titleY = withDesc ? 12 + 8 : 8 + 12.5;
    s += '<text class="ts-md" x="16" y="' + titleY + '" font-size="14" font-weight="700" fill="' + c.title +
         '" dominant-baseline="central">Add label here</text>';
    if (withDesc) {
      s += '<text class="ts-sub" x="16" y="' + (32 + 7.5) + '" font-size="10" font-weight="600" fill="' + c.desc +
           '" fill-opacity="' + c.descOpacity + '" dominant-baseline="central">Add description here.</text>';
    }
    var bx = withDesc ? 228 : 228, by = withDesc ? 23 : 9;
    if (appearance === 'destructive') bx = 229;
    if (c.btnBg) s += '<rect x="' + bx + '" y="' + by + '" width="' + c.btnW + '" height="24" rx="12" fill="' + c.btnBg + '"/>';
    s += '<text class="ts-md" x="' + (bx + c.btnW / 2) + '" y="' + (by + 12) + '" font-size="14" font-weight="700" fill="' + c.btnLabel +
         '" text-anchor="middle" dominant-baseline="central">' + c.btnText + '</text>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { appearance: 'default', theme: 'dark', size: 'md', hasleadingicon: 'true', hastrailingaction: 'false', hasdescription: 'false' }
};
window._specCards = _specCards;

var TS_LABEL = { md: 'MD', sm: 'SM', 'true': 'True', 'false': 'False' };
function _tsLabel(v) { return TS_LABEL[v] || (v.charAt(0).toUpperCase() + v.slice(1)); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, card) {
  var action = card.hastrailingaction === 'true';
  var l = ['EBToast(', '    ' + (action ? '"Add label here"' : '"Add the popup message here"') + ',',
           '    appearance: .' + card.appearance + ',', '    theme: .' + card.theme + ',',
           '    size: .' + card.size + (card.hasleadingicon === 'false' ? ',' : '')];
  if (card.hasleadingicon === 'false') l.push('    showsIcon: false');
  l.push(')');
  if (card.hasdescription === 'true') l.push('.ebDescription("Add description here.")');
  if (action) l.push('.ebAction("' + (card.appearance === 'destructive' ? 'Retry' : 'Label') + '") { }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, card) {
  var action = card.hastrailingaction === 'true';
  var l = ['EBToast(', '    message = ' + (action ? '"Add label here"' : '"Add the popup message here"') + ',',
           '    appearance = EBToastAppearance.' + _tsLabel(card.appearance) + ',',
           '    theme = EBToastTheme.' + _tsLabel(card.theme) + ',',
           '    size = EBToastSize.' + _tsLabel(card.size) + ','];
  if (card.hasleadingicon === 'false') l.push('    showsIcon = false,');
  if (card.hasdescription === 'true') l.push('    description = "Add description here.",');
  if (action) { l.push('    actionLabel = "' + (card.appearance === 'destructive' ? 'Retry' : 'Label') + '",'); l.push('    onAction = { },'); }
  l[l.length - 1] = l[l.length - 1].replace(/,$/, '');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _tsSyncControls(cardStyle, card) {
  TS_AXES.forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (!el) return;
    if (el.type === 'checkbox') {
      el.checked = card[a] === 'true';
      if (el.parentElement) el.parentElement.classList.toggle('is-on', el.checked);
    } else {
      el.value = card[a];
    }
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var v = _tsResolve(card, prop);
  v.key.split('|').forEach(function (val, i) { card[TS_AXES[i]] = val; });
  _tsSyncControls(cardStyle, card);

  var host = document.getElementById('toast-spec-' + cardStyle);
  if (host) host.innerHTML = _tsRender(v);

  TS_AXES.forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = _tsLabel(card[a]);
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

/* ── Overview tab shims ──────────────────────────────────────────────
   The Overview still carries the retired theme / With Icon / Large Label
   panel; it renders Figma's default variant until that tab is rebuilt. */
function _toastUpdate() {
  var el = document.getElementById('toast-demo-preview');
  if (el) el.innerHTML = _tsRender(TS_VARIANTS[0]);
}
window._toastUpdate = _toastUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _tsInit() {
  _toastUpdate();
  var ctx = document.getElementById('toast-context-preview');
  if (ctx) ctx.innerHTML = [0, 3, 2].map(function (i) { return '<div>' + _tsRender(TS_VARIANTS[i]) + '</div>'; }).join('');
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('toast-spec-' + k);
    if (host) host.innerHTML = _tsRender(_tsResolve(_specCards[k], null));
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tsInit);
else _tsInit();
document.addEventListener('astro:page-load', _tsInit);
