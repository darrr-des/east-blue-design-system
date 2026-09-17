/* Stepper — Style tab demo.
 * Rebuilt from Figma component set 4337:11140 (GCash DS 2026 Working File).
 * Sizes, fills and the ring geometry are read off get_node_info and
 * get_svg, and checked against export_node_as_image.
 *
 * Axes (from the variant names — no property panel was supplied):
 *   Type    · Bullet, Circular, Dash
 *   Steps   · 3–10 (Bullet) · 2–10 (Circular, Dash)
 *   Current · 1–Steps, plus 0 on one Circular variant
 *   Status  · Current, Completed · Upcoming (Circular) · Error (Dash)
 *
 * 225 variants ship — Bullet 52, Circular 56, Dash 117 — so the panel
 * snaps to the nearest built combination.
 *
 * Geometry: Bullet is 8px dots on a 16px pitch (16·N − 8 wide, 16 tall);
 * Dash is 22 × 4 bars on a 26px pitch (26·N − 4 wide, 4 tall); Circular is
 * a 45 × 45 ring, 5px wide, with the index centred. The Circular
 * label-container ("Step 1 of 10", 68 × 16) sits below the 45 × 45 frame
 * and is clipped — get_svg and export_node_as_image show no label.
 */

var STP_NODES = {"bullet|3|1|current": "4337:11138","bullet|3|2|current": "4337:11201","bullet|3|3|completed": "4337:11470","bullet|4|1|current": "4337:11137","bullet|4|2|current": "4337:11205","bullet|4|3|current": "4337:11474","bullet|4|4|completed": "4337:11586","bullet|5|1|current": "4337:11136","bullet|5|2|current": "4337:11210","bullet|5|3|current": "4337:11479","bullet|5|4|current": "4337:11591","bullet|5|5|completed": "4337:11714","bullet|6|1|current": "4337:11135","bullet|6|2|current": "4337:11216","bullet|6|3|current": "4337:11485","bullet|6|4|current": "4337:11597","bullet|6|5|current": "4337:11720","bullet|6|6|completed": "4337:12034","bullet|7|1|current": "4337:11134","bullet|7|2|current": "4337:11223","bullet|7|3|current": "4337:11492","bullet|7|4|current": "4337:11604","bullet|7|5|current": "4337:11727","bullet|7|6|current": "4337:12041","bullet|7|7|completed": "4337:12207","bullet|8|1|current": "4337:11133","bullet|8|2|current": "4337:11231","bullet|8|3|current": "4337:11500","bullet|8|4|current": "4337:11612","bullet|8|5|current": "4337:11735","bullet|8|6|current": "4337:12049","bullet|8|7|current": "4337:12215","bullet|8|8|completed": "4337:12275","bullet|9|1|current": "4337:11132","bullet|9|2|current": "4337:11240","bullet|9|3|current": "4337:11509","bullet|9|4|current": "4337:11621","bullet|9|5|current": "4337:11744","bullet|9|6|current": "4337:12058","bullet|9|7|current": "4337:12224","bullet|9|8|current": "4337:12284","bullet|9|9|completed": "4337:12386","bullet|10|1|current": "4337:11139","bullet|10|2|current": "4337:11250","bullet|10|3|current": "4337:11519","bullet|10|4|current": "4337:11631","bullet|10|5|current": "4337:11754","bullet|10|6|current": "4337:12068","bullet|10|7|current": "4337:12234","bullet|10|8|current": "4337:12294","bullet|10|9|current": "4337:12396","bullet|10|10|completed": "4337:12460","circular|2|1|current": "4365:11866","circular|2|0|upcoming": "4773:31490","circular|3|1|current": "4365:11913","circular|4|1|current": "4365:12129","circular|5|1|current": "4365:12197","circular|6|1|current": "4365:12279","circular|7|1|current": "4365:12508","circular|8|1|current": "4365:12670","circular|9|1|current": "4365:12840","circular|10|1|current": "4365:13233","circular|2|2|current": "4365:11891","circular|2|2|completed": "4695:22509","circular|3|2|current": "4365:11921","circular|4|2|current": "4365:12137","circular|5|2|current": "4365:12205","circular|6|2|current": "4365:12287","circular|7|2|current": "4365:12516","circular|8|2|current": "4365:12678","circular|9|2|current": "4365:12848","circular|10|2|current": "4365:13241","circular|3|3|current": "4365:11936","circular|4|3|current": "4365:12145","circular|5|3|current": "4365:12213","circular|6|3|current": "4365:12295","circular|7|3|current": "4365:12524","circular|8|3|current": "4365:12686","circular|9|3|current": "4365:12856","circular|10|3|current": "4365:13249","circular|4|4|current": "4365:12160","circular|5|4|current": "4365:12221","circular|6|4|current": "4365:12303","circular|7|4|current": "4365:12532","circular|8|4|current": "4365:12694","circular|9|4|current": "4365:12864","circular|10|4|current": "4365:13257","circular|5|5|current": "4365:12236","circular|6|5|current": "4365:12311","circular|7|5|current": "4365:12540","circular|8|5|current": "4365:12702","circular|9|5|current": "4365:12872","circular|10|5|current": "4365:13265","circular|6|6|current": "4365:12326","circular|7|6|current": "4365:12548","circular|8|6|current": "4365:12710","circular|9|6|current": "4365:12880","circular|10|6|current": "4365:13273","circular|7|7|current": "4365:12563","circular|8|7|current": "4365:12718","circular|9|7|current": "4365:12888","circular|10|7|current": "4365:13281","circular|8|8|current": "4365:12757","circular|9|8|current": "4365:12896","circular|10|8|current": "4365:13289","circular|9|9|current": "4365:12911","circular|10|9|current": "4365:13297","circular|10|10|current": "4365:13312","dash|10|1|current": "4689:18458","dash|10|1|error": "4773:32272","dash|9|1|current": "4695:21583","dash|9|1|error": "4773:32283","dash|8|1|current": "4695:21783","dash|8|1|error": "4773:32293","dash|7|1|current": "4695:21945","dash|7|1|error": "4773:32302","dash|6|1|current": "4695:22073","dash|6|1|error": "4773:32310","dash|5|1|current": "4695:22171","dash|5|1|error": "4773:32317","dash|4|1|current": "4695:22247","dash|4|1|error": "4773:32323","dash|3|1|current": "4695:22297","dash|3|1|error": "4773:32328","dash|2|1|current": "4695:22329","dash|2|1|error": "4773:32332","dash|10|2|current": "4689:18469","dash|10|2|error": "4773:32335","dash|9|2|current": "4695:21594","dash|9|2|error": "4773:32346","dash|8|2|current": "4695:21793","dash|8|2|error": "4773:32356","dash|7|2|current": "4695:21954","dash|7|2|error": "4773:32365","dash|6|2|current": "4695:22081","dash|6|2|error": "4773:32373","dash|5|2|current": "4695:22178","dash|5|2|error": "4773:32380","dash|4|2|current": "4695:22253","dash|4|2|error": "4773:32386","dash|3|2|current": "4695:22302","dash|3|2|error": "4773:32391","dash|2|2|current": "4695:22333","dash|2|2|error": "4773:32395","dash|2|2|completed": "4773:32825","dash|10|3|current": "4689:18480","dash|10|3|error": "4773:32398","dash|9|3|current": "4695:21605","dash|9|3|error": "4773:32409","dash|8|3|current": "4695:21803","dash|8|3|error": "4773:32419","dash|7|3|current": "4695:21963","dash|7|3|error": "4773:32428","dash|6|3|current": "4695:22089","dash|6|3|error": "4773:32436","dash|5|3|current": "4695:22185","dash|5|3|error": "4773:32443","dash|4|3|current": "4695:22259","dash|4|3|error": "4773:32449","dash|3|3|current": "4695:22307","dash|3|3|error": "4773:32454","dash|3|3|completed": "4773:32828","dash|10|4|current": "4689:18491","dash|10|4|error": "4773:32458","dash|9|4|current": "4695:21616","dash|9|4|error": "4773:32469","dash|8|4|current": "4695:21813","dash|8|4|error": "4773:32479","dash|7|4|current": "4695:21972","dash|7|4|error": "4773:32488","dash|6|4|current": "4695:22097","dash|6|4|error": "4773:32496","dash|5|4|current": "4695:22192","dash|5|4|error": "4773:32503","dash|4|4|current": "4695:22265","dash|4|4|error": "4773:32509","dash|4|4|completed": "4773:32832","dash|10|5|current": "4689:18502","dash|10|5|error": "4773:32514","dash|9|5|current": "4695:21627","dash|9|5|error": "4773:32525","dash|8|5|current": "4695:21823","dash|8|5|error": "4773:32535","dash|7|5|current": "4695:21981","dash|7|5|error": "4773:32544","dash|6|5|current": "4695:22105","dash|6|5|error": "4773:32552","dash|5|5|current": "4695:22199","dash|5|5|error": "4773:32559","dash|5|5|completed": "4773:32837","dash|10|6|current": "4689:18513","dash|10|6|error": "4773:32565","dash|9|6|current": "4695:21638","dash|9|6|error": "4773:32576","dash|8|6|current": "4695:21833","dash|8|6|error": "4773:32586","dash|7|6|current": "4695:21990","dash|7|6|error": "4773:32595","dash|6|6|current": "4695:22113","dash|6|6|error": "4773:32603","dash|6|6|completed": "4773:32843","dash|10|7|current": "4689:18524","dash|10|7|error": "4773:32610","dash|9|7|current": "4695:21649","dash|9|7|error": "4773:32621","dash|8|7|current": "4695:21843","dash|8|7|error": "4773:32631","dash|7|7|current": "4695:21999","dash|7|7|error": "4773:32640","dash|7|7|completed": "4773:32850","dash|10|8|current": "4689:18535","dash|10|8|error": "4773:32648","dash|9|8|current": "4695:21660","dash|9|8|error": "4773:32659","dash|8|8|current": "4695:21853","dash|8|8|error": "4773:32669","dash|8|8|completed": "4773:32858","dash|10|9|current": "4689:18546","dash|10|9|error": "4773:32678","dash|9|9|current": "4695:21671","dash|9|9|error": "4773:32689","dash|9|9|completed": "4773:32867","dash|10|10|current": "4689:18557","dash|10|10|error": "4773:32699","dash|10|10|completed": "4773:32877"};

