export default {
  host: (state) => state.host,
  productList: (state) => state.productList,
  productDetails: (state) => state.productDetails,
  filteredProds: (state) => state.filteredProds,
  cart: (state) => state.cart,
  authError: (state) => state.authError,
  authMessage: (state) => state.authMessage,
  isAuth: (state) => state.auth,
  wishlist: (state) => state.wishlist,
};
