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
        text: "GitHub",
        link: "https://github.com/jesseice/DDesign",
        target: "_blank",
      },
    ],
    sidebar: {
      "/components": [
        {
          text: "开始",
          children: [{ text: "快速开始", link: "/components/quickStart.md" }],
        },
        {
          text: "布局",
          children: [{ text: "间距", link: "/components/space.md" }],
        },
        {
          text: "元级组件",
          children: [
            {
              text: "按钮（button）",
              link: "/components/button.md",
            },
            {
              text: "图标（icon）",
              link: "/components/icon.md",
            },
          ],
        },
        {
          text: "输入组件",
          children: [
            {
              text: "输入框（input）",
              link: "/components/input.md",
            },
            {
              text: "选择框（select）",
              link: "/components/select.md",
            },
          ],
        },
        {
          text: "数据展示",
          children: [
            {
              text: "标签（tag）",
              link: "/components/tag.md",
            },
          ],
        },
        {
          text: "反馈组件",
          children: [
            {
              text: "弹窗（modal）",
              link: "/components/modal.md",
            },
            {
              text: "全局提示（message）",
              link: "/components/message.md",
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
