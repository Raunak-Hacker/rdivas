<template>
  <div class="prod" @mouseenter="iconHover" @mouseleave="iconHover">
    <div class="img" @click="$router.push('/product/' + id)">
      <img :src="imgUrl" :style="{ 'object-fit': fit }" />
      <div class="sale tag" v-if="sale">SALE</div>
      <div class="new tag" v-if="best">BEST SELLER</div>
    </div>

    <transition v-if="upHere">
      <div class="icons siz" style="top: 24vh" v-if="icon">
        <a @click="addCart('S')">
          <p>S</p>
        </a>
        <a @click="addCart('M')">
          <p>M</p>
        </a>
        <a @click="addCart('L')">
          <p>L</p>
        </a>
        <a @click="addCart('XL')">
          <p>XL</p>
        </a>
        <a @click="addCart('XXL')" v-if="l">
          <p>XXL</p>
        </a>
      </div>
    </transition>
    <transition v-if="true">
      <div class="icons" v-if="icon">
        <a @mouseenter="upHere = false"> <i class="bx bx-expand-alt" /> </a>
        <a @click="addWish" @mouseenter="upHere = false"> <i class="bx bx-heart" /> </a>
        <a @mouseenter="upHere = true"> <i class="bx bx-cart" /> </a>
        <!-- <a @click="addCart" > <i class="bx bx-cart" /> </a> -->
      </div>
    </transition>
    <div class="det" @mouseenter="upHere = false">
      <router-link :to="'/product/' + id">
        <p>{{ name }}</p>
      </router-link>
      <h5 :class="{ red: sale }">
        ₹ {{ price }} <s v-if="sale">₹{{ discount }}</s>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    best: {
      type: Boolean,
      required: true,
    },
    sale: {
      type: Boolean,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fit: {
      type: String,
    },
  },
  data() {
    return {
      icon: false,
      upHere: false,
    };
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    s() {
      return this.$store.state.s;
    },
    m() {
      return this.$store.state.m;
    },
    l() {
      return this.$store.state.l;
    },
    xl() {
      return this.$store.state.xl;
    },
    xxl() {
      return this.$store.state.xxl;
    },
  },
  methods: {
    iconHover() {
      this.icon = !this.icon;
      this.upHere = false;
    },
    addWish() {
      if (this.auth) {
        const product = {
          id: this.id,
          name: this.name,
          price: this.price,
          image: this.imgUrl,
        };
        this.$store.commit("addToWishList", product);
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

.prod {
  width: 98%;
  height: 10%;
  margin-bottom: 2%;
  display: flex;
  margin: 0.5%;
  flex-direction: column;
  position: relative;
  border: 1px solid #e0e0e0;
}

.icons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  position: absolute;
  top: 30vh;
  left: 15%;
  /* transition: 3s ease-in-out; */
}

.icons a {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  background: #dddddd90;
  color: #111111;
  text-align: center;
  /* transition: 3s ease-in-out; */
  border-radius: 50%;
}

.siz p {
  margin-top: 20%;
}

.img {
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .prod {
    width: 100%;
    height: 20%;
    margin-bottom: 2%;
    display: flex;
    margin: 0.5%;
    flex-direction: column;
    position: relative;
    border: 1px solid #e0e0e0;
  }

  .img {
    width: 100%;
    height: 20vh;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .icons {
    display: none;
    /* display: flex; */
    justify-content: space-evenly;
    /* margin-top: 1.5rem; */
    width: 75%;
    position: absolute;
    top: 55%;
    left: 15%;
    /* transition: 3s ease-in-out; */
  }

  .icons a {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    background: #dddddd90;
    color: #111111;
    text-align: center;
    /* transition: 3s ease-in-out; */
    border-radius: 50%;
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
    margin-bottom: 1rem;
  }
  .det p:after {
    content: "\02026";
  }
  .new {
    padding: 0.22rem 0.15rem;
    font-size: 0.55rem;
  }
}
</style>
