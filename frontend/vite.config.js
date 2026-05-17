import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,   // ← corrige HMR no Windows
    },
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})