<template>
  <div class="dd-message-wrap">
    <Message
      v-for="item in state.messageList"
      :key="item.id"
      :type="item.type"
      :content="item.content"
      :duration="item.duration || 1500"
      :animation="true"
      style="margin: 10px 0"
      @close="close(item.id)"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import Message from "./index.vue";
const props = defineProps<{
  messageList: any[];
}>();

const state = reactive({
  messageList: props.messageList || [],
});

const close = (id: string) => {
  state.messageList = state.messageList.filter((item) => item.id !== id);
};

defineExpose({
  add: (message: any) => {
    state.messageList.push({ ...message, id: `${state.messageList.length}` });
  },
});
</script>
<style lang="less" scoped>
.dd-message-wrap {
  position: fixed;
  transform: translate(-50%, 0);
  left: 50%;
  top: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
