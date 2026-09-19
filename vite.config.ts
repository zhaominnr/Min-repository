import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project site on GitHub Pages: https://zhaominnr.github.io/Min-repository/
export default defineConfig({
  base: '/Min-repository/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
