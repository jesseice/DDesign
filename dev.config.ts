import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(() => {
  return {
    root: "./examples",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./examples/src/"),
        "@dist": path.resolve(__dirname, "./dist/"),
      },
      extensions: [".js", ".json", ".ts", ".mjs"],
    },
    plugins: [vuePlugin()],
  };
});
