<template>
    <section id="topHome">
        <section class="first">
            <div class="grid-container">
                <div class="item item1">
                    <div class="info">
                        <h1>Women’s fashion</h1> <br>
                        <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna.
                        </p> <br>
                        <h5 class="sel"><a href="">SHOP NOW</a></h5>
                    </div>
                </div>
                <div class="item item2">
                    <div class="info2">
                        <h3>Men's fashion</h3> 
                        <!-- <p>358 Items</p>  -->
                        <br>
                        <h5 class="sel"><a href="">SOON</a></h5>
                    </div>
                </div>
                <div class="item item3">
                    <div class="info2">
                        <h3>Kid's fashion</h3> 
                        <!-- <p>124 Items</p>  -->
                        <br>
                        <h5 class="sel"><a href="">SOON</a></h5>
                    </div>
                </div>
                <div class="item item4">
                    <div class="info2">
                        <h3>Cosmetics</h3> 
                        <!-- <p>192 Items</p>  -->
                        <br>
                        <h5 class="sel"><a href="">SOON</a></h5>
                    </div>
                </div>
                <div class="item item5">
                    <div class="info2">
                        <h3>Accessories</h3> 
                        <!-- <p>725 Items</p>  -->
                        <br>
                        <h5 class="sel"><a href="">SOON</a></h5>
                    </div>
                </div>
            </div>
        </section>
        <section class="second">
            <header>
                <div class="flex-box">
                    <div class="title">
                        <p class="sel">NEW PRODUCT</p>
                    </div>
                    <div class="cats">
                        <div class="nav-links">
                            <ul>
                                <li> <a class="sel" href="">All</a> </li>
                                <li> <a href="">Bottoms</a> </li>
                                <li> <a href="">Lehengas</a> </li>
                                <li> <a href="">Dupattas</a> </li>
                                <li> <a href="">Salwar Suit</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div class="flex-wrap">
                <cloth-card disc="true" />
                <cloth-card />
                <cloth-card newProd="true"  />
                <cloth-card />
                <cloth-card disc="true" />
                <cloth-card />
                <cloth-card disc="true" />
                <cloth-card />
            </div>
        </section>
        <div class="banner">
            <img src="@/assets/banner.jpg" alt="">
            <p>UPTO 80% DISCOUNT <br> CLEARANCE SALE </p>
        </div>
        <section class="second">
            <header>
                <div class="flex-box">
                    <div class="title">
                        <p class="sel">CLEARANCE SALE</p>
                    </div>
                </div>
            </header>
            <div class="flex-wrap">
                <cloth-card />
                <cloth-card disc="true" />
                <cloth-card />
                <cloth-card newProd="true" />
                <cloth-card disc="true" />
                <cloth-card />
                <cloth-card disc="true" />
                <cloth-card />
            </div>
        </section>
    </section>
</template>

<script>

export default {


}
</script>

<style scoped>
*{
    text-align: left;

}
a {
    color: black;

}
.info {
    margin-top: 10%;
    width: 50%;
    margin-left: 10%;
    text-align: left;

}

.info h1 {
    font-family: 'Cookie', cursive;
    font-size: 430.5%;
    font-weight: lighter;
    margin: 0;
    padding: 0;
}

.info h5 {
    width: max-content;
}
.info2 {
    position: absolute;
    top: 32%;
    left: 8%;
    font-weight: 400;
    font-family: 'Montserrat' , sans-serif;
}
.info2 h3{
    font-size: 150%;
    margin: 0;
    padding: 0;
    font-weight: 510;
}
.info2 h5 {
    width: max-content;
}
.info p, .info2 p {
    font-size: 0.8rem;
    color: gray;
    font-weight: 400;
}

.banner {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-columns: auto 24% 24%;
    gap: 0.6rem;
    padding: 0.8% 0;
}

.grid-container>div {
    text-align: center;
    /* padding: 32% 0; */
    padding: 23.8% 0;
}

.item1 {
    grid-row: 1 / 3;
    background-image: url('@/assets/category-1.jpg');
}

.item {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

.item2 {
    background-image: url('@/assets/category-2.jpg');
}

.item3 {
    background-image: url('@/assets/category-3.jpg');
}

.item4 {
    background-image: url('@/assets/category-4.jpg');
}

.item5 {
    background-image: url('@/assets/category-5.jpg');
}

.second {
    margin: 5% 0 0 0;
    padding: 0 13%;
    width: 100%;
}



header {
    margin-bottom: 4%;
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: x-large;
}


</style>