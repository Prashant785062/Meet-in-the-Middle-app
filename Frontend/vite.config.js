import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'  // ✅ named import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills() // ✅ works now
  ],
  define: {
    global: 'globalThis', // ✅ fixes "global is not defined"
  },
})
