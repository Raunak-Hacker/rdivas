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
  addToCart(state, payload) {
    console.log("addToCart", payload);
    // let item = state.cart.find((item) => item.prodId == payload.prodId);
    // if (item) {
    //   if (item.size != payload.size) {
    //     item.size = payload.size;
    //   }
    //   item.quantity += payload.quantity;
    // } else {
    //   state.cart.push(payload);
    // }
    // console.log(state.cart);
    let item = {
        "productId": payload.prodId,
        "quantity": payload.quantity,
        "productSize": payload.size,
        "productColor": payload.color
    }
    console.log(localStorage.getItem("token"));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,

    },
      body: JSON.stringify(item)
      // body: item
    };
    fetch(`http://localhost:6969/user/editroduct`, requestOptions)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        if(data.status == "success"){
          // reload window
          window.location.reload();
        }
      });

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
