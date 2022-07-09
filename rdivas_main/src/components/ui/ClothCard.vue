<template>
    <div class="prod" @mouseenter="iconHover" @mouseleave="iconHover">
        <div class="img">
            <img src="../../assets/product-1.jpg">
            <div class="sale" v-if="disc">SALE</div>
            <div class="new" v-if="newProd">NEW</div>
        </div>
        <transition>
            <div class="icons" v-if="icon">
                <a href=""> <img src="../../assets/expand.svg" alt=""> </a>
                <a href=""> <img src="../../assets/heart.svg" alt=""> </a>
                <a href=""> <img src="../../assets/bag.svg" alt=""> </a>
            </div>
        </transition>
        <div class="det">
            <router-link to="/product/1">
                <p> Buttons Tweed Blazer</p>
            </router-link>
            <h5 :class="{ red: disc }">₹ 2,000 <s v-if="disc">₹3000</s> </h5>

        </div>
    </div>
</template>


<script>

export default {
    props: ['disc', 'newProd'],
    data() {
        return {
            icon: false,
        }
    },
    methods: {
        iconHover() {
            this.icon = !this.icon;
        }
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

s {
    text-decoration: line-through;
    /* font-weight: 200; */
    font-family: 'Roboto', sans-serif;
    margin-left: 0.5vw;
    color: gray;

}

.prod {
    width: 23.5%;
    height: 60vh;
    margin-bottom: 2%;
    display: flex;
    margin: 0.5rem;
    flex-direction: column;
    position: relative;
}

.icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.5rem;
    width: 75%;
    position: absolute;
    top: 57%;
    margin-left: 15%;
    /* transition: 3s ease-in-out; */
}

.icons a {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    background: white;
    color: #111111;
    text-align: center;
    /* transition: 3s ease-in-out; */

    border-radius: 50%;
}

.img {
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    position: relative;
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

.icons img {
    margin-top: 30%;
    width: 40%;
    height: 40%;
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
</style>