import App from "./App.vue";

import { createApp } from "vue";
import ddesign from "../../src/index";
import "../../src/style/index.less";
createApp(App).use(ddesign).mount("#app");
