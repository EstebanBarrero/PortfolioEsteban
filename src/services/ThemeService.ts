import { ic } from '../shared/icons';
import type { Theme } from '../domain';

export class ThemeService {
  get(): Theme {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  apply(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this._syncBtn(theme);
  }

  toggle(): Theme {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) ?? 'dark';
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    this.apply(next);
    return next;
  }

  init(): void {
    this.apply(this.get());

    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const next = this.toggle();
      btn.style.transform = 'rotate(360deg) scale(1.15)';
      setTimeout(() => { btn.style.transform = ''; }, 350);
      btn.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) this.apply(e.matches ? 'dark' : 'light');
    });
  }

  private _syncBtn(theme: Theme): void {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const isDark = theme === 'dark';
    btn.innerHTML = isDark ? ic('sun', 16) : ic('moon', 16);
    btn.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  }
}

export const themeService = new ThemeService();
