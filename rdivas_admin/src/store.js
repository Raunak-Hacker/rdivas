import { createStore } from "vuex";

const store = createStore({
  state: {
    authError: false,
    authMessage: null,
    auth: false,
    // host: "https://baku.rdivas.in",
    host: "https://baku.rdivas.in/admin/",
    logHost: "https://baku.rdivas.in/",
    token: null,
    header: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgzMzM0OCwiZXhwIjoxNjU4OTE5NzQ4fQ.KZgoBbsDKNtNLG-VjllZtFU4vTI3lMbdz8QsXWnCqfE",
      },
    },
  },
  mutations: {
    setAuthError(state, payload) {
      state.authError = payload.error;
      state.authMessage = payload.message;
    },
    setAuth(state, payload) {
      state.auth = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async auth(context, token) {
      const auth = await fetch(`${context.getters.host}user/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const authResponse = await auth.json();
      if (authResponse.status === "success") {
        context.commit("setAuth", true);
        context.commit("setAuthError", { message: null, error: false });
        context.commit("setToken", token);
        return;
      } else if (authResponse.status !== "success") {
        const authErr = {
          message: "Unauthorized",
          error: true,
        };
        context.commit("setAuthError", authErr);
        return context.dispatch("logout");
      }
    },

    async autoLogin(context) {
      const token = localStorage.getItem("token");
      if (token) {
        context.dispatch("auth", token);
      } else return;
    },

    //   logout
    async logout(context) {
      localStorage.removeItem("token");
      context.commit("setAuth", false);
    },
  },
  getters: {
    host: (state) => state.host,
    logHost: (state) => state.logHost,
    header: (state) => state.header,
    token: (state) => state.token,
    auth: (state) => state.auth,
    authError: (state) => state.authError,
    authMessage: (state) => state.authMessage,
  },
});

export default store;
