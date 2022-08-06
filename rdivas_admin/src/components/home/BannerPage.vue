<template>
  <div class="banPage">
    <header>
      <h1>Banner (2:1 aspect ratio)</h1>
      <form @submit.prevent="getImg">
        <input
          type="file"
          style="width: 60%"
          @change="handleFileUpload($event)"
          required
        />
        <button class="button-42" type="submit">Upload</button>
        <button class="button-42" @click="backClick" style="padding: 0.2rem 1rem">
          <i
            style="font-size: 1.2rem; color: whitesmoke; padding-top: 25%;"
            class="bx bx-arrow-back"
          ></i>
        </button>
      </form>
    </header>
    <div class="flex-wrap">
      <div class="ban-wrap" v-for="img in images" :key="img.id">
        <div class="ban-img">
          <img :src="imgHost + img.image" />
        </div>
        <button style="margin-top: 2%" class="button-42" @click="del(img.id)">
          Delete
        </button>
      </div>
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
    getImg() {
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
          this.uploadImg(data.fileName);
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
          image: img,
        }),
      };
      await fetch(this.$store.getters.host + "add/hero", details);
      this.$store.dispatch("fetchStuff", this.$store.state.url);
    },
    del(id) {
      const details = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      fetch(this.$store.getters.host + "delete/hero/" + id, details)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$store.dispatch("fetchStuff", this.$store.state.url);
        });
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
  margin-bottom: 5%;
  width: 100%;
}
button {
  padding: 0.5rem;
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  width: 100%;
}
.ban-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 20vh;
  margin-bottom: 2%;
}
.ban-img {
  width: 100%;
  height: 100%;
}
.ban-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
form {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
