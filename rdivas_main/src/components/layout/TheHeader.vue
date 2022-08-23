<template>
  <header :class="{ fix: scrolled }">
    <div class="desktop">
      <div class="offer">
        <marquee>Buy 2 Get ₹500 Off* | CLEARANCE SALE</marquee>
      </div>
      <div class="flex-box">
        <div class="logo">
          <router-link to="/home"> <img src="@/assets/logo.png" alt="" /></router-link>
        </div>
        <div class="cats">
          <div class="nav-links">
            <ul>
              <li>
                <router-link to="/home">HOME</router-link>
              </li>
              <li v-for="category in categories" :key="category.name">
                <a >
                  {{ category.name }}
                </a>
                <div class="dropdown-content">
                  <router-link
                    v-for="subcategory in category.subcategories"
                    :key="subcategory"
                    :to="'/' + category.name + '/' + subcategory.subcategoryid"
                    >{{ subcategory.name }}</router-link
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="login">
          <router-link to="/user" v-if="auth && $route.path !== '/user'"
            ><i class="bx bx-user-circle"
          /></router-link>
          <i
            class="bx bx-log-out"
            v-else-if="auth && $route.path === '/user'"
            @click="logout"
          />
          <router-link to="/login" v-else><i class="bx bx-log-in" /></router-link>
          <router-link to="/wish-list"> <i class="bx bx-heart" /></router-link>
          <router-link to="/cart"> <i class="bx bx-cart" /></router-link>
        </div>
      </div>
    </div>

    <transition name="slide">
      <div class="mnav-links" v-if="showmenu">
        <div class="mlinkhead">
          <div class="mlogo">
            <img src="@/assets/logo.png" alt="" />
          </div>
          <div class="menu-btn" @click="togglemenu">
            <i class="bx bx-x" style="font-size: 2rem" />
          </div>
        </div>
        <div class="links">
          <div class="link mlinkcategory">
            <router-link to="/home">Home</router-link>
          </div>

          <div
            class="link"
            v-for="(category, index) in categories"
            :class="{ msel: category.toggle }"
            :key="category.name"
          >
            <div class="mlinkcategory" @click="toggleCat(index)">
              <div class="name">{{ category.name }}</div>
              <div class="plus">
                <i class="bx bx-plus" v-if="!category.toggle" />
                <i class="bx bx-minus" v-else />
              </div>
            </div>
            <transition name="fade">
              <div class="list" v-if="category.toggle">
                <router-link
                  v-for="subcategory in category.subcategories"
                  :key="subcategory"
                  @click="togglemenu"
                  :to="'/' + category.name + '/' + subcategory.subcategoryid"
                >
                  <div class="msubcategory">
                    {{ subcategory.name }}
                  </div>
                </router-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>

    <div class="mobile">
      <div class="offer">
        <marquee>Buy 2 Get ₹500 Off* | CLEARANCE SALE</marquee>
      </div>
      <div class="mflex-box">
        <div class="left">
          <div class="menu-btn" @click="togglemenu">
            <i class="bx bx-menu" />
          </div>
          <div class="mlogo">
            <router-link to="/home"> <img src="@/assets/logo.png" alt="" /></router-link>
          </div>
        </div>

        <div class="right">
          <router-link to="/user" v-if="auth && $route.path !== '/user'"
            ><i class="bx bx-user-circle"
          /></router-link>
          <a v-else-if="auth && $route.path === '/user'" @click="logout">
            <i class="bx bx-log-out"
          /></a>
          <router-link to="/login" v-else><i class="bx bx-log-in" /></router-link>
          <router-link to="/wish-list"> <i class="bx bx-heart" /></router-link>
          <router-link to="/cart"> <i class="bx bx-cart" /></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      categories: [],
      auth: false,
      showmenu: false,
    };
  },
  computed: {
    host() {
      return this.$store.getters.host;
    },
  },
  async created() {
    const response = await fetch(`${this.host}/get/header`);
    let data = await response.json();
    data = data.categories;
    for (let i = 0; i < data.length; i++) {
      data[i].toggle = false;
    }
    this.categories = data;
    this.auth = await this.$store.getters.isAuth;
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    toggleCat(index) {
      if (this.categories[index].subcategories.length > 0) {
        this.categories[index].toggle = !this.categories[index].toggle;
      }
    },
    togglemenu() {
      this.showmenu = !this.showmenu;
    },
    logout() {
      this.$store.dispatch("logout");
    },
    scroll() {
      if (window.scrollY > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  watch: {},
};
</script>

<style scoped>
.desktop {
  height: 100%;
}

a {
  color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 10rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  padding: 0.8rem 1rem;
  z-index: 1;
  line-height: 1.5rem;
  text-transform: capitalize;
}

.dropdown-content a {
  color: rgba(0, 0, 0, 0.692);
  transition: all 0.15s ease-in-out;
}

.nav-links .dropdown-content a:hover::after {
  width: 0%;
}

.dropdown-content a:hover a:h {
  color: #000;
}

li {
  text-transform: uppercase;
}

li:hover .dropdown-content {
  display: block;
}

i {
  color: rgba(102, 102, 102, 0.645);
  font-size: 1.3rem;
}

.flex-box {
  height: 75%;
  padding-top: 0.5%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0 2rem;
}
.offer {
  background-color: #29282d;
  height: 25%;
  width: 100%;
  font-size: 0.9rem;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
.offer marquee {
  font-size: 0.8rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}

header {
  position: fixed;
  z-index: 1;
  background-color: white;
  height: 14vh;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
}

.fix {
  position: fixed;
}

.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}

.headroom--pinned {
  transform: translateY(0%);
}

.headroom--unpinned {
  transform: translateY(-100%);
}

.logo {
  height: 100%;
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  height: 3.2rem;
  width: 110%;
}

.login img {
  width: 1rem;
  height: 1rem;
  margin-left: 1.5rem;
}

i,
input {
  margin-left: 1rem;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ca1515;
  padding: 0.7rem;
}

small {
  color: gray;
  font-size: small;
  font-weight: 300;
}

.mobile,
.mnav-links {
  display: none;
}
.fade-enter-from,
.fade-leave-to {
  transform: scaleY(0);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 200ms ease-in-out 0s;
}

@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mnav-links {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 80vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    z-index: 2;
  }

  .mlinkhead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    padding: 1rem;
    text-transform: capitalize;
    background-color: rgb(230, 230, 230);
  }

  .link {
    width: 100%;
    border-bottom: 1px solid #7676765e;
    font-size: 0.8rem;
  }
  .link i {
    font-size: 1rem;
  }
  .mlinkcategory {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0.5rem;

    text-transform: capitalize;
  }

  .msubcategory {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.8rem 0.5rem;
    margin-left: 10%;
    text-transform: capitalize;
    border-top: 1px solid #7676765e;
  }

  .msel {
    background-color: #e8e8e8;
  }

  .mobile {
    display: block;
    height: 100%;
    width: 100%;
  }

  header {
    padding: 0;
    z-index: 10;
  }

  .mflex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75%;
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 0.5rem;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 40%;
  }

  .menu-btn {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .menu-btn i {
    font-size: 1.5rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 30%;
  }

  img {
    width: 25vw;
  }
  .list {
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
  }
}
</style>
