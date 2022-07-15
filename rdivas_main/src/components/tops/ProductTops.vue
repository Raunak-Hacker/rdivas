<template>
    <div class="productTops">
        <div class="sort">
            <small>Sort By</small>
            <div class="dropdown">
                <button @click="myFunction" class="dropbtn">Relevance</button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="">Price: Low to High</a>
                    <a href="">Price: High to Low</a>
                    <a href="">New</a>
                </div>
            </div>
        </div>
        <div class="flex-wrap">
            <cloth-card v-for="product in filteredProds" :key="product.id" :id="product.id" :name="product.name"
                :imgUrl="product.image" :price="product.sellingPrice" :best="product.BestSeller" :sale="product.Sale"
                :discount="product.price" :color="product.color" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {


        };
    },
    computed: {
        filteredProds() {
            return this.$store.getters.filteredProds;
        },
    },
    created() {

    },
    methods: {
        myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        },

    }
}

</script>

<style scoped>
.dropbtn {
    background-color: white;
    color: black;
    padding: 0.7rem;
    font-size: 16px;
    border: none;
    cursor: pointer;

}

.dropdown {
    position: relative;
    border: 1px solid black;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 10rem;
    overflow: auto;
    box-shadow: 0px 0.5rem 1rem 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 0.8rem 1rem;
    text-decoration: none;
    display: block;
}

.sort {
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-items: center;
}

.dropdown a:hover {
    background-color: #ddd;
}

.show {
    display: block;
}

.productTops {
    width: 75%;
    padding: 1%;
    /* border: 1px solid black; */
}
</style>