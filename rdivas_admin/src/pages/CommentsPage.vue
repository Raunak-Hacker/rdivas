<template>
  <section class="orderPg">
    <div class="cards">
      <div class="card" v-for="review in reviews" :key="review.id">
        <div class="card-head">
          <div class="order-det">
            <div class="order-id">
              <strong for="Order">{{ review.rating }}</strong> &nbsp;<i
                class="bx bxs-star"
              />
            </div>
            <small class="order-time"> Commented on {{ review.createdAt }} </small>
          </div>
          <div class="btn">
            <button @click="delCom(review.id)"><i class="bx bx-trash" /></button>
          </div>
        </div>
        <div class="card-bot">
          <div class="name"><strong>Comment No: </strong> &nbsp; {{ review.id }}</div>
          <br />
          <div class="name"><strong>Name: </strong> &nbsp; {{ review.name }}</div>
          <br />
          <div class="review"><strong>Comment: </strong> &nbsp; {{ review.review }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  computed: {
    imgHost() {
      return this.$store.state.imgHost;
    },
  },
  methods: {
    async delCom(id) {
      await fetch(this.$store.getters.host + `delist/review/${id}/`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.getReviews();
    },
    async getReviews() {
      const response = await fetch(
        this.$store.getters.host + "get/reviews?page=1&limit=10",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
      for (let i = 0; i < data.length; i++) {
        var date = new Date(data[i].createdAt);
        data[i].createdAt = date.toDateString();
      }
      data = data.filter((review) => {
        return review.review != "";
      });
      this.reviews = data;
    },
  },
  async created() {
    await this.getReviews();
  },
};
</script>

<style scoped>
.orderPg {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  min-height: 86vh;
}

.head h1 {
  font-size: 2.3rem;
  font-weight: 500;
  margin-bottom: 2%;
}
.not-f h1 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2%;
}
.not-f {
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card {
  min-height: 12vh;
  width: 100%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 10vh;
}
.card-head {
  background-color: #ffffff;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  padding-left: 2.5%;
}
.order-det {
  display: flex;
  align-items: center;
  width: 75%;
  height: 100%;
}
.order-id {
  width: max-content;
  background-color: rgba(204, 204, 204, 0.658);
  height: 42%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2%;
  color: var(--left-login);
  margin-right: 2%;
}
.order-id i {
  color: black;
}
.order-id strong {
  margin-right: 8%;
  color: black;
}
.card-head .btn {
  width: 7%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-head small {
  color: #8e8e8e;
}
.card-head .btn button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 50%;
  border: none;
  background-color: rgba(254, 151, 1, 255);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  color: white;
}
.card-head .btn i {
  font-size: 1.25rem;
  margin-right: 3%;
  color: var(--white);
}

.card-bot {
  border-top: 1px solid #e6e6e6;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
}

@media (max-width: 768px) {
  .head h1 {
    font-size: 1.7rem;
  }
  .head {
    margin-bottom: 5%;
  }
  .not-f h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  .order-det,
  .card-head {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
  .card-head .btn {
    width: 80%;
    margin: 5% 0;
  }
  .card-head .btn button {
    font-size: small;
    height: 2rem;
  }
  .order-id {
    height: 2rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: 5% 0;
  }
  .order-id {
    font-size: small;
  }
  .card-orders {
    flex-direction: column;
    width: 100%;
  }
  .orders {
    width: 100%;
  }
  .flex-prod {
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.26);
  }
  .box {
    height: 9vh;
  }
  .box strong {
    font-size: 0.9rem;
  }
  .card-bot {
    border: none;
    height: 6vh;
    padding: 0 3.5%;
  }
  .total strong,
  .box small {
    font-size: 0.8rem;
  }
}
</style>
