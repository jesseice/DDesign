import { defineUserConfig, defaultTheme } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
export default defineUserConfig({
  lang: "zh-CN",
  title: "DDesign-vue-next",
  description: "开源简易UI框架-支持Vue3",
  head: [["link", { rel: "icon", href: "../images/logo.png" }]],
  base: "/DDesign/",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/components/quickStart",
        activeMatch: "components",
      },
      {
        text: "Github",
        link: "https://github.com/jesseice/DDesign",
        target: "_blank",
      },
    ],
    sidebar: {
      "/components": [
        {
          text: "开始",
          children: [{ text: "快速开始", link: "/components/quickStart" }],
        },
        {
          text: "布局",
          children: [{ text: "间距", link: "/components/space" }],
        },
        {
          text: "元级组件",
          children: [
            {
              text: "按钮（button）",
              link: "/components/button",
            },
            {
              text: "输入框（input）",
              link: "/components/input",
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
            {
              text: "全局提示（message）",
              link: "/components/message",
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
