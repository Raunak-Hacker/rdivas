<template>
  <section class="cart">
    <div class="items">
      <div class="title">
        <h1>Shopping Cart</h1>
        <h1>{{ cart ? cart.cartProducts.length : 0 }} Items</h1>
      </div>
      <div class="info">
        <label class="label">Product Details</label>
        <div class="labels">
          <label for="">Quantity</label>
          <label for="">Price</label>
          <label for="">Offer</label>
          <label for="">Total</label>
        </div>
      </div>
      <div class="products">
        <cart-item v-for="item in items" :key="item.id" :id="item.productId" :name="item.productName"
          :color="item.productColor" :img="imgHost + item.productImage" :size="item.productSize"
          :total="item.totalPrice" :price="item.productPrice" :selprice="item.selprice" :items="this.quantity"
          :qty="item.quantity" @update-quantity="upQuantity">
        </cart-item>
      </div>
      <router-link to="" class="cont desktop">
        <i class="bx bx-left-arrow-circle" />Continue Shopping
      </router-link>
    </div>
    <div class="orders">
      <div class="title">
        <h1>Order Summary</h1>
      </div>
      <!-- <div class="boxes">
        <div class="box">
          <div class="input">
            <input type="text" placeholder="Promo Code" />
          </div>
          <small style="color: var(--left-login)">Promo Code Applied</small>
        </div>
        <div class="box" style="background-color: rgba(128, 128, 128, 0.26)">
          <label for="">Delivery Charges - ₹100</label>
        </div>
      </div> -->
      <div class="prices">
        <div class="price-box">
          <label for="items">{{ cart ? cart.cartProducts.length : 0 }} items MRP</label>
          <label for="rate">₹{{ cart ? cart.price : 0 }}</label>
        </div>
        <div class="price-box">
          <label for="items">Offer</label>
          <label for="rate" style="color: red">-₹{{ cart ? cart.discount : 0 }}</label>
        </div>
        <!-- <div class="price-box">
          <label for="items">Promo Code (20%)</label>
          <label for="rate" style="color: red">-₹378</label>
        </div>
        <div class="price-box">
          <label for="items">Delivery Charges</label>
          <label for="rate" style="color: green">+₹100</label>
        </div> -->
      </div>

      <div class="checkout">
        <div class="checkout-price">
          <label for="items">Total Cost</label>
          <label for="rate">₹{{ cart ? cart.total : 0 }}</label>
        </div>
        <button class="pay-btn">PAY NOW</button>
        <button class="pay-btn" style="
            background-color: white;
            color: var(--left-login);
            border: 1px solid var(--left-login);
          ">
          PAY ON DELIVERY
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "@/components/ui/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  data() {
    return {};
  },
  async created() {
    this.$store.commit("getCart");
  },
  computed: {
    cart() {
      // console.log(this.$store.state.cart);
      if (this.$store.getters.cart == null) {
        return false;
      }
      return this.$store.getters.cart;
    },
    imgHost() {
      return this.$store.getters.imgHost;
    },
    update() {
      return this.$store.state.update;
    },
    items() {
      return this.$store.state.items;
    },
  },
  watch: {
    async update(val) {
      if (val) {
        let cart = await fetch(`${this.$store.getters.host}/user/getcart`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        let cartResponse = await cart.json();
        this.items = cartResponse.cartProducts;
        this.$store.commit("setUpdate", false);
      }
    },
  },
  methods: {
    upQuantity() {
      this.update = true;
    },
  },
};
</script>

<style scoped>
.products::-webkit-scrollbar {
  width: 0.5rem;
}

.products::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 100px;
}

.products::-webkit-scrollbar-thumb {
  background-image: linear-gradient(360deg, #b6c5c9 0%, var(--left-login) 45%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}

.cart {
  width: 100%;
  height: 89vh;
  display: flex;
}

.items {
  width: 70%;
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.56);
}

.orders {
  width: 30%;
  background-color: rgba(119, 119, 119, 0.079);
  padding: 3% 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
}

.info .label,
.info .labels {
  color: grey;
  font-weight: 600;
  text-transform: uppercase;
  font-size: small;
}

.labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  height: 10%;
  margin-right: 1rem;
}

.products {
  height: 67%;
  overflow-y: auto;
}

.in-boxes {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: max-content;
  margin-left: 2.2rem;
}

.in-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 4%;
  border: 1px solid rgba(0, 0, 0, 0.212);
  height: 2rem;
  width: 1.7rem;
  cursor: pointer;
}

.dif {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62.5%;
  height: 10%;
}

.cont {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 13%;
  color: var(--left-login);
  font-weight: bolder;
}

.cont i {
  font-size: large;
  margin-right: 1%;
  margin-bottom: 0.28%;
}

.boxes {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  height: 30%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.56);
}

.box {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.input {
  width: 100%;
  height: 100%;
}

.boxes small {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 1.5%;
}

.box input {
  width: 100%;
  height: 100%;
  border: none;
  outline: 0;
  padding: 1rem;
  text-indent: 10px;
}

.prices {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 0 5%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.56);
}

.price-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30%;
}

.checkout {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  padding: 0 5%;
}

.checkout-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.pay-btn {
  width: 100%;
  height: 20%;
  font-size: medium;
  background-color: var(--left-login);
  color: white;
  font-weight: bolder;
  border: none;
  outline: 0;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .cart {
    width: 100%;
    height: max-content;
    flex-direction: column;
  }

  .items {
    width: 100%;
    padding: 3% 5%;
    flex-direction: column;
  }

  .title {
    font-size: small;
    height: 3rem;
  }

  .info {
    display: none;
  }

  .products {
    /* scrollbar-width: none; */
    overflow: hidden;
  }

  .orders {
    width: 100%;
    padding: 3% 5%;
    height: max-content;
    flex-direction: column;
  }

  .prices {
    padding: 0 2%;
  }

  .price-box {
    height: 2rem;
  }

  .checkout {
    width: 100%;
    height: 30vh;

    padding: 0 2%;
  }

  .checkout-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
