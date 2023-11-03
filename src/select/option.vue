<template>
  <li class="dd-option" :class="{ active }" :value="value">
    {{ label }}
  </li>
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
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="less" scoped>
.dd-option {
  text-align: center;
  padding: 5px 10px;
}
.dd-option:hover {
  background-color: var(--dd-brand-color-1); /* 自定义背景颜色 */
  color: var(--dd-brand-color-7); /* 自定义文字颜色 */
}
.active {
  background-color: var(--dd-brand-color-1); /* 自定义背景颜色 */
  color: var(--dd-brand-color-7); /* 自定义文字颜色 */
}
</style>
