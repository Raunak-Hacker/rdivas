<template>
    <section class="top">
        <div class="banner">
            <img src="@/assets/ban.jpg" alt="">
            <div class="icons">
                <div class="icon">
                    <i class="bx bx-chevron-right" />
                </div>
                <div class="icon">
                    <i class="bx bx-chevron-left" />
                </div>
            </div>
        </div>
        <div class="flex-wrap">
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
            <cat-box />
        </div>
        <div class="pad1">
            <best-sell-cat title="TRACK SUITS" />
            <div class="title">
                <span>INTO THE SPOTLIGHT</span>
            </div>
            <div class="flex-wrap spot">
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/spot1.jpg" alt="">
                </div>
            </div>
            <best-sell-cat title="KURTI SET" />
            <best-sell-cat title="Dresses" />
            <div class="flex-box ad">
                <div class="ad1">
                    <img src="@/assets/dres1.jpg" alt="">
                </div>
                <div class="ad2">
                    <img src="@/assets/top2.jpg" alt="">
                </div>
            </div>
            <best-sell-cat title="BODYCONS" />
            <best-sell-cat title="TOPS" />
            <div class="flex-box ad">
                <div class="ad1">
                    <img src="@/assets/dres1.jpg" alt="">
                </div>
                <div class="ad2">
                    <img src="@/assets/top2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BestSellCat from './BestSellCat.vue'
import CatBox from './CatBox.vue'
export default {
    components: { CatBox, BestSellCat },
    data() {
        return {
            dress: 'https://rukminim1.flixcart.com/image/832/832/kox8b680/track-suit/n/p/d/xl-solid-striped-women-track-suit-r-divas-original-imag39x9w6a6z9hj.jpeg?q=70',

        }
    },
}
</script>

<style scoped>
.banner {
    /* background-image: url({{ ban }});  */
    width: 100%;
    margin-bottom: 3vh;
    position: relative;
}

.icons {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}


.icon {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    background: rgba(255, 255, 255, 0.384);
    color: #111111;
    margin: 20% 0;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease-in-out;
}
.icon i {
    font-size: 1.8rem;
}
.icon:hover {
    background-color: black;
    color: white;
}
.banner img {
    width: 100%;
}

.pad1 {
    padding: 0 1%;
}

.spot {
    margin-top: 2rem;
    width: 100%;
    column-gap: 2%;
}

.spot>* {
    margin-top: 2%;
}

.img {
    width: 23.5%;
}

.img img {
    width: 100%;
    height: 100%;
}

.title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
}

.flex-box,
img {
    width: 100%;
}

.ad {
    margin-bottom: 3vh;

}

.ad2 {
    width: 31.8%;
    height: 100%;
}

.ad1 {
    width: 66%;
    height: 100%;
}
</style>