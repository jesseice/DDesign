import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    // root: "./examples",
    plugins: [
      vuePlugin(),
    ],
  };
});
