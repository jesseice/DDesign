import "./style/index.less";
import { type App } from "vue";
import * as components from "./components";
import { replaceUpperCaseWithDashAndLowercase } from "./utils";
export * from "./components";
export * from "./plugin";

const install = (app: App) => {
  Object.keys(components).forEach((key: string) => {
    const k = replaceUpperCaseWithDashAndLowercase(key);
    // @ts-ignore
    app.component(`d${k}`, components[key]);
  });
};

export default { install };
