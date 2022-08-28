<template>
  <component
    v-if="sel"
    :is="selectedComponent"
    :id="id"
    :name="name"
    :sel-manage="selManage"
    @add-cat="addCat"
    @edited="edited"
    @back-click="backClicked"
  />
  <transition appear v-else>
    <section class="man-page">
      <div class="boxes">
        <div class="box button-42" @click="selMan('banner')">Banner</div>
        <div class="box button-42" @click="selMan('listings')">Listing</div>
        <div class="box button-42" @click="selMan('poster')">Poster</div>
        <div class="box button-42" @click="selMan('blacktext')">Header Text</div>
      </div>
    </section>
  </transition>
</template>

<script>
import BanPage from "@/components/home/BannerPage.vue";
import PosterPage from "@/components/home/PosterPage.vue";
import ListPage from "@/components/home/ListPage.vue";
import BlackText from "@/components/home/BlackText.vue";

export default {
  components: {
    BanPage,
    ListPage,
    PosterPage,
    BlackText,
  },
  data() {
    return {
      selectedComponent: null,
      sel: false,
    };
  },
  computed: {
    host() {
      return this.$store.getters.host + "get/";
    },
    ogHost() {
      return this.$store.getters.host;
    },
    token() {
      return this.$store.getters.token;
    },
    selManage() {
      return this.$store.state.selManage;
    },
  },
  methods: {
    async selMan(val) {
      this.$store.state.url = this.host + val;
      if (val === "banner") {
        this.selectedComponent = "ban-page";
        const selMan = "heroes";
        this.$store.state.url = this.host + selMan;
      } else if (val === "listings") {
        this.selectedComponent = "list-page";
        this.$store.state.url = this.host + val;
      } else if (val === "poster") {
        this.selectedComponent = "poster-page";
        this.$store.state.url = this.host + val;
      } else if (val === "blacktext") {
        this.selectedComponent = "black-text";
        this.$store.state.url = this.host + val;
      }
      this.$store.state.selManage = val;
      await this.$store.dispatch("fetchStuff", this.$store.state.url);
      this.sel = true;
    },
    backClicked() {
      this.sel = false;
    },
  },
};
</script>
<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-to,
.v-leave-active {
  opacity: 1;
}

.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  height: 100%;
  font-size: larger;
}

.box {
  height: 30%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

.man-page {
  height: 75%;
  background-color: var(--body-color);
}
</style>
