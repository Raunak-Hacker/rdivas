import { createApp } from "vue";
import App from "./App.vue";
import store from "./store.js";
import TheSidebar from '@/components/TheSidebar.vue'
import DashboardPage from './pages/DashboardPage.vue'
import ManagePage from './pages/ManagePage.vue'
import OrdersPage from './pages/OrdersPage.vue'
import CommentsPage from './pages/CommentsPage.vue'
import AnalyticsPage from './pages/AnalyticsPage.vue'

const app = createApp(App);

app.use(store);
app.component('the-sidebar', TheSidebar);
app.component('dashboard-page', DashboardPage);
app.component('analytics-page', AnalyticsPage);
app.component('manage-page', ManagePage);
app.component('comments-page', CommentsPage);
app.component('orders-page', OrdersPage);
app.mount("#app");