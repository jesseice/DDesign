<template>
  <Code :code-str="code1" title="基础用法">
    <template #subscribe>最基础使用</template>
    <template #demo>
      <d-input v-model:value="value" />
    </template>
  </Code>
  <Code :code-str="code2" title="尺寸">
    <template #subscribe>
      尺寸：<template v-for="item in sizes" :key="item">
        <code>{{ item }}</code>
        &nbsp;
      </template>
      默认：<code>medium</code>
    </template>
    <template #demo>
      <d-space direction="vertical" style="width: 200px">
        <d-input size="small" placeholder="小号输入框" />
        <d-input placeholder="默认尺寸输入框" />
        <d-input size="large" placeholder="大号输入框" />
      </d-space>
    </template>
  </Code>
  <Code :code-str="code3" title="状态，提示语">
    <template #subscribe>
      状态：<template v-for="item in status" :key="item">
        <code>{{ item }}</code>
        &nbsp;
      </template>
      默认：<code>undefined</code>
      提示语使用属性：
      <code>tips</code>
    </template>
    <template #demo>
      <d-space style="margin-bottom: 20px">
        <d-space direction="vertical" :size="30">
          <d-input />
          <d-input status="success" tips="成功" />
        </d-space>
        <d-space direction="vertical" :size="30">
          <d-input status="warning" tips="警告" />
          <d-input status="error" tips="错误" />
        </d-space>
      </d-space>
    </template>
  </Code>
  <Code :code-str="code4" title="前后缀">
    <template #subscribe>
      <code>prefix</code>
      <code>suffix</code>
      可插槽、可prop传入
    </template>
    <template #demo>
      <d-space align="center">
        <d-input prefix="充值" suffix="个币" placeholder="prop方式" />
        <d-input placeholder="插槽方式">
          <template #prefix>插槽</template>
          <template #suffix>个币</template>
        </d-input>
      </d-space>
    </template>
  </Code>
  <Code :code-str="code5" title="数字输入框">
    <template #subscribe> type：<code>number</code> </template>
    <template #demo>
      <d-input-number />
    </template>
  </Code>
  <Code :code-str="code6" title="密码输入框">
    <template #subscribe> type：<code>password</code> </template>
    <template #demo>
      <d-input-password />
    </template>
  </Code>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Code from "./code.vue";

const sizes = ["small", "medium", "large"];
const status = ["success", "error", "warning"];
const code1 = `<d-input v-model:value="value" />`;
const code2 = `
<d-space direction="vertical" style="width: 200px">
  <d-input size="small" placeholder="小号输入框" />
  <d-input placeholder="默认尺寸输入框" />
  <d-input size="large" placeholder="大号输入框" />
</d-space>`;
const code3 = `
<d-space style="margin-bottom: 20px">
  <d-space direction="vertical" style="width: 200px" :size="30">
    <d-input />
    <d-input status="success" tips="成功" />
  </d-space>
  <d-space direction="vertical" style="width: 200px" :size="30">
    <d-input status="warning" tips="警告" />
    <d-input status="error" tips="错误" />
  </d-space>
</d-space>`;
const code4 = `
<d-space align="center">
  <d-input prefix="充值：" suffix="个币" placeholder="prop方式" />
  <d-input placeholder="插槽方式">
    <template #prefix>充值：</template>
    <template #suffix>个币</template>
  </d-input>
</d-space>`;
const code5 = `<d-input-number />`;
const code6 = `<d-input-password />`;
const value = ref("");
</script>
