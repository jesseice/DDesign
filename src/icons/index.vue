<template>
  <span
    class="icon iconfont"
    :class="`icon-${name}`"
    v-bind="$attrs"
    :style="{ color: color || undefined }"
  ></span>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
});
</script>
