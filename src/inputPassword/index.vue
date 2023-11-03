<template>
  <Input v-bind="$attrs" :type="inputType">
    <template #suffix>
      <span
        style="cursor: pointer"
        @click="changeType"
        class="icon iconfont"
        :class="
          inputType === 'password' ? 'icon-yanjing-guan' : 'icon-yanjing-kai'
        "
      ></span>
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
