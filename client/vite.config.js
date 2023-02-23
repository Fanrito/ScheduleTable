import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', 'js', 'ts'],
    alias: [
      {
        find: 'has',
        replacement: './node_modules/has/src/index.js'
      },
      {
        find: 'function-bind',
        replacement: './node_modules/function-bind/index.js'
      }
   ]
  }
})
