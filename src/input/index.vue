<template>
  <div
    class="dd-input"
    ref="inputWrap"
    :size="size"
    :status="status"
    :disabled="disabled"
  >
    <div class="dd-input-wrap">
      <div class="dd-input-prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </div>
      <input
        class="dd-input-inner"
        :value="state.value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @change="change"
        @input="input"
        @focus="focus"
        @blur="blur"
        @keydown="keydown"
      />
      <div class="dd-input-suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </div>
    </div>
    <div class="dd-tips">{{ tips }}</div>
  </div>
</template>
<script setup lang="ts">
import { _props } from "./_config";
import { reactive, ref, watch } from "vue";

const emits = defineEmits([
  "update:value",
  "update:modelValue",
  "change",
  "input",
  "focus",
  "blur",
  "keydown",
]);
const props = defineProps(_props);
const inputWrap: any = ref(null);
watch(
  () => props.value,
  () => {
    state.value = props.value || "";
    handleValue();
  }
);
watch(
  () => props.modelValue,
  () => {
    state.value = props.modelValue || "";
    handleValue();
  }
);
const state = reactive({
  value: props.value || props.modelValue || "",
});

const change = (e: any) => {
  emits("change", e.target.value);
};
const focus = (e: any) => {
  inputWrap.value.classList.add("dd-inputfocus");
  emits("focus", e.target.value);
};
const blur = (e: any) => {
  inputWrap.value.classList.remove("dd-inputfocus");
  emits("blur", e.target.value);
};
const input = (e: any) => {
  state.value = e.target.value;
  handleValue();
  emits("input", state.value);
};
const handleValue = () => {
  emits("update:value", state.value);
  emits("update:modelValue", state.value);
};

const keydown = (e: KeyboardEvent) => {
  emits("keydown", e.key);
};
</script>
<style lang="less" scoped src="./style/index.less"></style>
