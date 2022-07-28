<template>
    <div class="flex-box">

        <form class="form" @submit.prevent="submitForm" v-if="selManage === 'products'">

            <div class="field">
                <div class="label">Category</div>
                <div class="input">
                    <select name="category" id="category" v-model="category" @change="categoryChange">
                        <option value="">Select a category</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="field">
                <div class="label">Sub Category</div>
                <div class="input">
                    <select name="subcategory" id="subcategory" v-model="subCategory">
                        <option value="">Select a sub category</option>
                        <option v-for="subCategory in subCategories" :key="subCategory.id" :value="subCategory.name">
                            {{ subCategory.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="field">
                <div class="label">Group</div>
                <div class="input">
                    <select name="group" id="group" v-model="group">
                        <option value="">Select a group</option>
                        <option v-for="group in groups" :key="group.id" :value="group.name">
                            {{ group.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="field">
                <div class="label">Name</div>
                <div class="input">
                    <input type="text" placeholder="Product Name" v-model="productName" />
                </div>
            </div>

            <div class="field">
                <div class="label">Price</div>
                <div class="input">
                    <input type="number" placeholder="Product Price" v-model="productPrice" />
                </div>
            </div>

            <div class="field">
                <div class="label">Quantity</div>
                <div class="input">
                    <input type="number" placeholder="Product Quantity" v-model="productQuantity" />
                </div>
            </div>

            <div class="field">
                <div class="label">Description</div>
                <div class="input">
                    <textarea placeholder="Product Description" v-model="productDescription" />
                </div>
            </div>

            <div class="field">
                <div class="label">Colour</div>
                <div class="input">
                    <select name="colour" id="colour" v-model="productColour">
                        <option value="">Select a colour</option>
                        <option v-for="colour in colours" :key="colour.id" :value="colour.name">
                            {{ colour.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="field">
                <div class="label">Fabric</div>
                <div class="input">
                    <select name="fabric" id="fabric" v-model="productFabric">
                        <option value="">Select a fabric</option>
                        <option v-for="fabric in fabrics" :key="fabric.id" :value="fabric.name">
                            {{ fabric.name }}
                        </option>
                    </select>
                </div>
            </div>

            <br />

            <div class="cfield">
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" value="S" v-model="s" />
                    </div>
                    <div>Small (S)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="L" v-model="l" />
                    </div>
                    <div>Large (L)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="26/28" v-model="s28" />
                    </div>
                    <div>26/28</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="30/32" v-model="s30" />
                    </div>
                    <div>30/32</div>
                </div>
            </div>
            <div class="cfield">
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="M" v-model="m" />
                    </div>
                    <div>Medium (M)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="XL" v-model="xl" />
                    </div>
                    <div>Extra Large (XL)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="28/30" v-model="s29" />
                    </div>
                    <div>28/30</div>
                </div>
                <div class="cbox ">
                    <div>
                        <input type="checkbox" name="size" id="" value="32/34" v-model="xxl" />
                    </div>
                    <div>XXL</div>
                </div>
            </div>
            <div class="cfield">
                <div class="cbox">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="bestSeller" v-model="tag" />
                    </div>
                    <div>Best Selling</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="Sale" v-model="tag" />
                    </div>
                    <div>Sale</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="new" v-model="tag" />
                    </div>
                    <div>New</div>
                </div>
                <div class="cbox ">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="out" v-model="tag" />
                    </div>
                    <div>Out of stock</div>
                </div>
            </div>
            <div class="imggs">
                <div class=" imgs">
                    <div class="files">
                        <div class="label">Image 1</div>
                        <div class="input">
                            <input type="file" @change="handleFileUpload($event, 'img1')" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 2</div>
                        <div class="input">
                            <input type="file" @change="handleFileUpload($event, 'img2')" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 3</div>
                        <div class="input">
                            <input type="file" @change="handleFileUpload($event, 'img3')" />
                        </div>
                    </div>
                </div>

                <div class=" imgs">
                    <div class="files ">
                        <div class="label">Image 4</div>
                        <div class="input">
                            <input type="file" @change="handleFileUpload($event, 'img4')" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 5</div>
                        <div class="input">
                            <input type="file" @change="handleFileUpload($event, 'img5')" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 6</div>
                        <div class="input">
                            <input type="file" @change="handleFileUpload($event, 'img6')" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="field btn">
                <div class="input">
                    <button type="submit" class="sub-btn" role="button">
                        ADD PRODUCT
                    </button>
                </div>
            </div>
        </form>

        <div class="man-imgs" v-if="selManage == 'products'">
            <div v-if="img1">
                <img :src="src + img1" height="200">
                <h4>Image 1</h4>
            </div>
            <div v-if="img2">
                <img :src="src + img2" height="200">
                <h4>Image 2</h4>
            </div>
            <div v-if="img3">
                <img :src="src + img3" height="200">
                <h4>Image 3</h4>
            </div>
            <div v-if="img4">
                <img :src="src + img4" height="200">
                <h4>Image 4</h4>
            </div>
            <div v-if="img5">
                <img :src="src + img5" height="200">
                <h4>Image 5</h4>
            </div>
            <div v-if="img6">
                <img :src="src + img6" height="200">
                <h4>Image 6</h4>
            </div>
        </div>

        <div class="manage" v-if="selManage != 'products'">

            <div class="add">

                <div class="addCat" v-if="selManage === 'categories'">
                    <input type="text" v-model="newCat" placeholder="New category" />
                    <button @click="addCat" class="button-42">ADD</button>
                </div>
                <form action="" @submit.prevent="submitSubCat">
                    <div class="addCat" v-if="selManage === 'sub categories'">
                        <input type="text" v-model="newSubCat" placeholder="New sub category" />
                        <button @click="addSubCat" class="button-42" type="submit">ADD</button>
                    </div>

                    <div class="addCat" v-if="selManage === 'sub categories'">
                        <input type="file" name="file" @change="handleFileUpload($event)" required />
                    </div>
                    <div class="addCat" v-if="selManage === 'sub categories'">
                        <select v-model="subCategory" required>
                            <option value="" disabled>Select a category</option>
                            <option v-for="category in categories" :key="category.id" :value="category.name">
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                </form>
                <div class="addCat" v-if="selManage === 'groups'">
                    <input type="text" v-model="newGroup" placeholder="New group" />
                    <button @click="addGroup" class="button-42" role="button">ADD</button>
                </div>

                <div class="addCat" v-if="selManage === 'colors'">
                    <input type="text" v-model="newColour" placeholder="New colour" /> &nbsp;
                    <input type="color" v-model="colorCode" placeholder="New colour" style="width:15%;" /> &nbsp;
                    <button @click="addColour" class="button-42" role="button">ADD</button>
                </div>

                <div class="addCat" v-if="selManage === 'fabrics'">
                    <input type="text" v-model="newFabric" placeholder="New fabric" />
                    <button @click="addFabric" class="button-42" role="button">ADD</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['sel-manage'],
    data() {
        return {
            categories: [],
            subCategories: [],
            groups: [],
            colours: [],
            fabrics: [],
            category: "",
            subCategory: "",
            group: "",
            productName: null,
            productPrice: null,
            productQuantity: null,
            productDescription: null,
            productColour: "",
            colorCode: "#000000",
            productFabric: "",
            newCat: null,
            newSubCat: null,
            size: [],
            tag: null,
            image: null,
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: '',
            s: false,
            m: false,
            l: false,
            xl: false,
            xxl: false,
            s28: false,
            s29: false,
            s30: false,
            fileName: null,
            src: 'https://files.rdivas.in/',
        };
    },
    computed: {
        host() {
            return this.$store.getters.host;
        },
        token() {
            return this.$store.getters.token;
        }
    },
    async created() {
        if (this.selManage == 'sub categories' || this.selManage == 'products') {
            const fet = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            }
            fetch(this.host + 'get/types/', fet).then((response) => response.json())
                .then((data) => (this.categories = data));
            if (this.selManage == 'products') {
                fetch(this.host + 'get/groups/', fet).then((response) => response.json())
                    .then((data) => (this.groups = data));
                fetch(this.host + 'get/colors/', fet).then((response) => response.json())
                    .then((data) => (this.colours = data));
                fetch(this.host + 'get/fabrics/', fet).then((response) => response.json())
                    .then((data) => (this.fabrics = data));
            }
            else if (this.selManage == 'sub categories') {
                await fetch(this.host + 'get/category/' + this.id, fet).then((response) => response.json())
                    .then((data) => (this.cat = data));
                this.newCat = this.cat.mainCategory.name;
            }
        }
    },
    methods: {
        async handleFileUpload(e, d) {
            if (d) {
                let formData = new FormData()
                const lol = {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + this.token,
                        ContentType: 'multipart/form-data',
                    },
                    body: formData,
                }
                let img = e.target.files[0];
                formData.append('file', img)
                await fetch(this.host + 'upload', lol)
                    .then(response => response.json())
                    .then(data => {
                        if (d == 'img1') {
                            this.img1 = data.fileName
                            return
                        }
                        if (d == 'img2') {
                            this.img2 = data.fileName
                            return
                        }
                        if (d == 'img3') {
                            this.img3 = data.fileName
                            return
                        }
                        if (d == 'img4') {
                            this.img4 = data.fileName
                            return
                        }
                        if (d == 'img5') {
                            this.img5 = data.fileName
                            return
                        }
                        if (d == 'img6') {
                            this.img6 = data.fileName
                            return
                        }
                    })
            }
            this.image = e.target.files[0];
        },
        async submitSubCat() {
            let formData = new FormData()
            formData.append('file', this.image)
            const lol = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + this.token,
                    ContentType: 'multipart/form-data',
                },
                body: formData,
            }
            await fetch(this.host + 'upload', lol)
                .then(response => response.json())
                .then(data => {
                    this.fileName = data.fileName;
                })
            fetch(this.host + 'add/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                },
                body: JSON.stringify({
                    name: this.newSubCat,
                    type: this.subCategory,
                    image: this.fileName
                })
            })
        },
        categoryChange() {
            const fet = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            }
            fetch(`https://baku.rdivas.in/admin/get/category/bytype/${this.category}`, fet)
                .then((response) => response.json())
                .then((data) => (this.subCategories = data));
        },
        unCheck() {
            if (this.tag != null) {
                this.tag = null;
            }
        },
        async submitForm() {
            let product = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + this.token,
                    ContentType: 'multipart/form-data',
                },
                name: this.productName,
                category: this.subCategory,
                description: this.productDescription,
                price: this.productPrice,
                quantity: this.productQuantity,
                group: this.group,
                color: this.productColour,
                fabric: this.productFabric,
                image1: this.img1,
                image2: this.img2,
                image3: this.img3,
                image4: this.img4,
                image5: this.img5,
                image6: this.img6,
                sale: false,
                bestSeller: false,
                S: this.s,
                M: this.m,
                L: this.l,
                XL: this.xl,
                XXL: this.xxl,
                28: this.s28,
                29: this.s29,
                30: this.s30,
            }
            if (this.tag === 'bestSeller') {
                product.bestSeller = true;
            }
            else if (this.tag === 'Sale') {
                product.sale = true;
            }
            await fetch(this.host + 'add/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                },
                body: JSON.stringify(product)
            })
        }
    },
};
</script>

