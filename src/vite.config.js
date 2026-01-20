import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path configured for GitHub Pages project deployment
// Repository: minimalistportfoliodesign
export default defineConfig({
  plugins: [react()],
  base: '/minimalistportfoliodesign/', // Updated to match GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});