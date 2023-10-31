// MD 文档需要展示的组件
import buttonDemo from "./components/buttonDemo.vue";
import modalDemo from "./components/modalDemo.vue";
import spaceDemo from "./components/spaceDemo.vue";
import messageDemo from "./components/messageDemo.vue";

// 组件库组件
import ddesign from "../../src/index";
import { type App } from "vue";

const components: any = {
  buttonDemo,
  modalDemo,
  spaceDemo,
  messageDemo,
};
const install = ddesign.install;
ddesign.install = (app: App) => {
  install(app);
  Object.keys(components).forEach((key: string) => {
    app.component(`d-${key}`, components[key]);
  });
};
export default ddesign;