<style scoped>
* {
    outline: none;
    border: none;

}

.flex-box {
    display: flex;
    justify-content: space-between;
}

.checkboxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}



.hid {
    visibility: hidden;
}

.imggs {
    width: 90%;
    display: flex;
    margin: auto;
    align-items: center;
}

body.dark .label,
body.dark .input,
body.dark .cbox,
body.dark input::placeholder,
body.dark textarea::placeholder {
    color: whitesmoke;
}

body.dark input::placeholder,
body.dark textarea::placeholder {
    color: rgb(195, 195, 195);

}

body.dark input,
body.dark option,
body.dark select,
body.dark .optCol option,
body.dark textarea {
    background: rgba(255, 255, 255, 0.185);
    color: whitesmoke;
}

body.dark select option {
    background: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}

body.dark input[type="file"] {
    background-color: var(--body-color);

}

.man-imgs {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
}

.man-imgs div {
    margin-right: 4%;
    width: 25%;
}

.man-imgs div img {
    width: 100%;
}

.man-imgs h4 {
    text-align: center;
}

.manage {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10%;

}

.current {
    height: 20%;
    text-align: center;
    margin-bottom: 4rem;
}

.form {
    width: 60%;
    /* margin: auto; */
    /* border:1px solid black; */
}

.field {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0.2%;
}

