<template>
  <div class="product" >
    <div class="dets">
      <div class="img">
        <img :src="img" alt="" />
      </div>
      <div class="prod-info">
        <label>{{ name }}</label>
        <small><label for="">Size: </label>{{ size }}</small>
        <small><label for="">Color: </label>{{ color }}</small>
        <small class="mob"><label for="">Price: </label>₹{{ price }}</small>
      </div>
    </div>
    <div class="flex-prod">
      <div class="qty">
        <div class="in-boxes count" style="border: 1px solid rgba(0, 0, 0, 0.212)">
          <div class="in-box" @click="setQuantity(-1)" style="border: none; margin: 0">
            <i class="bx bx-minus" />
          </div>
          <div class="in-box" style="border: none; cursor: default">
            <small>{{ qty }}</small>
          </div>
          <div class="in-box" @click="setQuantity(1)" style="border: none">
            <i class="bx bx-plus" />
          </div>
        </div>
      </div>
      <div class="price desktop">
        <label for="price">₹{{ price }}</label>
      </div>
      <div class=" offer desktop">
        <label for="offer" style="color: red">-₹{{ offer }}</label>
      </div>
      <div class="total desktop">
        <div class="del" @click="removeItem"><i class="bx bx-x" /></div>
        <label for="total">₹{{ total }}</label>
      </div>

      <!-- mobile sec  -->

      <div class="box total mob">
        <label for="total">₹{{ total }}</label>
      </div>
      <div class="box offer mob">
        <div class="del" @click="removeItem"><i class="bx bx-x" /></div>
        <label for="offer" style="color: red">-₹{{ offer }}</label>
      </div>


    </div>
  </div>
</template>

<script>
// import { emit } from 'process';

export default {
  props: [
    "id",
    "name",
    "img",
    "size",
    "color",
    "total",
    "price",
    "qty",
    "selprice",
    "items",
  ],
  created() {
  },
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
  height: 33.33%;
  padding: 1% 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.56);
}

.dets {
  width: 43%;
  height: 100%;
  display: flex;
}

.img {
  width: 25%;
  height: 100%;
}

.del {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-end;
}

.del i {
  font-size: 1.3rem;
  color: var(--left-login);
}

.total {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
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

.flex-prod {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 100%;
}

.flex-prod label {
  font-weight: 600;
}

.count i {
  color: rgba(0, 0, 0, 0.505);
  font-size: large;
}

.in-boxes {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: max-content;
  margin-left: 2.2rem;
}

.in-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 4%;
  border: 1px solid rgba(0, 0, 0, 0.212);
  height: 2rem;
  width: 1.7rem;
  cursor: pointer;
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
    margin-top: .5rem ;
    padding-bottom: .5rem ;
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
    width: 64%;

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

  .flex-prod {
    flex-direction: column-reverse;
    width: 35%;
    height: 100%;
    font-size: small;
  }

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
