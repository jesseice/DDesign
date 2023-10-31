import modal from "./modal/index.vue";
import button from "./button/index.vue";
import space from "./space/index.vue";
import message from "./message/index.vue";

import { type App } from "vue";
const components: any = {
  button,
  modal,
  space,
  message,
};

Object.keys(components).forEach((key: string) => {
  components[key].install = (app: App) => {
    app.component(`d-${key}`, components[key]);
  };
});

export const Button = button;
export const Modal = modal;
export const Space = space;
export const Message = message;
