<template>
    <header :class="{ fix: scrolled }">
        <div class="flex-box">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="cats">
                <div class="nav-links">
                    <ul>
                        <li>
                            <router-link to="/home" @click="home" :class="{ sel: homActive }">HOME</router-link>
                        </li>
                        <li v-for="category in categories" :key="category.name">
                            <!-- <router-link :to="'/' + category.name" @click="category.name" :class="{ sel: dressActive }"> -->
                            <a  @click="category.name" :class="{ sel: dressActive }">
                                {{ category.name }}
                            </a>
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
                <router-link to="/user" v-if="auth && $route.path !== '/user'"><i class="bx bx-user-circle" /></router-link>
                <i class="bx bx-log-out" v-else-if="auth && $route.path === '/user'" @click="logout" />
                <router-link to="/login" v-else><i class="bx bx-log-in" /></router-link>
                <!-- <a @click="logout" v-else><small>Logout</small ></a> -->
                <input type="text" placeholder="search..." v-if="search">
                <!-- <i class="bx bx-search" @click="search = !search" /> -->
                <router-link to="/wish-list"> <i class="bx bx-heart" /></router-link>
                <router-link to="/cart"> <i class="bx bx-cart" /></router-link>
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
            auth: false,
        }
    },
    computed: {
        host() {
            return this.$store.getters.host;
        },
    },
    async created() {
        const response = await fetch(`${this.host}/get/header`);
        const data = await response.json();
        this.categories = data.categories;
        // await this.$store.dispatch('auth');
        this.auth = await this.$store.getters.isAuth;
    },
    mounted() {
        window.addEventListener('scroll', this.scroll)
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
        logout() {
            this.$store.dispatch('logout');
        },
        scroll() {
            if (window.scrollY > 0) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    },
    watch: {}
}
</script>

<style scoped>
a {
    color: black;

}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 10rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
    padding: 0.8rem 1rem;
    z-index: 1;
    line-height: 1.5rem;
    text-transform: capitalize;
}

.dropdown-content a {
    color: rgba(0, 0, 0, 0.692);
    transition: all 0.15s ease-in-out;
}

.nav-links .dropdown-content a:hover::after {
    width: 0%;
}

.dropdown-content a:hover {
    color: #000;
}

li {
    text-transform: uppercase;
}

li:hover .dropdown-content {
    display: block;
}

i {
    color: rgba(0, 0, 0, 0.505);

}

.flex-box {
    height: 100%;
    padding-top: 0.5%;
}

header {
    position: fixed;
    z-index: 1;
    background-color: white;
    padding: 0 2rem;
    height: 11vh;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Montserrat', sans-serif;
}

.fix {
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

.logo {
    width: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    height: 100%;
    width: 100%;
}

.login img {
    width: 1rem;
    height: 1rem;
    margin-left: 1.5rem;
}

i,
input {
    margin-left: 1rem;
    font-size: 1.2rem;
}

input {
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