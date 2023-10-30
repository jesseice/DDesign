import App from "./App.vue";

import { createApp } from "vue";
// @ts-ignore
import ddesign from "@dist/index";
import "@dist/style.css";

createApp(App).use(ddesign).mount("#app");
