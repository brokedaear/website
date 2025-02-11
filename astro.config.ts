// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

import netlify from '@astrojs/netlify'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://brokedaear.com',
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true,
  }),
  vite: {
    //@ts-ignore TS-2322
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
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
