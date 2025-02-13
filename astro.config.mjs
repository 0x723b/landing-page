import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import unocss from '@unocss/astro'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({ injectReset: true }),
    solidJs(),
    sitemap(),
  ],
})
