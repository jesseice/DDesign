<template>
  <span class="icon iconfont" :class="`icon-${name}`"></span>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>
