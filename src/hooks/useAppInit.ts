import { useEffect } from 'preact/hooks';
import { initCursor } from '../shared/cursor';
import { initScrollAnimations, initSmoothScroll } from '../shared/scrollAnimations';
import { themeService } from '../services/ThemeService';
import { initLanguage } from '../services/LanguageService';
import type { Lang } from '../domain';

export function useAppInit(lang?: Lang): void {
  useEffect(() => {
    themeService.init();
    initCursor();
    initScrollAnimations();
    initSmoothScroll();
    initLanguage(lang);

    const toggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    toggle?.addEventListener('click', () => {
      const isOpen = navLinks?.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('loader-done');
      setTimeout(() => loader.remove(), 600);
    }
  }, []);
}
