import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ command, mode }) => ({
  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === 'development' ? false : true,
    outDir: 'dist',
    sourcemap: command === 'serve' ? 'inline' : false,
  },

  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
    eslint(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
    },
  },
}));
