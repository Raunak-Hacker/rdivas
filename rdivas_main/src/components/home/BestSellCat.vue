<template>
  <div class="best-cat">
    <header>
      <div class="icons">
        <div class="icon" @click="leftClick"><i class="bx bx-chevron-left"></i></div>
        <div class="icon" @click="rightClick"><i class="bx bx-chevron-right"></i></div>
      </div>
      <br /><br />
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
  <br />
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
      r: 5,
      m: 2,
    };
  },
  computed: {
    imgHost() {
      return this.$store.getters.imgHost;
    },
    xyz() {
      if (this.products) {
        if (window.innerWidth > 768) {
          return this.products.slice(this.l, this.r);
        } else {
          return this.products.slice(this.l, this.m);
        }
      } else {
        return [];
      }
    },
  },
  methods: {
    leftClick() {
      if (this.xyz.length >= 5) {
        this.l -= 1;
        this.r -= 1;
      }
      if (this.xyz.length >= 2 && window.innerWidth < 768) {
        this.l -= 1;
        this.m -= 1;
      }
      if (this.xyz.length <= 0) {
        this.l = 0;
        if (window.innerWidth < 768) {
          this.m = 2;
          return;
        }
        this.r = 5;
      }
    },
    rightClick() {
      if (
        (window.innerWidth > 768 && this.xyz.length < 5) ||
        this.r == this.products.length ||
        (window.innerWidth < 768 && this.xyz.length < 2) ||
        this.m == this.products.length
      ) {
        return;
      }
      this.l += 1;
      if (window.innerWidth < 768) {
        this.m += 1;
        return;
      }
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

.ad1 {
  width: 100%;
  height: calc(98vw / 4);
}
.ad1 img {
  width: 100%;
  height: 100%;
  object-fit: fill;
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
  min-width: 18%;
  min-height: 100%;
  width: 18%;
  margin: 1%;
}
.scroll-images {
  width: 100%;
  display: flex;
  overflow-y: hidden;
}
@media screen and (max-width: 768px) {
  .productTops {
    margin-top: 0.5rem;
  }
  .card {
    width: 49%;
    height: 25%;
    margin: 0.5%;
    min-width: 49%;
  }
  .icon {
    width: 1.8rem;
    height: 1.8rem;
  }

  .icon i {
    font-size: 1.2rem;
  }
  .ad1 {
    width: 100%;
    height: calc(98vw / 4);
  }
  .ad1 img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .title {
    font-size: 1rem;
  }
  .scroll-images {
    overflow-y: hidden;
    height: 20rem
  }
}
</style>
