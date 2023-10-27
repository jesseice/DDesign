import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(() => {
  return {
    root: "./examples",
    resolve: {
      alias: {
        "@examples/": path.resolve(__dirname, "./examples/src"),
        "@docs/": path.resolve(__dirname, "./doc"),
        "@src/": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [vuePlugin()],
  };
});