.label {
    margin-right: 1rem;
}

.input {
    width: 75%;
}

.des {
    height: 200%;
    align-items: flex-start;
    display: flex;
}

select {
    width: 100%;
    padding: 0.1rem;
}

.form input,
.form textarea {
    width: 100%;
    padding: 0.1rem;
    margin-bottom: auto;
}

input[type="checkbox"],
input[type="radio"] {
    width: 1rem;
    height: 1rem;
    margin: 12% 0.5rem 0 0;
}

.cbox {
    width: 10rem;
    display: flex;
    align-items: flex-start;
}

.files {
    width: max-content;
    display: flex;
    justify-content: space-between;
}

textarea {
    resize: none;
}

.cfield {
    display: flex;
    justify-content: flex-start;
    margin-left: 28%;
    margin-bottom: 2vh;
}

.imgs {
    margin-left: 12%;
}

body.dark .form {
    background-color: var(--body-color);
}

.btn {
    margin-top: 5vh;
}


.sub-btn {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: whitesmoke;
    background: #ad5389;
    background: linear-gradient(0deg,
            rgba(20, 167, 62, 1) 0%,
            rgba(102, 247, 113, 1) 100%);
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.sub-btn:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.sub-btn:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}





.addCat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8%;
}

.addCat input {
    width: 75%;
    padding: 0.1rem;
    border: none;
}

input[type='file'] {
    width: min-content;
    border: none;
    outline: none;
}

.addCat button {
    width: 20%;
    padding: 0.1rem;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
textarea {
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
}

input[type=text]:focus,
input[type=number]:focus,
input[type=email]:focus,
input[type=password]:focus,
textarea:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
}
</style>