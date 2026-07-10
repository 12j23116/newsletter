import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://techscope.example.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
