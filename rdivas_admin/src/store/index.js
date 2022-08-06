import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
  state: {
    authError: false,
    authMessage: null,
    auth: false,
    host: "https://baku.rdivas.in/admin/",
    // host: "http://localhost:6969/admin/",
    logHost: "https://baku.rdivas.in/",
    imgHost: "https://files.rdivas.in/",
    token: null,
    sel: false,
    filteredProducts: [],
    selManage: null,
    url: null,
    products: [],
    header: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgzMzM0OCwiZXhwIjoxNjU4OTE5NzQ4fQ.KZgoBbsDKNtNLG-VjllZtFU4vTI3lMbdz8QsXWnCqfE",
      },
    },
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
