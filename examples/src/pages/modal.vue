<template>
  <div>
    <d-button @click="open" type="primary">打开</d-button>
    <d-modal v-model:value="state.visible" style="width: 600px" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  visible: false,
});
const open = () => (state.visible = true);
</script>
