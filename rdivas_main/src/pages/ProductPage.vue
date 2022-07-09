<template>
    <section class="prod-page">
        <div class="prod-photos">
            <div class="images">
                <div class="img">
                    <img src="@/assets/product/img1.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/product/img2.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/product/img3.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/product/img4.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/product/img5.jpg" alt="">
                </div>
                <div class="img">
                    <img src="@/assets/product/img6.jpg" alt="">
                </div>
            </div>
            <div class="main-img">
                <img src="@/assets/product/img6.jpg" alt="">
            </div>
        </div>

        <div class="prod-info">
            <h2>Black Salwar Top</h2>
            <h3>₹ 2,000</h3> <br>
            <i class="bx bx-star" />
            <i class="bx bx-star" />
            <i class="bx bx-star" />
            <i class="bx bx-star" />
            <i class="bx bx-star" />
            <br> <br> <strong>Colour :</strong> <div class="colors">
                <div class="color" style="background-color: #b80606;"></div>
                <div class="color" style="background-color: #a89606;"></div>
                <div class="color" style="background-color: #e85287;"></div>
            </div> <br>
            <h2>Sizes</h2>
            <div class="sizes">
                <div class="size">S</div>
                <div class="size">M</div>
                <div class="size">L</div>
                <div class="size">XL</div>
            </div> <br>
            <div class="quantity">
                <span>
                    <i class="bx bx-down-arrow-circle" />
                </span>
                <span>1</span>
                <span>
                    <i class="bx bx-up-arrow-circle" />
                </span>
            </div>
            <div class="btn">
                <button>Add To Cart</button>
                <button>Buy Now</button>
            </div> <br>
            <div class="description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales consequat diam, sed pharetra dui
                    ultrices at. In vestibulum mauris nibh, id maximus nulla volutpat non. Donec ac finibus libero.
                    Proin consectetur nibh vel nibh posuere malesuada.</p>
            </div>
        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style scoped>
body {
    background-color: #f5f5f5;
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
    justify-content: flex-start ;
    width: 55%;
    height: 89%;
    background-color: #fff;
}

.images {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
    height: 70%;
}

.img {
    width: 25%;
    height: 15%;
    background-color: #fff;
}

.img img {
    width: 100%;
    height: 100%;
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
}

.prod-info {
    padding: 1rem;
    width: 45%;
    height: 100%;
    background-color: #fff;
}

.colors {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 8%;
}

.color {
    width: 25%;
    height: 100%;

}

i {
    font-size: 1.5rem;

}

.sizes {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 40%;
    height: 8%;
}

.size {
    border: 1px solid rgba(0, 0, 0, 0.212);
    padding: 0.5rem 1rem;
    border-radius: 50%;
}

.quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;

}

.quantity i {
    margin: 1rem 0;
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.412);
}

.btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
    height: 8%;
}

button {
    padding: 0.7rem 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.5rem;
    background-color: rgb(44, 43, 43);
    font-weight: 500;
    color: rgb(223, 223, 223);
}
.description p{
    font-size: 0.8rem;
    line-height: 1.5;
    width: 75%;
    color: rgba(0, 0, 0, 0.6);
}
   
</style>