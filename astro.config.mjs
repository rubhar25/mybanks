// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Temporary staging on GitHub Pages. TODO before go-live on the real domain:
  // set site to the real domain and base back to '/'.
  site: 'https://rubhar25.github.io',
  base: '/mybanks',
  i18n: {
    defaultLocale: 'hy',
    locales: ['hy', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
