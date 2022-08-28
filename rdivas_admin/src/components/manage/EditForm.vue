<template>
  <div class="flex-box">
    <form class="form" @submit.prevent="submitForm" v-if="selManage == 'products'">
      <div class="field">
        <div class="label">Category</div>
        <div class="input">
          <select
            name="category"
            id="category"
            v-model="category"
            @change="categoryChange"
          >
            <option :value="prodType" disabled>{{ prodType }}</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="label">Sub Category</div>
        <div class="input">
          <select name="subcategory" id="subcategory" v-model="subCategory">
            <option :value="product.catagory.name" disabled>
              {{ product.catagory.name }}
            </option>
            <option
              v-for="subCategory in subCategories"
              :key="subCategory.id"
              :value="subCategory.name"
            >
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
          <input type="text" :placeholder="product.name" v-model="productName" />
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
            <option :value="product.color.name" disabled>{{ product.color.name }}</option>
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
            <option :value="product.fabric.name" disabled>
              {{ product.fabric.name }}
            </option>
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
            <input
              type="number"
              name="size"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s"
            />
          </div>
          <div>(S)</div>
        </div>
        <div class="cbox">
          <input type="number" style="max-width: 3rem; margin-right: 1rem" v-model="xl" />
          <div>(XL)</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s28"
            />
          </div>
          <div>28</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s30"
            />
          </div>
          <div>30</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s32"
            />
          </div>
          <div>32</div>
        </div>
      </div>
      <div class="cfield">
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="m"
            />
          </div>
          <div>(M)</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="xxl"
            />
          </div>
          <div>(XXL)</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s34"
            />
          </div>
          <div>34</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s36"
            />
          </div>
          <div>36</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="s38"
            />
          </div>
          <div>38</div>
        </div>
      </div>
      <div class="cfield">
        <div class="cbox">
          <div>
            <input
              type="number"
              style="max-width: 3rem; margin-right: 1rem"
              v-model="l"
            />
          </div>
          <div>(L)</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="radio"
              @click="unCheck"
              name="tag"
              id=""
              value="bestSeller"
              v-model="tag"
            />
          </div>
          <div>Best Selling</div>
        </div>
        <div class="cbox">
          <div>
            <input
              type="radio"
              @click="unCheck"
              name="tag"
              id=""
              value="Sale"
              v-model="tag"
            />
          </div>
          <div>Sale</div>
        </div>
      </div>


      <div class="imggs">
        <div class="imgs">
          <div class="files">
            <div class="label">Image 1</div>
            <div class="input">
              <input type="file" @change="handleFileUpload($event, 'img1')" />
            </div>
          </div>
          <div class="files">
            <div class="label">Image 2</div>
            <div class="input">
              <input type="file" @change="handleFileUpload($event, 'img2')" />
            </div>
          </div>
          <div class="files">
            <div class="label">Image 3</div>
            <div class="input">
              <input type="file" @change="handleFileUpload($event, 'img3')" />
            </div>
          </div>
        </div>

        <div class="imgs">
          <div class="files">
            <div class="label">Image 4</div>
            <div class="input">
              <input type="file" @change="handleFileUpload($event, 'img4')" />
            </div>
          </div>
          <div class="files">
            <div class="label">Image 5</div>
            <div class="input">
              <input type="file" @change="handleFileUpload($event, 'img5')" />
            </div>
          </div>
          <div class="files">
            <div class="label">Image 6</div>
            <div class="input">
              <input type="file" @change="handleFileUpload($event, 'img6')" />
            </div>
          </div>
        </div>
      </div>
      <div class="field btn">
        <div class="input">
          <button type="submit" class="sub-btn">EDIT PRODUCT</button>
          <button class="sub-btn" @click="backClick">BACK</button>
        </div>
      </div>
    </form>

    <div class="man-imgs" v-if="selManage == 'products'">
      <div v-if="img1">
        <img :src="src + img1" height="200" />
        <h4>Image 1</h4>
      </div>
      <div v-if="img2">
        <img :src="src + img2" height="200" />
        <h4>Image 2</h4>
      </div>
      <div v-if="img3">
        <img :src="src + img3" height="200" />
        <h4>Image 3</h4>
      </div>
      <div v-if="img4">
        <img :src="src + img4" height="200" />
        <h4>Image 4</h4>
      </div>
      <div v-if="img5">
        <img :src="src + img5" height="200" />
        <h4>Image 5</h4>
      </div>
      <div v-if="img6">
        <img :src="src + img6" height="200" />
        <h4>Image 6</h4>
      </div>
    </div>

    <div class="manage" v-if="selManage != 'products'">
      <div class="add">
        <div class="editStuff" v-if="selManage === 'categories'">
          <input type="text" v-model="newCat" :placeholder="name" />
          <button @click="editStuff" class="button-42">EDIT</button>
        </div>

        <form action="" @submit.prevent="editStuff">
          <div class="addCat" v-if="selManage === 'sub categories'">
            <select v-model="newCat">
              <option :value="cat.mainCategory.name">{{ cat.mainCategory.name }}</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.name"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <br />

          <div class="addCat" v-if="selManage === 'sub categories'">
            <input type="file" name="file" @change="handleFileUpload($event)" />
          </div>
          <br />

          <img
            :src="src + cat.image"
            alt="sdsd"
            height="350"
            v-if="selManage === 'sub categories'"
          />
          <br />
          <h1 v-if="selManage === 'sub categories'">{{ oldInf }}</h1>
          <br />
          <br />
          <div class="addCat" v-if="selManage === 'sub categories'">
            <input type="text" v-model="newSubCat" placeholder="New sub category" />
            <button class="button-42" type="submit">EDIT</button>
          </div>
        </form>

        <div class="editStuff" v-if="selManage === 'groups'">
          <input type="text" v-model="newCat" :placeholder="name" />
          <button @click="editStuff" class="button-42" role="button">EDIT</button>
        </div>

        <div class="editStuff" v-if="selManage === 'colors'">
          <input type="text" v-model="newCat" placeholder="Edit colour" /> &nbsp;
          <input type="color" v-model="colorCode" style="width: 15%" /> &nbsp;
          <button @click="editStuff" class="button-42" role="button">EDIT</button>
        </div>

        <div class="editStuff" v-if="selManage === 'fabrics'">
          <input type="text" v-model="newCat" placeholder="Edit fabric" />
          <button @click="editStuff" class="button-42" role="button">EDIT</button>
        </div>
      </div>
      <button @click="backClick" class="button-42" role="button">BACK</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "sel-manage", "name"],
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
      colorCode: "",
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
      prodType: null,
      oldInf: "Old Image",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      img6: "",
      s: null,
      m: null,
      l: null,
      xl: null,
      xxl: null,
      s28: null,
      s30: null,
      s32: null,
      s34: null,
      s36: null,
      s38: null,
    };
  },
  async created() {
    if (this.selManage) {
      const fet = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      };
      if (this.selManage == "colors") {
        await fetch(this.host + "get/color/" + this.id, fet)
          .then((response) => response.json())
          .then((data) => (this.colorCode = data.colorCode));
        this.newCat = this.name;
        return;
      }
      fetch(this.host + "get/types/", fet)
        .then((response) => response.json())
        .then((data) => (this.categories = data));
      this.newCat = this.name;
      if (this.selManage == "products") {
        await fetch(this.host + "get/product/" + this.id, fet)
          .then((response) => response.json())
          .then((data) => {
            (this.product = data.productobj),
              (this.category = data.type),
              (this.prodType = data.type);
          });
        this.group = this.product.group.name;
        this.subCategory = this.product.catagory.name;
        this.productDescription = this.product.description;
        this.productPrice = this.product.price;
        this.productName = this.product.name;
        this.productColour = this.product.color.name;
        this.productFabric = this.product.fabric.name;
        this.img1 = this.product.image1;
        this.img2 = this.product.image2;
        this.img3 = this.product.image3;
        this.img4 = this.product.image4;
        this.img5 = this.product.image5;
        this.img6 = this.product.image6;
        this.s = this.product.S;
        this.m = this.product.M;
        this.l = this.product.L;
        this.xl = this.product.XL;
        this.xxl = this.product.XXL;
        this.s28 = this.product.L28;
        this.s30 = this.product.L30;
        this.s32 = this.product.L32;
        this.s34 = this.product.L34;
        this.s36 = this.product.L36;
        this.s38 = this.product.L38;
        if (this.product.BestSeller == true) {
          this.tag = "bestSeller";
        }
        if (this.product.New == true) {
          this.tag = "New";
        }
        if (this.product.Sale == true) {
          this.tag = "Sale";
        }
        // fetch(this.host + 'get/category/bytype/' + this.id, fet).then((response) => response.json())
        //     .then((data) => (this.product = data.productobj));
        // get/category/bytype/:type
        fetch(this.host + "get/categories/", fet)
          .then((response) => response.json())
          .then((data) => (this.subCategories = data));
        fetch(this.host + "get/groups/", fet)
          .then((response) => response.json())
          .then((data) => (this.groups = data));
        fetch(this.host + "get/colors/", fet)
          .then((response) => response.json())
          .then((data) => (this.colours = data));
        fetch(this.host + "get/fabrics/", fet)
          .then((response) => response.json())
          .then((data) => (this.fabrics = data));
      } else if (this.selManage == "sub categories") {
        await fetch(this.host + "get/category/" + this.id, fet)
          .then((response) => response.json())
          .then((data) => (this.cat = data));
        this.newCat = this.cat.mainCategory.name;
        this.newSubCat = this.name;
      }
    }
  },
  computed: {
    host() {
      return this.$store.getters.host;
    },
    token() {
      return this.$store.getters.token;
    },
    src() {
      return this.$store.state.imgHost;
    },
  },
  methods: {
    async handleFileUpload(e, d) {
      this.image = e.target.files[0];
      if (this.selManage == "sub categories") {
        let formData = new FormData();
        formData.append("file", this.image);
        const lol = {
          method: "POST",
          headers: {
            Authorization: "Bearer " + this.token,
            ContentType: "multipart/form-data",
          },
          body: formData,
        };
        await fetch(this.host + "upload", lol)
          .then((response) => response.json())
          .then((data) => {
            this.cat.image = data.fileName;
          });
        this.oldInf = "New Image";
      }

      if (d) {
        let formData = new FormData();
        const lol = {
          method: "POST",
          headers: {
            Authorization: "Bearer " + this.token,
            ContentType: "multipart/form-data",
          },
          body: formData,
        };
        let img = e.target.files[0];
        formData.append("file", img);
        await fetch(this.host + "upload", lol)
          .then((response) => response.json())
          .then((data) => {
            if (d == "img1") {
              this.img1 = data.fileName;
              return;
            }
            if (d == "img2") {
              this.img2 = data.fileName;
              return;
            }
            if (d == "img3") {
              this.img3 = data.fileName;
              return;
            }
            if (d == "img4") {
              this.img4 = data.fileName;
              return;
            }
            if (d == "img5") {
              this.img5 = data.fileName;
              return;
            }
            if (d == "img6") {
              this.img6 = data.fileName;
              return;
            }
          });
      }
    },
    async editStuff() {
      let details = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({ id: this.id, name: this.newCat }),
      };
      if (this.selManage == "categories") {
        this.url = "type";
      } else if (this.selManage == "sub categories") {
        this.url = "category";
        details = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            id: this.id,
            name: this.newSubCat,
            type: this.newCat,
            image: this.cat.image,
          }),
        };
      } else if (this.selManage == "groups") {
        this.url = "group";
      } else if (this.selManage == "fabrics") {
        this.url = "fabric";
      } else if (this.selManage == "colors") {
        this.url = "color";
        details = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            id: this.id,
            name: this.newCat,
            colorCode: this.colorCode,
          }),
        };
      }
      await fetch(this.host + "edit/" + this.url, details);
      await this.$store.dispatch("fetchStuff", this.$store.state.url);
      this.$emit("edited");
    },
    backClick() {
      this.$emit("back");
    },
    categoryChange() {
      const fet = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      };
      fetch(`${this.host}get/category/bytype/${this.category}`, fet)
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
        name: this.productName,
        category: this.subCategory,
        description: this.productDescription,
        price: this.productPrice,
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
        L28: this.s28,
        L30: this.s30,
        L32: this.s32,
        L34: this.s34,
        L36: this.s36,
        L38: this.s38,
        id: this.id,
      };
      if (this.tag === "bestSeller") {
        product.bestSeller = true;
      } else if (this.tag === "Sale") {
        product.sale = true;
      }
      // const resp =
      await fetch(this.host + "edit/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
        body: JSON.stringify(product),
      });
      await this.$store.dispatch("fetchStuff", this.$store.state.url);
      this.$emit("edited");
    },
  },
};
</script>

