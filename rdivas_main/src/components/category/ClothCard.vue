<template>
  <div class="prod" @mouseenter="iconHover" @mouseleave="iconHover">
    <div class="img" @click="$router.push('/product/' + id)">
      <img :src="imgUrl"  />
      <div
        class="sale tag"
        v-if="sale && !($route.path == '/wish-list' || $route.path == '/wish-list/')"
      >
        SALE
      </div>
      <div
        class="new tag"
        v-if="best && !($route.path == '/wish-list' || $route.path == '/wish-list/')"
      >
        BEST SELLER
      </div>
    </div>

    <transition v-if="true">
      <div class="icons" :class="{ wished: wish }">
        <a @click="addWish" @mouseenter="upHere = false">
          <i class="bx bxs-heart" v-if="wish" /> <i class="bx bx-heart" v-else />
        </a>
      </div>
    </transition>
    <div class="det" @mouseenter="upHere = false">
      <router-link :to="'/product/' + id">
        <p>{{ name }}</p>
      </router-link>
      <h5
        :class="{ red: sale }"
        v-if="!($route.path == '/wish-list' || $route.path == '/wish-list/')"
      >
        &#8377; {{ price }} <s v-if="sale">₹{{ discount }}</s>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "imgUrl", "price", "best", "sale", "discount", "color"],
  data() {
    return {
      icon: false,
      upHere: false,
      wish: false,
    };
  },
  created() {
    if (this.$store.getters.wishlist) {
      let wishl = this.$store.getters.wishlist;
      let wished = wishl.filter((item) => {
        return item.id == this.id;
      });
      if (!wished.length == 0) {
        this.wish = true;
      }
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    iconHover() {
      this.icon = !this.icon;
      this.upHere = false;
    },
    async addWish() {
      if (this.auth) {
        if (this.wish == false) {
          await fetch(this.$store.getters.host + "/user/addtowishlist/" + this.id, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          this.$store.commit("getWishList");
          this.wish = true;
        } else {
          await fetch(this.$store.getters.host + "/user/deletefromwishlist/" + this.id, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          this.$store.commit("getWishList");

          this.wish = false;
        }
      } else {
        this.$router.push("/login");
      }
    },
    addCart(size) {
      if (this.auth) {
        const product = {
          prodId: this.id,
          name: this.name,
          price: this.price,
          image: this.imgUrl,
          quantity: 1,
          size: size,
          color: this.color,
          discount: this.discount,
        };
        this.$store.dispatch("addToCart", product);
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.35s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.red {
  color: #ca1515;
}

a {
  text-decoration: none;
  color: #000;
}

s {
  text-decoration: line-through;
  font-family: "Roboto", sans-serif;
  margin-left: 0.5vw;
  color: gray;
}

i {
  color: rgba(0, 0, 0, 0.505);
}
.det h5 {
  font-family: "Calibiri", sans-serif;
}
.prod {
  width: 98%;
  height: 55vh;
  margin-bottom: 2%;
  display: flex;
  margin: 0.5%;
  flex-direction: column;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
}

.icons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 2%;
  right: 5%;
}

.icons a {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  background: #dddddd90;
  color: #111111;
  text-align: center;
  border-radius: 50%;
}
.icons i {
  margin-top: 25%;
  font-size: 1.15rem;
}

.icons a:hover {
  background-color: #ca1515;
  transition: background-color 300ms linear;
}

.icons a:hover i {
  transform: rotate(360deg);
  color: white;
  transition: all 300ms ease-in-out;
}
.wished a,
.wished i {
  background-color: #ca1515;
  color: white;
  transition: background-color 300ms linear;
}
.siz p {
  margin-top: 20%;
}

.img {
  width: 100%;
  height: 75%;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
}

.img img {
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}

.tag {
  position: absolute;
  top: 3%;
  left: 3%;
  color: white;
  padding: 0.22rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 450;
}

.sale {
  background: #ca1515;
  font-family: "Raleway", sans-serif;
}
.new {
  background: #36a300;
  font-family: "Montserrat", sans-serif;
}

.det {
  width: 100%;
  /* height: 30%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.det p {
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: small;
  /* height: 80%; */
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .prod {
    width: 98%;
    height: calc(7vh + 15rem);
    margin-bottom: 2%;
    display: flex;
    margin: 0.5%;
    flex-direction: column;
    position: relative;
    border: 1.75px solid #e0e0e0;
  }

  .img {
    width: 100%;
    height: 66.5%;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    /* object-fit: contain; */
  }

  .icons {
    display: none;
  }

  .det {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
  }

  .det p {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: small;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .det p:after {
    content: "\02026";
  }
  .det h5 {
    font-family: "Calibiri", sans-serif;
  }
  .new {
    padding: 0.22rem 0.15rem;
    font-size: 0.55rem;
  }
}
</style>
