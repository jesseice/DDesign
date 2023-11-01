import App from "./App.vue";

import { createApp } from "vue";
// @ts-ignore
// import ddesign from "@dist/index";
// import "@dist/style.css";
import ddesign from "../../src/index";
import "../../src/style/index.less";

createApp(App).use(ddesign).mount("#app");
