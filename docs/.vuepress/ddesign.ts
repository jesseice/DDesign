import modal from "../../src/modal/index.vue";
import modal1 from "./components/modal1.vue";
import button from "../../src/button/index.vue";
import { type App } from "vue";

const components: any = {
  button,
  modal1,
  modal,
};

const install = (app: App<HTMLElement>) => {
  Object.keys(components).forEach((key: string) => {
    app.component(`d-${key}`, components[key]);
  });
};
export default { install };
