// ── Shared shell: header + sidebar menu ──
const LOGO_B64 = "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";

const PAGES = [
  { id: 'index',     label: 'Dashboard',   icon: 'ti-layout-dashboard', href: 'index.html' },
  { id: 'app',       label: 'Calendrier',  icon: 'ti-calendar',         href: 'app.html' },
  { id: 'stock',     label: 'Stock',       icon: 'ti-watch',            href: 'stock.html' },
  { id: 'instagram', label: 'Instagram',   icon: 'ti-brand-instagram',  href: 'instagram.html' },
  { id: 'stats',     label: 'Stats',       icon: 'ti-chart-bar',        href: 'stats.html' },
  { id: 'contacts',  label: 'Contacts',    icon: 'ti-address-book',     href: 'contacts.html' },
];

function injectShell(currentPage) {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --green: #162715;
      --green-mid: #2e4a2c;
      --green-accent: #4a7a47;
      --green-light: rgba(22,39,21,0.06);
      --green-border: rgba(22,39,21,0.14);
      --green-border-strong: rgba(22,39,21,0.24);
      --text: #162715;
      --muted: rgba(22,39,21,0.46);
      --bg: #ffffff;
      --header-h: 60px;
    }
    html, body { height: 100%; }
    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg);
      color: var(--text);
      max-width: 430px;
      margin: 0 auto;
      padding-top: var(--header-h);
      padding-bottom: 2rem;
      min-height: 100dvh;
    }

    /* ── Top header ── */
    .ls-header {
      position: fixed; top: 0; left: 50%; transform: translateX(-50%);
      width: 100%; max-width: 430px;
      height: var(--header-h);
      background: var(--bg);
      border-bottom: 0.5px solid var(--green-border);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 1.1rem;
      z-index: 100;
    }
    .ls-hamburger {
      width: 36px; height: 36px; border-radius: 8px;
      border: 0.5px solid var(--green-border-strong);
      background: none; cursor: pointer;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    }
    .ls-hamburger span {
      display: block; width: 16px; height: 1.5px;
      background: var(--text); border-radius: 99px;
      transition: all 0.25s;
    }
    .ls-logo-wrap { display: flex; align-items: center; gap: 8px; }
    .ls-logo-img { height: 32px; width: auto; }
    .ls-logo-name {
      font-family: 'DM Serif Display', serif;
      font-size: 17px; color: var(--green); letter-spacing: 0.01em;
    }
    .ls-user-btn {
      width: 36px; height: 36px; border-radius: 50%;
      background: var(--green); color: #fff;
      font-size: 11px; font-weight: 500;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
    }

    /* ── Sidebar overlay ── */
    .ls-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(22,39,21,0.35); z-index: 200;
      backdrop-filter: blur(2px);
    }
    .ls-overlay.open { display: block; }
    .ls-sidebar {
      position: fixed; top: 0; left: -280px; bottom: 0;
      width: 260px; background: var(--green);
      z-index: 201; padding: 0;
      transition: left 0.3s cubic-bezier(.4,0,.2,1);
      display: flex; flex-direction: column;
    }
    .ls-sidebar.open { left: 0; }
    .ls-sidebar-header {
      padding: 1.5rem 1.25rem 1rem;
      border-bottom: 0.5px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: space-between;
    }
    .ls-sidebar-logo { height: 36px; width: auto; filter: brightness(0) invert(1); }
    .ls-close-btn {
      width: 30px; height: 30px; border-radius: 6px;
      background: rgba(255,255,255,0.1); border: none; cursor: pointer;
      color: #fff; font-size: 16px;
      display: flex; align-items: center; justify-content: center;
    }
    .ls-sidebar-user {
      padding: 1rem 1.25rem;
      border-bottom: 0.5px solid rgba(255,255,255,0.1);
    }
    .ls-sidebar-user-name {
      font-size: 13px; font-weight: 500; color: #fff; margin-bottom: 2px;
    }
    .ls-sidebar-user-email { font-size: 11px; color: rgba(255,255,255,0.5); }
    .ls-nav { flex: 1; padding: 0.75rem 0; overflow-y: auto; }
    .ls-nav-item {
      display: flex; align-items: center; gap: 12px;
      padding: 0.75rem 1.25rem; cursor: pointer;
      text-decoration: none; color: rgba(255,255,255,0.65);
      font-size: 14px; transition: all 0.12s;
      border-left: 2.5px solid transparent;
      margin: 1px 0;
    }
    .ls-nav-item:hover { background: rgba(255,255,255,0.07); color: #fff; }
    .ls-nav-item.active {
      background: rgba(255,255,255,0.1);
      color: #fff; font-weight: 500;
      border-left-color: rgba(251,235,210,0.8);
    }
    .ls-nav-item i { font-size: 18px; flex-shrink: 0; }
    .ls-sidebar-footer {
      padding: 1rem 1.25rem;
      border-top: 0.5px solid rgba(255,255,255,0.1);
    }
    .ls-logout-btn {
      display: flex; align-items: center; gap: 10px;
      font-size: 13px; color: rgba(255,255,255,0.5);
      background: none; border: none; cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      padding: 0;
    }
    .ls-logout-btn:hover { color: rgba(255,255,255,0.8); }

    /* ── Page title bar ── */
    .ls-page-title {
      padding: 1.25rem 1.1rem 0.5rem;
      font-family: 'DM Serif Display', serif;
      font-size: 24px; color: var(--text);
      letter-spacing: 0.01em;
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const shell = document.createElement('div');
  shell.innerHTML = `
    <header class="ls-header">
      <button class="ls-hamburger" id="ls-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <div class="ls-logo-wrap">
        <img class="ls-logo-img" src="data:image/png;base64,${LOGO_B64}" alt="La Seconde">
        <span class="ls-logo-name">La Seconde</span>
      </div>
      <button class="ls-user-btn" id="ls-user-btn">?</button>
    </header>

    <div class="ls-overlay" id="ls-overlay"></div>
    <aside class="ls-sidebar" id="ls-sidebar">
      <div class="ls-sidebar-header">
        <img class="ls-sidebar-logo" src="data:image/png;base64,${LOGO_B64}" alt="La Seconde">
        <button class="ls-close-btn" id="ls-close-btn"><i class="ti ti-x"></i></button>
      </div>
      <div class="ls-sidebar-user">
        <div class="ls-sidebar-user-name" id="ls-sidebar-name">—</div>
        <div class="ls-sidebar-user-email" id="ls-sidebar-email">—</div>
      </div>
      <nav class="ls-nav">
        ${PAGES.map(p => `
          <a class="ls-nav-item ${p.id === currentPage ? 'active' : ''}" href="${p.href}">
            <i class="ti ${p.icon}"></i> ${p.label}
          </a>
        `).join('')}
      </nav>
      <div class="ls-sidebar-footer">
        <button class="ls-logout-btn" id="ls-logout-btn">
          <i class="ti ti-logout" style="font-size:16px"></i> Se déconnecter
        </button>
      </div>
    </aside>
  `;
  document.body.insertBefore(shell, document.body.firstChild);

  // Toggle sidebar
  const hamburger = document.getElementById('ls-hamburger');
  const sidebar = document.getElementById('ls-sidebar');
  const overlay = document.getElementById('ls-overlay');
  const closeBtn = document.getElementById('ls-close-btn');

  function openMenu() { sidebar.classList.add('open'); overlay.classList.add('open'); }
  function closeMenu() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }
  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
}

function initAuth(callback) {
  import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js").then(({ initializeApp }) => {
    import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js").then(({ getAuth, onAuthStateChanged, signOut }) => {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (!user) { window.location.href = 'index.html'; return; }
        const name = user.displayName || user.email.split('@')[0];
        const initials = name.slice(0,2).toUpperCase();
        document.getElementById('ls-user-btn').textContent = initials;
        document.getElementById('ls-sidebar-name').textContent = name;
        document.getElementById('ls-sidebar-email').textContent = user.email;
        document.getElementById('ls-logout-btn').addEventListener('click', async () => {
          await signOut(auth); window.location.href = 'index.html';
        });
        if (callback) callback(app, user);
      });
    });
  });
}
