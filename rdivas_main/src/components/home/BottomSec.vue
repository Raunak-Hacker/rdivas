<template>
    <section id="bottomHome">
        <div class="features">
            <div class="disc">
                <img src="@/assets/disc.png" alt="">
            </div>
            <div class="flex-box">
                <div class="box">
                    <div class="feat-img img1"></div>
                    <div class="feat-det">
                        <h5>Free Shipping in India<br> <small>For all orders over ₹500 </small> </h5>
                    </div>
                </div>
                <div class="box">
                    <div class="feat-img img2"></div>
                    <div class="feat-det">
                        <h5>Money Back Guarantee<br> <small>On manufacturing defect </small> </h5>
                    </div>
                </div>
                <div class="box">
                    <div class="feat-img img3"></div>
                    <div class="feat-det">
                        <h5>24 x 7 Online Support<br> <small>Dedicated Support </small> </h5>
                    </div>
                </div>
                <div class="box">
                    <div class="feat-img img4"></div>
                    <div class="feat-det">
                        <h5>Safe Payments<br> <small>100% Secured Payment </small> </h5>
                    </div>

                </div>
            </div>
        </div>
        <div class="instagram">
            <button class="left" @click="leftScroll"><img src="@/assets/double-arrow-left.svg"></button>
            <div class="scroll-images">
                <ig-img />
                <ig-img />
                <ig-img />
                <ig-img />
                <ig-img />
                <ig-img />
            </div>
            <button class="right" @click="rightScroll"><img src="@/assets/double-arrow-right.svg"></button>
        </div>
    </section>
</template>

<script>
import igImg from '@/components/home/igImg.vue'
export default {
    components: { igImg },
    data() {
        return {
            igAct: false
        }
    },
    methods: {
        leftScroll() {
            const left = document.querySelector(".scroll-images");
            left.scrollBy(-400, 0);
        },
        rightScroll() {
            const right = document.querySelector(".scroll-images");
            right.scrollBy(400, 0);
        },
        selIgAct() {
            this.igAct = true;
        }
    }
}
</script>

<style scoped>
a {
    color: black;

}
.features {
    padding: 0 13%;
    margin-bottom: 10vh;
}

.disc img {
    width: 100%;
    margin-bottom: 10vh;

}


.features small {
    font-weight: lighter;
}

.features .box {
    width: 25%;
    height: 5vh;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
}

.features .feat-img {
    background-size: cover;
    background-position: center;
}

.features .feat-img:hover {
    cursor: pointer;
}

.features .img1 {
    width: 20%;
    height: 110%;
    background-image: url('@/assets/car.svg');
}

.features .feat-det {
    margin-left: 1.5rem;
}

.features .img2 {
    width: 20%;
    height: 110%;
    background-image: url('@/assets/money-back.svg');
}

.features .img3 {
    width: 18.5%;
    height: 110%;
    background-image: url('@/assets/support.svg');
}

.features .img4 {
    width: 20.5%;
    height: 100%;
    background-image: url('@/assets/card.svg');
}



.instagram {
    position: relative;

}

.scroll-images {
    width: 100%;
    display: flex;
    overflow: auto;
}

.right img,
.left img {
    margin-top: 0.4rem;
    width: 1.2rem;
    height: 1.2rem;
}





.scroll-images::-webkit-scrollbar {
    -webkit-appearance: none;
}

button {
    cursor: pointer;
    border-radius: 50%;
    padding: 1rem 1.2rem;
    background-color: rgba(255, 255, 255, 0.552);
    outline: 0;
    border: 0;
    z-index: 1;
}

.left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>