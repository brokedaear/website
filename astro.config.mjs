// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// Importing MDX for now creates an error. Must be an astro beta thing.
// import mdx from '@astrojs/mdx'

import cloudflare from '@astrojs/cloudflare'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://brokedaear.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    sitemap(),

    AutoImport({
      imports: [],
    }),

    // mdx MUST come after AutoImport.
    mdx(),

    // Compressor MUST come last.
    compressor(),
  ],
})
