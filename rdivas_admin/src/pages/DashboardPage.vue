<template>
  <div class="dbpg">
    <div class="con">
      <h1>Total Website Viewers</h1>
      <br />
      <br />
      <h2>64</h2>
    </div>
    <div class="con">
      <h1>Total Order Count</h1>
      <br />
      <br />
      <h2>{{ orders }}</h2>
    </div>
    <div class="con">
      <h1>Total Comment Count</h1>
      <br />
      <br />
      <h2>{{ comments }}</h2>
    </div>
    <div class="con">
      <h1>Total Product Count</h1>
      <br />
      <br />
      <h2>{{ products }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: null,
      comments: null,
      products: null,
      viewers: null,
    };
  },
  created() {
    this.getOrders();
    this.getReviews();
    this.getProducts();
  },
  methods: {
    async getOrders() {
      const response = await fetch(
        this.$store.getters.host + "get/orders?page=1&limit=100000",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
      data = data.filter((order) => {
        return order.status == "paid";
      });
      this.orders = data.length;
    },
    async getReviews() {
      const response = await fetch(
        this.$store.getters.host + "get/reviews?page=1&limit=100000",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
      this.comments = data.length;
    },
    async getProducts() {
      const response = await fetch(this.$store.getters.host + "get/products/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      let data = await response.json();
      this.products = data.length;
    },
  },
};
</script>

<style scoped>
.dbpg {
  background-color: var(--body-color);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0 2%;
}
.con {
  min-height: 30vh;
  border-radius: 2rem;
  width: 21%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  margin: 2%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.con h1 {
  font-size: 1.2rem;
  color: orange;
}
body.dark .con h1 {
  color: orange;
}
.con h2 {
  color: black;
}
body.dark .con h2 {
  color: var(--left-login);
}
body.dark .con {
  background-color: #242526;
}
</style>
