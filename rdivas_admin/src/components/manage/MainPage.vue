<template>
    <section class="manageMain">
        <div class="flex-end">
            <div class="flex-box">
                <div class="box">
                    <div class="search" style="text-transform: capitalise; width: 85%">
                        <input type="text" v-model="filter" @keyup="filterProducts" @focusin="changeIcon"
                            @focusout="changeIcon" style="text-transform: capitalise; width: 90%"
                            :placeholder="'Search in ' + selManage + ' ...'" />
                        <i v-if="search" class="bx bx-search icon" />
                        <i v-else class="bx bx-x icon" @click="close" />
                    </div>
                </div>
                <div class="box">
                    <h2 style="text-transform: capitalize">Manage {{ selManage }}</h2>
                </div>
                <div class="box">
                    <input style="width:40%; height: 50%;    padding: 0 10px" v-if="
                        selManage === 'categories' ||
                        selManage === 'groups' ||
                        selManage === 'colors' ||
                        selManage === 'fabrics'
                    " type="text" v-model="newStuff" :placeholder="'New ' + name" />
                    <input type="color" v-model="colorCode" style="width: 8%" v-if="selManage === 'colors'" />
                    &nbsp;

                    <div class="addProd">
                        <button class="button-42" @click="addClick" style="text-transform: uppercase">
                            ADD {{ name }}
                        </button>
                        <button class="button-42" @click="backClick"
                            style="text-transform: uppercase; margin-left: 1rem; ">
                            <i style="color:whitesmoke; padding-top: 12%" class="bx bx-arrow-back"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="productList">
            <the-product v-for="product in filteredProducts" :key="product.id" :id="product.id" :name="product.name"
                :sel-manage="selManage" @edit-clicked="editClick" :colorCode="product.colorCode"
                @del-clicked="delClick" />
        </div>
    </section>
</template>

<script>
import TheProduct from "@/components/manage/TheProduct.vue";
export default {
    props: ["sel-manage", "prods", "filteredProds"],
    components: {
        TheProduct,
    },
    created() {
        this.$store.commit("setFilterProducts");
        if (this.selManage === "categories") {
            this.name = "category";
        } else if (this.selManage === "groups") {
            this.name = "group";
        } else if (this.selManage === "fabrics") {
            this.name = "fabric";
        } else if (this.selManage === "colors") {
            this.name = "color";
        } else if (this.selManage === "sub categories") {
            this.name = "sub category";
        } else if (this.selManage === "products") {
            this.name = "product";
        }
    },
    data() {
        return {
            search: true,
            filter: "",
            newStuff: null,
            colorCode: "",
            name: null,
        };
    },
    computed: {
        products() {
            return this.$store.getters.products;
        },
        filteredProducts() {
            return this.$store.getters.filteredProducts;
        },
    },
    methods: {
        async addClick() {
            if (
                this.selManage === "categories" ||
                this.selManage === "groups" ||
                this.selManage === "colors" ||
                this.selManage === "fabrics"
            ) {
                if (this.newStuff) {
                    let stuff = null;
                    let newStuff = null;
                    if (this.selManage === "categories") {
                        stuff = "type";
                    } else if (this.selManage === "groups") {
                        stuff = "group";
                    } else if (this.selManage === "fabrics") {
                        stuff = "fabric";
                    }
                    newStuff = {
                        name: this.newStuff,
                        sel: stuff,
                    };
                    if (this.selManage === "colors") {
                        stuff = "color";
                        newStuff = {
                            name: this.newStuff,
                            colorCode: this.colorCode,
                            sel: stuff,
                        };
                    }
                    await this.$store.dispatch("addCat", {
                        cat: newStuff,
                        url: this.$store.state.url,
                    });
                    this.newStuff = null;
                    this.$store.commit("setFilterProducts");
                } else {
                    alert("Please enter a name");
                }
            } else this.$emit("addClick");
        },
        editClick(deta) {
            const det = {
                id: deta.id,
                name: deta.name,
            };
            this.$emit("editClick", det);
        },
        delClick() {
            this.$store.commit("setFilterProducts");
        },
        changeIcon() {
            if (this.filter.length > 0) {
                this.search = false;
            } else {
                this.search = true;
            }
        },
        filterProducts() {
            this.changeIcon();
            this.$store.commit("filterProducts", this.filter);
        },
        close() {
            this.search = true;
            this.filter = "";
        },
        backClick() {
            this.$emit("backClick");
        },
    },
};
</script>

<style scoped>
.manageMain {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 79%;
    width: 100%;
    padding: 0 2%;
}

input {
    background-color: var(--sidebar-color);
    border: none;
    outline: 0;
    width: 85%;
    /* padding-top: 3rem; */
}

.flex-end {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.search {
    background-color: var(--sidebar-color);
    width: 90%;
    padding: 1rem;
}

i {
    font-size: 1.1rem;
    height: 100%;
}

.flex-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 7%;
    height: 100%;
}

.box {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.addProd {
    display: flex;
    width: 60%
}

.productList {
    width: 100%;
    height: 85%;
    padding: 0 8%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

button {
    padding: 0.5rem 5%;
}
</style>
