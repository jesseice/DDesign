export const _props = {
  value: {
    type: [String, Number],
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
};
