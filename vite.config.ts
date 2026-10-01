import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

/** Size presets usable as `image.jpeg?thumb` / `image.jpeg?tile`; `?hq` raises quality. Everything else ships as full-size WebP. */
const presets: Record<string, string> = { thumb: '120', tile: '720', card: '1100', hero: '960' }

/** Lets the browser fetch the hero portrait in parallel with the JS bundle instead of after it. */
function preloadHeroImage(): Plugin {
  let base = '/'
  return {
    name: 'preload-hero-image',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml(_html, ctx) {
      const asset = Object.values(ctx.bundle ?? {}).find((file) => file.fileName.includes('hemdan-personal'))
      if (!asset) return
      return [
        {
          tag: 'link',
          attrs: { rel: 'preload', as: 'image', href: `${base}${asset.fileName}`, fetchpriority: 'high' },
          injectTo: 'head',
        },
      ]
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preloadHeroImage(),
    imagetools({
      include: /\.(jpe?g|png|webp)(\?.*)?$/,
      defaultDirectives: (url) => {
        const params = new URLSearchParams()
        for (const [preset, width] of Object.entries(presets)) {
          if (url.searchParams.has(preset)) params.set('w', width)
        }
        if (!url.searchParams.has('format')) params.set('format', 'webp')
        if (!url.searchParams.has('quality')) params.set('quality', url.searchParams.has('hq') || url.searchParams.has('hero') ? '82' : '70')
        return params
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },
  base: '/Portfolio/',
  build: {
    target: 'es2022',
    modulePreload: { polyfill: false },
    assetsInlineLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap') || id.includes('node_modules/lenis')) {
            return 'motion'
          }
        },
      },
    },
  },
})
