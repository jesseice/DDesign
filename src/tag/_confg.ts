export const _props = {
  size: {
    type: String,
    default: "small",
    validator: (val: any) => ["small", "medium", "large"].includes(val),
  },
  theme: {
    type: String,
    default: "default",
    validator: (val: any) =>
      ["default", "primary", "warning", "danger", "success"].includes(val),
  },
  variant: {
    type: String,
    default: "default",
    validator: (val: any) =>
      ["default", "light", "outline", "light-outline"].includes(val),
  },
  closable: {
    type: Boolean,
    default: false,
  },
};
