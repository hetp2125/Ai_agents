import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // keep the bundle lean — no unused chunks, aggressive minify
    target: 'es2018',
    cssCodeSplit: true,
    sourcemap: false
  }
})
