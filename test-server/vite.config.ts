// Plugins
import vue from '@vitejs/plugin-vue'

// Utilities
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default ({mode}) => {

  return defineConfig({
    plugins: [
      vue({
        template: {}
      })
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
      host: process.env.HOST ? process.env.HOST : mode === 'development' ? 'localhost' : '0.0.0.0',
      watch: {
        usePolling: true
      }
    },
  })
}
