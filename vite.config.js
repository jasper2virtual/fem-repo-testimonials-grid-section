import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from 'vite-plugin-yaml2'

// https://vite.dev/config/
export default defineConfig({
  base: '/fem-repo-testimonials-grid-section/',
  plugins: [vue(),yaml()],
})
