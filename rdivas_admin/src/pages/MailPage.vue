<template>
  <section class="mail-page">
    <h1>Send E-mail to All Subscribers</h1>
    <div class="flex-bx">
      <form action="" @submit.prevent="sendMail">
        <div class="form-group">
          <label>Subject</label>
          <input type="text" class="form-control" v-model.trim="subject" />
        </div>
        <div class="form-group">
          <label>Url</label>
          <input type="text" class="form-control" v-model.trim="url" />
        </div>
        <div class="form-group mailimg">
          <label>Image</label>
          <input type="file" @change="handleFileUpload($event)" />
        </div>
        <div class="form-group">
          <button class="button-5" type="submit">Send</button>
        </div>
      </form>
      <img v-if="image" :src="image" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      subject: "",
      image: null,
    };
  },
  methods: {
    handleFileUpload(e) {
      this.uploadImg(e.target.files[0]);
    },
    uploadImg(img) {
      let formData = new FormData();
      formData.append("file", img);
      const details = {
        method: "POST",
        body: formData,
        headers: {
          ContentType: "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      fetch(this.$store.getters.host + "upload", details)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.fileName);
          this.image = this.$store.state.imgHost + data.fileName;
        });
    },
    sendMail() {
      const details = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          subject: this.subject,
          url: this.url,
          image: this.image,
        }),
      };
      console.log(details);
      // fetch(this.$store.getters.host + "mail", details)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   });
    },
  },
};
</script>

<style scoped>
.mail-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 79%;
  padding: 2% 0;
}
.flex-bx {
  display: flex;
  height: 100%;
  width: 100%;
}
img {
  margin: auto;
  max-width: 40%;
  height: 80%;
}
.mail-page h1 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 3%;
}
.form-group {
  height: 23%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.form-group label {
  display: flex;
  align-content: center;
  justify-content: center;
}
form {
  padding-left: 8%;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
}
.mailimg {
  height: 30%;
  display: flex;
  align-items: center;
}
.mailimg img {
  height: 100%;
  object-fit: fill;
}
input[type="text"] {
  border: 0;
  outline: 0;
  width: 70%;
  height: 35%;
}

/* CSS */
.button-5 {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 20%;
  height: 1%;
  margin-top: 10%;
}

.button-5:hover,
.button-5:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5:hover {
  transform: translateY(-1px);
}

.button-5:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  transform: translateY(0);
}
</style>
