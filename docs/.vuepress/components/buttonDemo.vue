<template>
  <Code :code-str="code1" title="类型">
    <template #subscribe>
      类型有：
      <template v-for="item in types" :key="item">
        <code>{{ item }}</code>
        &nbsp;
      </template>
    </template>
    <template #demo>
      <d-button type="default">default</d-button>
      <d-button type="primary">primary</d-button>
      <d-button type="success">success</d-button>
      <d-button type="warning">warning</d-button>
      <d-button type="danger">danger</d-button>
    </template>
  </Code>
  <Code :code-str="code2" title="尺寸">
    <template #subscribe>
      尺寸值有：
      <template v-for="item in sizes" :key="item">
        <code>{{ item }}</code>
        &nbsp;
      </template>
    </template>
    <template #demo>
      <d-button type="primary" size="small">small</d-button>
      <d-button type="primary">default</d-button>
      <d-button type="primary" size="large">large</d-button>
    </template>
  </Code>
  <Code :code-str="code3" title="属性透传">
    <template #subscribe> 原生按钮属性可直接使用 </template>
    <template #demo>
      <d-button type="primary" disabled>禁用</d-button>
    </template>
  </Code>
  <Code :code-str="code4" title="加载状态">
    <template #subscribe> <code>loading</code> </template>
    <template #demo>
      <d-button type="primary" :loading="true">获取中</d-button>
    </template>
  </Code>
</template>
<script setup lang="ts">
import Code from "./code.vue";
const types = ["default", "primary", "success", "warning", "danger"];
const sizes = ["small", "default", "large"];
const code1 = `
<d-button type="default">default</d-button>
<d-button type="primary">primary</d-button>
<d-button type="success">success</d-button>
<d-button type="warning">warning</d-button>
<d-button type="danger">danger</d-button>`;
const code2 = `<d-button type="primary" size="small">small</d-button>
<d-button type="primary">default</d-button>
<d-button type="primary" size="large">large</d-button>`;
const code3 = `<d-button type="primary" disabled>禁用</d-button>`;
const code4 = `<d-button type="primary" :loading="true">获取中</d-button>`;
</script>
