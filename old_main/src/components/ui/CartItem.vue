<template>
    <div class="product">
        <div class="dets">
            <div class="img">
                <img :src="img" alt="">
            </div>
            <div class="prod-info">
                <label>{{ name }}</label>
                <small><label for="">Size: </label>{{ size }}</small>
                <small><label for="">Color: </label>{{ color }}</small>
            </div>
        </div>
        <div class="flex-prod">
            <div class="qty">
                <div class="in-boxes count" style="border: 1px solid rgba(0, 0, 0, 0.212);">
                    <div class="in-box" @click="quantity--" style="border:none; margin: 0"><i class="bx bx-minus" />
                    </div>
                    <div class="in-box" style="border:none; cursor: default;"><small>{{ quantity }}</small>
                    </div>
                    <div class="in-box" @click="quantity++" style="border:none;"><i class="bx bx-plus" />
                    </div>
                </div>
            </div>
            <div class="price"><label for="price">₹{{ discount * quantity }}</label></div>
            <div class="offer"><label for="offer" style="color:red">-₹{{ (discount - price) * quantity }}</label></div>
            <div class="total">
                <div class="del" @click="removeItem"><i class="bx bx-x" /></div><label for="total">₹{{ price * quantity
                }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'name', 'img', 'size', 'color', 'price', 'discount', 'qty'],
    created() {
        this.quantity = this.qty;
        this.$emit('update-quantity', this.quantity);
    },
    data() {
        return {
            quantity: null
        }
    },
    methods: {
        removeItem() {
            this.$store.commit('removeFromCart', this.id);
        },
    },
    watch: {
        quantity(val) {
            if (val < 1) {
                this.quantity = 1;
                this.$store.commit('removeFromCart', this.id);
            }
            else if (val > 10) {
                this.quantity = 10;
            }
            this.$emit('update-quantity', this.quantity);
        }
    },
}
</script>

<style scoped>
.product {
    height: 33.33%;
    padding: 1% 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.56);
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

.del {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: flex-end;
}

.del i {
    font-size: 1.3rem;
    color: var(--left-login);
}

.total {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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
</style>