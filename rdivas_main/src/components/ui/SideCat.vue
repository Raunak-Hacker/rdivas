<template>
  <div class="link" :class="{ msel: act }">
    <div class="mlinkcategory">
      <div class="name">fd</div>
      <div class="plus" @click="show">
        <i class="bx bx-plus" />
      </div>
    </div>
    <router-link
      @click="subCatId(subcategory.subcategoryid)"
      v-for="subcategory in categories"
      :key="subcategory"
      :to="'/' + category.name + '/' + subcategory.subcategoryid"
    >
      <div class="msubcategory" v-if="subcategory.subcategoryid">
        {{ subcategory.name }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  data() {
    return {
      act: false,
    };
  },
  methods: {
    show() {
      this.act = !this.act;
    },
  },
};
</script>

<style scoped>
.link {
  width: 100%;
  border-bottom: 1px solid #767676;
  padding: 0.2rem 0.5rem;
}

.mlinkcategory {
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-transform: capitalize;
}

.msubcategory {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  margin-left: 10%;
  text-transform: capitalize;
  border-top: 1px solid #767676;
}

.msel {
  background-color: #e8e8e8;
}
</style>
