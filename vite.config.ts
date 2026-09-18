import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    // Relative base path ensures all asset URLs (scripts, stylesheets, fonts)
    // resolve correctly regardless of whether the site is hosted at:
    // https://<user>.github.io/Velora/, https://<user>.github.io/web/, or a custom root domain.
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': projectRoot,
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
    },
  };
});
