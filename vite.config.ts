import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

/** Lets the browser fetch the hero portrait in parallel with the JS bundle instead of after it. */
function preloadHeroImage(): Plugin {
  let base = '/'
  return {
    name: 'preload-hero-image',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    async transformIndexHtml(_html, ctx) {
      const assets = Object.values(ctx.bundle ?? {}).filter(
        (file): file is Extract<(typeof file), { type: 'asset' }> =>
          file.type === 'asset' && file.fileName.includes('hemdan-personal') && file.fileName.endsWith('.avif'),
      )
      if (!assets.length) return

      const measured = await Promise.all(
        assets.map(async (file) => {
          const source = typeof file.source === 'string' ? Buffer.from(file.source) : Buffer.from(file.source)
          const meta = await sharp(source).metadata()
          return { href: `${base}${file.fileName}`, width: meta.width ?? 0 }
        }),
      )
      measured.sort((a, b) => a.width - b.width)
      const href = (measured.find((item) => item.width >= 800) ?? measured[measured.length - 1]).href
      return [
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'image',
            type: 'image/avif',
            href,
            imagesrcset: measured.map((item) => `${item.href} ${item.width}w`).join(', '),
            imagesizes: '(max-width: 1023px) 100vw, 50vw',
            fetchpriority: 'high',
          },
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
        if (!url.searchParams.has('format')) params.set('format', 'webp')
        if (!url.searchParams.has('quality')) params.set('quality', '70')
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
    modulePreload: {
      polyfill: false,
      resolveDependencies(_filename, deps) {
        return deps.filter((dep) => dep.includes('rolldown-runtime'))
      },
    },
  },
})
