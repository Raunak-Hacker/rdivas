<template>
  <section class="wishlist">
    <h1>Wish List</h1>
    <!-- <div class="flex-wrap">
      <cloth-card
        v-for="product in wishlist"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :imgUrl="product.image"
        :price="product.price"
        :best="product.BestSeller"
        :sale="product.Sale"
      />
    </div> -->
    <div class="flex-wrap">
      <div class="card" v-for="product in wishlist" :key="product.id">
        <cloth-card
          :id="product.id"
          :name="product.name"
          :imgUrl="imgHost + product.image"
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
.wishlist {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  min-height: 89vh;
}

.wishlist h1 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 2rem;
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
</style>
