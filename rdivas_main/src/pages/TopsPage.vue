<template>
  <section class="" v-if="data.status === 'success'">
    <div class="desktop">
      <header>
        <div class="head">
          <p>{{ data.category }}</p>
          <h4>></h4>
          <p>Top</p>
        </div>
      </header>

      <div class="flex-box">
        <div class="filter">
          <filter-tops />
        </div>
        <div class="product">
          <product-tops />
        </div>
      </div>
    </div>
    <div class="mobile">
      <product-tops />
      <BottomFilter />
    </div>
  </section>
</template>

<script>
import FilterTops from "@/components/tops/FilterTops.vue";
import ProductTops from "@/components/tops/ProductTops.vue";
import BottomFilter from "@/components/ui/bottomFilter.vue";
export default {
  components: { FilterTops, ProductTops, BottomFilter },
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
    if (this.data.status === "success" && response.ok) {
      await this.$store.dispatch("getProdList", this.data);
    }
    // else if (!response.ok) {
    //   const error = new Error(
    //     "Failed to fetch services"
    //   );
    //   throw error;
    // }
    // else
    //   console.log("error");
  },
  watch: {
    async $route() {
      const response = await fetch(
        `${this.$store.getters.host}/get/product/bycategory/${this.$route.params.id}`
      );
      const data = await response.json();
      this.data = data;
      this.$store.dispatch("getProdList", data);
      console.log("route Changed");
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
