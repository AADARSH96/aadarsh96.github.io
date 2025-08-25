import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aadarsh96.github.io',
  integrations: [tailwind()],
});
