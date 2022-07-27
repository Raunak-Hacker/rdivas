<template>
  <!-- <keep-alive> -->
  <component v-if="sel" :is="selectedComponent" @add-click="addProdClicked" @edit-click="editProdClicked" :id="id"
    :name="name" :sel-manage="selMan" :filteredProds="filteredProducts" :prods="products" @add-cat="addCat" />
  <transition appear v-else>
    <section class="man-page">
      <div class="boxes">
        <div class="box button-42" @click="selMan = 'categories'">Categories</div>
        <div class="box button-42" @click="selMan = 'sub categories'">Sub Categories</div>
        <div class="box button-42" @click="selMan = 'groups'">Groups</div>
        <div class="box button-42" @click="selMan = 'products'">Products</div>
        <div class="box button-42" @click="selMan = 'colors'">Colors</div>
        <div class="box button-42" @click="selMan = 'fabrics'">Fabrics</div>
      </div>
    </section>
  </transition>

  <!-- </keep-alive> -->
</template>

<script>
import AddForm from '@/components/manage/AddForm.vue'
import MainPage from '@/components/manage/MainPage.vue'
import EditForm from '@/components/manage/EditForm.vue'

export default {
  components: {
    AddForm,
    EditForm,
    MainPage
  },
  data() {
    return {
      products: [],
      filteredProds: [],
      addClick: false,
      editClick: false,
      sel: false,
      selectedComponent: 'main-page',
      id: null,
      selMan: null,
      name: null,
      url: null,
      host: 'http://localhost:6969/admin/get/',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgzMzM0OCwiZXhwIjoxNjU4OTE5NzQ4fQ.KZgoBbsDKNtNLG-VjllZtFU4vTI3lMbdz8QsXWnCqfE'
    }
  },
  watch: {
    selMan(val) {
      if (val === 'categories') {
        const selMan = 'types'
        this.url = this.host + selMan
        this.fetchStuff();
      } else if (val === 'sub categories') {
        const selMan = 'categories'
        this.url = this.host + selMan
        this.fetchStuff();
      } else if (val === 'groups') {
        this.url = this.host + val
        this.fetchStuff();
      } else if (val === 'products') {
        this.url = this.host + val
        this.fetchStuff();
      } else if (val === 'colors') {
        this.url = this.host + val
        this.fetchStuff();
      } else if (val === 'fabrics') {
        this.url = this.host + val
        this.fetchStuff();
      }
    }
  },
  methods: {
    async fetchStuff() {
      const response = await fetch(this.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      });
      const data = await response.json();
      this.products = data;
      this.filteredProducts = data;
      this.sel = true;
    },
    async addCat(cat) {
      await fetch('http://localhost:6969/admin/add/' + cat.sel, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        },
        body: JSON.stringify({ name: cat.name })
      });
      // const data = await response.json();
      // console.log(data);
    },
    addProdClicked() {
      this.selectedComponent = 'add-form';
    },
    editProdClicked(deta) {
      this.selectedComponent = 'edit-form';
      this.id = deta.id;
      this.name = deta.name;
      console.log(this.name);
      console.log(this.id);
    },
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  },
}
</script>
<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all .5s ease-in-out;
}

.v-enter-to,
.v-leave-active {
  opacity: 1;
}

.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  height: 100%;
  font-size: larger;
}

.box {
  height: 30%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

.man-page {
  height: 75%;
}
</style>
