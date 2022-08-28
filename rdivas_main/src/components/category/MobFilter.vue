<template>
  <div class="main">
    <transition name="fade">
      <div class="filter list" v-if="filter">
        <the-filter />
      </div>
    </transition>
    <div class="filterbtn">
      <div class="sort" @click="togglefilter">Filter</div>
      <div class="dropdown" @click="myFunction">
        <div class="sort dropbtn">Sort By</div>
        <transition name="up">
          <div id="myDropdown" class="dropdown-content list" v-if="dropdown">
            <a @click="sort('Relevance')">Relevance</a>
            <a @click="sort('lth')">Price: Low to High</a>
            <a @click="sort('htl')">Price: High to Low</a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TheFilter from "./TheFilter.vue";
export default {
  components: { TheFilter },

  data() {
    return {
      message: "Hello Vue!",
      filter: false,
      dropdown: false,
    };
  },
  methods: {
    myFunction() {
      this.dropdown = !this.dropdown;
    },
    togglefilter() {
      this.filter = !this.filter;
    },
    sort(val) {
      if (val == "lth") {
        this.sortBy = "Price: Low to High";
        this.$store.commit("sortProducts", val);
      } else if (val == "htl") {
        this.sortBy = "Price: High to Low";
        this.$store.commit("sortProducts", val);
      } else if (val == "Relevance") {
        this.sortBy = "Relevance";
        this.$store.commit("sortProducts", val);
      }
    },
  },
};
</script>

<style scoped>
.main {
  z-index: 10;
  position: fixed;
  bottom: -0.3rem;

  left: 0;
  width: 100vw;
  background-color: rgb(255, 255, 255);
}
.filterbtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filter {
  width: 100%;
}

.sort {
  width: 50%;
  font-size: 1.05rem;
  background-color: rgb(255, 255, 255);
  padding: 3% 0;
  border: 1px solid #a4a4a4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropbtn {
  background-color: rgb(255, 255, 255);
  font-size: 1.05rem;
  color: black;
  width: 100%;
  border: none;
  cursor: pointer;
}

.dropdown {
  width: 50%;
  padding: 1.5% 0;
  position: relative;
  border: 1px solid #a4a4a4;
  background-color: rgb(255, 255, 255);
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 50vw;
  max-width: 50vw;
  overflow: auto;
  box-shadow: 0px 0.5rem 1rem 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  bottom: 14vw;
}

.dropdown-content a {
  color: black;
  padding: 0.8rem 1rem;
  text-decoration: none;
  font-size: 0.85rem;
  display: block;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-in-out;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.up-enter-from,
.up-leave-to {
  transform: scaleY(0);
}
.list {
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}
</style>
