<template>
  <div class="product">
    <div class="dets">
      <div class="img">
        <img :src="img" alt="" />
      </div>
      <div class="prod-info">
        <label>{{ name }}</label>
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
// import { emit } from 'process';

export default {
  props: ["id", "name", "img", "size", "color", "price", "qty"],
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
  width: 25%;
  height: 100%;
  margin-right: 5%;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.prod-info {
  width: 65%;
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

  .img {
    margin-right: 1rem;
  }
  .img img {
    width: 100%;
    height: 12.5vh;
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
