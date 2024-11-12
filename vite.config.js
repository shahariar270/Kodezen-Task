import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-sortable-hoc', 'array-move'],  // Exclude outdated or problematic dependencies
  },
})
