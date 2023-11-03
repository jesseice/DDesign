export const _props = {
  value: {
    type: [String, Number, Array],
    default: "",
  },
  modelValue: {
    type: [String, Number, Array],
    default: "",
  },
  options: {
    type: Array as any,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: "label",
  },
  valueKey: {
    type: String,
    default: "value",
  },
  size: {
    type: String,
    default: "medium",
    validator: (val: string) => ["small", "large"].includes(val),
  },
  placeholder: {
    type: String,
    default: "请输入",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 选项是否与select框同宽
   */
  optionMatchSelectWidth: {
    type: Boolean,
    default: true,
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  filter: {
    type: () => Boolean,
    default: undefined,
  },
  multiple: {
    type: Boolean,
  },
};
