<template>
  <input type="file" @change="onChange" />
</template>

<script>
import base64toblob from "base64toblob";
export default {
  props: {
    // Image Scale Percentage (1 - 100)
    scale: {
      type: Number,
      default: 100,
    },
    // Image Scale Percentage (1 - 100)
    quality: {
      type: Number,
      default: 100,
    },
    // Pass the files info when it's done
    done: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      file: {},
      result: {},
      reader: {},
      imgSrc: "",
    };
  },
  watch: {
    // When Scale and Quality properties has changed, do Redraw
    scale() {
      return this.redraw();
    },
    quality() {
      return this.redraw();
    },
  },
  methods: {
    /*
        When Input File has changed
      */
    onChange(e) {
      // If There's no file choosen
      let file = e.target.files[0];
      if (!file) return false;
      // get the file
      this.file = e.target.files[0];
      // Validation
      let type = this.file.type;
      let valid = type.indexOf("image") !== -1;
      if (!valid) throw "File Type Is Not Supported. Upload an image instead";
      // Make new FileReader
      this.reader = new FileReader();
      // Convert the file to base64 text
      this.reader.readAsDataURL(this.file);
      // on reader load somthing...
      this.reader.onload = this.fileOnLoad;
    },
    /*
        Draw And Compress The Image
        @params {String} imgUrl
      */
    drawImage(imgUrl) {
      // Recreate Canvas Element
      let canvas = document.createElement("canvas");
      this.canvas = canvas;
      // Set Canvas Context
      let ctx = this.canvas.getContext("2d");
      // Create New Image
      let img = new Image();
      img.src = imgUrl;
      // Image Size After Scaling
      let scale = this.scale / 100;
      let width = img.width * scale;
      let height = img.height * scale;
      // Set Canvas Height And Width According to Image Size And Scale
      this.canvas.setAttribute("width", width);
      this.canvas.setAttribute("height", height);
      ctx.drawImage(img, 0, 0, width, height);
      // Quality Of Image
      let quality = this.quality ? this.quality / 100 : 1;
      // If all files have been proceed
      let base64 = this.canvas.toDataURL("image/png", quality);
      let fileName = this.result.file.name;
      let lastDot = fileName.lastIndexOf(".");
      fileName = fileName.substr(0, lastDot) + ".png";
      let objToPass = {
        canvas: this.canvas,
        original: this.result,
        compressed: {
          blob: this.toBlob(base64),
          base64: base64,
          name: fileName,
          file: this.buildFile(base64, fileName),
        },
      };
      objToPass.compressed.size =
        Math.round(objToPass.compressed.file.size / 1000) + " kB";
      objToPass.compressed.type = "image/png";
      // console.log(objToPass);
      this.done(objToPass);
    },
    /*
        Redraw the canvas
      */
    redraw() {
      if (this.result.base64) {
        this.drawImage(this.result.base64);
      }
    },
    /*
        When The File in loaded
      */
    fileOnLoad() {
      // The File
      let { file } = this;
      // Make a fileInfo Object
      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + " kB",
        base64: this.reader.result,
        file: file,
      };
      // Push it to the state
      this.result = fileInfo;
      // console.log(this.result);

      // DrawImage
      this.drawImage(this.result.base64);
    },
    // Convert Base64 to Blob
    toBlob(imgUrl) {
      let blob = base64toblob(imgUrl.split(",")[1], "image/png");
      let url = window.URL.createObjectURL(blob);
      return url;
    },
    // Convert Blob To File
    buildFile(blob, name) {
      let xyz = new File([blob], name, { type: "image/png" });
      return xyz;
    },
  },
};
</script>
