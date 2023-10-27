import modal from "./modal/index.vue";
import button from "./button/index.vue";
import { type App } from "vue";

const components: any = {
  button,
  modal,
};

const install = (app: App<HTMLElement>) => {
  Object.keys(components).forEach((key: string) => {
    app.component(`d-${key}`, components[key]);
  });
};
export default { install };
