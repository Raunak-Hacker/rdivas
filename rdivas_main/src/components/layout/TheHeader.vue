<template>
  <header :class="{ fix: scrolled }">
    <div class="desktop">
      <div class="flex-box">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="cats">
          <div class="nav-links">
            <ul>
              <li>
                <router-link to="/home">HOME</router-link>
              </li>
              <li v-for="category in categories" :key="category.name">
                <!-- <router-link :to="'/' + category.name" @click="category.name" :class="{ sel: dressActive }"> -->
                <a @click="category.name">
                  {{ category.name }}
                </a>
                <div class="dropdown-content">
                  <router-link @click="subCatId(subcategory.subcategoryid)"
                    v-for="subcategory in category.subcategories" :key="subcategory"
                    :to="'/' + category.name + '/' + subcategory.subcategoryid">{{ subcategory.name
                    }}</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="login">
          <router-link to="/user" v-if="auth && $route.path !== '/user'"><i class="bx bx-user-circle" /></router-link>
          <i class="bx bx-log-out" v-else-if="auth && $route.path === '/user'" @click="logout" />
          <router-link to="/login" v-else><i class="bx bx-log-in" /></router-link>
          <!-- <a @click="logout" v-else><small>Logout</small ></a> -->
          <input type="text" placeholder="search..." v-if="search" />
          <!-- <i class="bx bx-search" @click="search = !search" /> -->
          <router-link to="/wish-list"> <i class="bx bx-heart" /></router-link>
          <router-link to="/cart"> <i class="bx bx-cart" /></router-link>
        </div>
      </div>
    </div>

    <div class="mnav-links" v-if="showmenu">
      <div class="mlinkhead">
        <div class="mlogo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="menu-btn" @click="togglemenu">
          <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.6562 0.5625H2.34375C1.0498 0.5625 0 1.6123 0 2.90625V20.0938C0 21.3877 1.0498 22.4375 2.34375 22.4375H22.6562C23.9502 22.4375 25 21.3877 25 20.0938V2.90625C25 1.6123 23.9502 0.5625 22.6562 0.5625ZM18.5742 14.7471C18.8086 14.9814 18.8086 15.3623 18.5742 15.5967L16.5967 17.5742C16.3623 17.8086 15.9814 17.8086 15.7471 17.5742L12.5 14.2979L9.25293 17.5742C9.01855 17.8086 8.6377 17.8086 8.40332 17.5742L6.42578 15.5967C6.19141 15.3623 6.19141 14.9814 6.42578 14.7471L9.70215 11.5L6.42578 8.25293C6.19141 8.01855 6.19141 7.6377 6.42578 7.40332L8.40332 5.42578C8.6377 5.19141 9.01855 5.19141 9.25293 5.42578L12.5 8.70215L15.7471 5.42578C15.9814 5.19141 16.3623 5.19141 16.5967 5.42578L18.5742 7.40332C18.8086 7.6377 18.8086 8.01855 18.5742 8.25293L15.2979 11.5L18.5742 14.7471Z"
              fill="black" />
          </svg>
        </div>
      </div>
      <div class="links">
        <div class="link">
          <router-link to="/home">HOME</router-link>
          <!-- :class="{ sel: homActive }" -->
        </div>

        <div class="link msel">
          <div class="mlinkcategory ">
            <div class="name">Top</div>
            <div class="plus">
              <svg width="23" height="6" viewBox="0 0 23 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.475 0.75625H1.72501C0.862213 0.75625 0.162506 1.45596 0.162506 2.31875V3.88125C0.162506 4.74404 0.862213 5.44375 1.72501 5.44375H20.475C21.3378 5.44375 22.0375 4.74404 22.0375 3.88125V2.31875C22.0375 1.45596 21.3378 0.75625 20.475 0.75625Z"
                  fill="black" />
              </svg>
            </div>
          </div>

          <router-link to="/Tops/1">
            <div class="msubcategory">
              Top
            </div>
          </router-link>
          <router-link to="/Tops/3">
            <div class="msubcategory">
              Winter Wear
            </div>
          </router-link>

        </div>
        <div class="link" v-for="category in categories" :key="category.name">
          <div class="mlinkcategory">
            <div class="name">{{ category.name }}</div>
            <div class="plus">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.475 8.75625H13.4438V1.725C13.4438 0.862207 12.744 0.1625 11.8813 0.1625H10.3188C9.45596 0.1625 8.75626 0.862207 8.75626 1.725V8.75625H1.72501C0.862213 8.75625 0.162506 9.45596 0.162506 10.3188V11.8813C0.162506 12.744 0.862213 13.4438 1.72501 13.4438H8.75626V20.475C8.75626 21.3378 9.45596 22.0375 10.3188 22.0375H11.8813C12.744 22.0375 13.4438 21.3378 13.4438 20.475V13.4438H20.475C21.3378 13.4438 22.0375 12.744 22.0375 11.8813V10.3188C22.0375 9.45596 21.3378 8.75625 20.475 8.75625Z"
                  fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="mflex-box">
        <div class="left">
          <div class="menu-btn" @click="togglemenu">
            <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V10H100V0H0ZM0 30V40H100V30H0ZM0 60V70H100V60H0Z" fill="black" />
            </svg>
          </div>
          <div class="mlogo">
            <img src="@/assets/logo.png" alt="" />
          </div>
        </div>

        <div class="right">
          <router-link to="/user" v-if="auth && $route.path !== '/user'"><i class="bx bx-user-circle" /></router-link>
          <i class="bx bx-log-out" v-else-if="auth && $route.path === '/user'" @click="logout" />
          <router-link to="/login" v-else><i class="bx bx-log-in" /></router-link>
          <!-- <a @click="logout" v-else><small>Logout</small ></a> -->
          <input type="text" placeholder="search..." v-if="search" />
          <!-- <i class="bx bx-search" @click="search = !search" /> -->
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
      topActive: false,
      categories: [],
      search: false,
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
    const data = await response.json();
    this.categories = data.categories;
    // await this.$store.dispatch('auth');
    this.auth = await this.$store.getters.isAuth;
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    subCatId(id) {
      this.$store.state.id = id;
      // console.log(this.$store.state.id);
    },
    togglemenu() {
      //   this.$refs.menu.classList.toggle("active");
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
  /* display: flex;
        justify-content: space-between;
        align-items: center; */
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

.dropdown-content a:hover {
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
  height: 100%;
  padding-top: 0.5%;
  margin-top: auto;
  margin-bottom: auto;
}

header {
  position: fixed;
  z-index: 1;
  background-color: white;
  padding: 0 2rem;
  height: 11vh;
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
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  height: 100%;
  width: 100%;
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

@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mnav-links {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 90vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
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
    border-bottom: 1px solid #767676;
    padding: 0.2rem 0.5rem;
  }

  .mlinkcategory {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-transform: capitalize;
  }

  .msubcategory {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    margin-left: 10%;
    text-transform: capitalize;
    border-top: 1px solid #767676;
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
    padding: 0 0.5rem;
    width: 100vw;
  }

  .mflex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-right: 1.5rem;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 40%;
  }

  .menu-btn {
    max-width: 20%;
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
}
</style>
