import { vitePlugin } from "@remix-run/dev";
import { string } from "vite-plugin-string";

export default {
  serverBuildTarget: "vercel",
  server: "./server.js",
  vite: () => ({
    plugins: [
      vitePlugin(),
      string({ include: "**/*.glsl" })  // 👈 esto es lo nuevo
    ],
  }),
};
