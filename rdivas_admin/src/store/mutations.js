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
  filterProducts(state, payload) {
    if (payload.length > 0) {
      state.filteredProducts = state.products.filter((product) => {
        return product.name.toLowerCase().includes(payload.toLowerCase());
      });
    } else {
      state.filteredProducts = state.products;
    }
  },
  setFilterProducts(state) {
    state.filteredProducts = state.products;
  },
};
