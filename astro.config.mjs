import { defineConfig } from 'astro/config';

const basePath = process.env.BASE_PATH?.replace(/\/$/, '') || undefined;
const siteUrl = process.env.SITE_URL || undefined;

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: 'static',
  outDir: './dist',
  build: {
    format: 'file',
  },
});
