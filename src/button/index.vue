<template>
  <button class="dd-button" v-bind="$attrs" :btnType="type" :size="size">
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
  size: {
    type: String,
    default: "default",
    validator: (value: string) => ["default", "small", "large"].includes(value),
  },
});
</script>
<style lang="less" scoped src="./style/index.less"></style>
