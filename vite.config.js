import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff,woff2,ico}', 'apple-touch-icon-180x180.png'],
        ignoreURLParametersMatching: [/.*/]
      },
      manifest: {
        name: 'CaseFu Editor',
        short_name: 'CaseFu Editor',
        description: 'CaseFu Editor',
        theme_color: '#ff4700',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        display: 'standalone'
      },
      devOptions: {
        enabled: false
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  server: {
    port: 3000
  },
})
