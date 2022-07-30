// import router from "../main.js";
// import router from './router'
// import router from "../router.js";

export default {
  getProdList(context, data) {
    context.commit("setProdList", data);
  },
  getProdDetails(context, data) {
    context.commit("setProdDetails", data);
  },
  async addToCart(context, data) {
    await context.commit("addToCart", {
      ...data,
    });
  },

  //register

  async register(context, data) {
    const user = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const register = await fetch(`${context.getters.host}/signup`, user);
    const reponse = await register.json();
    if (reponse.status == 555) {
      const authErr = {
        message: "User already exists",
        error: true,
      };
      context.commit("setAuthError", authErr);
      return;
    } else if (reponse.status === "success") {
      const authTrue = {
        message: null,
        error: false,
      };
      alert("Please verify your mail (check your spam too)");
      context.commit("setAuthError", authTrue);
    } else {
      const authErr = {
        message: "Something went wrong, please try again later",
        error: true,
      };
      context.commit("setAuthError", authErr);
    }
  },

  // login

  async login(context, data) {
    const user = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    };
    const tokenResponse = await fetch(`${context.getters.host}/login`, user);
    const token = await tokenResponse.json();
    if (!tokenResponse.ok) {
      const authErr = {
        message: "Invalid email or password",
        error: true,
      };
      context.commit("setAuthError", authErr);
      return;
    } else if (token.token) {
      localStorage.setItem("token", token.token);
      context.commit("setAuthError", { message: null, error: false });
      context.dispatch("auth", token.token);
      return;
    }
  },
  async auth(context, token) {
    const auth = await fetch(`${context.getters.host}/user/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const authResponse = await auth.json();
    if (authResponse.status === "success") {
      context.commit("setAuth", true);
      context.commit("setAuthError", { message: null, error: false });
      return;
    } else if (authResponse.message === "Unauthorized") {
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
    window.location = "/login";
  },
};
