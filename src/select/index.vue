<template>
  <div class="dd-select" :disabled="disabled">
    <Input
      :value="label"
      v-model="inputValue"
      style="width: 100%"
      :disabled="disabled"
      :readonly="!filterable"
      :size="size"
      @click="click"
      @blur="blur"
      @keydown="keydown"
    >
      <template #prefix v-if="multiple">
        <Tag
          v-for="item in labels"
          :key="item.value"
          :size="size"
          @close="close(item.value)"
        >
          {{ item.label }}
        </Tag>
      </template>
      <template #suffix>
        <span
          class="icon iconfont"
          :class="isExpanse ? 'icon-shangla' : 'icon-xiala'"
        >
        </span>
      </template>
    </Input>
    <ul
      class="dd-select-inner"
      :placeholder="placeholder || '请输入'"
      :style="{ width: optionMatchSelectWidth ? '100%' : 'unset' }"
      @click="select"
      @mousemove="mousemove"
      @mouseleave="mouseleave"
    >
      <div class="dd-option-wrap" v-show="isExpanse">
        <slot>
          <Option
            v-for="item in endOptions"
            :key="item[valueKey]"
            :value="item[valueKey]"
            :label="item[labelKey]"
            :active="
              multiple
                ? value.includes(item[valueKey])
                : item[valueKey] === value
            "
          ></Option>
        </slot>
        <Empty v-if="!endOptions.length">
          <slot name="empty"></slot>
        </Empty>
      </div>
      <slot name="option"></slot>
    </ul>
  </div>
</template>
<script setup lang="ts">
import Input from "../input/index.vue";
import Option from "./option.vue";
import Empty from "../empty/index.vue";
import Tag from "../tag/index.vue";

import { computed, ref, watch } from "vue";
import { _props } from "./_config";
import { useValue, closeSelect, useFilter } from "./_utils";

const emits = defineEmits([
  "update:value",
  "update:modelValue",
  "select",
  "change",
]);
const props = defineProps(_props);

const isExpanse = ref(false);
// 传出去的值
const value = useValue(props);

// input输入的值  filterable状态下使用
const inputValue = ref("");

const label = computed(() => {
  if (props.multiple) return "";
  return (
    props.options?.find((item: any) => item.value === value.value)?.label || ""
  );
});
const labels = computed(() => {
  if (props.multiple) {
    return props.options?.filter((item: any) =>
      value.value.includes(item.value)
    );
  }
  return [];
});

// 筛选
const filterFn = useFilter(props.filter);

// 计算筛选后的选项
const endOptions = computed(() => {
  if (!inputValue.value || !props.multiple) {
    return props.options;
  }
  return props.options.filter((option: any) =>
    filterFn(inputValue.value, option)
  );
});
/** 鼠标是否处于options里 */
const mouseOptions = ref(false);
const mousemove = () => (mouseOptions.value = true);
const mouseleave = () => (mouseOptions.value = false);

watch(
  () => props.value,
  () => (value.value = props.value === 0 ? 0 : props.value || undefined)
);
watch(
  () => props.modelValue,
  () =>
    (value.value = props.modelValue === 0 ? 0 : props.modelValue || undefined)
);

// 点击input
const click = () => (isExpanse.value = !isExpanse.value);

// input 失焦
const blur = () => (isExpanse.value = mouseOptions.value);

// 选择li
const select = (e: Event) => {
  copyValue(e);
  // @ts-ignore
  emits("select", e.target?.value);
  // @ts-ignore
  emits("change", e.target?.value);
  click();
};

// 赋值
const copyValue = (e: Event) => {
  // @ts-ignore
  const selectValue = e.target?.value;
  if (props.multiple) {
    if (value.value.includes(selectValue)) {
      value.value = value.value.filter((item: any) => item !== selectValue);
    } else {
      value.value.push(selectValue);
    }
    inputValue.value = "";
  } else {
    value.value = selectValue;
  }
  handleValue();
};

// 删除多选的
const close = (removeValue: any) => {
  closeSelect(removeValue, value);
};

// 删除按键
const keydown = (key: string) => {
  // 删除键 && 多选 && 输入框没输入值 && value内容有值
  if (
    !inputValue.value &&
    props.multiple &&
    ["Backspace", "Delete"].includes(key) &&
    value.value.length
  ) {
    value.value.pop();
  }
};
const handleValue = () => {
  emits("update:value", value.value);
  emits("update:modelValue", value.value);
};
</script>
<style lang="less" scoped src="./style/index.less"></style>
