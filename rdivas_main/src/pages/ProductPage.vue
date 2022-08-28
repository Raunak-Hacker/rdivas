<template>
  <div class="desktop" v-if="data">
    <section class="prod-page">
      <div class="tags add" v-if="added">Added to Cart</div>
      <div class="prod-photos">
        <div class="images" v-if="data.images">
          <div
            class="imgs"
            v-for="image in data.images"
            :key="image"
            @mouseenter="img(imgHost + image)"
          >
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
        <div class="flex-box" style="margin-bottom: 1.2rem">
          <div class="tags" style="background: green; color: white">
            {{ data.rating }} <i style="color: white" class="bx bxs-star" />
          </div>
          <div class="tags">{{ data.color }}</div>
          <div class="tags">{{ data.fabric }}</div>
          <div class="tags" v-if="data.Sale">Sale</div>
          <div class="tags" v-if="data.BestSeller">Best Seller</div>
        </div>
        <label style="color: grey; cursor: pointer"
          ><span style="text-decoration: underline" @click="showReview = true"
            >Reviews</span
          >
          >>
          <all-reviews
            :reviews="data.reviews"
            :show="showReview"
            @close="showReview = false"
          />
        </label>
        <div class="description">
          <p>{{ data.description }}</p>
        </div>
        <div class="fl-box" style="display: flex">
          <div class="specs">
            <label>Specifications </label>
            <div class="flex-box">
              <div class="boxes">
                <div class="box">
                  <label
                    >Size
                    <a style="text-decoration: underline" @click="showChart = true"
                      >(Size Chart)</a
                    ></label
                  >
                  <size-chart :show="showChart" @close="showChart = false" />
                  <div class="in-boxes">
                    <div
                      class="in-box size"
                      v-for="size in data.sizes"
                      :key="size"
                      :class="{ selSize: selSize(size.size) }"
                      @click="sClick(size.size)"
                    >
                      {{ size.size }}
                    </div>
                  </div>
                </div>
                <div class="box">
                  <label>Colors</label>
                  <div class="in-boxes colors">
                    <div
                      class="in-box"
                      v-for="image in data.group"
                      :key="image.id"
                      @click="colorChange"
                      @mouseover="lol = image.id"
                    >
                      <img :src="imgHost + image.image" alt="" />
                    </div>
                  </div>
                </div>
                <div class="box">
                  <label>Count</label>
                  <div
                    class="in-boxes count"
                    style="border: 1px solid rgba(0, 0, 0, 0.212)"
                  >
                    <div
                      class="in-box"
                      @click="quantity--"
                      style="border: none; margin: 0"
                    >
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
            </div>
          </div>
        </div>

        <div class="btn">
          <div class="price" style="margin-right: 8.5%">
            <h3 style="margin-right: 12.5%">₹{{ data.sellingPrice }}</h3>
            <p style="text-decoration: line-through; color: rgba(131, 131, 131, 0.818)">
              ₹{{ data.price }}
            </p>
          </div>
          <div class="btns" v-if="data.sizes.length != 0">
            <button @click="addToCart" style="">Add To Cart</button>
            <button @click="buyNow">Buy Now</button>
          </div>
          <div class="ob" v-else>Out of stock</div>
        </div>
        <br />
      </div>
    </section>
    <the-review
      @get-reviews="getReviews"
      :id="$route.params.id"
      :showHr="data.offers.length != 0"
      v-if="showRev"
    >
      <div class="benefits" v-for="offer in data.offers" :key="offer.Name">
        <div class="benefit">
          <img :src="imgHost + offer.Image" />
          <small>{{ offer.Name }}</small>
        </div>
      </div>
    </the-review>
    <div class="rel">
      <best-sell-cat
        v-if="randomList.length != 0"
        :products="randomList"
        title="Other Products You May Like"
      />
    </div>
  </div>

  <div class="mobile" v-if="data">
    <div class="tags add" v-if="added">Added to Cart</div>
    <div class="navigation">
      <div class="swipe left" @click="prev">
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.87 7.74689L16.5106 1.10626C16.9696 0.647278 17.7118 0.647278 18.1659 1.10626L19.2694 2.20978C19.7284 2.66876 19.7284 3.41095 19.2694 3.86505L14.5673 8.57697L19.2743 13.284C19.7333 13.743 19.7333 14.4852 19.2743 14.9393L18.1708 16.0477C17.7118 16.5067 16.9696 16.5067 16.5155 16.0477L9.87488 9.40704C9.41101 8.94806 9.41101 8.20587 9.87 7.74689V7.74689ZM0.494998 9.40704L7.13562 16.0477C7.59461 16.5067 8.33679 16.5067 8.7909 16.0477L9.89441 14.9442C10.3534 14.4852 10.3534 13.743 9.89441 13.2889L5.19226 8.57697L9.89929 3.86993C10.3583 3.41095 10.3583 2.66876 9.89929 2.21466L8.79578 1.10626C8.33679 0.647278 7.59461 0.647278 7.14051 1.10626L0.49988 7.74689C0.0360131 8.20587 0.0360132 8.94806 0.494998 9.40704V9.40704Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="swipe right" @click="next">
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.74365 8.64502L3.10303 15.2856C2.64404 15.7446 1.90186 15.7446 1.44775 15.2856L0.344238 14.1821C-0.114746 13.7231 -0.114746 12.981 0.344238 12.5269L5.05127 7.81982L0.344238 3.11279C-0.114746 2.65381 -0.114746 1.91162 0.344238 1.45752L1.44287 0.344238C1.90186 -0.114746 2.64404 -0.114746 3.09814 0.344238L9.73877 6.98486C10.2026 7.44385 10.2026 8.18604 9.74365 8.64502V8.64502ZM19.1187 6.98486L12.478 0.344238C12.019 -0.114746 11.2769 -0.114746 10.8228 0.344238L9.71924 1.44775C9.26025 1.90674 9.26025 2.64893 9.71924 3.10303L14.4263 7.81006L9.71924 12.5171C9.26025 12.9761 9.26025 13.7183 9.71924 14.1724L10.8228 15.2759C11.2817 15.7349 12.0239 15.7349 12.478 15.2759L19.1187 8.63525C19.5776 8.18603 19.5776 7.44385 19.1187 6.98486Z"
            fill="black"
          />
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
      <div class="ratingp">
        <div class="star">
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5985 1.29528L7.76429 7.0418L1.42314 7.96628C0.285991 8.13121 -0.169738 9.53312 0.654914 10.3361L5.24259 14.8066L4.15752 21.1217C3.96221 22.2632 5.16446 23.1182 6.17141 22.5843L11.8442 19.6026L17.5169 22.5843C18.5238 23.1138 19.7261 22.2632 19.5308 21.1217L18.4457 14.8066L23.0334 10.3361C23.858 9.53312 23.4023 8.13121 22.2652 7.96628L15.924 7.0418L13.0898 1.29528C12.582 0.27097 11.1106 0.257949 10.5985 1.29528Z"
              fill="white"
            />
          </svg>
          <p>4.5</p>
        </div>
        <div class="reviewsp" @click="showReview = true">Reviews >></div>
        <all-reviews
          :reviews="data.reviews"
          :show="showReview"
          @close="showReview = false"
        />
        <div class="wish wishm" :class="{ wished: wish }" @click="toggleWish">
          <i class="bx bxs-heart" v-if="wish" />
          <i class="bx bx-heart" v-else />
          <p>Wishlist</p>
        </div>
      </div>
      <div class="price">
        <h3>₹{{ data.sellingPrice }}</h3>
        <h3
          style="
            text-decoration: line-through;
            color: rgba(131, 131, 131, 0.818);
            font-weight: 200;
          "
        >
          ₹{{ data.price }}
        </h3>
      </div>
      <div class="benifits" v-for="offer in data.offers" :key="offer.Name">
        <div class="benefit">
          <img :src="imgHost + offer.Image" />
          <small>{{ offer.Name }}</small>
        </div>
      </div>

      <div class="specs">
        <a style="text-decoration: underline; font-size: small" @click="showChart = true"
          >Size Chart</a
        >
        <size-chart :show="showChart" @close="showChart = false" />
        <div class="flex-box">
          <div class="boxes">
            <div class="box">
              <label>Colors</label>
              <div class="in-boxes colors">
                <div
                  class="in-box"
                  v-for="image in data.group"
                  :key="image.id"
                  @click="colorChange"
                  @mouseover="lol = image.id"
                >
                  <img :src="imgHost + image.image" alt="" />
                </div>
              </div>
            </div>
            <div class="box">
              <label>Size</label>
              <div class="in-boxes">
                <div
                  class="in-box size"
                  v-for="size in data.sizes"
                  :key="size"
                  :class="{ selSize: selSize(size.size) }"
                  @click="sClick(size.size)"
                >
                  {{ size.size }}
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
        </div>
      </div>
      <the-review @get-reviews="getReviews" :id="$route.params.id" v-if="!showRev" />

      <div class="mbtns">
        <mob-filter @add="addToCart" @buy="buyNow" :show="data.sizes.length == 0" />
      </div>
    </div>
  </div>
  <div class="mobile" style="margin-top: 4%">
    <best-sell-cat
      :products="randomList"
      title="You May Like"
      v-if="randomList.length != 0"
    />
  </div>
