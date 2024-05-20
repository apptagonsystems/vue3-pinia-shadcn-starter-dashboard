import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import axios from "axios";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import "./assets/index.css";

import router from "./router/index";
import App from "./App.vue";
import { AUTH_TOKEN } from "./utils/Constants.ts";

axios.defaults.baseURL = "";

// Request interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Vue3Toasity, { autoClose: 300 });
app.config.globalProperties.$axios = axios;

app.mount("#app");
