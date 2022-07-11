<template>
    <section class="cart">
        <div class="items">
            <div class="title">
                <h1>Shopping Cart</h1>
                <h1>3 Items</h1>
            </div>
            <div class="info">
                <label class="label">Product Details</label>
                <div class="labels">
                    <label for="">Quantity</label>
                    <label for="">Price</label>
                    <label for="">Offer</label>
                    <label for="">Total</label>
                </div>
            </div>
            <div class="products">
                <div class="product">
                    <div class="dets">
                        <div class="img">
                            <img src="@/assets/product/img1.jpg" alt="">
                        </div>
                        <div class="prod-info">
                            <label>Salwar Top</label>
                            <small><label for="">Size: </label>XL</small>
                            <small><label for="">Color: </label>Black</small>
                        </div>
                    </div>
                    <div class="flex-prod">
                        <div class="qty">
                            <div class="in-boxes count" style="border: 1px solid rgba(0, 0, 0, 0.212);">
                                <div class="in-box" @click="quantity--" style="border:none; margin: 0"><i
                                        class="bx bx-minus" />
                                </div>
                                <div class="in-box" style="border:none; cursor: default;"><small>{{ quantity }}</small>
                                </div>
                                <div class="in-box" @click="quantity++" style="border:none;"><i class="bx bx-plus" />
                                </div>
                            </div>
                        </div>
                        <div class="price"><label for="price">₹7000</label></div>
                        <div class="offer"><label for="offer" style="color:red">-₹700</label></div>
                        <div class="total"><label for="total">₹6300</label></div>
                    </div>
                </div>
                <div class="product">
                    <div class="img"></div>
                </div>
                <div class="product">
                    <div class="img"></div>
                </div>
            </div>
        </div>
        <div class="orders">
            <div class="title">
                <h1>Orders Summary</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            quantity: 1,

        }
    },


}
</script>

<style scoped>
.cart {
    width: 100%;
    height: 89vh;
    display: flex;
}

.items {
    width: 70%;
    padding: 3% 5%;
    display: flex;
    flex-direction: column;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.56);
}

.orders {
    width: 30%;
    background-color: rgba(119, 119, 119, 0.079);
    padding: 3% 3%;
    display: flex;
    flex-direction: column;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
}

.info .label,
.info .labels {
    color: grey;
    font-weight: 600;
    text-transform: uppercase;
    font-size: small;
}

.labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
    height: 10%;
}

.flex-prod {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    height: 100%;
}

.flex-prod label {
    font-weight: 600;
}

.products {
    height: 67%;
}

.product {
    height: 33.33%;
    padding: 1% 0;
    display: flex;
    align-items: center;
}

.dets {
    width: 43%;
    height: 100%;
    display: flex;
}

.img {
    width: 25%;
    height: 100%;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.prod-info {
    width: 65%;
    height: 100%;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgb(102, 102, 102);
}

.prod-info label {
    font-size: small;
    font-weight: 600;
    text-transform: capitalize;
    color: #000;
}

.count i {
    color: rgba(0, 0, 0, 0.505);
    font-size: large;
}

.in-boxes {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: max-content;
    margin-left: 2.2rem;

}

.in-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 4%;
    border: 1px solid rgba(0, 0, 0, 0.212);
    height: 2rem;
    width: 1.7rem;
    cursor: pointer;
}

.dif {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 62.5%;
    height: 10%;
}
</style>