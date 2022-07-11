<template>
    <section class="prod-page">
        <div class="prod-photos">
            <div class="images">
                <div class="img" v-if="data.image1" @click="img1">
                    <img :src="data.image1" alt="">
                </div>
                <div class="img" v-if="data.image2" @click="img2">
                    <img :src="data.image2" alt="">
                </div>
                <div class="img" v-if="data.image3" @click="img3">
                    <img :src="data.image3" alt="">
                </div>
                <div class="img" v-if="data.image4" @click="img4">
                    <img :src="data.image4" alt="">
                </div>
                <div class="img" v-if="data.image5" @click="img5">
                    <img :src="data.image5" alt="">
                </div>
                <div class="img" v-if="data.image6" @click="img6">
                    <img :src="data.image6" alt="">
                </div>
            </div>
            <div class="main-img">
                <img :src="imgId" alt="">
            </div>
        </div>

        <div class="prod-info">
            <small>
                <i class="bx bx-chevron-left" /> &nbsp;&nbsp; Back to shop
            </small>
            <div class="prod-name">
                <div class="name">
                    <h1>{{ data.name }}</h1>
                </div>
                <div class="wish" :class="{ wished: wish }" @click="toggleWish">
                    <i class="bx bxs-heart" v-if="wish" />
                    <i class="bx bx-heart" v-else />
                    <p>Wishlist</p>
                </div>
            </div>
            <div class="flex-box">
                <div class="tags">Black</div>
                <div class="tags">Cotton</div>
                <div class="tags">Sale</div>
            </div>
            <div class="description">
                <p>{{ data.description }}</p>
            </div>
            <div class="specs">
                <label>Specifications</label>
                <div class="flex-box">
                    <div class="boxes">
                        <div class="box">
                            <label>Size</label>
                            <div class="in-boxes">
                                <div class="in-box size">S</div>
                                <div class="in-box size">M</div>
                                <div class="in-box size">L</div>
                                <div class="in-box size">XL</div>
                            </div>
                        </div>
                        <div class="box">
                            <label>Colors</label>
                            <div class="in-boxes colors">
                                <div style="background-color:black" class="in-box"><i class="bx bx-check" /></div>
                                <div class="in-box col"></div>
                                <div style="background-color:blue" class="in-box"></div>
                                <div class="in-box" v-for="image in data.group" :key="image.id" @click="colorChange"
                                    @mouseover="lol = image.id">L</div>
                                <div class="in-box"><img :src="data.image2" alt=""></div>
                            </div>
                        </div>
                        <div class="box">
                            <label>Count</label>
                            <div class="in-boxes count" style="border: 1px solid rgba(0, 0, 0, 0.212);">
                                <div class="in-box" @click="quantity--" style="border:none; margin: 0"><i
                                        class="bx bx-minus" />
                                </div>
                                <div class="in-box" style="border:none; cursor: default;">{{ quantity }}</div>
                                <div class="in-box" @click="quantity++" style="border:none;"><i class="bx bx-plus" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label for="ds">sd</label>
                </div>
            </div>

            <div class="btn">
                <div class="price">
                    <h3 style="margin-right:8.5%">₹{{ data.price }}</h3>
                    <small style="text-decoration:line-through">₹5000</small>
                </div>
                <div class="btns">
                    <button>Add To Cart</button>
                    <button>Buy Now</button>
                </div>

            </div> <br>

        </div>
    </section>

</template>

