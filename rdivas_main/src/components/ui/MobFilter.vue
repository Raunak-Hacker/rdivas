<template>
  <div class="main">
    <div class="filterbtn">
      <div class="sort pink">Buy Now</div>
      <div class="sort " @click="add">Add To Cart</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$emit("add");
    },
  },
};
</script>

<style scoped>
.main {
  display: float;
  z-index: 10;
  position: fixed;
  bottom: 0;
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
  font-size: .9rem;
  background-color: rgb(255, 255, 255);
  padding: 3% 0;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
}
.pink{
  background-color: var(--left-login);
  color: whitesmoke;
}
</style>
