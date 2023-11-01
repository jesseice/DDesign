<template>
  <li class="dd-option" :value="value">{{ label }}</li>
</template>
<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number],
    default: undefined,
  },
  label: {
    type: String,
    ddefault: "",
  },
});
</script>
<style lang="less" scoped>
.dd-option {
  text-align: center;
  padding: 5px inherit;
}
.dd-option:hover {
  background-color: var(--dd-brand-color-6); /* 自定义背景颜色 */
  color: #fff; /* 自定义文字颜色 */
}
</style>
