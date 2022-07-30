<template>
  <div class="floating" @click="closechart" v-if="chart">
    <div class="flex">
      <div class="content">
        <img src="@/assets/sample.jpg" alt="" />
      </div>
      <div class="close">X</div>
    </div>
  </div>

  <div class="desktop">
    <section class="prod-page">
      <div class="tags add" v-if="added">Added to Cart</div>
      <div class="prod-photos">
        <div class="images" v-if="data.images">
          <div class="imgs" v-for="image in data.images" :key="image" @mouseenter="img(imgHost + image)">
            <div class="img" v-if="image">
              <img :src="imgHost + image" alt="sdsd" />
            </div>
          </div>
        </div>
        <div class="main-img">
          <img :src="mimg" alt="" />
        </div>
      </div>

      <div class="prod-info">
        <small @click="$router.go(-1)">
          <i class="bx bx-chevron-left" /> &nbsp;&nbsp; Back to shop
        </small>
        <div class="prod-name">
          <div class="name">
            <h1>{{ data.name }}</h1>
          </div>
          <div class="wish" :class="{ wished: wish }" @click="toggleWish">
            <i class="bx bxs-heart" v-if="wish" />
            <i class="bx bx-heart" v-else />
            <p>Wishlist</p>
          </div>
        </div>
        <div class="flex-box">
          <div class="tags">{{ data.color }}</div>
          <div class="tags">{{ data.fabric }}</div>
          <div class="tags" v-if="data.Sale">Sale</div>
          <div class="tags" v-if="data.BestSeller">Best Seller</div>
        </div>
        <div class="description">
          <p>{{ data.description }}</p>
        </div>
        <div class="specs">
          <label>Specifications</label>
          <div class="flex-box">
            <div class="boxes">
              <div class="box">
                <label>Size</label>
                <div class="in-boxes">
                  <div class="in-box size" v-if="data.S" :class="{ selSize: s }" @click="sClick">
                    S
                  </div>
                  <div class="in-box size" v-if="data.M" :class="{ selSize: m }" @click="mClick">
                    M
                  </div>
                  <div class="in-box size" v-if="data.L" :class="{ selSize: l }" @click="lClick">
                    L
                  </div>
                  <div class="in-box size" v-if="data.XL" :class="{ selSize: xl }" @click="xlClick">
                    XL
                  </div>
                  <div class="in-box size" v-if="data.XXL" :class="{ selSize: xxl }" @click="xxlClick">
                    XXL
                  </div>
                </div>
              </div>
              <div class="box">
                <label>Colors</label>
                <div class="in-boxes colors">
                  <div class="in-box" v-for="image in data.group" :key="image.id" @click="colorChange"
                    @mouseover="lol = image.id">
                    <img :src="imgHost + image.image" alt="" />
                  </div>
                </div>
              </div>
              <div class="box">
                <label>Count</label>
                <div class="in-boxes count" style="border: 1px solid rgba(0, 0, 0, 0.212)">
                  <div class="in-box" @click="quantity--" style="border: none; margin: 0">
                    <i class="bx bx-minus" />
                  </div>
                  <div class="in-box" style="border: none; cursor: default">
                    {{ quantity }}
                  </div>
                  <div class="in-box" @click="quantity++" style="border: none">
                    <i class="bx bx-plus" />
                  </div>
                </div>
              </div>
            </div>
            <div class="reviews"></div>
          </div>
        </div>

        <div class="btn">
          <div class="price">
            <h3 style="margin-right: 12.5%">₹{{ data.sellingPrice.toFixed(2) }}</h3>
            <p style="text-decoration: line-through; color: rgba(131, 131, 131, 0.818)">
              ₹{{ data.price }}
            </p>
          </div>
          <div class="btns">
            <button @click="addToCart" style="margin-left: 8.5%">Add To Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <br />
      </div>
    </section>
  </div>

  <div class="mobile">
    <div class="navigation">
      <div class="swipe left" @click="prev">
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.87 7.74689L16.5106 1.10626C16.9696 0.647278 17.7118 0.647278 18.1659 1.10626L19.2694 2.20978C19.7284 2.66876 19.7284 3.41095 19.2694 3.86505L14.5673 8.57697L19.2743 13.284C19.7333 13.743 19.7333 14.4852 19.2743 14.9393L18.1708 16.0477C17.7118 16.5067 16.9696 16.5067 16.5155 16.0477L9.87488 9.40704C9.41101 8.94806 9.41101 8.20587 9.87 7.74689V7.74689ZM0.494998 9.40704L7.13562 16.0477C7.59461 16.5067 8.33679 16.5067 8.7909 16.0477L9.89441 14.9442C10.3534 14.4852 10.3534 13.743 9.89441 13.2889L5.19226 8.57697L9.89929 3.86993C10.3583 3.41095 10.3583 2.66876 9.89929 2.21466L8.79578 1.10626C8.33679 0.647278 7.59461 0.647278 7.14051 1.10626L0.49988 7.74689C0.0360131 8.20587 0.0360132 8.94806 0.494998 9.40704V9.40704Z"
            fill="black" />
        </svg>
      </div>
      <div class="swipe right" @click="next">
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.74365 8.64502L3.10303 15.2856C2.64404 15.7446 1.90186 15.7446 1.44775 15.2856L0.344238 14.1821C-0.114746 13.7231 -0.114746 12.981 0.344238 12.5269L5.05127 7.81982L0.344238 3.11279C-0.114746 2.65381 -0.114746 1.91162 0.344238 1.45752L1.44287 0.344238C1.90186 -0.114746 2.64404 -0.114746 3.09814 0.344238L9.73877 6.98486C10.2026 7.44385 10.2026 8.18604 9.74365 8.64502V8.64502ZM19.1187 6.98486L12.478 0.344238C12.019 -0.114746 11.2769 -0.114746 10.8228 0.344238L9.71924 1.44775C9.26025 1.90674 9.26025 2.64893 9.71924 3.10303L14.4263 7.81006L9.71924 12.5171C9.26025 12.9761 9.26025 13.7183 9.71924 14.1724L10.8228 15.2759C11.2817 15.7349 12.0239 15.7349 12.478 15.2759L19.1187 8.63525C19.5776 8.18603 19.5776 7.44385 19.1187 6.98486Z"
            fill="black" />
        </svg>
      </div>
    </div>
    <div class="mimage" @touchstart="touchStart">
      <img :src="mimg" alt="product image" />
    </div>
    <div class="mcontent">
      <div class="mtitle">
        <h1>{{ data.name }}</h1>
      </div>
      <div class="rating">
        <div class="star">
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5985 1.29528L7.76429 7.0418L1.42314 7.96628C0.285991 8.13121 -0.169738 9.53312 0.654914 10.3361L5.24259 14.8066L4.15752 21.1217C3.96221 22.2632 5.16446 23.1182 6.17141 22.5843L11.8442 19.6026L17.5169 22.5843C18.5238 23.1138 19.7261 22.2632 19.5308 21.1217L18.4457 14.8066L23.0334 10.3361C23.858 9.53312 23.4023 8.13121 22.2652 7.96628L15.924 7.0418L13.0898 1.29528C12.582 0.27097 11.1106 0.257949 10.5985 1.29528Z"
              fill="white" />
          </svg>
          <p>4.5</p>
        </div>
        <div class="reviews">Reviews >></div>
      </div>
      <div class="price">
        <h3>₹{{ data.sellingPrice }}</h3>
        <h3 style="
            text-decoration: line-through;
            color: rgba(131, 131, 131, 0.818);
            font-weight: 200;
          ">
          ₹{{ data.price }}
        </h3>
      </div>
      <div class="benifits">
        <div class="benefits-ind">
          <img src="https://selvia.in/media/wysiwyg/discount.png" alt="" />
          <p>Special offer: Pay online and get 5% OFF</p>
        </div>
      </div>

      <div class="specs">
        <label @click="togglechart">Size Chart</label>
        <div class="flex-box">
          <div class="boxes">
            <div class="box">
              <label>Colors</label>
              <div class="in-boxes colors">
                <div class="in-box" v-for="image in data.group" :key="image.id" @click="colorChange"
                  @mouseover="lol = image.id">
                  <img :src="imgHost + image.image" alt="" />
                </div>
              </div>
            </div>
            <div class="box">
              <label>Size</label>
              <div class="in-boxes">
                <div class="in-box size" v-if="data.S" :class="{ selSize: s }" @click="sClick">
                  S
                </div>
                <div class="in-box size" v-if="data.M" :class="{ selSize: m }" @click="mClick">
                  M
                </div>
                <div class="in-box size" v-if="data.L" :class="{ selSize: l }" @click="lClick">
                  L
                </div>
                <div class="in-box size" v-if="data.XL" :class="{ selSize: xl }" @click="xlClick">
                  XL
                </div>
                <div class="in-box size" v-if="data.XXL" :class="{ selSize: xxl }" @click="xxlClick">
                  XXL
                </div>
              </div>
            </div>

            <div class="box">
              <label>Count</label>
              <div class="in-boxes count" style="border: 1px solid rgba(0, 0, 0, 0.212)">
                <div class="in-box" @click="quantity--" style="border: none; margin: 0">
                  <i class="bx bx-minus" />
                </div>
                <div class="in-box" style="border: none; cursor: default">
                  {{ quantity }}
                </div>
                <div class="in-box" @click="quantity++" style="border: none">
                  <i class="bx bx-plus" />
                </div>
              </div>
            </div>
          </div>
          <div class="reviews"></div>
        </div>
      </div>

      <div class="mbtn">
        <button @click="addToCart">Add To Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      lol: null,
      imgId: null,
      mimg: null,
      images: [],
      wish: false,
      quantity: 1,
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
      size: null,
      added: false,
      chart: false,
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  async created() {
    try {
      const response = await fetch(
        `${this.$store.getters.host}/get/product/${this.$route.params.id}`
      );
      const data = await response.json();

      this.data = data;
      this.images = data.images;
      this.imgId = 0;
      this.mimg = this.imgHost + this.data.images[0];
      this.$store.dispatch("getProdDetails", data);
    } catch (error) {
      this.data = error;
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    imgHost() {
      return this.$store.getters.imgHost;
    },
  },
  methods: {
    togglechart() {
      this.chart = !this.chart;
    },
    closechart() {
      this.chart = false;
    },
    touchStart(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      addEventListener("touchend", (touchEvent) => this.touchEnd(touchEvent, posXStart), {
        once: true,
      });
    },
    prev() {
      this.imgId--;
      if (this.imgId < 0) {
        this.imgId = this.images.length - 1;
      }
      this.mimg = this.imgHost + this.images[this.imgId];
    },
    next() {
      this.imgId++;
      if (this.imgId > this.images.length - 1) {
        this.imgId = 0;
      }
      this.mimg = this.imgHost + this.images[this.imgId];
    },
    touchEnd(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      if (posXStart < posXEnd) {
        //   this.previous(); // swipe right
        this.imgId--;
        if (this.imgId < 0) {
          this.imgId = this.images.length - 1;
        }
        this.mimg = this.imgHost + this.images[this.imgId];
      } else if (posXStart > posXEnd) {
        //   this.next(); // swipe left
        this.imgId++;
        if (this.imgId > this.images.length - 1) {
          this.imgId = 0;
        }
        this.mimg = this.imgHost + this.images[this.imgId];
      }
    },
    addToCart() {
      if (!this.auth) {
        this.$router.push("/login");
        return;
      }
      if (!this.size) {
        alert("Select size");
        return;
      }
      const product = {
        prodId: this.data.id,
        quantity: this.quantity,
        size: this.size,
        color: this.data.color,
      };
      this.$store.dispatch("addToCart", product);
      this.added = true;
      setTimeout(() => {
        this.added = false;
      }, 2000);
    },
    colorChange() {
      this.$router.push(`/product/${this.lol}`);
    },
    toggleWish() {
      if (this.auth) {
        this.wish = !this.wish;
        if (this.wish == true) {
          const product = {
            id: this.data.id,
            name: this.data.name,
            price: this.data.sellingPrice,
            image: this.data.image1,
          };
          this.$store.commit("addToWishList", product);
        }
      } else {
        this.$router.push("/login");
      }
    },
    img(image) {
      this.mimg = image;
    },
    selSize() {
      this.s = false;
      this.m = false;
      this.l = false;
      this.xl = false;
      this.xxl = false;
    },
    sClick() {
      this.selSize();
      this.s = true;
      this.size = "S";
      this.$store.commit("setSize", "s");
    },
    mClick() {
      this.selSize();
      this.m = true;
      this.size = "M";
      this.$store.commit("setSize", "m");
    },
    lClick() {
      this.selSize();
      this.l = true;
      this.size = "L";
      this.$store.commit("setSize", "l");
    },
    xlClick() {
      this.selSize();
      this.xl = true;
      this.size = "XL";
      this.$store.commit("setSize", "xl");
    },
    xxlClick() {
      this.selSize();
      this.xxl = true;
      this.size = "XXL";
      this.$store.commit("setSize", "xxl");
    },
  },
  watch: {
    async $route() {
      if (this.$route.path === "/product/" + this.$route.params.id) {
        const response = await fetch(
          `${this.$store.getters.host}/get/product/${this.$route.params.id}`
        );
        const data = await response.json();
        this.data = data;
        this.images = data.images;
        this.mimg = this.imgHost + this.data.images[0];
        // this.imgId = 0;
        this.$store.dispatch("getProdDetails", data);
      }
    },
    quantity(newVal) {
      if (newVal < 1) {
        this.quantity = 1;
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.svg {
  width: 1vh;
  height: 1rem;
  fill: #ca1515;
}

.in-svg {
  width: 100%;
  height: 100%;
}

.prod-page {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  height: 100vh;
  width: 100%;
}

.prod-photos {
  display: flex;
  justify-content: flex-start;
  width: 55%;
  height: 89%;
  background-color: #fff;
}

.imgs {
  height: 5rem;
  width: 4rem;
  margin: 0.3rem;
}

.images {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  height: 70%;
}

.img {
  height: 100%;
  width: 100%;
  background-color: #fff;
  margin: 0.5rem;
  cursor: pointer;
  border: 1px solid #d8d8d8;
  padding: 0.5rem;
}

.img img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
}

.img img:hover {
  opacity: 0.6;
}

.main-img {
  width: 50%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}

.main-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.prod-info {
  padding: 1rem 2rem 0 0;
  width: 45%;
  height: 100%;
  background-color: #fff;
}

.prod-info small {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.9rem;
  color: rgb(163, 163, 163);
  cursor: pointer;
}

.prod-info small i {
  font-size: 1.5rem;
}

.prod-info h1 {
  font-size: 1.8rem;
  font-weight: 600;
  width: 85%;
  margin: 0;
}

.prod-name,
.wish {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  width: 81%;
}

.wish {
  width: 19%;
  padding: 1.5% 3%;
  font-size: small;
  border: 1px solid #d6d6d6;
  background-color: #d6d6d650;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.flex-box {
  display: flex;
  justify-content: flex-start;
}

.tags {
  margin-top: 3%;
  width: max-content;
  padding: 1.5% 3%;
  font-size: small;
  background-color: #d6d6d63d;
  margin-right: 2%;
}

.add {
  top: 7%;
  width: fit-content;
  padding: 0.7% 2%;
  font-size: small;
  background-color: #d6d6d63d;
  margin-right: 2%;
  height: fit-content;
  position: fixed;
  right: 0;
  border: 1px solid #d6d6d6;
}

.wish i {
  font-size: large;
}

.wish:hover,
.wished {
  background-color: #ff3c3c25;
  color: red;
}

.description,
.specs,
.box,
.boxes,
.btn {
  margin-top: 4.5%;
}

.description p {
  font-size: 0.8rem;
  line-height: 1.5;
  width: 75%;
  color: rgba(0, 0, 0, 0.6);
}

.specs label {
  width: 45%;
  color: rgba(131, 131, 131, 0.918);
  font-weight: 600;
}

.box {
  display: flex;
  align-items: center;
}

.box label {
  color: rgba(163, 163, 163, 0.96);
  font-weight: 600;
  font-size: small;
  width: 20%;
}

.boxes {
  width: 70%;
}

.in-boxes {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  height: 8%;
  width: 75%;
}

.in-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 4%;
  border: 1px solid rgba(0, 0, 0, 0.212);
  height: 4rem;
  width: 3.5rem;
  cursor: pointer;
}

.colors {
  min-height: 4rem;

  flex-wrap: wrap;
}

.size {
  height: 2rem;
}

.in-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.in-box img:hover {
  opacity: 0.4;
}

.count {
  height: 2.5rem;
  width: 25%;
  margin-left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.count i {
  color: rgba(0, 0, 0, 0.505);
  font-size: large;
}

.size {
  transition: all 0.25s ease-in-out;
}

.size:hover {
  background-color: #000;
  color: #fff;
}

.selSize {
  background-color: #000;
  color: #fff;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
}

.price h3 {
  font-size: 1.8rem;
}

.btns {
  display: flex;
  align-items: center;
  width: 68%;
}

button {
  padding: 0.7rem 1rem;
  margin-right: 2%;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  background-color: rgb(44, 43, 43);
  font-weight: 500;
  color: rgb(223, 223, 223);
}

.mobile {
  display: none;
}

.desktop {
  display: block;
}

.flex {
  display: flex;
}

.floating {
  position: fixed;
  top: 10%;
  left: 5%;
  z-index: 999;
}

.floating img {
  width: 80%;
}

.close {
  padding-bottom: 200%;
}

.star {
  background-color: green;
  color: white;
  padding: 0.2rem;
  padding-right: 0.4rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
}

.star svg {
  height: 1rem;
}

p {
  margin-left: 0.1rem;
}

.rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  margin-top: 0.5rem;
}

.reviews {
  font-size: 1.2rem;
  color: rgb(100, 100, 100);
}

@media screen and (max-width: 768px) {
  .floating {
    position: fixed;
    top: 30%;
    left: 5%;
    z-index: 999;
  }

  .mobile {
    display: block;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .desktop {
    display: none;
  }

  .mimage {
    margin-top: 1rem;
    width: 100%;
    height: 50vh;
  }

  .mimage img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 35%;
    left: 0;
    position: absolute;
    z-index: 0;
    margin: auto;
    /* left:2.5% */
  }

  .swipe {
    padding: 1rem;
  }

  .swipe svg {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  .mtitle h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(40, 40, 40);
    margin-top: 1rem;
  }

  .price {
    margin: 0.8rem 0;
  }

  .price h3 {
    font-size: 1.5rem;
    margin: 0.5rem;
    margin-left: 0;
  }

  .benifits {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    margin-top: 1rem;
    height: fit-content;
  }

  .benefits-ind {
    height: 2.5em;
    padding: 0.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .benefits-ind img {
    height: 80%;
    object-fit: contain;
  }

  .benefits-ind p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: rgb(100, 100, 100);
  }

  .in-boxes {
    width: 100%;
  }

  .count {
    height: 2.5rem;
    width: 35%;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    margin-bottom: 0.7rem;
  }

  .boxes {
    width: 90%;
  }
}
</style>
