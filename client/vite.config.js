import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
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
    
})
