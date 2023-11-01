export const _props = {
  value: {
    type: String,
    default: "",
  },
  tips: {
    type: String,
    default: "",
  },
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
    validator: (val: string) => ["success", "warning", "error"].includes(val),
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
