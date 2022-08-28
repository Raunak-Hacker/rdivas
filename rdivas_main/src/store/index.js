import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state: {
    user: null,
    host: "https://baku.rdivas.in",
    // host: "http://localhost:6969",
    imgHost: "https://files.rdivas.in/",
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
    checkout: false,
    cFilter: null,
    pFilter: null,
    fFilter: null,

  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
