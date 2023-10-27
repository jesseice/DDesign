<!-- 弹窗 -->
<template>
  <Teleport to="body">
    <div class="modal" v-if="visible">
      <div class="modal-mask" @click="maskCloseFn"></div>
      <div class="modal-content" v-bind="$attrs">
        <div class="modal-header">
          <div class="modal-title">
            <slot name="title"></slot>
          </div>
          <div class="modal-closebtn" @click="cancel">
            <slot name="closeBtn">X</slot>
          </div>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
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
const emits = defineEmits(["update:value"]);
const props = defineProps(_props);

const visible = ref(props.value || false);
watch(
  () => props.value,
  () => (visible.value = props.value)
);

const cancel = () => {
  visible.value = false;
  handleValue();
};

const confirm = () => {
  visible.value = false;
};

const maskCloseFn = () => props.maskClose && cancel();

const handleValue = () => emits("update:value", visible.value);
</script>
<style lang="less" scoped src="./style/index.less"></style>
