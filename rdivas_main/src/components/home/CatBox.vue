<template>
  <div class="cat-box">
    <div class="img">
      <img :src="imgHost + img" />
    </div>
    <div class="cat">
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "img", "id"],
  data() {
    return {};
  },
  computed: {
    imgHost() {
      return this.$store.getters.imgHost;
    },
  },
};
</script>

<style scoped>
.cat-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1%;
}

.img {
  width: 21vh;
  height: 21vh;
}

.img img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
}

.cat {
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
}
@media (max-width: 768px) {
  .img {
    width: calc(93vw / 3);
    height: calc(93vw / 3);
  }
  h3 {
    font-size: 0.8rem;
  }
}
</style>
