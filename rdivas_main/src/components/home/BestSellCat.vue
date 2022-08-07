<template>
  <div class="best-cat">
    <header>
      <div class="icons">
        <div class="icon" @click="leftClick"><i class="bx bx-chevron-left"></i></div>
        <div class="icon" @click="rightClick"><i class="bx bx-chevron-right"></i></div>
      </div>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </header>
    <div class="scroll-images" id="container">
      <div class="card" v-for="product in xyz" :key="product.id">
        <cloth-card
          :id="product.id"
          :name="product.name"
          :imgUrl="imgHost + product.image"
          :price="product.sellingPrice"
          :discount="product.price"
        />
      </div>
    </div>
  </div>
  <div class="flex-box ad" v-if="index == 0">
    <div class="ad1">
      <img :src="imgHost + poster1" alt="" />
    </div>
  </div>
  <div class="flex-box ad" v-if="index == 2">
    <div class="ad1">
      <img :src="imgHost + poster2" alt="" />
    </div>
  </div>
</template>

<script>
import ClothCard from "../category/ClothCard.vue";
export default {
  components: { ClothCard },
  props: ["title", "index", "products", "id", "poster1", "poster2"],
  data() {
    return {
      l: 0,
      r: 4,
    };
  },
  created() {
    this.xyz = this.products.slice(this.l, this.r);
  },
  computed: {
    imgHost() {
      return this.$store.getters.imgHost;
    },
    xyz() {
      return this.products.slice(this.l, this.r);
    },
  },
  methods: {
    leftClick() {
      this.l -= 1;
      this.r -= 1;
      if (this.xyz.length <= 0) {
        this.l = 0;
        this.r = 4;
      }
    },
    rightClick() {
      if (this.xyz.length < 4 || this.r == this.products.length) {
        return;
      }
      this.l += 1;
      this.r += 1;
    },
  },
};
</script>

<style scoped>
.best-cat {
  /* width: 100%; */
  display: flex;
  position: relative;
  flex-direction: column;
}

.best-cat header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  display: flex;
  align-items: center;
}

.flex-box,
img {
  width: 100%;
}

.ad {
  margin-bottom: 3vh;
}

.ad2 {
  min-width: 31.8%;
  height: 100%;
}

.ad1 {
  width: 100%;
  height: 40vh;
}
.ad1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  justify-content: center;
  transition: all 0.15s ease-in-out;
}

.icon i {
  font-size: 1.5rem;
}

.icon:hover {
  background-color: black;
  color: white;
}

.title {
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
}

.card {
  position: relative;
  min-width: 23%;
  min-height: 100%;
  width: 25%;
  height: 35%;
  margin: 1%;
}
.scroll-images {
  width: 100%;
  display: flex;
  overflow-y: hidden;
}
</style>
