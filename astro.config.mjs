// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare();
  integrations: [
    tailwind(), 
    sitemap(), 

    AutoImport({}), 

    // mdx MUST come after AutoImport.
    mdx(), 


    // Compressor MUST come last.
    compressor()]
});
