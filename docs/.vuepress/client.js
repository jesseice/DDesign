import DDesign from "./ddesign";
import { defineClientConfig } from "@vuepress/client";
import "../../src/style/index.less";

export default defineClientConfig({
  enhance({ app }) {
    app.use(DDesign);
  },
  setup() {
    return { visible: false };
  },
  layouts: {},
  rootComponents: [],
});
