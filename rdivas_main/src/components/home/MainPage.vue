<template>
  <section class="top">
    <div class="banner-wrap">
      <ul class="banner-con" id="banner-con">
        <li class="banner" v-for="banner in banImgs" :key="banner.id">
          <img :src="imgHost + banner.image" alt="" />
        </li>
      </ul>
      <div class="icons">
        <div class="icon" @click="rightClick()">
          <i class="bx bx-chevron-right" />
        </div>
        <div class="icon" @click="leftClick">
          <i class="bx bx-chevron-left" />
        </div>
      </div>
    </div>
    <div class="flex-wrap">
      <cat-box
        v-for="cat in cats"
        :key="cat.id"
        :name="cat.name"
        :img="cat.image"
        :id="cat.id"
      />
    </div>
    <div class="pad1">
      <best-sell-cat
        v-for="(item, index) in list"
        :key="item.id"
        :index="index"
        :title="item.name"
        :products="item.products"
      />
    </div>
  </section>
</template>

<script>
import BestSellCat from "./BestSellCat.vue";
import CatBox from "./CatBox.vue";
export default {
  components: { CatBox, BestSellCat },

  data() {
    return {
      xd: null,
      cats: [],
      list: [],
      banImgs: [],
    };
  },

  created() {
    fetch(`${this.$store.getters.host}/get/home/categories`)
      .then((response) => response.json())
      .then((data) => {
        this.cats = data.catagory;
      });
    fetch(`${this.$store.getters.host}/get/home/listing`)
      .then((response) => response.json())
      .then((data) => {
        this.list = data;
      });
    this.timer = setInterval(() => {
      this.rightClick();
    }, 3000);
    fetch(`${this.$store.getters.host}/get/home/hero`)
      .then((response) => response.json())
      .then((data) => {
        this.banImgs = data;
      });
  },
  computed: {
    imgHost() {
      return this.$store.getters.imgHost;
    },
  },
  methods: {
    rightClick() {
      const slidesContainer = document.getElementById("banner-con");
      const slide = document.querySelector(".banner");
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
      clearInterval(this.timer);
    },
    leftClick() {
      const slidesContainer = document.getElementById("banner-con");
      const slide = document.querySelector(".banner");
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    },
  },
};
</script>

<style scoped>
.banner-wrap {
  width: 100%;
  margin-bottom: 3vh;
  position: relative;
  overflow: hidden;
}

.banner-con {
  height: calc(100vh - 2rem);
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  flex: 1 0 100%;
}

.banner img {
  width: 100%;
  height: 100%;
}

.icons {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.icon {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  background: rgba(255, 255, 255, 0.384);
  color: #111111;
  margin: 20% 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;
}

.icon i {
  font-size: 1.8rem;
}

.icon:hover {
  background-color: black;
  color: white;
}

.pad1 {
  padding: 0 1%;
}

.spot {
  margin-top: 2rem;
  width: 100%;
  column-gap: 2%;
}

.spot > * {
  margin-top: 2%;
}

.img {
  width: 23.5%;
}

.img img {
  width: 100%;
  height: 100%;
}

.title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
}
</style>
