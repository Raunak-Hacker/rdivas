<template>
    <header>
        <div class="offer">
            <h5>Buy 2 Get ₹500 Off* | CLEARANCE SALE</h5>
        </div>
        <div class="main">
            <div class="img">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="icons">
                <router-link to="/user"> <i class="bx bx-user" /></router-link>
                <router-link to="/wish-list"> <i class="bx bx-heart" /></router-link>
                <router-link to="/cart"> <i class="bx bx-cart" /></router-link>
            </div>
        </div>
        <div class="flex-box">
            <div class="nav-links">
                <ul>
                    <li>New Arrivals</li>
                    <li>Tops <i class="bx bx-chevron-down"></i> </li>
                    <li>Dresses <i class="bx bx-chevron-down"></i> </li>
                    <li>Track Suits</li>
                    <li>Kurtas</li>
                </ul>
            </div>
            <div class="logo-name">
                <h1 style="font-family:'Times New Roman', Times, serif; letter-spacing:0.2rem; font-size:2.5rem">RDIVAS
                </h1>

            </div>

            <div class="nav-links fe">
                <ul>
                    <li class="sel">Clearance Sale </li>
                    <li>Influencers</li>
                    <li>Bottoms</li>
                    <li>Sarees <i class="bx bx-chevron-down"></i> </li>
                    <li>Kurtis</li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    background-color: #fff;
    width: 100%;
    height: 10.5rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}

.offer {
    background-color: #29282d;
    height: 18%;
    width: 100%;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    width: 58%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    float: right;
    padding: 0 2%;
}

.img {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.icons {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.icons i {
    font-size: 1.7rem;
    font-weight: lighter;
    margin-left: 1rem;
}

.flex-box {
    display: flex;
    width: 100%;
    padding: 0 0.5%;
    height: 27%;
    background-color: #f3f3f3;

}

.nav-links {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.nav-links ul {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
}

.fe ul {
    justify-content: flex-end;
}

.nav-links ul li {
    font-family: 'raleway', sans-serif;
    letter-spacing: 0.05em;
    /*font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif; */
    font-weight: bold;
    font-size: 14.5px;
    position: relative;
    height: 100%;
    display: flex;
    width: max-content;
    margin-right: 1rem;
    justify-content: flex-end;
    align-items: center;
}

li i {
    font-size: larger;
}
</style>