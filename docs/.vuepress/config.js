import { defineUserConfig, defaultTheme } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
export default defineUserConfig({
  lang: "zh-CN",
  title: "DDesign",
  description: "开源简易UI框架-支持Vue3",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  base: '/DDesign/',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/components/button",
      },
    ],
    sidebar: {
      "/components": [
        {
          text: "元级组件",
          children: [
            {
              text: "按钮（button）",
              link: "/components/button",
            },
          ],
        },
        {
          text: "反馈组件",
          children: [
            {
              text: "弹窗（modal）",
              link: "/components/modal",
            },
          ],
        },
      ],
    },
    contributors: false,
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
