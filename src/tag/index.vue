<template>
  <span style="display: inline-block">
    <span class="dd-tag" :theme="theme" :variant="variant" :size="size">
      <slot name="icon"></slot>
      <span style="margin: 0 7px">
        <slot></slot>
      </span>
      <span class="dd-close" v-if="closable">
        <span
          class="icon iconfont icon-guanbi_o"
          @click="emits('close')"
        ></span>
      </span>
    </span>
  </span>
</template>
<script setup lang="ts">
import { _props } from "./_confg";
defineProps(_props);
const emits = defineEmits(["close"]);
</script>
<style lang="less" scoped src="./style/index.less"></style>