<script>
export default {
    data() {
        return {
            data: null,
            lol: null,
            imgId: null,
            wish: false,
            quantity: 1

        }
    },
    async created() {
        try {
            const response = await fetch(`${this.$store.getters.host}/get/product/${this.$route.params.id}`);
            const data = await response.json();
            this.data = data;
            this.imgId = data.image1;
            this.$store.dispatch('getProdDetails', data);
        } catch (error) {
            this.data = error;
        }
    },
    methods: {
        colorChange() {
            this.$router.push(`/product/${this.lol}`);
        },
        toggleWish() {
            this.wish = !this.wish;
        },
        img1() {
            this.imgId = this.data.image1;
        },
        img2() {
            this.imgId = this.data.image2;
        },
        img3() {
            this.imgId = this.data.image3;
        },
        img4() {
            this.imgId = this.data.image4;
        },
        img5() {
            this.imgId = this.data.image5;
        },
        img6() {
            this.imgId = this.data.image6;
        }
    },
    watch: {
        async $route() {
            const response = await fetch(`${this.$store.getters.host}/get/product/${this.$route.params.id}`);
            const data = await response.json();
            this.data = data;
            this.$store.dispatch('getProdDetails', data);
            console.log('route Changed');
        },
        quantity(newVal) {
            if (newVal < 1) {
                this.quantity = 1;
            }
        }
    }

}
</script>

<style scoped>
body {
    background-color: #f5f5f5;
}

.svg {
    width: 1vh;
    height: 1rem;
    fill: #CA1515;
}

.in-svg {
    width: 100%;
    height: 100%;
}

.prod-page {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    height: 100vh;
    width: 100%;
}

.prod-photos {
    display: flex;
    justify-content: flex-start;
    width: 55%;
    height: 89%;
    background-color: #fff;
}

.images {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: 70%;
}

.img {
    width: 25%;
    height: 15%;
    background-color: #fff;
    margin: 0.5rem;
    cursor: pointer;
}

.img img {
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
}

.img img:hover {
    opacity: 0.6;
}

.main-img {
    width: 50%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #e5e5e5;
}

.main-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.prod-info {
    padding: 1rem 2rem 0 0;
    width: 45%;
    height: 100%;
    background-color: #fff;
}

.prod-info small {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.9rem;
    color: rgb(163, 163, 163);
    cursor: pointer;
}

.prod-info small i {
    font-size: 1.5rem;
}

.prod-info h1 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
}

.prod-name,
.wish {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.wish {
    width: 7.4rem;
    padding: 1.5% 3%;
    font-size: small;
    border: 1px solid #d6d6d6;
    background-color: #d6d6d650;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.flex-box {
    display: flex;
    justify-content: flex-start;
}

.tags {
    margin-top: 3%;
    width: max-content;
    padding: 1.5% 3%;
    font-size: small;
    background-color: #d6d6d63d;
    margin-right: 2%;
}

.wish i {
    font-size: large;
}

.wish:hover,
.wished {
    background-color: #ff3c3c25;
    color: red;
}

.description,
.specs,
.box,
.boxes,
.btn {
    margin-top: 4.5%;
}

.description p {
    font-size: 0.8rem;
    line-height: 1.5;
    width: 75%;
    color: rgba(0, 0, 0, 0.6);
}




.specs label {
    width: 45%;
    color: rgba(131, 131, 131, 0.918);
    font-weight: 600;
}

.box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box label {
    color: rgba(163, 163, 163, 0.96);
    font-weight: 600;
    font-size: small;
}

.boxes {
    width: 50%;
    max-width: 50%;
}

.in-boxes {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: max-content;
    height: 8%;
}

.in-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 4%;
    border: 1px solid rgba(0, 0, 0, 0.212);
    height: 2.5rem;
    width: 3.5rem;
    cursor: pointer;
}

.colors i {
    color: rgba(224, 224, 224, 0.753);
    font-size: x-large;
}

.count i {
    color: rgba(0, 0, 0, 0.505);
    font-size: large;
}

.in-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.col {
    background-color: #CA1515;
}
.size{
    transition: all 0.25s ease-in-out;
}
.size:hover {
    background-color: #000;
    color: #fff;
}

.color img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.color img:hover {
    opacity: 0.4;
}

.btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
}

.price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;
}

.btns {
    display: flex;
    align-items: center;
    width: 68%;
}

button {
    padding: 0.7rem 1rem;
    margin-right: 2%;
    border: 1px solid #e5e5e5;
    border-radius: 0.5rem;
    background-color: rgb(44, 43, 43);
    font-weight: 500;
    color: rgb(223, 223, 223);
}
</style>