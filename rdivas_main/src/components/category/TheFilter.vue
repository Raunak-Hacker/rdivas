<template>
  <section class="filterTops">
    <div class="box">
      <div class="title b2">
        {{ productList.category }}
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="product in productList.subcategory" :key="product.categoryid">
          <small>
            <router-link :to="'/' + productList.category + '/' + product.categoryid">
              {{ product.name }}
            </router-link>
          </small>
        </li>
      </ul>
    </div>
    <div class="box">
      <div class="title">
        <p>Color</p>
        <img src="@/assets/plus.svg" v-if="!colorCon" @click="colorCon = !colorCon" />
        <img src="@/assets/minus.svg" v-else @click="colorCon = !colorCon" />
      </div>
    </div>
    <transition duration="400" name="nested">
      <div class="content outer" v-if="colorCon">
        <ul class="inner">
          <li v-for="product in productList.colors" :key="product.name">
            <small>
              <p to="" @mouseenter="color = product.name" @click="colorClick">
                {{ product.name }}
              </p>
              <div
                class="color"
                :style="{ 'background-color': product.colorCode }"
                @mouseenter="color = product.name"
                @click="colorClick"
              />
            </small>
          </li>
        </ul>
      </div>
    </transition>
    <div class="box">
      <div class="title b2">
        <p>Price</p>
        <img src="@/assets/plus.svg" v-if="!priceCon" @click="priceCon = !priceCon" />
        <img src="@/assets/minus.svg" v-else @click="priceCon = !priceCon" />
      </div>
      <transition duration="400" name="nested">
        <div class="content outer ran" v-if="priceCon">
            <span id="rangeValue">Price &lt; {{ price }}</span>
            <input
              class="range"
              type="range"
              min="100"
              max="2000"
              v-model="price"
              @change="priceChange"
            />
          </div>
      </transition>
    </div>
    <div class="box">
      <div class="title">
        <p>Fabric</p>
        <img src="@/assets/plus.svg" v-if="!fabricCon" @click="fabricCon = !fabricCon" />
        <img src="@/assets/minus.svg" v-else @click="fabricCon = !fabricCon" />
      </div>
    </div>
    <transition duration="400" name="nested">
      <div class="content outer" v-if="fabricCon">
        <ul class="inner">
          <li v-for="product in productList.fabrics" :key="product">
            <small>
              <p @mouseenter="fabric = product" @click="fabricClick">
                {{ product }}
              </p>
            </small>
          </li>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  computed: {
    productList() {
      return this.$store.getters.productList;
    },
  },
  data() {
    return {
      colorCon: false,
      priceCon: false,
      fabricCon: false,
      designCon: false,
      color: null,
      fabric: null,
      price: 2000,
    };
  },
  methods: {
    colorClick() {
      this.$store.commit("filterByColor", this.color);
    },
    fabricClick() {
      this.$store.commit("filterByFabric", this.fabric);
    },
    priceChange() {
      this.$store.commit("filterByPrice", this.price);
    },
  },
};
</script>

<style scoped>
.filterTops {
  width: 100%;
  padding: 1%;
  /* border: 1px solid black; */
}

.color {
  width: 8%;
  margin: 1%;
}

.box {
  width: 100%;
  height: 20%;
  background-color: rgba(119, 119, 119, 0.079);
}

.mb {
  margin-bottom: 3vh;
}

.title {
  padding: 3.5%;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.06);
  display: flex;
  justify-content: space-between;
}

.title img {
  width: 4%;
  /* height: 5%; */
}

.box img {
  cursor: pointer;
}

.b2 {
  background-color: rgba(128, 128, 128, 0.16);
}

.content {
  padding: 3% 5%;
  margin-bottom: 3vh;
  background-color: rgba(119, 119, 119, 0.079);
}

.content ul li small {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

a,
.inner p {
  color: rgba(128, 128, 128, 0.848);
  transition: all 0.15s ease-in-out;
  font-weight: light;
  cursor: pointer;
}

.content a:hover,
.inner p:hover {
  color: rgba(0, 0, 0);
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);

  opacity: 0.001;
}

#rangeValue {
  position: relative;
  display: block;
  text-align: center;
  font-size: 1rem;
  color: #999;
  font-weight: 400;
}
.range {
  width: 80%;
  height: 25px;
  -webkit-appearance: none;
  background: var(--left-login);
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 1); */
}
.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  /* box-shadow: -407px 0 0 400px var(--left-login); */
}

.ran{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}
</style>
