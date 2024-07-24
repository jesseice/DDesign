/// <reference types="vitest" />
import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig(({}) => {
  // 打包库入口
  const entry = "./src/index.ts";
  const output = "./dist";
  return {
    plugins: [
      vuePlugin(),
      dts({
        entryRoot: "./src",
        outDir: output,
      }),
    ],
    build: {
      //打包文件目录
      //压缩
      //minify: false,
      rollupOptions: {
        //忽略打包vue文件
        external: ["vue"],
        input: [entry],
        output: [
          {
            //打包格式
            format: "es",
            //打包后文件名
            entryFileNames: "[name].mjs",
            //让打包目录和我们目录对应
            preserveModules: true,
            exports: "named",
            //配置打包根目录
            dir: output,
          },
        ],
      },
      lib: {
        entry,
      },
    },
    test: {
      // ...
    },
  };
});
