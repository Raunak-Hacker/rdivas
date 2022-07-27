<template>
    <div class="flex-box">
        <form class="form" @submit.prevent="submitForm" v-if="selManage == 'products'">
            <!-- <div class="field">
                <div class="label">Category</div>
                <div class="input">
                    <select name="category" id="category" v-model="category" @change="categoryChange">
                        <option :value="product.type" disabled>{{ product.category }}</option>
                        <option v-for="category in categories" :key="category.id" :value="category.name">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div> -->
            <div class="field">
                <div class="label">Sub Category</div>
                <div class="input">
                    <select name="subcategory" id="subcategory" v-model="subCategory">
                        <option :value="product.catagory.name" disabled>{{ product.catagory.name }}</option>
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
                        <option :value="product.group.name" disabled>{{ product.group.name }}</option>
                        <option v-for="group in groups" :key="group.id" :value="group.name">
                            {{ group.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="field">
                <div class="label">Name</div>
                <div class="input">
                    <input type="text"  :placeholder="product.name" v-model="productName">
                </div>
            </div>
            <div class="field">
                <div class="label">Price</div>
                <div class="input">
                    <input type="number" :placeholder="product.price" v-model="productPrice" />
                </div>
            </div>
            <div class="field">
                <div class="label">Description</div>
                <div class="input">
                    <textarea :placeholder="product.description" v-model="productDescription" />
                </div>
            </div>
            <div class="field">
                <div class="label">Colour</div>
                <div class="input">
                    <select name="colour" id="colour" v-model="productColour">
                        <option :value="product.color.name">{{ product.color.name }}</option>
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
                        <option :value="product.fabric.name">{{ product.fabric.name }}</option>
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
                        <input type="checkbox" name="size" value="S" v-model="size" />
                    </div>
                    <div>Small (S)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="L" v-model="size" />
                    </div>
                    <div>Large (L)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="26/28" v-model="size" />
                    </div>
                    <div>26/28</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="30/32" v-model="size" />
                    </div>
                    <div>30/32</div>
                </div>
            </div>
            <div class="cfield">
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="M" v-model="size" />
                    </div>
                    <div>Medium (M)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="XL" v-model="size" />
                    </div>
                    <div>Extra Large (XL)</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="checkbox" name="size" id="" value="28/30" v-model="size" />
                    </div>
                    <div>28/30</div>
                </div>
                <div class="cbox ">
                    <div>
                        <input type="checkbox" name="size" id="" value="32/34" v-model="size" />
                    </div>
                    <div>32/34</div>
                </div>
            </div>
            <div class="cfield">
                <div class="cbox">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="bestselling" v-model="tag" />
                    </div>
                    <div>Best Selling</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="sale" v-model="tag" />
                    </div>
                    <div>Sale</div>
                </div>
                <div class="cbox">
                    <div>
                        <input type="radio" @click="unCheck" name="tag" id="" value="" v-model="tag" />
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
                    <div class="files ">
                        <div class="label">Image 1</div>
                        <div class="input">
                            <input type="file" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 2</div>
                        <div class="input">
                            <input type="file" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 3</div>
                        <div class="input">
                            <input type="file" />
                        </div>
                    </div>
                </div>

                <div class=" imgs">
                    <div class="files ">
                        <div class="label">Image 4</div>
                        <div class="input">
                            <input type="file" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 5</div>
                        <div class="input">
                            <input type="file" />
                        </div>
                    </div>
                    <div class="files ">
                        <div class="label">Image 6</div>
                        <div class="input">
                            <input type="file" />
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
        
        <div class="manage"  v-if="selManage != 'products'">

            <div class="add">

                <div class="addStuff" v-if="selManage === 'categories'">
                    <input type="text" v-model="newCat" :placeholder="name" />
                    <button @click="addStuff" class="button-42">EDIT</button>
                </div>

                <form action="" @submit.prevent="addStuff">

                    <div class="addCat" v-if="selManage === 'sub categories'">
                        <select v-model="newCat" required>
                            <option :value="cat.mainCategory.name">{{ cat.mainCategory.name }}</option>
                            <option v-for="category in categories" :key="category.id" :value="category.name">
                                {{ category.name }}
                            </option>
                        </select>
                    </div> <br>

                    <div class="addCat" v-if="selManage === 'sub categories'">
                        <input type="file" name="file" @change="handleFileUpload($event)" required />
                    </div> <br>


                    <img :src="src + cat.image" alt="sdsd" height="350" v-if="selManage === 'sub categories'"> <br>
                    <h1>{{ oldInf }}</h1> <br> <br>
                    <div class="addCat" v-if="selManage === 'sub categories'">
                        <input type="text" v-model="newSubCat" placeholder="New sub category" />
                        <button class="button-42" type="submit">EDIT</button>
                    </div>

                </form>

                <div class="addStuff" v-if="selManage === 'groups'">
                    <input type="text" v-model="newCat" :placeholder="name" />
                    <button @click="addStuff" class="button-42" role="button">EDIT</button>
                </div>

                <div class="addStuff" v-if="selManage === 'products'">
                    <input type="text" v-model="newColour" placeholder="Edit colour" /> &nbsp;
                    <input type="color" v-model="colorCode" placeholder="Edit colour" style="width:15%;" /> &nbsp;
                    <button @click="addColour" class="button-42" role="button">EDIT</button>
                </div>

                <div class="addStuff" v-if="selManage === 'products'">
                    <input type="text" v-model="newFabric" placeholder="Edit fabric" />
                    <button @click="addFabric" class="button-42" role="button">EDIT</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'sel-manage', 'name'],
    data() {
        return {
            categories: [],
            subCategories: [],
            groups: [],
            colours: [],
            fabrics: [],
            category: "",
            cat: null,
            subCategory: "",
            group: "",
            productName: "",
            productPrice: null,
            productDescription: null,
            productColour: "",
            colorCode: "#000000",
            productFabric: "",
            newCat: null,
            newSubCat: null,
            newGroup: null,
            newColour: null,
            newFabric: null,
            size: true,
            tag: null,
            product: null,
            url: null,
            fileName: null,
            image: null,
            oldInf: 'Old Image',
            src: 'https://files.rdivas.in/',
            host: 'http://localhost:6969/admin/',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgzMzM0OCwiZXhwIjoxNjU4OTE5NzQ4fQ.KZgoBbsDKNtNLG-VjllZtFU4vTI3lMbdz8QsXWnCqfE'
        };
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
                await fetch(this.host + 'get/product/' + this.id, fet).then((response) => response.json())
                    .then((data) => (this.product = data.productobj));
                console.log(this.product);
                fetch(this.host + 'get/categories/', fet).then((response) => response.json())
                    .then((data) => (this.subCategories = data));
                fetch(this.host + 'get/groups/', fet).then((response) => response.json())
                    .then((data) => (this.groups = data));
                fetch(this.host + 'get/colours/', fet).then((response) => response.json())
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
    computed: {
        header() {
            return this.$store.getters.header;
        }
    },
    methods: {
        categoryChange() {
            fetch(`http://localhost:6969/admin/get/categories/${this.category}`)
                .then((response) => response.json())
                .then((data) => (this.subCategories = data));
        },
        async handleFileUpload(e) {
            this.image = e.target.files[0];
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
            await fetch('http://localhost:6969/admin/upload', lol)
                .then(response => response.json())
                .then(data => {
                    this.cat.image = data.fileName
                })
            this.oldInf = 'New Image'
        },
        async addStuff() {
            let details = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                },
                body: JSON.stringify({ "id": this.id, name: this.newCat })
            }
            if (this.selManage == 'categories') {
                this.url = 'type';
            }
            else if (this.selManage == 'sub categories') {
                this.url = 'category';
                details = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.token}`
                    },
                    body: JSON.stringify({ "id": this.id, name: this.newSubCat, type: this.newCat, image: this.cat.image })
                }
            }
            else if (this.selManage == 'groups') {
                this.url = 'group';
            }
            // name: this.newColour,
            //colorCode: this.colorCode
            await fetch("http://localhost:6969/admin/edit/" + this.url, details);
            // const response = 
            // const data = await response.json();
            // console.log(data);
        },
        addColour() {
            const newColour = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.newColour,
                    colorCode: this.colorCode
                }),
            };
            fetch("http://localhost:6969/admin/add/color", newColour)
        },
        unCheck() {
            if (this.tag != null) {
                this.tag = null;
            }
        },
        submitForm() {
            const product = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    category: this.category,
                    subCategory: this.subCategory,
                    group: this.group,
                    productName: this.productName,
                    productPrice: this.productPrice,
                    productDescription: this.productDescription,
                    productColour: this.productColour,
                    productFabric: this.productFabric,
                    size: this.size,
                }),
            };
            fetch("http://localhost:6969/admin/add/product", product)
                .then((response) => response.json())
            // .then((data) => {
            //     window.location.reload();
            //     console.log(data);
            // });
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
    /* justify-content: center; */
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
    margin: 0.2rem;
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





.addStuff {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8%;
}

.addStuff input {
    width: 75%;
    padding: 0.1rem;
    border: none;
}

input[type='file'] {
    width: min-content;
    border: none;
    outline: none;
}

.addStuff button {
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