<template>
  <section class="orderPg">
    <div class="head">
      <h1>My Orders</h1>
    </div>
    <div class="not-f" v-if="!orders.length > 0">
      <h1>You have not ordered anything yet!</h1>
    </div>
    <div class="cards" v-else>
      <div class="card" v-for="order in orders" :key="order.id">
        <div class="card-head">
          <div class="order-det">
            <div class="order-id">
              <strong for="Order">Order:</strong> #{{ order.orderId }}
            </div>
            <small class="order-time"> Order Placed on {{ order.createdAt }} </small>
          </div>
          <div class="btn">
            <button><i class="bx bx-current-location" /> Track Order</button>
          </div>
        </div>
        <div class="card-orders">
          <div class="orders">
            <order-item
              :id="1"
              :name="'Casual Butterfly Sleeves Solid Women Dark Green Top'"
              :img="'https://files.rdivas.in/a48042fe7eb8517feb9102dc912c30191.png'"
              :size="'xl'"
              :color="'blue'"
              :price="36"
              :qty="6"
            />
            <order-item
              :id="2"
              :name="'Casual Butterfly Sleeves Solid Women Dark Green Top'"
              :img="'https://files.rdivas.in/a48042fe7eb8517feb9102dc912c30191.png'"
              :size="'xl'"
              :color="'blue'"
              :price="11000"
            />
          </div>
          <div class="flex-prod">
            <div class="box">
              <small>Status</small>
              <strong style="color: orange">In - Transit</strong>
            </div>
            <div class="box">
              <small>Delivery Expected By</small>
              <strong>{{ order.delivery }}</strong>
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
import OrderItem from "@/components/ui/OrderItem.vue";
export default {
  components: { OrderItem },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  async created() {
    const response = await fetch(this.$store.getters.host + "/user/get/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
      };
      var date = new Date(data[i].createdAt);
      data[i].createdAt = date.toDateString();
      let delivery = date.addDays(10);
      data[i].delivery = delivery.toDateString();
      data[i].orderId = data[i].orderId.substring(6);
    }
    data = data.filter((order) => {
      return order.status == "paid";
    });
    this.orders = data.reverse();
  },
};
</script>

<style scoped>
.orderPg {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  min-height: 86vh;
  background-color: #f2f2f3;
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
  padding-right: 3.5%;
  padding-left: 2%;
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
  color: white;
}
.card-head .btn i {
  font-size: 1.25rem;
  margin-right: 3%;
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
}
.flex-prod {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  border-top: 1px solid rgba(128, 128, 128, 0.26);
  border-right: 1px solid rgba(128, 128, 128, 0.26);
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
  border-top: 1px solid #e6e6e6;
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
