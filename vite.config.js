import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // Gzip — served by most hosts automatically; 60-70% JS size reduction
    compression({ algorithm: 'gzip', exclude: [/\.(png|jpg|webp|ico|svg)$/] }),

    // Brotli — better compression for modern browsers
    compression({ algorithm: 'brotliCompress', exclude: [/\.(png|jpg|webp|ico|svg)$/] }),
  ],

  build: {
    // Increase warning threshold — 500KB per chunk is fine
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — tiny, cached forever
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react'
          }
          // Framer Motion — large but cacheable
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
          // Recharts — only used in admin, keep isolated
          if (id.includes('node_modules/recharts') || id.includes('node_modules/d3-') || id.includes('node_modules/victory-')) {
            return 'vendor-charts'
          }
          // i18n runtime
          if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
            return 'vendor-i18n'
          }
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router'
          }
          // Everything else in node_modules → shared vendor chunk
          if (id.includes('node_modules/')) {
            return 'vendor-misc'
          }
        },
      },
    },
  },

  server: {
    proxy: {
      '/login': {
        target: 'http://localhost:8656',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:8656',
        changeOrigin: true,
      },
      '/auth': {
        target: 'http://localhost:8656',
        changeOrigin: true,
        bypass: (req) => {
          if (req.url.includes('token=') || req.headers.accept.includes('text/html')) {
            return req.url
          }
          return null
        },
      },
    },
  },
})
