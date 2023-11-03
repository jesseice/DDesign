<template>
  <button
    class="dd-button"
    v-bind="$attrs"
    :btnType="type"
    :size="size"
    :loading="loading"
    @click="click"
  >
    <div style="display: flex; align-items: center; gap: 5px">
      <Loading v-if="loading" />
      <slot></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import Loading from "./loading.vue";
const emits = defineEmits(["click"]);

const props = defineProps({
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
  loading: {
    type: Boolean,
    default: false,
  },
});

const click = () => {
  !props.loading && emits("click");
};
</script>
<style lang="less" scoped src="./style/index.less"></style>
