import { defineUserConfig, defaultTheme } from "vuepress";
export default defineUserConfig({
  lang: "zh-CN",
  title: "DDesign",
  description: "开源简易UI框架-支持Vue3",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
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
          text: "按钮（button）",
          link: "/components/button",
          // children: [{ text: "1_a", link: "/guide/one/one_a" }],
        },
        {
          text: "弹窗（modal）",
          link: "/components/modal",
          // children: [{ text: "基础问题", link: "/record/js/basic" }],
        },
      ],
    },
  }),
});
