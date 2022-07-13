export default {
  getProdList(context, data) {
    context.commit("setProdList", data);
    // const list = context.getters.productList;
    // console.log(list);
  },
  getProdDetails(context, data) {
    context.commit("setProdDetails", data);
  },
  addToCart(context, data) {
    // everytime this action is called, the itemId will be incremented
    // so that the next item will be added to the cart
    context.commit("addToCart", {
      ...data,
    });
  },

  // login/register

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
      context.commit("setToken", token.token);
      localStorage.setItem("token", token.token);
      console.log(localStorage.getItem("token"));
      context.commit("setAuthError", { message: null, error: false });
    }
    context.dispatch("auth");
  },
  async auth(context) {
    let auth = await fetch(`${context.getters.host}/user/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.getters.token}`,
      },
    });
    if (localStorage.getItem("token")) {
      auth = await fetch(`${context.getters.host}/user/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    }
    const authResponse = await auth.json();
    if (!authResponse.status === "success") {
      localStorage.removeItem("token");
      const authErr = {
        message: "Unauthorized",
        error: true,
      };
      context.commit("setAuthError", authErr);
      return;
    } else if (authResponse.status === "success") {
      context.commit("setAuth", true);
      context.commit("setAuthError", { message: null, error: false });
    }
  },

  //   logout
  async logout(context) {
    localStorage.removeItem("token");
    context.commit("setAuth", false);
    context.commit("setToken", null);
  },
};
