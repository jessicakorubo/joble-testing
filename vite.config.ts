import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ensures build output goes to dist
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // make sure index.html is included in dist
    },
  },
  base: './', // relative paths for all assets
  server: {
    port: 8080,
  },
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
