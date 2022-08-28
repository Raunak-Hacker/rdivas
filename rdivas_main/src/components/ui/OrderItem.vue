<template>
  <div class="product">
    <div class="dets">
      <div class="img" @click="$router.push('/product/' + productId)" >
        <img :src="img" alt="" />
      </div>
      <div class="prod-info">
        <label @click="$router.push('/product/' + productId)">{{ name }}</label>
        <strong> ₹{{ price }}</strong>
        <small>
          <label for="">Size: </label>{{ size }} <label for="">Color: </label>{{ color }}
          <label for=""> Qty: </label>{{ qty }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "img", "size", "color", "price", "qty", 'productId'],
  created() {},
  data() {
    return {
      quantity: null,
    };
  },
  computed: {
    offer() {
      return ((this.price - this.selprice) * this.qty).toFixed(2);
    },
  },
  methods: {
    async removeItem() {
      const product = {
        prodId: this.id,
        quantity: -this.qty,
        size: this.size,
        color: this.color,
      };
      await this.$store.dispatch("addToCart", product);
    },
    async setQuantity(quantity) {
      const product = {
        prodId: this.id,
        quantity: quantity,
        size: this.size,
        color: this.color,
      };
      await this.$store.dispatch("addToCart", product);
    },
  },
  watch: {},
};
</script>

<style scoped>
.product {
  height: 22vh;
  width: 100%;
  padding: 1.5% 0;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(128, 128, 128, 0.26);
  border-right: 1px solid rgba(128, 128, 128, 0.26);
  border-left: 1px solid rgba(128, 128, 128, 0.26);
  /* background-color: white; */
}

.dets {
  /* width: 100%; */
  height: 100%;
  display: flex;
}

.img {
  min-width: 8.2rem;
  max-width: 8.2rem;
  height: 100%;
  margin: 0 1rem;
}
.img img {
  width: 100%;
  height: 100%;
}

.prod-info {
  max-width: 75%;
  height: 100%;
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(102, 102, 102);
}

.prod-info label {
  font-size: small;
  font-weight: 600;
  text-transform: capitalize;
  color: #000;
}
.prod-info strong {
  font-weight: 600;
  margin: 5%;
  color: #000;
  font-family: "Montserrat", sans-serif;
}

.mob {
  display: none;
}

@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mob {
    display: block;
  }

  .product {
    width: 100%;
    height: max-content;
  }


  .prod-info {
    max-width: 60%;
  }
  .img {
    min-width: 25%;
    max-width: 22%;
    height: 6rem;
    margin: 0 0.5rem;
    margin-right: 1rem;
    
  }
  .img img {
    width: 100%;
    height: 100%;
  }
  .dets {
    width: 100%;
  }

  .prod-info {
    flex-direction: column;
    justify-content: center;
    /* height: 7rem; */
  }

  .prod-info label {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
