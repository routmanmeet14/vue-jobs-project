import "./assets/main.css";
import router from "./router";

import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(Toast);
app.use(router);
app.mount("#app");
