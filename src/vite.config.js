import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path configured for GitHub Pages project deployment
// Repository: Minimalistportfoliodesign
// IMPORTANT: This must match your exact GitHub repository name (case-sensitive!)
// If deploying to https://username.github.io/ (user site), set base to '/'
// If deploying to https://username.github.io/repo-name/ (project site), set base to '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/Minimalistportfoliodesign/', // Updated to match exact repository name with capital M
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
  },
});