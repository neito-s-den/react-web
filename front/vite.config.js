import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external connections (set to `0.0.0.0` under the hood)
    watch: {
      usePolling: true, // Enables polling to ensure file changes are detected
    },
    hmr: {
      clientPort: 5173, // Ensures HMR uses the correct port
    },
  },
})
