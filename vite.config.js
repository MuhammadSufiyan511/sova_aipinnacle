import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
        // Sirf un auth requests ko jane den jo API side ki hain
        bypass: (req) => {
          // Returning a string (the URL) will skip the proxy and serve it locally
          if (req.url.includes('token=') || req.headers.accept.includes('text/html')) {
            return req.url; // Frontend handle karega (React Router)
          }
          // Returning null/undefined continues to the proxy
          return null;
        }
      }
    }
  }
})
