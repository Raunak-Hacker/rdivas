<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  created() {
    if (this.$route.params.id) {
      fetch(`${this.$store.getters.host}/verify/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            window.location = "/home";
          } else this.$router.replace("/not-found");
        });
    }
  },
};
</script>

<style scoped>
div {
  height: 100vh;
}
</style>
