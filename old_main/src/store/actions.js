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
      localStorage.setItem("token", token.token);
      context.commit("setAuthError", { message: null, error: false });
      return;
    }
    context.dispatch("auth", token.token);
    console.log(token);
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
    window.location.reload();
  },
};
