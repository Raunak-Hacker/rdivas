<template>
  <header>
    <div class="head">
      <p>Tops </p>
      <h4>></h4>
      <p>Top</p>
    </div>
  </header>

  <div class="flex-box">
    <filter-tops />
    <product-tops />
  </div>
</template>

<script>
import FilterTops from '@/components/tops/FilterTops.vue'
import ProductTops from '@/components/tops/ProductTops.vue'
export default {
  components: { FilterTops, ProductTops },
  data() {
    return {
      scrolled: false
    }
  },
  methods: {
    scroll() {
      this.scrolled = true
    }
  }
}
</script>

<style scoped>
.flex-box{
  align-items: flex-start;
}
header {
  height: 5vh;
  width: 100%;
  background-color: rgba(119, 119, 119, 0.079);
  padding: 0.5rem 1rem;
  margin-bottom: 7vh;

}

.head {
  height: 100%;
  width: 8%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>