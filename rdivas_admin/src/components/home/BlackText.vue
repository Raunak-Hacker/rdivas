<template>
  <section>
    <h1>Header Black Text</h1>
    <div class="editStuff">
      <input type="text" v-model="bltxt" />
      <button @click="editblTxt" class="button-42" role="button">EDIT</button>
      <button @click="backClick" class="button-42" role="button">BACK</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bltxt: this.$store.getters.products.text,
    };
  },
  methods: {
    async editblTxt() {
      await fetch(this.$store.getters.host + "edit/blacktext/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.getters.token,
        },
        body: JSON.stringify({
          text: this.bltxt,
        }),
      });
      this.$emit("back-click");
    },
    backClick() {
      this.$emit("back-click");
    },
  },
};
</script>

<style scoped>
section {
  width: 65%;
  padding: 5% 18%;
  padding-left: 2%;
}
section h1 {
  padding-left: 2.5%;
}
.editStuff {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5% 18%;
  padding-left: 2%;
}

.editStuff input {
  width: 65%;
  padding: 0.1rem;
  border: none;
  outline: 0;
}

.editStuff button {
  width: 15%;
  padding: 0.1rem;
}
</style>
