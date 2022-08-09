<template>
  <div class="banPage">
    <header>
      <h1>Poster (4:1 aspect ratio)</h1>
      <button
        class="button-42"
        @click="backClick"
        style="padding: 0.2rem 1rem"
      >
        <i style="font-size:1.2rem;color: whitesmoke; padding-top: 25%" class="bx bx-arrow-back"></i>
      </button>
    </header>
    <div class="ban-wrap" v-for="img in images" :key="img.id">
      <div class="ban-img">
        <img :src="imgHost + img.image" />
      </div>
      <form @submit.prevent="edit(img.id)">
        <input
          style="margin-left: 2%"
          type="file"
          @change="handleFileUpload($event)"
          required
        />
        <button class="button-42" type="submit">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
    };
  },
  computed: {
    images() {
      return this.$store.getters.products;
    },
    imgHost() {
      return this.$store.state.imgHost;
    },
  },
  methods: {
    handleFileUpload(e) {
      this.image = e.target.files[0];
    },
    edit(id) {
      let formData = new FormData();
      formData.append("file", this.image);
      const details = {
        method: "POST",
        body: formData,
        headers: {
          ContentType: "multipart/form-data",
          Authorization: `Bearer ${this.$store.getters.token}`,
        },
      };
      fetch(this.$store.getters.host + "upload", details)
        .then((response) => response.json())
        .then((data) => {
          const imgData = {
            image: data.fileName,
            id: id,
          };
          this.uploadImg(imgData);
        });
    },
    async uploadImg(img) {
      const details = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.getters.token,
        },
        body: JSON.stringify({
          image: img.image,
        }),
      };
      await fetch(this.$store.getters.host + "edit/poster/" + img.id, details);
      this.$store.dispatch("fetchStuff", this.$store.state.url);
    },
    backClick() {
      this.$emit("backClick");
    },
  },
};
</script>

<style scoped>
.banPage {
  /* background-color: #f5f5f5; */
  height: 79%;
  padding: 0 10%;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
  width: 100%;
}
button {
  padding: 0.5rem;
}
.flex-wrap {
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;
}
.ban-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 38%;
  margin-bottom: 2%;
}
.ban-img {
  width: 100%;
  height: 100%;
}
.ban-img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
