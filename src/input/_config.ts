import { InputType } from "../utils/contant";
export const _props = {
  value: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (val: string) => InputType.includes(val),
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
  readonly: {
    type: Boolean,
    default: false,
  },
};
