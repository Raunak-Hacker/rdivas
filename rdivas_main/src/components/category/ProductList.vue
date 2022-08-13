<template>
  <div class="productTops">
    <div class="sort" @click="myFunction">
      <small>Sort By</small>
      <div class="dropdown">
        <button class="dropbtn">{{ sortBy }}</button>
        <div id="myDropdown" class="dropdown-content" v-if="dropdown">
          <a @click="sort('Relevance')" v-if="sortBy != 'Relevance'">Relevance</a>
          <a @click="sort('lth')" v-if="sortBy != 'Price: Low to High'"
            >Price: Low to High</a
          >
          <a @click="sort('htl')" v-if="sortBy != 'Price: High to Low'"
            >Price: High to Low</a
          >
        </div>
      </div>
    </div>
    <div class="flex-wrap">
      <div class="card" v-for="product in filteredProds" :key="product.id">
        <cloth-card
          :id="product.id"
          :name="product.name"
          :imgUrl="imgHost + product.image"
          :price="product.sellingPrice"
          :best="product.BestSeller"
          :sale="product.Sale"
          :discount="product.price"
          :color="product.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
      upHere: false,
      // sortBy: "Price: Low to High",
      sortBy: "Relevance",
    };
  },

  computed: {
    filteredProds() {
      return this.$store.getters.filteredProds;
    },
    imgHost() {
      return this.$store.getters.imgHost;
    },
  },
  methods: {
    myFunction() {
      this.dropdown = !this.dropdown;
    },
    sort(val) {
      if (val == "lth") {
        console.log("lth");
        this.sortBy = "Price: Low to High";
        this.$store.commit("sortProducts", val);
      } else if (val == "htl") {
        this.sortBy = "Price: High to Low";
        this.$store.commit("sortProducts", val);
      } else if (val == "Relevance") {
        this.sortBy = "Relevance";
        this.$store.commit("sortProducts", val);
      }
    },
  },
};
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
  display: block;
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
  width: 100%;
  padding: 1%;
  /* border: 1px solid black; */
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.card {
  width: 23%;
  height: 35%;
  margin: 1%;
}

@media screen and (max-width: 768px) {
  .productTops {
    margin-top: 0.5rem;
  }
  .card {
    width: 49%;
    height: 25%;
    margin: 0.5%;
  }

  .sort {
    display: none;
  }

  .dropdown {
    width: 60%;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .dropdown-content {
    width: 100%;
    z-index: -1;
  }
}
</style>
