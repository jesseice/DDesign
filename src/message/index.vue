<template>
  <div
    class="dd-message"
    ref="msgRef"
    :type="type"
    @mouseenter="clearTime"
    @mouseleave="setTimer"
  >
    <slot>{{ content }}</slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const emits = defineEmits(["close"]);
const props = defineProps({
  // 消息类型
  type: {
    type: String,
    default: "info",
    validator: (value: string) =>
      ["success", "warning", "error", "info"].includes(value),
  },
  content: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 0,
  },
});
const timer = ref();
const msgRef: any = ref(null);
onMounted(() => {
  props.duration && setTimer();
});
const clearTime = () => props.duration && clearTimeout(timer.value);
const setTimer = () => {
  if (!props.duration) {
    return;
  }
  timer.value = setTimeout(() => {
    clearTime();
    const msgDom = msgRef.value as HTMLElement;
    if (msgDom) {
      msgDom.style.display = "none";
      emits("close");
    }
  }, props.duration);
};
</script>
<style lang="less" scoped>
.dd-message {
  padding: 7px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  min-width: 160px;
  text-align: center;
  color: #fff;
}
.dd-message[type="success"] {
  background-color: var(--dd-success-base);
}
.dd-message[type="error"] {
  background-color: var(--dd-danger-base);
}
.dd-message[type="warning"] {
  background-color: var(--dd-warning-base);
}
.dd-message[type="info"] {
  background-color: var(--dd-primary-base);
}
</style>
