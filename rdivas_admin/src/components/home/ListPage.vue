<template>
  <section class="manageMain">
    <div class="flex-end">
      <div class="flex-box">
        <div class="box">
          <div class="search" style="text-transform: capitalise; width: 85%">
            <input
              type="text"
              v-model="filter"
              @keyup="filterProducts"
              @focusin="changeIcon"
              @focusout="changeIcon"
              style="text-transform: capitalise; width: 90%"
              :placeholder="'Search in ' + name + ' ...'"
            />
            <i v-if="search" class="bx bx-search icon" />
            <i v-else class="bx bx-x icon" @click="close" />
          </div>
        </div>
        <div class="box">
          <h2>Manage {{ name }}</h2>
        </div>
        <div class="box">
          <select
            style="width: 40%; height: 50%; padding: 0 10px"
            v-model="prodId"
            v-if="edit"
          >
            <option value="">Select a cloth</option>
            <option v-for="product in clothes" :key="product.id" :value="product.id">
              {{ product.name }}
            </option>
          </select>
          <input
            style="width: 40%; height: 50%; padding: 0 10px"
            type="text"
            v-model="newStuff"
            placeholder="New List"
            v-else
          />
          &nbsp;

          <div class="addProd">
            <button class="button-42" @click="addClick" style="text-transform: uppercase">
              ADD
            </button>
            <button
              class="button-42"
              @click="backClick"
              style="text-transform: uppercase; margin-left: 1rem"
            >
              <i style="color: whitesmoke; padding-top: 12%" class="bx bx-arrow-back"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="productList">
      <the-product
        v-for="product in filteredProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :sel-manage="selManage"
        :edit="edit"
        @edit-clicked="editClick"
        :colorCode="product.colorCode"
        @del-clicked="delClick"
      />
    </div>
  </section>
</template>

<script>
import TheProduct from "@/components/manage/TheProduct.vue";
export default {
  // props: ["sel-manage"],
  components: {
    TheProduct,
  },
  created() {
    this.$store.commit("setFilterProducts");
  },
  data() {
    return {
      search: true,
      filter: "",
      newStuff: null,
      colorCode: "",
      name: "Listing",
      edit: false,
      prodId: "",
      listId: null,
      clothes: [],
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
      if (!this.edit && !this.newStuff) {
        alert("Please enter a name");
        return;
      } else if (this.edit && !this.prodId) {
        alert("Please select a cloth");
        return;
      }
      let newStuff = null;
      if (this.newStuff) {
        newStuff = {
          name: this.newStuff,
          sel: "listing",
        };
        await this.$store.dispatch("addCat", {
          cat: newStuff,
          url: this.$store.state.url,
        });
        this.newStuff = null;
        this.$store.commit("setFilterProducts");
      } else if (this.prodId) {
        newStuff = {
          listId: this.listId,
          prodId: this.prodId,
          sel: "producttolisting",
        };
        await this.$store.dispatch("addCat", {
          cat: newStuff,
          url: this.$store.state.url,
        });
        this.prodId = "";
        this.getClothes(this.listId);
      }
    },
    editClick(deta) {
      this.name = deta.name;
      this.listId = deta.id;
      this.edit = true;
      const det = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      this.getClothes(deta.id);

      fetch(this.$store.state.host + "get/products/", det)
        .then((res) => res.json())
        .then((data) => {
          this.clothes = data;
        });
    },
    getClothes(id) {
      const det = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      fetch(this.$store.state.host + "get/listing/" + id, det)
        .then((res) => res.json())
        .then((data) => {
          this.$store.state.products = data.listing.products;
          this.$store.state.filteredProducts = data.listing.products;
        });
    },
    async delClick(data) {
      const head = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      if (this.edit) {
        await fetch(
          this.$store.state.host + `remove/productfromlisting/${this.listId}/${data.id}`,
          head
        );
        this.getClothes(this.listId);
        return;
      }
      await fetch(this.$store.state.host + `delete/listing/${this.listId}/`, head);
      await this.$store.dispatch("fetchStuff", this.$store.state.url);
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
    async backClick() {
      if (this.edit) {
        await this.$store.dispatch("fetchStuff", this.$store.state.url);
        this.$store.commit("setFilterProducts");
        this.edit = false;
        this.name = "Listing";
        return;
      }
      this.$emit("backClick");
    },
  },
};
</script>

<style scoped>
.manageMain {
  background-color: var(--body-color);
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
  width: 60%;
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
.box h2 {
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
