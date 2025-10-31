import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    legacy({
      targets: ['safari >= 12'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
})
