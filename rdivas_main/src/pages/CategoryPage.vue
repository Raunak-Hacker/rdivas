<template>
  <section class="" v-if="data">
    <div class="desktop">
      <header>
        <div class="head">
          <small>{{ data.category }} > {{ data.subcategoryname }}</small>
        </div>
      </header>
      <div class="flex-box">
        <div class="filter">
          <the-filter :lPrice="lPrice" :hPrice="hPrice" />
        </div>
        <div class="product">
          <product-list />
        </div>
      </div>
    </div>
    <div class="mobile">
      <product-list />
      <mob-filter :lPrice="lPrice" :hPrice="hPrice" />
    </div>
  </section>
</template>

<script>
import TheFilter from "@/components/category/TheFilter.vue";
import ProductList from "@/components/category/ProductList.vue";
import MobFilter from "@/components/category/MobFilter.vue";
export default {
  components: { TheFilter, ProductList, MobFilter },
  data() {
    return {
      data: null,
      hPrice: null,
      lPrice: null,
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  created() {
    this.getProds();
  },
  watch: {
    async $route() {
      const response = await fetch(
        `${this.$store.getters.host}/get/product/bycategory/${this.$route.params.id}`
      );
      const data = await response.json();
      this.data = data;

      this.$store.dispatch("getProdList", data);
    },
  },
  methods: {
    async getProds() {
      const response = await fetch(
        `${this.$store.getters.host}/get/product/bycategory/${this.$route.params.id}`
      );
      const data = await response.json();
      if (data.status == "error" || data.category != this.$route.params.category) {
        this.$router.replace({ name: "NotFound" });
        return;
      }
      let highestPrice = null;
      let lowestPrice = null;
      data.products.forEach((product) => {
        if (highestPrice == null) {
          highestPrice = product.sellingPrice;
        } else if (product.sellingPrice > highestPrice) {
          highestPrice = product.sellingPrice;
        }
        if (lowestPrice == null) {
          lowestPrice = product.sellingPrice;
        } else if (product.sellingPrice < lowestPrice) {
          lowestPrice = product.sellingPrice;
        }
      });
      lowestPrice = Math.ceil(lowestPrice / 150) * 150;
      highestPrice = Math.floor(highestPrice / 200) * 200;
      this.hPrice = lowestPrice;
      this.lPrice = highestPrice;
      console.log(this.hPrice, this.lPrice);
      
      await this.$store.dispatch("getProdList", data);
      this.data = data;
    },
  },
};
</script>

<style scoped>
.flex-box {
  align-items: flex-start;
}

header {
  height: 5vh;
  width: 100%;
  background-color: rgba(119, 119, 119, 0.079);
  padding: 0.5rem 1rem;
  margin-bottom: 7vh;
}

.mobile {
  display: none;
}

.desktop {
  display: block;
}

.head {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.filter {
  width: 25%;
  height: 100%;
  padding-left: 1rem;
  /* position: fixed; */
}

.product {
  width: 75%;
  height: 100%;
  padding-right: 1rem;
}

@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
