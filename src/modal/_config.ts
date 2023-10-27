export const _props = {
  value: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  maskClose: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    default: "top",
    validator: (val: string) => {
      return ["center", "top"].includes(val);
    },
  },
  mask: {
    type: Boolean,
    default: true,
  },
  closeBtn: {
    type: String,
    default: "X",
  },
};
