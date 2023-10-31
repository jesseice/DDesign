<template>
  <div>
    <Code
      :code-str="code1"
      title="布局"
      subscribe="默认为横向排列，垂直可以使用direction='vertical'，控制相邻组件水平间距。"
    >
      <template #demo>
        <d-space>
          <d-button type="primary">1</d-button>
          <d-button type="primary">2</d-button>
          <d-button type="primary">3</d-button>
        </d-space>
        <div style="height: 10px"></div>
        <d-space direction="vertical">
          <d-button type="primary">1</d-button>
          <d-button type="primary">2</d-button>
          <d-button type="primary">3</d-button>
        </d-space>
      </template>
    </Code>
    <Code
      :code-str="code2"
      title="尺寸"
      subscribe="默认为medium ，可选值为small、large。也可以number类型"
    >
      <template #demo>
        <d-space size="large">
          <d-button type="primary">1</d-button>
          <d-button type="primary">2</d-button>
          <d-button type="primary">3</d-button>
        </d-space>
        <div style="height: 10px"></div>
        <d-space :size="100">
          <d-button type="primary">1</d-button>
          <d-button type="primary">2</d-button>
          <d-button type="primary">3</d-button>
        </d-space>
      </template>
    </Code>
  </div>
</template>
<script setup lang="ts">
import Code from "./code.vue";

const code1 = `<d-space>
  <d-button type="primary">1</d-button>
  <d-button type="primary">2</d-button>
  <d-button type="primary">3</d-button>
</d-space>
<d-space direction="vertical">
  <d-button type="primary">1</d-button>
  <d-button type="primary">2</d-button>
  <d-button type="primary">3</d-button>
</d-space>`;

const code2 = `<d-space size="large">
  <d-button type="primary">1</d-button>
  <d-button type="primary">2</d-button>
  <d-button type="primary">3</d-button>
</d-space>
<d-space :size="100">
  <d-button type="primary">1</d-button>
  <d-button type="primary">2</d-button>
  <d-button type="primary">3</d-button>
</d-space>`;
</script>
