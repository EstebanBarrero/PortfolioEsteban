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
    const navbar = document.getElementById('navbar');

    const closeMenu = () => {
      navLinks?.classList.remove('open');
      toggle?.classList.remove('active');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };

    toggle?.addEventListener('click', () => {
      const isOpen = navLinks?.classList.toggle('open') ?? false;
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (e) => {
      if (!navLinks?.classList.contains('open')) return;
      if (!navbar?.contains(e.target as Node)) closeMenu();
    });

    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('loader-done');
      setTimeout(() => loader.remove(), 600);
    }
  }, []);
}
