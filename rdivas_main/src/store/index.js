import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state: {
    // host: "https://baku.rdivas.in",
    host: "http://localhost:6969",
    productList: null,
    productDetails: null,
    filteredProds: [],
    cart: [],
    wishlist: [],
    authError: false,
    authMessage: null,
    auth: false,
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
