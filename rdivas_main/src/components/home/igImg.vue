<template>
    <div class="ig-img">
        <img src="../../assets/ig.jpg" alt="">
        <p class="hidden"> <img src="../../assets/instagram-thin.svg" alt=""> <br> <a href="">@r.divas9.</a> </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ig-img {
    position: relative;
    line-height: 2.2rem;
}



.ig-img:hover img {
    cursor: pointer;
    opacity: 0.2;
    transition: 0.3s;
    z-index: -1;
}

.ig-img:hover p img {
    opacity: 1;
    width: 4rem;
    height: 3rem;
    margin-left: 18%;
}

.ig-img:hover .hidden {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat', sans-serif;
    font-size: large;
    font-weight: 400;
    color: black;
    z-index: 1;
}
</style>