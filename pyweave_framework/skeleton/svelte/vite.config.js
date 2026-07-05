import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [svelte(), VitePWA({ registerType: 'autoUpdate', manifest: false })],
  server: { port: 5173, strictPort: true }
})
