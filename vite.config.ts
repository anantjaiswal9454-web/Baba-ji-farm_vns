import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work on GitHub Pages and custom hosts
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
