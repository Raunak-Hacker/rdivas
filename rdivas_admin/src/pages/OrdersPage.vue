<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="subForm">
    <img src="previewImage" class="uploading-image" />
    <input type="file" name="file" @change="handleFileUpload($event)">
    <input type="submit">
  </form>
</template>

<script>
export default {

  data() {
    return {
      image: null,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgwODg2OCwiZXhwIjoxNjU4ODk1MjY4fQ.Su5sPyB2Xt7u4xz5U4lQDMbWh8vkfedxpino0dGKMuU'
    }
  },

  methods: {
    handleFileUpload(e) {
      this.image = e.target.files[0];
      console.log(this.image);
    },
    subForm() {
      let formData = new FormData()
      formData.append('file', this.image)
      const lol = {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.token,
          ContentType: 'multipart/form-data',
        },
        body: formData,
      }
      fetch('http://localhost:6969/admin/upload', lol)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
    },
  }
}
</script>

<style scoped>
</style>