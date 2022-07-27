import { createStore } from "vuex";

const store = createStore({
  state: {
    // host: "https://baku.rdivas.in",
    host: 'https://baku.rdivas.in/admin/',
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODkxOTkwOCwiZXhwIjoxNjU5MDA2MzA4fQ.Y30UmC8CFf9BqK3geip8eH_bPZDuShqJK5RNPdLnf9g",
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
    token: (state) => state.token,
  },
});

export default store;
