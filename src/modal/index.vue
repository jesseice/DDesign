<!-- 弹窗 -->
<template>
  <Teleport to="body">
    <div class="dd-modal" v-if="visible">
      <div class="dd-modal-mask" v-if="mask" @click="maskCloseFn"></div>
      <div class="dd-modal-content" v-bind="$attrs" :position="position">
        <div class="dd-modal-header">
          <div class="dd-modal-title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div class="dd-modal-closebtn" @click="cancel">
            <slot name="closeBtn">{{ closeBtn }}</slot>
          </div>
        </div>
        <div class="dd-modal-body">
          <slot></slot>
        </div>
        <div class="dd-modal-footer">
          <slot name="footer">
            <div class="btn_wrap">
              <d-button @click="cancel">取消</d-button>
              <d-button type="primary" @click="confirm">确认</d-button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { _props } from "./_config";
const emits = defineEmits(["update:value", "update:modelValue"]);
const props = defineProps(_props);

const visible = ref(props.value || props.modelValue || false);

watch(
  () => props.value,
  () => (visible.value = props.value)
);
watch(
  () => props.modelValue,
  () => (visible.value = props.modelValue)
);

const cancel = () => {
  visible.value = false;
  handleValue();
};

const confirm = () => {
  visible.value = false;
  handleValue();
};

const maskCloseFn = () => props.maskClose && cancel();

const handleValue = () => {
  emits("update:value", visible.value);
  emits("update:modelValue", visible.value);
};
</script>
<style lang="less" scoped src="./style/index.less"></style>
