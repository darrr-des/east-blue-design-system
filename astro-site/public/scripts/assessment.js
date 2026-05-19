/*
 * Shared client-side behavior for component assessment pages.
 * One module, zero per-component duplication.
 *
 * Selectors are convention-based:
 *   - DES view:  [data-view="{cardKey}-des"]
 *   - DEV view:  [data-view="{cardKey}-dev"]
 *   - Code block: data-lang="swift"|"compose" inside .spec-card-code
 */

(function () {
  'use strict';

  // ── Sidebar user info + logout (driven by AuthGate's eb:auth-ready) ──
  function _initialsFor(nameOrEmail) {
    var s = String(nameOrEmail || '').trim();
    if (!s) return '?';
    if (s.indexOf('@') > -1) s = s.split('@')[0].replace(/[._-]+/g, ' ');
    var parts = s.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  function _initialsAvatar(nameOrEmail) {
    var initials = _initialsFor(nameOrEmail);
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#005CE5"/><stop offset="100%" stop-color="#2340A9"/>' +
        '</linearGradient></defs>' +
        '<circle cx="20" cy="20" r="20" fill="url(#g)"/>' +
        '<text x="20" y="26" font-family="-apple-system,system-ui,sans-serif" font-size="15" font-weight="600" fill="white" text-anchor="middle">' + initials + '</text>' +
      '</svg>'
    );
  }
  function paintSidebarUser(user) {
    if (!user) return;
    var box = document.getElementById('sidebar-user');
    var nameEl = document.getElementById('sidebar-user-name');
    var emailEl = document.getElementById('sidebar-user-email');
    var avatarEl = document.getElementById('sidebar-user-avatar');
    if (!box || !nameEl || !emailEl || !avatarEl) return;
    nameEl.textContent = user.name || user.email || 'Signed in';
    emailEl.textContent = user.email || '';
    var fallback = _initialsAvatar(user.name || user.email);
    avatarEl.onerror = function () {
      avatarEl.onerror = null;
      avatarEl.src = fallback;
    };
    avatarEl.src = user.picture || fallback;
    avatarEl.style.display = 'block';
    box.style.display = 'flex';
  }
  /* Fake user fallback — populates the sidebar profile pill while the
     auth backend is incomplete. Real /auth/me data from AuthGate
     overrides this whenever the backend ships and returns a session. */
  if (!window.__ebUser) {
    var fakeAvatar = 'data:image/svg+xml;utf8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#005CE5"/><stop offset="100%" stop-color="#2340A9"/>' +
        '</linearGradient></defs>' +
        '<circle cx="20" cy="20" r="20" fill="url(#g)"/>' +
        '<text x="20" y="26" font-family="-apple-system,system-ui,sans-serif" font-size="15" font-weight="600" fill="white" text-anchor="middle">FD</text>' +
      '</svg>'
    );
    window.__ebUser = {
      name: 'Frost Designers',
      email: 'designers@frostdesigngroup.com',
      picture: fakeAvatar,
    };
  }

  // Paint immediately if AuthGate already cached it on window.__ebUser
  if (window.__ebUser) paintSidebarUser(window.__ebUser);
  // Paint when AuthGate finishes its check
  document.addEventListener('eb:auth-ready', function (e) { paintSidebarUser(e.detail); });
  // Re-paint after Astro view transitions (sidebar is persisted, but DOM survives)
  document.addEventListener('astro:page-load', function () {
    if (window.__ebUser) paintSidebarUser(window.__ebUser);
  });

  // Sign-out — call backend, drop local token, send to /login
  window.__ebSignOut = async function () {
    var backend = (window.__EB_AUTH_BACKEND_URL) || 'http://localhost:3001';
    try {
      await fetch(backend + '/auth/logout', { method: 'POST', credentials: 'include' });
    } catch (e) { /* network errors don't matter on logout */ }
    try { localStorage.removeItem('eb_auth_token'); } catch (e) {}
    window.location.href = '/login';
  };

  /* Family open/close state — persist to localStorage so user-opened
     sections survive navigation (the server-render only opens the family
     containing the active item, so without persistence any other open
     family gets closed on every navigation). */
  var SIDEBAR_OPEN_KEY = 'eb-sidebar-open-sections';
  function loadOpenFamilies() {
    try { return JSON.parse(localStorage.getItem(SIDEBAR_OPEN_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function saveOpenFamilies(map) {
    try { localStorage.setItem(SIDEBAR_OPEN_KEY, JSON.stringify(map)); } catch (e) {}
  }
  function familyKey(btn) {
    return (btn && btn.textContent || '').trim();
  }

  /* Drift fix — preserve sidebar scrollTop across view-transition swaps
     and stop the browser's focus auto-scroll. The browser input chain is
     pointerdown → focus → click; capturing on pointerdown grabs the true
     pre-click scrollTop, focusin re-pins it before the auto-scroll lands,
     after-swap restores it before paint on the new page. */
  var SIDEBAR_SCROLL_KEY = 'eb-sidebar-scroll';
  function snapshotNav(e) {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    var link = e.target && e.target.closest && e.target.closest('.sidebar-nav a, .sidebar-nav button');
    if (!link) return;
    nav.classList.add('nav-no-anim');
    try { sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(nav.scrollTop)); } catch (e2) {}
  }
  document.addEventListener('pointerdown', snapshotNav, true);
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    snapshotNav(e);
  }, true);
  /* Cancel the focus auto-scroll: re-pin scrollTop the moment a sidebar
     link receives focus. */
  document.addEventListener('focusin', function (e) {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    if (!e.target.closest || !e.target.closest('.sidebar-nav a, .sidebar-nav button')) return;
    try {
      var stored = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
      if (stored !== null) nav.scrollTop = parseInt(stored, 10) || 0;
    } catch (e2) {}
  }, true);
  /* Restore scroll the moment the new DOM is in place — before paint —
     so the user never sees the nav at scrollTop=0. */
  document.addEventListener('astro:after-swap', function () {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    nav.classList.add('nav-no-anim');
    try {
      var stored = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
      if (stored !== null) nav.scrollTop = parseInt(stored, 10) || 0;
    } catch (e) {}
  });

  // ── Sidebar nav section toggle ───────────────────────────────────────
  window.toggleNavSection = function (btn) {
    var list = btn.nextElementSibling;
    if (!list) return;
    var open = list.classList.toggle('open');
    btn.classList.toggle('open', open);
    /* Remember the user's choice. */
    var map = loadOpenFamilies();
    var key = familyKey(btn);
    if (key) {
      if (open) map[key] = true;
      else delete map[key];
      saveOpenFamilies(map);
    }
  };

  // ── Components top-level expand/collapse ────────────────────────────
  // Three behaviors:
  //   1. Chevron click (preventNav=true)     → toggle only, never navigate.
  //   2. Label click on the destination page → toggle only (suppress the
  //      no-op self-navigation that would re-render the persisted sidebar
  //      and snap .open back to its server-rendered value).
  //   3. Label click elsewhere               → don't toggle, let the link
  //      navigate normally; the new page's server render places .open
  //      based on the new pathname.
  window.toggleComponentsSection = function (event, preventNav) {
    var target = event.currentTarget;
    var isLink = target.tagName === 'A';
    var sameDest = isLink &&
      target.pathname.replace(/\/$/, '') === window.location.pathname.replace(/\/$/, '');

    if (!preventNav && !sameDest) return; // case 3 — let the link navigate

    event.preventDefault();
    event.stopPropagation();

    var row = target.closest('.nav-item-row');
    if (!row) return;
    var list = row.nextElementSibling;
    if (!list || !list.classList.contains('nav-components-list')) return;
    var open = list.classList.toggle('open');
    row.classList.toggle('open', open);
  };

  // ── Sidebar active-state sync (works with Astro view transitions) ───
  // The Sidebar is `transition:persist`, so the DOM survives navigations
  // — but its .active highlight must follow the current URL. After every
  // route swap, recompute which .nav-comp matches and toggle classes.
  function syncSidebarActive() {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    /* Suppress all sidebar transitions while we sync state. Without this,
       any .open class change replays the section-list grid expand on
       every navigation. Two RAFs lets the class settle, then we re-enable
       transitions for user-initiated toggles. */
    nav.classList.add('nav-no-anim');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { nav.classList.remove('nav-no-anim'); });
    });
    var path = window.location.pathname.replace(/\/$/, '');
    nav.querySelectorAll('.nav-comp').forEach(function (a) {
      var href = (a.getAttribute('href') || '').replace(/\/$/, '');
      a.classList.toggle('active', href === path);
    });
    /* Restore each family's open state from two sources:
         1. Section contains the active item → open AND remember.
         2. User previously toggled it open (localStorage) → open.
       Without (2), navigating to a different family would silently
       close any user-expanded sections — the bug we just hit. */
    var openMap = loadOpenFamilies();
    var dirty = false;
    nav.querySelectorAll('.nav-family-toggle + .nav-section-list').forEach(function (list) {
      var btn = list.previousElementSibling;
      var key = familyKey(btn);
      var hasActive = !!list.querySelector('.nav-comp.active');
      var userOpened = key && openMap[key];
      if (hasActive || userOpened) {
        list.classList.add('open');
        if (btn) btn.classList.add('open');
        if (hasActive && key && !openMap[key]) {
          openMap[key] = true;
          dirty = true;
        }
      }
    });
    if (dirty) saveOpenFamilies(openMap);
    /* If a click captured a scroll position, restore it (consumes the
       sessionStorage key). Otherwise — direct URL load — bring the
       active item into view minimally. */
    var restored = false;
    try {
      var stored = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
      if (stored !== null) {
        nav.scrollTop = parseInt(stored, 10) || 0;
        sessionStorage.removeItem(SIDEBAR_SCROLL_KEY);
        restored = true;
      }
    } catch (e) {}
    if (restored) return;
    var active = nav.querySelector('.nav-comp.active');
    if (active) {
      var navRect = nav.getBoundingClientRect();
      var activeRect = active.getBoundingClientRect();
      var fullyVisible = activeRect.top >= navRect.top && activeRect.bottom <= navRect.bottom;
      if (!fullyVisible) {
        active.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
  }

  /* ── Plan A: dynamic spec-detail rows ────────────────────────────────
     Each `[data-row-variants]` element is an in-card spec row that can
     re-render when the user changes a demo control. The data attribute
     holds a JSON map of `prop:value` keys to row overrides:
       { "cta:1": { value: "212px" }, "cta:2-vertical": { value: "270px" } }
     We track per-card state in window._specCards (already maintained
     by every component's demo script) and patch all rows that match.

     Compound keys (e.g. `type:default|cta:1`) are supported — we try
     multi-prop matches first, then single-prop fallback. */
  function _patchSpecCardRows(cardKey) {
    var card = window._specCards && window._specCards[cardKey];
    if (!card) return;
    var rows = document.querySelectorAll(
      '[data-row-card="' + cardKey + '"][data-row-variants]'
    );
    rows.forEach(function (cell) {
      var json = cell.getAttribute('data-row-variants');
      var variants;
      try { variants = JSON.parse(json); } catch (e) { return; }
      if (!variants) return;
      /* Try compound match (all props joined) first, then each single
         prop:value, then fall through to defaults. */
      /* Match strategy: a variant key like "state:Primary|level:Heavy"
         applies whenever EVERY pair in the key matches the card's
         current state. The card may have additional props (e.g. `type`)
         that don't appear in the key — those are ignored. The most
         specific match (most pairs) wins, so partial keys can coexist
         with full ones in the same variants map. */
      var matched = null;
      var matchedSpecificity = -1;
      Object.keys(variants).forEach(function (variantKey) {
        var pairs = variantKey.split('|');
        for (var i = 0; i < pairs.length; i++) {
          var idx = pairs[i].indexOf(':');
          if (idx < 0) return;
          var prop = pairs[i].slice(0, idx);
          var val = pairs[i].slice(idx + 1);
          if (card[prop] !== val) return;
        }
        if (pairs.length > matchedSpecificity) {
          matched = variants[variantKey];
          matchedSpecificity = pairs.length;
        }
      });
      /* The cell with `data-row-card` is the `.spec-prop-val` span; the
         parent `.spec-prop` element wraps both the key label and value.
         Hiding the row requires hiding the parent. */
      var rowEl = cell.closest('.spec-prop') || cell;
      if (!matched) {
        /* Ensure row is visible (in case a previous flip hid it). */
        rowEl.style.display = '';
        /* Restore defaults from data-row-default-* attributes. */
        var def = cell.getAttribute('data-row-default');
        if (def !== null) {
          var hex = cell.querySelector('.spec-prop-hex');
          if (hex) hex.textContent = def;
          var swatch = cell.querySelector('.spec-swatch');
          if (swatch) swatch.style.background = def;
        }
        return;
      }
      /* Hide row when variant says so — used for specs that don't apply
         to the current demo state (e.g. counter pill on a loading row). */
      if (matched.hide) {
        rowEl.style.display = 'none';
        return;
      }
      rowEl.style.display = '';
      /* Cache the default once so we can revert later. */
      if (!cell.hasAttribute('data-row-default')) {
        var hexEl = cell.querySelector('.spec-prop-hex');
        if (hexEl) cell.setAttribute('data-row-default', hexEl.textContent || '');
      }
      var hex2 = cell.querySelector('.spec-prop-hex');
      if (hex2 && typeof matched.value !== 'undefined') {
        hex2.textContent = matched.value;
      }
      var swatch2 = cell.querySelector('.spec-swatch');
      if (swatch2 && typeof matched.value === 'string' && matched.value.trim().charAt(0) === '#') {
        swatch2.style.background = matched.value;
      }
    });
  }
  window._patchSpecCardRows = _patchSpecCardRows;

  /* Wrap window.updateSpecCard so every component's demo script
     automatically triggers our row patcher in addition to its own
     re-render logic. */
  function _wrapUpdateSpecCard() {
    var existing = window.updateSpecCard;
    if (!existing || existing.__ebPatched) return;
    var wrapper = function (cardKey, prop, value) {
      var result = existing.call(this, cardKey, prop, value);
      try { _patchSpecCardRows(cardKey); } catch (e) {}
      return result;
    };
    wrapper.__ebPatched = true;
    window.updateSpecCard = wrapper;
  }
  /* The per-component demo script defines window.updateSpecCard AFTER
     this script loads. Wrap on each Astro page-load to catch it. */
  document.addEventListener('astro:page-load', function () {
    /* Defer one frame so the per-component script has executed. */
    requestAnimationFrame(function () {
      _wrapUpdateSpecCard();
      /* Initial patch — apply variants based on default state. */
      if (window._specCards) {
        Object.keys(window._specCards).forEach(_patchSpecCardRows);
      }
    });
  });

  // ── DES / DEV toggle ─────────────────────────────────────────────────
  window.toggleSpecMode = function (cardKey, toggleEl) {
    var labels = toggleEl.querySelectorAll('.spec-mode-label');
    var isDes = labels[0].classList.contains('active');
    labels[0].classList.toggle('active', !isDes);
    labels[1].classList.toggle('active', isDes);
    var des = document.querySelector('[data-view="' + cardKey + '-des"]');
    var dev = document.querySelector('[data-view="' + cardKey + '-dev"]');
    if (des) des.style.display = isDes ? 'none' : '';
    if (dev) dev.style.display = isDes ? '' : 'none';
  };

  // ── SwiftUI / Compose code tab switch ────────────────────────────────
  // Two call signatures:
  //   switchCodeTab(btn, 'swift')              — legacy two-pre layout
  //   switchCodeTab(btn, 'swift', 'filled')    — single-code block;
  //     re-runs `getSnippet(cardStyle, lang, _specCards[cardStyle])`
  //     and `highlightSyntax()` so the visible language updates live.
  window.switchCodeTab = function (tabBtn, lang, cardStyle) {
    var block = tabBtn.closest('.spec-card-code');
    if (!block) return;
    block.querySelectorAll('.spec-code-tab').forEach(function (t) { t.classList.remove('active'); });
    tabBtn.classList.add('active');

    if (cardStyle && typeof window.getSnippet === 'function') {
      var codeEl = block.querySelector('[data-code-content="' + cardStyle + '"]');
      var card = window._specCards && window._specCards[cardStyle];
      if (codeEl && card) {
        var code = window.getSnippet(cardStyle, lang, card);
        codeEl.setAttribute('data-final', code);
        codeEl.setAttribute('data-lang', lang);
        codeEl.textContent = code;
        if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
      }
      return;
    }

    // Legacy two-pre fallback
    block.querySelectorAll('.spec-code-block').forEach(function (pre) {
      pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
    });
  };

  // ── Lightweight syntax highlighter for spec-card code blocks ────────
  // Reads `data-final` (plaintext code) or `textContent`, applies
  // span wrappers via regex, and writes innerHTML. Same set of token
  // classes (.syn-cmt, .syn-str, .syn-kw, .syn-val, .syn-type,
  // .syn-param, .syn-dot, .syn-punc) that already exist in global.css.
  window.highlightSyntax = function (el) {
    if (!el) return;
    var code = el.getAttribute('data-final') || el.textContent || '';
    var html = code
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/(\/\/[^\n]*)/g, '\x00CMT_S$1\x00CMT_E')
      .replace(/("(?:[^"\\]|\\.)*")/g, '\x00STR_S$1\x00STR_E');
    html = html
      .replace(/\x00CMT_S([\s\S]*?)\x00CMT_E/g, '<span class="syn-cmt">$1</span>')
      .replace(/\x00STR_S([\s\S]*?)\x00STR_E/g, '<span class="syn-str">$1</span>')
      .replace(/\b(fun|val|var|let|struct|static|object|import|return|if|else)\b/g, '<span class="syn-kw">$1</span>')
      .replace(/\b(true|false|null|nil)\b/g, '<span class="syn-val">$1</span>')
      .replace(/\b(\d+(?:\.\w+)?)\b/g, '<span class="syn-val">$1</span>')
      .replace(/\b(EBButton|EBOutlinedButton|EBTextButton|EBButtonSize|EBButtonDefaults|EBAppearance|Image|Icon|Icons|Text|Row|HStack|VStack|Modifier|RoundedRectangle|RoundedCornerShape|Color|Arrangement|Alignment|Dp|CGFloat)\b/g, '<span class="syn-type">$1</span>')
      .replace(/\b(Constants|Variables)\b/g, '<span class="syn-type">$1</span>')
      .replace(/\b(alignment|spacing|horizontalArrangement|verticalAlignment|modifier|color|shape|width|start|top|maxWidth|onClick|leadingIcon|trailingIcon|colors|enabled|size|appearance|contentDescription)\b(?=\s*[=:])/g, '<span class="syn-param">$1</span>')
      .replace(/(\.\w+)/g, '<span class="syn-dot">$1</span>')
      .replace(/([{}()\[\]])/g, '<span class="syn-punc">$1</span>');
    el.innerHTML = html;
  };

  // ── Copy snippet / node id ───────────────────────────────────────────
  window.copySnippet = function (btn) {
    var pre = btn.parentElement.querySelector('pre');
    if (!pre) return;
    navigator.clipboard.writeText(pre.textContent).then(function () {
      var orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = orig; }, 1500);
    });
  };

  // ── Platform tab switch (SwiftUI / Compose inside code-card-body) ────
  window.switchPlatform = function (btn) {
    var body = btn.closest('.code-card-body');
    if (!body) return;
    var target = btn.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    body.querySelectorAll('.platform-tab').forEach(function (t) { t.classList.remove('active'); });
    btn.classList.add('active');
    body.querySelectorAll('.platform-panel').forEach(function (p) {
      p.classList.toggle('active', p.dataset.tab === target);
    });
  };

  window.copyNode = function (btn) {
    var node = btn.getAttribute('data-node');
    if (!node) return;
    navigator.clipboard.writeText(node).then(function () {
      var span = btn.querySelector('span');
      if (!span) return;
      var orig = span.textContent;
      span.textContent = 'Copied!';
      setTimeout(function () { span.textContent = orig; }, 1200);
    });
  };

  // ── Tab pill positioning ─────────────────────────────────────────────
  function positionPill(tabBar, activeTab) {
    if (!tabBar || !activeTab) return;
    var barRect = tabBar.getBoundingClientRect();
    var tabRect = activeTab.getBoundingClientRect();
    tabBar.style.setProperty('--pill-left', (tabRect.left - barRect.left) + 'px');
    tabBar.style.setProperty('--pill-width', tabRect.width + 'px');
  }

  // Initial pill placement — runs before paint via :not([data-pill-ready])
  // class so the pill appears in-position with no transition. After first
  // placement we mark the bar ready so user clicks animate normally.
  function initPills() {
    document.querySelectorAll('.comp-tabs').forEach(function (bar) {
      var active = bar.querySelector('.comp-tab.active');
      if (!active) return;
      // Suppress transition on initial mount
      bar.classList.add('no-pill-transition');
      positionPill(bar, active);
      // Re-enable transition after the browser has committed the layout
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          bar.classList.remove('no-pill-transition');
        });
      });
    });
  }

  // ── Tab bar (Overview / Style / Code / Changelog) ────────────────────
  window.switchTab = function (tabBtn, tabId, groupId) {
    var root = groupId
      ? document.querySelector('[data-tab-group="' + groupId + '"]')
      : tabBtn.closest('[data-tab-group]');
    if (!root) return;
    var tabBar = root.querySelector('.comp-tabs');
    root.querySelectorAll('.comp-tab').forEach(function (t) { t.classList.remove('active'); });
    tabBtn.classList.add('active');
    positionPill(tabBar, tabBtn);
    root.querySelectorAll('.comp-tab-content').forEach(function (c) {
      c.classList.toggle('active', c.dataset.tab === tabId);
    });
    if (groupId) {
      try { history.replaceState(null, '', '#' + groupId + '=' + tabId); } catch (e) {}
    }
    buildToc();
  };

  // ── Page TOC + scroll spy ────────────────────────────────────────────
  function slugify(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function buildToc() {
    var nav = document.querySelector('.page-toc-nav');
    if (!nav) return;
    // Static TOCs (e.g. /eb-ds-assessment-guide) populate .page-toc-nav at
    // build time and don't have tabbed content. If the page has no
    // .comp-tab-content elements at all, leave the static markup alone.
    if (!document.querySelector('.comp-tab-content')) return;
    var activeTab = document.querySelector('.comp-tab-content.active');
    if (!activeTab) {
      nav.innerHTML = '';
      return;
    }
    var headings = activeTab.querySelectorAll('.sub-heading');
    var html = '';
    var seen = {};
    headings.forEach(function (h) {
      // skip empty headings
      var label = (h.firstChild && h.firstChild.nodeType === 3 ? h.firstChild.nodeValue : h.textContent).trim();
      if (!label) return;
      var id = h.id;
      if (!id) {
        id = slugify(label);
        if (seen[id]) id = id + '-' + (++seen[id]);
        else seen[id] = 1;
        h.id = id;
      }
      var isChild = h.classList.contains('toc-child');
      html += '<a class="page-toc-link' + (isChild ? ' page-toc-child' : '') + '" href="#' + id + '" data-toc-target="' + id + '">' + label + '</a>';
    });
    nav.innerHTML = html;
    initScrollSpy();
  }
  window.buildToc = buildToc;

  function initScrollSpy() {
    var scrollEl = window.matchMedia('(min-width: 768px)').matches
      ? document.querySelector('.main')
      : window;
    if (!scrollEl) return;
    var links = document.querySelectorAll('.page-toc-link');
    if (!links.length) return;
    var targets = Array.prototype.map.call(links, function (a) {
      var id = a.getAttribute('data-toc-target');
      return { link: a, el: id ? document.getElementById(id) : null };
    }).filter(function (t) { return t.el; });
    if (!targets.length) return;

    function getScrollTop() {
      return scrollEl === window ? window.scrollY : scrollEl.scrollTop;
    }
    function update() {
      // Match STICKY_OFFSET so the active link flips at the same point the section
      // appears below the sticky tab bar.
      var top = getScrollTop() + 120; // 96 (sticky) + ~24 lead-in
      var current = targets[0];
      for (var i = 0; i < targets.length; i++) {
        var rect = targets[i].el.getBoundingClientRect();
        var offsetTop = rect.top + getScrollTop() - (scrollEl === window ? 0 : scrollEl.getBoundingClientRect().top);
        if (offsetTop <= top) current = targets[i];
        else break;
      }
      links.forEach(function (a) { a.classList.remove('active'); });
      if (current) current.link.classList.add('active');
    }

    // Detach previous listener if any
    if (window._tocSpy) {
      window._tocSpy.target.removeEventListener('scroll', window._tocSpy.handler);
    }
    var handler = function () { window.requestAnimationFrame(update); };
    scrollEl.addEventListener('scroll', handler, { passive: true });
    window._tocSpy = { target: scrollEl, handler: handler };
    update();
  }
  window.initScrollSpy = initScrollSpy;

  // Smooth-scroll on TOC click within the .main scroll container
  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest && e.target.closest('.page-toc-link');
    if (!link) return;
    var id = link.getAttribute('data-toc-target');
    var el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    var scrollEl = window.matchMedia('(min-width: 768px)').matches
      ? document.querySelector('.main')
      : window;
    var rect = el.getBoundingClientRect();
    // Offset for the sticky comp-tabs bar (matches scroll-margin-top in CSS)
    var STICKY_OFFSET = 96;
    if (scrollEl === window) {
      window.scrollTo({ top: window.scrollY + rect.top - STICKY_OFFSET, behavior: 'smooth' });
    } else if (scrollEl) {
      var containerRect = scrollEl.getBoundingClientRect();
      scrollEl.scrollTo({ top: scrollEl.scrollTop + (rect.top - containerRect.top) - STICKY_OFFSET, behavior: 'smooth' });
    }
    try { history.replaceState(null, '', '#' + id); } catch (err) {}
  });

  // (TOC is built inside initPage() below — runs on every Astro page-load too)

  window.addEventListener('resize', initPills);

  // Single init function — runs on first load AND after every Astro view
  // transition swap. Re-positions tab pill, rebuilds TOC for the new page,
  // and syncs the persisted sidebar's active-state to the current URL.
  function initPage() {
    initPills();
    buildToc();
    // Always init scrollspy — covers static TOCs (e.g. /eb-ds-assessment-guide)
    // where buildToc() bails because the page has no .comp-tab-content.
    // initScrollSpy() is itself a no-op if there are no .page-toc-link
    // elements with valid data-toc-target attributes.
    initScrollSpy();
    syncSidebarActive();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(initPills);
  }

  // Astro fires this on initial load AND after every transition swap.
  document.addEventListener('astro:page-load', initPage);
  // Fallback for cases where astro:page-load doesn't reach us (script
  // loaded after the event fired, or pages without ClientRouter): also
  // run on DOMContentLoaded / immediately if DOM is already parsed.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }

  // Fallback for non-transition contexts (e.g. direct hits, no ClientRouter)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }

  // ── Theme toggle ─────────────────────────────────────────────────────
  window.toggleTheme = function (isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    try { localStorage.setItem('eb-theme', isDark ? 'dark' : 'light'); } catch (e) {}
  };

  // Restore theme on load
  try {
    var saved = localStorage.getItem('eb-theme');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  } catch (e) {}

  // ── Restore tab state from hash on load ──────────────────────────────
  function restoreTabsFromHash() {
    var h = (window.location.hash || '').replace(/^#/, '');
    if (!h.includes('=')) return;
    h.split('&').forEach(function (pair) {
      var parts = pair.split('=');
      if (parts.length !== 2) return;
      var group = decodeURIComponent(parts[0]);
      var tabId = decodeURIComponent(parts[1]);
      var root = document.querySelector('[data-tab-group="' + group + '"]');
      if (!root) return;
      var btn = root.querySelector('.comp-tab[data-tab-id="' + tabId + '"]');
      if (btn) btn.click();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', restoreTabsFromHash);
  } else {
    restoreTabsFromHash();
  }
})();
