export default {
  async fetchStuff(context, data) {
    const response = await fetch(data, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + context.getters.token,
      },
    });
    const res = await response.json();
    context.commit("setProducts", res);
    context.commit("setSel", true);
  },

  async addCat(context, data) {
    let add = {
      name: data.cat.name,
    };
    if (data.cat.colorCode) {
      add = {
        name: data.cat.name,
        colorCode: data.cat.colorCode,
      };
    }
    console.log(data.cat);
    await fetch(context.getters.host + "add/" + data.cat.sel, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + context.getters.token,
      },
      body: JSON.stringify(add),
    });
    // context.dispatch("fetchStuff", data.url);

    const response = await fetch(data.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + context.getters.token,
      },
    });
    const res = await response.json();
    context.commit("setProducts", res);
  },

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
};
