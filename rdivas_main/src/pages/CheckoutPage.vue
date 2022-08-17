<template>
  <section class="checkoutPg">
    <div class="navs">
      <div class="nav-link">
        <div class="nav">
          <div
            class="nav-show"
            style="background-color: rgba(204, 204, 204, 0.596); padding: 0.5rem 1.2rem"
            @click="$router.push('/cart')"
          >
            1
          </div>
          <label for="">Cart</label>
        </div>
        <div class="nav">
          <div class="nav-show">2</div>
          <label for="">Checkout</label>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="box address">
      <div class="card">
        <div class="in-box add">
          <label>Select An address</label>
          <div class="addresses">
            <div class="in-address" v-for="add in user.addresses" :key="add.id">
              <input type="radio" name="add" v-model="address" :value="add.id" />
              <div class="full-add">
                <small
                  >{{ "Mob: " + add.mobile }} <br />{{
                    add.name +
                    ", " +
                    add.address +
                    ", " +
                    add.city +
                    ", " +
                    add.state +
                    " - " +
                    add.pincode
                  }}</small
                >
              </div>
            </div>
            <div class="in-flex mob" v-if="user.addresses.length < 4">
              <small @click="showAdd = true">Add?</small>
              <the-address :show="showAdd" @close="showAdd = false" />
            </div>
          </div>
        </div>
        <div class="in-flex des" v-if="user.addresses.length < 4">
          <small @click="showAdd = true">Add?</small>
          <the-address :show="showAdd" @close="showAdd = false" />
        </div>
      </div>
    </div>
    <div class="checkout">
      <div class="checkout-price">
        <label for="items">Total Cost</label>
        <label for="rate">₹{{ cart ? cart.total : 0 }}</label>
      </div>
      <p v-if="addressSel" style="color: red">{{ error }}</p>
      <button class="pay-btn" @click="pay">PAY NOW</button>
    </div>
  </section>
</template>

<script>
import TheAddress from "@/components/ui/TheAddress.vue";

export default {
  components: {
    TheAddress,
  },
  data() {
    return {
      address: null,
      addressSel: false,
      showAdd: false,
      error: "",
    };
  },
  computed: {
    cart() {
      if (this.$store.getters.cart == null) {
        return false;
      }
      return this.$store.getters.cart;
    },
    user() {
      return this.$store.state.user;
    },
  },

  created() {
    this.$store.commit("getUser");
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  watch: {
    address(val) {
      if (val) {
        this.addressSel = false;
      } else {
        this.addressSel = true;
      }
    },
  },
  methods: {
    async pay() {
      if (!this.address) {
        this.addressSel = true;
        this.error = "Please select an address";
        return;
      }

      const response = await fetch(
        this.$store.getters.host + "/user/placeorder/" + this.address,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let order = await response.json();
      if (!order.rzporderid) {
        this.addressSel = true;
        this.error = "Order Expired, Please give a life to your order";
        return;
      }
      let host = this.$store.getters.host;
      var options = {
        key: "rzp_test_Mz2M7EV9iQcRw9", // Enter the Key ID generated from the Dashboard
        name: "Rdivas",
        description: "Test Transaction",
        image: "https://rdivas.in/img/logo.8f501d4a.png",
        order_id: order.rzporderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          console.log(localStorage.getItem("token"));
          const payment = {
            orderid: response.razorpay_order_id,
            paymentid: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };
          fetch(host + "/user/paymentsuccess/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(payment),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              window.location.replace("orders");
            });
        },
        prefill: {
          name: this.user.name,
          email: this.user.email,
          contact: this.user.mobile,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ce3cba",
        },
      };
      var rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on("payment.failed", function (response) {
        alert(response.error.description);
        alert(response.error.reason);
      });
    },
  },
};
</script>

<style scoped>
.checkoutPg {
  width: 100%;
  height: 86vh;
  padding: 0 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navs {
  height: 20%;
  width: 100%;
  padding: 1% 17.5%;
}

.nav-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: dotted var(--left-login);
  height: 80%;
}
.nav {
  height: 60%;
  margin-right: -3rem;
  margin-left: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-show {
  cursor: pointer;
  background-color: rgba(255, 0, 212, 0.596);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}
.checkout {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 25%;
  padding: 0 5%;
}

.checkout-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 19%;
}

.box {
  width: 100%;
  height: 20%;
  padding: 2% 0%;
}

.address {
  height: 50%;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: larger;
  font-weight: bold;
}

.in-box {
  width: 90%;
  display: flex;
  padding: 0 2%;
}

.add {
  width: max-content;
  height: 100%;
}

.add label {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  margin-right: 2%;
  width: max-content;
}

.addresses {
  width: 90%;
  height: 100%;
  display: flex;
}

.in-address {
  max-width: 65%;
  height: 100%;
  padding: 2.5%;
  border: 1px solid rgba(204, 204, 204, 0.527);
  margin-right: 5%;
}
.in-address input[type="checkbox"] {
  height: 1rem;
  width: 1rem;
}
.in-address i {
  float: right;
}
.full-add {
  min-width: 10vw;
}
.full-add small {
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
button {
  width: 60%;
  height: 30%;
  font-size: large;
  background-color: var(--left-login);
  color: white;
  font-weight: bolder;
  border: none;
  outline: 0;
  cursor: pointer;
}
.in-flex {
  width: 10%;
}
.in-flex small {
  cursor: pointer;
}
.mob {
  display: none;
}
@media screen and (max-width: 768px) {
  .des {
    display: none;
  }
  .checkoutPg {
    justify-content: flex-start;
  }
  .navs {
    height: 32vw;
    margin-top: 8%;
  }
  .navs label {
    font-size: smaller;
  }
  .nav {
    height: 60%;
    margin-right: -2.2rem;
    margin-left: -1.8rem;
  }
  .addresses {
    flex-wrap: wrap;
    width: 100%;
  }

  .address,
  .add {
    height: max-content;
  }
  .address .in-box {
    flex-direction: column;
    align-items: flex-start;
  }
  .in-address {
    width: 47%;
    margin-right: 3%;
    margin-bottom: 2vh;
  }
  .add label {
    height: 4rem;
    font-size: medium;
  }
   .full-add small {
    font-size: x-small;
   } 
  .mob {
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: right;
    width: 47%;
    padding-left: 5%;
  }
  .checkout {
    width: 80%;
    height: 20%;
    padding: 0 3%;
  }
  .checkout-price {
    padding: 0 8%;
    font-size: .9rem;
  }

  button {
    width: 100%;
    height: 0%;
    padding: 1.5rem 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
  }
}
</style>
