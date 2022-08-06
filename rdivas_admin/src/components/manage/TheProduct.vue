<template>
    <div class="product">
        <div class="name">{{ name }} </div>
        <input type="color" :value="colorCode" style="width:15%;" v-if="selManage === 'colors'" /> &nbsp;
        <div class="man">
            <div class="btn">
                <button class="button-42" @click="editClicked">Edit</button>
            </div>
            <div class="btn">
                <button class="button-42" @click="delClicked">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['name', 'id', 'sel-manage', 'colorCode'],
    computed: {
        host() {
            return this.$store.getters.host;
        },
        token() {
            return this.$store.getters.token;
        }
    },
    methods: {
        editClicked() {
            const det = {
                id: this.id,
                name: this.name
            }
            this.$emit('editClicked', det);
        },
        async delClicked() {
            if (confirm('Are you sure you want to delete')) {
                let url = null
                let details = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.token}`
                    },
                }
                if (this.selManage == 'categories') {
                    url = 'type/';
                }
                else if (this.selManage == 'sub categories') {
                    url = 'category/';
                }
                else if (this.selManage == 'products') {
                    url = 'product/';
                }
                else if (this.selManage == 'groups') {
                    url = 'group/';
                } else if (this.selManage == 'fabrics') {
                    url = 'fabric/';
                } else if (this.selManage == 'colors') {
                    url = 'color/';
                }
                await fetch(this.host + 'delete/' + url + this.id, details);
                await this.$store.dispatch('fetchStuff', this.$store.state.url);
                this.$emit('delClicked');
            }
        }
    }
}
</script>

<style scoped>
.product {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 15%;
    border: 1px solid black;
    padding: 1.5%;
    margin: 1% 0;
}

body.dark .product {
    border: 1px solid rgba(194, 193, 193, 0.686);
}

.man {
    display: flex;
    justify-content: space-around;
    width: 15%;
}

.btn button {
    padding: 0.5rem 1rem;
}
</style>