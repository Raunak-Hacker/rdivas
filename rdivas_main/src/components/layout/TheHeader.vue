<template>
    <header :class="{ fix: scrolled }">
        <div class="flex-box">
            <div class="logo">
                <h1>RDIVAS</h1>
            </div>
            <div class="cats">
                <div class="nav-links">
                    <ul>
                        <li>
                            <router-link to="/home" @click="home" :class="{ sel: homActive }">HOME</router-link>
                        </li>
                        <li v-for="category in categories" :key="category.name">
                            <router-link :to="'/' + category.name" @click="category.name" :class="{ sel: dressActive }">
                                {{ category.name }}
                            </router-link>
                            <div class="dropdown-content">
                                <router-link v-for="subcategory in category.subcategories" :key="subcategory"
                                    @click="top" :to="'/' + category.name + '/' + subcategory.subcategoryid">{{
                                            subcategory.name
                                    }}</router-link>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="login">
                <small>Login / Register</small>
                <input type="text" placeholder="search..." v-if="search">
                <i class="bx bx-search" @click="search = !search"/>
                <i class="bx bx-heart"/>
                <i class="bx bx-cart"/>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
            topActive: false,
            categories: [],
            search: false,
        }
    },
    computed: {
        host() {
            return this.$store.getters.host;
        }
    },
    async created() {
        const response = await fetch(`${this.host}/get/header`);
        const data = await response.json();
        this.categories = data.categories;
    },
    methods: {
        act() {
            this.topActive = false;
            this.dressActive = false;
            this.trackActive = false;
            this.kurtiActive = false;
            this.sareeActive = false;
            this.homeActive = false;
        },
        home() {
            this.act();
            this.homeActive = true;
        },
        top() {
            this.act();
            this.topActive = true;
        },
        scroll() {
            if (window.scrollY > 0) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scroll)
    }
}
</script>

<style scoped>
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 10rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
    padding: 0.8rem 1rem;
    z-index: 1;
    line-height: 1.5rem;
}

.nav-links .dropdown-content a:hover::after {
    width: 0%;
}
li{
    text-transform: uppercase;
}
li:hover .dropdown-content {
    display: block;
}

header {
    position: fixed;

    transition: 2s;
    z-index: 1;
    background-color: white;
    padding: 1.2rem 2rem;
    height: 11vh;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Montserrat', sans-serif;
}

.fix {
    transition: 2s;

    position: fixed;
}

.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}

.headroom--pinned {
    transform: translateY(0%);
}

.headroom--unpinned {
    transform: translateY(-100%);
}

.login img {
    width: 1rem;
    height: 1rem;
    margin-left: 1.5rem;
}
i, input{
    margin-left: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
}

input{
    border: none;
    outline: none;
    border-bottom: 1px solid #CA1515;
    padding: 0.5rem;
}

small {
    color: gray;
    font-size: small;
    font-weight: 300;
}
</style>