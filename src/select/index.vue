<template>
  <div class="dd-select" :size="size" :disabled="disabled">
    <div class="dd-select-wrap">
      <ul
        class="dd-select-inner"
        :placeholder="placeholder || '请输入'"
        :value="value"
        :disabled="disabled"
        @change="change"
        @select="select"
      >
        <slot>
          <Option
            v-for="item in options"
            :key="item[valueKey]"
            :value="item[valueKey]"
            :label="item[labelKey]"
          />
        </slot>
        <slot name="option"></slot>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Option from "./option.vue";
import { _props } from "./_config";

const emits = defineEmits(["update:value", "select", "change"]);
const props = defineProps(_props);

const value = ref<string | number | undefined>(props.value || undefined);

watch(
  () => props.value,
  () => {
    value.value = props.value || undefined;
  }
);

const change = (e: Event) => {
  copyValue(e);
  emits("change", e.target?.value);
};
const select = (e: Event) => {
  copyValue(e);
  emits("select", e.target?.value);
};

const copyValue = (e: Event) => {
  value.value = e.target?.value;
  handleValue();
};

const handleValue = () => {
  emits("update:value", value.value);
};
</script>
<style lang="less" scoped src="./style/index.less"></style>
