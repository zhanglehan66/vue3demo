import { createSSRApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import  pinia  from "./store/modules/index";

const app = createSSRApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
