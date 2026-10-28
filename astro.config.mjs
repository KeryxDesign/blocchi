import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({ site: 'https://keryxdesign.github.io', base: '/blocchi/', trailingSlash: 'always', integrations: [tailwind()] });
