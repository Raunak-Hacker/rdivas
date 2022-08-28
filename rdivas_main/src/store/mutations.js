export default {
  setProdList(state, payload) {
    state.productList = payload;
    state.filteredProds = payload.products;
  },
  setProdDetails(state, payload) {
    state.productDetails = payload;
  },
  filterByColor(state, payload) {
    state.cFilter = payload;

    let a = state.cFilter;
    let b = state.fFilter;
    let c = state.pFilter;
    if ((a && b) || (a && c) || (b && c)) {
      return this.commit("moreFilter");
    }
    state.filteredProds = state.productList.products.filter(
      (product) => product.color == payload
    );
  },
  filterByFabric(state, payload) {
    state.fFilter = payload;
    let a = state.cFilter;
    let b = state.fFilter;
    let c = state.pFilter;
    if ((a && b) || (a && c) || (b && c)) {
      return this.commit("moreFilter");
    }
    state.filteredProds = state.productList.products.filter(
      (product) => product.fabric == payload
    );
  },
  filterByPrice(state, payload) {
    state.pFilter = payload;
    let a = state.cFilter;
    let b = state.fFilter;
    let c = state.pFilter;
    if ((a && b) || (a && c) || (b && c)) {
      return this.commit("moreFilter");
    }
    let price = parseInt(payload);
    state.filteredProds = state.productList.products.filter(
      (product) => product.sellingPrice <= price
    );
  },
  moreFilter(state) {
    let a = state.cFilter;
    let b = state.fFilter;
    let c = state.pFilter;

    let prods = state.productList.products;
    for (let i = 0; i < prods.length; i++) {
      prods[i].sellingPrice = Number(prods[i].sellingPrice);
    }
    if (a && b && !c) {
      state.filteredProds = prods.filter(
        (product) => product.color == a && product.fabric == b
      );
    } else if (a && c && !b) {
      state.filteredProds = prods.filter(
        (product) => product.color == a && product.sellingPrice <= c
      );
    } else if (b && c && !a) {
      state.filteredProds = prods.filter(
        (product) => product.fabric == b && product.sellingPrice <= c
      );
    } else if (a && b && c) {
      state.filteredProds = prods.filter(
        (product) =>
          product.color == a && product.fabric == b && product.sellingPrice <= c
      );
    }
  },
  sortProducts(state, payload) {
    if (payload == "lth") {
      state.filteredProds.sort((a, b) => a.sellingPrice - b.sellingPrice);
    } else if (payload == "htl") {
      state.filteredProds.sort((a, b) => b.sellingPrice - a.sellingPrice);
    } else if (payload == "Rating") {
      state.filteredProds.sort((a, b) => b.rating - a.rating);
    }
  },
  setSize(state, payload) {
    if (payload == "s") {
      state.s = true;
    } else if (payload == "m") {
      state.m = true;
    } else if (payload == "l") {
      state.l = true;
    } else if (payload == "xl") {
      state.xl = true;
    } else if (payload == "xxl") {
      state.xxl = true;
    }
  },
  // addToCart(state, payload) {
  //   let item = {
  //     productId: payload.prodId,
  //     quantity: payload.quantity,
  //     productSize: payload.size,
  //     productColor: payload.color,
  //   };
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //     body: JSON.stringify(item),
  //   };
  //   fetch(`${state.host}/user/editroduct`, requestOptions).then(
  //     this.commit("getCart")
  //   );
  // },
  getCart(state) {
    fetch(`${state.host}/user/getcart/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        state.items = data.cartProducts;
        state.cart = data;
      });
  },
  setUpdate(state, payload) {
    state.update = payload;
  },
  // removeFromCart(state, payload) {
  //   let item = state.cart.find((item) => item.prodId == payload);
  //   state.cart.splice(state.cart.indexOf(item), 1);
  // },
  // addToWishList(state, payload) {
  //   let item = state.wishlist.find((item) => item.id == payload.id);
  //   if (!item) {
  //     state.wishlist.push(payload);
  //   }
  // },
  getWishList(state) {
    fetch(`${state.host}/user/wishlist`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        state.wishlist = data.products;
      });
  },
  getUser(state) {
    const fet = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(state.host + "/user/", fet)
      .then((response) => response.json())
      .then((data) => {
        state.user = data;
      });
  },

  // login/register

  setAuthError(state, payload) {
    state.authError = payload.error;
    state.authMessage = payload.message;
  },
  setAuth(state, payload) {
    state.auth = payload;
  },
};
