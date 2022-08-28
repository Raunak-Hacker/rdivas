<template>
  <section>
    <h1>Discount Percentage(%)</h1>
    <div class="editStuff">
      <input type="text" v-model="disc" />
      <button @click="editDisc" class="button-42" role="button">EDIT</button>
      <button @click="backClick" class="button-42" role="button">BACK</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      disc: null,
    };
  },
  created() {
    this.getDisc();
  },
  methods: {
    async getDisc() {
      const resp = await fetch(this.$store.state.host + "get/discount/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await resp.json();
      this.disc = data;
    },
    async editDisc() {
      await fetch(this.$store.state.host + "edit/discount/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          percentage: Number(this.disc),
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
  width: 50%;
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
  width: 45%;
  padding: 0.1rem;
  border: none;
  outline: 0;
}

.editStuff button {
  width: 20%;
  padding: 0.1rem;
}
</style>
