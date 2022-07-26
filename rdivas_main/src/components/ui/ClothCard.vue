<template>
    <div class="prod" @mouseenter="iconHover" @mouseleave="iconHover">
        <div class="img" @click="$router.push('/product/' + id)">
            <img :src="imgUrl" :style="{ 'object-fit': fit }">
            <!-- style=" object-fit: cover " -->
            <div class="sale" v-if="sale">SALE</div>
            <div class="new" v-if="best">BEST SELLER</div>
        </div>
        
        <transition v-if="upHere"  @mouseleave="upHere = false" >
            <div class="icons" style="top: 45%;" v-if="icon">
            <a @click="addCart('S')">S</a>
            <a @click="addCart('M')">M</a>
            <a @click="addCart('Lllll')">L</a>
            <a @click="addCart('XL')">XL</a>

            </div>
        </transition>
        <transition v-if="true">
            <div class="icons" v-if="icon">

                <a href=""> <i class="bx bx-expand-alt" /> </a>
                <a @click="addWish"> <i class="bx bx-heart" /> </a>

                <a @mouseover="upHere = true" > <i class="bx bx-cart" /> </a>
                <!-- <a @click="addCart" > <i class="bx bx-cart" /> </a> -->

            </div>
        </transition>
        <div class="det">
            <router-link :to="'/product/' + id">
                <p> {{ name }}</p>
            </router-link>
            <h5 :class="{ red: sale }">₹ {{ price }} <s v-if="sale">₹{{ discount }}</s> </h5>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        best: {
            type: Boolean,
            required: true
        },
        sale: {
            type: Boolean,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        fit: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            icon: false,
            upHere: false,
        }
    },
    computed: {
        auth() {
            return this.$store.getters.isAuth;
        }
    },
    methods: {
        iconHover() {
            this.icon = !this.icon;
        },
        addWish() {
            if (this.auth) {
                const product = {
                    id: this.id,
                    name: this.name,
                    price: this.price,
                    image: this.imgUrl,
                }
                this.$store.commit('addToWishList', product);
            } else {
                this.$router.push('/login');
            }
        },
        addCart(size) {
            console.log(size);
            if (this.auth) {
                const product = {
                    prodId: this.id,
                    name: this.name,
                    price: this.price,
                    image: this.imgUrl,
                    quantity: 1,
                    size: size,
                    color: this.color,
                    discount: this.discount,
                }
                this.$store.dispatch('addToCart', product);
            } else {
                this.$router.push('/login');
            }
        },

    }
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.35s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.red {
    color: #ca1515;
}

a {
    text-decoration: none;
    color: #000;
}

s {
    text-decoration: line-through;
    font-family: 'Roboto', sans-serif;
    margin-left: 0.5vw;
    color: gray;

}

i {
    color: rgba(0, 0, 0, 0.505);

}

.prod {
    width: 98%;
    height: 10%;
    margin-bottom: 2%;
    display: flex;
    margin: 0.5%;
    flex-direction: column;
    position: relative;
    border: 1px solid #e0e0e0;
}

.icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.5rem;
    width: 75%;
    position: absolute;
    top: 55%;
    margin-left: 15%;
    /* transition: 3s ease-in-out; */
}

.icons a {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    background: #b5d7ff;
    color: #111111;
    text-align: center;
    /* transition: 3s ease-in-out; */
    border-radius: 50%;
}

.img {
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.sale,
.new {
    position: absolute;
    top: 3%;
    left: 3%;
    background: #ca1515;
    color: white;
    padding: 0.22rem 0.5rem;
    font-size: 12px;
    font-weight: 450;
    font-family: 'Raleway', sans-serif;
}

.new {
    background: #36A300;
    color: white;
    font-family: 'Montserrat', sans-serif;

}

.icons i {
    margin-top: 25%;
    font-size: 1.15rem;

}

.icons a:hover {
    background-color: #ca1515;
    transition: background-color 300ms linear;
}

.icons a:hover i {
    transform: rotate(360deg);
    color: white;
    transition: all 300ms ease-in-out;
}

.det {
    width: 100%;
    /* height: 30%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
}

.det p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: small;
    margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
    .prod {
        width: 100%;
        height: 20%;
        margin-bottom: 2%;
        display: flex;
        margin: 0.5%;
        flex-direction: column;
        position: relative;
        border: 1px solid #e0e0e0;
    }
    .img {
        width: 100%;
        height: 20vh;
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;
        position: relative;
        cursor: pointer;
    }
    .img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .icons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 1.5rem;
        width: 75%;
        position: absolute;
        top: 55%;
        margin-left: 15%;
        /* transition: 3s ease-in-out; */
    }
    .icons a {
        display: block;
        height: 2.5rem;
        width: 2.5rem;
        background: #b5d7ff;
        color: #111111;
        text-align: center;
        /* transition: 3s ease-in-out; */
        border-radius: 50%;
    }
    .det {
        width: 100%;
        /* height: 30%; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
    }
    .det p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        font-size: small;
        margin-bottom: 1rem;
    }

    
}
</style>