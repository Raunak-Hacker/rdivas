<template>
  <section class="orderPg">
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
              :placeholder="'Search in comments ...'"
            />
            <i v-if="search" class="bx bx-search icon" />
            <i v-else class="bx bx-x icon" @click="close" />
          </div>
        </div>
        <div class="box">
          <h2 style="text-transform: capitalize">Manage Comments</h2>
        </div>
        <div class="box" />
      </div>
    </div>

    <div class="cards">
      <div class="card" v-for="review in reviews" :key="review.id">
        <div class="card-head" :class="{delist: review.status != 'approved'}">
          <div class="order-det">
            <div class="order-id">
              <strong for="Order">{{ Number(review.rating).toFixed(1) }}</strong> &nbsp;<i
                class="bx bxs-star"
              />
            </div>
            <small class="order-time"> Commented on {{ review.createdAt }} </small>
          </div>
          <div class="btn" v-if="review.status == 'approved'">
            <button @click="delCom(review.id)"><i class="bx bx-trash" /></button>
          </div>
          <div class="btn" v-else style="width: max-content">
            <strong style="width: max-content">De-listed</strong>
          </div>
        </div>
        <div class="card-bot">
          <div class="name"><strong>Comment No: </strong> &nbsp; {{ review.id }}</div>
          <br />
          <div class="name"><strong>Name: </strong> &nbsp; {{ review.name }}</div>
          <br />
          <div class="name"><strong>Comment: </strong> &nbsp; {{ review.review }}</div>
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
      rReviews: [],
      filter: "",
      search: true,
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
        this.$store.getters.host + "get/reviews?page=1&limit=10000",
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
      this.rReviews = data;
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
      if (this.filter.length > 0) {
        this.reviews = this.rReviews.filter((review) => {
          return review.review.toLowerCase().includes(this.filter.toLowerCase());
        });
      } else {
        this.reviews = this.rReviews;
      }
    },
    close() {
      this.search = true;
      this.filter = "";
    },
  },
  async created() {
    await this.getReviews();
  },
};
</script>

<style scoped>
body.dark label,
body.dark small,
body.dark strong,
body.dark .name,
body.dark i {
  color: rgba(245, 245, 245, 0.692);
}
body.dark .card-bot,
body.dark .card-head {
  background-color: #242526;
}
.orderPg {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  min-height: 86vh;
  background-color: var(--body-color);
  overflow-x: hidden;
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
  width: 90vw;
  margin-left: -10%;
  height: 18vh;
  position: sticky;
  top: -2vh;
  margin-bottom: 5vh;
  background-color: var(--body-color);
}

.search {
  background-color: var(--sidebar-color);
  width: 90%;
  padding: 1rem;
}

.search i {
  font-size: 1.1rem;
  height: 100%;
}

.flex-box {
  display: flex;
  align-items: center;
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
.delist {
  background-color: rgba(218, 218, 218, 0.527);
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
