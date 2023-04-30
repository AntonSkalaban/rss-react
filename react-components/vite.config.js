import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './setupTest.js',
    coverage: {
      provider: 'c8', // or 'c8'
    },
  },
});
