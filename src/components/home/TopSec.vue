<template>
    <section id="topHome">
        <section class="first">
            <div class="grid-container">
                <div class="item item1"> </div>
                <div class="item item2"></div>
                <div class="item item3"></div>
                <div class="item item4"></div>
                <div class="item item5"></div>
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
                <cloth-card newProd="true" />
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
.banner {
    width: 100%;
    margin-bottom: 5vh;
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

.first {
    height: 89vh;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-columns: auto 24vw 24vw;
    gap: 0.6rem;
    padding: 0.6% 0;
}

.grid-container>div {
    text-align: center;
    /* padding: 32% 0; */
    padding: 9.8rem 0;
}

.item1 {
    grid-row: 1 / 3;
    background-image: url('@/assets/category-1.jpg');
}

.item {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
    margin: 10vh 0 5vh 0;
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

.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7vh;
}
</style>