import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://smarthubb.se',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
