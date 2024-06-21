import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tensight-hub.github.io/technical-docs',
	integrations: [mdx(), sitemap()],
});
