<template>
  <!-- <keep-alive> -->
  <component
    v-if="sel"
    :is="selectedComponent"
    @add-click="addProdClicked"
    @edit-click="editProdClicked"
    :id="id"
    :name="name"
    :sel-manage="selManage"
    @add-cat="addCat"
    @edited="edited"
    @back="back"
    @back-click="backClicked"
  />
  <transition appear v-else>
    <section class="man-page">
      <div class="boxes">
        <div class="box button-42" @click="selMan('categories')">Categories</div>
        <div class="box button-42" @click="selMan('sub categories')">Sub Categories</div>
        <div class="box button-42" @click="selMan('groups')">Groups</div>
        <div class="box button-42" @click="selMan('products')">Products</div>
        <div class="box button-42" @click="selMan('colors')">Colors</div>
        <div class="box button-42" @click="selMan('fabrics')">Fabrics</div>
        <div class="box button-42" @click="home">Home Page</div>
      </div>
    </section>
  </transition>
  <!-- </keep-alive> -->
</template>

<script>
import AddForm from "@/components/manage/AddForm.vue";
import MainPage from "@/components/manage/MainPage.vue";
import EditForm from "@/components/manage/EditForm.vue";

export default {
  components: {
    AddForm,
    EditForm,
    MainPage,
  },
  data() {
    return {
      addClick: false,
      editClick: false,
      selectedComponent: "main-page",
      id: null,
      name: null,
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
    // sel() {
    //   return this.$store.getters.sel;
    // },
    selManage() {
      return this.$store.state.selManage;
    },
  },
  methods: {
    async selMan(val) {
      this.$store.state.url = this.host + val;
      if (val === "categories") {
        const selMan = "types";
        this.$store.state.url = this.host + selMan;
      } else if (val === "sub categories") {
        const selMan = "categories";
        this.$store.state.url = this.host + selMan;
      }
      this.$store.state.selManage = val;
      await this.$store.dispatch("fetchStuff", this.$store.state.url);
      this.sel = true;
    },
    edited() {
      this.selectedComponent = "main-page";
      this.$store.commit("setFilterProducts");
    },
    back() {
      this.selectedComponent = "main-page";
      // this.$store.commit("setFilterProducts");
    },
    backClicked() {
      this.sel = false;
    },
    addCat(cat) {
      this.$store.dispatch("addCat", {
        cat: cat,
        url: this.url,
      });
    },
    addProdClicked() {
      this.selectedComponent = "add-form";
    },
    editProdClicked(deta) {
      this.selectedComponent = "edit-form";
      this.id = deta.id;
      this.name = deta.name;
    },
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
    home() {
      this.sel = true;
      this.selectedComponent = "home-page";
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
  height: 20%;
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
}
</style>
