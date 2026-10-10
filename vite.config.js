import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative so the site works on GitHub Pages
// project sub-paths (e.g. https://<user>.github.io/<repo>/) as well as root.
export default defineConfig({
  base: './',
  plugins: [react()],
});
