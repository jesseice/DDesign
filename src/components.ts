import modal from "./modal/index.vue";
import button from "./button/index.vue";
import space from "./space/index.vue";
import message from "./message/index.vue";
import input from "./input/index.vue";
import inputNumber from "./inputNumber/index.vue";
import inputPassword from "./inputPassword/index.vue";
import select from "./select/index.vue";

import { type App } from "vue";
import { replaceUpperCaseWithDashAndLowercase } from "./utils";

const components: any = {
  button,
  modal,
  space,
  message,
  input,
  inputNumber,
  inputPassword,
  select,
};

Object.keys(components).forEach((key: string) => {
  components[key].install = (app: App) => {
    const k = replaceUpperCaseWithDashAndLowercase(key);
    app.component(`d${k}`, components[key]);
  };
});

export const Button = button;
export const Modal = modal;
export const Space = space;
export const Message = message;
export const Input = input;
export const InputNumber = inputNumber;
export const InputPassword = inputPassword;
export const Select = select;
