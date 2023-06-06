import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { lazyplugin } from "@/directives/index";
import piniapluginpersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import { getcategory } from "@/apis/testAPI";
import { componentPlugin } from "@/components";
getcategory().then((res) => {
  console.log(res);
});
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniapluginpersistedstate);
app.use(pinia);
app.use(router);
app.use(lazyplugin);
app.use(componentPlugin);
app.mount("#app");
