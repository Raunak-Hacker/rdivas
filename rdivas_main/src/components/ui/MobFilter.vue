<template>
  <div class="main">
    <div v-if="show" class="sort" style="width: 100%">Out Of Stock</div>
    <div class="filterbtn" v-else>
      <div class="sort pink" @click="buy">Buy Now</div>
      <div class="sort" @click="add">Add To Cart</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    add() {
      this.$emit("add");
    },
    buy() {
      this.$emit("buy");
    },
  },
};
</script>

<style scoped>
.main {
  z-index: 10;
  position: fixed;
  bottom: -0.1rem;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.filterbtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filter {
  width: 100%;
}

.sort {
  width: 50%;
  font-size: 0.9rem;
  background-color: rgb(255, 255, 255);
  padding: 3% 0;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
}
.pink {
  background-color: var(--left-login);
  color: whitesmoke;
}
</style>
