<template>
  <section class="" v-if="data.status === 'success'">
    <div class="desktop">
      <header>
        <div class="head">
          {{ data.category }}
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
    this.data = data;
    if (data.status === "success" && response.ok) {
      await this.$store.dispatch("getProdList", this.data);
    }
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
  width: 8%;
  display: flex;
  justify-content: space-around;
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
