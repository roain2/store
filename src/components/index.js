import imgviews from "./imgviews/index.vue";
import xtxsku from "./XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    app.component("imgviews", imgviews);
    app.component("xtxsku", xtxsku);
  },
};
