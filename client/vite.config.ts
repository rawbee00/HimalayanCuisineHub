import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path when served in production
  base: '/',
  plugins: [react()],
  appType: 'spa',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendor: ['lodash', 'axios', 'date-fns', 'framer-motion', 'wouter', 'zod', 'react-hook-form'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true, // Enable network access
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables.scss";
          @import "./src/styles/mixins.scss";
        `
      }
    }
  }
});
