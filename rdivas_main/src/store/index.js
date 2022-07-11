import { createStore } from "vuex";

const store = createStore({
  state: {
    host: "https://baku.rdivas.in",
    productList: null,
    productDetails: null,
    filteredProds: [],
  },
  mutations: {
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
    }
  },
  actions: {
    getProdList(context, data) {
      context.commit("setProdList", data);
    },
    async getProdDetails(context, data) {
      context.commit("setProdDetails", data);
    },
  },
  getters: {
    host: (state) => state.host,
    productList: (state) => state.productList,
    productDetails: (state) => state.productDetails,
    filteredProds: (state) => state.filteredProds,
  },
});

export default store;
