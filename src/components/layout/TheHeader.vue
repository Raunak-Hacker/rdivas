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
                            <router-link to="/home">HOME</router-link>
                        </li>
                        <li>
                            <router-link to="/tops">TOPS</router-link>
                            <div class="dropdown-content">
                                <router-link to="">Top</router-link>
                                <router-link to="">Sports Wear</router-link>
                                <router-link to="">T- Shirt</router-link>
                                <router-link to="">Winter Wear</router-link>
                            </div>
                        </li>
                        <li>
                            <router-link to="/dresses">DRESSES</router-link>
                            <div class="dropdown-content">
                                <router-link to="">Flared Dresses</router-link>
                                <router-link to="">Bodycon Dresses</router-link>
                                <router-link to="">Jumpsuits</router-link>
                            </div>
                        </li>
                        <li>
                            <router-link to="/track-suits">TRACK SUITS</router-link>
                        </li>
                        <li>
                            <router-link to="/kurtis">KURTIS</router-link>
                            <div class="dropdown-content">
                                <router-link to="">Kurti</router-link>
                                <router-link to="">Kurti Sets</router-link>
                            </div>
                        </li>
                        <li>
                            <router-link to="/sarees">SAREES</router-link>
                            <div class="dropdown-content">
                                <router-link to="">Party Wear</router-link>
                                <router-link to="">Casual</router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="login">
                <small>Login / Register</small>
                <img src="../../assets/search.svg">
                <img src="../../assets/heart.svg">
                <img src="../../assets/bag.svg">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false
        }
    },
    methods: {
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

small {
    color: gray;
    font-size: small;
    font-weight: 300;
}
</style>