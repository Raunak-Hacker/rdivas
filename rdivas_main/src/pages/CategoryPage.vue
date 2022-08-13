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
          <the-filter />
        </div>
        <div class="product">
          <product-list />
        </div>
      </div>
    </div>
    <div class="mobile">
      <product-list />
      <mob-filter />
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
    };
  },
  async created() {
    const response = await fetch(
      `${this.$store.getters.host}/get/product/bycategory/${this.$route.params.id}`
    );
    const data = await response.json();
    console.log(data);
    if (data.statusCode === 404) {
      window.location = "/notfound";
      return;
    }
    
    await this.$store.dispatch("getProdList", data);
    this.data = data;
    console.log(data);
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
