// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // TODO: replace with the real domain before go-live
  i18n: {
    defaultLocale: 'hy',
    locales: ['hy', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
