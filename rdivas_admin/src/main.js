import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import LoginPage from "./components/LoginPage.vue";
import TheSidebar from '@/components/TheSidebar.vue'
import DashboardPage from './pages/DashboardPage.vue'
import ManagePage from './pages/ManagePage.vue'
import OrdersPage from './pages/OrdersPage.vue'
import CommentsPage from './pages/CommentsPage.vue'
import HomePage from './pages/HomePage.vue'
import CompPage from "./pages/CompPage.vue";
import MailPage from "./pages/MailPage.vue";
// import imageCompressor from 'vue-image-compressor'

const app = createApp(App);

app.use(store);
// app.use(imageCompressor)
app.component('the-sidebar', TheSidebar);
app.component('dashboard-page', DashboardPage);
app.component('home-page', HomePage);
app.component('manage-page', ManagePage);
app.component('comments-page', CommentsPage);
app.component('orders-page', OrdersPage);
app.component('login-page', LoginPage);
app.component('comp-page', CompPage);
app.component('mail-page', MailPage);
app.mount("#app");