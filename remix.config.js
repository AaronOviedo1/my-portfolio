import { vitePlugin } from "@remix-run/dev";

export default {
  future: {
    v2_dev: true,
    v2_routeConvention: true,
    v2_meta: true,
    v2_errorBoundary: true,
  },
  serverBuildTarget: "vercel",
  server: "./server.js",
  vite: () => ({
    plugins: [vitePlugin()],
  }),
};
