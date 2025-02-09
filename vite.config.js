import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjsOptions: {
      esmExternals: true,
   },
   resolve: {
   alias: {
     dragula: 'dragula/dist/dragula.js'
  }
}
})
