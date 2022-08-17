<template>
  <section class="wishlist">
    <h1>Wish List</h1>
    <div class="not-f" v-if="!wishlist.length > 0">
      <h1>You have not added anything to your wishlist yet!</h1>
    </div>
    <div class="flex-wrap" v-else>
      <div class="card" v-for="product in wishlist" :key="product.id">
        <cloth-card
          :id="product.id"
          :name="product.name"
          :imgUrl="imgHost + product.image1"
          :price="product.sellingPrice"
          :best="product.BestSeller"
          :sale="product.Sale"
          :discount="product.price"
          :color="product.color"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    wishlist() {
      return this.$store.getters.wishlist;
    },
    imgHost() {
      return this.$store.getters.imgHost;
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style scoped>
.not-f {
  height: 64vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.wishlist {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  min-height: 86vh;
}

.wishlist h1 {
  font-size: 2.3rem;
  font-weight: 500;
  margin-bottom: 2rem;
}
.not-f h1 {
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 2%;
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.card {
  width: 23%;
  height: 35%;
  margin: 1%;
}
@media (max-width: 768px) {
  .card {
    width: 49%;
    height: 25%;
    margin: 0.5%;
  }
  .wishlist h1 {
    font-size: 1.8rem;
  }
  .wishlist {
    width: 100%;
    padding: 0 2%;
  }
  .not-f h1 {
    font-size: 1.15rem;
    text-align: center;
  }
}
</style>
