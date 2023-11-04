<template>
  <Code title="基础用法" :code-str="code1">
    <template #subscribe>
      直接使用 <code>name</code> 指定某个icon 、点击图标可复制代码
    </template>
    <template #demo>
      <d-space>
        <d-icon
          v-for="item in glyphs"
          :key="item.icon_id"
          :name="item.font_class"
          style="cursor: pointer"
          @click="copy(item.font_class)"
        />
      </d-space>
    </template>
  </Code>
</template>
<script setup lang="ts">
import Code from "./code.vue";
import { glyphs } from "../../../src/icons/iconfont.json";
import { MessagePlugin } from "../../../src";
const code1 = `
${glyphs
  .map((item) => `<d-icon name="${item.font_class}"></d-icon>`)
  .join("\n")}
`;

const copy = (font_class: string) => {
  const oInput = document.createElement("textarea");
  oInput.value = `<d-icon name="${font_class}"></d-icon>`;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.style.display = "none";
  document.body.removeChild(oInput);
  MessagePlugin.success("代码已复制");
};
</script>
