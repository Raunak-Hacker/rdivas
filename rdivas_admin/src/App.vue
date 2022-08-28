<template>
  <login-page v-if="!auth" />
  <the-sidebar
    v-else
    @dashboard="setSelectedComponent('dashboard-page')"
    @analytics="setSelectedComponent('home-page')"
    @manage="setSelectedComponent('manage-page')"
    @comments="setSelectedComponent('comments-page')"
    @orders="setSelectedComponent('orders-page')"
  >
    <!-- <keep-alive> -->
    <component :is="selectedComponent" />
    <!-- </keep-alive> -->
  </the-sidebar>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent: "dashboard-page",
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.$store.commit("setAuth", true);
      this.$store.dispatch("autoLogin");
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cookie&family=Montserrat&family=Work+Sans:wght@300;400;500;600;700&display=swap");
:root {
  --left-login: #ce3cba;
  --white: #ffffff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--text-color);
}
body::-webkit-scrollbar {
  width: .85em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(168, 167, 167, 0.171);

}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
}
a {
  cursor: pointer;
}

.button-42 {
  background-color: initial;
  background-image: linear-gradient(-180deg, #ff7e31, #e62c03);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: whitesmoke;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  z-index: 1;
  border: 0;
  font-weight: 500;
  transition: box-shadow 0.2s;
}

.button-42:hover {
  box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
}

.hid {
  display: none;
}
</style>
