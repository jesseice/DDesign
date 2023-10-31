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
</script>
