<template>
  <section class="orderPg">
    <div class="flex-end">
      <div class="flex-box">
        <div class="box">
          <div class="search" style="text-transform: capitalise; width: 85%">
            <input
              type="text"
              v-model="filter"
              @keyup="filterProducts"
              @focusin="changeIcon"
              @focusout="changeIcon"
              style="text-transform: capitalise; width: 90%"
              :placeholder="'Search order by id  ...'"
            />
            <i v-if="search" class="bx bx-search icon" />
            <i v-else class="bx bx-x icon" @click="close" />
          </div>
        </div>
        <div class="box">
          <h2 style="text-transform: capitalize">Manage Orders</h2>
        </div>
        <div class="box" />
      </div>
    </div>

    <div class="cards">
      <div class="card" v-for="order in orders" :key="order.id">
        <div class="card-head">
          <div class="order-det">
            <div class="order-id">
              <strong for="Order">Order:</strong> #{{ order.orderId }}
            </div>
            <small class="order-time"> Order Placed on {{ order.createdAt }} </small>
          </div>
          <div class="btn">
            <button>XXXX XXXX</button>
          </div>
        </div>
        <div class="card-orders">
          <div class="orders">
            <order-item
              v-for="orderItem in order.orderItems"
              :key="orderItem.id"
              :id="orderItem.id"
              :name="orderItem.productName"
              :img="imgHost + orderItem.productImage"
              :size="orderItem.productSize"
              :color="orderItem.productColor"
              :price="orderItem.totalPrice"
              :qty="orderItem.quantity"
            />
          </div>
          <div class="flex-prod">
            <div class="add">
              <label for="Address">Delivery Details:</label>
              <div class="addresses">
                <div class="in-address">
                  <br />
                  <div class="full-add">
                    <small
                      >{{ "Name: " + order.name }} <br />
                      {{ "Mob: " + order.mobile }} <br />
                      {{
                        "Address: " +
                        order.address +
                        ", " +
                        order.city +
                        ", " +
                        order.state +
                        " - " +
                        order.pincode
                      }}
                      <br />
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-bot">
          <div class="total">
            <strong>Paid Total - Rs. {{ order.totalPrice }}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OrderItem from "@/components/OrderItem.vue";
export default {
  components: { OrderItem },
  data() {
    return {
      orders: [],
      rOrders: [],
      filter: "",
      search: true,
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  computed: {
    imgHost() {
      return this.$store.state.imgHost;
    },
  },
  methods: {
    changeIcon() {
      if (this.filter.length > 0) {
        this.search = false;
      } else {
        this.search = true;
      }
    },
    filterProducts() {
      this.changeIcon();
      if (this.filter.length > 0) {
        this.orders = this.rOrders.filter((order) => {
          return order.orderId.toLowerCase().includes(this.filter.toLowerCase());
        });
      } else {
        this.orders = this.rOrders;
      }
    },
    close() {
      this.search = true;
      this.filter = "";
    },
  },
  async created() {
    const response = await fetch(
      this.$store.getters.host + "get/orders?page=1&limit=1000000",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      var date = new Date(data[i].createdAt);
      data[i].createdAt = date.toDateString();
      data[i].orderId = data[i].orderId.substring(6);
    }
    data = data.filter((order) => {
      return order.status == "paid";
    });
    this.orders = data;
    this.rOrders = data;
  },
};
</script>

<style scoped>
body.dark label,
body.dark small,
body.dark strong,
body.dark .name, body.dark i,
body.dark .order-id

{
  color: rgba(245, 245, 245, 0.705);
}
body.dark .card-bot,
body.dark .card-head,
body.dark .card-orders
{
  background-color: #242526;
}
.orderPg {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  min-height: 86vh;
  background-color: var(--body-color);
  overflow-x: hidden;
}

.head h1 {
  font-size: 2.3rem;
  font-weight: 500;
  margin-bottom: 2%;
}
.not-f h1 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2%;
}
.not-f {
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card {
  min-height: 20vh;
  width: 100%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 10vh;
}
.card-head {
  background-color: #ffffff;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
}
.order-det {
  display: flex;
  align-items: center;
  width: 75%;
  height: 100%;
}
.order-id {
  width: max-content;
  background-color: rgba(204, 204, 204, 0.658);
  height: 42%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  padding-right: 5%;
  padding-left: 3%;
  color: var(--left-login);
  margin-right: 2%;
}
.order-id strong {
  margin-right: 8%;
  color: black;
}
.card-head .btn {
  width: 17%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-head small {
  color: #8e8e8e;
}
.card-head .btn button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 50%;
  border: none;
  background-color: rgba(254, 151, 1, 255);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  color: white;
}
.card-head .btn i {
  font-size: 1.25rem;
  margin-right: 3%;
  color: var(--white);
}
.card-orders {
  width: 100%;
  padding: 0 5%;
  background-color: white;
  display: flex;
  justify-content: center;
}
.orders {
  width: 65%;
  border-left: 1px solid rgba(128, 128, 128, 0.26);
}
.flex-prod {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  border-top: 1px solid rgba(128, 128, 128, 0.26);
  border-right: 1px solid rgba(128, 128, 128, 0.26);
  border-left: 1px solid rgba(128, 128, 128, 0.26);
  padding: 3%;
}

.flex-prod label {
  font-weight: 600;
}

.box {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box small {
  text-transform: capitalize;
  color: #ccc;
}
.box strong {
  font-size: 1.2rem;
}
.card-bot {
  border-top: 1px solid rgba(128, 128, 128, 0.26);
  background-color: white;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 2%;
}
.total {
  width: max-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4.5%;
}
.total strong {
  font-size: 1.1rem;
}

input {
  background-color: var(--sidebar-color);
  border: none;
  outline: 0;
  width: 85%;
  /* padding-top: 3rem; */
}

.flex-end {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90vw;
  margin-left: -10%;
  height: 18vh;
  position: sticky;
  top: -2vh;
  margin-bottom: 5vh;
  background-color: var(--body-color);
}

.search {
  background-color: var(--sidebar-color);
  width: 90%;
  padding: 1rem;
}

i {
  font-size: 1.1rem;
  height: 100%;
}

.flex-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 7%;
  height: 100%;
}

.box {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.addProd {
  display: flex;
  width: 60%;
}
button {
  padding: 0.5rem 5%;
}
@media (max-width: 768px) {
  .head h1 {
    font-size: 1.7rem;
  }
  .head {
    margin-bottom: 5%;
  }
  .not-f h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  .order-det,
  .card-head {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
  .card-head .btn {
    width: 80%;
    margin: 5% 0;
  }
  .card-head .btn button {
    font-size: small;
    height: 2rem;
  }
  .order-id {
    height: 2rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: 5% 0;
  }
  .order-id {
    font-size: small;
  }
  .card-orders {
    flex-direction: column;
    width: 100%;
  }
  .orders {
    width: 100%;
  }
  .flex-prod {
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.26);
  }
  .box {
    height: 9vh;
  }
  .box strong {
    font-size: 0.9rem;
  }
  .card-bot {
    border: none;
    height: 6vh;
    padding: 0 3.5%;
  }
  .total strong,
  .box small {
    font-size: 0.8rem;
  }
}
</style>
