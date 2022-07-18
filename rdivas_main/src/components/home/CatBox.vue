<template>
    <div class="cat-box">
        <div class="img">
            <img src="@/assets/1DRESS.jpg">
        </div>
        <div class="cat">
            <h3>Dresses</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dress: 'https://rukminim1.flixcart.com/image/832/832/kox8b680/track-suit/n/p/d/xl-solid-striped-women-track-suit-r-divas-original-imag39x9w6a6z9hj.jpeg?q=70'
        }
    },
}
</script>

<style scoped>
.cat-box {
    width: 16.66%;
    height: 17%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
}

.img {
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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