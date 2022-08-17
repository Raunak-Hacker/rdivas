<template>
  <section class="user-page">
    <div class="cont">
      <i class="bx bx-right-arrow-circle" />
      <router-link to="/orders"> My Orders </router-link>
    </div>
    <div class="box name">
      <div class="card">
        <div class="in-box">
          <label for="name">Name:</label>
          {{ user.name }}
        </div>
        <div class="in-flex">
          <small>edit?</small>
        </div>
      </div>
    </div>
    <div class="box phone">
      <div class="card">
        <div class="in-box">
          <label for="Phone">Phone:</label>
          {{ user.mobile }}
        </div>
        <div class="in-flex">
          <small>edit?</small>
        </div>
      </div>
    </div>

    <div class="box bio">
      <div class="card">
        <div class="in-box">
          <label for="Email">Email:</label>
          {{ user.email }}
        </div>
        <div class="in-flex"></div>
      </div>
    </div>

    <div class="box address">
      <div class="card">
        <div class="in-box add">
          <label for="Address">Address:</label>
          <div class="addresses">
            <div class="in-address" v-for="add in user.addresses" :key="add.id">
              <i @click="delAdd(add.id)" class="bx bx-trash-alt" /> <br />
              <div class="full-add">
                <small
                  >{{ "Mob: " + add.mobile }} <br />{{
                    add.name +
                    ", " +
                    add.address +
                    ", " +
                    add.city +
                    ", " +
                    add.state +
                    " - " +
                    add.pincode
                  }}</small
                >
              </div>
            </div>
            <div class="in-flex mob" v-if="user.addresses.length < 4">
              <small @click="showAdd = true">Add?</small>
            </div>
          </div>
        </div>
        <div class="in-flex des" v-if="user.addresses.length < 4">
          <small @click="showAdd = true">Add?</small>
        </div>
        <the-address :show="showAdd" @close="showAdd = false" />
      </div>
    </div>
  </section>
</template>

<script>
import TheAddress from "@/components/ui/TheAddress.vue";
export default {
  components: { TheAddress },
  data() {
    return {
      check: [],
      token: localStorage.getItem("token"),
      showAdd: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    this.$store.commit("getUser");
  },
    mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  methods: {
    async delAdd(id) {
      if (confirm("Are you sure you want to delete your address?")) {
        await fetch(this.$store.getters.host + "/user/delete/address/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.token,
          },
        });
        this.$store.commit("getUser");
      }
    },
  },
};
</script>

<style scoped>
.user-page {
  height: 86vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2% 5%;
}

.box {
  width: 100%;
  height: 20%;
  padding: 2% 0%;
}

.address {
  height: 40%;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: larger;
  font-weight: bold;
}

.in-box {
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0 5%;
}
.in-box label {
  margin-right: 7%;
}
.add {
  width: max-content;
  height: 100%;
}

.add label {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}

.addresses {
  width: 90%;
  height: 100%;
  display: flex;
}

.in-address {
  max-width: 65%;
  height: 100%;
  padding: 2.5%;
  border: 1px solid rgba(204, 204, 204, 0.527);
  margin-right: 5%;
}
.in-address input[type="checkbox"] {
  height: 1rem;
  width: 1rem;
}
.in-address i {
  float: right;
}
.full-add {
  min-width: 10vw;
}
.full-add small {
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.in-flex {
  width: 10%;
}
.in-flex small {
  cursor: pointer;
}
.cont {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 7rem;
  height: 5%;
  font-weight: bolder;
  color: var(--left-login);
}
.cont a {
  color: var(--left-login);
}

.cont a i {
  font-size: large;
}
.mob {
  display: none;
}

@media screen and (max-width: 768px) {
  .des {
    display: none;
  }

  .box {
    height: 15%;
    padding: 2% 0%;
  }
  .in-box {
    font-size: small;
  }

  label {
    font-size: medium;
  }
  .in-flex {
    width: 18.5%;
  }

  .addresses {
    flex-wrap: wrap;
    width: 100%;
  }
  .address,
  .add {
    height: max-content;
  }
  .address .in-box {
    flex-direction: column;
    align-items: flex-start;
  }
  .in-address {
    width: 47%;
    margin-right: 3%;
    margin-bottom: 2vh;
  }
  .add label {
    height: 4rem;
  }
  .mob {
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: right;
    width: 47%;
    padding-left: 5%;
  }
}
</style>
