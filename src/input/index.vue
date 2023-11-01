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
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        @change="change"
        @input="input"
        @focus="focus"
        @blur="blur"
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

const emits = defineEmits(["update:value", "change", "input", "focus", "blur"]);
const props = defineProps(_props);
const inputWrap: any = ref(null);
watch(
  () => props.value,
  () => {
    state.value = props.value || "";
    handleValue();
  }
);
const state = reactive({
  value: props.value || "",
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
};
</script>
<style lang="less" scoped src="./style/index.less"></style>
