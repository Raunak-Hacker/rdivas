<template>
  <div align="center">
    <h1>Image Compressor</h1>
    <div class="btns">
      <button
        class="upload-button button"
        type="button"
        @click="upload"
        style="margin-right: 1rem"
      >
        Upload
      </button>
      <a
        v-if="img"
        :href="img"
        class="upload-button button"
        download="rdivas_cloth"
        target="_blank"
        >Download</a
      >
    </div>
    <image-compressor
      class="compressor"
      :done="getFiles"
      :scale="scale"
      :quality="quality"
      ref="compressor"
    />
    <div class="input-group" v-if="img">
      <label>Image Scale <span v-if="aScale">(Start by adding scale)</span></label>
      <input type="number" v-model="scale" />
    </div>

    <div class="image-info" v-if="img">
      <b>Before: </b>
      <span>{{ original.size }}</span>
      <span class="separator"> | </span>
      <b>After: </b>
      <span>{{ compressed.size }}</span>
      <span class="separator"> | </span>
      <b>Highly Recommended: Max 400kb</b>
    </div>

    <div class="text-center" v-if="img">
      <img
        v-if="img"
        alt=""
        :style="{ maxWidth: originalSize ? '100%' : null }"
        :src="img"
      />
    </div>
  </div>
</template>

<script>
// import imageCompressor from "vue-image-compressor";
import imageCompressor from "@/components/VueImg.vue";

export default {
  components: { imageCompressor },
  data() {
    return {
      img: "",
      scale: 20,
      quality: 100,
      originalSize: false,
      original: {},
      image: null,
      compressed: {},
      aScale: true,
    };
  },
  methods: {
    upload() {
      let compressor = this.$refs.compressor.$el;
      compressor.click();
    },
    getFiles(obj) {
      this.img = obj.compressed.blob;
      this.original = obj.original;
      this.compressed = obj.compressed;
    },
  },
  watch: {
    scale(val) {
      if (val) {
        this.aScale = false;
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: Roboto;
}
p {
  margin-bottom: 25px;
}
.image-info {
  margin: 15px 0;
}
.separator {
  margin: 0 5px;
}
input {
  width: 75%;
  display: block;
  padding: 5px;
  text-align: center;
  margin-bottom: 10px;
  max-width: 250px;
  border: 2px solid #ddd;
}
input:focus {
  border: 2px solid rgba(0, 0, 255, 0.37);
}
.compressor {
  display: none;
}
.btns {
  margin-top: 3vh;
  display: flex;
  justify-content: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #1a237e;
  color: white;
  width: 8rem;
  height: 3rem;
  border: 0;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 0.95rem;
}
label {
  margin-bottom: 10px;
  display: block;
}
.input-group {
  margin: 25px 0;
}
.checkbox {
  margin: 15px 0 20px;
  background: #eee;
  padding: 10px 0;
}
input {
  width: auto;
  border: none;
  outline: 0;
}
img {
  margin: 0 auto;
  display: block;
}
a {
  margin: 0px 0 75px;
}
</style>
