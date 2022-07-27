<template>
    <section class="manageMain">
        <div class="flex-end">
            <div class="flex-box">
                <div class="box ">
                    <div class="search">
                        <input type="text" v-model="filter" @keyup="filterProducts" @focusin="changeIcon"
                            @focusout="changeIcon" style="text-transform:capitalise"
                            :placeholder="'Search in ' + selManage + ' ...'">
                        <i v-if="search" class='bx bx-search icon' />
                        <i v-else class='bx bx-x icon' @click="close" />
                    </div>
                </div>
                <div class="box">
                    <h2 style="text-transform:capitalize">Manage {{ selManage }}</h2>
                </div>
                <div class="box">
                    <input
                        v-if="selManage === 'categories' || selManage === 'groups' || selManage === 'colors' || selManage === 'fabrics'"
                        type="text" v-model="newStuff" :placeholder="'New ' + selManage">
                    <input type="color" v-model="colorCode" placeholder="Edit colour" style="width:15%;"
                        v-if="selManage === 'colors'" /> &nbsp;

                    <div class="addProd">
                        <button class="button-42" @click="addClick" style="text-transform:uppercase ">ADD {{ selManage
                        }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="productList">
            <the-product v-for="product in filteredProducts" :key="product.id" :id="product.id" :name="product.name"
                :sel-manage="selManage" @edit-clicked="editClick" :colorCode="product.colorCode" />
        </div>
    </section>
</template>

<script>
import TheProduct from '@/components/manage/TheProduct.vue'
export default {
    props: ['sel-manage', 'prods', 'filteredProds'],
    components: {
        TheProduct
    },
    created() {
        this.products = this.prods
        this.filteredProducts = this.filteredProds
    },
    data() {
        return {
            products: [],
            search: true,
            filter: '',
            filteredProducts: [],
            newStuff: null,
        }
    },
    methods: {
        addClick() {
            if (this.selManage === 'categories' || this.selManage === 'groups' || this.selManage === 'colors' || this.selManage === 'fabrics') {
                if (this.newStuff) {
                    let stuff = null;
                    let newStuff = null;
                    if (this.selManage === 'categories') {
                        stuff = 'type'
                    }
                    else if (this.selManage === 'groups') {
                        stuff = 'group'
                    }
                    else if (this.selManage === 'fabrics') {
                        stuff = 'fabric'
                    }
                    newStuff = {
                        name: this.newStuff,
                        sel: stuff
                    }
                    if (this.selManage === 'colors') {
                        stuff = 'color';
                        newStuff = {
                            name: this.newStuff,
                            sel: stuff
                        }
                    }
                    this.$emit('addCat', newStuff)
                    this.newStuff = null
                } else {
                    alert('Please enter a name')
                }
            }
            else this.$emit('addClick');
        },
        editClick(deta) {
            const det = {
                id: deta.id,
                name: deta.name
            }
            this.$emit('editClick', det);

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
            if (this.filter.length > 0) {
                this.filteredProducts = this.products.filter(product => {
                    return product.name.toLowerCase().includes(this.filter.toLowerCase())
                })
            } else {
                this.filteredProducts = this.products;
            }
        },
        close() {
            this.search = true;
            this.filter = '';
        }
    }
}
</script>

<style scoped>
.manageMain {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    height: 10%;
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
    width: 75%;
    height: 100%;
}

.box {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
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