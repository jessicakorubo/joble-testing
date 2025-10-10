import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ensure build output goes here
  },
  server: {
    port: 8080, // not strictly needed for build, but keeps consistency
  },
  base: './', // <-- important: makes sure all asset paths are relative
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
