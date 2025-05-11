  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ATHITHYAN-V.github.io/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', 
    port: 3000,       
  },
});
