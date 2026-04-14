// ============================================================
// THEME MANAGER — Light / Dark mode toggle
// Persists preference to localStorage + respects OS preference
// ============================================================

type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function toggleTheme(): Theme {
  const current = document.documentElement.getAttribute('data-theme') as Theme ?? 'light';
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}

export function initTheme(): void {
  // Apply correct theme immediately (also done inline in HTML to prevent flash)
  applyTheme(getStoredTheme());

  // Wire up the toggle button
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = toggleTheme();
    // Animate button
    btn.style.transform = 'rotate(360deg) scale(1.15)';
    setTimeout(() => { btn.style.transform = ''; }, 350);
    btn.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
  });

  // Listen for OS preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}
