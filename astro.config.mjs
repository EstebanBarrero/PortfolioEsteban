import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://estebanbarrero.dev',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    preact({ include: ['**/components/**', '**/hooks/**'] }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-CO', en: 'en-US' },
      },
    }),
  ],
  vite: {
    esbuild: {
      jsxImportSource: 'preact',
    },
  },
});
