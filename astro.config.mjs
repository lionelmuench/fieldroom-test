import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://insiteweb.design',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});
