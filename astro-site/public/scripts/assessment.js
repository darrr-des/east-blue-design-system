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
  function paintSidebarUser(user) {
    if (!user) return;
    var box = document.getElementById('sidebar-user');
    var nameEl = document.getElementById('sidebar-user-name');
    var emailEl = document.getElementById('sidebar-user-email');
    var avatarEl = document.getElementById('sidebar-user-avatar');
    if (!box || !nameEl || !emailEl || !avatarEl) return;
    nameEl.textContent = user.name || user.email || 'Signed in';
    emailEl.textContent = user.email || '';
    if (user.picture) {
      avatarEl.src = user.picture;
      avatarEl.style.display = 'block';
    } else {
      avatarEl.style.display = 'none';
    }
    box.style.display = 'flex';
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

  // ── Sidebar nav section toggle ───────────────────────────────────────
  window.toggleNavSection = function (btn) {
    var list = btn.nextElementSibling;
    if (!list) return;
    var open = list.classList.toggle('open');
    btn.classList.toggle('open', open);
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
    var path = window.location.pathname.replace(/\/$/, '');
    nav.querySelectorAll('.nav-comp').forEach(function (a) {
      var href = (a.getAttribute('href') || '').replace(/\/$/, '');
      a.classList.toggle('active', href === path);
    });
    // Auto-open the section containing the now-active item
    nav.querySelectorAll('.nav-section-list').forEach(function (list) {
      var hasActive = list.querySelector('.nav-comp.active');
      var btn = list.previousElementSibling;
      if (hasActive) {
        list.classList.add('open');
        if (btn) btn.classList.add('open');
      }
    });
    // If the active item is offscreen, scroll it into view (no smooth — instant)
    var active = nav.querySelector('.nav-comp.active');
    if (active) {
      var navRect = nav.getBoundingClientRect();
      var activeRect = active.getBoundingClientRect();
      if (activeRect.top < navRect.top || activeRect.bottom > navRect.bottom) {
        active.scrollIntoView({ block: 'center' });
      }
    }
  }

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
  window.switchCodeTab = function (tabBtn, lang) {
    var block = tabBtn.closest('.spec-card-code');
    if (!block) return;
    block.querySelectorAll('.spec-code-tab').forEach(function (t) { t.classList.remove('active'); });
    tabBtn.classList.add('active');
    block.querySelectorAll('.spec-code-block').forEach(function (pre) {
      pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
    });
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
    syncSidebarActive();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(initPills);
  }

  // Astro fires this on initial load AND after every transition swap.
  document.addEventListener('astro:page-load', initPage);

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
