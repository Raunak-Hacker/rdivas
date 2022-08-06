import { createApp } from 'vue'
import router from "./router.js";
import store from "./store/index.js";

import ClothCard from "./components/category/ClothCard.vue";
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.use(store);
app.component('cloth-card', ClothCard);
app.mount("#app");