<style scoped>
body.dark * {
  color: rgba(245, 245, 245, 0.705);
}
* {
  outline: none;
  border: none;
}

.flex-box {
  display: flex;
  justify-content: space-between;
  background-color: var(--body-color);
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
  color: rgba(245, 245, 245, 0.705);
}

body.dark input::placeholder,
body.dark textarea::placeholder {
  color: rgba(245, 245, 245, 0.705);
}

body.dark input,
body.dark option,
body.dark select,
body.dark .optCol option,
body.dark textarea {
  background: rgba(255, 255, 255, 0.185);
  color: rgba(245, 245, 245, 0.705);
}

body.dark select option {
  background: rgba(0, 0, 0, 0.7);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  color: rgba(245, 245, 245, 0.705);
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
  object-fit: contain;
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
.tS input {
  width: 0.5rem;
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
  display: flex;
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
  width: 22%;
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
  margin-left: 24%;
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
  background: linear-gradient(0deg, rgba(20, 167, 62, 1) 0%, rgba(102, 247, 113, 1) 100%);
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right: 1rem;
}

.sub-btn:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.sub-btn:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}

.editStuff {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8%;
}

.editStuff input {
  width: 75%;
  padding: 0.1rem;
  border: none;
}

input[type="file"] {
  width: min-content;
  border: none;
  outline: none;
}

.editStuff button {
  width: 20%;
  padding: 0.1rem;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
textarea {
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
}
</style>
