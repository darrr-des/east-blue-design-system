/* Component Playground — the whole tab, one cached file.
 *
 * Was inlined in src/pages/sandbox/playground/[slug].astro, which copied 62KB
 * into every generated page (25 pages = 1.5MB no browser could cache). The page
 * now carries only `meta` plus a data-src, and this file fetches the layer data.
 *
 * Boot contract, unchanged by the move: Astro runs a given script once per
 * session, so init is re-run from astro:page-load and #pg-data is marked so a
 * document boots exactly once.
 */
  (function () {
    // The site navigates with Astro's ClientRouter (view transitions). Astro runs a given
    // inline script ONCE per session: the first swap into this page executes it, every swap
    // after that skips it — measured, 5 navigations rendered 1 page without this hook. So the
    // init is re-run on astro:page-load, wired once via a window flag. pgBoot re-reads #pg-data
    // on every call, so whichever closure owns the listener always renders the current page.
    // Window-level listeners outlive a swap, so the hashchange handler is parked on window and
    // the previous one removed before re-registering.
    function pgBoot(D) {
    if (/[?&]nochrome\b/.test(location.search)) document.body.classList.add('pg-nochrome');
    var $ = function (id) { return document.getElementById(id); };
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var rgba = function (p) { var n = parseInt(p.hex.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + p.alpha + ')'; };
    var tokName = function (t) { return t && t.name ? t.name : null; };
    var num = function (v) { return Math.round(v * 100) / 100; };

    // ── State ──
    // `picked`: whether the user has selected a layer. Until then the panels describe the
    // whole component but the preview draws no selection.
    var state = { values: {}, edited: {}, mode: 'des', lang: 'swift', sel: 0, picked: false, hover: -1, highlight: null, peek: null };
    D.properties.forEach(function (p) {
      state.values[p.key] = p.kind === 'boolean' ? p.default : p.default;
    });
    var flat = [];          // current variant: [{ n, el, ax, ay, parent, depth }]
    var variant = null;

    // ── Controls (Figma order: variant properties, then text and booleans as the set defines them) ──
    var isVariantProp = function (p) { return p.kind === 'select' || p.kind === 'toggle'; };
    var ordered = D.properties.filter(isVariantProp)
      .concat(D.properties.filter(function (p) { return !isVariantProp(p); }));
    // As in Figma's instance panel, a boolean or text property shows only when the
    // current variant has a layer bound to it. Data built before `uses` shows them all.
    var usedHere = function (p) { return isVariantProp(p) || !variant || !variant.uses || variant.uses.indexOf(p.key) >= 0; };
    function renderControls() {
      $('pg-controls').innerHTML = ordered.filter(usedHere).map(function (p) {
        var ctrl;
        if (p.kind === 'text') {
          ctrl = '<input type="text" class="pg-text" data-key="' + esc(p.key) + '" aria-label="' + esc(p.name) + '" value="' + esc(state.values[p.key]) + '">';
        } else if (p.kind === 'select') {
          ctrl = '<label class="pg-select"><select data-key="' + esc(p.key) + '" aria-label="' + esc(p.name) + '">' +
            p.options.map(function (o) { return '<option' + (state.values[p.key] === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') +
            '</select></label>';
        } else {
          var on = p.kind === 'boolean' ? state.values[p.key] === true : /^true$/i.test(state.values[p.key]);
          ctrl = '<button type="button" class="pg-switch' + (on ? ' is-on' : '') + '" role="switch" aria-checked="' + on + '" aria-label="' + esc(p.name) + '" data-key="' + esc(p.key) + '"><span></span></button>';
        }
        return '<div class="pg-prop"><span class="pg-prop-label">' + esc(p.name) + '</span>' + ctrl + '</div>';
      }).join('');
    }
    $('pg-controls').addEventListener('change', function (e) {
      var s = e.target.closest('select[data-key]'); if (!s) return;
      state.values[s.dataset.key] = s.value; state.lastChanged = s.dataset.key; update(true); renderControls();
    });
    // Text properties rewrite their layers in place — no rebuild, so the input keeps focus.
    $('pg-controls').addEventListener('input', function (e) {
      var t = e.target.closest('input.pg-text'); if (!t) return;
      state.values[t.dataset.key] = t.value; state.edited[t.dataset.key] = true;
      flat.forEach(function (f) { if (f.n.textProp === t.dataset.key) applyText(f); });
      readLayout(); renderSelection();
    });
    $('pg-controls').addEventListener('click', function (e) {
      var b = e.target.closest('.pg-switch'); if (!b) return;
      var p = D.properties.find(function (x) { return x.key === b.dataset.key; });
      state.lastChanged = p.key;
      if (p.kind === 'boolean') state.values[p.key] = !state.values[p.key];
      else {
        var on = /^true$/i.test(state.values[p.key]);
        state.values[p.key] = p.options.find(function (o) { return /^true$/i.test(o) !== on; });
      }
      update(true); renderControls();
    });
    // Fonts arriving change text widths: lay out again once they are in.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { readLayout(); if (flat.length) renderSelection(); });
    // On a component page the Playground boots inside a hidden tab, where every layer
    // measures 0 × 0. Lay out again whenever the canvas changes size — including the
    // moment the tab is shown.
    if (window.ResizeObserver && $('pg-canvas')) {
      if (window.__pgResize) window.__pgResize.disconnect();
      window.__pgResize = new ResizeObserver(function () { readLayout(); if (flat.length) renderSelection(); });
      window.__pgResize.observe($('pg-canvas'));
    }

    // Not every combination of properties exists as a variant. As in Figma: keep the value
    // just changed, take the variant that matches the most other properties, and move the
    // controls to what is actually shown.
    var variantProps = D.properties.filter(isVariantProp);
    function pickVariant() {
      var exact = D.variants.find(function (v) { return variantProps.every(function (p) { return v.props[p.name] === state.values[p.key]; }); });
      if (exact) return exact;
      var changed = variantProps.find(function (p) { return p.key === state.lastChanged; });
      var pool = changed ? D.variants.filter(function (v) { return v.props[changed.name] === state.values[changed.key]; }) : D.variants;
      if (!pool.length) pool = D.variants;
      var score = function (v) { return variantProps.filter(function (p) { return v.props[p.name] === state.values[p.key]; }).length; };
      var best = pool.reduce(function (a, v) { return score(v) > score(a) ? v : a; }, pool[0]);
      variantProps.forEach(function (p) { state.values[p.key] = best.props[p.name]; });
      renderControls();
      return best;
    }

    // ── Preview: every layer drawn from the Figma layer data ──
    function paintBg(fills) {
      if (!fills || !fills.length) return '';
      return 'background:' + fills.slice().reverse().map(function (f) { var c = rgba(f); return 'linear-gradient(' + c + ',' + c + ')'; }).join(',') + ';';
    }
    function dashedStroke(n) {
      var w = n.strokeWeights[0], c = rgba(n.strokes[n.strokes.length - 1]);
      var inset = n.strokeAlign === 'INSIDE' ? w / 2 : n.strokeAlign === 'OUTSIDE' ? -w / 2 : 0;
      var r = Math.max((n.radius ? n.radius[0] : 0) - inset, 0);
      var el = document.createElement('div');
      el.className = 'pg-dash';
      el.innerHTML = '<svg viewBox="0 0 ' + n.w + ' ' + n.h + '" preserveAspectRatio="none" fill="none">' +
        '<rect x="' + inset + '" y="' + inset + '" width="' + Math.max(n.w - inset * 2, 0) + '" height="' + Math.max(n.h - inset * 2, 0) + '" rx="' + r + '"' +
        ' stroke="' + c + '" stroke-width="' + w + '" stroke-dasharray="' + n.strokeDashes.join(' ') + '"/></svg>';
      return el;
    }
    function shadows(n) {
      var out = [];
      if (n.strokes && n.strokeWeights && !n.strokeDashes) {
        var c = rgba(n.strokes[n.strokes.length - 1]);
        var w = n.strokeWeights, a = n.strokeAlign;
        var sides = [[0, 1, w[0]], [-1, 0, w[1]], [0, -1, w[2]], [1, 0, w[3]]];
        sides.forEach(function (s) {
          if (!s[2]) return;
          var inset = a === 'OUTSIDE' ? 0 : a === 'CENTER' ? s[2] / 2 : s[2];
          var outset = a === 'INSIDE' ? 0 : a === 'CENTER' ? s[2] / 2 : s[2];
          if (inset) out.push('inset ' + (s[0] * inset) + 'px ' + (s[1] * inset) + 'px 0 0 ' + c);
          if (outset) out.push((-s[0] * outset) + 'px ' + (-s[1] * outset) + 'px 0 0 ' + c);
        });
      }
      // Figma casts a drop shadow from the node's RENDERED silhouette: for a frame with no fill
      // that is the outline of its children, not the frame's box. box-shadow always follows the
      // box, which drew a rectangular band under the Slider's fill-less Tooltip frame, where
      // Figma hugs the bubble and its pointer. filter: drop-shadow follows the alpha channel,
      // which is Figma's behaviour. CSS has no spread, so a spread shadow stays this much softer.
      var filled = (n.fills || []).some(function (f) { return (f.alpha === undefined ? 1 : f.alpha) > 0; });
      var drops = [];
      (n.effects || []).forEach(function (e) {
        if (!e.inner && !filled) { drops.push('drop-shadow(' + e.x + 'px ' + e.y + 'px ' + e.blur + 'px ' + rgba(e) + ')'); return; }
        out.push((e.inner ? 'inset ' : '') + e.x + 'px ' + e.y + 'px ' + e.blur + 'px ' + e.spread + 'px ' + rgba(e));
      });
      return (out.length ? 'box-shadow:' + out.join(',') + ';' : '') + (drops.length ? 'filter:' + drops.join(' ') + ';' : '');
    }
    // Figma writes a manual line break (Shift+Return) as U+2028, which browsers do not break on.
    var lines = function (t) { return String(t).replace(/[\u2028\u2029]/g, '\n'); };
    var WEIGHT_CASE = { UPPER: 'uppercase', LOWER: 'lowercase', TITLE: 'capitalize' };
    // Layout: an auto-layout frame is a flex container, as in Figma — so showing or hiding a
    // layer reflows its siblings and resizes Hug parents. A layer inside an auto-layout parent
    // flows (Fixed = its size, Hug = its content, Fill = the space left). Layers set to
    // "Ignore auto layout", and the children of frames without auto layout, keep their x/y.
    var JUSTIFY = { MIN: 'flex-start', CENTER: 'center', MAX: 'flex-end', SPACE_BETWEEN: 'space-between' };
    var ALIGN = { MIN: 'flex-start', CENTER: 'center', MAX: 'flex-end', BASELINE: 'baseline' };
    function sizeStyle(n, parentN) {
      var inFlow = parentN && parentN.layout && n.positioning !== 'ABSOLUTE';
      if (!parentN) {
        return 'position:relative;' +
          (n.sizingH === 'HUG' ? 'width:max-content;' : 'width:' + n.w + 'px;') +
          (n.sizingV === 'HUG' ? '' : 'height:' + n.h + 'px;');
      }
      if (!inFlow) return 'position:absolute;left:' + n.x + 'px;top:' + n.y + 'px;width:' + n.w + 'px;height:' + n.h + 'px;';
      var horiz = parentN.layout.mode === 'HORIZONTAL';
      var main = horiz ? 'w' : 'h';
      // Fill along an axis its parent hugs has no leftover space to take: Figma sizes the
      // layer to its content instead (a Fill-height text inside a Hug-height frame).
      var parentMainHug = (horiz ? parentN.sizingH : parentN.sizingV) === 'HUG';
      // Auto-width text: take Figma's own width. The browser measures the same string a
      // fraction narrower, and that difference adds up through a Hug parent.
      if (n.text && n.text.autoResize === 'WIDTH_AND_HEIGHT') return 'position:relative;flex-shrink:0;width:' + n.w + 'px;';
      var st = 'position:relative;flex-shrink:0;';
      [['w', 'width', n.sizingH], ['h', 'height', n.sizingV]].forEach(function (ax) {
        var mode = ax[2] || 'FIXED';
        if (ax[0] === main && mode === 'FILL' && parentMainHug) mode = 'HUG';
        if (ax[0] === main) {
          if (mode === 'FILL') st += 'flex:1 1 0;min-' + ax[1] + ':0;';
          else if (mode === 'FIXED') st += ax[1] + ':' + n[ax[0]] + 'px;';
        } else {
          if (mode === 'FILL') st += 'align-self:stretch;';
          else if (mode === 'FIXED') st += ax[1] + ':' + n[ax[0]] + 'px;';
        }
      });
      return st;
    }
    function build(n, parentEl, parentN, parent, depth) {
      var el = document.createElement('div');
      var i = flat.length;
      flat.push({ n: n, el: el, ax: 0, ay: 0, w: n.w, h: n.h, parent: parent, depth: depth });
      el.className = 'pg-n';
      el.dataset.i = i;
      var st = sizeStyle(n, parentN);
      if (n.limits) for (var lk in n.limits) st += lk.replace(/([A-Z])/g, '-$1').toLowerCase() + ':' + n.limits[lk] + 'px;';
      var L = n.layout;
      if (L && !n.text && !n.graphic) {
        var between = L.primary === 'SPACE_BETWEEN';
        st += 'display:flex;flex-direction:' + (L.mode === 'HORIZONTAL' ? 'row' : 'column') + ';' +
          // With "Include strokes in layout", each side's border adds to that side's padding.
          'padding:' + L.padding.map(function (v, k) { return (v + (n.strokesInLayout && n.strokeWeights ? n.strokeWeights[k] : 0)) + 'px'; }).join(' ') + ';' +
          'justify-content:' + (JUSTIFY[L.primary] || 'flex-start') + ';align-items:' + (ALIGN[L.counter] || 'flex-start') + ';' +
          (between ? '' : (L.mode === 'HORIZONTAL' ? 'column-gap:' : 'row-gap:') + L.gap + 'px;') +
          (L.wrap ? 'flex-wrap:wrap;' : '');
        // An auto-layout frame with nothing in it keeps the size Figma gives it (an empty slot).
        var kidsShown = (n.children || []).some(function (c) { return !c.hidden; });
        if (!kidsShown) st += 'min-width:' + n.w + 'px;min-height:' + n.h + 'px;';
      }
      if (n.ellipse) st += 'border-radius:50%;';
      if (n.radius) st += 'border-radius:' + n.radius.map(function (r) { return r + 'px'; }).join(' ') + ';';
      if (n.opacity !== undefined) st += 'opacity:' + n.opacity + ';';
      if (n.clip) st += 'overflow:hidden;';
      if (n.text) {
        var t = n.text;
        var color = n.fills && n.fills.length ? rgba(n.fills[0]) : 'transparent';
        st += "font-family:'" + t.family + "',system-ui,sans-serif;font-weight:" + t.weight + ';font-size:' + t.size + 'px;line-height:' + t.lineHeight + 'px;letter-spacing:' + t.letterSpacing + 'px;color:' + color + ';' +
          'text-align:' + t.align.toLowerCase().replace('justified', 'justify') + ';' +
          'justify-content:' + ({ TOP: 'flex-start', CENTER: 'center', BOTTOM: 'flex-end' }[t.alignV] || 'flex-start') + ';' +
          (t.italic ? 'font-style:italic;' : '') + (WEIGHT_CASE[t.case] ? 'text-transform:' + WEIGHT_CASE[t.case] + ';' : '') +
          (t.decoration === 'UNDERLINE' ? 'text-decoration:underline;' : t.decoration === 'STRIKETHROUGH' ? 'text-decoration:line-through;' : '');
        el.classList.add('pg-n-text');
        // Auto-width text never wraps in Figma; the browser can measure it a fraction wider.
        if (t.autoResize === 'WIDTH_AND_HEIGHT') el.classList.add('pg-n-nowrap');
        var span = document.createElement('span');
        if (t.segments) {
          t.segments.forEach(function (sg) {
            var run = document.createElement('span');
            run.textContent = lines(sg.text);
            var rs = '';
            if (sg.fills && sg.fills.length) rs += 'color:' + rgba(sg.fills[0]) + ';';
            if (sg.weight) rs += 'font-weight:' + sg.weight + ';';
            if (sg.size) rs += 'font-size:' + sg.size + 'px;';
            if (sg.lineHeight) rs += 'line-height:' + sg.lineHeight + 'px;';
            if (sg.letterSpacing != null) rs += 'letter-spacing:' + sg.letterSpacing + 'px;';
            if (sg.family) rs += "font-family:'" + sg.family + "',system-ui,sans-serif;";
            if (sg.italic) rs += 'font-style:italic;';
            if (WEIGHT_CASE[sg.case]) rs += 'text-transform:' + WEIGHT_CASE[sg.case] + ';';
            if (sg.decoration === 'UNDERLINE') rs += 'text-decoration:underline;';
            else if (sg.decoration === 'STRIKETHROUGH') rs += 'text-decoration:line-through;';
            if (rs) run.setAttribute('style', rs);
            span.appendChild(run);
          });
        } else span.textContent = lines(t.chars);
        el.appendChild(span);
      } else if (n.graphic) {
        el.classList.add('pg-n-svg');
        var art = el;
        // Artwork that draws outside its box (a stroked line is 313 × 0 in Figma) keeps the
        // box for layout and paints at its drawn size.
        if (n.render) {
          art = document.createElement('div');
          art.className = 'pg-art';
          art.setAttribute('style', 'left:' + n.render.x + 'px;top:' + n.render.y + 'px;width:' + n.render.w + 'px;height:' + n.render.h + 'px;');
          el.appendChild(art);
        }
        if (n.image && n.img != null) {
          var im = document.createElement('img');
          im.src = D.images[n.img];
          im.alt = '';
          art.appendChild(im);
        } else if (n.svg != null) {
          art.innerHTML = D.svgs[n.svg];
        }
      } else {
        st += paintBg(n.fills) + shadows(n);
        if (n.strokes && n.strokeWeights && n.strokeDashes) el.appendChild(dashedStroke(n));
      }
      if (n.type === 'SLOT') el.classList.add('pg-n-slot');
      el.setAttribute('style', st);
      if (n.textProp) applyText(flat[i]);
      parentEl.appendChild(el);
      (n.children || []).forEach(function (c) { build(c, el, n, i, depth + 1); });
      return el;
    }
    // Where each layer actually is, after the browser has laid it out — the overlays follow it.
    var rootEl = null;
    function readLayout() {
      if (!rootEl) return;
      var r0 = rootEl.getBoundingClientRect();
      flat.forEach(function (f) {
        var r = f.el.getBoundingClientRect();
        f.ax = r.left - r0.left; f.ay = r.top - r0.top; f.w = r.width; f.h = r.height;
      });
      // Empty slots show Figma's pink placeholder.
      flat.forEach(function (f, i) {
        if (f.n.type !== 'SLOT') return;
        var empty = !flat.some(function (c, j) { return c.parent === i && isShown(j); });
        f.el.classList.toggle('is-empty', empty);
      });
    }
    // A text layer bound to a TEXT property shows the property's value. While it still
    // reads Figma's own string, auto-width text keeps Figma's stored width (see sizeStyle);
    // once it is edited there is no stored width, so it hugs the new string.
    function applyText(f) {
      var n = f.n, v = state.values[n.textProp];
      if (v == null || !state.edited[n.textProp]) return;
      var span = f.el.firstChild;
      if (!span) return;
      var same = v === n.text.chars;
      if (!same || !n.text.segments) span.textContent = lines(v);
      if (n.text.autoResize === 'WIDTH_AND_HEIGHT') f.el.style.width = same ? n.w + 'px' : 'max-content';
    }
    function applyBooleans() {
      flat.forEach(function (f) {
        if (!f.n.visibleProp) return;
        // A class, not style.display: clearing display would also wipe an auto-layout frame's flex.
        f.el.classList.toggle('pg-off', state.values[f.n.visibleProp] === false);
      });
    }
    var isShown = function (i) {
      for (var j = i; j !== null && j !== undefined; j = flat[j].parent) if (flat[j].el.classList.contains('pg-off')) return false;
      return true;
    };

    // ── Overlay: selection, padding and gap hatching, token labels ──
    var overlay = null;
    function box(cls, x, y, w, h, extra) {
      return '<div class="' + cls + '" style="left:' + x + 'px;top:' + y + 'px;width:' + Math.max(w, 0) + 'px;height:' + Math.max(h, 0) + 'px;' + (extra || '') + '"></div>';
    }
    function tag(cls, x, y, text, anchor) {
      return '<div class="pg-tag ' + cls + '" style="left:' + x + 'px;top:' + y + 'px;transform:' + (anchor || 'translate(-50%,-50%)') + '">' + esc(text) + '</div>';
    }
    var isComp = function (n) { return n.type === 'COMPONENT' || n.type === 'INSTANCE'; };
    // The root layer's Figma name is its variant's property string ("Style=Default, State=…").
    // On the canvas that is noise: Figma labels the component itself, so the tag reads
    // "◇ Inline Text". The property string still names the variant in the controls and the tree.
    var nameOf = function (f) { return f.parent === null ? D.meta.name : f.n.name; };

    // ── Measure: selected layer ↔ hovered layer, as Figma does on hover ──
    // The space between them is hatched and labelled with the variable that makes it
    // when the data says so (the parent's gap between siblings, the parent's padding
    // between a child and its parent), and with the number otherwise.
    var near = function (a, b) { return Math.abs(a - b) < 0.5; };
    var labelFor = function (tok, v) { return tok && tok.name ? tok.name : String(num(v)); };
    function paddingLabel(parentIdx, side, v) {
      var P = flat[parentIdx].n.layout;
      if (P && near(P.padding[side], v)) return labelFor(P.paddingTokens[side], v);
      return String(num(v));
    }
    function measure(a, b) {
      var A = flat[a], B = flat[b];
      var ax1 = A.ax, ay1 = A.ay, ax2 = A.ax + A.w, ay2 = A.ay + A.h;
      var bx1 = B.ax, by1 = B.ay, bx2 = B.ax + B.w, by2 = B.ay + B.h;
      var html = '';
      var band = function (x, y, w, h, text, at) {
        if (w <= 0.01 || h <= 0.01) return;
        html += box('pg-ov-measure', x, y, Math.max(w, 1), Math.max(h, 1));
        html += at ? tag('pg-tag-gap', at[0], at[1], text, at[2]) : tag('pg-tag-gap', x + w / 2, y + h / 2, text);
      };
      var inside = function (o, i, oi) {
        // `i` sits inside `o`: hatch each side between them. `oi` is the outer layer's index.
        var direct = flat[i === a ? a : b].parent === oi;
        var I = flat[i], O = flat[oi];
        var ix1 = I.ax, iy1 = I.ay, ix2 = I.ax + I.w, iy2 = I.ay + I.h;
        var ox1 = O.ax, oy1 = O.ay, ox2 = O.ax + O.w, oy2 = O.ay + O.h;
        var lab = function (side, v) { return direct ? paddingLabel(oi, side, v) : String(num(v)); };
        // Labels sit outside the outer layer, one per side, clear of the name tag above
        // and the size tag below, so a small layer's four values never pile up.
        var cx = (ix1 + ix2) / 2, cy = (iy1 + iy2) / 2;
        // A dimension line per side, not a filled hatch: the hatch sits ON TOP of the outer
        // layer, so on a 48×48 Avatar Group the two 16px insets covered both avatars and the
        // component could not be seen. Figma measures a contained layer this way too — the
        // hatch stays for the gap between two separate layers, below.
        var rule = function (v, x, y, len, text, at) {
          if (len <= 0.01) return;
          html += box('pg-ov-rule', v ? x - 0.5 : x, v ? y : y - 0.5, v ? 1 : len, v ? len : 1);
          [0, len - 1].forEach(function (o) {
            html += box('pg-ov-rule', v ? x - 3.5 : x + o, v ? y + o : y - 3.5, v ? 7 : 1, v ? 1 : 7);
          });
          html += tag('pg-tag-gap', at[0], at[1], text, at[2]);
        };
        rule(1, cx, oy1, iy1 - oy1, lab(0, iy1 - oy1), [cx, oy1 - 24, 'translate(-50%,-100%)']);
        rule(0, ix2, cy, ox2 - ix2, lab(1, ox2 - ix2), [ox2 + 6, cy, 'translate(0,-50%)']);
        rule(1, cx, iy2, oy2 - iy2, lab(2, oy2 - iy2), [cx, oy2 + 24, 'translate(-50%,0)']);
        rule(0, ox1, cy, ix1 - ox1, lab(3, ix1 - ox1), [ox1 - 6, cy, 'translate(-100%,-50%)']);
      };
      var contains = function (x1, y1, x2, y2, X1, Y1, X2, Y2) { return X1 <= x1 + 0.01 && Y1 <= y1 + 0.01 && X2 >= x2 - 0.01 && Y2 >= y2 - 0.01; };
      if (isDescendant(a, b) || contains(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)) { inside(b, a, b); return html; }
      if (isDescendant(b, a) || contains(bx1, by1, bx2, by2, ax1, ay1, ax2, ay2)) { inside(a, b, a); return html; }
      // Apart: the gap on each axis where they do not overlap.
      var sib = A.parent !== null && A.parent === B.parent ? flat[A.parent].n.layout : null;
      var gapLabel = function (horizontal, v) {
        if (sib && (sib.mode === 'HORIZONTAL') === horizontal) {
          if (sib.primary === 'SPACE_BETWEEN') return 'auto · ' + num(v);
          if (near(sib.gap, v)) return labelFor(sib.gapToken, v);
        }
        return String(num(v));
      };
      var oy1 = Math.max(ay1, by1), oy2 = Math.min(ay2, by2);   // vertical overlap
      var ox1 = Math.max(ax1, bx1), ox2 = Math.min(ax2, bx2);   // horizontal overlap
      if (bx1 >= ax2 || ax1 >= bx2) {
        var gx1 = bx1 >= ax2 ? ax2 : bx2, gx2 = bx1 >= ax2 ? bx1 : ax1;
        var y1 = oy2 > oy1 ? oy1 : Math.min(ay1, by1), y2 = oy2 > oy1 ? oy2 : Math.max(ay2, by2);
        band(gx1, y1, gx2 - gx1, y2 - y1, gapLabel(true, gx2 - gx1));
      }
      if (by1 >= ay2 || ay1 >= by2) {
        var gy1 = by1 >= ay2 ? ay2 : by2, gy2 = by1 >= ay2 ? by1 : ay1;
        var x1 = ox2 > ox1 ? ox1 : Math.min(ax1, bx1), x2 = ox2 > ox1 ? ox2 : Math.max(ax2, bx2);
        band(x1, gy1, x2 - x1, gy2 - gy1, gapLabel(false, gy2 - gy1));
      }
      return html;
    }
    function drawOverlay() {
      var html = '';
      // Highlight: a hovered Colors / Typography row (peek) wins over a clicked colour (pin).
      var hl = state.peek || (state.highlight ? { type: 'color', key: state.highlight } : null);
      if (hl) {
        flat.forEach(function (f, i) {
          if (isShown(i) && usesHighlight(f.n, hl)) html += box('pg-ov-hl', f.ax, f.ay, f.w, f.h);
        });
      }
      if (state.hover >= 0 && !(state.picked && state.hover === state.sel) && isShown(state.hover)) {
        var h = flat[state.hover];
        html += box('pg-ov-hover' + (isComp(h.n) ? ' is-comp' : ''), h.ax, h.ay, h.w, h.h);
        if (state.picked && isShown(state.sel)) {
          html += measure(state.sel, state.hover);
          // A layer flush with the selected layer's top-left corner — Avatar Group's first
          // avatar sits at 0,0 — would put the two name tags in the same place, one hiding
          // the other. Stack the hovered layer's tag above the selected layer's.
          var sf = flat[state.sel];
          var lift = Math.abs(h.ax - sf.ax) < 2 && Math.abs(h.ay - sf.ay) < 2 ? 19 : 0;
          html += '<div class="pg-tag pg-tag-hover' + (isComp(h.n) ? ' is-comp' : '') + '" style="left:' + h.ax + 'px;top:' + (h.ay - 4 - lift) + 'px;transform:translate(0,-100%)">' +
            '<svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">' + ICONS[iconOf(h.n)] + '</svg>' + esc(nameOf(h)) + '</div>';
        }
      }
      var s = state.picked ? flat[state.sel] : null;
      if (s) {
        var n = s.n, L = n.layout, W = s.w, H = s.h;
        if (L) {
          var p = L.padding, pt = p[0], pr = p[1], pb = p[2], pl = p[3];
          if (pt) html += box('pg-ov-pad', s.ax, s.ay, W, pt);
          if (pb) html += box('pg-ov-pad', s.ax, s.ay + H - pb, W, pb);
          if (pl) html += box('pg-ov-pad', s.ax, s.ay + pt, pl, H - pt - pb);
          if (pr) html += box('pg-ov-pad', s.ax + W - pr, s.ay + pt, pr, H - pt - pb);
          var lbl = function (i) { return tokName(L.paddingTokens[i]) || String(p[i]); };
          if (pt) html += tag('pg-tag-pad', s.ax + W / 2, s.ay + pt / 2, lbl(0));
          if (pb) html += tag('pg-tag-pad', s.ax + W / 2, s.ay + H - pb / 2, lbl(2));
          if (pl) html += tag('pg-tag-pad', s.ax + pl / 2, s.ay + H / 2, lbl(3));
          if (pr) html += tag('pg-tag-pad', s.ax + W - pr / 2, s.ay + H / 2, lbl(1));
          // Gaps between visible children along the layout axis.
          var kids = flat.map(function (f, i) { return { f: f, i: i }; })
            .filter(function (k) { return k.f.parent === state.sel && isShown(k.i); })
            .map(function (k) { return k.f; });
          var horiz = L.mode === 'HORIZONTAL';
          kids.sort(function (a, b) { return horiz ? a.ax - b.ax : a.ay - b.ay; });
          for (var k = 1; k < kids.length; k++) {
            var a = kids[k - 1], b = kids[k];
            var g = horiz ? b.ax - (a.ax + a.w) : b.ay - (a.ay + a.h);
            if (g <= 0.01) continue;
            var gx = horiz ? a.ax + a.w : s.ax + pl, gy = horiz ? s.ay + pt : a.ay + a.h;
            var gw = horiz ? g : W - pl - pr, gh = horiz ? H - pt - pb : g;
            html += box('pg-ov-gap', gx, gy, gw, gh);
            var gl = L.primary === 'SPACE_BETWEEN' ? 'auto · ' + num(g) : (tokName(L.gapToken) || String(L.gap));
            html += tag('pg-tag-gap', gx + gw / 2, gy + gh / 2, gl);
          }
        }
        html += box('pg-ov-sel' + (isComp(n) ? ' is-comp' : ''), s.ax, s.ay, W, H);
        // Left edge of the layer, above it — Figma's own anchor, whatever the layer's width.
        html += '<div class="pg-tag pg-tag-name' + (isComp(n) ? ' is-comp' : '') + '" style="left:' + s.ax + 'px;top:' + (s.ay - 4) + 'px;transform:translate(0,-100%)">' +
          '<svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">' + ICONS[iconOf(n)] + '</svg>' + esc(nameOf(s)) + '</div>';
        html += tag('pg-tag-size' + (isComp(n) ? ' is-comp' : ''), s.ax + W / 2, s.ay + H + 4, num(W) + ' × ' + num(H), 'translate(-50%,0)');
      }
      overlay.innerHTML = html;
    }

    // ── Layers panel — the component's own layer tree, as in Figma ──
    var expanded = {};           // layer path → open; survives variant switches
    var ICONS = {
      component: '<path d="M4.2 8 8 4.2 11.8 8 8 11.8Z M8 1.8 9.6 3.4 8 5 6.4 3.4Z M8 11 9.6 12.6 8 14.2 6.4 12.6Z M1.8 8 3.4 6.4 5 8 3.4 9.6Z M11 8 12.6 6.4 14.2 8 12.6 9.6Z" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>',
      instance: '<path d="M8 2.5 13.5 8 8 13.5 2.5 8Z" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>',
      hstack: '<rect x="2.5" y="3.5" width="4" height="9" rx="1" fill="none" stroke="currentColor"/><rect x="9.5" y="5.5" width="4" height="5" rx="1" fill="none" stroke="currentColor"/>',
      vstack: '<rect x="3.5" y="2.5" width="9" height="4" rx="1" fill="none" stroke="currentColor"/><rect x="3.5" y="9.5" width="5" height="4" rx="1" fill="none" stroke="currentColor"/>',
      frame: '<path d="M5.5 2v12M10.5 2v12M2 5.5h12M2 10.5h12" stroke="currentColor"/>',
      text: '<path d="M3.5 3.5h9M8 3.5v9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>',
      vector: '<path d="M8 2.5 12 9l-4 4.5L4 9Z M8 2.5V8" fill="none" stroke="currentColor" stroke-linejoin="round"/><circle cx="8" cy="9" r="1" fill="currentColor"/>',
      rect: '<rect x="3" y="3" width="10" height="10" rx="1" fill="none" stroke="currentColor"/>',
      ellipse: '<circle cx="8" cy="8" r="5" fill="none" stroke="currentColor"/>',
      group: '<rect x="3" y="3" width="10" height="10" rx="1" fill="none" stroke="currentColor" stroke-dasharray="2 1.5"/>'
    };
    function iconOf(n) {
      if (n.type === 'COMPONENT' || n.type === 'COMPONENT_SET') return 'component';
      if (n.type === 'INSTANCE') return 'instance';
      if (n.type === 'TEXT') return 'text';
      if (n.layout) return n.layout.mode === 'HORIZONTAL' ? 'hstack' : 'vstack';
      if (n.type === 'GROUP') return 'group';
      if (n.type === 'RECTANGLE') return 'rect';
      if (n.type === 'ELLIPSE') return 'ellipse';
      if (n.graphic) return 'vector';
      return 'frame';
    }
    // Siblings can share a name — Ad Carousel's two "Ad Space" cards, Footer's two
    // "Logos - Footer". Keyed by name alone they shared ONE open/closed state, so opening one
    // collapsed its twin and rows disappeared from the tree. The ordinal among same-named
    // siblings makes the key unique while staying stable across variant switches, which a
    // plain child index would not be.
    var layerKey = function (i) {
      return pathOf(i).map(function (j) {
        var f = flat[j], k = 0;
        for (var m = 0; m < j; m++) if (flat[m].parent === f.parent && flat[m].n.name === f.n.name) k++;
        return f.n.name + (k ? '#' + k : '');
      }).join(' / ');
    };
    var hasKids = function (i) { return flat.some(function (f) { return f.parent === i; }); };
    var isOpen = function (i) { var k = layerKey(i); return k in expanded ? expanded[k] : flat[i].depth < 2; };
    function isDescendant(i, of) { for (var p = flat[i].parent; p !== null && p !== undefined; p = flat[p].parent) if (p === of) return true; return false; }
    // The row that carries tabindex="0": the selection when there is one, else
    // the first visible row, so the tree is always reachable with one Tab.
    function visibleRows() {
      var out = [];
      flat.forEach(function (f, i) {
        for (var p = f.parent; p !== null && p !== undefined; p = flat[p].parent) if (!isOpen(p)) return;
        out.push(i);
      });
      return out;
    }
    function kbRow() {
      var rows = visibleRows();
      if (state.picked && rows.indexOf(state.sel) >= 0) return state.sel;
      return rows.length ? rows[0] : -1;
    }
    function renderLayers() {
      var html = '';
      flat.forEach(function (f, i) {
        for (var p = f.parent; p !== null && p !== undefined; p = flat[p].parent) if (!isOpen(p)) return;
        var kids = hasKids(i), open = kids && isOpen(i);
        var sel = state.picked && i === state.sel, inside = state.picked && isDescendant(i, state.sel);
        html += '<div class="pg-layer' + (sel ? ' is-sel' : inside ? ' is-in' : '') + (i === state.hover ? ' is-hover' : '') + (isShown(i) ? '' : ' is-hidden') + '"' +
          ' role="treeitem" aria-level="' + (f.depth + 1) + '" aria-selected="' + sel + '"' + (kids ? ' aria-expanded="' + open + '"' : '') +
          // Roving tabindex: the tree is ONE tab stop and the arrow keys move
          // inside it (WAI-ARIA tree pattern). Without this the panel could not
          // be reached by keyboard at all — every row was tabindex-less.
          ' tabindex="' + (i === kbRow() ? '0' : '-1') + '"' +
          ' data-li="' + i + '" style="padding-left:' + (8 + f.depth * 28) + 'px">' +
          (kids ? '<button type="button" class="pg-chev' + (open ? ' is-open' : '') + '" data-tog="' + i + '" aria-label="' + (open ? 'Collapse ' : 'Expand ') + esc(f.n.name) + '"><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M3.5 2 6.5 5 3.5 8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' : '<span class="pg-chev-gap"></span>') +
          '<svg class="pg-licon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">' + ICONS[iconOf(f.n)] + '</svg>' +
          '<span class="pg-lname" title="' + esc(f.n.name) + '">' + esc(f.n.name) + '</span></div>';
      });
      var box = $('pg-layers');
      // One inner column as wide as the longest row, so every row's fill spans the scroll width.
      box.innerHTML = '<div class="pg-layers-inner">' + html + '</div>';
      // Keep the selected row in view inside the panel, without moving the page.
      var row = state.picked && box.querySelector('[data-li="' + state.sel + '"]');
      if (row) {
        var top = row.offsetTop, bottom = top + row.offsetHeight;
        if (top < box.scrollTop) box.scrollTop = top;
        else if (bottom > box.scrollTop + box.clientHeight) box.scrollTop = bottom - box.clientHeight;
      }
    }
    function markLayerHover() {
      var box = $('pg-layers');
      var old = box.querySelector('.pg-layer.is-hover'); if (old) old.classList.remove('is-hover');
      var row = state.hover >= 0 && box.querySelector('[data-li="' + state.hover + '"]'); if (row) row.classList.add('is-hover');
    }
    $('pg-layers').addEventListener('click', function (e) {
      var t = e.target.closest('[data-tog]');
      if (t) { var i = +t.dataset.tog; expanded[layerKey(i)] = !isOpen(i); renderLayers(); return; }
      var r = e.target.closest('[data-li]'); if (r) select(+r.dataset.li);
    });
    // Keyboard, the WAI-ARIA tree pattern: Up/Down move, Right opens or steps
    // into the first child, Left closes or steps out to the parent, Home/End
    // jump, Enter and Space select. Moving focus also selects, so the canvas,
    // Layout, Code, Typography and Colors panels follow the keyboard exactly as
    // they follow the mouse.
    function focusRow(i) {
      var row = $('pg-layers').querySelector('[data-li="' + i + '"]');
      if (row) row.focus();
    }
    $('pg-layers').addEventListener('keydown', function (e) {
      var r = e.target.closest('[data-li]');
      if (!r) return;
      var i = +r.dataset.li, rows = visibleRows(), at = rows.indexOf(i), next = null;
      if (e.key === 'ArrowDown') next = rows[Math.min(at + 1, rows.length - 1)];
      else if (e.key === 'ArrowUp') next = rows[Math.max(at - 1, 0)];
      else if (e.key === 'Home') next = rows[0];
      else if (e.key === 'End') next = rows[rows.length - 1];
      else if (e.key === 'ArrowRight') {
        if (hasKids(i) && !isOpen(i)) { expanded[layerKey(i)] = true; select(i); focusRow(i); e.preventDefault(); return; }
        if (hasKids(i)) next = rows[at + 1];
      } else if (e.key === 'ArrowLeft') {
        if (hasKids(i) && isOpen(i)) { expanded[layerKey(i)] = false; select(i); focusRow(i); e.preventDefault(); return; }
        var p = flat[i].parent;
        if (p !== null && p !== undefined) next = p;
      } else if (e.key === 'Enter' || e.key === ' ') { select(i); focusRow(i); e.preventDefault(); return; }
      else return;
      e.preventDefault();
      if (next === null || next === undefined) return;
      select(next);
      focusRow(next);
    });
    $('pg-layers').addEventListener('mouseover', function (e) {
      var r = e.target.closest('[data-li]'); var i = r ? +r.dataset.li : -1;
      if (i !== state.hover) { state.hover = i; drawOverlay(); markLayerHover(); }
    });
    $('pg-layers').addEventListener('mouseleave', function () { state.hover = -1; drawOverlay(); markLayerHover(); });

    // ── Selection ──
    function subtree(i) {
      var out = [i];
      flat.forEach(function (f, j) { if (j !== i) { for (var p = f.parent; p !== null && p !== undefined; p = flat[p].parent) if (p === i) { out.push(j); break; } } });
      return out.filter(isShown);
    }
    function pathOf(i) { var p = []; for (var j = i; j !== null && j !== undefined; j = flat[j].parent) p.unshift(j); return p; }
    function select(i, picked) {
      state.sel = i; state.picked = picked !== false; state.highlight = null;
      // Open the tree down to the selected layer, as Figma does.
      if (state.picked) for (var p = flat[i].parent; p !== null && p !== undefined; p = flat[p].parent) expanded[layerKey(p)] = true;
      renderSelection();
    }
    function renderSelection() {
      drawOverlay(); renderLayers(); renderLayout(); renderCode(); renderType(); renderColors();
    }

    function update(keepSelection) {
      var prevPath = keepSelection && state.picked && flat.length ? pathOf(state.sel).map(function (j) { return flat[j].n.name; }) : null;
      variant = pickVariant();
      var canvas = $('pg-canvas');
      canvas.innerHTML = '';
      flat = [];
      if (!variant) { canvas.innerHTML = '<div class="pg-none">No variant for this combination.</div>'; return; }
      var root = build(variant.tree, canvas, null, null, 0);
      rootEl = root;
      overlay = document.createElement('div');
      overlay.className = 'pg-overlay';
      // On the canvas, NOT inside the component root: a root that clips its content (Avatar
      // Group, and any Figma frame with "Clip content" on) would cut every label and line
      // that sits outside the component's box — the name tag, the size tag, the padding and
      // gap labels, the measure rules. The root sits at the canvas's origin, so the overlay's
      // coordinates, which readLayout() takes relative to the root, are unchanged.
      canvas.appendChild(overlay);
      applyBooleans();
      readLayout();
      state.sel = 0;
      if (!prevPath) state.picked = false;
      if (prevPath) {
        // Keep the same layer selected when it still exists in the new variant.
        var cur = 0;
        for (var d = 1; d < prevPath.length; d++) {
          var next = flat.findIndex(function (f, j) { return f.parent === cur && f.n.name === prevPath[d] && isShown(j); });
          if (next < 0) break; cur = next;
        }
        state.sel = cur;
      }
      state.hover = -1; state.highlight = null;
      renderSelection();
    }

    $('pg-canvas').addEventListener('mousemove', function (e) {
      var t = e.target.closest('[data-i]'); var i = t ? +t.dataset.i : -1;
      if (i !== state.hover) { state.hover = i; drawOverlay(); markLayerHover(); }
    });
    $('pg-canvas').addEventListener('mouseleave', function () { state.hover = -1; drawOverlay(); markLayerHover(); });
    $('pg-stage').addEventListener('click', function (e) {
      // Clicking the empty stage clears the selection, as in Figma.
      var t = e.target.closest('#pg-canvas [data-i]');
      if (t) select(+t.dataset.i); else select(0, false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || !state.picked) return;
      var par = flat[state.sel] && flat[state.sel].parent;
      if (par !== null && par !== undefined) select(par); else select(0, false);
    });

    // ── Layout panel ──
    var dash = function (v) { return v ? num(v) : '–'; };
    function sizing(v) { return v === 'FILL' ? 'Fill' : v === 'HUG' ? 'Hug' : v === 'FIXED' ? 'Fixed' : null; }
    function renderLayout() {
      var n = flat[state.sel].n;
      if (n.text) {
        var t = n.text, scale = 72 / t.size;
        var fs = t.size * scale, lh = t.lineHeight * scale;
        $('pg-layout').innerHTML =
          '<div class="pg-ag-wrap">' +
            // Figma's text inspect: a red bracket per measure, each ending on its badge.
            // Left = font size, right = line height; the blue box is the line box, and its
            // dashed lines mark where the font-size box sits inside it.
            '<div class="pg-ag" style="--fs:' + fs + 'px;--lh:' + lh + 'px">' +
              '<div class="pg-ag-br pg-ag-br-l"><span class="pg-ag-badge" title="Font size">' + num(t.size) + 'pt</span></div>' +
              '<div class="pg-ag-line">' +
                '<i class="pg-ag-guide pg-ag-guide-t"></i><i class="pg-ag-guide pg-ag-guide-b"></i>' +
                '<span class="pg-ag-glyph" style="font-family:\'' + esc(t.family) + '\',system-ui;font-weight:' + t.weight + '">Ag</span>' +
              '</div>' +
              '<div class="pg-ag-br pg-ag-br-r"><span class="pg-ag-badge" title="Line height">' + num(t.lineHeight) + 'pt</span></div>' +
            '</div>' +
            '<div class="pg-ag-name">' + esc(t.style || 'No text style') + '</div>' +
          '</div>';
        $('pg-layout-meta').innerHTML = meta([
          ['Font size', [[num(t.size), tokName(t.tokens.size)]], 'type'],
          ['Line height', [[num(t.lineHeight), tokName(t.tokens.lineHeight)]], 'type'],
          ['Letter spacing', [[num(t.letterSpacing), tokName(t.tokens.letterSpacing)]], 'type'],
          ['Font family', [[t.family, tokName(t.tokens.family)]], 'type'],
          ['Font weight', [[t.weight, tokName(t.tokens.weight)]], 'type'],
        ]);
        return;
      }
      var L = n.layout, p = L ? L.padding : [0, 0, 0, 0], sw = n.strokeWeights || [0, 0, 0, 0], r = n.radius || [0, 0, 0, 0];
      var pT = function (i) { return L && tokName(L.paddingTokens[i]) ? ' title="' + esc(L.paddingTokens[i].name) + '"' : ''; };
      var rT = function (i) { return n.radiusTokens && tokName(n.radiusTokens[i]) ? ' title="' + esc(n.radiusTokens[i].name) + '"' : ''; };
      $('pg-layout').innerHTML =
        '<div class="pg-bm">' +
          '<span class="pg-bm-label">Border</span>' +
          '<span class="pg-bm-v c tl"' + rT(0) + '>' + dash(r[0]) + '</span><span class="pg-bm-v t">' + dash(sw[0]) + '</span><span class="pg-bm-v c tr"' + rT(1) + '>' + dash(r[1]) + '</span>' +
          '<span class="pg-bm-v l">' + dash(sw[3]) + '</span>' +
          '<div class="pg-bm-pad">' +
            '<span class="pg-bm-label">Padding</span>' +
            '<span class="pg-bm-v t"' + pT(0) + '>' + dash(p[0]) + '</span>' +
            '<span class="pg-bm-v l"' + pT(3) + '>' + dash(p[3]) + '</span>' +
            '<div class="pg-bm-size">' + num(flat[state.sel].w) + ' × ' + num(flat[state.sel].h) + '</div>' +
            '<span class="pg-bm-v r"' + pT(1) + '>' + dash(p[1]) + '</span>' +
            '<span class="pg-bm-v b"' + pT(2) + '>' + dash(p[2]) + '</span>' +
          '</div>' +
          '<span class="pg-bm-v r">' + dash(sw[1]) + '</span>' +
          '<span class="pg-bm-v c bl"' + rT(3) + '>' + dash(r[3]) + '</span><span class="pg-bm-v b">' + dash(sw[2]) + '</span><span class="pg-bm-v c br"' + rT(2) + '>' + dash(r[2]) + '</span>' +
        '</div>';
      var rows = [];
      if (L) {
        rows.push(['Direction', L.mode === 'HORIZONTAL' ? 'Horizontal' : 'Vertical']);
        rows.push(['Gap', [[L.primary === 'SPACE_BETWEEN' ? 'Auto' : num(L.gap), L.primary === 'SPACE_BETWEEN' ? null : tokName(L.gapToken)]]]);
        rows.push(['Padding', sides(p, L.paddingTokens)]);
      }
      rows.push(['Radius', sides(r, n.radiusTokens)]);
      if (n.strokes) rows.push(['Border', sides(sw, sw.map(function () { return n.strokeWeightToken; }))]);
      var sz = [sizing(n.sizingH), sizing(n.sizingV)];
      if (sz[0] || sz[1]) rows.push(['Resizing', 'W ' + (sz[0] || 'Fixed') + ' · H ' + (sz[1] || 'Fixed')]);
      if (n.effectStyle) rows.push(['Shadow', n.effectStyle]);
      $('pg-layout-meta').innerHTML = meta(rows);
    }
    function uniq(a) { return a.filter(function (v, i) { return v && a.indexOf(v) === i; }); }
    // Variable badges — one colour per kind, all from the colour database:
    //   space  blue-50 on blue-95   · type  rose-30 on rose-95   · color  neutral/30 on neutral/95
    function badge(name, kind) { return '<span class="pg-badge pg-badge-' + kind + '">' + esc(name) + '</span>'; }
    // A row: [label, parts, kind]. Each part is [value, variable]: a bound part shows only its
    // variable, an unbound part shows its value. A plain string is a value with no variable.
    function meta(rows) {
      return rows.map(function (r) {
        var parts = typeof r[1] === 'string' || typeof r[1] === 'number' ? [[r[1], null]] : r[1];
        var html = parts.map(function (pt) { return pt[1] ? badge(pt[1], r[2] || 'space') : esc(pt[0]); }).join('<span class="pg-meta-sep">·</span>');
        return '<div class="pg-meta"><span>' + esc(r[0]) + '</span><span class="pg-meta-v">' + html + '</span></div>';
      }).join('');
    }
    /** Four sides or corners → one part when all match (value and variable), else one per side. */
    function sides(values, toks) {
      var parts = values.map(function (v, i) { return [num(v), toks ? tokName(toks[i]) : null]; });
      var same = parts.every(function (pt) { return pt[0] === parts[0][0] && pt[1] === parts[0][1]; });
      return same ? [parts[0]] : parts;
    }

    // ── Code — the selected layer and everything inside it, as nested code ──
    var SW_WEIGHT = { 100: '.thin', 200: '.ultraLight', 300: '.light', 400: '.regular', 500: '.medium', 600: '.semibold', 700: '.bold', 800: '.heavy', 900: '.black' };
    var KT_WEIGHT = { 100: 'Thin', 200: 'ExtraLight', 300: 'Light', 400: 'Normal', 500: 'Medium', 600: 'SemiBold', 700: 'Bold', 800: 'ExtraBold', 900: 'Black' };
    var cm = function () { return ''; };  // the Layout, Typography and Colors panels carry the variables
    var argb = function (p) { return '0x' + ('0' + Math.round(p.alpha * 255).toString(16)).slice(-2).toUpperCase() + p.hex.slice(1); };
    var ch = function (hex, k) { return num(parseInt(hex.slice(1 + k * 2, 3 + k * 2), 16) / 255); };
    // SwiftUI: a bound colour is its token as an asset name; an unbound one is its raw value.
    var swColor = function (p) {
      return tokName(p.token) ? 'Color("' + p.token.name + '")'
        : 'Color(red: ' + ch(p.hex, 0) + ', green: ' + ch(p.hex, 1) + ', blue: ' + ch(p.hex, 2) + (p.alpha < 1 ? ', opacity: ' + p.alpha : '') + ')';
    };
    var hexNote = function (p) { return p.hex + (p.alpha < 1 ? ' @' + Math.round(p.alpha * 100) + '%' : ''); };
    function kind(n) {
      if (n.text) return 'Text';
      if (n.graphic) return 'Image';
      if (n.layout) return n.layout.mode === 'HORIZONTAL' ? 'HStack' : 'VStack';
      return 'ZStack';
    }
    var gapNote = function (L, kids) {
      if (L.primary === 'SPACE_BETWEEN') return 'space between';
      if (kids.length < 2 && L.gap && !tokName(L.gapToken)) return 'one child: spacing has no effect';
      return tokName(L.gapToken);
    };
    var kidsOf = function (i) { return flat.map(function (f, j) { return j; }).filter(function (j) { return flat[j].parent === i && isShown(j); }); };
    var pad = function (k) { return new Array(k + 1).join(' '); };
    var quote = function (t) { t = lines(t); return '"' + t.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'; };

    function swiftNode(i, ind, extra) {
      var n = flat[i].n, P = pad(ind), M = pad(ind + 4), out = [];
      var mods = function (list, at) { list.concat(extra || []).forEach(function (m) { out.push((at != null ? at : M) + m); }); };
      if (n.text) {
        var t = n.text, f = n.fills && n.fills[0], m = [];
        out.push(P + 'Text(' + quote(t.chars) + ')' + cm(t.style));
        m.push('.font(.custom("' + t.family + '", size: ' + num(t.size) + '))' + cm(tokName(t.tokens.size)));
        m.push('.fontWeight(' + (SW_WEIGHT[t.weight] || '.regular') + ')');
        if (t.lineHeight !== t.size) m.push('.lineSpacing(' + num(t.lineHeight - t.size) + ')' + cm('line height ' + num(t.lineHeight)));
        if (t.letterSpacing) m.push('.tracking(' + num(t.letterSpacing) + ')' + cm(tokName(t.tokens.letterSpacing)));
        if (f) m.push('.foregroundStyle(' + swColor(f) + ')' + cm(hexNote(f)));
        mods(m);
        return out;
      }
      if (n.graphic) {
        out.push(P + 'Image("' + n.name + '")' + cm('vector, exported from Figma'));
        mods(['.frame(width: ' + num(n.w) + ', height: ' + num(n.h) + ')']);
        return out;
      }
      var L = n.layout, kids = kidsOf(i), m = [];
      if (L) {
        var h = L.mode === 'HORIZONTAL', between = L.primary === 'SPACE_BETWEEN';
        var al = h ? { MIN: '.top', CENTER: '.center', MAX: '.bottom', BASELINE: '.firstTextBaseline' }[L.counter] : { MIN: '.leading', CENTER: '.center', MAX: '.trailing' }[L.counter];
        out.push(P + (h ? 'HStack' : 'VStack') + '(alignment: ' + al + ', spacing: ' + (between ? 0 : num(L.gap)) + ') {' + cm(gapNote(L, kids)));
        kids.forEach(function (k, x) {
          if (between && x) out.push(M + 'Spacer()');
          out.push.apply(out, swiftNode(k, ind + 4));
        });
        out.push(P + '}');
        var p = L.padding, pt = L.paddingTokens;
        if (p.some(Boolean)) {
          if (p.every(function (v) { return v === p[0]; })) m.push('.padding(' + num(p[0]) + ')' + cm(tokName(pt[0])));
          else m.push('.padding(EdgeInsets(top: ' + num(p[0]) + ', leading: ' + num(p[3]) + ', bottom: ' + num(p[2]) + ', trailing: ' + num(p[1]) + '))' + cm(uniq(pt.map(tokName)).join(' · ')));
        }
      } else {
        out.push(P + 'ZStack(alignment: .topLeading) {');
        kids.forEach(function (k) { out.push.apply(out, swiftNode(k, ind + 4, ['.offset(x: ' + num(flat[k].n.x) + ', y: ' + num(flat[k].n.y) + ')'])); });
        out.push(P + '}');
      }
      var fw = n.sizingH === 'FILL' ? 'maxWidth: .infinity' : n.sizingH === 'HUG' ? null : 'width: ' + num(n.w);
      var fh = n.sizingV === 'FILL' ? 'maxHeight: .infinity' : n.sizingV === 'HUG' ? null : 'height: ' + num(n.h);
      if (fw || fh) m.push('.frame(' + [fw, fh].filter(Boolean).join(', ') + ')');
      var r = n.radius ? n.radius[0] : 0, rTok = n.radiusTokens && tokName(n.radiusTokens[0]);
      (n.fills || []).forEach(function (f) { m.push('.background(' + swColor(f) + ')' + cm(hexNote(f))); });
      if (r) m.push('.clipShape(RoundedRectangle(cornerRadius: ' + num(r) + '))' + cm(rTok));
      if (n.strokes) {
        var st = n.strokes[0];
        m.push('.overlay(RoundedRectangle(cornerRadius: ' + num(r) + ').strokeBorder(' + swColor(st) + ', lineWidth: ' + num(n.strokeWeights[0]) + '))' + cm(hexNote(st)));
      }
      (n.effects || []).forEach(function (e) {
        m.push('.shadow(color: ' + swColor({ hex: e.hex, alpha: e.alpha }) + ', radius: ' + num(e.blur / 2) + ', x: ' + e.x + ', y: ' + e.y + ')' + cm((n.effectStyle || 'shadow') + ' · spread ' + e.spread));
      });
      mods(m, P);
      return out;
    }

    // `…)  // note` + ',' must read `…),  // note`: the comma belongs to the code, not the comment.
    var comma = function (block) {
      var lines = block.split('\n'), last = lines.length - 1, k = lines[last].indexOf('  // ');
      lines[last] = k < 0 ? lines[last] + ',' : lines[last].slice(0, k) + ',' + lines[last].slice(k);
      return lines.join('\n');
    };
    function composeNode(i, ind, extra) {
      var n = flat[i].n, P = pad(ind), A = pad(ind + 4), out = [];
      var modBlock = function (list) {
        list = list.concat(extra || []);
        return 'Modifier' + list.map(function (m) { return '\n' + pad(ind + 8) + m; }).join('');
      };
      if (n.text) {
        var t = n.text, f = n.fills && n.fills[0];
        out.push(P + 'Text(' + cm(t.style));
        out.push(A + 'text = ' + quote(t.chars) + ',');
        if (f) out.push(A + 'color = Color(' + argb(f) + '),' + cm(tokName(f.token)));
        out.push(A + 'fontSize = ' + num(t.size) + '.sp,' + cm(tokName(t.tokens.size)));
        out.push(A + 'lineHeight = ' + num(t.lineHeight) + '.sp,' + cm(tokName(t.tokens.lineHeight)));
        if (t.letterSpacing) out.push(A + 'letterSpacing = ' + num(t.letterSpacing) + '.sp,' + cm(tokName(t.tokens.letterSpacing)));
        out.push(A + 'fontWeight = FontWeight.' + (KT_WEIGHT[t.weight] || 'Normal') + ',' + cm(t.family));
        if (extra && extra.length) out.push(A + comma('modifier = ' + modBlock([])));
        out.push(P + ')');
        return out;
      }
      if (n.graphic) {
        out.push(P + 'Image(' + cm('vector "' + n.name + '", exported from Figma'));
        out.push(A + 'painter = painterResource(R.drawable.' + n.name.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '),');
        out.push(A + 'contentDescription = null,');
        out.push(A + comma('modifier = ' + modBlock(['.size(' + num(n.w) + '.dp, ' + num(n.h) + '.dp)'])));
        out.push(P + ')');
        return out;
      }
      var mods = [];
      if (n.sizingH === 'FILL') mods.push('.fillMaxWidth()'); else if (n.sizingH !== 'HUG') mods.push('.width(' + num(n.w) + '.dp)');
      if (n.sizingV === 'FILL') mods.push('.fillMaxHeight()'); else if (n.sizingV !== 'HUG') mods.push('.height(' + num(n.h) + '.dp)');
      var r = n.radius ? n.radius[0] : 0, rTok = n.radiusTokens && tokName(n.radiusTokens[0]);
      var shape = r ? 'RoundedCornerShape(' + num(r) + '.dp)' : null;
      (n.effects || []).forEach(function (e) { mods.push('.shadow(' + num(e.blur / 2) + '.dp' + (shape ? ', ' + shape : '') + ')' + cm(n.effectStyle || 'shadow')); });
      (n.fills || []).forEach(function (f) { mods.push('.background(Color(' + argb(f) + ')' + (shape ? ', ' + shape : '') + ')' + cm([tokName(f.token), rTok].filter(Boolean).join(' · '))); });
      if (n.strokes) { var st = n.strokes[0]; mods.push('.border(' + num(n.strokeWeights[0]) + '.dp, Color(' + argb(st) + ')' + (shape ? ', ' + shape : '') + ')' + cm(tokName(st.token))); }
      var L = n.layout, kids = kidsOf(i);
      if (L) {
        var p = L.padding, pt = L.paddingTokens;
        if (p.some(Boolean)) {
          if (p.every(function (v) { return v === p[0]; })) mods.push('.padding(' + num(p[0]) + '.dp)' + cm(tokName(pt[0])));
          else mods.push('.padding(start = ' + num(p[3]) + '.dp, top = ' + num(p[0]) + '.dp, end = ' + num(p[1]) + '.dp, bottom = ' + num(p[2]) + '.dp)' + cm(uniq(pt.map(tokName)).join(' · ')));
        }
        var h = L.mode === 'HORIZONTAL';
        var arr = L.primary === 'SPACE_BETWEEN' ? 'Arrangement.SpaceBetween' : 'Arrangement.spacedBy(' + num(L.gap) + '.dp)';
        var al = h ? { MIN: 'Alignment.Top', CENTER: 'Alignment.CenterVertically', MAX: 'Alignment.Bottom', BASELINE: 'Alignment.Top' }[L.counter]
                   : { MIN: 'Alignment.Start', CENTER: 'Alignment.CenterHorizontally', MAX: 'Alignment.End' }[L.counter];
        out.push(P + (h ? 'Row' : 'Column') + '(');
        out.push(A + comma('modifier = ' + modBlock(mods)));
        out.push(A + (h ? 'horizontalArrangement' : 'verticalArrangement') + ' = ' + arr + ',' + cm(L.primary === 'SPACE_BETWEEN' ? null : gapNote(L, kids)));
        out.push(A + (h ? 'verticalAlignment' : 'horizontalAlignment') + ' = ' + al + ',');
        out.push(P + ') {');
        kids.forEach(function (k) { out.push.apply(out, composeNode(k, ind + 4)); });
      } else {
        out.push(P + 'Box(');
        out.push(A + comma('modifier = ' + modBlock(mods)));
        out.push(P + ') {');
        kids.forEach(function (k) { out.push.apply(out, composeNode(k, ind + 4, ['.offset(x = ' + num(flat[k].n.x) + '.dp, y = ' + num(flat[k].n.y) + '.dp)'])); });
      }
      out.push(P + '}');
      return out;
    }

    // Syntax colours — the site's syn-* classes, by the rules in workflows/README.md.
    var SYN = /(\/\/.*$)|("(?:\\.|[^"\\])*")|(\.[A-Za-z_]\w*)(?=\()|(\.[A-Za-z_]\w*)|\b(true|false|nil|null)\b|\b(0x[0-9A-Fa-f]+|\d+(?:\.\d+)?)\b|\b([A-Z]\w*)\b|\b([a-z_]\w*)(?=\s*(?::(?!:)|=(?!=)))|\b([a-z_]\w*)(?=\()|([{}()[\]])/gm;
    function highlight(code) {
      var html = '', last = 0, m;
      SYN.lastIndex = 0;
      while ((m = SYN.exec(code))) {
        html += esc(code.slice(last, m.index));
        var cls = m[1] ? 'cmt' : m[2] ? 'str' : m[3] ? 'fn' : m[4] ? 'dot' : m[5] || m[6] ? 'val' : m[7] ? 'type' : m[8] ? 'param' : m[9] ? 'fn' : 'punc';
        html += '<span class="syn-' + cls + '">' + esc(m[0]) + '</span>';
        last = SYN.lastIndex;
      }
      return html + esc(code.slice(last));
    }
    var codeText = '';
    function renderCode() {
      var i = state.sel;
      $('pg-code-title').textContent = state.lang === 'swift' ? kind(flat[i].n) : 'Modifier';
      codeText = (state.lang === 'swift' ? swiftNode(i, 0) : composeNode(i, 0)).join('\n');
      $('pg-code').innerHTML = highlight(codeText);
    }
    $('pg-lang').addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang]'); if (!b || b.dataset.lang === state.lang) return;
      state.lang = b.dataset.lang;
      [].forEach.call($('pg-lang').querySelectorAll('[data-lang]'), function (o) {
        var on = o.dataset.lang === state.lang;
        o.classList.toggle('is-on', on); o.setAttribute('aria-checked', on);
      });
      renderCode();
    });
    var copyReset;
    $('pg-copy').addEventListener('click', function () {
      var btn = $('pg-copy');
      var done = function () {
        btn.classList.add('is-copied'); btn.dataset.tip = 'Copied'; btn.setAttribute('aria-label', 'Code copied');
        clearTimeout(copyReset);
        copyReset = setTimeout(function () { btn.classList.remove('is-copied'); btn.dataset.tip = 'Copy'; btn.setAttribute('aria-label', 'Copy code'); }, 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(codeText).then(done, done); else done();
    });

    // ── Highlight matching for Typography and Colors rows ──
    function paintsOf(n) {
      if (n.graphic) return n.paints || [];
      var out = (n.fills || []).concat(n.strokes || []);
      if (n.text && n.text.segments) n.text.segments.forEach(function (sg) { if (sg.fills) out = out.concat(sg.fills); });
      return out;
    }
    var colorKey = function (p) { return (tokName(p.token) || 'raw') + '|' + p.hex + '|' + p.alpha; };
    var styleKey = function (n) { return n.text.style || '(no text style)'; };
    function usesHighlight(n, hl) {
      if (hl.type === 'style') return !!n.text && styleKey(n) === hl.key;
      return paintsOf(n).some(function (p) { return colorKey(p) === hl.key; });
    }
    function peek(next) {
      var same = (state.peek && next && state.peek.type === next.type && state.peek.key === next.key) || (!state.peek && !next);
      if (!same) { state.peek = next; drawOverlay(); }
    }

    // ── Typography — the design's rows: "Text Style" · style name ──
    function renderType() {
      var seen = {}, list = [];
      subtree(state.sel).forEach(function (j) {
        var n = flat[j].n; if (!n.text) return;
        var k = styleKey(n);
        if (!seen[k]) { seen[k] = { key: k, first: j, count: 0 }; list.push(seen[k]); }
        seen[k].count++;
      });
      $('pg-type').innerHTML = list.length ? list.map(function (t) {
        return '<button type="button" class="pg-row pg-trow" data-style="' + esc(t.key) + '" data-first="' + t.first + '" title="' + t.count + ' text layer' + (t.count > 1 ? 's' : '') + ' · click to select">' +
          '<span class="pg-row-k">Text Style</span><span class="pg-row-v">' + badge(t.key, 'type') + '</span></button>';
      }).join('') : '<div class="pg-empty">No text in this selection.</div>';
    }
    $('pg-type').addEventListener('mouseover', function (e) {
      var r = e.target.closest('[data-style]');
      peek(r ? { type: 'style', key: r.dataset.style } : null);
    });
    $('pg-type').addEventListener('mouseleave', function () { peek(null); });
    $('pg-type').addEventListener('click', function (e) {
      var r = e.target.closest('[data-style]'); if (!r) return;
      state.peek = null;
      var first = +r.dataset.first;
      if (!(state.picked && state.sel === first)) select(first);
    });

    // ── Colors — swatch + variable · usage · hex ──
    function renderColors() {
      var seen = {}, list = [];
      subtree(state.sel).forEach(function (j) {
        var used = {};
        paintsOf(flat[j].n).forEach(function (p) {
          var k = colorKey(p);
          if (!seen[k]) { seen[k] = { p: p, key: k, count: 0 }; list.push(seen[k]); }
          if (!used[k]) { used[k] = 1; seen[k].count++; }
        });
      });
      $('pg-colors').innerHTML = list.length ? list.map(function (c) {
        var p = c.p, bound = !!tokName(p.token), name = bound ? p.token.name : 'not bound';
        return '<button type="button" class="pg-row pg-color' + (state.highlight === c.key ? ' is-on' : '') + '" data-color="' + esc(c.key) + '" data-token="' + esc(bound ? name : p.hex) + '" title="Hover to see where it is used · click to copy">' +
          '<span class="pg-color-name"><span class="pg-sw"><i style="background:' + rgba(p) + '"></i></span>' +
            '<span class="pg-hex">' + p.hex + (p.alpha < 1 ? ' · ' + Math.round(p.alpha * 100) + '%' : '') + '</span>' +
            '<span class="pg-count">' + c.count + ' layer' + (c.count > 1 ? 's' : '') + '</span></span>' +
          (bound ? badge(name, 'color') : '<span class="pg-unbound">not bound</span>') + '</button>';
      }).join('') : '<div class="pg-empty">No colours in this selection.</div>';
    }
    $('pg-colors').addEventListener('mouseover', function (e) {
      var b = e.target.closest('[data-color]');
      peek(b ? { type: 'color', key: b.dataset.color } : null);
    });
    $('pg-colors').addEventListener('mouseleave', function () { peek(null); });
    $('pg-colors').addEventListener('click', function (e) {
      var b = e.target.closest('[data-color]'); if (!b) return;
      state.highlight = state.highlight === b.dataset.color ? null : b.dataset.color;
      copy(b.dataset.token, 'Copied ' + b.dataset.token);
      drawOverlay(); renderColors();
    });

    // ── DES / DEV ──
    function setMode(m) {
      state.mode = m;
      $('pg-des').classList.toggle('is-on', m === 'des'); $('pg-des').setAttribute('aria-pressed', m === 'des');
      $('pg-dev').classList.toggle('is-on', m === 'dev'); $('pg-dev').setAttribute('aria-pressed', m === 'dev');
      $('pg-code-sec').hidden = m !== 'dev';
    }
    $('pg-des').addEventListener('click', function () { setMode('des'); });
    $('pg-dev').addEventListener('click', function () { setMode('dev'); });

    var toastT;
    function copy(text, msg) {
      var done = function () { var t = $('pg-toast'); t.textContent = msg; t.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('is-on'); }, 1400); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done); else done();
    }

    // Deep link: #v=<variant id> opens that exact variant — on load and whenever the link changes.
    function fromHash() {
      var hv = (location.hash.match(/v=([^&]+)/) || [])[1];
      var linked = hv && D.variants.find(function (v) { return v.id === decodeURIComponent(hv); });
      if (linked) variantProps.forEach(function (p) { state.values[p.key] = linked.props[p.name]; });
      return !!linked;
    }
    if (window.__pgHash) window.removeEventListener('hashchange', window.__pgHash);
    window.__pgHash = function () { if (fromHash()) { update(false); renderControls(); } };
    window.addEventListener('hashchange', window.__pgHash);
    fromHash();
    update(false);
    renderControls();
    // Test hook (sandbox): the laid-out layers, for the reflow check.
    window.__pg = {
      layers: function () {
        readLayout();
        return flat.map(function (f, i) {
          return { i: i, parent: f.parent, name: f.n.name, shown: isShown(i), x: f.ax, y: f.ay, w: f.w, h: f.h,
            layout: f.n.layout || null, absolute: f.n.positioning === 'ABSOLUTE', sizingH: f.n.sizingH || null, sizingV: f.n.sizingV || null,
            strokesInLayout: !!f.n.strokesInLayout, strokeWeights: f.n.strokeWeights || null, limits: f.n.limits || null, text: !!f.n.text, graphic: !!f.n.graphic };
        });
      },
      booleans: function () { return D.properties.filter(function (p) { return p.kind === 'boolean'; }).map(function (p) { return p.key; }); },
      // The layer data is fetched now, so it is no longer readable from #pg-data:
      // the harnesses take the variant list from here instead.
      variants: function () { return D.variants.map(function (v) { return { id: v.id, name: v.name }; }); },
      set: function (key, value) { state.values[key] = value; update(true); renderControls(); }
    };
    }
    // astro:page-load also fires on the FIRST load, so the direct call and the listener would
    // both boot the same document: two sets of canvas listeners, the older closure holding a
    // `flat` whose elements have been replaced ("cannot read properties of undefined"). Mark
    // the data element instead — each swap brings a new one, so this is once per document.
    // The layer data is fetched, not inlined, so boot is async. Two things follow:
    // the element is marked BEFORE the request so a second astro:page-load cannot
    // start a parallel fetch, and the response is dropped if the reader navigated
    // away while it was in flight (the element in the document is no longer ours).
    var pgReady = function () {
      var el = document.getElementById('pg-data');
      if (!el || el.pgBooted) return;
      el.pgBooted = true;
      var src = el.getAttribute('data-src');
      fetch(src)
        .then(function (r) {
          if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
          return r.json();
        })
        .then(function (data) {
          if (document.getElementById('pg-data') !== el) return;
          pgBoot(data);
        })
        .catch(function (err) {
          if (document.getElementById('pg-data') !== el) return;
          var stage = document.getElementById('pg-stage');
          if (stage) stage.innerHTML = '<p class="pg-loaderr">Could not load the layer data for this component.<br><code>' + src + '</code> — ' + String(err.message || err) + '</p>';
          console.error('playground: failed to load ' + src, err);
        });
    };
    pgReady();
    if (!window.__pgWired) { window.__pgWired = true; document.addEventListener('astro:page-load', pgReady); }
  })();
