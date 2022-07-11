<template>
  <the-header></the-header>
  <div class="view">
    <router-view />
  </div>
  <!--  v-slot="slotProps">
     <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition> -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'


export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    // display current url
    console.log(this.$route.fullPath);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&amp;display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Montserrat&display=swap');

:root {
  --left-login: #ce3cba;
  --white: #ffffff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

.view {
  padding-top: 11vh;
}

button, i {
  cursor: pointer;
}



.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 7vh;
}

.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links ul {
  display: flex;
}


.nav-links ul li {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin: 0 1rem;
  position: relative;

}

.nav-links ul li a::after {
  content: "";
  width: 0%;
  height: 2px;
  background: #CA1515;
  display: block;
  margin: auto;
  transition: 0.5s;
}

.nav-links ul li a:hover::after {
  width: 100%;
}

.sel {
  border-bottom: 3px solid #CA1515;
}

.hidden {
  display: none;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-in-out;
}

.route-leave-active {
  transition: all 0.3s ease-in-out;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
