<template>
  <Code :code-str="code1" title="类型">
    <template #subscribe>
      类型有：
      <template v-for="item in types" :key="item">
        <code> {{ item }} </code>
        &nbsp;
      </template>
      使用模板
    </template>
    <template #demo>
      <d-space direction="vertical" style="width: 200px">
        <d-message type="success" content="成功" />
        <d-message type="warning" content="警告" />
        <d-message type="error" content="错误" />
        <d-message type="info" content="提示" />
      </d-space>
    </template>
  </Code>
  <Code :code-str="code2" title="全局调用">
    <template #subscribe>
      函数式调用 导出 <code>MessagePlugin</code>直接使用
    </template>
    <template #demo>
      <d-button type="primary" @click="open('success')">成功提示</d-button>
      <d-button type="danger" @click="open('error')">错误提示</d-button>
      <d-button type="warning" @click="open('warning')">警示提示</d-button>
      <d-button type="default" @click="open('info')">默认提示</d-button>
    </template>
  </Code>
</template>
<script setup lang="ts">
import Code from "./code.vue";
import { MessagePlugin } from "../../../src/index";
const types = ["success", "warning", "error", "info"];
const code1 = `
<d-space direction="vertical" style="width: 200px">
  <d-message type="success" content="成功" />
  <d-message type="warning" content="警告" />
  <d-message type="error" content="错误" />
  <d-message type="info" content="提示" />
</d-space>`;
const code2 = `
<template>
  <d-button type="primary" @click="open('success')">成功提示</d-button>
  <d-button type="primary" @click="open('error')">错误提示</d-button>
  <d-button type="primary" @click="open('warning')">警示提示</d-button>
  <d-button type="primary" @click="open('info')">默认提示</d-button>
</template>
<script setup lang="ts">
const open = (type: "success" | "warning" | "error" | "info") => {
  // 方式1
  MessagePlugin[type](type, 1500);
  // 方式2
  // MessagePlugin({
  //   content: "函数式调用",
  //   type,
  //   duction: 1500,
  // });
};
<\/script>
`;

const open = (type: "success" | "warning" | "error" | "info") => {
  // 方式1
  MessagePlugin[type](type, 1500);
  // 方式2
  // MessagePlugin({
  //   content: "函数式调用",
  //   type,
  //   duction: 1500,
  // });
};
</script>
