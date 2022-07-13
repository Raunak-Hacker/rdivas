import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state: {
    host: "https://baku.rdivas.in",
    productList: null,
    productDetails: null,
    filteredProds: [],
    cart: [],
    authError: false,
    authMessage: null,
    token: null,
    auth: false,
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
