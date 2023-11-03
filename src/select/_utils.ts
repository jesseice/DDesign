import { Ref, ref } from "vue";

/** 初始化value的值 */
export const useValue = (props: any) => {
  let result;
  const value = props.value || props.modelValue;
  if (props.multiple) {
    result = Array.isArray(value) ? value : value ? [value] : [];
  } else {
    result = value || "";
  }
  return ref(result);
};

// 删除选中的
export const closeSelect = (value: any, target: Ref) => {
  target.value = target.value.filter((item: any) => item !== value);
};

// 筛选值
type optionsType = {
  label: string;
  value: string | number;
};
export const useFilter = (callback?: () => boolean) =>
  callback
    ? callback
    : (search: string, option: optionsType) =>
        option.label.indexOf(search) !== -1;
