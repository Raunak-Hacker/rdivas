<template>
    <div class="best-cat">
        <header>
            <div class="icons">
                <div class="icon" @click="leftClick"><i class="bx bx-chevron-left"></i></div>
                <div class="icon"><i class="bx bx-chevron-right"></i></div>
            </div>
            <div class="title">
                <span>{{ title }}</span>
            </div>
        </header>
        <div class="flex-wrap">
            <div class="card" v-for="product in products" :key="product.id">
                <cloth-card :id="product.id" :name="product.name" :imgUrl="imgHost + product.image"
                    :price="product.sellingPrice" :discount="product.price" />
            </div>
        </div>
    </div>
    <div class="flex-box ad" v-if="index == 0 || index == 2">
        <div class="ad1">
            <img src="@/assets/dres1.jpg" alt="" />
        </div>
        <div class="ad2">
            <img src="@/assets/top2.jpg" alt="" />
        </div>
    </div>
</template>

<script>
import ClothCard from "../category/ClothCard.vue";
export default {
    components: { ClothCard },
    props: ["title", "index", "products", "id"],
    data() {
        return {
            dress:
                "https://rukminim1.flixcart.com/image/832/832/kox8b680/track-suit/n/p/d/xl-solid-striped-women-track-suit-r-divas-original-imag39x9w6a6z9hj.jpeg?q=70",
            clothes: [
                {
                    id: 1,
                    name: "Printed Women Track Suit",
                    price: 600,
                    image:
                        "https://rukminim1.flixcart.com/image/832/832/kr83ukw0/track-suit/b/k/2/s-nr-tsuit08-singnature-r-divas-original-imag528zf7f6zyzc.jpeg?q=70",
                    Sale: true,
                    Dprice: 1000,
                    newProd: true,
                },
                {
                    id: 2,
                    name: "Printed Women Track Suit",
                    price: 320,
                    image:
                        "https://rukminim1.flixcart.com/image/580/696/kulk9zk0/track-suit/s/v/g/m-track-suit-grey-r-divas-original-imag7zpuy8x6c9yt.jpeg?q=50",
                    disc: true,
                    newProd: false,
                },
                {
                    id: 3,
                    name: "Printed Women Track Suit",
                    price: 300,
                    image:
                        "https://rukminim1.flixcart.com/image/580/696/kpwybgw0/track-suit/k/8/g/s-tracksuit-01-r-divas-original-imag4fnrwg2txhgh.jpeg?q=70",
                    disc: false,
                    BestSeller: true,
                },
                {
                    id: 4,
                    name: "Solid Women Black Tights",
                    price: 600,
                    image:
                        "https://rukminim1.flixcart.com/image/580/696/kuof5ow0/track-suit/b/e/l/m-cotton-queen-tracksuit-orange-m-r-divas-original-imag7qthcaachxze.jpeg?q=50",
                },
            ],
        };
    },
    computed: {
        imgHost() {
            return this.$store.getters.imgHost;
        },
    },
    methods: {
        leftClick() {
            this.$emit("leftClick", this.id);
            var last = this.clothes[this.clothes.length - 1]
            console.log(last.id);
        },
    }
};
</script>

<style scoped>
.best-cat {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.best-cat header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icons {
    display: flex;
    align-items: center;
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

.icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    justify-content: center;
    transition: all 0.15s ease-in-out;
}

.icon i {
    font-size: 1.5rem;
}

.icon:hover {
    background-color: black;
    color: white;
}

.title {
    font-size: 1.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
}

/* .clothes {
    gap: 2.5%;
    margin-top: 1.5%;
} */
.card {
    width: 23%;
    height: 35%;
    margin: 1%;
}
</style>
