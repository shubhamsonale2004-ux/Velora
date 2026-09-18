import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // GitHub Pages publishes this repository under /Velora/. Use an explicit
  // boolean check so values such as GITHUB_ACTIONS=false do not enable the
  // production sub-path accidentally.
  const isGitHubPagesBuild =
    process.env.GITHUB_ACTIONS === 'true' && mode === 'production';

  return {
    base: isGitHubPagesBuild ? '/Velora/' : '/',
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
