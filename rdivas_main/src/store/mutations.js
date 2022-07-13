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
  addToCart(state, payload) {
    let item = state.cart.find((item) => item.prodId == payload.prodId);
    if (item) {
      if (item.size != payload.size) {
        item.size = payload.size;
      }
      item.quantity += payload.quantity;
    } else {
      state.cart.push(payload);
    }
    console.log(state.cart);
  },
  removeFromCart(state, payload) {
    let item = state.cart.find((item) => item.prodId == payload);
    state.cart.splice(state.cart.indexOf(item), 1);
  },

  // login/register

  setAuthError(state, payload) {
    state.authError = payload.error;
    state.authMessage = payload.message;
  },
  setToken(state, payload) {
    state.token = payload;
    console.log(state.token);
  },
  setAuth(state, payload) {
    state.auth = payload;
  },
};
