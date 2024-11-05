import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from 'vite-plugin-yaml2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),yaml()],
})
