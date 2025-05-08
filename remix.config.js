import { vercelVite } from '@remix-run/dev/server-build-presets';

export default {
  serverBuildTarget: 'vercel',
  server: './server.js',
  // 👇 agrega este preset si usas Vite en Vercel
  serverBuildPreset: vercelVite(),
};

