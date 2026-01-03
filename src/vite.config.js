import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repo-name' with your actual GitHub repository name
// For example, if your repo is 'portfolio', use base: '/portfolio/'
// If your repo is 'username.github.io', use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to '/your-repo-name/' if not using username.github.io
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
