<template>
  <div style="margin: 10px 0">
    <d-button @click="open" type="primary">打开弹窗</d-button>
    <d-modal v-model:value="visible" style="width: 600px" title="弹窗">
      内容
    </d-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref(false);
const open = () => (visible.value = true);
</script>