var STP_BLUE = '#005CE5', STP_PALE = '#D2E5FF', STP_GREEN = '#12AF80', STP_RED = '#D61B2C', STP_UPCOMING = '#9BC5FD';

var STP_AXES = ['type', 'steps', 'current', 'status'];
function _stpKey(c) { return c.type + '|' + c.steps + '|' + c.current + '|' + c.status; }

function _stpResolve(card, changed) {
  var key = _stpKey(card);
  if (STP_NODES[key]) return key;
  var parts = key.split('|'), ci = changed ? STP_AXES.indexOf(changed) : -1;
  var best = null, bestScore = -1;
  Object.keys(STP_NODES).forEach(function (k) {
    var kp = k.split('|');
    if (ci >= 0 && kp[ci] !== parts[ci]) return;
    var score = 0;
    for (var i = 0; i < kp.length; i++) if (kp[i] === parts[i]) score += (i === 0 ? 10 : 1);
    /* prefer the nearest Steps / Current when they differ */
    score -= Math.abs(Number(kp[1]) - Number(parts[1])) * 0.1;
    score -= Math.abs(Number(kp[2]) - Number(parts[2])) * 0.05;
    if (score > bestScore) { bestScore = score; best = k; }
  });
  return best || 'bullet|3|1|current';
}

