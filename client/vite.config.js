import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr'; // For SVG handling

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(), // Add SVG support
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
    ],
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      // Example proxy configuration for external resources
      '/external-images': {
        target: 'https://upload.wikimedia.org', // Example for Wikimedia images
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/external-images/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
      // Handle external resources
      external: [
        // Add any problematic external resources here
      ],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [], // Add any problematic dependencies here
  },
  // Add this to handle SVG and other assets
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
});