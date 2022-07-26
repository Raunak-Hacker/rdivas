<template>
  <div class="main">
    <div class="filter" v-if="filter">
        <filter-tops />
    </div>
    <div class="filterbtn">
      <div class="sort" @click="togglefilter">Filter</div>
      <div class="sort">Short By</div>
    </div>
  </div>
</template>

<script>
import FilterTops from "@/components/tops/FilterTops.vue";
export default {
    components: { FilterTops },

  data() {
    return {
      message: "Hello Vue!",
      filter: false,
    };
  },
  methods: {
    sayHello() {
      alert(this.message);
    },
    togglefilter() {
      this.filter = !this.filter;
    },
  },
};
</script>

<style scoped>
.main{
    display:float;
    z-index: 10;
 position: fixed;
  bottom: 0px;
  left: 0;
  width: 100vw;
  background-color: rgb(255, 255, 255);
}
.filterbtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filter{
    width: 100%;

}


.sort {
  width: 50%;
  font-size: 1.2rem;
  background-color: rgb(255, 255, 255);
  padding: 2% 0;
  border: 1px solid #a4a4a4;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
