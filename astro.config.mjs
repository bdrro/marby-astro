import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  // 1. Inlocuieste "nume_utilizator" cu numele tau de GitHub
  site: 'https://bel-dom.io',
  // 2. Adauga folderul proiectului tau (trebuie sa inceapa cu /)
  base: '/', 
  
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  markdown: { smartypants: false },
});
