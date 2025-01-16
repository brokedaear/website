// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import cloudflare from '@astrojs/cloudflare'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import mdx from '@astrojs/mdx'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  // site: 'https://brokedaear.com',
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true,
  }),
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
