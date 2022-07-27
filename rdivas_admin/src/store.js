import { createStore } from "vuex";

const store = createStore({
  state: {
    // host: "https://baku.rdivas.in",
    host: "http://localhost:6969/admin/",
    token: "",
    header: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgzMzM0OCwiZXhwIjoxNjU4OTE5NzQ4fQ.KZgoBbsDKNtNLG-VjllZtFU4vTI3lMbdz8QsXWnCqfE",
      },
    },
  },
  mutations: {},
  actions: {},
  getters: {
    host: (state) => state.host,
    header: (state) => state.header,
  },
});

export default store;
