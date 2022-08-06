<template>
    <div class="cat-box">
        <div class="img">
            <img :src="imgHost + img">
        </div>
        <div class="cat">
            <h3>{{ name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'img', 'id'],
    data() {
        return {
        }
    },
    computed: {
        // auth() {
        //   return this.$store.getters.isAuth;
        // },
        imgHost() {
            return this.$store.getters.imgHost;
        },
    },
}
</script>

<style scoped>
.cat-box {
    width: 30vh;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
}

.img {
    width: 100%;
    height: 80%;
}

.img img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: fill;
}

.cat {
    display: flex;
    height: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
}
</style>