import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state: {
    host: "https://baku.rdivas.in",
    // host: "http://localhost:6969",
    imgHost: "https://files.rdivas.in/",
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    update: false,
    subId: null,
    items: null,
    productList: null,
    productDetails: null,
    filteredProds: [],
    cart: null,
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
