import { createApp } from 'vue'
import router from "./router.js";

import ClothCard from "./components/ui/ClothCard.vue";
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.component('cloth-card', ClothCard);
app.mount("#app");
