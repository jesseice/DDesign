<template>
  <button v-bind="$attrs" :btType="type">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
defineProps({
  // 按钮类型
  type: {
    type: String,
    default: "default",
    validator: (value: string) =>
      ["default", "primary", "success", "warning", "danger"].includes(value),
  },
});
</script>
<style lang="less" scoped src="./style/index.less"></style>
