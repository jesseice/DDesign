<template>
  <Code :code-str="code1" title="直接使用" subscribe="v-model">
    <template #demo>
      <d-button @click="open" type="primary">打开弹窗</d-button>
      <d-modal v-model="visible" style="width: 600px" title="弹窗">
        内容
      </d-modal>
    </template>
  </Code>
</template>
<script setup lang="ts">
import Code from "./code.vue";
import { ref } from "vue";
const visible = ref(false);
const code1 = `
<template>
  <div>
    <d-button @click="open" type="primary">打开弹窗</d-button>
    <d-modal v-model:value="visible" title="弹窗"> 内容 </d-modal>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const visible = ref(false);
  const open = () => (visible.value = true);
<\/script>
`;
const open = () => (visible.value = true);
</script>
