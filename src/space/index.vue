<template>
  <div class="dd-space" v-bind="props" :style="renderStyle">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { PropType, computed } from "vue";
import { DdSpaceProps } from "./type.";

const props = defineProps({
  direction: {
    type: String as PropType<DdSpaceProps["direction"]>,
    default: "horizontal",
    validator: (val: string) => ["horizontal", "vertical"].includes(val),
  },
  align: {
    type: String as PropType<DdSpaceProps["align"]>,
    default: "",
    validator: (val: string) =>
      ["start", "center", "end", "baseline"].includes(val),
  },
  size: {
    type: [String, Number, Array] as PropType<DdSpaceProps["size"]>,
    default: "medium",
  },
  breakLine: Boolean,
});
const renderStyle = computed(() => {
  const sizeMap = { small: "8px", medium: "16px", large: "24px" };
  const { size } = props;
  let renderGap = "";
  if (typeof size === "string") {
    renderGap = sizeMap[size];
  } else if (typeof size === "number") {
    renderGap = size + "px";
  }
  return {
    gap: renderGap,
    ...(props.breakLine ? { "flex-wrap": "wrap" } : {}),
  };
});
</script>
<style lang="less" scoped src="./style/index.less"></style>
