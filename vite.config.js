import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'RPT - Next Generation AI Agent Technology',
        short_name: 'RPT AI',
        description: 'RPT specializes in building next-generation AI Agents and Agentic AI solutions',
        theme_color: '#1E3A8A',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globIgnores: [
          '**/node_modules/**/*',
          'sw.js',
          'workbox-*.js'
        ],
        swDest: 'dist/sw.js',
        // Don't fallback on document based routing
        navigateFallback: null
      },
      // Enable dev mode for better debugging
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
  // Ensure proper URL format for assets
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
