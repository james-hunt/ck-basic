import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    target: ['es2018', 'safari12'],
  },
  esbuild: {
    target: 'es2018',
    supported: {
      'optional-chaining': false,
      'nullish-coalescing': false,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'safari12',
    },
  },
})
