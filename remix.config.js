import { vitePlugin } from "@remix-run/dev";
import string from "vite-plugin-string"; // ✅ Import corregido

export default {
  serverBuildTarget: "vercel",
  server: "./server.js",
  vite: () => ({
    plugins: [
      vitePlugin(),
      string({ include: "**/*.glsl" }) // ✅ Configuración para archivos GLSL
    ],
  }),
};
