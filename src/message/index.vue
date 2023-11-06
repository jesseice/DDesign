<template>
  <div
    class="dd-message"
    ref="msgRef"
    :type="type"
    @mouseenter="clearTime"
    @mouseleave="setTimer"
  >
    <Icon :name="typeToIcon[type]" class="message_icon" />
    <slot>{{ content }}</slot>
  </div>
</template>
<script setup lang="ts">
import { MessageStatus } from "../utils/contant";
import Icon from "../icons/index.vue";
import { onMounted, ref } from "vue";
const emits = defineEmits(["close"]);
const props = defineProps({
  // 消息类型
  type: {
    type: String,
    default: "info",
    validator: (value: string) => MessageStatus.includes(value),
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
const typeToIcon: any = {
  success: "chenggong",
  warning: "jinggao",
  error: "cuowu",
  info: "tishi_",
};
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
  background-color: #fff;
  display: inline-block;
  transition: all 0.5s;
  .message_icon {
    margin-right: 10px;
  }
}
.dd-message[animation="true"] {
  animation: upDown 0.1s linear;
}
@keyframes upDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.dd-message[type="success"] {
  color: var(--dd-success-base);
  box-shadow: var(--dd-success-base) 0px 2px 8px 0px;
}
.dd-message[type="error"] {
  color: var(--dd-danger-base);
  box-shadow: var(--dd-danger-base) 0px 2px 8px 0px;
}
.dd-message[type="warning"] {
  color: var(--dd-warning-base);
  box-shadow: var(--dd-warning-base) 0px 2px 8px 0px;
}
.dd-message[type="info"] {
  color: var(--dd-primary-base);
  box-shadow: var(--dd-primary-base) 0px 2px 8px 0px;
}
</style>
