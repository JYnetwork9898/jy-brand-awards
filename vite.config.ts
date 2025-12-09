import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { CURRENT_YEAR } from './src/constants/common'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/%CURRENT_YEAR%/g, CURRENT_YEAR.toString())
      }
    }
  ],
})
