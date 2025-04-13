import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'








export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    server: {
      port: 5174,
      hmr: { port: 5174 },
      proxy: {
        '/api': 'http://localhost:5000', // assuming backend runs on port 5000
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
})