</template>

<script>
import TheReview from "@/components/ui/TheReview.vue";
import AllReviews from "@/components/ui/AllReviews.vue";
import SizeChart from "@/components/ui/SizeChart.vue";
import BestSellCat from "@/components/home/BestSellCat.vue";
import MobFilter from "@/components/ui/MobFilter.vue";
export default {
  components: { TheReview, SizeChart, BestSellCat, MobFilter, AllReviews },
  data() {
    return {
      data: null,
      lol: null,
      imgId: null,
      mimg: null,
      images: [],
      wish: false,
      quantity: 1,
      showChart: false,
      showReview: false,
      size: null,
      added: false,
      chart: false,
      list: null,
      prod: [],
      maxCount: 10,
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  async created() {
    const response = await fetch(
      `${this.$store.getters.host}/get/product/${this.$route.params.id}`
    );
    let data = await response.json();
    if (data.status == "error" || data.statusCode == 500) {
      window.location.replace("/not-found");
      return;
    }
    if (this.$store.getters.wishlist) {
      let wishl = this.$store.getters.wishlist;
      let wished = wishl.filter((item) => {
        return item.id == this.$route.params.id;
      });
      if (!wished.length == 0) {
        this.wish = true;
      }
    }
    for (let i = 0; i < data.reviews.length; i++) {
      var date = new Date(data.reviews[i].createdAt);
      data.reviews[i].createdAt = date.toDateString();
    }
    this.data = data;
    this.images = data.images;
    this.imgId = 0;
    this.mimg = this.imgHost + this.data.images[0];
    this.$store.dispatch("getProdDetails", data);

    fetch(`${this.$store.getters.host}/get/home/listing`)
      .then((response) => response.json())
      .then((data) => {
        this.list = data;
        this.prod = this.list[(Math.random() * (this.list.length - 1)) | 0];
      });
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    imgHost() {
      return this.$store.getters.imgHost;
    },
    showRev() {
      return window.innerWidth > 768 ? true : false;
    },
    randomList() {
      return this.list[(Math.random() * (this.list.length - 1)) | 0].products;
    },
    cmaxCount() {
      let sizeobj = this.data.sizes;
      let quantity = 1;

      for (let i = 0; i < sizeobj.length; i++) {
        if (sizeobj[i].size == this.size) {
          return sizeobj[i].quantity;
        }
      }

      return quantity;
    },
  },
  methods: {
    selSize(size) {
      return size == this.size ? true : false;
    },
    sClick(size) {
      this.size = size;
    },
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
    buyNow() {
      if (!this.auth) {
        this.$router.push("/login");
        return;
      }
      if (!this.size) {
        alert("Select size");
        return;
      }
      this.addToCart();
      this.$router.push("/cart");
    },
    colorChange() {
      this.$router.push(`/product/${this.lol}`);
    },
    async toggleWish() {
      if (this.auth) {
        if (this.wish == false) {
          await fetch(
            this.$store.getters.host + "/user/addtowishlist/" + this.$route.params.id,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          this.$store.commit("getWishList");
          this.wish = true;
        } else {
          await fetch(
            this.$store.getters.host +
              "/user/deletefromwishlist/" +
              this.$route.params.id,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          this.$store.commit("getWishList");
          this.wish = false;
        }
      } else {
        this.$router.push("/login");
      }
    },
    img(image) {
      this.mimg = image;
    },
    async getReviews() {
      const response = await fetch(
        `${this.$store.getters.host}/get/product/${this.$route.params.id}`
      );
      let data = await response.json();
      for (let i = 0; i < data.reviews.length; i++) {
        var date = new Date(data.reviews[i].createdAt);
        data.reviews[i].createdAt = date.toDateString();
      }
      this.data = data;
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
      } else if (newVal >= this.maxCount) {
        this.quantity = this.maxCount;
      }
    },
    size(newVal) {
      let sizeobj = this.data.sizes;
      for (let i = 0; i < sizeobj.length; i++) {
        if (sizeobj[i].size == newVal) {
          this.maxCount = sizeobj[i].quantity;
        }
      }
      if (this.quantity > this.maxCount) {
        this.quantity = this.maxCount;
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
  /* height: 100vh; */
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
  width: 57.5%;
  height: 80vh;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}

.main-img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
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
  z-index: 1000;
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
.fl-box,
.box,
.boxes,
.btn {
  margin-top: 3.5%;
}

.description p {
  font-size: 0.8rem;
  line-height: 1.5;
  width: 75%;
  color: rgba(0, 0, 0, 0.6);
}

.specs {
  width: 100%;
}

.specs label {
  width: 45%;
  color: rgba(131, 131, 131, 0.918);
  font-weight: 600;
  font-size: 1rem;
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
  width: 100%;
}

.in-boxes {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
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
  width: 20%;
  margin-left: 3%;
  display: flex;
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
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  height: 18.5vh;
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
}

.price h3 {
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
}
.price p {
  font-family: "Montserrat", sans-serif;
}

.btns {
  width: 68%;
}

button,
.ob {
  padding: 0.7rem 1rem;
  margin-right: 2%;
  border: 1px solid #e5e5e5;
  width: fit-content;
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

.ratingp {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  margin-top: 0.5rem;
  width: 100%;
}
.reviewsp {
  width: 50%;
}
.wishm {
  width: 30%;
  height: 2.4rem;
  padding: 0 2.5%;
  font-size: small;
  border: 1px solid #d6d6d6;
  background-color: #d6d6d650;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.wished {
  background-color: #ff3c3c25;
  color: red;
}
.benefits {
  padding: 0;
  width: 100%;
}
.benefit {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1%;
}
.benefit img {
  width: 1.2rem;
  margin-right: 1rem;
}
.benefit small {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

.rel {
  margin-top: 2%;
  width: 100%;
  padding: 0 2%;
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
    height: 55vh;
  }

  .mimage img {
    width: 100%;
    height: 100%;
    object-fit: fill;
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

  .benefit {
    height: 2.5em;
    padding: 0.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .benefit img {
    height: 80%;
    object-fit: contain;
  }

  .benefit small {
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
  .add {
    top: 15%;
    padding: 0 4%;
    font-size: 0.75rem;
    background-color: #d6d6d63d;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c5c5c577;
  }

  .boxes {
    width: 90%;
  }
}
</style>
