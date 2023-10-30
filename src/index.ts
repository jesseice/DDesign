import "./style/index.less";
import { type App } from "vue";
import * as components from "./components";
export * from "./components";

const install = (app: App) => {
  Object.keys(components).forEach((key: string) => {
    const k = key.toLocaleLowerCase();
    // @ts-ignore
    app.component(`d-${k}`, components[key]);
  });
};

export default { install };
