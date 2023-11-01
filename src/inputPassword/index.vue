<template>
  <Input v-bind="$attrs" :type="inputType">
    <template #suffix>
      <span style="cursor: pointer" @click="changeType">
        <!-- TODO icon替换 -->
        {{ inputType === "password" ? "L" : "O" }}
      </span>
    </template>
  </Input>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Input from "../input/index.vue";
const inputType = ref("password");
const changeType = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};
</script>
