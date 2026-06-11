import { signal, computed } from '@preact/signals';
import { translations } from '../data/translations';
import { appEvents } from '../shared/EventBus';
import type { Lang } from '../domain';

function detectLangFromURL(): Lang {
  if (typeof window === 'undefined') return 'es';
  return window.location.pathname.startsWith('/en') ? 'en' : 'es';
}

export const langSignal = signal<Lang>(detectLangFromURL());
export const t = computed(() => translations[langSignal.value]);

function resolveNavI18n(lang: Lang): void {
  const tNow = translations[lang];
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n!;
    const parts = key.split('.');
    let val: unknown = tNow;
    for (const part of parts) val = (val as Record<string, unknown>)?.[part];
    if (typeof val === 'string') el.textContent = val;
  });
}

export function initLanguage(lang?: Lang): void {
  const current: Lang = lang ?? (localStorage.getItem('lang') as Lang) ?? 'es';
  langSignal.value = current;
  localStorage.setItem('lang', current);
  document.documentElement.lang = current;
  resolveNavI18n(current);

  appEvents.emit('lang:changed', { lang: current });

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const next: Lang = current === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', next);
    window.location.href = `/${next}`;
  });
}