function _stpSize(key) {
  var p = key.split('|'), n = Number(p[1]);
  if (p[0] === 'bullet') return { w: 16 * n - 8, h: 16 };
  if (p[0] === 'dash') return { w: 26 * n - 4, h: 4 };
  return { w: 45, h: 45 };
}

/* Fill per step index (1-based), from the variants:
   steps up to Current are blue, the rest pale; Completed paints them all
   (blue on Bullet, green on Dash); Error paints the current one red. */
function _stpFill(type, i, current, status) {
  if (status === 'completed') return type === 'dash' ? STP_GREEN : STP_BLUE;
  if (status === 'error' && i === current) return STP_RED;
  return i <= current ? STP_BLUE : STP_PALE;
}

function _stpRender(key) {
  var p = key.split('|'), type = p[0], n = Number(p[1]), cur = Number(p[2]), status = p[3];
  var s = _stpSize(key);
  var out = '<svg width="' + s.w + '" height="' + s.h + '" viewBox="0 0 ' + s.w + ' ' + s.h +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  if (type === 'bullet') {
    for (var i = 1; i <= n; i++) {
      out += '<circle cx="' + ((i - 1) * 16 + 4) + '" cy="8" r="4" fill="' + _stpFill(type, i, cur, status) + '"/>';
    }
  } else if (type === 'dash') {
    for (var j = 1; j <= n; j++) {
      out += '<rect x="' + ((j - 1) * 26) + '" y="0" width="22" height="4" rx="2" fill="' + _stpFill(type, j, cur, status) + '"/>';
    }
  } else {
    var C = 2 * Math.PI * 20;                 /* r20, 5px stroke */
    out += '<circle cx="22.5" cy="22.5" r="20" stroke="' + STP_PALE + '" stroke-width="5"/>';
    if (status === 'completed') {
      out += '<circle cx="22.5" cy="22.5" r="20" stroke="' + STP_GREEN + '" stroke-width="5"/>';
      out += '<path d="M17 22L20.5 25L27 19" stroke="' + STP_GREEN + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
      if (cur > 0) {
        out += '<circle cx="22.5" cy="22.5" r="20" stroke="' + STP_BLUE + '" stroke-width="5" stroke-linecap="round"' +
               ' stroke-dasharray="' + (C * cur / n) + ' ' + C + '" transform="rotate(-90 22.5 22.5)"/>';
      }
      out += '<text class="stp-index" x="22.5" y="23" font-size="18" font-weight="700" fill="' +
             (status === 'upcoming' ? STP_UPCOMING : STP_BLUE) +
             '" text-anchor="middle" dominant-baseline="central">' + cur + '</text>';
    }
  }
  return out + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { type: 'bullet', steps: '3', current: '1', status: 'current' }
};
window._specCards = _specCards;

