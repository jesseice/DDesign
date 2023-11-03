<template>
  <Code title="基本用法" :code-str="code1">
    <template #subscribe>
      <div>theme： <code>"default", "primary", "warning", "danger", "success"</code></div>
      <div>variant：<code>"default", "light", "outline", "light-outline"</code></div>
    </template>
    <template #demo>
      <d-space direction="vertical">
        <d-space class="tag-demo">
          <d-tag>灰标签</d-tag>
          <d-tag theme="primary">标签一</d-tag>
          <d-tag theme="success">标签二</d-tag>
          <d-tag theme="warning">标签三</d-tag>
          <d-tag theme="danger">标签四</d-tag>
        </d-space>
        <d-space class="tag-demo light">
          <d-tag variant="light">灰标签</d-tag>
          <d-tag theme="primary" variant="light">标签一</d-tag>
          <d-tag theme="success" variant="light">标签二</d-tag>
          <d-tag theme="warning" variant="light">标签三</d-tag>
          <d-tag theme="danger" variant="light">标签四</d-tag>
        </d-space>
        <d-space class="tag-demo">
          <d-tag variant="outline">灰标签</d-tag>
          <d-tag theme="primary" variant="outline">标签一</d-tag>
          <d-tag theme="success" variant="outline">标签二</d-tag>
          <d-tag theme="warning" variant="outline">标签三</d-tag>
          <d-tag theme="danger" variant="outline">标签四</d-tag>
        </d-space>
        <d-space class="tag-demo">
          <d-tag variant="light-outline">灰标签</d-tag>
          <d-tag theme="primary" variant="light-outline">标签一</d-tag>
          <d-tag theme="success" variant="light-outline">标签二</d-tag>
          <d-tag theme="warning" variant="light-outline">标签三</d-tag>
          <d-tag theme="danger" variant="light-outline">标签四</d-tag>
        </d-space>
      </d-space>
    </template>
  </Code>
  <Code title="尺寸" :code-str="code2">
    <template #subscribe>
      <code>small(默认)</code>
      <code>medium</code>
      <code>large</code>
    </template>
    <template #demo>
      <d-space class="tag-demo">
        <d-tag theme="primary">标签一</d-tag>
        <d-tag size="medium" theme="success">标签二</d-tag>
        <d-tag size="large" theme="warning">标签三</d-tag>
      </d-space>
    </template>
  </Code>
  <Code title="是否可关闭" :code-str="code3">
    <template #subscribe>
      属性<code>closable: true / false（默认）</code>回调<code>close</code>
    </template>
    <template #demo>
      <d-tag
        size="medium"
        theme="success"
        closable
        @close="MessagePlugin.error('删除成功')"
      >
        标签
      </d-tag>
    </template>
  </Code>
</template>

<script setup lang="ts">
import { MessagePlugin } from "../../../src";
import Code from "./code.vue";
const code1 = `
<d-space direction="vertical">
  <d-space class="tag-demo">
    <d-tag>灰标签</d-tag>
    <d-tag theme="primary">标签一</d-tag>
    <d-tag theme="success">标签二</d-tag>
    <d-tag theme="warning">标签三</d-tag>
    <d-tag theme="danger">标签四</d-tag>
  </d-space>
  <d-space class="tag-demo light">
    <d-tag variant="light">灰标签</d-tag>
    <d-tag theme="primary" variant="light">标签一</d-tag>
    <d-tag theme="success" variant="light">标签二</d-tag>
    <d-tag theme="warning" variant="light">标签三</d-tag>
    <d-tag theme="danger" variant="light">标签四</d-tag>
  </d-space>
  <d-space class="tag-demo">
    <d-tag variant="outline">灰标签</d-tag>
    <d-tag theme="primary" variant="outline">标签一</d-tag>
    <d-tag theme="success" variant="outline">标签二</d-tag>
    <d-tag theme="warning" variant="outline">标签三</d-tag>
    <d-tag theme="danger" variant="outline">标签四</d-tag>
  </d-space>
  <d-space class="tag-demo">
    <d-tag variant="light-outline">灰标签</d-tag>
    <d-tag theme="primary" variant="light-outline">标签一</d-tag>
    <d-tag theme="success" variant="light-outline">标签二</d-tag>
    <d-tag theme="warning" variant="light-outline">标签三</d-tag>
    <d-tag theme="danger" variant="light-outline">标签四</d-tag>
  </d-space>
</d-space>`;

const code2 = `
<d-space class="tag-demo">
  <d-tag theme="primary">标签一</d-tag>
  <d-tag size="medium" theme="success">标签二</d-tag>
  <d-tag size="large" theme="warning">标签三</d-tag>
</d-space>`;

const code3 = `
<d-tag
  size="medium"
  theme="success"
  closable
  @close="MessagePlugin.error('删除成功')"
>
  标签
</d-tag>`;
</script>
