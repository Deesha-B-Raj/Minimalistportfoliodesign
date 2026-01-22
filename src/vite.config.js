import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path configured for GitHub Pages project deployment
// Repository: minimalistportfoliodesign
// If deploying to https://username.github.io/ (user site), set base to '/'
// If deploying to https://username.github.io/repo-name/ (project site), set base to '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/minimalistportfoliodesign/', // Updated to match GitHub repository name
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