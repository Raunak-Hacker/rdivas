export default {
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
  setProducts(state, payload) {
    state.products = payload;
  },
  setSel(state, payload) {
    state.sel = payload;
  },
  fetchStuff(state, payload) {
    console.log("fetching stuff");
    fetch(payload, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        state.products = data;
        state.sel = true;
        console.log(data);
      });
    console.log("fetched stuff");
    // context.commit("setProducts", res);
    // context.commit("setSel", true);
  },

  addCat(state, data) {
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
    fetch(state.host + "add/" + data.cat.sel, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
      body: JSON.stringify(add),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          this.commit("fetchStuff", data.url);
        }
      });

    // context.dispatch("fetchStuff", data.url);
    // const response = await fetch(data.url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + state.token,
    //   },
    // });
    // const res = await response.json();
    // context.commit("setProducts", res);
  },
};
