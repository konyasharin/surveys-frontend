/* eslint-disable */
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  envPrefix: 'APP_',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
