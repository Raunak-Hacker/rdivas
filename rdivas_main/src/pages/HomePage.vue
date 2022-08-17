<template>
  <main-page />
</template>

<script>
import MainPage from "@/components/home/MainPage.vue";
export default {
  components: { MainPage },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