function _stpCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBStepper(', '    steps: ' + c.steps + ',', '    current: ' + c.current + ',',
           '    type: .' + c.type + (c.status === 'current' ? '' : ',')];
  if (c.status !== 'current') l.push('    status: .' + c.status);
  l.push(')');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBStepper(', '    steps = ' + c.steps + ',', '    current = ' + c.current + ',',
           '    type = EBStepperType.' + _stpCap(c.type) + ','];
  if (c.status !== 'current') l.push('    status = EBStepperStatus.' + _stpCap(c.status) + ',');
  l[l.length - 1] = l[l.length - 1].replace(/,$/, '');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _stpSync(cardStyle, card) {
  STP_AXES.forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var key = _stpResolve(card, prop);
  key.split('|').forEach(function (v, i) { card[STP_AXES[i]] = v; });
  _stpSync(cardStyle, card);

  var host = document.getElementById('stepper-spec-' + cardStyle);
  if (host) host.innerHTML = _stpRender(key);

  STP_AXES.forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = (a === 'steps' || a === 'current') ? card[a] : _stpCap(card[a]);
  });
  var size = _stpSize(key);
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = size.w + ' × ' + size.h;
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = STP_NODES[key] + ' · ' + size.w + ' × ' + size.h;

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

/* ── Overview tab shim — the old panel had steps / current only. ───── */
function _stepperBulletUpdate() {
  var el = document.getElementById('stepper-bullet-demo-preview');
  if (!el) return;
  var g = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _stpRender(_stpResolve({ type: 'bullet', steps: g('stepper-bullet-ctrl-steps', '3'),
    current: g('stepper-bullet-ctrl-current', '1'), status: 'current' }, null));
}
window._stepperBulletUpdate = _stepperBulletUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _stpInit() {
  _stepperBulletUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('stepper-spec-' + k);
    if (host) host.innerHTML = _stpRender(_stpResolve(_specCards[k], null));
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stpInit);
else _stpInit();
document.addEventListener('astro:page-load', _stpInit);
