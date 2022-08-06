// import { nullableTypeAnnotation } from "@babel/types";

export default {
  setProdList(state, payload) {
    state.productList = payload;
    state.filteredProds = payload.products;
  },
  setProdDetails(state, payload) {
    state.productDetails = payload;
  },
  filterByColor(state, payload) {
    state.filteredProds = state.productList.products.filter(
      (product) => product.color == payload
    );
  },
  filterByFabric(state, payload) {
    state.filteredProds = state.productList.products.filter(
      (product) => product.fabric == payload
    );
  },
  filterByPrice(state, payload) {
    const price = parseInt(payload);
    console.log(price);
    state.filteredProds = state.productList.products.filter(
      (product) => product.sellingPrice <= price
    );
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
  addToCart(state, payload) {
    let item = {
      productId: payload.prodId,
      quantity: payload.quantity,
      productSize: payload.size,
      productColor: payload.color,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(item),
    };
    fetch(`${state.host}/user/editroduct`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          this.commit("getCart");
        }
      });
  },
  getCart(state) {
    fetch(`${state.host}/user/getcart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        state.items = data.cartProducts;
        state.cart = data;
        console.log(data);
      });
  },
  setUpdate(state, payload) {
    state.update = payload;
  },
  removeFromCart(state, payload) {
    let item = state.cart.find((item) => item.prodId == payload);
    state.cart.splice(state.cart.indexOf(item), 1);
  },
  addToWishList(state, payload) {
    let item = state.wishlist.find((item) => item.id == payload.id);
    if (!item) {
      state.wishlist.push(payload);
    }
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
